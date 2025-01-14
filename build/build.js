import { defineComponent as Ne, computed as te, resolveComponent as Se, openBlock as W, createBlock as le, normalizeClass as lt, ref as K, watch as me, withCtx as xe, createCommentVNode as de, resolveDynamicComponent as It, mergeProps as al, createElementBlock as se, createElementVNode as oe, toDisplayString as vt, createVNode as ae, unref as q, normalizeStyle as Al, withDirectives as Qe, vModelCheckbox as Mo, onMounted as Di, nextTick as Ei, Fragment as je, vModelText as Ii, renderList as _t, vShow as kt, createTextVNode as Zt, useSlots as rl, renderSlot as ut, createStaticVNode as Oo, createSlots as _i, isRef as nt, vModelDynamic as Ho } from "vue";
import { stripTags as Ql, fill as Fo, generateRandomString as Ji, formatNumber as Rl, isEmail as Vo } from "lkt-string-tools";
import { httpCall as Qi } from "lkt-http-client";
import { __ as Jt, currentLanguage as en, availableLanguages as Po } from "lkt-i18n";
import { FieldValidation as gt } from "lkt-field-validation";
import { date as Qt } from "lkt-date-tools";
import { addModal as Uo } from "lkt-modal";
const Ee = class Ee {
};
Ee.defaultEmptyValueSlot = "", Ee.customValueSlots = {}, Ee.customEditSlots = {}, Ee.searchKeyForResource = "query", Ee.optionSlots = {}, Ee.defaultDateIcon = "lkt-field-icon-calendar-empty", Ee.defaultNumberFeaturedButton = "subtract", Ee.undoText = "", Ee.clearText = "", Ee.i18nText = "", Ee.switchEditionOnText = "", Ee.switchEditionOffText = "", Ee.showPasswordOnText = "", Ee.showPasswordOffText = "", Ee.dateReadFormat = "", Ee.defaultDateReadFormat = "Y-m-d", Ee.langDateReadFormat = {
  en: "Y-m-d",
  es: "d/m/Y"
}, Ee.acceptTypes = {
  file: "*/*",
  image: "image/*"
}, Ee.validationIconSlot = "", Ee.validationMessages = {
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
}, Ee.amountOfDecimals = void 0, Ee.decimalSeparator = ".", Ee.thousandsSeparator = "", Ee.removeDecimalsIfZero = !0, Ee.langNumberFormat = {
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
}, Ee.readTextMaxLength = void 0, Ee.modalPerItemType = {};
let ee = Ee;
const tn = /* @__PURE__ */ Ne({
  __name: "UndoButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = te(() => ee.undoText), a = te(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), c = () => i("click");
    return (d, o) => {
      const h = Se("lkt-button");
      return W(), le(h, {
        text: d.insideEllipsis ? n.value : "",
        title: n.value,
        class: lt([a.value, "lkt-field--btn-undo"]),
        icon: "lkt-field-icon-undo",
        onClick: c
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), ln = /* @__PURE__ */ Ne({
  __name: "ClearButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = te(() => ee.clearText), a = te(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), c = () => i("click");
    return (d, o) => {
      const h = Se("lkt-button");
      return W(), le(h, {
        text: d.insideEllipsis ? n.value : "",
        title: n.value,
        class: lt(a.value),
        icon: "lkt-field-icon-cancel",
        onClick: c
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), el = /* @__PURE__ */ Ne({
  __name: "PasswordButton",
  props: {
    modelValue: { type: Boolean, default: !1 },
    insideEllipsis: { type: Boolean, default: !1 },
    isFeatured: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = K(l.modelValue);
    me(() => l.modelValue, (h) => n.value = h), me(n, (h) => i("update:modelValue", h));
    const a = te(() => n.value ? ee.showPasswordOnText : ee.showPasswordOffText), c = te(() => n.value === !0 ? "lkt-field-icon-lock-open" : "lkt-field-icon-lock"), d = te(() => l.isFeatured ? "lkt-field--atn-btn" : l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => i("click");
    return (h, u) => {
      const b = Se("lkt-button");
      return W(), le(b, {
        text: h.insideEllipsis ? a.value : "",
        title: a.value,
        class: lt(d.value),
        icon: c.value,
        onClick: o,
        checked: n.value,
        "onUpdate:checked": u[0] || (u[0] = (y) => n.value = y),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), nn = /* @__PURE__ */ Ne({
  __name: "EditionButton",
  props: {
    modelValue: { type: Boolean, default: !1 },
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = K(l.modelValue);
    me(() => l.modelValue, (h) => n.value = h), me(n, (h) => i("update:modelValue", h));
    const a = te(() => n.value ? ee.switchEditionOnText : ee.switchEditionOffText), c = te(() => n.value === !0 ? "lkt-field-icon-eye" : "lkt-field-icon-pencil"), d = te(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => i("click");
    return (h, u) => {
      const b = Se("lkt-button");
      return W(), le(b, {
        text: h.insideEllipsis ? a.value : "",
        title: a.value,
        class: lt(d.value),
        icon: c.value,
        onClick: o,
        checked: n.value,
        "onUpdate:checked": u[0] || (u[0] = (y) => n.value = y),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Wo = /* @__PURE__ */ Ne({
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
    const i = t, l = e, n = K(l.showPasswordCheck);
    me(() => l.showPasswordCheck, (c) => n.value = c), me(n, (c) => i("update:showPasswordCheck", c));
    const a = K(l.showEditionCheck);
    return me(() => l.showEditionCheck, (c) => a.value = c), me(a, (c) => i("update:showEditionCheck", c)), (c, d) => {
      const o = Se("lkt-button");
      return W(), le(o, {
        split: "",
        "split-icon": "lkt-field-icon-ellipsis-vert",
        class: "lkt-field--info-btn"
      }, {
        split: xe(({ doClose: h }) => [
          c.showUndo ? (W(), le(tn, {
            key: 0,
            onClick: d[0] || (d[0] = () => i("undo")),
            "inside-ellipsis": ""
          })) : de("", !0),
          c.showClear ? (W(), le(ln, {
            key: 1,
            onClick: d[1] || (d[1] = () => i("clear")),
            "inside-ellipsis": ""
          })) : de("", !0),
          c.showPassword ? (W(), le(el, {
            key: 2,
            modelValue: n.value,
            "onUpdate:modelValue": d[2] || (d[2] = (u) => n.value = u),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : de("", !0),
          c.showEdition ? (W(), le(nn, {
            key: 3,
            modelValue: a.value,
            "onUpdate:modelValue": d[3] || (d[3] = (u) => a.value = u),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : de("", !0)
        ]),
        _: 1
      });
    };
  }
}), Dl = /* @__PURE__ */ Ne({
  __name: "I18nButton",
  props: {
    modelValue: { default: () => ({}) },
    type: {},
    insideEllipsis: { type: Boolean, default: !1 },
    isFeatured: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = K(l.modelValue);
    me(() => l.modelValue, (d) => n.value = d, { deep: !0 }), me(n, (d) => i("update:modelValue", d), { deep: !0 });
    const a = te(() => ee.i18nText), c = te(() => l.isFeatured ? "lkt-field--atn-btn" : l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (d, o) => {
      const h = Se("lkt-button");
      return W(), le(h, {
        text: d.insideEllipsis ? a.value : "",
        title: a.value,
        class: lt(c.value),
        icon: "lkt-field-icon-language",
        modal: "lkt-field-language-edit",
        "modal-data": { translations: n.value, type: d.type }
      }, null, 8, ["text", "title", "class", "modal-data"]);
    };
  }
});
var Z = /* @__PURE__ */ ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Elements = "elements", e))(Z || {});
const Zo = (e, t, i) => (e = Number(e), t !== !1 && e < t && (e = t), i !== !1 && e > i && (e = i), e);
class Ti {
  constructor(t = {}) {
    this.value = void 0, this.label = "", this.data = {}, this.disabled = !1, this.group = "", this.icon = "", this.modal = "";
    for (let i in t)
      this[i] = t[i];
  }
}
const Vt = (e, t) => typeof e == "string" && e.startsWith("prop:") ? t[e.substring(5)] : e, Il = (e, t) => typeof e == "object" && !Array.isArray(e) ? e[t] : e, Li = (e, t) => {
  if (typeof e == "string" && (e = Vt(e, t), typeof e == "string" && e.startsWith("__:"))) {
    let i = e.substring(3), l = Jt(i), n = [];
    for (let a in l) n.push({ value: a, label: l[a] });
    return Li(n, t);
  }
  return Array.isArray(e) ? e.length === 0 ? e : e.map((i) => {
    if (typeof i == "object") return new Ti(i);
    if (typeof i == "string" || typeof i == "number")
      return new Ti({
        label: String(i),
        value: i
      });
  }).filter((i) => typeof i < "u") : [];
}, Ui = (e, t = "", i = !0) => {
  if (t === "") return e;
  const l = String(t).toLowerCase();
  return e.filter((n) => {
    let a = String(n.label).toLowerCase();
    return a.indexOf(l) !== -1 && (i || a !== l);
  });
}, Ml = (e, t) => {
  if (t !== "")
    return e.find((i) => i.value == t);
}, $o = (e, t, i) => {
  const l = /* @__PURE__ */ new Set(), n = [...e, ...Li(t, i)], a = [];
  return n.forEach((c) => {
    let d = [c.value, c.label].join("-");
    l.has(d) || (a.push(c), l.add(d));
  }), a;
}, qo = (e, t, i) => {
  if (i) {
    if (Array.isArray(t)) {
      let l = t.findIndex((n) => n == e.value);
      return typeof l > "u" ? !1 : l > -1;
    }
    return !1;
  }
  return e.value == t;
}, jo = (e, t) => {
  let i = t.findIndex((l) => l == e.value);
  return typeof i > "u" && (i = -1), i;
}, ul = (e) => !(Object.prototype.toString.call(e) === "[object Date]" && isNaN(e)), on = (e, t) => typeof e > "u" ? "" : (typeof e == "string" && (e = new Date(e)), ul(e) ? Qt(t, e) : ""), Ol = [
  Z.Text,
  Z.Search,
  Z.Select
], Go = [
  Z.Switch,
  Z.Check
], Yo = [
  Z.Switch,
  Z.Check
];
Z.Text, Z.Search;
const Rt = [
  Z.Switch,
  Z.Check
], Ko = [
  Z.Select,
  Z.Color,
  Z.Card
], Xo = [
  Z.Text,
  Z.Email,
  Z.Password
], Jo = /* @__PURE__ */ Ne({
  __name: "DropdownButton",
  emits: ["click"],
  setup(e, { emit: t }) {
    const i = t, l = te(() => ee.undoText), n = te(() => "lkt-field--info-btn"), a = () => i("click");
    return (c, d) => {
      const o = Se("lkt-button");
      return W(), le(o, {
        text: l.value,
        title: l.value,
        class: lt([n.value, "lkt-field--btn-dropdown"]),
        icon: "lkt-field-icon-angle-down",
        onClick: a,
        tabindex: "-1"
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Qo = {
  key: 0,
  class: "lkt-field--dropdown-option--icon-container"
}, es = { class: "lkt-field--dropdown-option--label-container" }, Tt = /* @__PURE__ */ Ne({
  __name: "DropdownOption",
  props: {
    option: { default: () => new Ti() },
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
    const i = t, l = e, n = te(() => l.option.icon !== "" ? l.option.icon : typeof l.icon == "function" ? l.icon(l.option) : l.icon), a = te(() => typeof l.labelFormatter == "function" ? l.labelFormatter(l.option) : l.option.label), c = te(() => `lkt-opt-${l.option.value}`), d = te(() => {
      if (l.optionSlot && !(typeof ee.optionSlots[l.optionSlot] > "u"))
        return ee.optionSlots[l.optionSlot];
    }), o = te(() => d.value ? d.value : l.isTag ? "lkt-tag" : !l.editable && (l.modal !== "" || l.option.modal !== "") ? "lkt-button" : !l.editable && l.download !== "" ? "lkt-anchor" : "div"), h = te(() => {
      if (o.value === "lkt-button") {
        let y = l.option.modal;
        l.modal && (y = l.modal);
        let k = y;
        return typeof y == "function" && (k = () => y(l.option)), {
          modal: k,
          modalData: l.modalData,
          modalKey: l.option.value,
          icon: n.value
        };
      }
      if (o.value === "lkt-anchor") {
        let y = l.download;
        typeof l.download == "function" ? y = () => l.download(l.option) : l.download.startsWith("prop:") && (y = l.download.substring(5), y = l.option[y]);
        let k = l.download !== "";
        return {
          href: y,
          target: k ? "_blank" : "",
          download: k
        };
      }
      return o.value === "lkt-tag" ? {
        type: "action-icon",
        icon: "lkt-field-icon-cancel"
      } : {};
    }), u = () => {
      i("click");
    }, b = () => {
      i("click-icon", l.option);
    };
    return (y, k) => (W(), le(It(o.value), al(h.value, {
      class: ["lkt-field--dropdown-option", c.value],
      title: y.option.label,
      onClick: u,
      onClickIcon: b
    }), {
      default: xe(() => [
        n.value && o.value !== "lkt-button" ? (W(), se("div", Qo, [
          oe("i", {
            class: lt(n.value)
          }, null, 2)
        ])) : de("", !0),
        oe("div", es, vt(a.value), 1)
      ]),
      _: 1
    }, 16, ["class", "title"]));
  }
}), ts = { class: "lkt-field-color--tooltip--rgba-container" }, is = { class: "lkt-field-color--tooltip--numeric-input-container" }, ls = { class: "like-lkt-field-label" }, mi = /* @__PURE__ */ Ne({
  __name: "RgbaRange",
  props: {
    modelValue: { default: 0 },
    label: { default: "" },
    rangeClass: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = K(l.modelValue);
    return me(() => l.modelValue, (a) => n.value = a), me(n, (a) => i("update:modelValue", a)), (a, c) => (W(), se("div", ts, [
      oe("div", is, [
        oe("label", ls, vt(a.label), 1),
        ae(qt, {
          modelValue: n.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => n.value = d),
          type: q(Z).Number,
          min: 0,
          max: 255,
          step: 1,
          "can-step": !1
        }, null, 8, ["modelValue", "type"])
      ]),
      ae(qt, {
        class: lt(["color-range", a.rangeClass]),
        modelValue: n.value,
        "onUpdate:modelValue": c[1] || (c[1] = (d) => n.value = d),
        type: q(Z).Range,
        min: 0,
        max: 255,
        step: 1
      }, null, 8, ["class", "modelValue", "type"])
    ]));
  }
});
class ns {
  constructor(t) {
    this.r = 0, this.g = 0, this.b = 0, this.a = 255;
    for (let i in t)
      this.hasOwnProperty(i) && (this[i] = t[i]);
  }
}
const os = (e, t, i, l) => {
  let n = parseInt(e).toString(16).padStart(2, "0").toUpperCase(), a = parseInt(t).toString(16).padStart(2, "0").toUpperCase(), c = parseInt(i).toString(16).padStart(2, "0").toUpperCase(), d = "#" + n + a + c;
  if (l == 255) return d;
  let o = parseInt(l).toString(16).padStart(2, "0").toUpperCase();
  return d + o;
}, Hl = (e) => {
  let t = parseInt(+("0x" + e.substring(1, 3)), 10), i = parseInt(+("0x" + e.substring(3, 5)), 10), l = parseInt(+("0x" + e.substring(5, 7)), 10), n = 255;
  return e.length === 9 && (n = parseInt(+("0x" + e.substring(5, 7)), 10)), new ns({ r: t, g: i, b: l, a: n });
}, ss = (e) => (0.299 * e.r + 0.587 * e.g + 0.114 * e.b) / e.a > 0.5 ? "#000000" : "#ffffff", as = { class: "lkt-grid-1" }, rs = { class: "lkt-field-color--tooltip--rgba-container" }, us = { class: "lkt-field-color--tooltip--hex-input-container" }, sn = /* @__PURE__ */ Ne({
  __name: "ColorInput",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = (N) => {
      if ([0, 1].includes(N.length))
        d.value = 0, o.value = 0, h.value = 0, u.value = 255;
      else if ([7, 9].includes(N.length)) {
        let s = Hl(N);
        d.value = s.r, o.value = s.g, h.value = s.b, u.value = s.a;
      }
    }, a = (N) => {
      b.value = os(
        d.value,
        o.value,
        h.value,
        u.value
      );
    }, c = (N) => {
      n(b.value);
    }, d = K(255), o = K(255), h = K(255), u = K(255), b = K(l.modelValue);
    n(b.value), me([d, o, h, u], a), me(() => l.modelValue, (N) => b.value = N), me(b, (N) => i("update:modelValue", N));
    const y = te(() => ss(Hl(b.value))), k = te(() => b.value === "" || b.value === "#" ? {} : {
      background: b.value,
      "--lkt-btn-bg": b.value,
      color: y.value,
      "--lkt-btn-color": y.value
    }), x = te(() => b.value === "" || b.value === "#" ? {} : {
      "--lkt-field-bg-input": b.value,
      "--lkt-field-color": y.value
    });
    return (N, s) => {
      const r = Se("lkt-button");
      return W(), le(r, {
        class: "lkt-field--toggle-button",
        style: Al(k.value),
        text: b.value,
        tooltip: "",
        "tooltip-class": "lkt-field-color--alpha--tooltip",
        "tooltip-location-y": "bottom",
        "tooltip-location-x": "left-corner"
      }, {
        tooltip: xe(({ doClose: f }) => [
          oe("div", as, [
            oe("div", rs, [
              oe("div", us, [
                s[5] || (s[5] = oe("label", { class: "like-lkt-field-label" }, "HEX", -1)),
                ae(qt, {
                  modelValue: b.value,
                  "onUpdate:modelValue": s[0] || (s[0] = (p) => b.value = p),
                  style: Al(x.value),
                  onChange: c
                }, null, 8, ["modelValue", "style"])
              ])
            ]),
            ae(mi, {
              modelValue: d.value,
              "onUpdate:modelValue": s[1] || (s[1] = (p) => d.value = p),
              label: "R",
              "range-class": "color-range--red"
            }, null, 8, ["modelValue"]),
            ae(mi, {
              modelValue: o.value,
              "onUpdate:modelValue": s[2] || (s[2] = (p) => o.value = p),
              label: "G",
              "range-class": "color-range--green"
            }, null, 8, ["modelValue"]),
            ae(mi, {
              modelValue: h.value,
              "onUpdate:modelValue": s[3] || (s[3] = (p) => h.value = p),
              label: "B",
              "range-class": "color-range--blue"
            }, null, 8, ["modelValue"]),
            ae(mi, {
              modelValue: u.value,
              "onUpdate:modelValue": s[4] || (s[4] = (p) => u.value = p),
              label: "A",
              "range-class": "color-range--alpha"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["style", "text"]);
    };
  }
}), cs = /* @__PURE__ */ Ne({
  __name: "MultipleColorInput",
  props: {
    modelValue: { default: () => [] },
    editMode: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] }
  },
  setup(e) {
    const t = e, i = K(t.modelValue), l = te(() => typeof t.max == "boolean" || i.value.length < t.max ? ["inline-create"] : []);
    return (n, a) => {
      const c = Se("lkt-table");
      return W(), le(c, {
        type: "item",
        modelValue: i.value,
        "onUpdate:modelValue": a[0] || (a[0] = (d) => i.value = d),
        perms: l.value,
        "edit-mode": n.editMode,
        "new-value-generator": () => "",
        "required-items-for-top-create": 999999
      }, {
        item: xe(({ item: d, index: o, isLoading: h, canCreate: u, canRead: b, canUpdate: y, canDrop: k, doDrop: x }) => [
          ae(sn, {
            modelValue: i.value[o],
            "onUpdate:modelValue": (N) => i.value[o] = N
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "perms", "edit-mode"]);
    };
  }
});
var Ve = /* @__PURE__ */ ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(Ve || {}), ke = /* @__PURE__ */ ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(ke || {});
class Te {
  constructor(t, i) {
    this.code = void 0, this.status = ke.Info, this.min = 0, this.max = 0, this.equalToValue = void 0, this.code = t, this.status = i;
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
  static createEmpty(t = ke.Ko) {
    return new Te(Ve.Empty, t);
  }
  static createEmail(t = ke.Ko) {
    return new Te(Ve.Email, t);
  }
  static createMinStr(t, i = ke.Ko) {
    return new Te(Ve.MinStringLength, i).setMin(t);
  }
  static createMaxStr(t, i = ke.Ko) {
    return new Te(Ve.MaxStringLength, i).setMax(t);
  }
  static createMinNum(t, i = ke.Ko) {
    return new Te(Ve.MinNumber, i).setMin(t);
  }
  static createMaxNum(t, i = ke.Ko) {
    return new Te(Ve.MaxNumber, i).setMax(t);
  }
  static createNumBetween(t, i, l = ke.Ko) {
    return new Te(Ve.MaxNumber, l).setMin(t).setMax(i);
  }
  static createMinNumbers(t, i = ke.Ko) {
    return new Te(Ve.MinNumbers, i).setMin(t);
  }
  static createMaxNumbers(t, i = ke.Ko) {
    return new Te(Ve.MaxNumbers, i).setMax(t);
  }
  static createMinUpperChars(t, i = ke.Ko) {
    return new Te(Ve.MinUpperChars, i).setMin(t);
  }
  static createMaxUpperChars(t, i = ke.Ko) {
    return new Te(Ve.MaxUpperChars, i).setMax(t);
  }
  static createMinLowerChars(t, i = ke.Ko) {
    return new Te(Ve.MinLowerChars, i).setMin(t);
  }
  static createMaxLowerChars(t, i = ke.Ko) {
    return new Te(Ve.MaxLowerChars, i).setMax(t);
  }
  static createMinSpecialChars(t, i = ke.Ko) {
    return new Te(Ve.MinSpecialChars, i).setMin(t);
  }
  static createMaxSpecialChars(t, i = ke.Ko) {
    return new Te(Ve.MaxSpecialChars, i).setMax(t);
  }
  static createMinChars(t, i = ke.Ko) {
    return new Te(Ve.MinChars, i).setMin(t);
  }
  static createMaxChars(t, i = ke.Ko) {
    return new Te(Ve.MaxChars, i).setMax(t);
  }
  static createEqualTo(t, i = ke.Ko) {
    return new Te(Ve.EqualTo, i).setEqualToValue(t);
  }
}
const ds = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/\D+/g, "").length < n && e.push(Te.createMinNumbers(n, ke.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/\D+/g, "").length > n && e.push(Te.createMaxNumbers(n, ke.Ko));
  }
}, fs = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/[^A-Z]+/g, "").length < n && e.push(Te.createMinUpperChars(n, ke.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/[^A-Z]+/g, "").length > n && e.push(Te.createMaxUpperChars(n, ke.Ko));
  }
}, hs = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/[A-Z]+/g, "").length < n && e.push(Te.createMinLowerChars(n, ke.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/[A-Z]+/g, "").length > n && e.push(Te.createMaxLowerChars(n, ke.Ko));
  }
}, ps = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/\d+/g, "").length < n && e.push(Te.createMinChars(n, ke.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/\d+/g, "").length > n && e.push(Te.createMaxChars(n, ke.Ko));
  }
}, ms = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < n && e.push(Te.createMinSpecialChars(n, ke.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > n && e.push(Te.createMaxSpecialChars(n, ke.Ko));
  }
}, Fl = (e, t = "default") => {
  let i = ee.validationMessages[t] && ee.validationMessages[t][e] ? ee.validationMessages[t][e] : "";
  return i || (i = ""), i;
};
var bt = /* @__PURE__ */ ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(bt || {});
const gs = { class: "boolean-input" }, vs = { class: "boolean-input-label" }, bs = { class: "boolean-input--check-on" }, ys = {
  key: 0,
  class: "lkt-field-icon-ok"
}, _s = ["innerHTML"], ws = ["name", "id", "disabled", "readonly", "value", "checked"], Cs = /* @__PURE__ */ Ne({
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
    const i = t, l = e, n = K(null), a = K(l.modelValue), c = K(a.value ? "true" : "false"), d = K(l.focusing), o = (u) => {
      d.value = !0, i("focus", u);
    }, h = (u) => {
      d.value = !1, i("blur", u);
    };
    return me(() => l.modelValue, (u) => a.value = u), me(a, (u) => i("update:modelValue", u)), (u, b) => (W(), se("div", gs, [
      oe("div", vs, [
        oe("div", bs, [
          u.type === q(Z).Check && a.value ? (W(), se("i", ys)) : de("", !0)
        ])
      ]),
      u.label ? (W(), se("div", {
        key: 0,
        class: "lkt-field--label",
        innerHTML: u.label
      }, null, 8, _s)) : de("", !0),
      Qe(oe("input", {
        "onUpdate:modelValue": b[0] || (b[0] = (y) => a.value = y),
        type: "checkbox",
        ref_key: "input",
        ref: n,
        name: u.name,
        id: u.id,
        disabled: !u.editable || u.disabled,
        readonly: !u.editable || u.readonly,
        value: c.value,
        checked: a.value,
        onFocus: o,
        onBlur: h
      }, null, 40, ws), [
        [Mo, a.value]
      ])
    ]));
  }
});
var Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ze(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var an = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(an);
var ks = an.exports;
const rn = /* @__PURE__ */ ze(ks);
var un = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(un);
var xs = un.exports;
const cn = /* @__PURE__ */ ze(xs);
var dn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(dn);
var Ss = dn.exports;
const fn = /* @__PURE__ */ ze(Ss);
var hn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(hn);
var Es = hn.exports;
const pn = /* @__PURE__ */ ze(Es);
var mn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(mn);
var Ts = mn.exports;
const Mi = /* @__PURE__ */ ze(Ts);
var gn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(gn);
var Ls = gn.exports;
const vn = /* @__PURE__ */ ze(Ls);
var bn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(bn);
var Ns = bn.exports;
const yn = /* @__PURE__ */ ze(Ns);
var _n = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(_n);
var Bs = _n.exports;
const wn = /* @__PURE__ */ ze(Bs);
var Cn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG una finestra con un documento");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(Cn);
var zs = Cn.exports;
const kn = /* @__PURE__ */ ze(zs);
var xn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(xn);
var As = xn.exports;
const Sn = /* @__PURE__ */ ze(As);
var En = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(En);
var Rs = En.exports;
const Tn = /* @__PURE__ */ ze(Rs);
var Ln = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(Ln);
var Ds = Ln.exports;
const Nn = /* @__PURE__ */ ze(Ds);
var Bn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(Bn);
var Is = Bn.exports;
const zn = /* @__PURE__ */ ze(Is);
var An = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(An);
var Ms = An.exports;
const Rn = /* @__PURE__ */ ze(Ms);
var Dn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(Dn);
var Os = Dn.exports;
const In = /* @__PURE__ */ ze(Os);
var Mn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(Mn);
var Hs = Mn.exports;
const On = /* @__PURE__ */ ze(Hs);
var Hn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(Hn);
var Fs = Hn.exports;
const Fn = /* @__PURE__ */ ze(Fs);
var Vn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(Vn);
var Vs = Vn.exports;
const Pn = /* @__PURE__ */ ze(Vs);
var Un = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(Un);
var Ps = Un.exports;
const Wn = /* @__PURE__ */ ze(Ps);
var Zn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(Zn);
var Us = Zn.exports;
const $n = /* @__PURE__ */ ze(Us);
var qn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
})(qn);
var Ws = qn.exports;
const jn = /* @__PURE__ */ ze(Ws), Zs = { ckb: rn, cs: cn, da: fn, de: pn, en: Mi, es: vn, fr: yn, he: wn, it: kn, ja: Sn, ko: Tn, lv: Nn, nl: zn, pl: Rn, pt_br: In, ro: On, ru: Fn, se: Pn, ua: Wn, ur: $n, zh_cn: jn }, Vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: rn,
  cs: cn,
  da: fn,
  de: pn,
  default: Zs,
  en: Mi,
  es: vn,
  fr: yn,
  he: wn,
  it: kn,
  ja: Sn,
  ko: Tn,
  lv: Nn,
  nl: zn,
  pl: Rn,
  pt_br: In,
  ro: On,
  ru: Fn,
  se: Pn,
  ua: Wn,
  ur: $n,
  zh_cn: jn
}, Symbol.toStringTag, { value: "Module" })), $s = {
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
}, qs = {
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
    for (let c = 0, d, o; c < n.length; c++)
      d = n[c], o = t.toolbar["align" + d.charAt(0).toUpperCase() + d.slice(1)], a += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + d + '" title="' + o + '" aria-label="' + o + '"><span class="se-list-icon">' + i["align_" + d] + "</span>" + o + "</button></li>";
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
    for (let a = 0, c = n.length; a < c; a++)
      this.util.setStyle(n[a], "textAlign", i === l ? "" : i);
    this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1);
  }
}, js = {
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
    let l, n, a, c, d = e.options.font, o = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (a = 0, c = d.length; a < c; a++)
      l = d[a], n = l.split(",")[0], o += '<li><button type="button" class="se-btn-list" data-value="' + l + '" data-txt="' + n + '" title="' + n + '" aria-label="' + n + '" style="font-family:' + l + ';">' + n + "</button></li>";
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
}, Gs = {
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
    for (let c = 0, d = t.fontSizeUnit, o = n.length, h; c < o; c++)
      h = n[c], a += '<li><button type="button" class="se-btn-list" data-value="' + h + d + '" title="' + h + d + '" aria-label="' + h + d + '" style="font-size:' + h + d + ';">' + h + "</button></li>";
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
}, Gn = {
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
    let a = [], c = '<div class="se-list-inner">';
    for (let d = 0, o = n.length, h; d < o; d++)
      h = n[d], h && (typeof h == "string" && (a.push(h), d < o - 1) || (a.length > 0 && (c += '<div class="se-selector-color">' + t(a) + "</div>", a = []), typeof h == "object" && (c += '<div class="se-selector-color">' + t(h) + "</div>")));
    return c += '<form class="se-form-group"><input type="text" maxlength="9" class="_se_color_picker_input se-color-input"/><button type="submit" class="se-btn-primary _se_color_picker_submit" title="' + l.dialogBox.submitButton + '" aria-label="' + l.dialogBox.submitButton + '">' + e.icons.checked + '</button><button type="button" class="se-btn _se_color_picker_remove" title="' + l.toolbar.removeFormat + '" aria-label="' + l.toolbar.removeFormat + '">' + e.icons.erase + "</button></form></div>", c;
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
      for (let a = 0, c = n.length; a < c; a++)
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
}, Ys = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Gn]);
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
}, Ks = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Gn]);
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
}, Xs = {
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
    for (let a = 0, c = l.length; a < c; a++)
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
}, Js = {
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
    let c = n[0], d = n[n.length - 1], o = (a.isListCell(c) || a.isComponent(c)) && !c.previousElementSibling ? c.parentNode.previousElementSibling : c.previousElementSibling, h = (a.isListCell(d) || a.isComponent(d)) && !d.nextElementSibling ? d.parentNode.nextElementSibling : d.nextElementSibling;
    const u = l.collapsed, b = {
      sc: l.startContainer,
      so: l.startContainer === l.endContainer && a.onlyZeroWidthSpace(l.startContainer) && l.startOffset === 0 && l.endOffset === 1 ? l.endOffset : l.startOffset,
      ec: l.endContainer,
      eo: l.endOffset
    };
    let y = null, k = !0;
    for (let x = 0, N = n.length; x < N; x++)
      if (!a.isList(a.getRangeFormatElement(n[x], (function(s) {
        return this.getRangeFormatElement(s) && s !== n[x];
      }).bind(a)))) {
        k = !1;
        break;
      }
    if (k && (!o || c.tagName !== o.tagName || e !== o.tagName.toUpperCase()) && (!h || d.tagName !== h.tagName || e !== h.tagName.toUpperCase())) {
      if (i) {
        for (let p = 0, g = n.length; p < g; p++)
          for (let v = p - 1; v >= 0; v--)
            if (n[v].contains(n[p])) {
              n.splice(p, 1), p--, g--;
              break;
            }
      }
      const x = a.getRangeFormatElement(c), N = x && x.tagName === e;
      let s, r;
      const f = (function(p) {
        return !this.isComponent(p);
      }).bind(a);
      N || (r = a.createElement(e));
      for (let p = 0, g = n.length, v, m; p < g; p++)
        m = a.getRangeFormatElement(n[p], f), !(!m || !a.isList(m)) && (v ? v !== m ? (i && a.isListCell(m.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : y = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0), m = n[p].parentNode, N || (r = a.createElement(e)), v = m, s = { r: v, f: [a.getParentElement(n[p], "LI")] }) : s.f.push(a.getParentElement(n[p], "LI")) : (v = m, s = { r: v, f: [a.getParentElement(n[p], "LI")] }), p === g - 1 && (i && a.isListCell(m.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : y = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0)));
    } else {
      const x = o && o.parentNode, N = h && h.parentNode;
      o = x && !a.isWysiwygDiv(x) && x.nodeName === e ? x : o, h = N && !a.isWysiwygDiv(N) && N.nodeName === e ? N : h;
      const s = o && o.tagName === e, r = h && h.tagName === e;
      let f = s ? o : a.createElement(e), p = null, g = null, v = null;
      const m = (function(_) {
        return !this.isComponent(_) && !this.isList(_);
      }).bind(a);
      for (let _ = 0, C = n.length, w, S, I, E, L, z, P, U, V; _ < C; _++) {
        if (S = n[_], S.childNodes.length === 0 && !a._isIgnoreNodeChange(S)) {
          a.removeItem(S);
          continue;
        }
        if (E = n[_ + 1], L = S.parentNode, z = E ? E.parentNode : null, I = a.isListCell(S), V = a.isRangeFormatElement(L) ? L : null, P = I && !a.isWysiwygDiv(L) ? L.parentNode : L, U = I && !a.isWysiwygDiv(L) ? !E || a.isListCell(P) ? L : L.nextSibling : S.nextSibling, w = a.createElement("LI"), a.copyFormatAttributes(w, S), _ === 0 && b.sc === S && (b.sc = w), _ === C - 1 && b.ec === S && (b.ec = w), a.isComponent(S)) {
          const M = /^HR$/i.test(S.nodeName);
          M || (w.innerHTML = "<br>"), w.innerHTML += S.outerHTML, M && (w.innerHTML += "<br>");
        } else {
          const M = S.childNodes;
          for (; M[0]; )
            w.appendChild(M[0]);
        }
        f.appendChild(w), (!E || P !== z || a.isRangeFormatElement(U)) && (p || (p = f), (!s || !E || P !== z) && !(E && a.isList(z) && z === L) && f.parentNode !== P && P.insertBefore(f, U)), a.removeItem(S), s && g === null && (g = f.children.length - 1), E && (a.getRangeFormatElement(z, m) !== a.getRangeFormatElement(L, m) || a.isList(z) && a.isList(L) && a.getElementDepth(z) !== a.getElementDepth(L)) && (f = a.createElement(e)), V && V.children.length === 0 && a.removeItem(V);
      }
      g && (p = p.children[g]), r && (v = f.children.length - 1, f.innerHTML += h.innerHTML, f.children[v], a.removeItem(h));
    }
    return this.effectNode = null, u ? y : b;
  },
  _detachNested: function(e) {
    const t = e[0], i = e[e.length - 1], l = i.nextElementSibling, n = t.parentNode, a = n.parentNode.nextElementSibling, c = n.parentNode.parentNode;
    for (let o = 0, h = e.length; o < h; o++)
      c.insertBefore(e[o], a);
    if (l && n.children.length > 0) {
      const o = n.cloneNode(!1), h = n.childNodes, u = this.util.getPositionIndex(l);
      for (; h[u]; )
        o.appendChild(h[u]);
      i.appendChild(o);
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
    let l = t[0].parentNode, n = t[i - 1], a = null;
    if (e) {
      if (l !== n.parentNode && this.util.isList(n.parentNode.parentNode) && n.nextElementSibling)
        for (n = n.nextElementSibling; n; )
          t.push(n), n = n.nextElementSibling;
      a = this.plugins.list.editList.call(this, l.nodeName.toUpperCase(), t, !0);
    } else {
      let c = this.util.createElement(l.nodeName), d = t[0].previousElementSibling, o = n.nextElementSibling;
      const h = { s: null, e: null, sl: l, el: l };
      for (let y = 0, k = i, x; y < k; y++)
        x = t[y], x.parentNode !== l && (this.plugins.list._insiedList.call(this, l, c, d, o, h), l = x.parentNode, c = this.util.createElement(l.nodeName)), d = x.previousElementSibling, o = x.nextElementSibling, c.appendChild(x);
      this.plugins.list._insiedList.call(this, l, c, d, o, h);
      const u = this.util.getNodeFromPath(h.s, h.sl), b = this.util.getNodeFromPath(h.e, h.el);
      a = {
        sc: u,
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
      const c = t.children;
      for (; c[0]; )
        i.appendChild(c[0]);
      t = i, a = !0;
    }
    if (l && t.tagName === l.tagName) {
      const c = l.children;
      for (; c[0]; )
        t.appendChild(c[0]);
      const d = l.nextElementSibling;
      l.parentNode.removeChild(l), l = d;
    }
    if (!a) {
      this.util.isListCell(i) && (e = i, l = null), e.insertBefore(t, l), n.s || (n.s = this.util.getNodePath(t.firstElementChild.firstChild, e, null), n.sl = e);
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
    const l = this.plugins.list.editList.call(this, i, null, !1);
    l && this.setRange(l.sc, l.so, l.ec, l.eo), this.submenuOff(), this.history.push(!1);
  }
}, Qs = {
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
    let c = this.setController_table(e);
    l.tableController = c, l.resizeButton = c.querySelector("._se_table_resize"), l.resizeText = c.querySelector("._se_table_resize > span > span"), l.columnFixedButton = c.querySelector("._se_table_fixed_column"), l.headerButton = c.querySelector("._se_table_header");
    let d = this.setController_tableEditor(e, l.cellControllerTop);
    l.resizeDiv = d, l.splitMenu = d.querySelector(".se-btn-group-sub"), l.mergeButton = d.querySelector("._se_table_merge_button"), l.splitButton = d.querySelector("._se_table_split_button"), l.insertRowAboveButton = d.querySelector("._se_table_insert_row_a"), l.insertRowBelowButton = d.querySelector("._se_table_insert_row_b"), a.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, l)), a.addEventListener("click", this.appendTable.bind(e)), d.addEventListener("click", this.onClick_tableController.bind(e)), c.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, n), i.element.relative.appendChild(d), i.element.relative.appendChild(c), n = null, a = null, d = null, c = null, l = null;
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
      const c = e.querySelector("td div");
      this.setRange(c, 0, c, 0), this.plugins.table.reset_table_picker.call(this);
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
      let c = 0;
      for (let u = 0, b = n[0].cells, y = n[0].cells.length; u < y; u++)
        c += b[u].colSpan;
      const d = i._rowIndex = i._trElement.rowIndex;
      i._rowCnt = n.length, i._physical_cellCnt = i._trElement.cells.length, i._logical_cellCnt = c, i._physical_cellIndex = a, i._current_colSpan = i._tdElement.colSpan - 1, i._current_rowSpan - i._trElement.cells[a].rowSpan - 1;
      let o = [], h = [];
      for (let u = 0, b, y; u <= d; u++) {
        b = n[u].cells, y = 0;
        for (let k = 0, x = b.length, N, s, r, f; k < x; k++) {
          if (N = b[k], s = N.colSpan - 1, r = N.rowSpan - 1, f = k + y, h.length > 0)
            for (let p = 0, g; p < h.length; p++)
              g = h[p], !(g.row > u) && (f >= g.index ? (y += g.cs, f += g.cs, g.rs -= 1, g.row = u + 1, g.rs < 1 && (h.splice(p, 1), p--)) : k === x - 1 && (g.rs -= 1, g.row = u + 1, g.rs < 1 && (h.splice(p, 1), p--)));
          if (u === d && k === a) {
            i._logical_cellIndex = f;
            break;
          }
          r > 0 && o.push({
            index: f,
            cs: s + 1,
            rs: r,
            row: -1
          }), y += s;
        }
        h = h.concat(o).sort(function(k, x) {
          return k.index - x.index;
        }), o = [];
      }
      o = null, h = null;
    }
  },
  editTable: function(e, t) {
    const i = this.plugins.table, l = this.context.table, n = l._element, a = e === "row";
    if (a) {
      const c = l._trElement.parentNode;
      if (/^THEAD$/i.test(c.nodeName)) {
        if (t === "up")
          return;
        if (!c.nextElementSibling || !/^TBODY$/i.test(c.nextElementSibling.nodeName)) {
          n.innerHTML += "<tbody><tr>" + i.createCells.call(this, "td", l._logical_cellCnt, !1) + "</tr></tbody>";
          return;
        }
      }
    }
    if (i._ref) {
      const c = l._tdElement, d = i._selectedCells;
      if (a)
        if (t)
          i.setCellInfo.call(this, t === "up" ? d[0] : d[d.length - 1], !0), i.editRow.call(this, t, c);
        else {
          let o = d[0].parentNode;
          const h = [d[0]];
          for (let u = 1, b = d.length, y; u < b; u++)
            y = d[u], o !== y.parentNode && (h.push(y), o = y.parentNode);
          for (let u = 0, b = h.length; u < b; u++)
            i.setCellInfo.call(this, h[u], !0), i.editRow.call(this, t);
        }
      else {
        const o = d[0].parentNode;
        if (t) {
          let h = null;
          for (let u = 0, b = d.length - 1; u < b; u++)
            if (o !== d[u + 1].parentNode) {
              h = d[u];
              break;
            }
          i.setCellInfo.call(this, t === "left" ? d[0] : h || d[0], !0), i.editCell.call(this, t, c);
        } else {
          const h = [d[0]];
          for (let u = 1, b = d.length, y; u < b && (y = d[u], o === y.parentNode); u++)
            h.push(y);
          for (let u = 0, b = h.length; u < b; u++)
            i.setCellInfo.call(this, h[u], !0), i.editCell.call(this, t);
        }
      }
      t || i.init.call(this);
    } else
      i[a ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const c = n.children;
      for (let d = 0; d < c.length; d++)
        c[d].children.length === 0 && (this.util.removeItem(c[d]), d--);
      n.children.length === 0 && this.util.removeItem(n);
    }
  },
  editRow: function(e, t) {
    const i = this.context.table, l = !e, n = e === "up", a = i._rowIndex, c = l || n ? a : a + i._current_rowSpan + 1, d = l ? -1 : 1, o = i._trElements;
    let h = i._logical_cellCnt;
    for (let u = 0, b = a + (l ? -1 : 0), y; u <= b; u++) {
      if (y = o[u].cells, y.length === 0) return;
      for (let k = 0, x = y.length, N, s; k < x; k++)
        N = y[k].rowSpan, s = y[k].colSpan, !(N < 2 && s < 2) && N + u > c && c > u && (y[k].rowSpan = N + d, h -= s);
    }
    if (l) {
      const u = o[a + 1];
      if (u) {
        const b = [];
        let y = o[a].cells, k = 0;
        for (let x = 0, N = y.length, s, r; x < N; x++)
          s = y[x], r = x + k, k += s.colSpan - 1, s.rowSpan > 1 && (s.rowSpan -= 1, b.push({ cell: s.cloneNode(!1), index: r }));
        if (b.length > 0) {
          let x = b.shift();
          y = u.cells, k = 0;
          for (let N = 0, s = y.length, r, f; N < s && (r = y[N], f = N + k, k += r.colSpan - 1, !(f >= x.index && (N--, k--, k += x.cell.colSpan - 1, u.insertBefore(x.cell, r), x = b.shift(), !x))); N++)
            ;
          if (x) {
            u.appendChild(x.cell);
            for (let N = 0, s = b.length; N < s; N++)
              u.appendChild(b[N].cell);
          }
        }
      }
      i._element.deleteRow(c);
    } else {
      const u = i._element.insertRow(c);
      u.innerHTML = this.plugins.table.createCells.call(this, "td", h, !1);
    }
    l ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  editCell: function(e, t) {
    const i = this.context.table, l = this.util, n = !e, a = e === "left", c = i._current_colSpan, d = n || a ? i._logical_cellIndex : i._logical_cellIndex + c + 1, o = i._trElements;
    let h = [], u = [], b = 0;
    const y = [], k = [];
    for (let x = 0, N = i._rowCnt, s, r, f, p, g, v; x < N; x++) {
      s = o[x], r = d, g = !1, f = s.cells, v = 0;
      for (let m = 0, _, C = f.length, w, S, I; m < C && (_ = f[m], !!_); m++)
        if (w = _.rowSpan - 1, S = _.colSpan - 1, n) {
          if (I = m + v, u.length > 0) {
            const E = !f[m + 1];
            for (let L = 0, z; L < u.length; L++)
              z = u[L], !(z.row > x) && (I >= z.index ? (v += z.cs, I = m + v, z.rs -= 1, z.row = x + 1, z.rs < 1 && (u.splice(L, 1), L--)) : E && (z.rs -= 1, z.row = x + 1, z.rs < 1 && (u.splice(L, 1), L--)));
          }
          w > 0 && h.push({
            rs: w,
            cs: S + 1,
            index: I,
            row: -1
          }), I >= r && I + S <= r + c ? y.push(_) : I <= r + c && I + S >= r ? _.colSpan -= l.getOverlapRangeAtIndex(d, d + c, I, I + S) : w > 0 && (I < r || I + S > r + c) && k.push({
            cell: _,
            i: x,
            rs: x + w
          }), v += S;
        } else {
          if (m >= r) break;
          if (S > 0) {
            if (b < 1 && S + m >= r) {
              _.colSpan += 1, r = null, b = w + 1;
              break;
            }
            r -= S;
          }
          if (!g) {
            for (let E = 0, L; E < u.length; E++)
              L = u[E], r -= L.cs, L.rs -= 1, L.rs < 1 && (u.splice(E, 1), E--);
            g = !0;
          }
        }
      if (u = u.concat(h).sort(function(m, _) {
        return m.index - _.index;
      }), h = [], !n) {
        if (b > 0) {
          b -= 1;
          continue;
        }
        r !== null && f.length > 0 && (p = this.plugins.table.createCells.call(this, f[0].nodeName, 0, !0), p = s.insertBefore(p, f[r]));
      }
    }
    if (n) {
      let x, N;
      for (let s = 0, r = y.length, f; s < r; s++)
        f = y[s].parentNode, l.removeItem(y[s]), f.cells.length === 0 && (x || (x = l.getArrayIndex(o, f)), N = l.getArrayIndex(o, f), l.removeItem(f));
      for (let s = 0, r = k.length, f; s < r; s++)
        f = k[s], f.cell.rowSpan = l.getOverlapRangeAtIndex(x, N, f.i, f.rs);
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
    const t = this.util, i = e === "vertical", l = this.context.table, n = l._tdElement, a = l._trElements, c = l._trElement, d = l._logical_cellIndex, o = l._rowIndex, h = this.plugins.table.createCells.call(this, n.nodeName, 0, !0);
    if (i) {
      const u = n.colSpan;
      if (h.rowSpan = n.rowSpan, u > 1)
        h.colSpan = this._w.Math.floor(u / 2), n.colSpan = u - h.colSpan, c.insertBefore(h, n.nextElementSibling);
      else {
        let b = [], y = [];
        for (let k = 0, x = l._rowCnt, N, s; k < x; k++) {
          N = a[k].cells, s = 0;
          for (let r = 0, f = N.length, p, g, v, m; r < f; r++) {
            if (p = N[r], g = p.colSpan - 1, v = p.rowSpan - 1, m = r + s, y.length > 0)
              for (let _ = 0, C; _ < y.length; _++)
                C = y[_], !(C.row > k) && (m >= C.index ? (s += C.cs, m += C.cs, C.rs -= 1, C.row = k + 1, C.rs < 1 && (y.splice(_, 1), _--)) : r === f - 1 && (C.rs -= 1, C.row = k + 1, C.rs < 1 && (y.splice(_, 1), _--)));
            if (m <= d && v > 0 && b.push({
              index: m,
              cs: g + 1,
              rs: v,
              row: -1
            }), p !== n && m <= d && m + g >= d + u - 1) {
              p.colSpan += 1;
              break;
            }
            if (m > d) break;
            s += g;
          }
          y = y.concat(b).sort(function(r, f) {
            return r.index - f.index;
          }), b = [];
        }
        c.insertBefore(h, n.nextElementSibling);
      }
    } else {
      const u = n.rowSpan;
      if (h.colSpan = n.colSpan, u > 1) {
        h.rowSpan = this._w.Math.floor(u / 2);
        const b = u - h.rowSpan, y = [], k = t.getArrayIndex(a, c) + b;
        for (let r = 0, f, p; r < k; r++) {
          f = a[r].cells, p = 0;
          for (let g = 0, v = f.length, m, _, C; g < v && (C = g + p, !(C >= d)); g++)
            m = f[g], _ = m.rowSpan - 1, _ > 0 && _ + r >= k && C < d && y.push({
              index: C,
              cs: m.colSpan
            }), p += m.colSpan - 1;
        }
        const x = a[k], N = x.cells;
        let s = y.shift();
        for (let r = 0, f = N.length, p = 0, g, v, m, _; r < f; r++) {
          if (m = r + p, g = N[r], v = g.colSpan - 1, _ = m + v + 1, s && _ >= s.index && (p += s.cs, _ += s.cs, s = y.shift()), _ >= d || r === f - 1) {
            x.insertBefore(h, g.nextElementSibling);
            break;
          }
          p += v;
        }
        n.rowSpan = b;
      } else {
        h.rowSpan = n.rowSpan;
        const b = t.createElement("TR");
        b.appendChild(h);
        for (let x = 0, N; x < o; x++) {
          if (N = a[x].cells, N.length === 0) return;
          for (let s = 0, r = N.length; s < r; s++)
            x + N[s].rowSpan - 1 >= o && (N[s].rowSpan += 1);
        }
        const y = l._physical_cellIndex, k = c.cells;
        for (let x = 0, N = k.length; x < N; x++)
          x !== y && (k[x].rowSpan += 1);
        c.parentNode.insertBefore(b, c.nextElementSibling);
      }
    }
    this.focusEdge(n), this.plugins.table.setPositionControllerDiv.call(this, n, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, i = this.util, l = e._ref, n = e._selectedCells, a = n[0];
    let c = null, d = null, o = l.ce - l.cs + 1, h = l.re - l.rs + 1, u = "", b = null;
    for (let y = 1, k = n.length, x, N; y < k; y++) {
      x = n[y], b !== x.parentNode && (b = x.parentNode), N = x.children;
      for (let s = 0, r = N.length; s < r; s++)
        i.isFormatElement(N[s]) && i.onlyZeroWidthSpace(N[s].textContent) && i.removeItem(N[s]);
      u += x.innerHTML, i.removeItem(x), b.cells.length === 0 && (c ? d = b : c = b, h -= 1);
    }
    if (c) {
      const y = t._trElements, k = i.getArrayIndex(y, c), x = i.getArrayIndex(y, d || c), N = [];
      for (let s = 0, r; s <= x; s++) {
        if (r = y[s].cells, r.length === 0) {
          N.push(y[s]);
          continue;
        }
        for (let f = 0, p = r.length, g, v; f < p; f++)
          g = r[f], v = g.rowSpan - 1, v > 0 && s + v >= k && (g.rowSpan -= i.getOverlapRangeAtIndex(k, x, s, s + v));
      }
      for (let s = 0, r = N.length; s < r; s++)
        i.removeItem(N[s]);
    }
    a.innerHTML += u, a.colSpan = o, a.rowSpan = h, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, a), i.addClass(a, "se-table-selected-cell"), this.focusEdge(a);
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
    let l, n, a, c;
    e.indexOf("width") > -1 && (l = t.resizeButton.firstElementChild, n = t.resizeText, t._maxWidth ? (a = t.icons.reduction, c = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(i, "se-table-size-auto"), this.util.addClass(i, "se-table-size-100")) : (a = t.icons.expansion, c = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(i, "se-table-size-100"), this.util.addClass(i, "se-table-size-auto")), this.util.changeElement(l, a), this.util.changeTxt(n, c)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(i, "se-table-layout-auto"), this.util.addClass(i, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(i, "se-table-layout-fixed"), this.util.addClass(i, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")));
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
    for (let u = 0, b = a.length; u < b; u++)
      n.removeClass(a[u], "se-table-selected-cell");
    if (e === t && (n.addClass(e, "se-table-selected-cell"), !i._shift))
      return;
    let c = !0, d = [], o = [];
    const h = i._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let u = 0, b = l.length, y, k; u < b; u++) {
      y = l[u].cells, k = 0;
      for (let x = 0, N = y.length, s, r, f, p; x < N; x++) {
        if (s = y[x], f = s.colSpan - 1, p = s.rowSpan - 1, r = x + k, d.length > 0)
          for (let g = 0, v; g < d.length; g++)
            v = d[g], !(v.row > u) && (r >= v.index ? (k += v.cs, r += v.cs, v.rs -= 1, v.row = u + 1, v.rs < 1 && (d.splice(g, 1), g--)) : x === N - 1 && (v.rs -= 1, v.row = u + 1, v.rs < 1 && (d.splice(g, 1), g--)));
        if (c) {
          if ((s === e || s === t) && (h.cs = h.cs !== null && h.cs < r ? h.cs : r, h.ce = h.ce !== null && h.ce > r + f ? h.ce : r + f, h.rs = h.rs !== null && h.rs < u ? h.rs : u, h.re = h.re !== null && h.re > u + p ? h.re : u + p, h._i += 1), h._i === 2) {
            c = !1, d = [], o = [], u = -1;
            break;
          }
        } else if (n.getOverlapRangeAtIndex(h.cs, h.ce, r, r + f) && n.getOverlapRangeAtIndex(h.rs, h.re, u, u + p)) {
          const g = h.cs < r ? h.cs : r, v = h.ce > r + f ? h.ce : r + f, m = h.rs < u ? h.rs : u, _ = h.re > u + p ? h.re : u + p;
          if (h.cs !== g || h.ce !== v || h.rs !== m || h.re !== _) {
            h.cs = g, h.ce = v, h.rs = m, h.re = _, u = -1, d = [], o = [];
            break;
          }
          n.addClass(s, "se-table-selected-cell");
        }
        p > 0 && o.push({
          index: r,
          cs: f + 1,
          rs: p,
          row: -1
        }), k += s.colSpan - 1;
      }
      d = d.concat(o).sort(function(x, N) {
        return x.index - N.index;
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
    const c = this.context.table;
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
        c._maxWidth = !c._maxWidth, a.setTableStyle.call(this, "width"), a.setPositionControllerTop.call(this, c._element), a.setPositionControllerDiv.call(this, c._tdElement, a._shift);
        break;
      case "layout":
        c._fixedColumn = !c._fixedColumn, a.setTableStyle.call(this, "column"), a.setPositionControllerTop.call(this, c._element), a.setPositionControllerDiv.call(this, c._tdElement, a._shift);
        break;
      case "remove":
        const d = c._element.parentNode;
        this.util.removeItem(c._element), this.controllersOff(), d !== this.context.element.wysiwyg && this.util.removeItemAllParents(d, function(o) {
          return o.childNodes.length === 0;
        }, null), this.focus();
    }
    this.history.push(!1);
  }
}, ea = {
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
    let c = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let d = 0, o = a.length, h, u, b, y, k, x, N; d < o; d++)
      h = a[d], typeof h == "string" && n.indexOf(h) > -1 ? (u = h.toLowerCase(), b = u === "blockquote" ? "range" : u === "pre" ? "free" : "replace", k = /^h/.test(u) ? u.match(/\d+/)[0] : "", y = i["tag_" + (k ? "h" : u)] + k, N = "", x = "") : (u = h.tag.toLowerCase(), b = h.command, y = h.name || u, N = h.class, x = N ? ' class="' + N + '"' : ""), c += '<li><button type="button" class="se-btn-list" data-command="' + b + '" data-value="' + u + '" data-class="' + N + '" title="' + y + '" aria-label="' + y + '"><' + u + x + ">" + y + "</" + u + "></button></li>";
    return c += "</ul></div>", l.innerHTML = c, l;
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
      const n = this.context.formatBlock._formatList, a = e.nodeName.toLowerCase(), c = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let d = 0, o = n.length, h; d < o; d++)
        if (h = n[d], a === h.getAttribute("data-value") && c === h.getAttribute("data-class")) {
          t = h.title;
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
    const e = this.context.formatBlock, t = e._formatList, i = e.targetText, l = (i.getAttribute("data-value") || "") + (i.getAttribute("data-class") || "");
    if (l !== e.currentFormat) {
      for (let n = 0, a = t.length, c; n < a; n++)
        c = t[n], l === c.getAttribute("data-value") + c.getAttribute("data-class") ? this.util.addClass(c, "active") : this.util.removeClass(c, "active");
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
        const c = n.cloneNode(!1);
        this.applyRangeFormatElement(c);
      } else {
        let c = this.getRange(), d = this.getSelectedElementsAndComponents(!1);
        if (d.length === 0 && (c = this.getRange_addLine(c, null), d = this.getSelectedElementsAndComponents(!1), d.length === 0))
          return;
        const o = c.startOffset, h = c.endOffset, u = this.util;
        let b = d[0], y = d[d.length - 1];
        const k = u.getNodePath(c.startContainer, b, null, null), x = u.getNodePath(c.endContainer, y, null, null), N = this.detachList(d, !1);
        N.sc && (b = N.sc), N.ec && (y = N.ec), this.setRange(u.getNodeFromPath(k, b), o, u.getNodeFromPath(x, y), h);
        const s = this.getSelectedElementsAndComponents(!1);
        if (i === "free") {
          const r = s.length - 1;
          let f = s[r].parentNode, p = n.cloneNode(!1);
          const g = p;
          for (let v = r, m, _, C, w, S, I, E = !0; v >= 0; v--)
            if (m = s[v], m !== (s[v + 1] ? s[v + 1].parentNode : null)) {
              if (I = u.isComponent(m), _ = I ? "" : m.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), C = u.getParentElement(m, function(L) {
                return L.parentNode === f;
              }), (f !== m.parentNode || I) && (u.isFormatElement(f) ? (f.parentNode.insertBefore(p, f.nextSibling), f = f.parentNode) : (f.insertBefore(p, C ? C.nextSibling : null), f = m.parentNode), w = p.nextSibling, w && p.nodeName === w.nodeName && u.isSameAttributes(p, w) && (p.innerHTML += "<BR>" + w.innerHTML, u.removeItem(w)), p = n.cloneNode(!1), E = !0), S = p.innerHTML, p.innerHTML = (E || !_ || !S || /<br>$/i.test(_) ? _ : _ + "<BR>") + S, v === 0) {
                f.insertBefore(p, m), w = m.nextSibling, w && p.nodeName === w.nodeName && u.isSameAttributes(p, w) && (p.innerHTML += "<BR>" + w.innerHTML, u.removeItem(w));
                const L = p.previousSibling;
                L && p.nodeName === L.nodeName && u.isSameAttributes(p, L) && (L.innerHTML += "<BR>" + p.innerHTML, u.removeItem(p));
              }
              I || u.removeItem(m), _ && (E = !1);
            }
          this.setRange(g, 0, g, 0);
        } else {
          for (let r = 0, f = s.length, p, g; r < f; r++)
            p = s[r], (p.nodeName.toLowerCase() !== l.toLowerCase() || (p.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== a) && !u.isComponent(p) && (g = n.cloneNode(!1), u.copyFormatAttributes(g, p), g.innerHTML = p.innerHTML, p.parentNode.replaceChild(g, p)), r === 0 && (b = g || p), r === f - 1 && (y = g || p), g = null;
          this.setRange(u.getNodeFromPath(k, b), o, u.getNodeFromPath(x, y), h);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, ta = {
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
    for (let c = 0, d = n.length, o; c < d; c++)
      o = n[c], a += '<li><button type="button" class="se-btn-list" data-value="' + o.value + '" title="' + o.text + '" aria-label="' + o.text + '">' + o.text + "</button></li>";
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
}, ia = {
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
    for (let n = 0, a = t.length, c; n < a; n++)
      c = t[n], l += '<li><button type="button" class="se-btn-list" data-value="' + n + '" title="' + c.name + '" aria-label="' + c.name + '">' + c.name + "</button></li>";
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
}, la = {
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
    let c = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let d = 0, o = a.length, h, u, b, y; d < o; d++) {
      if (h = a[d], typeof h == "string") {
        const k = n[h.toLowerCase()];
        if (!k) continue;
        h = k;
      }
      u = h.name, b = h.class ? ' class="' + h.class + '"' : "", y = h._class, c += '<li><button type="button" class="se-btn-list' + (y ? " " + y : "") + '" data-value="' + h.class + '" title="' + u + '" aria-label="' + u + '"><div' + b + ">" + u + "</div></button></li>";
    }
    return c += "</ul></div>", i.innerHTML = c, i;
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
    for (let a = 0, c = l.length; a < c; a++)
      n(l[a], i);
    this.submenuOff(), this.history.push(!1);
  }
}, na = {
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
    for (let c = 0, d = n.length, o, h, u, b, y, k, x; c < d; c++) {
      if (o = n[c], b = "", k = "", y = [], typeof o == "string") {
        const N = l[o.toLowerCase()];
        if (!N) continue;
        o = N;
      }
      u = o.name, h = o.tag || "span", x = o._class, o.style && (b += ' style="' + o.style + '"', k += o.style.replace(/:[^;]+(;|$)\s*/g, ","), y.push("style")), o.class && (b += ' class="' + o.class + '"', k += "." + o.class.trim().replace(/\s+/g, ",."), y.push("class")), k = k.replace(/,$/, ""), a += '<li><button type="button" class="se-btn-list' + (x ? " " + x : "") + '" data-command="' + h + '" data-value="' + k + '" title="' + u + '" aria-label="' + u + '"><' + h + b + ">" + u + "</" + h + "></button></li>";
    }
    return a += "</ul></div>", i.innerHTML = a, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.util, i = this.context.textStyle._styleList, l = this.getSelectionNode();
    for (let n = 0, a = i.length, c, d, o; n < a; n++) {
      c = i[n], d = c.getAttribute("data-value").split(",");
      for (let h = 0, u, b; h < d.length; h++) {
        for (u = l, o = !1; u && !e.isFormatElement(u) && !e.isComponent(u); ) {
          if (u.nodeName.toLowerCase() === c.getAttribute("data-command").toLowerCase() && (b = d[h], /^\./.test(b) ? e.hasClass(u, b.replace(/^\./, "")) : u.style[b])) {
            o = !0;
            break;
          }
          u = u.parentNode;
        }
        if (!o) break;
      }
      o ? e.addClass(c, "active") : e.removeClass(c, "active");
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
    for (let o = 0, h = a.length; o < h; o++)
      n.push("." + a[o]);
    const c = this.util.hasClass(t, "active") ? null : l.cloneNode(!1), d = c ? null : [l.nodeName];
    this.nodeChange(c, n, d, !0), this.submenuOff();
  }
};
var Yn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
        let c = n.util.createElement("DIV");
        c.className = "se-dialog sun-editor-common";
        let d = n.util.createElement("DIV");
        d.className = "se-dialog-back", d.style.display = "none";
        let o = n.util.createElement("DIV");
        o.className = "se-dialog-inner", o.style.display = "none", c.appendChild(d), c.appendChild(o), a.dialog.modalArea = c, a.dialog.back = d, a.dialog.modal = o, a.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(n)), a.dialog.modal.addEventListener("click", this._onClick_dialog.bind(n)), a.element.relative.appendChild(c), c = null, d = null, o = null;
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
        this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null), this.plugins.dialog._bindClose = (function(d) {
          /27/.test(d.keyCode) && this.plugins.dialog.close.call(this);
        }).bind(this), this._d.addEventListener("keydown", this.plugins.dialog._bindClose), this.context.dialog.updateModal = a, this.options.popupDisplay === "full" ? this.context.dialog.modalArea.style.position = "fixed" : this.context.dialog.modalArea.style.position = "absolute", this.context.dialog.kind = n, this.modalForm = this.context[n].modal;
        const c = this.context[n].focusElement;
        typeof this.plugins[n].on == "function" && this.plugins[n].on.call(this, a), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", c && c.focus();
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
})(Yn);
var oa = Yn.exports;
const oi = /* @__PURE__ */ ze(oa), sa = {
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
}, Kn = {
  name: "anchor",
  add: function(e) {
    e.addModule([sa]), e.context.anchor = {
      caller: {},
      forms: this.setDialogForm(e),
      host: (e._w.location.origin + e._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  /** dialog */
  setDialogForm: function(e) {
    const t = e.lang, i = e.options.linkRel, l = (e.options.linkRelDefault.default || "").split(" "), n = e.icons, a = e.util.createElement("DIV");
    let c = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (e.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + t.dialogBox.linkBox.bookmark + '" aria-label="' + t.dialogBox.linkBox.bookmark + '">' + n.bookmark + "</button>" + e.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + n.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + n.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + t.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (i.length > 0) {
      c += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let d = 0, o = i.length, h; d < o; d++)
        h = i[d], c += '<li><button type="button" class="se-btn-list' + (l.indexOf(h) > -1 ? " se-checked" : "") + '" data-command="' + h + '" title="' + h + '" aria-label="' + h + '"><span class="se-svg">' + n.checked + "</span>" + h + "</button></li>";
      c += "</ul></div></div></div>";
    }
    return c += "</div></div>", a.innerHTML = c, a;
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
      this.util.addClass(i, "active"), l.style.visibility = "hidden", l.style.display = "block", this.options.rtl ? l.style.left = i.offsetLeft - l.offsetWidth - 1 + "px" : l.style.left = i.offsetLeft + i.offsetWidth + 1 + "px", l.style.top = i.offsetTop + i.offsetHeight / 2 - l.offsetHeight / 2 + "px", l.style.visibility = "", this.plugins.anchor._closeRelMenu = (function(n, a, c) {
        c && (n.relButton.contains(c.target) || n.relList.contains(c.target)) || (this.util.removeClass(a, "active"), n.relList.style.display = "none", this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu), this.plugins.anchor._closeRelMenu = null);
      }).bind(this, e, i), this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(e, t) {
    this.plugins.anchor.toggleRelList.call(this, e, !this.util.hasClass(t.target, "active"));
  },
  onClick_relList: function(e, t) {
    const i = t.target, l = i.getAttribute("data-command");
    if (!l) return;
    const n = e.currentRel, a = this.util.toggleClass(i, "se-checked"), c = n.indexOf(l);
    a ? c === -1 && n.push(l) : c > -1 && n.splice(c, 1), e.relPreview.title = e.relPreview.textContent = n.join(" ");
  },
  setRel: function(e, t) {
    const i = e.relList, l = e.currentRel = t ? t.split(" ") : [];
    if (!i) return;
    const n = i.querySelectorAll("button");
    for (let a = 0, c = n.length, d; a < c; a++)
      d = n[a].getAttribute("data-command"), l.indexOf(d) > -1 ? this.util.addClass(n[a], "se-checked") : this.util.removeClass(n[a], "se-checked");
    e.relPreview.title = e.relPreview.textContent = l.join(" ");
  },
  createHeaderList: function(e, t, i) {
    const l = this.util.getListChildren(this.context.element.wysiwyg, function(d) {
      return /h[1-6]/i.test(d.nodeName);
    });
    if (l.length === 0) return;
    const n = new this._w.RegExp("^" + i.replace(/^#/, ""), "i"), a = [];
    let c = "";
    for (let d = 0, o = l.length, h; d < o; d++)
      h = l[d], n.test(h.textContent) && (a.push(h), c += '<li class="se-select-item" data-index="' + d + '">' + h.textContent + "</li>");
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
    const i = e.preview, l = this.options.linkProtocol, n = this.options.linkNoPrefix, a = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(t) || t.indexOf(l) === 0, c = l ? this._w.RegExp("^" + this.util.escapeStringRegexp(t.substr(0, l.length))).test(l) : !1;
    t = e.linkValue = i.textContent = t ? n ? t : l && !a && !c ? l + t : a ? t : /^www\./.test(t) ? "http://" + t : this.context.anchor.host + (/^\//.test(t) ? "" : "/") + t : "", this.plugins.anchor.selfPathBookmark.call(this, t) ? (e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active")) : (e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active")), !this.plugins.anchor.selfPathBookmark.call(this, t) && e.downloadCheck.checked ? e.download.style.display = "block" : e.download.style.display = "none";
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
    for (let n = 0, a = l.length, c; n < a; n++)
      c = i.indexOf(l[n]), c === -1 && i.push(l[n]);
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
}, aa = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([oi, Kn]);
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
var Xn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
    const l = {
      name: "component",
      /**
       * @description Create a container for the resizing component and insert the element.
       * @param {Element} cover Cover element (FIGURE)
       * @param {String} className Class name of container (fixed: se-component)
       * @returns {Element} Created container element
       */
      set_container: function(n, a) {
        const c = this.util.createElement("DIV");
        return c.className = "se-component " + a, c.appendChild(n), c;
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
})(Xn);
var ra = Xn.exports;
const cl = /* @__PURE__ */ ze(ra);
var Jn = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
        const a = n.icons, c = n.context;
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
        let d = this.setController_resize(n);
        c.resizing.resizeContainer = d, c.resizing.resizeDiv = d.querySelector(".se-modal-resize"), c.resizing.resizeDot = d.querySelector(".se-resize-dot"), c.resizing.resizeDisplay = d.querySelector(".se-resize-display");
        let o = this.setController_button(n);
        c.resizing.resizeButton = o;
        let h = c.resizing.resizeHandles = c.resizing.resizeDot.querySelectorAll("span");
        c.resizing.resizeButtonGroup = o.querySelector("._se_resizing_btn_group"), c.resizing.rotationButtons = o.querySelectorAll("._se_resizing_btn_group ._se_rotation"), c.resizing.percentageButtons = o.querySelectorAll("._se_resizing_btn_group ._se_percentage"), c.resizing.alignMenu = o.querySelector(".se-resizing-align-list"), c.resizing.alignMenuList = c.resizing.alignMenu.querySelectorAll("button"), c.resizing.alignButton = o.querySelector("._se_resizing_align_button"), c.resizing.autoSizeButton = o.querySelector("._se_resizing_btn_group ._se_auto_size"), c.resizing.captionButton = o.querySelector("._se_resizing_caption_button"), d.addEventListener("mousedown", function(u) {
          u.preventDefault();
        }), h[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), h[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), h[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), h[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), h[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), h[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), h[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), h[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), o.addEventListener("click", this.onClick_resizeButton.bind(n)), c.element.relative.appendChild(d), c.element.relative.appendChild(o), d = null, o = null, h = null;
      },
      /** resize controller, button (image, iframe, video) */
      setController_resize: function(n) {
        const a = n.util.createElement("DIV");
        return a.className = "se-controller se-resizing-container", a.style.display = "none", a.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', a;
      },
      setController_button: function(n) {
        const a = n.lang, c = n.icons, d = n.util.createElement("DIV");
        return d.className = "se-controller se-controller-resizing", d.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.resize100 + '</span></span></button><button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage"><span>75%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.resize75 + '</span></span></button><button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage"><span>50%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.resize50 + '</span></span></button><button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + c.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.autoSize + '</span></span></button><button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + c.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.rotateLeft + '</span></span></button><button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + c.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.rotateRight + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + c.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.mirrorHorizontal + '</span></span></button><button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + c.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.mirrorVertical + '</span></span></button><button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + c.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.toolbar.align + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list"><div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + c.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.basic + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + c.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.left + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + c.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.center + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + c.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.right + '</span></span></button></li></ul></div></div><button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + c.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.caption + '</span></span></button><button type="button" data-command="revert" class="se-btn se-tooltip">' + c.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.dialogBox.revertButton + '</span></span></button><button type="button" data-command="update" class="se-btn se-tooltip">' + c.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.edit + '</span></span></button><button type="button" data-command="delete" class="se-btn se-tooltip">' + c.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + a.controller.remove + "</span></span></button></div>", d;
      },
      /**
       * @description Gets the width size
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {Element} element Target element
       * @param {Element} cover Cover element (FIGURE)
       * @param {Element} container Container element (DIV.se-component)
       * @returns {String}
       */
      _module_getSizeX: function(n, a, c, d) {
        return a || (a = n._element), c || (c = n._cover), d || (d = n._container), a ? /%$/.test(a.style.width) ? (d && this.util.getNumber(d.style.width, 2) || 100) + "%" : a.style.width : "";
      },
      /**
       * @description Gets the height size
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {Element} element Target element
       * @param {Element} cover Cover element (FIGURE)
       * @param {Element} container Container element (DIV.se-component)
       * @returns {String}
       */
      _module_getSizeY: function(n, a, c, d) {
        return a || (a = n._element), c || (c = n._cover), d || (d = n._container), !d || !c ? a && a.style.height || "" : this.util.getNumber(c.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? c.style.height : !/%$/.test(a.style.height) || !/%$/.test(a.style.width) ? a.style.height : (d && this.util.getNumber(d.style.height, 2) || 100) + "%";
      },
      /**
       * @description Called at the "openModify" to put the size of the current target into the size input element.
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       * @param {Object} pluginObj Plugin object
       */
      _module_setModifyInputSize: function(n, a) {
        const c = n._onlyPercentage && this.context.resizing._rotateVertical;
        n.proportion.checked = n._proportionChecked = n._element.getAttribute("data-proportion") !== "false";
        let d = c ? "" : this.plugins.resizing._module_getSizeX.call(this, n);
        if (d === n._defaultSizeX && (d = ""), n._onlyPercentage && (d = this.util.getNumber(d, 2)), n.inputX.value = d, a.setInputSize.call(this, "x"), !n._onlyPercentage) {
          let o = c ? "" : this.plugins.resizing._module_getSizeY.call(this, n);
          o === n._defaultSizeY && (o = ""), n._onlyPercentage && (o = this.util.getNumber(o, 2)), n.inputY.value = o;
        }
        n.inputX.disabled = !!c, n.inputY.disabled = !!c, n.proportion.disabled = !!c, a.setRatio.call(this);
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
          const c = n.inputX.value.replace(/\d+|\./g, "") || n.sizeUnit, d = n.inputY.value.replace(/\d+|\./g, "") || n.sizeUnit;
          if (c !== d) return;
          const o = c === "%" ? 2 : 0;
          a === "x" ? n.inputY.value = this.util.getNumber(n._ratioY * this.util.getNumber(n.inputX.value, o), o) + d : n.inputX.value = this.util.getNumber(n._ratioX * this.util.getNumber(n.inputY.value, o), o) + c;
        }
      },
      /**
       * @description It is called in "setRatio" (input and proportionCheck tags changeEvent), 
       * checks the value of the input tag, calculates the ratio, and resets it in the input tag.
       * @param {Object} contextPlugin context object of plugin (core.context[plugin])
       */
      _module_setRatio: function(n) {
        const a = n.inputX.value, c = n.inputY.value;
        if (n.proportion.checked && /\d+/.test(a) && /\d+/.test(c)) {
          const d = a.replace(/\d+|\./g, "") || n.sizeUnit, o = c.replace(/\d+|\./g, "") || n.sizeUnit;
          if (d !== o)
            n._ratio = !1;
          else if (!n._ratio) {
            const h = this.util.getNumber(a, 0), u = this.util.getNumber(c, 0);
            n._ratio = !0, n._ratioX = h / u, n._ratioY = u / h;
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
        const a = this.plugins.resizing._module_getSizeX.call(this, n), c = this.plugins.resizing._module_getSizeY.call(this, n);
        n._element.setAttribute("width", a.replace("px", "")), n._element.setAttribute("height", c.replace("px", "")), n._element.setAttribute("data-size", a + "," + c), n._videoRatio && (n._videoRatio = c);
      },
      /**
       * @description Call the resizing module
       * @param {Element} targetElement Resizing target element
       * @param {string} plugin Plugin name
       * @returns {Object} Size of resizing div {w, h, t, l}
       */
      call_controller_resize: function(n, a) {
        const c = this.context.resizing, d = this.context[a];
        c._resize_plugin = a;
        const o = c.resizeContainer, h = c.resizeDiv, u = this.util.getOffset(n, this.context.element.wysiwygFrame), b = c._rotateVertical = /^(90|270)$/.test(Math.abs(n.getAttribute("data-rotate")).toString()), y = b ? n.offsetHeight : n.offsetWidth, k = b ? n.offsetWidth : n.offsetHeight, x = u.top, N = u.left - this.context.element.wysiwygFrame.scrollLeft;
        o.style.top = x + "px", o.style.left = N + "px", o.style.width = y + "px", o.style.height = k + "px", h.style.top = "0px", h.style.left = "0px", h.style.width = y + "px", h.style.height = k + "px";
        let s = n.getAttribute("data-align") || "basic";
        s = s === "none" ? "basic" : s;
        const r = this.util.getParentElement(n, this.util.isComponent), f = this.util.getParentElement(n, "FIGURE"), p = this.plugins.resizing._module_getSizeX.call(this, d, n, f, r) || "auto", g = d._onlyPercentage && a === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, d, n, f, r) || "auto");
        this.util.changeTxt(c.resizeDisplay, this.lang.dialogBox[s] + " (" + p + g + ")"), c.resizeButtonGroup.style.display = d._resizing ? "" : "none";
        const v = d._resizing && !d._resizeDotHide && !d._onlyPercentage ? "flex" : "none", m = c.resizeHandles;
        for (let E = 0, L = m.length; E < L; E++)
          m[E].style.display = v;
        if (d._resizing) {
          const E = c.rotationButtons;
          E[0].style.display = E[1].style.display = d._rotation ? "" : "none";
        }
        if (d._alignHide)
          c.alignButton.style.display = "none";
        else {
          c.alignButton.style.display = "";
          const E = c.alignMenuList;
          this.util.changeElement(c.alignButton.firstElementChild, c.alignIcons[s]);
          for (let L = 0, z = E.length; L < z; L++)
            E[L].getAttribute("data-value") === s ? this.util.addClass(E[L], "on") : this.util.removeClass(E[L], "on");
        }
        const _ = c.percentageButtons, C = /%$/.test(n.style.width) && /%$/.test(r.style.width) ? this.util.getNumber(r.style.width, 0) / 100 + "" : "";
        for (let E = 0, L = _.length; E < L; E++)
          _[E].getAttribute("data-value") === C ? this.util.addClass(_[E], "active") : this.util.removeClass(_[E], "active");
        d._captionShow ? (c.captionButton.style.display = "", this.util.getChildElement(n.parentNode, "figcaption") ? (this.util.addClass(c.captionButton, "active"), d._captionChecked = !0) : (this.util.removeClass(c.captionButton, "active"), d._captionChecked = !1)) : c.captionButton.style.display = "none", o.style.display = "block";
        const w = { left: 0, top: 50 };
        this.options.iframe && (w.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, w.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(c.resizeButton, o, "bottom", w);
        const S = function() {
          this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
        };
        this.controllersOn(o, c.resizeButton, S.bind(this), n, a), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), c._resize_w = y, c._resize_h = k;
        const I = (n.getAttribute("origin-size") || "").split(",");
        return c._origin_w = I[0] || n.naturalWidth, c._origin_h = I[1] || n.naturalHeight, {
          w: y,
          h: k,
          t: x,
          l: N
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
        const a = n.target, c = a.getAttribute("data-command") || a.parentNode.getAttribute("data-command");
        if (!c) return;
        const d = a.getAttribute("data-value") || a.parentNode.getAttribute("data-value"), o = this.context.resizing._resize_plugin, h = this.context[o], u = h._element, b = this.plugins[o];
        if (n.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), c === "onalign"))) {
          switch (c) {
            case "auto":
              this.plugins.resizing.resetTransform.call(this, u), b.setAutoSize.call(this), this.selectComponent(u, o);
              break;
            case "percent":
              let y = this.plugins.resizing._module_getSizeY.call(this, h);
              if (this.context.resizing._rotateVertical) {
                const v = u.getAttribute("data-percentage");
                v && (y = v.split(",")[1]);
              }
              this.plugins.resizing.resetTransform.call(this, u), b.setPercentSize.call(this, d * 100, this.util.getNumber(y, 0) === null || !/%$/.test(y) ? "" : y), this.selectComponent(u, o);
              break;
            case "mirror":
              const k = u.getAttribute("data-rotate") || "0";
              let x = u.getAttribute("data-rotateX") || "", N = u.getAttribute("data-rotateY") || "";
              d === "h" && !this.context.resizing._rotateVertical || d === "v" && this.context.resizing._rotateVertical ? N = N ? "" : "180" : x = x ? "" : "180", u.setAttribute("data-rotateX", x), u.setAttribute("data-rotateY", N), this.plugins.resizing._setTransForm(u, k, x, N);
              break;
            case "rotate":
              const s = this.context.resizing, r = u.getAttribute("data-rotate") * 1 + d * 1, f = this._w.Math.abs(r) >= 360 ? 0 : r;
              u.setAttribute("data-rotate", f), s._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(f).toString()), this.plugins.resizing.setTransformSize.call(this, u, null, null), this.selectComponent(u, o);
              break;
            case "onalign":
              this.plugins.resizing.openAlignMenu.call(this);
              return;
            case "align":
              const p = d === "basic" ? "none" : d;
              b.setAlign.call(this, p, null, null, null), this.selectComponent(u, o);
              break;
            case "caption":
              const g = !h._captionChecked;
              if (b.openModify.call(this, !0), h._captionChecked = h.captionCheckEl.checked = g, b.update_image.call(this, !1, !1, !1), g) {
                const v = this.util.getChildElement(h._caption, function(m) {
                  return m.nodeType === 3;
                });
                v ? this.setRange(v, 0, v, v.textContent.length) : h._caption.focus(), this.controllersOff();
              } else
                this.selectComponent(u, o), b.openModify.call(this, !0);
              break;
            case "revert":
              b.setOriginSize.call(this), this.selectComponent(u, o);
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
      setTransformSize: function(n, a, c) {
        let d = n.getAttribute("data-percentage");
        const o = this.context.resizing._rotateVertical, h = n.getAttribute("data-rotate") * 1;
        let u = "";
        if (d && !o)
          d = d.split(","), d[0] === "auto" && d[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, d[0], d[1]);
        else {
          const b = this.util.getParentElement(n, "FIGURE"), y = a || n.offsetWidth, k = c || n.offsetHeight, x = (o ? k : y) + "px", N = (o ? y : k) + "px";
          if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, y + "px", k + "px", !0), b.style.width = x, b.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : N, o) {
            let s = y / 2 + "px " + y / 2 + "px 0", r = k / 2 + "px " + k / 2 + "px 0";
            u = h === 90 || h === -270 ? r : s;
          }
        }
        n.style.transformOrigin = u, this.plugins.resizing._setTransForm(n, h.toString(), n.getAttribute("data-rotateX") || "", n.getAttribute("data-rotateY") || ""), o ? n.style.maxWidth = "none" : n.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, n);
      },
      _setTransForm: function(n, a, c, d) {
        let o = (n.offsetWidth - n.offsetHeight) * (/-/.test(a) ? 1 : -1), h = "";
        if (/[1-9]/.test(a) && (c || d))
          switch (h = c ? "Y" : "X", a) {
            case "90":
              h = c && d ? "X" : d ? h : "";
              break;
            case "270":
              o *= -1, h = c && d ? "Y" : c ? h : "";
              break;
            case "-90":
              h = c && d ? "Y" : c ? h : "";
              break;
            case "-270":
              o *= -1, h = c && d ? "X" : d ? h : "";
              break;
            default:
              h = "";
          }
        a % 180 === 0 && (n.style.maxWidth = ""), n.style.transform = "rotate(" + a + "deg)" + (c ? " rotateX(" + c + "deg)" : "") + (d ? " rotateY(" + d + "deg)" : "") + (h ? " translate" + h + "(" + o + "px)" : "");
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
        const a = this.context.resizing, c = a._resize_direction = n.target.classList[0];
        a._resizeClientX = n.clientX, a._resizeClientY = n.clientY, this.context.element.resizeBackground.style.display = "block", a.resizeButton.style.display = "none", a.resizeDiv.style.float = /l/.test(c) ? "right" : /r/.test(c) ? "left" : "none";
        const d = (function(u) {
          if (u.type === "keydown" && u.keyCode !== 27) return;
          const b = a._isChange;
          a._isChange = !1, this.removeDocEvent("mousemove", o), this.removeDocEvent("mouseup", d), this.removeDocEvent("keydown", d), u.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, c), b && this.history.push(!1));
        }).bind(this), o = this.plugins.resizing.resizing_element.bind(this, a, c, this.context[a._resize_plugin]);
        this.addDocEvent("mousemove", o), this.addDocEvent("mouseup", d), this.addDocEvent("keydown", d);
      },
      /**
       * @description Mouse move event after call "onMouseDown_resize_handle" of resize handles
       * The size of the module's "div" is adjusted according to the mouse move event.
       * @param {Object} contextResizing "core.context.resizing" object (binding argument)
       * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh") (binding argument)
       * @param {Object} plugin "core.context[currentPlugin]" object (binding argument)
       * @param {MouseEvent} e Event object
       */
      resizing_element: function(n, a, c, d) {
        const o = d.clientX, h = d.clientY;
        let u = c._element_w, b = c._element_h;
        const y = c._element_w + (/r/.test(a) ? o - n._resizeClientX : n._resizeClientX - o), k = c._element_h + (/b/.test(a) ? h - n._resizeClientY : n._resizeClientY - h), x = c._element_h / c._element_w * y;
        /t/.test(a) && (n.resizeDiv.style.top = c._element_h - (/h/.test(a) ? k : x) + "px"), /l/.test(a) && (n.resizeDiv.style.left = c._element_w - y + "px"), /r|l/.test(a) && (n.resizeDiv.style.width = y + "px", u = y), /^(t|b)[^h]$/.test(a) ? (n.resizeDiv.style.height = x + "px", b = x) : /^(t|b)h$/.test(a) && (n.resizeDiv.style.height = k + "px", b = k), n._resize_w = u, n._resize_h = b, this.util.changeTxt(n.resizeDisplay, this._w.Math.round(u) + " x " + this._w.Math.round(b)), n._isChange = !0;
      },
      /**
       * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
       * Called at the mouse-up event registered in "onMouseDown_resize_handle".
       * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
       */
      cancel_controller_resize: function(n) {
        const a = this.context.resizing._rotateVertical;
        this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
        let c = this._w.Math.round(a ? this.context.resizing._resize_h : this.context.resizing._resize_w), d = this._w.Math.round(a ? this.context.resizing._resize_w : this.context.resizing._resize_h);
        if (!a && !/%$/.test(c)) {
          const u = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
          this.util.getNumber(c, 0) > u && (d = this._w.Math.round(d / c * u), c = u);
        }
        const o = this.context.resizing._resize_plugin;
        this.plugins[o].setSize.call(this, c, d, !1, n), a && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, c, d), this.selectComponent(this.context[o]._element, o);
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
})(Jn);
var ua = Jn.exports;
const Qn = /* @__PURE__ */ ze(ua);
var eo = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
      upload: function(n, a, c, d, o) {
        this.showLoading();
        const h = this.plugins.fileManager, u = h._xmlHttp = this.util.getXMLHttpRequest();
        if (u.onreadystatechange = h._callBackUpload.bind(this, u, d, o), u.open("post", n, !0), a !== null && typeof a == "object" && this._w.Object.keys(a).length > 0)
          for (let b in a)
            u.setRequestHeader(b, a[b]);
        u.send(c);
      },
      _callBackUpload: function(n, a, c) {
        if (n.readyState === 4)
          if (n.status === 200)
            try {
              a(n);
            } catch (d) {
              throw Error('[SUNEDITOR.fileManager.upload.callBack.fail] cause : "' + d.message + '"');
            } finally {
              this.closeLoading();
            }
          else {
            this.closeLoading();
            const d = n.responseText ? JSON.parse(n.responseText) : n;
            if (typeof c != "function" || c("", d, this)) {
              const o = "[SUNEDITOR.fileManager.upload.serverException] status: " + n.status + ", response: " + (d.errorMessage || n.responseText);
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
      checkInfo: function(n, a, c, d, o) {
        let h = [];
        for (let r = 0, f = a.length; r < f; r++)
          h = h.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(a[r] + ':not([data-se-embed="true"])')));
        const u = this.plugins.fileManager, b = this.context[n], y = b._infoList, k = u.setInfo.bind(this);
        if (h.length === y.length)
          if (this._componentsInfoReset) {
            for (let r = 0, f = h.length; r < f; r++)
              k(n, h[r], c, null, o);
            return;
          } else {
            let r = !1;
            for (let f = 0, p = y.length, g; f < p; f++)
              if (g = y[f], h.filter(function(v) {
                return g.src === v.src && g.index.toString() === v.getAttribute("data-index");
              }).length === 0) {
                r = !0;
                break;
              }
            if (!r) return;
          }
        const x = o ? this.context.resizing._resize_plugin : "";
        o && (this.context.resizing._resize_plugin = n);
        const N = [], s = [];
        for (let r = 0, f = y.length; r < f; r++)
          s[r] = y[r].index;
        for (b.__updateTags = h; h.length > 0; ) {
          const r = h.shift();
          !this.util.getParentElement(r, this.util.isMediaComponent) || !u._checkMediaComponent(r) ? (N.push(b._infoIndex), d(r)) : !r.getAttribute("data-index") || s.indexOf(r.getAttribute("data-index") * 1) < 0 ? (N.push(b._infoIndex), r.removeAttribute("data-index"), k(n, r, c, null, o)) : N.push(r.getAttribute("data-index") * 1);
        }
        for (let r = 0, f; r < y.length; r++)
          f = y[r].index, !(N.indexOf(f) > -1) && (y.splice(r, 1), typeof c == "function" && c(null, f, "delete", null, 0, this), r--);
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
      setInfo: function(n, a, c, d, o) {
        const h = o ? this.context.resizing._resize_plugin : "";
        o && (this.context.resizing._resize_plugin = n);
        const u = this.plugins[n], b = this.context[n], y = b._infoList;
        let k = a.getAttribute("data-index"), x = null, N = "";
        if (d || (d = {
          name: a.getAttribute("data-file-name") || (typeof a.src == "string" ? a.src.split("/").pop() : ""),
          size: a.getAttribute("data-file-size") || 0
        }), !k || this._componentsInfoInit)
          N = "create", k = b._infoIndex++, a.setAttribute("data-index", k), a.setAttribute("data-file-name", d.name), a.setAttribute("data-file-size", d.size), x = {
            src: a.src,
            index: k * 1,
            name: d.name,
            size: d.size
          }, y.push(x);
        else {
          N = "update", k *= 1;
          for (let s = 0, r = y.length; s < r; s++)
            if (k === y[s].index) {
              x = y[s];
              break;
            }
          x || (k = b._infoIndex++, x = { index: k }, y.push(x)), x.src = a.src, x.name = a.getAttribute("data-file-name"), x.size = a.getAttribute("data-file-size") * 1;
        }
        if (x.element = a, x.delete = u.destroy.bind(this, a), x.select = (function(s) {
          s.scrollIntoView(!0), this._w.setTimeout(u.select.bind(this, s));
        }).bind(this, a), o) {
          if (!a.getAttribute("origin-size") && a.naturalWidth && a.setAttribute("origin-size", a.naturalWidth + "," + a.naturalHeight), !a.getAttribute("data-origin")) {
            const s = this.util.getParentElement(a, this.util.isMediaComponent), r = this.util.getParentElement(a, "FIGURE"), f = this.plugins.resizing._module_getSizeX.call(this, b, a, r, s), p = this.plugins.resizing._module_getSizeY.call(this, b, a, r, s);
            a.setAttribute("data-origin", f + "," + p), a.setAttribute("data-size", f + "," + p);
          }
          if (!a.style.width) {
            const s = (a.getAttribute("data-size") || a.getAttribute("data-origin") || "").split(",");
            u.onModifyMode.call(this, a, null), u.applySize.call(this, s[0], s[1]);
          }
          this.context.resizing._resize_plugin = h;
        }
        typeof c == "function" && c(a, k, N, x, --b._uploadFileLength < 0 ? 0 : b._uploadFileLength, this);
      },
      /**
       * @description Delete info object at "_infoList"
       * @param {String} pluginName Plugin name 
       * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
       * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
       */
      deleteInfo: function(n, a, c) {
        if (a >= 0) {
          const d = this.context[n]._infoList;
          for (let o = 0, h = d.length; o < h; o++)
            if (a === d[o].index) {
              d.splice(o, 1), typeof c == "function" && c(null, a, "delete", null, 0, this);
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
        const c = this.context[n];
        if (typeof a == "function") {
          const d = c._infoList;
          for (let o = 0, h = d.length; o < h; o++)
            a(null, d[o].index, "delete", null, 0, this);
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
      value: l
    })), l;
  });
})(eo);
var ca = eo.exports;
const dl = /* @__PURE__ */ ze(ca), da = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([oi, Kn, cl, Qn, dl]);
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
      const a = t.imageSizeOnlyPercentage, c = a ? ' style="display: none !important;"' : "", d = t.imageHeightShow ? "" : ' style="display: none !important;"';
      n += '<div class="se-dialog-form">', a || !t.imageHeightShow ? n += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.size + "</label></div>" : n += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + i.dialogBox.height + "</label></div>", n += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (a ? ' type="number" min="1"' : 'type="text"') + (a ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + d + ">" + (a ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + c + (a ? ' max="100"' : "") + d + "/><label" + c + d + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + '</label><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
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
    this.util.removeItem(i), this.plugins.image.init.call(this), this.controllersOff(), a !== this.context.element.wysiwyg && this.util.removeItemAllParents(a, function(c) {
      return c.childNodes.length === 0;
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
    let a, c, d;
    for (c = t.getElementsByClassName(n), a = 0; a < c.length; a++)
      c[a].style.display = "none";
    for (d = t.getElementsByClassName("_se_tab_link"), a = 0; a < d.length; a++)
      this.util.removeClass(d[a], "active");
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
    for (let d = 0, o = e.length; d < o; d++)
      /image/i.test(e[d].type) && (i.push(e[d]), t += e[d].size);
    const l = this.options.imageUploadSizeLimit;
    if (l > 0) {
      let d = 0;
      const o = this.context.image._infoList;
      for (let h = 0, u = o.length; h < u; h++)
        d += o[h].size * 1;
      if (t + d > l) {
        this.closeLoading();
        const h = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + l / 1e3 + "KB";
        (typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(h, { limitSize: l, currentSize: d, uploadSize: t }, this)) && this.functions.noticeOpen(h);
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
      const d = this.functions.onImageUploadBefore(i, c, this, (function(o) {
        o && this._w.Array.isArray(o.result) ? this.plugins.image.register.call(this, c, o) : this.plugins.image.upload.call(this, c, o);
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
  setup_reader: function(e, t, i, l, n, a, c, d) {
    try {
      if (c === 0) {
        this.closeLoading(), console.warn("[SUNEDITOR.image.base64.fail] cause : No applicable files");
        return;
      }
      this.context.image.base64RenderIndex = c;
      const o = this._w.FileReader, h = [c];
      this.context.image.inputX.value = i, this.context.image.inputY.value = l;
      for (let u = 0, b, y; u < c; u++)
        b = new o(), y = e[u], b.onload = (function(k, x, N, s, r) {
          h[r] = { result: k.result, file: s }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, x, h, N, t, i, l, n, a), this.closeLoading());
        }).bind(this, b, d, this.context.image._element, y, u), b.readAsDataURL(y);
    } catch (o) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + o.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, i, l, n, a, c, d) {
    const o = this.plugins.image.update_src, h = this.plugins.image.create_image;
    for (let u = 0, b = t.length; u < b; u++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[u].file.name), this.context.image._element.setAttribute("data-file-size", t[u].file.size), o.call(this, t[u].result, i, t[u].file)) : h.call(this, t[u].result, l, n, a, c, t[u].file, d);
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
  create_image: function(e, t, i, l, n, a, c) {
    const d = this.plugins.image, o = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let h = this.util.createElement("IMG");
    h.src = e, h.alt = c, h.setAttribute("data-rotate", "0"), t = d.onRender_link.call(this, h, t ? t.cloneNode(!1) : null), o._resizing && h.setAttribute("data-proportion", o._proportionChecked);
    const u = this.plugins.component.set_cover.call(this, t), b = this.plugins.component.set_container.call(this, u, "se-image-container");
    o._captionChecked && (o._caption = this.plugins.component.create_caption.call(this), u.appendChild(o._caption)), o._element = h, o._cover = u, o._container = b, d.applySize.call(this, i, l), d.setAlign.call(this, n, h, u, b), h.onload = d._image_create_onload.bind(this, h, o.svgDefaultSize, b), this.insertComponent(b, !0, !0, !0) && this.plugins.fileManager.setInfo.call(this, "image", h, this.functions.onImageUpload, a, !0), this.context.resizing._resize_plugin = "";
  },
  _image_create_onload: function(e, t, i) {
    if (e.offsetWidth === 0 && this.plugins.image.applySize.call(this, t, ""), this.options.mediaAutoSelect)
      this.selectComponent(e, "image");
    else {
      const l = this.appendFormatTag(i, null);
      l && this.setRange(l, 0, l, 0);
    }
  },
  update_image: function(e, t, i) {
    const l = this.context.image;
    let n = l._element, a = l._cover, c = l._container, d = !1;
    a === null && (d = !0, n = l._element.cloneNode(!0), a = this.plugins.component.set_cover.call(this, n)), c === null ? (a = a.cloneNode(!0), n = a.querySelector("img"), d = !0, c = this.plugins.component.set_container.call(this, a, "se-image-container")) : d && (c.innerHTML = "", c.appendChild(a), l._cover = a, l._element = n, d = !1);
    let o;
    const h = this.util.isNumber(l.inputX.value) ? l.inputX.value + l.sizeUnit : l.inputX.value, u = this.util.isNumber(l.inputY.value) ? l.inputY.value + l.sizeUnit : l.inputY.value;
    /%$/.test(n.style.width) ? o = h !== c.style.width || u !== c.style.height : o = h !== n.style.width || u !== n.style.height, n.alt = l._altText;
    let b = !1;
    l._captionChecked ? l._caption || (l._caption = this.plugins.component.create_caption.call(this), a.appendChild(l._caption), b = !0) : l._caption && (this.util.removeItem(l._caption), l._caption = null, b = !0);
    let y = null;
    const k = this.plugins.anchor.createAnchor.call(this, l.anchorCtx, !0);
    if (k)
      l._linkElement !== k || d && !c.contains(k) ? (l._linkElement = k.cloneNode(!1), a.insertBefore(this.plugins.image.onRender_link.call(this, n, l._linkElement), l._caption), y = l._element) : l._linkElement.setAttribute("data-image-link", "image");
    else if (l._linkElement !== null) {
      const N = n;
      if (N.setAttribute("data-image-link", ""), a.contains(l._linkElement)) {
        const s = N.cloneNode(!0);
        a.removeChild(l._linkElement), a.insertBefore(s, l._caption), l._element = n = s;
      }
    }
    let x = null;
    if (d) {
      if (x = this.util.isRangeFormatElement(l._element.parentNode) || this.util.isWysiwygDiv(l._element.parentNode) ? l._element : this.util.isAnchor(l._element.parentNode) ? l._element.parentNode : this.util.getFormatElement(l._element) || l._element, this.util.getParentElement(l._element, this.util.isNotCheckingNode))
        x = y ? k : l._element, x.parentNode.replaceChild(c, x);
      else if (this.util.isListCell(x)) {
        const N = this.util.getParentElement(l._element, function(s) {
          return s.parentNode === x;
        });
        x.insertBefore(c, N), this.util.removeItem(l._element), this.util.removeEmptyNode(N, null, !0);
      } else if (this.util.isFormatElement(x)) {
        const N = this.util.getParentElement(l._element, function(s) {
          return s.parentNode === x;
        });
        x = this.util.splitElement(x, N), x.parentNode.insertBefore(c, x), this.util.removeItem(l._element), this.util.removeEmptyNode(x, null, !0), x.children.length === 0 && (x.innerHTML = this.util.htmlRemoveWhiteSpace(x.innerHTML));
      } else if (this.util.isFormatElement(x.parentNode)) {
        const N = x.parentNode;
        N.parentNode.insertBefore(c, x.previousSibling ? N.nextElementSibling : N), l.__updateTags.map(function(s) {
          return x.contains(s);
        }).length === 0 && this.util.removeItem(x);
      } else
        x = this.util.isFigures(x.parentNode) ? x.parentNode : x, x.parentNode.replaceChild(c, x);
      n = c.querySelector("img"), l._element = n, l._cover = a, l._container = c;
    }
    y && (d ? (this.util.removeItem(y), this.util.getListChildren(k, function(N) {
      return /IMG/i.test(N.tagName);
    }).length === 0 && this.util.removeItem(k)) : this.util.removeItem(k)), (b || !l._onlyPercentage && o) && !e && (/\d+/.test(n.style.height) || this.context.resizing._rotateVertical && l._captionChecked) && (/%$/.test(l.inputX.value) || /%$/.test(l.inputY.value) ? this.plugins.resizing.resetTransform.call(this, n) : this.plugins.resizing.setTransformSize.call(this, n, this.util.getNumber(l.inputX.value, 0), this.util.getNumber(l.inputY.value, 0))), l._resizing && (n.setAttribute("data-proportion", l._proportionChecked), o && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, n, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", n, this.functions.onImageUpload, null, !0), t && this.selectComponent(n, "image"), i || this.history.push(!1);
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
}, fa = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([oi, cl, Qn, dl]);
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
      const a = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], c = t.videoRatio, d = t.videoSizeOnlyPercentage, o = d ? ' style="display: none !important;"' : "", h = t.videoHeightShow ? "" : ' style="display: none !important;"', u = t.videoRatioShow ? "" : ' style="display: none !important;"', b = !d && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      n += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + h + ">" + i.dialogBox.height + '</label><label class="size-h"' + u + ">(" + i.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (d ? ' type="number" min="1"' : 'type="text"') + (d ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + b + ">" + (d ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (d ? ' type="number" min="1"' : 'type="text"') + (d ? ' max="100"' : "") + h + '/><select class="se-input-select se-video-ratio" title="' + i.dialogBox.ratio + '" aria-label="' + i.dialogBox.ratio + '"' + u + ">", h || (n += '<option value=""> - </option>');
      for (let y = 0, k = a.length; y < k; y++)
        n += '<option value="' + a[y].value + '"' + (c.toString() === a[y].value.toString() ? " selected" : "") + ">" + a[y].name + "</option>";
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
    this.util.removeItem(i), this.plugins.video.init.call(this), this.controllersOff(), a !== this.context.element.wysiwyg && this.util.removeItemAllParents(a, function(c) {
      return c.childNodes.length === 0;
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
    for (let c = 0, d = e.length; c < d; c++)
      /video/i.test(e[c].type) && (i.push(e[c]), t += e[c].size);
    const l = this.options.videoUploadSizeLimit;
    if (l > 0) {
      let c = 0;
      const d = this.context.video._infoList;
      for (let o = 0, h = d.length; o < h; o++)
        c += d[o].size * 1;
      if (t + c > l) {
        this.closeLoading();
        const o = "[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: " + l / 1e3 + "KB";
        (typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(o, { limitSize: l, currentSize: c, uploadSize: t }, this)) && this.functions.noticeOpen(o);
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
      const c = this.functions.onVideoUploadBefore(i, a, this, (function(d) {
        d && this._w.Array.isArray(d.result) ? this.plugins.video.register.call(this, a, d) : this.plugins.video.upload.call(this, a, d);
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
    for (let n = 0, a = i.length, c; n < a; n++)
      c = { name: i[n].name, size: i[n].size }, this.plugins.video.create_video.call(this, e.isUpdate ? e.element : l.cloneNode(!1), i[n].url, e.inputWidth, e.inputHeight, e.align, c, e.isUpdate);
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
  create_video: function(e, t, i, l, n, a, c) {
    this.context.resizing._resize_plugin = "video";
    const d = this.context.video;
    let o = null, h = null, u = !1;
    if (c) {
      if (e = d._element, e.src !== t) {
        u = !0;
        const N = /youtu\.?be/.test(t), s = /vimeo\.com/.test(t);
        if ((N || s) && !/^iframe$/i.test(e.nodeName)) {
          const r = this.plugins.video.createIframeTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), d._element = e = r;
        } else if (!N && !s && !/^video$/i.test(e.nodeName)) {
          const r = this.plugins.video.createVideoTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), d._element = e = r;
        } else
          e.src = t;
      }
      h = d._container, o = this.util.getParentElement(e, "FIGURE");
    } else
      u = !0, e.src = t, d._element = e, o = this.plugins.component.set_cover.call(this, e), h = this.plugins.component.set_container.call(this, o, "se-video-container");
    d._cover = o, d._container = h;
    const b = this.plugins.resizing._module_getSizeX.call(this, d) !== (i || d._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, d) !== (l || d._videoRatio), y = !c || b;
    d._resizing && (this.context.video._proportionChecked = d.proportion.checked, e.setAttribute("data-proportion", d._proportionChecked));
    let k = !1;
    y && (k = this.plugins.video.applySize.call(this)), k && n === "center" || this.plugins.video.setAlign.call(this, null, e, o, h);
    let x = !0;
    if (c)
      d._resizing && this.context.resizing._rotateVertical && y && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (x = this.insertComponent(h, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const N = this.appendFormatTag(h, null);
      N && this.setRange(N, 0, N, 0);
    }
    x && (u && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, a, !0), c && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
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
      const c = i.querySelector("figcaption");
      let d = null;
      c && (d = this.util.createElement("DIV"), d.innerHTML = c.innerHTML, this.util.removeItem(c));
      const o = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, o[0] || l.style.width || l.width || "", o[1] || l.style.height || l.height || "");
      const h = this.util.getFormatElement(l);
      if (h && (t._align = h.style.textAlign || h.style.float), this.plugins.video.setAlign.call(this, null, e, n, a), this.util.getParentElement(l, this.util.isNotCheckingNode))
        l.parentNode.replaceChild(a, l);
      else if (this.util.isListCell(i)) {
        const u = this.util.getParentElement(l, function(b) {
          return b.parentNode === i;
        });
        i.insertBefore(a, u), this.util.removeItem(l), this.util.removeEmptyNode(u, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const u = this.util.getParentElement(l, function(b) {
          return b.parentNode === i;
        });
        i = this.util.splitElement(i, u), i.parentNode.insertBefore(a, i), this.util.removeItem(l), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(a, i);
      d && i.parentNode.insertBefore(d, a.nextElementSibling);
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
    const n = this.context.video, a = /^(rw|lw)$/.test(l), c = /^(th|bh)$/.test(l);
    c || (e = this.util.getNumber(e, 0)), a || (t = this.util.isNumber(t) ? t + n.sizeUnit : t || ""), e = e ? e + n.sizeUnit : "", c || (n._element.style.width = e), a || (n._cover.style.paddingBottom = n._cover.style.height = t), !c && !/%$/.test(e) && (n._cover.style.width = e, n._container.style.width = ""), !a && !/%$/.test(t) ? n._element.style.height = t : n._element.style.height = "", i || n._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, n);
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
}, ha = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([oi, cl, dl]);
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
    for (let c = 0, d = e.length; c < d; c++)
      /audio/i.test(e[c].type) && (i.push(e[c]), t += e[c].size);
    const l = this.options.audioUploadSizeLimit;
    if (l > 0) {
      let c = 0;
      const d = this.context.audio._infoList;
      for (let o = 0, h = d.length; o < h; o++)
        c += d[o].size * 1;
      if (t + c > l) {
        this.closeLoading();
        const o = "[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: " + l / 1e3 + "KB";
        (typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(o, { limitSize: l, currentSize: c, uploadSize: t }, this)) && this.functions.noticeOpen(o);
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
      const c = this.functions.onAudioUploadBefore(i, a, this, (function(d) {
        d && this._w.Array.isArray(d.result) ? this.plugins.audio.register.call(this, a, d) : this.plugins.audio.upload.call(this, a, d);
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
    for (let l = 0, n = i.length, a, c; l < n; l++)
      e.isUpdate ? c = e.element : c = this.plugins.audio._createAudioTag.call(this), a = { name: i[l].name, size: i[l].size }, this.plugins.audio.create_audio.call(this, c, i[l].url, a, e.isUpdate);
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
      const a = this.plugins.component.set_cover.call(this, e), c = this.plugins.component.set_container.call(this, a, "");
      if (!this.insertComponent(c, !1, !0, !this.options.mediaAutoSelect)) {
        this.focus();
        return;
      }
      if (!this.options.mediaAutoSelect) {
        const d = this.appendFormatTag(c, null);
        d && this.setRange(d, 0, d, 0);
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
        const c = this.util.getParentElement(l, function(d) {
          return d.parentNode === i;
        });
        i.insertBefore(a, c), this.util.removeItem(l), this.util.removeEmptyNode(c, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const c = this.util.getParentElement(l, function(d) {
          return d.parentNode === i;
        });
        i = this.util.splitElement(i, c), i.parentNode.insertBefore(a, i), this.util.removeItem(l), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
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
}, Pl = "https://katex.org/docs/supported.html", pa = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([oi]);
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
    let a = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + Pl + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let c = 0, d = l.length, o; c < d; c++)
      o = l[c], o.default && (n = o.value), a += '<option value="' + o.value + '"' + (o.default ? " selected" : "") + ">" + o.text + "</option>";
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
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + Pl + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", i);
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
          const d = this.util.createElement(a[0].nodeName);
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
var to = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(l) {
      if (!l.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(l);
    };
  })(typeof window < "u" ? window : Be, function(t, i) {
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
        let c = n.util.createElement("DIV");
        c.className = "se-file-browser sun-editor-common";
        let d = n.util.createElement("DIV");
        d.className = "se-file-browser-back";
        let o = n.util.createElement("DIV");
        o.className = "se-file-browser-inner", o.innerHTML = this.set_browser(n), c.appendChild(d), c.appendChild(o), this._loading = c.querySelector(".se-loading-box"), a.fileBrowser.area = c, a.fileBrowser.header = o.querySelector(".se-file-browser-header"), a.fileBrowser.titleArea = o.querySelector(".se-file-browser-title"), a.fileBrowser.tagArea = o.querySelector(".se-file-browser-tags"), a.fileBrowser.body = o.querySelector(".se-file-browser-body"), a.fileBrowser.list = o.querySelector(".se-file-browser-list"), a.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(n)), a.fileBrowser.list.addEventListener("click", this.onClickFile.bind(n)), o.addEventListener("mousedown", this._onMouseDown_browser.bind(n)), o.addEventListener("click", this._onClick_browser.bind(n)), a.element.relative.appendChild(c), c = null, d = null, o = null;
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
        this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = (function(h) {
          /27/.test(h.keyCode) && this.plugins.fileBrowser.close.call(this);
        }).bind(this), this._d.addEventListener("keydown", this.plugins.fileBrowser._bindClose);
        const c = this.context.fileBrowser;
        c.contextPlugin = n, c.selectorHandler = a;
        const d = this.context[n], o = d.listClass;
        this.util.hasClass(c.list, o) || (c.list.className = "se-file-browser-list " + o), this.options.popupDisplay === "full" ? c.area.style.position = "fixed" : c.area.style.position = "absolute", c.titleArea.textContent = d.title, c.area.style.display = "block", this.plugins.fileBrowser._drawFileList.call(this, this.context[n].url, this.context[n].header);
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
        const c = this.plugins.fileBrowser, d = c._xmlHttp = this.util.getXMLHttpRequest();
        if (d.onreadystatechange = c._callBackGet.bind(this, d), d.open("get", n, !0), a !== null && typeof a == "object" && this._w.Object.keys(a).length > 0)
          for (let o in a)
            d.setRequestHeader(o, a[o]);
        d.send(null), this.plugins.fileBrowser.showBrowserLoading();
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
            const a = n.responseText ? JSON.parse(n.responseText) : n, c = "[SUNEDITOR.fileBrowser.get.serverException] status: " + n.status + ", response: " + (a.errorMessage || n.responseText);
            throw Error(c);
          }
        }
      },
      _drawListItem: function(n, a) {
        const c = this.context.fileBrowser, d = this.context[c.contextPlugin], o = [], h = n.length, u = d.columnSize || c.columnSize, b = u <= 1 ? 1 : Math.round(h / u) || 1, y = d.itemTemplateHandler;
        let k = "", x = '<div class="se-file-item-column">', N = 1;
        for (let s = 0, r, f; s < h; s++)
          if (r = n[s], f = r.tag ? typeof r.tag == "string" ? r.tag.split(",") : r.tag : [], f = r.tag = f.map(function(p) {
            return p.trim();
          }), x += y(r), (s + 1) % b === 0 && N < u && s + 1 < h && (N++, x += '</div><div class="se-file-item-column">'), a && f.length > 0)
            for (let p = 0, g = f.length, v; p < g; p++)
              v = f[p], v && o.indexOf(v) === -1 && (o.push(v), k += '<a title="' + v + '" aria-label="' + v + '">' + v + "</a>");
        x += "</div>", c.list.innerHTML = x, a && (c.items = n, c.tagArea.innerHTML = k, c.tagElements = c.tagArea.querySelectorAll("A"));
      },
      onClickTag: function(n) {
        const a = n.target;
        if (!this.util.isAnchor(a)) return;
        const c = a.textContent, d = this.plugins.fileBrowser, o = this.context.fileBrowser, h = o.tagArea.querySelector('a[title="' + c + '"]'), u = o.selectedTags, b = u.indexOf(c);
        b > -1 ? (u.splice(b, 1), this.util.removeClass(h, "on")) : (u.push(c), this.util.addClass(h, "on")), d._drawListItem.call(
          this,
          u.length === 0 ? o.items : o.items.filter(function(y) {
            return y.tag.some(function(k) {
              return u.indexOf(k) > -1;
            });
          }),
          !1
        );
      },
      onClickFile: function(n) {
        n.preventDefault(), n.stopPropagation();
        const a = this.context.fileBrowser, c = a.list;
        let d = n.target, o = null;
        if (d === c) return;
        for (; c !== d.parentNode && (o = d.getAttribute("data-command"), !o); )
          d = d.parentNode;
        if (!o) return;
        (a.selectorHandler || this.context[a.contextPlugin].selectorHandler)(d, d.parentNode.querySelector(".__se__img_name").textContent), this.plugins.fileBrowser.close.call(this);
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
})(to);
var ma = to.exports;
const ga = /* @__PURE__ */ ze(ma), va = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([ga]);
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
}, ba = { blockquote: $s, align: qs, font: js, fontSize: Gs, fontColor: Ys, hiliteColor: Ks, horizontalRule: Xs, list: Js, table: Qs, formatBlock: ea, lineHeight: ta, template: ia, paragraphStyle: la, textStyle: na, link: aa, image: da, video: fa, audio: ha, math: pa, imageGallery: va }, ya = {
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
}, Ul = {
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
    const l = [], n = t === "js" ? "script" : "link", a = t === "js" ? "src" : "href";
    let c = "(?:";
    for (let h = 0, u = e.length; h < u; h++)
      c += e[h] + (h < u - 1 ? "|" : ")");
    const d = new this._w.RegExp("(^|.*[\\/])" + c + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), o = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
    for (let h = this._d.getElementsByTagName(n), u = 0; u < h.length; u++)
      o.test(h[u][a]) && l.push(h[u]);
    for (let h = 0; h < l.length; h++) {
      let u = l[h][a].match(d);
      if (u) {
        i = u[0];
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
        for (let c = 0, d = a.length; c < d; c++)
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
      for (let a = 0, c = n.length; a < c; a++)
        e.style[n[a]] = n[n[a]];
    }
    const l = t.attributes;
    for (let n = 0, a = l.length, c; n < a; n++)
      c = l[n].name.toLowerCase(), i && i.indexOf(c) > -1 || !l[n].value ? e.removeAttribute(c) : c !== "style" && e.setAttribute(l[n].name, l[n].value);
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
    for (let n = 0, a = e.length, c; n < a; n++)
      if (c = e[n], t(c))
        if (i) l.push(c);
        else return c;
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
          let c = null, d = null;
          i.s = i.e = 0;
          let o = a.previousSibling;
          for (; o && o.nodeType === 3; )
            d = o.textContent.replace(this.zeroWidthRegExp, ""), i.s += d.length, a.textContent = d + a.textContent, c = o, o = o.previousSibling, this.removeItem(c);
          let h = a.nextSibling;
          for (; h && h.nodeType === 3; )
            d = h.textContent.replace(this.zeroWidthRegExp, ""), i.e += d.length, a.textContent += d, c = h, h = h.nextSibling, this.removeItem(c);
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
    for (let h = 0, u = i.length; h < u; h++)
      i[i[h]] === l[i[h]] && n++;
    const a = e.classList, c = t.classList, d = this._w.RegExp;
    let o = 0;
    for (let h = 0, u = a.length; h < u; h++)
      d("(s|^)" + a[h] + "(s|$)").test(c.value) && o++;
    return n === l.length && n === i.length && o === c.length && o === a.length;
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
        for (let a = 0, c = n.children.length; a < c; a++)
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
      for (let a = 0, c = n.childNodes.length; a < c; a++)
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
    const n = i.parentNode.childNodes, a = this.getArrayIndex(n, i), c = this.getArrayIndex(n, l);
    return {
      ancestor: i.parentNode,
      a: i,
      b: l,
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
      const c = new this._w.RegExp(t, "i");
      l = function(d) {
        return c.test(d[a]);
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
    const c = t && /iframe/i.test(t.nodeName);
    return {
      left: i + (c ? t.parentElement.offsetLeft : 0),
      top: l - (a ? a.scrollTop : 0) + (c ? t.parentElement.offsetTop : 0)
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
      if (!re.isWysiwygDiv(a)) {
        const c = a.parentNode;
        c && t(a) && (l = {
          sc: a.previousElementSibling,
          ec: a.nextElementSibling
        }, re.removeItem(a), n(c));
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
      const c = this.getPositionIndex(e);
      for (; n[c]; )
        l.appendChild(n[c]);
    } else
      l = e;
    let a;
    if (t)
      a = this.getListChildren(l, (function(c) {
        return this.isListCell(c) && !c.previousElementSibling;
      }).bind(this));
    else {
      const c = this.getElementDepth(e) + 2;
      a = this.getListChildren(e, (function(d) {
        return this.isListCell(d) && !d.previousElementSibling && this.getElementDepth(d) === c;
      }).bind(this));
    }
    for (let c = 0, d = a.length; c < d; c++)
      this._deleteNestedList(a[c]);
    return i && (i.parentNode.insertBefore(l, i.nextSibling), n && n.length === 0 && this.removeItem(i)), l === e ? l.parentNode : l;
  },
  /**
   * @description Sub function of util.detachNestedList method.
   * @private
   */
  _deleteNestedList: function(e) {
    const t = e.parentNode;
    let i = t, l = i.parentNode, n, a, c, d, o;
    for (; this.isListCell(l); ) {
      for (d = this.getPositionIndex(e), n = l.nextElementSibling, a = l.parentNode, c = i; c; ) {
        if (i = i.nextSibling, this.isList(c)) {
          for (o = c.childNodes; o[d]; )
            a.insertBefore(o[d], n);
          o.length === 0 && this.removeItem(c);
        } else
          a.appendChild(c);
        c = i;
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
      const y = e.childNodes;
      let k = this.getPositionIndex(t);
      const x = e.cloneNode(!1), N = e.cloneNode(!1);
      for (let s = 0, r = y.length; s < r; s++) {
        if (s < k) x.appendChild(y[s]);
        else if (s > k) N.appendChild(y[s]);
        else continue;
        s--, r--, k--;
      }
      return x.childNodes.length > 0 && e.parentNode.insertBefore(x, e), N.childNodes.length > 0 && e.parentNode.insertBefore(N, e.nextElementSibling), e;
    }
    const l = e.parentNode;
    let n = 0, a = 1, c = !0, d, o, h;
    if ((!i || i < 0) && (i = 0), e.nodeType === 3) {
      if (n = this.getPositionIndex(e), t >= 0 && e.length !== t) {
        e.splitText(t);
        const y = this.getNodeFromPath([n + 1], l);
        this.onlyZeroWidthSpace(y) && (y.data = this.zeroWidthSpace);
      }
    } else if (e.nodeType === 1) {
      if (t === 0) {
        for (; e.firstChild; )
          e = e.firstChild;
        if (e.nodeType === 3) {
          const y = this.createTextNode(this.zeroWidthSpace);
          e.parentNode.insertBefore(y, e), e = y;
        }
      }
      e.previousSibling ? e = e.previousSibling : this.getElementDepth(e) === i && (c = !1);
    }
    e.nodeType === 1 && (a = 0);
    let u = e;
    for (; this.getElementDepth(u) > i; )
      for (n = this.getPositionIndex(u) + a, u = u.parentNode, h = d, d = u.cloneNode(!1), o = u.childNodes, h && (this.isListCell(d) && this.isList(h) && h.firstElementChild ? (d.innerHTML = h.firstElementChild.innerHTML, re.removeItem(h.firstElementChild), h.children.length > 0 && d.appendChild(h)) : d.appendChild(h)); o[n]; )
        d.appendChild(o[n]);
    u.childNodes.length <= 1 && (!u.firstChild || u.firstChild.textContent.length === 0) && (u.innerHTML = "<br>");
    const b = u.parentNode;
    return c && (u = u.nextSibling), d ? (this.mergeSameTags(d, null, !1), this.mergeNestedTags(d, (function(y) {
      return this.isList(y);
    }).bind(this)), d.childNodes.length > 0 ? b.insertBefore(d, u) : d = u, this.isListCell(d) && d.children && this.isList(d.children[0]) && d.insertBefore(this.createElement("BR"), d.children[0]), l.childNodes.length === 0 && this.removeItem(l), d) : u;
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
    return n && (a = this._w.Array.apply(null, new this._w.Array(n)).map(this._w.Number.prototype.valueOf, 0)), function c(d, o, h) {
      const u = d.childNodes;
      for (let b = 0, y = u.length, k, x; b < y && (k = u[b], x = u[b + 1], !!k); b++) {
        if (i && l._isIgnoreNodeChange(k) || !i && (l.isTable(k) || l.isListCell(k) || l.isFormatElement(k) && !l.isFreeFormatElement(k))) {
          (l.isTable(k) || l.isListCell(k)) && c(k, o + 1, b);
          continue;
        }
        if (y === 1 && d.nodeName === k.nodeName && d.parentNode) {
          if (n) {
            let N, s, r, f, p;
            for (let g = 0; g < n; g++)
              if (N = t[g], N && N[o] === b) {
                for (s = k, r = d, f = o, p = !0; f >= 0; ) {
                  if (l.getArrayIndex(r.childNodes, s) !== N[f]) {
                    p = !1;
                    break;
                  }
                  s = k.parentNode, r = s.parentNode, f--;
                }
                p && (N.splice(o, 1), N[o] = b);
              }
          }
          l.copyTagAttributes(k, d), d.parentNode.insertBefore(k, d), l.removeItem(d);
        }
        if (!x) {
          k.nodeType === 1 && c(k, o + 1, b);
          break;
        }
        if (k.nodeName === x.nodeName && l.isSameAttributes(k, x) && k.href === x.href) {
          const N = k.childNodes;
          let s = 0;
          for (let g = 0, v = N.length; g < v; g++)
            N[g].textContent.length > 0 && s++;
          const r = k.lastChild, f = x.firstChild;
          let p = 0;
          if (r && f) {
            const g = r.nodeType === 3 && f.nodeType === 3;
            p = r.textContent.length;
            let v = r.previousSibling;
            for (; v && v.nodeType === 3; )
              p += v.textContent.length, v = v.previousSibling;
            if (s > 0 && r.nodeType === 3 && f.nodeType === 3 && (r.textContent.length > 0 || f.textContent.length > 0) && s--, n) {
              let m = null;
              for (let _ = 0; _ < n; _++)
                if (m = t[_], m && m[o] > b) {
                  if (o > 0 && m[o - 1] !== h) continue;
                  m[o] -= 1, m[o + 1] >= 0 && m[o] === b && (m[o + 1] += s, g && r && r.nodeType === 3 && f && f.nodeType === 3 && (a[_] += p));
                }
            }
          }
          if (k.nodeType === 3) {
            if (p = k.textContent.length, k.textContent += x.textContent, n) {
              let g = null;
              for (let v = 0; v < n; v++)
                if (g = t[v], g && g[o] > b) {
                  if (o > 0 && g[o - 1] !== h) continue;
                  g[o] -= 1, g[o + 1] >= 0 && g[o] === b && (g[o + 1] += s, a[v] += p);
                }
            }
          } else
            k.innerHTML += x.innerHTML;
          l.removeItem(x), b--;
        } else k.nodeType === 1 && c(k, o + 1, b);
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
      for (let a = 0, c = l.children.length; a < c; a++)
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
        const c = a.children;
        for (let d = 0, o = c.length, h = 0; d < o; d++)
          !c[d + h] || l.isComponent(c[d + h]) || (h += n(c[d + h]));
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
   * @private
   */
  _consistencyCheckOfHTML: function(e, t, i, l) {
    const n = [], a = [], c = [], d = [], o = this.getListChildNodes(e, (function(u) {
      if (u.nodeType !== 1)
        return this.isList(u.parentElement) && n.push(u), !1;
      if (i.test(u.nodeName) || !t.test(u.nodeName) && u.childNodes.length === 0 && this.isNotCheckingNode(u))
        return n.push(u), !1;
      const b = !this.getParentElement(u, this.isNotCheckingNode);
      if (!this.isTable(u) && !this.isListCell(u) && !this.isAnchor(u) && (this.isFormatElement(u) || this.isRangeFormatElement(u) || this.isTextStyleElement(u)) && u.childNodes.length === 0 && b)
        return a.push(u), !1;
      if (this.isList(u.parentNode) && !this.isList(u) && !this.isListCell(u))
        return c.push(u), !1;
      if (this.isCell(u)) {
        const k = u.firstElementChild;
        if (!this.isFormatElement(k) && !this.isRangeFormatElement(k) && !this.isComponent(k))
          return d.push(u), !1;
      }
      if (b && u.className) {
        const k = new this._w.Array(u.classList).map(l).join(" ").trim();
        k ? u.className = k : u.removeAttribute("class");
      }
      return u.parentNode !== e && b && (this.isListCell(u) && !this.isList(u.parentNode) || (this.isFormatElement(u) || this.isComponent(u)) && !this.isRangeFormatElement(u.parentNode) && !this.getParentElement(u, this.isComponent));
    }).bind(this));
    for (let u = 0, b = n.length; u < b; u++)
      this.removeItem(n[u]);
    const h = [];
    for (let u = 0, b = o.length, y, k; u < b; u++)
      if (y = o[u], k = y.parentNode, !(!k || !k.parentNode))
        if (this.getParentElement(y, this.isListCell)) {
          const x = y.childNodes;
          for (let N = x.length - 1; b >= 0; N--)
            k.insertBefore(y, x[N]);
          h.push(y);
        } else
          k.parentNode.insertBefore(y, k), h.push(k);
    for (let u = 0, b = h.length, y; u < b; u++)
      y = h[u], this.onlyZeroWidthSpace(y.textContent.trim()) && this.removeItem(y);
    for (let u = 0, b = a.length; u < b; u++)
      this.removeItem(a[u]);
    for (let u = 0, b = c.length, y, k, x, N; u < b; u++)
      if (y = c[u], N = y.parentNode, !!N)
        if (k = this.createElement("LI"), this.isFormatElement(y)) {
          for (x = y.childNodes; x[0]; )
            k.appendChild(x[0]);
          N.insertBefore(k, y), this.removeItem(y);
        } else
          y = y.nextSibling, k.appendChild(c[u]), N.insertBefore(k, y);
    for (let u = 0, b = d.length, y, k; u < b; u++)
      y = d[u], k = this.createElement("DIV"), k.innerHTML = y.textContent.trim().length === 0 && y.children.length === 0 ? "<br>" : y.innerHTML, y.innerHTML = k.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let i = "";
    e.height && (i += "height:" + e.height + ";"), e.minHeight && (i += "min-height:" + e.minHeight + ";"), e.maxHeight && (i += "max-height:" + e.maxHeight + ";"), e.position && (i += "position:" + e.position + ";"), e.width && (i += "width:" + e.width + ";"), e.minWidth && (i += "min-width:" + e.minWidth + ";"), e.maxWidth && (i += "max-width:" + e.maxWidth + ";");
    let l = "", n = "", a = "";
    t = i + t;
    const c = t.split(";");
    for (let d = 0, o = c.length, h; d < o; d++)
      if (h = c[d].trim(), !!h) {
        if (/^(min-|max-)?width\s*:/.test(h) || /^(z-index|position)\s*:/.test(h)) {
          l += h + ";";
          continue;
        }
        if (/^(min-|max-)?height\s*:/.test(h)) {
          /^height/.test(h) && h.split(":")[1].trim() === "auto" && (e.height = "auto"), n += h + ";";
          continue;
        }
        a += h + ";";
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
    for (let n = 0, a = t.length, c; n < a; n++) {
      if (c = [], /(^https?:\/\/)|(^data:text\/css,)/.test(t[n]))
        c.push(t[n]);
      else {
        const d = new i("(^|.*[\\/])" + t[n] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let o = document.getElementsByTagName("link"), h = 0, u = o.length, b; h < u; h++)
          b = o[h].href.match(d), b && c.push(b[0]);
      }
      if (!c || c.length === 0) throw '[SUNEDITOR.constructor.iframe.fail] The suneditor CSS files installation path could not be automatically detected. Please set the option property "iframeCSSFileName" before creating editor instances.';
      for (let d = 0, o = c.length; d < o; d++)
        l += '<link href="' + c[d] + '" rel="stylesheet">';
    }
    return l + (e.height === "auto" ? `<style>
/** Iframe height auto */
body{height: min-content; overflow: hidden;}
</style>` : "");
  }
}, tl = {
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
    const a = this._createToolBar(i, t.buttonList, t.plugins, t), c = a.element.cloneNode(!1);
    c.className += " se-toolbar-shadow", a.element.style.visibility = "hidden", a.pluginCallButtons.math && this._checkKatexMath(t.katex);
    const d = i.createElement("DIV");
    d.className = "se-arrow";
    const o = i.createElement("DIV");
    o.className = "se-toolbar-sticky-dummy";
    const h = i.createElement("DIV");
    h.className = "se-wrapper";
    const u = this._initElements(t, l, a.element, d), b = u.bottomBar, y = u.wysiwygFrame, k = u.placeholder;
    let x = u.codeView;
    const N = b.resizingBar, s = b.navigation, r = b.charWrapper, f = b.charCounter, p = i.createElement("DIV");
    p.className = "se-loading-box sun-editor-common", p.innerHTML = '<div class="se-loading-effect"></div>';
    const g = i.createElement("DIV");
    g.className = "se-line-breaker", g.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
    const v = i.createElement("DIV");
    v.className += "se-line-breaker-component";
    const m = v.cloneNode(!0);
    v.innerHTML = m.innerHTML = t.icons.line_break;
    const _ = i.createElement("DIV");
    _.className = "se-resizing-back";
    const C = i.createElement("INPUT");
    C.tabIndex = -1, C.style.cssText = "position: fixed !important; top: -10000px !important; display: block !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;";
    const w = t.toolbarContainer;
    w && (w.appendChild(a.element), w.appendChild(c));
    const S = t.resizingBarContainer;
    return N && S && S.appendChild(N), h.appendChild(x), k && h.appendChild(k), w || (n.appendChild(a.element), n.appendChild(c)), n.appendChild(o), n.appendChild(h), n.appendChild(_), n.appendChild(p), n.appendChild(g), n.appendChild(v), n.appendChild(m), n.appendChild(C), N && !S && n.appendChild(N), l.appendChild(n), x = this._checkCodeMirror(t, x), {
      constructed: {
        _top: l,
        _relative: n,
        _toolBar: a.element,
        _toolbarShadow: c,
        _menuTray: a._menuTray,
        _editorArea: h,
        _wysiwygArea: y,
        _codeArea: x,
        _placeholder: k,
        _resizingBar: N,
        _navigation: s,
        _charWrapper: r,
        _charCounter: f,
        _loading: p,
        _lineBreaker: g,
        _lineBreaker_t: v,
        _lineBreaker_b: m,
        _resizeBack: _,
        _stickyDummy: o,
        _arrow: d,
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
        for (let c in a)
          re.hasOwn(a, c) && (n[c] = a[c]);
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
        re.hasOwn(l, n) && (i[n] = l[n]);
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
    const l = t.element, n = l.relative, a = l.editorArea, c = e.toolbarContainer && e.toolbarContainer !== i.toolbarContainer, d = e.lang !== i.lang || e.buttonList !== i.buttonList || e.mode !== i.mode || c, o = this._createToolBar(document, d ? e.buttonList : i.buttonList, e.plugins, e);
    o.pluginCallButtons.math && this._checkKatexMath(e.katex);
    const h = document.createElement("DIV");
    h.className = "se-arrow", d && (o.element.style.visibility = "hidden", c ? (e.toolbarContainer.appendChild(o.element), l.toolbar.parentElement.removeChild(l.toolbar)) : l.toolbar.parentElement.replaceChild(o.element, l.toolbar), l.toolbar = o.element, l._menuTray = o._menuTray, l._arrow = h);
    const u = this._initElements(e, l.topArea, d ? o.element : l.toolbar, h), b = u.bottomBar, y = u.wysiwygFrame, k = u.placeholder;
    let x = u.codeView;
    return l.resizingBar && re.removeItem(l.resizingBar), b.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== i.resizingBarContainer ? e.resizingBarContainer.appendChild(b.resizingBar) : n.appendChild(b.resizingBar)), a.innerHTML = "", a.appendChild(x), k && a.appendChild(k), x = this._checkCodeMirror(e, x), l.resizingBar = b.resizingBar, l.navigation = b.navigation, l.charWrapper = b.charWrapper, l.charCounter = b.charCounter, l.wysiwygFrame = y, l.code = x, l.placeholder = k, e.rtl ? re.addClass(l.topArea, "se-rtl") : re.removeClass(l.topArea, "se-rtl"), {
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
    let c = null, d = null, o = null, h = null;
    if (e.resizingBar && (c = document.createElement("DIV"), c.className = "se-resizing-bar sun-editor-common", d = document.createElement("DIV"), d.className = "se-navigation sun-editor-common", c.appendChild(d), e.charCounter)) {
      if (o = document.createElement("DIV"), o.className = "se-char-counter-wrapper", e.charCounterLabel) {
        const b = document.createElement("SPAN");
        b.className = "se-char-label", b.textContent = e.charCounterLabel, o.appendChild(b);
      }
      if (h = document.createElement("SPAN"), h.className = "se-char-counter", h.textContent = "0", o.appendChild(h), e.maxCharCount > 0) {
        const b = document.createElement("SPAN");
        b.textContent = " / " + e.maxCharCount, o.appendChild(b);
      }
      c.appendChild(o);
    }
    let u = null;
    return e.placeholder && (u = document.createElement("SPAN"), u.className = "se-placeholder", u.innerText = e.placeholder), {
      bottomBar: {
        resizingBar: c,
        navigation: d,
        charWrapper: o,
        charCounter: h
      },
      wysiwygFrame: n,
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
      const a = t.plugins, c = a.length ? a : Object.keys(a).map(function(d) {
        return a[d];
      });
      for (let d = 0, o = c.length, h; d < o; d++)
        h = c[d].default || c[d], i[h.name] = h;
    }
    t.plugins = i, t.strictMode = t.strictMode !== !1, t.lang = t.lang || Mi, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new re._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
    const l = t.textTags = [{ bold: "STRONG", underline: "U", italic: "EM", strike: "DEL", sub: "SUB", sup: "SUP" }, t.textTags || {}].reduce(function(a, c) {
      for (let d in c)
        a[d] = c[d];
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
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : n) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? re.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? re.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? re.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
      { text: "1", value: "1em" },
      { text: "1.5", value: "1.5em" },
      { text: "2", value: "2em" },
      { text: "2.5", value: "2.5em" }
    ], t.position = typeof t.position == "string" ? t.position : null, t.display = t.display || (e.style.display === "none" || !e.style.display ? "block" : e.style.display), t.popupDisplay = t.popupDisplay || "full", t.resizingBar = t.resizingBar === void 0 ? !/inline|balloon/i.test(t.mode) : t.resizingBar, t.showPathLabel = t.resizingBar ? typeof t.showPathLabel == "boolean" ? t.showPathLabel : !0 : !1, t.resizeEnable = t.resizeEnable === void 0 ? !0 : !!t.resizeEnable, t.resizingBarContainer = typeof t.resizingBarContainer == "string" ? document.querySelector(t.resizingBarContainer) : t.resizingBarContainer, t.charCounter = t.maxCharCount > 0 ? !0 : typeof t.charCounter == "boolean" ? t.charCounter : !1, t.charCounterType = typeof t.charCounterType == "string" ? t.charCounterType : "char", t.charCounterLabel = typeof t.charCounterLabel == "string" ? t.charCounterLabel.trim() : null, t.maxCharCount = re.isNumber(t.maxCharCount) && t.maxCharCount > -1 ? t.maxCharCount * 1 : null, t.width = t.width ? re.isNumber(t.width) ? t.width + "px" : t.width : e.clientWidth ? e.clientWidth + "px" : "100%", t.minWidth = (re.isNumber(t.minWidth) ? t.minWidth + "px" : t.minWidth) || "", t.maxWidth = (re.isNumber(t.maxWidth) ? t.maxWidth + "px" : t.maxWidth) || "", t.height = t.height ? re.isNumber(t.height) ? t.height + "px" : t.height : e.clientHeight ? e.clientHeight + "px" : "auto", t.minHeight = (re.isNumber(t.minHeight) ? t.minHeight + "px" : t.minHeight) || "", t.maxHeight = (re.isNumber(t.maxHeight) ? t.maxHeight + "px" : t.maxHeight) || "", t.className = typeof t.className == "string" && t.className.length > 0 ? " " + t.className : "", t.defaultStyle = typeof t.defaultStyle == "string" ? t.defaultStyle : "", t.font = t.font ? t.font : ["Arial", "Comic Sans MS", "Courier New", "Impact", "Georgia", "tahoma", "Trebuchet MS", "Verdana"], t.fontSize = t.fontSize ? t.fontSize : null, t.formats = t.formats ? t.formats : null, t.colorList = t.colorList ? t.colorList : null, t.lineHeights = t.lineHeights ? t.lineHeights : null, t.paragraphStyles = t.paragraphStyles ? t.paragraphStyles : null, t.textStyles = t.textStyles ? t.textStyles : null, t.fontSizeUnit = typeof t.fontSizeUnit == "string" && t.fontSizeUnit.trim().toLowerCase() || "px", t.alignItems = typeof t.alignItems == "object" ? t.alignItems : t.rtl ? ["right", "center", "left", "justify"] : ["left", "center", "right", "justify"], t.imageResizing = t.imageResizing === void 0 ? !0 : t.imageResizing, t.imageHeightShow = t.imageHeightShow === void 0 ? !0 : !!t.imageHeightShow, t.imageAlignShow = t.imageAlignShow === void 0 ? !0 : !!t.imageAlignShow, t.imageWidth = t.imageWidth ? re.isNumber(t.imageWidth) ? t.imageWidth + "px" : t.imageWidth : "auto", t.imageHeight = t.imageHeight ? re.isNumber(t.imageHeight) ? t.imageHeight + "px" : t.imageHeight : "auto", t.imageSizeOnlyPercentage = !!t.imageSizeOnlyPercentage, t._imageSizeUnit = t.imageSizeOnlyPercentage ? "%" : "px", t.imageRotation = t.imageRotation !== void 0 ? t.imageRotation : !(t.imageSizeOnlyPercentage || !t.imageHeightShow), t.imageFileInput = t.imageFileInput === void 0 ? !0 : t.imageFileInput, t.imageUrlInput = t.imageUrlInput === void 0 || !t.imageFileInput ? !0 : t.imageUrlInput, t.imageUploadHeader = t.imageUploadHeader || null, t.imageUploadUrl = typeof t.imageUploadUrl == "string" ? t.imageUploadUrl : null, t.imageUploadSizeLimit = /\d+/.test(t.imageUploadSizeLimit) ? re.getNumber(t.imageUploadSizeLimit, 0) : null, t.imageMultipleFile = !!t.imageMultipleFile, t.imageAccept = typeof t.imageAccept != "string" || t.imageAccept.trim() === "*" ? "image/*" : t.imageAccept.trim() || "image/*", t.imageGalleryUrl = typeof t.imageGalleryUrl == "string" ? t.imageGalleryUrl : null, t.imageGalleryHeader = t.imageGalleryHeader || null, t.videoResizing = t.videoResizing === void 0 ? !0 : t.videoResizing, t.videoHeightShow = t.videoHeightShow === void 0 ? !0 : !!t.videoHeightShow, t.videoAlignShow = t.videoAlignShow === void 0 ? !0 : !!t.videoAlignShow, t.videoRatioShow = t.videoRatioShow === void 0 ? !0 : !!t.videoRatioShow, t.videoWidth = !t.videoWidth || !re.getNumber(t.videoWidth, 0) ? "" : re.isNumber(t.videoWidth) ? t.videoWidth + "px" : t.videoWidth, t.videoHeight = !t.videoHeight || !re.getNumber(t.videoHeight, 0) ? "" : re.isNumber(t.videoHeight) ? t.videoHeight + "px" : t.videoHeight, t.videoSizeOnlyPercentage = !!t.videoSizeOnlyPercentage, t._videoSizeUnit = t.videoSizeOnlyPercentage ? "%" : "px", t.videoRotation = t.videoRotation !== void 0 ? t.videoRotation : !(t.videoSizeOnlyPercentage || !t.videoHeightShow), t.videoRatio = re.getNumber(t.videoRatio, 4) || 0.5625, t.videoRatioList = t.videoRatioList ? t.videoRatioList : null, t.youtubeQuery = (t.youtubeQuery || "").replace("?", ""), t.vimeoQuery = (t.vimeoQuery || "").replace("?", ""), t.videoFileInput = !!t.videoFileInput, t.videoUrlInput = t.videoUrlInput === void 0 || !t.videoFileInput ? !0 : t.videoUrlInput, t.videoUploadHeader = t.videoUploadHeader || null, t.videoUploadUrl = typeof t.videoUploadUrl == "string" ? t.videoUploadUrl : null, t.videoUploadSizeLimit = /\d+/.test(t.videoUploadSizeLimit) ? re.getNumber(t.videoUploadSizeLimit, 0) : null, t.videoMultipleFile = !!t.videoMultipleFile, t.videoTagAttrs = t.videoTagAttrs || null, t.videoIframeAttrs = t.videoIframeAttrs || null, t.videoAccept = typeof t.videoAccept != "string" || t.videoAccept.trim() === "*" ? "video/*" : t.videoAccept.trim() || "video/*", t.audioWidth = t.audioWidth ? re.isNumber(t.audioWidth) ? t.audioWidth + "px" : t.audioWidth : "", t.audioHeight = t.audioHeight ? re.isNumber(t.audioHeight) ? t.audioHeight + "px" : t.audioHeight : "", t.audioFileInput = !!t.audioFileInput, t.audioUrlInput = t.audioUrlInput === void 0 || !t.audioFileInput ? !0 : t.audioUrlInput, t.audioUploadHeader = t.audioUploadHeader || null, t.audioUploadUrl = typeof t.audioUploadUrl == "string" ? t.audioUploadUrl : null, t.audioUploadSizeLimit = /\d+/.test(t.audioUploadSizeLimit) ? re.getNumber(t.audioUploadSizeLimit, 0) : null, t.audioMultipleFile = !!t.audioMultipleFile, t.audioTagAttrs = t.audioTagAttrs || null, t.audioAccept = typeof t.audioAccept != "string" || t.audioAccept.trim() === "*" ? "audio/*" : t.audioAccept.trim() || "audio/*", t.tableCellControllerPosition = typeof t.tableCellControllerPosition == "string" ? t.tableCellControllerPosition.toLowerCase() : "cell", t.linkTargetNewWindow = !!t.linkTargetNewWindow, t.linkProtocol = typeof t.linkProtocol == "string" ? t.linkProtocol : null, t.linkRel = Array.isArray(t.linkRel) ? t.linkRel : [], t.linkRelDefault = t.linkRelDefault || {}, t.tabDisable = !!t.tabDisable, t.shortcutsDisable = Array.isArray(t.shortcutsDisable) ? t.shortcutsDisable : [], t.shortcutsHint = t.shortcutsHint === void 0 ? !0 : !!t.shortcutsHint, t.callBackSave = t.callBackSave ? t.callBackSave : null, t.templates = t.templates ? t.templates : null, t.placeholder = typeof t.placeholder == "string" ? t.placeholder : null, t.mediaAutoSelect = t.mediaAutoSelect === void 0 ? !0 : !!t.mediaAutoSelect, t.buttonList = t.buttonList ? t.buttonList : [
      ["undo", "redo"],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"]
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? Ul : [Ul, t.icons].reduce(function(a, c) {
      for (let d in c)
        re.hasOwn(c, d) && (a[d] = c[d]);
      return a;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(a, c) {
      for (let d in c)
        re.hasOwn(c, d) && (a[d] = c[d]);
      return a;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = re._setDefaultOptionStyle(t, t.defaultStyle);
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
    const t = e.icons, i = e.lang, l = re.isOSX_IOS ? "⌘" : "CTRL", n = re.isOSX_IOS ? "⇧" : "+SHIFT", a = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], c = e.rtl ? ["[", "]"] : ["]", "["], d = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
    return {
      /** default command */
      bold: ["", i.toolbar.bold + '<span class="se-shortcut">' + (a.indexOf("bold") > -1 ? "" : l + '+<span class="se-shortcut-key">B</span>') + "</span>", "bold", "", t.bold],
      underline: ["", i.toolbar.underline + '<span class="se-shortcut">' + (a.indexOf("underline") > -1 ? "" : l + '+<span class="se-shortcut-key">U</span>') + "</span>", "underline", "", t.underline],
      italic: ["", i.toolbar.italic + '<span class="se-shortcut">' + (a.indexOf("italic") > -1 ? "" : l + '+<span class="se-shortcut-key">I</span>') + "</span>", "italic", "", t.italic],
      strike: ["", i.toolbar.strike + '<span class="se-shortcut">' + (a.indexOf("strike") > -1 ? "" : l + n + '+<span class="se-shortcut-key">S</span>') + "</span>", "strike", "", t.strike],
      subscript: ["", i.toolbar.subscript, "SUB", "", t.subscript],
      superscript: ["", i.toolbar.superscript, "SUP", "", t.superscript],
      removeFormat: ["", i.toolbar.removeFormat, "removeFormat", "", t.erase],
      indent: ["", i.toolbar.indent + '<span class="se-shortcut">' + (a.indexOf("indent") > -1 ? "" : l + '+<span class="se-shortcut-key">' + c[0] + "</span>") + "</span>", "indent", "", d[0]],
      outdent: ["", i.toolbar.outdent + '<span class="se-shortcut">' + (a.indexOf("indent") > -1 ? "" : l + '+<span class="se-shortcut-key">' + c[1] + "</span>") + "</span>", "outdent", "", d[1]],
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
  _createButton: function(e, t, i, l, n, a, c) {
    const d = re.createElement("LI"), o = re.createElement("BUTTON"), h = t || i;
    return o.setAttribute("type", "button"), o.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), o.setAttribute("data-command", i), o.setAttribute("data-display", l), o.setAttribute("aria-label", h.replace(/<span .+<\/span>/, "")), o.setAttribute("tabindex", "-1"), n || (n = '<span class="se-icon-text">!</span>'), /^default\./i.test(n) && (n = c[n.replace(/^default\./i, "")]), /^text\./i.test(n) && (n = n.replace(/^text\./i, ""), o.className += " se-btn-more-text"), n += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + h + "</span></span>", a && o.setAttribute("disabled", !0), o.innerHTML = n, d.appendChild(o), {
      li: d,
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
    const c = e.createElement("DIV");
    c.className = "se-btn-tray", a.appendChild(c), t = JSON.parse(JSON.stringify(t));
    const d = l.icons, o = this._defaultButtons(l), h = {}, u = [];
    let b = null, y = null, k = null, x = null, N = "", s = !1;
    const r = re.createElement("DIV");
    r.className = "se-toolbar-more-layer";
    e:
      for (let g = 0, v, m, _, C, w; g < t.length; g++)
        if (v = !1, w = "", C = t[g], k = this._createModuleGroup(), typeof C == "object") {
          for (let S = 0, I; S < C.length; S++) {
            if (y = C[S], I = !1, /^\%\d+/.test(y) && S === 0) {
              C[0] = y.replace(/[^\d]/g, ""), u.push(C), t.splice(g--, 1);
              continue e;
            }
            if (typeof y == "object")
              typeof y.add == "function" ? (N = y.name, b = o[N], i[N] = y) : (N = y.name, b = [y.buttonClass, y.title, y.name, y.dataDisplay, y.innerHTML, y._disabled]);
            else {
              if (/^\-/.test(y)) {
                w = y.substr(1), k.div.className += " module-float-" + w;
                continue;
              }
              if (/^\#/.test(y)) {
                y.substr(1) === "fix" && (k.ul.className += " se-menu-dir-fix");
                continue;
              }
              if (/^\:/.test(y)) {
                I = !0;
                const E = y.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                _ = "__se__" + E[1].trim();
                const L = E[2].trim(), z = E[3].trim();
                b = ["se-btn-more", L, _, "MORE", z];
              } else
                b = o[y];
              if (N = y, !b) {
                const E = i[N];
                if (!E) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + N + "]");
                b = [E.buttonClass, E.title, E.name, E.display, E.innerHTML, E._disabled];
              }
            }
            x = this._createButton(b[0], b[1], b[2], b[3], b[4], b[5], d), (v ? m : k.ul).appendChild(x.li), i[N] && (h[N] = x.button), I && (v = !0, m = re.createElement("DIV"), m.className = "se-more-layer " + _, m.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (w ? ' style="float: ' + w + ';"' : "") + "></ul></div>", r.appendChild(m), m = m.firstElementChild.firstElementChild);
          }
          if (s) {
            const S = n.cloneNode(!1);
            c.appendChild(S);
          }
          c.appendChild(k.div), s = !0;
        } else if (/^\/$/.test(C)) {
          const S = e.createElement("DIV");
          S.className = "se-btn-module-enter", c.appendChild(S), s = !1;
        }
    switch (c.children.length) {
      case 0:
        c.style.display = "none";
        break;
      case 1:
        re.removeClass(c.firstElementChild, "se-btn-module-border");
        break;
      default:
        if (l.rtl) {
          const g = n.cloneNode(!1);
          g.style.float = c.lastElementChild.style.float, c.appendChild(g);
        }
    }
    u.length > 0 && u.unshift(t), r.children.length > 0 && c.appendChild(r);
    const f = e.createElement("DIV");
    f.className = "se-menu-tray", a.appendChild(f);
    const p = e.createElement("DIV");
    return p.className = "se-toolbar-cover", a.appendChild(p), l.hideToolbar && (a.style.display = "none"), {
      element: a,
      plugins: i,
      pluginCallButtons: h,
      responsiveButtons: u,
      _menuTray: f,
      _buttonTray: c
    };
  }
}, il = function(e, t, i) {
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
function _a(e, t) {
  const i = e._w, l = e.util, n = e.options.historyStackDelayTime;
  let a = e.context.element, c = e.context.tool.undo, d = e.context.tool.redo, o = null, h = 0, u = [];
  function b() {
    const k = u[h];
    a.wysiwyg.innerHTML = k.contents, e.setRange(l.getNodeFromPath(k.s.path, a.wysiwyg), k.s.offset, l.getNodeFromPath(k.e.path, a.wysiwyg), k.e.offset), e.focus(), u.length <= 1 ? (c && c.setAttribute("disabled", !0), d && d.setAttribute("disabled", !0)) : h === 0 ? (c && c.setAttribute("disabled", !0), d && d.removeAttribute("disabled")) : h === u.length - 1 ? (c && c.removeAttribute("disabled"), d && d.setAttribute("disabled", !0)) : (c && c.removeAttribute("disabled"), d && d.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function y() {
    e._checkComponents();
    const k = a.wysiwyg.innerHTML;
    if (!k || u[h] && k === u[h].contents) return;
    h++;
    const x = e._variable._range;
    u.length > h && (u = u.slice(0, h), d && d.setAttribute("disabled", !0)), x ? u[h] = {
      contents: k,
      s: {
        path: l.getNodePath(x.startContainer, null, null),
        offset: x.startOffset
      },
      e: {
        path: l.getNodePath(x.endContainer, null, null),
        offset: x.endOffset
      }
    } : u[h] = {
      contents: k,
      s: { path: [0, 0], offset: [0, 0] },
      e: { path: 0, offset: 0 }
    }, h === 1 && c && c.removeAttribute("disabled"), e._setCharCount(), t();
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
    push: function(k) {
      i.setTimeout(e._resourcesStateChange.bind(e));
      const x = typeof k == "number" ? k > 0 ? k : 0 : k ? n : 0;
      if ((!x || o) && (i.clearTimeout(o), !x)) {
        y();
        return;
      }
      o = i.setTimeout(function() {
        i.clearTimeout(o), o = null, y();
      }, x);
    },
    /**
     * @description Undo function
     */
    undo: function() {
      h > 0 && (h--, b());
    },
    /**
     * @description Redo function
     */
    redo: function() {
      u.length - 1 > h && (h++, b());
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(k) {
      h = k < 0 ? u.length - 1 : k, b();
    },
    /**
     * @description Get the current history stack index.
     * @returns {Number} Current Stack index
     */
    getCurrentIndex: function() {
      return h;
    },
    /**
     * @description Reset the history object
     */
    reset: function(k) {
      c && c.setAttribute("disabled", !0), d && d.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0), u.splice(0), h = 0, u[h] = {
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
      a = e.context.element, c = e.context.tool.undo, d = e.context.tool.redo, h === 0 ? (c && c.setAttribute("disabled", !0), d && h === u.length - 1 && d.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : h === u.length - 1 && d && d.setAttribute("disabled", !0);
    },
    /**
     * @description Remove all stacks and remove the timeout function.
     * @private
     */
    _destroy: function() {
      o && i.clearTimeout(o), u = null;
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
function wa(e, t, i, l, n, a) {
  const c = e.element.originElement.ownerDocument || document, d = c.defaultView || window, o = re, h = n.icons, u = {
    _d: c,
    _w: d,
    _parser: new d.DOMParser(),
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
    notice: Wl,
    /**
     * @description Default icons object
     */
    icons: h,
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
        for (let r = 0, f, p, g; r < s.length; r++)
          f = s[r], p = f.getAttribute("data-command"), g = this.allCommandButtons[p], g && (f.parentElement.replaceChild(g, f), this.context.tool[p] && (this.context.tool[p] = g));
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
      const f = this.context.element.toolbar, p = f.offsetWidth, g = b._getEditorOffsets(e.element.toolbar), v = r.offsetWidth, m = s.parentElement.offsetLeft + 3;
      if (n.rtl) {
        const z = s.offsetWidth, P = v > z ? v - z : 0, U = P > 0 ? 0 : z - v;
        r.style.left = m - P + U + "px", g.left > b._getEditorOffsets(r).left && (r.style.left = "0px");
      } else {
        const z = p <= v ? 0 : p - (m + v);
        z < 0 ? r.style.left = m + z + "px" : r.style.left = m + "px";
      }
      let _ = 0, C = s;
      for (; C && C !== f; )
        _ += C.offsetTop, C = C.offsetParent;
      const w = _;
      this._isBalloon ? _ += f.offsetTop + s.offsetHeight : _ -= s.offsetHeight;
      const S = g.top, I = r.offsetHeight, E = this.getGlobalScrollOffset().top, L = d.innerHeight - (S - E + w + s.parentElement.offsetHeight);
      if (L < I) {
        let z = -1 * (I - w + 3);
        const P = S - E + z, U = I + (P < 0 ? P : 0);
        U > L ? (r.style.height = U + "px", z = -1 * (U - w + 3)) : (r.style.height = L + "px", z = w + s.parentElement.offsetHeight), r.style.top = z + "px";
      } else
        r.style.top = w + s.parentElement.offsetHeight + "px";
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
      this._bindControllersOff = this.controllersOff.bind(this), this.addDocEvent("mousedown", this._bindControllersOff, !1), this.addDocEvent("keydown", this._bindControllersOff, !1), this._antiBlur = !0, typeof y.showController == "function" && y.showController(this.currentControllerName, this.controllerArray, this);
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
      n.rtl && (p.left *= -1);
      const g = o.getOffset(r, e.element.wysiwygFrame);
      s.style.visibility = "hidden", s.style.display = "block";
      const v = f === "top" ? -(s.offsetHeight + 2) : r.offsetHeight + 12;
      s.style.top = g.top + v + p.top + "px";
      const m = g.left - e.element.wysiwygFrame.scrollLeft + p.left, _ = s.offsetWidth, C = r.offsetWidth, w = o.hasClass(s.firstElementChild, "se-arrow") ? s.firstElementChild : null;
      if (n.rtl) {
        const S = _ > C ? _ - C : 0, I = S > 0 ? 0 : C - _;
        s.style.left = m - S + I + "px", S > 0 && w && (w.style.left = (_ - 14 < 10 + S ? _ - 14 : 10 + S) + "px");
        const E = e.element.wysiwygFrame.offsetLeft - s.offsetLeft;
        E > 0 && (s.style.left = "0px", w && (w.style.left = E + "px"));
      } else {
        s.style.left = m + "px";
        const S = e.element.wysiwygFrame.offsetWidth - (s.offsetLeft + _);
        S < 0 ? (s.style.left = s.offsetLeft + S + "px", w && (w.style.left = 20 - S + "px")) : w && (w.style.left = "20px");
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
        if (n.iframe)
          this.nativeFocus();
        else
          try {
            const s = this.getRange();
            if (s.startContainer === s.endContainer && o.isWysiwygDiv(s.startContainer)) {
              const r = s.commonAncestorContainer.children[s.startOffset];
              if (!o.isFormatElement(r) && !o.isComponent(r)) {
                const f = o.createElement(n.defaultTag), p = o.createElement("BR");
                f.appendChild(p), e.element.wysiwyg.insertBefore(f, r), this.setRange(p, 0, p, 0);
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
      r ? this.selectComponent(r.target, r.pluginName) : s ? (s = o.getChildElement(s, function(f) {
        return f.childNodes.length === 0 || f.nodeType === 3;
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
    setRange: function(s, r, f, p) {
      if (!s || !f) return;
      r > s.textContent.length && (r = s.textContent.length), p > f.textContent.length && (p = f.textContent.length), o.isFormatElement(s) && (s = s.childNodes[r] || s.childNodes[r - 1] || s, r = r > 0 ? s.nodeType === 1 ? 1 : s.textContent ? s.textContent.length : 0 : 0), o.isFormatElement(f) && (f = f.childNodes[p] || f.childNodes[p - 1] || f, p = p > 0 ? f.nodeType === 1 ? 1 : f.textContent ? f.textContent.length : 0 : 0);
      const g = this._wd.createRange();
      try {
        g.setStart(s, r), g.setEnd(f, p);
      } catch (m) {
        console.warn("[SUNEDITOR.core.focus.error] " + m), this.nativeFocus();
        return;
      }
      const v = this.getSelection();
      return v.removeAllRanges && v.removeAllRanges(), v.addRange(g), this._rangeInfo(g, this.getSelection()), n.iframe && this.__focus(), g;
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
        const f = r.anchorNode, p = r.focusNode, g = r.anchorOffset, v = r.focusOffset, m = o.compareElements(f, p), _ = m.ancestor && (m.result === 0 ? g <= v : m.result > 1);
        return this.setRange(
          _ ? f : p,
          _ ? g : v,
          _ ? p : f,
          _ ? v : g
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
        const f = e.element.wysiwyg, p = o.createElement(n.defaultTag);
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
      return f ? (p = f.firstChild, p || (p = o.createElement("BR"), f.appendChild(p))) : (f = o.createElement(n.defaultTag), p = o.createElement("BR"), f.appendChild(p), s.appendChild(f)), r.setStart(p, 0), r.setEnd(p, 0), r;
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
      let r = s.startContainer, f = s.startOffset, p = s.endContainer, g = s.endOffset, v, m, _;
      if (o.isFormatElement(r))
        for (r.childNodes[f] ? (r = r.childNodes[f] || r, f = 0) : (r = r.lastChild || r, f = r.textContent.length); r && r.nodeType === 1 && r.firstChild; )
          r = r.firstChild || r, f = 0;
      if (o.isFormatElement(p)) {
        for (p = p.childNodes[g] || p.lastChild || p; p && p.nodeType === 1 && p.lastChild; )
          p = p.lastChild;
        g = p.textContent.length;
      }
      if (v = o.isWysiwygDiv(r) ? e.element.wysiwyg.firstChild : r, m = f, o.isBreak(v) || v.nodeType === 1 && v.childNodes.length > 0) {
        const C = o.isBreak(v);
        if (!C) {
          for (; v && !o.isBreak(v) && v.nodeType === 1; )
            v = v.childNodes[m] || v.nextElementSibling || v.nextSibling, m = 0;
          let w = o.getFormatElement(v, null);
          w === o.getRangeFormatElement(w, null) && (w = o.createElement(o.getParentElement(v, o.isCell) ? "DIV" : n.defaultTag), v.parentNode.insertBefore(w, v), w.appendChild(v));
        }
        if (o.isBreak(v)) {
          const w = o.createTextNode(o.zeroWidthSpace);
          v.parentNode.insertBefore(w, v), v = w, C && r === p && (p = v, g = 1);
        }
      }
      if (r = v, f = m, v = o.isWysiwygDiv(p) ? e.element.wysiwyg.lastChild : p, m = g, o.isBreak(v) || v.nodeType === 1 && v.childNodes.length > 0) {
        const C = o.isBreak(v);
        if (!C) {
          for (; v && !o.isBreak(v) && v.nodeType === 1 && (_ = v.childNodes, _.length !== 0); )
            v = _[m > 0 ? m - 1 : m] || !/FIGURE/i.test(_[0].nodeName) ? _[0] : v.previousElementSibling || v.previousSibling || r, m = m > 0 ? v.textContent.length : m;
          let w = o.getFormatElement(v, null);
          w === o.getRangeFormatElement(w, null) && (w = o.createElement(o.isCell(w) ? "DIV" : n.defaultTag), v.parentNode.insertBefore(w, v), w.appendChild(v));
        }
        if (o.isBreak(v)) {
          const w = o.createTextNode(o.zeroWidthSpace);
          v.parentNode.insertBefore(w, v), v = w, m = 1, C && !v.previousSibling && o.removeItem(p);
        }
      }
      return p = v, g = m, this.setRange(r, f, p, g), !0;
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
        const z = e.element.wysiwyg.children;
        if (z.length === 0) return [];
        this.setRange(z[0], 0, z[z.length - 1], z[z.length - 1].textContent.trim().length), r = this.getRange();
      }
      const f = r.startContainer, p = r.endContainer, g = r.commonAncestorContainer, v = o.getListChildren(g, function(z) {
        return s ? s(z) : o.isFormatElement(z);
      });
      if (!o.isWysiwygDiv(g) && !o.isRangeFormatElement(g) && v.unshift(o.getFormatElement(g, null)), f === p || v.length === 1) return v;
      let m = o.getFormatElement(f, null), _ = o.getFormatElement(p, null), C = null, w = null;
      const S = function(z) {
        return o.isTable(z) ? /^TABLE$/i.test(z.nodeName) : !0;
      };
      let I = o.getRangeFormatElement(m, S), E = o.getRangeFormatElement(_, S);
      o.isTable(I) && o.isListCell(I.parentNode) && (I = I.parentNode), o.isTable(E) && o.isListCell(E.parentNode) && (E = E.parentNode);
      const L = I === E;
      for (let z = 0, P = v.length, U; z < P; z++) {
        if (U = v[z], m === U || !L && U === I) {
          C = z;
          continue;
        }
        if (_ === U || !L && U === E) {
          w = z;
          break;
        }
      }
      return C === null && (C = 0), w === null && (w = v.length - 1), v.slice(C, w + 1);
    },
    /**
     * @description Get format elements and components from the selected area. (P, DIV, H[1-6], OL, UL, TABLE..)
     * If some of the component are included in the selection, get the entire that component.
     * @param {Boolean} removeDuplicate If true, if there is a parent and child tag among the selected elements, the child tag is excluded.
     * @returns {Array}
     */
    getSelectedElementsAndComponents: function(s) {
      const r = this.getRange().commonAncestorContainer, f = o.getParentElement(r, o.isComponent), p = o.isTable(r) ? this.getSelectedElements(null) : this.getSelectedElements((function(g) {
        const v = this.getParentElement(g, this.isComponent);
        return this.isFormatElement(g) && (!v || v === f) || this.isComponent(g) && !this.getFormatElement(g);
      }).bind(o));
      if (s) {
        for (let g = 0, v = p.length; g < v; g++)
          for (let m = g - 1; m >= 0; m--)
            if (p[m].contains(p[g])) {
              p.splice(g, 1), g--, v--;
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
    isEdgePoint: function(s, r, f) {
      return f !== "end" && r === 0 || (!f || f !== "front") && !s.nodeValue && r === 1 || (!f || f === "end") && !!s.nodeValue && r === s.nodeValue.length;
    },
    /**
     * @description Check if the container and offset values are the edges of the format tag
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String} dir Select check point - "front": Front edge, "end": End edge, undefined: Both edge.
     * @returns {Array|null}
     * @private
     */
    _isEdgeFormat: function(s, r, f) {
      if (!this.isEdgePoint(s, r, f)) return !1;
      const p = [];
      for (f = f === "front" ? "previousSibling" : "nextSibling"; s && !o.isFormatElement(s) && !o.isWysiwygDiv(s); )
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
        const g = r ? typeof r == "string" ? r : r.nodeName : o.isFormatElement(f) && !o.isRangeFormatElement(f) && !o.isFreeFormatElement(f) ? f.nodeName : n.defaultTag;
        p = o.createElement(g), p.innerHTML = "<br>", (r && typeof r != "string" || !r && o.isFormatElement(f)) && o.copyTagAttributes(p, r || f, ["id"]);
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
      const g = this.removeNode();
      this.getRange_addLine(this.getRange(), g.container);
      let v = null, m = this.getSelectionNode(), _ = o.getFormatElement(m, null);
      if (o.isListCell(_))
        this.insertNode(s, m === _ ? null : g.container.nextSibling, !1), s.nextSibling || s.parentNode.appendChild(o.createElement("BR"));
      else {
        if (this.getRange().collapsed && (g.container.nodeType === 3 || o.isBreak(g.container))) {
          const C = o.getParentElement(g.container, (function(w) {
            return this.isRangeFormatElement(w);
          }).bind(o));
          v = o.splitElement(g.container, g.offset, C ? o.getElementDepth(C) + 1 : 0), v && (_ = v.previousSibling);
        }
        this.insertNode(s, o.isRangeFormatElement(_) ? null : _, !1), _ && o.onlyZeroWidthSpace(_) && o.removeItem(_);
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
      f && d.setTimeout((function() {
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
      const r = o.getParentElement(s, o.isComponent), f = e.element.lineBreaker_t.style, p = e.element.lineBreaker_b.style, g = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : s, v = o.isListCell(r.parentNode);
      let m, _, C;
      (v ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) ? (this._variable._lineBreakComp = r, _ = e.element.wysiwyg.scrollTop, m = o.getOffset(s, e.element.wysiwygFrame).top + _, C = g.offsetWidth / 2 / 2, f.top = m - _ - 12 + "px", f.left = o.getOffset(g).left + C + "px", f.display = "block") : f.display = "none", (v ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) ? (m || (this._variable._lineBreakComp = r, _ = e.element.wysiwyg.scrollTop, m = o.getOffset(s, e.element.wysiwygFrame).top + _, C = g.offsetWidth / 2 / 2), p.top = m + g.offsetHeight - _ - 12 + "px", p.left = o.getOffset(g).left + g.offsetWidth - C - 24 + "px", p.display = "block") : p.display = "none";
    },
    _checkDuplicateNode: function(s, r) {
      (function f(p) {
        u._dupleCheck(p, r);
        const g = p.childNodes;
        for (let v = 0, m = g.length; v < m; v++)
          f(g[v]);
      })(s);
    },
    _dupleCheck: function(s, r) {
      if (!o.isTextStyleElement(s)) return;
      const f = (s.style.cssText.match(/[^;]+;/g) || []).map(function(v) {
        return v.trim();
      }), p = s.nodeName;
      if (/^span$/i.test(p) && f.length === 0) return s;
      let g = !1;
      return function v(m) {
        if (!(o.isWysiwygDiv(m) || !o.isTextStyleElement(m))) {
          if (m.nodeName === p) {
            g = !0;
            const _ = m.style.cssText.match(/[^;]+;/g) || [];
            for (let C = 0, w = _.length, S; C < w; C++)
              (S = f.indexOf(_[C].trim())) > -1 && f.splice(S, 1);
            for (let C = 0, w = m.classList.length; C < w; C++)
              s.classList.remove(m.classList[C]);
          }
          v(m.parentElement);
        }
      }(r), g && ((s.style.cssText = f.join(" ")) || (s.setAttribute("style", ""), s.removeAttribute("style")), s.attributes.length || s.setAttribute("data-se-duple", "true")), s;
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
      let p = null, g = this.getRange(), v = o.isListCell(g.commonAncestorContainer) ? g.commonAncestorContainer : o.getFormatElement(this.getSelectionNode(), null), m = o.isListCell(v) && (o.isListCell(s) || o.isList(s)), _, C, w, S = null;
      const I = o.isFreeFormatElement(v), E = !I && (o.isFormatElement(s) || o.isRangeFormatElement(s)) || o.isComponent(s);
      if (m && (w = r || o.isList(s) ? v.lastChild : v.nextElementSibling, S = o.isList(s) ? v : (w || v).parentNode), !r && (E || o.isComponent(s) || o.isMedia(s))) {
        const F = this.isEdgePoint(g.endContainer, g.endOffset, "end"), D = this.removeNode(), O = D.container, R = O === D.prevContainer && g.collapsed ? null : D.prevContainer;
        if (m && R)
          if (S = R.nodeType === 3 ? R.parentNode : R, S.contains(O)) {
            let H = !0;
            for (w = O; w.parentNode && w.parentNode !== S; )
              w = w.parentNode, H = !1;
            H && O === R && (w = w.nextSibling);
          } else
            w = null;
        else if (m && o.isListCell(O) && !v.parentElement)
          v = o.createElement("LI"), S.appendChild(v), O.appendChild(S), w = null;
        else if (O.nodeType === 3 || o.isBreak(O) || m) {
          const H = o.getParentElement(O, (function(A) {
            return this.isRangeFormatElement(A) || this.isListCell(A);
          }).bind(o));
          if (r = o.splitElement(O, D.offset, H ? o.getElementDepth(H) + 1 : 0), !r)
            w = r = v;
          else if (m) {
            if (v.contains(O)) {
              const A = o.isList(v.lastElementChild);
              let T = null;
              F || (T = v.cloneNode(!1), T.appendChild(r.textContent.trim() ? r : o.createTextNode(o.zeroWidthSpace))), A && (T || (T = v.cloneNode(!1), T.appendChild(o.createTextNode(o.zeroWidthSpace))), T.appendChild(v.lastElementChild)), T && (v.parentNode.insertBefore(T, v.nextElementSibling), w = r = T);
            }
          } else
            r = r.previousSibling;
        }
      }
      g = !r && !E ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const L = g.commonAncestorContainer, z = g.startOffset, P = g.endOffset, U = g.startContainer === L && o.isFormatElement(L), V = U && (L.childNodes[z] || L.childNodes[0]) || g.startContainer, M = U && (L.childNodes[P] || L.childNodes[L.childNodes.length - 1]) || g.endContainer;
      if (!m)
        if (r)
          _ = r.parentNode, r = r.nextSibling, C = !0;
        else if (_ = V, V.nodeType === 3 && (_ = V.parentNode), g.collapsed)
          if (L.nodeType === 3)
            L.textContent.length > P ? r = L.splitText(P) : r = L.nextSibling;
          else if (o.isBreak(_))
            r = _, _ = _.parentNode;
          else {
            let F = _.childNodes[z];
            const D = F && F.nodeType === 3 && o.onlyZeroWidthSpace(F) && o.isBreak(F.nextSibling) ? F.nextSibling : F;
            D ? !D.nextSibling && o.isBreak(D) ? (_.removeChild(D), r = null) : r = o.isBreak(D) && !o.isBreak(s) ? D : D.nextSibling : r = null;
          }
        else if (V === M) {
          this.isEdgePoint(M, P) ? r = M.nextSibling : r = M.splitText(P);
          let D = V;
          this.isEdgePoint(V, z) || (D = V.splitText(z)), _.removeChild(D), _.childNodes.length === 0 && E && (_.innerHTML = "<br>");
        } else {
          const D = this.removeNode(), O = D.container, R = D.prevContainer;
          if (O && O.childNodes.length === 0 && E && (o.isFormatElement(O) ? O.innerHTML = "<br>" : o.isRangeFormatElement(O) && (O.innerHTML = "<" + n.defaultTag + "><br></" + n.defaultTag + ">")), o.isListCell(O) && s.nodeType === 3)
            _ = O, r = null;
          else if (!E && R)
            if (_ = R.nodeType === 3 ? R.parentNode : R, _.contains(O)) {
              let H = !0;
              for (r = O; r.parentNode && r.parentNode !== _; )
                r = r.parentNode, H = !1;
              H && O === R && (r = r.nextSibling);
            } else
              r = null;
          else o.isWysiwygDiv(O) && !o.isFormatElement(s) ? (_ = O.appendChild(o.createElement(n.defaultTag)), r = null) : (r = E ? M : O === R ? O.nextSibling : O, _ = !r || !r.parentNode ? L : r.parentNode);
          for (; r && !o.isFormatElement(r) && r.parentNode !== L; )
            r = r.parentNode;
        }
      try {
        if (!m) {
          if ((o.isWysiwygDiv(r) || _ === e.element.wysiwyg.parentNode) && (_ = e.element.wysiwyg, r = null), o.isFormatElement(s) || o.isRangeFormatElement(s) || !o.isListCell(_) && o.isComponent(s)) {
            const F = _;
            if (o.isList(r))
              _ = r, r = null;
            else if (o.isListCell(r))
              _ = r.previousElementSibling || r;
            else if (!C && !r) {
              const D = this.removeNode(), O = D.container.nodeType === 3 ? o.isListCell(o.getFormatElement(D.container, null)) ? D.container : o.getFormatElement(D.container, null) || D.container.parentNode : D.container, R = o.isWysiwygDiv(O) || o.isRangeFormatElement(O);
              _ = R ? O : O.parentNode, r = R ? null : O.nextSibling;
            }
            F.childNodes.length === 0 && _ !== F && o.removeItem(F);
          }
          if (E && !I && !o.isRangeFormatElement(_) && !o.isListCell(_) && !o.isWysiwygDiv(_) && (r = _.nextElementSibling, _ = _.parentNode), o.isWysiwygDiv(_) && (s.nodeType === 3 || o.isBreak(s))) {
            const F = o.createElement(n.defaultTag);
            F.appendChild(s), p = s, s = F;
          }
        }
        if (m ? S.parentNode ? (_ = S, r = w) : (_ = e.element.wysiwyg, r = null) : r = _ === r ? _.lastChild : r, o.isListCell(s) && !o.isList(_)) {
          if (o.isListCell(_))
            r = _.nextElementSibling, _ = _.parentNode;
          else {
            const F = o.createElement("ol");
            _.insertBefore(F, r), _ = F, r = null;
          }
          m = !0;
        }
        if (this._checkDuplicateNode(s, _), _.insertBefore(s, r), m)
          if (o.onlyZeroWidthSpace(v.textContent.trim()))
            o.removeItem(v), s = s.lastChild;
          else {
            const F = o.getArrayItem(v.children, o.isList);
            F && (s !== F ? (s.appendChild(F), s = F.previousSibling) : (_.appendChild(s), s = _), o.onlyZeroWidthSpace(v.textContent.trim()) && o.removeItem(v));
          }
      } catch (F) {
        _.appendChild(s), console.warn("[SUNEDITOR.insertNode.warn] " + F);
      } finally {
        p && (s = p);
        const F = _.querySelectorAll("[data-se-duple]");
        if (F.length > 0)
          for (let D = 0, O = F.length, R, H, A, T; D < O; D++) {
            for (R = F[D], A = R.childNodes, T = R.parentNode; A[0]; )
              H = A[0], T.insertBefore(H, R);
            R === s && (s = H), o.removeItem(R);
          }
        if ((o.isFormatElement(s) || o.isComponent(s)) && V === M) {
          const D = o.getFormatElement(L, null);
          D && D.nodeType === 1 && o.isEmptyLine(D) && o.removeItem(D);
        }
        if (I && (o.isFormatElement(s) || o.isRangeFormatElement(s)) && (s = this._setIntoFreeFormat(s)), !o.isComponent(s)) {
          let D = 1;
          if (s.nodeType === 3)
            D = s.textContent.length, this.setRange(s, D, s, D);
          else if (!o.isBreak(s) && !o.isListCell(s) && o.isFormatElement(_)) {
            let O = null;
            (!s.previousSibling || o.isBreak(s.previousSibling)) && (O = o.createTextNode(o.zeroWidthSpace), s.parentNode.insertBefore(O, s)), (!s.nextSibling || o.isBreak(s.nextSibling)) && (O = o.createTextNode(o.zeroWidthSpace), s.parentNode.insertBefore(O, s.nextSibling)), o._isIgnoreNodeChange(s) && (s = s.nextSibling, D = 0);
          }
          this.setRange(s, D, s, D);
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
        const D = o.getParentElement(s.startContainer, o.isMediaComponent);
        if (D) {
          const O = o.createElement("BR"), R = o.createElement(n.defaultTag);
          return R.appendChild(O), o.changeElement(D, R), u.setRange(R, 0, R, 0), this.history.push(!0), {
            container: R,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const r = s.startOffset === 0, f = u.isEdgePoint(s.endContainer, s.endOffset, "end");
      let p = null, g = null, v = null;
      r && (g = o.getFormatElement(s.startContainer), g && (p = g.previousElementSibling, g = p)), f && (v = o.getFormatElement(s.endContainer), v = v && v.nextElementSibling);
      let m, _ = 0, C = s.startContainer, w = s.endContainer, S = s.startOffset, I = s.endOffset;
      const E = s.commonAncestorContainer.nodeType === 3 && s.commonAncestorContainer.parentNode === C.parentNode ? C.parentNode : s.commonAncestorContainer;
      if (E === C && E === w && (C = E.children[S], w = E.children[I], S = I = 0), !C || !w) return {
        container: E,
        offset: 0
      };
      if (C === w && s.collapsed && C.textContent && o.onlyZeroWidthSpace(C.textContent.substr(S)))
        return {
          container: C,
          offset: S,
          prevContainer: C && C.parentNode ? C : null
        };
      let L = null, z = null;
      const P = o.getListChildNodes(E, null);
      let U = o.getArrayIndex(P, C), V = o.getArrayIndex(P, w);
      if (P.length > 0 && U > -1 && V > -1) {
        for (let D = U + 1, O = C; D >= 0; D--)
          P[D] === O.parentNode && P[D].firstChild === O && S === 0 && (U = D, O = O.parentNode);
        for (let D = V - 1, O = w; D > U; D--)
          P[D] === O.parentNode && P[D].nodeType === 1 && (P.splice(D, 1), O = O.parentNode, --V);
      } else {
        if (P.length === 0) {
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
          P.push(E), C = w = E;
        } else if (C = w = P[0], o.isBreak(C) || o.onlyZeroWidthSpace(C))
          return {
            container: o.isMedia(E) ? E : C,
            offset: 0
          };
        U = V = 0;
      }
      for (let D = U; D <= V; D++) {
        const O = P[D];
        if (O.length === 0 || O.nodeType === 3 && O.data === void 0) {
          this._nodeRemoveListItem(O);
          continue;
        }
        if (O === C) {
          if (C.nodeType === 1) {
            if (o.isComponent(C)) continue;
            L = o.createTextNode(C.textContent);
          } else
            O === w ? (L = o.createTextNode(C.substringData(0, S) + w.substringData(I, w.length - I)), _ = S) : L = o.createTextNode(C.substringData(0, S));
          if (L.length > 0 ? C.data = L.data : this._nodeRemoveListItem(C), O === w) break;
          continue;
        }
        if (O === w) {
          if (w.nodeType === 1) {
            if (o.isComponent(w)) continue;
            z = o.createTextNode(w.textContent);
          } else
            z = o.createTextNode(w.substringData(I, w.length - I));
          z.length > 0 ? w.data = z.data : this._nodeRemoveListItem(w);
          continue;
        }
        this._nodeRemoveListItem(O);
      }
      const M = o.getParentElement(w, "ul"), F = o.getParentElement(C, "li");
      if (M && F && F.contains(M) ? (m = M.previousSibling, _ = m.textContent.length) : (m = w && w.parentNode ? w : C && C.parentNode ? C : s.endContainer || s.startContainer, _ = !r && !f ? _ : f ? m.textContent.length : 0), !o.isWysiwygDiv(m) && m.childNodes.length === 0) {
        const D = o.removeItemAllParents(m, null, null);
        D && (m = D.sc || D.ec || e.element.wysiwyg);
      }
      return !o.getFormatElement(m) && !(C && C.parentNode) && (v ? (m = v, _ = 0) : g && (m = g, _ = 1)), this.setRange(m, _, m, _), this.history.push(!0), {
        container: m,
        offset: _,
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
        for (let I = 0, E = r.length, L, z, P, U, V, M; I < E; I++)
          if (L = r[I], !!o.isListCell(L) && (z = L.lastElementChild, z && o.isListCell(L.nextElementSibling) && r.indexOf(L.nextElementSibling) > -1 && (U = z.lastElementChild, r.indexOf(U) > -1))) {
            let F = null;
            for (; F = U.lastElementChild; )
              if (o.isList(F))
                if (r.indexOf(F.lastElementChild) > -1)
                  U = F.lastElementChild;
                else
                  continue e;
            P = z.firstElementChild, V = r.indexOf(P), M = r.indexOf(U), r.splice(V, M - V + 1), E = r.length;
            continue;
          }
      let f = r[r.length - 1], p, g, v;
      o.isRangeFormatElement(f) || o.isFormatElement(f) ? p = f : p = o.getRangeFormatElement(f, null) || o.getFormatElement(f, null), o.isCell(p) ? (g = null, v = p) : (g = p.nextSibling, v = p.parentNode);
      let m = o.getElementDepth(p), _ = null;
      const C = [], w = function(I, E, L) {
        let z = null;
        if (I !== E && !o.isTable(E)) {
          if (E && o.getElementDepth(I) === o.getElementDepth(E)) return L;
          z = o.removeItemAllParents(E, null, I);
        }
        return z ? z.ec : L;
      };
      for (let I = 0, E = r.length, L, z, P, U, V, M, F; I < E; I++)
        if (L = r[I], z = L.parentNode, !(!z || s.contains(z)))
          if (P = o.getElementDepth(L), o.isList(z)) {
            if (_ === null && (M ? (_ = M, F = !0, M = null) : _ = z.cloneNode(!1)), C.push(L), V = r[I + 1], I === E - 1 || V && V.parentNode !== z) {
              V && L.contains(V.parentNode) && (M = V.parentNode.cloneNode(!1));
              let D = z.parentNode, O;
              for (; o.isList(D); )
                O = o.createElement(D.nodeName), O.appendChild(_), _ = O, D = D.parentNode;
              const R = this.detachRangeFormatElement(z, C, null, !0, !0);
              m >= P ? (m = P, v = R.cc, g = w(v, z, R.ec), g && (v = g.parentNode)) : v === R.cc && (g = R.ec), v !== R.cc && (U = w(v, R.cc, U), U !== void 0 ? g = U : g = R.cc);
              for (let H = 0, A = R.removeArray.length; H < A; H++)
                _.appendChild(R.removeArray[H]);
              F || s.appendChild(_), M && R.removeArray[R.removeArray.length - 1].appendChild(M), _ = null, F = !1;
            }
          } else
            m >= P && (m = P, v = z, g = L.nextSibling), s.appendChild(L), v !== z && (U = w(v, z), U !== void 0 && (g = U));
      if (this.effectNode = null, o.mergeSameTags(s, null, !1), o.mergeNestedTags(s, (function(I) {
        return this.isList(I);
      }).bind(o)), g && o.getElementDepth(g) > 0 && (o.isList(g.parentNode) || o.isList(g.parentNode.parentNode))) {
        const I = o.getParentElement(g, (function(L) {
          return this.isRangeFormatElement(L) && !this.isList(L);
        }).bind(o)), E = o.splitElement(g, null, I ? o.getElementDepth(I) + 1 : 0);
        E.parentNode.insertBefore(s, E);
      } else
        v.insertBefore(s, g), w(s, g);
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
    detachRangeFormatElement: function(s, r, f, p, g) {
      const v = this.getRange();
      let m = v.startOffset, _ = v.endOffset, C = o.getListChildNodes(s, function(R) {
        return R.parentNode === s;
      }), w = s.parentNode, S = null, I = null, E = s.cloneNode(!1);
      const L = [], z = o.isList(f);
      let P = !1, U = !1, V = !1;
      function M(R, H, A, T) {
        if (o.onlyZeroWidthSpace(H) && (H.innerHTML = o.zeroWidthSpace, m = _ = 1), H.nodeType === 3)
          return R.insertBefore(H, A), H;
        const G = (V ? H : T).childNodes;
        let $ = H.cloneNode(!1), j = null, X = null;
        for (; G[0]; )
          X = G[0], o._notTextNode(X) && !o.isBreak(X) && !o.isListCell($) ? ($.childNodes.length > 0 && (j || (j = $), R.insertBefore($, A), $ = H.cloneNode(!1)), R.insertBefore(X, A), j || (j = X)) : $.appendChild(X);
        if ($.childNodes.length > 0) {
          if (o.isListCell(R) && o.isListCell($) && o.isList(A))
            if (z) {
              for (j = A; A; )
                $.appendChild(A), A = A.nextSibling;
              R.parentNode.insertBefore($, R.nextElementSibling);
            } else {
              const Y = T.nextElementSibling, ne = o.detachNestedList(T, !1);
              if (s !== ne || Y !== T.nextElementSibling) {
                const pe = $.childNodes;
                for (; pe[0]; )
                  T.appendChild(pe[0]);
                s = ne, U = !0;
              }
            }
          else
            R.insertBefore($, A);
          j || (j = $);
        }
        return j;
      }
      for (let R = 0, H = C.length, A, T, G; R < H; R++)
        if (A = C[R], !(A.nodeType === 3 && o.isList(E)))
          if (V = !1, p && R === 0 && (!r || r.length === H || r[0] === A ? S = s.previousSibling : S = E), r && (T = r.indexOf(A)), r && T === -1)
            E || (E = s.cloneNode(!1)), E.appendChild(A);
          else {
            if (r && (G = r[T + 1]), E && E.children.length > 0 && (w.insertBefore(E, s), E = null), !z && o.isListCell(A))
              if (G && o.getElementDepth(A) !== o.getElementDepth(G) && (o.isListCell(w) || o.getArrayItem(A.children, o.isList, !1))) {
                const $ = A.nextElementSibling, j = o.detachNestedList(A, !1);
                (s !== j || $ !== A.nextElementSibling) && (s = j, U = !0);
              } else {
                const $ = A;
                A = o.createElement(p ? $.nodeName : o.isList(s.parentNode) || o.isListCell(s.parentNode) ? "LI" : o.isCell(s.parentNode) ? "DIV" : n.defaultTag);
                const j = o.isListCell(A), X = $.childNodes;
                for (; X[0] && !(o.isList(X[0]) && !j); )
                  A.appendChild(X[0]);
                o.copyFormatAttributes(A, $), V = !0;
              }
            else
              A = A.cloneNode(!1);
            if (!U && (p ? (L.push(A), o.removeItem(C[R])) : (f ? (P || (w.insertBefore(f, s), P = !0), A = M(f, A, null, C[R])) : A = M(w, A, s, C[R]), U || (r ? (I = A, S || (S = A)) : S || (S = I = A))), U)) {
              U = V = !1, C = o.getListChildNodes(s, function($) {
                return $.parentNode === s;
              }), E = s.cloneNode(!1), w = s.parentNode, R = -1, H = C.length;
              continue;
            }
          }
      const F = s.parentNode;
      let D = s.nextSibling;
      E && E.children.length > 0 && F.insertBefore(E, D), f ? S = f.previousSibling : S || (S = s.previousSibling), D = s.nextSibling !== E ? s.nextSibling : E ? E.nextSibling : null, s.children.length === 0 || s.textContent.length === 0 ? o.removeItem(s) : o.removeEmptyNode(s, null, !1);
      let O = null;
      if (p)
        O = {
          cc: F,
          sc: S,
          so: m,
          ec: D,
          eo: _,
          removeArray: L
        };
      else {
        S || (S = I), I || (I = S);
        const R = o.getEdgeChildNodes(S, I.parentNode ? S : I);
        O = {
          cc: (R.sc || R.ec).parentNode,
          sc: R.sc,
          so: m,
          ec: R.ec,
          eo: _,
          removeArray: null
        };
      }
      if (this.effectNode = null, g) return O;
      !p && O && (r ? this.setRange(O.sc, m, O.ec, _) : this.setRange(O.sc, 0, O.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(s, r) {
      let f = {}, p = !1, g = !1, v = null, m = null;
      const _ = (function(C) {
        return !this.isComponent(C);
      }).bind(o);
      for (let C = 0, w = s.length, S, I, E, L; C < w; C++) {
        if (E = C === w - 1, I = o.getRangeFormatElement(s[C], _), L = o.isList(I), !S && L)
          S = I, f = { r: S, f: [o.getParentElement(s[C], "LI")] }, C === 0 && (p = !0);
        else if (S && L)
          if (S !== I) {
            const z = this.detachRangeFormatElement(f.f[0].parentNode, f.f, null, r, !0);
            I = s[C].parentNode, p && (v = z.sc, p = !1), E && (m = z.ec), L ? (S = I, f = { r: S, f: [o.getParentElement(s[C], "LI")] }, E && (g = !0)) : S = null;
          } else
            f.f.push(o.getParentElement(s[C], "LI")), E && (g = !0);
        if (E && o.isList(S)) {
          const z = this.detachRangeFormatElement(f.f[0].parentNode, f.f, null, r, !0);
          (g || w === 1) && (m = z.ec), p && (v = z.sc || m);
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
    nodeChange: function(s, r, f, p) {
      this._resetRangeToTextNode();
      let g = this.getRange_addLine(this.getRange(), null);
      r = r && r.length > 0 ? r : !1, f = f && f.length > 0 ? f : !1;
      const v = !s, m = v && !f && !r;
      let _ = g.startContainer, C = g.startOffset, w = g.endContainer, S = g.endOffset;
      if (m && g.collapsed && o.isFormatElement(_.parentNode) || _ === w && _.nodeType === 1 && o.isNonEditable(_)) {
        const X = _.parentNode;
        if (!o.isListCell(X) || !o.getValues(X.style).some((function(Y) {
          return this._listKebab.indexOf(Y) > -1;
        }).bind(this))) return;
      }
      if (g.collapsed && !m && _.nodeType === 1 && !o.isBreak(_) && !o.isComponent(_)) {
        let X = null;
        const Y = _.childNodes[C];
        Y && (Y.nextSibling ? X = o.isBreak(Y) ? Y : Y.nextSibling : X = null);
        const ne = o.createTextNode(o.zeroWidthSpace);
        _.insertBefore(ne, X), this.setRange(ne, 1, ne, 1), g = this.getRange(), _ = g.startContainer, C = g.startOffset, w = g.endContainer, S = g.endOffset;
      }
      o.isFormatElement(_) && (_ = _.childNodes[C] || _.firstChild, C = 0), o.isFormatElement(w) && (w = w.childNodes[S] || w.lastChild, S = w.textContent.length), v && (s = o.createElement("DIV"));
      const I = d.RegExp, E = s.nodeName;
      if (!m && _ === w && !f && s) {
        let X = _, Y = 0;
        const ne = [], pe = s.style;
        for (let ve = 0, fe = pe.length; ve < fe; ve++)
          ne.push(pe[ve]);
        const ge = s.classList;
        for (let ve = 0, fe = ge.length; ve < fe; ve++)
          ne.push("." + ge[ve]);
        if (ne.length > 0) {
          for (; !o.isFormatElement(X) && !o.isWysiwygDiv(X); ) {
            for (let ve = 0; ve < ne.length; ve++)
              if (X.nodeType === 1) {
                const fe = ne[ve], De = /^\./.test(fe) ? new I("\\s*" + fe.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, Ge = v ? !!X.style[fe] : !!X.style[fe] && !!s.style[fe] && X.style[fe] === s.style[fe], _e = De === !1 ? !1 : v ? !!X.className.match(De) : !!X.className.match(De) && !!s.className.match(De);
                (Ge || _e) && Y++;
              }
            X = X.parentNode;
          }
          if (Y >= ne.length) return;
        }
      }
      let L = {}, z = {}, P, U = "", V = "", M = "";
      if (r) {
        for (let X = 0, Y = r.length, ne; X < Y; X++)
          ne = r[X], /^\./.test(ne) ? V += (V ? "|" : "\\s*(?:") + ne.replace(/^\./, "") : U += (U ? "|" : "(?:;|^|\\s)(?:") + ne;
        U && (U += ")\\s*:[^;]*\\s*(?:;|$)", U = new I(U, "ig")), V && (V += ")(?=\\s+|$)", V = new I(V, "ig"));
      }
      if (f) {
        M = "^(?:" + f[0];
        for (let X = 1; X < f.length; X++)
          M += "|" + f[X];
        M += ")$", M = new I(M, "i");
      }
      const F = d.Boolean, D = { v: !1 }, O = function(X) {
        const Y = X.cloneNode(!1);
        if (Y.nodeType === 3 || o.isBreak(Y)) return Y;
        if (m) return null;
        const ne = !M && v || M && M.test(Y.nodeName);
        if (ne && !p)
          return D.v = !0, null;
        const pe = Y.style.cssText;
        let ge = "";
        U && pe.length > 0 && (ge = pe.replace(U, "").trim(), ge !== pe && (D.v = !0));
        const ve = Y.className;
        let fe = "";
        return V && ve.length > 0 && (fe = ve.replace(V, "").trim(), fe !== ve && (D.v = !0)), v && (V || !ve) && (U || !pe) && !ge && !fe && ne ? (D.v = !0, null) : ge || fe || Y.nodeName !== E || F(U) !== F(pe) || F(V) !== F(ve) ? (U && pe.length > 0 && (Y.style.cssText = ge), Y.style.cssText || Y.removeAttribute("style"), V && ve.length > 0 && (Y.className = fe.trim()), Y.className.trim() || Y.removeAttribute("class"), !Y.style.cssText && !Y.className && (Y.nodeName === E || ne) ? (D.v = !0, null) : Y) : (D.v = !0, null);
      }, R = this.getSelectedElements(null);
      g = this.getRange(), _ = g.startContainer, C = g.startOffset, w = g.endContainer, S = g.endOffset, o.getFormatElement(_, null) || (_ = o.getChildElement(R[0], function(X) {
        return X.nodeType === 3;
      }, !1), C = 0), o.getFormatElement(w, null) || (w = o.getChildElement(R[R.length - 1], function(X) {
        return X.nodeType === 3;
      }, !1), S = w.textContent.length);
      const H = o.getFormatElement(_, null) === o.getFormatElement(w, null), A = R.length - (H ? 0 : 1);
      P = s.cloneNode(!1);
      const T = m || v && function(X) {
        for (let Y = 0, ne = X.length; Y < ne; Y++)
          if (o._isMaintainedNode(X[Y]) || o._isSizeNode(X[Y])) return !0;
        return !1;
      }(f), G = v || o._isSizeNode(P), $ = this._util_getMaintainedNode.bind(o, T, G), j = this._util_isMaintainedNode.bind(o, T, G);
      if (H) {
        this._resetCommonListCell(R[0], r) && (g = this.setRange(_, C, w, S));
        const X = this._nodeChange_oneLine(R[0], P, O, _, C, w, S, m, v, g.collapsed, D, $, j);
        L.container = X.startContainer, L.offset = X.startOffset, z.container = X.endContainer, z.offset = X.endOffset, L.container === z.container && o.onlyZeroWidthSpace(L.container) && (L.offset = z.offset = 1), this._setCommonListStyle(X.ancestor, null);
      } else {
        let X = !1;
        A > 0 && this._resetCommonListCell(R[A], r) && (X = !0), this._resetCommonListCell(R[0], r) && (X = !0), X && this.setRange(_, C, w, S), A > 0 && (P = s.cloneNode(!1), z = this._nodeChange_endLine(R[A], P, O, w, S, m, v, D, $, j));
        for (let Y = A - 1, ne; Y > 0; Y--)
          this._resetCommonListCell(R[Y], r), P = s.cloneNode(!1), ne = this._nodeChange_middleLine(R[Y], P, O, m, v, D, z.container), ne.endContainer && ne.ancestor.contains(ne.endContainer) && (z.ancestor = null, z.container = ne.endContainer), this._setCommonListStyle(ne.ancestor, null);
        P = s.cloneNode(!1), L = this._nodeChange_startLine(R[0], P, O, _, C, m, v, D, $, j, z.container), L.endContainer && (z.ancestor = null, z.container = L.endContainer), A <= 0 ? z = L : z.container || (z.ancestor = null, z.container = L.container, z.offset = L.container.textContent.length), this._setCommonListStyle(L.ancestor, null), this._setCommonListStyle(z.ancestor || o.getFormatElement(z.container), null);
      }
      this.controllersOff(), this.setRange(L.container, L.offset, z.container, z.offset), this.history.push(!1);
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
      const f = o.getArrayItem(s.childNodes, function(I) {
        return !o.isBreak(I);
      }, !0), p = s.style, g = [], v = [], m = o.getValues(p);
      for (let I = 0, E = this._listKebab.length; I < E; I++)
        m.indexOf(this._listKebab[I]) > -1 && r.indexOf(this._listKebab[I]) > -1 && (g.push(this._listCamel[I]), v.push(this._listKebab[I]));
      if (!g.length) return;
      const _ = o.createElement("SPAN");
      for (let I = 0, E = g.length; I < E; I++)
        _.style[g[I]] = p[v[I]], p.removeProperty(v[I]);
      let C = _.cloneNode(!1), w = null, S = !1;
      for (let I = 0, E = f.length, L, z; I < E; I++)
        L = f[I], !n._textTagsMap[L.nodeName.toLowerCase()] && (z = o.getValues(L.style), z.length === 0 || g.some(function(P) {
          return z.indexOf(P) === -1;
        }) && z.some(function(P) {
        }) ? (w = L.nextSibling, C.appendChild(L)) : C.childNodes.length > 0 && (s.insertBefore(C, w), C = _.cloneNode(!1), w = null, S = !0));
      return C.childNodes.length > 0 && (s.insertBefore(C, w), S = !0), p.length || s.removeAttribute("style"), S;
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
      const p = r.style, g = s.style, v = r.nodeName.toLowerCase();
      let m = !1;
      n._textTagsMap[v] === n._defaultCommand.bold.toLowerCase() && (g.fontWeight = "bold"), n._textTagsMap[v] === n._defaultCommand.italic.toLowerCase() && (g.fontStyle = "italic");
      const _ = o.getValues(p);
      if (_.length > 0)
        for (let C = 0, w = this._listCamel.length; C < w; C++)
          _.indexOf(this._listKebab[C]) > -1 && (g[this._listCamel[C]] = p[this._listCamel[C]], p.removeProperty(this._listKebab[C]), m = !0);
      if (this._setCommonListStyle(s, r), !!m && !p.length) {
        const C = r.childNodes, w = r.parentNode, S = r.nextSibling;
        for (; C.length > 0; )
          w.insertBefore(C[0], S);
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
    _nodeChange_oneLine: function(s, r, f, p, g, v, m, _, C, w, S, I, E) {
      let L = p.parentNode;
      for (; !L.nextSibling && !L.previousSibling && !o.isFormatElement(L.parentNode) && !o.isWysiwygDiv(L.parentNode) && L.nodeName !== r.nodeName; )
        L = L.parentNode;
      if (!C && L === v.parentNode && L.nodeName === r.nodeName && o.onlyZeroWidthSpace(p.textContent.slice(0, g)) && o.onlyZeroWidthSpace(v.textContent.slice(m))) {
        const _e = L.childNodes;
        let Fe = !0;
        for (let Le = 0, mt = _e.length, Ye, Ke, Pe, we; Le < mt; Le++) {
          if (Ye = _e[Le], we = !o.onlyZeroWidthSpace(Ye), Ye === p) {
            Ke = !0;
            continue;
          }
          if (Ye === v) {
            Pe = !0;
            continue;
          }
          if (!Ke && we || Ke && Pe && we) {
            Fe = !1;
            break;
          }
        }
        if (Fe)
          return o.copyTagAttributes(L, r), {
            ancestor: s,
            startContainer: p,
            startOffset: g,
            endContainer: v,
            endOffset: m
          };
      }
      S.v = !1;
      const z = s, P = [r], U = s.cloneNode(!1), V = p === v;
      let M = p, F = g, D = v, O = m, R = !1, H = !1, A, T, G, $, j;
      const X = d.RegExp;
      function Y(_e) {
        const Fe = new X("(?:;|^|\\s)(?:" + $ + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let Le = "";
        return Fe && _e.style.cssText.length > 0 && (Le = Fe.test(_e.style.cssText)), !Le;
      }
      if (function _e(Fe, Le) {
        const mt = Fe.childNodes;
        for (let Ye = 0, Ke = mt.length, Pe; Ye < Ke; Ye++) {
          let we = mt[Ye];
          if (!we) continue;
          let Lt = Le, st;
          if (!R && we === M) {
            let Xe = U;
            j = I(we);
            const Me = o.createTextNode(M.nodeType === 1 ? "" : M.substringData(0, F)), $e = o.createTextNode(
              M.nodeType === 1 ? "" : M.substringData(
                F,
                V && O >= F ? O - F : M.data.length - F
              )
            );
            if (j) {
              const Bt = I(Le);
              if (Bt && Bt.parentNode !== Xe) {
                let at = Bt, Mt = null;
                for (; at.parentNode !== Xe; ) {
                  for (Le = Mt = at.parentNode.cloneNode(!1); at.childNodes[0]; )
                    Mt.appendChild(at.childNodes[0]);
                  at.appendChild(Mt), at = at.parentNode;
                }
                at.parentNode.appendChild(Bt);
              }
              j = j.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(Me) || Le.appendChild(Me);
            const Ue = I(Le);
            for (Ue && (j = Ue), j && (Xe = j), T = we, A = [], $ = ""; T !== Xe && T !== z && T !== null; )
              Pe = E(T) ? null : f(T), Pe && T.nodeType === 1 && Y(T) && (A.push(Pe), $ += T.style.cssText.substr(0, T.style.cssText.indexOf(":")) + "|"), T = T.parentNode;
            const Nt = A.pop() || $e;
            for (G = T = Nt; A.length > 0; )
              T = A.pop(), G.appendChild(T), G = T;
            if (r.appendChild(Nt), Xe.appendChild(r), j && !I(D) && (r = r.cloneNode(!1), U.appendChild(r), P.push(r)), M = $e, F = 0, R = !0, T !== $e && T.appendChild(M), !V) continue;
          }
          if (!H && we === D) {
            j = I(we);
            const Xe = o.createTextNode(D.nodeType === 1 ? "" : D.substringData(O, D.length - O)), Me = o.createTextNode(V || D.nodeType === 1 ? "" : D.substringData(0, O));
            if (j ? j = j.cloneNode(!1) : E(r.parentNode) && !j && (r = r.cloneNode(!1), U.appendChild(r), P.push(r)), !o.onlyZeroWidthSpace(Xe)) {
              T = we, $ = "", A = [];
              const Ue = [];
              for (; T !== U && T !== z && T !== null; )
                T.nodeType === 1 && Y(T) && (E(T) ? Ue.push(T.cloneNode(!1)) : A.push(T.cloneNode(!1)), $ += T.style.cssText.substr(0, T.style.cssText.indexOf(":")) + "|"), T = T.parentNode;
              for (A = A.concat(Ue), st = G = T = A.pop() || Xe; A.length > 0; )
                T = A.pop(), G.appendChild(T), G = T;
              U.appendChild(st), T.textContent = Xe.data;
            }
            if (j && st) {
              const Ue = I(st);
              Ue && (j = Ue);
            }
            for (T = we, A = [], $ = ""; T !== U && T !== z && T !== null; )
              Pe = E(T) ? null : f(T), Pe && T.nodeType === 1 && Y(T) && (A.push(Pe), $ += T.style.cssText.substr(0, T.style.cssText.indexOf(":")) + "|"), T = T.parentNode;
            const $e = A.pop() || Me;
            for (G = T = $e; A.length > 0; )
              T = A.pop(), G.appendChild(T), G = T;
            j ? (r = r.cloneNode(!1), r.appendChild($e), j.insertBefore(r, j.firstChild), U.appendChild(j), P.push(r), j = null) : r.appendChild($e), D = Me, O = Me.data.length, H = !0, !_ && w && (r = Me, Me.textContent = o.zeroWidthSpace), T !== Me && T.appendChild(D);
            continue;
          }
          if (R) {
            if (we.nodeType === 1 && !o.isBreak(we)) {
              o._isIgnoreNodeChange(we) ? (U.appendChild(we.cloneNode(!0)), w || (r = r.cloneNode(!1), U.appendChild(r), P.push(r))) : _e(we, we);
              continue;
            }
            T = we, A = [], $ = "";
            const Xe = [];
            for (; T.parentNode !== null && T !== z && T !== r; )
              Pe = H ? T.cloneNode(!1) : f(T), T.nodeType === 1 && !o.isBreak(we) && Pe && Y(T) && (E(T) ? j || Xe.push(Pe) : A.push(Pe), $ += T.style.cssText.substr(0, T.style.cssText.indexOf(":")) + "|"), T = T.parentNode;
            A = A.concat(Xe);
            const Me = A.pop() || we;
            for (G = T = Me; A.length > 0; )
              T = A.pop(), G.appendChild(T), G = T;
            if (E(r.parentNode) && !E(Me) && !o.onlyZeroWidthSpace(r) && (r = r.cloneNode(!1), U.appendChild(r), P.push(r)), !H && !j && E(Me)) {
              r = r.cloneNode(!1);
              const $e = Me.childNodes;
              for (let Ue = 0, Nt = $e.length; Ue < Nt; Ue++)
                r.appendChild($e[Ue]);
              Me.appendChild(r), U.appendChild(Me), P.push(r), r.children.length > 0 ? Le = T : Le = r;
            } else Me === we ? H ? Le = U : Le = r : H ? (U.appendChild(Me), Le = T) : (r.appendChild(Me), Le = T);
            if (j && we.nodeType === 3)
              if (I(we)) {
                const $e = o.getParentElement(Le, (function(Ue) {
                  return this._isMaintainedNode(Ue.parentNode) || Ue.parentNode === U;
                }).bind(o));
                j.appendChild($e), r = $e.cloneNode(!1), P.push(r), U.appendChild(r);
              } else
                j = null;
          }
          st = we.cloneNode(!1), Le.appendChild(st), we.nodeType === 1 && !o.isBreak(we) && (Lt = st), _e(we, Lt);
        }
      }(s, U), C && !_ && !S.v)
        return {
          ancestor: s,
          startContainer: p,
          startOffset: g,
          endContainer: v,
          endOffset: m
        };
      if (_ = _ && C, _)
        for (let _e = 0; _e < P.length; _e++) {
          let Fe = P[_e], Le, mt, Ye;
          if (w)
            Le = o.createTextNode(o.zeroWidthSpace), U.replaceChild(Le, Fe);
          else {
            const Ke = Fe.childNodes;
            for (mt = Ke[0]; Ke[0]; )
              Ye = Ke[0], U.insertBefore(Ye, Fe);
            o.removeItem(Fe);
          }
          _e === 0 && (w ? M = D = Le : (M = mt, D = Ye));
        }
      else {
        if (C)
          for (let _e = 0; _e < P.length; _e++)
            this._stripRemoveNode(P[_e]);
        w && (M = D = r);
      }
      o.removeEmptyNode(U, r, !1), w && (F = M.textContent.length, O = D.textContent.length);
      const ne = _ || D.textContent.length === 0;
      !o.isBreak(D) && D.textContent.length === 0 && (o.removeItem(D), D = M), O = ne ? D.textContent.length : O;
      const pe = { s: 0, e: 0 }, ge = o.getNodePath(M, U, pe), ve = !D.parentNode;
      ve && (D = M);
      const fe = { s: 0, e: 0 }, De = o.getNodePath(D, U, !ve && !ne ? fe : null);
      F += pe.s, O = w ? F : ve ? M.textContent.length : ne ? O + pe.s : O + fe.s;
      const Ge = o.mergeSameTags(U, [ge, De], !0);
      return s.parentNode.replaceChild(U, s), M = o.getNodeFromPath(ge, U), D = o.getNodeFromPath(De, U), {
        ancestor: U,
        startContainer: M,
        startOffset: F + Ge[0],
        endContainer: D,
        endOffset: O + Ge[1]
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
    _nodeChange_startLine: function(s, r, f, p, g, v, m, _, C, w, S) {
      let I = p.parentNode;
      for (; !I.nextSibling && !I.previousSibling && !o.isFormatElement(I.parentNode) && !o.isWysiwygDiv(I.parentNode) && I.nodeName !== r.nodeName; )
        I = I.parentNode;
      if (!m && I.nodeName === r.nodeName && !o.isFormatElement(I) && !I.nextSibling && o.onlyZeroWidthSpace(p.textContent.slice(0, g))) {
        let R = !0, H = p.previousSibling;
        for (; H; ) {
          if (!o.onlyZeroWidthSpace(H)) {
            R = !1;
            break;
          }
          H = H.previousSibling;
        }
        if (R)
          return o.copyTagAttributes(I, r), {
            ancestor: s,
            container: p,
            offset: g
          };
      }
      _.v = !1;
      const E = s, L = [r], z = s.cloneNode(!1);
      let P = p, U = g, V = !1, M, F, D, O;
      if (function R(H, A) {
        const T = H.childNodes;
        for (let G = 0, $ = T.length, j, X; G < $; G++) {
          const Y = T[G];
          if (!Y) continue;
          let ne = A;
          if (V && !o.isBreak(Y)) {
            if (Y.nodeType === 1) {
              if (o._isIgnoreNodeChange(Y)) {
                if (r = r.cloneNode(!1), X = Y.cloneNode(!0), z.appendChild(X), z.appendChild(r), L.push(r), S && Y.contains(S)) {
                  const fe = o.getNodePath(S, Y);
                  S = o.getNodeFromPath(fe, X);
                }
              } else
                R(Y, Y);
              continue;
            }
            F = Y, M = [];
            const pe = [];
            for (; F.parentNode !== null && F !== E && F !== r; )
              j = f(F), F.nodeType === 1 && j && (w(F) ? O || pe.push(j) : M.push(j)), F = F.parentNode;
            M = M.concat(pe);
            const ge = M.length > 0, ve = M.pop() || Y;
            for (D = F = ve; M.length > 0; )
              F = M.pop(), D.appendChild(F), D = F;
            if (w(r.parentNode) && !w(ve) && (r = r.cloneNode(!1), z.appendChild(r), L.push(r)), !O && w(ve)) {
              r = r.cloneNode(!1);
              const fe = ve.childNodes;
              for (let De = 0, Ge = fe.length; De < Ge; De++)
                r.appendChild(fe[De]);
              ve.appendChild(r), z.appendChild(ve), A = w(F) ? r : F, L.push(r);
            } else ge ? (r.appendChild(ve), A = F) : A = r;
            if (O && Y.nodeType === 3)
              if (C(Y)) {
                const fe = o.getParentElement(A, (function(De) {
                  return this._isMaintainedNode(De.parentNode) || De.parentNode === z;
                }).bind(o));
                O.appendChild(fe), r = fe.cloneNode(!1), L.push(r), z.appendChild(r);
              } else
                O = null;
          }
          if (!V && Y === P) {
            let pe = z;
            O = C(Y);
            const ge = o.createTextNode(P.nodeType === 1 ? "" : P.substringData(0, U)), ve = o.createTextNode(P.nodeType === 1 ? "" : P.substringData(U, P.length - U));
            if (O) {
              const Ge = C(A);
              if (Ge && Ge.parentNode !== pe) {
                let _e = Ge, Fe = null;
                for (; _e.parentNode !== pe; ) {
                  for (A = Fe = _e.parentNode.cloneNode(!1); _e.childNodes[0]; )
                    Fe.appendChild(_e.childNodes[0]);
                  _e.appendChild(Fe), _e = _e.parentNode;
                }
                _e.parentNode.appendChild(Ge);
              }
              O = O.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(ge) || A.appendChild(ge);
            const fe = C(A);
            for (fe && (O = fe), O && (pe = O), F = A, M = []; F !== pe && F !== null; )
              j = f(F), F.nodeType === 1 && j && M.push(j), F = F.parentNode;
            const De = M.pop() || A;
            for (D = F = De; M.length > 0; )
              F = M.pop(), D.appendChild(F), D = F;
            De !== A ? (r.appendChild(De), A = F) : A = r, o.isBreak(Y) && r.appendChild(Y.cloneNode(!1)), pe.appendChild(r), P = ve, U = 0, V = !0, A.appendChild(P);
            continue;
          }
          j = V ? f(Y) : Y.cloneNode(!1), j && (A.appendChild(j), Y.nodeType === 1 && !o.isBreak(Y) && (ne = j)), R(Y, ne);
        }
      }(s, z), m && !v && !_.v)
        return {
          ancestor: s,
          container: p,
          offset: g,
          endContainer: S
        };
      if (v = v && m, v)
        for (let R = 0; R < L.length; R++) {
          let H = L[R];
          const A = H.childNodes, T = A[0];
          for (; A[0]; )
            z.insertBefore(A[0], H);
          o.removeItem(H), R === 0 && (P = T);
        }
      else if (m) {
        r = r.firstChild;
        for (let R = 0; R < L.length; R++)
          this._stripRemoveNode(L[R]);
      }
      if (!v && z.childNodes.length === 0)
        s.childNodes ? P = s.childNodes[0] : (P = o.createTextNode(o.zeroWidthSpace), s.appendChild(P));
      else {
        o.removeEmptyNode(z, r, !1), o.onlyZeroWidthSpace(z.textContent) && (P = z.firstChild, U = 0);
        const R = { s: 0, e: 0 }, H = o.getNodePath(P, z, R);
        U += R.s;
        const A = o.mergeSameTags(z, [H], !0);
        s.parentNode.replaceChild(z, s), P = o.getNodeFromPath(H, z), U += A[0];
      }
      return {
        ancestor: z,
        container: P,
        offset: U,
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
    _nodeChange_middleLine: function(s, r, f, p, g, v, m) {
      if (!g) {
        let S = null;
        m && s.contains(m) && (S = o.getNodePath(m, s));
        const I = s.cloneNode(!0), E = r.nodeName, L = r.style.cssText, z = r.className;
        let P = I.childNodes, U = 0, V = P.length;
        for (let M; U < V && (M = P[U], M.nodeType !== 3); U++)
          if (M.nodeName === E)
            M.style.cssText += L, o.addClass(M, z);
          else {
            if (!o.isBreak(M) && o._isIgnoreNodeChange(M))
              continue;
            if (V === 1) {
              P = M.childNodes, V = P.length, U = -1;
              continue;
            } else
              break;
          }
        if (V > 0 && U === V)
          return s.innerHTML = I.innerHTML, {
            ancestor: s,
            endContainer: S ? o.getNodeFromPath(S, s) : null
          };
      }
      v.v = !1;
      const _ = s.cloneNode(!1), C = [r];
      let w = !0;
      if (function S(I, E) {
        const L = I.childNodes;
        for (let z = 0, P = L.length, U, V; z < P; z++) {
          let M = L[z];
          if (!M) continue;
          let F = E;
          if (!o.isBreak(M) && o._isIgnoreNodeChange(M)) {
            if (r.childNodes.length > 0 && (_.appendChild(r), r = r.cloneNode(!1)), V = M.cloneNode(!0), _.appendChild(V), _.appendChild(r), C.push(r), E = r, m && M.contains(m)) {
              const D = o.getNodePath(m, M);
              m = o.getNodeFromPath(D, V);
            }
            continue;
          } else
            U = f(M), U && (w = !1, E.appendChild(U), M.nodeType === 1 && (F = U));
          o.isBreak(M) || S(M, F);
        }
      }(s, r), w || g && !p && !v.v) return { ancestor: s, endContainer: m };
      if (_.appendChild(r), p && g)
        for (let S = 0; S < C.length; S++) {
          let I = C[S];
          const E = I.childNodes;
          for (; E[0]; )
            _.insertBefore(E[0], I);
          o.removeItem(I);
        }
      else if (g) {
        r = r.firstChild;
        for (let S = 0; S < C.length; S++)
          this._stripRemoveNode(C[S]);
      }
      return o.removeEmptyNode(_, r, !1), o.mergeSameTags(_, null, !0), s.parentNode.replaceChild(_, s), { ancestor: _, endContainer: m };
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
    _nodeChange_endLine: function(s, r, f, p, g, v, m, _, C, w) {
      let S = p.parentNode;
      for (; !S.nextSibling && !S.previousSibling && !o.isFormatElement(S.parentNode) && !o.isWysiwygDiv(S.parentNode) && S.nodeName !== r.nodeName; )
        S = S.parentNode;
      if (!m && S.nodeName === r.nodeName && !o.isFormatElement(S) && !S.previousSibling && o.onlyZeroWidthSpace(p.textContent.slice(g))) {
        let O = !0, R = p.nextSibling;
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
            container: p,
            offset: g
          };
      }
      _.v = !1;
      const I = s, E = [r], L = s.cloneNode(!1);
      let z = p, P = g, U = !1, V, M, F, D;
      if (function O(R, H) {
        const A = R.childNodes;
        for (let T = A.length - 1, G; 0 <= T; T--) {
          const $ = A[T];
          if (!$) continue;
          let j = H;
          if (U && !o.isBreak($)) {
            if ($.nodeType === 1) {
              if (o._isIgnoreNodeChange($)) {
                r = r.cloneNode(!1);
                const pe = $.cloneNode(!0);
                L.insertBefore(pe, H), L.insertBefore(r, pe), E.push(r);
              } else
                O($, $);
              continue;
            }
            M = $, V = [];
            const X = [];
            for (; M.parentNode !== null && M !== I && M !== r; )
              G = f(M), G && M.nodeType === 1 && (w(M) ? D || X.push(G) : V.push(G)), M = M.parentNode;
            V = V.concat(X);
            const Y = V.length > 0, ne = V.pop() || $;
            for (F = M = ne; V.length > 0; )
              M = V.pop(), F.appendChild(M), F = M;
            if (w(r.parentNode) && !w(ne) && (r = r.cloneNode(!1), L.insertBefore(r, L.firstChild), E.push(r)), !D && w(ne)) {
              r = r.cloneNode(!1);
              const pe = ne.childNodes;
              for (let ge = 0, ve = pe.length; ge < ve; ge++)
                r.appendChild(pe[ge]);
              ne.appendChild(r), L.insertBefore(ne, L.firstChild), E.push(r), r.children.length > 0 ? H = M : H = r;
            } else Y ? (r.insertBefore(ne, r.firstChild), H = M) : H = r;
            if (D && $.nodeType === 3)
              if (C($)) {
                const pe = o.getParentElement(H, (function(ge) {
                  return this._isMaintainedNode(ge.parentNode) || ge.parentNode === L;
                }).bind(o));
                D.appendChild(pe), r = pe.cloneNode(!1), E.push(r), L.insertBefore(r, L.firstChild);
              } else
                D = null;
          }
          if (!U && $ === z) {
            D = C($);
            const X = o.createTextNode(z.nodeType === 1 ? "" : z.substringData(P, z.length - P)), Y = o.createTextNode(z.nodeType === 1 ? "" : z.substringData(0, P));
            if (D) {
              D = D.cloneNode(!1);
              const pe = C(H);
              if (pe && pe.parentNode !== L) {
                let ge = pe, ve = null;
                for (; ge.parentNode !== L; ) {
                  for (H = ve = ge.parentNode.cloneNode(!1); ge.childNodes[0]; )
                    ve.appendChild(ge.childNodes[0]);
                  ge.appendChild(ve), ge = ge.parentNode;
                }
                ge.parentNode.insertBefore(pe, ge.parentNode.firstChild);
              }
              D = D.cloneNode(!1);
            } else w(r.parentNode) && !D && (r = r.cloneNode(!1), L.appendChild(r), E.push(r));
            for (o.onlyZeroWidthSpace(X) || H.insertBefore(X, H.firstChild), M = H, V = []; M !== L && M !== null; )
              G = w(M) ? null : f(M), G && M.nodeType === 1 && V.push(G), M = M.parentNode;
            const ne = V.pop() || H;
            for (F = M = ne; V.length > 0; )
              M = V.pop(), F.appendChild(M), F = M;
            ne !== H ? (r.insertBefore(ne, r.firstChild), H = M) : H = r, o.isBreak($) && r.appendChild($.cloneNode(!1)), D ? (D.insertBefore(r, D.firstChild), L.insertBefore(D, L.firstChild), D = null) : L.insertBefore(r, L.firstChild), z = Y, P = Y.data.length, U = !0, H.insertBefore(z, H.firstChild);
            continue;
          }
          G = U ? f($) : $.cloneNode(!1), G && (H.insertBefore(G, H.firstChild), $.nodeType === 1 && !o.isBreak($) && (j = G)), O($, j);
        }
      }(s, L), m && !v && !_.v)
        return {
          ancestor: s,
          container: p,
          offset: g
        };
      if (v = v && m, v)
        for (let O = 0; O < E.length; O++) {
          let R = E[O];
          const H = R.childNodes;
          let A = null;
          for (; H[0]; )
            A = H[0], L.insertBefore(A, R);
          o.removeItem(R), O === E.length - 1 && (z = A, P = A.textContent.length);
        }
      else if (m) {
        r = r.firstChild;
        for (let O = 0; O < E.length; O++)
          this._stripRemoveNode(E[O]);
      }
      if (!v && L.childNodes.length === 0)
        s.childNodes ? z = s.childNodes[0] : (z = o.createTextNode(o.zeroWidthSpace), s.appendChild(z));
      else {
        if (!m && r.textContent.length === 0)
          return o.removeEmptyNode(L, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        o.removeEmptyNode(L, r, !1), o.onlyZeroWidthSpace(L.textContent) ? (z = L.firstChild, P = z.textContent.length) : o.onlyZeroWidthSpace(z) && (z = r, P = 1);
        const O = { s: 0, e: 0 }, R = o.getNodePath(z, L, O);
        P += O.s;
        const H = o.mergeSameTags(L, [R], !0);
        s.parentNode.replaceChild(L, s), z = o.getNodeFromPath(R, L), P += H[0];
      }
      return {
        ancestor: L,
        container: z,
        offset: z.nodeType === 1 && P === 1 ? z.childNodes.length : P
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
            p && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = f, p.style.display = "block", b._showToolbarBalloon(), b._showToolbarInline()), o.addClass(f, "on");
          } else
            e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")) && (this.moreLayerOff(), b._showToolbarBalloon(), b._showToolbarInline());
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
            const f = e.element.wysiwyg;
            let p = o.getChildElement(f.firstChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !1) || f.firstChild, g = o.getChildElement(f.lastChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !0) || f.lastChild;
            if (!p || !g) return;
            if (o.isMedia(p)) {
              const C = this.getFileComponent(p), w = o.createElement("BR"), S = o.createElement(n.defaultTag);
              S.appendChild(w), p = C ? C.component : p, p.parentNode.insertBefore(S, p), p = w;
            }
            if (o.isMedia(g)) {
              const C = o.createElement("BR"), w = o.createElement(n.defaultTag);
              w.appendChild(C), f.appendChild(w), g = C;
            }
            b._showToolbarBalloon(this.setRange(p, 0, g, g.textContent.length));
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
            else if (this._variable.isChanged && typeof y.save == "function")
              y.save();
            else
              throw Error("[SUNEDITOR.core.commandHandler.fail] Please register call back function in creation option. (callBackSave : Function)");
            this._variable.isChanged = !1, e.tool.save && e.tool.save.setAttribute("disabled", !0);
            break;
          default:
            r = n._defaultCommand[r.toLowerCase()] || r, this.commandMap[r] || (this.commandMap[r] = s);
            const v = this._variable.currentNodesMap, m = v.indexOf(r) > -1 ? null : o.createElement(r);
            let _ = r;
            /^SUB$/i.test(r) && v.indexOf("SUP") > -1 ? _ = "SUP" : /^SUP$/i.test(r) && v.indexOf("SUB") > -1 && (_ = "SUB"), this.nodeChange(m, this._commandMapStyles[r] || null, [_], !1), this.focus();
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
      const r = this.getRange(), f = this.getSelectedElements(null), p = [], g = s !== "indent", v = n.rtl ? "marginRight" : "marginLeft";
      let m = r.startContainer, _ = r.endContainer, C = r.startOffset, w = r.endOffset;
      for (let S = 0, I = f.length, E, L; S < I; S++)
        E = f[S], !o.isListCell(E) || !this.plugins.list ? (L = /\d+/.test(E.style[v]) ? o.getNumber(E.style[v], 0) : 0, g ? L -= 25 : L += 25, o.setStyle(E, v, L <= 0 ? "" : L + "px")) : (g || E.previousElementSibling) && p.push(E);
      p.length > 0 && this.plugins.list.editInsideList.call(this, g, p), this.effectNode = null, this.setRange(m, C, _, w), this.history.push(!1);
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
      this.controllersOff(), o.setDisabledButtons(!s, this.codeViewDisabledButtons), s ? (o.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), n.height === "auto" && !n.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(n.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, b._hideToolbar())), this.nativeFocus(), o.removeClass(this._styleCommandMap.codeView, "active"), o.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : n.height === "auto" && !n.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), n.codeMirrorEditor && n.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, b._showToolbarInline())), this._variable._range = null, e.element.code.focus(), o.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && o.setDisabledButtons(!0, this.resizingDisabledButtons), typeof y.toggleCodeView == "function" && y.toggleCodeView(this._variable.isCodeView, this);
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
          const g = r.head.children;
          for (let v = 0, m = g.length; v < m; v++)
            /^script$/i.test(g[v].tagName) && (r.head.removeChild(g[v]), v--, m--);
        }
        let f = r.head.innerHTML;
        (!r.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !r.head.querySelector("style")) && (f += o._setIframeCssTags(this.options)), this._wd.head.innerHTML = f, this._wd.body.innerHTML = this.convertContentsForEditor(r.body.innerHTML);
        const p = r.body.attributes;
        for (let g = 0, v = p.length; g < v; g++)
          p[g].name !== "contenteditable" && this._wd.body.setAttribute(p[g].name, p[g].value);
        if (!o.hasClass(this._wd.body, "sun-editor-editable")) {
          const g = n._editableClass.split(" ");
          for (let v = 0; v < g.length; v++)
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
      const r = e.element.topArea, f = e.element.toolbar, p = e.element.editorArea, g = e.element.wysiwygFrame, v = e.element.code, m = this._variable;
      this.controllersOff();
      const _ = f.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      m.isFullScreen ? (m.isFullScreen = !1, g.style.cssText = m._wysiwygOriginCssText, v.style.cssText = m._codeOriginCssText, f.style.cssText = "", p.style.cssText = m._editorAreaOriginCssText, r.style.cssText = m._originCssText, c.body.style.overflow = m._bodyOverflow, n.height === "auto" && !n.codeMirrorEditor && b._codeViewAutoHeight(), n.toolbarContainer && n.toolbarContainer.appendChild(f), n.stickyToolbar > -1 && o.removeClass(f, "se-toolbar-sticky"), m._fullScreenAttrs.sticky && !n.toolbarContainer && (m._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", o.addClass(f, "se-toolbar-sticky")), this._isInline = m._fullScreenAttrs.inline, this._isBalloon = m._fullScreenAttrs.balloon, this._isInline && b._showToolbarInline(), n.toolbarContainer && o.removeClass(f, "se-toolbar-balloon"), b.onScroll_window(), s && o.changeElement(s.firstElementChild, h.expansion), e.element.topArea.style.marginTop = "", o.removeClass(this._styleCommandMap.fullScreen, "active")) : (m.isFullScreen = !0, m._fullScreenAttrs.inline = this._isInline, m._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), n.toolbarContainer && e.element.relative.insertBefore(f, p), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.maxWidth = "100%", r.style.height = "100%", r.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (m._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", o.removeClass(f, "se-toolbar-sticky")), m._bodyOverflow = c.body.style.overflow, c.body.style.overflow = "hidden", m._editorAreaOriginCssText = p.style.cssText, m._wysiwygOriginCssText = g.style.cssText, m._codeOriginCssText = v.style.cssText, p.style.cssText = f.style.cssText = "", g.style.cssText = (g.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + n._editorStyles.editor, v.style.cssText = (v.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], f.style.width = g.style.height = v.style.height = "100%", f.style.position = "relative", f.style.display = "block", m.innerHeight_fullScreen = d.innerHeight - f.offsetHeight, p.style.height = m.innerHeight_fullScreen - n.fullScreenOffset + "px", s && o.changeElement(s.firstElementChild, h.reduction), n.iframe && n.height === "auto" && (p.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = n.fullScreenOffset + "px", o.addClass(this._styleCommandMap.fullScreen, "active")), _ && y.toolbar.hide(), typeof y.toggleFullScreen == "function" && y.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const s = o.createElement("IFRAME");
      s.style.display = "none", c.body.appendChild(s);
      const r = n.printTemplate ? n.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), f = o.getIframeDocument(s), p = this._wd;
      if (n.iframe) {
        const g = n._printClass !== null ? 'class="' + n._printClass + '"' : n.fullPage ? o.getAttributesToString(p.body, ["contenteditable"]) : 'class="' + n._editableClass + '"';
        f.write(
          "<!DOCTYPE html><html><head>" + p.head.innerHTML + "</head><body " + g + ">" + r + "</body></html>"
        );
      } else {
        const g = c.head.getElementsByTagName("link"), v = c.head.getElementsByTagName("style");
        let m = "";
        for (let _ = 0, C = g.length; _ < C; _++)
          m += g[_].outerHTML;
        for (let _ = 0, C = v.length; _ < C; _++)
          m += v[_].outerHTML;
        f.write(
          "<!DOCTYPE html><html><head>" + m + '</head><body class="' + (n._printClass !== null ? n._printClass : n._editableClass) + '">' + r + "</body></html>"
        );
      }
      this.showLoading(), d.setTimeout(function() {
        try {
          if (s.focus(), o.isIE_Edge || o.isChromium || c.documentMode || d.StyleMedia)
            try {
              s.contentWindow.document.execCommand("print", !1, null);
            } catch {
              s.contentWindow.print();
            }
          else
            s.contentWindow.print();
        } catch (g) {
          throw Error("[SUNEDITOR.core.print.fail] error: " + g);
        } finally {
          u.closeLoading(), o.removeItem(s);
        }
      }, 1e3);
    },
    /**
     * @description Open the preview window.
     */
    preview: function() {
      u.submenuOff(), u.containerOff(), u.controllersOff();
      const s = n.previewTemplate ? n.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), r = d.open("", "_blank");
      r.mimeType = "text/html";
      const f = this._wd;
      if (n.iframe) {
        const p = n._printClass !== null ? 'class="' + n._printClass + '"' : n.fullPage ? o.getAttributesToString(f.body, ["contenteditable"]) : 'class="' + n._editableClass + '"';
        r.document.write(
          "<!DOCTYPE html><html><head>" + f.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + p + ">" + s + "</body></html>"
        );
      } else {
        const p = c.head.getElementsByTagName("link"), g = c.head.getElementsByTagName("style");
        let v = "";
        for (let m = 0, _ = p.length; m < _; m++)
          v += p[m].outerHTML;
        for (let m = 0, _ = g.length; m < _; m++)
          v += g[m].outerHTML;
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
      const r = s === "rtl", f = this._prevRtl !== r;
      this._prevRtl = n.rtl = r, f && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && o.changeElement(e.tool.indent.firstElementChild, h.indent), e.tool.outdent && o.changeElement(e.tool.outdent.firstElementChild, h.outdent));
      const p = e.element;
      r ? (o.addClass(p.topArea, "se-rtl"), o.addClass(p.wysiwygFrame, "se-rtl")) : (o.removeClass(p.topArea, "se-rtl"), o.removeClass(p.wysiwygFrame, "se-rtl"));
      const g = o.getListChildren(p.wysiwyg, function(m) {
        return o.isFormatElement(m) && (m.style.marginRight || m.style.marginLeft || m.style.textAlign);
      });
      for (let m = 0, _ = g.length, C, w, S; m < _; m++)
        C = g[m], S = C.style.marginRight, w = C.style.marginLeft, (S || w) && (C.style.marginRight = w, C.style.marginLeft = S), S = C.style.textAlign, S === "left" ? C.style.textAlign = "right" : S === "right" && (C.style.textAlign = "left");
      const v = e.tool;
      v.dir && (o.changeTxt(v.dir.querySelector(".se-tooltip-text"), l.toolbar[n.rtl ? "dir_ltr" : "dir_rtl"]), o.changeElement(v.dir.firstElementChild, h[n.rtl ? "dir_ltr" : "dir_rtl"])), v.dir_ltr && (r ? o.removeClass(v.dir_ltr, "active") : o.addClass(v.dir_ltr, "active")), v.dir_rtl && (r ? o.addClass(v.dir_rtl, "active") : o.removeClass(v.dir_rtl, "active"));
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
      if (!n.iframe) return !1;
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
      const p = o.getListChildren(f, function(g) {
        return g.hasAttribute("contenteditable");
      });
      for (let g = 0, v = p.length; g < v; g++)
        p[g].removeAttribute("contenteditable");
      if (n.fullPage && !s) {
        const g = o.getAttributesToString(this._wd.body, ["contenteditable"]);
        return "<!DOCTYPE html><html>" + this._wd.head.outerHTML + "<body " + g + ">" + f.innerHTML + "</body></html>";
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
      const f = n.defaultTag;
      if (s.nodeType === 1) {
        if (this.__disallowedTagNameRegExp.test(s.nodeName)) return "";
        if (/__se__tag/.test(s.className)) return s.outerHTML;
        const p = o.getListChildNodes(s, function(g) {
          return o.isSpanWithoutAttr(g) && !o.getParentElement(g, o.isNotCheckingNode);
        }) || [];
        for (let g = p.length - 1; g >= 0; g--)
          p[g].outerHTML = p[g].innerHTML;
        return !r || o.isFormatElement(s) || o.isRangeFormatElement(s) || o.isComponent(s) || o.isFigures(s) || o.isAnchor(s) && o.isMedia(s.firstElementChild) ? o.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML : "<" + f + ">" + (o.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML) + "</" + f + ">";
      }
      if (s.nodeType === 3) {
        if (!r) return o._HTMLConvertor(s.textContent);
        const p = s.textContent.split(/\n/g);
        let g = "";
        for (let v = 0, m = p.length, _; v < m; v++)
          _ = p[v].trim(), _.length > 0 && (g += "<" + f + ">" + o._HTMLConvertor(_) + "</" + f + ">");
        return g;
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
      return s.replace(this._disallowedTextTagsRegExp, function(f, p, g, v) {
        return p + (typeof r[g] == "string" ? r[g] : g) + (v ? " " + v : "");
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
      const f = this._w.Math, p = r.match(/(\d+(?:\.\d+)?)(.+)/), g = p ? p[1] * 1 : o.fontValueMap[r], v = p ? p[2] : "rem";
      let m = g;
      switch (/em/.test(v) ? m = f.round(g / 0.0625) : v === "pt" ? m = f.round(g * 1.333) : v === "%" && (m = g / 100), s) {
        case "em":
        case "rem":
        case "%":
          return (m * 0.0625).toFixed(2) + s;
        case "pt":
          return f.floor(m / 1.333) + s;
        default:
          return m + s;
      }
    },
    _cleanStyle: function(s, r, f) {
      let p = (s.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(f) && !p && (s.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const g = (s.match(/\ssize="([^"]+)"/i) || [])[1], v = (s.match(/\sface="([^"]+)"/i) || [])[1], m = (s.match(/\scolor="([^"]+)"/i) || [])[1];
        (g || v || m) && (p = 'style="' + (g ? "font-size:" + this.util.getNumber(g / 3.333, 1) + "rem;" : "") + (v ? "font-family:" + v + ";" : "") + (m ? "color:" + m + ";" : "") + '"');
      }
      if (p) {
        r || (r = []);
        const g = p.replace(/&quot;/g, "").match(this._cleanStyleRegExp[f]);
        if (g) {
          const v = [];
          for (let m = 0, _ = g.length, C; m < _; m++)
            if (C = g[m].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), C && !/inherit|initial|revert|unset/i.test(C[3])) {
              const w = o.kebabToCamelCase(C[1].trim()), S = this.wwComputedStyle[w] ? this.wwComputedStyle[w].replace(/"/g, "") : "", I = C[3].trim();
              switch (w) {
                case "fontFamily":
                  if (!n.plugins.font || n.font.indexOf(I) === -1) continue;
                  break;
                case "fontSize":
                  if (!n.plugins.fontSize) continue;
                  this._cleanStyleRegExp.fontSizeUnit.test(C[0]) || (C[0] = C[0].replace((C[0].match(/:\s*([^;]+)/) || [])[1], this._convertFontSize.bind(this, n.fontSizeUnit)));
                  break;
                case "color":
                  if (!n.plugins.fontColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(I)) continue;
                  break;
                case "backgroundColor":
                  if (!n.plugins.hiliteColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(I)) continue;
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
    _cleanTags: function(s, r, f) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(r)) return r;
      let p = null;
      const g = f.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), v = this._attributesTagsBlacklist[g];
      r = r.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, ""), v ? r = r.replace(v, "") : r = r.replace(this._attributesBlacklistRegExp, "");
      const m = this._attributesTagsWhitelist[g];
      if (m ? p = r.match(m) : p = r.match(s ? this._attributesWhitelistRegExp : this._attributesWhitelistRegExp_all_data), s || g === "span" || g === "li" || this._cleanStyleRegExp[g])
        if (g === "a") {
          const _ = r.match(/(?:(?:id|name)\s*=\s*(?:"|')[^"']*(?:"|'))/g);
          _ && (p || (p = []), p.push(_[0]));
        } else (!p || !/style=/i.test(p.toString())) && ((g === "span" || g === "li") && (p = this._cleanStyle(r, p, "span")), this._cleanStyleRegExp[g] ? p = this._cleanStyle(r, p, g) : /^(P|DIV|H[1-6]|PRE)$/i.test(g) && (p = this._cleanStyle(r, p, "format")));
      else {
        const _ = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        _ && !p ? p = [_[0]] : _ && !p.some(function(C) {
          return /^style/.test(C.trim());
        }) && p.push(_[0]);
      }
      if (o.isFigures(g)) {
        const _ = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        p || (p = []), _ && p.push(_[0]);
      }
      if (p)
        for (let _ = 0, C = p.length, w; _ < C; _++)
          w = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(p[_].trim()) ? "" : p[_], f += (/^\s/.test(w) ? "" : " ") + w;
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
      for (let g = 0, v = p.length, m; g < v; g++)
        m = p[g], m.nodeType === 8 ? r += "<!-- " + m.textContent + " -->" : !o.isFormatElement(m) && !o.isRangeFormatElement(m) && !o.isComponent(m) && !/meta/i.test(m.nodeName) ? (f || (f = o.createElement(n.defaultTag)), f.appendChild(m), g--, v--) : (f && (r += f.outerHTML, f = null), r += m.outerHTML);
      return f && (r += f.outerHTML), c.createRange().createContextualFragment(r);
    },
    _convertListCell: function(s) {
      let r = "";
      for (let f = 0, p = s.length, g; f < p; f++)
        g = s[f], g.nodeType === 1 ? o.isList(g) ? r += g.innerHTML : o.isListCell(g) ? r += g.outerHTML : o.isFormatElement(g) ? r += "<li>" + (g.innerHTML.trim() || "<br>") + "</li>" : o.isRangeFormatElement(g) && !o.isTable(g) ? r += this._convertListCell(g) : r += "<li>" + g.outerHTML + "</li>" : r += "<li>" + (g.textContent || "<br>") + "</li>";
      return r;
    },
    _isFormatData: function(s) {
      let r = !1;
      for (let f = 0, p = s.length, g; f < p; f++)
        if (g = s[f], g.nodeType === 1 && !o.isTextStyleElement(g) && !o.isBreak(g) && !this.__disallowedTagNameRegExp.test(g.nodeName)) {
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
      if (!n.strictMode) return s;
      s = this._deleteDisallowedTags(this._parser.parseFromString(o.htmlCompress(s), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0)).replace(/<br\/?>$/i, "");
      const p = c.createRange().createContextualFragment(s);
      try {
        o._consistencyCheckOfHTML(p, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter);
      } catch (_) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + _);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const _ = p.querySelectorAll(this.managedTagsInfo.query);
        for (let C = 0, w = _.length, S, I; C < w; C++) {
          I = [].slice.call(_[C].classList);
          for (let E = 0, L = I.length; E < L; E++)
            if (S = this.managedTagsInfo.map[I[E]], S) {
              S(_[C]);
              break;
            }
        }
      }
      let g = p.childNodes, v = "";
      const m = this._isFormatData(g);
      m && (g = this._editFormat(p).childNodes);
      for (let _ = 0, C = g.length, w; _ < C; _++) {
        if (w = g[_], this.__allowedScriptRegExp.test(w.nodeName)) {
          v += w.outerHTML;
          continue;
        }
        v += this._makeLine(w, m);
      }
      return v = o.htmlRemoveWhiteSpace(v), v ? (r && (v = v.replace(typeof r == "string" ? o.createTagsWhitelist(r) : r, "")), f && (v = v.replace(typeof f == "string" ? o.createTagsBlacklist(f) : f, ""))) : v = s, this._tagConvertor(v);
    },
    /**
     * @description Converts contents into a format that can be placed in an editor
     * @param {String} contents contents
     * @returns {String}
     */
    convertContentsForEditor: function(s) {
      if (!n.strictMode) return s;
      s = this._deleteDisallowedTags(this._parser.parseFromString(o.htmlCompress(s), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0));
      const r = c.createRange().createContextualFragment(s);
      try {
        o._consistencyCheckOfHTML(r, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter);
      } catch (v) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + v);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const v = r.querySelectorAll(this.managedTagsInfo.query);
        for (let m = 0, _ = v.length, C, w; m < _; m++) {
          w = [].slice.call(v[m].classList);
          for (let S = 0, I = w.length; S < I; S++)
            if (C = this.managedTagsInfo.map[w[S]], C) {
              C(v[m]);
              break;
            }
        }
      }
      const f = r.childNodes;
      let p = "", g = null;
      for (let v = 0, m; v < f.length; v++) {
        if (m = f[v], this.__allowedScriptRegExp.test(m.nodeName)) {
          p += m.outerHTML;
          continue;
        }
        if (!o.isFormatElement(m) && !o.isRangeFormatElement(m) && !o.isComponent(m) && !o.isFigures(m) && m.nodeType !== 8 && !/__se__tag/.test(m.className)) {
          if (g || (g = o.createElement(n.defaultTag)), g.appendChild(m), v--, f[v + 1] && !o.isFormatElement(f[v + 1]))
            continue;
          m = g, g = null;
        }
        g && (p += this._makeLine(g, !0), g = null), p += this._makeLine(m, !0);
      }
      return g && (p += this._makeLine(g, !0)), p.length === 0 ? "<" + n.defaultTag + "><br></" + n.defaultTag + ">" : (p = o.htmlRemoveWhiteSpace(p), this._tagConvertor(p));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(s, r) {
      let f = "";
      const p = d.RegExp, g = new p("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), v = typeof s == "string" ? c.createRange().createContextualFragment(s) : s, m = (function(w) {
        return this.isFormatElement(w) || this.isComponent(w);
      }).bind(o), _ = r ? "" : `
`;
      let C = r ? 0 : this._variable.codeIndent * 1;
      return C = C > 0 ? new d.Array(C + 1).join(" ") : "", function w(S, I) {
        const E = S.childNodes, L = g.test(S.nodeName), z = L ? I : "";
        for (let P = 0, U = E.length, V, M, F, D, O, R; P < U; P++) {
          if (V = E[P], D = g.test(V.nodeName), M = D ? _ : "", F = m(V) && !L && !/^(TH|TD)$/i.test(S.nodeName) ? _ : "", V.nodeType === 8) {
            f += `
<!-- ` + V.textContent.trim() + " -->" + M;
            continue;
          }
          if (V.nodeType === 3) {
            o.isList(V.parentElement) || (f += o._HTMLConvertor(/^\n+$/.test(V.data) ? "" : V.data));
            continue;
          }
          if (V.childNodes.length === 0) {
            f += (/^HR$/i.test(V.nodeName) ? _ : "") + (/^PRE$/i.test(V.parentElement.nodeName) && /^BR$/i.test(V.nodeName) ? "" : z) + V.outerHTML + M;
            continue;
          }
          V.outerHTML ? (O = V.nodeName.toLowerCase(), R = z || D ? I : "", f += (F || (L ? "" : M)) + R + V.outerHTML.match(p("<" + O + "[^>]*>", "i"))[0] + M, w(V, I + C), f += (/\n$/.test(f) ? R : "") + "</" + O + ">" + (F || M || L || /^(TH|TD)$/i.test(V.nodeName) ? _ : "")) : f += new d.XMLSerializer().serializeToString(V);
        }
      }(v, ""), f.trim() + _;
    },
    /**
     * @description Add an event to document.
     * When created as an Iframe, the same event is added to the document in the Iframe.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     * @param {Boolean} useCapture Use event capture
     */
    addDocEvent: function(s, r, f) {
      c.addEventListener(s, r, f), n.iframe && this._wd.addEventListener(s, r);
    },
    /**
     * @description Remove events from document.
     * When created as an Iframe, the event of the document inside the Iframe is also removed.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     */
    removeDocEvent: function(s, r) {
      c.removeEventListener(s, r), n.iframe && this._wd.removeEventListener(s, r);
    },
    /**
     * @description The current number of characters is counted and displayed.
     * @param {String} inputText Text added.
     * @returns {Boolean}
     * @private
     */
    _charCount: function(s) {
      const r = n.maxCharCount, f = n.charCounterType;
      let p = 0;
      if (s && (p = this.getCharLength(s, f)), this._setCharCount(), r > 0) {
        let g = !1;
        const v = y.getCharCount(f);
        if (v > r) {
          if (g = !0, p > 0) {
            this._editorRange();
            const m = this.getRange(), _ = m.endOffset - 1, C = this.getSelectionNode().textContent, w = m.endOffset - (v - r);
            this.getSelectionNode().textContent = C.slice(0, w < 0 ? 0 : w) + C.slice(m.endOffset, C.length), this.setRange(m.endContainer, _, m.endContainer, _);
          }
        } else v + p > r && (g = !0);
        if (g && (this._callCounterBlink(), p > 0))
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
        const f = r || n.charCounterType, p = this.getCharLength(typeof s == "string" ? s : this._charTypeHTML && s.nodeType === 1 ? s.outerHTML : s.textContent, f);
        if (p > 0 && p + y.getCharCount(f) > n.maxCharCount)
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
      u.controllersOff();
      const s = b._responsiveButtonSize;
      if (s) {
        let r = 0;
        (u._isBalloon || u._isInline) && n.toolbarWidth === "auto" ? r = e.element.topArea.offsetWidth : r = e.element.toolbar.offsetWidth;
        let f = "default";
        for (let p = 1, g = s.length; p < g; p++)
          if (r < s[p]) {
            f = s[p] + "";
            break;
          }
        b._responsiveCurrentSize !== f && (b._responsiveCurrentSize = f, y.setToolbarButtons(b._responsiveButtons[f]));
      }
    },
    /**
     * @description Set the char count to charCounter element textContent.
     * @private
     */
    _setCharCount: function() {
      e.element.charCounter && d.setTimeout((function(s, r) {
        this.textContent && s && (this.textContent = s.getCharCount(r.charCounterType));
      }).bind(e.element.charCounter, y, n), 0);
    },
    /**
     * @description The character counter blinks.
     * @private
     */
    _callCounterBlink: function() {
      const s = e.element.charWrapper;
      s && !o.hasClass(s, "se-blink") && (o.addClass(s, "se-blink"), d.setTimeout(function() {
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
      const f = d.RegExp;
      this._ww = n.iframe ? e.element.wysiwygFrame.contentWindow : d, this._wd = c, this._charTypeHTML = n.charCounterType === "byte-html", this.wwComputedStyle = d.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = o.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + o.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(D) {
        return this.test(D) ? D : "";
      }).bind(n.allowedClassNames);
      const p = n.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new f("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new f("<(" + p + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + p + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new f("^(" + p + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new f("^" + (n.__allowedScriptTag ? "script" : "") + "$", "i"), !n.iframe && typeof d.ShadowRoot == "function") {
        let D = e.element.wysiwygFrame;
        for (; D; ) {
          if (D.shadowRoot) {
            this._shadowRoot = D.shadowRoot;
            break;
          } else if (D instanceof d.ShadowRoot) {
            this._shadowRoot = D;
            break;
          }
          D = D.parentNode;
        }
        this._shadowRoot && (this._shadowRootControllerEventTarget = []);
      }
      const g = d.Object.keys(n._textTagsMap), v = n.addTagsWhitelist ? n.addTagsWhitelist.split("|").filter(function(D) {
        return /b|i|ins|s|strike/i.test(D);
      }) : [];
      for (let D = 0; D < v.length; D++)
        g.splice(g.indexOf(v[D].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = g.length === 0 ? null : new f("(<\\/?)(" + g.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const m = function(D, O) {
        return D ? D === "*" ? "[a-z-]+" : O ? D + "|" + O : D : "^";
      }, w = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", S = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = n._editorTagsWhitelist.indexOf("//") > -1 || n._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new f("^(" + m(n._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new f("^(" + (n.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = o.createTagsWhitelist(m(n._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = o.createTagsBlacklist(n.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = o.createTagsWhitelist(m(n.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = o.createTagsBlacklist(n.pasteTagsBlacklist);
      const I = '\\s*=\\s*(")[^"]*\\1', E = n.attributesWhitelist;
      let L = {}, z = "";
      if (E)
        for (let D in E)
          !o.hasOwn(E, D) || /^on[a-z]+$/i.test(E[D]) || (D === "all" ? z = m(E[D], w) : L[D] = new f("\\s(?:" + m(E[D], "") + ")" + I, "ig"));
      this._attributesWhitelistRegExp = new f("\\s(?:" + (z || w + "|" + S) + ")" + I, "ig"), this._attributesWhitelistRegExp_all_data = new f("\\s(?:" + ((z || w) + "|data-[a-z0-9\\-]+") + ")" + I, "ig"), this._attributesTagsWhitelist = L;
      const P = n.attributesBlacklist;
      if (L = {}, z = "", P)
        for (let D in P)
          o.hasOwn(P, D) && (D === "all" ? z = m(P[D], "") : L[D] = new f("\\s(?:" + m(P[D], "") + ")" + I, "ig"));
      this._attributesBlacklistRegExp = new f("\\s(?:" + (z || "^") + ")" + I, "ig"), this._attributesTagsBlacklist = L, this._isInline = /inline/i.test(n.mode), this._isBalloon = /balloon|balloon-always/i.test(n.mode), this._isBalloonAlways = /balloon-always/i.test(n.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const U = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let V = [], M, F;
      for (let D in i)
        if (o.hasOwn(i, D)) {
          if (M = i[D], F = t[D], (M.active || M.action) && F && this.callPlugin(D, null, F), typeof M.checkFileInfo == "function" && typeof M.resetFileInfo == "function" && (this.callPlugin(D, null, F), this._fileInfoPluginsCheck.push(M.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(M.resetFileInfo.bind(this))), d.Array.isArray(M.fileTags)) {
            const O = M.fileTags;
            this.callPlugin(D, null, F), this._fileManager.tags = this._fileManager.tags.concat(O), V.push(D);
            for (let R = 0, H = O.length; R < H; R++)
              this._fileManager.pluginMap[O[R].toLowerCase()] = D;
          }
          if (M.managedTags) {
            const O = M.managedTags();
            U.push("." + O.className), this.managedTagsInfo.map[O.className] = O.method.bind(this);
          }
        }
      this.managedTagsInfo.query = U.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new f("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new f("^(" + (V.length === 0 ? "^" : V.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = _a(this, this._onChange_historyStack.bind(this)), this.addModule([Wl]), n.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, n._editorStyles.editor && (e.element.wysiwyg.style.cssText = n._editorStyles.editor), n.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(s, r);
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
      this.hasFocus && b._applyTagEffects(), this._variable.isChanged = !0, e.tool.save && e.tool.save.removeAttribute("disabled"), y.onChange && y.onChange(this.getContents(!0), this), e.element.toolbar.style.display === "block" && b._showToolbarBalloon();
    },
    /**
     * @description Modify the height value of the iframe when the height of the iframe is automatic.
     * @private
     */
    _iframeAutoHeight: function() {
      this._iframeAuto ? d.setTimeout(function() {
        const s = u._iframeAuto.offsetHeight;
        e.element.wysiwygFrame.style.height = s + "px", o.isResizeObserverSupported || u.__callResizeFunction(s, null);
      }) : o.isResizeObserverSupported || u.__callResizeFunction(e.element.wysiwygFrame.offsetHeight, null);
    },
    __callResizeFunction: function(s, r) {
      s = s === -1 ? r.borderBoxSize && r.borderBoxSize[0] ? r.borderBoxSize[0].blockSize : r.contentRect.height + this._editorHeightPadding : s, this._editorHeight !== s && (typeof y.onResizeEditor == "function" && y.onResizeEditor(s, this._editorHeight, u, r), this._editorHeight = s);
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
      const r = this.getRange(), f = r.commonAncestorContainer, p = r.startContainer, g = o.getRangeFormatElement(f, null);
      let v, m, _;
      const C = o.getParentElement(f, o.isComponent);
      if (!(C && !o.isTable(C))) {
        if (f.nodeType === 1 && f.getAttribute("data-se-embed") === "true") {
          let w = f.nextElementSibling;
          o.isFormatElement(w) || (w = this.appendFormatTag(f, n.defaultTag)), this.setRange(w.firstChild, 0, w.firstChild, 0);
          return;
        }
        if (!((o.isRangeFormatElement(p) || o.isWysiwygDiv(p)) && (o.isComponent(p.children[r.startOffset]) || o.isComponent(p.children[r.startOffset - 1])))) {
          if (o.getParentElement(f, o.isNotCheckingNode)) return null;
          if (g) {
            _ = o.createElement(s || n.defaultTag), _.innerHTML = g.innerHTML, _.childNodes.length === 0 && (_.innerHTML = o.zeroWidthSpace), g.innerHTML = _.outerHTML, _ = g.firstChild, v = o.getEdgeChildNodes(_, null).sc, v || (v = o.createTextNode(o.zeroWidthSpace), _.insertBefore(v, _.firstChild)), m = v.textContent.length, this.setRange(v, m, v, m);
            return;
          }
          if (o.isRangeFormatElement(f) && f.childNodes.length <= 1) {
            let w = null;
            f.childNodes.length === 1 && o.isBreak(f.firstChild) ? w = f.firstChild : (w = o.createTextNode(o.zeroWidthSpace), f.appendChild(w)), this.setRange(w, 1, w, 1);
            return;
          }
          try {
            if (f.nodeType === 3 && (_ = o.createElement(s || n.defaultTag), f.parentNode.insertBefore(_, f), _.appendChild(f)), o.isBreak(_.nextSibling) && o.removeItem(_.nextSibling), o.isBreak(_.previousSibling) && o.removeItem(_.previousSibling), o.isBreak(v)) {
              const w = o.createTextNode(o.zeroWidthSpace);
              v.parentNode.insertBefore(w, v), v = w;
            }
          } catch {
            this.execCommand("formatBlock", !1, s || n.defaultTag), this.removeRange(), this._editorRange();
          }
          if (_ && (o.isBreak(_.nextSibling) && o.removeItem(_.nextSibling), o.isBreak(_.previousSibling) && o.removeItem(_.previousSibling), o.isBreak(v))) {
            const w = o.createTextNode(o.zeroWidthSpace);
            v.parentNode.insertBefore(w, v), v = w;
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
    _setOptionsInit: function(s, r) {
      this.context = e = il(s.originElement, this._getConstructed(s), n), this._componentsInfoReset = !0, this._editorInit(!0, r);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(s, r) {
      this._init(s, r), b._addEvent(), this._setCharCount(), b._offStickyToolbar(), b.onResize_window(), e.element.toolbar.style.visibility = "";
      const f = n.frameAttrbutes;
      for (let p in f)
        e.element.wysiwyg.setAttribute(p, f[p]);
      this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), d.setTimeout(function() {
        typeof u._resourcesStateChange == "function" && (b._resizeObserver && b._resizeObserver.observe(e.element.wysiwygFrame), b._toolbarObserver && b._toolbarObserver.observe(e.element._toolbarShadow), u._resourcesStateChange(), typeof y.onload == "function" && y.onload(u, s));
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
    _cursorMoveKeyCode: new d.RegExp("^(8|3[2-9]|40|46)$"),
    _directionKeyCode: new d.RegExp("^(8|13|3[2-9]|40|46)$"),
    _nonTextKeyCode: new d.RegExp("^(8|13|1[6-9]|20|27|3[3-9]|40|45|46|11[2-9]|12[0-3]|144|145)$"),
    _historyIgnoreKeyCode: new d.RegExp("^(1[6-9]|20|27|3[3-9]|40|45|11[2-9]|12[0-3]|144|145)$"),
    _onButtonsCheck: new d.RegExp("^(" + d.Object.keys(n._textTagsMap).join("|") + ")$", "i"),
    _frontZeroWidthReg: new d.RegExp(o.zeroWidthSpace + "+", ""),
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
      const p = b._keyCodeShortcut[s];
      switch (p) {
        case "A":
          f = "selectAll";
          break;
        case "B":
          n.shortcutsDisable.indexOf("bold") === -1 && (f = "bold");
          break;
        case "S":
          r && n.shortcutsDisable.indexOf("strike") === -1 ? f = "strike" : !r && n.shortcutsDisable.indexOf("save") === -1 && (f = "save");
          break;
        case "U":
          n.shortcutsDisable.indexOf("underline") === -1 && (f = "underline");
          break;
        case "I":
          n.shortcutsDisable.indexOf("italic") === -1 && (f = "italic");
          break;
        case "Z":
          n.shortcutsDisable.indexOf("undo") === -1 && (r ? f = "redo" : f = "undo");
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
      if (o.hasClass(e.element.wysiwyg, "se-read-only"))
        return !1;
      let s = u.getSelectionNode();
      if (s === u.effectNode) return;
      u.effectNode = s;
      const r = n.rtl ? "marginRight" : "marginLeft", f = u.commandMap, p = b._onButtonsCheck, g = [], v = [], m = u.activePlugins, _ = m.length;
      let C = "";
      for (; s.firstChild; )
        s = s.firstChild;
      for (let w = s; !o.isWysiwygDiv(w) && w; w = w.parentNode)
        if (!(w.nodeType !== 1 || o.isBreak(w))) {
          if (C = w.nodeName.toUpperCase(), v.push(C), !u.isReadOnly)
            for (let S = 0, I; S < _; S++)
              I = m[S], g.indexOf(I) === -1 && i[I].active.call(u, w) && g.push(I);
          if (o.isFormatElement(w)) {
            g.indexOf("OUTDENT") === -1 && f.OUTDENT && !o.isImportantDisabled(f.OUTDENT) && (o.isListCell(w) || w.style[r] && o.getNumber(w.style[r], 0) > 0) && (g.push("OUTDENT"), f.OUTDENT.removeAttribute("disabled")), g.indexOf("INDENT") === -1 && f.INDENT && !o.isImportantDisabled(f.INDENT) && (g.push("INDENT"), o.isListCell(w) && !w.previousElementSibling ? f.INDENT.setAttribute("disabled", !0) : f.INDENT.removeAttribute("disabled"));
            continue;
          }
          p && p.test(C) && (g.push(C), o.addClass(f[C], "active"));
        }
      u._setKeyEffect(g), u._variable.currentNodes = v.reverse(), u._variable.currentNodesMap = g, n.showPathLabel && (e.element.navigation.textContent = u._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(s) {
      let r = s.target;
      if (u._bindControllersOff && s.stopPropagation(), /^(input|textarea|select|option)$/i.test(r.nodeName) ? u._antiBlur = !1 : s.preventDefault(), o.getParentElement(r, ".se-submenu"))
        s.stopPropagation(), u._notHideToolbar = !0;
      else {
        let f = r.getAttribute("data-command"), p = r.className;
        for (; !f && !/se-menu-list/.test(p) && !/sun-editor-common/.test(p); )
          r = r.parentNode, f = r.getAttribute("data-command"), p = r.className;
        (f === u._submenuName || f === u._containerName) && s.stopPropagation();
      }
    },
    addGlobalEvent(s, r, f) {
      return n.iframe && u._ww.addEventListener(s, r, f), u._w.addEventListener(s, r, f), {
        type: s,
        listener: r,
        useCapture: f
      };
    },
    removeGlobalEvent(s, r, f) {
      s && (typeof s == "object" && (r = s.listener, f = s.useCapture, s = s.type), n.iframe && u._ww.removeEventListener(s, r, f), u._w.removeEventListener(s, r, f));
    },
    onClick_toolbar: function(s) {
      let r = s.target, f = r.getAttribute("data-display"), p = r.getAttribute("data-command"), g = r.className;
      for (u.controllersOff(); r.parentNode && !p && !/se-menu-list/.test(g) && !/se-toolbar/.test(g); )
        r = r.parentNode, p = r.getAttribute("data-command"), f = r.getAttribute("data-display"), g = r.className;
      !p && !f || r.disabled || u.actionCall(p, f, r);
    },
    __selectionSyncEvent: null,
    onMouseDown_wysiwyg: function(s) {
      if (u.isReadOnly || o.isNonEditable(e.element.wysiwyg)) return;
      if (o._isExcludeSelectionElement(s.target)) {
        s.preventDefault();
        return;
      }
      if (b.removeGlobalEvent(b.__selectionSyncEvent), b.__selectionSyncEvent = b.addGlobalEvent("mouseup", function() {
        u._editorRange(), b.removeGlobalEvent(b.__selectionSyncEvent);
      }), typeof y.onMouseDown == "function" && y.onMouseDown(s, u) === !1) return;
      const r = o.getParentElement(s.target, o.isCell);
      if (r) {
        const f = u.plugins.table;
        f && r !== f._fixedCell && !f._shift && u.callPlugin("table", function() {
          f.onTableCellMultiSelect.call(u, r, !1);
        }, null);
      }
      u._isBalloon && b._hideToolbar();
    },
    onClick_wysiwyg: function(s) {
      const r = s.target;
      if (u.isReadOnly)
        return s.preventDefault(), o.isAnchor(r) && d.open(r.href, r.target), !1;
      if (o.isNonEditable(e.element.wysiwyg) || typeof y.onClick == "function" && y.onClick(s, u) === !1) return;
      const f = u.getFileComponent(r);
      if (f) {
        s.preventDefault(), u.selectComponent(f.target, f.pluginName);
        return;
      }
      const p = o.getParentElement(r, "FIGCAPTION");
      if (p && o.isNonEditable(p) && (s.preventDefault(), p.focus(), u._isInline && !u._inlineToolbarAttr.isShow)) {
        b._showToolbarInline();
        const w = function() {
          b._hideToolbar(), p.removeEventListener("blur", w);
        };
        p.addEventListener("blur", w);
      }
      if (u._editorRange(), s.detail === 3) {
        let w = u.getRange();
        o.isFormatElement(w.endContainer) && w.endOffset === 0 && (w = u.setRange(w.startContainer, w.startOffset, w.startContainer, w.startContainer.length), u._rangeInfo(w, u.getSelection()));
      }
      const g = u.getSelectionNode(), v = o.getFormatElement(g, null), m = o.getRangeFormatElement(g, null);
      let _ = g;
      for (; _.firstChild; ) _ = _.firstChild;
      const C = u.getFileComponent(_);
      if (C) {
        const w = u.getRange();
        !m && w.startContainer === w.endContainer && u.selectComponent(C.target, C.pluginName);
      } else u.currentFileComponentInfo && u.controllersOff();
      if (!v && !o.isNonEditable(r) && !o.isList(m)) {
        const w = u.getRange();
        if (o.getFormatElement(w.startContainer) === o.getFormatElement(w.endContainer))
          if (o.isList(m)) {
            s.preventDefault();
            const S = o.createElement("LI"), I = g.nextElementSibling;
            S.appendChild(g), m.insertBefore(S, I), u.focus();
          } else !o.isWysiwygDiv(g) && !o.isComponent(g) && (!o.isTable(g) || o.isCell(g)) && u._setDefaultFormat(o.isRangeFormatElement(m) ? "DIV" : n.defaultTag) !== null ? (s.preventDefault(), u.focus()) : b._applyTagEffects();
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
      const s = u.getRange();
      u._bindControllersOff || !u._isBalloonAlways && s.collapsed ? b._hideToolbar() : b._showToolbarBalloon(s);
    },
    _showToolbarBalloon: function(s) {
      if (!u._isBalloon) return;
      const r = s || u.getRange(), f = e.element.toolbar, p = e.element.topArea, g = u.getSelection();
      let v;
      if (u._isBalloonAlways && r.collapsed)
        v = !0;
      else if (g.focusNode === g.anchorNode)
        v = g.focusOffset < g.anchorOffset;
      else {
        const M = o.getListChildNodes(r.commonAncestorContainer, null);
        v = o.getArrayIndex(M, g.focusNode) < o.getArrayIndex(M, g.anchorNode);
      }
      let m = r.getClientRects();
      m = m[v ? 0 : m.length - 1];
      const _ = u.getGlobalScrollOffset();
      let C = _.left, w = _.top;
      const S = p.offsetWidth, I = b._getEditorOffsets(null), E = I.top, L = I.left;
      if (f.style.top = "-10000px", f.style.visibility = "hidden", f.style.display = "block", !m) {
        const M = u.getSelectionNode();
        if (o.isFormatElement(M)) {
          const F = o.createTextNode(o.zeroWidthSpace);
          u.insertNode(F, null, !1), u.setRange(F, 1, F, 1), u._editorRange(), m = u.getRange().getClientRects(), m = m[v ? 0 : m.length - 1];
        }
        if (!m) {
          const F = o.getOffset(M, e.element.wysiwygFrame);
          m = {
            left: F.left,
            top: F.top,
            right: F.left,
            bottom: F.top + M.offsetHeight,
            noText: !0
          }, C = 0, w = 0;
        }
        v = !0;
      }
      const z = d.Math.round(e.element._arrow.offsetWidth / 2), P = f.offsetWidth, U = f.offsetHeight, V = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (V && (m = {
        left: m.left + V.left,
        top: m.top + V.top,
        right: m.right + V.right - V.width,
        bottom: m.bottom + V.bottom - V.height
      }), b._setToolbarOffset(v, m, f, L, S, C, w, E, z), (P !== f.offsetWidth || U !== f.offsetHeight) && b._setToolbarOffset(v, m, f, L, S, C, w, E, z), n.toolbarContainer) {
        const M = p.parentElement;
        let F = n.toolbarContainer, D = F.offsetLeft, O = F.offsetTop;
        for (; !F.parentElement.contains(M) || !/^(BODY|HTML)$/i.test(F.parentElement.nodeName); )
          F = F.offsetParent, D += F.offsetLeft, O += F.offsetTop;
        f.style.left = f.offsetLeft - D + p.offsetLeft + "px", f.style.top = f.offsetTop - O + p.offsetTop + "px";
      }
      f.style.visibility = "";
    },
    _setToolbarOffset: function(s, r, f, p, g, v, m, _, C) {
      const S = f.offsetWidth, I = r.noText && !s ? 0 : f.offsetHeight, E = (s ? r.left : r.right) - p - S / 2 + v, L = E + S - g;
      let z = (s ? r.top - I - C : r.bottom + C) - (r.noText ? 0 : _) + m, P = E < 0 ? 1 : L < 0 ? E : E - L - 1 - 1, U = !1;
      const V = z + (s ? b._getEditorOffsets(null).top : f.offsetHeight - e.element.wysiwyg.offsetHeight);
      !s && V > 0 && b._getPageBottomSpace() < V ? (s = !0, U = !0) : s && c.documentElement.offsetTop > V && (s = !1, U = !0), U && (z = (s ? r.top - I - C : r.bottom + C) - (r.noText ? 0 : _) + m), f.style.left = d.Math.floor(P) + "px", f.style.top = d.Math.floor(z) + "px", s ? (o.removeClass(e.element._arrow, "se-arrow-up"), o.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = I + "px") : (o.removeClass(e.element._arrow, "se-arrow-down"), o.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -C + "px");
      const M = d.Math.floor(S / 2 + (E - P));
      e.element._arrow.style.left = (M + C > f.offsetWidth ? f.offsetWidth - C : M < C ? C : M) + "px";
    },
    _showToolbarInline: function() {
      if (!u._isInline) return;
      const s = e.element.toolbar;
      n.toolbarContainer ? s.style.position = "relative" : s.style.position = "absolute", s.style.visibility = "hidden", s.style.display = "block", u._inlineToolbarAttr.width = s.style.width = n.toolbarWidth, u._inlineToolbarAttr.top = s.style.top = (n.toolbarContainer ? 0 : -1 - s.offsetHeight) + "px", typeof y.showInline == "function" && y.showInline(s, e, u), b.onScroll_window(), u._inlineToolbarAttr.isShow = !0, s.style.visibility = "";
    },
    _hideToolbar: function() {
      !u._notHideToolbar && !u._variable.isFullScreen && (e.element.toolbar.style.display = "none", u._inlineToolbarAttr.isShow = !1);
    },
    onInput_wysiwyg: function(s) {
      if (/AUDIO/.test(s.target.nodeName)) return !1;
      if (u.isReadOnly || u.isDisabled)
        return s.preventDefault(), s.stopPropagation(), u.history.go(u.history.getCurrentIndex()), !1;
      u._editorRange();
      const r = (s.data === null ? "" : s.data === void 0 ? " " : s.data) || "";
      if (!u._charCount(r))
        return s.preventDefault(), s.stopPropagation(), !1;
      typeof y.onInput == "function" && y.onInput(s, u) === !1 || u.history.push(!0);
    },
    _isUneditableNode: function(s, r) {
      const f = r ? s.startContainer : s.endContainer, p = r ? s.startOffset : s.endOffset, g = r ? "previousSibling" : "nextSibling", v = f.nodeType === 1;
      let m;
      return v ? (m = b._isUneditableNode_getSibling(f.childNodes[p], g, f), m && m.nodeType === 1 && m.getAttribute("contenteditable") === "false") : (m = b._isUneditableNode_getSibling(f, g, f), u.isEdgePoint(f, p, r ? "front" : "end") && m && m.nodeType === 1 && m.getAttribute("contenteditable") === "false");
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
      let r = u.getSelectionNode();
      if (o.isInputElement(r)) return;
      const f = s.keyCode, p = s.shiftKey, g = s.ctrlKey || s.metaKey || f === 91 || f === 92 || f === 224, v = s.altKey;
      if (b._IEisComposing = f === 229, !g && u.isReadOnly && !b._cursorMoveKeyCode.test(f))
        return s.preventDefault(), !1;
      if (u.submenuOff(), u._isBalloon && b._hideToolbar(), typeof y.onKeyDown == "function" && y.onKeyDown(s, u) === !1) return;
      if (g && b._shortcutCommand(f, p))
        return b._onShortcutKey = !0, s.preventDefault(), s.stopPropagation(), !1;
      b._onShortcutKey && (b._onShortcutKey = !1);
      const m = u.getRange(), _ = !m.collapsed || m.startContainer !== m.endContainer, C = u._fileManager.pluginRegExp.test(u.currentControllerName) ? u.currentControllerName : "";
      let w = o.getFormatElement(r, null) || r, S = o.getRangeFormatElement(w, null);
      if (!(/37|38|39|40/.test(s.keyCode) && b._onKeyDown_wysiwyg_arrowKey(s) === !1)) {
        switch (f) {
          case 8:
            if (!_ && C) {
              s.preventDefault(), s.stopPropagation(), u.plugins[C].destroy.call(u);
              break;
            }
            if (_ && b._hardDelete()) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if (!o.isFormatElement(w) && !e.element.wysiwyg.firstElementChild && !o.isComponent(r) && u._setDefaultFormat(n.defaultTag) !== null)
              return s.preventDefault(), s.stopPropagation(), !1;
            if (!_ && !w.previousElementSibling && m.startOffset === 0 && !r.previousSibling && !o.isListCell(w) && o.isFormatElement(w) && (!o.isFreeFormatElement(w) || o.isClosureFreeFormatElement(w))) {
              if (o.isClosureRangeFormatElement(w.parentNode))
                return s.preventDefault(), s.stopPropagation(), !1;
              if (o.isWysiwygDiv(w.parentNode) && w.childNodes.length <= 1 && (!w.firstChild || o.onlyZeroWidthSpace(w.textContent))) {
                if (s.preventDefault(), s.stopPropagation(), w.nodeName.toUpperCase() === n.defaultTag.toUpperCase()) {
                  w.innerHTML = "<br>";
                  const R = w.attributes;
                  for (; R[0]; )
                    w.removeAttribute(R[0].name);
                } else {
                  const R = o.createElement(n.defaultTag);
                  R.innerHTML = "<br>", w.parentElement.replaceChild(R, w);
                }
                return u.nativeFocus(), !1;
              }
            }
            const E = m.startContainer;
            if (w && !w.previousElementSibling && m.startOffset === 0 && E.nodeType === 3 && !o.isFormatElement(E.parentNode)) {
              let R = E.parentNode.previousSibling;
              const H = E.parentNode.nextSibling;
              R || (H ? R = H : (R = o.createElement("BR"), w.appendChild(R)));
              let A = E;
              for (; w.contains(A) && !A.previousSibling; )
                A = A.parentNode;
              if (!w.contains(A)) {
                E.textContent = "", o.removeItemAllParents(E, null, w);
                break;
              }
            }
            if (b._isUneditableNode(m, !0)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            !_ && u._isEdgeFormat(m.startContainer, m.startOffset, "start") && o.isFormatElement(w.previousElementSibling) && (u._formatAttrsTemp = w.previousElementSibling.attributes);
            const L = m.commonAncestorContainer;
            if (w = o.getFormatElement(m.startContainer, null), S = o.getRangeFormatElement(w, null), S && w && !o.isCell(S) && !/^FIGCAPTION$/i.test(S.nodeName)) {
              if (o.isListCell(w) && o.isList(S) && (o.isListCell(S.parentNode) || w.previousElementSibling) && (r === w || r.nodeType === 3 && (!r.previousSibling || o.isList(r.previousSibling))) && (o.getFormatElement(m.startContainer, null) !== o.getFormatElement(m.endContainer, null) ? S.contains(m.startContainer) : m.startOffset === 0 && m.collapsed)) {
                if (m.startContainer !== m.endContainer)
                  s.preventDefault(), u.removeNode(), m.startContainer.nodeType === 3 && u.setRange(m.startContainer, m.startContainer.textContent.length, m.startContainer, m.startContainer.textContent.length), u.history.push(!0);
                else {
                  let R = w.previousElementSibling || S.parentNode;
                  if (o.isListCell(R)) {
                    s.preventDefault();
                    let H = R;
                    if (!R.contains(w) && o.isListCell(H) && o.isList(H.lastElementChild)) {
                      for (H = H.lastElementChild.lastElementChild; o.isListCell(H) && o.isList(H.lastElementChild); )
                        H = H.lastElementChild && H.lastElementChild.lastElementChild;
                      R = H;
                    }
                    let A = R === S.parentNode ? S.previousSibling : R.lastChild;
                    A || (A = o.createTextNode(o.zeroWidthSpace), S.parentNode.insertBefore(A, S.parentNode.firstChild));
                    const T = A.nodeType === 3 ? A.textContent.length : 1, G = w.childNodes;
                    let $ = A, j = G[0];
                    for (; j = G[0]; )
                      R.insertBefore(j, $.nextSibling), $ = j;
                    o.removeItem(w), S.children.length === 0 && o.removeItem(S), u.setRange(A, T, A, T), u.history.push(!0);
                  }
                }
                break;
              }
              if (!_ && m.startOffset === 0) {
                let R = !0, H = L;
                for (; H && H !== S && !o.isWysiwygDiv(H); ) {
                  if (H.previousSibling && (H.previousSibling.nodeType === 1 || !o.onlyZeroWidthSpace(H.previousSibling.textContent.trim()))) {
                    R = !1;
                    break;
                  }
                  H = H.parentNode;
                }
                if (R && S.parentNode) {
                  s.preventDefault(), u.detachRangeFormatElement(S, o.isListCell(w) ? [w] : null, null, !1, !1), u.history.push(!0);
                  break;
                }
              }
            }
            if (!_ && w && (m.startOffset === 0 || r === w && w.childNodes[m.startOffset])) {
              const R = r === w ? w.childNodes[m.startOffset] : r, H = w.previousSibling, A = (L.nodeType === 3 || o.isBreak(L)) && !L.previousSibling && m.startOffset === 0;
              if (R && !R.previousSibling && (L && o.isComponent(L.previousSibling) || A && o.isComponent(H))) {
                const T = u.getFileComponent(H);
                T ? (s.preventDefault(), s.stopPropagation(), w.textContent.length === 0 && o.removeItem(w), u.selectComponent(T.target, T.pluginName) === !1 && u.blur()) : o.isComponent(H) && (s.preventDefault(), s.stopPropagation(), o.removeItem(H));
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
              s.preventDefault(), s.stopPropagation(), u.plugins[C].destroy.call(u);
              break;
            }
            if (_ && b._hardDelete()) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if (b._isUneditableNode(m, !1)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            if ((o.isFormatElement(r) || r.nextSibling === null || o.onlyZeroWidthSpace(r.nextSibling) && r.nextSibling.nextSibling === null) && m.startOffset === r.textContent.length) {
              const R = w.nextElementSibling;
              if (!R) break;
              if (o.isComponent(R)) {
                if (s.preventDefault(), o.onlyZeroWidthSpace(w) && (o.removeItem(w), o.isTable(R))) {
                  let A = o.getChildElement(R, o.isCell, !1);
                  A = A.firstElementChild || A, u.setRange(A, 0, A, 0);
                  break;
                }
                const H = u.getFileComponent(R);
                H ? (s.stopPropagation(), u.selectComponent(H.target, H.pluginName) === !1 && u.blur()) : o.isComponent(R) && (s.stopPropagation(), o.removeItem(R));
                break;
              }
            }
            if (!_ && (u.isEdgePoint(m.endContainer, m.endOffset) || r === w && w.childNodes[m.startOffset])) {
              const R = r === w && w.childNodes[m.startOffset] || r;
              if (R && o.isNonEditable(R.nextSibling)) {
                s.preventDefault(), s.stopPropagation(), o.removeItem(R.nextSibling);
                break;
              } else if (o.isComponent(R)) {
                s.preventDefault(), s.stopPropagation(), o.removeItem(R);
                break;
              }
            }
            if (!_ && u._isEdgeFormat(m.endContainer, m.endOffset, "end") && o.isFormatElement(w.nextElementSibling) && (u._formatAttrsTemp = w.attributes), w = o.getFormatElement(m.startContainer, null), S = o.getRangeFormatElement(w, null), o.isListCell(w) && o.isList(S) && (r === w || r.nodeType === 3 && (!r.nextSibling || o.isList(r.nextSibling)) && (o.getFormatElement(m.startContainer, null) !== o.getFormatElement(m.endContainer, null) ? S.contains(m.endContainer) : m.endOffset === r.textContent.length && m.collapsed))) {
              m.startContainer !== m.endContainer && u.removeNode();
              let R = o.getArrayItem(w.children, o.isList, !1);
              if (R = R || w.nextElementSibling || S.parentNode.nextElementSibling, R && (o.isList(R) || o.getArrayItem(R.children, o.isList, !1))) {
                s.preventDefault();
                let H, A;
                if (o.isList(R)) {
                  const T = R.firstElementChild;
                  for (A = T.childNodes, H = A[0]; A[0]; )
                    w.insertBefore(A[0], R);
                  o.removeItem(T);
                } else {
                  for (H = R.firstChild, A = R.childNodes; A[0]; )
                    w.appendChild(A[0]);
                  o.removeItem(R);
                }
                u.setRange(H, 0, H, 0), u.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (C || n.tabDisable || (s.preventDefault(), g || v || o.isWysiwygDiv(r))) break;
            const z = !m.collapsed || u.isEdgePoint(m.startContainer, m.startOffset), P = u.getSelectedElements(null);
            r = u.getSelectionNode();
            const U = [];
            let V = [], M = o.isListCell(P[0]), F = o.isListCell(P[P.length - 1]), D = { sc: m.startContainer, so: m.startOffset, ec: m.endContainer, eo: m.endOffset };
            for (let R = 0, H = P.length, A; R < H; R++)
              if (A = P[R], o.isListCell(A)) {
                if (!A.previousElementSibling && !p)
                  continue;
                U.push(A);
              } else
                V.push(A);
            if (U.length > 0 && z && u.plugins.list)
              D = u.plugins.list.editInsideList.call(u, p, U);
            else {
              const R = o.getParentElement(r, o.isCell);
              if (R && z) {
                const H = o.getParentElement(R, "table"), A = o.getListChildren(H, o.isCell);
                let T = p ? o.prevIdx(A, R) : o.nextIdx(A, R);
                T === A.length && !p && (T = 0), T === -1 && p && (T = A.length - 1);
                let G = A[T];
                if (!G) break;
                G = G.firstElementChild || G, u.setRange(G, 0, G, 0);
                break;
              }
              V = V.concat(U), M = F = null;
            }
            if (V.length > 0)
              if (p) {
                const R = V.length - 1;
                for (let T = 0, G; T <= R; T++) {
                  G = V[T].childNodes;
                  for (let $ = 0, j = G.length, X; $ < j && (X = G[$], !!X); $++)
                    if (!o.onlyZeroWidthSpace(X)) {
                      /^\s{1,4}$/.test(X.textContent) ? o.removeItem(X) : /^\s{1,4}/.test(X.textContent) && (X.textContent = X.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const H = o.getChildElement(V[0], "text", !1), A = o.getChildElement(V[R], "text", !0);
                !M && H && (D.sc = H, D.so = 0), !F && A && (D.ec = A, D.eo = A.textContent.length);
              } else {
                const R = o.createTextNode(new d.Array(u._variable.tabSize + 1).join(" "));
                if (V.length === 1) {
                  const H = u.insertNode(R, null, !0);
                  if (!H) return !1;
                  M || (D.sc = R, D.so = H.endOffset), F || (D.ec = R, D.eo = H.endOffset);
                } else {
                  const H = V.length - 1;
                  for (let G = 0, $; G <= H; G++)
                    $ = V[G].firstChild, $ && (o.isBreak($) ? V[G].insertBefore(R.cloneNode(!1), $) : $.textContent = R.textContent + $.textContent);
                  const A = o.getChildElement(V[0], "text", !1), T = o.getChildElement(V[H], "text", !0);
                  !M && A && (D.sc = A, D.so = 0), !F && T && (D.ec = T, D.eo = T.textContent.length);
                }
              }
            u.setRange(D.sc, D.so, D.ec, D.eo), u.history.push(!1);
            break;
          case 13:
            const O = o.getFreeFormatElement(r, null);
            if (u._charTypeHTML) {
              let R = "";
              if (!p && O || p ? R = "<br>" : R = "<" + w.nodeName + "><br></" + w.nodeName + ">", !u.checkCharCount(R, "byte-html"))
                return s.preventDefault(), !1;
            }
            if (!p && !C) {
              const R = u._isEdgeFormat(m.endContainer, m.endOffset, "end"), H = u._isEdgeFormat(m.startContainer, m.startOffset, "start");
              if (R && (/^H[1-6]$/i.test(w.nodeName) || /^HR$/i.test(w.nodeName))) {
                b._enterPrevent(s);
                let A = null;
                const T = u.appendFormatTag(w, n.defaultTag);
                if (R && R.length > 0) {
                  A = R.pop();
                  const G = A;
                  for (; R.length > 0; )
                    A = A.appendChild(R.pop());
                  T.appendChild(G);
                }
                if (A = A ? A.appendChild(T.firstChild) : T.firstChild, o.isBreak(A)) {
                  const G = o.createTextNode(o.zeroWidthSpace);
                  A.parentNode.insertBefore(G, A), u.setRange(G, 1, G, 1);
                } else
                  u.setRange(A, 0, A, 0);
                break;
              } else if (S && w && !o.isCell(S) && !/^FIGCAPTION$/i.test(S.nodeName)) {
                const A = u.getRange();
                if (u.isEdgePoint(A.endContainer, A.endOffset) && o.isList(r.nextSibling)) {
                  b._enterPrevent(s);
                  const T = o.createElement("LI"), G = o.createElement("BR");
                  T.appendChild(G), w.parentNode.insertBefore(T, w.nextElementSibling), T.appendChild(r.nextSibling), u.setRange(G, 1, G, 1);
                  break;
                }
                if ((A.commonAncestorContainer.nodeType !== 3 || !A.commonAncestorContainer.nextElementSibling) && o.onlyZeroWidthSpace(w.innerText.trim()) && !o.isListCell(w.nextElementSibling)) {
                  b._enterPrevent(s);
                  let T = null;
                  if (o.isListCell(S.parentNode)) {
                    const G = w.parentNode.parentNode;
                    S = G.parentNode;
                    const $ = o.createElement("LI");
                    $.innerHTML = "<br>", o.copyTagAttributes($, w, n.lineAttrReset), T = $, S.insertBefore(T, G.nextElementSibling);
                  } else {
                    const G = o.isCell(S.parentNode) ? "DIV" : o.isList(S.parentNode) ? "LI" : o.isFormatElement(S.nextElementSibling) && !o.isRangeFormatElement(S.nextElementSibling) ? S.nextElementSibling.nodeName : o.isFormatElement(S.previousElementSibling) && !o.isRangeFormatElement(S.previousElementSibling) ? S.previousElementSibling.nodeName : n.defaultTag;
                    T = o.createElement(G), o.copyTagAttributes(T, w, n.lineAttrReset);
                    const $ = u.detachRangeFormatElement(S, [w], null, !0, !0);
                    $.cc.insertBefore(T, $.ec);
                  }
                  T.innerHTML = "<br>", o.removeItemAllParents(w, null, null), u.setRange(T, 1, T, 1);
                  break;
                }
              }
              if (O) {
                b._enterPrevent(s);
                const A = r === O, T = u.getSelection(), G = r.childNodes, $ = T.focusOffset, j = r.previousElementSibling, X = r.nextSibling;
                if (!o.isClosureFreeFormatElement(O) && G && (A && m.collapsed && G.length - 1 <= $ + 1 && o.isBreak(G[$]) && (!G[$ + 1] || (!G[$ + 2] || o.onlyZeroWidthSpace(G[$ + 2].textContent)) && G[$ + 1].nodeType === 3 && o.onlyZeroWidthSpace(G[$ + 1].textContent)) && $ > 0 && o.isBreak(G[$ - 1]) || !A && o.onlyZeroWidthSpace(r.textContent) && o.isBreak(j) && (o.isBreak(j.previousSibling) || !o.onlyZeroWidthSpace(j.previousSibling.textContent)) && (!X || !o.isBreak(X) && o.onlyZeroWidthSpace(X.textContent)))) {
                  A ? o.removeItem(G[$ - 1]) : o.removeItem(r);
                  const Y = u.appendFormatTag(O, o.isFormatElement(O.nextElementSibling) && !o.isRangeFormatElement(O.nextElementSibling) ? O.nextElementSibling : null);
                  o.copyFormatAttributes(Y, O), u.setRange(Y, 1, Y, 1);
                  break;
                }
                if (A) {
                  y.insertHTML(m.collapsed && o.isBreak(m.startContainer.childNodes[m.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let Y = T.focusNode;
                  const ne = T.focusOffset;
                  O === Y && (Y = Y.childNodes[ne - $ > 1 ? ne - 1 : ne]), u.setRange(Y, 1, Y, 1);
                } else {
                  const Y = T.focusNode.nextSibling, ne = o.createElement("BR");
                  u.insertNode(ne, null, !1);
                  const pe = ne.previousSibling, ge = ne.nextSibling;
                  !o.isBreak(Y) && !o.isBreak(pe) && (!ge || o.onlyZeroWidthSpace(ge)) ? (ne.parentNode.insertBefore(ne.cloneNode(!1), ne), u.setRange(ne, 1, ne, 1)) : u.setRange(ge, 0, ge, 0);
                }
                b._onShortcutKey = !0;
                break;
              }
              if (m.collapsed && (H || R)) {
                b._enterPrevent(s);
                const A = o.createElement("BR"), T = o.createElement(w.nodeName);
                o.copyTagAttributes(T, w, n.lineAttrReset);
                let G = A;
                do {
                  if (!o.isBreak(r) && r.nodeType === 1) {
                    const $ = r.cloneNode(!1);
                    $.appendChild(G), G = $;
                  }
                  r = r.parentNode;
                } while (w !== r && w.contains(r));
                T.appendChild(G), w.parentNode.insertBefore(T, H && !R ? w : w.nextElementSibling), R && u.setRange(A, 1, A, 1);
                break;
              }
              if (w) {
                s.stopPropagation();
                let A, T = 0;
                if (m.collapsed)
                  o.onlyZeroWidthSpace(w) ? A = u.appendFormatTag(w, w.cloneNode(!1)) : A = o.splitElement(m.endContainer, m.endOffset, o.getElementDepth(w));
                else {
                  const G = o.getFormatElement(m.startContainer, null) !== o.getFormatElement(m.endContainer, null), $ = w.cloneNode(!1);
                  $.innerHTML = "<br>";
                  const j = u.removeNode();
                  if (A = o.getFormatElement(j.container, null), !A) {
                    o.isWysiwygDiv(j.container) && (b._enterPrevent(s), e.element.wysiwyg.appendChild($), A = $, o.copyTagAttributes(A, w, n.lineAttrReset), u.setRange(A, T, A, T));
                    break;
                  }
                  const X = o.getRangeFormatElement(j.container);
                  if (A = A.contains(X) ? o.getChildElement(X, o.getFormatElement.bind(o)) : A, G) {
                    if (R && !H)
                      A.parentNode.insertBefore($, !j.prevContainer || j.container === j.prevContainer ? A.nextElementSibling : A), A = $, T = 0;
                    else if (T = j.offset, H) {
                      const Y = A.parentNode.insertBefore($, A);
                      R && (A = Y, T = 0);
                    }
                  } else
                    R && H ? (A.parentNode.insertBefore($, j.prevContainer && j.container === j.prevContainer ? A.nextElementSibling : A), A = $, T = 0) : A = o.splitElement(j.container, j.offset, o.getElementDepth(w));
                }
                b._enterPrevent(s), o.copyTagAttributes(A, w, n.lineAttrReset), u.setRange(A, T, A, T);
                break;
              }
            }
            if (_) break;
            if (S && o.getParentElement(S, "FIGCAPTION") && o.getParentElement(S, o.isList) && (b._enterPrevent(s), w = u.appendFormatTag(w, null), u.setRange(w, 0, w, 0)), C) {
              s.preventDefault(), s.stopPropagation(), u.containerOff(), u.controllersOff();
              const R = e[C], H = R._container, A = H.previousElementSibling || H.nextElementSibling;
              let T = null;
              o.isListCell(H.parentNode) ? T = o.createElement("BR") : (T = o.createElement(o.isFormatElement(A) && !o.isRangeFormatElement(A) ? A.nodeName : n.defaultTag), T.innerHTML = "<br>"), p ? H.parentNode.insertBefore(T, H) : H.parentNode.insertBefore(T, H.nextElementSibling), u.callPlugin(C, function() {
                u.selectComponent(R._element, C) === !1 && u.blur();
              }, null);
            }
            break;
          case 27:
            if (C)
              return s.preventDefault(), s.stopPropagation(), u.controllersOff(), !1;
            break;
        }
        if (p && f === 16) {
          s.preventDefault(), s.stopPropagation();
          const E = u.plugins.table;
          if (E && !E._shift && !E._ref) {
            const L = o.getParentElement(w, o.isCell);
            if (L) {
              E.onTableCellMultiSelect.call(u, L, !0);
              return;
            }
          }
        } else if (p && (o.isOSX_IOS ? v : g) && f === 32) {
          s.preventDefault(), s.stopPropagation();
          const E = u.insertNode(o.createTextNode(" "));
          if (E && E.container) {
            u.setRange(E.container, E.endOffset, E.container, E.endOffset);
            return;
          }
        }
        if (o.isIE && !g && !v && !_ && !b._nonTextKeyCode.test(f) && o.isBreak(m.commonAncestorContainer)) {
          const E = o.createTextNode(o.zeroWidthSpace);
          u.insertNode(E, null, !1), u.setRange(E, 1, E, 1);
        }
        b._directionKeyCode.test(f) && (u._editorRange(), b._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(s) {
      if (s.shiftKey) return;
      let r = u.getSelectionNode();
      const f = function(v, m = 0) {
        if (s.preventDefault(), s.stopPropagation(), !v) return;
        let _ = u.getFileComponent(v);
        _ ? u.selectComponent(_.target, _.pluginName) : (u.setRange(v, m, v, m), u.controllersOff());
      }, p = o.getParentElement(r, "table");
      if (p) {
        const v = o.getParentElement(r, "tr"), m = o.getParentElement(r, "td");
        let _ = m, C = m;
        if (m) {
          for (; _.firstChild; ) _ = _.firstChild;
          for (; C.lastChild; ) C = C.lastChild;
        }
        let w = r;
        for (; w.firstChild; ) w = w.firstChild;
        const S = w === _, I = w === C;
        let E = null, L = 0;
        if (s.keyCode === 38 && S) {
          const z = v && v.previousElementSibling;
          for (z ? E = z.children[m.cellIndex] : E = o.getPreviousDeepestNode(p, u.context.element.wysiwyg); E.lastChild; ) E = E.lastChild;
          E && (L = E.textContent.length);
        } else if (s.keyCode === 40 && I) {
          const z = v && v.nextElementSibling;
          for (z ? E = z.children[m.cellIndex] : E = o.getNextDeepestNode(p, u.context.element.wysiwyg); E.firstChild; ) E = E.firstChild;
        }
        if (E)
          return f(E, L), !1;
      }
      const g = u.getFileComponent(r);
      if (g) {
        const v = /37|38/.test(s.keyCode), m = /39|40/.test(s.keyCode);
        if (v) {
          const _ = o.getPreviousDeepestNode(g.target, u.context.element.wysiwyg);
          f(_, _ && _.textContent.length);
        } else if (m) {
          const _ = o.getNextDeepestNode(g.target, u.context.element.wysiwyg);
          f(_);
        }
      }
    },
    onKeyUp_wysiwyg: function(s) {
      if (b._onShortcutKey) return;
      u._editorRange();
      const r = s.keyCode, f = s.ctrlKey || s.metaKey || r === 91 || r === 92 || r === 224, p = s.altKey;
      if (u.isReadOnly) {
        !f && b._cursorMoveKeyCode.test(r) && b._applyTagEffects();
        return;
      }
      const g = u.getRange();
      let v = u.getSelectionNode();
      if (u._isBalloon && (u._isBalloonAlways && r !== 27 || !g.collapsed))
        if (u._isBalloonAlways)
          r !== 27 && b._showToolbarBalloonDelay();
        else {
          b._showToolbarBalloon();
          return;
        }
      let m = v;
      for (; m.firstChild; ) m = m.firstChild;
      const _ = u.getFileComponent(m);
      if (!(s.keyCode === 16 || s.shiftKey) && _ ? u.selectComponent(_.target, _.pluginName) : u.currentFileComponentInfo && u.controllersOff(), r === 8 && o.isWysiwygDiv(v) && v.textContent === "" && v.children.length === 0) {
        s.preventDefault(), s.stopPropagation(), v.innerHTML = "";
        const E = o.createElement(o.isFormatElement(u._variable.currentNodes[0]) ? u._variable.currentNodes[0] : n.defaultTag);
        E.innerHTML = "<br>", v.appendChild(E), u.setRange(E, 0, E, 0), b._applyTagEffects(), u.history.push(!1);
        return;
      }
      const C = o.getFormatElement(v, null), w = o.getRangeFormatElement(v, null), S = u._formatAttrsTemp;
      if (S) {
        for (let E = 0, L = S.length; E < L; E++) {
          if (r === 13 && /^id$/i.test(S[E].name)) {
            C.removeAttribute("id");
            continue;
          }
          C.setAttribute(S[E].name, S[E].value);
        }
        u._formatAttrsTemp = null;
      }
      if (!C && g.collapsed && !o.isComponent(v) && !o.isList(v) && u._setDefaultFormat(o.isRangeFormatElement(w) ? "DIV" : n.defaultTag) !== null && (v = u.getSelectionNode()), !f && !p && !b._nonTextKeyCode.test(r) && v.nodeType === 3 && o.zeroWidthRegExp.test(v.textContent) && !(s.isComposing !== void 0 ? s.isComposing : b._IEisComposing)) {
        let E = g.startOffset, L = g.endOffset;
        const z = (v.textContent.substring(0, L).match(b._frontZeroWidthReg) || "").length;
        E = g.startOffset - z, L = g.endOffset - z, v.textContent = v.textContent.replace(o.zeroWidthRegExp, ""), u.setRange(v, E < 0 ? 0 : E, v, L < 0 ? 0 : L);
      }
      u._charCount(""), !(typeof y.onKeyUp == "function" && y.onKeyUp(s, u) === !1) && !f && !p && !b._historyIgnoreKeyCode.test(r) && u.history.push(!0);
    },
    onScroll_wysiwyg: function(s) {
      u.controllersOff(), u._isBalloon && b._hideToolbar(), typeof y.onScroll == "function" && y.onScroll(s, u);
    },
    onFocus_wysiwyg: function(s) {
      u._antiBlur || (u.hasFocus = !0, d.setTimeout(b._applyTagEffects), u._isInline && b._showToolbarInline(), typeof y.onFocus == "function" && y.onFocus(s, u));
    },
    onBlur_wysiwyg: function(s) {
      u._antiBlur || u._variable.isCodeView || (u.hasFocus = !1, u.effectNode = null, u.controllersOff(), (u._isInline || u._isBalloon) && b._hideToolbar(), u._setKeyEffect([]), u._variable.currentNodes = [], u._variable.currentNodesMap = [], n.showPathLabel && (e.element.navigation.textContent = ""), typeof y.onBlur == "function" && y.onBlur(s, u, this));
    },
    onMouseDown_resizingBar: function(s) {
      s.stopPropagation(), u.submenuOff(), u.controllersOff(), u._variable.resizeClientY = s.clientY, e.element.resizeBackground.style.display = "block";
      function r() {
        e.element.resizeBackground.style.display = "none", c.removeEventListener("mousemove", b._resize_editor), c.removeEventListener("mouseup", r);
      }
      c.addEventListener("mousemove", b._resize_editor), c.addEventListener("mouseup", r);
    },
    _resize_editor: function(s) {
      const r = e.element.editorArea.offsetHeight + (s.clientY - u._variable.resizeClientY), f = r < u._variable.minResizingSize ? u._variable.minResizingSize : r;
      e.element.wysiwygFrame.style.height = e.element.code.style.height = f + "px", u._variable.resizeClientY = s.clientY, o.isResizeObserverSupported || u.__callResizeFunction(f, null);
    },
    onResize_window: function() {
      o.isResizeObserverSupported || u.resetResponsiveToolbar();
      const s = e.element.toolbar, r = s.style.display === "none" || u._isInline && !u._inlineToolbarAttr.isShow;
      if (!(s.offsetWidth === 0 && !r)) {
        if (e.fileBrowser && e.fileBrowser.area.style.display === "block" && (e.fileBrowser.body.style.maxHeight = d.innerHeight - e.fileBrowser.header.offsetHeight - 50 + "px"), u.submenuActiveButton && u.submenu && u._setMenuPosition(u.submenuActiveButton, u.submenu), u._variable.isFullScreen) {
          u._variable.innerHeight_fullScreen += d.innerHeight - s.offsetHeight - u._variable.innerHeight_fullScreen, e.element.editorArea.style.height = u._variable.innerHeight_fullScreen + "px";
          return;
        }
        if (u._variable.isCodeView && u._isInline) {
          b._showToolbarInline();
          return;
        }
        u._iframeAutoHeight(), u._sticky && (s.style.width = e.element.topArea.offsetWidth - 2 + "px", b.onScroll_window());
      }
    },
    onScroll_window: function() {
      if (u._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || n.stickyToolbar < 0) return;
      const s = e.element, r = s.editorArea.offsetHeight, f = (this.scrollY || c.documentElement.scrollTop) + n.stickyToolbar, p = b._getEditorOffsets(n.toolbarContainer).top - (u._isInline ? s.toolbar.offsetHeight : 0), g = u._isInline && f - p > 0 ? f - p - e.element.toolbar.offsetHeight : 0;
      f < p ? b._offStickyToolbar() : f + u._variable.minResizingSize >= r + p ? (u._sticky || b._onStickyToolbar(g), s.toolbar.style.top = g + r + p + n.stickyToolbar - f - u._variable.minResizingSize + "px") : f >= p && b._onStickyToolbar(g);
    },
    _getEditorOffsets: function(s) {
      let r = s || e.element.topArea, f = 0, p = 0, g = 0;
      for (; r; )
        f += r.offsetTop, p += r.offsetLeft, g += r.scrollTop, r = r.offsetParent;
      return {
        top: f,
        left: p,
        scroll: g
      };
    },
    _getPageBottomSpace: function() {
      return c.documentElement.scrollHeight - (b._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
    },
    _onStickyToolbar: function(s) {
      const r = e.element;
      !u._isInline && !n.toolbarContainer && (r._stickyDummy.style.height = r.toolbar.offsetHeight + "px", r._stickyDummy.style.display = "block"), r.toolbar.style.top = n.stickyToolbar + s + "px", r.toolbar.style.width = u._isInline ? u._inlineToolbarAttr.width : r.toolbar.offsetWidth + "px", o.addClass(r.toolbar, "se-toolbar-sticky"), u._sticky = !0;
    },
    _offStickyToolbar: function() {
      const s = e.element;
      s._stickyDummy.style.display = "none", s.toolbar.style.top = u._isInline ? u._inlineToolbarAttr.top : "", s.toolbar.style.width = u._isInline ? u._inlineToolbarAttr.width : "", s.editorArea.style.marginTop = "", o.removeClass(s.toolbar, "se-toolbar-sticky"), u._sticky = !1;
    },
    _codeViewAutoHeight: function() {
      u._variable.isFullScreen || (e.element.code.style.height = e.element.code.scrollHeight + "px");
    },
    // FireFox - table delete, Chrome - image, video, audio
    _hardDelete: function() {
      const s = u.getRange(), r = s.startContainer, f = s.endContainer, p = o.getRangeFormatElement(r), g = o.getRangeFormatElement(f), v = o.isCell(p), m = o.isCell(g), _ = s.commonAncestorContainer;
      if ((v && !p.previousElementSibling && !p.parentElement.previousElementSibling || m && !g.nextElementSibling && !g.parentElement.nextElementSibling) && p !== g)
        if (!v)
          o.removeItem(o.getParentElement(g, function(S) {
            return _ === S.parentNode;
          }));
        else if (!m)
          o.removeItem(o.getParentElement(p, function(S) {
            return _ === S.parentNode;
          }));
        else
          return o.removeItem(o.getParentElement(p, function(S) {
            return _ === S.parentNode;
          })), u.nativeFocus(), !0;
      const C = r.nodeType === 1 ? o.getParentElement(r, ".se-component") : null, w = f.nodeType === 1 ? o.getParentElement(f, ".se-component") : null;
      return C && o.removeItem(C), w && o.removeItem(w), !1;
    },
    onPaste_wysiwyg: function(s) {
      const r = o.isIE ? d.clipboardData : s.clipboardData;
      return r ? b._dataTransferAction("paste", s, r) : !0;
    },
    _setClipboardComponent: function(s, r, f) {
      s.preventDefault(), s.stopPropagation(), f.setData("text/html", r.component.outerHTML);
    },
    onCopy_wysiwyg: function(s) {
      const r = o.isIE ? d.clipboardData : s.clipboardData;
      if (typeof y.onCopy == "function" && y.onCopy(s, r, u) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const f = u.currentFileComponentInfo;
      f && !o.isIE && (b._setClipboardComponent(s, f, r), o.addClass(f.component, "se-component-copy"), d.setTimeout(function() {
        o.removeClass(f.component, "se-component-copy");
      }, 150));
    },
    onSave_wysiwyg: function(s) {
      if (typeof y.onSave == "function") {
        y.onSave(s, u);
        return;
      }
    },
    onCut_wysiwyg: function(s) {
      const r = o.isIE ? d.clipboardData : s.clipboardData;
      if (typeof y.onCut == "function" && y.onCut(s, r, u) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const f = u.currentFileComponentInfo;
      f && !o.isIE && (b._setClipboardComponent(s, f, r), o.removeItem(f.component), u.controllersOff()), d.setTimeout(function() {
        u.history.push(!1);
      });
    },
    onDrop_wysiwyg: function(s) {
      if (u.isReadOnly || o.isIE)
        return s.preventDefault(), s.stopPropagation(), !1;
      const r = s.dataTransfer;
      return r ? (b._setDropLocationSelection(s), u.removeNode(), document.body.contains(u.currentControllerTarget) || u.controllersOff(), b._dataTransferAction("drop", s, r)) : !0;
    },
    _setDropLocationSelection: function(s) {
      const r = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
      let f = null;
      if (s.rangeParent ? (r.startContainer = s.rangeParent, r.startOffset = s.rangeOffset, r.endContainer = s.rangeParent, r.endOffset = s.rangeOffset) : u._wd.caretRangeFromPoint ? f = u._wd.caretRangeFromPoint(s.clientX, s.clientY) : f = u.getRange(), f && (r.startContainer = f.startContainer, r.startOffset = f.startOffset, r.endContainer = f.endContainer, r.endOffset = f.endOffset), r.startContainer === r.endContainer) {
        const p = o.getParentElement(r.startContainer, o.isComponent);
        p && (r.startContainer = p, r.startOffset = 0, r.endContainer = p, r.endOffset = 0);
      }
      u.setRange(r.startContainer, r.startOffset, r.endContainer, r.endOffset);
    },
    _dataTransferAction: function(s, r, f) {
      let p, g;
      if (o.isIE) {
        p = f.getData("Text");
        const v = u.getRange(), m = o.createElement("DIV"), _ = {
          sc: v.startContainer,
          so: v.startOffset,
          ec: v.endContainer,
          eo: v.endOffset
        };
        return m.setAttribute("contenteditable", !0), m.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(m), m.focus(), d.setTimeout(function() {
          g = m.innerHTML, o.removeItem(m), u.setRange(_.sc, _.so, _.ec, _.eo), b._setClipboardData(s, r, p, g, f);
        }), !0;
      } else if (p = f.getData("text/plain"), g = f.getData("text/html"), b._setClipboardData(s, r, p, g, f) === !1)
        return r.preventDefault(), r.stopPropagation(), !1;
    },
    _setClipboardData: function(s, r, f, p, g) {
      const v = /class=["']*Mso(Normal|List)/i.test(p) || /content=["']*Word.Document/i.test(p) || /content=["']*OneNote.File/i.test(p) || /content=["']*Excel.Sheet/i.test(p);
      !p ? p = o._HTMLConvertor(f).replace(/\n/g, "<br>") : (p = p.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), v && (p = p.replace(/\n/g, " "), f = f.replace(/\n/g, " ")), p = u.cleanHTML(p, u.pasteTagsWhitelistRegExp, u.pasteTagsBlacklistRegExp));
      const _ = u._charCount(u._charTypeHTML ? p : f);
      if (s === "paste" && typeof y.onPaste == "function") {
        const w = y.onPaste(r, p, _, u);
        if (w === !1)
          return !1;
        if (typeof w == "string") {
          if (!w) return !1;
          p = w;
        }
      }
      if (s === "drop" && typeof y.onDrop == "function") {
        const w = y.onDrop(r, p, _, u);
        if (w === !1)
          return !1;
        if (typeof w == "string") {
          if (!w) return !1;
          p = w;
        }
      }
      const C = g.files;
      if (C.length > 0 && !v)
        return /^image/.test(C[0].type) && u.plugins.image && y.insertImage(C), !1;
      if (!_)
        return !1;
      if (p)
        return y.insertHTML(p, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(s) {
      if (u.isDisabled || u.isReadOnly) return !1;
      const r = o.getParentElement(s.target, o.isComponent), f = u._lineBreaker.style;
      if (r && !u.currentControllerName) {
        const p = e.element;
        let g = 0, v = p.wysiwyg;
        do
          g += v.scrollTop, v = v.parentElement;
        while (v && !/^(BODY|HTML)$/i.test(v.nodeName));
        const m = p.wysiwyg.scrollTop, _ = b._getEditorOffsets(null), C = o.getOffset(r, p.wysiwygFrame).top + m, w = s.pageY + g + (n.iframe && !n.toolbarContainer ? p.toolbar.offsetHeight : 0), S = C + (n.iframe ? g : _.top), I = o.isListCell(r.parentNode);
        let E = "", L = "";
        if ((I ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) && w < S + 20)
          L = C, E = "t";
        else if ((I ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) && w > S + r.offsetHeight - 20)
          L = C + r.offsetHeight, E = "b";
        else {
          f.display = "none";
          return;
        }
        u._variable._lineBreakComp = r, u._variable._lineBreakDir = E, f.top = L - m + "px", u._lineBreakerButton.style.left = o.getOffset(r).left + r.offsetWidth / 2 - 15 + "px", f.display = "block";
      } else f.display !== "none" && (f.display = "none");
    },
    _enterPrevent(s) {
      s.preventDefault(), o.isMobile && u.__focusTemp.focus();
    },
    _onMouseDown_lineBreak: function(s) {
      s.preventDefault();
    },
    _onLineBreak: function(s) {
      s.preventDefault();
      const r = u._variable._lineBreakComp, f = this ? this : u._variable._lineBreakDir, p = o.isListCell(r.parentNode), g = o.createElement(p ? "BR" : o.isCell(r.parentNode) ? "DIV" : n.defaultTag);
      if (p || (g.innerHTML = "<br>"), u._charTypeHTML && !u.checkCharCount(g.outerHTML, "byte-html")) return;
      r.parentNode.insertBefore(g, f === "t" ? r : r.nextSibling), u._lineBreaker.style.display = "none", u._variable._lineBreakComp = null;
      const v = p ? g : g.firstChild;
      u.setRange(v, 1, v, 1), u.history.push(!1);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const s = n.iframe ? u._ww : e.element.wysiwyg;
      o.isResizeObserverSupported && (this._resizeObserver = new d.ResizeObserver(function(r) {
        u.__callResizeFunction(-1, r[0]);
      })), e.element.toolbar.addEventListener("mousedown", b._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", b._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", b.onClick_toolbar, !1), s.addEventListener("mousedown", b.onMouseDown_wysiwyg, !1), s.addEventListener("click", b.onClick_wysiwyg, !1), s.addEventListener(o.isIE ? "textinput" : "input", b.onInput_wysiwyg, !1), s.addEventListener("keydown", b.onKeyDown_wysiwyg, !1), s.addEventListener("keyup", b.onKeyUp_wysiwyg, !1), s.addEventListener("paste", b.onPaste_wysiwyg, !1), s.addEventListener("copy", b.onCopy_wysiwyg, !1), s.addEventListener("cut", b.onCut_wysiwyg, !1), s.addEventListener("drop", b.onDrop_wysiwyg, !1), s.addEventListener("scroll", b.onScroll_wysiwyg, !1), s.addEventListener("focus", b.onFocus_wysiwyg, !1), s.addEventListener("blur", b.onBlur_wysiwyg, !1), b._lineBreakerBind = { a: b._onLineBreak.bind(""), t: b._onLineBreak.bind("t"), b: b._onLineBreak.bind("b") }, s.addEventListener("mousemove", b.onMouseMove_wysiwyg, !1), u._lineBreakerButton.addEventListener("mousedown", b._onMouseDown_lineBreak, !1), u._lineBreakerButton.addEventListener("click", b._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", b._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", b._lineBreakerBind.b, !1), s.addEventListener("touchstart", b.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.addEventListener("touchend", b.onClick_wysiwyg, { passive: !0, useCapture: !1 }), n.height === "auto" && !n.codeMirrorEditor && (e.element.code.addEventListener("keydown", b._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", b._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", b._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(n.height) && n.resizeEnable ? e.element.resizingBar.addEventListener("mousedown", b.onMouseDown_resizingBar, !1) : o.addClass(e.element.resizingBar, "se-resizing-none")), b._setResponsiveToolbar(), o.isResizeObserverSupported && (this._toolbarObserver = new d.ResizeObserver(u.resetResponsiveToolbar)), d.addEventListener("resize", b.onResize_window, !1), n.stickyToolbar > -1 && d.addEventListener("scroll", b.onScroll_window, !1);
    },
    _removeEvent: function() {
      const s = n.iframe ? u._ww : e.element.wysiwyg;
      e.element.toolbar.removeEventListener("mousedown", b._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", b._buttonsEventHandler), e.element.toolbar.removeEventListener("click", b.onClick_toolbar), s.removeEventListener("mousedown", b.onMouseDown_wysiwyg), s.removeEventListener("click", b.onClick_wysiwyg), s.removeEventListener(o.isIE ? "textinput" : "input", b.onInput_wysiwyg), s.removeEventListener("keydown", b.onKeyDown_wysiwyg), s.removeEventListener("keyup", b.onKeyUp_wysiwyg), s.removeEventListener("paste", b.onPaste_wysiwyg), s.removeEventListener("copy", b.onCopy_wysiwyg), s.removeEventListener("cut", b.onCut_wysiwyg), s.removeEventListener("drop", b.onDrop_wysiwyg), s.removeEventListener("scroll", b.onScroll_wysiwyg), s.removeEventListener("mousemove", b.onMouseMove_wysiwyg), u._lineBreakerButton.removeEventListener("mousedown", b._onMouseDown_lineBreak), u._lineBreakerButton.removeEventListener("click", b._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", b._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", b._lineBreakerBind.b), b._lineBreakerBind = null, s.removeEventListener("touchstart", b.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("touchend", b.onClick_wysiwyg, { passive: !0, useCapture: !1 }), s.removeEventListener("focus", b.onFocus_wysiwyg), s.removeEventListener("blur", b.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", b._codeViewAutoHeight), e.element.code.removeEventListener("keyup", b._codeViewAutoHeight), e.element.code.removeEventListener("paste", b._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", b.onMouseDown_resizingBar), b._resizeObserver && (b._resizeObserver.unobserve(e.element.wysiwygFrame), b._resizeObserver = null), b._toolbarObserver && (b._toolbarObserver.unobserve(e.element._toolbarShadow), b._toolbarObserver = null), d.removeEventListener("resize", b.onResize_window), d.removeEventListener("scroll", b.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (a.length === 0) {
        a = null;
        return;
      }
      b._responsiveCurrentSize = "default";
      const s = b._responsiveButtonSize = [], r = b._responsiveButtons = { default: a[0] };
      for (let f = 1, p = a.length, g, v; f < p; f++)
        v = a[f], g = v[0] * 1, s.push(g), r[g] = v[1];
      s.sort(function(f, p) {
        return f - p;
      }).unshift("default");
    }
  }, y = {
    /**
     * @description Core, Util object
     */
    core: u,
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
      u.submenuOff(), u.containerOff(), u.moreLayerOff();
      const r = tl._createToolBar(c, s, u.plugins, n);
      a = r.responsiveButtons, b._setResponsiveToolbar(), e.element.toolbar.replaceChild(r._buttonTray, e.element._buttonTray);
      const f = il(e.element.originElement, u._getConstructed(e.element), n);
      e.element = f.element, e.tool = f.tool, n.iframe && (e.element.wysiwyg = u._wd.body), u._recoverButtonStates(), u._cachingButtons(), u.history._resetCachingButton(), u.effectNode = null, u.hasFocus && b._applyTagEffects(), u.isReadOnly && o.setDisabledButtons(!0, u.resizingDisabledButtons), typeof y.onSetToolbarButtons == "function" && y.onSetToolbarButtons(r._buttonTray.querySelectorAll("button"), u);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(s) {
      b._removeEvent(), u._resetComponents(), o.removeClass(u._styleCommandMap.showBlocks, "active"), o.removeClass(u._styleCommandMap.codeView, "active"), u._variable.isCodeView = !1, u._iframeAuto = null, u.plugins = s.plugins || u.plugins;
      const r = [n, s].reduce(function(v, m) {
        for (let _ in m)
          if (o.hasOwn(m, _))
            if (_ === "plugins" && m[_] && v[_]) {
              let C = v[_], w = m[_];
              C = C.length ? C : d.Object.keys(C).map(function(S) {
                return C[S];
              }), w = w.length ? w : d.Object.keys(w).map(function(S) {
                return w[S];
              }), v[_] = w.filter(function(S) {
                return C.indexOf(S) === -1;
              }).concat(C);
            } else
              v[_] = m[_];
        return v;
      }, {}), f = e.element, p = f.wysiwyg.innerHTML, g = tl._setOptions(r, e, n);
      g.callButtons && (t = g.callButtons, u.initPlugins = {}), g.plugins && (u.plugins = i = g.plugins), f._menuTray.children.length === 0 && (this._menuTray = {}), a = g.toolbar.responsiveButtons, u.options = n = r, u.lang = l = n.lang, n.iframe && f.wysiwygFrame.addEventListener("load", function() {
        o._setIframeDocument(this, n), u._setOptionsInit(f, p);
      }), f.editorArea.appendChild(f.wysiwygFrame), n.iframe || u._setOptionsInit(f, p);
    },
    /**
     * @description Set "options.defaultStyle" style.
     * Define the style of the edit area
     * It can also be defined with the "setOptions" method, but the "setDefaultStyle" method does not render the editor again.
     * @param {String} style Style string
     */
    setDefaultStyle: function(s) {
      const r = n._editorStyles = o._setDefaultOptionStyle(n, s), f = e.element;
      f.topArea.style.cssText = r.top, f.code.style.cssText = n._editorStyles.frame, f.code.style.display = "none", n.height === "auto" ? f.code.style.overflow = "hidden" : f.code.style.overflow = "", n.iframe ? (f.wysiwygFrame.style.cssText = r.frame, f.wysiwyg.style.cssText = r.editor) : f.wysiwygFrame.style.cssText = r.frame + r.editor;
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
      e.element.originElement.value = s, b.onSave_wysiwyg(s, u);
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
      return s = typeof s == "string" ? s : n.charCounterType, u.getCharLength(u._charTypeHTML ? e.element.wysiwyg.innerHTML : e.element.wysiwyg.textContent, s);
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
    insertHTML: function(s, r, f, p) {
      if (e.element.wysiwygFrame.contains(u.getSelection().focusNode) || u.focus(), typeof s == "string") {
        r || (s = u.cleanHTML(s, null, null));
        try {
          if (o.isListCell(o.getFormatElement(u.getSelectionNode(), null))) {
            const L = c.createRange().createContextualFragment(s).childNodes;
            u._isFormatData(L) && (s = u._convertListCell(L));
          }
          const v = c.createRange().createContextualFragment(s).childNodes;
          if (f) {
            const E = u._charTypeHTML ? "outerHTML" : "textContent";
            let L = "";
            for (let z = 0, P = v.length; z < P; z++)
              L += v[z][E];
            if (!u.checkCharCount(L, null)) return;
          }
          let m, _, C, w, S;
          for (; m = v[0]; ) {
            if (w && w.nodeType === 3 && _ && _.nodeType === 1 && o.isBreak(m)) {
              w = m, o.removeItem(m);
              continue;
            }
            C = u.insertNode(m, _, !1), _ = C.container || C, S || (S = C), w = m;
          }
          w.nodeType === 3 && _.nodeType === 1 && (_ = w);
          const I = _.nodeType === 3 ? C.endOffset || _.textContent.length : _.childNodes.length;
          p ? u.setRange(S.container || S, S.startOffset || 0, _, I) : u.setRange(_, I, _, I);
        } catch (g) {
          if (u.isDisabled || u.isReadOnly) return;
          console.warn("[SUNEDITOR.insertHTML.fail] " + g), u.execCommand("insertHTML", !1, s);
        }
      } else if (o.isComponent(s))
        u.insertComponent(s, !1, f, !1);
      else {
        let g = null;
        (o.isFormatElement(s) || o.isMedia(s)) && (g = o.getFormatElement(u.getSelectionNode(), null)), u.insertNode(s, g, f);
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
        const f = o.createElement("DIV");
        f.innerHTML = r;
        const p = e.element.wysiwyg, g = f.children;
        for (let v = 0, m = g.length; v < m; v++)
          g[v] && p.appendChild(g[v]);
      }
      u.history.push(!1);
    },
    /**
     * @description Switch to or off "ReadOnly" mode.
     * @param {Boolean} value "readOnly" boolean value.
     */
    readOnly: function(s) {
      u.isReadOnly = s, o.setDisabledButtons(!!s, u.resizingDisabledButtons), s ? (u.controllersOff(), u.submenuActiveButton && u.submenuActiveButton.disabled && u.submenuOff(), u._moreLayerActiveButton && u._moreLayerActiveButton.disabled && u.moreLayerOff(), u.containerActiveButton && u.containerActiveButton.disabled && u.containerOff(), u.modalForm && u.plugins.dialog.close.call(u), e.element.code.setAttribute("readOnly", "true"), o.addClass(e.element.wysiwygFrame, "se-read-only")) : (e.element.code.removeAttribute("readOnly"), o.removeClass(e.element.wysiwygFrame, "se-read-only")), n.codeMirrorEditor && n.codeMirrorEditor.setOption("readOnly", !!s);
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
      u.submenuOff(), u.containerOff(), u.controllersOff(), u.notice && u.notice.close.call(u), u.modalForm && u.plugins.dialog.close.call(u), u.history._destroy(), b._removeEvent(), o.removeItem(e.element.toolbar), o.removeItem(e.element.topArea);
      for (let s in u.functions)
        o.hasOwn(u, s) && delete u.functions[s];
      for (let s in u)
        o.hasOwn(u, s) && delete u[s];
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
  u.functions = y, u.options = n;
  let k = e.element, x = k.originElement, N = k.topArea;
  return x.style.display = "none", N.style.display = "block", n.iframe && k.wysiwygFrame.addEventListener("load", function() {
    o._setIframeDocument(this, n), u._editorInit(!1, n.value), n.value = null;
  }), typeof x.nextElementSibling == "object" ? x.parentNode.insertBefore(N, x.nextElementSibling) : x.parentNode.appendChild(N), k.editorArea.appendChild(k.wysiwygFrame), k = x = N = null, n.iframe || (u._editorInit(!1, n.value), n.value = null), y;
}
const Ca = {
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
      for (let d in c)
        if (re.hasOwn(c, d))
          if (d === "plugins" && c[d] && a[d]) {
            let o = a[d], h = c[d];
            o = o.length ? o : Object.keys(o).map(function(u) {
              return o[u];
            }), h = h.length ? h : Object.keys(h).map(function(u) {
              return h[u];
            }), a[d] = h.filter(function(u) {
              return o.indexOf(u) === -1;
            }).concat(o);
          } else
            a[d] = c[d];
      return a;
    }, {}));
    const l = typeof e == "string" ? document.getElementById(e) : e;
    if (!l)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const n = tl.init(l, t);
    if (n.constructed._top.id && document.getElementById(n.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + n.constructed._top.id + '")');
    return wa(il(l, n.constructed, n.options), n.pluginCallButtons, n.plugins, n.options.lang, t, n._responsiveButtons);
  }
}, ka = ["innerHTML", "id", "tabindex"], xa = /* @__PURE__ */ Ne({
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
    const l = i, n = e, a = K(null), c = K(n.modelValue), d = K(null), o = K(void 0), h = K(n.focusing), u = (x) => {
      h.value = !0, l("focus", x);
    }, b = (x) => {
      h.value = !1, l("blur", x);
    }, y = (x) => {
      o.value && clearTimeout(o.value), o.value = setTimeout(() => {
        Ql(x) === "" ? c.value = "" : c.value = x;
      }, 100);
    }, k = () => {
      let x = {
        lang: Vl[n.lang] ? Vl[n.lang] : Mi,
        plugins: {
          ...ba
        },
        ...ya
      };
      d.value = Ca.create(n.id, x), d.value.onChange = (N) => {
        y(N), n.disabled ? d.value.disabled() : d.value.enabled();
      }, d.value.onKeyUp = (N, s) => {
        y(s.getContents());
      }, d.value.onBlur = () => {
        b();
      }, d.value.onClick = () => {
        u();
      };
    };
    return me(() => n.modelValue, (x) => c.value = x), me(c, (x) => l("update:modelValue", x)), Di(() => {
      k();
    }), t({
      doSetValue: (x) => {
        d.value && d.value.setContents(x);
      }
    }), (x, N) => (W(), se("div", {
      innerHTML: c.value,
      ref_key: "input",
      ref: a,
      id: x.id,
      tabindex: x.tabindex
    }, null, 8, ka));
  }
}), Sa = {
  key: 0,
  class: "lkt-field--searchable-box"
}, Ea = ["value", "placeholder"], Ta = { key: 0 }, La = {
  key: 1,
  class: "lkt-field-select-read"
}, Na = ["title"], Ba = /* @__PURE__ */ Ne({
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
    const l = i, n = e, a = n.multiple && n.canTag, c = K(""), d = K(null), o = K(n.showOptions);
    me(o, (m) => {
      a || l("update:showOptions", m);
    });
    const h = K(n.focusing), u = K(!1), b = K(!1), y = () => {
      Ei(() => {
        h.value = u.value || b.value, o.value = h.value;
      });
    };
    me(u, (m) => {
      m && (b.value = !1), y();
    }), me(b, (m) => {
      m && (u.value = !1), y();
    }), me(h, (m) => {
      l(m ? "focus" : "blur");
    });
    let k, x;
    const N = (m) => {
      k = setTimeout(() => {
        u.value = !1;
      }, 100);
    }, s = (m) => {
      u.value = !0, a && m.key === "Enter" ? (l("tag", c.value), c.value = "") : ["ArrowDown", "ArrowUp", "Enter"].includes(m.key) ? l("navigate", m) : l("search", c.value);
    }, r = (m) => {
      u.value = !0;
    }, f = (m) => {
      x = setTimeout(() => {
        b.value = !1;
      }, 100);
    }, p = (m) => {
      b.value = !0, ["ArrowDown", "ArrowUp", "Enter"].includes(m.key) && l("navigate", m);
    }, g = (m) => {
      b.value = !0;
    }, v = (m) => {
      l("untag", m);
    };
    return t({
      keepFocused: () => {
        clearTimeout(k), clearTimeout(x), d.value && d.value.focus();
      }
    }), (m, _) => {
      const C = Se("lkt-tag"), w = Se("lkt-button");
      return W(), se(je, null, [
        m.searchable && (m.multiple || m.searchMode) || q(a) ? (W(), se("div", Sa, [
          m.multiple ? (W(), le(C, {
            key: 0,
            icon: m.optionsIcon,
            text: m.pickedOptions.length
          }, null, 8, ["icon", "text"])) : m.pickedOptions.length > 0 ? (W(), le(C, { key: 1 }, {
            default: xe(() => [
              ae(Tt, {
                option: m.pickedOptions[0],
                "option-slot": m.optionSlot,
                icon: m.optionsIcon,
                modal: m.optionsModal,
                "modal-data": m.optionsModalData,
                download: m.optionsDownload,
                "label-formatter": m.optionsLabelFormatter,
                editable: m.editable
              }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter", "editable"])
            ]),
            _: 1
          })) : de("", !0),
          Qe(oe("input", {
            "onUpdate:modelValue": _[0] || (_[0] = (S) => c.value = S),
            ref_key: "queryField",
            ref: d,
            value: c.value,
            placeholder: m.searchPlaceholder,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: s,
            onBlur: N,
            onFocus: r
          }, null, 40, Ea), [
            [Ii, c.value]
          ])
        ])) : de("", !0),
        Qe(ae(w, {
          type: q(a) ? "content" : "",
          ref: "selectButton",
          class: "lkt-field--toggle-button lkt-field--select-button",
          "open-tooltip": o.value,
          "onUpdate:openTooltip": _[1] || (_[1] = (S) => o.value = S),
          onKeyup: p,
          onBlur: f,
          onFocus: g
        }, {
          default: xe(() => [
            q(a) || m.multiple && m.pickedOptions.length > 0 ? (W(), se(je, { key: 0 }, [
              m.multipleDisplayEdition === q(bt).Count ? (W(), se("div", Ta, vt(m.pickedOptions.length), 1)) : (W(), se("ul", La, [
                (W(!0), se(je, null, _t(m.pickedOptions, (S, I) => (W(), se("li", {
                  title: S.label
                }, [
                  ae(Tt, {
                    option: m.pickedOptions[I],
                    "option-slot": m.optionSlot,
                    icon: m.optionsIcon,
                    modal: m.optionsModal,
                    "modal-data": m.optionsModalData,
                    download: m.optionsDownload,
                    "label-formatter": m.optionsLabelFormatter,
                    editable: m.editable,
                    "is-tag": q(a),
                    onClickIcon: v
                  }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter", "editable", "is-tag"])
                ], 8, Na))), 256))
              ]))
            ], 64)) : !m.multiple && m.pickedOptions.length > 0 ? (W(), le(Tt, {
              key: 1,
              option: m.pickedOptions[0],
              "option-slot": m.optionSlot,
              icon: m.optionsIcon,
              modal: m.optionsModal,
              "modal-data": m.optionsModalData,
              download: m.optionsDownload,
              "label-formatter": m.optionsLabelFormatter,
              editable: m.editable
            }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter", "editable"])) : de("", !0)
          ]),
          _: 1
        }, 8, ["type", "open-tooltip"]), [
          [kt, m.multiple || !m.searchable || !m.searchMode]
        ])
      ], 64);
    };
  }
}), za = { class: "lkt-calc--formula" }, Aa = { class: "lkt-calc--custom-pad" }, Ra = { class: "lkt-calc--pad" }, Da = { class: "lkt-calc--numeric-pad" }, Ia = { class: "lkt-calc--math-pad" }, Ma = { class: "lkt-calc--advance-math-pad" }, Oa = /* @__PURE__ */ Ne({
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
    const i = t, l = e, n = K(l.modelValue), a = K(null);
    me(n, (g) => i("update:modelValue", g));
    const c = K(l.focusing), d = K(null);
    let o;
    const h = () => {
      clearTimeout(o), a.value && typeof a.value.focus == "function" && a.value.focus();
    }, u = (g) => {
      n.value += "" + g, h();
    }, b = (g) => {
      n.value += " " + g + " ", h();
    }, y = (g) => {
      n.value += " " + g + "(", h();
    }, k = () => {
      n.value += " sqrt(", h();
    }, x = (g) => {
      n.value += "" + g, h();
    }, N = () => {
      n.value += ".", h();
    }, s = () => {
      n.value += " ", h();
    }, r = (g) => {
      n.value += "" + g.value, h();
    }, f = () => {
      c.value = !0;
    }, p = () => {
      o = setTimeout(() => {
        c.value = !1;
      }, 100);
    };
    return me(c, (g) => {
      i(g ? "focus" : "blur");
    }), (g, v) => {
      const m = Se("lkt-button"), _ = Se("lkt-tooltip");
      return W(), se("div", {
        ref_key: "container",
        ref: d
      }, [
        oe("div", za, [
          Qe(oe("input", {
            type: "text",
            ref_key: "input",
            ref: a,
            "onUpdate:modelValue": v[0] || (v[0] = (C) => n.value = C),
            onFocus: f,
            onBlur: p
          }, null, 544), [
            [Ii, n.value]
          ])
        ]),
        g.editable ? (W(), le(_, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--calc",
          modelValue: c.value,
          "onUpdate:modelValue": v[27] || (v[27] = (C) => c.value = C),
          referrer: d.value,
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: xe(() => [
            oe("div", Aa, [
              (W(!0), se(je, null, _t(g.options, (C) => (W(), le(m, {
                icon: C.icon,
                text: C.label,
                onClick: (w) => r(C)
              }, null, 8, ["icon", "text", "onClick"]))), 256))
            ]),
            oe("div", Ra, [
              oe("div", Da, [
                ae(m, {
                  onClick: v[1] || (v[1] = (C) => u(7)),
                  text: "7",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[2] || (v[2] = (C) => u(8)),
                  text: "8",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[3] || (v[3] = (C) => u(9)),
                  text: "9",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[4] || (v[4] = (C) => u(4)),
                  text: "4",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[5] || (v[5] = (C) => u(5)),
                  text: "5",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[6] || (v[6] = (C) => u(6)),
                  text: "6",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[7] || (v[7] = (C) => u(1)),
                  text: "1",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[8] || (v[8] = (C) => u(2)),
                  text: "2",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[9] || (v[9] = (C) => u(3)),
                  text: "3",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[10] || (v[10] = (C) => N()),
                  text: "."
                }),
                ae(m, {
                  onClick: v[11] || (v[11] = (C) => u(0)),
                  text: "0",
                  class: "lkt-calc--btn-number"
                }),
                ae(m, {
                  onClick: v[12] || (v[12] = (C) => s()),
                  text: " "
                })
              ]),
              oe("div", Ia, [
                ae(m, {
                  onClick: v[13] || (v[13] = (C) => x("[")),
                  text: "["
                }),
                ae(m, {
                  onClick: v[14] || (v[14] = (C) => x("]")),
                  text: "]"
                }),
                ae(m, {
                  onClick: v[15] || (v[15] = (C) => x("(")),
                  text: "("
                }),
                ae(m, {
                  onClick: v[16] || (v[16] = (C) => x(")")),
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
              oe("div", Ma, [
                ae(m, {
                  onClick: v[21] || (v[21] = (C) => k()),
                  text: "√"
                }),
                ae(m, {
                  onClick: v[22] || (v[22] = (C) => y("log")),
                  text: "log"
                }),
                ae(m, {
                  onClick: v[23] || (v[23] = (C) => y("ln")),
                  text: "ln"
                }),
                ae(m, {
                  onClick: v[24] || (v[24] = (C) => y("sin")),
                  text: "sin"
                }),
                ae(m, {
                  onClick: v[25] || (v[25] = (C) => y("cos")),
                  text: "cos"
                }),
                ae(m, {
                  onClick: v[26] || (v[26] = (C) => y("tan")),
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
}), Ha = /* @__PURE__ */ Ne({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = te(() => {
      let c = Fl(t.validation.code, t.stack), d = {
        min: t.validation.min,
        max: t.validation.max,
        value: t.validation.equalToValue
      }, o = Fl(t.validation.status + "-" + t.validation.code, t.stack);
      return o && (c = o), c ? c.startsWith("__:") ? Jt(c.substring(3), d) : Fo(c, d, ":", "") : t.validation.code;
    }), l = te(() => ee.validationIconSlot !== ""), n = te(() => ee.validationIconSlot), a = te(() => {
      let c = [];
      return c.push("code-" + t.validation.code), c.push("is-" + t.validation.status), c.join(" ");
    });
    return (c, d) => (W(), se("div", {
      class: lt(["lkt-field-validation-message", a.value])
    }, [
      l.value ? (W(), le(It(n.value), { key: 0 })) : de("", !0),
      Zt(" " + vt(i.value), 1)
    ], 2));
  }
}), Fa = {
  key: 0,
  class: "lkt-field-validation-info"
}, Va = /* @__PURE__ */ Ne({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = K(t.items), l = K(!1);
    return me(() => t.items, (n) => {
      l.value = !0, Ei(() => l.value = !1);
    }, { deep: !0 }), (n, a) => l.value ? de("", !0) : (W(), se("div", Fa, [
      (W(!0), se(je, null, _t(i.value, (c) => (W(), le(Ha, {
        validation: c,
        stack: n.stack,
        key: c.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), Pa = ["id"], Ua = /* @__PURE__ */ Ne({
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
    const i = t, l = e, n = K(l.modelValue), a = K(l.focusing);
    let c, d;
    const o = K({}), h = () => {
      clearTimeout(d), d = setTimeout(() => {
        o.value = {
          query: n.value
        };
      }, 300);
    }, u = () => {
      a.value = !0;
    }, b = () => {
      c = setTimeout(() => {
        a.value = !1;
      }, 100);
    };
    me(a, (k) => {
      i(k ? "focus" : "blur");
    });
    const y = () => {
      clearTimeout(c), setTimeout(() => {
        u();
      }, 100);
    };
    return (k, x) => {
      const N = Se("lkt-table"), s = Se("lkt-tooltip");
      return W(), se(je, null, [
        Qe(oe("input", {
          id: k.id,
          type: "text",
          ref: "input",
          "onUpdate:modelValue": x[0] || (x[0] = (r) => n.value = r),
          onFocus: u,
          onBlur: b,
          onKeyup: h
        }, null, 40, Pa), [
          [Ii, n.value]
        ]),
        k.editable && k.hadFirstFocus ? (W(), le(s, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--dropdown lkt-field--search-results",
          modelValue: a.value,
          "onUpdate:modelValue": x[1] || (x[1] = (r) => a.value = r),
          referrer: k.container,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: xe(() => [
            ae(N, {
              resource: k.optionsResource,
              filters: o.value,
              "items-container-class": "lkt-field--dropdown-options",
              type: "ul",
              onPage: y,
              onClick: y
            }, {
              item: xe(({ item: r, index: f, isLoading: p, canCreate: g, canUpdate: v, canDrop: m, canRead: _, doDrop: C }) => [
                ae(Tt, {
                  option: r,
                  onClick: y
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
}), Wa = {
  key: 0,
  class: "lkt-field-main"
}, Za = {
  key: 3,
  class: "lkt-field--read-value"
}, $a = ["innerHTML", "title"], qa = ["title"], ja = { key: 0 }, Ga = {
  key: 1,
  class: "lkt-field-select-read"
}, Ya = ["title"], Ka = ["innerHTML"], Xa = ["innerHTML", "title"], Ja = ["innerHTML", "title"], Qa = /* @__PURE__ */ Ne({
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
    multipleDisplay: { default: bt.List },
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
    const i = t, l = rl(), n = e, a = () => i("click"), c = te(() => {
      switch (n.type) {
        case Z.Select:
          if (n.multiple && Array.isArray(n.value) && n.value.length > 0 || n.multiple && n.multipleDisplay === bt.Count || !n.multiple && n.value) return "";
          break;
        case Z.Date:
          if (n.value !== "") return "";
          break;
        default:
          if (n.value !== "") return "";
      }
      return ee.customValueSlots[n.emptyValueSlot] ?? ee.defaultEmptyValueSlot;
    }), d = te(() => ee.customValueSlots[n.valueSlot] ?? "");
    let o = n.value;
    return n.type === Z.Select && n.multiple && !Array.isArray(o) && (o = []), (n.type === Z.Textarea || n.type === Z.Text) && typeof ee.readTextMaxLength < "u" && o.length > ee.readTextMaxLength && (o = o.substring(0, ee.readTextMaxLength) + "..."), (h, u) => {
      const b = Se("lkt-image"), y = Se("lkt-button"), k = Se("lkt-anchor"), x = Se("lkt-tag");
      return W(), se("div", {
        class: "lkt-field--read",
        onClick: a
      }, [
        q(l).value ? ut(h.$slots, "value", {
          key: 0,
          value: q(o),
          title: h.title,
          data: h.slotData
        }) : c.value ? (W(), le(It(c.value), {
          key: 1,
          data: h.slotData
        }, null, 8, ["data"])) : d.value ? (W(), le(It(d.value), {
          key: 2,
          value: q(o),
          title: h.title,
          data: h.slotData
        }, null, 8, ["value", "title", "data"])) : (W(), se(je, { key: 3 }, [
          h.type === q(Z).File || h.type === q(Z).Image ? (W(), se("div", Wa, [
            ae(y, {
              class: "lkt-field--toggle-button",
              text: h.type === q(Z).File ? h.fileName : ""
            }, {
              default: xe(() => [
                h.type === q(Z).Image ? (W(), le(b, {
                  key: 0,
                  src: q(o),
                  class: "lkt-field--image-cover"
                }, null, 8, ["src"])) : de("", !0),
                h.type === q(Z).Image ? (W(), le(b, {
                  key: 1,
                  src: q(o),
                  class: "lkt-field--image-main"
                }, null, 8, ["src"])) : de("", !0)
              ]),
              _: 1
            }, 8, ["text"])
          ])) : h.type === q(Z).Email ? (W(), le(k, {
            key: 1,
            type: "mail",
            class: "lkt-field--read-value",
            title: h.title,
            to: q(o)
          }, {
            default: xe(() => [
              Zt(vt(q(o)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : h.type === q(Z).Tel ? (W(), le(k, {
            key: 2,
            type: "tel",
            class: "lkt-field--read-value",
            title: h.title,
            to: q(o)
          }, {
            default: xe(() => [
              Zt(vt(q(o)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : q(Rt).includes(h.type) ? (W(), se("div", Za, [
            ae(x, {
              icon: q(o) ? "lkt-field-icon-ok" : "lkt-field-icon-cancel",
              "featured-text": h.label,
              title: h.title
            }, null, 8, ["icon", "featured-text", "title"])
          ])) : h.type === q(Z).Date ? (W(), se("div", {
            key: 4,
            class: "lkt-field--read-value",
            innerHTML: q(o),
            title: h.title
          }, null, 8, $a)) : h.type === q(Z).Select ? (W(), se("div", {
            key: 5,
            class: "lkt-field--read-value",
            title: h.title
          }, [
            h.multiple ? (W(), se(je, { key: 0 }, [
              h.multipleDisplay === q(bt).Count ? (W(), se("div", ja, vt(q(o).length), 1)) : q(o).length > 0 ? (W(), se("ul", Ga, [
                (W(!0), se(je, null, _t(q(o), (N, s) => {
                  var r;
                  return W(), se("li", {
                    title: (r = q(o)[s]) == null ? void 0 : r.label
                  }, [
                    ae(Tt, {
                      option: q(o)[s],
                      "option-slot": h.optionSlot,
                      icon: h.optionsIcon,
                      modal: h.optionsModal,
                      "modal-data": h.optionsModalData,
                      download: h.optionsDownload,
                      "label-formatter": h.optionsLabelFormatter
                    }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter"])
                  ], 8, Ya);
                }), 256))
              ])) : de("", !0)
            ], 64)) : q(o).length > 0 ? (W(), le(Tt, {
              key: 1,
              option: q(o)[0],
              "option-slot": h.optionSlot,
              icon: h.optionsIcon,
              modal: h.optionsModal,
              "modal-data": h.optionsModalData,
              download: h.optionsDownload,
              "label-formatter": h.optionsLabelFormatter
            }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter"])) : de("", !0)
          ], 8, qa)) : h.modal ? (W(), le(y, {
            key: 6,
            class: "lkt-field--read-value",
            title: h.title,
            modal: h.modal,
            "modal-key": h.modalKey,
            "modal-data": h.modalData
          }, {
            default: xe(() => [
              oe("div", { innerHTML: q(o) }, null, 8, Ka)
            ]),
            _: 1
          }, 8, ["title", "modal", "modal-key", "modal-data"])) : h.download ? (W(), le(Tt, {
            key: 7,
            class: "lkt-field--read-value",
            option: { value: "", label: q(o) },
            download: h.download
          }, null, 8, ["option", "download"])) : h.type === q(Z).Number ? (W(), se("div", {
            key: 8,
            class: "lkt-field--read-value",
            innerHTML: h.title,
            title: h.title
          }, null, 8, Xa)) : (W(), se("div", {
            key: 9,
            class: "lkt-field--read-value",
            innerHTML: q(o),
            title: h.title
          }, null, 8, Ja))
        ], 64))
      ]);
    };
  }
}), er = ["name", "id", "disabled", "readonly", "placeholder", "accept"], tr = /* @__PURE__ */ Ne({
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
    const i = t, l = e, n = K(null), a = K(l.modelValue), c = K(l.fileName), d = K(l.uploading), o = (h) => {
      let u = h.target;
      if (u.files && u.files[0]) {
        c.value = u.files[0].name;
        const b = new FileReader();
        b.onload = (y) => {
          if (a.value = y.target.result, l.resource) {
            d.value = !0, i("uploading");
            let k = JSON.parse(JSON.stringify(l.resourceData));
            k.files = u.files[0], Qi(l.resource, k).then((x) => {
              a.value = x.data, d.value = !1, i("upload-success", x);
            }).catch((x) => {
              d.value = !1, i("upload-error", x);
            });
          }
        }, b.readAsDataURL(u.files[0]);
      }
      i("change", h);
    };
    return me(a, (h) => i("update:modelValue", h)), me(c, (h) => i("update:fileName", h)), (h, u) => {
      const b = Se("lkt-image"), y = Se("lkt-button");
      return W(), se(je, null, [
        oe("input", {
          ref_key: "inputElement",
          ref: n,
          type: "file",
          name: h.name,
          id: h.id,
          disabled: h.disabled,
          readonly: h.readonly,
          placeholder: h.placeholder,
          accept: h.accept,
          onChange: o
        }, null, 40, er),
        ae(y, {
          class: "lkt-field--toggle-button",
          "click-ref": n.value,
          text: h.isImage ? "" : c.value,
          disabled: h.disabled
        }, {
          default: xe(() => [
            h.isImage ? (W(), le(b, {
              key: 0,
              src: a.value,
              class: "lkt-field--image-cover"
            }, null, 8, ["src"])) : de("", !0),
            h.isImage ? (W(), le(b, {
              key: 1,
              src: a.value,
              class: "lkt-field--image-main"
            }, null, 8, ["src"])) : de("", !0)
          ]),
          _: 1
        }, 8, ["click-ref", "text", "disabled"])
      ], 64);
    };
  }
}), ir = { class: "lkt-calendar" }, lr = { class: "calendar" }, nr = { class: "lkt-calendar--header-grid" }, or = ["innerHTML"], sr = {
  key: 0,
  class: "lkt-calendar--day-grid"
}, ar = { class: "lkt-calendar--day lkt-calendar--filling-day" }, rr = /* @__PURE__ */ Ne({
  __name: "LktCalendar",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = K(l.modelValue);
    me(() => l.modelValue, (p) => n.value = p, { deep: !0 }), me(n, (p) => i("update:modelValue", p));
    const a = K(/* @__PURE__ */ new Date()), c = K(/* @__PURE__ */ new Date());
    ul(n.value) && typeof n.value < "u" && (c.value = new Date(n.value.getFullYear(), n.value.getMonth(), n.value.getDate()));
    const d = K(c.value.getFullYear()), o = K(c.value.getMonth()), h = K(!1), u = K(Qt("Y-m", c.value)), b = te(() => new Date(d.value, o.value + 1, 0).getDate()), y = te(() => new Date(d.value, o.value, 1).getDay()), k = () => {
      o.value > 11 && (o.value = 0, d.value += 1), o.value += 1, c.value.setFullYear(d.value, o.value), c.value = new Date(c.value), u.value = Qt("Y-m", c.value);
    }, x = () => {
      o.value < 0 && (o.value = 11, d.value -= 1), o.value -= 1, c.value.setFullYear(d.value, o.value), c.value = new Date(c.value), u.value = Qt("Y-m", c.value);
    }, N = (p) => typeof n.value > "u" || n.value.getFullYear() !== d.value || n.value.getMonth() !== o.value ? !1 : n.value.getDate() === p, s = (p) => typeof n.value > "u" || a.value.getFullYear() !== d.value || a.value.getMonth() !== o.value ? !1 : a.value.getDate() === p, r = (p) => ({
      "is-picked": N(p),
      "is-today": s(p)
    }), f = (p) => {
      var g;
      (g = n.value) == null || g.setFullYear(d.value, o.value, p), n.value = new Date(n.value);
    };
    return (p, g) => {
      const v = Se("lkt-button");
      return W(), se("div", ir, [
        oe("div", lr, [
          oe("header", nr, [
            ae(v, {
              class: "lkt-calendar--day",
              onClick: x
            }, {
              default: xe(() => g[0] || (g[0] = [
                Zt("◀")
              ])),
              _: 1
            }),
            oe("div", {
              class: "lkt-calendar--header-text",
              innerHTML: u.value
            }, null, 8, or),
            ae(v, {
              class: "lkt-calendar--day",
              onClick: k
            }, {
              default: xe(() => g[1] || (g[1] = [
                Zt("▶")
              ])),
              _: 1
            })
          ]),
          h.value ? de("", !0) : (W(), se("div", sr, [
            g[2] || (g[2] = Oo('<div class="lkt-calendar--day lkt-calendar--week-day">Su</div><div class="lkt-calendar--day lkt-calendar--week-day">Mo</div><div class="lkt-calendar--day lkt-calendar--week-day">Tu</div><div class="lkt-calendar--day lkt-calendar--week-day">We</div><div class="lkt-calendar--day lkt-calendar--week-day">Th</div><div class="lkt-calendar--day lkt-calendar--week-day">Fr</div><div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>', 7)),
            (W(!0), se(je, null, _t(y.value, (m) => (W(), se("div", ar))), 256)),
            (W(!0), se(je, null, _t(b.value, (m) => (W(), le(v, {
              class: lt(["lkt-calendar--day", r(m)]),
              text: m.toString(),
              onClick: () => f(m)
            }, null, 8, ["class", "text", "onClick"]))), 256))
          ]))
        ]),
        g[3] || (g[3] = oe("div", { class: "display-selected" }, [
          oe("p", { class: "selected" })
        ], -1))
      ]);
    };
  }
}), ur = /* @__PURE__ */ Ne({
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
    const i = t, l = e, n = K(void 0), a = K(""), c = K(l.modelValue), d = te(() => ee.dateReadFormat ? ee.dateReadFormat : ee.langDateReadFormat[l.lang] ? ee.langDateReadFormat[l.lang] : ee.defaultDateReadFormat ? ee.defaultDateReadFormat : "Y-m-d"), o = (u) => {
      let b = new Date(u);
      ul(b) && (n.value = b);
    }, h = () => {
      a.value = on(n.value, d.value);
    };
    return me(() => l.modelValue, (u) => {
      c.value = u, o(u);
    }), me(c, (u) => i("update:modelValue", u)), me(n, (u) => {
      typeof u > "u" ? c.value = "" : c.value = Qt("Y-m-d", u), h();
    }, { deep: !0 }), Di(() => {
      o(l.modelValue), h();
    }), (u, b) => {
      const y = Se("lkt-button");
      return W(), le(y, {
        class: "lkt-field--toggle-button",
        text: a.value,
        tooltip: "",
        "tooltip-class": "lkt-field--date--tooltip",
        "tooltip-location-y": "bottom",
        "tooltip-location-x": "left-corner"
      }, {
        tooltip: xe(() => [
          ae(rr, {
            modelValue: n.value,
            "onUpdate:modelValue": b[0] || (b[0] = (k) => n.value = k)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["text"]);
    };
  }
}), cr = { key: 1 }, io = /* @__PURE__ */ Ne({
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
    const l = K(e.modelValue), n = (a, c) => {
    };
    return (a, c) => {
      const d = Se("lkt-button");
      return W(), le(d, {
        modal: a.modal,
        "modal-key": a.modalKey,
        "modal-data": a.modalData,
        onClick: n
      }, {
        default: xe(() => [
          l.value ? ut(a.$slots, "item", {
            key: 0,
            item: l.value
          }) : (W(), se("p", cr, "No data"))
        ]),
        _: 3
      }, 8, ["modal", "modal-key", "modal-data"]);
    };
  }
}), dr = /* @__PURE__ */ Ne({
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
    const t = rl(), i = e, l = K(i.modelValue), n = te(() => typeof i.max == "boolean" || l.value.length < i.max ? ["modal-create"] : []);
    return (a, c) => {
      const d = Se("lkt-table");
      return W(), le(d, {
        type: "item",
        modelValue: l.value,
        "onUpdate:modelValue": c[0] || (c[0] = (o) => l.value = o),
        perms: n.value,
        "edit-mode": a.editable,
        "new-value-generator": () => {
        },
        modal: a.modal,
        "modal-key": a.modalKey,
        "modal-data": a.modalData,
        "required-items-for-top-create": 999999
      }, {
        item: xe(({ item: o, index: h, isLoading: u, canCreate: b, canRead: y, canUpdate: k, canDrop: x, doDrop: N }) => [
          ae(io, {
            modelValue: l.value[h],
            "onUpdate:modelValue": (s) => l.value[h] = s,
            "item-type": a.itemType
          }, _i({ _: 2 }, [
            q(t).item ? {
              name: "item",
              fn: xe(({ item: s }) => [
                ut(a.$slots, "item", {
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
});
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Zl(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    t && (l = l.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), i.push.apply(i, l);
  }
  return i;
}
function pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zl(Object(i), !0).forEach(function(l) {
      fr(e, l, i[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Zl(Object(i)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(i, l));
    });
  }
  return e;
}
function wi(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wi = function(t) {
    return typeof t;
  } : wi = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wi(e);
}
function fr(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
function wt() {
  return wt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var l in i)
        Object.prototype.hasOwnProperty.call(i, l) && (e[l] = i[l]);
    }
    return e;
  }, wt.apply(this, arguments);
}
function hr(e, t) {
  if (e == null) return {};
  var i = {}, l = Object.keys(e), n, a;
  for (a = 0; a < l.length; a++)
    n = l[a], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
  return i;
}
function pr(e, t) {
  if (e == null) return {};
  var i = hr(e, t), l, n;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++)
      l = a[n], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
  }
  return i;
}
var mr = "1.15.6";
function yt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Ct = yt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), si = yt(/Edge/i), $l = yt(/firefox/i), ei = yt(/safari/i) && !yt(/chrome/i) && !yt(/android/i), fl = yt(/iP(ad|od|hone)/i), lo = yt(/chrome/i) && yt(/android/i), no = {
  capture: !1,
  passive: !1
};
function ye(e, t, i) {
  e.addEventListener(t, i, !Ct && no);
}
function be(e, t, i) {
  e.removeEventListener(t, i, !Ct && no);
}
function Ni(e, t) {
  if (t) {
    if (t[0] === ">" && (t = t.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(t);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(t);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(t);
      } catch {
        return !1;
      }
    return !1;
  }
}
function oo(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function ct(e, t, i, l) {
  if (e) {
    i = i || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === i && Ni(e, t) : Ni(e, t)) || l && e === i)
        return e;
      if (e === i) break;
    } while (e = oo(e));
  }
  return null;
}
var ql = /\s+/g;
function tt(e, t, i) {
  if (e && t)
    if (e.classList)
      e.classList[i ? "add" : "remove"](t);
    else {
      var l = (" " + e.className + " ").replace(ql, " ").replace(" " + t + " ", " ");
      e.className = (l + (i ? " " + t : "")).replace(ql, " ");
    }
}
function ue(e, t, i) {
  var l = e && e.style;
  if (l) {
    if (i === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (i = e.currentStyle), t === void 0 ? i : i[t];
    !(t in l) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), l[t] = i + (typeof i == "string" ? "" : "px");
  }
}
function Wt(e, t) {
  var i = "";
  if (typeof e == "string")
    i = e;
  else
    do {
      var l = ue(e, "transform");
      l && l !== "none" && (i = l + " " + i);
    } while (!t && (e = e.parentNode));
  var n = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return n && new n(i);
}
function so(e, t, i) {
  if (e) {
    var l = e.getElementsByTagName(t), n = 0, a = l.length;
    if (i)
      for (; n < a; n++)
        i(l[n], n);
    return l;
  }
  return [];
}
function ht() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function He(e, t, i, l, n) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var a, c, d, o, h, u, b;
    if (e !== window && e.parentNode && e !== ht() ? (a = e.getBoundingClientRect(), c = a.top, d = a.left, o = a.bottom, h = a.right, u = a.height, b = a.width) : (c = 0, d = 0, o = window.innerHeight, h = window.innerWidth, u = window.innerHeight, b = window.innerWidth), (t || i) && e !== window && (n = n || e.parentNode, !Ct))
      do
        if (n && n.getBoundingClientRect && (ue(n, "transform") !== "none" || i && ue(n, "position") !== "static")) {
          var y = n.getBoundingClientRect();
          c -= y.top + parseInt(ue(n, "border-top-width")), d -= y.left + parseInt(ue(n, "border-left-width")), o = c + a.height, h = d + a.width;
          break;
        }
      while (n = n.parentNode);
    if (l && e !== window) {
      var k = Wt(n || e), x = k && k.a, N = k && k.d;
      k && (c /= N, d /= x, b /= x, u /= N, o = c + u, h = d + b);
    }
    return {
      top: c,
      left: d,
      bottom: o,
      right: h,
      width: b,
      height: u
    };
  }
}
function jl(e, t, i) {
  for (var l = Et(e, !0), n = He(e)[t]; l; ) {
    var a = He(l)[i], c = void 0;
    if (c = n >= a, !c) return l;
    if (l === ht()) break;
    l = Et(l, !1);
  }
  return !1;
}
function $t(e, t, i, l) {
  for (var n = 0, a = 0, c = e.children; a < c.length; ) {
    if (c[a].style.display !== "none" && c[a] !== ce.ghost && (l || c[a] !== ce.dragged) && ct(c[a], i.draggable, e, !1)) {
      if (n === t)
        return c[a];
      n++;
    }
    a++;
  }
  return null;
}
function hl(e, t) {
  for (var i = e.lastElementChild; i && (i === ce.ghost || ue(i, "display") === "none" || t && !Ni(i, t)); )
    i = i.previousElementSibling;
  return i || null;
}
function ot(e, t) {
  var i = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== ce.clone && (!t || Ni(e, t)) && i++;
  return i;
}
function Gl(e) {
  var t = 0, i = 0, l = ht();
  if (e)
    do {
      var n = Wt(e), a = n.a, c = n.d;
      t += e.scrollLeft * a, i += e.scrollTop * c;
    } while (e !== l && (e = e.parentNode));
  return [t, i];
}
function gr(e, t) {
  for (var i in e)
    if (e.hasOwnProperty(i)) {
      for (var l in t)
        if (t.hasOwnProperty(l) && t[l] === e[i][l]) return Number(i);
    }
  return -1;
}
function Et(e, t) {
  if (!e || !e.getBoundingClientRect) return ht();
  var i = e, l = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var n = ue(i);
      if (i.clientWidth < i.scrollWidth && (n.overflowX == "auto" || n.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (n.overflowY == "auto" || n.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return ht();
        if (l || t) return i;
        l = !0;
      }
    }
  while (i = i.parentNode);
  return ht();
}
function vr(e, t) {
  if (e && t)
    for (var i in t)
      t.hasOwnProperty(i) && (e[i] = t[i]);
  return e;
}
function Wi(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var ti;
function ao(e, t) {
  return function() {
    if (!ti) {
      var i = arguments, l = this;
      i.length === 1 ? e.call(l, i[0]) : e.apply(l, i), ti = setTimeout(function() {
        ti = void 0;
      }, t);
    }
  };
}
function br() {
  clearTimeout(ti), ti = void 0;
}
function ro(e, t, i) {
  e.scrollLeft += t, e.scrollTop += i;
}
function uo(e) {
  var t = window.Polymer, i = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : i ? i(e).clone(!0)[0] : e.cloneNode(!0);
}
function co(e, t, i) {
  var l = {};
  return Array.from(e.children).forEach(function(n) {
    var a, c, d, o;
    if (!(!ct(n, t.draggable, e, !1) || n.animated || n === i)) {
      var h = He(n);
      l.left = Math.min((a = l.left) !== null && a !== void 0 ? a : 1 / 0, h.left), l.top = Math.min((c = l.top) !== null && c !== void 0 ? c : 1 / 0, h.top), l.right = Math.max((d = l.right) !== null && d !== void 0 ? d : -1 / 0, h.right), l.bottom = Math.max((o = l.bottom) !== null && o !== void 0 ? o : -1 / 0, h.bottom);
    }
  }), l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
var et = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function yr() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var l = [].slice.call(this.el.children);
        l.forEach(function(n) {
          if (!(ue(n, "display") === "none" || n === ce.ghost)) {
            e.push({
              target: n,
              rect: He(n)
            });
            var a = pt({}, e[e.length - 1].rect);
            if (n.thisAnimationDuration) {
              var c = Wt(n, !0);
              c && (a.top -= c.f, a.left -= c.e);
            }
            n.fromRect = a;
          }
        });
      }
    },
    addAnimationState: function(l) {
      e.push(l);
    },
    removeAnimationState: function(l) {
      e.splice(gr(e, {
        target: l
      }), 1);
    },
    animateAll: function(l) {
      var n = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof l == "function" && l();
        return;
      }
      var a = !1, c = 0;
      e.forEach(function(d) {
        var o = 0, h = d.target, u = h.fromRect, b = He(h), y = h.prevFromRect, k = h.prevToRect, x = d.rect, N = Wt(h, !0);
        N && (b.top -= N.f, b.left -= N.e), h.toRect = b, h.thisAnimationDuration && Wi(y, b) && !Wi(u, b) && // Make sure animatingRect is on line between toRect & fromRect
        (x.top - b.top) / (x.left - b.left) === (u.top - b.top) / (u.left - b.left) && (o = wr(x, y, k, n.options)), Wi(b, u) || (h.prevFromRect = u, h.prevToRect = b, o || (o = n.options.animation), n.animate(h, x, b, o)), o && (a = !0, c = Math.max(c, o), clearTimeout(h.animationResetTimer), h.animationResetTimer = setTimeout(function() {
          h.animationTime = 0, h.prevFromRect = null, h.fromRect = null, h.prevToRect = null, h.thisAnimationDuration = null;
        }, o), h.thisAnimationDuration = o);
      }), clearTimeout(t), a ? t = setTimeout(function() {
        typeof l == "function" && l();
      }, c) : typeof l == "function" && l(), e = [];
    },
    animate: function(l, n, a, c) {
      if (c) {
        ue(l, "transition", ""), ue(l, "transform", "");
        var d = Wt(this.el), o = d && d.a, h = d && d.d, u = (n.left - a.left) / (o || 1), b = (n.top - a.top) / (h || 1);
        l.animatingX = !!u, l.animatingY = !!b, ue(l, "transform", "translate3d(" + u + "px," + b + "px,0)"), this.forRepaintDummy = _r(l), ue(l, "transition", "transform " + c + "ms" + (this.options.easing ? " " + this.options.easing : "")), ue(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          ue(l, "transition", ""), ue(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, c);
      }
    }
  };
}
function _r(e) {
  return e.offsetWidth;
}
function wr(e, t, i, l) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - i.top, 2) + Math.pow(t.left - i.left, 2)) * l.animation;
}
var Ht = [], Zi = {
  initializeByDefault: !0
}, ai = {
  mount: function(t) {
    for (var i in Zi)
      Zi.hasOwnProperty(i) && !(i in t) && (t[i] = Zi[i]);
    Ht.forEach(function(l) {
      if (l.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), Ht.push(t);
  },
  pluginEvent: function(t, i, l) {
    var n = this;
    this.eventCanceled = !1, l.cancel = function() {
      n.eventCanceled = !0;
    };
    var a = t + "Global";
    Ht.forEach(function(c) {
      i[c.pluginName] && (i[c.pluginName][a] && i[c.pluginName][a](pt({
        sortable: i
      }, l)), i.options[c.pluginName] && i[c.pluginName][t] && i[c.pluginName][t](pt({
        sortable: i
      }, l)));
    });
  },
  initializePlugins: function(t, i, l, n) {
    Ht.forEach(function(d) {
      var o = d.pluginName;
      if (!(!t.options[o] && !d.initializeByDefault)) {
        var h = new d(t, i, t.options);
        h.sortable = t, h.options = t.options, t[o] = h, wt(l, h.defaults);
      }
    });
    for (var a in t.options)
      if (t.options.hasOwnProperty(a)) {
        var c = this.modifyOption(t, a, t.options[a]);
        typeof c < "u" && (t.options[a] = c);
      }
  },
  getEventProperties: function(t, i) {
    var l = {};
    return Ht.forEach(function(n) {
      typeof n.eventProperties == "function" && wt(l, n.eventProperties.call(i[n.pluginName], t));
    }), l;
  },
  modifyOption: function(t, i, l) {
    var n;
    return Ht.forEach(function(a) {
      t[a.pluginName] && a.optionListeners && typeof a.optionListeners[i] == "function" && (n = a.optionListeners[i].call(t[a.pluginName], l));
    }), n;
  }
};
function Cr(e) {
  var t = e.sortable, i = e.rootEl, l = e.name, n = e.targetEl, a = e.cloneEl, c = e.toEl, d = e.fromEl, o = e.oldIndex, h = e.newIndex, u = e.oldDraggableIndex, b = e.newDraggableIndex, y = e.originalEvent, k = e.putSortable, x = e.extraEventProperties;
  if (t = t || i && i[et], !!t) {
    var N, s = t.options, r = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !Ct && !si ? N = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (N = document.createEvent("Event"), N.initEvent(l, !0, !0)), N.to = c || i, N.from = d || i, N.item = n || i, N.clone = a, N.oldIndex = o, N.newIndex = h, N.oldDraggableIndex = u, N.newDraggableIndex = b, N.originalEvent = y, N.pullMode = k ? k.lastPutMode : void 0;
    var f = pt(pt({}, x), ai.getEventProperties(l, t));
    for (var p in f)
      N[p] = f[p];
    i && i.dispatchEvent(N), s[r] && s[r].call(t, N);
  }
}
var kr = ["evt"], Je = function(t, i) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = l.evt, a = pr(l, kr);
  ai.pluginEvent.bind(ce)(t, i, pt({
    dragEl: Q,
    parentEl: Ie,
    ghostEl: he,
    rootEl: Ae,
    nextEl: Dt,
    lastDownEl: Ci,
    cloneEl: Re,
    cloneHidden: St,
    dragStarted: Yt,
    putSortable: We,
    activeSortable: ce.active,
    originalEvent: n,
    oldIndex: Ut,
    oldDraggableIndex: ii,
    newIndex: it,
    newDraggableIndex: xt,
    hideGhostForTarget: mo,
    unhideGhostForTarget: go,
    cloneNowHidden: function() {
      St = !0;
    },
    cloneNowShown: function() {
      St = !1;
    },
    dispatchSortableEvent: function(d) {
      qe({
        sortable: i,
        name: d,
        originalEvent: n
      });
    }
  }, a));
};
function qe(e) {
  Cr(pt({
    putSortable: We,
    cloneEl: Re,
    targetEl: Q,
    rootEl: Ae,
    oldIndex: Ut,
    oldDraggableIndex: ii,
    newIndex: it,
    newDraggableIndex: xt
  }, e));
}
var Q, Ie, he, Ae, Dt, Ci, Re, St, Ut, it, ii, xt, gi, We, Pt = !1, Bi = !1, zi = [], zt, rt, $i, qi, Yl, Kl, Yt, Ft, li, ni = !1, vi = !1, ki, Ze, ji = [], ll = !1, Ai = [], Oi = typeof document < "u", bi = fl, Xl = si || Ct ? "cssFloat" : "float", xr = Oi && !lo && !fl && "draggable" in document.createElement("div"), fo = function() {
  if (Oi) {
    if (Ct)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), ho = function(t, i) {
  var l = ue(t), n = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), a = $t(t, 0, i), c = $t(t, 1, i), d = a && ue(a), o = c && ue(c), h = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + He(a).width, u = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + He(c).width;
  if (l.display === "flex")
    return l.flexDirection === "column" || l.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (l.display === "grid")
    return l.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (a && d.float && d.float !== "none") {
    var b = d.float === "left" ? "left" : "right";
    return c && (o.clear === "both" || o.clear === b) ? "vertical" : "horizontal";
  }
  return a && (d.display === "block" || d.display === "flex" || d.display === "table" || d.display === "grid" || h >= n && l[Xl] === "none" || c && l[Xl] === "none" && h + u > n) ? "vertical" : "horizontal";
}, Sr = function(t, i, l) {
  var n = l ? t.left : t.top, a = l ? t.right : t.bottom, c = l ? t.width : t.height, d = l ? i.left : i.top, o = l ? i.right : i.bottom, h = l ? i.width : i.height;
  return n === d || a === o || n + c / 2 === d + h / 2;
}, Er = function(t, i) {
  var l;
  return zi.some(function(n) {
    var a = n[et].options.emptyInsertThreshold;
    if (!(!a || hl(n))) {
      var c = He(n), d = t >= c.left - a && t <= c.right + a, o = i >= c.top - a && i <= c.bottom + a;
      if (d && o)
        return l = n;
    }
  }), l;
}, po = function(t) {
  function i(a, c) {
    return function(d, o, h, u) {
      var b = d.options.group.name && o.options.group.name && d.options.group.name === o.options.group.name;
      if (a == null && (c || b))
        return !0;
      if (a == null || a === !1)
        return !1;
      if (c && a === "clone")
        return a;
      if (typeof a == "function")
        return i(a(d, o, h, u), c)(d, o, h, u);
      var y = (c ? d : o).options.group.name;
      return a === !0 || typeof a == "string" && a === y || a.join && a.indexOf(y) > -1;
    };
  }
  var l = {}, n = t.group;
  (!n || wi(n) != "object") && (n = {
    name: n
  }), l.name = n.name, l.checkPull = i(n.pull, !0), l.checkPut = i(n.put), l.revertClone = n.revertClone, t.group = l;
}, mo = function() {
  !fo && he && ue(he, "display", "none");
}, go = function() {
  !fo && he && ue(he, "display", "");
};
Oi && !lo && document.addEventListener("click", function(e) {
  if (Bi)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Bi = !1, !1;
}, !0);
var At = function(t) {
  if (Q) {
    t = t.touches ? t.touches[0] : t;
    var i = Er(t.clientX, t.clientY);
    if (i) {
      var l = {};
      for (var n in t)
        t.hasOwnProperty(n) && (l[n] = t[n]);
      l.target = l.rootEl = i, l.preventDefault = void 0, l.stopPropagation = void 0, i[et]._onDragOver(l);
    }
  }
}, Tr = function(t) {
  Q && Q.parentNode[et]._isOutsideThisEl(t.target);
};
function ce(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = wt({}, t), e[et] = this;
  var i = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return ho(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(c, d) {
      c.setData("Text", d.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: ce.supportPointer !== !1 && "PointerEvent" in window && (!ei || fl),
    emptyInsertThreshold: 5
  };
  ai.initializePlugins(this, e, i);
  for (var l in i)
    !(l in t) && (t[l] = i[l]);
  po(t);
  for (var n in this)
    n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : xr, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? ye(e, "pointerdown", this._onTapStart) : (ye(e, "mousedown", this._onTapStart), ye(e, "touchstart", this._onTapStart)), this.nativeDraggable && (ye(e, "dragover", this), ye(e, "dragenter", this)), zi.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), wt(this, yr());
}
ce.prototype = /** @lends Sortable.prototype */
{
  constructor: ce,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (Ft = null);
  },
  _getDirection: function(t, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, i, Q) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var i = this, l = this.el, n = this.options, a = n.preventOnFilter, c = t.type, d = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, o = (d || t).target, h = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || o, u = n.filter;
      if (Ir(l), !Q && !(/mousedown|pointerdown/.test(c) && t.button !== 0 || n.disabled) && !h.isContentEditable && !(!this.nativeDraggable && ei && o && o.tagName.toUpperCase() === "SELECT") && (o = ct(o, n.draggable, l, !1), !(o && o.animated) && Ci !== o)) {
        if (Ut = ot(o), ii = ot(o, n.draggable), typeof u == "function") {
          if (u.call(this, t, o, this)) {
            qe({
              sortable: i,
              rootEl: h,
              name: "filter",
              targetEl: o,
              toEl: l,
              fromEl: l
            }), Je("filter", i, {
              evt: t
            }), a && t.preventDefault();
            return;
          }
        } else if (u && (u = u.split(",").some(function(b) {
          if (b = ct(h, b.trim(), l, !1), b)
            return qe({
              sortable: i,
              rootEl: b,
              name: "filter",
              targetEl: o,
              fromEl: l,
              toEl: l
            }), Je("filter", i, {
              evt: t
            }), !0;
        }), u)) {
          a && t.preventDefault();
          return;
        }
        n.handle && !ct(h, n.handle, l, !1) || this._prepareDragStart(t, d, o);
      }
    }
  },
  _prepareDragStart: function(t, i, l) {
    var n = this, a = n.el, c = n.options, d = a.ownerDocument, o;
    if (l && !Q && l.parentNode === a) {
      var h = He(l);
      if (Ae = a, Q = l, Ie = Q.parentNode, Dt = Q.nextSibling, Ci = l, gi = c.group, ce.dragged = Q, zt = {
        target: Q,
        clientX: (i || t).clientX,
        clientY: (i || t).clientY
      }, Yl = zt.clientX - h.left, Kl = zt.clientY - h.top, this._lastX = (i || t).clientX, this._lastY = (i || t).clientY, Q.style["will-change"] = "all", o = function() {
        if (Je("delayEnded", n, {
          evt: t
        }), ce.eventCanceled) {
          n._onDrop();
          return;
        }
        n._disableDelayedDragEvents(), !$l && n.nativeDraggable && (Q.draggable = !0), n._triggerDragStart(t, i), qe({
          sortable: n,
          name: "choose",
          originalEvent: t
        }), tt(Q, c.chosenClass, !0);
      }, c.ignore.split(",").forEach(function(u) {
        so(Q, u.trim(), Gi);
      }), ye(d, "dragover", At), ye(d, "mousemove", At), ye(d, "touchmove", At), c.supportPointer ? (ye(d, "pointerup", n._onDrop), !this.nativeDraggable && ye(d, "pointercancel", n._onDrop)) : (ye(d, "mouseup", n._onDrop), ye(d, "touchend", n._onDrop), ye(d, "touchcancel", n._onDrop)), $l && this.nativeDraggable && (this.options.touchStartThreshold = 4, Q.draggable = !0), Je("delayStart", this, {
        evt: t
      }), c.delay && (!c.delayOnTouchOnly || i) && (!this.nativeDraggable || !(si || Ct))) {
        if (ce.eventCanceled) {
          this._onDrop();
          return;
        }
        c.supportPointer ? (ye(d, "pointerup", n._disableDelayedDrag), ye(d, "pointercancel", n._disableDelayedDrag)) : (ye(d, "mouseup", n._disableDelayedDrag), ye(d, "touchend", n._disableDelayedDrag), ye(d, "touchcancel", n._disableDelayedDrag)), ye(d, "mousemove", n._delayedDragTouchMoveHandler), ye(d, "touchmove", n._delayedDragTouchMoveHandler), c.supportPointer && ye(d, "pointermove", n._delayedDragTouchMoveHandler), n._dragStartTimer = setTimeout(o, c.delay);
      } else
        o();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var i = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    Q && Gi(Q), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    be(t, "mouseup", this._disableDelayedDrag), be(t, "touchend", this._disableDelayedDrag), be(t, "touchcancel", this._disableDelayedDrag), be(t, "pointerup", this._disableDelayedDrag), be(t, "pointercancel", this._disableDelayedDrag), be(t, "mousemove", this._delayedDragTouchMoveHandler), be(t, "touchmove", this._delayedDragTouchMoveHandler), be(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, i) {
    i = i || t.pointerType == "touch" && t, !this.nativeDraggable || i ? this.options.supportPointer ? ye(document, "pointermove", this._onTouchMove) : i ? ye(document, "touchmove", this._onTouchMove) : ye(document, "mousemove", this._onTouchMove) : (ye(Q, "dragend", this), ye(Ae, "dragstart", this._onDragStart));
    try {
      document.selection ? xi(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, i) {
    if (Pt = !1, Ae && Q) {
      Je("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && ye(document, "dragover", Tr);
      var l = this.options;
      !t && tt(Q, l.dragClass, !1), tt(Q, l.ghostClass, !0), ce.active = this, t && this._appendGhost(), qe({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (rt) {
      this._lastX = rt.clientX, this._lastY = rt.clientY, mo();
      for (var t = document.elementFromPoint(rt.clientX, rt.clientY), i = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(rt.clientX, rt.clientY), t !== i); )
        i = t;
      if (Q.parentNode[et]._isOutsideThisEl(t), i)
        do {
          if (i[et]) {
            var l = void 0;
            if (l = i[et]._onDragOver({
              clientX: rt.clientX,
              clientY: rt.clientY,
              target: t,
              rootEl: i
            }), l && !this.options.dragoverBubble)
              break;
          }
          t = i;
        } while (i = oo(i));
      go();
    }
  },
  _onTouchMove: function(t) {
    if (zt) {
      var i = this.options, l = i.fallbackTolerance, n = i.fallbackOffset, a = t.touches ? t.touches[0] : t, c = he && Wt(he, !0), d = he && c && c.a, o = he && c && c.d, h = bi && Ze && Gl(Ze), u = (a.clientX - zt.clientX + n.x) / (d || 1) + (h ? h[0] - ji[0] : 0) / (d || 1), b = (a.clientY - zt.clientY + n.y) / (o || 1) + (h ? h[1] - ji[1] : 0) / (o || 1);
      if (!ce.active && !Pt) {
        if (l && Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) < l)
          return;
        this._onDragStart(t, !0);
      }
      if (he) {
        c ? (c.e += u - ($i || 0), c.f += b - (qi || 0)) : c = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: u,
          f: b
        };
        var y = "matrix(".concat(c.a, ",").concat(c.b, ",").concat(c.c, ",").concat(c.d, ",").concat(c.e, ",").concat(c.f, ")");
        ue(he, "webkitTransform", y), ue(he, "mozTransform", y), ue(he, "msTransform", y), ue(he, "transform", y), $i = u, qi = b, rt = a;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!he) {
      var t = this.options.fallbackOnBody ? document.body : Ae, i = He(Q, !0, bi, !0, t), l = this.options;
      if (bi) {
        for (Ze = t; ue(Ze, "position") === "static" && ue(Ze, "transform") === "none" && Ze !== document; )
          Ze = Ze.parentNode;
        Ze !== document.body && Ze !== document.documentElement ? (Ze === document && (Ze = ht()), i.top += Ze.scrollTop, i.left += Ze.scrollLeft) : Ze = ht(), ji = Gl(Ze);
      }
      he = Q.cloneNode(!0), tt(he, l.ghostClass, !1), tt(he, l.fallbackClass, !0), tt(he, l.dragClass, !0), ue(he, "transition", ""), ue(he, "transform", ""), ue(he, "box-sizing", "border-box"), ue(he, "margin", 0), ue(he, "top", i.top), ue(he, "left", i.left), ue(he, "width", i.width), ue(he, "height", i.height), ue(he, "opacity", "0.8"), ue(he, "position", bi ? "absolute" : "fixed"), ue(he, "zIndex", "100000"), ue(he, "pointerEvents", "none"), ce.ghost = he, t.appendChild(he), ue(he, "transform-origin", Yl / parseInt(he.style.width) * 100 + "% " + Kl / parseInt(he.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, i) {
    var l = this, n = t.dataTransfer, a = l.options;
    if (Je("dragStart", this, {
      evt: t
    }), ce.eventCanceled) {
      this._onDrop();
      return;
    }
    Je("setupClone", this), ce.eventCanceled || (Re = uo(Q), Re.removeAttribute("id"), Re.draggable = !1, Re.style["will-change"] = "", this._hideClone(), tt(Re, this.options.chosenClass, !1), ce.clone = Re), l.cloneId = xi(function() {
      Je("clone", l), !ce.eventCanceled && (l.options.removeCloneOnHide || Ae.insertBefore(Re, Q), l._hideClone(), qe({
        sortable: l,
        name: "clone"
      }));
    }), !i && tt(Q, a.dragClass, !0), i ? (Bi = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : (be(document, "mouseup", l._onDrop), be(document, "touchend", l._onDrop), be(document, "touchcancel", l._onDrop), n && (n.effectAllowed = "move", a.setData && a.setData.call(l, n, Q)), ye(document, "drop", l), ue(Q, "transform", "translateZ(0)")), Pt = !0, l._dragStartId = xi(l._dragStarted.bind(l, i, t)), ye(document, "selectstart", l), Yt = !0, window.getSelection().removeAllRanges(), ei && ue(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var i = this.el, l = t.target, n, a, c, d = this.options, o = d.group, h = ce.active, u = gi === o, b = d.sort, y = We || h, k, x = this, N = !1;
    if (ll) return;
    function s(M, F) {
      Je(M, x, pt({
        evt: t,
        isOwner: u,
        axis: k ? "vertical" : "horizontal",
        revert: c,
        dragRect: n,
        targetRect: a,
        canSort: b,
        fromSortable: y,
        target: l,
        completed: f,
        onMove: function(O, R) {
          return yi(Ae, i, Q, n, O, He(O), t, R);
        },
        changed: p
      }, F));
    }
    function r() {
      s("dragOverAnimationCapture"), x.captureAnimationState(), x !== y && y.captureAnimationState();
    }
    function f(M) {
      return s("dragOverCompleted", {
        insertion: M
      }), M && (u ? h._hideClone() : h._showClone(x), x !== y && (tt(Q, We ? We.options.ghostClass : h.options.ghostClass, !1), tt(Q, d.ghostClass, !0)), We !== x && x !== ce.active ? We = x : x === ce.active && We && (We = null), y === x && (x._ignoreWhileAnimating = l), x.animateAll(function() {
        s("dragOverAnimationComplete"), x._ignoreWhileAnimating = null;
      }), x !== y && (y.animateAll(), y._ignoreWhileAnimating = null)), (l === Q && !Q.animated || l === i && !l.animated) && (Ft = null), !d.dragoverBubble && !t.rootEl && l !== document && (Q.parentNode[et]._isOutsideThisEl(t.target), !M && At(t)), !d.dragoverBubble && t.stopPropagation && t.stopPropagation(), N = !0;
    }
    function p() {
      it = ot(Q), xt = ot(Q, d.draggable), qe({
        sortable: x,
        name: "change",
        toEl: i,
        newIndex: it,
        newDraggableIndex: xt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), l = ct(l, d.draggable, i, !0), s("dragOver"), ce.eventCanceled) return N;
    if (Q.contains(t.target) || l.animated && l.animatingX && l.animatingY || x._ignoreWhileAnimating === l)
      return f(!1);
    if (Bi = !1, h && !d.disabled && (u ? b || (c = Ie !== Ae) : We === this || (this.lastPutMode = gi.checkPull(this, h, Q, t)) && o.checkPut(this, h, Q, t))) {
      if (k = this._getDirection(t, l) === "vertical", n = He(Q), s("dragOverValid"), ce.eventCanceled) return N;
      if (c)
        return Ie = Ae, r(), this._hideClone(), s("revert"), ce.eventCanceled || (Dt ? Ae.insertBefore(Q, Dt) : Ae.appendChild(Q)), f(!0);
      var g = hl(i, d.draggable);
      if (!g || zr(t, k, this) && !g.animated) {
        if (g === Q)
          return f(!1);
        if (g && i === t.target && (l = g), l && (a = He(l)), yi(Ae, i, Q, n, l, a, t, !!l) !== !1)
          return r(), g && g.nextSibling ? i.insertBefore(Q, g.nextSibling) : i.appendChild(Q), Ie = i, p(), f(!0);
      } else if (g && Br(t, k, this)) {
        var v = $t(i, 0, d, !0);
        if (v === Q)
          return f(!1);
        if (l = v, a = He(l), yi(Ae, i, Q, n, l, a, t, !1) !== !1)
          return r(), i.insertBefore(Q, v), Ie = i, p(), f(!0);
      } else if (l.parentNode === i) {
        a = He(l);
        var m = 0, _, C = Q.parentNode !== i, w = !Sr(Q.animated && Q.toRect || n, l.animated && l.toRect || a, k), S = k ? "top" : "left", I = jl(l, "top", "top") || jl(Q, "top", "top"), E = I ? I.scrollTop : void 0;
        Ft !== l && (_ = a[S], ni = !1, vi = !w && d.invertSwap || C), m = Ar(t, l, a, k, w ? 1 : d.swapThreshold, d.invertedSwapThreshold == null ? d.swapThreshold : d.invertedSwapThreshold, vi, Ft === l);
        var L;
        if (m !== 0) {
          var z = ot(Q);
          do
            z -= m, L = Ie.children[z];
          while (L && (ue(L, "display") === "none" || L === he));
        }
        if (m === 0 || L === l)
          return f(!1);
        Ft = l, li = m;
        var P = l.nextElementSibling, U = !1;
        U = m === 1;
        var V = yi(Ae, i, Q, n, l, a, t, U);
        if (V !== !1)
          return (V === 1 || V === -1) && (U = V === 1), ll = !0, setTimeout(Nr, 30), r(), U && !P ? i.appendChild(Q) : l.parentNode.insertBefore(Q, U ? P : l), I && ro(I, 0, E - I.scrollTop), Ie = Q.parentNode, _ !== void 0 && !vi && (ki = Math.abs(_ - He(l)[S])), p(), f(!0);
      }
      if (i.contains(Q))
        return f(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    be(document, "mousemove", this._onTouchMove), be(document, "touchmove", this._onTouchMove), be(document, "pointermove", this._onTouchMove), be(document, "dragover", At), be(document, "mousemove", At), be(document, "touchmove", At);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    be(t, "mouseup", this._onDrop), be(t, "touchend", this._onDrop), be(t, "pointerup", this._onDrop), be(t, "pointercancel", this._onDrop), be(t, "touchcancel", this._onDrop), be(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var i = this.el, l = this.options;
    if (it = ot(Q), xt = ot(Q, l.draggable), Je("drop", this, {
      evt: t
    }), Ie = Q && Q.parentNode, it = ot(Q), xt = ot(Q, l.draggable), ce.eventCanceled) {
      this._nulling();
      return;
    }
    Pt = !1, vi = !1, ni = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), nl(this.cloneId), nl(this._dragStartId), this.nativeDraggable && (be(document, "drop", this), be(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ei && ue(document.body, "user-select", ""), ue(Q, "transform", ""), t && (Yt && (t.cancelable && t.preventDefault(), !l.dropBubble && t.stopPropagation()), he && he.parentNode && he.parentNode.removeChild(he), (Ae === Ie || We && We.lastPutMode !== "clone") && Re && Re.parentNode && Re.parentNode.removeChild(Re), Q && (this.nativeDraggable && be(Q, "dragend", this), Gi(Q), Q.style["will-change"] = "", Yt && !Pt && tt(Q, We ? We.options.ghostClass : this.options.ghostClass, !1), tt(Q, this.options.chosenClass, !1), qe({
      sortable: this,
      name: "unchoose",
      toEl: Ie,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Ae !== Ie ? (it >= 0 && (qe({
      rootEl: Ie,
      name: "add",
      toEl: Ie,
      fromEl: Ae,
      originalEvent: t
    }), qe({
      sortable: this,
      name: "remove",
      toEl: Ie,
      originalEvent: t
    }), qe({
      rootEl: Ie,
      name: "sort",
      toEl: Ie,
      fromEl: Ae,
      originalEvent: t
    }), qe({
      sortable: this,
      name: "sort",
      toEl: Ie,
      originalEvent: t
    })), We && We.save()) : it !== Ut && it >= 0 && (qe({
      sortable: this,
      name: "update",
      toEl: Ie,
      originalEvent: t
    }), qe({
      sortable: this,
      name: "sort",
      toEl: Ie,
      originalEvent: t
    })), ce.active && ((it == null || it === -1) && (it = Ut, xt = ii), qe({
      sortable: this,
      name: "end",
      toEl: Ie,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Je("nulling", this), Ae = Q = Ie = he = Dt = Re = Ci = St = zt = rt = Yt = it = xt = Ut = ii = Ft = li = We = gi = ce.dragged = ce.ghost = ce.clone = ce.active = null, Ai.forEach(function(t) {
      t.checked = !0;
    }), Ai.length = $i = qi = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        Q && (this._onDragOver(t), Lr(t));
        break;
      case "selectstart":
        t.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var t = [], i, l = this.el.children, n = 0, a = l.length, c = this.options; n < a; n++)
      i = l[n], ct(i, c.draggable, this.el, !1) && t.push(i.getAttribute(c.dataIdAttr) || Dr(i));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, i) {
    var l = {}, n = this.el;
    this.toArray().forEach(function(a, c) {
      var d = n.children[c];
      ct(d, this.options.draggable, n, !1) && (l[a] = d);
    }, this), i && this.captureAnimationState(), t.forEach(function(a) {
      l[a] && (n.removeChild(l[a]), n.appendChild(l[a]));
    }), i && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var t = this.options.store;
    t && t.set && t.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(t, i) {
    return ct(t, i || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(t, i) {
    var l = this.options;
    if (i === void 0)
      return l[t];
    var n = ai.modifyOption(this, t, i);
    typeof n < "u" ? l[t] = n : l[t] = i, t === "group" && po(l);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Je("destroy", this);
    var t = this.el;
    t[et] = null, be(t, "mousedown", this._onTapStart), be(t, "touchstart", this._onTapStart), be(t, "pointerdown", this._onTapStart), this.nativeDraggable && (be(t, "dragover", this), be(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), zi.splice(zi.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!St) {
      if (Je("hideClone", this), ce.eventCanceled) return;
      ue(Re, "display", "none"), this.options.removeCloneOnHide && Re.parentNode && Re.parentNode.removeChild(Re), St = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (St) {
      if (Je("showClone", this), ce.eventCanceled) return;
      Q.parentNode == Ae && !this.options.group.revertClone ? Ae.insertBefore(Re, Q) : Dt ? Ae.insertBefore(Re, Dt) : Ae.appendChild(Re), this.options.group.revertClone && this.animate(Q, Re), ue(Re, "display", ""), St = !1;
    }
  }
};
function Lr(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function yi(e, t, i, l, n, a, c, d) {
  var o, h = e[et], u = h.options.onMove, b;
  return window.CustomEvent && !Ct && !si ? o = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("Event"), o.initEvent("move", !0, !0)), o.to = t, o.from = e, o.dragged = i, o.draggedRect = l, o.related = n || t, o.relatedRect = a || He(t), o.willInsertAfter = d, o.originalEvent = c, e.dispatchEvent(o), u && (b = u.call(h, o, c)), b;
}
function Gi(e) {
  e.draggable = !1;
}
function Nr() {
  ll = !1;
}
function Br(e, t, i) {
  var l = He($t(i.el, 0, i.options, !0)), n = co(i.el, i.options, he), a = 10;
  return t ? e.clientX < n.left - a || e.clientY < l.top && e.clientX < l.right : e.clientY < n.top - a || e.clientY < l.bottom && e.clientX < l.left;
}
function zr(e, t, i) {
  var l = He(hl(i.el, i.options.draggable)), n = co(i.el, i.options, he), a = 10;
  return t ? e.clientX > n.right + a || e.clientY > l.bottom && e.clientX > l.left : e.clientY > n.bottom + a || e.clientX > l.right && e.clientY > l.top;
}
function Ar(e, t, i, l, n, a, c, d) {
  var o = l ? e.clientY : e.clientX, h = l ? i.height : i.width, u = l ? i.top : i.left, b = l ? i.bottom : i.right, y = !1;
  if (!c) {
    if (d && ki < h * n) {
      if (!ni && (li === 1 ? o > u + h * a / 2 : o < b - h * a / 2) && (ni = !0), ni)
        y = !0;
      else if (li === 1 ? o < u + ki : o > b - ki)
        return -li;
    } else if (o > u + h * (1 - n) / 2 && o < b - h * (1 - n) / 2)
      return Rr(t);
  }
  return y = y || c, y && (o < u + h * a / 2 || o > b - h * a / 2) ? o > u + h / 2 ? 1 : -1 : 0;
}
function Rr(e) {
  return ot(Q) < ot(e) ? 1 : -1;
}
function Dr(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, i = t.length, l = 0; i--; )
    l += t.charCodeAt(i);
  return l.toString(36);
}
function Ir(e) {
  Ai.length = 0;
  for (var t = e.getElementsByTagName("input"), i = t.length; i--; ) {
    var l = t[i];
    l.checked && Ai.push(l);
  }
}
function xi(e) {
  return setTimeout(e, 0);
}
function nl(e) {
  return clearTimeout(e);
}
Oi && ye(document, "touchmove", function(e) {
  (ce.active || Pt) && e.cancelable && e.preventDefault();
});
ce.utils = {
  on: ye,
  off: be,
  css: ue,
  find: so,
  is: function(t, i) {
    return !!ct(t, i, t, !1);
  },
  extend: vr,
  throttle: ao,
  closest: ct,
  toggleClass: tt,
  clone: uo,
  index: ot,
  nextTick: xi,
  cancelNextTick: nl,
  detectDirection: ho,
  getChild: $t,
  expando: et
};
ce.get = function(e) {
  return e[et];
};
ce.mount = function() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(l) {
    if (!l.prototype || !l.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));
    l.utils && (ce.utils = pt(pt({}, ce.utils), l.utils)), ai.mount(l);
  });
};
ce.create = function(e, t) {
  return new ce(e, t);
};
ce.version = mr;
var Oe = [], Kt, ol, sl = !1, Yi, Ki, Ri, Xt;
function Mr() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var t in this)
      t.charAt(0) === "_" && typeof this[t] == "function" && (this[t] = this[t].bind(this));
  }
  return e.prototype = {
    dragStarted: function(i) {
      var l = i.originalEvent;
      this.sortable.nativeDraggable ? ye(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? ye(document, "pointermove", this._handleFallbackAutoScroll) : l.touches ? ye(document, "touchmove", this._handleFallbackAutoScroll) : ye(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var l = i.originalEvent;
      !this.options.dragOverBubble && !l.rootEl && this._handleAutoScroll(l);
    },
    drop: function() {
      this.sortable.nativeDraggable ? be(document, "dragover", this._handleAutoScroll) : (be(document, "pointermove", this._handleFallbackAutoScroll), be(document, "touchmove", this._handleFallbackAutoScroll), be(document, "mousemove", this._handleFallbackAutoScroll)), Jl(), Si(), br();
    },
    nulling: function() {
      Ri = ol = Kt = sl = Xt = Yi = Ki = null, Oe.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, l) {
      var n = this, a = (i.touches ? i.touches[0] : i).clientX, c = (i.touches ? i.touches[0] : i).clientY, d = document.elementFromPoint(a, c);
      if (Ri = i, l || this.options.forceAutoScrollFallback || si || Ct || ei) {
        Xi(i, this.options, d, l);
        var o = Et(d, !0);
        sl && (!Xt || a !== Yi || c !== Ki) && (Xt && Jl(), Xt = setInterval(function() {
          var h = Et(document.elementFromPoint(a, c), !0);
          h !== o && (o = h, Si()), Xi(i, n.options, h, l);
        }, 10), Yi = a, Ki = c);
      } else {
        if (!this.options.bubbleScroll || Et(d, !0) === ht()) {
          Si();
          return;
        }
        Xi(i, this.options, Et(d, !1), !1);
      }
    }
  }, wt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Si() {
  Oe.forEach(function(e) {
    clearInterval(e.pid);
  }), Oe = [];
}
function Jl() {
  clearInterval(Xt);
}
var Xi = ao(function(e, t, i, l) {
  if (t.scroll) {
    var n = (e.touches ? e.touches[0] : e).clientX, a = (e.touches ? e.touches[0] : e).clientY, c = t.scrollSensitivity, d = t.scrollSpeed, o = ht(), h = !1, u;
    ol !== i && (ol = i, Si(), Kt = t.scroll, u = t.scrollFn, Kt === !0 && (Kt = Et(i, !0)));
    var b = 0, y = Kt;
    do {
      var k = y, x = He(k), N = x.top, s = x.bottom, r = x.left, f = x.right, p = x.width, g = x.height, v = void 0, m = void 0, _ = k.scrollWidth, C = k.scrollHeight, w = ue(k), S = k.scrollLeft, I = k.scrollTop;
      k === o ? (v = p < _ && (w.overflowX === "auto" || w.overflowX === "scroll" || w.overflowX === "visible"), m = g < C && (w.overflowY === "auto" || w.overflowY === "scroll" || w.overflowY === "visible")) : (v = p < _ && (w.overflowX === "auto" || w.overflowX === "scroll"), m = g < C && (w.overflowY === "auto" || w.overflowY === "scroll"));
      var E = v && (Math.abs(f - n) <= c && S + p < _) - (Math.abs(r - n) <= c && !!S), L = m && (Math.abs(s - a) <= c && I + g < C) - (Math.abs(N - a) <= c && !!I);
      if (!Oe[b])
        for (var z = 0; z <= b; z++)
          Oe[z] || (Oe[z] = {});
      (Oe[b].vx != E || Oe[b].vy != L || Oe[b].el !== k) && (Oe[b].el = k, Oe[b].vx = E, Oe[b].vy = L, clearInterval(Oe[b].pid), (E != 0 || L != 0) && (h = !0, Oe[b].pid = setInterval((function() {
        l && this.layer === 0 && ce.active._onTouchMove(Ri);
        var P = Oe[this.layer].vy ? Oe[this.layer].vy * d : 0, U = Oe[this.layer].vx ? Oe[this.layer].vx * d : 0;
        typeof u == "function" && u.call(ce.dragged.parentNode[et], U, P, e, Ri, Oe[this.layer].el) !== "continue" || ro(Oe[this.layer].el, U, P);
      }).bind({
        layer: b
      }), 24))), b++;
    } while (t.bubbleScroll && y !== o && (y = Et(y, !1)));
    sl = h;
  }
}, 30), vo = function(t) {
  var i = t.originalEvent, l = t.putSortable, n = t.dragEl, a = t.activeSortable, c = t.dispatchSortableEvent, d = t.hideGhostForTarget, o = t.unhideGhostForTarget;
  if (i) {
    var h = l || a;
    d();
    var u = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, b = document.elementFromPoint(u.clientX, u.clientY);
    o(), h && !h.el.contains(b) && (c("spill"), this.onSpill({
      dragEl: n,
      putSortable: l
    }));
  }
};
function pl() {
}
pl.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var i = t.oldDraggableIndex;
    this.startIndex = i;
  },
  onSpill: function(t) {
    var i = t.dragEl, l = t.putSortable;
    this.sortable.captureAnimationState(), l && l.captureAnimationState();
    var n = $t(this.sortable.el, this.startIndex, this.options);
    n ? this.sortable.el.insertBefore(i, n) : this.sortable.el.appendChild(i), this.sortable.animateAll(), l && l.animateAll();
  },
  drop: vo
};
wt(pl, {
  pluginName: "revertOnSpill"
});
function ml() {
}
ml.prototype = {
  onSpill: function(t) {
    var i = t.dragEl, l = t.putSortable, n = l || this.sortable;
    n.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), n.animateAll();
  },
  drop: vo
};
wt(ml, {
  pluginName: "removeOnSpill"
});
ce.mount(new Mr());
ce.mount(ml, pl);
const Or = ["onInput", "onKeydown"], Hr = { class: "tooltip-menu" }, Fr = ["onClick"], Vr = {
  key: 0,
  class: "component-menu"
}, Pr = /* @__PURE__ */ Ne({
  __name: "ComponentManager",
  props: {
    elements: {
      type: Array,
      required: !0
    }
  },
  emits: ["delete-element", "update-text", "add-text", "add-element", "elements-reordered"],
  setup(e, { emit: t }) {
    const l = K(e.elements), n = t, a = K(!1), c = K(null), d = K(null);
    Di(() => {
      d.value && ce.create(d.value, {
        handle: ".drag-handle",
        animation: 150,
        onEnd: (y) => {
          const { oldIndex: k, newIndex: x } = y;
          if (k !== void 0 && x !== void 0) {
            const N = l.value.splice(k, 1)[0];
            l.value.splice(x, 0, N), n("elements-reordered", l.value);
          }
        }
      });
    });
    const o = (y, k) => {
      const x = k.target.innerText.trim();
      x !== l.value[y].text && n("update-text", { index: y, text: x }), a.value = x.endsWith("/"), a.value && (c.value = y);
    }, h = (y, k) => {
      y.key === "/" && (a.value = !0, c.value = k);
    }, u = (y, k) => {
      if (c.value !== null) {
        const x = { type: "customTag", component: y, props: k };
        l.value.splice(c.value + 1, 0, x), n("add-element", { element: x, index: c.value + 1 }), c.value = null, a.value = !1;
      }
    }, b = (y) => {
      n("delete-element", y);
    };
    return (y, k) => {
      const x = Se("lkt-button");
      return W(), se("div", {
        ref_key: "sortableContainer",
        ref: d,
        class: "sortable-container"
      }, [
        (W(!0), se(je, null, _t(l.value, (N, s) => (W(), se("div", {
          key: s,
          class: "sortable-item"
        }, [
          k[4] || (k[4] = oe("div", { class: "drag-handle" }, "☰", -1)),
          N.type === "text" ? (W(), se("div", {
            key: 0,
            contenteditable: "true",
            class: "editable-text",
            onInput: (r) => o(s, r),
            onKeydown: (r) => h(r, s)
          }, vt(N.text), 41, Or)) : (W(), le(It(N.component), al({
            key: 1,
            ref_for: !0
          }, N.props), null, 16)),
          ae(x, {
            class: "",
            icon: "icon-tooltip",
            "tooltip-window-margin": "30",
            "tooltip-referrer-margin": "7",
            split: ""
          }, {
            split: xe(({ doClose: r }) => [
              oe("div", Hr, [
                oe("button", {
                  class: "delete-button",
                  onClick: (f) => b(s)
                }, "Eliminar", 8, Fr)
              ])
            ]),
            _: 2
          }, 1024)
        ]))), 128)),
        a.value && c.value !== null ? (W(), se("div", Vr, [
          oe("ul", null, [
            oe("li", {
              onClick: k[0] || (k[0] = (N) => u("lkt-tag", { text: "Etiqueta personalizada" }))
            }, "Etiqueta personalizada"),
            oe("li", {
              onClick: k[1] || (k[1] = (N) => u("ImageComponent", { src: y.prompt("Ingrese la URL de la imagen:") }))
            }, "Imagen"),
            oe("li", {
              onClick: k[2] || (k[2] = (N) => u("TableComponent", {}))
            }, "Tabla"),
            oe("li", {
              onClick: k[3] || (k[3] = (N) => u("FormComponent", {}))
            }, "Formulario")
          ])
        ])) : de("", !0)
      ], 512);
    };
  }
}), bo = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [l, n] of t)
    i[l] = n;
  return i;
}, Ur = /* @__PURE__ */ bo(Pr, [["__scopeId", "data-v-72b62275"]]), Wr = { class: "wysiwyg-container" }, Zr = { class: "toolbar" }, $r = /* @__PURE__ */ Ne({
  __name: "ElementsInput",
  setup(e) {
    const t = K([
      { type: "text", text: "Escribe algo aquí o " },
      { type: "customTag", component: "CustomTag", props: { text: "un componente dinámico" } },
      { type: "text", text: " entre el texto." }
    ]), i = K([]);
    let l = K(-1);
    const n = () => {
      i.value = i.value.slice(0, l.value + 1), i.value.push([...t.value]), l.value = i.value.length - 1;
    }, a = () => {
      n();
    }, c = (s) => {
      t.value.splice(s, 1), n();
    }, d = (s) => {
      document.execCommand(s, !1), n();
    }, o = (s) => {
      const r = s.target.value;
      document.execCommand("foreColor", !1, r), n();
    }, h = (s) => {
      const r = s.target.value;
      document.execCommand("backColor", !1, r), n();
    }, u = (s) => {
      const r = s.target.value;
      document.execCommand("fontSize", !1, r), n();
    }, b = (s) => {
      const r = s.target.value;
      document.execCommand("fontName", !1, r), n();
    }, y = (s) => {
      document.execCommand("justify" + s, !1), n();
    }, k = () => {
      l.value > 0 && (l.value--, t.value = [...i.value[l.value]]);
    }, x = () => {
      l.value < i.value.length - 1 && (l.value++, t.value = [...i.value[l.value]]);
    }, N = () => {
      const s = prompt("Ingrese la URL del enlace:");
      s && (document.execCommand("createLink", !1, s), n());
    };
    return (s, r) => (W(), se("div", Wr, [
      oe("div", Zr, [
        oe("button", {
          onClick: r[0] || (r[0] = (f) => d("bold"))
        }, "Negrita"),
        oe("button", {
          onClick: r[1] || (r[1] = (f) => d("italic"))
        }, "Cursiva"),
        oe("button", {
          onClick: r[2] || (r[2] = (f) => d("underline"))
        }, "Subrayado"),
        oe("button", {
          onClick: r[3] || (r[3] = (f) => d("strikeThrough"))
        }, "Tachado"),
        oe("button", {
          onClick: r[4] || (r[4] = (f) => d("subscript"))
        }, "Subíndice"),
        oe("button", {
          onClick: r[5] || (r[5] = (f) => d("superscript"))
        }, "Superíndice"),
        oe("input", {
          type: "color",
          onInput: o,
          title: "Color del texto"
        }, null, 32),
        oe("input", {
          type: "color",
          onInput: h,
          title: "Color de fondo"
        }, null, 32),
        oe("select", {
          onChange: r[6] || (r[6] = (f) => u(f))
        }, r[13] || (r[13] = [
          oe("option", { value: "3" }, "Mediano", -1),
          oe("option", { value: "5" }, "Grande", -1),
          oe("option", { value: "7" }, "Extra Grande", -1)
        ]), 32),
        oe("select", {
          onChange: r[7] || (r[7] = (f) => b(f))
        }, r[14] || (r[14] = [
          oe("option", { value: "Arial" }, "Arial", -1),
          oe("option", { value: "Courier New" }, "Courier New", -1),
          oe("option", { value: "Georgia" }, "Georgia", -1),
          oe("option", { value: "Times New Roman" }, "Times New Roman", -1)
        ]), 32),
        oe("button", {
          onClick: r[8] || (r[8] = (f) => y("left"))
        }, "Alineación izquierda"),
        oe("button", {
          onClick: r[9] || (r[9] = (f) => y("center"))
        }, "Centrar"),
        oe("button", {
          onClick: r[10] || (r[10] = (f) => y("right"))
        }, "Alineación derecha"),
        oe("button", {
          onClick: r[11] || (r[11] = (f) => d("insertUnorderedList"))
        }, "Lista no ordenada"),
        oe("button", {
          onClick: r[12] || (r[12] = (f) => d("insertOrderedList"))
        }, "Lista ordenada"),
        oe("button", { onClick: N }, "Insertar Enlace"),
        oe("button", { onClick: k }, "Deshacer"),
        oe("button", { onClick: x }, "Rehacer")
      ]),
      ae(Ur, {
        elements: t.value,
        onDeleteElement: c,
        onAddElement: a
      }, null, 8, ["elements"])
    ]));
  }
}), qr = /* @__PURE__ */ bo($r, [["__scopeId", "data-v-2878ca03"]]), jr = ["data-show-ui", "data-labeled"], Gr = ["for", "innerHTML"], Yr = { class: "lkt-field-content" }, Kr = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, Xr = {
  key: 1,
  class: "lkt-field--icon"
}, Jr = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], Qr = ["value", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], eu = {
  key: 4,
  class: "lkt-field--info-nav"
}, tu = { key: 0 }, iu = ["data-index", "onClick"], qt = /* @__PURE__ */ Ne({
  __name: "LktField",
  props: {
    modelValue: { type: [String, Number, Boolean, Object], default: "" },
    type: { default: Z.Text },
    valid: { type: Boolean, default: !1 },
    placeholder: { default: "" },
    searchPlaceholder: { default: "" },
    label: { default: "" },
    labelIcon: {},
    labelIconAtEnd: { type: Boolean },
    name: { default: Ji(16) },
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
    multipleDisplay: { default: bt.List },
    multipleDisplayEdition: { default: bt.Inline },
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
    const l = i, n = rl(), a = e, c = Ji(16);
    let d = Vt(a.modal, a.prop), o = Vt(a.modalKey, a.prop), h = Vt(a.icon, a.prop), u = Vt(a.download, a.prop), b = Vt(a.itemType, a.prop);
    !d && b && typeof ee.modalPerItemType[b] < "u" && (d = ee.modalPerItemType[b]);
    const y = K(a.type), k = K(null);
    let x = a.featuredButton, N = a.modelValue;
    a.multiple && Ko.includes(y.value) ? (!N || !Array.isArray(N)) && (N = []) : Rt.includes(y.value) ? typeof N != "boolean" && (N = !1) : y.value === Z.Date && !h ? h = ee.defaultDateIcon : y.value === Z.Number && a.canStep && x === "" && (x = ee.defaultNumberFeaturedButton);
    const s = K(N), r = K(N), f = K(a.valid), p = K(!1), g = K(!1), v = K(!1), m = K(!1), _ = K([]), C = K(!a.readMode), w = K(a.fileName), S = K(a.fileName), I = K(null), E = K(null), L = K(null), z = K(!1), P = K(!1), U = K(!1), V = K(""), M = K(-1), F = K([]), D = K(!1), O = K(!1), R = K(!1), H = te(() => en.value), A = te(() => (H.value, ee.dateReadFormat ? ee.dateReadFormat : ee.langDateReadFormat[H.value] ? ee.langDateReadFormat[H.value] : ee.defaultDateReadFormat ? ee.defaultDateReadFormat : "Y-m-d")), T = y.value === Z.Card ? r.value : K(Il(r.value, H.value)), G = K(T), $ = K([]), j = K([]), X = () => {
      const B = (J) => {
        if (j.value = Ui($.value, J), a.multiple) {
          for (let dt in T.value) {
            let ft = Ml($.value, T.value[dt]);
            typeof ft < "u" && (F.value.length === 0 ? F.value.push(ft) : F.value.splice(dt, 1, ft));
          }
          return;
        }
        let Ce = Ml($.value, T.value);
        typeof Ce < "u" && (F.value.length === 0 ? F.value.push(Ce) : F.value.splice(0, 1, Ce));
      };
      y.value === Z.Text ? B(T.value) : y.value === Z.Select && B(V.value);
    }, Y = te(() => y.value === Z.Date), ne = te(() => y.value === Z.File), pe = te(() => y.value === Z.Image), ge = te(() => y.value === Z.Textarea ? "textarea" : y.value === Z.Html ? "div" : "input"), ve = te(() => y.value === Z.Date ? r.value !== s.value : T.value !== G.value), fe = te(() => typeof a.disabled == "function" ? a.disabled(a.prop) : a.disabled), De = te(() => {
      let B = 0;
      return vl.value && ++B, bl.value && ++B, yl.value && ++B, _l.value && ++B, Cl.value && ++B, wl.value && ++B, Bt.value && ++B, at.value && ++B, (a.customButtonText || a.customButtonClass) && ++B, B > 0 && y.value === Z.Textarea || B > 0 && y.value === Z.Html || B > 0 && a.infoButtonEllipsis ? 1 : B;
    }), Ge = te(() => Hi.value && x === "i18n" || ri.value && x === "password" || Nt.value && x === "subtract"), _e = te(() => De.value > 0), Fe = te(() => a.autocomplete === !0 ? "on" : "off"), Le = te(() => y.value === Z.Date ? r.value !== "" : T.value !== ""), mt = te(() => y.value === Z.Password && p.value === !0 ? "text" : y.value === Z.Email ? "email" : y.value === Z.Password ? "password" : y.value === Z.Number ? "number" : y.value === Z.Tel ? "tel" : y.value === Z.Search ? "search" : y.value === Z.Color ? "color" : y.value === Z.Range ? "range" : "text"), Ye = te(() => {
      const B = ["lkt-field"];
      return B.push(`is-${y.value}`), Rt.includes(y.value) && (B.push("is-boolean"), T.value && B.push("is-checked")), ve.value && B.push("is-changed"), fe.value && B.push("is-disabled"), a.multiple && B.push("is-multiple"), Ge.value && B.push("with-atn-btn"), _e.value && B.push("with-info-btn"), a.mandatory && C.value && B.push("is-mandatory-field"), C.value && g.value && B.push("has-focus"), z.value && B.push("show-options"), a.searchable && D.value && B.push("is-searching"), y.value !== Z.Range && a.autoValidation && m.value && v.value && (_.value.length > 0 ? B.push("is-invalid") : B.push("is-valid")), [Z.Textarea, Z.Html].includes(y.value) && B.push("is-lg"), [Z.Image].includes(y.value) && B.push("is-xl"), a.multiple && y.value === Z.Select && B.push("is-lg"), a.multiple && (C.value ? B.push(`has-multiple-display-${a.multipleDisplayEdition}`) : B.push(`has-multiple-display-${a.multipleDisplay}`)), De.value > 0 && B.push("has-icons", `has-icons-${De.value}`), B.push(C.value ? "is-editable" : "is-read"), y.value !== Z.Range && (B.push(f.value ? "is-valid" : "is-error"), B.push(Le.value ? "is-filled" : "is-empty")), B.join(" ");
    }), Ke = te(() => {
      var B;
      return typeof T.value == "number" ? (H.value, (B = ee.langNumberFormat[H.value]) != null && B.amountOfDecimals ? Rl(
        T.value,
        ee.langNumberFormat[H.value].amountOfDecimals,
        ee.langNumberFormat[H.value].decimalSeparator,
        ee.langNumberFormat[H.value].thousandsSeparator,
        ee.langNumberFormat[H.value].removeDecimalsIfZero
      ) : ee.amountOfDecimals ? Rl(
        T.value,
        ee.amountOfDecimals,
        ee.decimalSeparator,
        ee.thousandsSeparator,
        ee.removeDecimalsIfZero
      ) : T.value.toString()) : y.value === Z.Html ? Ql(T.value) : T.value;
    }), Pe = te(() => typeof a.min == "string" ? parseFloat(a.min) : typeof a.min == "number" ? a.min : !1), we = te(() => typeof a.max == "string" ? parseFloat(a.max) : typeof a.max == "number" ? a.max : !1), Lt = te(() => {
      let B = "";
      if (a.label.startsWith("__:") ? B = Jt(a.label.substring(3)) : B = a.label, a.labelIcon) {
        let J = '<i class="' + a.labelIcon + '"></i>';
        a.labelIconAtEnd ? B += J : B = J + B;
      }
      return B;
    }), st = te(() => a.placeholder.startsWith("__:") ? Jt(a.placeholder.substring(3)) : a.placeholder), Xe = te(() => a.searchPlaceholder.startsWith("__:") ? Jt(a.searchPlaceholder.substring(3)) : a.searchPlaceholder), Me = te(() => y.value === Z.File ? ee.acceptTypes.file : y.value === Z.Image ? ee.acceptTypes.image : ""), $e = te(() => a.errorMessage), Ue = te(() => a.infoMessage), Nt = te(() => a.canStep && C.value && y.value === Z.Number), Bt = te(() => a.canStep && C.value && y.value === Z.Number && x !== "subtract"), at = te(() => a.canStep && C.value && y.value === Z.Number), Mt = te(() => a.canUndo && ve.value && C.value && !Yo.includes(y.value)), gl = te(() => a.canClear && Le.value && C.value && !Go.includes(y.value)), Hi = te(() => a.canI18n && typeof r.value == "object" && C.value), ri = te(() => y.value === Z.Password && a.showPassword && Le.value && C.value), vl = te(() => Mt.value && !a.infoButtonEllipsis), bl = te(() => gl.value && !a.infoButtonEllipsis), yl = te(() => ri.value && !a.infoButtonEllipsis && x !== "password"), _l = te(() => Hi.value && !a.infoButtonEllipsis && x !== "i18n"), wl = te(() => y.value === Z.Calc || y.value === Z.Search ? !1 : j.value.length > 0 || $.value.length > 0 || a.optionsResource !== ""), Cl = te(() => a.allowReadModeSwitch && !a.infoButtonEllipsis), kl = () => {
      Ei(() => {
        k.value && k.value.focus();
      });
    }, yo = async () => {
      if (a.validationResource) {
        l("validating");
        const B = await Qi(a.validationResource, {
          ...a.validationResourceData,
          value: T.value
        });
        l("validation", B);
      }
    };
    me(() => a.checkEqualTo, (B) => Ot()), me(() => a.readMode, (B) => C.value = !B), me(() => a.valid, (B) => f.value = B), me(() => a.modelValue, (B) => {
      y.value === Z.Card ? T.value = B : y.value !== Z.Date && (T.value = Il(B, H.value));
    }), me(T, (B) => {
      typeof r.value == "object" && y.value === Z.Card ? r.value[H.value] = B : r.value = B, y.value === Z.Number && Bo(B);
    }), me(r, (B) => {
      U.value && C.value && (l("update:modelValue", B), yo(), Ot());
    }, { deep: !0 }), me(f, (B) => {
      l("update:valid", B);
    }), me(() => a.options, (B) => {
      $.value = Li(B, a.prop), y.value === Z.Select ? jt(V.value, !1) : jt(T.value, !1);
    });
    const Ot = () => {
      a.autoValidationType === "blur" && (!v.value || !m.value) || y.value !== Z.Range && (_.value = [], Ei(() => {
        let B = typeof a.min > "u" ? 0 : parseFloat(a.min), J = typeof a.max > "u" ? 0 : parseFloat(a.max);
        if (y.value === Z.Number && typeof a.min < "u" && typeof a.max < "u" && (T.value < B || T.value > J)) {
          _.value.push(gt.createNumBetween(B, J, "ko")), f.value = !1;
          return;
        }
        ![Z.Number, Z.Email].includes(y.value) && a.mandatory && T.value === "" ? _.value.push(gt.createEmpty("ko")) : y.value !== Z.Email && B > 0 && (y.value !== Z.Number && T.value.length < B ? _.value.push(gt.createMinStr(B, "ko")) : T.value < B && _.value.push(gt.createMinNum(B, "ko"))), J > 0 && (y.value !== Z.Number && T.value.length > J ? _.value.push(gt.createMaxStr(J, "ko")) : T.value > J && _.value.push(gt.createMaxNum(J, "ko"))), y.value === Z.Email && (a.mandatory && T.value === "" ? _.value.push(gt.createEmpty("ko")) : Vo(T.value) || _.value.push(gt.createEmail("ko"))), Xo.includes(y.value) && (ds(_.value, T.value, a.minNumbers, a.maxNumbers), fs(_.value, T.value, a.minUpperChars, a.maxUpperChars), hs(_.value, T.value, a.minLowerChars, a.maxLowerChars), ps(_.value, T.value, a.minChars, a.maxChars), ms(_.value, T.value, a.minSpecialChars, a.maxSpecialChars)), a.checkEqualTo && T.value !== a.checkEqualTo && _.value.push(gt.createEqualTo(a.checkEqualTo, "ko")), f.value = _.value.length === 0;
      }));
    }, jt = (B, J = !0) => {
      if ($.value.length === 0) {
        j.value = [];
        return;
      }
      switch (y.value) {
        case Z.Select:
          a.searchable ? j.value = Ui($.value, B, !0) : j.value = $.value, P.value = !1, J && (z.value = a.optionsResource !== "" || j.value.length > 0), X();
          return;
        case Z.Text:
        case Z.Search:
          j.value = Ui($.value, B, !1), P.value = !1, J && (z.value = a.optionsResource !== "" || j.value.length > 0);
          return;
      }
    }, ui = async (B, J = !0) => {
      if (!(!C.value && !a.autoloadOptionsResource && !O.value) && ![
        Z.Tel,
        Z.Date,
        Z.Color,
        Z.File,
        Z.Html,
        Z.Image,
        Z.Password,
        Z.Range,
        Z.Textarea
      ].includes(y.value))
        if (P.value = !1, a.autoloadOptionsResource && !O.value && (R.value = !0), a.optionsResource !== "") {
          P.value = !0, ee.searchKeyForResource !== "" && (a.optionsResourceData[ee.searchKeyForResource] = B);
          const Ce = await Qi(a.optionsResource, a.optionsResourceData);
          Array.isArray(Ce.data) && Ce.data.length > 0 && ($.value = $o($.value, Ce.data, a.prop), jt(B, J), a.autoloadOptionsResource && !O.value && (a.autoloadOptionsResource === "feed" && (a.multiple ? j.value.forEach((ft) => {
            ci(ft);
          }) : j.value.length > 0 && ci(j.value[0])), O.value = !0, R.value = !1), l("options-loaded", Ce.data));
        } else
          jt(B, J);
    }, Fi = (B) => {
      var dt, ft;
      let J = j.value.length - 1;
      if (J === -1) return;
      const Ce = B.key ?? "";
      if (g.value)
        if (["ArrowDown", "ArrowUp", "Enter"].includes(Ce) && (B.preventDefault(), B.stopPropagation()), Ce === "ArrowDown") {
          ++M.value, M.value > J && (M.value = 0);
          let ie = (dt = L.value) == null ? void 0 : dt.querySelector('[data-index="' + M.value + '"]');
          ie && ie.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else if (Ce === "ArrowUp") {
          --M.value, M.value < 0 && (M.value = J);
          let ie = (ft = L.value) == null ? void 0 : ft.querySelector('[data-index="' + M.value + '"]');
          ie && ie.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else Ce === "Enter" && M.value > -1 && ci(j.value[M.value]);
    }, Vi = () => {
      if (y.value === Z.Html) {
        k.value && k.value.setValue(G.value);
        return;
      } else if (y.value === Z.Date) {
        r.value = s.value;
        return;
      } else if (y.value === Z.File) {
        r.value = s.value, S.value = w.value;
        return;
      }
      T.value = G.value;
    }, xl = () => {
      if (y.value === Z.Html) {
        k.value && k.value.setValue("");
        return;
      } else if (y.value === Z.Date) {
        r.value = "";
        return;
      } else if (y.value === Z.File) {
        r.value = "", S.value = "";
        return;
      } else if (y.value === Z.Select) {
        T.value = a.multiple ? [] : "", F.value = [];
        return;
      }
      T.value = "";
    }, _o = () => T.value, Sl = (B) => {
      Ot(), Ol.includes(y.value) ? (ui(T.value), Fi(B)) : y.value === Z.Select && Fi(B), l("keyup", B);
    }, El = () => {
      k.value && k.value.keepFocused();
    }, wo = () => {
      if (z.value) {
        if (y.value === Z.Select) {
          Nl();
          return;
        }
        return fi();
      }
      if (y.value === Z.Select) {
        Ll();
        return;
      }
      return di();
    }, ci = (B) => {
      if (!B.disabled)
        if (a.multiple) {
          let J = jo(B, T.value);
          J === -1 ? (T.value.push(String(B.value)), F.value.push(B)) : (T.value.splice(J, 1), F.value.splice(J, 1)), El(), l("selected-option", B);
        } else
          M.value = -1, T.value = String(B.value), F.value.splice(0, 1, B), z.value = !1, D.value = !1, l("selected-option", B);
    }, Tl = (B) => l("keydown", B), di = (B) => {
      m.value = !0, g.value = !0, Ot(), l("focus", B);
    }, fi = (B) => {
      setTimeout(() => {
        if (!(a.searchable && D.value)) {
          if (a.multiple) {
            z.value = !0, g.value = !0;
            return;
          }
          v.value = !0, M.value = -1, z.value = !1, g.value = !1, Ot(), l("blur", B);
        }
      }, 100);
    }, hi = (B) => {
      m.value = !0, g.value = !0, l("focus", B);
    }, pi = (B) => {
      v.value = !0, g.value = !1, l("blur", B);
    }, Co = (B) => {
      Fi(B);
    }, ko = (B) => {
      V.value = B, ui(B);
    }, xo = (B) => {
      let J = new Ti({
        value: B,
        label: B
      });
      F.value.findIndex((dt) => dt.value === J.value) === -1 && ($.value.push(J), j.value.push(J), F.value.push(J)), V.value = "";
    }, So = (B) => {
      let J = F.value.findIndex((Ce) => Ce.value === B.value);
      J >= 0 && (F.value.splice(J, 1), $.value.splice(
        $.value.findIndex((Ce) => Ce.value === B.value),
        1
      ), j.value.splice(
        j.value.findIndex((Ce) => Ce.value === B.value),
        1
      )), V.value = "";
    }, Ll = () => {
      if (m.value = !0, g.value = !0, !a.optionsResource && j.value.length === 0) {
        z.value = !1;
        return;
      }
      z.value = !0, Ot(), ui(V.value, !1), a.searchable && El(), l("focus");
    }, Nl = () => {
      v.value = !0, g.value = !1, l("blur");
    }, Pi = (B) => {
      l("change", B);
    }, Gt = (B) => {
      l("click", B);
    }, Eo = (B) => l("click-info", B), To = (B) => l("click-error", B), Bl = () => {
      let B = a.step ?? 1;
      typeof B == "string" && (B = parseFloat(B)), (!a.min || T.value > a.min) && (T.value -= B);
    }, Lo = () => {
      let B = a.step ?? 1;
      typeof B == "string" && (B = parseFloat(B)), (!a.max || T.value < a.max) && (T.value += B);
    }, No = (B) => {
      C.value && kl();
    }, Bo = (B) => {
      if (!a.enableAutoNumberFix) return !1;
      let J = Number(B), Ce = Zo(J, Pe.value, we.value);
      return J !== Ce ? (T.value = Ce, !0) : !1;
    };
    t({
      Identifier: c,
      reset: Vi,
      focus: kl,
      value: _o,
      isMandatory: () => a.mandatory
    });
    const zo = te(() => a.editSlot !== "" && typeof ee.customEditSlots[a.editSlot] < "u"), Ao = te(() => ee.customEditSlots[a.editSlot]);
    Di(() => {
      $.value = Li(a.options, a.prop), jt("", !1), X(), y.value === Z.Select && (a.multiple && (D.value = !0), a.autoloadOptionsResource && ui("", !1)), U.value = !0;
    });
    const Ro = te(() => Rt.includes(y.value) && !fe.value ? "label" : "div"), Do = te(() => Rt.includes(y.value) ? {
      for: c
    } : {}), Io = te(() => {
      switch (y.value) {
        case Z.Select:
          return F.value;
        case Z.Date:
          return on(r.value, A.value);
        case Z.File:
        case Z.Image:
          return r.value;
        default:
          return T.value;
      }
    });
    return (B, J) => {
      const Ce = Se("lkt-button"), dt = Se("lkt-loader"), ft = Se("lkt-tooltip");
      return W(), se("div", {
        class: lt(Ye.value),
        "data-show-ui": _e.value,
        "data-labeled": !q(n).label,
        ref_key: "container",
        ref: E
      }, [
        q(n).label ? ut(B.$slots, "label", { key: 0 }) : de("", !0),
        !q(n).label && Lt.value !== "" && !q(Rt).includes(y.value) ? (W(), se("label", {
          key: 1,
          for: q(c),
          class: "lkt-field--label",
          innerHTML: Lt.value
        }, null, 8, Gr)) : de("", !0),
        oe("div", Yr, [
          Ge.value ? (W(), se("div", Kr, [
            B.featuredButton === "password" && ri.value ? (W(), le(el, {
              key: 0,
              modelValue: p.value,
              "onUpdate:modelValue": J[0] || (J[0] = (ie) => p.value = ie),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : de("", !0),
            Hi.value && q(x) === "i18n" && B.canI18n ? (W(), le(Dl, {
              key: 1,
              modelValue: r.value,
              "onUpdate:modelValue": J[1] || (J[1] = (ie) => r.value = ie),
              "is-featured": "",
              type: y.value
            }, null, 8, ["modelValue", "type"])) : de("", !0),
            Nt.value && q(x) === "subtract" ? (W(), le(Ce, {
              key: 2,
              class: "lkt-field--atn-btn",
              icon: "lkt-field-icon-minus",
              onClick: Bl
            })) : de("", !0)
          ])) : de("", !0),
          q(h) ? (W(), se("div", Xr, [
            oe("i", {
              class: lt(q(h))
            }, null, 2)
          ])) : de("", !0),
          C.value ? (W(), le(It(Ro.value), al({ key: 2 }, Do.value, { class: "lkt-field-main" }), {
            default: xe(() => [
              q(n).edit ? (W(), se("div", {
                key: 0,
                onClick: Gt
              }, [
                ut(B.$slots, "edit", {
                  value: r.value,
                  title: Ke.value,
                  data: B.slotData
                })
              ])) : zo.value ? (W(), se("div", {
                key: 1,
                onClick: Gt
              }, [
                (W(), le(It(Ao.value), {
                  value: r.value,
                  title: Ke.value,
                  data: B.slotData
                }, null, 8, ["value", "title", "data"]))
              ])) : q(Rt).includes(y.value) ? (W(), le(Cs, {
                key: 2,
                modelValue: q(T),
                "onUpdate:modelValue": J[2] || (J[2] = (ie) => nt(T) ? T.value = ie : null),
                id: q(c),
                name: B.name,
                type: y.value,
                label: Lt.value,
                editable: C.value,
                focusing: g.value,
                disabled: fe.value,
                readonly: B.readonly,
                onFocus: hi,
                onBlur: pi
              }, null, 8, ["modelValue", "id", "name", "type", "label", "editable", "focusing", "disabled", "readonly"])) : y.value === q(Z).Color && B.multiple ? (W(), le(cs, {
                key: 3,
                modelValue: q(T),
                "onUpdate:modelValue": J[3] || (J[3] = (ie) => nt(T) ? T.value = ie : null),
                "edit-mode": C.value,
                min: Pe.value,
                max: we.value
              }, null, 8, ["modelValue", "edit-mode", "min", "max"])) : y.value === q(Z).Color ? (W(), le(sn, {
                key: 4,
                modelValue: q(T),
                "onUpdate:modelValue": J[4] || (J[4] = (ie) => nt(T) ? T.value = ie : null)
              }, null, 8, ["modelValue"])) : ne.value || pe.value ? (W(), le(tr, {
                key: 5,
                modelValue: r.value,
                "onUpdate:modelValue": J[5] || (J[5] = (ie) => r.value = ie),
                "file-name": S.value,
                "onUpdate:fileName": J[6] || (J[6] = (ie) => S.value = ie),
                id: q(c),
                tabindex: B.tabindex,
                resource: B.resource,
                "resource-data": B.resourceData,
                name: B.name,
                placeholder: st.value,
                accept: Me.value,
                focusing: g.value,
                disabled: fe.value,
                readonly: B.readonly,
                "is-image": y.value === q(Z).Image,
                onChange: Pi
              }, null, 8, ["modelValue", "file-name", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image"])) : Y.value ? (W(), le(ur, {
                key: 6,
                modelValue: r.value,
                "onUpdate:modelValue": J[7] || (J[7] = (ie) => r.value = ie),
                id: q(c),
                tabindex: B.tabindex,
                lang: H.value,
                name: B.name
              }, null, 8, ["modelValue", "id", "tabindex", "lang", "name"])) : y.value === q(Z).Select ? (W(), le(Ba, {
                key: 7,
                ref_key: "inputElement",
                ref: k,
                modelValue: q(T),
                "onUpdate:modelValue": J[8] || (J[8] = (ie) => nt(T) ? T.value = ie : null),
                "show-options": z.value,
                "onUpdate:showOptions": J[9] || (J[9] = (ie) => z.value = ie),
                searchable: B.searchable,
                "search-mode": D.value,
                multiple: B.multiple,
                "can-tag": B.multiple,
                "options-icon": B.optionsIcon,
                "option-slot": B.optionSlot,
                "options-modal": B.optionsModal,
                "options-download": B.optionsDownload,
                "options-label-formatter": B.optionsLabelFormatter,
                "options-modal-data": B.optionsModalData,
                "picked-options": F.value,
                editable: C.value,
                focusing: g.value,
                "search-placeholder": Xe.value,
                "multiple-display-edition": B.multipleDisplayEdition,
                onFocus: Ll,
                onBlur: Nl,
                onNavigate: Co,
                onSearch: ko,
                onTag: xo,
                onUntag: So
              }, null, 8, ["modelValue", "show-options", "searchable", "search-mode", "multiple", "can-tag", "options-icon", "option-slot", "options-modal", "options-download", "options-label-formatter", "options-modal-data", "picked-options", "editable", "focusing", "search-placeholder", "multiple-display-edition"])) : y.value === q(Z).Calc ? (W(), le(Oa, {
                key: 8,
                ref_key: "inputElement",
                ref: k,
                modelValue: q(T),
                "onUpdate:modelValue": J[10] || (J[10] = (ie) => nt(T) ? T.value = ie : null),
                id: q(c),
                tabindex: B.tabindex,
                name: B.name,
                editable: C.value,
                focusing: g.value,
                disabled: fe.value,
                readonly: B.readonly,
                options: $.value,
                onFocus: hi,
                onBlur: pi
              }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "disabled", "readonly", "options"])) : y.value === q(Z).Search ? (W(), le(Ua, {
                key: 9,
                ref_key: "inputElement",
                ref: k,
                modelValue: q(T),
                "onUpdate:modelValue": J[11] || (J[11] = (ie) => nt(T) ? T.value = ie : null),
                id: q(c),
                tabindex: B.tabindex,
                name: B.name,
                editable: C.value,
                focusing: g.value,
                "had-first-focus": m.value,
                disabled: fe.value,
                readonly: B.readonly,
                "options-resource": B.optionsResource,
                container: E.value,
                onFocus: hi,
                onBlur: pi
              }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : y.value === q(Z).Elements ? (W(), le(qr, {
                key: 10,
                ref_key: "inputElement",
                ref: k,
                modelValue: q(T),
                "onUpdate:modelValue": J[12] || (J[12] = (ie) => nt(T) ? T.value = ie : null),
                id: q(c),
                tabindex: B.tabindex,
                name: B.name,
                editable: C.value,
                focusing: g.value,
                "had-first-focus": m.value,
                disabled: fe.value,
                readonly: B.readonly,
                "options-resource": B.optionsResource,
                container: E.value,
                onFocus: hi,
                onBlur: pi
              }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : y.value === q(Z).Card && a.multiple ? (W(), le(dr, {
                key: 11,
                modelValue: q(T),
                "onUpdate:modelValue": J[13] || (J[13] = (ie) => nt(T) ? T.value = ie : null),
                id: q(c),
                tabindex: B.tabindex,
                name: B.name,
                editable: C.value,
                focusing: g.value,
                "had-first-focus": m.value,
                disabled: fe.value,
                readonly: B.readonly,
                "options-resource": B.optionsResource,
                modal: q(d),
                "modal-key": q(o),
                "modal-data": B.modalData,
                "item-type": q(b)
              }, _i({ _: 2 }, [
                q(n)["item-" + q(b)] ? {
                  name: "item",
                  fn: xe(({ item: ie }) => [
                    ut(B.$slots, "item-" + q(b), { item: ie })
                  ]),
                  key: "0"
                } : q(n).item ? {
                  name: "item",
                  fn: xe(({ item: ie }) => [
                    ut(B.$slots, "item", { item: ie })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : y.value === q(Z).Card ? (W(), le(io, {
                key: 12,
                modelValue: q(T),
                "onUpdate:modelValue": J[14] || (J[14] = (ie) => nt(T) ? T.value = ie : null),
                id: q(c),
                tabindex: B.tabindex,
                name: B.name,
                editable: C.value,
                focusing: g.value,
                "had-first-focus": m.value,
                disabled: fe.value,
                readonly: B.readonly,
                "options-resource": B.optionsResource,
                modal: q(d),
                "modal-key": q(o),
                "modal-data": B.modalData,
                "item-type": q(b)
              }, _i({ _: 2 }, [
                q(n)["item-" + q(b)] ? {
                  name: "item",
                  fn: xe(({ item: ie }) => [
                    ut(B.$slots, "item-" + q(b), { item: ie })
                  ]),
                  key: "0"
                } : q(n).item ? {
                  name: "item",
                  fn: xe(({ item: ie }) => [
                    ut(B.$slots, "item", { item: ie })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : ge.value === "input" ? Qe((W(), se("input", {
                key: 13,
                "onUpdate:modelValue": J[15] || (J[15] = (ie) => nt(T) ? T.value = ie : null),
                ref: (ie) => k.value = ie,
                value: q(T),
                type: mt.value,
                name: B.name,
                id: q(c),
                disabled: fe.value,
                readonly: B.readonly,
                placeholder: st.value,
                tabindex: B.tabindex,
                autocomplete: Fe.value,
                min: Pe.value,
                max: we.value,
                step: B.step,
                onKeyup: Sl,
                onKeydown: Tl,
                onFocus: di,
                onBlur: fi,
                onClick: Gt,
                onChange: Pi
              }, null, 40, Jr)), [
                [Ho, q(T)]
              ]) : ge.value === "textarea" ? Qe((W(), se("textarea", {
                key: 14,
                "onUpdate:modelValue": J[16] || (J[16] = (ie) => nt(T) ? T.value = ie : null),
                ref: (ie) => k.value = ie,
                value: q(T),
                name: B.name,
                id: q(c),
                disabled: fe.value,
                readonly: B.readonly,
                placeholder: st.value,
                tabindex: B.tabindex,
                autocomplete: Fe.value,
                onKeyup: Sl,
                onKeydown: Tl,
                onFocus: di,
                onBlur: fi,
                onClick: Gt,
                onChange: Pi
              }, null, 40, Qr)), [
                [Ii, q(T)]
              ]) : y.value === q(Z).Html ? (W(), le(xa, {
                key: 15,
                ref_key: "inputElement",
                ref: k,
                modelValue: q(T),
                "onUpdate:modelValue": J[17] || (J[17] = (ie) => nt(T) ? T.value = ie : null),
                id: q(c),
                tabindex: B.tabindex,
                name: B.name,
                lang: H.value,
                editable: C.value,
                focusing: g.value,
                disabled: fe.value,
                readonly: B.readonly,
                onFocus: di,
                onBlur: fi
              }, null, 8, ["modelValue", "id", "tabindex", "name", "lang", "editable", "focusing", "disabled", "readonly"])) : de("", !0)
            ]),
            _: 3
          }, 16)) : de("", !0),
          C.value ? de("", !0) : (W(), le(Qa, {
            key: 3,
            value: Io.value,
            type: y.value,
            label: Lt.value,
            title: Ke.value,
            "file-name": S.value,
            "value-slot": B.valueSlot,
            "empty-value-slot": B.emptyValueSlot,
            "slot-data": B.slotData,
            download: q(u),
            multiple: B.multiple,
            multipleDisplay: B.multipleDisplay,
            modal: q(d),
            "modal-key": q(o),
            "modal-data": B.modalData,
            "option-slot": B.optionSlot,
            "options-download": B.optionsDownload,
            "options-modal": B.optionsModal,
            "options-modal-data": B.optionsModalData,
            "options-icon": B.optionsIcon,
            "options-label-formatter": B.optionsLabelFormatter,
            "options-resource": B.optionsResource,
            "options-resource-data": B.optionsResourceData,
            onClick: Gt
          }, _i({ _: 2 }, [
            q(n).value ? {
              name: "value",
              fn: xe(() => [
                ut(B.$slots, r.value, {
                  value: r.value,
                  title: Ke.value,
                  data: B.slotData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "type", "label", "title", "file-name", "value-slot", "empty-value-slot", "slot-data", "download", "multiple", "multipleDisplay", "modal", "modal-key", "modal-data", "option-slot", "options-download", "options-modal", "options-modal-data", "options-icon", "options-label-formatter", "options-resource", "options-resource-data"])),
          _e.value ? (W(), se("div", eu, [
            Qe(ae(tn, { onClick: Vi }, null, 512), [
              [kt, vl.value]
            ]),
            Qe(ae(ln, { onClick: xl }, null, 512), [
              [kt, bl.value]
            ]),
            y.value === q(Z).Number ? Qe((W(), le(Ce, {
              key: 0,
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-minus",
              onClick: Bl
            }, null, 512)), [
              [kt, Bt.value]
            ]) : de("", !0),
            y.value === q(Z).Number ? Qe((W(), le(Ce, {
              key: 1,
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-plus",
              onClick: Lo
            }, null, 512)), [
              [kt, at.value]
            ]) : de("", !0),
            $e.value ? (W(), le(Ce, {
              key: 2,
              title: B.errorMessage,
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-warning",
              onClick: To
            }, null, 8, ["title"])) : de("", !0),
            Ue.value ? (W(), le(Ce, {
              key: 3,
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-info",
              onClick: Eo,
              tooltip: "",
              "show-tooltip-on-hover": "",
              "show-tooltip-on-hover-delay": 500,
              "hide-tooltip-on-leave": ""
            }, {
              tooltip: xe(() => [
                Zt(vt(B.infoMessage), 1)
              ]),
              _: 1
            })) : de("", !0),
            y.value === q(Z).Password ? Qe((W(), le(el, {
              key: 4,
              modelValue: p.value,
              "onUpdate:modelValue": J[18] || (J[18] = (ie) => p.value = ie)
            }, null, 8, ["modelValue"])), [
              [kt, yl.value]
            ]) : de("", !0),
            Qe(ae(Dl, {
              modelValue: r.value,
              "onUpdate:modelValue": J[19] || (J[19] = (ie) => r.value = ie),
              type: y.value
            }, null, 8, ["modelValue", "type"]), [
              [kt, _l.value]
            ]),
            C.value && Cl.value ? (W(), le(nn, {
              key: 5,
              modelValue: C.value,
              "onUpdate:modelValue": J[20] || (J[20] = (ie) => C.value = ie),
              onClick: No
            }, null, 8, ["modelValue"])) : de("", !0),
            B.customButtonText || B.customButtonClass ? (W(), le(Ce, {
              key: 6,
              text: B.customButtonText,
              class: "lkt-field--info-btn lkt-field--custom-btn",
              icon: B.customButtonClass
            }, null, 8, ["text", "icon"])) : de("", !0),
            C.value ? Qe((W(), le(Jo, {
              key: 7,
              onClick: wo
            }, null, 512)), [
              [kt, wl.value]
            ]) : de("", !0),
            B.infoButtonEllipsis ? (W(), le(Wo, {
              key: 8,
              "show-undo": Mt.value,
              "show-clear": gl.value,
              "show-password": ri.value,
              "show-edition": B.allowReadModeSwitch,
              "show-password-check": p.value,
              "onUpdate:showPasswordCheck": J[21] || (J[21] = (ie) => p.value = ie),
              "show-edition-check": C.value,
              "onUpdate:showEditionCheck": J[22] || (J[22] = (ie) => C.value = ie),
              onUndo: Vi,
              onClear: xl
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"])) : de("", !0)
          ])) : de("", !0)
        ]),
        C.value && B.autoValidation && _.value.length > 0 ? (W(), le(Va, {
          key: 2,
          items: _.value,
          stack: B.validationStack
        }, null, 8, ["items", "stack"])) : de("", !0),
        C.value && q(Ol).includes(y.value) ? (W(), le(ft, {
          key: 3,
          ref_key: "dropdownEl",
          ref: I,
          class: "lkt-field--dropdown",
          modelValue: z.value,
          "onUpdate:modelValue": J[23] || (J[23] = (ie) => z.value = ie),
          referrer: E.value,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: xe(() => [
            z.value ? (W(), se("div", tu, [
              P.value ? (W(), le(dt, { key: 0 })) : de("", !0),
              P.value ? de("", !0) : (W(), se("ul", {
                key: 1,
                class: "lkt-field--dropdown-options",
                ref_key: "optionList",
                ref: L
              }, [
                (W(!0), se(je, null, _t(j.value, (ie, zl) => (W(), se("li", {
                  class: lt({
                    "is-active": q(qo)(ie, r.value, B.multiple),
                    "is-focused": zl === M.value,
                    "is-disabled": ie.disabled
                  }),
                  "data-index": zl,
                  onClick: () => ci(ie)
                }, [
                  q(n).option ? ut(B.$slots, "option", {
                    key: 0,
                    option: ie,
                    data: B.slotData,
                    modal: B.optionsModal,
                    modalData: B.optionsModalData,
                    download: B.optionsDownload,
                    editable: C.value
                  }) : (W(), le(Tt, {
                    key: 1,
                    option: ie,
                    "option-slot": B.optionSlot,
                    icon: B.optionsIcon,
                    modal: B.optionsModal,
                    "modal-data": B.optionsModalData,
                    download: B.optionsDownload,
                    "label-formatter": B.optionsLabelFormatter,
                    editable: C.value
                  }, null, 8, ["option", "option-slot", "icon", "modal", "modal-data", "download", "label-formatter", "editable"]))
                ], 10, iu))), 256))
              ], 512))
            ])) : de("", !0)
          ]),
          _: 3
        }, 8, ["modelValue", "referrer"])) : de("", !0)
      ], 10, jr);
    };
  }
}), lu = { class: "lkt-grid-1" }, nu = /* @__PURE__ */ Ne({
  __name: "LktTextLanguageEditModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    type: {},
    translations: { default: () => ({}) }
  },
  setup(e) {
    const t = te(() => Po.value.filter((i) => i !== en.value));
    return (i, l) => {
      const n = Se("lkt-modal");
      return W(), le(n, {
        "modal-name": i.modalName,
        title: "__:lmm.confirmFormLeave",
        "modal-key": i.modalKey,
        "z-index": i.zIndex
      }, {
        default: xe(() => [
          oe("div", lu, [
            ae(qt, {
              type: i.type,
              label: "Idioma actual (ES)",
              modelValue: i.translations.es,
              "onUpdate:modelValue": l[0] || (l[0] = (a) => i.translations.es = a),
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "modelValue"]),
            (W(!0), se(je, null, _t(t.value, (a) => (W(), le(qt, {
              type: i.type,
              label: "Idioma (" + a + ")",
              modelValue: i.translations[a],
              "onUpdate:modelValue": (c) => i.translations[a] = c,
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "label", "modelValue", "onUpdate:modelValue"]))), 256))
          ])
        ]),
        _: 1
      }, 8, ["modal-name", "modal-key", "z-index"]);
    };
  }
}), fu = (e, t) => (ee.customValueSlots[e] = t, !0), hu = (e, t) => (ee.customEditSlots[e] = t, !0);
class pu {
  constructor(t = {}) {
    this.modelValue = "", this.type = Z.Text, this.valid = void 0, this.placeholder = "", this.searchPlaceholder = "", this.label = "", this.labelIcon = "", this.labelIconAtEnd = !1, this.name = Ji(16), this.autocomplete = !1, this.disabled = !1, this.readonly = !1, this.readMode = !1, this.allowReadModeSwitch = !1, this.tabindex = void 0, this.mandatory = !1, this.showPassword = !1, this.canClear = !1, this.canUndo = !1, this.canI18n = !1, this.canStep = !0, this.mandatoryMessage = "", this.infoMessage = "", this.errorMessage = "", this.min = void 0, this.max = void 0, this.step = 1, this.enableAutoNumberFix = !0, this.emptyValueSlot = "", this.optionSlot = void 0, this.valueSlot = void 0, this.editSlot = void 0, this.slotData = {}, this.resource = "", this.resourceData = {}, this.validationResourceData = {}, this.autoValidation = !1, this.autoValidationType = "blur", this.validationStack = "default", this.minNumbers = void 0, this.maxNumbers = void 0, this.minChars = void 0, this.maxChars = void 0, this.minUpperChars = void 0, this.maxUpperChars = void 0, this.minLowerChars = void 0, this.maxLowerChars = void 0, this.minSpecialChars = void 0, this.maxSpecialChars = void 0, this.checkEqualTo = void 0, this.featuredButton = "", this.infoButtonEllipsis = !1, this.fileName = "", this.customButtonText = "", this.customButtonClass = "", this.options = [], this.multiple = !1, this.multipleDisplay = bt.List, this.multipleDisplayEdition = bt.Inline, this.searchable = !1, this.autoloadOptionsResource = !1, this.optionsDownload = "", this.optionsModal = "", this.optionsModalData = {}, this.optionsIcon = "", this.optionsLabelFormatter = void 0, this.optionsResource = "", this.optionsResourceData = {}, this.icon = "", this.download = "", this.modal = "", this.modalKey = "", this.modalData = {}, this.data = {};
    for (let i in t)
      this[i] = t[i];
  }
}
const mu = {
  install: (e) => {
    e.component("lkt-field") === void 0 && (e.component("lkt-field", qt), Uo("lkt-field-language-edit", nu));
  }
}, gu = (e) => {
  ee.defaultEmptyValueSlot = e;
}, vu = (e, t) => {
  ee.optionSlots[e] = t;
}, bu = (e) => ee.undoText = e, yu = (e) => ee.clearText = e, _u = (e) => ee.i18nText = e, wu = (e) => ee.switchEditionOnText = e, Cu = (e) => ee.switchEditionOffText = e, ku = (e) => ee.showPasswordOnText = e, xu = (e) => ee.showPasswordOffText = e, Su = (e) => ee.dateReadFormat = e, Eu = (e) => ee.defaultDateReadFormat = e, Tu = (e, t, i = "default") => {
  i || (i = "default"), ee.validationMessages[i] || (ee.validationMessages[i] = {}), ee.validationMessages[i][e] = t;
}, Lu = (e) => (ee.validationIconSlot = e, !0), Nu = (e = 2, t = ".", i = ".", l = !0, n = "") => n !== "" ? (ee.langNumberFormat[n].amountOfDecimals = e, ee.langNumberFormat[n].decimalSeparator = t, ee.langNumberFormat[n].thousandsSeparator = i, ee.langNumberFormat[n].removeDecimalsIfZero = l, !0) : (ee.amountOfDecimals = e, ee.decimalSeparator = t, ee.thousandsSeparator = i, ee.removeDecimalsIfZero = l, !0), Bu = (e) => {
  ee.readTextMaxLength = e;
}, zu = (e, t) => {
  ee.modalPerItemType[e] = t;
};
export {
  pu as Field,
  Ti as Option,
  mu as default,
  yu as setFieldClearText,
  Su as setFieldDateReadFormat,
  Eu as setFieldDefaultDateReadFormat,
  gu as setFieldEmptySlot,
  _u as setFieldI18nText,
  Nu as setFieldNumberFormat,
  vu as setFieldOptionSlot,
  xu as setFieldShowPasswordOffText,
  ku as setFieldShowPasswordOnText,
  Cu as setFieldSwitchEditionOffText,
  wu as setFieldSwitchEditionOnText,
  bu as setFieldUndoText,
  Lu as setFieldValidationIconSlot,
  Tu as setFieldValidationMessage,
  zu as setModalPerItemType,
  Bu as setReadTextMaxLength,
  hu as setTextEditSlot,
  fu as setTextValueSlot
};
