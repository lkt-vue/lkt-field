import { defineComponent as ke, computed as ee, resolveComponent as ye, openBlock as $, createBlock as ie, normalizeClass as Ve, ref as J, watch as ce, withCtx as _e, createCommentVNode as re, resolveDynamicComponent as st, mergeProps as gi, createElementBlock as ne, createElementVNode as ve, toDisplayString as Ye, createVNode as se, unref as j, normalizeStyle as ni, withDirectives as De, vModelCheckbox as Hl, onMounted as Ot, nextTick as wt, Fragment as He, vModelText as xt, renderList as Je, vShow as Ke, createTextVNode as ot, useSlots as Vt, renderSlot as Ue, createStaticVNode as Ol, createSlots as yt, isRef as Pe, vModelDynamic as Vl } from "vue";
import { stripTags as vi, fill as Fl, generateRandomString as At, formatNumber as si, isEmail as Pl } from "lkt-string-tools";
import { httpCall as Mt } from "lkt-http-client";
import { __ as dt, currentLanguage as bi, availableLanguages as Ul } from "lkt-i18n";
import { FieldValidation as je } from "lkt-field-validation";
import { date as ft } from "lkt-date-tools";
import { addModal as Wl } from "lkt-modal";
const we = class we {
};
we.defaultEmptyValueSlot = "", we.customValueSlots = {}, we.customEditSlots = {}, we.searchKeyForResource = "query", we.optionSlots = {}, we.defaultDateIcon = "lkt-field-icon-calendar-empty", we.defaultNumberFeaturedButton = "subtract", we.undoText = "", we.clearText = "", we.i18nText = "", we.switchEditionOnText = "", we.switchEditionOffText = "", we.showPasswordOnText = "", we.showPasswordOffText = "", we.dateReadFormat = "", we.defaultDateReadFormat = "Y-m-d", we.langDateReadFormat = {
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
}, we.readTextMaxLength = void 0;
let Q = we;
const _i = /* @__PURE__ */ ke({
  __name: "UndoButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const i = t, s = e, l = ee(() => Q.undoText), r = ee(() => s.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), c = () => i("click");
    return (f, n) => {
      const b = ye("lkt-button");
      return $(), ie(b, {
        text: f.insideEllipsis ? l.value : "",
        title: l.value,
        class: Ve([r.value, "lkt-field--btn-undo"]),
        icon: "lkt-field-icon-undo",
        onClick: c
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), yi = /* @__PURE__ */ ke({
  __name: "ClearButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const i = t, s = e, l = ee(() => Q.clearText), r = ee(() => s.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), c = () => i("click");
    return (f, n) => {
      const b = ye("lkt-button");
      return $(), ie(b, {
        text: f.insideEllipsis ? l.value : "",
        title: l.value,
        class: Ve(r.value),
        icon: "lkt-field-icon-cancel",
        onClick: c
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), It = /* @__PURE__ */ ke({
  __name: "PasswordButton",
  props: {
    modelValue: { type: Boolean, default: !1 },
    insideEllipsis: { type: Boolean, default: !1 },
    isFeatured: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, s = e, l = J(s.modelValue);
    ce(() => s.modelValue, (b) => l.value = b), ce(l, (b) => i("update:modelValue", b));
    const r = ee(() => l.value ? Q.showPasswordOnText : Q.showPasswordOffText), c = ee(() => l.value === !0 ? "lkt-field-icon-lock-open" : "lkt-field-icon-lock"), f = ee(() => s.isFeatured ? "lkt-field--atn-btn" : s.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), n = () => i("click");
    return (b, u) => {
      const g = ye("lkt-button");
      return $(), ie(g, {
        text: b.insideEllipsis ? r.value : "",
        title: r.value,
        class: Ve(f.value),
        icon: c.value,
        onClick: n,
        checked: l.value,
        "onUpdate:checked": u[0] || (u[0] = (C) => l.value = C),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), wi = /* @__PURE__ */ ke({
  __name: "EditionButton",
  props: {
    modelValue: { type: Boolean, default: !1 },
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, s = e, l = J(s.modelValue);
    ce(() => s.modelValue, (b) => l.value = b), ce(l, (b) => i("update:modelValue", b));
    const r = ee(() => l.value ? Q.switchEditionOnText : Q.switchEditionOffText), c = ee(() => l.value === !0 ? "lkt-field-icon-eye" : "lkt-field-icon-pencil"), f = ee(() => s.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), n = () => i("click");
    return (b, u) => {
      const g = ye("lkt-button");
      return $(), ie(g, {
        text: b.insideEllipsis ? r.value : "",
        title: r.value,
        class: Ve(f.value),
        icon: c.value,
        onClick: n,
        checked: l.value,
        "onUpdate:checked": u[0] || (u[0] = (C) => l.value = C),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Zl = /* @__PURE__ */ ke({
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
    const i = t, s = e, l = J(s.showPasswordCheck);
    ce(() => s.showPasswordCheck, (c) => l.value = c), ce(l, (c) => i("update:showPasswordCheck", c));
    const r = J(s.showEditionCheck);
    return ce(() => s.showEditionCheck, (c) => r.value = c), ce(r, (c) => i("update:showEditionCheck", c)), (c, f) => {
      const n = ye("lkt-button");
      return $(), ie(n, {
        split: "",
        "split-icon": "lkt-field-icon-ellipsis-vert",
        class: "lkt-field--info-btn"
      }, {
        split: _e(({ doClose: b }) => [
          c.showUndo ? ($(), ie(_i, {
            key: 0,
            onClick: f[0] || (f[0] = () => i("undo")),
            "inside-ellipsis": ""
          })) : re("", !0),
          c.showClear ? ($(), ie(yi, {
            key: 1,
            onClick: f[1] || (f[1] = () => i("clear")),
            "inside-ellipsis": ""
          })) : re("", !0),
          c.showPassword ? ($(), ie(It, {
            key: 2,
            modelValue: l.value,
            "onUpdate:modelValue": f[2] || (f[2] = (u) => l.value = u),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : re("", !0),
          c.showEdition ? ($(), ie(wi, {
            key: 3,
            modelValue: r.value,
            "onUpdate:modelValue": f[3] || (f[3] = (u) => r.value = u),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : re("", !0)
        ]),
        _: 1
      });
    };
  }
}), oi = /* @__PURE__ */ ke({
  __name: "I18nButton",
  props: {
    modelValue: { default: () => ({}) },
    type: {},
    insideEllipsis: { type: Boolean, default: !1 },
    isFeatured: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, s = e, l = J(s.modelValue);
    ce(() => s.modelValue, (f) => l.value = f, { deep: !0 }), ce(l, (f) => i("update:modelValue", f), { deep: !0 });
    const r = ee(() => Q.i18nText), c = ee(() => s.isFeatured ? "lkt-field--atn-btn" : s.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (f, n) => {
      const b = ye("lkt-button");
      return $(), ie(b, {
        text: f.insideEllipsis ? r.value : "",
        title: r.value,
        class: Ve(c.value),
        icon: "lkt-field-icon-language",
        modal: "lkt-field-language-edit",
        "modal-data": { translations: l.value, type: f.type }
      }, null, 8, ["text", "title", "class", "modal-data"]);
    };
  }
});
var W = /* @__PURE__ */ ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e))(W || {});
const $l = (e, t, i) => (e = Number(e), t !== !1 && e < t && (e = t), i !== !1 && e > i && (e = i), e);
class Ct {
  constructor(t = {}) {
    this.value = void 0, this.label = "", this.data = {}, this.disabled = !1, this.group = "", this.icon = "", this.modal = "";
    for (let i in t)
      this[i] = t[i];
  }
}
const ct = (e, t) => typeof e == "string" && e.startsWith("prop:") ? t[e.substring(5)] : e, ai = (e, t) => typeof e == "object" && !Array.isArray(e) ? e[t] : e, kt = (e, t) => {
  if (typeof e == "string" && (e = ct(e, t), typeof e == "string" && e.startsWith("__:"))) {
    let i = e.substring(3), s = dt(i), l = [];
    for (let r in s) l.push({ value: r, label: s[r] });
    return kt(l, t);
  }
  return Array.isArray(e) ? e.length === 0 ? e : e.map((i) => {
    if (typeof i == "object") return new Ct(i);
    if (typeof i == "string" || typeof i == "number")
      return new Ct({
        label: String(i),
        value: i
      });
  }).filter((i) => typeof i < "u") : [];
}, Rt = (e, t = "", i = !0) => {
  if (t === "") return e;
  const s = String(t).toLowerCase();
  return e.filter((l) => {
    let r = String(l.label).toLowerCase();
    return r.indexOf(s) !== -1 && (i || r !== s);
  });
}, ri = (e, t) => {
  if (t !== "")
    return e.find((i) => i.value == t);
}, ql = (e, t, i) => {
  const s = /* @__PURE__ */ new Set(), l = [...e, ...kt(t, i)], r = [];
  return l.forEach((c) => {
    let f = [c.value, c.label].join("-");
    s.has(f) || (r.push(c), s.add(f));
  }), r;
}, jl = (e, t, i) => {
  if (i) {
    if (Array.isArray(t)) {
      let s = t.findIndex((l) => l == e.value);
      return typeof s > "u" ? !1 : s > -1;
    }
    return !1;
  }
  return e.value == t;
}, Gl = (e, t) => {
  let i = t.findIndex((s) => s == e.value);
  return typeof i > "u" && (i = -1), i;
}, Ft = (e) => !(Object.prototype.toString.call(e) === "[object Date]" && isNaN(e)), Ci = (e, t) => typeof e > "u" ? "" : (typeof e == "string" && (e = new Date(e)), Ft(e) ? ft(t, e) : ""), ui = [
  W.Text,
  W.Search,
  W.Select
], Kl = [
  W.Switch,
  W.Check
], Yl = [
  W.Switch,
  W.Check
];
W.Text, W.Search;
const tt = [
  W.Switch,
  W.Check
], Xl = [
  W.Select,
  W.Color,
  W.Card
], Jl = [
  W.Text,
  W.Email,
  W.Password
], Ql = /* @__PURE__ */ ke({
  __name: "DropdownButton",
  emits: ["click"],
  setup(e, { emit: t }) {
    const i = t, s = ee(() => Q.undoText), l = ee(() => "lkt-field--info-btn"), r = () => i("click");
    return (c, f) => {
      const n = ye("lkt-button");
      return $(), ie(n, {
        text: s.value,
        title: s.value,
        class: Ve([l.value, "lkt-field--btn-dropdown"]),
        icon: "lkt-field-icon-angle-down",
        onClick: r,
        tabindex: "-1"
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), en = {
  key: 0,
  class: "lkt-field--dropdown-option--icon-container"
}, tn = { class: "lkt-field--dropdown-option--label-container" }, Xe = /* @__PURE__ */ ke({
  __name: "DropdownOption",
  props: {
    option: { default: () => new Ct() },
    optionSlot: { default: "" },
    editable: { type: Boolean, default: !1 },
    icon: { type: [String, Function], default: "" },
    modal: { type: [String, Function], default: "" },
    modalData: { type: [Object, Function], default: () => ({}) },
    download: { type: [String, Function], default: "" },
    labelFormatter: {},
    isTag: { type: Boolean, default: !1 }
  },
  emits: ["click", "click-icon"],
  setup(e, { emit: t }) {
    const i = t, s = e, l = ee(() => s.option.icon !== "" ? s.option.icon : typeof s.icon == "function" ? s.icon(s.option) : s.icon), r = ee(() => typeof s.labelFormatter == "function" ? s.labelFormatter(s.option) : s.option.label), c = ee(() => `lkt-opt-${s.option.value}`), f = ee(() => {
      if (s.optionSlot && !(typeof Q.optionSlots[s.optionSlot] > "u"))
        return Q.optionSlots[s.optionSlot];
    }), n = ee(() => f.value ? f.value : s.isTag ? "lkt-tag" : !s.editable && (s.modal !== "" || s.option.modal !== "") ? "lkt-button" : !s.editable && s.download !== "" ? "lkt-anchor" : "div"), b = ee(() => {
      if (n.value === "lkt-button") {
        let C = s.option.modal;
        s.modal && (C = s.modal);
        let S = C;
        return typeof C == "function" && (S = () => C(s.option)), {
          modal: S,
          modalData: s.modalData,
          modalKey: s.option.value,
          icon: l.value
        };
      }
      if (n.value === "lkt-anchor") {
        let C = s.download;
        typeof s.download == "function" ? C = () => s.download(s.option) : s.download.startsWith("prop:") && (C = s.download.substring(5), C = s.option[C]);
        let S = s.download !== "";
        return {
          href: C,
          target: S ? "_blank" : "",
          download: S
        };
      }
      return n.value === "lkt-tag" ? {
        type: "action-icon",
        icon: "lkt-field-icon-cancel"
      } : {};
    }), u = () => {
      i("click");
    }, g = () => {
      i("click-icon", s.option);
    };
    return (C, S) => ($(), ie(st(n.value), gi(b.value, {
      class: ["lkt-field--dropdown-option", c.value],
      title: C.option.label,
      onClick: u,
      onClickIcon: g
    }), {
      default: _e(() => [
        l.value && n.value !== "lkt-button" ? ($(), ne("div", en, [
          ve("i", {
            class: Ve(l.value)
          }, null, 2)
        ])) : re("", !0),
        ve("div", tn, Ye(r.value), 1)
      ]),
      _: 1
    }, 16, ["class", "title"]));
  }
}), ln = { class: "lkt-field-color--tooltip--rgba-container" }, nn = { class: "lkt-field-color--tooltip--numeric-input-container" }, sn = { class: "like-lkt-field-label" }, _t = /* @__PURE__ */ ke({
  __name: "RgbaRange",
  props: {
    modelValue: { default: 0 },
    label: { default: "" },
    rangeClass: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, s = e, l = J(s.modelValue);
    return ce(() => s.modelValue, (r) => l.value = r), ce(l, (r) => i("update:modelValue", r)), (r, c) => ($(), ne("div", ln, [
      ve("div", nn, [
        ve("label", sn, Ye(r.label), 1),
        se(at, {
          modelValue: l.value,
          "onUpdate:modelValue": c[0] || (c[0] = (f) => l.value = f),
          type: j(W).Number,
          min: 0,
          max: 255,
          step: 1,
          "can-step": !1
        }, null, 8, ["modelValue", "type"])
      ]),
      se(at, {
        class: Ve(["color-range", r.rangeClass]),
        modelValue: l.value,
        "onUpdate:modelValue": c[1] || (c[1] = (f) => l.value = f),
        type: j(W).Range,
        min: 0,
        max: 255,
        step: 1
      }, null, 8, ["class", "modelValue", "type"])
    ]));
  }
});
class on {
  constructor(t) {
    this.r = 0, this.g = 0, this.b = 0, this.a = 255;
    for (let i in t)
      this.hasOwnProperty(i) && (this[i] = t[i]);
  }
}
const an = (e, t, i, s) => {
  let l = parseInt(e).toString(16).padStart(2, "0").toUpperCase(), r = parseInt(t).toString(16).padStart(2, "0").toUpperCase(), c = parseInt(i).toString(16).padStart(2, "0").toUpperCase(), f = "#" + l + r + c;
  if (s == 255) return f;
  let n = parseInt(s).toString(16).padStart(2, "0").toUpperCase();
  return f + n;
}, ci = (e) => {
  let t = parseInt(+("0x" + e.substring(1, 3)), 10), i = parseInt(+("0x" + e.substring(3, 5)), 10), s = parseInt(+("0x" + e.substring(5, 7)), 10), l = 255;
  return e.length === 9 && (l = parseInt(+("0x" + e.substring(5, 7)), 10)), new on({ r: t, g: i, b: s, a: l });
}, rn = (e) => (0.299 * e.r + 0.587 * e.g + 0.114 * e.b) / e.a > 0.5 ? "#000000" : "#ffffff", un = { class: "lkt-grid-1" }, cn = { class: "lkt-field-color--tooltip--rgba-container" }, dn = { class: "lkt-field-color--tooltip--hex-input-container" }, ki = /* @__PURE__ */ ke({
  __name: "ColorInput",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, s = e, l = (A) => {
      if ([0, 1].includes(A.length))
        f.value = 0, n.value = 0, b.value = 0, u.value = 255;
      else if ([7, 9].includes(A.length)) {
        let o = ci(A);
        f.value = o.r, n.value = o.g, b.value = o.b, u.value = o.a;
      }
    }, r = (A) => {
      g.value = an(
        f.value,
        n.value,
        b.value,
        u.value
      );
    }, c = (A) => {
      l(g.value);
    }, f = J(255), n = J(255), b = J(255), u = J(255), g = J(s.modelValue);
    l(g.value), ce([f, n, b, u], r), ce(() => s.modelValue, (A) => g.value = A), ce(g, (A) => i("update:modelValue", A));
    const C = ee(() => rn(ci(g.value))), S = ee(() => g.value === "" || g.value === "#" ? {} : {
      background: g.value,
      "--lkt-btn-bg": g.value,
      color: C.value,
      "--lkt-btn-color": C.value
    }), E = ee(() => g.value === "" || g.value === "#" ? {} : {
      "--lkt-field-bg-input": g.value,
      "--lkt-field-color": C.value
    });
    return (A, o) => {
      const a = ye("lkt-button");
      return $(), ie(a, {
        class: "lkt-field--toggle-button",
        style: ni(S.value),
        text: g.value,
        tooltip: "",
        "tooltip-class": "lkt-field-color--alpha--tooltip",
        "tooltip-location-y": "bottom",
        "tooltip-location-x": "left-corner"
      }, {
        tooltip: _e(({ doClose: d }) => [
          ve("div", un, [
            ve("div", cn, [
              ve("div", dn, [
                o[5] || (o[5] = ve("label", { class: "like-lkt-field-label" }, "HEX", -1)),
                se(at, {
                  modelValue: g.value,
                  "onUpdate:modelValue": o[0] || (o[0] = (h) => g.value = h),
                  style: ni(E.value),
                  onChange: c
                }, null, 8, ["modelValue", "style"])
              ])
            ]),
            se(_t, {
              modelValue: f.value,
              "onUpdate:modelValue": o[1] || (o[1] = (h) => f.value = h),
              label: "R",
              "range-class": "color-range--red"
            }, null, 8, ["modelValue"]),
            se(_t, {
              modelValue: n.value,
              "onUpdate:modelValue": o[2] || (o[2] = (h) => n.value = h),
              label: "G",
              "range-class": "color-range--green"
            }, null, 8, ["modelValue"]),
            se(_t, {
              modelValue: b.value,
              "onUpdate:modelValue": o[3] || (o[3] = (h) => b.value = h),
              label: "B",
              "range-class": "color-range--blue"
            }, null, 8, ["modelValue"]),
            se(_t, {
              modelValue: u.value,
              "onUpdate:modelValue": o[4] || (o[4] = (h) => u.value = h),
              label: "A",
              "range-class": "color-range--alpha"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["style", "text"]);
    };
  }
}), fn = /* @__PURE__ */ ke({
  __name: "MultipleColorInput",
  props: {
    modelValue: { default: () => [] },
    editMode: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] }
  },
  setup(e) {
    const t = e, i = J(t.modelValue), s = ee(() => typeof t.max == "boolean" || i.value.length < t.max ? ["inline-create"] : []);
    return (l, r) => {
      const c = ye("lkt-table");
      return $(), ie(c, {
        type: "item",
        modelValue: i.value,
        "onUpdate:modelValue": r[0] || (r[0] = (f) => i.value = f),
        perms: s.value,
        "edit-mode": l.editMode,
        "new-value-generator": () => "",
        "required-items-for-top-create": 999999
      }, {
        item: _e(({ item: f, index: n, isLoading: b, canCreate: u, canRead: g, canUpdate: C, canDrop: S, doDrop: E }) => [
          se(ki, {
            modelValue: i.value[n],
            "onUpdate:modelValue": (A) => i.value[n] = A
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "perms", "edit-mode"]);
    };
  }
});
var Be = /* @__PURE__ */ ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(Be || {}), ge = /* @__PURE__ */ ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(ge || {});
class be {
  constructor(t, i) {
    this.code = void 0, this.status = ge.Info, this.min = 0, this.max = 0, this.equalToValue = void 0, this.code = t, this.status = i;
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
  static createEmpty(t = ge.Ko) {
    return new be(Be.Empty, t);
  }
  static createEmail(t = ge.Ko) {
    return new be(Be.Email, t);
  }
  static createMinStr(t, i = ge.Ko) {
    return new be(Be.MinStringLength, i).setMin(t);
  }
  static createMaxStr(t, i = ge.Ko) {
    return new be(Be.MaxStringLength, i).setMax(t);
  }
  static createMinNum(t, i = ge.Ko) {
    return new be(Be.MinNumber, i).setMin(t);
  }
  static createMaxNum(t, i = ge.Ko) {
    return new be(Be.MaxNumber, i).setMax(t);
  }
  static createNumBetween(t, i, s = ge.Ko) {
    return new be(Be.MaxNumber, s).setMin(t).setMax(i);
  }
  static createMinNumbers(t, i = ge.Ko) {
    return new be(Be.MinNumbers, i).setMin(t);
  }
  static createMaxNumbers(t, i = ge.Ko) {
    return new be(Be.MaxNumbers, i).setMax(t);
  }
  static createMinUpperChars(t, i = ge.Ko) {
    return new be(Be.MinUpperChars, i).setMin(t);
  }
  static createMaxUpperChars(t, i = ge.Ko) {
    return new be(Be.MaxUpperChars, i).setMax(t);
  }
  static createMinLowerChars(t, i = ge.Ko) {
    return new be(Be.MinLowerChars, i).setMin(t);
  }
  static createMaxLowerChars(t, i = ge.Ko) {
    return new be(Be.MaxLowerChars, i).setMax(t);
  }
  static createMinSpecialChars(t, i = ge.Ko) {
    return new be(Be.MinSpecialChars, i).setMin(t);
  }
  static createMaxSpecialChars(t, i = ge.Ko) {
    return new be(Be.MaxSpecialChars, i).setMax(t);
  }
  static createMinChars(t, i = ge.Ko) {
    return new be(Be.MinChars, i).setMin(t);
  }
  static createMaxChars(t, i = ge.Ko) {
    return new be(Be.MaxChars, i).setMax(t);
  }
  static createEqualTo(t, i = ge.Ko) {
    return new be(Be.EqualTo, i).setEqualToValue(t);
  }
}
const hn = (e, t, i, s) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\D+/g, "").length < l && e.push(be.createMinNumbers(l, ge.Ko));
  }
  if (typeof s < "u") {
    let l = parseInt(s);
    t.replace(/\D+/g, "").length > l && e.push(be.createMaxNumbers(l, ge.Ko));
  }
}, pn = (e, t, i, s) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/[^A-Z]+/g, "").length < l && e.push(be.createMinUpperChars(l, ge.Ko));
  }
  if (typeof s < "u") {
    let l = parseInt(s);
    t.replace(/[^A-Z]+/g, "").length > l && e.push(be.createMaxUpperChars(l, ge.Ko));
  }
}, mn = (e, t, i, s) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/[A-Z]+/g, "").length < l && e.push(be.createMinLowerChars(l, ge.Ko));
  }
  if (typeof s < "u") {
    let l = parseInt(s);
    t.replace(/[A-Z]+/g, "").length > l && e.push(be.createMaxLowerChars(l, ge.Ko));
  }
}, gn = (e, t, i, s) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\d+/g, "").length < l && e.push(be.createMinChars(l, ge.Ko));
  }
  if (typeof s < "u") {
    let l = parseInt(s);
    t.replace(/\d+/g, "").length > l && e.push(be.createMaxChars(l, ge.Ko));
  }
}, vn = (e, t, i, s) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < l && e.push(be.createMinSpecialChars(l, ge.Ko));
  }
  if (typeof s < "u") {
    let l = parseInt(s);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > l && e.push(be.createMaxSpecialChars(l, ge.Ko));
  }
}, di = (e, t = "default") => {
  let i = Q.validationMessages[t] && Q.validationMessages[t][e] ? Q.validationMessages[t][e] : "";
  return i || (i = ""), i;
};
var Ge = /* @__PURE__ */ ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(Ge || {});
const bn = { class: "boolean-input" }, _n = { class: "boolean-input-label" }, yn = { class: "boolean-input--check-on" }, wn = {
  key: 0,
  class: "lkt-field-icon-ok"
}, Cn = ["innerHTML"], kn = ["name", "id", "disabled", "readonly", "value", "checked"], xn = /* @__PURE__ */ ke({
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
    const i = t, s = e, l = J(null), r = J(s.modelValue), c = J(r.value ? "true" : "false"), f = J(s.focusing), n = (u) => {
      f.value = !0, i("focus", u);
    }, b = (u) => {
      f.value = !1, i("blur", u);
    };
    return ce(() => s.modelValue, (u) => r.value = u), ce(r, (u) => i("update:modelValue", u)), (u, g) => ($(), ne("div", bn, [
      ve("div", _n, [
        ve("div", yn, [
          u.type === j(W).Check && r.value ? ($(), ne("i", wn)) : re("", !0)
        ])
      ]),
      u.label ? ($(), ne("div", {
        key: 0,
        class: "lkt-field--label",
        innerHTML: u.label
      }, null, 8, Cn)) : re("", !0),
      De(ve("input", {
        "onUpdate:modelValue": g[0] || (g[0] = (C) => r.value = C),
        type: "checkbox",
        ref_key: "input",
        ref: l,
        name: u.name,
        id: u.id,
        disabled: !u.editable || u.disabled,
        readonly: !u.editable || u.readonly,
        value: c.value,
        checked: r.value,
        onFocus: n,
        onBlur: b
      }, null, 40, kn), [
        [Hl, r.value]
      ])
    ]));
  }
});
var xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Se(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(xi);
var Sn = xi.exports;
const Si = /* @__PURE__ */ Se(Sn);
var Ei = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(Ei);
var En = Ei.exports;
const Li = /* @__PURE__ */ Se(En);
var Ti = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(Ti);
var Ln = Ti.exports;
const Bi = /* @__PURE__ */ Se(Ln);
var Ni = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(Ni);
var Tn = Ni.exports;
const zi = /* @__PURE__ */ Se(Tn);
var Ri = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(Ri);
var Bn = Ri.exports;
const St = /* @__PURE__ */ Se(Bn);
var Ai = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(Ai);
var Nn = Ai.exports;
const Mi = /* @__PURE__ */ Se(Nn);
var Ii = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(Ii);
var zn = Ii.exports;
const Di = /* @__PURE__ */ Se(zn);
var Hi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(Hi);
var Rn = Hi.exports;
const Oi = /* @__PURE__ */ Se(Rn);
var Vi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG una finestra con un documento");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(Vi);
var An = Vi.exports;
const Fi = /* @__PURE__ */ Se(An);
var Pi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(Pi);
var Mn = Pi.exports;
const Ui = /* @__PURE__ */ Se(Mn);
var Wi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(Wi);
var In = Wi.exports;
const Zi = /* @__PURE__ */ Se(In);
var $i = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})($i);
var Dn = $i.exports;
const qi = /* @__PURE__ */ Se(Dn);
var ji = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(ji);
var Hn = ji.exports;
const Gi = /* @__PURE__ */ Se(Hn);
var Ki = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(Ki);
var On = Ki.exports;
const Yi = /* @__PURE__ */ Se(On);
var Xi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(Xi);
var Vn = Xi.exports;
const Ji = /* @__PURE__ */ Se(Vn);
var Qi = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(Qi);
var Fn = Qi.exports;
const el = /* @__PURE__ */ Se(Fn);
var tl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(tl);
var Pn = tl.exports;
const il = /* @__PURE__ */ Se(Pn);
var ll = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(ll);
var Un = ll.exports;
const nl = /* @__PURE__ */ Se(Un);
var sl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(sl);
var Wn = sl.exports;
const ol = /* @__PURE__ */ Se(Wn);
var al = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(al);
var Zn = al.exports;
const rl = /* @__PURE__ */ Se(Zn);
var ul = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
})(ul);
var $n = ul.exports;
const cl = /* @__PURE__ */ Se($n), qn = { ckb: Si, cs: Li, da: Bi, de: zi, en: St, es: Mi, fr: Di, he: Oi, it: Fi, ja: Ui, ko: Zi, lv: qi, nl: Gi, pl: Yi, pt_br: Ji, ro: el, ru: il, se: nl, ua: ol, ur: rl, zh_cn: cl }, fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: Si,
  cs: Li,
  da: Bi,
  de: zi,
  default: qn,
  en: St,
  es: Mi,
  fr: Di,
  he: Oi,
  it: Fi,
  ja: Ui,
  ko: Zi,
  lv: qi,
  nl: Gi,
  pl: Yi,
  pt_br: Ji,
  ro: el,
  ru: il,
  se: nl,
  ua: ol,
  ur: rl,
  zh_cn: cl
}, Symbol.toStringTag, { value: "Module" })), jn = {
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
}, Gn = {
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
    let l = this.setSubmenu(e), r = s.align._itemMenu = l.querySelector("ul");
    r.addEventListener("click", this.pickup.bind(e)), s.align._alignList = r.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null, r = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.icons, s = e.util.createElement("DIV"), l = e.options.alignItems;
    let r = "";
    for (let c = 0, f, n; c < l.length; c++)
      f = l[c], n = t.toolbar["align" + f.charAt(0).toUpperCase() + f.slice(1)], r += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + f + '" title="' + n + '" aria-label="' + n + '"><span class="se-list-icon">' + i["align_" + f] + "</span>" + n + "</button></li>";
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
      const l = e.style.textAlign;
      if (l)
        return this.util.changeElement(s, t.icons[l] || t.icons[t.defaultDir]), i.setAttribute("data-focus", l), !0;
    }
    return !1;
  },
  /**
   * @Override submenu
   */
  on: function() {
    const e = this.context.align, t = e._alignList, i = e.targetButton.getAttribute("data-focus") || e.defaultDir;
    if (i !== e.currentAlign) {
      for (let s = 0, l = t.length; s < l; s++)
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
      const l = i.parentElement, r = s.parentElement;
      l.appendChild(s), r.appendChild(i);
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !i && !/UL/i.test(t.tagName); )
      i = t.getAttribute("data-value"), t = t.parentNode;
    if (!i) return;
    const s = this.context.align.defaultDir, l = this.getSelectedElements();
    for (let r = 0, c = l.length; r < c; r++)
      this.util.setStyle(l[r], "textAlign", i === s ? "" : i);
    this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1);
  }
}, Kn = {
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
    let s, l, r, c, f = e.options.font, n = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (r = 0, c = f.length; r < c; r++)
      s = f[r], l = s.split(",")[0], n += '<li><button type="button" class="se-btn-list" data-value="' + s + '" data-txt="' + l + '" title="' + l + '" aria-label="' + l + '" style="font-family:' + s + ';">' + l + "</button></li>";
    return n += "</ul></div>", i.innerHTML = n, i;
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
      for (let s = 0, l = t.length; s < l; s++)
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
}, Yn = {
  name: "fontSize",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.fontSize = {
      targetText: t.querySelector(".txt"),
      _sizeList: null,
      currentSize: ""
    };
    let s = this.setSubmenu(e), l = s.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.fontSize._sizeList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, s = e.util.createElement("DIV");
    s.className = "se-submenu se-list-layer se-list-font-size";
    const l = t.fontSize ? t.fontSize : [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
    let r = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let c = 0, f = t.fontSizeUnit, n = l.length, b; c < n; c++)
      b = l[c], r += '<li><button type="button" class="se-btn-list" data-value="' + b + f + '" title="' + b + f + '" aria-label="' + b + f + '" style="font-size:' + b + f + ';">' + b + "</button></li>";
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
      for (let s = 0, l = t.length; s < l; s++)
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
}, dl = {
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
    const i = e.options, s = e.lang, l = !i.colorList || i.colorList.length === 0 ? [
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
    for (let f = 0, n = l.length, b; f < n; f++)
      b = l[f], b && (typeof b == "string" && (r.push(b), f < n - 1) || (r.length > 0 && (c += '<div class="se-selector-color">' + t(r) + "</div>", r = []), typeof b == "object" && (c += '<div class="se-selector-color">' + t(b) + "</div>")));
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
    for (let i = 0, s = e.length, l; i < s; i++)
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
    let s = t || i.getColorInNode.call(this, e) || this.context.colorPicker._defaultColor;
    s = i.isHexColor(s) ? s : i.rgb2hex(s) || s;
    const l = this.context.colorPicker._colorList;
    if (l)
      for (let r = 0, c = l.length; r < c; r++)
        s.toLowerCase() === l[r].getAttribute("data-value").toLowerCase() ? this.util.addClass(l[r], "active") : this.util.removeClass(l[r], "active");
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
}, Xn = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([dl]);
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
}, Jn = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([dl]);
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
}, Qn = {
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
    let l = "";
    for (let r = 0, c = s.length; r < c; r++)
      l += '<li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="' + s[r].class + '" title="' + s[r].name + '" aria-label="' + s[r].name + '"><hr' + (s[r].class ? ' class="' + s[r].class + '"' : "") + (s[r].style ? ' style="' + s[r].style + '"' : "") + "/></button></li>";
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
    const s = this.plugins.horizontalRule.appendHr.call(this, t.firstElementChild);
    s && (this.setRange(s, 0, s, 0), this.submenuOff());
  }
}, es = {
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
    let s = this.setSubmenu(e), l = s.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.list._list = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null, l = null;
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
      const l = e.nodeName;
      return t.setAttribute("data-focus", l), s.addClass(t, "active"), /UL/i.test(l) ? s.changeElement(i, this.context.list.icons.bullets) : s.changeElement(i, this.context.list.icons.number), !0;
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
      for (let s = 0, l = t.length; s < l; s++)
        i === t[s].getAttribute("data-command") ? this.util.addClass(t[s], "active") : this.util.removeClass(t[s], "active");
      e.currentList = i;
    }
  },
  editList: function(e, t, i) {
    let s = this.getRange(), l = t || this.getSelectedElementsAndComponents(!1);
    if (l.length === 0 && (t || (s = this.getRange_addLine(s, null), l = this.getSelectedElementsAndComponents(!1), l.length === 0)))
      return;
    const r = this.util;
    r.sortByDepth(l, !0);
    let c = l[0], f = l[l.length - 1], n = (r.isListCell(c) || r.isComponent(c)) && !c.previousElementSibling ? c.parentNode.previousElementSibling : c.previousElementSibling, b = (r.isListCell(f) || r.isComponent(f)) && !f.nextElementSibling ? f.parentNode.nextElementSibling : f.nextElementSibling;
    const u = s.collapsed, g = {
      sc: s.startContainer,
      so: s.startContainer === s.endContainer && r.onlyZeroWidthSpace(s.startContainer) && s.startOffset === 0 && s.endOffset === 1 ? s.endOffset : s.startOffset,
      ec: s.endContainer,
      eo: s.endOffset
    };
    let C = null, S = !0;
    for (let E = 0, A = l.length; E < A; E++)
      if (!r.isList(r.getRangeFormatElement(l[E], (function(o) {
        return this.getRangeFormatElement(o) && o !== l[E];
      }).bind(r)))) {
        S = !1;
        break;
      }
    if (S && (!n || c.tagName !== n.tagName || e !== n.tagName.toUpperCase()) && (!b || f.tagName !== b.tagName || e !== b.tagName.toUpperCase())) {
      if (i) {
        for (let h = 0, v = l.length; h < v; h++)
          for (let m = h - 1; m >= 0; m--)
            if (l[m].contains(l[h])) {
              l.splice(h, 1), h--, v--;
              break;
            }
      }
      const E = r.getRangeFormatElement(c), A = E && E.tagName === e;
      let o, a;
      const d = (function(h) {
        return !this.isComponent(h);
      }).bind(r);
      A || (a = r.createElement(e));
      for (let h = 0, v = l.length, m, p; h < v; h++)
        p = r.getRangeFormatElement(l[h], d), !(!p || !r.isList(p)) && (m ? m !== p ? (i && r.isListCell(p.parentNode) ? this.plugins.list._detachNested.call(this, o.f) : C = this.detachRangeFormatElement(o.f[0].parentNode, o.f, a, !1, !0), p = l[h].parentNode, A || (a = r.createElement(e)), m = p, o = { r: m, f: [r.getParentElement(l[h], "LI")] }) : o.f.push(r.getParentElement(l[h], "LI")) : (m = p, o = { r: m, f: [r.getParentElement(l[h], "LI")] }), h === v - 1 && (i && r.isListCell(p.parentNode) ? this.plugins.list._detachNested.call(this, o.f) : C = this.detachRangeFormatElement(o.f[0].parentNode, o.f, a, !1, !0)));
    } else {
      const E = n && n.parentNode, A = b && b.parentNode;
      n = E && !r.isWysiwygDiv(E) && E.nodeName === e ? E : n, b = A && !r.isWysiwygDiv(A) && A.nodeName === e ? A : b;
      const o = n && n.tagName === e, a = b && b.tagName === e;
      let d = o ? n : r.createElement(e), h = null, v = null, m = null;
      const p = (function(_) {
        return !this.isComponent(_) && !this.isList(_);
      }).bind(r);
      for (let _ = 0, w = l.length, y, x, M, L, T, z, U, P, V; _ < w; _++) {
        if (x = l[_], x.childNodes.length === 0 && !r._isIgnoreNodeChange(x)) {
          r.removeItem(x);
          continue;
        }
        if (L = l[_ + 1], T = x.parentNode, z = L ? L.parentNode : null, M = r.isListCell(x), V = r.isRangeFormatElement(T) ? T : null, U = M && !r.isWysiwygDiv(T) ? T.parentNode : T, P = M && !r.isWysiwygDiv(T) ? !L || r.isListCell(U) ? T : T.nextSibling : x.nextSibling, y = r.createElement("LI"), r.copyFormatAttributes(y, x), _ === 0 && g.sc === x && (g.sc = y), _ === w - 1 && g.ec === x && (g.ec = y), r.isComponent(x)) {
          const D = /^HR$/i.test(x.nodeName);
          D || (y.innerHTML = "<br>"), y.innerHTML += x.outerHTML, D && (y.innerHTML += "<br>");
        } else {
          const D = x.childNodes;
          for (; D[0]; )
            y.appendChild(D[0]);
        }
        d.appendChild(y), (!L || U !== z || r.isRangeFormatElement(P)) && (h || (h = d), (!o || !L || U !== z) && !(L && r.isList(z) && z === T) && d.parentNode !== U && U.insertBefore(d, P)), r.removeItem(x), o && v === null && (v = d.children.length - 1), L && (r.getRangeFormatElement(z, p) !== r.getRangeFormatElement(T, p) || r.isList(z) && r.isList(T) && r.getElementDepth(z) !== r.getElementDepth(T)) && (d = r.createElement(e)), V && V.children.length === 0 && r.removeItem(V);
      }
      v && (h = h.children[v]), a && (m = d.children.length - 1, d.innerHTML += b.innerHTML, d.children[m], r.removeItem(b));
    }
    return this.effectNode = null, u ? C : g;
  },
  _detachNested: function(e) {
    const t = e[0], i = e[e.length - 1], s = i.nextElementSibling, l = t.parentNode, r = l.parentNode.nextElementSibling, c = l.parentNode.parentNode;
    for (let n = 0, b = e.length; n < b; n++)
      c.insertBefore(e[n], r);
    if (s && l.children.length > 0) {
      const n = l.cloneNode(!1), b = l.childNodes, u = this.util.getPositionIndex(s);
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
    let s = t[0].parentNode, l = t[i - 1], r = null;
    if (e) {
      if (s !== l.parentNode && this.util.isList(l.parentNode.parentNode) && l.nextElementSibling)
        for (l = l.nextElementSibling; l; )
          t.push(l), l = l.nextElementSibling;
      r = this.plugins.list.editList.call(this, s.nodeName.toUpperCase(), t, !0);
    } else {
      let c = this.util.createElement(s.nodeName), f = t[0].previousElementSibling, n = l.nextElementSibling;
      const b = { s: null, e: null, sl: s, el: s };
      for (let C = 0, S = i, E; C < S; C++)
        E = t[C], E.parentNode !== s && (this.plugins.list._insiedList.call(this, s, c, f, n, b), s = E.parentNode, c = this.util.createElement(s.nodeName)), f = E.previousElementSibling, n = E.nextElementSibling, c.appendChild(E);
      this.plugins.list._insiedList.call(this, s, c, f, n, b);
      const u = this.util.getNodeFromPath(b.s, b.sl), g = this.util.getNodeFromPath(b.e, b.el);
      r = {
        sc: u,
        so: 0,
        ec: g,
        eo: g.textContent.length
      };
    }
    return r;
  },
  _insiedList: function(e, t, i, s, l) {
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
      const f = s.nextElementSibling;
      s.parentNode.removeChild(s), s = f;
    }
    if (!r) {
      this.util.isListCell(i) && (e = i, s = null), e.insertBefore(t, s), l.s || (l.s = this.util.getNodePath(t.firstElementChild.firstChild, e, null), l.sl = e);
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
    const s = this.plugins.list.editList.call(this, i, null, !1);
    s && this.setRange(s.sc, s.so, s.ec, s.eo), this.submenuOff(), this.history.push(!1);
  }
}, ts = {
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
    }, l = this.setSubmenu(e), r = l.querySelector(".se-controller-table-picker");
    s.tableHighlight = l.querySelector(".se-table-size-highlighted"), s.tableUnHighlight = l.querySelector(".se-table-size-unhighlighted"), s.tableDisplay = l.querySelector(".se-table-size-display"), e.options.rtl && (s.tableHighlight.style.left = 10 * 18 - 13 + "px");
    let c = this.setController_table(e);
    s.tableController = c, s.resizeButton = c.querySelector("._se_table_resize"), s.resizeText = c.querySelector("._se_table_resize > span > span"), s.columnFixedButton = c.querySelector("._se_table_fixed_column"), s.headerButton = c.querySelector("._se_table_header");
    let f = this.setController_tableEditor(e, s.cellControllerTop);
    s.resizeDiv = f, s.splitMenu = f.querySelector(".se-btn-group-sub"), s.mergeButton = f.querySelector("._se_table_merge_button"), s.splitButton = f.querySelector("._se_table_split_button"), s.insertRowAboveButton = f.querySelector("._se_table_insert_row_a"), s.insertRowBelowButton = f.querySelector("._se_table_insert_row_b"), r.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, s)), r.addEventListener("click", this.appendTable.bind(e)), f.addEventListener("click", this.onClick_tableController.bind(e)), c.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, l), i.element.relative.appendChild(f), i.element.relative.appendChild(c), l = null, r = null, f = null, c = null, s = null;
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
    const i = e.lang, s = e.icons, l = e.util.createElement("DIV");
    return l.className = "se-controller se-controller-table-cell", l.innerHTML = (t ? "" : '<div class="se-arrow se-arrow-up"></div>') + '<div class="se-btn-group"><button type="button" data-command="insert" data-value="row" data-option="up" class="se-btn se-tooltip _se_table_insert_row_a">' + s.insert_row_above + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowAbove + '</span></span></button><button type="button" data-command="insert" data-value="row" data-option="down" class="se-btn se-tooltip _se_table_insert_row_b">' + s.insert_row_below + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowBelow + '</span></span></button><button type="button" data-command="delete" data-value="row" class="se-btn se-tooltip">' + s.delete_row + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteRow + '</span></span></button><button type="button" data-command="merge" class="_se_table_merge_button se-btn se-tooltip" disabled>' + s.merge_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.mergeCells + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="insert" data-value="cell" data-option="left" class="se-btn se-tooltip">' + s.insert_column_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnBefore + '</span></span></button><button type="button" data-command="insert" data-value="cell" data-option="right" class="se-btn se-tooltip">' + s.insert_column_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnAfter + '</span></span></button><button type="button" data-command="delete" data-value="cell" class="se-btn se-tooltip">' + s.delete_column + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteColumn + '</span></span></button><button type="button" data-command="onsplit" class="_se_table_split_button se-btn se-tooltip">' + s.split_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.splitCells + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-table-split"><div class="se-list-inner"><ul class="se-list-basic"><li class="se-btn-list" data-command="split" data-value="vertical" style="line-height:32px;" title="' + i.controller.VerticalSplit + '" aria-label="' + i.controller.VerticalSplit + '">' + i.controller.VerticalSplit + '</li><li class="se-btn-list" data-command="split" data-value="horizontal" style="line-height:32px;" title="' + i.controller.HorizontalSplit + '" aria-label="' + i.controller.HorizontalSplit + '">' + i.controller.HorizontalSplit + "</li></ul></div></div></div>", l;
  },
  appendTable: function() {
    const e = this.util.createElement("TABLE"), t = this.plugins.table.createCells, i = this.context.table._tableXY[0];
    let s = this.context.table._tableXY[1], l = "<tbody>";
    for (; s > 0; )
      l += "<tr>" + t.call(this, "td", i) + "</tr>", --s;
    if (l += "</tbody>", e.innerHTML = l, this.insertComponent(e, !1, !0, !1)) {
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
      for (let s = 0, l = i.length; s < l; s++)
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
      const l = i._trElements = s.rows, r = e.cellIndex;
      let c = 0;
      for (let u = 0, g = l[0].cells, C = l[0].cells.length; u < C; u++)
        c += g[u].colSpan;
      const f = i._rowIndex = i._trElement.rowIndex;
      i._rowCnt = l.length, i._physical_cellCnt = i._trElement.cells.length, i._logical_cellCnt = c, i._physical_cellIndex = r, i._current_colSpan = i._tdElement.colSpan - 1, i._current_rowSpan - i._trElement.cells[r].rowSpan - 1;
      let n = [], b = [];
      for (let u = 0, g, C; u <= f; u++) {
        g = l[u].cells, C = 0;
        for (let S = 0, E = g.length, A, o, a, d; S < E; S++) {
          if (A = g[S], o = A.colSpan - 1, a = A.rowSpan - 1, d = S + C, b.length > 0)
            for (let h = 0, v; h < b.length; h++)
              v = b[h], !(v.row > u) && (d >= v.index ? (C += v.cs, d += v.cs, v.rs -= 1, v.row = u + 1, v.rs < 1 && (b.splice(h, 1), h--)) : S === E - 1 && (v.rs -= 1, v.row = u + 1, v.rs < 1 && (b.splice(h, 1), h--)));
          if (u === f && S === r) {
            i._logical_cellIndex = d;
            break;
          }
          a > 0 && n.push({
            index: d,
            cs: o + 1,
            rs: a,
            row: -1
          }), C += o;
        }
        b = b.concat(n).sort(function(S, E) {
          return S.index - E.index;
        }), n = [];
      }
      n = null, b = null;
    }
  },
  editTable: function(e, t) {
    const i = this.plugins.table, s = this.context.table, l = s._element, r = e === "row";
    if (r) {
      const c = s._trElement.parentNode;
      if (/^THEAD$/i.test(c.nodeName)) {
        if (t === "up")
          return;
        if (!c.nextElementSibling || !/^TBODY$/i.test(c.nextElementSibling.nodeName)) {
          l.innerHTML += "<tbody><tr>" + i.createCells.call(this, "td", s._logical_cellCnt, !1) + "</tr></tbody>";
          return;
        }
      }
    }
    if (i._ref) {
      const c = s._tdElement, f = i._selectedCells;
      if (r)
        if (t)
          i.setCellInfo.call(this, t === "up" ? f[0] : f[f.length - 1], !0), i.editRow.call(this, t, c);
        else {
          let n = f[0].parentNode;
          const b = [f[0]];
          for (let u = 1, g = f.length, C; u < g; u++)
            C = f[u], n !== C.parentNode && (b.push(C), n = C.parentNode);
          for (let u = 0, g = b.length; u < g; u++)
            i.setCellInfo.call(this, b[u], !0), i.editRow.call(this, t);
        }
      else {
        const n = f[0].parentNode;
        if (t) {
          let b = null;
          for (let u = 0, g = f.length - 1; u < g; u++)
            if (n !== f[u + 1].parentNode) {
              b = f[u];
              break;
            }
          i.setCellInfo.call(this, t === "left" ? f[0] : b || f[0], !0), i.editCell.call(this, t, c);
        } else {
          const b = [f[0]];
          for (let u = 1, g = f.length, C; u < g && (C = f[u], n === C.parentNode); u++)
            b.push(C);
          for (let u = 0, g = b.length; u < g; u++)
            i.setCellInfo.call(this, b[u], !0), i.editCell.call(this, t);
        }
      }
      t || i.init.call(this);
    } else
      i[r ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const c = l.children;
      for (let f = 0; f < c.length; f++)
        c[f].children.length === 0 && (this.util.removeItem(c[f]), f--);
      l.children.length === 0 && this.util.removeItem(l);
    }
  },
  editRow: function(e, t) {
    const i = this.context.table, s = !e, l = e === "up", r = i._rowIndex, c = s || l ? r : r + i._current_rowSpan + 1, f = s ? -1 : 1, n = i._trElements;
    let b = i._logical_cellCnt;
    for (let u = 0, g = r + (s ? -1 : 0), C; u <= g; u++) {
      if (C = n[u].cells, C.length === 0) return;
      for (let S = 0, E = C.length, A, o; S < E; S++)
        A = C[S].rowSpan, o = C[S].colSpan, !(A < 2 && o < 2) && A + u > c && c > u && (C[S].rowSpan = A + f, b -= o);
    }
    if (s) {
      const u = n[r + 1];
      if (u) {
        const g = [];
        let C = n[r].cells, S = 0;
        for (let E = 0, A = C.length, o, a; E < A; E++)
          o = C[E], a = E + S, S += o.colSpan - 1, o.rowSpan > 1 && (o.rowSpan -= 1, g.push({ cell: o.cloneNode(!1), index: a }));
        if (g.length > 0) {
          let E = g.shift();
          C = u.cells, S = 0;
          for (let A = 0, o = C.length, a, d; A < o && (a = C[A], d = A + S, S += a.colSpan - 1, !(d >= E.index && (A--, S--, S += E.cell.colSpan - 1, u.insertBefore(E.cell, a), E = g.shift(), !E))); A++)
            ;
          if (E) {
            u.appendChild(E.cell);
            for (let A = 0, o = g.length; A < o; A++)
              u.appendChild(g[A].cell);
          }
        }
      }
      i._element.deleteRow(c);
    } else {
      const u = i._element.insertRow(c);
      u.innerHTML = this.plugins.table.createCells.call(this, "td", b, !1);
    }
    s ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  editCell: function(e, t) {
    const i = this.context.table, s = this.util, l = !e, r = e === "left", c = i._current_colSpan, f = l || r ? i._logical_cellIndex : i._logical_cellIndex + c + 1, n = i._trElements;
    let b = [], u = [], g = 0;
    const C = [], S = [];
    for (let E = 0, A = i._rowCnt, o, a, d, h, v, m; E < A; E++) {
      o = n[E], a = f, v = !1, d = o.cells, m = 0;
      for (let p = 0, _, w = d.length, y, x, M; p < w && (_ = d[p], !!_); p++)
        if (y = _.rowSpan - 1, x = _.colSpan - 1, l) {
          if (M = p + m, u.length > 0) {
            const L = !d[p + 1];
            for (let T = 0, z; T < u.length; T++)
              z = u[T], !(z.row > E) && (M >= z.index ? (m += z.cs, M = p + m, z.rs -= 1, z.row = E + 1, z.rs < 1 && (u.splice(T, 1), T--)) : L && (z.rs -= 1, z.row = E + 1, z.rs < 1 && (u.splice(T, 1), T--)));
          }
          y > 0 && b.push({
            rs: y,
            cs: x + 1,
            index: M,
            row: -1
          }), M >= a && M + x <= a + c ? C.push(_) : M <= a + c && M + x >= a ? _.colSpan -= s.getOverlapRangeAtIndex(f, f + c, M, M + x) : y > 0 && (M < a || M + x > a + c) && S.push({
            cell: _,
            i: E,
            rs: E + y
          }), m += x;
        } else {
          if (p >= a) break;
          if (x > 0) {
            if (g < 1 && x + p >= a) {
              _.colSpan += 1, a = null, g = y + 1;
              break;
            }
            a -= x;
          }
          if (!v) {
            for (let L = 0, T; L < u.length; L++)
              T = u[L], a -= T.cs, T.rs -= 1, T.rs < 1 && (u.splice(L, 1), L--);
            v = !0;
          }
        }
      if (u = u.concat(b).sort(function(p, _) {
        return p.index - _.index;
      }), b = [], !l) {
        if (g > 0) {
          g -= 1;
          continue;
        }
        a !== null && d.length > 0 && (h = this.plugins.table.createCells.call(this, d[0].nodeName, 0, !0), h = o.insertBefore(h, d[a]));
      }
    }
    if (l) {
      let E, A;
      for (let o = 0, a = C.length, d; o < a; o++)
        d = C[o].parentNode, s.removeItem(C[o]), d.cells.length === 0 && (E || (E = s.getArrayIndex(n, d)), A = s.getArrayIndex(n, d), s.removeItem(d));
      for (let o = 0, a = S.length, d; o < a; o++)
        d = S[o], d.cell.rowSpan = s.getOverlapRangeAtIndex(E, A, d.i, d.rs);
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
    const t = this.util, i = e === "vertical", s = this.context.table, l = s._tdElement, r = s._trElements, c = s._trElement, f = s._logical_cellIndex, n = s._rowIndex, b = this.plugins.table.createCells.call(this, l.nodeName, 0, !0);
    if (i) {
      const u = l.colSpan;
      if (b.rowSpan = l.rowSpan, u > 1)
        b.colSpan = this._w.Math.floor(u / 2), l.colSpan = u - b.colSpan, c.insertBefore(b, l.nextElementSibling);
      else {
        let g = [], C = [];
        for (let S = 0, E = s._rowCnt, A, o; S < E; S++) {
          A = r[S].cells, o = 0;
          for (let a = 0, d = A.length, h, v, m, p; a < d; a++) {
            if (h = A[a], v = h.colSpan - 1, m = h.rowSpan - 1, p = a + o, C.length > 0)
              for (let _ = 0, w; _ < C.length; _++)
                w = C[_], !(w.row > S) && (p >= w.index ? (o += w.cs, p += w.cs, w.rs -= 1, w.row = S + 1, w.rs < 1 && (C.splice(_, 1), _--)) : a === d - 1 && (w.rs -= 1, w.row = S + 1, w.rs < 1 && (C.splice(_, 1), _--)));
            if (p <= f && m > 0 && g.push({
              index: p,
              cs: v + 1,
              rs: m,
              row: -1
            }), h !== l && p <= f && p + v >= f + u - 1) {
              h.colSpan += 1;
              break;
            }
            if (p > f) break;
            o += v;
          }
          C = C.concat(g).sort(function(a, d) {
            return a.index - d.index;
          }), g = [];
        }
        c.insertBefore(b, l.nextElementSibling);
      }
    } else {
      const u = l.rowSpan;
      if (b.colSpan = l.colSpan, u > 1) {
        b.rowSpan = this._w.Math.floor(u / 2);
        const g = u - b.rowSpan, C = [], S = t.getArrayIndex(r, c) + g;
        for (let a = 0, d, h; a < S; a++) {
          d = r[a].cells, h = 0;
          for (let v = 0, m = d.length, p, _, w; v < m && (w = v + h, !(w >= f)); v++)
            p = d[v], _ = p.rowSpan - 1, _ > 0 && _ + a >= S && w < f && C.push({
              index: w,
              cs: p.colSpan
            }), h += p.colSpan - 1;
        }
        const E = r[S], A = E.cells;
        let o = C.shift();
        for (let a = 0, d = A.length, h = 0, v, m, p, _; a < d; a++) {
          if (p = a + h, v = A[a], m = v.colSpan - 1, _ = p + m + 1, o && _ >= o.index && (h += o.cs, _ += o.cs, o = C.shift()), _ >= f || a === d - 1) {
            E.insertBefore(b, v.nextElementSibling);
            break;
          }
          h += m;
        }
        l.rowSpan = g;
      } else {
        b.rowSpan = l.rowSpan;
        const g = t.createElement("TR");
        g.appendChild(b);
        for (let E = 0, A; E < n; E++) {
          if (A = r[E].cells, A.length === 0) return;
          for (let o = 0, a = A.length; o < a; o++)
            E + A[o].rowSpan - 1 >= n && (A[o].rowSpan += 1);
        }
        const C = s._physical_cellIndex, S = c.cells;
        for (let E = 0, A = S.length; E < A; E++)
          E !== C && (S[E].rowSpan += 1);
        c.parentNode.insertBefore(g, c.nextElementSibling);
      }
    }
    this.focusEdge(l), this.plugins.table.setPositionControllerDiv.call(this, l, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, i = this.util, s = e._ref, l = e._selectedCells, r = l[0];
    let c = null, f = null, n = s.ce - s.cs + 1, b = s.re - s.rs + 1, u = "", g = null;
    for (let C = 1, S = l.length, E, A; C < S; C++) {
      E = l[C], g !== E.parentNode && (g = E.parentNode), A = E.children;
      for (let o = 0, a = A.length; o < a; o++)
        i.isFormatElement(A[o]) && i.onlyZeroWidthSpace(A[o].textContent) && i.removeItem(A[o]);
      u += E.innerHTML, i.removeItem(E), g.cells.length === 0 && (c ? f = g : c = g, b -= 1);
    }
    if (c) {
      const C = t._trElements, S = i.getArrayIndex(C, c), E = i.getArrayIndex(C, f || c), A = [];
      for (let o = 0, a; o <= E; o++) {
        if (a = C[o].cells, a.length === 0) {
          A.push(C[o]);
          continue;
        }
        for (let d = 0, h = a.length, v, m; d < h; d++)
          v = a[d], m = v.rowSpan - 1, m > 0 && o + m >= S && (v.rowSpan -= i.getOverlapRangeAtIndex(S, E, o, o + m));
      }
      for (let o = 0, a = A.length; o < a; o++)
        i.removeItem(A[o]);
    }
    r.innerHTML += u, r.colSpan = n, r.rowSpan = b, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, r), i.addClass(r, "se-table-selected-cell"), this.focusEdge(r);
  },
  toggleHeader: function() {
    const e = this.util, t = this.context.table.headerButton, i = e.hasClass(t, "active"), s = this.context.table._element;
    if (i)
      e.removeItem(s.querySelector("thead"));
    else {
      const l = e.createElement("THEAD");
      l.innerHTML = "<tr>" + this.plugins.table.createCells.call(this, "th", this.context.table._logical_cellCnt, !1) + "</tr>", s.insertBefore(l, s.firstElementChild);
    }
    e.toggleClass(t, "active"), /TH/i.test(this.context.table._tdElement.nodeName) ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, this.context.table._tdElement, !1);
  },
  setTableStyle: function(e) {
    const t = this.context.table, i = t._element;
    let s, l, r, c;
    e.indexOf("width") > -1 && (s = t.resizeButton.firstElementChild, l = t.resizeText, t._maxWidth ? (r = t.icons.reduction, c = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(i, "se-table-size-auto"), this.util.addClass(i, "se-table-size-100")) : (r = t.icons.expansion, c = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(i, "se-table-size-100"), this.util.addClass(i, "se-table-size-auto")), this.util.changeElement(s, r), this.util.changeTxt(l, c)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(i, "se-table-layout-auto"), this.util.addClass(i, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(i, "se-table-layout-fixed"), this.util.addClass(i, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")));
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
    const i = this.plugins.table, s = i._selectedTable.rows, l = this.util, r = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let u = 0, g = r.length; u < g; u++)
      l.removeClass(r[u], "se-table-selected-cell");
    if (e === t && (l.addClass(e, "se-table-selected-cell"), !i._shift))
      return;
    let c = !0, f = [], n = [];
    const b = i._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let u = 0, g = s.length, C, S; u < g; u++) {
      C = s[u].cells, S = 0;
      for (let E = 0, A = C.length, o, a, d, h; E < A; E++) {
        if (o = C[E], d = o.colSpan - 1, h = o.rowSpan - 1, a = E + S, f.length > 0)
          for (let v = 0, m; v < f.length; v++)
            m = f[v], !(m.row > u) && (a >= m.index ? (S += m.cs, a += m.cs, m.rs -= 1, m.row = u + 1, m.rs < 1 && (f.splice(v, 1), v--)) : E === A - 1 && (m.rs -= 1, m.row = u + 1, m.rs < 1 && (f.splice(v, 1), v--)));
        if (c) {
          if ((o === e || o === t) && (b.cs = b.cs !== null && b.cs < a ? b.cs : a, b.ce = b.ce !== null && b.ce > a + d ? b.ce : a + d, b.rs = b.rs !== null && b.rs < u ? b.rs : u, b.re = b.re !== null && b.re > u + h ? b.re : u + h, b._i += 1), b._i === 2) {
            c = !1, f = [], n = [], u = -1;
            break;
          }
        } else if (l.getOverlapRangeAtIndex(b.cs, b.ce, a, a + d) && l.getOverlapRangeAtIndex(b.rs, b.re, u, u + h)) {
          const v = b.cs < a ? b.cs : a, m = b.ce > a + d ? b.ce : a + d, p = b.rs < u ? b.rs : u, _ = b.re > u + h ? b.re : u + h;
          if (b.cs !== v || b.ce !== m || b.rs !== p || b.re !== _) {
            b.cs = v, b.ce = m, b.rs = p, b.re = _, u = -1, f = [], n = [];
            break;
          }
          l.addClass(o, "se-table-selected-cell");
        }
        h > 0 && n.push({
          index: a,
          cs: d + 1,
          rs: h,
          row: -1
        }), S += o.colSpan - 1;
      }
      f = f.concat(n).sort(function(E, A) {
        return E.index - A.index;
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
    const s = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let l = 0, r = s.length; l < r; l++)
      this.util.removeClass(s[l], "se-table-selected-cell");
    this.util.addClass(e, "se-table-selected-cell"), i._bindOnSelect = i._onCellMultiSelect.bind(this), i._bindOffSelect = i._offCellMultiSelect.bind(this), t ? (i._bindOffShift = (function() {
      this.controllersOn(this.context.table.resizeDiv, this.context.table.tableController, this.plugins.table.init.bind(this), e, "table"), i._ref || this.controllersOff();
    }).bind(this), this._wd.addEventListener("keyup", i._bindOffShift, !1), this._wd.addEventListener("mousedown", i._bindOnSelect, !1)) : this._wd.addEventListener("mousemove", i._bindOnSelect, !1), this._wd.addEventListener("mouseup", i._bindOffSelect, !1), i._initBind = i.init.bind(this), this._wd.addEventListener("touchmove", i._initBind, !1);
  },
  onClick_tableController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") ? e.target : e.target.parentNode;
    if (t.getAttribute("disabled")) return;
    const i = t.getAttribute("data-command"), s = t.getAttribute("data-value"), l = t.getAttribute("data-option"), r = this.plugins.table;
    if (typeof r._closeSplitMenu == "function" && (r._closeSplitMenu(), i === "onsplit") || !i) return;
    e.preventDefault();
    const c = this.context.table;
    switch (i) {
      case "insert":
      case "delete":
        r.editTable.call(this, s, l);
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
        const f = c._element.parentNode;
        this.util.removeItem(c._element), this.controllersOff(), f !== this.context.element.wysiwyg && this.util.removeItemAllParents(f, function(n) {
          return n.childNodes.length === 0;
        }, null), this.focus();
    }
    this.history.push(!1);
  }
}, is = {
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
    const l = ["p", "div", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], r = !t.formats || t.formats.length === 0 ? l : t.formats;
    let c = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let f = 0, n = r.length, b, u, g, C, S, E, A; f < n; f++)
      b = r[f], typeof b == "string" && l.indexOf(b) > -1 ? (u = b.toLowerCase(), g = u === "blockquote" ? "range" : u === "pre" ? "free" : "replace", S = /^h/.test(u) ? u.match(/\d+/)[0] : "", C = i["tag_" + (S ? "h" : u)] + S, A = "", E = "") : (u = b.tag.toLowerCase(), g = b.command, C = b.name || u, A = b.class, E = A ? ' class="' + A + '"' : ""), c += '<li><button type="button" class="se-btn-list" data-command="' + g + '" data-value="' + u + '" data-class="' + A + '" title="' + C + '" aria-label="' + C + '"><' + u + E + ">" + C + "</" + u + "></button></li>";
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
      const l = this.context.formatBlock._formatList, r = e.nodeName.toLowerCase(), c = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let f = 0, n = l.length, b; f < n; f++)
        if (b = l[f], r === b.getAttribute("data-value") && c === b.getAttribute("data-class")) {
          t = b.title;
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
      for (let l = 0, r = t.length, c; l < r; l++)
        c = t[l], s === c.getAttribute("data-value") + c.getAttribute("data-class") ? this.util.addClass(c, "active") : this.util.removeClass(c, "active");
      e.currentFormat = s;
    }
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null, s = null, l = null, r = "";
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), s = t.getAttribute("data-value"), r = t.getAttribute("data-class"), i) {
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
        let g = f[0], C = f[f.length - 1];
        const S = u.getNodePath(c.startContainer, g, null, null), E = u.getNodePath(c.endContainer, C, null, null), A = this.detachList(f, !1);
        A.sc && (g = A.sc), A.ec && (C = A.ec), this.setRange(u.getNodeFromPath(S, g), n, u.getNodeFromPath(E, C), b);
        const o = this.getSelectedElementsAndComponents(!1);
        if (i === "free") {
          const a = o.length - 1;
          let d = o[a].parentNode, h = l.cloneNode(!1);
          const v = h;
          for (let m = a, p, _, w, y, x, M, L = !0; m >= 0; m--)
            if (p = o[m], p !== (o[m + 1] ? o[m + 1].parentNode : null)) {
              if (M = u.isComponent(p), _ = M ? "" : p.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), w = u.getParentElement(p, function(T) {
                return T.parentNode === d;
              }), (d !== p.parentNode || M) && (u.isFormatElement(d) ? (d.parentNode.insertBefore(h, d.nextSibling), d = d.parentNode) : (d.insertBefore(h, w ? w.nextSibling : null), d = p.parentNode), y = h.nextSibling, y && h.nodeName === y.nodeName && u.isSameAttributes(h, y) && (h.innerHTML += "<BR>" + y.innerHTML, u.removeItem(y)), h = l.cloneNode(!1), L = !0), x = h.innerHTML, h.innerHTML = (L || !_ || !x || /<br>$/i.test(_) ? _ : _ + "<BR>") + x, m === 0) {
                d.insertBefore(h, p), y = p.nextSibling, y && h.nodeName === y.nodeName && u.isSameAttributes(h, y) && (h.innerHTML += "<BR>" + y.innerHTML, u.removeItem(y));
                const T = h.previousSibling;
                T && h.nodeName === T.nodeName && u.isSameAttributes(h, T) && (T.innerHTML += "<BR>" + h.innerHTML, u.removeItem(h));
              }
              M || u.removeItem(p), _ && (L = !1);
            }
          this.setRange(v, 0, v, 0);
        } else {
          for (let a = 0, d = o.length, h, v; a < d; a++)
            h = o[a], (h.nodeName.toLowerCase() !== s.toLowerCase() || (h.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== r) && !u.isComponent(h) && (v = l.cloneNode(!1), u.copyFormatAttributes(v, h), v.innerHTML = h.innerHTML, h.parentNode.replaceChild(v, h)), a === 0 && (g = v || h), a === d - 1 && (C = v || h), v = null;
          this.setRange(u.getNodeFromPath(S, g), n, u.getNodeFromPath(E, C), b);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, ls = {
  name: "lineHeight",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.lineHeight = {
      _sizeList: null,
      currentSize: -1
    };
    let s = this.setSubmenu(e), l = s.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.lineHeight._sizeList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, s = e.util.createElement("DIV");
    s.className = "se-submenu se-list-layer";
    const l = t.lineHeights ? t.lineHeights : [
      { text: "1", value: 1 },
      { text: "1.15", value: 1.15 },
      { text: "1.5", value: 1.5 },
      { text: "2", value: 2 }
    ];
    let r = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let c = 0, f = l.length, n; c < f; c++)
      n = l[c], r += '<li><button type="button" class="se-btn-list" data-value="' + n.value + '" title="' + n.text + '" aria-label="' + n.text + '">' + n.text + "</button></li>";
    return r += "</ul></div>", s.innerHTML = r, s;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.lineHeight, t = e._sizeList, i = this.util.getFormatElement(this.getSelectionNode()), s = i ? i.style.lineHeight + "" : "";
    if (s !== e.currentSize) {
      for (let l = 0, r = t.length; l < r; l++)
        s === t[l].getAttribute("data-value") ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
      e.currentSize = s;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName)) return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value") || "", i = this.getSelectedElements();
    for (let s = 0, l = i.length; s < l; s++)
      i[s].style.lineHeight = t;
    this.submenuOff(), this.history.push(!1);
  }
}, ns = {
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
    for (let l = 0, r = t.length, c; l < r; l++)
      c = t[l], s += '<li><button type="button" class="se-btn-list" data-value="' + l + '" title="' + c.name + '" aria-label="' + c.name + '">' + c.name + "</button></li>";
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
}, ss = {
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
    const s = e.lang.menu, l = {
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
    for (let f = 0, n = r.length, b, u, g, C; f < n; f++) {
      if (b = r[f], typeof b == "string") {
        const S = l[b.toLowerCase()];
        if (!S) continue;
        b = S;
      }
      u = b.name, g = b.class ? ' class="' + b.class + '"' : "", C = b._class, c += '<li><button type="button" class="se-btn-list' + (C ? " " + C : "") + '" data-value="' + b.class + '" title="' + u + '" aria-label="' + u + '"><div' + g + ">" + u + "</div></button></li>";
    }
    return c += "</ul></div>", i.innerHTML = c, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const t = this.context.paragraphStyle._classList, i = this.util.getFormatElement(this.getSelectionNode());
    for (let s = 0, l = t.length; s < l; s++)
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
    const l = this.util.hasClass(t, "active") ? this.util.removeClass.bind(this.util) : this.util.addClass.bind(this.util);
    for (let r = 0, c = s.length; r < c; r++)
      l(s[r], i);
    this.submenuOff(), this.history.push(!1);
  }
}, os = {
  name: "textStyle",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.textStyle = {
      _styleList: null
    };
    let s = this.setSubmenu(e), l = s.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.textStyle._styleList = s.querySelectorAll("li button"), e.initMenuTarget(this.name, t, s), s = null, l = null;
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
    }, l = t.textStyles ? t.textStyles : e._w.Object.keys(s);
    let r = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let c = 0, f = l.length, n, b, u, g, C, S, E; c < f; c++) {
      if (n = l[c], g = "", S = "", C = [], typeof n == "string") {
        const A = s[n.toLowerCase()];
        if (!A) continue;
        n = A;
      }
      u = n.name, b = n.tag || "span", E = n._class, n.style && (g += ' style="' + n.style + '"', S += n.style.replace(/:[^;]+(;|$)\s*/g, ","), C.push("style")), n.class && (g += ' class="' + n.class + '"', S += "." + n.class.trim().replace(/\s+/g, ",."), C.push("class")), S = S.replace(/,$/, ""), r += '<li><button type="button" class="se-btn-list' + (E ? " " + E : "") + '" data-command="' + b + '" data-value="' + S + '" title="' + u + '" aria-label="' + u + '"><' + b + g + ">" + u + "</" + b + "></button></li>";
    }
    return r += "</ul></div>", i.innerHTML = r, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.util, i = this.context.textStyle._styleList, s = this.getSelectionNode();
    for (let l = 0, r = i.length, c, f, n; l < r; l++) {
      c = i[l], f = c.getAttribute("data-value").split(",");
      for (let b = 0, u, g; b < f.length; b++) {
        for (u = s, n = !1; u && !e.isFormatElement(u) && !e.isComponent(u); ) {
          if (u.nodeName.toLowerCase() === c.getAttribute("data-command").toLowerCase() && (g = f[b], /^\./.test(g) ? e.hasClass(u, g.replace(/^\./, "")) : u.style[g])) {
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
    let t = e.target, i = null, s = null;
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), i) {
        s = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (!i) return;
    const l = s.style.cssText.replace(/:.+(;|$)/g, ",").split(",");
    l.pop();
    const r = s.classList;
    for (let n = 0, b = r.length; n < b; n++)
      l.push("." + r[n]);
    const c = this.util.hasClass(t, "active") ? null : s.cloneNode(!1), f = c ? null : [s.nodeName];
    this.nodeChange(c, l, f, !0), this.submenuOff();
  }
};
var fl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
    const s = {
      name: "dialog",
      /**
       * @description Constructor
       * @param {Object} core Core object 
       */
      add: function(l) {
        const r = l.context;
        r.dialog = {
          kind: "",
          updateModal: !1,
          _closeSignal: !1
        };
        let c = l.util.createElement("DIV");
        c.className = "se-dialog sun-editor-common";
        let f = l.util.createElement("DIV");
        f.className = "se-dialog-back", f.style.display = "none";
        let n = l.util.createElement("DIV");
        n.className = "se-dialog-inner", n.style.display = "none", c.appendChild(f), c.appendChild(n), r.dialog.modalArea = c, r.dialog.back = f, r.dialog.modal = n, r.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(l)), r.dialog.modal.addEventListener("click", this._onClick_dialog.bind(l)), r.element.relative.appendChild(c), c = null, f = null, n = null;
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
      open: function(l, r) {
        if (this.modalForm) return !1;
        this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null), this.plugins.dialog._bindClose = (function(f) {
          /27/.test(f.keyCode) && this.plugins.dialog.close.call(this);
        }).bind(this), this._d.addEventListener("keydown", this.plugins.dialog._bindClose), this.context.dialog.updateModal = r, this.options.popupDisplay === "full" ? this.context.dialog.modalArea.style.position = "fixed" : this.context.dialog.modalArea.style.position = "absolute", this.context.dialog.kind = l, this.modalForm = this.context[l].modal;
        const c = this.context[l].focusElement;
        typeof this.plugins[l].on == "function" && this.plugins[l].on.call(this, r), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", c && c.focus();
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
      value: s
    })), s;
  });
})(fl);
var as = fl.exports;
const ht = /* @__PURE__ */ Se(as), rs = {
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
    const i = e.menus, s = i.length, l = e.index = t >= s ? 0 : t < 0 ? s - 1 : t;
    for (let r = 0; r < s; r++)
      r === l ? this.util.addClass(i[r], "active") : this.util.removeClass(i[r], "active");
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
}, hl = {
  name: "anchor",
  add: function(e) {
    e.addModule([rs]), e.context.anchor = {
      caller: {},
      forms: this.setDialogForm(e),
      host: (e._w.location.origin + e._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  /** dialog */
  setDialogForm: function(e) {
    const t = e.lang, i = e.options.linkRel, s = (e.options.linkRelDefault.default || "").split(" "), l = e.icons, r = e.util.createElement("DIV");
    let c = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (e.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + t.dialogBox.linkBox.bookmark + '" aria-label="' + t.dialogBox.linkBox.bookmark + '">' + l.bookmark + "</button>" + e.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + l.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + l.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + t.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (i.length > 0) {
      c += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let f = 0, n = i.length, b; f < n; f++)
        b = i[f], c += '<li><button type="button" class="se-btn-list' + (s.indexOf(b) > -1 ? " se-checked" : "") + '" data-command="' + b + '" title="' + b + '" aria-label="' + b + '"><span class="se-svg">' + l.checked + "</span>" + b + "</button></li>";
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
    const l = this.context.selectMenu.caller[e];
    this.options.linkRel.length > 0 && (s.relButton = t.querySelector(".se-anchor-rel-btn"), s.relList = t.querySelector(".se-list-layer"), s.relPreview = t.querySelector(".se-anchor-rel-preview"), s.relButton.addEventListener("click", i.onClick_relButton.bind(this, s)), s.relList.addEventListener("click", i.onClick_relList.bind(this, s))), s.newWindowCheck.addEventListener("change", i.onChange_newWindowCheck.bind(this, s)), s.downloadCheck.addEventListener("change", i.onChange_downloadCheck.bind(this, s)), s.anchorText.addEventListener("input", i.onChangeAnchorText.bind(this, s)), s.urlInput.addEventListener("input", i.onChangeUrlInput.bind(this, s)), s.urlInput.addEventListener("keydown", i.onKeyDownUrlInput.bind(this, l)), s.urlInput.addEventListener("focus", i.onFocusUrlInput.bind(this, s, l)), s.urlInput.addEventListener("blur", i.onBlurUrlInput.bind(this, l)), s.bookmarkButton.addEventListener("click", i.onClick_bookmarkButton.bind(this, s));
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
      this.util.addClass(i, "active"), s.style.visibility = "hidden", s.style.display = "block", this.options.rtl ? s.style.left = i.offsetLeft - s.offsetWidth - 1 + "px" : s.style.left = i.offsetLeft + i.offsetWidth + 1 + "px", s.style.top = i.offsetTop + i.offsetHeight / 2 - s.offsetHeight / 2 + "px", s.style.visibility = "", this.plugins.anchor._closeRelMenu = (function(l, r, c) {
        c && (l.relButton.contains(c.target) || l.relList.contains(c.target)) || (this.util.removeClass(r, "active"), l.relList.style.display = "none", this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu), this.plugins.anchor._closeRelMenu = null);
      }).bind(this, e, i), this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(e, t) {
    this.plugins.anchor.toggleRelList.call(this, e, !this.util.hasClass(t.target, "active"));
  },
  onClick_relList: function(e, t) {
    const i = t.target, s = i.getAttribute("data-command");
    if (!s) return;
    const l = e.currentRel, r = this.util.toggleClass(i, "se-checked"), c = l.indexOf(s);
    r ? c === -1 && l.push(s) : c > -1 && l.splice(c, 1), e.relPreview.title = e.relPreview.textContent = l.join(" ");
  },
  setRel: function(e, t) {
    const i = e.relList, s = e.currentRel = t ? t.split(" ") : [];
    if (!i) return;
    const l = i.querySelectorAll("button");
    for (let r = 0, c = l.length, f; r < c; r++)
      f = l[r].getAttribute("data-command"), s.indexOf(f) > -1 ? this.util.addClass(l[r], "se-checked") : this.util.removeClass(l[r], "se-checked");
    e.relPreview.title = e.relPreview.textContent = s.join(" ");
  },
  createHeaderList: function(e, t, i) {
    const s = this.util.getListChildren(this.context.element.wysiwyg, function(f) {
      return /h[1-6]/i.test(f.nodeName);
    });
    if (s.length === 0) return;
    const l = new this._w.RegExp("^" + i.replace(/^#/, ""), "i"), r = [];
    let c = "";
    for (let f = 0, n = s.length, b; f < n; f++)
      b = s[f], l.test(b.textContent) && (r.push(b), c += '<li class="se-select-item" data-index="' + f + '">' + b.textContent + "</li>");
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
    const i = e.preview, s = this.options.linkProtocol, l = this.options.linkNoPrefix, r = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(t) || t.indexOf(s) === 0, c = s ? this._w.RegExp("^" + this.util.escapeStringRegexp(t.substr(0, s.length))).test(s) : !1;
    t = e.linkValue = i.textContent = t ? l ? t : s && !r && !c ? s + t : r ? t : /^www\./.test(t) ? "http://" + t : this.context.anchor.host + (/^\//.test(t) ? "" : "/") + t : "", this.plugins.anchor.selfPathBookmark.call(this, t) ? (e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active")) : (e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active")), !this.plugins.anchor.selfPathBookmark.call(this, t) && e.downloadCheck.checked ? e.download.style.display = "block" : e.download.style.display = "none";
  },
  setCtx: function(e, t) {
    e && (t.linkAnchor = e, t.linkValue = e.href, t.currentRel = e.rel.split(" "));
  },
  updateAnchor: function(e, t, i, s, l) {
    !this.plugins.anchor.selfPathBookmark.call(this, t) && s.downloadCheck.checked ? e.setAttribute("download", i || t) : e.removeAttribute("download"), s.newWindowCheck.checked ? e.target = "_blank" : e.removeAttribute("target");
    const r = s.currentRel.join(" ");
    r ? e.rel = r : e.removeAttribute("rel"), e.href = t, l ? e.children.length === 0 && (e.textContent = "") : e.textContent = i;
  },
  createAnchor: function(e, t) {
    if (e.linkValue.length === 0) return null;
    const i = e.linkValue, s = e.anchorText, l = s.value.length === 0 ? i : s.value, r = e.linkAnchor || this.util.createElement("A");
    return this.plugins.anchor.updateAnchor.call(this, r, i, l, e, t), e.linkValue = e.preview.textContent = e.urlInput.value = e.anchorText.value = "", r;
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
    for (let l = 0, r = s.length, c; l < r; l++)
      c = i.indexOf(s[l]), c === -1 && i.push(s[l]);
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
}, us = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([ht, hl]);
    const t = e.context, i = t.link = {
      focusElement: null,
      // @Override dialog // This element has focus when the dialog is opened.
      _linkAnchor: null,
      anchorCtx: null
    };
    let s = this.setDialog(e);
    i.modal = s;
    let l = this.setController_LinkButton(e);
    i.linkController = l, s.querySelector("form").addEventListener("submit", this.submit.bind(e)), l.addEventListener("click", this.onClick_linkController.bind(e)), t.dialog.modal.appendChild(s), t.element.relative.appendChild(l), e.plugins.anchor.initEvent.call(e, "link", s), i.focusElement = t.anchor.caller.link.urlInput, s = null, l = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), s = e.icons;
    i.className = "se-dialog-content", i.style.display = "none";
    let l = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + s.cancel + '</button><span class="se-modal-title">' + t.dialogBox.linkBox.title + "</span></div>" + e.context.anchor.forms.innerHTML + '<div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>";
    return i.innerHTML = l, i;
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
        const i = this.util.getChildElement(this.context.link._linkAnchor, function(l) {
          return l.childNodes.length === 0 || l.nodeType === 3;
        }, !1), s = this.util.getChildElement(this.context.link._linkAnchor, function(l) {
          return l.childNodes.length === 0 || l.nodeType === 3;
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
var pl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
    const s = {
      name: "component",
      /**
       * @description Create a container for the resizing component and insert the element.
       * @param {Element} cover Cover element (FIGURE)
       * @param {String} className Class name of container (fixed: se-component)
       * @returns {Element} Created container element
       */
      set_container: function(l, r) {
        const c = this.util.createElement("DIV");
        return c.className = "se-component " + r, c.appendChild(l), c;
      },
      /**
       * @description Cover the target element with a FIGURE element.
       * @param {Element} element Target element
       */
      set_cover: function(l) {
        const r = this.util.createElement("FIGURE");
        return r.appendChild(l), r;
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
      value: s
    })), s;
  });
})(pl);
var cs = pl.exports;
const Pt = /* @__PURE__ */ Se(cs);
var ml = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
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
      add: function(l) {
        const r = l.icons, c = l.context;
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
        const r = l.util.createElement("DIV");
        return r.className = "se-controller se-resizing-container", r.style.display = "none", r.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', r;
      },
      setController_button: function(l) {
        const r = l.lang, c = l.icons, f = l.util.createElement("DIV");
        return f.className = "se-controller se-controller-resizing", f.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.resize100 + '</span></span></button><button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage"><span>75%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.resize75 + '</span></span></button><button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage"><span>50%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.resize50 + '</span></span></button><button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + c.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.autoSize + '</span></span></button><button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + c.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.rotateLeft + '</span></span></button><button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + c.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.rotateRight + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + c.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.mirrorHorizontal + '</span></span></button><button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + c.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.mirrorVertical + '</span></span></button><button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + c.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.toolbar.align + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list"><div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + c.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.basic + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + c.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.left + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + c.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.center + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + c.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.right + '</span></span></button></li></ul></div></div><button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + c.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.caption + '</span></span></button><button type="button" data-command="revert" class="se-btn se-tooltip">' + c.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.dialogBox.revertButton + '</span></span></button><button type="button" data-command="update" class="se-btn se-tooltip">' + c.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.edit + '</span></span></button><button type="button" data-command="delete" class="se-btn se-tooltip">' + c.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + r.controller.remove + "</span></span></button></div>", f;
      },
      /**
       * @description Gets the width size
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {Element} element Target element
       * @param {Element} cover Cover element (FIGURE)
       * @param {Element} container Container element (DIV.se-component)
       * @returns {String}
       */
      _module_getSizeX: function(l, r, c, f) {
        return r || (r = l._element), c || (c = l._cover), f || (f = l._container), r ? /%$/.test(r.style.width) ? (f && this.util.getNumber(f.style.width, 2) || 100) + "%" : r.style.width : "";
      },
      /**
       * @description Gets the height size
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {Element} element Target element
       * @param {Element} cover Cover element (FIGURE)
       * @param {Element} container Container element (DIV.se-component)
       * @returns {String}
       */
      _module_getSizeY: function(l, r, c, f) {
        return r || (r = l._element), c || (c = l._cover), f || (f = l._container), !f || !c ? r && r.style.height || "" : this.util.getNumber(c.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? c.style.height : !/%$/.test(r.style.height) || !/%$/.test(r.style.width) ? r.style.height : (f && this.util.getNumber(f.style.height, 2) || 100) + "%";
      },
      /**
       * @description Called at the "openModify" to put the size of the current target into the size input element.
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {Object} pluginObj Plugin object
       */
      _module_setModifyInputSize: function(l, r) {
        const c = l._onlyPercentage && this.context.resizing._rotateVertical;
        l.proportion.checked = l._proportionChecked = l._element.getAttribute("data-proportion") !== "false";
        let f = c ? "" : this.plugins.resizing._module_getSizeX.call(this, l);
        if (f === l._defaultSizeX && (f = ""), l._onlyPercentage && (f = this.util.getNumber(f, 2)), l.inputX.value = f, r.setInputSize.call(this, "x"), !l._onlyPercentage) {
          let n = c ? "" : this.plugins.resizing._module_getSizeY.call(this, l);
          n === l._defaultSizeY && (n = ""), l._onlyPercentage && (n = this.util.getNumber(n, 2)), l.inputY.value = n;
        }
        l.inputX.disabled = !!c, l.inputY.disabled = !!c, l.proportion.disabled = !!c, r.setRatio.call(this);
      },
      /**
       * @description It is called in "setInputSize" (input tag keyupEvent), 
       * checks the value entered in the input tag, 
       * calculates the ratio, and sets the calculated value in the input tag of the opposite size.
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {String} xy 'x': width, 'y': height
       */
      _module_setInputSize: function(l, r) {
        if (l._onlyPercentage) {
          r === "x" && l.inputX.value > 100 && (l.inputX.value = 100);
          return;
        }
        if (l.proportion.checked && l._ratio && /\d/.test(l.inputX.value) && /\d/.test(l.inputY.value)) {
          const c = l.inputX.value.replace(/\d+|\./g, "") || l.sizeUnit, f = l.inputY.value.replace(/\d+|\./g, "") || l.sizeUnit;
          if (c !== f) return;
          const n = c === "%" ? 2 : 0;
          r === "x" ? l.inputY.value = this.util.getNumber(l._ratioY * this.util.getNumber(l.inputX.value, n), n) + f : l.inputX.value = this.util.getNumber(l._ratioX * this.util.getNumber(l.inputY.value, n), n) + c;
        }
      },
      /**
       * @description It is called in "setRatio" (input and proportionCheck tags changeEvent), 
       * checks the value of the input tag, calculates the ratio, and resets it in the input tag.
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       */
      _module_setRatio: function(l) {
        const r = l.inputX.value, c = l.inputY.value;
        if (l.proportion.checked && /\d+/.test(r) && /\d+/.test(c)) {
          const f = r.replace(/\d+|\./g, "") || l.sizeUnit, n = c.replace(/\d+|\./g, "") || l.sizeUnit;
          if (f !== n)
            l._ratio = !1;
          else if (!l._ratio) {
            const b = this.util.getNumber(r, 0), u = this.util.getNumber(c, 0);
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
        const r = this.plugins.resizing._module_getSizeX.call(this, l), c = this.plugins.resizing._module_getSizeY.call(this, l);
        l._element.setAttribute("width", r.replace("px", "")), l._element.setAttribute("height", c.replace("px", "")), l._element.setAttribute("data-size", r + "," + c), l._videoRatio && (l._videoRatio = c);
      },
      /**
       * @description Call the resizing module
       * @param {Element} targetElement Resizing target element
       * @param {string} plugin Plugin name
       * @returns {Object} Size of resizing div {w, h, t, l}
       */
      call_controller_resize: function(l, r) {
        const c = this.context.resizing, f = this.context[r];
        c._resize_plugin = r;
        const n = c.resizeContainer, b = c.resizeDiv, u = this.util.getOffset(l, this.context.element.wysiwygFrame), g = c._rotateVertical = /^(90|270)$/.test(Math.abs(l.getAttribute("data-rotate")).toString()), C = g ? l.offsetHeight : l.offsetWidth, S = g ? l.offsetWidth : l.offsetHeight, E = u.top, A = u.left - this.context.element.wysiwygFrame.scrollLeft;
        n.style.top = E + "px", n.style.left = A + "px", n.style.width = C + "px", n.style.height = S + "px", b.style.top = "0px", b.style.left = "0px", b.style.width = C + "px", b.style.height = S + "px";
        let o = l.getAttribute("data-align") || "basic";
        o = o === "none" ? "basic" : o;
        const a = this.util.getParentElement(l, this.util.isComponent), d = this.util.getParentElement(l, "FIGURE"), h = this.plugins.resizing._module_getSizeX.call(this, f, l, d, a) || "auto", v = f._onlyPercentage && r === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, f, l, d, a) || "auto");
        this.util.changeTxt(c.resizeDisplay, this.lang.dialogBox[o] + " (" + h + v + ")"), c.resizeButtonGroup.style.display = f._resizing ? "" : "none";
        const m = f._resizing && !f._resizeDotHide && !f._onlyPercentage ? "flex" : "none", p = c.resizeHandles;
        for (let L = 0, T = p.length; L < T; L++)
          p[L].style.display = m;
        if (f._resizing) {
          const L = c.rotationButtons;
          L[0].style.display = L[1].style.display = f._rotation ? "" : "none";
        }
        if (f._alignHide)
          c.alignButton.style.display = "none";
        else {
          c.alignButton.style.display = "";
          const L = c.alignMenuList;
          this.util.changeElement(c.alignButton.firstElementChild, c.alignIcons[o]);
          for (let T = 0, z = L.length; T < z; T++)
            L[T].getAttribute("data-value") === o ? this.util.addClass(L[T], "on") : this.util.removeClass(L[T], "on");
        }
        const _ = c.percentageButtons, w = /%$/.test(l.style.width) && /%$/.test(a.style.width) ? this.util.getNumber(a.style.width, 0) / 100 + "" : "";
        for (let L = 0, T = _.length; L < T; L++)
          _[L].getAttribute("data-value") === w ? this.util.addClass(_[L], "active") : this.util.removeClass(_[L], "active");
        f._captionShow ? (c.captionButton.style.display = "", this.util.getChildElement(l.parentNode, "figcaption") ? (this.util.addClass(c.captionButton, "active"), f._captionChecked = !0) : (this.util.removeClass(c.captionButton, "active"), f._captionChecked = !1)) : c.captionButton.style.display = "none", n.style.display = "block";
        const y = { left: 0, top: 50 };
        this.options.iframe && (y.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, y.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(c.resizeButton, n, "bottom", y);
        const x = function() {
          this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
        };
        this.controllersOn(n, c.resizeButton, x.bind(this), l, r), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), c._resize_w = C, c._resize_h = S;
        const M = (l.getAttribute("origin-size") || "").split(",");
        return c._origin_w = M[0] || l.naturalWidth, c._origin_h = M[1] || l.naturalHeight, {
          w: C,
          h: S,
          t: E,
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
        const r = l.target, c = r.getAttribute("data-command") || r.parentNode.getAttribute("data-command");
        if (!c) return;
        const f = r.getAttribute("data-value") || r.parentNode.getAttribute("data-value"), n = this.context.resizing._resize_plugin, b = this.context[n], u = b._element, g = this.plugins[n];
        if (l.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), c === "onalign"))) {
          switch (c) {
            case "auto":
              this.plugins.resizing.resetTransform.call(this, u), g.setAutoSize.call(this), this.selectComponent(u, n);
              break;
            case "percent":
              let C = this.plugins.resizing._module_getSizeY.call(this, b);
              if (this.context.resizing._rotateVertical) {
                const m = u.getAttribute("data-percentage");
                m && (C = m.split(",")[1]);
              }
              this.plugins.resizing.resetTransform.call(this, u), g.setPercentSize.call(this, f * 100, this.util.getNumber(C, 0) === null || !/%$/.test(C) ? "" : C), this.selectComponent(u, n);
              break;
            case "mirror":
              const S = u.getAttribute("data-rotate") || "0";
              let E = u.getAttribute("data-rotateX") || "", A = u.getAttribute("data-rotateY") || "";
              f === "h" && !this.context.resizing._rotateVertical || f === "v" && this.context.resizing._rotateVertical ? A = A ? "" : "180" : E = E ? "" : "180", u.setAttribute("data-rotateX", E), u.setAttribute("data-rotateY", A), this.plugins.resizing._setTransForm(u, S, E, A);
              break;
            case "rotate":
              const o = this.context.resizing, a = u.getAttribute("data-rotate") * 1 + f * 1, d = this._w.Math.abs(a) >= 360 ? 0 : a;
              u.setAttribute("data-rotate", d), o._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(d).toString()), this.plugins.resizing.setTransformSize.call(this, u, null, null), this.selectComponent(u, n);
              break;
            case "onalign":
              this.plugins.resizing.openAlignMenu.call(this);
              return;
            case "align":
              const h = f === "basic" ? "none" : f;
              g.setAlign.call(this, h, null, null, null), this.selectComponent(u, n);
              break;
            case "caption":
              const v = !b._captionChecked;
              if (g.openModify.call(this, !0), b._captionChecked = b.captionCheckEl.checked = v, g.update_image.call(this, !1, !1, !1), v) {
                const m = this.util.getChildElement(b._caption, function(p) {
                  return p.nodeType === 3;
                });
                m ? this.setRange(m, 0, m, m.textContent.length) : b._caption.focus(), this.controllersOff();
              } else
                this.selectComponent(u, n), g.openModify.call(this, !0);
              break;
            case "revert":
              g.setOriginSize.call(this), this.selectComponent(u, n);
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
        const r = (l.getAttribute("data-size") || l.getAttribute("data-origin") || "").split(",");
        this.context.resizing._rotateVertical = !1, l.style.maxWidth = "", l.style.transform = "", l.style.transformOrigin = "", l.setAttribute("data-rotate", ""), l.setAttribute("data-rotateX", ""), l.setAttribute("data-rotateY", ""), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, r[0] ? r[0] : "auto", r[1] ? r[1] : "", !0);
      },
      /**
       * @description Set the transform style (rotation) of the element.
       * @param {Element} element Target element
       * @param {Number|null} width Element's width size
       * @param {Number|null} height Element's height size
       */
      setTransformSize: function(l, r, c) {
        let f = l.getAttribute("data-percentage");
        const n = this.context.resizing._rotateVertical, b = l.getAttribute("data-rotate") * 1;
        let u = "";
        if (f && !n)
          f = f.split(","), f[0] === "auto" && f[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, f[0], f[1]);
        else {
          const g = this.util.getParentElement(l, "FIGURE"), C = r || l.offsetWidth, S = c || l.offsetHeight, E = (n ? S : C) + "px", A = (n ? C : S) + "px";
          if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, C + "px", S + "px", !0), g.style.width = E, g.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : A, n) {
            let o = C / 2 + "px " + C / 2 + "px 0", a = S / 2 + "px " + S / 2 + "px 0";
            u = b === 90 || b === -270 ? a : o;
          }
        }
        l.style.transformOrigin = u, this.plugins.resizing._setTransForm(l, b.toString(), l.getAttribute("data-rotateX") || "", l.getAttribute("data-rotateY") || ""), n ? l.style.maxWidth = "none" : l.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, l);
      },
      _setTransForm: function(l, r, c, f) {
        let n = (l.offsetWidth - l.offsetHeight) * (/-/.test(r) ? 1 : -1), b = "";
        if (/[1-9]/.test(r) && (c || f))
          switch (b = c ? "Y" : "X", r) {
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
        r % 180 === 0 && (l.style.maxWidth = ""), l.style.transform = "rotate(" + r + "deg)" + (c ? " rotateX(" + c + "deg)" : "") + (f ? " rotateY(" + f + "deg)" : "") + (b ? " translate" + b + "(" + n + "px)" : "");
      },
      /**
       * @description The position of the caption is set automatically.
       * @param {Element} element Target element (not caption element)
       */
      setCaptionPosition: function(l) {
        const r = this.util.getChildElement(this.util.getParentElement(l, "FIGURE"), "FIGCAPTION");
        r && (r.style.marginTop = (this.context.resizing._rotateVertical ? l.offsetWidth - l.offsetHeight : 0) + "px");
      },
      /**
       * @description Mouse down event of resize handles
       * @param {MouseEvent} e Event object 
       */
      onMouseDown_resize_handle: function(l) {
        l.stopPropagation(), l.preventDefault();
        const r = this.context.resizing, c = r._resize_direction = l.target.classList[0];
        r._resizeClientX = l.clientX, r._resizeClientY = l.clientY, this.context.element.resizeBackground.style.display = "block", r.resizeButton.style.display = "none", r.resizeDiv.style.float = /l/.test(c) ? "right" : /r/.test(c) ? "left" : "none";
        const f = (function(u) {
          if (u.type === "keydown" && u.keyCode !== 27) return;
          const g = r._isChange;
          r._isChange = !1, this.removeDocEvent("mousemove", n), this.removeDocEvent("mouseup", f), this.removeDocEvent("keydown", f), u.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, c), g && this.history.push(!1));
        }).bind(this), n = this.plugins.resizing.resizing_element.bind(this, r, c, this.context[r._resize_plugin]);
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
      resizing_element: function(l, r, c, f) {
        const n = f.clientX, b = f.clientY;
        let u = c._element_w, g = c._element_h;
        const C = c._element_w + (/r/.test(r) ? n - l._resizeClientX : l._resizeClientX - n), S = c._element_h + (/b/.test(r) ? b - l._resizeClientY : l._resizeClientY - b), E = c._element_h / c._element_w * C;
        /t/.test(r) && (l.resizeDiv.style.top = c._element_h - (/h/.test(r) ? S : E) + "px"), /l/.test(r) && (l.resizeDiv.style.left = c._element_w - C + "px"), /r|l/.test(r) && (l.resizeDiv.style.width = C + "px", u = C), /^(t|b)[^h]$/.test(r) ? (l.resizeDiv.style.height = E + "px", g = E) : /^(t|b)h$/.test(r) && (l.resizeDiv.style.height = S + "px", g = S), l._resize_w = u, l._resize_h = g, this.util.changeTxt(l.resizeDisplay, this._w.Math.round(u) + " x " + this._w.Math.round(g)), l._isChange = !0;
      },
      /**
       * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
       * Called at the mouse-up event registered in "onMouseDown_resize_handle".
       * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
       */
      cancel_controller_resize: function(l) {
        const r = this.context.resizing._rotateVertical;
        this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
        let c = this._w.Math.round(r ? this.context.resizing._resize_h : this.context.resizing._resize_w), f = this._w.Math.round(r ? this.context.resizing._resize_w : this.context.resizing._resize_h);
        if (!r && !/%$/.test(c)) {
          const u = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
          this.util.getNumber(c, 0) > u && (f = this._w.Math.round(f / c * u), c = u);
        }
        const n = this.context.resizing._resize_plugin;
        this.plugins[n].setSize.call(this, c, f, !1, l), r && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, c, f), this.selectComponent(this.context[n]._element, n);
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
})(ml);
var ds = ml.exports;
const gl = /* @__PURE__ */ Se(ds);
var vl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
    const s = {
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
      upload: function(l, r, c, f, n) {
        this.showLoading();
        const b = this.plugins.fileManager, u = b._xmlHttp = this.util.getXMLHttpRequest();
        if (u.onreadystatechange = b._callBackUpload.bind(this, u, f, n), u.open("post", l, !0), r !== null && typeof r == "object" && this._w.Object.keys(r).length > 0)
          for (let g in r)
            u.setRequestHeader(g, r[g]);
        u.send(c);
      },
      _callBackUpload: function(l, r, c) {
        if (l.readyState === 4)
          if (l.status === 200)
            try {
              r(l);
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
      checkInfo: function(l, r, c, f, n) {
        let b = [];
        for (let a = 0, d = r.length; a < d; a++)
          b = b.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(r[a] + ':not([data-se-embed="true"])')));
        const u = this.plugins.fileManager, g = this.context[l], C = g._infoList, S = u.setInfo.bind(this);
        if (b.length === C.length)
          if (this._componentsInfoReset) {
            for (let a = 0, d = b.length; a < d; a++)
              S(l, b[a], c, null, n);
            return;
          } else {
            let a = !1;
            for (let d = 0, h = C.length, v; d < h; d++)
              if (v = C[d], b.filter(function(m) {
                return v.src === m.src && v.index.toString() === m.getAttribute("data-index");
              }).length === 0) {
                a = !0;
                break;
              }
            if (!a) return;
          }
        const E = n ? this.context.resizing._resize_plugin : "";
        n && (this.context.resizing._resize_plugin = l);
        const A = [], o = [];
        for (let a = 0, d = C.length; a < d; a++)
          o[a] = C[a].index;
        for (g.__updateTags = b; b.length > 0; ) {
          const a = b.shift();
          !this.util.getParentElement(a, this.util.isMediaComponent) || !u._checkMediaComponent(a) ? (A.push(g._infoIndex), f(a)) : !a.getAttribute("data-index") || o.indexOf(a.getAttribute("data-index") * 1) < 0 ? (A.push(g._infoIndex), a.removeAttribute("data-index"), S(l, a, c, null, n)) : A.push(a.getAttribute("data-index") * 1);
        }
        for (let a = 0, d; a < C.length; a++)
          d = C[a].index, !(A.indexOf(d) > -1) && (C.splice(a, 1), typeof c == "function" && c(null, d, "delete", null, 0, this), a--);
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
      setInfo: function(l, r, c, f, n) {
        const b = n ? this.context.resizing._resize_plugin : "";
        n && (this.context.resizing._resize_plugin = l);
        const u = this.plugins[l], g = this.context[l], C = g._infoList;
        let S = r.getAttribute("data-index"), E = null, A = "";
        if (f || (f = {
          name: r.getAttribute("data-file-name") || (typeof r.src == "string" ? r.src.split("/").pop() : ""),
          size: r.getAttribute("data-file-size") || 0
        }), !S || this._componentsInfoInit)
          A = "create", S = g._infoIndex++, r.setAttribute("data-index", S), r.setAttribute("data-file-name", f.name), r.setAttribute("data-file-size", f.size), E = {
            src: r.src,
            index: S * 1,
            name: f.name,
            size: f.size
          }, C.push(E);
        else {
          A = "update", S *= 1;
          for (let o = 0, a = C.length; o < a; o++)
            if (S === C[o].index) {
              E = C[o];
              break;
            }
          E || (S = g._infoIndex++, E = { index: S }, C.push(E)), E.src = r.src, E.name = r.getAttribute("data-file-name"), E.size = r.getAttribute("data-file-size") * 1;
        }
        if (E.element = r, E.delete = u.destroy.bind(this, r), E.select = (function(o) {
          o.scrollIntoView(!0), this._w.setTimeout(u.select.bind(this, o));
        }).bind(this, r), n) {
          if (!r.getAttribute("origin-size") && r.naturalWidth && r.setAttribute("origin-size", r.naturalWidth + "," + r.naturalHeight), !r.getAttribute("data-origin")) {
            const o = this.util.getParentElement(r, this.util.isMediaComponent), a = this.util.getParentElement(r, "FIGURE"), d = this.plugins.resizing._module_getSizeX.call(this, g, r, a, o), h = this.plugins.resizing._module_getSizeY.call(this, g, r, a, o);
            r.setAttribute("data-origin", d + "," + h), r.setAttribute("data-size", d + "," + h);
          }
          if (!r.style.width) {
            const o = (r.getAttribute("data-size") || r.getAttribute("data-origin") || "").split(",");
            u.onModifyMode.call(this, r, null), u.applySize.call(this, o[0], o[1]);
          }
          this.context.resizing._resize_plugin = b;
        }
        typeof c == "function" && c(r, S, A, E, --g._uploadFileLength < 0 ? 0 : g._uploadFileLength, this);
      },
      /**
       * @description Delete info object at "_infoList"
       * @param {String} pluginName Plugin name 
       * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
       * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
       */
      deleteInfo: function(l, r, c) {
        if (r >= 0) {
          const f = this.context[l]._infoList;
          for (let n = 0, b = f.length; n < b; n++)
            if (r === f[n].index) {
              f.splice(n, 1), typeof c == "function" && c(null, r, "delete", null, 0, this);
              return;
            }
        }
      },
      /**
       * @description Reset info object and "_infoList = []", "_infoIndex = 0"
       * @param {String} pluginName Plugin name 
       * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
       */
      resetInfo: function(l, r) {
        const c = this.context[l];
        if (typeof r == "function") {
          const f = c._infoList;
          for (let n = 0, b = f.length; n < b; n++)
            r(null, f[n].index, "delete", null, 0, this);
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
})(vl);
var fs = vl.exports;
const Ut = /* @__PURE__ */ Se(fs), hs = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([ht, hl, Pt, gl, Ut]);
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
    let l = this.setDialog(e);
    s.modal = l, s.imgInputFile = l.querySelector("._se_image_file"), s.imgUrlFile = l.querySelector("._se_image_url"), s.focusElement = s.imgInputFile || s.imgUrlFile, s.altText = l.querySelector("._se_image_alt"), s.captionCheckEl = l.querySelector("._se_image_check_caption"), s.previewSrc = l.querySelector("._se_tab_content_image .se-link-preview"), l.querySelector(".se-dialog-tabs").addEventListener("click", this.openTab.bind(e)), l.querySelector("form").addEventListener("submit", this.submit.bind(e)), s.imgInputFile && l.querySelector(".se-file-remove").addEventListener("click", this._removeSelectedFiles.bind(s.imgInputFile, s.imgUrlFile, s.previewSrc)), s.imgUrlFile && s.imgUrlFile.addEventListener("input", this._onLinkPreview.bind(s.previewSrc, s._v_src, t.linkProtocol)), s.imgInputFile && s.imgUrlFile && s.imgInputFile.addEventListener("change", this._fileInputChange.bind(s));
    const r = l.querySelector(".__se__gallery");
    r && r.addEventListener("click", this._openGallery.bind(e)), s.proportion = {}, s.inputX = {}, s.inputY = {}, t.imageResizing && (s.proportion = l.querySelector("._se_image_check_proportion"), s.inputX = l.querySelector("._se_image_size_x"), s.inputY = l.querySelector("._se_image_size_y"), s.inputX.value = t.imageWidth, s.inputY.value = t.imageHeight, s.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), s.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), s.inputX.addEventListener("change", this.setRatio.bind(e)), s.inputY.addEventListener("change", this.setRatio.bind(e)), s.proportion.addEventListener("change", this.setRatio.bind(e)), l.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(l), e.plugins.anchor.initEvent.call(e, "image", l.querySelector("._se_tab_content_url")), s.anchorCtx = e.context.anchor.caller.image, l = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, s = e.util.createElement("DIV");
    s.className = "se-dialog-content se-dialog-image", s.style.display = "none";
    let l = '<div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" class="close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.imageBox.title + '</span></div><div class="se-dialog-tabs"><button type="button" class="_se_tab_link active" data-tab-link="image">' + i.toolbar.image + '</button><button type="button" class="_se_tab_link" data-tab-link="url">' + i.toolbar.link + '</button></div><form method="post" enctype="multipart/form-data"><div class="_se_tab_content _se_tab_content_image"><div class="se-dialog-body"><div style="border-bottom: 1px dashed #ccc;">';
    if (t.imageFileInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_image_file" type="file" accept="' + t.imageAccept + '"' + (t.imageMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.imageUrlInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url _se_image_url" type="text" />' + (t.imageGalleryUrl && e.plugins.imageGallery ? '<button type="button" class="se-btn se-dialog-files-edge-button __se__gallery" title="' + i.toolbar.imageGallery + '" aria-label="' + i.toolbar.imageGallery + '">' + e.icons.image_gallery + "</button>" : "") + '</div><pre class="se-link-preview"></pre></div>'), l += '</div><div class="se-dialog-form"><label>' + i.dialogBox.imageBox.altText + '</label><input class="se-input-form _se_image_alt" type="text" /></div>', t.imageResizing) {
      const r = t.imageSizeOnlyPercentage, c = r ? ' style="display: none !important;"' : "", f = t.imageHeightShow ? "" : ' style="display: none !important;"';
      l += '<div class="se-dialog-form">', r || !t.imageHeightShow ? l += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.size + "</label></div>" : l += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + i.dialogBox.height + "</label></div>", l += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (r ? ' type="number" min="1"' : 'type="text"') + (r ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + f + ">" + (r ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + c + (r ? ' max="100"' : "") + f + "/><label" + c + f + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + '</label><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
    }
    return l += '<div class="se-dialog-form se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_image_check_caption" />&nbsp;' + i.dialogBox.caption + '</label></div></div></div><div class="_se_tab_content _se_tab_content_url" style="display: none">' + e.context.anchor.forms.innerHTML + '</div><div class="se-dialog-footer"><div' + (t.imageAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", s.innerHTML = l, s;
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
    let l = i.previousElementSibling || i.nextElementSibling;
    const r = i.parentNode;
    this.util.removeItem(i), this.plugins.image.init.call(this), this.controllersOff(), r !== this.context.element.wysiwyg && this.util.removeItemAllParents(r, function(c) {
      return c.childNodes.length === 0;
    }, null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "image", s, this.functions.onImageUpload), this.history.push(!1);
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
    const s = i.getAttribute("data-tab-link"), l = "_se_tab_content";
    let r, c, f;
    for (c = t.getElementsByClassName(l), r = 0; r < c.length; r++)
      c[r].style.display = "none";
    for (f = t.getElementsByClassName("_se_tab_link"), r = 0; r < f.length; r++)
      this.util.removeClass(f[r], "active");
    return t.querySelector("." + l + "_" + s).style.display = "block", this.util.addClass(i, "active"), s === "image" && this.context.image.focusElement ? this.context.image.focusElement.focus() : s === "url" && this.context.anchor.caller.image.urlInput.focus(), !1;
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
    for (let f = 0, n = e.length; f < n; f++)
      /image/i.test(e[f].type) && (i.push(e[f]), t += e[f].size);
    const s = this.options.imageUploadSizeLimit;
    if (s > 0) {
      let f = 0;
      const n = this.context.image._infoList;
      for (let b = 0, u = n.length; b < u; b++)
        f += n[b].size * 1;
      if (t + f > s) {
        this.closeLoading();
        const b = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + s / 1e3 + "KB";
        (typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(b, { limitSize: s, currentSize: f, uploadSize: t }, this)) && this.functions.noticeOpen(b);
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
    const i = this.options.imageUploadUrl, s = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const l = new FormData();
      for (let r = 0; r < s; r++)
        l.append("file-" + r, t[r]);
      this.plugins.fileManager.upload.call(this, i, this.options.imageUploadHeader, l, this.plugins.image.callBack_imgUpload.bind(this, e), this.functions.onImageUploadError);
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
    for (let s = 0, l = i.length, r; s < l; s++)
      if (r = { name: i[s].name, size: i[s].size }, e.isUpdate) {
        this.plugins.image.update_src.call(this, i[s].url, e.element, r);
        break;
      } else
        this.plugins.image.create_image.call(this, i[s].url, e.anchor, e.inputWidth, e.inputHeight, e.align, r, e.alt);
    this.closeLoading();
  },
  setup_reader: function(e, t, i, s, l, r, c, f) {
    try {
      if (c === 0) {
        this.closeLoading(), console.warn("[SUNEDITOR.image.base64.fail] cause : No applicable files");
        return;
      }
      this.context.image.base64RenderIndex = c;
      const n = this._w.FileReader, b = [c];
      this.context.image.inputX.value = i, this.context.image.inputY.value = s;
      for (let u = 0, g, C; u < c; u++)
        g = new n(), C = e[u], g.onload = (function(S, E, A, o, a) {
          b[a] = { result: S.result, file: o }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, E, b, A, t, i, s, l, r), this.closeLoading());
        }).bind(this, g, f, this.context.image._element, C, u), g.readAsDataURL(C);
    } catch (n) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + n.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, i, s, l, r, c, f) {
    const n = this.plugins.image.update_src, b = this.plugins.image.create_image;
    for (let u = 0, g = t.length; u < g; u++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[u].file.name), this.context.image._element.setAttribute("data-file-size", t[u].file.size), n.call(this, t[u].result, i, t[u].file)) : b.call(this, t[u].result, s, l, r, c, t[u].file, f);
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
      const l = this.util.getFormatElement(s);
      l && (t._align = l.style.textAlign || l.style.float), this.util.isAnchor(s.parentNode) && !t.anchorCtx.linkValue && (t.anchorCtx.linkValue = " "), e.update_image.call(this, !0, !1, !0), e.init.call(this);
    }).bind(this);
    this.plugins.fileManager.checkInfo.call(this, "image", ["img"], this.functions.onImageUpload, i, !0);
  },
  /**
   * @Override fileManager
   */
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "image", this.functions.onImageUpload);
  },
  create_image: function(e, t, i, s, l, r, c) {
    const f = this.plugins.image, n = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let b = this.util.createElement("IMG");
    b.src = e, b.alt = c, b.setAttribute("data-rotate", "0"), t = f.onRender_link.call(this, b, t ? t.cloneNode(!1) : null), n._resizing && b.setAttribute("data-proportion", n._proportionChecked);
    const u = this.plugins.component.set_cover.call(this, t), g = this.plugins.component.set_container.call(this, u, "se-image-container");
    n._captionChecked && (n._caption = this.plugins.component.create_caption.call(this), u.appendChild(n._caption)), n._element = b, n._cover = u, n._container = g, f.applySize.call(this, i, s), f.setAlign.call(this, l, b, u, g), b.onload = f._image_create_onload.bind(this, b, n.svgDefaultSize, g), this.insertComponent(g, !0, !0, !0) && this.plugins.fileManager.setInfo.call(this, "image", b, this.functions.onImageUpload, r, !0), this.context.resizing._resize_plugin = "";
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
    let l = s._element, r = s._cover, c = s._container, f = !1;
    r === null && (f = !0, l = s._element.cloneNode(!0), r = this.plugins.component.set_cover.call(this, l)), c === null ? (r = r.cloneNode(!0), l = r.querySelector("img"), f = !0, c = this.plugins.component.set_container.call(this, r, "se-image-container")) : f && (c.innerHTML = "", c.appendChild(r), s._cover = r, s._element = l, f = !1);
    let n;
    const b = this.util.isNumber(s.inputX.value) ? s.inputX.value + s.sizeUnit : s.inputX.value, u = this.util.isNumber(s.inputY.value) ? s.inputY.value + s.sizeUnit : s.inputY.value;
    /%$/.test(l.style.width) ? n = b !== c.style.width || u !== c.style.height : n = b !== l.style.width || u !== l.style.height, l.alt = s._altText;
    let g = !1;
    s._captionChecked ? s._caption || (s._caption = this.plugins.component.create_caption.call(this), r.appendChild(s._caption), g = !0) : s._caption && (this.util.removeItem(s._caption), s._caption = null, g = !0);
    let C = null;
    const S = this.plugins.anchor.createAnchor.call(this, s.anchorCtx, !0);
    if (S)
      s._linkElement !== S || f && !c.contains(S) ? (s._linkElement = S.cloneNode(!1), r.insertBefore(this.plugins.image.onRender_link.call(this, l, s._linkElement), s._caption), C = s._element) : s._linkElement.setAttribute("data-image-link", "image");
    else if (s._linkElement !== null) {
      const A = l;
      if (A.setAttribute("data-image-link", ""), r.contains(s._linkElement)) {
        const o = A.cloneNode(!0);
        r.removeChild(s._linkElement), r.insertBefore(o, s._caption), s._element = l = o;
      }
    }
    let E = null;
    if (f) {
      if (E = this.util.isRangeFormatElement(s._element.parentNode) || this.util.isWysiwygDiv(s._element.parentNode) ? s._element : this.util.isAnchor(s._element.parentNode) ? s._element.parentNode : this.util.getFormatElement(s._element) || s._element, this.util.getParentElement(s._element, this.util.isNotCheckingNode))
        E = C ? S : s._element, E.parentNode.replaceChild(c, E);
      else if (this.util.isListCell(E)) {
        const A = this.util.getParentElement(s._element, function(o) {
          return o.parentNode === E;
        });
        E.insertBefore(c, A), this.util.removeItem(s._element), this.util.removeEmptyNode(A, null, !0);
      } else if (this.util.isFormatElement(E)) {
        const A = this.util.getParentElement(s._element, function(o) {
          return o.parentNode === E;
        });
        E = this.util.splitElement(E, A), E.parentNode.insertBefore(c, E), this.util.removeItem(s._element), this.util.removeEmptyNode(E, null, !0), E.children.length === 0 && (E.innerHTML = this.util.htmlRemoveWhiteSpace(E.innerHTML));
      } else if (this.util.isFormatElement(E.parentNode)) {
        const A = E.parentNode;
        A.parentNode.insertBefore(c, E.previousSibling ? A.nextElementSibling : A), s.__updateTags.map(function(o) {
          return E.contains(o);
        }).length === 0 && this.util.removeItem(E);
      } else
        E = this.util.isFigures(E.parentNode) ? E.parentNode : E, E.parentNode.replaceChild(c, E);
      l = c.querySelector("img"), s._element = l, s._cover = r, s._container = c;
    }
    C && (f ? (this.util.removeItem(C), this.util.getListChildren(S, function(A) {
      return /IMG/i.test(A.tagName);
    }).length === 0 && this.util.removeItem(S)) : this.util.removeItem(S)), (g || !s._onlyPercentage && n) && !e && (/\d+/.test(l.style.height) || this.context.resizing._rotateVertical && s._captionChecked) && (/%$/.test(s.inputX.value) || /%$/.test(s.inputY.value) ? this.plugins.resizing.resetTransform.call(this, l) : this.plugins.resizing.setTransformSize.call(this, l, this.util.getNumber(s.inputX.value, 0), this.util.getNumber(s.inputY.value, 0))), s._resizing && (l.setAttribute("data-proportion", s._proportionChecked), n && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, l, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", l, this.functions.onImageUpload, null, !0), t && this.selectComponent(l, "image"), i || this.history.push(!1);
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
    let s = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), l, r;
    s ? (s = s.split(","), l = s[0], r = s[1]) : t && (l = t.w, r = t.h), i._origin_w = l || e.style.width || e.width || "", i._origin_h = r || e.style.height || e.height || "";
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
    const l = this.context.image, r = /^(rw|lw)$/.test(s) && /\d+/.test(l._element.style.height);
    /^(th|bh)$/.test(s) && /\d+/.test(l._element.style.width) || (l._element.style.width = this.util.isNumber(e) ? e + l.sizeUnit : e, this.plugins.image.cancelPercentAttr.call(this)), r || (l._element.style.height = this.util.isNumber(t) ? t + l.sizeUnit : /%$/.test(t) ? "" : t), l._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i || l._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, l);
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
    const l = this.context.image;
    e || (e = l._align), t || (t = l._element), i || (i = l._cover), s || (s = l._container), /%$/.test(t.style.width) && e === "center" ? (s.style.minWidth = "100%", i.style.width = s.style.width) : (s.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : !t.style.width || t.style.width === "auto" ? "" : t.style.width || "100%"), this.util.hasClass(s, "__se__float-" + e) || (this.util.removeClass(s, l._floatClassRegExp), this.util.addClass(s, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.image;
    e.imgInputFile && (e.imgInputFile.value = ""), e.imgUrlFile && (e._v_src._linkValue = e.previewSrc.textContent = e.imgUrlFile.value = ""), e.imgInputFile && e.imgUrlFile && (e.imgUrlFile.removeAttribute("disabled"), e.previewSrc.style.textDecoration = ""), e.altText.value = "", e.modal.querySelector('input[name="suneditor_image_radio"][value="none"]').checked = !0, e.captionCheckEl.checked = !1, e._element = null, this.plugins.image.openTab.call(this, "init"), e._resizing && (e.inputX.value = this.options.imageWidth === e._defaultSizeX ? "" : this.options.imageWidth, e.inputY.value = this.options.imageHeight === e._defaultSizeY ? "" : this.options.imageHeight, e.proportion.checked = !0, e._ratio = !1, e._ratioX = 1, e._ratioY = 1), this.plugins.anchor.init.call(this, e.anchorCtx);
  }
}, ps = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([ht, Pt, gl, Ut]);
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
    let l = this.setDialog(e);
    s.modal = l, s.videoInputFile = l.querySelector("._se_video_file"), s.videoUrlFile = l.querySelector(".se-input-url"), s.focusElement = s.videoUrlFile || s.videoInputFile, s.preview = l.querySelector(".se-link-preview"), l.querySelector("form").addEventListener("submit", this.submit.bind(e)), s.videoInputFile && l.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(s.videoInputFile, s.videoUrlFile, s.preview)), s.videoInputFile && s.videoUrlFile && s.videoInputFile.addEventListener("change", this._fileInputChange.bind(s)), s.videoUrlFile && s.videoUrlFile.addEventListener("input", this._onLinkPreview.bind(s.preview, s, t.linkProtocol)), s.proportion = {}, s.videoRatioOption = {}, s.inputX = {}, s.inputY = {}, t.videoResizing && (s.proportion = l.querySelector("._se_video_check_proportion"), s.videoRatioOption = l.querySelector(".se-video-ratio"), s.inputX = l.querySelector("._se_video_size_x"), s.inputY = l.querySelector("._se_video_size_y"), s.inputX.value = t.videoWidth, s.inputY.value = t.videoHeight, s.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), s.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), s.inputX.addEventListener("change", this.setRatio.bind(e)), s.inputY.addEventListener("change", this.setRatio.bind(e)), s.proportion.addEventListener("change", this.setRatio.bind(e)), s.videoRatioOption.addEventListener("change", this.setVideoRatio.bind(e)), l.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(l), l = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, s = e.util.createElement("DIV");
    s.className = "se-dialog-content", s.style.display = "none";
    let l = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.videoBox.title + '</span></div><div class="se-dialog-body">';
    if (t.videoFileInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_video_file" type="file" accept="' + t.videoAccept + '"' + (t.videoMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.videoUrlInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), t.videoResizing) {
      const r = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], c = t.videoRatio, f = t.videoSizeOnlyPercentage, n = f ? ' style="display: none !important;"' : "", b = t.videoHeightShow ? "" : ' style="display: none !important;"', u = t.videoRatioShow ? "" : ' style="display: none !important;"', g = !f && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      l += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + b + ">" + i.dialogBox.height + '</label><label class="size-h"' + u + ">(" + i.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + g + ">" + (f ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + b + '/><select class="se-input-select se-video-ratio" title="' + i.dialogBox.ratio + '" aria-label="' + i.dialogBox.ratio + '"' + u + ">", b || (l += '<option value=""> - </option>');
      for (let C = 0, S = r.length; C < S; C++)
        l += '<option value="' + r[C].value + '"' + (c.toString() === r[C].value.toString() ? " selected" : "") + ">" + r[C].name + "</option>";
      l += '</select><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + n + g + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + "</label></div>";
    }
    return l += '</div><div class="se-dialog-footer"><div' + (t.videoAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", s.innerHTML = l, s;
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
    let l = i.previousElementSibling || i.nextElementSibling;
    const r = i.parentNode;
    this.util.removeItem(i), this.plugins.video.init.call(this), this.controllersOff(), r !== this.context.element.wysiwyg && this.util.removeItemAllParents(r, function(c) {
      return c.childNodes.length === 0;
    }, null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "video", s, this.functions.onVideoUpload), this.history.push(!1);
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
    for (let c = 0, f = e.length; c < f; c++)
      /video/i.test(e[c].type) && (i.push(e[c]), t += e[c].size);
    const s = this.options.videoUploadSizeLimit;
    if (s > 0) {
      let c = 0;
      const f = this.context.video._infoList;
      for (let n = 0, b = f.length; n < b; n++)
        c += f[n].size * 1;
      if (t + c > s) {
        this.closeLoading();
        const n = "[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: " + s / 1e3 + "KB";
        (typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(n, { limitSize: s, currentSize: c, uploadSize: t }, this)) && this.functions.noticeOpen(n);
        return;
      }
    }
    const l = this.context.video;
    l._uploadFileLength = i.length;
    const r = {
      inputWidth: l.inputX.value,
      inputHeight: l.inputY.value,
      align: l._align,
      isUpdate: this.context.dialog.updateModal,
      element: l._element
    };
    if (typeof this.functions.onVideoUploadBefore == "function") {
      const c = this.functions.onVideoUploadBefore(i, r, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.video.register.call(this, r, f) : this.plugins.video.upload.call(this, r, f);
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
      const l = new FormData();
      for (let r = 0; r < s; r++)
        l.append("file-" + r, t[r]);
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
    const i = t.result, s = this.plugins.video.createVideoTag.call(this);
    for (let l = 0, r = i.length, c; l < r; l++)
      c = { name: i[l].name, size: i[l].size }, this.plugins.video.create_video.call(this, e.isUpdate ? e.element : s.cloneNode(!1), i[l].url, e.inputWidth, e.inputHeight, e.align, c, e.isUpdate);
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
  create_video: function(e, t, i, s, l, r, c) {
    this.context.resizing._resize_plugin = "video";
    const f = this.context.video;
    let n = null, b = null, u = !1;
    if (c) {
      if (e = f._element, e.src !== t) {
        u = !0;
        const A = /youtu\.?be/.test(t), o = /vimeo\.com/.test(t);
        if ((A || o) && !/^iframe$/i.test(e.nodeName)) {
          const a = this.plugins.video.createIframeTag.call(this);
          a.src = t, e.parentNode.replaceChild(a, e), f._element = e = a;
        } else if (!A && !o && !/^video$/i.test(e.nodeName)) {
          const a = this.plugins.video.createVideoTag.call(this);
          a.src = t, e.parentNode.replaceChild(a, e), f._element = e = a;
        } else
          e.src = t;
      }
      b = f._container, n = this.util.getParentElement(e, "FIGURE");
    } else
      u = !0, e.src = t, f._element = e, n = this.plugins.component.set_cover.call(this, e), b = this.plugins.component.set_container.call(this, n, "se-video-container");
    f._cover = n, f._container = b;
    const g = this.plugins.resizing._module_getSizeX.call(this, f) !== (i || f._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, f) !== (s || f._videoRatio), C = !c || g;
    f._resizing && (this.context.video._proportionChecked = f.proportion.checked, e.setAttribute("data-proportion", f._proportionChecked));
    let S = !1;
    C && (S = this.plugins.video.applySize.call(this)), S && l === "center" || this.plugins.video.setAlign.call(this, null, e, n, b);
    let E = !0;
    if (c)
      f._resizing && this.context.resizing._rotateVertical && C && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (E = this.insertComponent(b, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const A = this.appendFormatTag(b, null);
      A && this.setRange(A, 0, A, 0);
    }
    E && (u && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, r, !0), c && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
  },
  _update_videoCover: function(e) {
    if (!e) return;
    const t = this.context.video;
    /^video$/i.test(e.nodeName) ? this.plugins.video._setTagAttrs.call(this, e) : this.plugins.video._setIframeAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const s = e;
    t._element = e = e.cloneNode(!0);
    const l = t._cover = this.plugins.component.set_cover.call(this, e), r = t._container = this.plugins.component.set_container.call(this, l, "se-video-container");
    try {
      const c = i.querySelector("figcaption");
      let f = null;
      c && (f = this.util.createElement("DIV"), f.innerHTML = c.innerHTML, this.util.removeItem(c));
      const n = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, n[0] || s.style.width || s.width || "", n[1] || s.style.height || s.height || "");
      const b = this.util.getFormatElement(s);
      if (b && (t._align = b.style.textAlign || b.style.float), this.plugins.video.setAlign.call(this, null, e, l, r), this.util.getParentElement(s, this.util.isNotCheckingNode))
        s.parentNode.replaceChild(r, s);
      else if (this.util.isListCell(i)) {
        const u = this.util.getParentElement(s, function(g) {
          return g.parentNode === i;
        });
        i.insertBefore(r, u), this.util.removeItem(s), this.util.removeEmptyNode(u, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const u = this.util.getParentElement(s, function(g) {
          return g.parentNode === i;
        });
        i = this.util.splitElement(i, u), i.parentNode.insertBefore(r, i), this.util.removeItem(s), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(r, i);
      f && i.parentNode.insertBefore(f, r.nextElementSibling);
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
    let s = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), l, r;
    s ? (s = s.split(","), l = s[0], r = s[1]) : t && (l = t.w, r = t.h), i._origin_w = l || e.style.width || e.width || "", i._origin_h = r || e.style.height || e.height || "";
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
    for (let l = 0, r = s.length; l < r; l++)
      s[l].value === e ? (t = s[l].selected = !0, i.inputY.placeholder = e ? e * 100 + "%" : "") : s[l].selected = !1;
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
    const l = this.context.video, r = /^(rw|lw)$/.test(s), c = /^(th|bh)$/.test(s);
    c || (e = this.util.getNumber(e, 0)), r || (t = this.util.isNumber(t) ? t + l.sizeUnit : t || ""), e = e ? e + l.sizeUnit : "", c || (l._element.style.width = e), r || (l._cover.style.paddingBottom = l._cover.style.height = t), !c && !/%$/.test(e) && (l._cover.style.width = e, l._container.style.width = ""), !r && !/%$/.test(t) ? l._element.style.height = t : l._element.style.height = "", i || l._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, l);
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
      const s = i[0], l = i[1];
      t._onlyPercentage || /%$/.test(s) && (/%$/.test(l) || !/\d/.test(l)) ? this.plugins.video.setPercentSize.call(this, s, l) : this.plugins.video.setSize.call(this, s, l), this.plugins.resizing._module_saveCurrentSize.call(this, t);
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
    const l = this.context.video;
    e || (e = l._align), t || (t = l._element), i || (i = l._cover), s || (s = l._container), /%$/.test(t.style.width) && e === "center" ? (s.style.minWidth = "100%", i.style.width = s.style.width, i.style.height = i.style.height, i.style.paddingBottom = /%$/.test(i.style.height) ? this.util.getNumber(this.util.getNumber(i.style.height, 2) / 100 * this.util.getNumber(i.style.width, 2), 2) + "%" : i.style.height) : (s.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : t.style.width || "100%", i.style.paddingBottom = i.style.height), this.util.hasClass(s, "__se__float-" + e) || (this.util.removeClass(s, l._floatClassRegExp), this.util.addClass(s, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  /**
   * @Override dialog
   */
  init: function() {
    const e = this.context.video;
    e.videoInputFile && (e.videoInputFile.value = ""), e.videoUrlFile && (e._linkValue = e.preview.textContent = e.videoUrlFile.value = ""), e.videoInputFile && e.videoUrlFile && (e.videoUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._origin_w = this.options.videoWidth, e._origin_h = this.options.videoHeight, e.modal.querySelector('input[name="suneditor_video_radio"][value="none"]').checked = !0, e._resizing && (e.inputX.value = this.options.videoWidth === e._defaultSizeX ? "" : this.options.videoWidth, e.inputY.value = this.options.videoHeight === e._defaultSizeY ? "" : this.options.videoHeight, e.proportion.checked = !0, e.proportion.disabled = !0, this.plugins.video.setVideoRatioSelect.call(this, e._defaultRatio));
  }
}, ms = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([ht, Pt, Ut]);
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
    let l = this.setController(e);
    i.controller = l, s.querySelector("form").addEventListener("submit", this.submit.bind(e)), i.audioInputFile && s.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(i.audioInputFile, i.audioUrlFile, i.preview)), i.audioInputFile && i.audioUrlFile && i.audioInputFile.addEventListener("change", this._fileInputChange.bind(i)), l.addEventListener("click", this.onClick_controller.bind(e)), i.audioUrlFile && i.audioUrlFile.addEventListener("input", this._onLinkPreview.bind(i.preview, i, e.options.linkProtocol)), t.dialog.modal.appendChild(s), t.element.relative.appendChild(l), s = null, l = null;
  },
  /** HTML - dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, s = e.util.createElement("DIV");
    s.className = "se-dialog-content", s.style.display = "none";
    let l = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.audioBox.title + '</span></div><div class="se-dialog-body">';
    return t.audioFileInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_audio_files" type="file" accept="' + t.audioAccept + '"' + (t.audioMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.audioUrlInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), l += '</div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", s.innerHTML = l, s;
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
    const s = t.previousElementSibling || t.nextElementSibling, l = t.parentNode;
    this.util.removeItem(t), this.plugins.audio.init.call(this), this.controllersOff(), l !== this.context.element.wysiwyg && this.util.removeItemAllParents(l, function(r) {
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
    for (let c = 0, f = e.length; c < f; c++)
      /audio/i.test(e[c].type) && (i.push(e[c]), t += e[c].size);
    const s = this.options.audioUploadSizeLimit;
    if (s > 0) {
      let c = 0;
      const f = this.context.audio._infoList;
      for (let n = 0, b = f.length; n < b; n++)
        c += f[n].size * 1;
      if (t + c > s) {
        this.closeLoading();
        const n = "[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: " + s / 1e3 + "KB";
        (typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(n, { limitSize: s, currentSize: c, uploadSize: t }, this)) && this.functions.noticeOpen(n);
        return;
      }
    }
    const l = this.context.audio;
    l._uploadFileLength = i.length;
    const r = {
      isUpdate: this.context.dialog.updateModal,
      element: l._element
    };
    if (typeof this.functions.onAudioUploadBefore == "function") {
      const c = this.functions.onAudioUploadBefore(i, r, this, (function(f) {
        f && this._w.Array.isArray(f.result) ? this.plugins.audio.register.call(this, r, f) : this.plugins.audio.upload.call(this, r, f);
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
    const i = this.options.audioUploadUrl, s = this.context.dialog.updateModal ? 1 : t.length, l = new FormData();
    for (let r = 0; r < s; r++)
      l.append("file-" + r, t[r]);
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
    for (let s = 0, l = i.length, r, c; s < l; s++)
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
    const l = this.context.audio;
    if (s)
      if (l._element && (e = l._element), e && e.src !== t)
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
        const f = this.appendFormatTag(c, null);
        f && this.setRange(f, 0, f, 0);
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
    const l = this.plugins.component.set_cover.call(this, e), r = this.plugins.component.set_container.call(this, l, "se-audio-container");
    try {
      if (this.util.getParentElement(s, this.util.isNotCheckingNode))
        s.parentNode.replaceChild(r, s);
      else if (this.util.isListCell(i)) {
        const c = this.util.getParentElement(s, function(f) {
          return f.parentNode === i;
        });
        i.insertBefore(r, c), this.util.removeItem(s), this.util.removeEmptyNode(c, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const c = this.util.getParentElement(s, function(f) {
          return f.parentNode === i;
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
}, hi = "https://katex.org/docs/supported.html", gs = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([ht]);
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
    let s = this.setController_MathButton(e);
    t.math.mathController = s, t.math._mathExp = null, i.querySelector("form").addEventListener("submit", this.submit.bind(e), !1), s.addEventListener("click", this.onClick_mathController.bind(e)), t.math.previewElement.style.fontSize = t.math.defaultFontSize, t.dialog.modal.appendChild(i), t.element.relative.appendChild(s), i = null, s = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), s = e.options.mathFontSize;
    let l = s[0].value;
    i.className = "se-dialog-content", i.style.display = "none";
    let r = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + hi + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let c = 0, f = s.length, n; c < f; c++)
      n = s[c], n.default && (l = n.value), r += '<option value="' + n.value + '"' + (n.default ? " selected" : "") + ">" + n.text + "</option>";
    return r += '</select></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.previewLabel + '</label><p class="se-math-preview"></p></div></div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>", e.context.math.defaultFontSize = l, i.innerHTML = r, i;
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
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + hi + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", i);
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
      const i = this.context.math, s = i.focusElement.value, l = i.previewElement.querySelector(".katex");
      if (!l) return !1;
      if (l.className = "__se__katex " + l.className, l.setAttribute("contenteditable", !1), l.setAttribute("data-exp", this.util.HTMLEncoder(s)), l.setAttribute("data-font-size", i.fontSizeElement.value), l.style.fontSize = i.fontSizeElement.value, this.context.dialog.updateModal) {
        const r = this.util.getParentElement(i._mathExp, ".katex");
        r.parentNode.replaceChild(l, r), this.setRange(l, 0, l, 1);
      } else {
        const r = this.getSelectedElements();
        if (r.length > 1) {
          const f = this.util.createElement(r[0].nodeName);
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
var bl = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(s) {
      if (!s.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(s);
    };
  })(typeof window < "u" ? window : xe, function(t, i) {
    const s = {
      name: "fileBrowser",
      _xmlHttp: null,
      _loading: null,
      /**
       * @description Constructor
       * @param {Object} core Core object 
       */
      add: function(l) {
        const r = l.context;
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
        let c = l.util.createElement("DIV");
        c.className = "se-file-browser sun-editor-common";
        let f = l.util.createElement("DIV");
        f.className = "se-file-browser-back";
        let n = l.util.createElement("DIV");
        n.className = "se-file-browser-inner", n.innerHTML = this.set_browser(l), c.appendChild(f), c.appendChild(n), this._loading = c.querySelector(".se-loading-box"), r.fileBrowser.area = c, r.fileBrowser.header = n.querySelector(".se-file-browser-header"), r.fileBrowser.titleArea = n.querySelector(".se-file-browser-title"), r.fileBrowser.tagArea = n.querySelector(".se-file-browser-tags"), r.fileBrowser.body = n.querySelector(".se-file-browser-body"), r.fileBrowser.list = n.querySelector(".se-file-browser-list"), r.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(l)), r.fileBrowser.list.addEventListener("click", this.onClickFile.bind(l)), n.addEventListener("mousedown", this._onMouseDown_browser.bind(l)), n.addEventListener("click", this._onClick_browser.bind(l)), r.element.relative.appendChild(c), c = null, f = null, n = null;
      },
      set_browser: function(l) {
        const r = l.lang;
        return '<div class="se-file-browser-content"><div class="se-file-browser-header"><button type="button" data-command="close" class="se-btn se-file-browser-close" class="close" title="' + r.dialogBox.close + '" aria-label="' + r.dialogBox.close + '">' + l.icons.cancel + '</button><span class="se-file-browser-title"></span><div class="se-file-browser-tags"></div></div><div class="se-file-browser-body"><div class="se-loading-box sun-editor-common"><div class="se-loading-effect"></div></div><div class="se-file-browser-list"></div></div></div>';
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
      open: function(l, r) {
        this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = (function(b) {
          /27/.test(b.keyCode) && this.plugins.fileBrowser.close.call(this);
        }).bind(this), this._d.addEventListener("keydown", this.plugins.fileBrowser._bindClose);
        const c = this.context.fileBrowser;
        c.contextPlugin = l, c.selectorHandler = r;
        const f = this.context[l], n = f.listClass;
        this.util.hasClass(c.list, n) || (c.list.className = "se-file-browser-list " + n), this.options.popupDisplay === "full" ? c.area.style.position = "fixed" : c.area.style.position = "absolute", c.titleArea.textContent = f.title, c.area.style.display = "block", this.plugins.fileBrowser._drawFileList.call(this, this.context[l].url, this.context[l].header);
      },
      _bindClose: null,
      /**
       * @description Close a fileBrowser plugin
       * The plugin's "init" method is called.
       */
      close: function() {
        const l = this.plugins.fileBrowser;
        l._xmlHttp && l._xmlHttp.abort(), l._bindClose && (this._d.removeEventListener("keydown", l._bindClose), l._bindClose = null);
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
      _drawFileList: function(l, r) {
        const c = this.plugins.fileBrowser, f = c._xmlHttp = this.util.getXMLHttpRequest();
        if (f.onreadystatechange = c._callBackGet.bind(this, f), f.open("get", l, !0), r !== null && typeof r == "object" && this._w.Object.keys(r).length > 0)
          for (let n in r)
            f.setRequestHeader(n, r[n]);
        f.send(null), this.plugins.fileBrowser.showBrowserLoading();
      },
      _callBackGet: function(l) {
        if (l.readyState === 4) {
          if (this.plugins.fileBrowser._xmlHttp = null, l.status === 200)
            try {
              const r = JSON.parse(l.responseText);
              r.result.length > 0 ? this.plugins.fileBrowser._drawListItem.call(this, r.result, !0) : r.nullMessage && (this.context.fileBrowser.list.innerHTML = r.nullMessage);
            } catch (r) {
              throw Error('[SUNEDITOR.fileBrowser.drawList.fail] cause : "' + r.message + '"');
            } finally {
              this.plugins.fileBrowser.closeBrowserLoading(), this.context.fileBrowser.body.style.maxHeight = this._w.innerHeight - this.context.fileBrowser.header.offsetHeight - 50 + "px";
            }
          else if (this.plugins.fileBrowser.closeBrowserLoading(), l.status !== 0) {
            const r = l.responseText ? JSON.parse(l.responseText) : l, c = "[SUNEDITOR.fileBrowser.get.serverException] status: " + l.status + ", response: " + (r.errorMessage || l.responseText);
            throw Error(c);
          }
        }
      },
      _drawListItem: function(l, r) {
        const c = this.context.fileBrowser, f = this.context[c.contextPlugin], n = [], b = l.length, u = f.columnSize || c.columnSize, g = u <= 1 ? 1 : Math.round(b / u) || 1, C = f.itemTemplateHandler;
        let S = "", E = '<div class="se-file-item-column">', A = 1;
        for (let o = 0, a, d; o < b; o++)
          if (a = l[o], d = a.tag ? typeof a.tag == "string" ? a.tag.split(",") : a.tag : [], d = a.tag = d.map(function(h) {
            return h.trim();
          }), E += C(a), (o + 1) % g === 0 && A < u && o + 1 < b && (A++, E += '</div><div class="se-file-item-column">'), r && d.length > 0)
            for (let h = 0, v = d.length, m; h < v; h++)
              m = d[h], m && n.indexOf(m) === -1 && (n.push(m), S += '<a title="' + m + '" aria-label="' + m + '">' + m + "</a>");
        E += "</div>", c.list.innerHTML = E, r && (c.items = l, c.tagArea.innerHTML = S, c.tagElements = c.tagArea.querySelectorAll("A"));
      },
      onClickTag: function(l) {
        const r = l.target;
        if (!this.util.isAnchor(r)) return;
        const c = r.textContent, f = this.plugins.fileBrowser, n = this.context.fileBrowser, b = n.tagArea.querySelector('a[title="' + c + '"]'), u = n.selectedTags, g = u.indexOf(c);
        g > -1 ? (u.splice(g, 1), this.util.removeClass(b, "on")) : (u.push(c), this.util.addClass(b, "on")), f._drawListItem.call(
          this,
          u.length === 0 ? n.items : n.items.filter(function(C) {
            return C.tag.some(function(S) {
              return u.indexOf(S) > -1;
            });
          }),
          !1
        );
      },
      onClickFile: function(l) {
        l.preventDefault(), l.stopPropagation();
        const r = this.context.fileBrowser, c = r.list;
        let f = l.target, n = null;
        if (f === c) return;
        for (; c !== f.parentNode && (n = f.getAttribute("data-command"), !n); )
          f = f.parentNode;
        if (!n) return;
        (r.selectorHandler || this.context[r.contextPlugin].selectorHandler)(f, f.parentNode.querySelector(".__se__img_name").textContent), this.plugins.fileBrowser.close.call(this);
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
})(bl);
var vs = bl.exports;
const bs = /* @__PURE__ */ Se(vs), _s = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([bs]);
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
}, ys = { blockquote: jn, align: Gn, font: Kn, fontSize: Yn, fontColor: Xn, hiliteColor: Jn, horizontalRule: Qn, list: es, table: ts, formatBlock: is, lineHeight: ls, template: ns, paragraphStyle: ss, textStyle: os, link: us, image: hs, video: ps, audio: ms, math: gs, imageGallery: _s }, ws = {
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
}, pi = {
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
}, ae = {
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
      return ae.camelToKebabCase(t);
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
      return ae.camelToKebabCase(t);
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
    const s = [], l = t === "js" ? "script" : "link", r = t === "js" ? "src" : "href";
    let c = "(?:";
    for (let b = 0, u = e.length; b < u; b++)
      c += e[b] + (b < u - 1 ? "|" : ")");
    const f = new this._w.RegExp("(^|.*[\\/])" + c + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), n = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
    for (let b = this._d.getElementsByTagName(l), u = 0; u < b.length; u++)
      n.test(b[u][r]) && s.push(b[u]);
    for (let b = 0; b < s.length; b++) {
      let u = s[b][r].match(f);
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
    for (let s = 0, l = i.length, r; s < l; s++) {
      try {
        r = i[s].cssRules;
      } catch {
        continue;
      }
      if (r)
        for (let c = 0, f = r.length; c < f; c++)
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
    for (let l = 0, r = i.length; l < r; l++)
      t && t.indexOf(i[l].name) > -1 || (s += i[l].name + '="' + i[l].value + '" ');
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
      const l = t.style;
      for (let r = 0, c = l.length; r < c; r++)
        e.style[l[r]] = l[l[r]];
    }
    const s = t.attributes;
    for (let l = 0, r = s.length, c; l < r; l++)
      c = s[l].name.toLowerCase(), i && i.indexOf(c) > -1 || !s[l].value ? e.removeAttribute(c) : c !== "style" && e.setAttribute(s[l].name, s[l].value);
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
    for (let l = 0, r = e.length, c; l < r; l++)
      if (c = e[l], t(c))
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
    for (let s = 0, l = e.length; s < l; s++)
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
    let l = !0;
    return this.getParentElement(e, (function(r) {
      if (r === t && (l = !1), l && !this.isWysiwygDiv(r)) {
        if (i && r.nodeType === 3) {
          let c = null, f = null;
          i.s = i.e = 0;
          let n = r.previousSibling;
          for (; n && n.nodeType === 3; )
            f = n.textContent.replace(this.zeroWidthRegExp, ""), i.s += f.length, r.textContent = f + r.textContent, c = n, n = n.previousSibling, this.removeItem(c);
          let b = r.nextSibling;
          for (; b && b.nodeType === 3; )
            f = b.textContent.replace(this.zeroWidthRegExp, ""), i.e += f.length, r.textContent += f, c = b, b = b.nextSibling, this.removeItem(c);
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
    for (let l = 0, r = e.length; l < r && (s = i.childNodes, s.length !== 0); l++)
      s.length <= e[l] ? i = s[s.length - 1] : i = s[e[l]];
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
    let l = 0;
    for (let b = 0, u = i.length; b < u; b++)
      i[i[b]] === s[i[b]] && l++;
    const r = e.classList, c = t.classList, f = this._w.RegExp;
    let n = 0;
    for (let b = 0, u = r.length; b < u; b++)
      f("(s|^)" + r[b] + "(s|$)").test(c.value) && n++;
    return l === s.length && l === i.length && n === c.length && n === r.length;
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
    }, function s(l) {
      if (e !== l && t(l) && i.push(l), l.children)
        for (let r = 0, c = l.children.length; r < c; r++)
          s(l.children[r]);
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
    }, function s(l) {
      e !== l && t(l) && i.push(l);
      for (let r = 0, c = l.childNodes.length; r < c; r++)
        s(l.childNodes[r]);
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
    const l = i.parentNode.childNodes, r = this.getArrayIndex(l, i), c = this.getArrayIndex(l, s);
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
      const l = new this._w.RegExp(t, "i");
      i = function(r) {
        return l.test(r[s]);
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
      s = function(f) {
        return c.test(f[r]);
      };
    }
    const l = this.getListChildNodes(e, function(r) {
      return s(r);
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
    let i = 0, s = 0, l = e.nodeType === 3 ? e.parentElement : e;
    const r = this.getParentElement(e, this.isWysiwygDiv.bind(this));
    for (; l && !this.hasClass(l, "se-container") && l !== r; )
      i += l.offsetLeft, s += l.offsetTop, l = l.offsetParent;
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
    const l = (e > i ? e : i) - (t < s ? t : s);
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
    for (let s = 0, l = t.length; s < l; s++) {
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
    return t || (t = (function(l) {
      if (l === i || this.isComponent(l)) return !1;
      const r = l.textContent.trim();
      return r.length === 0 || /^(\n|\u200B)+$/.test(r);
    }).bind(this)), function l(r) {
      if (!ae.isWysiwygDiv(r)) {
        const c = r.parentNode;
        c && t(r) && (s = {
          sc: r.previousElementSibling,
          ec: r.nextElementSibling
        }, ae.removeItem(r), l(c));
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
    let s, l;
    if (i) {
      s = i.cloneNode(!1), l = i.childNodes;
      const c = this.getPositionIndex(e);
      for (; l[c]; )
        s.appendChild(l[c]);
    } else
      s = e;
    let r;
    if (t)
      r = this.getListChildren(s, (function(c) {
        return this.isListCell(c) && !c.previousElementSibling;
      }).bind(this));
    else {
      const c = this.getElementDepth(e) + 2;
      r = this.getListChildren(e, (function(f) {
        return this.isListCell(f) && !f.previousElementSibling && this.getElementDepth(f) === c;
      }).bind(this));
    }
    for (let c = 0, f = r.length; c < f; c++)
      this._deleteNestedList(r[c]);
    return i && (i.parentNode.insertBefore(s, i.nextSibling), l && l.length === 0 && this.removeItem(i)), s === e ? s.parentNode : s;
  },
  /**
   * @description Sub function of util.detachNestedList method.
   * @private
   */
  _deleteNestedList: function(e) {
    const t = e.parentNode;
    let i = t, s = i.parentNode, l, r, c, f, n;
    for (; this.isListCell(s); ) {
      for (f = this.getPositionIndex(e), l = s.nextElementSibling, r = s.parentNode, c = i; c; ) {
        if (i = i.nextSibling, this.isList(c)) {
          for (n = c.childNodes; n[f]; )
            r.insertBefore(n[f], l);
          n.length === 0 && this.removeItem(c);
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
      let S = this.getPositionIndex(t);
      const E = e.cloneNode(!1), A = e.cloneNode(!1);
      for (let o = 0, a = C.length; o < a; o++) {
        if (o < S) E.appendChild(C[o]);
        else if (o > S) A.appendChild(C[o]);
        else continue;
        o--, a--, S--;
      }
      return E.childNodes.length > 0 && e.parentNode.insertBefore(E, e), A.childNodes.length > 0 && e.parentNode.insertBefore(A, e.nextElementSibling), e;
    }
    const s = e.parentNode;
    let l = 0, r = 1, c = !0, f, n, b;
    if ((!i || i < 0) && (i = 0), e.nodeType === 3) {
      if (l = this.getPositionIndex(e), t >= 0 && e.length !== t) {
        e.splitText(t);
        const C = this.getNodeFromPath([l + 1], s);
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
      for (l = this.getPositionIndex(u) + r, u = u.parentNode, b = f, f = u.cloneNode(!1), n = u.childNodes, b && (this.isListCell(f) && this.isList(b) && b.firstElementChild ? (f.innerHTML = b.firstElementChild.innerHTML, ae.removeItem(b.firstElementChild), b.children.length > 0 && f.appendChild(b)) : f.appendChild(b)); n[l]; )
        f.appendChild(n[l]);
    u.childNodes.length <= 1 && (!u.firstChild || u.firstChild.textContent.length === 0) && (u.innerHTML = "<br>");
    const g = u.parentNode;
    return c && (u = u.nextSibling), f ? (this.mergeSameTags(f, null, !1), this.mergeNestedTags(f, (function(C) {
      return this.isList(C);
    }).bind(this)), f.childNodes.length > 0 ? g.insertBefore(f, u) : f = u, this.isListCell(f) && f.children && this.isList(f.children[0]) && f.insertBefore(this.createElement("BR"), f.children[0]), s.childNodes.length === 0 && this.removeItem(s), f) : u;
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
    const s = this, l = t ? t.length : 0;
    let r = null;
    return l && (r = this._w.Array.apply(null, new this._w.Array(l)).map(this._w.Number.prototype.valueOf, 0)), function c(f, n, b) {
      const u = f.childNodes;
      for (let g = 0, C = u.length, S, E; g < C && (S = u[g], E = u[g + 1], !!S); g++) {
        if (i && s._isIgnoreNodeChange(S) || !i && (s.isTable(S) || s.isListCell(S) || s.isFormatElement(S) && !s.isFreeFormatElement(S))) {
          (s.isTable(S) || s.isListCell(S)) && c(S, n + 1, g);
          continue;
        }
        if (C === 1 && f.nodeName === S.nodeName && f.parentNode) {
          if (l) {
            let A, o, a, d, h;
            for (let v = 0; v < l; v++)
              if (A = t[v], A && A[n] === g) {
                for (o = S, a = f, d = n, h = !0; d >= 0; ) {
                  if (s.getArrayIndex(a.childNodes, o) !== A[d]) {
                    h = !1;
                    break;
                  }
                  o = S.parentNode, a = o.parentNode, d--;
                }
                h && (A.splice(n, 1), A[n] = g);
              }
          }
          s.copyTagAttributes(S, f), f.parentNode.insertBefore(S, f), s.removeItem(f);
        }
        if (!E) {
          S.nodeType === 1 && c(S, n + 1, g);
          break;
        }
        if (S.nodeName === E.nodeName && s.isSameAttributes(S, E) && S.href === E.href) {
          const A = S.childNodes;
          let o = 0;
          for (let v = 0, m = A.length; v < m; v++)
            A[v].textContent.length > 0 && o++;
          const a = S.lastChild, d = E.firstChild;
          let h = 0;
          if (a && d) {
            const v = a.nodeType === 3 && d.nodeType === 3;
            h = a.textContent.length;
            let m = a.previousSibling;
            for (; m && m.nodeType === 3; )
              h += m.textContent.length, m = m.previousSibling;
            if (o > 0 && a.nodeType === 3 && d.nodeType === 3 && (a.textContent.length > 0 || d.textContent.length > 0) && o--, l) {
              let p = null;
              for (let _ = 0; _ < l; _++)
                if (p = t[_], p && p[n] > g) {
                  if (n > 0 && p[n - 1] !== b) continue;
                  p[n] -= 1, p[n + 1] >= 0 && p[n] === g && (p[n + 1] += o, v && a && a.nodeType === 3 && d && d.nodeType === 3 && (r[_] += h));
                }
            }
          }
          if (S.nodeType === 3) {
            if (h = S.textContent.length, S.textContent += E.textContent, l) {
              let v = null;
              for (let m = 0; m < l; m++)
                if (v = t[m], v && v[n] > g) {
                  if (n > 0 && v[n - 1] !== b) continue;
                  v[n] -= 1, v[n + 1] >= 0 && v[n] === g && (v[n + 1] += o, r[m] += h);
                }
            }
          } else
            S.innerHTML += E.innerHTML;
          s.removeItem(E), g--;
        } else S.nodeType === 1 && c(S, n + 1, g);
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
      let l = s.children;
      if (l.length === 1 && l[0].nodeName === s.nodeName && t(s)) {
        const r = l[0];
        for (l = r.children; l[0]; )
          s.appendChild(l[0]);
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
    t && (t = s.getParentElement(t, function(l) {
      return e === l.parentElement;
    })), function l(r) {
      if (s._notTextNode(r) || r === t || s.isNonEditable(r)) return 0;
      if (r !== e && s.onlyZeroWidthSpace(r.textContent) && (!r.firstChild || !s.isBreak(r.firstChild)) && !r.querySelector(s._allowedEmptyNodeList)) {
        if (r.parentNode)
          return r.parentNode.removeChild(r), -1;
      } else {
        const c = r.children;
        for (let f = 0, n = c.length, b = 0; f < n; f++)
          !c[f + b] || s.isComponent(c[f + b]) || (b += l(c[f + b]));
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
    e.sort((function(l, r) {
      return !this.isListCell(l) || !this.isListCell(r) ? 0 : (l = this.getElementDepth(l), r = this.getElementDepth(r), l > r ? i : l < r ? s : 0);
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
    const l = [], r = [], c = [], f = [], n = this.getListChildNodes(e, (function(u) {
      if (u.nodeType !== 1)
        return this.isList(u.parentElement) && l.push(u), !1;
      if (i.test(u.nodeName) || !t.test(u.nodeName) && u.childNodes.length === 0 && this.isNotCheckingNode(u))
        return l.push(u), !1;
      const g = !this.getParentElement(u, this.isNotCheckingNode);
      if (!this.isTable(u) && !this.isListCell(u) && !this.isAnchor(u) && (this.isFormatElement(u) || this.isRangeFormatElement(u) || this.isTextStyleElement(u)) && u.childNodes.length === 0 && g)
        return r.push(u), !1;
      if (this.isList(u.parentNode) && !this.isList(u) && !this.isListCell(u))
        return c.push(u), !1;
      if (this.isCell(u)) {
        const S = u.firstElementChild;
        if (!this.isFormatElement(S) && !this.isRangeFormatElement(S) && !this.isComponent(S))
          return f.push(u), !1;
      }
      if (g && u.className) {
        const S = new this._w.Array(u.classList).map(s).join(" ").trim();
        S ? u.className = S : u.removeAttribute("class");
      }
      return u.parentNode !== e && g && (this.isListCell(u) && !this.isList(u.parentNode) || (this.isFormatElement(u) || this.isComponent(u)) && !this.isRangeFormatElement(u.parentNode) && !this.getParentElement(u, this.isComponent));
    }).bind(this));
    for (let u = 0, g = l.length; u < g; u++)
      this.removeItem(l[u]);
    const b = [];
    for (let u = 0, g = n.length, C, S; u < g; u++)
      if (C = n[u], S = C.parentNode, !(!S || !S.parentNode))
        if (this.getParentElement(C, this.isListCell)) {
          const E = C.childNodes;
          for (let A = E.length - 1; g >= 0; A--)
            S.insertBefore(C, E[A]);
          b.push(C);
        } else
          S.parentNode.insertBefore(C, S), b.push(S);
    for (let u = 0, g = b.length, C; u < g; u++)
      C = b[u], this.onlyZeroWidthSpace(C.textContent.trim()) && this.removeItem(C);
    for (let u = 0, g = r.length; u < g; u++)
      this.removeItem(r[u]);
    for (let u = 0, g = c.length, C, S, E, A; u < g; u++)
      if (C = c[u], A = C.parentNode, !!A)
        if (S = this.createElement("LI"), this.isFormatElement(C)) {
          for (E = C.childNodes; E[0]; )
            S.appendChild(E[0]);
          A.insertBefore(S, C), this.removeItem(C);
        } else
          C = C.nextSibling, S.appendChild(c[u]), A.insertBefore(S, C);
    for (let u = 0, g = f.length, C, S; u < g; u++)
      C = f[u], S = this.createElement("DIV"), S.innerHTML = C.textContent.trim().length === 0 && C.children.length === 0 ? "<br>" : C.innerHTML, C.innerHTML = S.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let i = "";
    e.height && (i += "height:" + e.height + ";"), e.minHeight && (i += "min-height:" + e.minHeight + ";"), e.maxHeight && (i += "max-height:" + e.maxHeight + ";"), e.position && (i += "position:" + e.position + ";"), e.width && (i += "width:" + e.width + ";"), e.minWidth && (i += "min-width:" + e.minWidth + ";"), e.maxWidth && (i += "max-width:" + e.maxWidth + ";");
    let s = "", l = "", r = "";
    t = i + t;
    const c = t.split(";");
    for (let f = 0, n = c.length, b; f < n; f++)
      if (b = c[f].trim(), !!b) {
        if (/^(min-|max-)?width\s*:/.test(b) || /^(z-index|position)\s*:/.test(b)) {
          s += b + ";";
          continue;
        }
        if (/^(min-|max-)?height\s*:/.test(b)) {
          /^height/.test(b) && b.split(":")[1].trim() === "auto" && (e.height = "auto"), l += b + ";";
          continue;
        }
        r += b + ";";
      }
    return {
      top: s,
      frame: l,
      editor: r
    };
  },
  _setIframeDocument: function(e, t) {
    e.setAttribute("scrolling", "auto"), e.contentDocument.head.innerHTML = '<meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">' + this._setIframeCssTags(t), e.contentDocument.body.className = t._editableClass, e.contentDocument.body.setAttribute("contenteditable", !0), e.contentDocument.body.setAttribute("autocorrect", "off");
  },
  _setIframeCssTags: function(e) {
    const t = e.iframeCSSFileName, i = this._w.RegExp;
    let s = "";
    for (let l = 0, r = t.length, c; l < r; l++) {
      if (c = [], /(^https?:\/\/)|(^data:text\/css,)/.test(t[l]))
        c.push(t[l]);
      else {
        const f = new i("(^|.*[\\/])" + t[l] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let n = document.getElementsByTagName("link"), b = 0, u = n.length, g; b < u; b++)
          g = n[b].href.match(f), g && c.push(g[0]);
      }
      if (!c || c.length === 0) throw '[SUNEDITOR.constructor.iframe.fail] The suneditor CSS files installation path could not be automatically detected. Please set the option property "iframeCSSFileName" before creating editor instances.';
      for (let f = 0, n = c.length; f < n; f++)
        s += '<link href="' + c[f] + '" rel="stylesheet">';
    }
    return s + (e.height === "auto" ? `<style>
/** Iframe height auto */
body{height: min-content; overflow: hidden;}
</style>` : "");
  }
}, Dt = {
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
    const l = i.createElement("DIV");
    l.className = "se-container";
    const r = this._createToolBar(i, t.buttonList, t.plugins, t), c = r.element.cloneNode(!1);
    c.className += " se-toolbar-shadow", r.element.style.visibility = "hidden", r.pluginCallButtons.math && this._checkKatexMath(t.katex);
    const f = i.createElement("DIV");
    f.className = "se-arrow";
    const n = i.createElement("DIV");
    n.className = "se-toolbar-sticky-dummy";
    const b = i.createElement("DIV");
    b.className = "se-wrapper";
    const u = this._initElements(t, s, r.element, f), g = u.bottomBar, C = u.wysiwygFrame, S = u.placeholder;
    let E = u.codeView;
    const A = g.resizingBar, o = g.navigation, a = g.charWrapper, d = g.charCounter, h = i.createElement("DIV");
    h.className = "se-loading-box sun-editor-common", h.innerHTML = '<div class="se-loading-effect"></div>';
    const v = i.createElement("DIV");
    v.className = "se-line-breaker", v.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
    const m = i.createElement("DIV");
    m.className += "se-line-breaker-component";
    const p = m.cloneNode(!0);
    m.innerHTML = p.innerHTML = t.icons.line_break;
    const _ = i.createElement("DIV");
    _.className = "se-resizing-back";
    const w = i.createElement("INPUT");
    w.tabIndex = -1, w.style.cssText = "position: fixed !important; top: -10000px !important; display: block !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;";
    const y = t.toolbarContainer;
    y && (y.appendChild(r.element), y.appendChild(c));
    const x = t.resizingBarContainer;
    return A && x && x.appendChild(A), b.appendChild(E), S && b.appendChild(S), y || (l.appendChild(r.element), l.appendChild(c)), l.appendChild(n), l.appendChild(b), l.appendChild(_), l.appendChild(h), l.appendChild(v), l.appendChild(m), l.appendChild(p), l.appendChild(w), A && !x && l.appendChild(A), s.appendChild(l), E = this._checkCodeMirror(t, E), {
      constructed: {
        _top: s,
        _relative: l,
        _toolBar: r.element,
        _toolbarShadow: c,
        _menuTray: r._menuTray,
        _editorArea: b,
        _wysiwygArea: C,
        _codeArea: E,
        _placeholder: S,
        _resizingBar: A,
        _navigation: o,
        _charWrapper: a,
        _charCounter: d,
        _loading: h,
        _lineBreaker: v,
        _lineBreaker_t: m,
        _lineBreaker_b: p,
        _resizeBack: _,
        _stickyDummy: n,
        _arrow: f,
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
      }, e.codeMirror.options || {}].reduce(function(l, r) {
        for (let c in r)
          ae.hasOwn(r, c) && (l[c] = r[c]);
        return l;
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
      for (let l in s)
        ae.hasOwn(s, l) && (i[l] = s[l]);
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
    const s = t.element, l = s.relative, r = s.editorArea, c = e.toolbarContainer && e.toolbarContainer !== i.toolbarContainer, f = e.lang !== i.lang || e.buttonList !== i.buttonList || e.mode !== i.mode || c, n = this._createToolBar(document, f ? e.buttonList : i.buttonList, e.plugins, e);
    n.pluginCallButtons.math && this._checkKatexMath(e.katex);
    const b = document.createElement("DIV");
    b.className = "se-arrow", f && (n.element.style.visibility = "hidden", c ? (e.toolbarContainer.appendChild(n.element), s.toolbar.parentElement.removeChild(s.toolbar)) : s.toolbar.parentElement.replaceChild(n.element, s.toolbar), s.toolbar = n.element, s._menuTray = n._menuTray, s._arrow = b);
    const u = this._initElements(e, s.topArea, f ? n.element : s.toolbar, b), g = u.bottomBar, C = u.wysiwygFrame, S = u.placeholder;
    let E = u.codeView;
    return s.resizingBar && ae.removeItem(s.resizingBar), g.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== i.resizingBarContainer ? e.resizingBarContainer.appendChild(g.resizingBar) : l.appendChild(g.resizingBar)), r.innerHTML = "", r.appendChild(E), S && r.appendChild(S), E = this._checkCodeMirror(e, E), s.resizingBar = g.resizingBar, s.navigation = g.navigation, s.charWrapper = g.charWrapper, s.charCounter = g.charCounter, s.wysiwygFrame = C, s.code = E, s.placeholder = S, e.rtl ? ae.addClass(s.topArea, "se-rtl") : ae.removeClass(s.topArea, "se-rtl"), {
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
  _initElements: function(e, t, i, s) {
    t.style.cssText = e._editorStyles.top, /inline/i.test(e.mode) ? (i.className += " se-toolbar-inline", i.style.width = e.toolbarWidth) : /balloon/i.test(e.mode) && (i.className += " se-toolbar-balloon", i.style.width = e.toolbarWidth, i.appendChild(s));
    const l = document.createElement(e.iframe ? "IFRAME" : "DIV");
    if (l.className = "se-wrapper-inner se-wrapper-wysiwyg", e.iframe)
      l.allowFullscreen = !0, l.frameBorder = 0, l.style.cssText = e._editorStyles.frame, l.className += e.className;
    else {
      l.setAttribute("contenteditable", !0), l.setAttribute("autocorrect", "off"), l.setAttribute("scrolling", "auto");
      for (let g in e.iframeAttributes)
        l.setAttribute(g, e.iframeAttributes[g]);
      l.className += " " + e._editableClass, l.style.cssText = e._editorStyles.frame + e._editorStyles.editor, l.className += e.className;
    }
    const r = document.createElement("TEXTAREA");
    r.className = "se-wrapper-inner se-wrapper-code" + e.className, r.style.cssText = e._editorStyles.frame, r.style.display = "none", e.height === "auto" && (r.style.overflow = "hidden");
    let c = null, f = null, n = null, b = null;
    if (e.resizingBar && (c = document.createElement("DIV"), c.className = "se-resizing-bar sun-editor-common", f = document.createElement("DIV"), f.className = "se-navigation sun-editor-common", c.appendChild(f), e.charCounter)) {
      if (n = document.createElement("DIV"), n.className = "se-char-counter-wrapper", e.charCounterLabel) {
        const g = document.createElement("SPAN");
        g.className = "se-char-label", g.textContent = e.charCounterLabel, n.appendChild(g);
      }
      if (b = document.createElement("SPAN"), b.className = "se-char-counter", b.textContent = "0", n.appendChild(b), e.maxCharCount > 0) {
        const g = document.createElement("SPAN");
        g.textContent = " / " + e.maxCharCount, n.appendChild(g);
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
      const r = t.plugins, c = r.length ? r : Object.keys(r).map(function(f) {
        return r[f];
      });
      for (let f = 0, n = c.length, b; f < n; f++)
        b = c[f].default || c[f], i[b.name] = b;
    }
    t.plugins = i, t.strictMode = t.strictMode !== !1, t.lang = t.lang || St, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new ae._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
    const s = t.textTags = [{ bold: "STRONG", underline: "U", italic: "EM", strike: "DEL", sub: "SUB", sup: "SUP" }, t.textTags || {}].reduce(function(r, c) {
      for (let f in c)
        r[f] = c[f];
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
    const l = "br|p|div|pre|blockquote|h1|h2|h3|h4|h5|h6|ol|ul|li|hr|figure|figcaption|img|iframe|audio|video|source|table|thead|tbody|tr|th|td|a|b|strong|var|i|em|u|ins|s|span|strike|del|sub|sup|code|svg|path|details|summary";
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : l) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? ae.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? ae.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? ae.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
      { text: "1", value: "1em" },
      { text: "1.5", value: "1.5em" },
      { text: "2", value: "2em" },
      { text: "2.5", value: "2.5em" }
    ], t.position = typeof t.position == "string" ? t.position : null, t.display = t.display || (e.style.display === "none" || !e.style.display ? "block" : e.style.display), t.popupDisplay = t.popupDisplay || "full", t.resizingBar = t.resizingBar === void 0 ? !/inline|balloon/i.test(t.mode) : t.resizingBar, t.showPathLabel = t.resizingBar ? typeof t.showPathLabel == "boolean" ? t.showPathLabel : !0 : !1, t.resizeEnable = t.resizeEnable === void 0 ? !0 : !!t.resizeEnable, t.resizingBarContainer = typeof t.resizingBarContainer == "string" ? document.querySelector(t.resizingBarContainer) : t.resizingBarContainer, t.charCounter = t.maxCharCount > 0 ? !0 : typeof t.charCounter == "boolean" ? t.charCounter : !1, t.charCounterType = typeof t.charCounterType == "string" ? t.charCounterType : "char", t.charCounterLabel = typeof t.charCounterLabel == "string" ? t.charCounterLabel.trim() : null, t.maxCharCount = ae.isNumber(t.maxCharCount) && t.maxCharCount > -1 ? t.maxCharCount * 1 : null, t.width = t.width ? ae.isNumber(t.width) ? t.width + "px" : t.width : e.clientWidth ? e.clientWidth + "px" : "100%", t.minWidth = (ae.isNumber(t.minWidth) ? t.minWidth + "px" : t.minWidth) || "", t.maxWidth = (ae.isNumber(t.maxWidth) ? t.maxWidth + "px" : t.maxWidth) || "", t.height = t.height ? ae.isNumber(t.height) ? t.height + "px" : t.height : e.clientHeight ? e.clientHeight + "px" : "auto", t.minHeight = (ae.isNumber(t.minHeight) ? t.minHeight + "px" : t.minHeight) || "", t.maxHeight = (ae.isNumber(t.maxHeight) ? t.maxHeight + "px" : t.maxHeight) || "", t.className = typeof t.className == "string" && t.className.length > 0 ? " " + t.className : "", t.defaultStyle = typeof t.defaultStyle == "string" ? t.defaultStyle : "", t.font = t.font ? t.font : ["Arial", "Comic Sans MS", "Courier New", "Impact", "Georgia", "tahoma", "Trebuchet MS", "Verdana"], t.fontSize = t.fontSize ? t.fontSize : null, t.formats = t.formats ? t.formats : null, t.colorList = t.colorList ? t.colorList : null, t.lineHeights = t.lineHeights ? t.lineHeights : null, t.paragraphStyles = t.paragraphStyles ? t.paragraphStyles : null, t.textStyles = t.textStyles ? t.textStyles : null, t.fontSizeUnit = typeof t.fontSizeUnit == "string" && t.fontSizeUnit.trim().toLowerCase() || "px", t.alignItems = typeof t.alignItems == "object" ? t.alignItems : t.rtl ? ["right", "center", "left", "justify"] : ["left", "center", "right", "justify"], t.imageResizing = t.imageResizing === void 0 ? !0 : t.imageResizing, t.imageHeightShow = t.imageHeightShow === void 0 ? !0 : !!t.imageHeightShow, t.imageAlignShow = t.imageAlignShow === void 0 ? !0 : !!t.imageAlignShow, t.imageWidth = t.imageWidth ? ae.isNumber(t.imageWidth) ? t.imageWidth + "px" : t.imageWidth : "auto", t.imageHeight = t.imageHeight ? ae.isNumber(t.imageHeight) ? t.imageHeight + "px" : t.imageHeight : "auto", t.imageSizeOnlyPercentage = !!t.imageSizeOnlyPercentage, t._imageSizeUnit = t.imageSizeOnlyPercentage ? "%" : "px", t.imageRotation = t.imageRotation !== void 0 ? t.imageRotation : !(t.imageSizeOnlyPercentage || !t.imageHeightShow), t.imageFileInput = t.imageFileInput === void 0 ? !0 : t.imageFileInput, t.imageUrlInput = t.imageUrlInput === void 0 || !t.imageFileInput ? !0 : t.imageUrlInput, t.imageUploadHeader = t.imageUploadHeader || null, t.imageUploadUrl = typeof t.imageUploadUrl == "string" ? t.imageUploadUrl : null, t.imageUploadSizeLimit = /\d+/.test(t.imageUploadSizeLimit) ? ae.getNumber(t.imageUploadSizeLimit, 0) : null, t.imageMultipleFile = !!t.imageMultipleFile, t.imageAccept = typeof t.imageAccept != "string" || t.imageAccept.trim() === "*" ? "image/*" : t.imageAccept.trim() || "image/*", t.imageGalleryUrl = typeof t.imageGalleryUrl == "string" ? t.imageGalleryUrl : null, t.imageGalleryHeader = t.imageGalleryHeader || null, t.videoResizing = t.videoResizing === void 0 ? !0 : t.videoResizing, t.videoHeightShow = t.videoHeightShow === void 0 ? !0 : !!t.videoHeightShow, t.videoAlignShow = t.videoAlignShow === void 0 ? !0 : !!t.videoAlignShow, t.videoRatioShow = t.videoRatioShow === void 0 ? !0 : !!t.videoRatioShow, t.videoWidth = !t.videoWidth || !ae.getNumber(t.videoWidth, 0) ? "" : ae.isNumber(t.videoWidth) ? t.videoWidth + "px" : t.videoWidth, t.videoHeight = !t.videoHeight || !ae.getNumber(t.videoHeight, 0) ? "" : ae.isNumber(t.videoHeight) ? t.videoHeight + "px" : t.videoHeight, t.videoSizeOnlyPercentage = !!t.videoSizeOnlyPercentage, t._videoSizeUnit = t.videoSizeOnlyPercentage ? "%" : "px", t.videoRotation = t.videoRotation !== void 0 ? t.videoRotation : !(t.videoSizeOnlyPercentage || !t.videoHeightShow), t.videoRatio = ae.getNumber(t.videoRatio, 4) || 0.5625, t.videoRatioList = t.videoRatioList ? t.videoRatioList : null, t.youtubeQuery = (t.youtubeQuery || "").replace("?", ""), t.vimeoQuery = (t.vimeoQuery || "").replace("?", ""), t.videoFileInput = !!t.videoFileInput, t.videoUrlInput = t.videoUrlInput === void 0 || !t.videoFileInput ? !0 : t.videoUrlInput, t.videoUploadHeader = t.videoUploadHeader || null, t.videoUploadUrl = typeof t.videoUploadUrl == "string" ? t.videoUploadUrl : null, t.videoUploadSizeLimit = /\d+/.test(t.videoUploadSizeLimit) ? ae.getNumber(t.videoUploadSizeLimit, 0) : null, t.videoMultipleFile = !!t.videoMultipleFile, t.videoTagAttrs = t.videoTagAttrs || null, t.videoIframeAttrs = t.videoIframeAttrs || null, t.videoAccept = typeof t.videoAccept != "string" || t.videoAccept.trim() === "*" ? "video/*" : t.videoAccept.trim() || "video/*", t.audioWidth = t.audioWidth ? ae.isNumber(t.audioWidth) ? t.audioWidth + "px" : t.audioWidth : "", t.audioHeight = t.audioHeight ? ae.isNumber(t.audioHeight) ? t.audioHeight + "px" : t.audioHeight : "", t.audioFileInput = !!t.audioFileInput, t.audioUrlInput = t.audioUrlInput === void 0 || !t.audioFileInput ? !0 : t.audioUrlInput, t.audioUploadHeader = t.audioUploadHeader || null, t.audioUploadUrl = typeof t.audioUploadUrl == "string" ? t.audioUploadUrl : null, t.audioUploadSizeLimit = /\d+/.test(t.audioUploadSizeLimit) ? ae.getNumber(t.audioUploadSizeLimit, 0) : null, t.audioMultipleFile = !!t.audioMultipleFile, t.audioTagAttrs = t.audioTagAttrs || null, t.audioAccept = typeof t.audioAccept != "string" || t.audioAccept.trim() === "*" ? "audio/*" : t.audioAccept.trim() || "audio/*", t.tableCellControllerPosition = typeof t.tableCellControllerPosition == "string" ? t.tableCellControllerPosition.toLowerCase() : "cell", t.linkTargetNewWindow = !!t.linkTargetNewWindow, t.linkProtocol = typeof t.linkProtocol == "string" ? t.linkProtocol : null, t.linkRel = Array.isArray(t.linkRel) ? t.linkRel : [], t.linkRelDefault = t.linkRelDefault || {}, t.tabDisable = !!t.tabDisable, t.shortcutsDisable = Array.isArray(t.shortcutsDisable) ? t.shortcutsDisable : [], t.shortcutsHint = t.shortcutsHint === void 0 ? !0 : !!t.shortcutsHint, t.callBackSave = t.callBackSave ? t.callBackSave : null, t.templates = t.templates ? t.templates : null, t.placeholder = typeof t.placeholder == "string" ? t.placeholder : null, t.mediaAutoSelect = t.mediaAutoSelect === void 0 ? !0 : !!t.mediaAutoSelect, t.buttonList = t.buttonList ? t.buttonList : [
      ["undo", "redo"],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"]
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? pi : [pi, t.icons].reduce(function(r, c) {
      for (let f in c)
        ae.hasOwn(c, f) && (r[f] = c[f]);
      return r;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(r, c) {
      for (let f in c)
        ae.hasOwn(c, f) && (r[f] = c[f]);
      return r;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = ae._setDefaultOptionStyle(t, t.defaultStyle);
  },
  _setWhitelist: function(e, t) {
    if (typeof t != "string") return e;
    t = t.split("|"), e = e.split("|");
    for (let i = 0, s = t.length, l; i < s; i++)
      l = e.indexOf(t[i]), l > -1 && e.splice(l, 1);
    return e.join("|");
  },
  /**
   * @description Suneditor's Default button list
   * @param {Object} options options
   * @private
   */
  _defaultButtons: function(e) {
    const t = e.icons, i = e.lang, s = ae.isOSX_IOS ? "⌘" : "CTRL", l = ae.isOSX_IOS ? "⇧" : "+SHIFT", r = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], c = e.rtl ? ["[", "]"] : ["]", "["], f = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
    return {
      /** default command */
      bold: ["", i.toolbar.bold + '<span class="se-shortcut">' + (r.indexOf("bold") > -1 ? "" : s + '+<span class="se-shortcut-key">B</span>') + "</span>", "bold", "", t.bold],
      underline: ["", i.toolbar.underline + '<span class="se-shortcut">' + (r.indexOf("underline") > -1 ? "" : s + '+<span class="se-shortcut-key">U</span>') + "</span>", "underline", "", t.underline],
      italic: ["", i.toolbar.italic + '<span class="se-shortcut">' + (r.indexOf("italic") > -1 ? "" : s + '+<span class="se-shortcut-key">I</span>') + "</span>", "italic", "", t.italic],
      strike: ["", i.toolbar.strike + '<span class="se-shortcut">' + (r.indexOf("strike") > -1 ? "" : s + l + '+<span class="se-shortcut-key">S</span>') + "</span>", "strike", "", t.strike],
      subscript: ["", i.toolbar.subscript, "SUB", "", t.subscript],
      superscript: ["", i.toolbar.superscript, "SUP", "", t.superscript],
      removeFormat: ["", i.toolbar.removeFormat, "removeFormat", "", t.erase],
      indent: ["", i.toolbar.indent + '<span class="se-shortcut">' + (r.indexOf("indent") > -1 ? "" : s + '+<span class="se-shortcut-key">' + c[0] + "</span>") + "</span>", "indent", "", f[0]],
      outdent: ["", i.toolbar.outdent + '<span class="se-shortcut">' + (r.indexOf("indent") > -1 ? "" : s + '+<span class="se-shortcut-key">' + c[1] + "</span>") + "</span>", "outdent", "", f[1]],
      fullScreen: ["se-code-view-enabled se-resizing-enabled", i.toolbar.fullScreen, "fullScreen", "", t.expansion],
      showBlocks: ["", i.toolbar.showBlocks, "showBlocks", "", t.show_blocks],
      codeView: ["se-code-view-enabled se-resizing-enabled", i.toolbar.codeView, "codeView", "", t.code_view],
      undo: ["", i.toolbar.undo + '<span class="se-shortcut">' + (r.indexOf("undo") > -1 ? "" : s + '+<span class="se-shortcut-key">Z</span>') + "</span>", "undo", "", t.undo],
      redo: ["", i.toolbar.redo + '<span class="se-shortcut">' + (r.indexOf("undo") > -1 ? "" : s + '+<span class="se-shortcut-key">Y</span> / ' + s + l + '+<span class="se-shortcut-key">Z</span>') + "</span>", "redo", "", t.redo],
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
    const e = ae.createElement("DIV");
    e.className = "se-btn-module se-btn-module-border";
    const t = ae.createElement("UL");
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
  _createButton: function(e, t, i, s, l, r, c) {
    const f = ae.createElement("LI"), n = ae.createElement("BUTTON"), b = t || i;
    return n.setAttribute("type", "button"), n.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), n.setAttribute("data-command", i), n.setAttribute("data-display", s), n.setAttribute("aria-label", b.replace(/<span .+<\/span>/, "")), n.setAttribute("tabindex", "-1"), l || (l = '<span class="se-icon-text">!</span>'), /^default\./i.test(l) && (l = c[l.replace(/^default\./i, "")]), /^text\./i.test(l) && (l = l.replace(/^text\./i, ""), n.className += " se-btn-more-text"), l += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + b + "</span></span>", r && n.setAttribute("disabled", !0), n.innerHTML = l, f.appendChild(n), {
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
  _createToolBar: function(e, t, i, s) {
    const l = e.createElement("DIV");
    l.className = "se-toolbar-separator-vertical";
    const r = e.createElement("DIV");
    r.className = "se-toolbar sun-editor-common";
    const c = e.createElement("DIV");
    c.className = "se-btn-tray", r.appendChild(c), t = JSON.parse(JSON.stringify(t));
    const f = s.icons, n = this._defaultButtons(s), b = {}, u = [];
    let g = null, C = null, S = null, E = null, A = "", o = !1;
    const a = ae.createElement("DIV");
    a.className = "se-toolbar-more-layer";
    e:
      for (let v = 0, m, p, _, w, y; v < t.length; v++)
        if (m = !1, y = "", w = t[v], S = this._createModuleGroup(), typeof w == "object") {
          for (let x = 0, M; x < w.length; x++) {
            if (C = w[x], M = !1, /^\%\d+/.test(C) && x === 0) {
              w[0] = C.replace(/[^\d]/g, ""), u.push(w), t.splice(v--, 1);
              continue e;
            }
            if (typeof C == "object")
              typeof C.add == "function" ? (A = C.name, g = n[A], i[A] = C) : (A = C.name, g = [C.buttonClass, C.title, C.name, C.dataDisplay, C.innerHTML, C._disabled]);
            else {
              if (/^\-/.test(C)) {
                y = C.substr(1), S.div.className += " module-float-" + y;
                continue;
              }
              if (/^\#/.test(C)) {
                C.substr(1) === "fix" && (S.ul.className += " se-menu-dir-fix");
                continue;
              }
              if (/^\:/.test(C)) {
                M = !0;
                const L = C.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                _ = "__se__" + L[1].trim();
                const T = L[2].trim(), z = L[3].trim();
                g = ["se-btn-more", T, _, "MORE", z];
              } else
                g = n[C];
              if (A = C, !g) {
                const L = i[A];
                if (!L) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + A + "]");
                g = [L.buttonClass, L.title, L.name, L.display, L.innerHTML, L._disabled];
              }
            }
            E = this._createButton(g[0], g[1], g[2], g[3], g[4], g[5], f), (m ? p : S.ul).appendChild(E.li), i[A] && (b[A] = E.button), M && (m = !0, p = ae.createElement("DIV"), p.className = "se-more-layer " + _, p.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (y ? ' style="float: ' + y + ';"' : "") + "></ul></div>", a.appendChild(p), p = p.firstElementChild.firstElementChild);
          }
          if (o) {
            const x = l.cloneNode(!1);
            c.appendChild(x);
          }
          c.appendChild(S.div), o = !0;
        } else if (/^\/$/.test(w)) {
          const x = e.createElement("DIV");
          x.className = "se-btn-module-enter", c.appendChild(x), o = !1;
        }
    switch (c.children.length) {
      case 0:
        c.style.display = "none";
        break;
      case 1:
        ae.removeClass(c.firstElementChild, "se-btn-module-border");
        break;
      default:
        if (s.rtl) {
          const v = l.cloneNode(!1);
          v.style.float = c.lastElementChild.style.float, c.appendChild(v);
        }
    }
    u.length > 0 && u.unshift(t), a.children.length > 0 && c.appendChild(a);
    const d = e.createElement("DIV");
    d.className = "se-menu-tray", r.appendChild(d);
    const h = e.createElement("DIV");
    return h.className = "se-toolbar-cover", r.appendChild(h), s.hideToolbar && (r.style.display = "none"), {
      element: r,
      plugins: i,
      pluginCallButtons: b,
      responsiveButtons: u,
      _menuTray: d,
      _buttonTray: c
    };
  }
}, Ht = function(e, t, i) {
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
function Cs(e, t) {
  const i = e._w, s = e.util, l = e.options.historyStackDelayTime;
  let r = e.context.element, c = e.context.tool.undo, f = e.context.tool.redo, n = null, b = 0, u = [];
  function g() {
    const S = u[b];
    r.wysiwyg.innerHTML = S.contents, e.setRange(s.getNodeFromPath(S.s.path, r.wysiwyg), S.s.offset, s.getNodeFromPath(S.e.path, r.wysiwyg), S.e.offset), e.focus(), u.length <= 1 ? (c && c.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0)) : b === 0 ? (c && c.setAttribute("disabled", !0), f && f.removeAttribute("disabled")) : b === u.length - 1 ? (c && c.removeAttribute("disabled"), f && f.setAttribute("disabled", !0)) : (c && c.removeAttribute("disabled"), f && f.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function C() {
    e._checkComponents();
    const S = r.wysiwyg.innerHTML;
    if (!S || u[b] && S === u[b].contents) return;
    b++;
    const E = e._variable._range;
    u.length > b && (u = u.slice(0, b), f && f.setAttribute("disabled", !0)), E ? u[b] = {
      contents: S,
      s: {
        path: s.getNodePath(E.startContainer, null, null),
        offset: E.startOffset
      },
      e: {
        path: s.getNodePath(E.endContainer, null, null),
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
        C();
        return;
      }
      n = i.setTimeout(function() {
        i.clearTimeout(n), n = null, C();
      }, E);
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
      u.length - 1 > b && (b++, g());
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(S) {
      b = S < 0 ? u.length - 1 : S, g();
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
      r = e.context.element, c = e.context.tool.undo, f = e.context.tool.redo, b === 0 ? (c && c.setAttribute("disabled", !0), f && b === u.length - 1 && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : b === u.length - 1 && f && f.setAttribute("disabled", !0);
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
const mi = {
  name: "notice",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    const t = e.context;
    t.notice = {};
    let i = e.util.createElement("DIV"), s = e.util.createElement("SPAN"), l = e.util.createElement("BUTTON");
    i.className = "se-notice", l.className = "close", l.setAttribute("aria-label", "Close"), l.setAttribute("title", e.lang.dialogBox.close), l.innerHTML = e.icons.cancel, i.appendChild(s), i.appendChild(l), t.notice.modal = i, t.notice.message = s, l.addEventListener("click", this.onClick_cancel.bind(e)), t.element.editorArea.appendChild(i), i = null;
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
function ks(e, t, i, s, l, r) {
  const c = e.element.originElement.ownerDocument || document, f = c.defaultView || window, n = ae, b = l.icons, u = {
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
    notice: mi,
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
      const o = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
      for (let a = 0, d, h; a < o.length; a++)
        d = o[a], h = d.getAttribute("data-command"), this.allCommandButtons[h] = d;
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const o = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let a = 0, d, h, v; a < o.length; a++)
          d = o[a], h = d.getAttribute("data-command"), v = this.allCommandButtons[h], v && (d.parentElement.replaceChild(v, d), this.context.tool[h] && (this.context.tool[h] = v));
      }
    },
    /**
     * @description If the plugin is not added, add the plugin and call the 'add' function.
     * If the plugin is added call callBack function.
     * @param {String} pluginName The name of the plugin to call
     * @param {function} callBackFunction Function to be executed immediately after module call
     * @param {Element|null} _target Plugin target button (This is not necessary if you have a button list when creating the editor)
     */
    callPlugin: function(o, a, d) {
      if (d = d || t[o], this.plugins[o])
        this.initPlugins[o] ? typeof this._targetPlugins[o] == "object" && d && this.initMenuTarget(o, d, this._targetPlugins[o]) : (this.plugins[o].add(this, d), this.initPlugins[o] = !0);
      else throw Error('[SUNEDITOR.core.callPlugin.fail] The called plugin does not exist or is in an invalid format. (pluginName:"' + o + '")');
      this.plugins[o].active && !this.commandMap[o] && d && (this.commandMap[o] = d, this.activePlugins.push(o)), typeof a == "function" && a();
    },
    /**
     * @description If the module is not added, add the module and call the 'add' function
     * @param {Array} moduleArray module object's Array [dialog, resizing]
     */
    addModule: function(o) {
      for (let a = 0, d = o.length, h; a < d; a++)
        h = o[a].name, this.plugins[h] || (this.plugins[h] = o[a]), this.initPlugins[h] || (this.initPlugins[h] = !0, typeof this.plugins[h].add == "function" && this.plugins[h].add(this));
    },
    /**
     * @description Gets the current editor-relative scroll offset.
     * @returns {Object} {top, left}
     */
    getGlobalScrollOffset: function() {
      let o = 0, a = 0, d = e.element.topArea;
      for (; d; )
        o += d.scrollTop, a += d.scrollLeft, d = d.parentElement;
      for (d = this._shadowRoot ? this._shadowRoot.host : null; d; )
        o += d.scrollTop, a += d.scrollLeft, d = d.parentElement;
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
    initMenuTarget: function(o, a, d) {
      a ? (e.element._menuTray.appendChild(d), this._targetPlugins[o] = !0, this._menuTray[a.getAttribute("data-command")] = d) : this._targetPlugins[o] = d;
    },
    /**
     * @description Enable submenu
     * @param {Element} element Submenu's button element to call
     */
    submenuOn: function(o) {
      this._bindedSubmenuOff && this._bindedSubmenuOff(), this._bindControllersOff && this.controllersOff();
      const a = this._submenuName = o.getAttribute("data-command"), d = this.submenu = this._menuTray[a];
      this.submenuActiveButton = o, this._setMenuPosition(o, d), this._bindedSubmenuOff = this.submenuOff.bind(this), this.addDocEvent("mousedown", this._bindedSubmenuOff, !1), this.plugins[a].on && this.plugins[a].on.call(this), this._antiBlur = !0;
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
        const o = e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command"));
        o.style.display = "none", n.removeClass(this._moreLayerActiveButton, "on"), this._moreLayerActiveButton = null;
      }
    },
    /**
     * @description Enable container
     * @param {Element} element Container's button element to call
     */
    containerOn: function(o) {
      this._bindedContainerOff && this._bindedContainerOff();
      const a = this._containerName = o.getAttribute("data-command"), d = this.container = this._menuTray[a];
      this.containerActiveButton = o, this._setMenuPosition(o, d), this._bindedContainerOff = this.containerOff.bind(this), this.addDocEvent("mousedown", this._bindedContainerOff, !1), this.plugins[a].on && this.plugins[a].on.call(this), this._antiBlur = !0;
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
    _setMenuPosition: function(o, a) {
      a.style.visibility = "hidden", a.style.display = "block", a.style.height = "", n.addClass(o, "on");
      const d = this.context.element.toolbar, h = d.offsetWidth, v = g._getEditorOffsets(e.element.toolbar), m = a.offsetWidth, p = o.parentElement.offsetLeft + 3;
      if (l.rtl) {
        const z = o.offsetWidth, U = m > z ? m - z : 0, P = U > 0 ? 0 : z - m;
        a.style.left = p - U + P + "px", v.left > g._getEditorOffsets(a).left && (a.style.left = "0px");
      } else {
        const z = h <= m ? 0 : h - (p + m);
        z < 0 ? a.style.left = p + z + "px" : a.style.left = p + "px";
      }
      let _ = 0, w = o;
      for (; w && w !== d; )
        _ += w.offsetTop, w = w.offsetParent;
      const y = _;
      this._isBalloon ? _ += d.offsetTop + o.offsetHeight : _ -= o.offsetHeight;
      const x = v.top, M = a.offsetHeight, L = this.getGlobalScrollOffset().top, T = f.innerHeight - (x - L + y + o.parentElement.offsetHeight);
      if (T < M) {
        let z = -1 * (M - y + 3);
        const U = x - L + z, P = M + (U < 0 ? U : 0);
        P > T ? (a.style.height = P + "px", z = -1 * (P - y + 3)) : (a.style.height = T + "px", z = y + o.parentElement.offsetHeight), a.style.top = z + "px";
      } else
        a.style.top = y + o.parentElement.offsetHeight + "px";
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
          if (!n.hasClass(a, "se-controller")) {
            this.currentControllerTarget = a, this.currentFileComponentInfo = this.getFileComponent(a);
            continue;
          }
          a.style && (a.style.display = "block", this._shadowRoot && this._shadowRootControllerEventTarget.indexOf(a) === -1 && (a.addEventListener("mousedown", function(d) {
            d.preventDefault(), d.stopPropagation();
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
        for (let d = 0; d < a; d++)
          if (typeof this.controllerArray[d].contains == "function" && this.controllerArray[d].contains(o.target)) return;
      }
      if (!(this._fileManager.pluginRegExp.test(this.currentControllerName) && o && o.type === "keydown" && o.keyCode !== 27) && (e.element.lineBreaker_t.style.display = e.element.lineBreaker_b.style.display = "none", this._variable._lineBreakComp = null, this.currentControllerName = "", this.currentControllerTarget = null, this.currentFileComponentInfo = null, this.effectNode = null, !!this._bindControllersOff)) {
        if (this.removeDocEvent("mousedown", this._bindControllersOff), this.removeDocEvent("keydown", this._bindControllersOff), this._bindControllersOff = null, a > 0) {
          for (let d = 0; d < a; d++)
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
    setControllerPosition: function(o, a, d, h) {
      l.rtl && (h.left *= -1);
      const v = n.getOffset(a, e.element.wysiwygFrame);
      o.style.visibility = "hidden", o.style.display = "block";
      const m = d === "top" ? -(o.offsetHeight + 2) : a.offsetHeight + 12;
      o.style.top = v.top + m + h.top + "px";
      const p = v.left - e.element.wysiwygFrame.scrollLeft + h.left, _ = o.offsetWidth, w = a.offsetWidth, y = n.hasClass(o.firstElementChild, "se-arrow") ? o.firstElementChild : null;
      if (l.rtl) {
        const x = _ > w ? _ - w : 0, M = x > 0 ? 0 : w - _;
        o.style.left = p - x + M + "px", x > 0 && y && (y.style.left = (_ - 14 < 10 + x ? _ - 14 : 10 + x) + "px");
        const L = e.element.wysiwygFrame.offsetLeft - o.offsetLeft;
        L > 0 && (o.style.left = "0px", y && (y.style.left = L + "px"));
      } else {
        o.style.left = p + "px";
        const x = e.element.wysiwygFrame.offsetWidth - (o.offsetLeft + _);
        x < 0 ? (o.style.left = o.offsetLeft + x + "px", y && (y.style.left = 20 - x + "px")) : y && (y.style.left = "20px");
      }
      o.style.visibility = "";
    },
    /**
     * @description javascript execCommand
     * @param {String} command javascript execCommand function property
     * @param {Boolean|undefined} showDefaultUI javascript execCommand function property
     * @param {String|undefined} value javascript execCommand function property
     */
    execCommand: function(o, a, d) {
      this._wd.execCommand(o, a, o === "formatBlock" ? "<" + d + ">" : d), this.history.push(!0);
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
      const o = n.getParentElement(this.getSelectionNode(), "figcaption");
      o ? o.focus() : e.element.wysiwyg.focus();
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
            const o = this.getRange();
            if (o.startContainer === o.endContainer && n.isWysiwygDiv(o.startContainer)) {
              const a = o.commonAncestorContainer.children[o.startOffset];
              if (!n.isFormatElement(a) && !n.isComponent(a)) {
                const d = n.createElement(l.defaultTag), h = n.createElement("BR");
                d.appendChild(h), e.element.wysiwyg.insertBefore(d, a), this.setRange(h, 0, h, 0);
                return;
              }
            }
            this.setRange(o.startContainer, o.startOffset, o.endContainer, o.endOffset);
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
    focusEdge: function(o) {
      o || (o = e.element.wysiwyg.lastElementChild);
      const a = this.getFileComponent(o);
      a ? this.selectComponent(a.target, a.pluginName) : o ? (o = n.getChildElement(o, function(d) {
        return d.childNodes.length === 0 || d.nodeType === 3;
      }, !0), o ? this.setRange(o, o.textContent.length, o, o.textContent.length) : this.nativeFocus()) : this.focus();
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
    setRange: function(o, a, d, h) {
      if (!o || !d) return;
      a > o.textContent.length && (a = o.textContent.length), h > d.textContent.length && (h = d.textContent.length), n.isFormatElement(o) && (o = o.childNodes[a] || o.childNodes[a - 1] || o, a = a > 0 ? o.nodeType === 1 ? 1 : o.textContent ? o.textContent.length : 0 : 0), n.isFormatElement(d) && (d = d.childNodes[h] || d.childNodes[h - 1] || d, h = h > 0 ? d.nodeType === 1 ? 1 : d.textContent ? d.textContent.length : 0 : 0);
      const v = this._wd.createRange();
      try {
        v.setStart(o, a), v.setEnd(d, h);
      } catch (p) {
        console.warn("[SUNEDITOR.core.focus.error] " + p), this.nativeFocus();
        return;
      }
      const m = this.getSelection();
      return m.removeAllRanges && m.removeAllRanges(), m.addRange(v), this._rangeInfo(v, this.getSelection()), l.iframe && this.__focus(), v;
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
        const d = a.anchorNode, h = a.focusNode, v = a.anchorOffset, m = a.focusOffset, p = n.compareElements(d, h), _ = p.ancestor && (p.result === 0 ? v <= m : p.result > 1);
        return this.setRange(
          _ ? d : h,
          _ ? v : m,
          _ ? h : d,
          _ ? m : v
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
        const d = e.element.wysiwyg, h = n.createElement(l.defaultTag);
        h.innerHTML = "<br>", d.insertBefore(h, a && a !== d ? a.nextElementSibling : d.firstElementChild), this.setRange(h.firstElementChild, 0, h.firstElementChild, 1), o = this._variable._range;
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
        const o = n.getChildElement(e.element.wysiwyg.firstChild, function(a) {
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
      if (n.isInputElement(o))
        return this._variable._selectionNode = o, o;
      const a = this.getSelection();
      if (!a) return null;
      let d = null;
      a.rangeCount > 0 ? d = a.getRangeAt(0) : d = this._createDefaultRange(), this._rangeInfo(d, a);
    },
    /**
     * @description Set "range" and "selection" info.
     * @param {Object} range range object.
     * @param {Object} selection selection object.
     */
    _rangeInfo: function(o, a) {
      let d = null;
      this._variable._range = o, o.collapsed ? n.isWysiwygDiv(o.commonAncestorContainer) ? d = o.commonAncestorContainer.children[o.startOffset] || o.commonAncestorContainer : d = o.commonAncestorContainer : d = a.extentNode || a.anchorNode, this._variable._selectionNode = d;
    },
    /**
     * @description Return the range object of editor's first child node
     * @returns {Object}
     * @private
     */
    _createDefaultRange: function() {
      const o = e.element.wysiwyg, a = this._wd.createRange();
      let d = o.firstElementChild, h = null;
      return d ? (h = d.firstChild, h || (h = n.createElement("BR"), d.appendChild(h))) : (d = n.createElement(l.defaultTag), h = n.createElement("BR"), d.appendChild(h), o.appendChild(d)), a.setStart(h, 0), a.setEnd(h, 0), a;
    },
    /**
     * @description Returns true if there is no valid "selection".
     * @param {Object} range core.getRange()
     * @returns {Object} range
     * @private
     */
    _selectionVoid: function(o) {
      const a = o.commonAncestorContainer;
      return n.isWysiwygDiv(o.startContainer) && n.isWysiwygDiv(o.endContainer) || /FIGURE/i.test(a.nodeName) || this._fileManager.regExp.test(a.nodeName) || n.isMediaComponent(a);
    },
    /**
     * @description Reset range object to text node selected status.
     * @returns {Boolean} Returns false if there is no valid selection.
     * @private
     */
    _resetRangeToTextNode: function() {
      const o = this.getRange();
      if (this._selectionVoid(o)) return !1;
      let a = o.startContainer, d = o.startOffset, h = o.endContainer, v = o.endOffset, m, p, _;
      if (n.isFormatElement(a))
        for (a.childNodes[d] ? (a = a.childNodes[d] || a, d = 0) : (a = a.lastChild || a, d = a.textContent.length); a && a.nodeType === 1 && a.firstChild; )
          a = a.firstChild || a, d = 0;
      if (n.isFormatElement(h)) {
        for (h = h.childNodes[v] || h.lastChild || h; h && h.nodeType === 1 && h.lastChild; )
          h = h.lastChild;
        v = h.textContent.length;
      }
      if (m = n.isWysiwygDiv(a) ? e.element.wysiwyg.firstChild : a, p = d, n.isBreak(m) || m.nodeType === 1 && m.childNodes.length > 0) {
        const w = n.isBreak(m);
        if (!w) {
          for (; m && !n.isBreak(m) && m.nodeType === 1; )
            m = m.childNodes[p] || m.nextElementSibling || m.nextSibling, p = 0;
          let y = n.getFormatElement(m, null);
          y === n.getRangeFormatElement(y, null) && (y = n.createElement(n.getParentElement(m, n.isCell) ? "DIV" : l.defaultTag), m.parentNode.insertBefore(y, m), y.appendChild(m));
        }
        if (n.isBreak(m)) {
          const y = n.createTextNode(n.zeroWidthSpace);
          m.parentNode.insertBefore(y, m), m = y, w && a === h && (h = m, v = 1);
        }
      }
      if (a = m, d = p, m = n.isWysiwygDiv(h) ? e.element.wysiwyg.lastChild : h, p = v, n.isBreak(m) || m.nodeType === 1 && m.childNodes.length > 0) {
        const w = n.isBreak(m);
        if (!w) {
          for (; m && !n.isBreak(m) && m.nodeType === 1 && (_ = m.childNodes, _.length !== 0); )
            m = _[p > 0 ? p - 1 : p] || !/FIGURE/i.test(_[0].nodeName) ? _[0] : m.previousElementSibling || m.previousSibling || a, p = p > 0 ? m.textContent.length : p;
          let y = n.getFormatElement(m, null);
          y === n.getRangeFormatElement(y, null) && (y = n.createElement(n.isCell(y) ? "DIV" : l.defaultTag), m.parentNode.insertBefore(y, m), y.appendChild(m));
        }
        if (n.isBreak(m)) {
          const y = n.createTextNode(n.zeroWidthSpace);
          m.parentNode.insertBefore(y, m), m = y, p = 1, w && !m.previousSibling && n.removeItem(h);
        }
      }
      return h = m, v = p, this.setRange(a, d, h, v), !0;
    },
    /**
     * @description Returns a "formatElement"(util.isFormatElement) array from the currently selected range.
     * @param {Function|null} validation The validation function. (Replaces the default validation function-util.isFormatElement(current))
     * @returns {Array}
     */
    getSelectedElements: function(o) {
      if (!this._resetRangeToTextNode()) return [];
      let a = this.getRange();
      if (n.isWysiwygDiv(a.startContainer)) {
        const z = e.element.wysiwyg.children;
        if (z.length === 0) return [];
        this.setRange(z[0], 0, z[z.length - 1], z[z.length - 1].textContent.trim().length), a = this.getRange();
      }
      const d = a.startContainer, h = a.endContainer, v = a.commonAncestorContainer, m = n.getListChildren(v, function(z) {
        return o ? o(z) : n.isFormatElement(z);
      });
      if (!n.isWysiwygDiv(v) && !n.isRangeFormatElement(v) && m.unshift(n.getFormatElement(v, null)), d === h || m.length === 1) return m;
      let p = n.getFormatElement(d, null), _ = n.getFormatElement(h, null), w = null, y = null;
      const x = function(z) {
        return n.isTable(z) ? /^TABLE$/i.test(z.nodeName) : !0;
      };
      let M = n.getRangeFormatElement(p, x), L = n.getRangeFormatElement(_, x);
      n.isTable(M) && n.isListCell(M.parentNode) && (M = M.parentNode), n.isTable(L) && n.isListCell(L.parentNode) && (L = L.parentNode);
      const T = M === L;
      for (let z = 0, U = m.length, P; z < U; z++) {
        if (P = m[z], p === P || !T && P === M) {
          w = z;
          continue;
        }
        if (_ === P || !T && P === L) {
          y = z;
          break;
        }
      }
      return w === null && (w = 0), y === null && (y = m.length - 1), m.slice(w, y + 1);
    },
    /**
     * @description Get format elements and components from the selected area. (P, DIV, H[1-6], OL, UL, TABLE..)
     * If some of the component are included in the selection, get the entire that component.
     * @param {Boolean} removeDuplicate If true, if there is a parent and child tag among the selected elements, the child tag is excluded.
     * @returns {Array}
     */
    getSelectedElementsAndComponents: function(o) {
      const a = this.getRange().commonAncestorContainer, d = n.getParentElement(a, n.isComponent), h = n.isTable(a) ? this.getSelectedElements(null) : this.getSelectedElements((function(v) {
        const m = this.getParentElement(v, this.isComponent);
        return this.isFormatElement(v) && (!m || m === d) || this.isComponent(v) && !this.getFormatElement(v);
      }).bind(n));
      if (o) {
        for (let v = 0, m = h.length; v < m; v++)
          for (let p = v - 1; p >= 0; p--)
            if (h[p].contains(h[v])) {
              h.splice(v, 1), v--, m--;
              break;
            }
      }
      return h;
    },
    /**
     * @description Determine if this offset is the edge offset of container
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String|undefined} dir Select check point - Both edge, Front edge or End edge. ("front": Front edge, "end": End edge, undefined: Both edge)
     * @returns {Boolean}
     */
    isEdgePoint: function(o, a, d) {
      return d !== "end" && a === 0 || (!d || d !== "front") && !o.nodeValue && a === 1 || (!d || d === "end") && !!o.nodeValue && a === o.nodeValue.length;
    },
    /**
     * @description Check if the container and offset values are the edges of the format tag
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String} dir Select check point - "front": Front edge, "end": End edge, undefined: Both edge.
     * @returns {Array|null}
     * @private
     */
    _isEdgeFormat: function(o, a, d) {
      if (!this.isEdgePoint(o, a, d)) return !1;
      const h = [];
      for (d = d === "front" ? "previousSibling" : "nextSibling"; o && !n.isFormatElement(o) && !n.isWysiwygDiv(o); )
        if (!o[d] || n.isBreak(o[d]) && !o[d][d])
          o.nodeType === 1 && h.push(o.cloneNode(!1)), o = o.parentNode;
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
    appendFormatTag: function(o, a) {
      if (!o || !o.parentNode) return null;
      const d = n.getFormatElement(this.getSelectionNode(), null);
      let h = null;
      if (!n.isFormatElement(o) && n.isFreeFormatElement(d || o.parentNode))
        h = n.createElement("BR");
      else {
        const v = a ? typeof a == "string" ? a : a.nodeName : n.isFormatElement(d) && !n.isRangeFormatElement(d) && !n.isFreeFormatElement(d) ? d.nodeName : l.defaultTag;
        h = n.createElement(v), h.innerHTML = "<br>", (a && typeof a != "string" || !a && n.isFormatElement(d)) && n.copyTagAttributes(h, a || d, ["id"]);
      }
      return n.isCell(o) ? o.insertBefore(h, o.nextElementSibling) : o.parentNode.insertBefore(h, o.nextElementSibling), h;
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
    insertComponent: function(o, a, d, h) {
      if (this.isReadOnly || d && !this.checkCharCount(o, null))
        return null;
      const v = this.removeNode();
      this.getRange_addLine(this.getRange(), v.container);
      let m = null, p = this.getSelectionNode(), _ = n.getFormatElement(p, null);
      if (n.isListCell(_))
        this.insertNode(o, p === _ ? null : v.container.nextSibling, !1), o.nextSibling || o.parentNode.appendChild(n.createElement("BR"));
      else {
        if (this.getRange().collapsed && (v.container.nodeType === 3 || n.isBreak(v.container))) {
          const w = n.getParentElement(v.container, (function(y) {
            return this.isRangeFormatElement(y);
          }).bind(n));
          m = n.splitElement(v.container, v.offset, w ? n.getElementDepth(w) + 1 : 0), m && (_ = m.previousSibling);
        }
        this.insertNode(o, n.isRangeFormatElement(_) ? null : _, !1), _ && n.onlyZeroWidthSpace(_) && n.removeItem(_);
      }
      if (!h) {
        this.setRange(o, 0, o, 0);
        const w = this.getFileComponent(o);
        w ? this.selectComponent(w.target, w.pluginName) : m && (m = n.getEdgeChildNodes(m, null).sc || m, this.setRange(m, 0, m, 0));
      }
      return a || this.history.push(1), m || o;
    },
    /**
     * @description Gets the file component and that plugin name
     * return: {target, component, pluginName} | null
     * @param {Element} element Target element (figure tag, component div, file tag)
     * @returns {Object|null}
     */
    getFileComponent: function(o) {
      if (!this._fileManager.queryString || !o) return null;
      let a, d;
      return (/^FIGURE$/i.test(o.nodeName) || /se-component/.test(o.className)) && (a = o.querySelector(this._fileManager.queryString)), !a && o.nodeName && this._fileManager.regExp.test(o.nodeName) && (a = o), a && (d = this._fileManager.pluginMap[a.nodeName.toLowerCase()], d) ? {
        target: a,
        component: n.getParentElement(a, n.isComponent),
        pluginName: d
      } : null;
    },
    /**
     * @description The component(image, video) is selected and the resizing module is called.
     * @param {Element} element Element tag (img, iframe, video)
     * @param {String} pluginName Plugin name (image, video)
     */
    selectComponent: function(o, a) {
      if (n.isUneditableComponent(n.getParentElement(o, n.isComponent)) || n.isUneditableComponent(o)) return !1;
      this.hasFocus || this.focus();
      const d = this.plugins[a];
      d && f.setTimeout((function() {
        typeof d.select == "function" && this.callPlugin(a, d.select.bind(this, o), null), this._setComponentLineBreaker(o);
      }).bind(this));
    },
    /**
     * @description Set line breaker of component
     * @param {Element} element Element tag (img, iframe, video)
     * @private
     */
    _setComponentLineBreaker: function(o) {
      this._lineBreaker.style.display = "none";
      const a = n.getParentElement(o, n.isComponent), d = e.element.lineBreaker_t.style, h = e.element.lineBreaker_b.style, v = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : o, m = n.isListCell(a.parentNode);
      let p, _, w;
      (m ? !a.previousSibling : !n.isFormatElement(a.previousElementSibling)) ? (this._variable._lineBreakComp = a, _ = e.element.wysiwyg.scrollTop, p = n.getOffset(o, e.element.wysiwygFrame).top + _, w = v.offsetWidth / 2 / 2, d.top = p - _ - 12 + "px", d.left = n.getOffset(v).left + w + "px", d.display = "block") : d.display = "none", (m ? !a.nextSibling : !n.isFormatElement(a.nextElementSibling)) ? (p || (this._variable._lineBreakComp = a, _ = e.element.wysiwyg.scrollTop, p = n.getOffset(o, e.element.wysiwygFrame).top + _, w = v.offsetWidth / 2 / 2), h.top = p + v.offsetHeight - _ - 12 + "px", h.left = n.getOffset(v).left + v.offsetWidth - w - 24 + "px", h.display = "block") : h.display = "none";
    },
    _checkDuplicateNode: function(o, a) {
      (function d(h) {
        u._dupleCheck(h, a);
        const v = h.childNodes;
        for (let m = 0, p = v.length; m < p; m++)
          d(v[m]);
      })(o);
    },
    _dupleCheck: function(o, a) {
      if (!n.isTextStyleElement(o)) return;
      const d = (o.style.cssText.match(/[^;]+;/g) || []).map(function(m) {
        return m.trim();
      }), h = o.nodeName;
      if (/^span$/i.test(h) && d.length === 0) return o;
      let v = !1;
      return function m(p) {
        if (!(n.isWysiwygDiv(p) || !n.isTextStyleElement(p))) {
          if (p.nodeName === h) {
            v = !0;
            const _ = p.style.cssText.match(/[^;]+;/g) || [];
            for (let w = 0, y = _.length, x; w < y; w++)
              (x = d.indexOf(_[w].trim())) > -1 && d.splice(x, 1);
            for (let w = 0, y = p.classList.length; w < y; w++)
              o.classList.remove(p.classList[w]);
          }
          m(p.parentElement);
        }
      }(a), v && ((o.style.cssText = d.join(" ")) || (o.setAttribute("style", ""), o.removeAttribute("style")), o.attributes.length || o.setAttribute("data-se-duple", "true")), o;
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
    insertNode: function(o, a, d) {
      if (this.isReadOnly || d && !this.checkCharCount(o, null))
        return null;
      let h = null, v = this.getRange(), m = n.isListCell(v.commonAncestorContainer) ? v.commonAncestorContainer : n.getFormatElement(this.getSelectionNode(), null), p = n.isListCell(m) && (n.isListCell(o) || n.isList(o)), _, w, y, x = null;
      const M = n.isFreeFormatElement(m), L = !M && (n.isFormatElement(o) || n.isRangeFormatElement(o)) || n.isComponent(o);
      if (p && (y = a || n.isList(o) ? m.lastChild : m.nextElementSibling, x = n.isList(o) ? m : (y || m).parentNode), !a && (L || n.isComponent(o) || n.isMedia(o))) {
        const F = this.isEdgePoint(v.endContainer, v.endOffset, "end"), R = this.removeNode(), H = R.container, N = H === R.prevContainer && v.collapsed ? null : R.prevContainer;
        if (p && N)
          if (x = N.nodeType === 3 ? N.parentNode : N, x.contains(H)) {
            let O = !0;
            for (y = H; y.parentNode && y.parentNode !== x; )
              y = y.parentNode, O = !1;
            O && H === N && (y = y.nextSibling);
          } else
            y = null;
        else if (p && n.isListCell(H) && !m.parentElement)
          m = n.createElement("LI"), x.appendChild(m), H.appendChild(x), y = null;
        else if (H.nodeType === 3 || n.isBreak(H) || p) {
          const O = n.getParentElement(H, (function(k) {
            return this.isRangeFormatElement(k) || this.isListCell(k);
          }).bind(n));
          if (a = n.splitElement(H, R.offset, O ? n.getElementDepth(O) + 1 : 0), !a)
            y = a = m;
          else if (p) {
            if (m.contains(H)) {
              const k = n.isList(m.lastElementChild);
              let I = null;
              F || (I = m.cloneNode(!1), I.appendChild(a.textContent.trim() ? a : n.createTextNode(n.zeroWidthSpace))), k && (I || (I = m.cloneNode(!1), I.appendChild(n.createTextNode(n.zeroWidthSpace))), I.appendChild(m.lastElementChild)), I && (m.parentNode.insertBefore(I, m.nextElementSibling), y = a = I);
            }
          } else
            a = a.previousSibling;
        }
      }
      v = !a && !L ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const T = v.commonAncestorContainer, z = v.startOffset, U = v.endOffset, P = v.startContainer === T && n.isFormatElement(T), V = P && (T.childNodes[z] || T.childNodes[0]) || v.startContainer, D = P && (T.childNodes[U] || T.childNodes[T.childNodes.length - 1]) || v.endContainer;
      if (!p)
        if (a)
          _ = a.parentNode, a = a.nextSibling, w = !0;
        else if (_ = V, V.nodeType === 3 && (_ = V.parentNode), v.collapsed)
          if (T.nodeType === 3)
            T.textContent.length > U ? a = T.splitText(U) : a = T.nextSibling;
          else if (n.isBreak(_))
            a = _, _ = _.parentNode;
          else {
            let F = _.childNodes[z];
            const R = F && F.nodeType === 3 && n.onlyZeroWidthSpace(F) && n.isBreak(F.nextSibling) ? F.nextSibling : F;
            R ? !R.nextSibling && n.isBreak(R) ? (_.removeChild(R), a = null) : a = n.isBreak(R) && !n.isBreak(o) ? R : R.nextSibling : a = null;
          }
        else if (V === D) {
          this.isEdgePoint(D, U) ? a = D.nextSibling : a = D.splitText(U);
          let R = V;
          this.isEdgePoint(V, z) || (R = V.splitText(z)), _.removeChild(R), _.childNodes.length === 0 && L && (_.innerHTML = "<br>");
        } else {
          const R = this.removeNode(), H = R.container, N = R.prevContainer;
          if (H && H.childNodes.length === 0 && L && (n.isFormatElement(H) ? H.innerHTML = "<br>" : n.isRangeFormatElement(H) && (H.innerHTML = "<" + l.defaultTag + "><br></" + l.defaultTag + ">")), n.isListCell(H) && o.nodeType === 3)
            _ = H, a = null;
          else if (!L && N)
            if (_ = N.nodeType === 3 ? N.parentNode : N, _.contains(H)) {
              let O = !0;
              for (a = H; a.parentNode && a.parentNode !== _; )
                a = a.parentNode, O = !1;
              O && H === N && (a = a.nextSibling);
            } else
              a = null;
          else n.isWysiwygDiv(H) && !n.isFormatElement(o) ? (_ = H.appendChild(n.createElement(l.defaultTag)), a = null) : (a = L ? D : H === N ? H.nextSibling : H, _ = !a || !a.parentNode ? T : a.parentNode);
          for (; a && !n.isFormatElement(a) && a.parentNode !== T; )
            a = a.parentNode;
        }
      try {
        if (!p) {
          if ((n.isWysiwygDiv(a) || _ === e.element.wysiwyg.parentNode) && (_ = e.element.wysiwyg, a = null), n.isFormatElement(o) || n.isRangeFormatElement(o) || !n.isListCell(_) && n.isComponent(o)) {
            const F = _;
            if (n.isList(a))
              _ = a, a = null;
            else if (n.isListCell(a))
              _ = a.previousElementSibling || a;
            else if (!w && !a) {
              const R = this.removeNode(), H = R.container.nodeType === 3 ? n.isListCell(n.getFormatElement(R.container, null)) ? R.container : n.getFormatElement(R.container, null) || R.container.parentNode : R.container, N = n.isWysiwygDiv(H) || n.isRangeFormatElement(H);
              _ = N ? H : H.parentNode, a = N ? null : H.nextSibling;
            }
            F.childNodes.length === 0 && _ !== F && n.removeItem(F);
          }
          if (L && !M && !n.isRangeFormatElement(_) && !n.isListCell(_) && !n.isWysiwygDiv(_) && (a = _.nextElementSibling, _ = _.parentNode), n.isWysiwygDiv(_) && (o.nodeType === 3 || n.isBreak(o))) {
            const F = n.createElement(l.defaultTag);
            F.appendChild(o), h = o, o = F;
          }
        }
        if (p ? x.parentNode ? (_ = x, a = y) : (_ = e.element.wysiwyg, a = null) : a = _ === a ? _.lastChild : a, n.isListCell(o) && !n.isList(_)) {
          if (n.isListCell(_))
            a = _.nextElementSibling, _ = _.parentNode;
          else {
            const F = n.createElement("ol");
            _.insertBefore(F, a), _ = F, a = null;
          }
          p = !0;
        }
        if (this._checkDuplicateNode(o, _), _.insertBefore(o, a), p)
          if (n.onlyZeroWidthSpace(m.textContent.trim()))
            n.removeItem(m), o = o.lastChild;
          else {
            const F = n.getArrayItem(m.children, n.isList);
            F && (o !== F ? (o.appendChild(F), o = F.previousSibling) : (_.appendChild(o), o = _), n.onlyZeroWidthSpace(m.textContent.trim()) && n.removeItem(m));
          }
      } catch (F) {
        _.appendChild(o), console.warn("[SUNEDITOR.insertNode.warn] " + F);
      } finally {
        h && (o = h);
        const F = _.querySelectorAll("[data-se-duple]");
        if (F.length > 0)
          for (let R = 0, H = F.length, N, O, k, I; R < H; R++) {
            for (N = F[R], k = N.childNodes, I = N.parentNode; k[0]; )
              O = k[0], I.insertBefore(O, N);
            N === o && (o = O), n.removeItem(N);
          }
        if ((n.isFormatElement(o) || n.isComponent(o)) && V === D) {
          const R = n.getFormatElement(T, null);
          R && R.nodeType === 1 && n.isEmptyLine(R) && n.removeItem(R);
        }
        if (M && (n.isFormatElement(o) || n.isRangeFormatElement(o)) && (o = this._setIntoFreeFormat(o)), !n.isComponent(o)) {
          let R = 1;
          if (o.nodeType === 3)
            R = o.textContent.length, this.setRange(o, R, o, R);
          else if (!n.isBreak(o) && !n.isListCell(o) && n.isFormatElement(_)) {
            let H = null;
            (!o.previousSibling || n.isBreak(o.previousSibling)) && (H = n.createTextNode(n.zeroWidthSpace), o.parentNode.insertBefore(H, o)), (!o.nextSibling || n.isBreak(o.nextSibling)) && (H = n.createTextNode(n.zeroWidthSpace), o.parentNode.insertBefore(H, o.nextSibling)), n._isIgnoreNodeChange(o) && (o = o.nextSibling, R = 0);
          }
          this.setRange(o, R, o, R);
        }
        return o;
      }
    },
    _setIntoFreeFormat: function(o) {
      const a = o.parentNode;
      let d, h;
      for (; n.isFormatElement(o) || n.isRangeFormatElement(o); ) {
        for (d = o.childNodes, h = null; d[0]; ) {
          if (h = d[0], n.isFormatElement(h) || n.isRangeFormatElement(h)) {
            if (this._setIntoFreeFormat(h), !o.parentNode) break;
            d = o.childNodes;
            continue;
          }
          a.insertBefore(h, o);
        }
        o.childNodes.length === 0 && n.removeItem(o), o = n.createElement("BR"), a.insertBefore(o, h.nextSibling);
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
        const R = n.getParentElement(o.startContainer, n.isMediaComponent);
        if (R) {
          const H = n.createElement("BR"), N = n.createElement(l.defaultTag);
          return N.appendChild(H), n.changeElement(R, N), u.setRange(N, 0, N, 0), this.history.push(!0), {
            container: N,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const a = o.startOffset === 0, d = u.isEdgePoint(o.endContainer, o.endOffset, "end");
      let h = null, v = null, m = null;
      a && (v = n.getFormatElement(o.startContainer), v && (h = v.previousElementSibling, v = h)), d && (m = n.getFormatElement(o.endContainer), m = m && m.nextElementSibling);
      let p, _ = 0, w = o.startContainer, y = o.endContainer, x = o.startOffset, M = o.endOffset;
      const L = o.commonAncestorContainer.nodeType === 3 && o.commonAncestorContainer.parentNode === w.parentNode ? w.parentNode : o.commonAncestorContainer;
      if (L === w && L === y && (w = L.children[x], y = L.children[M], x = M = 0), !w || !y) return {
        container: L,
        offset: 0
      };
      if (w === y && o.collapsed && w.textContent && n.onlyZeroWidthSpace(w.textContent.substr(x)))
        return {
          container: w,
          offset: x,
          prevContainer: w && w.parentNode ? w : null
        };
      let T = null, z = null;
      const U = n.getListChildNodes(L, null);
      let P = n.getArrayIndex(U, w), V = n.getArrayIndex(U, y);
      if (U.length > 0 && P > -1 && V > -1) {
        for (let R = P + 1, H = w; R >= 0; R--)
          U[R] === H.parentNode && U[R].firstChild === H && x === 0 && (P = R, H = H.parentNode);
        for (let R = V - 1, H = y; R > P; R--)
          U[R] === H.parentNode && U[R].nodeType === 1 && (U.splice(R, 1), H = H.parentNode, --V);
      } else {
        if (U.length === 0) {
          if (n.isFormatElement(L) || n.isRangeFormatElement(L) || n.isWysiwygDiv(L) || n.isBreak(L) || n.isMedia(L))
            return {
              container: L,
              offset: 0
            };
          if (L.nodeType === 3)
            return {
              container: L,
              offset: M
            };
          U.push(L), w = y = L;
        } else if (w = y = U[0], n.isBreak(w) || n.onlyZeroWidthSpace(w))
          return {
            container: n.isMedia(L) ? L : w,
            offset: 0
          };
        P = V = 0;
      }
      for (let R = P; R <= V; R++) {
        const H = U[R];
        if (H.length === 0 || H.nodeType === 3 && H.data === void 0) {
          this._nodeRemoveListItem(H);
          continue;
        }
        if (H === w) {
          if (w.nodeType === 1) {
            if (n.isComponent(w)) continue;
            T = n.createTextNode(w.textContent);
          } else
            H === y ? (T = n.createTextNode(w.substringData(0, x) + y.substringData(M, y.length - M)), _ = x) : T = n.createTextNode(w.substringData(0, x));
          if (T.length > 0 ? w.data = T.data : this._nodeRemoveListItem(w), H === y) break;
          continue;
        }
        if (H === y) {
          if (y.nodeType === 1) {
            if (n.isComponent(y)) continue;
            z = n.createTextNode(y.textContent);
          } else
            z = n.createTextNode(y.substringData(M, y.length - M));
          z.length > 0 ? y.data = z.data : this._nodeRemoveListItem(y);
          continue;
        }
        this._nodeRemoveListItem(H);
      }
      const D = n.getParentElement(y, "ul"), F = n.getParentElement(w, "li");
      if (D && F && F.contains(D) ? (p = D.previousSibling, _ = p.textContent.length) : (p = y && y.parentNode ? y : w && w.parentNode ? w : o.endContainer || o.startContainer, _ = !a && !d ? _ : d ? p.textContent.length : 0), !n.isWysiwygDiv(p) && p.childNodes.length === 0) {
        const R = n.removeItemAllParents(p, null, null);
        R && (p = R.sc || R.ec || e.element.wysiwyg);
      }
      return !n.getFormatElement(p) && !(w && w.parentNode) && (m ? (p = m, _ = 0) : v && (p = v, _ = 1)), this.setRange(p, _, p, _), this.history.push(!0), {
        container: p,
        offset: _,
        prevContainer: h
      };
    },
    _nodeRemoveListItem: function(o) {
      const a = n.getFormatElement(o, null);
      n.removeItem(o), n.isListCell(a) && (n.removeItemAllParents(a, null, null), a && n.isList(a.firstChild) && a.insertBefore(n.createTextNode(n.zeroWidthSpace), a.firstChild));
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
        for (let M = 0, L = a.length, T, z, U, P, V, D; M < L; M++)
          if (T = a[M], !!n.isListCell(T) && (z = T.lastElementChild, z && n.isListCell(T.nextElementSibling) && a.indexOf(T.nextElementSibling) > -1 && (P = z.lastElementChild, a.indexOf(P) > -1))) {
            let F = null;
            for (; F = P.lastElementChild; )
              if (n.isList(F))
                if (a.indexOf(F.lastElementChild) > -1)
                  P = F.lastElementChild;
                else
                  continue e;
            U = z.firstElementChild, V = a.indexOf(U), D = a.indexOf(P), a.splice(V, D - V + 1), L = a.length;
            continue;
          }
      let d = a[a.length - 1], h, v, m;
      n.isRangeFormatElement(d) || n.isFormatElement(d) ? h = d : h = n.getRangeFormatElement(d, null) || n.getFormatElement(d, null), n.isCell(h) ? (v = null, m = h) : (v = h.nextSibling, m = h.parentNode);
      let p = n.getElementDepth(h), _ = null;
      const w = [], y = function(M, L, T) {
        let z = null;
        if (M !== L && !n.isTable(L)) {
          if (L && n.getElementDepth(M) === n.getElementDepth(L)) return T;
          z = n.removeItemAllParents(L, null, M);
        }
        return z ? z.ec : T;
      };
      for (let M = 0, L = a.length, T, z, U, P, V, D, F; M < L; M++)
        if (T = a[M], z = T.parentNode, !(!z || o.contains(z)))
          if (U = n.getElementDepth(T), n.isList(z)) {
            if (_ === null && (D ? (_ = D, F = !0, D = null) : _ = z.cloneNode(!1)), w.push(T), V = a[M + 1], M === L - 1 || V && V.parentNode !== z) {
              V && T.contains(V.parentNode) && (D = V.parentNode.cloneNode(!1));
              let R = z.parentNode, H;
              for (; n.isList(R); )
                H = n.createElement(R.nodeName), H.appendChild(_), _ = H, R = R.parentNode;
              const N = this.detachRangeFormatElement(z, w, null, !0, !0);
              p >= U ? (p = U, m = N.cc, v = y(m, z, N.ec), v && (m = v.parentNode)) : m === N.cc && (v = N.ec), m !== N.cc && (P = y(m, N.cc, P), P !== void 0 ? v = P : v = N.cc);
              for (let O = 0, k = N.removeArray.length; O < k; O++)
                _.appendChild(N.removeArray[O]);
              F || o.appendChild(_), D && N.removeArray[N.removeArray.length - 1].appendChild(D), _ = null, F = !1;
            }
          } else
            p >= U && (p = U, m = z, v = T.nextSibling), o.appendChild(T), m !== z && (P = y(m, z), P !== void 0 && (v = P));
      if (this.effectNode = null, n.mergeSameTags(o, null, !1), n.mergeNestedTags(o, (function(M) {
        return this.isList(M);
      }).bind(n)), v && n.getElementDepth(v) > 0 && (n.isList(v.parentNode) || n.isList(v.parentNode.parentNode))) {
        const M = n.getParentElement(v, (function(T) {
          return this.isRangeFormatElement(T) && !this.isList(T);
        }).bind(n)), L = n.splitElement(v, null, M ? n.getElementDepth(M) + 1 : 0);
        L.parentNode.insertBefore(o, L);
      } else
        m.insertBefore(o, v), y(o, v);
      const x = n.getEdgeChildNodes(o.firstElementChild, o.lastElementChild);
      a.length > 1 ? this.setRange(x.sc, 0, x.ec, x.ec.textContent.length) : this.setRange(x.ec, x.ec.textContent.length, x.ec, x.ec.textContent.length), this.history.push(!1);
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
    detachRangeFormatElement: function(o, a, d, h, v) {
      const m = this.getRange();
      let p = m.startOffset, _ = m.endOffset, w = n.getListChildNodes(o, function(N) {
        return N.parentNode === o;
      }), y = o.parentNode, x = null, M = null, L = o.cloneNode(!1);
      const T = [], z = n.isList(d);
      let U = !1, P = !1, V = !1;
      function D(N, O, k, I) {
        if (n.onlyZeroWidthSpace(O) && (O.innerHTML = n.zeroWidthSpace, p = _ = 1), O.nodeType === 3)
          return N.insertBefore(O, k), O;
        const q = (V ? O : I).childNodes;
        let Z = O.cloneNode(!1), Y = null, K = null;
        for (; q[0]; )
          K = q[0], n._notTextNode(K) && !n.isBreak(K) && !n.isListCell(Z) ? (Z.childNodes.length > 0 && (Y || (Y = Z), N.insertBefore(Z, k), Z = O.cloneNode(!1)), N.insertBefore(K, k), Y || (Y = K)) : Z.appendChild(K);
        if (Z.childNodes.length > 0) {
          if (n.isListCell(N) && n.isListCell(Z) && n.isList(k))
            if (z) {
              for (Y = k; k; )
                Z.appendChild(k), k = k.nextSibling;
              N.parentNode.insertBefore(Z, N.nextElementSibling);
            } else {
              const G = I.nextElementSibling, le = n.detachNestedList(I, !1);
              if (o !== le || G !== I.nextElementSibling) {
                const ue = Z.childNodes;
                for (; ue[0]; )
                  I.appendChild(ue[0]);
                o = le, P = !0;
              }
            }
          else
            N.insertBefore(Z, k);
          Y || (Y = Z);
        }
        return Y;
      }
      for (let N = 0, O = w.length, k, I, q; N < O; N++)
        if (k = w[N], !(k.nodeType === 3 && n.isList(L)))
          if (V = !1, h && N === 0 && (!a || a.length === O || a[0] === k ? x = o.previousSibling : x = L), a && (I = a.indexOf(k)), a && I === -1)
            L || (L = o.cloneNode(!1)), L.appendChild(k);
          else {
            if (a && (q = a[I + 1]), L && L.children.length > 0 && (y.insertBefore(L, o), L = null), !z && n.isListCell(k))
              if (q && n.getElementDepth(k) !== n.getElementDepth(q) && (n.isListCell(y) || n.getArrayItem(k.children, n.isList, !1))) {
                const Z = k.nextElementSibling, Y = n.detachNestedList(k, !1);
                (o !== Y || Z !== k.nextElementSibling) && (o = Y, P = !0);
              } else {
                const Z = k;
                k = n.createElement(h ? Z.nodeName : n.isList(o.parentNode) || n.isListCell(o.parentNode) ? "LI" : n.isCell(o.parentNode) ? "DIV" : l.defaultTag);
                const Y = n.isListCell(k), K = Z.childNodes;
                for (; K[0] && !(n.isList(K[0]) && !Y); )
                  k.appendChild(K[0]);
                n.copyFormatAttributes(k, Z), V = !0;
              }
            else
              k = k.cloneNode(!1);
            if (!P && (h ? (T.push(k), n.removeItem(w[N])) : (d ? (U || (y.insertBefore(d, o), U = !0), k = D(d, k, null, w[N])) : k = D(y, k, o, w[N]), P || (a ? (M = k, x || (x = k)) : x || (x = M = k))), P)) {
              P = V = !1, w = n.getListChildNodes(o, function(Z) {
                return Z.parentNode === o;
              }), L = o.cloneNode(!1), y = o.parentNode, N = -1, O = w.length;
              continue;
            }
          }
      const F = o.parentNode;
      let R = o.nextSibling;
      L && L.children.length > 0 && F.insertBefore(L, R), d ? x = d.previousSibling : x || (x = o.previousSibling), R = o.nextSibling !== L ? o.nextSibling : L ? L.nextSibling : null, o.children.length === 0 || o.textContent.length === 0 ? n.removeItem(o) : n.removeEmptyNode(o, null, !1);
      let H = null;
      if (h)
        H = {
          cc: F,
          sc: x,
          so: p,
          ec: R,
          eo: _,
          removeArray: T
        };
      else {
        x || (x = M), M || (M = x);
        const N = n.getEdgeChildNodes(x, M.parentNode ? x : M);
        H = {
          cc: (N.sc || N.ec).parentNode,
          sc: N.sc,
          so: p,
          ec: N.ec,
          eo: _,
          removeArray: null
        };
      }
      if (this.effectNode = null, v) return H;
      !h && H && (a ? this.setRange(H.sc, p, H.ec, _) : this.setRange(H.sc, 0, H.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(o, a) {
      let d = {}, h = !1, v = !1, m = null, p = null;
      const _ = (function(w) {
        return !this.isComponent(w);
      }).bind(n);
      for (let w = 0, y = o.length, x, M, L, T; w < y; w++) {
        if (L = w === y - 1, M = n.getRangeFormatElement(o[w], _), T = n.isList(M), !x && T)
          x = M, d = { r: x, f: [n.getParentElement(o[w], "LI")] }, w === 0 && (h = !0);
        else if (x && T)
          if (x !== M) {
            const z = this.detachRangeFormatElement(d.f[0].parentNode, d.f, null, a, !0);
            M = o[w].parentNode, h && (m = z.sc, h = !1), L && (p = z.ec), T ? (x = M, d = { r: x, f: [n.getParentElement(o[w], "LI")] }, L && (v = !0)) : x = null;
          } else
            d.f.push(n.getParentElement(o[w], "LI")), L && (v = !0);
        if (L && n.isList(x)) {
          const z = this.detachRangeFormatElement(d.f[0].parentNode, d.f, null, a, !0);
          (v || y === 1) && (p = z.ec), h && (m = z.sc || p);
        }
      }
      return {
        sc: m,
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
    nodeChange: function(o, a, d, h) {
      this._resetRangeToTextNode();
      let v = this.getRange_addLine(this.getRange(), null);
      a = a && a.length > 0 ? a : !1, d = d && d.length > 0 ? d : !1;
      const m = !o, p = m && !d && !a;
      let _ = v.startContainer, w = v.startOffset, y = v.endContainer, x = v.endOffset;
      if (p && v.collapsed && n.isFormatElement(_.parentNode) || _ === y && _.nodeType === 1 && n.isNonEditable(_)) {
        const K = _.parentNode;
        if (!n.isListCell(K) || !n.getValues(K.style).some((function(G) {
          return this._listKebab.indexOf(G) > -1;
        }).bind(this))) return;
      }
      if (v.collapsed && !p && _.nodeType === 1 && !n.isBreak(_) && !n.isComponent(_)) {
        let K = null;
        const G = _.childNodes[w];
        G && (G.nextSibling ? K = n.isBreak(G) ? G : G.nextSibling : K = null);
        const le = n.createTextNode(n.zeroWidthSpace);
        _.insertBefore(le, K), this.setRange(le, 1, le, 1), v = this.getRange(), _ = v.startContainer, w = v.startOffset, y = v.endContainer, x = v.endOffset;
      }
      n.isFormatElement(_) && (_ = _.childNodes[w] || _.firstChild, w = 0), n.isFormatElement(y) && (y = y.childNodes[x] || y.lastChild, x = y.textContent.length), m && (o = n.createElement("DIV"));
      const M = f.RegExp, L = o.nodeName;
      if (!p && _ === y && !d && o) {
        let K = _, G = 0;
        const le = [], ue = o.style;
        for (let oe = 0, fe = ue.length; oe < fe; oe++)
          le.push(ue[oe]);
        const de = o.classList;
        for (let oe = 0, fe = de.length; oe < fe; oe++)
          le.push("." + de[oe]);
        if (le.length > 0) {
          for (; !n.isFormatElement(K) && !n.isWysiwygDiv(K); ) {
            for (let oe = 0; oe < le.length; oe++)
              if (K.nodeType === 1) {
                const fe = le[oe], Ee = /^\./.test(fe) ? new M("\\s*" + fe.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, Ae = m ? !!K.style[fe] : !!K.style[fe] && !!o.style[fe] && K.style[fe] === o.style[fe], pe = Ee === !1 ? !1 : m ? !!K.className.match(Ee) : !!K.className.match(Ee) && !!o.className.match(Ee);
                (Ae || pe) && G++;
              }
            K = K.parentNode;
          }
          if (G >= le.length) return;
        }
      }
      let T = {}, z = {}, U, P = "", V = "", D = "";
      if (a) {
        for (let K = 0, G = a.length, le; K < G; K++)
          le = a[K], /^\./.test(le) ? V += (V ? "|" : "\\s*(?:") + le.replace(/^\./, "") : P += (P ? "|" : "(?:;|^|\\s)(?:") + le;
        P && (P += ")\\s*:[^;]*\\s*(?:;|$)", P = new M(P, "ig")), V && (V += ")(?=\\s+|$)", V = new M(V, "ig"));
      }
      if (d) {
        D = "^(?:" + d[0];
        for (let K = 1; K < d.length; K++)
          D += "|" + d[K];
        D += ")$", D = new M(D, "i");
      }
      const F = f.Boolean, R = { v: !1 }, H = function(K) {
        const G = K.cloneNode(!1);
        if (G.nodeType === 3 || n.isBreak(G)) return G;
        if (p) return null;
        const le = !D && m || D && D.test(G.nodeName);
        if (le && !h)
          return R.v = !0, null;
        const ue = G.style.cssText;
        let de = "";
        P && ue.length > 0 && (de = ue.replace(P, "").trim(), de !== ue && (R.v = !0));
        const oe = G.className;
        let fe = "";
        return V && oe.length > 0 && (fe = oe.replace(V, "").trim(), fe !== oe && (R.v = !0)), m && (V || !oe) && (P || !ue) && !de && !fe && le ? (R.v = !0, null) : de || fe || G.nodeName !== L || F(P) !== F(ue) || F(V) !== F(oe) ? (P && ue.length > 0 && (G.style.cssText = de), G.style.cssText || G.removeAttribute("style"), V && oe.length > 0 && (G.className = fe.trim()), G.className.trim() || G.removeAttribute("class"), !G.style.cssText && !G.className && (G.nodeName === L || le) ? (R.v = !0, null) : G) : (R.v = !0, null);
      }, N = this.getSelectedElements(null);
      v = this.getRange(), _ = v.startContainer, w = v.startOffset, y = v.endContainer, x = v.endOffset, n.getFormatElement(_, null) || (_ = n.getChildElement(N[0], function(K) {
        return K.nodeType === 3;
      }, !1), w = 0), n.getFormatElement(y, null) || (y = n.getChildElement(N[N.length - 1], function(K) {
        return K.nodeType === 3;
      }, !1), x = y.textContent.length);
      const O = n.getFormatElement(_, null) === n.getFormatElement(y, null), k = N.length - (O ? 0 : 1);
      U = o.cloneNode(!1);
      const I = p || m && function(K) {
        for (let G = 0, le = K.length; G < le; G++)
          if (n._isMaintainedNode(K[G]) || n._isSizeNode(K[G])) return !0;
        return !1;
      }(d), q = m || n._isSizeNode(U), Z = this._util_getMaintainedNode.bind(n, I, q), Y = this._util_isMaintainedNode.bind(n, I, q);
      if (O) {
        this._resetCommonListCell(N[0], a) && (v = this.setRange(_, w, y, x));
        const K = this._nodeChange_oneLine(N[0], U, H, _, w, y, x, p, m, v.collapsed, R, Z, Y);
        T.container = K.startContainer, T.offset = K.startOffset, z.container = K.endContainer, z.offset = K.endOffset, T.container === z.container && n.onlyZeroWidthSpace(T.container) && (T.offset = z.offset = 1), this._setCommonListStyle(K.ancestor, null);
      } else {
        let K = !1;
        k > 0 && this._resetCommonListCell(N[k], a) && (K = !0), this._resetCommonListCell(N[0], a) && (K = !0), K && this.setRange(_, w, y, x), k > 0 && (U = o.cloneNode(!1), z = this._nodeChange_endLine(N[k], U, H, y, x, p, m, R, Z, Y));
        for (let G = k - 1, le; G > 0; G--)
          this._resetCommonListCell(N[G], a), U = o.cloneNode(!1), le = this._nodeChange_middleLine(N[G], U, H, p, m, R, z.container), le.endContainer && le.ancestor.contains(le.endContainer) && (z.ancestor = null, z.container = le.endContainer), this._setCommonListStyle(le.ancestor, null);
        U = o.cloneNode(!1), T = this._nodeChange_startLine(N[0], U, H, _, w, p, m, R, Z, Y, z.container), T.endContainer && (z.ancestor = null, z.container = T.endContainer), k <= 0 ? z = T : z.container || (z.ancestor = null, z.container = T.container, z.offset = T.container.textContent.length), this._setCommonListStyle(T.ancestor, null), this._setCommonListStyle(z.ancestor || n.getFormatElement(z.container), null);
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
      if (!n.isListCell(o)) return;
      a || (a = this._listKebab);
      const d = n.getArrayItem(o.childNodes, function(M) {
        return !n.isBreak(M);
      }, !0), h = o.style, v = [], m = [], p = n.getValues(h);
      for (let M = 0, L = this._listKebab.length; M < L; M++)
        p.indexOf(this._listKebab[M]) > -1 && a.indexOf(this._listKebab[M]) > -1 && (v.push(this._listCamel[M]), m.push(this._listKebab[M]));
      if (!v.length) return;
      const _ = n.createElement("SPAN");
      for (let M = 0, L = v.length; M < L; M++)
        _.style[v[M]] = h[m[M]], h.removeProperty(m[M]);
      let w = _.cloneNode(!1), y = null, x = !1;
      for (let M = 0, L = d.length, T, z; M < L; M++)
        T = d[M], !l._textTagsMap[T.nodeName.toLowerCase()] && (z = n.getValues(T.style), z.length === 0 || v.some(function(U) {
          return z.indexOf(U) === -1;
        }) && z.some(function(U) {
        }) ? (y = T.nextSibling, w.appendChild(T)) : w.childNodes.length > 0 && (o.insertBefore(w, y), w = _.cloneNode(!1), y = null, x = !0));
      return w.childNodes.length > 0 && (o.insertBefore(w, y), x = !0), h.length || o.removeAttribute("style"), x;
    },
    /**
     * @description If certain styles are applied to all child nodes of the list cell, the style of the list cell is also changed. (bold, color, size)
     * @param {Element} el List cell element. <li>
     * @param {Element|null} child Variable for recursive call. ("null" on the first call)
     * @private
     */
    _setCommonListStyle: function(o, a) {
      if (!n.isListCell(o)) return;
      const d = n.getArrayItem((a || o).childNodes, function(w) {
        return !n.isBreak(w);
      }, !0);
      if (a = d[0], !a || d.length > 1 || a.nodeType !== 1) return;
      const h = a.style, v = o.style, m = a.nodeName.toLowerCase();
      let p = !1;
      l._textTagsMap[m] === l._defaultCommand.bold.toLowerCase() && (v.fontWeight = "bold"), l._textTagsMap[m] === l._defaultCommand.italic.toLowerCase() && (v.fontStyle = "italic");
      const _ = n.getValues(h);
      if (_.length > 0)
        for (let w = 0, y = this._listCamel.length; w < y; w++)
          _.indexOf(this._listKebab[w]) > -1 && (v[this._listCamel[w]] = h[this._listCamel[w]], h.removeProperty(this._listKebab[w]), p = !0);
      if (this._setCommonListStyle(o, a), !!p && !h.length) {
        const w = a.childNodes, y = a.parentNode, x = a.nextSibling;
        for (; w.length > 0; )
          y.insertBefore(w[0], x);
        n.removeItem(a);
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
      const d = o.childNodes;
      for (; d[0]; )
        a.insertBefore(d[0], o);
      a.removeChild(o);
    },
    /**
     * @description Return the parent maintained tag. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_getMaintainedNode: function(o, a, d) {
      return !d || o ? null : this.getParentElement(d, this._isMaintainedNode.bind(this)) || (a ? null : this.getParentElement(d, this._isSizeNode.bind(this)));
    },
    /**
     * @description Check if element is a tag that should be persisted. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_isMaintainedNode: function(o, a, d) {
      if (!d || o || d.nodeType !== 1) return !1;
      const h = this._isMaintainedNode(d);
      return this.getParentElement(d, this._isMaintainedNode.bind(this)) ? h : h || (a ? !1 : this._isSizeNode(d));
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
    _nodeChange_oneLine: function(o, a, d, h, v, m, p, _, w, y, x, M, L) {
      let T = h.parentNode;
      for (; !T.nextSibling && !T.previousSibling && !n.isFormatElement(T.parentNode) && !n.isWysiwygDiv(T.parentNode) && T.nodeName !== a.nodeName; )
        T = T.parentNode;
      if (!w && T === m.parentNode && T.nodeName === a.nodeName && n.onlyZeroWidthSpace(h.textContent.slice(0, v)) && n.onlyZeroWidthSpace(m.textContent.slice(p))) {
        const pe = T.childNodes;
        let Te = !0;
        for (let Ce = 0, $e = pe.length, ze, Oe, Re, he; Ce < $e; Ce++) {
          if (ze = pe[Ce], he = !n.onlyZeroWidthSpace(ze), ze === h) {
            Oe = !0;
            continue;
          }
          if (ze === m) {
            Re = !0;
            continue;
          }
          if (!Oe && he || Oe && Re && he) {
            Te = !1;
            break;
          }
        }
        if (Te)
          return n.copyTagAttributes(T, a), {
            ancestor: o,
            startContainer: h,
            startOffset: v,
            endContainer: m,
            endOffset: p
          };
      }
      x.v = !1;
      const z = o, U = [a], P = o.cloneNode(!1), V = h === m;
      let D = h, F = v, R = m, H = p, N = !1, O = !1, k, I, q, Z, Y;
      const K = f.RegExp;
      function G(pe) {
        const Te = new K("(?:;|^|\\s)(?:" + Z + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let Ce = "";
        return Te && pe.style.cssText.length > 0 && (Ce = Te.test(pe.style.cssText)), !Ce;
      }
      if (function pe(Te, Ce) {
        const $e = Te.childNodes;
        for (let ze = 0, Oe = $e.length, Re; ze < Oe; ze++) {
          let he = $e[ze];
          if (!he) continue;
          let it = Ce, qe;
          if (!N && he === D) {
            let Ie = P;
            Y = M(he);
            const Le = n.createTextNode(D.nodeType === 1 ? "" : D.substringData(0, F)), Me = n.createTextNode(
              D.nodeType === 1 ? "" : D.substringData(
                F,
                V && H >= F ? H - F : D.data.length - F
              )
            );
            if (Y) {
              const et = M(Ce);
              if (et && et.parentNode !== Ie) {
                let Fe = et, lt = null;
                for (; Fe.parentNode !== Ie; ) {
                  for (Ce = lt = Fe.parentNode.cloneNode(!1); Fe.childNodes[0]; )
                    lt.appendChild(Fe.childNodes[0]);
                  Fe.appendChild(lt), Fe = Fe.parentNode;
                }
                Fe.parentNode.appendChild(et);
              }
              Y = Y.cloneNode(!1);
            }
            n.onlyZeroWidthSpace(Le) || Ce.appendChild(Le);
            const Ne = M(Ce);
            for (Ne && (Y = Ne), Y && (Ie = Y), I = he, k = [], Z = ""; I !== Ie && I !== z && I !== null; )
              Re = L(I) ? null : d(I), Re && I.nodeType === 1 && G(I) && (k.push(Re), Z += I.style.cssText.substr(0, I.style.cssText.indexOf(":")) + "|"), I = I.parentNode;
            const Qe = k.pop() || Me;
            for (q = I = Qe; k.length > 0; )
              I = k.pop(), q.appendChild(I), q = I;
            if (a.appendChild(Qe), Ie.appendChild(a), Y && !M(R) && (a = a.cloneNode(!1), P.appendChild(a), U.push(a)), D = Me, F = 0, N = !0, I !== Me && I.appendChild(D), !V) continue;
          }
          if (!O && he === R) {
            Y = M(he);
            const Ie = n.createTextNode(R.nodeType === 1 ? "" : R.substringData(H, R.length - H)), Le = n.createTextNode(V || R.nodeType === 1 ? "" : R.substringData(0, H));
            if (Y ? Y = Y.cloneNode(!1) : L(a.parentNode) && !Y && (a = a.cloneNode(!1), P.appendChild(a), U.push(a)), !n.onlyZeroWidthSpace(Ie)) {
              I = he, Z = "", k = [];
              const Ne = [];
              for (; I !== P && I !== z && I !== null; )
                I.nodeType === 1 && G(I) && (L(I) ? Ne.push(I.cloneNode(!1)) : k.push(I.cloneNode(!1)), Z += I.style.cssText.substr(0, I.style.cssText.indexOf(":")) + "|"), I = I.parentNode;
              for (k = k.concat(Ne), qe = q = I = k.pop() || Ie; k.length > 0; )
                I = k.pop(), q.appendChild(I), q = I;
              P.appendChild(qe), I.textContent = Ie.data;
            }
            if (Y && qe) {
              const Ne = M(qe);
              Ne && (Y = Ne);
            }
            for (I = he, k = [], Z = ""; I !== P && I !== z && I !== null; )
              Re = L(I) ? null : d(I), Re && I.nodeType === 1 && G(I) && (k.push(Re), Z += I.style.cssText.substr(0, I.style.cssText.indexOf(":")) + "|"), I = I.parentNode;
            const Me = k.pop() || Le;
            for (q = I = Me; k.length > 0; )
              I = k.pop(), q.appendChild(I), q = I;
            Y ? (a = a.cloneNode(!1), a.appendChild(Me), Y.insertBefore(a, Y.firstChild), P.appendChild(Y), U.push(a), Y = null) : a.appendChild(Me), R = Le, H = Le.data.length, O = !0, !_ && y && (a = Le, Le.textContent = n.zeroWidthSpace), I !== Le && I.appendChild(R);
            continue;
          }
          if (N) {
            if (he.nodeType === 1 && !n.isBreak(he)) {
              n._isIgnoreNodeChange(he) ? (P.appendChild(he.cloneNode(!0)), y || (a = a.cloneNode(!1), P.appendChild(a), U.push(a))) : pe(he, he);
              continue;
            }
            I = he, k = [], Z = "";
            const Ie = [];
            for (; I.parentNode !== null && I !== z && I !== a; )
              Re = O ? I.cloneNode(!1) : d(I), I.nodeType === 1 && !n.isBreak(he) && Re && G(I) && (L(I) ? Y || Ie.push(Re) : k.push(Re), Z += I.style.cssText.substr(0, I.style.cssText.indexOf(":")) + "|"), I = I.parentNode;
            k = k.concat(Ie);
            const Le = k.pop() || he;
            for (q = I = Le; k.length > 0; )
              I = k.pop(), q.appendChild(I), q = I;
            if (L(a.parentNode) && !L(Le) && !n.onlyZeroWidthSpace(a) && (a = a.cloneNode(!1), P.appendChild(a), U.push(a)), !O && !Y && L(Le)) {
              a = a.cloneNode(!1);
              const Me = Le.childNodes;
              for (let Ne = 0, Qe = Me.length; Ne < Qe; Ne++)
                a.appendChild(Me[Ne]);
              Le.appendChild(a), P.appendChild(Le), U.push(a), a.children.length > 0 ? Ce = I : Ce = a;
            } else Le === he ? O ? Ce = P : Ce = a : O ? (P.appendChild(Le), Ce = I) : (a.appendChild(Le), Ce = I);
            if (Y && he.nodeType === 3)
              if (M(he)) {
                const Me = n.getParentElement(Ce, (function(Ne) {
                  return this._isMaintainedNode(Ne.parentNode) || Ne.parentNode === P;
                }).bind(n));
                Y.appendChild(Me), a = Me.cloneNode(!1), U.push(a), P.appendChild(a);
              } else
                Y = null;
          }
          qe = he.cloneNode(!1), Ce.appendChild(qe), he.nodeType === 1 && !n.isBreak(he) && (it = qe), pe(he, it);
        }
      }(o, P), w && !_ && !x.v)
        return {
          ancestor: o,
          startContainer: h,
          startOffset: v,
          endContainer: m,
          endOffset: p
        };
      if (_ = _ && w, _)
        for (let pe = 0; pe < U.length; pe++) {
          let Te = U[pe], Ce, $e, ze;
          if (y)
            Ce = n.createTextNode(n.zeroWidthSpace), P.replaceChild(Ce, Te);
          else {
            const Oe = Te.childNodes;
            for ($e = Oe[0]; Oe[0]; )
              ze = Oe[0], P.insertBefore(ze, Te);
            n.removeItem(Te);
          }
          pe === 0 && (y ? D = R = Ce : (D = $e, R = ze));
        }
      else {
        if (w)
          for (let pe = 0; pe < U.length; pe++)
            this._stripRemoveNode(U[pe]);
        y && (D = R = a);
      }
      n.removeEmptyNode(P, a, !1), y && (F = D.textContent.length, H = R.textContent.length);
      const le = _ || R.textContent.length === 0;
      !n.isBreak(R) && R.textContent.length === 0 && (n.removeItem(R), R = D), H = le ? R.textContent.length : H;
      const ue = { s: 0, e: 0 }, de = n.getNodePath(D, P, ue), oe = !R.parentNode;
      oe && (R = D);
      const fe = { s: 0, e: 0 }, Ee = n.getNodePath(R, P, !oe && !le ? fe : null);
      F += ue.s, H = y ? F : oe ? D.textContent.length : le ? H + ue.s : H + fe.s;
      const Ae = n.mergeSameTags(P, [de, Ee], !0);
      return o.parentNode.replaceChild(P, o), D = n.getNodeFromPath(de, P), R = n.getNodeFromPath(Ee, P), {
        ancestor: P,
        startContainer: D,
        startOffset: F + Ae[0],
        endContainer: R,
        endOffset: H + Ae[1]
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
    _nodeChange_startLine: function(o, a, d, h, v, m, p, _, w, y, x) {
      let M = h.parentNode;
      for (; !M.nextSibling && !M.previousSibling && !n.isFormatElement(M.parentNode) && !n.isWysiwygDiv(M.parentNode) && M.nodeName !== a.nodeName; )
        M = M.parentNode;
      if (!p && M.nodeName === a.nodeName && !n.isFormatElement(M) && !M.nextSibling && n.onlyZeroWidthSpace(h.textContent.slice(0, v))) {
        let N = !0, O = h.previousSibling;
        for (; O; ) {
          if (!n.onlyZeroWidthSpace(O)) {
            N = !1;
            break;
          }
          O = O.previousSibling;
        }
        if (N)
          return n.copyTagAttributes(M, a), {
            ancestor: o,
            container: h,
            offset: v
          };
      }
      _.v = !1;
      const L = o, T = [a], z = o.cloneNode(!1);
      let U = h, P = v, V = !1, D, F, R, H;
      if (function N(O, k) {
        const I = O.childNodes;
        for (let q = 0, Z = I.length, Y, K; q < Z; q++) {
          const G = I[q];
          if (!G) continue;
          let le = k;
          if (V && !n.isBreak(G)) {
            if (G.nodeType === 1) {
              if (n._isIgnoreNodeChange(G)) {
                if (a = a.cloneNode(!1), K = G.cloneNode(!0), z.appendChild(K), z.appendChild(a), T.push(a), x && G.contains(x)) {
                  const fe = n.getNodePath(x, G);
                  x = n.getNodeFromPath(fe, K);
                }
              } else
                N(G, G);
              continue;
            }
            F = G, D = [];
            const ue = [];
            for (; F.parentNode !== null && F !== L && F !== a; )
              Y = d(F), F.nodeType === 1 && Y && (y(F) ? H || ue.push(Y) : D.push(Y)), F = F.parentNode;
            D = D.concat(ue);
            const de = D.length > 0, oe = D.pop() || G;
            for (R = F = oe; D.length > 0; )
              F = D.pop(), R.appendChild(F), R = F;
            if (y(a.parentNode) && !y(oe) && (a = a.cloneNode(!1), z.appendChild(a), T.push(a)), !H && y(oe)) {
              a = a.cloneNode(!1);
              const fe = oe.childNodes;
              for (let Ee = 0, Ae = fe.length; Ee < Ae; Ee++)
                a.appendChild(fe[Ee]);
              oe.appendChild(a), z.appendChild(oe), k = y(F) ? a : F, T.push(a);
            } else de ? (a.appendChild(oe), k = F) : k = a;
            if (H && G.nodeType === 3)
              if (w(G)) {
                const fe = n.getParentElement(k, (function(Ee) {
                  return this._isMaintainedNode(Ee.parentNode) || Ee.parentNode === z;
                }).bind(n));
                H.appendChild(fe), a = fe.cloneNode(!1), T.push(a), z.appendChild(a);
              } else
                H = null;
          }
          if (!V && G === U) {
            let ue = z;
            H = w(G);
            const de = n.createTextNode(U.nodeType === 1 ? "" : U.substringData(0, P)), oe = n.createTextNode(U.nodeType === 1 ? "" : U.substringData(P, U.length - P));
            if (H) {
              const Ae = w(k);
              if (Ae && Ae.parentNode !== ue) {
                let pe = Ae, Te = null;
                for (; pe.parentNode !== ue; ) {
                  for (k = Te = pe.parentNode.cloneNode(!1); pe.childNodes[0]; )
                    Te.appendChild(pe.childNodes[0]);
                  pe.appendChild(Te), pe = pe.parentNode;
                }
                pe.parentNode.appendChild(Ae);
              }
              H = H.cloneNode(!1);
            }
            n.onlyZeroWidthSpace(de) || k.appendChild(de);
            const fe = w(k);
            for (fe && (H = fe), H && (ue = H), F = k, D = []; F !== ue && F !== null; )
              Y = d(F), F.nodeType === 1 && Y && D.push(Y), F = F.parentNode;
            const Ee = D.pop() || k;
            for (R = F = Ee; D.length > 0; )
              F = D.pop(), R.appendChild(F), R = F;
            Ee !== k ? (a.appendChild(Ee), k = F) : k = a, n.isBreak(G) && a.appendChild(G.cloneNode(!1)), ue.appendChild(a), U = oe, P = 0, V = !0, k.appendChild(U);
            continue;
          }
          Y = V ? d(G) : G.cloneNode(!1), Y && (k.appendChild(Y), G.nodeType === 1 && !n.isBreak(G) && (le = Y)), N(G, le);
        }
      }(o, z), p && !m && !_.v)
        return {
          ancestor: o,
          container: h,
          offset: v,
          endContainer: x
        };
      if (m = m && p, m)
        for (let N = 0; N < T.length; N++) {
          let O = T[N];
          const k = O.childNodes, I = k[0];
          for (; k[0]; )
            z.insertBefore(k[0], O);
          n.removeItem(O), N === 0 && (U = I);
        }
      else if (p) {
        a = a.firstChild;
        for (let N = 0; N < T.length; N++)
          this._stripRemoveNode(T[N]);
      }
      if (!m && z.childNodes.length === 0)
        o.childNodes ? U = o.childNodes[0] : (U = n.createTextNode(n.zeroWidthSpace), o.appendChild(U));
      else {
        n.removeEmptyNode(z, a, !1), n.onlyZeroWidthSpace(z.textContent) && (U = z.firstChild, P = 0);
        const N = { s: 0, e: 0 }, O = n.getNodePath(U, z, N);
        P += N.s;
        const k = n.mergeSameTags(z, [O], !0);
        o.parentNode.replaceChild(z, o), U = n.getNodeFromPath(O, z), P += k[0];
      }
      return {
        ancestor: z,
        container: U,
        offset: P,
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
    _nodeChange_middleLine: function(o, a, d, h, v, m, p) {
      if (!v) {
        let x = null;
        p && o.contains(p) && (x = n.getNodePath(p, o));
        const M = o.cloneNode(!0), L = a.nodeName, T = a.style.cssText, z = a.className;
        let U = M.childNodes, P = 0, V = U.length;
        for (let D; P < V && (D = U[P], D.nodeType !== 3); P++)
          if (D.nodeName === L)
            D.style.cssText += T, n.addClass(D, z);
          else {
            if (!n.isBreak(D) && n._isIgnoreNodeChange(D))
              continue;
            if (V === 1) {
              U = D.childNodes, V = U.length, P = -1;
              continue;
            } else
              break;
          }
        if (V > 0 && P === V)
          return o.innerHTML = M.innerHTML, {
            ancestor: o,
            endContainer: x ? n.getNodeFromPath(x, o) : null
          };
      }
      m.v = !1;
      const _ = o.cloneNode(!1), w = [a];
      let y = !0;
      if (function x(M, L) {
        const T = M.childNodes;
        for (let z = 0, U = T.length, P, V; z < U; z++) {
          let D = T[z];
          if (!D) continue;
          let F = L;
          if (!n.isBreak(D) && n._isIgnoreNodeChange(D)) {
            if (a.childNodes.length > 0 && (_.appendChild(a), a = a.cloneNode(!1)), V = D.cloneNode(!0), _.appendChild(V), _.appendChild(a), w.push(a), L = a, p && D.contains(p)) {
              const R = n.getNodePath(p, D);
              p = n.getNodeFromPath(R, V);
            }
            continue;
          } else
            P = d(D), P && (y = !1, L.appendChild(P), D.nodeType === 1 && (F = P));
          n.isBreak(D) || x(D, F);
        }
      }(o, a), y || v && !h && !m.v) return { ancestor: o, endContainer: p };
      if (_.appendChild(a), h && v)
        for (let x = 0; x < w.length; x++) {
          let M = w[x];
          const L = M.childNodes;
          for (; L[0]; )
            _.insertBefore(L[0], M);
          n.removeItem(M);
        }
      else if (v) {
        a = a.firstChild;
        for (let x = 0; x < w.length; x++)
          this._stripRemoveNode(w[x]);
      }
      return n.removeEmptyNode(_, a, !1), n.mergeSameTags(_, null, !0), o.parentNode.replaceChild(_, o), { ancestor: _, endContainer: p };
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
    _nodeChange_endLine: function(o, a, d, h, v, m, p, _, w, y) {
      let x = h.parentNode;
      for (; !x.nextSibling && !x.previousSibling && !n.isFormatElement(x.parentNode) && !n.isWysiwygDiv(x.parentNode) && x.nodeName !== a.nodeName; )
        x = x.parentNode;
      if (!p && x.nodeName === a.nodeName && !n.isFormatElement(x) && !x.previousSibling && n.onlyZeroWidthSpace(h.textContent.slice(v))) {
        let H = !0, N = h.nextSibling;
        for (; N; ) {
          if (!n.onlyZeroWidthSpace(N)) {
            H = !1;
            break;
          }
          N = N.nextSibling;
        }
        if (H)
          return n.copyTagAttributes(x, a), {
            ancestor: o,
            container: h,
            offset: v
          };
      }
      _.v = !1;
      const M = o, L = [a], T = o.cloneNode(!1);
      let z = h, U = v, P = !1, V, D, F, R;
      if (function H(N, O) {
        const k = N.childNodes;
        for (let I = k.length - 1, q; 0 <= I; I--) {
          const Z = k[I];
          if (!Z) continue;
          let Y = O;
          if (P && !n.isBreak(Z)) {
            if (Z.nodeType === 1) {
              if (n._isIgnoreNodeChange(Z)) {
                a = a.cloneNode(!1);
                const ue = Z.cloneNode(!0);
                T.insertBefore(ue, O), T.insertBefore(a, ue), L.push(a);
              } else
                H(Z, Z);
              continue;
            }
            D = Z, V = [];
            const K = [];
            for (; D.parentNode !== null && D !== M && D !== a; )
              q = d(D), q && D.nodeType === 1 && (y(D) ? R || K.push(q) : V.push(q)), D = D.parentNode;
            V = V.concat(K);
            const G = V.length > 0, le = V.pop() || Z;
            for (F = D = le; V.length > 0; )
              D = V.pop(), F.appendChild(D), F = D;
            if (y(a.parentNode) && !y(le) && (a = a.cloneNode(!1), T.insertBefore(a, T.firstChild), L.push(a)), !R && y(le)) {
              a = a.cloneNode(!1);
              const ue = le.childNodes;
              for (let de = 0, oe = ue.length; de < oe; de++)
                a.appendChild(ue[de]);
              le.appendChild(a), T.insertBefore(le, T.firstChild), L.push(a), a.children.length > 0 ? O = D : O = a;
            } else G ? (a.insertBefore(le, a.firstChild), O = D) : O = a;
            if (R && Z.nodeType === 3)
              if (w(Z)) {
                const ue = n.getParentElement(O, (function(de) {
                  return this._isMaintainedNode(de.parentNode) || de.parentNode === T;
                }).bind(n));
                R.appendChild(ue), a = ue.cloneNode(!1), L.push(a), T.insertBefore(a, T.firstChild);
              } else
                R = null;
          }
          if (!P && Z === z) {
            R = w(Z);
            const K = n.createTextNode(z.nodeType === 1 ? "" : z.substringData(U, z.length - U)), G = n.createTextNode(z.nodeType === 1 ? "" : z.substringData(0, U));
            if (R) {
              R = R.cloneNode(!1);
              const ue = w(O);
              if (ue && ue.parentNode !== T) {
                let de = ue, oe = null;
                for (; de.parentNode !== T; ) {
                  for (O = oe = de.parentNode.cloneNode(!1); de.childNodes[0]; )
                    oe.appendChild(de.childNodes[0]);
                  de.appendChild(oe), de = de.parentNode;
                }
                de.parentNode.insertBefore(ue, de.parentNode.firstChild);
              }
              R = R.cloneNode(!1);
            } else y(a.parentNode) && !R && (a = a.cloneNode(!1), T.appendChild(a), L.push(a));
            for (n.onlyZeroWidthSpace(K) || O.insertBefore(K, O.firstChild), D = O, V = []; D !== T && D !== null; )
              q = y(D) ? null : d(D), q && D.nodeType === 1 && V.push(q), D = D.parentNode;
            const le = V.pop() || O;
            for (F = D = le; V.length > 0; )
              D = V.pop(), F.appendChild(D), F = D;
            le !== O ? (a.insertBefore(le, a.firstChild), O = D) : O = a, n.isBreak(Z) && a.appendChild(Z.cloneNode(!1)), R ? (R.insertBefore(a, R.firstChild), T.insertBefore(R, T.firstChild), R = null) : T.insertBefore(a, T.firstChild), z = G, U = G.data.length, P = !0, O.insertBefore(z, O.firstChild);
            continue;
          }
          q = P ? d(Z) : Z.cloneNode(!1), q && (O.insertBefore(q, O.firstChild), Z.nodeType === 1 && !n.isBreak(Z) && (Y = q)), H(Z, Y);
        }
      }(o, T), p && !m && !_.v)
        return {
          ancestor: o,
          container: h,
          offset: v
        };
      if (m = m && p, m)
        for (let H = 0; H < L.length; H++) {
          let N = L[H];
          const O = N.childNodes;
          let k = null;
          for (; O[0]; )
            k = O[0], T.insertBefore(k, N);
          n.removeItem(N), H === L.length - 1 && (z = k, U = k.textContent.length);
        }
      else if (p) {
        a = a.firstChild;
        for (let H = 0; H < L.length; H++)
          this._stripRemoveNode(L[H]);
      }
      if (!m && T.childNodes.length === 0)
        o.childNodes ? z = o.childNodes[0] : (z = n.createTextNode(n.zeroWidthSpace), o.appendChild(z));
      else {
        if (!p && a.textContent.length === 0)
          return n.removeEmptyNode(T, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        n.removeEmptyNode(T, a, !1), n.onlyZeroWidthSpace(T.textContent) ? (z = T.firstChild, U = z.textContent.length) : n.onlyZeroWidthSpace(z) && (z = a, U = 1);
        const H = { s: 0, e: 0 }, N = n.getNodePath(z, T, H);
        U += H.s;
        const O = n.mergeSameTags(T, [N], !0);
        o.parentNode.replaceChild(T, o), z = n.getNodeFromPath(N, T), U += O[0];
      }
      return {
        ancestor: T,
        container: z,
        offset: z.nodeType === 1 && U === 1 ? z.childNodes.length : U
      };
    },
    /**
     * @description Run plugin calls and basic commands.
     * @param {String} command Command string
     * @param {String} display Display type string ('command', 'submenu', 'dialog', 'container')
     * @param {Element} target The element of command button
     */
    actionCall: function(o, a, d) {
      if (a) {
        if (/more/i.test(a)) {
          if (d !== this._moreLayerActiveButton) {
            const h = e.element.toolbar.querySelector("." + o);
            h && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = d, h.style.display = "block", g._showToolbarBalloon(), g._showToolbarInline()), n.addClass(d, "on");
          } else
            e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")) && (this.moreLayerOff(), g._showToolbarBalloon(), g._showToolbarInline());
          return;
        }
        if (/container/.test(a) && (this._menuTray[o] === null || d !== this.containerActiveButton)) {
          this.callPlugin(o, this.containerOn.bind(this, d), d);
          return;
        }
        if (this.isReadOnly && n.arrayIncludes(this.resizingDisabledButtons, d)) return;
        if (/submenu/.test(a) && (this._menuTray[o] === null || d !== this.submenuActiveButton)) {
          this.callPlugin(o, this.submenuOn.bind(this, d), d);
          return;
        } else if (/dialog/.test(a)) {
          this.callPlugin(o, this.plugins[o].open.bind(this), d);
          return;
        } else /command/.test(a) ? this.callPlugin(o, this.plugins[o].action.bind(this), d) : /fileBrowser/.test(a) && this.callPlugin(o, this.plugins[o].open.bind(this, null), d);
      } else o && this.commandHandler(d, o);
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
            const d = e.element.wysiwyg;
            let h = n.getChildElement(d.firstChild, function(w) {
              return w.childNodes.length === 0 || w.nodeType === 3;
            }, !1) || d.firstChild, v = n.getChildElement(d.lastChild, function(w) {
              return w.childNodes.length === 0 || w.nodeType === 3;
            }, !0) || d.lastChild;
            if (!h || !v) return;
            if (n.isMedia(h)) {
              const w = this.getFileComponent(h), y = n.createElement("BR"), x = n.createElement(l.defaultTag);
              x.appendChild(y), h = w ? w.component : h, h.parentNode.insertBefore(x, h), h = y;
            }
            if (n.isMedia(v)) {
              const w = n.createElement("BR"), y = n.createElement(l.defaultTag);
              y.appendChild(w), d.appendChild(y), v = w;
            }
            g._showToolbarBalloon(this.setRange(h, 0, v, v.textContent.length));
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
            else if (this._variable.isChanged && typeof C.save == "function")
              C.save();
            else
              throw Error("[SUNEDITOR.core.commandHandler.fail] Please register call back function in creation option. (callBackSave : Function)");
            this._variable.isChanged = !1, e.tool.save && e.tool.save.setAttribute("disabled", !0);
            break;
          default:
            a = l._defaultCommand[a.toLowerCase()] || a, this.commandMap[a] || (this.commandMap[a] = o);
            const m = this._variable.currentNodesMap, p = m.indexOf(a) > -1 ? null : n.createElement(a);
            let _ = a;
            /^SUB$/i.test(a) && m.indexOf("SUP") > -1 ? _ = "SUP" : /^SUP$/i.test(a) && m.indexOf("SUB") > -1 && (_ = "SUB"), this.nodeChange(p, this._commandMapStyles[a] || null, [_], !1), this.focus();
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
      const a = this.getRange(), d = this.getSelectedElements(null), h = [], v = o !== "indent", m = l.rtl ? "marginRight" : "marginLeft";
      let p = a.startContainer, _ = a.endContainer, w = a.startOffset, y = a.endOffset;
      for (let x = 0, M = d.length, L, T; x < M; x++)
        L = d[x], !n.isListCell(L) || !this.plugins.list ? (T = /\d+/.test(L.style[m]) ? n.getNumber(L.style[m], 0) : 0, v ? T -= 25 : T += 25, n.setStyle(L, m, T <= 0 ? "" : T + "px")) : (v || L.previousElementSibling) && h.push(L);
      h.length > 0 && this.plugins.list.editInsideList.call(this, v, h), this.effectNode = null, this.setRange(p, w, _, y), this.history.push(!1);
    },
    /**
     * @description Add or remove the class name of "body" so that the code block is visible
     */
    toggleDisplayBlocks: function() {
      const o = e.element.wysiwyg;
      n.toggleClass(o, "se-show-block"), n.hasClass(o, "se-show-block") ? n.addClass(this._styleCommandMap.showBlocks, "active") : n.removeClass(this._styleCommandMap.showBlocks, "active"), this._resourcesStateChange();
    },
    /**
     * @description Changes to code view or wysiwyg view
     */
    toggleCodeView: function() {
      const o = this._variable.isCodeView;
      this.controllersOff(), n.setDisabledButtons(!o, this.codeViewDisabledButtons), o ? (n.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), l.height === "auto" && !l.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(l.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, g._hideToolbar())), this.nativeFocus(), n.removeClass(this._styleCommandMap.codeView, "active"), n.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : l.height === "auto" && !l.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), l.codeMirrorEditor && l.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, g._showToolbarInline())), this._variable._range = null, e.element.code.focus(), n.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && n.setDisabledButtons(!0, this.resizingDisabledButtons), typeof C.toggleCodeView == "function" && C.toggleCodeView(this._variable.isCodeView, this);
    },
    /**
     * @description Convert the data of the code view and put it in the WYSIWYG area.
     * @private
     */
    _setCodeDataToEditor: function() {
      const o = this._getCodeView();
      if (l.fullPage) {
        const a = this._parser.parseFromString(o, "text/html");
        if (!this.options.__allowedScriptTag) {
          const v = a.head.children;
          for (let m = 0, p = v.length; m < p; m++)
            /^script$/i.test(v[m].tagName) && (a.head.removeChild(v[m]), m--, p--);
        }
        let d = a.head.innerHTML;
        (!a.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !a.head.querySelector("style")) && (d += n._setIframeCssTags(this.options)), this._wd.head.innerHTML = d, this._wd.body.innerHTML = this.convertContentsForEditor(a.body.innerHTML);
        const h = a.body.attributes;
        for (let v = 0, m = h.length; v < m; v++)
          h[v].name !== "contenteditable" && this._wd.body.setAttribute(h[v].name, h[v].value);
        if (!n.hasClass(this._wd.body, "sun-editor-editable")) {
          const v = l._editableClass.split(" ");
          for (let m = 0; m < v.length; m++)
            n.addClass(this._wd.body, l._editableClass[m]);
        }
      } else
        e.element.wysiwyg.innerHTML = o.length > 0 ? this.convertContentsForEditor(o) : "<" + l.defaultTag + "><br></" + l.defaultTag + ">";
    },
    /**
     * @description Convert the data of the WYSIWYG area and put it in the code view area.
     * @private
     */
    _setEditorDataToCodeView: function() {
      const o = this.convertHTMLForCodeView(e.element.wysiwyg, !1);
      let a = "";
      if (l.fullPage) {
        const d = n.getAttributesToString(this._wd.body, null);
        a = `<!DOCTYPE html>
<html>
` + this._wd.head.outerHTML.replace(/>(?!\n)/g, `>
`) + "<body " + d + `>
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
      const a = e.element.topArea, d = e.element.toolbar, h = e.element.editorArea, v = e.element.wysiwygFrame, m = e.element.code, p = this._variable;
      this.controllersOff();
      const _ = d.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      p.isFullScreen ? (p.isFullScreen = !1, v.style.cssText = p._wysiwygOriginCssText, m.style.cssText = p._codeOriginCssText, d.style.cssText = "", h.style.cssText = p._editorAreaOriginCssText, a.style.cssText = p._originCssText, c.body.style.overflow = p._bodyOverflow, l.height === "auto" && !l.codeMirrorEditor && g._codeViewAutoHeight(), l.toolbarContainer && l.toolbarContainer.appendChild(d), l.stickyToolbar > -1 && n.removeClass(d, "se-toolbar-sticky"), p._fullScreenAttrs.sticky && !l.toolbarContainer && (p._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", n.addClass(d, "se-toolbar-sticky")), this._isInline = p._fullScreenAttrs.inline, this._isBalloon = p._fullScreenAttrs.balloon, this._isInline && g._showToolbarInline(), l.toolbarContainer && n.removeClass(d, "se-toolbar-balloon"), g.onScroll_window(), o && n.changeElement(o.firstElementChild, b.expansion), e.element.topArea.style.marginTop = "", n.removeClass(this._styleCommandMap.fullScreen, "active")) : (p.isFullScreen = !0, p._fullScreenAttrs.inline = this._isInline, p._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), l.toolbarContainer && e.element.relative.insertBefore(d, h), a.style.position = "fixed", a.style.top = "0", a.style.left = "0", a.style.width = "100%", a.style.maxWidth = "100%", a.style.height = "100%", a.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (p._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", n.removeClass(d, "se-toolbar-sticky")), p._bodyOverflow = c.body.style.overflow, c.body.style.overflow = "hidden", p._editorAreaOriginCssText = h.style.cssText, p._wysiwygOriginCssText = v.style.cssText, p._codeOriginCssText = m.style.cssText, h.style.cssText = d.style.cssText = "", v.style.cssText = (v.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + l._editorStyles.editor, m.style.cssText = (m.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], d.style.width = v.style.height = m.style.height = "100%", d.style.position = "relative", d.style.display = "block", p.innerHeight_fullScreen = f.innerHeight - d.offsetHeight, h.style.height = p.innerHeight_fullScreen - l.fullScreenOffset + "px", o && n.changeElement(o.firstElementChild, b.reduction), l.iframe && l.height === "auto" && (h.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = l.fullScreenOffset + "px", n.addClass(this._styleCommandMap.fullScreen, "active")), _ && C.toolbar.hide(), typeof C.toggleFullScreen == "function" && C.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const o = n.createElement("IFRAME");
      o.style.display = "none", c.body.appendChild(o);
      const a = l.printTemplate ? l.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), d = n.getIframeDocument(o), h = this._wd;
      if (l.iframe) {
        const v = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? n.getAttributesToString(h.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        d.write(
          "<!DOCTYPE html><html><head>" + h.head.innerHTML + "</head><body " + v + ">" + a + "</body></html>"
        );
      } else {
        const v = c.head.getElementsByTagName("link"), m = c.head.getElementsByTagName("style");
        let p = "";
        for (let _ = 0, w = v.length; _ < w; _++)
          p += v[_].outerHTML;
        for (let _ = 0, w = m.length; _ < w; _++)
          p += m[_].outerHTML;
        d.write(
          "<!DOCTYPE html><html><head>" + p + '</head><body class="' + (l._printClass !== null ? l._printClass : l._editableClass) + '">' + a + "</body></html>"
        );
      }
      this.showLoading(), f.setTimeout(function() {
        try {
          if (o.focus(), n.isIE_Edge || n.isChromium || c.documentMode || f.StyleMedia)
            try {
              o.contentWindow.document.execCommand("print", !1, null);
            } catch {
              o.contentWindow.print();
            }
          else
            o.contentWindow.print();
        } catch (v) {
          throw Error("[SUNEDITOR.core.print.fail] error: " + v);
        } finally {
          u.closeLoading(), n.removeItem(o);
        }
      }, 1e3);
    },
    /**
     * @description Open the preview window.
     */
    preview: function() {
      u.submenuOff(), u.containerOff(), u.controllersOff();
      const o = l.previewTemplate ? l.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), a = f.open("", "_blank");
      a.mimeType = "text/html";
      const d = this._wd;
      if (l.iframe) {
        const h = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? n.getAttributesToString(d.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        a.document.write(
          "<!DOCTYPE html><html><head>" + d.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + h + ">" + o + "</body></html>"
        );
      } else {
        const h = c.head.getElementsByTagName("link"), v = c.head.getElementsByTagName("style");
        let m = "";
        for (let p = 0, _ = h.length; p < _; p++)
          m += h[p].outerHTML;
        for (let p = 0, _ = v.length; p < _; p++)
          m += v[p].outerHTML;
        a.document.write(
          '<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><title>' + s.toolbar.preview + "</title>" + m + '</head><body class="' + (l._printClass !== null ? l._printClass : l._editableClass) + '" style="margin:10px auto !important; height:auto !important; outline:1px dashed #ccc;">' + o + "</body></html>"
        );
      }
    },
    /**
     * @description Set direction to "rtl" or "ltr".
     * @param {String} dir "rtl" or "ltr"
     */
    setDir: function(o) {
      const a = o === "rtl", d = this._prevRtl !== a;
      this._prevRtl = l.rtl = a, d && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && n.changeElement(e.tool.indent.firstElementChild, b.indent), e.tool.outdent && n.changeElement(e.tool.outdent.firstElementChild, b.outdent));
      const h = e.element;
      a ? (n.addClass(h.topArea, "se-rtl"), n.addClass(h.wysiwygFrame, "se-rtl")) : (n.removeClass(h.topArea, "se-rtl"), n.removeClass(h.wysiwygFrame, "se-rtl"));
      const v = n.getListChildren(h.wysiwyg, function(p) {
        return n.isFormatElement(p) && (p.style.marginRight || p.style.marginLeft || p.style.textAlign);
      });
      for (let p = 0, _ = v.length, w, y, x; p < _; p++)
        w = v[p], x = w.style.marginRight, y = w.style.marginLeft, (x || y) && (w.style.marginRight = y, w.style.marginLeft = x), x = w.style.textAlign, x === "left" ? w.style.textAlign = "right" : x === "right" && (w.style.textAlign = "left");
      const m = e.tool;
      m.dir && (n.changeTxt(m.dir.querySelector(".se-tooltip-text"), s.toolbar[l.rtl ? "dir_ltr" : "dir_rtl"]), n.changeElement(m.dir.firstElementChild, b[l.rtl ? "dir_ltr" : "dir_rtl"])), m.dir_ltr && (a ? n.removeClass(m.dir_ltr, "active") : n.addClass(m.dir_ltr, "active")), m.dir_rtl && (a ? n.addClass(m.dir_rtl, "active") : n.removeClass(m.dir_rtl, "active"));
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
        const d = this.convertHTMLForCodeView(a, !1);
        this._setCodeView(d);
      }
    },
    /**
     * @description Sets the contents of the iframe's head tag and body tag when using the "iframe" or "fullPage" option.
     * @param {Object} ctx { head: HTML string, body: HTML string}
     */
    setIframeContents: function(o) {
      if (!l.iframe) return !1;
      o.head && (this._wd.head.innerHTML = this.options.__allowedScriptTag ? o.head : o.head.replace(this.__scriptTagRegExp, "")), o.body && (this._wd.body.innerHTML = this.convertContentsForEditor(o.body)), this._resetComponents();
    },
    /**
     * @description Gets the current contents
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {Object}
     */
    getContents: function(o) {
      const a = this.cleanHTML(e.element.wysiwyg.innerHTML, null, null), d = n.createElement("DIV");
      d.innerHTML = a;
      const h = n.getListChildren(d, function(v) {
        return v.hasAttribute("contenteditable");
      });
      for (let v = 0, m = h.length; v < m; v++)
        h[v].removeAttribute("contenteditable");
      if (l.fullPage && !o) {
        const v = n.getAttributesToString(this._wd.body, ["contenteditable"]);
        return "<!DOCTYPE html><html>" + this._wd.head.outerHTML + "<body " + v + ">" + d.innerHTML + "</body></html>";
      } else
        return d.innerHTML;
    },
    /**
     * @description Gets the current contents with containing parent div(div.sun-editor-editable).
     * <div class="sun-editor-editable">{contents}</div>
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {String}
     */
    getFullContents: function(o) {
      return '<div class="sun-editor-editable' + (l.rtl ? " se-rtl" : "") + '">' + this.getContents(o) + "</div>";
    },
    /**
     * @description Returns HTML string according to tag type and configuration.
     * Use only "cleanHTML"
     * @param {Node} node Node
     * @param {Boolean} requireFormat If true, text nodes that do not have a format node is wrapped with the format tag.
     * @private
     */
    _makeLine: function(o, a) {
      const d = l.defaultTag;
      if (o.nodeType === 1) {
        if (this.__disallowedTagNameRegExp.test(o.nodeName)) return "";
        if (/__se__tag/.test(o.className)) return o.outerHTML;
        const h = n.getListChildNodes(o, function(v) {
          return n.isSpanWithoutAttr(v) && !n.getParentElement(v, n.isNotCheckingNode);
        }) || [];
        for (let v = h.length - 1; v >= 0; v--)
          h[v].outerHTML = h[v].innerHTML;
        return !a || n.isFormatElement(o) || n.isRangeFormatElement(o) || n.isComponent(o) || n.isFigures(o) || n.isAnchor(o) && n.isMedia(o.firstElementChild) ? n.isSpanWithoutAttr(o) ? o.innerHTML : o.outerHTML : "<" + d + ">" + (n.isSpanWithoutAttr(o) ? o.innerHTML : o.outerHTML) + "</" + d + ">";
      }
      if (o.nodeType === 3) {
        if (!a) return n._HTMLConvertor(o.textContent);
        const h = o.textContent.split(/\n/g);
        let v = "";
        for (let m = 0, p = h.length, _; m < p; m++)
          _ = h[m].trim(), _.length > 0 && (v += "<" + d + ">" + n._HTMLConvertor(_) + "</" + d + ">");
        return v;
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
      const a = l._textTagsMap;
      return o.replace(this._disallowedTextTagsRegExp, function(d, h, v, m) {
        return h + (typeof a[v] == "string" ? a[v] : v) + (m ? " " + m : "");
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
      const d = this._w.Math, h = a.match(/(\d+(?:\.\d+)?)(.+)/), v = h ? h[1] * 1 : n.fontValueMap[a], m = h ? h[2] : "rem";
      let p = v;
      switch (/em/.test(m) ? p = d.round(v / 0.0625) : m === "pt" ? p = d.round(v * 1.333) : m === "%" && (p = v / 100), o) {
        case "em":
        case "rem":
        case "%":
          return (p * 0.0625).toFixed(2) + o;
        case "pt":
          return d.floor(p / 1.333) + o;
        default:
          return p + o;
      }
    },
    _cleanStyle: function(o, a, d) {
      let h = (o.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(d) && !h && (o.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const v = (o.match(/\ssize="([^"]+)"/i) || [])[1], m = (o.match(/\sface="([^"]+)"/i) || [])[1], p = (o.match(/\scolor="([^"]+)"/i) || [])[1];
        (v || m || p) && (h = 'style="' + (v ? "font-size:" + this.util.getNumber(v / 3.333, 1) + "rem;" : "") + (m ? "font-family:" + m + ";" : "") + (p ? "color:" + p + ";" : "") + '"');
      }
      if (h) {
        a || (a = []);
        const v = h.replace(/&quot;/g, "").match(this._cleanStyleRegExp[d]);
        if (v) {
          const m = [];
          for (let p = 0, _ = v.length, w; p < _; p++)
            if (w = v[p].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), w && !/inherit|initial|revert|unset/i.test(w[3])) {
              const y = n.kebabToCamelCase(w[1].trim()), x = this.wwComputedStyle[y] ? this.wwComputedStyle[y].replace(/"/g, "") : "", M = w[3].trim();
              switch (y) {
                case "fontFamily":
                  if (!l.plugins.font || l.font.indexOf(M) === -1) continue;
                  break;
                case "fontSize":
                  if (!l.plugins.fontSize) continue;
                  this._cleanStyleRegExp.fontSizeUnit.test(w[0]) || (w[0] = w[0].replace((w[0].match(/:\s*([^;]+)/) || [])[1], this._convertFontSize.bind(this, l.fontSizeUnit)));
                  break;
                case "color":
                  if (!l.plugins.fontColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(M)) continue;
                  break;
                case "backgroundColor":
                  if (!l.plugins.hiliteColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(M)) continue;
                  break;
              }
              x !== M && m.push(w[0]);
            }
          m.length > 0 && a.push('style="' + m.join(";") + '"');
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
    _cleanTags: function(o, a, d) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(a)) return a;
      let h = null;
      const v = d.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), m = this._attributesTagsBlacklist[v];
      a = a.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, ""), m ? a = a.replace(m, "") : a = a.replace(this._attributesBlacklistRegExp, "");
      const p = this._attributesTagsWhitelist[v];
      if (p ? h = a.match(p) : h = a.match(o ? this._attributesWhitelistRegExp : this._attributesWhitelistRegExp_all_data), o || v === "span" || v === "li" || this._cleanStyleRegExp[v])
        if (v === "a") {
          const _ = a.match(/(?:(?:id|name)\s*=\s*(?:"|')[^"']*(?:"|'))/g);
          _ && (h || (h = []), h.push(_[0]));
        } else (!h || !/style=/i.test(h.toString())) && ((v === "span" || v === "li") && (h = this._cleanStyle(a, h, "span")), this._cleanStyleRegExp[v] ? h = this._cleanStyle(a, h, v) : /^(P|DIV|H[1-6]|PRE)$/i.test(v) && (h = this._cleanStyle(a, h, "format")));
      else {
        const _ = a.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        _ && !h ? h = [_[0]] : _ && !h.some(function(w) {
          return /^style/.test(w.trim());
        }) && h.push(_[0]);
      }
      if (n.isFigures(v)) {
        const _ = a.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        h || (h = []), _ && h.push(_[0]);
      }
      if (h)
        for (let _ = 0, w = h.length, y; _ < w; _++)
          y = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(h[_].trim()) ? "" : h[_], d += (/^\s/.test(y) ? "" : " ") + y;
      return d;
    },
    /**
     * @description Determines if formatting is required and returns a domTree
     * @param {Element} dom documentFragment
     * @returns {Element}
     * @private
     */
    _editFormat: function(o) {
      let a = "", d;
      const h = o.childNodes;
      for (let v = 0, m = h.length, p; v < m; v++)
        p = h[v], p.nodeType === 8 ? a += "<!-- " + p.textContent + " -->" : !n.isFormatElement(p) && !n.isRangeFormatElement(p) && !n.isComponent(p) && !/meta/i.test(p.nodeName) ? (d || (d = n.createElement(l.defaultTag)), d.appendChild(p), v--, m--) : (d && (a += d.outerHTML, d = null), a += p.outerHTML);
      return d && (a += d.outerHTML), c.createRange().createContextualFragment(a);
    },
    _convertListCell: function(o) {
      let a = "";
      for (let d = 0, h = o.length, v; d < h; d++)
        v = o[d], v.nodeType === 1 ? n.isList(v) ? a += v.innerHTML : n.isListCell(v) ? a += v.outerHTML : n.isFormatElement(v) ? a += "<li>" + (v.innerHTML.trim() || "<br>") + "</li>" : n.isRangeFormatElement(v) && !n.isTable(v) ? a += this._convertListCell(v) : a += "<li>" + v.outerHTML + "</li>" : a += "<li>" + (v.textContent || "<br>") + "</li>";
      return a;
    },
    _isFormatData: function(o) {
      let a = !1;
      for (let d = 0, h = o.length, v; d < h; d++)
        if (v = o[d], v.nodeType === 1 && !n.isTextStyleElement(v) && !n.isBreak(v) && !this.__disallowedTagNameRegExp.test(v.nodeName)) {
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
    cleanHTML: function(o, a, d) {
      if (!l.strictMode) return o;
      o = this._deleteDisallowedTags(this._parser.parseFromString(n.htmlCompress(o), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0)).replace(/<br\/?>$/i, "");
      const h = c.createRange().createContextualFragment(o);
      try {
        n._consistencyCheckOfHTML(h, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter);
      } catch (_) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + _);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const _ = h.querySelectorAll(this.managedTagsInfo.query);
        for (let w = 0, y = _.length, x, M; w < y; w++) {
          M = [].slice.call(_[w].classList);
          for (let L = 0, T = M.length; L < T; L++)
            if (x = this.managedTagsInfo.map[M[L]], x) {
              x(_[w]);
              break;
            }
        }
      }
      let v = h.childNodes, m = "";
      const p = this._isFormatData(v);
      p && (v = this._editFormat(h).childNodes);
      for (let _ = 0, w = v.length, y; _ < w; _++) {
        if (y = v[_], this.__allowedScriptRegExp.test(y.nodeName)) {
          m += y.outerHTML;
          continue;
        }
        m += this._makeLine(y, p);
      }
      return m = n.htmlRemoveWhiteSpace(m), m ? (a && (m = m.replace(typeof a == "string" ? n.createTagsWhitelist(a) : a, "")), d && (m = m.replace(typeof d == "string" ? n.createTagsBlacklist(d) : d, ""))) : m = o, this._tagConvertor(m);
    },
    /**
     * @description Converts contents into a format that can be placed in an editor
     * @param {String} contents contents
     * @returns {String}
     */
    convertContentsForEditor: function(o) {
      if (!l.strictMode) return o;
      o = this._deleteDisallowedTags(this._parser.parseFromString(n.htmlCompress(o), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0));
      const a = c.createRange().createContextualFragment(o);
      try {
        n._consistencyCheckOfHTML(a, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter);
      } catch (m) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + m);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const m = a.querySelectorAll(this.managedTagsInfo.query);
        for (let p = 0, _ = m.length, w, y; p < _; p++) {
          y = [].slice.call(m[p].classList);
          for (let x = 0, M = y.length; x < M; x++)
            if (w = this.managedTagsInfo.map[y[x]], w) {
              w(m[p]);
              break;
            }
        }
      }
      const d = a.childNodes;
      let h = "", v = null;
      for (let m = 0, p; m < d.length; m++) {
        if (p = d[m], this.__allowedScriptRegExp.test(p.nodeName)) {
          h += p.outerHTML;
          continue;
        }
        if (!n.isFormatElement(p) && !n.isRangeFormatElement(p) && !n.isComponent(p) && !n.isFigures(p) && p.nodeType !== 8 && !/__se__tag/.test(p.className)) {
          if (v || (v = n.createElement(l.defaultTag)), v.appendChild(p), m--, d[m + 1] && !n.isFormatElement(d[m + 1]))
            continue;
          p = v, v = null;
        }
        v && (h += this._makeLine(v, !0), v = null), h += this._makeLine(p, !0);
      }
      return v && (h += this._makeLine(v, !0)), h.length === 0 ? "<" + l.defaultTag + "><br></" + l.defaultTag + ">" : (h = n.htmlRemoveWhiteSpace(h), this._tagConvertor(h));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(o, a) {
      let d = "";
      const h = f.RegExp, v = new h("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), m = typeof o == "string" ? c.createRange().createContextualFragment(o) : o, p = (function(y) {
        return this.isFormatElement(y) || this.isComponent(y);
      }).bind(n), _ = a ? "" : `
`;
      let w = a ? 0 : this._variable.codeIndent * 1;
      return w = w > 0 ? new f.Array(w + 1).join(" ") : "", function y(x, M) {
        const L = x.childNodes, T = v.test(x.nodeName), z = T ? M : "";
        for (let U = 0, P = L.length, V, D, F, R, H, N; U < P; U++) {
          if (V = L[U], R = v.test(V.nodeName), D = R ? _ : "", F = p(V) && !T && !/^(TH|TD)$/i.test(x.nodeName) ? _ : "", V.nodeType === 8) {
            d += `
<!-- ` + V.textContent.trim() + " -->" + D;
            continue;
          }
          if (V.nodeType === 3) {
            n.isList(V.parentElement) || (d += n._HTMLConvertor(/^\n+$/.test(V.data) ? "" : V.data));
            continue;
          }
          if (V.childNodes.length === 0) {
            d += (/^HR$/i.test(V.nodeName) ? _ : "") + (/^PRE$/i.test(V.parentElement.nodeName) && /^BR$/i.test(V.nodeName) ? "" : z) + V.outerHTML + D;
            continue;
          }
          V.outerHTML ? (H = V.nodeName.toLowerCase(), N = z || R ? M : "", d += (F || (T ? "" : D)) + N + V.outerHTML.match(h("<" + H + "[^>]*>", "i"))[0] + D, y(V, M + w), d += (/\n$/.test(d) ? N : "") + "</" + H + ">" + (F || D || T || /^(TH|TD)$/i.test(V.nodeName) ? _ : "")) : d += new f.XMLSerializer().serializeToString(V);
        }
      }(m, ""), d.trim() + _;
    },
    /**
     * @description Add an event to document.
     * When created as an Iframe, the same event is added to the document in the Iframe.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     * @param {Boolean} useCapture Use event capture
     */
    addDocEvent: function(o, a, d) {
      c.addEventListener(o, a, d), l.iframe && this._wd.addEventListener(o, a);
    },
    /**
     * @description Remove events from document.
     * When created as an Iframe, the event of the document inside the Iframe is also removed.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     */
    removeDocEvent: function(o, a) {
      c.removeEventListener(o, a), l.iframe && this._wd.removeEventListener(o, a);
    },
    /**
     * @description The current number of characters is counted and displayed.
     * @param {String} inputText Text added.
     * @returns {Boolean}
     * @private
     */
    _charCount: function(o) {
      const a = l.maxCharCount, d = l.charCounterType;
      let h = 0;
      if (o && (h = this.getCharLength(o, d)), this._setCharCount(), a > 0) {
        let v = !1;
        const m = C.getCharCount(d);
        if (m > a) {
          if (v = !0, h > 0) {
            this._editorRange();
            const p = this.getRange(), _ = p.endOffset - 1, w = this.getSelectionNode().textContent, y = p.endOffset - (m - a);
            this.getSelectionNode().textContent = w.slice(0, y < 0 ? 0 : y) + w.slice(p.endOffset, w.length), this.setRange(p.endContainer, _, p.endContainer, _);
          }
        } else m + h > a && (v = !0);
        if (v && (this._callCounterBlink(), h > 0))
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
      if (l.maxCharCount) {
        const d = a || l.charCounterType, h = this.getCharLength(typeof o == "string" ? o : this._charTypeHTML && o.nodeType === 1 ? o.outerHTML : o.textContent, d);
        if (h > 0 && h + C.getCharCount(d) > l.maxCharCount)
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
      return /byte/.test(a) ? n.getByteLength(o) : o.length;
    },
    /**
     * @description Reset buttons of the responsive toolbar.
     */
    resetResponsiveToolbar: function() {
      u.controllersOff();
      const o = g._responsiveButtonSize;
      if (o) {
        let a = 0;
        (u._isBalloon || u._isInline) && l.toolbarWidth === "auto" ? a = e.element.topArea.offsetWidth : a = e.element.toolbar.offsetWidth;
        let d = "default";
        for (let h = 1, v = o.length; h < v; h++)
          if (a < o[h]) {
            d = o[h] + "";
            break;
          }
        g._responsiveCurrentSize !== d && (g._responsiveCurrentSize = d, C.setToolbarButtons(g._responsiveButtons[d]));
      }
    },
    /**
     * @description Set the char count to charCounter element textContent.
     * @private
     */
    _setCharCount: function() {
      e.element.charCounter && f.setTimeout((function(o, a) {
        this.textContent && o && (this.textContent = o.getCharCount(a.charCounterType));
      }).bind(e.element.charCounter, C, l), 0);
    },
    /**
     * @description The character counter blinks.
     * @private
     */
    _callCounterBlink: function() {
      const o = e.element.charWrapper;
      o && !n.hasClass(o, "se-blink") && (n.addClass(o, "se-blink"), f.setTimeout(function() {
        n.removeClass(o, "se-blink");
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
      l.codeMirrorEditor ? l.codeMirrorEditor.getDoc().setValue(o) : e.element.code.value = o;
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
    _setKeyEffect: function(o) {
      const a = this.commandMap, d = this.activePlugins;
      for (let h in a)
        o.indexOf(h) > -1 || !n.hasOwn(a, h) || (d.indexOf(h) > -1 ? i[h].active.call(this, null) : a.OUTDENT && /^OUTDENT$/i.test(h) ? n.isImportantDisabled(a.OUTDENT) || a.OUTDENT.setAttribute("disabled", !0) : a.INDENT && /^INDENT$/i.test(h) ? n.isImportantDisabled(a.INDENT) || a.INDENT.removeAttribute("disabled") : n.removeClass(a[h], "active"));
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(o, a) {
      const d = f.RegExp;
      this._ww = l.iframe ? e.element.wysiwygFrame.contentWindow : f, this._wd = c, this._charTypeHTML = l.charCounterType === "byte-html", this.wwComputedStyle = f.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = n.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + n.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(R) {
        return this.test(R) ? R : "";
      }).bind(l.allowedClassNames);
      const h = l.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new d("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new d("<(" + h + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + h + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new d("^(" + h + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new d("^" + (l.__allowedScriptTag ? "script" : "") + "$", "i"), !l.iframe && typeof f.ShadowRoot == "function") {
        let R = e.element.wysiwygFrame;
        for (; R; ) {
          if (R.shadowRoot) {
            this._shadowRoot = R.shadowRoot;
            break;
          } else if (R instanceof f.ShadowRoot) {
            this._shadowRoot = R;
            break;
          }
          R = R.parentNode;
        }
        this._shadowRoot && (this._shadowRootControllerEventTarget = []);
      }
      const v = f.Object.keys(l._textTagsMap), m = l.addTagsWhitelist ? l.addTagsWhitelist.split("|").filter(function(R) {
        return /b|i|ins|s|strike/i.test(R);
      }) : [];
      for (let R = 0; R < m.length; R++)
        v.splice(v.indexOf(m[R].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = v.length === 0 ? null : new d("(<\\/?)(" + v.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const p = function(R, H) {
        return R ? R === "*" ? "[a-z-]+" : H ? R + "|" + H : R : "^";
      }, y = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", x = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = l._editorTagsWhitelist.indexOf("//") > -1 || l._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new d("^(" + p(l._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new d("^(" + (l.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = n.createTagsWhitelist(p(l._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = n.createTagsBlacklist(l.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = n.createTagsWhitelist(p(l.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = n.createTagsBlacklist(l.pasteTagsBlacklist);
      const M = '\\s*=\\s*(")[^"]*\\1', L = l.attributesWhitelist;
      let T = {}, z = "";
      if (L)
        for (let R in L)
          !n.hasOwn(L, R) || /^on[a-z]+$/i.test(L[R]) || (R === "all" ? z = p(L[R], y) : T[R] = new d("\\s(?:" + p(L[R], "") + ")" + M, "ig"));
      this._attributesWhitelistRegExp = new d("\\s(?:" + (z || y + "|" + x) + ")" + M, "ig"), this._attributesWhitelistRegExp_all_data = new d("\\s(?:" + ((z || y) + "|data-[a-z0-9\\-]+") + ")" + M, "ig"), this._attributesTagsWhitelist = T;
      const U = l.attributesBlacklist;
      if (T = {}, z = "", U)
        for (let R in U)
          n.hasOwn(U, R) && (R === "all" ? z = p(U[R], "") : T[R] = new d("\\s(?:" + p(U[R], "") + ")" + M, "ig"));
      this._attributesBlacklistRegExp = new d("\\s(?:" + (z || "^") + ")" + M, "ig"), this._attributesTagsBlacklist = T, this._isInline = /inline/i.test(l.mode), this._isBalloon = /balloon|balloon-always/i.test(l.mode), this._isBalloonAlways = /balloon-always/i.test(l.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const P = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let V = [], D, F;
      for (let R in i)
        if (n.hasOwn(i, R)) {
          if (D = i[R], F = t[R], (D.active || D.action) && F && this.callPlugin(R, null, F), typeof D.checkFileInfo == "function" && typeof D.resetFileInfo == "function" && (this.callPlugin(R, null, F), this._fileInfoPluginsCheck.push(D.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(D.resetFileInfo.bind(this))), f.Array.isArray(D.fileTags)) {
            const H = D.fileTags;
            this.callPlugin(R, null, F), this._fileManager.tags = this._fileManager.tags.concat(H), V.push(R);
            for (let N = 0, O = H.length; N < O; N++)
              this._fileManager.pluginMap[H[N].toLowerCase()] = R;
          }
          if (D.managedTags) {
            const H = D.managedTags();
            P.push("." + H.className), this.managedTagsInfo.map[H.className] = H.method.bind(this);
          }
        }
      this.managedTagsInfo.query = P.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new d("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new d("^(" + (V.length === 0 ? "^" : V.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = Cs(this, this._onChange_historyStack.bind(this)), this.addModule([mi]), l.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, l._editorStyles.editor && (e.element.wysiwyg.style.cssText = l._editorStyles.editor), l.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(o, a);
    },
    /**
     * @description Caching basic buttons to use
     * @private
     */
    _cachingButtons: function() {
      this.codeViewDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-code-view-enabled"]):not([data-display="MORE"])'), this.resizingDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-resizing-enabled"]):not([data-display="MORE"])');
      const o = e.tool, a = this.commandMap;
      a.INDENT = o.indent, a.OUTDENT = o.outdent, a[l.textTags.bold.toUpperCase()] = o.bold, a[l.textTags.underline.toUpperCase()] = o.underline, a[l.textTags.italic.toUpperCase()] = o.italic, a[l.textTags.strike.toUpperCase()] = o.strike, a[l.textTags.sub.toUpperCase()] = o.subscript, a[l.textTags.sup.toUpperCase()] = o.superscript, this._styleCommandMap = {
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
      this.hasFocus && g._applyTagEffects(), this._variable.isChanged = !0, e.tool.save && e.tool.save.removeAttribute("disabled"), C.onChange && C.onChange(this.getContents(!0), this), e.element.toolbar.style.display === "block" && g._showToolbarBalloon();
    },
    /**
     * @description Modify the height value of the iframe when the height of the iframe is automatic.
     * @private
     */
    _iframeAutoHeight: function() {
      this._iframeAuto ? f.setTimeout(function() {
        const o = u._iframeAuto.offsetHeight;
        e.element.wysiwygFrame.style.height = o + "px", n.isResizeObserverSupported || u.__callResizeFunction(o, null);
      }) : n.isResizeObserverSupported || u.__callResizeFunction(e.element.wysiwygFrame.offsetHeight, null);
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
        !n.onlyZeroWidthSpace(o.textContent) || o.querySelector(n._allowedEmptyNodeList) || (o.innerText.match(/\n/g) || "").length > 1 ? this._placeholder.style.display = "none" : this._placeholder.style.display = "block";
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
      const a = this.getRange(), d = a.commonAncestorContainer, h = a.startContainer, v = n.getRangeFormatElement(d, null);
      let m, p, _;
      const w = n.getParentElement(d, n.isComponent);
      if (!(w && !n.isTable(w))) {
        if (d.nodeType === 1 && d.getAttribute("data-se-embed") === "true") {
          let y = d.nextElementSibling;
          n.isFormatElement(y) || (y = this.appendFormatTag(d, l.defaultTag)), this.setRange(y.firstChild, 0, y.firstChild, 0);
          return;
        }
        if (!((n.isRangeFormatElement(h) || n.isWysiwygDiv(h)) && (n.isComponent(h.children[a.startOffset]) || n.isComponent(h.children[a.startOffset - 1])))) {
          if (n.getParentElement(d, n.isNotCheckingNode)) return null;
          if (v) {
            _ = n.createElement(o || l.defaultTag), _.innerHTML = v.innerHTML, _.childNodes.length === 0 && (_.innerHTML = n.zeroWidthSpace), v.innerHTML = _.outerHTML, _ = v.firstChild, m = n.getEdgeChildNodes(_, null).sc, m || (m = n.createTextNode(n.zeroWidthSpace), _.insertBefore(m, _.firstChild)), p = m.textContent.length, this.setRange(m, p, m, p);
            return;
          }
          if (n.isRangeFormatElement(d) && d.childNodes.length <= 1) {
            let y = null;
            d.childNodes.length === 1 && n.isBreak(d.firstChild) ? y = d.firstChild : (y = n.createTextNode(n.zeroWidthSpace), d.appendChild(y)), this.setRange(y, 1, y, 1);
            return;
          }
          try {
            if (d.nodeType === 3 && (_ = n.createElement(o || l.defaultTag), d.parentNode.insertBefore(_, d), _.appendChild(d)), n.isBreak(_.nextSibling) && n.removeItem(_.nextSibling), n.isBreak(_.previousSibling) && n.removeItem(_.previousSibling), n.isBreak(m)) {
              const y = n.createTextNode(n.zeroWidthSpace);
              m.parentNode.insertBefore(y, m), m = y;
            }
          } catch {
            this.execCommand("formatBlock", !1, o || l.defaultTag), this.removeRange(), this._editorRange();
          }
          if (_ && (n.isBreak(_.nextSibling) && n.removeItem(_.nextSibling), n.isBreak(_.previousSibling) && n.removeItem(_.previousSibling), n.isBreak(m))) {
            const y = n.createTextNode(n.zeroWidthSpace);
            m.parentNode.insertBefore(y, m), m = y;
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
      this.context = e = Ht(o.originElement, this._getConstructed(o), l), this._componentsInfoReset = !0, this._editorInit(!0, a);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(o, a) {
      this._init(o, a), g._addEvent(), this._setCharCount(), g._offStickyToolbar(), g.onResize_window(), e.element.toolbar.style.visibility = "";
      const d = l.frameAttrbutes;
      for (let h in d)
        e.element.wysiwyg.setAttribute(h, d[h]);
      this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), f.setTimeout(function() {
        typeof u._resourcesStateChange == "function" && (g._resizeObserver && g._resizeObserver.observe(e.element.wysiwygFrame), g._toolbarObserver && g._toolbarObserver.observe(e.element._toolbarShadow), u._resourcesStateChange(), typeof C.onload == "function" && C.onload(u, o));
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
  }, g = {
    _IEisComposing: !1,
    // In IE, there is no "e.isComposing" in the key-up event.
    _lineBreakerBind: null,
    _responsiveCurrentSize: "default",
    _responsiveButtonSize: null,
    _responsiveButtons: null,
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
    _shortcutCommand: function(o, a) {
      let d = null;
      const h = g._keyCodeShortcut[o];
      switch (h) {
        case "A":
          d = "selectAll";
          break;
        case "B":
          l.shortcutsDisable.indexOf("bold") === -1 && (d = "bold");
          break;
        case "S":
          a && l.shortcutsDisable.indexOf("strike") === -1 ? d = "strike" : !a && l.shortcutsDisable.indexOf("save") === -1 && (d = "save");
          break;
        case "U":
          l.shortcutsDisable.indexOf("underline") === -1 && (d = "underline");
          break;
        case "I":
          l.shortcutsDisable.indexOf("italic") === -1 && (d = "italic");
          break;
        case "Z":
          l.shortcutsDisable.indexOf("undo") === -1 && (a ? d = "redo" : d = "undo");
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
      return d ? (u.commandHandler(u.commandMap[d], d), !0) : !!h;
    },
    _applyTagEffects: function() {
      if (n.hasClass(e.element.wysiwyg, "se-read-only"))
        return !1;
      let o = u.getSelectionNode();
      if (o === u.effectNode) return;
      u.effectNode = o;
      const a = l.rtl ? "marginRight" : "marginLeft", d = u.commandMap, h = g._onButtonsCheck, v = [], m = [], p = u.activePlugins, _ = p.length;
      let w = "";
      for (; o.firstChild; )
        o = o.firstChild;
      for (let y = o; !n.isWysiwygDiv(y) && y; y = y.parentNode)
        if (!(y.nodeType !== 1 || n.isBreak(y))) {
          if (w = y.nodeName.toUpperCase(), m.push(w), !u.isReadOnly)
            for (let x = 0, M; x < _; x++)
              M = p[x], v.indexOf(M) === -1 && i[M].active.call(u, y) && v.push(M);
          if (n.isFormatElement(y)) {
            v.indexOf("OUTDENT") === -1 && d.OUTDENT && !n.isImportantDisabled(d.OUTDENT) && (n.isListCell(y) || y.style[a] && n.getNumber(y.style[a], 0) > 0) && (v.push("OUTDENT"), d.OUTDENT.removeAttribute("disabled")), v.indexOf("INDENT") === -1 && d.INDENT && !n.isImportantDisabled(d.INDENT) && (v.push("INDENT"), n.isListCell(y) && !y.previousElementSibling ? d.INDENT.setAttribute("disabled", !0) : d.INDENT.removeAttribute("disabled"));
            continue;
          }
          h && h.test(w) && (v.push(w), n.addClass(d[w], "active"));
        }
      u._setKeyEffect(v), u._variable.currentNodes = m.reverse(), u._variable.currentNodesMap = v, l.showPathLabel && (e.element.navigation.textContent = u._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(o) {
      let a = o.target;
      if (u._bindControllersOff && o.stopPropagation(), /^(input|textarea|select|option)$/i.test(a.nodeName) ? u._antiBlur = !1 : o.preventDefault(), n.getParentElement(a, ".se-submenu"))
        o.stopPropagation(), u._notHideToolbar = !0;
      else {
        let d = a.getAttribute("data-command"), h = a.className;
        for (; !d && !/se-menu-list/.test(h) && !/sun-editor-common/.test(h); )
          a = a.parentNode, d = a.getAttribute("data-command"), h = a.className;
        (d === u._submenuName || d === u._containerName) && o.stopPropagation();
      }
    },
    addGlobalEvent(o, a, d) {
      return l.iframe && u._ww.addEventListener(o, a, d), u._w.addEventListener(o, a, d), {
        type: o,
        listener: a,
        useCapture: d
      };
    },
    removeGlobalEvent(o, a, d) {
      o && (typeof o == "object" && (a = o.listener, d = o.useCapture, o = o.type), l.iframe && u._ww.removeEventListener(o, a, d), u._w.removeEventListener(o, a, d));
    },
    onClick_toolbar: function(o) {
      let a = o.target, d = a.getAttribute("data-display"), h = a.getAttribute("data-command"), v = a.className;
      for (u.controllersOff(); a.parentNode && !h && !/se-menu-list/.test(v) && !/se-toolbar/.test(v); )
        a = a.parentNode, h = a.getAttribute("data-command"), d = a.getAttribute("data-display"), v = a.className;
      !h && !d || a.disabled || u.actionCall(h, d, a);
    },
    __selectionSyncEvent: null,
    onMouseDown_wysiwyg: function(o) {
      if (u.isReadOnly || n.isNonEditable(e.element.wysiwyg)) return;
      if (n._isExcludeSelectionElement(o.target)) {
        o.preventDefault();
        return;
      }
      if (g.removeGlobalEvent(g.__selectionSyncEvent), g.__selectionSyncEvent = g.addGlobalEvent("mouseup", function() {
        u._editorRange(), g.removeGlobalEvent(g.__selectionSyncEvent);
      }), typeof C.onMouseDown == "function" && C.onMouseDown(o, u) === !1) return;
      const a = n.getParentElement(o.target, n.isCell);
      if (a) {
        const d = u.plugins.table;
        d && a !== d._fixedCell && !d._shift && u.callPlugin("table", function() {
          d.onTableCellMultiSelect.call(u, a, !1);
        }, null);
      }
      u._isBalloon && g._hideToolbar();
    },
    onClick_wysiwyg: function(o) {
      const a = o.target;
      if (u.isReadOnly)
        return o.preventDefault(), n.isAnchor(a) && f.open(a.href, a.target), !1;
      if (n.isNonEditable(e.element.wysiwyg) || typeof C.onClick == "function" && C.onClick(o, u) === !1) return;
      const d = u.getFileComponent(a);
      if (d) {
        o.preventDefault(), u.selectComponent(d.target, d.pluginName);
        return;
      }
      const h = n.getParentElement(a, "FIGCAPTION");
      if (h && n.isNonEditable(h) && (o.preventDefault(), h.focus(), u._isInline && !u._inlineToolbarAttr.isShow)) {
        g._showToolbarInline();
        const y = function() {
          g._hideToolbar(), h.removeEventListener("blur", y);
        };
        h.addEventListener("blur", y);
      }
      if (u._editorRange(), o.detail === 3) {
        let y = u.getRange();
        n.isFormatElement(y.endContainer) && y.endOffset === 0 && (y = u.setRange(y.startContainer, y.startOffset, y.startContainer, y.startContainer.length), u._rangeInfo(y, u.getSelection()));
      }
      const v = u.getSelectionNode(), m = n.getFormatElement(v, null), p = n.getRangeFormatElement(v, null);
      let _ = v;
      for (; _.firstChild; ) _ = _.firstChild;
      const w = u.getFileComponent(_);
      if (w) {
        const y = u.getRange();
        !p && y.startContainer === y.endContainer && u.selectComponent(w.target, w.pluginName);
      } else u.currentFileComponentInfo && u.controllersOff();
      if (!m && !n.isNonEditable(a) && !n.isList(p)) {
        const y = u.getRange();
        if (n.getFormatElement(y.startContainer) === n.getFormatElement(y.endContainer))
          if (n.isList(p)) {
            o.preventDefault();
            const x = n.createElement("LI"), M = v.nextElementSibling;
            x.appendChild(v), p.insertBefore(x, M), u.focus();
          } else !n.isWysiwygDiv(v) && !n.isComponent(v) && (!n.isTable(v) || n.isCell(v)) && u._setDefaultFormat(n.isRangeFormatElement(p) ? "DIV" : l.defaultTag) !== null ? (o.preventDefault(), u.focus()) : g._applyTagEffects();
      } else
        g._applyTagEffects();
      u._isBalloon && f.setTimeout(g._toggleToolbarBalloon);
    },
    _balloonDelay: null,
    _showToolbarBalloonDelay: function() {
      g._balloonDelay && f.clearTimeout(g._balloonDelay), g._balloonDelay = f.setTimeout((function() {
        f.clearTimeout(this._balloonDelay), this._balloonDelay = null, this._showToolbarBalloon();
      }).bind(g), 350);
    },
    _toggleToolbarBalloon: function() {
      u._editorRange();
      const o = u.getRange();
      u._bindControllersOff || !u._isBalloonAlways && o.collapsed ? g._hideToolbar() : g._showToolbarBalloon(o);
    },
    _showToolbarBalloon: function(o) {
      if (!u._isBalloon) return;
      const a = o || u.getRange(), d = e.element.toolbar, h = e.element.topArea, v = u.getSelection();
      let m;
      if (u._isBalloonAlways && a.collapsed)
        m = !0;
      else if (v.focusNode === v.anchorNode)
        m = v.focusOffset < v.anchorOffset;
      else {
        const D = n.getListChildNodes(a.commonAncestorContainer, null);
        m = n.getArrayIndex(D, v.focusNode) < n.getArrayIndex(D, v.anchorNode);
      }
      let p = a.getClientRects();
      p = p[m ? 0 : p.length - 1];
      const _ = u.getGlobalScrollOffset();
      let w = _.left, y = _.top;
      const x = h.offsetWidth, M = g._getEditorOffsets(null), L = M.top, T = M.left;
      if (d.style.top = "-10000px", d.style.visibility = "hidden", d.style.display = "block", !p) {
        const D = u.getSelectionNode();
        if (n.isFormatElement(D)) {
          const F = n.createTextNode(n.zeroWidthSpace);
          u.insertNode(F, null, !1), u.setRange(F, 1, F, 1), u._editorRange(), p = u.getRange().getClientRects(), p = p[m ? 0 : p.length - 1];
        }
        if (!p) {
          const F = n.getOffset(D, e.element.wysiwygFrame);
          p = {
            left: F.left,
            top: F.top,
            right: F.left,
            bottom: F.top + D.offsetHeight,
            noText: !0
          }, w = 0, y = 0;
        }
        m = !0;
      }
      const z = f.Math.round(e.element._arrow.offsetWidth / 2), U = d.offsetWidth, P = d.offsetHeight, V = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (V && (p = {
        left: p.left + V.left,
        top: p.top + V.top,
        right: p.right + V.right - V.width,
        bottom: p.bottom + V.bottom - V.height
      }), g._setToolbarOffset(m, p, d, T, x, w, y, L, z), (U !== d.offsetWidth || P !== d.offsetHeight) && g._setToolbarOffset(m, p, d, T, x, w, y, L, z), l.toolbarContainer) {
        const D = h.parentElement;
        let F = l.toolbarContainer, R = F.offsetLeft, H = F.offsetTop;
        for (; !F.parentElement.contains(D) || !/^(BODY|HTML)$/i.test(F.parentElement.nodeName); )
          F = F.offsetParent, R += F.offsetLeft, H += F.offsetTop;
        d.style.left = d.offsetLeft - R + h.offsetLeft + "px", d.style.top = d.offsetTop - H + h.offsetTop + "px";
      }
      d.style.visibility = "";
    },
    _setToolbarOffset: function(o, a, d, h, v, m, p, _, w) {
      const x = d.offsetWidth, M = a.noText && !o ? 0 : d.offsetHeight, L = (o ? a.left : a.right) - h - x / 2 + m, T = L + x - v;
      let z = (o ? a.top - M - w : a.bottom + w) - (a.noText ? 0 : _) + p, U = L < 0 ? 1 : T < 0 ? L : L - T - 1 - 1, P = !1;
      const V = z + (o ? g._getEditorOffsets(null).top : d.offsetHeight - e.element.wysiwyg.offsetHeight);
      !o && V > 0 && g._getPageBottomSpace() < V ? (o = !0, P = !0) : o && c.documentElement.offsetTop > V && (o = !1, P = !0), P && (z = (o ? a.top - M - w : a.bottom + w) - (a.noText ? 0 : _) + p), d.style.left = f.Math.floor(U) + "px", d.style.top = f.Math.floor(z) + "px", o ? (n.removeClass(e.element._arrow, "se-arrow-up"), n.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = M + "px") : (n.removeClass(e.element._arrow, "se-arrow-down"), n.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -w + "px");
      const D = f.Math.floor(x / 2 + (L - U));
      e.element._arrow.style.left = (D + w > d.offsetWidth ? d.offsetWidth - w : D < w ? w : D) + "px";
    },
    _showToolbarInline: function() {
      if (!u._isInline) return;
      const o = e.element.toolbar;
      l.toolbarContainer ? o.style.position = "relative" : o.style.position = "absolute", o.style.visibility = "hidden", o.style.display = "block", u._inlineToolbarAttr.width = o.style.width = l.toolbarWidth, u._inlineToolbarAttr.top = o.style.top = (l.toolbarContainer ? 0 : -1 - o.offsetHeight) + "px", typeof C.showInline == "function" && C.showInline(o, e, u), g.onScroll_window(), u._inlineToolbarAttr.isShow = !0, o.style.visibility = "";
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
      const d = a ? o.startContainer : o.endContainer, h = a ? o.startOffset : o.endOffset, v = a ? "previousSibling" : "nextSibling", m = d.nodeType === 1;
      let p;
      return m ? (p = g._isUneditableNode_getSibling(d.childNodes[h], v, d), p && p.nodeType === 1 && p.getAttribute("contenteditable") === "false") : (p = g._isUneditableNode_getSibling(d, v, d), u.isEdgePoint(d, h, a ? "front" : "end") && p && p.nodeType === 1 && p.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(o, a, d) {
      if (!o) return null;
      let h = o[a];
      if (!h)
        if (h = n.getFormatElement(d), h = h ? h[a] : null, h && !n.isComponent(h)) h = a === "previousSibling" ? h.firstChild : h.lastChild;
        else return null;
      return h;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(o) {
      let a = u.getSelectionNode();
      if (n.isInputElement(a)) return;
      const d = o.keyCode, h = o.shiftKey, v = o.ctrlKey || o.metaKey || d === 91 || d === 92 || d === 224, m = o.altKey;
      if (g._IEisComposing = d === 229, !v && u.isReadOnly && !g._cursorMoveKeyCode.test(d))
        return o.preventDefault(), !1;
      if (u.submenuOff(), u._isBalloon && g._hideToolbar(), typeof C.onKeyDown == "function" && C.onKeyDown(o, u) === !1) return;
      if (v && g._shortcutCommand(d, h))
        return g._onShortcutKey = !0, o.preventDefault(), o.stopPropagation(), !1;
      g._onShortcutKey && (g._onShortcutKey = !1);
      const p = u.getRange(), _ = !p.collapsed || p.startContainer !== p.endContainer, w = u._fileManager.pluginRegExp.test(u.currentControllerName) ? u.currentControllerName : "";
      let y = n.getFormatElement(a, null) || a, x = n.getRangeFormatElement(y, null);
      if (!(/37|38|39|40/.test(o.keyCode) && g._onKeyDown_wysiwyg_arrowKey(o) === !1)) {
        switch (d) {
          case 8:
            if (!_ && w) {
              o.preventDefault(), o.stopPropagation(), u.plugins[w].destroy.call(u);
              break;
            }
            if (_ && g._hardDelete()) {
              o.preventDefault(), o.stopPropagation();
              break;
            }
            if (!n.isFormatElement(y) && !e.element.wysiwyg.firstElementChild && !n.isComponent(a) && u._setDefaultFormat(l.defaultTag) !== null)
              return o.preventDefault(), o.stopPropagation(), !1;
            if (!_ && !y.previousElementSibling && p.startOffset === 0 && !a.previousSibling && !n.isListCell(y) && n.isFormatElement(y) && (!n.isFreeFormatElement(y) || n.isClosureFreeFormatElement(y))) {
              if (n.isClosureRangeFormatElement(y.parentNode))
                return o.preventDefault(), o.stopPropagation(), !1;
              if (n.isWysiwygDiv(y.parentNode) && y.childNodes.length <= 1 && (!y.firstChild || n.onlyZeroWidthSpace(y.textContent))) {
                if (o.preventDefault(), o.stopPropagation(), y.nodeName.toUpperCase() === l.defaultTag.toUpperCase()) {
                  y.innerHTML = "<br>";
                  const N = y.attributes;
                  for (; N[0]; )
                    y.removeAttribute(N[0].name);
                } else {
                  const N = n.createElement(l.defaultTag);
                  N.innerHTML = "<br>", y.parentElement.replaceChild(N, y);
                }
                return u.nativeFocus(), !1;
              }
            }
            const L = p.startContainer;
            if (y && !y.previousElementSibling && p.startOffset === 0 && L.nodeType === 3 && !n.isFormatElement(L.parentNode)) {
              let N = L.parentNode.previousSibling;
              const O = L.parentNode.nextSibling;
              N || (O ? N = O : (N = n.createElement("BR"), y.appendChild(N)));
              let k = L;
              for (; y.contains(k) && !k.previousSibling; )
                k = k.parentNode;
              if (!y.contains(k)) {
                L.textContent = "", n.removeItemAllParents(L, null, y);
                break;
              }
            }
            if (g._isUneditableNode(p, !0)) {
              o.preventDefault(), o.stopPropagation();
              break;
            }
            !_ && u._isEdgeFormat(p.startContainer, p.startOffset, "start") && n.isFormatElement(y.previousElementSibling) && (u._formatAttrsTemp = y.previousElementSibling.attributes);
            const T = p.commonAncestorContainer;
            if (y = n.getFormatElement(p.startContainer, null), x = n.getRangeFormatElement(y, null), x && y && !n.isCell(x) && !/^FIGCAPTION$/i.test(x.nodeName)) {
              if (n.isListCell(y) && n.isList(x) && (n.isListCell(x.parentNode) || y.previousElementSibling) && (a === y || a.nodeType === 3 && (!a.previousSibling || n.isList(a.previousSibling))) && (n.getFormatElement(p.startContainer, null) !== n.getFormatElement(p.endContainer, null) ? x.contains(p.startContainer) : p.startOffset === 0 && p.collapsed)) {
                if (p.startContainer !== p.endContainer)
                  o.preventDefault(), u.removeNode(), p.startContainer.nodeType === 3 && u.setRange(p.startContainer, p.startContainer.textContent.length, p.startContainer, p.startContainer.textContent.length), u.history.push(!0);
                else {
                  let N = y.previousElementSibling || x.parentNode;
                  if (n.isListCell(N)) {
                    o.preventDefault();
                    let O = N;
                    if (!N.contains(y) && n.isListCell(O) && n.isList(O.lastElementChild)) {
                      for (O = O.lastElementChild.lastElementChild; n.isListCell(O) && n.isList(O.lastElementChild); )
                        O = O.lastElementChild && O.lastElementChild.lastElementChild;
                      N = O;
                    }
                    let k = N === x.parentNode ? x.previousSibling : N.lastChild;
                    k || (k = n.createTextNode(n.zeroWidthSpace), x.parentNode.insertBefore(k, x.parentNode.firstChild));
                    const I = k.nodeType === 3 ? k.textContent.length : 1, q = y.childNodes;
                    let Z = k, Y = q[0];
                    for (; Y = q[0]; )
                      N.insertBefore(Y, Z.nextSibling), Z = Y;
                    n.removeItem(y), x.children.length === 0 && n.removeItem(x), u.setRange(k, I, k, I), u.history.push(!0);
                  }
                }
                break;
              }
              if (!_ && p.startOffset === 0) {
                let N = !0, O = T;
                for (; O && O !== x && !n.isWysiwygDiv(O); ) {
                  if (O.previousSibling && (O.previousSibling.nodeType === 1 || !n.onlyZeroWidthSpace(O.previousSibling.textContent.trim()))) {
                    N = !1;
                    break;
                  }
                  O = O.parentNode;
                }
                if (N && x.parentNode) {
                  o.preventDefault(), u.detachRangeFormatElement(x, n.isListCell(y) ? [y] : null, null, !1, !1), u.history.push(!0);
                  break;
                }
              }
            }
            if (!_ && y && (p.startOffset === 0 || a === y && y.childNodes[p.startOffset])) {
              const N = a === y ? y.childNodes[p.startOffset] : a, O = y.previousSibling, k = (T.nodeType === 3 || n.isBreak(T)) && !T.previousSibling && p.startOffset === 0;
              if (N && !N.previousSibling && (T && n.isComponent(T.previousSibling) || k && n.isComponent(O))) {
                const I = u.getFileComponent(O);
                I ? (o.preventDefault(), o.stopPropagation(), y.textContent.length === 0 && n.removeItem(y), u.selectComponent(I.target, I.pluginName) === !1 && u.blur()) : n.isComponent(O) && (o.preventDefault(), o.stopPropagation(), n.removeItem(O));
                break;
              }
              if (N && n.isNonEditable(N.previousSibling)) {
                o.preventDefault(), o.stopPropagation(), n.removeItem(N.previousSibling);
                break;
              }
            }
            break;
          case 46:
            if (w) {
              o.preventDefault(), o.stopPropagation(), u.plugins[w].destroy.call(u);
              break;
            }
            if (_ && g._hardDelete()) {
              o.preventDefault(), o.stopPropagation();
              break;
            }
            if (g._isUneditableNode(p, !1)) {
              o.preventDefault(), o.stopPropagation();
              break;
            }
            if ((n.isFormatElement(a) || a.nextSibling === null || n.onlyZeroWidthSpace(a.nextSibling) && a.nextSibling.nextSibling === null) && p.startOffset === a.textContent.length) {
              const N = y.nextElementSibling;
              if (!N) break;
              if (n.isComponent(N)) {
                if (o.preventDefault(), n.onlyZeroWidthSpace(y) && (n.removeItem(y), n.isTable(N))) {
                  let k = n.getChildElement(N, n.isCell, !1);
                  k = k.firstElementChild || k, u.setRange(k, 0, k, 0);
                  break;
                }
                const O = u.getFileComponent(N);
                O ? (o.stopPropagation(), u.selectComponent(O.target, O.pluginName) === !1 && u.blur()) : n.isComponent(N) && (o.stopPropagation(), n.removeItem(N));
                break;
              }
            }
            if (!_ && (u.isEdgePoint(p.endContainer, p.endOffset) || a === y && y.childNodes[p.startOffset])) {
              const N = a === y && y.childNodes[p.startOffset] || a;
              if (N && n.isNonEditable(N.nextSibling)) {
                o.preventDefault(), o.stopPropagation(), n.removeItem(N.nextSibling);
                break;
              } else if (n.isComponent(N)) {
                o.preventDefault(), o.stopPropagation(), n.removeItem(N);
                break;
              }
            }
            if (!_ && u._isEdgeFormat(p.endContainer, p.endOffset, "end") && n.isFormatElement(y.nextElementSibling) && (u._formatAttrsTemp = y.attributes), y = n.getFormatElement(p.startContainer, null), x = n.getRangeFormatElement(y, null), n.isListCell(y) && n.isList(x) && (a === y || a.nodeType === 3 && (!a.nextSibling || n.isList(a.nextSibling)) && (n.getFormatElement(p.startContainer, null) !== n.getFormatElement(p.endContainer, null) ? x.contains(p.endContainer) : p.endOffset === a.textContent.length && p.collapsed))) {
              p.startContainer !== p.endContainer && u.removeNode();
              let N = n.getArrayItem(y.children, n.isList, !1);
              if (N = N || y.nextElementSibling || x.parentNode.nextElementSibling, N && (n.isList(N) || n.getArrayItem(N.children, n.isList, !1))) {
                o.preventDefault();
                let O, k;
                if (n.isList(N)) {
                  const I = N.firstElementChild;
                  for (k = I.childNodes, O = k[0]; k[0]; )
                    y.insertBefore(k[0], N);
                  n.removeItem(I);
                } else {
                  for (O = N.firstChild, k = N.childNodes; k[0]; )
                    y.appendChild(k[0]);
                  n.removeItem(N);
                }
                u.setRange(O, 0, O, 0), u.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (w || l.tabDisable || (o.preventDefault(), v || m || n.isWysiwygDiv(a))) break;
            const z = !p.collapsed || u.isEdgePoint(p.startContainer, p.startOffset), U = u.getSelectedElements(null);
            a = u.getSelectionNode();
            const P = [];
            let V = [], D = n.isListCell(U[0]), F = n.isListCell(U[U.length - 1]), R = { sc: p.startContainer, so: p.startOffset, ec: p.endContainer, eo: p.endOffset };
            for (let N = 0, O = U.length, k; N < O; N++)
              if (k = U[N], n.isListCell(k)) {
                if (!k.previousElementSibling && !h)
                  continue;
                P.push(k);
              } else
                V.push(k);
            if (P.length > 0 && z && u.plugins.list)
              R = u.plugins.list.editInsideList.call(u, h, P);
            else {
              const N = n.getParentElement(a, n.isCell);
              if (N && z) {
                const O = n.getParentElement(N, "table"), k = n.getListChildren(O, n.isCell);
                let I = h ? n.prevIdx(k, N) : n.nextIdx(k, N);
                I === k.length && !h && (I = 0), I === -1 && h && (I = k.length - 1);
                let q = k[I];
                if (!q) break;
                q = q.firstElementChild || q, u.setRange(q, 0, q, 0);
                break;
              }
              V = V.concat(P), D = F = null;
            }
            if (V.length > 0)
              if (h) {
                const N = V.length - 1;
                for (let I = 0, q; I <= N; I++) {
                  q = V[I].childNodes;
                  for (let Z = 0, Y = q.length, K; Z < Y && (K = q[Z], !!K); Z++)
                    if (!n.onlyZeroWidthSpace(K)) {
                      /^\s{1,4}$/.test(K.textContent) ? n.removeItem(K) : /^\s{1,4}/.test(K.textContent) && (K.textContent = K.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const O = n.getChildElement(V[0], "text", !1), k = n.getChildElement(V[N], "text", !0);
                !D && O && (R.sc = O, R.so = 0), !F && k && (R.ec = k, R.eo = k.textContent.length);
              } else {
                const N = n.createTextNode(new f.Array(u._variable.tabSize + 1).join(" "));
                if (V.length === 1) {
                  const O = u.insertNode(N, null, !0);
                  if (!O) return !1;
                  D || (R.sc = N, R.so = O.endOffset), F || (R.ec = N, R.eo = O.endOffset);
                } else {
                  const O = V.length - 1;
                  for (let q = 0, Z; q <= O; q++)
                    Z = V[q].firstChild, Z && (n.isBreak(Z) ? V[q].insertBefore(N.cloneNode(!1), Z) : Z.textContent = N.textContent + Z.textContent);
                  const k = n.getChildElement(V[0], "text", !1), I = n.getChildElement(V[O], "text", !0);
                  !D && k && (R.sc = k, R.so = 0), !F && I && (R.ec = I, R.eo = I.textContent.length);
                }
              }
            u.setRange(R.sc, R.so, R.ec, R.eo), u.history.push(!1);
            break;
          case 13:
            const H = n.getFreeFormatElement(a, null);
            if (u._charTypeHTML) {
              let N = "";
              if (!h && H || h ? N = "<br>" : N = "<" + y.nodeName + "><br></" + y.nodeName + ">", !u.checkCharCount(N, "byte-html"))
                return o.preventDefault(), !1;
            }
            if (!h && !w) {
              const N = u._isEdgeFormat(p.endContainer, p.endOffset, "end"), O = u._isEdgeFormat(p.startContainer, p.startOffset, "start");
              if (N && (/^H[1-6]$/i.test(y.nodeName) || /^HR$/i.test(y.nodeName))) {
                g._enterPrevent(o);
                let k = null;
                const I = u.appendFormatTag(y, l.defaultTag);
                if (N && N.length > 0) {
                  k = N.pop();
                  const q = k;
                  for (; N.length > 0; )
                    k = k.appendChild(N.pop());
                  I.appendChild(q);
                }
                if (k = k ? k.appendChild(I.firstChild) : I.firstChild, n.isBreak(k)) {
                  const q = n.createTextNode(n.zeroWidthSpace);
                  k.parentNode.insertBefore(q, k), u.setRange(q, 1, q, 1);
                } else
                  u.setRange(k, 0, k, 0);
                break;
              } else if (x && y && !n.isCell(x) && !/^FIGCAPTION$/i.test(x.nodeName)) {
                const k = u.getRange();
                if (u.isEdgePoint(k.endContainer, k.endOffset) && n.isList(a.nextSibling)) {
                  g._enterPrevent(o);
                  const I = n.createElement("LI"), q = n.createElement("BR");
                  I.appendChild(q), y.parentNode.insertBefore(I, y.nextElementSibling), I.appendChild(a.nextSibling), u.setRange(q, 1, q, 1);
                  break;
                }
                if ((k.commonAncestorContainer.nodeType !== 3 || !k.commonAncestorContainer.nextElementSibling) && n.onlyZeroWidthSpace(y.innerText.trim()) && !n.isListCell(y.nextElementSibling)) {
                  g._enterPrevent(o);
                  let I = null;
                  if (n.isListCell(x.parentNode)) {
                    const q = y.parentNode.parentNode;
                    x = q.parentNode;
                    const Z = n.createElement("LI");
                    Z.innerHTML = "<br>", n.copyTagAttributes(Z, y, l.lineAttrReset), I = Z, x.insertBefore(I, q.nextElementSibling);
                  } else {
                    const q = n.isCell(x.parentNode) ? "DIV" : n.isList(x.parentNode) ? "LI" : n.isFormatElement(x.nextElementSibling) && !n.isRangeFormatElement(x.nextElementSibling) ? x.nextElementSibling.nodeName : n.isFormatElement(x.previousElementSibling) && !n.isRangeFormatElement(x.previousElementSibling) ? x.previousElementSibling.nodeName : l.defaultTag;
                    I = n.createElement(q), n.copyTagAttributes(I, y, l.lineAttrReset);
                    const Z = u.detachRangeFormatElement(x, [y], null, !0, !0);
                    Z.cc.insertBefore(I, Z.ec);
                  }
                  I.innerHTML = "<br>", n.removeItemAllParents(y, null, null), u.setRange(I, 1, I, 1);
                  break;
                }
              }
              if (H) {
                g._enterPrevent(o);
                const k = a === H, I = u.getSelection(), q = a.childNodes, Z = I.focusOffset, Y = a.previousElementSibling, K = a.nextSibling;
                if (!n.isClosureFreeFormatElement(H) && q && (k && p.collapsed && q.length - 1 <= Z + 1 && n.isBreak(q[Z]) && (!q[Z + 1] || (!q[Z + 2] || n.onlyZeroWidthSpace(q[Z + 2].textContent)) && q[Z + 1].nodeType === 3 && n.onlyZeroWidthSpace(q[Z + 1].textContent)) && Z > 0 && n.isBreak(q[Z - 1]) || !k && n.onlyZeroWidthSpace(a.textContent) && n.isBreak(Y) && (n.isBreak(Y.previousSibling) || !n.onlyZeroWidthSpace(Y.previousSibling.textContent)) && (!K || !n.isBreak(K) && n.onlyZeroWidthSpace(K.textContent)))) {
                  k ? n.removeItem(q[Z - 1]) : n.removeItem(a);
                  const G = u.appendFormatTag(H, n.isFormatElement(H.nextElementSibling) && !n.isRangeFormatElement(H.nextElementSibling) ? H.nextElementSibling : null);
                  n.copyFormatAttributes(G, H), u.setRange(G, 1, G, 1);
                  break;
                }
                if (k) {
                  C.insertHTML(p.collapsed && n.isBreak(p.startContainer.childNodes[p.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let G = I.focusNode;
                  const le = I.focusOffset;
                  H === G && (G = G.childNodes[le - Z > 1 ? le - 1 : le]), u.setRange(G, 1, G, 1);
                } else {
                  const G = I.focusNode.nextSibling, le = n.createElement("BR");
                  u.insertNode(le, null, !1);
                  const ue = le.previousSibling, de = le.nextSibling;
                  !n.isBreak(G) && !n.isBreak(ue) && (!de || n.onlyZeroWidthSpace(de)) ? (le.parentNode.insertBefore(le.cloneNode(!1), le), u.setRange(le, 1, le, 1)) : u.setRange(de, 0, de, 0);
                }
                g._onShortcutKey = !0;
                break;
              }
              if (p.collapsed && (O || N)) {
                g._enterPrevent(o);
                const k = n.createElement("BR"), I = n.createElement(y.nodeName);
                n.copyTagAttributes(I, y, l.lineAttrReset);
                let q = k;
                do {
                  if (!n.isBreak(a) && a.nodeType === 1) {
                    const Z = a.cloneNode(!1);
                    Z.appendChild(q), q = Z;
                  }
                  a = a.parentNode;
                } while (y !== a && y.contains(a));
                I.appendChild(q), y.parentNode.insertBefore(I, O && !N ? y : y.nextElementSibling), N && u.setRange(k, 1, k, 1);
                break;
              }
              if (y) {
                o.stopPropagation();
                let k, I = 0;
                if (p.collapsed)
                  n.onlyZeroWidthSpace(y) ? k = u.appendFormatTag(y, y.cloneNode(!1)) : k = n.splitElement(p.endContainer, p.endOffset, n.getElementDepth(y));
                else {
                  const q = n.getFormatElement(p.startContainer, null) !== n.getFormatElement(p.endContainer, null), Z = y.cloneNode(!1);
                  Z.innerHTML = "<br>";
                  const Y = u.removeNode();
                  if (k = n.getFormatElement(Y.container, null), !k) {
                    n.isWysiwygDiv(Y.container) && (g._enterPrevent(o), e.element.wysiwyg.appendChild(Z), k = Z, n.copyTagAttributes(k, y, l.lineAttrReset), u.setRange(k, I, k, I));
                    break;
                  }
                  const K = n.getRangeFormatElement(Y.container);
                  if (k = k.contains(K) ? n.getChildElement(K, n.getFormatElement.bind(n)) : k, q) {
                    if (N && !O)
                      k.parentNode.insertBefore(Z, !Y.prevContainer || Y.container === Y.prevContainer ? k.nextElementSibling : k), k = Z, I = 0;
                    else if (I = Y.offset, O) {
                      const G = k.parentNode.insertBefore(Z, k);
                      N && (k = G, I = 0);
                    }
                  } else
                    N && O ? (k.parentNode.insertBefore(Z, Y.prevContainer && Y.container === Y.prevContainer ? k.nextElementSibling : k), k = Z, I = 0) : k = n.splitElement(Y.container, Y.offset, n.getElementDepth(y));
                }
                g._enterPrevent(o), n.copyTagAttributes(k, y, l.lineAttrReset), u.setRange(k, I, k, I);
                break;
              }
            }
            if (_) break;
            if (x && n.getParentElement(x, "FIGCAPTION") && n.getParentElement(x, n.isList) && (g._enterPrevent(o), y = u.appendFormatTag(y, null), u.setRange(y, 0, y, 0)), w) {
              o.preventDefault(), o.stopPropagation(), u.containerOff(), u.controllersOff();
              const N = e[w], O = N._container, k = O.previousElementSibling || O.nextElementSibling;
              let I = null;
              n.isListCell(O.parentNode) ? I = n.createElement("BR") : (I = n.createElement(n.isFormatElement(k) && !n.isRangeFormatElement(k) ? k.nodeName : l.defaultTag), I.innerHTML = "<br>"), h ? O.parentNode.insertBefore(I, O) : O.parentNode.insertBefore(I, O.nextElementSibling), u.callPlugin(w, function() {
                u.selectComponent(N._element, w) === !1 && u.blur();
              }, null);
            }
            break;
          case 27:
            if (w)
              return o.preventDefault(), o.stopPropagation(), u.controllersOff(), !1;
            break;
        }
        if (h && d === 16) {
          o.preventDefault(), o.stopPropagation();
          const L = u.plugins.table;
          if (L && !L._shift && !L._ref) {
            const T = n.getParentElement(y, n.isCell);
            if (T) {
              L.onTableCellMultiSelect.call(u, T, !0);
              return;
            }
          }
        } else if (h && (n.isOSX_IOS ? m : v) && d === 32) {
          o.preventDefault(), o.stopPropagation();
          const L = u.insertNode(n.createTextNode(" "));
          if (L && L.container) {
            u.setRange(L.container, L.endOffset, L.container, L.endOffset);
            return;
          }
        }
        if (n.isIE && !v && !m && !_ && !g._nonTextKeyCode.test(d) && n.isBreak(p.commonAncestorContainer)) {
          const L = n.createTextNode(n.zeroWidthSpace);
          u.insertNode(L, null, !1), u.setRange(L, 1, L, 1);
        }
        g._directionKeyCode.test(d) && (u._editorRange(), g._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(o) {
      if (o.shiftKey) return;
      let a = u.getSelectionNode();
      const d = function(m, p = 0) {
        if (o.preventDefault(), o.stopPropagation(), !m) return;
        let _ = u.getFileComponent(m);
        _ ? u.selectComponent(_.target, _.pluginName) : (u.setRange(m, p, m, p), u.controllersOff());
      }, h = n.getParentElement(a, "table");
      if (h) {
        const m = n.getParentElement(a, "tr"), p = n.getParentElement(a, "td");
        let _ = p, w = p;
        if (p) {
          for (; _.firstChild; ) _ = _.firstChild;
          for (; w.lastChild; ) w = w.lastChild;
        }
        let y = a;
        for (; y.firstChild; ) y = y.firstChild;
        const x = y === _, M = y === w;
        let L = null, T = 0;
        if (o.keyCode === 38 && x) {
          const z = m && m.previousElementSibling;
          for (z ? L = z.children[p.cellIndex] : L = n.getPreviousDeepestNode(h, u.context.element.wysiwyg); L.lastChild; ) L = L.lastChild;
          L && (T = L.textContent.length);
        } else if (o.keyCode === 40 && M) {
          const z = m && m.nextElementSibling;
          for (z ? L = z.children[p.cellIndex] : L = n.getNextDeepestNode(h, u.context.element.wysiwyg); L.firstChild; ) L = L.firstChild;
        }
        if (L)
          return d(L, T), !1;
      }
      const v = u.getFileComponent(a);
      if (v) {
        const m = /37|38/.test(o.keyCode), p = /39|40/.test(o.keyCode);
        if (m) {
          const _ = n.getPreviousDeepestNode(v.target, u.context.element.wysiwyg);
          d(_, _ && _.textContent.length);
        } else if (p) {
          const _ = n.getNextDeepestNode(v.target, u.context.element.wysiwyg);
          d(_);
        }
      }
    },
    onKeyUp_wysiwyg: function(o) {
      if (g._onShortcutKey) return;
      u._editorRange();
      const a = o.keyCode, d = o.ctrlKey || o.metaKey || a === 91 || a === 92 || a === 224, h = o.altKey;
      if (u.isReadOnly) {
        !d && g._cursorMoveKeyCode.test(a) && g._applyTagEffects();
        return;
      }
      const v = u.getRange();
      let m = u.getSelectionNode();
      if (u._isBalloon && (u._isBalloonAlways && a !== 27 || !v.collapsed))
        if (u._isBalloonAlways)
          a !== 27 && g._showToolbarBalloonDelay();
        else {
          g._showToolbarBalloon();
          return;
        }
      let p = m;
      for (; p.firstChild; ) p = p.firstChild;
      const _ = u.getFileComponent(p);
      if (!(o.keyCode === 16 || o.shiftKey) && _ ? u.selectComponent(_.target, _.pluginName) : u.currentFileComponentInfo && u.controllersOff(), a === 8 && n.isWysiwygDiv(m) && m.textContent === "" && m.children.length === 0) {
        o.preventDefault(), o.stopPropagation(), m.innerHTML = "";
        const L = n.createElement(n.isFormatElement(u._variable.currentNodes[0]) ? u._variable.currentNodes[0] : l.defaultTag);
        L.innerHTML = "<br>", m.appendChild(L), u.setRange(L, 0, L, 0), g._applyTagEffects(), u.history.push(!1);
        return;
      }
      const w = n.getFormatElement(m, null), y = n.getRangeFormatElement(m, null), x = u._formatAttrsTemp;
      if (x) {
        for (let L = 0, T = x.length; L < T; L++) {
          if (a === 13 && /^id$/i.test(x[L].name)) {
            w.removeAttribute("id");
            continue;
          }
          w.setAttribute(x[L].name, x[L].value);
        }
        u._formatAttrsTemp = null;
      }
      if (!w && v.collapsed && !n.isComponent(m) && !n.isList(m) && u._setDefaultFormat(n.isRangeFormatElement(y) ? "DIV" : l.defaultTag) !== null && (m = u.getSelectionNode()), !d && !h && !g._nonTextKeyCode.test(a) && m.nodeType === 3 && n.zeroWidthRegExp.test(m.textContent) && !(o.isComposing !== void 0 ? o.isComposing : g._IEisComposing)) {
        let L = v.startOffset, T = v.endOffset;
        const z = (m.textContent.substring(0, T).match(g._frontZeroWidthReg) || "").length;
        L = v.startOffset - z, T = v.endOffset - z, m.textContent = m.textContent.replace(n.zeroWidthRegExp, ""), u.setRange(m, L < 0 ? 0 : L, m, T < 0 ? 0 : T);
      }
      u._charCount(""), !(typeof C.onKeyUp == "function" && C.onKeyUp(o, u) === !1) && !d && !h && !g._historyIgnoreKeyCode.test(a) && u.history.push(!0);
    },
    onScroll_wysiwyg: function(o) {
      u.controllersOff(), u._isBalloon && g._hideToolbar(), typeof C.onScroll == "function" && C.onScroll(o, u);
    },
    onFocus_wysiwyg: function(o) {
      u._antiBlur || (u.hasFocus = !0, f.setTimeout(g._applyTagEffects), u._isInline && g._showToolbarInline(), typeof C.onFocus == "function" && C.onFocus(o, u));
    },
    onBlur_wysiwyg: function(o) {
      u._antiBlur || u._variable.isCodeView || (u.hasFocus = !1, u.effectNode = null, u.controllersOff(), (u._isInline || u._isBalloon) && g._hideToolbar(), u._setKeyEffect([]), u._variable.currentNodes = [], u._variable.currentNodesMap = [], l.showPathLabel && (e.element.navigation.textContent = ""), typeof C.onBlur == "function" && C.onBlur(o, u, this));
    },
    onMouseDown_resizingBar: function(o) {
      o.stopPropagation(), u.submenuOff(), u.controllersOff(), u._variable.resizeClientY = o.clientY, e.element.resizeBackground.style.display = "block";
      function a() {
        e.element.resizeBackground.style.display = "none", c.removeEventListener("mousemove", g._resize_editor), c.removeEventListener("mouseup", a);
      }
      c.addEventListener("mousemove", g._resize_editor), c.addEventListener("mouseup", a);
    },
    _resize_editor: function(o) {
      const a = e.element.editorArea.offsetHeight + (o.clientY - u._variable.resizeClientY), d = a < u._variable.minResizingSize ? u._variable.minResizingSize : a;
      e.element.wysiwygFrame.style.height = e.element.code.style.height = d + "px", u._variable.resizeClientY = o.clientY, n.isResizeObserverSupported || u.__callResizeFunction(d, null);
    },
    onResize_window: function() {
      n.isResizeObserverSupported || u.resetResponsiveToolbar();
      const o = e.element.toolbar, a = o.style.display === "none" || u._isInline && !u._inlineToolbarAttr.isShow;
      if (!(o.offsetWidth === 0 && !a)) {
        if (e.fileBrowser && e.fileBrowser.area.style.display === "block" && (e.fileBrowser.body.style.maxHeight = f.innerHeight - e.fileBrowser.header.offsetHeight - 50 + "px"), u.submenuActiveButton && u.submenu && u._setMenuPosition(u.submenuActiveButton, u.submenu), u._variable.isFullScreen) {
          u._variable.innerHeight_fullScreen += f.innerHeight - o.offsetHeight - u._variable.innerHeight_fullScreen, e.element.editorArea.style.height = u._variable.innerHeight_fullScreen + "px";
          return;
        }
        if (u._variable.isCodeView && u._isInline) {
          g._showToolbarInline();
          return;
        }
        u._iframeAutoHeight(), u._sticky && (o.style.width = e.element.topArea.offsetWidth - 2 + "px", g.onScroll_window());
      }
    },
    onScroll_window: function() {
      if (u._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || l.stickyToolbar < 0) return;
      const o = e.element, a = o.editorArea.offsetHeight, d = (this.scrollY || c.documentElement.scrollTop) + l.stickyToolbar, h = g._getEditorOffsets(l.toolbarContainer).top - (u._isInline ? o.toolbar.offsetHeight : 0), v = u._isInline && d - h > 0 ? d - h - e.element.toolbar.offsetHeight : 0;
      d < h ? g._offStickyToolbar() : d + u._variable.minResizingSize >= a + h ? (u._sticky || g._onStickyToolbar(v), o.toolbar.style.top = v + a + h + l.stickyToolbar - d - u._variable.minResizingSize + "px") : d >= h && g._onStickyToolbar(v);
    },
    _getEditorOffsets: function(o) {
      let a = o || e.element.topArea, d = 0, h = 0, v = 0;
      for (; a; )
        d += a.offsetTop, h += a.offsetLeft, v += a.scrollTop, a = a.offsetParent;
      return {
        top: d,
        left: h,
        scroll: v
      };
    },
    _getPageBottomSpace: function() {
      return c.documentElement.scrollHeight - (g._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
    },
    _onStickyToolbar: function(o) {
      const a = e.element;
      !u._isInline && !l.toolbarContainer && (a._stickyDummy.style.height = a.toolbar.offsetHeight + "px", a._stickyDummy.style.display = "block"), a.toolbar.style.top = l.stickyToolbar + o + "px", a.toolbar.style.width = u._isInline ? u._inlineToolbarAttr.width : a.toolbar.offsetWidth + "px", n.addClass(a.toolbar, "se-toolbar-sticky"), u._sticky = !0;
    },
    _offStickyToolbar: function() {
      const o = e.element;
      o._stickyDummy.style.display = "none", o.toolbar.style.top = u._isInline ? u._inlineToolbarAttr.top : "", o.toolbar.style.width = u._isInline ? u._inlineToolbarAttr.width : "", o.editorArea.style.marginTop = "", n.removeClass(o.toolbar, "se-toolbar-sticky"), u._sticky = !1;
    },
    _codeViewAutoHeight: function() {
      u._variable.isFullScreen || (e.element.code.style.height = e.element.code.scrollHeight + "px");
    },
    // FireFox - table delete, Chrome - image, video, audio
    _hardDelete: function() {
      const o = u.getRange(), a = o.startContainer, d = o.endContainer, h = n.getRangeFormatElement(a), v = n.getRangeFormatElement(d), m = n.isCell(h), p = n.isCell(v), _ = o.commonAncestorContainer;
      if ((m && !h.previousElementSibling && !h.parentElement.previousElementSibling || p && !v.nextElementSibling && !v.parentElement.nextElementSibling) && h !== v)
        if (!m)
          n.removeItem(n.getParentElement(v, function(x) {
            return _ === x.parentNode;
          }));
        else if (!p)
          n.removeItem(n.getParentElement(h, function(x) {
            return _ === x.parentNode;
          }));
        else
          return n.removeItem(n.getParentElement(h, function(x) {
            return _ === x.parentNode;
          })), u.nativeFocus(), !0;
      const w = a.nodeType === 1 ? n.getParentElement(a, ".se-component") : null, y = d.nodeType === 1 ? n.getParentElement(d, ".se-component") : null;
      return w && n.removeItem(w), y && n.removeItem(y), !1;
    },
    onPaste_wysiwyg: function(o) {
      const a = n.isIE ? f.clipboardData : o.clipboardData;
      return a ? g._dataTransferAction("paste", o, a) : !0;
    },
    _setClipboardComponent: function(o, a, d) {
      o.preventDefault(), o.stopPropagation(), d.setData("text/html", a.component.outerHTML);
    },
    onCopy_wysiwyg: function(o) {
      const a = n.isIE ? f.clipboardData : o.clipboardData;
      if (typeof C.onCopy == "function" && C.onCopy(o, a, u) === !1)
        return o.preventDefault(), o.stopPropagation(), !1;
      const d = u.currentFileComponentInfo;
      d && !n.isIE && (g._setClipboardComponent(o, d, a), n.addClass(d.component, "se-component-copy"), f.setTimeout(function() {
        n.removeClass(d.component, "se-component-copy");
      }, 150));
    },
    onSave_wysiwyg: function(o) {
      if (typeof C.onSave == "function") {
        C.onSave(o, u);
        return;
      }
    },
    onCut_wysiwyg: function(o) {
      const a = n.isIE ? f.clipboardData : o.clipboardData;
      if (typeof C.onCut == "function" && C.onCut(o, a, u) === !1)
        return o.preventDefault(), o.stopPropagation(), !1;
      const d = u.currentFileComponentInfo;
      d && !n.isIE && (g._setClipboardComponent(o, d, a), n.removeItem(d.component), u.controllersOff()), f.setTimeout(function() {
        u.history.push(!1);
      });
    },
    onDrop_wysiwyg: function(o) {
      if (u.isReadOnly || n.isIE)
        return o.preventDefault(), o.stopPropagation(), !1;
      const a = o.dataTransfer;
      return a ? (g._setDropLocationSelection(o), u.removeNode(), document.body.contains(u.currentControllerTarget) || u.controllersOff(), g._dataTransferAction("drop", o, a)) : !0;
    },
    _setDropLocationSelection: function(o) {
      const a = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
      let d = null;
      if (o.rangeParent ? (a.startContainer = o.rangeParent, a.startOffset = o.rangeOffset, a.endContainer = o.rangeParent, a.endOffset = o.rangeOffset) : u._wd.caretRangeFromPoint ? d = u._wd.caretRangeFromPoint(o.clientX, o.clientY) : d = u.getRange(), d && (a.startContainer = d.startContainer, a.startOffset = d.startOffset, a.endContainer = d.endContainer, a.endOffset = d.endOffset), a.startContainer === a.endContainer) {
        const h = n.getParentElement(a.startContainer, n.isComponent);
        h && (a.startContainer = h, a.startOffset = 0, a.endContainer = h, a.endOffset = 0);
      }
      u.setRange(a.startContainer, a.startOffset, a.endContainer, a.endOffset);
    },
    _dataTransferAction: function(o, a, d) {
      let h, v;
      if (n.isIE) {
        h = d.getData("Text");
        const m = u.getRange(), p = n.createElement("DIV"), _ = {
          sc: m.startContainer,
          so: m.startOffset,
          ec: m.endContainer,
          eo: m.endOffset
        };
        return p.setAttribute("contenteditable", !0), p.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(p), p.focus(), f.setTimeout(function() {
          v = p.innerHTML, n.removeItem(p), u.setRange(_.sc, _.so, _.ec, _.eo), g._setClipboardData(o, a, h, v, d);
        }), !0;
      } else if (h = d.getData("text/plain"), v = d.getData("text/html"), g._setClipboardData(o, a, h, v, d) === !1)
        return a.preventDefault(), a.stopPropagation(), !1;
    },
    _setClipboardData: function(o, a, d, h, v) {
      const m = /class=["']*Mso(Normal|List)/i.test(h) || /content=["']*Word.Document/i.test(h) || /content=["']*OneNote.File/i.test(h) || /content=["']*Excel.Sheet/i.test(h);
      !h ? h = n._HTMLConvertor(d).replace(/\n/g, "<br>") : (h = h.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), m && (h = h.replace(/\n/g, " "), d = d.replace(/\n/g, " ")), h = u.cleanHTML(h, u.pasteTagsWhitelistRegExp, u.pasteTagsBlacklistRegExp));
      const _ = u._charCount(u._charTypeHTML ? h : d);
      if (o === "paste" && typeof C.onPaste == "function") {
        const y = C.onPaste(a, h, _, u);
        if (y === !1)
          return !1;
        if (typeof y == "string") {
          if (!y) return !1;
          h = y;
        }
      }
      if (o === "drop" && typeof C.onDrop == "function") {
        const y = C.onDrop(a, h, _, u);
        if (y === !1)
          return !1;
        if (typeof y == "string") {
          if (!y) return !1;
          h = y;
        }
      }
      const w = v.files;
      if (w.length > 0 && !m)
        return /^image/.test(w[0].type) && u.plugins.image && C.insertImage(w), !1;
      if (!_)
        return !1;
      if (h)
        return C.insertHTML(h, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(o) {
      if (u.isDisabled || u.isReadOnly) return !1;
      const a = n.getParentElement(o.target, n.isComponent), d = u._lineBreaker.style;
      if (a && !u.currentControllerName) {
        const h = e.element;
        let v = 0, m = h.wysiwyg;
        do
          v += m.scrollTop, m = m.parentElement;
        while (m && !/^(BODY|HTML)$/i.test(m.nodeName));
        const p = h.wysiwyg.scrollTop, _ = g._getEditorOffsets(null), w = n.getOffset(a, h.wysiwygFrame).top + p, y = o.pageY + v + (l.iframe && !l.toolbarContainer ? h.toolbar.offsetHeight : 0), x = w + (l.iframe ? v : _.top), M = n.isListCell(a.parentNode);
        let L = "", T = "";
        if ((M ? !a.previousSibling : !n.isFormatElement(a.previousElementSibling)) && y < x + 20)
          T = w, L = "t";
        else if ((M ? !a.nextSibling : !n.isFormatElement(a.nextElementSibling)) && y > x + a.offsetHeight - 20)
          T = w + a.offsetHeight, L = "b";
        else {
          d.display = "none";
          return;
        }
        u._variable._lineBreakComp = a, u._variable._lineBreakDir = L, d.top = T - p + "px", u._lineBreakerButton.style.left = n.getOffset(a).left + a.offsetWidth / 2 - 15 + "px", d.display = "block";
      } else d.display !== "none" && (d.display = "none");
    },
    _enterPrevent(o) {
      o.preventDefault(), n.isMobile && u.__focusTemp.focus();
    },
    _onMouseDown_lineBreak: function(o) {
      o.preventDefault();
    },
    _onLineBreak: function(o) {
      o.preventDefault();
      const a = u._variable._lineBreakComp, d = this ? this : u._variable._lineBreakDir, h = n.isListCell(a.parentNode), v = n.createElement(h ? "BR" : n.isCell(a.parentNode) ? "DIV" : l.defaultTag);
      if (h || (v.innerHTML = "<br>"), u._charTypeHTML && !u.checkCharCount(v.outerHTML, "byte-html")) return;
      a.parentNode.insertBefore(v, d === "t" ? a : a.nextSibling), u._lineBreaker.style.display = "none", u._variable._lineBreakComp = null;
      const m = h ? v : v.firstChild;
      u.setRange(m, 1, m, 1), u.history.push(!1);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const o = l.iframe ? u._ww : e.element.wysiwyg;
      n.isResizeObserverSupported && (this._resizeObserver = new f.ResizeObserver(function(a) {
        u.__callResizeFunction(-1, a[0]);
      })), e.element.toolbar.addEventListener("mousedown", g._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", g._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", g.onClick_toolbar, !1), o.addEventListener("mousedown", g.onMouseDown_wysiwyg, !1), o.addEventListener("click", g.onClick_wysiwyg, !1), o.addEventListener(n.isIE ? "textinput" : "input", g.onInput_wysiwyg, !1), o.addEventListener("keydown", g.onKeyDown_wysiwyg, !1), o.addEventListener("keyup", g.onKeyUp_wysiwyg, !1), o.addEventListener("paste", g.onPaste_wysiwyg, !1), o.addEventListener("copy", g.onCopy_wysiwyg, !1), o.addEventListener("cut", g.onCut_wysiwyg, !1), o.addEventListener("drop", g.onDrop_wysiwyg, !1), o.addEventListener("scroll", g.onScroll_wysiwyg, !1), o.addEventListener("focus", g.onFocus_wysiwyg, !1), o.addEventListener("blur", g.onBlur_wysiwyg, !1), g._lineBreakerBind = { a: g._onLineBreak.bind(""), t: g._onLineBreak.bind("t"), b: g._onLineBreak.bind("b") }, o.addEventListener("mousemove", g.onMouseMove_wysiwyg, !1), u._lineBreakerButton.addEventListener("mousedown", g._onMouseDown_lineBreak, !1), u._lineBreakerButton.addEventListener("click", g._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", g._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", g._lineBreakerBind.b, !1), o.addEventListener("touchstart", g.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), o.addEventListener("touchend", g.onClick_wysiwyg, { passive: !0, useCapture: !1 }), l.height === "auto" && !l.codeMirrorEditor && (e.element.code.addEventListener("keydown", g._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", g._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", g._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(l.height) && l.resizeEnable ? e.element.resizingBar.addEventListener("mousedown", g.onMouseDown_resizingBar, !1) : n.addClass(e.element.resizingBar, "se-resizing-none")), g._setResponsiveToolbar(), n.isResizeObserverSupported && (this._toolbarObserver = new f.ResizeObserver(u.resetResponsiveToolbar)), f.addEventListener("resize", g.onResize_window, !1), l.stickyToolbar > -1 && f.addEventListener("scroll", g.onScroll_window, !1);
    },
    _removeEvent: function() {
      const o = l.iframe ? u._ww : e.element.wysiwyg;
      e.element.toolbar.removeEventListener("mousedown", g._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", g._buttonsEventHandler), e.element.toolbar.removeEventListener("click", g.onClick_toolbar), o.removeEventListener("mousedown", g.onMouseDown_wysiwyg), o.removeEventListener("click", g.onClick_wysiwyg), o.removeEventListener(n.isIE ? "textinput" : "input", g.onInput_wysiwyg), o.removeEventListener("keydown", g.onKeyDown_wysiwyg), o.removeEventListener("keyup", g.onKeyUp_wysiwyg), o.removeEventListener("paste", g.onPaste_wysiwyg), o.removeEventListener("copy", g.onCopy_wysiwyg), o.removeEventListener("cut", g.onCut_wysiwyg), o.removeEventListener("drop", g.onDrop_wysiwyg), o.removeEventListener("scroll", g.onScroll_wysiwyg), o.removeEventListener("mousemove", g.onMouseMove_wysiwyg), u._lineBreakerButton.removeEventListener("mousedown", g._onMouseDown_lineBreak), u._lineBreakerButton.removeEventListener("click", g._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", g._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", g._lineBreakerBind.b), g._lineBreakerBind = null, o.removeEventListener("touchstart", g.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), o.removeEventListener("touchend", g.onClick_wysiwyg, { passive: !0, useCapture: !1 }), o.removeEventListener("focus", g.onFocus_wysiwyg), o.removeEventListener("blur", g.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", g._codeViewAutoHeight), e.element.code.removeEventListener("keyup", g._codeViewAutoHeight), e.element.code.removeEventListener("paste", g._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", g.onMouseDown_resizingBar), g._resizeObserver && (g._resizeObserver.unobserve(e.element.wysiwygFrame), g._resizeObserver = null), g._toolbarObserver && (g._toolbarObserver.unobserve(e.element._toolbarShadow), g._toolbarObserver = null), f.removeEventListener("resize", g.onResize_window), f.removeEventListener("scroll", g.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (r.length === 0) {
        r = null;
        return;
      }
      g._responsiveCurrentSize = "default";
      const o = g._responsiveButtonSize = [], a = g._responsiveButtons = { default: r[0] };
      for (let d = 1, h = r.length, v, m; d < h; d++)
        m = r[d], v = m[0] * 1, o.push(v), a[v] = m[1];
      o.sort(function(d, h) {
        return d - h;
      }).unshift("default");
    }
  }, C = {
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
    setToolbarButtons: function(o) {
      u.submenuOff(), u.containerOff(), u.moreLayerOff();
      const a = Dt._createToolBar(c, o, u.plugins, l);
      r = a.responsiveButtons, g._setResponsiveToolbar(), e.element.toolbar.replaceChild(a._buttonTray, e.element._buttonTray);
      const d = Ht(e.element.originElement, u._getConstructed(e.element), l);
      e.element = d.element, e.tool = d.tool, l.iframe && (e.element.wysiwyg = u._wd.body), u._recoverButtonStates(), u._cachingButtons(), u.history._resetCachingButton(), u.effectNode = null, u.hasFocus && g._applyTagEffects(), u.isReadOnly && n.setDisabledButtons(!0, u.resizingDisabledButtons), typeof C.onSetToolbarButtons == "function" && C.onSetToolbarButtons(a._buttonTray.querySelectorAll("button"), u);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(o) {
      g._removeEvent(), u._resetComponents(), n.removeClass(u._styleCommandMap.showBlocks, "active"), n.removeClass(u._styleCommandMap.codeView, "active"), u._variable.isCodeView = !1, u._iframeAuto = null, u.plugins = o.plugins || u.plugins;
      const a = [l, o].reduce(function(m, p) {
        for (let _ in p)
          if (n.hasOwn(p, _))
            if (_ === "plugins" && p[_] && m[_]) {
              let w = m[_], y = p[_];
              w = w.length ? w : f.Object.keys(w).map(function(x) {
                return w[x];
              }), y = y.length ? y : f.Object.keys(y).map(function(x) {
                return y[x];
              }), m[_] = y.filter(function(x) {
                return w.indexOf(x) === -1;
              }).concat(w);
            } else
              m[_] = p[_];
        return m;
      }, {}), d = e.element, h = d.wysiwyg.innerHTML, v = Dt._setOptions(a, e, l);
      v.callButtons && (t = v.callButtons, u.initPlugins = {}), v.plugins && (u.plugins = i = v.plugins), d._menuTray.children.length === 0 && (this._menuTray = {}), r = v.toolbar.responsiveButtons, u.options = l = a, u.lang = s = l.lang, l.iframe && d.wysiwygFrame.addEventListener("load", function() {
        n._setIframeDocument(this, l), u._setOptionsInit(d, h);
      }), d.editorArea.appendChild(d.wysiwygFrame), l.iframe || u._setOptionsInit(d, h);
    },
    /**
     * @description Set "options.defaultStyle" style.
     * Define the style of the edit area
     * It can also be defined with the "setOptions" method, but the "setDefaultStyle" method does not render the editor again.
     * @param {String} style Style string
     */
    setDefaultStyle: function(o) {
      const a = l._editorStyles = n._setDefaultOptionStyle(l, o), d = e.element;
      d.topArea.style.cssText = a.top, d.code.style.cssText = l._editorStyles.frame, d.code.style.display = "none", l.height === "auto" ? d.code.style.overflow = "hidden" : d.code.style.overflow = "", l.iframe ? (d.wysiwygFrame.style.cssText = a.frame, d.wysiwyg.style.cssText = a.editor) : d.wysiwygFrame.style.cssText = a.frame + a.editor;
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
      e.element.originElement.value = o, g.onSave_wysiwyg(o, u);
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
      return o = typeof o == "string" ? o : l.charCounterType, u.getCharLength(u._charTypeHTML ? e.element.wysiwyg.innerHTML : e.element.wysiwyg.textContent, o);
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
    insertHTML: function(o, a, d, h) {
      if (e.element.wysiwygFrame.contains(u.getSelection().focusNode) || u.focus(), typeof o == "string") {
        a || (o = u.cleanHTML(o, null, null));
        try {
          if (n.isListCell(n.getFormatElement(u.getSelectionNode(), null))) {
            const T = c.createRange().createContextualFragment(o).childNodes;
            u._isFormatData(T) && (o = u._convertListCell(T));
          }
          const m = c.createRange().createContextualFragment(o).childNodes;
          if (d) {
            const L = u._charTypeHTML ? "outerHTML" : "textContent";
            let T = "";
            for (let z = 0, U = m.length; z < U; z++)
              T += m[z][L];
            if (!u.checkCharCount(T, null)) return;
          }
          let p, _, w, y, x;
          for (; p = m[0]; ) {
            if (y && y.nodeType === 3 && _ && _.nodeType === 1 && n.isBreak(p)) {
              y = p, n.removeItem(p);
              continue;
            }
            w = u.insertNode(p, _, !1), _ = w.container || w, x || (x = w), y = p;
          }
          y.nodeType === 3 && _.nodeType === 1 && (_ = y);
          const M = _.nodeType === 3 ? w.endOffset || _.textContent.length : _.childNodes.length;
          h ? u.setRange(x.container || x, x.startOffset || 0, _, M) : u.setRange(_, M, _, M);
        } catch (v) {
          if (u.isDisabled || u.isReadOnly) return;
          console.warn("[SUNEDITOR.insertHTML.fail] " + v), u.execCommand("insertHTML", !1, o);
        }
      } else if (n.isComponent(o))
        u.insertComponent(o, !1, d, !1);
      else {
        let v = null;
        (n.isFormatElement(o) || n.isMedia(o)) && (v = n.getFormatElement(u.getSelectionNode(), null)), u.insertNode(o, v, d);
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
        const d = n.createElement("DIV");
        d.innerHTML = a;
        const h = e.element.wysiwyg, v = d.children;
        for (let m = 0, p = v.length; m < p; m++)
          v[m] && h.appendChild(v[m]);
      }
      u.history.push(!1);
    },
    /**
     * @description Switch to or off "ReadOnly" mode.
     * @param {Boolean} value "readOnly" boolean value.
     */
    readOnly: function(o) {
      u.isReadOnly = o, n.setDisabledButtons(!!o, u.resizingDisabledButtons), o ? (u.controllersOff(), u.submenuActiveButton && u.submenuActiveButton.disabled && u.submenuOff(), u._moreLayerActiveButton && u._moreLayerActiveButton.disabled && u.moreLayerOff(), u.containerActiveButton && u.containerActiveButton.disabled && u.containerOff(), u.modalForm && u.plugins.dialog.close.call(u), e.element.code.setAttribute("readOnly", "true"), n.addClass(e.element.wysiwygFrame, "se-read-only")) : (e.element.code.removeAttribute("readOnly"), n.removeClass(e.element.wysiwygFrame, "se-read-only")), l.codeMirrorEditor && l.codeMirrorEditor.setOption("readOnly", !!o);
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
      o.display === "none" && (o.display = l.display);
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
      u.submenuOff(), u.containerOff(), u.controllersOff(), u.notice && u.notice.close.call(u), u.modalForm && u.plugins.dialog.close.call(u), u.history._destroy(), g._removeEvent(), n.removeItem(e.element.toolbar), n.removeItem(e.element.topArea);
      for (let o in u.functions)
        n.hasOwn(u, o) && delete u.functions[o];
      for (let o in u)
        n.hasOwn(u, o) && delete u[o];
      for (let o in g)
        n.hasOwn(g, o) && delete g[o];
      for (let o in e)
        n.hasOwn(e, o) && delete e[o];
      for (let o in t)
        n.hasOwn(t, o) && delete t[o];
      for (let o in this)
        n.hasOwn(this, o) && delete this[o];
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
        u._isInline ? g._showToolbarInline() : (e.element.toolbar.style.display = "", e.element._stickyDummy.style.display = ""), g.onResize_window();
      },
      /**
       * @description Hide the toolbar
       */
      hide: function() {
        u._isInline ? g._hideToolbar() : (e.element.toolbar.style.display = "none", e.element._stickyDummy.style.display = "none"), g.onResize_window();
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
  u.functions = C, u.options = l;
  let S = e.element, E = S.originElement, A = S.topArea;
  return E.style.display = "none", A.style.display = "block", l.iframe && S.wysiwygFrame.addEventListener("load", function() {
    n._setIframeDocument(this, l), u._editorInit(!1, l.value), l.value = null;
  }), typeof E.nextElementSibling == "object" ? E.parentNode.insertBefore(A, E.nextElementSibling) : E.parentNode.appendChild(A), S.editorArea.appendChild(S.wysiwygFrame), S = E = A = null, l.iframe || (u._editorInit(!1, l.value), l.value = null), C;
}
const xs = {
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
    ae._propertiesInit(), typeof t != "object" && (t = {}), i && (t = [i, t].reduce(function(r, c) {
      for (let f in c)
        if (ae.hasOwn(c, f))
          if (f === "plugins" && c[f] && r[f]) {
            let n = r[f], b = c[f];
            n = n.length ? n : Object.keys(n).map(function(u) {
              return n[u];
            }), b = b.length ? b : Object.keys(b).map(function(u) {
              return b[u];
            }), r[f] = b.filter(function(u) {
              return n.indexOf(u) === -1;
            }).concat(n);
          } else
            r[f] = c[f];
      return r;
    }, {}));
    const s = typeof e == "string" ? document.getElementById(e) : e;
    if (!s)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const l = Dt.init(s, t);
    if (l.constructed._top.id && document.getElementById(l.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + l.constructed._top.id + '")');
    return ks(Ht(s, l.constructed, l.options), l.pluginCallButtons, l.plugins, l.options.lang, t, l._responsiveButtons);
  }
}, Ss = ["innerHTML", "id", "tabindex"], Es = /* @__PURE__ */ ke({
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
    const s = i, l = e, r = J(null), c = J(l.modelValue), f = J(null), n = J(void 0), b = J(l.focusing), u = (E) => {
      b.value = !0, s("focus", E);
    }, g = (E) => {
      b.value = !1, s("blur", E);
    }, C = (E) => {
      n.value && clearTimeout(n.value), n.value = setTimeout(() => {
        vi(E) === "" ? c.value = "" : c.value = E;
      }, 100);
    }, S = () => {
      let E = {
        lang: fi[l.lang] ? fi[l.lang] : St,
        plugins: {
          ...ys
        },
        ...ws
      };
      f.value = xs.create(l.id, E), f.value.onChange = (A) => {
        C(A), l.disabled ? f.value.disabled() : f.value.enabled();
      }, f.value.onKeyUp = (A, o) => {
        C(o.getContents());
      }, f.value.onBlur = () => {
        g();
      }, f.value.onClick = () => {
        u();
      };
    };
    return ce(() => l.modelValue, (E) => c.value = E), ce(c, (E) => s("update:modelValue", E)), Ot(() => {
      S();
    }), t({
      doSetValue: (E) => {
        f.value && f.value.setContents(E);
      }
    }), (E, A) => ($(), ne("div", {
      innerHTML: c.value,
      ref_key: "input",
      ref: r,
      id: E.id,
      tabindex: E.tabindex
    }, null, 8, Ss));
  }
}), Ls = {
  key: 0,
  class: "lkt-field--searchable-box"
}, Ts = ["value", "placeholder"], Bs = { key: 0 }, Ns = {
  key: 1,
  class: "lkt-field-select-read"
}, zs = ["title"], Rs = /* @__PURE__ */ ke({
  __name: "SelectInput",
  props: {
    modelValue: { type: [String, Number, Boolean, Object], default: !1 },
    searchable: { type: Boolean },
    searchMode: { type: Boolean },
    multiple: { type: Boolean },
    canTag: { type: Boolean },
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
    const s = i, l = e, r = l.multiple && l.canTag, c = J(""), f = J(null), n = J(l.showOptions);
    ce(n, (p) => {
      r || s("update:showOptions", p);
    });
    const b = J(l.focusing), u = J(!1), g = J(!1), C = () => {
      wt(() => {
        b.value = u.value || g.value, n.value = b.value;
      });
    };
    ce(u, (p) => {
      p && (g.value = !1), C();
    }), ce(g, (p) => {
      p && (u.value = !1), C();
    }), ce(b, (p) => {
      s(p ? "focus" : "blur");
    });
    let S, E;
    const A = (p) => {
      S = setTimeout(() => {
        u.value = !1;
      }, 100);
    }, o = (p) => {
      u.value = !0, r && p.key === "Enter" ? (s("tag", c.value), c.value = "") : ["ArrowDown", "ArrowUp", "Enter"].includes(p.key) ? s("navigate", p) : s("search", c.value);
    }, a = (p) => {
      u.value = !0;
    }, d = (p) => {
      E = setTimeout(() => {
        g.value = !1;
      }, 100);
    }, h = (p) => {
      g.value = !0, ["ArrowDown", "ArrowUp", "Enter"].includes(p.key) && s("navigate", p);
    }, v = (p) => {
      g.value = !0;
    }, m = (p) => {
      s("untag", p);
    };
    return t({
      keepFocused: () => {
        clearTimeout(S), clearTimeout(E), f.value && f.value.focus();
      }
    }), (p, _) => {
      const w = ye("lkt-tag"), y = ye("lkt-button");
      return $(), ne(He, null, [
        p.searchable && (p.multiple || p.searchMode) || j(r) ? ($(), ne("div", Ls, [
          p.multiple ? ($(), ie(w, {
            key: 0,
            icon: p.optionsIcon,
            text: p.pickedOptions.length
          }, null, 8, ["icon", "text"])) : p.pickedOptions.length > 0 ? ($(), ie(w, { key: 1 }, {
            default: _e(() => [
              se(Xe, {
                option: p.pickedOptions[0],
                "option-slot": p.optionSlot,
                icon: p.optionsIcon,
                modal: p.optionsModal,
                "modal-data": p.optionsModalData,
                download: p.optionsDownload,
                "label-formatter": p.optionsLabelFormatter,
                editable: p.editable
              }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter", "editable"])
            ]),
            _: 1
          })) : re("", !0),
          De(ve("input", {
            "onUpdate:modelValue": _[0] || (_[0] = (x) => c.value = x),
            ref_key: "queryField",
            ref: f,
            value: c.value,
            placeholder: p.searchPlaceholder,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: o,
            onBlur: A,
            onFocus: a
          }, null, 40, Ts), [
            [xt, c.value]
          ])
        ])) : re("", !0),
        De(se(y, {
          type: j(r) ? "content" : "",
          ref: "selectButton",
          class: "lkt-field--toggle-button lkt-field--select-button",
          "open-tooltip": n.value,
          "onUpdate:openTooltip": _[1] || (_[1] = (x) => n.value = x),
          onKeyup: h,
          onBlur: d,
          onFocus: v
        }, {
          default: _e(() => [
            j(r) || p.multiple && p.pickedOptions.length > 0 ? ($(), ne(He, { key: 0 }, [
              p.multipleDisplayEdition === j(Ge).Count ? ($(), ne("div", Bs, Ye(p.pickedOptions.length), 1)) : ($(), ne("ul", Ns, [
                ($(!0), ne(He, null, Je(p.pickedOptions, (x, M) => ($(), ne("li", {
                  title: x.label
                }, [
                  se(Xe, {
                    option: p.pickedOptions[M],
                    "option-slot": p.optionSlot,
                    icon: p.optionsIcon,
                    modal: p.optionsModal,
                    "modal-data": p.optionsModalData,
                    download: p.optionsDownload,
                    "label-formatter": p.optionsLabelFormatter,
                    editable: p.editable,
                    "is-tag": j(r),
                    onClickIcon: m
                  }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter", "editable", "is-tag"])
                ], 8, zs))), 256))
              ]))
            ], 64)) : !p.multiple && p.pickedOptions.length > 0 ? ($(), ie(Xe, {
              key: 1,
              option: p.pickedOptions[0],
              "option-slot": p.optionSlot,
              icon: p.optionsIcon,
              modal: p.optionsModal,
              "modal-data": p.optionsModalData,
              download: p.optionsDownload,
              "label-formatter": p.optionsLabelFormatter,
              editable: p.editable
            }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter", "editable"])) : re("", !0)
          ]),
          _: 1
        }, 8, ["type", "open-tooltip"]), [
          [Ke, p.multiple || !p.searchable || !p.searchMode]
        ])
      ], 64);
    };
  }
}), As = { class: "lkt-calc--formula" }, Ms = { class: "lkt-calc--custom-pad" }, Is = { class: "lkt-calc--pad" }, Ds = { class: "lkt-calc--numeric-pad" }, Hs = { class: "lkt-calc--math-pad" }, Os = { class: "lkt-calc--advance-math-pad" }, Vs = /* @__PURE__ */ ke({
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
    const i = t, s = e, l = J(s.modelValue), r = J(null);
    ce(l, (v) => i("update:modelValue", v));
    const c = J(s.focusing), f = J(null);
    let n;
    const b = () => {
      clearTimeout(n), r.value && typeof r.value.focus == "function" && r.value.focus();
    }, u = (v) => {
      l.value += "" + v, b();
    }, g = (v) => {
      l.value += " " + v + " ", b();
    }, C = (v) => {
      l.value += " " + v + "(", b();
    }, S = () => {
      l.value += " sqrt(", b();
    }, E = (v) => {
      l.value += "" + v, b();
    }, A = () => {
      l.value += ".", b();
    }, o = () => {
      l.value += " ", b();
    }, a = (v) => {
      l.value += "" + v.value, b();
    }, d = () => {
      c.value = !0;
    }, h = () => {
      n = setTimeout(() => {
        c.value = !1;
      }, 100);
    };
    return ce(c, (v) => {
      i(v ? "focus" : "blur");
    }), (v, m) => {
      const p = ye("lkt-button"), _ = ye("lkt-tooltip");
      return $(), ne("div", {
        ref_key: "container",
        ref: f
      }, [
        ve("div", As, [
          De(ve("input", {
            type: "text",
            ref_key: "input",
            ref: r,
            "onUpdate:modelValue": m[0] || (m[0] = (w) => l.value = w),
            onFocus: d,
            onBlur: h
          }, null, 544), [
            [xt, l.value]
          ])
        ]),
        v.editable ? ($(), ie(_, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--calc",
          modelValue: c.value,
          "onUpdate:modelValue": m[27] || (m[27] = (w) => c.value = w),
          referrer: f.value,
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: _e(() => [
            ve("div", Ms, [
              ($(!0), ne(He, null, Je(v.options, (w) => ($(), ie(p, {
                icon: w.icon,
                text: w.label,
                onClick: (y) => a(w)
              }, null, 8, ["icon", "text", "onClick"]))), 256))
            ]),
            ve("div", Is, [
              ve("div", Ds, [
                se(p, {
                  onClick: m[1] || (m[1] = (w) => u(7)),
                  text: "7",
                  class: "lkt-calc--btn-number"
                }),
                se(p, {
                  onClick: m[2] || (m[2] = (w) => u(8)),
                  text: "8",
                  class: "lkt-calc--btn-number"
                }),
                se(p, {
                  onClick: m[3] || (m[3] = (w) => u(9)),
                  text: "9",
                  class: "lkt-calc--btn-number"
                }),
                se(p, {
                  onClick: m[4] || (m[4] = (w) => u(4)),
                  text: "4",
                  class: "lkt-calc--btn-number"
                }),
                se(p, {
                  onClick: m[5] || (m[5] = (w) => u(5)),
                  text: "5",
                  class: "lkt-calc--btn-number"
                }),
                se(p, {
                  onClick: m[6] || (m[6] = (w) => u(6)),
                  text: "6",
                  class: "lkt-calc--btn-number"
                }),
                se(p, {
                  onClick: m[7] || (m[7] = (w) => u(1)),
                  text: "1",
                  class: "lkt-calc--btn-number"
                }),
                se(p, {
                  onClick: m[8] || (m[8] = (w) => u(2)),
                  text: "2",
                  class: "lkt-calc--btn-number"
                }),
                se(p, {
                  onClick: m[9] || (m[9] = (w) => u(3)),
                  text: "3",
                  class: "lkt-calc--btn-number"
                }),
                se(p, {
                  onClick: m[10] || (m[10] = (w) => A()),
                  text: "."
                }),
                se(p, {
                  onClick: m[11] || (m[11] = (w) => u(0)),
                  text: "0",
                  class: "lkt-calc--btn-number"
                }),
                se(p, {
                  onClick: m[12] || (m[12] = (w) => o()),
                  text: " "
                })
              ]),
              ve("div", Hs, [
                se(p, {
                  onClick: m[13] || (m[13] = (w) => E("[")),
                  text: "["
                }),
                se(p, {
                  onClick: m[14] || (m[14] = (w) => E("]")),
                  text: "]"
                }),
                se(p, {
                  onClick: m[15] || (m[15] = (w) => E("(")),
                  text: "("
                }),
                se(p, {
                  onClick: m[16] || (m[16] = (w) => E(")")),
                  text: ")"
                }),
                se(p, {
                  onClick: m[17] || (m[17] = (w) => g("+")),
                  text: "+"
                }),
                se(p, {
                  onClick: m[18] || (m[18] = (w) => g("-")),
                  text: "−"
                }),
                se(p, {
                  onClick: m[19] || (m[19] = (w) => g("*")),
                  text: "×"
                }),
                se(p, {
                  onClick: m[20] || (m[20] = (w) => g("/")),
                  text: "÷"
                })
              ]),
              ve("div", Os, [
                se(p, {
                  onClick: m[21] || (m[21] = (w) => S()),
                  text: "√"
                }),
                se(p, {
                  onClick: m[22] || (m[22] = (w) => C("log")),
                  text: "log"
                }),
                se(p, {
                  onClick: m[23] || (m[23] = (w) => C("ln")),
                  text: "ln"
                }),
                se(p, {
                  onClick: m[24] || (m[24] = (w) => C("sin")),
                  text: "sin"
                }),
                se(p, {
                  onClick: m[25] || (m[25] = (w) => C("cos")),
                  text: "cos"
                }),
                se(p, {
                  onClick: m[26] || (m[26] = (w) => C("tan")),
                  text: "tan"
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "referrer"])) : re("", !0)
      ], 512);
    };
  }
}), Fs = /* @__PURE__ */ ke({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = ee(() => {
      let c = di(t.validation.code, t.stack), f = {
        min: t.validation.min,
        max: t.validation.max,
        value: t.validation.equalToValue
      }, n = di(t.validation.status + "-" + t.validation.code, t.stack);
      return n && (c = n), c ? c.startsWith("__:") ? dt(c.substring(3), f) : Fl(c, f, ":", "") : t.validation.code;
    }), s = ee(() => Q.validationIconSlot !== ""), l = ee(() => Q.validationIconSlot), r = ee(() => {
      let c = [];
      return c.push("code-" + t.validation.code), c.push("is-" + t.validation.status), c.join(" ");
    });
    return (c, f) => ($(), ne("div", {
      class: Ve(["lkt-field-validation-message", r.value])
    }, [
      s.value ? ($(), ie(st(l.value), { key: 0 })) : re("", !0),
      ot(" " + Ye(i.value), 1)
    ], 2));
  }
}), Ps = {
  key: 0,
  class: "lkt-field-validation-info"
}, Us = /* @__PURE__ */ ke({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = J(t.items), s = J(!1);
    return ce(() => t.items, (l) => {
      s.value = !0, wt(() => s.value = !1);
    }, { deep: !0 }), (l, r) => s.value ? re("", !0) : ($(), ne("div", Ps, [
      ($(!0), ne(He, null, Je(i.value, (c) => ($(), ie(Fs, {
        validation: c,
        stack: l.stack,
        key: c.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), Ws = ["id"], Zs = /* @__PURE__ */ ke({
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
    const i = t, s = e, l = J(s.modelValue), r = J(s.focusing);
    let c, f;
    const n = J({}), b = () => {
      clearTimeout(f), f = setTimeout(() => {
        n.value = {
          query: l.value
        };
      }, 300);
    }, u = () => {
      r.value = !0;
    }, g = () => {
      c = setTimeout(() => {
        r.value = !1;
      }, 100);
    };
    ce(r, (S) => {
      i(S ? "focus" : "blur");
    });
    const C = () => {
      clearTimeout(c), setTimeout(() => {
        u();
      }, 100);
    };
    return (S, E) => {
      const A = ye("lkt-table"), o = ye("lkt-tooltip");
      return $(), ne(He, null, [
        De(ve("input", {
          id: S.id,
          type: "text",
          ref: "input",
          "onUpdate:modelValue": E[0] || (E[0] = (a) => l.value = a),
          onFocus: u,
          onBlur: g,
          onKeyup: b
        }, null, 40, Ws), [
          [xt, l.value]
        ]),
        S.editable && S.hadFirstFocus ? ($(), ie(o, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--dropdown lkt-field--search-results",
          modelValue: r.value,
          "onUpdate:modelValue": E[1] || (E[1] = (a) => r.value = a),
          referrer: S.container,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: _e(() => [
            se(A, {
              resource: S.optionsResource,
              filters: n.value,
              "items-container-class": "lkt-field--dropdown-options",
              type: "ul",
              onPage: C,
              onClick: C
            }, {
              item: _e(({ item: a, index: d, isLoading: h, canCreate: v, canUpdate: m, canDrop: p, canRead: _, doDrop: w }) => [
                se(Xe, {
                  option: a,
                  onClick: C
                }, null, 8, ["option"])
              ]),
              _: 1
            }, 8, ["resource", "filters"])
          ]),
          _: 1
        }, 8, ["modelValue", "referrer"])) : re("", !0)
      ], 64);
    };
  }
}), $s = {
  key: 0,
  class: "lkt-field-main"
}, qs = {
  key: 3,
  class: "lkt-field--read-value"
}, js = ["innerHTML", "title"], Gs = ["title"], Ks = { key: 0 }, Ys = {
  key: 1,
  class: "lkt-field-select-read"
}, Xs = ["title"], Js = ["innerHTML"], Qs = ["innerHTML", "title"], eo = ["innerHTML", "title"], to = /* @__PURE__ */ ke({
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
    multipleDisplay: { default: Ge.List },
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
    const i = t, s = Vt(), l = e, r = () => i("click"), c = ee(() => {
      switch (l.type) {
        case W.Select:
          if (l.multiple && Array.isArray(l.value) && l.value.length > 0 || l.multiple && l.multipleDisplay === Ge.Count || !l.multiple && l.value) return "";
          break;
        case W.Date:
          if (l.value !== "") return "";
          break;
        default:
          if (l.value !== "") return "";
      }
      return Q.customValueSlots[l.emptyValueSlot] ?? Q.defaultEmptyValueSlot;
    }), f = ee(() => Q.customValueSlots[l.valueSlot] ?? "");
    let n = l.value;
    return l.type === W.Select && l.multiple && !Array.isArray(n) && (n = []), (l.type === W.Textarea || l.type === W.Text) && typeof Q.readTextMaxLength < "u" && n.length > Q.readTextMaxLength && (n = n.substring(0, Q.readTextMaxLength) + "..."), (b, u) => {
      const g = ye("lkt-image"), C = ye("lkt-button"), S = ye("lkt-anchor"), E = ye("lkt-tag");
      return $(), ne("div", {
        class: "lkt-field--read",
        onClick: r
      }, [
        j(s).value ? Ue(b.$slots, "value", {
          key: 0,
          value: j(n),
          title: b.title,
          data: b.slotData
        }) : c.value ? ($(), ie(st(c.value), {
          key: 1,
          data: b.slotData
        }, null, 8, ["data"])) : f.value ? ($(), ie(st(f.value), {
          key: 2,
          value: j(n),
          title: b.title,
          data: b.slotData
        }, null, 8, ["value", "title", "data"])) : ($(), ne(He, { key: 3 }, [
          b.type === j(W).File || b.type === j(W).Image ? ($(), ne("div", $s, [
            se(C, {
              class: "lkt-field--toggle-button",
              text: b.type === j(W).File ? b.fileName : ""
            }, {
              default: _e(() => [
                b.type === j(W).Image ? ($(), ie(g, {
                  key: 0,
                  src: j(n),
                  class: "lkt-field--image-cover"
                }, null, 8, ["src"])) : re("", !0),
                b.type === j(W).Image ? ($(), ie(g, {
                  key: 1,
                  src: j(n),
                  class: "lkt-field--image-main"
                }, null, 8, ["src"])) : re("", !0)
              ]),
              _: 1
            }, 8, ["text"])
          ])) : b.type === j(W).Email ? ($(), ie(S, {
            key: 1,
            type: "mail",
            class: "lkt-field--read-value",
            title: b.title,
            to: j(n)
          }, {
            default: _e(() => [
              ot(Ye(j(n)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : b.type === j(W).Tel ? ($(), ie(S, {
            key: 2,
            type: "tel",
            class: "lkt-field--read-value",
            title: b.title,
            to: j(n)
          }, {
            default: _e(() => [
              ot(Ye(j(n)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : j(tt).includes(b.type) ? ($(), ne("div", qs, [
            se(E, {
              icon: j(n) ? "lkt-field-icon-ok" : "lkt-field-icon-cancel",
              "featured-text": b.label,
              title: b.title
            }, null, 8, ["icon", "featured-text", "title"])
          ])) : b.type === j(W).Date ? ($(), ne("div", {
            key: 4,
            class: "lkt-field--read-value",
            innerHTML: j(n),
            title: b.title
          }, null, 8, js)) : b.type === j(W).Select ? ($(), ne("div", {
            key: 5,
            class: "lkt-field--read-value",
            title: b.title
          }, [
            b.multiple ? ($(), ne(He, { key: 0 }, [
              b.multipleDisplay === j(Ge).Count ? ($(), ne("div", Ks, Ye(j(n).length), 1)) : j(n).length > 0 ? ($(), ne("ul", Ys, [
                ($(!0), ne(He, null, Je(j(n), (A, o) => {
                  var a;
                  return $(), ne("li", {
                    title: (a = j(n)[o]) == null ? void 0 : a.label
                  }, [
                    se(Xe, {
                      option: j(n)[o],
                      "option-slot": b.optionSlot,
                      icon: b.optionsIcon,
                      modal: b.optionsModal,
                      "modal-data": b.optionsModalData,
                      download: b.optionsDownload,
                      "label-formatter": b.optionsLabelFormatter
                    }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter"])
                  ], 8, Xs);
                }), 256))
              ])) : re("", !0)
            ], 64)) : j(n).length > 0 ? ($(), ie(Xe, {
              key: 1,
              option: j(n)[0],
              "option-slot": b.optionSlot,
              icon: b.optionsIcon,
              modal: b.optionsModal,
              "modal-data": b.optionsModalData,
              download: b.optionsDownload,
              "label-formatter": b.optionsLabelFormatter
            }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter"])) : re("", !0)
          ], 8, Gs)) : b.modal ? ($(), ie(C, {
            key: 6,
            class: "lkt-field--read-value",
            title: b.title,
            modal: b.modal,
            "modal-key": b.modalKey,
            "modal-data": b.modalData
          }, {
            default: _e(() => [
              ve("div", { innerHTML: j(n) }, null, 8, Js)
            ]),
            _: 1
          }, 8, ["title", "modal", "modal-key", "modal-data"])) : b.download ? ($(), ie(Xe, {
            key: 7,
            class: "lkt-field--read-value",
            option: { value: "", label: j(n) },
            download: b.download
          }, null, 8, ["option", "download"])) : b.type === j(W).Number ? ($(), ne("div", {
            key: 8,
            class: "lkt-field--read-value",
            innerHTML: b.title,
            title: b.title
          }, null, 8, Qs)) : ($(), ne("div", {
            key: 9,
            class: "lkt-field--read-value",
            innerHTML: j(n),
            title: b.title
          }, null, 8, eo))
        ], 64))
      ]);
    };
  }
}), io = ["name", "id", "disabled", "readonly", "placeholder", "accept"], lo = /* @__PURE__ */ ke({
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
    const i = t, s = e, l = J(null), r = J(s.modelValue), c = J(s.fileName), f = J(s.uploading), n = (b) => {
      let u = b.target;
      if (u.files && u.files[0]) {
        c.value = u.files[0].name;
        const g = new FileReader();
        g.onload = (C) => {
          if (r.value = C.target.result, s.resource) {
            f.value = !0, i("uploading");
            let S = JSON.parse(JSON.stringify(s.resourceData));
            S.files = u.files[0], Mt(s.resource, S).then((E) => {
              r.value = E.data, f.value = !1, i("upload-success", E);
            }).catch((E) => {
              f.value = !1, i("upload-error", E);
            });
          }
        }, g.readAsDataURL(u.files[0]);
      }
      i("change", b);
    };
    return ce(r, (b) => i("update:modelValue", b)), ce(c, (b) => i("update:fileName", b)), (b, u) => {
      const g = ye("lkt-image"), C = ye("lkt-button");
      return $(), ne(He, null, [
        ve("input", {
          ref_key: "inputElement",
          ref: l,
          type: "file",
          name: b.name,
          id: b.id,
          disabled: b.disabled,
          readonly: b.readonly,
          placeholder: b.placeholder,
          accept: b.accept,
          onChange: n
        }, null, 40, io),
        se(C, {
          class: "lkt-field--toggle-button",
          "click-ref": l.value,
          text: b.isImage ? "" : c.value,
          disabled: b.disabled
        }, {
          default: _e(() => [
            b.isImage ? ($(), ie(g, {
              key: 0,
              src: r.value,
              class: "lkt-field--image-cover"
            }, null, 8, ["src"])) : re("", !0),
            b.isImage ? ($(), ie(g, {
              key: 1,
              src: r.value,
              class: "lkt-field--image-main"
            }, null, 8, ["src"])) : re("", !0)
          ]),
          _: 1
        }, 8, ["click-ref", "text", "disabled"])
      ], 64);
    };
  }
}), no = { class: "lkt-calendar" }, so = { class: "calendar" }, oo = { class: "lkt-calendar--header-grid" }, ao = ["innerHTML"], ro = {
  key: 0,
  class: "lkt-calendar--day-grid"
}, uo = { class: "lkt-calendar--day lkt-calendar--filling-day" }, co = /* @__PURE__ */ ke({
  __name: "LktCalendar",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, s = e, l = J(s.modelValue);
    ce(() => s.modelValue, (h) => l.value = h, { deep: !0 }), ce(l, (h) => i("update:modelValue", h));
    const r = J(/* @__PURE__ */ new Date()), c = J(/* @__PURE__ */ new Date());
    Ft(l.value) && typeof l.value < "u" && (c.value = new Date(l.value.getFullYear(), l.value.getMonth(), l.value.getDate()));
    const f = J(c.value.getFullYear()), n = J(c.value.getMonth()), b = J(!1), u = J(ft("Y-m", c.value)), g = ee(() => new Date(f.value, n.value + 1, 0).getDate()), C = ee(() => new Date(f.value, n.value, 1).getDay()), S = () => {
      n.value > 11 && (n.value = 0, f.value += 1), n.value += 1, c.value.setFullYear(f.value, n.value), c.value = new Date(c.value), u.value = ft("Y-m", c.value);
    }, E = () => {
      n.value < 0 && (n.value = 11, f.value -= 1), n.value -= 1, c.value.setFullYear(f.value, n.value), c.value = new Date(c.value), u.value = ft("Y-m", c.value);
    }, A = (h) => typeof l.value > "u" || l.value.getFullYear() !== f.value || l.value.getMonth() !== n.value ? !1 : l.value.getDate() === h, o = (h) => typeof l.value > "u" || r.value.getFullYear() !== f.value || r.value.getMonth() !== n.value ? !1 : r.value.getDate() === h, a = (h) => ({
      "is-picked": A(h),
      "is-today": o(h)
    }), d = (h) => {
      var v;
      (v = l.value) == null || v.setFullYear(f.value, n.value, h), l.value = new Date(l.value);
    };
    return (h, v) => {
      const m = ye("lkt-button");
      return $(), ne("div", no, [
        ve("div", so, [
          ve("header", oo, [
            se(m, {
              class: "lkt-calendar--day",
              onClick: E
            }, {
              default: _e(() => v[0] || (v[0] = [
                ot("◀")
              ])),
              _: 1
            }),
            ve("div", {
              class: "lkt-calendar--header-text",
              innerHTML: u.value
            }, null, 8, ao),
            se(m, {
              class: "lkt-calendar--day",
              onClick: S
            }, {
              default: _e(() => v[1] || (v[1] = [
                ot("▶")
              ])),
              _: 1
            })
          ]),
          b.value ? re("", !0) : ($(), ne("div", ro, [
            v[2] || (v[2] = Ol('<div class="lkt-calendar--day lkt-calendar--week-day">Su</div><div class="lkt-calendar--day lkt-calendar--week-day">Mo</div><div class="lkt-calendar--day lkt-calendar--week-day">Tu</div><div class="lkt-calendar--day lkt-calendar--week-day">We</div><div class="lkt-calendar--day lkt-calendar--week-day">Th</div><div class="lkt-calendar--day lkt-calendar--week-day">Fr</div><div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>', 7)),
            ($(!0), ne(He, null, Je(C.value, (p) => ($(), ne("div", uo))), 256)),
            ($(!0), ne(He, null, Je(g.value, (p) => ($(), ie(m, {
              class: Ve(["lkt-calendar--day", a(p)]),
              text: p.toString(),
              onClick: () => d(p)
            }, null, 8, ["class", "text", "onClick"]))), 256))
          ]))
        ]),
        v[3] || (v[3] = ve("div", { class: "display-selected" }, [
          ve("p", { class: "selected" })
        ], -1))
      ]);
    };
  }
}), fo = /* @__PURE__ */ ke({
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
    const i = t, s = e, l = J(void 0), r = J(""), c = J(s.modelValue), f = ee(() => Q.dateReadFormat ? Q.dateReadFormat : Q.langDateReadFormat[s.lang] ? Q.langDateReadFormat[s.lang] : Q.defaultDateReadFormat ? Q.defaultDateReadFormat : "Y-m-d"), n = (u) => {
      let g = new Date(u);
      Ft(g) && (l.value = g);
    }, b = () => {
      r.value = Ci(l.value, f.value);
    };
    return ce(() => s.modelValue, (u) => {
      c.value = u, n(u);
    }), ce(c, (u) => i("update:modelValue", u)), ce(l, (u) => {
      typeof u > "u" ? c.value = "" : c.value = ft("Y-m-d", u), b();
    }, { deep: !0 }), Ot(() => {
      n(s.modelValue), b();
    }), (u, g) => {
      const C = ye("lkt-button");
      return $(), ie(C, {
        class: "lkt-field--toggle-button",
        text: r.value,
        tooltip: "",
        "tooltip-class": "lkt-field--date--tooltip",
        "tooltip-location-y": "bottom",
        "tooltip-location-x": "left-corner"
      }, {
        tooltip: _e(() => [
          se(co, {
            modelValue: l.value,
            "onUpdate:modelValue": g[0] || (g[0] = (S) => l.value = S)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["text"]);
    };
  }
}), ho = { key: 1 }, _l = /* @__PURE__ */ ke({
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
    const s = J(e.modelValue), l = (r, c) => {
    };
    return (r, c) => {
      const f = ye("lkt-button");
      return $(), ie(f, {
        modal: r.modal,
        "modal-key": r.modalKey,
        onClick: l
      }, {
        default: _e(() => [
          s.value ? Ue(r.$slots, "item", {
            key: 0,
            item: s.value
          }) : ($(), ne("p", ho, "No data"))
        ]),
        _: 3
      }, 8, ["modal", "modal-key"]);
    };
  }
}), po = /* @__PURE__ */ ke({
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
    const t = Vt(), i = e, s = J(i.modelValue), l = ee(() => typeof i.max == "boolean" || s.value.length < i.max ? ["modal-create"] : []);
    return (r, c) => {
      const f = ye("lkt-table");
      return $(), ie(f, {
        type: "item",
        modelValue: s.value,
        "onUpdate:modelValue": c[0] || (c[0] = (n) => s.value = n),
        perms: l.value,
        "edit-mode": r.editable,
        "new-value-generator": () => {
        },
        modal: r.modal,
        "required-items-for-top-create": 999999
      }, {
        item: _e(({ item: n, index: b, isLoading: u, canCreate: g, canRead: C, canUpdate: S, canDrop: E, doDrop: A }) => [
          se(_l, {
            modelValue: s.value[b],
            "onUpdate:modelValue": (o) => s.value[b] = o,
            "item-type": r.itemType
          }, yt({ _: 2 }, [
            j(t).item ? {
              name: "item",
              fn: _e(({ item: o }) => [
                Ue(r.$slots, "item", {
                  item: o,
                  focusing: r.focusing,
                  hadFirstFocus: r.hadFirstFocus,
                  disabled: r.disabled,
                  readonly: r.readonly,
                  modal: r.modal,
                  modalKey: r.modalKey,
                  modalData: r.modalData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["modelValue", "onUpdate:modelValue", "item-type"])
        ]),
        _: 3
      }, 8, ["modelValue", "perms", "edit-mode", "modal"]);
    };
  }
}), mo = ["data-show-ui", "data-labeled"], go = ["for", "innerHTML"], vo = { class: "lkt-field-content" }, bo = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, _o = {
  key: 1,
  class: "lkt-field--icon"
}, yo = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], wo = ["value", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], Co = {
  key: 4,
  class: "lkt-field--info-nav"
}, ko = { key: 0 }, xo = ["data-index", "onClick"], at = /* @__PURE__ */ ke({
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
    name: { default: At(16) },
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
    canTag: { type: Boolean, default: !1 },
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
    multipleDisplay: { default: Ge.List },
    multipleDisplayEdition: { default: Ge.Inline },
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
    prop: { default: () => ({}) },
    itemType: {}
  },
  emits: ["update:modelValue", "update:valid", "keyup", "keydown", "focus", "blur", "click", "change", "click-info", "click-error", "validation", "validating", "options-loaded", "selected-option"],
  setup(e, { expose: t, emit: i }) {
    const s = i, l = Vt(), r = e, c = At(16);
    let f = ct(r.modalKey, r.prop), n = ct(r.icon, r.prop), b = ct(r.download, r.prop), u = ct(r.itemType, r.prop);
    const g = J(r.type), C = J(null);
    let S = r.featuredButton, E = r.modelValue;
    r.multiple && Xl.includes(g.value) ? (!E || !Array.isArray(E)) && (E = []) : tt.includes(g.value) ? typeof E != "boolean" && (E = !1) : g.value === W.Date && !n ? n = Q.defaultDateIcon : g.value === W.Number && r.canStep && S === "" && (S = Q.defaultNumberFeaturedButton);
    const A = J(E), o = J(E), a = J(r.valid), d = J(!1), h = J(!1), v = J(!1), m = J(!1), p = J([]), _ = J(!r.readMode), w = J(r.fileName), y = J(r.fileName), x = J(null), M = J(null), L = J(null), T = J(!1), z = J(!1), U = J(!1), P = J(""), V = J(-1), D = J([]), F = J(!1), R = J(!1), H = J(!1), N = ee(() => bi.value), O = ee(() => (N.value, Q.dateReadFormat ? Q.dateReadFormat : Q.langDateReadFormat[N.value] ? Q.langDateReadFormat[N.value] : Q.defaultDateReadFormat ? Q.defaultDateReadFormat : "Y-m-d")), k = g.value === W.Card ? o.value : J(ai(o.value, N.value)), I = J(k), q = J([]), Z = J([]), Y = () => {
      const B = (X) => {
        if (Z.value = Rt(q.value, X), r.multiple) {
          for (let We in k.value) {
            let Ze = ri(q.value, k.value[We]);
            typeof Ze < "u" && (D.value.length === 0 ? D.value.push(Ze) : D.value.splice(We, 1, Ze));
          }
          return;
        }
        let me = ri(q.value, k.value);
        typeof me < "u" && (D.value.length === 0 ? D.value.push(me) : D.value.splice(0, 1, me));
      };
      g.value === W.Text ? B(k.value) : g.value === W.Select && B(P.value);
    }, K = ee(() => g.value === W.Date), G = ee(() => g.value === W.File), le = ee(() => g.value === W.Image), ue = ee(() => g.value === W.Textarea ? "textarea" : g.value === W.Html ? "div" : "input"), de = ee(() => g.value === W.Date ? o.value !== A.value : k.value !== I.value), oe = ee(() => typeof r.disabled == "function" ? r.disabled(r.prop) : r.disabled), fe = ee(() => {
      let B = 0;
      return Wt.value && ++B, Zt.value && ++B, $t.value && ++B, qt.value && ++B, Gt.value && ++B, jt.value && ++B, Qe.value && ++B, et.value && ++B, (r.customButtonText || r.customButtonClass) && ++B, B > 0 && g.value === W.Textarea || B > 0 && g.value === W.Html || B > 0 && r.infoButtonEllipsis ? 1 : B;
    }), Ee = ee(() => Et.value && S === "i18n" || pt.value && S === "password" || Ne.value && S === "subtract"), Ae = ee(() => fe.value > 0), pe = ee(() => r.autocomplete === !0 ? "on" : "off"), Te = ee(() => g.value === W.Date ? o.value !== "" : k.value !== ""), Ce = ee(() => g.value === W.Password && d.value === !0 ? "text" : g.value === W.Email ? "email" : g.value === W.Password ? "password" : g.value === W.Number ? "number" : g.value === W.Tel ? "tel" : g.value === W.Search ? "search" : g.value === W.Color ? "color" : g.value === W.Range ? "range" : "text"), $e = ee(() => {
      const B = ["lkt-field"];
      return B.push(`is-${g.value}`), tt.includes(g.value) && (B.push("is-boolean"), k.value && B.push("is-checked")), de.value && B.push("is-changed"), oe.value && B.push("is-disabled"), r.multiple && B.push("is-multiple"), Ee.value && B.push("with-atn-btn"), Ae.value && B.push("with-info-btn"), r.mandatory && _.value && B.push("is-mandatory-field"), _.value && h.value && B.push("has-focus"), T.value && B.push("show-options"), r.searchable && F.value && B.push("is-searching"), g.value !== W.Range && r.autoValidation && m.value && v.value && (p.value.length > 0 ? B.push("is-invalid") : B.push("is-valid")), [W.Textarea, W.Html].includes(g.value) && B.push("is-lg"), [W.Image].includes(g.value) && B.push("is-xl"), r.multiple && g.value === W.Select && B.push("is-lg"), r.multiple && (_.value ? B.push(`has-multiple-display-${r.multipleDisplayEdition}`) : B.push(`has-multiple-display-${r.multipleDisplay}`)), fe.value > 0 && B.push("has-icons", `has-icons-${fe.value}`), B.push(_.value ? "is-editable" : "is-read"), g.value !== W.Range && (B.push(a.value ? "is-valid" : "is-error"), B.push(Te.value ? "is-filled" : "is-empty")), B.join(" ");
    }), ze = ee(() => {
      var B;
      return typeof k.value == "number" ? (N.value, (B = Q.langNumberFormat[N.value]) != null && B.amountOfDecimals ? si(
        k.value,
        Q.langNumberFormat[N.value].amountOfDecimals,
        Q.langNumberFormat[N.value].decimalSeparator,
        Q.langNumberFormat[N.value].thousandsSeparator,
        Q.langNumberFormat[N.value].removeDecimalsIfZero
      ) : Q.amountOfDecimals ? si(
        k.value,
        Q.amountOfDecimals,
        Q.decimalSeparator,
        Q.thousandsSeparator,
        Q.removeDecimalsIfZero
      ) : k.value.toString()) : g.value === W.Html ? vi(k.value) : k.value;
    }), Oe = ee(() => typeof r.min == "string" ? parseFloat(r.min) : typeof r.min == "number" ? r.min : !1), Re = ee(() => typeof r.max == "string" ? parseFloat(r.max) : typeof r.max == "number" ? r.max : !1), he = ee(() => {
      let B = "";
      if (r.label.startsWith("__:") ? B = dt(r.label.substring(3)) : B = r.label, r.labelIcon) {
        let X = '<i class="' + r.labelIcon + '"></i>';
        r.labelIconAtEnd ? B += X : B = X + B;
      }
      return B;
    }), it = ee(() => r.placeholder.startsWith("__:") ? dt(r.placeholder.substring(3)) : r.placeholder), qe = ee(() => r.searchPlaceholder.startsWith("__:") ? dt(r.searchPlaceholder.substring(3)) : r.searchPlaceholder), Ie = ee(() => g.value === W.File ? Q.acceptTypes.file : g.value === W.Image ? Q.acceptTypes.image : ""), Le = ee(() => r.errorMessage), Me = ee(() => r.infoMessage), Ne = ee(() => r.canStep && _.value && g.value === W.Number), Qe = ee(() => r.canStep && _.value && g.value === W.Number && S !== "subtract"), et = ee(() => r.canStep && _.value && g.value === W.Number), Fe = ee(() => r.canUndo && de.value && _.value && !Yl.includes(g.value)), lt = ee(() => r.canClear && Te.value && _.value && !Kl.includes(g.value)), Et = ee(() => r.canI18n && typeof o.value == "object" && _.value), pt = ee(() => g.value === W.Password && r.showPassword && Te.value && _.value), Wt = ee(() => Fe.value && !r.infoButtonEllipsis), Zt = ee(() => lt.value && !r.infoButtonEllipsis), $t = ee(() => pt.value && !r.infoButtonEllipsis && S !== "password"), qt = ee(() => Et.value && !r.infoButtonEllipsis && S !== "i18n"), jt = ee(() => g.value === W.Calc || g.value === W.Search ? !1 : Z.value.length > 0 || q.value.length > 0 || r.optionsResource !== ""), Gt = ee(() => r.allowReadModeSwitch && !r.infoButtonEllipsis), Kt = () => {
      wt(() => {
        C.value && C.value.focus();
      });
    }, yl = async () => {
      if (r.validationResource) {
        s("validating");
        const B = await Mt(r.validationResource, {
          ...r.validationResourceData,
          value: k.value
        });
        s("validation", B);
      }
    };
    ce(() => r.checkEqualTo, (B) => nt()), ce(() => r.readMode, (B) => _.value = !B), ce(() => r.valid, (B) => a.value = B), ce(() => r.modelValue, (B) => {
      g.value === W.Card ? k.value = B : g.value !== W.Date && (k.value = ai(B, N.value));
    }), ce(k, (B) => {
      typeof o.value == "object" && g.value === W.Card ? o.value[N.value] = B : o.value = B, g.value === W.Number && zl(B);
    }), ce(o, (B) => {
      U.value && _.value && (s("update:modelValue", B), yl(), nt());
    }, { deep: !0 }), ce(a, (B) => {
      s("update:valid", B);
    }), ce(() => r.options, (B) => {
      q.value = kt(B, r.prop), g.value === W.Select ? rt(P.value, !1) : rt(k.value, !1);
    });
    const nt = () => {
      r.autoValidationType === "blur" && (!v.value || !m.value) || g.value !== W.Range && (p.value = [], wt(() => {
        let B = typeof r.min > "u" ? 0 : parseFloat(r.min), X = typeof r.max > "u" ? 0 : parseFloat(r.max);
        if (g.value === W.Number && typeof r.min < "u" && typeof r.max < "u" && (k.value < B || k.value > X)) {
          p.value.push(je.createNumBetween(B, X, "ko")), a.value = !1;
          return;
        }
        ![W.Number, W.Email].includes(g.value) && r.mandatory && k.value === "" ? p.value.push(je.createEmpty("ko")) : g.value !== W.Email && B > 0 && (g.value !== W.Number && k.value.length < B ? p.value.push(je.createMinStr(B, "ko")) : k.value < B && p.value.push(je.createMinNum(B, "ko"))), X > 0 && (g.value !== W.Number && k.value.length > X ? p.value.push(je.createMaxStr(X, "ko")) : k.value > X && p.value.push(je.createMaxNum(X, "ko"))), g.value === W.Email && (r.mandatory && k.value === "" ? p.value.push(je.createEmpty("ko")) : Pl(k.value) || p.value.push(je.createEmail("ko"))), Jl.includes(g.value) && (hn(p.value, k.value, r.minNumbers, r.maxNumbers), pn(p.value, k.value, r.minUpperChars, r.maxUpperChars), mn(p.value, k.value, r.minLowerChars, r.maxLowerChars), gn(p.value, k.value, r.minChars, r.maxChars), vn(p.value, k.value, r.minSpecialChars, r.maxSpecialChars)), r.checkEqualTo && k.value !== r.checkEqualTo && p.value.push(je.createEqualTo(r.checkEqualTo, "ko")), a.value = p.value.length === 0;
      }));
    }, rt = (B, X = !0) => {
      if (q.value.length === 0) {
        Z.value = [];
        return;
      }
      switch (g.value) {
        case W.Select:
          r.searchable ? Z.value = Rt(q.value, B, !0) : Z.value = q.value, z.value = !1, X && (T.value = r.optionsResource !== "" || Z.value.length > 0), Y();
          return;
        case W.Text:
        case W.Search:
          Z.value = Rt(q.value, B, !1), z.value = !1, X && (T.value = r.optionsResource !== "" || Z.value.length > 0);
          return;
      }
    }, mt = async (B, X = !0) => {
      if (!(!_.value && !r.autoloadOptionsResource && !R.value) && ![
        W.Tel,
        W.Date,
        W.Color,
        W.File,
        W.Html,
        W.Image,
        W.Password,
        W.Range,
        W.Textarea
      ].includes(g.value))
        if (z.value = !1, r.autoloadOptionsResource && !R.value && (H.value = !0), r.optionsResource !== "") {
          z.value = !0, Q.searchKeyForResource !== "" && (r.optionsResourceData[Q.searchKeyForResource] = B);
          const me = await Mt(r.optionsResource, r.optionsResourceData);
          Array.isArray(me.data) && me.data.length > 0 && (q.value = ql(q.value, me.data, r.prop), rt(B, X), r.autoloadOptionsResource && !R.value && (r.autoloadOptionsResource === "feed" && (r.multiple ? Z.value.forEach((Ze) => {
            gt(Ze);
          }) : Z.value.length > 0 && gt(Z.value[0])), R.value = !0, H.value = !1), s("options-loaded", me.data));
        } else
          rt(B, X);
    }, Lt = (B) => {
      var We, Ze;
      let X = Z.value.length - 1;
      if (X === -1) return;
      const me = B.key ?? "";
      if (h.value)
        if (["ArrowDown", "ArrowUp", "Enter"].includes(me) && (B.preventDefault(), B.stopPropagation()), me === "ArrowDown") {
          ++V.value, V.value > X && (V.value = 0);
          let te = (We = L.value) == null ? void 0 : We.querySelector('[data-index="' + V.value + '"]');
          te && te.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else if (me === "ArrowUp") {
          --V.value, V.value < 0 && (V.value = X);
          let te = (Ze = L.value) == null ? void 0 : Ze.querySelector('[data-index="' + V.value + '"]');
          te && te.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else me === "Enter" && V.value > -1 && gt(Z.value[V.value]);
    }, Tt = () => {
      if (g.value === W.Html) {
        C.value && C.value.setValue(I.value);
        return;
      } else if (g.value === W.Date) {
        o.value = A.value;
        return;
      } else if (g.value === W.File) {
        o.value = A.value, y.value = w.value;
        return;
      }
      k.value = I.value;
    }, Yt = () => {
      if (g.value === W.Html) {
        C.value && C.value.setValue("");
        return;
      } else if (g.value === W.Date) {
        o.value = "";
        return;
      } else if (g.value === W.File) {
        o.value = "", y.value = "";
        return;
      } else if (g.value === W.Select) {
        k.value = r.multiple ? [] : "", D.value = [];
        return;
      }
      k.value = "";
    }, wl = () => k.value, Xt = (B) => {
      nt(), ui.includes(g.value) ? (mt(k.value), Lt(B)) : g.value === W.Select && Lt(B), s("keyup", B);
    }, Jt = () => {
      C.value && C.value.keepFocused();
    }, Cl = () => {
      if (T.value) {
        if (g.value === W.Select) {
          ti();
          return;
        }
        return bt();
      }
      if (g.value === W.Select) {
        ei();
        return;
      }
      return vt();
    }, gt = (B) => {
      if (!B.disabled)
        if (r.multiple) {
          let X = Gl(B, k.value);
          X === -1 ? (k.value.push(String(B.value)), D.value.push(B)) : (k.value.splice(X, 1), D.value.splice(X, 1)), Jt(), s("selected-option", B);
        } else
          V.value = -1, k.value = String(B.value), D.value.splice(0, 1, B), T.value = !1, F.value = !1, s("selected-option", B);
    }, Qt = (B) => s("keydown", B), vt = (B) => {
      m.value = !0, h.value = !0, nt(), s("focus", B);
    }, bt = (B) => {
      setTimeout(() => {
        if (!(r.searchable && F.value)) {
          if (r.multiple) {
            T.value = !0, h.value = !0;
            return;
          }
          v.value = !0, V.value = -1, T.value = !1, h.value = !1, nt(), s("blur", B);
        }
      }, 100);
    }, Bt = (B) => {
      m.value = !0, h.value = !0, s("focus", B);
    }, Nt = (B) => {
      v.value = !0, h.value = !1, s("blur", B);
    }, kl = (B) => {
      Lt(B);
    }, xl = (B) => {
      P.value = B, mt(B);
    }, Sl = (B) => {
      let X = new Ct({
        value: B,
        label: B
      });
      D.value.findIndex((We) => We.value === X.value) === -1 && (q.value.push(X), Z.value.push(X), D.value.push(X)), P.value = "";
    }, El = (B) => {
      let X = D.value.findIndex((me) => me.value === B.value);
      X >= 0 && (D.value.splice(X, 1), q.value.splice(
        q.value.findIndex((me) => me.value === B.value),
        1
      ), Z.value.splice(
        Z.value.findIndex((me) => me.value === B.value),
        1
      )), P.value = "";
    }, ei = () => {
      if (m.value = !0, h.value = !0, !r.optionsResource && Z.value.length === 0) {
        T.value = !1;
        return;
      }
      T.value = !0, nt(), mt(P.value, !1), r.searchable && Jt(), s("focus");
    }, ti = () => {
      v.value = !0, h.value = !1, s("blur");
    }, zt = (B) => {
      s("change", B);
    }, ut = (B) => {
      s("click", B);
    }, Ll = (B) => s("click-info", B), Tl = (B) => s("click-error", B), ii = () => {
      let B = r.step ?? 1;
      typeof B == "string" && (B = parseFloat(B)), (!r.min || k.value > r.min) && (k.value -= B);
    }, Bl = () => {
      let B = r.step ?? 1;
      typeof B == "string" && (B = parseFloat(B)), (!r.max || k.value < r.max) && (k.value += B);
    }, Nl = (B) => {
      _.value && Kt();
    }, zl = (B) => {
      if (!r.enableAutoNumberFix) return !1;
      let X = Number(B), me = $l(X, Oe.value, Re.value);
      return X !== me ? (k.value = me, !0) : !1;
    };
    t({
      Identifier: c,
      reset: Tt,
      focus: Kt,
      value: wl,
      isMandatory: () => r.mandatory
    });
    const Rl = ee(() => r.editSlot !== "" && typeof Q.customEditSlots[r.editSlot] < "u"), Al = ee(() => Q.customEditSlots[r.editSlot]);
    Ot(() => {
      q.value = kt(r.options, r.prop), rt("", !1), Y(), g.value === W.Select && (r.multiple && (F.value = !0), r.autoloadOptionsResource && mt("", !1)), U.value = !0;
    });
    const Ml = ee(() => tt.includes(g.value) && !oe.value ? "label" : "div"), Il = ee(() => tt.includes(g.value) ? {
      for: c
    } : {}), Dl = ee(() => {
      switch (g.value) {
        case W.Select:
          return D.value;
        case W.Date:
          return Ci(o.value, O.value);
        case W.File:
        case W.Image:
          return o.value;
        default:
          return k.value;
      }
    });
    return (B, X) => {
      const me = ye("lkt-button"), We = ye("lkt-loader"), Ze = ye("lkt-tooltip");
      return $(), ne("div", {
        class: Ve($e.value),
        "data-show-ui": Ae.value,
        "data-labeled": !j(l).label,
        ref_key: "container",
        ref: M
      }, [
        j(l).label ? Ue(B.$slots, "label", { key: 0 }) : re("", !0),
        !j(l).label && he.value !== "" && !j(tt).includes(g.value) ? ($(), ne("label", {
          key: 1,
          for: j(c),
          class: "lkt-field--label",
          innerHTML: he.value
        }, null, 8, go)) : re("", !0),
        ve("div", vo, [
          Ee.value ? ($(), ne("div", bo, [
            B.featuredButton === "password" && pt.value ? ($(), ie(It, {
              key: 0,
              modelValue: d.value,
              "onUpdate:modelValue": X[0] || (X[0] = (te) => d.value = te),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : re("", !0),
            Et.value && j(S) === "i18n" && B.canI18n ? ($(), ie(oi, {
              key: 1,
              modelValue: o.value,
              "onUpdate:modelValue": X[1] || (X[1] = (te) => o.value = te),
              "is-featured": "",
              type: g.value
            }, null, 8, ["modelValue", "type"])) : re("", !0),
            Ne.value && j(S) === "subtract" ? ($(), ie(me, {
              key: 2,
              class: "lkt-field--atn-btn",
              icon: "lkt-field-icon-minus",
              onClick: ii
            })) : re("", !0)
          ])) : re("", !0),
          j(n) ? ($(), ne("div", _o, [
            ve("i", {
              class: Ve(j(n))
            }, null, 2)
          ])) : re("", !0),
          _.value ? ($(), ie(st(Ml.value), gi({ key: 2 }, Il.value, { class: "lkt-field-main" }), {
            default: _e(() => [
              j(l).edit ? ($(), ne("div", {
                key: 0,
                onClick: ut
              }, [
                Ue(B.$slots, "edit", {
                  value: o.value,
                  title: ze.value,
                  data: B.slotData
                })
              ])) : Rl.value ? ($(), ne("div", {
                key: 1,
                onClick: ut
              }, [
                ($(), ie(st(Al.value), {
                  value: o.value,
                  title: ze.value,
                  data: B.slotData
                }, null, 8, ["value", "title", "data"]))
              ])) : j(tt).includes(g.value) ? ($(), ie(xn, {
                key: 2,
                modelValue: j(k),
                "onUpdate:modelValue": X[2] || (X[2] = (te) => Pe(k) ? k.value = te : null),
                id: j(c),
                name: B.name,
                type: g.value,
                label: he.value,
                editable: _.value,
                focusing: h.value,
                disabled: oe.value,
                readonly: B.readonly,
                onFocus: Bt,
                onBlur: Nt
              }, null, 8, ["modelValue", "id", "name", "type", "label", "editable", "focusing", "disabled", "readonly"])) : g.value === j(W).Color && B.multiple ? ($(), ie(fn, {
                key: 3,
                modelValue: j(k),
                "onUpdate:modelValue": X[3] || (X[3] = (te) => Pe(k) ? k.value = te : null),
                "edit-mode": _.value,
                min: Oe.value,
                max: Re.value
              }, null, 8, ["modelValue", "edit-mode", "min", "max"])) : g.value === j(W).Color ? ($(), ie(ki, {
                key: 4,
                modelValue: j(k),
                "onUpdate:modelValue": X[4] || (X[4] = (te) => Pe(k) ? k.value = te : null)
              }, null, 8, ["modelValue"])) : G.value || le.value ? ($(), ie(lo, {
                key: 5,
                modelValue: o.value,
                "onUpdate:modelValue": X[5] || (X[5] = (te) => o.value = te),
                "file-name": y.value,
                "onUpdate:fileName": X[6] || (X[6] = (te) => y.value = te),
                id: j(c),
                tabindex: B.tabindex,
                resource: B.resource,
                "resource-data": B.resourceData,
                name: B.name,
                placeholder: it.value,
                accept: Ie.value,
                focusing: h.value,
                disabled: oe.value,
                readonly: B.readonly,
                "is-image": g.value === j(W).Image,
                onChange: zt
              }, null, 8, ["modelValue", "file-name", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image"])) : K.value ? ($(), ie(fo, {
                key: 6,
                modelValue: o.value,
                "onUpdate:modelValue": X[7] || (X[7] = (te) => o.value = te),
                id: j(c),
                tabindex: B.tabindex,
                lang: N.value,
                name: B.name
              }, null, 8, ["modelValue", "id", "tabindex", "lang", "name"])) : g.value === j(W).Select ? ($(), ie(Rs, {
                key: 7,
                ref_key: "inputElement",
                ref: C,
                modelValue: j(k),
                "onUpdate:modelValue": X[8] || (X[8] = (te) => Pe(k) ? k.value = te : null),
                "show-options": T.value,
                "onUpdate:showOptions": X[9] || (X[9] = (te) => T.value = te),
                searchable: B.searchable,
                "search-mode": F.value,
                multiple: B.multiple,
                "can-tag": B.multiple,
                "options-icon": B.optionsIcon,
                "option-slot": B.optionSlot,
                "options-modal": B.optionsModal,
                "options-download": B.optionsDownload,
                "options-label-formatter": B.optionsLabelFormatter,
                "options-modal-data": B.optionsModalData,
                "picked-options": D.value,
                editable: _.value,
                focusing: h.value,
                "search-placeholder": qe.value,
                "multiple-display-edition": B.multipleDisplayEdition,
                onFocus: ei,
                onBlur: ti,
                onNavigate: kl,
                onSearch: xl,
                onTag: Sl,
                onUntag: El
              }, null, 8, ["modelValue", "show-options", "searchable", "search-mode", "multiple", "can-tag", "options-icon", "option-slot", "options-modal", "options-download", "options-label-formatter", "options-modal-data", "picked-options", "editable", "focusing", "search-placeholder", "multiple-display-edition"])) : g.value === j(W).Calc ? ($(), ie(Vs, {
                key: 8,
                ref_key: "inputElement",
                ref: C,
                modelValue: j(k),
                "onUpdate:modelValue": X[10] || (X[10] = (te) => Pe(k) ? k.value = te : null),
                id: j(c),
                tabindex: B.tabindex,
                name: B.name,
                editable: _.value,
                focusing: h.value,
                disabled: oe.value,
                readonly: B.readonly,
                options: q.value,
                onFocus: Bt,
                onBlur: Nt
              }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "disabled", "readonly", "options"])) : g.value === j(W).Search ? ($(), ie(Zs, {
                key: 9,
                ref_key: "inputElement",
                ref: C,
                modelValue: j(k),
                "onUpdate:modelValue": X[11] || (X[11] = (te) => Pe(k) ? k.value = te : null),
                id: j(c),
                tabindex: B.tabindex,
                name: B.name,
                editable: _.value,
                focusing: h.value,
                "had-first-focus": m.value,
                disabled: oe.value,
                readonly: B.readonly,
                "options-resource": B.optionsResource,
                container: M.value,
                onFocus: Bt,
                onBlur: Nt
              }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : g.value === j(W).Card && r.multiple ? ($(), ie(po, {
                key: 10,
                modelValue: j(k),
                "onUpdate:modelValue": X[12] || (X[12] = (te) => Pe(k) ? k.value = te : null),
                id: j(c),
                tabindex: B.tabindex,
                name: B.name,
                editable: _.value,
                focusing: h.value,
                "had-first-focus": m.value,
                disabled: oe.value,
                readonly: B.readonly,
                "options-resource": B.optionsResource,
                modal: B.modal,
                "modal-key": j(f),
                "modal-data": B.modalData,
                "item-type": j(u)
              }, yt({ _: 2 }, [
                j(l)["item-" + j(u)] ? {
                  name: "item",
                  fn: _e(({ item: te }) => [
                    Ue(B.$slots, "item-" + j(u), { item: te })
                  ]),
                  key: "0"
                } : j(l).item ? {
                  name: "item",
                  fn: _e(({ item: te }) => [
                    Ue(B.$slots, "item", { item: te })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : g.value === j(W).Card ? ($(), ie(_l, {
                key: 11,
                modelValue: j(k),
                "onUpdate:modelValue": X[13] || (X[13] = (te) => Pe(k) ? k.value = te : null),
                id: j(c),
                tabindex: B.tabindex,
                name: B.name,
                editable: _.value,
                focusing: h.value,
                "had-first-focus": m.value,
                disabled: oe.value,
                readonly: B.readonly,
                "options-resource": B.optionsResource,
                modal: B.modal,
                "modal-key": j(f),
                "modal-data": B.modalData,
                "item-type": j(u)
              }, yt({ _: 2 }, [
                j(l)["item-" + j(u)] ? {
                  name: "item",
                  fn: _e(({ item: te }) => [
                    Ue(B.$slots, "item-" + j(u), { item: te })
                  ]),
                  key: "0"
                } : j(l).item ? {
                  name: "item",
                  fn: _e(({ item: te }) => [
                    Ue(B.$slots, "item", { item: te })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : ue.value === "input" ? De(($(), ne("input", {
                key: 12,
                "onUpdate:modelValue": X[14] || (X[14] = (te) => Pe(k) ? k.value = te : null),
                ref: (te) => C.value = te,
                value: j(k),
                type: Ce.value,
                name: B.name,
                id: j(c),
                disabled: oe.value,
                readonly: B.readonly,
                placeholder: it.value,
                tabindex: B.tabindex,
                autocomplete: pe.value,
                min: Oe.value,
                max: Re.value,
                step: B.step,
                onKeyup: Xt,
                onKeydown: Qt,
                onFocus: vt,
                onBlur: bt,
                onClick: ut,
                onChange: zt
              }, null, 40, yo)), [
                [Vl, j(k)]
              ]) : ue.value === "textarea" ? De(($(), ne("textarea", {
                key: 13,
                "onUpdate:modelValue": X[15] || (X[15] = (te) => Pe(k) ? k.value = te : null),
                ref: (te) => C.value = te,
                value: j(k),
                name: B.name,
                id: j(c),
                disabled: oe.value,
                readonly: B.readonly,
                placeholder: it.value,
                tabindex: B.tabindex,
                autocomplete: pe.value,
                onKeyup: Xt,
                onKeydown: Qt,
                onFocus: vt,
                onBlur: bt,
                onClick: ut,
                onChange: zt
              }, null, 40, wo)), [
                [xt, j(k)]
              ]) : g.value === j(W).Html ? ($(), ie(Es, {
                key: 14,
                ref_key: "inputElement",
                ref: C,
                modelValue: j(k),
                "onUpdate:modelValue": X[16] || (X[16] = (te) => Pe(k) ? k.value = te : null),
                id: j(c),
                tabindex: B.tabindex,
                name: B.name,
                lang: N.value,
                editable: _.value,
                focusing: h.value,
                disabled: oe.value,
                readonly: B.readonly,
                onFocus: vt,
                onBlur: bt
              }, null, 8, ["modelValue", "id", "tabindex", "name", "lang", "editable", "focusing", "disabled", "readonly"])) : re("", !0)
            ]),
            _: 3
          }, 16)) : re("", !0),
          _.value ? re("", !0) : ($(), ie(to, {
            key: 3,
            value: Dl.value,
            type: g.value,
            label: he.value,
            title: ze.value,
            "file-name": y.value,
            "value-slot": B.valueSlot,
            "empty-value-slot": B.emptyValueSlot,
            "slot-data": B.slotData,
            download: j(b),
            multiple: B.multiple,
            multipleDisplay: B.multipleDisplay,
            modal: B.modal,
            "modal-key": j(f),
            "modal-data": B.modalData,
            "option-slot": B.optionSlot,
            "options-download": B.optionsDownload,
            "options-modal": B.optionsModal,
            "options-modal-data": B.optionsModalData,
            "options-icon": B.optionsIcon,
            "options-label-formatter": B.optionsLabelFormatter,
            "options-resource": B.optionsResource,
            "options-resource-data": B.optionsResourceData,
            onClick: ut
          }, yt({ _: 2 }, [
            j(l).value ? {
              name: "value",
              fn: _e(() => [
                Ue(B.$slots, o.value, {
                  value: o.value,
                  title: ze.value,
                  data: B.slotData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "type", "label", "title", "file-name", "value-slot", "empty-value-slot", "slot-data", "download", "multiple", "multipleDisplay", "modal", "modal-key", "modal-data", "option-slot", "options-download", "options-modal", "options-modal-data", "options-icon", "options-label-formatter", "options-resource", "options-resource-data"])),
          Ae.value ? ($(), ne("div", Co, [
            De(se(_i, { onClick: Tt }, null, 512), [
              [Ke, Wt.value]
            ]),
            De(se(yi, { onClick: Yt }, null, 512), [
              [Ke, Zt.value]
            ]),
            g.value === j(W).Number ? De(($(), ie(me, {
              key: 0,
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-minus",
              onClick: ii
            }, null, 512)), [
              [Ke, Qe.value]
            ]) : re("", !0),
            g.value === j(W).Number ? De(($(), ie(me, {
              key: 1,
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-plus",
              onClick: Bl
            }, null, 512)), [
              [Ke, et.value]
            ]) : re("", !0),
            Le.value ? ($(), ie(me, {
              key: 2,
              title: B.errorMessage,
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-warning",
              onClick: Tl
            }, null, 8, ["title"])) : re("", !0),
            Me.value ? ($(), ie(me, {
              key: 3,
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-info",
              onClick: Ll,
              tooltip: "",
              "show-tooltip-on-hover": "",
              "show-tooltip-on-hover-delay": 500,
              "hide-tooltip-on-leave": ""
            }, {
              tooltip: _e(() => [
                ot(Ye(B.infoMessage), 1)
              ]),
              _: 1
            })) : re("", !0),
            g.value === j(W).Password ? De(($(), ie(It, {
              key: 4,
              modelValue: d.value,
              "onUpdate:modelValue": X[17] || (X[17] = (te) => d.value = te)
            }, null, 8, ["modelValue"])), [
              [Ke, $t.value]
            ]) : re("", !0),
            De(se(oi, {
              modelValue: o.value,
              "onUpdate:modelValue": X[18] || (X[18] = (te) => o.value = te),
              type: g.value
            }, null, 8, ["modelValue", "type"]), [
              [Ke, qt.value]
            ]),
            _.value && Gt.value ? ($(), ie(wi, {
              key: 5,
              modelValue: _.value,
              "onUpdate:modelValue": X[19] || (X[19] = (te) => _.value = te),
              onClick: Nl
            }, null, 8, ["modelValue"])) : re("", !0),
            B.customButtonText || B.customButtonClass ? ($(), ie(me, {
              key: 6,
              text: B.customButtonText,
              class: "lkt-field--info-btn lkt-field--custom-btn",
              icon: B.customButtonClass
            }, null, 8, ["text", "icon"])) : re("", !0),
            _.value ? De(($(), ie(Ql, {
              key: 7,
              onClick: Cl
            }, null, 512)), [
              [Ke, jt.value]
            ]) : re("", !0),
            B.infoButtonEllipsis ? ($(), ie(Zl, {
              key: 8,
              "show-undo": Fe.value,
              "show-clear": lt.value,
              "show-password": pt.value,
              "show-edition": B.allowReadModeSwitch,
              "show-password-check": d.value,
              "onUpdate:showPasswordCheck": X[20] || (X[20] = (te) => d.value = te),
              "show-edition-check": _.value,
              "onUpdate:showEditionCheck": X[21] || (X[21] = (te) => _.value = te),
              onUndo: Tt,
              onClear: Yt
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"])) : re("", !0)
          ])) : re("", !0)
        ]),
        _.value && B.autoValidation && p.value.length > 0 ? ($(), ie(Us, {
          key: 2,
          items: p.value,
          stack: B.validationStack
        }, null, 8, ["items", "stack"])) : re("", !0),
        _.value && j(ui).includes(g.value) ? ($(), ie(Ze, {
          key: 3,
          ref_key: "dropdownEl",
          ref: x,
          class: "lkt-field--dropdown",
          modelValue: T.value,
          "onUpdate:modelValue": X[22] || (X[22] = (te) => T.value = te),
          referrer: M.value,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: _e(() => [
            T.value ? ($(), ne("div", ko, [
              z.value ? ($(), ie(We, { key: 0 })) : re("", !0),
              z.value ? re("", !0) : ($(), ne("ul", {
                key: 1,
                class: "lkt-field--dropdown-options",
                ref_key: "optionList",
                ref: L
              }, [
                ($(!0), ne(He, null, Je(Z.value, (te, li) => ($(), ne("li", {
                  class: Ve({
                    "is-active": j(jl)(te, o.value, B.multiple),
                    "is-focused": li === V.value,
                    "is-disabled": te.disabled
                  }),
                  "data-index": li,
                  onClick: () => gt(te)
                }, [
                  j(l).option ? Ue(B.$slots, "option", {
                    key: 0,
                    option: te,
                    data: B.slotData,
                    modal: B.optionsModal,
                    modalData: B.optionsModalData,
                    download: B.optionsDownload,
                    editable: _.value
                  }) : ($(), ie(Xe, {
                    key: 1,
                    option: te,
                    "option-slot": B.optionSlot,
                    icon: B.optionsIcon,
                    modal: B.optionsModal,
                    "modal-data": B.optionsModalData,
                    download: B.optionsDownload,
                    "label-formatter": B.optionsLabelFormatter,
                    editable: _.value
                  }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter", "editable"]))
                ], 10, xo))), 256))
              ], 512))
            ])) : re("", !0)
          ]),
          _: 3
        }, 8, ["modelValue", "referrer"])) : re("", !0)
      ], 10, mo);
    };
  }
}), So = { class: "lkt-grid-1" }, Eo = /* @__PURE__ */ ke({
  __name: "LktTextLanguageEditModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    type: {},
    translations: { default: () => ({}) }
  },
  setup(e) {
    const t = ee(() => Ul.value.filter((i) => i !== bi.value));
    return (i, s) => {
      const l = ye("lkt-modal");
      return $(), ie(l, {
        "modal-name": i.modalName,
        title: "__:lmm.confirmFormLeave",
        "modal-key": i.modalKey,
        "z-index": i.zIndex
      }, {
        default: _e(() => [
          ve("div", So, [
            se(at, {
              type: i.type,
              label: "Idioma actual (ES)",
              modelValue: i.translations.es,
              "onUpdate:modelValue": s[0] || (s[0] = (r) => i.translations.es = r),
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "modelValue"]),
            ($(!0), ne(He, null, Je(t.value, (r) => ($(), ie(at, {
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
}), Mo = (e, t) => (Q.customValueSlots[e] = t, !0), Io = (e, t) => (Q.customEditSlots[e] = t, !0);
class Do {
  constructor(t = {}) {
    this.modelValue = "", this.type = W.Text, this.valid = void 0, this.placeholder = "", this.searchPlaceholder = "", this.label = "", this.labelIcon = "", this.labelIconAtEnd = !1, this.name = At(16), this.autocomplete = !1, this.disabled = !1, this.readonly = !1, this.readMode = !1, this.allowReadModeSwitch = !1, this.tabindex = void 0, this.mandatory = !1, this.showPassword = !1, this.canClear = !1, this.canUndo = !1, this.canI18n = !1, this.canStep = !0, this.mandatoryMessage = "", this.infoMessage = "", this.errorMessage = "", this.min = void 0, this.max = void 0, this.step = 1, this.enableAutoNumberFix = !0, this.emptyValueSlot = "", this.optionSlot = void 0, this.valueSlot = void 0, this.editSlot = void 0, this.slotData = {}, this.resource = "", this.resourceData = {}, this.validationResourceData = {}, this.autoValidation = !1, this.autoValidationType = "blur", this.validationStack = "default", this.minNumbers = void 0, this.maxNumbers = void 0, this.minChars = void 0, this.maxChars = void 0, this.minUpperChars = void 0, this.maxUpperChars = void 0, this.minLowerChars = void 0, this.maxLowerChars = void 0, this.minSpecialChars = void 0, this.maxSpecialChars = void 0, this.checkEqualTo = void 0, this.featuredButton = "", this.infoButtonEllipsis = !1, this.fileName = "", this.customButtonText = "", this.customButtonClass = "", this.options = [], this.multiple = !1, this.multipleDisplay = Ge.List, this.multipleDisplayEdition = Ge.Inline, this.searchable = !1, this.autoloadOptionsResource = !1, this.optionsDownload = "", this.optionsModal = "", this.optionsModalData = {}, this.optionsIcon = "", this.optionsLabelFormatter = void 0, this.optionsResource = "", this.optionsResourceData = {}, this.icon = "", this.download = "", this.modal = "", this.modalKey = "", this.modalData = {}, this.data = {};
    for (let i in t)
      this[i] = t[i];
  }
}
const Ho = {
  install: (e) => {
    e.component("lkt-field") === void 0 && (e.component("lkt-field", at), Wl("lkt-field-language-edit", Eo));
  }
}, Oo = (e) => {
  Q.defaultEmptyValueSlot = e;
}, Vo = (e, t) => {
  Q.optionSlots[e] = t;
}, Fo = (e) => Q.undoText = e, Po = (e) => Q.clearText = e, Uo = (e) => Q.i18nText = e, Wo = (e) => Q.switchEditionOnText = e, Zo = (e) => Q.switchEditionOffText = e, $o = (e) => Q.showPasswordOnText = e, qo = (e) => Q.showPasswordOffText = e, jo = (e) => Q.dateReadFormat = e, Go = (e) => Q.defaultDateReadFormat = e, Ko = (e, t, i = "default") => {
  i || (i = "default"), Q.validationMessages[i] || (Q.validationMessages[i] = {}), Q.validationMessages[i][e] = t;
}, Yo = (e) => (Q.validationIconSlot = e, !0), Xo = (e = 2, t = ".", i = ".", s = !0, l = "") => l !== "" ? (Q.langNumberFormat[l].amountOfDecimals = e, Q.langNumberFormat[l].decimalSeparator = t, Q.langNumberFormat[l].thousandsSeparator = i, Q.langNumberFormat[l].removeDecimalsIfZero = s, !0) : (Q.amountOfDecimals = e, Q.decimalSeparator = t, Q.thousandsSeparator = i, Q.removeDecimalsIfZero = s, !0), Jo = (e) => {
  Q.readTextMaxLength = e;
};
export {
  Do as Field,
  Ct as Option,
  Ho as default,
  Po as setFieldClearText,
  jo as setFieldDateReadFormat,
  Go as setFieldDefaultDateReadFormat,
  Oo as setFieldEmptySlot,
  Uo as setFieldI18nText,
  Xo as setFieldNumberFormat,
  Vo as setFieldOptionSlot,
  qo as setFieldShowPasswordOffText,
  $o as setFieldShowPasswordOnText,
  Zo as setFieldSwitchEditionOffText,
  Wo as setFieldSwitchEditionOnText,
  Fo as setFieldUndoText,
  Yo as setFieldValidationIconSlot,
  Ko as setFieldValidationMessage,
  Jo as setReadTextMaxLength,
  Io as setTextEditSlot,
  Mo as setTextValueSlot
};
