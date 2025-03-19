import { defineComponent as ve, computed as ee, resolveComponent as re, createBlock as K, openBlock as F, normalizeClass as je, ref as Y, watch as fe, withCtx as de, createCommentVNode as oe, resolveDynamicComponent as Lt, mergeProps as ge, createElementBlock as se, createElementVNode as le, toDisplayString as Ct, Fragment as Ue, renderList as nt, createVNode as Q, unref as H, normalizeStyle as Cl, withDirectives as Pe, vModelCheckbox as mo, onMounted as ji, vModelText as Ai, vShow as bt, nextTick as Rt, createTextVNode as It, useSlots as Gi, renderSlot as et, createStaticVNode as go, createSlots as Pt, setBlockTracking as wl, normalizeProps as Ve, guardReactiveProps as qe, mergeDefaults as vo, isRef as Ze, vModelDynamic as bo } from "vue";
import { stripTags as fn, fill as yo, generateRandomString as _o, formatNumber as kl, isEmail as Co } from "lkt-string-tools";
import { httpCall as Wi } from "lkt-http-client";
import { __ as hn, currentLanguage as pn, availableLanguages as wo } from "lkt-i18n";
import { extractPropValue as yt, Option as Bi, FieldType as Z, LktColor as mn, TooltipLocationX as gn, TooltipLocationY as vn, ButtonType as Ri, FieldValidation as Be, ValidationStatus as Ne, MultipleOptionsDisplay as ii, TableType as bn, booleanFieldTypes as _t, TablePermission as xl, fieldsWithMultipleMode as ko, FieldValidationType as Sl, extractI18nValue as Ot, fieldTypesWithoutUndo as xo, fieldTypesWithoutClear as So, FieldAutoValidationTrigger as Eo, textFieldTypes as Lo, fieldTypesWithOptions as El, getDefaultValues as Ut, Field as To, ToastPositionX as Ll, LktSettings as Ae, ensureFieldConfig as Ii, ItemCrudView as $t, ItemCrudMode as Zt, AccordionType as Et, AccordionToggleMode as Oi, Image as zo, Icon as Bo, Accordion as No, Box as Ao } from "lkt-vue-kernel";
import { Field as fd, Option as hd } from "lkt-vue-kernel";
import { date as Wt } from "lkt-date-tools";
import { openToast as Tl } from "lkt-toast";
import { addModal as xt } from "lkt-modal";
const Ce = class Ce {
};
Ce.defaultEmptyValueSlot = "", Ce.customValueSlots = {}, Ce.customEditSlots = {}, Ce.searchKeyForResource = "query", Ce.optionSlots = {}, Ce.defaultDateIcon = "lkt-icn-calendar-empty-outline", Ce.defaultNumberFeaturedButton = "subtract", Ce.undoText = "", Ce.clearText = "", Ce.i18nText = "", Ce.switchEditionOnText = "", Ce.switchEditionOffText = "", Ce.showPasswordOnText = "", Ce.showPasswordOffText = "", Ce.dateReadFormat = "", Ce.defaultDateReadFormat = "Y-m-d", Ce.langDateReadFormat = {
  en: "Y-m-d",
  es: "d/m/Y"
}, Ce.acceptTypes = {
  file: "*/*",
  image: "image/*"
}, Ce.validationIconSlot = "", Ce.validationMessages = {
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
}, Ce.amountOfDecimals = void 0, Ce.decimalSeparator = ".", Ce.thousandsSeparator = "", Ce.removeDecimalsIfZero = !0, Ce.langNumberFormat = {
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
}, Ce.readTextMaxLength = void 0, Ce.modalPerItemType = {};
let te = Ce;
const yn = /* @__PURE__ */ ve({
  __name: "UndoButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, o = e, l = ee(() => te.undoText), a = ee(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), d = () => i("click");
    return (f, n) => {
      const g = re("lkt-button");
      return F(), K(g, {
        text: f.insideEllipsis ? l.value : "",
        title: l.value,
        class: je([a.value, "lkt-field--btn-undo"]),
        icon: "lkt-icn-undo",
        onClick: d
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), _n = /* @__PURE__ */ ve({
  __name: "ClearButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, o = e, l = ee(() => te.clearText), a = ee(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), d = () => i("click");
    return (f, n) => {
      const g = re("lkt-button");
      return F(), K(g, {
        text: f.insideEllipsis ? l.value : "",
        title: l.value,
        class: je(a.value),
        icon: "lkt-icn-cancel",
        onClick: d
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), $i = /* @__PURE__ */ ve({
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
    const i = t, o = e, l = Y(o.modelValue);
    fe(() => o.modelValue, (g) => l.value = g), fe(l, (g) => i("update:modelValue", g));
    const a = ee(() => l.value ? te.showPasswordOnText : te.showPasswordOffText), d = ee(() => l.value === !0 ? "lkt-icn-see" : "lkt-icn-not-see"), f = ee(() => o.isFeatured ? "lkt-field--atn-btn" : o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), n = () => i("click");
    return (g, u) => {
      const v = re("lkt-button");
      return F(), K(v, {
        text: g.insideEllipsis ? a.value : "",
        title: a.value,
        class: je(f.value),
        icon: d.value,
        onClick: n,
        checked: l.value,
        "onUpdate:checked": u[0] || (u[0] = (k) => l.value = k),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Cn = /* @__PURE__ */ ve({
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
    const i = t, o = e, l = Y(o.modelValue);
    fe(() => o.modelValue, (g) => l.value = g), fe(l, (g) => i("update:modelValue", g));
    const a = ee(() => l.value ? te.switchEditionOnText : te.switchEditionOffText), d = ee(() => l.value === !0 ? "lkt-icon-see" : "lkt-icn-edit"), f = ee(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), n = () => i("click");
    return (g, u) => {
      const v = re("lkt-button");
      return F(), K(v, {
        text: g.insideEllipsis ? a.value : "",
        title: a.value,
        class: je(f.value),
        icon: d.value,
        onClick: n,
        checked: l.value,
        "onUpdate:checked": u[0] || (u[0] = (k) => l.value = k),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Ro = /* @__PURE__ */ ve({
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
    const i = t, o = e, l = Y(o.showPasswordCheck);
    fe(() => o.showPasswordCheck, (d) => l.value = d), fe(l, (d) => i("update:showPasswordCheck", d));
    const a = Y(o.showEditionCheck);
    return fe(() => o.showEditionCheck, (d) => a.value = d), fe(a, (d) => i("update:showEditionCheck", d)), (d, f) => {
      const n = re("lkt-button");
      return F(), K(n, {
        split: "",
        "split-icon": "lkt-icn-ellipsis-menu-vertical",
        class: "lkt-field--info-btn"
      }, {
        split: de(({ doClose: g }) => [
          d.showUndo ? (F(), K(yn, {
            key: 0,
            onClick: f[0] || (f[0] = () => i("undo")),
            "inside-ellipsis": ""
          })) : oe("", !0),
          d.showClear ? (F(), K(_n, {
            key: 1,
            onClick: f[1] || (f[1] = () => i("clear")),
            "inside-ellipsis": ""
          })) : oe("", !0),
          d.showPassword ? (F(), K($i, {
            key: 2,
            modelValue: l.value,
            "onUpdate:modelValue": f[2] || (f[2] = (u) => l.value = u),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : oe("", !0),
          d.showEdition ? (F(), K(Cn, {
            key: 3,
            modelValue: a.value,
            "onUpdate:modelValue": f[3] || (f[3] = (u) => a.value = u),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : oe("", !0)
        ]),
        _: 1
      });
    };
  }
}), zl = /* @__PURE__ */ ve({
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
    const i = t, o = e, l = Y(o.modelValue);
    fe(() => o.modelValue, (f) => l.value = f, { deep: !0 }), fe(l, (f) => i("update:modelValue", f), { deep: !0 });
    const a = ee(() => te.i18nText), d = ee(() => o.isFeatured ? "lkt-field--atn-btn" : o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (f, n) => {
      const g = re("lkt-button");
      return F(), K(g, {
        text: f.insideEllipsis ? a.value : "",
        title: a.value,
        class: je(d.value),
        icon: "lkt-icn-lang-picker",
        modal: "lkt-field-language-edit",
        "modal-data": { translations: l.value, type: f.type }
      }, null, 8, ["text", "title", "class", "modal-data"]);
    };
  }
}), Io = (e, t, i) => (e = Number(e), t !== !1 && e < t && (e = t), i !== !1 && e > i && (e = i), e), Ni = (e, t) => {
  if (typeof e == "string" && (e = yt(e, t), typeof e == "string" && e.startsWith("__:"))) {
    let i = e.substring(3), o = hn(i), l = [];
    for (let a in o) l.push({ value: a, label: o[a] });
    return Ni(l, t);
  }
  return Array.isArray(e) ? e.length === 0 ? e : e.map((i) => {
    if (typeof i == "object") return new Bi(i);
    if (typeof i == "string" || typeof i == "number")
      return new Bi({
        label: String(i),
        value: i
      });
  }).filter((i) => typeof i < "u") : [];
}, Ui = (e, t = "", i = !0) => {
  if (t === "") return e;
  const o = String(t).toLowerCase();
  return e.filter((l) => {
    let a = String(l.label).toLowerCase();
    return a.indexOf(o) !== -1 && (i || a !== o);
  });
}, ei = (e, t) => {
  if (t !== "")
    return e.find((i) => Array.isArray(t) ? t.includes(i.value) : i.value == t);
}, Mo = (e, t, i) => {
  const o = /* @__PURE__ */ new Set(), l = [...e, ...Ni(t, i)], a = [];
  return l.forEach((d) => {
    let f = [d.value, d.label].join("-");
    o.has(f) || (a.push(d), o.add(f));
  }), a;
}, Do = (e, t, i) => {
  if (i) {
    if (Array.isArray(t)) {
      let o = t.findIndex((l) => l == e.value);
      return typeof o > "u" ? !1 : o > -1;
    }
    return !1;
  }
  return e.value == t;
}, Bl = (e, t) => {
  let i = t.findIndex((o) => o == e.value);
  return typeof i > "u" && (i = -1), i;
}, Ki = (e) => !(Object.prototype.toString.call(e) === "[object Date]" && isNaN(e)), wn = (e, t) => typeof e > "u" ? "" : (typeof e == "string" && (e = new Date(e)), Ki(e) ? Wt(t, e) : ""), Vo = /* @__PURE__ */ ve({
  __name: "DropdownButton",
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, o = ee(() => te.undoText), l = ee(() => "lkt-field--info-btn"), a = () => i("click");
    return (d, f) => {
      const n = re("lkt-button");
      return F(), K(n, {
        text: o.value,
        title: o.value,
        class: je([l.value, "lkt-field--btn-dropdown"]),
        icon: "lkt-icn-angle-bottom",
        onClick: a,
        tabindex: "-1"
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Ho = {
  key: 0,
  class: "lkt-field--dropdown-option--icon-container"
}, Fo = { class: "lkt-field--dropdown-option--label-container" }, wt = /* @__PURE__ */ ve({
  __name: "DropdownOption",
  props: {
    option: { default: () => new Bi() },
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
    const i = t, o = e, l = ee(() => o.option.icon !== "" ? o.option.icon : typeof o.icon == "function" ? o.icon(o.option) : o.icon), a = ee(() => {
      if (typeof o.text < "u") {
        if (typeof o.text == "function")
          return o.text(o.option);
        if (o.text !== "") return o.text;
      }
      return d.value;
    }), d = ee(() => typeof o.labelFormatter == "function" ? o.labelFormatter(o.option) : o.option.label), f = ee(() => typeof o.customClass == "function" ? o.customClass(o.option) : typeof o.customClass < "u" ? o.customClass : `lkt-opt-${o.option.value}`), n = ee(() => {
      if (o.optionSlot && !(typeof te.optionSlots[o.optionSlot] > "u"))
        return te.optionSlots[o.optionSlot];
    }), g = ee(() => n.value ? n.value : o.isTag ? "lkt-tag" : !o.editable && (o.modal !== "" || o.option.modal !== "") ? "lkt-button" : !o.editable && o.download !== "" ? "lkt-anchor" : "div"), u = ee(() => {
      if (g.value === "lkt-button") {
        let E = o.option.modal;
        o.modal && (E = o.modal);
        let S = E;
        return typeof E == "function" && (S = () => E(o.option)), {
          modal: S,
          modalData: o.modalData,
          modalKey: o.option.value,
          icon: l.value
        };
      }
      if (g.value === "lkt-anchor") {
        let E = o.download;
        typeof o.download == "function" ? E = () => o.download(o.option) : o.download.startsWith("prop:") && (E = o.download.substring(5), E = o.option[E]);
        let S = o.download !== "";
        return {
          href: E,
          target: S ? "_blank" : "",
          download: S
        };
      }
      return g.value === "lkt-tag" ? {
        type: "action-icon",
        icon: "lkt-icn-cancel"
      } : {};
    }), v = () => {
      i("click");
    }, k = () => {
      i("click-icon", o.option);
    };
    return (E, S) => {
      const R = re("lkt-tag");
      return F(), K(Lt(g.value), ge(u.value, {
        class: ["lkt-field--dropdown-option", f.value],
        title: a.value,
        onClick: v,
        onClickIcon: k
      }), {
        default: de(() => [
          l.value && g.value !== "lkt-button" ? (F(), se("div", Ho, [
            le("i", {
              class: je(l.value)
            }, null, 2)
          ])) : oe("", !0),
          le("div", Fo, Ct(a.value), 1),
          (F(!0), se(Ue, null, nt(E.option.tags, (s) => (F(), K(R, ge({ ref_for: !0 }, s), null, 16))), 256))
        ]),
        _: 1
      }, 16, ["class", "title"]);
    };
  }
}), Oo = { class: "lkt-field-color--tooltip--rgba-container" }, Uo = { class: "lkt-field-color--tooltip--numeric-input-container" }, Po = { class: "like-lkt-field-label" }, ti = /* @__PURE__ */ ve({
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
    const i = t, o = e, l = Y(o.modelValue);
    return fe(() => o.modelValue, (a) => l.value = a), fe(l, (a) => i("update:modelValue", a)), (a, d) => (F(), se("div", Oo, [
      le("div", Uo, [
        le("label", Po, Ct(a.label), 1),
        Q($e, ge({
          modelValue: l.value,
          "onUpdate:modelValue": d[0] || (d[0] = (f) => l.value = f)
        }, {
          type: H(Z).Number,
          min: 0,
          max: 255,
          step: 1,
          canStep: !1
        }), null, 16, ["modelValue"])
      ]),
      Q($e, ge({
        class: ["color-range", a.rangeClass],
        modelValue: l.value,
        "onUpdate:modelValue": d[1] || (d[1] = (f) => l.value = f)
      }, {
        type: H(Z).Range,
        min: 0,
        max: 255,
        step: 1
      }), null, 16, ["class", "modelValue"])
    ]));
  }
}), Wo = (e, t, i, o) => new mn({ r: e, g: t, b: i, a: o }).toString(), Nl = (e) => mn.fromHexColor(e), $o = (e) => e.getContrastFontColor(), Zo = { class: "lkt-grid-1" }, qo = { class: "lkt-field-color--tooltip--rgba-container" }, jo = { class: "lkt-field-color--tooltip--hex-input-container" }, kn = /* @__PURE__ */ ve({
  __name: "ColorInput",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, o = e, l = (R) => {
      if ([0, 1].includes(R.length))
        f.value = 0, n.value = 0, g.value = 0, u.value = 255;
      else if ([7, 9].includes(R.length)) {
        let s = Nl(R);
        f.value = s.r, n.value = s.g, g.value = s.b, u.value = s.a;
      }
    }, a = () => {
      v.value = Wo(
        f.value,
        n.value,
        g.value,
        u.value
      );
    }, d = () => {
      l(v.value);
    }, f = Y(255), n = Y(255), g = Y(255), u = Y(255), v = Y(o.modelValue);
    l(v.value), fe([f, n, g, u], a), fe(() => o.modelValue, (R) => v.value = R), fe(v, (R) => i("update:modelValue", R));
    const k = ee(() => $o(Nl(v.value))), E = ee(() => v.value === "" || v.value === "#" ? {} : {
      background: v.value,
      "--lkt-btn-bg": v.value,
      color: k.value,
      "--lkt-btn-color": k.value
    }), S = ee(() => v.value === "" || v.value === "#" ? {} : {
      "--lkt-field-bg-input": v.value,
      "--lkt-field-color": k.value
    });
    return (R, s) => {
      const r = re("lkt-button");
      return F(), K(r, {
        class: "lkt-field--toggle-button",
        style: Cl(E.value),
        text: v.value,
        type: H(Ri).Tooltip,
        tooltip: {
          class: "lkt-field-color--tooltip",
          locationY: H(vn).Bottom,
          locationX: H(gn).LeftCorner
        }
      }, {
        tooltip: de(({ doClose: c }) => [
          le("div", Zo, [
            le("div", qo, [
              le("div", jo, [
                s[5] || (s[5] = le("label", { class: "like-lkt-field-label" }, "HEX", -1)),
                Q($e, {
                  modelValue: v.value,
                  "onUpdate:modelValue": s[0] || (s[0] = (h) => v.value = h),
                  style: Cl(S.value),
                  onChange: d
                }, null, 8, ["modelValue", "style"])
              ])
            ]),
            Q(ti, {
              modelValue: f.value,
              "onUpdate:modelValue": s[1] || (s[1] = (h) => f.value = h),
              label: "R",
              "range-class": "color-range--red"
            }, null, 8, ["modelValue"]),
            Q(ti, {
              modelValue: n.value,
              "onUpdate:modelValue": s[2] || (s[2] = (h) => n.value = h),
              label: "G",
              "range-class": "color-range--green"
            }, null, 8, ["modelValue"]),
            Q(ti, {
              modelValue: g.value,
              "onUpdate:modelValue": s[3] || (s[3] = (h) => g.value = h),
              label: "B",
              "range-class": "color-range--blue"
            }, null, 8, ["modelValue"]),
            Q(ti, {
              modelValue: u.value,
              "onUpdate:modelValue": s[4] || (s[4] = (h) => u.value = h),
              label: "A",
              "range-class": "color-range--alpha"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["style", "text", "type", "tooltip"]);
    };
  }
}), Go = /* @__PURE__ */ ve({
  __name: "MultipleColorInput",
  props: {
    modelValue: { default: () => [] },
    editMode: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] }
  },
  setup(e) {
    const t = e, i = Y(t.modelValue), o = ee(() => typeof t.max == "boolean" || i.value.length < t.max ? ["inline-create"] : []);
    return (l, a) => {
      const d = re("lkt-table");
      return F(), K(d, {
        type: "item",
        modelValue: i.value,
        "onUpdate:modelValue": a[0] || (a[0] = (f) => i.value = f),
        perms: o.value,
        "edit-mode": l.editMode,
        "new-value-generator": () => "",
        "required-items-for-top-create": 999999
      }, {
        item: de(({ item: f, index: n, isLoading: g, canCreate: u, canRead: v, canUpdate: k, canDrop: E, doDrop: S }) => [
          Q(kn, {
            modelValue: i.value[n],
            "onUpdate:modelValue": (R) => i.value[n] = R
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "perms", "edit-mode"]);
    };
  }
}), Ko = (e, t, i, o) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\D+/g, "").length < l && e.push(Be.createMinNumbers(l, Ne.Ko));
  }
  if (typeof o < "u") {
    let l = parseInt(o);
    t.replace(/\D+/g, "").length > l && e.push(Be.createMaxNumbers(l, Ne.Ko));
  }
}, Yo = (e, t, i, o) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/[^A-Z]+/g, "").length < l && e.push(Be.createMinUpperChars(l, Ne.Ko));
  }
  if (typeof o < "u") {
    let l = parseInt(o);
    t.replace(/[^A-Z]+/g, "").length > l && e.push(Be.createMaxUpperChars(l, Ne.Ko));
  }
}, Xo = (e, t, i, o) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/[A-Z]+/g, "").length < l && e.push(Be.createMinLowerChars(l, Ne.Ko));
  }
  if (typeof o < "u") {
    let l = parseInt(o);
    t.replace(/[A-Z]+/g, "").length > l && e.push(Be.createMaxLowerChars(l, Ne.Ko));
  }
}, Jo = (e, t, i, o) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\d+/g, "").length < l && e.push(Be.createMinChars(l, Ne.Ko));
  }
  if (typeof o < "u") {
    let l = parseInt(o);
    t.replace(/\d+/g, "").length > l && e.push(Be.createMaxChars(l, Ne.Ko));
  }
}, Qo = (e, t, i, o) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < l && e.push(Be.createMinSpecialChars(l, Ne.Ko));
  }
  if (typeof o < "u") {
    let l = parseInt(o);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > l && e.push(Be.createMaxSpecialChars(l, Ne.Ko));
  }
}, Al = (e, t = "default") => {
  if (!e) return "";
  let i = te.validationMessages[t] && te.validationMessages[t][e] ? te.validationMessages[t][e] : "";
  return i || (i = ""), i;
}, es = { class: "boolean-input" }, ts = { class: "boolean-input-label" }, is = { class: "boolean-input--check-on" }, ls = {
  key: 0,
  class: "lkt-icn-ok"
}, ns = ["innerHTML"], os = ["name", "id", "disabled", "readonly", "value", "checked"], ss = /* @__PURE__ */ ve({
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
    const i = t, o = e, l = Y(null), a = Y(o.modelValue), d = Y(a.value ? "true" : "false"), f = Y(o.focusing), n = (u) => {
      f.value = !0, i("focus", u);
    }, g = (u) => {
      f.value = !1, i("blur", u);
    };
    return fe(() => o.modelValue, (u) => a.value = u), fe(a, (u) => i("update:modelValue", u)), (u, v) => (F(), se("div", es, [
      le("div", ts, [
        le("div", is, [
          u.type === H(Z).Check && a.value ? (F(), se("i", ls)) : oe("", !0)
        ])
      ]),
      u.label ? (F(), se("div", {
        key: 0,
        class: "lkt-field--label",
        innerHTML: u.label
      }, null, 8, ns)) : oe("", !0),
      Pe(le("input", {
        "onUpdate:modelValue": v[0] || (v[0] = (k) => a.value = k),
        type: "checkbox",
        ref_key: "input",
        ref: l,
        name: u.name,
        id: u.id,
        disabled: !u.editable || u.disabled,
        readonly: !u.editable || u.readonly,
        value: d.value,
        checked: a.value,
        onFocus: n,
        onBlur: g
      }, null, 40, os), [
        [mo, a.value]
      ])
    ]));
  }
});
function xe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var li = { exports: {} }, as = li.exports, Rl;
function rs() {
  return Rl || (Rl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : as, function(t, i) {
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
  }(li)), li.exports;
}
var us = /* @__PURE__ */ rs();
const xn = /* @__PURE__ */ xe(us);
var ni = { exports: {} }, ds = ni.exports, Il;
function cs() {
  return Il || (Il = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ds, function(t, i) {
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
  }(ni)), ni.exports;
}
var fs = /* @__PURE__ */ cs();
const Sn = /* @__PURE__ */ xe(fs);
var oi = { exports: {} }, hs = oi.exports, Ml;
function ps() {
  return Ml || (Ml = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : hs, function(t, i) {
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
  }(oi)), oi.exports;
}
var ms = /* @__PURE__ */ ps();
const En = /* @__PURE__ */ xe(ms);
var si = { exports: {} }, gs = si.exports, Dl;
function vs() {
  return Dl || (Dl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : gs, function(t, i) {
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
  }(si)), si.exports;
}
var bs = /* @__PURE__ */ vs();
const Ln = /* @__PURE__ */ xe(bs);
var ai = { exports: {} }, ys = ai.exports, Vl;
function _s() {
  return Vl || (Vl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ys, function(t, i) {
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
  }(ai)), ai.exports;
}
var Cs = /* @__PURE__ */ _s();
const Mi = /* @__PURE__ */ xe(Cs);
var ri = { exports: {} }, ws = ri.exports, Hl;
function ks() {
  return Hl || (Hl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ws, function(t, i) {
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
  }(ri)), ri.exports;
}
var xs = /* @__PURE__ */ ks();
const Tn = /* @__PURE__ */ xe(xs);
var ui = { exports: {} }, Ss = ui.exports, Fl;
function Es() {
  return Fl || (Fl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Ss, function(t, i) {
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
  }(ui)), ui.exports;
}
var Ls = /* @__PURE__ */ Es();
const zn = /* @__PURE__ */ xe(Ls);
var di = { exports: {} }, Ts = di.exports, Ol;
function zs() {
  return Ol || (Ol = 1, function(e) {
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
  }(di)), di.exports;
}
var Bs = /* @__PURE__ */ zs();
const Bn = /* @__PURE__ */ xe(Bs);
var ci = { exports: {} }, Ns = ci.exports, Ul;
function As() {
  return Ul || (Ul = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Ns, function(t, i) {
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
  }(ci)), ci.exports;
}
var Rs = /* @__PURE__ */ As();
const Nn = /* @__PURE__ */ xe(Rs);
var fi = { exports: {} }, Is = fi.exports, Pl;
function Ms() {
  return Pl || (Pl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG una finestra con un documento");
        return i(o);
      };
    })(typeof window < "u" ? window : Is, function(t, i) {
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
  }(fi)), fi.exports;
}
var Ds = /* @__PURE__ */ Ms();
const An = /* @__PURE__ */ xe(Ds);
var hi = { exports: {} }, Vs = hi.exports, Wl;
function Hs() {
  return Wl || (Wl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Vs, function(t, i) {
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
  }(hi)), hi.exports;
}
var Fs = /* @__PURE__ */ Hs();
const Rn = /* @__PURE__ */ xe(Fs);
var pi = { exports: {} }, Os = pi.exports, $l;
function Us() {
  return $l || ($l = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Os, function(t, i) {
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
  }(pi)), pi.exports;
}
var Ps = /* @__PURE__ */ Us();
const In = /* @__PURE__ */ xe(Ps);
var mi = { exports: {} }, Ws = mi.exports, Zl;
function $s() {
  return Zl || (Zl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Ws, function(t, i) {
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
  }(mi)), mi.exports;
}
var Zs = /* @__PURE__ */ $s();
const Mn = /* @__PURE__ */ xe(Zs);
var gi = { exports: {} }, qs = gi.exports, ql;
function js() {
  return ql || (ql = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : qs, function(t, i) {
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
  }(gi)), gi.exports;
}
var Gs = /* @__PURE__ */ js();
const Dn = /* @__PURE__ */ xe(Gs);
var vi = { exports: {} }, Ks = vi.exports, jl;
function Ys() {
  return jl || (jl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Ks, function(t, i) {
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
  }(vi)), vi.exports;
}
var Xs = /* @__PURE__ */ Ys();
const Vn = /* @__PURE__ */ xe(Xs);
var bi = { exports: {} }, Js = bi.exports, Gl;
function Qs() {
  return Gl || (Gl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Js, function(t, i) {
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
  }(bi)), bi.exports;
}
var ea = /* @__PURE__ */ Qs();
const Hn = /* @__PURE__ */ xe(ea);
var yi = { exports: {} }, ta = yi.exports, Kl;
function ia() {
  return Kl || (Kl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ta, function(t, i) {
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
  }(yi)), yi.exports;
}
var la = /* @__PURE__ */ ia();
const Fn = /* @__PURE__ */ xe(la);
var _i = { exports: {} }, na = _i.exports, Yl;
function oa() {
  return Yl || (Yl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : na, function(t, i) {
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
  }(_i)), _i.exports;
}
var sa = /* @__PURE__ */ oa();
const On = /* @__PURE__ */ xe(sa);
var Ci = { exports: {} }, aa = Ci.exports, Xl;
function ra() {
  return Xl || (Xl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : aa, function(t, i) {
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
  }(Ci)), Ci.exports;
}
var ua = /* @__PURE__ */ ra();
const Un = /* @__PURE__ */ xe(ua);
var wi = { exports: {} }, da = wi.exports, Jl;
function ca() {
  return Jl || (Jl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : da, function(t, i) {
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
  }(wi)), wi.exports;
}
var fa = /* @__PURE__ */ ca();
const Pn = /* @__PURE__ */ xe(fa);
var ki = { exports: {} }, ha = ki.exports, Ql;
function pa() {
  return Ql || (Ql = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ha, function(t, i) {
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
  }(ki)), ki.exports;
}
var ma = /* @__PURE__ */ pa();
const Wn = /* @__PURE__ */ xe(ma);
var xi = { exports: {} }, ga = xi.exports, en;
function va() {
  return en || (en = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ga, function(t, i) {
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
  }(xi)), xi.exports;
}
var ba = /* @__PURE__ */ va();
const $n = /* @__PURE__ */ xe(ba), ya = { ckb: xn, cs: Sn, da: En, de: Ln, en: Mi, es: Tn, fr: zn, he: Bn, hu: Nn, it: An, ja: Rn, ko: In, lv: Mn, nl: Dn, pl: Vn, pt_br: Hn, ro: Fn, ru: On, se: Un, ua: Pn, ur: Wn, zh_cn: $n }, tn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: xn,
  cs: Sn,
  da: En,
  de: Ln,
  default: ya,
  en: Mi,
  es: Tn,
  fr: zn,
  he: Bn,
  hu: Nn,
  it: An,
  ja: Rn,
  ko: In,
  lv: Mn,
  nl: Dn,
  pl: Vn,
  pt_br: Hn,
  ro: Fn,
  ru: On,
  se: Un,
  ua: Pn,
  ur: Wn,
  zh_cn: $n
}, Symbol.toStringTag, { value: "Module" })), _a = {
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
}, Ca = {
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
    for (let d = 0, f, n; d < l.length; d++)
      f = l[d], n = t.toolbar["align" + f.charAt(0).toUpperCase() + f.slice(1)], a += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + f + '" title="' + n + '" aria-label="' + n + '"><span class="se-list-icon">' + i["align_" + f] + "</span>" + n + "</button></li>";
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
    for (let a = 0, d = l.length; a < d; a++)
      this.util.setStyle(l[a], "textAlign", i === o ? "" : i);
    this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1);
  }
}, wa = {
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
    let o, l, a, d, f = e.options.font, n = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (a = 0, d = f.length; a < d; a++)
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
}, ka = {
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
    for (let d = 0, f = t.fontSizeUnit, n = l.length, g; d < n; d++)
      g = l[d], a += '<li><button type="button" class="se-btn-list" data-value="' + g + f + '" title="' + g + f + '" aria-label="' + g + f + '" style="font-size:' + g + f + ';">' + g + "</button></li>";
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
}, Zn = {
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
    let a = [], d = '<div class="se-list-inner">';
    for (let f = 0, n = l.length, g; f < n; f++)
      g = l[f], g && (typeof g == "string" && (a.push(g), f < n - 1) || (a.length > 0 && (d += '<div class="se-selector-color">' + t(a) + "</div>", a = []), typeof g == "object" && (d += '<div class="se-selector-color">' + t(g) + "</div>")));
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
      for (let a = 0, d = l.length; a < d; a++)
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
}, xa = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Zn]);
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
}, Sa = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Zn]);
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
}, Ea = {
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
    for (let a = 0, d = o.length; a < d; a++)
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
}, La = {
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
    let d = l[0], f = l[l.length - 1], n = (a.isListCell(d) || a.isComponent(d)) && !d.previousElementSibling ? d.parentNode.previousElementSibling : d.previousElementSibling, g = (a.isListCell(f) || a.isComponent(f)) && !f.nextElementSibling ? f.parentNode.nextElementSibling : f.nextElementSibling;
    const u = o.collapsed, v = {
      sc: o.startContainer,
      so: o.startContainer === o.endContainer && a.onlyZeroWidthSpace(o.startContainer) && o.startOffset === 0 && o.endOffset === 1 ? o.endOffset : o.startOffset,
      ec: o.endContainer,
      eo: o.endOffset
    };
    let k = null, E = !0;
    for (let S = 0, R = l.length; S < R; S++)
      if (!a.isList(a.getRangeFormatElement(l[S], (function(s) {
        return this.getRangeFormatElement(s) && s !== l[S];
      }).bind(a)))) {
        E = !1;
        break;
      }
    if (E && (!n || d.tagName !== n.tagName || e !== n.tagName.toUpperCase()) && (!g || f.tagName !== g.tagName || e !== g.tagName.toUpperCase())) {
      if (i) {
        for (let h = 0, m = l.length; h < m; h++)
          for (let b = h - 1; b >= 0; b--)
            if (l[b].contains(l[h])) {
              l.splice(h, 1), h--, m--;
              break;
            }
      }
      const S = a.getRangeFormatElement(d), R = S && S.tagName === e;
      let s, r;
      const c = (function(h) {
        return !this.isComponent(h);
      }).bind(a);
      R || (r = a.createElement(e));
      for (let h = 0, m = l.length, b, p; h < m; h++)
        p = a.getRangeFormatElement(l[h], c), !(!p || !a.isList(p)) && (b ? b !== p ? (i && a.isListCell(p.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : k = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0), p = l[h].parentNode, R || (r = a.createElement(e)), b = p, s = { r: b, f: [a.getParentElement(l[h], "LI")] }) : s.f.push(a.getParentElement(l[h], "LI")) : (b = p, s = { r: b, f: [a.getParentElement(l[h], "LI")] }), h === m - 1 && (i && a.isListCell(p.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : k = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0)));
    } else {
      const S = n && n.parentNode, R = g && g.parentNode;
      n = S && !a.isWysiwygDiv(S) && S.nodeName === e ? S : n, g = R && !a.isWysiwygDiv(R) && R.nodeName === e ? R : g;
      const s = n && n.tagName === e, r = g && g.tagName === e;
      let c = s ? n : a.createElement(e), h = null, m = null, b = null;
      const p = (function(y) {
        return !this.isComponent(y) && !this.isList(y);
      }).bind(a);
      for (let y = 0, C = l.length, _, w, A, z, L, N, $, W, O; y < C; y++) {
        if (w = l[y], w.childNodes.length === 0 && !a._isIgnoreNodeChange(w)) {
          a.removeItem(w);
          continue;
        }
        if (z = l[y + 1], L = w.parentNode, N = z ? z.parentNode : null, A = a.isListCell(w), O = a.isRangeFormatElement(L) ? L : null, $ = A && !a.isWysiwygDiv(L) ? L.parentNode : L, W = A && !a.isWysiwygDiv(L) ? !z || a.isListCell($) ? L : L.nextSibling : w.nextSibling, _ = a.createElement("LI"), a.copyFormatAttributes(_, w), y === 0 && v.sc === w && (v.sc = _), y === C - 1 && v.ec === w && (v.ec = _), a.isComponent(w)) {
          const D = /^HR$/i.test(w.nodeName);
          D || (_.innerHTML = "<br>"), _.innerHTML += w.outerHTML, D && (_.innerHTML += "<br>");
        } else {
          const D = w.childNodes;
          for (; D[0]; )
            _.appendChild(D[0]);
        }
        c.appendChild(_), (!z || $ !== N || a.isRangeFormatElement(W)) && (h || (h = c), (!s || !z || $ !== N) && !(z && a.isList(N) && N === L) && c.parentNode !== $ && $.insertBefore(c, W)), a.removeItem(w), s && m === null && (m = c.children.length - 1), z && (a.getRangeFormatElement(N, p) !== a.getRangeFormatElement(L, p) || a.isList(N) && a.isList(L) && a.getElementDepth(N) !== a.getElementDepth(L)) && (c = a.createElement(e)), O && O.children.length === 0 && a.removeItem(O);
      }
      m && (h = h.children[m]), r && (b = c.children.length - 1, c.innerHTML += g.innerHTML, c.children[b], a.removeItem(g));
    }
    return this.effectNode = null, u && k || v;
  },
  _detachNested: function(e) {
    const t = e[0], i = e[e.length - 1], o = i.nextElementSibling, l = t.parentNode, a = l.parentNode.nextElementSibling, d = l.parentNode.parentNode;
    for (let n = 0, g = e.length; n < g; n++)
      d.insertBefore(e[n], a);
    if (o && l.children.length > 0) {
      const n = l.cloneNode(!1), g = l.childNodes, u = this.util.getPositionIndex(o);
      for (; g[u]; )
        n.appendChild(g[u]);
      i.appendChild(n);
    }
    l.children.length === 0 && this.util.removeItem(l), this.util.mergeSameTags(d);
    const f = this.util.getEdgeChildNodes(t, i);
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
      let d = this.util.createElement(o.nodeName), f = t[0].previousElementSibling, n = l.nextElementSibling;
      const g = { s: null, e: null, sl: o, el: o };
      for (let k = 0, E = i, S; k < E; k++)
        S = t[k], S.parentNode !== o && (this.plugins.list._insiedList.call(this, o, d, f, n, g), o = S.parentNode, d = this.util.createElement(o.nodeName)), f = S.previousElementSibling, n = S.nextElementSibling, d.appendChild(S);
      this.plugins.list._insiedList.call(this, o, d, f, n, g);
      const u = this.util.getNodeFromPath(g.s, g.sl), v = this.util.getNodeFromPath(g.e, g.el);
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
      const d = t.children;
      for (; d[0]; )
        i.appendChild(d[0]);
      t = i, a = !0;
    }
    if (o && t.tagName === o.tagName) {
      const d = o.children;
      for (; d[0]; )
        t.appendChild(d[0]);
      const f = o.nextElementSibling;
      o.parentNode.removeChild(o), o = f;
    }
    if (!a) {
      this.util.isListCell(i) && (e = i, o = null), e.insertBefore(t, o), l.s || (l.s = this.util.getNodePath(t.firstElementChild.firstChild, e, null), l.sl = e);
      const d = e.contains(l.sl) ? this.util.getNodePath(l.sl, e) : null;
      l.e = this.util.getNodePath(t.lastElementChild.firstChild, e, null), l.el = e, this.util.mergeSameTags(e, [l.s, l.e, d], !1), this.util.mergeNestedTags(e), d && (l.sl = this.util.getNodeFromPath(d, e));
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
    let d = this.setController_table(e);
    o.tableController = d, o.resizeButton = d.querySelector("._se_table_resize"), o.resizeText = d.querySelector("._se_table_resize > span > span"), o.columnFixedButton = d.querySelector("._se_table_fixed_column"), o.headerButton = d.querySelector("._se_table_header");
    let f = this.setController_tableEditor(e, o.cellControllerTop);
    o.resizeDiv = f, o.splitMenu = f.querySelector(".se-btn-group-sub"), o.mergeButton = f.querySelector("._se_table_merge_button"), o.splitButton = f.querySelector("._se_table_split_button"), o.insertRowAboveButton = f.querySelector("._se_table_insert_row_a"), o.insertRowBelowButton = f.querySelector("._se_table_insert_row_b"), a.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, o)), a.addEventListener("click", this.appendTable.bind(e)), f.addEventListener("click", this.onClick_tableController.bind(e)), d.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, l), i.element.relative.appendChild(f), i.element.relative.appendChild(d), l = null, a = null, f = null, d = null, o = null;
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
      const d = e.querySelector("td div");
      this.setRange(d, 0, d, 0), this.plugins.table.reset_table_picker.call(this);
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
      let d = 0;
      for (let u = 0, v = l[0].cells, k = l[0].cells.length; u < k; u++)
        d += v[u].colSpan;
      const f = i._rowIndex = i._trElement.rowIndex;
      i._rowCnt = l.length, i._physical_cellCnt = i._trElement.cells.length, i._logical_cellCnt = d, i._physical_cellIndex = a, i._current_colSpan = i._tdElement.colSpan - 1, i._current_rowSpan - i._trElement.cells[a].rowSpan - 1;
      let n = [], g = [];
      for (let u = 0, v, k; u <= f; u++) {
        v = l[u].cells, k = 0;
        for (let E = 0, S = v.length, R, s, r, c; E < S; E++) {
          if (R = v[E], s = R.colSpan - 1, r = R.rowSpan - 1, c = E + k, g.length > 0)
            for (let h = 0, m; h < g.length; h++)
              m = g[h], !(m.row > u) && (c >= m.index ? (k += m.cs, c += m.cs, m.rs -= 1, m.row = u + 1, m.rs < 1 && (g.splice(h, 1), h--)) : E === S - 1 && (m.rs -= 1, m.row = u + 1, m.rs < 1 && (g.splice(h, 1), h--)));
          if (u === f && E === a) {
            i._logical_cellIndex = c;
            break;
          }
          r > 0 && n.push({
            index: c,
            cs: s + 1,
            rs: r,
            row: -1
          }), k += s;
        }
        g = g.concat(n).sort(function(E, S) {
          return E.index - S.index;
        }), n = [];
      }
      n = null, g = null;
    }
  },
  editTable: function(e, t) {
    const i = this.plugins.table, o = this.context.table, l = o._element, a = e === "row";
    if (a) {
      const d = o._trElement.parentNode;
      if (/^THEAD$/i.test(d.nodeName)) {
        if (t === "up")
          return;
        if (!d.nextElementSibling || !/^TBODY$/i.test(d.nextElementSibling.nodeName)) {
          l.innerHTML += "<tbody><tr>" + i.createCells.call(this, "td", o._logical_cellCnt, !1) + "</tr></tbody>";
          return;
        }
      }
    }
    if (i._ref) {
      const d = o._tdElement, f = i._selectedCells;
      if (a)
        if (t)
          i.setCellInfo.call(this, t === "up" ? f[0] : f[f.length - 1], !0), i.editRow.call(this, t, d);
        else {
          let n = f[0].parentNode;
          const g = [f[0]];
          for (let u = 1, v = f.length, k; u < v; u++)
            k = f[u], n !== k.parentNode && (g.push(k), n = k.parentNode);
          for (let u = 0, v = g.length; u < v; u++)
            i.setCellInfo.call(this, g[u], !0), i.editRow.call(this, t);
        }
      else {
        const n = f[0].parentNode;
        if (t) {
          let g = null;
          for (let u = 0, v = f.length - 1; u < v; u++)
            if (n !== f[u + 1].parentNode) {
              g = f[u];
              break;
            }
          i.setCellInfo.call(this, t === "left" ? f[0] : g || f[0], !0), i.editCell.call(this, t, d);
        } else {
          const g = [f[0]];
          for (let u = 1, v = f.length, k; u < v && (k = f[u], n === k.parentNode); u++)
            g.push(k);
          for (let u = 0, v = g.length; u < v; u++)
            i.setCellInfo.call(this, g[u], !0), i.editCell.call(this, t);
        }
      }
      t || i.init.call(this);
    } else
      i[a ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const d = l.children;
      for (let f = 0; f < d.length; f++)
        d[f].children.length === 0 && (this.util.removeItem(d[f]), f--);
      l.children.length === 0 && this.util.removeItem(l);
    }
  },
  editRow: function(e, t) {
    const i = this.context.table, o = !e, l = e === "up", a = i._rowIndex, d = o || l ? a : a + i._current_rowSpan + 1, f = o ? -1 : 1, n = i._trElements;
    let g = i._logical_cellCnt;
    for (let u = 0, v = a + (o ? -1 : 0), k; u <= v; u++) {
      if (k = n[u].cells, k.length === 0) return;
      for (let E = 0, S = k.length, R, s; E < S; E++)
        R = k[E].rowSpan, s = k[E].colSpan, !(R < 2 && s < 2) && R + u > d && d > u && (k[E].rowSpan = R + f, g -= s);
    }
    if (o) {
      const u = n[a + 1];
      if (u) {
        const v = [];
        let k = n[a].cells, E = 0;
        for (let S = 0, R = k.length, s, r; S < R; S++)
          s = k[S], r = S + E, E += s.colSpan - 1, s.rowSpan > 1 && (s.rowSpan -= 1, v.push({ cell: s.cloneNode(!1), index: r }));
        if (v.length > 0) {
          let S = v.shift();
          k = u.cells, E = 0;
          for (let R = 0, s = k.length, r, c; R < s && (r = k[R], c = R + E, E += r.colSpan - 1, !(c >= S.index && (R--, E--, E += S.cell.colSpan - 1, u.insertBefore(S.cell, r), S = v.shift(), !S))); R++)
            ;
          if (S) {
            u.appendChild(S.cell);
            for (let R = 0, s = v.length; R < s; R++)
              u.appendChild(v[R].cell);
          }
        }
      }
      i._element.deleteRow(d);
    } else {
      const u = i._element.insertRow(d);
      u.innerHTML = this.plugins.table.createCells.call(this, "td", g, !1);
    }
    o ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  editCell: function(e, t) {
    const i = this.context.table, o = this.util, l = !e, a = e === "left", d = i._current_colSpan, f = l || a ? i._logical_cellIndex : i._logical_cellIndex + d + 1, n = i._trElements;
    let g = [], u = [], v = 0;
    const k = [], E = [];
    for (let S = 0, R = i._rowCnt, s, r, c, h, m, b; S < R; S++) {
      s = n[S], r = f, m = !1, c = s.cells, b = 0;
      for (let p = 0, y, C = c.length, _, w, A; p < C && (y = c[p], !!y); p++)
        if (_ = y.rowSpan - 1, w = y.colSpan - 1, l) {
          if (A = p + b, u.length > 0) {
            const z = !c[p + 1];
            for (let L = 0, N; L < u.length; L++)
              N = u[L], !(N.row > S) && (A >= N.index ? (b += N.cs, A = p + b, N.rs -= 1, N.row = S + 1, N.rs < 1 && (u.splice(L, 1), L--)) : z && (N.rs -= 1, N.row = S + 1, N.rs < 1 && (u.splice(L, 1), L--)));
          }
          _ > 0 && g.push({
            rs: _,
            cs: w + 1,
            index: A,
            row: -1
          }), A >= r && A + w <= r + d ? k.push(y) : A <= r + d && A + w >= r ? y.colSpan -= o.getOverlapRangeAtIndex(f, f + d, A, A + w) : _ > 0 && (A < r || A + w > r + d) && E.push({
            cell: y,
            i: S,
            rs: S + _
          }), b += w;
        } else {
          if (p >= r) break;
          if (w > 0) {
            if (v < 1 && w + p >= r) {
              y.colSpan += 1, r = null, v = _ + 1;
              break;
            }
            r -= w;
          }
          if (!m) {
            for (let z = 0, L; z < u.length; z++)
              L = u[z], r -= L.cs, L.rs -= 1, L.rs < 1 && (u.splice(z, 1), z--);
            m = !0;
          }
        }
      if (u = u.concat(g).sort(function(p, y) {
        return p.index - y.index;
      }), g = [], !l) {
        if (v > 0) {
          v -= 1;
          continue;
        }
        r !== null && c.length > 0 && (h = this.plugins.table.createCells.call(this, c[0].nodeName, 0, !0), h = s.insertBefore(h, c[r]));
      }
    }
    if (l) {
      let S, R;
      for (let s = 0, r = k.length, c; s < r; s++)
        c = k[s].parentNode, o.removeItem(k[s]), c.cells.length === 0 && (S || (S = o.getArrayIndex(n, c)), R = o.getArrayIndex(n, c), o.removeItem(c));
      for (let s = 0, r = E.length, c; s < r; s++)
        c = E[s], c.cell.rowSpan = o.getOverlapRangeAtIndex(S, R, c.i, c.rs);
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
    const t = this.util, i = e === "vertical", o = this.context.table, l = o._tdElement, a = o._trElements, d = o._trElement, f = o._logical_cellIndex, n = o._rowIndex, g = this.plugins.table.createCells.call(this, l.nodeName, 0, !0);
    if (i) {
      const u = l.colSpan;
      if (g.rowSpan = l.rowSpan, u > 1)
        g.colSpan = this._w.Math.floor(u / 2), l.colSpan = u - g.colSpan, d.insertBefore(g, l.nextElementSibling);
      else {
        let v = [], k = [];
        for (let E = 0, S = o._rowCnt, R, s; E < S; E++) {
          R = a[E].cells, s = 0;
          for (let r = 0, c = R.length, h, m, b, p; r < c; r++) {
            if (h = R[r], m = h.colSpan - 1, b = h.rowSpan - 1, p = r + s, k.length > 0)
              for (let y = 0, C; y < k.length; y++)
                C = k[y], !(C.row > E) && (p >= C.index ? (s += C.cs, p += C.cs, C.rs -= 1, C.row = E + 1, C.rs < 1 && (k.splice(y, 1), y--)) : r === c - 1 && (C.rs -= 1, C.row = E + 1, C.rs < 1 && (k.splice(y, 1), y--)));
            if (p <= f && b > 0 && v.push({
              index: p,
              cs: m + 1,
              rs: b,
              row: -1
            }), h !== l && p <= f && p + m >= f + u - 1) {
              h.colSpan += 1;
              break;
            }
            if (p > f) break;
            s += m;
          }
          k = k.concat(v).sort(function(r, c) {
            return r.index - c.index;
          }), v = [];
        }
        d.insertBefore(g, l.nextElementSibling);
      }
    } else {
      const u = l.rowSpan;
      if (g.colSpan = l.colSpan, u > 1) {
        g.rowSpan = this._w.Math.floor(u / 2);
        const v = u - g.rowSpan, k = [], E = t.getArrayIndex(a, d) + v;
        for (let r = 0, c, h; r < E; r++) {
          c = a[r].cells, h = 0;
          for (let m = 0, b = c.length, p, y, C; m < b && (C = m + h, !(C >= f)); m++)
            p = c[m], y = p.rowSpan - 1, y > 0 && y + r >= E && C < f && k.push({
              index: C,
              cs: p.colSpan
            }), h += p.colSpan - 1;
        }
        const S = a[E], R = S.cells;
        let s = k.shift();
        for (let r = 0, c = R.length, h = 0, m, b, p, y; r < c; r++) {
          if (p = r + h, m = R[r], b = m.colSpan - 1, y = p + b + 1, s && y >= s.index && (h += s.cs, y += s.cs, s = k.shift()), y >= f || r === c - 1) {
            S.insertBefore(g, m.nextElementSibling);
            break;
          }
          h += b;
        }
        l.rowSpan = v;
      } else {
        g.rowSpan = l.rowSpan;
        const v = t.createElement("TR");
        v.appendChild(g);
        for (let S = 0, R; S < n; S++) {
          if (R = a[S].cells, R.length === 0) return;
          for (let s = 0, r = R.length; s < r; s++)
            S + R[s].rowSpan - 1 >= n && (R[s].rowSpan += 1);
        }
        const k = o._physical_cellIndex, E = d.cells;
        for (let S = 0, R = E.length; S < R; S++)
          S !== k && (E[S].rowSpan += 1);
        d.parentNode.insertBefore(v, d.nextElementSibling);
      }
    }
    this.focusEdge(l), this.plugins.table.setPositionControllerDiv.call(this, l, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, i = this.util, o = e._ref, l = e._selectedCells, a = l[0];
    let d = null, f = null, n = o.ce - o.cs + 1, g = o.re - o.rs + 1, u = "", v = null;
    for (let k = 1, E = l.length, S, R; k < E; k++) {
      S = l[k], v !== S.parentNode && (v = S.parentNode), R = S.children;
      for (let s = 0, r = R.length; s < r; s++)
        i.isFormatElement(R[s]) && i.onlyZeroWidthSpace(R[s].textContent) && i.removeItem(R[s]);
      u += S.innerHTML, i.removeItem(S), v.cells.length === 0 && (d ? f = v : d = v, g -= 1);
    }
    if (d) {
      const k = t._trElements, E = i.getArrayIndex(k, d), S = i.getArrayIndex(k, f || d), R = [];
      for (let s = 0, r; s <= S; s++) {
        if (r = k[s].cells, r.length === 0) {
          R.push(k[s]);
          continue;
        }
        for (let c = 0, h = r.length, m, b; c < h; c++)
          m = r[c], b = m.rowSpan - 1, b > 0 && s + b >= E && (m.rowSpan -= i.getOverlapRangeAtIndex(E, S, s, s + b));
      }
      for (let s = 0, r = R.length; s < r; s++)
        i.removeItem(R[s]);
    }
    a.innerHTML += u, a.colSpan = n, a.rowSpan = g, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, a), i.addClass(a, "se-table-selected-cell"), this.focusEdge(a);
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
    let o, l, a, d;
    e.indexOf("width") > -1 && (o = t.resizeButton.firstElementChild, l = t.resizeText, t._maxWidth ? (a = t.icons.reduction, d = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(i, "se-table-size-auto"), this.util.addClass(i, "se-table-size-100")) : (a = t.icons.expansion, d = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(i, "se-table-size-100"), this.util.addClass(i, "se-table-size-auto")), this.util.changeElement(o, a), this.util.changeTxt(l, d)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(i, "se-table-layout-auto"), this.util.addClass(i, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(i, "se-table-layout-fixed"), this.util.addClass(i, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")));
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
    let d = !0, f = [], n = [];
    const g = i._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let u = 0, v = o.length, k, E; u < v; u++) {
      k = o[u].cells, E = 0;
      for (let S = 0, R = k.length, s, r, c, h; S < R; S++) {
        if (s = k[S], c = s.colSpan - 1, h = s.rowSpan - 1, r = S + E, f.length > 0)
          for (let m = 0, b; m < f.length; m++)
            b = f[m], !(b.row > u) && (r >= b.index ? (E += b.cs, r += b.cs, b.rs -= 1, b.row = u + 1, b.rs < 1 && (f.splice(m, 1), m--)) : S === R - 1 && (b.rs -= 1, b.row = u + 1, b.rs < 1 && (f.splice(m, 1), m--)));
        if (d) {
          if ((s === e || s === t) && (g.cs = g.cs !== null && g.cs < r ? g.cs : r, g.ce = g.ce !== null && g.ce > r + c ? g.ce : r + c, g.rs = g.rs !== null && g.rs < u ? g.rs : u, g.re = g.re !== null && g.re > u + h ? g.re : u + h, g._i += 1), g._i === 2) {
            d = !1, f = [], n = [], u = -1;
            break;
          }
        } else if (l.getOverlapRangeAtIndex(g.cs, g.ce, r, r + c) && l.getOverlapRangeAtIndex(g.rs, g.re, u, u + h)) {
          const m = g.cs < r ? g.cs : r, b = g.ce > r + c ? g.ce : r + c, p = g.rs < u ? g.rs : u, y = g.re > u + h ? g.re : u + h;
          if (g.cs !== m || g.ce !== b || g.rs !== p || g.re !== y) {
            g.cs = m, g.ce = b, g.rs = p, g.re = y, u = -1, f = [], n = [];
            break;
          }
          l.addClass(s, "se-table-selected-cell");
        }
        h > 0 && n.push({
          index: r,
          cs: c + 1,
          rs: h,
          row: -1
        }), E += s.colSpan - 1;
      }
      f = f.concat(n).sort(function(S, R) {
        return S.index - R.index;
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
    const d = this.context.table;
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
}, za = {
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
    let d = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let f = 0, n = a.length, g, u, v, k, E, S, R; f < n; f++)
      g = a[f], typeof g == "string" && l.indexOf(g) > -1 ? (u = g.toLowerCase(), v = u === "blockquote" ? "range" : u === "pre" ? "free" : "replace", E = /^h/.test(u) ? u.match(/\d+/)[0] : "", k = i["tag_" + (E ? "h" : u)] + E, R = "", S = "") : (u = g.tag.toLowerCase(), v = g.command, k = g.name || u, R = g.class, S = R ? ' class="' + R + '"' : ""), d += '<li><button type="button" class="se-btn-list" data-command="' + v + '" data-value="' + u + '" data-class="' + R + '" title="' + k + '" aria-label="' + k + '"><' + u + S + ">" + k + "</" + u + "></button></li>";
    return d += "</ul></div>", o.innerHTML = d, o;
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
      const l = this.context.formatBlock._formatList, a = e.nodeName.toLowerCase(), d = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let f = 0, n = l.length, g; f < n; f++)
        if (g = l[f], a === g.getAttribute("data-value") && d === g.getAttribute("data-class")) {
          t = g.title;
          break;
        }
      return this.util.changeTxt(i, t), i.setAttribute("data-value", a), i.setAttribute("data-class", d), !0;
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.formatBlock, t = e._formatList, i = e.targetText, o = (i.getAttribute("data-value") || "") + (i.getAttribute("data-class") || "");
    if (o !== e.currentFormat) {
      for (let l = 0, a = t.length, d; l < a; l++)
        d = t[l], o === d.getAttribute("data-value") + d.getAttribute("data-class") ? this.util.addClass(d, "active") : this.util.removeClass(d, "active");
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
        const d = l.cloneNode(!1);
        this.applyRangeFormatElement(d);
      } else {
        let d = this.getRange(), f = this.getSelectedElementsAndComponents(!1);
        if (f.length === 0 && (d = this.getRange_addLine(d, null), f = this.getSelectedElementsAndComponents(!1), f.length === 0))
          return;
        const n = d.startOffset, g = d.endOffset, u = this.util;
        let v = f[0], k = f[f.length - 1];
        const E = u.getNodePath(d.startContainer, v, null, null), S = u.getNodePath(d.endContainer, k, null, null), R = this.detachList(f, !1);
        R.sc && (v = R.sc), R.ec && (k = R.ec), this.setRange(u.getNodeFromPath(E, v), n, u.getNodeFromPath(S, k), g);
        const s = this.getSelectedElementsAndComponents(!1);
        if (i === "free") {
          const r = s.length - 1;
          let c = s[r].parentNode, h = l.cloneNode(!1);
          const m = h;
          for (let b = r, p, y, C, _, w, A, z = !0; b >= 0; b--)
            if (p = s[b], p !== (s[b + 1] ? s[b + 1].parentNode : null)) {
              if (A = u.isComponent(p), y = A ? "" : p.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), C = u.getParentElement(p, function(L) {
                return L.parentNode === c;
              }), (c !== p.parentNode || A) && (u.isFormatElement(c) ? (c.parentNode.insertBefore(h, c.nextSibling), c = c.parentNode) : (c.insertBefore(h, C ? C.nextSibling : null), c = p.parentNode), _ = h.nextSibling, _ && h.nodeName === _.nodeName && u.isSameAttributes(h, _) && (h.innerHTML += "<BR>" + _.innerHTML, u.removeItem(_)), h = l.cloneNode(!1), z = !0), w = h.innerHTML, h.innerHTML = (z || !y || !w || /<br>$/i.test(y) ? y : y + "<BR>") + w, b === 0) {
                c.insertBefore(h, p), _ = p.nextSibling, _ && h.nodeName === _.nodeName && u.isSameAttributes(h, _) && (h.innerHTML += "<BR>" + _.innerHTML, u.removeItem(_));
                const L = h.previousSibling;
                L && h.nodeName === L.nodeName && u.isSameAttributes(h, L) && (L.innerHTML += "<BR>" + h.innerHTML, u.removeItem(h));
              }
              A || u.removeItem(p), y && (z = !1);
            }
          this.setRange(m, 0, m, 0);
        } else {
          for (let r = 0, c = s.length, h, m; r < c; r++)
            h = s[r], (h.nodeName.toLowerCase() !== o.toLowerCase() || (h.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== a) && !u.isComponent(h) && (m = l.cloneNode(!1), u.copyFormatAttributes(m, h), m.innerHTML = h.innerHTML, h.parentNode.replaceChild(m, h)), r === 0 && (v = m || h), r === c - 1 && (k = m || h), m = null;
          this.setRange(u.getNodeFromPath(E, v), n, u.getNodeFromPath(S, k), g);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, Ba = {
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
    for (let d = 0, f = l.length, n; d < f; d++)
      n = l[d], a += '<li><button type="button" class="se-btn-list" data-value="' + n.value + '" title="' + n.text + '" aria-label="' + n.text + '">' + n.text + "</button></li>";
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
}, Na = {
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
    for (let l = 0, a = t.length, d; l < a; l++)
      d = t[l], o += '<li><button type="button" class="se-btn-list" data-value="' + l + '" title="' + d.name + '" aria-label="' + d.name + '">' + d.name + "</button></li>";
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
}, Aa = {
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
    let d = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let f = 0, n = a.length, g, u, v, k; f < n; f++) {
      if (g = a[f], typeof g == "string") {
        const E = l[g.toLowerCase()];
        if (!E) continue;
        g = E;
      }
      u = g.name, v = g.class ? ' class="' + g.class + '"' : "", k = g._class, d += '<li><button type="button" class="se-btn-list' + (k ? " " + k : "") + '" data-value="' + g.class + '" title="' + u + '" aria-label="' + u + '"><div' + v + ">" + u + "</div></button></li>";
    }
    return d += "</ul></div>", i.innerHTML = d, i;
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
    for (let a = 0, d = o.length; a < d; a++)
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
    for (let d = 0, f = l.length, n, g, u, v, k, E, S; d < f; d++) {
      if (n = l[d], v = "", E = "", k = [], typeof n == "string") {
        const R = o[n.toLowerCase()];
        if (!R) continue;
        n = R;
      }
      u = n.name, g = n.tag || "span", S = n._class, n.style && (v += ' style="' + n.style + '"', E += n.style.replace(/:[^;]+(;|$)\s*/g, ","), k.push("style")), n.class && (v += ' class="' + n.class + '"', E += "." + n.class.trim().replace(/\s+/g, ",."), k.push("class")), E = E.replace(/,$/, ""), a += '<li><button type="button" class="se-btn-list' + (S ? " " + S : "") + '" data-command="' + g + '" data-value="' + E + '" title="' + u + '" aria-label="' + u + '"><' + g + v + ">" + u + "</" + g + "></button></li>";
    }
    return a += "</ul></div>", i.innerHTML = a, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.util, i = this.context.textStyle._styleList, o = this.getSelectionNode();
    for (let l = 0, a = i.length, d, f, n; l < a; l++) {
      d = i[l], f = d.getAttribute("data-value").split(",");
      for (let g = 0, u, v; g < f.length; g++) {
        for (u = o, n = !1; u && !e.isFormatElement(u) && !e.isComponent(u); ) {
          if (u.nodeName.toLowerCase() === d.getAttribute("data-command").toLowerCase() && (v = f[g], /^\./.test(v) ? e.hasClass(u, v.replace(/^\./, "")) : u.style[v])) {
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
    for (let n = 0, g = a.length; n < g; n++)
      l.push("." + a[n]);
    const d = this.util.hasClass(t, "active") ? null : o.cloneNode(!1), f = d ? null : [o.nodeName];
    this.nodeChange(d, l, f, !0), this.submenuOff();
  }
};
var Si = { exports: {} }, Ia = Si.exports, ln;
function Ma() {
  return ln || (ln = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Ia, function(t, i) {
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
          let d = l.util.createElement("DIV");
          d.className = "se-dialog sun-editor-common";
          let f = l.util.createElement("DIV");
          f.className = "se-dialog-back", f.style.display = "none";
          let n = l.util.createElement("DIV");
          n.className = "se-dialog-inner", n.style.display = "none", d.appendChild(f), d.appendChild(n), a.dialog.modalArea = d, a.dialog.back = f, a.dialog.modal = n, a.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(l)), a.dialog.modal.addEventListener("click", this._onClick_dialog.bind(l)), a.element.relative.appendChild(d), d = null, f = null, n = null;
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
          const d = this.context[l].focusElement;
          typeof this.plugins[l].on == "function" && this.plugins[l].on.call(this, a), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", d && d.focus();
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
  }(Si)), Si.exports;
}
var Da = /* @__PURE__ */ Ma();
const qt = /* @__PURE__ */ xe(Da), Va = {
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
}, qn = {
  name: "anchor",
  add: function(e) {
    e.addModule([Va]), e.context.anchor = {
      caller: {},
      forms: this.setDialogForm(e),
      host: (e._w.location.origin + e._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  /** dialog */
  setDialogForm: function(e) {
    const t = e.lang, i = e.options.linkRel, o = (e.options.linkRelDefault.default || "").split(" "), l = e.icons, a = e.util.createElement("DIV");
    let d = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (e.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + t.dialogBox.linkBox.bookmark + '" aria-label="' + t.dialogBox.linkBox.bookmark + '">' + l.bookmark + "</button>" + e.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + l.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + l.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + t.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (i.length > 0) {
      d += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let f = 0, n = i.length, g; f < n; f++)
        g = i[f], d += '<li><button type="button" class="se-btn-list' + (o.indexOf(g) > -1 ? " se-checked" : "") + '" data-command="' + g + '" title="' + g + '" aria-label="' + g + '"><span class="se-svg">' + l.checked + "</span>" + g + "</button></li>";
      d += "</ul></div></div></div>";
    }
    return d += "</div></div>", a.innerHTML = d, a;
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
      this.util.addClass(i, "active"), o.style.visibility = "hidden", o.style.display = "block", this.options.rtl ? o.style.left = i.offsetLeft - o.offsetWidth - 1 + "px" : o.style.left = i.offsetLeft + i.offsetWidth + 1 + "px", o.style.top = i.offsetTop + i.offsetHeight / 2 - o.offsetHeight / 2 + "px", o.style.visibility = "", this.plugins.anchor._closeRelMenu = (function(l, a, d) {
        d && (l.relButton.contains(d.target) || l.relList.contains(d.target)) || (this.util.removeClass(a, "active"), l.relList.style.display = "none", this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu), this.plugins.anchor._closeRelMenu = null);
      }).bind(this, e, i), this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(e, t) {
    this.plugins.anchor.toggleRelList.call(this, e, !this.util.hasClass(t.target, "active"));
  },
  onClick_relList: function(e, t) {
    const i = t.target, o = i.getAttribute("data-command");
    if (!o) return;
    const l = e.currentRel, a = this.util.toggleClass(i, "se-checked"), d = l.indexOf(o);
    a ? d === -1 && l.push(o) : d > -1 && l.splice(d, 1), e.relPreview.title = e.relPreview.textContent = l.join(" ");
  },
  setRel: function(e, t) {
    const i = e.relList, o = e.currentRel = t ? t.split(" ") : [];
    if (!i) return;
    const l = i.querySelectorAll("button");
    for (let a = 0, d = l.length, f; a < d; a++)
      f = l[a].getAttribute("data-command"), o.indexOf(f) > -1 ? this.util.addClass(l[a], "se-checked") : this.util.removeClass(l[a], "se-checked");
    e.relPreview.title = e.relPreview.textContent = o.join(" ");
  },
  createHeaderList: function(e, t, i) {
    const o = this.util.getListChildren(this.context.element.wysiwyg, function(f) {
      return /h[1-6]/i.test(f.nodeName);
    });
    if (o.length === 0) return;
    const l = new this._w.RegExp("^" + i.replace(/^#/, ""), "i"), a = [];
    let d = "";
    for (let f = 0, n = o.length, g; f < n; f++)
      g = o[f], l.test(g.textContent) && (a.push(g), d += '<li class="se-select-item" data-index="' + f + '">' + g.textContent + "</li>");
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
    const i = e.preview, o = this.options.linkProtocol, l = this.options.linkNoPrefix, a = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(t) || t.indexOf(o) === 0, d = o ? this._w.RegExp("^" + this.util.escapeStringRegexp(t.substr(0, o.length))).test(o) : !1;
    t = e.linkValue = i.textContent = t ? l ? t : o && !a && !d ? o + t : a ? t : /^www\./.test(t) ? "http://" + t : this.context.anchor.host + (/^\//.test(t) ? "" : "/") + t : "", this.plugins.anchor.selfPathBookmark.call(this, t) ? (e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active")) : (e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active")), !this.plugins.anchor.selfPathBookmark.call(this, t) && e.downloadCheck.checked ? e.download.style.display = "block" : e.download.style.display = "none";
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
    for (let l = 0, a = o.length, d; l < a; l++)
      d = i.indexOf(o[l]), d === -1 && i.push(o[l]);
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
}, Ha = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([qt, qn]);
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
var Ei = { exports: {} }, Fa = Ei.exports, nn;
function Oa() {
  return nn || (nn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Fa, function(t, i) {
      const o = {
        name: "component",
        /**
         * @description Create a container for the resizing component and insert the element.
         * @param {Element} cover Cover element (FIGURE)
         * @param {String} className Class name of container (fixed: se-component)
         * @returns {Element} Created container element
         */
        set_container: function(l, a) {
          const d = this.util.createElement("DIV");
          return d.className = "se-component " + a, d.appendChild(l), d;
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
  }(Ei)), Ei.exports;
}
var Ua = /* @__PURE__ */ Oa();
const Yi = /* @__PURE__ */ xe(Ua);
var Li = { exports: {} }, Pa = Li.exports, on;
function Wa() {
  return on || (on = 1, function(e) {
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
          const a = l.icons, d = l.context;
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
          let f = this.setController_resize(l);
          d.resizing.resizeContainer = f, d.resizing.resizeDiv = f.querySelector(".se-modal-resize"), d.resizing.resizeDot = f.querySelector(".se-resize-dot"), d.resizing.resizeDisplay = f.querySelector(".se-resize-display");
          let n = this.setController_button(l);
          d.resizing.resizeButton = n;
          let g = d.resizing.resizeHandles = d.resizing.resizeDot.querySelectorAll("span");
          d.resizing.resizeButtonGroup = n.querySelector("._se_resizing_btn_group"), d.resizing.rotationButtons = n.querySelectorAll("._se_resizing_btn_group ._se_rotation"), d.resizing.percentageButtons = n.querySelectorAll("._se_resizing_btn_group ._se_percentage"), d.resizing.alignMenu = n.querySelector(".se-resizing-align-list"), d.resizing.alignMenuList = d.resizing.alignMenu.querySelectorAll("button"), d.resizing.alignButton = n.querySelector("._se_resizing_align_button"), d.resizing.autoSizeButton = n.querySelector("._se_resizing_btn_group ._se_auto_size"), d.resizing.captionButton = n.querySelector("._se_resizing_caption_button"), f.addEventListener("mousedown", function(u) {
            u.preventDefault();
          }), g[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), g[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), g[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), g[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), g[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), g[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), g[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), g[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), n.addEventListener("click", this.onClick_resizeButton.bind(l)), d.element.relative.appendChild(f), d.element.relative.appendChild(n), f = null, n = null, g = null;
        },
        /** resize controller, button (image, iframe, video) */
        setController_resize: function(l) {
          const a = l.util.createElement("DIV");
          return a.className = "se-controller se-resizing-container", a.style.display = "none", a.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', a;
        },
        setController_button: function(l) {
          const a = l.lang, d = l.icons, f = l.util.createElement("DIV");
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
        _module_getSizeX: function(l, a, d, f) {
          return a || (a = l._element), d || (d = l._cover), f || (f = l._container), a ? /%$/.test(a.style.width) ? (f && this.util.getNumber(f.style.width, 2) || 100) + "%" : a.style.width : "";
        },
        /**
         * @description Gets the height size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeY: function(l, a, d, f) {
          return a || (a = l._element), d || (d = l._cover), f || (f = l._container), !f || !d ? a && a.style.height || "" : this.util.getNumber(d.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? d.style.height : !/%$/.test(a.style.height) || !/%$/.test(a.style.width) ? a.style.height : (f && this.util.getNumber(f.style.height, 2) || 100) + "%";
        },
        /**
         * @description Called at the "openModify" to put the size of the current target into the size input element.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Object} pluginObj Plugin object
         */
        _module_setModifyInputSize: function(l, a) {
          const d = l._onlyPercentage && this.context.resizing._rotateVertical;
          l.proportion.checked = l._proportionChecked = l._element.getAttribute("data-proportion") !== "false";
          let f = d ? "" : this.plugins.resizing._module_getSizeX.call(this, l);
          if (f === l._defaultSizeX && (f = ""), l._onlyPercentage && (f = this.util.getNumber(f, 2)), l.inputX.value = f, a.setInputSize.call(this, "x"), !l._onlyPercentage) {
            let n = d ? "" : this.plugins.resizing._module_getSizeY.call(this, l);
            n === l._defaultSizeY && (n = ""), l._onlyPercentage && (n = this.util.getNumber(n, 2)), l.inputY.value = n;
          }
          l.inputX.disabled = !!d, l.inputY.disabled = !!d, l.proportion.disabled = !!d, a.setRatio.call(this);
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
            const d = l.inputX.value.replace(/\d+|\./g, "") || l.sizeUnit, f = l.inputY.value.replace(/\d+|\./g, "") || l.sizeUnit;
            if (d !== f) return;
            const n = d === "%" ? 2 : 0;
            a === "x" ? l.inputY.value = this.util.getNumber(l._ratioY * this.util.getNumber(l.inputX.value, n), n) + f : l.inputX.value = this.util.getNumber(l._ratioX * this.util.getNumber(l.inputY.value, n), n) + d;
          }
        },
        /**
         * @description It is called in "setRatio" (input and proportionCheck tags changeEvent), 
         * checks the value of the input tag, calculates the ratio, and resets it in the input tag.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_setRatio: function(l) {
          const a = l.inputX.value, d = l.inputY.value;
          if (l.proportion.checked && /\d+/.test(a) && /\d+/.test(d)) {
            const f = a.replace(/\d+|\./g, "") || l.sizeUnit, n = d.replace(/\d+|\./g, "") || l.sizeUnit;
            if (f !== n)
              l._ratio = !1;
            else if (!l._ratio) {
              const g = this.util.getNumber(a, 0), u = this.util.getNumber(d, 0);
              l._ratio = !0, l._ratioX = g / u, l._ratioY = u / g;
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
          const a = this.plugins.resizing._module_getSizeX.call(this, l), d = this.plugins.resizing._module_getSizeY.call(this, l);
          l._element.setAttribute("width", a.replace("px", "")), l._element.setAttribute("height", d.replace("px", "")), l._element.setAttribute("data-size", a + "," + d), l._videoRatio && (l._videoRatio = d);
        },
        /**
         * @description Call the resizing module
         * @param {Element} targetElement Resizing target element
         * @param {string} plugin Plugin name
         * @returns {Object} Size of resizing div {w, h, t, l}
         */
        call_controller_resize: function(l, a) {
          const d = this.context.resizing, f = this.context[a];
          d._resize_plugin = a;
          const n = d.resizeContainer, g = d.resizeDiv, u = this.util.getOffset(l, this.context.element.wysiwygFrame), v = d._rotateVertical = /^(90|270)$/.test(Math.abs(l.getAttribute("data-rotate")).toString()), k = v ? l.offsetHeight : l.offsetWidth, E = v ? l.offsetWidth : l.offsetHeight, S = u.top, R = u.left - this.context.element.wysiwygFrame.scrollLeft;
          n.style.top = S + "px", n.style.left = R + "px", n.style.width = k + "px", n.style.height = E + "px", g.style.top = "0px", g.style.left = "0px", g.style.width = k + "px", g.style.height = E + "px";
          let s = l.getAttribute("data-align") || "basic";
          s = s === "none" ? "basic" : s;
          const r = this.util.getParentElement(l, this.util.isComponent), c = this.util.getParentElement(l, "FIGURE"), h = this.plugins.resizing._module_getSizeX.call(this, f, l, c, r) || "auto", m = f._onlyPercentage && a === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, f, l, c, r) || "auto");
          this.util.changeTxt(d.resizeDisplay, this.lang.dialogBox[s] + " (" + h + m + ")"), d.resizeButtonGroup.style.display = f._resizing ? "" : "none";
          const b = f._resizing && !f._resizeDotHide && !f._onlyPercentage ? "flex" : "none", p = d.resizeHandles;
          for (let z = 0, L = p.length; z < L; z++)
            p[z].style.display = b;
          if (f._resizing) {
            const z = d.rotationButtons;
            z[0].style.display = z[1].style.display = f._rotation ? "" : "none";
          }
          if (f._alignHide)
            d.alignButton.style.display = "none";
          else {
            d.alignButton.style.display = "";
            const z = d.alignMenuList;
            this.util.changeElement(d.alignButton.firstElementChild, d.alignIcons[s]);
            for (let L = 0, N = z.length; L < N; L++)
              z[L].getAttribute("data-value") === s ? this.util.addClass(z[L], "on") : this.util.removeClass(z[L], "on");
          }
          const y = d.percentageButtons, C = /%$/.test(l.style.width) && /%$/.test(r.style.width) ? this.util.getNumber(r.style.width, 0) / 100 + "" : "";
          for (let z = 0, L = y.length; z < L; z++)
            y[z].getAttribute("data-value") === C ? this.util.addClass(y[z], "active") : this.util.removeClass(y[z], "active");
          f._captionShow ? (d.captionButton.style.display = "", this.util.getChildElement(l.parentNode, "figcaption") ? (this.util.addClass(d.captionButton, "active"), f._captionChecked = !0) : (this.util.removeClass(d.captionButton, "active"), f._captionChecked = !1)) : d.captionButton.style.display = "none", n.style.display = "block";
          const _ = { left: 0, top: 50 };
          this.options.iframe && (_.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, _.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(d.resizeButton, n, "bottom", _);
          const w = function() {
            this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
          };
          this.controllersOn(n, d.resizeButton, w.bind(this), l, a), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), d._resize_w = k, d._resize_h = E;
          const A = (l.getAttribute("origin-size") || "").split(",");
          return d._origin_w = A[0] || l.naturalWidth, d._origin_h = A[1] || l.naturalHeight, {
            w: k,
            h: E,
            t: S,
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
          const a = l.target, d = a.getAttribute("data-command") || a.parentNode.getAttribute("data-command");
          if (!d) return;
          const f = a.getAttribute("data-value") || a.parentNode.getAttribute("data-value"), n = this.context.resizing._resize_plugin, g = this.context[n], u = g._element, v = this.plugins[n];
          if (l.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), d === "onalign"))) {
            switch (d) {
              case "auto":
                this.plugins.resizing.resetTransform.call(this, u), v.setAutoSize.call(this), this.selectComponent(u, n);
                break;
              case "percent":
                let k = this.plugins.resizing._module_getSizeY.call(this, g);
                if (this.context.resizing._rotateVertical) {
                  const b = u.getAttribute("data-percentage");
                  b && (k = b.split(",")[1]);
                }
                this.plugins.resizing.resetTransform.call(this, u), v.setPercentSize.call(this, f * 100, this.util.getNumber(k, 0) === null || !/%$/.test(k) ? "" : k), this.selectComponent(u, n);
                break;
              case "mirror":
                const E = u.getAttribute("data-rotate") || "0";
                let S = u.getAttribute("data-rotateX") || "", R = u.getAttribute("data-rotateY") || "";
                f === "h" && !this.context.resizing._rotateVertical || f === "v" && this.context.resizing._rotateVertical ? R = R ? "" : "180" : S = S ? "" : "180", u.setAttribute("data-rotateX", S), u.setAttribute("data-rotateY", R), this.plugins.resizing._setTransForm(u, E, S, R);
                break;
              case "rotate":
                const s = this.context.resizing, r = u.getAttribute("data-rotate") * 1 + f * 1, c = this._w.Math.abs(r) >= 360 ? 0 : r;
                u.setAttribute("data-rotate", c), s._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(c).toString()), this.plugins.resizing.setTransformSize.call(this, u, null, null), this.selectComponent(u, n);
                break;
              case "onalign":
                this.plugins.resizing.openAlignMenu.call(this);
                return;
              case "align":
                const h = f === "basic" ? "none" : f;
                v.setAlign.call(this, h, null, null, null), this.selectComponent(u, n);
                break;
              case "caption":
                const m = !g._captionChecked;
                if (v.openModify.call(this, !0), g._captionChecked = g.captionCheckEl.checked = m, v.update_image.call(this, !1, !1, !1), m) {
                  const b = this.util.getChildElement(g._caption, function(p) {
                    return p.nodeType === 3;
                  });
                  b ? this.setRange(b, 0, b, b.textContent.length) : g._caption.focus(), this.controllersOff();
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
        setTransformSize: function(l, a, d) {
          let f = l.getAttribute("data-percentage");
          const n = this.context.resizing._rotateVertical, g = l.getAttribute("data-rotate") * 1;
          let u = "";
          if (f && !n)
            f = f.split(","), f[0] === "auto" && f[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, f[0], f[1]);
          else {
            const v = this.util.getParentElement(l, "FIGURE"), k = a || l.offsetWidth, E = d || l.offsetHeight, S = (n ? E : k) + "px", R = (n ? k : E) + "px";
            if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, k + "px", E + "px", !0), v.style.width = S, v.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : R, n) {
              let s = k / 2 + "px " + k / 2 + "px 0", r = E / 2 + "px " + E / 2 + "px 0";
              u = g === 90 || g === -270 ? r : s;
            }
          }
          l.style.transformOrigin = u, this.plugins.resizing._setTransForm(l, g.toString(), l.getAttribute("data-rotateX") || "", l.getAttribute("data-rotateY") || ""), n ? l.style.maxWidth = "none" : l.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, l);
        },
        _setTransForm: function(l, a, d, f) {
          let n = (l.offsetWidth - l.offsetHeight) * (/-/.test(a) ? 1 : -1), g = "";
          if (/[1-9]/.test(a) && (d || f))
            switch (g = d ? "Y" : "X", a) {
              case "90":
                g = d && f ? "X" : f ? g : "";
                break;
              case "270":
                n *= -1, g = d && f ? "Y" : d ? g : "";
                break;
              case "-90":
                g = d && f ? "Y" : d ? g : "";
                break;
              case "-270":
                n *= -1, g = d && f ? "X" : f ? g : "";
                break;
              default:
                g = "";
            }
          a % 180 === 0 && (l.style.maxWidth = ""), l.style.transform = "rotate(" + a + "deg)" + (d ? " rotateX(" + d + "deg)" : "") + (f ? " rotateY(" + f + "deg)" : "") + (g ? " translate" + g + "(" + n + "px)" : "");
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
          const a = this.context.resizing, d = a._resize_direction = l.target.classList[0];
          a._resizeClientX = l.clientX, a._resizeClientY = l.clientY, this.context.element.resizeBackground.style.display = "block", a.resizeButton.style.display = "none", a.resizeDiv.style.float = /l/.test(d) ? "right" : /r/.test(d) ? "left" : "none";
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
        resizing_element: function(l, a, d, f) {
          const n = f.clientX, g = f.clientY;
          let u = d._element_w, v = d._element_h;
          const k = d._element_w + (/r/.test(a) ? n - l._resizeClientX : l._resizeClientX - n), E = d._element_h + (/b/.test(a) ? g - l._resizeClientY : l._resizeClientY - g), S = d._element_h / d._element_w * k;
          /t/.test(a) && (l.resizeDiv.style.top = d._element_h - (/h/.test(a) ? E : S) + "px"), /l/.test(a) && (l.resizeDiv.style.left = d._element_w - k + "px"), /r|l/.test(a) && (l.resizeDiv.style.width = k + "px", u = k), /^(t|b)[^h]$/.test(a) ? (l.resizeDiv.style.height = S + "px", v = S) : /^(t|b)h$/.test(a) && (l.resizeDiv.style.height = E + "px", v = E), l._resize_w = u, l._resize_h = v, this.util.changeTxt(l.resizeDisplay, this._w.Math.round(u) + " x " + this._w.Math.round(v)), l._isChange = !0;
        },
        /**
         * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
         * Called at the mouse-up event registered in "onMouseDown_resize_handle".
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
         */
        cancel_controller_resize: function(l) {
          const a = this.context.resizing._rotateVertical;
          this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
          let d = this._w.Math.round(a ? this.context.resizing._resize_h : this.context.resizing._resize_w), f = this._w.Math.round(a ? this.context.resizing._resize_w : this.context.resizing._resize_h);
          if (!a && !/%$/.test(d)) {
            const u = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
            this.util.getNumber(d, 0) > u && (f = this._w.Math.round(f / d * u), d = u);
          }
          const n = this.context.resizing._resize_plugin;
          this.plugins[n].setSize.call(this, d, f, !1, l), a && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, d, f), this.selectComponent(this.context[n]._element, n);
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
  }(Li)), Li.exports;
}
var $a = /* @__PURE__ */ Wa();
const jn = /* @__PURE__ */ xe($a);
var Ti = { exports: {} }, Za = Ti.exports, sn;
function qa() {
  return sn || (sn = 1, function(e) {
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
        upload: function(l, a, d, f, n) {
          this.showLoading();
          const g = this.plugins.fileManager, u = g._xmlHttp = this.util.getXMLHttpRequest();
          if (u.onreadystatechange = g._callBackUpload.bind(this, u, f, n), u.open("post", l, !0), a !== null && typeof a == "object" && this._w.Object.keys(a).length > 0)
            for (let v in a)
              u.setRequestHeader(v, a[v]);
          u.send(d);
        },
        _callBackUpload: function(l, a, d) {
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
              if (typeof d != "function" || d("", f, this)) {
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
        checkInfo: function(l, a, d, f, n) {
          let g = [];
          for (let r = 0, c = a.length; r < c; r++)
            g = g.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(a[r] + ':not([data-se-embed="true"])')));
          const u = this.plugins.fileManager, v = this.context[l], k = v._infoList, E = u.setInfo.bind(this);
          if (g.length === k.length)
            if (this._componentsInfoReset) {
              for (let r = 0, c = g.length; r < c; r++)
                E(l, g[r], d, null, n);
              return;
            } else {
              let r = !1;
              for (let c = 0, h = k.length, m; c < h; c++)
                if (m = k[c], g.filter(function(b) {
                  return m.src === b.src && m.index.toString() === b.getAttribute("data-index");
                }).length === 0) {
                  r = !0;
                  break;
                }
              if (!r) return;
            }
          const S = n ? this.context.resizing._resize_plugin : "";
          n && (this.context.resizing._resize_plugin = l);
          const R = [], s = [];
          for (let r = 0, c = k.length; r < c; r++)
            s[r] = k[r].index;
          for (v.__updateTags = g; g.length > 0; ) {
            const r = g.shift();
            !this.util.getParentElement(r, this.util.isMediaComponent) || !u._checkMediaComponent(r) ? (R.push(v._infoIndex), f(r)) : !r.getAttribute("data-index") || s.indexOf(r.getAttribute("data-index") * 1) < 0 ? (R.push(v._infoIndex), r.removeAttribute("data-index"), E(l, r, d, null, n)) : R.push(r.getAttribute("data-index") * 1);
          }
          for (let r = 0, c; r < k.length; r++)
            c = k[r].index, !(R.indexOf(c) > -1) && (k.splice(r, 1), typeof d == "function" && d(null, c, "delete", null, 0, this), r--);
          n && (this.context.resizing._resize_plugin = S);
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
        setInfo: function(l, a, d, f, n) {
          const g = n ? this.context.resizing._resize_plugin : "";
          n && (this.context.resizing._resize_plugin = l);
          const u = this.plugins[l], v = this.context[l], k = v._infoList;
          let E = a.getAttribute("data-index"), S = null, R = "";
          if (f || (f = {
            name: a.getAttribute("data-file-name") || (typeof a.src == "string" ? a.src.split("/").pop() : ""),
            size: a.getAttribute("data-file-size") || 0
          }), !E || this._componentsInfoInit)
            R = "create", E = v._infoIndex++, a.setAttribute("data-index", E), a.setAttribute("data-file-name", f.name), a.setAttribute("data-file-size", f.size), S = {
              src: a.src,
              index: E * 1,
              name: f.name,
              size: f.size
            }, k.push(S);
          else {
            R = "update", E *= 1;
            for (let s = 0, r = k.length; s < r; s++)
              if (E === k[s].index) {
                S = k[s];
                break;
              }
            S || (E = v._infoIndex++, S = { index: E }, k.push(S)), S.src = a.src, S.name = a.getAttribute("data-file-name"), S.size = a.getAttribute("data-file-size") * 1;
          }
          if (S.element = a, S.delete = u.destroy.bind(this, a), S.select = (function(s) {
            s.scrollIntoView(!0), this._w.setTimeout(u.select.bind(this, s));
          }).bind(this, a), n) {
            if (!a.getAttribute("origin-size") && a.naturalWidth && a.setAttribute("origin-size", a.naturalWidth + "," + a.naturalHeight), !a.getAttribute("data-origin")) {
              const s = this.util.getParentElement(a, this.util.isMediaComponent), r = this.util.getParentElement(a, "FIGURE"), c = this.plugins.resizing._module_getSizeX.call(this, v, a, r, s), h = this.plugins.resizing._module_getSizeY.call(this, v, a, r, s);
              a.setAttribute("data-origin", c + "," + h), a.setAttribute("data-size", c + "," + h);
            }
            if (!a.style.width) {
              const s = (a.getAttribute("data-size") || a.getAttribute("data-origin") || "").split(",");
              u.onModifyMode.call(this, a, null), u.applySize.call(this, s[0], s[1]);
            }
            this.context.resizing._resize_plugin = g;
          }
          typeof d == "function" && d(a, E, R, S, --v._uploadFileLength < 0 ? 0 : v._uploadFileLength, this);
        },
        /**
         * @description Delete info object at "_infoList"
         * @param {String} pluginName Plugin name 
         * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */
        deleteInfo: function(l, a, d) {
          if (a >= 0) {
            const f = this.context[l]._infoList;
            for (let n = 0, g = f.length; n < g; n++)
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
        resetInfo: function(l, a) {
          const d = this.context[l];
          if (typeof a == "function") {
            const f = d._infoList;
            for (let n = 0, g = f.length; n < g; n++)
              a(null, f[n].index, "delete", null, 0, this);
          }
          d._infoList = [], d._infoIndex = 0;
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
  }(Ti)), Ti.exports;
}
var ja = /* @__PURE__ */ qa();
const Xi = /* @__PURE__ */ xe(ja), Ga = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([qt, qn, Yi, jn, Xi]);
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
      const a = t.imageSizeOnlyPercentage, d = a ? ' style="display: none !important;"' : "", f = t.imageHeightShow ? "" : ' style="display: none !important;"';
      l += '<div class="se-dialog-form">', a || !t.imageHeightShow ? l += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.size + "</label></div>" : l += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + i.dialogBox.height + "</label></div>", l += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (a ? ' type="number" min="1"' : 'type="text"') + (a ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + f + ">" + (a ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + d + (a ? ' max="100"' : "") + f + "/><label" + d + f + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + '</label><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
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
    this.util.removeItem(i), this.plugins.image.init.call(this), this.controllersOff(), a !== this.context.element.wysiwyg && this.util.removeItemAllParents(a, function(d) {
      return d.childNodes.length === 0;
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
    let a, d, f;
    for (d = t.getElementsByClassName(l), a = 0; a < d.length; a++)
      d[a].style.display = "none";
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
      for (let g = 0, u = n.length; g < u; g++)
        f += n[g].size * 1;
      if (t + f > o) {
        this.closeLoading();
        const g = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + o / 1e3 + "KB";
        (typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(g, { limitSize: o, currentSize: f, uploadSize: t }, this)) && this.functions.noticeOpen(g);
        return;
      }
    }
    const l = this.context.image;
    l._uploadFileLength = i.length;
    const d = {
      anchor: this.plugins.anchor.createAnchor.call(this, l.anchorCtx, !0),
      inputWidth: l.inputX.value,
      inputHeight: l.inputY.value,
      align: l._align,
      isUpdate: this.context.dialog.updateModal,
      alt: l._altText,
      element: l._element
    };
    if (typeof this.functions.onImageUploadBefore == "function") {
      const f = this.functions.onImageUploadBefore(i, d, this, (function(n) {
        n && this._w.Array.isArray(n.result) ? this.plugins.image.register.call(this, d, n) : this.plugins.image.upload.call(this, d, n);
      }).bind(this));
      if (typeof f > "u") return;
      if (!f) {
        this.closeLoading();
        return;
      }
      this._w.Array.isArray(f) && f.length > 0 && (i = f);
    }
    this.plugins.image.upload.call(this, d, i);
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
  setup_reader: function(e, t, i, o, l, a, d, f) {
    try {
      if (d === 0) {
        this.closeLoading(), console.warn("[SUNEDITOR.image.base64.fail] cause : No applicable files");
        return;
      }
      this.context.image.base64RenderIndex = d;
      const n = this._w.FileReader, g = [d];
      this.context.image.inputX.value = i, this.context.image.inputY.value = o;
      for (let u = 0, v, k; u < d; u++)
        v = new n(), k = e[u], v.onload = (function(E, S, R, s, r) {
          g[r] = { result: E.result, file: s }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, S, g, R, t, i, o, l, a), this.closeLoading());
        }).bind(this, v, f, this.context.image._element, k, u), v.readAsDataURL(k);
    } catch (n) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + n.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, i, o, l, a, d, f) {
    const n = this.plugins.image.update_src, g = this.plugins.image.create_image;
    for (let u = 0, v = t.length; u < v; u++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[u].file.name), this.context.image._element.setAttribute("data-file-size", t[u].file.size), n.call(this, t[u].result, i, t[u].file)) : g.call(this, t[u].result, o, l, a, d, t[u].file, f);
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
  create_image: function(e, t, i, o, l, a, d) {
    const f = this.plugins.image, n = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let g = this.util.createElement("IMG");
    g.src = e, g.alt = d, g.setAttribute("data-rotate", "0"), t = f.onRender_link.call(this, g, t ? t.cloneNode(!1) : null), n._resizing && g.setAttribute("data-proportion", n._proportionChecked);
    const u = this.plugins.component.set_cover.call(this, t), v = this.plugins.component.set_container.call(this, u, "se-image-container");
    n._captionChecked && (n._caption = this.plugins.component.create_caption.call(this), u.appendChild(n._caption)), n._element = g, n._cover = u, n._container = v, f.applySize.call(this, i, o), f.setAlign.call(this, l, g, u, v), g.onload = f._image_create_onload.bind(this, g, n.svgDefaultSize, v), this.insertComponent(v, !0, !0, !this.options.mediaAutoSelect) && this.plugins.fileManager.setInfo.call(this, "image", g, this.functions.onImageUpload, a, !0), this.context.resizing._resize_plugin = "";
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
    let l = o._element, a = o._cover, d = o._container, f = !1;
    a === null && (f = !0, l = o._element.cloneNode(!0), a = this.plugins.component.set_cover.call(this, l)), d === null ? (a = a.cloneNode(!0), l = a.querySelector("img"), f = !0, d = this.plugins.component.set_container.call(this, a, "se-image-container")) : f && (d.innerHTML = "", d.appendChild(a), o._cover = a, o._element = l, f = !1);
    let n;
    const g = this.util.isNumber(o.inputX.value) ? o.inputX.value + o.sizeUnit : o.inputX.value, u = this.util.isNumber(o.inputY.value) ? o.inputY.value + o.sizeUnit : o.inputY.value;
    /%$/.test(l.style.width) ? n = g !== d.style.width || u !== d.style.height : n = g !== l.style.width || u !== l.style.height, l.alt = o._altText;
    let v = !1;
    o._captionChecked ? o._caption || (o._caption = this.plugins.component.create_caption.call(this), a.appendChild(o._caption), v = !0) : o._caption && (this.util.removeItem(o._caption), o._caption = null, v = !0);
    let k = null;
    const E = this.plugins.anchor.createAnchor.call(this, o.anchorCtx, !0);
    if (E)
      o._linkElement !== E || f && !d.contains(E) ? (o._linkElement = E.cloneNode(!1), a.insertBefore(this.plugins.image.onRender_link.call(this, l, o._linkElement), o._caption), k = o._element) : o._linkElement.setAttribute("data-image-link", "image");
    else if (o._linkElement !== null) {
      const R = l;
      if (R.setAttribute("data-image-link", ""), a.contains(o._linkElement)) {
        const s = R.cloneNode(!0);
        a.removeChild(o._linkElement), a.insertBefore(s, o._caption), o._element = l = s;
      }
    }
    let S = null;
    if (f) {
      if (S = this.util.isRangeFormatElement(o._element.parentNode) || this.util.isWysiwygDiv(o._element.parentNode) ? o._element : this.util.isAnchor(o._element.parentNode) ? o._element.parentNode : this.util.getFormatElement(o._element) || o._element, this.util.getParentElement(o._element, this.util.isNotCheckingNode))
        S = k ? E : o._element, S.parentNode.replaceChild(d, S);
      else if (this.util.isListCell(S)) {
        const R = this.util.getParentElement(o._element, function(s) {
          return s.parentNode === S;
        });
        S.insertBefore(d, R), this.util.removeItem(o._element), this.util.removeEmptyNode(R, null, !0);
      } else if (this.util.isFormatElement(S)) {
        const R = this.util.getParentElement(o._element, function(s) {
          return s.parentNode === S;
        });
        S = this.util.splitElement(S, R), S.parentNode.insertBefore(d, S), this.util.removeItem(o._element), this.util.removeEmptyNode(S, null, !0), S.children.length === 0 && (S.innerHTML = this.util.htmlRemoveWhiteSpace(S.innerHTML));
      } else if (this.util.isFormatElement(S.parentNode)) {
        const R = S.parentNode;
        R.parentNode.insertBefore(d, S.previousSibling ? R.nextElementSibling : R), o.__updateTags.map(function(s) {
          return S.contains(s);
        }).length === 0 && this.util.removeItem(S);
      } else
        S = this.util.isFigures(S.parentNode) ? S.parentNode : S, S.parentNode.replaceChild(d, S);
      l = d.querySelector("img"), o._element = l, o._cover = a, o._container = d;
    }
    k && (f ? (this.util.removeItem(k), this.util.getListChildren(E, function(R) {
      return /IMG/i.test(R.tagName);
    }).length === 0 && this.util.removeItem(E)) : this.util.removeItem(E)), (v || !o._onlyPercentage && n) && !e && (/\d+/.test(l.style.height) || this.context.resizing._rotateVertical && o._captionChecked) && (/%$/.test(o.inputX.value) || /%$/.test(o.inputY.value) ? this.plugins.resizing.resetTransform.call(this, l) : this.plugins.resizing.setTransformSize.call(this, l, this.util.getNumber(o.inputX.value, 0), this.util.getNumber(o.inputY.value, 0))), o._resizing && (l.setAttribute("data-proportion", o._proportionChecked), n && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, l, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", l, this.functions.onImageUpload, null, !0), t && this.selectComponent(l, "image"), i || this.history.push(!1);
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
}, Ka = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([qt, Yi, jn, Xi]);
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
      const a = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], d = t.videoRatio, f = t.videoSizeOnlyPercentage, n = f ? ' style="display: none !important;"' : "", g = t.videoHeightShow ? "" : ' style="display: none !important;"', u = t.videoRatioShow ? "" : ' style="display: none !important;"', v = !f && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      l += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + g + ">" + i.dialogBox.height + '</label><label class="size-h"' + u + ">(" + i.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + v + ">" + (f ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + g + '/><select class="se-input-select se-video-ratio" title="' + i.dialogBox.ratio + '" aria-label="' + i.dialogBox.ratio + '"' + u + ">", g || (l += '<option value=""> - </option>');
      for (let k = 0, E = a.length; k < E; k++)
        l += '<option value="' + a[k].value + '"' + (d.toString() === a[k].value.toString() ? " selected" : "") + ">" + a[k].name + "</option>";
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
    this.util.removeItem(i), this.plugins.video.init.call(this), this.controllersOff(), a !== this.context.element.wysiwyg && this.util.removeItemAllParents(a, function(d) {
      return d.childNodes.length === 0;
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
    for (let d = 0, f = e.length; d < f; d++)
      /video/i.test(e[d].type) && (i.push(e[d]), t += e[d].size);
    const o = this.options.videoUploadSizeLimit;
    if (o > 0) {
      let d = 0;
      const f = this.context.video._infoList;
      for (let n = 0, g = f.length; n < g; n++)
        d += f[n].size * 1;
      if (t + d > o) {
        this.closeLoading();
        const n = "[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: " + o / 1e3 + "KB";
        (typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(n, { limitSize: o, currentSize: d, uploadSize: t }, this)) && this.functions.noticeOpen(n);
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
      const d = this.functions.onVideoUploadBefore(i, a, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.video.register.call(this, a, f) : this.plugins.video.upload.call(this, a, f);
      }).bind(this));
      if (typeof d > "u") return;
      if (!d) {
        this.closeLoading();
        return;
      }
      typeof d == "object" && d.length > 0 && (i = d);
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
    for (let l = 0, a = i.length, d; l < a; l++)
      d = { name: i[l].name, size: i[l].size }, this.plugins.video.create_video.call(this, e.isUpdate ? e.element : o.cloneNode(!1), i[l].url, e.inputWidth, e.inputHeight, e.align, d, e.isUpdate);
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
  create_video: function(e, t, i, o, l, a, d) {
    this.context.resizing._resize_plugin = "video";
    const f = this.context.video;
    let n = null, g = null, u = !1;
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
      g = f._container, n = this.util.getParentElement(e, "FIGURE");
    } else
      u = !0, e.src = t, f._element = e, n = this.plugins.component.set_cover.call(this, e), g = this.plugins.component.set_container.call(this, n, "se-video-container");
    f._cover = n, f._container = g;
    const v = this.plugins.resizing._module_getSizeX.call(this, f) !== (i || f._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, f) !== (o || f._videoRatio), k = !d || v;
    f._resizing && (this.context.video._proportionChecked = f.proportion.checked, e.setAttribute("data-proportion", f._proportionChecked));
    let E = !1;
    k && (E = this.plugins.video.applySize.call(this)), E && l === "center" || this.plugins.video.setAlign.call(this, null, e, n, g);
    let S = !0;
    if (d)
      f._resizing && this.context.resizing._rotateVertical && k && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (S = this.insertComponent(g, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const R = this.appendFormatTag(g, null);
      R && this.setRange(R, 0, R, 0);
    }
    S && (u && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, a, !0), d && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
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
      const d = i.querySelector("figcaption");
      let f = null;
      d && (f = this.util.createElement("DIV"), f.innerHTML = d.innerHTML, this.util.removeItem(d));
      const n = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, n[0] || o.style.width || o.width || "", n[1] || o.style.height || o.height || "");
      const g = this.util.getFormatElement(o);
      if (g && (t._align = g.style.textAlign || g.style.float), this.plugins.video.setAlign.call(this, null, e, l, a), this.util.getParentElement(o, this.util.isNotCheckingNode))
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
    } catch (d) {
      console.warn("[SUNEDITOR.video.error] Maybe the video tag is nested.", d);
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
    const l = this.context.video, a = /^(rw|lw)$/.test(o), d = /^(th|bh)$/.test(o);
    d || (e = this.util.getNumber(e, 0)), a || (t = this.util.isNumber(t) ? t + l.sizeUnit : t || ""), e = e ? e + l.sizeUnit : "", d || (l._element.style.width = e), a || (l._cover.style.paddingBottom = l._cover.style.height = t), !d && !/%$/.test(e) && (l._cover.style.width = e, l._container.style.width = ""), !a && !/%$/.test(t) ? l._element.style.height = t : l._element.style.height = "", i || l._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, l);
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
}, Ya = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([qt, Yi, Xi]);
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
    for (let d = 0, f = e.length; d < f; d++)
      /audio/i.test(e[d].type) && (i.push(e[d]), t += e[d].size);
    const o = this.options.audioUploadSizeLimit;
    if (o > 0) {
      let d = 0;
      const f = this.context.audio._infoList;
      for (let n = 0, g = f.length; n < g; n++)
        d += f[n].size * 1;
      if (t + d > o) {
        this.closeLoading();
        const n = "[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: " + o / 1e3 + "KB";
        (typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(n, { limitSize: o, currentSize: d, uploadSize: t }, this)) && this.functions.noticeOpen(n);
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
      const d = this.functions.onAudioUploadBefore(i, a, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.audio.register.call(this, a, f) : this.plugins.audio.upload.call(this, a, f);
      }).bind(this));
      if (typeof d > "u") return;
      if (!d) {
        this.closeLoading();
        return;
      }
      typeof d == "object" && d.length > 0 && (i = d);
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
    for (let o = 0, l = i.length, a, d; o < l; o++)
      e.isUpdate ? d = e.element : d = this.plugins.audio._createAudioTag.call(this), a = { name: i[o].name, size: i[o].size }, this.plugins.audio.create_audio.call(this, d, i[o].url, a, e.isUpdate);
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
        const d = this.util.getParentElement(o, function(f) {
          return f.parentNode === i;
        });
        i.insertBefore(a, d), this.util.removeItem(o), this.util.removeEmptyNode(d, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const d = this.util.getParentElement(o, function(f) {
          return f.parentNode === i;
        });
        i = this.util.splitElement(i, d), i.parentNode.insertBefore(a, i), this.util.removeItem(o), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(a, i);
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
}, an = "https://katex.org/docs/supported.html", Xa = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([qt]);
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
    let a = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + an + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let d = 0, f = o.length, n; d < f; d++)
      n = o[d], n.default && (l = n.value), a += '<option value="' + n.value + '"' + (n.default ? " selected" : "") + ">" + n.text + "</option>";
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
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + an + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", i);
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
        const d = this.util.createTextNode(this.util.zeroWidthSpace);
        l.parentNode.insertBefore(d, l.nextSibling), this.setRange(l, 0, l, 1);
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
var zi = { exports: {} }, Ja = zi.exports, rn;
function Qa() {
  return rn || (rn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Ja, function(t, i) {
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
          let d = l.util.createElement("DIV");
          d.className = "se-file-browser sun-editor-common";
          let f = l.util.createElement("DIV");
          f.className = "se-file-browser-back";
          let n = l.util.createElement("DIV");
          n.className = "se-file-browser-inner", n.innerHTML = this.set_browser(l), d.appendChild(f), d.appendChild(n), this._loading = d.querySelector(".se-loading-box"), a.fileBrowser.area = d, a.fileBrowser.header = n.querySelector(".se-file-browser-header"), a.fileBrowser.titleArea = n.querySelector(".se-file-browser-title"), a.fileBrowser.tagArea = n.querySelector(".se-file-browser-tags"), a.fileBrowser.body = n.querySelector(".se-file-browser-body"), a.fileBrowser.list = n.querySelector(".se-file-browser-list"), a.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(l)), a.fileBrowser.list.addEventListener("click", this.onClickFile.bind(l)), n.addEventListener("mousedown", this._onMouseDown_browser.bind(l)), n.addEventListener("click", this._onClick_browser.bind(l)), a.element.relative.appendChild(d), d = null, f = null, n = null;
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
          const d = this.context.fileBrowser;
          d.contextPlugin = l, d.selectorHandler = a;
          const f = this.context[l], n = f.listClass;
          this.util.hasClass(d.list, n) || (d.list.className = "se-file-browser-list " + n), this.options.popupDisplay === "full" ? d.area.style.position = "fixed" : d.area.style.position = "absolute", d.titleArea.textContent = f.title, d.area.style.display = "block", this.context[l].directData ? this.plugins.fileBrowser._drawListItem.call(this, this.context[l].directData, !0) : this.plugins.fileBrowser._drawFileList.call(this, this.context[l].url, this.context[l].header);
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
          const d = this.plugins.fileBrowser, f = d._xmlHttp = this.util.getXMLHttpRequest();
          if (f.onreadystatechange = d._callBackGet.bind(this, f), f.open("get", l, !0), a !== null && typeof a == "object" && this._w.Object.keys(a).length > 0)
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
              const a = l.responseText ? JSON.parse(l.responseText) : l, d = "[SUNEDITOR.fileBrowser.get.serverException] status: " + l.status + ", response: " + (a.errorMessage || l.responseText);
              throw Error(d);
            }
          }
        },
        _drawListItem: function(l, a) {
          const d = this.context.fileBrowser, f = this.context[d.contextPlugin], n = [], g = l.length, u = f.columnSize || d.columnSize, v = u <= 1 ? 1 : Math.round(g / u) || 1, k = f.itemTemplateHandler;
          let E = "", S = '<div class="se-file-item-column">', R = 1;
          for (let s = 0, r, c; s < g; s++)
            if (r = l[s], c = r.tag ? typeof r.tag == "string" ? r.tag.split(",") : r.tag : [], c = r.tag = c.map(function(h) {
              return h.trim();
            }), S += k(r), (s + 1) % v === 0 && R < u && s + 1 < g && (R++, S += '</div><div class="se-file-item-column">'), a && c.length > 0)
              for (let h = 0, m = c.length, b; h < m; h++)
                b = c[h], b && n.indexOf(b) === -1 && (n.push(b), E += '<a title="' + b + '" aria-label="' + b + '">' + b + "</a>");
          S += "</div>", d.list.innerHTML = S, a && (d.items = l, d.tagArea.innerHTML = E, d.tagElements = d.tagArea.querySelectorAll("A"));
        },
        onClickTag: function(l) {
          const a = l.target;
          if (!this.util.isAnchor(a)) return;
          const d = a.textContent, f = this.plugins.fileBrowser, n = this.context.fileBrowser, g = n.tagArea.querySelector('a[title="' + d + '"]'), u = n.selectedTags, v = u.indexOf(d);
          v > -1 ? (u.splice(v, 1), this.util.removeClass(g, "on")) : (u.push(d), this.util.addClass(g, "on")), f._drawListItem.call(
            this,
            u.length === 0 ? n.items : n.items.filter(function(k) {
              return k.tag.some(function(E) {
                return u.indexOf(E) > -1;
              });
            }),
            !1
          );
        },
        onClickFile: function(l) {
          l.preventDefault(), l.stopPropagation();
          const a = this.context.fileBrowser, d = a.list;
          let f = l.target, n = null;
          if (f === d) return;
          for (; d !== f.parentNode && (n = f.getAttribute("data-command"), !n); )
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
  }(zi)), zi.exports;
}
var er = /* @__PURE__ */ Qa();
const tr = /* @__PURE__ */ xe(er), ir = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([tr]);
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
}, lr = { blockquote: _a, align: Ca, font: wa, fontSize: ka, fontColor: xa, hiliteColor: Sa, horizontalRule: Ea, list: La, table: Ta, formatBlock: za, lineHeight: Ba, template: Na, paragraphStyle: Aa, textStyle: Ra, link: Ha, image: Ga, video: Ka, audio: Ya, math: Xa, imageGallery: ir }, nr = {
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
}, un = {
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
}, ce = {
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
      return ce.camelToKebabCase(t);
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
      return ce.camelToKebabCase(t);
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
    let d = "(?:";
    for (let g = 0, u = e.length; g < u; g++)
      d += e[g] + (g < u - 1 ? "|" : ")");
    const f = new this._w.RegExp("(^|.*[\\/])" + d + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), n = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
    for (let g = this._d.getElementsByTagName(l), u = 0; u < g.length; u++)
      n.test(g[u][a]) && o.push(g[u]);
    for (let g = 0; g < o.length; g++) {
      let u = o[g][a].match(f);
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
      for (let a = 0, d = l.length; a < d; a++)
        e.style[l[a]] = l[l[a]];
    }
    const o = t.attributes;
    for (let l = 0, a = o.length, d; l < a; l++)
      d = o[l].name.toLowerCase(), i && i.indexOf(d) > -1 || !o[l].value ? e.removeAttribute(d) : d !== "style" && e.setAttribute(o[l].name, o[l].value);
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
    for (let l = 0, a = e.length, d; l < a; l++)
      if (d = e[l], t(d))
        if (i) o.push(d);
        else return d;
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
          let d = null, f = null;
          i.s = i.e = 0;
          let n = a.previousSibling;
          for (; n && n.nodeType === 3; )
            f = n.textContent.replace(this.zeroWidthRegExp, ""), i.s += f.length, a.textContent = f + a.textContent, d = n, n = n.previousSibling, this.removeItem(d);
          let g = a.nextSibling;
          for (; g && g.nodeType === 3; )
            f = g.textContent.replace(this.zeroWidthRegExp, ""), i.e += f.length, a.textContent += f, d = g, g = g.nextSibling, this.removeItem(d);
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
    for (let g = 0, u = i.length; g < u; g++)
      i[i[g]] === o[i[g]] && l++;
    const a = e.classList, d = t.classList, f = this._w.RegExp;
    let n = 0;
    for (let g = 0, u = a.length; g < u; g++)
      f("(s|^)" + a[g] + "(s|$)").test(d.value) && n++;
    return l === o.length && l === i.length && n === d.length && n === a.length;
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
        for (let a = 0, d = l.children.length; a < d; a++)
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
      for (let a = 0, d = l.childNodes.length; a < d; a++)
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
    const l = i.parentNode.childNodes, a = this.getArrayIndex(l, i), d = this.getArrayIndex(l, o);
    return {
      ancestor: i.parentNode,
      a: i,
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
      const d = new this._w.RegExp(t, "i");
      o = function(f) {
        return d.test(f[a]);
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
    const d = t && /iframe/i.test(t.nodeName);
    return {
      left: i + (d ? t.parentElement.offsetLeft : 0),
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
      if (!ce.isWysiwygDiv(a)) {
        const d = a.parentNode;
        d && t(a) && (o = {
          sc: a.previousElementSibling,
          ec: a.nextElementSibling
        }, ce.removeItem(a), l(d));
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
      const d = this.getPositionIndex(e);
      for (; l[d]; )
        o.appendChild(l[d]);
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
    return i && (i.parentNode.insertBefore(o, i.nextSibling), l && l.length === 0 && this.removeItem(i)), o === e ? o.parentNode : o;
  },
  /**
   * @description Sub function of util.detachNestedList method.
   * @private
   */
  _deleteNestedList: function(e) {
    const t = e.parentNode;
    let i = t, o = i.parentNode, l, a, d, f, n;
    for (; this.isListCell(o); ) {
      for (f = this.getPositionIndex(e), l = o.nextElementSibling, a = o.parentNode, d = i; d; ) {
        if (i = i.nextSibling, this.isList(d)) {
          for (n = d.childNodes; n[f]; )
            a.insertBefore(n[f], l);
          n.length === 0 && this.removeItem(d);
        } else
          a.appendChild(d);
        d = i;
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
      const k = e.childNodes;
      let E = this.getPositionIndex(t);
      const S = e.cloneNode(!1), R = e.cloneNode(!1);
      for (let s = 0, r = k.length; s < r; s++) {
        if (s < E) S.appendChild(k[s]);
        else if (s > E) R.appendChild(k[s]);
        else continue;
        s--, r--, E--;
      }
      return S.childNodes.length > 0 && e.parentNode.insertBefore(S, e), R.childNodes.length > 0 && e.parentNode.insertBefore(R, e.nextElementSibling), e;
    }
    const o = e.parentNode;
    let l = 0, a = 1, d = !0, f, n, g;
    if ((!i || i < 0) && (i = 0), e.nodeType === 3) {
      if (l = this.getPositionIndex(e), t >= 0 && e.length !== t) {
        e.splitText(t);
        const k = this.getNodeFromPath([l + 1], o);
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
      e.previousSibling ? e = e.previousSibling : this.getElementDepth(e) === i && (d = !1);
    }
    e.nodeType === 1 && (a = 0);
    let u = e;
    for (; this.getElementDepth(u) > i; )
      for (l = this.getPositionIndex(u) + a, u = u.parentNode, g = f, f = u.cloneNode(!1), n = u.childNodes, g && (this.isListCell(f) && this.isList(g) && g.firstElementChild ? (f.innerHTML = g.firstElementChild.innerHTML, ce.removeItem(g.firstElementChild), g.children.length > 0 && f.appendChild(g)) : f.appendChild(g)); n[l]; )
        f.appendChild(n[l]);
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
  mergeSameTags: function(e, t, i) {
    const o = this, l = t ? t.length : 0;
    let a = null;
    return l && (a = this._w.Array.apply(null, new this._w.Array(l)).map(this._w.Number.prototype.valueOf, 0)), function d(f, n, g) {
      const u = f.childNodes;
      for (let v = 0, k = u.length, E, S; v < k && (E = u[v], S = u[v + 1], !!E); v++)
        if (!(o.isBreak(E) || o.isMedia(E) || o.isInputElement(E))) {
          if (i && o._isIgnoreNodeChange(E) || !i && (o.isTable(E) || o.isListCell(E) || o.isFormatElement(E) && !o.isFreeFormatElement(E))) {
            (o.isTable(E) || o.isListCell(E)) && d(E, n + 1, v);
            continue;
          }
          if (k === 1 && f.nodeName === E.nodeName && f.parentNode) {
            if (l) {
              let R, s, r, c, h;
              for (let m = 0; m < l; m++)
                if (R = t[m], R && R[n] === v) {
                  for (s = E, r = f, c = n, h = !0; c >= 0; ) {
                    if (o.getArrayIndex(r.childNodes, s) !== R[c]) {
                      h = !1;
                      break;
                    }
                    s = E.parentNode, r = s.parentNode, c--;
                  }
                  h && (R.splice(n, 1), R[n] = v);
                }
            }
            o.copyTagAttributes(E, f), f.parentNode.insertBefore(E, f), o.removeItem(f);
          }
          if (!S) {
            E.nodeType === 1 && d(E, n + 1, v);
            break;
          }
          if (E.nodeName === S.nodeName && o.isSameAttributes(E, S) && E.href === S.href) {
            const R = E.childNodes;
            let s = 0;
            for (let m = 0, b = R.length; m < b; m++)
              R[m].textContent.length > 0 && s++;
            const r = E.lastChild, c = S.firstChild;
            let h = 0;
            if (r && c) {
              const m = r.nodeType === 3 && c.nodeType === 3;
              h = r.textContent.length;
              let b = r.previousSibling;
              for (; b && b.nodeType === 3; )
                h += b.textContent.length, b = b.previousSibling;
              if (s > 0 && r.nodeType === 3 && c.nodeType === 3 && (r.textContent.length > 0 || c.textContent.length > 0) && s--, l) {
                let p = null;
                for (let y = 0; y < l; y++)
                  if (p = t[y], p && p[n] > v) {
                    if (n > 0 && p[n - 1] !== g) continue;
                    p[n] -= 1, p[n + 1] >= 0 && p[n] === v && (p[n + 1] += s, m && r && r.nodeType === 3 && c && c.nodeType === 3 && (a[y] += h));
                  }
              }
            }
            if (E.nodeType === 3) {
              if (h = E.textContent.length, E.textContent += S.textContent, l) {
                let m = null;
                for (let b = 0; b < l; b++)
                  if (m = t[b], m && m[n] > v) {
                    if (n > 0 && m[n - 1] !== g) continue;
                    m[n] -= 1, m[n + 1] >= 0 && m[n] === v && (m[n + 1] += s, a[b] += h);
                  }
              }
            } else
              E.innerHTML += S.innerHTML;
            o.removeItem(S), v--;
          } else E.nodeType === 1 && d(E, n + 1, v);
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
      for (let a = 0, d = o.children.length; a < d; a++)
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
        const d = a.children;
        for (let f = 0, n = d.length, g = 0; f < n; f++)
          !d[f + g] || o.isComponent(d[f + g]) || (g += l(d[f + g]));
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
    const a = [], d = [], f = [], n = [], g = this.getListChildNodes(e, (function(v) {
      if (v.nodeType !== 1)
        return this.isList(v.parentElement) && a.push(v), !1;
      if (i.test(v.nodeName) || !t.test(v.nodeName) && v.childNodes.length === 0 && this.isNotCheckingNode(v))
        return a.push(v), !1;
      const k = !this.getParentElement(v, this.isNotCheckingNode);
      if (!this.isTable(v) && !this.isListCell(v) && !this.isAnchor(v) && (this.isFormatElement(v) || this.isRangeFormatElement(v) || this.isTextStyleElement(v)) && v.childNodes.length === 0 && k)
        return d.push(v), !1;
      if (this.isList(v.parentNode) && !this.isList(v) && !this.isListCell(v))
        return f.push(v), !1;
      if (this.isCell(v)) {
        const S = v.firstElementChild;
        if (!this.isFormatElement(S) && !this.isRangeFormatElement(S) && !this.isComponent(S))
          return n.push(v), !1;
      }
      if (k && v.className) {
        const S = new this._w.Array(v.classList).map(o).join(" ").trim();
        S ? v.className = S : v.removeAttribute("class");
      }
      return l && v.parentNode !== e && k && (this.isListCell(v) && !this.isList(v.parentNode) || (this.isFormatElement(v) || this.isComponent(v)) && !this.isRangeFormatElement(v.parentNode) && !this.getParentElement(v, this.isComponent));
    }).bind(this));
    for (let v = 0, k = a.length; v < k; v++)
      this.removeItem(a[v]);
    const u = [];
    for (let v = 0, k = g.length, E, S; v < k; v++)
      if (E = g[v], S = E.parentNode, !(!S || !S.parentNode))
        if (this.getParentElement(E, this.isListCell)) {
          const R = E.childNodes;
          for (let s = R.length - 1; k >= 0; s--)
            S.insertBefore(E, R[s]);
          u.push(E);
        } else
          S.parentNode.insertBefore(E, S), u.push(S);
    for (let v = 0, k = u.length, E; v < k; v++)
      E = u[v], this.onlyZeroWidthSpace(E.textContent.trim()) && this.removeItem(E);
    for (let v = 0, k = d.length; v < k; v++)
      this.removeItem(d[v]);
    for (let v = 0, k = f.length, E, S, R, s; v < k; v++)
      if (E = f[v], s = E.parentNode, !!s)
        if (S = this.createElement("LI"), this.isFormatElement(E)) {
          for (R = E.childNodes; R[0]; )
            S.appendChild(R[0]);
          s.insertBefore(S, E), this.removeItem(E);
        } else
          E = E.nextSibling, S.appendChild(f[v]), s.insertBefore(S, E);
    for (let v = 0, k = n.length, E, S; v < k; v++)
      E = n[v], S = this.createElement("DIV"), S.innerHTML = E.textContent.trim().length === 0 && E.children.length === 0 ? "<br>" : E.innerHTML, E.innerHTML = S.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let i = "";
    e.height && (i += "height:" + e.height + ";"), e.minHeight && (i += "min-height:" + e.minHeight + ";"), e.maxHeight && (i += "max-height:" + e.maxHeight + ";"), e.position && (i += "position:" + e.position + ";"), e.width && (i += "width:" + e.width + ";"), e.minWidth && (i += "min-width:" + e.minWidth + ";"), e.maxWidth && (i += "max-width:" + e.maxWidth + ";");
    let o = "", l = "", a = "";
    t = i + t;
    const d = t.split(";");
    for (let f = 0, n = d.length, g; f < n; f++)
      if (g = d[f].trim(), !!g) {
        if (/^(min-|max-)?width\s*:/.test(g) || /^(z-index|position)\s*:/.test(g)) {
          o += g + ";";
          continue;
        }
        if (/^(min-|max-)?height\s*:/.test(g)) {
          /^height/.test(g) && g.split(":")[1].trim() === "auto" && (e.height = "auto"), l += g + ";";
          continue;
        }
        a += g + ";";
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
    for (let l = 0, a = t.length, d; l < a; l++) {
      if (d = [], /(^https?:\/\/)|(^data:text\/css,)/.test(t[l]))
        d.push(t[l]);
      else {
        const f = new i("(^|.*[\\/])" + t[l] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let n = document.getElementsByTagName("link"), g = 0, u = n.length, v; g < u; g++)
          v = n[g].href.match(f), v && d.push(v[0]);
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
}, Zi = {
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
    const a = this._createToolBar(i, t.buttonList, t.plugins, t), d = a.element.cloneNode(!1);
    d.className += " se-toolbar-shadow", a.element.style.visibility = "hidden", a.pluginCallButtons.math && this._checkKatexMath(t.katex);
    const f = i.createElement("DIV");
    f.className = "se-arrow";
    const n = i.createElement("DIV");
    n.className = "se-toolbar-sticky-dummy";
    const g = i.createElement("DIV");
    g.className = "se-wrapper";
    const u = this._initElements(t, o, a.element, f), v = u.bottomBar, k = u.wysiwygFrame, E = u.placeholder;
    let S = u.codeView;
    const R = v.resizingBar, s = v.navigation, r = v.charWrapper, c = v.charCounter, h = i.createElement("DIV");
    h.className = "se-loading-box sun-editor-common", h.innerHTML = '<div class="se-loading-effect"></div>';
    const m = i.createElement("DIV");
    m.className = "se-line-breaker", m.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
    const b = i.createElement("DIV");
    b.className += "se-line-breaker-component";
    const p = b.cloneNode(!0);
    b.innerHTML = p.innerHTML = t.icons.line_break;
    const y = i.createElement("DIV");
    y.className = "se-resizing-back";
    const C = i.createElement("INPUT");
    C.tabIndex = -1, C.style.cssText = "position: fixed !important; top: -10000px !important; display: block !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;";
    const _ = t.toolbarContainer;
    _ && (_.appendChild(a.element), _.appendChild(d));
    const w = t.resizingBarContainer;
    return R && w && w.appendChild(R), g.appendChild(S), E && g.appendChild(E), _ || (l.appendChild(a.element), l.appendChild(d)), l.appendChild(n), l.appendChild(g), l.appendChild(y), l.appendChild(h), l.appendChild(m), l.appendChild(b), l.appendChild(p), l.appendChild(C), R && !w && l.appendChild(R), o.appendChild(l), S = this._checkCodeMirror(t, S), {
      constructed: {
        _top: o,
        _relative: l,
        _toolBar: a.element,
        _toolbarShadow: d,
        _menuTray: a._menuTray,
        _editorArea: g,
        _wysiwygArea: k,
        _codeArea: S,
        _placeholder: E,
        _resizingBar: R,
        _navigation: s,
        _charWrapper: r,
        _charCounter: c,
        _loading: h,
        _lineBreaker: m,
        _lineBreaker_t: b,
        _lineBreaker_b: p,
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
        for (let d in a)
          ce.hasOwn(a, d) && (l[d] = a[d]);
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
        ce.hasOwn(o, l) && (i[l] = o[l]);
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
    const o = t.element, l = o.relative, a = o.editorArea, d = e.toolbarContainer && e.toolbarContainer !== i.toolbarContainer, f = e.lang !== i.lang || e.buttonList !== i.buttonList || e.mode !== i.mode || d, n = this._createToolBar(document, f ? e.buttonList : i.buttonList, e.plugins, e);
    n.pluginCallButtons.math && this._checkKatexMath(e.katex);
    const g = document.createElement("DIV");
    g.className = "se-arrow", f && (n.element.style.visibility = "hidden", d ? (e.toolbarContainer.appendChild(n.element), o.toolbar.parentElement.removeChild(o.toolbar)) : o.toolbar.parentElement.replaceChild(n.element, o.toolbar), o.toolbar = n.element, o._menuTray = n._menuTray, o._arrow = g);
    const u = this._initElements(e, o.topArea, f ? n.element : o.toolbar, g), v = u.bottomBar, k = u.wysiwygFrame, E = u.placeholder;
    let S = u.codeView;
    return o.resizingBar && ce.removeItem(o.resizingBar), v.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== i.resizingBarContainer ? e.resizingBarContainer.appendChild(v.resizingBar) : l.appendChild(v.resizingBar)), a.innerHTML = "", a.appendChild(S), E && a.appendChild(E), S = this._checkCodeMirror(e, S), o.resizingBar = v.resizingBar, o.navigation = v.navigation, o.charWrapper = v.charWrapper, o.charCounter = v.charCounter, o.wysiwygFrame = k, o.code = S, o.placeholder = E, e.rtl ? ce.addClass(o.topArea, "se-rtl") : ce.removeClass(o.topArea, "se-rtl"), {
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
    let d = null, f = null, n = null, g = null;
    if (e.resizingBar && (d = document.createElement("DIV"), d.className = "se-resizing-bar sun-editor-common", f = document.createElement("DIV"), f.className = "se-navigation sun-editor-common", d.appendChild(f), e.charCounter)) {
      if (n = document.createElement("DIV"), n.className = "se-char-counter-wrapper", e.charCounterLabel) {
        const v = document.createElement("SPAN");
        v.className = "se-char-label", v.textContent = e.charCounterLabel, n.appendChild(v);
      }
      if (g = document.createElement("SPAN"), g.className = "se-char-counter", g.textContent = "0", n.appendChild(g), e.maxCharCount > 0) {
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
        charCounter: g
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
      const a = t.plugins, d = a.length ? a : Object.keys(a).map(function(f) {
        return a[f];
      });
      for (let f = 0, n = d.length, g; f < n; f++)
        g = d[f].default || d[f], i[g.name] = g;
    }
    t.plugins = i, t.strictMode = t.strictMode !== !1, t.strictHTMLValidation = t.strictHTMLValidation !== !1, t.lang = t.lang || Mi, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new ce._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
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
    const l = "br|p|div|pre|blockquote|h1|h2|h3|h4|h5|h6|ol|ul|li|hr|figure|figcaption|img|iframe|audio|video|source|table|thead|tbody|tr|th|td|a|b|strong|var|i|em|u|ins|s|span|strike|del|sub|sup|code|svg|path|details|summary";
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : l) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? ce.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? ce.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? ce.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
      { text: "1", value: "1em" },
      { text: "1.5", value: "1.5em" },
      { text: "2", value: "2em" },
      { text: "2.5", value: "2.5em" }
    ], t.position = typeof t.position == "string" ? t.position : null, t.display = t.display || (e.style.display === "none" || !e.style.display ? "block" : e.style.display), t.popupDisplay = t.popupDisplay || "full", t.resizingBar = t.resizingBar === void 0 ? !/inline|balloon/i.test(t.mode) : t.resizingBar, t.showPathLabel = t.resizingBar ? typeof t.showPathLabel == "boolean" ? t.showPathLabel : !0 : !1, t.resizeEnable = t.resizeEnable === void 0 ? !0 : !!t.resizeEnable, t.resizingBarContainer = typeof t.resizingBarContainer == "string" ? document.querySelector(t.resizingBarContainer) : t.resizingBarContainer, t.charCounter = t.maxCharCount > 0 ? !0 : typeof t.charCounter == "boolean" ? t.charCounter : !1, t.charCounterType = typeof t.charCounterType == "string" ? t.charCounterType : "char", t.charCounterLabel = typeof t.charCounterLabel == "string" ? t.charCounterLabel.trim() : null, t.maxCharCount = ce.isNumber(t.maxCharCount) && t.maxCharCount > -1 ? t.maxCharCount * 1 : null, t.width = t.width ? ce.isNumber(t.width) ? t.width + "px" : t.width : e.clientWidth ? e.clientWidth + "px" : "100%", t.minWidth = (ce.isNumber(t.minWidth) ? t.minWidth + "px" : t.minWidth) || "", t.maxWidth = (ce.isNumber(t.maxWidth) ? t.maxWidth + "px" : t.maxWidth) || "", t.height = t.height ? ce.isNumber(t.height) ? t.height + "px" : t.height : e.clientHeight ? e.clientHeight + "px" : "auto", t.minHeight = (ce.isNumber(t.minHeight) ? t.minHeight + "px" : t.minHeight) || "", t.maxHeight = (ce.isNumber(t.maxHeight) ? t.maxHeight + "px" : t.maxHeight) || "", t.className = typeof t.className == "string" && t.className.length > 0 ? " " + t.className : "", t.defaultStyle = typeof t.defaultStyle == "string" ? t.defaultStyle : "", t.font = t.font ? t.font : ["Arial", "Comic Sans MS", "Courier New", "Impact", "Georgia", "tahoma", "Trebuchet MS", "Verdana"], t.fontSize = t.fontSize ? t.fontSize : null, t.formats = t.formats ? t.formats : null, t.colorList = t.colorList ? t.colorList : null, t.lineHeights = t.lineHeights ? t.lineHeights : null, t.paragraphStyles = t.paragraphStyles ? t.paragraphStyles : null, t.textStyles = t.textStyles ? t.textStyles : null, t.fontSizeUnit = typeof t.fontSizeUnit == "string" && t.fontSizeUnit.trim().toLowerCase() || "px", t.alignItems = typeof t.alignItems == "object" ? t.alignItems : t.rtl ? ["right", "center", "left", "justify"] : ["left", "center", "right", "justify"], t.imageResizing = t.imageResizing === void 0 ? !0 : t.imageResizing, t.imageHeightShow = t.imageHeightShow === void 0 ? !0 : !!t.imageHeightShow, t.imageAlignShow = t.imageAlignShow === void 0 ? !0 : !!t.imageAlignShow, t.imageWidth = t.imageWidth ? ce.isNumber(t.imageWidth) ? t.imageWidth + "px" : t.imageWidth : "auto", t.imageHeight = t.imageHeight ? ce.isNumber(t.imageHeight) ? t.imageHeight + "px" : t.imageHeight : "auto", t.imageSizeOnlyPercentage = !!t.imageSizeOnlyPercentage, t._imageSizeUnit = t.imageSizeOnlyPercentage ? "%" : "px", t.imageRotation = t.imageRotation !== void 0 ? t.imageRotation : !(t.imageSizeOnlyPercentage || !t.imageHeightShow), t.imageFileInput = t.imageFileInput === void 0 ? !0 : t.imageFileInput, t.imageUrlInput = t.imageUrlInput === void 0 || !t.imageFileInput ? !0 : t.imageUrlInput, t.imageUploadHeader = t.imageUploadHeader || null, t.imageUploadUrl = typeof t.imageUploadUrl == "string" ? t.imageUploadUrl : null, t.imageUploadSizeLimit = /\d+/.test(t.imageUploadSizeLimit) ? ce.getNumber(t.imageUploadSizeLimit, 0) : null, t.imageMultipleFile = !!t.imageMultipleFile, t.imageAccept = typeof t.imageAccept != "string" || t.imageAccept.trim() === "*" ? "image/*" : t.imageAccept.trim() || "image/*", t.imageGalleryData = t.imageGalleryData || null, t.imageGalleryUrl = typeof t.imageGalleryUrl == "string" ? t.imageGalleryUrl : null, t.imageGalleryHeader = t.imageGalleryHeader || null, t.videoResizing = t.videoResizing === void 0 ? !0 : t.videoResizing, t.videoHeightShow = t.videoHeightShow === void 0 ? !0 : !!t.videoHeightShow, t.videoAlignShow = t.videoAlignShow === void 0 ? !0 : !!t.videoAlignShow, t.videoRatioShow = t.videoRatioShow === void 0 ? !0 : !!t.videoRatioShow, t.videoWidth = !t.videoWidth || !ce.getNumber(t.videoWidth, 0) ? "" : ce.isNumber(t.videoWidth) ? t.videoWidth + "px" : t.videoWidth, t.videoHeight = !t.videoHeight || !ce.getNumber(t.videoHeight, 0) ? "" : ce.isNumber(t.videoHeight) ? t.videoHeight + "px" : t.videoHeight, t.videoSizeOnlyPercentage = !!t.videoSizeOnlyPercentage, t._videoSizeUnit = t.videoSizeOnlyPercentage ? "%" : "px", t.videoRotation = t.videoRotation !== void 0 ? t.videoRotation : !(t.videoSizeOnlyPercentage || !t.videoHeightShow), t.videoRatio = ce.getNumber(t.videoRatio, 4) || 0.5625, t.videoRatioList = t.videoRatioList ? t.videoRatioList : null, t.youtubeQuery = (t.youtubeQuery || "").replace("?", ""), t.vimeoQuery = (t.vimeoQuery || "").replace("?", ""), t.videoFileInput = !!t.videoFileInput, t.videoUrlInput = t.videoUrlInput === void 0 || !t.videoFileInput ? !0 : t.videoUrlInput, t.videoUploadHeader = t.videoUploadHeader || null, t.videoUploadUrl = typeof t.videoUploadUrl == "string" ? t.videoUploadUrl : null, t.videoUploadSizeLimit = /\d+/.test(t.videoUploadSizeLimit) ? ce.getNumber(t.videoUploadSizeLimit, 0) : null, t.videoMultipleFile = !!t.videoMultipleFile, t.videoTagAttrs = t.videoTagAttrs || null, t.videoIframeAttrs = t.videoIframeAttrs || null, t.videoAccept = typeof t.videoAccept != "string" || t.videoAccept.trim() === "*" ? "video/*" : t.videoAccept.trim() || "video/*", t.audioWidth = t.audioWidth ? ce.isNumber(t.audioWidth) ? t.audioWidth + "px" : t.audioWidth : "", t.audioHeight = t.audioHeight ? ce.isNumber(t.audioHeight) ? t.audioHeight + "px" : t.audioHeight : "", t.audioFileInput = !!t.audioFileInput, t.audioUrlInput = t.audioUrlInput === void 0 || !t.audioFileInput ? !0 : t.audioUrlInput, t.audioUploadHeader = t.audioUploadHeader || null, t.audioUploadUrl = typeof t.audioUploadUrl == "string" ? t.audioUploadUrl : null, t.audioUploadSizeLimit = /\d+/.test(t.audioUploadSizeLimit) ? ce.getNumber(t.audioUploadSizeLimit, 0) : null, t.audioMultipleFile = !!t.audioMultipleFile, t.audioTagAttrs = t.audioTagAttrs || null, t.audioAccept = typeof t.audioAccept != "string" || t.audioAccept.trim() === "*" ? "audio/*" : t.audioAccept.trim() || "audio/*", t.tableCellControllerPosition = typeof t.tableCellControllerPosition == "string" ? t.tableCellControllerPosition.toLowerCase() : "cell", t.linkTargetNewWindow = !!t.linkTargetNewWindow, t.linkProtocol = typeof t.linkProtocol == "string" ? t.linkProtocol : null, t.linkRel = Array.isArray(t.linkRel) ? t.linkRel : [], t.linkRelDefault = t.linkRelDefault || {}, t.tabDisable = !!t.tabDisable, t.shortcutsDisable = Array.isArray(t.shortcutsDisable) ? t.shortcutsDisable : [], t.shortcutsHint = t.shortcutsHint === void 0 ? !0 : !!t.shortcutsHint, t.callBackSave = t.callBackSave ? t.callBackSave : null, t.templates = t.templates ? t.templates : null, t.placeholder = typeof t.placeholder == "string" ? t.placeholder : null, t.mediaAutoSelect = t.mediaAutoSelect === void 0 ? !0 : !!t.mediaAutoSelect, t.buttonList = t.buttonList ? t.buttonList : [
      ["undo", "redo"],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"]
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? un : [un, t.icons].reduce(function(a, d) {
      for (let f in d)
        ce.hasOwn(d, f) && (a[f] = d[f]);
      return a;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(a, d) {
      for (let f in d)
        ce.hasOwn(d, f) && (a[f] = d[f]);
      return a;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = ce._setDefaultOptionStyle(t, t.defaultStyle);
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
    const t = e.icons, i = e.lang, o = ce.isOSX_IOS ? "⌘" : "CTRL", l = ce.isOSX_IOS ? "⇧" : "+SHIFT", a = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], d = e.rtl ? ["[", "]"] : ["]", "["], f = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
    return {
      /** default command */
      bold: ["", i.toolbar.bold + '<span class="se-shortcut">' + (a.indexOf("bold") > -1 ? "" : o + '+<span class="se-shortcut-key">B</span>') + "</span>", "bold", "", t.bold],
      underline: ["", i.toolbar.underline + '<span class="se-shortcut">' + (a.indexOf("underline") > -1 ? "" : o + '+<span class="se-shortcut-key">U</span>') + "</span>", "underline", "", t.underline],
      italic: ["", i.toolbar.italic + '<span class="se-shortcut">' + (a.indexOf("italic") > -1 ? "" : o + '+<span class="se-shortcut-key">I</span>') + "</span>", "italic", "", t.italic],
      strike: ["", i.toolbar.strike + '<span class="se-shortcut">' + (a.indexOf("strike") > -1 ? "" : o + l + '+<span class="se-shortcut-key">S</span>') + "</span>", "strike", "", t.strike],
      subscript: ["", i.toolbar.subscript, "SUB", "", t.subscript],
      superscript: ["", i.toolbar.superscript, "SUP", "", t.superscript],
      removeFormat: ["", i.toolbar.removeFormat, "removeFormat", "", t.erase],
      indent: ["", i.toolbar.indent + '<span class="se-shortcut">' + (a.indexOf("indent") > -1 ? "" : o + '+<span class="se-shortcut-key">' + d[0] + "</span>") + "</span>", "indent", "", f[0]],
      outdent: ["", i.toolbar.outdent + '<span class="se-shortcut">' + (a.indexOf("indent") > -1 ? "" : o + '+<span class="se-shortcut-key">' + d[1] + "</span>") + "</span>", "outdent", "", f[1]],
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
    const e = ce.createElement("DIV");
    e.className = "se-btn-module se-btn-module-border";
    const t = ce.createElement("UL");
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
  _createButton: function(e, t, i, o, l, a, d) {
    const f = ce.createElement("LI"), n = ce.createElement("BUTTON"), g = t || i;
    return n.setAttribute("type", "button"), n.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), n.setAttribute("data-command", i), n.setAttribute("data-display", o), n.setAttribute("aria-label", g.replace(/<span .+<\/span>/, "")), n.setAttribute("tabindex", "-1"), l || (l = '<span class="se-icon-text">!</span>'), /^default\./i.test(l) && (l = d[l.replace(/^default\./i, "")]), /^text\./i.test(l) && (l = l.replace(/^text\./i, ""), n.className += " se-btn-more-text"), l += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + g + "</span></span>", a && n.setAttribute("disabled", !0), n.innerHTML = l, f.appendChild(n), {
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
    const d = e.createElement("DIV");
    d.className = "se-btn-tray", a.appendChild(d), t = JSON.parse(JSON.stringify(t));
    const f = o.icons, n = this._defaultButtons(o), g = {}, u = [];
    let v = null, k = null, E = null, S = null, R = "", s = !1;
    const r = ce.createElement("DIV");
    r.className = "se-toolbar-more-layer";
    e:
      for (let m = 0, b, p, y, C, _; m < t.length; m++)
        if (b = !1, _ = "", C = t[m], E = this._createModuleGroup(), typeof C == "object") {
          for (let w = 0, A; w < C.length; w++) {
            if (k = C[w], A = !1, /^\%\d+/.test(k) && w === 0) {
              C[0] = k.replace(/[^\d]/g, ""), u.push(C), t.splice(m--, 1);
              continue e;
            }
            if (typeof k == "object")
              typeof k.add == "function" ? (R = k.name, v = n[R], i[R] = k) : (R = k.name, v = [k.buttonClass, k.title, k.name, k.dataDisplay, k.innerHTML, k._disabled]);
            else {
              if (/^\-/.test(k)) {
                _ = k.substr(1), E.div.className += " module-float-" + _;
                continue;
              }
              if (/^\#/.test(k)) {
                k.substr(1) === "fix" && (E.ul.className += " se-menu-dir-fix");
                continue;
              }
              if (/^\:/.test(k)) {
                A = !0;
                const z = k.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                y = "__se__" + z[1].trim();
                const L = z[2].trim(), N = z[3].trim();
                v = ["se-btn-more", L, y, "MORE", N];
              } else
                v = n[k];
              if (R = k, !v) {
                const z = i[R];
                if (!z) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + R + "]");
                v = [z.buttonClass, z.title, z.name, z.display, z.innerHTML, z._disabled];
              }
            }
            S = this._createButton(v[0], v[1], v[2], v[3], v[4], v[5], f), (b ? p : E.ul).appendChild(S.li), i[R] && (g[R] = S.button), A && (b = !0, p = ce.createElement("DIV"), p.className = "se-more-layer " + y, p.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (_ ? ' style="float: ' + _ + ';"' : "") + "></ul></div>", r.appendChild(p), p = p.firstElementChild.firstElementChild);
          }
          if (s) {
            const w = l.cloneNode(!1);
            d.appendChild(w);
          }
          d.appendChild(E.div), s = !0;
        } else if (/^\/$/.test(C)) {
          const w = e.createElement("DIV");
          w.className = "se-btn-module-enter", d.appendChild(w), s = !1;
        }
    switch (d.children.length) {
      case 0:
        d.style.display = "none";
        break;
      case 1:
        ce.removeClass(d.firstElementChild, "se-btn-module-border");
        break;
      default:
        if (o.rtl) {
          const m = l.cloneNode(!1);
          m.style.float = d.lastElementChild.style.float, d.appendChild(m);
        }
    }
    u.length > 0 && u.unshift(t), r.children.length > 0 && d.appendChild(r);
    const c = e.createElement("DIV");
    c.className = "se-menu-tray", a.appendChild(c);
    const h = e.createElement("DIV");
    return h.className = "se-toolbar-cover", a.appendChild(h), o.hideToolbar && (a.style.display = "none"), {
      element: a,
      plugins: i,
      pluginCallButtons: g,
      responsiveButtons: u,
      _menuTray: c,
      _buttonTray: d
    };
  }
}, qi = function(e, t, i) {
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
function or(e, t) {
  const i = e._w, o = e.util, l = e.options.historyStackDelayTime;
  let a = e.context.element, d = e.context.tool.undo, f = e.context.tool.redo, n = null, g = 0, u = [];
  function v() {
    const E = u[g];
    a.wysiwyg.innerHTML = E.contents, e.setRange(o.getNodeFromPath(E.s.path, a.wysiwyg), E.s.offset, o.getNodeFromPath(E.e.path, a.wysiwyg), E.e.offset), e.focus(), u.length <= 1 ? (d && d.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0)) : g === 0 ? (d && d.setAttribute("disabled", !0), f && f.removeAttribute("disabled")) : g === u.length - 1 ? (d && d.removeAttribute("disabled"), f && f.setAttribute("disabled", !0)) : (d && d.removeAttribute("disabled"), f && f.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function k() {
    e._checkComponents();
    const E = a.wysiwyg.innerHTML;
    if (!E || u[g] && E === u[g].contents) return;
    g++;
    const S = e._variable._range;
    u.length > g && (u = u.slice(0, g), f && f.setAttribute("disabled", !0)), S ? u[g] = {
      contents: E,
      s: {
        path: o.getNodePath(S.startContainer, null, null),
        offset: S.startOffset
      },
      e: {
        path: o.getNodePath(S.endContainer, null, null),
        offset: S.endOffset
      }
    } : u[g] = {
      contents: E,
      s: { path: [0, 0], offset: [0, 0] },
      e: { path: 0, offset: 0 }
    }, g === 1 && d && d.removeAttribute("disabled"), e._setCharCount(), t();
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
    push: function(E) {
      i.setTimeout(e._resourcesStateChange.bind(e));
      const S = typeof E == "number" ? E > 0 ? E : 0 : E ? l : 0;
      if ((!S || n) && (i.clearTimeout(n), !S)) {
        k();
        return;
      }
      n = i.setTimeout(function() {
        i.clearTimeout(n), n = null, k();
      }, S);
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
      u.length - 1 > g && (g++, v());
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(E) {
      g = E < 0 ? u.length - 1 : E, v();
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
    reset: function(E) {
      d && d.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0), u.splice(0), g = 0, u[g] = {
        contents: e.getContents(!0),
        s: {
          path: [0, 0],
          offset: 0
        },
        e: {
          path: [0, 0],
          offset: 0
        }
      }, E || t();
    },
    /**
     * @description Reset the disabled state of the buttons to fit the current stack.
     * @private
     */
    _resetCachingButton: function() {
      a = e.context.element, d = e.context.tool.undo, f = e.context.tool.redo, g === 0 ? (d && d.setAttribute("disabled", !0), f && g === u.length - 1 && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : g === u.length - 1 && f && f.setAttribute("disabled", !0);
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
const dn = {
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
function sr(e, t, i, o, l, a) {
  const d = e.element.originElement.ownerDocument || document, f = d.defaultView || window, n = ce, g = l.icons, u = {
    _d: d,
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
    notice: dn,
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
        for (let r = 0, c, h, m; r < s.length; r++)
          c = s[r], h = c.getAttribute("data-command"), m = this.allCommandButtons[h], m && (c.parentElement.replaceChild(m, c), this.context.tool[h] && (this.context.tool[h] = m));
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
      const c = this.context.element.toolbar, h = c.offsetWidth, m = v._getEditorOffsets(e.element.toolbar), b = r.offsetWidth, p = s.parentElement.offsetLeft + 3;
      if (l.rtl) {
        const N = s.offsetWidth, $ = b > N ? b - N : 0, W = $ > 0 ? 0 : N - b;
        r.style.left = p - $ + W + "px", m.left > v._getEditorOffsets(r).left && (r.style.left = "0px");
      } else {
        const N = h <= b ? 0 : h - (p + b);
        N < 0 ? r.style.left = p + N + "px" : r.style.left = p + "px";
      }
      let y = 0, C = s;
      for (; C && C !== c; )
        y += C.offsetTop, C = C.offsetParent;
      const _ = y;
      this._isBalloon ? y += c.offsetTop + s.offsetHeight : y -= s.offsetHeight;
      const w = m.top, A = r.offsetHeight, z = this.getGlobalScrollOffset().top, L = f.innerHeight - (w - z + _ + s.parentElement.offsetHeight);
      if (L < A) {
        let N = -1 * (A - _ + 3);
        const $ = w - z + N, W = A + ($ < 0 ? $ : 0);
        W > L ? (r.style.height = W + "px", N = -1 * (W - _ + 3)) : (r.style.height = L + "px", N = _ + s.parentElement.offsetHeight), r.style.top = N + "px";
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
    setControllerPosition: function(s, r, c, h) {
      l.rtl && (h.left *= -1);
      const m = n.getOffset(r, e.element.wysiwygFrame);
      s.style.visibility = "hidden", s.style.display = "block";
      const b = c === "top" ? -(s.offsetHeight + 2) : r.offsetHeight + 12;
      s.style.top = m.top + b + h.top + "px";
      const p = m.left - e.element.wysiwygFrame.scrollLeft + h.left, y = s.offsetWidth, C = r.offsetWidth, _ = n.hasClass(s.firstElementChild, "se-arrow") ? s.firstElementChild : null;
      if (l.rtl) {
        const w = y > C ? y - C : 0, A = w > 0 ? 0 : C - y;
        s.style.left = p - w + A + "px", w > 0 && _ && (_.style.left = (y - 14 < 10 + w ? y - 14 : 10 + w) + "px");
        const z = e.element.wysiwygFrame.offsetLeft - s.offsetLeft;
        z > 0 && (s.style.left = "0px", _ && (_.style.left = z + "px"));
      } else {
        s.style.left = p + "px";
        const w = e.element.wysiwygFrame.offsetWidth - (s.offsetLeft + y);
        w < 0 ? (s.style.left = s.offsetLeft + w + "px", _ && (_.style.left = 20 - w + "px")) : _ && (_.style.left = "20px");
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
        if (l.iframe)
          this.nativeFocus();
        else
          try {
            const s = this.getRange();
            if (s.startContainer === s.endContainer && n.isWysiwygDiv(s.startContainer)) {
              const r = s.commonAncestorContainer.children[s.startOffset];
              if (!n.isFormatElement(r) && !n.isComponent(r)) {
                const c = n.createElement(l.defaultTag), h = n.createElement("BR");
                c.appendChild(h), e.element.wysiwyg.insertBefore(c, r), this.setRange(h, 0, h, 0);
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
    setRange: function(s, r, c, h) {
      if (!s || !c) return;
      r > s.textContent.length && (r = s.textContent.length), h > c.textContent.length && (h = c.textContent.length), n.isFormatElement(s) && (s = s.childNodes[r] || s.childNodes[r - 1] || s, r = r > 0 ? s.nodeType === 1 ? 1 : s.textContent ? s.textContent.length : 0 : 0), n.isFormatElement(c) && (c = c.childNodes[h] || c.childNodes[h - 1] || c, h = h > 0 ? c.nodeType === 1 ? 1 : c.textContent ? c.textContent.length : 0 : 0);
      const m = this._wd.createRange();
      try {
        m.setStart(s, r), m.setEnd(c, h);
      } catch (p) {
        console.warn("[SUNEDITOR.core.focus.error] " + p), this.nativeFocus();
        return;
      }
      const b = this.getSelection();
      return b.removeAllRanges && b.removeAllRanges(), b.addRange(m), this._rangeInfo(m, this.getSelection()), l.iframe && this.__focus(), m;
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
        const c = r.anchorNode, h = r.focusNode, m = r.anchorOffset, b = r.focusOffset, p = n.compareElements(c, h), y = p.ancestor && (p.result === 0 ? m <= b : p.result > 1);
        return this.setRange(
          y ? c : h,
          y ? m : b,
          y ? h : c,
          y ? b : m
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
        const c = e.element.wysiwyg, h = n.createElement(l.defaultTag);
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
      let c = s.firstElementChild, h = null;
      return c ? (h = c.firstChild, h || (h = n.createElement("BR"), c.appendChild(h))) : (c = n.createElement(l.defaultTag), h = n.createElement("BR"), c.appendChild(h), s.appendChild(c)), r.setStart(h, 0), r.setEnd(h, 0), r;
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
      let c = s.startContainer, h = s.startOffset, m = s.endContainer, b = s.endOffset, p, y, C;
      if (n.isFormatElement(c))
        for (c.childNodes[h] ? (c = c.childNodes[h] || c, h = 0) : (c = c.lastChild || c, h = c.textContent.length); c && c.nodeType === 1 && c.firstChild; )
          c = c.firstChild || c, h = 0;
      if (n.isFormatElement(m)) {
        for (m = m.childNodes[b] || m.lastChild || m; m && m.nodeType === 1 && m.lastChild; )
          m = m.lastChild;
        b = r ? 0 : m.textContent.length;
      }
      if (p = n.isWysiwygDiv(c) ? e.element.wysiwyg.firstChild : c, y = h, n.isBreak(p) || p.nodeType === 1 && p.childNodes.length > 0) {
        const _ = n.isBreak(p);
        if (!_) {
          for (; p && !n.isBreak(p) && p.nodeType === 1; )
            p = p.childNodes[y] || p.nextElementSibling || p.nextSibling, y = 0;
          let w = n.getFormatElement(p, null);
          w === n.getRangeFormatElement(w, null) && (w = n.createElement(n.getParentElement(p, n.isCell) ? "DIV" : l.defaultTag), p.parentNode.insertBefore(w, p), w.appendChild(p));
        }
        if (n.isBreak(p)) {
          const w = n.createTextNode(n.zeroWidthSpace);
          p.parentNode.insertBefore(w, p), p = w, _ && c === m && (m = p, b = 1);
        }
      }
      if (c = p, h = y, p = n.isWysiwygDiv(m) ? e.element.wysiwyg.lastChild : m, y = b, n.isBreak(p) || p.nodeType === 1 && p.childNodes.length > 0) {
        const _ = n.isBreak(p);
        if (!_) {
          for (; p && !n.isBreak(p) && p.nodeType === 1 && (C = p.childNodes, C.length !== 0); )
            p = C[y > 0 ? y - 1 : y] || !/FIGURE/i.test(C[0].nodeName) ? C[0] : p.previousElementSibling || p.previousSibling || c, y = y > 0 ? p.textContent.length : y;
          let w = n.getFormatElement(p, null);
          w === n.getRangeFormatElement(w, null) && (w = n.createElement(n.isCell(w) ? "DIV" : l.defaultTag), p.parentNode.insertBefore(w, p), w.appendChild(p));
        }
        if (n.isBreak(p)) {
          const w = n.createTextNode(n.zeroWidthSpace);
          p.parentNode.insertBefore(w, p), p = w, y = 1, _ && !p.previousSibling && n.removeItem(m);
        }
      }
      return m = p, b = y, this.setRange(c, h, m, b), !0;
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
      const c = r.startContainer, h = r.endContainer, m = r.commonAncestorContainer, b = n.getListChildren(m, function(N) {
        return s ? s(N) : n.isFormatElement(N);
      });
      if (!n.isWysiwygDiv(m) && !n.isRangeFormatElement(m) && b.unshift(n.getFormatElement(m, null)), c === h || b.length === 1) return b;
      let p = n.getFormatElement(c, null), y = n.getFormatElement(h, null), C = null, _ = null;
      const w = function(N) {
        return n.isTable(N) ? /^TABLE$/i.test(N.nodeName) : !0;
      };
      let A = n.getRangeFormatElement(p, w), z = n.getRangeFormatElement(y, w);
      n.isTable(A) && n.isListCell(A.parentNode) && (A = A.parentNode), n.isTable(z) && n.isListCell(z.parentNode) && (z = z.parentNode);
      const L = A === z;
      for (let N = 0, $ = b.length, W; N < $; N++) {
        if (W = b[N], p === W || !L && W === A) {
          C = N;
          continue;
        }
        if (y === W || !L && W === z) {
          _ = N;
          break;
        }
      }
      return C === null && (C = 0), _ === null && (_ = b.length - 1), b.slice(C, _ + 1);
    },
    /**
     * @description Get format elements and components from the selected area. (P, DIV, H[1-6], OL, UL, TABLE..)
     * If some of the component are included in the selection, get the entire that component.
     * @param {Boolean} removeDuplicate If true, if there is a parent and child tag among the selected elements, the child tag is excluded.
     * @returns {Array}
     */
    getSelectedElementsAndComponents: function(s) {
      const r = this.getRange().commonAncestorContainer, c = n.getParentElement(r, n.isComponent), h = n.isTable(r) ? this.getSelectedElements(null) : this.getSelectedElements((function(m) {
        const b = this.getParentElement(m, this.isComponent);
        return this.isFormatElement(m) && (!b || b === c) || this.isComponent(m) && !this.getFormatElement(m);
      }).bind(n));
      if (s) {
        for (let m = 0, b = h.length; m < b; m++)
          for (let p = m - 1; p >= 0; p--)
            if (h[p].contains(h[m])) {
              h.splice(m, 1), m--, b--;
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
      for (c = c === "start" ? "previousSibling" : "nextSibling"; s && !n.isFormatElement(s) && !n.isWysiwygDiv(s); )
        if (!s[c] || n.isBreak(s[c]) && !s[c][c])
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
      const c = n.getFormatElement(this.getSelectionNode(), null);
      let h = null;
      if (!n.isFormatElement(s) && n.isFreeFormatElement(c || s.parentNode))
        h = n.createElement("BR");
      else {
        const m = r ? typeof r == "string" ? r : r.nodeName : n.isFormatElement(c) && !n.isRangeFormatElement(c) && !n.isFreeFormatElement(c) ? c.nodeName : l.defaultTag;
        h = n.createElement(m), h.innerHTML = "<br>", (r && typeof r != "string" || !r && n.isFormatElement(c)) && n.copyTagAttributes(h, r || c, ["id"]);
      }
      return n.isCell(s) ? s.insertBefore(h, s.nextElementSibling) : s.parentNode.insertBefore(h, s.nextElementSibling), h;
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
      const m = this.removeNode();
      this.getRange_addLine(this.getRange(), m.container);
      let b = null, p = this.getSelectionNode(), y = n.getFormatElement(p, null);
      if (n.isListCell(y))
        this.insertNode(s, p === y ? null : m.container.nextSibling, !1), s.nextSibling || s.parentNode.appendChild(n.createElement("BR"));
      else {
        if (this.getRange().collapsed && (m.container.nodeType === 3 || n.isBreak(m.container))) {
          const C = n.getParentElement(m.container, (function(_) {
            return this.isRangeFormatElement(_);
          }).bind(n));
          b = n.splitElement(m.container, m.offset, C ? n.getElementDepth(C) + 1 : 0), b && (y = b.previousSibling);
        }
        this.insertNode(s, n.isRangeFormatElement(y) ? null : y, !1), y && n.onlyZeroWidthSpace(y) && n.removeItem(y);
      }
      if (!h) {
        this.setRange(s, 0, s, 0);
        const C = this.getFileComponent(s);
        C ? this.selectComponent(C.target, C.pluginName) : b && (b = n.getEdgeChildNodes(b, null).sc || b, this.setRange(b, 0, b, 0));
      }
      return r || this.history.push(1), b || s;
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
      const r = n.getParentElement(s, n.isComponent), c = e.element.lineBreaker_t.style, h = e.element.lineBreaker_b.style, m = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : s, b = n.isListCell(r.parentNode);
      let p, y, C;
      (b ? !r.previousSibling : !n.isFormatElement(r.previousElementSibling)) ? (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, p = n.getOffset(s, e.element.wysiwygFrame).top + y, C = m.offsetWidth / 2 / 2, c.top = p - y - 12 + "px", c.left = n.getOffset(m).left + C + "px", c.display = "block") : c.display = "none", (b ? !r.nextSibling : !n.isFormatElement(r.nextElementSibling)) ? (p || (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, p = n.getOffset(s, e.element.wysiwygFrame).top + y, C = m.offsetWidth / 2 / 2), h.top = p + m.offsetHeight - y - 12 + "px", h.left = n.getOffset(m).left + m.offsetWidth - C - 24 + "px", h.display = "block") : h.display = "none";
    },
    _checkDuplicateNode: function(s, r) {
      (function c(h) {
        u._dupleCheck(h, r);
        const m = h.childNodes;
        for (let b = 0, p = m.length; b < p; b++)
          c(m[b]);
      })(s);
    },
    _dupleCheck: function(s, r) {
      if (!n.isTextStyleElement(s)) return;
      const c = (s.style.cssText.match(/[^;]+;/g) || []).map(function(b) {
        return b.trim();
      }), h = s.nodeName;
      if (/^span$/i.test(h) && c.length === 0) return s;
      let m = !1;
      return function b(p) {
        if (!(n.isWysiwygDiv(p) || !n.isTextStyleElement(p))) {
          if (p.nodeName === h) {
            m = !0;
            const y = p.style.cssText.match(/[^;]+;/g) || [];
            for (let C = 0, _ = y.length, w; C < _; C++)
              (w = c.indexOf(y[C].trim())) > -1 && c.splice(w, 1);
            for (let C = 0, _ = p.classList.length; C < _; C++)
              s.classList.remove(p.classList[C]);
          }
          b(p.parentElement);
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
      let h = null, m = this.getRange(), b = n.isListCell(m.commonAncestorContainer) ? m.commonAncestorContainer : n.getFormatElement(this.getSelectionNode(), null), p = n.isListCell(b) && (n.isListCell(s) || n.isList(s)), y, C, _, w = null;
      const A = n.isFreeFormatElement(b), z = !A && (n.isFormatElement(s) || n.isRangeFormatElement(s)) || n.isComponent(s);
      if (p && (_ = r || n.isList(s) ? b.lastChild : b.nextElementSibling, w = n.isList(s) ? b : (_ || b).parentNode), !r && (z || n.isComponent(s) || n.isMedia(s))) {
        const P = this.isEdgePoint(m.endContainer, m.endOffset, "end"), I = this.removeNode(), V = I.container, B = V === I.prevContainer && m.collapsed ? null : I.prevContainer;
        if (p && B)
          if (w = B.nodeType === 3 ? B.parentNode : B, w.contains(V)) {
            let U = !0;
            for (_ = V; _.parentNode && _.parentNode !== w; )
              _ = _.parentNode, U = !1;
            U && V === B && (_ = _.nextSibling);
          } else
            _ = null;
        else if (p && n.isListCell(V) && !b.parentElement)
          b = n.createElement("LI"), w.appendChild(b), V.appendChild(w), _ = null;
        else if (V.nodeType === 3 || n.isBreak(V) || p) {
          const U = n.getParentElement(V, (function(x) {
            return this.isRangeFormatElement(x) || this.isListCell(x);
          }).bind(n));
          if (r = n.splitElement(V, I.offset, U ? n.getElementDepth(U) + 1 : 0), !r)
            _ = r = b;
          else if (p) {
            if (b.contains(V)) {
              const x = n.isList(b.lastElementChild);
              let M = null;
              P || (M = b.cloneNode(!1), M.appendChild(r.textContent.trim() ? r : n.createTextNode(n.zeroWidthSpace))), x && (M || (M = b.cloneNode(!1), M.appendChild(n.createTextNode(n.zeroWidthSpace))), M.appendChild(b.lastElementChild)), M && (b.parentNode.insertBefore(M, b.nextElementSibling), _ = r = M);
            }
          } else
            r = r.previousSibling;
        }
      }
      m = !r && !z ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const L = m.commonAncestorContainer, N = m.startOffset, $ = m.endOffset, W = m.startContainer === L && n.isFormatElement(L), O = W && (L.childNodes[N] || L.childNodes[0]) || m.startContainer, D = W && (L.childNodes[$] || L.childNodes[L.childNodes.length - 1]) || m.endContainer;
      if (!p)
        if (r)
          y = r.parentNode, r = r.nextSibling, C = !0;
        else if (y = O, O.nodeType === 3 && (y = O.parentNode), m.collapsed)
          if (L.nodeType === 3)
            L.textContent.length > $ ? r = L.splitText($) : r = L.nextSibling;
          else if (n.isBreak(y))
            r = y, y = y.parentNode;
          else {
            let P = y.childNodes[N];
            const I = P && P.nodeType === 3 && n.onlyZeroWidthSpace(P) && n.isBreak(P.nextSibling) ? P.nextSibling : P;
            I ? !I.nextSibling && n.isBreak(I) ? (y.removeChild(I), r = null) : r = n.isBreak(I) && !n.isBreak(s) ? I : I.nextSibling : r = null;
          }
        else if (O === D) {
          this.isEdgePoint(D, $) ? r = D.nextSibling : r = D.splitText($);
          let I = O;
          this.isEdgePoint(O, N) || (I = O.splitText(N)), y.removeChild(I), y.childNodes.length === 0 && z && (y.innerHTML = "<br>");
        } else {
          const I = this.removeNode(), V = I.container, B = I.prevContainer;
          if (V && V.childNodes.length === 0 && z && (n.isFormatElement(V) ? V.innerHTML = "<br>" : n.isRangeFormatElement(V) && (V.innerHTML = "<" + l.defaultTag + "><br></" + l.defaultTag + ">")), n.isListCell(V) && s.nodeType === 3)
            y = V, r = null;
          else if (!z && B)
            if (y = B.nodeType === 3 ? B.parentNode : B, y.contains(V)) {
              let U = !0;
              for (r = V; r.parentNode && r.parentNode !== y; )
                r = r.parentNode, U = !1;
              U && V === B && (r = r.nextSibling);
            } else
              r = null;
          else n.isWysiwygDiv(V) && !n.isFormatElement(s) ? (y = V.appendChild(n.createElement(l.defaultTag)), r = null) : (r = z ? D : V === B ? V.nextSibling : V, y = !r || !r.parentNode ? L : r.parentNode);
          for (; r && !n.isFormatElement(r) && r.parentNode !== L; )
            r = r.parentNode;
        }
      try {
        if (!p) {
          if ((n.isWysiwygDiv(r) || y === e.element.wysiwyg.parentNode) && (y = e.element.wysiwyg, r = null), n.isFormatElement(s) || n.isRangeFormatElement(s) || !n.isListCell(y) && n.isComponent(s)) {
            const P = y;
            if (n.isList(r))
              y = r, r = null;
            else if (n.isListCell(r))
              y = r.previousElementSibling || r;
            else if (!C && !r) {
              const I = this.removeNode(), V = I.container.nodeType === 3 ? n.isListCell(n.getFormatElement(I.container, null)) ? I.container : n.getFormatElement(I.container, null) || I.container.parentNode : I.container, B = n.isWysiwygDiv(V) || n.isRangeFormatElement(V);
              y = B ? V : V.parentNode, r = B ? null : V.nextSibling;
            }
            P.childNodes.length === 0 && y !== P && n.removeItem(P);
          }
          if (z && !A && !n.isRangeFormatElement(y) && !n.isListCell(y) && !n.isWysiwygDiv(y) && (r = y.nextElementSibling, y = y.parentNode), n.isWysiwygDiv(y) && (s.nodeType === 3 || n.isBreak(s))) {
            const P = n.createElement(l.defaultTag);
            P.appendChild(s), h = s, s = P;
          }
        }
        if (p ? w.parentNode ? (y = w, r = _) : (y = e.element.wysiwyg, r = null) : r = y === r ? y.lastChild : r, n.isListCell(s) && !n.isList(y)) {
          if (n.isListCell(y))
            r = y.nextElementSibling, y = y.parentNode;
          else {
            const P = n.createElement("ol");
            y.insertBefore(P, r), y = P, r = null;
          }
          p = !0;
        }
        if (this._checkDuplicateNode(s, y), y.insertBefore(s, r), p)
          if (n.onlyZeroWidthSpace(b.textContent.trim()))
            n.removeItem(b), s = s.lastChild;
          else {
            const P = n.getArrayItem(b.children, n.isList);
            P && (s !== P ? (s.appendChild(P), s = P.previousSibling) : (y.appendChild(s), s = y), n.onlyZeroWidthSpace(b.textContent.trim()) && n.removeItem(b));
          }
      } catch (P) {
        y.appendChild(s), console.warn("[SUNEDITOR.insertNode.warn] " + P);
      } finally {
        h && (s = h);
        const P = y.querySelectorAll("[data-se-duple]");
        if (P.length > 0)
          for (let I = 0, V = P.length, B, U, x, M; I < V; I++) {
            for (B = P[I], x = B.childNodes, M = B.parentNode; x[0]; )
              U = x[0], M.insertBefore(U, B);
            B === s && (s = U), n.removeItem(B);
          }
        if ((n.isFormatElement(s) || n.isComponent(s)) && O === D) {
          const I = n.getFormatElement(L, null);
          I && I.nodeType === 1 && n.isEmptyLine(I) && n.removeItem(I);
        }
        if (A && (n.isFormatElement(s) || n.isRangeFormatElement(s)) && (s = this._setIntoFreeFormat(s)), !n.isComponent(s)) {
          let I = 1;
          if (s.nodeType === 3)
            I = s.textContent.length, this.setRange(s, I, s, I);
          else if (!n.isBreak(s) && !n.isListCell(s) && n.isFormatElement(y)) {
            let V = null;
            (!s.previousSibling || n.isBreak(s.previousSibling)) && (V = n.createTextNode(n.zeroWidthSpace), s.parentNode.insertBefore(V, s)), (!s.nextSibling || n.isBreak(s.nextSibling)) && (V = n.createTextNode(n.zeroWidthSpace), s.parentNode.insertBefore(V, s.nextSibling)), n._isIgnoreNodeChange(s) && (s = s.nextSibling, I = 0);
          }
          this.setRange(s, I, s, I);
        }
        return s;
      }
    },
    _setIntoFreeFormat: function(s) {
      const r = s.parentNode;
      let c, h;
      for (; n.isFormatElement(s) || n.isRangeFormatElement(s); ) {
        for (c = s.childNodes, h = null; c[0]; ) {
          if (h = c[0], n.isFormatElement(h) || n.isRangeFormatElement(h)) {
            if (this._setIntoFreeFormat(h), !s.parentNode) break;
            c = s.childNodes;
            continue;
          }
          r.insertBefore(h, s);
        }
        s.childNodes.length === 0 && n.removeItem(s), s = n.createElement("BR"), r.insertBefore(s, h.nextSibling);
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
          const V = n.createElement("BR"), B = n.createElement(l.defaultTag);
          return B.appendChild(V), n.changeElement(I, B), u.setRange(B, 0, B, 0), this.history.push(!0), {
            container: B,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const r = s.startOffset === 0, c = u.isEdgePoint(s.endContainer, s.endOffset, "end");
      let h = null, m = null, b = null;
      r && (m = n.getFormatElement(s.startContainer), m && (h = m.previousElementSibling, m = h)), c && (b = n.getFormatElement(s.endContainer), b = b && b.nextElementSibling);
      let p, y = 0, C = s.startContainer, _ = s.endContainer, w = s.startOffset, A = s.endOffset;
      const z = s.commonAncestorContainer.nodeType === 3 && s.commonAncestorContainer.parentNode === C.parentNode ? C.parentNode : s.commonAncestorContainer;
      if (z === C && z === _ && (C = z.children[w], _ = z.children[A], w = A = 0), !C || !_) return {
        container: z,
        offset: 0
      };
      if (C === _ && s.collapsed && C.textContent && n.onlyZeroWidthSpace(C.textContent.substr(w)))
        return {
          container: C,
          offset: w,
          prevContainer: C && C.parentNode ? C : null
        };
      let L = null, N = null;
      const $ = n.getListChildNodes(z, null);
      let W = n.getArrayIndex($, C), O = n.getArrayIndex($, _);
      if ($.length > 0 && W > -1 && O > -1) {
        for (let I = W + 1, V = C; I >= 0; I--)
          $[I] === V.parentNode && $[I].firstChild === V && w === 0 && (W = I, V = V.parentNode);
        for (let I = O - 1, V = _; I > W; I--)
          $[I] === V.parentNode && $[I].nodeType === 1 && ($.splice(I, 1), V = V.parentNode, --O);
      } else {
        if ($.length === 0) {
          if (n.isFormatElement(z) || n.isRangeFormatElement(z) || n.isWysiwygDiv(z) || n.isBreak(z) || n.isMedia(z))
            return {
              container: z,
              offset: 0
            };
          if (z.nodeType === 3)
            return {
              container: z,
              offset: A
            };
          $.push(z), C = _ = z;
        } else if (C = _ = $[0], n.isBreak(C) || n.onlyZeroWidthSpace(C))
          return {
            container: n.isMedia(z) ? z : C,
            offset: 0
          };
        W = O = 0;
      }
      for (let I = W; I <= O; I++) {
        const V = $[I];
        if (V.length === 0 || V.nodeType === 3 && V.data === void 0) {
          this._nodeRemoveListItem(V);
          continue;
        }
        if (V === C) {
          if (C.nodeType === 1) {
            if (n.isComponent(C)) continue;
            L = n.createTextNode(C.textContent);
          } else
            V === _ ? (L = n.createTextNode(C.substringData(0, w) + _.substringData(A, _.length - A)), y = w) : L = n.createTextNode(C.substringData(0, w));
          if (L.length > 0 ? C.data = L.data : this._nodeRemoveListItem(C), V === _) break;
          continue;
        }
        if (V === _) {
          if (_.nodeType === 1) {
            if (n.isComponent(_)) continue;
            N = n.createTextNode(_.textContent);
          } else
            N = n.createTextNode(_.substringData(A, _.length - A));
          N.length > 0 ? _.data = N.data : this._nodeRemoveListItem(_);
          continue;
        }
        this._nodeRemoveListItem(V);
      }
      const D = n.getParentElement(_, "ul"), P = n.getParentElement(C, "li");
      if (D && P && P.contains(D) ? (p = D.previousSibling, y = p.textContent.length) : (p = _ && _.parentNode ? _ : C && C.parentNode ? C : s.endContainer || s.startContainer, y = !r && !c ? y : c ? p.textContent.length : 0), !n.isWysiwygDiv(p) && p.childNodes.length === 0) {
        const I = n.removeItemAllParents(p, null, null);
        I && (p = I.sc || I.ec || e.element.wysiwyg);
      }
      return !n.getFormatElement(p) && !(C && C.parentNode) && (b ? (p = b, y = 0) : m && (p = m, y = 1)), this.setRange(p, y, p, y), this.history.push(!0), {
        container: p,
        offset: y,
        prevContainer: h
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
        for (let A = 0, z = r.length, L, N, $, W, O, D; A < z; A++)
          if (L = r[A], !!n.isListCell(L) && (N = L.lastElementChild, N && n.isListCell(L.nextElementSibling) && r.indexOf(L.nextElementSibling) > -1 && (W = N.lastElementChild, r.indexOf(W) > -1))) {
            let P = null;
            for (; P = W.lastElementChild; )
              if (n.isList(P))
                if (r.indexOf(P.lastElementChild) > -1)
                  W = P.lastElementChild;
                else
                  continue e;
            $ = N.firstElementChild, O = r.indexOf($), D = r.indexOf(W), r.splice(O, D - O + 1), z = r.length;
            continue;
          }
      let c = r[r.length - 1], h, m, b;
      n.isRangeFormatElement(c) || n.isFormatElement(c) ? h = c : h = n.getRangeFormatElement(c, null) || n.getFormatElement(c, null), n.isCell(h) ? (m = null, b = h) : (m = h.nextSibling, b = h.parentNode);
      let p = n.getElementDepth(h), y = null;
      const C = [], _ = function(A, z, L) {
        let N = null;
        if (A !== z && !n.isTable(z)) {
          if (z && n.getElementDepth(A) === n.getElementDepth(z)) return L;
          N = n.removeItemAllParents(z, null, A);
        }
        return N ? N.ec : L;
      };
      for (let A = 0, z = r.length, L, N, $, W, O, D, P; A < z; A++)
        if (L = r[A], N = L.parentNode, !(!N || s.contains(N)))
          if ($ = n.getElementDepth(L), n.isList(N)) {
            if (y === null && (D ? (y = D, P = !0, D = null) : y = N.cloneNode(!1)), C.push(L), O = r[A + 1], A === z - 1 || O && O.parentNode !== N) {
              O && L.contains(O.parentNode) && (D = O.parentNode.cloneNode(!1));
              let I = N.parentNode, V;
              for (; n.isList(I); )
                V = n.createElement(I.nodeName), V.appendChild(y), y = V, I = I.parentNode;
              const B = this.detachRangeFormatElement(N, C, null, !0, !0);
              p >= $ ? (p = $, b = B.cc, m = _(b, N, B.ec), m && (b = m.parentNode)) : b === B.cc && (m = B.ec), b !== B.cc && (W = _(b, B.cc, W), W !== void 0 ? m = W : m = B.cc);
              for (let U = 0, x = B.removeArray.length; U < x; U++)
                y.appendChild(B.removeArray[U]);
              P || s.appendChild(y), D && B.removeArray[B.removeArray.length - 1].appendChild(D), y = null, P = !1;
            }
          } else
            p >= $ && (p = $, b = N, m = L.nextSibling), s.appendChild(L), b !== N && (W = _(b, N), W !== void 0 && (m = W));
      if (this.effectNode = null, n.mergeSameTags(s, null, !1), n.mergeNestedTags(s, (function(A) {
        return this.isList(A);
      }).bind(n)), m && n.getElementDepth(m) > 0 && (n.isList(m.parentNode) || n.isList(m.parentNode.parentNode))) {
        const A = n.getParentElement(m, (function(L) {
          return this.isRangeFormatElement(L) && !this.isList(L);
        }).bind(n)), z = n.splitElement(m, null, A ? n.getElementDepth(A) + 1 : 0);
        z.parentNode.insertBefore(s, z);
      } else
        b.insertBefore(s, m), _(s, m);
      const w = n.getEdgeChildNodes(s.firstElementChild, s.lastElementChild);
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
    detachRangeFormatElement: function(s, r, c, h, m) {
      const b = this.getRange();
      let p = b.startOffset, y = b.endOffset, C = n.getListChildNodes(s, function(B) {
        return B.parentNode === s;
      }), _ = s.parentNode, w = null, A = null, z = s.cloneNode(!1);
      const L = [], N = n.isList(c);
      let $ = !1, W = !1, O = !1;
      function D(B, U, x, M) {
        if (n.onlyZeroWidthSpace(U) && (U.innerHTML = n.zeroWidthSpace, p = y = 1), U.nodeType === 3)
          return B.insertBefore(U, x), U;
        const j = (O ? U : M).childNodes;
        let q = U.cloneNode(!1), ie = null, X = null;
        for (; j[0]; )
          X = j[0], n._notTextNode(X) && !n.isBreak(X) && !n.isListCell(q) ? (q.childNodes.length > 0 && (ie || (ie = q), B.insertBefore(q, x), q = U.cloneNode(!1)), B.insertBefore(X, x), ie || (ie = X)) : q.appendChild(X);
        if (q.childNodes.length > 0) {
          if (n.isListCell(B) && n.isListCell(q) && n.isList(x))
            if (N) {
              for (ie = x; x; )
                q.appendChild(x), x = x.nextSibling;
              B.parentNode.insertBefore(q, B.nextElementSibling);
            } else {
              const J = M.nextElementSibling, ne = n.detachNestedList(M, !1);
              if (s !== ne || J !== M.nextElementSibling) {
                const he = q.childNodes;
                for (; he[0]; )
                  M.appendChild(he[0]);
                s = ne, W = !0;
              }
            }
          else
            B.insertBefore(q, x);
          ie || (ie = q);
        }
        return ie;
      }
      for (let B = 0, U = C.length, x, M, j; B < U; B++)
        if (x = C[B], !(x.nodeType === 3 && n.isList(z)))
          if (O = !1, h && B === 0 && (!r || r.length === U || r[0] === x ? w = s.previousSibling : w = z), r && (M = r.indexOf(x)), r && M === -1)
            z || (z = s.cloneNode(!1)), z.appendChild(x);
          else {
            if (r && (j = r[M + 1]), z && z.children.length > 0 && (_.insertBefore(z, s), z = null), !N && n.isListCell(x))
              if (j && n.getElementDepth(x) !== n.getElementDepth(j) && (n.isListCell(_) || n.getArrayItem(x.children, n.isList, !1))) {
                const q = x.nextElementSibling, ie = n.detachNestedList(x, !1);
                (s !== ie || q !== x.nextElementSibling) && (s = ie, W = !0);
              } else {
                const q = x;
                x = n.createElement(h ? q.nodeName : n.isList(s.parentNode) || n.isListCell(s.parentNode) ? "LI" : n.isCell(s.parentNode) ? "DIV" : l.defaultTag);
                const ie = n.isListCell(x), X = q.childNodes;
                for (; X[0] && !(n.isList(X[0]) && !ie); )
                  x.appendChild(X[0]);
                n.copyFormatAttributes(x, q), O = !0;
              }
            else
              x = x.cloneNode(!1);
            if (!W && (h ? (L.push(x), n.removeItem(C[B])) : (c ? ($ || (_.insertBefore(c, s), $ = !0), x = D(c, x, null, C[B])) : x = D(_, x, s, C[B]), W || (r ? (A = x, w || (w = x)) : w || (w = A = x))), W)) {
              W = O = !1, C = n.getListChildNodes(s, function(q) {
                return q.parentNode === s;
              }), z = s.cloneNode(!1), _ = s.parentNode, B = -1, U = C.length;
              continue;
            }
          }
      const P = s.parentNode;
      let I = s.nextSibling;
      z && z.children.length > 0 && P.insertBefore(z, I), c ? w = c.previousSibling : w || (w = s.previousSibling), I = s.nextSibling !== z ? s.nextSibling : z ? z.nextSibling : null, s.children.length === 0 || s.textContent.length === 0 ? n.removeItem(s) : n.removeEmptyNode(s, null, !1);
      let V = null;
      if (h)
        V = {
          cc: P,
          sc: w,
          so: p,
          ec: I,
          eo: y,
          removeArray: L
        };
      else {
        w || (w = A), A || (A = w);
        const B = n.getEdgeChildNodes(w, A.parentNode ? w : A);
        V = {
          cc: (B.sc || B.ec).parentNode,
          sc: B.sc,
          so: p,
          ec: B.ec,
          eo: y,
          removeArray: null
        };
      }
      if (this.effectNode = null, m) return V;
      !h && V && (r ? this.setRange(V.sc, p, V.ec, y) : this.setRange(V.sc, 0, V.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(s, r) {
      let c = {}, h = !1, m = !1, b = null, p = null;
      const y = (function(C) {
        return !this.isComponent(C);
      }).bind(n);
      for (let C = 0, _ = s.length, w, A, z, L; C < _; C++) {
        if (z = C === _ - 1, A = n.getRangeFormatElement(s[C], y), L = n.isList(A), !w && L)
          w = A, c = { r: w, f: [n.getParentElement(s[C], "LI")] }, C === 0 && (h = !0);
        else if (w && L)
          if (w !== A) {
            const N = this.detachRangeFormatElement(c.f[0].parentNode, c.f, null, r, !0);
            A = s[C].parentNode, h && (b = N.sc, h = !1), z && (p = N.ec), L ? (w = A, c = { r: w, f: [n.getParentElement(s[C], "LI")] }, z && (m = !0)) : w = null;
          } else
            c.f.push(n.getParentElement(s[C], "LI")), z && (m = !0);
        if (z && n.isList(w)) {
          const N = this.detachRangeFormatElement(c.f[0].parentNode, c.f, null, r, !0);
          (m || _ === 1) && (p = N.ec), h && (b = N.sc || p);
        }
      }
      return {
        sc: b,
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
    nodeChange: function(s, r, c, h) {
      this._resetRangeToTextNode();
      let m = this.getRange_addLine(this.getRange(), null);
      r = r && r.length > 0 ? r : !1, c = c && c.length > 0 ? c : !1;
      const b = !s, p = b && !c && !r;
      let y = m.startContainer, C = m.startOffset, _ = m.endContainer, w = m.endOffset;
      if (p && m.collapsed && n.isFormatElement(y.parentNode) || y === _ && y.nodeType === 1 && n.isNonEditable(y)) {
        const X = y.parentNode;
        if (!n.isListCell(X) || !n.getValues(X.style).some((function(J) {
          return this._listKebab.indexOf(J) > -1;
        }).bind(this))) return;
      }
      if (m.collapsed && !p && y.nodeType === 1 && !n.isBreak(y) && !n.isComponent(y)) {
        let X = null;
        const J = y.childNodes[C];
        J && (J.nextSibling ? X = n.isBreak(J) ? J : J.nextSibling : X = null);
        const ne = n.createTextNode(n.zeroWidthSpace);
        y.insertBefore(ne, X), this.setRange(ne, 1, ne, 1), m = this.getRange(), y = m.startContainer, C = m.startOffset, _ = m.endContainer, w = m.endOffset;
      }
      n.isFormatElement(y) && (y = y.childNodes[C] || y.firstChild, C = 0), n.isFormatElement(_) && (_ = _.childNodes[w] || _.lastChild, w = _.textContent.length), b && (s = n.createElement("DIV"));
      const A = f.RegExp, z = s.nodeName;
      if (!p && y === _ && !c && s) {
        let X = y, J = 0;
        const ne = [], he = s.style;
        for (let ae = 0, be = he.length; ae < be; ae++)
          ne.push(he[ae]);
        const me = s.classList;
        for (let ae = 0, be = me.length; ae < be; ae++)
          ne.push("." + me[ae]);
        if (ne.length > 0) {
          for (; !n.isFormatElement(X) && !n.isWysiwygDiv(X); ) {
            for (let ae = 0; ae < ne.length; ae++)
              if (X.nodeType === 1) {
                const be = ne[ae], Le = /^\./.test(be) ? new A("\\s*" + be.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, Oe = b ? !!X.style[be] : !!X.style[be] && !!s.style[be] && X.style[be] === s.style[be], _e = Le === !1 ? !1 : b ? !!X.className.match(Le) : !!X.className.match(Le) && !!s.className.match(Le);
                (Oe || _e) && J++;
              }
            X = X.parentNode;
          }
          if (J >= ne.length) return;
        }
      }
      let L = {}, N = {}, $, W = "", O = "", D = "";
      if (r) {
        for (let X = 0, J = r.length, ne; X < J; X++)
          ne = r[X], /^\./.test(ne) ? O += (O ? "|" : "\\s*(?:") + ne.replace(/^\./, "") : W += (W ? "|" : "(?:;|^|\\s)(?:") + ne;
        W && (W += ")\\s*:[^;]*\\s*(?:;|$)", W = new A(W, "ig")), O && (O += ")(?=\\s+|$)", O = new A(O, "ig"));
      }
      if (c) {
        D = "^(?:" + c[0];
        for (let X = 1; X < c.length; X++)
          D += "|" + c[X];
        D += ")$", D = new A(D, "i");
      }
      const P = f.Boolean, I = { v: !1 }, V = function(X) {
        const J = X.cloneNode(!1);
        if (J.nodeType === 3 || n.isBreak(J)) return J;
        if (p) return null;
        const ne = !D && b || D && D.test(J.nodeName);
        if (ne && !h)
          return I.v = !0, null;
        const he = J.style.cssText;
        let me = "";
        W && he.length > 0 && (me = he.replace(W, "").trim(), me !== he && (I.v = !0));
        const ae = J.className;
        let be = "";
        return O && ae.length > 0 && (be = ae.replace(O, "").trim(), be !== ae && (I.v = !0)), b && (O || !ae) && (W || !he) && !me && !be && ne ? (I.v = !0, null) : me || be || J.nodeName !== z || P(W) !== P(he) || P(O) !== P(ae) ? (W && he.length > 0 && (J.style.cssText = me), J.style.cssText || J.removeAttribute("style"), O && ae.length > 0 && (J.className = be.trim()), J.className.trim() || J.removeAttribute("class"), !J.style.cssText && !J.className && (J.nodeName === z || ne) ? (I.v = !0, null) : J) : (I.v = !0, null);
      }, B = this.getSelectedElements(null);
      m = this.getRange(), y = m.startContainer, C = m.startOffset, _ = m.endContainer, w = m.endOffset, n.getFormatElement(y, null) || (y = n.getChildElement(B[0], function(X) {
        return X.nodeType === 3;
      }, !1), C = 0), n.getFormatElement(_, null) || (_ = n.getChildElement(B[B.length - 1], function(X) {
        return X.nodeType === 3;
      }, !1), w = _.textContent.length);
      const U = n.getFormatElement(y, null) === n.getFormatElement(_, null), x = B.length - (U ? 0 : 1);
      $ = s.cloneNode(!1);
      const M = p || b && function(X) {
        for (let J = 0, ne = X.length; J < ne; J++)
          if (n._isMaintainedNode(X[J]) || n._isSizeNode(X[J])) return !0;
        return !1;
      }(c), j = b || n._isSizeNode($), q = this._util_getMaintainedNode.bind(n, M, j), ie = this._util_isMaintainedNode.bind(n, M, j);
      if (U) {
        this._resetCommonListCell(B[0], r) && (m = this.setRange(y, C, _, w));
        const X = this._nodeChange_oneLine(B[0], $, V, y, C, _, w, p, b, m.collapsed, I, q, ie);
        L.container = X.startContainer, L.offset = X.startOffset, N.container = X.endContainer, N.offset = X.endOffset, L.container === N.container && n.onlyZeroWidthSpace(L.container) && (L.offset = N.offset = 1), this._setCommonListStyle(X.ancestor, null);
      } else {
        let X = !1;
        x > 0 && this._resetCommonListCell(B[x], r) && (X = !0), this._resetCommonListCell(B[0], r) && (X = !0), X && this.setRange(y, C, _, w), x > 0 && ($ = s.cloneNode(!1), N = this._nodeChange_endLine(B[x], $, V, _, w, p, b, I, q, ie));
        for (let J = x - 1, ne; J > 0; J--)
          this._resetCommonListCell(B[J], r), $ = s.cloneNode(!1), ne = this._nodeChange_middleLine(B[J], $, V, p, b, I, N.container), ne.endContainer && ne.ancestor.contains(ne.endContainer) && (N.ancestor = null, N.container = ne.endContainer), this._setCommonListStyle(ne.ancestor, null);
        $ = s.cloneNode(!1), L = this._nodeChange_startLine(B[0], $, V, y, C, p, b, I, q, ie, N.container), L.endContainer && (N.ancestor = null, N.container = L.endContainer), x <= 0 ? N = L : N.container || (N.ancestor = null, N.container = L.container, N.offset = L.container.textContent.length), this._setCommonListStyle(L.ancestor, null), this._setCommonListStyle(N.ancestor || n.getFormatElement(N.container), null);
      }
      this.controllersOff(), this.setRange(L.container, L.offset, N.container, N.offset), this.history.push(!1);
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
      const c = n.getArrayItem(s.childNodes, function(A) {
        return !n.isBreak(A);
      }, !0), h = s.style, m = [], b = [], p = n.getValues(h);
      for (let A = 0, z = this._listKebab.length; A < z; A++)
        p.indexOf(this._listKebab[A]) > -1 && r.indexOf(this._listKebab[A]) > -1 && (m.push(this._listCamel[A]), b.push(this._listKebab[A]));
      if (!m.length) return;
      const y = n.createElement("SPAN");
      for (let A = 0, z = m.length; A < z; A++)
        y.style[m[A]] = h[b[A]], h.removeProperty(b[A]);
      let C = y.cloneNode(!1), _ = null, w = !1;
      for (let A = 0, z = c.length, L, N; A < z; A++)
        L = c[A], !l._textTagsMap[L.nodeName.toLowerCase()] && (N = n.getValues(L.style), N.length === 0 || m.some(function($) {
          return N.indexOf($) === -1;
        }) && N.some(function($) {
        }) ? (_ = L.nextSibling, C.appendChild(L)) : C.childNodes.length > 0 && (s.insertBefore(C, _), C = y.cloneNode(!1), _ = null, w = !0));
      return C.childNodes.length > 0 && (s.insertBefore(C, _), w = !0), h.length || s.removeAttribute("style"), w;
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
      const h = r.style, m = s.style, b = r.nodeName.toLowerCase();
      let p = !1;
      l._textTagsMap[b] === l._defaultCommand.bold.toLowerCase() && (m.fontWeight = "bold"), l._textTagsMap[b] === l._defaultCommand.italic.toLowerCase() && (m.fontStyle = "italic");
      const y = n.getValues(h);
      if (y.length > 0)
        for (let C = 0, _ = this._listCamel.length; C < _; C++)
          y.indexOf(this._listKebab[C]) > -1 && (m[this._listCamel[C]] = h[this._listCamel[C]], h.removeProperty(this._listKebab[C]), p = !0);
      if (this._setCommonListStyle(s, r), !!p && !h.length) {
        const C = r.childNodes, _ = r.parentNode, w = r.nextSibling;
        for (; C.length > 0; )
          _.insertBefore(C[0], w);
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
    _nodeChange_oneLine: function(s, r, c, h, m, b, p, y, C, _, w, A, z) {
      let L = h.parentNode;
      for (; !L.nextSibling && !L.previousSibling && !n.isFormatElement(L.parentNode) && !n.isWysiwygDiv(L.parentNode) && L.nodeName !== r.nodeName; )
        L = L.parentNode;
      if (!C && L === b.parentNode && L.nodeName === r.nodeName && n.onlyZeroWidthSpace(h.textContent.slice(0, m)) && n.onlyZeroWidthSpace(b.textContent.slice(p))) {
        const _e = L.childNodes;
        let Te = !0;
        for (let Se = 0, tt = _e.length, Re, We, Ie, ye; Se < tt; Se++) {
          if (Re = _e[Se], ye = !n.onlyZeroWidthSpace(Re), Re === h) {
            We = !0;
            continue;
          }
          if (Re === b) {
            Ie = !0;
            continue;
          }
          if (!We && ye || We && Ie && ye) {
            Te = !1;
            break;
          }
        }
        if (Te)
          return n.copyTagAttributes(L, r), {
            ancestor: s,
            startContainer: h,
            startOffset: m,
            endContainer: b,
            endOffset: p
          };
      }
      w.v = !1;
      const N = s, $ = [r], W = s.cloneNode(!1), O = h === b;
      let D = h, P = m, I = b, V = p, B = !1, U = !1, x, M, j, q, ie;
      const X = f.RegExp;
      function J(_e) {
        const Te = new X("(?:;|^|\\s)(?:" + q + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let Se = "";
        return Te && _e.style.cssText.length > 0 && (Se = Te.test(_e.style.cssText)), !Se;
      }
      if (function _e(Te, Se) {
        const tt = Te.childNodes;
        for (let Re = 0, We = tt.length, Ie; Re < We; Re++) {
          let ye = tt[Re];
          if (!ye) continue;
          let Tt = Se, it;
          if (!B && ye === D) {
            let He = W;
            ie = A(ye);
            const Ee = n.createTextNode(D.nodeType === 1 ? "" : D.substringData(0, P)), Fe = n.createTextNode(
              D.nodeType === 1 ? "" : D.substringData(
                P,
                O && V >= P ? V - P : D.data.length - P
              )
            );
            if (ie) {
              const Bt = A(Se);
              if (Bt && Bt.parentNode !== He) {
                let Ge = Bt, Nt = null;
                for (; Ge.parentNode !== He; ) {
                  for (Se = Nt = Ge.parentNode.cloneNode(!1); Ge.childNodes[0]; )
                    Nt.appendChild(Ge.childNodes[0]);
                  Ge.appendChild(Nt), Ge = Ge.parentNode;
                }
                Ge.parentNode.appendChild(Bt);
              }
              ie = ie.cloneNode(!1);
            }
            n.onlyZeroWidthSpace(Ee) || Se.appendChild(Ee);
            const Me = A(Se);
            for (Me && (ie = Me), ie && (He = ie), M = ye, x = [], q = ""; M !== He && M !== N && M !== null; )
              Ie = z(M) ? null : c(M), Ie && M.nodeType === 1 && J(M) && (x.push(Ie), q += M.style.cssText.substr(0, M.style.cssText.indexOf(":")) + "|"), M = M.parentNode;
            const zt = x.pop() || Fe;
            for (j = M = zt; x.length > 0; )
              M = x.pop(), j.appendChild(M), j = M;
            if (r.appendChild(zt), He.appendChild(r), ie && !A(I) && (r = r.cloneNode(!1), W.appendChild(r), $.push(r)), D = Fe, P = 0, B = !0, M !== Fe && M.appendChild(D), !O) continue;
          }
          if (!U && ye === I) {
            ie = A(ye);
            const He = n.createTextNode(I.nodeType === 1 ? "" : I.substringData(V, I.length - V)), Ee = n.createTextNode(O || I.nodeType === 1 ? "" : I.substringData(0, V));
            if (ie ? ie = ie.cloneNode(!1) : z(r.parentNode) && !ie && (r = r.cloneNode(!1), W.appendChild(r), $.push(r)), !n.onlyZeroWidthSpace(He)) {
              M = ye, q = "", x = [];
              const Me = [];
              for (; M !== W && M !== N && M !== null; )
                M.nodeType === 1 && J(M) && (z(M) ? Me.push(M.cloneNode(!1)) : x.push(M.cloneNode(!1)), q += M.style.cssText.substr(0, M.style.cssText.indexOf(":")) + "|"), M = M.parentNode;
              for (x = x.concat(Me), it = j = M = x.pop() || He; x.length > 0; )
                M = x.pop(), j.appendChild(M), j = M;
              W.appendChild(it), M.textContent = He.data;
            }
            if (ie && it) {
              const Me = A(it);
              Me && (ie = Me);
            }
            for (M = ye, x = [], q = ""; M !== W && M !== N && M !== null; )
              Ie = z(M) ? null : c(M), Ie && M.nodeType === 1 && J(M) && (x.push(Ie), q += M.style.cssText.substr(0, M.style.cssText.indexOf(":")) + "|"), M = M.parentNode;
            const Fe = x.pop() || Ee;
            for (j = M = Fe; x.length > 0; )
              M = x.pop(), j.appendChild(M), j = M;
            ie ? (r = r.cloneNode(!1), r.appendChild(Fe), ie.insertBefore(r, ie.firstChild), W.appendChild(ie), $.push(r), ie = null) : r.appendChild(Fe), I = Ee, V = Ee.data.length, U = !0, !y && _ && (r = Ee, Ee.textContent = n.zeroWidthSpace), M !== Ee && M.appendChild(I);
            continue;
          }
          if (B) {
            if (ye.nodeType === 1 && !n.isBreak(ye)) {
              n._isIgnoreNodeChange(ye) ? (W.appendChild(ye.cloneNode(!0)), _ || (r = r.cloneNode(!1), W.appendChild(r), $.push(r))) : _e(ye, ye);
              continue;
            }
            M = ye, x = [], q = "";
            const He = [];
            for (; M.parentNode !== null && M !== N && M !== r; )
              Ie = U ? M.cloneNode(!1) : c(M), M.nodeType === 1 && !n.isBreak(ye) && Ie && J(M) && (z(M) ? ie || He.push(Ie) : x.push(Ie), q += M.style.cssText.substr(0, M.style.cssText.indexOf(":")) + "|"), M = M.parentNode;
            x = x.concat(He);
            const Ee = x.pop() || ye;
            for (j = M = Ee; x.length > 0; )
              M = x.pop(), j.appendChild(M), j = M;
            if (z(r.parentNode) && !z(Ee) && !n.onlyZeroWidthSpace(r) && (r = r.cloneNode(!1), W.appendChild(r), $.push(r)), !U && !ie && z(Ee)) {
              r = r.cloneNode(!1);
              const Fe = Ee.childNodes;
              for (let Me = 0, zt = Fe.length; Me < zt; Me++)
                r.appendChild(Fe[Me]);
              Ee.appendChild(r), W.appendChild(Ee), $.push(r), r.children.length > 0 ? Se = M : Se = r;
            } else Ee === ye ? U ? Se = W : Se = r : U ? (W.appendChild(Ee), Se = M) : (r.appendChild(Ee), Se = M);
            if (ie && ye.nodeType === 3)
              if (A(ye)) {
                const Fe = n.getParentElement(Se, (function(Me) {
                  return this._isMaintainedNode(Me.parentNode) || Me.parentNode === W;
                }).bind(n));
                ie.appendChild(Fe), r = Fe.cloneNode(!1), $.push(r), W.appendChild(r);
              } else
                ie = null;
          }
          it = ye.cloneNode(!1), Se.appendChild(it), ye.nodeType === 1 && !n.isBreak(ye) && (Tt = it), _e(ye, Tt);
        }
      }(s, W), C && !y && !w.v)
        return {
          ancestor: s,
          startContainer: h,
          startOffset: m,
          endContainer: b,
          endOffset: p
        };
      if (y = y && C, y)
        for (let _e = 0; _e < $.length; _e++) {
          let Te = $[_e], Se, tt, Re;
          if (_)
            Se = n.createTextNode(n.zeroWidthSpace), W.replaceChild(Se, Te);
          else {
            const We = Te.childNodes;
            for (tt = We[0]; We[0]; )
              Re = We[0], W.insertBefore(Re, Te);
            n.removeItem(Te);
          }
          _e === 0 && (_ ? D = I = Se : (D = tt, I = Re));
        }
      else {
        if (C)
          for (let _e = 0; _e < $.length; _e++)
            this._stripRemoveNode($[_e]);
        _ && (D = I = r);
      }
      n.removeEmptyNode(W, r, !1), _ && (P = D.textContent.length, V = I.textContent.length);
      const ne = y || I.textContent.length === 0;
      !n.isBreak(I) && I.textContent.length === 0 && (n.removeItem(I), I = D), V = ne ? I.textContent.length : V;
      const he = { s: 0, e: 0 }, me = n.getNodePath(D, W, he), ae = !I.parentNode;
      ae && (I = D);
      const be = { s: 0, e: 0 }, Le = n.getNodePath(I, W, !ae && !ne ? be : null);
      P += he.s, V = _ ? P : ae ? D.textContent.length : ne ? V + he.s : V + be.s;
      const Oe = n.mergeSameTags(W, [me, Le], !0);
      return s.parentNode.replaceChild(W, s), D = n.getNodeFromPath(me, W), I = n.getNodeFromPath(Le, W), {
        ancestor: W,
        startContainer: D,
        startOffset: P + Oe[0],
        endContainer: I,
        endOffset: V + Oe[1]
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
    _nodeChange_startLine: function(s, r, c, h, m, b, p, y, C, _, w) {
      let A = h.parentNode;
      for (; !A.nextSibling && !A.previousSibling && !n.isFormatElement(A.parentNode) && !n.isWysiwygDiv(A.parentNode) && A.nodeName !== r.nodeName; )
        A = A.parentNode;
      if (!p && A.nodeName === r.nodeName && !n.isFormatElement(A) && !A.nextSibling && n.onlyZeroWidthSpace(h.textContent.slice(0, m))) {
        let B = !0, U = h.previousSibling;
        for (; U; ) {
          if (!n.onlyZeroWidthSpace(U)) {
            B = !1;
            break;
          }
          U = U.previousSibling;
        }
        if (B)
          return n.copyTagAttributes(A, r), {
            ancestor: s,
            container: h,
            offset: m
          };
      }
      y.v = !1;
      const z = s, L = [r], N = s.cloneNode(!1);
      let $ = h, W = m, O = !1, D, P, I, V;
      if (function B(U, x) {
        const M = U.childNodes;
        for (let j = 0, q = M.length, ie, X; j < q; j++) {
          const J = M[j];
          if (!J) continue;
          let ne = x;
          if (O && !n.isBreak(J)) {
            if (J.nodeType === 1) {
              if (n._isIgnoreNodeChange(J)) {
                if (r = r.cloneNode(!1), X = J.cloneNode(!0), N.appendChild(X), N.appendChild(r), L.push(r), w && J.contains(w)) {
                  const be = n.getNodePath(w, J);
                  w = n.getNodeFromPath(be, X);
                }
              } else
                B(J, J);
              continue;
            }
            P = J, D = [];
            const he = [];
            for (; P.parentNode !== null && P !== z && P !== r; )
              ie = c(P), P.nodeType === 1 && ie && (_(P) ? V || he.push(ie) : D.push(ie)), P = P.parentNode;
            D = D.concat(he);
            const me = D.length > 0, ae = D.pop() || J;
            for (I = P = ae; D.length > 0; )
              P = D.pop(), I.appendChild(P), I = P;
            if (_(r.parentNode) && !_(ae) && (r = r.cloneNode(!1), N.appendChild(r), L.push(r)), !V && _(ae)) {
              r = r.cloneNode(!1);
              const be = ae.childNodes;
              for (let Le = 0, Oe = be.length; Le < Oe; Le++)
                r.appendChild(be[Le]);
              ae.appendChild(r), N.appendChild(ae), x = _(P) ? r : P, L.push(r);
            } else me ? (r.appendChild(ae), x = P) : x = r;
            if (V && J.nodeType === 3)
              if (C(J)) {
                const be = n.getParentElement(x, (function(Le) {
                  return this._isMaintainedNode(Le.parentNode) || Le.parentNode === N;
                }).bind(n));
                V.appendChild(be), r = be.cloneNode(!1), L.push(r), N.appendChild(r);
              } else
                V = null;
          }
          if (!O && J === $) {
            let he = N;
            V = C(J);
            const me = n.createTextNode($.nodeType === 1 ? "" : $.substringData(0, W)), ae = n.createTextNode($.nodeType === 1 ? "" : $.substringData(W, $.length - W));
            if (V) {
              const Oe = C(x);
              if (Oe && Oe.parentNode !== he) {
                let _e = Oe, Te = null;
                for (; _e.parentNode !== he; ) {
                  for (x = Te = _e.parentNode.cloneNode(!1); _e.childNodes[0]; )
                    Te.appendChild(_e.childNodes[0]);
                  _e.appendChild(Te), _e = _e.parentNode;
                }
                _e.parentNode.appendChild(Oe);
              }
              V = V.cloneNode(!1);
            }
            n.onlyZeroWidthSpace(me) || x.appendChild(me);
            const be = C(x);
            for (be && (V = be), V && (he = V), P = x, D = []; P !== he && P !== null; )
              ie = c(P), P.nodeType === 1 && ie && D.push(ie), P = P.parentNode;
            const Le = D.pop() || x;
            for (I = P = Le; D.length > 0; )
              P = D.pop(), I.appendChild(P), I = P;
            Le !== x ? (r.appendChild(Le), x = P) : x = r, n.isBreak(J) && r.appendChild(J.cloneNode(!1)), he.appendChild(r), $ = ae, W = 0, O = !0, x.appendChild($);
            continue;
          }
          ie = O ? c(J) : J.cloneNode(!1), ie && (x.appendChild(ie), J.nodeType === 1 && !n.isBreak(J) && (ne = ie)), B(J, ne);
        }
      }(s, N), p && !b && !y.v)
        return {
          ancestor: s,
          container: h,
          offset: m,
          endContainer: w
        };
      if (b = b && p, b)
        for (let B = 0; B < L.length; B++) {
          let U = L[B];
          const x = U.childNodes, M = x[0];
          for (; x[0]; )
            N.insertBefore(x[0], U);
          n.removeItem(U), B === 0 && ($ = M);
        }
      else if (p) {
        r = r.firstChild;
        for (let B = 0; B < L.length; B++)
          this._stripRemoveNode(L[B]);
      }
      if (!b && N.childNodes.length === 0)
        s.childNodes ? $ = s.childNodes[0] : ($ = n.createTextNode(n.zeroWidthSpace), s.appendChild($));
      else {
        n.removeEmptyNode(N, r, !1), n.onlyZeroWidthSpace(N.textContent) && ($ = N.firstChild, W = 0);
        const B = { s: 0, e: 0 }, U = n.getNodePath($, N, B);
        W += B.s;
        const x = n.mergeSameTags(N, [U], !0);
        s.parentNode.replaceChild(N, s), $ = n.getNodeFromPath(U, N), W += x[0];
      }
      return {
        ancestor: N,
        container: $,
        offset: W,
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
    _nodeChange_middleLine: function(s, r, c, h, m, b, p) {
      if (!m) {
        let w = null;
        p && s.contains(p) && (w = n.getNodePath(p, s));
        const A = s.cloneNode(!0), z = r.nodeName, L = r.style.cssText, N = r.className;
        let $ = A.childNodes, W = 0, O = $.length;
        for (let D; W < O && (D = $[W], D.nodeType !== 3); W++)
          if (D.nodeName === z)
            D.style.cssText += L, n.addClass(D, N);
          else {
            if (!n.isBreak(D) && n._isIgnoreNodeChange(D))
              continue;
            if (O === 1) {
              $ = D.childNodes, O = $.length, W = -1;
              continue;
            } else
              break;
          }
        if (O > 0 && W === O)
          return s.innerHTML = A.innerHTML, {
            ancestor: s,
            endContainer: w ? n.getNodeFromPath(w, s) : null
          };
      }
      b.v = !1;
      const y = s.cloneNode(!1), C = [r];
      let _ = !0;
      if (function w(A, z) {
        const L = A.childNodes;
        for (let N = 0, $ = L.length, W, O; N < $; N++) {
          let D = L[N];
          if (!D) continue;
          let P = z;
          if (!n.isBreak(D) && n._isIgnoreNodeChange(D)) {
            if (r.childNodes.length > 0 && (y.appendChild(r), r = r.cloneNode(!1)), O = D.cloneNode(!0), y.appendChild(O), y.appendChild(r), C.push(r), z = r, p && D.contains(p)) {
              const I = n.getNodePath(p, D);
              p = n.getNodeFromPath(I, O);
            }
            continue;
          } else
            W = c(D), W && (_ = !1, z.appendChild(W), D.nodeType === 1 && (P = W));
          n.isBreak(D) || w(D, P);
        }
      }(s, r), _ || m && !h && !b.v) return { ancestor: s, endContainer: p };
      if (y.appendChild(r), h && m)
        for (let w = 0; w < C.length; w++) {
          let A = C[w];
          const z = A.childNodes;
          for (; z[0]; )
            y.insertBefore(z[0], A);
          n.removeItem(A);
        }
      else if (m) {
        r = r.firstChild;
        for (let w = 0; w < C.length; w++)
          this._stripRemoveNode(C[w]);
      }
      return n.removeEmptyNode(y, r, !1), n.mergeSameTags(y, null, !0), s.parentNode.replaceChild(y, s), { ancestor: y, endContainer: p };
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
    _nodeChange_endLine: function(s, r, c, h, m, b, p, y, C, _) {
      let w = h.parentNode;
      for (; !w.nextSibling && !w.previousSibling && !n.isFormatElement(w.parentNode) && !n.isWysiwygDiv(w.parentNode) && w.nodeName !== r.nodeName; )
        w = w.parentNode;
      if (!p && w.nodeName === r.nodeName && !n.isFormatElement(w) && !w.previousSibling && n.onlyZeroWidthSpace(h.textContent.slice(m))) {
        let V = !0, B = h.nextSibling;
        for (; B; ) {
          if (!n.onlyZeroWidthSpace(B)) {
            V = !1;
            break;
          }
          B = B.nextSibling;
        }
        if (V)
          return n.copyTagAttributes(w, r), {
            ancestor: s,
            container: h,
            offset: m
          };
      }
      y.v = !1;
      const A = s, z = [r], L = s.cloneNode(!1);
      let N = h, $ = m, W = !1, O, D, P, I;
      if (function V(B, U) {
        const x = B.childNodes;
        for (let M = x.length - 1, j; 0 <= M; M--) {
          const q = x[M];
          if (!q) continue;
          let ie = U;
          if (W && !n.isBreak(q)) {
            if (q.nodeType === 1) {
              if (n._isIgnoreNodeChange(q)) {
                r = r.cloneNode(!1);
                const he = q.cloneNode(!0);
                L.insertBefore(he, U), L.insertBefore(r, he), z.push(r);
              } else
                V(q, q);
              continue;
            }
            D = q, O = [];
            const X = [];
            for (; D.parentNode !== null && D !== A && D !== r; )
              j = c(D), j && D.nodeType === 1 && (_(D) ? I || X.push(j) : O.push(j)), D = D.parentNode;
            O = O.concat(X);
            const J = O.length > 0, ne = O.pop() || q;
            for (P = D = ne; O.length > 0; )
              D = O.pop(), P.appendChild(D), P = D;
            if (_(r.parentNode) && !_(ne) && (r = r.cloneNode(!1), L.insertBefore(r, L.firstChild), z.push(r)), !I && _(ne)) {
              r = r.cloneNode(!1);
              const he = ne.childNodes;
              for (let me = 0, ae = he.length; me < ae; me++)
                r.appendChild(he[me]);
              ne.appendChild(r), L.insertBefore(ne, L.firstChild), z.push(r), r.children.length > 0 ? U = D : U = r;
            } else J ? (r.insertBefore(ne, r.firstChild), U = D) : U = r;
            if (I && q.nodeType === 3)
              if (C(q)) {
                const he = n.getParentElement(U, (function(me) {
                  return this._isMaintainedNode(me.parentNode) || me.parentNode === L;
                }).bind(n));
                I.appendChild(he), r = he.cloneNode(!1), z.push(r), L.insertBefore(r, L.firstChild);
              } else
                I = null;
          }
          if (!W && q === N) {
            I = C(q);
            const X = n.createTextNode(N.nodeType === 1 ? "" : N.substringData($, N.length - $)), J = n.createTextNode(N.nodeType === 1 ? "" : N.substringData(0, $));
            if (I) {
              I = I.cloneNode(!1);
              const he = C(U);
              if (he && he.parentNode !== L) {
                let me = he, ae = null;
                for (; me.parentNode !== L; ) {
                  for (U = ae = me.parentNode.cloneNode(!1); me.childNodes[0]; )
                    ae.appendChild(me.childNodes[0]);
                  me.appendChild(ae), me = me.parentNode;
                }
                me.parentNode.insertBefore(he, me.parentNode.firstChild);
              }
              I = I.cloneNode(!1);
            } else _(r.parentNode) && !I && (r = r.cloneNode(!1), L.appendChild(r), z.push(r));
            for (n.onlyZeroWidthSpace(X) || U.insertBefore(X, U.firstChild), D = U, O = []; D !== L && D !== null; )
              j = _(D) ? null : c(D), j && D.nodeType === 1 && O.push(j), D = D.parentNode;
            const ne = O.pop() || U;
            for (P = D = ne; O.length > 0; )
              D = O.pop(), P.appendChild(D), P = D;
            ne !== U ? (r.insertBefore(ne, r.firstChild), U = D) : U = r, n.isBreak(q) && r.appendChild(q.cloneNode(!1)), I ? (I.insertBefore(r, I.firstChild), L.insertBefore(I, L.firstChild), I = null) : L.insertBefore(r, L.firstChild), N = J, $ = J.data.length, W = !0, U.insertBefore(N, U.firstChild);
            continue;
          }
          j = W ? c(q) : q.cloneNode(!1), j && (U.insertBefore(j, U.firstChild), q.nodeType === 1 && !n.isBreak(q) && (ie = j)), V(q, ie);
        }
      }(s, L), p && !b && !y.v)
        return {
          ancestor: s,
          container: h,
          offset: m
        };
      if (b = b && p, b)
        for (let V = 0; V < z.length; V++) {
          let B = z[V];
          const U = B.childNodes;
          let x = null;
          for (; U[0]; )
            x = U[0], L.insertBefore(x, B);
          n.removeItem(B), V === z.length - 1 && (N = x, $ = x.textContent.length);
        }
      else if (p) {
        r = r.firstChild;
        for (let V = 0; V < z.length; V++)
          this._stripRemoveNode(z[V]);
      }
      if (!b && L.childNodes.length === 0)
        s.childNodes ? N = s.childNodes[0] : (N = n.createTextNode(n.zeroWidthSpace), s.appendChild(N));
      else {
        if (!p && r.textContent.length === 0)
          return n.removeEmptyNode(L, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        n.removeEmptyNode(L, r, !1), n.onlyZeroWidthSpace(L.textContent) ? (N = L.firstChild, $ = N.textContent.length) : n.onlyZeroWidthSpace(N) && (N = r, $ = 1);
        const V = { s: 0, e: 0 }, B = n.getNodePath(N, L, V);
        $ += V.s;
        const U = n.mergeSameTags(L, [B], !0);
        s.parentNode.replaceChild(L, s), N = n.getNodeFromPath(B, L), $ += U[0];
      }
      return {
        ancestor: L,
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
    actionCall: function(s, r, c) {
      if (r) {
        if (/more/i.test(r)) {
          if (c !== this._moreLayerActiveButton) {
            const h = e.element.toolbar.querySelector("." + s);
            h && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = c, h.style.display = "block", v._showToolbarBalloon(), v._showToolbarInline()), n.addClass(c, "on");
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
            let h = n.getChildElement(c.firstChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !1) || c.firstChild, m = n.getChildElement(c.lastChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !0) || c.lastChild;
            if (!h || !m) return;
            if (n.isMedia(h)) {
              const C = this.getFileComponent(h), _ = n.createElement("BR"), w = n.createElement(l.defaultTag);
              w.appendChild(_), h = C ? C.component : h, h.parentNode.insertBefore(w, h), h = _;
            }
            if (n.isMedia(m)) {
              const C = n.createElement("BR"), _ = n.createElement(l.defaultTag);
              _.appendChild(C), c.appendChild(_), m = C;
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
            else if (this._variable.isChanged && typeof k.save == "function")
              k.save();
            else
              throw Error("[SUNEDITOR.core.commandHandler.fail] Please register call back function in creation option. (callBackSave : Function)");
            this._variable.isChanged = !1, e.tool.save && e.tool.save.setAttribute("disabled", !0);
            break;
          default:
            r = l._defaultCommand[r.toLowerCase()] || r, this.commandMap[r] || (this.commandMap[r] = s);
            const b = this._variable.currentNodesMap, p = b.indexOf(r) > -1 ? null : n.createElement(r);
            let y = r;
            /^SUB$/i.test(r) && b.indexOf("SUP") > -1 ? y = "SUP" : /^SUP$/i.test(r) && b.indexOf("SUB") > -1 && (y = "SUB"), this.nodeChange(p, this._commandMapStyles[r] || null, [y], !1), this.focus();
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
      const r = this.getRange(), c = this.getSelectedElements(null), h = [], m = s !== "indent", b = l.rtl ? "marginRight" : "marginLeft";
      let p = r.startContainer, y = r.endContainer, C = r.startOffset, _ = r.endOffset;
      for (let w = 0, A = c.length, z, L; w < A; w++)
        z = c[w], !n.isListCell(z) || !this.plugins.list ? (L = /\d+/.test(z.style[b]) ? n.getNumber(z.style[b], 0) : 0, m ? L -= 25 : L += 25, n.setStyle(z, b, L <= 0 ? "" : L + "px")) : (m || z.previousElementSibling) && h.push(z);
      h.length > 0 && this.plugins.list.editInsideList.call(this, m, h), this.effectNode = null, this.setRange(p, C, y, _), this.history.push(!1);
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
      this.controllersOff(), n.setDisabledButtons(!s, this.codeViewDisabledButtons), s ? (n.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), l.height === "auto" && !l.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(l.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, v._hideToolbar())), this.nativeFocus(), n.removeClass(this._styleCommandMap.codeView, "active"), n.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : l.height === "auto" && !l.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), l.codeMirrorEditor && l.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, v._showToolbarInline())), this._variable._range = null, e.element.code.focus(), n.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && n.setDisabledButtons(!0, this.resizingDisabledButtons), typeof k.toggleCodeView == "function" && k.toggleCodeView(this._variable.isCodeView, this);
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
          for (let b = 0, p = m.length; b < p; b++)
            /^script$/i.test(m[b].tagName) && (r.head.removeChild(m[b]), b--, p--);
        }
        let c = r.head.innerHTML;
        (!r.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !r.head.querySelector("style")) && (c += n._setIframeCssTags(this.options)), this._wd.head.innerHTML = c, this._wd.body.innerHTML = this.convertContentsForEditor(r.body.innerHTML);
        const h = r.body.attributes;
        for (let m = 0, b = h.length; m < b; m++)
          h[m].name !== "contenteditable" && this._wd.body.setAttribute(h[m].name, h[m].value);
        if (!n.hasClass(this._wd.body, "sun-editor-editable")) {
          const m = l._editableClass.split(" ");
          for (let b = 0; b < m.length; b++)
            n.addClass(this._wd.body, l._editableClass[b]);
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
      const r = e.element.topArea, c = e.element.toolbar, h = e.element.editorArea, m = e.element.wysiwygFrame, b = e.element.code, p = this._variable;
      this.controllersOff();
      const y = c.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      p.isFullScreen ? (p.isFullScreen = !1, m.style.cssText = p._wysiwygOriginCssText, b.style.cssText = p._codeOriginCssText, c.style.cssText = "", h.style.cssText = p._editorAreaOriginCssText, r.style.cssText = p._originCssText, d.body.style.overflow = p._bodyOverflow, l.height === "auto" && !l.codeMirrorEditor && v._codeViewAutoHeight(), l.toolbarContainer && l.toolbarContainer.appendChild(c), l.stickyToolbar > -1 && n.removeClass(c, "se-toolbar-sticky"), p._fullScreenAttrs.sticky && !l.toolbarContainer && (p._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", n.addClass(c, "se-toolbar-sticky")), this._isInline = p._fullScreenAttrs.inline, this._isBalloon = p._fullScreenAttrs.balloon, this._isInline && v._showToolbarInline(), l.toolbarContainer && n.removeClass(c, "se-toolbar-balloon"), v.onScroll_window(), s && n.changeElement(s.firstElementChild, g.expansion), e.element.topArea.style.marginTop = "", n.removeClass(this._styleCommandMap.fullScreen, "active")) : (p.isFullScreen = !0, p._fullScreenAttrs.inline = this._isInline, p._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), l.toolbarContainer && e.element.relative.insertBefore(c, h), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.maxWidth = "100%", r.style.height = "100%", r.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (p._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", n.removeClass(c, "se-toolbar-sticky")), p._bodyOverflow = d.body.style.overflow, d.body.style.overflow = "hidden", p._editorAreaOriginCssText = h.style.cssText, p._wysiwygOriginCssText = m.style.cssText, p._codeOriginCssText = b.style.cssText, h.style.cssText = c.style.cssText = "", m.style.cssText = (m.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + l._editorStyles.editor, b.style.cssText = (b.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], c.style.width = m.style.height = b.style.height = "100%", c.style.position = "relative", c.style.display = "block", p.innerHeight_fullScreen = f.innerHeight - c.offsetHeight, h.style.height = p.innerHeight_fullScreen - l.fullScreenOffset + "px", s && n.changeElement(s.firstElementChild, g.reduction), l.iframe && l.height === "auto" && (h.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = l.fullScreenOffset + "px", n.addClass(this._styleCommandMap.fullScreen, "active")), y && k.toolbar.hide(), typeof k.toggleFullScreen == "function" && k.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const s = n.createElement("IFRAME");
      s.style.display = "none", d.body.appendChild(s);
      const r = l.printTemplate ? l.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), c = n.getIframeDocument(s), h = this._wd;
      if (l.iframe) {
        const m = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? n.getAttributesToString(h.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        c.write(
          "<!DOCTYPE html><html><head>" + h.head.innerHTML + "</head><body " + m + ">" + r + "</body></html>"
        );
      } else {
        const m = d.head.getElementsByTagName("link"), b = d.head.getElementsByTagName("style");
        let p = "";
        for (let y = 0, C = m.length; y < C; y++)
          p += m[y].outerHTML;
        for (let y = 0, C = b.length; y < C; y++)
          p += b[y].outerHTML;
        c.write(
          "<!DOCTYPE html><html><head>" + p + '</head><body class="' + (l._printClass !== null ? l._printClass : l._editableClass) + '">' + r + "</body></html>"
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
      const s = l.previewTemplate ? l.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), r = f.open("", "_blank");
      r.mimeType = "text/html";
      const c = this._wd;
      if (l.iframe) {
        const h = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? n.getAttributesToString(c.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        r.document.write(
          "<!DOCTYPE html><html><head>" + c.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + h + ">" + s + "</body></html>"
        );
      } else {
        const h = d.head.getElementsByTagName("link"), m = d.head.getElementsByTagName("style");
        let b = "";
        for (let p = 0, y = h.length; p < y; p++)
          b += h[p].outerHTML;
        for (let p = 0, y = m.length; p < y; p++)
          b += m[p].outerHTML;
        r.document.write(
          '<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><title>' + o.toolbar.preview + "</title>" + b + '</head><body class="' + (l._printClass !== null ? l._printClass : l._editableClass) + '" style="margin:10px auto !important; height:auto !important; outline:1px dashed #ccc;">' + s + "</body></html>"
        );
      }
    },
    /**
     * @description Set direction to "rtl" or "ltr".
     * @param {String} dir "rtl" or "ltr"
     */
    setDir: function(s) {
      const r = s === "rtl", c = this._prevRtl !== r;
      this._prevRtl = l.rtl = r, c && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && n.changeElement(e.tool.indent.firstElementChild, g.indent), e.tool.outdent && n.changeElement(e.tool.outdent.firstElementChild, g.outdent));
      const h = e.element;
      r ? (n.addClass(h.topArea, "se-rtl"), n.addClass(h.wysiwygFrame, "se-rtl")) : (n.removeClass(h.topArea, "se-rtl"), n.removeClass(h.wysiwygFrame, "se-rtl"));
      const m = n.getListChildren(h.wysiwyg, function(p) {
        return n.isFormatElement(p) && (p.style.marginRight || p.style.marginLeft || p.style.textAlign);
      });
      for (let p = 0, y = m.length, C, _, w; p < y; p++)
        C = m[p], w = C.style.marginRight, _ = C.style.marginLeft, (w || _) && (C.style.marginRight = _, C.style.marginLeft = w), w = C.style.textAlign, w === "left" ? C.style.textAlign = "right" : w === "right" && (C.style.textAlign = "left");
      const b = e.tool;
      b.dir && (n.changeTxt(b.dir.querySelector(".se-tooltip-text"), o.toolbar[l.rtl ? "dir_ltr" : "dir_rtl"]), n.changeElement(b.dir.firstElementChild, g[l.rtl ? "dir_ltr" : "dir_rtl"])), b.dir_ltr && (r ? n.removeClass(b.dir_ltr, "active") : n.addClass(b.dir_ltr, "active")), b.dir_rtl && (r ? n.addClass(b.dir_rtl, "active") : n.removeClass(b.dir_rtl, "active"));
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
      if (!l.iframe) return !1;
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
      const h = n.getListChildren(c, function(m) {
        return m.hasAttribute("contenteditable");
      });
      for (let m = 0, b = h.length; m < b; m++)
        h[m].removeAttribute("contenteditable");
      if (l.fullPage && !s) {
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
      const c = l.defaultTag;
      if (s.nodeType === 1) {
        if (this.__disallowedTagNameRegExp.test(s.nodeName)) return "";
        if (/__se__tag/.test(s.className)) return s.outerHTML;
        const h = n.getListChildNodes(s, function(m) {
          return n.isSpanWithoutAttr(m) && !n.getParentElement(m, n.isNotCheckingNode);
        }) || [];
        for (let m = h.length - 1; m >= 0; m--)
          h[m].outerHTML = h[m].innerHTML;
        return !r || n.isFormatElement(s) || n.isRangeFormatElement(s) || n.isComponent(s) || n.isFigures(s) || n.isAnchor(s) && n.isMedia(s.firstElementChild) ? n.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML : "<" + c + ">" + (n.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML) + "</" + c + ">";
      }
      if (s.nodeType === 3) {
        if (!r) return n._HTMLConvertor(s.textContent);
        const h = s.textContent.split(/\n/g);
        let m = "";
        for (let b = 0, p = h.length, y; b < p; b++)
          y = h[b].trim(), y.length > 0 && (m += "<" + c + ">" + n._HTMLConvertor(y) + "</" + c + ">");
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
      return s.replace(this._disallowedTextTagsRegExp, function(c, h, m, b) {
        return h + (typeof r[m] == "string" ? r[m] : m) + (b ? " " + b : "");
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
      const c = this._w.Math, h = r.match(/(\d+(?:\.\d+)?)(.+)/), m = h ? h[1] * 1 : n.fontValueMap[r], b = h ? h[2] : "rem";
      let p = m;
      switch (/em/.test(b) ? p = c.round(m / 0.0625) : b === "pt" ? p = c.round(m * 1.333) : b === "%" && (p = m / 100), s) {
        case "em":
        case "rem":
        case "%":
          return (p * 0.0625).toFixed(2) + s;
        case "pt":
          return c.floor(p / 1.333) + s;
        default:
          return p + s;
      }
    },
    _cleanStyle: function(s, r, c) {
      let h = (s.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(c) && !h && (s.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const m = (s.match(/\ssize="([^"]+)"/i) || [])[1], b = (s.match(/\sface="([^"]+)"/i) || [])[1], p = (s.match(/\scolor="([^"]+)"/i) || [])[1];
        (m || b || p) && (h = 'style="' + (m ? "font-size:" + this.util.getNumber(m / 3.333, 1) + "rem;" : "") + (b ? "font-family:" + b + ";" : "") + (p ? "color:" + p + ";" : "") + '"');
      }
      if (h) {
        r || (r = []);
        const m = h.replace(/&quot;/g, "").match(this._cleanStyleRegExp[c]);
        if (m) {
          const b = [];
          for (let p = 0, y = m.length, C; p < y; p++)
            if (C = m[p].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), C && !/inherit|initial|revert|unset/i.test(C[3])) {
              const _ = n.kebabToCamelCase(C[1].trim()), w = this.wwComputedStyle[_] ? this.wwComputedStyle[_].replace(/"/g, "") : "", A = C[3].trim();
              switch (_) {
                case "fontFamily":
                  if (!l.plugins.font || l.font.indexOf(A) === -1) continue;
                  break;
                case "fontSize":
                  if (!l.plugins.fontSize) continue;
                  this._cleanStyleRegExp.fontSizeUnit.test(C[0]) || (C[0] = C[0].replace((C[0].match(/:\s*([^;]+)/) || [])[1], this._convertFontSize.bind(this, l.fontSizeUnit)));
                  break;
                case "color":
                  if (!l.plugins.fontColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(A)) continue;
                  break;
                case "backgroundColor":
                  if (!l.plugins.hiliteColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(A)) continue;
                  break;
              }
              w !== A && b.push(C[0]);
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
    _cleanTags: function(s, r, c) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(r)) return r;
      let h = null;
      const m = c.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), b = this._attributesTagsBlacklist[m];
      r = r.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, ""), b ? r = r.replace(b, "") : r = r.replace(this._attributesBlacklistRegExp, "");
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
      if (n.isFigures(m)) {
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
      for (let m = 0, b = h.length, p; m < b; m++)
        p = h[m], p.nodeType === 8 ? r += "<!-- " + p.textContent + " -->" : !n.isFormatElement(p) && !n.isRangeFormatElement(p) && !n.isComponent(p) && !/meta/i.test(p.nodeName) ? (c || (c = n.createElement(l.defaultTag)), c.appendChild(p), m--, b--) : (c && (r += c.outerHTML, c = null), r += p.outerHTML);
      return c && (r += c.outerHTML), d.createRange().createContextualFragment(r);
    },
    _convertListCell: function(s) {
      let r = "";
      for (let c = 0, h = s.length, m; c < h; c++)
        m = s[c], m.nodeType === 1 ? n.isList(m) ? r += m.innerHTML : n.isListCell(m) ? r += m.outerHTML : n.isFormatElement(m) ? r += "<li>" + (m.innerHTML.trim() || "<br>") + "</li>" : n.isRangeFormatElement(m) && !n.isTable(m) ? r += this._convertListCell(m) : r += "<li>" + m.outerHTML + "</li>" : r += "<li>" + (m.textContent || "<br>") + "</li>";
      return r;
    },
    _isFormatData: function(s) {
      let r = !1;
      for (let c = 0, h = s.length, m; c < h; c++)
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
      if (!l.strictMode) return n.htmlCompress(s);
      s = this._deleteDisallowedTags(this._parser.parseFromString(n.htmlCompress(s), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0)).replace(/<br\/?>$/i, "");
      const h = d.createRange().createContextualFragment(s);
      try {
        n._consistencyCheckOfHTML(h, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, l.strictHTMLValidation);
      } catch (y) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + y);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const y = h.querySelectorAll(this.managedTagsInfo.query);
        for (let C = 0, _ = y.length, w, A; C < _; C++) {
          A = [].slice.call(y[C].classList);
          for (let z = 0, L = A.length; z < L; z++)
            if (w = this.managedTagsInfo.map[A[z]], w) {
              w(y[C]);
              break;
            }
        }
      }
      let m = h.childNodes, b = "";
      const p = this._isFormatData(m);
      p && (m = this._editFormat(h).childNodes);
      for (let y = 0, C = m.length, _; y < C; y++) {
        if (_ = m[y], this.__allowedScriptRegExp.test(_.nodeName)) {
          b += _.outerHTML;
          continue;
        }
        b += this._makeLine(_, p);
      }
      return b = n.htmlRemoveWhiteSpace(b), b ? (r && (b = b.replace(typeof r == "string" ? n.createTagsWhitelist(r) : r, "")), c && (b = b.replace(typeof c == "string" ? n.createTagsBlacklist(c) : c, ""))) : b = s, this._tagConvertor(b);
    },
    /**
     * @description Converts contents into a format that can be placed in an editor
     * @param {String} contents contents
     * @returns {String}
     */
    convertContentsForEditor: function(s) {
      if (!l.strictMode) return n.htmlCompress(s);
      s = this._deleteDisallowedTags(this._parser.parseFromString(n.htmlCompress(s), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0));
      const r = d.createRange().createContextualFragment(s);
      try {
        n._consistencyCheckOfHTML(r, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, l.strictHTMLValidation);
      } catch (b) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + b);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const b = r.querySelectorAll(this.managedTagsInfo.query);
        for (let p = 0, y = b.length, C, _; p < y; p++) {
          _ = [].slice.call(b[p].classList);
          for (let w = 0, A = _.length; w < A; w++)
            if (C = this.managedTagsInfo.map[_[w]], C) {
              C(b[p]);
              break;
            }
        }
      }
      const c = r.childNodes;
      let h = "", m = null;
      for (let b = 0, p; b < c.length; b++) {
        if (p = c[b], this.__allowedScriptRegExp.test(p.nodeName)) {
          h += p.outerHTML;
          continue;
        }
        if (!n.isFormatElement(p) && !n.isRangeFormatElement(p) && !n.isComponent(p) && !n.isFigures(p) && p.nodeType !== 8 && !/__se__tag/.test(p.className)) {
          if (m || (m = n.createElement(l.defaultTag)), m.appendChild(p), b--, c[b + 1] && !n.isFormatElement(c[b + 1]))
            continue;
          p = m, m = null;
        }
        m && (h += this._makeLine(m, !0), m = null), h += this._makeLine(p, !0);
      }
      return m && (h += this._makeLine(m, !0)), h.length === 0 ? "<" + l.defaultTag + "><br></" + l.defaultTag + ">" : (h = n.htmlRemoveWhiteSpace(h), this._tagConvertor(h));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(s, r) {
      let c = "";
      const h = f.RegExp, m = new h("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), b = typeof s == "string" ? d.createRange().createContextualFragment(s) : s, p = (function(_) {
        return this.isFormatElement(_) || this.isComponent(_);
      }).bind(n), y = r ? "" : `
`;
      let C = r ? 0 : this._variable.codeIndent * 1;
      return C = C > 0 ? new f.Array(C + 1).join(" ") : "", function _(w, A) {
        const z = w.childNodes, L = m.test(w.nodeName), N = L ? A : "";
        for (let $ = 0, W = z.length, O, D, P, I, V, B; $ < W; $++) {
          if (O = z[$], I = m.test(O.nodeName), D = I ? y : "", P = p(O) && !L && !/^(TH|TD)$/i.test(w.nodeName) ? y : "", O.nodeType === 8) {
            c += `
<!-- ` + O.textContent.trim() + " -->" + D;
            continue;
          }
          if (O.nodeType === 3) {
            n.isList(O.parentElement) || (c += n._HTMLConvertor(/^\n+$/.test(O.data) ? "" : O.data));
            continue;
          }
          if (O.childNodes.length === 0) {
            c += (/^HR$/i.test(O.nodeName) ? y : "") + (/^PRE$/i.test(O.parentElement.nodeName) && /^BR$/i.test(O.nodeName) ? "" : N) + O.outerHTML + D;
            continue;
          }
          O.outerHTML ? (V = O.nodeName.toLowerCase(), B = N || I ? A : "", c += (P || (L ? "" : D)) + B + O.outerHTML.match(h("<" + V + "[^>]*>", "i"))[0] + D, _(O, A + C), c += (/\n$/.test(c) ? B : "") + "</" + V + ">" + (P || D || L || /^(TH|TD)$/i.test(O.nodeName) ? y : "")) : c += new f.XMLSerializer().serializeToString(O);
        }
      }(b, ""), c.trim() + y;
    },
    /**
     * @description Add an event to document.
     * When created as an Iframe, the same event is added to the document in the Iframe.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     * @param {Boolean} useCapture Use event capture
     */
    addDocEvent: function(s, r, c) {
      d.addEventListener(s, r, c), l.iframe && this._wd.addEventListener(s, r);
    },
    /**
     * @description Remove events from document.
     * When created as an Iframe, the event of the document inside the Iframe is also removed.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     */
    removeDocEvent: function(s, r) {
      d.removeEventListener(s, r), l.iframe && this._wd.removeEventListener(s, r);
    },
    /**
     * @description The current number of characters is counted and displayed.
     * @param {String} inputText Text added.
     * @returns {Boolean}
     * @private
     */
    _charCount: function(s) {
      const r = l.maxCharCount, c = l.charCounterType;
      let h = 0;
      if (s && (h = this.getCharLength(s, c)), this._setCharCount(), r > 0) {
        let m = !1;
        const b = k.getCharCount(c);
        if (b > r) {
          if (m = !0, h > 0) {
            this._editorRange();
            const p = this.getRange(), y = p.endOffset - 1, C = this.getSelectionNode().textContent, _ = p.endOffset - (b - r);
            this.getSelectionNode().textContent = C.slice(0, _ < 0 ? 0 : _) + C.slice(p.endOffset, C.length), this.setRange(p.endContainer, y, p.endContainer, y);
          }
        } else b + h > r && (m = !0);
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
        const c = r || l.charCounterType, h = this.getCharLength(typeof s == "string" ? s : this._charTypeHTML && s.nodeType === 1 ? s.outerHTML : s.textContent, c);
        if (h > 0 && h + k.getCharCount(c) > l.maxCharCount)
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
        let c = "default";
        for (let h = 1, m = s.length; h < m; h++)
          if (r < s[h]) {
            c = s[h] + "";
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
      }).bind(e.element.charCounter, k, l), 0);
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
      const r = this.commandMap, c = this.activePlugins;
      for (let h in r)
        s.indexOf(h) > -1 || !n.hasOwn(r, h) || (c.indexOf(h) > -1 ? i[h].active.call(this, null) : r.OUTDENT && /^OUTDENT$/i.test(h) ? n.isImportantDisabled(r.OUTDENT) || r.OUTDENT.setAttribute("disabled", !0) : r.INDENT && /^INDENT$/i.test(h) ? n.isImportantDisabled(r.INDENT) || r.INDENT.removeAttribute("disabled") : n.removeClass(r[h], "active"));
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(s, r) {
      const c = f.RegExp;
      this._ww = l.iframe ? e.element.wysiwygFrame.contentWindow : f, this._wd = d, this._charTypeHTML = l.charCounterType === "byte-html", this.wwComputedStyle = f.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = n.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + n.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(I) {
        return this.test(I) ? I : "";
      }).bind(l.allowedClassNames);
      const h = l.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new c("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new c("<(" + h + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + h + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new c("^(" + h + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new c("^" + (l.__allowedScriptTag ? "script" : "") + "$", "i"), !l.iframe && typeof f.ShadowRoot == "function") {
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
      const m = f.Object.keys(l._textTagsMap), b = l.addTagsWhitelist ? l.addTagsWhitelist.split("|").filter(function(I) {
        return /b|i|ins|s|strike/i.test(I);
      }) : [];
      for (let I = 0; I < b.length; I++)
        m.splice(m.indexOf(b[I].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = m.length === 0 ? null : new c("(<\\/?)(" + m.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const p = function(I, V) {
        return I ? I === "*" ? "[a-z-]+" : V ? I + "|" + V : I : "^";
      }, _ = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", w = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = l._editorTagsWhitelist.indexOf("//") > -1 || l._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new c("^(" + p(l._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new c("^(" + (l.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = n.createTagsWhitelist(p(l._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = n.createTagsBlacklist(l.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = n.createTagsWhitelist(p(l.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = n.createTagsBlacklist(l.pasteTagsBlacklist);
      const A = '\\s*=\\s*(")[^"]*\\1', z = l.attributesWhitelist;
      let L = {}, N = "";
      if (z)
        for (let I in z)
          !n.hasOwn(z, I) || /^on[a-z]+$/i.test(z[I]) || (I === "all" ? N = p(z[I], _) : L[I] = new c("\\s(?:" + p(z[I], "") + ")" + A, "ig"));
      this._attributesWhitelistRegExp = new c("\\s(?:" + (N || _ + "|" + w) + ")" + A, "ig"), this._attributesWhitelistRegExp_all_data = new c("\\s(?:" + ((N || _) + "|data-[a-z0-9\\-]+") + ")" + A, "ig"), this._attributesTagsWhitelist = L;
      const $ = l.attributesBlacklist;
      if (L = {}, N = "", $)
        for (let I in $)
          n.hasOwn($, I) && (I === "all" ? N = p($[I], "") : L[I] = new c("\\s(?:" + p($[I], "") + ")" + A, "ig"));
      this._attributesBlacklistRegExp = new c("\\s(?:" + (N || "^") + ")" + A, "ig"), this._attributesTagsBlacklist = L, this._isInline = /inline/i.test(l.mode), this._isBalloon = /balloon|balloon-always/i.test(l.mode), this._isBalloonAlways = /balloon-always/i.test(l.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const W = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let O = [], D, P;
      for (let I in i)
        if (n.hasOwn(i, I)) {
          if (D = i[I], P = t[I], (D.active || D.action) && P && this.callPlugin(I, null, P), typeof D.checkFileInfo == "function" && typeof D.resetFileInfo == "function" && (this.callPlugin(I, null, P), this._fileInfoPluginsCheck.push(D.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(D.resetFileInfo.bind(this))), f.Array.isArray(D.fileTags)) {
            const V = D.fileTags;
            this.callPlugin(I, null, P), this._fileManager.tags = this._fileManager.tags.concat(V), O.push(I);
            for (let B = 0, U = V.length; B < U; B++)
              this._fileManager.pluginMap[V[B].toLowerCase()] = I;
          }
          if (D.managedTags) {
            const V = D.managedTags();
            W.push("." + V.className), this.managedTagsInfo.map[V.className] = V.method.bind(this);
          }
        }
      this.managedTagsInfo.query = W.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new c("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new c("^(" + (O.length === 0 ? "^" : O.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = or(this, this._onChange_historyStack.bind(this)), this.addModule([dn]), l.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, l._editorStyles.editor && (e.element.wysiwyg.style.cssText = l._editorStyles.editor), l.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(s, r);
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
      const r = this.getRange(), c = r.commonAncestorContainer, h = r.startContainer, m = n.getRangeFormatElement(c, null);
      let b, p, y;
      const C = n.getParentElement(c, n.isComponent);
      if (!(C && !n.isTable(C))) {
        if (c.nodeType === 1 && c.getAttribute("data-se-embed") === "true") {
          let _ = c.nextElementSibling;
          n.isFormatElement(_) || (_ = this.appendFormatTag(c, l.defaultTag)), this.setRange(_.firstChild, 0, _.firstChild, 0);
          return;
        }
        if (!((n.isRangeFormatElement(h) || n.isWysiwygDiv(h)) && (n.isComponent(h.children[r.startOffset]) || n.isComponent(h.children[r.startOffset - 1])))) {
          if (n.getParentElement(c, n.isNotCheckingNode)) return null;
          if (m) {
            y = n.createElement(s || l.defaultTag), y.innerHTML = m.innerHTML, y.childNodes.length === 0 && (y.innerHTML = n.zeroWidthSpace), m.innerHTML = y.outerHTML, y = m.firstChild, b = n.getEdgeChildNodes(y, null).sc, b || (b = n.createTextNode(n.zeroWidthSpace), y.insertBefore(b, y.firstChild)), p = b.textContent.length, this.setRange(b, p, b, p);
            return;
          }
          if (n.isRangeFormatElement(c) && c.childNodes.length <= 1) {
            let _ = null;
            c.childNodes.length === 1 && n.isBreak(c.firstChild) ? _ = c.firstChild : (_ = n.createTextNode(n.zeroWidthSpace), c.appendChild(_)), this.setRange(_, 1, _, 1);
            return;
          }
          try {
            if (c.nodeType === 3 && (y = n.createElement(s || l.defaultTag), c.parentNode.insertBefore(y, c), y.appendChild(c)), n.isBreak(y.nextSibling) && n.removeItem(y.nextSibling), n.isBreak(y.previousSibling) && n.removeItem(y.previousSibling), n.isBreak(b)) {
              const _ = n.createTextNode(n.zeroWidthSpace);
              b.parentNode.insertBefore(_, b), b = _;
            }
          } catch {
            this.execCommand("formatBlock", !1, s || l.defaultTag), this.removeRange(), this._editorRange(), this.effectNode = null;
            return;
          }
          if (y && (n.isBreak(y.nextSibling) && n.removeItem(y.nextSibling), n.isBreak(y.previousSibling) && n.removeItem(y.previousSibling), n.isBreak(b))) {
            const _ = n.createTextNode(n.zeroWidthSpace);
            b.parentNode.insertBefore(_, b), b = _;
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
      this.context = e = qi(s.originElement, this._getConstructed(s), l), this._componentsInfoReset = !0, this._editorInit(!0, r);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(s, r) {
      this._init(s, r), v._addEvent(), this._setCharCount(), v._offStickyToolbar(), v.onResize_window(), e.element.toolbar.style.visibility = "";
      const c = l.frameAttrbutes;
      for (let h in c)
        e.element.wysiwyg.setAttribute(h, c[h]);
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
      let c = null;
      const h = v._keyCodeShortcut[s];
      switch (h) {
        case "A":
          c = "selectAll";
          break;
        case "B":
          l.shortcutsDisable.indexOf("bold") === -1 && (c = "bold");
          break;
        case "S":
          r && l.shortcutsDisable.indexOf("strike") === -1 ? c = "strike" : !r && l.shortcutsDisable.indexOf("save") === -1 && (c = "save");
          break;
        case "U":
          l.shortcutsDisable.indexOf("underline") === -1 && (c = "underline");
          break;
        case "I":
          l.shortcutsDisable.indexOf("italic") === -1 && (c = "italic");
          break;
        case "Z":
          l.shortcutsDisable.indexOf("undo") === -1 && (r ? c = "redo" : c = "undo");
          break;
        case "Y":
          l.shortcutsDisable.indexOf("undo") === -1 && (c = "redo");
          break;
        case "[":
          l.shortcutsDisable.indexOf("indent") === -1 && (c = l.rtl ? "indent" : "outdent");
          break;
        case "]":
          l.shortcutsDisable.indexOf("indent") === -1 && (c = l.rtl ? "outdent" : "indent");
          break;
      }
      return c ? (u.commandHandler(u.commandMap[c], c), !0) : !!h;
    },
    _applyTagEffects: function() {
      if (n.hasClass(e.element.wysiwyg, "se-read-only"))
        return !1;
      let s = u.getSelectionNode();
      if (s === u.effectNode) return;
      u.effectNode = s;
      const r = l.rtl ? "marginRight" : "marginLeft", c = u.commandMap, h = v._onButtonsCheck, m = [], b = [], p = u.activePlugins, y = p.length;
      let C = "";
      for (; s.firstChild; )
        s = s.firstChild;
      for (let _ = s; !n.isWysiwygDiv(_) && _; _ = _.parentNode)
        if (!(_.nodeType !== 1 || n.isBreak(_))) {
          if (C = _.nodeName.toUpperCase(), b.push(C), !u.isReadOnly)
            for (let w = 0, A; w < y; w++)
              A = p[w], m.indexOf(A) === -1 && i[A].active.call(u, _) && m.push(A);
          if (n.isFormatElement(_)) {
            m.indexOf("OUTDENT") === -1 && c.OUTDENT && !n.isImportantDisabled(c.OUTDENT) && (n.isListCell(_) || _.style[r] && n.getNumber(_.style[r], 0) > 0) && (m.push("OUTDENT"), c.OUTDENT.removeAttribute("disabled")), m.indexOf("INDENT") === -1 && c.INDENT && !n.isImportantDisabled(c.INDENT) && (m.push("INDENT"), n.isListCell(_) && !_.previousElementSibling ? c.INDENT.setAttribute("disabled", !0) : c.INDENT.removeAttribute("disabled"));
            continue;
          }
          h && h.test(C) && (m.push(C), n.addClass(c[C], "active"));
        }
      u._setKeyEffect(m), u._variable.currentNodes = b.reverse(), u._variable.currentNodesMap = m, l.showPathLabel && (e.element.navigation.textContent = u._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(s) {
      let r = s.target;
      if (u._bindControllersOff && s.stopPropagation(), /^(input|textarea|select|option)$/i.test(r.nodeName) ? u._antiBlur = !1 : s.preventDefault(), n.getParentElement(r, ".se-submenu"))
        s.stopPropagation(), u._notHideToolbar = !0;
      else {
        let c = r.getAttribute("data-command"), h = r.className;
        for (; !c && !/se-menu-list/.test(h) && !/sun-editor-common/.test(h); )
          r = r.parentNode, c = r.getAttribute("data-command"), h = r.className;
        (c === u._submenuName || c === u._containerName) && s.stopPropagation();
      }
    },
    addGlobalEvent: function(s, r, c) {
      return l.iframe && u._ww.addEventListener(s, r, c), u._w.addEventListener(s, r, c), {
        type: s,
        listener: r,
        useCapture: c
      };
    },
    removeGlobalEvent: function(s, r, c) {
      s && (typeof s == "object" && (r = s.listener, c = s.useCapture, s = s.type), l.iframe && u._ww.removeEventListener(s, r, c), u._w.removeEventListener(s, r, c));
    },
    onClick_toolbar: function(s) {
      let r = s.target, c = r.getAttribute("data-display"), h = r.getAttribute("data-command"), m = r.className;
      for (u.controllersOff(); r.parentNode && !h && !/se-menu-list/.test(m) && !/se-toolbar/.test(m); )
        r = r.parentNode, h = r.getAttribute("data-command"), c = r.getAttribute("data-display"), m = r.className;
      !h && !c || r.disabled || u.actionCall(h, c, r);
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
      const h = n.getParentElement(r, "FIGCAPTION");
      if (h && n.isNonEditable(h) && (s.preventDefault(), h.focus(), u._isInline && !u._inlineToolbarAttr.isShow)) {
        v._showToolbarInline();
        const _ = function() {
          v._hideToolbar(), h.removeEventListener("blur", _);
        };
        h.addEventListener("blur", _);
      }
      if (u._editorRange(), s.detail === 3) {
        let _ = u.getRange();
        n.isFormatElement(_.endContainer) && _.endOffset === 0 && (_ = u.setRange(_.startContainer, _.startOffset, _.startContainer, _.startContainer.length), u._rangeInfo(_, u.getSelection()));
      }
      const m = u.getSelectionNode(), b = n.getFormatElement(m, null), p = n.getRangeFormatElement(m, null);
      let y = m;
      for (; y && y.firstChild; ) y = y.firstChild;
      const C = u.getFileComponent(y);
      if (C) {
        const _ = u.getRange();
        !p && _.startContainer === _.endContainer && u.selectComponent(C.target, C.pluginName);
      } else u.currentFileComponentInfo && u.controllersOff();
      if (!b && !n.isNonEditable(r) && !n.isList(p)) {
        const _ = u.getRange();
        if (n.getFormatElement(_.startContainer) === n.getFormatElement(_.endContainer))
          if (n.isList(p)) {
            s.preventDefault();
            const w = n.createElement("LI"), A = m.nextElementSibling;
            w.appendChild(m), p.insertBefore(w, A), u.focus();
          } else !n.isWysiwygDiv(m) && !n.isComponent(m) && (!n.isTable(m) || n.isCell(m)) && u._setDefaultFormat(n.isRangeFormatElement(p) ? "DIV" : l.defaultTag) !== null ? (s.preventDefault(), u.focus()) : v._applyTagEffects();
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
      const r = s || u.getRange(), c = e.element.toolbar, h = e.element.topArea, m = u.getSelection();
      let b;
      if (u._isBalloonAlways && r.collapsed)
        b = !0;
      else if (m.focusNode === m.anchorNode)
        b = m.focusOffset < m.anchorOffset;
      else {
        const D = n.getListChildNodes(r.commonAncestorContainer, null);
        b = n.getArrayIndex(D, m.focusNode) < n.getArrayIndex(D, m.anchorNode);
      }
      let p = r.getClientRects();
      p = p[b ? 0 : p.length - 1];
      const y = u.getGlobalScrollOffset();
      let C = y.left, _ = y.top;
      const w = h.offsetWidth, A = v._getEditorOffsets(null), z = A.top, L = A.left;
      if (c.style.top = "-10000px", c.style.visibility = "hidden", c.style.display = "block", !p) {
        const D = u.getSelectionNode();
        if (n.isFormatElement(D)) {
          const P = n.createTextNode(n.zeroWidthSpace);
          u.insertNode(P, null, !1), u.setRange(P, 1, P, 1), u._editorRange(), p = u.getRange().getClientRects(), p = p[b ? 0 : p.length - 1];
        }
        if (!p) {
          const P = n.getOffset(D, e.element.wysiwygFrame);
          p = {
            left: P.left,
            top: P.top,
            right: P.left,
            bottom: P.top + D.offsetHeight,
            noText: !0
          }, C = 0, _ = 0;
        }
        b = !0;
      }
      const N = f.Math.round(e.element._arrow.offsetWidth / 2), $ = c.offsetWidth, W = c.offsetHeight, O = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (O && (p = {
        left: p.left + O.left,
        top: p.top + O.top,
        right: p.right + O.right - O.width,
        bottom: p.bottom + O.bottom - O.height
      }), v._setToolbarOffset(b, p, c, L, w, C, _, z, N), ($ !== c.offsetWidth || W !== c.offsetHeight) && v._setToolbarOffset(b, p, c, L, w, C, _, z, N), l.toolbarContainer) {
        const D = h.parentElement;
        let P = l.toolbarContainer, I = P.offsetLeft, V = P.offsetTop;
        for (; !P.parentElement.contains(D) || !/^(BODY|HTML)$/i.test(P.parentElement.nodeName); )
          P = P.offsetParent, I += P.offsetLeft, V += P.offsetTop;
        c.style.left = c.offsetLeft - I + h.offsetLeft + "px", c.style.top = c.offsetTop - V + h.offsetTop + "px";
      }
      c.style.visibility = "";
    },
    _setToolbarOffset: function(s, r, c, h, m, b, p, y, C) {
      const w = c.offsetWidth, A = r.noText && !s ? 0 : c.offsetHeight, z = (s ? r.left : r.right) - h - w / 2 + b, L = z + w - m;
      let N = (s ? r.top - A - C : r.bottom + C) - (r.noText ? 0 : y) + p, $ = z < 0 ? 1 : L < 0 ? z : z - L - 1 - 1, W = !1;
      const O = N + (s ? v._getEditorOffsets(null).top : c.offsetHeight - e.element.wysiwyg.offsetHeight);
      !s && O > 0 && v._getPageBottomSpace() < O ? (s = !0, W = !0) : s && d.documentElement.offsetTop > O && (s = !1, W = !0), W && (N = (s ? r.top - A - C : r.bottom + C) - (r.noText ? 0 : y) + p), c.style.left = f.Math.floor($) + "px", c.style.top = f.Math.floor(N) + "px", s ? (n.removeClass(e.element._arrow, "se-arrow-up"), n.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = A + "px") : (n.removeClass(e.element._arrow, "se-arrow-down"), n.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -C + "px");
      const D = f.Math.floor(w / 2 + (z - $));
      e.element._arrow.style.left = (D + C > c.offsetWidth ? c.offsetWidth - C : D < C ? C : D) + "px";
    },
    _showToolbarInline: function() {
      if (!u._isInline) return;
      const s = e.element.toolbar;
      l.toolbarContainer ? s.style.position = "relative" : s.style.position = "absolute", s.style.visibility = "hidden", s.style.display = "block", u._inlineToolbarAttr.width = s.style.width = l.toolbarWidth, u._inlineToolbarAttr.top = s.style.top = (l.toolbarContainer ? 0 : -1 - s.offsetHeight) + "px", typeof k.showInline == "function" && k.showInline(s, e, u), v.onScroll_window(), u._inlineToolbarAttr.isShow = !0, s.style.visibility = "";
    },
    _hideToolbar: function() {
      !u._notHideToolbar && !u._variable.isFullScreen && (e.element.toolbar.style.display = "none", u._inlineToolbarAttr.isShow = !1);
    },
    onInput_wysiwyg: function(s) {
      if (/AUDIO/.test(s.target.nodeName)) return !1;
      if (u.isReadOnly || u.isDisabled)
        return s.preventDefault(), s.stopPropagation(), u.history.go(u.history.getCurrentIndex()), !1;
      const r = u.getRange(), c = u.getSelectionNode(), h = n.getFormatElement(c, null);
      if (!h && r.collapsed && !n.isComponent(c) && !n.isList(c)) {
        const b = n.getRangeFormatElement(h, null);
        u._setDefaultFormat(n.isRangeFormatElement(b) ? "DIV" : l.defaultTag);
      }
      u._editorRange();
      const m = (s.data === null ? "" : s.data === void 0 ? " " : s.data) || "";
      if (!u._charCount(m))
        return s.preventDefault(), s.stopPropagation(), !1;
      typeof k.onInput == "function" && k.onInput(s, u) === !1 || u.history.push(!0);
    },
    _isUneditableNode: function(s, r) {
      const c = r ? s.startContainer : s.endContainer, h = r ? s.startOffset : s.endOffset, m = r ? "previousSibling" : "nextSibling", b = c.nodeType === 1;
      let p;
      return b ? (p = v._isUneditableNode_getSibling(c.childNodes[h], m, c), p && p.nodeType === 1 && p.getAttribute("contenteditable") === "false") : (p = v._isUneditableNode_getSibling(c, m, c), u.isEdgePoint(c, h, r ? "start" : "end") && p && p.nodeType === 1 && p.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(s, r, c) {
      if (!s) return null;
      let h = s[r];
      if (!h)
        if (h = n.getFormatElement(c), h = h ? h[r] : null, h && !n.isComponent(h)) h = r === "previousSibling" ? h.firstChild : h.lastChild;
        else return null;
      return h;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(s) {
      let r = u.getSelectionNode();
      if (n.isInputElement(r)) return;
      const c = s.keyCode, h = s.shiftKey, m = s.ctrlKey || s.metaKey || c === 91 || c === 92 || c === 224, b = s.altKey;
      if (v._IEisComposing = c === 229, !m && u.isReadOnly && !v._cursorMoveKeyCode.test(c))
        return s.preventDefault(), !1;
      if (u.submenuOff(), u._isBalloon && v._hideToolbar(), typeof k.onKeyDown == "function" && k.onKeyDown(s, u) === !1) return;
      if (m && v._shortcutCommand(c, h))
        return v._onShortcutKey = !0, s.preventDefault(), s.stopPropagation(), !1;
      v._onShortcutKey && (v._onShortcutKey = !1), c === 13 && n.isFormatElement(u.getRange().startContainer) && (u._resetRangeToTextNode(), r = u.getSelectionNode());
      const p = u.getRange(), y = !p.collapsed || p.startContainer !== p.endContainer, C = u._fileManager.pluginRegExp.test(u.currentControllerName) ? u.currentControllerName : "";
      let _ = n.getFormatElement(r, null) || r, w = n.getRangeFormatElement(_, null);
      if (!(/37|38|39|40/.test(s.keyCode) && v._onKeyDown_wysiwyg_arrowKey(s) === !1)) {
        switch (c) {
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
            if (!y && !_.previousElementSibling && p.startOffset === 0 && !r.previousSibling && !n.isListCell(_) && n.isFormatElement(_) && (!n.isFreeFormatElement(_) || n.isClosureFreeFormatElement(_))) {
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
            const z = p.startContainer;
            if (_ && !_.previousElementSibling && p.startOffset === 0 && z.nodeType === 3 && !n.isFormatElement(z.parentNode)) {
              let B = z.parentNode.previousSibling;
              const U = z.parentNode.nextSibling;
              B || (U ? B = U : (B = n.createElement("BR"), _.appendChild(B)));
              let x = z;
              for (; _.contains(x) && !x.previousSibling; )
                x = x.parentNode;
              if (!_.contains(x)) {
                z.textContent = "", n.removeItemAllParents(z, null, _);
                break;
              }
            }
            if (v._isUneditableNode(p, !0)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            !y && u._isEdgeFormat(p.startContainer, p.startOffset, "start") && n.isFormatElement(_.previousElementSibling) && (u._formatAttrsTemp = _.previousElementSibling.attributes);
            const L = p.commonAncestorContainer;
            if (_ = n.getFormatElement(p.startContainer, null), w = n.getRangeFormatElement(_, null), w && _ && !n.isCell(w) && !/^FIGCAPTION$/i.test(w.nodeName)) {
              if (n.isListCell(_) && n.isList(w) && (n.isListCell(w.parentNode) || _.previousElementSibling) && (r === _ || r.nodeType === 3 && (!r.previousSibling || n.isList(r.previousSibling))) && (n.getFormatElement(p.startContainer, null) !== n.getFormatElement(p.endContainer, null) ? w.contains(p.startContainer) : p.startOffset === 0 && p.collapsed)) {
                if (p.startContainer !== p.endContainer)
                  s.preventDefault(), u.removeNode(), p.startContainer.nodeType === 3 && u.setRange(p.startContainer, p.startContainer.textContent.length, p.startContainer, p.startContainer.textContent.length), u.history.push(!0);
                else {
                  let B = _.previousElementSibling || w.parentNode;
                  if (n.isListCell(B)) {
                    s.preventDefault();
                    let U = B;
                    if (!B.contains(_) && n.isListCell(U) && n.isList(U.lastElementChild)) {
                      for (U = U.lastElementChild.lastElementChild; n.isListCell(U) && n.isList(U.lastElementChild); )
                        U = U.lastElementChild && U.lastElementChild.lastElementChild;
                      B = U;
                    }
                    let x = B === w.parentNode ? w.previousSibling : B.lastChild;
                    x || (x = n.createTextNode(n.zeroWidthSpace), w.parentNode.insertBefore(x, w.parentNode.firstChild));
                    const M = x.nodeType === 3 ? x.textContent.length : 1, j = _.childNodes;
                    let q = x, ie = j[0];
                    for (; ie = j[0]; )
                      B.insertBefore(ie, q.nextSibling), q = ie;
                    n.removeItem(_), w.children.length === 0 && n.removeItem(w), u.setRange(x, M, x, M), u.history.push(!0);
                  }
                }
                break;
              }
              if (!y && p.startOffset === 0) {
                let B = !0, U = L;
                for (; U && U !== w && !n.isWysiwygDiv(U); ) {
                  if (U.previousSibling && (U.previousSibling.nodeType === 1 || !n.onlyZeroWidthSpace(U.previousSibling.textContent.trim()))) {
                    B = !1;
                    break;
                  }
                  U = U.parentNode;
                }
                if (B && w.parentNode) {
                  s.preventDefault(), u.detachRangeFormatElement(w, n.isListCell(_) ? [_] : null, null, !1, !1), u.history.push(!0);
                  break;
                }
              }
            }
            if (!y && _ && (p.startOffset === 0 || r === _ && _.childNodes[p.startOffset])) {
              const B = r === _ ? _.childNodes[p.startOffset] : r, U = _.previousSibling, x = (L.nodeType === 3 || n.isBreak(L)) && !L.previousSibling && p.startOffset === 0;
              if (B && !B.previousSibling && (L && n.isComponent(L.previousSibling) || x && n.isComponent(U))) {
                const M = u.getFileComponent(U);
                M ? (s.preventDefault(), s.stopPropagation(), _.textContent.length === 0 && n.removeItem(_), u.selectComponent(M.target, M.pluginName) === !1 && u.blur()) : n.isComponent(U) && (s.preventDefault(), s.stopPropagation(), n.removeItem(U));
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
            if (!y && u._isEdgeFormat(p.endContainer, p.endOffset, "end") && !_.nextSibling) {
              s.preventDefault(), s.stopPropagation();
              return;
            }
            if (v._isUneditableNode(p, !1)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if ((n.isFormatElement(r) || r.nextSibling === null || n.onlyZeroWidthSpace(r.nextSibling) && r.nextSibling.nextSibling === null) && p.startOffset === r.textContent.length) {
              const B = _.nextElementSibling;
              if (!B) break;
              if (n.isComponent(B)) {
                if (s.preventDefault(), n.onlyZeroWidthSpace(_) && (n.removeItem(_), n.isTable(B))) {
                  let x = n.getChildElement(B, n.isCell, !1);
                  x = x.firstElementChild || x, u.setRange(x, 0, x, 0);
                  break;
                }
                const U = u.getFileComponent(B);
                U ? (s.stopPropagation(), u.selectComponent(U.target, U.pluginName) === !1 && u.blur()) : n.isComponent(B) && (s.stopPropagation(), n.removeItem(B));
                break;
              }
            }
            if (!y && (u.isEdgePoint(p.endContainer, p.endOffset) || r === _ && _.childNodes[p.startOffset])) {
              const B = r === _ && _.childNodes[p.startOffset] || r;
              if (B && n.isNonEditable(B.nextSibling)) {
                s.preventDefault(), s.stopPropagation(), n.removeItem(B.nextSibling);
                break;
              } else if (n.isComponent(B)) {
                s.preventDefault(), s.stopPropagation(), n.removeItem(B);
                break;
              }
            }
            if (!y && u._isEdgeFormat(p.endContainer, p.endOffset, "end") && n.isFormatElement(_.nextElementSibling) && (u._formatAttrsTemp = _.attributes), _ = n.getFormatElement(p.startContainer, null), w = n.getRangeFormatElement(_, null), n.isListCell(_) && n.isList(w) && (r === _ || r.nodeType === 3 && (!r.nextSibling || n.isList(r.nextSibling)) && (n.getFormatElement(p.startContainer, null) !== n.getFormatElement(p.endContainer, null) ? w.contains(p.endContainer) : p.endOffset === r.textContent.length && p.collapsed))) {
              p.startContainer !== p.endContainer && u.removeNode();
              let B = n.getArrayItem(_.children, n.isList, !1);
              if (B = B || _.nextElementSibling || w.parentNode.nextElementSibling, B && (n.isList(B) || n.getArrayItem(B.children, n.isList, !1))) {
                s.preventDefault();
                let U, x;
                if (n.isList(B)) {
                  const M = B.firstElementChild;
                  for (x = M.childNodes, U = x[0]; x[0]; )
                    _.insertBefore(x[0], B);
                  n.removeItem(M);
                } else {
                  for (U = B.firstChild, x = B.childNodes; x[0]; )
                    _.appendChild(x[0]);
                  n.removeItem(B);
                }
                u.setRange(U, 0, U, 0), u.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (C || l.tabDisable || (s.preventDefault(), m || b || n.isWysiwygDiv(r))) break;
            const N = !p.collapsed || u.isEdgePoint(p.startContainer, p.startOffset), $ = u.getSelectedElements(null);
            r = u.getSelectionNode();
            const W = [];
            let O = [], D = n.isListCell($[0]), P = n.isListCell($[$.length - 1]), I = { sc: p.startContainer, so: p.startOffset, ec: p.endContainer, eo: p.endOffset };
            for (let B = 0, U = $.length, x; B < U; B++)
              if (x = $[B], n.isListCell(x)) {
                if (!x.previousElementSibling && !h)
                  continue;
                W.push(x);
              } else
                O.push(x);
            if (W.length > 0 && N && u.plugins.list)
              I = u.plugins.list.editInsideList.call(u, h, W);
            else {
              const B = n.getParentElement(r, n.isCell);
              if (B && N) {
                const U = n.getParentElement(B, "table"), x = n.getListChildren(U, n.isCell);
                let M = h ? n.prevIdx(x, B) : n.nextIdx(x, B);
                M === x.length && !h && (M = 0), M === -1 && h && (M = x.length - 1);
                let j = x[M];
                if (!j) break;
                j = j.firstElementChild || j, u.setRange(j, 0, j, 0);
                break;
              }
              O = O.concat(W), D = P = null;
            }
            if (O.length > 0)
              if (h) {
                const B = O.length - 1;
                for (let M = 0, j; M <= B; M++) {
                  j = O[M].childNodes;
                  for (let q = 0, ie = j.length, X; q < ie && (X = j[q], !!X); q++)
                    if (!n.onlyZeroWidthSpace(X)) {
                      /^\s{1,4}$/.test(X.textContent) ? n.removeItem(X) : /^\s{1,4}/.test(X.textContent) && (X.textContent = X.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const U = n.getChildElement(O[0], "text", !1), x = n.getChildElement(O[B], "text", !0);
                !D && U && (I.sc = U, I.so = 0), !P && x && (I.ec = x, I.eo = x.textContent.length);
              } else {
                const B = n.createTextNode(new f.Array(u._variable.tabSize + 1).join(" "));
                if (O.length === 1) {
                  if (!u.insertNode(B, null, !0)) return !1;
                  D || (I.sc = B, I.so = B.length), P || (I.ec = B, I.eo = B.length);
                } else {
                  const U = O.length - 1;
                  for (let j = 0, q; j <= U; j++)
                    q = O[j].firstChild, q && (n.isBreak(q) ? O[j].insertBefore(B.cloneNode(!1), q) : q.textContent = B.textContent + q.textContent);
                  const x = n.getChildElement(O[0], "text", !1), M = n.getChildElement(O[U], "text", !0);
                  !D && x && (I.sc = x, I.so = 0), !P && M && (I.ec = M, I.eo = M.textContent.length);
                }
              }
            u.setRange(I.sc, I.so, I.ec, I.eo), u.history.push(!1);
            break;
          case 13:
            const V = n.getFreeFormatElement(r, null);
            if (u._charTypeHTML) {
              let B = "";
              if (!h && V || h ? B = "<br>" : B = "<" + _.nodeName + "><br></" + _.nodeName + ">", !u.checkCharCount(B, "byte-html"))
                return s.preventDefault(), !1;
            }
            if (!h && !C) {
              const B = u._isEdgeFormat(p.endContainer, p.endOffset, "end"), U = u._isEdgeFormat(p.startContainer, p.startOffset, "start");
              if (B && (/^H[1-6]$/i.test(_.nodeName) || /^HR$/i.test(_.nodeName))) {
                v._enterPrevent(s);
                let x = null;
                const M = u.appendFormatTag(_, l.defaultTag);
                if (B && B.length > 0) {
                  x = B.pop();
                  const j = x;
                  for (; B.length > 0; )
                    x = x.appendChild(B.pop());
                  M.appendChild(j);
                }
                if (x = x ? x.appendChild(M.firstChild) : M.firstChild, n.isBreak(x)) {
                  const j = n.createTextNode(n.zeroWidthSpace);
                  x.parentNode.insertBefore(j, x), u.setRange(j, 1, j, 1);
                } else
                  u.setRange(x, 0, x, 0);
                break;
              } else if (w && _ && !n.isCell(w) && !/^FIGCAPTION$/i.test(w.nodeName)) {
                const x = u.getRange();
                if (u.isEdgePoint(x.endContainer, x.endOffset) && n.isList(r.nextSibling)) {
                  v._enterPrevent(s);
                  const M = n.createElement("LI"), j = n.createElement("BR");
                  M.appendChild(j), _.parentNode.insertBefore(M, _.nextElementSibling), M.appendChild(r.nextSibling), u.setRange(j, 1, j, 1);
                  break;
                }
                if ((x.commonAncestorContainer.nodeType !== 3 || !x.commonAncestorContainer.nextElementSibling) && n.onlyZeroWidthSpace(_.innerText.trim()) && !n.isListCell(_.nextElementSibling)) {
                  v._enterPrevent(s);
                  let M = null;
                  if (n.isListCell(w.parentNode)) {
                    const j = _.parentNode.parentNode;
                    w = j.parentNode;
                    const q = n.createElement("LI");
                    q.innerHTML = "<br>", n.copyTagAttributes(q, _, l.lineAttrReset), M = q, w.insertBefore(M, j.nextElementSibling);
                  } else {
                    const j = n.isCell(w.parentNode) ? "DIV" : n.isList(w.parentNode) ? "LI" : n.isFormatElement(w.nextElementSibling) && !n.isRangeFormatElement(w.nextElementSibling) ? w.nextElementSibling.nodeName : n.isFormatElement(w.previousElementSibling) && !n.isRangeFormatElement(w.previousElementSibling) ? w.previousElementSibling.nodeName : l.defaultTag;
                    M = n.createElement(j), n.copyTagAttributes(M, _, l.lineAttrReset);
                    const q = u.detachRangeFormatElement(w, [_], null, !0, !0);
                    q.cc.insertBefore(M, q.ec);
                  }
                  M.innerHTML = "<br>", n.removeItemAllParents(_, null, null), u.setRange(M, 1, M, 1);
                  break;
                }
              }
              if (V) {
                v._enterPrevent(s);
                const x = r === V, M = u.getSelection(), j = r.childNodes, q = M.focusOffset, ie = r.previousElementSibling, X = r.nextSibling;
                if (!n.isClosureFreeFormatElement(V) && j && (x && p.collapsed && j.length - 1 <= q + 1 && n.isBreak(j[q]) && (!j[q + 1] || (!j[q + 2] || n.onlyZeroWidthSpace(j[q + 2].textContent)) && j[q + 1].nodeType === 3 && n.onlyZeroWidthSpace(j[q + 1].textContent)) && q > 0 && n.isBreak(j[q - 1]) || !x && n.onlyZeroWidthSpace(r.textContent) && n.isBreak(ie) && (n.isBreak(ie.previousSibling) || !n.onlyZeroWidthSpace(ie.previousSibling.textContent)) && (!X || !n.isBreak(X) && n.onlyZeroWidthSpace(X.textContent)))) {
                  x ? n.removeItem(j[q - 1]) : n.removeItem(r);
                  const J = u.appendFormatTag(V, n.isFormatElement(V.nextElementSibling) && !n.isRangeFormatElement(V.nextElementSibling) ? V.nextElementSibling : null);
                  n.copyFormatAttributes(J, V), u.setRange(J, 1, J, 1);
                  break;
                }
                if (x) {
                  k.insertHTML(p.collapsed && n.isBreak(p.startContainer.childNodes[p.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let J = M.focusNode;
                  const ne = M.focusOffset;
                  V === J && (J = J.childNodes[ne - q > 1 ? ne - 1 : ne]), u.setRange(J, 1, J, 1);
                } else {
                  const J = M.focusNode.nextSibling, ne = n.createElement("BR");
                  u.insertNode(ne, null, !1);
                  const he = ne.previousSibling, me = ne.nextSibling;
                  !n.isBreak(J) && !n.isBreak(he) && (!me || n.onlyZeroWidthSpace(me)) ? (ne.parentNode.insertBefore(ne.cloneNode(!1), ne), u.setRange(ne, 1, ne, 1)) : u.setRange(me, 0, me, 0);
                }
                v._onShortcutKey = !0;
                break;
              }
              if (p.collapsed && (U || B)) {
                v._enterPrevent(s);
                const x = n.createElement("BR"), M = n.createElement(_.nodeName);
                n.copyTagAttributes(M, _, l.lineAttrReset);
                let j = x;
                do {
                  if (!n.isBreak(r) && r.nodeType === 1) {
                    const q = r.cloneNode(!1);
                    q.appendChild(j), j = q;
                  }
                  r = r.parentNode;
                } while (_ !== r && _.contains(r));
                M.appendChild(j), _.parentNode.insertBefore(M, U && !B ? _ : _.nextElementSibling), B && u.setRange(x, 1, x, 1);
                break;
              }
              if (_) {
                s.stopPropagation();
                let x, M = 0;
                if (p.collapsed)
                  n.onlyZeroWidthSpace(_) ? x = u.appendFormatTag(_, _.cloneNode(!1)) : x = n.splitElement(p.endContainer, p.endOffset, n.getElementDepth(_));
                else {
                  const j = n.getFormatElement(p.startContainer, null) !== n.getFormatElement(p.endContainer, null), q = _.cloneNode(!1);
                  q.innerHTML = "<br>";
                  const ie = p.commonAncestorContainer, X = ie === p.startContainer && ie === p.endContainer && n.onlyZeroWidthSpace(ie) ? p : u.removeNode();
                  if (x = n.getFormatElement(X.container, null), !x) {
                    n.isWysiwygDiv(X.container) && (v._enterPrevent(s), e.element.wysiwyg.appendChild(q), x = q, n.copyTagAttributes(x, _, l.lineAttrReset), u.setRange(x, M, x, M));
                    break;
                  }
                  const J = n.getRangeFormatElement(X.container);
                  if (x = x.contains(J) ? n.getChildElement(J, n.getFormatElement.bind(n)) : x, j) {
                    if (B && !U)
                      x.parentNode.insertBefore(q, !X.prevContainer || X.container === X.prevContainer ? x.nextElementSibling : x), x = q, M = 0;
                    else if (M = X.offset, U) {
                      const ne = x.parentNode.insertBefore(q, x);
                      B && (x = ne, M = 0);
                    }
                  } else
                    B && U ? (x.parentNode.insertBefore(q, X.prevContainer && X.container === X.prevContainer ? x.nextElementSibling : x), x = q, M = 0) : x = n.splitElement(X.container, X.offset, n.getElementDepth(_));
                }
                v._enterPrevent(s), n.copyTagAttributes(x, _, l.lineAttrReset), u.setRange(x, M, x, M);
                break;
              }
            }
            if (y) break;
            if (w && n.getParentElement(w, "FIGCAPTION") && n.getParentElement(w, n.isList) && (v._enterPrevent(s), _ = u.appendFormatTag(_, null), u.setRange(_, 0, _, 0)), C) {
              s.preventDefault(), s.stopPropagation(), u.containerOff(), u.controllersOff();
              const B = e[C], U = B._container, x = U.previousElementSibling || U.nextElementSibling;
              let M = null;
              n.isListCell(U.parentNode) ? M = n.createElement("BR") : (M = n.createElement(n.isFormatElement(x) && !n.isRangeFormatElement(x) ? x.nodeName : l.defaultTag), M.innerHTML = "<br>"), h ? U.parentNode.insertBefore(M, U) : U.parentNode.insertBefore(M, U.nextElementSibling), u.callPlugin(C, function() {
                u.selectComponent(B._element, C) === !1 && u.blur();
              }, null);
            }
            break;
          case 27:
            if (C)
              return s.preventDefault(), s.stopPropagation(), u.controllersOff(), !1;
            break;
        }
        if (h && c === 16) {
          s.preventDefault(), s.stopPropagation();
          const z = u.plugins.table;
          if (z && !z._shift && !z._ref) {
            const L = n.getParentElement(_, n.isCell);
            if (L) {
              z.onTableCellMultiSelect.call(u, L, !0);
              return;
            }
          }
        } else if (h && (n.isOSX_IOS ? b : m) && c === 32) {
          s.preventDefault(), s.stopPropagation();
          const z = u.insertNode(n.createTextNode(" "));
          if (z) {
            u.setRange(z, z.length, z, z.length);
            return;
          }
        }
        if (n.isIE && !m && !b && !y && !v._nonTextKeyCode.test(c) && n.isBreak(p.commonAncestorContainer)) {
          const z = n.createTextNode(n.zeroWidthSpace);
          u.insertNode(z, null, !1), u.setRange(z, 1, z, 1);
        }
        v._directionKeyCode.test(c) && (f.setTimeout(u._editorRange.bind(u), 0), v._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(s) {
      if (s.shiftKey) return;
      let r = u.getSelectionNode();
      const c = function(b, p) {
        if (p || (p = 0), s.preventDefault(), s.stopPropagation(), !b) return;
        let y = u.getFileComponent(b);
        y ? u.selectComponent(y.target, y.pluginName) : (u.setRange(b, p, b, p), u.controllersOff());
      }, h = n.getParentElement(r, "table");
      if (h) {
        const b = n.getParentElement(r, "tr"), p = n.getParentElement(r, "td");
        let y = p, C = p;
        if (p) {
          for (; y && y.firstChild; ) y = y.firstChild;
          for (; C && C.lastChild; ) C = C.lastChild;
        }
        let _ = r;
        for (; _ && _.firstChild; ) _ = _.firstChild;
        const w = _ === y, A = _ === C;
        let z = null, L = 0;
        if (s.keyCode === 38 && w) {
          const N = b && b.previousElementSibling;
          for (N ? z = N.children[p.cellIndex] : z = n.getPreviousDeepestNode(h, u.context.element.wysiwyg); z && z.lastChild; ) z = z.lastChild;
          z && (L = z.textContent.length);
        } else if (s.keyCode === 40 && A) {
          const N = b && b.nextElementSibling;
          for (N ? z = N.children[p.cellIndex] : z = n.getNextDeepestNode(h, u.context.element.wysiwyg); z && z.firstChild; ) z = z.firstChild;
        }
        if (z)
          return c(z, L), !1;
      }
      const m = u.getFileComponent(r);
      if (m) {
        const b = /37|38/.test(s.keyCode), p = /39|40/.test(s.keyCode);
        if (b) {
          const y = n.getPreviousDeepestNode(m.target, u.context.element.wysiwyg);
          c(y, y && y.textContent.length);
        } else if (p) {
          const y = n.getNextDeepestNode(m.target, u.context.element.wysiwyg);
          c(y);
        }
      }
    },
    onKeyUp_wysiwyg: function(s) {
      if (v._onShortcutKey) return;
      u._editorRange();
      const r = s.keyCode, c = s.ctrlKey || s.metaKey || r === 91 || r === 92 || r === 224, h = s.altKey;
      if (u.isReadOnly) {
        !c && v._cursorMoveKeyCode.test(r) && v._applyTagEffects();
        return;
      }
      const m = u.getRange();
      let b = u.getSelectionNode();
      if (u._isBalloon && (u._isBalloonAlways && r !== 27 || !m.collapsed))
        if (u._isBalloonAlways)
          r !== 27 && v._showToolbarBalloonDelay();
        else {
          v._showToolbarBalloon();
          return;
        }
      let p = b;
      for (; p && p.firstChild; ) p = p.firstChild;
      const y = u.getFileComponent(p);
      if (!(s.keyCode === 16 || s.shiftKey) && y ? u.selectComponent(y.target, y.pluginName) : u.currentFileComponentInfo && u.controllersOff(), r === 8 && n.isWysiwygDiv(b) && b.textContent === "" && b.children.length === 0) {
        s.preventDefault(), s.stopPropagation(), b.innerHTML = "";
        const z = n.createElement(n.isFormatElement(u._variable.currentNodes[0]) ? u._variable.currentNodes[0] : l.defaultTag);
        z.innerHTML = "<br>", b.appendChild(z), u.setRange(z, 0, z, 0), v._applyTagEffects(), u.history.push(!1);
        return;
      }
      const C = n.getFormatElement(b, null), _ = n.getRangeFormatElement(b, null), w = u._formatAttrsTemp;
      if (w) {
        for (let z = 0, L = w.length; z < L; z++) {
          if (r === 13 && /^id$/i.test(w[z].name)) {
            C.removeAttribute("id");
            continue;
          }
          C.setAttribute(w[z].name, w[z].value);
        }
        u._formatAttrsTemp = null;
      }
      if (!C && m.collapsed && !n.isComponent(b) && !n.isList(b) && u._setDefaultFormat(n.isRangeFormatElement(_) ? "DIV" : l.defaultTag) !== null && (b = u.getSelectionNode()), !c && !h && !v._nonTextKeyCode.test(r) && b.nodeType === 3 && n.zeroWidthRegExp.test(b.textContent) && !(s.isComposing !== void 0 ? s.isComposing : v._IEisComposing)) {
        let z = m.startOffset, L = m.endOffset;
        const N = (b.textContent.substring(0, L).match(v._frontZeroWidthReg) || "").length;
        z = m.startOffset - N, L = m.endOffset - N, b.textContent = b.textContent.replace(n.zeroWidthRegExp, ""), u.setRange(b, z < 0 ? 0 : z, b, L < 0 ? 0 : L);
      }
      v._deleteKeyCode.test(r) && C && n.onlyZeroWidthSpace(C.textContent) && !C.previousElementSibling && (C.innerHTML = "<br>", u.setRange(C, 0, C, 0)), u._charCount(""), !(typeof k.onKeyUp == "function" && k.onKeyUp(s, u) === !1) && !c && !h && !v._historyIgnoreKeyCode.test(r) && u.history.push(!0);
    },
    onScroll_wysiwyg: function(s) {
      u.controllersOff(), u._isBalloon && v._hideToolbar(), typeof k.onScroll == "function" && k.onScroll(s, u);
    },
    onFocus_wysiwyg: function(s) {
      u._antiBlur || (u.hasFocus = !0, f.setTimeout(v._applyTagEffects), u._isInline && v._showToolbarInline(), typeof k.onFocus == "function" && k.onFocus(s, u));
    },
    onBlur_wysiwyg: function(s) {
      u._antiBlur || u._variable.isCodeView || (u.hasFocus = !1, u.effectNode = null, u.controllersOff(), (u._isInline || u._isBalloon) && v._hideToolbar(), u._setKeyEffect([]), u._variable.currentNodes = [], u._variable.currentNodesMap = [], l.showPathLabel && (e.element.navigation.textContent = ""), typeof k.onBlur == "function" && k.onBlur(s, u, this));
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
      if (u._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || l.stickyToolbar < 0) return;
      const s = e.element, r = s.editorArea.offsetHeight, c = (this.scrollY || d.documentElement.scrollTop) + l.stickyToolbar, h = v._getEditorOffsets(l.toolbarContainer).top - (u._isInline ? s.toolbar.offsetHeight : 0), m = u._isInline && c - h > 0 ? c - h - e.element.toolbar.offsetHeight : 0;
      c < h ? v._offStickyToolbar() : c + u._variable.minResizingSize >= r + h ? (u._sticky || v._onStickyToolbar(m), s.toolbar.style.top = m + r + h + l.stickyToolbar - c - u._variable.minResizingSize + "px") : c >= h && v._onStickyToolbar(m);
    },
    _getEditorOffsets: function(s) {
      let r = s || e.element.topArea, c = 0, h = 0, m = 0;
      for (; r; )
        c += r.offsetTop, h += r.offsetLeft, m += r.scrollTop, r = r.offsetParent;
      return {
        top: c,
        left: h,
        scroll: m
      };
    },
    _getPageBottomSpace: function() {
      return d.documentElement.scrollHeight - (v._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
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
      const s = u.getRange(), r = s.startContainer, c = s.endContainer, h = n.getRangeFormatElement(r), m = n.getRangeFormatElement(c), b = n.isCell(h), p = n.isCell(m), y = s.commonAncestorContainer;
      if ((b && !h.previousElementSibling && !h.parentElement.previousElementSibling || p && !m.nextElementSibling && !m.parentElement.nextElementSibling) && h !== m)
        if (!b)
          n.removeItem(n.getParentElement(m, function(w) {
            return y === w.parentNode;
          }));
        else if (!p)
          n.removeItem(n.getParentElement(h, function(w) {
            return y === w.parentNode;
          }));
        else
          return n.removeItem(n.getParentElement(h, function(w) {
            return y === w.parentNode;
          })), u.nativeFocus(), !0;
      const C = r.nodeType === 1 ? n.getParentElement(r, ".se-component") : null, _ = c.nodeType === 1 ? n.getParentElement(c, ".se-component") : null;
      return C && n.removeItem(C), _ && n.removeItem(_), !1;
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
        const h = n.getParentElement(r.startContainer, n.isComponent);
        h && (r.startContainer = h, r.startOffset = 0, r.endContainer = h, r.endOffset = 0);
      }
      u.setRange(r.startContainer, r.startOffset, r.endContainer, r.endOffset);
    },
    _dataTransferAction: function(s, r, c) {
      let h, m;
      if (n.isIE) {
        h = c.getData("Text");
        const b = u.getRange(), p = n.createElement("DIV"), y = {
          sc: b.startContainer,
          so: b.startOffset,
          ec: b.endContainer,
          eo: b.endOffset
        };
        return p.setAttribute("contenteditable", !0), p.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(p), p.focus(), f.setTimeout(function() {
          m = p.innerHTML, n.removeItem(p), u.setRange(y.sc, y.so, y.ec, y.eo), v._setClipboardData(s, r, h, m, c);
        }), !0;
      } else if (h = c.getData("text/plain"), m = c.getData("text/html"), v._setClipboardData(s, r, h, m, c) === !1)
        return r.preventDefault(), r.stopPropagation(), !1;
    },
    _setClipboardData: function(s, r, c, h, m) {
      const b = /class=["']*Mso(Normal|List)/i.test(h) || /content=["']*Word.Document/i.test(h) || /content=["']*OneNote.File/i.test(h) || /content=["']*Excel.Sheet/i.test(h);
      !h ? h = n._HTMLConvertor(c).replace(/\n/g, "<br>") : (h = h.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), b && (h = h.replace(/\n/g, " "), c = c.replace(/\n/g, " ")), h = u.cleanHTML(h, u.pasteTagsWhitelistRegExp, u.pasteTagsBlacklistRegExp));
      const y = u._charCount(u._charTypeHTML ? h : c);
      if (s === "paste" && typeof k.onPaste == "function") {
        const _ = k.onPaste(r, h, y, u);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          h = _;
        }
      }
      if (s === "drop" && typeof k.onDrop == "function") {
        const _ = k.onDrop(r, h, y, u);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          h = _;
        }
      }
      const C = m.files;
      if (C.length > 0 && !b)
        return /^image/.test(C[0].type) && u.plugins.image && k.insertImage(C), !1;
      if (!y)
        return !1;
      if (h)
        return k.insertHTML(h, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(s) {
      if (u.isDisabled || u.isReadOnly) return !1;
      const r = n.getParentElement(s.target, n.isComponent), c = u._lineBreaker.style;
      if (r && !u.currentControllerName) {
        const h = e.element;
        let m = 0, b = h.wysiwyg;
        do
          m += b.scrollTop, b = b.parentElement;
        while (b && !/^(BODY|HTML)$/i.test(b.nodeName));
        const p = h.wysiwyg.scrollTop, y = v._getEditorOffsets(null), C = n.getOffset(r, h.wysiwygFrame).top + p, _ = s.pageY + m + (l.iframe && !l.toolbarContainer ? h.toolbar.offsetHeight : 0), w = C + (l.iframe ? m : y.top), A = n.isListCell(r.parentNode);
        let z = "", L = "";
        if ((A ? !r.previousSibling : !n.isFormatElement(r.previousElementSibling)) && _ < w + 20)
          L = C, z = "t";
        else if ((A ? !r.nextSibling : !n.isFormatElement(r.nextElementSibling)) && _ > w + r.offsetHeight - 20)
          L = C + r.offsetHeight, z = "b";
        else {
          c.display = "none";
          return;
        }
        u._variable._lineBreakComp = r, u._variable._lineBreakDir = z, c.top = L - p + "px", u._lineBreakerButton.style.left = n.getOffset(r).left + r.offsetWidth / 2 - 15 + "px", c.display = "block";
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
      const r = u._variable._lineBreakComp, c = this ? this : u._variable._lineBreakDir, h = n.isListCell(r.parentNode), m = n.createElement(h ? "BR" : n.isCell(r.parentNode) ? "DIV" : l.defaultTag);
      if (h || (m.innerHTML = "<br>"), u._charTypeHTML && !u.checkCharCount(m.outerHTML, "byte-html")) return;
      r.parentNode.insertBefore(m, c === "t" ? r : r.nextSibling), u._lineBreaker.style.display = "none", u._variable._lineBreakComp = null;
      const b = h ? m : m.firstChild;
      u.setRange(b, 1, b, 1), u.history.push(!1);
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
      for (let c = 1, h = a.length, m, b; c < h; c++)
        b = a[c], m = b[0] * 1, s.push(m), r[m] = b[1];
      s.sort(function(c, h) {
        return c - h;
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
      const r = Zi._createToolBar(d, s, u.plugins, l);
      a = r.responsiveButtons, v._setResponsiveToolbar(), e.element.toolbar.replaceChild(r._buttonTray, e.element._buttonTray);
      const c = qi(e.element.originElement, u._getConstructed(e.element), l);
      e.element = c.element, e.tool = c.tool, l.iframe && (e.element.wysiwyg = u._wd.body), u._recoverButtonStates(), u._cachingButtons(), u.history._resetCachingButton(), u.effectNode = null, u.hasFocus && v._applyTagEffects(), u.isReadOnly && n.setDisabledButtons(!0, u.resizingDisabledButtons), typeof k.onSetToolbarButtons == "function" && k.onSetToolbarButtons(r._buttonTray.querySelectorAll("button"), u);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(s) {
      v._removeEvent(), u._resetComponents(), n.removeClass(u._styleCommandMap.showBlocks, "active"), n.removeClass(u._styleCommandMap.codeView, "active"), u._variable.isCodeView = !1, u._iframeAuto = null, u.plugins = s.plugins || u.plugins;
      const r = [l, s].reduce(function(b, p) {
        for (let y in p)
          if (n.hasOwn(p, y))
            if (y === "plugins" && p[y] && b[y]) {
              let C = b[y], _ = p[y];
              C = C.length ? C : f.Object.keys(C).map(function(w) {
                return C[w];
              }), _ = _.length ? _ : f.Object.keys(_).map(function(w) {
                return _[w];
              }), b[y] = _.filter(function(w) {
                return C.indexOf(w) === -1;
              }).concat(C);
            } else
              b[y] = p[y];
        return b;
      }, {}), c = e.element, h = c.wysiwyg.innerHTML, m = Zi._setOptions(r, e, l);
      m.callButtons && (t = m.callButtons, u.initPlugins = {}), m.plugins && (u.plugins = i = m.plugins), c._menuTray.children.length === 0 && (this._menuTray = {}), a = m.toolbar.responsiveButtons, u.options = l = r, u.lang = o = l.lang, l.iframe && c.wysiwygFrame.addEventListener("load", function() {
        n._setIframeDocument(this, l), u._setOptionsInit(c, h);
      }), c.editorArea.appendChild(c.wysiwygFrame), l.iframe || u._setOptionsInit(c, h);
    },
    /**
     * @description Set "options.defaultStyle" style.
     * Define the style of the edit area
     * It can also be defined with the "setOptions" method, but the "setDefaultStyle" method does not render the editor again.
     * @param {String} style Style string
     */
    setDefaultStyle: function(s) {
      const r = l._editorStyles = n._setDefaultOptionStyle(l, s), c = e.element;
      c.topArea.style.cssText = r.top, c.code.style.cssText = l._editorStyles.frame, c.code.style.display = "none", l.height === "auto" ? c.code.style.overflow = "hidden" : c.code.style.overflow = "", l.iframe ? (c.wysiwygFrame.style.cssText = r.frame, c.wysiwyg.style.cssText = r.editor) : c.wysiwygFrame.style.cssText = r.frame + r.editor;
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
    insertHTML: function(s, r, c, h) {
      if (e.element.wysiwygFrame.contains(u.getSelection().focusNode) || u.focus(), typeof s == "string") {
        r || (s = u.cleanHTML(s, null, null));
        try {
          if (n.isListCell(n.getFormatElement(u.getSelectionNode(), null))) {
            const L = d.createRange().createContextualFragment(s).childNodes;
            u._isFormatData(L) && (s = u._convertListCell(L));
          }
          const b = d.createRange().createContextualFragment(s).childNodes;
          if (c) {
            const z = u._charTypeHTML ? "outerHTML" : "textContent";
            let L = "";
            for (let N = 0, $ = b.length; N < $; N++)
              L += b[N][z];
            if (!u.checkCharCount(L, null)) return;
          }
          let p, y, C, _, w;
          for (; p = b[0]; ) {
            if (_ && _.nodeType === 3 && y && y.nodeType === 1 && n.isBreak(p)) {
              _ = p, n.removeItem(p);
              continue;
            }
            C = u.insertNode(p, y, !1), y = C.container || C, w || (w = C), _ = p;
          }
          _.nodeType === 3 && y.nodeType === 1 && (y = _);
          const A = y.nodeType === 3 ? C.endOffset || y.textContent.length : y.childNodes.length;
          h ? u.setRange(w.container || w, w.startOffset || 0, y, A) : u.setRange(y, A, y, A);
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
        const h = e.element.wysiwyg, m = c.children;
        for (let b = 0, p = m.length; b < p; b++)
          m[b] && h.appendChild(m[b]);
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
  u.functions = k, u.options = l;
  let E = e.element, S = E.originElement, R = E.topArea;
  return S.style.display = "none", R.style.display = "block", l.iframe && E.wysiwygFrame.addEventListener("load", function() {
    n._setIframeDocument(this, l), u._editorInit(!1, l.value), l.value = null;
  }), typeof S.nextElementSibling == "object" ? S.parentNode.insertBefore(R, S.nextElementSibling) : S.parentNode.appendChild(R), E.editorArea.appendChild(E.wysiwygFrame), E = S = R = null, l.iframe || (u._editorInit(!1, l.value), l.value = null), k;
}
const ar = {
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
    ce._propertiesInit(), typeof t != "object" && (t = {}), i && (t = [i, t].reduce(function(a, d) {
      for (let f in d)
        if (ce.hasOwn(d, f))
          if (f === "plugins" && d[f] && a[f]) {
            let n = a[f], g = d[f];
            n = n.length ? n : Object.keys(n).map(function(u) {
              return n[u];
            }), g = g.length ? g : Object.keys(g).map(function(u) {
              return g[u];
            }), a[f] = g.filter(function(u) {
              return n.indexOf(u) === -1;
            }).concat(n);
          } else
            a[f] = d[f];
      return a;
    }, {}));
    const o = typeof e == "string" ? document.getElementById(e) : e;
    if (!o)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const l = Zi.init(o, t);
    if (l.constructed._top.id && document.getElementById(l.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + l.constructed._top.id + '")');
    return sr(qi(o, l.constructed, l.options), l.pluginCallButtons, l.plugins, l.options.lang, t, l._responsiveButtons);
  }
}, rr = ["innerHTML", "id", "tabindex"], ur = /* @__PURE__ */ ve({
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
    const o = i, l = e, a = Y(null), d = Y(l.modelValue);
    let f = null, n;
    const g = Y(l.focusing), u = (S) => {
      g.value = !0, o("focus", S);
    }, v = (S) => {
      g.value = !1, o("blur", S);
    }, k = (S) => {
      n && clearTimeout(n), n = setTimeout(() => {
        fn(S) === "" ? d.value = "" : d.value = S;
      }, 100);
    }, E = () => {
      let S = {
        //@ts-ignore
        lang: tn[l.lang] ? tn[l.lang] : Mi,
        plugins: {
          ...lr
        },
        ...nr
      };
      f = ar.create(l.id, S), f.onChange = (R) => {
        k(R), l.disabled ? f == null || f.disabled() : f == null || f.enabled();
      }, f.onKeyUp = (R, s) => {
        k(s.getContents(!1));
      }, f.onBlur = () => {
        v();
      }, f.onClick = () => {
        u();
      };
    };
    return fe(() => l.modelValue, (S) => d.value = S), fe(d, (S) => o("update:modelValue", S)), ji(() => {
      E();
    }), t({
      doSetValue: (S) => {
        f && f.setContents(S);
      }
    }), (S, R) => (F(), se("div", {
      innerHTML: d.value,
      ref_key: "input",
      ref: a,
      id: S.id,
      tabindex: S.tabindex
    }, null, 8, rr));
  }
}), dr = {
  key: 0,
  class: "lkt-field--searchable-box"
}, cr = ["value", "placeholder"], fr = { key: 0 }, hr = {
  key: 1,
  class: "lkt-field-select-read"
}, pr = ["title"], mr = /* @__PURE__ */ ve({
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
    multipleDisplayEdition: {}
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
    const o = i, l = e, a = l.multiple && l.canTag, d = Y(""), f = Y(null), n = Y(l.showOptions);
    fe(n, (p) => {
      a || o("update:showOptions", p);
    });
    const g = Y(l.focusing), u = Y(!1), v = Y(!1), k = () => {
      Rt(() => {
        g.value = u.value || v.value, n.value = g.value;
      });
    };
    fe(u, (p) => {
      p && (v.value = !1), k();
    }), fe(v, (p) => {
      p && (u.value = !1), k();
    }), fe(g, (p) => {
      o(p ? "focus" : "blur");
    });
    let E, S;
    const R = (p) => {
      E = setTimeout(() => {
        u.value = !1;
      }, 100);
    }, s = (p) => {
      u.value = !0, a && p.key === "Enter" ? (o("tag", d.value), d.value = "") : ["ArrowDown", "ArrowUp", "Enter"].includes(p.key) ? o("navigate", p) : o("search", d.value);
    }, r = (p) => {
      u.value = !0;
    }, c = (p) => {
      S = setTimeout(() => {
        v.value = !1;
      }, 100);
    }, h = (p) => {
      v.value = !0, ["ArrowDown", "ArrowUp", "Enter"].includes(p.key) && o("navigate", p);
    }, m = (p) => {
      v.value = !0;
    }, b = (p) => {
      o("untag", p);
    };
    return t({
      keepFocused: () => {
        clearTimeout(E), clearTimeout(S), f.value && f.value.focus();
      }
    }), (p, y) => {
      const C = re("lkt-tag"), _ = re("lkt-button");
      return F(), se(Ue, null, [
        p.searchable && (p.multiple || p.searchMode) || H(a) ? (F(), se("div", dr, [
          p.multiple ? (F(), K(C, {
            key: 0,
            icon: p.optionsIcon,
            text: p.pickedOptions.length
          }, null, 8, ["icon", "text"])) : p.pickedOptions.length > 0 ? (F(), K(C, { key: 1 }, {
            default: de(() => [
              Q(wt, {
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
          })) : oe("", !0),
          Pe(le("input", {
            "onUpdate:modelValue": y[0] || (y[0] = (w) => d.value = w),
            ref_key: "queryField",
            ref: f,
            value: d.value,
            placeholder: p.searchPlaceholder,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: s,
            onBlur: R,
            onFocus: r
          }, null, 40, cr), [
            [Ai, d.value]
          ])
        ])) : oe("", !0),
        Pe(Q(_, {
          ref: "selectButton",
          type: H(a) ? "content" : "",
          class: "lkt-field--toggle-button lkt-field--select-button",
          "open-tooltip": n.value,
          "onUpdate:openTooltip": y[1] || (y[1] = (w) => n.value = w),
          onKeyup: h,
          onBlur: c,
          onFocus: m
        }, {
          default: de(() => [
            H(a) || p.multiple && p.pickedOptions.length > 0 ? (F(), se(Ue, { key: 0 }, [
              p.multipleDisplayEdition === H(ii).Count ? (F(), se("div", fr, Ct(p.pickedOptions.length), 1)) : (F(), se("ul", hr, [
                (F(!0), se(Ue, null, nt(p.pickedOptions, (w, A) => (F(), se("li", {
                  title: w.label
                }, [
                  Q(wt, {
                    option: p.pickedOptions[A],
                    "option-slot": p.optionSlot,
                    icon: p.optionsIcon,
                    text: p.optionsText,
                    "custom-class": p.optionsClass,
                    modal: p.optionsModal,
                    "modal-data": p.optionsModalData,
                    download: p.optionsDownload,
                    "label-formatter": p.optionsLabelFormatter,
                    editable: p.editable,
                    "is-tag": H(a),
                    onClickIcon: b
                  }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "editable", "is-tag"])
                ], 8, pr))), 256))
              ]))
            ], 64)) : !p.multiple && p.pickedOptions.length > 0 ? (F(), K(wt, {
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
            }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "editable"])) : oe("", !0)
          ]),
          _: 1
        }, 8, ["type", "open-tooltip"]), [
          [bt, p.multiple || !p.searchable || !p.searchMode]
        ])
      ], 64);
    };
  }
}), gr = { class: "lkt-calc--formula" }, vr = { class: "lkt-calc--custom-pad" }, br = { class: "lkt-calc--pad" }, yr = { class: "lkt-calc--numeric-pad" }, _r = { class: "lkt-calc--math-pad" }, Cr = { class: "lkt-calc--advance-math-pad" }, wr = /* @__PURE__ */ ve({
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
    const i = t, o = e, l = Y(o.modelValue), a = Y(null);
    fe(l, (m) => i("update:modelValue", m));
    const d = Y(o.focusing), f = Y(null);
    let n;
    const g = () => {
      clearTimeout(n), a.value && typeof a.value.focus == "function" && a.value.focus();
    }, u = (m) => {
      l.value += "" + m, g();
    }, v = (m) => {
      l.value += " " + m + " ", g();
    }, k = (m) => {
      l.value += " " + m + "(", g();
    }, E = () => {
      l.value += " sqrt(", g();
    }, S = (m) => {
      l.value += "" + m, g();
    }, R = () => {
      l.value += ".", g();
    }, s = () => {
      l.value += " ", g();
    }, r = (m) => {
      l.value += "" + m.value, g();
    }, c = () => {
      d.value = !0;
    }, h = () => {
      n = setTimeout(() => {
        d.value = !1;
      }, 100);
    };
    return fe(d, (m) => {
      i(m ? "focus" : "blur");
    }), (m, b) => {
      const p = re("lkt-button"), y = re("lkt-tooltip");
      return F(), se("div", {
        ref_key: "container",
        ref: f
      }, [
        le("div", gr, [
          Pe(le("input", {
            type: "text",
            ref_key: "input",
            ref: a,
            "onUpdate:modelValue": b[0] || (b[0] = (C) => l.value = C),
            onFocus: c,
            onBlur: h
          }, null, 544), [
            [Ai, l.value]
          ])
        ]),
        m.editable ? (F(), K(y, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--calc",
          modelValue: d.value,
          "onUpdate:modelValue": b[27] || (b[27] = (C) => d.value = C),
          referrer: f.value,
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: de(() => [
            le("div", vr, [
              (F(!0), se(Ue, null, nt(m.options, (C) => (F(), K(p, {
                icon: C.icon,
                text: C.label,
                onClick: (_) => r(C)
              }, null, 8, ["icon", "text", "onClick"]))), 256))
            ]),
            le("div", br, [
              le("div", yr, [
                Q(p, {
                  onClick: b[1] || (b[1] = (C) => u(7)),
                  text: "7",
                  class: "lkt-calc--btn-number"
                }),
                Q(p, {
                  onClick: b[2] || (b[2] = (C) => u(8)),
                  text: "8",
                  class: "lkt-calc--btn-number"
                }),
                Q(p, {
                  onClick: b[3] || (b[3] = (C) => u(9)),
                  text: "9",
                  class: "lkt-calc--btn-number"
                }),
                Q(p, {
                  onClick: b[4] || (b[4] = (C) => u(4)),
                  text: "4",
                  class: "lkt-calc--btn-number"
                }),
                Q(p, {
                  onClick: b[5] || (b[5] = (C) => u(5)),
                  text: "5",
                  class: "lkt-calc--btn-number"
                }),
                Q(p, {
                  onClick: b[6] || (b[6] = (C) => u(6)),
                  text: "6",
                  class: "lkt-calc--btn-number"
                }),
                Q(p, {
                  onClick: b[7] || (b[7] = (C) => u(1)),
                  text: "1",
                  class: "lkt-calc--btn-number"
                }),
                Q(p, {
                  onClick: b[8] || (b[8] = (C) => u(2)),
                  text: "2",
                  class: "lkt-calc--btn-number"
                }),
                Q(p, {
                  onClick: b[9] || (b[9] = (C) => u(3)),
                  text: "3",
                  class: "lkt-calc--btn-number"
                }),
                Q(p, {
                  onClick: b[10] || (b[10] = (C) => R()),
                  text: "."
                }),
                Q(p, {
                  onClick: b[11] || (b[11] = (C) => u(0)),
                  text: "0",
                  class: "lkt-calc--btn-number"
                }),
                Q(p, {
                  onClick: b[12] || (b[12] = (C) => s()),
                  text: " "
                })
              ]),
              le("div", _r, [
                Q(p, {
                  onClick: b[13] || (b[13] = (C) => S("[")),
                  text: "["
                }),
                Q(p, {
                  onClick: b[14] || (b[14] = (C) => S("]")),
                  text: "]"
                }),
                Q(p, {
                  onClick: b[15] || (b[15] = (C) => S("(")),
                  text: "("
                }),
                Q(p, {
                  onClick: b[16] || (b[16] = (C) => S(")")),
                  text: ")"
                }),
                Q(p, {
                  onClick: b[17] || (b[17] = (C) => v("+")),
                  text: "+"
                }),
                Q(p, {
                  onClick: b[18] || (b[18] = (C) => v("-")),
                  text: "−"
                }),
                Q(p, {
                  onClick: b[19] || (b[19] = (C) => v("*")),
                  text: "×"
                }),
                Q(p, {
                  onClick: b[20] || (b[20] = (C) => v("/")),
                  text: "÷"
                })
              ]),
              le("div", Cr, [
                Q(p, {
                  onClick: b[21] || (b[21] = (C) => E()),
                  text: "√"
                }),
                Q(p, {
                  onClick: b[22] || (b[22] = (C) => k("log")),
                  text: "log"
                }),
                Q(p, {
                  onClick: b[23] || (b[23] = (C) => k("ln")),
                  text: "ln"
                }),
                Q(p, {
                  onClick: b[24] || (b[24] = (C) => k("sin")),
                  text: "sin"
                }),
                Q(p, {
                  onClick: b[25] || (b[25] = (C) => k("cos")),
                  text: "cos"
                }),
                Q(p, {
                  onClick: b[26] || (b[26] = (C) => k("tan")),
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
}), kr = /* @__PURE__ */ ve({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = ee(() => {
      let d = Al(t.validation.code, t.stack), f = {
        min: t.validation.min,
        max: t.validation.max,
        value: t.validation.equalToValue
      }, n = Al(t.validation.status + "-" + t.validation.code, t.stack);
      return n && (d = n), d ? d.startsWith("__:") ? hn(d.substring(3), f) : yo(d, f, ":", "") : t.validation.code;
    }), o = ee(() => te.validationIconSlot !== ""), l = ee(() => te.validationIconSlot), a = ee(() => {
      let d = [];
      return d.push("code-" + t.validation.code), d.push("is-" + t.validation.status), d.join(" ");
    });
    return (d, f) => (F(), se("div", {
      class: je(["lkt-field-validation-message", a.value])
    }, [
      o.value ? (F(), K(Lt(l.value), { key: 0 })) : oe("", !0),
      It(" " + Ct(i.value), 1)
    ], 2));
  }
}), xr = {
  key: 0,
  class: "lkt-field-validation-info"
}, Sr = /* @__PURE__ */ ve({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = Y(t.items), o = Y(!1);
    return fe(() => t.items, (l) => {
      o.value = !0, Rt(() => o.value = !1);
    }, { deep: !0 }), (l, a) => o.value ? oe("", !0) : (F(), se("div", xr, [
      (F(!0), se(Ue, null, nt(i.value, (d) => (F(), K(kr, {
        validation: d,
        stack: l.stack,
        key: d.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), Er = ["id"], Lr = /* @__PURE__ */ ve({
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
    const i = t, o = e, l = Y(o.modelValue), a = Y(o.focusing);
    let d, f;
    const n = Y({}), g = () => {
      clearTimeout(f), f = setTimeout(() => {
        n.value = {
          query: l.value
        };
      }, 300);
    }, u = () => {
      a.value = !0;
    }, v = () => {
      d = setTimeout(() => {
        a.value = !1;
      }, 100);
    };
    fe(a, (E) => {
      i(E ? "focus" : "blur");
    });
    const k = () => {
      clearTimeout(d), setTimeout(() => {
        u();
      }, 100);
    };
    return (E, S) => {
      const R = re("lkt-table"), s = re("lkt-tooltip");
      return F(), se(Ue, null, [
        Pe(le("input", {
          id: E.id,
          type: "text",
          ref: "input",
          "onUpdate:modelValue": S[0] || (S[0] = (r) => l.value = r),
          onFocus: u,
          onBlur: v,
          onKeyup: g
        }, null, 40, Er), [
          [Ai, l.value]
        ]),
        E.editable && E.hadFirstFocus ? (F(), K(s, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--dropdown lkt-field--search-results",
          modelValue: a.value,
          "onUpdate:modelValue": S[1] || (S[1] = (r) => a.value = r),
          referrer: E.container,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: de(() => [
            Q(R, ge({
              type: H(bn).Ul,
              itemsContainerClass: "lkt-field--dropdown-options",
              paginator: {
                resource: E.optionsResource,
                resourceData: n.value
              }
            }, {
              onPage: k,
              onClick: k
            }), {
              item: de(({ item: r, index: c, isLoading: h, canCreate: m, canUpdate: b, canDrop: p, canRead: y, doDrop: C }) => [
                Q(wt, {
                  option: r,
                  onClick: k
                }, null, 8, ["option"])
              ]),
              _: 1
            }, 16)
          ]),
          _: 1
        }, 8, ["modelValue", "referrer"])) : oe("", !0)
      ], 64);
    };
  }
}), Tr = {
  key: 0,
  class: "lkt-field-main"
}, zr = {
  key: 3,
  class: "lkt-field--read-value"
}, Br = ["innerHTML", "title"], Nr = ["title"], Ar = { key: 0 }, Rr = {
  key: 1,
  class: "lkt-field-select-read"
}, Ir = ["title"], Mr = ["innerHTML"], Dr = ["innerHTML", "title"], Vr = ["innerHTML", "title"], Hr = /* @__PURE__ */ ve({
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
    multipleDisplay: { default: ii.List },
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
    var g;
    const i = t, o = Gi(), l = e, a = () => i("click"), d = ee(() => {
      switch (l.type) {
        case Z.Select:
          if (l.multiple && Array.isArray(l.value) && l.value.length > 0 || l.multiple && l.multipleDisplay === ii.Count || !l.multiple && l.value) return "";
          break;
        case Z.Date:
          if (l.value !== "") return "";
          break;
        default:
          if (l.value !== "") return "";
      }
      return te.customValueSlots[l.emptyValueSlot] ?? te.defaultEmptyValueSlot;
    }), f = ee(() => te.customValueSlots[l.valueSlot] ?? "");
    let n = l.value;
    return l.type === Z.Select && l.multiple && !Array.isArray(n) && (n = []), (l.type === Z.Textarea || l.type === Z.Text) && (typeof ((g = l.readModeConfig) == null ? void 0 : g.textMaxLength) < "u" && n.length > l.readModeConfig.textMaxLength ? n = n.substring(0, l.readModeConfig.textMaxLength) + "..." : typeof te.readTextMaxLength < "u" && n.length > te.readTextMaxLength && (n = n.substring(0, te.readTextMaxLength) + "...")), (u, v) => {
      const k = re("lkt-image"), E = re("lkt-button"), S = re("lkt-anchor"), R = re("lkt-tag");
      return F(), se("div", {
        class: "lkt-field--read",
        onClick: a
      }, [
        H(o).value ? et(u.$slots, "value", {
          key: 0,
          value: H(n),
          title: u.title,
          data: u.slotData
        }) : d.value ? (F(), K(Lt(d.value), {
          key: 1,
          data: u.slotData
        }, null, 8, ["data"])) : f.value ? (F(), K(Lt(f.value), {
          key: 2,
          value: H(n),
          title: u.title,
          data: u.slotData
        }, null, 8, ["value", "title", "data"])) : (F(), se(Ue, { key: 3 }, [
          u.type === H(Z).File || u.type === H(Z).Image ? (F(), se("div", Tr, [
            Q(E, {
              class: "lkt-field--toggle-button",
              text: u.type === H(Z).File ? u.fileName : ""
            }, {
              default: de(() => [
                u.type === H(Z).Image ? (F(), K(k, {
                  key: 0,
                  src: H(n),
                  class: "lkt-field--image-cover"
                }, null, 8, ["src"])) : oe("", !0),
                u.type === H(Z).Image ? (F(), K(k, {
                  key: 1,
                  src: H(n),
                  class: "lkt-field--image-main"
                }, null, 8, ["src"])) : oe("", !0)
              ]),
              _: 1
            }, 8, ["text"])
          ])) : u.type === H(Z).Email ? (F(), K(S, {
            key: 1,
            type: "mail",
            class: "lkt-field--read-value",
            title: u.title,
            to: H(n)
          }, {
            default: de(() => [
              It(Ct(H(n)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : u.type === H(Z).Tel ? (F(), K(S, {
            key: 2,
            type: "tel",
            class: "lkt-field--read-value",
            title: u.title,
            to: H(n)
          }, {
            default: de(() => [
              It(Ct(H(n)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : H(_t).includes(u.type) ? (F(), se("div", zr, [
            Q(R, {
              icon: H(n) ? "lkt-icn-check" : "lkt-icn-cancel",
              "featured-text": u.label,
              title: u.title
            }, null, 8, ["icon", "featured-text", "title"])
          ])) : u.type === H(Z).Date ? (F(), se("div", {
            key: 4,
            class: "lkt-field--read-value",
            innerHTML: H(n),
            title: u.title
          }, null, 8, Br)) : u.type === H(Z).Select ? (F(), se("div", {
            key: 5,
            class: "lkt-field--read-value",
            title: u.title
          }, [
            u.multiple ? (F(), se(Ue, { key: 0 }, [
              u.multipleDisplay === H(ii).Count ? (F(), se("div", Ar, Ct(H(n).length), 1)) : H(n).length > 0 ? (F(), se("ul", Rr, [
                (F(!0), se(Ue, null, nt(H(n), (s, r) => {
                  var c;
                  return F(), se("li", {
                    title: (c = H(n)[r]) == null ? void 0 : c.label
                  }, [
                    Q(wt, {
                      option: H(n)[r],
                      "option-slot": u.optionSlot,
                      icon: u.optionsIcon,
                      text: u.optionsText,
                      "custom-class": u.optionsClass,
                      modal: u.optionsModal,
                      "modal-data": u.optionsModalData,
                      download: u.optionsDownload,
                      "label-formatter": u.optionsLabelFormatter
                    }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter"])
                  ], 8, Ir);
                }), 256))
              ])) : oe("", !0)
            ], 64)) : H(n).length > 0 ? (F(), K(wt, {
              key: 1,
              option: H(n)[0],
              "option-slot": u.optionSlot,
              icon: u.optionsIcon,
              text: u.optionsText,
              "custom-class": u.optionsClass,
              modal: u.optionsModal,
              "modal-data": u.optionsModalData,
              download: u.optionsDownload,
              "label-formatter": u.optionsLabelFormatter
            }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter"])) : oe("", !0)
          ], 8, Nr)) : u.modal ? (F(), K(E, {
            key: 6,
            class: "lkt-field--read-value",
            title: u.title,
            modal: u.modal,
            "modal-key": u.modalKey,
            "modal-data": u.modalData
          }, {
            default: de(() => [
              le("div", { innerHTML: H(n) }, null, 8, Mr)
            ]),
            _: 1
          }, 8, ["title", "modal", "modal-key", "modal-data"])) : u.download ? (F(), K(wt, {
            key: 7,
            class: "lkt-field--read-value",
            option: { value: "", label: H(n) },
            download: u.download,
            text: u.optionsText,
            "custom-class": u.optionsClass
          }, null, 8, ["option", "download", "text", "custom-class"])) : u.type === H(Z).Number ? (F(), se("div", {
            key: 8,
            class: "lkt-field--read-value",
            innerHTML: u.title,
            title: u.title
          }, null, 8, Dr)) : (F(), se("div", {
            key: 9,
            class: "lkt-field--read-value",
            innerHTML: H(n),
            title: u.title
          }, null, 8, Vr))
        ], 64))
      ]);
    };
  }
}), Fr = ["name", "id", "disabled", "readonly", "placeholder", "accept"], Or = ["click-ref", "disabled"], Ur = { class: "lkt-grid-1" }, Pr = /* @__PURE__ */ ve({
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
    const o = i, l = e, a = Y(null), d = Y(null), f = Y(l.modelValue), n = Y(l.fileName), g = Y(l.uploading), u = (k) => {
      let E = k.target;
      if (E.files && E.files[0]) {
        n.value = E.files[0].name;
        const S = new FileReader();
        S.onload = (R) => {
          if (f.value = R.target.result, l.resource) {
            g.value = !0, o("uploading");
            let s = JSON.parse(JSON.stringify(l.resourceData));
            s.files = E.files[0], Wi(l.resource, s).then((r) => {
              if (g.value = !1, !r.success) {
                o("upload-error", r);
                return;
              }
              f.value = r.data, o("upload-success", r);
            }).catch((r) => {
              g.value = !1, o("upload-error", r);
            });
          }
        }, S.readAsDataURL(E.files[0]);
      }
      o("change", k);
    };
    fe(f, (k) => o("update:modelValue", k)), fe(n, (k) => o("update:fileName", k)), t({
      click: () => {
        var k;
        console.log("file-input click", d.value, l.resource, l.resourceData), (k = d.value) == null || k.click();
      }
    });
    const v = Y(!1);
    return (k, E) => {
      const S = re("lkt-image"), R = re("lkt-button");
      return F(), se(Ue, null, [
        le("input", {
          ref_key: "inputElement",
          ref: a,
          type: "file",
          name: k.name,
          id: k.id,
          disabled: k.disabled,
          readonly: k.readonly,
          placeholder: k.placeholder,
          accept: k.accept,
          onChange: u
        }, null, 40, Fr),
        v.value ? k.isImage ? k.isImage ? (F(), se("div", {
          key: 2,
          "click-ref": a.value,
          disabled: k.disabled
        }, [
          k.isImage ? (F(), K(S, {
            key: 0,
            src: f.value,
            class: "lkt-field--image-cover"
          }, null, 8, ["src"])) : oe("", !0),
          k.isImage ? (F(), K(S, {
            key: 1,
            src: f.value,
            class: "lkt-field--image-main"
          }, {
            overlay: de(() => [
              le("div", null, [
                le("div", Ur, [
                  Q(R, {
                    ref_key: "buttonRef",
                    ref: d,
                    "click-ref": a.value,
                    text: "Upload",
                    icon: "lkt-icn-upload",
                    disabled: k.disabled
                  }, null, 8, ["click-ref", "disabled"]),
                  Q(R, {
                    ref: "fileBrowserButtonRef",
                    text: "Explore files",
                    icon: "lkt-icn-search",
                    disabled: k.disabled
                  }, null, 8, ["disabled"])
                ])
              ])
            ]),
            _: 1
          }, 8, ["src"])) : oe("", !0)
        ], 8, Or)) : oe("", !0) : (F(), K(R, {
          key: 1,
          ref_key: "buttonRef",
          ref: d,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: n.value,
          disabled: k.disabled
        }, null, 8, ["click-ref", "text", "disabled"])) : (F(), K(R, {
          key: 0,
          ref_key: "buttonRef",
          ref: d,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: k.isImage ? "" : n.value,
          disabled: k.disabled
        }, {
          default: de(() => [
            k.isImage ? (F(), K(S, {
              key: 0,
              src: f.value,
              class: "lkt-field--image-cover"
            }, null, 8, ["src"])) : oe("", !0),
            k.isImage ? (F(), K(S, {
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
}), Wr = { class: "lkt-calendar" }, $r = { class: "calendar" }, Zr = { class: "lkt-calendar--header-grid" }, qr = ["innerHTML"], jr = {
  key: 0,
  class: "lkt-calendar--day-grid"
}, Gr = { class: "lkt-calendar--day lkt-calendar--filling-day" }, Kr = /* @__PURE__ */ ve({
  __name: "LktCalendar",
  props: {
    modelValue: {}
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const i = t, o = e, l = Y(o.modelValue);
    fe(() => o.modelValue, (h) => l.value = h, { deep: !0 }), fe(l, (h) => i("update:modelValue", h));
    const a = Y(/* @__PURE__ */ new Date()), d = Y(/* @__PURE__ */ new Date());
    Ki(l.value) && typeof l.value < "u" && (d.value = new Date(l.value.getFullYear(), l.value.getMonth(), l.value.getDate()));
    const f = Y(d.value.getFullYear()), n = Y(d.value.getMonth()), g = Y(!1), u = Y(Wt("Y-m", d.value)), v = ee(() => new Date(f.value, n.value + 1, 0).getDate()), k = ee(() => new Date(f.value, n.value, 1).getDay()), E = () => {
      n.value > 11 && (n.value = 0, f.value += 1), n.value += 1, d.value.setFullYear(f.value, n.value), d.value = new Date(d.value), u.value = Wt("Y-m", d.value);
    }, S = () => {
      n.value < 0 && (n.value = 11, f.value -= 1), n.value -= 1, d.value.setFullYear(f.value, n.value), d.value = new Date(d.value), u.value = Wt("Y-m", d.value);
    }, R = (h) => typeof l.value > "u" || l.value.getFullYear() !== f.value || l.value.getMonth() !== n.value ? !1 : l.value.getDate() === h, s = (h) => typeof l.value > "u" || a.value.getFullYear() !== f.value || a.value.getMonth() !== n.value ? !1 : a.value.getDate() === h, r = (h) => ({
      "is-picked": R(h),
      "is-today": s(h)
    }), c = (h) => {
      var m;
      (m = l.value) == null || m.setFullYear(f.value, n.value, h), l.value = new Date(l.value);
    };
    return (h, m) => {
      const b = re("lkt-button");
      return F(), se("div", Wr, [
        le("div", $r, [
          le("header", Zr, [
            Q(b, {
              class: "lkt-calendar--day",
              onClick: S
            }, {
              default: de(() => m[0] || (m[0] = [
                It("◀")
              ])),
              _: 1
            }),
            le("div", {
              class: "lkt-calendar--header-text",
              innerHTML: u.value
            }, null, 8, qr),
            Q(b, {
              class: "lkt-calendar--day",
              onClick: E
            }, {
              default: de(() => m[1] || (m[1] = [
                It("▶")
              ])),
              _: 1
            })
          ]),
          g.value ? oe("", !0) : (F(), se("div", jr, [
            m[2] || (m[2] = go('<div class="lkt-calendar--day lkt-calendar--week-day">Su</div><div class="lkt-calendar--day lkt-calendar--week-day">Mo</div><div class="lkt-calendar--day lkt-calendar--week-day">Tu</div><div class="lkt-calendar--day lkt-calendar--week-day">We</div><div class="lkt-calendar--day lkt-calendar--week-day">Th</div><div class="lkt-calendar--day lkt-calendar--week-day">Fr</div><div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>', 7)),
            (F(!0), se(Ue, null, nt(k.value, (p) => (F(), se("div", Gr))), 256)),
            (F(!0), se(Ue, null, nt(v.value, (p) => (F(), K(b, {
              class: je(["lkt-calendar--day", r(p)]),
              text: p.toString(),
              onClick: () => c(p)
            }, null, 8, ["class", "text", "onClick"]))), 256))
          ]))
        ]),
        m[3] || (m[3] = le("div", { class: "display-selected" }, [
          le("p", { class: "selected" })
        ], -1))
      ]);
    };
  }
}), Yr = /* @__PURE__ */ ve({
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
    const i = t, o = e, l = Y(void 0), a = Y(""), d = Y(o.modelValue), f = ee(() => te.dateReadFormat ? te.dateReadFormat : te.langDateReadFormat[o.lang] ? te.langDateReadFormat[o.lang] : te.defaultDateReadFormat ? te.defaultDateReadFormat : "Y-m-d"), n = (u) => {
      let v = new Date(u);
      Ki(v) && (l.value = v);
    }, g = () => {
      a.value = wn(l.value, f.value);
    };
    return fe(() => o.modelValue, (u) => {
      d.value = u, n(u);
    }), fe(d, (u) => i("update:modelValue", u)), fe(l, (u) => {
      typeof u > "u" ? d.value = "" : d.value = Wt("Y-m-d", u), g();
    }, { deep: !0 }), ji(() => {
      n(o.modelValue), g();
    }), (u, v) => {
      const k = re("lkt-button");
      return F(), K(k, {
        type: H(Ri).Tooltip,
        class: "lkt-field--toggle-button",
        text: a.value,
        tooltip: {
          class: "lkt-field--date--tooltip",
          locationY: H(vn).Bottom,
          locationX: H(gn).LeftCorner
        }
      }, {
        tooltip: de(() => [
          Q(Kr, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (E) => l.value = E)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["type", "text", "tooltip"]);
    };
  }
}), cn = (e, t) => typeof e == "object" && !Array.isArray(e) ? e[t] : e, Pi = (e, t, i) => {
  if (t) {
    let o = '<i class="' + t + '"></i>';
    i ? e += o : e = o + e;
  }
  return e;
}, Xr = { key: 1 }, Gn = /* @__PURE__ */ ve({
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
    itemType: { default: "" }
  },
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: t }) {
    const o = Y(e.modelValue), l = (a, d) => {
    };
    return (a, d) => {
      const f = re("lkt-button");
      return F(), K(f, {
        modal: a.modal,
        "modal-key": a.modalKey,
        "modal-data": a.modalData,
        onClick: l
      }, {
        default: de(() => [
          o.value ? et(a.$slots, "item", {
            key: 0,
            item: o.value
          }) : (F(), se("p", Xr, "No data"))
        ]),
        _: 3
      }, 8, ["modal", "modal-key", "modal-data"]);
    };
  }
}), Jr = /* @__PURE__ */ ve({
  __name: "MultipleCardInput",
  props: {
    modelValue: { default: () => [] },
    editable: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] },
    focusing: { type: Boolean },
    hadFirstFocus: { type: Boolean },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    tabindex: {},
    modal: {},
    modalKey: {},
    modalData: {},
    itemType: { default: "" }
  },
  setup(e) {
    const t = Gi(), i = e, o = Y(i.modelValue), l = ee(() => typeof i.max == "boolean" || o.value.length < i.max ? ["modal-create"] : []);
    return (a, d) => {
      const f = re("lkt-table");
      return F(), K(f, {
        type: "item",
        modelValue: o.value,
        "onUpdate:modelValue": d[0] || (d[0] = (n) => o.value = n),
        perms: l.value,
        "edit-mode": a.editable,
        "new-value-generator": () => {
        },
        modal: a.modal,
        "modal-key": a.modalKey,
        "modal-data": a.modalData,
        "required-items-for-top-create": 999999
      }, {
        item: de(({ item: n, index: g, isLoading: u, canCreate: v, canRead: k, canUpdate: E, canDrop: S, doDrop: R }) => [
          Q(Gn, {
            modelValue: o.value[g],
            "onUpdate:modelValue": (s) => o.value[g] = s,
            "item-type": a.itemType
          }, Pt({ _: 2 }, [
            H(t).item ? {
              name: "item",
              fn: de(({ item: s }) => [
                et(a.$slots, "item", {
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
}), St = /* @__PURE__ */ ve({
  __name: "TextElementEditor",
  props: {
    modelValue: { default: "" }
  },
  emits: [
    "input",
    "keydown"
  ],
  setup(e, { emit: t }) {
    const i = t, o = (a) => {
      i("input", a);
    }, l = (a) => {
      i("keydown", a);
    };
    return (a, d) => d[0] || (wl(-1, !0), (d[0] = le("div", {
      contenteditable: "true",
      class: "lkt-element-editable-text",
      onInput: (f) => o(f),
      onKeydown: (f) => l(f),
      innerHTML: a.modelValue
    }, null, 40, ["onInput", "onKeydown", "innerHTML"])).cacheIndex = 0, wl(1), d[0]);
  }
}), Qr = { class: "lkt-element" }, eu = { class: "lkt-element-content" }, tu = {
  key: 0,
  class: "lkt-element-actions"
}, iu = { class: "lkt-element-tooltip-menu" }, lu = /* @__PURE__ */ ve({
  __name: "ComponentManager",
  props: {
    modelValue: {
      type: Array,
      required: !0
    },
    layoutSelector: {
      type: String
    }
  },
  emits: [
    "add-text",
    "add-element",
    "elements-reordered",
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const o = Y(e.modelValue), l = Y(!1), a = Y(null), d = t, f = Y(!1), n = Y(null), g = (s, r, c = "text") => {
      const h = r.target.innerHTML.trim();
      o.value[s].type === "text" ? h !== o.value[s].text && (o.value[s].text = h) : h !== o.value[s].props[c] && (o.value[s].props[c] = h), f.value = h.endsWith("/"), f.value && (n.value = s);
    }, u = (s, r) => {
      s.key === "/" && (f.value = !0, n.value = r);
    }, v = (s) => {
      var r;
      (r = a.value) == null || r.doRemoveIndex(s);
    };
    fe(o, (s) => {
      d("update:modelValue", s);
    });
    const k = (s) => {
      switch (s.type) {
        case "lkt-box":
        case "lkt-accordion":
          return !0;
        default:
          return !1;
      }
    }, E = (s) => {
      switch (s.type) {
        case "lkt-box":
        case "lkt-accordion":
        case "lkt-icon":
        case "lkt-image":
          return !0;
        default:
          return !1;
      }
    }, S = (s) => {
      switch (s.type) {
        case "lkt-box":
          return "lkt-field-box-element-config";
        case "lkt-accordion":
          return "lkt-field-accordion-element-config";
        case "lkt-icon":
          return "lkt-field-icon-element-config";
        case "lkt-image":
          return "lkt-field-image-element-config";
        default:
          return "";
      }
    }, R = (s) => {
      if (!s.layout) return "";
      let r = [
        s.layout.amountOfItems.join(" ")
      ].join(" ");
      return r !== "" && (r += " layout-mode"), r;
    };
    return (s, r) => {
      const c = re("component-manager", !0), h = re("lkt-box"), m = re("lkt-accordion"), b = re("lkt-image"), p = re("lkt-icon"), y = re("lkt-button"), C = re("lkt-anchor"), _ = re("lkt-table");
      return F(), se("div", null, [
        Q(_, ge({
          ref_key: "tableRef",
          ref: a,
          class: "lkt-elements-table",
          modelValue: o.value,
          "onUpdate:modelValue": r[0] || (r[0] = (w) => o.value = w)
        }, {
          type: H(bn).Table,
          slotItemVar: "element",
          editMode: !0,
          hideTableHeader: !0,
          perms: [H(xl).Update, H(xl).Sort],
          itemsContainerClass: e.layoutSelector,
          drag: {
            enabled: !0,
            isDisabled: !1,
            canRender: !0,
            isValid: !0
          },
          columns: [
            // {
            //     type: ColumnType.None,
            //     key: 'text',
            //     label: '',
            //     isForRowKey: true,
            // }
          ]
        }), {
          item: de(({ element: w, index: A }) => {
            var z;
            return [
              le("div", Qr, [
                le("div", eu, [
                  w.type === "text" ? (F(), K(St, {
                    key: 0,
                    modelValue: w.text,
                    "onUpdate:modelValue": (L) => w.text = L,
                    onInput: (L) => g(A, L),
                    onKeydown: (L) => u(L, A)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "onKeydown"])) : w.type === "lkt-box" ? (F(), K(h, ge({ key: 1 }, w.props, {
                    icon: w.config.hasHeader && w.config.hasIcon ? w.props.icon : ""
                  }), Pt({
                    default: de(() => [
                      Q(c, {
                        modelValue: w.children,
                        "onUpdate:modelValue": (L) => w.children = L,
                        "layout-selector": R(w)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "layout-selector"])
                    ]),
                    _: 2
                  }, [
                    (z = w.config) != null && z.hasHeader ? {
                      name: "header",
                      fn: de(() => [
                        Q(St, {
                          modelValue: w.props.header,
                          "onUpdate:modelValue": (L) => w.props.header = L,
                          onInput: (L) => g(A, L, "header"),
                          onKeydown: (L) => u(L, A)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "onKeydown"])
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1040, ["icon"])) : w.type === "lkt-accordion" ? (F(), K(m, ge({ key: 2 }, w.props, {
                    icon: w.config.hasIcon ? w.props.icon : ""
                  }), {
                    header: de(() => [
                      Q(St, {
                        modelValue: w.props.header,
                        "onUpdate:modelValue": (L) => w.props.header = L,
                        onInput: (L) => g(A, L, "header"),
                        onKeydown: (L) => u(L, A)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "onKeydown"])
                    ]),
                    default: de(() => [
                      Q(c, {
                        modelValue: w.children,
                        "onUpdate:modelValue": (L) => w.children = L,
                        "layout-selector": R(w)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "layout-selector"])
                    ]),
                    _: 2
                  }, 1040, ["icon"])) : w.type === "lkt-image" ? (F(), K(b, Ve(ge({ key: 3 }, w.props)), {
                    text: de(() => [
                      Q(St, {
                        modelValue: w.props.text,
                        "onUpdate:modelValue": (L) => w.props.text = L,
                        onInput: (L) => g(A, L, "text"),
                        onKeydown: (L) => u(L, A)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "onKeydown"])
                    ]),
                    _: 2
                  }, 1040)) : w.type === "lkt-icon" ? (F(), K(p, ge({ key: 4 }, w.props, {
                    icon: w.config.hasIcon ? w.props.icon : ""
                  }), {
                    text: de(() => [
                      Q(St, {
                        modelValue: w.props.text,
                        "onUpdate:modelValue": (L) => w.props.text = L,
                        onInput: (L) => g(A, L, "text"),
                        onKeydown: (L) => u(L, A)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "onKeydown"])
                    ]),
                    _: 2
                  }, 1040, ["icon"])) : w.type === "lkt-button" ? (F(), K(y, ge({ key: 5 }, w.props, {
                    icon: w.config.hasIcon ? w.props.icon : ""
                  }), {
                    text: de(() => [
                      Q(St, {
                        modelValue: w.props.text,
                        "onUpdate:modelValue": (L) => w.props.text = L,
                        onInput: (L) => g(A, L, "text"),
                        onKeydown: (L) => u(L, A)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "onKeydown"])
                    ]),
                    _: 2
                  }, 1040, ["icon"])) : w.type === "lkt-anchor" ? (F(), K(C, ge({ key: 6 }, w.props, {
                    icon: w.config.hasIcon ? w.props.icon : ""
                  }), {
                    text: de(() => [
                      Q(St, {
                        modelValue: w.props.text,
                        "onUpdate:modelValue": (L) => w.props.text = L,
                        onInput: (L) => g(A, L, "text"),
                        onKeydown: (L) => u(L, A)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "onKeydown"])
                    ]),
                    _: 2
                  }, 1040, ["icon"])) : (F(), K(Lt(w.component), Ve(ge({ key: 7 }, w.props)), null, 16))
                ]),
                l.value ? oe("", !0) : (F(), se("div", tu, [
                  Q(y, Ve(qe({
                    type: H(Ri).Tooltip,
                    text: w.type,
                    icon: "lkt-icn-settings-cogs",
                    tooltip: {
                      windowMargin: 15,
                      referrerMargin: 0,
                      hideOnReferrerLeave: !0,
                      hideOnReferrerLeaveDelay: 500
                    }
                  })), {
                    tooltip: de(({ doClose: L }) => [
                      le("div", iu, [
                        E(w) ? (F(), K(y, Ve(ge({ key: 0 }, {
                          text: "Config",
                          icon: "lkt-icn-settings-files-1",
                          modal: S(w),
                          modalData: {
                            config: w,
                            onUpdate: (N) => {
                              w = N;
                            }
                          }
                        })), null, 16)) : oe("", !0),
                        Q(y, Ve(qe({
                          text: "Add element",
                          icon: "lkt-icn-more",
                          modal: "lkt-field-add-element-config",
                          modalData: {
                            items: o.value,
                            element: w,
                            index: A,
                            onAppend: () => {
                              l.value = !0, Rt(() => {
                                l.value = !1;
                              });
                            },
                            onUpdate: (N) => {
                              w = N;
                            }
                          }
                        })), null, 16),
                        k(w) ? (F(), K(y, Ve(ge({ key: 1 }, {
                          text: "Add children",
                          icon: "lkt-icn-more",
                          modal: "lkt-field-add-element-config",
                          modalData: {
                            items: o.value,
                            element: w,
                            index: A,
                            addingChildren: !0,
                            onAppend: () => {
                              l.value = !0, Rt(() => {
                                l.value = !1;
                              });
                            },
                            onUpdate: (N) => {
                              w = N;
                            }
                          }
                        })), null, 16)) : oe("", !0),
                        k(w) ? (F(), K(y, Ve(ge({ key: 2 }, {
                          text: "Config layout",
                          icon: "lkt-icn-settings-cogs",
                          modal: "lkt-field-element-layout-config",
                          modalData: {
                            items: o.value,
                            element: w,
                            index: A,
                            onUpdate: (N) => {
                              w = N;
                            }
                          }
                        })), null, 16)) : oe("", !0),
                        Q(y, Ve(qe({
                          text: "Remove",
                          icon: "lkt-icn-trash",
                          events: {
                            click: () => {
                              v(A), L();
                            }
                          }
                        })), null, 16)
                      ])
                    ]),
                    _: 2
                  }, 1040)
                ]))
              ])
            ];
          }),
          _: 1
        }, 16, ["modelValue"]),
        oe("", !0)
      ]);
    };
  }
}), nu = { class: "lkt-wysiwyg-container" }, ou = { class: "lkt-wysiwyg-toolbar" }, su = /* @__PURE__ */ ve({
  __name: "ElementsInput",
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const i = Y([
      { type: "text", text: "Escribe algo aquí o " },
      {
        type: "lkt-box",
        props: {
          header: "cabecera de box",
          text: "un componente dinámico",
          icon: "lkt-icn-upload"
        },
        config: {
          hasHeader: !0,
          hasIcon: !0
        },
        children: [],
        layout: {
          type: "grid",
          amountOfItems: []
        }
      },
      {
        type: "lkt-accordion",
        props: {
          text: "contenido del acordeón",
          header: "título del acordeón",
          type: "auto",
          toggleMode: "display",
          icon: "lkt-icn-upload"
        },
        config: {
          hasIcon: !0
        },
        children: [],
        layout: {
          type: "grid",
          amountOfItems: []
        }
      },
      {
        type: "lkt-image",
        props: {
          text: "Dr. Evil",
          src: "https://i.pinimg.com/736x/d4/dc/7a/d4dc7a642bb490972c3443af25e0d179.jpg"
        },
        config: {
          hasIcon: !0
        }
      },
      {
        type: "lkt-icon",
        props: {
          text: "Texto del icono",
          icon: "lkt-icn-download"
        },
        config: {
          hasIcon: !0
        }
      },
      {
        type: "lkt-button",
        props: {
          text: "Texto del botón",
          icon: "lkt-icn-download"
        },
        config: {
          hasIcon: !0
        }
      },
      {
        type: "lkt-anchor",
        props: {
          text: "Texto del anchor",
          icon: "lkt-icn-download"
        },
        config: {
          hasIcon: !0
        }
      },
      { type: "customTag", component: "CustomTag", props: { text: "un componente dinámico" } },
      { type: "text", text: " entre el texto." }
    ]), o = t, l = Y([]);
    let a = Y(-1);
    const d = () => {
      l.value = l.value.slice(0, a.value + 1), l.value.push([...i.value]), a.value = l.value.length - 1;
    }, f = () => {
      d();
    }, n = (c) => {
      i.value.splice(c, 1), d();
    }, g = (c) => {
      document.execCommand(c, !1), d();
    }, u = (c) => {
      const h = c.target.value;
      document.execCommand("foreColor", !1, h), d();
    }, v = (c) => {
      const h = c.target.value;
      document.execCommand("backColor", !1, h), d();
    }, k = (c) => {
      const h = c.target.value;
      document.execCommand("fontSize", !1, h), d();
    }, E = (c) => {
      const h = c.target.value;
      document.execCommand("fontName", !1, h), d();
    }, S = (c) => {
      document.execCommand("justify" + c, !1), d();
    }, R = () => {
      a.value > 0 && (a.value--, i.value = [...l.value[a.value]]);
    }, s = () => {
      a.value < l.value.length - 1 && (a.value++, i.value = [...l.value[a.value]]);
    }, r = () => {
      const c = prompt("Ingrese la URL del enlace:");
      c && (document.execCommand("createLink", !1, c), d());
    };
    return fe(i, (c) => {
      o("update:modelValue", c);
    }, { deep: !0 }), (c, h) => (F(), se("div", nu, [
      le("div", ou, [
        le("button", {
          onClick: h[0] || (h[0] = (m) => g("bold"))
        }, "Negrita"),
        le("button", {
          onClick: h[1] || (h[1] = (m) => g("italic"))
        }, "Cursiva"),
        le("button", {
          onClick: h[2] || (h[2] = (m) => g("underline"))
        }, "Subrayado"),
        le("button", {
          onClick: h[3] || (h[3] = (m) => g("strikeThrough"))
        }, "Tachado"),
        le("button", {
          onClick: h[4] || (h[4] = (m) => g("subscript"))
        }, "Subíndice"),
        le("button", {
          onClick: h[5] || (h[5] = (m) => g("superscript"))
        }, "Superíndice"),
        le("input", {
          type: "color",
          onInput: u,
          title: "Color del texto"
        }, null, 32),
        le("input", {
          type: "color",
          onInput: v,
          title: "Color de fondo"
        }, null, 32),
        le("select", {
          onChange: h[6] || (h[6] = (m) => k(m))
        }, h[14] || (h[14] = [
          le("option", { value: "3" }, "Mediano", -1),
          le("option", { value: "5" }, "Grande", -1),
          le("option", { value: "7" }, "Extra Grande", -1)
        ]), 32),
        le("select", {
          onChange: h[7] || (h[7] = (m) => E(m))
        }, h[15] || (h[15] = [
          le("option", { value: "Arial" }, "Arial", -1),
          le("option", { value: "Courier New" }, "Courier New", -1),
          le("option", { value: "Georgia" }, "Georgia", -1),
          le("option", { value: "Times New Roman" }, "Times New Roman", -1)
        ]), 32),
        le("button", {
          onClick: h[8] || (h[8] = (m) => S("left"))
        }, "Alineación izquierda"),
        le("button", {
          onClick: h[9] || (h[9] = (m) => S("center"))
        }, "Centrar"),
        le("button", {
          onClick: h[10] || (h[10] = (m) => S("right"))
        }, "Alineación derecha"),
        le("button", {
          onClick: h[11] || (h[11] = (m) => g("insertUnorderedList"))
        }, "Lista no ordenada"),
        le("button", {
          onClick: h[12] || (h[12] = (m) => g("insertOrderedList"))
        }, "Lista ordenada"),
        le("button", { onClick: r }, "Insertar Enlace"),
        le("button", { onClick: R }, "Deshacer"),
        le("button", { onClick: s }, "Rehacer")
      ]),
      Q(lu, {
        modelValue: i.value,
        "onUpdate:modelValue": h[13] || (h[13] = (m) => i.value = m),
        onDeleteElement: n,
        onAddElement: f
      }, null, 8, ["modelValue"])
    ]));
  }
}), au = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [o, l] of t)
    i[o] = l;
  return i;
}, ru = /* @__PURE__ */ au(su, [["__scopeId", "data-v-0aac587d"]]), uu = /* @__PURE__ */ ve({
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
    const i = t, o = e, l = ee(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), a = () => i("click");
    return (d, f) => {
      const n = re("lkt-button");
      return F(), K(n, ge(d.config, {
        type: d.config.type ? d.config.type : H(Ri).FileUpload,
        resource: d.config.resource ?? d.fileUploadHttp.resource,
        "resource-data": d.config.resourceData ?? d.fileUploadHttp.data,
        text: d.insideEllipsis ? d.config.text : "",
        class: [l.value, "lkt-field--btn-file-upload"],
        icon: "lkt-icn-upload",
        onClick: a
      }), null, 16, ["type", "resource", "resource-data", "text", "class"]);
    };
  }
}), du = ["data-show-ui", "data-labeled"], cu = ["for", "innerHTML"], fu = { class: "lkt-field-content" }, hu = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, pu = {
  key: 1,
  class: "lkt-field--icon"
}, mu = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], gu = ["value", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], vu = {
  key: 4,
  class: "lkt-field--info-nav"
}, bu = { key: 0 }, yu = ["data-index", "onClick"], $e = /* @__PURE__ */ ve({
  __name: "LktField",
  props: /* @__PURE__ */ vo({
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
    customButtonText: {},
    customButtonClass: {},
    events: {}
  }, Ut(To)),
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
    const o = i, l = Gi(), a = e, d = _o(16);
    let f = yt(a.modal, a.prop), n = yt(a.modalKey, a.prop), g = yt(a.icon, a.prop), u = yt(a.download, a.prop), v = yt(a.itemType, a.prop);
    !f && typeof v != "function" && v && typeof te.modalPerItemType[v] < "u" && (f = te.modalPerItemType[v]);
    const k = Y(null);
    let E = a.featuredButton, S = a.modelValue;
    a.multiple && ko.includes(a.type) ? (!S || !Array.isArray(S)) && (S = []) : _t.includes(a.type) ? typeof S != "boolean" && (S = !1) : a.type === Z.Date && !g ? g = te.defaultDateIcon : a.type === Z.Number && a.canStep && E === "" && (E = te.defaultNumberFeaturedButton);
    const R = Y(S), s = Y(S), r = Y(a.valid), c = Y(!1), h = Y(!1), m = Y(!1), b = Y(!1), p = Y([]), y = Y(!a.readMode), C = Y(a.fileName), _ = Y(a.fileName), w = Y(null), A = Y(null), z = Y(null), L = Y(!1), N = Y(!1), $ = Y(!1), W = Y(""), O = Y(-1), D = Y([]), P = Y(!1), I = Y(!1), V = Y(!1), B = ee(() => pn.value), U = ee(() => (B.value, te.dateReadFormat ? te.dateReadFormat : te.langDateReadFormat[B.value] ? te.langDateReadFormat[B.value] : te.defaultDateReadFormat ? te.defaultDateReadFormat : "Y-m-d")), x = a.type === Z.Card ? s : Y(cn(s.value, B.value)), M = Y(x), j = Y([]), q = Y([]), ie = () => {
      const T = (G) => {
        if (q.value = Ui(j.value, G), a.multiple) {
          for (let we in x.value) {
            let ze;
            a.optionValueType === "option" ? ze = ei(j.value, x.value[we].value) : ze = ei(j.value, x.value[we]), typeof ze < "u" && (D.value.length === 0 ? D.value.push(ze) : D.value.splice(we, 1, ze));
          }
          return;
        }
        let ue;
        a.optionValueType === "option" ? ue = ei(j.value, x.value.map((we) => we.value)) : ue = ei(j.value, x.value), typeof ue < "u" && (D.value.length === 0 ? D.value.push(ue) : D.value.splice(0, 1, ue));
      };
      a.type === Z.Text ? T(x.value) : a.type === Z.Select && T(W.value);
    }, X = ee(() => a.type === Z.Date), J = ee(() => a.type === Z.File), ne = ee(() => a.type === Z.Image), he = ee(() => a.type === Z.Textarea ? "textarea" : a.type === Z.Html ? "div" : "input"), me = ee(() => a.type === Z.Date ? s.value !== R.value : x.value !== M.value), ae = ee(() => typeof a.disabled == "function" ? a.disabled(a.prop) : a.disabled), be = ee(() => {
      let T = 0;
      return tl.value && ++T, il.value && ++T, ll.value && ++T, nl.value && ++T, sl.value && ++T, al.value && ++T, ol.value && ++T, Nt.value && ++T, Ji.value && ++T, (a.customButtonText || a.customButtonClass) && ++T, T > 0 && a.type === Z.Textarea || T > 0 && a.type === Z.Html || T > 0 && a.infoButtonEllipsis ? 1 : T;
    }), Le = ee(() => Di.value && E === "i18n" || jt.value && E === "password" || Ge.value && E === "subtract"), Oe = ee(() => be.value > 0), _e = ee(() => a.autocomplete === !0 ? "on" : "off"), Te = ee(() => a.type === Z.Date ? s.value !== "" : x.value !== ""), Se = ee(() => a.type === Z.Password && c.value === !0 ? "text" : a.type === Z.Email ? "email" : a.type === Z.Password ? "password" : a.type === Z.Number ? "number" : a.type === Z.Tel ? "tel" : a.type === Z.Search ? "search" : a.type === Z.Color ? "color" : a.type === Z.Range ? "range" : "text"), tt = ee(() => {
      var G;
      const T = [];
      return T.push(`is-${a.type}`), _t.includes(a.type) && (T.push("is-boolean"), x.value && T.push("is-checked")), me.value && T.push("is-changed"), ae.value && T.push("is-disabled"), a.multiple && T.push("is-multiple"), Le.value && T.push("with-atn-btn"), Oe.value && T.push("with-info-btn"), a.mandatory && y.value && T.push("is-mandatory-field"), y.value && h.value && T.push("has-focus"), L.value && T.push("show-options"), a.searchable && P.value && T.push("is-searching"), a.hidden && T.push("lkt-hidden-field"), a.type !== Z.Range && ((G = a.validation) == null ? void 0 : G.type) === Sl.Auto && b.value && m.value && (p.value.length > 0 ? T.push("is-invalid") : T.push("is-valid")), [Z.Textarea, Z.Html].includes(a.type) && T.push("is-lg"), [Z.Image].includes(a.type) && T.push("is-xl"), a.multiple && a.type === Z.Select && T.push("is-lg"), a.multiple && (y.value ? T.push(`has-multiple-display-${a.multipleDisplayEdition}`) : T.push(`has-multiple-display-${a.multipleDisplay}`)), be.value > 0 && T.push("has-icons", `has-icons-${be.value}`), T.push(y.value ? "is-editable" : "is-read"), a.type !== Z.Range && (T.push(r.value ? "is-valid" : "is-error"), T.push(Te.value ? "is-filled" : "is-empty")), T.join(" ");
    }), Re = ee(() => {
      var T;
      return typeof x.value == "number" ? (B.value, (T = te.langNumberFormat[B.value]) != null && T.amountOfDecimals ? kl(
        x.value,
        te.langNumberFormat[B.value].amountOfDecimals,
        te.langNumberFormat[B.value].decimalSeparator,
        te.langNumberFormat[B.value].thousandsSeparator,
        te.langNumberFormat[B.value].removeDecimalsIfZero
      ) : te.amountOfDecimals ? kl(
        x.value,
        te.amountOfDecimals,
        te.decimalSeparator,
        te.thousandsSeparator,
        te.removeDecimalsIfZero
      ) : x.value.toString()) : a.type === Z.Html ? fn(x.value) : x.value;
    }), We = ee(() => typeof a.min == "string" ? parseFloat(a.min) : typeof a.min == "number" ? a.min : !1), Ie = ee(() => typeof a.max == "string" ? parseFloat(a.max) : typeof a.max == "number" ? a.max : !1), ye = ee(() => {
      var T, G, ue, we;
      if (_t.includes(a.type)) {
        if (x.value === !0 && typeof a.configOn == "object")
          return Pi(
            Ot(((T = a.configOn) == null ? void 0 : T.label) ?? a.label),
            ((G = a.configOn) == null ? void 0 : G.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
        if (x.value !== !0 && typeof a.configOff == "object")
          return Pi(
            Ot(((ue = a.configOff) == null ? void 0 : ue.label) ?? a.label),
            ((we = a.configOff) == null ? void 0 : we.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
      }
      return Pi(
        Ot(a.label),
        a.labelIcon,
        a.labelIconAtEnd
      );
    }), Tt = ee(() => Ot(a.placeholder)), it = ee(() => Ot(a.searchPlaceholder)), He = ee(() => typeof f == "function" ? f(a.prop) : yt(f, a.prop)), Ee = ee(() => typeof a.modalData == "function" ? a.modalData(a.prop) : a.modalData), Fe = ee(() => typeof g == "function" ? g(a.prop) : yt(g, a.prop)), Me = ee(() => a.type === Z.File ? te.acceptTypes.file : a.type === Z.Image ? te.acceptTypes.image : ""), zt = ee(() => a.errorMessage), Bt = ee(() => a.infoMessage), Ge = ee(() => a.canStep && y.value && a.type === Z.Number), Nt = ee(() => a.canStep && y.value && a.type === Z.Number && E !== "subtract"), Ji = ee(() => a.canStep && y.value && a.type === Z.Number), Qi = ee(() => a.canUndo && me.value && y.value && !xo.includes(a.type)), el = ee(() => a.canClear && Te.value && y.value && !So.includes(a.type)), Di = ee(() => a.canI18n && typeof s.value == "object" && y.value), jt = ee(() => a.type === Z.Password && a.showPassword && Te.value && y.value), tl = ee(() => Qi.value && !a.infoButtonEllipsis), il = ee(() => el.value && !a.infoButtonEllipsis), ll = ee(() => jt.value && !a.infoButtonEllipsis && E !== "password"), nl = ee(() => Di.value && !a.infoButtonEllipsis && E !== "i18n"), ol = ee(() => {
      var T, G, ue, we;
      return a.type === Z.Calc || a.type === Z.Search || ![Z.Select, Z.Text].includes(a.type) ? !1 : q.value.length > 0 || j.value.length > 0 || typeof ((G = (T = a.optionsConfig) == null ? void 0 : T.http) == null ? void 0 : G.resource) < "u" && ((we = (ue = a.optionsConfig) == null ? void 0 : ue.http) == null ? void 0 : we.resource) !== "";
    }), sl = ee(() => a.allowReadModeSwitch && !a.infoButtonEllipsis), al = ee(() => typeof a.fileUploadButton == "object" && Object.keys(a.fileUploadButton).length > 0), rl = () => {
      Rt(() => {
        k.value && k.value.focus();
      });
    }, Kn = async () => {
      var T;
      if ((T = a.validation) != null && T.resource) {
        o("validating");
        const G = await Wi(a.validation.resource, {
          ...a.validation.resourceData,
          value: x.value
        });
        o("validation", G);
      }
    };
    fe(() => {
      var T;
      return (T = a.validation) == null ? void 0 : T.checkEqualTo;
    }, () => At()), fe(() => a.readMode, (T) => y.value = !T), fe(() => a.valid, (T) => r.value = T), fe(() => a.modelValue, (T) => {
      a.type === Z.Card ? x.value = T : a.type !== Z.Date && (x.value = cn(T, B.value));
    }), fe(x, (T) => {
      typeof s.value == "object" && a.type === Z.Card ? s.value[B.value] = T : s.value = T, a.type === Z.Number && ro(T);
    }), fe(s, (T) => {
      $.value && y.value && (o("update:modelValue", T), Kn(), At());
    }, { deep: !0 }), fe(r, (T) => {
      o("update:valid", T);
    }), fe(j, (T) => {
      o("update:options", T);
    }), fe(() => a.options, (T) => {
      j.value = Ni(T, a.prop), a.type === Z.Select ? Mt(W.value, !1) : Mt(x.value, !1);
    });
    const At = () => {
      var T;
      ((T = a.validation) == null ? void 0 : T.trigger) === Eo.Blur && (!m.value || !b.value) || a.type !== Z.Range && (p.value = [], Rt(() => {
        var we, ze, De, Ke, Ye, Xe, Je, ot, st, at, rt, ut, dt;
        let G = typeof a.min > "u" ? 0 : parseFloat(a.min), ue = typeof a.max > "u" ? 0 : parseFloat(a.max);
        if (a.type === Z.Number && typeof a.min < "u" && typeof a.max < "u" && (x.value < G || x.value > ue)) {
          p.value.push(Be.createNumBetween(G, ue, Ne.Ko)), r.value = !1;
          return;
        }
        ![Z.Number, Z.Email].includes(a.type) && a.mandatory && x.value === "" ? p.value.push(Be.createEmpty(Ne.Ko)) : a.type !== Z.Email && G > 0 && (a.type !== Z.Number && x.value.length < G ? p.value.push(Be.createMinStr(G, Ne.Ko)) : x.value < G && p.value.push(Be.createMinNum(G, Ne.Ko))), ue > 0 && (a.type !== Z.Number && x.value.length > ue ? p.value.push(Be.createMaxStr(ue, Ne.Ko)) : x.value > ue && p.value.push(Be.createMaxNum(ue, Ne.Ko))), a.type === Z.Email && (a.mandatory && x.value === "" ? p.value.push(Be.createEmpty(Ne.Ko)) : Co(x.value) || p.value.push(Be.createEmail(Ne.Ko))), Lo.includes(a.type) && (Ko(p.value, x.value, (we = a.validation) == null ? void 0 : we.minNumbers, (ze = a.validation) == null ? void 0 : ze.maxNumbers), Yo(p.value, x.value, (De = a.validation) == null ? void 0 : De.minUpperChars, (Ke = a.validation) == null ? void 0 : Ke.maxUpperChars), Xo(p.value, x.value, (Ye = a.validation) == null ? void 0 : Ye.minLowerChars, (Xe = a.validation) == null ? void 0 : Xe.maxLowerChars), Jo(p.value, x.value, (Je = a.validation) == null ? void 0 : Je.minChars, (ot = a.validation) == null ? void 0 : ot.maxChars), Qo(p.value, x.value, (st = a.validation) == null ? void 0 : st.minSpecialChars, (at = a.validation) == null ? void 0 : at.maxSpecialChars)), (rt = a.validation) != null && rt.checkEqualTo && x.value !== ((ut = a.validation) == null ? void 0 : ut.checkEqualTo) && p.value.push(Be.createEqualTo((dt = a.validation) == null ? void 0 : dt.checkEqualTo, Ne.Ko)), r.value = p.value.length === 0;
      }));
    }, Mt = (T, G = !0) => {
      var ue, we, ze, De, Ke, Ye, Xe, Je;
      if (j.value.length === 0) {
        q.value = [];
        return;
      }
      switch (a.type) {
        case Z.Select:
          a.searchable ? q.value = Ui(j.value, T, !0) : q.value = j.value, N.value = !1, G && (L.value = typeof ((we = (ue = a.optionsConfig) == null ? void 0 : ue.http) == null ? void 0 : we.resource) < "u" && ((De = (ze = a.optionsConfig) == null ? void 0 : ze.http) == null ? void 0 : De.resource) !== "" || q.value.length > 0), ie();
          return;
        case Z.Text:
        case Z.Search:
          q.value = Ui(j.value, T, !1), N.value = !1, G && (L.value = typeof ((Ye = (Ke = a.optionsConfig) == null ? void 0 : Ke.http) == null ? void 0 : Ye.resource) < "u" && ((Je = (Xe = a.optionsConfig) == null ? void 0 : Xe.http) == null ? void 0 : Je.resource) !== "" || q.value.length > 0);
          return;
      }
    }, Gt = async (T, G = !0) => {
      var ue, we, ze, De, Ke, Ye, Xe, Je, ot, st, at, rt, ut, dt, Ht, Ft, ke, ct, ft, ht, pt, mt, gt, vt;
      if (!(!y.value && !((ue = a.optionsConfig) != null && ue.autoloadResource) && !I.value) && ![
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
        if (N.value = !1, (we = a.optionsConfig) != null && we.autoloadResource && !I.value && (V.value = !0), typeof ((De = (ze = a.optionsConfig) == null ? void 0 : ze.http) == null ? void 0 : De.resource) < "u" && ((Ye = (Ke = a.optionsConfig) == null ? void 0 : Ke.http) == null ? void 0 : Ye.resource) !== "") {
          N.value = !0;
          let lt = {};
          typeof ((Je = (Xe = a.optionsConfig) == null ? void 0 : Xe.http) == null ? void 0 : Je.data) == "object" && (lt = { ...a.optionsConfig.http.data }), te.searchKeyForResource !== "" && (lt[te.searchKeyForResource] = T), (at = (st = (ot = a.optionsConfig) == null ? void 0 : ot.http) == null ? void 0 : st.events) != null && at.onStart && typeof ((dt = (ut = (rt = a.optionsConfig) == null ? void 0 : rt.http) == null ? void 0 : ut.events) == null ? void 0 : dt.onStart) == "function" && a.optionsConfig.http.events.onStart();
          const Qe = await Wi((Ft = (Ht = a.optionsConfig) == null ? void 0 : Ht.http) == null ? void 0 : Ft.resource, lt);
          (ft = (ct = (ke = a.optionsConfig) == null ? void 0 : ke.http) == null ? void 0 : ct.events) != null && ft.onEnd && typeof ((mt = (pt = (ht = a.optionsConfig) == null ? void 0 : ht.http) == null ? void 0 : pt.events) == null ? void 0 : mt.onEnd) == "function" && a.optionsConfig.http.events.onEnd(Qe);
          const kt = Array.isArray(Qe.data) && Qe.data.length > 0;
          N.value = !1, kt && (j.value = Mo(j.value, Qe.data, a.prop), Mt(T, G), (gt = a.optionsConfig) != null && gt.autoloadResource && !I.value && (((vt = a.optionsConfig) == null ? void 0 : vt.autoloadResource) === "feed" && (a.multiple ? q.value.forEach((Qt) => {
            Dt(Qt);
          }) : q.value.length > 0 && Dt(q.value[0])), I.value = !0, V.value = !1), o("options-loaded", Qe.data));
        } else
          Mt(T, G);
    }, Vi = (T) => {
      var we, ze;
      let G = q.value.length - 1;
      if (G === -1) return;
      const ue = T.key ?? "";
      if (h.value)
        if (["ArrowDown", "ArrowUp", "Enter"].includes(ue) && (T.preventDefault(), T.stopPropagation()), ue === "ArrowDown") {
          ++O.value, O.value > G && (O.value = 0);
          let De = (we = z.value) == null ? void 0 : we.querySelector('[data-index="' + O.value + '"]');
          De && De.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else if (ue === "ArrowUp") {
          --O.value, O.value < 0 && (O.value = G);
          let De = (ze = z.value) == null ? void 0 : ze.querySelector('[data-index="' + O.value + '"]');
          De && De.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else ue === "Enter" && O.value > -1 && Dt(q.value[O.value]);
    }, Hi = () => {
      if (a.type === Z.Html) {
        k.value && k.value.setValue(M.value);
        return;
      } else if (a.type === Z.Date) {
        s.value = R.value;
        return;
      } else if (a.type === Z.File) {
        s.value = R.value, _.value = C.value;
        return;
      }
      x.value = M.value;
    }, ul = () => {
      if (a.type === Z.Html) {
        k.value && k.value.setValue("");
        return;
      } else if (a.type === Z.Date) {
        s.value = "";
        return;
      } else if (a.type === Z.File) {
        s.value = "", _.value = "";
        return;
      } else if (a.type === Z.Select) {
        x.value = a.multiple ? [] : "", D.value = [];
        return;
      }
      x.value = "";
    }, Yn = () => x.value, dl = (T) => {
      At(), El.includes(a.type) ? (Gt(x.value), Vi(T)) : a.type === Z.Select && Vi(T), o("keyup", T);
    }, cl = () => {
      k.value && k.value.keepFocused();
    }, Xn = () => {
      if (L.value) {
        if (a.type === Z.Select) {
          pl();
          return;
        }
        return Yt();
      }
      if (a.type === Z.Select) {
        hl();
        return;
      }
      return Kt();
    }, Dt = (T) => {
      if (!T.disabled)
        if (a.multiple) {
          let G;
          a.optionValueType === "option" ? G = Bl(T, x.value.map((ue) => ue.value)) : G = Bl(T, x.value), G === -1 ? (a.optionValueType === "option" ? x.value.push(T.value) : x.value.push(String(T.value)), D.value.push(T)) : (x.value.splice(G, 1), D.value.splice(G, 1)), cl(), o("selected-option", T);
        } else
          O.value = -1, a.optionValueType === "option" ? x.value = T : x.value = String(T.value), D.value.splice(0, 1, T), L.value = !1, P.value = !1, o("selected-option", T);
    }, fl = (T) => o("keydown", T), Kt = (T) => {
      b.value = !0, h.value = !0, At(), o("focus", T);
    }, Yt = (T) => {
      setTimeout(() => {
        if (!(a.searchable && P.value)) {
          if (a.multiple) {
            L.value = !0, h.value = !0;
            return;
          }
          m.value = !0, O.value = -1, L.value = !1, h.value = !1, At(), o("blur", T);
        }
      }, 100);
    }, Xt = (T) => {
      b.value = !0, h.value = !0, o("focus", T);
    }, Jt = (T) => {
      m.value = !0, h.value = !1, o("blur", T);
    }, Jn = (T) => {
      Vi(T);
    }, Qn = (T) => {
      W.value = T, Gt(T);
    }, eo = (T) => {
      let G = new Bi({
        value: T,
        label: T
      });
      D.value.findIndex((we) => we.value === G.value) === -1 && (j.value.push(G), q.value.push(G), Dt(G)), W.value = "";
    }, to = (T) => {
      let G = D.value.findIndex((ue) => ue.value === T.value);
      G >= 0 && (D.value.splice(G, 1), j.value.splice(
        j.value.findIndex((ue) => ue.value === T.value),
        1
      ), q.value.splice(
        q.value.findIndex((ue) => ue.value === T.value),
        1
      )), W.value = "";
    }, hl = () => {
      var T, G;
      if (b.value = !0, h.value = !0, !((G = (T = a.optionsConfig) == null ? void 0 : T.http) != null && G.resource) && q.value.length === 0) {
        L.value = !1;
        return;
      }
      L.value = !0, At(), Gt(W.value, !1), a.searchable && cl(), o("focus");
    }, pl = () => {
      m.value = !0, h.value = !1, o("blur");
    }, Fi = (T) => {
      o("change", T);
    }, Vt = (T) => {
      o("click", T);
    }, io = (T) => o("click-info", T), lo = (T) => o("click-error", T), ml = () => {
      let T = a.step ?? 1;
      typeof T == "string" && (T = parseFloat(T)), (!a.min || x.value > a.min) && (x.value -= T);
    }, no = () => {
      let T = a.step ?? 1;
      typeof T == "string" && (T = parseFloat(T)), (!a.max || x.value < a.max) && (x.value += T);
    }, oo = () => {
      y.value && rl();
    }, so = () => {
      Tl({
        text: Ae.defaultUploadSuccessText,
        details: Ae.defaultUploadSuccessDetails,
        icon: Ae.defaultUploadSuccessIcon,
        positionX: Ll.Right
      }), o("upload-success");
    }, ao = () => {
      Tl({
        text: Ae.defaultUploadErrorText,
        details: Ae.defaultUploadErrorDetails,
        icon: Ae.defaultUploadErrorIcon,
        positionX: Ll.Right
      }), o("upload-error");
    }, ro = (T) => {
      if (!a.enableAutoNumberFix) return !1;
      let G = Number(T), ue = Io(G, We.value, Ie.value);
      return G !== ue ? (x.value = ue, !0) : !1;
    };
    t({
      Identifier: d,
      reset: Hi,
      focus: rl,
      value: Yn,
      isMandatory: () => a.mandatory,
      click: () => {
        var T;
        switch (console.log("field click method: ", a.type, A.value), a.type) {
          case Z.File:
            return (T = k.value) == null ? void 0 : T.click();
        }
        A.value.click();
      }
    });
    const uo = ee(() => a.editSlot !== "" && typeof te.customEditSlots[a.editSlot] < "u"), co = ee(() => te.customEditSlots[a.editSlot]);
    ji(() => {
      var T;
      j.value = Ni(a.options, a.prop), Mt("", !1), ie(), a.type === Z.Select && (a.multiple && (P.value = !0), (T = a.optionsConfig) != null && T.autoloadResource && Gt("", !1)), $.value = !0;
    });
    const fo = ee(() => _t.includes(a.type) && !ae.value ? "label" : "div"), ho = ee(() => _t.includes(a.type) ? {
      for: d
    } : {}), po = ee(() => {
      switch (a.type) {
        case Z.Select:
          return D.value;
        case Z.Date:
          return wn(s.value, U.value);
        case Z.File:
        case Z.Image:
          return s.value;
        default:
          return x.value;
      }
    });
    return (T, G) => {
      var De, Ke, Ye, Xe, Je, ot, st, at, rt, ut, dt, Ht, Ft;
      const ue = re("lkt-button"), we = re("lkt-loader"), ze = re("lkt-tooltip");
      return F(), se("div", {
        class: je(["lkt-field", tt.value]),
        "data-show-ui": Oe.value,
        "data-labeled": !H(l).label,
        ref_key: "container",
        ref: A
      }, [
        H(l).label ? et(T.$slots, "label", { key: 0 }) : oe("", !0),
        !H(l).label && ye.value !== "" && !H(_t).includes(T.type) ? (F(), se("label", {
          key: 1,
          for: H(d),
          class: "lkt-field--label",
          innerHTML: ye.value
        }, null, 8, cu)) : oe("", !0),
        le("div", fu, [
          Le.value ? (F(), se("div", hu, [
            T.featuredButton === "password" && jt.value ? (F(), K($i, {
              key: 0,
              modelValue: c.value,
              "onUpdate:modelValue": G[0] || (G[0] = (ke) => c.value = ke),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : oe("", !0),
            Di.value && H(E) === "i18n" && T.canI18n ? (F(), K(zl, {
              key: 1,
              modelValue: s.value,
              "onUpdate:modelValue": G[1] || (G[1] = (ke) => s.value = ke),
              "is-featured": "",
              type: T.type
            }, null, 8, ["modelValue", "type"])) : oe("", !0),
            Ge.value && H(E) === "subtract" ? (F(), K(ue, {
              key: 2,
              class: "lkt-field--atn-btn",
              icon: "lkt-icn-less",
              onClick: ml
            })) : oe("", !0)
          ])) : oe("", !0),
          Fe.value ? (F(), se("div", pu, [
            le("i", {
              class: je(Fe.value)
            }, null, 2)
          ])) : oe("", !0),
          y.value ? (F(), K(Lt(fo.value), ge({ key: 2 }, ho.value, { class: "lkt-field-main" }), {
            default: de(() => {
              var ke, ct, ft, ht, pt, mt, gt, vt, lt, Qe, kt, Qt, gl, vl, bl, yl, _l;
              return [
                H(l).edit ? (F(), se("div", {
                  key: 0,
                  onClick: Vt
                }, [
                  et(T.$slots, "edit", {
                    value: s.value,
                    title: Re.value,
                    data: T.slotData
                  })
                ])) : uo.value ? (F(), se("div", {
                  key: 1,
                  onClick: Vt
                }, [
                  (F(), K(Lt(co.value), {
                    value: s.value,
                    title: Re.value,
                    data: T.slotData
                  }, null, 8, ["value", "title", "data"]))
                ])) : H(_t).includes(T.type) ? (F(), K(ss, {
                  key: 2,
                  modelValue: H(x),
                  "onUpdate:modelValue": G[2] || (G[2] = (pe) => Ze(x) ? x.value = pe : null),
                  ref_key: "inputElement",
                  ref: k,
                  id: H(d),
                  name: T.name,
                  type: T.type,
                  label: ye.value,
                  editable: y.value,
                  focusing: h.value,
                  disabled: ae.value,
                  readonly: T.readonly,
                  onFocus: Xt,
                  onBlur: Jt
                }, null, 8, ["modelValue", "id", "name", "type", "label", "editable", "focusing", "disabled", "readonly"])) : T.type === H(Z).Color && T.multiple ? (F(), K(Go, {
                  key: 3,
                  modelValue: H(x),
                  "onUpdate:modelValue": G[3] || (G[3] = (pe) => Ze(x) ? x.value = pe : null),
                  ref_key: "inputElement",
                  ref: k,
                  "edit-mode": y.value,
                  min: We.value,
                  max: Ie.value
                }, null, 8, ["modelValue", "edit-mode", "min", "max"])) : T.type === H(Z).Color ? (F(), K(kn, {
                  key: 4,
                  modelValue: H(x),
                  "onUpdate:modelValue": G[4] || (G[4] = (pe) => Ze(x) ? x.value = pe : null),
                  ref_key: "inputElement",
                  ref: k
                }, null, 8, ["modelValue"])) : J.value || ne.value ? (F(), K(Pr, {
                  key: 5,
                  modelValue: s.value,
                  "onUpdate:modelValue": G[5] || (G[5] = (pe) => s.value = pe),
                  "file-name": _.value,
                  "onUpdate:fileName": G[6] || (G[6] = (pe) => _.value = pe),
                  ref_key: "inputElement",
                  ref: k,
                  id: H(d),
                  tabindex: T.tabindex,
                  resource: (ke = T.fileUploadHttp) == null ? void 0 : ke.resource,
                  "resource-data": (ct = T.fileUploadHttp) == null ? void 0 : ct.data,
                  name: T.name,
                  placeholder: Tt.value,
                  accept: Me.value,
                  focusing: h.value,
                  disabled: ae.value,
                  readonly: T.readonly,
                  "is-image": T.type === H(Z).Image,
                  onChange: Fi,
                  onUploadSuccess: so,
                  onUploadError: ao
                }, null, 8, ["modelValue", "file-name", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image"])) : X.value ? (F(), K(Yr, {
                  key: 6,
                  modelValue: s.value,
                  "onUpdate:modelValue": G[7] || (G[7] = (pe) => s.value = pe),
                  id: H(d),
                  tabindex: T.tabindex,
                  lang: B.value,
                  name: T.name
                }, null, 8, ["modelValue", "id", "tabindex", "lang", "name"])) : T.type === H(Z).Select ? (F(), K(mr, {
                  key: 7,
                  ref_key: "inputElement",
                  ref: k,
                  modelValue: H(x),
                  "onUpdate:modelValue": G[8] || (G[8] = (pe) => Ze(x) ? x.value = pe : null),
                  "show-options": L.value,
                  "onUpdate:showOptions": G[9] || (G[9] = (pe) => L.value = pe),
                  searchable: T.searchable,
                  "search-mode": P.value,
                  multiple: T.multiple,
                  "can-tag": T.multiple,
                  "options-text": (ft = T.optionsConfig) == null ? void 0 : ft.text,
                  "options-icon": (ht = T.optionsConfig) == null ? void 0 : ht.icon,
                  "options-class": (pt = T.optionsConfig) == null ? void 0 : pt.class,
                  "option-slot": T.optionSlot,
                  "options-modal": (mt = T.optionsConfig) == null ? void 0 : mt.modal,
                  "options-download": (gt = T.optionsConfig) == null ? void 0 : gt.download,
                  "options-label-formatter": (vt = T.optionsConfig) == null ? void 0 : vt.labelFormatter,
                  "options-modal-data": (lt = T.optionsConfig) == null ? void 0 : lt.modalData,
                  "picked-options": D.value,
                  editable: y.value,
                  focusing: h.value,
                  "search-placeholder": it.value,
                  "multiple-display-edition": T.multipleDisplayEdition,
                  onFocus: hl,
                  onBlur: pl,
                  onNavigate: Jn,
                  onSearch: Qn,
                  onTag: eo,
                  onUntag: to
                }, null, 8, ["modelValue", "show-options", "searchable", "search-mode", "multiple", "can-tag", "options-text", "options-icon", "options-class", "option-slot", "options-modal", "options-download", "options-label-formatter", "options-modal-data", "picked-options", "editable", "focusing", "search-placeholder", "multiple-display-edition"])) : T.type === H(Z).Calc ? (F(), K(wr, {
                  key: 8,
                  ref_key: "inputElement",
                  ref: k,
                  modelValue: H(x),
                  "onUpdate:modelValue": G[10] || (G[10] = (pe) => Ze(x) ? x.value = pe : null),
                  id: H(d),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: y.value,
                  focusing: h.value,
                  disabled: ae.value,
                  readonly: T.readonly,
                  options: j.value,
                  onFocus: Xt,
                  onBlur: Jt
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "disabled", "readonly", "options"])) : T.type === H(Z).Search ? (F(), K(Lr, {
                  key: 9,
                  ref_key: "inputElement",
                  ref: k,
                  modelValue: H(x),
                  "onUpdate:modelValue": G[11] || (G[11] = (pe) => Ze(x) ? x.value = pe : null),
                  id: H(d),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: y.value,
                  focusing: h.value,
                  "had-first-focus": b.value,
                  disabled: ae.value,
                  readonly: T.readonly,
                  "options-resource": (kt = (Qe = T.optionsConfig) == null ? void 0 : Qe.http) == null ? void 0 : kt.resource,
                  container: A.value,
                  onFocus: Xt,
                  onBlur: Jt
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : T.type === H(Z).Elements ? (F(), K(ru, {
                  key: 10,
                  ref_key: "inputElement",
                  ref: k,
                  modelValue: H(x),
                  "onUpdate:modelValue": G[12] || (G[12] = (pe) => Ze(x) ? x.value = pe : null),
                  id: H(d),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: y.value,
                  focusing: h.value,
                  "had-first-focus": b.value,
                  disabled: ae.value,
                  readonly: T.readonly,
                  "options-resource": (gl = (Qt = T.optionsConfig) == null ? void 0 : Qt.http) == null ? void 0 : gl.resource,
                  container: A.value,
                  onFocus: Xt,
                  onBlur: Jt
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : T.type === H(Z).Card && a.multiple ? (F(), K(Jr, {
                  key: 11,
                  modelValue: H(x),
                  "onUpdate:modelValue": G[13] || (G[13] = (pe) => Ze(x) ? x.value = pe : null),
                  id: H(d),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: y.value,
                  focusing: h.value,
                  "had-first-focus": b.value,
                  disabled: ae.value,
                  readonly: T.readonly,
                  "options-resource": (bl = (vl = T.optionsConfig) == null ? void 0 : vl.http) == null ? void 0 : bl.resource,
                  modal: He.value,
                  "modal-key": H(n),
                  "modal-data": Ee.value,
                  "item-type": H(v)
                }, Pt({ _: 2 }, [
                  H(l)["item-" + H(v)] ? {
                    name: "item",
                    fn: de(({ item: pe }) => [
                      et(T.$slots, "item-" + H(v), { item: pe })
                    ]),
                    key: "0"
                  } : H(l).item ? {
                    name: "item",
                    fn: de(({ item: pe }) => [
                      et(T.$slots, "item", { item: pe })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : T.type === H(Z).Card ? (F(), K(Gn, {
                  key: 12,
                  modelValue: H(x),
                  "onUpdate:modelValue": G[14] || (G[14] = (pe) => Ze(x) ? x.value = pe : null),
                  id: H(d),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: y.value,
                  focusing: h.value,
                  "had-first-focus": b.value,
                  disabled: ae.value,
                  readonly: T.readonly,
                  "options-resource": (_l = (yl = T.optionsConfig) == null ? void 0 : yl.http) == null ? void 0 : _l.resource,
                  modal: He.value,
                  "modal-key": H(n),
                  "modal-data": Ee.value,
                  "item-type": H(v)
                }, Pt({ _: 2 }, [
                  H(l)["item-" + H(v)] ? {
                    name: "item",
                    fn: de(({ item: pe }) => [
                      et(T.$slots, "item-" + H(v), { item: pe })
                    ]),
                    key: "0"
                  } : H(l).item ? {
                    name: "item",
                    fn: de(({ item: pe }) => [
                      et(T.$slots, "item", { item: pe })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : he.value === "input" ? Pe((F(), se("input", {
                  key: 13,
                  "onUpdate:modelValue": G[15] || (G[15] = (pe) => Ze(x) ? x.value = pe : null),
                  ref: (pe) => k.value = pe,
                  value: H(x),
                  type: Se.value,
                  name: T.name,
                  id: H(d),
                  disabled: ae.value,
                  readonly: T.readonly,
                  placeholder: Tt.value,
                  tabindex: T.tabindex,
                  autocomplete: _e.value,
                  min: We.value,
                  max: Ie.value,
                  step: T.step,
                  onKeyup: dl,
                  onKeydown: fl,
                  onFocus: Kt,
                  onBlur: Yt,
                  onClick: Vt,
                  onChange: Fi
                }, null, 40, mu)), [
                  [bo, H(x)]
                ]) : he.value === "textarea" ? Pe((F(), se("textarea", {
                  key: 14,
                  "onUpdate:modelValue": G[16] || (G[16] = (pe) => Ze(x) ? x.value = pe : null),
                  ref: (pe) => k.value = pe,
                  value: H(x),
                  name: T.name,
                  id: H(d),
                  disabled: ae.value,
                  readonly: T.readonly,
                  placeholder: Tt.value,
                  tabindex: T.tabindex,
                  autocomplete: _e.value,
                  onKeyup: dl,
                  onKeydown: fl,
                  onFocus: Kt,
                  onBlur: Yt,
                  onClick: Vt,
                  onChange: Fi
                }, null, 40, gu)), [
                  [Ai, H(x)]
                ]) : T.type === H(Z).Html ? (F(), K(ur, {
                  key: 15,
                  ref_key: "inputElement",
                  ref: k,
                  modelValue: H(x),
                  "onUpdate:modelValue": G[17] || (G[17] = (pe) => Ze(x) ? x.value = pe : null),
                  id: H(d),
                  tabindex: T.tabindex,
                  name: T.name,
                  lang: B.value,
                  editable: y.value,
                  focusing: h.value,
                  disabled: ae.value,
                  readonly: T.readonly,
                  onFocus: Kt,
                  onBlur: Yt
                }, null, 8, ["modelValue", "id", "tabindex", "name", "lang", "editable", "focusing", "disabled", "readonly"])) : oe("", !0)
              ];
            }),
            _: 3
          }, 16)) : oe("", !0),
          y.value ? oe("", !0) : (F(), K(Hr, {
            key: 3,
            value: po.value,
            type: T.type,
            label: ye.value,
            title: Re.value,
            "file-name": _.value,
            "value-slot": T.valueSlot,
            "empty-value-slot": T.emptyValueSlot,
            "slot-data": T.slotData,
            download: H(u),
            multiple: T.multiple,
            multipleDisplay: T.multipleDisplay,
            modal: He.value,
            "modal-key": H(n),
            "modal-data": Ee.value,
            "option-slot": T.optionSlot,
            "options-download": (De = T.optionsConfig) == null ? void 0 : De.download,
            "options-modal": (Ke = T.optionsConfig) == null ? void 0 : Ke.modal,
            "options-modal-data": (Ye = T.optionsConfig) == null ? void 0 : Ye.modalData,
            "options-icon": (Xe = T.optionsConfig) == null ? void 0 : Xe.icon,
            "options-text": (Je = T.optionsConfig) == null ? void 0 : Je.text,
            "options-class": (ot = T.optionsConfig) == null ? void 0 : ot.class,
            "options-label-formatter": (st = T.optionsConfig) == null ? void 0 : st.labelFormatter,
            "options-resource": (rt = (at = T.optionsConfig) == null ? void 0 : at.http) == null ? void 0 : rt.resource,
            "options-resource-data": (dt = (ut = T.optionsConfig) == null ? void 0 : ut.http) == null ? void 0 : dt.data,
            "read-mode-config": T.readModeConfig,
            onClick: Vt
          }, Pt({ _: 2 }, [
            H(l).value ? {
              name: "value",
              fn: de(() => [
                et(T.$slots, s.value, {
                  value: s.value,
                  title: Re.value,
                  data: T.slotData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "type", "label", "title", "file-name", "value-slot", "empty-value-slot", "slot-data", "download", "multiple", "multipleDisplay", "modal", "modal-key", "modal-data", "option-slot", "options-download", "options-modal", "options-modal-data", "options-icon", "options-text", "options-class", "options-label-formatter", "options-resource", "options-resource-data", "read-mode-config"])),
          Oe.value ? (F(), se("div", vu, [
            Pe(Q(yn, { onClick: Hi }, null, 512), [
              [bt, tl.value]
            ]),
            Pe(Q(_n, { onClick: ul }, null, 512), [
              [bt, il.value]
            ]),
            T.type === H(Z).Number ? Pe((F(), K(ue, {
              key: 0,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              onClick: ml
            }, null, 512)), [
              [bt, Nt.value]
            ]) : oe("", !0),
            T.type === H(Z).Number ? Pe((F(), K(ue, {
              key: 1,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-more",
              onClick: no
            }, null, 512)), [
              [bt, Ji.value]
            ]) : oe("", !0),
            zt.value ? (F(), K(ue, {
              key: 2,
              title: T.errorMessage,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-attention",
              onClick: lo
            }, null, 8, ["title"])) : oe("", !0),
            Bt.value ? (F(), K(ue, {
              key: 3,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-info",
              onClick: io,
              tooltip: "",
              "show-tooltip-on-hover": "",
              "show-tooltip-on-hover-delay": 500,
              "hide-tooltip-on-leave": ""
            }, {
              tooltip: de(() => [
                It(Ct(T.infoMessage), 1)
              ]),
              _: 1
            })) : oe("", !0),
            y.value && al.value ? (F(), K(uu, {
              key: 4,
              config: T.fileUploadButton,
              "file-upload-http": T.fileUploadHttp
            }, null, 8, ["config", "file-upload-http"])) : oe("", !0),
            T.type === H(Z).Password ? Pe((F(), K($i, {
              key: 5,
              modelValue: c.value,
              "onUpdate:modelValue": G[18] || (G[18] = (ke) => c.value = ke)
            }, null, 8, ["modelValue"])), [
              [bt, ll.value]
            ]) : oe("", !0),
            Pe(Q(zl, {
              modelValue: s.value,
              "onUpdate:modelValue": G[19] || (G[19] = (ke) => s.value = ke),
              type: T.type
            }, null, 8, ["modelValue", "type"]), [
              [bt, nl.value]
            ]),
            y.value && sl.value ? (F(), K(Cn, {
              key: 6,
              modelValue: y.value,
              "onUpdate:modelValue": G[20] || (G[20] = (ke) => y.value = ke),
              onClick: oo
            }, null, 8, ["modelValue"])) : oe("", !0),
            T.customButtonText || T.customButtonClass ? (F(), K(ue, {
              key: 7,
              text: T.customButtonText,
              class: "lkt-field--info-btn lkt-field--custom-btn",
              icon: T.customButtonClass
            }, null, 8, ["text", "icon"])) : oe("", !0),
            y.value ? Pe((F(), K(Vo, {
              key: 8,
              onClick: Xn
            }, null, 512)), [
              [bt, ol.value]
            ]) : oe("", !0),
            T.infoButtonEllipsis ? (F(), K(Ro, {
              key: 9,
              "show-undo": Qi.value,
              "show-clear": el.value,
              "show-password": jt.value,
              "show-edition": T.allowReadModeSwitch,
              "show-password-check": c.value,
              "onUpdate:showPasswordCheck": G[21] || (G[21] = (ke) => c.value = ke),
              "show-edition-check": y.value,
              "onUpdate:showEditionCheck": G[22] || (G[22] = (ke) => y.value = ke),
              onUndo: Hi,
              onClear: ul
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"])) : oe("", !0)
          ])) : oe("", !0)
        ]),
        y.value && ((Ht = T.validation) == null ? void 0 : Ht.type) === H(Sl).Auto && p.value.length > 0 ? (F(), K(Sr, {
          key: 2,
          items: p.value,
          stack: (Ft = T.validation) == null ? void 0 : Ft.stack
        }, null, 8, ["items", "stack"])) : oe("", !0),
        y.value && H(El).includes(T.type) ? (F(), K(ze, ge({
          key: 3,
          ref_key: "dropdownEl",
          ref: w,
          class: "lkt-field--dropdown",
          modelValue: L.value,
          "onUpdate:modelValue": G[23] || (G[23] = (ke) => L.value = ke),
          referrer: A.value,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, T.tooltipConfig), {
          default: de(() => [
            L.value ? (F(), se("div", bu, [
              N.value ? (F(), K(we, { key: 0 })) : oe("", !0),
              N.value ? oe("", !0) : (F(), se("ul", {
                key: 1,
                class: "lkt-field--dropdown-options",
                ref_key: "optionList",
                ref: z
              }, [
                (F(!0), se(Ue, null, nt(q.value, (ke, ct) => {
                  var ft, ht, pt, mt, gt, vt, lt, Qe, kt;
                  return F(), se("li", {
                    class: je({
                      "is-active": H(Do)(ke, s.value, T.multiple),
                      "is-focused": ct === O.value,
                      "is-disabled": ke.disabled
                    }),
                    "data-index": ct,
                    onClick: () => Dt(ke)
                  }, [
                    H(l).option ? et(T.$slots, "option", {
                      key: 0,
                      option: ke,
                      data: T.slotData,
                      modal: (ft = T.optionsConfig) == null ? void 0 : ft.modal,
                      modalData: (ht = T.optionsConfig) == null ? void 0 : ht.modalData,
                      download: (pt = T.optionsConfig) == null ? void 0 : pt.download,
                      editable: y.value
                    }) : (F(), K(wt, {
                      key: 1,
                      option: ke,
                      "option-slot": T.optionSlot,
                      icon: (mt = T.optionsConfig) == null ? void 0 : mt.icon,
                      text: (gt = T.optionsConfig) == null ? void 0 : gt.text,
                      modal: (vt = T.optionsConfig) == null ? void 0 : vt.modal,
                      "modal-data": (lt = T.optionsConfig) == null ? void 0 : lt.modalData,
                      download: (Qe = T.optionsConfig) == null ? void 0 : Qe.download,
                      "label-formatter": (kt = T.optionsConfig) == null ? void 0 : kt.labelFormatter,
                      editable: y.value
                    }, null, 8, ["option", "option-slot", "icon", "text", "modal", "modal-data", "download", "label-formatter", "editable"]))
                  ], 10, yu);
                }), 256))
              ], 512))
            ])) : oe("", !0)
          ]),
          _: 3
        }, 16, ["modelValue", "referrer"])) : oe("", !0)
      ], 10, du);
    };
  }
}), _u = { class: "lkt-grid-1" }, Cu = /* @__PURE__ */ ve({
  __name: "LktTextLanguageEditModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    type: {},
    translations: { default: () => ({}) }
  },
  setup(e) {
    const t = ee(() => wo.value.filter((i) => i !== pn.value));
    return (i, o) => {
      const l = re("lkt-modal");
      return F(), K(l, {
        "modal-name": i.modalName,
        title: "__:lmm.confirmFormLeave",
        "modal-key": i.modalKey,
        "z-index": i.zIndex
      }, {
        default: de(() => [
          le("div", _u, [
            Q($e, {
              type: i.type,
              label: "Idioma actual (ES)",
              modelValue: i.translations.es,
              "onUpdate:modelValue": o[0] || (o[0] = (a) => i.translations.es = a),
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "modelValue"]),
            (F(!0), se(Ue, null, nt(t.value, (a) => (F(), K($e, {
              type: i.type,
              modelValue: i.translations[a],
              "onUpdate:modelValue": (d) => i.translations[a] = d,
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
}), wu = { class: "lkt-grid-1" }, ku = /* @__PURE__ */ ve({
  __name: "LktBoxElementModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    config: {},
    onUpdate: {}
  },
  setup(e) {
    const i = Y(e.config), o = Object.keys(Ae.defaultFieldLktBoxElementCustomClassField).length > 0 ? Ii(Ae.defaultFieldLktBoxElementCustomClassField, Ae.defaultFieldElementCustomClassField) : void 0;
    return (l, a) => {
      const d = re("lkt-field"), f = re("lkt-item-crud");
      return F(), K(f, ge({
        modelValue: i.value,
        "onUpdate:modelValue": a[0] || (a[0] = (n) => i.value = n)
      }, {
        mode: H(Zt).Update,
        view: H($t).Modal,
        editing: !0,
        perms: ["update"],
        title: "LktBox Config",
        modalConfig: {
          modalName: l.modalName,
          modalKey: l.modalKey,
          zIndex: l.zIndex,
          title: "LktBox Config"
        },
        updateButton: !1
      }), {
        item: de(({ item: n }) => [
          le("div", wu, [
            Q(d, ge({
              type: H(Z).Switch,
              label: "Has header"
            }, {
              modelValue: n.config.hasHeader,
              "onUpdate:modelValue": (g) => n.config.hasHeader = g
            }), null, 16, ["modelValue", "onUpdate:modelValue"]),
            Q(d, ge({
              type: H(Z).Switch,
              label: "Has icon"
            }, {
              modelValue: n.config.hasIcon,
              "onUpdate:modelValue": (g) => n.config.hasIcon = g,
              disabled: !n.config.hasHeader
            }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"]),
            Q(d, ge({
              type: H(Z).Text,
              label: "Icon"
            }, {
              modelValue: n.props.icon,
              "onUpdate:modelValue": (g) => n.props.icon = g,
              disabled: !n.config.hasIcon || !n.config.hasHeader
            }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"]),
            H(o) ? (F(), K(d, ge({ key: 0 }, {
              type: H(Z).Select,
              ...H(o),
              canClear: !0
            }, {
              modelValue: n.props.class,
              "onUpdate:modelValue": (g) => n.props.class = g
            }), null, 16, ["modelValue", "onUpdate:modelValue"])) : oe("", !0)
          ])
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
}), xu = { class: "lkt-grid-1" }, Su = /* @__PURE__ */ ve({
  __name: "LktAccordionElementModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    config: {},
    onUpdate: {}
  },
  setup(e) {
    const i = Y(e.config), o = Object.keys(Ae.defaultFieldLktAccordionElementCustomClassField).length > 0 ? Ii(Ae.defaultFieldLktAccordionElementCustomClassField, Ae.defaultFieldElementCustomClassField) : void 0, l = [
      {
        value: Et.Auto,
        label: "Auto"
      },
      {
        value: Et.Always,
        label: "Always"
      },
      {
        value: Et.Lazy,
        label: "Lazy"
      },
      {
        value: Et.Ever,
        label: "Ever"
      }
    ], a = [
      {
        value: Oi.Transform,
        label: "Transform"
      },
      {
        value: Oi.Display,
        label: "Display"
      },
      {
        value: Oi.Height,
        label: "Height"
      }
    ];
    return (d, f) => {
      const n = re("lkt-item-crud");
      return F(), K(n, ge({
        modelValue: i.value,
        "onUpdate:modelValue": f[0] || (f[0] = (g) => i.value = g)
      }, {
        mode: H(Zt).Update,
        view: H($t).Modal,
        editing: !0,
        perms: ["update"],
        title: "LktAccordion Config",
        modalConfig: {
          modalName: d.modalName,
          modalKey: d.modalKey,
          zIndex: d.zIndex,
          title: "LktAccordion Config"
        },
        updateButton: !1
      }), {
        item: de(({ item: g }) => [
          le("div", xu, [
            Q($e, ge({
              type: H(Z).Select,
              label: "Type",
              options: l
            }, {
              modelValue: g.props.type,
              "onUpdate:modelValue": (u) => g.props.type = u
            }), null, 16, ["modelValue", "onUpdate:modelValue"]),
            Q($e, ge({
              type: H(Z).Select,
              label: "Toggle Mode",
              options: a
            }, {
              modelValue: g.props.toggleMode,
              "onUpdate:modelValue": (u) => g.props.toggleMode = u
            }), null, 16, ["modelValue", "onUpdate:modelValue"]),
            Q($e, ge({
              type: H(Z).Switch,
              label: "Has icon"
            }, {
              modelValue: g.config.hasIcon,
              "onUpdate:modelValue": (u) => g.config.hasIcon = u
            }), null, 16, ["modelValue", "onUpdate:modelValue"]),
            Q($e, ge({
              type: H(Z).Text,
              label: "Icon"
            }, {
              modelValue: g.props.icon,
              "onUpdate:modelValue": (u) => g.props.icon = u,
              disabled: !g.config.hasIcon
            }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"]),
            H(o) ? (F(), K($e, ge({ key: 0 }, {
              type: H(Z).Select,
              ...H(o),
              canClear: !0
            }, {
              modelValue: g.props.class,
              "onUpdate:modelValue": (u) => g.props.class = u
            }), null, 16, ["modelValue", "onUpdate:modelValue"])) : oe("", !0)
          ])
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
}), Eu = { class: "lkt-grid-1" }, Lu = /* @__PURE__ */ ve({
  __name: "LktIconElementModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    config: {},
    onUpdate: {}
  },
  setup(e) {
    const i = Y(e.config), o = Object.keys(Ae.defaultFieldLktIconElementCustomClassField).length > 0 ? Ii(Ae.defaultFieldLktIconElementCustomClassField, Ae.defaultFieldElementCustomClassField) : void 0;
    return (l, a) => {
      const d = re("lkt-field"), f = re("lkt-item-crud");
      return F(), K(f, ge({
        modelValue: i.value,
        "onUpdate:modelValue": a[0] || (a[0] = (n) => i.value = n)
      }, {
        mode: H(Zt).Update,
        view: H($t).Modal,
        editing: !0,
        perms: ["update"],
        title: "LktIcon Config",
        modalConfig: {
          modalName: l.modalName,
          modalKey: l.modalKey,
          zIndex: l.zIndex,
          title: "LktIcon Config"
        },
        updateButton: !1
      }), {
        item: de(({ item: n }) => [
          le("div", Eu, [
            H(o) ? (F(), K(d, ge({ key: 0 }, {
              type: H(Z).Select,
              ...H(o),
              canClear: !0
            }, {
              modelValue: n.props.class,
              "onUpdate:modelValue": (g) => n.props.class = g
            }), null, 16, ["modelValue", "onUpdate:modelValue"])) : oe("", !0),
            Q(d, ge({
              type: H(Z).Switch,
              label: "Has icon"
            }, {
              modelValue: n.config.hasIcon,
              "onUpdate:modelValue": (g) => n.config.hasIcon = g
            }), null, 16, ["modelValue", "onUpdate:modelValue"]),
            Q(d, ge({
              type: H(Z).Text,
              label: "Icon"
            }, {
              modelValue: n.props.icon,
              "onUpdate:modelValue": (g) => n.props.icon = g,
              disabled: !n.config.hasIcon
            }), null, 16, ["modelValue", "onUpdate:modelValue", "disabled"])
          ])
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
}), Tu = { class: "lkt-grid-1" }, zu = /* @__PURE__ */ ve({
  __name: "LktImageElementModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    config: {},
    onUpdate: {}
  },
  setup(e) {
    const i = Y(e.config), o = Object.keys(Ae.defaultFieldLktImageElementCustomClassField).length > 0 ? Ii(Ae.defaultFieldLktImageElementCustomClassField, Ae.defaultFieldElementCustomClassField) : void 0;
    return (l, a) => {
      const d = re("lkt-field"), f = re("lkt-item-crud");
      return F(), K(f, ge({
        modelValue: i.value,
        "onUpdate:modelValue": a[0] || (a[0] = (n) => i.value = n)
      }, {
        mode: H(Zt).Update,
        view: H($t).Modal,
        editing: !0,
        perms: ["update"],
        title: "LktImage Config",
        modalConfig: {
          modalName: l.modalName,
          modalKey: l.modalKey,
          zIndex: l.zIndex,
          title: "LktImage Config"
        },
        updateButton: !1
      }), {
        item: de(({ item: n }) => [
          le("div", Tu, [
            Q(d, ge({
              type: H(Z).Image,
              label: "Image"
            }, {
              modelValue: n.props.src,
              "onUpdate:modelValue": (g) => n.props.src = g
            }), null, 16, ["modelValue", "onUpdate:modelValue"]),
            H(o) ? (F(), K(d, ge({ key: 0 }, {
              type: H(Z).Select,
              ...H(o),
              canClear: !0
            }, {
              modelValue: n.props.class,
              "onUpdate:modelValue": (g) => n.props.class = g
            }), null, 16, ["modelValue", "onUpdate:modelValue"])) : oe("", !0)
          ])
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
}), Bu = { class: "lkt-grid-1" }, Nu = { class: "lkt-grid-3" }, Au = { class: "lkt-grid-3" }, Ru = /* @__PURE__ */ ve({
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
    const t = e;
    Y(t.element);
    const i = Y(t.items), o = Y(t.index + 1), l = Y(t.index), a = (v = "Time to create") => ({
      type: "text",
      text: v
    }), d = () => ({
      type: "lkt-box",
      props: {
        ...Ut(Ao),
        header: "Title goes here",
        text: "Content goes here"
      },
      config: {
        hasHeader: !0,
        hasIcon: !0
      },
      children: [
        a("Content goes here")
      ],
      layout: {
        type: "grid",
        amountOfItems: []
      }
    }), f = () => ({
      type: "lkt-accordion",
      props: {
        ...Ut(No),
        header: "Title goes here",
        text: "Content goes here"
      },
      config: {
        hasHeader: !0,
        hasIcon: !0
      },
      children: [
        a("Content goes here")
      ],
      layout: {
        type: "grid",
        amountOfItems: []
      }
    }), n = () => ({
      type: "lkt-icon",
      props: {
        ...Ut(Bo),
        text: "Content goes here"
      },
      config: {
        hasHeader: !0,
        hasIcon: !0
      }
    }), g = () => ({
      type: "lkt-image",
      props: {
        ...Ut(zo),
        text: "Image description goes here"
      },
      config: {
        hasHeader: !0,
        hasIcon: !0
      }
    }), u = (v) => {
      switch (v) {
        case "lkt-box":
          t.addingChildren ? (Array.isArray(i.value[l.value].children) || (i.value[l.value].children = []), i.value[l.value].children.push(d())) : i.value.splice(o.value, 0, d()), ++o.value, t.onAppend();
          break;
        case "lkt-accordion":
          t.addingChildren ? (Array.isArray(i.value[l.value].children) || (i.value[l.value].children = []), i.value[l.value].children.push(f())) : i.value.splice(o.value, 0, f()), ++o.value, t.onAppend();
          break;
        case "lkt-icon":
          t.addingChildren ? (Array.isArray(i.value[l.value].children) || (i.value[l.value].children = []), i.value[l.value].children.push(n())) : i.value.splice(o.value, 0, n()), ++o.value, t.onAppend();
          break;
        case "lkt-image":
          t.addingChildren ? (Array.isArray(i.value[l.value].children) || (i.value[l.value].children = []), i.value[l.value].children.push(g())) : i.value.splice(o.value, 0, g()), ++o.value, t.onAppend();
          break;
        case "text":
          t.addingChildren ? (Array.isArray(i.value[l.value].children) || (i.value[l.value].children = []), i.value[l.value].children.push(a())) : i.value.splice(o.value, 0, a()), ++o.value, t.onAppend();
          break;
      }
    };
    return (v, k) => {
      const E = re("lkt-button"), S = re("lkt-accordion"), R = re("lkt-modal");
      return F(), K(R, Ve(qe({
        modalName: v.modalName,
        modalKey: v.modalKey,
        zIndex: v.zIndex,
        title: "LktBox Config"
      })), {
        default: de(() => [
          le("div", Bu, [
            Q(S, Ve(qe({
              type: H(Et).Always,
              title: "Text Content"
            })), {
              default: de(() => [
                le("div", Nu, [
                  Q(E, Ve(qe({
                    icon: "lkt-icn-angle-bottom",
                    text: "Text",
                    events: {
                      click: () => {
                        u("text");
                      }
                    }
                  })), null, 16)
                ])
              ]),
              _: 1
            }, 16),
            Q(S, Ve(qe({
              type: H(Et).Auto,
              title: "LKT Content"
            })), {
              default: de(() => [
                le("div", Au, [
                  Q(E, Ve(qe({
                    icon: "lkt-icn-angle-bottom",
                    text: "LktBox",
                    events: {
                      click: () => {
                        u("lkt-box");
                      }
                    }
                  })), null, 16),
                  Q(E, Ve(qe({
                    icon: "lkt-icn-angle-bottom",
                    text: "LktAccordion",
                    events: {
                      click: () => {
                        u("lkt-accordion");
                      }
                    }
                  })), null, 16),
                  Q(E, Ve(qe({
                    icon: "lkt-icn-angle-bottom",
                    text: "LktImage",
                    events: {
                      click: () => {
                        u("lkt-image");
                      }
                    }
                  })), null, 16),
                  Q(E, Ve(qe({
                    icon: "lkt-icn-angle-bottom",
                    text: "LktIcon",
                    events: {
                      click: () => {
                        u("lkt-icon");
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
}), Iu = { class: "lkt-grid-1" }, Mu = { class: "lkt-grid-3" }, Du = /* @__PURE__ */ ve({
  __name: "LktElementLayoutConfigModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    element: {},
    onUpdate: {}
  },
  setup(e) {
    const i = Y(e.element), o = [
      {
        value: "grid",
        label: "Grid"
      },
      {
        value: "flex",
        label: "Flex"
      }
    ], l = [
      {
        value: "lkt-grid-1",
        label: "Default: 1"
      },
      {
        value: "lkt-grid-2",
        label: "Default: 2"
      },
      {
        value: "lkt-grid-3",
        label: "Default: 3"
      },
      {
        value: "lkt-grid-4",
        label: "Default: 4"
      },
      {
        value: "lkt-grid-5",
        label: "Default: 5"
      },
      {
        value: "lkt-grid-1--from-768",
        label: "From 768px: 1"
      },
      {
        value: "lkt-grid-2--from-768",
        label: "From 768px: 2"
      },
      {
        value: "lkt-grid-3--from-768",
        label: "From 768px: 3"
      },
      {
        value: "lkt-grid-4--from-768",
        label: "From 768px: 4"
      },
      {
        value: "lkt-grid-5--from-768",
        label: "From 768px: 5"
      }
    ];
    return (a, d) => {
      const f = re("lkt-accordion"), n = re("lkt-item-crud");
      return F(), K(n, ge({
        modelValue: i.value,
        "onUpdate:modelValue": d[0] || (d[0] = (g) => i.value = g)
      }, {
        mode: H(Zt).Update,
        view: H($t).Modal,
        editing: !0,
        perms: ["update"],
        title: "LktBox Config",
        modalConfig: {
          modalName: a.modalName,
          modalKey: a.modalKey,
          zIndex: a.zIndex,
          title: "LktBox Config"
        },
        updateButton: !1
      }), {
        item: de(({ item: g }) => [
          le("div", Iu, [
            Q($e, ge({
              type: H(Z).Select,
              label: "Type",
              options: o
            }, {
              modelValue: g.layout.type,
              "onUpdate:modelValue": (u) => g.layout.type = u
            }), null, 16, ["modelValue", "onUpdate:modelValue"])
          ]),
          Q(f, Ve(qe({
            type: H(Et).Auto,
            title: "Responsive configuration"
          })), {
            default: de(() => [
              le("div", Mu, [
                Q($e, ge({
                  type: H(Z).Select,
                  label: "Items per row (based on device width)",
                  options: l,
                  multiple: !0
                }, {
                  modelValue: g.layout.amountOfItems,
                  "onUpdate:modelValue": (u) => g.layout.amountOfItems = u
                }), null, 16, ["modelValue", "onUpdate:modelValue"])
              ])
            ]),
            _: 2
          }, 1040)
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
}), Zu = (e, t) => (te.customValueSlots[e] = t, !0), qu = (e, t) => (te.customEditSlots[e] = t, !0), ju = {
  install: (e) => {
    e.component("lkt-field") === void 0 && (e.component("lkt-field", $e), xt("lkt-field-language-edit", Cu), xt("lkt-field-add-element-config", Ru), xt("lkt-field-box-element-config", ku), xt("lkt-field-accordion-element-config", Su), xt("lkt-field-icon-element-config", Lu), xt("lkt-field-image-element-config", zu), xt("lkt-field-element-layout-config", Du));
  }
}, Gu = (e) => {
  te.defaultEmptyValueSlot = e;
}, Ku = (e, t) => {
  te.optionSlots[e] = t;
}, Yu = (e) => te.undoText = e, Xu = (e) => te.clearText = e, Ju = (e) => te.i18nText = e, Qu = (e) => te.switchEditionOnText = e, ed = (e) => te.switchEditionOffText = e, td = (e) => te.showPasswordOnText = e, id = (e) => te.showPasswordOffText = e, ld = (e) => te.dateReadFormat = e, nd = (e) => te.defaultDateReadFormat = e, od = (e, t, i = "default") => {
  i || (i = "default"), te.validationMessages[i] || (te.validationMessages[i] = {}), te.validationMessages[i][e] = t;
}, sd = (e) => (te.validationIconSlot = e, !0), ad = (e = 2, t = ".", i = ".", o = !0, l = "") => l !== "" ? (te.langNumberFormat[l].amountOfDecimals = e, te.langNumberFormat[l].decimalSeparator = t, te.langNumberFormat[l].thousandsSeparator = i, te.langNumberFormat[l].removeDecimalsIfZero = o, !0) : (te.amountOfDecimals = e, te.decimalSeparator = t, te.thousandsSeparator = i, te.removeDecimalsIfZero = o, !0), rd = (e) => {
  te.readTextMaxLength = e;
}, ud = (e, t) => {
  te.modalPerItemType[e] = t;
};
export {
  fd as Field,
  $e as LktField,
  hd as Option,
  ju as default,
  Xu as setFieldClearText,
  ld as setFieldDateReadFormat,
  nd as setFieldDefaultDateReadFormat,
  Gu as setFieldEmptySlot,
  Ju as setFieldI18nText,
  ad as setFieldNumberFormat,
  Ku as setFieldOptionSlot,
  id as setFieldShowPasswordOffText,
  td as setFieldShowPasswordOnText,
  ed as setFieldSwitchEditionOffText,
  Qu as setFieldSwitchEditionOnText,
  Yu as setFieldUndoText,
  sd as setFieldValidationIconSlot,
  od as setFieldValidationMessage,
  ud as setModalPerItemType,
  rd as setReadTextMaxLength,
  qu as setTextEditSlot,
  Zu as setTextValueSlot
};
