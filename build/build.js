import { defineComponent as xe, computed as X, resolveComponent as ye, openBlock as Z, createBlock as te, normalizeClass as Fe, ref as Y, watch as ue, withCtx as Le, createCommentVNode as de, resolveDynamicComponent as it, mergeProps as ui, createElementBlock as ne, createElementVNode as he, toDisplayString as Ke, createVNode as le, normalizeStyle as Xt, unref as ae, withDirectives as Be, vModelCheckbox as Ll, onMounted as Rt, Fragment as Oe, vModelText as _t, renderList as Xe, vShow as Pe, nextTick as vt, createTextVNode as lt, useSlots as ci, renderSlot as at, createStaticVNode as Tl, vModelDynamic as Nl, createSlots as zl } from "vue";
import { stripTags as di, fill as Bl, generateRandomString as Lt, formatNumber as Jt, isEmail as Rl } from "lkt-string-tools";
import { httpCall as Tt } from "lkt-http-client";
import { __ as rt, currentLanguage as fi, availableLanguages as Al } from "lkt-i18n";
import { FieldValidation as $e } from "lkt-field-validation";
import { date as ut } from "lkt-date-tools";
import { addModal as Ml } from "lkt-modal";
const _e = class _e {
};
_e.defaultEmptyValueSlot = "", _e.customValueSlots = {}, _e.customEditSlots = {}, _e.searchKeyForResource = "query", _e.optionSlots = {}, _e.defaultDateIcon = "lkt-field-icon-calendar-empty", _e.defaultNumberFeaturedButton = "subtract", _e.undoText = "", _e.clearText = "", _e.i18nText = "", _e.switchEditionOnText = "", _e.switchEditionOffText = "", _e.showPasswordOnText = "", _e.showPasswordOffText = "", _e.dateReadFormat = "", _e.defaultDateReadFormat = "Y-m-d", _e.langDateReadFormat = {
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
};
let J = _e;
const hi = /* @__PURE__ */ xe({
  __name: "UndoButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const i = t, s = e, n = X(() => J.undoText), r = X(() => s.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), c = () => i("click");
    return (d, l) => {
      const v = ye("lkt-button");
      return Z(), te(v, {
        text: d.insideEllipsis ? n.value : "",
        title: n.value,
        class: Fe([r.value, "lkt-field--btn-undo"]),
        icon: "lkt-field-icon-undo",
        onClick: c
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), pi = /* @__PURE__ */ xe({
  __name: "ClearButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const i = t, s = e, n = X(() => J.clearText), r = X(() => s.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), c = () => i("click");
    return (d, l) => {
      const v = ye("lkt-button");
      return Z(), te(v, {
        text: d.insideEllipsis ? n.value : "",
        title: n.value,
        class: Fe(r.value),
        icon: "lkt-field-icon-cancel",
        onClick: c
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Nt = /* @__PURE__ */ xe({
  __name: "PasswordButton",
  props: {
    modelValue: { type: Boolean, default: !1 },
    insideEllipsis: { type: Boolean, default: !1 },
    isFeatured: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, s = e, n = Y(s.modelValue);
    ue(() => s.modelValue, (v) => n.value = v), ue(n, (v) => i("update:modelValue", v));
    const r = X(() => n.value ? J.showPasswordOnText : J.showPasswordOffText), c = X(() => n.value === !0 ? "lkt-field-icon-lock-open" : "lkt-field-icon-lock"), d = X(() => s.isFeatured ? "lkt-field--atn-btn" : s.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), l = () => i("click");
    return (v, u) => {
      const b = ye("lkt-button");
      return Z(), te(b, {
        text: v.insideEllipsis ? r.value : "",
        title: r.value,
        class: Fe(d.value),
        icon: c.value,
        onClick: l,
        checked: n.value,
        "onUpdate:checked": u[0] || (u[0] = (C) => n.value = C),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), gi = /* @__PURE__ */ xe({
  __name: "EditionButton",
  props: {
    modelValue: { type: Boolean, default: !1 },
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, s = e, n = Y(s.modelValue);
    ue(() => s.modelValue, (v) => n.value = v), ue(n, (v) => i("update:modelValue", v));
    const r = X(() => n.value ? J.switchEditionOnText : J.switchEditionOffText), c = X(() => n.value === !0 ? "lkt-field-icon-eye" : "lkt-field-icon-pencil"), d = X(() => s.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), l = () => i("click");
    return (v, u) => {
      const b = ye("lkt-button");
      return Z(), te(b, {
        text: v.insideEllipsis ? r.value : "",
        title: r.value,
        class: Fe(d.value),
        icon: c.value,
        onClick: l,
        checked: n.value,
        "onUpdate:checked": u[0] || (u[0] = (C) => n.value = C),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Il = /* @__PURE__ */ xe({
  __name: "EllipsisActionsButton",
  props: {
    showUndo: { type: Boolean },
    showClear: { type: Boolean },
    showPassword: { type: Boolean },
    showPasswordCheck: { type: Boolean },
    showEdition: { type: Boolean },
    showEditionCheck: { type: Boolean }
  },
  emits: ["undo", "clear", "update:showPasswordCheck", "update:showEditionCheck"],
  setup(e, { emit: t }) {
    const i = t, s = e, n = Y(s.showPasswordCheck);
    ue(() => s.showPasswordCheck, (c) => n.value = c), ue(n, (c) => i("update:showPasswordCheck", c));
    const r = Y(s.showEditionCheck);
    return ue(() => s.showEditionCheck, (c) => r.value = c), ue(r, (c) => i("update:showEditionCheck", c)), (c, d) => {
      const l = ye("lkt-button");
      return Z(), te(l, {
        split: "",
        "split-icon": "lkt-field-icon-ellipsis-vert",
        class: "lkt-field--info-btn"
      }, {
        split: Le(({ doClose: v }) => [
          c.showUndo ? (Z(), te(hi, {
            key: 0,
            onClick: d[0] || (d[0] = () => i("undo")),
            "inside-ellipsis": ""
          })) : de("", !0),
          c.showClear ? (Z(), te(pi, {
            key: 1,
            onClick: d[1] || (d[1] = () => i("clear")),
            "inside-ellipsis": ""
          })) : de("", !0),
          c.showPassword ? (Z(), te(Nt, {
            key: 2,
            modelValue: n.value,
            "onUpdate:modelValue": d[2] || (d[2] = (u) => n.value = u),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : de("", !0),
          c.showEdition ? (Z(), te(gi, {
            key: 3,
            modelValue: r.value,
            "onUpdate:modelValue": d[3] || (d[3] = (u) => r.value = u),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : de("", !0)
        ]),
        _: 1
      });
    };
  }
}), Qt = /* @__PURE__ */ xe({
  __name: "I18nButton",
  props: {
    modelValue: { default: () => ({}) },
    type: {},
    insideEllipsis: { type: Boolean, default: !1 },
    isFeatured: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, s = e, n = Y(s.modelValue);
    ue(() => s.modelValue, (d) => n.value = d, { deep: !0 }), ue(n, (d) => i("update:modelValue", d), { deep: !0 });
    const r = X(() => J.i18nText), c = X(() => s.isFeatured ? "lkt-field--atn-btn" : s.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (d, l) => {
      const v = ye("lkt-button");
      return Z(), te(v, {
        text: d.insideEllipsis ? r.value : "",
        title: r.value,
        class: Fe(c.value),
        icon: "lkt-field-icon-language",
        modal: "lkt-field-language-edit",
        "modal-data": { translations: n.value, type: d.type }
      }, null, 8, ["text", "title", "class", "modal-data"]);
    };
  }
});
var W = /* @__PURE__ */ ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e))(W || {});
const Dl = (e, t, i) => (e = Number(e), t !== !1 && e < t && (e = t), i !== !1 && e > i && (e = i), e);
class ei {
  constructor(t = {}) {
    this.value = void 0, this.label = "", this.data = {}, this.disabled = !1, this.group = "", this.icon = "", this.modal = "";
    for (let i in t)
      this[i] = t[i];
  }
}
const bt = (e) => {
  if (typeof e == "string" && e.startsWith("__:")) {
    let t = e.substring(3), i = rt(t), s = [];
    for (let n in i) s.push({ value: n, label: i[n] });
    return bt(s);
  }
  return Array.isArray(e) ? e.length === 0 ? e : e.map((t) => {
    if (typeof t == "object") return new ei(t);
    if (typeof t == "string" || typeof t == "number")
      return new ei({
        label: String(t),
        value: t
      });
  }).filter((t) => typeof t < "u") : [];
}, Et = (e, t = "", i = !0) => {
  if (t === "") return e;
  const s = String(t).toLowerCase();
  return e.filter((n) => {
    let r = String(n.label).toLowerCase();
    return r.indexOf(s) !== -1 && (i || r !== s);
  });
}, ti = (e, t) => {
  if (t !== "")
    return e.find((i) => i.value == t);
}, Hl = (e, t) => {
  const i = /* @__PURE__ */ new Set(), s = [...e, ...bt(t)], n = [];
  return s.forEach((r) => {
    let c = [r.value, r.label].join("-");
    i.has(c) || (n.push(r), i.add(c));
  }), n;
}, Ol = (e, t, i) => {
  if (i) {
    if (Array.isArray(t)) {
      let s = t.findIndex((n) => n == e.value);
      return typeof s > "u" ? !1 : s > -1;
    }
    return !1;
  }
  return e.value == t;
}, Fl = (e, t) => {
  let i = t.findIndex((s) => s == e.value);
  return typeof i > "u" && (i = -1), i;
}, At = (e) => !(Object.prototype.toString.call(e) === "[object Date]" && isNaN(e)), mi = (e, t) => typeof e > "u" ? "" : (typeof e == "string" && (e = new Date(e)), At(e) ? ut(t, e) : ""), ii = [
  W.Text,
  W.Search,
  W.Select
], Vl = [
  W.Switch,
  W.Check
], Pl = [
  W.Switch,
  W.Check
];
W.Text, W.Search;
const et = [
  W.Switch,
  W.Check
], Ul = [
  W.Text,
  W.Email,
  W.Password
], Wl = /* @__PURE__ */ xe({
  __name: "DropdownButton",
  emits: ["click"],
  setup(e, { emit: t }) {
    const i = t, s = X(() => J.undoText), n = X(() => "lkt-field--info-btn"), r = () => i("click");
    return (c, d) => {
      const l = ye("lkt-button");
      return Z(), te(l, {
        text: s.value,
        title: s.value,
        class: Fe([n.value, "lkt-field--btn-dropdown"]),
        icon: "lkt-field-icon-angle-down",
        onClick: r,
        tabindex: "-1"
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Zl = {
  key: 0,
  class: "lkt-field--dropdown-option--icon-container"
}, $l = { class: "lkt-field--dropdown-option--label-container" }, Ye = /* @__PURE__ */ xe({
  __name: "DropdownOption",
  props: {
    option: { default: () => ({}) },
    optionSlot: { default: "" },
    editable: { type: Boolean, default: !1 },
    icon: { type: [String, Function], default: "" },
    modal: { type: [String, Function], default: "" },
    modalData: { type: [Object, Function], default: () => ({}) },
    download: { type: [String, Function], default: "" },
    labelFormatter: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const i = t, s = e, n = X(() => s.option.icon !== "" ? s.option.icon : typeof s.icon == "function" ? s.icon(s.option) : s.icon), r = X(() => typeof s.labelFormatter == "function" ? s.labelFormatter(s.option) : s.option.label), c = X(() => `lkt-opt-${s.option.value}`), d = X(() => {
      if (s.optionSlot && !(typeof J.optionSlots[s.optionSlot] > "u"))
        return J.optionSlots[s.optionSlot];
    }), l = X(() => d.value ? d.value : !s.editable && (s.modal !== "" || s.option.modal !== "") ? "lkt-button" : !s.editable && s.download !== "" ? "lkt-anchor" : "div"), v = X(() => {
      if (l.value === "lkt-button") {
        let b = s.option.modal;
        s.modal && (b = s.modal);
        let C = b;
        return typeof b == "function" && (C = () => b(s.option)), {
          modal: C,
          modalData: s.modalData,
          modalKey: s.option.value,
          icon: n.value
        };
      }
      if (l.value === "lkt-anchor") {
        let b = s.download;
        typeof s.download == "function" ? b = () => s.download(s.option) : s.download.startsWith("prop:") && (b = s.download.substring(5), b = s.option[b]);
        let C = s.download !== "";
        return {
          href: b,
          target: C ? "_blank" : "",
          download: C
        };
      }
      return {};
    }), u = () => {
      i("click");
    };
    return (b, C) => (Z(), te(it(l.value), ui(v.value, {
      class: ["lkt-field--dropdown-option", c.value],
      title: b.option.label,
      onClick: u
    }), {
      default: Le(() => [
        n.value && l.value !== "lkt-button" ? (Z(), ne("div", Zl, [
          he("i", {
            class: Fe(n.value)
          }, null, 2)
        ])) : de("", !0),
        he("div", $l, Ke(r.value), 1)
      ]),
      _: 1
    }, 16, ["class", "title"]));
  }
}), ql = { class: "lkt-field-color--tooltip--rgba-container" }, jl = { class: "lkt-field-color--tooltip--numeric-input-container" }, Gl = { class: "like-lkt-field-label" }, mt = /* @__PURE__ */ xe({
  __name: "RgbaRange",
  props: {
    modelValue: { default: 0 },
    label: { default: "" },
    rangeClass: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, s = e, n = Y(s.modelValue);
    return ue(() => s.modelValue, (r) => n.value = r), ue(n, (r) => i("update:modelValue", r)), (r, c) => (Z(), ne("div", ql, [
      he("div", jl, [
        he("label", Gl, Ke(r.label), 1),
        le(nt, {
          modelValue: n.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => n.value = d),
          type: "number",
          min: "0",
          max: "255",
          step: "1"
        }, null, 8, ["modelValue"])
      ]),
      le(nt, {
        class: Fe(["color-range", r.rangeClass]),
        modelValue: n.value,
        "onUpdate:modelValue": c[1] || (c[1] = (d) => n.value = d),
        type: "range",
        min: "0",
        max: "255",
        step: "1"
      }, null, 8, ["class", "modelValue"])
    ]));
  }
});
class Kl {
  constructor(t) {
    this.r = 0, this.g = 0, this.b = 0, this.a = 255;
    for (let i in t)
      this.hasOwnProperty(i) && (this[i] = t[i]);
  }
}
const Yl = (e, t, i, s) => {
  let n = parseInt(e).toString(16).padStart(2, "0").toUpperCase(), r = parseInt(t).toString(16).padStart(2, "0").toUpperCase(), c = parseInt(i).toString(16).padStart(2, "0").toUpperCase(), d = "#" + n + r + c;
  if (s == 255) return d;
  let l = parseInt(s).toString(16).padStart(2, "0").toUpperCase();
  return d + l;
}, li = (e) => {
  let t = parseInt(+("0x" + e.substring(1, 3)), 10), i = parseInt(+("0x" + e.substring(3, 5)), 10), s = parseInt(+("0x" + e.substring(5, 7)), 10), n = 255;
  return e.length === 9 && (n = parseInt(+("0x" + e.substring(5, 7)), 10)), new Kl({ r: t, g: i, b: s, a: n });
}, Xl = (e) => (0.299 * e.r + 0.587 * e.g + 0.114 * e.b) / e.a > 0.5 ? "#000000" : "#ffffff", Jl = { class: "lkt-grid-1" }, Ql = { class: "lkt-field-color--tooltip--rgba-container" }, en = { class: "lkt-field-color--tooltip--hex-input-container" }, tn = /* @__PURE__ */ xe({
  __name: "ColorInput",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, s = e, n = (A) => {
      if ([0, 1].includes(A.length))
        d.value = 0, l.value = 0, v.value = 0, u.value = 255;
      else if ([7, 9].includes(A.length)) {
        let o = li(A);
        d.value = o.r, l.value = o.g, v.value = o.b, u.value = o.a;
      }
    }, r = (A) => {
      b.value = Yl(
        d.value,
        l.value,
        v.value,
        u.value
      );
    }, c = (A) => {
      n(b.value);
    }, d = Y(255), l = Y(255), v = Y(255), u = Y(255), b = Y(s.modelValue);
    n(b.value), ue([d, l, v, u], r), ue(() => s.modelValue, (A) => b.value = A), ue(b, (A) => i("update:modelValue", A));
    const C = X(() => Xl(li(b.value))), x = X(() => b.value === "" || b.value === "#" ? {} : {
      background: b.value,
      "--lkt-btn-bg": b.value,
      color: C.value,
      "--lkt-btn-color": C.value
    }), L = X(() => b.value === "" || b.value === "#" ? {} : {
      "--lkt-field-bg-input": b.value,
      "--lkt-field-color": C.value
    });
    return (A, o) => {
      const a = ye("lkt-button");
      return Z(), te(a, {
        class: "lkt-field--toggle-button",
        style: Xt(x.value),
        text: b.value,
        tooltip: "",
        "tooltip-class": "lkt-field-color--alpha--tooltip",
        "tooltip-location-y": "bottom",
        "tooltip-location-x": "left-corner"
      }, {
        tooltip: Le(({ doClose: f }) => [
          he("div", Jl, [
            he("div", Ql, [
              he("div", en, [
                o[5] || (o[5] = he("label", { class: "like-lkt-field-label" }, "HEX", -1)),
                le(nt, {
                  modelValue: b.value,
                  "onUpdate:modelValue": o[0] || (o[0] = (p) => b.value = p),
                  style: Xt(L.value),
                  onChange: c
                }, null, 8, ["modelValue", "style"])
              ])
            ]),
            le(mt, {
              modelValue: d.value,
              "onUpdate:modelValue": o[1] || (o[1] = (p) => d.value = p),
              label: "R",
              "range-class": "color-range--red"
            }, null, 8, ["modelValue"]),
            le(mt, {
              modelValue: l.value,
              "onUpdate:modelValue": o[2] || (o[2] = (p) => l.value = p),
              label: "G",
              "range-class": "color-range--green"
            }, null, 8, ["modelValue"]),
            le(mt, {
              modelValue: v.value,
              "onUpdate:modelValue": o[3] || (o[3] = (p) => v.value = p),
              label: "B",
              "range-class": "color-range--blue"
            }, null, 8, ["modelValue"]),
            le(mt, {
              modelValue: u.value,
              "onUpdate:modelValue": o[4] || (o[4] = (p) => u.value = p),
              label: "A",
              "range-class": "color-range--alpha"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["style", "text"]);
    };
  }
});
var Te = /* @__PURE__ */ ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(Te || {}), me = /* @__PURE__ */ ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(me || {});
class be {
  constructor(t, i) {
    this.code = void 0, this.status = me.Info, this.min = 0, this.max = 0, this.equalToValue = void 0, this.code = t, this.status = i;
  }
  setMin(t) {
    return this.min = t, this;
  }
  setMax(t) {
    return this.max = t, this;
  }
  setEqualToValue(t) {
    return this.equalToValue = t, this;
  }
  static createEmpty(t = me.Ko) {
    return new be(Te.Empty, t);
  }
  static createEmail(t = me.Ko) {
    return new be(Te.Email, t);
  }
  static createMinStr(t, i = me.Ko) {
    return new be(Te.MinStringLength, i).setMin(t);
  }
  static createMaxStr(t, i = me.Ko) {
    return new be(Te.MaxStringLength, i).setMax(t);
  }
  static createMinNum(t, i = me.Ko) {
    return new be(Te.MinNumber, i).setMin(t);
  }
  static createMaxNum(t, i = me.Ko) {
    return new be(Te.MaxNumber, i).setMax(t);
  }
  static createNumBetween(t, i, s = me.Ko) {
    return new be(Te.MaxNumber, s).setMin(t).setMax(i);
  }
  static createMinNumbers(t, i = me.Ko) {
    return new be(Te.MinNumbers, i).setMin(t);
  }
  static createMaxNumbers(t, i = me.Ko) {
    return new be(Te.MaxNumbers, i).setMax(t);
  }
  static createMinUpperChars(t, i = me.Ko) {
    return new be(Te.MinUpperChars, i).setMin(t);
  }
  static createMaxUpperChars(t, i = me.Ko) {
    return new be(Te.MaxUpperChars, i).setMax(t);
  }
  static createMinLowerChars(t, i = me.Ko) {
    return new be(Te.MinLowerChars, i).setMin(t);
  }
  static createMaxLowerChars(t, i = me.Ko) {
    return new be(Te.MaxLowerChars, i).setMax(t);
  }
  static createMinSpecialChars(t, i = me.Ko) {
    return new be(Te.MinSpecialChars, i).setMin(t);
  }
  static createMaxSpecialChars(t, i = me.Ko) {
    return new be(Te.MaxSpecialChars, i).setMax(t);
  }
  static createMinChars(t, i = me.Ko) {
    return new be(Te.MinChars, i).setMin(t);
  }
  static createMaxChars(t, i = me.Ko) {
    return new be(Te.MaxChars, i).setMax(t);
  }
  static createEqualTo(t, i = me.Ko) {
    return new be(Te.EqualTo, i).setEqualToValue(t);
  }
}
const ln = (e, t, i, s) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/\D+/g, "").length < n && e.push(be.createMinNumbers(n, me.Ko));
  }
  if (typeof s < "u") {
    let n = parseInt(s);
    t.replace(/\D+/g, "").length > n && e.push(be.createMaxNumbers(n, me.Ko));
  }
}, nn = (e, t, i, s) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/[^A-Z]+/g, "").length < n && e.push(be.createMinUpperChars(n, me.Ko));
  }
  if (typeof s < "u") {
    let n = parseInt(s);
    t.replace(/[^A-Z]+/g, "").length > n && e.push(be.createMaxUpperChars(n, me.Ko));
  }
}, sn = (e, t, i, s) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/[A-Z]+/g, "").length < n && e.push(be.createMinLowerChars(n, me.Ko));
  }
  if (typeof s < "u") {
    let n = parseInt(s);
    t.replace(/[A-Z]+/g, "").length > n && e.push(be.createMaxLowerChars(n, me.Ko));
  }
}, on = (e, t, i, s) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/\d+/g, "").length < n && e.push(be.createMinChars(n, me.Ko));
  }
  if (typeof s < "u") {
    let n = parseInt(s);
    t.replace(/\d+/g, "").length > n && e.push(be.createMaxChars(n, me.Ko));
  }
}, an = (e, t, i, s) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < n && e.push(be.createMinSpecialChars(n, me.Ko));
  }
  if (typeof s < "u") {
    let n = parseInt(s);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > n && e.push(be.createMaxSpecialChars(n, me.Ko));
  }
}, ni = (e, t = "default") => {
  let i = J.validationMessages[t] && J.validationMessages[t][e] ? J.validationMessages[t][e] : "";
  return i || (i = ""), i;
};
var qe = /* @__PURE__ */ ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(qe || {});
const rn = { class: "boolean-input" }, un = { class: "boolean-input-label" }, cn = { class: "boolean-input--check-on" }, dn = {
  key: 0,
  class: "lkt-field-icon-ok"
}, fn = ["innerHTML"], hn = ["name", "id", "disabled", "readonly", "value", "checked"], pn = /* @__PURE__ */ xe({
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
  emits: ["update:modelValue", "focus", "blur"],
  setup(e, { emit: t }) {
    const i = t, s = e, n = Y(null), r = Y(s.modelValue), c = Y(r.value ? "true" : "false"), d = Y(s.focusing), l = (u) => {
      d.value = !0, i("focus", u);
    }, v = (u) => {
      d.value = !1, i("blur", u);
    };
    return ue(() => s.modelValue, (u) => r.value = u), ue(r, (u) => i("update:modelValue", u)), (u, b) => (Z(), ne("div", rn, [
      he("div", un, [
        he("div", cn, [
          u.type === ae(W).Check && r.value ? (Z(), ne("i", dn)) : de("", !0)
        ])
      ]),
      u.label ? (Z(), ne("div", {
        key: 0,
        class: "lkt-field--label",
        innerHTML: u.label
      }, null, 8, fn)) : de("", !0),
      Be(he("input", {
        "onUpdate:modelValue": b[0] || (b[0] = (C) => r.value = C),
        type: "checkbox",
        ref_key: "input",
        ref: n,
        name: u.name,
        id: u.id,
        disabled: !u.editable || u.disabled,
        readonly: !u.editable || u.readonly,
        value: c.value,
        checked: r.value,
        onFocus: l,
        onBlur: v
      }, null, 40, hn), [
        [Ll, r.value]
      ])
    ]));
  }
});
var we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ce(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(vi);
var gn = vi.exports;
const bi = /* @__PURE__ */ Ce(gn);
var _i = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(_i);
var mn = _i.exports;
const yi = /* @__PURE__ */ Ce(mn);
var wi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(wi);
var vn = wi.exports;
const Ci = /* @__PURE__ */ Ce(vn);
var ki = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(ki);
var bn = ki.exports;
const xi = /* @__PURE__ */ Ce(bn);
var Si = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(Si);
var _n = Si.exports;
const yt = /* @__PURE__ */ Ce(_n);
var Ei = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(Ei);
var yn = Ei.exports;
const Li = /* @__PURE__ */ Ce(yn);
var Ti = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(Ti);
var wn = Ti.exports;
const Ni = /* @__PURE__ */ Ce(wn);
var zi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(zi);
var Cn = zi.exports;
const Bi = /* @__PURE__ */ Ce(Cn);
var Ri = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG una finestra con un documento");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(Ri);
var kn = Ri.exports;
const Ai = /* @__PURE__ */ Ce(kn);
var Mi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(Mi);
var xn = Mi.exports;
const Ii = /* @__PURE__ */ Ce(xn);
var Di = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(Di);
var Sn = Di.exports;
const Hi = /* @__PURE__ */ Ce(Sn);
var Oi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(Oi);
var En = Oi.exports;
const Fi = /* @__PURE__ */ Ce(En);
var Vi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(Vi);
var Ln = Vi.exports;
const Pi = /* @__PURE__ */ Ce(Ln);
var Ui = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(Ui);
var Tn = Ui.exports;
const Wi = /* @__PURE__ */ Ce(Tn);
var Zi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(Zi);
var Nn = Zi.exports;
const $i = /* @__PURE__ */ Ce(Nn);
var qi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(qi);
var zn = qi.exports;
const ji = /* @__PURE__ */ Ce(zn);
var Gi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(Gi);
var Bn = Gi.exports;
const Ki = /* @__PURE__ */ Ce(Bn);
var Yi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(Yi);
var Rn = Yi.exports;
const Xi = /* @__PURE__ */ Ce(Rn);
var Ji = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(Ji);
var An = Ji.exports;
const Qi = /* @__PURE__ */ Ce(An);
var el = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(el);
var Mn = el.exports;
const tl = /* @__PURE__ */ Ce(Mn);
var il = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      value: s
    })), s;
  });
})(il);
var In = il.exports;
const ll = /* @__PURE__ */ Ce(In), Dn = { ckb: bi, cs: yi, da: Ci, de: xi, en: yt, es: Li, fr: Ni, he: Bi, it: Ai, ja: Ii, ko: Hi, lv: Fi, nl: Pi, pl: Wi, pt_br: $i, ro: ji, ru: Ki, se: Xi, ua: Qi, ur: tl, zh_cn: ll }, si = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: bi,
  cs: yi,
  da: Ci,
  de: xi,
  default: Dn,
  en: yt,
  es: Li,
  fr: Ni,
  he: Bi,
  it: Ai,
  ja: Ii,
  ko: Hi,
  lv: Fi,
  nl: Pi,
  pl: Wi,
  pt_br: $i,
  ro: ji,
  ru: Ki,
  se: Xi,
  ua: Qi,
  ur: tl,
  zh_cn: ll
}, Symbol.toStringTag, { value: "Module" })), Hn = {
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
}, On = {
  name: "align",
  display: "submenu",
  add: function(e, t) {
    const i = e.icons, s = e.context;
    s.align = {
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
    let n = this.setSubmenu(e), r = s.align._itemMenu = n.querySelector("ul");
    r.addEventListener("click", this.pickup.bind(e)), s.align._alignList = r.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, r = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.icons, s = e.util.createElement("DIV"), n = e.options.alignItems;
    let r = "";
    for (let c = 0, d, l; c < n.length; c++)
      d = n[c], l = t.toolbar["align" + d.charAt(0).toUpperCase() + d.slice(1)], r += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + d + '" title="' + l + '" aria-label="' + l + '"><span class="se-list-icon">' + i["align_" + d] + "</span>" + l + "</button></li>";
    return s.className = "se-submenu se-list-layer se-list-align", s.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + r + "</ul></div>", s;
  },
  /**
   * @Override core
   */
  active: function(e) {
    const t = this.context.align, i = t.targetButton, s = i.firstElementChild;
    if (!e)
      this.util.changeElement(s, t.icons[t.defaultDir]), i.removeAttribute("data-focus");
    else if (this.util.isFormatElement(e)) {
      const n = e.style.textAlign;
      if (n)
        return this.util.changeElement(s, t.icons[n] || t.icons[t.defaultDir]), i.setAttribute("data-focus", n), !0;
    }
    return !1;
  },
  /**
   * @Override submenu
   */
  on: function() {
    const e = this.context.align, t = e._alignList, i = e.targetButton.getAttribute("data-focus") || e.defaultDir;
    if (i !== e.currentAlign) {
      for (let s = 0, n = t.length; s < n; s++)
        i === t[s].getAttribute("data-value") ? this.util.addClass(t[s], "active") : this.util.removeClass(t[s], "active");
      e.currentAlign = i;
    }
  },
  exchangeDir: function() {
    const e = this.options.rtl ? "right" : "left";
    if (!this.context.align || this.context.align.defaultDir === e) return;
    this.context.align.defaultDir = e;
    let t = this.context.align._itemMenu, i = t.querySelector('[data-value="left"]'), s = t.querySelector('[data-value="right"]');
    if (i && s) {
      const n = i.parentElement, r = s.parentElement;
      n.appendChild(s), r.appendChild(i);
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !i && !/UL/i.test(t.tagName); )
      i = t.getAttribute("data-value"), t = t.parentNode;
    if (!i) return;
    const s = this.context.align.defaultDir, n = this.getSelectedElements();
    for (let r = 0, c = n.length; r < c; r++)
      this.util.setStyle(n[r], "textAlign", i === s ? "" : i);
    this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1);
  }
}, Fn = {
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
    let s = this.setSubmenu(e);
    s.querySelector(".se-list-inner").addEventListener("click", this.pickup.bind(e)), i.font._fontList = s.querySelectorAll("ul li button"), e.initMenuTarget(this.name, t, s), s = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-font-family";
    let s, n, r, c, d = e.options.font, l = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (r = 0, c = d.length; r < c; r++)
      s = d[r], n = s.split(",")[0], l += '<li><button type="button" class="se-btn-list" data-value="' + s + '" data-txt="' + n + '" title="' + n + '" aria-label="' + n + '" style="font-family:' + s + ';">' + n + "</button></li>";
    return l += "</ul></div>", i.innerHTML = l, i;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.font.targetText, i = this.context.font.targetTooltip;
    if (e) {
      if (e.style && e.style.fontFamily.length > 0) {
        const s = e.style.fontFamily.replace(/["']/g, "");
        return this.util.changeTxt(t, s), this.util.changeTxt(i, this.lang.toolbar.font + " (" + s + ")"), !0;
      }
    } else {
      const s = this.hasFocus ? this.wwComputedStyle.fontFamily : this.lang.toolbar.font;
      this.util.changeTxt(t, s), this.util.changeTxt(i, this.hasFocus ? this.lang.toolbar.font + (s ? " (" + s + ")" : "") : s);
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.font, t = e._fontList, i = e.targetText.textContent;
    if (i !== e.currentFont) {
      for (let s = 0, n = t.length; s < n; s++)
        i === (t[s].getAttribute("data-value") || "").replace(/'|"/g, "") ? this.util.addClass(t[s], "active") : this.util.removeClass(t[s], "active");
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
}, Vn = {
  name: "fontSize",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.fontSize = {
      targetText: t.querySelector(".txt"),
      _sizeList: null,
      currentSize: ""
    };
    let s = this.setSubmenu(e), n = s.querySelector("ul");
    n.addEventListener("click", this.pickup.bind(e)), i.fontSize._sizeList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null, n = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, s = e.util.createElement("DIV");
    s.className = "se-submenu se-list-layer se-list-font-size";
    const n = t.fontSize ? t.fontSize : [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
    let r = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let c = 0, d = t.fontSizeUnit, l = n.length, v; c < l; c++)
      v = n[c], r += '<li><button type="button" class="se-btn-list" data-value="' + v + d + '" title="' + v + d + '" aria-label="' + v + d + '" style="font-size:' + v + d + ';">' + v + "</button></li>";
    return r += "</ul></div>", s.innerHTML = r, s;
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
      for (let s = 0, n = t.length; s < n; s++)
        i === t[s].getAttribute("data-value") ? this.util.addClass(t[s], "active") : this.util.removeClass(t[s], "active");
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
}, nl = {
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
    const i = e.options, s = e.lang, n = !i.colorList || i.colorList.length === 0 ? [
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
    let r = [], c = '<div class="se-list-inner">';
    for (let d = 0, l = n.length, v; d < l; d++)
      v = n[d], v && (typeof v == "string" && (r.push(v), d < l - 1) || (r.length > 0 && (c += '<div class="se-selector-color">' + t(r) + "</div>", r = []), typeof v == "object" && (c += '<div class="se-selector-color">' + t(v) + "</div>")));
    return c += '<form class="se-form-group"><input type="text" maxlength="9" class="_se_color_picker_input se-color-input"/><button type="submit" class="se-btn-primary _se_color_picker_submit" title="' + s.dialogBox.submitButton + '" aria-label="' + s.dialogBox.submitButton + '">' + e.icons.checked + '</button><button type="button" class="se-btn _se_color_picker_remove" title="' + s.toolbar.removeFormat + '" aria-label="' + s.toolbar.removeFormat + '">' + e.icons.erase + "</button></form></div>", c;
  },
  /**
   * @description Internal function used by this.createColorList
   * @param {Array} colorList Color list
   * @private
   */
  _makeColorList: function(e) {
    let t = "";
    t += '<ul class="se-color-pallet">';
    for (let i = 0, s = e.length, n; i < s; i++)
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
    let s = t || i.getColorInNode.call(this, e) || this.context.colorPicker._defaultColor;
    s = i.isHexColor(s) ? s : i.rgb2hex(s) || s;
    const n = this.context.colorPicker._colorList;
    if (n)
      for (let r = 0, c = n.length; r < c; r++)
        s.toLowerCase() === n[r].getAttribute("data-value").toLowerCase() ? this.util.addClass(n[r], "active") : this.util.removeClass(n[r], "active");
    i.setInputText.call(this, i.colorName2hex.call(this, s));
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
    var i = this._w.getComputedStyle(this._d.body.appendChild(t)).color.match(/\d+/g).map(function(s) {
      return parseInt(s, 10);
    });
    return this.util.removeItem(t), i.length >= 3 ? "#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).substr(1) : !1;
  }
}, Pn = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([nl]);
    const i = e.context;
    i.fontColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let s = this.setSubmenu(e);
    i.fontColor.colorInput = s.querySelector("._se_color_picker_input"), i.fontColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), s.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), s.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), s.addEventListener("click", this.pickup.bind(e)), i.fontColor.colorList = s.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null;
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
}, Un = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([nl]);
    const i = e.context;
    i.hiliteColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let s = this.setSubmenu(e);
    i.hiliteColor.colorInput = s.querySelector("._se_color_picker_input"), i.hiliteColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), s.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), s.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), s.addEventListener("click", this.pickup.bind(e)), i.hiliteColor.colorList = s.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null;
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
}, Wn = {
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
    const t = e.lang, i = e.util.createElement("DIV"), s = e.options.hrItems || [{ name: t.toolbar.hr_solid, class: "__se__solid" }, { name: t.toolbar.hr_dashed, class: "__se__dashed" }, { name: t.toolbar.hr_dotted, class: "__se__dotted" }];
    let n = "";
    for (let r = 0, c = s.length; r < c; r++)
      n += '<li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="' + s[r].class + '" title="' + s[r].name + '" aria-label="' + s[r].name + '"><hr' + (s[r].class ? ' class="' + s[r].class + '"' : "") + (s[r].style ? ' style="' + s[r].style + '"' : "") + "/></button></li>";
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
    const s = this.plugins.horizontalRule.appendHr.call(this, t.firstElementChild);
    s && (this.setRange(s, 0, s, 0), this.submenuOff());
  }
}, Zn = {
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
    let s = this.setSubmenu(e), n = s.querySelector("ul");
    n.addEventListener("click", this.pickup.bind(e)), i.list._list = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null, n = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    return i.className = "se-submenu se-list-layer", i.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="OL" title="' + t.toolbar.orderList + '" aria-label="' + t.toolbar.orderList + '">' + e.icons.list_number + '</button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="UL" title="' + t.toolbar.unorderList + '" aria-label="' + t.toolbar.unorderList + '">' + e.icons.list_bullets + "</button></li></ul></div>", i;
  },
  /**
  * @Override core
  */
  active: function(e) {
    const t = this.context.list.targetButton, i = t.firstElementChild, s = this.util;
    if (s.isList(e)) {
      const n = e.nodeName;
      return t.setAttribute("data-focus", n), s.addClass(t, "active"), /UL/i.test(n) ? s.changeElement(i, this.context.list.icons.bullets) : s.changeElement(i, this.context.list.icons.number), !0;
    } else
      t.removeAttribute("data-focus"), s.changeElement(i, this.context.list.icons.number), s.removeClass(t, "active");
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.list, t = e._list, i = e.targetButton.getAttribute("data-focus") || "";
    if (i !== e.currentList) {
      for (let s = 0, n = t.length; s < n; s++)
        i === t[s].getAttribute("data-command") ? this.util.addClass(t[s], "active") : this.util.removeClass(t[s], "active");
      e.currentList = i;
    }
  },
  editList: function(e, t, i) {
    let s = this.getRange(), n = t || this.getSelectedElementsAndComponents(!1);
    if (n.length === 0 && (t || (s = this.getRange_addLine(s, null), n = this.getSelectedElementsAndComponents(!1), n.length === 0)))
      return;
    const r = this.util;
    r.sortByDepth(n, !0);
    let c = n[0], d = n[n.length - 1], l = (r.isListCell(c) || r.isComponent(c)) && !c.previousElementSibling ? c.parentNode.previousElementSibling : c.previousElementSibling, v = (r.isListCell(d) || r.isComponent(d)) && !d.nextElementSibling ? d.parentNode.nextElementSibling : d.nextElementSibling;
    const u = s.collapsed, b = {
      sc: s.startContainer,
      so: s.startContainer === s.endContainer && r.onlyZeroWidthSpace(s.startContainer) && s.startOffset === 0 && s.endOffset === 1 ? s.endOffset : s.startOffset,
      ec: s.endContainer,
      eo: s.endOffset
    };
    let C = null, x = !0;
    for (let L = 0, A = n.length; L < A; L++)
      if (!r.isList(r.getRangeFormatElement(n[L], (function(o) {
        return this.getRangeFormatElement(o) && o !== n[L];
      }).bind(r)))) {
        x = !1;
        break;
      }
    if (x && (!l || c.tagName !== l.tagName || e !== l.tagName.toUpperCase()) && (!v || d.tagName !== v.tagName || e !== v.tagName.toUpperCase())) {
      if (i) {
        for (let p = 0, h = n.length; p < h; p++)
          for (let g = p - 1; g >= 0; g--)
            if (n[g].contains(n[p])) {
              n.splice(p, 1), p--, h--;
              break;
            }
      }
      const L = r.getRangeFormatElement(c), A = L && L.tagName === e;
      let o, a;
      const f = (function(p) {
        return !this.isComponent(p);
      }).bind(r);
      A || (a = r.createElement(e));
      for (let p = 0, h = n.length, g, m; p < h; p++)
        m = r.getRangeFormatElement(n[p], f), !(!m || !r.isList(m)) && (g ? g !== m ? (i && r.isListCell(m.parentNode) ? this.plugins.list._detachNested.call(this, o.f) : C = this.detachRangeFormatElement(o.f[0].parentNode, o.f, a, !1, !0), m = n[p].parentNode, A || (a = r.createElement(e)), g = m, o = { r: g, f: [r.getParentElement(n[p], "LI")] }) : o.f.push(r.getParentElement(n[p], "LI")) : (g = m, o = { r: g, f: [r.getParentElement(n[p], "LI")] }), p === h - 1 && (i && r.isListCell(m.parentNode) ? this.plugins.list._detachNested.call(this, o.f) : C = this.detachRangeFormatElement(o.f[0].parentNode, o.f, a, !1, !0)));
    } else {
      const L = l && l.parentNode, A = v && v.parentNode;
      l = L && !r.isWysiwygDiv(L) && L.nodeName === e ? L : l, v = A && !r.isWysiwygDiv(A) && A.nodeName === e ? A : v;
      const o = l && l.tagName === e, a = v && v.tagName === e;
      let f = o ? l : r.createElement(e), p = null, h = null, g = null;
      const m = (function(y) {
        return !this.isComponent(y) && !this.isList(y);
      }).bind(r);
      for (let y = 0, w = n.length, _, k, M, E, T, z, V, U, P; y < w; y++) {
        if (k = n[y], k.childNodes.length === 0 && !r._isIgnoreNodeChange(k)) {
          r.removeItem(k);
          continue;
        }
        if (E = n[y + 1], T = k.parentNode, z = E ? E.parentNode : null, M = r.isListCell(k), P = r.isRangeFormatElement(T) ? T : null, V = M && !r.isWysiwygDiv(T) ? T.parentNode : T, U = M && !r.isWysiwygDiv(T) ? !E || r.isListCell(V) ? T : T.nextSibling : k.nextSibling, _ = r.createElement("LI"), r.copyFormatAttributes(_, k), y === 0 && b.sc === k && (b.sc = _), y === w - 1 && b.ec === k && (b.ec = _), r.isComponent(k)) {
          const D = /^HR$/i.test(k.nodeName);
          D || (_.innerHTML = "<br>"), _.innerHTML += k.outerHTML, D && (_.innerHTML += "<br>");
        } else {
          const D = k.childNodes;
          for (; D[0]; )
            _.appendChild(D[0]);
        }
        f.appendChild(_), (!E || V !== z || r.isRangeFormatElement(U)) && (p || (p = f), (!o || !E || V !== z) && !(E && r.isList(z) && z === T) && f.parentNode !== V && V.insertBefore(f, U)), r.removeItem(k), o && h === null && (h = f.children.length - 1), E && (r.getRangeFormatElement(z, m) !== r.getRangeFormatElement(T, m) || r.isList(z) && r.isList(T) && r.getElementDepth(z) !== r.getElementDepth(T)) && (f = r.createElement(e)), P && P.children.length === 0 && r.removeItem(P);
      }
      h && (p = p.children[h]), a && (g = f.children.length - 1, f.innerHTML += v.innerHTML, f.children[g], r.removeItem(v));
    }
    return this.effectNode = null, u ? C : b;
  },
  _detachNested: function(e) {
    const t = e[0], i = e[e.length - 1], s = i.nextElementSibling, n = t.parentNode, r = n.parentNode.nextElementSibling, c = n.parentNode.parentNode;
    for (let l = 0, v = e.length; l < v; l++)
      c.insertBefore(e[l], r);
    if (s && n.children.length > 0) {
      const l = n.cloneNode(!1), v = n.childNodes, u = this.util.getPositionIndex(s);
      for (; v[u]; )
        l.appendChild(v[u]);
      i.appendChild(l);
    }
    n.children.length === 0 && this.util.removeItem(n), this.util.mergeSameTags(c);
    const d = this.util.getEdgeChildNodes(t, i);
    return {
      cc: t.parentNode,
      sc: d.sc,
      ec: d.ec
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
    let s = t[0].parentNode, n = t[i - 1], r = null;
    if (e) {
      if (s !== n.parentNode && this.util.isList(n.parentNode.parentNode) && n.nextElementSibling)
        for (n = n.nextElementSibling; n; )
          t.push(n), n = n.nextElementSibling;
      r = this.plugins.list.editList.call(this, s.nodeName.toUpperCase(), t, !0);
    } else {
      let c = this.util.createElement(s.nodeName), d = t[0].previousElementSibling, l = n.nextElementSibling;
      const v = { s: null, e: null, sl: s, el: s };
      for (let C = 0, x = i, L; C < x; C++)
        L = t[C], L.parentNode !== s && (this.plugins.list._insiedList.call(this, s, c, d, l, v), s = L.parentNode, c = this.util.createElement(s.nodeName)), d = L.previousElementSibling, l = L.nextElementSibling, c.appendChild(L);
      this.plugins.list._insiedList.call(this, s, c, d, l, v);
      const u = this.util.getNodeFromPath(v.s, v.sl), b = this.util.getNodeFromPath(v.e, v.el);
      r = {
        sc: u,
        so: 0,
        ec: b,
        eo: b.textContent.length
      };
    }
    return r;
  },
  _insiedList: function(e, t, i, s, n) {
    let r = !1;
    if (i && t.tagName === i.tagName) {
      const c = t.children;
      for (; c[0]; )
        i.appendChild(c[0]);
      t = i, r = !0;
    }
    if (s && t.tagName === s.tagName) {
      const c = s.children;
      for (; c[0]; )
        t.appendChild(c[0]);
      const d = s.nextElementSibling;
      s.parentNode.removeChild(s), s = d;
    }
    if (!r) {
      this.util.isListCell(i) && (e = i, s = null), e.insertBefore(t, s), n.s || (n.s = this.util.getNodePath(t.firstElementChild.firstChild, e, null), n.sl = e);
      const c = e.contains(n.sl) ? this.util.getNodePath(n.sl, e) : null;
      n.e = this.util.getNodePath(t.lastElementChild.firstChild, e, null), n.el = e, this.util.mergeSameTags(e, [n.s, n.e, c], !1), this.util.mergeNestedTags(e), c && (n.sl = this.util.getNodeFromPath(c, e));
    }
    return t;
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = "";
    for (; !i && !/^UL$/i.test(t.tagName); )
      i = t.getAttribute("data-command"), t = t.parentNode;
    if (!i) return;
    const s = this.plugins.list.editList.call(this, i, null, !1);
    s && this.setRange(s.sc, s.so, s.ec, s.eo), this.submenuOff(), this.history.push(!1);
  }
}, $n = {
  name: "table",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    let s = i.table = {
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
    }, n = this.setSubmenu(e), r = n.querySelector(".se-controller-table-picker");
    s.tableHighlight = n.querySelector(".se-table-size-highlighted"), s.tableUnHighlight = n.querySelector(".se-table-size-unhighlighted"), s.tableDisplay = n.querySelector(".se-table-size-display"), e.options.rtl && (s.tableHighlight.style.left = 10 * 18 - 13 + "px");
    let c = this.setController_table(e);
    s.tableController = c, s.resizeButton = c.querySelector("._se_table_resize"), s.resizeText = c.querySelector("._se_table_resize > span > span"), s.columnFixedButton = c.querySelector("._se_table_fixed_column"), s.headerButton = c.querySelector("._se_table_header");
    let d = this.setController_tableEditor(e, s.cellControllerTop);
    s.resizeDiv = d, s.splitMenu = d.querySelector(".se-btn-group-sub"), s.mergeButton = d.querySelector("._se_table_merge_button"), s.splitButton = d.querySelector("._se_table_split_button"), s.insertRowAboveButton = d.querySelector("._se_table_insert_row_a"), s.insertRowBelowButton = d.querySelector("._se_table_insert_row_b"), r.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, s)), r.addEventListener("click", this.appendTable.bind(e)), d.addEventListener("click", this.onClick_tableController.bind(e)), c.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, n), i.element.relative.appendChild(d), i.element.relative.appendChild(c), n = null, r = null, d = null, c = null, s = null;
  },
  setSubmenu: function(e) {
    const t = e.util.createElement("DIV");
    return t.className = "se-submenu se-selector-table", t.innerHTML = '<div class="se-table-size"><div class="se-table-size-picker se-controller-table-picker"></div><div class="se-table-size-highlighted"></div><div class="se-table-size-unhighlighted"></div></div><div class="se-table-size-display">1 x 1</div>', t;
  },
  setController_table: function(e) {
    const t = e.lang, i = e.icons, s = e.util.createElement("DIV");
    return s.className = "se-controller se-controller-table", s.innerHTML = '<div><div class="se-btn-group"><button type="button" data-command="resize" class="se-btn se-tooltip _se_table_resize">' + i.expansion + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.maxSize + '</span></span></button><button type="button" data-command="layout" class="se-btn se-tooltip _se_table_fixed_column">' + i.fixed_column_width + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.fixedColumnWidth + '</span></span></button><button type="button" data-command="header" class="se-btn se-tooltip _se_table_header">' + i.table_header + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.tableHeader + '</span></span></button><button type="button" data-command="remove" class="se-btn se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", s;
  },
  setController_tableEditor: function(e, t) {
    const i = e.lang, s = e.icons, n = e.util.createElement("DIV");
    return n.className = "se-controller se-controller-table-cell", n.innerHTML = (t ? "" : '<div class="se-arrow se-arrow-up"></div>') + '<div class="se-btn-group"><button type="button" data-command="insert" data-value="row" data-option="up" class="se-btn se-tooltip _se_table_insert_row_a">' + s.insert_row_above + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowAbove + '</span></span></button><button type="button" data-command="insert" data-value="row" data-option="down" class="se-btn se-tooltip _se_table_insert_row_b">' + s.insert_row_below + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowBelow + '</span></span></button><button type="button" data-command="delete" data-value="row" class="se-btn se-tooltip">' + s.delete_row + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteRow + '</span></span></button><button type="button" data-command="merge" class="_se_table_merge_button se-btn se-tooltip" disabled>' + s.merge_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.mergeCells + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="insert" data-value="cell" data-option="left" class="se-btn se-tooltip">' + s.insert_column_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnBefore + '</span></span></button><button type="button" data-command="insert" data-value="cell" data-option="right" class="se-btn se-tooltip">' + s.insert_column_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnAfter + '</span></span></button><button type="button" data-command="delete" data-value="cell" class="se-btn se-tooltip">' + s.delete_column + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteColumn + '</span></span></button><button type="button" data-command="onsplit" class="_se_table_split_button se-btn se-tooltip">' + s.split_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.splitCells + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-table-split"><div class="se-list-inner"><ul class="se-list-basic"><li class="se-btn-list" data-command="split" data-value="vertical" style="line-height:32px;" title="' + i.controller.VerticalSplit + '" aria-label="' + i.controller.VerticalSplit + '">' + i.controller.VerticalSplit + '</li><li class="se-btn-list" data-command="split" data-value="horizontal" style="line-height:32px;" title="' + i.controller.HorizontalSplit + '" aria-label="' + i.controller.HorizontalSplit + '">' + i.controller.HorizontalSplit + "</li></ul></div></div></div>", n;
  },
  appendTable: function() {
    const e = this.util.createElement("TABLE"), t = this.plugins.table.createCells, i = this.context.table._tableXY[0];
    let s = this.context.table._tableXY[1], n = "<tbody>";
    for (; s > 0; )
      n += "<tr>" + t.call(this, "td", i) + "</tr>", --s;
    if (n += "</tbody>", e.innerHTML = n, this.insertComponent(e, !1, !0, !1)) {
      const c = e.querySelector("td div");
      this.setRange(c, 0, c, 0), this.plugins.table.reset_table_picker.call(this);
    }
  },
  createCells: function(e, t, i) {
    if (e = e.toLowerCase(), i) {
      const s = this.util.createElement(e);
      return s.innerHTML = "<div><br></div>", s;
    } else {
      let s = "";
      for (; t > 0; )
        s += "<" + e + "><div><br></div></" + e + ">", t--;
      return s;
    }
  },
  onMouseMove_tablePicker: function(e, t) {
    t.stopPropagation();
    let i = this._w.Math.ceil(t.offsetX / 18), s = this._w.Math.ceil(t.offsetY / 18);
    i = i < 1 ? 1 : i, s = s < 1 ? 1 : s, e._rtl && (e.tableHighlight.style.left = i * 18 - 13 + "px", i = 11 - i), e.tableHighlight.style.width = i + "em", e.tableHighlight.style.height = s + "em", this.util.changeTxt(e.tableDisplay, i + " x " + s), e._tableXY = [i, s];
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
      for (let s = 0, n = i.length; s < n; s++)
        this.util.removeClass(i[s], "se-table-selected-cell");
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
    const s = i._element || this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    i._maxWidth = this.util.hasClass(s, "se-table-size-100") || s.style.width === "100%" || !s.style.width && !this.util.hasClass(s, "se-table-size-auto"), i._fixedColumn = this.util.hasClass(s, "se-table-layout-fixed") || s.style.tableLayout === "fixed", t.setTableStyle.call(this, i._maxWidth ? "width|column" : "width"), t.setPositionControllerTop.call(this, s), t.setPositionControllerDiv.call(this, e, t._shift), t._shift || this.controllersOn(i.resizeDiv, i.tableController, t.init.bind(this), e, "table");
  },
  setPositionControllerTop: function(e) {
    this.setControllerPosition(this.context.table.tableController, e, "top", { left: 0, top: 0 });
  },
  setPositionControllerDiv: function(e, t) {
    const i = this.context.table, s = i.resizeDiv;
    this.plugins.table.setCellInfo.call(this, e, t), i.cellControllerTop ? this.setControllerPosition(s, i._element, "top", { left: i.tableController.offsetWidth, top: 0 }) : this.setControllerPosition(s, e, "bottom", { left: 0, top: 0 });
  },
  setCellInfo: function(e, t) {
    const i = this.context.table, s = i._element = this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    if (/THEAD/i.test(s.firstElementChild.nodeName) ? this.util.addClass(i.headerButton, "active") : this.util.removeClass(i.headerButton, "active"), t || i._physical_cellCnt === 0) {
      i._tdElement !== e && (i._tdElement = e, i._trElement = e.parentNode);
      const n = i._trElements = s.rows, r = e.cellIndex;
      let c = 0;
      for (let u = 0, b = n[0].cells, C = n[0].cells.length; u < C; u++)
        c += b[u].colSpan;
      const d = i._rowIndex = i._trElement.rowIndex;
      i._rowCnt = n.length, i._physical_cellCnt = i._trElement.cells.length, i._logical_cellCnt = c, i._physical_cellIndex = r, i._current_colSpan = i._tdElement.colSpan - 1, i._current_rowSpan - i._trElement.cells[r].rowSpan - 1;
      let l = [], v = [];
      for (let u = 0, b, C; u <= d; u++) {
        b = n[u].cells, C = 0;
        for (let x = 0, L = b.length, A, o, a, f; x < L; x++) {
          if (A = b[x], o = A.colSpan - 1, a = A.rowSpan - 1, f = x + C, v.length > 0)
            for (let p = 0, h; p < v.length; p++)
              h = v[p], !(h.row > u) && (f >= h.index ? (C += h.cs, f += h.cs, h.rs -= 1, h.row = u + 1, h.rs < 1 && (v.splice(p, 1), p--)) : x === L - 1 && (h.rs -= 1, h.row = u + 1, h.rs < 1 && (v.splice(p, 1), p--)));
          if (u === d && x === r) {
            i._logical_cellIndex = f;
            break;
          }
          a > 0 && l.push({
            index: f,
            cs: o + 1,
            rs: a,
            row: -1
          }), C += o;
        }
        v = v.concat(l).sort(function(x, L) {
          return x.index - L.index;
        }), l = [];
      }
      l = null, v = null;
    }
  },
  editTable: function(e, t) {
    const i = this.plugins.table, s = this.context.table, n = s._element, r = e === "row";
    if (r) {
      const c = s._trElement.parentNode;
      if (/^THEAD$/i.test(c.nodeName)) {
        if (t === "up")
          return;
        if (!c.nextElementSibling || !/^TBODY$/i.test(c.nextElementSibling.nodeName)) {
          n.innerHTML += "<tbody><tr>" + i.createCells.call(this, "td", s._logical_cellCnt, !1) + "</tr></tbody>";
          return;
        }
      }
    }
    if (i._ref) {
      const c = s._tdElement, d = i._selectedCells;
      if (r)
        if (t)
          i.setCellInfo.call(this, t === "up" ? d[0] : d[d.length - 1], !0), i.editRow.call(this, t, c);
        else {
          let l = d[0].parentNode;
          const v = [d[0]];
          for (let u = 1, b = d.length, C; u < b; u++)
            C = d[u], l !== C.parentNode && (v.push(C), l = C.parentNode);
          for (let u = 0, b = v.length; u < b; u++)
            i.setCellInfo.call(this, v[u], !0), i.editRow.call(this, t);
        }
      else {
        const l = d[0].parentNode;
        if (t) {
          let v = null;
          for (let u = 0, b = d.length - 1; u < b; u++)
            if (l !== d[u + 1].parentNode) {
              v = d[u];
              break;
            }
          i.setCellInfo.call(this, t === "left" ? d[0] : v || d[0], !0), i.editCell.call(this, t, c);
        } else {
          const v = [d[0]];
          for (let u = 1, b = d.length, C; u < b && (C = d[u], l === C.parentNode); u++)
            v.push(C);
          for (let u = 0, b = v.length; u < b; u++)
            i.setCellInfo.call(this, v[u], !0), i.editCell.call(this, t);
        }
      }
      t || i.init.call(this);
    } else
      i[r ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const c = n.children;
      for (let d = 0; d < c.length; d++)
        c[d].children.length === 0 && (this.util.removeItem(c[d]), d--);
      n.children.length === 0 && this.util.removeItem(n);
    }
  },
  editRow: function(e, t) {
    const i = this.context.table, s = !e, n = e === "up", r = i._rowIndex, c = s || n ? r : r + i._current_rowSpan + 1, d = s ? -1 : 1, l = i._trElements;
    let v = i._logical_cellCnt;
    for (let u = 0, b = r + (s ? -1 : 0), C; u <= b; u++) {
      if (C = l[u].cells, C.length === 0) return;
      for (let x = 0, L = C.length, A, o; x < L; x++)
        A = C[x].rowSpan, o = C[x].colSpan, !(A < 2 && o < 2) && A + u > c && c > u && (C[x].rowSpan = A + d, v -= o);
    }
    if (s) {
      const u = l[r + 1];
      if (u) {
        const b = [];
        let C = l[r].cells, x = 0;
        for (let L = 0, A = C.length, o, a; L < A; L++)
          o = C[L], a = L + x, x += o.colSpan - 1, o.rowSpan > 1 && (o.rowSpan -= 1, b.push({ cell: o.cloneNode(!1), index: a }));
        if (b.length > 0) {
          let L = b.shift();
          C = u.cells, x = 0;
          for (let A = 0, o = C.length, a, f; A < o && (a = C[A], f = A + x, x += a.colSpan - 1, !(f >= L.index && (A--, x--, x += L.cell.colSpan - 1, u.insertBefore(L.cell, a), L = b.shift(), !L))); A++)
            ;
          if (L) {
            u.appendChild(L.cell);
            for (let A = 0, o = b.length; A < o; A++)
              u.appendChild(b[A].cell);
          }
        }
      }
      i._element.deleteRow(c);
    } else {
      const u = i._element.insertRow(c);
      u.innerHTML = this.plugins.table.createCells.call(this, "td", v, !1);
    }
    s ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  editCell: function(e, t) {
    const i = this.context.table, s = this.util, n = !e, r = e === "left", c = i._current_colSpan, d = n || r ? i._logical_cellIndex : i._logical_cellIndex + c + 1, l = i._trElements;
    let v = [], u = [], b = 0;
    const C = [], x = [];
    for (let L = 0, A = i._rowCnt, o, a, f, p, h, g; L < A; L++) {
      o = l[L], a = d, h = !1, f = o.cells, g = 0;
      for (let m = 0, y, w = f.length, _, k, M; m < w && (y = f[m], !!y); m++)
        if (_ = y.rowSpan - 1, k = y.colSpan - 1, n) {
          if (M = m + g, u.length > 0) {
            const E = !f[m + 1];
            for (let T = 0, z; T < u.length; T++)
              z = u[T], !(z.row > L) && (M >= z.index ? (g += z.cs, M = m + g, z.rs -= 1, z.row = L + 1, z.rs < 1 && (u.splice(T, 1), T--)) : E && (z.rs -= 1, z.row = L + 1, z.rs < 1 && (u.splice(T, 1), T--)));
          }
          _ > 0 && v.push({
            rs: _,
            cs: k + 1,
            index: M,
            row: -1
          }), M >= a && M + k <= a + c ? C.push(y) : M <= a + c && M + k >= a ? y.colSpan -= s.getOverlapRangeAtIndex(d, d + c, M, M + k) : _ > 0 && (M < a || M + k > a + c) && x.push({
            cell: y,
            i: L,
            rs: L + _
          }), g += k;
        } else {
          if (m >= a) break;
          if (k > 0) {
            if (b < 1 && k + m >= a) {
              y.colSpan += 1, a = null, b = _ + 1;
              break;
            }
            a -= k;
          }
          if (!h) {
            for (let E = 0, T; E < u.length; E++)
              T = u[E], a -= T.cs, T.rs -= 1, T.rs < 1 && (u.splice(E, 1), E--);
            h = !0;
          }
        }
      if (u = u.concat(v).sort(function(m, y) {
        return m.index - y.index;
      }), v = [], !n) {
        if (b > 0) {
          b -= 1;
          continue;
        }
        a !== null && f.length > 0 && (p = this.plugins.table.createCells.call(this, f[0].nodeName, 0, !0), p = o.insertBefore(p, f[a]));
      }
    }
    if (n) {
      let L, A;
      for (let o = 0, a = C.length, f; o < a; o++)
        f = C[o].parentNode, s.removeItem(C[o]), f.cells.length === 0 && (L || (L = s.getArrayIndex(l, f)), A = s.getArrayIndex(l, f), s.removeItem(f));
      for (let o = 0, a = x.length, f; o < a; o++)
        f = x[o], f.cell.rowSpan = s.getOverlapRangeAtIndex(L, A, f.i, f.rs);
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
    const t = this.util, i = e === "vertical", s = this.context.table, n = s._tdElement, r = s._trElements, c = s._trElement, d = s._logical_cellIndex, l = s._rowIndex, v = this.plugins.table.createCells.call(this, n.nodeName, 0, !0);
    if (i) {
      const u = n.colSpan;
      if (v.rowSpan = n.rowSpan, u > 1)
        v.colSpan = this._w.Math.floor(u / 2), n.colSpan = u - v.colSpan, c.insertBefore(v, n.nextElementSibling);
      else {
        let b = [], C = [];
        for (let x = 0, L = s._rowCnt, A, o; x < L; x++) {
          A = r[x].cells, o = 0;
          for (let a = 0, f = A.length, p, h, g, m; a < f; a++) {
            if (p = A[a], h = p.colSpan - 1, g = p.rowSpan - 1, m = a + o, C.length > 0)
              for (let y = 0, w; y < C.length; y++)
                w = C[y], !(w.row > x) && (m >= w.index ? (o += w.cs, m += w.cs, w.rs -= 1, w.row = x + 1, w.rs < 1 && (C.splice(y, 1), y--)) : a === f - 1 && (w.rs -= 1, w.row = x + 1, w.rs < 1 && (C.splice(y, 1), y--)));
            if (m <= d && g > 0 && b.push({
              index: m,
              cs: h + 1,
              rs: g,
              row: -1
            }), p !== n && m <= d && m + h >= d + u - 1) {
              p.colSpan += 1;
              break;
            }
            if (m > d) break;
            o += h;
          }
          C = C.concat(b).sort(function(a, f) {
            return a.index - f.index;
          }), b = [];
        }
        c.insertBefore(v, n.nextElementSibling);
      }
    } else {
      const u = n.rowSpan;
      if (v.colSpan = n.colSpan, u > 1) {
        v.rowSpan = this._w.Math.floor(u / 2);
        const b = u - v.rowSpan, C = [], x = t.getArrayIndex(r, c) + b;
        for (let a = 0, f, p; a < x; a++) {
          f = r[a].cells, p = 0;
          for (let h = 0, g = f.length, m, y, w; h < g && (w = h + p, !(w >= d)); h++)
            m = f[h], y = m.rowSpan - 1, y > 0 && y + a >= x && w < d && C.push({
              index: w,
              cs: m.colSpan
            }), p += m.colSpan - 1;
        }
        const L = r[x], A = L.cells;
        let o = C.shift();
        for (let a = 0, f = A.length, p = 0, h, g, m, y; a < f; a++) {
          if (m = a + p, h = A[a], g = h.colSpan - 1, y = m + g + 1, o && y >= o.index && (p += o.cs, y += o.cs, o = C.shift()), y >= d || a === f - 1) {
            L.insertBefore(v, h.nextElementSibling);
            break;
          }
          p += g;
        }
        n.rowSpan = b;
      } else {
        v.rowSpan = n.rowSpan;
        const b = t.createElement("TR");
        b.appendChild(v);
        for (let L = 0, A; L < l; L++) {
          if (A = r[L].cells, A.length === 0) return;
          for (let o = 0, a = A.length; o < a; o++)
            L + A[o].rowSpan - 1 >= l && (A[o].rowSpan += 1);
        }
        const C = s._physical_cellIndex, x = c.cells;
        for (let L = 0, A = x.length; L < A; L++)
          L !== C && (x[L].rowSpan += 1);
        c.parentNode.insertBefore(b, c.nextElementSibling);
      }
    }
    this.focusEdge(n), this.plugins.table.setPositionControllerDiv.call(this, n, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, i = this.util, s = e._ref, n = e._selectedCells, r = n[0];
    let c = null, d = null, l = s.ce - s.cs + 1, v = s.re - s.rs + 1, u = "", b = null;
    for (let C = 1, x = n.length, L, A; C < x; C++) {
      L = n[C], b !== L.parentNode && (b = L.parentNode), A = L.children;
      for (let o = 0, a = A.length; o < a; o++)
        i.isFormatElement(A[o]) && i.onlyZeroWidthSpace(A[o].textContent) && i.removeItem(A[o]);
      u += L.innerHTML, i.removeItem(L), b.cells.length === 0 && (c ? d = b : c = b, v -= 1);
    }
    if (c) {
      const C = t._trElements, x = i.getArrayIndex(C, c), L = i.getArrayIndex(C, d || c), A = [];
      for (let o = 0, a; o <= L; o++) {
        if (a = C[o].cells, a.length === 0) {
          A.push(C[o]);
          continue;
        }
        for (let f = 0, p = a.length, h, g; f < p; f++)
          h = a[f], g = h.rowSpan - 1, g > 0 && o + g >= x && (h.rowSpan -= i.getOverlapRangeAtIndex(x, L, o, o + g));
      }
      for (let o = 0, a = A.length; o < a; o++)
        i.removeItem(A[o]);
    }
    r.innerHTML += u, r.colSpan = l, r.rowSpan = v, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, r), i.addClass(r, "se-table-selected-cell"), this.focusEdge(r);
  },
  toggleHeader: function() {
    const e = this.util, t = this.context.table.headerButton, i = e.hasClass(t, "active"), s = this.context.table._element;
    if (i)
      e.removeItem(s.querySelector("thead"));
    else {
      const n = e.createElement("THEAD");
      n.innerHTML = "<tr>" + this.plugins.table.createCells.call(this, "th", this.context.table._logical_cellCnt, !1) + "</tr>", s.insertBefore(n, s.firstElementChild);
    }
    e.toggleClass(t, "active"), /TH/i.test(this.context.table._tdElement.nodeName) ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, this.context.table._tdElement, !1);
  },
  setTableStyle: function(e) {
    const t = this.context.table, i = t._element;
    let s, n, r, c;
    e.indexOf("width") > -1 && (s = t.resizeButton.firstElementChild, n = t.resizeText, t._maxWidth ? (r = t.icons.reduction, c = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(i, "se-table-size-auto"), this.util.addClass(i, "se-table-size-100")) : (r = t.icons.expansion, c = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(i, "se-table-size-100"), this.util.addClass(i, "se-table-size-auto")), this.util.changeElement(s, r), this.util.changeTxt(n, c)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(i, "se-table-layout-auto"), this.util.addClass(i, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(i, "se-table-layout-fixed"), this.util.addClass(i, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")));
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
    const i = this.plugins.table, s = i._selectedTable.rows, n = this.util, r = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let u = 0, b = r.length; u < b; u++)
      n.removeClass(r[u], "se-table-selected-cell");
    if (e === t && (n.addClass(e, "se-table-selected-cell"), !i._shift))
      return;
    let c = !0, d = [], l = [];
    const v = i._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let u = 0, b = s.length, C, x; u < b; u++) {
      C = s[u].cells, x = 0;
      for (let L = 0, A = C.length, o, a, f, p; L < A; L++) {
        if (o = C[L], f = o.colSpan - 1, p = o.rowSpan - 1, a = L + x, d.length > 0)
          for (let h = 0, g; h < d.length; h++)
            g = d[h], !(g.row > u) && (a >= g.index ? (x += g.cs, a += g.cs, g.rs -= 1, g.row = u + 1, g.rs < 1 && (d.splice(h, 1), h--)) : L === A - 1 && (g.rs -= 1, g.row = u + 1, g.rs < 1 && (d.splice(h, 1), h--)));
        if (c) {
          if ((o === e || o === t) && (v.cs = v.cs !== null && v.cs < a ? v.cs : a, v.ce = v.ce !== null && v.ce > a + f ? v.ce : a + f, v.rs = v.rs !== null && v.rs < u ? v.rs : u, v.re = v.re !== null && v.re > u + p ? v.re : u + p, v._i += 1), v._i === 2) {
            c = !1, d = [], l = [], u = -1;
            break;
          }
        } else if (n.getOverlapRangeAtIndex(v.cs, v.ce, a, a + f) && n.getOverlapRangeAtIndex(v.rs, v.re, u, u + p)) {
          const h = v.cs < a ? v.cs : a, g = v.ce > a + f ? v.ce : a + f, m = v.rs < u ? v.rs : u, y = v.re > u + p ? v.re : u + p;
          if (v.cs !== h || v.ce !== g || v.rs !== m || v.re !== y) {
            v.cs = h, v.ce = g, v.rs = m, v.re = y, u = -1, d = [], l = [];
            break;
          }
          n.addClass(o, "se-table-selected-cell");
        }
        p > 0 && l.push({
          index: a,
          cs: f + 1,
          rs: p,
          row: -1
        }), x += o.colSpan - 1;
      }
      d = d.concat(l).sort(function(L, A) {
        return L.index - A.index;
      }), l = [];
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
    const s = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let n = 0, r = s.length; n < r; n++)
      this.util.removeClass(s[n], "se-table-selected-cell");
    this.util.addClass(e, "se-table-selected-cell"), i._bindOnSelect = i._onCellMultiSelect.bind(this), i._bindOffSelect = i._offCellMultiSelect.bind(this), t ? (i._bindOffShift = (function() {
      this.controllersOn(this.context.table.resizeDiv, this.context.table.tableController, this.plugins.table.init.bind(this), e, "table"), i._ref || this.controllersOff();
    }).bind(this), this._wd.addEventListener("keyup", i._bindOffShift, !1), this._wd.addEventListener("mousedown", i._bindOnSelect, !1)) : this._wd.addEventListener("mousemove", i._bindOnSelect, !1), this._wd.addEventListener("mouseup", i._bindOffSelect, !1), i._initBind = i.init.bind(this), this._wd.addEventListener("touchmove", i._initBind, !1);
  },
  onClick_tableController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") ? e.target : e.target.parentNode;
    if (t.getAttribute("disabled")) return;
    const i = t.getAttribute("data-command"), s = t.getAttribute("data-value"), n = t.getAttribute("data-option"), r = this.plugins.table;
    if (typeof r._closeSplitMenu == "function" && (r._closeSplitMenu(), i === "onsplit") || !i) return;
    e.preventDefault();
    const c = this.context.table;
    switch (i) {
      case "insert":
      case "delete":
        r.editTable.call(this, s, n);
        break;
      case "header":
        r.toggleHeader.call(this);
        break;
      case "onsplit":
        r.openSplitMenu.call(this);
        break;
      case "split":
        r.splitCells.call(this, s);
        break;
      case "merge":
        r.mergeCells.call(this);
        break;
      case "resize":
        c._maxWidth = !c._maxWidth, r.setTableStyle.call(this, "width"), r.setPositionControllerTop.call(this, c._element), r.setPositionControllerDiv.call(this, c._tdElement, r._shift);
        break;
      case "layout":
        c._fixedColumn = !c._fixedColumn, r.setTableStyle.call(this, "column"), r.setPositionControllerTop.call(this, c._element), r.setPositionControllerDiv.call(this, c._tdElement, r._shift);
        break;
      case "remove":
        const d = c._element.parentNode;
        this.util.removeItem(c._element), this.controllersOff(), d !== this.context.element.wysiwyg && this.util.removeItemAllParents(d, function(l) {
          return l.childNodes.length === 0;
        }, null), this.focus();
    }
    this.history.push(!1);
  }
}, qn = {
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
    let s = this.setSubmenu(e);
    s.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), i.formatBlock._formatList = s.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang.toolbar, s = e.util.createElement("DIV");
    s.className = "se-submenu se-list-layer se-list-format";
    const n = ["p", "div", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], r = !t.formats || t.formats.length === 0 ? n : t.formats;
    let c = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let d = 0, l = r.length, v, u, b, C, x, L, A; d < l; d++)
      v = r[d], typeof v == "string" && n.indexOf(v) > -1 ? (u = v.toLowerCase(), b = u === "blockquote" ? "range" : u === "pre" ? "free" : "replace", x = /^h/.test(u) ? u.match(/\d+/)[0] : "", C = i["tag_" + (x ? "h" : u)] + x, A = "", L = "") : (u = v.tag.toLowerCase(), b = v.command, C = v.name || u, A = v.class, L = A ? ' class="' + A + '"' : ""), c += '<li><button type="button" class="se-btn-list" data-command="' + b + '" data-value="' + u + '" data-class="' + A + '" title="' + C + '" aria-label="' + C + '"><' + u + L + ">" + C + "</" + u + "></button></li>";
    return c += "</ul></div>", s.innerHTML = c, s;
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
      const n = this.context.formatBlock._formatList, r = e.nodeName.toLowerCase(), c = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let d = 0, l = n.length, v; d < l; d++)
        if (v = n[d], r === v.getAttribute("data-value") && c === v.getAttribute("data-class")) {
          t = v.title;
          break;
        }
      return this.util.changeTxt(i, t), i.setAttribute("data-value", r), i.setAttribute("data-class", c), !0;
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.formatBlock, t = e._formatList, i = e.targetText, s = (i.getAttribute("data-value") || "") + (i.getAttribute("data-class") || "");
    if (s !== e.currentFormat) {
      for (let n = 0, r = t.length, c; n < r; n++)
        c = t[n], s === c.getAttribute("data-value") + c.getAttribute("data-class") ? this.util.addClass(c, "active") : this.util.removeClass(c, "active");
      e.currentFormat = s;
    }
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null, s = null, n = null, r = "";
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), s = t.getAttribute("data-value"), r = t.getAttribute("data-class"), i) {
        n = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (i) {
      if (i === "range") {
        const c = n.cloneNode(!1);
        this.applyRangeFormatElement(c);
      } else {
        let c = this.getRange(), d = this.getSelectedElementsAndComponents(!1);
        if (d.length === 0 && (c = this.getRange_addLine(c, null), d = this.getSelectedElementsAndComponents(!1), d.length === 0))
          return;
        const l = c.startOffset, v = c.endOffset, u = this.util;
        let b = d[0], C = d[d.length - 1];
        const x = u.getNodePath(c.startContainer, b, null, null), L = u.getNodePath(c.endContainer, C, null, null), A = this.detachList(d, !1);
        A.sc && (b = A.sc), A.ec && (C = A.ec), this.setRange(u.getNodeFromPath(x, b), l, u.getNodeFromPath(L, C), v);
        const o = this.getSelectedElementsAndComponents(!1);
        if (i === "free") {
          const a = o.length - 1;
          let f = o[a].parentNode, p = n.cloneNode(!1);
          const h = p;
          for (let g = a, m, y, w, _, k, M, E = !0; g >= 0; g--)
            if (m = o[g], m !== (o[g + 1] ? o[g + 1].parentNode : null)) {
              if (M = u.isComponent(m), y = M ? "" : m.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), w = u.getParentElement(m, function(T) {
                return T.parentNode === f;
              }), (f !== m.parentNode || M) && (u.isFormatElement(f) ? (f.parentNode.insertBefore(p, f.nextSibling), f = f.parentNode) : (f.insertBefore(p, w ? w.nextSibling : null), f = m.parentNode), _ = p.nextSibling, _ && p.nodeName === _.nodeName && u.isSameAttributes(p, _) && (p.innerHTML += "<BR>" + _.innerHTML, u.removeItem(_)), p = n.cloneNode(!1), E = !0), k = p.innerHTML, p.innerHTML = (E || !y || !k || /<br>$/i.test(y) ? y : y + "<BR>") + k, g === 0) {
                f.insertBefore(p, m), _ = m.nextSibling, _ && p.nodeName === _.nodeName && u.isSameAttributes(p, _) && (p.innerHTML += "<BR>" + _.innerHTML, u.removeItem(_));
                const T = p.previousSibling;
                T && p.nodeName === T.nodeName && u.isSameAttributes(p, T) && (T.innerHTML += "<BR>" + p.innerHTML, u.removeItem(p));
              }
              M || u.removeItem(m), y && (E = !1);
            }
          this.setRange(h, 0, h, 0);
        } else {
          for (let a = 0, f = o.length, p, h; a < f; a++)
            p = o[a], (p.nodeName.toLowerCase() !== s.toLowerCase() || (p.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== r) && !u.isComponent(p) && (h = n.cloneNode(!1), u.copyFormatAttributes(h, p), h.innerHTML = p.innerHTML, p.parentNode.replaceChild(h, p)), a === 0 && (b = h || p), a === f - 1 && (C = h || p), h = null;
          this.setRange(u.getNodeFromPath(x, b), l, u.getNodeFromPath(L, C), v);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, jn = {
  name: "lineHeight",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.lineHeight = {
      _sizeList: null,
      currentSize: -1
    };
    let s = this.setSubmenu(e), n = s.querySelector("ul");
    n.addEventListener("click", this.pickup.bind(e)), i.lineHeight._sizeList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null, n = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, s = e.util.createElement("DIV");
    s.className = "se-submenu se-list-layer";
    const n = t.lineHeights ? t.lineHeights : [
      { text: "1", value: 1 },
      { text: "1.15", value: 1.15 },
      { text: "1.5", value: 1.5 },
      { text: "2", value: 2 }
    ];
    let r = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let c = 0, d = n.length, l; c < d; c++)
      l = n[c], r += '<li><button type="button" class="se-btn-list" data-value="' + l.value + '" title="' + l.text + '" aria-label="' + l.text + '">' + l.text + "</button></li>";
    return r += "</ul></div>", s.innerHTML = r, s;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.lineHeight, t = e._sizeList, i = this.util.getFormatElement(this.getSelectionNode()), s = i ? i.style.lineHeight + "" : "";
    if (s !== e.currentSize) {
      for (let n = 0, r = t.length; n < r; n++)
        s === t[n].getAttribute("data-value") ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
      e.currentSize = s;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value") || "", i = this.getSelectedElements();
    for (let s = 0, n = i.length; s < n; s++)
      i[s].style.lineHeight = t;
    this.submenuOff(), this.history.push(!1);
  }
}, Gn = {
  name: "template",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.template = {
      selectedIndex: -1
    };
    let s = this.setSubmenu(e);
    s.querySelector("ul").addEventListener("click", this.pickup.bind(e)), e.initMenuTarget(this.name, t, s), s = null;
  },
  setSubmenu: function(e) {
    const t = e.options.templates;
    if (!t || t.length === 0)
      throw Error('[SUNEDITOR.plugins.template.fail] To use the "template" plugin, please define the "templates" option.');
    const i = e.util.createElement("DIV");
    i.className = "se-list-layer";
    let s = '<div class="se-submenu se-list-inner"><ul class="se-list-basic">';
    for (let n = 0, r = t.length, c; n < r; n++)
      c = t[n], s += '<li><button type="button" class="se-btn-list" data-value="' + n + '" title="' + c.name + '" aria-label="' + c.name + '">' + c.name + "</button></li>";
    return s += "</ul></div>", i.innerHTML = s, i;
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
}, Kn = {
  name: "paragraphStyle",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.paragraphStyle = {
      _classList: null
    };
    let s = this.setSubmenu(e);
    s.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), i.paragraphStyle._classList = s.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-format";
    const s = e.lang.menu, n = {
      spaced: {
        name: s.spaced,
        class: "__se__p-spaced",
        _class: ""
      },
      bordered: {
        name: s.bordered,
        class: "__se__p-bordered",
        _class: ""
      },
      neon: {
        name: s.neon,
        class: "__se__p-neon",
        _class: ""
      }
    }, r = !t.paragraphStyles || t.paragraphStyles.length === 0 ? ["spaced", "bordered", "neon"] : t.paragraphStyles;
    let c = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let d = 0, l = r.length, v, u, b, C; d < l; d++) {
      if (v = r[d], typeof v == "string") {
        const x = n[v.toLowerCase()];
        if (!x) continue;
        v = x;
      }
      u = v.name, b = v.class ? ' class="' + v.class + '"' : "", C = v._class, c += '<li><button type="button" class="se-btn-list' + (C ? " " + C : "") + '" data-value="' + v.class + '" title="' + u + '" aria-label="' + u + '"><div' + b + ">" + u + "</div></button></li>";
    }
    return c += "</ul></div>", i.innerHTML = c, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const t = this.context.paragraphStyle._classList, i = this.util.getFormatElement(this.getSelectionNode());
    for (let s = 0, n = t.length; s < n; s++)
      this.util.hasClass(i, t[s].getAttribute("data-value")) ? this.util.addClass(t[s], "active") : this.util.removeClass(t[s], "active");
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !/^UL$/i.test(t.tagName) && (i = t.getAttribute("data-value"), !i); )
      t = t.parentNode;
    if (!i) return;
    let s = this.getSelectedElements();
    if (s.length === 0 && (this.getRange_addLine(this.getRange(), null), s = this.getSelectedElements(), s.length === 0))
      return;
    const n = this.util.hasClass(t, "active") ? this.util.removeClass.bind(this.util) : this.util.addClass.bind(this.util);
    for (let r = 0, c = s.length; r < c; r++)
      n(s[r], i);
    this.submenuOff(), this.history.push(!1);
  }
}, Yn = {
  name: "textStyle",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.textStyle = {
      _styleList: null
    };
    let s = this.setSubmenu(e), n = s.querySelector("ul");
    n.addEventListener("click", this.pickup.bind(e)), i.textStyle._styleList = s.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null, n = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-format";
    const s = {
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
    }, n = t.textStyles ? t.textStyles : e._w.Object.keys(s);
    let r = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let c = 0, d = n.length, l, v, u, b, C, x, L; c < d; c++) {
      if (l = n[c], b = "", x = "", C = [], typeof l == "string") {
        const A = s[l.toLowerCase()];
        if (!A) continue;
        l = A;
      }
      u = l.name, v = l.tag || "span", L = l._class, l.style && (b += ' style="' + l.style + '"', x += l.style.replace(/:[^;]+(;|$)\s*/g, ","), C.push("style")), l.class && (b += ' class="' + l.class + '"', x += "." + l.class.trim().replace(/\s+/g, ",."), C.push("class")), x = x.replace(/,$/, ""), r += '<li><button type="button" class="se-btn-list' + (L ? " " + L : "") + '" data-command="' + v + '" data-value="' + x + '" title="' + u + '" aria-label="' + u + '"><' + v + b + ">" + u + "</" + v + "></button></li>";
    }
    return r += "</ul></div>", i.innerHTML = r, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.util, i = this.context.textStyle._styleList, s = this.getSelectionNode();
    for (let n = 0, r = i.length, c, d, l; n < r; n++) {
      c = i[n], d = c.getAttribute("data-value").split(",");
      for (let v = 0, u, b; v < d.length; v++) {
        for (u = s, l = !1; u && !e.isFormatElement(u) && !e.isComponent(u); ) {
          if (u.nodeName.toLowerCase() === c.getAttribute("data-command").toLowerCase() && (b = d[v], /^\./.test(b) ? e.hasClass(u, b.replace(/^\./, "")) : u.style[b])) {
            l = !0;
            break;
          }
          u = u.parentNode;
        }
        if (!l) break;
      }
      l ? e.addClass(c, "active") : e.removeClass(c, "active");
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null, s = null;
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), i) {
        s = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (!i) return;
    const n = s.style.cssText.replace(/:.+(;|$)/g, ",").split(",");
    n.pop();
    const r = s.classList;
    for (let l = 0, v = r.length; l < v; l++)
      n.push("." + r[l]);
    const c = this.util.hasClass(t, "active") ? null : s.cloneNode(!1), d = c ? null : [s.nodeName];
    this.nodeChange(c, n, d, !0), this.submenuOff();
  }
};
var sl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
      name: "dialog",
      /**
       * @description Constructor
       * @param {Object} core Core object 
       */
      add: function(n) {
        const r = n.context;
        r.dialog = {
          kind: "",
          updateModal: !1,
          _closeSignal: !1
        };
        let c = n.util.createElement("DIV");
        c.className = "se-dialog sun-editor-common";
        let d = n.util.createElement("DIV");
        d.className = "se-dialog-back", d.style.display = "none";
        let l = n.util.createElement("DIV");
        l.className = "se-dialog-inner", l.style.display = "none", c.appendChild(d), c.appendChild(l), r.dialog.modalArea = c, r.dialog.back = d, r.dialog.modal = l, r.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(n)), r.dialog.modal.addEventListener("click", this._onClick_dialog.bind(n)), r.element.relative.appendChild(c), c = null, d = null, l = null;
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
      open: function(n, r) {
        if (this.modalForm) return !1;
        this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null), this.plugins.dialog._bindClose = (function(d) {
          /27/.test(d.keyCode) && this.plugins.dialog.close.call(this);
        }).bind(this), this._d.addEventListener("keydown", this.plugins.dialog._bindClose), this.context.dialog.updateModal = r, this.options.popupDisplay === "full" ? this.context.dialog.modalArea.style.position = "fixed" : this.context.dialog.modalArea.style.position = "absolute", this.context.dialog.kind = n, this.modalForm = this.context[n].modal;
        const c = this.context[n].focusElement;
        typeof this.plugins[n].on == "function" && this.plugins[n].on.call(this, r), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", c && c.focus();
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
      value: s
    })), s;
  });
})(sl);
var Xn = sl.exports;
const ct = /* @__PURE__ */ Ce(Xn), Jn = {
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
    const i = t.querySelector(".se-select-list"), s = this.context.selectMenu.caller[e] = {
      form: i,
      items: [],
      menus: [],
      index: -1,
      item: null,
      clickMethod: null,
      callerName: e
    };
    i.addEventListener("mousedown", this.plugins.selectMenu.onMousedown_list), i.addEventListener("mousemove", this.plugins.selectMenu.onMouseMove_list.bind(this, s)), i.addEventListener("click", this.plugins.selectMenu.onClick_list.bind(this, s));
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
    const i = e.menus, s = i.length, n = e.index = t >= s ? 0 : t < 0 ? s - 1 : t;
    for (let r = 0; r < s; r++)
      r === n ? this.util.addClass(i[r], "active") : this.util.removeClass(i[r], "active");
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
}, ol = {
  name: "anchor",
  add: function(e) {
    e.addModule([Jn]), e.context.anchor = {
      caller: {},
      forms: this.setDialogForm(e),
      host: (e._w.location.origin + e._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  /** dialog */
  setDialogForm: function(e) {
    const t = e.lang, i = e.options.linkRel, s = (e.options.linkRelDefault.default || "").split(" "), n = e.icons, r = e.util.createElement("DIV");
    let c = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (e.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + t.dialogBox.linkBox.bookmark + '" aria-label="' + t.dialogBox.linkBox.bookmark + '">' + n.bookmark + "</button>" + e.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + n.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + n.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + t.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (i.length > 0) {
      c += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let d = 0, l = i.length, v; d < l; d++)
        v = i[d], c += '<li><button type="button" class="se-btn-list' + (s.indexOf(v) > -1 ? " se-checked" : "") + '" data-command="' + v + '" title="' + v + '" aria-label="' + v + '"><span class="se-svg">' + n.checked + "</span>" + v + "</button></li>";
      c += "</ul></div></div></div>";
    }
    return c += "</div></div>", r.innerHTML = c, r;
  },
  initEvent: function(e, t) {
    const i = this.plugins.anchor, s = this.context.anchor.caller[e] = {
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
    typeof s.linkDefaultRel.default == "string" && (s.linkDefaultRel.default = s.linkDefaultRel.default.trim()), typeof s.linkDefaultRel.check_new_window == "string" && (s.linkDefaultRel.check_new_window = s.linkDefaultRel.check_new_window.trim()), typeof s.linkDefaultRel.check_bookmark == "string" && (s.linkDefaultRel.check_bookmark = s.linkDefaultRel.check_bookmark.trim()), s.urlInput = t.querySelector(".se-input-url"), s.anchorText = t.querySelector("._se_anchor_text"), s.newWindowCheck = t.querySelector("._se_anchor_check"), s.downloadCheck = t.querySelector("._se_anchor_download"), s.download = t.querySelector("._se_anchor_download_icon"), s.preview = t.querySelector(".se-link-preview"), s.bookmark = t.querySelector("._se_anchor_bookmark_icon"), s.bookmarkButton = t.querySelector("._se_bookmark_button"), this.plugins.selectMenu.initEvent.call(this, e, t);
    const n = this.context.selectMenu.caller[e];
    this.options.linkRel.length > 0 && (s.relButton = t.querySelector(".se-anchor-rel-btn"), s.relList = t.querySelector(".se-list-layer"), s.relPreview = t.querySelector(".se-anchor-rel-preview"), s.relButton.addEventListener("click", i.onClick_relButton.bind(this, s)), s.relList.addEventListener("click", i.onClick_relList.bind(this, s))), s.newWindowCheck.addEventListener("change", i.onChange_newWindowCheck.bind(this, s)), s.downloadCheck.addEventListener("change", i.onChange_downloadCheck.bind(this, s)), s.anchorText.addEventListener("input", i.onChangeAnchorText.bind(this, s)), s.urlInput.addEventListener("input", i.onChangeUrlInput.bind(this, s)), s.urlInput.addEventListener("keydown", i.onKeyDownUrlInput.bind(this, n)), s.urlInput.addEventListener("focus", i.onFocusUrlInput.bind(this, s, n)), s.urlInput.addEventListener("blur", i.onBlurUrlInput.bind(this, n)), s.bookmarkButton.addEventListener("click", i.onClick_bookmarkButton.bind(this, s));
  },
  on: function(e, t) {
    const i = this.plugins.anchor;
    if (!t)
      i.init.call(this, e), e.anchorText.value = this.getSelection().toString().trim(), e.newWindowCheck.checked = this.options.linkTargetNewWindow;
    else if (e.linkAnchor) {
      this.context.dialog.updateModal = !0;
      const s = e.linkAnchor.getAttribute("href");
      e.linkValue = e.preview.textContent = e.urlInput.value = i.selfPathBookmark.call(this, s) ? s.substr(s.lastIndexOf("#")) : s, e.anchorText.value = e.linkAnchor.textContent, e.newWindowCheck.checked = !!/_blank/i.test(e.linkAnchor.target), e.downloadCheck.checked = e.linkAnchor.download;
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
      const i = e.relButton, s = e.relList;
      this.util.addClass(i, "active"), s.style.visibility = "hidden", s.style.display = "block", this.options.rtl ? s.style.left = i.offsetLeft - s.offsetWidth - 1 + "px" : s.style.left = i.offsetLeft + i.offsetWidth + 1 + "px", s.style.top = i.offsetTop + i.offsetHeight / 2 - s.offsetHeight / 2 + "px", s.style.visibility = "", this.plugins.anchor._closeRelMenu = (function(n, r, c) {
        c && (n.relButton.contains(c.target) || n.relList.contains(c.target)) || (this.util.removeClass(r, "active"), n.relList.style.display = "none", this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu), this.plugins.anchor._closeRelMenu = null);
      }).bind(this, e, i), this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(e, t) {
    this.plugins.anchor.toggleRelList.call(this, e, !this.util.hasClass(t.target, "active"));
  },
  onClick_relList: function(e, t) {
    const i = t.target, s = i.getAttribute("data-command");
    if (!s) return;
    const n = e.currentRel, r = this.util.toggleClass(i, "se-checked"), c = n.indexOf(s);
    r ? c === -1 && n.push(s) : c > -1 && n.splice(c, 1), e.relPreview.title = e.relPreview.textContent = n.join(" ");
  },
  setRel: function(e, t) {
    const i = e.relList, s = e.currentRel = t ? t.split(" ") : [];
    if (!i) return;
    const n = i.querySelectorAll("button");
    for (let r = 0, c = n.length, d; r < c; r++)
      d = n[r].getAttribute("data-command"), s.indexOf(d) > -1 ? this.util.addClass(n[r], "se-checked") : this.util.removeClass(n[r], "se-checked");
    e.relPreview.title = e.relPreview.textContent = s.join(" ");
  },
  createHeaderList: function(e, t, i) {
    const s = this.util.getListChildren(this.context.element.wysiwyg, function(d) {
      return /h[1-6]/i.test(d.nodeName);
    });
    if (s.length === 0) return;
    const n = new this._w.RegExp("^" + i.replace(/^#/, ""), "i"), r = [];
    let c = "";
    for (let d = 0, l = s.length, v; d < l; d++)
      v = s[d], n.test(v.textContent) && (r.push(v), c += '<li class="se-select-item" data-index="' + d + '">' + v.textContent + "</li>");
    r.length === 0 ? this.plugins.selectMenu.close.call(this, t) : (this.plugins.selectMenu.createList(t, r, c), this.plugins.selectMenu.open.call(this, t, this.plugins.anchor._setMenuListPosition.bind(this, e)));
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
    const i = e.preview, s = this.options.linkProtocol, n = this.options.linkNoPrefix, r = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(t) || t.indexOf(s) === 0, c = s ? this._w.RegExp("^" + this.util.escapeStringRegexp(t.substr(0, s.length))).test(s) : !1;
    t = e.linkValue = i.textContent = t ? n ? t : s && !r && !c ? s + t : r ? t : /^www\./.test(t) ? "http://" + t : this.context.anchor.host + (/^\//.test(t) ? "" : "/") + t : "", this.plugins.anchor.selfPathBookmark.call(this, t) ? (e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active")) : (e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active")), !this.plugins.anchor.selfPathBookmark.call(this, t) && e.downloadCheck.checked ? e.download.style.display = "block" : e.download.style.display = "none";
  },
  setCtx: function(e, t) {
    e && (t.linkAnchor = e, t.linkValue = e.href, t.currentRel = e.rel.split(" "));
  },
  updateAnchor: function(e, t, i, s, n) {
    !this.plugins.anchor.selfPathBookmark.call(this, t) && s.downloadCheck.checked ? e.setAttribute("download", i || t) : e.removeAttribute("download"), s.newWindowCheck.checked ? e.target = "_blank" : e.removeAttribute("target");
    const r = s.currentRel.join(" ");
    r ? e.rel = r : e.removeAttribute("rel"), e.href = t, n ? e.children.length === 0 && (e.textContent = "") : e.textContent = i;
  },
  createAnchor: function(e, t) {
    if (e.linkValue.length === 0) return null;
    const i = e.linkValue, s = e.anchorText, n = s.value.length === 0 ? i : s.value, r = e.linkAnchor || this.util.createElement("A");
    return this.plugins.anchor.updateAnchor.call(this, r, i, n, e, t), e.linkValue = e.preview.textContent = e.urlInput.value = e.anchorText.value = "", r;
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
    const s = t.split(" ");
    for (let n = 0, r = s.length, c; n < r; n++)
      c = i.indexOf(s[n]), c === -1 && i.push(s[n]);
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
}, Qn = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([ct, ol]);
    const t = e.context, i = t.link = {
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      _linkAnchor: null,
      anchorCtx: null
    };
    let s = this.setDialog(e);
    i.modal = s;
    let n = this.setController_LinkButton(e);
    i.linkController = n, s.querySelector("form").addEventListener("submit", this.submit.bind(e)), n.addEventListener("click", this.onClick_linkController.bind(e)), t.dialog.modal.appendChild(s), t.element.relative.appendChild(n), e.plugins.anchor.initEvent.call(e, "link", s), i.focusElement = t.anchor.caller.link.urlInput, s = null, n = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), s = e.icons;
    i.className = "se-dialog-content", i.style.display = "none";
    let n = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + s.cancel + '</button><span class="se-modal-title">' + t.dialogBox.linkBox.title + "</span></div>" + e.context.anchor.forms.innerHTML + '<div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>";
    return i.innerHTML = n, i;
  },
  /** modify controller button */
  setController_LinkButton: function(e) {
    const t = e.lang, i = e.icons, s = e.util.createElement("DIV");
    return s.className = "se-controller se-controller-link", s.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><span><a target="_blank" href=""></a>&nbsp;</span><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + i.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="unlink" tabindex="-1" class="se-btn se-tooltip">' + i.unlink + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.unlink + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", s;
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
          const s = this.util.createElement(i[0].nodeName);
          if (s.appendChild(t), !this.insertNode(s, null, !0)) return;
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
        }, !1), s = this.util.getChildElement(this.context.link._linkAnchor, function(n) {
          return n.childNodes.length === 0 || n.nodeType === 3;
        }, !0);
        this.setRange(i, 0, s, s.textContent.length), this.nodeChange(null, null, ["A"], !1);
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
var al = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
      name: "component",
      /**
       * @description Create a container for the resizing component and insert the element.
       * @param {Element} cover Cover element (FIGURE)
       * @param {String} className Class name of container (fixed: se-component)
       * @returns {Element} Created container element
       */
      set_container: function(n, r) {
        const c = this.util.createElement("DIV");
        return c.className = "se-component " + r, c.appendChild(n), c;
      },
      /**
       * @description Cover the target element with a FIGURE element.
       * @param {Element} element Target element
       */
      set_cover: function(n) {
        const r = this.util.createElement("FIGURE");
        return r.appendChild(n), r;
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
      value: s
    })), s;
  });
})(al);
var es = al.exports;
const Mt = /* @__PURE__ */ Ce(es);
var rl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
        const r = n.icons, c = n.context;
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
            basic: r.align_justify,
            left: r.align_left,
            right: r.align_right,
            center: r.align_center
          }
        };
        let d = this.setController_resize(n);
        c.resizing.resizeContainer = d, c.resizing.resizeDiv = d.querySelector(".se-modal-resize"), c.resizing.resizeDot = d.querySelector(".se-resize-dot"), c.resizing.resizeDisplay = d.querySelector(".se-resize-display");
        let l = this.setController_button(n);
        c.resizing.resizeButton = l;
        let v = c.resizing.resizeHandles = c.resizing.resizeDot.querySelectorAll("span");
        c.resizing.resizeButtonGroup = l.querySelector("._se_resizing_btn_group"), c.resizing.rotationButtons = l.querySelectorAll("._se_resizing_btn_group ._se_rotation"), c.resizing.percentageButtons = l.querySelectorAll("._se_resizing_btn_group ._se_percentage"), c.resizing.alignMenu = l.querySelector(".se-resizing-align-list"), c.resizing.alignMenuList = c.resizing.alignMenu.querySelectorAll("button"), c.resizing.alignButton = l.querySelector("._se_resizing_align_button"), c.resizing.autoSizeButton = l.querySelector("._se_resizing_btn_group ._se_auto_size"), c.resizing.captionButton = l.querySelector("._se_resizing_caption_button"), d.addEventListener("mousedown", function(u) {
          u.preventDefault();
        }), v[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), v[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), v[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), v[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), v[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), v[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), v[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), v[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), l.addEventListener("click", this.onClick_resizeButton.bind(n)), c.element.relative.appendChild(d), c.element.relative.appendChild(l), d = null, l = null, v = null;
      },
      /** resize controller, button (image, iframe, video) */
      setController_resize: function(n) {
        const r = n.util.createElement("DIV");
        return r.className = "se-controller se-resizing-container", r.style.display = "none", r.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', r;
      },
      setController_button: function(n) {
        const r = n.lang, c = n.icons, d = n.util.createElement("DIV");
        return d.className = "se-controller se-controller-resizing", d.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.resize100 + '</span></span></button><button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage"><span>75%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.resize75 + '</span></span></button><button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage"><span>50%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.resize50 + '</span></span></button><button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + c.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.autoSize + '</span></span></button><button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + c.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.rotateLeft + '</span></span></button><button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + c.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.rotateRight + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + c.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.mirrorHorizontal + '</span></span></button><button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + c.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.mirrorVertical + '</span></span></button><button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + c.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.toolbar.align + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list"><div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + c.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.basic + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + c.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.left + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + c.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.center + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + c.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.right + '</span></span></button></li></ul></div></div><button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + c.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.caption + '</span></span></button><button type="button" data-command="revert" class="se-btn se-tooltip">' + c.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.revertButton + '</span></span></button><button type="button" data-command="update" class="se-btn se-tooltip">' + c.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.edit + '</span></span></button><button type="button" data-command="delete" class="se-btn se-tooltip">' + c.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.remove + "</span></span></button></div>", d;
      },
      /**
       * @description Gets the width size
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {Element} element Target element
       * @param {Element} cover Cover element (FIGURE)
       * @param {Element} container Container element (DIV.se-component)
       * @returns {String}
       */
      _module_getSizeX: function(n, r, c, d) {
        return r || (r = n._element), c || (c = n._cover), d || (d = n._container), r ? /%$/.test(r.style.width) ? (d && this.util.getNumber(d.style.width, 2) || 100) + "%" : r.style.width : "";
      },
      /**
       * @description Gets the height size
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {Element} element Target element
       * @param {Element} cover Cover element (FIGURE)
       * @param {Element} container Container element (DIV.se-component)
       * @returns {String}
       */
      _module_getSizeY: function(n, r, c, d) {
        return r || (r = n._element), c || (c = n._cover), d || (d = n._container), !d || !c ? r && r.style.height || "" : this.util.getNumber(c.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? c.style.height : !/%$/.test(r.style.height) || !/%$/.test(r.style.width) ? r.style.height : (d && this.util.getNumber(d.style.height, 2) || 100) + "%";
      },
      /**
       * @description Called at the "openModify" to put the size of the current target into the size input element.
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {Object} pluginObj Plugin object
       */
      _module_setModifyInputSize: function(n, r) {
        const c = n._onlyPercentage && this.context.resizing._rotateVertical;
        n.proportion.checked = n._proportionChecked = n._element.getAttribute("data-proportion") !== "false";
        let d = c ? "" : this.plugins.resizing._module_getSizeX.call(this, n);
        if (d === n._defaultSizeX && (d = ""), n._onlyPercentage && (d = this.util.getNumber(d, 2)), n.inputX.value = d, r.setInputSize.call(this, "x"), !n._onlyPercentage) {
          let l = c ? "" : this.plugins.resizing._module_getSizeY.call(this, n);
          l === n._defaultSizeY && (l = ""), n._onlyPercentage && (l = this.util.getNumber(l, 2)), n.inputY.value = l;
        }
        n.inputX.disabled = !!c, n.inputY.disabled = !!c, n.proportion.disabled = !!c, r.setRatio.call(this);
      },
      /**
       * @description It is called in "setInputSize" (input tag keyupEvent), 
       * checks the value entered in the input tag, 
       * calculates the ratio, and sets the calculated value in the input tag of the opposite size.
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {String} xy 'x': width, 'y': height
       */
      _module_setInputSize: function(n, r) {
        if (n._onlyPercentage) {
          r === "x" && n.inputX.value > 100 && (n.inputX.value = 100);
          return;
        }
        if (n.proportion.checked && n._ratio && /\d/.test(n.inputX.value) && /\d/.test(n.inputY.value)) {
          const c = n.inputX.value.replace(/\d+|\./g, "") || n.sizeUnit, d = n.inputY.value.replace(/\d+|\./g, "") || n.sizeUnit;
          if (c !== d) return;
          const l = c === "%" ? 2 : 0;
          r === "x" ? n.inputY.value = this.util.getNumber(n._ratioY * this.util.getNumber(n.inputX.value, l), l) + d : n.inputX.value = this.util.getNumber(n._ratioX * this.util.getNumber(n.inputY.value, l), l) + c;
        }
      },
      /**
       * @description It is called in "setRatio" (input and proportionCheck tags changeEvent), 
       * checks the value of the input tag, calculates the ratio, and resets it in the input tag.
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       */
      _module_setRatio: function(n) {
        const r = n.inputX.value, c = n.inputY.value;
        if (n.proportion.checked && /\d+/.test(r) && /\d+/.test(c)) {
          const d = r.replace(/\d+|\./g, "") || n.sizeUnit, l = c.replace(/\d+|\./g, "") || n.sizeUnit;
          if (d !== l)
            n._ratio = !1;
          else if (!n._ratio) {
            const v = this.util.getNumber(r, 0), u = this.util.getNumber(c, 0);
            n._ratio = !0, n._ratioX = v / u, n._ratioY = u / v;
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
        const r = this.plugins.resizing._module_getSizeX.call(this, n), c = this.plugins.resizing._module_getSizeY.call(this, n);
        n._element.setAttribute("width", r.replace("px", "")), n._element.setAttribute("height", c.replace("px", "")), n._element.setAttribute("data-size", r + "," + c), n._videoRatio && (n._videoRatio = c);
      },
      /**
       * @description Call the resizing module
       * @param {Element} targetElement Resizing target element
       * @param {string} plugin Plugin name
       * @returns {Object} Size of resizing div {w, h, t, l}
       */
      call_controller_resize: function(n, r) {
        const c = this.context.resizing, d = this.context[r];
        c._resize_plugin = r;
        const l = c.resizeContainer, v = c.resizeDiv, u = this.util.getOffset(n, this.context.element.wysiwygFrame), b = c._rotateVertical = /^(90|270)$/.test(Math.abs(n.getAttribute("data-rotate")).toString()), C = b ? n.offsetHeight : n.offsetWidth, x = b ? n.offsetWidth : n.offsetHeight, L = u.top, A = u.left - this.context.element.wysiwygFrame.scrollLeft;
        l.style.top = L + "px", l.style.left = A + "px", l.style.width = C + "px", l.style.height = x + "px", v.style.top = "0px", v.style.left = "0px", v.style.width = C + "px", v.style.height = x + "px";
        let o = n.getAttribute("data-align") || "basic";
        o = o === "none" ? "basic" : o;
        const a = this.util.getParentElement(n, this.util.isComponent), f = this.util.getParentElement(n, "FIGURE"), p = this.plugins.resizing._module_getSizeX.call(this, d, n, f, a) || "auto", h = d._onlyPercentage && r === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, d, n, f, a) || "auto");
        this.util.changeTxt(c.resizeDisplay, this.lang.dialogBox[o] + " (" + p + h + ")"), c.resizeButtonGroup.style.display = d._resizing ? "" : "none";
        const g = d._resizing && !d._resizeDotHide && !d._onlyPercentage ? "flex" : "none", m = c.resizeHandles;
        for (let E = 0, T = m.length; E < T; E++)
          m[E].style.display = g;
        if (d._resizing) {
          const E = c.rotationButtons;
          E[0].style.display = E[1].style.display = d._rotation ? "" : "none";
        }
        if (d._alignHide)
          c.alignButton.style.display = "none";
        else {
          c.alignButton.style.display = "";
          const E = c.alignMenuList;
          this.util.changeElement(c.alignButton.firstElementChild, c.alignIcons[o]);
          for (let T = 0, z = E.length; T < z; T++)
            E[T].getAttribute("data-value") === o ? this.util.addClass(E[T], "on") : this.util.removeClass(E[T], "on");
        }
        const y = c.percentageButtons, w = /%$/.test(n.style.width) && /%$/.test(a.style.width) ? this.util.getNumber(a.style.width, 0) / 100 + "" : "";
        for (let E = 0, T = y.length; E < T; E++)
          y[E].getAttribute("data-value") === w ? this.util.addClass(y[E], "active") : this.util.removeClass(y[E], "active");
        d._captionShow ? (c.captionButton.style.display = "", this.util.getChildElement(n.parentNode, "figcaption") ? (this.util.addClass(c.captionButton, "active"), d._captionChecked = !0) : (this.util.removeClass(c.captionButton, "active"), d._captionChecked = !1)) : c.captionButton.style.display = "none", l.style.display = "block";
        const _ = { left: 0, top: 50 };
        this.options.iframe && (_.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, _.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(c.resizeButton, l, "bottom", _);
        const k = function() {
          this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
        };
        this.controllersOn(l, c.resizeButton, k.bind(this), n, r), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), c._resize_w = C, c._resize_h = x;
        const M = (n.getAttribute("origin-size") || "").split(",");
        return c._origin_w = M[0] || n.naturalWidth, c._origin_h = M[1] || n.naturalHeight, {
          w: C,
          h: x,
          t: L,
          l: A
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
        const r = n.target, c = r.getAttribute("data-command") || r.parentNode.getAttribute("data-command");
        if (!c) return;
        const d = r.getAttribute("data-value") || r.parentNode.getAttribute("data-value"), l = this.context.resizing._resize_plugin, v = this.context[l], u = v._element, b = this.plugins[l];
        if (n.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), c === "onalign"))) {
          switch (c) {
            case "auto":
              this.plugins.resizing.resetTransform.call(this, u), b.setAutoSize.call(this), this.selectComponent(u, l);
              break;
            case "percent":
              let C = this.plugins.resizing._module_getSizeY.call(this, v);
              if (this.context.resizing._rotateVertical) {
                const g = u.getAttribute("data-percentage");
                g && (C = g.split(",")[1]);
              }
              this.plugins.resizing.resetTransform.call(this, u), b.setPercentSize.call(this, d * 100, this.util.getNumber(C, 0) === null || !/%$/.test(C) ? "" : C), this.selectComponent(u, l);
              break;
            case "mirror":
              const x = u.getAttribute("data-rotate") || "0";
              let L = u.getAttribute("data-rotateX") || "", A = u.getAttribute("data-rotateY") || "";
              d === "h" && !this.context.resizing._rotateVertical || d === "v" && this.context.resizing._rotateVertical ? A = A ? "" : "180" : L = L ? "" : "180", u.setAttribute("data-rotateX", L), u.setAttribute("data-rotateY", A), this.plugins.resizing._setTransForm(u, x, L, A);
              break;
            case "rotate":
              const o = this.context.resizing, a = u.getAttribute("data-rotate") * 1 + d * 1, f = this._w.Math.abs(a) >= 360 ? 0 : a;
              u.setAttribute("data-rotate", f), o._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(f).toString()), this.plugins.resizing.setTransformSize.call(this, u, null, null), this.selectComponent(u, l);
              break;
            case "onalign":
              this.plugins.resizing.openAlignMenu.call(this);
              return;
            case "align":
              const p = d === "basic" ? "none" : d;
              b.setAlign.call(this, p, null, null, null), this.selectComponent(u, l);
              break;
            case "caption":
              const h = !v._captionChecked;
              if (b.openModify.call(this, !0), v._captionChecked = v.captionCheckEl.checked = h, b.update_image.call(this, !1, !1, !1), h) {
                const g = this.util.getChildElement(v._caption, function(m) {
                  return m.nodeType === 3;
                });
                g ? this.setRange(g, 0, g, g.textContent.length) : v._caption.focus(), this.controllersOff();
              } else
                this.selectComponent(u, l), b.openModify.call(this, !0);
              break;
            case "revert":
              b.setOriginSize.call(this), this.selectComponent(u, l);
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
        const r = (n.getAttribute("data-size") || n.getAttribute("data-origin") || "").split(",");
        this.context.resizing._rotateVertical = !1, n.style.maxWidth = "", n.style.transform = "", n.style.transformOrigin = "", n.setAttribute("data-rotate", ""), n.setAttribute("data-rotateX", ""), n.setAttribute("data-rotateY", ""), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, r[0] ? r[0] : "auto", r[1] ? r[1] : "", !0);
      },
      /**
       * @description Set the transform style (rotation) of the element.
       * @param {Element} element Target element
       * @param {Number|null} width Element's width size
       * @param {Number|null} height Element's height size
       */
      setTransformSize: function(n, r, c) {
        let d = n.getAttribute("data-percentage");
        const l = this.context.resizing._rotateVertical, v = n.getAttribute("data-rotate") * 1;
        let u = "";
        if (d && !l)
          d = d.split(","), d[0] === "auto" && d[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, d[0], d[1]);
        else {
          const b = this.util.getParentElement(n, "FIGURE"), C = r || n.offsetWidth, x = c || n.offsetHeight, L = (l ? x : C) + "px", A = (l ? C : x) + "px";
          if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, C + "px", x + "px", !0), b.style.width = L, b.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : A, l) {
            let o = C / 2 + "px " + C / 2 + "px 0", a = x / 2 + "px " + x / 2 + "px 0";
            u = v === 90 || v === -270 ? a : o;
          }
        }
        n.style.transformOrigin = u, this.plugins.resizing._setTransForm(n, v.toString(), n.getAttribute("data-rotateX") || "", n.getAttribute("data-rotateY") || ""), l ? n.style.maxWidth = "none" : n.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, n);
      },
      _setTransForm: function(n, r, c, d) {
        let l = (n.offsetWidth - n.offsetHeight) * (/-/.test(r) ? 1 : -1), v = "";
        if (/[1-9]/.test(r) && (c || d))
          switch (v = c ? "Y" : "X", r) {
            case "90":
              v = c && d ? "X" : d ? v : "";
              break;
            case "270":
              l *= -1, v = c && d ? "Y" : c ? v : "";
              break;
            case "-90":
              v = c && d ? "Y" : c ? v : "";
              break;
            case "-270":
              l *= -1, v = c && d ? "X" : d ? v : "";
              break;
            default:
              v = "";
          }
        r % 180 === 0 && (n.style.maxWidth = ""), n.style.transform = "rotate(" + r + "deg)" + (c ? " rotateX(" + c + "deg)" : "") + (d ? " rotateY(" + d + "deg)" : "") + (v ? " translate" + v + "(" + l + "px)" : "");
      },
      /**
       * @description The position of the caption is set automatically.
       * @param {Element} element Target element (not caption element)
       */
      setCaptionPosition: function(n) {
        const r = this.util.getChildElement(this.util.getParentElement(n, "FIGURE"), "FIGCAPTION");
        r && (r.style.marginTop = (this.context.resizing._rotateVertical ? n.offsetWidth - n.offsetHeight : 0) + "px");
      },
      /**
       * @description Mouse down event of resize handles
       * @param {MouseEvent} e Event object 
       */
      onMouseDown_resize_handle: function(n) {
        n.stopPropagation(), n.preventDefault();
        const r = this.context.resizing, c = r._resize_direction = n.target.classList[0];
        r._resizeClientX = n.clientX, r._resizeClientY = n.clientY, this.context.element.resizeBackground.style.display = "block", r.resizeButton.style.display = "none", r.resizeDiv.style.float = /l/.test(c) ? "right" : /r/.test(c) ? "left" : "none";
        const d = (function(u) {
          if (u.type === "keydown" && u.keyCode !== 27) return;
          const b = r._isChange;
          r._isChange = !1, this.removeDocEvent("mousemove", l), this.removeDocEvent("mouseup", d), this.removeDocEvent("keydown", d), u.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, c), b && this.history.push(!1));
        }).bind(this), l = this.plugins.resizing.resizing_element.bind(this, r, c, this.context[r._resize_plugin]);
        this.addDocEvent("mousemove", l), this.addDocEvent("mouseup", d), this.addDocEvent("keydown", d);
      },
      /**
       * @description Mouse move event after call "onMouseDown_resize_handle" of resize handles
       * The size of the module's "div" is adjusted according to the mouse move event.
       * @param {Object} contextResizing "core.context.resizing" object (binding argument)
       * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh") (binding argument)
       * @param {Object} plugin "core.context[currentPlugin]" object (binding argument)
       * @param {MouseEvent} e Event object
       */
      resizing_element: function(n, r, c, d) {
        const l = d.clientX, v = d.clientY;
        let u = c._element_w, b = c._element_h;
        const C = c._element_w + (/r/.test(r) ? l - n._resizeClientX : n._resizeClientX - l), x = c._element_h + (/b/.test(r) ? v - n._resizeClientY : n._resizeClientY - v), L = c._element_h / c._element_w * C;
        /t/.test(r) && (n.resizeDiv.style.top = c._element_h - (/h/.test(r) ? x : L) + "px"), /l/.test(r) && (n.resizeDiv.style.left = c._element_w - C + "px"), /r|l/.test(r) && (n.resizeDiv.style.width = C + "px", u = C), /^(t|b)[^h]$/.test(r) ? (n.resizeDiv.style.height = L + "px", b = L) : /^(t|b)h$/.test(r) && (n.resizeDiv.style.height = x + "px", b = x), n._resize_w = u, n._resize_h = b, this.util.changeTxt(n.resizeDisplay, this._w.Math.round(u) + " x " + this._w.Math.round(b)), n._isChange = !0;
      },
      /**
       * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
       * Called at the mouse-up event registered in "onMouseDown_resize_handle".
       * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
       */
      cancel_controller_resize: function(n) {
        const r = this.context.resizing._rotateVertical;
        this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
        let c = this._w.Math.round(r ? this.context.resizing._resize_h : this.context.resizing._resize_w), d = this._w.Math.round(r ? this.context.resizing._resize_w : this.context.resizing._resize_h);
        if (!r && !/%$/.test(c)) {
          const u = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
          this.util.getNumber(c, 0) > u && (d = this._w.Math.round(d / c * u), c = u);
        }
        const l = this.context.resizing._resize_plugin;
        this.plugins[l].setSize.call(this, c, d, !1, n), r && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, c, d), this.selectComponent(this.context[l]._element, l);
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
      value: s
    })), s;
  });
})(rl);
var ts = rl.exports;
const ul = /* @__PURE__ */ Ce(ts);
var cl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
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
      upload: function(n, r, c, d, l) {
        this.showLoading();
        const v = this.plugins.fileManager, u = v._xmlHttp = this.util.getXMLHttpRequest();
        if (u.onreadystatechange = v._callBackUpload.bind(this, u, d, l), u.open("post", n, !0), r !== null && typeof r == "object" && this._w.Object.keys(r).length > 0)
          for (let b in r)
            u.setRequestHeader(b, r[b]);
        u.send(c);
      },
      _callBackUpload: function(n, r, c) {
        if (n.readyState === 4)
          if (n.status === 200)
            try {
              r(n);
            } catch (d) {
              throw Error('[SUNEDITOR.fileManager.upload.callBack.fail] cause : "' + d.message + '"');
            } finally {
              this.closeLoading();
            }
          else {
            this.closeLoading();
            const d = n.responseText ? JSON.parse(n.responseText) : n;
            if (typeof c != "function" || c("", d, this)) {
              const l = "[SUNEDITOR.fileManager.upload.serverException] status: " + n.status + ", response: " + (d.errorMessage || n.responseText);
              throw this.functions.noticeOpen(l), Error(l);
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
      checkInfo: function(n, r, c, d, l) {
        let v = [];
        for (let a = 0, f = r.length; a < f; a++)
          v = v.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(r[a] + ':not([data-se-embed="true"])')));
        const u = this.plugins.fileManager, b = this.context[n], C = b._infoList, x = u.setInfo.bind(this);
        if (v.length === C.length)
          if (this._componentsInfoReset) {
            for (let a = 0, f = v.length; a < f; a++)
              x(n, v[a], c, null, l);
            return;
          } else {
            let a = !1;
            for (let f = 0, p = C.length, h; f < p; f++)
              if (h = C[f], v.filter(function(g) {
                return h.src === g.src && h.index.toString() === g.getAttribute("data-index");
              }).length === 0) {
                a = !0;
                break;
              }
            if (!a) return;
          }
        const L = l ? this.context.resizing._resize_plugin : "";
        l && (this.context.resizing._resize_plugin = n);
        const A = [], o = [];
        for (let a = 0, f = C.length; a < f; a++)
          o[a] = C[a].index;
        for (b.__updateTags = v; v.length > 0; ) {
          const a = v.shift();
          !this.util.getParentElement(a, this.util.isMediaComponent) || !u._checkMediaComponent(a) ? (A.push(b._infoIndex), d(a)) : !a.getAttribute("data-index") || o.indexOf(a.getAttribute("data-index") * 1) < 0 ? (A.push(b._infoIndex), a.removeAttribute("data-index"), x(n, a, c, null, l)) : A.push(a.getAttribute("data-index") * 1);
        }
        for (let a = 0, f; a < C.length; a++)
          f = C[a].index, !(A.indexOf(f) > -1) && (C.splice(a, 1), typeof c == "function" && c(null, f, "delete", null, 0, this), a--);
        l && (this.context.resizing._resize_plugin = L);
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
      setInfo: function(n, r, c, d, l) {
        const v = l ? this.context.resizing._resize_plugin : "";
        l && (this.context.resizing._resize_plugin = n);
        const u = this.plugins[n], b = this.context[n], C = b._infoList;
        let x = r.getAttribute("data-index"), L = null, A = "";
        if (d || (d = {
          name: r.getAttribute("data-file-name") || (typeof r.src == "string" ? r.src.split("/").pop() : ""),
          size: r.getAttribute("data-file-size") || 0
        }), !x || this._componentsInfoInit)
          A = "create", x = b._infoIndex++, r.setAttribute("data-index", x), r.setAttribute("data-file-name", d.name), r.setAttribute("data-file-size", d.size), L = {
            src: r.src,
            index: x * 1,
            name: d.name,
            size: d.size
          }, C.push(L);
        else {
          A = "update", x *= 1;
          for (let o = 0, a = C.length; o < a; o++)
            if (x === C[o].index) {
              L = C[o];
              break;
            }
          L || (x = b._infoIndex++, L = { index: x }, C.push(L)), L.src = r.src, L.name = r.getAttribute("data-file-name"), L.size = r.getAttribute("data-file-size") * 1;
        }
        if (L.element = r, L.delete = u.destroy.bind(this, r), L.select = (function(o) {
          o.scrollIntoView(!0), this._w.setTimeout(u.select.bind(this, o));
        }).bind(this, r), l) {
          if (!r.getAttribute("origin-size") && r.naturalWidth && r.setAttribute("origin-size", r.naturalWidth + "," + r.naturalHeight), !r.getAttribute("data-origin")) {
            const o = this.util.getParentElement(r, this.util.isMediaComponent), a = this.util.getParentElement(r, "FIGURE"), f = this.plugins.resizing._module_getSizeX.call(this, b, r, a, o), p = this.plugins.resizing._module_getSizeY.call(this, b, r, a, o);
            r.setAttribute("data-origin", f + "," + p), r.setAttribute("data-size", f + "," + p);
          }
          if (!r.style.width) {
            const o = (r.getAttribute("data-size") || r.getAttribute("data-origin") || "").split(",");
            u.onModifyMode.call(this, r, null), u.applySize.call(this, o[0], o[1]);
          }
          this.context.resizing._resize_plugin = v;
        }
        typeof c == "function" && c(r, x, A, L, --b._uploadFileLength < 0 ? 0 : b._uploadFileLength, this);
      },
      /**
       * @description Delete info object at "_infoList"
       * @param {String} pluginName Plugin name 
       * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
       * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
       */
      deleteInfo: function(n, r, c) {
        if (r >= 0) {
          const d = this.context[n]._infoList;
          for (let l = 0, v = d.length; l < v; l++)
            if (r === d[l].index) {
              d.splice(l, 1), typeof c == "function" && c(null, r, "delete", null, 0, this);
              return;
            }
        }
      },
      /**
       * @description Reset info object and "_infoList = []", "_infoIndex = 0"
       * @param {String} pluginName Plugin name 
       * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
       */
      resetInfo: function(n, r) {
        const c = this.context[n];
        if (typeof r == "function") {
          const d = c._infoList;
          for (let l = 0, v = d.length; l < v; l++)
            r(null, d[l].index, "delete", null, 0, this);
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
      value: s
    })), s;
  });
})(cl);
var is = cl.exports;
const It = /* @__PURE__ */ Ce(is), ls = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([ct, ol, Mt, ul, It]);
    const t = e.options, i = e.context, s = i.image = {
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
    s.modal = n, s.imgInputFile = n.querySelector("._se_image_file"), s.imgUrlFile = n.querySelector("._se_image_url"), s.focusElement = s.imgInputFile || s.imgUrlFile, s.altText = n.querySelector("._se_image_alt"), s.captionCheckEl = n.querySelector("._se_image_check_caption"), s.previewSrc = n.querySelector("._se_tab_content_image .se-link-preview"), n.querySelector(".se-dialog-tabs").addEventListener("click", this.openTab.bind(e)), n.querySelector("form").addEventListener("submit", this.submit.bind(e)), s.imgInputFile && n.querySelector(".se-file-remove").addEventListener("click", this._removeSelectedFiles.bind(s.imgInputFile, s.imgUrlFile, s.previewSrc)), s.imgUrlFile && s.imgUrlFile.addEventListener("input", this._onLinkPreview.bind(s.previewSrc, s._v_src, t.linkProtocol)), s.imgInputFile && s.imgUrlFile && s.imgInputFile.addEventListener("change", this._fileInputChange.bind(s));
    const r = n.querySelector(".__se__gallery");
    r && r.addEventListener("click", this._openGallery.bind(e)), s.proportion = {}, s.inputX = {}, s.inputY = {}, t.imageResizing && (s.proportion = n.querySelector("._se_image_check_proportion"), s.inputX = n.querySelector("._se_image_size_x"), s.inputY = n.querySelector("._se_image_size_y"), s.inputX.value = t.imageWidth, s.inputY.value = t.imageHeight, s.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), s.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), s.inputX.addEventListener("change", this.setRatio.bind(e)), s.inputY.addEventListener("change", this.setRatio.bind(e)), s.proportion.addEventListener("change", this.setRatio.bind(e)), n.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(n), e.plugins.anchor.initEvent.call(e, "image", n.querySelector("._se_tab_content_url")), s.anchorCtx = e.context.anchor.caller.image, n = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, s = e.util.createElement("DIV");
    s.className = "se-dialog-content se-dialog-image", s.style.display = "none";
    let n = '<div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" class="close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.imageBox.title + '</span></div><div class="se-dialog-tabs"><button type="button" class="_se_tab_link active" data-tab-link="image">' + i.toolbar.image + '</button><button type="button" class="_se_tab_link" data-tab-link="url">' + i.toolbar.link + '</button></div><form method="post" enctype="multipart/form-data"><div class="_se_tab_content _se_tab_content_image"><div class="se-dialog-body"><div style="border-bottom: 1px dashed #ccc;">';
    if (t.imageFileInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_image_file" type="file" accept="' + t.imageAccept + '"' + (t.imageMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.imageUrlInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url _se_image_url" type="text" />' + (t.imageGalleryUrl && e.plugins.imageGallery ? '<button type="button" class="se-btn se-dialog-files-edge-button __se__gallery" title="' + i.toolbar.imageGallery + '" aria-label="' + i.toolbar.imageGallery + '">' + e.icons.image_gallery + "</button>" : "") + '</div><pre class="se-link-preview"></pre></div>'), n += '</div><div class="se-dialog-form"><label>' + i.dialogBox.imageBox.altText + '</label><input class="se-input-form _se_image_alt" type="text" /></div>', t.imageResizing) {
      const r = t.imageSizeOnlyPercentage, c = r ? ' style="display: none !important;"' : "", d = t.imageHeightShow ? "" : ' style="display: none !important;"';
      n += '<div class="se-dialog-form">', r || !t.imageHeightShow ? n += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.size + "</label></div>" : n += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + i.dialogBox.height + "</label></div>", n += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (r ? ' type="number" min="1"' : 'type="text"') + (r ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + d + ">" + (r ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + c + (r ? ' max="100"' : "") + d + "/><label" + c + d + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + '</label><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
    }
    return n += '<div class="se-dialog-form se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_image_check_caption" />&nbsp;' + i.dialogBox.caption + '</label></div></div></div><div class="_se_tab_content _se_tab_content_url" style="display: none">' + e.context.anchor.forms.innerHTML + '</div><div class="se-dialog-footer"><div' + (t.imageAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", s.innerHTML = n, s;
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
    const s = i.target.value.trim();
    e._linkValue = this.textContent = s ? t && s.indexOf("://") === -1 && s.indexOf("#") !== 0 ? t + s : s.indexOf("://") === -1 ? "/" + s : s : "";
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
    const t = e || this.context.image._element, i = this.util.getParentElement(t, this.util.isMediaComponent) || t, s = t.getAttribute("data-index") * 1;
    if (typeof this.functions.onImageDeleteBefore == "function" && this.functions.onImageDeleteBefore(t, i, s, this) === !1) return;
    let n = i.previousElementSibling || i.nextElementSibling;
    const r = i.parentNode;
    this.util.removeItem(i), this.plugins.image.init.call(this), this.controllersOff(), r !== this.context.element.wysiwyg && this.util.removeItemAllParents(r, function(c) {
      return c.childNodes.length === 0;
    }, null), this.focusEdge(n), this.plugins.fileManager.deleteInfo.call(this, "image", s, this.functions.onImageUpload), this.history.push(!1);
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
    const s = i.getAttribute("data-tab-link"), n = "_se_tab_content";
    let r, c, d;
    for (c = t.getElementsByClassName(n), r = 0; r < c.length; r++)
      c[r].style.display = "none";
    for (d = t.getElementsByClassName("_se_tab_link"), r = 0; r < d.length; r++)
      this.util.removeClass(d[r], "active");
    return t.querySelector("." + n + "_" + s).style.display = "block", this.util.addClass(i, "active"), s === "image" && this.context.image.focusElement ? this.context.image.focusElement.focus() : s === "url" && this.context.anchor.caller.image.urlInput.focus(), !1;
  },
  submit: function(e) {
    const t = this.context.image, i = this.plugins.image;
    e.preventDefault(), e.stopPropagation(), t._altText = t.altText.value, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked, t._resizing && (t._proportionChecked = t.proportion.checked);
    try {
      this.context.dialog.updateModal && i.update_image.call(this, !1, !0, !1), t.imgInputFile && t.imgInputFile.files.length > 0 ? (this.showLoading(), i.submitAction.call(this, this.context.image.imgInputFile.files)) : t.imgUrlFile && t._v_src._linkValue.length > 0 && (this.showLoading(), i.onRender_imgUrl.call(this, t._v_src._linkValue));
    } catch (s) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.submit.fail] cause : "' + s.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, i = [];
    for (let d = 0, l = e.length; d < l; d++)
      /image/i.test(e[d].type) && (i.push(e[d]), t += e[d].size);
    const s = this.options.imageUploadSizeLimit;
    if (s > 0) {
      let d = 0;
      const l = this.context.image._infoList;
      for (let v = 0, u = l.length; v < u; v++)
        d += l[v].size * 1;
      if (t + d > s) {
        this.closeLoading();
        const v = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + s / 1e3 + "KB";
        (typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(v, { limitSize: s, currentSize: d, uploadSize: t }, this)) && this.functions.noticeOpen(v);
        return;
      }
    }
    const n = this.context.image;
    n._uploadFileLength = i.length;
    const c = {
      anchor: this.plugins.anchor.createAnchor.call(this, n.anchorCtx, !0),
      inputWidth: n.inputX.value,
      inputHeight: n.inputY.value,
      align: n._align,
      isUpdate: this.context.dialog.updateModal,
      alt: n._altText,
      element: n._element
    };
    if (typeof this.functions.onImageUploadBefore == "function") {
      const d = this.functions.onImageUploadBefore(i, c, this, (function(l) {
        l && this._w.Array.isArray(l.result) ? this.plugins.image.register.call(this, c, l) : this.plugins.image.upload.call(this, c, l);
      }).bind(this));
      if (typeof d > "u") return;
      if (!d) {
        this.closeLoading();
        return;
      }
      this._w.Array.isArray(d) && d.length > 0 && (i = d);
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
    const i = this.options.imageUploadUrl, s = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const n = new FormData();
      for (let r = 0; r < s; r++)
        n.append("file-" + r, t[r]);
      this.plugins.fileManager.upload.call(this, i, this.options.imageUploadHeader, n, this.plugins.image.callBack_imgUpload.bind(this, e), this.functions.onImageUploadError);
    } else
      this.plugins.image.setup_reader.call(this, t, e.anchor, e.inputWidth, e.inputHeight, e.align, e.alt, s, e.isUpdate);
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
    for (let s = 0, n = i.length, r; s < n; s++)
      if (r = { name: i[s].name, size: i[s].size }, e.isUpdate) {
        this.plugins.image.update_src.call(this, i[s].url, e.element, r);
        break;
      } else
        this.plugins.image.create_image.call(this, i[s].url, e.anchor, e.inputWidth, e.inputHeight, e.align, r, e.alt);
    this.closeLoading();
  },
  setup_reader: function(e, t, i, s, n, r, c, d) {
    try {
      if (c === 0) {
        this.closeLoading(), console.warn("[SUNEDITOR.image.base64.fail] cause : No applicable files");
        return;
      }
      this.context.image.base64RenderIndex = c;
      const l = this._w.FileReader, v = [c];
      this.context.image.inputX.value = i, this.context.image.inputY.value = s;
      for (let u = 0, b, C; u < c; u++)
        b = new l(), C = e[u], b.onload = (function(x, L, A, o, a) {
          v[a] = { result: x.result, file: o }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, L, v, A, t, i, s, n, r), this.closeLoading());
        }).bind(this, b, d, this.context.image._element, C, u), b.readAsDataURL(C);
    } catch (l) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + l.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, i, s, n, r, c, d) {
    const l = this.plugins.image.update_src, v = this.plugins.image.create_image;
    for (let u = 0, b = t.length; u < b; u++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[u].file.name), this.context.image._element.setAttribute("data-file-size", t[u].file.size), l.call(this, t[u].result, i, t[u].file)) : v.call(this, t[u].result, s, n, r, c, t[u].file, d);
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
    const e = this.plugins.image, t = this.context.image, i = (function(s) {
      e.onModifyMode.call(this, s, null), e.openModify.call(this, !0), t.inputX.value = t._origin_w, t.inputY.value = t._origin_h;
      const n = this.util.getFormatElement(s);
      n && (t._align = n.style.textAlign || n.style.float), this.util.isAnchor(s.parentNode) && !t.anchorCtx.linkValue && (t.anchorCtx.linkValue = " "), e.update_image.call(this, !0, !1, !0), e.init.call(this);
    }).bind(this);
    this.plugins.fileManager.checkInfo.call(this, "image", ["img"], this.functions.onImageUpload, i, !0);
  },
  /**
   * @Override fileManager
   */
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "image", this.functions.onImageUpload);
  },
  create_image: function(e, t, i, s, n, r, c) {
    const d = this.plugins.image, l = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let v = this.util.createElement("IMG");
    v.src = e, v.alt = c, v.setAttribute("data-rotate", "0"), t = d.onRender_link.call(this, v, t ? t.cloneNode(!1) : null), l._resizing && v.setAttribute("data-proportion", l._proportionChecked);
    const u = this.plugins.component.set_cover.call(this, t), b = this.plugins.component.set_container.call(this, u, "se-image-container");
    l._captionChecked && (l._caption = this.plugins.component.create_caption.call(this), u.appendChild(l._caption)), l._element = v, l._cover = u, l._container = b, d.applySize.call(this, i, s), d.setAlign.call(this, n, v, u, b), v.onload = d._image_create_onload.bind(this, v, l.svgDefaultSize, b), this.insertComponent(b, !0, !0, !0) && this.plugins.fileManager.setInfo.call(this, "image", v, this.functions.onImageUpload, r, !0), this.context.resizing._resize_plugin = "";
  },
  _image_create_onload: function(e, t, i) {
    if (e.offsetWidth === 0 && this.plugins.image.applySize.call(this, t, ""), this.options.mediaAutoSelect)
      this.selectComponent(e, "image");
    else {
      const s = this.appendFormatTag(i, null);
      s && this.setRange(s, 0, s, 0);
    }
  },
  update_image: function(e, t, i) {
    const s = this.context.image;
    let n = s._element, r = s._cover, c = s._container, d = !1;
    r === null && (d = !0, n = s._element.cloneNode(!0), r = this.plugins.component.set_cover.call(this, n)), c === null ? (r = r.cloneNode(!0), n = r.querySelector("img"), d = !0, c = this.plugins.component.set_container.call(this, r, "se-image-container")) : d && (c.innerHTML = "", c.appendChild(r), s._cover = r, s._element = n, d = !1);
    let l;
    const v = this.util.isNumber(s.inputX.value) ? s.inputX.value + s.sizeUnit : s.inputX.value, u = this.util.isNumber(s.inputY.value) ? s.inputY.value + s.sizeUnit : s.inputY.value;
    /%$/.test(n.style.width) ? l = v !== c.style.width || u !== c.style.height : l = v !== n.style.width || u !== n.style.height, n.alt = s._altText;
    let b = !1;
    s._captionChecked ? s._caption || (s._caption = this.plugins.component.create_caption.call(this), r.appendChild(s._caption), b = !0) : s._caption && (this.util.removeItem(s._caption), s._caption = null, b = !0);
    let C = null;
    const x = this.plugins.anchor.createAnchor.call(this, s.anchorCtx, !0);
    if (x)
      s._linkElement !== x || d && !c.contains(x) ? (s._linkElement = x.cloneNode(!1), r.insertBefore(this.plugins.image.onRender_link.call(this, n, s._linkElement), s._caption), C = s._element) : s._linkElement.setAttribute("data-image-link", "image");
    else if (s._linkElement !== null) {
      const A = n;
      if (A.setAttribute("data-image-link", ""), r.contains(s._linkElement)) {
        const o = A.cloneNode(!0);
        r.removeChild(s._linkElement), r.insertBefore(o, s._caption), s._element = n = o;
      }
    }
    let L = null;
    if (d) {
      if (L = this.util.isRangeFormatElement(s._element.parentNode) || this.util.isWysiwygDiv(s._element.parentNode) ? s._element : this.util.isAnchor(s._element.parentNode) ? s._element.parentNode : this.util.getFormatElement(s._element) || s._element, this.util.getParentElement(s._element, this.util.isNotCheckingNode))
        L = C ? x : s._element, L.parentNode.replaceChild(c, L);
      else if (this.util.isListCell(L)) {
        const A = this.util.getParentElement(s._element, function(o) {
          return o.parentNode === L;
        });
        L.insertBefore(c, A), this.util.removeItem(s._element), this.util.removeEmptyNode(A, null, !0);
      } else if (this.util.isFormatElement(L)) {
        const A = this.util.getParentElement(s._element, function(o) {
          return o.parentNode === L;
        });
        L = this.util.splitElement(L, A), L.parentNode.insertBefore(c, L), this.util.removeItem(s._element), this.util.removeEmptyNode(L, null, !0), L.children.length === 0 && (L.innerHTML = this.util.htmlRemoveWhiteSpace(L.innerHTML));
      } else if (this.util.isFormatElement(L.parentNode)) {
        const A = L.parentNode;
        A.parentNode.insertBefore(c, L.previousSibling ? A.nextElementSibling : A), s.__updateTags.map(function(o) {
          return L.contains(o);
        }).length === 0 && this.util.removeItem(L);
      } else
        L = this.util.isFigures(L.parentNode) ? L.parentNode : L, L.parentNode.replaceChild(c, L);
      n = c.querySelector("img"), s._element = n, s._cover = r, s._container = c;
    }
    C && (d ? (this.util.removeItem(C), this.util.getListChildren(x, function(A) {
      return /IMG/i.test(A.tagName);
    }).length === 0 && this.util.removeItem(x)) : this.util.removeItem(x)), (b || !s._onlyPercentage && l) && !e && (/\d+/.test(n.style.height) || this.context.resizing._rotateVertical && s._captionChecked) && (/%$/.test(s.inputX.value) || /%$/.test(s.inputY.value) ? this.plugins.resizing.resetTransform.call(this, n) : this.plugins.resizing.setTransformSize.call(this, n, this.util.getNumber(s.inputX.value, 0), this.util.getNumber(s.inputY.value, 0))), s._resizing && (n.setAttribute("data-proportion", s._proportionChecked), l && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, n, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", n, this.functions.onImageUpload, null, !0), t && this.selectComponent(n, "image"), i || this.history.push(!1);
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
    let s = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), n, r;
    s ? (s = s.split(","), n = s[0], r = s[1]) : t && (n = t.w, r = t.h), i._origin_w = n || e.style.width || e.width || "", i._origin_h = r || e.style.height || e.height || "";
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
  setSize: function(e, t, i, s) {
    const n = this.context.image, r = /^(rw|lw)$/.test(s) && /\d+/.test(n._element.style.height);
    /^(th|bh)$/.test(s) && /\d+/.test(n._element.style.width) || (n._element.style.width = this.util.isNumber(e) ? e + n.sizeUnit : e, this.plugins.image.cancelPercentAttr.call(this)), r || (n._element.style.height = this.util.isNumber(t) ? t + n.sizeUnit : /%$/.test(t) ? "" : t), n._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i || n._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, n);
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
    const t = (e._element.getAttribute("data-origin") || "").split(","), i = t[0], s = t[1];
    t && (e._onlyPercentage || /%$/.test(i) && (/%$/.test(s) || !/\d/.test(s)) ? this.plugins.image.setPercentSize.call(this, i, s) : this.plugins.image.setSize.call(this, i, s), this.plugins.resizing._module_saveCurrentSize.call(this, e));
  },
  /**
   * @Override resizing
   */
  setPercentSize: function(e, t) {
    const i = this.context.image;
    t = t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + i.sizeUnit : t || "";
    const s = /%$/.test(t);
    i._container.style.width = this.util.isNumber(e) ? e + "%" : e, i._container.style.height = "", i._cover.style.width = "100%", i._cover.style.height = s ? t : "", i._element.style.width = "100%", i._element.style.height = s ? "" : t, i._element.style.maxWidth = "", i._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing.setCaptionPosition.call(this, i._element), this.plugins.resizing._module_saveCurrentSize.call(this, i);
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
  setAlign: function(e, t, i, s) {
    const n = this.context.image;
    e || (e = n._align), t || (t = n._element), i || (i = n._cover), s || (s = n._container), /%$/.test(t.style.width) && e === "center" ? (s.style.minWidth = "100%", i.style.width = s.style.width) : (s.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : !t.style.width || t.style.width === "auto" ? "" : t.style.width || "100%"), this.util.hasClass(s, "__se__float-" + e) || (this.util.removeClass(s, n._floatClassRegExp), this.util.addClass(s, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.image;
    e.imgInputFile && (e.imgInputFile.value = ""), e.imgUrlFile && (e._v_src._linkValue = e.previewSrc.textContent = e.imgUrlFile.value = ""), e.imgInputFile && e.imgUrlFile && (e.imgUrlFile.removeAttribute("disabled"), e.previewSrc.style.textDecoration = ""), e.altText.value = "", e.modal.querySelector('input[name="suneditor_image_radio"][value="none"]').checked = !0, e.captionCheckEl.checked = !1, e._element = null, this.plugins.image.openTab.call(this, "init"), e._resizing && (e.inputX.value = this.options.imageWidth === e._defaultSizeX ? "" : this.options.imageWidth, e.inputY.value = this.options.imageHeight === e._defaultSizeY ? "" : this.options.imageHeight, e.proportion.checked = !0, e._ratio = !1, e._ratioX = 1, e._ratioY = 1), this.plugins.anchor.init.call(this, e.anchorCtx);
  }
}, ns = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([ct, Mt, ul, It]);
    const t = e.options, i = e.context, s = i.video = {
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
    s.modal = n, s.videoInputFile = n.querySelector("._se_video_file"), s.videoUrlFile = n.querySelector(".se-input-url"), s.focusElement = s.videoUrlFile || s.videoInputFile, s.preview = n.querySelector(".se-link-preview"), n.querySelector("form").addEventListener("submit", this.submit.bind(e)), s.videoInputFile && n.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(s.videoInputFile, s.videoUrlFile, s.preview)), s.videoInputFile && s.videoUrlFile && s.videoInputFile.addEventListener("change", this._fileInputChange.bind(s)), s.videoUrlFile && s.videoUrlFile.addEventListener("input", this._onLinkPreview.bind(s.preview, s, t.linkProtocol)), s.proportion = {}, s.videoRatioOption = {}, s.inputX = {}, s.inputY = {}, t.videoResizing && (s.proportion = n.querySelector("._se_video_check_proportion"), s.videoRatioOption = n.querySelector(".se-video-ratio"), s.inputX = n.querySelector("._se_video_size_x"), s.inputY = n.querySelector("._se_video_size_y"), s.inputX.value = t.videoWidth, s.inputY.value = t.videoHeight, s.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), s.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), s.inputX.addEventListener("change", this.setRatio.bind(e)), s.inputY.addEventListener("change", this.setRatio.bind(e)), s.proportion.addEventListener("change", this.setRatio.bind(e)), s.videoRatioOption.addEventListener("change", this.setVideoRatio.bind(e)), n.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(n), n = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, s = e.util.createElement("DIV");
    s.className = "se-dialog-content", s.style.display = "none";
    let n = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.videoBox.title + '</span></div><div class="se-dialog-body">';
    if (t.videoFileInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_video_file" type="file" accept="' + t.videoAccept + '"' + (t.videoMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.videoUrlInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), t.videoResizing) {
      const r = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], c = t.videoRatio, d = t.videoSizeOnlyPercentage, l = d ? ' style="display: none !important;"' : "", v = t.videoHeightShow ? "" : ' style="display: none !important;"', u = t.videoRatioShow ? "" : ' style="display: none !important;"', b = !d && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      n += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + v + ">" + i.dialogBox.height + '</label><label class="size-h"' + u + ">(" + i.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (d ? ' type="number" min="1"' : 'type="text"') + (d ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + b + ">" + (d ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (d ? ' type="number" min="1"' : 'type="text"') + (d ? ' max="100"' : "") + v + '/><select class="se-input-select se-video-ratio" title="' + i.dialogBox.ratio + '" aria-label="' + i.dialogBox.ratio + '"' + u + ">", v || (n += '<option value=""> - </option>');
      for (let C = 0, x = r.length; C < x; C++)
        n += '<option value="' + r[C].value + '"' + (c.toString() === r[C].value.toString() ? " selected" : "") + ">" + r[C].name + "</option>";
      n += '</select><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + l + b + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + "</label></div>";
    }
    return n += '</div><div class="se-dialog-footer"><div' + (t.videoAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", s.innerHTML = n, s;
  },
  _fileInputChange: function() {
    this.videoInputFile.value ? (this.videoUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.videoUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _onLinkPreview: function(e, t, i) {
    const s = i.target.value.trim();
    /^<iframe.*\/iframe>$/.test(s) ? (e._linkValue = s, this.textContent = '<IFrame :src=".."></IFrame>') : e._linkValue = this.textContent = s ? t && s.indexOf("://") === -1 && s.indexOf("#") !== 0 ? t + s : s.indexOf("://") === -1 ? "/" + s : s : "";
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
    const t = e || this.context.video._element, i = this.context.video._container, s = t.getAttribute("data-index") * 1;
    if (typeof this.functions.onVideoDeleteBefore == "function" && this.functions.onVideoDeleteBefore(t, i, s, this) === !1) return;
    let n = i.previousElementSibling || i.nextElementSibling;
    const r = i.parentNode;
    this.util.removeItem(i), this.plugins.video.init.call(this), this.controllersOff(), r !== this.context.element.wysiwyg && this.util.removeItemAllParents(r, function(c) {
      return c.childNodes.length === 0;
    }, null), this.focusEdge(n), this.plugins.fileManager.deleteInfo.call(this, "video", s, this.functions.onVideoUpload), this.history.push(!1);
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
    } catch (s) {
      throw this.closeLoading(), Error('[SUNEDITOR.video.submit.fail] cause : "' + s.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0) return;
    let t = 0, i = [];
    for (let c = 0, d = e.length; c < d; c++)
      /video/i.test(e[c].type) && (i.push(e[c]), t += e[c].size);
    const s = this.options.videoUploadSizeLimit;
    if (s > 0) {
      let c = 0;
      const d = this.context.video._infoList;
      for (let l = 0, v = d.length; l < v; l++)
        c += d[l].size * 1;
      if (t + c > s) {
        this.closeLoading();
        const l = "[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: " + s / 1e3 + "KB";
        (typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(l, { limitSize: s, currentSize: c, uploadSize: t }, this)) && this.functions.noticeOpen(l);
        return;
      }
    }
    const n = this.context.video;
    n._uploadFileLength = i.length;
    const r = {
      inputWidth: n.inputX.value,
      inputHeight: n.inputY.value,
      align: n._align,
      isUpdate: this.context.dialog.updateModal,
      element: n._element
    };
    if (typeof this.functions.onVideoUploadBefore == "function") {
      const c = this.functions.onVideoUploadBefore(i, r, this, (function(d) {
        d && this._w.Array.isArray(d.result) ? this.plugins.video.register.call(this, r, d) : this.plugins.video.upload.call(this, r, d);
      }).bind(this));
      if (typeof c > "u") return;
      if (!c) {
        this.closeLoading();
        return;
      }
      typeof c == "object" && c.length > 0 && (i = c);
    }
    this.plugins.video.upload.call(this, r, i);
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
    const i = this.options.videoUploadUrl, s = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const n = new FormData();
      for (let r = 0; r < s; r++)
        n.append("file-" + r, t[r]);
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
    const i = t.result, s = this.plugins.video.createVideoTag.call(this);
    for (let n = 0, r = i.length, c; n < r; n++)
      c = { name: i[n].name, size: i[n].size }, this.plugins.video.create_video.call(this, e.isUpdate ? e.element : s.cloneNode(!1), i[n].url, e.inputWidth, e.inputHeight, e.align, c, e.isUpdate);
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
  create_video: function(e, t, i, s, n, r, c) {
    this.context.resizing._resize_plugin = "video";
    const d = this.context.video;
    let l = null, v = null, u = !1;
    if (c) {
      if (e = d._element, e.src !== t) {
        u = !0;
        const A = /youtu\.?be/.test(t), o = /vimeo\.com/.test(t);
        if ((A || o) && !/^iframe$/i.test(e.nodeName)) {
          const a = this.plugins.video.createIframeTag.call(this);
          a.src = t, e.parentNode.replaceChild(a, e), d._element = e = a;
        } else if (!A && !o && !/^video$/i.test(e.nodeName)) {
          const a = this.plugins.video.createVideoTag.call(this);
          a.src = t, e.parentNode.replaceChild(a, e), d._element = e = a;
        } else
          e.src = t;
      }
      v = d._container, l = this.util.getParentElement(e, "FIGURE");
    } else
      u = !0, e.src = t, d._element = e, l = this.plugins.component.set_cover.call(this, e), v = this.plugins.component.set_container.call(this, l, "se-video-container");
    d._cover = l, d._container = v;
    const b = this.plugins.resizing._module_getSizeX.call(this, d) !== (i || d._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, d) !== (s || d._videoRatio), C = !c || b;
    d._resizing && (this.context.video._proportionChecked = d.proportion.checked, e.setAttribute("data-proportion", d._proportionChecked));
    let x = !1;
    C && (x = this.plugins.video.applySize.call(this)), x && n === "center" || this.plugins.video.setAlign.call(this, null, e, l, v);
    let L = !0;
    if (c)
      d._resizing && this.context.resizing._rotateVertical && C && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (L = this.insertComponent(v, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const A = this.appendFormatTag(v, null);
      A && this.setRange(A, 0, A, 0);
    }
    L && (u && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, r, !0), c && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
  },
  _update_videoCover: function(e) {
    if (!e) return;
    const t = this.context.video;
    /^video$/i.test(e.nodeName) ? this.plugins.video._setTagAttrs.call(this, e) : this.plugins.video._setIframeAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const s = e;
    t._element = e = e.cloneNode(!0);
    const n = t._cover = this.plugins.component.set_cover.call(this, e), r = t._container = this.plugins.component.set_container.call(this, n, "se-video-container");
    try {
      const c = i.querySelector("figcaption");
      let d = null;
      c && (d = this.util.createElement("DIV"), d.innerHTML = c.innerHTML, this.util.removeItem(c));
      const l = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, l[0] || s.style.width || s.width || "", l[1] || s.style.height || s.height || "");
      const v = this.util.getFormatElement(s);
      if (v && (t._align = v.style.textAlign || v.style.float), this.plugins.video.setAlign.call(this, null, e, n, r), this.util.getParentElement(s, this.util.isNotCheckingNode))
        s.parentNode.replaceChild(r, s);
      else if (this.util.isListCell(i)) {
        const u = this.util.getParentElement(s, function(b) {
          return b.parentNode === i;
        });
        i.insertBefore(r, u), this.util.removeItem(s), this.util.removeEmptyNode(u, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const u = this.util.getParentElement(s, function(b) {
          return b.parentNode === i;
        });
        i = this.util.splitElement(i, u), i.parentNode.insertBefore(r, i), this.util.removeItem(s), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(r, i);
      d && i.parentNode.insertBefore(d, r.nextElementSibling);
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
    let s = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), n, r;
    s ? (s = s.split(","), n = s[0], r = s[1]) : t && (n = t.w, r = t.h), i._origin_w = n || e.style.width || e.width || "", i._origin_h = r || e.style.height || e.height || "";
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
    const i = this.context.video, s = i.videoRatioOption.options;
    /%$/.test(e) || i._onlyPercentage ? e = this.util.getNumber(e, 2) / 100 + "" : (!this.util.isNumber(e) || e * 1 >= 1) && (e = ""), i.inputY.placeholder = "";
    for (let n = 0, r = s.length; n < r; n++)
      s[n].value === e ? (t = s[n].selected = !0, i.inputY.placeholder = e ? e * 100 + "%" : "") : s[n].selected = !1;
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
  setSize: function(e, t, i, s) {
    const n = this.context.video, r = /^(rw|lw)$/.test(s), c = /^(th|bh)$/.test(s);
    c || (e = this.util.getNumber(e, 0)), r || (t = this.util.isNumber(t) ? t + n.sizeUnit : t || ""), e = e ? e + n.sizeUnit : "", c || (n._element.style.width = e), r || (n._cover.style.paddingBottom = n._cover.style.height = t), !c && !/%$/.test(e) && (n._cover.style.width = e, n._container.style.width = ""), !r && !/%$/.test(t) ? n._element.style.height = t : n._element.style.height = "", i || n._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, n);
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
      const s = i[0], n = i[1];
      t._onlyPercentage || /%$/.test(s) && (/%$/.test(n) || !/\d/.test(n)) ? this.plugins.video.setPercentSize.call(this, s, n) : this.plugins.video.setSize.call(this, s, n), this.plugins.resizing._module_saveCurrentSize.call(this, t);
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
  setAlign: function(e, t, i, s) {
    const n = this.context.video;
    e || (e = n._align), t || (t = n._element), i || (i = n._cover), s || (s = n._container), /%$/.test(t.style.width) && e === "center" ? (s.style.minWidth = "100%", i.style.width = s.style.width, i.style.height = i.style.height, i.style.paddingBottom = /%$/.test(i.style.height) ? this.util.getNumber(this.util.getNumber(i.style.height, 2) / 100 * this.util.getNumber(i.style.width, 2), 2) + "%" : i.style.height) : (s.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : t.style.width || "100%", i.style.paddingBottom = i.style.height), this.util.hasClass(s, "__se__float-" + e) || (this.util.removeClass(s, n._floatClassRegExp), this.util.addClass(s, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.video;
    e.videoInputFile && (e.videoInputFile.value = ""), e.videoUrlFile && (e._linkValue = e.preview.textContent = e.videoUrlFile.value = ""), e.videoInputFile && e.videoUrlFile && (e.videoUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._origin_w = this.options.videoWidth, e._origin_h = this.options.videoHeight, e.modal.querySelector('input[name="suneditor_video_radio"][value="none"]').checked = !0, e._resizing && (e.inputX.value = this.options.videoWidth === e._defaultSizeX ? "" : this.options.videoWidth, e.inputY.value = this.options.videoHeight === e._defaultSizeY ? "" : this.options.videoHeight, e.proportion.checked = !0, e.proportion.disabled = !0, this.plugins.video.setVideoRatioSelect.call(this, e._defaultRatio));
  }
}, ss = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([ct, Mt, It]);
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
    let s = this.setDialog(e);
    i.modal = s, i.audioInputFile = s.querySelector("._se_audio_files"), i.audioUrlFile = s.querySelector(".se-input-url"), i.focusElement = i.audioInputFile || i.audioUrlFile, i.preview = s.querySelector(".se-link-preview");
    let n = this.setController(e);
    i.controller = n, s.querySelector("form").addEventListener("submit", this.submit.bind(e)), i.audioInputFile && s.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(i.audioInputFile, i.audioUrlFile, i.preview)), i.audioInputFile && i.audioUrlFile && i.audioInputFile.addEventListener("change", this._fileInputChange.bind(i)), n.addEventListener("click", this.onClick_controller.bind(e)), i.audioUrlFile && i.audioUrlFile.addEventListener("input", this._onLinkPreview.bind(i.preview, i, e.options.linkProtocol)), t.dialog.modal.appendChild(s), t.element.relative.appendChild(n), s = null, n = null;
  },
  /** HTML - dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, s = e.util.createElement("DIV");
    s.className = "se-dialog-content", s.style.display = "none";
    let n = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.audioBox.title + '</span></div><div class="se-dialog-body">';
    return t.audioFileInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_audio_files" type="file" accept="' + t.audioAccept + '"' + (t.audioMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.audioUrlInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), n += '</div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", s.innerHTML = n, s;
  },
  /** HTML - controller */
  setController: function(e) {
    const t = e.lang, i = e.icons, s = e.util.createElement("DIV");
    return s.className = "se-controller se-controller-link", s.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-tooltip">' + i.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", s;
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
    const s = i.target.value.trim();
    e._linkValue = this.textContent = s ? t && s.indexOf("://") === -1 && s.indexOf("#") !== 0 ? t + s : s.indexOf("://") === -1 ? "/" + s : s : "";
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
    const s = t.previousElementSibling || t.nextElementSibling, n = t.parentNode;
    this.util.removeItem(t), this.plugins.audio.init.call(this), this.controllersOff(), n !== this.context.element.wysiwyg && this.util.removeItemAllParents(n, function(r) {
      return r.childNodes.length === 0;
    }, null), this.focusEdge(s), this.plugins.fileManager.deleteInfo.call(this, "audio", i, this.functions.onAudioUpload), this.history.push(!1);
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
    for (let c = 0, d = e.length; c < d; c++)
      /audio/i.test(e[c].type) && (i.push(e[c]), t += e[c].size);
    const s = this.options.audioUploadSizeLimit;
    if (s > 0) {
      let c = 0;
      const d = this.context.audio._infoList;
      for (let l = 0, v = d.length; l < v; l++)
        c += d[l].size * 1;
      if (t + c > s) {
        this.closeLoading();
        const l = "[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: " + s / 1e3 + "KB";
        (typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(l, { limitSize: s, currentSize: c, uploadSize: t }, this)) && this.functions.noticeOpen(l);
        return;
      }
    }
    const n = this.context.audio;
    n._uploadFileLength = i.length;
    const r = {
      isUpdate: this.context.dialog.updateModal,
      element: n._element
    };
    if (typeof this.functions.onAudioUploadBefore == "function") {
      const c = this.functions.onAudioUploadBefore(i, r, this, (function(d) {
        d && this._w.Array.isArray(d.result) ? this.plugins.audio.register.call(this, r, d) : this.plugins.audio.upload.call(this, r, d);
      }).bind(this));
      if (typeof c > "u") return;
      if (!c) {
        this.closeLoading();
        return;
      }
      typeof c == "object" && c.length > 0 && (i = c);
    }
    this.plugins.audio.upload.call(this, r, i);
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
    const i = this.options.audioUploadUrl, s = this.context.dialog.updateModal ? 1 : t.length, n = new FormData();
    for (let r = 0; r < s; r++)
      n.append("file-" + r, t[r]);
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
    for (let s = 0, n = i.length, r, c; s < n; s++)
      e.isUpdate ? c = e.element : c = this.plugins.audio._createAudioTag.call(this), r = { name: i[s].name, size: i[s].size }, this.plugins.audio.create_audio.call(this, c, i[s].url, r, e.isUpdate);
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
  create_audio: function(e, t, i, s) {
    const n = this.context.audio;
    if (s)
      if (n._element && (e = n._element), e && e.src !== t)
        e.src = t, this.selectComponent(e, "audio");
      else {
        this.selectComponent(e, "audio");
        return;
      }
    else {
      e.src = t;
      const r = this.plugins.component.set_cover.call(this, e), c = this.plugins.component.set_container.call(this, r, "");
      if (!this.insertComponent(c, !1, !0, !this.options.mediaAutoSelect)) {
        this.focus();
        return;
      }
      if (!this.options.mediaAutoSelect) {
        const d = this.appendFormatTag(c, null);
        d && this.setRange(d, 0, d, 0);
      }
    }
    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, i, !1), s && this.history.push(!1);
  },
  updateCover: function(e) {
    const t = this.context.audio;
    this.plugins.audio._setTagAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const s = e;
    t._element = e = e.cloneNode(!1);
    const n = this.plugins.component.set_cover.call(this, e), r = this.plugins.component.set_container.call(this, n, "se-audio-container");
    try {
      if (this.util.getParentElement(s, this.util.isNotCheckingNode))
        s.parentNode.replaceChild(r, s);
      else if (this.util.isListCell(i)) {
        const c = this.util.getParentElement(s, function(d) {
          return d.parentNode === i;
        });
        i.insertBefore(r, c), this.util.removeItem(s), this.util.removeEmptyNode(c, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const c = this.util.getParentElement(s, function(d) {
          return d.parentNode === i;
        });
        i = this.util.splitElement(i, c), i.parentNode.insertBefore(r, i), this.util.removeItem(s), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(r, i);
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
}, oi = "https://katex.org/docs/supported.html", os = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([ct]);
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
    let s = this.setController_MathButton(e);
    t.math.mathController = s, t.math._mathExp = null, i.querySelector("form").addEventListener("submit", this.submit.bind(e), !1), s.addEventListener("click", this.onClick_mathController.bind(e)), t.math.previewElement.style.fontSize = t.math.defaultFontSize, t.dialog.modal.appendChild(i), t.element.relative.appendChild(s), i = null, s = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), s = e.options.mathFontSize;
    let n = s[0].value;
    i.className = "se-dialog-content", i.style.display = "none";
    let r = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + oi + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let c = 0, d = s.length, l; c < d; c++)
      l = s[c], l.default && (n = l.value), r += '<option value="' + l.value + '"' + (l.default ? " selected" : "") + ">" + l.text + "</option>";
    return r += '</select></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.previewLabel + '</label><p class="se-math-preview"></p></div></div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>", e.context.math.defaultFontSize = n, i.innerHTML = r, i;
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
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + oi + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", i);
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
      const i = this.context.math, s = i.focusElement.value, n = i.previewElement.querySelector(".katex");
      if (!n) return !1;
      if (n.className = "__se__katex " + n.className, n.setAttribute("contenteditable", !1), n.setAttribute("data-exp", this.util.HTMLEncoder(s)), n.setAttribute("data-font-size", i.fontSizeElement.value), n.style.fontSize = i.fontSizeElement.value, this.context.dialog.updateModal) {
        const r = this.util.getParentElement(i._mathExp, ".katex");
        r.parentNode.replaceChild(n, r), this.setRange(n, 0, n, 1);
      } else {
        const r = this.getSelectedElements();
        if (r.length > 1) {
          const d = this.util.createElement(r[0].nodeName);
          if (d.appendChild(n), !this.insertNode(d, null, !0)) return !1;
        } else if (!this.insertNode(n, null, !0)) return !1;
        const c = this.util.createTextNode(this.util.zeroWidthSpace);
        n.parentNode.insertBefore(c, n.nextSibling), this.setRange(n, 0, n, 1);
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
        const i = this.util.HTMLDecoder(t._mathExp.getAttribute("data-exp")), s = t._mathExp.getAttribute("data-font-size") || "1em";
        this.context.dialog.updateModal = !0, t.focusElement.value = i, t.fontSizeElement.value = s, t.previewElement.innerHTML = this.plugins.math._renderer.call(this, i), t.previewElement.style.fontSize = s;
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
var dl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : we, function(t, i) {
    const s = {
      name: "fileBrowser",
      _xmlHttp: null,
      _loading: null,
      /**
       * @description Constructor
       * @param {Object} core Core object 
       */
      add: function(n) {
        const r = n.context;
        r.fileBrowser = {
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
        let c = n.util.createElement("DIV");
        c.className = "se-file-browser sun-editor-common";
        let d = n.util.createElement("DIV");
        d.className = "se-file-browser-back";
        let l = n.util.createElement("DIV");
        l.className = "se-file-browser-inner", l.innerHTML = this.set_browser(n), c.appendChild(d), c.appendChild(l), this._loading = c.querySelector(".se-loading-box"), r.fileBrowser.area = c, r.fileBrowser.header = l.querySelector(".se-file-browser-header"), r.fileBrowser.titleArea = l.querySelector(".se-file-browser-title"), r.fileBrowser.tagArea = l.querySelector(".se-file-browser-tags"), r.fileBrowser.body = l.querySelector(".se-file-browser-body"), r.fileBrowser.list = l.querySelector(".se-file-browser-list"), r.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(n)), r.fileBrowser.list.addEventListener("click", this.onClickFile.bind(n)), l.addEventListener("mousedown", this._onMouseDown_browser.bind(n)), l.addEventListener("click", this._onClick_browser.bind(n)), r.element.relative.appendChild(c), c = null, d = null, l = null;
      },
      set_browser: function(n) {
        const r = n.lang;
        return '<div class="se-file-browser-content"><div class="se-file-browser-header"><button type="button" data-command="close" class="se-btn se-file-browser-close" class="close" title="' + r.dialogBox.close + '" aria-label="' + r.dialogBox.close + '">' + n.icons.cancel + '</button><span class="se-file-browser-title"></span><div class="se-file-browser-tags"></div></div><div class="se-file-browser-body"><div class="se-loading-box sun-editor-common"><div class="se-loading-effect"></div></div><div class="se-file-browser-list"></div></div></div>';
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
      open: function(n, r) {
        this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = (function(v) {
          /27/.test(v.keyCode) && this.plugins.fileBrowser.close.call(this);
        }).bind(this), this._d.addEventListener("keydown", this.plugins.fileBrowser._bindClose);
        const c = this.context.fileBrowser;
        c.contextPlugin = n, c.selectorHandler = r;
        const d = this.context[n], l = d.listClass;
        this.util.hasClass(c.list, l) || (c.list.className = "se-file-browser-list " + l), this.options.popupDisplay === "full" ? c.area.style.position = "fixed" : c.area.style.position = "absolute", c.titleArea.textContent = d.title, c.area.style.display = "block", this.plugins.fileBrowser._drawFileList.call(this, this.context[n].url, this.context[n].header);
      },
      _bindClose: null,
      /**
       * @description Close a fileBrowser plugin
       * The plugin's "init" method is called.
       */
      close: function() {
        const n = this.plugins.fileBrowser;
        n._xmlHttp && n._xmlHttp.abort(), n._bindClose && (this._d.removeEventListener("keydown", n._bindClose), n._bindClose = null);
        const r = this.context.fileBrowser;
        r.area.style.display = "none", r.selectorHandler = null, r.selectedTags = [], r.items = [], r.list.innerHTML = r.tagArea.innerHTML = r.titleArea.textContent = "", typeof this.plugins[r.contextPlugin].init == "function" && this.plugins[r.contextPlugin].init.call(this), r.contextPlugin = "";
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
      _drawFileList: function(n, r) {
        const c = this.plugins.fileBrowser, d = c._xmlHttp = this.util.getXMLHttpRequest();
        if (d.onreadystatechange = c._callBackGet.bind(this, d), d.open("get", n, !0), r !== null && typeof r == "object" && this._w.Object.keys(r).length > 0)
          for (let l in r)
            d.setRequestHeader(l, r[l]);
        d.send(null), this.plugins.fileBrowser.showBrowserLoading();
      },
      _callBackGet: function(n) {
        if (n.readyState === 4) {
          if (this.plugins.fileBrowser._xmlHttp = null, n.status === 200)
            try {
              const r = JSON.parse(n.responseText);
              r.result.length > 0 ? this.plugins.fileBrowser._drawListItem.call(this, r.result, !0) : r.nullMessage && (this.context.fileBrowser.list.innerHTML = r.nullMessage);
            } catch (r) {
              throw Error('[SUNEDITOR.fileBrowser.drawList.fail] cause : "' + r.message + '"');
            } finally {
              this.plugins.fileBrowser.closeBrowserLoading(), this.context.fileBrowser.body.style.maxHeight = this._w.innerHeight - this.context.fileBrowser.header.offsetHeight - 50 + "px";
            }
          else if (this.plugins.fileBrowser.closeBrowserLoading(), n.status !== 0) {
            const r = n.responseText ? JSON.parse(n.responseText) : n, c = "[SUNEDITOR.fileBrowser.get.serverException] status: " + n.status + ", response: " + (r.errorMessage || n.responseText);
            throw Error(c);
          }
        }
      },
      _drawListItem: function(n, r) {
        const c = this.context.fileBrowser, d = this.context[c.contextPlugin], l = [], v = n.length, u = d.columnSize || c.columnSize, b = u <= 1 ? 1 : Math.round(v / u) || 1, C = d.itemTemplateHandler;
        let x = "", L = '<div class="se-file-item-column">', A = 1;
        for (let o = 0, a, f; o < v; o++)
          if (a = n[o], f = a.tag ? typeof a.tag == "string" ? a.tag.split(",") : a.tag : [], f = a.tag = f.map(function(p) {
            return p.trim();
          }), L += C(a), (o + 1) % b === 0 && A < u && o + 1 < v && (A++, L += '</div><div class="se-file-item-column">'), r && f.length > 0)
            for (let p = 0, h = f.length, g; p < h; p++)
              g = f[p], g && l.indexOf(g) === -1 && (l.push(g), x += '<a title="' + g + '" aria-label="' + g + '">' + g + "</a>");
        L += "</div>", c.list.innerHTML = L, r && (c.items = n, c.tagArea.innerHTML = x, c.tagElements = c.tagArea.querySelectorAll("A"));
      },
      onClickTag: function(n) {
        const r = n.target;
        if (!this.util.isAnchor(r)) return;
        const c = r.textContent, d = this.plugins.fileBrowser, l = this.context.fileBrowser, v = l.tagArea.querySelector('a[title="' + c + '"]'), u = l.selectedTags, b = u.indexOf(c);
        b > -1 ? (u.splice(b, 1), this.util.removeClass(v, "on")) : (u.push(c), this.util.addClass(v, "on")), d._drawListItem.call(
          this,
          u.length === 0 ? l.items : l.items.filter(function(C) {
            return C.tag.some(function(x) {
              return u.indexOf(x) > -1;
            });
          }),
          !1
        );
      },
      onClickFile: function(n) {
        n.preventDefault(), n.stopPropagation();
        const r = this.context.fileBrowser, c = r.list;
        let d = n.target, l = null;
        if (d === c) return;
        for (; c !== d.parentNode && (l = d.getAttribute("data-command"), !l); )
          d = d.parentNode;
        if (!l) return;
        (r.selectorHandler || this.context[r.contextPlugin].selectorHandler)(d, d.parentNode.querySelector(".__se__img_name").textContent), this.plugins.fileBrowser.close.call(this);
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
      value: s
    })), s;
  });
})(dl);
var as = dl.exports;
const rs = /* @__PURE__ */ Ce(as), us = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([rs]);
    const t = e.context;
    t.imageGallery = {
      title: e.lang.toolbar.imageGallery,
      // @Required @Override fileBrowser - File browser window title.
      url: e.options.imageGalleryUrl,
      // @Required @Override fileBrowser - File server url.
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
}, cs = { blockquote: Hn, align: On, font: Fn, fontSize: Vn, fontColor: Pn, hiliteColor: Un, horizontalRule: Wn, list: Zn, table: $n, formatBlock: qn, lineHeight: jn, template: Gn, paragraphStyle: Kn, textStyle: Yn, link: Qn, image: ls, video: ns, audio: ss, math: os, imageGallery: us }, ds = {
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
}, ai = {
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
}, oe = {
  _d: null,
  _w: null,
  isIE: null,
  isIE_Edge: null,
  isOSX_IOS: null,
  isChromium: null,
  isMobile: null,
  isResizeObserverSupported: null,
  _propertiesInit: function() {
    this._d || (this._d = document, this._w = window, this.isIE = navigator.userAgent.indexOf("Trident") > -1, this.isIE_Edge = navigator.userAgent.indexOf("Trident") > -1 || navigator.appVersion.indexOf("Edge") > -1, this.isOSX_IOS = /(Mac|iPhone|iPod|iPad)/.test(navigator.platform), this.isChromium = !!window.chrome, this.isResizeObserverSupported = typeof ResizeObserver == "function", this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
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
      return oe.camelToKebabCase(t);
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
      return oe.camelToKebabCase(t);
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
    const s = [], n = t === "js" ? "script" : "link", r = t === "js" ? "src" : "href";
    let c = "(?:";
    for (let v = 0, u = e.length; v < u; v++)
      c += e[v] + (v < u - 1 ? "|" : ")");
    const d = new this._w.RegExp("(^|.*[\\/])" + c + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), l = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
    for (let v = this._d.getElementsByTagName(n), u = 0; u < v.length; u++)
      l.test(v[u][r]) && s.push(v[u]);
    for (let v = 0; v < s.length; v++) {
      let u = s[v][r].match(d);
      if (u) {
        i = u[0];
        break;
      }
    }
    if (i === "" && (i = s.length > 0 ? s[0][r] : ""), i.indexOf(":/") === -1 && i.slice(0, 2) !== "//" && (i = i.indexOf("/") === 0 ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + i : location.href.match(/^[^\?]*\/(?:)/)[0] + i), !i) throw "[SUNEDITOR.util.getIncludePath.fail] The SUNEDITOR installation path could not be automatically detected. (name: +" + name + ", extension: " + t + ")";
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
    for (let s = 0, n = i.length, r; s < n; s++) {
      try {
        r = i[s].cssRules;
      } catch {
        continue;
      }
      if (r)
        for (let c = 0, d = r.length; c < d; c++)
          t += r[c].cssText;
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
    let s = "";
    for (let n = 0, r = i.length; n < r; n++)
      t && t.indexOf(i[n].name) > -1 || (s += i[n].name + '="' + i[n].value + '" ');
    return s;
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
    let i, s;
    return this.isIE_Edge ? (s = this._w.unescape(t(e)).length, i = 0, t(e).match(/(%0A|%0D)/gi) !== null && (i = t(e).match(/(%0A|%0D)/gi).length), s + i) : (s = new this._w.TextEncoder("utf-8").encode(e).length, i = 0, t(e).match(/(%0A|%0D)/gi) !== null && (i = t(e).match(/(%0A|%0D)/gi).length), s + i);
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
      for (let r = 0, c = n.length; r < c; r++)
        e.style[n[r]] = n[n[r]];
    }
    const s = t.attributes;
    for (let n = 0, r = s.length, c; n < r; n++)
      c = s[n].name.toLowerCase(), i && i.indexOf(c) > -1 || !s[n].value ? e.removeAttribute(c) : c !== "style" && e.setAttribute(s[n].name, s[n].value);
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
    const s = [];
    for (let n = 0, r = e.length, c; n < r; n++)
      if (c = e[n], t(c))
        if (i) s.push(c);
        else return c;
    return i ? s : null;
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
    for (let s = 0, n = e.length; s < n; s++)
      if (e[s] === t) {
        i = s;
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
    const s = [];
    let n = !0;
    return this.getParentElement(e, (function(r) {
      if (r === t && (n = !1), n && !this.isWysiwygDiv(r)) {
        if (i && r.nodeType === 3) {
          let c = null, d = null;
          i.s = i.e = 0;
          let l = r.previousSibling;
          for (; l && l.nodeType === 3; )
            d = l.textContent.replace(this.zeroWidthRegExp, ""), i.s += d.length, r.textContent = d + r.textContent, c = l, l = l.previousSibling, this.removeItem(c);
          let v = r.nextSibling;
          for (; v && v.nodeType === 3; )
            d = v.textContent.replace(this.zeroWidthRegExp, ""), i.e += d.length, r.textContent += d, c = v, v = v.nextSibling, this.removeItem(c);
        }
        s.push(r);
      }
      return !1;
    }).bind(this)), s.map(this.getPositionIndex).reverse();
  },
  /**
   * @description Returns the node in the location of the path array obtained from "util.getNodePath".
   * @param {Array} offsets Position array, array obtained from "util.getNodePath"
   * @param {Node} parentNode Base parent element
   * @returns {Node}
   */
  getNodeFromPath: function(e, t) {
    let i = t, s;
    for (let n = 0, r = e.length; n < r && (s = i.childNodes, s.length !== 0); n++)
      s.length <= e[n] ? i = s[s.length - 1] : i = s[e[n]];
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
    const i = e.style, s = t.style;
    let n = 0;
    for (let v = 0, u = i.length; v < u; v++)
      i[i[v]] === s[i[v]] && n++;
    const r = e.classList, c = t.classList, d = this._w.RegExp;
    let l = 0;
    for (let v = 0, u = r.length; v < u; v++)
      d("(s|^)" + r[v] + "(s|$)").test(c.value) && l++;
    return n === s.length && n === i.length && l === c.length && l === r.length;
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
    }, function s(n) {
      if (e !== n && t(n) && i.push(n), n.children)
        for (let r = 0, c = n.children.length; r < c; r++)
          s(n.children[r]);
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
    }, function s(n) {
      e !== n && t(n) && i.push(n);
      for (let r = 0, c = n.childNodes.length; r < c; r++)
        s(n.childNodes[r]);
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
    let i = e, s = t;
    for (; i && s && i.parentNode !== s.parentNode; )
      i = i.parentNode, s = s.parentNode;
    if (!i || !s) return { ancestor: null, a: e, b: t, result: 0 };
    const n = i.parentNode.childNodes, r = this.getArrayIndex(n, i), c = this.getArrayIndex(n, s);
    return {
      ancestor: i.parentNode,
      a: i,
      b: s,
      result: r > c ? 1 : r < c ? -1 : 0
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
      let s;
      /^\./.test(t) ? (s = "className", t = t.split(".")[1]) : /^#/.test(t) ? (s = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (s = "name", t = "^" + t.split(":")[1] + "$") : (s = "nodeName", t = "^" + t + "$");
      const n = new this._w.RegExp(t, "i");
      i = function(r) {
        return n.test(r[s]);
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
      for (let s = e.parentNode; s; s = s.parentNode) {
        if (s === t) return null;
        if (s.previousSibling) {
          i = s.previousSibling;
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
      for (let s = e.parentNode; s; s = s.parentNode) {
        if (s === t) return null;
        if (s.nextSibling) {
          i = s.nextSibling;
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
    let s;
    if (typeof t == "function")
      s = t;
    else {
      let r;
      /^\./.test(t) ? (r = "className", t = t.split(".")[1]) : /^#/.test(t) ? (r = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (r = "name", t = "^" + t.split(":")[1] + "$") : (r = "nodeName", t = "^" + (t === "text" ? "#" + t : t) + "$");
      const c = new this._w.RegExp(t, "i");
      s = function(d) {
        return c.test(d[r]);
      };
    }
    const n = this.getListChildNodes(e, function(r) {
      return s(r);
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
    let i = 0, s = 0, n = e.nodeType === 3 ? e.parentElement : e;
    const r = this.getParentElement(e, this.isWysiwygDiv.bind(this));
    for (; n && !this.hasClass(n, "se-container") && n !== r; )
      i += n.offsetLeft, s += n.offsetTop, n = n.offsetParent;
    const c = t && /iframe/i.test(t.nodeName);
    return {
      left: i + (c ? t.parentElement.offsetLeft : 0),
      top: s - (r ? r.scrollTop : 0) + (c ? t.parentElement.offsetTop : 0)
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
  getOverlapRangeAtIndex: function(e, t, i, s) {
    if (e <= s ? t < i : t > i) return 0;
    const n = (e > i ? e : i) - (t < s ? t : s);
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
    const s = new this._w.RegExp("(\\s|^)" + t + "(\\s|$)");
    return s.test(e.className) ? e.className = e.className.replace(s, " ").trim() : (e.className += " " + t, i = !0), e.className.trim() || e.removeAttribute("class"), i;
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
    for (let s = 0, n = t.length; s < n; s++) {
      let r = t[s];
      (i || !this.isImportantDisabled(r)) && (r.disabled = e), i && (e ? r.setAttribute("data-important-disabled", "") : r.removeAttribute("data-important-disabled"));
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
    let s = null;
    return t || (t = (function(n) {
      if (n === i || this.isComponent(n)) return !1;
      const r = n.textContent.trim();
      return r.length === 0 || /^(\n|\u200B)+$/.test(r);
    }).bind(this)), function n(r) {
      if (!oe.isWysiwygDiv(r)) {
        const c = r.parentNode;
        c && t(r) && (s = {
          sc: r.previousElementSibling,
          ec: r.nextElementSibling
        }, oe.removeItem(r), n(c));
      }
    }(e), s;
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
    let s, n;
    if (i) {
      s = i.cloneNode(!1), n = i.childNodes;
      const c = this.getPositionIndex(e);
      for (; n[c]; )
        s.appendChild(n[c]);
    } else
      s = e;
    let r;
    if (t)
      r = this.getListChildren(s, (function(c) {
        return this.isListCell(c) && !c.previousElementSibling;
      }).bind(this));
    else {
      const c = this.getElementDepth(e) + 2;
      r = this.getListChildren(e, (function(d) {
        return this.isListCell(d) && !d.previousElementSibling && this.getElementDepth(d) === c;
      }).bind(this));
    }
    for (let c = 0, d = r.length; c < d; c++)
      this._deleteNestedList(r[c]);
    return i && (i.parentNode.insertBefore(s, i.nextSibling), n && n.length === 0 && this.removeItem(i)), s === e ? s.parentNode : s;
  },
  /**
   * @description Sub function of util.detachNestedList method.
   * @private
   */
  _deleteNestedList: function(e) {
    const t = e.parentNode;
    let i = t, s = i.parentNode, n, r, c, d, l;
    for (; this.isListCell(s); ) {
      for (d = this.getPositionIndex(e), n = s.nextElementSibling, r = s.parentNode, c = i; c; ) {
        if (i = i.nextSibling, this.isList(c)) {
          for (l = c.childNodes; l[d]; )
            r.insertBefore(l[d], n);
          l.length === 0 && this.removeItem(c);
        } else
          r.appendChild(c);
        c = i;
      }
      i = r, s = r.parentNode;
    }
    return t.children.length === 0 && this.removeItem(t), r;
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
      const C = e.childNodes;
      let x = this.getPositionIndex(t);
      const L = e.cloneNode(!1), A = e.cloneNode(!1);
      for (let o = 0, a = C.length; o < a; o++) {
        if (o < x) L.appendChild(C[o]);
        else if (o > x) A.appendChild(C[o]);
        else continue;
        o--, a--, x--;
      }
      return L.childNodes.length > 0 && e.parentNode.insertBefore(L, e), A.childNodes.length > 0 && e.parentNode.insertBefore(A, e.nextElementSibling), e;
    }
    const s = e.parentNode;
    let n = 0, r = 1, c = !0, d, l, v;
    if ((!i || i < 0) && (i = 0), e.nodeType === 3) {
      if (n = this.getPositionIndex(e), t >= 0 && e.length !== t) {
        e.splitText(t);
        const C = this.getNodeFromPath([n + 1], s);
        this.onlyZeroWidthSpace(C) && (C.data = this.zeroWidthSpace);
      }
    } else if (e.nodeType === 1) {
      if (t === 0) {
        for (; e.firstChild; )
          e = e.firstChild;
        if (e.nodeType === 3) {
          const C = this.createTextNode(this.zeroWidthSpace);
          e.parentNode.insertBefore(C, e), e = C;
        }
      }
      e.previousSibling ? e = e.previousSibling : this.getElementDepth(e) === i && (c = !1);
    }
    e.nodeType === 1 && (r = 0);
    let u = e;
    for (; this.getElementDepth(u) > i; )
      for (n = this.getPositionIndex(u) + r, u = u.parentNode, v = d, d = u.cloneNode(!1), l = u.childNodes, v && (this.isListCell(d) && this.isList(v) && v.firstElementChild ? (d.innerHTML = v.firstElementChild.innerHTML, oe.removeItem(v.firstElementChild), v.children.length > 0 && d.appendChild(v)) : d.appendChild(v)); l[n]; )
        d.appendChild(l[n]);
    u.childNodes.length <= 1 && (!u.firstChild || u.firstChild.textContent.length === 0) && (u.innerHTML = "<br>");
    const b = u.parentNode;
    return c && (u = u.nextSibling), d ? (this.mergeSameTags(d, null, !1), this.mergeNestedTags(d, (function(C) {
      return this.isList(C);
    }).bind(this)), d.childNodes.length > 0 ? b.insertBefore(d, u) : d = u, this.isListCell(d) && d.children && this.isList(d.children[0]) && d.insertBefore(this.createElement("BR"), d.children[0]), s.childNodes.length === 0 && this.removeItem(s), d) : u;
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
    const s = this, n = t ? t.length : 0;
    let r = null;
    return n && (r = this._w.Array.apply(null, new this._w.Array(n)).map(this._w.Number.prototype.valueOf, 0)), function c(d, l, v) {
      const u = d.childNodes;
      for (let b = 0, C = u.length, x, L; b < C && (x = u[b], L = u[b + 1], !!x); b++) {
        if (i && s._isIgnoreNodeChange(x) || !i && (s.isTable(x) || s.isListCell(x) || s.isFormatElement(x) && !s.isFreeFormatElement(x))) {
          (s.isTable(x) || s.isListCell(x)) && c(x, l + 1, b);
          continue;
        }
        if (C === 1 && d.nodeName === x.nodeName && d.parentNode) {
          if (n) {
            let A, o, a, f, p;
            for (let h = 0; h < n; h++)
              if (A = t[h], A && A[l] === b) {
                for (o = x, a = d, f = l, p = !0; f >= 0; ) {
                  if (s.getArrayIndex(a.childNodes, o) !== A[f]) {
                    p = !1;
                    break;
                  }
                  o = x.parentNode, a = o.parentNode, f--;
                }
                p && (A.splice(l, 1), A[l] = b);
              }
          }
          s.copyTagAttributes(x, d), d.parentNode.insertBefore(x, d), s.removeItem(d);
        }
        if (!L) {
          x.nodeType === 1 && c(x, l + 1, b);
          break;
        }
        if (x.nodeName === L.nodeName && s.isSameAttributes(x, L) && x.href === L.href) {
          const A = x.childNodes;
          let o = 0;
          for (let h = 0, g = A.length; h < g; h++)
            A[h].textContent.length > 0 && o++;
          const a = x.lastChild, f = L.firstChild;
          let p = 0;
          if (a && f) {
            const h = a.nodeType === 3 && f.nodeType === 3;
            p = a.textContent.length;
            let g = a.previousSibling;
            for (; g && g.nodeType === 3; )
              p += g.textContent.length, g = g.previousSibling;
            if (o > 0 && a.nodeType === 3 && f.nodeType === 3 && (a.textContent.length > 0 || f.textContent.length > 0) && o--, n) {
              let m = null;
              for (let y = 0; y < n; y++)
                if (m = t[y], m && m[l] > b) {
                  if (l > 0 && m[l - 1] !== v) continue;
                  m[l] -= 1, m[l + 1] >= 0 && m[l] === b && (m[l + 1] += o, h && a && a.nodeType === 3 && f && f.nodeType === 3 && (r[y] += p));
                }
            }
          }
          if (x.nodeType === 3) {
            if (p = x.textContent.length, x.textContent += L.textContent, n) {
              let h = null;
              for (let g = 0; g < n; g++)
                if (h = t[g], h && h[l] > b) {
                  if (l > 0 && h[l - 1] !== v) continue;
                  h[l] -= 1, h[l + 1] >= 0 && h[l] === b && (h[l + 1] += o, r[g] += p);
                }
            }
          } else
            x.innerHTML += L.innerHTML;
          s.removeItem(L), b--;
        } else x.nodeType === 1 && c(x, l + 1, b);
      }
    }(e, 0, 0), r;
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
    }), function i(s) {
      let n = s.children;
      if (n.length === 1 && n[0].nodeName === s.nodeName && t(s)) {
        const r = n[0];
        for (n = r.children; n[0]; )
          s.appendChild(n[0]);
        s.removeChild(r);
      }
      for (let r = 0, c = s.children.length; r < c; r++)
        i(s.children[r]);
    }(e);
  },
  /**
   * @description Delete a empty child node of argument element.
   * @param {Element} element Element node
   * @param {Node|null} notRemoveNode Do not remove node
   * @param {boolean} forceDelete When all child nodes are deleted, the parent node is also deleted.
   */
  removeEmptyNode: function(e, t, i) {
    const s = this;
    t && (t = s.getParentElement(t, function(n) {
      return e === n.parentElement;
    })), function n(r) {
      if (s._notTextNode(r) || r === t || s.isNonEditable(r)) return 0;
      if (r !== e && s.onlyZeroWidthSpace(r.textContent) && (!r.firstChild || !s.isBreak(r.firstChild)) && !r.querySelector(s._allowedEmptyNodeList)) {
        if (r.parentNode)
          return r.parentNode.removeChild(r), -1;
      } else {
        const c = r.children;
        for (let d = 0, l = c.length, v = 0; d < l; d++)
          !c[d + v] || s.isComponent(c[d + v]) || (v += n(c[d + v]));
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
    const i = t ? 1 : -1, s = i * -1;
    e.sort((function(n, r) {
      return !this.isListCell(n) || !this.isListCell(r) ? 0 : (n = this.getElementDepth(n), r = this.getElementDepth(r), n > r ? i : n < r ? s : 0);
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
   * @private
   */
  _consistencyCheckOfHTML: function(e, t, i, s) {
    const n = [], r = [], c = [], d = [], l = this.getListChildNodes(e, (function(u) {
      if (u.nodeType !== 1)
        return this.isList(u.parentElement) && n.push(u), !1;
      if (i.test(u.nodeName) || !t.test(u.nodeName) && u.childNodes.length === 0 && this.isNotCheckingNode(u))
        return n.push(u), !1;
      const b = !this.getParentElement(u, this.isNotCheckingNode);
      if (!this.isTable(u) && !this.isListCell(u) && !this.isAnchor(u) && (this.isFormatElement(u) || this.isRangeFormatElement(u) || this.isTextStyleElement(u)) && u.childNodes.length === 0 && b)
        return r.push(u), !1;
      if (this.isList(u.parentNode) && !this.isList(u) && !this.isListCell(u))
        return c.push(u), !1;
      if (this.isCell(u)) {
        const x = u.firstElementChild;
        if (!this.isFormatElement(x) && !this.isRangeFormatElement(x) && !this.isComponent(x))
          return d.push(u), !1;
      }
      if (b && u.className) {
        const x = new this._w.Array(u.classList).map(s).join(" ").trim();
        x ? u.className = x : u.removeAttribute("class");
      }
      return u.parentNode !== e && b && (this.isListCell(u) && !this.isList(u.parentNode) || (this.isFormatElement(u) || this.isComponent(u)) && !this.isRangeFormatElement(u.parentNode) && !this.getParentElement(u, this.isComponent));
    }).bind(this));
    for (let u = 0, b = n.length; u < b; u++)
      this.removeItem(n[u]);
    const v = [];
    for (let u = 0, b = l.length, C, x; u < b; u++)
      if (C = l[u], x = C.parentNode, !(!x || !x.parentNode))
        if (this.getParentElement(C, this.isListCell)) {
          const L = C.childNodes;
          for (let A = L.length - 1; b >= 0; A--)
            x.insertBefore(C, L[A]);
          v.push(C);
        } else
          x.parentNode.insertBefore(C, x), v.push(x);
    for (let u = 0, b = v.length, C; u < b; u++)
      C = v[u], this.onlyZeroWidthSpace(C.textContent.trim()) && this.removeItem(C);
    for (let u = 0, b = r.length; u < b; u++)
      this.removeItem(r[u]);
    for (let u = 0, b = c.length, C, x, L, A; u < b; u++)
      if (C = c[u], A = C.parentNode, !!A)
        if (x = this.createElement("LI"), this.isFormatElement(C)) {
          for (L = C.childNodes; L[0]; )
            x.appendChild(L[0]);
          A.insertBefore(x, C), this.removeItem(C);
        } else
          C = C.nextSibling, x.appendChild(c[u]), A.insertBefore(x, C);
    for (let u = 0, b = d.length, C, x; u < b; u++)
      C = d[u], x = this.createElement("DIV"), x.innerHTML = C.textContent.trim().length === 0 && C.children.length === 0 ? "<br>" : C.innerHTML, C.innerHTML = x.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let i = "";
    e.height && (i += "height:" + e.height + ";"), e.minHeight && (i += "min-height:" + e.minHeight + ";"), e.maxHeight && (i += "max-height:" + e.maxHeight + ";"), e.position && (i += "position:" + e.position + ";"), e.width && (i += "width:" + e.width + ";"), e.minWidth && (i += "min-width:" + e.minWidth + ";"), e.maxWidth && (i += "max-width:" + e.maxWidth + ";");
    let s = "", n = "", r = "";
    t = i + t;
    const c = t.split(";");
    for (let d = 0, l = c.length, v; d < l; d++)
      if (v = c[d].trim(), !!v) {
        if (/^(min-|max-)?width\s*:/.test(v) || /^(z-index|position)\s*:/.test(v)) {
          s += v + ";";
          continue;
        }
        if (/^(min-|max-)?height\s*:/.test(v)) {
          /^height/.test(v) && v.split(":")[1].trim() === "auto" && (e.height = "auto"), n += v + ";";
          continue;
        }
        r += v + ";";
      }
    return {
      top: s,
      frame: n,
      editor: r
    };
  },
  _setIframeDocument: function(e, t) {
    e.setAttribute("scrolling", "auto"), e.contentDocument.head.innerHTML = '<meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">' + this._setIframeCssTags(t), e.contentDocument.body.className = t._editableClass, e.contentDocument.body.setAttribute("contenteditable", !0), e.contentDocument.body.setAttribute("autocorrect", "off");
  },
  _setIframeCssTags: function(e) {
    const t = e.iframeCSSFileName, i = this._w.RegExp;
    let s = "";
    for (let n = 0, r = t.length, c; n < r; n++) {
      if (c = [], /(^https?:\/\/)|(^data:text\/css,)/.test(t[n]))
        c.push(t[n]);
      else {
        const d = new i("(^|.*[\\/])" + t[n] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let l = document.getElementsByTagName("link"), v = 0, u = l.length, b; v < u; v++)
          b = l[v].href.match(d), b && c.push(b[0]);
      }
      if (!c || c.length === 0) throw '[SUNEDITOR.constructor.iframe.fail] The suneditor CSS files installation path could not be automatically detected. Please set the option property "iframeCSSFileName" before creating editor instances.';
      for (let d = 0, l = c.length; d < l; d++)
        s += '<link href="' + c[d] + '" rel="stylesheet">';
    }
    return s + (e.height === "auto" ? `<style>
/** Iframe height auto */
body{height: min-content; overflow: hidden;}
</style>` : "");
  }
}, zt = {
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
    const s = i.createElement("DIV");
    s.className = "sun-editor" + (t.rtl ? " se-rtl" : ""), e.id && (s.id = "suneditor_" + e.id);
    const n = i.createElement("DIV");
    n.className = "se-container";
    const r = this._createToolBar(i, t.buttonList, t.plugins, t), c = r.element.cloneNode(!1);
    c.className += " se-toolbar-shadow", r.element.style.visibility = "hidden", r.pluginCallButtons.math && this._checkKatexMath(t.katex);
    const d = i.createElement("DIV");
    d.className = "se-arrow";
    const l = i.createElement("DIV");
    l.className = "se-toolbar-sticky-dummy";
    const v = i.createElement("DIV");
    v.className = "se-wrapper";
    const u = this._initElements(t, s, r.element, d), b = u.bottomBar, C = u.wysiwygFrame, x = u.placeholder;
    let L = u.codeView;
    const A = b.resizingBar, o = b.navigation, a = b.charWrapper, f = b.charCounter, p = i.createElement("DIV");
    p.className = "se-loading-box sun-editor-common", p.innerHTML = '<div class="se-loading-effect"></div>';
    const h = i.createElement("DIV");
    h.className = "se-line-breaker", h.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
    const g = i.createElement("DIV");
    g.className += "se-line-breaker-component";
    const m = g.cloneNode(!0);
    g.innerHTML = m.innerHTML = t.icons.line_break;
    const y = i.createElement("DIV");
    y.className = "se-resizing-back";
    const w = i.createElement("INPUT");
    w.tabIndex = -1, w.style.cssText = "position: fixed !important; top: -10000px !important; display: block !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;";
    const _ = t.toolbarContainer;
    _ && (_.appendChild(r.element), _.appendChild(c));
    const k = t.resizingBarContainer;
    return A && k && k.appendChild(A), v.appendChild(L), x && v.appendChild(x), _ || (n.appendChild(r.element), n.appendChild(c)), n.appendChild(l), n.appendChild(v), n.appendChild(y), n.appendChild(p), n.appendChild(h), n.appendChild(g), n.appendChild(m), n.appendChild(w), A && !k && n.appendChild(A), s.appendChild(n), L = this._checkCodeMirror(t, L), {
      constructed: {
        _top: s,
        _relative: n,
        _toolBar: r.element,
        _toolbarShadow: c,
        _menuTray: r._menuTray,
        _editorArea: v,
        _wysiwygArea: C,
        _codeArea: L,
        _placeholder: x,
        _resizingBar: A,
        _navigation: o,
        _charWrapper: a,
        _charCounter: f,
        _loading: p,
        _lineBreaker: h,
        _lineBreaker_t: g,
        _lineBreaker_b: m,
        _resizeBack: y,
        _stickyDummy: l,
        _arrow: d,
        _focusTemp: w
      },
      options: t,
      plugins: r.plugins,
      pluginCallButtons: r.pluginCallButtons,
      _responsiveButtons: r.responsiveButtons
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
      }, e.codeMirror.options || {}].reduce(function(n, r) {
        for (let c in r)
          oe.hasOwn(r, c) && (n[c] = r[c]);
        return n;
      }, {});
      e.height === "auto" && (i.viewportMargin = 1 / 0, i.height = "auto");
      const s = e.codeMirror.src.fromTextArea(t, i);
      s.display.wrapper.style.cssText = t.style.cssText, e.codeMirrorEditor = s, t = s.display.wrapper, t.className += " se-wrapper-code-mirror";
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
    }, e.options || {}].reduce(function(i, s) {
      for (let n in s)
        oe.hasOwn(s, n) && (i[n] = s[n]);
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
    const s = t.element, n = s.relative, r = s.editorArea, c = e.toolbarContainer && e.toolbarContainer !== i.toolbarContainer, d = e.lang !== i.lang || e.buttonList !== i.buttonList || e.mode !== i.mode || c, l = this._createToolBar(document, d ? e.buttonList : i.buttonList, e.plugins, e);
    l.pluginCallButtons.math && this._checkKatexMath(e.katex);
    const v = document.createElement("DIV");
    v.className = "se-arrow", d && (l.element.style.visibility = "hidden", c ? (e.toolbarContainer.appendChild(l.element), s.toolbar.parentElement.removeChild(s.toolbar)) : s.toolbar.parentElement.replaceChild(l.element, s.toolbar), s.toolbar = l.element, s._menuTray = l._menuTray, s._arrow = v);
    const u = this._initElements(e, s.topArea, d ? l.element : s.toolbar, v), b = u.bottomBar, C = u.wysiwygFrame, x = u.placeholder;
    let L = u.codeView;
    return s.resizingBar && oe.removeItem(s.resizingBar), b.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== i.resizingBarContainer ? e.resizingBarContainer.appendChild(b.resizingBar) : n.appendChild(b.resizingBar)), r.innerHTML = "", r.appendChild(L), x && r.appendChild(x), L = this._checkCodeMirror(e, L), s.resizingBar = b.resizingBar, s.navigation = b.navigation, s.charWrapper = b.charWrapper, s.charCounter = b.charCounter, s.wysiwygFrame = C, s.code = L, s.placeholder = x, e.rtl ? oe.addClass(s.topArea, "se-rtl") : oe.removeClass(s.topArea, "se-rtl"), {
      callButtons: l.pluginCallButtons,
      plugins: l.plugins,
      toolbar: l
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
  _initElements: function(e, t, i, s) {
    t.style.cssText = e._editorStyles.top, /inline/i.test(e.mode) ? (i.className += " se-toolbar-inline", i.style.width = e.toolbarWidth) : /balloon/i.test(e.mode) && (i.className += " se-toolbar-balloon", i.style.width = e.toolbarWidth, i.appendChild(s));
    const n = document.createElement(e.iframe ? "IFRAME" : "DIV");
    if (n.className = "se-wrapper-inner se-wrapper-wysiwyg", e.iframe)
      n.allowFullscreen = !0, n.frameBorder = 0, n.style.cssText = e._editorStyles.frame, n.className += e.className;
    else {
      n.setAttribute("contenteditable", !0), n.setAttribute("autocorrect", "off"), n.setAttribute("scrolling", "auto");
      for (let b in e.iframeAttributes)
        n.setAttribute(b, e.iframeAttributes[b]);
      n.className += " " + e._editableClass, n.style.cssText = e._editorStyles.frame + e._editorStyles.editor, n.className += e.className;
    }
    const r = document.createElement("TEXTAREA");
    r.className = "se-wrapper-inner se-wrapper-code" + e.className, r.style.cssText = e._editorStyles.frame, r.style.display = "none", e.height === "auto" && (r.style.overflow = "hidden");
    let c = null, d = null, l = null, v = null;
    if (e.resizingBar && (c = document.createElement("DIV"), c.className = "se-resizing-bar sun-editor-common", d = document.createElement("DIV"), d.className = "se-navigation sun-editor-common", c.appendChild(d), e.charCounter)) {
      if (l = document.createElement("DIV"), l.className = "se-char-counter-wrapper", e.charCounterLabel) {
        const b = document.createElement("SPAN");
        b.className = "se-char-label", b.textContent = e.charCounterLabel, l.appendChild(b);
      }
      if (v = document.createElement("SPAN"), v.className = "se-char-counter", v.textContent = "0", l.appendChild(v), e.maxCharCount > 0) {
        const b = document.createElement("SPAN");
        b.textContent = " / " + e.maxCharCount, l.appendChild(b);
      }
      c.appendChild(l);
    }
    let u = null;
    return e.placeholder && (u = document.createElement("SPAN"), u.className = "se-placeholder", u.innerText = e.placeholder), {
      bottomBar: {
        resizingBar: c,
        navigation: d,
        charWrapper: l,
        charCounter: v
      },
      wysiwygFrame: n,
      codeView: r,
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
      const r = t.plugins, c = r.length ? r : Object.keys(r).map(function(d) {
        return r[d];
      });
      for (let d = 0, l = c.length, v; d < l; d++)
        v = c[d].default || c[d], i[v.name] = v;
    }
    t.plugins = i, t.strictMode = t.strictMode !== !1, t.lang = t.lang || yt, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new oe._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
    const s = t.textTags = [{ bold: "STRONG", underline: "U", italic: "EM", strike: "DEL", sub: "SUB", sup: "SUP" }, t.textTags || {}].reduce(function(r, c) {
      for (let d in c)
        r[d] = c[d];
      return r;
    }, {});
    t._textTagsMap = {
      strong: s.bold.toLowerCase(),
      b: s.bold.toLowerCase(),
      u: s.underline.toLowerCase(),
      ins: s.underline.toLowerCase(),
      em: s.italic.toLowerCase(),
      i: s.italic.toLowerCase(),
      del: s.strike.toLowerCase(),
      strike: s.strike.toLowerCase(),
      s: s.strike.toLowerCase(),
      sub: s.sub.toLowerCase(),
      sup: s.sup.toLowerCase()
    }, t._defaultCommand = {
      bold: t.textTags.bold,
      underline: t.textTags.underline,
      italic: t.textTags.italic,
      strike: t.textTags.strike,
      subscript: t.textTags.sub,
      superscript: t.textTags.sup
    }, t.__allowedScriptTag = t.__allowedScriptTag === !0;
    const n = "br|p|div|pre|blockquote|h1|h2|h3|h4|h5|h6|ol|ul|li|hr|figure|figcaption|img|iframe|audio|video|source|table|thead|tbody|tr|th|td|a|b|strong|var|i|em|u|ins|s|span|strike|del|sub|sup|code|svg|path|details|summary";
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : n) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? oe.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? oe.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? oe.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
      { text: "1", value: "1em" },
      { text: "1.5", value: "1.5em" },
      { text: "2", value: "2em" },
      { text: "2.5", value: "2.5em" }
    ], t.position = typeof t.position == "string" ? t.position : null, t.display = t.display || (e.style.display === "none" || !e.style.display ? "block" : e.style.display), t.popupDisplay = t.popupDisplay || "full", t.resizingBar = t.resizingBar === void 0 ? !/inline|balloon/i.test(t.mode) : t.resizingBar, t.showPathLabel = t.resizingBar ? typeof t.showPathLabel == "boolean" ? t.showPathLabel : !0 : !1, t.resizeEnable = t.resizeEnable === void 0 ? !0 : !!t.resizeEnable, t.resizingBarContainer = typeof t.resizingBarContainer == "string" ? document.querySelector(t.resizingBarContainer) : t.resizingBarContainer, t.charCounter = t.maxCharCount > 0 ? !0 : typeof t.charCounter == "boolean" ? t.charCounter : !1, t.charCounterType = typeof t.charCounterType == "string" ? t.charCounterType : "char", t.charCounterLabel = typeof t.charCounterLabel == "string" ? t.charCounterLabel.trim() : null, t.maxCharCount = oe.isNumber(t.maxCharCount) && t.maxCharCount > -1 ? t.maxCharCount * 1 : null, t.width = t.width ? oe.isNumber(t.width) ? t.width + "px" : t.width : e.clientWidth ? e.clientWidth + "px" : "100%", t.minWidth = (oe.isNumber(t.minWidth) ? t.minWidth + "px" : t.minWidth) || "", t.maxWidth = (oe.isNumber(t.maxWidth) ? t.maxWidth + "px" : t.maxWidth) || "", t.height = t.height ? oe.isNumber(t.height) ? t.height + "px" : t.height : e.clientHeight ? e.clientHeight + "px" : "auto", t.minHeight = (oe.isNumber(t.minHeight) ? t.minHeight + "px" : t.minHeight) || "", t.maxHeight = (oe.isNumber(t.maxHeight) ? t.maxHeight + "px" : t.maxHeight) || "", t.className = typeof t.className == "string" && t.className.length > 0 ? " " + t.className : "", t.defaultStyle = typeof t.defaultStyle == "string" ? t.defaultStyle : "", t.font = t.font ? t.font : ["Arial", "Comic Sans MS", "Courier New", "Impact", "Georgia", "tahoma", "Trebuchet MS", "Verdana"], t.fontSize = t.fontSize ? t.fontSize : null, t.formats = t.formats ? t.formats : null, t.colorList = t.colorList ? t.colorList : null, t.lineHeights = t.lineHeights ? t.lineHeights : null, t.paragraphStyles = t.paragraphStyles ? t.paragraphStyles : null, t.textStyles = t.textStyles ? t.textStyles : null, t.fontSizeUnit = typeof t.fontSizeUnit == "string" && t.fontSizeUnit.trim().toLowerCase() || "px", t.alignItems = typeof t.alignItems == "object" ? t.alignItems : t.rtl ? ["right", "center", "left", "justify"] : ["left", "center", "right", "justify"], t.imageResizing = t.imageResizing === void 0 ? !0 : t.imageResizing, t.imageHeightShow = t.imageHeightShow === void 0 ? !0 : !!t.imageHeightShow, t.imageAlignShow = t.imageAlignShow === void 0 ? !0 : !!t.imageAlignShow, t.imageWidth = t.imageWidth ? oe.isNumber(t.imageWidth) ? t.imageWidth + "px" : t.imageWidth : "auto", t.imageHeight = t.imageHeight ? oe.isNumber(t.imageHeight) ? t.imageHeight + "px" : t.imageHeight : "auto", t.imageSizeOnlyPercentage = !!t.imageSizeOnlyPercentage, t._imageSizeUnit = t.imageSizeOnlyPercentage ? "%" : "px", t.imageRotation = t.imageRotation !== void 0 ? t.imageRotation : !(t.imageSizeOnlyPercentage || !t.imageHeightShow), t.imageFileInput = t.imageFileInput === void 0 ? !0 : t.imageFileInput, t.imageUrlInput = t.imageUrlInput === void 0 || !t.imageFileInput ? !0 : t.imageUrlInput, t.imageUploadHeader = t.imageUploadHeader || null, t.imageUploadUrl = typeof t.imageUploadUrl == "string" ? t.imageUploadUrl : null, t.imageUploadSizeLimit = /\d+/.test(t.imageUploadSizeLimit) ? oe.getNumber(t.imageUploadSizeLimit, 0) : null, t.imageMultipleFile = !!t.imageMultipleFile, t.imageAccept = typeof t.imageAccept != "string" || t.imageAccept.trim() === "*" ? "image/*" : t.imageAccept.trim() || "image/*", t.imageGalleryUrl = typeof t.imageGalleryUrl == "string" ? t.imageGalleryUrl : null, t.imageGalleryHeader = t.imageGalleryHeader || null, t.videoResizing = t.videoResizing === void 0 ? !0 : t.videoResizing, t.videoHeightShow = t.videoHeightShow === void 0 ? !0 : !!t.videoHeightShow, t.videoAlignShow = t.videoAlignShow === void 0 ? !0 : !!t.videoAlignShow, t.videoRatioShow = t.videoRatioShow === void 0 ? !0 : !!t.videoRatioShow, t.videoWidth = !t.videoWidth || !oe.getNumber(t.videoWidth, 0) ? "" : oe.isNumber(t.videoWidth) ? t.videoWidth + "px" : t.videoWidth, t.videoHeight = !t.videoHeight || !oe.getNumber(t.videoHeight, 0) ? "" : oe.isNumber(t.videoHeight) ? t.videoHeight + "px" : t.videoHeight, t.videoSizeOnlyPercentage = !!t.videoSizeOnlyPercentage, t._videoSizeUnit = t.videoSizeOnlyPercentage ? "%" : "px", t.videoRotation = t.videoRotation !== void 0 ? t.videoRotation : !(t.videoSizeOnlyPercentage || !t.videoHeightShow), t.videoRatio = oe.getNumber(t.videoRatio, 4) || 0.5625, t.videoRatioList = t.videoRatioList ? t.videoRatioList : null, t.youtubeQuery = (t.youtubeQuery || "").replace("?", ""), t.vimeoQuery = (t.vimeoQuery || "").replace("?", ""), t.videoFileInput = !!t.videoFileInput, t.videoUrlInput = t.videoUrlInput === void 0 || !t.videoFileInput ? !0 : t.videoUrlInput, t.videoUploadHeader = t.videoUploadHeader || null, t.videoUploadUrl = typeof t.videoUploadUrl == "string" ? t.videoUploadUrl : null, t.videoUploadSizeLimit = /\d+/.test(t.videoUploadSizeLimit) ? oe.getNumber(t.videoUploadSizeLimit, 0) : null, t.videoMultipleFile = !!t.videoMultipleFile, t.videoTagAttrs = t.videoTagAttrs || null, t.videoIframeAttrs = t.videoIframeAttrs || null, t.videoAccept = typeof t.videoAccept != "string" || t.videoAccept.trim() === "*" ? "video/*" : t.videoAccept.trim() || "video/*", t.audioWidth = t.audioWidth ? oe.isNumber(t.audioWidth) ? t.audioWidth + "px" : t.audioWidth : "", t.audioHeight = t.audioHeight ? oe.isNumber(t.audioHeight) ? t.audioHeight + "px" : t.audioHeight : "", t.audioFileInput = !!t.audioFileInput, t.audioUrlInput = t.audioUrlInput === void 0 || !t.audioFileInput ? !0 : t.audioUrlInput, t.audioUploadHeader = t.audioUploadHeader || null, t.audioUploadUrl = typeof t.audioUploadUrl == "string" ? t.audioUploadUrl : null, t.audioUploadSizeLimit = /\d+/.test(t.audioUploadSizeLimit) ? oe.getNumber(t.audioUploadSizeLimit, 0) : null, t.audioMultipleFile = !!t.audioMultipleFile, t.audioTagAttrs = t.audioTagAttrs || null, t.audioAccept = typeof t.audioAccept != "string" || t.audioAccept.trim() === "*" ? "audio/*" : t.audioAccept.trim() || "audio/*", t.tableCellControllerPosition = typeof t.tableCellControllerPosition == "string" ? t.tableCellControllerPosition.toLowerCase() : "cell", t.linkTargetNewWindow = !!t.linkTargetNewWindow, t.linkProtocol = typeof t.linkProtocol == "string" ? t.linkProtocol : null, t.linkRel = Array.isArray(t.linkRel) ? t.linkRel : [], t.linkRelDefault = t.linkRelDefault || {}, t.tabDisable = !!t.tabDisable, t.shortcutsDisable = Array.isArray(t.shortcutsDisable) ? t.shortcutsDisable : [], t.shortcutsHint = t.shortcutsHint === void 0 ? !0 : !!t.shortcutsHint, t.callBackSave = t.callBackSave ? t.callBackSave : null, t.templates = t.templates ? t.templates : null, t.placeholder = typeof t.placeholder == "string" ? t.placeholder : null, t.mediaAutoSelect = t.mediaAutoSelect === void 0 ? !0 : !!t.mediaAutoSelect, t.buttonList = t.buttonList ? t.buttonList : [
      ["undo", "redo"],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"]
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? ai : [ai, t.icons].reduce(function(r, c) {
      for (let d in c)
        oe.hasOwn(c, d) && (r[d] = c[d]);
      return r;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(r, c) {
      for (let d in c)
        oe.hasOwn(c, d) && (r[d] = c[d]);
      return r;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = oe._setDefaultOptionStyle(t, t.defaultStyle);
  },
  _setWhitelist: function(e, t) {
    if (typeof t != "string") return e;
    t = t.split("|"), e = e.split("|");
    for (let i = 0, s = t.length, n; i < s; i++)
      n = e.indexOf(t[i]), n > -1 && e.splice(n, 1);
    return e.join("|");
  },
  /**
   * @description Suneditor's Default button list
   * @param {Object} options options
   * @private
   */
  _defaultButtons: function(e) {
    const t = e.icons, i = e.lang, s = oe.isOSX_IOS ? "⌘" : "CTRL", n = oe.isOSX_IOS ? "⇧" : "+SHIFT", r = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], c = e.rtl ? ["[", "]"] : ["]", "["], d = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
    return {
      /** default command */
      bold: ["", i.toolbar.bold + '<span class="se-shortcut">' + (r.indexOf("bold") > -1 ? "" : s + '+<span class="se-shortcut-key">B</span>') + "</span>", "bold", "", t.bold],
      underline: ["", i.toolbar.underline + '<span class="se-shortcut">' + (r.indexOf("underline") > -1 ? "" : s + '+<span class="se-shortcut-key">U</span>') + "</span>", "underline", "", t.underline],
      italic: ["", i.toolbar.italic + '<span class="se-shortcut">' + (r.indexOf("italic") > -1 ? "" : s + '+<span class="se-shortcut-key">I</span>') + "</span>", "italic", "", t.italic],
      strike: ["", i.toolbar.strike + '<span class="se-shortcut">' + (r.indexOf("strike") > -1 ? "" : s + n + '+<span class="se-shortcut-key">S</span>') + "</span>", "strike", "", t.strike],
      subscript: ["", i.toolbar.subscript, "SUB", "", t.subscript],
      superscript: ["", i.toolbar.superscript, "SUP", "", t.superscript],
      removeFormat: ["", i.toolbar.removeFormat, "removeFormat", "", t.erase],
      indent: ["", i.toolbar.indent + '<span class="se-shortcut">' + (r.indexOf("indent") > -1 ? "" : s + '+<span class="se-shortcut-key">' + c[0] + "</span>") + "</span>", "indent", "", d[0]],
      outdent: ["", i.toolbar.outdent + '<span class="se-shortcut">' + (r.indexOf("indent") > -1 ? "" : s + '+<span class="se-shortcut-key">' + c[1] + "</span>") + "</span>", "outdent", "", d[1]],
      fullScreen: ["se-code-view-enabled se-resizing-enabled", i.toolbar.fullScreen, "fullScreen", "", t.expansion],
      showBlocks: ["", i.toolbar.showBlocks, "showBlocks", "", t.show_blocks],
      codeView: ["se-code-view-enabled se-resizing-enabled", i.toolbar.codeView, "codeView", "", t.code_view],
      undo: ["", i.toolbar.undo + '<span class="se-shortcut">' + (r.indexOf("undo") > -1 ? "" : s + '+<span class="se-shortcut-key">Z</span>') + "</span>", "undo", "", t.undo],
      redo: ["", i.toolbar.redo + '<span class="se-shortcut">' + (r.indexOf("undo") > -1 ? "" : s + '+<span class="se-shortcut-key">Y</span> / ' + s + n + '+<span class="se-shortcut-key">Z</span>') + "</span>", "redo", "", t.redo],
      preview: ["se-resizing-enabled", i.toolbar.preview, "preview", "", t.preview],
      print: ["se-resizing-enabled", i.toolbar.print, "print", "", t.print],
      dir: ["", i.toolbar[e.rtl ? "dir_ltr" : "dir_rtl"], "dir", "", t[e.rtl ? "dir_ltr" : "dir_rtl"]],
      dir_ltr: ["", i.toolbar.dir_ltr, "dir_ltr", "", t.dir_ltr],
      dir_rtl: ["", i.toolbar.dir_rtl, "dir_rtl", "", t.dir_rtl],
      save: ["se-resizing-enabled", i.toolbar.save + '<span class="se-shortcut">' + (r.indexOf("save") > -1 ? "" : s + '+<span class="se-shortcut-key">S</span>') + "</span>", "save", "", t.save],
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
    const e = oe.createElement("DIV");
    e.className = "se-btn-module se-btn-module-border";
    const t = oe.createElement("UL");
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
  _createButton: function(e, t, i, s, n, r, c) {
    const d = oe.createElement("LI"), l = oe.createElement("BUTTON"), v = t || i;
    return l.setAttribute("type", "button"), l.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), l.setAttribute("data-command", i), l.setAttribute("data-display", s), l.setAttribute("aria-label", v.replace(/<span .+<\/span>/, "")), l.setAttribute("tabindex", "-1"), n || (n = '<span class="se-icon-text">!</span>'), /^default\./i.test(n) && (n = c[n.replace(/^default\./i, "")]), /^text\./i.test(n) && (n = n.replace(/^text\./i, ""), l.className += " se-btn-more-text"), n += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + v + "</span></span>", r && l.setAttribute("disabled", !0), l.innerHTML = n, d.appendChild(l), {
      li: d,
      button: l
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
  _createToolBar: function(e, t, i, s) {
    const n = e.createElement("DIV");
    n.className = "se-toolbar-separator-vertical";
    const r = e.createElement("DIV");
    r.className = "se-toolbar sun-editor-common";
    const c = e.createElement("DIV");
    c.className = "se-btn-tray", r.appendChild(c), t = JSON.parse(JSON.stringify(t));
    const d = s.icons, l = this._defaultButtons(s), v = {}, u = [];
    let b = null, C = null, x = null, L = null, A = "", o = !1;
    const a = oe.createElement("DIV");
    a.className = "se-toolbar-more-layer";
    e:
      for (let h = 0, g, m, y, w, _; h < t.length; h++)
        if (g = !1, _ = "", w = t[h], x = this._createModuleGroup(), typeof w == "object") {
          for (let k = 0, M; k < w.length; k++) {
            if (C = w[k], M = !1, /^\%\d+/.test(C) && k === 0) {
              w[0] = C.replace(/[^\d]/g, ""), u.push(w), t.splice(h--, 1);
              continue e;
            }
            if (typeof C == "object")
              typeof C.add == "function" ? (A = C.name, b = l[A], i[A] = C) : (A = C.name, b = [C.buttonClass, C.title, C.name, C.dataDisplay, C.innerHTML, C._disabled]);
            else {
              if (/^\-/.test(C)) {
                _ = C.substr(1), x.div.className += " module-float-" + _;
                continue;
              }
              if (/^\#/.test(C)) {
                C.substr(1) === "fix" && (x.ul.className += " se-menu-dir-fix");
                continue;
              }
              if (/^\:/.test(C)) {
                M = !0;
                const E = C.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                y = "__se__" + E[1].trim();
                const T = E[2].trim(), z = E[3].trim();
                b = ["se-btn-more", T, y, "MORE", z];
              } else
                b = l[C];
              if (A = C, !b) {
                const E = i[A];
                if (!E) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + A + "]");
                b = [E.buttonClass, E.title, E.name, E.display, E.innerHTML, E._disabled];
              }
            }
            L = this._createButton(b[0], b[1], b[2], b[3], b[4], b[5], d), (g ? m : x.ul).appendChild(L.li), i[A] && (v[A] = L.button), M && (g = !0, m = oe.createElement("DIV"), m.className = "se-more-layer " + y, m.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (_ ? ' style="float: ' + _ + ';"' : "") + "></ul></div>", a.appendChild(m), m = m.firstElementChild.firstElementChild);
          }
          if (o) {
            const k = n.cloneNode(!1);
            c.appendChild(k);
          }
          c.appendChild(x.div), o = !0;
        } else if (/^\/$/.test(w)) {
          const k = e.createElement("DIV");
          k.className = "se-btn-module-enter", c.appendChild(k), o = !1;
        }
    switch (c.children.length) {
      case 0:
        c.style.display = "none";
        break;
      case 1:
        oe.removeClass(c.firstElementChild, "se-btn-module-border");
        break;
      default:
        if (s.rtl) {
          const h = n.cloneNode(!1);
          h.style.float = c.lastElementChild.style.float, c.appendChild(h);
        }
    }
    u.length > 0 && u.unshift(t), a.children.length > 0 && c.appendChild(a);
    const f = e.createElement("DIV");
    f.className = "se-menu-tray", r.appendChild(f);
    const p = e.createElement("DIV");
    return p.className = "se-toolbar-cover", r.appendChild(p), s.hideToolbar && (r.style.display = "none"), {
      element: r,
      plugins: i,
      pluginCallButtons: v,
      responsiveButtons: u,
      _menuTray: f,
      _buttonTray: c
    };
  }
}, Bt = function(e, t, i) {
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
function fs(e, t) {
  const i = e._w, s = e.util, n = e.options.historyStackDelayTime;
  let r = e.context.element, c = e.context.tool.undo, d = e.context.tool.redo, l = null, v = 0, u = [];
  function b() {
    const x = u[v];
    r.wysiwyg.innerHTML = x.contents, e.setRange(s.getNodeFromPath(x.s.path, r.wysiwyg), x.s.offset, s.getNodeFromPath(x.e.path, r.wysiwyg), x.e.offset), e.focus(), u.length <= 1 ? (c && c.setAttribute("disabled", !0), d && d.setAttribute("disabled", !0)) : v === 0 ? (c && c.setAttribute("disabled", !0), d && d.removeAttribute("disabled")) : v === u.length - 1 ? (c && c.removeAttribute("disabled"), d && d.setAttribute("disabled", !0)) : (c && c.removeAttribute("disabled"), d && d.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function C() {
    e._checkComponents();
    const x = r.wysiwyg.innerHTML;
    if (!x || u[v] && x === u[v].contents) return;
    v++;
    const L = e._variable._range;
    u.length > v && (u = u.slice(0, v), d && d.setAttribute("disabled", !0)), L ? u[v] = {
      contents: x,
      s: {
        path: s.getNodePath(L.startContainer, null, null),
        offset: L.startOffset
      },
      e: {
        path: s.getNodePath(L.endContainer, null, null),
        offset: L.endOffset
      }
    } : u[v] = {
      contents: x,
      s: { path: [0, 0], offset: [0, 0] },
      e: { path: 0, offset: 0 }
    }, v === 1 && c && c.removeAttribute("disabled"), e._setCharCount(), t();
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
      i.setTimeout(e._resourcesStateChange.bind(e));
      const L = typeof x == "number" ? x > 0 ? x : 0 : x ? n : 0;
      if ((!L || l) && (i.clearTimeout(l), !L)) {
        C();
        return;
      }
      l = i.setTimeout(function() {
        i.clearTimeout(l), l = null, C();
      }, L);
    },
    /**
     * @description Undo function
     */
    undo: function() {
      v > 0 && (v--, b());
    },
    /**
     * @description Redo function
     */
    redo: function() {
      u.length - 1 > v && (v++, b());
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(x) {
      v = x < 0 ? u.length - 1 : x, b();
    },
    /**
     * @description Get the current history stack index.
     * @returns {Number} Current Stack index
     */
    getCurrentIndex: function() {
      return v;
    },
    /**
     * @description Reset the history object
     */
    reset: function(x) {
      c && c.setAttribute("disabled", !0), d && d.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0), u.splice(0), v = 0, u[v] = {
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
      r = e.context.element, c = e.context.tool.undo, d = e.context.tool.redo, v === 0 ? (c && c.setAttribute("disabled", !0), d && v === u.length - 1 && d.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : v === u.length - 1 && d && d.setAttribute("disabled", !0);
    },
    /**
     * @description Remove all stacks and remove the timeout function.
     * @private
     */
    _destroy: function() {
      l && i.clearTimeout(l), u = null;
    }
  };
}
const ri = {
  name: "notice",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    const t = e.context;
    t.notice = {};
    let i = e.util.createElement("DIV"), s = e.util.createElement("SPAN"), n = e.util.createElement("BUTTON");
    i.className = "se-notice", n.className = "close", n.setAttribute("aria-label", "Close"), n.setAttribute("title", e.lang.dialogBox.close), n.innerHTML = e.icons.cancel, i.appendChild(s), i.appendChild(n), t.notice.modal = i, t.notice.message = s, n.addEventListener("click", this.onClick_cancel.bind(e)), t.element.editorArea.appendChild(i), i = null;
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
function hs(e, t, i, s, n, r) {
  const c = e.element.originElement.ownerDocument || document, d = c.defaultView || window, l = oe, v = n.icons, u = {
    _d: c,
    _w: d,
    _parser: new d.DOMParser(),
    _prevRtl: n.rtl,
    _editorHeight: 0,
    _editorHeightPadding: 0,
    _listCamel: n.__listCommonStyle,
    _listKebab: l.camelToKebabCase(n.__listCommonStyle),
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
    util: l,
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
    notice: ri,
    /**
     * @description Default icons object
     */
    icons: v,
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
    lang: s,
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
      div: new d.RegExp("\\s*[^-a-zA-Z](.+)\\s*:[^;]+(?!;)*", "ig"),
      span: new d.RegExp("\\s*[^-a-zA-Z](font-family|font-size|color|background-color)\\s*:[^;]+(?!;)*", "ig"),
      format: new d.RegExp("\\s*[^-a-zA-Z](text-align|margin-left|margin-right|width|height|line-height)\\s*:[^;]+(?!;)*", "ig"),
      fontSizeUnit: new d.RegExp("\\d+" + n.fontSizeUnit + "$", "i")
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
      minResizingSize: l.getNumber(e.element.wysiwygFrame.style.minHeight || "65", 0),
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
      const o = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
      for (let a = 0, f, p; a < o.length; a++)
        f = o[a], p = f.getAttribute("data-command"), this.allCommandButtons[p] = f;
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const o = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let a = 0, f, p, h; a < o.length; a++)
          f = o[a], p = f.getAttribute("data-command"), h = this.allCommandButtons[p], h && (f.parentElement.replaceChild(h, f), this.context.tool[p] && (this.context.tool[p] = h));
      }
    },
    /**
     * @description If the plugin is not added, add the plugin and call the 'add' function.
     * If the plugin is added call callBack function.
     * @param {String} pluginName The name of the plugin to call
     * @param {function} callBackFunction Function to be executed immediately after module call
     * @param {Element|null} _target Plugin target button (This is not necessary if you have a button list when creating the editor)
     */
    callPlugin: function(o, a, f) {
      if (f = f || t[o], this.plugins[o])
        this.initPlugins[o] ? typeof this._targetPlugins[o] == "object" && f && this.initMenuTarget(o, f, this._targetPlugins[o]) : (this.plugins[o].add(this, f), this.initPlugins[o] = !0);
      else throw Error('[SUNEDITOR.core.callPlugin.fail] The called plugin does not exist or is in an invalid format. (pluginName:"' + o + '")');
      this.plugins[o].active && !this.commandMap[o] && f && (this.commandMap[o] = f, this.activePlugins.push(o)), typeof a == "function" && a();
    },
    /**
     * @description If the module is not added, add the module and call the 'add' function
     * @param {Array} moduleArray module object's Array [dialog, resizing]
     */
    addModule: function(o) {
      for (let a = 0, f = o.length, p; a < f; a++)
        p = o[a].name, this.plugins[p] || (this.plugins[p] = o[a]), this.initPlugins[p] || (this.initPlugins[p] = !0, typeof this.plugins[p].add == "function" && this.plugins[p].add(this));
    },
    /**
     * @description Gets the current editor-relative scroll offset.
     * @returns {Object} {top, left}
     */
    getGlobalScrollOffset: function() {
      let o = 0, a = 0, f = e.element.topArea;
      for (; f; )
        o += f.scrollTop, a += f.scrollLeft, f = f.parentElement;
      for (f = this._shadowRoot ? this._shadowRoot.host : null; f; )
        o += f.scrollTop, a += f.scrollLeft, f = f.parentElement;
      return {
        top: o,
        left: a
      };
    },
    /**
     * @description Method for managing submenu element.
     * You must add the "submenu" element using the this method at custom plugin.
     * @param {String} pluginName Plugin name
     * @param {Element|null} target Target button
     * @param {Element} menu Submenu element
     */
    initMenuTarget: function(o, a, f) {
      a ? (e.element._menuTray.appendChild(f), this._targetPlugins[o] = !0, this._menuTray[a.getAttribute("data-command")] = f) : this._targetPlugins[o] = f;
    },
    /**
     * @description Enable submenu
     * @param {Element} element Submenu's button element to call
     */
    submenuOn: function(o) {
      this._bindedSubmenuOff && this._bindedSubmenuOff(), this._bindControllersOff && this.controllersOff();
      const a = this._submenuName = o.getAttribute("data-command"), f = this.submenu = this._menuTray[a];
      this.submenuActiveButton = o, this._setMenuPosition(o, f), this._bindedSubmenuOff = this.submenuOff.bind(this), this.addDocEvent("mousedown", this._bindedSubmenuOff, !1), this.plugins[a].on && this.plugins[a].on.call(this), this._antiBlur = !0;
    },
    /**
     * @description Disable submenu
     */
    submenuOff: function() {
      this.removeDocEvent("mousedown", this._bindedSubmenuOff), this._bindedSubmenuOff = null, this.submenu && (this._submenuName = "", this.submenu.style.display = "none", this.submenu = null, l.removeClass(this.submenuActiveButton, "on"), this.submenuActiveButton = null, this._notHideToolbar = !1), this._antiBlur = !1;
    },
    /**
     * @description Disable more layer
     */
    moreLayerOff: function() {
      if (this._moreLayerActiveButton) {
        const o = e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command"));
        o.style.display = "none", l.removeClass(this._moreLayerActiveButton, "on"), this._moreLayerActiveButton = null;
      }
    },
    /**
     * @description Enable container
     * @param {Element} element Container's button element to call
     */
    containerOn: function(o) {
      this._bindedContainerOff && this._bindedContainerOff();
      const a = this._containerName = o.getAttribute("data-command"), f = this.container = this._menuTray[a];
      this.containerActiveButton = o, this._setMenuPosition(o, f), this._bindedContainerOff = this.containerOff.bind(this), this.addDocEvent("mousedown", this._bindedContainerOff, !1), this.plugins[a].on && this.plugins[a].on.call(this), this._antiBlur = !0;
    },
    /**
     * @description Disable container
     */
    containerOff: function() {
      this.removeDocEvent("mousedown", this._bindedContainerOff), this._bindedContainerOff = null, this.container && (this._containerName = "", this.container.style.display = "none", this.container = null, l.removeClass(this.containerActiveButton, "on"), this.containerActiveButton = null, this._notHideToolbar = !1), this._antiBlur = !1;
    },
    /**
     * @description Set the menu position. (submenu, container)
     * @param {*} element Button element
     * @param {*} menu Menu element
     * @private
     */
    _setMenuPosition: function(o, a) {
      a.style.visibility = "hidden", a.style.display = "block", a.style.height = "", l.addClass(o, "on");
      const f = this.context.element.toolbar, p = f.offsetWidth, h = b._getEditorOffsets(e.element.toolbar), g = a.offsetWidth, m = o.parentElement.offsetLeft + 3;
      if (n.rtl) {
        const z = o.offsetWidth, V = g > z ? g - z : 0, U = V > 0 ? 0 : z - g;
        a.style.left = m - V + U + "px", h.left > b._getEditorOffsets(a).left && (a.style.left = "0px");
      } else {
        const z = p <= g ? 0 : p - (m + g);
        z < 0 ? a.style.left = m + z + "px" : a.style.left = m + "px";
      }
      let y = 0, w = o;
      for (; w && w !== f; )
        y += w.offsetTop, w = w.offsetParent;
      const _ = y;
      this._isBalloon ? y += f.offsetTop + o.offsetHeight : y -= o.offsetHeight;
      const k = h.top, M = a.offsetHeight, E = this.getGlobalScrollOffset().top, T = d.innerHeight - (k - E + _ + o.parentElement.offsetHeight);
      if (T < M) {
        let z = -1 * (M - _ + 3);
        const V = k - E + z, U = M + (V < 0 ? V : 0);
        U > T ? (a.style.height = U + "px", z = -1 * (U - _ + 3)) : (a.style.height = T + "px", z = _ + o.parentElement.offsetHeight), a.style.top = z + "px";
      } else
        a.style.top = _ + o.parentElement.offsetHeight + "px";
      a.style.visibility = "";
    },
    /**
     * @description Show controller at editor area (controller elements, function, "controller target element(@Required)", "controller name(@Required)", etc..)
     * @param {*} arguments controller elements, functions..
     */
    controllersOn: function() {
      this._bindControllersOff && this._bindControllersOff(), this.controllerArray = [];
      for (let o = 0, a; o < arguments.length; o++)
        if (a = arguments[o], !!a) {
          if (typeof a == "string") {
            this.currentControllerName = a;
            continue;
          }
          if (typeof a == "function") {
            this.controllerArray.push(a);
            continue;
          }
          if (!l.hasClass(a, "se-controller")) {
            this.currentControllerTarget = a, this.currentFileComponentInfo = this.getFileComponent(a);
            continue;
          }
          a.style && (a.style.display = "block", this._shadowRoot && this._shadowRootControllerEventTarget.indexOf(a) === -1 && (a.addEventListener("mousedown", function(f) {
            f.preventDefault(), f.stopPropagation();
          }), this._shadowRootControllerEventTarget.push(a))), this.controllerArray.push(a);
        }
      this._bindControllersOff = this.controllersOff.bind(this), this.addDocEvent("mousedown", this._bindControllersOff, !1), this.addDocEvent("keydown", this._bindControllersOff, !1), this._antiBlur = !0, typeof C.showController == "function" && C.showController(this.currentControllerName, this.controllerArray, this);
    },
    /**
     * @description Hide controller at editor area (link button, image resize button..)
     * @param {KeyboardEvent|MouseEvent|null} e Event object when called from mousedown and keydown events registered in "core.controllersOn"
     */
    controllersOff: function(o) {
      this._lineBreaker.style.display = "none";
      const a = this.controllerArray.length;
      if (o && o.target && a > 0) {
        for (let f = 0; f < a; f++)
          if (typeof this.controllerArray[f].contains == "function" && this.controllerArray[f].contains(o.target)) return;
      }
      if (!(this._fileManager.pluginRegExp.test(this.currentControllerName) && o && o.type === "keydown" && o.keyCode !== 27) && (e.element.lineBreaker_t.style.display = e.element.lineBreaker_b.style.display = "none", this._variable._lineBreakComp = null, this.currentControllerName = "", this.currentControllerTarget = null, this.currentFileComponentInfo = null, this.effectNode = null, !!this._bindControllersOff)) {
        if (this.removeDocEvent("mousedown", this._bindControllersOff), this.removeDocEvent("keydown", this._bindControllersOff), this._bindControllersOff = null, a > 0) {
          for (let f = 0; f < a; f++)
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
    setControllerPosition: function(o, a, f, p) {
      n.rtl && (p.left *= -1);
      const h = l.getOffset(a, e.element.wysiwygFrame);
      o.style.visibility = "hidden", o.style.display = "block";
      const g = f === "top" ? -(o.offsetHeight + 2) : a.offsetHeight + 12;
      o.style.top = h.top + g + p.top + "px";
      const m = h.left - e.element.wysiwygFrame.scrollLeft + p.left, y = o.offsetWidth, w = a.offsetWidth, _ = l.hasClass(o.firstElementChild, "se-arrow") ? o.firstElementChild : null;
      if (n.rtl) {
        const k = y > w ? y - w : 0, M = k > 0 ? 0 : w - y;
        o.style.left = m - k + M + "px", k > 0 && _ && (_.style.left = (y - 14 < 10 + k ? y - 14 : 10 + k) + "px");
        const E = e.element.wysiwygFrame.offsetLeft - o.offsetLeft;
        E > 0 && (o.style.left = "0px", _ && (_.style.left = E + "px"));
      } else {
        o.style.left = m + "px";
        const k = e.element.wysiwygFrame.offsetWidth - (o.offsetLeft + y);
        k < 0 ? (o.style.left = o.offsetLeft + k + "px", _ && (_.style.left = 20 - k + "px")) : _ && (_.style.left = "20px");
      }
      o.style.visibility = "";
    },
    /**
     * @description javascript execCommand
     * @param {String} command javascript execCommand function property
     * @param {Boolean|undefined} showDefaultUI javascript execCommand function property
     * @param {String|undefined} value javascript execCommand function property
     */
    execCommand: function(o, a, f) {
      this._wd.execCommand(o, a, o === "formatBlock" ? "<" + f + ">" : f), this.history.push(!0);
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
      const o = l.getParentElement(this.getSelectionNode(), "figcaption");
      o ? o.focus() : e.element.wysiwyg.focus();
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
            const o = this.getRange();
            if (o.startContainer === o.endContainer && l.isWysiwygDiv(o.startContainer)) {
              const a = o.commonAncestorContainer.children[o.startOffset];
              if (!l.isFormatElement(a) && !l.isComponent(a)) {
                const f = l.createElement(n.defaultTag), p = l.createElement("BR");
                f.appendChild(p), e.element.wysiwyg.insertBefore(f, a), this.setRange(p, 0, p, 0);
                return;
              }
            }
            this.setRange(o.startContainer, o.startOffset, o.endContainer, o.endOffset);
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
    focusEdge: function(o) {
      o || (o = e.element.wysiwyg.lastElementChild);
      const a = this.getFileComponent(o);
      a ? this.selectComponent(a.target, a.pluginName) : o ? (o = l.getChildElement(o, function(f) {
        return f.childNodes.length === 0 || f.nodeType === 3;
      }, !0), o ? this.setRange(o, o.textContent.length, o, o.textContent.length) : this.nativeFocus()) : this.focus();
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
    setRange: function(o, a, f, p) {
      if (!o || !f) return;
      a > o.textContent.length && (a = o.textContent.length), p > f.textContent.length && (p = f.textContent.length), l.isFormatElement(o) && (o = o.childNodes[a] || o.childNodes[a - 1] || o, a = a > 0 ? o.nodeType === 1 ? 1 : o.textContent ? o.textContent.length : 0 : 0), l.isFormatElement(f) && (f = f.childNodes[p] || f.childNodes[p - 1] || f, p = p > 0 ? f.nodeType === 1 ? 1 : f.textContent ? f.textContent.length : 0 : 0);
      const h = this._wd.createRange();
      try {
        h.setStart(o, a), h.setEnd(f, p);
      } catch (m) {
        console.warn("[SUNEDITOR.core.focus.error] " + m), this.nativeFocus();
        return;
      }
      const g = this.getSelection();
      return g.removeAllRanges && g.removeAllRanges(), g.addRange(h), this._rangeInfo(h, this.getSelection()), n.iframe && this.__focus(), h;
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
      const o = this._variable._range || this._createDefaultRange(), a = this.getSelection();
      if (o.collapsed === a.isCollapsed || !e.element.wysiwyg.contains(a.focusNode)) return o;
      if (a.rangeCount > 0)
        return this._variable._range = a.getRangeAt(0), this._variable._range;
      {
        const f = a.anchorNode, p = a.focusNode, h = a.anchorOffset, g = a.focusOffset, m = l.compareElements(f, p), y = m.ancestor && (m.result === 0 ? h <= g : m.result > 1);
        return this.setRange(
          y ? f : p,
          y ? h : g,
          y ? p : f,
          y ? g : h
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
    getRange_addLine: function(o, a) {
      if (this._selectionVoid(o)) {
        const f = e.element.wysiwyg, p = l.createElement(n.defaultTag);
        p.innerHTML = "<br>", f.insertBefore(p, a && a !== f ? a.nextElementSibling : f.firstElementChild), this.setRange(p.firstElementChild, 0, p.firstElementChild, 1), o = this._variable._range;
      }
      return o;
    },
    /**
     * @description Get window selection obejct
     * @returns {Object}
     */
    getSelection: function() {
      const o = this._shadowRoot && this._shadowRoot.getSelection ? this._shadowRoot.getSelection() : this._ww.getSelection();
      return !this._variable._range && !e.element.wysiwyg.contains(o.focusNode) && (o.removeAllRanges(), o.addRange(this._createDefaultRange())), o;
    },
    /**
     * @description Get current select node
     * @returns {Node}
     */
    getSelectionNode: function() {
      if (e.element.wysiwyg.contains(this._variable._selectionNode) || this._editorRange(), !this._variable._selectionNode) {
        const o = l.getChildElement(e.element.wysiwyg.firstChild, function(a) {
          return a.childNodes.length === 0 || a.nodeType === 3;
        }, !1);
        if (!o)
          this._editorRange();
        else
          return this._variable._selectionNode = o, o;
      }
      return this._variable._selectionNode;
    },
    /**
     * @description Saving the range object and the currently selected node of editor
     * @private
     */
    _editorRange: function() {
      const o = this._wd.activeElement;
      if (l.isInputElement(o))
        return this._variable._selectionNode = o, o;
      const a = this.getSelection();
      if (!a) return null;
      let f = null;
      a.rangeCount > 0 ? f = a.getRangeAt(0) : f = this._createDefaultRange(), this._rangeInfo(f, a);
    },
    /**
     * @description Set "range" and "selection" info.
     * @param {Object} range range object.
     * @param {Object} selection selection object.
     */
    _rangeInfo: function(o, a) {
      let f = null;
      this._variable._range = o, o.collapsed ? l.isWysiwygDiv(o.commonAncestorContainer) ? f = o.commonAncestorContainer.children[o.startOffset] || o.commonAncestorContainer : f = o.commonAncestorContainer : f = a.extentNode || a.anchorNode, this._variable._selectionNode = f;
    },
    /**
     * @description Return the range object of editor's first child node
     * @returns {Object}
     * @private
     */
    _createDefaultRange: function() {
      const o = e.element.wysiwyg, a = this._wd.createRange();
      let f = o.firstElementChild, p = null;
      return f ? (p = f.firstChild, p || (p = l.createElement("BR"), f.appendChild(p))) : (f = l.createElement(n.defaultTag), p = l.createElement("BR"), f.appendChild(p), o.appendChild(f)), a.setStart(p, 0), a.setEnd(p, 0), a;
    },
    /**
     * @description Returns true if there is no valid "selection".
     * @param {Object} range core.getRange()
     * @returns {Object} range
     * @private
     */
    _selectionVoid: function(o) {
      const a = o.commonAncestorContainer;
      return l.isWysiwygDiv(o.startContainer) && l.isWysiwygDiv(o.endContainer) || /FIGURE/i.test(a.nodeName) || this._fileManager.regExp.test(a.nodeName) || l.isMediaComponent(a);
    },
    /**
     * @description Reset range object to text node selected status.
     * @returns {Boolean} Returns false if there is no valid selection.
     * @private
     */
    _resetRangeToTextNode: function() {
      const o = this.getRange();
      if (this._selectionVoid(o)) return !1;
      let a = o.startContainer, f = o.startOffset, p = o.endContainer, h = o.endOffset, g, m, y;
      if (l.isFormatElement(a))
        for (a.childNodes[f] ? (a = a.childNodes[f] || a, f = 0) : (a = a.lastChild || a, f = a.textContent.length); a && a.nodeType === 1 && a.firstChild; )
          a = a.firstChild || a, f = 0;
      if (l.isFormatElement(p)) {
        for (p = p.childNodes[h] || p.lastChild || p; p && p.nodeType === 1 && p.lastChild; )
          p = p.lastChild;
        h = p.textContent.length;
      }
      if (g = l.isWysiwygDiv(a) ? e.element.wysiwyg.firstChild : a, m = f, l.isBreak(g) || g.nodeType === 1 && g.childNodes.length > 0) {
        const w = l.isBreak(g);
        if (!w) {
          for (; g && !l.isBreak(g) && g.nodeType === 1; )
            g = g.childNodes[m] || g.nextElementSibling || g.nextSibling, m = 0;
          let _ = l.getFormatElement(g, null);
          _ === l.getRangeFormatElement(_, null) && (_ = l.createElement(l.getParentElement(g, l.isCell) ? "DIV" : n.defaultTag), g.parentNode.insertBefore(_, g), _.appendChild(g));
        }
        if (l.isBreak(g)) {
          const _ = l.createTextNode(l.zeroWidthSpace);
          g.parentNode.insertBefore(_, g), g = _, w && a === p && (p = g, h = 1);
        }
      }
      if (a = g, f = m, g = l.isWysiwygDiv(p) ? e.element.wysiwyg.lastChild : p, m = h, l.isBreak(g) || g.nodeType === 1 && g.childNodes.length > 0) {
        const w = l.isBreak(g);
        if (!w) {
          for (; g && !l.isBreak(g) && g.nodeType === 1 && (y = g.childNodes, y.length !== 0); )
            g = y[m > 0 ? m - 1 : m] || !/FIGURE/i.test(y[0].nodeName) ? y[0] : g.previousElementSibling || g.previousSibling || a, m = m > 0 ? g.textContent.length : m;
          let _ = l.getFormatElement(g, null);
          _ === l.getRangeFormatElement(_, null) && (_ = l.createElement(l.isCell(_) ? "DIV" : n.defaultTag), g.parentNode.insertBefore(_, g), _.appendChild(g));
        }
        if (l.isBreak(g)) {
          const _ = l.createTextNode(l.zeroWidthSpace);
          g.parentNode.insertBefore(_, g), g = _, m = 1, w && !g.previousSibling && l.removeItem(p);
        }
      }
      return p = g, h = m, this.setRange(a, f, p, h), !0;
    },
    /**
     * @description Returns a "formatElement"(util.isFormatElement) array from the currently selected range.
     * @param {Function|null} validation The validation function. (Replaces the default validation function-util.isFormatElement(current))
     * @returns {Array}
     */
    getSelectedElements: function(o) {
      if (!this._resetRangeToTextNode()) return [];
      let a = this.getRange();
      if (l.isWysiwygDiv(a.startContainer)) {
        const z = e.element.wysiwyg.children;
        if (z.length === 0) return [];
        this.setRange(z[0], 0, z[z.length - 1], z[z.length - 1].textContent.trim().length), a = this.getRange();
      }
      const f = a.startContainer, p = a.endContainer, h = a.commonAncestorContainer, g = l.getListChildren(h, function(z) {
        return o ? o(z) : l.isFormatElement(z);
      });
      if (!l.isWysiwygDiv(h) && !l.isRangeFormatElement(h) && g.unshift(l.getFormatElement(h, null)), f === p || g.length === 1) return g;
      let m = l.getFormatElement(f, null), y = l.getFormatElement(p, null), w = null, _ = null;
      const k = function(z) {
        return l.isTable(z) ? /^TABLE$/i.test(z.nodeName) : !0;
      };
      let M = l.getRangeFormatElement(m, k), E = l.getRangeFormatElement(y, k);
      l.isTable(M) && l.isListCell(M.parentNode) && (M = M.parentNode), l.isTable(E) && l.isListCell(E.parentNode) && (E = E.parentNode);
      const T = M === E;
      for (let z = 0, V = g.length, U; z < V; z++) {
        if (U = g[z], m === U || !T && U === M) {
          w = z;
          continue;
        }
        if (y === U || !T && U === E) {
          _ = z;
          break;
        }
      }
      return w === null && (w = 0), _ === null && (_ = g.length - 1), g.slice(w, _ + 1);
    },
    /**
     * @description Get format elements and components from the selected area. (P, DIV, H[1-6], OL, UL, TABLE..)
     * If some of the component are included in the selection, get the entire that component.
     * @param {Boolean} removeDuplicate If true, if there is a parent and child tag among the selected elements, the child tag is excluded.
     * @returns {Array}
     */
    getSelectedElementsAndComponents: function(o) {
      const a = this.getRange().commonAncestorContainer, f = l.getParentElement(a, l.isComponent), p = l.isTable(a) ? this.getSelectedElements(null) : this.getSelectedElements((function(h) {
        const g = this.getParentElement(h, this.isComponent);
        return this.isFormatElement(h) && (!g || g === f) || this.isComponent(h) && !this.getFormatElement(h);
      }).bind(l));
      if (o) {
        for (let h = 0, g = p.length; h < g; h++)
          for (let m = h - 1; m >= 0; m--)
            if (p[m].contains(p[h])) {
              p.splice(h, 1), h--, g--;
              break;
            }
      }
      return p;
    },
    /**
     * @description Determine if this offset is the edge offset of container
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String|undefined} dir Select check point - Both edge, Front edge or End edge. ("front": Front edge, "end": End edge, undefined: Both edge)
     * @returns {Boolean}
     */
    isEdgePoint: function(o, a, f) {
      return f !== "end" && a === 0 || (!f || f !== "front") && !o.nodeValue && a === 1 || (!f || f === "end") && !!o.nodeValue && a === o.nodeValue.length;
    },
    /**
     * @description Check if the container and offset values are the edges of the format tag
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String} dir Select check point - "front": Front edge, "end": End edge, undefined: Both edge.
     * @returns {Array|null}
     * @private
     */
    _isEdgeFormat: function(o, a, f) {
      if (!this.isEdgePoint(o, a, f)) return !1;
      const p = [];
      for (f = f === "front" ? "previousSibling" : "nextSibling"; o && !l.isFormatElement(o) && !l.isWysiwygDiv(o); )
        if (!o[f] || l.isBreak(o[f]) && !o[f][f])
          o.nodeType === 1 && p.push(o.cloneNode(!1)), o = o.parentNode;
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
    appendFormatTag: function(o, a) {
      if (!o || !o.parentNode) return null;
      const f = l.getFormatElement(this.getSelectionNode(), null);
      let p = null;
      if (!l.isFormatElement(o) && l.isFreeFormatElement(f || o.parentNode))
        p = l.createElement("BR");
      else {
        const h = a ? typeof a == "string" ? a : a.nodeName : l.isFormatElement(f) && !l.isRangeFormatElement(f) && !l.isFreeFormatElement(f) ? f.nodeName : n.defaultTag;
        p = l.createElement(h), p.innerHTML = "<br>", (a && typeof a != "string" || !a && l.isFormatElement(f)) && l.copyTagAttributes(p, a || f, ["id"]);
      }
      return l.isCell(o) ? o.insertBefore(p, o.nextElementSibling) : o.parentNode.insertBefore(p, o.nextElementSibling), p;
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
    insertComponent: function(o, a, f, p) {
      if (this.isReadOnly || f && !this.checkCharCount(o, null))
        return null;
      const h = this.removeNode();
      this.getRange_addLine(this.getRange(), h.container);
      let g = null, m = this.getSelectionNode(), y = l.getFormatElement(m, null);
      if (l.isListCell(y))
        this.insertNode(o, m === y ? null : h.container.nextSibling, !1), o.nextSibling || o.parentNode.appendChild(l.createElement("BR"));
      else {
        if (this.getRange().collapsed && (h.container.nodeType === 3 || l.isBreak(h.container))) {
          const w = l.getParentElement(h.container, (function(_) {
            return this.isRangeFormatElement(_);
          }).bind(l));
          g = l.splitElement(h.container, h.offset, w ? l.getElementDepth(w) + 1 : 0), g && (y = g.previousSibling);
        }
        this.insertNode(o, l.isRangeFormatElement(y) ? null : y, !1), y && l.onlyZeroWidthSpace(y) && l.removeItem(y);
      }
      if (!p) {
        this.setRange(o, 0, o, 0);
        const w = this.getFileComponent(o);
        w ? this.selectComponent(w.target, w.pluginName) : g && (g = l.getEdgeChildNodes(g, null).sc || g, this.setRange(g, 0, g, 0));
      }
      return a || this.history.push(1), g || o;
    },
    /**
     * @description Gets the file component and that plugin name
     * return: {target, component, pluginName} | null
     * @param {Element} element Target element (figure tag, component div, file tag)
     * @returns {Object|null}
     */
    getFileComponent: function(o) {
      if (!this._fileManager.queryString || !o) return null;
      let a, f;
      return (/^FIGURE$/i.test(o.nodeName) || /se-component/.test(o.className)) && (a = o.querySelector(this._fileManager.queryString)), !a && o.nodeName && this._fileManager.regExp.test(o.nodeName) && (a = o), a && (f = this._fileManager.pluginMap[a.nodeName.toLowerCase()], f) ? {
        target: a,
        component: l.getParentElement(a, l.isComponent),
        pluginName: f
      } : null;
    },
    /**
     * @description The component(image, video) is selected and the resizing module is called.
     * @param {Element} element Element tag (img, iframe, video)
     * @param {String} pluginName Plugin name (image, video)
     */
    selectComponent: function(o, a) {
      if (l.isUneditableComponent(l.getParentElement(o, l.isComponent)) || l.isUneditableComponent(o)) return !1;
      this.hasFocus || this.focus();
      const f = this.plugins[a];
      f && d.setTimeout((function() {
        typeof f.select == "function" && this.callPlugin(a, f.select.bind(this, o), null), this._setComponentLineBreaker(o);
      }).bind(this));
    },
    /**
     * @description Set line breaker of component
     * @param {Element} element Element tag (img, iframe, video)
     * @private
     */
    _setComponentLineBreaker: function(o) {
      this._lineBreaker.style.display = "none";
      const a = l.getParentElement(o, l.isComponent), f = e.element.lineBreaker_t.style, p = e.element.lineBreaker_b.style, h = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : o, g = l.isListCell(a.parentNode);
      let m, y, w;
      (g ? !a.previousSibling : !l.isFormatElement(a.previousElementSibling)) ? (this._variable._lineBreakComp = a, y = e.element.wysiwyg.scrollTop, m = l.getOffset(o, e.element.wysiwygFrame).top + y, w = h.offsetWidth / 2 / 2, f.top = m - y - 12 + "px", f.left = l.getOffset(h).left + w + "px", f.display = "block") : f.display = "none", (g ? !a.nextSibling : !l.isFormatElement(a.nextElementSibling)) ? (m || (this._variable._lineBreakComp = a, y = e.element.wysiwyg.scrollTop, m = l.getOffset(o, e.element.wysiwygFrame).top + y, w = h.offsetWidth / 2 / 2), p.top = m + h.offsetHeight - y - 12 + "px", p.left = l.getOffset(h).left + h.offsetWidth - w - 24 + "px", p.display = "block") : p.display = "none";
    },
    _checkDuplicateNode: function(o, a) {
      (function f(p) {
        u._dupleCheck(p, a);
        const h = p.childNodes;
        for (let g = 0, m = h.length; g < m; g++)
          f(h[g]);
      })(o);
    },
    _dupleCheck: function(o, a) {
      if (!l.isTextStyleElement(o)) return;
      const f = (o.style.cssText.match(/[^;]+;/g) || []).map(function(g) {
        return g.trim();
      }), p = o.nodeName;
      if (/^span$/i.test(p) && f.length === 0) return o;
      let h = !1;
      return function g(m) {
        if (!(l.isWysiwygDiv(m) || !l.isTextStyleElement(m))) {
          if (m.nodeName === p) {
            h = !0;
            const y = m.style.cssText.match(/[^;]+;/g) || [];
            for (let w = 0, _ = y.length, k; w < _; w++)
              (k = f.indexOf(y[w].trim())) > -1 && f.splice(k, 1);
            for (let w = 0, _ = m.classList.length; w < _; w++)
              o.classList.remove(m.classList[w]);
          }
          g(m.parentElement);
        }
      }(a), h && ((o.style.cssText = f.join(" ")) || (o.setAttribute("style", ""), o.removeAttribute("style")), o.attributes.length || o.setAttribute("data-se-duple", "true")), o;
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
    insertNode: function(o, a, f) {
      if (this.isReadOnly || f && !this.checkCharCount(o, null))
        return null;
      let p = null, h = this.getRange(), g = l.isListCell(h.commonAncestorContainer) ? h.commonAncestorContainer : l.getFormatElement(this.getSelectionNode(), null), m = l.isListCell(g) && (l.isListCell(o) || l.isList(o)), y, w, _, k = null;
      const M = l.isFreeFormatElement(g), E = !M && (l.isFormatElement(o) || l.isRangeFormatElement(o)) || l.isComponent(o);
      if (m && (_ = a || l.isList(o) ? g.lastChild : g.nextElementSibling, k = l.isList(o) ? g : (_ || g).parentNode), !a && (E || l.isComponent(o) || l.isMedia(o))) {
        const F = this.isEdgePoint(h.endContainer, h.endOffset, "end"), R = this.removeNode(), H = R.container, S = H === R.prevContainer && h.collapsed ? null : R.prevContainer;
        if (m && S)
          if (k = S.nodeType === 3 ? S.parentNode : S, k.contains(H)) {
            let O = !0;
            for (_ = H; _.parentNode && _.parentNode !== k; )
              _ = _.parentNode, O = !1;
            O && H === S && (_ = _.nextSibling);
          } else
            _ = null;
        else if (m && l.isListCell(H) && !g.parentElement)
          g = l.createElement("LI"), k.appendChild(g), H.appendChild(k), _ = null;
        else if (H.nodeType === 3 || l.isBreak(H) || m) {
          const O = l.getParentElement(H, (function(N) {
            return this.isRangeFormatElement(N) || this.isListCell(N);
          }).bind(l));
          if (a = l.splitElement(H, R.offset, O ? l.getElementDepth(O) + 1 : 0), !a)
            _ = a = g;
          else if (m) {
            if (g.contains(H)) {
              const N = l.isList(g.lastElementChild);
              let I = null;
              F || (I = g.cloneNode(!1), I.appendChild(a.textContent.trim() ? a : l.createTextNode(l.zeroWidthSpace))), N && (I || (I = g.cloneNode(!1), I.appendChild(l.createTextNode(l.zeroWidthSpace))), I.appendChild(g.lastElementChild)), I && (g.parentNode.insertBefore(I, g.nextElementSibling), _ = a = I);
            }
          } else
            a = a.previousSibling;
        }
      }
      h = !a && !E ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const T = h.commonAncestorContainer, z = h.startOffset, V = h.endOffset, U = h.startContainer === T && l.isFormatElement(T), P = U && (T.childNodes[z] || T.childNodes[0]) || h.startContainer, D = U && (T.childNodes[V] || T.childNodes[T.childNodes.length - 1]) || h.endContainer;
      if (!m)
        if (a)
          y = a.parentNode, a = a.nextSibling, w = !0;
        else if (y = P, P.nodeType === 3 && (y = P.parentNode), h.collapsed)
          if (T.nodeType === 3)
            T.textContent.length > V ? a = T.splitText(V) : a = T.nextSibling;
          else if (l.isBreak(y))
            a = y, y = y.parentNode;
          else {
            let F = y.childNodes[z];
            const R = F && F.nodeType === 3 && l.onlyZeroWidthSpace(F) && l.isBreak(F.nextSibling) ? F.nextSibling : F;
            R ? !R.nextSibling && l.isBreak(R) ? (y.removeChild(R), a = null) : a = l.isBreak(R) && !l.isBreak(o) ? R : R.nextSibling : a = null;
          }
        else if (P === D) {
          this.isEdgePoint(D, V) ? a = D.nextSibling : a = D.splitText(V);
          let R = P;
          this.isEdgePoint(P, z) || (R = P.splitText(z)), y.removeChild(R), y.childNodes.length === 0 && E && (y.innerHTML = "<br>");
        } else {
          const R = this.removeNode(), H = R.container, S = R.prevContainer;
          if (H && H.childNodes.length === 0 && E && (l.isFormatElement(H) ? H.innerHTML = "<br>" : l.isRangeFormatElement(H) && (H.innerHTML = "<" + n.defaultTag + "><br></" + n.defaultTag + ">")), l.isListCell(H) && o.nodeType === 3)
            y = H, a = null;
          else if (!E && S)
            if (y = S.nodeType === 3 ? S.parentNode : S, y.contains(H)) {
              let O = !0;
              for (a = H; a.parentNode && a.parentNode !== y; )
                a = a.parentNode, O = !1;
              O && H === S && (a = a.nextSibling);
            } else
              a = null;
          else l.isWysiwygDiv(H) && !l.isFormatElement(o) ? (y = H.appendChild(l.createElement(n.defaultTag)), a = null) : (a = E ? D : H === S ? H.nextSibling : H, y = !a || !a.parentNode ? T : a.parentNode);
          for (; a && !l.isFormatElement(a) && a.parentNode !== T; )
            a = a.parentNode;
        }
      try {
        if (!m) {
          if ((l.isWysiwygDiv(a) || y === e.element.wysiwyg.parentNode) && (y = e.element.wysiwyg, a = null), l.isFormatElement(o) || l.isRangeFormatElement(o) || !l.isListCell(y) && l.isComponent(o)) {
            const F = y;
            if (l.isList(a))
              y = a, a = null;
            else if (l.isListCell(a))
              y = a.previousElementSibling || a;
            else if (!w && !a) {
              const R = this.removeNode(), H = R.container.nodeType === 3 ? l.isListCell(l.getFormatElement(R.container, null)) ? R.container : l.getFormatElement(R.container, null) || R.container.parentNode : R.container, S = l.isWysiwygDiv(H) || l.isRangeFormatElement(H);
              y = S ? H : H.parentNode, a = S ? null : H.nextSibling;
            }
            F.childNodes.length === 0 && y !== F && l.removeItem(F);
          }
          if (E && !M && !l.isRangeFormatElement(y) && !l.isListCell(y) && !l.isWysiwygDiv(y) && (a = y.nextElementSibling, y = y.parentNode), l.isWysiwygDiv(y) && (o.nodeType === 3 || l.isBreak(o))) {
            const F = l.createElement(n.defaultTag);
            F.appendChild(o), p = o, o = F;
          }
        }
        if (m ? k.parentNode ? (y = k, a = _) : (y = e.element.wysiwyg, a = null) : a = y === a ? y.lastChild : a, l.isListCell(o) && !l.isList(y)) {
          if (l.isListCell(y))
            a = y.nextElementSibling, y = y.parentNode;
          else {
            const F = l.createElement("ol");
            y.insertBefore(F, a), y = F, a = null;
          }
          m = !0;
        }
        if (this._checkDuplicateNode(o, y), y.insertBefore(o, a), m)
          if (l.onlyZeroWidthSpace(g.textContent.trim()))
            l.removeItem(g), o = o.lastChild;
          else {
            const F = l.getArrayItem(g.children, l.isList);
            F && (o !== F ? (o.appendChild(F), o = F.previousSibling) : (y.appendChild(o), o = y), l.onlyZeroWidthSpace(g.textContent.trim()) && l.removeItem(g));
          }
      } catch (F) {
        y.appendChild(o), console.warn("[SUNEDITOR.insertNode.warn] " + F);
      } finally {
        p && (o = p);
        const F = y.querySelectorAll("[data-se-duple]");
        if (F.length > 0)
          for (let R = 0, H = F.length, S, O, N, I; R < H; R++) {
            for (S = F[R], N = S.childNodes, I = S.parentNode; N[0]; )
              O = N[0], I.insertBefore(O, S);
            S === o && (o = O), l.removeItem(S);
          }
        if ((l.isFormatElement(o) || l.isComponent(o)) && P === D) {
          const R = l.getFormatElement(T, null);
          R && R.nodeType === 1 && l.isEmptyLine(R) && l.removeItem(R);
        }
        if (M && (l.isFormatElement(o) || l.isRangeFormatElement(o)) && (o = this._setIntoFreeFormat(o)), !l.isComponent(o)) {
          let R = 1;
          if (o.nodeType === 3)
            R = o.textContent.length, this.setRange(o, R, o, R);
          else if (!l.isBreak(o) && !l.isListCell(o) && l.isFormatElement(y)) {
            let H = null;
            (!o.previousSibling || l.isBreak(o.previousSibling)) && (H = l.createTextNode(l.zeroWidthSpace), o.parentNode.insertBefore(H, o)), (!o.nextSibling || l.isBreak(o.nextSibling)) && (H = l.createTextNode(l.zeroWidthSpace), o.parentNode.insertBefore(H, o.nextSibling)), l._isIgnoreNodeChange(o) && (o = o.nextSibling, R = 0);
          }
          this.setRange(o, R, o, R);
        }
        return o;
      }
    },
    _setIntoFreeFormat: function(o) {
      const a = o.parentNode;
      let f, p;
      for (; l.isFormatElement(o) || l.isRangeFormatElement(o); ) {
        for (f = o.childNodes, p = null; f[0]; ) {
          if (p = f[0], l.isFormatElement(p) || l.isRangeFormatElement(p)) {
            if (this._setIntoFreeFormat(p), !o.parentNode) break;
            f = o.childNodes;
            continue;
          }
          a.insertBefore(p, o);
        }
        o.childNodes.length === 0 && l.removeItem(o), o = l.createElement("BR"), a.insertBefore(o, p.nextSibling);
      }
      return o;
    },
    /**
     * @description Delete the currently selected nodes and reset selection range
     * Returns {container: "the last element after deletion", offset: "offset", prevContainer: "previousElementSibling Of the deleted area"}
     * @returns {Object}
     */
    removeNode: function() {
      this._resetRangeToTextNode();
      const o = this.getRange();
      if (o.startContainer === o.endContainer) {
        const R = l.getParentElement(o.startContainer, l.isMediaComponent);
        if (R) {
          const H = l.createElement("BR"), S = l.createElement(n.defaultTag);
          return S.appendChild(H), l.changeElement(R, S), u.setRange(S, 0, S, 0), this.history.push(!0), {
            container: S,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const a = o.startOffset === 0, f = u.isEdgePoint(o.endContainer, o.endOffset, "end");
      let p = null, h = null, g = null;
      a && (h = l.getFormatElement(o.startContainer), h && (p = h.previousElementSibling, h = p)), f && (g = l.getFormatElement(o.endContainer), g = g && g.nextElementSibling);
      let m, y = 0, w = o.startContainer, _ = o.endContainer, k = o.startOffset, M = o.endOffset;
      const E = o.commonAncestorContainer.nodeType === 3 && o.commonAncestorContainer.parentNode === w.parentNode ? w.parentNode : o.commonAncestorContainer;
      if (E === w && E === _ && (w = E.children[k], _ = E.children[M], k = M = 0), !w || !_) return {
        container: E,
        offset: 0
      };
      if (w === _ && o.collapsed && w.textContent && l.onlyZeroWidthSpace(w.textContent.substr(k)))
        return {
          container: w,
          offset: k,
          prevContainer: w && w.parentNode ? w : null
        };
      let T = null, z = null;
      const V = l.getListChildNodes(E, null);
      let U = l.getArrayIndex(V, w), P = l.getArrayIndex(V, _);
      if (V.length > 0 && U > -1 && P > -1) {
        for (let R = U + 1, H = w; R >= 0; R--)
          V[R] === H.parentNode && V[R].firstChild === H && k === 0 && (U = R, H = H.parentNode);
        for (let R = P - 1, H = _; R > U; R--)
          V[R] === H.parentNode && V[R].nodeType === 1 && (V.splice(R, 1), H = H.parentNode, --P);
      } else {
        if (V.length === 0) {
          if (l.isFormatElement(E) || l.isRangeFormatElement(E) || l.isWysiwygDiv(E) || l.isBreak(E) || l.isMedia(E))
            return {
              container: E,
              offset: 0
            };
          if (E.nodeType === 3)
            return {
              container: E,
              offset: M
            };
          V.push(E), w = _ = E;
        } else if (w = _ = V[0], l.isBreak(w) || l.onlyZeroWidthSpace(w))
          return {
            container: l.isMedia(E) ? E : w,
            offset: 0
          };
        U = P = 0;
      }
      for (let R = U; R <= P; R++) {
        const H = V[R];
        if (H.length === 0 || H.nodeType === 3 && H.data === void 0) {
          this._nodeRemoveListItem(H);
          continue;
        }
        if (H === w) {
          if (w.nodeType === 1) {
            if (l.isComponent(w)) continue;
            T = l.createTextNode(w.textContent);
          } else
            H === _ ? (T = l.createTextNode(w.substringData(0, k) + _.substringData(M, _.length - M)), y = k) : T = l.createTextNode(w.substringData(0, k));
          if (T.length > 0 ? w.data = T.data : this._nodeRemoveListItem(w), H === _) break;
          continue;
        }
        if (H === _) {
          if (_.nodeType === 1) {
            if (l.isComponent(_)) continue;
            z = l.createTextNode(_.textContent);
          } else
            z = l.createTextNode(_.substringData(M, _.length - M));
          z.length > 0 ? _.data = z.data : this._nodeRemoveListItem(_);
          continue;
        }
        this._nodeRemoveListItem(H);
      }
      const D = l.getParentElement(_, "ul"), F = l.getParentElement(w, "li");
      if (D && F && F.contains(D) ? (m = D.previousSibling, y = m.textContent.length) : (m = _ && _.parentNode ? _ : w && w.parentNode ? w : o.endContainer || o.startContainer, y = !a && !f ? y : f ? m.textContent.length : 0), !l.isWysiwygDiv(m) && m.childNodes.length === 0) {
        const R = l.removeItemAllParents(m, null, null);
        R && (m = R.sc || R.ec || e.element.wysiwyg);
      }
      return !l.getFormatElement(m) && !(w && w.parentNode) && (g ? (m = g, y = 0) : h && (m = h, y = 1)), this.setRange(m, y, m, y), this.history.push(!0), {
        container: m,
        offset: y,
        prevContainer: p
      };
    },
    _nodeRemoveListItem: function(o) {
      const a = l.getFormatElement(o, null);
      l.removeItem(o), l.isListCell(a) && (l.removeItemAllParents(a, null, null), a && l.isList(a.firstChild) && a.insertBefore(l.createTextNode(l.zeroWidthSpace), a.firstChild));
    },
    /**
     * @description Appended all selected format Element to the argument element and insert
     * @param {Element} rangeElement Element of wrap the arguments (BLOCKQUOTE...)
     */
    applyRangeFormatElement: function(o) {
      this.getRange_addLine(this.getRange(), null);
      const a = this.getSelectedElementsAndComponents(!1);
      if (!a || a.length === 0) return;
      e:
        for (let M = 0, E = a.length, T, z, V, U, P, D; M < E; M++)
          if (T = a[M], !!l.isListCell(T) && (z = T.lastElementChild, z && l.isListCell(T.nextElementSibling) && a.indexOf(T.nextElementSibling) > -1 && (U = z.lastElementChild, a.indexOf(U) > -1))) {
            let F = null;
            for (; F = U.lastElementChild; )
              if (l.isList(F))
                if (a.indexOf(F.lastElementChild) > -1)
                  U = F.lastElementChild;
                else
                  continue e;
            V = z.firstElementChild, P = a.indexOf(V), D = a.indexOf(U), a.splice(P, D - P + 1), E = a.length;
            continue;
          }
      let f = a[a.length - 1], p, h, g;
      l.isRangeFormatElement(f) || l.isFormatElement(f) ? p = f : p = l.getRangeFormatElement(f, null) || l.getFormatElement(f, null), l.isCell(p) ? (h = null, g = p) : (h = p.nextSibling, g = p.parentNode);
      let m = l.getElementDepth(p), y = null;
      const w = [], _ = function(M, E, T) {
        let z = null;
        if (M !== E && !l.isTable(E)) {
          if (E && l.getElementDepth(M) === l.getElementDepth(E)) return T;
          z = l.removeItemAllParents(E, null, M);
        }
        return z ? z.ec : T;
      };
      for (let M = 0, E = a.length, T, z, V, U, P, D, F; M < E; M++)
        if (T = a[M], z = T.parentNode, !(!z || o.contains(z)))
          if (V = l.getElementDepth(T), l.isList(z)) {
            if (y === null && (D ? (y = D, F = !0, D = null) : y = z.cloneNode(!1)), w.push(T), P = a[M + 1], M === E - 1 || P && P.parentNode !== z) {
              P && T.contains(P.parentNode) && (D = P.parentNode.cloneNode(!1));
              let R = z.parentNode, H;
              for (; l.isList(R); )
                H = l.createElement(R.nodeName), H.appendChild(y), y = H, R = R.parentNode;
              const S = this.detachRangeFormatElement(z, w, null, !0, !0);
              m >= V ? (m = V, g = S.cc, h = _(g, z, S.ec), h && (g = h.parentNode)) : g === S.cc && (h = S.ec), g !== S.cc && (U = _(g, S.cc, U), U !== void 0 ? h = U : h = S.cc);
              for (let O = 0, N = S.removeArray.length; O < N; O++)
                y.appendChild(S.removeArray[O]);
              F || o.appendChild(y), D && S.removeArray[S.removeArray.length - 1].appendChild(D), y = null, F = !1;
            }
          } else
            m >= V && (m = V, g = z, h = T.nextSibling), o.appendChild(T), g !== z && (U = _(g, z), U !== void 0 && (h = U));
      if (this.effectNode = null, l.mergeSameTags(o, null, !1), l.mergeNestedTags(o, (function(M) {
        return this.isList(M);
      }).bind(l)), h && l.getElementDepth(h) > 0 && (l.isList(h.parentNode) || l.isList(h.parentNode.parentNode))) {
        const M = l.getParentElement(h, (function(T) {
          return this.isRangeFormatElement(T) && !this.isList(T);
        }).bind(l)), E = l.splitElement(h, null, M ? l.getElementDepth(M) + 1 : 0);
        E.parentNode.insertBefore(o, E);
      } else
        g.insertBefore(o, h), _(o, h);
      const k = l.getEdgeChildNodes(o.firstElementChild, o.lastElementChild);
      a.length > 1 ? this.setRange(k.sc, 0, k.ec, k.ec.textContent.length) : this.setRange(k.ec, k.ec.textContent.length, k.ec, k.ec.textContent.length), this.history.push(!1);
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
    detachRangeFormatElement: function(o, a, f, p, h) {
      const g = this.getRange();
      let m = g.startOffset, y = g.endOffset, w = l.getListChildNodes(o, function(S) {
        return S.parentNode === o;
      }), _ = o.parentNode, k = null, M = null, E = o.cloneNode(!1);
      const T = [], z = l.isList(f);
      let V = !1, U = !1, P = !1;
      function D(S, O, N, I) {
        if (l.onlyZeroWidthSpace(O) && (O.innerHTML = l.zeroWidthSpace, m = y = 1), O.nodeType === 3)
          return S.insertBefore(O, N), O;
        const q = (P ? O : I).childNodes;
        let $ = O.cloneNode(!1), K = null, G = null;
        for (; q[0]; )
          G = q[0], l._notTextNode(G) && !l.isBreak(G) && !l.isListCell($) ? ($.childNodes.length > 0 && (K || (K = $), S.insertBefore($, N), $ = O.cloneNode(!1)), S.insertBefore(G, N), K || (K = G)) : $.appendChild(G);
        if ($.childNodes.length > 0) {
          if (l.isListCell(S) && l.isListCell($) && l.isList(N))
            if (z) {
              for (K = N; N; )
                $.appendChild(N), N = N.nextSibling;
              S.parentNode.insertBefore($, S.nextElementSibling);
            } else {
              const j = I.nextElementSibling, ee = l.detachNestedList(I, !1);
              if (o !== ee || j !== I.nextElementSibling) {
                const se = $.childNodes;
                for (; se[0]; )
                  I.appendChild(se[0]);
                o = ee, U = !0;
              }
            }
          else
            S.insertBefore($, N);
          K || (K = $);
        }
        return K;
      }
      for (let S = 0, O = w.length, N, I, q; S < O; S++)
        if (N = w[S], !(N.nodeType === 3 && l.isList(E)))
          if (P = !1, p && S === 0 && (!a || a.length === O || a[0] === N ? k = o.previousSibling : k = E), a && (I = a.indexOf(N)), a && I === -1)
            E || (E = o.cloneNode(!1)), E.appendChild(N);
          else {
            if (a && (q = a[I + 1]), E && E.children.length > 0 && (_.insertBefore(E, o), E = null), !z && l.isListCell(N))
              if (q && l.getElementDepth(N) !== l.getElementDepth(q) && (l.isListCell(_) || l.getArrayItem(N.children, l.isList, !1))) {
                const $ = N.nextElementSibling, K = l.detachNestedList(N, !1);
                (o !== K || $ !== N.nextElementSibling) && (o = K, U = !0);
              } else {
                const $ = N;
                N = l.createElement(p ? $.nodeName : l.isList(o.parentNode) || l.isListCell(o.parentNode) ? "LI" : l.isCell(o.parentNode) ? "DIV" : n.defaultTag);
                const K = l.isListCell(N), G = $.childNodes;
                for (; G[0] && !(l.isList(G[0]) && !K); )
                  N.appendChild(G[0]);
                l.copyFormatAttributes(N, $), P = !0;
              }
            else
              N = N.cloneNode(!1);
            if (!U && (p ? (T.push(N), l.removeItem(w[S])) : (f ? (V || (_.insertBefore(f, o), V = !0), N = D(f, N, null, w[S])) : N = D(_, N, o, w[S]), U || (a ? (M = N, k || (k = N)) : k || (k = M = N))), U)) {
              U = P = !1, w = l.getListChildNodes(o, function($) {
                return $.parentNode === o;
              }), E = o.cloneNode(!1), _ = o.parentNode, S = -1, O = w.length;
              continue;
            }
          }
      const F = o.parentNode;
      let R = o.nextSibling;
      E && E.children.length > 0 && F.insertBefore(E, R), f ? k = f.previousSibling : k || (k = o.previousSibling), R = o.nextSibling !== E ? o.nextSibling : E ? E.nextSibling : null, o.children.length === 0 || o.textContent.length === 0 ? l.removeItem(o) : l.removeEmptyNode(o, null, !1);
      let H = null;
      if (p)
        H = {
          cc: F,
          sc: k,
          so: m,
          ec: R,
          eo: y,
          removeArray: T
        };
      else {
        k || (k = M), M || (M = k);
        const S = l.getEdgeChildNodes(k, M.parentNode ? k : M);
        H = {
          cc: (S.sc || S.ec).parentNode,
          sc: S.sc,
          so: m,
          ec: S.ec,
          eo: y,
          removeArray: null
        };
      }
      if (this.effectNode = null, h) return H;
      !p && H && (a ? this.setRange(H.sc, m, H.ec, y) : this.setRange(H.sc, 0, H.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(o, a) {
      let f = {}, p = !1, h = !1, g = null, m = null;
      const y = (function(w) {
        return !this.isComponent(w);
      }).bind(l);
      for (let w = 0, _ = o.length, k, M, E, T; w < _; w++) {
        if (E = w === _ - 1, M = l.getRangeFormatElement(o[w], y), T = l.isList(M), !k && T)
          k = M, f = { r: k, f: [l.getParentElement(o[w], "LI")] }, w === 0 && (p = !0);
        else if (k && T)
          if (k !== M) {
            const z = this.detachRangeFormatElement(f.f[0].parentNode, f.f, null, a, !0);
            M = o[w].parentNode, p && (g = z.sc, p = !1), E && (m = z.ec), T ? (k = M, f = { r: k, f: [l.getParentElement(o[w], "LI")] }, E && (h = !0)) : k = null;
          } else
            f.f.push(l.getParentElement(o[w], "LI")), E && (h = !0);
        if (E && l.isList(k)) {
          const z = this.detachRangeFormatElement(f.f[0].parentNode, f.f, null, a, !0);
          (h || _ === 1) && (m = z.ec), p && (g = z.sc || m);
        }
      }
      return {
        sc: g,
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
    nodeChange: function(o, a, f, p) {
      this._resetRangeToTextNode();
      let h = this.getRange_addLine(this.getRange(), null);
      a = a && a.length > 0 ? a : !1, f = f && f.length > 0 ? f : !1;
      const g = !o, m = g && !f && !a;
      let y = h.startContainer, w = h.startOffset, _ = h.endContainer, k = h.endOffset;
      if (m && h.collapsed && l.isFormatElement(y.parentNode) || y === _ && y.nodeType === 1 && l.isNonEditable(y)) {
        const G = y.parentNode;
        if (!l.isListCell(G) || !l.getValues(G.style).some((function(j) {
          return this._listKebab.indexOf(j) > -1;
        }).bind(this))) return;
      }
      if (h.collapsed && !m && y.nodeType === 1 && !l.isBreak(y) && !l.isComponent(y)) {
        let G = null;
        const j = y.childNodes[w];
        j && (j.nextSibling ? G = l.isBreak(j) ? j : j.nextSibling : G = null);
        const ee = l.createTextNode(l.zeroWidthSpace);
        y.insertBefore(ee, G), this.setRange(ee, 1, ee, 1), h = this.getRange(), y = h.startContainer, w = h.startOffset, _ = h.endContainer, k = h.endOffset;
      }
      l.isFormatElement(y) && (y = y.childNodes[w] || y.firstChild, w = 0), l.isFormatElement(_) && (_ = _.childNodes[k] || _.lastChild, k = _.textContent.length), g && (o = l.createElement("DIV"));
      const M = d.RegExp, E = o.nodeName;
      if (!m && y === _ && !f && o) {
        let G = y, j = 0;
        const ee = [], se = o.style;
        for (let ce = 0, fe = se.length; ce < fe; ce++)
          ee.push(se[ce]);
        const re = o.classList;
        for (let ce = 0, fe = re.length; ce < fe; ce++)
          ee.push("." + re[ce]);
        if (ee.length > 0) {
          for (; !l.isFormatElement(G) && !l.isWysiwygDiv(G); ) {
            for (let ce = 0; ce < ee.length; ce++)
              if (G.nodeType === 1) {
                const fe = ee[ce], Ee = /^\./.test(fe) ? new M("\\s*" + fe.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, Me = g ? !!G.style[fe] : !!G.style[fe] && !!o.style[fe] && G.style[fe] === o.style[fe], pe = Ee === !1 ? !1 : g ? !!G.className.match(Ee) : !!G.className.match(Ee) && !!o.className.match(Ee);
                (Me || pe) && j++;
              }
            G = G.parentNode;
          }
          if (j >= ee.length) return;
        }
      }
      let T = {}, z = {}, V, U = "", P = "", D = "";
      if (a) {
        for (let G = 0, j = a.length, ee; G < j; G++)
          ee = a[G], /^\./.test(ee) ? P += (P ? "|" : "\\s*(?:") + ee.replace(/^\./, "") : U += (U ? "|" : "(?:;|^|\\s)(?:") + ee;
        U && (U += ")\\s*:[^;]*\\s*(?:;|$)", U = new M(U, "ig")), P && (P += ")(?=\\s+|$)", P = new M(P, "ig"));
      }
      if (f) {
        D = "^(?:" + f[0];
        for (let G = 1; G < f.length; G++)
          D += "|" + f[G];
        D += ")$", D = new M(D, "i");
      }
      const F = d.Boolean, R = { v: !1 }, H = function(G) {
        const j = G.cloneNode(!1);
        if (j.nodeType === 3 || l.isBreak(j)) return j;
        if (m) return null;
        const ee = !D && g || D && D.test(j.nodeName);
        if (ee && !p)
          return R.v = !0, null;
        const se = j.style.cssText;
        let re = "";
        U && se.length > 0 && (re = se.replace(U, "").trim(), re !== se && (R.v = !0));
        const ce = j.className;
        let fe = "";
        return P && ce.length > 0 && (fe = ce.replace(P, "").trim(), fe !== ce && (R.v = !0)), g && (P || !ce) && (U || !se) && !re && !fe && ee ? (R.v = !0, null) : re || fe || j.nodeName !== E || F(U) !== F(se) || F(P) !== F(ce) ? (U && se.length > 0 && (j.style.cssText = re), j.style.cssText || j.removeAttribute("style"), P && ce.length > 0 && (j.className = fe.trim()), j.className.trim() || j.removeAttribute("class"), !j.style.cssText && !j.className && (j.nodeName === E || ee) ? (R.v = !0, null) : j) : (R.v = !0, null);
      }, S = this.getSelectedElements(null);
      h = this.getRange(), y = h.startContainer, w = h.startOffset, _ = h.endContainer, k = h.endOffset, l.getFormatElement(y, null) || (y = l.getChildElement(S[0], function(G) {
        return G.nodeType === 3;
      }, !1), w = 0), l.getFormatElement(_, null) || (_ = l.getChildElement(S[S.length - 1], function(G) {
        return G.nodeType === 3;
      }, !1), k = _.textContent.length);
      const O = l.getFormatElement(y, null) === l.getFormatElement(_, null), N = S.length - (O ? 0 : 1);
      V = o.cloneNode(!1);
      const I = m || g && function(G) {
        for (let j = 0, ee = G.length; j < ee; j++)
          if (l._isMaintainedNode(G[j]) || l._isSizeNode(G[j])) return !0;
        return !1;
      }(f), q = g || l._isSizeNode(V), $ = this._util_getMaintainedNode.bind(l, I, q), K = this._util_isMaintainedNode.bind(l, I, q);
      if (O) {
        this._resetCommonListCell(S[0], a) && (h = this.setRange(y, w, _, k));
        const G = this._nodeChange_oneLine(S[0], V, H, y, w, _, k, m, g, h.collapsed, R, $, K);
        T.container = G.startContainer, T.offset = G.startOffset, z.container = G.endContainer, z.offset = G.endOffset, T.container === z.container && l.onlyZeroWidthSpace(T.container) && (T.offset = z.offset = 1), this._setCommonListStyle(G.ancestor, null);
      } else {
        let G = !1;
        N > 0 && this._resetCommonListCell(S[N], a) && (G = !0), this._resetCommonListCell(S[0], a) && (G = !0), G && this.setRange(y, w, _, k), N > 0 && (V = o.cloneNode(!1), z = this._nodeChange_endLine(S[N], V, H, _, k, m, g, R, $, K));
        for (let j = N - 1, ee; j > 0; j--)
          this._resetCommonListCell(S[j], a), V = o.cloneNode(!1), ee = this._nodeChange_middleLine(S[j], V, H, m, g, R, z.container), ee.endContainer && ee.ancestor.contains(ee.endContainer) && (z.ancestor = null, z.container = ee.endContainer), this._setCommonListStyle(ee.ancestor, null);
        V = o.cloneNode(!1), T = this._nodeChange_startLine(S[0], V, H, y, w, m, g, R, $, K, z.container), T.endContainer && (z.ancestor = null, z.container = T.endContainer), N <= 0 ? z = T : z.container || (z.ancestor = null, z.container = T.container, z.offset = T.container.textContent.length), this._setCommonListStyle(T.ancestor, null), this._setCommonListStyle(z.ancestor || l.getFormatElement(z.container), null);
      }
      this.controllersOff(), this.setRange(T.container, T.offset, z.container, z.offset), this.history.push(!1);
    },
    /**
     * @description Reset common style of list cell
     * @param {Element} el List cell element. <li>
     * @param {Array|null} styleArray Style array
     * @private
     */
    _resetCommonListCell: function(o, a) {
      if (!l.isListCell(o)) return;
      a || (a = this._listKebab);
      const f = l.getArrayItem(o.childNodes, function(M) {
        return !l.isBreak(M);
      }, !0), p = o.style, h = [], g = [], m = l.getValues(p);
      for (let M = 0, E = this._listKebab.length; M < E; M++)
        m.indexOf(this._listKebab[M]) > -1 && a.indexOf(this._listKebab[M]) > -1 && (h.push(this._listCamel[M]), g.push(this._listKebab[M]));
      if (!h.length) return;
      const y = l.createElement("SPAN");
      for (let M = 0, E = h.length; M < E; M++)
        y.style[h[M]] = p[g[M]], p.removeProperty(g[M]);
      let w = y.cloneNode(!1), _ = null, k = !1;
      for (let M = 0, E = f.length, T, z; M < E; M++)
        T = f[M], !n._textTagsMap[T.nodeName.toLowerCase()] && (z = l.getValues(T.style), z.length === 0 || h.some(function(V) {
          return z.indexOf(V) === -1;
        }) && z.some(function(V) {
        }) ? (_ = T.nextSibling, w.appendChild(T)) : w.childNodes.length > 0 && (o.insertBefore(w, _), w = y.cloneNode(!1), _ = null, k = !0));
      return w.childNodes.length > 0 && (o.insertBefore(w, _), k = !0), p.length || o.removeAttribute("style"), k;
    },
    /**
     * @description If certain styles are applied to all child nodes of the list cell, the style of the list cell is also changed. (bold, color, size)
     * @param {Element} el List cell element. <li>
     * @param {Element|null} child Variable for recursive call. ("null" on the first call)
     * @private
     */
    _setCommonListStyle: function(o, a) {
      if (!l.isListCell(o)) return;
      const f = l.getArrayItem((a || o).childNodes, function(w) {
        return !l.isBreak(w);
      }, !0);
      if (a = f[0], !a || f.length > 1 || a.nodeType !== 1) return;
      const p = a.style, h = o.style, g = a.nodeName.toLowerCase();
      let m = !1;
      n._textTagsMap[g] === n._defaultCommand.bold.toLowerCase() && (h.fontWeight = "bold"), n._textTagsMap[g] === n._defaultCommand.italic.toLowerCase() && (h.fontStyle = "italic");
      const y = l.getValues(p);
      if (y.length > 0)
        for (let w = 0, _ = this._listCamel.length; w < _; w++)
          y.indexOf(this._listKebab[w]) > -1 && (h[this._listCamel[w]] = p[this._listCamel[w]], p.removeProperty(this._listKebab[w]), m = !0);
      if (this._setCommonListStyle(o, a), !!m && !p.length) {
        const w = a.childNodes, _ = a.parentNode, k = a.nextSibling;
        for (; w.length > 0; )
          _.insertBefore(w[0], k);
        l.removeItem(a);
      }
    },
    /**
     * @description Strip remove node
     * @param {Node} removeNode The remove node
     * @private
     */
    _stripRemoveNode: function(o) {
      const a = o.parentNode;
      if (!o || o.nodeType === 3 || !a) return;
      const f = o.childNodes;
      for (; f[0]; )
        a.insertBefore(f[0], o);
      a.removeChild(o);
    },
    /**
     * @description Return the parent maintained tag. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_getMaintainedNode: function(o, a, f) {
      return !f || o ? null : this.getParentElement(f, this._isMaintainedNode.bind(this)) || (a ? null : this.getParentElement(f, this._isSizeNode.bind(this)));
    },
    /**
     * @description Check if element is a tag that should be persisted. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_isMaintainedNode: function(o, a, f) {
      if (!f || o || f.nodeType !== 1) return !1;
      const p = this._isMaintainedNode(f);
      return this.getParentElement(f, this._isMaintainedNode.bind(this)) ? p : p || (a ? !1 : this._isSizeNode(f));
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
    _nodeChange_oneLine: function(o, a, f, p, h, g, m, y, w, _, k, M, E) {
      let T = p.parentNode;
      for (; !T.nextSibling && !T.previousSibling && !l.isFormatElement(T.parentNode) && !l.isWysiwygDiv(T.parentNode) && T.nodeName !== a.nodeName; )
        T = T.parentNode;
      if (!w && T === g.parentNode && T.nodeName === a.nodeName && l.onlyZeroWidthSpace(p.textContent.slice(0, h)) && l.onlyZeroWidthSpace(g.textContent.slice(m))) {
        const pe = T.childNodes;
        let Ne = !0;
        for (let ve = 0, Ue = pe.length, Ie, De, Re, ge; ve < Ue; ve++) {
          if (Ie = pe[ve], ge = !l.onlyZeroWidthSpace(Ie), Ie === p) {
            De = !0;
            continue;
          }
          if (Ie === g) {
            Re = !0;
            continue;
          }
          if (!De && ge || De && Re && ge) {
            Ne = !1;
            break;
          }
        }
        if (Ne)
          return l.copyTagAttributes(T, a), {
            ancestor: o,
            startContainer: p,
            startOffset: h,
            endContainer: g,
            endOffset: m
          };
      }
      k.v = !1;
      const z = o, V = [a], U = o.cloneNode(!1), P = p === g;
      let D = p, F = h, R = g, H = m, S = !1, O = !1, N, I, q, $, K;
      const G = d.RegExp;
      function j(pe) {
        const Ne = new G("(?:;|^|\\s)(?:" + $ + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let ve = "";
        return Ne && pe.style.cssText.length > 0 && (ve = Ne.test(pe.style.cssText)), !ve;
      }
      if (function pe(Ne, ve) {
        const Ue = Ne.childNodes;
        for (let Ie = 0, De = Ue.length, Re; Ie < De; Ie++) {
          let ge = Ue[Ie];
          if (!ge) continue;
          let dt = ve, Ze;
          if (!S && ge === D) {
            let He = U;
            K = M(ge);
            const Se = l.createTextNode(D.nodeType === 1 ? "" : D.substringData(0, F)), Ae = l.createTextNode(
              D.nodeType === 1 ? "" : D.substringData(
                F,
                P && H >= F ? H - F : D.data.length - F
              )
            );
            if (K) {
              const Qe = M(ve);
              if (Qe && Qe.parentNode !== He) {
                let Ve = Qe, je = null;
                for (; Ve.parentNode !== He; ) {
                  for (ve = je = Ve.parentNode.cloneNode(!1); Ve.childNodes[0]; )
                    je.appendChild(Ve.childNodes[0]);
                  Ve.appendChild(je), Ve = Ve.parentNode;
                }
                Ve.parentNode.appendChild(Qe);
              }
              K = K.cloneNode(!1);
            }
            l.onlyZeroWidthSpace(Se) || ve.appendChild(Se);
            const ze = M(ve);
            for (ze && (K = ze), K && (He = K), I = ge, N = [], $ = ""; I !== He && I !== z && I !== null; )
              Re = E(I) ? null : f(I), Re && I.nodeType === 1 && j(I) && (N.push(Re), $ += I.style.cssText.substr(0, I.style.cssText.indexOf(":")) + "|"), I = I.parentNode;
            const Je = N.pop() || Ae;
            for (q = I = Je; N.length > 0; )
              I = N.pop(), q.appendChild(I), q = I;
            if (a.appendChild(Je), He.appendChild(a), K && !M(R) && (a = a.cloneNode(!1), U.appendChild(a), V.push(a)), D = Ae, F = 0, S = !0, I !== Ae && I.appendChild(D), !P) continue;
          }
          if (!O && ge === R) {
            K = M(ge);
            const He = l.createTextNode(R.nodeType === 1 ? "" : R.substringData(H, R.length - H)), Se = l.createTextNode(P || R.nodeType === 1 ? "" : R.substringData(0, H));
            if (K ? K = K.cloneNode(!1) : E(a.parentNode) && !K && (a = a.cloneNode(!1), U.appendChild(a), V.push(a)), !l.onlyZeroWidthSpace(He)) {
              I = ge, $ = "", N = [];
              const ze = [];
              for (; I !== U && I !== z && I !== null; )
                I.nodeType === 1 && j(I) && (E(I) ? ze.push(I.cloneNode(!1)) : N.push(I.cloneNode(!1)), $ += I.style.cssText.substr(0, I.style.cssText.indexOf(":")) + "|"), I = I.parentNode;
              for (N = N.concat(ze), Ze = q = I = N.pop() || He; N.length > 0; )
                I = N.pop(), q.appendChild(I), q = I;
              U.appendChild(Ze), I.textContent = He.data;
            }
            if (K && Ze) {
              const ze = M(Ze);
              ze && (K = ze);
            }
            for (I = ge, N = [], $ = ""; I !== U && I !== z && I !== null; )
              Re = E(I) ? null : f(I), Re && I.nodeType === 1 && j(I) && (N.push(Re), $ += I.style.cssText.substr(0, I.style.cssText.indexOf(":")) + "|"), I = I.parentNode;
            const Ae = N.pop() || Se;
            for (q = I = Ae; N.length > 0; )
              I = N.pop(), q.appendChild(I), q = I;
            K ? (a = a.cloneNode(!1), a.appendChild(Ae), K.insertBefore(a, K.firstChild), U.appendChild(K), V.push(a), K = null) : a.appendChild(Ae), R = Se, H = Se.data.length, O = !0, !y && _ && (a = Se, Se.textContent = l.zeroWidthSpace), I !== Se && I.appendChild(R);
            continue;
          }
          if (S) {
            if (ge.nodeType === 1 && !l.isBreak(ge)) {
              l._isIgnoreNodeChange(ge) ? (U.appendChild(ge.cloneNode(!0)), _ || (a = a.cloneNode(!1), U.appendChild(a), V.push(a))) : pe(ge, ge);
              continue;
            }
            I = ge, N = [], $ = "";
            const He = [];
            for (; I.parentNode !== null && I !== z && I !== a; )
              Re = O ? I.cloneNode(!1) : f(I), I.nodeType === 1 && !l.isBreak(ge) && Re && j(I) && (E(I) ? K || He.push(Re) : N.push(Re), $ += I.style.cssText.substr(0, I.style.cssText.indexOf(":")) + "|"), I = I.parentNode;
            N = N.concat(He);
            const Se = N.pop() || ge;
            for (q = I = Se; N.length > 0; )
              I = N.pop(), q.appendChild(I), q = I;
            if (E(a.parentNode) && !E(Se) && !l.onlyZeroWidthSpace(a) && (a = a.cloneNode(!1), U.appendChild(a), V.push(a)), !O && !K && E(Se)) {
              a = a.cloneNode(!1);
              const Ae = Se.childNodes;
              for (let ze = 0, Je = Ae.length; ze < Je; ze++)
                a.appendChild(Ae[ze]);
              Se.appendChild(a), U.appendChild(Se), V.push(a), a.children.length > 0 ? ve = I : ve = a;
            } else Se === ge ? O ? ve = U : ve = a : O ? (U.appendChild(Se), ve = I) : (a.appendChild(Se), ve = I);
            if (K && ge.nodeType === 3)
              if (M(ge)) {
                const Ae = l.getParentElement(ve, (function(ze) {
                  return this._isMaintainedNode(ze.parentNode) || ze.parentNode === U;
                }).bind(l));
                K.appendChild(Ae), a = Ae.cloneNode(!1), V.push(a), U.appendChild(a);
              } else
                K = null;
          }
          Ze = ge.cloneNode(!1), ve.appendChild(Ze), ge.nodeType === 1 && !l.isBreak(ge) && (dt = Ze), pe(ge, dt);
        }
      }(o, U), w && !y && !k.v)
        return {
          ancestor: o,
          startContainer: p,
          startOffset: h,
          endContainer: g,
          endOffset: m
        };
      if (y = y && w, y)
        for (let pe = 0; pe < V.length; pe++) {
          let Ne = V[pe], ve, Ue, Ie;
          if (_)
            ve = l.createTextNode(l.zeroWidthSpace), U.replaceChild(ve, Ne);
          else {
            const De = Ne.childNodes;
            for (Ue = De[0]; De[0]; )
              Ie = De[0], U.insertBefore(Ie, Ne);
            l.removeItem(Ne);
          }
          pe === 0 && (_ ? D = R = ve : (D = Ue, R = Ie));
        }
      else {
        if (w)
          for (let pe = 0; pe < V.length; pe++)
            this._stripRemoveNode(V[pe]);
        _ && (D = R = a);
      }
      l.removeEmptyNode(U, a, !1), _ && (F = D.textContent.length, H = R.textContent.length);
      const ee = y || R.textContent.length === 0;
      !l.isBreak(R) && R.textContent.length === 0 && (l.removeItem(R), R = D), H = ee ? R.textContent.length : H;
      const se = { s: 0, e: 0 }, re = l.getNodePath(D, U, se), ce = !R.parentNode;
      ce && (R = D);
      const fe = { s: 0, e: 0 }, Ee = l.getNodePath(R, U, !ce && !ee ? fe : null);
      F += se.s, H = _ ? F : ce ? D.textContent.length : ee ? H + se.s : H + fe.s;
      const Me = l.mergeSameTags(U, [re, Ee], !0);
      return o.parentNode.replaceChild(U, o), D = l.getNodeFromPath(re, U), R = l.getNodeFromPath(Ee, U), {
        ancestor: U,
        startContainer: D,
        startOffset: F + Me[0],
        endContainer: R,
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
    _nodeChange_startLine: function(o, a, f, p, h, g, m, y, w, _, k) {
      let M = p.parentNode;
      for (; !M.nextSibling && !M.previousSibling && !l.isFormatElement(M.parentNode) && !l.isWysiwygDiv(M.parentNode) && M.nodeName !== a.nodeName; )
        M = M.parentNode;
      if (!m && M.nodeName === a.nodeName && !l.isFormatElement(M) && !M.nextSibling && l.onlyZeroWidthSpace(p.textContent.slice(0, h))) {
        let S = !0, O = p.previousSibling;
        for (; O; ) {
          if (!l.onlyZeroWidthSpace(O)) {
            S = !1;
            break;
          }
          O = O.previousSibling;
        }
        if (S)
          return l.copyTagAttributes(M, a), {
            ancestor: o,
            container: p,
            offset: h
          };
      }
      y.v = !1;
      const E = o, T = [a], z = o.cloneNode(!1);
      let V = p, U = h, P = !1, D, F, R, H;
      if (function S(O, N) {
        const I = O.childNodes;
        for (let q = 0, $ = I.length, K, G; q < $; q++) {
          const j = I[q];
          if (!j) continue;
          let ee = N;
          if (P && !l.isBreak(j)) {
            if (j.nodeType === 1) {
              if (l._isIgnoreNodeChange(j)) {
                if (a = a.cloneNode(!1), G = j.cloneNode(!0), z.appendChild(G), z.appendChild(a), T.push(a), k && j.contains(k)) {
                  const fe = l.getNodePath(k, j);
                  k = l.getNodeFromPath(fe, G);
                }
              } else
                S(j, j);
              continue;
            }
            F = j, D = [];
            const se = [];
            for (; F.parentNode !== null && F !== E && F !== a; )
              K = f(F), F.nodeType === 1 && K && (_(F) ? H || se.push(K) : D.push(K)), F = F.parentNode;
            D = D.concat(se);
            const re = D.length > 0, ce = D.pop() || j;
            for (R = F = ce; D.length > 0; )
              F = D.pop(), R.appendChild(F), R = F;
            if (_(a.parentNode) && !_(ce) && (a = a.cloneNode(!1), z.appendChild(a), T.push(a)), !H && _(ce)) {
              a = a.cloneNode(!1);
              const fe = ce.childNodes;
              for (let Ee = 0, Me = fe.length; Ee < Me; Ee++)
                a.appendChild(fe[Ee]);
              ce.appendChild(a), z.appendChild(ce), N = _(F) ? a : F, T.push(a);
            } else re ? (a.appendChild(ce), N = F) : N = a;
            if (H && j.nodeType === 3)
              if (w(j)) {
                const fe = l.getParentElement(N, (function(Ee) {
                  return this._isMaintainedNode(Ee.parentNode) || Ee.parentNode === z;
                }).bind(l));
                H.appendChild(fe), a = fe.cloneNode(!1), T.push(a), z.appendChild(a);
              } else
                H = null;
          }
          if (!P && j === V) {
            let se = z;
            H = w(j);
            const re = l.createTextNode(V.nodeType === 1 ? "" : V.substringData(0, U)), ce = l.createTextNode(V.nodeType === 1 ? "" : V.substringData(U, V.length - U));
            if (H) {
              const Me = w(N);
              if (Me && Me.parentNode !== se) {
                let pe = Me, Ne = null;
                for (; pe.parentNode !== se; ) {
                  for (N = Ne = pe.parentNode.cloneNode(!1); pe.childNodes[0]; )
                    Ne.appendChild(pe.childNodes[0]);
                  pe.appendChild(Ne), pe = pe.parentNode;
                }
                pe.parentNode.appendChild(Me);
              }
              H = H.cloneNode(!1);
            }
            l.onlyZeroWidthSpace(re) || N.appendChild(re);
            const fe = w(N);
            for (fe && (H = fe), H && (se = H), F = N, D = []; F !== se && F !== null; )
              K = f(F), F.nodeType === 1 && K && D.push(K), F = F.parentNode;
            const Ee = D.pop() || N;
            for (R = F = Ee; D.length > 0; )
              F = D.pop(), R.appendChild(F), R = F;
            Ee !== N ? (a.appendChild(Ee), N = F) : N = a, l.isBreak(j) && a.appendChild(j.cloneNode(!1)), se.appendChild(a), V = ce, U = 0, P = !0, N.appendChild(V);
            continue;
          }
          K = P ? f(j) : j.cloneNode(!1), K && (N.appendChild(K), j.nodeType === 1 && !l.isBreak(j) && (ee = K)), S(j, ee);
        }
      }(o, z), m && !g && !y.v)
        return {
          ancestor: o,
          container: p,
          offset: h,
          endContainer: k
        };
      if (g = g && m, g)
        for (let S = 0; S < T.length; S++) {
          let O = T[S];
          const N = O.childNodes, I = N[0];
          for (; N[0]; )
            z.insertBefore(N[0], O);
          l.removeItem(O), S === 0 && (V = I);
        }
      else if (m) {
        a = a.firstChild;
        for (let S = 0; S < T.length; S++)
          this._stripRemoveNode(T[S]);
      }
      if (!g && z.childNodes.length === 0)
        o.childNodes ? V = o.childNodes[0] : (V = l.createTextNode(l.zeroWidthSpace), o.appendChild(V));
      else {
        l.removeEmptyNode(z, a, !1), l.onlyZeroWidthSpace(z.textContent) && (V = z.firstChild, U = 0);
        const S = { s: 0, e: 0 }, O = l.getNodePath(V, z, S);
        U += S.s;
        const N = l.mergeSameTags(z, [O], !0);
        o.parentNode.replaceChild(z, o), V = l.getNodeFromPath(O, z), U += N[0];
      }
      return {
        ancestor: z,
        container: V,
        offset: U,
        endContainer: k
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
    _nodeChange_middleLine: function(o, a, f, p, h, g, m) {
      if (!h) {
        let k = null;
        m && o.contains(m) && (k = l.getNodePath(m, o));
        const M = o.cloneNode(!0), E = a.nodeName, T = a.style.cssText, z = a.className;
        let V = M.childNodes, U = 0, P = V.length;
        for (let D; U < P && (D = V[U], D.nodeType !== 3); U++)
          if (D.nodeName === E)
            D.style.cssText += T, l.addClass(D, z);
          else {
            if (!l.isBreak(D) && l._isIgnoreNodeChange(D))
              continue;
            if (P === 1) {
              V = D.childNodes, P = V.length, U = -1;
              continue;
            } else
              break;
          }
        if (P > 0 && U === P)
          return o.innerHTML = M.innerHTML, {
            ancestor: o,
            endContainer: k ? l.getNodeFromPath(k, o) : null
          };
      }
      g.v = !1;
      const y = o.cloneNode(!1), w = [a];
      let _ = !0;
      if (function k(M, E) {
        const T = M.childNodes;
        for (let z = 0, V = T.length, U, P; z < V; z++) {
          let D = T[z];
          if (!D) continue;
          let F = E;
          if (!l.isBreak(D) && l._isIgnoreNodeChange(D)) {
            if (a.childNodes.length > 0 && (y.appendChild(a), a = a.cloneNode(!1)), P = D.cloneNode(!0), y.appendChild(P), y.appendChild(a), w.push(a), E = a, m && D.contains(m)) {
              const R = l.getNodePath(m, D);
              m = l.getNodeFromPath(R, P);
            }
            continue;
          } else
            U = f(D), U && (_ = !1, E.appendChild(U), D.nodeType === 1 && (F = U));
          l.isBreak(D) || k(D, F);
        }
      }(o, a), _ || h && !p && !g.v) return { ancestor: o, endContainer: m };
      if (y.appendChild(a), p && h)
        for (let k = 0; k < w.length; k++) {
          let M = w[k];
          const E = M.childNodes;
          for (; E[0]; )
            y.insertBefore(E[0], M);
          l.removeItem(M);
        }
      else if (h) {
        a = a.firstChild;
        for (let k = 0; k < w.length; k++)
          this._stripRemoveNode(w[k]);
      }
      return l.removeEmptyNode(y, a, !1), l.mergeSameTags(y, null, !0), o.parentNode.replaceChild(y, o), { ancestor: y, endContainer: m };
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
    _nodeChange_endLine: function(o, a, f, p, h, g, m, y, w, _) {
      let k = p.parentNode;
      for (; !k.nextSibling && !k.previousSibling && !l.isFormatElement(k.parentNode) && !l.isWysiwygDiv(k.parentNode) && k.nodeName !== a.nodeName; )
        k = k.parentNode;
      if (!m && k.nodeName === a.nodeName && !l.isFormatElement(k) && !k.previousSibling && l.onlyZeroWidthSpace(p.textContent.slice(h))) {
        let H = !0, S = p.nextSibling;
        for (; S; ) {
          if (!l.onlyZeroWidthSpace(S)) {
            H = !1;
            break;
          }
          S = S.nextSibling;
        }
        if (H)
          return l.copyTagAttributes(k, a), {
            ancestor: o,
            container: p,
            offset: h
          };
      }
      y.v = !1;
      const M = o, E = [a], T = o.cloneNode(!1);
      let z = p, V = h, U = !1, P, D, F, R;
      if (function H(S, O) {
        const N = S.childNodes;
        for (let I = N.length - 1, q; 0 <= I; I--) {
          const $ = N[I];
          if (!$) continue;
          let K = O;
          if (U && !l.isBreak($)) {
            if ($.nodeType === 1) {
              if (l._isIgnoreNodeChange($)) {
                a = a.cloneNode(!1);
                const se = $.cloneNode(!0);
                T.insertBefore(se, O), T.insertBefore(a, se), E.push(a);
              } else
                H($, $);
              continue;
            }
            D = $, P = [];
            const G = [];
            for (; D.parentNode !== null && D !== M && D !== a; )
              q = f(D), q && D.nodeType === 1 && (_(D) ? R || G.push(q) : P.push(q)), D = D.parentNode;
            P = P.concat(G);
            const j = P.length > 0, ee = P.pop() || $;
            for (F = D = ee; P.length > 0; )
              D = P.pop(), F.appendChild(D), F = D;
            if (_(a.parentNode) && !_(ee) && (a = a.cloneNode(!1), T.insertBefore(a, T.firstChild), E.push(a)), !R && _(ee)) {
              a = a.cloneNode(!1);
              const se = ee.childNodes;
              for (let re = 0, ce = se.length; re < ce; re++)
                a.appendChild(se[re]);
              ee.appendChild(a), T.insertBefore(ee, T.firstChild), E.push(a), a.children.length > 0 ? O = D : O = a;
            } else j ? (a.insertBefore(ee, a.firstChild), O = D) : O = a;
            if (R && $.nodeType === 3)
              if (w($)) {
                const se = l.getParentElement(O, (function(re) {
                  return this._isMaintainedNode(re.parentNode) || re.parentNode === T;
                }).bind(l));
                R.appendChild(se), a = se.cloneNode(!1), E.push(a), T.insertBefore(a, T.firstChild);
              } else
                R = null;
          }
          if (!U && $ === z) {
            R = w($);
            const G = l.createTextNode(z.nodeType === 1 ? "" : z.substringData(V, z.length - V)), j = l.createTextNode(z.nodeType === 1 ? "" : z.substringData(0, V));
            if (R) {
              R = R.cloneNode(!1);
              const se = w(O);
              if (se && se.parentNode !== T) {
                let re = se, ce = null;
                for (; re.parentNode !== T; ) {
                  for (O = ce = re.parentNode.cloneNode(!1); re.childNodes[0]; )
                    ce.appendChild(re.childNodes[0]);
                  re.appendChild(ce), re = re.parentNode;
                }
                re.parentNode.insertBefore(se, re.parentNode.firstChild);
              }
              R = R.cloneNode(!1);
            } else _(a.parentNode) && !R && (a = a.cloneNode(!1), T.appendChild(a), E.push(a));
            for (l.onlyZeroWidthSpace(G) || O.insertBefore(G, O.firstChild), D = O, P = []; D !== T && D !== null; )
              q = _(D) ? null : f(D), q && D.nodeType === 1 && P.push(q), D = D.parentNode;
            const ee = P.pop() || O;
            for (F = D = ee; P.length > 0; )
              D = P.pop(), F.appendChild(D), F = D;
            ee !== O ? (a.insertBefore(ee, a.firstChild), O = D) : O = a, l.isBreak($) && a.appendChild($.cloneNode(!1)), R ? (R.insertBefore(a, R.firstChild), T.insertBefore(R, T.firstChild), R = null) : T.insertBefore(a, T.firstChild), z = j, V = j.data.length, U = !0, O.insertBefore(z, O.firstChild);
            continue;
          }
          q = U ? f($) : $.cloneNode(!1), q && (O.insertBefore(q, O.firstChild), $.nodeType === 1 && !l.isBreak($) && (K = q)), H($, K);
        }
      }(o, T), m && !g && !y.v)
        return {
          ancestor: o,
          container: p,
          offset: h
        };
      if (g = g && m, g)
        for (let H = 0; H < E.length; H++) {
          let S = E[H];
          const O = S.childNodes;
          let N = null;
          for (; O[0]; )
            N = O[0], T.insertBefore(N, S);
          l.removeItem(S), H === E.length - 1 && (z = N, V = N.textContent.length);
        }
      else if (m) {
        a = a.firstChild;
        for (let H = 0; H < E.length; H++)
          this._stripRemoveNode(E[H]);
      }
      if (!g && T.childNodes.length === 0)
        o.childNodes ? z = o.childNodes[0] : (z = l.createTextNode(l.zeroWidthSpace), o.appendChild(z));
      else {
        if (!m && a.textContent.length === 0)
          return l.removeEmptyNode(T, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        l.removeEmptyNode(T, a, !1), l.onlyZeroWidthSpace(T.textContent) ? (z = T.firstChild, V = z.textContent.length) : l.onlyZeroWidthSpace(z) && (z = a, V = 1);
        const H = { s: 0, e: 0 }, S = l.getNodePath(z, T, H);
        V += H.s;
        const O = l.mergeSameTags(T, [S], !0);
        o.parentNode.replaceChild(T, o), z = l.getNodeFromPath(S, T), V += O[0];
      }
      return {
        ancestor: T,
        container: z,
        offset: z.nodeType === 1 && V === 1 ? z.childNodes.length : V
      };
    },
    /**
     * @description Run plugin calls and basic commands.
     * @param {String} command Command string
     * @param {String} display Display type string ('command', 'submenu', 'dialog', 'container')
     * @param {Element} target The element of command button
     */
    actionCall: function(o, a, f) {
      if (a) {
        if (/more/i.test(a)) {
          if (f !== this._moreLayerActiveButton) {
            const p = e.element.toolbar.querySelector("." + o);
            p && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = f, p.style.display = "block", b._showToolbarBalloon(), b._showToolbarInline()), l.addClass(f, "on");
          } else
            e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")) && (this.moreLayerOff(), b._showToolbarBalloon(), b._showToolbarInline());
          return;
        }
        if (/container/.test(a) && (this._menuTray[o] === null || f !== this.containerActiveButton)) {
          this.callPlugin(o, this.containerOn.bind(this, f), f);
          return;
        }
        if (this.isReadOnly && l.arrayIncludes(this.resizingDisabledButtons, f)) return;
        if (/submenu/.test(a) && (this._menuTray[o] === null || f !== this.submenuActiveButton)) {
          this.callPlugin(o, this.submenuOn.bind(this, f), f);
          return;
        } else if (/dialog/.test(a)) {
          this.callPlugin(o, this.plugins[o].open.bind(this), f);
          return;
        } else /command/.test(a) ? this.callPlugin(o, this.plugins[o].action.bind(this), f) : /fileBrowser/.test(a) && this.callPlugin(o, this.plugins[o].open.bind(this, null), f);
      } else o && this.commandHandler(f, o);
      /submenu/.test(a) ? this.submenuOff() : /command/.test(a) || (this.submenuOff(), this.containerOff());
    },
    /**
     * @description Execute command of command button(All Buttons except submenu and dialog)
     * (selectAll, codeView, fullScreen, indent, outdent, undo, redo, removeFormat, print, preview, showBlocks, save, bold, underline, italic, strike, subscript, superscript, copy, cut, paste)
     * @param {Element|null} target The element of command button
     * @param {String} command Property of command button (data-value)
     */
    commandHandler: function(o, a) {
      if (!(u.isReadOnly && !/copy|cut|selectAll|codeView|fullScreen|print|preview|showBlocks/.test(a)))
        switch (a) {
          case "copy":
          case "cut":
            this.execCommand(a);
            break;
          case "paste":
            break;
          case "selectAll":
            this.containerOff();
            const f = e.element.wysiwyg;
            let p = l.getChildElement(f.firstChild, function(w) {
              return w.childNodes.length === 0 || w.nodeType === 3;
            }, !1) || f.firstChild, h = l.getChildElement(f.lastChild, function(w) {
              return w.childNodes.length === 0 || w.nodeType === 3;
            }, !0) || f.lastChild;
            if (!p || !h) return;
            if (l.isMedia(p)) {
              const w = this.getFileComponent(p), _ = l.createElement("BR"), k = l.createElement(n.defaultTag);
              k.appendChild(_), p = w ? w.component : p, p.parentNode.insertBefore(k, p), p = _;
            }
            if (l.isMedia(h)) {
              const w = l.createElement("BR"), _ = l.createElement(n.defaultTag);
              _.appendChild(w), f.appendChild(_), h = w;
            }
            b._showToolbarBalloon(this.setRange(p, 0, h, h.textContent.length));
            break;
          case "codeView":
            this.toggleCodeView();
            break;
          case "fullScreen":
            this.toggleFullScreen(o);
            break;
          case "indent":
          case "outdent":
            this.indent(a);
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
            else if (this._variable.isChanged && typeof C.save == "function")
              C.save();
            else
              throw Error("[SUNEDITOR.core.commandHandler.fail] Please register call back function in creation option. (callBackSave : Function)");
            this._variable.isChanged = !1, e.tool.save && e.tool.save.setAttribute("disabled", !0);
            break;
          default:
            a = n._defaultCommand[a.toLowerCase()] || a, this.commandMap[a] || (this.commandMap[a] = o);
            const g = this._variable.currentNodesMap, m = g.indexOf(a) > -1 ? null : l.createElement(a);
            let y = a;
            /^SUB$/i.test(a) && g.indexOf("SUP") > -1 ? y = "SUP" : /^SUP$/i.test(a) && g.indexOf("SUB") > -1 && (y = "SUB"), this.nodeChange(m, this._commandMapStyles[a] || null, [y], !1), this.focus();
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
    indent: function(o) {
      const a = this.getRange(), f = this.getSelectedElements(null), p = [], h = o !== "indent", g = n.rtl ? "marginRight" : "marginLeft";
      let m = a.startContainer, y = a.endContainer, w = a.startOffset, _ = a.endOffset;
      for (let k = 0, M = f.length, E, T; k < M; k++)
        E = f[k], !l.isListCell(E) || !this.plugins.list ? (T = /\d+/.test(E.style[g]) ? l.getNumber(E.style[g], 0) : 0, h ? T -= 25 : T += 25, l.setStyle(E, g, T <= 0 ? "" : T + "px")) : (h || E.previousElementSibling) && p.push(E);
      p.length > 0 && this.plugins.list.editInsideList.call(this, h, p), this.effectNode = null, this.setRange(m, w, y, _), this.history.push(!1);
    },
    /**
     * @description Add or remove the class name of "body" so that the code block is visible
     */
    toggleDisplayBlocks: function() {
      const o = e.element.wysiwyg;
      l.toggleClass(o, "se-show-block"), l.hasClass(o, "se-show-block") ? l.addClass(this._styleCommandMap.showBlocks, "active") : l.removeClass(this._styleCommandMap.showBlocks, "active"), this._resourcesStateChange();
    },
    /**
     * @description Changes to code view or wysiwyg view
     */
    toggleCodeView: function() {
      const o = this._variable.isCodeView;
      this.controllersOff(), l.setDisabledButtons(!o, this.codeViewDisabledButtons), o ? (l.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), n.height === "auto" && !n.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(n.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, b._hideToolbar())), this.nativeFocus(), l.removeClass(this._styleCommandMap.codeView, "active"), l.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : n.height === "auto" && !n.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), n.codeMirrorEditor && n.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, b._showToolbarInline())), this._variable._range = null, e.element.code.focus(), l.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && l.setDisabledButtons(!0, this.resizingDisabledButtons), typeof C.toggleCodeView == "function" && C.toggleCodeView(this._variable.isCodeView, this);
    },
    /**
     * @description Convert the data of the code view and put it in the WYSIWYG area.
     * @private
     */
    _setCodeDataToEditor: function() {
      const o = this._getCodeView();
      if (n.fullPage) {
        const a = this._parser.parseFromString(o, "text/html");
        if (!this.options.__allowedScriptTag) {
          const h = a.head.children;
          for (let g = 0, m = h.length; g < m; g++)
            /^script$/i.test(h[g].tagName) && (a.head.removeChild(h[g]), g--, m--);
        }
        let f = a.head.innerHTML;
        (!a.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !a.head.querySelector("style")) && (f += l._setIframeCssTags(this.options)), this._wd.head.innerHTML = f, this._wd.body.innerHTML = this.convertContentsForEditor(a.body.innerHTML);
        const p = a.body.attributes;
        for (let h = 0, g = p.length; h < g; h++)
          p[h].name !== "contenteditable" && this._wd.body.setAttribute(p[h].name, p[h].value);
        if (!l.hasClass(this._wd.body, "sun-editor-editable")) {
          const h = n._editableClass.split(" ");
          for (let g = 0; g < h.length; g++)
            l.addClass(this._wd.body, n._editableClass[g]);
        }
      } else
        e.element.wysiwyg.innerHTML = o.length > 0 ? this.convertContentsForEditor(o) : "<" + n.defaultTag + "><br></" + n.defaultTag + ">";
    },
    /**
     * @description Convert the data of the WYSIWYG area and put it in the code view area.
     * @private
     */
    _setEditorDataToCodeView: function() {
      const o = this.convertHTMLForCodeView(e.element.wysiwyg, !1);
      let a = "";
      if (n.fullPage) {
        const f = l.getAttributesToString(this._wd.body, null);
        a = `<!DOCTYPE html>
<html>
` + this._wd.head.outerHTML.replace(/>(?!\n)/g, `>
`) + "<body " + f + `>
` + o + `</body>
</html>`;
      } else
        a = o;
      e.element.code.style.display = "block", e.element.wysiwygFrame.style.display = "none", this._setCodeView(a);
    },
    /**
     * @description Changes to full screen or default screen
     * @param {Element|null} element full screen button
     */
    toggleFullScreen: function(o) {
      const a = e.element.topArea, f = e.element.toolbar, p = e.element.editorArea, h = e.element.wysiwygFrame, g = e.element.code, m = this._variable;
      this.controllersOff();
      const y = f.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      m.isFullScreen ? (m.isFullScreen = !1, h.style.cssText = m._wysiwygOriginCssText, g.style.cssText = m._codeOriginCssText, f.style.cssText = "", p.style.cssText = m._editorAreaOriginCssText, a.style.cssText = m._originCssText, c.body.style.overflow = m._bodyOverflow, n.height === "auto" && !n.codeMirrorEditor && b._codeViewAutoHeight(), n.toolbarContainer && n.toolbarContainer.appendChild(f), n.stickyToolbar > -1 && l.removeClass(f, "se-toolbar-sticky"), m._fullScreenAttrs.sticky && !n.toolbarContainer && (m._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", l.addClass(f, "se-toolbar-sticky")), this._isInline = m._fullScreenAttrs.inline, this._isBalloon = m._fullScreenAttrs.balloon, this._isInline && b._showToolbarInline(), n.toolbarContainer && l.removeClass(f, "se-toolbar-balloon"), b.onScroll_window(), o && l.changeElement(o.firstElementChild, v.expansion), e.element.topArea.style.marginTop = "", l.removeClass(this._styleCommandMap.fullScreen, "active")) : (m.isFullScreen = !0, m._fullScreenAttrs.inline = this._isInline, m._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), n.toolbarContainer && e.element.relative.insertBefore(f, p), a.style.position = "fixed", a.style.top = "0", a.style.left = "0", a.style.width = "100%", a.style.maxWidth = "100%", a.style.height = "100%", a.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (m._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", l.removeClass(f, "se-toolbar-sticky")), m._bodyOverflow = c.body.style.overflow, c.body.style.overflow = "hidden", m._editorAreaOriginCssText = p.style.cssText, m._wysiwygOriginCssText = h.style.cssText, m._codeOriginCssText = g.style.cssText, p.style.cssText = f.style.cssText = "", h.style.cssText = (h.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + n._editorStyles.editor, g.style.cssText = (g.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], f.style.width = h.style.height = g.style.height = "100%", f.style.position = "relative", f.style.display = "block", m.innerHeight_fullScreen = d.innerHeight - f.offsetHeight, p.style.height = m.innerHeight_fullScreen - n.fullScreenOffset + "px", o && l.changeElement(o.firstElementChild, v.reduction), n.iframe && n.height === "auto" && (p.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = n.fullScreenOffset + "px", l.addClass(this._styleCommandMap.fullScreen, "active")), y && C.toolbar.hide(), typeof C.toggleFullScreen == "function" && C.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const o = l.createElement("IFRAME");
      o.style.display = "none", c.body.appendChild(o);
      const a = n.printTemplate ? n.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), f = l.getIframeDocument(o), p = this._wd;
      if (n.iframe) {
        const h = n._printClass !== null ? 'class="' + n._printClass + '"' : n.fullPage ? l.getAttributesToString(p.body, ["contenteditable"]) : 'class="' + n._editableClass + '"';
        f.write(
          "<!DOCTYPE html><html><head>" + p.head.innerHTML + "</head><body " + h + ">" + a + "</body></html>"
        );
      } else {
        const h = c.head.getElementsByTagName("link"), g = c.head.getElementsByTagName("style");
        let m = "";
        for (let y = 0, w = h.length; y < w; y++)
          m += h[y].outerHTML;
        for (let y = 0, w = g.length; y < w; y++)
          m += g[y].outerHTML;
        f.write(
          "<!DOCTYPE html><html><head>" + m + '</head><body class="' + (n._printClass !== null ? n._printClass : n._editableClass) + '">' + a + "</body></html>"
        );
      }
      this.showLoading(), d.setTimeout(function() {
        try {
          if (o.focus(), l.isIE_Edge || l.isChromium || c.documentMode || d.StyleMedia)
            try {
              o.contentWindow.document.execCommand("print", !1, null);
            } catch {
              o.contentWindow.print();
            }
          else
            o.contentWindow.print();
        } catch (h) {
          throw Error("[SUNEDITOR.core.print.fail] error: " + h);
        } finally {
          u.closeLoading(), l.removeItem(o);
        }
      }, 1e3);
    },
    /**
     * @description Open the preview window.
     */
    preview: function() {
      u.submenuOff(), u.containerOff(), u.controllersOff();
      const o = n.previewTemplate ? n.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), a = d.open("", "_blank");
      a.mimeType = "text/html";
      const f = this._wd;
      if (n.iframe) {
        const p = n._printClass !== null ? 'class="' + n._printClass + '"' : n.fullPage ? l.getAttributesToString(f.body, ["contenteditable"]) : 'class="' + n._editableClass + '"';
        a.document.write(
          "<!DOCTYPE html><html><head>" + f.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + p + ">" + o + "</body></html>"
        );
      } else {
        const p = c.head.getElementsByTagName("link"), h = c.head.getElementsByTagName("style");
        let g = "";
        for (let m = 0, y = p.length; m < y; m++)
          g += p[m].outerHTML;
        for (let m = 0, y = h.length; m < y; m++)
          g += h[m].outerHTML;
        a.document.write(
          '<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><title>' + s.toolbar.preview + "</title>" + g + '</head><body class="' + (n._printClass !== null ? n._printClass : n._editableClass) + '" style="margin:10px auto !important; height:auto !important; outline:1px dashed #ccc;">' + o + "</body></html>"
        );
      }
    },
    /**
     * @description Set direction to "rtl" or "ltr".
     * @param {String} dir "rtl" or "ltr"
     */
    setDir: function(o) {
      const a = o === "rtl", f = this._prevRtl !== a;
      this._prevRtl = n.rtl = a, f && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && l.changeElement(e.tool.indent.firstElementChild, v.indent), e.tool.outdent && l.changeElement(e.tool.outdent.firstElementChild, v.outdent));
      const p = e.element;
      a ? (l.addClass(p.topArea, "se-rtl"), l.addClass(p.wysiwygFrame, "se-rtl")) : (l.removeClass(p.topArea, "se-rtl"), l.removeClass(p.wysiwygFrame, "se-rtl"));
      const h = l.getListChildren(p.wysiwyg, function(m) {
        return l.isFormatElement(m) && (m.style.marginRight || m.style.marginLeft || m.style.textAlign);
      });
      for (let m = 0, y = h.length, w, _, k; m < y; m++)
        w = h[m], k = w.style.marginRight, _ = w.style.marginLeft, (k || _) && (w.style.marginRight = _, w.style.marginLeft = k), k = w.style.textAlign, k === "left" ? w.style.textAlign = "right" : k === "right" && (w.style.textAlign = "left");
      const g = e.tool;
      g.dir && (l.changeTxt(g.dir.querySelector(".se-tooltip-text"), s.toolbar[n.rtl ? "dir_ltr" : "dir_rtl"]), l.changeElement(g.dir.firstElementChild, v[n.rtl ? "dir_ltr" : "dir_rtl"])), g.dir_ltr && (a ? l.removeClass(g.dir_ltr, "active") : l.addClass(g.dir_ltr, "active")), g.dir_rtl && (a ? l.addClass(g.dir_rtl, "active") : l.removeClass(g.dir_rtl, "active"));
    },
    /**
     * @description Sets the HTML string
     * @param {String|undefined} html HTML string
     */
    setContents: function(o) {
      this.removeRange();
      const a = o == null ? "" : this.convertContentsForEditor(o, null, null);
      if (!this._variable.isCodeView)
        e.element.wysiwyg.innerHTML = a, this._resetComponents(), this.history.push(!1);
      else {
        const f = this.convertHTMLForCodeView(a, !1);
        this._setCodeView(f);
      }
    },
    /**
     * @description Sets the contents of the iframe's head tag and body tag when using the "iframe" or "fullPage" option.
     * @param {Object} ctx { head: HTML string, body: HTML string}
     */
    setIframeContents: function(o) {
      if (!n.iframe) return !1;
      o.head && (this._wd.head.innerHTML = this.options.__allowedScriptTag ? o.head : o.head.replace(this.__scriptTagRegExp, "")), o.body && (this._wd.body.innerHTML = this.convertContentsForEditor(o.body)), this._resetComponents();
    },
    /**
     * @description Gets the current contents
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {Object}
     */
    getContents: function(o) {
      const a = this.cleanHTML(e.element.wysiwyg.innerHTML, null, null), f = l.createElement("DIV");
      f.innerHTML = a;
      const p = l.getListChildren(f, function(h) {
        return h.hasAttribute("contenteditable");
      });
      for (let h = 0, g = p.length; h < g; h++)
        p[h].removeAttribute("contenteditable");
      if (n.fullPage && !o) {
        const h = l.getAttributesToString(this._wd.body, ["contenteditable"]);
        return "<!DOCTYPE html><html>" + this._wd.head.outerHTML + "<body " + h + ">" + f.innerHTML + "</body></html>";
      } else
        return f.innerHTML;
    },
    /**
     * @description Gets the current contents with containing parent div(div.sun-editor-editable).
     * <div class="sun-editor-editable">{contents}</div>
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {String}
     */
    getFullContents: function(o) {
      return '<div class="sun-editor-editable' + (n.rtl ? " se-rtl" : "") + '">' + this.getContents(o) + "</div>";
    },
    /**
     * @description Returns HTML string according to tag type and configuration.
     * Use only "cleanHTML"
     * @param {Node} node Node
     * @param {Boolean} requireFormat If true, text nodes that do not have a format node is wrapped with the format tag.
     * @private
     */
    _makeLine: function(o, a) {
      const f = n.defaultTag;
      if (o.nodeType === 1) {
        if (this.__disallowedTagNameRegExp.test(o.nodeName)) return "";
        if (/__se__tag/.test(o.className)) return o.outerHTML;
        const p = l.getListChildNodes(o, function(h) {
          return l.isSpanWithoutAttr(h) && !l.getParentElement(h, l.isNotCheckingNode);
        }) || [];
        for (let h = p.length - 1; h >= 0; h--)
          p[h].outerHTML = p[h].innerHTML;
        return !a || l.isFormatElement(o) || l.isRangeFormatElement(o) || l.isComponent(o) || l.isFigures(o) || l.isAnchor(o) && l.isMedia(o.firstElementChild) ? l.isSpanWithoutAttr(o) ? o.innerHTML : o.outerHTML : "<" + f + ">" + (l.isSpanWithoutAttr(o) ? o.innerHTML : o.outerHTML) + "</" + f + ">";
      }
      if (o.nodeType === 3) {
        if (!a) return l._HTMLConvertor(o.textContent);
        const p = o.textContent.split(/\n/g);
        let h = "";
        for (let g = 0, m = p.length, y; g < m; g++)
          y = p[g].trim(), y.length > 0 && (h += "<" + f + ">" + l._HTMLConvertor(y) + "</" + f + ">");
        return h;
      }
      return o.nodeType === 8 && this._allowHTMLComments ? "<!--" + o.textContent.trim() + "-->" : "";
    },
    /**
     * @description Removes attribute values such as style and converts tags that do not conform to the "html5" standard.
     * @param {String} text 
     * @returns {String} HTML string
     * @private
     */
    _tagConvertor: function(o) {
      if (!this._disallowedTextTagsRegExp) return o;
      const a = n._textTagsMap;
      return o.replace(this._disallowedTextTagsRegExp, function(f, p, h, g) {
        return p + (typeof a[h] == "string" ? a[h] : h) + (g ? " " + g : "");
      });
    },
    /**
     * @description Delete disallowed tags
     * @param {String} html HTML string
     * @returns {String}
     * @private
     */
    _deleteDisallowedTags: function(o) {
      return o = o.replace(this.__disallowedTagsRegExp, "").replace(/<[a-z0-9]+\:[a-z0-9]+[^>^\/]*>[^>]*<\/[a-z0-9]+\:[a-z0-9]+>/gi, ""), /\bfont\b/i.test(this.options._editorTagsWhitelist) || (o = o.replace(/(<\/?)font(\s?)/gi, "$1span$2")), o.replace(this.editorTagsWhitelistRegExp, "").replace(this.editorTagsBlacklistRegExp, "");
    },
    _convertFontSize: function(o, a) {
      const f = this._w.Math, p = a.match(/(\d+(?:\.\d+)?)(.+)/), h = p ? p[1] * 1 : l.fontValueMap[a], g = p ? p[2] : "rem";
      let m = h;
      switch (/em/.test(g) ? m = f.round(h / 0.0625) : g === "pt" ? m = f.round(h * 1.333) : g === "%" && (m = h / 100), o) {
        case "em":
        case "rem":
        case "%":
          return (m * 0.0625).toFixed(2) + o;
        case "pt":
          return f.floor(m / 1.333) + o;
        default:
          return m + o;
      }
    },
    _cleanStyle: function(o, a, f) {
      let p = (o.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(f) && !p && (o.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const h = (o.match(/\ssize="([^"]+)"/i) || [])[1], g = (o.match(/\sface="([^"]+)"/i) || [])[1], m = (o.match(/\scolor="([^"]+)"/i) || [])[1];
        (h || g || m) && (p = 'style="' + (h ? "font-size:" + this.util.getNumber(h / 3.333, 1) + "rem;" : "") + (g ? "font-family:" + g + ";" : "") + (m ? "color:" + m + ";" : "") + '"');
      }
      if (p) {
        a || (a = []);
        const h = p.replace(/&quot;/g, "").match(this._cleanStyleRegExp[f]);
        if (h) {
          const g = [];
          for (let m = 0, y = h.length, w; m < y; m++)
            if (w = h[m].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), w && !/inherit|initial|revert|unset/i.test(w[3])) {
              const _ = l.kebabToCamelCase(w[1].trim()), k = this.wwComputedStyle[_] ? this.wwComputedStyle[_].replace(/"/g, "") : "", M = w[3].trim();
              switch (_) {
                case "fontFamily":
                  if (!n.plugins.font || n.font.indexOf(M) === -1) continue;
                  break;
                case "fontSize":
                  if (!n.plugins.fontSize) continue;
                  this._cleanStyleRegExp.fontSizeUnit.test(w[0]) || (w[0] = w[0].replace((w[0].match(/:\s*([^;]+)/) || [])[1], this._convertFontSize.bind(this, n.fontSizeUnit)));
                  break;
                case "color":
                  if (!n.plugins.fontColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(M)) continue;
                  break;
                case "backgroundColor":
                  if (!n.plugins.hiliteColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(M)) continue;
                  break;
              }
              k !== M && g.push(w[0]);
            }
          g.length > 0 && a.push('style="' + g.join(";") + '"');
        }
      }
      return a;
    },
    /**
     * @description Tag and tag attribute check RegExp function. (used by "cleanHTML" and "convertContentsForEditor")
     * @param {Boolean} lowLevelCheck Row level check
     * @param {String} m RegExp value
     * @param {String} t RegExp value
     * @returns {String}
     * @private
     */
    _cleanTags: function(o, a, f) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(a)) return a;
      let p = null;
      const h = f.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), g = this._attributesTagsBlacklist[h];
      a = a.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, ""), g ? a = a.replace(g, "") : a = a.replace(this._attributesBlacklistRegExp, "");
      const m = this._attributesTagsWhitelist[h];
      if (m ? p = a.match(m) : p = a.match(o ? this._attributesWhitelistRegExp : this._attributesWhitelistRegExp_all_data), o || h === "span" || h === "li" || this._cleanStyleRegExp[h])
        if (h === "a") {
          const y = a.match(/(?:(?:id|name)\s*=\s*(?:"|')[^"']*(?:"|'))/g);
          y && (p || (p = []), p.push(y[0]));
        } else (!p || !/style=/i.test(p.toString())) && ((h === "span" || h === "li") && (p = this._cleanStyle(a, p, "span")), this._cleanStyleRegExp[h] ? p = this._cleanStyle(a, p, h) : /^(P|DIV|H[1-6]|PRE)$/i.test(h) && (p = this._cleanStyle(a, p, "format")));
      else {
        const y = a.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        y && !p ? p = [y[0]] : y && !p.some(function(w) {
          return /^style/.test(w.trim());
        }) && p.push(y[0]);
      }
      if (l.isFigures(h)) {
        const y = a.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        p || (p = []), y && p.push(y[0]);
      }
      if (p)
        for (let y = 0, w = p.length, _; y < w; y++)
          _ = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(p[y].trim()) ? "" : p[y], f += (/^\s/.test(_) ? "" : " ") + _;
      return f;
    },
    /**
     * @description Determines if formatting is required and returns a domTree
     * @param {Element} dom documentFragment
     * @returns {Element}
     * @private
     */
    _editFormat: function(o) {
      let a = "", f;
      const p = o.childNodes;
      for (let h = 0, g = p.length, m; h < g; h++)
        m = p[h], m.nodeType === 8 ? a += "<!-- " + m.textContent + " -->" : !l.isFormatElement(m) && !l.isRangeFormatElement(m) && !l.isComponent(m) && !/meta/i.test(m.nodeName) ? (f || (f = l.createElement(n.defaultTag)), f.appendChild(m), h--, g--) : (f && (a += f.outerHTML, f = null), a += m.outerHTML);
      return f && (a += f.outerHTML), c.createRange().createContextualFragment(a);
    },
    _convertListCell: function(o) {
      let a = "";
      for (let f = 0, p = o.length, h; f < p; f++)
        h = o[f], h.nodeType === 1 ? l.isList(h) ? a += h.innerHTML : l.isListCell(h) ? a += h.outerHTML : l.isFormatElement(h) ? a += "<li>" + (h.innerHTML.trim() || "<br>") + "</li>" : l.isRangeFormatElement(h) && !l.isTable(h) ? a += this._convertListCell(h) : a += "<li>" + h.outerHTML + "</li>" : a += "<li>" + (h.textContent || "<br>") + "</li>";
      return a;
    },
    _isFormatData: function(o) {
      let a = !1;
      for (let f = 0, p = o.length, h; f < p; f++)
        if (h = o[f], h.nodeType === 1 && !l.isTextStyleElement(h) && !l.isBreak(h) && !this.__disallowedTagNameRegExp.test(h.nodeName)) {
          a = !0;
          break;
        }
      return a;
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
    cleanHTML: function(o, a, f) {
      if (!n.strictMode) return o;
      o = this._deleteDisallowedTags(this._parser.parseFromString(l.htmlCompress(o), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0)).replace(/<br\/?>$/i, "");
      const p = c.createRange().createContextualFragment(o);
      try {
        l._consistencyCheckOfHTML(p, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter);
      } catch (y) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + y);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const y = p.querySelectorAll(this.managedTagsInfo.query);
        for (let w = 0, _ = y.length, k, M; w < _; w++) {
          M = [].slice.call(y[w].classList);
          for (let E = 0, T = M.length; E < T; E++)
            if (k = this.managedTagsInfo.map[M[E]], k) {
              k(y[w]);
              break;
            }
        }
      }
      let h = p.childNodes, g = "";
      const m = this._isFormatData(h);
      m && (h = this._editFormat(p).childNodes);
      for (let y = 0, w = h.length, _; y < w; y++) {
        if (_ = h[y], this.__allowedScriptRegExp.test(_.nodeName)) {
          g += _.outerHTML;
          continue;
        }
        g += this._makeLine(_, m);
      }
      return g = l.htmlRemoveWhiteSpace(g), g ? (a && (g = g.replace(typeof a == "string" ? l.createTagsWhitelist(a) : a, "")), f && (g = g.replace(typeof f == "string" ? l.createTagsBlacklist(f) : f, ""))) : g = o, this._tagConvertor(g);
    },
    /**
     * @description Converts contents into a format that can be placed in an editor
     * @param {String} contents contents
     * @returns {String}
     */
    convertContentsForEditor: function(o) {
      if (!n.strictMode) return o;
      o = this._deleteDisallowedTags(this._parser.parseFromString(l.htmlCompress(o), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0));
      const a = c.createRange().createContextualFragment(o);
      try {
        l._consistencyCheckOfHTML(a, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter);
      } catch (g) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + g);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const g = a.querySelectorAll(this.managedTagsInfo.query);
        for (let m = 0, y = g.length, w, _; m < y; m++) {
          _ = [].slice.call(g[m].classList);
          for (let k = 0, M = _.length; k < M; k++)
            if (w = this.managedTagsInfo.map[_[k]], w) {
              w(g[m]);
              break;
            }
        }
      }
      const f = a.childNodes;
      let p = "", h = null;
      for (let g = 0, m; g < f.length; g++) {
        if (m = f[g], this.__allowedScriptRegExp.test(m.nodeName)) {
          p += m.outerHTML;
          continue;
        }
        if (!l.isFormatElement(m) && !l.isRangeFormatElement(m) && !l.isComponent(m) && !l.isFigures(m) && m.nodeType !== 8 && !/__se__tag/.test(m.className)) {
          if (h || (h = l.createElement(n.defaultTag)), h.appendChild(m), g--, f[g + 1] && !l.isFormatElement(f[g + 1]))
            continue;
          m = h, h = null;
        }
        h && (p += this._makeLine(h, !0), h = null), p += this._makeLine(m, !0);
      }
      return h && (p += this._makeLine(h, !0)), p.length === 0 ? "<" + n.defaultTag + "><br></" + n.defaultTag + ">" : (p = l.htmlRemoveWhiteSpace(p), this._tagConvertor(p));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(o, a) {
      let f = "";
      const p = d.RegExp, h = new p("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), g = typeof o == "string" ? c.createRange().createContextualFragment(o) : o, m = (function(_) {
        return this.isFormatElement(_) || this.isComponent(_);
      }).bind(l), y = a ? "" : `
`;
      let w = a ? 0 : this._variable.codeIndent * 1;
      return w = w > 0 ? new d.Array(w + 1).join(" ") : "", function _(k, M) {
        const E = k.childNodes, T = h.test(k.nodeName), z = T ? M : "";
        for (let V = 0, U = E.length, P, D, F, R, H, S; V < U; V++) {
          if (P = E[V], R = h.test(P.nodeName), D = R ? y : "", F = m(P) && !T && !/^(TH|TD)$/i.test(k.nodeName) ? y : "", P.nodeType === 8) {
            f += `
<!-- ` + P.textContent.trim() + " -->" + D;
            continue;
          }
          if (P.nodeType === 3) {
            l.isList(P.parentElement) || (f += l._HTMLConvertor(/^\n+$/.test(P.data) ? "" : P.data));
            continue;
          }
          if (P.childNodes.length === 0) {
            f += (/^HR$/i.test(P.nodeName) ? y : "") + (/^PRE$/i.test(P.parentElement.nodeName) && /^BR$/i.test(P.nodeName) ? "" : z) + P.outerHTML + D;
            continue;
          }
          P.outerHTML ? (H = P.nodeName.toLowerCase(), S = z || R ? M : "", f += (F || (T ? "" : D)) + S + P.outerHTML.match(p("<" + H + "[^>]*>", "i"))[0] + D, _(P, M + w), f += (/\n$/.test(f) ? S : "") + "</" + H + ">" + (F || D || T || /^(TH|TD)$/i.test(P.nodeName) ? y : "")) : f += new d.XMLSerializer().serializeToString(P);
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
    addDocEvent: function(o, a, f) {
      c.addEventListener(o, a, f), n.iframe && this._wd.addEventListener(o, a);
    },
    /**
     * @description Remove events from document.
     * When created as an Iframe, the event of the document inside the Iframe is also removed.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     */
    removeDocEvent: function(o, a) {
      c.removeEventListener(o, a), n.iframe && this._wd.removeEventListener(o, a);
    },
    /**
     * @description The current number of characters is counted and displayed.
     * @param {String} inputText Text added.
     * @returns {Boolean}
     * @private
     */
    _charCount: function(o) {
      const a = n.maxCharCount, f = n.charCounterType;
      let p = 0;
      if (o && (p = this.getCharLength(o, f)), this._setCharCount(), a > 0) {
        let h = !1;
        const g = C.getCharCount(f);
        if (g > a) {
          if (h = !0, p > 0) {
            this._editorRange();
            const m = this.getRange(), y = m.endOffset - 1, w = this.getSelectionNode().textContent, _ = m.endOffset - (g - a);
            this.getSelectionNode().textContent = w.slice(0, _ < 0 ? 0 : _) + w.slice(m.endOffset, w.length), this.setRange(m.endContainer, y, m.endContainer, y);
          }
        } else g + p > a && (h = !0);
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
    checkCharCount: function(o, a) {
      if (n.maxCharCount) {
        const f = a || n.charCounterType, p = this.getCharLength(typeof o == "string" ? o : this._charTypeHTML && o.nodeType === 1 ? o.outerHTML : o.textContent, f);
        if (p > 0 && p + C.getCharCount(f) > n.maxCharCount)
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
    getCharLength: function(o, a) {
      return /byte/.test(a) ? l.getByteLength(o) : o.length;
    },
    /**
     * @description Reset buttons of the responsive toolbar.
     */
    resetResponsiveToolbar: function() {
      u.controllersOff();
      const o = b._responsiveButtonSize;
      if (o) {
        let a = 0;
        (u._isBalloon || u._isInline) && n.toolbarWidth === "auto" ? a = e.element.topArea.offsetWidth : a = e.element.toolbar.offsetWidth;
        let f = "default";
        for (let p = 1, h = o.length; p < h; p++)
          if (a < o[p]) {
            f = o[p] + "";
            break;
          }
        b._responsiveCurrentSize !== f && (b._responsiveCurrentSize = f, C.setToolbarButtons(b._responsiveButtons[f]));
      }
    },
    /**
     * @description Set the char count to charCounter element textContent.
     * @private
     */
    _setCharCount: function() {
      e.element.charCounter && d.setTimeout((function(o, a) {
        this.textContent && o && (this.textContent = o.getCharCount(a.charCounterType));
      }).bind(e.element.charCounter, C, n), 0);
    },
    /**
     * @description The character counter blinks.
     * @private
     */
    _callCounterBlink: function() {
      const o = e.element.charWrapper;
      o && !l.hasClass(o, "se-blink") && (l.addClass(o, "se-blink"), d.setTimeout(function() {
        l.removeClass(o, "se-blink");
      }, 600));
    },
    /**
     * @description Check the components such as image and video and modify them according to the format.
     * @private
     */
    _checkComponents: function() {
      for (let o = 0, a = this._fileInfoPluginsCheck.length; o < a; o++)
        this._fileInfoPluginsCheck[o]();
    },
    /**
     * @description Initialize the information of the components.
     * @private
     */
    _resetComponents: function() {
      for (let o = 0, a = this._fileInfoPluginsReset.length; o < a; o++)
        this._fileInfoPluginsReset[o]();
    },
    /**
     * @description Set method in the code view area
     * @param {String} value HTML string
     * @private
     */
    _setCodeView: function(o) {
      n.codeMirrorEditor ? n.codeMirrorEditor.getDoc().setValue(o) : e.element.code.value = o;
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
    _setKeyEffect: function(o) {
      const a = this.commandMap, f = this.activePlugins;
      for (let p in a)
        o.indexOf(p) > -1 || !l.hasOwn(a, p) || (f.indexOf(p) > -1 ? i[p].active.call(this, null) : a.OUTDENT && /^OUTDENT$/i.test(p) ? l.isImportantDisabled(a.OUTDENT) || a.OUTDENT.setAttribute("disabled", !0) : a.INDENT && /^INDENT$/i.test(p) ? l.isImportantDisabled(a.INDENT) || a.INDENT.removeAttribute("disabled") : l.removeClass(a[p], "active"));
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(o, a) {
      const f = d.RegExp;
      this._ww = n.iframe ? e.element.wysiwygFrame.contentWindow : d, this._wd = c, this._charTypeHTML = n.charCounterType === "byte-html", this.wwComputedStyle = d.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = l.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + l.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(R) {
        return this.test(R) ? R : "";
      }).bind(n.allowedClassNames);
      const p = n.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new f("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new f("<(" + p + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + p + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new f("^(" + p + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new f("^" + (n.__allowedScriptTag ? "script" : "") + "$", "i"), !n.iframe && typeof d.ShadowRoot == "function") {
        let R = e.element.wysiwygFrame;
        for (; R; ) {
          if (R.shadowRoot) {
            this._shadowRoot = R.shadowRoot;
            break;
          } else if (R instanceof d.ShadowRoot) {
            this._shadowRoot = R;
            break;
          }
          R = R.parentNode;
        }
        this._shadowRoot && (this._shadowRootControllerEventTarget = []);
      }
      const h = d.Object.keys(n._textTagsMap), g = n.addTagsWhitelist ? n.addTagsWhitelist.split("|").filter(function(R) {
        return /b|i|ins|s|strike/i.test(R);
      }) : [];
      for (let R = 0; R < g.length; R++)
        h.splice(h.indexOf(g[R].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = h.length === 0 ? null : new f("(<\\/?)(" + h.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const m = function(R, H) {
        return R ? R === "*" ? "[a-z-]+" : H ? R + "|" + H : R : "^";
      }, _ = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", k = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = n._editorTagsWhitelist.indexOf("//") > -1 || n._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new f("^(" + m(n._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new f("^(" + (n.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = l.createTagsWhitelist(m(n._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = l.createTagsBlacklist(n.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = l.createTagsWhitelist(m(n.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = l.createTagsBlacklist(n.pasteTagsBlacklist);
      const M = '\\s*=\\s*(")[^"]*\\1', E = n.attributesWhitelist;
      let T = {}, z = "";
      if (E)
        for (let R in E)
          !l.hasOwn(E, R) || /^on[a-z]+$/i.test(E[R]) || (R === "all" ? z = m(E[R], _) : T[R] = new f("\\s(?:" + m(E[R], "") + ")" + M, "ig"));
      this._attributesWhitelistRegExp = new f("\\s(?:" + (z || _ + "|" + k) + ")" + M, "ig"), this._attributesWhitelistRegExp_all_data = new f("\\s(?:" + ((z || _) + "|data-[a-z0-9\\-]+") + ")" + M, "ig"), this._attributesTagsWhitelist = T;
      const V = n.attributesBlacklist;
      if (T = {}, z = "", V)
        for (let R in V)
          l.hasOwn(V, R) && (R === "all" ? z = m(V[R], "") : T[R] = new f("\\s(?:" + m(V[R], "") + ")" + M, "ig"));
      this._attributesBlacklistRegExp = new f("\\s(?:" + (z || "^") + ")" + M, "ig"), this._attributesTagsBlacklist = T, this._isInline = /inline/i.test(n.mode), this._isBalloon = /balloon|balloon-always/i.test(n.mode), this._isBalloonAlways = /balloon-always/i.test(n.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const U = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let P = [], D, F;
      for (let R in i)
        if (l.hasOwn(i, R)) {
          if (D = i[R], F = t[R], (D.active || D.action) && F && this.callPlugin(R, null, F), typeof D.checkFileInfo == "function" && typeof D.resetFileInfo == "function" && (this.callPlugin(R, null, F), this._fileInfoPluginsCheck.push(D.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(D.resetFileInfo.bind(this))), d.Array.isArray(D.fileTags)) {
            const H = D.fileTags;
            this.callPlugin(R, null, F), this._fileManager.tags = this._fileManager.tags.concat(H), P.push(R);
            for (let S = 0, O = H.length; S < O; S++)
              this._fileManager.pluginMap[H[S].toLowerCase()] = R;
          }
          if (D.managedTags) {
            const H = D.managedTags();
            U.push("." + H.className), this.managedTagsInfo.map[H.className] = H.method.bind(this);
          }
        }
      this.managedTagsInfo.query = U.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new f("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new f("^(" + (P.length === 0 ? "^" : P.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = fs(this, this._onChange_historyStack.bind(this)), this.addModule([ri]), n.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, n._editorStyles.editor && (e.element.wysiwyg.style.cssText = n._editorStyles.editor), n.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(o, a);
    },
    /**
     * @description Caching basic buttons to use
     * @private
     */
    _cachingButtons: function() {
      this.codeViewDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-code-view-enabled"]):not([data-display="MORE"])'), this.resizingDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-resizing-enabled"]):not([data-display="MORE"])');
      const o = e.tool, a = this.commandMap;
      a.INDENT = o.indent, a.OUTDENT = o.outdent, a[n.textTags.bold.toUpperCase()] = o.bold, a[n.textTags.underline.toUpperCase()] = o.underline, a[n.textTags.italic.toUpperCase()] = o.italic, a[n.textTags.strike.toUpperCase()] = o.strike, a[n.textTags.sub.toUpperCase()] = o.subscript, a[n.textTags.sup.toUpperCase()] = o.superscript, this._styleCommandMap = {
        fullScreen: o.fullScreen,
        showBlocks: o.showBlocks,
        codeView: o.codeView
      }, this._saveButtonStates();
    },
    /**
     * @description Initializ wysiwyg area (Only called from core._init)
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _initWysiwygArea: function(o, a) {
      e.element.wysiwyg.innerHTML = o ? a : this.convertContentsForEditor((typeof a == "string" ? a : /^TEXTAREA$/i.test(e.element.originElement.nodeName) ? e.element.originElement.value : e.element.originElement.innerHTML) || "");
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
      this.hasFocus && b._applyTagEffects(), this._variable.isChanged = !0, e.tool.save && e.tool.save.removeAttribute("disabled"), C.onChange && C.onChange(this.getContents(!0), this), e.element.toolbar.style.display === "block" && b._showToolbarBalloon();
    },
    /**
     * @description Modify the height value of the iframe when the height of the iframe is automatic.
     * @private
     */
    _iframeAutoHeight: function() {
      this._iframeAuto ? d.setTimeout(function() {
        const o = u._iframeAuto.offsetHeight;
        e.element.wysiwygFrame.style.height = o + "px", l.isResizeObserverSupported || u.__callResizeFunction(o, null);
      }) : l.isResizeObserverSupported || u.__callResizeFunction(e.element.wysiwygFrame.offsetHeight, null);
    },
    __callResizeFunction: function(o, a) {
      o = o === -1 ? a.borderBoxSize && a.borderBoxSize[0] ? a.borderBoxSize[0].blockSize : a.contentRect.height + this._editorHeightPadding : o, this._editorHeight !== o && (typeof C.onResizeEditor == "function" && C.onResizeEditor(o, this._editorHeight, u, a), this._editorHeight = o);
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
        const o = e.element.wysiwyg;
        !l.onlyZeroWidthSpace(o.textContent) || o.querySelector(l._allowedEmptyNodeList) || (o.innerText.match(/\n/g) || "").length > 1 ? this._placeholder.style.display = "none" : this._placeholder.style.display = "block";
      }
    },
    /**
     * @description If there is no default format, add a format and move "selection".
     * @param {String|null} formatName Format tag name (default: 'P')
     * @returns {undefined|null}
     * @private
     */
    _setDefaultFormat: function(o) {
      if (this._fileManager.pluginRegExp.test(this.currentControllerName)) return;
      const a = this.getRange(), f = a.commonAncestorContainer, p = a.startContainer, h = l.getRangeFormatElement(f, null);
      let g, m, y;
      const w = l.getParentElement(f, l.isComponent);
      if (!(w && !l.isTable(w))) {
        if (f.nodeType === 1 && f.getAttribute("data-se-embed") === "true") {
          let _ = f.nextElementSibling;
          l.isFormatElement(_) || (_ = this.appendFormatTag(f, n.defaultTag)), this.setRange(_.firstChild, 0, _.firstChild, 0);
          return;
        }
        if (!((l.isRangeFormatElement(p) || l.isWysiwygDiv(p)) && (l.isComponent(p.children[a.startOffset]) || l.isComponent(p.children[a.startOffset - 1])))) {
          if (l.getParentElement(f, l.isNotCheckingNode)) return null;
          if (h) {
            y = l.createElement(o || n.defaultTag), y.innerHTML = h.innerHTML, y.childNodes.length === 0 && (y.innerHTML = l.zeroWidthSpace), h.innerHTML = y.outerHTML, y = h.firstChild, g = l.getEdgeChildNodes(y, null).sc, g || (g = l.createTextNode(l.zeroWidthSpace), y.insertBefore(g, y.firstChild)), m = g.textContent.length, this.setRange(g, m, g, m);
            return;
          }
          if (l.isRangeFormatElement(f) && f.childNodes.length <= 1) {
            let _ = null;
            f.childNodes.length === 1 && l.isBreak(f.firstChild) ? _ = f.firstChild : (_ = l.createTextNode(l.zeroWidthSpace), f.appendChild(_)), this.setRange(_, 1, _, 1);
            return;
          }
          try {
            if (f.nodeType === 3 && (y = l.createElement(o || n.defaultTag), f.parentNode.insertBefore(y, f), y.appendChild(f)), l.isBreak(y.nextSibling) && l.removeItem(y.nextSibling), l.isBreak(y.previousSibling) && l.removeItem(y.previousSibling), l.isBreak(g)) {
              const _ = l.createTextNode(l.zeroWidthSpace);
              g.parentNode.insertBefore(_, g), g = _;
            }
          } catch {
            this.execCommand("formatBlock", !1, o || n.defaultTag), this.removeRange(), this._editorRange();
          }
          if (y && (l.isBreak(y.nextSibling) && l.removeItem(y.nextSibling), l.isBreak(y.previousSibling) && l.removeItem(y.previousSibling), l.isBreak(g))) {
            const _ = l.createTextNode(l.zeroWidthSpace);
            g.parentNode.insertBefore(_, g), g = _;
          }
          this.effectNode = null, this.nativeFocus();
        }
      }
    },
    /**
     * @description Initialization after "setOptions"
     * @param {Object} el context.element
     * @param {String} _initHTML Initial html string
     * @private
     */
    _setOptionsInit: function(o, a) {
      this.context = e = Bt(o.originElement, this._getConstructed(o), n), this._componentsInfoReset = !0, this._editorInit(!0, a);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(o, a) {
      this._init(o, a), b._addEvent(), this._setCharCount(), b._offStickyToolbar(), b.onResize_window(), e.element.toolbar.style.visibility = "";
      const f = n.frameAttrbutes;
      for (let p in f)
        e.element.wysiwyg.setAttribute(p, f[p]);
      this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), d.setTimeout(function() {
        typeof u._resourcesStateChange == "function" && (b._resizeObserver && b._resizeObserver.observe(e.element.wysiwygFrame), b._toolbarObserver && b._toolbarObserver.observe(e.element._toolbarShadow), u._resourcesStateChange(), typeof C.onload == "function" && C.onload(u, o));
      });
    },
    /**
     * @description Create and return an object to cache the new context.
     * @param {Element} contextEl context.element
     * @returns {Object}
     * @private
     */
    _getConstructed: function(o) {
      return {
        _top: o.topArea,
        _relative: o.relative,
        _toolBar: o.toolbar,
        _toolbarShadow: o._toolbarShadow,
        _menuTray: o._menuTray,
        _editorArea: o.editorArea,
        _wysiwygArea: o.wysiwygFrame,
        _codeArea: o.code,
        _placeholder: o.placeholder,
        _resizingBar: o.resizingBar,
        _navigation: o.navigation,
        _charCounter: o.charCounter,
        _charWrapper: o.charWrapper,
        _loading: o.loading,
        _lineBreaker: o.lineBreaker,
        _lineBreaker_t: o.lineBreaker_t,
        _lineBreaker_b: o.lineBreaker_b,
        _resizeBack: o.resizeBackground,
        _stickyDummy: o._stickyDummy,
        _arrow: o._arrow
      };
    }
  }, b = {
    _IEisComposing: !1,
    // In IE, there is no "e.isComposing" in the key-up event.
    _lineBreakerBind: null,
    _responsiveCurrentSize: "default",
    _responsiveButtonSize: null,
    _responsiveButtons: null,
    _cursorMoveKeyCode: new d.RegExp("^(8|3[2-9]|40|46)$"),
    _directionKeyCode: new d.RegExp("^(8|13|3[2-9]|40|46)$"),
    _nonTextKeyCode: new d.RegExp("^(8|13|1[6-9]|20|27|3[3-9]|40|45|46|11[2-9]|12[0-3]|144|145)$"),
    _historyIgnoreKeyCode: new d.RegExp("^(1[6-9]|20|27|3[3-9]|40|45|11[2-9]|12[0-3]|144|145)$"),
    _onButtonsCheck: new d.RegExp("^(" + d.Object.keys(n._textTagsMap).join("|") + ")$", "i"),
    _frontZeroWidthReg: new d.RegExp(l.zeroWidthSpace + "+", ""),
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
    _shortcutCommand: function(o, a) {
      let f = null;
      const p = b._keyCodeShortcut[o];
      switch (p) {
        case "A":
          f = "selectAll";
          break;
        case "B":
          n.shortcutsDisable.indexOf("bold") === -1 && (f = "bold");
          break;
        case "S":
          a && n.shortcutsDisable.indexOf("strike") === -1 ? f = "strike" : !a && n.shortcutsDisable.indexOf("save") === -1 && (f = "save");
          break;
        case "U":
          n.shortcutsDisable.indexOf("underline") === -1 && (f = "underline");
          break;
        case "I":
          n.shortcutsDisable.indexOf("italic") === -1 && (f = "italic");
          break;
        case "Z":
          n.shortcutsDisable.indexOf("undo") === -1 && (a ? f = "redo" : f = "undo");
          break;
        case "Y":
          n.shortcutsDisable.indexOf("undo") === -1 && (f = "redo");
          break;
        case "[":
          n.shortcutsDisable.indexOf("indent") === -1 && (f = n.rtl ? "indent" : "outdent");
          break;
        case "]":
          n.shortcutsDisable.indexOf("indent") === -1 && (f = n.rtl ? "outdent" : "indent");
          break;
      }
      return f ? (u.commandHandler(u.commandMap[f], f), !0) : !!p;
    },
    _applyTagEffects: function() {
      if (l.hasClass(e.element.wysiwyg, "se-read-only"))
        return !1;
      let o = u.getSelectionNode();
      if (o === u.effectNode) return;
      u.effectNode = o;
      const a = n.rtl ? "marginRight" : "marginLeft", f = u.commandMap, p = b._onButtonsCheck, h = [], g = [], m = u.activePlugins, y = m.length;
      let w = "";
      for (; o.firstChild; )
        o = o.firstChild;
      for (let _ = o; !l.isWysiwygDiv(_) && _; _ = _.parentNode)
        if (!(_.nodeType !== 1 || l.isBreak(_))) {
          if (w = _.nodeName.toUpperCase(), g.push(w), !u.isReadOnly)
            for (let k = 0, M; k < y; k++)
              M = m[k], h.indexOf(M) === -1 && i[M].active.call(u, _) && h.push(M);
          if (l.isFormatElement(_)) {
            h.indexOf("OUTDENT") === -1 && f.OUTDENT && !l.isImportantDisabled(f.OUTDENT) && (l.isListCell(_) || _.style[a] && l.getNumber(_.style[a], 0) > 0) && (h.push("OUTDENT"), f.OUTDENT.removeAttribute("disabled")), h.indexOf("INDENT") === -1 && f.INDENT && !l.isImportantDisabled(f.INDENT) && (h.push("INDENT"), l.isListCell(_) && !_.previousElementSibling ? f.INDENT.setAttribute("disabled", !0) : f.INDENT.removeAttribute("disabled"));
            continue;
          }
          p && p.test(w) && (h.push(w), l.addClass(f[w], "active"));
        }
      u._setKeyEffect(h), u._variable.currentNodes = g.reverse(), u._variable.currentNodesMap = h, n.showPathLabel && (e.element.navigation.textContent = u._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(o) {
      let a = o.target;
      if (u._bindControllersOff && o.stopPropagation(), /^(input|textarea|select|option)$/i.test(a.nodeName) ? u._antiBlur = !1 : o.preventDefault(), l.getParentElement(a, ".se-submenu"))
        o.stopPropagation(), u._notHideToolbar = !0;
      else {
        let f = a.getAttribute("data-command"), p = a.className;
        for (; !f && !/se-menu-list/.test(p) && !/sun-editor-common/.test(p); )
          a = a.parentNode, f = a.getAttribute("data-command"), p = a.className;
        (f === u._submenuName || f === u._containerName) && o.stopPropagation();
      }
    },
    addGlobalEvent(o, a, f) {
      return n.iframe && u._ww.addEventListener(o, a, f), u._w.addEventListener(o, a, f), {
        type: o,
        listener: a,
        useCapture: f
      };
    },
    removeGlobalEvent(o, a, f) {
      o && (typeof o == "object" && (a = o.listener, f = o.useCapture, o = o.type), n.iframe && u._ww.removeEventListener(o, a, f), u._w.removeEventListener(o, a, f));
    },
    onClick_toolbar: function(o) {
      let a = o.target, f = a.getAttribute("data-display"), p = a.getAttribute("data-command"), h = a.className;
      for (u.controllersOff(); a.parentNode && !p && !/se-menu-list/.test(h) && !/se-toolbar/.test(h); )
        a = a.parentNode, p = a.getAttribute("data-command"), f = a.getAttribute("data-display"), h = a.className;
      !p && !f || a.disabled || u.actionCall(p, f, a);
    },
    __selectionSyncEvent: null,
    onMouseDown_wysiwyg: function(o) {
      if (u.isReadOnly || l.isNonEditable(e.element.wysiwyg)) return;
      if (l._isExcludeSelectionElement(o.target)) {
        o.preventDefault();
        return;
      }
      if (b.removeGlobalEvent(b.__selectionSyncEvent), b.__selectionSyncEvent = b.addGlobalEvent("mouseup", function() {
        u._editorRange(), b.removeGlobalEvent(b.__selectionSyncEvent);
      }), typeof C.onMouseDown == "function" && C.onMouseDown(o, u) === !1) return;
      const a = l.getParentElement(o.target, l.isCell);
      if (a) {
        const f = u.plugins.table;
        f && a !== f._fixedCell && !f._shift && u.callPlugin("table", function() {
          f.onTableCellMultiSelect.call(u, a, !1);
        }, null);
      }
      u._isBalloon && b._hideToolbar();
    },
    onClick_wysiwyg: function(o) {
      const a = o.target;
      if (u.isReadOnly)
        return o.preventDefault(), l.isAnchor(a) && d.open(a.href, a.target), !1;
      if (l.isNonEditable(e.element.wysiwyg) || typeof C.onClick == "function" && C.onClick(o, u) === !1) return;
      const f = u.getFileComponent(a);
      if (f) {
        o.preventDefault(), u.selectComponent(f.target, f.pluginName);
        return;
      }
      const p = l.getParentElement(a, "FIGCAPTION");
      if (p && l.isNonEditable(p) && (o.preventDefault(), p.focus(), u._isInline && !u._inlineToolbarAttr.isShow)) {
        b._showToolbarInline();
        const _ = function() {
          b._hideToolbar(), p.removeEventListener("blur", _);
        };
        p.addEventListener("blur", _);
      }
      if (u._editorRange(), o.detail === 3) {
        let _ = u.getRange();
        l.isFormatElement(_.endContainer) && _.endOffset === 0 && (_ = u.setRange(_.startContainer, _.startOffset, _.startContainer, _.startContainer.length), u._rangeInfo(_, u.getSelection()));
      }
      const h = u.getSelectionNode(), g = l.getFormatElement(h, null), m = l.getRangeFormatElement(h, null);
      let y = h;
      for (; y.firstChild; ) y = y.firstChild;
      const w = u.getFileComponent(y);
      if (w) {
        const _ = u.getRange();
        !m && _.startContainer === _.endContainer && u.selectComponent(w.target, w.pluginName);
      } else u.currentFileComponentInfo && u.controllersOff();
      if (!g && !l.isNonEditable(a) && !l.isList(m)) {
        const _ = u.getRange();
        if (l.getFormatElement(_.startContainer) === l.getFormatElement(_.endContainer))
          if (l.isList(m)) {
            o.preventDefault();
            const k = l.createElement("LI"), M = h.nextElementSibling;
            k.appendChild(h), m.insertBefore(k, M), u.focus();
          } else !l.isWysiwygDiv(h) && !l.isComponent(h) && (!l.isTable(h) || l.isCell(h)) && u._setDefaultFormat(l.isRangeFormatElement(m) ? "DIV" : n.defaultTag) !== null ? (o.preventDefault(), u.focus()) : b._applyTagEffects();
      } else
        b._applyTagEffects();
      u._isBalloon && d.setTimeout(b._toggleToolbarBalloon);
    },
    _balloonDelay: null,
    _showToolbarBalloonDelay: function() {
      b._balloonDelay && d.clearTimeout(b._balloonDelay), b._balloonDelay = d.setTimeout((function() {
        d.clearTimeout(this._balloonDelay), this._balloonDelay = null, this._showToolbarBalloon();
      }).bind(b), 350);
    },
    _toggleToolbarBalloon: function() {
      u._editorRange();
      const o = u.getRange();
      u._bindControllersOff || !u._isBalloonAlways && o.collapsed ? b._hideToolbar() : b._showToolbarBalloon(o);
    },
    _showToolbarBalloon: function(o) {
      if (!u._isBalloon) return;
      const a = o || u.getRange(), f = e.element.toolbar, p = e.element.topArea, h = u.getSelection();
      let g;
      if (u._isBalloonAlways && a.collapsed)
        g = !0;
      else if (h.focusNode === h.anchorNode)
        g = h.focusOffset < h.anchorOffset;
      else {
        const D = l.getListChildNodes(a.commonAncestorContainer, null);
        g = l.getArrayIndex(D, h.focusNode) < l.getArrayIndex(D, h.anchorNode);
      }
      let m = a.getClientRects();
      m = m[g ? 0 : m.length - 1];
      const y = u.getGlobalScrollOffset();
      let w = y.left, _ = y.top;
      const k = p.offsetWidth, M = b._getEditorOffsets(null), E = M.top, T = M.left;
      if (f.style.top = "-10000px", f.style.visibility = "hidden", f.style.display = "block", !m) {
        const D = u.getSelectionNode();
        if (l.isFormatElement(D)) {
          const F = l.createTextNode(l.zeroWidthSpace);
          u.insertNode(F, null, !1), u.setRange(F, 1, F, 1), u._editorRange(), m = u.getRange().getClientRects(), m = m[g ? 0 : m.length - 1];
        }
        if (!m) {
          const F = l.getOffset(D, e.element.wysiwygFrame);
          m = {
            left: F.left,
            top: F.top,
            right: F.left,
            bottom: F.top + D.offsetHeight,
            noText: !0
          }, w = 0, _ = 0;
        }
        g = !0;
      }
      const z = d.Math.round(e.element._arrow.offsetWidth / 2), V = f.offsetWidth, U = f.offsetHeight, P = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (P && (m = {
        left: m.left + P.left,
        top: m.top + P.top,
        right: m.right + P.right - P.width,
        bottom: m.bottom + P.bottom - P.height
      }), b._setToolbarOffset(g, m, f, T, k, w, _, E, z), (V !== f.offsetWidth || U !== f.offsetHeight) && b._setToolbarOffset(g, m, f, T, k, w, _, E, z), n.toolbarContainer) {
        const D = p.parentElement;
        let F = n.toolbarContainer, R = F.offsetLeft, H = F.offsetTop;
        for (; !F.parentElement.contains(D) || !/^(BODY|HTML)$/i.test(F.parentElement.nodeName); )
          F = F.offsetParent, R += F.offsetLeft, H += F.offsetTop;
        f.style.left = f.offsetLeft - R + p.offsetLeft + "px", f.style.top = f.offsetTop - H + p.offsetTop + "px";
      }
      f.style.visibility = "";
    },
    _setToolbarOffset: function(o, a, f, p, h, g, m, y, w) {
      const k = f.offsetWidth, M = a.noText && !o ? 0 : f.offsetHeight, E = (o ? a.left : a.right) - p - k / 2 + g, T = E + k - h;
      let z = (o ? a.top - M - w : a.bottom + w) - (a.noText ? 0 : y) + m, V = E < 0 ? 1 : T < 0 ? E : E - T - 1 - 1, U = !1;
      const P = z + (o ? b._getEditorOffsets(null).top : f.offsetHeight - e.element.wysiwyg.offsetHeight);
      !o && P > 0 && b._getPageBottomSpace() < P ? (o = !0, U = !0) : o && c.documentElement.offsetTop > P && (o = !1, U = !0), U && (z = (o ? a.top - M - w : a.bottom + w) - (a.noText ? 0 : y) + m), f.style.left = d.Math.floor(V) + "px", f.style.top = d.Math.floor(z) + "px", o ? (l.removeClass(e.element._arrow, "se-arrow-up"), l.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = M + "px") : (l.removeClass(e.element._arrow, "se-arrow-down"), l.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -w + "px");
      const D = d.Math.floor(k / 2 + (E - V));
      e.element._arrow.style.left = (D + w > f.offsetWidth ? f.offsetWidth - w : D < w ? w : D) + "px";
    },
    _showToolbarInline: function() {
      if (!u._isInline) return;
      const o = e.element.toolbar;
      n.toolbarContainer ? o.style.position = "relative" : o.style.position = "absolute", o.style.visibility = "hidden", o.style.display = "block", u._inlineToolbarAttr.width = o.style.width = n.toolbarWidth, u._inlineToolbarAttr.top = o.style.top = (n.toolbarContainer ? 0 : -1 - o.offsetHeight) + "px", typeof C.showInline == "function" && C.showInline(o, e, u), b.onScroll_window(), u._inlineToolbarAttr.isShow = !0, o.style.visibility = "";
    },
    _hideToolbar: function() {
      !u._notHideToolbar && !u._variable.isFullScreen && (e.element.toolbar.style.display = "none", u._inlineToolbarAttr.isShow = !1);
    },
    onInput_wysiwyg: function(o) {
      if (/AUDIO/.test(o.target.nodeName)) return !1;
      if (u.isReadOnly || u.isDisabled)
        return o.preventDefault(), o.stopPropagation(), u.history.go(u.history.getCurrentIndex()), !1;
      u._editorRange();
      const a = (o.data === null ? "" : o.data === void 0 ? " " : o.data) || "";
      if (!u._charCount(a))
        return o.preventDefault(), o.stopPropagation(), !1;
      typeof C.onInput == "function" && C.onInput(o, u) === !1 || u.history.push(!0);
    },
    _isUneditableNode: function(o, a) {
      const f = a ? o.startContainer : o.endContainer, p = a ? o.startOffset : o.endOffset, h = a ? "previousSibling" : "nextSibling", g = f.nodeType === 1;
      let m;
      return g ? (m = b._isUneditableNode_getSibling(f.childNodes[p], h, f), m && m.nodeType === 1 && m.getAttribute("contenteditable") === "false") : (m = b._isUneditableNode_getSibling(f, h, f), u.isEdgePoint(f, p, a ? "front" : "end") && m && m.nodeType === 1 && m.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(o, a, f) {
      if (!o) return null;
      let p = o[a];
      if (!p)
        if (p = l.getFormatElement(f), p = p ? p[a] : null, p && !l.isComponent(p)) p = a === "previousSibling" ? p.firstChild : p.lastChild;
        else return null;
      return p;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(o) {
      let a = u.getSelectionNode();
      if (l.isInputElement(a)) return;
      const f = o.keyCode, p = o.shiftKey, h = o.ctrlKey || o.metaKey || f === 91 || f === 92 || f === 224, g = o.altKey;
      if (b._IEisComposing = f === 229, !h && u.isReadOnly && !b._cursorMoveKeyCode.test(f))
        return o.preventDefault(), !1;
      if (u.submenuOff(), u._isBalloon && b._hideToolbar(), typeof C.onKeyDown == "function" && C.onKeyDown(o, u) === !1) return;
      if (h && b._shortcutCommand(f, p))
        return b._onShortcutKey = !0, o.preventDefault(), o.stopPropagation(), !1;
      b._onShortcutKey && (b._onShortcutKey = !1);
      const m = u.getRange(), y = !m.collapsed || m.startContainer !== m.endContainer, w = u._fileManager.pluginRegExp.test(u.currentControllerName) ? u.currentControllerName : "";
      let _ = l.getFormatElement(a, null) || a, k = l.getRangeFormatElement(_, null);
      if (!(/37|38|39|40/.test(o.keyCode) && b._onKeyDown_wysiwyg_arrowKey(o) === !1)) {
        switch (f) {
          case 8:
            if (!y && w) {
              o.preventDefault(), o.stopPropagation(), u.plugins[w].destroy.call(u);
              break;
            }
            if (y && b._hardDelete()) {
              o.preventDefault(), o.stopPropagation();
              break;
            }
            if (!l.isFormatElement(_) && !e.element.wysiwyg.firstElementChild && !l.isComponent(a) && u._setDefaultFormat(n.defaultTag) !== null)
              return o.preventDefault(), o.stopPropagation(), !1;
            if (!y && !_.previousElementSibling && m.startOffset === 0 && !a.previousSibling && !l.isListCell(_) && l.isFormatElement(_) && (!l.isFreeFormatElement(_) || l.isClosureFreeFormatElement(_))) {
              if (l.isClosureRangeFormatElement(_.parentNode))
                return o.preventDefault(), o.stopPropagation(), !1;
              if (l.isWysiwygDiv(_.parentNode) && _.childNodes.length <= 1 && (!_.firstChild || l.onlyZeroWidthSpace(_.textContent))) {
                if (o.preventDefault(), o.stopPropagation(), _.nodeName.toUpperCase() === n.defaultTag.toUpperCase()) {
                  _.innerHTML = "<br>";
                  const S = _.attributes;
                  for (; S[0]; )
                    _.removeAttribute(S[0].name);
                } else {
                  const S = l.createElement(n.defaultTag);
                  S.innerHTML = "<br>", _.parentElement.replaceChild(S, _);
                }
                return u.nativeFocus(), !1;
              }
            }
            const E = m.startContainer;
            if (_ && !_.previousElementSibling && m.startOffset === 0 && E.nodeType === 3 && !l.isFormatElement(E.parentNode)) {
              let S = E.parentNode.previousSibling;
              const O = E.parentNode.nextSibling;
              S || (O ? S = O : (S = l.createElement("BR"), _.appendChild(S)));
              let N = E;
              for (; _.contains(N) && !N.previousSibling; )
                N = N.parentNode;
              if (!_.contains(N)) {
                E.textContent = "", l.removeItemAllParents(E, null, _);
                break;
              }
            }
            if (b._isUneditableNode(m, !0)) {
              o.preventDefault(), o.stopPropagation();
              break;
            }
            !y && u._isEdgeFormat(m.startContainer, m.startOffset, "start") && l.isFormatElement(_.previousElementSibling) && (u._formatAttrsTemp = _.previousElementSibling.attributes);
            const T = m.commonAncestorContainer;
            if (_ = l.getFormatElement(m.startContainer, null), k = l.getRangeFormatElement(_, null), k && _ && !l.isCell(k) && !/^FIGCAPTION$/i.test(k.nodeName)) {
              if (l.isListCell(_) && l.isList(k) && (l.isListCell(k.parentNode) || _.previousElementSibling) && (a === _ || a.nodeType === 3 && (!a.previousSibling || l.isList(a.previousSibling))) && (l.getFormatElement(m.startContainer, null) !== l.getFormatElement(m.endContainer, null) ? k.contains(m.startContainer) : m.startOffset === 0 && m.collapsed)) {
                if (m.startContainer !== m.endContainer)
                  o.preventDefault(), u.removeNode(), m.startContainer.nodeType === 3 && u.setRange(m.startContainer, m.startContainer.textContent.length, m.startContainer, m.startContainer.textContent.length), u.history.push(!0);
                else {
                  let S = _.previousElementSibling || k.parentNode;
                  if (l.isListCell(S)) {
                    o.preventDefault();
                    let O = S;
                    if (!S.contains(_) && l.isListCell(O) && l.isList(O.lastElementChild)) {
                      for (O = O.lastElementChild.lastElementChild; l.isListCell(O) && l.isList(O.lastElementChild); )
                        O = O.lastElementChild && O.lastElementChild.lastElementChild;
                      S = O;
                    }
                    let N = S === k.parentNode ? k.previousSibling : S.lastChild;
                    N || (N = l.createTextNode(l.zeroWidthSpace), k.parentNode.insertBefore(N, k.parentNode.firstChild));
                    const I = N.nodeType === 3 ? N.textContent.length : 1, q = _.childNodes;
                    let $ = N, K = q[0];
                    for (; K = q[0]; )
                      S.insertBefore(K, $.nextSibling), $ = K;
                    l.removeItem(_), k.children.length === 0 && l.removeItem(k), u.setRange(N, I, N, I), u.history.push(!0);
                  }
                }
                break;
              }
              if (!y && m.startOffset === 0) {
                let S = !0, O = T;
                for (; O && O !== k && !l.isWysiwygDiv(O); ) {
                  if (O.previousSibling && (O.previousSibling.nodeType === 1 || !l.onlyZeroWidthSpace(O.previousSibling.textContent.trim()))) {
                    S = !1;
                    break;
                  }
                  O = O.parentNode;
                }
                if (S && k.parentNode) {
                  o.preventDefault(), u.detachRangeFormatElement(k, l.isListCell(_) ? [_] : null, null, !1, !1), u.history.push(!0);
                  break;
                }
              }
            }
            if (!y && _ && (m.startOffset === 0 || a === _ && _.childNodes[m.startOffset])) {
              const S = a === _ ? _.childNodes[m.startOffset] : a, O = _.previousSibling, N = (T.nodeType === 3 || l.isBreak(T)) && !T.previousSibling && m.startOffset === 0;
              if (S && !S.previousSibling && (T && l.isComponent(T.previousSibling) || N && l.isComponent(O))) {
                const I = u.getFileComponent(O);
                I ? (o.preventDefault(), o.stopPropagation(), _.textContent.length === 0 && l.removeItem(_), u.selectComponent(I.target, I.pluginName) === !1 && u.blur()) : l.isComponent(O) && (o.preventDefault(), o.stopPropagation(), l.removeItem(O));
                break;
              }
              if (S && l.isNonEditable(S.previousSibling)) {
                o.preventDefault(), o.stopPropagation(), l.removeItem(S.previousSibling);
                break;
              }
            }
            break;
          case 46:
            if (w) {
              o.preventDefault(), o.stopPropagation(), u.plugins[w].destroy.call(u);
              break;
            }
            if (y && b._hardDelete()) {
              o.preventDefault(), o.stopPropagation();
              break;
            }
            if (b._isUneditableNode(m, !1)) {
              o.preventDefault(), o.stopPropagation();
              break;
            }
            if ((l.isFormatElement(a) || a.nextSibling === null || l.onlyZeroWidthSpace(a.nextSibling) && a.nextSibling.nextSibling === null) && m.startOffset === a.textContent.length) {
              const S = _.nextElementSibling;
              if (!S) break;
              if (l.isComponent(S)) {
                if (o.preventDefault(), l.onlyZeroWidthSpace(_) && (l.removeItem(_), l.isTable(S))) {
                  let N = l.getChildElement(S, l.isCell, !1);
                  N = N.firstElementChild || N, u.setRange(N, 0, N, 0);
                  break;
                }
                const O = u.getFileComponent(S);
                O ? (o.stopPropagation(), u.selectComponent(O.target, O.pluginName) === !1 && u.blur()) : l.isComponent(S) && (o.stopPropagation(), l.removeItem(S));
                break;
              }
            }
            if (!y && (u.isEdgePoint(m.endContainer, m.endOffset) || a === _ && _.childNodes[m.startOffset])) {
              const S = a === _ && _.childNodes[m.startOffset] || a;
              if (S && l.isNonEditable(S.nextSibling)) {
                o.preventDefault(), o.stopPropagation(), l.removeItem(S.nextSibling);
                break;
              } else if (l.isComponent(S)) {
                o.preventDefault(), o.stopPropagation(), l.removeItem(S);
                break;
              }
            }
            if (!y && u._isEdgeFormat(m.endContainer, m.endOffset, "end") && l.isFormatElement(_.nextElementSibling) && (u._formatAttrsTemp = _.attributes), _ = l.getFormatElement(m.startContainer, null), k = l.getRangeFormatElement(_, null), l.isListCell(_) && l.isList(k) && (a === _ || a.nodeType === 3 && (!a.nextSibling || l.isList(a.nextSibling)) && (l.getFormatElement(m.startContainer, null) !== l.getFormatElement(m.endContainer, null) ? k.contains(m.endContainer) : m.endOffset === a.textContent.length && m.collapsed))) {
              m.startContainer !== m.endContainer && u.removeNode();
              let S = l.getArrayItem(_.children, l.isList, !1);
              if (S = S || _.nextElementSibling || k.parentNode.nextElementSibling, S && (l.isList(S) || l.getArrayItem(S.children, l.isList, !1))) {
                o.preventDefault();
                let O, N;
                if (l.isList(S)) {
                  const I = S.firstElementChild;
                  for (N = I.childNodes, O = N[0]; N[0]; )
                    _.insertBefore(N[0], S);
                  l.removeItem(I);
                } else {
                  for (O = S.firstChild, N = S.childNodes; N[0]; )
                    _.appendChild(N[0]);
                  l.removeItem(S);
                }
                u.setRange(O, 0, O, 0), u.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (w || n.tabDisable || (o.preventDefault(), h || g || l.isWysiwygDiv(a))) break;
            const z = !m.collapsed || u.isEdgePoint(m.startContainer, m.startOffset), V = u.getSelectedElements(null);
            a = u.getSelectionNode();
            const U = [];
            let P = [], D = l.isListCell(V[0]), F = l.isListCell(V[V.length - 1]), R = { sc: m.startContainer, so: m.startOffset, ec: m.endContainer, eo: m.endOffset };
            for (let S = 0, O = V.length, N; S < O; S++)
              if (N = V[S], l.isListCell(N)) {
                if (!N.previousElementSibling && !p)
                  continue;
                U.push(N);
              } else
                P.push(N);
            if (U.length > 0 && z && u.plugins.list)
              R = u.plugins.list.editInsideList.call(u, p, U);
            else {
              const S = l.getParentElement(a, l.isCell);
              if (S && z) {
                const O = l.getParentElement(S, "table"), N = l.getListChildren(O, l.isCell);
                let I = p ? l.prevIdx(N, S) : l.nextIdx(N, S);
                I === N.length && !p && (I = 0), I === -1 && p && (I = N.length - 1);
                let q = N[I];
                if (!q) break;
                q = q.firstElementChild || q, u.setRange(q, 0, q, 0);
                break;
              }
              P = P.concat(U), D = F = null;
            }
            if (P.length > 0)
              if (p) {
                const S = P.length - 1;
                for (let I = 0, q; I <= S; I++) {
                  q = P[I].childNodes;
                  for (let $ = 0, K = q.length, G; $ < K && (G = q[$], !!G); $++)
                    if (!l.onlyZeroWidthSpace(G)) {
                      /^\s{1,4}$/.test(G.textContent) ? l.removeItem(G) : /^\s{1,4}/.test(G.textContent) && (G.textContent = G.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const O = l.getChildElement(P[0], "text", !1), N = l.getChildElement(P[S], "text", !0);
                !D && O && (R.sc = O, R.so = 0), !F && N && (R.ec = N, R.eo = N.textContent.length);
              } else {
                const S = l.createTextNode(new d.Array(u._variable.tabSize + 1).join(" "));
                if (P.length === 1) {
                  const O = u.insertNode(S, null, !0);
                  if (!O) return !1;
                  D || (R.sc = S, R.so = O.endOffset), F || (R.ec = S, R.eo = O.endOffset);
                } else {
                  const O = P.length - 1;
                  for (let q = 0, $; q <= O; q++)
                    $ = P[q].firstChild, $ && (l.isBreak($) ? P[q].insertBefore(S.cloneNode(!1), $) : $.textContent = S.textContent + $.textContent);
                  const N = l.getChildElement(P[0], "text", !1), I = l.getChildElement(P[O], "text", !0);
                  !D && N && (R.sc = N, R.so = 0), !F && I && (R.ec = I, R.eo = I.textContent.length);
                }
              }
            u.setRange(R.sc, R.so, R.ec, R.eo), u.history.push(!1);
            break;
          case 13:
            const H = l.getFreeFormatElement(a, null);
            if (u._charTypeHTML) {
              let S = "";
              if (!p && H || p ? S = "<br>" : S = "<" + _.nodeName + "><br></" + _.nodeName + ">", !u.checkCharCount(S, "byte-html"))
                return o.preventDefault(), !1;
            }
            if (!p && !w) {
              const S = u._isEdgeFormat(m.endContainer, m.endOffset, "end"), O = u._isEdgeFormat(m.startContainer, m.startOffset, "start");
              if (S && (/^H[1-6]$/i.test(_.nodeName) || /^HR$/i.test(_.nodeName))) {
                b._enterPrevent(o);
                let N = null;
                const I = u.appendFormatTag(_, n.defaultTag);
                if (S && S.length > 0) {
                  N = S.pop();
                  const q = N;
                  for (; S.length > 0; )
                    N = N.appendChild(S.pop());
                  I.appendChild(q);
                }
                if (N = N ? N.appendChild(I.firstChild) : I.firstChild, l.isBreak(N)) {
                  const q = l.createTextNode(l.zeroWidthSpace);
                  N.parentNode.insertBefore(q, N), u.setRange(q, 1, q, 1);
                } else
                  u.setRange(N, 0, N, 0);
                break;
              } else if (k && _ && !l.isCell(k) && !/^FIGCAPTION$/i.test(k.nodeName)) {
                const N = u.getRange();
                if (u.isEdgePoint(N.endContainer, N.endOffset) && l.isList(a.nextSibling)) {
                  b._enterPrevent(o);
                  const I = l.createElement("LI"), q = l.createElement("BR");
                  I.appendChild(q), _.parentNode.insertBefore(I, _.nextElementSibling), I.appendChild(a.nextSibling), u.setRange(q, 1, q, 1);
                  break;
                }
                if ((N.commonAncestorContainer.nodeType !== 3 || !N.commonAncestorContainer.nextElementSibling) && l.onlyZeroWidthSpace(_.innerText.trim()) && !l.isListCell(_.nextElementSibling)) {
                  b._enterPrevent(o);
                  let I = null;
                  if (l.isListCell(k.parentNode)) {
                    const q = _.parentNode.parentNode;
                    k = q.parentNode;
                    const $ = l.createElement("LI");
                    $.innerHTML = "<br>", l.copyTagAttributes($, _, n.lineAttrReset), I = $, k.insertBefore(I, q.nextElementSibling);
                  } else {
                    const q = l.isCell(k.parentNode) ? "DIV" : l.isList(k.parentNode) ? "LI" : l.isFormatElement(k.nextElementSibling) && !l.isRangeFormatElement(k.nextElementSibling) ? k.nextElementSibling.nodeName : l.isFormatElement(k.previousElementSibling) && !l.isRangeFormatElement(k.previousElementSibling) ? k.previousElementSibling.nodeName : n.defaultTag;
                    I = l.createElement(q), l.copyTagAttributes(I, _, n.lineAttrReset);
                    const $ = u.detachRangeFormatElement(k, [_], null, !0, !0);
                    $.cc.insertBefore(I, $.ec);
                  }
                  I.innerHTML = "<br>", l.removeItemAllParents(_, null, null), u.setRange(I, 1, I, 1);
                  break;
                }
              }
              if (H) {
                b._enterPrevent(o);
                const N = a === H, I = u.getSelection(), q = a.childNodes, $ = I.focusOffset, K = a.previousElementSibling, G = a.nextSibling;
                if (!l.isClosureFreeFormatElement(H) && q && (N && m.collapsed && q.length - 1 <= $ + 1 && l.isBreak(q[$]) && (!q[$ + 1] || (!q[$ + 2] || l.onlyZeroWidthSpace(q[$ + 2].textContent)) && q[$ + 1].nodeType === 3 && l.onlyZeroWidthSpace(q[$ + 1].textContent)) && $ > 0 && l.isBreak(q[$ - 1]) || !N && l.onlyZeroWidthSpace(a.textContent) && l.isBreak(K) && (l.isBreak(K.previousSibling) || !l.onlyZeroWidthSpace(K.previousSibling.textContent)) && (!G || !l.isBreak(G) && l.onlyZeroWidthSpace(G.textContent)))) {
                  N ? l.removeItem(q[$ - 1]) : l.removeItem(a);
                  const j = u.appendFormatTag(H, l.isFormatElement(H.nextElementSibling) && !l.isRangeFormatElement(H.nextElementSibling) ? H.nextElementSibling : null);
                  l.copyFormatAttributes(j, H), u.setRange(j, 1, j, 1);
                  break;
                }
                if (N) {
                  C.insertHTML(m.collapsed && l.isBreak(m.startContainer.childNodes[m.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let j = I.focusNode;
                  const ee = I.focusOffset;
                  H === j && (j = j.childNodes[ee - $ > 1 ? ee - 1 : ee]), u.setRange(j, 1, j, 1);
                } else {
                  const j = I.focusNode.nextSibling, ee = l.createElement("BR");
                  u.insertNode(ee, null, !1);
                  const se = ee.previousSibling, re = ee.nextSibling;
                  !l.isBreak(j) && !l.isBreak(se) && (!re || l.onlyZeroWidthSpace(re)) ? (ee.parentNode.insertBefore(ee.cloneNode(!1), ee), u.setRange(ee, 1, ee, 1)) : u.setRange(re, 0, re, 0);
                }
                b._onShortcutKey = !0;
                break;
              }
              if (m.collapsed && (O || S)) {
                b._enterPrevent(o);
                const N = l.createElement("BR"), I = l.createElement(_.nodeName);
                l.copyTagAttributes(I, _, n.lineAttrReset);
                let q = N;
                do {
                  if (!l.isBreak(a) && a.nodeType === 1) {
                    const $ = a.cloneNode(!1);
                    $.appendChild(q), q = $;
                  }
                  a = a.parentNode;
                } while (_ !== a && _.contains(a));
                I.appendChild(q), _.parentNode.insertBefore(I, O && !S ? _ : _.nextElementSibling), S && u.setRange(N, 1, N, 1);
                break;
              }
              if (_) {
                o.stopPropagation();
                let N, I = 0;
                if (m.collapsed)
                  l.onlyZeroWidthSpace(_) ? N = u.appendFormatTag(_, _.cloneNode(!1)) : N = l.splitElement(m.endContainer, m.endOffset, l.getElementDepth(_));
                else {
                  const q = l.getFormatElement(m.startContainer, null) !== l.getFormatElement(m.endContainer, null), $ = _.cloneNode(!1);
                  $.innerHTML = "<br>";
                  const K = u.removeNode();
                  if (N = l.getFormatElement(K.container, null), !N) {
                    l.isWysiwygDiv(K.container) && (b._enterPrevent(o), e.element.wysiwyg.appendChild($), N = $, l.copyTagAttributes(N, _, n.lineAttrReset), u.setRange(N, I, N, I));
                    break;
                  }
                  const G = l.getRangeFormatElement(K.container);
                  if (N = N.contains(G) ? l.getChildElement(G, l.getFormatElement.bind(l)) : N, q) {
                    if (S && !O)
                      N.parentNode.insertBefore($, !K.prevContainer || K.container === K.prevContainer ? N.nextElementSibling : N), N = $, I = 0;
                    else if (I = K.offset, O) {
                      const j = N.parentNode.insertBefore($, N);
                      S && (N = j, I = 0);
                    }
                  } else
                    S && O ? (N.parentNode.insertBefore($, K.prevContainer && K.container === K.prevContainer ? N.nextElementSibling : N), N = $, I = 0) : N = l.splitElement(K.container, K.offset, l.getElementDepth(_));
                }
                b._enterPrevent(o), l.copyTagAttributes(N, _, n.lineAttrReset), u.setRange(N, I, N, I);
                break;
              }
            }
            if (y) break;
            if (k && l.getParentElement(k, "FIGCAPTION") && l.getParentElement(k, l.isList) && (b._enterPrevent(o), _ = u.appendFormatTag(_, null), u.setRange(_, 0, _, 0)), w) {
              o.preventDefault(), o.stopPropagation(), u.containerOff(), u.controllersOff();
              const S = e[w], O = S._container, N = O.previousElementSibling || O.nextElementSibling;
              let I = null;
              l.isListCell(O.parentNode) ? I = l.createElement("BR") : (I = l.createElement(l.isFormatElement(N) && !l.isRangeFormatElement(N) ? N.nodeName : n.defaultTag), I.innerHTML = "<br>"), p ? O.parentNode.insertBefore(I, O) : O.parentNode.insertBefore(I, O.nextElementSibling), u.callPlugin(w, function() {
                u.selectComponent(S._element, w) === !1 && u.blur();
              }, null);
            }
            break;
          case 27:
            if (w)
              return o.preventDefault(), o.stopPropagation(), u.controllersOff(), !1;
            break;
        }
        if (p && f === 16) {
          o.preventDefault(), o.stopPropagation();
          const E = u.plugins.table;
          if (E && !E._shift && !E._ref) {
            const T = l.getParentElement(_, l.isCell);
            if (T) {
              E.onTableCellMultiSelect.call(u, T, !0);
              return;
            }
          }
        } else if (p && (l.isOSX_IOS ? g : h) && f === 32) {
          o.preventDefault(), o.stopPropagation();
          const E = u.insertNode(l.createTextNode(" "));
          if (E && E.container) {
            u.setRange(E.container, E.endOffset, E.container, E.endOffset);
            return;
          }
        }
        if (l.isIE && !h && !g && !y && !b._nonTextKeyCode.test(f) && l.isBreak(m.commonAncestorContainer)) {
          const E = l.createTextNode(l.zeroWidthSpace);
          u.insertNode(E, null, !1), u.setRange(E, 1, E, 1);
        }
        b._directionKeyCode.test(f) && (u._editorRange(), b._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(o) {
      if (o.shiftKey) return;
      let a = u.getSelectionNode();
      const f = function(g, m = 0) {
        if (o.preventDefault(), o.stopPropagation(), !g) return;
        let y = u.getFileComponent(g);
        y ? u.selectComponent(y.target, y.pluginName) : (u.setRange(g, m, g, m), u.controllersOff());
      }, p = l.getParentElement(a, "table");
      if (p) {
        const g = l.getParentElement(a, "tr"), m = l.getParentElement(a, "td");
        let y = m, w = m;
        if (m) {
          for (; y.firstChild; ) y = y.firstChild;
          for (; w.lastChild; ) w = w.lastChild;
        }
        let _ = a;
        for (; _.firstChild; ) _ = _.firstChild;
        const k = _ === y, M = _ === w;
        let E = null, T = 0;
        if (o.keyCode === 38 && k) {
          const z = g && g.previousElementSibling;
          for (z ? E = z.children[m.cellIndex] : E = l.getPreviousDeepestNode(p, u.context.element.wysiwyg); E.lastChild; ) E = E.lastChild;
          E && (T = E.textContent.length);
        } else if (o.keyCode === 40 && M) {
          const z = g && g.nextElementSibling;
          for (z ? E = z.children[m.cellIndex] : E = l.getNextDeepestNode(p, u.context.element.wysiwyg); E.firstChild; ) E = E.firstChild;
        }
        if (E)
          return f(E, T), !1;
      }
      const h = u.getFileComponent(a);
      if (h) {
        const g = /37|38/.test(o.keyCode), m = /39|40/.test(o.keyCode);
        if (g) {
          const y = l.getPreviousDeepestNode(h.target, u.context.element.wysiwyg);
          f(y, y && y.textContent.length);
        } else if (m) {
          const y = l.getNextDeepestNode(h.target, u.context.element.wysiwyg);
          f(y);
        }
      }
    },
    onKeyUp_wysiwyg: function(o) {
      if (b._onShortcutKey) return;
      u._editorRange();
      const a = o.keyCode, f = o.ctrlKey || o.metaKey || a === 91 || a === 92 || a === 224, p = o.altKey;
      if (u.isReadOnly) {
        !f && b._cursorMoveKeyCode.test(a) && b._applyTagEffects();
        return;
      }
      const h = u.getRange();
      let g = u.getSelectionNode();
      if (u._isBalloon && (u._isBalloonAlways && a !== 27 || !h.collapsed))
        if (u._isBalloonAlways)
          a !== 27 && b._showToolbarBalloonDelay();
        else {
          b._showToolbarBalloon();
          return;
        }
      let m = g;
      for (; m.firstChild; ) m = m.firstChild;
      const y = u.getFileComponent(m);
      if (!(o.keyCode === 16 || o.shiftKey) && y ? u.selectComponent(y.target, y.pluginName) : u.currentFileComponentInfo && u.controllersOff(), a === 8 && l.isWysiwygDiv(g) && g.textContent === "" && g.children.length === 0) {
        o.preventDefault(), o.stopPropagation(), g.innerHTML = "";
        const E = l.createElement(l.isFormatElement(u._variable.currentNodes[0]) ? u._variable.currentNodes[0] : n.defaultTag);
        E.innerHTML = "<br>", g.appendChild(E), u.setRange(E, 0, E, 0), b._applyTagEffects(), u.history.push(!1);
        return;
      }
      const w = l.getFormatElement(g, null), _ = l.getRangeFormatElement(g, null), k = u._formatAttrsTemp;
      if (k) {
        for (let E = 0, T = k.length; E < T; E++) {
          if (a === 13 && /^id$/i.test(k[E].name)) {
            w.removeAttribute("id");
            continue;
          }
          w.setAttribute(k[E].name, k[E].value);
        }
        u._formatAttrsTemp = null;
      }
      if (!w && h.collapsed && !l.isComponent(g) && !l.isList(g) && u._setDefaultFormat(l.isRangeFormatElement(_) ? "DIV" : n.defaultTag) !== null && (g = u.getSelectionNode()), !f && !p && !b._nonTextKeyCode.test(a) && g.nodeType === 3 && l.zeroWidthRegExp.test(g.textContent) && !(o.isComposing !== void 0 ? o.isComposing : b._IEisComposing)) {
        let E = h.startOffset, T = h.endOffset;
        const z = (g.textContent.substring(0, T).match(b._frontZeroWidthReg) || "").length;
        E = h.startOffset - z, T = h.endOffset - z, g.textContent = g.textContent.replace(l.zeroWidthRegExp, ""), u.setRange(g, E < 0 ? 0 : E, g, T < 0 ? 0 : T);
      }
      u._charCount(""), !(typeof C.onKeyUp == "function" && C.onKeyUp(o, u) === !1) && !f && !p && !b._historyIgnoreKeyCode.test(a) && u.history.push(!0);
    },
    onScroll_wysiwyg: function(o) {
      u.controllersOff(), u._isBalloon && b._hideToolbar(), typeof C.onScroll == "function" && C.onScroll(o, u);
    },
    onFocus_wysiwyg: function(o) {
      u._antiBlur || (u.hasFocus = !0, d.setTimeout(b._applyTagEffects), u._isInline && b._showToolbarInline(), typeof C.onFocus == "function" && C.onFocus(o, u));
    },
    onBlur_wysiwyg: function(o) {
      u._antiBlur || u._variable.isCodeView || (u.hasFocus = !1, u.effectNode = null, u.controllersOff(), (u._isInline || u._isBalloon) && b._hideToolbar(), u._setKeyEffect([]), u._variable.currentNodes = [], u._variable.currentNodesMap = [], n.showPathLabel && (e.element.navigation.textContent = ""), typeof C.onBlur == "function" && C.onBlur(o, u, this));
    },
    onMouseDown_resizingBar: function(o) {
      o.stopPropagation(), u.submenuOff(), u.controllersOff(), u._variable.resizeClientY = o.clientY, e.element.resizeBackground.style.display = "block";
      function a() {
        e.element.resizeBackground.style.display = "none", c.removeEventListener("mousemove", b._resize_editor), c.removeEventListener("mouseup", a);
      }
      c.addEventListener("mousemove", b._resize_editor), c.addEventListener("mouseup", a);
    },
    _resize_editor: function(o) {
      const a = e.element.editorArea.offsetHeight + (o.clientY - u._variable.resizeClientY), f = a < u._variable.minResizingSize ? u._variable.minResizingSize : a;
      e.element.wysiwygFrame.style.height = e.element.code.style.height = f + "px", u._variable.resizeClientY = o.clientY, l.isResizeObserverSupported || u.__callResizeFunction(f, null);
    },
    onResize_window: function() {
      l.isResizeObserverSupported || u.resetResponsiveToolbar();
      const o = e.element.toolbar, a = o.style.display === "none" || u._isInline && !u._inlineToolbarAttr.isShow;
      if (!(o.offsetWidth === 0 && !a)) {
        if (e.fileBrowser && e.fileBrowser.area.style.display === "block" && (e.fileBrowser.body.style.maxHeight = d.innerHeight - e.fileBrowser.header.offsetHeight - 50 + "px"), u.submenuActiveButton && u.submenu && u._setMenuPosition(u.submenuActiveButton, u.submenu), u._variable.isFullScreen) {
          u._variable.innerHeight_fullScreen += d.innerHeight - o.offsetHeight - u._variable.innerHeight_fullScreen, e.element.editorArea.style.height = u._variable.innerHeight_fullScreen + "px";
          return;
        }
        if (u._variable.isCodeView && u._isInline) {
          b._showToolbarInline();
          return;
        }
        u._iframeAutoHeight(), u._sticky && (o.style.width = e.element.topArea.offsetWidth - 2 + "px", b.onScroll_window());
      }
    },
    onScroll_window: function() {
      if (u._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || n.stickyToolbar < 0) return;
      const o = e.element, a = o.editorArea.offsetHeight, f = (this.scrollY || c.documentElement.scrollTop) + n.stickyToolbar, p = b._getEditorOffsets(n.toolbarContainer).top - (u._isInline ? o.toolbar.offsetHeight : 0), h = u._isInline && f - p > 0 ? f - p - e.element.toolbar.offsetHeight : 0;
      f < p ? b._offStickyToolbar() : f + u._variable.minResizingSize >= a + p ? (u._sticky || b._onStickyToolbar(h), o.toolbar.style.top = h + a + p + n.stickyToolbar - f - u._variable.minResizingSize + "px") : f >= p && b._onStickyToolbar(h);
    },
    _getEditorOffsets: function(o) {
      let a = o || e.element.topArea, f = 0, p = 0, h = 0;
      for (; a; )
        f += a.offsetTop, p += a.offsetLeft, h += a.scrollTop, a = a.offsetParent;
      return {
        top: f,
        left: p,
        scroll: h
      };
    },
    _getPageBottomSpace: function() {
      return c.documentElement.scrollHeight - (b._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
    },
    _onStickyToolbar: function(o) {
      const a = e.element;
      !u._isInline && !n.toolbarContainer && (a._stickyDummy.style.height = a.toolbar.offsetHeight + "px", a._stickyDummy.style.display = "block"), a.toolbar.style.top = n.stickyToolbar + o + "px", a.toolbar.style.width = u._isInline ? u._inlineToolbarAttr.width : a.toolbar.offsetWidth + "px", l.addClass(a.toolbar, "se-toolbar-sticky"), u._sticky = !0;
    },
    _offStickyToolbar: function() {
      const o = e.element;
      o._stickyDummy.style.display = "none", o.toolbar.style.top = u._isInline ? u._inlineToolbarAttr.top : "", o.toolbar.style.width = u._isInline ? u._inlineToolbarAttr.width : "", o.editorArea.style.marginTop = "", l.removeClass(o.toolbar, "se-toolbar-sticky"), u._sticky = !1;
    },
    _codeViewAutoHeight: function() {
      u._variable.isFullScreen || (e.element.code.style.height = e.element.code.scrollHeight + "px");
    },
    // FireFox - table delete, Chrome - image, video, audio
    _hardDelete: function() {
      const o = u.getRange(), a = o.startContainer, f = o.endContainer, p = l.getRangeFormatElement(a), h = l.getRangeFormatElement(f), g = l.isCell(p), m = l.isCell(h), y = o.commonAncestorContainer;
      if ((g && !p.previousElementSibling && !p.parentElement.previousElementSibling || m && !h.nextElementSibling && !h.parentElement.nextElementSibling) && p !== h)
        if (!g)
          l.removeItem(l.getParentElement(h, function(k) {
            return y === k.parentNode;
          }));
        else if (!m)
          l.removeItem(l.getParentElement(p, function(k) {
            return y === k.parentNode;
          }));
        else
          return l.removeItem(l.getParentElement(p, function(k) {
            return y === k.parentNode;
          })), u.nativeFocus(), !0;
      const w = a.nodeType === 1 ? l.getParentElement(a, ".se-component") : null, _ = f.nodeType === 1 ? l.getParentElement(f, ".se-component") : null;
      return w && l.removeItem(w), _ && l.removeItem(_), !1;
    },
    onPaste_wysiwyg: function(o) {
      const a = l.isIE ? d.clipboardData : o.clipboardData;
      return a ? b._dataTransferAction("paste", o, a) : !0;
    },
    _setClipboardComponent: function(o, a, f) {
      o.preventDefault(), o.stopPropagation(), f.setData("text/html", a.component.outerHTML);
    },
    onCopy_wysiwyg: function(o) {
      const a = l.isIE ? d.clipboardData : o.clipboardData;
      if (typeof C.onCopy == "function" && C.onCopy(o, a, u) === !1)
        return o.preventDefault(), o.stopPropagation(), !1;
      const f = u.currentFileComponentInfo;
      f && !l.isIE && (b._setClipboardComponent(o, f, a), l.addClass(f.component, "se-component-copy"), d.setTimeout(function() {
        l.removeClass(f.component, "se-component-copy");
      }, 150));
    },
    onSave_wysiwyg: function(o) {
      if (typeof C.onSave == "function") {
        C.onSave(o, u);
        return;
      }
    },
    onCut_wysiwyg: function(o) {
      const a = l.isIE ? d.clipboardData : o.clipboardData;
      if (typeof C.onCut == "function" && C.onCut(o, a, u) === !1)
        return o.preventDefault(), o.stopPropagation(), !1;
      const f = u.currentFileComponentInfo;
      f && !l.isIE && (b._setClipboardComponent(o, f, a), l.removeItem(f.component), u.controllersOff()), d.setTimeout(function() {
        u.history.push(!1);
      });
    },
    onDrop_wysiwyg: function(o) {
      if (u.isReadOnly || l.isIE)
        return o.preventDefault(), o.stopPropagation(), !1;
      const a = o.dataTransfer;
      return a ? (b._setDropLocationSelection(o), u.removeNode(), document.body.contains(u.currentControllerTarget) || u.controllersOff(), b._dataTransferAction("drop", o, a)) : !0;
    },
    _setDropLocationSelection: function(o) {
      const a = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
      let f = null;
      if (o.rangeParent ? (a.startContainer = o.rangeParent, a.startOffset = o.rangeOffset, a.endContainer = o.rangeParent, a.endOffset = o.rangeOffset) : u._wd.caretRangeFromPoint ? f = u._wd.caretRangeFromPoint(o.clientX, o.clientY) : f = u.getRange(), f && (a.startContainer = f.startContainer, a.startOffset = f.startOffset, a.endContainer = f.endContainer, a.endOffset = f.endOffset), a.startContainer === a.endContainer) {
        const p = l.getParentElement(a.startContainer, l.isComponent);
        p && (a.startContainer = p, a.startOffset = 0, a.endContainer = p, a.endOffset = 0);
      }
      u.setRange(a.startContainer, a.startOffset, a.endContainer, a.endOffset);
    },
    _dataTransferAction: function(o, a, f) {
      let p, h;
      if (l.isIE) {
        p = f.getData("Text");
        const g = u.getRange(), m = l.createElement("DIV"), y = {
          sc: g.startContainer,
          so: g.startOffset,
          ec: g.endContainer,
          eo: g.endOffset
        };
        return m.setAttribute("contenteditable", !0), m.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(m), m.focus(), d.setTimeout(function() {
          h = m.innerHTML, l.removeItem(m), u.setRange(y.sc, y.so, y.ec, y.eo), b._setClipboardData(o, a, p, h, f);
        }), !0;
      } else if (p = f.getData("text/plain"), h = f.getData("text/html"), b._setClipboardData(o, a, p, h, f) === !1)
        return a.preventDefault(), a.stopPropagation(), !1;
    },
    _setClipboardData: function(o, a, f, p, h) {
      const g = /class=["']*Mso(Normal|List)/i.test(p) || /content=["']*Word.Document/i.test(p) || /content=["']*OneNote.File/i.test(p) || /content=["']*Excel.Sheet/i.test(p);
      !p ? p = l._HTMLConvertor(f).replace(/\n/g, "<br>") : (p = p.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), g && (p = p.replace(/\n/g, " "), f = f.replace(/\n/g, " ")), p = u.cleanHTML(p, u.pasteTagsWhitelistRegExp, u.pasteTagsBlacklistRegExp));
      const y = u._charCount(u._charTypeHTML ? p : f);
      if (o === "paste" && typeof C.onPaste == "function") {
        const _ = C.onPaste(a, p, y, u);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          p = _;
        }
      }
      if (o === "drop" && typeof C.onDrop == "function") {
        const _ = C.onDrop(a, p, y, u);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          p = _;
        }
      }
      const w = h.files;
      if (w.length > 0 && !g)
        return /^image/.test(w[0].type) && u.plugins.image && C.insertImage(w), !1;
      if (!y)
        return !1;
      if (p)
        return C.insertHTML(p, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(o) {
      if (u.isDisabled || u.isReadOnly) return !1;
      const a = l.getParentElement(o.target, l.isComponent), f = u._lineBreaker.style;
      if (a && !u.currentControllerName) {
        const p = e.element;
        let h = 0, g = p.wysiwyg;
        do
          h += g.scrollTop, g = g.parentElement;
        while (g && !/^(BODY|HTML)$/i.test(g.nodeName));
        const m = p.wysiwyg.scrollTop, y = b._getEditorOffsets(null), w = l.getOffset(a, p.wysiwygFrame).top + m, _ = o.pageY + h + (n.iframe && !n.toolbarContainer ? p.toolbar.offsetHeight : 0), k = w + (n.iframe ? h : y.top), M = l.isListCell(a.parentNode);
        let E = "", T = "";
        if ((M ? !a.previousSibling : !l.isFormatElement(a.previousElementSibling)) && _ < k + 20)
          T = w, E = "t";
        else if ((M ? !a.nextSibling : !l.isFormatElement(a.nextElementSibling)) && _ > k + a.offsetHeight - 20)
          T = w + a.offsetHeight, E = "b";
        else {
          f.display = "none";
          return;
        }
        u._variable._lineBreakComp = a, u._variable._lineBreakDir = E, f.top = T - m + "px", u._lineBreakerButton.style.left = l.getOffset(a).left + a.offsetWidth / 2 - 15 + "px", f.display = "block";
      } else f.display !== "none" && (f.display = "none");
    },
    _enterPrevent(o) {
      o.preventDefault(), l.isMobile && u.__focusTemp.focus();
    },
    _onMouseDown_lineBreak: function(o) {
      o.preventDefault();
    },
    _onLineBreak: function(o) {
      o.preventDefault();
      const a = u._variable._lineBreakComp, f = this ? this : u._variable._lineBreakDir, p = l.isListCell(a.parentNode), h = l.createElement(p ? "BR" : l.isCell(a.parentNode) ? "DIV" : n.defaultTag);
      if (p || (h.innerHTML = "<br>"), u._charTypeHTML && !u.checkCharCount(h.outerHTML, "byte-html")) return;
      a.parentNode.insertBefore(h, f === "t" ? a : a.nextSibling), u._lineBreaker.style.display = "none", u._variable._lineBreakComp = null;
      const g = p ? h : h.firstChild;
      u.setRange(g, 1, g, 1), u.history.push(!1);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const o = n.iframe ? u._ww : e.element.wysiwyg;
      l.isResizeObserverSupported && (this._resizeObserver = new d.ResizeObserver(function(a) {
        u.__callResizeFunction(-1, a[0]);
      })), e.element.toolbar.addEventListener("mousedown", b._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", b._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", b.onClick_toolbar, !1), o.addEventListener("mousedown", b.onMouseDown_wysiwyg, !1), o.addEventListener("click", b.onClick_wysiwyg, !1), o.addEventListener(l.isIE ? "textinput" : "input", b.onInput_wysiwyg, !1), o.addEventListener("keydown", b.onKeyDown_wysiwyg, !1), o.addEventListener("keyup", b.onKeyUp_wysiwyg, !1), o.addEventListener("paste", b.onPaste_wysiwyg, !1), o.addEventListener("copy", b.onCopy_wysiwyg, !1), o.addEventListener("cut", b.onCut_wysiwyg, !1), o.addEventListener("drop", b.onDrop_wysiwyg, !1), o.addEventListener("scroll", b.onScroll_wysiwyg, !1), o.addEventListener("focus", b.onFocus_wysiwyg, !1), o.addEventListener("blur", b.onBlur_wysiwyg, !1), b._lineBreakerBind = { a: b._onLineBreak.bind(""), t: b._onLineBreak.bind("t"), b: b._onLineBreak.bind("b") }, o.addEventListener("mousemove", b.onMouseMove_wysiwyg, !1), u._lineBreakerButton.addEventListener("mousedown", b._onMouseDown_lineBreak, !1), u._lineBreakerButton.addEventListener("click", b._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", b._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", b._lineBreakerBind.b, !1), o.addEventListener("touchstart", b.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), o.addEventListener("touchend", b.onClick_wysiwyg, { passive: !0, useCapture: !1 }), n.height === "auto" && !n.codeMirrorEditor && (e.element.code.addEventListener("keydown", b._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", b._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", b._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(n.height) && n.resizeEnable ? e.element.resizingBar.addEventListener("mousedown", b.onMouseDown_resizingBar, !1) : l.addClass(e.element.resizingBar, "se-resizing-none")), b._setResponsiveToolbar(), l.isResizeObserverSupported && (this._toolbarObserver = new d.ResizeObserver(u.resetResponsiveToolbar)), d.addEventListener("resize", b.onResize_window, !1), n.stickyToolbar > -1 && d.addEventListener("scroll", b.onScroll_window, !1);
    },
    _removeEvent: function() {
      const o = n.iframe ? u._ww : e.element.wysiwyg;
      e.element.toolbar.removeEventListener("mousedown", b._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", b._buttonsEventHandler), e.element.toolbar.removeEventListener("click", b.onClick_toolbar), o.removeEventListener("mousedown", b.onMouseDown_wysiwyg), o.removeEventListener("click", b.onClick_wysiwyg), o.removeEventListener(l.isIE ? "textinput" : "input", b.onInput_wysiwyg), o.removeEventListener("keydown", b.onKeyDown_wysiwyg), o.removeEventListener("keyup", b.onKeyUp_wysiwyg), o.removeEventListener("paste", b.onPaste_wysiwyg), o.removeEventListener("copy", b.onCopy_wysiwyg), o.removeEventListener("cut", b.onCut_wysiwyg), o.removeEventListener("drop", b.onDrop_wysiwyg), o.removeEventListener("scroll", b.onScroll_wysiwyg), o.removeEventListener("mousemove", b.onMouseMove_wysiwyg), u._lineBreakerButton.removeEventListener("mousedown", b._onMouseDown_lineBreak), u._lineBreakerButton.removeEventListener("click", b._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", b._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", b._lineBreakerBind.b), b._lineBreakerBind = null, o.removeEventListener("touchstart", b.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), o.removeEventListener("touchend", b.onClick_wysiwyg, { passive: !0, useCapture: !1 }), o.removeEventListener("focus", b.onFocus_wysiwyg), o.removeEventListener("blur", b.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", b._codeViewAutoHeight), e.element.code.removeEventListener("keyup", b._codeViewAutoHeight), e.element.code.removeEventListener("paste", b._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", b.onMouseDown_resizingBar), b._resizeObserver && (b._resizeObserver.unobserve(e.element.wysiwygFrame), b._resizeObserver = null), b._toolbarObserver && (b._toolbarObserver.unobserve(e.element._toolbarShadow), b._toolbarObserver = null), d.removeEventListener("resize", b.onResize_window), d.removeEventListener("scroll", b.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (r.length === 0) {
        r = null;
        return;
      }
      b._responsiveCurrentSize = "default";
      const o = b._responsiveButtonSize = [], a = b._responsiveButtons = { default: r[0] };
      for (let f = 1, p = r.length, h, g; f < p; f++)
        g = r[f], h = g[0] * 1, o.push(h), a[h] = g[1];
      o.sort(function(f, p) {
        return f - p;
      }).unshift("default");
    }
  }, C = {
    /**
     * @description Core, Util object
     */
    core: u,
    util: l,
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
    setToolbarButtons: function(o) {
      u.submenuOff(), u.containerOff(), u.moreLayerOff();
      const a = zt._createToolBar(c, o, u.plugins, n);
      r = a.responsiveButtons, b._setResponsiveToolbar(), e.element.toolbar.replaceChild(a._buttonTray, e.element._buttonTray);
      const f = Bt(e.element.originElement, u._getConstructed(e.element), n);
      e.element = f.element, e.tool = f.tool, n.iframe && (e.element.wysiwyg = u._wd.body), u._recoverButtonStates(), u._cachingButtons(), u.history._resetCachingButton(), u.effectNode = null, u.hasFocus && b._applyTagEffects(), u.isReadOnly && l.setDisabledButtons(!0, u.resizingDisabledButtons), typeof C.onSetToolbarButtons == "function" && C.onSetToolbarButtons(a._buttonTray.querySelectorAll("button"), u);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(o) {
      b._removeEvent(), u._resetComponents(), l.removeClass(u._styleCommandMap.showBlocks, "active"), l.removeClass(u._styleCommandMap.codeView, "active"), u._variable.isCodeView = !1, u._iframeAuto = null, u.plugins = o.plugins || u.plugins;
      const a = [n, o].reduce(function(g, m) {
        for (let y in m)
          if (l.hasOwn(m, y))
            if (y === "plugins" && m[y] && g[y]) {
              let w = g[y], _ = m[y];
              w = w.length ? w : d.Object.keys(w).map(function(k) {
                return w[k];
              }), _ = _.length ? _ : d.Object.keys(_).map(function(k) {
                return _[k];
              }), g[y] = _.filter(function(k) {
                return w.indexOf(k) === -1;
              }).concat(w);
            } else
              g[y] = m[y];
        return g;
      }, {}), f = e.element, p = f.wysiwyg.innerHTML, h = zt._setOptions(a, e, n);
      h.callButtons && (t = h.callButtons, u.initPlugins = {}), h.plugins && (u.plugins = i = h.plugins), f._menuTray.children.length === 0 && (this._menuTray = {}), r = h.toolbar.responsiveButtons, u.options = n = a, u.lang = s = n.lang, n.iframe && f.wysiwygFrame.addEventListener("load", function() {
        l._setIframeDocument(this, n), u._setOptionsInit(f, p);
      }), f.editorArea.appendChild(f.wysiwygFrame), n.iframe || u._setOptionsInit(f, p);
    },
    /**
     * @description Set "options.defaultStyle" style.
     * Define the style of the edit area
     * It can also be defined with the "setOptions" method, but the "setDefaultStyle" method does not render the editor again.
     * @param {String} style Style string
     */
    setDefaultStyle: function(o) {
      const a = n._editorStyles = l._setDefaultOptionStyle(n, o), f = e.element;
      f.topArea.style.cssText = a.top, f.code.style.cssText = n._editorStyles.frame, f.code.style.display = "none", n.height === "auto" ? f.code.style.overflow = "hidden" : f.code.style.overflow = "", n.iframe ? (f.wysiwygFrame.style.cssText = a.frame, f.wysiwyg.style.cssText = a.editor) : f.wysiwygFrame.style.cssText = a.frame + a.editor;
    },
    /**
     * @description Open a notice area
     * @param {String} message Notice message
     */
    noticeOpen: function(o) {
      u.notice.open.call(u, o);
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
      const o = u.getContents(!1);
      e.element.originElement.value = o, b.onSave_wysiwyg(o, u);
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
    getContents: function(o) {
      return u.getContents(o);
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
    getCharCount: function(o) {
      return o = typeof o == "string" ? o : n.charCounterType, u.getCharLength(u._charTypeHTML ? e.element.wysiwyg.innerHTML : e.element.wysiwyg.textContent, o);
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
    getFilesInfo: function(o) {
      return e[o] ? e[o]._infoList : [];
    },
    /**
     * @description Upload images using image plugin
     * @param {FileList} files FileList
     */
    insertImage: function(o) {
      !u.plugins.image || !o || (u.initPlugins.image ? u.plugins.image.submitAction.call(u, o) : u.callPlugin("image", u.plugins.image.submitAction.bind(u, o), null), u.focus());
    },
    /**
     * @description Inserts an HTML element or HTML string or plain string at the current cursor position
     * @param {Element|String} html HTML Element or HTML string or plain string
     * @param {Boolean} notCleaningData If true, inserts the HTML string without refining it with core.cleanHTML.
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @param {Boolean} rangeSelection If true, range select the inserted node.
     */
    insertHTML: function(o, a, f, p) {
      if (e.element.wysiwygFrame.contains(u.getSelection().focusNode) || u.focus(), typeof o == "string") {
        a || (o = u.cleanHTML(o, null, null));
        try {
          if (l.isListCell(l.getFormatElement(u.getSelectionNode(), null))) {
            const T = c.createRange().createContextualFragment(o).childNodes;
            u._isFormatData(T) && (o = u._convertListCell(T));
          }
          const g = c.createRange().createContextualFragment(o).childNodes;
          if (f) {
            const E = u._charTypeHTML ? "outerHTML" : "textContent";
            let T = "";
            for (let z = 0, V = g.length; z < V; z++)
              T += g[z][E];
            if (!u.checkCharCount(T, null)) return;
          }
          let m, y, w, _, k;
          for (; m = g[0]; ) {
            if (_ && _.nodeType === 3 && y && y.nodeType === 1 && l.isBreak(m)) {
              _ = m, l.removeItem(m);
              continue;
            }
            w = u.insertNode(m, y, !1), y = w.container || w, k || (k = w), _ = m;
          }
          _.nodeType === 3 && y.nodeType === 1 && (y = _);
          const M = y.nodeType === 3 ? w.endOffset || y.textContent.length : y.childNodes.length;
          p ? u.setRange(k.container || k, k.startOffset || 0, y, M) : u.setRange(y, M, y, M);
        } catch (h) {
          if (u.isDisabled || u.isReadOnly) return;
          console.warn("[SUNEDITOR.insertHTML.fail] " + h), u.execCommand("insertHTML", !1, o);
        }
      } else if (l.isComponent(o))
        u.insertComponent(o, !1, f, !1);
      else {
        let h = null;
        (l.isFormatElement(o) || l.isMedia(o)) && (h = l.getFormatElement(u.getSelectionNode(), null)), u.insertNode(o, h, f);
      }
      u.effectNode = null, u.focus(), u.history.push(!1);
    },
    /**
     * @description Change the contents of the suneditor
     * @param {String|undefined} contents Contents to Input
     */
    setContents: function(o) {
      u.setContents(o);
    },
    /**
     * @description Add contents to the suneditor
     * @param {String} contents Contents to Input
     */
    appendContents: function(o) {
      const a = u.convertContentsForEditor(o);
      if (u._variable.isCodeView)
        u._setCodeView(u._getCodeView() + `
` + u.convertHTMLForCodeView(a, !1));
      else {
        const f = l.createElement("DIV");
        f.innerHTML = a;
        const p = e.element.wysiwyg, h = f.children;
        for (let g = 0, m = h.length; g < m; g++)
          h[g] && p.appendChild(h[g]);
      }
      u.history.push(!1);
    },
    /**
     * @description Switch to or off "ReadOnly" mode.
     * @param {Boolean} value "readOnly" boolean value.
     */
    readOnly: function(o) {
      u.isReadOnly = o, l.setDisabledButtons(!!o, u.resizingDisabledButtons), o ? (u.controllersOff(), u.submenuActiveButton && u.submenuActiveButton.disabled && u.submenuOff(), u._moreLayerActiveButton && u._moreLayerActiveButton.disabled && u.moreLayerOff(), u.containerActiveButton && u.containerActiveButton.disabled && u.containerOff(), u.modalForm && u.plugins.dialog.close.call(u), e.element.code.setAttribute("readOnly", "true"), l.addClass(e.element.wysiwygFrame, "se-read-only")) : (e.element.code.removeAttribute("readOnly"), l.removeClass(e.element.wysiwygFrame, "se-read-only")), n.codeMirrorEditor && n.codeMirrorEditor.setOption("readOnly", !!o);
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
      const o = e.element.topArea.style;
      o.display === "none" && (o.display = n.display);
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
      u.submenuOff(), u.containerOff(), u.controllersOff(), u.notice && u.notice.close.call(u), u.modalForm && u.plugins.dialog.close.call(u), u.history._destroy(), b._removeEvent(), l.removeItem(e.element.toolbar), l.removeItem(e.element.topArea);
      for (let o in u.functions)
        l.hasOwn(u, o) && delete u.functions[o];
      for (let o in u)
        l.hasOwn(u, o) && delete u[o];
      for (let o in b)
        l.hasOwn(b, o) && delete b[o];
      for (let o in e)
        l.hasOwn(e, o) && delete e[o];
      for (let o in t)
        l.hasOwn(t, o) && delete t[o];
      for (let o in this)
        l.hasOwn(this, o) && delete this[o];
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
        u._isInline ? b._showToolbarInline() : (e.element.toolbar.style.display = "", e.element._stickyDummy.style.display = ""), b.onResize_window();
      },
      /**
       * @description Hide the toolbar
       */
      hide: function() {
        u._isInline ? b._hideToolbar() : (e.element.toolbar.style.display = "none", e.element._stickyDummy.style.display = "none"), b.onResize_window();
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
        u.controllersOff(), u.modalForm && u.plugins.dialog.close.call(u), e.element.wysiwyg.setAttribute("contenteditable", !1), u.isDisabled = !0, n.codeMirrorEditor ? n.codeMirrorEditor.setOption("readOnly", !0) : e.element.code.setAttribute("disabled", "disabled");
      },
      /**
       * @description Enable the wysiwyg area
       */
      enable: function() {
        e.element.wysiwyg.setAttribute("contenteditable", !0), u.isDisabled = !1, n.codeMirrorEditor ? n.codeMirrorEditor.setOption("readOnly", !1) : e.element.code.removeAttribute("disabled");
      }
    }
  };
  u.functions = C, u.options = n;
  let x = e.element, L = x.originElement, A = x.topArea;
  return L.style.display = "none", A.style.display = "block", n.iframe && x.wysiwygFrame.addEventListener("load", function() {
    l._setIframeDocument(this, n), u._editorInit(!1, n.value), n.value = null;
  }), typeof L.nextElementSibling == "object" ? L.parentNode.insertBefore(A, L.nextElementSibling) : L.parentNode.appendChild(A), x.editorArea.appendChild(x.wysiwygFrame), x = L = A = null, n.iframe || (u._editorInit(!1, n.value), n.value = null), C;
}
const ps = {
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
    oe._propertiesInit(), typeof t != "object" && (t = {}), i && (t = [i, t].reduce(function(r, c) {
      for (let d in c)
        if (oe.hasOwn(c, d))
          if (d === "plugins" && c[d] && r[d]) {
            let l = r[d], v = c[d];
            l = l.length ? l : Object.keys(l).map(function(u) {
              return l[u];
            }), v = v.length ? v : Object.keys(v).map(function(u) {
              return v[u];
            }), r[d] = v.filter(function(u) {
              return l.indexOf(u) === -1;
            }).concat(l);
          } else
            r[d] = c[d];
      return r;
    }, {}));
    const s = typeof e == "string" ? document.getElementById(e) : e;
    if (!s)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const n = zt.init(s, t);
    if (n.constructed._top.id && document.getElementById(n.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + n.constructed._top.id + '")');
    return hs(Bt(s, n.constructed, n.options), n.pluginCallButtons, n.plugins, n.options.lang, t, n._responsiveButtons);
  }
}, gs = ["innerHTML", "id", "tabindex"], ms = /* @__PURE__ */ xe({
  __name: "HtmlInput",
  props: {
    modelValue: { default: !1 },
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
    const s = i, n = e, r = Y(null), c = Y(n.modelValue), d = Y(null), l = Y(void 0), v = Y(n.focusing), u = (L) => {
      v.value = !0, s("focus", L);
    }, b = (L) => {
      v.value = !1, s("blur", L);
    }, C = (L) => {
      l.value && clearTimeout(l.value), l.value = setTimeout(() => {
        di(L) === "" ? c.value = "" : c.value = L;
      }, 100);
    }, x = () => {
      let L = {
        lang: si[n.lang] ? si[n.lang] : yt,
        plugins: {
          ...cs
        },
        ...ds
      };
      d.value = ps.create(n.id, L), d.value.onChange = (A) => {
        C(A), n.disabled ? d.value.disabled() : d.value.enabled();
      }, d.value.onKeyUp = (A, o) => {
        C(o.getContents());
      }, d.value.onBlur = () => {
        b();
      }, d.value.onClick = () => {
        u();
      };
    };
    return ue(() => n.modelValue, (L) => c.value = L), ue(c, (L) => s("update:modelValue", L)), Rt(() => {
      x();
    }), t({
      doSetValue: (L) => {
        d.value && d.value.setContents(L);
      }
    }), (L, A) => (Z(), ne("div", {
      innerHTML: c.value,
      ref_key: "input",
      ref: r,
      id: L.id,
      tabindex: L.tabindex
    }, null, 8, gs));
  }
}), vs = {
  key: 0,
  class: "lkt-field--searchable-box"
}, bs = ["value", "placeholder"], _s = { key: 0 }, ys = {
  key: 1,
  class: "lkt-field-select-read"
}, ws = ["title"], Cs = /* @__PURE__ */ xe({
  __name: "SelectInput",
  props: {
    modelValue: { default: !1 },
    searchable: { type: Boolean },
    searchMode: { type: Boolean },
    multiple: { type: Boolean },
    optionsIcon: {},
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
  emits: ["update:modelValue", "update:showOptions", "focus", "blur", "navigate", "search"],
  setup(e, { expose: t, emit: i }) {
    const s = i, n = e, r = Y(""), c = Y(null), d = Y(n.showOptions);
    ue(d, (h) => s("update:showOptions", h));
    const l = Y(n.focusing), v = Y(!1), u = Y(!1), b = () => {
      vt(() => {
        l.value = v.value || u.value, d.value = l.value;
      });
    };
    ue(v, (h) => {
      h && (u.value = !1), b();
    }), ue(u, (h) => {
      h && (v.value = !1), b();
    }), ue(l, (h) => {
      s(h ? "focus" : "blur");
    });
    let C, x;
    const L = (h) => {
      C = setTimeout(() => {
        v.value = !1;
      }, 100);
    }, A = (h) => {
      v.value = !0, ["ArrowDown", "ArrowUp", "Enter"].includes(h.key) ? s("navigate", h) : s("search", r.value);
    }, o = (h) => {
      v.value = !0;
    }, a = (h) => {
      x = setTimeout(() => {
        u.value = !1;
      }, 100);
    }, f = (h) => {
      u.value = !0, ["ArrowDown", "ArrowUp", "Enter"].includes(h.key) && s("navigate", h);
    }, p = (h) => {
      u.value = !0;
    };
    return t({
      keepFocused: () => {
        clearTimeout(C), clearTimeout(x), c.value && c.value.focus();
      }
    }), (h, g) => {
      const m = ye("lkt-tag"), y = ye("lkt-button");
      return Z(), ne(Oe, null, [
        h.searchable && (h.multiple || h.searchMode) ? (Z(), ne("div", vs, [
          h.multiple ? (Z(), te(m, {
            key: 0,
            icon: h.optionsIcon,
            text: h.pickedOptions.length
          }, null, 8, ["icon", "text"])) : h.pickedOptions.length > 0 ? (Z(), te(m, { key: 1 }, {
            default: Le(() => [
              le(Ye, {
                option: h.pickedOptions[0],
                "option-slot": h.optionSlot,
                icon: h.optionsIcon,
                modal: h.optionsModal,
                "modal-data": h.optionsModalData,
                download: h.optionsDownload,
                "label-formatter": h.optionsLabelFormatter,
                editable: h.editable
              }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter", "editable"])
            ]),
            _: 1
          })) : de("", !0),
          Be(he("input", {
            "onUpdate:modelValue": g[0] || (g[0] = (w) => r.value = w),
            ref_key: "queryField",
            ref: c,
            value: r.value,
            placeholder: h.searchPlaceholder,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: A,
            onBlur: L,
            onFocus: o
          }, null, 40, bs), [
            [_t, r.value]
          ])
        ])) : de("", !0),
        Be(le(y, {
          ref: "selectButton",
          class: "lkt-field--toggle-button lkt-field--select-button",
          "open-tooltip": d.value,
          "onUpdate:openTooltip": g[1] || (g[1] = (w) => d.value = w),
          onKeyup: f,
          onBlur: a,
          onFocus: p
        }, {
          default: Le(() => [
            h.multiple && h.pickedOptions.length > 0 ? (Z(), ne(Oe, { key: 0 }, [
              h.multipleDisplayEdition === ae(qe).Count ? (Z(), ne("div", _s, Ke(h.pickedOptions.length), 1)) : (Z(), ne("ul", ys, [
                (Z(!0), ne(Oe, null, Xe(h.pickedOptions, (w, _) => (Z(), ne("li", {
                  title: w.label
                }, [
                  le(Ye, {
                    option: h.pickedOptions[_],
                    "option-slot": h.optionSlot,
                    icon: h.optionsIcon,
                    modal: h.optionsModal,
                    "modal-data": h.optionsModalData,
                    download: h.optionsDownload,
                    "label-formatter": h.optionsLabelFormatter,
                    editable: h.editable
                  }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter", "editable"])
                ], 8, ws))), 256))
              ]))
            ], 64)) : !h.multiple && h.pickedOptions.length > 0 ? (Z(), te(Ye, {
              key: 1,
              option: h.pickedOptions[0],
              "option-slot": h.optionSlot,
              icon: h.optionsIcon,
              modal: h.optionsModal,
              "modal-data": h.optionsModalData,
              download: h.optionsDownload,
              "label-formatter": h.optionsLabelFormatter,
              editable: h.editable
            }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter", "editable"])) : de("", !0)
          ]),
          _: 1
        }, 8, ["open-tooltip"]), [
          [Pe, h.multiple || !h.searchable || !h.searchMode]
        ])
      ], 64);
    };
  }
}), ks = { class: "lkt-calc--formula" }, xs = { class: "lkt-calc--custom-pad" }, Ss = { class: "lkt-calc--pad" }, Es = { class: "lkt-calc--numeric-pad" }, Ls = { class: "lkt-calc--math-pad" }, Ts = { class: "lkt-calc--advance-math-pad" }, Ns = /* @__PURE__ */ xe({
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
    const i = t, s = e, n = Y(s.modelValue), r = Y(null);
    ue(n, (h) => i("update:modelValue", h));
    const c = Y(s.focusing), d = Y(null);
    let l;
    const v = () => {
      clearTimeout(l), r.value && typeof r.value.focus == "function" && r.value.focus();
    }, u = (h) => {
      n.value += "" + h, v();
    }, b = (h) => {
      n.value += " " + h + " ", v();
    }, C = (h) => {
      n.value += " " + h + "(", v();
    }, x = () => {
      n.value += " sqrt(", v();
    }, L = (h) => {
      n.value += "" + h, v();
    }, A = () => {
      n.value += ".", v();
    }, o = () => {
      n.value += " ", v();
    }, a = (h) => {
      n.value += "" + h.value, v();
    }, f = () => {
      c.value = !0;
    }, p = () => {
      l = setTimeout(() => {
        c.value = !1;
      }, 100);
    };
    return ue(c, (h) => {
      i(h ? "focus" : "blur");
    }), (h, g) => {
      const m = ye("lkt-button"), y = ye("lkt-tooltip");
      return Z(), ne("div", {
        ref_key: "container",
        ref: d
      }, [
        he("div", ks, [
          Be(he("input", {
            type: "text",
            ref_key: "input",
            ref: r,
            "onUpdate:modelValue": g[0] || (g[0] = (w) => n.value = w),
            onFocus: f,
            onBlur: p
          }, null, 544), [
            [_t, n.value]
          ])
        ]),
        h.editable ? (Z(), te(y, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--calc",
          modelValue: c.value,
          "onUpdate:modelValue": g[27] || (g[27] = (w) => c.value = w),
          referrer: d.value,
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: Le(() => [
            he("div", xs, [
              (Z(!0), ne(Oe, null, Xe(h.options, (w) => (Z(), te(m, {
                icon: w.icon,
                text: w.label,
                onClick: (_) => a(w)
              }, null, 8, ["icon", "text", "onClick"]))), 256))
            ]),
            he("div", Ss, [
              he("div", Es, [
                le(m, {
                  onClick: g[1] || (g[1] = (w) => u(7)),
                  text: "7",
                  class: "lkt-calc--btn-number"
                }),
                le(m, {
                  onClick: g[2] || (g[2] = (w) => u(8)),
                  text: "8",
                  class: "lkt-calc--btn-number"
                }),
                le(m, {
                  onClick: g[3] || (g[3] = (w) => u(9)),
                  text: "9",
                  class: "lkt-calc--btn-number"
                }),
                le(m, {
                  onClick: g[4] || (g[4] = (w) => u(4)),
                  text: "4",
                  class: "lkt-calc--btn-number"
                }),
                le(m, {
                  onClick: g[5] || (g[5] = (w) => u(5)),
                  text: "5",
                  class: "lkt-calc--btn-number"
                }),
                le(m, {
                  onClick: g[6] || (g[6] = (w) => u(6)),
                  text: "6",
                  class: "lkt-calc--btn-number"
                }),
                le(m, {
                  onClick: g[7] || (g[7] = (w) => u(1)),
                  text: "1",
                  class: "lkt-calc--btn-number"
                }),
                le(m, {
                  onClick: g[8] || (g[8] = (w) => u(2)),
                  text: "2",
                  class: "lkt-calc--btn-number"
                }),
                le(m, {
                  onClick: g[9] || (g[9] = (w) => u(3)),
                  text: "3",
                  class: "lkt-calc--btn-number"
                }),
                le(m, {
                  onClick: g[10] || (g[10] = (w) => A()),
                  text: "."
                }),
                le(m, {
                  onClick: g[11] || (g[11] = (w) => u(0)),
                  text: "0",
                  class: "lkt-calc--btn-number"
                }),
                le(m, {
                  onClick: g[12] || (g[12] = (w) => o()),
                  text: " "
                })
              ]),
              he("div", Ls, [
                le(m, {
                  onClick: g[13] || (g[13] = (w) => L("[")),
                  text: "["
                }),
                le(m, {
                  onClick: g[14] || (g[14] = (w) => L("]")),
                  text: "]"
                }),
                le(m, {
                  onClick: g[15] || (g[15] = (w) => L("(")),
                  text: "("
                }),
                le(m, {
                  onClick: g[16] || (g[16] = (w) => L(")")),
                  text: ")"
                }),
                le(m, {
                  onClick: g[17] || (g[17] = (w) => b("+")),
                  text: "+"
                }),
                le(m, {
                  onClick: g[18] || (g[18] = (w) => b("-")),
                  text: "−"
                }),
                le(m, {
                  onClick: g[19] || (g[19] = (w) => b("*")),
                  text: "×"
                }),
                le(m, {
                  onClick: g[20] || (g[20] = (w) => b("/")),
                  text: "÷"
                })
              ]),
              he("div", Ts, [
                le(m, {
                  onClick: g[21] || (g[21] = (w) => x()),
                  text: "√"
                }),
                le(m, {
                  onClick: g[22] || (g[22] = (w) => C("log")),
                  text: "log"
                }),
                le(m, {
                  onClick: g[23] || (g[23] = (w) => C("ln")),
                  text: "ln"
                }),
                le(m, {
                  onClick: g[24] || (g[24] = (w) => C("sin")),
                  text: "sin"
                }),
                le(m, {
                  onClick: g[25] || (g[25] = (w) => C("cos")),
                  text: "cos"
                }),
                le(m, {
                  onClick: g[26] || (g[26] = (w) => C("tan")),
                  text: "tan"
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "referrer"])) : de("", !0)
      ], 512);
    };
  }
}), zs = /* @__PURE__ */ xe({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = X(() => {
      let c = ni(t.validation.code, t.stack), d = {
        min: t.validation.min,
        max: t.validation.max,
        value: t.validation.equalToValue
      }, l = ni(t.validation.status + "-" + t.validation.code, t.stack);
      return l && (c = l), c ? c.startsWith("__:") ? rt(c.substring(3), d) : Bl(c, d, ":", "") : t.validation.code;
    }), s = X(() => J.validationIconSlot !== ""), n = X(() => J.validationIconSlot), r = X(() => {
      let c = [];
      return c.push("code-" + t.validation.code), c.push("is-" + t.validation.status), c.join(" ");
    });
    return (c, d) => (Z(), ne("div", {
      class: Fe(["lkt-field-validation-message", r.value])
    }, [
      s.value ? (Z(), te(it(n.value), { key: 0 })) : de("", !0),
      lt(" " + Ke(i.value), 1)
    ], 2));
  }
}), Bs = {
  key: 0,
  class: "lkt-field-validation-info"
}, Rs = /* @__PURE__ */ xe({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" },
    min: { default: 0 },
    max: { default: 0 }
  },
  setup(e) {
    const t = e, i = Y(t.items), s = Y(!1);
    return ue(() => t.items, (n) => {
      s.value = !0, vt(() => s.value = !1);
    }, { deep: !0 }), (n, r) => s.value ? de("", !0) : (Z(), ne("div", Bs, [
      (Z(!0), ne(Oe, null, Xe(i.value, (c) => (Z(), te(zs, {
        validation: c,
        stack: n.stack,
        key: c.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), As = ["id"], Ms = /* @__PURE__ */ xe({
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
    const i = t, s = e, n = Y(s.modelValue), r = Y(s.focusing);
    let c, d;
    const l = Y({}), v = () => {
      clearTimeout(d), d = setTimeout(() => {
        l.value = {
          query: n.value
        };
      }, 300);
    }, u = () => {
      r.value = !0;
    }, b = () => {
      c = setTimeout(() => {
        r.value = !1;
      }, 100);
    };
    ue(r, (x) => {
      i(x ? "focus" : "blur");
    });
    const C = () => {
      clearTimeout(c), setTimeout(() => {
        u();
      }, 100);
    };
    return (x, L) => {
      const A = ye("lkt-table"), o = ye("lkt-tooltip");
      return Z(), ne(Oe, null, [
        Be(he("input", {
          id: x.id,
          type: "text",
          ref: "input",
          "onUpdate:modelValue": L[0] || (L[0] = (a) => n.value = a),
          onFocus: u,
          onBlur: b,
          onKeyup: v
        }, null, 40, As), [
          [_t, n.value]
        ]),
        x.editable && x.hadFirstFocus ? (Z(), te(o, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--dropdown lkt-field--search-results",
          modelValue: r.value,
          "onUpdate:modelValue": L[1] || (L[1] = (a) => r.value = a),
          referrer: x.container,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: Le(() => [
            le(A, {
              resource: x.optionsResource,
              filters: l.value,
              "items-container-class": "lkt-field--dropdown-options",
              type: "ul",
              onPage: C,
              onClick: C
            }, {
              item: Le(({ item: a, index: f, isLoading: p, canCreate: h, canUpdate: g, canDrop: m, canRead: y, doDrop: w }) => [
                le(Ye, {
                  option: a,
                  onClick: C
                }, null, 8, ["option"])
              ]),
              _: 1
            }, 8, ["resource", "filters"])
          ]),
          _: 1
        }, 8, ["modelValue", "referrer"])) : de("", !0)
      ], 64);
    };
  }
}), Is = {
  key: 0,
  class: "lkt-field-main"
}, Ds = {
  key: 3,
  class: "lkt-field--read-value"
}, Hs = ["innerHTML", "title"], Os = ["title"], Fs = { key: 0 }, Vs = {
  key: 1,
  class: "lkt-field-select-read"
}, Ps = ["title"], Us = ["innerHTML"], Ws = ["innerHTML", "title"], Zs = ["innerHTML", "title"], $s = /* @__PURE__ */ xe({
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
    multipleDisplay: { default: qe.List },
    modal: { default: "" },
    modalKey: { default: "" },
    modalData: { default: () => ({}) },
    optionSlot: { default: "" },
    optionsDownload: { type: [String, Function], default: "" },
    optionsModal: { type: [String, Function], default: "" },
    optionsModalData: { type: [Object, Function], default: () => ({}) },
    optionsIcon: { type: [String, Function], default: "" },
    optionsLabelFormatter: {},
    optionsResource: { default: "" },
    optionsResourceData: { default: () => ({}) }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const i = t, s = ci(), n = e, r = () => {
      i("click");
    }, c = X(() => {
      switch (n.type) {
        case W.Select:
          if (n.multiple && Array.isArray(n.value) && n.value.length > 0 || n.multiple && n.multipleDisplay === qe.Count || !n.multiple && n.value) return "";
          break;
        case W.Date:
          if (n.value !== "") return "";
          break;
        default:
          if (n.value !== "") return "";
      }
      return J.customValueSlots[n.emptyValueSlot] ?? J.defaultEmptyValueSlot;
    }), d = X(() => J.customValueSlots[n.valueSlot] ?? "");
    return (l, v) => {
      const u = ye("lkt-image"), b = ye("lkt-button"), C = ye("lkt-anchor"), x = ye("lkt-tag");
      return Z(), ne("div", {
        class: "lkt-field--read",
        onClick: r
      }, [
        ae(s).value ? at(l.$slots, "value", {
          key: 0,
          value: l.value,
          title: l.title,
          data: l.slotData
        }) : c.value ? (Z(), te(it(c.value), {
          key: 1,
          data: l.slotData
        }, null, 8, ["data"])) : d.value ? (Z(), te(it(d.value), {
          key: 2,
          value: l.value,
          title: l.title,
          data: l.slotData
        }, null, 8, ["value", "title", "data"])) : (Z(), ne(Oe, { key: 3 }, [
          l.type === ae(W).File || l.type === ae(W).Image ? (Z(), ne("div", Is, [
            le(b, {
              class: "lkt-field--toggle-button",
              text: l.type === ae(W).File ? l.fileName : ""
            }, {
              default: Le(() => [
                l.type === ae(W).Image ? (Z(), te(u, {
                  key: 0,
                  src: l.value,
                  class: "lkt-field--image-cover"
                }, null, 8, ["src"])) : de("", !0),
                l.type === ae(W).Image ? (Z(), te(u, {
                  key: 1,
                  src: l.value,
                  class: "lkt-field--image-main"
                }, null, 8, ["src"])) : de("", !0)
              ]),
              _: 1
            }, 8, ["text"])
          ])) : l.type === ae(W).Email ? (Z(), te(C, {
            key: 1,
            class: "lkt-field--read-value",
            title: l.title,
            to: "mail:" + l.value
          }, {
            default: Le(() => [
              lt(Ke(l.value), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : l.type === ae(W).Tel ? (Z(), te(C, {
            key: 2,
            class: "lkt-field--read-value",
            title: l.title,
            to: "tel:" + l.value
          }, {
            default: Le(() => [
              lt(Ke(l.value), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : ae(et).includes(l.type) ? (Z(), ne("div", Ds, [
            le(x, {
              icon: l.value ? "lkt-field-icon-ok" : "lkt-field-icon-cancel",
              "featured-text": l.label,
              title: l.title
            }, null, 8, ["icon", "featured-text", "title"])
          ])) : l.type === ae(W).Date ? (Z(), ne("div", {
            key: 4,
            class: "lkt-field--read-value",
            innerHTML: l.value,
            title: l.title
          }, null, 8, Hs)) : l.type === ae(W).Select ? (Z(), ne("div", {
            key: 5,
            class: "lkt-field--read-value",
            title: l.title
          }, [
            l.multiple ? (Z(), ne(Oe, { key: 0 }, [
              l.multipleDisplay === ae(qe).Count ? (Z(), ne("div", Fs, Ke(l.value.length), 1)) : l.value.length > 0 ? (Z(), ne("ul", Vs, [
                (Z(!0), ne(Oe, null, Xe(l.value, (L, A) => {
                  var o;
                  return Z(), ne("li", {
                    title: (o = l.value[A]) == null ? void 0 : o.label
                  }, [
                    le(Ye, {
                      option: l.value[A],
                      "option-slot": l.optionSlot,
                      icon: l.optionsIcon,
                      modal: l.optionsModal,
                      "modal-data": l.optionsModalData,
                      download: l.optionsDownload,
                      "label-formatter": l.optionsLabelFormatter
                    }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter"])
                  ], 8, Ps);
                }), 256))
              ])) : de("", !0)
            ], 64)) : l.value.length > 0 ? (Z(), te(Ye, {
              key: 1,
              option: l.value[0],
              "option-slot": l.optionSlot,
              icon: l.optionsIcon,
              modal: l.optionsModal,
              "modal-data": l.optionsModalData,
              download: l.optionsDownload,
              "label-formatter": l.optionsLabelFormatter
            }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter"])) : de("", !0)
          ], 8, Os)) : l.modal ? (Z(), te(b, {
            key: 6,
            class: "lkt-field--read-value",
            title: l.title,
            modal: l.modal,
            "modal-key": l.modalKey,
            "modal-data": l.modalData
          }, {
            default: Le(() => [
              he("div", { innerHTML: l.value }, null, 8, Us)
            ]),
            _: 1
          }, 8, ["title", "modal", "modal-key", "modal-data"])) : l.download ? (Z(), te(Ye, {
            key: 7,
            class: "lkt-field--read-value",
            option: { value: "", label: l.value },
            download: l.download
          }, null, 8, ["option", "download"])) : l.type === ae(W).Number ? (Z(), ne("div", {
            key: 8,
            class: "lkt-field--read-value",
            innerHTML: l.title,
            title: l.title
          }, null, 8, Ws)) : (Z(), ne("div", {
            key: 9,
            class: "lkt-field--read-value",
            innerHTML: l.value,
            title: l.title
          }, null, 8, Zs))
        ], 64))
      ]);
    };
  }
}), qs = ["name", "id", "disabled", "readonly", "placeholder", "accept"], js = /* @__PURE__ */ xe({
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
  setup(e, { emit: t }) {
    const i = t, s = e, n = Y(null), r = Y(s.modelValue), c = Y(s.fileName), d = Y(s.uploading), l = (v) => {
      let u = v.target;
      if (u.files && u.files[0]) {
        c.value = u.files[0].name;
        const b = new FileReader();
        b.onload = (C) => {
          if (r.value = C.target.result, s.resource) {
            d.value = !0, i("uploading");
            let x = JSON.parse(JSON.stringify(s.resourceData));
            x.files = u.files[0], Tt(s.resource, x).then((L) => {
              r.value = L.data, d.value = !1, i("upload-success", L);
            }).catch((L) => {
              d.value = !1, i("upload-error", L);
            });
          }
        }, b.readAsDataURL(u.files[0]);
      }
      i("change", v);
    };
    return ue(r, (v) => i("update:modelValue", v)), ue(c, (v) => i("update:fileName", v)), (v, u) => {
      const b = ye("lkt-image"), C = ye("lkt-button");
      return Z(), ne(Oe, null, [
        he("input", {
          ref_key: "inputElement",
          ref: n,
          type: "file",
          name: v.name,
          id: v.id,
          disabled: v.disabled,
          readonly: v.readonly,
          placeholder: v.placeholder,
          accept: v.accept,
          onChange: l
        }, null, 40, qs),
        le(C, {
          class: "lkt-field--toggle-button",
          "click-ref": n.value,
          text: v.isImage ? "" : c.value,
          disabled: v.disabled
        }, {
          default: Le(() => [
            v.isImage ? (Z(), te(b, {
              key: 0,
              src: r.value,
              class: "lkt-field--image-cover"
            }, null, 8, ["src"])) : de("", !0),
            v.isImage ? (Z(), te(b, {
              key: 1,
              src: r.value,
              class: "lkt-field--image-main"
            }, null, 8, ["src"])) : de("", !0)
          ]),
          _: 1
        }, 8, ["click-ref", "text", "disabled"])
      ], 64);
    };
  }
}), Gs = { class: "lkt-calendar" }, Ks = { class: "calendar" }, Ys = { class: "lkt-calendar--header-grid" }, Xs = ["innerHTML"], Js = {
  key: 0,
  class: "lkt-calendar--day-grid"
}, Qs = { class: "lkt-calendar--day lkt-calendar--filling-day" }, eo = /* @__PURE__ */ xe({
  __name: "LktCalendar",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, s = e, n = Y(s.modelValue);
    ue(() => s.modelValue, (p) => n.value = p, { deep: !0 }), ue(n, (p) => i("update:modelValue", p));
    const r = Y(/* @__PURE__ */ new Date()), c = Y(/* @__PURE__ */ new Date());
    At(n.value) && typeof n.value < "u" && (c.value = new Date(n.value.getFullYear(), n.value.getMonth(), n.value.getDate()));
    const d = Y(c.value.getFullYear()), l = Y(c.value.getMonth()), v = Y(!1), u = Y(ut("Y-m", c.value)), b = X(() => new Date(d.value, l.value + 1, 0).getDate()), C = X(() => new Date(d.value, l.value, 1).getDay()), x = () => {
      l.value > 11 && (l.value = 0, d.value += 1), l.value += 1, c.value.setFullYear(d.value, l.value), c.value = new Date(c.value), u.value = ut("Y-m", c.value);
    }, L = () => {
      l.value < 0 && (l.value = 11, d.value -= 1), l.value -= 1, c.value.setFullYear(d.value, l.value), c.value = new Date(c.value), u.value = ut("Y-m", c.value);
    }, A = (p) => typeof n.value > "u" || n.value.getFullYear() !== d.value || n.value.getMonth() !== l.value ? !1 : n.value.getDate() === p, o = (p) => typeof n.value > "u" || r.value.getFullYear() !== d.value || r.value.getMonth() !== l.value ? !1 : r.value.getDate() === p, a = (p) => ({
      "is-picked": A(p),
      "is-today": o(p)
    }), f = (p) => {
      var h;
      (h = n.value) == null || h.setFullYear(d.value, l.value, p), n.value = new Date(n.value);
    };
    return (p, h) => {
      const g = ye("lkt-button");
      return Z(), ne("div", Gs, [
        he("div", Ks, [
          he("header", Ys, [
            le(g, {
              class: "lkt-calendar--day",
              onClick: L
            }, {
              default: Le(() => h[0] || (h[0] = [
                lt("◀")
              ])),
              _: 1
            }),
            he("div", {
              class: "lkt-calendar--header-text",
              innerHTML: u.value
            }, null, 8, Xs),
            le(g, {
              class: "lkt-calendar--day",
              onClick: x
            }, {
              default: Le(() => h[1] || (h[1] = [
                lt("▶")
              ])),
              _: 1
            })
          ]),
          v.value ? de("", !0) : (Z(), ne("div", Js, [
            h[2] || (h[2] = Tl('<div class="lkt-calendar--day lkt-calendar--week-day">Su</div><div class="lkt-calendar--day lkt-calendar--week-day">Mo</div><div class="lkt-calendar--day lkt-calendar--week-day">Tu</div><div class="lkt-calendar--day lkt-calendar--week-day">We</div><div class="lkt-calendar--day lkt-calendar--week-day">Th</div><div class="lkt-calendar--day lkt-calendar--week-day">Fr</div><div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>', 7)),
            (Z(!0), ne(Oe, null, Xe(C.value, (m) => (Z(), ne("div", Qs))), 256)),
            (Z(!0), ne(Oe, null, Xe(b.value, (m) => (Z(), te(g, {
              class: Fe(["lkt-calendar--day", a(m)]),
              text: m.toString(),
              onClick: () => f(m)
            }, null, 8, ["class", "text", "onClick"]))), 256))
          ]))
        ]),
        h[3] || (h[3] = he("div", { class: "display-selected" }, [
          he("p", { class: "selected" })
        ], -1))
      ]);
    };
  }
}), to = /* @__PURE__ */ xe({
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
    const i = t, s = e, n = Y(void 0), r = Y(""), c = Y(s.modelValue), d = X(() => J.dateReadFormat ? J.dateReadFormat : J.langDateReadFormat[s.lang] ? J.langDateReadFormat[s.lang] : J.defaultDateReadFormat ? J.defaultDateReadFormat : "Y-m-d"), l = (u) => {
      let b = new Date(u);
      At(b) && (n.value = b);
    }, v = () => {
      r.value = mi(n.value, d.value);
    };
    return ue(() => s.modelValue, (u) => {
      c.value = u, l(u);
    }), ue(c, (u) => i("update:modelValue", u)), ue(n, (u) => {
      typeof u > "u" ? c.value = "" : c.value = ut("Y-m-d", u), v();
    }, { deep: !0 }), Rt(() => {
      l(s.modelValue), v();
    }), (u, b) => {
      const C = ye("lkt-button");
      return Z(), te(C, {
        class: "lkt-field--toggle-button",
        text: r.value,
        tooltip: "",
        "tooltip-class": "lkt-field--date--tooltip",
        "tooltip-location-y": "bottom",
        "tooltip-location-x": "left-corner"
      }, {
        tooltip: Le(() => [
          le(eo, {
            modelValue: n.value,
            "onUpdate:modelValue": b[0] || (b[0] = (x) => n.value = x)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["text"]);
    };
  }
}), io = ["data-show-ui", "data-labeled"], lo = ["for", "innerHTML"], no = { class: "lkt-field-content" }, so = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, oo = {
  key: 1,
  class: "lkt-field--icon"
}, ao = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], ro = ["value", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], uo = { class: "lkt-field--info-nav" }, co = { key: 0 }, fo = ["data-index", "onClick"], nt = /* @__PURE__ */ xe({
  __name: "LktField",
  props: {
    modelValue: { type: [String, Number, Boolean, Object], default: "" },
    type: { default: W.Text },
    valid: { type: Boolean, default: !1 },
    placeholder: { default: "" },
    searchPlaceholder: { default: "" },
    label: { default: "" },
    labelIcon: {},
    labelIconAtEnd: { type: Boolean },
    name: { default: Lt(16) },
    autocomplete: { type: Boolean, default: !0 },
    disabled: { type: [Boolean, Function], default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    tabindex: { default: void 0 },
    mandatory: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    canClear: { type: Boolean, default: !1 },
    canUndo: { type: Boolean },
    canI18n: { type: Boolean },
    canStep: { type: Boolean, default: !0 },
    mandatoryMessage: { default: "" },
    infoMessage: { default: "" },
    errorMessage: { default: "" },
    min: { default: void 0 },
    max: { default: void 0 },
    step: { default: 1 },
    enableAutoNumberFix: { type: Boolean, default: !0 },
    emptyValueSlot: { default: "" },
    optionSlot: {},
    valueSlot: { default: "" },
    editSlot: { default: "" },
    slotData: { default: () => ({}) },
    resource: { default: "" },
    resourceData: { default: () => ({}) },
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
    featuredButton: { default: "" },
    infoButtonEllipsis: { type: Boolean, default: !1 },
    fileName: { default: "" },
    customButtonText: {},
    customButtonClass: {},
    options: { default: () => [] },
    multiple: { type: Boolean, default: !1 },
    multipleDisplay: { default: qe.List },
    multipleDisplayEdition: { default: qe.Inline },
    searchable: { type: Boolean, default: !1 },
    autoloadOptionsResource: { type: [Boolean, String], default: !1 },
    optionsDownload: { type: [String, Function], default: "" },
    optionsModal: { type: [String, Function], default: "" },
    optionsModalData: { type: [Object, Function], default: () => ({}) },
    optionsIcon: { type: [String, Function], default: "" },
    optionsLabelFormatter: {},
    optionsResource: { default: "" },
    optionsResourceData: { default: () => ({}) },
    icon: { type: [String, Function], default: "" },
    download: {},
    modal: { type: [String, Function], default: "" },
    modalKey: { type: [String, Number, Function], default: "" },
    modalData: { default: () => ({}) },
    data: { default: () => ({}) }
  },
  emits: ["update:modelValue", "update:valid", "keyup", "keydown", "focus", "blur", "click", "change", "click-info", "click-error", "validation", "validating", "options-loaded", "selected-option"],
  setup(e, { expose: t, emit: i }) {
    const s = i, n = ci(), r = e, c = Lt(16), d = Y(r.type), l = Y(null), v = Y(r.featuredButton);
    let u = r.icon, b = r.modelValue;
    d.value === "select" && r.multiple ? (!b || !Array.isArray(b)) && (b = []) : et.includes(d.value) ? typeof b != "boolean" && (b = !1) : d.value === W.Date && !r.icon ? u = J.defaultDateIcon : d.value === W.Number && r.canStep && v.value === "" && (v.value = J.defaultNumberFeaturedButton);
    const C = Y(b), x = Y(b), L = Y(r.valid), A = Y(!1), o = Y(!1), a = Y(!1), f = Y(!1), p = Y([]), h = Y(!r.readMode), g = Y(r.fileName), m = Y(r.fileName), y = Y(null), w = Y(null), _ = Y(null), k = Y(!1), M = Y(!1), E = Y(!1), T = Y(""), z = Y(-1), V = Y([]), U = Y(!1), P = Y(!1), D = Y(!1), F = X(() => fi.value), R = X(() => (F.value, J.dateReadFormat ? J.dateReadFormat : J.langDateReadFormat[F.value] ? J.langDateReadFormat[F.value] : J.defaultDateReadFormat ? J.defaultDateReadFormat : "Y-m-d")), H = () => typeof x.value == "object" && !Array.isArray(x.value) ? x.value[F.value] : x.value, S = Y(H()), O = Y(H()), N = Y([]), I = Y([]), q = () => {
      const B = (Q) => {
        if (I.value = Et(N.value, Q), r.multiple) {
          for (let Ge in S.value) {
            let We = ti(N.value, S.value[Ge]);
            typeof We < "u" && (V.value.length === 0 ? V.value.push(We) : V.value.splice(Ge, 1, We));
          }
          return;
        }
        let ke = ti(N.value, S.value);
        typeof ke < "u" && (V.value.length === 0 ? V.value.push(ke) : V.value.splice(0, 1, ke));
      };
      d.value === W.Text ? B(S.value) : d.value === W.Select && B(T.value);
    }, $ = X(() => d.value === W.Date), K = X(() => d.value === W.File), G = X(() => d.value === W.Image), j = X(() => d.value === W.Textarea ? "textarea" : d.value === W.Html ? "div" : "input"), ee = X(() => d.value === W.Date ? x.value !== C.value : S.value !== O.value), se = X(() => typeof r.disabled == "function" ? r.disabled(r.data) : r.disabled), re = X(() => {
      let B = 0;
      return Dt.value && ++B, Ht.value && ++B, Ot.value && ++B, Ft.value && ++B, Pt.value && ++B, Vt.value && ++B, Ae.value && ++B, ze.value && ++B, (r.customButtonText || r.customButtonClass) && ++B, B > 0 && d.value === W.Textarea || B > 0 && d.value === W.Html || B > 0 && r.infoButtonEllipsis ? 1 : B;
    }), ce = X(() => Ve.value && v.value === "i18n" || je.value && v.value === "password" || Se.value && v.value === "subtract"), fe = X(() => re.value > 0), Ee = X(() => r.autocomplete === !0 ? "on" : "off"), Me = X(() => d.value === W.Date ? x.value !== "" : S.value !== ""), pe = X(() => d.value === W.Password && A.value === !0 ? "text" : d.value === W.Email ? "email" : d.value === W.Password ? "password" : d.value === W.Number ? "number" : d.value === W.Tel ? "tel" : d.value === W.Search ? "search" : d.value === W.Color ? "color" : d.value === W.Range ? "range" : "text"), Ne = X(() => {
      const B = ["lkt-field"];
      return B.push(`is-${d.value}`), et.includes(d.value) && (B.push("is-boolean"), S.value && B.push("is-checked")), ee.value && B.push("is-changed"), r.disabled && B.push("is-disabled"), r.multiple && B.push("is-multiple"), ce.value && B.push("with-atn-btn"), fe.value && B.push("with-info-btn"), r.mandatory && h.value && B.push("is-mandatory-field"), h.value && o.value && B.push("has-focus"), k.value && B.push("show-options"), r.searchable && U.value && B.push("is-searching"), d.value !== W.Range && r.autoValidation && f.value && a.value && (p.value.length > 0 ? B.push("is-invalid") : B.push("is-valid")), [W.Textarea, W.Html].includes(d.value) && B.push("is-lg"), [W.Image].includes(d.value) && B.push("is-xl"), r.multiple && d.value === W.Select && B.push("is-lg"), r.multiple && (h.value ? B.push(`has-multiple-display-${r.multipleDisplayEdition}`) : B.push(`has-multiple-display-${r.multipleDisplay}`)), re.value > 0 && B.push("has-icons", `has-icons-${re.value}`), B.push(h.value ? "is-editable" : "is-read"), d.value !== W.Range && (B.push(L.value ? "is-valid" : "is-error"), B.push(Me.value ? "is-filled" : "is-empty")), B.join(" ");
    }), ve = X(() => {
      var B;
      return typeof S.value == "number" ? (F.value, (B = J.langNumberFormat[F.value]) != null && B.amountOfDecimals ? Jt(
        S.value,
        J.langNumberFormat[F.value].amountOfDecimals,
        J.langNumberFormat[F.value].decimalSeparator,
        J.langNumberFormat[F.value].thousandsSeparator,
        J.langNumberFormat[F.value].removeDecimalsIfZero
      ) : J.amountOfDecimals ? Jt(
        S.value,
        J.amountOfDecimals,
        J.decimalSeparator,
        J.thousandsSeparator,
        J.removeDecimalsIfZero
      ) : S.value.toString()) : d.value === W.Html ? di(S.value) : S.value;
    }), Ue = X(() => typeof r.min == "string" ? parseFloat(r.min) : typeof r.min == "number" ? r.min : !1), Ie = X(() => typeof r.max == "string" ? parseFloat(r.max) : typeof r.max == "number" ? r.max : !1), De = X(() => {
      let B = "";
      if (r.label.startsWith("__:") ? B = rt(r.label.substring(3)) : B = r.label, r.labelIcon) {
        let Q = '<i class="' + r.labelIcon + '"></i>';
        r.labelIconAtEnd ? B += Q : B = Q + B;
      }
      return B;
    }), Re = X(() => r.placeholder.startsWith("__:") ? rt(r.placeholder.substring(3)) : r.placeholder), ge = X(() => r.searchPlaceholder.startsWith("__:") ? rt(r.searchPlaceholder.substring(3)) : r.searchPlaceholder), dt = X(() => d.value === W.File ? J.acceptTypes.file : d.value === W.Image ? J.acceptTypes.image : ""), Ze = X(() => r.errorMessage), He = X(() => r.infoMessage), Se = X(() => r.canStep && h.value && d.value === W.Number), Ae = X(() => r.canStep && h.value && d.value === W.Number && v.value !== "subtract"), ze = X(() => r.canStep && h.value && d.value === W.Number), Je = X(() => r.canUndo && ee.value && h.value && !Pl.includes(d.value)), Qe = X(() => r.canClear && Me.value && h.value && !Vl.includes(d.value)), Ve = X(() => r.canI18n && typeof x.value == "object" && h.value), je = X(() => d.value === W.Password && r.showPassword && Me.value && h.value), Dt = X(() => Je.value && !r.infoButtonEllipsis), Ht = X(() => Qe.value && !r.infoButtonEllipsis), Ot = X(() => je.value && !r.infoButtonEllipsis && v.value !== "password"), Ft = X(() => Ve.value && !r.infoButtonEllipsis && v.value !== "i18n"), Vt = X(() => d.value === W.Calc || d.value === W.Search ? !1 : I.value.length > 0 || N.value.length > 0 || r.optionsResource !== ""), Pt = X(() => r.allowReadModeSwitch && !r.infoButtonEllipsis), Ut = () => {
      vt(() => {
        l.value && l.value.focus();
      });
    }, fl = async () => {
      if (r.validationResource) {
        s("validating");
        const B = await Tt(r.validationResource, {
          ...r.validationResourceData,
          value: S.value
        });
        s("validation", B);
      }
    };
    ue(() => r.checkEqualTo, (B) => tt()), ue(() => r.readMode, (B) => h.value = !B), ue(() => r.valid, (B) => L.value = B), ue(() => r.modelValue, (B) => {
      x.value = B, d.value !== W.Date && (S.value = H());
    }), ue(S, (B) => {
      typeof x.value == "object" ? x.value[F.value] = B : x.value = B, d.value === W.Number && wl(B);
    }), ue(x, (B) => {
      E.value && h.value && (s("update:modelValue", B), fl(), tt());
    }, { deep: !0 }), ue(L, (B) => {
      s("update:valid", B);
    }), ue(() => r.options, (B) => {
      N.value = bt(B), d.value === W.Select ? st(T.value, !1) : st(S.value, !1);
    });
    const tt = () => {
      r.autoValidationType === "blur" && (!a.value || !f.value) || d.value !== W.Range && (p.value = [], vt(() => {
        let B = typeof r.min > "u" ? 0 : parseFloat(r.min), Q = typeof r.max > "u" ? 0 : parseFloat(r.max);
        if (d.value === W.Number && typeof r.min < "u" && typeof r.max < "u" && (S.value < B || S.value > Q)) {
          p.value.push($e.createNumBetween(B, Q, "ko")), L.value = !1;
          return;
        }
        ![W.Number, W.Email].includes(d.value) && r.mandatory && S.value === "" ? p.value.push($e.createEmpty("ko")) : d.value !== W.Email && B > 0 && (d.value !== W.Number && S.value.length < B ? p.value.push($e.createMinStr(B, "ko")) : S.value < B && p.value.push($e.createMinNum(B, "ko"))), Q > 0 && (d.value !== W.Number && S.value.length > Q ? p.value.push($e.createMaxStr(Q, "ko")) : S.value > Q && p.value.push($e.createMaxNum(Q, "ko"))), d.value === W.Email && (r.mandatory && S.value === "" ? p.value.push($e.createEmpty("ko")) : Rl(S.value) || p.value.push($e.createEmail("ko"))), Ul.includes(d.value) && (ln(p.value, S.value, r.minNumbers, r.maxNumbers), nn(p.value, S.value, r.minUpperChars, r.maxUpperChars), sn(p.value, S.value, r.minLowerChars, r.maxLowerChars), on(p.value, S.value, r.minChars, r.maxChars), an(p.value, S.value, r.minSpecialChars, r.maxSpecialChars)), r.checkEqualTo && S.value !== r.checkEqualTo && p.value.push($e.createEqualTo(r.checkEqualTo, "ko")), L.value = p.value.length === 0;
      }));
    }, st = (B, Q = !0) => {
      if (N.value.length === 0) {
        I.value = [];
        return;
      }
      switch (d.value) {
        case W.Select:
          r.searchable ? I.value = Et(N.value, B, !0) : I.value = N.value, M.value = !1, Q && (k.value = r.optionsResource !== "" || I.value.length > 0), q();
          return;
        case W.Text:
        case W.Search:
          I.value = Et(N.value, B, !1), M.value = !1, Q && (k.value = r.optionsResource !== "" || I.value.length > 0);
          return;
      }
    }, ft = async (B, Q = !0) => {
      if (!(!h.value && !r.autoloadOptionsResource && !P.value) && ![
        W.Tel,
        W.Date,
        W.Color,
        W.File,
        W.Html,
        W.Image,
        W.Password,
        W.Range,
        W.Textarea
      ].includes(d.value))
        if (M.value = !1, r.autoloadOptionsResource && !P.value && (D.value = !0), r.optionsResource !== "") {
          M.value = !0, J.searchKeyForResource !== "" && (r.optionsResourceData[J.searchKeyForResource] = B);
          const ke = await Tt(r.optionsResource, r.optionsResourceData);
          Array.isArray(ke.data) && ke.data.length > 0 && (N.value = Hl(N.value, ke.data), st(B, Q), r.autoloadOptionsResource && !P.value && (r.autoloadOptionsResource === "feed" && (r.multiple ? I.value.forEach((We) => {
            ht(We);
          }) : I.value.length > 0 && ht(I.value[0])), P.value = !0, D.value = !1), s("options-loaded", ke.data));
        } else
          st(B, Q);
    }, wt = (B) => {
      var Ge, We;
      let Q = I.value.length - 1;
      if (Q === -1) return;
      const ke = B.key ?? "";
      if (o.value)
        if (["ArrowDown", "ArrowUp", "Enter"].includes(ke) && (B.preventDefault(), B.stopPropagation()), ke === "ArrowDown") {
          ++z.value, z.value > Q && (z.value = 0);
          let ie = (Ge = _.value) == null ? void 0 : Ge.querySelector('[data-index="' + z.value + '"]');
          ie && ie.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else if (ke === "ArrowUp") {
          --z.value, z.value < 0 && (z.value = Q);
          let ie = (We = _.value) == null ? void 0 : We.querySelector('[data-index="' + z.value + '"]');
          ie && ie.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else ke === "Enter" && z.value > -1 && ht(I.value[z.value]);
    }, Ct = () => {
      if (d.value === W.Html) {
        l.value && l.value.setValue(O.value);
        return;
      } else if (d.value === W.Date) {
        x.value = C.value;
        return;
      } else if (d.value === W.File) {
        x.value = C.value, m.value = g.value;
        return;
      }
      S.value = O.value;
    }, Wt = () => {
      if (d.value === W.Html) {
        l.value && l.value.setValue("");
        return;
      } else if (d.value === W.Date) {
        x.value = "";
        return;
      } else if (d.value === W.File) {
        x.value = "", m.value = "";
        return;
      } else if (d.value === W.Select) {
        S.value = r.multiple ? [] : "", V.value = [];
        return;
      }
      S.value = "";
    }, hl = () => S.value, Zt = (B) => {
      tt(), ii.includes(d.value) ? (ft(S.value), wt(B)) : d.value === W.Select && wt(B), s("keyup", B);
    }, $t = () => {
      l.value && l.value.keepFocused();
    }, pl = () => {
      if (k.value) {
        if (d.value === W.Select) {
          Gt();
          return;
        }
        return gt();
      }
      if (d.value === W.Select) {
        jt();
        return;
      }
      return pt();
    }, ht = (B) => {
      if (!B.disabled)
        if (r.multiple) {
          let Q = Fl(B, S.value);
          Q === -1 ? (S.value.push(String(B.value)), V.value.push(B)) : (S.value.splice(Q, 1), V.value.splice(Q, 1)), $t(), s("selected-option", B);
        } else
          z.value = -1, S.value = String(B.value), V.value.splice(0, 1, B), k.value = !1, U.value = !1, s("selected-option", B);
    }, qt = (B) => s("keydown", B), pt = (B) => {
      f.value = !0, o.value = !0, tt(), s("focus", B);
    }, gt = (B) => {
      setTimeout(() => {
        if (!(r.searchable && U.value)) {
          if (r.multiple) {
            k.value = !0, o.value = !0;
            return;
          }
          a.value = !0, z.value = -1, k.value = !1, o.value = !1, tt(), s("blur", B);
        }
      }, 100);
    }, kt = (B) => {
      f.value = !0, o.value = !0, s("focus", B);
    }, xt = (B) => {
      a.value = !0, o.value = !1, s("blur", B);
    }, gl = (B) => {
      wt(B);
    }, ml = (B) => {
      T.value = B, ft(B);
    }, jt = () => {
      if (f.value = !0, o.value = !0, !r.optionsResource && I.value.length === 0) {
        k.value = !1;
        return;
      }
      k.value = !0, tt(), ft(T.value, !1), r.searchable && $t(), s("focus");
    }, Gt = () => {
      a.value = !0, o.value = !1, s("blur");
    }, St = (B) => {
      s("change", B);
    }, ot = (B) => {
      s("click", B);
    }, vl = (B) => s("click-info", B), bl = (B) => s("click-error", B), Kt = () => {
      let B = r.step ?? 1;
      (!r.min || S.value > r.min) && (S.value -= B);
    }, _l = () => {
      let B = r.step ?? 1;
      (!r.max || S.value < r.max) && (S.value += B);
    }, yl = (B) => {
      h.value && Ut();
    }, wl = (B) => {
      if (!r.enableAutoNumberFix) return !1;
      let Q = Number(B), ke = Dl(Q, Ue.value, Ie.value);
      return Q !== ke ? (S.value = ke, !0) : !1;
    };
    t({
      Identifier: c,
      reset: Ct,
      focus: Ut,
      value: hl,
      isMandatory: () => r.mandatory
    });
    const Cl = X(() => r.editSlot !== "" && typeof J.customEditSlots[r.editSlot] < "u"), kl = X(() => J.customEditSlots[r.editSlot]);
    Rt(() => {
      N.value = bt(r.options), st("", !1), q(), d.value === W.Select && (r.multiple && (U.value = !0), r.autoloadOptionsResource && ft("", !1)), E.value = !0;
    });
    const xl = X(() => et.includes(d.value) ? "label" : "div"), Sl = X(() => et.includes(d.value) ? {
      for: c
    } : {}), El = X(() => {
      switch (d.value) {
        case W.Select:
          return V.value;
        case W.Date:
          return mi(x.value, R.value);
        case W.File:
        case W.Image:
          return x.value;
        default:
          return S.value;
      }
    });
    return (B, Q) => {
      const ke = ye("lkt-button"), Ge = ye("lkt-loader"), We = ye("lkt-tooltip");
      return Z(), ne("div", {
        class: Fe(Ne.value),
        "data-show-ui": fe.value,
        "data-labeled": !ae(n).label,
        ref_key: "container",
        ref: w
      }, [
        ae(n).label ? at(B.$slots, "label", { key: 0 }) : de("", !0),
        !ae(n).label && De.value !== "" && !ae(et).includes(d.value) ? (Z(), ne("label", {
          key: 1,
          for: ae(c),
          class: "lkt-field--label",
          innerHTML: De.value
        }, null, 8, lo)) : de("", !0),
        he("div", no, [
          ce.value ? (Z(), ne("div", so, [
            B.featuredButton === "password" && je.value ? (Z(), te(Nt, {
              key: 0,
              modelValue: A.value,
              "onUpdate:modelValue": Q[0] || (Q[0] = (ie) => A.value = ie),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : de("", !0),
            Ve.value && v.value === "i18n" && B.canI18n ? (Z(), te(Qt, {
              key: 1,
              modelValue: x.value,
              "onUpdate:modelValue": Q[1] || (Q[1] = (ie) => x.value = ie),
              "is-featured": "",
              type: d.value
            }, null, 8, ["modelValue", "type"])) : de("", !0),
            Se.value && v.value === "subtract" ? (Z(), te(ke, {
              key: 2,
              class: "lkt-field--atn-btn",
              icon: "lkt-field-icon-minus",
              onClick: Kt
            })) : de("", !0)
          ])) : de("", !0),
          ae(u) ? (Z(), ne("div", oo, [
            he("i", {
              class: Fe(ae(u))
            }, null, 2)
          ])) : de("", !0),
          h.value ? (Z(), te(it(xl.value), ui({ key: 2 }, Sl.value, { class: "lkt-field-main" }), {
            default: Le(() => [
              ae(n).edit ? (Z(), ne("div", {
                key: 0,
                onClick: ot
              }, [
                at(B.$slots, "edit", {
                  value: x.value,
                  title: ve.value,
                  data: B.slotData
                })
              ])) : Cl.value ? (Z(), ne("div", {
                key: 1,
                onClick: ot
              }, [
                (Z(), te(it(kl.value), {
                  value: x.value,
                  title: ve.value,
                  data: B.slotData
                }, null, 8, ["value", "title", "data"]))
              ])) : ae(et).includes(d.value) ? (Z(), te(pn, {
                key: 2,
                modelValue: S.value,
                "onUpdate:modelValue": Q[2] || (Q[2] = (ie) => S.value = ie),
                id: ae(c),
                name: B.name,
                type: d.value,
                label: De.value,
                editable: h.value,
                focusing: o.value,
                disabled: se.value,
                readonly: B.readonly,
                onFocus: kt,
                onBlur: xt
              }, null, 8, ["modelValue", "id", "name", "type", "label", "editable", "focusing", "disabled", "readonly"])) : d.value === ae(W).Color ? (Z(), te(tn, {
                key: 3,
                modelValue: S.value,
                "onUpdate:modelValue": Q[3] || (Q[3] = (ie) => S.value = ie)
              }, null, 8, ["modelValue"])) : K.value || G.value ? (Z(), te(js, {
                key: 4,
                modelValue: x.value,
                "onUpdate:modelValue": Q[4] || (Q[4] = (ie) => x.value = ie),
                "file-name": m.value,
                "onUpdate:fileName": Q[5] || (Q[5] = (ie) => m.value = ie),
                id: ae(c),
                tabindex: B.tabindex,
                resource: B.resource,
                "resource-data": B.resourceData,
                name: B.name,
                placeholder: Re.value,
                accept: dt.value,
                focusing: o.value,
                disabled: se.value,
                readonly: B.readonly,
                "is-image": d.value === ae(W).Image,
                onChange: St
              }, null, 8, ["modelValue", "file-name", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image"])) : $.value ? (Z(), te(to, {
                key: 5,
                modelValue: x.value,
                "onUpdate:modelValue": Q[6] || (Q[6] = (ie) => x.value = ie),
                id: ae(c),
                tabindex: B.tabindex,
                lang: F.value,
                name: B.name
              }, null, 8, ["modelValue", "id", "tabindex", "lang", "name"])) : d.value === ae(W).Select ? (Z(), te(Cs, {
                key: 6,
                ref_key: "inputElement",
                ref: l,
                modelValue: S.value,
                "onUpdate:modelValue": Q[7] || (Q[7] = (ie) => S.value = ie),
                "show-options": k.value,
                "onUpdate:showOptions": Q[8] || (Q[8] = (ie) => k.value = ie),
                searchable: B.searchable,
                "search-mode": U.value,
                multiple: B.multiple,
                "options-icon": B.optionsIcon,
                "option-slot": B.optionSlot,
                "options-modal": B.optionsModal,
                "options-download": B.optionsDownload,
                "options-label-formatter": B.optionsLabelFormatter,
                "options-modal-data": B.optionsModalData,
                "picked-options": V.value,
                editable: h.value,
                focusing: o.value,
                "search-placeholder": ge.value,
                "multiple-display-edition": B.multipleDisplayEdition,
                onFocus: jt,
                onBlur: Gt,
                onNavigate: gl,
                onSearch: ml
              }, null, 8, ["modelValue", "show-options", "searchable", "search-mode", "multiple", "options-icon", "option-slot", "options-modal", "options-download", "options-label-formatter", "options-modal-data", "picked-options", "editable", "focusing", "search-placeholder", "multiple-display-edition"])) : d.value === ae(W).Calc ? (Z(), te(Ns, {
                key: 7,
                ref_key: "inputElement",
                ref: l,
                modelValue: S.value,
                "onUpdate:modelValue": Q[9] || (Q[9] = (ie) => S.value = ie),
                id: ae(c),
                tabindex: B.tabindex,
                name: B.name,
                editable: h.value,
                focusing: o.value,
                disabled: se.value,
                readonly: B.readonly,
                options: N.value,
                onFocus: kt,
                onBlur: xt
              }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "disabled", "readonly", "options"])) : d.value === ae(W).Search ? (Z(), te(Ms, {
                key: 8,
                ref_key: "inputElement",
                ref: l,
                modelValue: S.value,
                "onUpdate:modelValue": Q[10] || (Q[10] = (ie) => S.value = ie),
                id: ae(c),
                tabindex: B.tabindex,
                name: B.name,
                editable: h.value,
                focusing: o.value,
                "had-first-focus": f.value,
                disabled: se.value,
                readonly: B.readonly,
                "options-resource": B.optionsResource,
                container: w.value,
                onFocus: kt,
                onBlur: xt
              }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : j.value === "input" ? Be((Z(), ne("input", {
                key: 9,
                "onUpdate:modelValue": Q[11] || (Q[11] = (ie) => S.value = ie),
                ref: (ie) => l.value = ie,
                value: S.value,
                type: pe.value,
                name: B.name,
                id: ae(c),
                disabled: se.value,
                readonly: B.readonly,
                placeholder: Re.value,
                tabindex: B.tabindex,
                autocomplete: Ee.value,
                min: Ue.value,
                max: Ie.value,
                step: B.step,
                onKeyup: Zt,
                onKeydown: qt,
                onFocus: pt,
                onBlur: gt,
                onClick: ot,
                onChange: St
              }, null, 40, ao)), [
                [Nl, S.value]
              ]) : j.value === "textarea" ? Be((Z(), ne("textarea", {
                key: 10,
                "onUpdate:modelValue": Q[12] || (Q[12] = (ie) => S.value = ie),
                ref: (ie) => l.value = ie,
                value: S.value,
                name: B.name,
                id: ae(c),
                disabled: se.value,
                readonly: B.readonly,
                placeholder: Re.value,
                tabindex: B.tabindex,
                autocomplete: Ee.value,
                onKeyup: Zt,
                onKeydown: qt,
                onFocus: pt,
                onBlur: gt,
                onClick: ot,
                onChange: St
              }, null, 40, ro)), [
                [_t, S.value]
              ]) : d.value === ae(W).Html ? (Z(), te(ms, {
                key: 11,
                ref_key: "inputElement",
                ref: l,
                modelValue: S.value,
                "onUpdate:modelValue": Q[13] || (Q[13] = (ie) => S.value = ie),
                id: ae(c),
                tabindex: B.tabindex,
                name: B.name,
                lang: F.value,
                editable: h.value,
                focusing: o.value,
                disabled: se.value,
                readonly: B.readonly,
                onFocus: pt,
                onBlur: gt
              }, null, 8, ["modelValue", "id", "tabindex", "name", "lang", "editable", "focusing", "disabled", "readonly"])) : de("", !0)
            ]),
            _: 3
          }, 16)) : de("", !0),
          h.value ? de("", !0) : (Z(), te($s, {
            key: 3,
            value: El.value,
            type: d.value,
            label: De.value,
            title: ve.value,
            "file-name": m.value,
            "value-slot": B.valueSlot,
            "empty-value-slot": B.emptyValueSlot,
            "slot-data": B.slotData,
            download: B.download,
            multiple: B.multiple,
            multipleDisplay: B.multipleDisplay,
            modal: B.modal,
            "modal-key": B.modalKey,
            "modal-data": B.modalData,
            "option-slot": B.optionSlot,
            "options-download": B.optionsDownload,
            "options-modal": B.optionsModal,
            "options-modal-data": B.optionsModalData,
            "options-icon": B.optionsIcon,
            "options-label-formatter": B.optionsLabelFormatter,
            "options-resource": B.optionsResource,
            "options-resource-data": B.optionsResourceData,
            onClick: ot
          }, zl({ _: 2 }, [
            ae(n).value ? {
              name: "value",
              fn: Le(() => [
                at(B.$slots, x.value, {
                  value: x.value,
                  title: ve.value,
                  data: B.slotData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "type", "label", "title", "file-name", "value-slot", "empty-value-slot", "slot-data", "download", "multiple", "multipleDisplay", "modal", "modal-key", "modal-data", "option-slot", "options-download", "options-modal", "options-modal-data", "options-icon", "options-label-formatter", "options-resource", "options-resource-data"])),
          Be(he("div", uo, [
            Be(le(hi, { onClick: Ct }, null, 512), [
              [Pe, Dt.value]
            ]),
            Be(le(pi, { onClick: Wt }, null, 512), [
              [Pe, Ht.value]
            ]),
            Be(le(ke, {
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-minus",
              onClick: Kt
            }, null, 512), [
              [Pe, Ae.value]
            ]),
            Be(le(ke, {
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-plus",
              onClick: _l
            }, null, 512), [
              [Pe, ze.value]
            ]),
            Be(le(ke, {
              title: B.errorMessage,
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-warning",
              onClick: bl
            }, null, 8, ["title"]), [
              [Pe, Ze.value]
            ]),
            Be(le(ke, {
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-info",
              onClick: vl,
              tooltip: "",
              "show-tooltip-on-hover": "",
              "show-tooltip-on-hover-delay": 500,
              "hide-tooltip-on-leave": ""
            }, {
              tooltip: Le(() => [
                lt(Ke(B.infoMessage), 1)
              ]),
              _: 1
            }, 512), [
              [Pe, He.value]
            ]),
            d.value === ae(W).Password ? Be((Z(), te(Nt, {
              key: 0,
              modelValue: A.value,
              "onUpdate:modelValue": Q[14] || (Q[14] = (ie) => A.value = ie)
            }, null, 8, ["modelValue"])), [
              [Pe, Ot.value]
            ]) : de("", !0),
            Be(le(Qt, {
              modelValue: x.value,
              "onUpdate:modelValue": Q[15] || (Q[15] = (ie) => x.value = ie),
              type: d.value
            }, null, 8, ["modelValue", "type"]), [
              [Pe, Ft.value]
            ]),
            Pt.value ? (Z(), te(gi, {
              key: 1,
              modelValue: h.value,
              "onUpdate:modelValue": Q[16] || (Q[16] = (ie) => h.value = ie),
              onClick: yl
            }, null, 8, ["modelValue"])) : de("", !0),
            B.customButtonText || B.customButtonClass ? (Z(), te(ke, {
              key: 2,
              text: B.customButtonText,
              class: "lkt-field--info-btn lkt-field--custom-btn",
              icon: B.customButtonClass
            }, null, 8, ["text", "icon"])) : de("", !0),
            h.value ? Be((Z(), te(Wl, {
              key: 3,
              onClick: pl
            }, null, 512)), [
              [Pe, Vt.value]
            ]) : de("", !0),
            Be(le(Il, {
              "show-undo": Je.value,
              "show-clear": Qe.value,
              "show-password": je.value,
              "show-edition": B.allowReadModeSwitch,
              "show-password-check": A.value,
              "onUpdate:showPasswordCheck": Q[17] || (Q[17] = (ie) => A.value = ie),
              "show-edition-check": h.value,
              "onUpdate:showEditionCheck": Q[18] || (Q[18] = (ie) => h.value = ie),
              onUndo: Ct,
              onClear: Wt
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"]), [
              [Pe, B.infoButtonEllipsis]
            ])
          ], 512), [
            [Pe, fe.value]
          ])
        ]),
        B.autoValidation && p.value.length > 0 ? (Z(), te(Rs, {
          key: 2,
          items: p.value,
          stack: B.validationStack,
          min: B.min,
          max: B.max
        }, null, 8, ["items", "stack", "min", "max"])) : de("", !0),
        h.value && ae(ii).includes(d.value) ? (Z(), te(We, {
          key: 3,
          ref_key: "dropdownEl",
          ref: y,
          class: "lkt-field--dropdown",
          modelValue: k.value,
          "onUpdate:modelValue": Q[19] || (Q[19] = (ie) => k.value = ie),
          referrer: w.value,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: Le(() => [
            k.value ? (Z(), ne("div", co, [
              M.value ? (Z(), te(Ge, { key: 0 })) : de("", !0),
              M.value ? de("", !0) : (Z(), ne("ul", {
                key: 1,
                class: "lkt-field--dropdown-options",
                ref_key: "optionList",
                ref: _
              }, [
                (Z(!0), ne(Oe, null, Xe(I.value, (ie, Yt) => (Z(), ne("li", {
                  class: Fe({
                    "is-active": ae(Ol)(ie, x.value, B.multiple),
                    "is-focused": Yt === z.value,
                    "is-disabled": ie.disabled
                  }),
                  "data-index": Yt,
                  onClick: () => ht(ie)
                }, [
                  ae(n).option ? at(B.$slots, "option", {
                    key: 0,
                    option: ie,
                    data: B.slotData,
                    modal: B.optionsModal,
                    modalData: B.optionsModalData,
                    download: B.optionsDownload,
                    editable: h.value
                  }) : (Z(), te(Ye, {
                    key: 1,
                    option: ie,
                    "option-slot": B.optionSlot,
                    icon: B.optionsIcon,
                    modal: B.optionsModal,
                    "modal-data": B.optionsModalData,
                    download: B.optionsDownload,
                    "label-formatter": B.optionsLabelFormatter,
                    editable: h.value
                  }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter", "editable"]))
                ], 10, fo))), 256))
              ], 512))
            ])) : de("", !0)
          ]),
          _: 3
        }, 8, ["modelValue", "referrer"])) : de("", !0)
      ], 10, io);
    };
  }
}), Co = (e, t) => (J.customValueSlots[e] = t, !0), ko = (e, t) => (J.customEditSlots[e] = t, !0), ho = { class: "lkt-grid-1" }, po = /* @__PURE__ */ xe({
  __name: "LktTextLanguageEditModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    type: {},
    translations: { default: () => ({}) }
  },
  setup(e) {
    const t = X(() => Al.value.filter((i) => i !== fi.value));
    return (i, s) => {
      const n = ye("lkt-modal");
      return Z(), te(n, {
        "modal-name": i.modalName,
        title: "__:lmm.confirmFormLeave",
        "modal-key": i.modalKey,
        "z-index": i.zIndex
      }, {
        default: Le(() => [
          he("div", ho, [
            le(nt, {
              type: i.type,
              label: "Idioma actual (ES)",
              modelValue: i.translations.es,
              "onUpdate:modelValue": s[0] || (s[0] = (r) => i.translations.es = r),
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "modelValue"]),
            (Z(!0), ne(Oe, null, Xe(t.value, (r) => (Z(), te(nt, {
              type: i.type,
              label: "Idioma (" + r + ")",
              modelValue: i.translations[r],
              "onUpdate:modelValue": (c) => i.translations[r] = c,
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "label", "modelValue", "onUpdate:modelValue"]))), 256))
          ])
        ]),
        _: 1
      }, 8, ["modal-name", "modal-key", "z-index"]);
    };
  }
});
class xo {
  constructor(t = {}) {
    this.modelValue = "", this.type = W.Text, this.valid = void 0, this.placeholder = "", this.searchPlaceholder = "", this.label = "", this.labelIcon = "", this.labelIconAtEnd = !1, this.name = Lt(16), this.autocomplete = !1, this.disabled = !1, this.readonly = !1, this.readMode = !1, this.allowReadModeSwitch = !1, this.tabindex = void 0, this.mandatory = !1, this.showPassword = !1, this.canClear = !1, this.canUndo = !1, this.canI18n = !1, this.canStep = !0, this.mandatoryMessage = "", this.infoMessage = "", this.errorMessage = "", this.min = void 0, this.max = void 0, this.step = 1, this.enableAutoNumberFix = !0, this.emptyValueSlot = "", this.optionSlot = void 0, this.valueSlot = void 0, this.editSlot = void 0, this.slotData = {}, this.resource = "", this.resourceData = {}, this.validationResourceData = {}, this.autoValidation = !1, this.autoValidationType = "blur", this.validationStack = "default", this.minNumbers = void 0, this.maxNumbers = void 0, this.minChars = void 0, this.maxChars = void 0, this.minUpperChars = void 0, this.maxUpperChars = void 0, this.minLowerChars = void 0, this.maxLowerChars = void 0, this.minSpecialChars = void 0, this.maxSpecialChars = void 0, this.checkEqualTo = void 0, this.featuredButton = "", this.infoButtonEllipsis = !1, this.fileName = "", this.customButtonText = "", this.customButtonClass = "", this.options = [], this.multiple = !1, this.multipleDisplay = qe.List, this.multipleDisplayEdition = qe.Inline, this.searchable = !1, this.autoloadOptionsResource = !1, this.optionsDownload = "", this.optionsModal = "", this.optionsModalData = {}, this.optionsIcon = "", this.optionsLabelFormatter = void 0, this.optionsResource = "", this.optionsResourceData = {}, this.icon = "", this.download = "", this.modal = "", this.modalKey = "", this.modalData = {}, this.data = {};
    for (let i in t)
      this[i] = t[i];
  }
}
const So = {
  install: (e) => {
    e.component("lkt-field") === void 0 && (e.component("lkt-field", nt), Ml("lkt-field-language-edit", po));
  }
}, Eo = (e) => {
  J.defaultEmptyValueSlot = e;
}, Lo = (e, t) => {
  J.optionSlots[e] = t;
}, To = (e) => J.undoText = e, No = (e) => J.clearText = e, zo = (e) => J.i18nText = e, Bo = (e) => J.switchEditionOnText = e, Ro = (e) => J.switchEditionOffText = e, Ao = (e) => J.showPasswordOnText = e, Mo = (e) => J.showPasswordOffText = e, Io = (e) => J.dateReadFormat = e, Do = (e) => J.defaultDateReadFormat = e, Ho = (e, t, i = "default") => {
  i || (i = "default"), J.validationMessages[i] || (J.validationMessages[i] = {}), J.validationMessages[i][e] = t;
}, Oo = (e) => (J.validationIconSlot = e, !0), Fo = (e = 2, t = ".", i = ".", s = !0, n = "") => n !== "" ? (J.langNumberFormat[n].amountOfDecimals = e, J.langNumberFormat[n].decimalSeparator = t, J.langNumberFormat[n].thousandsSeparator = i, J.langNumberFormat[n].removeDecimalsIfZero = s, !0) : (J.amountOfDecimals = e, J.decimalSeparator = t, J.thousandsSeparator = i, J.removeDecimalsIfZero = s, !0);
export {
  xo as Field,
  ei as Option,
  So as default,
  No as setFieldClearText,
  Io as setFieldDateReadFormat,
  Do as setFieldDefaultDateReadFormat,
  Eo as setFieldEmptySlot,
  zo as setFieldI18nText,
  Fo as setFieldNumberFormat,
  Lo as setFieldOptionSlot,
  Mo as setFieldShowPasswordOffText,
  Ao as setFieldShowPasswordOnText,
  Ro as setFieldSwitchEditionOffText,
  Bo as setFieldSwitchEditionOnText,
  To as setFieldUndoText,
  Oo as setFieldValidationIconSlot,
  Ho as setFieldValidationMessage,
  ko as setTextEditSlot,
  Co as setTextValueSlot
};
