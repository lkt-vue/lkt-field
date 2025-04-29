import { defineComponent as ye, computed as J, resolveComponent as he, createBlock as Q, openBlock as O, normalizeClass as Pe, ref as X, watch as ue, withCtx as pe, createCommentVNode as se, resolveDynamicComponent as Nt, mergeProps as Le, createElementBlock as le, createElementVNode as me, toDisplayString as yt, Fragment as He, renderList as et, createVNode as ne, unref as U, normalizeStyle as ml, withDirectives as Ue, vModelCheckbox as co, onMounted as zi, vModelText as Bi, vShow as mt, nextTick as Pt, createTextVNode as Rt, useSlots as Zi, renderSlot as Qe, createStaticVNode as fo, createSlots as Bt, mergeDefaults as ho, isRef as Je, vModelDynamic as po, normalizeProps as zt, guardReactiveProps as Vi } from "vue";
import { stripTags as sn, fill as mo, generateRandomString as go, formatNumber as gl, isEmail as vo } from "lkt-string-tools";
import { httpCall as Ei } from "lkt-http-client";
import { __ as an, currentLanguage as rn, availableLanguages as bo } from "lkt-i18n";
import { extractPropValue as gt, LktSettings as bt, Option as Ti, FieldType as q, LktColor as un, TooltipLocationX as cn, TooltipLocationY as dn, ButtonType as Ut, FieldValidation as Ne, ValidationStatus as Re, MultipleOptionsDisplay as Jt, TableType as fn, booleanFieldTypes as vt, fieldsWithMultipleMode as yo, FieldValidationType as vl, extractI18nValue as Ft, fieldTypesWithoutUndo as _o, fieldTypesWithoutClear as Co, FieldAutoValidationTrigger as wo, textFieldTypes as ko, fieldTypesWithOptions as bl, getDefaultValues as xo, Field as So, ToastPositionX as yl, FileEntityType as We, AccordionType as Hi, AccordionToggleMode as Eo, TablePermission as Kt, ItemCrudMode as _l, ItemCrudView as To, FileEntity as Cl, IconPosition as Lo, AnchorType as zo, MenuEntryType as Bo } from "lkt-vue-kernel";
import { Field as Gu, Option as Ku } from "lkt-vue-kernel";
import { date as Ot } from "lkt-date-tools";
import { openToast as wl } from "lkt-toast";
import { closeModal as No, addModal as kl } from "lkt-modal";
const _e = class _e {
};
_e.defaultEmptyValueSlot = "", _e.customValueSlots = {}, _e.customEditSlots = {}, _e.searchKeyForResource = "query", _e.optionSlots = {}, _e.defaultDateIcon = "lkt-icn-calendar-empty-outline", _e.defaultNumberFeaturedButton = "subtract", _e.undoText = "", _e.clearText = "", _e.i18nText = "", _e.switchEditionOnText = "", _e.switchEditionOffText = "", _e.showPasswordOnText = "", _e.showPasswordOffText = "", _e.dateReadFormat = "", _e.defaultDateReadFormat = "Y-m-d", _e.langDateReadFormat = {
  en: "Y-m-d",
  es: "d/m/Y"
}, _e.acceptTypes = {
  file: "*/*",
  image: "image/*"
}, _e.validationIconSlot = "", _e.validationMessages = {
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
const hn = /* @__PURE__ */ ye({
  __name: "UndoButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, o = e, l = J(() => ee.undoText), a = J(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), c = () => i("click");
    return (f, n) => {
      const b = he("lkt-button");
      return O(), Q(b, {
        text: f.insideEllipsis ? l.value : "",
        title: l.value,
        class: Pe([a.value, "lkt-field--btn-undo"]),
        icon: "lkt-icn-undo",
        onClick: c
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), pn = /* @__PURE__ */ ye({
  __name: "ClearButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, o = e, l = J(() => ee.clearText), a = J(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), c = () => i("click");
    return (f, n) => {
      const b = he("lkt-button");
      return O(), Q(b, {
        text: f.insideEllipsis ? l.value : "",
        title: l.value,
        class: Pe(a.value),
        icon: "lkt-icn-cancel",
        onClick: c
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Pi = /* @__PURE__ */ ye({
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
    const i = t, o = e, l = X(o.modelValue);
    ue(() => o.modelValue, (b) => l.value = b), ue(l, (b) => i("update:modelValue", b));
    const a = J(() => l.value ? ee.showPasswordOnText : ee.showPasswordOffText), c = J(() => l.value === !0 ? "lkt-icn-see" : "lkt-icn-not-see"), f = J(() => o.isFeatured ? "lkt-field--atn-btn" : o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), n = () => i("click");
    return (b, u) => {
      const v = he("lkt-button");
      return O(), Q(v, {
        text: b.insideEllipsis ? a.value : "",
        title: a.value,
        class: Pe(f.value),
        icon: c.value,
        onClick: n,
        checked: l.value,
        "onUpdate:checked": u[0] || (u[0] = (w) => l.value = w),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), mn = /* @__PURE__ */ ye({
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
    const i = t, o = e, l = X(o.modelValue);
    ue(() => o.modelValue, (b) => l.value = b), ue(l, (b) => i("update:modelValue", b));
    const a = J(() => l.value ? ee.switchEditionOnText : ee.switchEditionOffText), c = J(() => l.value === !0 ? "lkt-icon-see" : "lkt-icn-edit"), f = J(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), n = () => i("click");
    return (b, u) => {
      const v = he("lkt-button");
      return O(), Q(v, {
        text: b.insideEllipsis ? a.value : "",
        title: a.value,
        class: Pe(f.value),
        icon: c.value,
        onClick: n,
        checked: l.value,
        "onUpdate:checked": u[0] || (u[0] = (w) => l.value = w),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Ro = /* @__PURE__ */ ye({
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
    const i = t, o = e, l = X(o.showPasswordCheck);
    ue(() => o.showPasswordCheck, (c) => l.value = c), ue(l, (c) => i("update:showPasswordCheck", c));
    const a = X(o.showEditionCheck);
    return ue(() => o.showEditionCheck, (c) => a.value = c), ue(a, (c) => i("update:showEditionCheck", c)), (c, f) => {
      const n = he("lkt-button");
      return O(), Q(n, {
        split: "",
        "split-icon": "lkt-icn-ellipsis-menu-vertical",
        class: "lkt-field--info-btn"
      }, {
        split: pe(({ doClose: b }) => [
          c.showUndo ? (O(), Q(hn, {
            key: 0,
            onClick: f[0] || (f[0] = () => i("undo")),
            "inside-ellipsis": ""
          })) : se("", !0),
          c.showClear ? (O(), Q(pn, {
            key: 1,
            onClick: f[1] || (f[1] = () => i("clear")),
            "inside-ellipsis": ""
          })) : se("", !0),
          c.showPassword ? (O(), Q(Pi, {
            key: 2,
            modelValue: l.value,
            "onUpdate:modelValue": f[2] || (f[2] = (u) => l.value = u),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : se("", !0),
          c.showEdition ? (O(), Q(mn, {
            key: 3,
            modelValue: a.value,
            "onUpdate:modelValue": f[3] || (f[3] = (u) => a.value = u),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : se("", !0)
        ]),
        _: 1
      });
    };
  }
}), xl = /* @__PURE__ */ ye({
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
    const i = t, o = e, l = X(o.modelValue);
    ue(() => o.modelValue, (f) => l.value = f, { deep: !0 }), ue(l, (f) => i("update:modelValue", f), { deep: !0 });
    const a = J(() => ee.i18nText), c = J(() => o.isFeatured ? "lkt-field--atn-btn" : o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (f, n) => {
      const b = he("lkt-button");
      return O(), Q(b, {
        text: f.insideEllipsis ? a.value : "",
        title: a.value,
        class: Pe(c.value),
        icon: "lkt-icn-lang-picker",
        modal: "lkt-field-language-edit",
        "modal-data": { translations: l.value, type: f.type }
      }, null, 8, ["text", "title", "class", "modal-data"]);
    };
  }
}), Ao = (e, t, i) => (e = Number(e), t !== !1 && e < t && (e = t), i !== !1 && e > i && (e = i), e), Li = (e, t) => {
  if (typeof e == "string" && (e = gt(e, t), typeof e == "string" && e.startsWith("__:"))) {
    let i = e.substring(3), o = an(i), l = [];
    for (let a in o) l.push({ value: a, label: o[a] });
    return bt.i18nOptionsFormatter[i] && (l = bt.i18nOptionsFormatter[i](l)), Li(l, t);
  }
  return Array.isArray(e) ? e.length === 0 ? e : e.map((i) => {
    if (typeof i == "object") return new Ti(i);
    if (typeof i == "string" || typeof i == "number")
      return new Ti({
        label: String(i),
        value: i
      });
  }).filter((i) => typeof i < "u") : [];
}, Fi = (e, t = "", i = !0, o = void 0) => {
  if (t === "" && typeof o != "function") return e;
  let l = e;
  const a = String(t).toLowerCase();
  return a !== "" && (l = l.filter((c) => {
    let f = String(c.label).toLowerCase();
    return f.indexOf(a) !== -1 && (i || f !== a);
  })), typeof o == "function" && (l = l.filter((c) => o(c))), l;
}, Yt = (e, t) => {
  if (t !== "")
    return e.find((i) => Array.isArray(t) ? t.includes(i.value) : i.value == t);
}, Io = (e, t, i) => {
  const o = /* @__PURE__ */ new Set(), l = [...e, ...Li(t, i)], a = [];
  return l.forEach((c) => {
    let f = [c.value, c.label].join("-");
    o.has(f) || (a.push(c), o.add(f));
  }), a;
}, Mo = (e, t, i) => {
  if (i) {
    if (Array.isArray(t)) {
      let o = t.findIndex((l) => l == e.value);
      return typeof o > "u" ? !1 : o > -1;
    }
    return !1;
  }
  return e.value == t;
}, Lt = (e, t) => {
  let i = t.findIndex((o) => o == e.value);
  return typeof i > "u" && (i = -1), i;
}, $i = (e) => !(Object.prototype.toString.call(e) === "[object Date]" && isNaN(e)), gn = (e, t) => typeof e > "u" ? "" : (typeof e == "string" && (e = new Date(e)), $i(e) ? Ot(t, e) : ""), Do = /* @__PURE__ */ ye({
  __name: "DropdownButton",
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, o = J(() => ee.undoText), l = J(() => "lkt-field--info-btn"), a = () => i("click");
    return (c, f) => {
      const n = he("lkt-button");
      return O(), Q(n, {
        text: o.value,
        title: o.value,
        class: Pe([l.value, "lkt-field--btn-dropdown"]),
        icon: "lkt-icn-angle-bottom",
        onClick: a,
        tabindex: "-1"
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Vo = {
  key: 0,
  class: "lkt-field--dropdown-option--icon-container"
}, Ho = { class: "lkt-field--dropdown-option--label-container" }, _t = /* @__PURE__ */ ye({
  __name: "DropdownOption",
  props: {
    option: { default: () => new Ti() },
    optionSlot: { default: "" },
    editable: { type: Boolean, default: !1 },
    icon: { type: [String, Function], default: "" },
    text: { type: [String, Function], default: "" },
    customClass: {},
    modal: { type: [String, Function], default: "" },
    modalData: { type: [Object, Function], default: () => ({}) },
    download: { type: [String, Function], default: "" },
    labelFormatter: {},
    isTag: { type: Boolean, default: !1 },
    prop: { default: () => ({}) }
  },
  emits: [
    "click",
    "click-icon"
  ],
  setup(e, { emit: t }) {
    const i = t, o = e, l = J(() => o.option.icon !== "" ? o.option.icon : typeof o.icon == "function" ? o.icon(o.option, o.prop) : o.icon), a = J(() => {
      if (typeof o.text < "u") {
        if (typeof o.text == "function")
          return o.text(o.option, o.prop);
        if (o.text !== "") return o.text;
      }
      return c.value;
    }), c = J(() => typeof o.labelFormatter == "function" ? o.labelFormatter(o.option) : o.option.label), f = J(() => typeof o.customClass == "function" ? o.customClass(o.option) : typeof o.customClass < "u" ? o.customClass : `lkt-opt-${o.option.value}`), n = J(() => {
      if (o.optionSlot && !(typeof ee.optionSlots[o.optionSlot] > "u"))
        return ee.optionSlots[o.optionSlot];
    }), b = J(() => n.value ? n.value : o.isTag ? "lkt-tag" : !o.editable && (o.modal !== "" || o.option.modal !== "") ? "lkt-button" : !o.editable && o.download !== "" ? "lkt-anchor" : "div"), u = J(() => {
      if (b.value === "lkt-button") {
        let S = o.option.modal;
        o.modal && (S = o.modal);
        let E = S;
        return typeof S == "function" && (E = () => S(o.option)), {
          modal: E,
          modalData: o.modalData,
          modalKey: o.option.value,
          icon: l.value
        };
      }
      if (b.value === "lkt-anchor") {
        let S = o.download;
        typeof o.download == "function" ? S = () => o.download(o.option) : o.download.startsWith("prop:") && (S = o.download.substring(5), S = o.option[S]);
        let E = o.download !== "";
        return {
          href: S,
          target: E ? "_blank" : "",
          download: E
        };
      }
      return b.value === "lkt-tag" ? {
        type: "action-icon",
        icon: "lkt-icn-cancel"
      } : {};
    }), v = () => {
      i("click");
    }, w = () => {
      i("click-icon", o.option);
    };
    return (S, E) => {
      const R = he("lkt-tag");
      return O(), Q(Nt(b.value), Le(u.value, {
        class: ["lkt-field--dropdown-option", f.value],
        title: a.value,
        onClick: v,
        onClickIcon: w
      }), {
        default: pe(() => [
          l.value && b.value !== "lkt-button" ? (O(), le("div", Vo, [
            me("i", {
              class: Pe(l.value)
            }, null, 2)
          ])) : se("", !0),
          me("div", Ho, yt(a.value), 1),
          (O(!0), le(He, null, et(S.option.tags, (s) => (O(), Q(R, Le({ ref_for: !0 }, s), null, 16))), 256))
        ]),
        _: 1
      }, 16, ["class", "title"]);
    };
  }
}), Fo = { class: "lkt-field-color--tooltip--rgba-container" }, Oo = { class: "lkt-field-color--tooltip--numeric-input-container" }, Po = { class: "like-lkt-field-label" }, Xt = /* @__PURE__ */ ye({
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
    const i = t, o = e, l = X(o.modelValue);
    return ue(() => o.modelValue, (a) => l.value = a), ue(l, (a) => i("update:modelValue", a)), (a, c) => (O(), le("div", Fo, [
      me("div", Oo, [
        me("label", Po, yt(a.label), 1),
        ne(At, Le({
          modelValue: l.value,
          "onUpdate:modelValue": c[0] || (c[0] = (f) => l.value = f)
        }, {
          type: U(q).Number,
          min: 0,
          max: 255,
          step: 1,
          canStep: !1
        }), null, 16, ["modelValue"])
      ]),
      ne(At, Le({
        class: ["color-range", a.rangeClass],
        modelValue: l.value,
        "onUpdate:modelValue": c[1] || (c[1] = (f) => l.value = f)
      }, {
        type: U(q).Range,
        min: 0,
        max: 255,
        step: 1
      }), null, 16, ["class", "modelValue"])
    ]));
  }
}), Uo = (e, t, i, o) => new un({ r: e, g: t, b: i, a: o }).toString(), Sl = (e) => un.fromHexColor(e), Wo = (e) => e.getContrastFontColor(), Zo = { class: "lkt-grid-1" }, $o = { class: "lkt-field-color--tooltip--rgba-container" }, qo = { class: "lkt-field-color--tooltip--hex-input-container" }, vn = /* @__PURE__ */ ye({
  __name: "ColorInput",
  props: {
    modelValue: { default: "" }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, { emit: t }) {
    const i = t, o = e, l = (R) => {
      if ([0, 1].includes(R.length))
        f.value = 0, n.value = 0, b.value = 0, u.value = 255;
      else if ([7, 9].includes(R.length)) {
        let s = Sl(R);
        f.value = s.r, n.value = s.g, b.value = s.b, u.value = s.a;
      }
    }, a = () => {
      v.value = Uo(
        f.value,
        n.value,
        b.value,
        u.value
      );
    }, c = () => {
      l(v.value), i("change");
    }, f = X(255), n = X(255), b = X(255), u = X(255), v = X(o.modelValue);
    l(v.value), ue([f, n, b, u], a), ue(() => o.modelValue, (R) => v.value = R), ue(v, (R) => i("update:modelValue", R));
    const w = J(() => Wo(Sl(v.value))), S = J(() => v.value === "" || v.value === "#" ? {} : {
      background: v.value,
      "--lkt-btn-bg": v.value,
      color: w.value,
      "--lkt-btn-color": w.value
    }), E = J(() => v.value === "" || v.value === "#" ? {} : {
      "--lkt-field-bg-input": v.value,
      "--lkt-field-color": w.value
    });
    return (R, s) => {
      const r = he("lkt-button");
      return O(), Q(r, {
        class: "lkt-field--toggle-button",
        style: ml(S.value),
        text: v.value,
        type: U(Ut).Tooltip,
        tooltip: {
          class: "lkt-field-color--tooltip",
          locationY: U(dn).Bottom,
          locationX: U(cn).LeftCorner
        }
      }, {
        tooltip: pe(({ doClose: d }) => [
          me("div", Zo, [
            me("div", $o, [
              me("div", qo, [
                s[5] || (s[5] = me("label", { class: "like-lkt-field-label" }, "HEX", -1)),
                ne(At, {
                  modelValue: v.value,
                  "onUpdate:modelValue": s[0] || (s[0] = (p) => v.value = p),
                  style: ml(E.value),
                  onChange: c
                }, null, 8, ["modelValue", "style"])
              ])
            ]),
            ne(Xt, {
              modelValue: f.value,
              "onUpdate:modelValue": s[1] || (s[1] = (p) => f.value = p),
              label: "R",
              "range-class": "color-range--red"
            }, null, 8, ["modelValue"]),
            ne(Xt, {
              modelValue: n.value,
              "onUpdate:modelValue": s[2] || (s[2] = (p) => n.value = p),
              label: "G",
              "range-class": "color-range--green"
            }, null, 8, ["modelValue"]),
            ne(Xt, {
              modelValue: b.value,
              "onUpdate:modelValue": s[3] || (s[3] = (p) => b.value = p),
              label: "B",
              "range-class": "color-range--blue"
            }, null, 8, ["modelValue"]),
            ne(Xt, {
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
}), jo = /* @__PURE__ */ ye({
  __name: "MultipleColorInput",
  props: {
    modelValue: { default: () => [] },
    editMode: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] }
  },
  setup(e) {
    const t = e, i = X(t.modelValue), o = J(() => typeof t.max == "boolean" || i.value.length < t.max ? ["inline-create"] : []);
    return (l, a) => {
      const c = he("lkt-table");
      return O(), Q(c, {
        type: "item",
        modelValue: i.value,
        "onUpdate:modelValue": a[0] || (a[0] = (f) => i.value = f),
        perms: o.value,
        "edit-mode": l.editMode,
        "new-value-generator": () => "",
        "required-items-for-top-create": 999999
      }, {
        item: pe(({ item: f, index: n, isLoading: b, canCreate: u, canRead: v, canUpdate: w, canDrop: S, doDrop: E }) => [
          ne(vn, {
            modelValue: i.value[n],
            "onUpdate:modelValue": (R) => i.value[n] = R
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "perms", "edit-mode"]);
    };
  }
}), Go = (e, t, i, o) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\D+/g, "").length < l && e.push(Ne.createMinNumbers(l, Re.Ko));
  }
  if (typeof o < "u") {
    let l = parseInt(o);
    t.replace(/\D+/g, "").length > l && e.push(Ne.createMaxNumbers(l, Re.Ko));
  }
}, Ko = (e, t, i, o) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/[^A-Z]+/g, "").length < l && e.push(Ne.createMinUpperChars(l, Re.Ko));
  }
  if (typeof o < "u") {
    let l = parseInt(o);
    t.replace(/[^A-Z]+/g, "").length > l && e.push(Ne.createMaxUpperChars(l, Re.Ko));
  }
}, Yo = (e, t, i, o) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/[A-Z]+/g, "").length < l && e.push(Ne.createMinLowerChars(l, Re.Ko));
  }
  if (typeof o < "u") {
    let l = parseInt(o);
    t.replace(/[A-Z]+/g, "").length > l && e.push(Ne.createMaxLowerChars(l, Re.Ko));
  }
}, Xo = (e, t, i, o) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\d+/g, "").length < l && e.push(Ne.createMinChars(l, Re.Ko));
  }
  if (typeof o < "u") {
    let l = parseInt(o);
    t.replace(/\d+/g, "").length > l && e.push(Ne.createMaxChars(l, Re.Ko));
  }
}, Jo = (e, t, i, o) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < l && e.push(Ne.createMinSpecialChars(l, Re.Ko));
  }
  if (typeof o < "u") {
    let l = parseInt(o);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > l && e.push(Ne.createMaxSpecialChars(l, Re.Ko));
  }
}, El = (e, t = "default") => {
  if (!e) return "";
  let i = ee.validationMessages[t] && ee.validationMessages[t][e] ? ee.validationMessages[t][e] : "";
  return i || (i = ""), i;
}, Qo = { class: "boolean-input" }, es = { class: "boolean-input-label" }, ts = { class: "boolean-input--check-on" }, is = {
  key: 0,
  class: "lkt-icn-ok"
}, ls = ["innerHTML"], ns = ["name", "id", "disabled", "readonly", "value", "checked"], os = /* @__PURE__ */ ye({
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
    const i = t, o = e, l = X(null), a = X(o.modelValue), c = X(a.value ? "true" : "false"), f = X(o.focusing), n = (u) => {
      f.value = !0, i("focus", u);
    }, b = (u) => {
      f.value = !1, i("blur", u);
    };
    return ue(() => o.modelValue, (u) => a.value = u), ue(a, (u) => i("update:modelValue", u)), (u, v) => (O(), le("div", Qo, [
      me("div", es, [
        me("div", ts, [
          u.type === U(q).Check && a.value ? (O(), le("i", is)) : se("", !0)
        ])
      ]),
      u.label ? (O(), le("div", {
        key: 0,
        class: "lkt-field--label",
        innerHTML: u.label
      }, null, 8, ls)) : se("", !0),
      Ue(me("input", {
        "onUpdate:modelValue": v[0] || (v[0] = (w) => a.value = w),
        type: "checkbox",
        ref_key: "input",
        ref: l,
        name: u.name,
        id: u.id,
        disabled: !u.editable || u.disabled,
        readonly: !u.editable || u.readonly,
        value: c.value,
        checked: a.value,
        onFocus: n,
        onBlur: b
      }, null, 40, ns), [
        [co, a.value]
      ])
    ]));
  }
});
function we(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Qt = { exports: {} }, ss = Qt.exports, Tl;
function as() {
  return Tl || (Tl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ss, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(Qt)), Qt.exports;
}
var rs = /* @__PURE__ */ as();
const bn = /* @__PURE__ */ we(rs);
var ei = { exports: {} }, us = ei.exports, Ll;
function cs() {
  return Ll || (Ll = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : us, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(ei)), ei.exports;
}
var ds = /* @__PURE__ */ cs();
const yn = /* @__PURE__ */ we(ds);
var ti = { exports: {} }, fs = ti.exports, zl;
function hs() {
  return zl || (zl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : fs, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(ti)), ti.exports;
}
var ps = /* @__PURE__ */ hs();
const _n = /* @__PURE__ */ we(ps);
var ii = { exports: {} }, ms = ii.exports, Bl;
function gs() {
  return Bl || (Bl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ms, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(ii)), ii.exports;
}
var vs = /* @__PURE__ */ gs();
const Cn = /* @__PURE__ */ we(vs);
var li = { exports: {} }, bs = li.exports, Nl;
function ys() {
  return Nl || (Nl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : bs, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(li)), li.exports;
}
var _s = /* @__PURE__ */ ys();
const Ni = /* @__PURE__ */ we(_s);
var ni = { exports: {} }, Cs = ni.exports, Rl;
function ws() {
  return Rl || (Rl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Cs, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(ni)), ni.exports;
}
var ks = /* @__PURE__ */ ws();
const wn = /* @__PURE__ */ we(ks);
var oi = { exports: {} }, xs = oi.exports, Al;
function Ss() {
  return Al || (Al = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : xs, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(oi)), oi.exports;
}
var Es = /* @__PURE__ */ Ss();
const kn = /* @__PURE__ */ we(Es);
var si = { exports: {} }, Ts = si.exports, Il;
function Ls() {
  return Il || (Il = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Ts, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(si)), si.exports;
}
var zs = /* @__PURE__ */ Ls();
const xn = /* @__PURE__ */ we(zs);
var ai = { exports: {} }, Bs = ai.exports, Ml;
function Ns() {
  return Ml || (Ml = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Bs, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(ai)), ai.exports;
}
var Rs = /* @__PURE__ */ Ns();
const Sn = /* @__PURE__ */ we(Rs);
var ri = { exports: {} }, As = ri.exports, Dl;
function Is() {
  return Dl || (Dl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG una finestra con un documento");
        return i(o);
      };
    })(typeof window < "u" ? window : As, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(ri)), ri.exports;
}
var Ms = /* @__PURE__ */ Is();
const En = /* @__PURE__ */ we(Ms);
var ui = { exports: {} }, Ds = ui.exports, Vl;
function Vs() {
  return Vl || (Vl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Ds, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(ui)), ui.exports;
}
var Hs = /* @__PURE__ */ Vs();
const Tn = /* @__PURE__ */ we(Hs);
var ci = { exports: {} }, Fs = ci.exports, Hl;
function Os() {
  return Hl || (Hl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Fs, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(ci)), ci.exports;
}
var Ps = /* @__PURE__ */ Os();
const Ln = /* @__PURE__ */ we(Ps);
var di = { exports: {} }, Us = di.exports, Fl;
function Ws() {
  return Fl || (Fl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Us, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(di)), di.exports;
}
var Zs = /* @__PURE__ */ Ws();
const zn = /* @__PURE__ */ we(Zs);
var fi = { exports: {} }, $s = fi.exports, Ol;
function qs() {
  return Ol || (Ol = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : $s, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(fi)), fi.exports;
}
var js = /* @__PURE__ */ qs();
const Bn = /* @__PURE__ */ we(js);
var hi = { exports: {} }, Gs = hi.exports, Pl;
function Ks() {
  return Pl || (Pl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Gs, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(hi)), hi.exports;
}
var Ys = /* @__PURE__ */ Ks();
const Nn = /* @__PURE__ */ we(Ys);
var pi = { exports: {} }, Xs = pi.exports, Ul;
function Js() {
  return Ul || (Ul = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Xs, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(pi)), pi.exports;
}
var Qs = /* @__PURE__ */ Js();
const Rn = /* @__PURE__ */ we(Qs);
var mi = { exports: {} }, ea = mi.exports, Wl;
function ta() {
  return Wl || (Wl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ea, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(mi)), mi.exports;
}
var ia = /* @__PURE__ */ ta();
const An = /* @__PURE__ */ we(ia);
var gi = { exports: {} }, la = gi.exports, Zl;
function na() {
  return Zl || (Zl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : la, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(gi)), gi.exports;
}
var oa = /* @__PURE__ */ na();
const In = /* @__PURE__ */ we(oa);
var vi = { exports: {} }, sa = vi.exports, $l;
function aa() {
  return $l || ($l = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : sa, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(vi)), vi.exports;
}
var ra = /* @__PURE__ */ aa();
const Mn = /* @__PURE__ */ we(ra);
var bi = { exports: {} }, ua = bi.exports, ql;
function ca() {
  return ql || (ql = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ua, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(bi)), bi.exports;
}
var da = /* @__PURE__ */ ca();
const Dn = /* @__PURE__ */ we(da);
var yi = { exports: {} }, fa = yi.exports, jl;
function ha() {
  return jl || (jl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : fa, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(yi)), yi.exports;
}
var pa = /* @__PURE__ */ ha();
const Vn = /* @__PURE__ */ we(pa);
var _i = { exports: {} }, ma = _i.exports, Gl;
function ga() {
  return Gl || (Gl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ma, function(t, i) {
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
      return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
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
  }(_i)), _i.exports;
}
var va = /* @__PURE__ */ ga();
const Hn = /* @__PURE__ */ we(va), ba = { ckb: bn, cs: yn, da: _n, de: Cn, en: Ni, es: wn, fr: kn, he: xn, hu: Sn, it: En, ja: Tn, ko: Ln, lv: zn, nl: Bn, pl: Nn, pt_br: Rn, ro: An, ru: In, se: Mn, ua: Dn, ur: Vn, zh_cn: Hn }, Kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: bn,
  cs: yn,
  da: _n,
  de: Cn,
  default: ba,
  en: Ni,
  es: wn,
  fr: kn,
  he: xn,
  hu: Sn,
  it: En,
  ja: Tn,
  ko: Ln,
  lv: zn,
  nl: Bn,
  pl: Nn,
  pt_br: Rn,
  ro: An,
  ru: In,
  se: Mn,
  ua: Dn,
  ur: Vn,
  zh_cn: Hn
}, Symbol.toStringTag, { value: "Module" })), ya = {
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
}, _a = {
  name: "align",
  display: "submenu",
  add: function(e, t) {
    const i = e.icons, o = e.context;
    o.align = {
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
    let l = this.setSubmenu(e), a = o.align._itemMenu = l.querySelector("ul");
    a.addEventListener("click", this.pickup.bind(e)), o.align._alignList = a.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null, a = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.icons, o = e.util.createElement("DIV"), l = e.options.alignItems;
    let a = "";
    for (let c = 0, f, n; c < l.length; c++)
      f = l[c], n = t.toolbar["align" + f.charAt(0).toUpperCase() + f.slice(1)], a += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + f + '" title="' + n + '" aria-label="' + n + '"><span class="se-list-icon">' + i["align_" + f] + "</span>" + n + "</button></li>";
    return o.className = "se-submenu se-list-layer se-list-align", o.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + a + "</ul></div>", o;
  },
  /**
   * @Override core
   */
  active: function(e) {
    const t = this.context.align, i = t.targetButton, o = i.firstElementChild;
    if (!e)
      this.util.changeElement(o, t.icons[t.defaultDir]), i.removeAttribute("data-focus");
    else if (this.util.isFormatElement(e)) {
      const l = e.style.textAlign;
      if (l)
        return this.util.changeElement(o, t.icons[l] || t.icons[t.defaultDir]), i.setAttribute("data-focus", l), !0;
    }
    return !1;
  },
  /**
   * @Override submenu
   */
  on: function() {
    const e = this.context.align, t = e._alignList, i = e.targetButton.getAttribute("data-focus") || e.defaultDir;
    if (i !== e.currentAlign) {
      for (let o = 0, l = t.length; o < l; o++)
        i === t[o].getAttribute("data-value") ? this.util.addClass(t[o], "active") : this.util.removeClass(t[o], "active");
      e.currentAlign = i;
    }
  },
  exchangeDir: function() {
    const e = this.options.rtl ? "right" : "left";
    if (!this.context.align || this.context.align.defaultDir === e) return;
    this.context.align.defaultDir = e;
    let t = this.context.align._itemMenu, i = t.querySelector('[data-value="left"]'), o = t.querySelector('[data-value="right"]');
    if (i && o) {
      const l = i.parentElement, a = o.parentElement;
      l.appendChild(o), a.appendChild(i);
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !i && !/UL/i.test(t.tagName); )
      i = t.getAttribute("data-value"), t = t.parentNode;
    if (!i) return;
    const o = this.context.align.defaultDir, l = this.getSelectedElements();
    for (let a = 0, c = l.length; a < c; a++)
      this.util.setStyle(l[a], "textAlign", i === o ? "" : i);
    this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1);
  }
}, Ca = {
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
    let o = this.setSubmenu(e);
    o.querySelector(".se-list-inner").addEventListener("click", this.pickup.bind(e)), i.font._fontList = o.querySelectorAll("ul li button"), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-font-family";
    let o, l, a, c, f = e.options.font, n = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (a = 0, c = f.length; a < c; a++)
      o = f[a], l = o.split(",")[0], n += '<li><button type="button" class="se-btn-list" data-value="' + o + '" data-txt="' + l + '" title="' + l + '" aria-label="' + l + '" style="font-family:' + o + ';">' + l + "</button></li>";
    return n += "</ul></div>", i.innerHTML = n, i;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.font.targetText, i = this.context.font.targetTooltip;
    if (e) {
      if (e.style && e.style.fontFamily.length > 0) {
        const o = e.style.fontFamily.replace(/["']/g, "");
        return this.util.changeTxt(t, o), this.util.changeTxt(i, this.lang.toolbar.font + " (" + o + ")"), !0;
      }
    } else {
      const o = this.hasFocus ? this.wwComputedStyle.fontFamily : this.lang.toolbar.font;
      this.util.changeTxt(t, o), this.util.changeTxt(i, this.hasFocus ? this.lang.toolbar.font + (o ? " (" + o + ")" : "") : o);
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.font, t = e._fontList, i = e.targetText.textContent;
    if (i !== e.currentFont) {
      for (let o = 0, l = t.length; o < l; o++)
        i === (t[o].getAttribute("data-value") || "").replace(/'|"/g, "") ? this.util.addClass(t[o], "active") : this.util.removeClass(t[o], "active");
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
}, wa = {
  name: "fontSize",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.fontSize = {
      targetText: t.querySelector(".txt"),
      _sizeList: null,
      currentSize: ""
    };
    let o = this.setSubmenu(e), l = o.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.fontSize._sizeList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, o = e.util.createElement("DIV");
    o.className = "se-submenu se-list-layer se-list-font-size";
    const l = t.fontSize ? t.fontSize : [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
    let a = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let c = 0, f = t.fontSizeUnit, n = l.length, b; c < n; c++)
      b = l[c], a += '<li><button type="button" class="se-btn-list" data-value="' + b + f + '" title="' + b + f + '" aria-label="' + b + f + '" style="font-size:' + b + f + ';">' + b + "</button></li>";
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
    const e = this.context.fontSize, t = e._sizeList, i = e.targetText.textContent;
    if (i !== e.currentSize) {
      for (let o = 0, l = t.length; o < l; o++)
        i === t[o].getAttribute("data-value") ? this.util.addClass(t[o], "active") : this.util.removeClass(t[o], "active");
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
}, Fn = {
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
    const i = e.options, o = e.lang, l = !i.colorList || i.colorList.length === 0 ? [
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
    let a = [], c = '<div class="se-list-inner">';
    for (let f = 0, n = l.length, b; f < n; f++)
      b = l[f], b && (typeof b == "string" && (a.push(b), f < n - 1) || (a.length > 0 && (c += '<div class="se-selector-color">' + t(a) + "</div>", a = []), typeof b == "object" && (c += '<div class="se-selector-color">' + t(b) + "</div>")));
    return c += '<form class="se-form-group"><input type="text" maxlength="9" class="_se_color_picker_input se-color-input"/><button type="submit" class="se-btn-primary _se_color_picker_submit" title="' + o.dialogBox.submitButton + '" aria-label="' + o.dialogBox.submitButton + '">' + e.icons.checked + '</button><button type="button" class="se-btn _se_color_picker_remove" title="' + o.toolbar.removeFormat + '" aria-label="' + o.toolbar.removeFormat + '">' + e.icons.erase + "</button></form></div>", c;
  },
  /**
   * @description Internal function used by this.createColorList
   * @param {Array} colorList Color list
   * @private
   */
  _makeColorList: function(e) {
    let t = "";
    t += '<ul class="se-color-pallet">';
    for (let i = 0, o = e.length, l; i < o; i++)
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
    let o = t || i.getColorInNode.call(this, e) || this.context.colorPicker._defaultColor;
    o = i.isHexColor(o) ? o : i.rgb2hex(o) || o;
    const l = this.context.colorPicker._colorList;
    if (l)
      for (let a = 0, c = l.length; a < c; a++)
        o.toLowerCase() === l[a].getAttribute("data-value").toLowerCase() ? this.util.addClass(l[a], "active") : this.util.removeClass(l[a], "active");
    i.setInputText.call(this, i.colorName2hex.call(this, o));
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
    var i = this._w.getComputedStyle(this._d.body.appendChild(t)).color.match(/\d+/g).map(function(o) {
      return parseInt(o, 10);
    });
    return this.util.removeItem(t), i.length >= 3 ? "#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).substr(1) : !1;
  }
}, ka = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Fn]);
    const i = e.context;
    i.fontColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let o = this.setSubmenu(e);
    i.fontColor.colorInput = o.querySelector("._se_color_picker_input"), i.fontColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), o.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), o.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), o.addEventListener("click", this.pickup.bind(e)), i.fontColor.colorList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null;
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
}, xa = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Fn]);
    const i = e.context;
    i.hiliteColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let o = this.setSubmenu(e);
    i.hiliteColor.colorInput = o.querySelector("._se_color_picker_input"), i.hiliteColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), o.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), o.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), o.addEventListener("click", this.pickup.bind(e)), i.hiliteColor.colorList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null;
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
}, Sa = {
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
    const t = e.lang, i = e.util.createElement("DIV"), o = e.options.hrItems || [{ name: t.toolbar.hr_solid, class: "__se__solid" }, { name: t.toolbar.hr_dashed, class: "__se__dashed" }, { name: t.toolbar.hr_dotted, class: "__se__dotted" }];
    let l = "";
    for (let a = 0, c = o.length; a < c; a++)
      l += '<li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="' + o[a].class + '" title="' + o[a].name + '" aria-label="' + o[a].name + '"><hr' + (o[a].class ? ' class="' + o[a].class + '"' : "") + (o[a].style ? ' style="' + o[a].style + '"' : "") + "/></button></li>";
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
    const o = this.plugins.horizontalRule.appendHr.call(this, t.firstElementChild);
    o && (this.setRange(o, 0, o, 0), this.submenuOff());
  }
}, Ea = {
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
    let o = this.setSubmenu(e), l = o.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.list._list = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    return i.className = "se-submenu se-list-layer", i.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="OL" title="' + t.toolbar.orderList + '" aria-label="' + t.toolbar.orderList + '">' + e.icons.list_number + '</button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="UL" title="' + t.toolbar.unorderList + '" aria-label="' + t.toolbar.unorderList + '">' + e.icons.list_bullets + "</button></li></ul></div>", i;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.list.targetButton, i = t.firstElementChild, o = this.util;
    if (o.isList(e)) {
      const l = e.nodeName;
      return t.setAttribute("data-focus", l), o.addClass(t, "active"), /UL/i.test(l) ? o.changeElement(i, this.context.list.icons.bullets) : o.changeElement(i, this.context.list.icons.number), !0;
    } else
      t.removeAttribute("data-focus"), o.changeElement(i, this.context.list.icons.number), o.removeClass(t, "active");
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.list, t = e._list, i = e.targetButton.getAttribute("data-focus") || "";
    if (i !== e.currentList) {
      for (let o = 0, l = t.length; o < l; o++)
        i === t[o].getAttribute("data-command") ? this.util.addClass(t[o], "active") : this.util.removeClass(t[o], "active");
      e.currentList = i;
    }
  },
  editList: function(e, t, i) {
    let o = this.getRange(), l = t || this.getSelectedElementsAndComponents(!1);
    if (l.length === 0 && (t || (o = this.getRange_addLine(o, null), l = this.getSelectedElementsAndComponents(!1), l.length === 0)))
      return;
    const a = this.util;
    a.sortByDepth(l, !0);
    let c = l[0], f = l[l.length - 1], n = (a.isListCell(c) || a.isComponent(c)) && !c.previousElementSibling ? c.parentNode.previousElementSibling : c.previousElementSibling, b = (a.isListCell(f) || a.isComponent(f)) && !f.nextElementSibling ? f.parentNode.nextElementSibling : f.nextElementSibling;
    const u = o.collapsed, v = {
      sc: o.startContainer,
      so: o.startContainer === o.endContainer && a.onlyZeroWidthSpace(o.startContainer) && o.startOffset === 0 && o.endOffset === 1 ? o.endOffset : o.startOffset,
      ec: o.endContainer,
      eo: o.endOffset
    };
    let w = null, S = !0;
    for (let E = 0, R = l.length; E < R; E++)
      if (!a.isList(a.getRangeFormatElement(l[E], (function(s) {
        return this.getRangeFormatElement(s) && s !== l[E];
      }).bind(a)))) {
        S = !1;
        break;
      }
    if (S && (!n || c.tagName !== n.tagName || e !== n.tagName.toUpperCase()) && (!b || f.tagName !== b.tagName || e !== b.tagName.toUpperCase())) {
      if (i) {
        for (let p = 0, m = l.length; p < m; p++)
          for (let g = p - 1; g >= 0; g--)
            if (l[g].contains(l[p])) {
              l.splice(p, 1), p--, m--;
              break;
            }
      }
      const E = a.getRangeFormatElement(c), R = E && E.tagName === e;
      let s, r;
      const d = (function(p) {
        return !this.isComponent(p);
      }).bind(a);
      R || (r = a.createElement(e));
      for (let p = 0, m = l.length, g, h; p < m; p++)
        h = a.getRangeFormatElement(l[p], d), !(!h || !a.isList(h)) && (g ? g !== h ? (i && a.isListCell(h.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : w = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0), h = l[p].parentNode, R || (r = a.createElement(e)), g = h, s = { r: g, f: [a.getParentElement(l[p], "LI")] }) : s.f.push(a.getParentElement(l[p], "LI")) : (g = h, s = { r: g, f: [a.getParentElement(l[p], "LI")] }), p === m - 1 && (i && a.isListCell(h.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : w = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0)));
    } else {
      const E = n && n.parentNode, R = b && b.parentNode;
      n = E && !a.isWysiwygDiv(E) && E.nodeName === e ? E : n, b = R && !a.isWysiwygDiv(R) && R.nodeName === e ? R : b;
      const s = n && n.tagName === e, r = b && b.tagName === e;
      let d = s ? n : a.createElement(e), p = null, m = null, g = null;
      const h = (function(y) {
        return !this.isComponent(y) && !this.isList(y);
      }).bind(a);
      for (let y = 0, C = l.length, _, x, I, L, z, N, Z, W, H; y < C; y++) {
        if (x = l[y], x.childNodes.length === 0 && !a._isIgnoreNodeChange(x)) {
          a.removeItem(x);
          continue;
        }
        if (L = l[y + 1], z = x.parentNode, N = L ? L.parentNode : null, I = a.isListCell(x), H = a.isRangeFormatElement(z) ? z : null, Z = I && !a.isWysiwygDiv(z) ? z.parentNode : z, W = I && !a.isWysiwygDiv(z) ? !L || a.isListCell(Z) ? z : z.nextSibling : x.nextSibling, _ = a.createElement("LI"), a.copyFormatAttributes(_, x), y === 0 && v.sc === x && (v.sc = _), y === C - 1 && v.ec === x && (v.ec = _), a.isComponent(x)) {
          const D = /^HR$/i.test(x.nodeName);
          D || (_.innerHTML = "<br>"), _.innerHTML += x.outerHTML, D && (_.innerHTML += "<br>");
        } else {
          const D = x.childNodes;
          for (; D[0]; )
            _.appendChild(D[0]);
        }
        d.appendChild(_), (!L || Z !== N || a.isRangeFormatElement(W)) && (p || (p = d), (!s || !L || Z !== N) && !(L && a.isList(N) && N === z) && d.parentNode !== Z && Z.insertBefore(d, W)), a.removeItem(x), s && m === null && (m = d.children.length - 1), L && (a.getRangeFormatElement(N, h) !== a.getRangeFormatElement(z, h) || a.isList(N) && a.isList(z) && a.getElementDepth(N) !== a.getElementDepth(z)) && (d = a.createElement(e)), H && H.children.length === 0 && a.removeItem(H);
      }
      m && (p = p.children[m]), r && (g = d.children.length - 1, d.innerHTML += b.innerHTML, d.children[g], a.removeItem(b));
    }
    return this.effectNode = null, u && w || v;
  },
  _detachNested: function(e) {
    const t = e[0], i = e[e.length - 1], o = i.nextElementSibling, l = t.parentNode, a = l.parentNode.nextElementSibling, c = l.parentNode.parentNode;
    for (let n = 0, b = e.length; n < b; n++)
      c.insertBefore(e[n], a);
    if (o && l.children.length > 0) {
      const n = l.cloneNode(!1), b = l.childNodes, u = this.util.getPositionIndex(o);
      for (; b[u]; )
        n.appendChild(b[u]);
      i.appendChild(n);
    }
    l.children.length === 0 && this.util.removeItem(l), this.util.mergeSameTags(c);
    const f = this.util.getEdgeChildNodes(t, i);
    return {
      cc: t.parentNode,
      sc: f.sc,
      ec: f.ec
    };
  },
  editInsideList: function(e, t) {
    t = t || this.getSelectedElements().filter((function(c) {
      return this.isListCell(c);
    }).bind(this.util));
    const i = t.length;
    if (i === 0 || !e && !this.util.isListCell(t[0].previousElementSibling) && !this.util.isListCell(t[i - 1].nextElementSibling))
      return {
        sc: t[0],
        so: 0,
        ec: t[i - 1],
        eo: 1
      };
    let o = t[0].parentNode, l = t[i - 1], a = null;
    if (e) {
      if (o !== l.parentNode && this.util.isList(l.parentNode.parentNode) && l.nextElementSibling)
        for (l = l.nextElementSibling; l; )
          t.push(l), l = l.nextElementSibling;
      a = this.plugins.list.editList.call(this, o.nodeName.toUpperCase(), t, !0);
    } else {
      let c = this.util.createElement(o.nodeName), f = t[0].previousElementSibling, n = l.nextElementSibling;
      const b = { s: null, e: null, sl: o, el: o };
      for (let w = 0, S = i, E; w < S; w++)
        E = t[w], E.parentNode !== o && (this.plugins.list._insiedList.call(this, o, c, f, n, b), o = E.parentNode, c = this.util.createElement(o.nodeName)), f = E.previousElementSibling, n = E.nextElementSibling, c.appendChild(E);
      this.plugins.list._insiedList.call(this, o, c, f, n, b);
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
  _insiedList: function(e, t, i, o, l) {
    let a = !1;
    if (i && t.tagName === i.tagName) {
      const c = t.children;
      for (; c[0]; )
        i.appendChild(c[0]);
      t = i, a = !0;
    }
    if (o && t.tagName === o.tagName) {
      const c = o.children;
      for (; c[0]; )
        t.appendChild(c[0]);
      const f = o.nextElementSibling;
      o.parentNode.removeChild(o), o = f;
    }
    if (!a) {
      this.util.isListCell(i) && (e = i, o = null), e.insertBefore(t, o), l.s || (l.s = this.util.getNodePath(t.firstElementChild.firstChild, e, null), l.sl = e);
      const c = e.contains(l.sl) ? this.util.getNodePath(l.sl, e) : null;
      l.e = this.util.getNodePath(t.lastElementChild.firstChild, e, null), l.el = e, this.util.mergeSameTags(e, [l.s, l.e, c], !1), this.util.mergeNestedTags(e), c && (l.sl = this.util.getNodeFromPath(c, e));
    }
    return t;
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = "";
    for (; !i && !/^UL$/i.test(t.tagName); )
      i = t.getAttribute("data-command"), t = t.parentNode;
    if (!i) return;
    const o = this.plugins.list.editList.call(this, i, null, !1);
    o && this.setRange(o.sc, o.so, o.ec, o.eo), this.submenuOff(), this.history.push(!1);
  }
}, Ta = {
  name: "table",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    let o = i.table = {
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
    o.tableHighlight = l.querySelector(".se-table-size-highlighted"), o.tableUnHighlight = l.querySelector(".se-table-size-unhighlighted"), o.tableDisplay = l.querySelector(".se-table-size-display"), e.options.rtl && (o.tableHighlight.style.left = 10 * 18 - 13 + "px");
    let c = this.setController_table(e);
    o.tableController = c, o.resizeButton = c.querySelector("._se_table_resize"), o.resizeText = c.querySelector("._se_table_resize > span > span"), o.columnFixedButton = c.querySelector("._se_table_fixed_column"), o.headerButton = c.querySelector("._se_table_header");
    let f = this.setController_tableEditor(e, o.cellControllerTop);
    o.resizeDiv = f, o.splitMenu = f.querySelector(".se-btn-group-sub"), o.mergeButton = f.querySelector("._se_table_merge_button"), o.splitButton = f.querySelector("._se_table_split_button"), o.insertRowAboveButton = f.querySelector("._se_table_insert_row_a"), o.insertRowBelowButton = f.querySelector("._se_table_insert_row_b"), a.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, o)), a.addEventListener("click", this.appendTable.bind(e)), f.addEventListener("click", this.onClick_tableController.bind(e)), c.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, l), i.element.relative.appendChild(f), i.element.relative.appendChild(c), l = null, a = null, f = null, c = null, o = null;
  },
  setSubmenu: function(e) {
    const t = e.util.createElement("DIV");
    return t.className = "se-submenu se-selector-table", t.innerHTML = '<div class="se-table-size"><div class="se-table-size-picker se-controller-table-picker"></div><div class="se-table-size-highlighted"></div><div class="se-table-size-unhighlighted"></div></div><div class="se-table-size-display">1 x 1</div>', t;
  },
  setController_table: function(e) {
    const t = e.lang, i = e.icons, o = e.util.createElement("DIV");
    return o.className = "se-controller se-controller-table", o.innerHTML = '<div><div class="se-btn-group"><button type="button" data-command="resize" class="se-btn se-tooltip _se_table_resize">' + i.expansion + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.maxSize + '</span></span></button><button type="button" data-command="layout" class="se-btn se-tooltip _se_table_fixed_column">' + i.fixed_column_width + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.fixedColumnWidth + '</span></span></button><button type="button" data-command="header" class="se-btn se-tooltip _se_table_header">' + i.table_header + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.tableHeader + '</span></span></button><button type="button" data-command="remove" class="se-btn se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", o;
  },
  setController_tableEditor: function(e, t) {
    const i = e.lang, o = e.icons, l = e.util.createElement("DIV");
    return l.className = "se-controller se-controller-table-cell", l.innerHTML = (t ? "" : '<div class="se-arrow se-arrow-up"></div>') + '<div class="se-btn-group"><button type="button" data-command="insert" data-value="row" data-option="up" class="se-btn se-tooltip _se_table_insert_row_a">' + o.insert_row_above + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowAbove + '</span></span></button><button type="button" data-command="insert" data-value="row" data-option="down" class="se-btn se-tooltip _se_table_insert_row_b">' + o.insert_row_below + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowBelow + '</span></span></button><button type="button" data-command="delete" data-value="row" class="se-btn se-tooltip">' + o.delete_row + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteRow + '</span></span></button><button type="button" data-command="merge" class="_se_table_merge_button se-btn se-tooltip" disabled>' + o.merge_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.mergeCells + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="insert" data-value="cell" data-option="left" class="se-btn se-tooltip">' + o.insert_column_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnBefore + '</span></span></button><button type="button" data-command="insert" data-value="cell" data-option="right" class="se-btn se-tooltip">' + o.insert_column_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnAfter + '</span></span></button><button type="button" data-command="delete" data-value="cell" class="se-btn se-tooltip">' + o.delete_column + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteColumn + '</span></span></button><button type="button" data-command="onsplit" class="_se_table_split_button se-btn se-tooltip">' + o.split_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.splitCells + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-table-split"><div class="se-list-inner"><ul class="se-list-basic"><li class="se-btn-list" data-command="split" data-value="vertical" style="line-height:32px;" title="' + i.controller.VerticalSplit + '" aria-label="' + i.controller.VerticalSplit + '">' + i.controller.VerticalSplit + '</li><li class="se-btn-list" data-command="split" data-value="horizontal" style="line-height:32px;" title="' + i.controller.HorizontalSplit + '" aria-label="' + i.controller.HorizontalSplit + '">' + i.controller.HorizontalSplit + "</li></ul></div></div></div>", l;
  },
  appendTable: function() {
    const e = this.util.createElement("TABLE"), t = this.plugins.table.createCells, i = this.context.table._tableXY[0];
    let o = this.context.table._tableXY[1], l = "<tbody>";
    for (; o > 0; )
      l += "<tr>" + t.call(this, "td", i) + "</tr>", --o;
    if (l += "</tbody>", e.innerHTML = l, this.insertComponent(e, !1, !0, !1)) {
      const c = e.querySelector("td div");
      this.setRange(c, 0, c, 0), this.plugins.table.reset_table_picker.call(this);
    }
  },
  createCells: function(e, t, i) {
    if (e = e.toLowerCase(), i) {
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
    let i = this._w.Math.ceil(t.offsetX / 18), o = this._w.Math.ceil(t.offsetY / 18);
    i = i < 1 ? 1 : i, o = o < 1 ? 1 : o, e._rtl && (e.tableHighlight.style.left = i * 18 - 13 + "px", i = 11 - i), e.tableHighlight.style.width = i + "em", e.tableHighlight.style.height = o + "em", this.util.changeTxt(e.tableDisplay, i + " x " + o), e._tableXY = [i, o];
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
      for (let o = 0, l = i.length; o < l; o++)
        this.util.removeClass(i[o], "se-table-selected-cell");
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
    const o = i._element || this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    i._maxWidth = this.util.hasClass(o, "se-table-size-100") || o.style.width === "100%" || !o.style.width && !this.util.hasClass(o, "se-table-size-auto"), i._fixedColumn = this.util.hasClass(o, "se-table-layout-fixed") || o.style.tableLayout === "fixed", t.setTableStyle.call(this, i._maxWidth ? "width|column" : "width"), t.setPositionControllerTop.call(this, o), t.setPositionControllerDiv.call(this, e, t._shift), t._shift || this.controllersOn(i.resizeDiv, i.tableController, t.init.bind(this), e, "table");
  },
  setPositionControllerTop: function(e) {
    this.setControllerPosition(this.context.table.tableController, e, "top", { left: 0, top: 0 });
  },
  setPositionControllerDiv: function(e, t) {
    const i = this.context.table, o = i.resizeDiv;
    this.plugins.table.setCellInfo.call(this, e, t), i.cellControllerTop ? this.setControllerPosition(o, i._element, "top", { left: i.tableController.offsetWidth, top: 0 }) : this.setControllerPosition(o, e, "bottom", { left: 0, top: 0 });
  },
  setCellInfo: function(e, t) {
    const i = this.context.table, o = i._element = this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    if (/THEAD/i.test(o.firstElementChild.nodeName) ? this.util.addClass(i.headerButton, "active") : this.util.removeClass(i.headerButton, "active"), t || i._physical_cellCnt === 0) {
      i._tdElement !== e && (i._tdElement = e, i._trElement = e.parentNode);
      const l = i._trElements = o.rows, a = e.cellIndex;
      let c = 0;
      for (let u = 0, v = l[0].cells, w = l[0].cells.length; u < w; u++)
        c += v[u].colSpan;
      const f = i._rowIndex = i._trElement.rowIndex;
      i._rowCnt = l.length, i._physical_cellCnt = i._trElement.cells.length, i._logical_cellCnt = c, i._physical_cellIndex = a, i._current_colSpan = i._tdElement.colSpan - 1, i._current_rowSpan - i._trElement.cells[a].rowSpan - 1;
      let n = [], b = [];
      for (let u = 0, v, w; u <= f; u++) {
        v = l[u].cells, w = 0;
        for (let S = 0, E = v.length, R, s, r, d; S < E; S++) {
          if (R = v[S], s = R.colSpan - 1, r = R.rowSpan - 1, d = S + w, b.length > 0)
            for (let p = 0, m; p < b.length; p++)
              m = b[p], !(m.row > u) && (d >= m.index ? (w += m.cs, d += m.cs, m.rs -= 1, m.row = u + 1, m.rs < 1 && (b.splice(p, 1), p--)) : S === E - 1 && (m.rs -= 1, m.row = u + 1, m.rs < 1 && (b.splice(p, 1), p--)));
          if (u === f && S === a) {
            i._logical_cellIndex = d;
            break;
          }
          r > 0 && n.push({
            index: d,
            cs: s + 1,
            rs: r,
            row: -1
          }), w += s;
        }
        b = b.concat(n).sort(function(S, E) {
          return S.index - E.index;
        }), n = [];
      }
      n = null, b = null;
    }
  },
  editTable: function(e, t) {
    const i = this.plugins.table, o = this.context.table, l = o._element, a = e === "row";
    if (a) {
      const c = o._trElement.parentNode;
      if (/^THEAD$/i.test(c.nodeName)) {
        if (t === "up")
          return;
        if (!c.nextElementSibling || !/^TBODY$/i.test(c.nextElementSibling.nodeName)) {
          l.innerHTML += "<tbody><tr>" + i.createCells.call(this, "td", o._logical_cellCnt, !1) + "</tr></tbody>";
          return;
        }
      }
    }
    if (i._ref) {
      const c = o._tdElement, f = i._selectedCells;
      if (a)
        if (t)
          i.setCellInfo.call(this, t === "up" ? f[0] : f[f.length - 1], !0), i.editRow.call(this, t, c);
        else {
          let n = f[0].parentNode;
          const b = [f[0]];
          for (let u = 1, v = f.length, w; u < v; u++)
            w = f[u], n !== w.parentNode && (b.push(w), n = w.parentNode);
          for (let u = 0, v = b.length; u < v; u++)
            i.setCellInfo.call(this, b[u], !0), i.editRow.call(this, t);
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
          i.setCellInfo.call(this, t === "left" ? f[0] : b || f[0], !0), i.editCell.call(this, t, c);
        } else {
          const b = [f[0]];
          for (let u = 1, v = f.length, w; u < v && (w = f[u], n === w.parentNode); u++)
            b.push(w);
          for (let u = 0, v = b.length; u < v; u++)
            i.setCellInfo.call(this, b[u], !0), i.editCell.call(this, t);
        }
      }
      t || i.init.call(this);
    } else
      i[a ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const c = l.children;
      for (let f = 0; f < c.length; f++)
        c[f].children.length === 0 && (this.util.removeItem(c[f]), f--);
      l.children.length === 0 && this.util.removeItem(l);
    }
  },
  editRow: function(e, t) {
    const i = this.context.table, o = !e, l = e === "up", a = i._rowIndex, c = o || l ? a : a + i._current_rowSpan + 1, f = o ? -1 : 1, n = i._trElements;
    let b = i._logical_cellCnt;
    for (let u = 0, v = a + (o ? -1 : 0), w; u <= v; u++) {
      if (w = n[u].cells, w.length === 0) return;
      for (let S = 0, E = w.length, R, s; S < E; S++)
        R = w[S].rowSpan, s = w[S].colSpan, !(R < 2 && s < 2) && R + u > c && c > u && (w[S].rowSpan = R + f, b -= s);
    }
    if (o) {
      const u = n[a + 1];
      if (u) {
        const v = [];
        let w = n[a].cells, S = 0;
        for (let E = 0, R = w.length, s, r; E < R; E++)
          s = w[E], r = E + S, S += s.colSpan - 1, s.rowSpan > 1 && (s.rowSpan -= 1, v.push({ cell: s.cloneNode(!1), index: r }));
        if (v.length > 0) {
          let E = v.shift();
          w = u.cells, S = 0;
          for (let R = 0, s = w.length, r, d; R < s && (r = w[R], d = R + S, S += r.colSpan - 1, !(d >= E.index && (R--, S--, S += E.cell.colSpan - 1, u.insertBefore(E.cell, r), E = v.shift(), !E))); R++)
            ;
          if (E) {
            u.appendChild(E.cell);
            for (let R = 0, s = v.length; R < s; R++)
              u.appendChild(v[R].cell);
          }
        }
      }
      i._element.deleteRow(c);
    } else {
      const u = i._element.insertRow(c);
      u.innerHTML = this.plugins.table.createCells.call(this, "td", b, !1);
    }
    o ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  editCell: function(e, t) {
    const i = this.context.table, o = this.util, l = !e, a = e === "left", c = i._current_colSpan, f = l || a ? i._logical_cellIndex : i._logical_cellIndex + c + 1, n = i._trElements;
    let b = [], u = [], v = 0;
    const w = [], S = [];
    for (let E = 0, R = i._rowCnt, s, r, d, p, m, g; E < R; E++) {
      s = n[E], r = f, m = !1, d = s.cells, g = 0;
      for (let h = 0, y, C = d.length, _, x, I; h < C && (y = d[h], !!y); h++)
        if (_ = y.rowSpan - 1, x = y.colSpan - 1, l) {
          if (I = h + g, u.length > 0) {
            const L = !d[h + 1];
            for (let z = 0, N; z < u.length; z++)
              N = u[z], !(N.row > E) && (I >= N.index ? (g += N.cs, I = h + g, N.rs -= 1, N.row = E + 1, N.rs < 1 && (u.splice(z, 1), z--)) : L && (N.rs -= 1, N.row = E + 1, N.rs < 1 && (u.splice(z, 1), z--)));
          }
          _ > 0 && b.push({
            rs: _,
            cs: x + 1,
            index: I,
            row: -1
          }), I >= r && I + x <= r + c ? w.push(y) : I <= r + c && I + x >= r ? y.colSpan -= o.getOverlapRangeAtIndex(f, f + c, I, I + x) : _ > 0 && (I < r || I + x > r + c) && S.push({
            cell: y,
            i: E,
            rs: E + _
          }), g += x;
        } else {
          if (h >= r) break;
          if (x > 0) {
            if (v < 1 && x + h >= r) {
              y.colSpan += 1, r = null, v = _ + 1;
              break;
            }
            r -= x;
          }
          if (!m) {
            for (let L = 0, z; L < u.length; L++)
              z = u[L], r -= z.cs, z.rs -= 1, z.rs < 1 && (u.splice(L, 1), L--);
            m = !0;
          }
        }
      if (u = u.concat(b).sort(function(h, y) {
        return h.index - y.index;
      }), b = [], !l) {
        if (v > 0) {
          v -= 1;
          continue;
        }
        r !== null && d.length > 0 && (p = this.plugins.table.createCells.call(this, d[0].nodeName, 0, !0), p = s.insertBefore(p, d[r]));
      }
    }
    if (l) {
      let E, R;
      for (let s = 0, r = w.length, d; s < r; s++)
        d = w[s].parentNode, o.removeItem(w[s]), d.cells.length === 0 && (E || (E = o.getArrayIndex(n, d)), R = o.getArrayIndex(n, d), o.removeItem(d));
      for (let s = 0, r = S.length, d; s < r; s++)
        d = S[s], d.cell.rowSpan = o.getOverlapRangeAtIndex(E, R, d.i, d.rs);
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
    const t = this.util, i = e === "vertical", o = this.context.table, l = o._tdElement, a = o._trElements, c = o._trElement, f = o._logical_cellIndex, n = o._rowIndex, b = this.plugins.table.createCells.call(this, l.nodeName, 0, !0);
    if (i) {
      const u = l.colSpan;
      if (b.rowSpan = l.rowSpan, u > 1)
        b.colSpan = this._w.Math.floor(u / 2), l.colSpan = u - b.colSpan, c.insertBefore(b, l.nextElementSibling);
      else {
        let v = [], w = [];
        for (let S = 0, E = o._rowCnt, R, s; S < E; S++) {
          R = a[S].cells, s = 0;
          for (let r = 0, d = R.length, p, m, g, h; r < d; r++) {
            if (p = R[r], m = p.colSpan - 1, g = p.rowSpan - 1, h = r + s, w.length > 0)
              for (let y = 0, C; y < w.length; y++)
                C = w[y], !(C.row > S) && (h >= C.index ? (s += C.cs, h += C.cs, C.rs -= 1, C.row = S + 1, C.rs < 1 && (w.splice(y, 1), y--)) : r === d - 1 && (C.rs -= 1, C.row = S + 1, C.rs < 1 && (w.splice(y, 1), y--)));
            if (h <= f && g > 0 && v.push({
              index: h,
              cs: m + 1,
              rs: g,
              row: -1
            }), p !== l && h <= f && h + m >= f + u - 1) {
              p.colSpan += 1;
              break;
            }
            if (h > f) break;
            s += m;
          }
          w = w.concat(v).sort(function(r, d) {
            return r.index - d.index;
          }), v = [];
        }
        c.insertBefore(b, l.nextElementSibling);
      }
    } else {
      const u = l.rowSpan;
      if (b.colSpan = l.colSpan, u > 1) {
        b.rowSpan = this._w.Math.floor(u / 2);
        const v = u - b.rowSpan, w = [], S = t.getArrayIndex(a, c) + v;
        for (let r = 0, d, p; r < S; r++) {
          d = a[r].cells, p = 0;
          for (let m = 0, g = d.length, h, y, C; m < g && (C = m + p, !(C >= f)); m++)
            h = d[m], y = h.rowSpan - 1, y > 0 && y + r >= S && C < f && w.push({
              index: C,
              cs: h.colSpan
            }), p += h.colSpan - 1;
        }
        const E = a[S], R = E.cells;
        let s = w.shift();
        for (let r = 0, d = R.length, p = 0, m, g, h, y; r < d; r++) {
          if (h = r + p, m = R[r], g = m.colSpan - 1, y = h + g + 1, s && y >= s.index && (p += s.cs, y += s.cs, s = w.shift()), y >= f || r === d - 1) {
            E.insertBefore(b, m.nextElementSibling);
            break;
          }
          p += g;
        }
        l.rowSpan = v;
      } else {
        b.rowSpan = l.rowSpan;
        const v = t.createElement("TR");
        v.appendChild(b);
        for (let E = 0, R; E < n; E++) {
          if (R = a[E].cells, R.length === 0) return;
          for (let s = 0, r = R.length; s < r; s++)
            E + R[s].rowSpan - 1 >= n && (R[s].rowSpan += 1);
        }
        const w = o._physical_cellIndex, S = c.cells;
        for (let E = 0, R = S.length; E < R; E++)
          E !== w && (S[E].rowSpan += 1);
        c.parentNode.insertBefore(v, c.nextElementSibling);
      }
    }
    this.focusEdge(l), this.plugins.table.setPositionControllerDiv.call(this, l, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, i = this.util, o = e._ref, l = e._selectedCells, a = l[0];
    let c = null, f = null, n = o.ce - o.cs + 1, b = o.re - o.rs + 1, u = "", v = null;
    for (let w = 1, S = l.length, E, R; w < S; w++) {
      E = l[w], v !== E.parentNode && (v = E.parentNode), R = E.children;
      for (let s = 0, r = R.length; s < r; s++)
        i.isFormatElement(R[s]) && i.onlyZeroWidthSpace(R[s].textContent) && i.removeItem(R[s]);
      u += E.innerHTML, i.removeItem(E), v.cells.length === 0 && (c ? f = v : c = v, b -= 1);
    }
    if (c) {
      const w = t._trElements, S = i.getArrayIndex(w, c), E = i.getArrayIndex(w, f || c), R = [];
      for (let s = 0, r; s <= E; s++) {
        if (r = w[s].cells, r.length === 0) {
          R.push(w[s]);
          continue;
        }
        for (let d = 0, p = r.length, m, g; d < p; d++)
          m = r[d], g = m.rowSpan - 1, g > 0 && s + g >= S && (m.rowSpan -= i.getOverlapRangeAtIndex(S, E, s, s + g));
      }
      for (let s = 0, r = R.length; s < r; s++)
        i.removeItem(R[s]);
    }
    a.innerHTML += u, a.colSpan = n, a.rowSpan = b, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, a), i.addClass(a, "se-table-selected-cell"), this.focusEdge(a);
  },
  toggleHeader: function() {
    const e = this.util, t = this.context.table.headerButton, i = e.hasClass(t, "active"), o = this.context.table._element;
    if (i)
      e.removeItem(o.querySelector("thead"));
    else {
      const l = e.createElement("THEAD");
      l.innerHTML = "<tr>" + this.plugins.table.createCells.call(this, "th", this.context.table._logical_cellCnt, !1) + "</tr>", o.insertBefore(l, o.firstElementChild);
    }
    e.toggleClass(t, "active"), /TH/i.test(this.context.table._tdElement.nodeName) ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, this.context.table._tdElement, !1);
  },
  setTableStyle: function(e) {
    const t = this.context.table, i = t._element;
    let o, l, a, c;
    e.indexOf("width") > -1 && (o = t.resizeButton.firstElementChild, l = t.resizeText, t._maxWidth ? (a = t.icons.reduction, c = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(i, "se-table-size-auto"), this.util.addClass(i, "se-table-size-100")) : (a = t.icons.expansion, c = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(i, "se-table-size-100"), this.util.addClass(i, "se-table-size-auto")), this.util.changeElement(o, a), this.util.changeTxt(l, c)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(i, "se-table-layout-auto"), this.util.addClass(i, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(i, "se-table-layout-fixed"), this.util.addClass(i, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")));
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
    const i = this.plugins.table, o = i._selectedTable.rows, l = this.util, a = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let u = 0, v = a.length; u < v; u++)
      l.removeClass(a[u], "se-table-selected-cell");
    if (e === t && (l.addClass(e, "se-table-selected-cell"), !i._shift))
      return;
    let c = !0, f = [], n = [];
    const b = i._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let u = 0, v = o.length, w, S; u < v; u++) {
      w = o[u].cells, S = 0;
      for (let E = 0, R = w.length, s, r, d, p; E < R; E++) {
        if (s = w[E], d = s.colSpan - 1, p = s.rowSpan - 1, r = E + S, f.length > 0)
          for (let m = 0, g; m < f.length; m++)
            g = f[m], !(g.row > u) && (r >= g.index ? (S += g.cs, r += g.cs, g.rs -= 1, g.row = u + 1, g.rs < 1 && (f.splice(m, 1), m--)) : E === R - 1 && (g.rs -= 1, g.row = u + 1, g.rs < 1 && (f.splice(m, 1), m--)));
        if (c) {
          if ((s === e || s === t) && (b.cs = b.cs !== null && b.cs < r ? b.cs : r, b.ce = b.ce !== null && b.ce > r + d ? b.ce : r + d, b.rs = b.rs !== null && b.rs < u ? b.rs : u, b.re = b.re !== null && b.re > u + p ? b.re : u + p, b._i += 1), b._i === 2) {
            c = !1, f = [], n = [], u = -1;
            break;
          }
        } else if (l.getOverlapRangeAtIndex(b.cs, b.ce, r, r + d) && l.getOverlapRangeAtIndex(b.rs, b.re, u, u + p)) {
          const m = b.cs < r ? b.cs : r, g = b.ce > r + d ? b.ce : r + d, h = b.rs < u ? b.rs : u, y = b.re > u + p ? b.re : u + p;
          if (b.cs !== m || b.ce !== g || b.rs !== h || b.re !== y) {
            b.cs = m, b.ce = g, b.rs = h, b.re = y, u = -1, f = [], n = [];
            break;
          }
          l.addClass(s, "se-table-selected-cell");
        }
        p > 0 && n.push({
          index: r,
          cs: d + 1,
          rs: p,
          row: -1
        }), S += s.colSpan - 1;
      }
      f = f.concat(n).sort(function(E, R) {
        return E.index - R.index;
      }), n = [];
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
    const o = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let l = 0, a = o.length; l < a; l++)
      this.util.removeClass(o[l], "se-table-selected-cell");
    this.util.addClass(e, "se-table-selected-cell"), i._bindOnSelect = i._onCellMultiSelect.bind(this), i._bindOffSelect = i._offCellMultiSelect.bind(this), t ? (i._bindOffShift = (function() {
      this.controllersOn(this.context.table.resizeDiv, this.context.table.tableController, this.plugins.table.init.bind(this), e, "table"), i._ref || this.controllersOff();
    }).bind(this), this._wd.addEventListener("keyup", i._bindOffShift, !1), this._wd.addEventListener("mousedown", i._bindOnSelect, !1)) : this._wd.addEventListener("mousemove", i._bindOnSelect, !1), this._wd.addEventListener("mouseup", i._bindOffSelect, !1), i._initBind = i.init.bind(this), this._wd.addEventListener("touchmove", i._initBind, !1);
  },
  onClick_tableController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") ? e.target : e.target.parentNode;
    if (t.getAttribute("disabled")) return;
    const i = t.getAttribute("data-command"), o = t.getAttribute("data-value"), l = t.getAttribute("data-option"), a = this.plugins.table;
    if (typeof a._closeSplitMenu == "function" && (a._closeSplitMenu(), i === "onsplit") || !i) return;
    e.preventDefault();
    const c = this.context.table;
    switch (i) {
      case "insert":
      case "delete":
        a.editTable.call(this, o, l);
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
        c._maxWidth = !c._maxWidth, a.setTableStyle.call(this, "width"), a.setPositionControllerTop.call(this, c._element), a.setPositionControllerDiv.call(this, c._tdElement, a._shift);
        break;
      case "layout":
        c._fixedColumn = !c._fixedColumn, a.setTableStyle.call(this, "column"), a.setPositionControllerTop.call(this, c._element), a.setPositionControllerDiv.call(this, c._tdElement, a._shift);
        break;
      case "remove":
        const f = c._element.parentNode;
        this.util.removeItem(c._element), this.controllersOff(), f !== this.context.element.wysiwyg && this.util.removeItemAllParents(f, function(n) {
          return n.childNodes.length === 0;
        }, null), this.focus();
    }
    this.history.push(!1);
  }
}, La = {
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
    let o = this.setSubmenu(e);
    o.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), i.formatBlock._formatList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang.toolbar, o = e.util.createElement("DIV");
    o.className = "se-submenu se-list-layer se-list-format";
    const l = ["p", "div", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], a = !t.formats || t.formats.length === 0 ? l : t.formats;
    let c = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let f = 0, n = a.length, b, u, v, w, S, E, R; f < n; f++)
      b = a[f], typeof b == "string" && l.indexOf(b) > -1 ? (u = b.toLowerCase(), v = u === "blockquote" ? "range" : u === "pre" ? "free" : "replace", S = /^h/.test(u) ? u.match(/\d+/)[0] : "", w = i["tag_" + (S ? "h" : u)] + S, R = "", E = "") : (u = b.tag.toLowerCase(), v = b.command, w = b.name || u, R = b.class, E = R ? ' class="' + R + '"' : ""), c += '<li><button type="button" class="se-btn-list" data-command="' + v + '" data-value="' + u + '" data-class="' + R + '" title="' + w + '" aria-label="' + w + '"><' + u + E + ">" + w + "</" + u + "></button></li>";
    return c += "</ul></div>", o.innerHTML = c, o;
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
      const l = this.context.formatBlock._formatList, a = e.nodeName.toLowerCase(), c = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let f = 0, n = l.length, b; f < n; f++)
        if (b = l[f], a === b.getAttribute("data-value") && c === b.getAttribute("data-class")) {
          t = b.title;
          break;
        }
      return this.util.changeTxt(i, t), i.setAttribute("data-value", a), i.setAttribute("data-class", c), !0;
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.formatBlock, t = e._formatList, i = e.targetText, o = (i.getAttribute("data-value") || "") + (i.getAttribute("data-class") || "");
    if (o !== e.currentFormat) {
      for (let l = 0, a = t.length, c; l < a; l++)
        c = t[l], o === c.getAttribute("data-value") + c.getAttribute("data-class") ? this.util.addClass(c, "active") : this.util.removeClass(c, "active");
      e.currentFormat = o;
    }
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null, o = null, l = null, a = "";
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), o = t.getAttribute("data-value"), a = t.getAttribute("data-class"), i) {
        l = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (i) {
      if (i === "range") {
        const c = l.cloneNode(!1);
        this.applyRangeFormatElement(c);
      } else {
        let c = this.getRange(), f = this.getSelectedElementsAndComponents(!1);
        if (f.length === 0 && (c = this.getRange_addLine(c, null), f = this.getSelectedElementsAndComponents(!1), f.length === 0))
          return;
        const n = c.startOffset, b = c.endOffset, u = this.util;
        let v = f[0], w = f[f.length - 1];
        const S = u.getNodePath(c.startContainer, v, null, null), E = u.getNodePath(c.endContainer, w, null, null), R = this.detachList(f, !1);
        R.sc && (v = R.sc), R.ec && (w = R.ec), this.setRange(u.getNodeFromPath(S, v), n, u.getNodeFromPath(E, w), b);
        const s = this.getSelectedElementsAndComponents(!1);
        if (i === "free") {
          const r = s.length - 1;
          let d = s[r].parentNode, p = l.cloneNode(!1);
          const m = p;
          for (let g = r, h, y, C, _, x, I, L = !0; g >= 0; g--)
            if (h = s[g], h !== (s[g + 1] ? s[g + 1].parentNode : null)) {
              if (I = u.isComponent(h), y = I ? "" : h.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), C = u.getParentElement(h, function(z) {
                return z.parentNode === d;
              }), (d !== h.parentNode || I) && (u.isFormatElement(d) ? (d.parentNode.insertBefore(p, d.nextSibling), d = d.parentNode) : (d.insertBefore(p, C ? C.nextSibling : null), d = h.parentNode), _ = p.nextSibling, _ && p.nodeName === _.nodeName && u.isSameAttributes(p, _) && (p.innerHTML += "<BR>" + _.innerHTML, u.removeItem(_)), p = l.cloneNode(!1), L = !0), x = p.innerHTML, p.innerHTML = (L || !y || !x || /<br>$/i.test(y) ? y : y + "<BR>") + x, g === 0) {
                d.insertBefore(p, h), _ = h.nextSibling, _ && p.nodeName === _.nodeName && u.isSameAttributes(p, _) && (p.innerHTML += "<BR>" + _.innerHTML, u.removeItem(_));
                const z = p.previousSibling;
                z && p.nodeName === z.nodeName && u.isSameAttributes(p, z) && (z.innerHTML += "<BR>" + p.innerHTML, u.removeItem(p));
              }
              I || u.removeItem(h), y && (L = !1);
            }
          this.setRange(m, 0, m, 0);
        } else {
          for (let r = 0, d = s.length, p, m; r < d; r++)
            p = s[r], (p.nodeName.toLowerCase() !== o.toLowerCase() || (p.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== a) && !u.isComponent(p) && (m = l.cloneNode(!1), u.copyFormatAttributes(m, p), m.innerHTML = p.innerHTML, p.parentNode.replaceChild(m, p)), r === 0 && (v = m || p), r === d - 1 && (w = m || p), m = null;
          this.setRange(u.getNodeFromPath(S, v), n, u.getNodeFromPath(E, w), b);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, za = {
  name: "lineHeight",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.lineHeight = {
      _sizeList: null,
      currentSize: -1
    };
    let o = this.setSubmenu(e), l = o.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.lineHeight._sizeList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, o = e.util.createElement("DIV");
    o.className = "se-submenu se-list-layer";
    const l = t.lineHeights ? t.lineHeights : [
      { text: "1", value: 1 },
      { text: "1.15", value: 1.15 },
      { text: "1.5", value: 1.5 },
      { text: "2", value: 2 }
    ];
    let a = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let c = 0, f = l.length, n; c < f; c++)
      n = l[c], a += '<li><button type="button" class="se-btn-list" data-value="' + n.value + '" title="' + n.text + '" aria-label="' + n.text + '">' + n.text + "</button></li>";
    return a += "</ul></div>", o.innerHTML = a, o;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.lineHeight, t = e._sizeList, i = this.util.getFormatElement(this.getSelectionNode()), o = i ? i.style.lineHeight + "" : "";
    if (o !== e.currentSize) {
      for (let l = 0, a = t.length; l < a; l++)
        o === t[l].getAttribute("data-value") ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
      e.currentSize = o;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value") || "", i = this.getSelectedElements();
    for (let o = 0, l = i.length; o < l; o++)
      i[o].style.lineHeight = t;
    this.submenuOff(), this.history.push(!1);
  }
}, Ba = {
  name: "template",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.template = {
      selectedIndex: -1
    };
    let o = this.setSubmenu(e);
    o.querySelector("ul").addEventListener("click", this.pickup.bind(e)), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.options.templates;
    if (!t || t.length === 0)
      throw Error('[SUNEDITOR.plugins.template.fail] To use the "template" plugin, please define the "templates" option.');
    const i = e.util.createElement("DIV");
    i.className = "se-list-layer";
    let o = '<div class="se-submenu se-list-inner"><ul class="se-list-basic">';
    for (let l = 0, a = t.length, c; l < a; l++)
      c = t[l], o += '<li><button type="button" class="se-btn-list" data-value="' + l + '" title="' + c.name + '" aria-label="' + c.name + '">' + c.name + "</button></li>";
    return o += "</ul></div>", i.innerHTML = o, i;
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
}, Na = {
  name: "paragraphStyle",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.paragraphStyle = {
      _classList: null
    };
    let o = this.setSubmenu(e);
    o.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), i.paragraphStyle._classList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-format";
    const o = e.lang.menu, l = {
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
    let c = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let f = 0, n = a.length, b, u, v, w; f < n; f++) {
      if (b = a[f], typeof b == "string") {
        const S = l[b.toLowerCase()];
        if (!S) continue;
        b = S;
      }
      u = b.name, v = b.class ? ' class="' + b.class + '"' : "", w = b._class, c += '<li><button type="button" class="se-btn-list' + (w ? " " + w : "") + '" data-value="' + b.class + '" title="' + u + '" aria-label="' + u + '"><div' + v + ">" + u + "</div></button></li>";
    }
    return c += "</ul></div>", i.innerHTML = c, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const t = this.context.paragraphStyle._classList, i = this.util.getFormatElement(this.getSelectionNode());
    for (let o = 0, l = t.length; o < l; o++)
      this.util.hasClass(i, t[o].getAttribute("data-value")) ? this.util.addClass(t[o], "active") : this.util.removeClass(t[o], "active");
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !/^UL$/i.test(t.tagName) && (i = t.getAttribute("data-value"), !i); )
      t = t.parentNode;
    if (!i) return;
    let o = this.getSelectedElements();
    if (o.length === 0 && (this.getRange_addLine(this.getRange(), null), o = this.getSelectedElements(), o.length === 0))
      return;
    const l = this.util.hasClass(t, "active") ? this.util.removeClass.bind(this.util) : this.util.addClass.bind(this.util);
    for (let a = 0, c = o.length; a < c; a++)
      l(o[a], i);
    this.submenuOff(), this.history.push(!1);
  }
}, Ra = {
  name: "textStyle",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.textStyle = {
      _styleList: null
    };
    let o = this.setSubmenu(e), l = o.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.textStyle._styleList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, o), o = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-format";
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
    }, l = t.textStyles ? t.textStyles : e._w.Object.keys(o);
    let a = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let c = 0, f = l.length, n, b, u, v, w, S, E; c < f; c++) {
      if (n = l[c], v = "", S = "", w = [], typeof n == "string") {
        const R = o[n.toLowerCase()];
        if (!R) continue;
        n = R;
      }
      u = n.name, b = n.tag || "span", E = n._class, n.style && (v += ' style="' + n.style + '"', S += n.style.replace(/:[^;]+(;|$)\s*/g, ","), w.push("style")), n.class && (v += ' class="' + n.class + '"', S += "." + n.class.trim().replace(/\s+/g, ",."), w.push("class")), S = S.replace(/,$/, ""), a += '<li><button type="button" class="se-btn-list' + (E ? " " + E : "") + '" data-command="' + b + '" data-value="' + S + '" title="' + u + '" aria-label="' + u + '"><' + b + v + ">" + u + "</" + b + "></button></li>";
    }
    return a += "</ul></div>", i.innerHTML = a, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.util, i = this.context.textStyle._styleList, o = this.getSelectionNode();
    for (let l = 0, a = i.length, c, f, n; l < a; l++) {
      c = i[l], f = c.getAttribute("data-value").split(",");
      for (let b = 0, u, v; b < f.length; b++) {
        for (u = o, n = !1; u && !e.isFormatElement(u) && !e.isComponent(u); ) {
          if (u.nodeName.toLowerCase() === c.getAttribute("data-command").toLowerCase() && (v = f[b], /^\./.test(v) ? e.hasClass(u, v.replace(/^\./, "")) : u.style[v])) {
            n = !0;
            break;
          }
          u = u.parentNode;
        }
        if (!n) break;
      }
      n ? e.addClass(c, "active") : e.removeClass(c, "active");
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null, o = null;
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), i) {
        o = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (!i) return;
    const l = o.style.cssText.replace(/:.+(;|$)/g, ",").split(",");
    l.pop();
    const a = o.classList;
    for (let n = 0, b = a.length; n < b; n++)
      l.push("." + a[n]);
    const c = this.util.hasClass(t, "active") ? null : o.cloneNode(!1), f = c ? null : [o.nodeName];
    this.nodeChange(c, l, f, !0), this.submenuOff();
  }
};
var Ci = { exports: {} }, Aa = Ci.exports, Yl;
function Ia() {
  return Yl || (Yl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Aa, function(t, i) {
      const o = {
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
          let c = l.util.createElement("DIV");
          c.className = "se-dialog sun-editor-common";
          let f = l.util.createElement("DIV");
          f.className = "se-dialog-back", f.style.display = "none";
          let n = l.util.createElement("DIV");
          n.className = "se-dialog-inner", n.style.display = "none", c.appendChild(f), c.appendChild(n), a.dialog.modalArea = c, a.dialog.back = f, a.dialog.modal = n, a.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(l)), a.dialog.modal.addEventListener("click", this._onClick_dialog.bind(l)), a.element.relative.appendChild(c), c = null, f = null, n = null;
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
          const c = this.context[l].focusElement;
          typeof this.plugins[l].on == "function" && this.plugins[l].on.call(this, a), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", c && c.focus();
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
        value: o
      })), o;
    });
  }(Ci)), Ci.exports;
}
var Ma = /* @__PURE__ */ Ia();
const Wt = /* @__PURE__ */ we(Ma), Da = {
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
    const i = t.querySelector(".se-select-list"), o = this.context.selectMenu.caller[e] = {
      form: i,
      items: [],
      menus: [],
      index: -1,
      item: null,
      clickMethod: null,
      callerName: e
    };
    i.addEventListener("mousedown", this.plugins.selectMenu.onMousedown_list), i.addEventListener("mousemove", this.plugins.selectMenu.onMouseMove_list.bind(this, o)), i.addEventListener("click", this.plugins.selectMenu.onClick_list.bind(this, o));
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
    const i = e.menus, o = i.length, l = e.index = t >= o ? 0 : t < 0 ? o - 1 : t;
    for (let a = 0; a < o; a++)
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
}, On = {
  name: "anchor",
  add: function(e) {
    e.addModule([Da]), e.context.anchor = {
      caller: {},
      forms: this.setDialogForm(e),
      host: (e._w.location.origin + e._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  /** dialog */
  setDialogForm: function(e) {
    const t = e.lang, i = e.options.linkRel, o = (e.options.linkRelDefault.default || "").split(" "), l = e.icons, a = e.util.createElement("DIV");
    let c = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (e.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + t.dialogBox.linkBox.bookmark + '" aria-label="' + t.dialogBox.linkBox.bookmark + '">' + l.bookmark + "</button>" + e.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + l.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + l.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + t.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (i.length > 0) {
      c += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let f = 0, n = i.length, b; f < n; f++)
        b = i[f], c += '<li><button type="button" class="se-btn-list' + (o.indexOf(b) > -1 ? " se-checked" : "") + '" data-command="' + b + '" title="' + b + '" aria-label="' + b + '"><span class="se-svg">' + l.checked + "</span>" + b + "</button></li>";
      c += "</ul></div></div></div>";
    }
    return c += "</div></div>", a.innerHTML = c, a;
  },
  initEvent: function(e, t) {
    const i = this.plugins.anchor, o = this.context.anchor.caller[e] = {
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
    const l = this.context.selectMenu.caller[e];
    this.options.linkRel.length > 0 && (o.relButton = t.querySelector(".se-anchor-rel-btn"), o.relList = t.querySelector(".se-list-layer"), o.relPreview = t.querySelector(".se-anchor-rel-preview"), o.relButton.addEventListener("click", i.onClick_relButton.bind(this, o)), o.relList.addEventListener("click", i.onClick_relList.bind(this, o))), o.newWindowCheck.addEventListener("change", i.onChange_newWindowCheck.bind(this, o)), o.downloadCheck.addEventListener("change", i.onChange_downloadCheck.bind(this, o)), o.anchorText.addEventListener("input", i.onChangeAnchorText.bind(this, o)), o.urlInput.addEventListener("input", i.onChangeUrlInput.bind(this, o)), o.urlInput.addEventListener("keydown", i.onKeyDownUrlInput.bind(this, l)), o.urlInput.addEventListener("focus", i.onFocusUrlInput.bind(this, o, l)), o.urlInput.addEventListener("blur", i.onBlurUrlInput.bind(this, l)), o.bookmarkButton.addEventListener("click", i.onClick_bookmarkButton.bind(this, o));
  },
  on: function(e, t) {
    const i = this.plugins.anchor;
    if (!t)
      i.init.call(this, e), e.anchorText.value = this.getSelection().toString().trim(), e.newWindowCheck.checked = this.options.linkTargetNewWindow;
    else if (e.linkAnchor) {
      this.context.dialog.updateModal = !0;
      const o = e.linkAnchor.getAttribute("href");
      e.linkValue = e.preview.textContent = e.urlInput.value = i.selfPathBookmark.call(this, o) ? o.substr(o.lastIndexOf("#")) : o, e.anchorText.value = e.linkAnchor.textContent, e.newWindowCheck.checked = !!/_blank/i.test(e.linkAnchor.target), e.downloadCheck.checked = e.linkAnchor.download;
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
      const i = e.relButton, o = e.relList;
      this.util.addClass(i, "active"), o.style.visibility = "hidden", o.style.display = "block", this.options.rtl ? o.style.left = i.offsetLeft - o.offsetWidth - 1 + "px" : o.style.left = i.offsetLeft + i.offsetWidth + 1 + "px", o.style.top = i.offsetTop + i.offsetHeight / 2 - o.offsetHeight / 2 + "px", o.style.visibility = "", this.plugins.anchor._closeRelMenu = (function(l, a, c) {
        c && (l.relButton.contains(c.target) || l.relList.contains(c.target)) || (this.util.removeClass(a, "active"), l.relList.style.display = "none", this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu), this.plugins.anchor._closeRelMenu = null);
      }).bind(this, e, i), this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(e, t) {
    this.plugins.anchor.toggleRelList.call(this, e, !this.util.hasClass(t.target, "active"));
  },
  onClick_relList: function(e, t) {
    const i = t.target, o = i.getAttribute("data-command");
    if (!o) return;
    const l = e.currentRel, a = this.util.toggleClass(i, "se-checked"), c = l.indexOf(o);
    a ? c === -1 && l.push(o) : c > -1 && l.splice(c, 1), e.relPreview.title = e.relPreview.textContent = l.join(" ");
  },
  setRel: function(e, t) {
    const i = e.relList, o = e.currentRel = t ? t.split(" ") : [];
    if (!i) return;
    const l = i.querySelectorAll("button");
    for (let a = 0, c = l.length, f; a < c; a++)
      f = l[a].getAttribute("data-command"), o.indexOf(f) > -1 ? this.util.addClass(l[a], "se-checked") : this.util.removeClass(l[a], "se-checked");
    e.relPreview.title = e.relPreview.textContent = o.join(" ");
  },
  createHeaderList: function(e, t, i) {
    const o = this.util.getListChildren(this.context.element.wysiwyg, function(f) {
      return /h[1-6]/i.test(f.nodeName);
    });
    if (o.length === 0) return;
    const l = new this._w.RegExp("^" + i.replace(/^#/, ""), "i"), a = [];
    let c = "";
    for (let f = 0, n = o.length, b; f < n; f++)
      b = o[f], l.test(b.textContent) && (a.push(b), c += '<li class="se-select-item" data-index="' + f + '">' + b.textContent + "</li>");
    a.length === 0 ? this.plugins.selectMenu.close.call(this, t) : (this.plugins.selectMenu.createList(t, a, c), this.plugins.selectMenu.open.call(this, t, this.plugins.anchor._setMenuListPosition.bind(this, e)));
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
    const i = e.preview, o = this.options.linkProtocol, l = this.options.linkNoPrefix, a = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(t) || t.indexOf(o) === 0, c = o ? this._w.RegExp("^" + this.util.escapeStringRegexp(t.substr(0, o.length))).test(o) : !1;
    t = e.linkValue = i.textContent = t ? l ? t : o && !a && !c ? o + t : a ? t : /^www\./.test(t) ? "http://" + t : this.context.anchor.host + (/^\//.test(t) ? "" : "/") + t : "", this.plugins.anchor.selfPathBookmark.call(this, t) ? (e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active")) : (e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active")), !this.plugins.anchor.selfPathBookmark.call(this, t) && e.downloadCheck.checked ? e.download.style.display = "block" : e.download.style.display = "none";
  },
  setCtx: function(e, t) {
    e && (t.linkAnchor = e, t.linkValue = e.href, t.currentRel = e.rel.split(" "));
  },
  updateAnchor: function(e, t, i, o, l) {
    !this.plugins.anchor.selfPathBookmark.call(this, t) && o.downloadCheck.checked ? e.setAttribute("download", i || t) : e.removeAttribute("download"), o.newWindowCheck.checked ? e.target = "_blank" : e.removeAttribute("target");
    const a = o.currentRel.join(" ");
    a ? e.rel = a : e.removeAttribute("rel"), e.href = t, l ? e.children.length === 0 && (e.textContent = "") : e.textContent = i;
  },
  createAnchor: function(e, t) {
    if (e.linkValue.length === 0) return null;
    const i = e.linkValue, o = e.anchorText, l = o.value.length === 0 ? i : o.value, a = e.linkAnchor || this.util.createElement("A");
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
    const o = t.split(" ");
    for (let l = 0, a = o.length, c; l < a; l++)
      c = i.indexOf(o[l]), c === -1 && i.push(o[l]);
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
}, Va = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([Wt, On]);
    const t = e.context, i = t.link = {
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      _linkAnchor: null,
      anchorCtx: null
    };
    let o = this.setDialog(e);
    i.modal = o;
    let l = this.setController_LinkButton(e);
    i.linkController = l, o.querySelector("form").addEventListener("submit", this.submit.bind(e)), l.addEventListener("click", this.onClick_linkController.bind(e)), t.dialog.modal.appendChild(o), t.element.relative.appendChild(l), e.plugins.anchor.initEvent.call(e, "link", o), i.focusElement = t.anchor.caller.link.urlInput, o = null, l = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), o = e.icons;
    i.className = "se-dialog-content", i.style.display = "none";
    let l = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + o.cancel + '</button><span class="se-modal-title">' + t.dialogBox.linkBox.title + "</span></div>" + e.context.anchor.forms.innerHTML + '<div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>";
    return i.innerHTML = l, i;
  },
  /** modify controller button */
  setController_LinkButton: function(e) {
    const t = e.lang, i = e.icons, o = e.util.createElement("DIV");
    return o.className = "se-controller se-controller-link", o.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><span><a target="_blank" href=""></a>&nbsp;</span><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + i.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="unlink" tabindex="-1" class="se-btn se-tooltip">' + i.unlink + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.unlink + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", o;
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
          const o = this.util.createElement(i[0].nodeName);
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
        }, !1), o = this.util.getChildElement(this.context.link._linkAnchor, function(l) {
          return l.childNodes.length === 0 || l.nodeType === 3;
        }, !0);
        this.setRange(i, 0, o, o.textContent.length), this.nodeChange(null, null, ["A"], !1);
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
var wi = { exports: {} }, Ha = wi.exports, Xl;
function Fa() {
  return Xl || (Xl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Ha, function(t, i) {
      const o = {
        name: "component",
        /**
         * @description Create a container for the resizing component and insert the element.
         * @param {Element} cover Cover element (FIGURE)
         * @param {String} className Class name of container (fixed: se-component)
         * @returns {Element} Created container element
         */
        set_container: function(l, a) {
          const c = this.util.createElement("DIV");
          return c.className = "se-component " + a, c.appendChild(l), c;
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
        value: o
      })), o;
    });
  }(wi)), wi.exports;
}
var Oa = /* @__PURE__ */ Fa();
const qi = /* @__PURE__ */ we(Oa);
var ki = { exports: {} }, Pa = ki.exports, Jl;
function Ua() {
  return Jl || (Jl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Pa, function(t, i) {
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
        add: function(l) {
          const a = l.icons, c = l.context;
          c.resizing = {
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
          c.resizing.resizeContainer = f, c.resizing.resizeDiv = f.querySelector(".se-modal-resize"), c.resizing.resizeDot = f.querySelector(".se-resize-dot"), c.resizing.resizeDisplay = f.querySelector(".se-resize-display");
          let n = this.setController_button(l);
          c.resizing.resizeButton = n;
          let b = c.resizing.resizeHandles = c.resizing.resizeDot.querySelectorAll("span");
          c.resizing.resizeButtonGroup = n.querySelector("._se_resizing_btn_group"), c.resizing.rotationButtons = n.querySelectorAll("._se_resizing_btn_group ._se_rotation"), c.resizing.percentageButtons = n.querySelectorAll("._se_resizing_btn_group ._se_percentage"), c.resizing.alignMenu = n.querySelector(".se-resizing-align-list"), c.resizing.alignMenuList = c.resizing.alignMenu.querySelectorAll("button"), c.resizing.alignButton = n.querySelector("._se_resizing_align_button"), c.resizing.autoSizeButton = n.querySelector("._se_resizing_btn_group ._se_auto_size"), c.resizing.captionButton = n.querySelector("._se_resizing_caption_button"), f.addEventListener("mousedown", function(u) {
            u.preventDefault();
          }), b[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), n.addEventListener("click", this.onClick_resizeButton.bind(l)), c.element.relative.appendChild(f), c.element.relative.appendChild(n), f = null, n = null, b = null;
        },
        /** resize controller, button (image, iframe, video) */
        setController_resize: function(l) {
          const a = l.util.createElement("DIV");
          return a.className = "se-controller se-resizing-container", a.style.display = "none", a.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', a;
        },
        setController_button: function(l) {
          const a = l.lang, c = l.icons, f = l.util.createElement("DIV");
          return f.className = "se-controller se-controller-resizing", f.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.resize100 + '</span></span></button><button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage"><span>75%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.resize75 + '</span></span></button><button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage"><span>50%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.resize50 + '</span></span></button><button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + c.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.autoSize + '</span></span></button><button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + c.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.rotateLeft + '</span></span></button><button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + c.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.rotateRight + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + c.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.mirrorHorizontal + '</span></span></button><button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + c.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.mirrorVertical + '</span></span></button><button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + c.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.toolbar.align + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list"><div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + c.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.basic + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + c.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.left + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + c.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.center + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + c.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.right + '</span></span></button></li></ul></div></div><button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + c.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.caption + '</span></span></button><button type="button" data-command="revert" class="se-btn se-tooltip">' + c.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.revertButton + '</span></span></button><button type="button" data-command="update" class="se-btn se-tooltip">' + c.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.edit + '</span></span></button><button type="button" data-command="delete" class="se-btn se-tooltip">' + c.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.remove + "</span></span></button></div>", f;
        },
        /**
         * @description Gets the width size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeX: function(l, a, c, f) {
          return a || (a = l._element), c || (c = l._cover), f || (f = l._container), a ? /%$/.test(a.style.width) ? (f && this.util.getNumber(f.style.width, 2) || 100) + "%" : a.style.width : "";
        },
        /**
         * @description Gets the height size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeY: function(l, a, c, f) {
          return a || (a = l._element), c || (c = l._cover), f || (f = l._container), !f || !c ? a && a.style.height || "" : this.util.getNumber(c.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? c.style.height : !/%$/.test(a.style.height) || !/%$/.test(a.style.width) ? a.style.height : (f && this.util.getNumber(f.style.height, 2) || 100) + "%";
        },
        /**
         * @description Called at the "openModify" to put the size of the current target into the size input element.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Object} pluginObj Plugin object
         */
        _module_setModifyInputSize: function(l, a) {
          const c = l._onlyPercentage && this.context.resizing._rotateVertical;
          l.proportion.checked = l._proportionChecked = l._element.getAttribute("data-proportion") !== "false";
          let f = c ? "" : this.plugins.resizing._module_getSizeX.call(this, l);
          if (f === l._defaultSizeX && (f = ""), l._onlyPercentage && (f = this.util.getNumber(f, 2)), l.inputX.value = f, a.setInputSize.call(this, "x"), !l._onlyPercentage) {
            let n = c ? "" : this.plugins.resizing._module_getSizeY.call(this, l);
            n === l._defaultSizeY && (n = ""), l._onlyPercentage && (n = this.util.getNumber(n, 2)), l.inputY.value = n;
          }
          l.inputX.disabled = !!c, l.inputY.disabled = !!c, l.proportion.disabled = !!c, a.setRatio.call(this);
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
            const c = l.inputX.value.replace(/\d+|\./g, "") || l.sizeUnit, f = l.inputY.value.replace(/\d+|\./g, "") || l.sizeUnit;
            if (c !== f) return;
            const n = c === "%" ? 2 : 0;
            a === "x" ? l.inputY.value = this.util.getNumber(l._ratioY * this.util.getNumber(l.inputX.value, n), n) + f : l.inputX.value = this.util.getNumber(l._ratioX * this.util.getNumber(l.inputY.value, n), n) + c;
          }
        },
        /**
         * @description It is called in "setRatio" (input and proportionCheck tags changeEvent), 
         * checks the value of the input tag, calculates the ratio, and resets it in the input tag.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_setRatio: function(l) {
          const a = l.inputX.value, c = l.inputY.value;
          if (l.proportion.checked && /\d+/.test(a) && /\d+/.test(c)) {
            const f = a.replace(/\d+|\./g, "") || l.sizeUnit, n = c.replace(/\d+|\./g, "") || l.sizeUnit;
            if (f !== n)
              l._ratio = !1;
            else if (!l._ratio) {
              const b = this.util.getNumber(a, 0), u = this.util.getNumber(c, 0);
              l._ratio = !0, l._ratioX = b / u, l._ratioY = u / b;
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
          const a = this.plugins.resizing._module_getSizeX.call(this, l), c = this.plugins.resizing._module_getSizeY.call(this, l);
          l._element.setAttribute("width", a.replace("px", "")), l._element.setAttribute("height", c.replace("px", "")), l._element.setAttribute("data-size", a + "," + c), l._videoRatio && (l._videoRatio = c);
        },
        /**
         * @description Call the resizing module
         * @param {Element} targetElement Resizing target element
         * @param {string} plugin Plugin name
         * @returns {Object} Size of resizing div {w, h, t, l}
         */
        call_controller_resize: function(l, a) {
          const c = this.context.resizing, f = this.context[a];
          c._resize_plugin = a;
          const n = c.resizeContainer, b = c.resizeDiv, u = this.util.getOffset(l, this.context.element.wysiwygFrame), v = c._rotateVertical = /^(90|270)$/.test(Math.abs(l.getAttribute("data-rotate")).toString()), w = v ? l.offsetHeight : l.offsetWidth, S = v ? l.offsetWidth : l.offsetHeight, E = u.top, R = u.left - this.context.element.wysiwygFrame.scrollLeft;
          n.style.top = E + "px", n.style.left = R + "px", n.style.width = w + "px", n.style.height = S + "px", b.style.top = "0px", b.style.left = "0px", b.style.width = w + "px", b.style.height = S + "px";
          let s = l.getAttribute("data-align") || "basic";
          s = s === "none" ? "basic" : s;
          const r = this.util.getParentElement(l, this.util.isComponent), d = this.util.getParentElement(l, "FIGURE"), p = this.plugins.resizing._module_getSizeX.call(this, f, l, d, r) || "auto", m = f._onlyPercentage && a === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, f, l, d, r) || "auto");
          this.util.changeTxt(c.resizeDisplay, this.lang.dialogBox[s] + " (" + p + m + ")"), c.resizeButtonGroup.style.display = f._resizing ? "" : "none";
          const g = f._resizing && !f._resizeDotHide && !f._onlyPercentage ? "flex" : "none", h = c.resizeHandles;
          for (let L = 0, z = h.length; L < z; L++)
            h[L].style.display = g;
          if (f._resizing) {
            const L = c.rotationButtons;
            L[0].style.display = L[1].style.display = f._rotation ? "" : "none";
          }
          if (f._alignHide)
            c.alignButton.style.display = "none";
          else {
            c.alignButton.style.display = "";
            const L = c.alignMenuList;
            this.util.changeElement(c.alignButton.firstElementChild, c.alignIcons[s]);
            for (let z = 0, N = L.length; z < N; z++)
              L[z].getAttribute("data-value") === s ? this.util.addClass(L[z], "on") : this.util.removeClass(L[z], "on");
          }
          const y = c.percentageButtons, C = /%$/.test(l.style.width) && /%$/.test(r.style.width) ? this.util.getNumber(r.style.width, 0) / 100 + "" : "";
          for (let L = 0, z = y.length; L < z; L++)
            y[L].getAttribute("data-value") === C ? this.util.addClass(y[L], "active") : this.util.removeClass(y[L], "active");
          f._captionShow ? (c.captionButton.style.display = "", this.util.getChildElement(l.parentNode, "figcaption") ? (this.util.addClass(c.captionButton, "active"), f._captionChecked = !0) : (this.util.removeClass(c.captionButton, "active"), f._captionChecked = !1)) : c.captionButton.style.display = "none", n.style.display = "block";
          const _ = { left: 0, top: 50 };
          this.options.iframe && (_.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, _.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(c.resizeButton, n, "bottom", _);
          const x = function() {
            this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
          };
          this.controllersOn(n, c.resizeButton, x.bind(this), l, a), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), c._resize_w = w, c._resize_h = S;
          const I = (l.getAttribute("origin-size") || "").split(",");
          return c._origin_w = I[0] || l.naturalWidth, c._origin_h = I[1] || l.naturalHeight, {
            w,
            h: S,
            t: E,
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
          const a = l.target, c = a.getAttribute("data-command") || a.parentNode.getAttribute("data-command");
          if (!c) return;
          const f = a.getAttribute("data-value") || a.parentNode.getAttribute("data-value"), n = this.context.resizing._resize_plugin, b = this.context[n], u = b._element, v = this.plugins[n];
          if (l.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), c === "onalign"))) {
            switch (c) {
              case "auto":
                this.plugins.resizing.resetTransform.call(this, u), v.setAutoSize.call(this), this.selectComponent(u, n);
                break;
              case "percent":
                let w = this.plugins.resizing._module_getSizeY.call(this, b);
                if (this.context.resizing._rotateVertical) {
                  const g = u.getAttribute("data-percentage");
                  g && (w = g.split(",")[1]);
                }
                this.plugins.resizing.resetTransform.call(this, u), v.setPercentSize.call(this, f * 100, this.util.getNumber(w, 0) === null || !/%$/.test(w) ? "" : w), this.selectComponent(u, n);
                break;
              case "mirror":
                const S = u.getAttribute("data-rotate") || "0";
                let E = u.getAttribute("data-rotateX") || "", R = u.getAttribute("data-rotateY") || "";
                f === "h" && !this.context.resizing._rotateVertical || f === "v" && this.context.resizing._rotateVertical ? R = R ? "" : "180" : E = E ? "" : "180", u.setAttribute("data-rotateX", E), u.setAttribute("data-rotateY", R), this.plugins.resizing._setTransForm(u, S, E, R);
                break;
              case "rotate":
                const s = this.context.resizing, r = u.getAttribute("data-rotate") * 1 + f * 1, d = this._w.Math.abs(r) >= 360 ? 0 : r;
                u.setAttribute("data-rotate", d), s._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(d).toString()), this.plugins.resizing.setTransformSize.call(this, u, null, null), this.selectComponent(u, n);
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
        setTransformSize: function(l, a, c) {
          let f = l.getAttribute("data-percentage");
          const n = this.context.resizing._rotateVertical, b = l.getAttribute("data-rotate") * 1;
          let u = "";
          if (f && !n)
            f = f.split(","), f[0] === "auto" && f[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, f[0], f[1]);
          else {
            const v = this.util.getParentElement(l, "FIGURE"), w = a || l.offsetWidth, S = c || l.offsetHeight, E = (n ? S : w) + "px", R = (n ? w : S) + "px";
            if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, w + "px", S + "px", !0), v.style.width = E, v.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : R, n) {
              let s = w / 2 + "px " + w / 2 + "px 0", r = S / 2 + "px " + S / 2 + "px 0";
              u = b === 90 || b === -270 ? r : s;
            }
          }
          l.style.transformOrigin = u, this.plugins.resizing._setTransForm(l, b.toString(), l.getAttribute("data-rotateX") || "", l.getAttribute("data-rotateY") || ""), n ? l.style.maxWidth = "none" : l.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, l);
        },
        _setTransForm: function(l, a, c, f) {
          let n = (l.offsetWidth - l.offsetHeight) * (/-/.test(a) ? 1 : -1), b = "";
          if (/[1-9]/.test(a) && (c || f))
            switch (b = c ? "Y" : "X", a) {
              case "90":
                b = c && f ? "X" : f ? b : "";
                break;
              case "270":
                n *= -1, b = c && f ? "Y" : c ? b : "";
                break;
              case "-90":
                b = c && f ? "Y" : c ? b : "";
                break;
              case "-270":
                n *= -1, b = c && f ? "X" : f ? b : "";
                break;
              default:
                b = "";
            }
          a % 180 === 0 && (l.style.maxWidth = ""), l.style.transform = "rotate(" + a + "deg)" + (c ? " rotateX(" + c + "deg)" : "") + (f ? " rotateY(" + f + "deg)" : "") + (b ? " translate" + b + "(" + n + "px)" : "");
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
          const a = this.context.resizing, c = a._resize_direction = l.target.classList[0];
          a._resizeClientX = l.clientX, a._resizeClientY = l.clientY, this.context.element.resizeBackground.style.display = "block", a.resizeButton.style.display = "none", a.resizeDiv.style.float = /l/.test(c) ? "right" : /r/.test(c) ? "left" : "none";
          const f = (function(u) {
            if (u.type === "keydown" && u.keyCode !== 27) return;
            const v = a._isChange;
            a._isChange = !1, this.removeDocEvent("mousemove", n), this.removeDocEvent("mouseup", f), this.removeDocEvent("keydown", f), u.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, c), v && this.history.push(!1));
          }).bind(this), n = this.plugins.resizing.resizing_element.bind(this, a, c, this.context[a._resize_plugin]);
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
        resizing_element: function(l, a, c, f) {
          const n = f.clientX, b = f.clientY;
          let u = c._element_w, v = c._element_h;
          const w = c._element_w + (/r/.test(a) ? n - l._resizeClientX : l._resizeClientX - n), S = c._element_h + (/b/.test(a) ? b - l._resizeClientY : l._resizeClientY - b), E = c._element_h / c._element_w * w;
          /t/.test(a) && (l.resizeDiv.style.top = c._element_h - (/h/.test(a) ? S : E) + "px"), /l/.test(a) && (l.resizeDiv.style.left = c._element_w - w + "px"), /r|l/.test(a) && (l.resizeDiv.style.width = w + "px", u = w), /^(t|b)[^h]$/.test(a) ? (l.resizeDiv.style.height = E + "px", v = E) : /^(t|b)h$/.test(a) && (l.resizeDiv.style.height = S + "px", v = S), l._resize_w = u, l._resize_h = v, this.util.changeTxt(l.resizeDisplay, this._w.Math.round(u) + " x " + this._w.Math.round(v)), l._isChange = !0;
        },
        /**
         * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
         * Called at the mouse-up event registered in "onMouseDown_resize_handle".
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
         */
        cancel_controller_resize: function(l) {
          const a = this.context.resizing._rotateVertical;
          this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
          let c = this._w.Math.round(a ? this.context.resizing._resize_h : this.context.resizing._resize_w), f = this._w.Math.round(a ? this.context.resizing._resize_w : this.context.resizing._resize_h);
          if (!a && !/%$/.test(c)) {
            const u = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
            this.util.getNumber(c, 0) > u && (f = this._w.Math.round(f / c * u), c = u);
          }
          const n = this.context.resizing._resize_plugin;
          this.plugins[n].setSize.call(this, c, f, !1, l), a && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, c, f), this.selectComponent(this.context[n]._element, n);
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
        value: o
      })), o;
    });
  }(ki)), ki.exports;
}
var Wa = /* @__PURE__ */ Ua();
const Pn = /* @__PURE__ */ we(Wa);
var xi = { exports: {} }, Za = xi.exports, Ql;
function $a() {
  return Ql || (Ql = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Za, function(t, i) {
      const o = {
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
        upload: function(l, a, c, f, n) {
          this.showLoading();
          const b = this.plugins.fileManager, u = b._xmlHttp = this.util.getXMLHttpRequest();
          if (u.onreadystatechange = b._callBackUpload.bind(this, u, f, n), u.open("post", l, !0), a !== null && typeof a == "object" && this._w.Object.keys(a).length > 0)
            for (let v in a)
              u.setRequestHeader(v, a[v]);
          u.send(c);
        },
        _callBackUpload: function(l, a, c) {
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
              if (typeof c != "function" || c("", f, this)) {
                const n = "[SUNEDITOR.fileManager.upload.serverException] status: " + l.status + ", response: " + (f.errorMessage || l.responseText);
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
        checkInfo: function(l, a, c, f, n) {
          let b = [];
          for (let r = 0, d = a.length; r < d; r++)
            b = b.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(a[r] + ':not([data-se-embed="true"])')));
          const u = this.plugins.fileManager, v = this.context[l], w = v._infoList, S = u.setInfo.bind(this);
          if (b.length === w.length)
            if (this._componentsInfoReset) {
              for (let r = 0, d = b.length; r < d; r++)
                S(l, b[r], c, null, n);
              return;
            } else {
              let r = !1;
              for (let d = 0, p = w.length, m; d < p; d++)
                if (m = w[d], b.filter(function(g) {
                  return m.src === g.src && m.index.toString() === g.getAttribute("data-index");
                }).length === 0) {
                  r = !0;
                  break;
                }
              if (!r) return;
            }
          const E = n ? this.context.resizing._resize_plugin : "";
          n && (this.context.resizing._resize_plugin = l);
          const R = [], s = [];
          for (let r = 0, d = w.length; r < d; r++)
            s[r] = w[r].index;
          for (v.__updateTags = b; b.length > 0; ) {
            const r = b.shift();
            !this.util.getParentElement(r, this.util.isMediaComponent) || !u._checkMediaComponent(r) ? (R.push(v._infoIndex), f(r)) : !r.getAttribute("data-index") || s.indexOf(r.getAttribute("data-index") * 1) < 0 ? (R.push(v._infoIndex), r.removeAttribute("data-index"), S(l, r, c, null, n)) : R.push(r.getAttribute("data-index") * 1);
          }
          for (let r = 0, d; r < w.length; r++)
            d = w[r].index, !(R.indexOf(d) > -1) && (w.splice(r, 1), typeof c == "function" && c(null, d, "delete", null, 0, this), r--);
          n && (this.context.resizing._resize_plugin = E);
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
        setInfo: function(l, a, c, f, n) {
          const b = n ? this.context.resizing._resize_plugin : "";
          n && (this.context.resizing._resize_plugin = l);
          const u = this.plugins[l], v = this.context[l], w = v._infoList;
          let S = a.getAttribute("data-index"), E = null, R = "";
          if (f || (f = {
            name: a.getAttribute("data-file-name") || (typeof a.src == "string" ? a.src.split("/").pop() : ""),
            size: a.getAttribute("data-file-size") || 0
          }), !S || this._componentsInfoInit)
            R = "create", S = v._infoIndex++, a.setAttribute("data-index", S), a.setAttribute("data-file-name", f.name), a.setAttribute("data-file-size", f.size), E = {
              src: a.src,
              index: S * 1,
              name: f.name,
              size: f.size
            }, w.push(E);
          else {
            R = "update", S *= 1;
            for (let s = 0, r = w.length; s < r; s++)
              if (S === w[s].index) {
                E = w[s];
                break;
              }
            E || (S = v._infoIndex++, E = { index: S }, w.push(E)), E.src = a.src, E.name = a.getAttribute("data-file-name"), E.size = a.getAttribute("data-file-size") * 1;
          }
          if (E.element = a, E.delete = u.destroy.bind(this, a), E.select = (function(s) {
            s.scrollIntoView(!0), this._w.setTimeout(u.select.bind(this, s));
          }).bind(this, a), n) {
            if (!a.getAttribute("origin-size") && a.naturalWidth && a.setAttribute("origin-size", a.naturalWidth + "," + a.naturalHeight), !a.getAttribute("data-origin")) {
              const s = this.util.getParentElement(a, this.util.isMediaComponent), r = this.util.getParentElement(a, "FIGURE"), d = this.plugins.resizing._module_getSizeX.call(this, v, a, r, s), p = this.plugins.resizing._module_getSizeY.call(this, v, a, r, s);
              a.setAttribute("data-origin", d + "," + p), a.setAttribute("data-size", d + "," + p);
            }
            if (!a.style.width) {
              const s = (a.getAttribute("data-size") || a.getAttribute("data-origin") || "").split(",");
              u.onModifyMode.call(this, a, null), u.applySize.call(this, s[0], s[1]);
            }
            this.context.resizing._resize_plugin = b;
          }
          typeof c == "function" && c(a, S, R, E, --v._uploadFileLength < 0 ? 0 : v._uploadFileLength, this);
        },
        /**
         * @description Delete info object at "_infoList"
         * @param {String} pluginName Plugin name 
         * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */
        deleteInfo: function(l, a, c) {
          if (a >= 0) {
            const f = this.context[l]._infoList;
            for (let n = 0, b = f.length; n < b; n++)
              if (a === f[n].index) {
                f.splice(n, 1), typeof c == "function" && c(null, a, "delete", null, 0, this);
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
          const c = this.context[l];
          if (typeof a == "function") {
            const f = c._infoList;
            for (let n = 0, b = f.length; n < b; n++)
              a(null, f[n].index, "delete", null, 0, this);
          }
          c._infoList = [], c._infoIndex = 0;
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
        value: o
      })), o;
    });
  }(xi)), xi.exports;
}
var qa = /* @__PURE__ */ $a();
const ji = /* @__PURE__ */ we(qa), ja = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([Wt, On, qi, Pn, ji]);
    const t = e.options, i = e.context, o = i.image = {
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
    o.modal = l, o.imgInputFile = l.querySelector("._se_image_file"), o.imgUrlFile = l.querySelector("._se_image_url"), o.focusElement = o.imgInputFile || o.imgUrlFile, o.altText = l.querySelector("._se_image_alt"), o.captionCheckEl = l.querySelector("._se_image_check_caption"), o.previewSrc = l.querySelector("._se_tab_content_image .se-link-preview"), l.querySelector(".se-dialog-tabs").addEventListener("click", this.openTab.bind(e)), l.querySelector("form").addEventListener("submit", this.submit.bind(e)), o.imgInputFile && l.querySelector(".se-file-remove").addEventListener("click", this._removeSelectedFiles.bind(o.imgInputFile, o.imgUrlFile, o.previewSrc)), o.imgUrlFile && o.imgUrlFile.addEventListener("input", this._onLinkPreview.bind(o.previewSrc, o._v_src, t.linkProtocol)), o.imgInputFile && o.imgUrlFile && o.imgInputFile.addEventListener("change", this._fileInputChange.bind(o));
    const a = l.querySelector(".__se__gallery");
    a && a.addEventListener("click", this._openGallery.bind(e)), o.proportion = {}, o.inputX = {}, o.inputY = {}, t.imageResizing && (o.proportion = l.querySelector("._se_image_check_proportion"), o.inputX = l.querySelector("._se_image_size_x"), o.inputY = l.querySelector("._se_image_size_y"), o.inputX.value = t.imageWidth, o.inputY.value = t.imageHeight, o.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), o.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), o.inputX.addEventListener("change", this.setRatio.bind(e)), o.inputY.addEventListener("change", this.setRatio.bind(e)), o.proportion.addEventListener("change", this.setRatio.bind(e)), l.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(l), e.plugins.anchor.initEvent.call(e, "image", l.querySelector("._se_tab_content_url")), o.anchorCtx = e.context.anchor.caller.image, l = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, o = e.util.createElement("DIV");
    o.className = "se-dialog-content se-dialog-image", o.style.display = "none";
    let l = '<div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" class="close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.imageBox.title + '</span></div><div class="se-dialog-tabs"><button type="button" class="_se_tab_link active" data-tab-link="image">' + i.toolbar.image + '</button><button type="button" class="_se_tab_link" data-tab-link="url">' + i.toolbar.link + '</button></div><form method="post" enctype="multipart/form-data"><div class="_se_tab_content _se_tab_content_image"><div class="se-dialog-body"><div style="border-bottom: 1px dashed #ccc;">';
    if (t.imageFileInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_image_file" type="file" accept="' + t.imageAccept + '"' + (t.imageMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.imageUrlInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url _se_image_url" type="text" />' + (t.imageGalleryUrl && e.plugins.imageGallery ? '<button type="button" class="se-btn se-dialog-files-edge-button __se__gallery" title="' + i.toolbar.imageGallery + '" aria-label="' + i.toolbar.imageGallery + '">' + e.icons.image_gallery + "</button>" : "") + '</div><pre class="se-link-preview"></pre></div>'), l += '</div><div class="se-dialog-form"><label>' + i.dialogBox.imageBox.altText + '</label><input class="se-input-form _se_image_alt" type="text" /></div>', t.imageResizing) {
      const a = t.imageSizeOnlyPercentage, c = a ? ' style="display: none !important;"' : "", f = t.imageHeightShow ? "" : ' style="display: none !important;"';
      l += '<div class="se-dialog-form">', a || !t.imageHeightShow ? l += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.size + "</label></div>" : l += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + i.dialogBox.height + "</label></div>", l += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (a ? ' type="number" min="1"' : 'type="text"') + (a ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + f + ">" + (a ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + c + (a ? ' max="100"' : "") + f + "/><label" + c + f + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + '</label><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
    }
    return l += '<div class="se-dialog-form se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_image_check_caption" />&nbsp;' + i.dialogBox.caption + '</label></div></div></div><div class="_se_tab_content _se_tab_content_url" style="display: none">' + e.context.anchor.forms.innerHTML + '</div><div class="se-dialog-footer"><div' + (t.imageAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", o.innerHTML = l, o;
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
    const o = i.target.value.trim();
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
    const t = e || this.context.image._element, i = this.util.getParentElement(t, this.util.isMediaComponent) || t, o = t.getAttribute("data-index") * 1;
    if (typeof this.functions.onImageDeleteBefore == "function" && this.functions.onImageDeleteBefore(t, i, o, this) === !1) return;
    let l = i.previousElementSibling || i.nextElementSibling;
    const a = i.parentNode;
    this.util.removeItem(i), this.plugins.image.init.call(this), this.controllersOff(), a !== this.context.element.wysiwyg && this.util.removeItemAllParents(a, function(c) {
      return c.childNodes.length === 0;
    }, null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "image", o, this.functions.onImageUpload), this.history.push(!1);
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
    const o = i.getAttribute("data-tab-link"), l = "_se_tab_content";
    let a, c, f;
    for (c = t.getElementsByClassName(l), a = 0; a < c.length; a++)
      c[a].style.display = "none";
    for (f = t.getElementsByClassName("_se_tab_link"), a = 0; a < f.length; a++)
      this.util.removeClass(f[a], "active");
    return t.querySelector("." + l + "_" + o).style.display = "block", this.util.addClass(i, "active"), o === "image" && this.context.image.focusElement ? this.context.image.focusElement.focus() : o === "url" && this.context.anchor.caller.image.urlInput.focus(), !1;
  },
  submit: function(e) {
    const t = this.context.image, i = this.plugins.image;
    e.preventDefault(), e.stopPropagation(), t._altText = t.altText.value, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked, t._resizing && (t._proportionChecked = t.proportion.checked);
    try {
      this.context.dialog.updateModal && i.update_image.call(this, !1, !0, !1), t.imgInputFile && t.imgInputFile.files.length > 0 ? (this.showLoading(), i.submitAction.call(this, this.context.image.imgInputFile.files)) : t.imgUrlFile && t._v_src._linkValue.length > 0 && (this.showLoading(), i.onRender_imgUrl.call(this, t._v_src._linkValue));
    } catch (o) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.submit.fail] cause : "' + o.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, i = [];
    for (let f = 0, n = e.length; f < n; f++)
      /image/i.test(e[f].type) && (i.push(e[f]), t += e[f].size);
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
    const l = this.context.image;
    l._uploadFileLength = i.length;
    const c = {
      anchor: this.plugins.anchor.createAnchor.call(this, l.anchorCtx, !0),
      inputWidth: l.inputX.value,
      inputHeight: l.inputY.value,
      align: l._align,
      isUpdate: this.context.dialog.updateModal,
      alt: l._altText,
      element: l._element
    };
    if (typeof this.functions.onImageUploadBefore == "function") {
      const f = this.functions.onImageUploadBefore(i, c, this, (function(n) {
        n && this._w.Array.isArray(n.result) ? this.plugins.image.register.call(this, c, n) : this.plugins.image.upload.call(this, c, n);
      }).bind(this));
      if (typeof f > "u") return;
      if (!f) {
        this.closeLoading();
        return;
      }
      this._w.Array.isArray(f) && f.length > 0 && (i = f);
    }
    this.plugins.image.upload.call(this, c, i);
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
    const i = this.options.imageUploadUrl, o = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const l = new FormData();
      for (let a = 0; a < o; a++)
        l.append("file-" + a, t[a]);
      this.plugins.fileManager.upload.call(this, i, this.options.imageUploadHeader, l, this.plugins.image.callBack_imgUpload.bind(this, e), this.functions.onImageUploadError);
    } else
      this.plugins.image.setup_reader.call(this, t, e.anchor, e.inputWidth, e.inputHeight, e.align, e.alt, o, e.isUpdate);
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
    for (let o = 0, l = i.length, a; o < l; o++)
      if (a = { name: i[o].name, size: i[o].size }, e.isUpdate) {
        this.plugins.image.update_src.call(this, i[o].url, e.element, a);
        break;
      } else
        this.plugins.image.create_image.call(this, i[o].url, e.anchor, e.inputWidth, e.inputHeight, e.align, a, e.alt);
    this.closeLoading();
  },
  setup_reader: function(e, t, i, o, l, a, c, f) {
    try {
      if (c === 0) {
        this.closeLoading(), console.warn("[SUNEDITOR.image.base64.fail] cause : No applicable files");
        return;
      }
      this.context.image.base64RenderIndex = c;
      const n = this._w.FileReader, b = [c];
      this.context.image.inputX.value = i, this.context.image.inputY.value = o;
      for (let u = 0, v, w; u < c; u++)
        v = new n(), w = e[u], v.onload = (function(S, E, R, s, r) {
          b[r] = { result: S.result, file: s }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, E, b, R, t, i, o, l, a), this.closeLoading());
        }).bind(this, v, f, this.context.image._element, w, u), v.readAsDataURL(w);
    } catch (n) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + n.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, i, o, l, a, c, f) {
    const n = this.plugins.image.update_src, b = this.plugins.image.create_image;
    for (let u = 0, v = t.length; u < v; u++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[u].file.name), this.context.image._element.setAttribute("data-file-size", t[u].file.size), n.call(this, t[u].result, i, t[u].file)) : b.call(this, t[u].result, o, l, a, c, t[u].file, f);
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
    const e = this.plugins.image, t = this.context.image, i = (function(o) {
      e.onModifyMode.call(this, o, null), e.openModify.call(this, !0), t.inputX.value = t._origin_w, t.inputY.value = t._origin_h;
      const l = this.util.getFormatElement(o);
      l && (t._align = l.style.textAlign || l.style.float), this.util.isAnchor(o.parentNode) && !t.anchorCtx.linkValue && (t.anchorCtx.linkValue = " "), e.update_image.call(this, !0, !1, !0), e.init.call(this);
    }).bind(this);
    this.plugins.fileManager.checkInfo.call(this, "image", ["img"], this.functions.onImageUpload, i, !0);
  },
  /**
   * @Override fileManager
   */
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "image", this.functions.onImageUpload);
  },
  create_image: function(e, t, i, o, l, a, c) {
    const f = this.plugins.image, n = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let b = this.util.createElement("IMG");
    b.src = e, b.alt = c, b.setAttribute("data-rotate", "0"), t = f.onRender_link.call(this, b, t ? t.cloneNode(!1) : null), n._resizing && b.setAttribute("data-proportion", n._proportionChecked);
    const u = this.plugins.component.set_cover.call(this, t), v = this.plugins.component.set_container.call(this, u, "se-image-container");
    n._captionChecked && (n._caption = this.plugins.component.create_caption.call(this), u.appendChild(n._caption)), n._element = b, n._cover = u, n._container = v, f.applySize.call(this, i, o), f.setAlign.call(this, l, b, u, v), b.onload = f._image_create_onload.bind(this, b, n.svgDefaultSize, v), this.insertComponent(v, !0, !0, !this.options.mediaAutoSelect) && this.plugins.fileManager.setInfo.call(this, "image", b, this.functions.onImageUpload, a, !0), this.context.resizing._resize_plugin = "";
  },
  _image_create_onload: function(e, t, i) {
    if (e.offsetWidth === 0 && this.plugins.image.applySize.call(this, t, ""), this.options.mediaAutoSelect)
      this.selectComponent(e, "image");
    else {
      const o = this.appendFormatTag(i, null);
      o && this.setRange(o, 0, o, 0);
    }
    this.history.push(!1);
  },
  update_image: function(e, t, i) {
    const o = this.context.image;
    let l = o._element, a = o._cover, c = o._container, f = !1;
    a === null && (f = !0, l = o._element.cloneNode(!0), a = this.plugins.component.set_cover.call(this, l)), c === null ? (a = a.cloneNode(!0), l = a.querySelector("img"), f = !0, c = this.plugins.component.set_container.call(this, a, "se-image-container")) : f && (c.innerHTML = "", c.appendChild(a), o._cover = a, o._element = l, f = !1);
    let n;
    const b = this.util.isNumber(o.inputX.value) ? o.inputX.value + o.sizeUnit : o.inputX.value, u = this.util.isNumber(o.inputY.value) ? o.inputY.value + o.sizeUnit : o.inputY.value;
    /%$/.test(l.style.width) ? n = b !== c.style.width || u !== c.style.height : n = b !== l.style.width || u !== l.style.height, l.alt = o._altText;
    let v = !1;
    o._captionChecked ? o._caption || (o._caption = this.plugins.component.create_caption.call(this), a.appendChild(o._caption), v = !0) : o._caption && (this.util.removeItem(o._caption), o._caption = null, v = !0);
    let w = null;
    const S = this.plugins.anchor.createAnchor.call(this, o.anchorCtx, !0);
    if (S)
      o._linkElement !== S || f && !c.contains(S) ? (o._linkElement = S.cloneNode(!1), a.insertBefore(this.plugins.image.onRender_link.call(this, l, o._linkElement), o._caption), w = o._element) : o._linkElement.setAttribute("data-image-link", "image");
    else if (o._linkElement !== null) {
      const R = l;
      if (R.setAttribute("data-image-link", ""), a.contains(o._linkElement)) {
        const s = R.cloneNode(!0);
        a.removeChild(o._linkElement), a.insertBefore(s, o._caption), o._element = l = s;
      }
    }
    let E = null;
    if (f) {
      if (E = this.util.isRangeFormatElement(o._element.parentNode) || this.util.isWysiwygDiv(o._element.parentNode) ? o._element : this.util.isAnchor(o._element.parentNode) ? o._element.parentNode : this.util.getFormatElement(o._element) || o._element, this.util.getParentElement(o._element, this.util.isNotCheckingNode))
        E = w ? S : o._element, E.parentNode.replaceChild(c, E);
      else if (this.util.isListCell(E)) {
        const R = this.util.getParentElement(o._element, function(s) {
          return s.parentNode === E;
        });
        E.insertBefore(c, R), this.util.removeItem(o._element), this.util.removeEmptyNode(R, null, !0);
      } else if (this.util.isFormatElement(E)) {
        const R = this.util.getParentElement(o._element, function(s) {
          return s.parentNode === E;
        });
        E = this.util.splitElement(E, R), E.parentNode.insertBefore(c, E), this.util.removeItem(o._element), this.util.removeEmptyNode(E, null, !0), E.children.length === 0 && (E.innerHTML = this.util.htmlRemoveWhiteSpace(E.innerHTML));
      } else if (this.util.isFormatElement(E.parentNode)) {
        const R = E.parentNode;
        R.parentNode.insertBefore(c, E.previousSibling ? R.nextElementSibling : R), o.__updateTags.map(function(s) {
          return E.contains(s);
        }).length === 0 && this.util.removeItem(E);
      } else
        E = this.util.isFigures(E.parentNode) ? E.parentNode : E, E.parentNode.replaceChild(c, E);
      l = c.querySelector("img"), o._element = l, o._cover = a, o._container = c;
    }
    w && (f ? (this.util.removeItem(w), this.util.getListChildren(S, function(R) {
      return /IMG/i.test(R.tagName);
    }).length === 0 && this.util.removeItem(S)) : this.util.removeItem(S)), (v || !o._onlyPercentage && n) && !e && (/\d+/.test(l.style.height) || this.context.resizing._rotateVertical && o._captionChecked) && (/%$/.test(o.inputX.value) || /%$/.test(o.inputY.value) ? this.plugins.resizing.resetTransform.call(this, l) : this.plugins.resizing.setTransformSize.call(this, l, this.util.getNumber(o.inputX.value, 0), this.util.getNumber(o.inputY.value, 0))), o._resizing && (l.setAttribute("data-proportion", o._proportionChecked), n && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, l, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", l, this.functions.onImageUpload, null, !0), t && this.selectComponent(l, "image"), i || this.history.push(!1);
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
    let o = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), l, a;
    o ? (o = o.split(","), l = o[0], a = o[1]) : t && (l = t.w, a = t.h), i._origin_w = l || e.style.width || e.width || "", i._origin_h = a || e.style.height || e.height || "";
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
  setSize: function(e, t, i, o) {
    const l = this.context.image, a = /^(rw|lw)$/.test(o) && /\d+/.test(l._element.style.height);
    /^(th|bh)$/.test(o) && /\d+/.test(l._element.style.width) || (l._element.style.width = this.util.isNumber(e) ? e + l.sizeUnit : e, this.plugins.image.cancelPercentAttr.call(this)), a || (l._element.style.height = this.util.isNumber(t) ? t + l.sizeUnit : /%$/.test(t) ? "" : t), l._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i || l._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, l);
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
    const t = (e._element.getAttribute("data-origin") || "").split(","), i = t[0], o = t[1];
    t && (e._onlyPercentage || /%$/.test(i) && (/%$/.test(o) || !/\d/.test(o)) ? this.plugins.image.setPercentSize.call(this, i, o) : this.plugins.image.setSize.call(this, i, o), this.plugins.resizing._module_saveCurrentSize.call(this, e));
  },
  /**
   * @Override resizing
   */
  setPercentSize: function(e, t) {
    const i = this.context.image;
    t = t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + i.sizeUnit : t || "";
    const o = /%$/.test(t);
    i._container.style.width = this.util.isNumber(e) ? e + "%" : e, i._container.style.height = "", i._cover.style.width = "100%", i._cover.style.height = o ? t : "", i._element.style.width = "100%", i._element.style.height = o ? "" : t, i._element.style.maxWidth = "", i._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing.setCaptionPosition.call(this, i._element), this.plugins.resizing._module_saveCurrentSize.call(this, i);
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
  setAlign: function(e, t, i, o) {
    const l = this.context.image;
    e || (e = l._align), t || (t = l._element), i || (i = l._cover), o || (o = l._container), /%$/.test(t.style.width) && e === "center" ? (o.style.minWidth = "100%", i.style.width = o.style.width) : (o.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : !t.style.width || t.style.width === "auto" ? "" : t.style.width || "100%"), this.util.hasClass(o, "__se__float-" + e) || (this.util.removeClass(o, l._floatClassRegExp), this.util.addClass(o, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.image;
    e.imgInputFile && (e.imgInputFile.value = ""), e.imgUrlFile && (e._v_src._linkValue = e.previewSrc.textContent = e.imgUrlFile.value = ""), e.imgInputFile && e.imgUrlFile && (e.imgUrlFile.removeAttribute("disabled"), e.previewSrc.style.textDecoration = ""), e.altText.value = "", e.modal.querySelector('input[name="suneditor_image_radio"][value="none"]').checked = !0, e.captionCheckEl.checked = !1, e._element = null, this.plugins.image.openTab.call(this, "init"), e._resizing && (e.inputX.value = this.options.imageWidth === e._defaultSizeX ? "" : this.options.imageWidth, e.inputY.value = this.options.imageHeight === e._defaultSizeY ? "" : this.options.imageHeight, e.proportion.checked = !0, e._ratio = !1, e._ratioX = 1, e._ratioY = 1), this.plugins.anchor.init.call(this, e.anchorCtx);
  }
}, Ga = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([Wt, qi, Pn, ji]);
    const t = e.options, i = e.context, o = i.video = {
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
    o.modal = l, o.videoInputFile = l.querySelector("._se_video_file"), o.videoUrlFile = l.querySelector(".se-input-url"), o.focusElement = o.videoUrlFile || o.videoInputFile, o.preview = l.querySelector(".se-link-preview"), l.querySelector("form").addEventListener("submit", this.submit.bind(e)), o.videoInputFile && l.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(o.videoInputFile, o.videoUrlFile, o.preview)), o.videoInputFile && o.videoUrlFile && o.videoInputFile.addEventListener("change", this._fileInputChange.bind(o)), o.videoUrlFile && o.videoUrlFile.addEventListener("input", this._onLinkPreview.bind(o.preview, o, t.linkProtocol)), o.proportion = {}, o.videoRatioOption = {}, o.inputX = {}, o.inputY = {}, t.videoResizing && (o.proportion = l.querySelector("._se_video_check_proportion"), o.videoRatioOption = l.querySelector(".se-video-ratio"), o.inputX = l.querySelector("._se_video_size_x"), o.inputY = l.querySelector("._se_video_size_y"), o.inputX.value = t.videoWidth, o.inputY.value = t.videoHeight, o.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), o.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), o.inputX.addEventListener("change", this.setRatio.bind(e)), o.inputY.addEventListener("change", this.setRatio.bind(e)), o.proportion.addEventListener("change", this.setRatio.bind(e)), o.videoRatioOption.addEventListener("change", this.setVideoRatio.bind(e)), l.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(l), l = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, o = e.util.createElement("DIV");
    o.className = "se-dialog-content", o.style.display = "none";
    let l = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.videoBox.title + '</span></div><div class="se-dialog-body">';
    if (t.videoFileInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_video_file" type="file" accept="' + t.videoAccept + '"' + (t.videoMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.videoUrlInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), t.videoResizing) {
      const a = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], c = t.videoRatio, f = t.videoSizeOnlyPercentage, n = f ? ' style="display: none !important;"' : "", b = t.videoHeightShow ? "" : ' style="display: none !important;"', u = t.videoRatioShow ? "" : ' style="display: none !important;"', v = !f && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      l += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + b + ">" + i.dialogBox.height + '</label><label class="size-h"' + u + ">(" + i.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + v + ">" + (f ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + b + '/><select class="se-input-select se-video-ratio" title="' + i.dialogBox.ratio + '" aria-label="' + i.dialogBox.ratio + '"' + u + ">", b || (l += '<option value=""> - </option>');
      for (let w = 0, S = a.length; w < S; w++)
        l += '<option value="' + a[w].value + '"' + (c.toString() === a[w].value.toString() ? " selected" : "") + ">" + a[w].name + "</option>";
      l += '</select><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + n + v + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + "</label></div>";
    }
    return l += '</div><div class="se-dialog-footer"><div' + (t.videoAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", o.innerHTML = l, o;
  },
  _fileInputChange: function() {
    this.videoInputFile.value ? (this.videoUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.videoUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _onLinkPreview: function(e, t, i) {
    const o = i.target.value.trim();
    /^<iframe.*\/iframe>$/.test(o) ? (e._linkValue = o, this.textContent = '<IFrame :src=".."></IFrame>') : e._linkValue = this.textContent = o ? t && o.indexOf("://") === -1 && o.indexOf("#") !== 0 ? t + o : o.indexOf("://") === -1 ? "/" + o : o : "";
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
    const t = e || this.context.video._element, i = this.context.video._container, o = t.getAttribute("data-index") * 1;
    if (typeof this.functions.onVideoDeleteBefore == "function" && this.functions.onVideoDeleteBefore(t, i, o, this) === !1) return;
    let l = i.previousElementSibling || i.nextElementSibling;
    const a = i.parentNode;
    this.util.removeItem(i), this.plugins.video.init.call(this), this.controllersOff(), a !== this.context.element.wysiwyg && this.util.removeItemAllParents(a, function(c) {
      return c.childNodes.length === 0;
    }, null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "video", o, this.functions.onVideoUpload), this.history.push(!1);
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
    } catch (o) {
      throw this.closeLoading(), Error('[SUNEDITOR.video.submit.fail] cause : "' + o.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, i = [];
    for (let c = 0, f = e.length; c < f; c++)
      /video/i.test(e[c].type) && (i.push(e[c]), t += e[c].size);
    const o = this.options.videoUploadSizeLimit;
    if (o > 0) {
      let c = 0;
      const f = this.context.video._infoList;
      for (let n = 0, b = f.length; n < b; n++)
        c += f[n].size * 1;
      if (t + c > o) {
        this.closeLoading();
        const n = "[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: " + o / 1e3 + "KB";
        (typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(n, { limitSize: o, currentSize: c, uploadSize: t }, this)) && this.functions.noticeOpen(n);
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
      const c = this.functions.onVideoUploadBefore(i, a, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.video.register.call(this, a, f) : this.plugins.video.upload.call(this, a, f);
      }).bind(this));
      if (typeof c > "u") return;
      if (!c) {
        this.closeLoading();
        return;
      }
      typeof c == "object" && c.length > 0 && (i = c);
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
    const i = this.options.videoUploadUrl, o = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const l = new FormData();
      for (let a = 0; a < o; a++)
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
    const i = t.result, o = this.plugins.video.createVideoTag.call(this);
    for (let l = 0, a = i.length, c; l < a; l++)
      c = { name: i[l].name, size: i[l].size }, this.plugins.video.create_video.call(this, e.isUpdate ? e.element : o.cloneNode(!1), i[l].url, e.inputWidth, e.inputHeight, e.align, c, e.isUpdate);
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
  create_video: function(e, t, i, o, l, a, c) {
    this.context.resizing._resize_plugin = "video";
    const f = this.context.video;
    let n = null, b = null, u = !1;
    if (c) {
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
    const v = this.plugins.resizing._module_getSizeX.call(this, f) !== (i || f._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, f) !== (o || f._videoRatio), w = !c || v;
    f._resizing && (this.context.video._proportionChecked = f.proportion.checked, e.setAttribute("data-proportion", f._proportionChecked));
    let S = !1;
    w && (S = this.plugins.video.applySize.call(this)), S && l === "center" || this.plugins.video.setAlign.call(this, null, e, n, b);
    let E = !0;
    if (c)
      f._resizing && this.context.resizing._rotateVertical && w && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (E = this.insertComponent(b, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const R = this.appendFormatTag(b, null);
      R && this.setRange(R, 0, R, 0);
    }
    E && (u && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, a, !0), c && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
  },
  _update_videoCover: function(e) {
    if (!e) return;
    const t = this.context.video;
    /^video$/i.test(e.nodeName) ? this.plugins.video._setTagAttrs.call(this, e) : this.plugins.video._setIframeAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const o = e;
    t._element = e = e.cloneNode(!0);
    const l = t._cover = this.plugins.component.set_cover.call(this, e), a = t._container = this.plugins.component.set_container.call(this, l, "se-video-container");
    try {
      const c = i.querySelector("figcaption");
      let f = null;
      c && (f = this.util.createElement("DIV"), f.innerHTML = c.innerHTML, this.util.removeItem(c));
      const n = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, n[0] || o.style.width || o.width || "", n[1] || o.style.height || o.height || "");
      const b = this.util.getFormatElement(o);
      if (b && (t._align = b.style.textAlign || b.style.float), this.plugins.video.setAlign.call(this, null, e, l, a), this.util.getParentElement(o, this.util.isNotCheckingNode))
        o.parentNode.replaceChild(a, o);
      else if (this.util.isListCell(i)) {
        const u = this.util.getParentElement(o, function(v) {
          return v.parentNode === i;
        });
        i.insertBefore(a, u), this.util.removeItem(o), this.util.removeEmptyNode(u, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const u = this.util.getParentElement(o, function(v) {
          return v.parentNode === i;
        });
        i = this.util.splitElement(i, u), i.parentNode.insertBefore(a, i), this.util.removeItem(o), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(a, i);
      f && i.parentNode.insertBefore(f, a.nextElementSibling);
    } catch (c) {
      console.warn("[SUNEDITOR.video.error] Maybe the video tag is nested.", c);
    }
    this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, null, !0), this.plugins.video.init.call(this);
  },
  /**
   * @Required @Override fileManager, resizing
   */
  onModifyMode: function(e, t) {
    const i = this.context.video;
    i._element = e, i._cover = this.util.getParentElement(e, "FIGURE"), i._container = this.util.getParentElement(e, this.util.isMediaComponent), i._align = e.style.float || e.getAttribute("data-align") || "none", e.style.float = "", t && (i._element_w = t.w, i._element_h = t.h, i._element_t = t.t, i._element_l = t.l);
    let o = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), l, a;
    o ? (o = o.split(","), l = o[0], a = o[1]) : t && (l = t.w, a = t.h), i._origin_w = l || e.style.width || e.width || "", i._origin_h = a || e.style.height || e.height || "";
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
    const i = this.context.video, o = i.videoRatioOption.options;
    /%$/.test(e) || i._onlyPercentage ? e = this.util.getNumber(e, 2) / 100 + "" : (!this.util.isNumber(e) || e * 1 >= 1) && (e = ""), i.inputY.placeholder = "";
    for (let l = 0, a = o.length; l < a; l++)
      o[l].value === e ? (t = o[l].selected = !0, i.inputY.placeholder = e ? e * 100 + "%" : "") : o[l].selected = !1;
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
  setSize: function(e, t, i, o) {
    const l = this.context.video, a = /^(rw|lw)$/.test(o), c = /^(th|bh)$/.test(o);
    c || (e = this.util.getNumber(e, 0)), a || (t = this.util.isNumber(t) ? t + l.sizeUnit : t || ""), e = e ? e + l.sizeUnit : "", c || (l._element.style.width = e), a || (l._cover.style.paddingBottom = l._cover.style.height = t), !c && !/%$/.test(e) && (l._cover.style.width = e, l._container.style.width = ""), !a && !/%$/.test(t) ? l._element.style.height = t : l._element.style.height = "", i || l._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, l);
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
      const o = i[0], l = i[1];
      t._onlyPercentage || /%$/.test(o) && (/%$/.test(l) || !/\d/.test(l)) ? this.plugins.video.setPercentSize.call(this, o, l) : this.plugins.video.setSize.call(this, o, l), this.plugins.resizing._module_saveCurrentSize.call(this, t);
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
  setAlign: function(e, t, i, o) {
    const l = this.context.video;
    e || (e = l._align), t || (t = l._element), i || (i = l._cover), o || (o = l._container), /%$/.test(t.style.width) && e === "center" ? (o.style.minWidth = "100%", i.style.width = o.style.width, i.style.height = i.style.height, i.style.paddingBottom = /%$/.test(i.style.height) ? this.util.getNumber(this.util.getNumber(i.style.height, 2) / 100 * this.util.getNumber(i.style.width, 2), 2) + "%" : i.style.height) : (o.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : t.style.width || "100%", i.style.paddingBottom = i.style.height), this.util.hasClass(o, "__se__float-" + e) || (this.util.removeClass(o, l._floatClassRegExp), this.util.addClass(o, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.video;
    e.videoInputFile && (e.videoInputFile.value = ""), e.videoUrlFile && (e._linkValue = e.preview.textContent = e.videoUrlFile.value = ""), e.videoInputFile && e.videoUrlFile && (e.videoUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._origin_w = this.options.videoWidth, e._origin_h = this.options.videoHeight, e.modal.querySelector('input[name="suneditor_video_radio"][value="none"]').checked = !0, e._resizing && (e.inputX.value = this.options.videoWidth === e._defaultSizeX ? "" : this.options.videoWidth, e.inputY.value = this.options.videoHeight === e._defaultSizeY ? "" : this.options.videoHeight, e.proportion.checked = !0, e.proportion.disabled = !0, this.plugins.video.setVideoRatioSelect.call(this, e._defaultRatio));
  }
}, Ka = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([Wt, qi, ji]);
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
    let o = this.setDialog(e);
    i.modal = o, i.audioInputFile = o.querySelector("._se_audio_files"), i.audioUrlFile = o.querySelector(".se-input-url"), i.focusElement = i.audioInputFile || i.audioUrlFile, i.preview = o.querySelector(".se-link-preview");
    let l = this.setController(e);
    i.controller = l, o.querySelector("form").addEventListener("submit", this.submit.bind(e)), i.audioInputFile && o.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(i.audioInputFile, i.audioUrlFile, i.preview)), i.audioInputFile && i.audioUrlFile && i.audioInputFile.addEventListener("change", this._fileInputChange.bind(i)), l.addEventListener("click", this.onClick_controller.bind(e)), i.audioUrlFile && i.audioUrlFile.addEventListener("input", this._onLinkPreview.bind(i.preview, i, e.options.linkProtocol)), t.dialog.modal.appendChild(o), t.element.relative.appendChild(l), o = null, l = null;
  },
  /** HTML - dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, o = e.util.createElement("DIV");
    o.className = "se-dialog-content", o.style.display = "none";
    let l = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.audioBox.title + '</span></div><div class="se-dialog-body">';
    return t.audioFileInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_audio_files" type="file" accept="' + t.audioAccept + '"' + (t.audioMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.audioUrlInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), l += '</div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", o.innerHTML = l, o;
  },
  /** HTML - controller */
  setController: function(e) {
    const t = e.lang, i = e.icons, o = e.util.createElement("DIV");
    return o.className = "se-controller se-controller-link", o.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-tooltip">' + i.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", o;
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
    const o = i.target.value.trim();
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
    const t = this.util.getParentElement(e, this.util.isComponent) || e, i = e.getAttribute("data-index") * 1;
    if (typeof this.functions.onAudioDeleteBefore == "function" && this.functions.onAudioDeleteBefore(e, t, i, this) === !1) return;
    const o = t.previousElementSibling || t.nextElementSibling, l = t.parentNode;
    this.util.removeItem(t), this.plugins.audio.init.call(this), this.controllersOff(), l !== this.context.element.wysiwyg && this.util.removeItemAllParents(l, function(a) {
      return a.childNodes.length === 0;
    }, null), this.focusEdge(o), this.plugins.fileManager.deleteInfo.call(this, "audio", i, this.functions.onAudioUpload), this.history.push(!1);
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
    for (let c = 0, f = e.length; c < f; c++)
      /audio/i.test(e[c].type) && (i.push(e[c]), t += e[c].size);
    const o = this.options.audioUploadSizeLimit;
    if (o > 0) {
      let c = 0;
      const f = this.context.audio._infoList;
      for (let n = 0, b = f.length; n < b; n++)
        c += f[n].size * 1;
      if (t + c > o) {
        this.closeLoading();
        const n = "[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: " + o / 1e3 + "KB";
        (typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(n, { limitSize: o, currentSize: c, uploadSize: t }, this)) && this.functions.noticeOpen(n);
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
      const c = this.functions.onAudioUploadBefore(i, a, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.audio.register.call(this, a, f) : this.plugins.audio.upload.call(this, a, f);
      }).bind(this));
      if (typeof c > "u") return;
      if (!c) {
        this.closeLoading();
        return;
      }
      typeof c == "object" && c.length > 0 && (i = c);
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
    const i = this.options.audioUploadUrl, o = this.context.dialog.updateModal ? 1 : t.length, l = new FormData();
    for (let a = 0; a < o; a++)
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
    for (let o = 0, l = i.length, a, c; o < l; o++)
      e.isUpdate ? c = e.element : c = this.plugins.audio._createAudioTag.call(this), a = { name: i[o].name, size: i[o].size }, this.plugins.audio.create_audio.call(this, c, i[o].url, a, e.isUpdate);
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
  create_audio: function(e, t, i, o) {
    const l = this.context.audio;
    if (o)
      if (l._element && (e = l._element), e && e.src !== t)
        e.src = t, this.selectComponent(e, "audio");
      else {
        this.selectComponent(e, "audio");
        return;
      }
    else {
      e.src = t;
      const a = this.plugins.component.set_cover.call(this, e), c = this.plugins.component.set_container.call(this, a, "");
      if (!this.insertComponent(c, !1, !0, !this.options.mediaAutoSelect)) {
        this.focus();
        return;
      }
      if (!this.options.mediaAutoSelect) {
        const f = this.appendFormatTag(c, null);
        f && this.setRange(f, 0, f, 0);
      }
    }
    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, i, !1), o && this.history.push(!1);
  },
  updateCover: function(e) {
    const t = this.context.audio;
    this.plugins.audio._setTagAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const o = e;
    t._element = e = e.cloneNode(!1);
    const l = this.plugins.component.set_cover.call(this, e), a = this.plugins.component.set_container.call(this, l, "se-audio-container");
    try {
      if (this.util.getParentElement(o, this.util.isNotCheckingNode))
        o.parentNode.replaceChild(a, o);
      else if (this.util.isListCell(i)) {
        const c = this.util.getParentElement(o, function(f) {
          return f.parentNode === i;
        });
        i.insertBefore(a, c), this.util.removeItem(o), this.util.removeEmptyNode(c, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const c = this.util.getParentElement(o, function(f) {
          return f.parentNode === i;
        });
        i = this.util.splitElement(i, c), i.parentNode.insertBefore(a, i), this.util.removeItem(o), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(a, i);
    } catch (c) {
      console.warn("[SUNEDITOR.audio.error] Maybe the audio tag is nested.", c);
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
}, en = "https://katex.org/docs/supported.html", Ya = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([Wt]);
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
    let o = this.setController_MathButton(e);
    t.math.mathController = o, t.math._mathExp = null, i.querySelector("form").addEventListener("submit", this.submit.bind(e), !1), o.addEventListener("click", this.onClick_mathController.bind(e)), t.math.previewElement.style.fontSize = t.math.defaultFontSize, t.dialog.modal.appendChild(i), t.element.relative.appendChild(o), i = null, o = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), o = e.options.mathFontSize;
    let l = o[0].value;
    i.className = "se-dialog-content", i.style.display = "none";
    let a = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + en + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let c = 0, f = o.length, n; c < f; c++)
      n = o[c], n.default && (l = n.value), a += '<option value="' + n.value + '"' + (n.default ? " selected" : "") + ">" + n.text + "</option>";
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
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + en + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", i);
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
      const i = this.context.math, o = i.focusElement.value, l = i.previewElement.querySelector(".katex");
      if (!l) return !1;
      if (l.className = "__se__katex " + l.className, l.setAttribute("contenteditable", !1), l.setAttribute("data-exp", this.util.HTMLEncoder(o)), l.setAttribute("data-font-size", i.fontSizeElement.value), l.style.fontSize = i.fontSizeElement.value, this.context.dialog.updateModal) {
        const a = this.util.getParentElement(i._mathExp, ".katex");
        a.parentNode.replaceChild(l, a), this.setRange(l, 0, l, 1);
      } else {
        const a = this.getSelectedElements();
        if (a.length > 1) {
          const f = this.util.createElement(a[0].nodeName);
          if (f.appendChild(l), !this.insertNode(f, null, !0)) return !1;
        } else if (!this.insertNode(l, null, !0)) return !1;
        const c = this.util.createTextNode(this.util.zeroWidthSpace);
        l.parentNode.insertBefore(c, l.nextSibling), this.setRange(l, 0, l, 1);
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
        const i = this.util.HTMLDecoder(t._mathExp.getAttribute("data-exp")), o = t._mathExp.getAttribute("data-font-size") || "1em";
        this.context.dialog.updateModal = !0, t.focusElement.value = i, t.fontSizeElement.value = o, t.previewElement.innerHTML = this.plugins.math._renderer.call(this, i), t.previewElement.style.fontSize = o;
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
var Si = { exports: {} }, Xa = Si.exports, tn;
function Ja() {
  return tn || (tn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Xa, function(t, i) {
      const o = {
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
          let c = l.util.createElement("DIV");
          c.className = "se-file-browser sun-editor-common";
          let f = l.util.createElement("DIV");
          f.className = "se-file-browser-back";
          let n = l.util.createElement("DIV");
          n.className = "se-file-browser-inner", n.innerHTML = this.set_browser(l), c.appendChild(f), c.appendChild(n), this._loading = c.querySelector(".se-loading-box"), a.fileBrowser.area = c, a.fileBrowser.header = n.querySelector(".se-file-browser-header"), a.fileBrowser.titleArea = n.querySelector(".se-file-browser-title"), a.fileBrowser.tagArea = n.querySelector(".se-file-browser-tags"), a.fileBrowser.body = n.querySelector(".se-file-browser-body"), a.fileBrowser.list = n.querySelector(".se-file-browser-list"), a.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(l)), a.fileBrowser.list.addEventListener("click", this.onClickFile.bind(l)), n.addEventListener("mousedown", this._onMouseDown_browser.bind(l)), n.addEventListener("click", this._onClick_browser.bind(l)), a.element.relative.appendChild(c), c = null, f = null, n = null;
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
          const c = this.context.fileBrowser;
          c.contextPlugin = l, c.selectorHandler = a;
          const f = this.context[l], n = f.listClass;
          this.util.hasClass(c.list, n) || (c.list.className = "se-file-browser-list " + n), this.options.popupDisplay === "full" ? c.area.style.position = "fixed" : c.area.style.position = "absolute", c.titleArea.textContent = f.title, c.area.style.display = "block", this.context[l].directData ? this.plugins.fileBrowser._drawListItem.call(this, this.context[l].directData, !0) : this.plugins.fileBrowser._drawFileList.call(this, this.context[l].url, this.context[l].header);
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
          const c = this.plugins.fileBrowser, f = c._xmlHttp = this.util.getXMLHttpRequest();
          if (f.onreadystatechange = c._callBackGet.bind(this, f), f.open("get", l, !0), a !== null && typeof a == "object" && this._w.Object.keys(a).length > 0)
            for (let n in a)
              f.setRequestHeader(n, a[n]);
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
              const a = l.responseText ? JSON.parse(l.responseText) : l, c = "[SUNEDITOR.fileBrowser.get.serverException] status: " + l.status + ", response: " + (a.errorMessage || l.responseText);
              throw Error(c);
            }
          }
        },
        _drawListItem: function(l, a) {
          const c = this.context.fileBrowser, f = this.context[c.contextPlugin], n = [], b = l.length, u = f.columnSize || c.columnSize, v = u <= 1 ? 1 : Math.round(b / u) || 1, w = f.itemTemplateHandler;
          let S = "", E = '<div class="se-file-item-column">', R = 1;
          for (let s = 0, r, d; s < b; s++)
            if (r = l[s], d = r.tag ? typeof r.tag == "string" ? r.tag.split(",") : r.tag : [], d = r.tag = d.map(function(p) {
              return p.trim();
            }), E += w(r), (s + 1) % v === 0 && R < u && s + 1 < b && (R++, E += '</div><div class="se-file-item-column">'), a && d.length > 0)
              for (let p = 0, m = d.length, g; p < m; p++)
                g = d[p], g && n.indexOf(g) === -1 && (n.push(g), S += '<a title="' + g + '" aria-label="' + g + '">' + g + "</a>");
          E += "</div>", c.list.innerHTML = E, a && (c.items = l, c.tagArea.innerHTML = S, c.tagElements = c.tagArea.querySelectorAll("A"));
        },
        onClickTag: function(l) {
          const a = l.target;
          if (!this.util.isAnchor(a)) return;
          const c = a.textContent, f = this.plugins.fileBrowser, n = this.context.fileBrowser, b = n.tagArea.querySelector('a[title="' + c + '"]'), u = n.selectedTags, v = u.indexOf(c);
          v > -1 ? (u.splice(v, 1), this.util.removeClass(b, "on")) : (u.push(c), this.util.addClass(b, "on")), f._drawListItem.call(
            this,
            u.length === 0 ? n.items : n.items.filter(function(w) {
              return w.tag.some(function(S) {
                return u.indexOf(S) > -1;
              });
            }),
            !1
          );
        },
        onClickFile: function(l) {
          l.preventDefault(), l.stopPropagation();
          const a = this.context.fileBrowser, c = a.list;
          let f = l.target, n = null;
          if (f === c) return;
          for (; c !== f.parentNode && (n = f.getAttribute("data-command"), !n); )
            f = f.parentNode;
          if (!n) return;
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
        value: o
      })), o;
    });
  }(Si)), Si.exports;
}
var Qa = /* @__PURE__ */ Ja();
const er = /* @__PURE__ */ we(Qa), tr = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([er]);
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
}, ir = { blockquote: ya, align: _a, font: Ca, fontSize: wa, fontColor: ka, hiliteColor: xa, horizontalRule: Sa, list: Ea, table: Ta, formatBlock: La, lineHeight: za, template: Ba, paragraphStyle: Na, textStyle: Ra, link: Va, image: ja, video: Ga, audio: Ka, math: Ya, imageGallery: tr }, lr = {
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
}, ln = {
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
}, re = {
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
      return re.camelToKebabCase(t);
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
      return re.camelToKebabCase(t);
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
    const o = [], l = t === "js" ? "script" : "link", a = t === "js" ? "src" : "href";
    let c = "(?:";
    for (let b = 0, u = e.length; b < u; b++)
      c += e[b] + (b < u - 1 ? "|" : ")");
    const f = new this._w.RegExp("(^|.*[\\/])" + c + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), n = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
    for (let b = this._d.getElementsByTagName(l), u = 0; u < b.length; u++)
      n.test(b[u][a]) && o.push(b[u]);
    for (let b = 0; b < o.length; b++) {
      let u = o[b][a].match(f);
      if (u) {
        i = u[0];
        break;
      }
    }
    if (i === "" && (i = o.length > 0 ? o[0][a] : ""), i.indexOf(":/") === -1 && i.slice(0, 2) !== "//" && (i = i.indexOf("/") === 0 ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + i : location.href.match(/^[^\?]*\/(?:)/)[0] + i), !i) throw "[SUNEDITOR.util.getIncludePath.fail] The SUNEDITOR installation path could not be automatically detected. (name: +" + name + ", extension: " + t + ")";
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
    for (let o = 0, l = i.length, a; o < l; o++) {
      try {
        a = i[o].cssRules;
      } catch {
        continue;
      }
      if (a)
        for (let c = 0, f = a.length; c < f; c++)
          t += a[c].cssText;
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
    let o = "";
    for (let l = 0, a = i.length; l < a; l++)
      t && t.indexOf(i[l].name) > -1 || (o += i[l].name + '="' + i[l].value + '" ');
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
    let i, o;
    return this.isIE_Edge ? (o = this._w.unescape(t(e)).length, i = 0, t(e).match(/(%0A|%0D)/gi) !== null && (i = t(e).match(/(%0A|%0D)/gi).length), o + i) : (o = new this._w.TextEncoder("utf-8").encode(e).length, i = 0, t(e).match(/(%0A|%0D)/gi) !== null && (i = t(e).match(/(%0A|%0D)/gi).length), o + i);
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
      for (let a = 0, c = l.length; a < c; a++)
        e.style[l[a]] = l[l[a]];
    }
    const o = t.attributes;
    for (let l = 0, a = o.length, c; l < a; l++)
      c = o[l].name.toLowerCase(), i && i.indexOf(c) > -1 || !o[l].value ? e.removeAttribute(c) : c !== "style" && e.setAttribute(o[l].name, o[l].value);
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
    const o = [];
    for (let l = 0, a = e.length, c; l < a; l++)
      if (c = e[l], t(c))
        if (i) o.push(c);
        else return c;
    return i ? o : null;
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
    for (let o = 0, l = e.length; o < l; o++)
      if (e[o] === t) {
        i = o;
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
    const o = [];
    let l = !0;
    return this.getParentElement(e, (function(a) {
      if (a === t && (l = !1), l && !this.isWysiwygDiv(a)) {
        if (i && a.nodeType === 3) {
          let c = null, f = null;
          i.s = i.e = 0;
          let n = a.previousSibling;
          for (; n && n.nodeType === 3; )
            f = n.textContent.replace(this.zeroWidthRegExp, ""), i.s += f.length, a.textContent = f + a.textContent, c = n, n = n.previousSibling, this.removeItem(c);
          let b = a.nextSibling;
          for (; b && b.nodeType === 3; )
            f = b.textContent.replace(this.zeroWidthRegExp, ""), i.e += f.length, a.textContent += f, c = b, b = b.nextSibling, this.removeItem(c);
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
    let i = t, o;
    for (let l = 0, a = e.length; l < a && (o = i.childNodes, o.length !== 0); l++)
      o.length <= e[l] ? i = o[o.length - 1] : i = o[e[l]];
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
    const i = e.style, o = t.style;
    let l = 0;
    for (let b = 0, u = i.length; b < u; b++)
      i[i[b]] === o[i[b]] && l++;
    const a = e.classList, c = t.classList, f = this._w.RegExp;
    let n = 0;
    for (let b = 0, u = a.length; b < u; b++)
      f("(s|^)" + a[b] + "(s|$)").test(c.value) && n++;
    return l === o.length && l === i.length && n === c.length && n === a.length;
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
    }, function o(l) {
      if (e !== l && t(l) && i.push(l), l.children)
        for (let a = 0, c = l.children.length; a < c; a++)
          o(l.children[a]);
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
    }, function o(l) {
      e !== l && t(l) && i.push(l);
      for (let a = 0, c = l.childNodes.length; a < c; a++)
        o(l.childNodes[a]);
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
    let i = e, o = t;
    for (; i && o && i.parentNode !== o.parentNode; )
      i = i.parentNode, o = o.parentNode;
    if (!i || !o) return { ancestor: null, a: e, b: t, result: 0 };
    const l = i.parentNode.childNodes, a = this.getArrayIndex(l, i), c = this.getArrayIndex(l, o);
    return {
      ancestor: i.parentNode,
      a: i,
      b: o,
      result: a > c ? 1 : a < c ? -1 : 0
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
      let o;
      /^\./.test(t) ? (o = "className", t = t.split(".")[1]) : /^#/.test(t) ? (o = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (o = "name", t = "^" + t.split(":")[1] + "$") : (o = "nodeName", t = "^" + t + "$");
      const l = new this._w.RegExp(t, "i");
      i = function(a) {
        return l.test(a[o]);
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
      for (let o = e.parentNode; o; o = o.parentNode) {
        if (o === t) return null;
        if (o.previousSibling) {
          i = o.previousSibling;
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
      for (let o = e.parentNode; o; o = o.parentNode) {
        if (o === t) return null;
        if (o.nextSibling) {
          i = o.nextSibling;
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
    let o;
    if (typeof t == "function")
      o = t;
    else {
      let a;
      /^\./.test(t) ? (a = "className", t = t.split(".")[1]) : /^#/.test(t) ? (a = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (a = "name", t = "^" + t.split(":")[1] + "$") : (a = "nodeName", t = "^" + (t === "text" ? "#" + t : t) + "$");
      const c = new this._w.RegExp(t, "i");
      o = function(f) {
        return c.test(f[a]);
      };
    }
    const l = this.getListChildNodes(e, function(a) {
      return o(a);
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
    let i = 0, o = 0, l = e.nodeType === 3 ? e.parentElement : e;
    const a = this.getParentElement(e, this.isWysiwygDiv.bind(this));
    for (; l && !this.hasClass(l, "se-container") && l !== a; )
      i += l.offsetLeft, o += l.offsetTop, l = l.offsetParent;
    const c = t && /iframe/i.test(t.nodeName);
    return {
      left: i + (c ? t.parentElement.offsetLeft : 0),
      top: o - (a ? a.scrollTop : 0) + (c ? t.parentElement.offsetTop : 0)
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
  getOverlapRangeAtIndex: function(e, t, i, o) {
    if (e <= o ? t < i : t > i) return 0;
    const l = (e > i ? e : i) - (t < o ? t : o);
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
    const o = new this._w.RegExp("(\\s|^)" + t + "(\\s|$)");
    return o.test(e.className) ? e.className = e.className.replace(o, " ").trim() : (e.className += " " + t, i = !0), e.className.trim() || e.removeAttribute("class"), i;
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
    for (let o = 0, l = t.length; o < l; o++) {
      let a = t[o];
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
    let o = null;
    return t || (t = (function(l) {
      if (l === i || this.isComponent(l)) return !1;
      const a = l.textContent.trim();
      return a.length === 0 || /^(\n|\u200B)+$/.test(a);
    }).bind(this)), function l(a) {
      if (!re.isWysiwygDiv(a)) {
        const c = a.parentNode;
        c && t(a) && (o = {
          sc: a.previousElementSibling,
          ec: a.nextElementSibling
        }, re.removeItem(a), l(c));
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
    const i = this._deleteNestedList(e);
    let o, l;
    if (i) {
      o = i.cloneNode(!1), l = i.childNodes;
      const c = this.getPositionIndex(e);
      for (; l[c]; )
        o.appendChild(l[c]);
    } else
      o = e;
    let a;
    if (t)
      a = this.getListChildren(o, (function(c) {
        return this.isListCell(c) && !c.previousElementSibling;
      }).bind(this));
    else {
      const c = this.getElementDepth(e) + 2;
      a = this.getListChildren(e, (function(f) {
        return this.isListCell(f) && !f.previousElementSibling && this.getElementDepth(f) === c;
      }).bind(this));
    }
    for (let c = 0, f = a.length; c < f; c++)
      this._deleteNestedList(a[c]);
    return i && (i.parentNode.insertBefore(o, i.nextSibling), l && l.length === 0 && this.removeItem(i)), o === e ? o.parentNode : o;
  },
  /**
   * @description Sub function of util.detachNestedList method.
   * @private
   */
  _deleteNestedList: function(e) {
    const t = e.parentNode;
    let i = t, o = i.parentNode, l, a, c, f, n;
    for (; this.isListCell(o); ) {
      for (f = this.getPositionIndex(e), l = o.nextElementSibling, a = o.parentNode, c = i; c; ) {
        if (i = i.nextSibling, this.isList(c)) {
          for (n = c.childNodes; n[f]; )
            a.insertBefore(n[f], l);
          n.length === 0 && this.removeItem(c);
        } else
          a.appendChild(c);
        c = i;
      }
      i = a, o = a.parentNode;
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
      const E = e.cloneNode(!1), R = e.cloneNode(!1);
      for (let s = 0, r = w.length; s < r; s++) {
        if (s < S) E.appendChild(w[s]);
        else if (s > S) R.appendChild(w[s]);
        else continue;
        s--, r--, S--;
      }
      return E.childNodes.length > 0 && e.parentNode.insertBefore(E, e), R.childNodes.length > 0 && e.parentNode.insertBefore(R, e.nextElementSibling), e;
    }
    const o = e.parentNode;
    let l = 0, a = 1, c = !0, f, n, b;
    if ((!i || i < 0) && (i = 0), e.nodeType === 3) {
      if (l = this.getPositionIndex(e), t >= 0 && e.length !== t) {
        e.splitText(t);
        const w = this.getNodeFromPath([l + 1], o);
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
      e.previousSibling ? e = e.previousSibling : this.getElementDepth(e) === i && (c = !1);
    }
    e.nodeType === 1 && (a = 0);
    let u = e;
    for (; this.getElementDepth(u) > i; )
      for (l = this.getPositionIndex(u) + a, u = u.parentNode, b = f, f = u.cloneNode(!1), n = u.childNodes, b && (this.isListCell(f) && this.isList(b) && b.firstElementChild ? (f.innerHTML = b.firstElementChild.innerHTML, re.removeItem(b.firstElementChild), b.children.length > 0 && f.appendChild(b)) : f.appendChild(b)); n[l]; )
        f.appendChild(n[l]);
    u.childNodes.length <= 1 && (!u.firstChild || u.firstChild.textContent.length === 0) && (u.innerHTML = "<br>");
    const v = u.parentNode;
    return c && (u = u.nextSibling), f ? (this.mergeSameTags(f, null, !1), this.mergeNestedTags(f, (function(w) {
      return this.isList(w);
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
  mergeSameTags: function(e, t, i) {
    const o = this, l = t ? t.length : 0;
    let a = null;
    return l && (a = this._w.Array.apply(null, new this._w.Array(l)).map(this._w.Number.prototype.valueOf, 0)), function c(f, n, b) {
      const u = f.childNodes;
      for (let v = 0, w = u.length, S, E; v < w && (S = u[v], E = u[v + 1], !!S); v++)
        if (!(o.isBreak(S) || o.isMedia(S) || o.isInputElement(S))) {
          if (i && o._isIgnoreNodeChange(S) || !i && (o.isTable(S) || o.isListCell(S) || o.isFormatElement(S) && !o.isFreeFormatElement(S))) {
            (o.isTable(S) || o.isListCell(S)) && c(S, n + 1, v);
            continue;
          }
          if (w === 1 && f.nodeName === S.nodeName && f.parentNode) {
            if (l) {
              let R, s, r, d, p;
              for (let m = 0; m < l; m++)
                if (R = t[m], R && R[n] === v) {
                  for (s = S, r = f, d = n, p = !0; d >= 0; ) {
                    if (o.getArrayIndex(r.childNodes, s) !== R[d]) {
                      p = !1;
                      break;
                    }
                    s = S.parentNode, r = s.parentNode, d--;
                  }
                  p && (R.splice(n, 1), R[n] = v);
                }
            }
            o.copyTagAttributes(S, f), f.parentNode.insertBefore(S, f), o.removeItem(f);
          }
          if (!E) {
            S.nodeType === 1 && c(S, n + 1, v);
            break;
          }
          if (S.nodeName === E.nodeName && o.isSameAttributes(S, E) && S.href === E.href) {
            const R = S.childNodes;
            let s = 0;
            for (let m = 0, g = R.length; m < g; m++)
              R[m].textContent.length > 0 && s++;
            const r = S.lastChild, d = E.firstChild;
            let p = 0;
            if (r && d) {
              const m = r.nodeType === 3 && d.nodeType === 3;
              p = r.textContent.length;
              let g = r.previousSibling;
              for (; g && g.nodeType === 3; )
                p += g.textContent.length, g = g.previousSibling;
              if (s > 0 && r.nodeType === 3 && d.nodeType === 3 && (r.textContent.length > 0 || d.textContent.length > 0) && s--, l) {
                let h = null;
                for (let y = 0; y < l; y++)
                  if (h = t[y], h && h[n] > v) {
                    if (n > 0 && h[n - 1] !== b) continue;
                    h[n] -= 1, h[n + 1] >= 0 && h[n] === v && (h[n + 1] += s, m && r && r.nodeType === 3 && d && d.nodeType === 3 && (a[y] += p));
                  }
              }
            }
            if (S.nodeType === 3) {
              if (p = S.textContent.length, S.textContent += E.textContent, l) {
                let m = null;
                for (let g = 0; g < l; g++)
                  if (m = t[g], m && m[n] > v) {
                    if (n > 0 && m[n - 1] !== b) continue;
                    m[n] -= 1, m[n + 1] >= 0 && m[n] === v && (m[n + 1] += s, a[g] += p);
                  }
              }
            } else
              S.innerHTML += E.innerHTML;
            o.removeItem(E), v--;
          } else S.nodeType === 1 && c(S, n + 1, v);
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
    }), function i(o) {
      let l = o.children;
      if (l.length === 1 && l[0].nodeName === o.nodeName && t(o)) {
        const a = l[0];
        for (l = a.children; l[0]; )
          o.appendChild(l[0]);
        o.removeChild(a);
      }
      for (let a = 0, c = o.children.length; a < c; a++)
        i(o.children[a]);
    }(e);
  },
  /**
   * @description Delete a empty child node of argument element.
   * @param {Element} element Element node
   * @param {Node|null} notRemoveNode Do not remove node
   * @param {boolean} forceDelete When all child nodes are deleted, the parent node is also deleted.
   */
  removeEmptyNode: function(e, t, i) {
    const o = this;
    t && (t = o.getParentElement(t, function(l) {
      return e === l.parentElement;
    })), function l(a) {
      if (o._notTextNode(a) || a === t || o.isNonEditable(a)) return 0;
      if (a !== e && o.onlyZeroWidthSpace(a.textContent) && (!a.firstChild || !o.isBreak(a.firstChild)) && !a.querySelector(o._allowedEmptyNodeList)) {
        if (a.parentNode)
          return a.parentNode.removeChild(a), -1;
      } else {
        const c = a.children;
        for (let f = 0, n = c.length, b = 0; f < n; f++)
          !c[f + b] || o.isComponent(c[f + b]) || (b += l(c[f + b]));
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
    const i = t ? 1 : -1, o = i * -1;
    e.sort((function(l, a) {
      return !this.isListCell(l) || !this.isListCell(a) ? 0 : (l = this.getElementDepth(l), a = this.getElementDepth(a), l > a ? i : l < a ? o : 0);
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
  _consistencyCheckOfHTML: function(e, t, i, o, l) {
    const a = [], c = [], f = [], n = [], b = this.getListChildNodes(e, (function(v) {
      if (v.nodeType !== 1)
        return this.isList(v.parentElement) && a.push(v), !1;
      if (i.test(v.nodeName) || !t.test(v.nodeName) && v.childNodes.length === 0 && this.isNotCheckingNode(v))
        return a.push(v), !1;
      const w = !this.getParentElement(v, this.isNotCheckingNode);
      if (!this.isTable(v) && !this.isListCell(v) && !this.isAnchor(v) && (this.isFormatElement(v) || this.isRangeFormatElement(v) || this.isTextStyleElement(v)) && v.childNodes.length === 0 && w)
        return c.push(v), !1;
      if (this.isList(v.parentNode) && !this.isList(v) && !this.isListCell(v))
        return f.push(v), !1;
      if (this.isCell(v)) {
        const E = v.firstElementChild;
        if (!this.isFormatElement(E) && !this.isRangeFormatElement(E) && !this.isComponent(E))
          return n.push(v), !1;
      }
      if (w && v.className) {
        const E = new this._w.Array(v.classList).map(o).join(" ").trim();
        E ? v.className = E : v.removeAttribute("class");
      }
      return l && v.parentNode !== e && w && (this.isListCell(v) && !this.isList(v.parentNode) || (this.isFormatElement(v) || this.isComponent(v)) && !this.isRangeFormatElement(v.parentNode) && !this.getParentElement(v, this.isComponent));
    }).bind(this));
    for (let v = 0, w = a.length; v < w; v++)
      this.removeItem(a[v]);
    const u = [];
    for (let v = 0, w = b.length, S, E; v < w; v++)
      if (S = b[v], E = S.parentNode, !(!E || !E.parentNode))
        if (this.getParentElement(S, this.isListCell)) {
          const R = S.childNodes;
          for (let s = R.length - 1; w >= 0; s--)
            E.insertBefore(S, R[s]);
          u.push(S);
        } else
          E.parentNode.insertBefore(S, E), u.push(E);
    for (let v = 0, w = u.length, S; v < w; v++)
      S = u[v], this.onlyZeroWidthSpace(S.textContent.trim()) && this.removeItem(S);
    for (let v = 0, w = c.length; v < w; v++)
      this.removeItem(c[v]);
    for (let v = 0, w = f.length, S, E, R, s; v < w; v++)
      if (S = f[v], s = S.parentNode, !!s)
        if (E = this.createElement("LI"), this.isFormatElement(S)) {
          for (R = S.childNodes; R[0]; )
            E.appendChild(R[0]);
          s.insertBefore(E, S), this.removeItem(S);
        } else
          S = S.nextSibling, E.appendChild(f[v]), s.insertBefore(E, S);
    for (let v = 0, w = n.length, S, E; v < w; v++)
      S = n[v], E = this.createElement("DIV"), E.innerHTML = S.textContent.trim().length === 0 && S.children.length === 0 ? "<br>" : S.innerHTML, S.innerHTML = E.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let i = "";
    e.height && (i += "height:" + e.height + ";"), e.minHeight && (i += "min-height:" + e.minHeight + ";"), e.maxHeight && (i += "max-height:" + e.maxHeight + ";"), e.position && (i += "position:" + e.position + ";"), e.width && (i += "width:" + e.width + ";"), e.minWidth && (i += "min-width:" + e.minWidth + ";"), e.maxWidth && (i += "max-width:" + e.maxWidth + ";");
    let o = "", l = "", a = "";
    t = i + t;
    const c = t.split(";");
    for (let f = 0, n = c.length, b; f < n; f++)
      if (b = c[f].trim(), !!b) {
        if (/^(min-|max-)?width\s*:/.test(b) || /^(z-index|position)\s*:/.test(b)) {
          o += b + ";";
          continue;
        }
        if (/^(min-|max-)?height\s*:/.test(b)) {
          /^height/.test(b) && b.split(":")[1].trim() === "auto" && (e.height = "auto"), l += b + ";";
          continue;
        }
        a += b + ";";
      }
    return {
      top: o,
      frame: l,
      editor: a
    };
  },
  _setIframeDocument: function(e, t) {
    e.setAttribute("scrolling", "auto"), e.contentDocument.head.innerHTML = '<meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">' + this._setIframeCssTags(t), e.contentDocument.body.className = t._editableClass, e.contentDocument.body.setAttribute("contenteditable", !0), e.contentDocument.body.setAttribute("autocorrect", "off");
  },
  _setIframeCssTags: function(e) {
    const t = e.iframeCSSFileName, i = this._w.RegExp;
    let o = "";
    for (let l = 0, a = t.length, c; l < a; l++) {
      if (c = [], /(^https?:\/\/)|(^data:text\/css,)/.test(t[l]))
        c.push(t[l]);
      else {
        const f = new i("(^|.*[\\/])" + t[l] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let n = document.getElementsByTagName("link"), b = 0, u = n.length, v; b < u; b++)
          v = n[b].href.match(f), v && c.push(v[0]);
      }
      if (!c || c.length === 0) throw '[SUNEDITOR.constructor.iframe.fail] The suneditor CSS files installation path could not be automatically detected. Please set the option property "iframeCSSFileName" before creating editor instances.';
      for (let f = 0, n = c.length; f < n; f++)
        o += '<link href="' + c[f] + '" rel="stylesheet">';
    }
    return o + (e.height === "auto" ? `<style>
/** Iframe height auto */
body{height: min-content; overflow: hidden;}
</style>` : "");
  }
}, Ui = {
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
    const o = i.createElement("DIV");
    o.className = "sun-editor" + (t.rtl ? " se-rtl" : ""), e.id && (o.id = "suneditor_" + e.id);
    const l = i.createElement("DIV");
    l.className = "se-container";
    const a = this._createToolBar(i, t.buttonList, t.plugins, t), c = a.element.cloneNode(!1);
    c.className += " se-toolbar-shadow", a.element.style.visibility = "hidden", a.pluginCallButtons.math && this._checkKatexMath(t.katex);
    const f = i.createElement("DIV");
    f.className = "se-arrow";
    const n = i.createElement("DIV");
    n.className = "se-toolbar-sticky-dummy";
    const b = i.createElement("DIV");
    b.className = "se-wrapper";
    const u = this._initElements(t, o, a.element, f), v = u.bottomBar, w = u.wysiwygFrame, S = u.placeholder;
    let E = u.codeView;
    const R = v.resizingBar, s = v.navigation, r = v.charWrapper, d = v.charCounter, p = i.createElement("DIV");
    p.className = "se-loading-box sun-editor-common", p.innerHTML = '<div class="se-loading-effect"></div>';
    const m = i.createElement("DIV");
    m.className = "se-line-breaker", m.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
    const g = i.createElement("DIV");
    g.className += "se-line-breaker-component";
    const h = g.cloneNode(!0);
    g.innerHTML = h.innerHTML = t.icons.line_break;
    const y = i.createElement("DIV");
    y.className = "se-resizing-back";
    const C = i.createElement("INPUT");
    C.tabIndex = -1, C.style.cssText = "position: fixed !important; top: -10000px !important; display: block !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;";
    const _ = t.toolbarContainer;
    _ && (_.appendChild(a.element), _.appendChild(c));
    const x = t.resizingBarContainer;
    return R && x && x.appendChild(R), b.appendChild(E), S && b.appendChild(S), _ || (l.appendChild(a.element), l.appendChild(c)), l.appendChild(n), l.appendChild(b), l.appendChild(y), l.appendChild(p), l.appendChild(m), l.appendChild(g), l.appendChild(h), l.appendChild(C), R && !x && l.appendChild(R), o.appendChild(l), E = this._checkCodeMirror(t, E), {
      constructed: {
        _top: o,
        _relative: l,
        _toolBar: a.element,
        _toolbarShadow: c,
        _menuTray: a._menuTray,
        _editorArea: b,
        _wysiwygArea: w,
        _codeArea: E,
        _placeholder: S,
        _resizingBar: R,
        _navigation: s,
        _charWrapper: r,
        _charCounter: d,
        _loading: p,
        _lineBreaker: m,
        _lineBreaker_t: g,
        _lineBreaker_b: h,
        _resizeBack: y,
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
      const i = [{
        mode: "htmlmixed",
        htmlMode: !0,
        lineNumbers: !0,
        lineWrapping: !0
      }, e.codeMirror.options || {}].reduce(function(l, a) {
        for (let c in a)
          re.hasOwn(a, c) && (l[c] = a[c]);
        return l;
      }, {});
      e.height === "auto" && (i.viewportMargin = 1 / 0, i.height = "auto");
      const o = e.codeMirror.src.fromTextArea(t, i);
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
    }, e.options || {}].reduce(function(i, o) {
      for (let l in o)
        re.hasOwn(o, l) && (i[l] = o[l]);
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
    const o = t.element, l = o.relative, a = o.editorArea, c = e.toolbarContainer && e.toolbarContainer !== i.toolbarContainer, f = e.lang !== i.lang || e.buttonList !== i.buttonList || e.mode !== i.mode || c, n = this._createToolBar(document, f ? e.buttonList : i.buttonList, e.plugins, e);
    n.pluginCallButtons.math && this._checkKatexMath(e.katex);
    const b = document.createElement("DIV");
    b.className = "se-arrow", f && (n.element.style.visibility = "hidden", c ? (e.toolbarContainer.appendChild(n.element), o.toolbar.parentElement.removeChild(o.toolbar)) : o.toolbar.parentElement.replaceChild(n.element, o.toolbar), o.toolbar = n.element, o._menuTray = n._menuTray, o._arrow = b);
    const u = this._initElements(e, o.topArea, f ? n.element : o.toolbar, b), v = u.bottomBar, w = u.wysiwygFrame, S = u.placeholder;
    let E = u.codeView;
    return o.resizingBar && re.removeItem(o.resizingBar), v.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== i.resizingBarContainer ? e.resizingBarContainer.appendChild(v.resizingBar) : l.appendChild(v.resizingBar)), a.innerHTML = "", a.appendChild(E), S && a.appendChild(S), E = this._checkCodeMirror(e, E), o.resizingBar = v.resizingBar, o.navigation = v.navigation, o.charWrapper = v.charWrapper, o.charCounter = v.charCounter, o.wysiwygFrame = w, o.code = E, o.placeholder = S, e.rtl ? re.addClass(o.topArea, "se-rtl") : re.removeClass(o.topArea, "se-rtl"), {
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
  _initElements: function(e, t, i, o) {
    t.style.cssText = e._editorStyles.top, /inline/i.test(e.mode) ? (i.className += " se-toolbar-inline", i.style.width = e.toolbarWidth) : /balloon/i.test(e.mode) && (i.className += " se-toolbar-balloon", i.style.width = e.toolbarWidth, i.appendChild(o));
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
    let c = null, f = null, n = null, b = null;
    if (e.resizingBar && (c = document.createElement("DIV"), c.className = "se-resizing-bar sun-editor-common", f = document.createElement("DIV"), f.className = "se-navigation sun-editor-common", c.appendChild(f), e.charCounter)) {
      if (n = document.createElement("DIV"), n.className = "se-char-counter-wrapper", e.charCounterLabel) {
        const v = document.createElement("SPAN");
        v.className = "se-char-label", v.textContent = e.charCounterLabel, n.appendChild(v);
      }
      if (b = document.createElement("SPAN"), b.className = "se-char-counter", b.textContent = "0", n.appendChild(b), e.maxCharCount > 0) {
        const v = document.createElement("SPAN");
        v.textContent = " / " + e.maxCharCount, n.appendChild(v);
      }
      c.appendChild(n);
    }
    let u = null;
    return e.placeholder && (u = document.createElement("SPAN"), u.className = "se-placeholder", u.innerText = e.placeholder), {
      bottomBar: {
        resizingBar: c,
        navigation: f,
        charWrapper: n,
        charCounter: b
      },
      wysiwygFrame: l,
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
    const i = {};
    if (t.plugins) {
      const a = t.plugins, c = a.length ? a : Object.keys(a).map(function(f) {
        return a[f];
      });
      for (let f = 0, n = c.length, b; f < n; f++)
        b = c[f].default || c[f], i[b.name] = b;
    }
    t.plugins = i, t.strictMode = t.strictMode !== !1, t.strictHTMLValidation = t.strictHTMLValidation !== !1, t.lang = t.lang || Ni, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new re._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
    const o = t.textTags = [{ bold: "STRONG", underline: "U", italic: "EM", strike: "DEL", sub: "SUB", sup: "SUP" }, t.textTags || {}].reduce(function(a, c) {
      for (let f in c)
        a[f] = c[f];
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
    const l = "br|p|div|pre|blockquote|h1|h2|h3|h4|h5|h6|ol|ul|li|hr|figure|figcaption|img|iframe|audio|video|source|table|thead|tbody|tr|th|td|a|b|strong|var|i|em|u|ins|s|span|strike|del|sub|sup|code|svg|path|details|summary";
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : l) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? re.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? re.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? re.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
      { text: "1", value: "1em" },
      { text: "1.5", value: "1.5em" },
      { text: "2", value: "2em" },
      { text: "2.5", value: "2.5em" }
    ], t.position = typeof t.position == "string" ? t.position : null, t.display = t.display || (e.style.display === "none" || !e.style.display ? "block" : e.style.display), t.popupDisplay = t.popupDisplay || "full", t.resizingBar = t.resizingBar === void 0 ? !/inline|balloon/i.test(t.mode) : t.resizingBar, t.showPathLabel = t.resizingBar ? typeof t.showPathLabel == "boolean" ? t.showPathLabel : !0 : !1, t.resizeEnable = t.resizeEnable === void 0 ? !0 : !!t.resizeEnable, t.resizingBarContainer = typeof t.resizingBarContainer == "string" ? document.querySelector(t.resizingBarContainer) : t.resizingBarContainer, t.charCounter = t.maxCharCount > 0 ? !0 : typeof t.charCounter == "boolean" ? t.charCounter : !1, t.charCounterType = typeof t.charCounterType == "string" ? t.charCounterType : "char", t.charCounterLabel = typeof t.charCounterLabel == "string" ? t.charCounterLabel.trim() : null, t.maxCharCount = re.isNumber(t.maxCharCount) && t.maxCharCount > -1 ? t.maxCharCount * 1 : null, t.width = t.width ? re.isNumber(t.width) ? t.width + "px" : t.width : e.clientWidth ? e.clientWidth + "px" : "100%", t.minWidth = (re.isNumber(t.minWidth) ? t.minWidth + "px" : t.minWidth) || "", t.maxWidth = (re.isNumber(t.maxWidth) ? t.maxWidth + "px" : t.maxWidth) || "", t.height = t.height ? re.isNumber(t.height) ? t.height + "px" : t.height : e.clientHeight ? e.clientHeight + "px" : "auto", t.minHeight = (re.isNumber(t.minHeight) ? t.minHeight + "px" : t.minHeight) || "", t.maxHeight = (re.isNumber(t.maxHeight) ? t.maxHeight + "px" : t.maxHeight) || "", t.className = typeof t.className == "string" && t.className.length > 0 ? " " + t.className : "", t.defaultStyle = typeof t.defaultStyle == "string" ? t.defaultStyle : "", t.font = t.font ? t.font : ["Arial", "Comic Sans MS", "Courier New", "Impact", "Georgia", "tahoma", "Trebuchet MS", "Verdana"], t.fontSize = t.fontSize ? t.fontSize : null, t.formats = t.formats ? t.formats : null, t.colorList = t.colorList ? t.colorList : null, t.lineHeights = t.lineHeights ? t.lineHeights : null, t.paragraphStyles = t.paragraphStyles ? t.paragraphStyles : null, t.textStyles = t.textStyles ? t.textStyles : null, t.fontSizeUnit = typeof t.fontSizeUnit == "string" && t.fontSizeUnit.trim().toLowerCase() || "px", t.alignItems = typeof t.alignItems == "object" ? t.alignItems : t.rtl ? ["right", "center", "left", "justify"] : ["left", "center", "right", "justify"], t.imageResizing = t.imageResizing === void 0 ? !0 : t.imageResizing, t.imageHeightShow = t.imageHeightShow === void 0 ? !0 : !!t.imageHeightShow, t.imageAlignShow = t.imageAlignShow === void 0 ? !0 : !!t.imageAlignShow, t.imageWidth = t.imageWidth ? re.isNumber(t.imageWidth) ? t.imageWidth + "px" : t.imageWidth : "auto", t.imageHeight = t.imageHeight ? re.isNumber(t.imageHeight) ? t.imageHeight + "px" : t.imageHeight : "auto", t.imageSizeOnlyPercentage = !!t.imageSizeOnlyPercentage, t._imageSizeUnit = t.imageSizeOnlyPercentage ? "%" : "px", t.imageRotation = t.imageRotation !== void 0 ? t.imageRotation : !(t.imageSizeOnlyPercentage || !t.imageHeightShow), t.imageFileInput = t.imageFileInput === void 0 ? !0 : t.imageFileInput, t.imageUrlInput = t.imageUrlInput === void 0 || !t.imageFileInput ? !0 : t.imageUrlInput, t.imageUploadHeader = t.imageUploadHeader || null, t.imageUploadUrl = typeof t.imageUploadUrl == "string" ? t.imageUploadUrl : null, t.imageUploadSizeLimit = /\d+/.test(t.imageUploadSizeLimit) ? re.getNumber(t.imageUploadSizeLimit, 0) : null, t.imageMultipleFile = !!t.imageMultipleFile, t.imageAccept = typeof t.imageAccept != "string" || t.imageAccept.trim() === "*" ? "image/*" : t.imageAccept.trim() || "image/*", t.imageGalleryData = t.imageGalleryData || null, t.imageGalleryUrl = typeof t.imageGalleryUrl == "string" ? t.imageGalleryUrl : null, t.imageGalleryHeader = t.imageGalleryHeader || null, t.videoResizing = t.videoResizing === void 0 ? !0 : t.videoResizing, t.videoHeightShow = t.videoHeightShow === void 0 ? !0 : !!t.videoHeightShow, t.videoAlignShow = t.videoAlignShow === void 0 ? !0 : !!t.videoAlignShow, t.videoRatioShow = t.videoRatioShow === void 0 ? !0 : !!t.videoRatioShow, t.videoWidth = !t.videoWidth || !re.getNumber(t.videoWidth, 0) ? "" : re.isNumber(t.videoWidth) ? t.videoWidth + "px" : t.videoWidth, t.videoHeight = !t.videoHeight || !re.getNumber(t.videoHeight, 0) ? "" : re.isNumber(t.videoHeight) ? t.videoHeight + "px" : t.videoHeight, t.videoSizeOnlyPercentage = !!t.videoSizeOnlyPercentage, t._videoSizeUnit = t.videoSizeOnlyPercentage ? "%" : "px", t.videoRotation = t.videoRotation !== void 0 ? t.videoRotation : !(t.videoSizeOnlyPercentage || !t.videoHeightShow), t.videoRatio = re.getNumber(t.videoRatio, 4) || 0.5625, t.videoRatioList = t.videoRatioList ? t.videoRatioList : null, t.youtubeQuery = (t.youtubeQuery || "").replace("?", ""), t.vimeoQuery = (t.vimeoQuery || "").replace("?", ""), t.videoFileInput = !!t.videoFileInput, t.videoUrlInput = t.videoUrlInput === void 0 || !t.videoFileInput ? !0 : t.videoUrlInput, t.videoUploadHeader = t.videoUploadHeader || null, t.videoUploadUrl = typeof t.videoUploadUrl == "string" ? t.videoUploadUrl : null, t.videoUploadSizeLimit = /\d+/.test(t.videoUploadSizeLimit) ? re.getNumber(t.videoUploadSizeLimit, 0) : null, t.videoMultipleFile = !!t.videoMultipleFile, t.videoTagAttrs = t.videoTagAttrs || null, t.videoIframeAttrs = t.videoIframeAttrs || null, t.videoAccept = typeof t.videoAccept != "string" || t.videoAccept.trim() === "*" ? "video/*" : t.videoAccept.trim() || "video/*", t.audioWidth = t.audioWidth ? re.isNumber(t.audioWidth) ? t.audioWidth + "px" : t.audioWidth : "", t.audioHeight = t.audioHeight ? re.isNumber(t.audioHeight) ? t.audioHeight + "px" : t.audioHeight : "", t.audioFileInput = !!t.audioFileInput, t.audioUrlInput = t.audioUrlInput === void 0 || !t.audioFileInput ? !0 : t.audioUrlInput, t.audioUploadHeader = t.audioUploadHeader || null, t.audioUploadUrl = typeof t.audioUploadUrl == "string" ? t.audioUploadUrl : null, t.audioUploadSizeLimit = /\d+/.test(t.audioUploadSizeLimit) ? re.getNumber(t.audioUploadSizeLimit, 0) : null, t.audioMultipleFile = !!t.audioMultipleFile, t.audioTagAttrs = t.audioTagAttrs || null, t.audioAccept = typeof t.audioAccept != "string" || t.audioAccept.trim() === "*" ? "audio/*" : t.audioAccept.trim() || "audio/*", t.tableCellControllerPosition = typeof t.tableCellControllerPosition == "string" ? t.tableCellControllerPosition.toLowerCase() : "cell", t.linkTargetNewWindow = !!t.linkTargetNewWindow, t.linkProtocol = typeof t.linkProtocol == "string" ? t.linkProtocol : null, t.linkRel = Array.isArray(t.linkRel) ? t.linkRel : [], t.linkRelDefault = t.linkRelDefault || {}, t.tabDisable = !!t.tabDisable, t.shortcutsDisable = Array.isArray(t.shortcutsDisable) ? t.shortcutsDisable : [], t.shortcutsHint = t.shortcutsHint === void 0 ? !0 : !!t.shortcutsHint, t.callBackSave = t.callBackSave ? t.callBackSave : null, t.templates = t.templates ? t.templates : null, t.placeholder = typeof t.placeholder == "string" ? t.placeholder : null, t.mediaAutoSelect = t.mediaAutoSelect === void 0 ? !0 : !!t.mediaAutoSelect, t.buttonList = t.buttonList ? t.buttonList : [
      ["undo", "redo"],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"]
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? ln : [ln, t.icons].reduce(function(a, c) {
      for (let f in c)
        re.hasOwn(c, f) && (a[f] = c[f]);
      return a;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(a, c) {
      for (let f in c)
        re.hasOwn(c, f) && (a[f] = c[f]);
      return a;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = re._setDefaultOptionStyle(t, t.defaultStyle);
  },
  _setWhitelist: function(e, t) {
    if (typeof t != "string") return e;
    t = t.split("|"), e = e.split("|");
    for (let i = 0, o = t.length, l; i < o; i++)
      l = e.indexOf(t[i]), l > -1 && e.splice(l, 1);
    return e.join("|");
  },
  /**
   * @description Suneditor's Default button list
   * @param {Object} options options
   * @private
   */
  _defaultButtons: function(e) {
    const t = e.icons, i = e.lang, o = re.isOSX_IOS ? "⌘" : "CTRL", l = re.isOSX_IOS ? "⇧" : "+SHIFT", a = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], c = e.rtl ? ["[", "]"] : ["]", "["], f = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
    return {
      /** default command */
      bold: ["", i.toolbar.bold + '<span class="se-shortcut">' + (a.indexOf("bold") > -1 ? "" : o + '+<span class="se-shortcut-key">B</span>') + "</span>", "bold", "", t.bold],
      underline: ["", i.toolbar.underline + '<span class="se-shortcut">' + (a.indexOf("underline") > -1 ? "" : o + '+<span class="se-shortcut-key">U</span>') + "</span>", "underline", "", t.underline],
      italic: ["", i.toolbar.italic + '<span class="se-shortcut">' + (a.indexOf("italic") > -1 ? "" : o + '+<span class="se-shortcut-key">I</span>') + "</span>", "italic", "", t.italic],
      strike: ["", i.toolbar.strike + '<span class="se-shortcut">' + (a.indexOf("strike") > -1 ? "" : o + l + '+<span class="se-shortcut-key">S</span>') + "</span>", "strike", "", t.strike],
      subscript: ["", i.toolbar.subscript, "SUB", "", t.subscript],
      superscript: ["", i.toolbar.superscript, "SUP", "", t.superscript],
      removeFormat: ["", i.toolbar.removeFormat, "removeFormat", "", t.erase],
      indent: ["", i.toolbar.indent + '<span class="se-shortcut">' + (a.indexOf("indent") > -1 ? "" : o + '+<span class="se-shortcut-key">' + c[0] + "</span>") + "</span>", "indent", "", f[0]],
      outdent: ["", i.toolbar.outdent + '<span class="se-shortcut">' + (a.indexOf("indent") > -1 ? "" : o + '+<span class="se-shortcut-key">' + c[1] + "</span>") + "</span>", "outdent", "", f[1]],
      fullScreen: ["se-code-view-enabled se-resizing-enabled", i.toolbar.fullScreen, "fullScreen", "", t.expansion],
      showBlocks: ["", i.toolbar.showBlocks, "showBlocks", "", t.show_blocks],
      codeView: ["se-code-view-enabled se-resizing-enabled", i.toolbar.codeView, "codeView", "", t.code_view],
      undo: ["", i.toolbar.undo + '<span class="se-shortcut">' + (a.indexOf("undo") > -1 ? "" : o + '+<span class="se-shortcut-key">Z</span>') + "</span>", "undo", "", t.undo],
      redo: ["", i.toolbar.redo + '<span class="se-shortcut">' + (a.indexOf("undo") > -1 ? "" : o + '+<span class="se-shortcut-key">Y</span> / ' + o + l + '+<span class="se-shortcut-key">Z</span>') + "</span>", "redo", "", t.redo],
      preview: ["se-resizing-enabled", i.toolbar.preview, "preview", "", t.preview],
      print: ["se-resizing-enabled", i.toolbar.print, "print", "", t.print],
      dir: ["", i.toolbar[e.rtl ? "dir_ltr" : "dir_rtl"], "dir", "", t[e.rtl ? "dir_ltr" : "dir_rtl"]],
      dir_ltr: ["", i.toolbar.dir_ltr, "dir_ltr", "", t.dir_ltr],
      dir_rtl: ["", i.toolbar.dir_rtl, "dir_rtl", "", t.dir_rtl],
      save: ["se-resizing-enabled", i.toolbar.save + '<span class="se-shortcut">' + (a.indexOf("save") > -1 ? "" : o + '+<span class="se-shortcut-key">S</span>') + "</span>", "save", "", t.save],
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
    const e = re.createElement("DIV");
    e.className = "se-btn-module se-btn-module-border";
    const t = re.createElement("UL");
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
  _createButton: function(e, t, i, o, l, a, c) {
    const f = re.createElement("LI"), n = re.createElement("BUTTON"), b = t || i;
    return n.setAttribute("type", "button"), n.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), n.setAttribute("data-command", i), n.setAttribute("data-display", o), n.setAttribute("aria-label", b.replace(/<span .+<\/span>/, "")), n.setAttribute("tabindex", "-1"), l || (l = '<span class="se-icon-text">!</span>'), /^default\./i.test(l) && (l = c[l.replace(/^default\./i, "")]), /^text\./i.test(l) && (l = l.replace(/^text\./i, ""), n.className += " se-btn-more-text"), l += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + b + "</span></span>", a && n.setAttribute("disabled", !0), n.innerHTML = l, f.appendChild(n), {
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
  _createToolBar: function(e, t, i, o) {
    const l = e.createElement("DIV");
    l.className = "se-toolbar-separator-vertical";
    const a = e.createElement("DIV");
    a.className = "se-toolbar sun-editor-common";
    const c = e.createElement("DIV");
    c.className = "se-btn-tray", a.appendChild(c), t = JSON.parse(JSON.stringify(t));
    const f = o.icons, n = this._defaultButtons(o), b = {}, u = [];
    let v = null, w = null, S = null, E = null, R = "", s = !1;
    const r = re.createElement("DIV");
    r.className = "se-toolbar-more-layer";
    e:
      for (let m = 0, g, h, y, C, _; m < t.length; m++)
        if (g = !1, _ = "", C = t[m], S = this._createModuleGroup(), typeof C == "object") {
          for (let x = 0, I; x < C.length; x++) {
            if (w = C[x], I = !1, /^\%\d+/.test(w) && x === 0) {
              C[0] = w.replace(/[^\d]/g, ""), u.push(C), t.splice(m--, 1);
              continue e;
            }
            if (typeof w == "object")
              typeof w.add == "function" ? (R = w.name, v = n[R], i[R] = w) : (R = w.name, v = [w.buttonClass, w.title, w.name, w.dataDisplay, w.innerHTML, w._disabled]);
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
                I = !0;
                const L = w.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                y = "__se__" + L[1].trim();
                const z = L[2].trim(), N = L[3].trim();
                v = ["se-btn-more", z, y, "MORE", N];
              } else
                v = n[w];
              if (R = w, !v) {
                const L = i[R];
                if (!L) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + R + "]");
                v = [L.buttonClass, L.title, L.name, L.display, L.innerHTML, L._disabled];
              }
            }
            E = this._createButton(v[0], v[1], v[2], v[3], v[4], v[5], f), (g ? h : S.ul).appendChild(E.li), i[R] && (b[R] = E.button), I && (g = !0, h = re.createElement("DIV"), h.className = "se-more-layer " + y, h.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (_ ? ' style="float: ' + _ + ';"' : "") + "></ul></div>", r.appendChild(h), h = h.firstElementChild.firstElementChild);
          }
          if (s) {
            const x = l.cloneNode(!1);
            c.appendChild(x);
          }
          c.appendChild(S.div), s = !0;
        } else if (/^\/$/.test(C)) {
          const x = e.createElement("DIV");
          x.className = "se-btn-module-enter", c.appendChild(x), s = !1;
        }
    switch (c.children.length) {
      case 0:
        c.style.display = "none";
        break;
      case 1:
        re.removeClass(c.firstElementChild, "se-btn-module-border");
        break;
      default:
        if (o.rtl) {
          const m = l.cloneNode(!1);
          m.style.float = c.lastElementChild.style.float, c.appendChild(m);
        }
    }
    u.length > 0 && u.unshift(t), r.children.length > 0 && c.appendChild(r);
    const d = e.createElement("DIV");
    d.className = "se-menu-tray", a.appendChild(d);
    const p = e.createElement("DIV");
    return p.className = "se-toolbar-cover", a.appendChild(p), o.hideToolbar && (a.style.display = "none"), {
      element: a,
      plugins: i,
      pluginCallButtons: b,
      responsiveButtons: u,
      _menuTray: d,
      _buttonTray: c
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
function nr(e, t) {
  const i = e._w, o = e.util, l = e.options.historyStackDelayTime;
  let a = e.context.element, c = e.context.tool.undo, f = e.context.tool.redo, n = null, b = 0, u = [];
  function v() {
    const S = u[b];
    a.wysiwyg.innerHTML = S.contents, e.setRange(o.getNodeFromPath(S.s.path, a.wysiwyg), S.s.offset, o.getNodeFromPath(S.e.path, a.wysiwyg), S.e.offset), e.focus(), u.length <= 1 ? (c && c.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0)) : b === 0 ? (c && c.setAttribute("disabled", !0), f && f.removeAttribute("disabled")) : b === u.length - 1 ? (c && c.removeAttribute("disabled"), f && f.setAttribute("disabled", !0)) : (c && c.removeAttribute("disabled"), f && f.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function w() {
    e._checkComponents();
    const S = a.wysiwyg.innerHTML;
    if (!S || u[b] && S === u[b].contents) return;
    b++;
    const E = e._variable._range;
    u.length > b && (u = u.slice(0, b), f && f.setAttribute("disabled", !0)), E ? u[b] = {
      contents: S,
      s: {
        path: o.getNodePath(E.startContainer, null, null),
        offset: E.startOffset
      },
      e: {
        path: o.getNodePath(E.endContainer, null, null),
        offset: E.endOffset
      }
    } : u[b] = {
      contents: S,
      s: { path: [0, 0], offset: [0, 0] },
      e: { path: 0, offset: 0 }
    }, b === 1 && c && c.removeAttribute("disabled"), e._setCharCount(), t();
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
    push: function(S) {
      i.setTimeout(e._resourcesStateChange.bind(e));
      const E = typeof S == "number" ? S > 0 ? S : 0 : S ? l : 0;
      if ((!E || n) && (i.clearTimeout(n), !E)) {
        w();
        return;
      }
      n = i.setTimeout(function() {
        i.clearTimeout(n), n = null, w();
      }, E);
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
    go: function(S) {
      b = S < 0 ? u.length - 1 : S, v();
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
      c && c.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0), u.splice(0), b = 0, u[b] = {
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
      a = e.context.element, c = e.context.tool.undo, f = e.context.tool.redo, b === 0 ? (c && c.setAttribute("disabled", !0), f && b === u.length - 1 && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : b === u.length - 1 && f && f.setAttribute("disabled", !0);
    },
    /**
     * @description Remove all stacks and remove the timeout function.
     * @private
     */
    _destroy: function() {
      n && i.clearTimeout(n), u = null;
    }
  };
}
const nn = {
  name: "notice",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    const t = e.context;
    t.notice = {};
    let i = e.util.createElement("DIV"), o = e.util.createElement("SPAN"), l = e.util.createElement("BUTTON");
    i.className = "se-notice", l.className = "close", l.setAttribute("aria-label", "Close"), l.setAttribute("title", e.lang.dialogBox.close), l.innerHTML = e.icons.cancel, i.appendChild(o), i.appendChild(l), t.notice.modal = i, t.notice.message = o, l.addEventListener("click", this.onClick_cancel.bind(e)), t.element.editorArea.appendChild(i), i = null;
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
function or(e, t, i, o, l, a) {
  const c = e.element.originElement.ownerDocument || document, f = c.defaultView || window, n = re, b = l.icons, u = {
    _d: c,
    _w: f,
    _parser: new f.DOMParser(),
    _prevRtl: l.rtl,
    _editorHeight: 0,
    _editorHeightPadding: 0,
    _listCamel: l.__listCommonStyle,
    _listKebab: n.camelToKebabCase(l.__listCommonStyle),
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
    notice: nn,
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
      for (let r = 0, d, p; r < s.length; r++)
        d = s[r], p = d.getAttribute("data-command"), this.allCommandButtons[p] = d;
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const s = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let r = 0, d, p, m; r < s.length; r++)
          d = s[r], p = d.getAttribute("data-command"), m = this.allCommandButtons[p], m && (d.parentElement.replaceChild(m, d), this.context.tool[p] && (this.context.tool[p] = m));
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
      for (let r = 0, d = s.length, p; r < d; r++)
        p = s[r].name, this.plugins[p] || (this.plugins[p] = s[r]), this.initPlugins[p] || (this.initPlugins[p] = !0, typeof this.plugins[p].add == "function" && this.plugins[p].add(this));
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
      const r = this._containerName = s.getAttribute("data-command"), d = this.container = this._menuTray[r];
      this.containerActiveButton = s, this._setMenuPosition(s, d), this._bindedContainerOff = this.containerOff.bind(this), this.addDocEvent("mousedown", this._bindedContainerOff, !1), this.plugins[r].on && this.plugins[r].on.call(this), this._antiBlur = !0;
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
      const d = this.context.element.toolbar, p = d.offsetWidth, m = v._getEditorOffsets(e.element.toolbar), g = r.offsetWidth, h = s.parentElement.offsetLeft + 3;
      if (l.rtl) {
        const N = s.offsetWidth, Z = g > N ? g - N : 0, W = Z > 0 ? 0 : N - g;
        r.style.left = h - Z + W + "px", m.left > v._getEditorOffsets(r).left && (r.style.left = "0px");
      } else {
        const N = p <= g ? 0 : p - (h + g);
        N < 0 ? r.style.left = h + N + "px" : r.style.left = h + "px";
      }
      let y = 0, C = s;
      for (; C && C !== d; )
        y += C.offsetTop, C = C.offsetParent;
      const _ = y;
      this._isBalloon ? y += d.offsetTop + s.offsetHeight : y -= s.offsetHeight;
      const x = m.top, I = r.offsetHeight, L = this.getGlobalScrollOffset().top, z = f.innerHeight - (x - L + _ + s.parentElement.offsetHeight);
      if (z < I) {
        let N = -1 * (I - _ + 3);
        const Z = x - L + N, W = I + (Z < 0 ? Z : 0);
        W > z ? (r.style.height = W + "px", N = -1 * (W - _ + 3)) : (r.style.height = z + "px", N = _ + s.parentElement.offsetHeight), r.style.top = N + "px";
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
          if (!n.hasClass(r, "se-controller")) {
            this.currentControllerTarget = r, this.currentFileComponentInfo = this.getFileComponent(r);
            continue;
          }
          r.style && (r.style.display = "block", this._shadowRoot && this._shadowRootControllerEventTarget.indexOf(r) === -1 && (r.addEventListener("mousedown", function(d) {
            d.preventDefault(), d.stopPropagation();
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
    setControllerPosition: function(s, r, d, p) {
      l.rtl && (p.left *= -1);
      const m = n.getOffset(r, e.element.wysiwygFrame);
      s.style.visibility = "hidden", s.style.display = "block";
      const g = d === "top" ? -(s.offsetHeight + 2) : r.offsetHeight + 12;
      s.style.top = m.top + g + p.top + "px";
      const h = m.left - e.element.wysiwygFrame.scrollLeft + p.left, y = s.offsetWidth, C = r.offsetWidth, _ = n.hasClass(s.firstElementChild, "se-arrow") ? s.firstElementChild : null;
      if (l.rtl) {
        const x = y > C ? y - C : 0, I = x > 0 ? 0 : C - y;
        s.style.left = h - x + I + "px", x > 0 && _ && (_.style.left = (y - 14 < 10 + x ? y - 14 : 10 + x) + "px");
        const L = e.element.wysiwygFrame.offsetLeft - s.offsetLeft;
        L > 0 && (s.style.left = "0px", _ && (_.style.left = L + "px"));
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
      const s = n.getParentElement(this.getSelectionNode(), "figcaption");
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
            if (s.startContainer === s.endContainer && n.isWysiwygDiv(s.startContainer)) {
              const r = s.commonAncestorContainer.children[s.startOffset];
              if (!n.isFormatElement(r) && !n.isComponent(r)) {
                const d = n.createElement(l.defaultTag), p = n.createElement("BR");
                d.appendChild(p), e.element.wysiwyg.insertBefore(d, r), this.setRange(p, 0, p, 0);
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
      r ? this.selectComponent(r.target, r.pluginName) : s ? (s = n.getChildElement(s, function(d) {
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
    setRange: function(s, r, d, p) {
      if (!s || !d) return;
      r > s.textContent.length && (r = s.textContent.length), p > d.textContent.length && (p = d.textContent.length), n.isFormatElement(s) && (s = s.childNodes[r] || s.childNodes[r - 1] || s, r = r > 0 ? s.nodeType === 1 ? 1 : s.textContent ? s.textContent.length : 0 : 0), n.isFormatElement(d) && (d = d.childNodes[p] || d.childNodes[p - 1] || d, p = p > 0 ? d.nodeType === 1 ? 1 : d.textContent ? d.textContent.length : 0 : 0);
      const m = this._wd.createRange();
      try {
        m.setStart(s, r), m.setEnd(d, p);
      } catch (h) {
        console.warn("[SUNEDITOR.core.focus.error] " + h), this.nativeFocus();
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
        const d = r.anchorNode, p = r.focusNode, m = r.anchorOffset, g = r.focusOffset, h = n.compareElements(d, p), y = h.ancestor && (h.result === 0 ? m <= g : h.result > 1);
        return this.setRange(
          y ? d : p,
          y ? m : g,
          y ? p : d,
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
        const d = e.element.wysiwyg, p = n.createElement(l.defaultTag);
        p.innerHTML = "<br>", d.insertBefore(p, r && r !== d ? r.nextElementSibling : d.firstElementChild), this.setRange(p.firstElementChild, 0, p.firstElementChild, 1), s = this._variable._range;
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
      this._variable._range = s, s.collapsed ? n.isWysiwygDiv(s.commonAncestorContainer) ? d = s.commonAncestorContainer.children[s.startOffset] || s.commonAncestorContainer : d = s.commonAncestorContainer : d = r.extentNode || r.anchorNode, this._variable._selectionNode = d;
    },
    /**
     * @description Return the range object of editor's first child node
     * @returns {Object}
     * @private
     */
    _createDefaultRange: function() {
      const s = e.element.wysiwyg, r = this._wd.createRange();
      let d = s.firstElementChild, p = null;
      return d ? (p = d.firstChild, p || (p = n.createElement("BR"), d.appendChild(p))) : (d = n.createElement(l.defaultTag), p = n.createElement("BR"), d.appendChild(p), s.appendChild(d)), r.setStart(p, 0), r.setEnd(p, 0), r;
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
      let d = s.startContainer, p = s.startOffset, m = s.endContainer, g = s.endOffset, h, y, C;
      if (n.isFormatElement(d))
        for (d.childNodes[p] ? (d = d.childNodes[p] || d, p = 0) : (d = d.lastChild || d, p = d.textContent.length); d && d.nodeType === 1 && d.firstChild; )
          d = d.firstChild || d, p = 0;
      if (n.isFormatElement(m)) {
        for (m = m.childNodes[g] || m.lastChild || m; m && m.nodeType === 1 && m.lastChild; )
          m = m.lastChild;
        g = r ? 0 : m.textContent.length;
      }
      if (h = n.isWysiwygDiv(d) ? e.element.wysiwyg.firstChild : d, y = p, n.isBreak(h) || h.nodeType === 1 && h.childNodes.length > 0) {
        const _ = n.isBreak(h);
        if (!_) {
          for (; h && !n.isBreak(h) && h.nodeType === 1; )
            h = h.childNodes[y] || h.nextElementSibling || h.nextSibling, y = 0;
          let x = n.getFormatElement(h, null);
          x === n.getRangeFormatElement(x, null) && (x = n.createElement(n.getParentElement(h, n.isCell) ? "DIV" : l.defaultTag), h.parentNode.insertBefore(x, h), x.appendChild(h));
        }
        if (n.isBreak(h)) {
          const x = n.createTextNode(n.zeroWidthSpace);
          h.parentNode.insertBefore(x, h), h = x, _ && d === m && (m = h, g = 1);
        }
      }
      if (d = h, p = y, h = n.isWysiwygDiv(m) ? e.element.wysiwyg.lastChild : m, y = g, n.isBreak(h) || h.nodeType === 1 && h.childNodes.length > 0) {
        const _ = n.isBreak(h);
        if (!_) {
          for (; h && !n.isBreak(h) && h.nodeType === 1 && (C = h.childNodes, C.length !== 0); )
            h = C[y > 0 ? y - 1 : y] || !/FIGURE/i.test(C[0].nodeName) ? C[0] : h.previousElementSibling || h.previousSibling || d, y = y > 0 ? h.textContent.length : y;
          let x = n.getFormatElement(h, null);
          x === n.getRangeFormatElement(x, null) && (x = n.createElement(n.isCell(x) ? "DIV" : l.defaultTag), h.parentNode.insertBefore(x, h), x.appendChild(h));
        }
        if (n.isBreak(h)) {
          const x = n.createTextNode(n.zeroWidthSpace);
          h.parentNode.insertBefore(x, h), h = x, y = 1, _ && !h.previousSibling && n.removeItem(m);
        }
      }
      return m = h, g = y, this.setRange(d, p, m, g), !0;
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
        const N = e.element.wysiwyg.children;
        if (N.length === 0) return [];
        this.setRange(N[0], 0, N[N.length - 1], N[N.length - 1].textContent.trim().length), r = this.getRange();
      }
      const d = r.startContainer, p = r.endContainer, m = r.commonAncestorContainer, g = n.getListChildren(m, function(N) {
        return s ? s(N) : n.isFormatElement(N);
      });
      if (!n.isWysiwygDiv(m) && !n.isRangeFormatElement(m) && g.unshift(n.getFormatElement(m, null)), d === p || g.length === 1) return g;
      let h = n.getFormatElement(d, null), y = n.getFormatElement(p, null), C = null, _ = null;
      const x = function(N) {
        return n.isTable(N) ? /^TABLE$/i.test(N.nodeName) : !0;
      };
      let I = n.getRangeFormatElement(h, x), L = n.getRangeFormatElement(y, x);
      n.isTable(I) && n.isListCell(I.parentNode) && (I = I.parentNode), n.isTable(L) && n.isListCell(L.parentNode) && (L = L.parentNode);
      const z = I === L;
      for (let N = 0, Z = g.length, W; N < Z; N++) {
        if (W = g[N], h === W || !z && W === I) {
          C = N;
          continue;
        }
        if (y === W || !z && W === L) {
          _ = N;
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
      const r = this.getRange().commonAncestorContainer, d = n.getParentElement(r, n.isComponent), p = n.isTable(r) ? this.getSelectedElements(null) : this.getSelectedElements((function(m) {
        const g = this.getParentElement(m, this.isComponent);
        return this.isFormatElement(m) && (!g || g === d) || this.isComponent(m) && !this.getFormatElement(m);
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
      const p = [];
      for (d = d === "start" ? "previousSibling" : "nextSibling"; s && !n.isFormatElement(s) && !n.isWysiwygDiv(s); )
        if (!s[d] || n.isBreak(s[d]) && !s[d][d])
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
      const d = n.getFormatElement(this.getSelectionNode(), null);
      let p = null;
      if (!n.isFormatElement(s) && n.isFreeFormatElement(d || s.parentNode))
        p = n.createElement("BR");
      else {
        const m = r ? typeof r == "string" ? r : r.nodeName : n.isFormatElement(d) && !n.isRangeFormatElement(d) && !n.isFreeFormatElement(d) ? d.nodeName : l.defaultTag;
        p = n.createElement(m), p.innerHTML = "<br>", (r && typeof r != "string" || !r && n.isFormatElement(d)) && n.copyTagAttributes(p, r || d, ["id"]);
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
    insertComponent: function(s, r, d, p) {
      if (this.isReadOnly || d && !this.checkCharCount(s, null))
        return null;
      const m = this.removeNode();
      this.getRange_addLine(this.getRange(), m.container);
      let g = null, h = this.getSelectionNode(), y = n.getFormatElement(h, null);
      if (n.isListCell(y))
        this.insertNode(s, h === y ? null : m.container.nextSibling, !1), s.nextSibling || s.parentNode.appendChild(n.createElement("BR"));
      else {
        if (this.getRange().collapsed && (m.container.nodeType === 3 || n.isBreak(m.container))) {
          const C = n.getParentElement(m.container, (function(_) {
            return this.isRangeFormatElement(_);
          }).bind(n));
          g = n.splitElement(m.container, m.offset, C ? n.getElementDepth(C) + 1 : 0), g && (y = g.previousSibling);
        }
        this.insertNode(s, n.isRangeFormatElement(y) ? null : y, !1), y && n.onlyZeroWidthSpace(y) && n.removeItem(y);
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
      let r, d;
      return (/^FIGURE$/i.test(s.nodeName) || /se-component/.test(s.className)) && (r = s.querySelector(this._fileManager.queryString)), !r && s.nodeName && this._fileManager.regExp.test(s.nodeName) && (r = s), r && (d = this._fileManager.pluginMap[r.nodeName.toLowerCase()], d) ? {
        target: r,
        component: n.getParentElement(r, n.isComponent),
        pluginName: d
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
      const r = n.getParentElement(s, n.isComponent), d = e.element.lineBreaker_t.style, p = e.element.lineBreaker_b.style, m = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : s, g = n.isListCell(r.parentNode);
      let h, y, C;
      (g ? !r.previousSibling : !n.isFormatElement(r.previousElementSibling)) ? (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, h = n.getOffset(s, e.element.wysiwygFrame).top + y, C = m.offsetWidth / 2 / 2, d.top = h - y - 12 + "px", d.left = n.getOffset(m).left + C + "px", d.display = "block") : d.display = "none", (g ? !r.nextSibling : !n.isFormatElement(r.nextElementSibling)) ? (h || (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, h = n.getOffset(s, e.element.wysiwygFrame).top + y, C = m.offsetWidth / 2 / 2), p.top = h + m.offsetHeight - y - 12 + "px", p.left = n.getOffset(m).left + m.offsetWidth - C - 24 + "px", p.display = "block") : p.display = "none";
    },
    _checkDuplicateNode: function(s, r) {
      (function d(p) {
        u._dupleCheck(p, r);
        const m = p.childNodes;
        for (let g = 0, h = m.length; g < h; g++)
          d(m[g]);
      })(s);
    },
    _dupleCheck: function(s, r) {
      if (!n.isTextStyleElement(s)) return;
      const d = (s.style.cssText.match(/[^;]+;/g) || []).map(function(g) {
        return g.trim();
      }), p = s.nodeName;
      if (/^span$/i.test(p) && d.length === 0) return s;
      let m = !1;
      return function g(h) {
        if (!(n.isWysiwygDiv(h) || !n.isTextStyleElement(h))) {
          if (h.nodeName === p) {
            m = !0;
            const y = h.style.cssText.match(/[^;]+;/g) || [];
            for (let C = 0, _ = y.length, x; C < _; C++)
              (x = d.indexOf(y[C].trim())) > -1 && d.splice(x, 1);
            for (let C = 0, _ = h.classList.length; C < _; C++)
              s.classList.remove(h.classList[C]);
          }
          g(h.parentElement);
        }
      }(r), m && ((s.style.cssText = d.join(" ")) || (s.setAttribute("style", ""), s.removeAttribute("style")), s.attributes.length || s.setAttribute("data-se-duple", "true")), s;
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
      let p = null, m = this.getRange(), g = n.isListCell(m.commonAncestorContainer) ? m.commonAncestorContainer : n.getFormatElement(this.getSelectionNode(), null), h = n.isListCell(g) && (n.isListCell(s) || n.isList(s)), y, C, _, x = null;
      const I = n.isFreeFormatElement(g), L = !I && (n.isFormatElement(s) || n.isRangeFormatElement(s)) || n.isComponent(s);
      if (h && (_ = r || n.isList(s) ? g.lastChild : g.nextElementSibling, x = n.isList(s) ? g : (_ || g).parentNode), !r && (L || n.isComponent(s) || n.isMedia(s))) {
        const P = this.isEdgePoint(m.endContainer, m.endOffset, "end"), A = this.removeNode(), V = A.container, B = V === A.prevContainer && m.collapsed ? null : A.prevContainer;
        if (h && B)
          if (x = B.nodeType === 3 ? B.parentNode : B, x.contains(V)) {
            let F = !0;
            for (_ = V; _.parentNode && _.parentNode !== x; )
              _ = _.parentNode, F = !1;
            F && V === B && (_ = _.nextSibling);
          } else
            _ = null;
        else if (h && n.isListCell(V) && !g.parentElement)
          g = n.createElement("LI"), x.appendChild(g), V.appendChild(x), _ = null;
        else if (V.nodeType === 3 || n.isBreak(V) || h) {
          const F = n.getParentElement(V, (function(k) {
            return this.isRangeFormatElement(k) || this.isListCell(k);
          }).bind(n));
          if (r = n.splitElement(V, A.offset, F ? n.getElementDepth(F) + 1 : 0), !r)
            _ = r = g;
          else if (h) {
            if (g.contains(V)) {
              const k = n.isList(g.lastElementChild);
              let M = null;
              P || (M = g.cloneNode(!1), M.appendChild(r.textContent.trim() ? r : n.createTextNode(n.zeroWidthSpace))), k && (M || (M = g.cloneNode(!1), M.appendChild(n.createTextNode(n.zeroWidthSpace))), M.appendChild(g.lastElementChild)), M && (g.parentNode.insertBefore(M, g.nextElementSibling), _ = r = M);
            }
          } else
            r = r.previousSibling;
        }
      }
      m = !r && !L ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const z = m.commonAncestorContainer, N = m.startOffset, Z = m.endOffset, W = m.startContainer === z && n.isFormatElement(z), H = W && (z.childNodes[N] || z.childNodes[0]) || m.startContainer, D = W && (z.childNodes[Z] || z.childNodes[z.childNodes.length - 1]) || m.endContainer;
      if (!h)
        if (r)
          y = r.parentNode, r = r.nextSibling, C = !0;
        else if (y = H, H.nodeType === 3 && (y = H.parentNode), m.collapsed)
          if (z.nodeType === 3)
            z.textContent.length > Z ? r = z.splitText(Z) : r = z.nextSibling;
          else if (n.isBreak(y))
            r = y, y = y.parentNode;
          else {
            let P = y.childNodes[N];
            const A = P && P.nodeType === 3 && n.onlyZeroWidthSpace(P) && n.isBreak(P.nextSibling) ? P.nextSibling : P;
            A ? !A.nextSibling && n.isBreak(A) ? (y.removeChild(A), r = null) : r = n.isBreak(A) && !n.isBreak(s) ? A : A.nextSibling : r = null;
          }
        else if (H === D) {
          this.isEdgePoint(D, Z) ? r = D.nextSibling : r = D.splitText(Z);
          let A = H;
          this.isEdgePoint(H, N) || (A = H.splitText(N)), y.removeChild(A), y.childNodes.length === 0 && L && (y.innerHTML = "<br>");
        } else {
          const A = this.removeNode(), V = A.container, B = A.prevContainer;
          if (V && V.childNodes.length === 0 && L && (n.isFormatElement(V) ? V.innerHTML = "<br>" : n.isRangeFormatElement(V) && (V.innerHTML = "<" + l.defaultTag + "><br></" + l.defaultTag + ">")), n.isListCell(V) && s.nodeType === 3)
            y = V, r = null;
          else if (!L && B)
            if (y = B.nodeType === 3 ? B.parentNode : B, y.contains(V)) {
              let F = !0;
              for (r = V; r.parentNode && r.parentNode !== y; )
                r = r.parentNode, F = !1;
              F && V === B && (r = r.nextSibling);
            } else
              r = null;
          else n.isWysiwygDiv(V) && !n.isFormatElement(s) ? (y = V.appendChild(n.createElement(l.defaultTag)), r = null) : (r = L ? D : V === B ? V.nextSibling : V, y = !r || !r.parentNode ? z : r.parentNode);
          for (; r && !n.isFormatElement(r) && r.parentNode !== z; )
            r = r.parentNode;
        }
      try {
        if (!h) {
          if ((n.isWysiwygDiv(r) || y === e.element.wysiwyg.parentNode) && (y = e.element.wysiwyg, r = null), n.isFormatElement(s) || n.isRangeFormatElement(s) || !n.isListCell(y) && n.isComponent(s)) {
            const P = y;
            if (n.isList(r))
              y = r, r = null;
            else if (n.isListCell(r))
              y = r.previousElementSibling || r;
            else if (!C && !r) {
              const A = this.removeNode(), V = A.container.nodeType === 3 ? n.isListCell(n.getFormatElement(A.container, null)) ? A.container : n.getFormatElement(A.container, null) || A.container.parentNode : A.container, B = n.isWysiwygDiv(V) || n.isRangeFormatElement(V);
              y = B ? V : V.parentNode, r = B ? null : V.nextSibling;
            }
            P.childNodes.length === 0 && y !== P && n.removeItem(P);
          }
          if (L && !I && !n.isRangeFormatElement(y) && !n.isListCell(y) && !n.isWysiwygDiv(y) && (r = y.nextElementSibling, y = y.parentNode), n.isWysiwygDiv(y) && (s.nodeType === 3 || n.isBreak(s))) {
            const P = n.createElement(l.defaultTag);
            P.appendChild(s), p = s, s = P;
          }
        }
        if (h ? x.parentNode ? (y = x, r = _) : (y = e.element.wysiwyg, r = null) : r = y === r ? y.lastChild : r, n.isListCell(s) && !n.isList(y)) {
          if (n.isListCell(y))
            r = y.nextElementSibling, y = y.parentNode;
          else {
            const P = n.createElement("ol");
            y.insertBefore(P, r), y = P, r = null;
          }
          h = !0;
        }
        if (this._checkDuplicateNode(s, y), y.insertBefore(s, r), h)
          if (n.onlyZeroWidthSpace(g.textContent.trim()))
            n.removeItem(g), s = s.lastChild;
          else {
            const P = n.getArrayItem(g.children, n.isList);
            P && (s !== P ? (s.appendChild(P), s = P.previousSibling) : (y.appendChild(s), s = y), n.onlyZeroWidthSpace(g.textContent.trim()) && n.removeItem(g));
          }
      } catch (P) {
        y.appendChild(s), console.warn("[SUNEDITOR.insertNode.warn] " + P);
      } finally {
        p && (s = p);
        const P = y.querySelectorAll("[data-se-duple]");
        if (P.length > 0)
          for (let A = 0, V = P.length, B, F, k, M; A < V; A++) {
            for (B = P[A], k = B.childNodes, M = B.parentNode; k[0]; )
              F = k[0], M.insertBefore(F, B);
            B === s && (s = F), n.removeItem(B);
          }
        if ((n.isFormatElement(s) || n.isComponent(s)) && H === D) {
          const A = n.getFormatElement(z, null);
          A && A.nodeType === 1 && n.isEmptyLine(A) && n.removeItem(A);
        }
        if (I && (n.isFormatElement(s) || n.isRangeFormatElement(s)) && (s = this._setIntoFreeFormat(s)), !n.isComponent(s)) {
          let A = 1;
          if (s.nodeType === 3)
            A = s.textContent.length, this.setRange(s, A, s, A);
          else if (!n.isBreak(s) && !n.isListCell(s) && n.isFormatElement(y)) {
            let V = null;
            (!s.previousSibling || n.isBreak(s.previousSibling)) && (V = n.createTextNode(n.zeroWidthSpace), s.parentNode.insertBefore(V, s)), (!s.nextSibling || n.isBreak(s.nextSibling)) && (V = n.createTextNode(n.zeroWidthSpace), s.parentNode.insertBefore(V, s.nextSibling)), n._isIgnoreNodeChange(s) && (s = s.nextSibling, A = 0);
          }
          this.setRange(s, A, s, A);
        }
        return s;
      }
    },
    _setIntoFreeFormat: function(s) {
      const r = s.parentNode;
      let d, p;
      for (; n.isFormatElement(s) || n.isRangeFormatElement(s); ) {
        for (d = s.childNodes, p = null; d[0]; ) {
          if (p = d[0], n.isFormatElement(p) || n.isRangeFormatElement(p)) {
            if (this._setIntoFreeFormat(p), !s.parentNode) break;
            d = s.childNodes;
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
        const A = n.getParentElement(s.startContainer, n.isMediaComponent);
        if (A) {
          const V = n.createElement("BR"), B = n.createElement(l.defaultTag);
          return B.appendChild(V), n.changeElement(A, B), u.setRange(B, 0, B, 0), this.history.push(!0), {
            container: B,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const r = s.startOffset === 0, d = u.isEdgePoint(s.endContainer, s.endOffset, "end");
      let p = null, m = null, g = null;
      r && (m = n.getFormatElement(s.startContainer), m && (p = m.previousElementSibling, m = p)), d && (g = n.getFormatElement(s.endContainer), g = g && g.nextElementSibling);
      let h, y = 0, C = s.startContainer, _ = s.endContainer, x = s.startOffset, I = s.endOffset;
      const L = s.commonAncestorContainer.nodeType === 3 && s.commonAncestorContainer.parentNode === C.parentNode ? C.parentNode : s.commonAncestorContainer;
      if (L === C && L === _ && (C = L.children[x], _ = L.children[I], x = I = 0), !C || !_) return {
        container: L,
        offset: 0
      };
      if (C === _ && s.collapsed && C.textContent && n.onlyZeroWidthSpace(C.textContent.substr(x)))
        return {
          container: C,
          offset: x,
          prevContainer: C && C.parentNode ? C : null
        };
      let z = null, N = null;
      const Z = n.getListChildNodes(L, null);
      let W = n.getArrayIndex(Z, C), H = n.getArrayIndex(Z, _);
      if (Z.length > 0 && W > -1 && H > -1) {
        for (let A = W + 1, V = C; A >= 0; A--)
          Z[A] === V.parentNode && Z[A].firstChild === V && x === 0 && (W = A, V = V.parentNode);
        for (let A = H - 1, V = _; A > W; A--)
          Z[A] === V.parentNode && Z[A].nodeType === 1 && (Z.splice(A, 1), V = V.parentNode, --H);
      } else {
        if (Z.length === 0) {
          if (n.isFormatElement(L) || n.isRangeFormatElement(L) || n.isWysiwygDiv(L) || n.isBreak(L) || n.isMedia(L))
            return {
              container: L,
              offset: 0
            };
          if (L.nodeType === 3)
            return {
              container: L,
              offset: I
            };
          Z.push(L), C = _ = L;
        } else if (C = _ = Z[0], n.isBreak(C) || n.onlyZeroWidthSpace(C))
          return {
            container: n.isMedia(L) ? L : C,
            offset: 0
          };
        W = H = 0;
      }
      for (let A = W; A <= H; A++) {
        const V = Z[A];
        if (V.length === 0 || V.nodeType === 3 && V.data === void 0) {
          this._nodeRemoveListItem(V);
          continue;
        }
        if (V === C) {
          if (C.nodeType === 1) {
            if (n.isComponent(C)) continue;
            z = n.createTextNode(C.textContent);
          } else
            V === _ ? (z = n.createTextNode(C.substringData(0, x) + _.substringData(I, _.length - I)), y = x) : z = n.createTextNode(C.substringData(0, x));
          if (z.length > 0 ? C.data = z.data : this._nodeRemoveListItem(C), V === _) break;
          continue;
        }
        if (V === _) {
          if (_.nodeType === 1) {
            if (n.isComponent(_)) continue;
            N = n.createTextNode(_.textContent);
          } else
            N = n.createTextNode(_.substringData(I, _.length - I));
          N.length > 0 ? _.data = N.data : this._nodeRemoveListItem(_);
          continue;
        }
        this._nodeRemoveListItem(V);
      }
      const D = n.getParentElement(_, "ul"), P = n.getParentElement(C, "li");
      if (D && P && P.contains(D) ? (h = D.previousSibling, y = h.textContent.length) : (h = _ && _.parentNode ? _ : C && C.parentNode ? C : s.endContainer || s.startContainer, y = !r && !d ? y : d ? h.textContent.length : 0), !n.isWysiwygDiv(h) && h.childNodes.length === 0) {
        const A = n.removeItemAllParents(h, null, null);
        A && (h = A.sc || A.ec || e.element.wysiwyg);
      }
      return !n.getFormatElement(h) && !(C && C.parentNode) && (g ? (h = g, y = 0) : m && (h = m, y = 1)), this.setRange(h, y, h, y), this.history.push(!0), {
        container: h,
        offset: y,
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
        for (let I = 0, L = r.length, z, N, Z, W, H, D; I < L; I++)
          if (z = r[I], !!n.isListCell(z) && (N = z.lastElementChild, N && n.isListCell(z.nextElementSibling) && r.indexOf(z.nextElementSibling) > -1 && (W = N.lastElementChild, r.indexOf(W) > -1))) {
            let P = null;
            for (; P = W.lastElementChild; )
              if (n.isList(P))
                if (r.indexOf(P.lastElementChild) > -1)
                  W = P.lastElementChild;
                else
                  continue e;
            Z = N.firstElementChild, H = r.indexOf(Z), D = r.indexOf(W), r.splice(H, D - H + 1), L = r.length;
            continue;
          }
      let d = r[r.length - 1], p, m, g;
      n.isRangeFormatElement(d) || n.isFormatElement(d) ? p = d : p = n.getRangeFormatElement(d, null) || n.getFormatElement(d, null), n.isCell(p) ? (m = null, g = p) : (m = p.nextSibling, g = p.parentNode);
      let h = n.getElementDepth(p), y = null;
      const C = [], _ = function(I, L, z) {
        let N = null;
        if (I !== L && !n.isTable(L)) {
          if (L && n.getElementDepth(I) === n.getElementDepth(L)) return z;
          N = n.removeItemAllParents(L, null, I);
        }
        return N ? N.ec : z;
      };
      for (let I = 0, L = r.length, z, N, Z, W, H, D, P; I < L; I++)
        if (z = r[I], N = z.parentNode, !(!N || s.contains(N)))
          if (Z = n.getElementDepth(z), n.isList(N)) {
            if (y === null && (D ? (y = D, P = !0, D = null) : y = N.cloneNode(!1)), C.push(z), H = r[I + 1], I === L - 1 || H && H.parentNode !== N) {
              H && z.contains(H.parentNode) && (D = H.parentNode.cloneNode(!1));
              let A = N.parentNode, V;
              for (; n.isList(A); )
                V = n.createElement(A.nodeName), V.appendChild(y), y = V, A = A.parentNode;
              const B = this.detachRangeFormatElement(N, C, null, !0, !0);
              h >= Z ? (h = Z, g = B.cc, m = _(g, N, B.ec), m && (g = m.parentNode)) : g === B.cc && (m = B.ec), g !== B.cc && (W = _(g, B.cc, W), W !== void 0 ? m = W : m = B.cc);
              for (let F = 0, k = B.removeArray.length; F < k; F++)
                y.appendChild(B.removeArray[F]);
              P || s.appendChild(y), D && B.removeArray[B.removeArray.length - 1].appendChild(D), y = null, P = !1;
            }
          } else
            h >= Z && (h = Z, g = N, m = z.nextSibling), s.appendChild(z), g !== N && (W = _(g, N), W !== void 0 && (m = W));
      if (this.effectNode = null, n.mergeSameTags(s, null, !1), n.mergeNestedTags(s, (function(I) {
        return this.isList(I);
      }).bind(n)), m && n.getElementDepth(m) > 0 && (n.isList(m.parentNode) || n.isList(m.parentNode.parentNode))) {
        const I = n.getParentElement(m, (function(z) {
          return this.isRangeFormatElement(z) && !this.isList(z);
        }).bind(n)), L = n.splitElement(m, null, I ? n.getElementDepth(I) + 1 : 0);
        L.parentNode.insertBefore(s, L);
      } else
        g.insertBefore(s, m), _(s, m);
      const x = n.getEdgeChildNodes(s.firstElementChild, s.lastElementChild);
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
    detachRangeFormatElement: function(s, r, d, p, m) {
      const g = this.getRange();
      let h = g.startOffset, y = g.endOffset, C = n.getListChildNodes(s, function(B) {
        return B.parentNode === s;
      }), _ = s.parentNode, x = null, I = null, L = s.cloneNode(!1);
      const z = [], N = n.isList(d);
      let Z = !1, W = !1, H = !1;
      function D(B, F, k, M) {
        if (n.onlyZeroWidthSpace(F) && (F.innerHTML = n.zeroWidthSpace, h = y = 1), F.nodeType === 3)
          return B.insertBefore(F, k), F;
        const j = (H ? F : M).childNodes;
        let $ = F.cloneNode(!1), te = null, K = null;
        for (; j[0]; )
          K = j[0], n._notTextNode(K) && !n.isBreak(K) && !n.isListCell($) ? ($.childNodes.length > 0 && (te || (te = $), B.insertBefore($, k), $ = F.cloneNode(!1)), B.insertBefore(K, k), te || (te = K)) : $.appendChild(K);
        if ($.childNodes.length > 0) {
          if (n.isListCell(B) && n.isListCell($) && n.isList(k))
            if (N) {
              for (te = k; k; )
                $.appendChild(k), k = k.nextSibling;
              B.parentNode.insertBefore($, B.nextElementSibling);
            } else {
              const Y = M.nextElementSibling, ie = n.detachNestedList(M, !1);
              if (s !== ie || Y !== M.nextElementSibling) {
                const ce = $.childNodes;
                for (; ce[0]; )
                  M.appendChild(ce[0]);
                s = ie, W = !0;
              }
            }
          else
            B.insertBefore($, k);
          te || (te = $);
        }
        return te;
      }
      for (let B = 0, F = C.length, k, M, j; B < F; B++)
        if (k = C[B], !(k.nodeType === 3 && n.isList(L)))
          if (H = !1, p && B === 0 && (!r || r.length === F || r[0] === k ? x = s.previousSibling : x = L), r && (M = r.indexOf(k)), r && M === -1)
            L || (L = s.cloneNode(!1)), L.appendChild(k);
          else {
            if (r && (j = r[M + 1]), L && L.children.length > 0 && (_.insertBefore(L, s), L = null), !N && n.isListCell(k))
              if (j && n.getElementDepth(k) !== n.getElementDepth(j) && (n.isListCell(_) || n.getArrayItem(k.children, n.isList, !1))) {
                const $ = k.nextElementSibling, te = n.detachNestedList(k, !1);
                (s !== te || $ !== k.nextElementSibling) && (s = te, W = !0);
              } else {
                const $ = k;
                k = n.createElement(p ? $.nodeName : n.isList(s.parentNode) || n.isListCell(s.parentNode) ? "LI" : n.isCell(s.parentNode) ? "DIV" : l.defaultTag);
                const te = n.isListCell(k), K = $.childNodes;
                for (; K[0] && !(n.isList(K[0]) && !te); )
                  k.appendChild(K[0]);
                n.copyFormatAttributes(k, $), H = !0;
              }
            else
              k = k.cloneNode(!1);
            if (!W && (p ? (z.push(k), n.removeItem(C[B])) : (d ? (Z || (_.insertBefore(d, s), Z = !0), k = D(d, k, null, C[B])) : k = D(_, k, s, C[B]), W || (r ? (I = k, x || (x = k)) : x || (x = I = k))), W)) {
              W = H = !1, C = n.getListChildNodes(s, function($) {
                return $.parentNode === s;
              }), L = s.cloneNode(!1), _ = s.parentNode, B = -1, F = C.length;
              continue;
            }
          }
      const P = s.parentNode;
      let A = s.nextSibling;
      L && L.children.length > 0 && P.insertBefore(L, A), d ? x = d.previousSibling : x || (x = s.previousSibling), A = s.nextSibling !== L ? s.nextSibling : L ? L.nextSibling : null, s.children.length === 0 || s.textContent.length === 0 ? n.removeItem(s) : n.removeEmptyNode(s, null, !1);
      let V = null;
      if (p)
        V = {
          cc: P,
          sc: x,
          so: h,
          ec: A,
          eo: y,
          removeArray: z
        };
      else {
        x || (x = I), I || (I = x);
        const B = n.getEdgeChildNodes(x, I.parentNode ? x : I);
        V = {
          cc: (B.sc || B.ec).parentNode,
          sc: B.sc,
          so: h,
          ec: B.ec,
          eo: y,
          removeArray: null
        };
      }
      if (this.effectNode = null, m) return V;
      !p && V && (r ? this.setRange(V.sc, h, V.ec, y) : this.setRange(V.sc, 0, V.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(s, r) {
      let d = {}, p = !1, m = !1, g = null, h = null;
      const y = (function(C) {
        return !this.isComponent(C);
      }).bind(n);
      for (let C = 0, _ = s.length, x, I, L, z; C < _; C++) {
        if (L = C === _ - 1, I = n.getRangeFormatElement(s[C], y), z = n.isList(I), !x && z)
          x = I, d = { r: x, f: [n.getParentElement(s[C], "LI")] }, C === 0 && (p = !0);
        else if (x && z)
          if (x !== I) {
            const N = this.detachRangeFormatElement(d.f[0].parentNode, d.f, null, r, !0);
            I = s[C].parentNode, p && (g = N.sc, p = !1), L && (h = N.ec), z ? (x = I, d = { r: x, f: [n.getParentElement(s[C], "LI")] }, L && (m = !0)) : x = null;
          } else
            d.f.push(n.getParentElement(s[C], "LI")), L && (m = !0);
        if (L && n.isList(x)) {
          const N = this.detachRangeFormatElement(d.f[0].parentNode, d.f, null, r, !0);
          (m || _ === 1) && (h = N.ec), p && (g = N.sc || h);
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
    nodeChange: function(s, r, d, p) {
      this._resetRangeToTextNode();
      let m = this.getRange_addLine(this.getRange(), null);
      r = r && r.length > 0 ? r : !1, d = d && d.length > 0 ? d : !1;
      const g = !s, h = g && !d && !r;
      let y = m.startContainer, C = m.startOffset, _ = m.endContainer, x = m.endOffset;
      if (h && m.collapsed && n.isFormatElement(y.parentNode) || y === _ && y.nodeType === 1 && n.isNonEditable(y)) {
        const K = y.parentNode;
        if (!n.isListCell(K) || !n.getValues(K.style).some((function(Y) {
          return this._listKebab.indexOf(Y) > -1;
        }).bind(this))) return;
      }
      if (m.collapsed && !h && y.nodeType === 1 && !n.isBreak(y) && !n.isComponent(y)) {
        let K = null;
        const Y = y.childNodes[C];
        Y && (Y.nextSibling ? K = n.isBreak(Y) ? Y : Y.nextSibling : K = null);
        const ie = n.createTextNode(n.zeroWidthSpace);
        y.insertBefore(ie, K), this.setRange(ie, 1, ie, 1), m = this.getRange(), y = m.startContainer, C = m.startOffset, _ = m.endContainer, x = m.endOffset;
      }
      n.isFormatElement(y) && (y = y.childNodes[C] || y.firstChild, C = 0), n.isFormatElement(_) && (_ = _.childNodes[x] || _.lastChild, x = _.textContent.length), g && (s = n.createElement("DIV"));
      const I = f.RegExp, L = s.nodeName;
      if (!h && y === _ && !d && s) {
        let K = y, Y = 0;
        const ie = [], ce = s.style;
        for (let ae = 0, ge = ce.length; ae < ge; ae++)
          ie.push(ce[ae]);
        const de = s.classList;
        for (let ae = 0, ge = de.length; ae < ge; ae++)
          ie.push("." + de[ae]);
        if (ie.length > 0) {
          for (; !n.isFormatElement(K) && !n.isWysiwygDiv(K); ) {
            for (let ae = 0; ae < ie.length; ae++)
              if (K.nodeType === 1) {
                const ge = ie[ae], Te = /^\./.test(ge) ? new I("\\s*" + ge.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, Fe = g ? !!K.style[ge] : !!K.style[ge] && !!s.style[ge] && K.style[ge] === s.style[ge], be = Te === !1 ? !1 : g ? !!K.className.match(Te) : !!K.className.match(Te) && !!s.className.match(Te);
                (Fe || be) && Y++;
              }
            K = K.parentNode;
          }
          if (Y >= ie.length) return;
        }
      }
      let z = {}, N = {}, Z, W = "", H = "", D = "";
      if (r) {
        for (let K = 0, Y = r.length, ie; K < Y; K++)
          ie = r[K], /^\./.test(ie) ? H += (H ? "|" : "\\s*(?:") + ie.replace(/^\./, "") : W += (W ? "|" : "(?:;|^|\\s)(?:") + ie;
        W && (W += ")\\s*:[^;]*\\s*(?:;|$)", W = new I(W, "ig")), H && (H += ")(?=\\s+|$)", H = new I(H, "ig"));
      }
      if (d) {
        D = "^(?:" + d[0];
        for (let K = 1; K < d.length; K++)
          D += "|" + d[K];
        D += ")$", D = new I(D, "i");
      }
      const P = f.Boolean, A = { v: !1 }, V = function(K) {
        const Y = K.cloneNode(!1);
        if (Y.nodeType === 3 || n.isBreak(Y)) return Y;
        if (h) return null;
        const ie = !D && g || D && D.test(Y.nodeName);
        if (ie && !p)
          return A.v = !0, null;
        const ce = Y.style.cssText;
        let de = "";
        W && ce.length > 0 && (de = ce.replace(W, "").trim(), de !== ce && (A.v = !0));
        const ae = Y.className;
        let ge = "";
        return H && ae.length > 0 && (ge = ae.replace(H, "").trim(), ge !== ae && (A.v = !0)), g && (H || !ae) && (W || !ce) && !de && !ge && ie ? (A.v = !0, null) : de || ge || Y.nodeName !== L || P(W) !== P(ce) || P(H) !== P(ae) ? (W && ce.length > 0 && (Y.style.cssText = de), Y.style.cssText || Y.removeAttribute("style"), H && ae.length > 0 && (Y.className = ge.trim()), Y.className.trim() || Y.removeAttribute("class"), !Y.style.cssText && !Y.className && (Y.nodeName === L || ie) ? (A.v = !0, null) : Y) : (A.v = !0, null);
      }, B = this.getSelectedElements(null);
      m = this.getRange(), y = m.startContainer, C = m.startOffset, _ = m.endContainer, x = m.endOffset, n.getFormatElement(y, null) || (y = n.getChildElement(B[0], function(K) {
        return K.nodeType === 3;
      }, !1), C = 0), n.getFormatElement(_, null) || (_ = n.getChildElement(B[B.length - 1], function(K) {
        return K.nodeType === 3;
      }, !1), x = _.textContent.length);
      const F = n.getFormatElement(y, null) === n.getFormatElement(_, null), k = B.length - (F ? 0 : 1);
      Z = s.cloneNode(!1);
      const M = h || g && function(K) {
        for (let Y = 0, ie = K.length; Y < ie; Y++)
          if (n._isMaintainedNode(K[Y]) || n._isSizeNode(K[Y])) return !0;
        return !1;
      }(d), j = g || n._isSizeNode(Z), $ = this._util_getMaintainedNode.bind(n, M, j), te = this._util_isMaintainedNode.bind(n, M, j);
      if (F) {
        this._resetCommonListCell(B[0], r) && (m = this.setRange(y, C, _, x));
        const K = this._nodeChange_oneLine(B[0], Z, V, y, C, _, x, h, g, m.collapsed, A, $, te);
        z.container = K.startContainer, z.offset = K.startOffset, N.container = K.endContainer, N.offset = K.endOffset, z.container === N.container && n.onlyZeroWidthSpace(z.container) && (z.offset = N.offset = 1), this._setCommonListStyle(K.ancestor, null);
      } else {
        let K = !1;
        k > 0 && this._resetCommonListCell(B[k], r) && (K = !0), this._resetCommonListCell(B[0], r) && (K = !0), K && this.setRange(y, C, _, x), k > 0 && (Z = s.cloneNode(!1), N = this._nodeChange_endLine(B[k], Z, V, _, x, h, g, A, $, te));
        for (let Y = k - 1, ie; Y > 0; Y--)
          this._resetCommonListCell(B[Y], r), Z = s.cloneNode(!1), ie = this._nodeChange_middleLine(B[Y], Z, V, h, g, A, N.container), ie.endContainer && ie.ancestor.contains(ie.endContainer) && (N.ancestor = null, N.container = ie.endContainer), this._setCommonListStyle(ie.ancestor, null);
        Z = s.cloneNode(!1), z = this._nodeChange_startLine(B[0], Z, V, y, C, h, g, A, $, te, N.container), z.endContainer && (N.ancestor = null, N.container = z.endContainer), k <= 0 ? N = z : N.container || (N.ancestor = null, N.container = z.container, N.offset = z.container.textContent.length), this._setCommonListStyle(z.ancestor, null), this._setCommonListStyle(N.ancestor || n.getFormatElement(N.container), null);
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
      if (!n.isListCell(s)) return;
      r || (r = this._listKebab);
      const d = n.getArrayItem(s.childNodes, function(I) {
        return !n.isBreak(I);
      }, !0), p = s.style, m = [], g = [], h = n.getValues(p);
      for (let I = 0, L = this._listKebab.length; I < L; I++)
        h.indexOf(this._listKebab[I]) > -1 && r.indexOf(this._listKebab[I]) > -1 && (m.push(this._listCamel[I]), g.push(this._listKebab[I]));
      if (!m.length) return;
      const y = n.createElement("SPAN");
      for (let I = 0, L = m.length; I < L; I++)
        y.style[m[I]] = p[g[I]], p.removeProperty(g[I]);
      let C = y.cloneNode(!1), _ = null, x = !1;
      for (let I = 0, L = d.length, z, N; I < L; I++)
        z = d[I], !l._textTagsMap[z.nodeName.toLowerCase()] && (N = n.getValues(z.style), N.length === 0 || m.some(function(Z) {
          return N.indexOf(Z) === -1;
        }) && N.some(function(Z) {
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
      if (!n.isListCell(s)) return;
      const d = n.getArrayItem((r || s).childNodes, function(C) {
        return !n.isBreak(C);
      }, !0);
      if (r = d[0], !r || d.length > 1 || r.nodeType !== 1) return;
      const p = r.style, m = s.style, g = r.nodeName.toLowerCase();
      let h = !1;
      l._textTagsMap[g] === l._defaultCommand.bold.toLowerCase() && (m.fontWeight = "bold"), l._textTagsMap[g] === l._defaultCommand.italic.toLowerCase() && (m.fontStyle = "italic");
      const y = n.getValues(p);
      if (y.length > 0)
        for (let C = 0, _ = this._listCamel.length; C < _; C++)
          y.indexOf(this._listKebab[C]) > -1 && (m[this._listCamel[C]] = p[this._listCamel[C]], p.removeProperty(this._listKebab[C]), h = !0);
      if (this._setCommonListStyle(s, r), !!h && !p.length) {
        const C = r.childNodes, _ = r.parentNode, x = r.nextSibling;
        for (; C.length > 0; )
          _.insertBefore(C[0], x);
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
      const p = this._isMaintainedNode(d);
      return this.getParentElement(d, this._isMaintainedNode.bind(this)) ? p : p || (r ? !1 : this._isSizeNode(d));
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
    _nodeChange_oneLine: function(s, r, d, p, m, g, h, y, C, _, x, I, L) {
      let z = p.parentNode;
      for (; !z.nextSibling && !z.previousSibling && !n.isFormatElement(z.parentNode) && !n.isWysiwygDiv(z.parentNode) && z.nodeName !== r.nodeName; )
        z = z.parentNode;
      if (!C && z === g.parentNode && z.nodeName === r.nodeName && n.onlyZeroWidthSpace(p.textContent.slice(0, m)) && n.onlyZeroWidthSpace(g.textContent.slice(h))) {
        const be = z.childNodes;
        let ze = !0;
        for (let ke = 0, tt = be.length, Ie, Oe, Ae, ve; ke < tt; ke++) {
          if (Ie = be[ke], ve = !n.onlyZeroWidthSpace(Ie), Ie === p) {
            Oe = !0;
            continue;
          }
          if (Ie === g) {
            Ae = !0;
            continue;
          }
          if (!Oe && ve || Oe && Ae && ve) {
            ze = !1;
            break;
          }
        }
        if (ze)
          return n.copyTagAttributes(z, r), {
            ancestor: s,
            startContainer: p,
            startOffset: m,
            endContainer: g,
            endOffset: h
          };
      }
      x.v = !1;
      const N = s, Z = [r], W = s.cloneNode(!1), H = p === g;
      let D = p, P = m, A = g, V = h, B = !1, F = !1, k, M, j, $, te;
      const K = f.RegExp;
      function Y(be) {
        const ze = new K("(?:;|^|\\s)(?:" + $ + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let ke = "";
        return ze && be.style.cssText.length > 0 && (ke = ze.test(be.style.cssText)), !ke;
      }
      if (function be(ze, ke) {
        const tt = ze.childNodes;
        for (let Ie = 0, Oe = tt.length, Ae; Ie < Oe; Ie++) {
          let ve = tt[Ie];
          if (!ve) continue;
          let wt = ke, it;
          if (!B && ve === D) {
            let De = W;
            te = I(ve);
            const Se = n.createTextNode(D.nodeType === 1 ? "" : D.substringData(0, P)), Ve = n.createTextNode(
              D.nodeType === 1 ? "" : D.substringData(
                P,
                H && V >= P ? V - P : D.data.length - P
              )
            );
            if (te) {
              const xt = I(ke);
              if (xt && xt.parentNode !== De) {
                let Ze = xt, St = null;
                for (; Ze.parentNode !== De; ) {
                  for (ke = St = Ze.parentNode.cloneNode(!1); Ze.childNodes[0]; )
                    St.appendChild(Ze.childNodes[0]);
                  Ze.appendChild(St), Ze = Ze.parentNode;
                }
                Ze.parentNode.appendChild(xt);
              }
              te = te.cloneNode(!1);
            }
            n.onlyZeroWidthSpace(Se) || ke.appendChild(Se);
            const Me = I(ke);
            for (Me && (te = Me), te && (De = te), M = ve, k = [], $ = ""; M !== De && M !== N && M !== null; )
              Ae = L(M) ? null : d(M), Ae && M.nodeType === 1 && Y(M) && (k.push(Ae), $ += M.style.cssText.substr(0, M.style.cssText.indexOf(":")) + "|"), M = M.parentNode;
            const kt = k.pop() || Ve;
            for (j = M = kt; k.length > 0; )
              M = k.pop(), j.appendChild(M), j = M;
            if (r.appendChild(kt), De.appendChild(r), te && !I(A) && (r = r.cloneNode(!1), W.appendChild(r), Z.push(r)), D = Ve, P = 0, B = !0, M !== Ve && M.appendChild(D), !H) continue;
          }
          if (!F && ve === A) {
            te = I(ve);
            const De = n.createTextNode(A.nodeType === 1 ? "" : A.substringData(V, A.length - V)), Se = n.createTextNode(H || A.nodeType === 1 ? "" : A.substringData(0, V));
            if (te ? te = te.cloneNode(!1) : L(r.parentNode) && !te && (r = r.cloneNode(!1), W.appendChild(r), Z.push(r)), !n.onlyZeroWidthSpace(De)) {
              M = ve, $ = "", k = [];
              const Me = [];
              for (; M !== W && M !== N && M !== null; )
                M.nodeType === 1 && Y(M) && (L(M) ? Me.push(M.cloneNode(!1)) : k.push(M.cloneNode(!1)), $ += M.style.cssText.substr(0, M.style.cssText.indexOf(":")) + "|"), M = M.parentNode;
              for (k = k.concat(Me), it = j = M = k.pop() || De; k.length > 0; )
                M = k.pop(), j.appendChild(M), j = M;
              W.appendChild(it), M.textContent = De.data;
            }
            if (te && it) {
              const Me = I(it);
              Me && (te = Me);
            }
            for (M = ve, k = [], $ = ""; M !== W && M !== N && M !== null; )
              Ae = L(M) ? null : d(M), Ae && M.nodeType === 1 && Y(M) && (k.push(Ae), $ += M.style.cssText.substr(0, M.style.cssText.indexOf(":")) + "|"), M = M.parentNode;
            const Ve = k.pop() || Se;
            for (j = M = Ve; k.length > 0; )
              M = k.pop(), j.appendChild(M), j = M;
            te ? (r = r.cloneNode(!1), r.appendChild(Ve), te.insertBefore(r, te.firstChild), W.appendChild(te), Z.push(r), te = null) : r.appendChild(Ve), A = Se, V = Se.data.length, F = !0, !y && _ && (r = Se, Se.textContent = n.zeroWidthSpace), M !== Se && M.appendChild(A);
            continue;
          }
          if (B) {
            if (ve.nodeType === 1 && !n.isBreak(ve)) {
              n._isIgnoreNodeChange(ve) ? (W.appendChild(ve.cloneNode(!0)), _ || (r = r.cloneNode(!1), W.appendChild(r), Z.push(r))) : be(ve, ve);
              continue;
            }
            M = ve, k = [], $ = "";
            const De = [];
            for (; M.parentNode !== null && M !== N && M !== r; )
              Ae = F ? M.cloneNode(!1) : d(M), M.nodeType === 1 && !n.isBreak(ve) && Ae && Y(M) && (L(M) ? te || De.push(Ae) : k.push(Ae), $ += M.style.cssText.substr(0, M.style.cssText.indexOf(":")) + "|"), M = M.parentNode;
            k = k.concat(De);
            const Se = k.pop() || ve;
            for (j = M = Se; k.length > 0; )
              M = k.pop(), j.appendChild(M), j = M;
            if (L(r.parentNode) && !L(Se) && !n.onlyZeroWidthSpace(r) && (r = r.cloneNode(!1), W.appendChild(r), Z.push(r)), !F && !te && L(Se)) {
              r = r.cloneNode(!1);
              const Ve = Se.childNodes;
              for (let Me = 0, kt = Ve.length; Me < kt; Me++)
                r.appendChild(Ve[Me]);
              Se.appendChild(r), W.appendChild(Se), Z.push(r), r.children.length > 0 ? ke = M : ke = r;
            } else Se === ve ? F ? ke = W : ke = r : F ? (W.appendChild(Se), ke = M) : (r.appendChild(Se), ke = M);
            if (te && ve.nodeType === 3)
              if (I(ve)) {
                const Ve = n.getParentElement(ke, (function(Me) {
                  return this._isMaintainedNode(Me.parentNode) || Me.parentNode === W;
                }).bind(n));
                te.appendChild(Ve), r = Ve.cloneNode(!1), Z.push(r), W.appendChild(r);
              } else
                te = null;
          }
          it = ve.cloneNode(!1), ke.appendChild(it), ve.nodeType === 1 && !n.isBreak(ve) && (wt = it), be(ve, wt);
        }
      }(s, W), C && !y && !x.v)
        return {
          ancestor: s,
          startContainer: p,
          startOffset: m,
          endContainer: g,
          endOffset: h
        };
      if (y = y && C, y)
        for (let be = 0; be < Z.length; be++) {
          let ze = Z[be], ke, tt, Ie;
          if (_)
            ke = n.createTextNode(n.zeroWidthSpace), W.replaceChild(ke, ze);
          else {
            const Oe = ze.childNodes;
            for (tt = Oe[0]; Oe[0]; )
              Ie = Oe[0], W.insertBefore(Ie, ze);
            n.removeItem(ze);
          }
          be === 0 && (_ ? D = A = ke : (D = tt, A = Ie));
        }
      else {
        if (C)
          for (let be = 0; be < Z.length; be++)
            this._stripRemoveNode(Z[be]);
        _ && (D = A = r);
      }
      n.removeEmptyNode(W, r, !1), _ && (P = D.textContent.length, V = A.textContent.length);
      const ie = y || A.textContent.length === 0;
      !n.isBreak(A) && A.textContent.length === 0 && (n.removeItem(A), A = D), V = ie ? A.textContent.length : V;
      const ce = { s: 0, e: 0 }, de = n.getNodePath(D, W, ce), ae = !A.parentNode;
      ae && (A = D);
      const ge = { s: 0, e: 0 }, Te = n.getNodePath(A, W, !ae && !ie ? ge : null);
      P += ce.s, V = _ ? P : ae ? D.textContent.length : ie ? V + ce.s : V + ge.s;
      const Fe = n.mergeSameTags(W, [de, Te], !0);
      return s.parentNode.replaceChild(W, s), D = n.getNodeFromPath(de, W), A = n.getNodeFromPath(Te, W), {
        ancestor: W,
        startContainer: D,
        startOffset: P + Fe[0],
        endContainer: A,
        endOffset: V + Fe[1]
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
    _nodeChange_startLine: function(s, r, d, p, m, g, h, y, C, _, x) {
      let I = p.parentNode;
      for (; !I.nextSibling && !I.previousSibling && !n.isFormatElement(I.parentNode) && !n.isWysiwygDiv(I.parentNode) && I.nodeName !== r.nodeName; )
        I = I.parentNode;
      if (!h && I.nodeName === r.nodeName && !n.isFormatElement(I) && !I.nextSibling && n.onlyZeroWidthSpace(p.textContent.slice(0, m))) {
        let B = !0, F = p.previousSibling;
        for (; F; ) {
          if (!n.onlyZeroWidthSpace(F)) {
            B = !1;
            break;
          }
          F = F.previousSibling;
        }
        if (B)
          return n.copyTagAttributes(I, r), {
            ancestor: s,
            container: p,
            offset: m
          };
      }
      y.v = !1;
      const L = s, z = [r], N = s.cloneNode(!1);
      let Z = p, W = m, H = !1, D, P, A, V;
      if (function B(F, k) {
        const M = F.childNodes;
        for (let j = 0, $ = M.length, te, K; j < $; j++) {
          const Y = M[j];
          if (!Y) continue;
          let ie = k;
          if (H && !n.isBreak(Y)) {
            if (Y.nodeType === 1) {
              if (n._isIgnoreNodeChange(Y)) {
                if (r = r.cloneNode(!1), K = Y.cloneNode(!0), N.appendChild(K), N.appendChild(r), z.push(r), x && Y.contains(x)) {
                  const ge = n.getNodePath(x, Y);
                  x = n.getNodeFromPath(ge, K);
                }
              } else
                B(Y, Y);
              continue;
            }
            P = Y, D = [];
            const ce = [];
            for (; P.parentNode !== null && P !== L && P !== r; )
              te = d(P), P.nodeType === 1 && te && (_(P) ? V || ce.push(te) : D.push(te)), P = P.parentNode;
            D = D.concat(ce);
            const de = D.length > 0, ae = D.pop() || Y;
            for (A = P = ae; D.length > 0; )
              P = D.pop(), A.appendChild(P), A = P;
            if (_(r.parentNode) && !_(ae) && (r = r.cloneNode(!1), N.appendChild(r), z.push(r)), !V && _(ae)) {
              r = r.cloneNode(!1);
              const ge = ae.childNodes;
              for (let Te = 0, Fe = ge.length; Te < Fe; Te++)
                r.appendChild(ge[Te]);
              ae.appendChild(r), N.appendChild(ae), k = _(P) ? r : P, z.push(r);
            } else de ? (r.appendChild(ae), k = P) : k = r;
            if (V && Y.nodeType === 3)
              if (C(Y)) {
                const ge = n.getParentElement(k, (function(Te) {
                  return this._isMaintainedNode(Te.parentNode) || Te.parentNode === N;
                }).bind(n));
                V.appendChild(ge), r = ge.cloneNode(!1), z.push(r), N.appendChild(r);
              } else
                V = null;
          }
          if (!H && Y === Z) {
            let ce = N;
            V = C(Y);
            const de = n.createTextNode(Z.nodeType === 1 ? "" : Z.substringData(0, W)), ae = n.createTextNode(Z.nodeType === 1 ? "" : Z.substringData(W, Z.length - W));
            if (V) {
              const Fe = C(k);
              if (Fe && Fe.parentNode !== ce) {
                let be = Fe, ze = null;
                for (; be.parentNode !== ce; ) {
                  for (k = ze = be.parentNode.cloneNode(!1); be.childNodes[0]; )
                    ze.appendChild(be.childNodes[0]);
                  be.appendChild(ze), be = be.parentNode;
                }
                be.parentNode.appendChild(Fe);
              }
              V = V.cloneNode(!1);
            }
            n.onlyZeroWidthSpace(de) || k.appendChild(de);
            const ge = C(k);
            for (ge && (V = ge), V && (ce = V), P = k, D = []; P !== ce && P !== null; )
              te = d(P), P.nodeType === 1 && te && D.push(te), P = P.parentNode;
            const Te = D.pop() || k;
            for (A = P = Te; D.length > 0; )
              P = D.pop(), A.appendChild(P), A = P;
            Te !== k ? (r.appendChild(Te), k = P) : k = r, n.isBreak(Y) && r.appendChild(Y.cloneNode(!1)), ce.appendChild(r), Z = ae, W = 0, H = !0, k.appendChild(Z);
            continue;
          }
          te = H ? d(Y) : Y.cloneNode(!1), te && (k.appendChild(te), Y.nodeType === 1 && !n.isBreak(Y) && (ie = te)), B(Y, ie);
        }
      }(s, N), h && !g && !y.v)
        return {
          ancestor: s,
          container: p,
          offset: m,
          endContainer: x
        };
      if (g = g && h, g)
        for (let B = 0; B < z.length; B++) {
          let F = z[B];
          const k = F.childNodes, M = k[0];
          for (; k[0]; )
            N.insertBefore(k[0], F);
          n.removeItem(F), B === 0 && (Z = M);
        }
      else if (h) {
        r = r.firstChild;
        for (let B = 0; B < z.length; B++)
          this._stripRemoveNode(z[B]);
      }
      if (!g && N.childNodes.length === 0)
        s.childNodes ? Z = s.childNodes[0] : (Z = n.createTextNode(n.zeroWidthSpace), s.appendChild(Z));
      else {
        n.removeEmptyNode(N, r, !1), n.onlyZeroWidthSpace(N.textContent) && (Z = N.firstChild, W = 0);
        const B = { s: 0, e: 0 }, F = n.getNodePath(Z, N, B);
        W += B.s;
        const k = n.mergeSameTags(N, [F], !0);
        s.parentNode.replaceChild(N, s), Z = n.getNodeFromPath(F, N), W += k[0];
      }
      return {
        ancestor: N,
        container: Z,
        offset: W,
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
    _nodeChange_middleLine: function(s, r, d, p, m, g, h) {
      if (!m) {
        let x = null;
        h && s.contains(h) && (x = n.getNodePath(h, s));
        const I = s.cloneNode(!0), L = r.nodeName, z = r.style.cssText, N = r.className;
        let Z = I.childNodes, W = 0, H = Z.length;
        for (let D; W < H && (D = Z[W], D.nodeType !== 3); W++)
          if (D.nodeName === L)
            D.style.cssText += z, n.addClass(D, N);
          else {
            if (!n.isBreak(D) && n._isIgnoreNodeChange(D))
              continue;
            if (H === 1) {
              Z = D.childNodes, H = Z.length, W = -1;
              continue;
            } else
              break;
          }
        if (H > 0 && W === H)
          return s.innerHTML = I.innerHTML, {
            ancestor: s,
            endContainer: x ? n.getNodeFromPath(x, s) : null
          };
      }
      g.v = !1;
      const y = s.cloneNode(!1), C = [r];
      let _ = !0;
      if (function x(I, L) {
        const z = I.childNodes;
        for (let N = 0, Z = z.length, W, H; N < Z; N++) {
          let D = z[N];
          if (!D) continue;
          let P = L;
          if (!n.isBreak(D) && n._isIgnoreNodeChange(D)) {
            if (r.childNodes.length > 0 && (y.appendChild(r), r = r.cloneNode(!1)), H = D.cloneNode(!0), y.appendChild(H), y.appendChild(r), C.push(r), L = r, h && D.contains(h)) {
              const A = n.getNodePath(h, D);
              h = n.getNodeFromPath(A, H);
            }
            continue;
          } else
            W = d(D), W && (_ = !1, L.appendChild(W), D.nodeType === 1 && (P = W));
          n.isBreak(D) || x(D, P);
        }
      }(s, r), _ || m && !p && !g.v) return { ancestor: s, endContainer: h };
      if (y.appendChild(r), p && m)
        for (let x = 0; x < C.length; x++) {
          let I = C[x];
          const L = I.childNodes;
          for (; L[0]; )
            y.insertBefore(L[0], I);
          n.removeItem(I);
        }
      else if (m) {
        r = r.firstChild;
        for (let x = 0; x < C.length; x++)
          this._stripRemoveNode(C[x]);
      }
      return n.removeEmptyNode(y, r, !1), n.mergeSameTags(y, null, !0), s.parentNode.replaceChild(y, s), { ancestor: y, endContainer: h };
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
    _nodeChange_endLine: function(s, r, d, p, m, g, h, y, C, _) {
      let x = p.parentNode;
      for (; !x.nextSibling && !x.previousSibling && !n.isFormatElement(x.parentNode) && !n.isWysiwygDiv(x.parentNode) && x.nodeName !== r.nodeName; )
        x = x.parentNode;
      if (!h && x.nodeName === r.nodeName && !n.isFormatElement(x) && !x.previousSibling && n.onlyZeroWidthSpace(p.textContent.slice(m))) {
        let V = !0, B = p.nextSibling;
        for (; B; ) {
          if (!n.onlyZeroWidthSpace(B)) {
            V = !1;
            break;
          }
          B = B.nextSibling;
        }
        if (V)
          return n.copyTagAttributes(x, r), {
            ancestor: s,
            container: p,
            offset: m
          };
      }
      y.v = !1;
      const I = s, L = [r], z = s.cloneNode(!1);
      let N = p, Z = m, W = !1, H, D, P, A;
      if (function V(B, F) {
        const k = B.childNodes;
        for (let M = k.length - 1, j; 0 <= M; M--) {
          const $ = k[M];
          if (!$) continue;
          let te = F;
          if (W && !n.isBreak($)) {
            if ($.nodeType === 1) {
              if (n._isIgnoreNodeChange($)) {
                r = r.cloneNode(!1);
                const ce = $.cloneNode(!0);
                z.insertBefore(ce, F), z.insertBefore(r, ce), L.push(r);
              } else
                V($, $);
              continue;
            }
            D = $, H = [];
            const K = [];
            for (; D.parentNode !== null && D !== I && D !== r; )
              j = d(D), j && D.nodeType === 1 && (_(D) ? A || K.push(j) : H.push(j)), D = D.parentNode;
            H = H.concat(K);
            const Y = H.length > 0, ie = H.pop() || $;
            for (P = D = ie; H.length > 0; )
              D = H.pop(), P.appendChild(D), P = D;
            if (_(r.parentNode) && !_(ie) && (r = r.cloneNode(!1), z.insertBefore(r, z.firstChild), L.push(r)), !A && _(ie)) {
              r = r.cloneNode(!1);
              const ce = ie.childNodes;
              for (let de = 0, ae = ce.length; de < ae; de++)
                r.appendChild(ce[de]);
              ie.appendChild(r), z.insertBefore(ie, z.firstChild), L.push(r), r.children.length > 0 ? F = D : F = r;
            } else Y ? (r.insertBefore(ie, r.firstChild), F = D) : F = r;
            if (A && $.nodeType === 3)
              if (C($)) {
                const ce = n.getParentElement(F, (function(de) {
                  return this._isMaintainedNode(de.parentNode) || de.parentNode === z;
                }).bind(n));
                A.appendChild(ce), r = ce.cloneNode(!1), L.push(r), z.insertBefore(r, z.firstChild);
              } else
                A = null;
          }
          if (!W && $ === N) {
            A = C($);
            const K = n.createTextNode(N.nodeType === 1 ? "" : N.substringData(Z, N.length - Z)), Y = n.createTextNode(N.nodeType === 1 ? "" : N.substringData(0, Z));
            if (A) {
              A = A.cloneNode(!1);
              const ce = C(F);
              if (ce && ce.parentNode !== z) {
                let de = ce, ae = null;
                for (; de.parentNode !== z; ) {
                  for (F = ae = de.parentNode.cloneNode(!1); de.childNodes[0]; )
                    ae.appendChild(de.childNodes[0]);
                  de.appendChild(ae), de = de.parentNode;
                }
                de.parentNode.insertBefore(ce, de.parentNode.firstChild);
              }
              A = A.cloneNode(!1);
            } else _(r.parentNode) && !A && (r = r.cloneNode(!1), z.appendChild(r), L.push(r));
            for (n.onlyZeroWidthSpace(K) || F.insertBefore(K, F.firstChild), D = F, H = []; D !== z && D !== null; )
              j = _(D) ? null : d(D), j && D.nodeType === 1 && H.push(j), D = D.parentNode;
            const ie = H.pop() || F;
            for (P = D = ie; H.length > 0; )
              D = H.pop(), P.appendChild(D), P = D;
            ie !== F ? (r.insertBefore(ie, r.firstChild), F = D) : F = r, n.isBreak($) && r.appendChild($.cloneNode(!1)), A ? (A.insertBefore(r, A.firstChild), z.insertBefore(A, z.firstChild), A = null) : z.insertBefore(r, z.firstChild), N = Y, Z = Y.data.length, W = !0, F.insertBefore(N, F.firstChild);
            continue;
          }
          j = W ? d($) : $.cloneNode(!1), j && (F.insertBefore(j, F.firstChild), $.nodeType === 1 && !n.isBreak($) && (te = j)), V($, te);
        }
      }(s, z), h && !g && !y.v)
        return {
          ancestor: s,
          container: p,
          offset: m
        };
      if (g = g && h, g)
        for (let V = 0; V < L.length; V++) {
          let B = L[V];
          const F = B.childNodes;
          let k = null;
          for (; F[0]; )
            k = F[0], z.insertBefore(k, B);
          n.removeItem(B), V === L.length - 1 && (N = k, Z = k.textContent.length);
        }
      else if (h) {
        r = r.firstChild;
        for (let V = 0; V < L.length; V++)
          this._stripRemoveNode(L[V]);
      }
      if (!g && z.childNodes.length === 0)
        s.childNodes ? N = s.childNodes[0] : (N = n.createTextNode(n.zeroWidthSpace), s.appendChild(N));
      else {
        if (!h && r.textContent.length === 0)
          return n.removeEmptyNode(z, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        n.removeEmptyNode(z, r, !1), n.onlyZeroWidthSpace(z.textContent) ? (N = z.firstChild, Z = N.textContent.length) : n.onlyZeroWidthSpace(N) && (N = r, Z = 1);
        const V = { s: 0, e: 0 }, B = n.getNodePath(N, z, V);
        Z += V.s;
        const F = n.mergeSameTags(z, [B], !0);
        s.parentNode.replaceChild(z, s), N = n.getNodeFromPath(B, z), Z += F[0];
      }
      return {
        ancestor: z,
        container: N,
        offset: N.nodeType === 1 && Z === 1 ? N.childNodes.length : Z
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
            const p = e.element.toolbar.querySelector("." + s);
            p && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = d, p.style.display = "block", v._showToolbarBalloon(), v._showToolbarInline()), n.addClass(d, "on");
          } else
            e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")) && (this.moreLayerOff(), v._showToolbarBalloon(), v._showToolbarInline());
          return;
        }
        if (/container/.test(r) && (this._menuTray[s] === null || d !== this.containerActiveButton)) {
          this.callPlugin(s, this.containerOn.bind(this, d), d);
          return;
        }
        if (this.isReadOnly && n.arrayIncludes(this.resizingDisabledButtons, d)) return;
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
            const d = e.element.wysiwyg;
            let p = n.getChildElement(d.firstChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !1) || d.firstChild, m = n.getChildElement(d.lastChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !0) || d.lastChild;
            if (!p || !m) return;
            if (n.isMedia(p)) {
              const C = this.getFileComponent(p), _ = n.createElement("BR"), x = n.createElement(l.defaultTag);
              x.appendChild(_), p = C ? C.component : p, p.parentNode.insertBefore(x, p), p = _;
            }
            if (n.isMedia(m)) {
              const C = n.createElement("BR"), _ = n.createElement(l.defaultTag);
              _.appendChild(C), d.appendChild(_), m = C;
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
            const g = this._variable.currentNodesMap, h = g.indexOf(r) > -1 ? null : n.createElement(r);
            let y = r;
            /^SUB$/i.test(r) && g.indexOf("SUP") > -1 ? y = "SUP" : /^SUP$/i.test(r) && g.indexOf("SUB") > -1 && (y = "SUB"), this.nodeChange(h, this._commandMapStyles[r] || null, [y], !1), this.focus();
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
      const r = this.getRange(), d = this.getSelectedElements(null), p = [], m = s !== "indent", g = l.rtl ? "marginRight" : "marginLeft";
      let h = r.startContainer, y = r.endContainer, C = r.startOffset, _ = r.endOffset;
      for (let x = 0, I = d.length, L, z; x < I; x++)
        L = d[x], !n.isListCell(L) || !this.plugins.list ? (z = /\d+/.test(L.style[g]) ? n.getNumber(L.style[g], 0) : 0, m ? z -= 25 : z += 25, n.setStyle(L, g, z <= 0 ? "" : z + "px")) : (m || L.previousElementSibling) && p.push(L);
      p.length > 0 && this.plugins.list.editInsideList.call(this, m, p), this.effectNode = null, this.setRange(h, C, y, _), this.history.push(!1);
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
      this.controllersOff(), n.setDisabledButtons(!s, this.codeViewDisabledButtons), s ? (n.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), l.height === "auto" && !l.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(l.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, v._hideToolbar())), this.nativeFocus(), n.removeClass(this._styleCommandMap.codeView, "active"), n.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : l.height === "auto" && !l.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), l.codeMirrorEditor && l.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, v._showToolbarInline())), this._variable._range = null, e.element.code.focus(), n.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && n.setDisabledButtons(!0, this.resizingDisabledButtons), typeof w.toggleCodeView == "function" && w.toggleCodeView(this._variable.isCodeView, this);
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
          for (let g = 0, h = m.length; g < h; g++)
            /^script$/i.test(m[g].tagName) && (r.head.removeChild(m[g]), g--, h--);
        }
        let d = r.head.innerHTML;
        (!r.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !r.head.querySelector("style")) && (d += n._setIframeCssTags(this.options)), this._wd.head.innerHTML = d, this._wd.body.innerHTML = this.convertContentsForEditor(r.body.innerHTML);
        const p = r.body.attributes;
        for (let m = 0, g = p.length; m < g; m++)
          p[m].name !== "contenteditable" && this._wd.body.setAttribute(p[m].name, p[m].value);
        if (!n.hasClass(this._wd.body, "sun-editor-editable")) {
          const m = l._editableClass.split(" ");
          for (let g = 0; g < m.length; g++)
            n.addClass(this._wd.body, l._editableClass[g]);
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
        const d = n.getAttributesToString(this._wd.body, null);
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
      const r = e.element.topArea, d = e.element.toolbar, p = e.element.editorArea, m = e.element.wysiwygFrame, g = e.element.code, h = this._variable;
      this.controllersOff();
      const y = d.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      h.isFullScreen ? (h.isFullScreen = !1, m.style.cssText = h._wysiwygOriginCssText, g.style.cssText = h._codeOriginCssText, d.style.cssText = "", p.style.cssText = h._editorAreaOriginCssText, r.style.cssText = h._originCssText, c.body.style.overflow = h._bodyOverflow, l.height === "auto" && !l.codeMirrorEditor && v._codeViewAutoHeight(), l.toolbarContainer && l.toolbarContainer.appendChild(d), l.stickyToolbar > -1 && n.removeClass(d, "se-toolbar-sticky"), h._fullScreenAttrs.sticky && !l.toolbarContainer && (h._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", n.addClass(d, "se-toolbar-sticky")), this._isInline = h._fullScreenAttrs.inline, this._isBalloon = h._fullScreenAttrs.balloon, this._isInline && v._showToolbarInline(), l.toolbarContainer && n.removeClass(d, "se-toolbar-balloon"), v.onScroll_window(), s && n.changeElement(s.firstElementChild, b.expansion), e.element.topArea.style.marginTop = "", n.removeClass(this._styleCommandMap.fullScreen, "active")) : (h.isFullScreen = !0, h._fullScreenAttrs.inline = this._isInline, h._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), l.toolbarContainer && e.element.relative.insertBefore(d, p), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.maxWidth = "100%", r.style.height = "100%", r.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (h._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", n.removeClass(d, "se-toolbar-sticky")), h._bodyOverflow = c.body.style.overflow, c.body.style.overflow = "hidden", h._editorAreaOriginCssText = p.style.cssText, h._wysiwygOriginCssText = m.style.cssText, h._codeOriginCssText = g.style.cssText, p.style.cssText = d.style.cssText = "", m.style.cssText = (m.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + l._editorStyles.editor, g.style.cssText = (g.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], d.style.width = m.style.height = g.style.height = "100%", d.style.position = "relative", d.style.display = "block", h.innerHeight_fullScreen = f.innerHeight - d.offsetHeight, p.style.height = h.innerHeight_fullScreen - l.fullScreenOffset + "px", s && n.changeElement(s.firstElementChild, b.reduction), l.iframe && l.height === "auto" && (p.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = l.fullScreenOffset + "px", n.addClass(this._styleCommandMap.fullScreen, "active")), y && w.toolbar.hide(), typeof w.toggleFullScreen == "function" && w.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const s = n.createElement("IFRAME");
      s.style.display = "none", c.body.appendChild(s);
      const r = l.printTemplate ? l.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), d = n.getIframeDocument(s), p = this._wd;
      if (l.iframe) {
        const m = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? n.getAttributesToString(p.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        d.write(
          "<!DOCTYPE html><html><head>" + p.head.innerHTML + "</head><body " + m + ">" + r + "</body></html>"
        );
      } else {
        const m = c.head.getElementsByTagName("link"), g = c.head.getElementsByTagName("style");
        let h = "";
        for (let y = 0, C = m.length; y < C; y++)
          h += m[y].outerHTML;
        for (let y = 0, C = g.length; y < C; y++)
          h += g[y].outerHTML;
        d.write(
          "<!DOCTYPE html><html><head>" + h + '</head><body class="' + (l._printClass !== null ? l._printClass : l._editableClass) + '">' + r + "</body></html>"
        );
      }
      this.showLoading(), f.setTimeout(function() {
        try {
          if (s.focus(), n.isIE_Edge || n.isChromium || c.documentMode || f.StyleMedia)
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
      const s = l.previewTemplate ? l.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), r = f.open("", "_blank");
      r.mimeType = "text/html";
      const d = this._wd;
      if (l.iframe) {
        const p = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? n.getAttributesToString(d.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        r.document.write(
          "<!DOCTYPE html><html><head>" + d.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + p + ">" + s + "</body></html>"
        );
      } else {
        const p = c.head.getElementsByTagName("link"), m = c.head.getElementsByTagName("style");
        let g = "";
        for (let h = 0, y = p.length; h < y; h++)
          g += p[h].outerHTML;
        for (let h = 0, y = m.length; h < y; h++)
          g += m[h].outerHTML;
        r.document.write(
          '<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><title>' + o.toolbar.preview + "</title>" + g + '</head><body class="' + (l._printClass !== null ? l._printClass : l._editableClass) + '" style="margin:10px auto !important; height:auto !important; outline:1px dashed #ccc;">' + s + "</body></html>"
        );
      }
    },
    /**
     * @description Set direction to "rtl" or "ltr".
     * @param {String} dir "rtl" or "ltr"
     */
    setDir: function(s) {
      const r = s === "rtl", d = this._prevRtl !== r;
      this._prevRtl = l.rtl = r, d && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && n.changeElement(e.tool.indent.firstElementChild, b.indent), e.tool.outdent && n.changeElement(e.tool.outdent.firstElementChild, b.outdent));
      const p = e.element;
      r ? (n.addClass(p.topArea, "se-rtl"), n.addClass(p.wysiwygFrame, "se-rtl")) : (n.removeClass(p.topArea, "se-rtl"), n.removeClass(p.wysiwygFrame, "se-rtl"));
      const m = n.getListChildren(p.wysiwyg, function(h) {
        return n.isFormatElement(h) && (h.style.marginRight || h.style.marginLeft || h.style.textAlign);
      });
      for (let h = 0, y = m.length, C, _, x; h < y; h++)
        C = m[h], x = C.style.marginRight, _ = C.style.marginLeft, (x || _) && (C.style.marginRight = _, C.style.marginLeft = x), x = C.style.textAlign, x === "left" ? C.style.textAlign = "right" : x === "right" && (C.style.textAlign = "left");
      const g = e.tool;
      g.dir && (n.changeTxt(g.dir.querySelector(".se-tooltip-text"), o.toolbar[l.rtl ? "dir_ltr" : "dir_rtl"]), n.changeElement(g.dir.firstElementChild, b[l.rtl ? "dir_ltr" : "dir_rtl"])), g.dir_ltr && (r ? n.removeClass(g.dir_ltr, "active") : n.addClass(g.dir_ltr, "active")), g.dir_rtl && (r ? n.addClass(g.dir_rtl, "active") : n.removeClass(g.dir_rtl, "active"));
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
      const r = this.cleanHTML(e.element.wysiwyg.innerHTML, null, null), d = n.createElement("DIV");
      d.innerHTML = r;
      const p = n.getListChildren(d, function(m) {
        return m.hasAttribute("contenteditable");
      });
      for (let m = 0, g = p.length; m < g; m++)
        p[m].removeAttribute("contenteditable");
      if (l.fullPage && !s) {
        const m = n.getAttributesToString(this._wd.body, ["contenteditable"]);
        return "<!DOCTYPE html><html>" + this._wd.head.outerHTML + "<body " + m + ">" + d.innerHTML + "</body></html>";
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
        const p = n.getListChildNodes(s, function(m) {
          return n.isSpanWithoutAttr(m) && !n.getParentElement(m, n.isNotCheckingNode);
        }) || [];
        for (let m = p.length - 1; m >= 0; m--)
          p[m].outerHTML = p[m].innerHTML;
        return !r || n.isFormatElement(s) || n.isRangeFormatElement(s) || n.isComponent(s) || n.isFigures(s) || n.isAnchor(s) && n.isMedia(s.firstElementChild) ? n.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML : "<" + d + ">" + (n.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML) + "</" + d + ">";
      }
      if (s.nodeType === 3) {
        if (!r) return n._HTMLConvertor(s.textContent);
        const p = s.textContent.split(/\n/g);
        let m = "";
        for (let g = 0, h = p.length, y; g < h; g++)
          y = p[g].trim(), y.length > 0 && (m += "<" + d + ">" + n._HTMLConvertor(y) + "</" + d + ">");
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
      return s.replace(this._disallowedTextTagsRegExp, function(d, p, m, g) {
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
      const d = this._w.Math, p = r.match(/(\d+(?:\.\d+)?)(.+)/), m = p ? p[1] * 1 : n.fontValueMap[r], g = p ? p[2] : "rem";
      let h = m;
      switch (/em/.test(g) ? h = d.round(m / 0.0625) : g === "pt" ? h = d.round(m * 1.333) : g === "%" && (h = m / 100), s) {
        case "em":
        case "rem":
        case "%":
          return (h * 0.0625).toFixed(2) + s;
        case "pt":
          return d.floor(h / 1.333) + s;
        default:
          return h + s;
      }
    },
    _cleanStyle: function(s, r, d) {
      let p = (s.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(d) && !p && (s.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const m = (s.match(/\ssize="([^"]+)"/i) || [])[1], g = (s.match(/\sface="([^"]+)"/i) || [])[1], h = (s.match(/\scolor="([^"]+)"/i) || [])[1];
        (m || g || h) && (p = 'style="' + (m ? "font-size:" + this.util.getNumber(m / 3.333, 1) + "rem;" : "") + (g ? "font-family:" + g + ";" : "") + (h ? "color:" + h + ";" : "") + '"');
      }
      if (p) {
        r || (r = []);
        const m = p.replace(/&quot;/g, "").match(this._cleanStyleRegExp[d]);
        if (m) {
          const g = [];
          for (let h = 0, y = m.length, C; h < y; h++)
            if (C = m[h].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), C && !/inherit|initial|revert|unset/i.test(C[3])) {
              const _ = n.kebabToCamelCase(C[1].trim()), x = this.wwComputedStyle[_] ? this.wwComputedStyle[_].replace(/"/g, "") : "", I = C[3].trim();
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
              x !== I && g.push(C[0]);
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
    _cleanTags: function(s, r, d) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(r)) return r;
      let p = null;
      const m = d.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), g = this._attributesTagsBlacklist[m];
      r = r.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, ""), g ? r = r.replace(g, "") : r = r.replace(this._attributesBlacklistRegExp, "");
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
      if (n.isFigures(m)) {
        const y = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        p || (p = []), y && p.push(y[0]);
      }
      if (p)
        for (let y = 0, C = p.length, _; y < C; y++)
          _ = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(p[y].trim()) ? "" : p[y], d += (/^\s/.test(_) ? "" : " ") + _;
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
      const p = s.childNodes;
      for (let m = 0, g = p.length, h; m < g; m++)
        h = p[m], h.nodeType === 8 ? r += "<!-- " + h.textContent + " -->" : !n.isFormatElement(h) && !n.isRangeFormatElement(h) && !n.isComponent(h) && !/meta/i.test(h.nodeName) ? (d || (d = n.createElement(l.defaultTag)), d.appendChild(h), m--, g--) : (d && (r += d.outerHTML, d = null), r += h.outerHTML);
      return d && (r += d.outerHTML), c.createRange().createContextualFragment(r);
    },
    _convertListCell: function(s) {
      let r = "";
      for (let d = 0, p = s.length, m; d < p; d++)
        m = s[d], m.nodeType === 1 ? n.isList(m) ? r += m.innerHTML : n.isListCell(m) ? r += m.outerHTML : n.isFormatElement(m) ? r += "<li>" + (m.innerHTML.trim() || "<br>") + "</li>" : n.isRangeFormatElement(m) && !n.isTable(m) ? r += this._convertListCell(m) : r += "<li>" + m.outerHTML + "</li>" : r += "<li>" + (m.textContent || "<br>") + "</li>";
      return r;
    },
    _isFormatData: function(s) {
      let r = !1;
      for (let d = 0, p = s.length, m; d < p; d++)
        if (m = s[d], m.nodeType === 1 && !n.isTextStyleElement(m) && !n.isBreak(m) && !this.__disallowedTagNameRegExp.test(m.nodeName)) {
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
      if (!l.strictMode) return n.htmlCompress(s);
      s = this._deleteDisallowedTags(this._parser.parseFromString(n.htmlCompress(s), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0)).replace(/<br\/?>$/i, "");
      const p = c.createRange().createContextualFragment(s);
      try {
        n._consistencyCheckOfHTML(p, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, l.strictHTMLValidation);
      } catch (y) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + y);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const y = p.querySelectorAll(this.managedTagsInfo.query);
        for (let C = 0, _ = y.length, x, I; C < _; C++) {
          I = [].slice.call(y[C].classList);
          for (let L = 0, z = I.length; L < z; L++)
            if (x = this.managedTagsInfo.map[I[L]], x) {
              x(y[C]);
              break;
            }
        }
      }
      let m = p.childNodes, g = "";
      const h = this._isFormatData(m);
      h && (m = this._editFormat(p).childNodes);
      for (let y = 0, C = m.length, _; y < C; y++) {
        if (_ = m[y], this.__allowedScriptRegExp.test(_.nodeName)) {
          g += _.outerHTML;
          continue;
        }
        g += this._makeLine(_, h);
      }
      return g = n.htmlRemoveWhiteSpace(g), g ? (r && (g = g.replace(typeof r == "string" ? n.createTagsWhitelist(r) : r, "")), d && (g = g.replace(typeof d == "string" ? n.createTagsBlacklist(d) : d, ""))) : g = s, this._tagConvertor(g);
    },
    /**
     * @description Converts contents into a format that can be placed in an editor
     * @param {String} contents contents
     * @returns {String}
     */
    convertContentsForEditor: function(s) {
      if (!l.strictMode) return n.htmlCompress(s);
      s = this._deleteDisallowedTags(this._parser.parseFromString(n.htmlCompress(s), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0));
      const r = c.createRange().createContextualFragment(s);
      try {
        n._consistencyCheckOfHTML(r, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, l.strictHTMLValidation);
      } catch (g) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + g);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const g = r.querySelectorAll(this.managedTagsInfo.query);
        for (let h = 0, y = g.length, C, _; h < y; h++) {
          _ = [].slice.call(g[h].classList);
          for (let x = 0, I = _.length; x < I; x++)
            if (C = this.managedTagsInfo.map[_[x]], C) {
              C(g[h]);
              break;
            }
        }
      }
      const d = r.childNodes;
      let p = "", m = null;
      for (let g = 0, h; g < d.length; g++) {
        if (h = d[g], this.__allowedScriptRegExp.test(h.nodeName)) {
          p += h.outerHTML;
          continue;
        }
        if (!n.isFormatElement(h) && !n.isRangeFormatElement(h) && !n.isComponent(h) && !n.isFigures(h) && h.nodeType !== 8 && !/__se__tag/.test(h.className)) {
          if (m || (m = n.createElement(l.defaultTag)), m.appendChild(h), g--, d[g + 1] && !n.isFormatElement(d[g + 1]))
            continue;
          h = m, m = null;
        }
        m && (p += this._makeLine(m, !0), m = null), p += this._makeLine(h, !0);
      }
      return m && (p += this._makeLine(m, !0)), p.length === 0 ? "<" + l.defaultTag + "><br></" + l.defaultTag + ">" : (p = n.htmlRemoveWhiteSpace(p), this._tagConvertor(p));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(s, r) {
      let d = "";
      const p = f.RegExp, m = new p("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), g = typeof s == "string" ? c.createRange().createContextualFragment(s) : s, h = (function(_) {
        return this.isFormatElement(_) || this.isComponent(_);
      }).bind(n), y = r ? "" : `
`;
      let C = r ? 0 : this._variable.codeIndent * 1;
      return C = C > 0 ? new f.Array(C + 1).join(" ") : "", function _(x, I) {
        const L = x.childNodes, z = m.test(x.nodeName), N = z ? I : "";
        for (let Z = 0, W = L.length, H, D, P, A, V, B; Z < W; Z++) {
          if (H = L[Z], A = m.test(H.nodeName), D = A ? y : "", P = h(H) && !z && !/^(TH|TD)$/i.test(x.nodeName) ? y : "", H.nodeType === 8) {
            d += `
<!-- ` + H.textContent.trim() + " -->" + D;
            continue;
          }
          if (H.nodeType === 3) {
            n.isList(H.parentElement) || (d += n._HTMLConvertor(/^\n+$/.test(H.data) ? "" : H.data));
            continue;
          }
          if (H.childNodes.length === 0) {
            d += (/^HR$/i.test(H.nodeName) ? y : "") + (/^PRE$/i.test(H.parentElement.nodeName) && /^BR$/i.test(H.nodeName) ? "" : N) + H.outerHTML + D;
            continue;
          }
          H.outerHTML ? (V = H.nodeName.toLowerCase(), B = N || A ? I : "", d += (P || (z ? "" : D)) + B + H.outerHTML.match(p("<" + V + "[^>]*>", "i"))[0] + D, _(H, I + C), d += (/\n$/.test(d) ? B : "") + "</" + V + ">" + (P || D || z || /^(TH|TD)$/i.test(H.nodeName) ? y : "")) : d += new f.XMLSerializer().serializeToString(H);
        }
      }(g, ""), d.trim() + y;
    },
    /**
     * @description Add an event to document.
     * When created as an Iframe, the same event is added to the document in the Iframe.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     * @param {Boolean} useCapture Use event capture
     */
    addDocEvent: function(s, r, d) {
      c.addEventListener(s, r, d), l.iframe && this._wd.addEventListener(s, r);
    },
    /**
     * @description Remove events from document.
     * When created as an Iframe, the event of the document inside the Iframe is also removed.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     */
    removeDocEvent: function(s, r) {
      c.removeEventListener(s, r), l.iframe && this._wd.removeEventListener(s, r);
    },
    /**
     * @description The current number of characters is counted and displayed.
     * @param {String} inputText Text added.
     * @returns {Boolean}
     * @private
     */
    _charCount: function(s) {
      const r = l.maxCharCount, d = l.charCounterType;
      let p = 0;
      if (s && (p = this.getCharLength(s, d)), this._setCharCount(), r > 0) {
        let m = !1;
        const g = w.getCharCount(d);
        if (g > r) {
          if (m = !0, p > 0) {
            this._editorRange();
            const h = this.getRange(), y = h.endOffset - 1, C = this.getSelectionNode().textContent, _ = h.endOffset - (g - r);
            this.getSelectionNode().textContent = C.slice(0, _ < 0 ? 0 : _) + C.slice(h.endOffset, C.length), this.setRange(h.endContainer, y, h.endContainer, y);
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
      if (l.maxCharCount) {
        const d = r || l.charCounterType, p = this.getCharLength(typeof s == "string" ? s : this._charTypeHTML && s.nodeType === 1 ? s.outerHTML : s.textContent, d);
        if (p > 0 && p + w.getCharCount(d) > l.maxCharCount)
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
        (u._isBalloon || u._isInline) && l.toolbarWidth === "auto" ? r = e.element.topArea.offsetWidth : r = e.element.toolbar.offsetWidth;
        let d = "default";
        for (let p = 1, m = s.length; p < m; p++)
          if (r < s[p]) {
            d = s[p] + "";
            break;
          }
        v._responsiveCurrentSize !== d && (v._responsiveCurrentSize = d, w.setToolbarButtons(v._responsiveButtons[d]));
      }
    },
    /**
     * @description Set the char count to charCounter element textContent.
     * @private
     */
    _setCharCount: function() {
      e.element.charCounter && f.setTimeout((function(s, r) {
        this.textContent && s && (this.textContent = s.getCharCount(r.charCounterType));
      }).bind(e.element.charCounter, w, l), 0);
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
      for (let p in r)
        s.indexOf(p) > -1 || !n.hasOwn(r, p) || (d.indexOf(p) > -1 ? i[p].active.call(this, null) : r.OUTDENT && /^OUTDENT$/i.test(p) ? n.isImportantDisabled(r.OUTDENT) || r.OUTDENT.setAttribute("disabled", !0) : r.INDENT && /^INDENT$/i.test(p) ? n.isImportantDisabled(r.INDENT) || r.INDENT.removeAttribute("disabled") : n.removeClass(r[p], "active"));
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(s, r) {
      const d = f.RegExp;
      this._ww = l.iframe ? e.element.wysiwygFrame.contentWindow : f, this._wd = c, this._charTypeHTML = l.charCounterType === "byte-html", this.wwComputedStyle = f.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = n.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + n.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(A) {
        return this.test(A) ? A : "";
      }).bind(l.allowedClassNames);
      const p = l.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new d("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new d("<(" + p + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + p + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new d("^(" + p + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new d("^" + (l.__allowedScriptTag ? "script" : "") + "$", "i"), !l.iframe && typeof f.ShadowRoot == "function") {
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
      const m = f.Object.keys(l._textTagsMap), g = l.addTagsWhitelist ? l.addTagsWhitelist.split("|").filter(function(A) {
        return /b|i|ins|s|strike/i.test(A);
      }) : [];
      for (let A = 0; A < g.length; A++)
        m.splice(m.indexOf(g[A].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = m.length === 0 ? null : new d("(<\\/?)(" + m.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const h = function(A, V) {
        return A ? A === "*" ? "[a-z-]+" : V ? A + "|" + V : A : "^";
      }, _ = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", x = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = l._editorTagsWhitelist.indexOf("//") > -1 || l._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new d("^(" + h(l._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new d("^(" + (l.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = n.createTagsWhitelist(h(l._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = n.createTagsBlacklist(l.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = n.createTagsWhitelist(h(l.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = n.createTagsBlacklist(l.pasteTagsBlacklist);
      const I = '\\s*=\\s*(")[^"]*\\1', L = l.attributesWhitelist;
      let z = {}, N = "";
      if (L)
        for (let A in L)
          !n.hasOwn(L, A) || /^on[a-z]+$/i.test(L[A]) || (A === "all" ? N = h(L[A], _) : z[A] = new d("\\s(?:" + h(L[A], "") + ")" + I, "ig"));
      this._attributesWhitelistRegExp = new d("\\s(?:" + (N || _ + "|" + x) + ")" + I, "ig"), this._attributesWhitelistRegExp_all_data = new d("\\s(?:" + ((N || _) + "|data-[a-z0-9\\-]+") + ")" + I, "ig"), this._attributesTagsWhitelist = z;
      const Z = l.attributesBlacklist;
      if (z = {}, N = "", Z)
        for (let A in Z)
          n.hasOwn(Z, A) && (A === "all" ? N = h(Z[A], "") : z[A] = new d("\\s(?:" + h(Z[A], "") + ")" + I, "ig"));
      this._attributesBlacklistRegExp = new d("\\s(?:" + (N || "^") + ")" + I, "ig"), this._attributesTagsBlacklist = z, this._isInline = /inline/i.test(l.mode), this._isBalloon = /balloon|balloon-always/i.test(l.mode), this._isBalloonAlways = /balloon-always/i.test(l.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const W = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let H = [], D, P;
      for (let A in i)
        if (n.hasOwn(i, A)) {
          if (D = i[A], P = t[A], (D.active || D.action) && P && this.callPlugin(A, null, P), typeof D.checkFileInfo == "function" && typeof D.resetFileInfo == "function" && (this.callPlugin(A, null, P), this._fileInfoPluginsCheck.push(D.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(D.resetFileInfo.bind(this))), f.Array.isArray(D.fileTags)) {
            const V = D.fileTags;
            this.callPlugin(A, null, P), this._fileManager.tags = this._fileManager.tags.concat(V), H.push(A);
            for (let B = 0, F = V.length; B < F; B++)
              this._fileManager.pluginMap[V[B].toLowerCase()] = A;
          }
          if (D.managedTags) {
            const V = D.managedTags();
            W.push("." + V.className), this.managedTagsInfo.map[V.className] = V.method.bind(this);
          }
        }
      this.managedTagsInfo.query = W.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new d("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new d("^(" + (H.length === 0 ? "^" : H.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = nr(this, this._onChange_historyStack.bind(this)), this.addModule([nn]), l.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, l._editorStyles.editor && (e.element.wysiwyg.style.cssText = l._editorStyles.editor), l.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(s, r);
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
      this._iframeAuto ? f.setTimeout(function() {
        const s = u._iframeAuto.offsetHeight;
        e.element.wysiwygFrame.style.height = s + "px", n.isResizeObserverSupported || u.__callResizeFunction(s, null);
      }) : n.isResizeObserverSupported || u.__callResizeFunction(e.element.wysiwygFrame.offsetHeight, null);
    },
    __callResizeFunction: function(s, r) {
      s = s === -1 ? r.borderBoxSize && r.borderBoxSize[0] ? r.borderBoxSize[0].blockSize : r.contentRect.height + this._editorHeightPadding : s, this._editorHeight !== s && (typeof w.onResizeEditor == "function" && w.onResizeEditor(s, this._editorHeight, u, r), this._editorHeight = s);
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
      const r = this.getRange(), d = r.commonAncestorContainer, p = r.startContainer, m = n.getRangeFormatElement(d, null);
      let g, h, y;
      const C = n.getParentElement(d, n.isComponent);
      if (!(C && !n.isTable(C))) {
        if (d.nodeType === 1 && d.getAttribute("data-se-embed") === "true") {
          let _ = d.nextElementSibling;
          n.isFormatElement(_) || (_ = this.appendFormatTag(d, l.defaultTag)), this.setRange(_.firstChild, 0, _.firstChild, 0);
          return;
        }
        if (!((n.isRangeFormatElement(p) || n.isWysiwygDiv(p)) && (n.isComponent(p.children[r.startOffset]) || n.isComponent(p.children[r.startOffset - 1])))) {
          if (n.getParentElement(d, n.isNotCheckingNode)) return null;
          if (m) {
            y = n.createElement(s || l.defaultTag), y.innerHTML = m.innerHTML, y.childNodes.length === 0 && (y.innerHTML = n.zeroWidthSpace), m.innerHTML = y.outerHTML, y = m.firstChild, g = n.getEdgeChildNodes(y, null).sc, g || (g = n.createTextNode(n.zeroWidthSpace), y.insertBefore(g, y.firstChild)), h = g.textContent.length, this.setRange(g, h, g, h);
            return;
          }
          if (n.isRangeFormatElement(d) && d.childNodes.length <= 1) {
            let _ = null;
            d.childNodes.length === 1 && n.isBreak(d.firstChild) ? _ = d.firstChild : (_ = n.createTextNode(n.zeroWidthSpace), d.appendChild(_)), this.setRange(_, 1, _, 1);
            return;
          }
          try {
            if (d.nodeType === 3 && (y = n.createElement(s || l.defaultTag), d.parentNode.insertBefore(y, d), y.appendChild(d)), n.isBreak(y.nextSibling) && n.removeItem(y.nextSibling), n.isBreak(y.previousSibling) && n.removeItem(y.previousSibling), n.isBreak(g)) {
              const _ = n.createTextNode(n.zeroWidthSpace);
              g.parentNode.insertBefore(_, g), g = _;
            }
          } catch {
            this.execCommand("formatBlock", !1, s || l.defaultTag), this.removeRange(), this._editorRange(), this.effectNode = null;
            return;
          }
          if (y && (n.isBreak(y.nextSibling) && n.removeItem(y.nextSibling), n.isBreak(y.previousSibling) && n.removeItem(y.previousSibling), n.isBreak(g))) {
            const _ = n.createTextNode(n.zeroWidthSpace);
            g.parentNode.insertBefore(_, g), g = _;
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
      this.context = e = Wi(s.originElement, this._getConstructed(s), l), this._componentsInfoReset = !0, this._editorInit(!0, r);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(s, r) {
      this._init(s, r), v._addEvent(), this._setCharCount(), v._offStickyToolbar(), v.onResize_window(), e.element.toolbar.style.visibility = "";
      const d = l.frameAttrbutes;
      for (let p in d)
        e.element.wysiwyg.setAttribute(p, d[p]);
      this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), f.setTimeout(function() {
        typeof u._resourcesStateChange == "function" && (v._resizeObserver && v._resizeObserver.observe(e.element.wysiwygFrame), v._toolbarObserver && v._toolbarObserver.observe(e.element._toolbarShadow), u._resourcesStateChange(), typeof w.onload == "function" && w.onload(u, s));
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
    _onButtonsCheck: new f.RegExp("^(" + f.Object.keys(l._textTagsMap).join("|") + ")$", "i"),
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
      let d = null;
      const p = v._keyCodeShortcut[s];
      switch (p) {
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
      return d ? (u.commandHandler(u.commandMap[d], d), !0) : !!p;
    },
    _applyTagEffects: function() {
      if (n.hasClass(e.element.wysiwyg, "se-read-only"))
        return !1;
      let s = u.getSelectionNode();
      if (s === u.effectNode) return;
      u.effectNode = s;
      const r = l.rtl ? "marginRight" : "marginLeft", d = u.commandMap, p = v._onButtonsCheck, m = [], g = [], h = u.activePlugins, y = h.length;
      let C = "";
      for (; s.firstChild; )
        s = s.firstChild;
      for (let _ = s; !n.isWysiwygDiv(_) && _; _ = _.parentNode)
        if (!(_.nodeType !== 1 || n.isBreak(_))) {
          if (C = _.nodeName.toUpperCase(), g.push(C), !u.isReadOnly)
            for (let x = 0, I; x < y; x++)
              I = h[x], m.indexOf(I) === -1 && i[I].active.call(u, _) && m.push(I);
          if (n.isFormatElement(_)) {
            m.indexOf("OUTDENT") === -1 && d.OUTDENT && !n.isImportantDisabled(d.OUTDENT) && (n.isListCell(_) || _.style[r] && n.getNumber(_.style[r], 0) > 0) && (m.push("OUTDENT"), d.OUTDENT.removeAttribute("disabled")), m.indexOf("INDENT") === -1 && d.INDENT && !n.isImportantDisabled(d.INDENT) && (m.push("INDENT"), n.isListCell(_) && !_.previousElementSibling ? d.INDENT.setAttribute("disabled", !0) : d.INDENT.removeAttribute("disabled"));
            continue;
          }
          p && p.test(C) && (m.push(C), n.addClass(d[C], "active"));
        }
      u._setKeyEffect(m), u._variable.currentNodes = g.reverse(), u._variable.currentNodesMap = m, l.showPathLabel && (e.element.navigation.textContent = u._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(s) {
      let r = s.target;
      if (u._bindControllersOff && s.stopPropagation(), /^(input|textarea|select|option)$/i.test(r.nodeName) ? u._antiBlur = !1 : s.preventDefault(), n.getParentElement(r, ".se-submenu"))
        s.stopPropagation(), u._notHideToolbar = !0;
      else {
        let d = r.getAttribute("data-command"), p = r.className;
        for (; !d && !/se-menu-list/.test(p) && !/sun-editor-common/.test(p); )
          r = r.parentNode, d = r.getAttribute("data-command"), p = r.className;
        (d === u._submenuName || d === u._containerName) && s.stopPropagation();
      }
    },
    addGlobalEvent: function(s, r, d) {
      return l.iframe && u._ww.addEventListener(s, r, d), u._w.addEventListener(s, r, d), {
        type: s,
        listener: r,
        useCapture: d
      };
    },
    removeGlobalEvent: function(s, r, d) {
      s && (typeof s == "object" && (r = s.listener, d = s.useCapture, s = s.type), l.iframe && u._ww.removeEventListener(s, r, d), u._w.removeEventListener(s, r, d));
    },
    onClick_toolbar: function(s) {
      let r = s.target, d = r.getAttribute("data-display"), p = r.getAttribute("data-command"), m = r.className;
      for (u.controllersOff(); r.parentNode && !p && !/se-menu-list/.test(m) && !/se-toolbar/.test(m); )
        r = r.parentNode, p = r.getAttribute("data-command"), d = r.getAttribute("data-display"), m = r.className;
      !p && !d || r.disabled || u.actionCall(p, d, r);
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
      }), typeof w.onMouseDown == "function" && w.onMouseDown(s, u) === !1) return;
      const r = n.getParentElement(s.target, n.isCell);
      if (r) {
        const d = u.plugins.table;
        d && r !== d._fixedCell && !d._shift && u.callPlugin("table", function() {
          d.onTableCellMultiSelect.call(u, r, !1);
        }, null);
      }
      u._isBalloon && v._hideToolbar();
    },
    onClick_wysiwyg: function(s) {
      const r = s.target;
      if (u.isReadOnly)
        return s.preventDefault(), n.isAnchor(r) && f.open(r.href, r.target), !1;
      if (n.isNonEditable(e.element.wysiwyg) || typeof w.onClick == "function" && w.onClick(s, u) === !1) return;
      const d = u.getFileComponent(r);
      if (d) {
        s.preventDefault(), u.selectComponent(d.target, d.pluginName);
        return;
      }
      const p = n.getParentElement(r, "FIGCAPTION");
      if (p && n.isNonEditable(p) && (s.preventDefault(), p.focus(), u._isInline && !u._inlineToolbarAttr.isShow)) {
        v._showToolbarInline();
        const _ = function() {
          v._hideToolbar(), p.removeEventListener("blur", _);
        };
        p.addEventListener("blur", _);
      }
      if (u._editorRange(), s.detail === 3) {
        let _ = u.getRange();
        n.isFormatElement(_.endContainer) && _.endOffset === 0 && (_ = u.setRange(_.startContainer, _.startOffset, _.startContainer, _.startContainer.length), u._rangeInfo(_, u.getSelection()));
      }
      const m = u.getSelectionNode(), g = n.getFormatElement(m, null), h = n.getRangeFormatElement(m, null);
      let y = m;
      for (; y && y.firstChild; ) y = y.firstChild;
      const C = u.getFileComponent(y);
      if (C) {
        const _ = u.getRange();
        !h && _.startContainer === _.endContainer && u.selectComponent(C.target, C.pluginName);
      } else u.currentFileComponentInfo && u.controllersOff();
      if (!g && !n.isNonEditable(r) && !n.isList(h)) {
        const _ = u.getRange();
        if (n.getFormatElement(_.startContainer) === n.getFormatElement(_.endContainer))
          if (n.isList(h)) {
            s.preventDefault();
            const x = n.createElement("LI"), I = m.nextElementSibling;
            x.appendChild(m), h.insertBefore(x, I), u.focus();
          } else !n.isWysiwygDiv(m) && !n.isComponent(m) && (!n.isTable(m) || n.isCell(m)) && u._setDefaultFormat(n.isRangeFormatElement(h) ? "DIV" : l.defaultTag) !== null ? (s.preventDefault(), u.focus()) : v._applyTagEffects();
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
      const r = s || u.getRange(), d = e.element.toolbar, p = e.element.topArea, m = u.getSelection();
      let g;
      if (u._isBalloonAlways && r.collapsed)
        g = !0;
      else if (m.focusNode === m.anchorNode)
        g = m.focusOffset < m.anchorOffset;
      else {
        const D = n.getListChildNodes(r.commonAncestorContainer, null);
        g = n.getArrayIndex(D, m.focusNode) < n.getArrayIndex(D, m.anchorNode);
      }
      let h = r.getClientRects();
      h = h[g ? 0 : h.length - 1];
      const y = u.getGlobalScrollOffset();
      let C = y.left, _ = y.top;
      const x = p.offsetWidth, I = v._getEditorOffsets(null), L = I.top, z = I.left;
      if (d.style.top = "-10000px", d.style.visibility = "hidden", d.style.display = "block", !h) {
        const D = u.getSelectionNode();
        if (n.isFormatElement(D)) {
          const P = n.createTextNode(n.zeroWidthSpace);
          u.insertNode(P, null, !1), u.setRange(P, 1, P, 1), u._editorRange(), h = u.getRange().getClientRects(), h = h[g ? 0 : h.length - 1];
        }
        if (!h) {
          const P = n.getOffset(D, e.element.wysiwygFrame);
          h = {
            left: P.left,
            top: P.top,
            right: P.left,
            bottom: P.top + D.offsetHeight,
            noText: !0
          }, C = 0, _ = 0;
        }
        g = !0;
      }
      const N = f.Math.round(e.element._arrow.offsetWidth / 2), Z = d.offsetWidth, W = d.offsetHeight, H = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (H && (h = {
        left: h.left + H.left,
        top: h.top + H.top,
        right: h.right + H.right - H.width,
        bottom: h.bottom + H.bottom - H.height
      }), v._setToolbarOffset(g, h, d, z, x, C, _, L, N), (Z !== d.offsetWidth || W !== d.offsetHeight) && v._setToolbarOffset(g, h, d, z, x, C, _, L, N), l.toolbarContainer) {
        const D = p.parentElement;
        let P = l.toolbarContainer, A = P.offsetLeft, V = P.offsetTop;
        for (; !P.parentElement.contains(D) || !/^(BODY|HTML)$/i.test(P.parentElement.nodeName); )
          P = P.offsetParent, A += P.offsetLeft, V += P.offsetTop;
        d.style.left = d.offsetLeft - A + p.offsetLeft + "px", d.style.top = d.offsetTop - V + p.offsetTop + "px";
      }
      d.style.visibility = "";
    },
    _setToolbarOffset: function(s, r, d, p, m, g, h, y, C) {
      const x = d.offsetWidth, I = r.noText && !s ? 0 : d.offsetHeight, L = (s ? r.left : r.right) - p - x / 2 + g, z = L + x - m;
      let N = (s ? r.top - I - C : r.bottom + C) - (r.noText ? 0 : y) + h, Z = L < 0 ? 1 : z < 0 ? L : L - z - 1 - 1, W = !1;
      const H = N + (s ? v._getEditorOffsets(null).top : d.offsetHeight - e.element.wysiwyg.offsetHeight);
      !s && H > 0 && v._getPageBottomSpace() < H ? (s = !0, W = !0) : s && c.documentElement.offsetTop > H && (s = !1, W = !0), W && (N = (s ? r.top - I - C : r.bottom + C) - (r.noText ? 0 : y) + h), d.style.left = f.Math.floor(Z) + "px", d.style.top = f.Math.floor(N) + "px", s ? (n.removeClass(e.element._arrow, "se-arrow-up"), n.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = I + "px") : (n.removeClass(e.element._arrow, "se-arrow-down"), n.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -C + "px");
      const D = f.Math.floor(x / 2 + (L - Z));
      e.element._arrow.style.left = (D + C > d.offsetWidth ? d.offsetWidth - C : D < C ? C : D) + "px";
    },
    _showToolbarInline: function() {
      if (!u._isInline) return;
      const s = e.element.toolbar;
      l.toolbarContainer ? s.style.position = "relative" : s.style.position = "absolute", s.style.visibility = "hidden", s.style.display = "block", u._inlineToolbarAttr.width = s.style.width = l.toolbarWidth, u._inlineToolbarAttr.top = s.style.top = (l.toolbarContainer ? 0 : -1 - s.offsetHeight) + "px", typeof w.showInline == "function" && w.showInline(s, e, u), v.onScroll_window(), u._inlineToolbarAttr.isShow = !0, s.style.visibility = "";
    },
    _hideToolbar: function() {
      !u._notHideToolbar && !u._variable.isFullScreen && (e.element.toolbar.style.display = "none", u._inlineToolbarAttr.isShow = !1);
    },
    onInput_wysiwyg: function(s) {
      if (/AUDIO/.test(s.target.nodeName)) return !1;
      if (u.isReadOnly || u.isDisabled)
        return s.preventDefault(), s.stopPropagation(), u.history.go(u.history.getCurrentIndex()), !1;
      const r = u.getRange(), d = u.getSelectionNode(), p = n.getFormatElement(d, null);
      if (!p && r.collapsed && !n.isComponent(d) && !n.isList(d)) {
        const g = n.getRangeFormatElement(p, null);
        u._setDefaultFormat(n.isRangeFormatElement(g) ? "DIV" : l.defaultTag);
      }
      u._editorRange();
      const m = (s.data === null ? "" : s.data === void 0 ? " " : s.data) || "";
      if (!u._charCount(m))
        return s.preventDefault(), s.stopPropagation(), !1;
      typeof w.onInput == "function" && w.onInput(s, u) === !1 || u.history.push(!0);
    },
    _isUneditableNode: function(s, r) {
      const d = r ? s.startContainer : s.endContainer, p = r ? s.startOffset : s.endOffset, m = r ? "previousSibling" : "nextSibling", g = d.nodeType === 1;
      let h;
      return g ? (h = v._isUneditableNode_getSibling(d.childNodes[p], m, d), h && h.nodeType === 1 && h.getAttribute("contenteditable") === "false") : (h = v._isUneditableNode_getSibling(d, m, d), u.isEdgePoint(d, p, r ? "start" : "end") && h && h.nodeType === 1 && h.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(s, r, d) {
      if (!s) return null;
      let p = s[r];
      if (!p)
        if (p = n.getFormatElement(d), p = p ? p[r] : null, p && !n.isComponent(p)) p = r === "previousSibling" ? p.firstChild : p.lastChild;
        else return null;
      return p;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(s) {
      let r = u.getSelectionNode();
      if (n.isInputElement(r)) return;
      const d = s.keyCode, p = s.shiftKey, m = s.ctrlKey || s.metaKey || d === 91 || d === 92 || d === 224, g = s.altKey;
      if (v._IEisComposing = d === 229, !m && u.isReadOnly && !v._cursorMoveKeyCode.test(d))
        return s.preventDefault(), !1;
      if (u.submenuOff(), u._isBalloon && v._hideToolbar(), typeof w.onKeyDown == "function" && w.onKeyDown(s, u) === !1) return;
      if (m && v._shortcutCommand(d, p))
        return v._onShortcutKey = !0, s.preventDefault(), s.stopPropagation(), !1;
      v._onShortcutKey && (v._onShortcutKey = !1), d === 13 && n.isFormatElement(u.getRange().startContainer) && (u._resetRangeToTextNode(), r = u.getSelectionNode());
      const h = u.getRange(), y = !h.collapsed || h.startContainer !== h.endContainer, C = u._fileManager.pluginRegExp.test(u.currentControllerName) ? u.currentControllerName : "";
      let _ = n.getFormatElement(r, null) || r, x = n.getRangeFormatElement(_, null);
      if (!(/37|38|39|40/.test(s.keyCode) && v._onKeyDown_wysiwyg_arrowKey(s) === !1)) {
        switch (d) {
          case 8:
            if (!y && C) {
              s.preventDefault(), s.stopPropagation(), u.plugins[C].destroy.call(u);
              break;
            }
            if (y && v._hardDelete()) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if (!n.isFormatElement(_) && !e.element.wysiwyg.firstElementChild && !n.isComponent(r) && u._setDefaultFormat(l.defaultTag) !== null)
              return s.preventDefault(), s.stopPropagation(), !1;
            if (!y && !_.previousElementSibling && h.startOffset === 0 && !r.previousSibling && !n.isListCell(_) && n.isFormatElement(_) && (!n.isFreeFormatElement(_) || n.isClosureFreeFormatElement(_))) {
              if (n.isClosureRangeFormatElement(_.parentNode))
                return s.preventDefault(), s.stopPropagation(), !1;
              if (n.isWysiwygDiv(_.parentNode) && _.childNodes.length <= 1 && (!_.firstChild || n.onlyZeroWidthSpace(_.textContent))) {
                if (s.preventDefault(), s.stopPropagation(), _.nodeName.toUpperCase() === l.defaultTag.toUpperCase()) {
                  _.innerHTML = "<br>";
                  const B = _.attributes;
                  for (; B[0]; )
                    _.removeAttribute(B[0].name);
                } else {
                  const B = n.createElement(l.defaultTag);
                  B.innerHTML = "<br>", _.parentElement.replaceChild(B, _);
                }
                return u.nativeFocus(), !1;
              }
            }
            const L = h.startContainer;
            if (_ && !_.previousElementSibling && h.startOffset === 0 && L.nodeType === 3 && !n.isFormatElement(L.parentNode)) {
              let B = L.parentNode.previousSibling;
              const F = L.parentNode.nextSibling;
              B || (F ? B = F : (B = n.createElement("BR"), _.appendChild(B)));
              let k = L;
              for (; _.contains(k) && !k.previousSibling; )
                k = k.parentNode;
              if (!_.contains(k)) {
                L.textContent = "", n.removeItemAllParents(L, null, _);
                break;
              }
            }
            if (v._isUneditableNode(h, !0)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            !y && u._isEdgeFormat(h.startContainer, h.startOffset, "start") && n.isFormatElement(_.previousElementSibling) && (u._formatAttrsTemp = _.previousElementSibling.attributes);
            const z = h.commonAncestorContainer;
            if (_ = n.getFormatElement(h.startContainer, null), x = n.getRangeFormatElement(_, null), x && _ && !n.isCell(x) && !/^FIGCAPTION$/i.test(x.nodeName)) {
              if (n.isListCell(_) && n.isList(x) && (n.isListCell(x.parentNode) || _.previousElementSibling) && (r === _ || r.nodeType === 3 && (!r.previousSibling || n.isList(r.previousSibling))) && (n.getFormatElement(h.startContainer, null) !== n.getFormatElement(h.endContainer, null) ? x.contains(h.startContainer) : h.startOffset === 0 && h.collapsed)) {
                if (h.startContainer !== h.endContainer)
                  s.preventDefault(), u.removeNode(), h.startContainer.nodeType === 3 && u.setRange(h.startContainer, h.startContainer.textContent.length, h.startContainer, h.startContainer.textContent.length), u.history.push(!0);
                else {
                  let B = _.previousElementSibling || x.parentNode;
                  if (n.isListCell(B)) {
                    s.preventDefault();
                    let F = B;
                    if (!B.contains(_) && n.isListCell(F) && n.isList(F.lastElementChild)) {
                      for (F = F.lastElementChild.lastElementChild; n.isListCell(F) && n.isList(F.lastElementChild); )
                        F = F.lastElementChild && F.lastElementChild.lastElementChild;
                      B = F;
                    }
                    let k = B === x.parentNode ? x.previousSibling : B.lastChild;
                    k || (k = n.createTextNode(n.zeroWidthSpace), x.parentNode.insertBefore(k, x.parentNode.firstChild));
                    const M = k.nodeType === 3 ? k.textContent.length : 1, j = _.childNodes;
                    let $ = k, te = j[0];
                    for (; te = j[0]; )
                      B.insertBefore(te, $.nextSibling), $ = te;
                    n.removeItem(_), x.children.length === 0 && n.removeItem(x), u.setRange(k, M, k, M), u.history.push(!0);
                  }
                }
                break;
              }
              if (!y && h.startOffset === 0) {
                let B = !0, F = z;
                for (; F && F !== x && !n.isWysiwygDiv(F); ) {
                  if (F.previousSibling && (F.previousSibling.nodeType === 1 || !n.onlyZeroWidthSpace(F.previousSibling.textContent.trim()))) {
                    B = !1;
                    break;
                  }
                  F = F.parentNode;
                }
                if (B && x.parentNode) {
                  s.preventDefault(), u.detachRangeFormatElement(x, n.isListCell(_) ? [_] : null, null, !1, !1), u.history.push(!0);
                  break;
                }
              }
            }
            if (!y && _ && (h.startOffset === 0 || r === _ && _.childNodes[h.startOffset])) {
              const B = r === _ ? _.childNodes[h.startOffset] : r, F = _.previousSibling, k = (z.nodeType === 3 || n.isBreak(z)) && !z.previousSibling && h.startOffset === 0;
              if (B && !B.previousSibling && (z && n.isComponent(z.previousSibling) || k && n.isComponent(F))) {
                const M = u.getFileComponent(F);
                M ? (s.preventDefault(), s.stopPropagation(), _.textContent.length === 0 && n.removeItem(_), u.selectComponent(M.target, M.pluginName) === !1 && u.blur()) : n.isComponent(F) && (s.preventDefault(), s.stopPropagation(), n.removeItem(F));
                break;
              }
              if (B && n.isNonEditable(B.previousSibling)) {
                s.preventDefault(), s.stopPropagation(), n.removeItem(B.previousSibling);
                break;
              }
            }
            break;
          case 46:
            if (C) {
              s.preventDefault(), s.stopPropagation(), u.plugins[C].destroy.call(u);
              break;
            }
            if (y && v._hardDelete()) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if (!y && u._isEdgeFormat(h.endContainer, h.endOffset, "end") && !_.nextSibling) {
              s.preventDefault(), s.stopPropagation();
              return;
            }
            if (v._isUneditableNode(h, !1)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if ((n.isFormatElement(r) || r.nextSibling === null || n.onlyZeroWidthSpace(r.nextSibling) && r.nextSibling.nextSibling === null) && h.startOffset === r.textContent.length) {
              const B = _.nextElementSibling;
              if (!B) break;
              if (n.isComponent(B)) {
                if (s.preventDefault(), n.onlyZeroWidthSpace(_) && (n.removeItem(_), n.isTable(B))) {
                  let k = n.getChildElement(B, n.isCell, !1);
                  k = k.firstElementChild || k, u.setRange(k, 0, k, 0);
                  break;
                }
                const F = u.getFileComponent(B);
                F ? (s.stopPropagation(), u.selectComponent(F.target, F.pluginName) === !1 && u.blur()) : n.isComponent(B) && (s.stopPropagation(), n.removeItem(B));
                break;
              }
            }
            if (!y && (u.isEdgePoint(h.endContainer, h.endOffset) || r === _ && _.childNodes[h.startOffset])) {
              const B = r === _ && _.childNodes[h.startOffset] || r;
              if (B && n.isNonEditable(B.nextSibling)) {
                s.preventDefault(), s.stopPropagation(), n.removeItem(B.nextSibling);
                break;
              } else if (n.isComponent(B)) {
                s.preventDefault(), s.stopPropagation(), n.removeItem(B);
                break;
              }
            }
            if (!y && u._isEdgeFormat(h.endContainer, h.endOffset, "end") && n.isFormatElement(_.nextElementSibling) && (u._formatAttrsTemp = _.attributes), _ = n.getFormatElement(h.startContainer, null), x = n.getRangeFormatElement(_, null), n.isListCell(_) && n.isList(x) && (r === _ || r.nodeType === 3 && (!r.nextSibling || n.isList(r.nextSibling)) && (n.getFormatElement(h.startContainer, null) !== n.getFormatElement(h.endContainer, null) ? x.contains(h.endContainer) : h.endOffset === r.textContent.length && h.collapsed))) {
              h.startContainer !== h.endContainer && u.removeNode();
              let B = n.getArrayItem(_.children, n.isList, !1);
              if (B = B || _.nextElementSibling || x.parentNode.nextElementSibling, B && (n.isList(B) || n.getArrayItem(B.children, n.isList, !1))) {
                s.preventDefault();
                let F, k;
                if (n.isList(B)) {
                  const M = B.firstElementChild;
                  for (k = M.childNodes, F = k[0]; k[0]; )
                    _.insertBefore(k[0], B);
                  n.removeItem(M);
                } else {
                  for (F = B.firstChild, k = B.childNodes; k[0]; )
                    _.appendChild(k[0]);
                  n.removeItem(B);
                }
                u.setRange(F, 0, F, 0), u.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (C || l.tabDisable || (s.preventDefault(), m || g || n.isWysiwygDiv(r))) break;
            const N = !h.collapsed || u.isEdgePoint(h.startContainer, h.startOffset), Z = u.getSelectedElements(null);
            r = u.getSelectionNode();
            const W = [];
            let H = [], D = n.isListCell(Z[0]), P = n.isListCell(Z[Z.length - 1]), A = { sc: h.startContainer, so: h.startOffset, ec: h.endContainer, eo: h.endOffset };
            for (let B = 0, F = Z.length, k; B < F; B++)
              if (k = Z[B], n.isListCell(k)) {
                if (!k.previousElementSibling && !p)
                  continue;
                W.push(k);
              } else
                H.push(k);
            if (W.length > 0 && N && u.plugins.list)
              A = u.plugins.list.editInsideList.call(u, p, W);
            else {
              const B = n.getParentElement(r, n.isCell);
              if (B && N) {
                const F = n.getParentElement(B, "table"), k = n.getListChildren(F, n.isCell);
                let M = p ? n.prevIdx(k, B) : n.nextIdx(k, B);
                M === k.length && !p && (M = 0), M === -1 && p && (M = k.length - 1);
                let j = k[M];
                if (!j) break;
                j = j.firstElementChild || j, u.setRange(j, 0, j, 0);
                break;
              }
              H = H.concat(W), D = P = null;
            }
            if (H.length > 0)
              if (p) {
                const B = H.length - 1;
                for (let M = 0, j; M <= B; M++) {
                  j = H[M].childNodes;
                  for (let $ = 0, te = j.length, K; $ < te && (K = j[$], !!K); $++)
                    if (!n.onlyZeroWidthSpace(K)) {
                      /^\s{1,4}$/.test(K.textContent) ? n.removeItem(K) : /^\s{1,4}/.test(K.textContent) && (K.textContent = K.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const F = n.getChildElement(H[0], "text", !1), k = n.getChildElement(H[B], "text", !0);
                !D && F && (A.sc = F, A.so = 0), !P && k && (A.ec = k, A.eo = k.textContent.length);
              } else {
                const B = n.createTextNode(new f.Array(u._variable.tabSize + 1).join(" "));
                if (H.length === 1) {
                  if (!u.insertNode(B, null, !0)) return !1;
                  D || (A.sc = B, A.so = B.length), P || (A.ec = B, A.eo = B.length);
                } else {
                  const F = H.length - 1;
                  for (let j = 0, $; j <= F; j++)
                    $ = H[j].firstChild, $ && (n.isBreak($) ? H[j].insertBefore(B.cloneNode(!1), $) : $.textContent = B.textContent + $.textContent);
                  const k = n.getChildElement(H[0], "text", !1), M = n.getChildElement(H[F], "text", !0);
                  !D && k && (A.sc = k, A.so = 0), !P && M && (A.ec = M, A.eo = M.textContent.length);
                }
              }
            u.setRange(A.sc, A.so, A.ec, A.eo), u.history.push(!1);
            break;
          case 13:
            const V = n.getFreeFormatElement(r, null);
            if (u._charTypeHTML) {
              let B = "";
              if (!p && V || p ? B = "<br>" : B = "<" + _.nodeName + "><br></" + _.nodeName + ">", !u.checkCharCount(B, "byte-html"))
                return s.preventDefault(), !1;
            }
            if (!p && !C) {
              const B = u._isEdgeFormat(h.endContainer, h.endOffset, "end"), F = u._isEdgeFormat(h.startContainer, h.startOffset, "start");
              if (B && (/^H[1-6]$/i.test(_.nodeName) || /^HR$/i.test(_.nodeName))) {
                v._enterPrevent(s);
                let k = null;
                const M = u.appendFormatTag(_, l.defaultTag);
                if (B && B.length > 0) {
                  k = B.pop();
                  const j = k;
                  for (; B.length > 0; )
                    k = k.appendChild(B.pop());
                  M.appendChild(j);
                }
                if (k = k ? k.appendChild(M.firstChild) : M.firstChild, n.isBreak(k)) {
                  const j = n.createTextNode(n.zeroWidthSpace);
                  k.parentNode.insertBefore(j, k), u.setRange(j, 1, j, 1);
                } else
                  u.setRange(k, 0, k, 0);
                break;
              } else if (x && _ && !n.isCell(x) && !/^FIGCAPTION$/i.test(x.nodeName)) {
                const k = u.getRange();
                if (u.isEdgePoint(k.endContainer, k.endOffset) && n.isList(r.nextSibling)) {
                  v._enterPrevent(s);
                  const M = n.createElement("LI"), j = n.createElement("BR");
                  M.appendChild(j), _.parentNode.insertBefore(M, _.nextElementSibling), M.appendChild(r.nextSibling), u.setRange(j, 1, j, 1);
                  break;
                }
                if ((k.commonAncestorContainer.nodeType !== 3 || !k.commonAncestorContainer.nextElementSibling) && n.onlyZeroWidthSpace(_.innerText.trim()) && !n.isListCell(_.nextElementSibling)) {
                  v._enterPrevent(s);
                  let M = null;
                  if (n.isListCell(x.parentNode)) {
                    const j = _.parentNode.parentNode;
                    x = j.parentNode;
                    const $ = n.createElement("LI");
                    $.innerHTML = "<br>", n.copyTagAttributes($, _, l.lineAttrReset), M = $, x.insertBefore(M, j.nextElementSibling);
                  } else {
                    const j = n.isCell(x.parentNode) ? "DIV" : n.isList(x.parentNode) ? "LI" : n.isFormatElement(x.nextElementSibling) && !n.isRangeFormatElement(x.nextElementSibling) ? x.nextElementSibling.nodeName : n.isFormatElement(x.previousElementSibling) && !n.isRangeFormatElement(x.previousElementSibling) ? x.previousElementSibling.nodeName : l.defaultTag;
                    M = n.createElement(j), n.copyTagAttributes(M, _, l.lineAttrReset);
                    const $ = u.detachRangeFormatElement(x, [_], null, !0, !0);
                    $.cc.insertBefore(M, $.ec);
                  }
                  M.innerHTML = "<br>", n.removeItemAllParents(_, null, null), u.setRange(M, 1, M, 1);
                  break;
                }
              }
              if (V) {
                v._enterPrevent(s);
                const k = r === V, M = u.getSelection(), j = r.childNodes, $ = M.focusOffset, te = r.previousElementSibling, K = r.nextSibling;
                if (!n.isClosureFreeFormatElement(V) && j && (k && h.collapsed && j.length - 1 <= $ + 1 && n.isBreak(j[$]) && (!j[$ + 1] || (!j[$ + 2] || n.onlyZeroWidthSpace(j[$ + 2].textContent)) && j[$ + 1].nodeType === 3 && n.onlyZeroWidthSpace(j[$ + 1].textContent)) && $ > 0 && n.isBreak(j[$ - 1]) || !k && n.onlyZeroWidthSpace(r.textContent) && n.isBreak(te) && (n.isBreak(te.previousSibling) || !n.onlyZeroWidthSpace(te.previousSibling.textContent)) && (!K || !n.isBreak(K) && n.onlyZeroWidthSpace(K.textContent)))) {
                  k ? n.removeItem(j[$ - 1]) : n.removeItem(r);
                  const Y = u.appendFormatTag(V, n.isFormatElement(V.nextElementSibling) && !n.isRangeFormatElement(V.nextElementSibling) ? V.nextElementSibling : null);
                  n.copyFormatAttributes(Y, V), u.setRange(Y, 1, Y, 1);
                  break;
                }
                if (k) {
                  w.insertHTML(h.collapsed && n.isBreak(h.startContainer.childNodes[h.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let Y = M.focusNode;
                  const ie = M.focusOffset;
                  V === Y && (Y = Y.childNodes[ie - $ > 1 ? ie - 1 : ie]), u.setRange(Y, 1, Y, 1);
                } else {
                  const Y = M.focusNode.nextSibling, ie = n.createElement("BR");
                  u.insertNode(ie, null, !1);
                  const ce = ie.previousSibling, de = ie.nextSibling;
                  !n.isBreak(Y) && !n.isBreak(ce) && (!de || n.onlyZeroWidthSpace(de)) ? (ie.parentNode.insertBefore(ie.cloneNode(!1), ie), u.setRange(ie, 1, ie, 1)) : u.setRange(de, 0, de, 0);
                }
                v._onShortcutKey = !0;
                break;
              }
              if (h.collapsed && (F || B)) {
                v._enterPrevent(s);
                const k = n.createElement("BR"), M = n.createElement(_.nodeName);
                n.copyTagAttributes(M, _, l.lineAttrReset);
                let j = k;
                do {
                  if (!n.isBreak(r) && r.nodeType === 1) {
                    const $ = r.cloneNode(!1);
                    $.appendChild(j), j = $;
                  }
                  r = r.parentNode;
                } while (_ !== r && _.contains(r));
                M.appendChild(j), _.parentNode.insertBefore(M, F && !B ? _ : _.nextElementSibling), B && u.setRange(k, 1, k, 1);
                break;
              }
              if (_) {
                s.stopPropagation();
                let k, M = 0;
                if (h.collapsed)
                  n.onlyZeroWidthSpace(_) ? k = u.appendFormatTag(_, _.cloneNode(!1)) : k = n.splitElement(h.endContainer, h.endOffset, n.getElementDepth(_));
                else {
                  const j = n.getFormatElement(h.startContainer, null) !== n.getFormatElement(h.endContainer, null), $ = _.cloneNode(!1);
                  $.innerHTML = "<br>";
                  const te = h.commonAncestorContainer, K = te === h.startContainer && te === h.endContainer && n.onlyZeroWidthSpace(te) ? h : u.removeNode();
                  if (k = n.getFormatElement(K.container, null), !k) {
                    n.isWysiwygDiv(K.container) && (v._enterPrevent(s), e.element.wysiwyg.appendChild($), k = $, n.copyTagAttributes(k, _, l.lineAttrReset), u.setRange(k, M, k, M));
                    break;
                  }
                  const Y = n.getRangeFormatElement(K.container);
                  if (k = k.contains(Y) ? n.getChildElement(Y, n.getFormatElement.bind(n)) : k, j) {
                    if (B && !F)
                      k.parentNode.insertBefore($, !K.prevContainer || K.container === K.prevContainer ? k.nextElementSibling : k), k = $, M = 0;
                    else if (M = K.offset, F) {
                      const ie = k.parentNode.insertBefore($, k);
                      B && (k = ie, M = 0);
                    }
                  } else
                    B && F ? (k.parentNode.insertBefore($, K.prevContainer && K.container === K.prevContainer ? k.nextElementSibling : k), k = $, M = 0) : k = n.splitElement(K.container, K.offset, n.getElementDepth(_));
                }
                v._enterPrevent(s), n.copyTagAttributes(k, _, l.lineAttrReset), u.setRange(k, M, k, M);
                break;
              }
            }
            if (y) break;
            if (x && n.getParentElement(x, "FIGCAPTION") && n.getParentElement(x, n.isList) && (v._enterPrevent(s), _ = u.appendFormatTag(_, null), u.setRange(_, 0, _, 0)), C) {
              s.preventDefault(), s.stopPropagation(), u.containerOff(), u.controllersOff();
              const B = e[C], F = B._container, k = F.previousElementSibling || F.nextElementSibling;
              let M = null;
              n.isListCell(F.parentNode) ? M = n.createElement("BR") : (M = n.createElement(n.isFormatElement(k) && !n.isRangeFormatElement(k) ? k.nodeName : l.defaultTag), M.innerHTML = "<br>"), p ? F.parentNode.insertBefore(M, F) : F.parentNode.insertBefore(M, F.nextElementSibling), u.callPlugin(C, function() {
                u.selectComponent(B._element, C) === !1 && u.blur();
              }, null);
            }
            break;
          case 27:
            if (C)
              return s.preventDefault(), s.stopPropagation(), u.controllersOff(), !1;
            break;
        }
        if (p && d === 16) {
          s.preventDefault(), s.stopPropagation();
          const L = u.plugins.table;
          if (L && !L._shift && !L._ref) {
            const z = n.getParentElement(_, n.isCell);
            if (z) {
              L.onTableCellMultiSelect.call(u, z, !0);
              return;
            }
          }
        } else if (p && (n.isOSX_IOS ? g : m) && d === 32) {
          s.preventDefault(), s.stopPropagation();
          const L = u.insertNode(n.createTextNode(" "));
          if (L) {
            u.setRange(L, L.length, L, L.length);
            return;
          }
        }
        if (n.isIE && !m && !g && !y && !v._nonTextKeyCode.test(d) && n.isBreak(h.commonAncestorContainer)) {
          const L = n.createTextNode(n.zeroWidthSpace);
          u.insertNode(L, null, !1), u.setRange(L, 1, L, 1);
        }
        v._directionKeyCode.test(d) && (f.setTimeout(u._editorRange.bind(u), 0), v._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(s) {
      if (s.shiftKey) return;
      let r = u.getSelectionNode();
      const d = function(g, h) {
        if (h || (h = 0), s.preventDefault(), s.stopPropagation(), !g) return;
        let y = u.getFileComponent(g);
        y ? u.selectComponent(y.target, y.pluginName) : (u.setRange(g, h, g, h), u.controllersOff());
      }, p = n.getParentElement(r, "table");
      if (p) {
        const g = n.getParentElement(r, "tr"), h = n.getParentElement(r, "td");
        let y = h, C = h;
        if (h) {
          for (; y && y.firstChild; ) y = y.firstChild;
          for (; C && C.lastChild; ) C = C.lastChild;
        }
        let _ = r;
        for (; _ && _.firstChild; ) _ = _.firstChild;
        const x = _ === y, I = _ === C;
        let L = null, z = 0;
        if (s.keyCode === 38 && x) {
          const N = g && g.previousElementSibling;
          for (N ? L = N.children[h.cellIndex] : L = n.getPreviousDeepestNode(p, u.context.element.wysiwyg); L && L.lastChild; ) L = L.lastChild;
          L && (z = L.textContent.length);
        } else if (s.keyCode === 40 && I) {
          const N = g && g.nextElementSibling;
          for (N ? L = N.children[h.cellIndex] : L = n.getNextDeepestNode(p, u.context.element.wysiwyg); L && L.firstChild; ) L = L.firstChild;
        }
        if (L)
          return d(L, z), !1;
      }
      const m = u.getFileComponent(r);
      if (m) {
        const g = /37|38/.test(s.keyCode), h = /39|40/.test(s.keyCode);
        if (g) {
          const y = n.getPreviousDeepestNode(m.target, u.context.element.wysiwyg);
          d(y, y && y.textContent.length);
        } else if (h) {
          const y = n.getNextDeepestNode(m.target, u.context.element.wysiwyg);
          d(y);
        }
      }
    },
    onKeyUp_wysiwyg: function(s) {
      if (v._onShortcutKey) return;
      u._editorRange();
      const r = s.keyCode, d = s.ctrlKey || s.metaKey || r === 91 || r === 92 || r === 224, p = s.altKey;
      if (u.isReadOnly) {
        !d && v._cursorMoveKeyCode.test(r) && v._applyTagEffects();
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
      const y = u.getFileComponent(h);
      if (!(s.keyCode === 16 || s.shiftKey) && y ? u.selectComponent(y.target, y.pluginName) : u.currentFileComponentInfo && u.controllersOff(), r === 8 && n.isWysiwygDiv(g) && g.textContent === "" && g.children.length === 0) {
        s.preventDefault(), s.stopPropagation(), g.innerHTML = "";
        const L = n.createElement(n.isFormatElement(u._variable.currentNodes[0]) ? u._variable.currentNodes[0] : l.defaultTag);
        L.innerHTML = "<br>", g.appendChild(L), u.setRange(L, 0, L, 0), v._applyTagEffects(), u.history.push(!1);
        return;
      }
      const C = n.getFormatElement(g, null), _ = n.getRangeFormatElement(g, null), x = u._formatAttrsTemp;
      if (x) {
        for (let L = 0, z = x.length; L < z; L++) {
          if (r === 13 && /^id$/i.test(x[L].name)) {
            C.removeAttribute("id");
            continue;
          }
          C.setAttribute(x[L].name, x[L].value);
        }
        u._formatAttrsTemp = null;
      }
      if (!C && m.collapsed && !n.isComponent(g) && !n.isList(g) && u._setDefaultFormat(n.isRangeFormatElement(_) ? "DIV" : l.defaultTag) !== null && (g = u.getSelectionNode()), !d && !p && !v._nonTextKeyCode.test(r) && g.nodeType === 3 && n.zeroWidthRegExp.test(g.textContent) && !(s.isComposing !== void 0 ? s.isComposing : v._IEisComposing)) {
        let L = m.startOffset, z = m.endOffset;
        const N = (g.textContent.substring(0, z).match(v._frontZeroWidthReg) || "").length;
        L = m.startOffset - N, z = m.endOffset - N, g.textContent = g.textContent.replace(n.zeroWidthRegExp, ""), u.setRange(g, L < 0 ? 0 : L, g, z < 0 ? 0 : z);
      }
      v._deleteKeyCode.test(r) && C && n.onlyZeroWidthSpace(C.textContent) && !C.previousElementSibling && (C.innerHTML = "<br>", u.setRange(C, 0, C, 0)), u._charCount(""), !(typeof w.onKeyUp == "function" && w.onKeyUp(s, u) === !1) && !d && !p && !v._historyIgnoreKeyCode.test(r) && u.history.push(!0);
    },
    onScroll_wysiwyg: function(s) {
      u.controllersOff(), u._isBalloon && v._hideToolbar(), typeof w.onScroll == "function" && w.onScroll(s, u);
    },
    onFocus_wysiwyg: function(s) {
      u._antiBlur || (u.hasFocus = !0, f.setTimeout(v._applyTagEffects), u._isInline && v._showToolbarInline(), typeof w.onFocus == "function" && w.onFocus(s, u));
    },
    onBlur_wysiwyg: function(s) {
      u._antiBlur || u._variable.isCodeView || (u.hasFocus = !1, u.effectNode = null, u.controllersOff(), (u._isInline || u._isBalloon) && v._hideToolbar(), u._setKeyEffect([]), u._variable.currentNodes = [], u._variable.currentNodesMap = [], l.showPathLabel && (e.element.navigation.textContent = ""), typeof w.onBlur == "function" && w.onBlur(s, u, this));
    },
    onMouseDown_resizingBar: function(s) {
      s.stopPropagation(), u.submenuOff(), u.controllersOff(), u._variable.resizeClientY = s.clientY, e.element.resizeBackground.style.display = "block";
      function r() {
        e.element.resizeBackground.style.display = "none", c.removeEventListener("mousemove", v._resize_editor), c.removeEventListener("mouseup", r);
      }
      c.addEventListener("mousemove", v._resize_editor), c.addEventListener("mouseup", r);
    },
    _resize_editor: function(s) {
      const r = e.element.editorArea.offsetHeight + (s.clientY - u._variable.resizeClientY), d = r < u._variable.minResizingSize ? u._variable.minResizingSize : r;
      e.element.wysiwygFrame.style.height = e.element.code.style.height = d + "px", u._variable.resizeClientY = s.clientY, n.isResizeObserverSupported || u.__callResizeFunction(d, null);
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
      if (u._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || l.stickyToolbar < 0) return;
      const s = e.element, r = s.editorArea.offsetHeight, d = (this.scrollY || c.documentElement.scrollTop) + l.stickyToolbar, p = v._getEditorOffsets(l.toolbarContainer).top - (u._isInline ? s.toolbar.offsetHeight : 0), m = u._isInline && d - p > 0 ? d - p - e.element.toolbar.offsetHeight : 0;
      d < p ? v._offStickyToolbar() : d + u._variable.minResizingSize >= r + p ? (u._sticky || v._onStickyToolbar(m), s.toolbar.style.top = m + r + p + l.stickyToolbar - d - u._variable.minResizingSize + "px") : d >= p && v._onStickyToolbar(m);
    },
    _getEditorOffsets: function(s) {
      let r = s || e.element.topArea, d = 0, p = 0, m = 0;
      for (; r; )
        d += r.offsetTop, p += r.offsetLeft, m += r.scrollTop, r = r.offsetParent;
      return {
        top: d,
        left: p,
        scroll: m
      };
    },
    _getPageBottomSpace: function() {
      return c.documentElement.scrollHeight - (v._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
    },
    _onStickyToolbar: function(s) {
      const r = e.element;
      !u._isInline && !l.toolbarContainer && (r._stickyDummy.style.height = r.toolbar.offsetHeight + "px", r._stickyDummy.style.display = "block"), r.toolbar.style.top = l.stickyToolbar + s + "px", r.toolbar.style.width = u._isInline ? u._inlineToolbarAttr.width : r.toolbar.offsetWidth + "px", n.addClass(r.toolbar, "se-toolbar-sticky"), u._sticky = !0;
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
      const s = u.getRange(), r = s.startContainer, d = s.endContainer, p = n.getRangeFormatElement(r), m = n.getRangeFormatElement(d), g = n.isCell(p), h = n.isCell(m), y = s.commonAncestorContainer;
      if ((g && !p.previousElementSibling && !p.parentElement.previousElementSibling || h && !m.nextElementSibling && !m.parentElement.nextElementSibling) && p !== m)
        if (!g)
          n.removeItem(n.getParentElement(m, function(x) {
            return y === x.parentNode;
          }));
        else if (!h)
          n.removeItem(n.getParentElement(p, function(x) {
            return y === x.parentNode;
          }));
        else
          return n.removeItem(n.getParentElement(p, function(x) {
            return y === x.parentNode;
          })), u.nativeFocus(), !0;
      const C = r.nodeType === 1 ? n.getParentElement(r, ".se-component") : null, _ = d.nodeType === 1 ? n.getParentElement(d, ".se-component") : null;
      return C && n.removeItem(C), _ && n.removeItem(_), !1;
    },
    onPaste_wysiwyg: function(s) {
      const r = n.isIE ? f.clipboardData : s.clipboardData;
      return r ? v._dataTransferAction("paste", s, r) : !0;
    },
    _setClipboardComponent: function(s, r, d) {
      s.preventDefault(), s.stopPropagation(), d.setData("text/html", r.component.outerHTML);
    },
    onCopy_wysiwyg: function(s) {
      const r = n.isIE ? f.clipboardData : s.clipboardData;
      if (typeof w.onCopy == "function" && w.onCopy(s, r, u) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const d = u.currentFileComponentInfo;
      d && !n.isIE && (v._setClipboardComponent(s, d, r), n.addClass(d.component, "se-component-copy"), f.setTimeout(function() {
        n.removeClass(d.component, "se-component-copy");
      }, 150));
    },
    onSave_wysiwyg: function(s) {
      if (typeof w.onSave == "function") {
        w.onSave(s, u);
        return;
      }
    },
    onCut_wysiwyg: function(s) {
      const r = n.isIE ? f.clipboardData : s.clipboardData;
      if (typeof w.onCut == "function" && w.onCut(s, r, u) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const d = u.currentFileComponentInfo;
      d && !n.isIE && (v._setClipboardComponent(s, d, r), n.removeItem(d.component), u.controllersOff()), f.setTimeout(function() {
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
      let d = null;
      if (s.rangeParent ? (r.startContainer = s.rangeParent, r.startOffset = s.rangeOffset, r.endContainer = s.rangeParent, r.endOffset = s.rangeOffset) : u._wd.caretRangeFromPoint ? d = u._wd.caretRangeFromPoint(s.clientX, s.clientY) : d = u.getRange(), d && (r.startContainer = d.startContainer, r.startOffset = d.startOffset, r.endContainer = d.endContainer, r.endOffset = d.endOffset), r.startContainer === r.endContainer) {
        const p = n.getParentElement(r.startContainer, n.isComponent);
        p && (r.startContainer = p, r.startOffset = 0, r.endContainer = p, r.endOffset = 0);
      }
      u.setRange(r.startContainer, r.startOffset, r.endContainer, r.endOffset);
    },
    _dataTransferAction: function(s, r, d) {
      let p, m;
      if (n.isIE) {
        p = d.getData("Text");
        const g = u.getRange(), h = n.createElement("DIV"), y = {
          sc: g.startContainer,
          so: g.startOffset,
          ec: g.endContainer,
          eo: g.endOffset
        };
        return h.setAttribute("contenteditable", !0), h.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(h), h.focus(), f.setTimeout(function() {
          m = h.innerHTML, n.removeItem(h), u.setRange(y.sc, y.so, y.ec, y.eo), v._setClipboardData(s, r, p, m, d);
        }), !0;
      } else if (p = d.getData("text/plain"), m = d.getData("text/html"), v._setClipboardData(s, r, p, m, d) === !1)
        return r.preventDefault(), r.stopPropagation(), !1;
    },
    _setClipboardData: function(s, r, d, p, m) {
      const g = /class=["']*Mso(Normal|List)/i.test(p) || /content=["']*Word.Document/i.test(p) || /content=["']*OneNote.File/i.test(p) || /content=["']*Excel.Sheet/i.test(p);
      !p ? p = n._HTMLConvertor(d).replace(/\n/g, "<br>") : (p = p.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), g && (p = p.replace(/\n/g, " "), d = d.replace(/\n/g, " ")), p = u.cleanHTML(p, u.pasteTagsWhitelistRegExp, u.pasteTagsBlacklistRegExp));
      const y = u._charCount(u._charTypeHTML ? p : d);
      if (s === "paste" && typeof w.onPaste == "function") {
        const _ = w.onPaste(r, p, y, u);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          p = _;
        }
      }
      if (s === "drop" && typeof w.onDrop == "function") {
        const _ = w.onDrop(r, p, y, u);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          p = _;
        }
      }
      const C = m.files;
      if (C.length > 0 && !g)
        return /^image/.test(C[0].type) && u.plugins.image && w.insertImage(C), !1;
      if (!y)
        return !1;
      if (p)
        return w.insertHTML(p, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(s) {
      if (u.isDisabled || u.isReadOnly) return !1;
      const r = n.getParentElement(s.target, n.isComponent), d = u._lineBreaker.style;
      if (r && !u.currentControllerName) {
        const p = e.element;
        let m = 0, g = p.wysiwyg;
        do
          m += g.scrollTop, g = g.parentElement;
        while (g && !/^(BODY|HTML)$/i.test(g.nodeName));
        const h = p.wysiwyg.scrollTop, y = v._getEditorOffsets(null), C = n.getOffset(r, p.wysiwygFrame).top + h, _ = s.pageY + m + (l.iframe && !l.toolbarContainer ? p.toolbar.offsetHeight : 0), x = C + (l.iframe ? m : y.top), I = n.isListCell(r.parentNode);
        let L = "", z = "";
        if ((I ? !r.previousSibling : !n.isFormatElement(r.previousElementSibling)) && _ < x + 20)
          z = C, L = "t";
        else if ((I ? !r.nextSibling : !n.isFormatElement(r.nextElementSibling)) && _ > x + r.offsetHeight - 20)
          z = C + r.offsetHeight, L = "b";
        else {
          d.display = "none";
          return;
        }
        u._variable._lineBreakComp = r, u._variable._lineBreakDir = L, d.top = z - h + "px", u._lineBreakerButton.style.left = n.getOffset(r).left + r.offsetWidth / 2 - 15 + "px", d.display = "block";
      } else d.display !== "none" && (d.display = "none");
    },
    _enterPrevent: function(s) {
      s.preventDefault(), n.isMobile && u.__focusTemp.focus();
    },
    _onMouseDown_lineBreak: function(s) {
      s.preventDefault();
    },
    _onLineBreak: function(s) {
      s.preventDefault();
      const r = u._variable._lineBreakComp, d = this ? this : u._variable._lineBreakDir, p = n.isListCell(r.parentNode), m = n.createElement(p ? "BR" : n.isCell(r.parentNode) ? "DIV" : l.defaultTag);
      if (p || (m.innerHTML = "<br>"), u._charTypeHTML && !u.checkCharCount(m.outerHTML, "byte-html")) return;
      r.parentNode.insertBefore(m, d === "t" ? r : r.nextSibling), u._lineBreaker.style.display = "none", u._variable._lineBreakComp = null;
      const g = p ? m : m.firstChild;
      u.setRange(g, 1, g, 1), u.history.push(!1);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const s = l.iframe ? u._ww : e.element.wysiwyg;
      n.isResizeObserverSupported && (this._resizeObserver = new f.ResizeObserver(function(r) {
        u.__callResizeFunction(-1, r[0]);
      })), e.element.toolbar.addEventListener("mousedown", v._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", v._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", v.onClick_toolbar, !1), s.addEventListener("mousedown", v.onMouseDown_wysiwyg, !1), s.addEventListener("click", v.onClick_wysiwyg, !1), s.addEventListener(n.isIE ? "textinput" : "input", v.onInput_wysiwyg, !1), s.addEventListener("keydown", v.onKeyDown_wysiwyg, !1), s.addEventListener("keyup", v.onKeyUp_wysiwyg, !1), s.addEventListener("paste", v.onPaste_wysiwyg, !1), s.addEventListener("copy", v.onCopy_wysiwyg, !1), s.addEventListener("cut", v.onCut_wysiwyg, !1), s.addEventListener("drop", v.onDrop_wysiwyg, !1), s.addEventListener("scroll", v.onScroll_wysiwyg, !1), s.addEventListener("focus", v.onFocus_wysiwyg, !1), s.addEventListener("blur", v.onBlur_wysiwyg, !1), v._lineBreakerBind = { a: v._onLineBreak.bind(""), t: v._onLineBreak.bind("t"), b: v._onLineBreak.bind("b") }, s.addEventListener("mousemove", v.onMouseMove_wysiwyg, !1), u._lineBreakerButton.addEventListener("mousedown", v._onMouseDown_lineBreak, !1), u._lineBreakerButton.addEventListener("click", v._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", v._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", v._lineBreakerBind.b, !1), s.addEventListener("touchstart", v.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.addEventListener("touchend", v.onClick_wysiwyg, { passive: !0, useCapture: !1 }), l.height === "auto" && !l.codeMirrorEditor && (e.element.code.addEventListener("keydown", v._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", v._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", v._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(l.height) && l.resizeEnable ? e.element.resizingBar.addEventListener("mousedown", v.onMouseDown_resizingBar, !1) : n.addClass(e.element.resizingBar, "se-resizing-none")), v._setResponsiveToolbar(), n.isResizeObserverSupported && (this._toolbarObserver = new f.ResizeObserver(u.resetResponsiveToolbar)), f.addEventListener("resize", v.onResize_window, !1), l.stickyToolbar > -1 && f.addEventListener("scroll", v.onScroll_window, !1);
    },
    _removeEvent: function() {
      const s = l.iframe ? u._ww : e.element.wysiwyg;
      e.element.toolbar.removeEventListener("mousedown", v._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", v._buttonsEventHandler), e.element.toolbar.removeEventListener("click", v.onClick_toolbar), s.removeEventListener("mousedown", v.onMouseDown_wysiwyg), s.removeEventListener("click", v.onClick_wysiwyg), s.removeEventListener(n.isIE ? "textinput" : "input", v.onInput_wysiwyg), s.removeEventListener("keydown", v.onKeyDown_wysiwyg), s.removeEventListener("keyup", v.onKeyUp_wysiwyg), s.removeEventListener("paste", v.onPaste_wysiwyg), s.removeEventListener("copy", v.onCopy_wysiwyg), s.removeEventListener("cut", v.onCut_wysiwyg), s.removeEventListener("drop", v.onDrop_wysiwyg), s.removeEventListener("scroll", v.onScroll_wysiwyg), s.removeEventListener("mousemove", v.onMouseMove_wysiwyg), u._lineBreakerButton.removeEventListener("mousedown", v._onMouseDown_lineBreak), u._lineBreakerButton.removeEventListener("click", v._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", v._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", v._lineBreakerBind.b), v._lineBreakerBind = null, s.removeEventListener("touchstart", v.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("touchend", v.onClick_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("focus", v.onFocus_wysiwyg), s.removeEventListener("blur", v.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", v._codeViewAutoHeight), e.element.code.removeEventListener("keyup", v._codeViewAutoHeight), e.element.code.removeEventListener("paste", v._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", v.onMouseDown_resizingBar), v._resizeObserver && (v._resizeObserver.unobserve(e.element.wysiwygFrame), v._resizeObserver = null), v._toolbarObserver && (v._toolbarObserver.unobserve(e.element._toolbarShadow), v._toolbarObserver = null), f.removeEventListener("resize", v.onResize_window), f.removeEventListener("scroll", v.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (a.length === 0) {
        a = null;
        return;
      }
      v._responsiveCurrentSize = "default";
      const s = v._responsiveButtonSize = [], r = v._responsiveButtons = { default: a[0] };
      for (let d = 1, p = a.length, m, g; d < p; d++)
        g = a[d], m = g[0] * 1, s.push(m), r[m] = g[1];
      s.sort(function(d, p) {
        return d - p;
      }).unshift("default");
    }
  }, w = {
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
      const r = Ui._createToolBar(c, s, u.plugins, l);
      a = r.responsiveButtons, v._setResponsiveToolbar(), e.element.toolbar.replaceChild(r._buttonTray, e.element._buttonTray);
      const d = Wi(e.element.originElement, u._getConstructed(e.element), l);
      e.element = d.element, e.tool = d.tool, l.iframe && (e.element.wysiwyg = u._wd.body), u._recoverButtonStates(), u._cachingButtons(), u.history._resetCachingButton(), u.effectNode = null, u.hasFocus && v._applyTagEffects(), u.isReadOnly && n.setDisabledButtons(!0, u.resizingDisabledButtons), typeof w.onSetToolbarButtons == "function" && w.onSetToolbarButtons(r._buttonTray.querySelectorAll("button"), u);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(s) {
      v._removeEvent(), u._resetComponents(), n.removeClass(u._styleCommandMap.showBlocks, "active"), n.removeClass(u._styleCommandMap.codeView, "active"), u._variable.isCodeView = !1, u._iframeAuto = null, u.plugins = s.plugins || u.plugins;
      const r = [l, s].reduce(function(g, h) {
        for (let y in h)
          if (n.hasOwn(h, y))
            if (y === "plugins" && h[y] && g[y]) {
              let C = g[y], _ = h[y];
              C = C.length ? C : f.Object.keys(C).map(function(x) {
                return C[x];
              }), _ = _.length ? _ : f.Object.keys(_).map(function(x) {
                return _[x];
              }), g[y] = _.filter(function(x) {
                return C.indexOf(x) === -1;
              }).concat(C);
            } else
              g[y] = h[y];
        return g;
      }, {}), d = e.element, p = d.wysiwyg.innerHTML, m = Ui._setOptions(r, e, l);
      m.callButtons && (t = m.callButtons, u.initPlugins = {}), m.plugins && (u.plugins = i = m.plugins), d._menuTray.children.length === 0 && (this._menuTray = {}), a = m.toolbar.responsiveButtons, u.options = l = r, u.lang = o = l.lang, l.iframe && d.wysiwygFrame.addEventListener("load", function() {
        n._setIframeDocument(this, l), u._setOptionsInit(d, p);
      }), d.editorArea.appendChild(d.wysiwygFrame), l.iframe || u._setOptionsInit(d, p);
    },
    /**
     * @description Set "options.defaultStyle" style.
     * Define the style of the edit area
     * It can also be defined with the "setOptions" method, but the "setDefaultStyle" method does not render the editor again.
     * @param {String} style Style string
     */
    setDefaultStyle: function(s) {
      const r = l._editorStyles = n._setDefaultOptionStyle(l, s), d = e.element;
      d.topArea.style.cssText = r.top, d.code.style.cssText = l._editorStyles.frame, d.code.style.display = "none", l.height === "auto" ? d.code.style.overflow = "hidden" : d.code.style.overflow = "", l.iframe ? (d.wysiwygFrame.style.cssText = r.frame, d.wysiwyg.style.cssText = r.editor) : d.wysiwygFrame.style.cssText = r.frame + r.editor;
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
      return s = typeof s == "string" ? s : l.charCounterType, u.getCharLength(u._charTypeHTML ? e.element.wysiwyg.innerHTML : e.element.wysiwyg.textContent, s);
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
    insertHTML: function(s, r, d, p) {
      if (e.element.wysiwygFrame.contains(u.getSelection().focusNode) || u.focus(), typeof s == "string") {
        r || (s = u.cleanHTML(s, null, null));
        try {
          if (n.isListCell(n.getFormatElement(u.getSelectionNode(), null))) {
            const z = c.createRange().createContextualFragment(s).childNodes;
            u._isFormatData(z) && (s = u._convertListCell(z));
          }
          const g = c.createRange().createContextualFragment(s).childNodes;
          if (d) {
            const L = u._charTypeHTML ? "outerHTML" : "textContent";
            let z = "";
            for (let N = 0, Z = g.length; N < Z; N++)
              z += g[N][L];
            if (!u.checkCharCount(z, null)) return;
          }
          let h, y, C, _, x;
          for (; h = g[0]; ) {
            if (_ && _.nodeType === 3 && y && y.nodeType === 1 && n.isBreak(h)) {
              _ = h, n.removeItem(h);
              continue;
            }
            C = u.insertNode(h, y, !1), y = C.container || C, x || (x = C), _ = h;
          }
          _.nodeType === 3 && y.nodeType === 1 && (y = _);
          const I = y.nodeType === 3 ? C.endOffset || y.textContent.length : y.childNodes.length;
          p ? u.setRange(x.container || x, x.startOffset || 0, y, I) : u.setRange(y, I, y, I);
        } catch (m) {
          if (u.isDisabled || u.isReadOnly) return;
          console.warn("[SUNEDITOR.insertHTML.fail] " + m), u.execCommand("insertHTML", !1, s);
        }
      } else if (n.isComponent(s))
        u.insertComponent(s, !1, d, !1);
      else {
        let m = null;
        (n.isFormatElement(s) || n.isMedia(s)) && (m = n.getFormatElement(u.getSelectionNode(), null)), u.insertNode(s, m, d);
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
        const d = n.createElement("DIV");
        d.innerHTML = r;
        const p = e.element.wysiwyg, m = d.children;
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
      u.isReadOnly = s, n.setDisabledButtons(!!s, u.resizingDisabledButtons), s ? (u.controllersOff(), u.submenuActiveButton && u.submenuActiveButton.disabled && u.submenuOff(), u._moreLayerActiveButton && u._moreLayerActiveButton.disabled && u.moreLayerOff(), u.containerActiveButton && u.containerActiveButton.disabled && u.containerOff(), u.modalForm && u.plugins.dialog.close.call(u), e.element.code.setAttribute("readOnly", "true"), n.addClass(e.element.wysiwygFrame, "se-read-only")) : (e.element.code.removeAttribute("readOnly"), n.removeClass(e.element.wysiwygFrame, "se-read-only")), l.codeMirrorEditor && l.codeMirrorEditor.setOption("readOnly", !!s);
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
        u.controllersOff(), u.modalForm && u.plugins.dialog.close.call(u), e.element.wysiwyg.setAttribute("contenteditable", !1), u.isDisabled = !0, l.codeMirrorEditor ? l.codeMirrorEditor.setOption("readOnly", !0) : e.element.code.setAttribute("disabled", "disabled");
      },
      /**
       * @description Enable the wysiwyg area
       */
      enable: function() {
        e.element.wysiwyg.setAttribute("contenteditable", !0), u.isDisabled = !1, l.codeMirrorEditor ? l.codeMirrorEditor.setOption("readOnly", !1) : e.element.code.removeAttribute("disabled");
      }
    }
  };
  u.functions = w, u.options = l;
  let S = e.element, E = S.originElement, R = S.topArea;
  return E.style.display = "none", R.style.display = "block", l.iframe && S.wysiwygFrame.addEventListener("load", function() {
    n._setIframeDocument(this, l), u._editorInit(!1, l.value), l.value = null;
  }), typeof E.nextElementSibling == "object" ? E.parentNode.insertBefore(R, E.nextElementSibling) : E.parentNode.appendChild(R), S.editorArea.appendChild(S.wysiwygFrame), S = E = R = null, l.iframe || (u._editorInit(!1, l.value), l.value = null), w;
}
const sr = {
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
    re._propertiesInit(), typeof t != "object" && (t = {}), i && (t = [i, t].reduce(function(a, c) {
      for (let f in c)
        if (re.hasOwn(c, f))
          if (f === "plugins" && c[f] && a[f]) {
            let n = a[f], b = c[f];
            n = n.length ? n : Object.keys(n).map(function(u) {
              return n[u];
            }), b = b.length ? b : Object.keys(b).map(function(u) {
              return b[u];
            }), a[f] = b.filter(function(u) {
              return n.indexOf(u) === -1;
            }).concat(n);
          } else
            a[f] = c[f];
      return a;
    }, {}));
    const o = typeof e == "string" ? document.getElementById(e) : e;
    if (!o)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const l = Ui.init(o, t);
    if (l.constructed._top.id && document.getElementById(l.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + l.constructed._top.id + '")');
    return or(Wi(o, l.constructed, l.options), l.pluginCallButtons, l.plugins, l.options.lang, t, l._responsiveButtons);
  }
}, ar = ["innerHTML", "id", "tabindex"], rr = /* @__PURE__ */ ye({
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
    const o = i, l = e, a = X(null), c = X(l.modelValue);
    let f = null, n;
    const b = X(l.focusing), u = (E) => {
      b.value = !0, o("focus", E);
    }, v = (E) => {
      b.value = !1, o("blur", E);
    }, w = (E) => {
      n && clearTimeout(n), n = setTimeout(() => {
        sn(E) === "" ? c.value = "" : c.value = E;
      }, 100);
    }, S = () => {
      let E = {
        //@ts-ignore
        lang: Kl[l.lang] ? Kl[l.lang] : Ni,
        plugins: {
          ...ir
        },
        ...lr
      };
      f = sr.create(l.id, E), f.onChange = (R) => {
        w(R), l.disabled ? f == null || f.disabled() : f == null || f.enabled();
      }, f.onKeyUp = (R, s) => {
        w(s.getContents(!1));
      }, f.onBlur = () => {
        v();
      }, f.onClick = () => {
        u();
      };
    };
    return ue(() => l.modelValue, (E) => c.value = E), ue(c, (E) => o("update:modelValue", E)), zi(() => {
      S();
    }), t({
      doSetValue: (E) => {
        f && f.setContents(E);
      }
    }), (E, R) => (O(), le("div", {
      innerHTML: c.value,
      ref_key: "input",
      ref: a,
      id: E.id,
      tabindex: E.tabindex
    }, null, 8, ar));
  }
}), ur = {
  key: 0,
  class: "lkt-field--searchable-box"
}, cr = ["value", "placeholder"], dr = { key: 0 }, fr = ["title"], hr = /* @__PURE__ */ ye({
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
    searchString: {},
    prop: { default: () => ({}) }
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
    const o = i, l = e, a = l.multiple && l.canTag, c = X(l.searchString), f = X(null), n = X(l.showOptions);
    ue(n, (h) => {
      a || o("update:showOptions", h);
    });
    const b = X(l.focusing), u = X(!1), v = X(!1), w = () => {
      Pt(() => {
        b.value = u.value || v.value, n.value = b.value;
      });
    };
    ue(u, (h) => {
      h && (v.value = !1), w();
    }), ue(v, (h) => {
      h && (u.value = !1), w();
    }), ue(b, (h) => {
      o(h ? "focus" : "blur");
    });
    let S, E;
    const R = (h) => {
      S = setTimeout(() => {
        u.value = !1;
      }, 100);
    }, s = (h) => {
      u.value = !0, a && h.key === "Enter" ? (o("tag", c.value), c.value = "") : ["ArrowDown", "ArrowUp", "Enter"].includes(h.key) ? o("navigate", h) : o("search", c.value);
    }, r = (h) => {
      u.value = !0;
    }, d = (h) => {
      E = setTimeout(() => {
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
        clearTimeout(S), clearTimeout(E), f.value && f.value.focus();
      }
    }), ue(() => l.pickedOptions, () => {
      o("change");
    }, { deep: !0 }), (h, y) => {
      const C = he("lkt-tag"), _ = he("lkt-button");
      return O(), le(He, null, [
        h.searchable && (h.multiple || h.searchMode) || U(a) ? (O(), le("div", ur, [
          h.multiple ? (O(), Q(C, {
            key: 0,
            icon: h.optionsIcon,
            text: h.pickedOptions.length
          }, null, 8, ["icon", "text"])) : h.pickedOptions.length > 0 ? (O(), Q(C, { key: 1 }, {
            default: pe(() => [
              ne(_t, {
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
          Ue(me("input", {
            "onUpdate:modelValue": y[0] || (y[0] = (x) => c.value = x),
            ref_key: "queryField",
            ref: f,
            value: c.value,
            placeholder: h.searchPlaceholder,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: s,
            onBlur: R,
            onFocus: r
          }, null, 40, cr), [
            [Bi, c.value]
          ])
        ])) : se("", !0),
        Ue(ne(_, {
          ref: "selectButton",
          type: U(a) ? "content" : "",
          class: "lkt-field--toggle-button lkt-field--select-button",
          "open-tooltip": n.value,
          "onUpdate:openTooltip": y[1] || (y[1] = (x) => n.value = x),
          onKeyup: p,
          onBlur: d,
          onFocus: m
        }, {
          default: pe(() => [
            U(a) || h.multiple && h.pickedOptions.length > 0 ? (O(), le(He, { key: 0 }, [
              h.multipleDisplayEdition === U(Jt).Count ? (O(), le("div", dr, yt(h.pickedOptions.length), 1)) : (O(), le("ul", {
                key: 1,
                class: Pe(["lkt-field-select-read", `multiple-display-${h.multipleDisplayEdition}`])
              }, [
                (O(!0), le(He, null, et(h.pickedOptions, (x, I) => (O(), le("li", {
                  title: x.label
                }, [
                  ne(_t, {
                    option: h.pickedOptions[I],
                    "option-slot": h.optionSlot,
                    icon: h.optionsIcon,
                    text: h.optionsText,
                    "custom-class": h.optionsClass,
                    modal: h.optionsModal,
                    "modal-data": h.optionsModalData,
                    download: h.optionsDownload,
                    "label-formatter": h.optionsLabelFormatter,
                    editable: h.editable,
                    "is-tag": U(a),
                    prop: h.prop,
                    onClickIcon: g
                  }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "editable", "is-tag", "prop"])
                ], 8, fr))), 256))
              ], 2))
            ], 64)) : !h.multiple && h.pickedOptions.length > 0 ? (O(), Q(_t, {
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
              editable: h.editable,
              prop: h.prop
            }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "editable", "prop"])) : se("", !0)
          ]),
          _: 1
        }, 8, ["type", "open-tooltip"]), [
          [mt, h.multiple || !h.searchable || !h.searchMode]
        ])
      ], 64);
    };
  }
}), pr = { class: "lkt-calc--formula" }, mr = { class: "lkt-calc--custom-pad" }, gr = { class: "lkt-calc--pad" }, vr = { class: "lkt-calc--numeric-pad" }, br = { class: "lkt-calc--math-pad" }, yr = { class: "lkt-calc--advance-math-pad" }, _r = /* @__PURE__ */ ye({
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
    const i = t, o = e, l = X(o.modelValue), a = X(null);
    ue(l, (m) => i("update:modelValue", m));
    const c = X(o.focusing), f = X(null);
    let n;
    const b = () => {
      clearTimeout(n), a.value && typeof a.value.focus == "function" && a.value.focus();
    }, u = (m) => {
      l.value += "" + m, b();
    }, v = (m) => {
      l.value += " " + m + " ", b();
    }, w = (m) => {
      l.value += " " + m + "(", b();
    }, S = () => {
      l.value += " sqrt(", b();
    }, E = (m) => {
      l.value += "" + m, b();
    }, R = () => {
      l.value += ".", b();
    }, s = () => {
      l.value += " ", b();
    }, r = (m) => {
      l.value += "" + m.value, b();
    }, d = () => {
      c.value = !0;
    }, p = () => {
      n = setTimeout(() => {
        c.value = !1;
      }, 100);
    };
    return ue(c, (m) => {
      i(m ? "focus" : "blur");
    }), (m, g) => {
      const h = he("lkt-button"), y = he("lkt-tooltip");
      return O(), le("div", {
        ref_key: "container",
        ref: f
      }, [
        me("div", pr, [
          Ue(me("input", {
            type: "text",
            ref_key: "input",
            ref: a,
            "onUpdate:modelValue": g[0] || (g[0] = (C) => l.value = C),
            onFocus: d,
            onBlur: p
          }, null, 544), [
            [Bi, l.value]
          ])
        ]),
        m.editable ? (O(), Q(y, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--calc",
          modelValue: c.value,
          "onUpdate:modelValue": g[27] || (g[27] = (C) => c.value = C),
          referrer: f.value,
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: pe(() => [
            me("div", mr, [
              (O(!0), le(He, null, et(m.options, (C) => (O(), Q(h, {
                icon: C.icon,
                text: C.label,
                onClick: (_) => r(C)
              }, null, 8, ["icon", "text", "onClick"]))), 256))
            ]),
            me("div", gr, [
              me("div", vr, [
                ne(h, {
                  onClick: g[1] || (g[1] = (C) => u(7)),
                  text: "7",
                  class: "lkt-calc--btn-number"
                }),
                ne(h, {
                  onClick: g[2] || (g[2] = (C) => u(8)),
                  text: "8",
                  class: "lkt-calc--btn-number"
                }),
                ne(h, {
                  onClick: g[3] || (g[3] = (C) => u(9)),
                  text: "9",
                  class: "lkt-calc--btn-number"
                }),
                ne(h, {
                  onClick: g[4] || (g[4] = (C) => u(4)),
                  text: "4",
                  class: "lkt-calc--btn-number"
                }),
                ne(h, {
                  onClick: g[5] || (g[5] = (C) => u(5)),
                  text: "5",
                  class: "lkt-calc--btn-number"
                }),
                ne(h, {
                  onClick: g[6] || (g[6] = (C) => u(6)),
                  text: "6",
                  class: "lkt-calc--btn-number"
                }),
                ne(h, {
                  onClick: g[7] || (g[7] = (C) => u(1)),
                  text: "1",
                  class: "lkt-calc--btn-number"
                }),
                ne(h, {
                  onClick: g[8] || (g[8] = (C) => u(2)),
                  text: "2",
                  class: "lkt-calc--btn-number"
                }),
                ne(h, {
                  onClick: g[9] || (g[9] = (C) => u(3)),
                  text: "3",
                  class: "lkt-calc--btn-number"
                }),
                ne(h, {
                  onClick: g[10] || (g[10] = (C) => R()),
                  text: "."
                }),
                ne(h, {
                  onClick: g[11] || (g[11] = (C) => u(0)),
                  text: "0",
                  class: "lkt-calc--btn-number"
                }),
                ne(h, {
                  onClick: g[12] || (g[12] = (C) => s()),
                  text: " "
                })
              ]),
              me("div", br, [
                ne(h, {
                  onClick: g[13] || (g[13] = (C) => E("[")),
                  text: "["
                }),
                ne(h, {
                  onClick: g[14] || (g[14] = (C) => E("]")),
                  text: "]"
                }),
                ne(h, {
                  onClick: g[15] || (g[15] = (C) => E("(")),
                  text: "("
                }),
                ne(h, {
                  onClick: g[16] || (g[16] = (C) => E(")")),
                  text: ")"
                }),
                ne(h, {
                  onClick: g[17] || (g[17] = (C) => v("+")),
                  text: "+"
                }),
                ne(h, {
                  onClick: g[18] || (g[18] = (C) => v("-")),
                  text: "−"
                }),
                ne(h, {
                  onClick: g[19] || (g[19] = (C) => v("*")),
                  text: "×"
                }),
                ne(h, {
                  onClick: g[20] || (g[20] = (C) => v("/")),
                  text: "÷"
                })
              ]),
              me("div", yr, [
                ne(h, {
                  onClick: g[21] || (g[21] = (C) => S()),
                  text: "√"
                }),
                ne(h, {
                  onClick: g[22] || (g[22] = (C) => w("log")),
                  text: "log"
                }),
                ne(h, {
                  onClick: g[23] || (g[23] = (C) => w("ln")),
                  text: "ln"
                }),
                ne(h, {
                  onClick: g[24] || (g[24] = (C) => w("sin")),
                  text: "sin"
                }),
                ne(h, {
                  onClick: g[25] || (g[25] = (C) => w("cos")),
                  text: "cos"
                }),
                ne(h, {
                  onClick: g[26] || (g[26] = (C) => w("tan")),
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
}), Cr = /* @__PURE__ */ ye({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = J(() => {
      let c = El(t.validation.code, t.stack), f = {
        min: t.validation.min,
        max: t.validation.max,
        value: t.validation.equalToValue
      }, n = El(t.validation.status + "-" + t.validation.code, t.stack);
      return n && (c = n), c ? c.startsWith("__:") ? an(c.substring(3), f) : mo(c, f, ":", "") : t.validation.code;
    }), o = J(() => ee.validationIconSlot !== ""), l = J(() => ee.validationIconSlot), a = J(() => {
      let c = [];
      return c.push("code-" + t.validation.code), c.push("is-" + t.validation.status), c.join(" ");
    });
    return (c, f) => (O(), le("div", {
      class: Pe(["lkt-field-validation-message", a.value])
    }, [
      o.value ? (O(), Q(Nt(l.value), { key: 0 })) : se("", !0),
      Rt(" " + yt(i.value), 1)
    ], 2));
  }
}), wr = {
  key: 0,
  class: "lkt-field-validation-info"
}, kr = /* @__PURE__ */ ye({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = X(t.items), o = X(!1);
    return ue(() => t.items, (l) => {
      o.value = !0, Pt(() => o.value = !1);
    }, { deep: !0 }), (l, a) => o.value ? se("", !0) : (O(), le("div", wr, [
      (O(!0), le(He, null, et(i.value, (c) => (O(), Q(Cr, {
        validation: c,
        stack: l.stack,
        key: c.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), xr = ["id"], Sr = /* @__PURE__ */ ye({
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
    const i = t, o = e, l = X(o.modelValue), a = X(o.focusing);
    let c, f;
    const n = X({}), b = () => {
      clearTimeout(f), f = setTimeout(() => {
        n.value = {
          query: l.value
        };
      }, 300);
    }, u = () => {
      a.value = !0;
    }, v = () => {
      c = setTimeout(() => {
        a.value = !1;
      }, 100);
    };
    ue(a, (S) => {
      i(S ? "focus" : "blur");
    });
    const w = () => {
      clearTimeout(c), setTimeout(() => {
        u();
      }, 100);
    };
    return (S, E) => {
      const R = he("lkt-table"), s = he("lkt-tooltip");
      return O(), le(He, null, [
        Ue(me("input", {
          id: S.id,
          type: "text",
          ref: "input",
          "onUpdate:modelValue": E[0] || (E[0] = (r) => l.value = r),
          onFocus: u,
          onBlur: v,
          onKeyup: b
        }, null, 40, xr), [
          [Bi, l.value]
        ]),
        S.editable && S.hadFirstFocus ? (O(), Q(s, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--dropdown lkt-field--search-results",
          modelValue: a.value,
          "onUpdate:modelValue": E[1] || (E[1] = (r) => a.value = r),
          referrer: S.container,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: pe(() => [
            ne(R, Le({
              type: U(fn).Ul,
              itemsContainerClass: "lkt-field--dropdown-options",
              paginator: {
                resource: S.optionsResource,
                resourceData: n.value
              }
            }, {
              onPage: w,
              onClick: w
            }), {
              item: pe(({ item: r, index: d, isLoading: p, canCreate: m, canUpdate: g, canDrop: h, canRead: y, doDrop: C }) => [
                ne(_t, {
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
}), Er = {
  key: 0,
  class: "lkt-field-main"
}, Tr = {
  key: 3,
  class: "lkt-field--read-value"
}, Lr = ["innerHTML", "title"], zr = ["title"], Br = { key: 0 }, Nr = ["title"], Rr = ["innerHTML"], Ar = ["innerHTML", "title"], Ir = ["innerHTML", "title"], Mr = /* @__PURE__ */ ye({
  __name: "LktFieldValue",
  props: {
    type: { default: q.Text },
    value: {},
    label: {},
    title: { default: "" },
    fileName: {},
    valueSlot: { default: "" },
    emptyValueSlot: { default: "" },
    slotData: { default: () => ({}) },
    download: { type: [String, Function], default: "" },
    multiple: { type: Boolean, default: !1 },
    multipleDisplay: { default: Jt.List },
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
    prop: { default: () => ({}) },
    readModeConfig: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    var b;
    const i = t, o = Zi(), l = e, a = () => i("click"), c = J(() => {
      switch (l.type) {
        case q.Select:
          if (l.multiple && Array.isArray(l.value) && l.value.length > 0 || l.multiple && l.multipleDisplay === Jt.Count || !l.multiple && l.value) return "";
          break;
        case q.Date:
          if (l.value !== "") return "";
          break;
        default:
          if (l.value !== "") return "";
      }
      return ee.customValueSlots[l.emptyValueSlot] ?? ee.defaultEmptyValueSlot;
    }), f = J(() => ee.customValueSlots[l.valueSlot] ?? "");
    let n = l.value;
    return l.type === q.Select && l.multiple && !Array.isArray(n) && (n = []), (l.type === q.Textarea || l.type === q.Text) && (typeof ((b = l.readModeConfig) == null ? void 0 : b.textMaxLength) < "u" && n.length > l.readModeConfig.textMaxLength ? n = n.substring(0, l.readModeConfig.textMaxLength) + "..." : typeof ee.readTextMaxLength < "u" && n.length > ee.readTextMaxLength && (n = n.substring(0, ee.readTextMaxLength) + "...")), (u, v) => {
      const w = he("lkt-image"), S = he("lkt-button"), E = he("lkt-anchor"), R = he("lkt-tag");
      return O(), le("div", {
        class: "lkt-field--read",
        onClick: a
      }, [
        U(o).value ? Qe(u.$slots, "value", {
          key: 0,
          value: U(n),
          title: u.title,
          data: u.slotData
        }) : c.value ? (O(), Q(Nt(c.value), {
          key: 1,
          data: u.slotData
        }, null, 8, ["data"])) : f.value ? (O(), Q(Nt(f.value), {
          key: 2,
          value: U(n),
          title: u.title,
          data: u.slotData
        }, null, 8, ["value", "title", "data"])) : (O(), le(He, { key: 3 }, [
          u.type === U(q).File || u.type === U(q).Image ? (O(), le("div", Er, [
            ne(S, {
              class: "lkt-field--toggle-button",
              text: u.type === U(q).File ? u.fileName : "",
              disabled: ""
            }, {
              default: pe(() => [
                u.type === U(q).Image ? (O(), Q(w, {
                  key: 0,
                  src: U(n),
                  class: "lkt-field--image-cover"
                }, null, 8, ["src"])) : se("", !0),
                u.type === U(q).Image ? (O(), Q(w, {
                  key: 1,
                  src: U(n),
                  class: "lkt-field--image-main"
                }, null, 8, ["src"])) : se("", !0)
              ]),
              _: 1
            }, 8, ["text"])
          ])) : u.type === U(q).Email ? (O(), Q(E, {
            key: 1,
            type: "mail",
            class: "lkt-field--read-value",
            title: u.title,
            to: U(n)
          }, {
            default: pe(() => [
              Rt(yt(U(n)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : u.type === U(q).Tel ? (O(), Q(E, {
            key: 2,
            type: "tel",
            class: "lkt-field--read-value",
            title: u.title,
            to: U(n)
          }, {
            default: pe(() => [
              Rt(yt(U(n)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : U(vt).includes(u.type) ? (O(), le("div", Tr, [
            ne(R, {
              icon: U(n) ? "lkt-icn-check" : "lkt-icn-cancel",
              "featured-text": u.label,
              title: u.title
            }, null, 8, ["icon", "featured-text", "title"])
          ])) : u.type === U(q).Date ? (O(), le("div", {
            key: 4,
            class: "lkt-field--read-value",
            innerHTML: U(n),
            title: u.title
          }, null, 8, Lr)) : u.type === U(q).Select ? (O(), le("div", {
            key: 5,
            class: "lkt-field--read-value",
            title: u.title
          }, [
            u.multiple ? (O(), le(He, { key: 0 }, [
              u.multipleDisplay === U(Jt).Count ? (O(), le("div", Br, yt(U(n).length), 1)) : U(n).length > 0 ? (O(), le("ul", {
                key: 1,
                class: Pe(["lkt-field-select-read", `multiple-display-${u.multipleDisplay}`])
              }, [
                (O(!0), le(He, null, et(U(n), (s, r) => {
                  var d;
                  return O(), le("li", {
                    title: (d = U(n)[r]) == null ? void 0 : d.label
                  }, [
                    ne(_t, {
                      option: U(n)[r],
                      "option-slot": u.optionSlot,
                      icon: u.optionsIcon,
                      text: u.optionsText,
                      "custom-class": u.optionsClass,
                      modal: u.optionsModal,
                      "modal-data": u.optionsModalData,
                      download: u.optionsDownload,
                      "label-formatter": u.optionsLabelFormatter,
                      prop: u.prop
                    }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "prop"])
                  ], 8, Nr);
                }), 256))
              ], 2)) : se("", !0)
            ], 64)) : U(n).length > 0 ? (O(), Q(_t, {
              key: 1,
              option: U(n)[0],
              "option-slot": u.optionSlot,
              icon: u.optionsIcon,
              text: u.optionsText,
              "custom-class": u.optionsClass,
              modal: u.optionsModal,
              "modal-data": u.optionsModalData,
              download: u.optionsDownload,
              "label-formatter": u.optionsLabelFormatter,
              prop: u.prop
            }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "prop"])) : se("", !0)
          ], 8, zr)) : u.modal ? (O(), Q(S, {
            key: 6,
            class: "lkt-field--read-value",
            title: u.title,
            modal: u.modal,
            "modal-key": u.modalKey,
            "modal-data": u.modalData
          }, {
            default: pe(() => [
              me("div", { innerHTML: U(n) }, null, 8, Rr)
            ]),
            _: 1
          }, 8, ["title", "modal", "modal-key", "modal-data"])) : u.download ? (O(), Q(_t, {
            key: 7,
            class: "lkt-field--read-value",
            option: { value: "", label: U(n) },
            download: u.download,
            text: u.optionsText,
            "custom-class": u.optionsClass,
            prop: u.prop
          }, null, 8, ["option", "download", "text", "custom-class", "prop"])) : u.type === U(q).Number ? (O(), le("div", {
            key: 8,
            class: "lkt-field--read-value",
            innerHTML: u.title,
            title: u.title
          }, null, 8, Ar)) : (O(), le("div", {
            key: 9,
            class: "lkt-field--read-value",
            innerHTML: U(n),
            title: u.title
          }, null, 8, Ir))
        ], 64))
      ]);
    };
  }
}), Dr = ["name", "id", "disabled", "readonly", "placeholder", "accept"], Vr = {
  key: 2,
  class: "lkt-button lkt-field--toggle-button"
}, Hr = { class: "lkt-grid-1" }, Fr = /* @__PURE__ */ ye({
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
    const o = i, l = e, a = X(null), c = X(null), f = X(l.modelValue), n = X(l.fileName), b = X(l.uploading), u = (S) => {
      let E = S.target;
      if (console.log("onFileInputChange: ", E.files[0], l.resource), E.files && E.files[0]) {
        n.value = E.files[0].name;
        const R = new FileReader();
        R.onload = (s) => {
          if (f.value = s.target.result, l.resource) {
            b.value = !0, o("uploading");
            let r = JSON.parse(JSON.stringify(l.resourceData));
            r.files = E.files[0], Ei(l.resource, r).then((d) => {
              if (b.value = !1, console.log("upload-success: ", d), !d.success) {
                o("upload-error", d);
                return;
              }
              f.value = d.data, o("upload-success", d);
            }).catch((d) => {
              console.log("upload-error: ", d), b.value = !1, o("upload-error", d);
            });
          }
        }, R.readAsDataURL(E.files[0]);
      }
      o("change", S);
    };
    ue(f, (S) => o("update:modelValue", S)), ue(n, (S) => o("update:fileName", S)), t({
      click: () => {
        var S;
        (S = c.value) == null || S.click();
      }
    });
    const v = X(typeof l.fileBrowserConfig == "object" && Object.keys(l.fileBrowserConfig).length > 0), w = (S) => {
      f.value = S[0].src, o("picked-files", S);
    };
    return (S, E) => {
      const R = he("lkt-image"), s = he("lkt-button");
      return O(), le(He, null, [
        me("input", {
          ref_key: "inputElement",
          ref: a,
          type: "file",
          name: S.name,
          id: S.id,
          disabled: S.disabled,
          readonly: S.readonly,
          placeholder: S.placeholder,
          accept: S.accept,
          onChange: u
        }, null, 40, Dr),
        v.value ? S.isImage ? S.isImage ? (O(), le("div", Vr, [
          S.isImage ? (O(), Q(R, {
            key: 0,
            src: f.value,
            class: "lkt-field--image-cover"
          }, null, 8, ["src"])) : se("", !0),
          S.isImage ? (O(), Q(R, {
            key: 1,
            src: f.value,
            class: "lkt-field--image-main"
          }, {
            overlay: pe(() => [
              me("div", null, [
                me("div", Hr, [
                  se("", !0),
                  ne(s, Le({ ref: "fileBrowserButtonRef" }, {
                    text: "Explore files",
                    icon: "lkt-icn-search",
                    disabled: S.disabled,
                    modal: "lkt-file-browser",
                    modalData: {
                      fileBrowserConfig: S.fileBrowserConfig,
                      onConfirmSelection: w
                    }
                  }), null, 16)
                ])
              ])
            ]),
            _: 1
          }, 8, ["src"])) : se("", !0)
        ])) : se("", !0) : (O(), Q(s, {
          key: 1,
          ref_key: "buttonRef",
          ref: c,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: n.value,
          disabled: S.disabled
        }, null, 8, ["click-ref", "text", "disabled"])) : (O(), Q(s, {
          key: 0,
          ref_key: "buttonRef",
          ref: c,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: S.isImage ? "" : n.value,
          disabled: S.disabled
        }, {
          default: pe(() => [
            S.isImage ? (O(), Q(R, {
              key: 0,
              src: f.value,
              class: "lkt-field--image-cover"
            }, null, 8, ["src"])) : se("", !0),
            S.isImage ? (O(), Q(R, {
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
}), Or = { class: "lkt-calendar" }, Pr = { class: "calendar" }, Ur = { class: "lkt-calendar--header-grid" }, Wr = ["innerHTML"], Zr = {
  key: 0,
  class: "lkt-calendar--day-grid"
}, $r = { class: "lkt-calendar--day lkt-calendar--filling-day" }, qr = /* @__PURE__ */ ye({
  __name: "LktCalendar",
  props: {
    modelValue: {}
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const i = t, o = e, l = X(o.modelValue);
    ue(() => o.modelValue, (p) => l.value = p, { deep: !0 }), ue(l, (p) => i("update:modelValue", p));
    const a = X(/* @__PURE__ */ new Date()), c = X(/* @__PURE__ */ new Date());
    $i(l.value) && typeof l.value < "u" && (c.value = new Date(l.value.getFullYear(), l.value.getMonth(), l.value.getDate()));
    const f = X(c.value.getFullYear()), n = X(c.value.getMonth()), b = X(!1), u = X(Ot("Y-m", c.value)), v = J(() => new Date(f.value, n.value + 1, 0).getDate()), w = J(() => new Date(f.value, n.value, 1).getDay()), S = () => {
      n.value > 11 && (n.value = 0, f.value += 1), n.value += 1, c.value.setFullYear(f.value, n.value), c.value = new Date(c.value), u.value = Ot("Y-m", c.value);
    }, E = () => {
      n.value < 0 && (n.value = 11, f.value -= 1), n.value -= 1, c.value.setFullYear(f.value, n.value), c.value = new Date(c.value), u.value = Ot("Y-m", c.value);
    }, R = (p) => typeof l.value > "u" || l.value.getFullYear() !== f.value || l.value.getMonth() !== n.value ? !1 : l.value.getDate() === p, s = (p) => typeof l.value > "u" || a.value.getFullYear() !== f.value || a.value.getMonth() !== n.value ? !1 : a.value.getDate() === p, r = (p) => ({
      "is-picked": R(p),
      "is-today": s(p)
    }), d = (p) => {
      var m;
      (m = l.value) == null || m.setFullYear(f.value, n.value, p), l.value = new Date(l.value);
    };
    return (p, m) => {
      const g = he("lkt-button");
      return O(), le("div", Or, [
        me("div", Pr, [
          me("header", Ur, [
            ne(g, {
              class: "lkt-calendar--day",
              onClick: E
            }, {
              default: pe(() => m[0] || (m[0] = [
                Rt("◀")
              ])),
              _: 1
            }),
            me("div", {
              class: "lkt-calendar--header-text",
              innerHTML: u.value
            }, null, 8, Wr),
            ne(g, {
              class: "lkt-calendar--day",
              onClick: S
            }, {
              default: pe(() => m[1] || (m[1] = [
                Rt("▶")
              ])),
              _: 1
            })
          ]),
          b.value ? se("", !0) : (O(), le("div", Zr, [
            m[2] || (m[2] = fo('<div class="lkt-calendar--day lkt-calendar--week-day">Su</div><div class="lkt-calendar--day lkt-calendar--week-day">Mo</div><div class="lkt-calendar--day lkt-calendar--week-day">Tu</div><div class="lkt-calendar--day lkt-calendar--week-day">We</div><div class="lkt-calendar--day lkt-calendar--week-day">Th</div><div class="lkt-calendar--day lkt-calendar--week-day">Fr</div><div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>', 7)),
            (O(!0), le(He, null, et(w.value, (h) => (O(), le("div", $r))), 256)),
            (O(!0), le(He, null, et(v.value, (h) => (O(), Q(g, {
              class: Pe(["lkt-calendar--day", r(h)]),
              text: h.toString(),
              onClick: () => d(h)
            }, null, 8, ["class", "text", "onClick"]))), 256))
          ]))
        ]),
        m[3] || (m[3] = me("div", { class: "display-selected" }, [
          me("p", { class: "selected" })
        ], -1))
      ]);
    };
  }
}), jr = /* @__PURE__ */ ye({
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
    const i = t, o = e, l = X(void 0), a = X(""), c = X(o.modelValue), f = J(() => ee.dateReadFormat ? ee.dateReadFormat : ee.langDateReadFormat[o.lang] ? ee.langDateReadFormat[o.lang] : ee.defaultDateReadFormat ? ee.defaultDateReadFormat : "Y-m-d"), n = (u) => {
      let v = new Date(u);
      $i(v) && (l.value = v);
    }, b = () => {
      a.value = gn(l.value, f.value);
    };
    return ue(() => o.modelValue, (u) => {
      c.value = u, n(u);
    }), ue(c, (u) => i("update:modelValue", u)), ue(l, (u) => {
      typeof u > "u" ? c.value = "" : c.value = Ot("Y-m-d", u), b();
    }, { deep: !0 }), zi(() => {
      n(o.modelValue), b();
    }), (u, v) => {
      const w = he("lkt-button");
      return O(), Q(w, {
        type: U(Ut).Tooltip,
        class: "lkt-field--toggle-button",
        text: a.value,
        tooltip: {
          class: "lkt-field--date--tooltip",
          locationY: U(dn).Bottom,
          locationX: U(cn).LeftCorner
        }
      }, {
        tooltip: pe(() => [
          ne(qr, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (S) => l.value = S)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["type", "text", "tooltip"]);
    };
  }
}), on = (e, t) => typeof e == "object" && !Array.isArray(e) ? e[t] : e, Oi = (e, t, i) => {
  if (t) {
    let o = '<i class="' + t + '"></i>';
    i ? e += o : e = o + e;
  }
  return e;
}, Gr = { key: 1 }, Un = /* @__PURE__ */ ye({
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
    const o = X(e.modelValue), l = (a, c) => {
    };
    return (a, c) => {
      const f = he("lkt-button");
      return O(), Q(f, {
        modal: a.modal,
        "modal-key": a.modalKey,
        "modal-data": a.modalData,
        onClick: l
      }, {
        default: pe(() => [
          o.value ? Qe(a.$slots, "item", {
            key: 0,
            item: o.value
          }) : (O(), le("p", Gr, "No data"))
        ]),
        _: 3
      }, 8, ["modal", "modal-key", "modal-data"]);
    };
  }
}), Kr = /* @__PURE__ */ ye({
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
    const t = Zi(), i = e, o = X(i.modelValue), l = J(() => typeof i.max == "boolean" || o.value.length < i.max ? ["modal-create"] : []);
    return (a, c) => {
      const f = he("lkt-table");
      return O(), Q(f, {
        type: "item",
        modelValue: o.value,
        "onUpdate:modelValue": c[0] || (c[0] = (n) => o.value = n),
        perms: l.value,
        "edit-mode": a.editable,
        "new-value-generator": () => {
        },
        modal: a.modal,
        "modal-key": a.modalKey,
        "modal-data": a.modalData,
        "required-items-for-top-create": 999999
      }, {
        item: pe(({ item: n, index: b, isLoading: u, canCreate: v, canRead: w, canUpdate: S, canDrop: E, doDrop: R }) => [
          ne(Un, {
            modelValue: o.value[b],
            "onUpdate:modelValue": (s) => o.value[b] = s,
            "item-type": a.itemType
          }, Bt({ _: 2 }, [
            U(t).item ? {
              name: "item",
              fn: pe(({ item: s }) => [
                Qe(a.$slots, "item", {
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
}), Yr = /* @__PURE__ */ ye({
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
    const i = t, o = e, l = J(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), a = () => i("click");
    return (c, f) => {
      const n = he("lkt-button");
      return O(), Q(n, Le(c.config, {
        type: c.config.type ? c.config.type : U(Ut).FileUpload,
        resource: c.config.resource ?? c.fileUploadHttp.resource,
        "resource-data": c.config.resourceData ?? c.fileUploadHttp.data,
        text: c.insideEllipsis ? c.config.text : "",
        class: [l.value, "lkt-field--btn-file-upload"],
        icon: "lkt-icn-upload",
        onClick: a
      }), null, 16, ["type", "resource", "resource-data", "text", "class"]);
    };
  }
}), Xr = ["data-show-ui", "data-labeled"], Jr = ["for", "innerHTML"], Qr = { class: "lkt-field-content" }, eu = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, tu = {
  key: 1,
  class: "lkt-field--icon"
}, iu = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], lu = ["name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], nu = {
  key: 4,
  class: "lkt-field--info-nav"
}, ou = { key: 0 }, su = ["data-index", "onClick"], At = /* @__PURE__ */ ye({
  __name: "LktField",
  props: /* @__PURE__ */ ho({
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
  }, xo(So)),
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
    "picked-files"
  ],
  setup(e, { expose: t, emit: i }) {
    const o = i, l = Zi(), a = e, c = go(16);
    let f = gt(a.modal, a.prop), n = gt(a.modalKey, a.prop), b = gt(a.icon, a.prop), u = gt(a.download, a.prop), v = gt(a.itemType, a.prop);
    !f && typeof v != "function" && v && typeof ee.modalPerItemType[v] < "u" && (f = ee.modalPerItemType[v]);
    const w = X(null);
    let S = a.featuredButton, E = a.modelValue;
    a.multiple && yo.includes(a.type) ? (!E || !Array.isArray(E)) && (E = []) : vt.includes(a.type) ? typeof E != "boolean" && (E = !1) : a.type === q.Date && !b ? b = ee.defaultDateIcon : a.type === q.Number && a.canStep && S === "" && (S = ee.defaultNumberFeaturedButton);
    const R = X(E), s = X(E), r = X(a.valid), d = X(!1), p = X(!1), m = X(!1), g = X(!1), h = X([]), y = X(!a.readMode), C = X(a.fileName), _ = X(a.fileName), x = X(null), I = X(null), L = X(null), z = X(!1), N = X(!1), Z = X(!1), W = X(""), H = X(-1), D = X([]), P = X(!1), A = X(!1), V = X(!1), B = J(() => rn.value), F = J(() => (B.value, ee.dateReadFormat ? ee.dateReadFormat : ee.langDateReadFormat[B.value] ? ee.langDateReadFormat[B.value] : ee.defaultDateReadFormat ? ee.defaultDateReadFormat : "Y-m-d")), k = [q.Card, q.Elements].includes(a.type) ? s : X(on(s.value, B.value)), M = X(k), j = X([]), $ = X([]), te = () => {
      const T = (G) => {
        var xe;
        if ($.value = Fi(j.value, G, !0, (xe = a.optionsConfig) == null ? void 0 : xe.filter), a.multiple) {
          for (let Be in k.value) {
            let Ee;
            a.optionValueType === "option" ? Ee = Yt(j.value, k.value[Be].value) : Ee = Yt(j.value, k.value[Be]), typeof Ee < "u" && (D.value.length === 0 ? D.value.push(Ee) : D.value.splice(Be, 1, Ee));
          }
          return;
        }
        let oe;
        a.optionValueType === "option" ? oe = Yt(j.value, k.value.map((Be) => Be.value)) : oe = Yt(j.value, k.value), typeof oe < "u" && (D.value.length === 0 ? D.value.push(oe) : D.value.splice(0, 1, oe));
      };
      a.type === q.Text ? T(k.value) : a.type === q.Select && T(W.value);
    }, K = J(() => a.type === q.Date), Y = J(() => a.type === q.File), ie = J(() => a.type === q.Image), ce = J(() => a.type === q.Textarea ? "textarea" : a.type === q.Html ? "div" : "input"), de = J(() => a.type === q.Date ? s.value !== R.value : k.value !== M.value), ae = J(() => typeof a.disabled == "function" ? a.disabled(a.prop) : a.disabled), ge = J(() => {
      let T = 0;
      return Xi.value && ++T, Ji.value && ++T, Qi.value && ++T, el.value && ++T, il.value && ++T, ll.value && ++T, tl.value && ++T, St.value && ++T, Gi.value && ++T, (a.customButtonText || a.customButtonClass) && ++T, T > 0 && a.type === q.Textarea || T > 0 && a.type === q.Html || T > 0 && a.infoButtonEllipsis ? 1 : T;
    }), Te = J(() => Ri.value && S === "i18n" || Zt.value && S === "password" || Ze.value && S === "subtract"), Fe = J(() => ge.value > 0), be = J(() => a.autocomplete === !0 ? "on" : "off"), ze = J(() => a.type === q.Date ? s.value !== "" : k.value !== ""), ke = J(() => a.type === q.Password && d.value === !0 ? "text" : a.type === q.Email ? "email" : a.type === q.Password ? "password" : a.type === q.Number ? "number" : a.type === q.Tel ? "tel" : a.type === q.Search ? "search" : a.type === q.Color ? "color" : a.type === q.Range ? "range" : "text"), tt = J(() => {
      var G;
      const T = [];
      return T.push(`is-${a.type}`), vt.includes(a.type) && (T.push("is-boolean"), k.value && T.push("is-checked")), de.value && T.push("is-changed"), ae.value && T.push("is-disabled"), a.multiple && T.push("is-multiple"), Te.value && T.push("with-atn-btn"), Fe.value && T.push("with-info-btn"), a.mandatory && y.value && T.push("is-mandatory-field"), y.value && p.value && T.push("has-focus"), z.value && T.push("show-options"), a.searchable && P.value && T.push("is-searching"), a.hidden && T.push("lkt-hidden-field"), a.type !== q.Range && ((G = a.validation) == null ? void 0 : G.type) === vl.Auto && g.value && m.value && (h.value.length > 0 ? T.push("is-invalid") : T.push("is-valid")), [q.Textarea, q.Html].includes(a.type) && T.push("is-lg"), [q.Image].includes(a.type) && T.push("is-xl"), a.multiple && a.type === q.Select && T.push("is-lg"), a.multiple && (y.value ? T.push(`has-multiple-display-${a.multipleDisplayEdition}`) : T.push(`has-multiple-display-${a.multipleDisplay}`)), ge.value > 0 && T.push("has-icons", `has-icons-${ge.value}`), T.push(y.value ? "is-editable" : "is-read"), a.type !== q.Range && (T.push(r.value ? "is-valid" : "is-error"), T.push(ze.value ? "is-filled" : "is-empty")), T.join(" ");
    }), Ie = J(() => {
      var T;
      return typeof k.value == "number" ? (B.value, (T = ee.langNumberFormat[B.value]) != null && T.amountOfDecimals ? gl(
        k.value,
        ee.langNumberFormat[B.value].amountOfDecimals,
        ee.langNumberFormat[B.value].decimalSeparator,
        ee.langNumberFormat[B.value].thousandsSeparator,
        ee.langNumberFormat[B.value].removeDecimalsIfZero
      ) : ee.amountOfDecimals ? gl(
        k.value,
        ee.amountOfDecimals,
        ee.decimalSeparator,
        ee.thousandsSeparator,
        ee.removeDecimalsIfZero
      ) : k.value.toString()) : a.type === q.Html ? sn(k.value) : k.value;
    }), Oe = J(() => typeof a.min == "string" ? parseFloat(a.min) : typeof a.min == "number" ? a.min : !1), Ae = J(() => typeof a.max == "string" ? parseFloat(a.max) : typeof a.max == "number" ? a.max : !1), ve = J(() => {
      var T, G, oe, xe;
      if (vt.includes(a.type)) {
        if (k.value === !0 && typeof a.configOn == "object")
          return Oi(
            Ft(((T = a.configOn) == null ? void 0 : T.label) ?? a.label),
            ((G = a.configOn) == null ? void 0 : G.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
        if (k.value !== !0 && typeof a.configOff == "object")
          return Oi(
            Ft(((oe = a.configOff) == null ? void 0 : oe.label) ?? a.label),
            ((xe = a.configOff) == null ? void 0 : xe.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
      }
      return Oi(
        Ft(a.label),
        a.labelIcon,
        a.labelIconAtEnd
      );
    }), wt = J(() => Ft(a.placeholder)), it = J(() => Ft(a.searchPlaceholder)), De = J(() => typeof f == "function" ? f(a.prop) : gt(f, a.prop)), Se = J(() => typeof a.modalData == "function" ? a.modalData(a.prop) : a.modalData), Ve = J(() => typeof b == "function" ? b(a.prop) : gt(b, a.prop)), Me = J(() => a.type === q.File ? ee.acceptTypes.file : a.type === q.Image ? ee.acceptTypes.image : ""), kt = J(() => a.errorMessage), xt = J(() => a.infoMessage), Ze = J(() => a.canStep && y.value && a.type === q.Number), St = J(() => a.canStep && y.value && a.type === q.Number && S !== "subtract"), Gi = J(() => a.canStep && y.value && a.type === q.Number), Ki = J(() => a.canUndo && de.value && y.value && !_o.includes(a.type)), Yi = J(() => a.canClear && ze.value && y.value && !Co.includes(a.type)), Ri = J(() => a.canI18n && typeof s.value == "object" && y.value), Zt = J(() => a.type === q.Password && a.showPassword && ze.value && y.value), Xi = J(() => Ki.value && !a.infoButtonEllipsis), Ji = J(() => Yi.value && !a.infoButtonEllipsis), Qi = J(() => Zt.value && !a.infoButtonEllipsis && S !== "password"), el = J(() => Ri.value && !a.infoButtonEllipsis && S !== "i18n"), tl = J(() => {
      var T, G, oe, xe;
      return a.type === q.Calc || a.type === q.Search || ![q.Select, q.Text].includes(a.type) ? !1 : $.value.length > 0 || j.value.length > 0 || typeof ((G = (T = a.optionsConfig) == null ? void 0 : T.http) == null ? void 0 : G.resource) < "u" && ((xe = (oe = a.optionsConfig) == null ? void 0 : oe.http) == null ? void 0 : xe.resource) !== "";
    }), il = J(() => a.allowReadModeSwitch && !a.infoButtonEllipsis), ll = J(() => typeof a.fileUploadButton == "object" && Object.keys(a.fileUploadButton).length > 0), nl = () => {
      Pt(() => {
        w.value && w.value.focus();
      });
    }, Wn = async () => {
      var T;
      if ((T = a.validation) != null && T.resource) {
        o("validating");
        const G = await Ei(a.validation.resource, {
          ...a.validation.resourceData,
          value: k.value
        });
        o("validation", G);
      }
    };
    ue(() => {
      var T;
      return (T = a.validation) == null ? void 0 : T.checkEqualTo;
    }, () => Et()), ue(() => a.readMode, (T) => y.value = !T), ue(() => a.valid, (T) => r.value = T), ue(() => a.modelValue, (T) => {
      [q.Card, q.Elements].includes(a.type) ? k.value = T : a.type !== q.Date && (k.value = on(T, B.value));
    }), ue(k, (T) => {
      typeof s.value == "object" && [q.Card, q.Elements].includes(a.type) ? s.value[B.value] = T : s.value = T, a.type === q.Number && no(T);
    }), ue(s, (T) => {
      var G;
      Z.value && y.value && (o("update:modelValue", T), a.type === q.Select && typeof ((G = a.optionsConfig) == null ? void 0 : G.filter) == "function" && Tt(W.value, !1), Wn(), Et());
    }, { deep: !0 }), ue(r, (T) => {
      o("update:valid", T);
    }), ue(j, (T) => {
      o("update:options", T);
    }), ue(() => a.options, (T) => {
      j.value = Li(T, a.prop), a.type === q.Select ? Tt(W.value, !1) : Tt(k.value, !1);
    });
    const Et = () => {
      var T;
      ((T = a.validation) == null ? void 0 : T.trigger) === wo.Blur && (!m.value || !g.value) || a.type !== q.Range && (h.value = [], Pt(() => {
        var xe, Be, Ee, $e, qe, je, Ge, Ke, Ye, nt, ot, st, at;
        let G = typeof a.min > "u" ? 0 : parseFloat(a.min), oe = typeof a.max > "u" ? 0 : parseFloat(a.max);
        if (a.type === q.Number && typeof a.min < "u" && typeof a.max < "u" && (k.value < G || k.value > oe)) {
          h.value.push(Ne.createNumBetween(G, oe, Re.Ko)), r.value = !1;
          return;
        }
        ![q.Number, q.Email].includes(a.type) && a.mandatory && k.value === "" ? h.value.push(Ne.createEmpty(Re.Ko)) : a.type !== q.Email && G > 0 && (a.type !== q.Number && k.value.length < G ? h.value.push(Ne.createMinStr(G, Re.Ko)) : k.value < G && h.value.push(Ne.createMinNum(G, Re.Ko))), oe > 0 && (a.type !== q.Number && k.value.length > oe ? h.value.push(Ne.createMaxStr(oe, Re.Ko)) : k.value > oe && h.value.push(Ne.createMaxNum(oe, Re.Ko))), a.type === q.Email && (a.mandatory && k.value === "" ? h.value.push(Ne.createEmpty(Re.Ko)) : vo(k.value) || h.value.push(Ne.createEmail(Re.Ko))), ko.includes(a.type) && (Go(h.value, k.value, (xe = a.validation) == null ? void 0 : xe.minNumbers, (Be = a.validation) == null ? void 0 : Be.maxNumbers), Ko(h.value, k.value, (Ee = a.validation) == null ? void 0 : Ee.minUpperChars, ($e = a.validation) == null ? void 0 : $e.maxUpperChars), Yo(h.value, k.value, (qe = a.validation) == null ? void 0 : qe.minLowerChars, (je = a.validation) == null ? void 0 : je.maxLowerChars), Xo(h.value, k.value, (Ge = a.validation) == null ? void 0 : Ge.minChars, (Ke = a.validation) == null ? void 0 : Ke.maxChars), Jo(h.value, k.value, (Ye = a.validation) == null ? void 0 : Ye.minSpecialChars, (nt = a.validation) == null ? void 0 : nt.maxSpecialChars)), (ot = a.validation) != null && ot.checkEqualTo && k.value !== ((st = a.validation) == null ? void 0 : st.checkEqualTo) && h.value.push(Ne.createEqualTo((at = a.validation) == null ? void 0 : at.checkEqualTo, Re.Ko)), r.value = h.value.length === 0;
      }));
    }, Tt = (T, G = !0) => {
      var oe, xe, Be, Ee, $e, qe, je, Ge, Ke, Ye;
      if (j.value.length === 0) {
        $.value = [];
        return;
      }
      switch (a.type) {
        case q.Select:
          a.searchable ? $.value = Fi(j.value, T, !0, (oe = a.optionsConfig) == null ? void 0 : oe.filter) : $.value = j.value, N.value = !1, G && (z.value = typeof ((Be = (xe = a.optionsConfig) == null ? void 0 : xe.http) == null ? void 0 : Be.resource) < "u" && (($e = (Ee = a.optionsConfig) == null ? void 0 : Ee.http) == null ? void 0 : $e.resource) !== "" || $.value.length > 0), te();
          return;
        case q.Text:
        case q.Search:
          $.value = Fi(j.value, T, !1, (qe = a.optionsConfig) == null ? void 0 : qe.filter), N.value = !1, G && (z.value = typeof ((Ge = (je = a.optionsConfig) == null ? void 0 : je.http) == null ? void 0 : Ge.resource) < "u" && ((Ye = (Ke = a.optionsConfig) == null ? void 0 : Ke.http) == null ? void 0 : Ye.resource) !== "" || $.value.length > 0);
          return;
      }
    }, $t = async (T, G = !0) => {
      var oe, xe, Be, Ee, $e, qe, je, Ge, Ke, Ye, nt, ot, st, at, Vt, Ht, Ce, rt, ut, ct, dt, ft, ht, pt;
      if (!(!y.value && !((oe = a.optionsConfig) != null && oe.autoloadResource) && !A.value) && ![
        q.Tel,
        q.Date,
        q.Color,
        q.File,
        q.Html,
        q.Image,
        q.Password,
        q.Range,
        q.Textarea
      ].includes(a.type))
        if (N.value = !1, (xe = a.optionsConfig) != null && xe.autoloadResource && !A.value && (V.value = !0), typeof ((Ee = (Be = a.optionsConfig) == null ? void 0 : Be.http) == null ? void 0 : Ee.resource) < "u" && ((qe = ($e = a.optionsConfig) == null ? void 0 : $e.http) == null ? void 0 : qe.resource) !== "") {
          N.value = !0;
          let lt = {};
          typeof ((Ge = (je = a.optionsConfig) == null ? void 0 : je.http) == null ? void 0 : Ge.data) == "object" && (lt = { ...a.optionsConfig.http.data }), ee.searchKeyForResource !== "" && (lt[ee.searchKeyForResource] = T), (nt = (Ye = (Ke = a.optionsConfig) == null ? void 0 : Ke.http) == null ? void 0 : Ye.events) != null && nt.onStart && typeof ((at = (st = (ot = a.optionsConfig) == null ? void 0 : ot.http) == null ? void 0 : st.events) == null ? void 0 : at.onStart) == "function" && a.optionsConfig.http.events.onStart();
          const Xe = await Ei((Ht = (Vt = a.optionsConfig) == null ? void 0 : Vt.http) == null ? void 0 : Ht.resource, lt);
          (ut = (rt = (Ce = a.optionsConfig) == null ? void 0 : Ce.http) == null ? void 0 : rt.events) != null && ut.onEnd && typeof ((ft = (dt = (ct = a.optionsConfig) == null ? void 0 : ct.http) == null ? void 0 : dt.events) == null ? void 0 : ft.onEnd) == "function" && a.optionsConfig.http.events.onEnd(Xe);
          const Ct = Array.isArray(Xe.data) && Xe.data.length > 0;
          N.value = !1, Ct && (j.value = Io(j.value, Xe.data, a.prop), Tt(T, G), (ht = a.optionsConfig) != null && ht.autoloadResource && !A.value && (((pt = a.optionsConfig) == null ? void 0 : pt.autoloadResource) === "feed" && (a.multiple ? $.value.forEach((Gt) => {
            It(Gt);
          }) : $.value.length > 0 && It($.value[0])), A.value = !0, V.value = !1), o("options-loaded", Xe.data));
        } else
          Tt(T, G);
    }, Ai = (T) => {
      var xe, Be;
      let G = $.value.length - 1;
      if (G === -1) return;
      const oe = T.key ?? "";
      if (p.value)
        if (["ArrowDown", "ArrowUp", "Enter"].includes(oe) && (T.preventDefault(), T.stopPropagation()), oe === "ArrowDown") {
          ++H.value, H.value > G && (H.value = 0);
          let Ee = (xe = L.value) == null ? void 0 : xe.querySelector('[data-index="' + H.value + '"]');
          Ee && Ee.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else if (oe === "ArrowUp") {
          --H.value, H.value < 0 && (H.value = G);
          let Ee = (Be = L.value) == null ? void 0 : Be.querySelector('[data-index="' + H.value + '"]');
          Ee && Ee.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else oe === "Enter" && H.value > -1 && It($.value[H.value]);
    }, Ii = () => {
      if (a.type === q.Html) {
        w.value && w.value.setValue(M.value);
        return;
      } else if (a.type === q.Date) {
        s.value = R.value;
        return;
      } else if (a.type === q.File) {
        s.value = R.value, _.value = C.value;
        return;
      }
      k.value = M.value;
    }, ol = () => {
      if (a.type === q.Html) {
        w.value && w.value.setValue("");
        return;
      } else if (a.type === q.Date) {
        s.value = "";
        return;
      } else if (a.type === q.File) {
        s.value = "", _.value = "";
        return;
      } else if (a.type === q.Select) {
        k.value = a.multiple ? [] : "", D.value = [];
        return;
      }
      k.value = "";
    }, Zn = () => k.value, sl = (T) => {
      Et(), bl.includes(a.type) ? ($t(k.value), Ai(T)) : a.type === q.Select && Ai(T), o("keyup", T);
    }, al = () => {
      w.value && w.value.keepFocused();
    }, $n = () => {
      if (z.value) {
        if (a.type === q.Select) {
          cl();
          return;
        }
        return jt();
      }
      if (a.type === q.Select) {
        ul();
        return;
      }
      return qt();
    }, It = (T, G = !1) => {
      if (!T.disabled)
        if (a.multiple) {
          let oe = -1;
          a.optionValueType === "option" ? oe = Lt(T, k.value.map((xe) => xe.value)) : oe = Lt(T, k.value), oe === -1 ? (a.optionValueType === "option" ? k.value.push(T.value) : k.value.push(String(T.value)), G || D.value.push(T)) : G || (k.value.splice(oe, 1), D.value.splice(oe, 1)), al(), o("selected-option", T);
        } else
          H.value = -1, a.optionValueType === "option" ? k.value = T : k.value = String(T.value), D.value.splice(0, 1, T), z.value = !1, P.value = !1, o("selected-option", T);
    }, rl = (T) => o("keydown", T), qt = (T) => {
      g.value = !0, p.value = !0, Et(), o("focus", T);
    }, jt = (T) => {
      setTimeout(() => {
        if (!(a.searchable && P.value)) {
          if (a.multiple) {
            z.value = !0, p.value = !0;
            return;
          }
          m.value = !0, H.value = -1, z.value = !1, p.value = !1, Et(), o("blur", T);
        }
      }, 100);
    }, Mi = (T) => {
      g.value = !0, p.value = !0, o("focus", T);
    }, Di = (T) => {
      m.value = !0, p.value = !1, o("blur", T);
    }, qn = (T) => {
      Ai(T);
    }, jn = (T) => {
      W.value = T, $t(T);
    }, Gn = (T) => {
      let G = new Ti({
        value: T,
        label: T
      }), oe = -1;
      a.optionValueType === "option" ? oe = Lt(G, k.value.map((xe) => xe.value)) : oe = Lt(G, k.value), oe === -1 && (j.value.push(G), $.value.push(G), D.value.push(G), It(G, !0)), W.value = "";
    }, Kn = (T) => {
      let G = -1;
      a.optionValueType === "option" ? G = Lt(T, k.value.map((oe) => oe.value)) : G = Lt(T, k.value), G >= 0 && (k.value.splice(G, 1), D.value.splice(G, 1), a.canTag && (j.value.splice(
        j.value.findIndex((oe) => oe.value === T.value),
        1
      ), $.value.splice(
        $.value.findIndex((oe) => oe.value === T.value),
        1
      ))), W.value = "";
    }, ul = () => {
      var T, G;
      if (g.value = !0, p.value = !0, !((G = (T = a.optionsConfig) == null ? void 0 : T.http) != null && G.resource) && $.value.length === 0) {
        z.value = !1;
        return;
      }
      z.value = !0, Et(), $t(W.value, !1), a.searchable && al(), o("focus");
    }, cl = () => {
      m.value = !0, p.value = !1, o("blur");
    }, Mt = (T) => {
      o("change", T, k.value);
    }, Dt = (T) => {
      o("click", T);
    }, Yn = (T) => o("click-info", T), Xn = (T) => o("click-error", T), dl = () => {
      let T = a.step ?? 1;
      typeof T == "string" && (T = parseFloat(T));
      let G = String(T).split(".")[0].length;
      (!a.min || k.value > a.min) && (k.value = parseFloat((parseFloat(k.value) - T).toFixed(G)));
    }, Jn = () => {
      let T = a.step ?? 1;
      typeof T == "string" && (T = parseFloat(T));
      let G = String(T).split(".")[0].length;
      (!a.max || k.value < a.max) && (k.value = parseFloat((parseFloat(k.value) + T).toFixed(G)));
    }, Qn = () => {
      y.value && nl();
    }, eo = (T) => {
      wl({
        text: bt.defaultUploadSuccessText,
        details: bt.defaultUploadSuccessDetails,
        icon: bt.defaultUploadSuccessIcon,
        positionX: yl.Right
      }), o("upload-success", T);
    }, to = (T) => {
      wl({
        text: bt.defaultUploadErrorText,
        details: bt.defaultUploadErrorDetails,
        icon: bt.defaultUploadErrorIcon,
        positionX: yl.Right
      }), o("upload-error", T);
    }, io = () => {
      o("uploading");
    }, lo = (T) => {
      console.log("emit picked files 2: ", T), o("picked-files", T);
    }, no = (T) => {
      if (!a.enableAutoNumberFix) return !1;
      let G = Number(T), oe = Ao(G, Oe.value, Ae.value);
      return G !== oe ? (k.value = oe, !0) : !1;
    };
    t({
      Identifier: c,
      reset: Ii,
      focus: nl,
      value: Zn,
      isMandatory: () => a.mandatory,
      isValid: () => r.value,
      click: () => {
        var T;
        switch (a.type) {
          case q.File:
            return (T = w.value) == null ? void 0 : T.click();
        }
        I.value.click();
      }
    });
    const oo = J(() => a.editSlot !== "" && typeof ee.customEditSlots[a.editSlot] < "u"), so = J(() => ee.customEditSlots[a.editSlot]);
    zi(() => {
      var T;
      j.value = Li(a.options, a.prop), Tt("", !1), te(), a.type === q.Select && (a.multiple && (P.value = !0), (T = a.optionsConfig) != null && T.autoloadResource && $t("", !1)), Z.value = !0;
    });
    const ao = J(() => vt.includes(a.type) && !ae.value ? "label" : "div"), ro = J(() => vt.includes(a.type) ? {
      for: c
    } : {}), uo = J(() => {
      switch (a.type) {
        case q.Select:
          return D.value;
        case q.Date:
          return gn(s.value, F.value);
        case q.File:
        case q.Image:
          return s.value;
        default:
          return k.value;
      }
    });
    return (T, G) => {
      var Ee, $e, qe, je, Ge, Ke, Ye, nt, ot, st, at, Vt, Ht;
      const oe = he("lkt-button"), xe = he("lkt-loader"), Be = he("lkt-tooltip");
      return O(), le("div", {
        class: Pe(["lkt-field", tt.value]),
        "data-show-ui": Fe.value,
        "data-labeled": !U(l).label,
        ref_key: "container",
        ref: I
      }, [
        U(l).label ? Qe(T.$slots, "label", { key: 0 }) : se("", !0),
        !U(l).label && ve.value !== "" && !U(vt).includes(T.type) ? (O(), le("label", {
          key: 1,
          for: U(c),
          class: "lkt-field--label",
          innerHTML: ve.value
        }, null, 8, Jr)) : se("", !0),
        me("div", Qr, [
          Te.value ? (O(), le("div", eu, [
            T.featuredButton === "password" && Zt.value ? (O(), Q(Pi, {
              key: 0,
              modelValue: d.value,
              "onUpdate:modelValue": G[0] || (G[0] = (Ce) => d.value = Ce),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : se("", !0),
            Ri.value && U(S) === "i18n" && T.canI18n ? (O(), Q(xl, {
              key: 1,
              modelValue: s.value,
              "onUpdate:modelValue": G[1] || (G[1] = (Ce) => s.value = Ce),
              "is-featured": "",
              type: T.type
            }, null, 8, ["modelValue", "type"])) : se("", !0),
            Ze.value && U(S) === "subtract" ? (O(), Q(oe, Le({ key: 2 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              disabled: U(k) === Oe.value
            }, { onClick: dl }), null, 16)) : se("", !0)
          ])) : se("", !0),
          Ve.value ? (O(), le("div", tu, [
            me("i", {
              class: Pe(Ve.value)
            }, null, 2)
          ])) : se("", !0),
          y.value ? (O(), Q(Nt(ao.value), Le({ key: 2 }, ro.value, { class: "lkt-field-main" }), {
            default: pe(() => {
              var Ce, rt, ut, ct, dt, ft, ht, pt, lt, Xe, Ct, Gt, fl, hl, pl;
              return [
                U(l).edit ? (O(), le("div", {
                  key: 0,
                  onClick: Dt
                }, [
                  Qe(T.$slots, "edit", {
                    value: s.value,
                    title: Ie.value,
                    data: T.slotData
                  })
                ])) : oo.value ? (O(), le("div", {
                  key: 1,
                  onClick: Dt
                }, [
                  (O(), Q(Nt(so.value), {
                    value: s.value,
                    title: Ie.value,
                    data: T.slotData
                  }, null, 8, ["value", "title", "data"]))
                ])) : U(vt).includes(T.type) ? (O(), Q(os, {
                  key: 2,
                  modelValue: U(k),
                  "onUpdate:modelValue": G[2] || (G[2] = (fe) => Je(k) ? k.value = fe : null),
                  ref_key: "inputElement",
                  ref: w,
                  id: U(c),
                  name: T.name,
                  type: T.type,
                  label: ve.value,
                  editable: y.value,
                  focusing: p.value,
                  disabled: ae.value,
                  readonly: T.readonly,
                  onFocus: Mi,
                  onBlur: Di
                }, null, 8, ["modelValue", "id", "name", "type", "label", "editable", "focusing", "disabled", "readonly"])) : T.type === U(q).Color && T.multiple ? (O(), Q(jo, {
                  key: 3,
                  modelValue: U(k),
                  "onUpdate:modelValue": G[3] || (G[3] = (fe) => Je(k) ? k.value = fe : null),
                  ref_key: "inputElement",
                  ref: w,
                  "edit-mode": y.value,
                  min: Oe.value,
                  max: Ae.value
                }, null, 8, ["modelValue", "edit-mode", "min", "max"])) : T.type === U(q).Color ? (O(), Q(vn, {
                  key: 4,
                  modelValue: U(k),
                  "onUpdate:modelValue": G[4] || (G[4] = (fe) => Je(k) ? k.value = fe : null),
                  onChange: Mt,
                  ref_key: "inputElement",
                  ref: w
                }, null, 8, ["modelValue"])) : Y.value || ie.value ? (O(), Q(Fr, {
                  key: 5,
                  modelValue: s.value,
                  "onUpdate:modelValue": G[5] || (G[5] = (fe) => s.value = fe),
                  "file-name": _.value,
                  "onUpdate:fileName": G[6] || (G[6] = (fe) => _.value = fe),
                  ref_key: "inputElement",
                  ref: w,
                  id: U(c),
                  tabindex: T.tabindex,
                  resource: (Ce = T.fileUploadHttp) == null ? void 0 : Ce.resource,
                  "resource-data": (rt = T.fileUploadHttp) == null ? void 0 : rt.data,
                  name: T.name,
                  placeholder: wt.value,
                  accept: Me.value,
                  focusing: p.value,
                  disabled: ae.value,
                  readonly: T.readonly,
                  "is-image": T.type === U(q).Image,
                  "file-browser-config": T.fileBrowserConfig,
                  onChange: Mt,
                  onUploading: io,
                  onUploadSuccess: eo,
                  onUploadError: to,
                  onPickedFiles: lo
                }, null, 8, ["modelValue", "file-name", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image", "file-browser-config"])) : K.value ? (O(), Q(jr, {
                  key: 6,
                  modelValue: s.value,
                  "onUpdate:modelValue": G[7] || (G[7] = (fe) => s.value = fe),
                  id: U(c),
                  tabindex: T.tabindex,
                  lang: B.value,
                  name: T.name
                }, null, 8, ["modelValue", "id", "tabindex", "lang", "name"])) : T.type === U(q).Select ? (O(), Q(hr, {
                  key: 7,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: U(k),
                  "onUpdate:modelValue": G[8] || (G[8] = (fe) => Je(k) ? k.value = fe : null),
                  "show-options": z.value,
                  "onUpdate:showOptions": G[9] || (G[9] = (fe) => z.value = fe),
                  searchable: T.searchable,
                  "search-mode": P.value,
                  "search-string": W.value,
                  multiple: T.multiple,
                  "can-tag": T.canTag,
                  "options-text": (ut = T.optionsConfig) == null ? void 0 : ut.text,
                  "options-icon": (ct = T.optionsConfig) == null ? void 0 : ct.icon,
                  "options-class": (dt = T.optionsConfig) == null ? void 0 : dt.class,
                  "option-slot": T.optionSlot,
                  "options-modal": (ft = T.optionsConfig) == null ? void 0 : ft.modal,
                  "options-download": (ht = T.optionsConfig) == null ? void 0 : ht.download,
                  "options-label-formatter": (pt = T.optionsConfig) == null ? void 0 : pt.labelFormatter,
                  "options-modal-data": (lt = T.optionsConfig) == null ? void 0 : lt.modalData,
                  "picked-options": D.value,
                  editable: y.value,
                  focusing: p.value,
                  "search-placeholder": it.value,
                  "multiple-display-edition": T.multipleDisplayEdition,
                  prop: T.prop,
                  onFocus: ul,
                  onBlur: cl,
                  onNavigate: qn,
                  onSearch: jn,
                  onChange: Mt,
                  onTag: Gn,
                  onUntag: Kn
                }, null, 8, ["modelValue", "show-options", "searchable", "search-mode", "search-string", "multiple", "can-tag", "options-text", "options-icon", "options-class", "option-slot", "options-modal", "options-download", "options-label-formatter", "options-modal-data", "picked-options", "editable", "focusing", "search-placeholder", "multiple-display-edition", "prop"])) : T.type === U(q).Calc ? (O(), Q(_r, {
                  key: 8,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: U(k),
                  "onUpdate:modelValue": G[10] || (G[10] = (fe) => Je(k) ? k.value = fe : null),
                  id: U(c),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: y.value,
                  focusing: p.value,
                  disabled: ae.value,
                  readonly: T.readonly,
                  options: j.value,
                  onFocus: Mi,
                  onBlur: Di
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "disabled", "readonly", "options"])) : T.type === U(q).Search ? (O(), Q(Sr, {
                  key: 9,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: U(k),
                  "onUpdate:modelValue": G[11] || (G[11] = (fe) => Je(k) ? k.value = fe : null),
                  id: U(c),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: y.value,
                  focusing: p.value,
                  "had-first-focus": g.value,
                  disabled: ae.value,
                  readonly: T.readonly,
                  "options-resource": (Ct = (Xe = T.optionsConfig) == null ? void 0 : Xe.http) == null ? void 0 : Ct.resource,
                  container: I.value,
                  onFocus: Mi,
                  onBlur: Di
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : T.type === U(q).Card && a.multiple ? (O(), Q(Kr, {
                  key: 10,
                  modelValue: U(k),
                  "onUpdate:modelValue": G[12] || (G[12] = (fe) => Je(k) ? k.value = fe : null),
                  id: U(c),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: y.value,
                  focusing: p.value,
                  "had-first-focus": g.value,
                  disabled: ae.value,
                  readonly: T.readonly,
                  "options-resource": (fl = (Gt = T.optionsConfig) == null ? void 0 : Gt.http) == null ? void 0 : fl.resource,
                  modal: De.value,
                  "modal-key": U(n),
                  "modal-data": Se.value,
                  "item-type": U(v)
                }, Bt({ _: 2 }, [
                  U(l)["item-" + U(v)] ? {
                    name: "item",
                    fn: pe(({ item: fe }) => [
                      Qe(T.$slots, "item-" + U(v), { item: fe })
                    ]),
                    key: "0"
                  } : U(l).item ? {
                    name: "item",
                    fn: pe(({ item: fe }) => [
                      Qe(T.$slots, "item", { item: fe })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : T.type === U(q).Card ? (O(), Q(Un, {
                  key: 11,
                  modelValue: U(k),
                  "onUpdate:modelValue": G[13] || (G[13] = (fe) => Je(k) ? k.value = fe : null),
                  id: U(c),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: y.value,
                  focusing: p.value,
                  "had-first-focus": g.value,
                  disabled: ae.value,
                  readonly: T.readonly,
                  "options-resource": (pl = (hl = T.optionsConfig) == null ? void 0 : hl.http) == null ? void 0 : pl.resource,
                  modal: De.value,
                  "modal-key": U(n),
                  "modal-data": Se.value,
                  "item-type": U(v)
                }, Bt({ _: 2 }, [
                  U(l)["item-" + U(v)] ? {
                    name: "item",
                    fn: pe(({ item: fe }) => [
                      Qe(T.$slots, "item-" + U(v), { item: fe })
                    ]),
                    key: "0"
                  } : U(l).item ? {
                    name: "item",
                    fn: pe(({ item: fe }) => [
                      Qe(T.$slots, "item", { item: fe })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : ce.value === "input" ? Ue((O(), le("input", {
                  key: 12,
                  "onUpdate:modelValue": G[14] || (G[14] = (fe) => Je(k) ? k.value = fe : null),
                  ref: (fe) => w.value = fe,
                  value: U(k),
                  type: ke.value,
                  name: T.name,
                  id: U(c),
                  disabled: ae.value,
                  readonly: T.readonly,
                  placeholder: wt.value,
                  tabindex: T.tabindex,
                  autocomplete: be.value,
                  min: Oe.value,
                  max: Ae.value,
                  step: T.step,
                  onKeyup: sl,
                  onKeydown: rl,
                  onFocus: qt,
                  onBlur: jt,
                  onClick: Dt,
                  onChange: Mt
                }, null, 40, iu)), [
                  [po, U(k)]
                ]) : ce.value === "textarea" ? Ue((O(), le("textarea", {
                  key: 13,
                  "onUpdate:modelValue": G[15] || (G[15] = (fe) => Je(k) ? k.value = fe : null),
                  ref: (fe) => w.value = fe,
                  name: T.name,
                  id: U(c),
                  disabled: ae.value,
                  readonly: T.readonly,
                  placeholder: wt.value,
                  tabindex: T.tabindex,
                  autocomplete: be.value,
                  onKeyup: sl,
                  onKeydown: rl,
                  onFocus: qt,
                  onBlur: jt,
                  onClick: Dt,
                  onChange: Mt
                }, null, 40, lu)), [
                  [Bi, U(k)]
                ]) : T.type === U(q).Html ? (O(), Q(rr, {
                  key: 14,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: U(k),
                  "onUpdate:modelValue": G[16] || (G[16] = (fe) => Je(k) ? k.value = fe : null),
                  id: U(c),
                  tabindex: T.tabindex,
                  name: T.name,
                  lang: B.value,
                  editable: y.value,
                  focusing: p.value,
                  disabled: ae.value,
                  readonly: T.readonly,
                  onFocus: qt,
                  onBlur: jt
                }, null, 8, ["modelValue", "id", "tabindex", "name", "lang", "editable", "focusing", "disabled", "readonly"])) : se("", !0)
              ];
            }),
            _: 3
          }, 16)) : se("", !0),
          y.value ? se("", !0) : (O(), Q(Mr, {
            key: 3,
            value: uo.value,
            type: T.type,
            label: ve.value,
            title: Ie.value,
            "file-name": _.value,
            "value-slot": T.valueSlot,
            "empty-value-slot": T.emptyValueSlot,
            "slot-data": T.slotData,
            download: U(u),
            multiple: T.multiple,
            multipleDisplay: T.multipleDisplay,
            modal: De.value,
            "modal-key": U(n),
            "modal-data": Se.value,
            "option-slot": T.optionSlot,
            "options-download": (Ee = T.optionsConfig) == null ? void 0 : Ee.download,
            "options-modal": ($e = T.optionsConfig) == null ? void 0 : $e.modal,
            "options-modal-data": (qe = T.optionsConfig) == null ? void 0 : qe.modalData,
            "options-icon": (je = T.optionsConfig) == null ? void 0 : je.icon,
            "options-text": (Ge = T.optionsConfig) == null ? void 0 : Ge.text,
            "options-class": (Ke = T.optionsConfig) == null ? void 0 : Ke.class,
            "options-label-formatter": (Ye = T.optionsConfig) == null ? void 0 : Ye.labelFormatter,
            "options-resource": (ot = (nt = T.optionsConfig) == null ? void 0 : nt.http) == null ? void 0 : ot.resource,
            "options-resource-data": (at = (st = T.optionsConfig) == null ? void 0 : st.http) == null ? void 0 : at.data,
            "read-mode-config": T.readModeConfig,
            prop: T.prop,
            onClick: Dt
          }, Bt({ _: 2 }, [
            U(l).value ? {
              name: "value",
              fn: pe(() => [
                Qe(T.$slots, s.value, {
                  value: s.value,
                  title: Ie.value,
                  data: T.slotData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "type", "label", "title", "file-name", "value-slot", "empty-value-slot", "slot-data", "download", "multiple", "multipleDisplay", "modal", "modal-key", "modal-data", "option-slot", "options-download", "options-modal", "options-modal-data", "options-icon", "options-text", "options-class", "options-label-formatter", "options-resource", "options-resource-data", "read-mode-config", "prop"])),
          Fe.value ? (O(), le("div", nu, [
            Ue(ne(hn, { onClick: Ii }, null, 512), [
              [mt, Xi.value]
            ]),
            Ue(ne(pn, { onClick: ol }, null, 512), [
              [mt, Ji.value]
            ]),
            T.type === U(q).Number ? Ue((O(), Q(oe, Le({ key: 0 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              disabled: U(k) === Oe.value
            }, { onClick: dl }), null, 16)), [
              [mt, St.value]
            ]) : se("", !0),
            T.type === U(q).Number ? Ue((O(), Q(oe, Le({ key: 1 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-more",
              disabled: U(k) === Ae.value
            }, { onClick: Jn }), null, 16)), [
              [mt, Gi.value]
            ]) : se("", !0),
            kt.value ? (O(), Q(oe, {
              key: 2,
              title: T.errorMessage,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-attention",
              onClick: Xn
            }, null, 8, ["title"])) : se("", !0),
            xt.value ? (O(), Q(oe, {
              key: 3,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-info",
              onClick: Yn,
              tooltip: "",
              "show-tooltip-on-hover": "",
              "show-tooltip-on-hover-delay": 500,
              "hide-tooltip-on-leave": ""
            }, {
              tooltip: pe(() => [
                Rt(yt(T.infoMessage), 1)
              ]),
              _: 1
            })) : se("", !0),
            y.value && ll.value ? (O(), Q(Yr, {
              key: 4,
              config: T.fileUploadButton,
              "file-upload-http": T.fileUploadHttp
            }, null, 8, ["config", "file-upload-http"])) : se("", !0),
            T.type === U(q).Password ? Ue((O(), Q(Pi, {
              key: 5,
              modelValue: d.value,
              "onUpdate:modelValue": G[17] || (G[17] = (Ce) => d.value = Ce)
            }, null, 8, ["modelValue"])), [
              [mt, Qi.value]
            ]) : se("", !0),
            Ue(ne(xl, {
              modelValue: s.value,
              "onUpdate:modelValue": G[18] || (G[18] = (Ce) => s.value = Ce),
              type: T.type
            }, null, 8, ["modelValue", "type"]), [
              [mt, el.value]
            ]),
            y.value && il.value ? (O(), Q(mn, {
              key: 6,
              modelValue: y.value,
              "onUpdate:modelValue": G[19] || (G[19] = (Ce) => y.value = Ce),
              onClick: Qn
            }, null, 8, ["modelValue"])) : se("", !0),
            T.customButtonText || T.customButtonClass ? (O(), Q(oe, {
              key: 7,
              text: T.customButtonText,
              class: "lkt-field--info-btn lkt-field--custom-btn",
              icon: T.customButtonClass
            }, null, 8, ["text", "icon"])) : se("", !0),
            y.value ? Ue((O(), Q(Do, {
              key: 8,
              onClick: $n
            }, null, 512)), [
              [mt, tl.value]
            ]) : se("", !0),
            T.infoButtonEllipsis ? (O(), Q(Ro, {
              key: 9,
              "show-undo": Ki.value,
              "show-clear": Yi.value,
              "show-password": Zt.value,
              "show-edition": T.allowReadModeSwitch,
              "show-password-check": d.value,
              "onUpdate:showPasswordCheck": G[20] || (G[20] = (Ce) => d.value = Ce),
              "show-edition-check": y.value,
              "onUpdate:showEditionCheck": G[21] || (G[21] = (Ce) => y.value = Ce),
              onUndo: Ii,
              onClear: ol
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"])) : se("", !0)
          ])) : se("", !0)
        ]),
        y.value && ((Vt = T.validation) == null ? void 0 : Vt.type) === U(vl).Auto && h.value.length > 0 ? (O(), Q(kr, {
          key: 2,
          items: h.value,
          stack: (Ht = T.validation) == null ? void 0 : Ht.stack
        }, null, 8, ["items", "stack"])) : se("", !0),
        y.value && U(bl).includes(T.type) ? (O(), Q(Be, Le({
          key: 3,
          ref_key: "dropdownEl",
          ref: x,
          class: "lkt-field--dropdown",
          modelValue: z.value,
          "onUpdate:modelValue": G[22] || (G[22] = (Ce) => z.value = Ce),
          referrer: I.value,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, T.tooltipConfig), {
          default: pe(() => [
            z.value ? (O(), le("div", ou, [
              N.value ? (O(), Q(xe, { key: 0 })) : se("", !0),
              N.value ? se("", !0) : (O(), le("ul", {
                key: 1,
                class: "lkt-field--dropdown-options",
                ref_key: "optionList",
                ref: L
              }, [
                (O(!0), le(He, null, et($.value, (Ce, rt) => {
                  var ut, ct, dt, ft, ht, pt, lt, Xe, Ct;
                  return O(), le("li", {
                    class: Pe({
                      "is-active": U(Mo)(Ce, s.value, T.multiple),
                      "is-focused": rt === H.value,
                      "is-disabled": Ce.disabled
                    }),
                    "data-index": rt,
                    onClick: () => It(Ce)
                  }, [
                    U(l).option ? Qe(T.$slots, "option", {
                      key: 0,
                      option: Ce,
                      data: T.slotData,
                      modal: (ut = T.optionsConfig) == null ? void 0 : ut.modal,
                      modalData: (ct = T.optionsConfig) == null ? void 0 : ct.modalData,
                      download: (dt = T.optionsConfig) == null ? void 0 : dt.download,
                      editable: y.value
                    }) : (O(), Q(_t, {
                      key: 1,
                      option: Ce,
                      "option-slot": T.optionSlot,
                      icon: (ft = T.optionsConfig) == null ? void 0 : ft.icon,
                      text: (ht = T.optionsConfig) == null ? void 0 : ht.text,
                      modal: (pt = T.optionsConfig) == null ? void 0 : pt.modal,
                      "modal-data": (lt = T.optionsConfig) == null ? void 0 : lt.modalData,
                      download: (Xe = T.optionsConfig) == null ? void 0 : Xe.download,
                      "label-formatter": (Ct = T.optionsConfig) == null ? void 0 : Ct.labelFormatter,
                      editable: y.value
                    }, null, 8, ["option", "option-slot", "icon", "text", "modal", "modal-data", "download", "label-formatter", "editable"]))
                  ], 10, su);
                }), 256))
              ], 512))
            ])) : se("", !0)
          ]),
          _: 3
        }, 16, ["modelValue", "referrer"])) : se("", !0)
      ], 10, Xr);
    };
  }
}), au = { class: "lkt-grid-1" }, ru = /* @__PURE__ */ ye({
  __name: "LktTextLanguageEditModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    type: {},
    translations: { default: () => ({}) }
  },
  setup(e) {
    const t = J(() => bo.value.filter((i) => i !== rn.value));
    return (i, o) => {
      const l = he("lkt-modal");
      return O(), Q(l, {
        "modal-name": i.modalName,
        title: "__:lmm.confirmFormLeave",
        "modal-key": i.modalKey,
        "z-index": i.zIndex
      }, {
        default: pe(() => [
          me("div", au, [
            ne(At, {
              type: i.type,
              label: "Idioma actual (ES)",
              modelValue: i.translations.es,
              "onUpdate:modelValue": o[0] || (o[0] = (a) => i.translations.es = a),
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "modelValue"]),
            (O(!0), le(He, null, et(t.value, (a) => (O(), Q(At, {
              type: i.type,
              modelValue: i.translations[a],
              "onUpdate:modelValue": (c) => i.translations[a] = c,
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
}), uu = { class: "lkt-file-entity-main" }, cu = /* @__PURE__ */ ye({
  __name: "FileEntityBox",
  props: {
    modelValue: {}
  },
  emits: [
    "double-click"
  ],
  setup(e, { emit: t }) {
    const i = e, o = t, l = X(i.modelValue), a = X(0);
    let c;
    const f = () => {
      ++a.value, a.value === 1 ? c = setTimeout(() => {
        l.value.isPicked = !l.value.isPicked, a.value = 0;
      }, 225) : (clearTimeout(c), o("double-click", l.value), a.value = 0);
    }, n = J(() => l.value.isPicked ? "lkt-icn-checkbox" : "lkt-icn-checkbox-empty");
    return (b, u) => {
      const v = he("lkt-icon"), w = he("lkt-image");
      return O(), le("div", {
        class: "lkt-file-entity-box",
        onClick: f
      }, [
        me("div", uu, [
          l.value.type !== U(We).Directory ? (O(), le("i", {
            key: 0,
            class: Pe(["lkt-file-entity-picked-indicator", n.value])
          }, null, 2)) : se("", !0),
          l.value.type === U(We).Directory ? (O(), Q(v, zt(Le({ key: 1 }, {
            icon: "lkt-icn-folder",
            text: l.value.name
          })), null, 16)) : l.value.type === U(We).Image ? (O(), Q(w, zt(Le({ key: 2 }, {
            src: l.value.src,
            text: l.value.name
          })), null, 16)) : se("", !0)
        ])
      ]);
    };
  }
}), du = { class: "lkt-file-entity-details" }, fu = {
  key: 0,
  class: "lkt-grid-1"
}, hu = /* @__PURE__ */ ye({
  __name: "FileEntityDetails",
  props: {
    editMode: { type: Boolean, default: !1 },
    modelValue: {},
    fileBrowserConfig: {}
  },
  setup(e) {
    const i = X(e.modelValue);
    return (o, l) => {
      const a = he("lkt-field");
      return O(), le("div", du, [
        i.value.type === U(We).Image ? (O(), le("div", fu, [
          ne(a, Le({
            modelValue: i.value.src,
            "onUpdate:modelValue": l[0] || (l[0] = (c) => i.value.src = c)
          }, {
            type: U(q).Image,
            label: "File",
            readMode: !o.editMode
          }), null, 16, ["modelValue"]),
          ne(a, Le({
            modelValue: i.value.name,
            "onUpdate:modelValue": l[1] || (l[1] = (c) => i.value.name = c)
          }, {
            type: U(q).Text,
            label: "Name",
            readMode: !o.editMode
          }), null, 16, ["modelValue"])
        ])) : se("", !0)
      ]);
    };
  }
}), pu = { class: "lkt-flex-row" }, mu = { class: "lkt-flex-col-3" }, gu = { class: "lkt-flex-column" }, vu = { class: "lkt-flex-col-9" }, bu = /* @__PURE__ */ ye({
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
    const i = e, o = X(!1), l = X([]), a = X({}), c = X(void 0), f = X(i.modelValue), n = (d) => {
      c.value = void 0, Pt(() => {
        c.value = d;
      });
    }, b = () => {
      var p, m, g;
      let d = new Cl();
      d.parent = (p = c.value) == null ? void 0 : p.id, (g = (m = c.value) == null ? void 0 : m.children) == null || g.push(d), n(d);
    }, u = (d, p) => {
      for (let m in p) {
        if (p[m].id === d) return p[m];
        if (p[m].children.length > 0) {
          let g = u(d, p[m].children);
          if (g) return g;
        }
      }
    }, v = () => {
      var d, p;
      if ((d = c.value) != null && d.parent) {
        let m = u((p = c.value) == null ? void 0 : p.parent, l.value);
        m && n(m);
      }
    }, w = () => {
      let d = [];
      f.value.forEach((p) => {
        let m = u(p, l.value);
        m && d.push(m);
      }), typeof i.onConfirmSelection == "function" && i.onConfirmSelection(d), No(i.modalName, i.modalKey);
    }, S = J(() => {
      var d;
      switch ((d = c.value) == null ? void 0 : d.type) {
        case We.Image:
          return "lkt-icn-picture";
        case We.Directory:
          return "lkt-icn-folder-open";
        default:
          return "";
      }
    }), E = (d) => {
      switch (d.type) {
        case We.Image:
          return "lkt-icn-picture";
        case We.Directory:
          return "lkt-icn-folder";
        default:
          return "";
      }
    }, R = (d) => {
      let p = E(d), m = {};
      return p !== "" && (m = {
        icon: p,
        position: Lo.Start
      }), {
        key: String(d.id),
        type: Bo.Anchor,
        anchor: {
          icon: m,
          text: d.name,
          type: zo.Action,
          events: {
            click: () => {
              n(d);
            }
          }
        },
        keepOpenOnChildClick: !0,
        // class?: string;
        // icon?: string;
        children: d.children ? d.children.map(R) : []
      };
    }, s = (d) => {
      d.forEach((p) => {
        var m;
        p.isPicked && f.value.push(p.id), ((m = p.children) == null ? void 0 : m.length) > 0 && s(p.children);
      });
    }, r = () => {
      var d, p;
      (p = (d = i.fileBrowserConfig) == null ? void 0 : d.http) != null && p.resource && (o.value = !0, Ei(i.fileBrowserConfig.http.resource, i.fileBrowserConfig.http.data).then((m) => {
        o.value = !1, l.value = m.data.map((g) => new Cl(g)), console.log("new mapped items: ", l.value), l.value.length > 0 && n(l.value[0]), l.value.forEach((g, h) => {
          var C;
          let y = `unit-${h}`;
          a.value[y] = ((C = g.children) == null ? void 0 : C.map(R)) ?? [];
        });
      }).catch((m) => {
        o.value = !1;
      }));
    };
    return ue(c, (d) => {
      console.log("updatedActiveElement: ", d);
    }, { deep: !0 }), ue(l, (d) => {
      console.log("updatedItems: ", d), f.value = [], s(l.value), console.log("pickedItems: ", f.value);
    }, { deep: !0 }), zi(() => {
      r();
    }), (d, p) => {
      const m = he("lkt-menu"), g = he("lkt-accordion"), h = he("lkt-button"), y = he("lkt-table"), C = he("lkt-item-crud"), _ = he("lkt-modal");
      return O(), Q(_, {
        "modal-name": d.modalName,
        "modal-key": d.modalKey,
        "z-index": d.zIndex,
        title: "File Browser",
        class: "lkt-file-browser"
      }, {
        default: pe(() => [
          me("div", pu, [
            me("div", mu, [
              (O(!0), le(He, null, et(l.value, (x, I) => (O(), Q(g, Le({ ref_for: !0 }, {
                modelValue: I === 0,
                title: x.name,
                toggleMode: U(Eo).Display,
                type: l.value.length === 1 ? U(Hi).Always : U(Hi).Auto
              }), {
                default: pe(() => [
                  me("div", gu, [
                    ne(m, Le({ ref_for: !0 }, {
                      modelValue: a.value[`unit-${I}`]
                    }), null, 16)
                  ])
                ]),
                _: 2
              }, 1040))), 256))
            ]),
            me("div", vu, [
              c.value ? (O(), Q(g, zt(Le({ key: 0 }, {
                type: U(Hi).Always,
                icon: S.value,
                title: c.value.name
              })), {
                default: pe(() => {
                  var x, I;
                  return [
                    [U(We).Directory, U(We).StorageUnit].includes(c.value.type) ? (O(), Q(y, Le({
                      key: 0,
                      modelValue: c.value.children,
                      "onUpdate:modelValue": p[0] || (p[0] = (L) => c.value.children = L)
                    }, {
                      type: U(fn).Item,
                      perms: [
                        U(Kt).SwitchEditMode,
                        U(Kt).Update,
                        U(Kt).Edit,
                        U(Kt).Create
                      ],
                      itemsContainerClass: "lkt-flex-rows-12 lkt-flex-rows-2--from-768",
                      saveButton: {
                        text: "Save",
                        type: U(Ut).Button
                      },
                      createButton: {
                        text: "Create",
                        type: U(Ut).Button
                      }
                    }, { onClickCreate: b }), Bt({
                      item: pe(({ item: L, index: z }) => [
                        ne(cu, {
                          modelValue: c.value.children[z],
                          "onUpdate:modelValue": (N) => c.value.children[z] = N,
                          onDoubleClick: n
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, [
                      c.value.type !== U(We).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: pe(() => [
                          ne(h, zt(Vi({
                            icon: "lkt-icn-arrow-left",
                            events: {
                              click: v
                            }
                          })), null, 16),
                          ne(h, zt(Vi({
                            icon: "lkt-icn-check",
                            disabled: f.value.length === 0,
                            events: {
                              click: w
                            }
                          })), null, 16)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : (O(), Q(C, Le({
                      key: 1,
                      modelValue: c.value,
                      "onUpdate:modelValue": p[2] || (p[2] = (L) => c.value = L)
                    }, {
                      view: U(To).Inline,
                      mode: c.value.id ? U(_l).Update : U(_l).Create,
                      editing: !1,
                      perms: ["switch-edit-mode", "update"],
                      createButton: {
                        ...(x = d.fileBrowserConfig) == null ? void 0 : x.entityCreateButton,
                        resourceData: c.value,
                        events: {
                          click: () => {
                            for (let L in c.value)
                              d.modelValue[L] = d.entity[L];
                          }
                        }
                      },
                      updateButton: {
                        ...(I = d.fileBrowserConfig) == null ? void 0 : I.entityUpdateButton,
                        resourceData: c.value,
                        events: {
                          click: () => {
                            for (let L in c.value)
                              d.modelValue[L] = d.entity[L];
                          }
                        }
                      }
                    }), Bt({
                      item: pe(({ item: L, editMode: z }) => [
                        ne(hu, {
                          modelValue: c.value,
                          "onUpdate:modelValue": p[1] || (p[1] = (N) => c.value = N),
                          "file-browser-config": d.fileBrowserConfig,
                          "edit-mode": z
                        }, null, 8, ["modelValue", "file-browser-config", "edit-mode"])
                      ]),
                      _: 2
                    }, [
                      c.value.type !== U(We).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: pe(() => [
                          ne(h, zt(Vi({
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
}), Tu = (e, t) => (ee.customValueSlots[e] = t, !0), Lu = (e, t) => (ee.customEditSlots[e] = t, !0), zu = {
  install: (e) => {
    e.component("lkt-field") === void 0 && (e.component("lkt-field", At), kl("lkt-field-language-edit", ru), kl("lkt-file-browser", bu));
  }
}, Bu = (e) => {
  ee.defaultEmptyValueSlot = e;
}, Nu = (e, t) => {
  ee.optionSlots[e] = t;
}, Ru = (e) => ee.undoText = e, Au = (e) => ee.clearText = e, Iu = (e) => ee.i18nText = e, Mu = (e) => ee.switchEditionOnText = e, Du = (e) => ee.switchEditionOffText = e, Vu = (e) => ee.showPasswordOnText = e, Hu = (e) => ee.showPasswordOffText = e, Fu = (e) => ee.dateReadFormat = e, Ou = (e) => ee.defaultDateReadFormat = e, Pu = (e, t, i = "default") => {
  i || (i = "default"), ee.validationMessages[i] || (ee.validationMessages[i] = {}), ee.validationMessages[i][e] = t;
}, Uu = (e) => (ee.validationIconSlot = e, !0), Wu = (e = 2, t = ".", i = ".", o = !0, l = "") => l !== "" ? (ee.langNumberFormat[l].amountOfDecimals = e, ee.langNumberFormat[l].decimalSeparator = t, ee.langNumberFormat[l].thousandsSeparator = i, ee.langNumberFormat[l].removeDecimalsIfZero = o, !0) : (ee.amountOfDecimals = e, ee.decimalSeparator = t, ee.thousandsSeparator = i, ee.removeDecimalsIfZero = o, !0), Zu = (e) => {
  ee.readTextMaxLength = e;
}, $u = (e, t) => {
  ee.modalPerItemType[e] = t;
};
export {
  Gu as Field,
  At as LktField,
  Ku as Option,
  zu as default,
  Au as setFieldClearText,
  Fu as setFieldDateReadFormat,
  Ou as setFieldDefaultDateReadFormat,
  Bu as setFieldEmptySlot,
  Iu as setFieldI18nText,
  Wu as setFieldNumberFormat,
  Nu as setFieldOptionSlot,
  Hu as setFieldShowPasswordOffText,
  Vu as setFieldShowPasswordOnText,
  Du as setFieldSwitchEditionOffText,
  Mu as setFieldSwitchEditionOnText,
  Ru as setFieldUndoText,
  Uu as setFieldValidationIconSlot,
  Pu as setFieldValidationMessage,
  $u as setModalPerItemType,
  Zu as setReadTextMaxLength,
  Lu as setTextEditSlot,
  Tu as setTextValueSlot
};
