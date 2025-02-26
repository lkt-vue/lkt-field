var va = Object.defineProperty;
var ba = (e, t, i) => t in e ? va(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var G = (e, t, i) => ba(e, typeof t != "symbol" ? t + "" : t, i);
import { defineComponent as Le, computed as ie, resolveComponent as Se, createBlock as ne, openBlock as W, normalizeClass as it, ref as Q, watch as ge, withCtx as xe, createCommentVNode as fe, resolveDynamicComponent as Mt, mergeProps as Ol, createElementBlock as se, createElementVNode as ae, toDisplayString as bt, createVNode as re, unref as Z, normalizeStyle as cn, withDirectives as Xe, vModelCheckbox as ya, onMounted as ul, Fragment as Ze, vModelText as dl, renderList as _t, vShow as kt, nextTick as tl, createTextVNode as Zt, useSlots as Fl, renderSlot as dt, createStaticVNode as _a, createSlots as Ci, isRef as nt, vModelDynamic as wa } from "vue";
import { generateRandomString as Ll, stripTags as oo, fill as Ca, formatNumber as fn, isEmail as ka } from "lkt-string-tools";
import { httpCall as zl } from "lkt-http-client";
import { __ as ei, currentLanguage as ao, availableLanguages as xa } from "lkt-i18n";
import { FieldValidation as vt } from "lkt-field-validation";
import { date as ti } from "lkt-date-tools";
import { addModal as Sa } from "lkt-modal";
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
let te = Ee;
const so = /* @__PURE__ */ Le({
  __name: "UndoButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = ie(() => te.undoText), s = ie(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), u = () => i("click");
    return (c, o) => {
      const p = Se("lkt-button");
      return W(), ne(p, {
        text: c.insideEllipsis ? n.value : "",
        title: n.value,
        class: it([s.value, "lkt-field--btn-undo"]),
        icon: "lkt-field-icon-undo",
        onClick: u
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), ro = /* @__PURE__ */ Le({
  __name: "ClearButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = ie(() => te.clearText), s = ie(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), u = () => i("click");
    return (c, o) => {
      const p = Se("lkt-button");
      return W(), ne(p, {
        text: c.insideEllipsis ? n.value : "",
        title: n.value,
        class: it(s.value),
        icon: "lkt-field-icon-cancel",
        onClick: u
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Nl = /* @__PURE__ */ Le({
  __name: "PasswordButton",
  props: {
    modelValue: { type: Boolean, default: !1 },
    insideEllipsis: { type: Boolean, default: !1 },
    isFeatured: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = Q(l.modelValue);
    ge(() => l.modelValue, (p) => n.value = p), ge(n, (p) => i("update:modelValue", p));
    const s = ie(() => n.value ? te.showPasswordOnText : te.showPasswordOffText), u = ie(() => n.value === !0 ? "lkt-field-icon-lock-open" : "lkt-field-icon-lock"), c = ie(() => l.isFeatured ? "lkt-field--atn-btn" : l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => i("click");
    return (p, d) => {
      const g = Se("lkt-button");
      return W(), ne(g, {
        text: p.insideEllipsis ? s.value : "",
        title: s.value,
        class: it(c.value),
        icon: u.value,
        onClick: o,
        checked: n.value,
        "onUpdate:checked": d[0] || (d[0] = (_) => n.value = _),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), uo = /* @__PURE__ */ Le({
  __name: "EditionButton",
  props: {
    modelValue: { type: Boolean, default: !1 },
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = Q(l.modelValue);
    ge(() => l.modelValue, (p) => n.value = p), ge(n, (p) => i("update:modelValue", p));
    const s = ie(() => n.value ? te.switchEditionOnText : te.switchEditionOffText), u = ie(() => n.value === !0 ? "lkt-field-icon-eye" : "lkt-field-icon-pencil"), c = ie(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => i("click");
    return (p, d) => {
      const g = Se("lkt-button");
      return W(), ne(g, {
        text: p.insideEllipsis ? s.value : "",
        title: s.value,
        class: it(c.value),
        icon: u.value,
        onClick: o,
        checked: n.value,
        "onUpdate:checked": d[0] || (d[0] = (_) => n.value = _),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Ea = /* @__PURE__ */ Le({
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
    const i = t, l = e, n = Q(l.showPasswordCheck);
    ge(() => l.showPasswordCheck, (u) => n.value = u), ge(n, (u) => i("update:showPasswordCheck", u));
    const s = Q(l.showEditionCheck);
    return ge(() => l.showEditionCheck, (u) => s.value = u), ge(s, (u) => i("update:showEditionCheck", u)), (u, c) => {
      const o = Se("lkt-button");
      return W(), ne(o, {
        split: "",
        "split-icon": "lkt-field-icon-ellipsis-vert",
        class: "lkt-field--info-btn"
      }, {
        split: xe(({ doClose: p }) => [
          u.showUndo ? (W(), ne(so, {
            key: 0,
            onClick: c[0] || (c[0] = () => i("undo")),
            "inside-ellipsis": ""
          })) : fe("", !0),
          u.showClear ? (W(), ne(ro, {
            key: 1,
            onClick: c[1] || (c[1] = () => i("clear")),
            "inside-ellipsis": ""
          })) : fe("", !0),
          u.showPassword ? (W(), ne(Nl, {
            key: 2,
            modelValue: n.value,
            "onUpdate:modelValue": c[2] || (c[2] = (d) => n.value = d),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : fe("", !0),
          u.showEdition ? (W(), ne(uo, {
            key: 3,
            modelValue: s.value,
            "onUpdate:modelValue": c[3] || (c[3] = (d) => s.value = d),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : fe("", !0)
        ]),
        _: 1
      });
    };
  }
}), hn = /* @__PURE__ */ Le({
  __name: "I18nButton",
  props: {
    modelValue: { default: () => ({}) },
    type: {},
    insideEllipsis: { type: Boolean, default: !1 },
    isFeatured: { type: Boolean, default: !1 }
  },
  emits: ["click", "update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = Q(l.modelValue);
    ge(() => l.modelValue, (c) => n.value = c, { deep: !0 }), ge(n, (c) => i("update:modelValue", c), { deep: !0 });
    const s = ie(() => te.i18nText), u = ie(() => l.isFeatured ? "lkt-field--atn-btn" : l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (c, o) => {
      const p = Se("lkt-button");
      return W(), ne(p, {
        text: c.insideEllipsis ? s.value : "",
        title: s.value,
        class: it(u.value),
        icon: "lkt-field-icon-language",
        modal: "lkt-field-language-edit",
        "modal-data": { translations: n.value, type: c.type }
      }, null, 8, ["text", "title", "class", "modal-data"]);
    };
  }
}), Ta = (e, t, i) => (e = Number(e), t !== !1 && e < t && (e = t), i !== !1 && e > i && (e = i), e);
var cl = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e))(cl || {}), q = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Elements = "elements", e))(q || {}), pn = ["text", "search", "select"], La = ["switch", "check"], za = ["switch", "check"], Rt = ["switch", "check"], Na = ["select", "color", "card"], Ba = ["text", "email", "password"], Aa = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], at, co = (at = class {
  constructor(t) {
  }
  feed(t = {}, i = this) {
    if (typeof t == "object") for (let [l, n] of Object.entries(t)) i.assignProp(l, n);
  }
  assignProp(t, i) {
    if (!(Aa.includes(t) || at.lktExcludedProps.includes(t))) {
      if (at.lktDateProps.includes(t)) {
        this[t] = new Date(i);
        return;
      }
      this[t] = i;
    }
  }
}, G(at, "lktAllowUndefinedProps", []), G(at, "lktExcludedProps", []), G(at, "lktDateProps", []), G(at, "lktStrictItem", !1), G(at, "lktDefaultValues", []), at), il = class extends co {
  constructor(t = {}) {
    super();
    G(this, "value");
    G(this, "label", "");
    G(this, "data", {});
    G(this, "disabled", !1);
    G(this, "group", "");
    G(this, "icon", "");
    G(this, "modal", "");
    this.feed(t);
  }
}, It = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(It || {}), Ra = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(Ra || {}), vc = class extends co {
  constructor(t = {}) {
    super();
    G(this, "modelValue", "");
    G(this, "type", "text");
    G(this, "valid");
    G(this, "placeholder", "");
    G(this, "searchPlaceholder", "");
    G(this, "label", "");
    G(this, "labelIcon", "");
    G(this, "labelIconAtEnd", !1);
    G(this, "name", Ll(16));
    G(this, "autocomplete", !1);
    G(this, "disabled", !1);
    G(this, "readonly", !1);
    G(this, "readMode", !1);
    G(this, "allowReadModeSwitch", !1);
    G(this, "tabindex");
    G(this, "mandatory", !1);
    G(this, "showPassword", !1);
    G(this, "canClear", !1);
    G(this, "canUndo", !1);
    G(this, "canI18n", !1);
    G(this, "canStep", !0);
    G(this, "canTag", !0);
    G(this, "mandatoryMessage", "");
    G(this, "infoMessage", "");
    G(this, "errorMessage", "");
    G(this, "min");
    G(this, "max");
    G(this, "step", 1);
    G(this, "enableAutoNumberFix", !0);
    G(this, "emptyValueSlot", "");
    G(this, "optionSlot");
    G(this, "valueSlot");
    G(this, "editSlot");
    G(this, "slotData", {});
    G(this, "resource", "");
    G(this, "resourceData", {});
    G(this, "validationResource", "");
    G(this, "validationResourceData", {});
    G(this, "autoValidation", !1);
    G(this, "autoValidationType", "blur");
    G(this, "validationStack", "default");
    G(this, "minNumbers");
    G(this, "maxNumbers");
    G(this, "minChars");
    G(this, "maxChars");
    G(this, "minUpperChars");
    G(this, "maxUpperChars");
    G(this, "minLowerChars");
    G(this, "maxLowerChars");
    G(this, "minSpecialChars");
    G(this, "maxSpecialChars");
    G(this, "checkEqualTo");
    G(this, "featuredButton", "");
    G(this, "infoButtonEllipsis", !1);
    G(this, "fileName", "");
    G(this, "customButtonText", "");
    G(this, "customButtonClass", "");
    G(this, "options", []);
    G(this, "multiple", !1);
    G(this, "multipleDisplay", "list");
    G(this, "multipleDisplayEdition", "inline");
    G(this, "searchable", !1);
    G(this, "autoloadOptionsResource", !1);
    G(this, "optionsDownload", "");
    G(this, "optionsModal", "");
    G(this, "optionsModalData", {});
    G(this, "optionsText", "");
    G(this, "optionsIcon", "");
    G(this, "optionsClass", "");
    G(this, "optionsLabelFormatter");
    G(this, "optionsResource", "");
    G(this, "optionsResourceData", {});
    G(this, "icon", "");
    G(this, "download", "");
    G(this, "modal", "");
    G(this, "modalKey", "");
    G(this, "modalData", {});
    G(this, "data", {});
    G(this, "validation", {});
    this.feed(t);
  }
}, Da = ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(Da || {}), ft = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(ft || {}), pt = class Fe {
  constructor(t, i) {
    G(this, "code");
    G(this, "status", "info");
    G(this, "min", 0);
    G(this, "max", 0);
    G(this, "equalToValue");
    this.code = t, this.status = i;
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
  static createEmpty(t = "ko") {
    return new Fe("empty", t);
  }
  static createEmail(t = "ko") {
    return new Fe("email", t);
  }
  static createMinStr(t, i = "ko") {
    return new Fe("min-str", i).setMin(t);
  }
  static createMaxStr(t, i = "ko") {
    return new Fe("max-str", i).setMax(t);
  }
  static createMinNum(t, i = "ko") {
    return new Fe("min-num", i).setMin(t);
  }
  static createMaxNum(t, i = "ko") {
    return new Fe("max-num", i).setMax(t);
  }
  static createNumBetween(t, i, l = "ko") {
    return new Fe("max-num", l).setMin(t).setMax(i);
  }
  static createMinNumbers(t, i = "ko") {
    return new Fe("min-numbers", i).setMin(t);
  }
  static createMaxNumbers(t, i = "ko") {
    return new Fe("max-numbers", i).setMax(t);
  }
  static createMinUpperChars(t, i = "ko") {
    return new Fe("min-upper-chars", i).setMin(t);
  }
  static createMaxUpperChars(t, i = "ko") {
    return new Fe("max-upper-chars", i).setMax(t);
  }
  static createMinLowerChars(t, i = "ko") {
    return new Fe("min-lower-chars", i).setMin(t);
  }
  static createMaxLowerChars(t, i = "ko") {
    return new Fe("max-lower-chars", i).setMax(t);
  }
  static createMinSpecialChars(t, i = "ko") {
    return new Fe("min-special-chars", i).setMin(t);
  }
  static createMaxSpecialChars(t, i = "ko") {
    return new Fe("max-special-chars", i).setMax(t);
  }
  static createMinChars(t, i = "ko") {
    return new Fe("min-chars", i).setMin(t);
  }
  static createMaxChars(t, i = "ko") {
    return new Fe("max-chars", i).setMax(t);
  }
  static createEqualTo(t, i = "ko") {
    return new Fe("equal-to", i).setEqualToValue(t);
  }
}, Ia = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e))(Ia || {}), Ma = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(Ma || {}), Oa = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(Oa || {}), Fa = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(Fa || {}), Ha = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(Ha || {}), Hl = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(Hl || {}), Vl = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(Vl || {}), Va = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(Va || {}), Pa = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(Pa || {}), Ua = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(Ua || {}), Wa = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(Wa || {}), $a = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))($a || {}), Za = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(Za || {}), qa = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e))(qa || {}), ja = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(ja || {}), Ga = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(Ga || {}), Ya = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(Ya || {}), Ka = ((e) => (e.Asc = "asc", e.Desc = "desc", e))(Ka || {}), Xa = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(Xa || {}), Ja = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(Ja || {}), Pt = (e, t) => typeof e == "string" && e.startsWith("prop:") ? t[e.substring(5)] : e;
const ll = (e, t) => {
  if (typeof e == "string" && (e = Pt(e, t), typeof e == "string" && e.startsWith("__:"))) {
    let i = e.substring(3), l = ei(i), n = [];
    for (let s in l) n.push({ value: s, label: l[s] });
    return ll(n, t);
  }
  return Array.isArray(e) ? e.length === 0 ? e : e.map((i) => {
    if (typeof i == "object") return new il(i);
    if (typeof i == "string" || typeof i == "number")
      return new il({
        label: String(i),
        value: i
      });
  }).filter((i) => typeof i < "u") : [];
}, bl = (e, t = "", i = !0) => {
  if (t === "") return e;
  const l = String(t).toLowerCase();
  return e.filter((n) => {
    let s = String(n.label).toLowerCase();
    return s.indexOf(l) !== -1 && (i || s !== l);
  });
}, gi = (e, t) => {
  if (t !== "")
    return e.find((i) => Array.isArray(t) ? t.includes(i.value) : i.value == t);
}, Qa = (e, t, i) => {
  const l = /* @__PURE__ */ new Set(), n = [...e, ...ll(t, i)], s = [];
  return n.forEach((u) => {
    let c = [u.value, u.label].join("-");
    l.has(c) || (s.push(u), l.add(c));
  }), s;
}, es = (e, t, i) => {
  if (i) {
    if (Array.isArray(t)) {
      let l = t.findIndex((n) => n == e.value);
      return typeof l > "u" ? !1 : l > -1;
    }
    return !1;
  }
  return e.value == t;
}, mn = (e, t) => {
  let i = t.findIndex((l) => l == e.value);
  return typeof i > "u" && (i = -1), i;
}, Pl = (e) => !(Object.prototype.toString.call(e) === "[object Date]" && isNaN(e)), fo = (e, t) => typeof e > "u" ? "" : (typeof e == "string" && (e = new Date(e)), Pl(e) ? ti(t, e) : ""), ts = /* @__PURE__ */ Le({
  __name: "DropdownButton",
  emits: ["click"],
  setup(e, { emit: t }) {
    const i = t, l = ie(() => te.undoText), n = ie(() => "lkt-field--info-btn"), s = () => i("click");
    return (u, c) => {
      const o = Se("lkt-button");
      return W(), ne(o, {
        text: l.value,
        title: l.value,
        class: it([n.value, "lkt-field--btn-dropdown"]),
        icon: "lkt-field-icon-angle-down",
        onClick: s,
        tabindex: "-1"
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), is = {
  key: 0,
  class: "lkt-field--dropdown-option--icon-container"
}, ls = { class: "lkt-field--dropdown-option--label-container" }, Tt = /* @__PURE__ */ Le({
  __name: "DropdownOption",
  props: {
    option: { default: () => new il() },
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
  emits: ["click", "click-icon"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = ie(() => l.option.icon !== "" ? l.option.icon : typeof l.icon == "function" ? l.icon(l.option) : l.icon), s = ie(() => {
      if (typeof l.text < "u") {
        if (typeof l.text == "function")
          return l.text(l.option);
        if (l.text !== "") return l.text;
      }
      return u.value;
    }), u = ie(() => typeof l.labelFormatter == "function" ? l.labelFormatter(l.option) : l.option.label), c = ie(() => typeof l.customClass == "function" ? l.customClass(l.option) : typeof l.customClass < "u" ? l.customClass : `lkt-opt-${l.option.value}`), o = ie(() => {
      if (l.optionSlot && !(typeof te.optionSlots[l.optionSlot] > "u"))
        return te.optionSlots[l.optionSlot];
    }), p = ie(() => o.value ? o.value : l.isTag ? "lkt-tag" : !l.editable && (l.modal !== "" || l.option.modal !== "") ? "lkt-button" : !l.editable && l.download !== "" ? "lkt-anchor" : "div"), d = ie(() => {
      if (p.value === "lkt-button") {
        let x = l.option.modal;
        l.modal && (x = l.modal);
        let k = x;
        return typeof x == "function" && (k = () => x(l.option)), {
          modal: k,
          modalData: l.modalData,
          modalKey: l.option.value,
          icon: n.value
        };
      }
      if (p.value === "lkt-anchor") {
        let x = l.download;
        typeof l.download == "function" ? x = () => l.download(l.option) : l.download.startsWith("prop:") && (x = l.download.substring(5), x = l.option[x]);
        let k = l.download !== "";
        return {
          href: x,
          target: k ? "_blank" : "",
          download: k
        };
      }
      return p.value === "lkt-tag" ? {
        type: "action-icon",
        icon: "lkt-field-icon-cancel"
      } : {};
    }), g = () => {
      i("click");
    }, _ = () => {
      i("click-icon", l.option);
    };
    return (x, k) => (W(), ne(Mt(p.value), Ol(d.value, {
      class: ["lkt-field--dropdown-option", c.value],
      title: s.value,
      onClick: g,
      onClickIcon: _
    }), {
      default: xe(() => [
        n.value && p.value !== "lkt-button" ? (W(), se("div", is, [
          ae("i", {
            class: it(n.value)
          }, null, 2)
        ])) : fe("", !0),
        ae("div", ls, bt(s.value), 1)
      ]),
      _: 1
    }, 16, ["class", "title"]));
  }
}), ns = { class: "lkt-field-color--tooltip--rgba-container" }, os = { class: "lkt-field-color--tooltip--numeric-input-container" }, as = { class: "like-lkt-field-label" }, vi = /* @__PURE__ */ Le({
  __name: "RgbaRange",
  props: {
    modelValue: { default: 0 },
    label: { default: "" },
    rangeClass: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = Q(l.modelValue);
    return ge(() => l.modelValue, (s) => n.value = s), ge(n, (s) => i("update:modelValue", s)), (s, u) => (W(), se("div", ns, [
      ae("div", os, [
        ae("label", as, bt(s.label), 1),
        re(jt, {
          modelValue: n.value,
          "onUpdate:modelValue": u[0] || (u[0] = (c) => n.value = c),
          type: Z(q).Number,
          min: 0,
          max: 255,
          step: 1,
          "can-step": !1
        }, null, 8, ["modelValue", "type"])
      ]),
      re(jt, {
        class: it(["color-range", s.rangeClass]),
        modelValue: n.value,
        "onUpdate:modelValue": u[1] || (u[1] = (c) => n.value = c),
        type: Z(q).Range,
        min: 0,
        max: 255,
        step: 1
      }, null, 8, ["class", "modelValue", "type"])
    ]));
  }
});
class ss {
  constructor(t) {
    this.r = 0, this.g = 0, this.b = 0, this.a = 255;
    for (let i in t)
      this.hasOwnProperty(i) && (this[i] = t[i]);
  }
}
const rs = (e, t, i, l) => {
  let n = parseInt(e).toString(16).padStart(2, "0").toUpperCase(), s = parseInt(t).toString(16).padStart(2, "0").toUpperCase(), u = parseInt(i).toString(16).padStart(2, "0").toUpperCase(), c = "#" + n + s + u;
  if (l == 255) return c;
  let o = parseInt(l).toString(16).padStart(2, "0").toUpperCase();
  return c + o;
}, gn = (e) => {
  let t = parseInt(+("0x" + e.substring(1, 3)), 10), i = parseInt(+("0x" + e.substring(3, 5)), 10), l = parseInt(+("0x" + e.substring(5, 7)), 10), n = 255;
  return e.length === 9 && (n = parseInt(+("0x" + e.substring(5, 7)), 10)), new ss({ r: t, g: i, b: l, a: n });
}, us = (e) => (0.299 * e.r + 0.587 * e.g + 0.114 * e.b) / e.a > 0.5 ? "#000000" : "#ffffff", ds = { class: "lkt-grid-1" }, cs = { class: "lkt-field-color--tooltip--rgba-container" }, fs = { class: "lkt-field-color--tooltip--hex-input-container" }, ho = /* @__PURE__ */ Le({
  __name: "ColorInput",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = (N) => {
      if ([0, 1].includes(N.length))
        c.value = 0, o.value = 0, p.value = 0, d.value = 255;
      else if ([7, 9].includes(N.length)) {
        let a = gn(N);
        c.value = a.r, o.value = a.g, p.value = a.b, d.value = a.a;
      }
    }, s = () => {
      g.value = rs(
        c.value,
        o.value,
        p.value,
        d.value
      );
    }, u = () => {
      n(g.value);
    }, c = Q(255), o = Q(255), p = Q(255), d = Q(255), g = Q(l.modelValue);
    n(g.value), ge([c, o, p, d], s), ge(() => l.modelValue, (N) => g.value = N), ge(g, (N) => i("update:modelValue", N));
    const _ = ie(() => us(gn(g.value))), x = ie(() => g.value === "" || g.value === "#" ? {} : {
      background: g.value,
      "--lkt-btn-bg": g.value,
      color: _.value,
      "--lkt-btn-color": _.value
    }), k = ie(() => g.value === "" || g.value === "#" ? {} : {
      "--lkt-field-bg-input": g.value,
      "--lkt-field-color": _.value
    });
    return (N, a) => {
      const r = Se("lkt-button");
      return W(), ne(r, {
        class: "lkt-field--toggle-button",
        style: cn(x.value),
        text: g.value,
        type: Z(cl).Tooltip,
        tooltip: {
          class: "lkt-field-color--tooltip",
          locationY: Z(Hl).Bottom,
          locationX: Z(Vl).LeftCorner
        }
      }, {
        tooltip: xe(({ doClose: f }) => [
          ae("div", ds, [
            ae("div", cs, [
              ae("div", fs, [
                a[5] || (a[5] = ae("label", { class: "like-lkt-field-label" }, "HEX", -1)),
                re(jt, {
                  modelValue: g.value,
                  "onUpdate:modelValue": a[0] || (a[0] = (m) => g.value = m),
                  style: cn(k.value),
                  onChange: u
                }, null, 8, ["modelValue", "style"])
              ])
            ]),
            re(vi, {
              modelValue: c.value,
              "onUpdate:modelValue": a[1] || (a[1] = (m) => c.value = m),
              label: "R",
              "range-class": "color-range--red"
            }, null, 8, ["modelValue"]),
            re(vi, {
              modelValue: o.value,
              "onUpdate:modelValue": a[2] || (a[2] = (m) => o.value = m),
              label: "G",
              "range-class": "color-range--green"
            }, null, 8, ["modelValue"]),
            re(vi, {
              modelValue: p.value,
              "onUpdate:modelValue": a[3] || (a[3] = (m) => p.value = m),
              label: "B",
              "range-class": "color-range--blue"
            }, null, 8, ["modelValue"]),
            re(vi, {
              modelValue: d.value,
              "onUpdate:modelValue": a[4] || (a[4] = (m) => d.value = m),
              label: "A",
              "range-class": "color-range--alpha"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["style", "text", "type", "tooltip"]);
    };
  }
}), hs = /* @__PURE__ */ Le({
  __name: "MultipleColorInput",
  props: {
    modelValue: { default: () => [] },
    editMode: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] }
  },
  setup(e) {
    const t = e, i = Q(t.modelValue), l = ie(() => typeof t.max == "boolean" || i.value.length < t.max ? ["inline-create"] : []);
    return (n, s) => {
      const u = Se("lkt-table");
      return W(), ne(u, {
        type: "item",
        modelValue: i.value,
        "onUpdate:modelValue": s[0] || (s[0] = (c) => i.value = c),
        perms: l.value,
        "edit-mode": n.editMode,
        "new-value-generator": () => "",
        "required-items-for-top-create": 999999
      }, {
        item: xe(({ item: c, index: o, isLoading: p, canCreate: d, canRead: g, canUpdate: _, canDrop: x, doDrop: k }) => [
          re(ho, {
            modelValue: i.value[o],
            "onUpdate:modelValue": (N) => i.value[o] = N
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "perms", "edit-mode"]);
    };
  }
}), ps = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/\D+/g, "").length < n && e.push(pt.createMinNumbers(n, ft.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/\D+/g, "").length > n && e.push(pt.createMaxNumbers(n, ft.Ko));
  }
}, ms = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/[^A-Z]+/g, "").length < n && e.push(pt.createMinUpperChars(n, ft.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/[^A-Z]+/g, "").length > n && e.push(pt.createMaxUpperChars(n, ft.Ko));
  }
}, gs = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/[A-Z]+/g, "").length < n && e.push(pt.createMinLowerChars(n, ft.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/[A-Z]+/g, "").length > n && e.push(pt.createMaxLowerChars(n, ft.Ko));
  }
}, vs = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/\d+/g, "").length < n && e.push(pt.createMinChars(n, ft.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/\d+/g, "").length > n && e.push(pt.createMaxChars(n, ft.Ko));
  }
}, bs = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < n && e.push(pt.createMinSpecialChars(n, ft.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > n && e.push(pt.createMaxSpecialChars(n, ft.Ko));
  }
}, vn = (e, t = "default") => {
  if (!e) return "";
  let i = te.validationMessages[t] && te.validationMessages[t][e] ? te.validationMessages[t][e] : "";
  return i || (i = ""), i;
}, ys = { class: "boolean-input" }, _s = { class: "boolean-input-label" }, ws = { class: "boolean-input--check-on" }, Cs = {
  key: 0,
  class: "lkt-field-icon-ok"
}, ks = ["innerHTML"], xs = ["name", "id", "disabled", "readonly", "value", "checked"], Ss = /* @__PURE__ */ Le({
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
    const i = t, l = e, n = Q(null), s = Q(l.modelValue), u = Q(s.value ? "true" : "false"), c = Q(l.focusing), o = (d) => {
      c.value = !0, i("focus", d);
    }, p = (d) => {
      c.value = !1, i("blur", d);
    };
    return ge(() => l.modelValue, (d) => s.value = d), ge(s, (d) => i("update:modelValue", d)), (d, g) => (W(), se("div", ys, [
      ae("div", _s, [
        ae("div", ws, [
          d.type === Z(q).Check && s.value ? (W(), se("i", Cs)) : fe("", !0)
        ])
      ]),
      d.label ? (W(), se("div", {
        key: 0,
        class: "lkt-field--label",
        innerHTML: d.label
      }, null, 8, ks)) : fe("", !0),
      Xe(ae("input", {
        "onUpdate:modelValue": g[0] || (g[0] = (_) => s.value = _),
        type: "checkbox",
        ref_key: "input",
        ref: n,
        name: d.name,
        id: d.id,
        disabled: !d.editable || d.disabled,
        readonly: !d.editable || d.readonly,
        value: u.value,
        checked: s.value,
        onFocus: o,
        onBlur: p
      }, null, 40, xs), [
        [ya, s.value]
      ])
    ]));
  }
});
function ze(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ki = { exports: {} }, Es = ki.exports, bn;
function Ts() {
  return bn || (bn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Es, function(t, i) {
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
  }(ki)), ki.exports;
}
var Ls = /* @__PURE__ */ Ts();
const po = /* @__PURE__ */ ze(Ls);
var xi = { exports: {} }, zs = xi.exports, yn;
function Ns() {
  return yn || (yn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : zs, function(t, i) {
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
  }(xi)), xi.exports;
}
var Bs = /* @__PURE__ */ Ns();
const mo = /* @__PURE__ */ ze(Bs);
var Si = { exports: {} }, As = Si.exports, _n;
function Rs() {
  return _n || (_n = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : As, function(t, i) {
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
  }(Si)), Si.exports;
}
var Ds = /* @__PURE__ */ Rs();
const go = /* @__PURE__ */ ze(Ds);
var Ei = { exports: {} }, Is = Ei.exports, wn;
function Ms() {
  return wn || (wn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Is, function(t, i) {
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
  }(Ei)), Ei.exports;
}
var Os = /* @__PURE__ */ Ms();
const vo = /* @__PURE__ */ ze(Os);
var Ti = { exports: {} }, Fs = Ti.exports, Cn;
function Hs() {
  return Cn || (Cn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Fs, function(t, i) {
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
  }(Ti)), Ti.exports;
}
var Vs = /* @__PURE__ */ Hs();
const fl = /* @__PURE__ */ ze(Vs);
var Li = { exports: {} }, Ps = Li.exports, kn;
function Us() {
  return kn || (kn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Ps, function(t, i) {
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
  }(Li)), Li.exports;
}
var Ws = /* @__PURE__ */ Us();
const bo = /* @__PURE__ */ ze(Ws);
var zi = { exports: {} }, $s = zi.exports, xn;
function Zs() {
  return xn || (xn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : $s, function(t, i) {
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
  }(zi)), zi.exports;
}
var qs = /* @__PURE__ */ Zs();
const yo = /* @__PURE__ */ ze(qs);
var Ni = { exports: {} }, js = Ni.exports, Sn;
function Gs() {
  return Sn || (Sn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : js, function(t, i) {
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
  }(Ni)), Ni.exports;
}
var Ys = /* @__PURE__ */ Gs();
const _o = /* @__PURE__ */ ze(Ys);
var Bi = { exports: {} }, Ks = Bi.exports, En;
function Xs() {
  return En || (En = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Ks, function(t, i) {
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
  }(Bi)), Bi.exports;
}
var Js = /* @__PURE__ */ Xs();
const wo = /* @__PURE__ */ ze(Js);
var Ai = { exports: {} }, Qs = Ai.exports, Tn;
function er() {
  return Tn || (Tn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG una finestra con un documento");
        return i(l);
      };
    })(typeof window < "u" ? window : Qs, function(t, i) {
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
  }(Ai)), Ai.exports;
}
var tr = /* @__PURE__ */ er();
const Co = /* @__PURE__ */ ze(tr);
var Ri = { exports: {} }, ir = Ri.exports, Ln;
function lr() {
  return Ln || (Ln = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : ir, function(t, i) {
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
  }(Ri)), Ri.exports;
}
var nr = /* @__PURE__ */ lr();
const ko = /* @__PURE__ */ ze(nr);
var Di = { exports: {} }, or = Di.exports, zn;
function ar() {
  return zn || (zn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : or, function(t, i) {
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
  }(Di)), Di.exports;
}
var sr = /* @__PURE__ */ ar();
const xo = /* @__PURE__ */ ze(sr);
var Ii = { exports: {} }, rr = Ii.exports, Nn;
function ur() {
  return Nn || (Nn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : rr, function(t, i) {
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
  }(Ii)), Ii.exports;
}
var dr = /* @__PURE__ */ ur();
const So = /* @__PURE__ */ ze(dr);
var Mi = { exports: {} }, cr = Mi.exports, Bn;
function fr() {
  return Bn || (Bn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : cr, function(t, i) {
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
  }(Mi)), Mi.exports;
}
var hr = /* @__PURE__ */ fr();
const Eo = /* @__PURE__ */ ze(hr);
var Oi = { exports: {} }, pr = Oi.exports, An;
function mr() {
  return An || (An = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : pr, function(t, i) {
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
  }(Oi)), Oi.exports;
}
var gr = /* @__PURE__ */ mr();
const To = /* @__PURE__ */ ze(gr);
var Fi = { exports: {} }, vr = Fi.exports, Rn;
function br() {
  return Rn || (Rn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : vr, function(t, i) {
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
  }(Fi)), Fi.exports;
}
var yr = /* @__PURE__ */ br();
const Lo = /* @__PURE__ */ ze(yr);
var Hi = { exports: {} }, _r = Hi.exports, Dn;
function wr() {
  return Dn || (Dn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : _r, function(t, i) {
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
  }(Hi)), Hi.exports;
}
var Cr = /* @__PURE__ */ wr();
const zo = /* @__PURE__ */ ze(Cr);
var Vi = { exports: {} }, kr = Vi.exports, In;
function xr() {
  return In || (In = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : kr, function(t, i) {
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
  }(Vi)), Vi.exports;
}
var Sr = /* @__PURE__ */ xr();
const No = /* @__PURE__ */ ze(Sr);
var Pi = { exports: {} }, Er = Pi.exports, Mn;
function Tr() {
  return Mn || (Mn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Er, function(t, i) {
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
  }(Pi)), Pi.exports;
}
var Lr = /* @__PURE__ */ Tr();
const Bo = /* @__PURE__ */ ze(Lr);
var Ui = { exports: {} }, zr = Ui.exports, On;
function Nr() {
  return On || (On = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : zr, function(t, i) {
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
  }(Ui)), Ui.exports;
}
var Br = /* @__PURE__ */ Nr();
const Ao = /* @__PURE__ */ ze(Br);
var Wi = { exports: {} }, Ar = Wi.exports, Fn;
function Rr() {
  return Fn || (Fn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Ar, function(t, i) {
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
  }(Wi)), Wi.exports;
}
var Dr = /* @__PURE__ */ Rr();
const Ro = /* @__PURE__ */ ze(Dr);
var $i = { exports: {} }, Ir = $i.exports, Hn;
function Mr() {
  return Hn || (Hn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Ir, function(t, i) {
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
  }($i)), $i.exports;
}
var Or = /* @__PURE__ */ Mr();
const Do = /* @__PURE__ */ ze(Or), Fr = { ckb: po, cs: mo, da: go, de: vo, en: fl, es: bo, fr: yo, he: _o, hu: wo, it: Co, ja: ko, ko: xo, lv: So, nl: Eo, pl: To, pt_br: Lo, ro: zo, ru: No, se: Bo, ua: Ao, ur: Ro, zh_cn: Do }, Vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: po,
  cs: mo,
  da: go,
  de: vo,
  default: Fr,
  en: fl,
  es: bo,
  fr: yo,
  he: _o,
  hu: wo,
  it: Co,
  ja: ko,
  ko: xo,
  lv: So,
  nl: Eo,
  pl: To,
  pt_br: Lo,
  ro: zo,
  ru: No,
  se: Bo,
  ua: Ao,
  ur: Ro,
  zh_cn: Do
}, Symbol.toStringTag, { value: "Module" })), Hr = {
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
}, Vr = {
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
    let n = this.setSubmenu(e), s = l.align._itemMenu = n.querySelector("ul");
    s.addEventListener("click", this.pickup.bind(e)), l.align._alignList = s.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, s = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.icons, l = e.util.createElement("DIV"), n = e.options.alignItems;
    let s = "";
    for (let u = 0, c, o; u < n.length; u++)
      c = n[u], o = t.toolbar["align" + c.charAt(0).toUpperCase() + c.slice(1)], s += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + c + '" title="' + o + '" aria-label="' + o + '"><span class="se-list-icon">' + i["align_" + c] + "</span>" + o + "</button></li>";
    return l.className = "se-submenu se-list-layer se-list-align", l.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + s + "</ul></div>", l;
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
      const n = i.parentElement, s = l.parentElement;
      n.appendChild(l), s.appendChild(i);
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !i && !/UL/i.test(t.tagName); )
      i = t.getAttribute("data-value"), t = t.parentNode;
    if (!i) return;
    const l = this.context.align.defaultDir, n = this.getSelectedElements();
    for (let s = 0, u = n.length; s < u; s++)
      this.util.setStyle(n[s], "textAlign", i === l ? "" : i);
    this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1);
  }
}, Pr = {
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
    let l, n, s, u, c = e.options.font, o = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (s = 0, u = c.length; s < u; s++)
      l = c[s], n = l.split(",")[0], o += '<li><button type="button" class="se-btn-list" data-value="' + l + '" data-txt="' + n + '" title="' + n + '" aria-label="' + n + '" style="font-family:' + l + ';">' + n + "</button></li>";
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
}, Ur = {
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
    let s = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let u = 0, c = t.fontSizeUnit, o = n.length, p; u < o; u++)
      p = n[u], s += '<li><button type="button" class="se-btn-list" data-value="' + p + c + '" title="' + p + c + '" aria-label="' + p + c + '" style="font-size:' + p + c + ';">' + p + "</button></li>";
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
}, Io = {
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
    let s = [], u = '<div class="se-list-inner">';
    for (let c = 0, o = n.length, p; c < o; c++)
      p = n[c], p && (typeof p == "string" && (s.push(p), c < o - 1) || (s.length > 0 && (u += '<div class="se-selector-color">' + t(s) + "</div>", s = []), typeof p == "object" && (u += '<div class="se-selector-color">' + t(p) + "</div>")));
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
      for (let s = 0, u = n.length; s < u; s++)
        l.toLowerCase() === n[s].getAttribute("data-value").toLowerCase() ? this.util.addClass(n[s], "active") : this.util.removeClass(n[s], "active");
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
}, Wr = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Io]);
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
}, $r = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Io]);
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
}, Zr = {
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
    for (let s = 0, u = l.length; s < u; s++)
      n += '<li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="' + l[s].class + '" title="' + l[s].name + '" aria-label="' + l[s].name + '"><hr' + (l[s].class ? ' class="' + l[s].class + '"' : "") + (l[s].style ? ' style="' + l[s].style + '"' : "") + "/></button></li>";
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
}, qr = {
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
    const s = this.util;
    s.sortByDepth(n, !0);
    let u = n[0], c = n[n.length - 1], o = (s.isListCell(u) || s.isComponent(u)) && !u.previousElementSibling ? u.parentNode.previousElementSibling : u.previousElementSibling, p = (s.isListCell(c) || s.isComponent(c)) && !c.nextElementSibling ? c.parentNode.nextElementSibling : c.nextElementSibling;
    const d = l.collapsed, g = {
      sc: l.startContainer,
      so: l.startContainer === l.endContainer && s.onlyZeroWidthSpace(l.startContainer) && l.startOffset === 0 && l.endOffset === 1 ? l.endOffset : l.startOffset,
      ec: l.endContainer,
      eo: l.endOffset
    };
    let _ = null, x = !0;
    for (let k = 0, N = n.length; k < N; k++)
      if (!s.isList(s.getRangeFormatElement(n[k], (function(a) {
        return this.getRangeFormatElement(a) && a !== n[k];
      }).bind(s)))) {
        x = !1;
        break;
      }
    if (x && (!o || u.tagName !== o.tagName || e !== o.tagName.toUpperCase()) && (!p || c.tagName !== p.tagName || e !== p.tagName.toUpperCase())) {
      if (i) {
        for (let m = 0, v = n.length; m < v; m++)
          for (let b = m - 1; b >= 0; b--)
            if (n[b].contains(n[m])) {
              n.splice(m, 1), m--, v--;
              break;
            }
      }
      const k = s.getRangeFormatElement(u), N = k && k.tagName === e;
      let a, r;
      const f = (function(m) {
        return !this.isComponent(m);
      }).bind(s);
      N || (r = s.createElement(e));
      for (let m = 0, v = n.length, b, h; m < v; m++)
        h = s.getRangeFormatElement(n[m], f), !(!h || !s.isList(h)) && (b ? b !== h ? (i && s.isListCell(h.parentNode) ? this.plugins.list._detachNested.call(this, a.f) : _ = this.detachRangeFormatElement(a.f[0].parentNode, a.f, r, !1, !0), h = n[m].parentNode, N || (r = s.createElement(e)), b = h, a = { r: b, f: [s.getParentElement(n[m], "LI")] }) : a.f.push(s.getParentElement(n[m], "LI")) : (b = h, a = { r: b, f: [s.getParentElement(n[m], "LI")] }), m === v - 1 && (i && s.isListCell(h.parentNode) ? this.plugins.list._detachNested.call(this, a.f) : _ = this.detachRangeFormatElement(a.f[0].parentNode, a.f, r, !1, !0)));
    } else {
      const k = o && o.parentNode, N = p && p.parentNode;
      o = k && !s.isWysiwygDiv(k) && k.nodeName === e ? k : o, p = N && !s.isWysiwygDiv(N) && N.nodeName === e ? N : p;
      const a = o && o.tagName === e, r = p && p.tagName === e;
      let f = a ? o : s.createElement(e), m = null, v = null, b = null;
      const h = (function(y) {
        return !this.isComponent(y) && !this.isList(y);
      }).bind(s);
      for (let y = 0, C = n.length, w, S, I, E, z, B, P, U, V; y < C; y++) {
        if (S = n[y], S.childNodes.length === 0 && !s._isIgnoreNodeChange(S)) {
          s.removeItem(S);
          continue;
        }
        if (E = n[y + 1], z = S.parentNode, B = E ? E.parentNode : null, I = s.isListCell(S), V = s.isRangeFormatElement(z) ? z : null, P = I && !s.isWysiwygDiv(z) ? z.parentNode : z, U = I && !s.isWysiwygDiv(z) ? !E || s.isListCell(P) ? z : z.nextSibling : S.nextSibling, w = s.createElement("LI"), s.copyFormatAttributes(w, S), y === 0 && g.sc === S && (g.sc = w), y === C - 1 && g.ec === S && (g.ec = w), s.isComponent(S)) {
          const M = /^HR$/i.test(S.nodeName);
          M || (w.innerHTML = "<br>"), w.innerHTML += S.outerHTML, M && (w.innerHTML += "<br>");
        } else {
          const M = S.childNodes;
          for (; M[0]; )
            w.appendChild(M[0]);
        }
        f.appendChild(w), (!E || P !== B || s.isRangeFormatElement(U)) && (m || (m = f), (!a || !E || P !== B) && !(E && s.isList(B) && B === z) && f.parentNode !== P && P.insertBefore(f, U)), s.removeItem(S), a && v === null && (v = f.children.length - 1), E && (s.getRangeFormatElement(B, h) !== s.getRangeFormatElement(z, h) || s.isList(B) && s.isList(z) && s.getElementDepth(B) !== s.getElementDepth(z)) && (f = s.createElement(e)), V && V.children.length === 0 && s.removeItem(V);
      }
      v && (m = m.children[v]), r && (b = f.children.length - 1, f.innerHTML += p.innerHTML, f.children[b], s.removeItem(p));
    }
    return this.effectNode = null, d && _ || g;
  },
  _detachNested: function(e) {
    const t = e[0], i = e[e.length - 1], l = i.nextElementSibling, n = t.parentNode, s = n.parentNode.nextElementSibling, u = n.parentNode.parentNode;
    for (let o = 0, p = e.length; o < p; o++)
      u.insertBefore(e[o], s);
    if (l && n.children.length > 0) {
      const o = n.cloneNode(!1), p = n.childNodes, d = this.util.getPositionIndex(l);
      for (; p[d]; )
        o.appendChild(p[d]);
      i.appendChild(o);
    }
    n.children.length === 0 && this.util.removeItem(n), this.util.mergeSameTags(u);
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
    let l = t[0].parentNode, n = t[i - 1], s = null;
    if (e) {
      if (l !== n.parentNode && this.util.isList(n.parentNode.parentNode) && n.nextElementSibling)
        for (n = n.nextElementSibling; n; )
          t.push(n), n = n.nextElementSibling;
      s = this.plugins.list.editList.call(this, l.nodeName.toUpperCase(), t, !0);
    } else {
      let u = this.util.createElement(l.nodeName), c = t[0].previousElementSibling, o = n.nextElementSibling;
      const p = { s: null, e: null, sl: l, el: l };
      for (let _ = 0, x = i, k; _ < x; _++)
        k = t[_], k.parentNode !== l && (this.plugins.list._insiedList.call(this, l, u, c, o, p), l = k.parentNode, u = this.util.createElement(l.nodeName)), c = k.previousElementSibling, o = k.nextElementSibling, u.appendChild(k);
      this.plugins.list._insiedList.call(this, l, u, c, o, p);
      const d = this.util.getNodeFromPath(p.s, p.sl), g = this.util.getNodeFromPath(p.e, p.el);
      s = {
        sc: d,
        so: 0,
        ec: g,
        eo: g.textContent.length
      };
    }
    return s;
  },
  _insiedList: function(e, t, i, l, n) {
    let s = !1;
    if (i && t.tagName === i.tagName) {
      const u = t.children;
      for (; u[0]; )
        i.appendChild(u[0]);
      t = i, s = !0;
    }
    if (l && t.tagName === l.tagName) {
      const u = l.children;
      for (; u[0]; )
        t.appendChild(u[0]);
      const c = l.nextElementSibling;
      l.parentNode.removeChild(l), l = c;
    }
    if (!s) {
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
}, jr = {
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
    }, n = this.setSubmenu(e), s = n.querySelector(".se-controller-table-picker");
    l.tableHighlight = n.querySelector(".se-table-size-highlighted"), l.tableUnHighlight = n.querySelector(".se-table-size-unhighlighted"), l.tableDisplay = n.querySelector(".se-table-size-display"), e.options.rtl && (l.tableHighlight.style.left = 10 * 18 - 13 + "px");
    let u = this.setController_table(e);
    l.tableController = u, l.resizeButton = u.querySelector("._se_table_resize"), l.resizeText = u.querySelector("._se_table_resize > span > span"), l.columnFixedButton = u.querySelector("._se_table_fixed_column"), l.headerButton = u.querySelector("._se_table_header");
    let c = this.setController_tableEditor(e, l.cellControllerTop);
    l.resizeDiv = c, l.splitMenu = c.querySelector(".se-btn-group-sub"), l.mergeButton = c.querySelector("._se_table_merge_button"), l.splitButton = c.querySelector("._se_table_split_button"), l.insertRowAboveButton = c.querySelector("._se_table_insert_row_a"), l.insertRowBelowButton = c.querySelector("._se_table_insert_row_b"), s.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, l)), s.addEventListener("click", this.appendTable.bind(e)), c.addEventListener("click", this.onClick_tableController.bind(e)), u.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, n), i.element.relative.appendChild(c), i.element.relative.appendChild(u), n = null, s = null, c = null, u = null, l = null;
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
      const n = i._trElements = l.rows, s = e.cellIndex;
      let u = 0;
      for (let d = 0, g = n[0].cells, _ = n[0].cells.length; d < _; d++)
        u += g[d].colSpan;
      const c = i._rowIndex = i._trElement.rowIndex;
      i._rowCnt = n.length, i._physical_cellCnt = i._trElement.cells.length, i._logical_cellCnt = u, i._physical_cellIndex = s, i._current_colSpan = i._tdElement.colSpan - 1, i._current_rowSpan - i._trElement.cells[s].rowSpan - 1;
      let o = [], p = [];
      for (let d = 0, g, _; d <= c; d++) {
        g = n[d].cells, _ = 0;
        for (let x = 0, k = g.length, N, a, r, f; x < k; x++) {
          if (N = g[x], a = N.colSpan - 1, r = N.rowSpan - 1, f = x + _, p.length > 0)
            for (let m = 0, v; m < p.length; m++)
              v = p[m], !(v.row > d) && (f >= v.index ? (_ += v.cs, f += v.cs, v.rs -= 1, v.row = d + 1, v.rs < 1 && (p.splice(m, 1), m--)) : x === k - 1 && (v.rs -= 1, v.row = d + 1, v.rs < 1 && (p.splice(m, 1), m--)));
          if (d === c && x === s) {
            i._logical_cellIndex = f;
            break;
          }
          r > 0 && o.push({
            index: f,
            cs: a + 1,
            rs: r,
            row: -1
          }), _ += a;
        }
        p = p.concat(o).sort(function(x, k) {
          return x.index - k.index;
        }), o = [];
      }
      o = null, p = null;
    }
  },
  editTable: function(e, t) {
    const i = this.plugins.table, l = this.context.table, n = l._element, s = e === "row";
    if (s) {
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
      const u = l._tdElement, c = i._selectedCells;
      if (s)
        if (t)
          i.setCellInfo.call(this, t === "up" ? c[0] : c[c.length - 1], !0), i.editRow.call(this, t, u);
        else {
          let o = c[0].parentNode;
          const p = [c[0]];
          for (let d = 1, g = c.length, _; d < g; d++)
            _ = c[d], o !== _.parentNode && (p.push(_), o = _.parentNode);
          for (let d = 0, g = p.length; d < g; d++)
            i.setCellInfo.call(this, p[d], !0), i.editRow.call(this, t);
        }
      else {
        const o = c[0].parentNode;
        if (t) {
          let p = null;
          for (let d = 0, g = c.length - 1; d < g; d++)
            if (o !== c[d + 1].parentNode) {
              p = c[d];
              break;
            }
          i.setCellInfo.call(this, t === "left" ? c[0] : p || c[0], !0), i.editCell.call(this, t, u);
        } else {
          const p = [c[0]];
          for (let d = 1, g = c.length, _; d < g && (_ = c[d], o === _.parentNode); d++)
            p.push(_);
          for (let d = 0, g = p.length; d < g; d++)
            i.setCellInfo.call(this, p[d], !0), i.editCell.call(this, t);
        }
      }
      t || i.init.call(this);
    } else
      i[s ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const u = n.children;
      for (let c = 0; c < u.length; c++)
        u[c].children.length === 0 && (this.util.removeItem(u[c]), c--);
      n.children.length === 0 && this.util.removeItem(n);
    }
  },
  editRow: function(e, t) {
    const i = this.context.table, l = !e, n = e === "up", s = i._rowIndex, u = l || n ? s : s + i._current_rowSpan + 1, c = l ? -1 : 1, o = i._trElements;
    let p = i._logical_cellCnt;
    for (let d = 0, g = s + (l ? -1 : 0), _; d <= g; d++) {
      if (_ = o[d].cells, _.length === 0) return;
      for (let x = 0, k = _.length, N, a; x < k; x++)
        N = _[x].rowSpan, a = _[x].colSpan, !(N < 2 && a < 2) && N + d > u && u > d && (_[x].rowSpan = N + c, p -= a);
    }
    if (l) {
      const d = o[s + 1];
      if (d) {
        const g = [];
        let _ = o[s].cells, x = 0;
        for (let k = 0, N = _.length, a, r; k < N; k++)
          a = _[k], r = k + x, x += a.colSpan - 1, a.rowSpan > 1 && (a.rowSpan -= 1, g.push({ cell: a.cloneNode(!1), index: r }));
        if (g.length > 0) {
          let k = g.shift();
          _ = d.cells, x = 0;
          for (let N = 0, a = _.length, r, f; N < a && (r = _[N], f = N + x, x += r.colSpan - 1, !(f >= k.index && (N--, x--, x += k.cell.colSpan - 1, d.insertBefore(k.cell, r), k = g.shift(), !k))); N++)
            ;
          if (k) {
            d.appendChild(k.cell);
            for (let N = 0, a = g.length; N < a; N++)
              d.appendChild(g[N].cell);
          }
        }
      }
      i._element.deleteRow(u);
    } else {
      const d = i._element.insertRow(u);
      d.innerHTML = this.plugins.table.createCells.call(this, "td", p, !1);
    }
    l ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  editCell: function(e, t) {
    const i = this.context.table, l = this.util, n = !e, s = e === "left", u = i._current_colSpan, c = n || s ? i._logical_cellIndex : i._logical_cellIndex + u + 1, o = i._trElements;
    let p = [], d = [], g = 0;
    const _ = [], x = [];
    for (let k = 0, N = i._rowCnt, a, r, f, m, v, b; k < N; k++) {
      a = o[k], r = c, v = !1, f = a.cells, b = 0;
      for (let h = 0, y, C = f.length, w, S, I; h < C && (y = f[h], !!y); h++)
        if (w = y.rowSpan - 1, S = y.colSpan - 1, n) {
          if (I = h + b, d.length > 0) {
            const E = !f[h + 1];
            for (let z = 0, B; z < d.length; z++)
              B = d[z], !(B.row > k) && (I >= B.index ? (b += B.cs, I = h + b, B.rs -= 1, B.row = k + 1, B.rs < 1 && (d.splice(z, 1), z--)) : E && (B.rs -= 1, B.row = k + 1, B.rs < 1 && (d.splice(z, 1), z--)));
          }
          w > 0 && p.push({
            rs: w,
            cs: S + 1,
            index: I,
            row: -1
          }), I >= r && I + S <= r + u ? _.push(y) : I <= r + u && I + S >= r ? y.colSpan -= l.getOverlapRangeAtIndex(c, c + u, I, I + S) : w > 0 && (I < r || I + S > r + u) && x.push({
            cell: y,
            i: k,
            rs: k + w
          }), b += S;
        } else {
          if (h >= r) break;
          if (S > 0) {
            if (g < 1 && S + h >= r) {
              y.colSpan += 1, r = null, g = w + 1;
              break;
            }
            r -= S;
          }
          if (!v) {
            for (let E = 0, z; E < d.length; E++)
              z = d[E], r -= z.cs, z.rs -= 1, z.rs < 1 && (d.splice(E, 1), E--);
            v = !0;
          }
        }
      if (d = d.concat(p).sort(function(h, y) {
        return h.index - y.index;
      }), p = [], !n) {
        if (g > 0) {
          g -= 1;
          continue;
        }
        r !== null && f.length > 0 && (m = this.plugins.table.createCells.call(this, f[0].nodeName, 0, !0), m = a.insertBefore(m, f[r]));
      }
    }
    if (n) {
      let k, N;
      for (let a = 0, r = _.length, f; a < r; a++)
        f = _[a].parentNode, l.removeItem(_[a]), f.cells.length === 0 && (k || (k = l.getArrayIndex(o, f)), N = l.getArrayIndex(o, f), l.removeItem(f));
      for (let a = 0, r = x.length, f; a < r; a++)
        f = x[a], f.cell.rowSpan = l.getOverlapRangeAtIndex(k, N, f.i, f.rs);
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
    const t = this.util, i = e === "vertical", l = this.context.table, n = l._tdElement, s = l._trElements, u = l._trElement, c = l._logical_cellIndex, o = l._rowIndex, p = this.plugins.table.createCells.call(this, n.nodeName, 0, !0);
    if (i) {
      const d = n.colSpan;
      if (p.rowSpan = n.rowSpan, d > 1)
        p.colSpan = this._w.Math.floor(d / 2), n.colSpan = d - p.colSpan, u.insertBefore(p, n.nextElementSibling);
      else {
        let g = [], _ = [];
        for (let x = 0, k = l._rowCnt, N, a; x < k; x++) {
          N = s[x].cells, a = 0;
          for (let r = 0, f = N.length, m, v, b, h; r < f; r++) {
            if (m = N[r], v = m.colSpan - 1, b = m.rowSpan - 1, h = r + a, _.length > 0)
              for (let y = 0, C; y < _.length; y++)
                C = _[y], !(C.row > x) && (h >= C.index ? (a += C.cs, h += C.cs, C.rs -= 1, C.row = x + 1, C.rs < 1 && (_.splice(y, 1), y--)) : r === f - 1 && (C.rs -= 1, C.row = x + 1, C.rs < 1 && (_.splice(y, 1), y--)));
            if (h <= c && b > 0 && g.push({
              index: h,
              cs: v + 1,
              rs: b,
              row: -1
            }), m !== n && h <= c && h + v >= c + d - 1) {
              m.colSpan += 1;
              break;
            }
            if (h > c) break;
            a += v;
          }
          _ = _.concat(g).sort(function(r, f) {
            return r.index - f.index;
          }), g = [];
        }
        u.insertBefore(p, n.nextElementSibling);
      }
    } else {
      const d = n.rowSpan;
      if (p.colSpan = n.colSpan, d > 1) {
        p.rowSpan = this._w.Math.floor(d / 2);
        const g = d - p.rowSpan, _ = [], x = t.getArrayIndex(s, u) + g;
        for (let r = 0, f, m; r < x; r++) {
          f = s[r].cells, m = 0;
          for (let v = 0, b = f.length, h, y, C; v < b && (C = v + m, !(C >= c)); v++)
            h = f[v], y = h.rowSpan - 1, y > 0 && y + r >= x && C < c && _.push({
              index: C,
              cs: h.colSpan
            }), m += h.colSpan - 1;
        }
        const k = s[x], N = k.cells;
        let a = _.shift();
        for (let r = 0, f = N.length, m = 0, v, b, h, y; r < f; r++) {
          if (h = r + m, v = N[r], b = v.colSpan - 1, y = h + b + 1, a && y >= a.index && (m += a.cs, y += a.cs, a = _.shift()), y >= c || r === f - 1) {
            k.insertBefore(p, v.nextElementSibling);
            break;
          }
          m += b;
        }
        n.rowSpan = g;
      } else {
        p.rowSpan = n.rowSpan;
        const g = t.createElement("TR");
        g.appendChild(p);
        for (let k = 0, N; k < o; k++) {
          if (N = s[k].cells, N.length === 0) return;
          for (let a = 0, r = N.length; a < r; a++)
            k + N[a].rowSpan - 1 >= o && (N[a].rowSpan += 1);
        }
        const _ = l._physical_cellIndex, x = u.cells;
        for (let k = 0, N = x.length; k < N; k++)
          k !== _ && (x[k].rowSpan += 1);
        u.parentNode.insertBefore(g, u.nextElementSibling);
      }
    }
    this.focusEdge(n), this.plugins.table.setPositionControllerDiv.call(this, n, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, i = this.util, l = e._ref, n = e._selectedCells, s = n[0];
    let u = null, c = null, o = l.ce - l.cs + 1, p = l.re - l.rs + 1, d = "", g = null;
    for (let _ = 1, x = n.length, k, N; _ < x; _++) {
      k = n[_], g !== k.parentNode && (g = k.parentNode), N = k.children;
      for (let a = 0, r = N.length; a < r; a++)
        i.isFormatElement(N[a]) && i.onlyZeroWidthSpace(N[a].textContent) && i.removeItem(N[a]);
      d += k.innerHTML, i.removeItem(k), g.cells.length === 0 && (u ? c = g : u = g, p -= 1);
    }
    if (u) {
      const _ = t._trElements, x = i.getArrayIndex(_, u), k = i.getArrayIndex(_, c || u), N = [];
      for (let a = 0, r; a <= k; a++) {
        if (r = _[a].cells, r.length === 0) {
          N.push(_[a]);
          continue;
        }
        for (let f = 0, m = r.length, v, b; f < m; f++)
          v = r[f], b = v.rowSpan - 1, b > 0 && a + b >= x && (v.rowSpan -= i.getOverlapRangeAtIndex(x, k, a, a + b));
      }
      for (let a = 0, r = N.length; a < r; a++)
        i.removeItem(N[a]);
    }
    s.innerHTML += d, s.colSpan = o, s.rowSpan = p, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, s), i.addClass(s, "se-table-selected-cell"), this.focusEdge(s);
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
    let l, n, s, u;
    e.indexOf("width") > -1 && (l = t.resizeButton.firstElementChild, n = t.resizeText, t._maxWidth ? (s = t.icons.reduction, u = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(i, "se-table-size-auto"), this.util.addClass(i, "se-table-size-100")) : (s = t.icons.expansion, u = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(i, "se-table-size-100"), this.util.addClass(i, "se-table-size-auto")), this.util.changeElement(l, s), this.util.changeTxt(n, u)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(i, "se-table-layout-auto"), this.util.addClass(i, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(i, "se-table-layout-fixed"), this.util.addClass(i, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")));
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
    const i = this.plugins.table, l = i._selectedTable.rows, n = this.util, s = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let d = 0, g = s.length; d < g; d++)
      n.removeClass(s[d], "se-table-selected-cell");
    if (e === t && (n.addClass(e, "se-table-selected-cell"), !i._shift))
      return;
    let u = !0, c = [], o = [];
    const p = i._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let d = 0, g = l.length, _, x; d < g; d++) {
      _ = l[d].cells, x = 0;
      for (let k = 0, N = _.length, a, r, f, m; k < N; k++) {
        if (a = _[k], f = a.colSpan - 1, m = a.rowSpan - 1, r = k + x, c.length > 0)
          for (let v = 0, b; v < c.length; v++)
            b = c[v], !(b.row > d) && (r >= b.index ? (x += b.cs, r += b.cs, b.rs -= 1, b.row = d + 1, b.rs < 1 && (c.splice(v, 1), v--)) : k === N - 1 && (b.rs -= 1, b.row = d + 1, b.rs < 1 && (c.splice(v, 1), v--)));
        if (u) {
          if ((a === e || a === t) && (p.cs = p.cs !== null && p.cs < r ? p.cs : r, p.ce = p.ce !== null && p.ce > r + f ? p.ce : r + f, p.rs = p.rs !== null && p.rs < d ? p.rs : d, p.re = p.re !== null && p.re > d + m ? p.re : d + m, p._i += 1), p._i === 2) {
            u = !1, c = [], o = [], d = -1;
            break;
          }
        } else if (n.getOverlapRangeAtIndex(p.cs, p.ce, r, r + f) && n.getOverlapRangeAtIndex(p.rs, p.re, d, d + m)) {
          const v = p.cs < r ? p.cs : r, b = p.ce > r + f ? p.ce : r + f, h = p.rs < d ? p.rs : d, y = p.re > d + m ? p.re : d + m;
          if (p.cs !== v || p.ce !== b || p.rs !== h || p.re !== y) {
            p.cs = v, p.ce = b, p.rs = h, p.re = y, d = -1, c = [], o = [];
            break;
          }
          n.addClass(a, "se-table-selected-cell");
        }
        m > 0 && o.push({
          index: r,
          cs: f + 1,
          rs: m,
          row: -1
        }), x += a.colSpan - 1;
      }
      c = c.concat(o).sort(function(k, N) {
        return k.index - N.index;
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
    for (let n = 0, s = l.length; n < s; n++)
      this.util.removeClass(l[n], "se-table-selected-cell");
    this.util.addClass(e, "se-table-selected-cell"), i._bindOnSelect = i._onCellMultiSelect.bind(this), i._bindOffSelect = i._offCellMultiSelect.bind(this), t ? (i._bindOffShift = (function() {
      this.controllersOn(this.context.table.resizeDiv, this.context.table.tableController, this.plugins.table.init.bind(this), e, "table"), i._ref || this.controllersOff();
    }).bind(this), this._wd.addEventListener("keyup", i._bindOffShift, !1), this._wd.addEventListener("mousedown", i._bindOnSelect, !1)) : this._wd.addEventListener("mousemove", i._bindOnSelect, !1), this._wd.addEventListener("mouseup", i._bindOffSelect, !1), i._initBind = i.init.bind(this), this._wd.addEventListener("touchmove", i._initBind, !1);
  },
  onClick_tableController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") ? e.target : e.target.parentNode;
    if (t.getAttribute("disabled")) return;
    const i = t.getAttribute("data-command"), l = t.getAttribute("data-value"), n = t.getAttribute("data-option"), s = this.plugins.table;
    if (typeof s._closeSplitMenu == "function" && (s._closeSplitMenu(), i === "onsplit") || !i) return;
    e.preventDefault();
    const u = this.context.table;
    switch (i) {
      case "insert":
      case "delete":
        s.editTable.call(this, l, n);
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
        const c = u._element.parentNode;
        this.util.removeItem(u._element), this.controllersOff(), c !== this.context.element.wysiwyg && this.util.removeItemAllParents(c, function(o) {
          return o.childNodes.length === 0;
        }, null), this.focus();
    }
    this.history.push(!1);
  }
}, Gr = {
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
    const n = ["p", "div", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], s = !t.formats || t.formats.length === 0 ? n : t.formats;
    let u = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let c = 0, o = s.length, p, d, g, _, x, k, N; c < o; c++)
      p = s[c], typeof p == "string" && n.indexOf(p) > -1 ? (d = p.toLowerCase(), g = d === "blockquote" ? "range" : d === "pre" ? "free" : "replace", x = /^h/.test(d) ? d.match(/\d+/)[0] : "", _ = i["tag_" + (x ? "h" : d)] + x, N = "", k = "") : (d = p.tag.toLowerCase(), g = p.command, _ = p.name || d, N = p.class, k = N ? ' class="' + N + '"' : ""), u += '<li><button type="button" class="se-btn-list" data-command="' + g + '" data-value="' + d + '" data-class="' + N + '" title="' + _ + '" aria-label="' + _ + '"><' + d + k + ">" + _ + "</" + d + "></button></li>";
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
      const n = this.context.formatBlock._formatList, s = e.nodeName.toLowerCase(), u = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let c = 0, o = n.length, p; c < o; c++)
        if (p = n[c], s === p.getAttribute("data-value") && u === p.getAttribute("data-class")) {
          t = p.title;
          break;
        }
      return this.util.changeTxt(i, t), i.setAttribute("data-value", s), i.setAttribute("data-class", u), !0;
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.formatBlock, t = e._formatList, i = e.targetText, l = (i.getAttribute("data-value") || "") + (i.getAttribute("data-class") || "");
    if (l !== e.currentFormat) {
      for (let n = 0, s = t.length, u; n < s; n++)
        u = t[n], l === u.getAttribute("data-value") + u.getAttribute("data-class") ? this.util.addClass(u, "active") : this.util.removeClass(u, "active");
      e.currentFormat = l;
    }
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null, l = null, n = null, s = "";
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), l = t.getAttribute("data-value"), s = t.getAttribute("data-class"), i) {
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
        let u = this.getRange(), c = this.getSelectedElementsAndComponents(!1);
        if (c.length === 0 && (u = this.getRange_addLine(u, null), c = this.getSelectedElementsAndComponents(!1), c.length === 0))
          return;
        const o = u.startOffset, p = u.endOffset, d = this.util;
        let g = c[0], _ = c[c.length - 1];
        const x = d.getNodePath(u.startContainer, g, null, null), k = d.getNodePath(u.endContainer, _, null, null), N = this.detachList(c, !1);
        N.sc && (g = N.sc), N.ec && (_ = N.ec), this.setRange(d.getNodeFromPath(x, g), o, d.getNodeFromPath(k, _), p);
        const a = this.getSelectedElementsAndComponents(!1);
        if (i === "free") {
          const r = a.length - 1;
          let f = a[r].parentNode, m = n.cloneNode(!1);
          const v = m;
          for (let b = r, h, y, C, w, S, I, E = !0; b >= 0; b--)
            if (h = a[b], h !== (a[b + 1] ? a[b + 1].parentNode : null)) {
              if (I = d.isComponent(h), y = I ? "" : h.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), C = d.getParentElement(h, function(z) {
                return z.parentNode === f;
              }), (f !== h.parentNode || I) && (d.isFormatElement(f) ? (f.parentNode.insertBefore(m, f.nextSibling), f = f.parentNode) : (f.insertBefore(m, C ? C.nextSibling : null), f = h.parentNode), w = m.nextSibling, w && m.nodeName === w.nodeName && d.isSameAttributes(m, w) && (m.innerHTML += "<BR>" + w.innerHTML, d.removeItem(w)), m = n.cloneNode(!1), E = !0), S = m.innerHTML, m.innerHTML = (E || !y || !S || /<br>$/i.test(y) ? y : y + "<BR>") + S, b === 0) {
                f.insertBefore(m, h), w = h.nextSibling, w && m.nodeName === w.nodeName && d.isSameAttributes(m, w) && (m.innerHTML += "<BR>" + w.innerHTML, d.removeItem(w));
                const z = m.previousSibling;
                z && m.nodeName === z.nodeName && d.isSameAttributes(m, z) && (z.innerHTML += "<BR>" + m.innerHTML, d.removeItem(m));
              }
              I || d.removeItem(h), y && (E = !1);
            }
          this.setRange(v, 0, v, 0);
        } else {
          for (let r = 0, f = a.length, m, v; r < f; r++)
            m = a[r], (m.nodeName.toLowerCase() !== l.toLowerCase() || (m.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== s) && !d.isComponent(m) && (v = n.cloneNode(!1), d.copyFormatAttributes(v, m), v.innerHTML = m.innerHTML, m.parentNode.replaceChild(v, m)), r === 0 && (g = v || m), r === f - 1 && (_ = v || m), v = null;
          this.setRange(d.getNodeFromPath(x, g), o, d.getNodeFromPath(k, _), p);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, Yr = {
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
    let s = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let u = 0, c = n.length, o; u < c; u++)
      o = n[u], s += '<li><button type="button" class="se-btn-list" data-value="' + o.value + '" title="' + o.text + '" aria-label="' + o.text + '">' + o.text + "</button></li>";
    return s += "</ul></div>", l.innerHTML = s, l;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.lineHeight, t = e._sizeList, i = this.util.getFormatElement(this.getSelectionNode()), l = i ? i.style.lineHeight + "" : "";
    if (l !== e.currentSize) {
      for (let n = 0, s = t.length; n < s; n++)
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
}, Kr = {
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
    for (let n = 0, s = t.length, u; n < s; n++)
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
}, Xr = {
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
    }, s = !t.paragraphStyles || t.paragraphStyles.length === 0 ? ["spaced", "bordered", "neon"] : t.paragraphStyles;
    let u = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let c = 0, o = s.length, p, d, g, _; c < o; c++) {
      if (p = s[c], typeof p == "string") {
        const x = n[p.toLowerCase()];
        if (!x) continue;
        p = x;
      }
      d = p.name, g = p.class ? ' class="' + p.class + '"' : "", _ = p._class, u += '<li><button type="button" class="se-btn-list' + (_ ? " " + _ : "") + '" data-value="' + p.class + '" title="' + d + '" aria-label="' + d + '"><div' + g + ">" + d + "</div></button></li>";
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
    for (let s = 0, u = l.length; s < u; s++)
      n(l[s], i);
    this.submenuOff(), this.history.push(!1);
  }
}, Jr = {
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
    let s = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let u = 0, c = n.length, o, p, d, g, _, x, k; u < c; u++) {
      if (o = n[u], g = "", x = "", _ = [], typeof o == "string") {
        const N = l[o.toLowerCase()];
        if (!N) continue;
        o = N;
      }
      d = o.name, p = o.tag || "span", k = o._class, o.style && (g += ' style="' + o.style + '"', x += o.style.replace(/:[^;]+(;|$)\s*/g, ","), _.push("style")), o.class && (g += ' class="' + o.class + '"', x += "." + o.class.trim().replace(/\s+/g, ",."), _.push("class")), x = x.replace(/,$/, ""), s += '<li><button type="button" class="se-btn-list' + (k ? " " + k : "") + '" data-command="' + p + '" data-value="' + x + '" title="' + d + '" aria-label="' + d + '"><' + p + g + ">" + d + "</" + p + "></button></li>";
    }
    return s += "</ul></div>", i.innerHTML = s, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.util, i = this.context.textStyle._styleList, l = this.getSelectionNode();
    for (let n = 0, s = i.length, u, c, o; n < s; n++) {
      u = i[n], c = u.getAttribute("data-value").split(",");
      for (let p = 0, d, g; p < c.length; p++) {
        for (d = l, o = !1; d && !e.isFormatElement(d) && !e.isComponent(d); ) {
          if (d.nodeName.toLowerCase() === u.getAttribute("data-command").toLowerCase() && (g = c[p], /^\./.test(g) ? e.hasClass(d, g.replace(/^\./, "")) : d.style[g])) {
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
    const s = l.classList;
    for (let o = 0, p = s.length; o < p; o++)
      n.push("." + s[o]);
    const u = this.util.hasClass(t, "active") ? null : l.cloneNode(!1), c = u ? null : [l.nodeName];
    this.nodeChange(u, n, c, !0), this.submenuOff();
  }
};
var Zi = { exports: {} }, Qr = Zi.exports, Pn;
function eu() {
  return Pn || (Pn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Qr, function(t, i) {
      const l = {
        name: "dialog",
        /**
         * @description Constructor
         * @param {Object} core Core object 
         */
        add: function(n) {
          const s = n.context;
          s.dialog = {
            kind: "",
            updateModal: !1,
            _closeSignal: !1
          };
          let u = n.util.createElement("DIV");
          u.className = "se-dialog sun-editor-common";
          let c = n.util.createElement("DIV");
          c.className = "se-dialog-back", c.style.display = "none";
          let o = n.util.createElement("DIV");
          o.className = "se-dialog-inner", o.style.display = "none", u.appendChild(c), u.appendChild(o), s.dialog.modalArea = u, s.dialog.back = c, s.dialog.modal = o, s.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(n)), s.dialog.modal.addEventListener("click", this._onClick_dialog.bind(n)), s.element.relative.appendChild(u), u = null, c = null, o = null;
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
        open: function(n, s) {
          if (this.modalForm) return !1;
          this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null), this.plugins.dialog._bindClose = (function(c) {
            /27/.test(c.keyCode) && this.plugins.dialog.close.call(this);
          }).bind(this), this._d.addEventListener("keydown", this.plugins.dialog._bindClose), this.context.dialog.updateModal = s, this.options.popupDisplay === "full" ? this.context.dialog.modalArea.style.position = "fixed" : this.context.dialog.modalArea.style.position = "absolute", this.context.dialog.kind = n, this.modalForm = this.context[n].modal;
          const u = this.context[n].focusElement;
          typeof this.plugins[n].on == "function" && this.plugins[n].on.call(this, s), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", u && u.focus();
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
  }(Zi)), Zi.exports;
}
var tu = /* @__PURE__ */ eu();
const si = /* @__PURE__ */ ze(tu), iu = {
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
    for (let s = 0; s < l; s++)
      s === n ? this.util.addClass(i[s], "active") : this.util.removeClass(i[s], "active");
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
}, Mo = {
  name: "anchor",
  add: function(e) {
    e.addModule([iu]), e.context.anchor = {
      caller: {},
      forms: this.setDialogForm(e),
      host: (e._w.location.origin + e._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  /** dialog */
  setDialogForm: function(e) {
    const t = e.lang, i = e.options.linkRel, l = (e.options.linkRelDefault.default || "").split(" "), n = e.icons, s = e.util.createElement("DIV");
    let u = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (e.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + t.dialogBox.linkBox.bookmark + '" aria-label="' + t.dialogBox.linkBox.bookmark + '">' + n.bookmark + "</button>" + e.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + n.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + n.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + t.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (i.length > 0) {
      u += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let c = 0, o = i.length, p; c < o; c++)
        p = i[c], u += '<li><button type="button" class="se-btn-list' + (l.indexOf(p) > -1 ? " se-checked" : "") + '" data-command="' + p + '" title="' + p + '" aria-label="' + p + '"><span class="se-svg">' + n.checked + "</span>" + p + "</button></li>";
      u += "</ul></div></div></div>";
    }
    return u += "</div></div>", s.innerHTML = u, s;
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
      this.util.addClass(i, "active"), l.style.visibility = "hidden", l.style.display = "block", this.options.rtl ? l.style.left = i.offsetLeft - l.offsetWidth - 1 + "px" : l.style.left = i.offsetLeft + i.offsetWidth + 1 + "px", l.style.top = i.offsetTop + i.offsetHeight / 2 - l.offsetHeight / 2 + "px", l.style.visibility = "", this.plugins.anchor._closeRelMenu = (function(n, s, u) {
        u && (n.relButton.contains(u.target) || n.relList.contains(u.target)) || (this.util.removeClass(s, "active"), n.relList.style.display = "none", this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu), this.plugins.anchor._closeRelMenu = null);
      }).bind(this, e, i), this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(e, t) {
    this.plugins.anchor.toggleRelList.call(this, e, !this.util.hasClass(t.target, "active"));
  },
  onClick_relList: function(e, t) {
    const i = t.target, l = i.getAttribute("data-command");
    if (!l) return;
    const n = e.currentRel, s = this.util.toggleClass(i, "se-checked"), u = n.indexOf(l);
    s ? u === -1 && n.push(l) : u > -1 && n.splice(u, 1), e.relPreview.title = e.relPreview.textContent = n.join(" ");
  },
  setRel: function(e, t) {
    const i = e.relList, l = e.currentRel = t ? t.split(" ") : [];
    if (!i) return;
    const n = i.querySelectorAll("button");
    for (let s = 0, u = n.length, c; s < u; s++)
      c = n[s].getAttribute("data-command"), l.indexOf(c) > -1 ? this.util.addClass(n[s], "se-checked") : this.util.removeClass(n[s], "se-checked");
    e.relPreview.title = e.relPreview.textContent = l.join(" ");
  },
  createHeaderList: function(e, t, i) {
    const l = this.util.getListChildren(this.context.element.wysiwyg, function(c) {
      return /h[1-6]/i.test(c.nodeName);
    });
    if (l.length === 0) return;
    const n = new this._w.RegExp("^" + i.replace(/^#/, ""), "i"), s = [];
    let u = "";
    for (let c = 0, o = l.length, p; c < o; c++)
      p = l[c], n.test(p.textContent) && (s.push(p), u += '<li class="se-select-item" data-index="' + c + '">' + p.textContent + "</li>");
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
    const i = e.preview, l = this.options.linkProtocol, n = this.options.linkNoPrefix, s = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(t) || t.indexOf(l) === 0, u = l ? this._w.RegExp("^" + this.util.escapeStringRegexp(t.substr(0, l.length))).test(l) : !1;
    t = e.linkValue = i.textContent = t ? n ? t : l && !s && !u ? l + t : s ? t : /^www\./.test(t) ? "http://" + t : this.context.anchor.host + (/^\//.test(t) ? "" : "/") + t : "", this.plugins.anchor.selfPathBookmark.call(this, t) ? (e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active")) : (e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active")), !this.plugins.anchor.selfPathBookmark.call(this, t) && e.downloadCheck.checked ? e.download.style.display = "block" : e.download.style.display = "none";
  },
  setCtx: function(e, t) {
    e && (t.linkAnchor = e, t.linkValue = e.href, t.currentRel = e.rel.split(" "));
  },
  updateAnchor: function(e, t, i, l, n) {
    !this.plugins.anchor.selfPathBookmark.call(this, t) && l.downloadCheck.checked ? e.setAttribute("download", i || t) : e.removeAttribute("download"), l.newWindowCheck.checked ? e.target = "_blank" : e.removeAttribute("target");
    const s = l.currentRel.join(" ");
    s ? e.rel = s : e.removeAttribute("rel"), e.href = t, n ? e.children.length === 0 && (e.textContent = "") : e.textContent = i;
  },
  createAnchor: function(e, t) {
    if (e.linkValue.length === 0) return null;
    const i = e.linkValue, l = e.anchorText, n = l.value.length === 0 ? i : l.value, s = e.linkAnchor || this.util.createElement("A");
    return this.plugins.anchor.updateAnchor.call(this, s, i, n, e, t), e.linkValue = e.preview.textContent = e.urlInput.value = e.anchorText.value = "", s;
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
    for (let n = 0, s = l.length, u; n < s; n++)
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
}, lu = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([si, Mo]);
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
var qi = { exports: {} }, nu = qi.exports, Un;
function ou() {
  return Un || (Un = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : nu, function(t, i) {
      const l = {
        name: "component",
        /**
         * @description Create a container for the resizing component and insert the element.
         * @param {Element} cover Cover element (FIGURE)
         * @param {String} className Class name of container (fixed: se-component)
         * @returns {Element} Created container element
         */
        set_container: function(n, s) {
          const u = this.util.createElement("DIV");
          return u.className = "se-component " + s, u.appendChild(n), u;
        },
        /**
         * @description Cover the target element with a FIGURE element.
         * @param {Element} element Target element
         */
        set_cover: function(n) {
          const s = this.util.createElement("FIGURE");
          return s.appendChild(n), s;
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
  }(qi)), qi.exports;
}
var au = /* @__PURE__ */ ou();
const Ul = /* @__PURE__ */ ze(au);
var ji = { exports: {} }, su = ji.exports, Wn;
function ru() {
  return Wn || (Wn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : su, function(t, i) {
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
          const s = n.icons, u = n.context;
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
          let c = this.setController_resize(n);
          u.resizing.resizeContainer = c, u.resizing.resizeDiv = c.querySelector(".se-modal-resize"), u.resizing.resizeDot = c.querySelector(".se-resize-dot"), u.resizing.resizeDisplay = c.querySelector(".se-resize-display");
          let o = this.setController_button(n);
          u.resizing.resizeButton = o;
          let p = u.resizing.resizeHandles = u.resizing.resizeDot.querySelectorAll("span");
          u.resizing.resizeButtonGroup = o.querySelector("._se_resizing_btn_group"), u.resizing.rotationButtons = o.querySelectorAll("._se_resizing_btn_group ._se_rotation"), u.resizing.percentageButtons = o.querySelectorAll("._se_resizing_btn_group ._se_percentage"), u.resizing.alignMenu = o.querySelector(".se-resizing-align-list"), u.resizing.alignMenuList = u.resizing.alignMenu.querySelectorAll("button"), u.resizing.alignButton = o.querySelector("._se_resizing_align_button"), u.resizing.autoSizeButton = o.querySelector("._se_resizing_btn_group ._se_auto_size"), u.resizing.captionButton = o.querySelector("._se_resizing_caption_button"), c.addEventListener("mousedown", function(d) {
            d.preventDefault();
          }), p[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), p[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), p[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), p[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), p[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), p[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), p[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), p[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), o.addEventListener("click", this.onClick_resizeButton.bind(n)), u.element.relative.appendChild(c), u.element.relative.appendChild(o), c = null, o = null, p = null;
        },
        /** resize controller, button (image, iframe, video) */
        setController_resize: function(n) {
          const s = n.util.createElement("DIV");
          return s.className = "se-controller se-resizing-container", s.style.display = "none", s.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', s;
        },
        setController_button: function(n) {
          const s = n.lang, u = n.icons, c = n.util.createElement("DIV");
          return c.className = "se-controller se-controller-resizing", c.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.resize100 + '</span></span></button><button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage"><span>75%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.resize75 + '</span></span></button><button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage"><span>50%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.resize50 + '</span></span></button><button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + u.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.autoSize + '</span></span></button><button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + u.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.rotateLeft + '</span></span></button><button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + u.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.rotateRight + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + u.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.mirrorHorizontal + '</span></span></button><button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + u.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.mirrorVertical + '</span></span></button><button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + u.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.toolbar.align + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list"><div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + u.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.basic + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + u.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.left + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + u.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.center + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + u.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.right + '</span></span></button></li></ul></div></div><button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + u.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.caption + '</span></span></button><button type="button" data-command="revert" class="se-btn se-tooltip">' + u.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.revertButton + '</span></span></button><button type="button" data-command="update" class="se-btn se-tooltip">' + u.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.edit + '</span></span></button><button type="button" data-command="delete" class="se-btn se-tooltip">' + u.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.remove + "</span></span></button></div>", c;
        },
        /**
         * @description Gets the width size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeX: function(n, s, u, c) {
          return s || (s = n._element), u || (u = n._cover), c || (c = n._container), s ? /%$/.test(s.style.width) ? (c && this.util.getNumber(c.style.width, 2) || 100) + "%" : s.style.width : "";
        },
        /**
         * @description Gets the height size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeY: function(n, s, u, c) {
          return s || (s = n._element), u || (u = n._cover), c || (c = n._container), !c || !u ? s && s.style.height || "" : this.util.getNumber(u.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? u.style.height : !/%$/.test(s.style.height) || !/%$/.test(s.style.width) ? s.style.height : (c && this.util.getNumber(c.style.height, 2) || 100) + "%";
        },
        /**
         * @description Called at the "openModify" to put the size of the current target into the size input element.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Object} pluginObj Plugin object
         */
        _module_setModifyInputSize: function(n, s) {
          const u = n._onlyPercentage && this.context.resizing._rotateVertical;
          n.proportion.checked = n._proportionChecked = n._element.getAttribute("data-proportion") !== "false";
          let c = u ? "" : this.plugins.resizing._module_getSizeX.call(this, n);
          if (c === n._defaultSizeX && (c = ""), n._onlyPercentage && (c = this.util.getNumber(c, 2)), n.inputX.value = c, s.setInputSize.call(this, "x"), !n._onlyPercentage) {
            let o = u ? "" : this.plugins.resizing._module_getSizeY.call(this, n);
            o === n._defaultSizeY && (o = ""), n._onlyPercentage && (o = this.util.getNumber(o, 2)), n.inputY.value = o;
          }
          n.inputX.disabled = !!u, n.inputY.disabled = !!u, n.proportion.disabled = !!u, s.setRatio.call(this);
        },
        /**
         * @description It is called in "setInputSize" (input tag keyupEvent), 
         * checks the value entered in the input tag, 
         * calculates the ratio, and sets the calculated value in the input tag of the opposite size.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {String} xy 'x': width, 'y': height
         */
        _module_setInputSize: function(n, s) {
          if (n._onlyPercentage) {
            s === "x" && n.inputX.value > 100 && (n.inputX.value = 100);
            return;
          }
          if (n.proportion.checked && n._ratio && /\d/.test(n.inputX.value) && /\d/.test(n.inputY.value)) {
            const u = n.inputX.value.replace(/\d+|\./g, "") || n.sizeUnit, c = n.inputY.value.replace(/\d+|\./g, "") || n.sizeUnit;
            if (u !== c) return;
            const o = u === "%" ? 2 : 0;
            s === "x" ? n.inputY.value = this.util.getNumber(n._ratioY * this.util.getNumber(n.inputX.value, o), o) + c : n.inputX.value = this.util.getNumber(n._ratioX * this.util.getNumber(n.inputY.value, o), o) + u;
          }
        },
        /**
         * @description It is called in "setRatio" (input and proportionCheck tags changeEvent), 
         * checks the value of the input tag, calculates the ratio, and resets it in the input tag.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_setRatio: function(n) {
          const s = n.inputX.value, u = n.inputY.value;
          if (n.proportion.checked && /\d+/.test(s) && /\d+/.test(u)) {
            const c = s.replace(/\d+|\./g, "") || n.sizeUnit, o = u.replace(/\d+|\./g, "") || n.sizeUnit;
            if (c !== o)
              n._ratio = !1;
            else if (!n._ratio) {
              const p = this.util.getNumber(s, 0), d = this.util.getNumber(u, 0);
              n._ratio = !0, n._ratioX = p / d, n._ratioY = d / p;
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
          const s = this.plugins.resizing._module_getSizeX.call(this, n), u = this.plugins.resizing._module_getSizeY.call(this, n);
          n._element.setAttribute("width", s.replace("px", "")), n._element.setAttribute("height", u.replace("px", "")), n._element.setAttribute("data-size", s + "," + u), n._videoRatio && (n._videoRatio = u);
        },
        /**
         * @description Call the resizing module
         * @param {Element} targetElement Resizing target element
         * @param {string} plugin Plugin name
         * @returns {Object} Size of resizing div {w, h, t, l}
         */
        call_controller_resize: function(n, s) {
          const u = this.context.resizing, c = this.context[s];
          u._resize_plugin = s;
          const o = u.resizeContainer, p = u.resizeDiv, d = this.util.getOffset(n, this.context.element.wysiwygFrame), g = u._rotateVertical = /^(90|270)$/.test(Math.abs(n.getAttribute("data-rotate")).toString()), _ = g ? n.offsetHeight : n.offsetWidth, x = g ? n.offsetWidth : n.offsetHeight, k = d.top, N = d.left - this.context.element.wysiwygFrame.scrollLeft;
          o.style.top = k + "px", o.style.left = N + "px", o.style.width = _ + "px", o.style.height = x + "px", p.style.top = "0px", p.style.left = "0px", p.style.width = _ + "px", p.style.height = x + "px";
          let a = n.getAttribute("data-align") || "basic";
          a = a === "none" ? "basic" : a;
          const r = this.util.getParentElement(n, this.util.isComponent), f = this.util.getParentElement(n, "FIGURE"), m = this.plugins.resizing._module_getSizeX.call(this, c, n, f, r) || "auto", v = c._onlyPercentage && s === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, c, n, f, r) || "auto");
          this.util.changeTxt(u.resizeDisplay, this.lang.dialogBox[a] + " (" + m + v + ")"), u.resizeButtonGroup.style.display = c._resizing ? "" : "none";
          const b = c._resizing && !c._resizeDotHide && !c._onlyPercentage ? "flex" : "none", h = u.resizeHandles;
          for (let E = 0, z = h.length; E < z; E++)
            h[E].style.display = b;
          if (c._resizing) {
            const E = u.rotationButtons;
            E[0].style.display = E[1].style.display = c._rotation ? "" : "none";
          }
          if (c._alignHide)
            u.alignButton.style.display = "none";
          else {
            u.alignButton.style.display = "";
            const E = u.alignMenuList;
            this.util.changeElement(u.alignButton.firstElementChild, u.alignIcons[a]);
            for (let z = 0, B = E.length; z < B; z++)
              E[z].getAttribute("data-value") === a ? this.util.addClass(E[z], "on") : this.util.removeClass(E[z], "on");
          }
          const y = u.percentageButtons, C = /%$/.test(n.style.width) && /%$/.test(r.style.width) ? this.util.getNumber(r.style.width, 0) / 100 + "" : "";
          for (let E = 0, z = y.length; E < z; E++)
            y[E].getAttribute("data-value") === C ? this.util.addClass(y[E], "active") : this.util.removeClass(y[E], "active");
          c._captionShow ? (u.captionButton.style.display = "", this.util.getChildElement(n.parentNode, "figcaption") ? (this.util.addClass(u.captionButton, "active"), c._captionChecked = !0) : (this.util.removeClass(u.captionButton, "active"), c._captionChecked = !1)) : u.captionButton.style.display = "none", o.style.display = "block";
          const w = { left: 0, top: 50 };
          this.options.iframe && (w.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, w.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(u.resizeButton, o, "bottom", w);
          const S = function() {
            this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
          };
          this.controllersOn(o, u.resizeButton, S.bind(this), n, s), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), u._resize_w = _, u._resize_h = x;
          const I = (n.getAttribute("origin-size") || "").split(",");
          return u._origin_w = I[0] || n.naturalWidth, u._origin_h = I[1] || n.naturalHeight, {
            w: _,
            h: x,
            t: k,
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
          const s = n.target, u = s.getAttribute("data-command") || s.parentNode.getAttribute("data-command");
          if (!u) return;
          const c = s.getAttribute("data-value") || s.parentNode.getAttribute("data-value"), o = this.context.resizing._resize_plugin, p = this.context[o], d = p._element, g = this.plugins[o];
          if (n.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), u === "onalign"))) {
            switch (u) {
              case "auto":
                this.plugins.resizing.resetTransform.call(this, d), g.setAutoSize.call(this), this.selectComponent(d, o);
                break;
              case "percent":
                let _ = this.plugins.resizing._module_getSizeY.call(this, p);
                if (this.context.resizing._rotateVertical) {
                  const b = d.getAttribute("data-percentage");
                  b && (_ = b.split(",")[1]);
                }
                this.plugins.resizing.resetTransform.call(this, d), g.setPercentSize.call(this, c * 100, this.util.getNumber(_, 0) === null || !/%$/.test(_) ? "" : _), this.selectComponent(d, o);
                break;
              case "mirror":
                const x = d.getAttribute("data-rotate") || "0";
                let k = d.getAttribute("data-rotateX") || "", N = d.getAttribute("data-rotateY") || "";
                c === "h" && !this.context.resizing._rotateVertical || c === "v" && this.context.resizing._rotateVertical ? N = N ? "" : "180" : k = k ? "" : "180", d.setAttribute("data-rotateX", k), d.setAttribute("data-rotateY", N), this.plugins.resizing._setTransForm(d, x, k, N);
                break;
              case "rotate":
                const a = this.context.resizing, r = d.getAttribute("data-rotate") * 1 + c * 1, f = this._w.Math.abs(r) >= 360 ? 0 : r;
                d.setAttribute("data-rotate", f), a._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(f).toString()), this.plugins.resizing.setTransformSize.call(this, d, null, null), this.selectComponent(d, o);
                break;
              case "onalign":
                this.plugins.resizing.openAlignMenu.call(this);
                return;
              case "align":
                const m = c === "basic" ? "none" : c;
                g.setAlign.call(this, m, null, null, null), this.selectComponent(d, o);
                break;
              case "caption":
                const v = !p._captionChecked;
                if (g.openModify.call(this, !0), p._captionChecked = p.captionCheckEl.checked = v, g.update_image.call(this, !1, !1, !1), v) {
                  const b = this.util.getChildElement(p._caption, function(h) {
                    return h.nodeType === 3;
                  });
                  b ? this.setRange(b, 0, b, b.textContent.length) : p._caption.focus(), this.controllersOff();
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
        resetTransform: function(n) {
          const s = (n.getAttribute("data-size") || n.getAttribute("data-origin") || "").split(",");
          this.context.resizing._rotateVertical = !1, n.style.maxWidth = "", n.style.transform = "", n.style.transformOrigin = "", n.setAttribute("data-rotate", ""), n.setAttribute("data-rotateX", ""), n.setAttribute("data-rotateY", ""), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, s[0] ? s[0] : "auto", s[1] ? s[1] : "", !0);
        },
        /**
         * @description Set the transform style (rotation) of the element.
         * @param {Element} element Target element
         * @param {Number|null} width Element's width size
         * @param {Number|null} height Element's height size
         */
        setTransformSize: function(n, s, u) {
          let c = n.getAttribute("data-percentage");
          const o = this.context.resizing._rotateVertical, p = n.getAttribute("data-rotate") * 1;
          let d = "";
          if (c && !o)
            c = c.split(","), c[0] === "auto" && c[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, c[0], c[1]);
          else {
            const g = this.util.getParentElement(n, "FIGURE"), _ = s || n.offsetWidth, x = u || n.offsetHeight, k = (o ? x : _) + "px", N = (o ? _ : x) + "px";
            if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, _ + "px", x + "px", !0), g.style.width = k, g.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : N, o) {
              let a = _ / 2 + "px " + _ / 2 + "px 0", r = x / 2 + "px " + x / 2 + "px 0";
              d = p === 90 || p === -270 ? r : a;
            }
          }
          n.style.transformOrigin = d, this.plugins.resizing._setTransForm(n, p.toString(), n.getAttribute("data-rotateX") || "", n.getAttribute("data-rotateY") || ""), o ? n.style.maxWidth = "none" : n.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, n);
        },
        _setTransForm: function(n, s, u, c) {
          let o = (n.offsetWidth - n.offsetHeight) * (/-/.test(s) ? 1 : -1), p = "";
          if (/[1-9]/.test(s) && (u || c))
            switch (p = u ? "Y" : "X", s) {
              case "90":
                p = u && c ? "X" : c ? p : "";
                break;
              case "270":
                o *= -1, p = u && c ? "Y" : u ? p : "";
                break;
              case "-90":
                p = u && c ? "Y" : u ? p : "";
                break;
              case "-270":
                o *= -1, p = u && c ? "X" : c ? p : "";
                break;
              default:
                p = "";
            }
          s % 180 === 0 && (n.style.maxWidth = ""), n.style.transform = "rotate(" + s + "deg)" + (u ? " rotateX(" + u + "deg)" : "") + (c ? " rotateY(" + c + "deg)" : "") + (p ? " translate" + p + "(" + o + "px)" : "");
        },
        /**
         * @description The position of the caption is set automatically.
         * @param {Element} element Target element (not caption element)
         */
        setCaptionPosition: function(n) {
          const s = this.util.getChildElement(this.util.getParentElement(n, "FIGURE"), "FIGCAPTION");
          s && (s.style.marginTop = (this.context.resizing._rotateVertical ? n.offsetWidth - n.offsetHeight : 0) + "px");
        },
        /**
         * @description Mouse down event of resize handles
         * @param {MouseEvent} e Event object 
         */
        onMouseDown_resize_handle: function(n) {
          n.stopPropagation(), n.preventDefault();
          const s = this.context.resizing, u = s._resize_direction = n.target.classList[0];
          s._resizeClientX = n.clientX, s._resizeClientY = n.clientY, this.context.element.resizeBackground.style.display = "block", s.resizeButton.style.display = "none", s.resizeDiv.style.float = /l/.test(u) ? "right" : /r/.test(u) ? "left" : "none";
          const c = (function(d) {
            if (d.type === "keydown" && d.keyCode !== 27) return;
            const g = s._isChange;
            s._isChange = !1, this.removeDocEvent("mousemove", o), this.removeDocEvent("mouseup", c), this.removeDocEvent("keydown", c), d.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, u), g && this.history.push(!1));
          }).bind(this), o = this.plugins.resizing.resizing_element.bind(this, s, u, this.context[s._resize_plugin]);
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
        resizing_element: function(n, s, u, c) {
          const o = c.clientX, p = c.clientY;
          let d = u._element_w, g = u._element_h;
          const _ = u._element_w + (/r/.test(s) ? o - n._resizeClientX : n._resizeClientX - o), x = u._element_h + (/b/.test(s) ? p - n._resizeClientY : n._resizeClientY - p), k = u._element_h / u._element_w * _;
          /t/.test(s) && (n.resizeDiv.style.top = u._element_h - (/h/.test(s) ? x : k) + "px"), /l/.test(s) && (n.resizeDiv.style.left = u._element_w - _ + "px"), /r|l/.test(s) && (n.resizeDiv.style.width = _ + "px", d = _), /^(t|b)[^h]$/.test(s) ? (n.resizeDiv.style.height = k + "px", g = k) : /^(t|b)h$/.test(s) && (n.resizeDiv.style.height = x + "px", g = x), n._resize_w = d, n._resize_h = g, this.util.changeTxt(n.resizeDisplay, this._w.Math.round(d) + " x " + this._w.Math.round(g)), n._isChange = !0;
        },
        /**
         * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
         * Called at the mouse-up event registered in "onMouseDown_resize_handle".
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
         */
        cancel_controller_resize: function(n) {
          const s = this.context.resizing._rotateVertical;
          this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
          let u = this._w.Math.round(s ? this.context.resizing._resize_h : this.context.resizing._resize_w), c = this._w.Math.round(s ? this.context.resizing._resize_w : this.context.resizing._resize_h);
          if (!s && !/%$/.test(u)) {
            const d = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
            this.util.getNumber(u, 0) > d && (c = this._w.Math.round(c / u * d), u = d);
          }
          const o = this.context.resizing._resize_plugin;
          this.plugins[o].setSize.call(this, u, c, !1, n), s && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, u, c), this.selectComponent(this.context[o]._element, o);
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
  }(ji)), ji.exports;
}
var uu = /* @__PURE__ */ ru();
const Oo = /* @__PURE__ */ ze(uu);
var Gi = { exports: {} }, du = Gi.exports, $n;
function cu() {
  return $n || ($n = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : du, function(t, i) {
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
        upload: function(n, s, u, c, o) {
          this.showLoading();
          const p = this.plugins.fileManager, d = p._xmlHttp = this.util.getXMLHttpRequest();
          if (d.onreadystatechange = p._callBackUpload.bind(this, d, c, o), d.open("post", n, !0), s !== null && typeof s == "object" && this._w.Object.keys(s).length > 0)
            for (let g in s)
              d.setRequestHeader(g, s[g]);
          d.send(u);
        },
        _callBackUpload: function(n, s, u) {
          if (n.readyState === 4)
            if (n.status === 200)
              try {
                s(n);
              } catch (c) {
                throw Error('[SUNEDITOR.fileManager.upload.callBack.fail] cause : "' + c.message + '"');
              } finally {
                this.closeLoading();
              }
            else {
              this.closeLoading();
              const c = n.responseText ? JSON.parse(n.responseText) : n;
              if (typeof u != "function" || u("", c, this)) {
                const o = "[SUNEDITOR.fileManager.upload.serverException] status: " + n.status + ", response: " + (c.errorMessage || n.responseText);
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
        checkInfo: function(n, s, u, c, o) {
          let p = [];
          for (let r = 0, f = s.length; r < f; r++)
            p = p.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(s[r] + ':not([data-se-embed="true"])')));
          const d = this.plugins.fileManager, g = this.context[n], _ = g._infoList, x = d.setInfo.bind(this);
          if (p.length === _.length)
            if (this._componentsInfoReset) {
              for (let r = 0, f = p.length; r < f; r++)
                x(n, p[r], u, null, o);
              return;
            } else {
              let r = !1;
              for (let f = 0, m = _.length, v; f < m; f++)
                if (v = _[f], p.filter(function(b) {
                  return v.src === b.src && v.index.toString() === b.getAttribute("data-index");
                }).length === 0) {
                  r = !0;
                  break;
                }
              if (!r) return;
            }
          const k = o ? this.context.resizing._resize_plugin : "";
          o && (this.context.resizing._resize_plugin = n);
          const N = [], a = [];
          for (let r = 0, f = _.length; r < f; r++)
            a[r] = _[r].index;
          for (g.__updateTags = p; p.length > 0; ) {
            const r = p.shift();
            !this.util.getParentElement(r, this.util.isMediaComponent) || !d._checkMediaComponent(r) ? (N.push(g._infoIndex), c(r)) : !r.getAttribute("data-index") || a.indexOf(r.getAttribute("data-index") * 1) < 0 ? (N.push(g._infoIndex), r.removeAttribute("data-index"), x(n, r, u, null, o)) : N.push(r.getAttribute("data-index") * 1);
          }
          for (let r = 0, f; r < _.length; r++)
            f = _[r].index, !(N.indexOf(f) > -1) && (_.splice(r, 1), typeof u == "function" && u(null, f, "delete", null, 0, this), r--);
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
        setInfo: function(n, s, u, c, o) {
          const p = o ? this.context.resizing._resize_plugin : "";
          o && (this.context.resizing._resize_plugin = n);
          const d = this.plugins[n], g = this.context[n], _ = g._infoList;
          let x = s.getAttribute("data-index"), k = null, N = "";
          if (c || (c = {
            name: s.getAttribute("data-file-name") || (typeof s.src == "string" ? s.src.split("/").pop() : ""),
            size: s.getAttribute("data-file-size") || 0
          }), !x || this._componentsInfoInit)
            N = "create", x = g._infoIndex++, s.setAttribute("data-index", x), s.setAttribute("data-file-name", c.name), s.setAttribute("data-file-size", c.size), k = {
              src: s.src,
              index: x * 1,
              name: c.name,
              size: c.size
            }, _.push(k);
          else {
            N = "update", x *= 1;
            for (let a = 0, r = _.length; a < r; a++)
              if (x === _[a].index) {
                k = _[a];
                break;
              }
            k || (x = g._infoIndex++, k = { index: x }, _.push(k)), k.src = s.src, k.name = s.getAttribute("data-file-name"), k.size = s.getAttribute("data-file-size") * 1;
          }
          if (k.element = s, k.delete = d.destroy.bind(this, s), k.select = (function(a) {
            a.scrollIntoView(!0), this._w.setTimeout(d.select.bind(this, a));
          }).bind(this, s), o) {
            if (!s.getAttribute("origin-size") && s.naturalWidth && s.setAttribute("origin-size", s.naturalWidth + "," + s.naturalHeight), !s.getAttribute("data-origin")) {
              const a = this.util.getParentElement(s, this.util.isMediaComponent), r = this.util.getParentElement(s, "FIGURE"), f = this.plugins.resizing._module_getSizeX.call(this, g, s, r, a), m = this.plugins.resizing._module_getSizeY.call(this, g, s, r, a);
              s.setAttribute("data-origin", f + "," + m), s.setAttribute("data-size", f + "," + m);
            }
            if (!s.style.width) {
              const a = (s.getAttribute("data-size") || s.getAttribute("data-origin") || "").split(",");
              d.onModifyMode.call(this, s, null), d.applySize.call(this, a[0], a[1]);
            }
            this.context.resizing._resize_plugin = p;
          }
          typeof u == "function" && u(s, x, N, k, --g._uploadFileLength < 0 ? 0 : g._uploadFileLength, this);
        },
        /**
         * @description Delete info object at "_infoList"
         * @param {String} pluginName Plugin name 
         * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */
        deleteInfo: function(n, s, u) {
          if (s >= 0) {
            const c = this.context[n]._infoList;
            for (let o = 0, p = c.length; o < p; o++)
              if (s === c[o].index) {
                c.splice(o, 1), typeof u == "function" && u(null, s, "delete", null, 0, this);
                return;
              }
          }
        },
        /**
         * @description Reset info object and "_infoList = []", "_infoIndex = 0"
         * @param {String} pluginName Plugin name 
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */
        resetInfo: function(n, s) {
          const u = this.context[n];
          if (typeof s == "function") {
            const c = u._infoList;
            for (let o = 0, p = c.length; o < p; o++)
              s(null, c[o].index, "delete", null, 0, this);
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
  }(Gi)), Gi.exports;
}
var fu = /* @__PURE__ */ cu();
const Wl = /* @__PURE__ */ ze(fu), hu = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([si, Mo, Ul, Oo, Wl]);
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
    const s = n.querySelector(".__se__gallery");
    s && s.addEventListener("click", this._openGallery.bind(e)), l.proportion = {}, l.inputX = {}, l.inputY = {}, t.imageResizing && (l.proportion = n.querySelector("._se_image_check_proportion"), l.inputX = n.querySelector("._se_image_size_x"), l.inputY = n.querySelector("._se_image_size_y"), l.inputX.value = t.imageWidth, l.inputY.value = t.imageHeight, l.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), l.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), l.inputX.addEventListener("change", this.setRatio.bind(e)), l.inputY.addEventListener("change", this.setRatio.bind(e)), l.proportion.addEventListener("change", this.setRatio.bind(e)), n.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(n), e.plugins.anchor.initEvent.call(e, "image", n.querySelector("._se_tab_content_url")), l.anchorCtx = e.context.anchor.caller.image, n = null;
  },
  /** dialog */
  setDialog: function(e) {
    const t = e.options, i = e.lang, l = e.util.createElement("DIV");
    l.className = "se-dialog-content se-dialog-image", l.style.display = "none";
    let n = '<div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" class="close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.imageBox.title + '</span></div><div class="se-dialog-tabs"><button type="button" class="_se_tab_link active" data-tab-link="image">' + i.toolbar.image + '</button><button type="button" class="_se_tab_link" data-tab-link="url">' + i.toolbar.link + '</button></div><form method="post" enctype="multipart/form-data"><div class="_se_tab_content _se_tab_content_image"><div class="se-dialog-body"><div style="border-bottom: 1px dashed #ccc;">';
    if (t.imageFileInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_image_file" type="file" accept="' + t.imageAccept + '"' + (t.imageMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.imageUrlInput && (n += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url _se_image_url" type="text" />' + (t.imageGalleryUrl && e.plugins.imageGallery ? '<button type="button" class="se-btn se-dialog-files-edge-button __se__gallery" title="' + i.toolbar.imageGallery + '" aria-label="' + i.toolbar.imageGallery + '">' + e.icons.image_gallery + "</button>" : "") + '</div><pre class="se-link-preview"></pre></div>'), n += '</div><div class="se-dialog-form"><label>' + i.dialogBox.imageBox.altText + '</label><input class="se-input-form _se_image_alt" type="text" /></div>', t.imageResizing) {
      const s = t.imageSizeOnlyPercentage, u = s ? ' style="display: none !important;"' : "", c = t.imageHeightShow ? "" : ' style="display: none !important;"';
      n += '<div class="se-dialog-form">', s || !t.imageHeightShow ? n += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.size + "</label></div>" : n += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + i.dialogBox.height + "</label></div>", n += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (s ? ' type="number" min="1"' : 'type="text"') + (s ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + c + ">" + (s ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + u + (s ? ' max="100"' : "") + c + "/><label" + u + c + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + '</label><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
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
    const s = i.parentNode;
    this.util.removeItem(i), this.plugins.image.init.call(this), this.controllersOff(), s !== this.context.element.wysiwyg && this.util.removeItemAllParents(s, function(u) {
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
    let s, u, c;
    for (u = t.getElementsByClassName(n), s = 0; s < u.length; s++)
      u[s].style.display = "none";
    for (c = t.getElementsByClassName("_se_tab_link"), s = 0; s < c.length; s++)
      this.util.removeClass(c[s], "active");
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
    for (let c = 0, o = e.length; c < o; c++)
      /image/i.test(e[c].type) && (i.push(e[c]), t += e[c].size);
    const l = this.options.imageUploadSizeLimit;
    if (l > 0) {
      let c = 0;
      const o = this.context.image._infoList;
      for (let p = 0, d = o.length; p < d; p++)
        c += o[p].size * 1;
      if (t + c > l) {
        this.closeLoading();
        const p = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + l / 1e3 + "KB";
        (typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(p, { limitSize: l, currentSize: c, uploadSize: t }, this)) && this.functions.noticeOpen(p);
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
    const i = this.options.imageUploadUrl, l = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const n = new FormData();
      for (let s = 0; s < l; s++)
        n.append("file-" + s, t[s]);
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
    for (let l = 0, n = i.length, s; l < n; l++)
      if (s = { name: i[l].name, size: i[l].size }, e.isUpdate) {
        this.plugins.image.update_src.call(this, i[l].url, e.element, s);
        break;
      } else
        this.plugins.image.create_image.call(this, i[l].url, e.anchor, e.inputWidth, e.inputHeight, e.align, s, e.alt);
    this.closeLoading();
  },
  setup_reader: function(e, t, i, l, n, s, u, c) {
    try {
      if (u === 0) {
        this.closeLoading(), console.warn("[SUNEDITOR.image.base64.fail] cause : No applicable files");
        return;
      }
      this.context.image.base64RenderIndex = u;
      const o = this._w.FileReader, p = [u];
      this.context.image.inputX.value = i, this.context.image.inputY.value = l;
      for (let d = 0, g, _; d < u; d++)
        g = new o(), _ = e[d], g.onload = (function(x, k, N, a, r) {
          p[r] = { result: x.result, file: a }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, k, p, N, t, i, l, n, s), this.closeLoading());
        }).bind(this, g, c, this.context.image._element, _, d), g.readAsDataURL(_);
    } catch (o) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + o.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, i, l, n, s, u, c) {
    const o = this.plugins.image.update_src, p = this.plugins.image.create_image;
    for (let d = 0, g = t.length; d < g; d++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[d].file.name), this.context.image._element.setAttribute("data-file-size", t[d].file.size), o.call(this, t[d].result, i, t[d].file)) : p.call(this, t[d].result, l, n, s, u, t[d].file, c);
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
  create_image: function(e, t, i, l, n, s, u) {
    const c = this.plugins.image, o = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let p = this.util.createElement("IMG");
    p.src = e, p.alt = u, p.setAttribute("data-rotate", "0"), t = c.onRender_link.call(this, p, t ? t.cloneNode(!1) : null), o._resizing && p.setAttribute("data-proportion", o._proportionChecked);
    const d = this.plugins.component.set_cover.call(this, t), g = this.plugins.component.set_container.call(this, d, "se-image-container");
    o._captionChecked && (o._caption = this.plugins.component.create_caption.call(this), d.appendChild(o._caption)), o._element = p, o._cover = d, o._container = g, c.applySize.call(this, i, l), c.setAlign.call(this, n, p, d, g), p.onload = c._image_create_onload.bind(this, p, o.svgDefaultSize, g), this.insertComponent(g, !0, !0, !this.options.mediaAutoSelect) && this.plugins.fileManager.setInfo.call(this, "image", p, this.functions.onImageUpload, s, !0), this.context.resizing._resize_plugin = "";
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
    let n = l._element, s = l._cover, u = l._container, c = !1;
    s === null && (c = !0, n = l._element.cloneNode(!0), s = this.plugins.component.set_cover.call(this, n)), u === null ? (s = s.cloneNode(!0), n = s.querySelector("img"), c = !0, u = this.plugins.component.set_container.call(this, s, "se-image-container")) : c && (u.innerHTML = "", u.appendChild(s), l._cover = s, l._element = n, c = !1);
    let o;
    const p = this.util.isNumber(l.inputX.value) ? l.inputX.value + l.sizeUnit : l.inputX.value, d = this.util.isNumber(l.inputY.value) ? l.inputY.value + l.sizeUnit : l.inputY.value;
    /%$/.test(n.style.width) ? o = p !== u.style.width || d !== u.style.height : o = p !== n.style.width || d !== n.style.height, n.alt = l._altText;
    let g = !1;
    l._captionChecked ? l._caption || (l._caption = this.plugins.component.create_caption.call(this), s.appendChild(l._caption), g = !0) : l._caption && (this.util.removeItem(l._caption), l._caption = null, g = !0);
    let _ = null;
    const x = this.plugins.anchor.createAnchor.call(this, l.anchorCtx, !0);
    if (x)
      l._linkElement !== x || c && !u.contains(x) ? (l._linkElement = x.cloneNode(!1), s.insertBefore(this.plugins.image.onRender_link.call(this, n, l._linkElement), l._caption), _ = l._element) : l._linkElement.setAttribute("data-image-link", "image");
    else if (l._linkElement !== null) {
      const N = n;
      if (N.setAttribute("data-image-link", ""), s.contains(l._linkElement)) {
        const a = N.cloneNode(!0);
        s.removeChild(l._linkElement), s.insertBefore(a, l._caption), l._element = n = a;
      }
    }
    let k = null;
    if (c) {
      if (k = this.util.isRangeFormatElement(l._element.parentNode) || this.util.isWysiwygDiv(l._element.parentNode) ? l._element : this.util.isAnchor(l._element.parentNode) ? l._element.parentNode : this.util.getFormatElement(l._element) || l._element, this.util.getParentElement(l._element, this.util.isNotCheckingNode))
        k = _ ? x : l._element, k.parentNode.replaceChild(u, k);
      else if (this.util.isListCell(k)) {
        const N = this.util.getParentElement(l._element, function(a) {
          return a.parentNode === k;
        });
        k.insertBefore(u, N), this.util.removeItem(l._element), this.util.removeEmptyNode(N, null, !0);
      } else if (this.util.isFormatElement(k)) {
        const N = this.util.getParentElement(l._element, function(a) {
          return a.parentNode === k;
        });
        k = this.util.splitElement(k, N), k.parentNode.insertBefore(u, k), this.util.removeItem(l._element), this.util.removeEmptyNode(k, null, !0), k.children.length === 0 && (k.innerHTML = this.util.htmlRemoveWhiteSpace(k.innerHTML));
      } else if (this.util.isFormatElement(k.parentNode)) {
        const N = k.parentNode;
        N.parentNode.insertBefore(u, k.previousSibling ? N.nextElementSibling : N), l.__updateTags.map(function(a) {
          return k.contains(a);
        }).length === 0 && this.util.removeItem(k);
      } else
        k = this.util.isFigures(k.parentNode) ? k.parentNode : k, k.parentNode.replaceChild(u, k);
      n = u.querySelector("img"), l._element = n, l._cover = s, l._container = u;
    }
    _ && (c ? (this.util.removeItem(_), this.util.getListChildren(x, function(N) {
      return /IMG/i.test(N.tagName);
    }).length === 0 && this.util.removeItem(x)) : this.util.removeItem(x)), (g || !l._onlyPercentage && o) && !e && (/\d+/.test(n.style.height) || this.context.resizing._rotateVertical && l._captionChecked) && (/%$/.test(l.inputX.value) || /%$/.test(l.inputY.value) ? this.plugins.resizing.resetTransform.call(this, n) : this.plugins.resizing.setTransformSize.call(this, n, this.util.getNumber(l.inputX.value, 0), this.util.getNumber(l.inputY.value, 0))), l._resizing && (n.setAttribute("data-proportion", l._proportionChecked), o && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, n, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", n, this.functions.onImageUpload, null, !0), t && this.selectComponent(n, "image"), i || this.history.push(!1);
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
    let l = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), n, s;
    l ? (l = l.split(","), n = l[0], s = l[1]) : t && (n = t.w, s = t.h), i._origin_w = n || e.style.width || e.width || "", i._origin_h = s || e.style.height || e.height || "";
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
    const n = this.context.image, s = /^(rw|lw)$/.test(l) && /\d+/.test(n._element.style.height);
    /^(th|bh)$/.test(l) && /\d+/.test(n._element.style.width) || (n._element.style.width = this.util.isNumber(e) ? e + n.sizeUnit : e, this.plugins.image.cancelPercentAttr.call(this)), s || (n._element.style.height = this.util.isNumber(t) ? t + n.sizeUnit : /%$/.test(t) ? "" : t), n._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i || n._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, n);
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
}, pu = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([si, Ul, Oo, Wl]);
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
      const s = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], u = t.videoRatio, c = t.videoSizeOnlyPercentage, o = c ? ' style="display: none !important;"' : "", p = t.videoHeightShow ? "" : ' style="display: none !important;"', d = t.videoRatioShow ? "" : ' style="display: none !important;"', g = !c && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      n += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + p + ">" + i.dialogBox.height + '</label><label class="size-h"' + d + ">(" + i.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (c ? ' type="number" min="1"' : 'type="text"') + (c ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + g + ">" + (c ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (c ? ' type="number" min="1"' : 'type="text"') + (c ? ' max="100"' : "") + p + '/><select class="se-input-select se-video-ratio" title="' + i.dialogBox.ratio + '" aria-label="' + i.dialogBox.ratio + '"' + d + ">", p || (n += '<option value=""> - </option>');
      for (let _ = 0, x = s.length; _ < x; _++)
        n += '<option value="' + s[_].value + '"' + (u.toString() === s[_].value.toString() ? " selected" : "") + ">" + s[_].name + "</option>";
      n += '</select><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + o + g + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + "</label></div>";
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
    const s = i.parentNode;
    this.util.removeItem(i), this.plugins.video.init.call(this), this.controllersOff(), s !== this.context.element.wysiwyg && this.util.removeItemAllParents(s, function(u) {
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
    for (let u = 0, c = e.length; u < c; u++)
      /video/i.test(e[u].type) && (i.push(e[u]), t += e[u].size);
    const l = this.options.videoUploadSizeLimit;
    if (l > 0) {
      let u = 0;
      const c = this.context.video._infoList;
      for (let o = 0, p = c.length; o < p; o++)
        u += c[o].size * 1;
      if (t + u > l) {
        this.closeLoading();
        const o = "[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: " + l / 1e3 + "KB";
        (typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(o, { limitSize: l, currentSize: u, uploadSize: t }, this)) && this.functions.noticeOpen(o);
        return;
      }
    }
    const n = this.context.video;
    n._uploadFileLength = i.length;
    const s = {
      inputWidth: n.inputX.value,
      inputHeight: n.inputY.value,
      align: n._align,
      isUpdate: this.context.dialog.updateModal,
      element: n._element
    };
    if (typeof this.functions.onVideoUploadBefore == "function") {
      const u = this.functions.onVideoUploadBefore(i, s, this, (function(c) {
        c && this._w.Array.isArray(c.result) ? this.plugins.video.register.call(this, s, c) : this.plugins.video.upload.call(this, s, c);
      }).bind(this));
      if (typeof u > "u") return;
      if (!u) {
        this.closeLoading();
        return;
      }
      typeof u == "object" && u.length > 0 && (i = u);
    }
    this.plugins.video.upload.call(this, s, i);
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
      for (let s = 0; s < l; s++)
        n.append("file-" + s, t[s]);
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
    for (let n = 0, s = i.length, u; n < s; n++)
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
  create_video: function(e, t, i, l, n, s, u) {
    this.context.resizing._resize_plugin = "video";
    const c = this.context.video;
    let o = null, p = null, d = !1;
    if (u) {
      if (e = c._element, e.src !== t) {
        d = !0;
        const N = /youtu\.?be/.test(t), a = /vimeo\.com/.test(t);
        if ((N || a) && !/^iframe$/i.test(e.nodeName)) {
          const r = this.plugins.video.createIframeTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), c._element = e = r;
        } else if (!N && !a && !/^video$/i.test(e.nodeName)) {
          const r = this.plugins.video.createVideoTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), c._element = e = r;
        } else
          e.src = t;
      }
      p = c._container, o = this.util.getParentElement(e, "FIGURE");
    } else
      d = !0, e.src = t, c._element = e, o = this.plugins.component.set_cover.call(this, e), p = this.plugins.component.set_container.call(this, o, "se-video-container");
    c._cover = o, c._container = p;
    const g = this.plugins.resizing._module_getSizeX.call(this, c) !== (i || c._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, c) !== (l || c._videoRatio), _ = !u || g;
    c._resizing && (this.context.video._proportionChecked = c.proportion.checked, e.setAttribute("data-proportion", c._proportionChecked));
    let x = !1;
    _ && (x = this.plugins.video.applySize.call(this)), x && n === "center" || this.plugins.video.setAlign.call(this, null, e, o, p);
    let k = !0;
    if (u)
      c._resizing && this.context.resizing._rotateVertical && _ && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (k = this.insertComponent(p, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const N = this.appendFormatTag(p, null);
      N && this.setRange(N, 0, N, 0);
    }
    k && (d && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, s, !0), u && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
  },
  _update_videoCover: function(e) {
    if (!e) return;
    const t = this.context.video;
    /^video$/i.test(e.nodeName) ? this.plugins.video._setTagAttrs.call(this, e) : this.plugins.video._setIframeAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const l = e;
    t._element = e = e.cloneNode(!0);
    const n = t._cover = this.plugins.component.set_cover.call(this, e), s = t._container = this.plugins.component.set_container.call(this, n, "se-video-container");
    try {
      const u = i.querySelector("figcaption");
      let c = null;
      u && (c = this.util.createElement("DIV"), c.innerHTML = u.innerHTML, this.util.removeItem(u));
      const o = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, o[0] || l.style.width || l.width || "", o[1] || l.style.height || l.height || "");
      const p = this.util.getFormatElement(l);
      if (p && (t._align = p.style.textAlign || p.style.float), this.plugins.video.setAlign.call(this, null, e, n, s), this.util.getParentElement(l, this.util.isNotCheckingNode))
        l.parentNode.replaceChild(s, l);
      else if (this.util.isListCell(i)) {
        const d = this.util.getParentElement(l, function(g) {
          return g.parentNode === i;
        });
        i.insertBefore(s, d), this.util.removeItem(l), this.util.removeEmptyNode(d, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const d = this.util.getParentElement(l, function(g) {
          return g.parentNode === i;
        });
        i = this.util.splitElement(i, d), i.parentNode.insertBefore(s, i), this.util.removeItem(l), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(s, i);
      c && i.parentNode.insertBefore(c, s.nextElementSibling);
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
    let l = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), n, s;
    l ? (l = l.split(","), n = l[0], s = l[1]) : t && (n = t.w, s = t.h), i._origin_w = n || e.style.width || e.width || "", i._origin_h = s || e.style.height || e.height || "";
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
    for (let n = 0, s = l.length; n < s; n++)
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
    const n = this.context.video, s = /^(rw|lw)$/.test(l), u = /^(th|bh)$/.test(l);
    u || (e = this.util.getNumber(e, 0)), s || (t = this.util.isNumber(t) ? t + n.sizeUnit : t || ""), e = e ? e + n.sizeUnit : "", u || (n._element.style.width = e), s || (n._cover.style.paddingBottom = n._cover.style.height = t), !u && !/%$/.test(e) && (n._cover.style.width = e, n._container.style.width = ""), !s && !/%$/.test(t) ? n._element.style.height = t : n._element.style.height = "", i || n._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, n);
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
}, mu = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([si, Ul, Wl]);
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
    this.util.removeItem(t), this.plugins.audio.init.call(this), this.controllersOff(), n !== this.context.element.wysiwyg && this.util.removeItemAllParents(n, function(s) {
      return s.childNodes.length === 0;
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
    for (let u = 0, c = e.length; u < c; u++)
      /audio/i.test(e[u].type) && (i.push(e[u]), t += e[u].size);
    const l = this.options.audioUploadSizeLimit;
    if (l > 0) {
      let u = 0;
      const c = this.context.audio._infoList;
      for (let o = 0, p = c.length; o < p; o++)
        u += c[o].size * 1;
      if (t + u > l) {
        this.closeLoading();
        const o = "[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: " + l / 1e3 + "KB";
        (typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(o, { limitSize: l, currentSize: u, uploadSize: t }, this)) && this.functions.noticeOpen(o);
        return;
      }
    }
    const n = this.context.audio;
    n._uploadFileLength = i.length;
    const s = {
      isUpdate: this.context.dialog.updateModal,
      element: n._element
    };
    if (typeof this.functions.onAudioUploadBefore == "function") {
      const u = this.functions.onAudioUploadBefore(i, s, this, (function(c) {
        c && this._w.Array.isArray(c.result) ? this.plugins.audio.register.call(this, s, c) : this.plugins.audio.upload.call(this, s, c);
      }).bind(this));
      if (typeof u > "u") return;
      if (!u) {
        this.closeLoading();
        return;
      }
      typeof u == "object" && u.length > 0 && (i = u);
    }
    this.plugins.audio.upload.call(this, s, i);
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
    for (let s = 0; s < l; s++)
      n.append("file-" + s, t[s]);
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
    for (let l = 0, n = i.length, s, u; l < n; l++)
      e.isUpdate ? u = e.element : u = this.plugins.audio._createAudioTag.call(this), s = { name: i[l].name, size: i[l].size }, this.plugins.audio.create_audio.call(this, u, i[l].url, s, e.isUpdate);
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
      const s = this.plugins.component.set_cover.call(this, e), u = this.plugins.component.set_container.call(this, s, "");
      if (!this.insertComponent(u, !1, !0, !this.options.mediaAutoSelect)) {
        this.focus();
        return;
      }
      if (!this.options.mediaAutoSelect) {
        const c = this.appendFormatTag(u, null);
        c && this.setRange(c, 0, c, 0);
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
    const n = this.plugins.component.set_cover.call(this, e), s = this.plugins.component.set_container.call(this, n, "se-audio-container");
    try {
      if (this.util.getParentElement(l, this.util.isNotCheckingNode))
        l.parentNode.replaceChild(s, l);
      else if (this.util.isListCell(i)) {
        const u = this.util.getParentElement(l, function(c) {
          return c.parentNode === i;
        });
        i.insertBefore(s, u), this.util.removeItem(l), this.util.removeEmptyNode(u, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const u = this.util.getParentElement(l, function(c) {
          return c.parentNode === i;
        });
        i = this.util.splitElement(i, u), i.parentNode.insertBefore(s, i), this.util.removeItem(l), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(s, i);
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
}, Zn = "https://katex.org/docs/supported.html", gu = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([si]);
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
    let s = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + Zn + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let u = 0, c = l.length, o; u < c; u++)
      o = l[u], o.default && (n = o.value), s += '<option value="' + o.value + '"' + (o.default ? " selected" : "") + ">" + o.text + "</option>";
    return s += '</select></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.previewLabel + '</label><p class="se-math-preview"></p></div></div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>", e.context.math.defaultFontSize = n, i.innerHTML = s, i;
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
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + Zn + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", i);
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
        const s = this.util.getParentElement(i._mathExp, ".katex");
        s.parentNode.replaceChild(n, s), this.setRange(n, 0, n, 1);
      } else {
        const s = this.getSelectedElements();
        if (s.length > 1) {
          const c = this.util.createElement(s[0].nodeName);
          if (c.appendChild(n), !this.insertNode(c, null, !0)) return !1;
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
var Yi = { exports: {} }, vu = Yi.exports, qn;
function bu() {
  return qn || (qn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : vu, function(t, i) {
      const l = {
        name: "fileBrowser",
        _xmlHttp: null,
        _loading: null,
        /**
         * @description Constructor
         * @param {Object} core Core object 
         */
        add: function(n) {
          const s = n.context;
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
          let u = n.util.createElement("DIV");
          u.className = "se-file-browser sun-editor-common";
          let c = n.util.createElement("DIV");
          c.className = "se-file-browser-back";
          let o = n.util.createElement("DIV");
          o.className = "se-file-browser-inner", o.innerHTML = this.set_browser(n), u.appendChild(c), u.appendChild(o), this._loading = u.querySelector(".se-loading-box"), s.fileBrowser.area = u, s.fileBrowser.header = o.querySelector(".se-file-browser-header"), s.fileBrowser.titleArea = o.querySelector(".se-file-browser-title"), s.fileBrowser.tagArea = o.querySelector(".se-file-browser-tags"), s.fileBrowser.body = o.querySelector(".se-file-browser-body"), s.fileBrowser.list = o.querySelector(".se-file-browser-list"), s.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(n)), s.fileBrowser.list.addEventListener("click", this.onClickFile.bind(n)), o.addEventListener("mousedown", this._onMouseDown_browser.bind(n)), o.addEventListener("click", this._onClick_browser.bind(n)), s.element.relative.appendChild(u), u = null, c = null, o = null;
        },
        set_browser: function(n) {
          const s = n.lang;
          return '<div class="se-file-browser-content"><div class="se-file-browser-header"><button type="button" data-command="close" class="se-btn se-file-browser-close" class="close" title="' + s.dialogBox.close + '" aria-label="' + s.dialogBox.close + '">' + n.icons.cancel + '</button><span class="se-file-browser-title"></span><div class="se-file-browser-tags"></div></div><div class="se-file-browser-body"><div class="se-loading-box sun-editor-common"><div class="se-loading-effect"></div></div><div class="se-file-browser-list"></div></div></div>';
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
        open: function(n, s) {
          this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = (function(p) {
            /27/.test(p.keyCode) && this.plugins.fileBrowser.close.call(this);
          }).bind(this), this._d.addEventListener("keydown", this.plugins.fileBrowser._bindClose);
          const u = this.context.fileBrowser;
          u.contextPlugin = n, u.selectorHandler = s;
          const c = this.context[n], o = c.listClass;
          this.util.hasClass(u.list, o) || (u.list.className = "se-file-browser-list " + o), this.options.popupDisplay === "full" ? u.area.style.position = "fixed" : u.area.style.position = "absolute", u.titleArea.textContent = c.title, u.area.style.display = "block", this.context[n].directData ? this.plugins.fileBrowser._drawListItem.call(this, this.context[n].directData, !0) : this.plugins.fileBrowser._drawFileList.call(this, this.context[n].url, this.context[n].header);
        },
        _bindClose: null,
        /**
         * @description Close a fileBrowser plugin
         * The plugin's "init" method is called.
         */
        close: function() {
          const n = this.plugins.fileBrowser;
          n._xmlHttp && n._xmlHttp.abort(), n._bindClose && (this._d.removeEventListener("keydown", n._bindClose), n._bindClose = null);
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
        _drawFileList: function(n, s) {
          const u = this.plugins.fileBrowser, c = u._xmlHttp = this.util.getXMLHttpRequest();
          if (c.onreadystatechange = u._callBackGet.bind(this, c), c.open("get", n, !0), s !== null && typeof s == "object" && this._w.Object.keys(s).length > 0)
            for (let o in s)
              c.setRequestHeader(o, s[o]);
          c.send(null), this.plugins.fileBrowser.showBrowserLoading();
        },
        _callBackGet: function(n) {
          if (n.readyState === 4) {
            if (this.plugins.fileBrowser._xmlHttp = null, n.status === 200)
              try {
                const s = JSON.parse(n.responseText);
                s.result.length > 0 ? this.plugins.fileBrowser._drawListItem.call(this, s.result, !0) : s.nullMessage && (this.context.fileBrowser.list.innerHTML = s.nullMessage);
              } catch (s) {
                throw Error('[SUNEDITOR.fileBrowser.drawList.fail] cause : "' + s.message + '"');
              } finally {
                this.plugins.fileBrowser.closeBrowserLoading(), this.context.fileBrowser.body.style.maxHeight = this._w.innerHeight - this.context.fileBrowser.header.offsetHeight - 50 + "px";
              }
            else if (this.plugins.fileBrowser.closeBrowserLoading(), n.status !== 0) {
              const s = n.responseText ? JSON.parse(n.responseText) : n, u = "[SUNEDITOR.fileBrowser.get.serverException] status: " + n.status + ", response: " + (s.errorMessage || n.responseText);
              throw Error(u);
            }
          }
        },
        _drawListItem: function(n, s) {
          const u = this.context.fileBrowser, c = this.context[u.contextPlugin], o = [], p = n.length, d = c.columnSize || u.columnSize, g = d <= 1 ? 1 : Math.round(p / d) || 1, _ = c.itemTemplateHandler;
          let x = "", k = '<div class="se-file-item-column">', N = 1;
          for (let a = 0, r, f; a < p; a++)
            if (r = n[a], f = r.tag ? typeof r.tag == "string" ? r.tag.split(",") : r.tag : [], f = r.tag = f.map(function(m) {
              return m.trim();
            }), k += _(r), (a + 1) % g === 0 && N < d && a + 1 < p && (N++, k += '</div><div class="se-file-item-column">'), s && f.length > 0)
              for (let m = 0, v = f.length, b; m < v; m++)
                b = f[m], b && o.indexOf(b) === -1 && (o.push(b), x += '<a title="' + b + '" aria-label="' + b + '">' + b + "</a>");
          k += "</div>", u.list.innerHTML = k, s && (u.items = n, u.tagArea.innerHTML = x, u.tagElements = u.tagArea.querySelectorAll("A"));
        },
        onClickTag: function(n) {
          const s = n.target;
          if (!this.util.isAnchor(s)) return;
          const u = s.textContent, c = this.plugins.fileBrowser, o = this.context.fileBrowser, p = o.tagArea.querySelector('a[title="' + u + '"]'), d = o.selectedTags, g = d.indexOf(u);
          g > -1 ? (d.splice(g, 1), this.util.removeClass(p, "on")) : (d.push(u), this.util.addClass(p, "on")), c._drawListItem.call(
            this,
            d.length === 0 ? o.items : o.items.filter(function(_) {
              return _.tag.some(function(x) {
                return d.indexOf(x) > -1;
              });
            }),
            !1
          );
        },
        onClickFile: function(n) {
          n.preventDefault(), n.stopPropagation();
          const s = this.context.fileBrowser, u = s.list;
          let c = n.target, o = null;
          if (c === u) return;
          for (; u !== c.parentNode && (o = c.getAttribute("data-command"), !o); )
            c = c.parentNode;
          if (!o) return;
          (s.selectorHandler || this.context[s.contextPlugin].selectorHandler)(c, c.parentNode.querySelector(".__se__img_name").textContent), this.plugins.fileBrowser.close.call(this);
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
  }(Yi)), Yi.exports;
}
var yu = /* @__PURE__ */ bu();
const _u = /* @__PURE__ */ ze(yu), wu = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([_u]);
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
}, Cu = { blockquote: Hr, align: Vr, font: Pr, fontSize: Ur, fontColor: Wr, hiliteColor: $r, horizontalRule: Zr, list: qr, table: jr, formatBlock: Gr, lineHeight: Yr, template: Kr, paragraphStyle: Xr, textStyle: Jr, link: lu, image: hu, video: pu, audio: mu, math: gu, imageGallery: wu }, ku = {
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
}, jn = {
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
}, ue = {
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
      return ue.camelToKebabCase(t);
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
      return ue.camelToKebabCase(t);
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
    const l = [], n = t === "js" ? "script" : "link", s = t === "js" ? "src" : "href";
    let u = "(?:";
    for (let p = 0, d = e.length; p < d; p++)
      u += e[p] + (p < d - 1 ? "|" : ")");
    const c = new this._w.RegExp("(^|.*[\\/])" + u + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), o = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
    for (let p = this._d.getElementsByTagName(n), d = 0; d < p.length; d++)
      o.test(p[d][s]) && l.push(p[d]);
    for (let p = 0; p < l.length; p++) {
      let d = l[p][s].match(c);
      if (d) {
        i = d[0];
        break;
      }
    }
    if (i === "" && (i = l.length > 0 ? l[0][s] : ""), i.indexOf(":/") === -1 && i.slice(0, 2) !== "//" && (i = i.indexOf("/") === 0 ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + i : location.href.match(/^[^\?]*\/(?:)/)[0] + i), !i) throw "[SUNEDITOR.util.getIncludePath.fail] The SUNEDITOR installation path could not be automatically detected. (name: +" + name + ", extension: " + t + ")";
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
    for (let l = 0, n = i.length, s; l < n; l++) {
      try {
        s = i[l].cssRules;
      } catch {
        continue;
      }
      if (s)
        for (let u = 0, c = s.length; u < c; u++)
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
    const i = e.attributes;
    let l = "";
    for (let n = 0, s = i.length; n < s; n++)
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
      for (let s = 0, u = n.length; s < u; s++)
        e.style[n[s]] = n[n[s]];
    }
    const l = t.attributes;
    for (let n = 0, s = l.length, u; n < s; n++)
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
    for (let n = 0, s = e.length, u; n < s; n++)
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
    return this.getParentElement(e, (function(s) {
      if (s === t && (n = !1), n && !this.isWysiwygDiv(s)) {
        if (i && s.nodeType === 3) {
          let u = null, c = null;
          i.s = i.e = 0;
          let o = s.previousSibling;
          for (; o && o.nodeType === 3; )
            c = o.textContent.replace(this.zeroWidthRegExp, ""), i.s += c.length, s.textContent = c + s.textContent, u = o, o = o.previousSibling, this.removeItem(u);
          let p = s.nextSibling;
          for (; p && p.nodeType === 3; )
            c = p.textContent.replace(this.zeroWidthRegExp, ""), i.e += c.length, s.textContent += c, u = p, p = p.nextSibling, this.removeItem(u);
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
    let i = t, l;
    for (let n = 0, s = e.length; n < s && (l = i.childNodes, l.length !== 0); n++)
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
    for (let p = 0, d = i.length; p < d; p++)
      i[i[p]] === l[i[p]] && n++;
    const s = e.classList, u = t.classList, c = this._w.RegExp;
    let o = 0;
    for (let p = 0, d = s.length; p < d; p++)
      c("(s|^)" + s[p] + "(s|$)").test(u.value) && o++;
    return n === l.length && n === i.length && o === u.length && o === s.length;
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
        for (let s = 0, u = n.children.length; s < u; s++)
          l(n.children[s]);
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
      for (let s = 0, u = n.childNodes.length; s < u; s++)
        l(n.childNodes[s]);
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
    const n = i.parentNode.childNodes, s = this.getArrayIndex(n, i), u = this.getArrayIndex(n, l);
    return {
      ancestor: i.parentNode,
      a: i,
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
    let i;
    if (typeof t == "function")
      i = t;
    else {
      let l;
      /^\./.test(t) ? (l = "className", t = t.split(".")[1]) : /^#/.test(t) ? (l = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (l = "name", t = "^" + t.split(":")[1] + "$") : (l = "nodeName", t = "^" + t + "$");
      const n = new this._w.RegExp(t, "i");
      i = function(s) {
        return n.test(s[l]);
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
      let s;
      /^\./.test(t) ? (s = "className", t = t.split(".")[1]) : /^#/.test(t) ? (s = "id", t = "^" + t.split("#")[1] + "$") : /^:/.test(t) ? (s = "name", t = "^" + t.split(":")[1] + "$") : (s = "nodeName", t = "^" + (t === "text" ? "#" + t : t) + "$");
      const u = new this._w.RegExp(t, "i");
      l = function(c) {
        return u.test(c[s]);
      };
    }
    const n = this.getListChildNodes(e, function(s) {
      return l(s);
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
    const s = this.getParentElement(e, this.isWysiwygDiv.bind(this));
    for (; n && !this.hasClass(n, "se-container") && n !== s; )
      i += n.offsetLeft, l += n.offsetTop, n = n.offsetParent;
    const u = t && /iframe/i.test(t.nodeName);
    return {
      left: i + (u ? t.parentElement.offsetLeft : 0),
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
      let s = t[l];
      (i || !this.isImportantDisabled(s)) && (s.disabled = e), i && (e ? s.setAttribute("data-important-disabled", "") : s.removeAttribute("data-important-disabled"));
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
      const s = n.textContent.trim();
      return s.length === 0 || /^(\n|\u200B)+$/.test(s);
    }).bind(this)), function n(s) {
      if (!ue.isWysiwygDiv(s)) {
        const u = s.parentNode;
        u && t(s) && (l = {
          sc: s.previousElementSibling,
          ec: s.nextElementSibling
        }, ue.removeItem(s), n(u));
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
    let s;
    if (t)
      s = this.getListChildren(l, (function(u) {
        return this.isListCell(u) && !u.previousElementSibling;
      }).bind(this));
    else {
      const u = this.getElementDepth(e) + 2;
      s = this.getListChildren(e, (function(c) {
        return this.isListCell(c) && !c.previousElementSibling && this.getElementDepth(c) === u;
      }).bind(this));
    }
    for (let u = 0, c = s.length; u < c; u++)
      this._deleteNestedList(s[u]);
    return i && (i.parentNode.insertBefore(l, i.nextSibling), n && n.length === 0 && this.removeItem(i)), l === e ? l.parentNode : l;
  },
  /**
   * @description Sub function of util.detachNestedList method.
   * @private
   */
  _deleteNestedList: function(e) {
    const t = e.parentNode;
    let i = t, l = i.parentNode, n, s, u, c, o;
    for (; this.isListCell(l); ) {
      for (c = this.getPositionIndex(e), n = l.nextElementSibling, s = l.parentNode, u = i; u; ) {
        if (i = i.nextSibling, this.isList(u)) {
          for (o = u.childNodes; o[c]; )
            s.insertBefore(o[c], n);
          o.length === 0 && this.removeItem(u);
        } else
          s.appendChild(u);
        u = i;
      }
      i = s, l = s.parentNode;
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
  splitElement: function(e, t, i) {
    if (this.isWysiwygDiv(e)) return e;
    if (t && !this.isNumber(t)) {
      const _ = e.childNodes;
      let x = this.getPositionIndex(t);
      const k = e.cloneNode(!1), N = e.cloneNode(!1);
      for (let a = 0, r = _.length; a < r; a++) {
        if (a < x) k.appendChild(_[a]);
        else if (a > x) N.appendChild(_[a]);
        else continue;
        a--, r--, x--;
      }
      return k.childNodes.length > 0 && e.parentNode.insertBefore(k, e), N.childNodes.length > 0 && e.parentNode.insertBefore(N, e.nextElementSibling), e;
    }
    const l = e.parentNode;
    let n = 0, s = 1, u = !0, c, o, p;
    if ((!i || i < 0) && (i = 0), e.nodeType === 3) {
      if (n = this.getPositionIndex(e), t >= 0 && e.length !== t) {
        e.splitText(t);
        const _ = this.getNodeFromPath([n + 1], l);
        this.onlyZeroWidthSpace(_) && (_.data = this.zeroWidthSpace);
      }
    } else if (e.nodeType === 1) {
      if (t === 0) {
        for (; e.firstChild; )
          e = e.firstChild;
        if (e.nodeType === 3) {
          const _ = this.createTextNode(this.zeroWidthSpace);
          e.parentNode.insertBefore(_, e), e = _;
        }
      }
      e.previousSibling ? e = e.previousSibling : this.getElementDepth(e) === i && (u = !1);
    }
    e.nodeType === 1 && (s = 0);
    let d = e;
    for (; this.getElementDepth(d) > i; )
      for (n = this.getPositionIndex(d) + s, d = d.parentNode, p = c, c = d.cloneNode(!1), o = d.childNodes, p && (this.isListCell(c) && this.isList(p) && p.firstElementChild ? (c.innerHTML = p.firstElementChild.innerHTML, ue.removeItem(p.firstElementChild), p.children.length > 0 && c.appendChild(p)) : c.appendChild(p)); o[n]; )
        c.appendChild(o[n]);
    d.childNodes.length <= 1 && (!d.firstChild || d.firstChild.textContent.length === 0) && (d.innerHTML = "<br>");
    const g = d.parentNode;
    return u && (d = d.nextSibling), c ? (this.mergeSameTags(c, null, !1), this.mergeNestedTags(c, (function(_) {
      return this.isList(_);
    }).bind(this)), c.childNodes.length > 0 ? g.insertBefore(c, d) : c = d, this.isListCell(c) && c.children && this.isList(c.children[0]) && c.insertBefore(this.createElement("BR"), c.children[0]), l.childNodes.length === 0 && this.removeItem(l), c) : d;
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
    let s = null;
    return n && (s = this._w.Array.apply(null, new this._w.Array(n)).map(this._w.Number.prototype.valueOf, 0)), function u(c, o, p) {
      const d = c.childNodes;
      for (let g = 0, _ = d.length, x, k; g < _ && (x = d[g], k = d[g + 1], !!x); g++)
        if (!(l.isBreak(x) || l.isMedia(x) || l.isInputElement(x))) {
          if (i && l._isIgnoreNodeChange(x) || !i && (l.isTable(x) || l.isListCell(x) || l.isFormatElement(x) && !l.isFreeFormatElement(x))) {
            (l.isTable(x) || l.isListCell(x)) && u(x, o + 1, g);
            continue;
          }
          if (_ === 1 && c.nodeName === x.nodeName && c.parentNode) {
            if (n) {
              let N, a, r, f, m;
              for (let v = 0; v < n; v++)
                if (N = t[v], N && N[o] === g) {
                  for (a = x, r = c, f = o, m = !0; f >= 0; ) {
                    if (l.getArrayIndex(r.childNodes, a) !== N[f]) {
                      m = !1;
                      break;
                    }
                    a = x.parentNode, r = a.parentNode, f--;
                  }
                  m && (N.splice(o, 1), N[o] = g);
                }
            }
            l.copyTagAttributes(x, c), c.parentNode.insertBefore(x, c), l.removeItem(c);
          }
          if (!k) {
            x.nodeType === 1 && u(x, o + 1, g);
            break;
          }
          if (x.nodeName === k.nodeName && l.isSameAttributes(x, k) && x.href === k.href) {
            const N = x.childNodes;
            let a = 0;
            for (let v = 0, b = N.length; v < b; v++)
              N[v].textContent.length > 0 && a++;
            const r = x.lastChild, f = k.firstChild;
            let m = 0;
            if (r && f) {
              const v = r.nodeType === 3 && f.nodeType === 3;
              m = r.textContent.length;
              let b = r.previousSibling;
              for (; b && b.nodeType === 3; )
                m += b.textContent.length, b = b.previousSibling;
              if (a > 0 && r.nodeType === 3 && f.nodeType === 3 && (r.textContent.length > 0 || f.textContent.length > 0) && a--, n) {
                let h = null;
                for (let y = 0; y < n; y++)
                  if (h = t[y], h && h[o] > g) {
                    if (o > 0 && h[o - 1] !== p) continue;
                    h[o] -= 1, h[o + 1] >= 0 && h[o] === g && (h[o + 1] += a, v && r && r.nodeType === 3 && f && f.nodeType === 3 && (s[y] += m));
                  }
              }
            }
            if (x.nodeType === 3) {
              if (m = x.textContent.length, x.textContent += k.textContent, n) {
                let v = null;
                for (let b = 0; b < n; b++)
                  if (v = t[b], v && v[o] > g) {
                    if (o > 0 && v[o - 1] !== p) continue;
                    v[o] -= 1, v[o + 1] >= 0 && v[o] === g && (v[o + 1] += a, s[b] += m);
                  }
              }
            } else
              x.innerHTML += k.innerHTML;
            l.removeItem(k), g--;
          } else x.nodeType === 1 && u(x, o + 1, g);
        }
    }(e, 0, 0), s;
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
        const s = n[0];
        for (n = s.children; n[0]; )
          l.appendChild(n[0]);
        l.removeChild(s);
      }
      for (let s = 0, u = l.children.length; s < u; s++)
        i(l.children[s]);
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
    })), function n(s) {
      if (l._notTextNode(s) || s === t || l.isNonEditable(s)) return 0;
      if (s !== e && l.onlyZeroWidthSpace(s.textContent) && (!s.firstChild || !l.isBreak(s.firstChild)) && !s.querySelector(l._allowedEmptyNodeList)) {
        if (s.parentNode)
          return s.parentNode.removeChild(s), -1;
      } else {
        const u = s.children;
        for (let c = 0, o = u.length, p = 0; c < o; c++)
          !u[c + p] || l.isComponent(u[c + p]) || (p += n(u[c + p]));
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
    e.sort((function(n, s) {
      return !this.isListCell(n) || !this.isListCell(s) ? 0 : (n = this.getElementDepth(n), s = this.getElementDepth(s), n > s ? i : n < s ? l : 0);
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
    const s = [], u = [], c = [], o = [], p = this.getListChildNodes(e, (function(g) {
      if (g.nodeType !== 1)
        return this.isList(g.parentElement) && s.push(g), !1;
      if (i.test(g.nodeName) || !t.test(g.nodeName) && g.childNodes.length === 0 && this.isNotCheckingNode(g))
        return s.push(g), !1;
      const _ = !this.getParentElement(g, this.isNotCheckingNode);
      if (!this.isTable(g) && !this.isListCell(g) && !this.isAnchor(g) && (this.isFormatElement(g) || this.isRangeFormatElement(g) || this.isTextStyleElement(g)) && g.childNodes.length === 0 && _)
        return u.push(g), !1;
      if (this.isList(g.parentNode) && !this.isList(g) && !this.isListCell(g))
        return c.push(g), !1;
      if (this.isCell(g)) {
        const k = g.firstElementChild;
        if (!this.isFormatElement(k) && !this.isRangeFormatElement(k) && !this.isComponent(k))
          return o.push(g), !1;
      }
      if (_ && g.className) {
        const k = new this._w.Array(g.classList).map(l).join(" ").trim();
        k ? g.className = k : g.removeAttribute("class");
      }
      return n && g.parentNode !== e && _ && (this.isListCell(g) && !this.isList(g.parentNode) || (this.isFormatElement(g) || this.isComponent(g)) && !this.isRangeFormatElement(g.parentNode) && !this.getParentElement(g, this.isComponent));
    }).bind(this));
    for (let g = 0, _ = s.length; g < _; g++)
      this.removeItem(s[g]);
    const d = [];
    for (let g = 0, _ = p.length, x, k; g < _; g++)
      if (x = p[g], k = x.parentNode, !(!k || !k.parentNode))
        if (this.getParentElement(x, this.isListCell)) {
          const N = x.childNodes;
          for (let a = N.length - 1; _ >= 0; a--)
            k.insertBefore(x, N[a]);
          d.push(x);
        } else
          k.parentNode.insertBefore(x, k), d.push(k);
    for (let g = 0, _ = d.length, x; g < _; g++)
      x = d[g], this.onlyZeroWidthSpace(x.textContent.trim()) && this.removeItem(x);
    for (let g = 0, _ = u.length; g < _; g++)
      this.removeItem(u[g]);
    for (let g = 0, _ = c.length, x, k, N, a; g < _; g++)
      if (x = c[g], a = x.parentNode, !!a)
        if (k = this.createElement("LI"), this.isFormatElement(x)) {
          for (N = x.childNodes; N[0]; )
            k.appendChild(N[0]);
          a.insertBefore(k, x), this.removeItem(x);
        } else
          x = x.nextSibling, k.appendChild(c[g]), a.insertBefore(k, x);
    for (let g = 0, _ = o.length, x, k; g < _; g++)
      x = o[g], k = this.createElement("DIV"), k.innerHTML = x.textContent.trim().length === 0 && x.children.length === 0 ? "<br>" : x.innerHTML, x.innerHTML = k.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let i = "";
    e.height && (i += "height:" + e.height + ";"), e.minHeight && (i += "min-height:" + e.minHeight + ";"), e.maxHeight && (i += "max-height:" + e.maxHeight + ";"), e.position && (i += "position:" + e.position + ";"), e.width && (i += "width:" + e.width + ";"), e.minWidth && (i += "min-width:" + e.minWidth + ";"), e.maxWidth && (i += "max-width:" + e.maxWidth + ";");
    let l = "", n = "", s = "";
    t = i + t;
    const u = t.split(";");
    for (let c = 0, o = u.length, p; c < o; c++)
      if (p = u[c].trim(), !!p) {
        if (/^(min-|max-)?width\s*:/.test(p) || /^(z-index|position)\s*:/.test(p)) {
          l += p + ";";
          continue;
        }
        if (/^(min-|max-)?height\s*:/.test(p)) {
          /^height/.test(p) && p.split(":")[1].trim() === "auto" && (e.height = "auto"), n += p + ";";
          continue;
        }
        s += p + ";";
      }
    return {
      top: l,
      frame: n,
      editor: s
    };
  },
  _setIframeDocument: function(e, t) {
    e.setAttribute("scrolling", "auto"), e.contentDocument.head.innerHTML = '<meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">' + this._setIframeCssTags(t), e.contentDocument.body.className = t._editableClass, e.contentDocument.body.setAttribute("contenteditable", !0), e.contentDocument.body.setAttribute("autocorrect", "off");
  },
  _setIframeCssTags: function(e) {
    const t = e.iframeCSSFileName, i = this._w.RegExp;
    let l = "";
    for (let n = 0, s = t.length, u; n < s; n++) {
      if (u = [], /(^https?:\/\/)|(^data:text\/css,)/.test(t[n]))
        u.push(t[n]);
      else {
        const c = new i("(^|.*[\\/])" + t[n] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let o = document.getElementsByTagName("link"), p = 0, d = o.length, g; p < d; p++)
          g = o[p].href.match(c), g && u.push(g[0]);
      }
      if (!u || u.length === 0) throw '[SUNEDITOR.constructor.iframe.fail] The suneditor CSS files installation path could not be automatically detected. Please set the option property "iframeCSSFileName" before creating editor instances.';
      for (let c = 0, o = u.length; c < o; c++)
        l += '<link href="' + u[c] + '" rel="stylesheet">';
    }
    return l + (e.height === "auto" ? `<style>
/** Iframe height auto */
body{height: min-content; overflow: hidden;}
</style>` : "");
  }
}, Bl = {
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
    const s = this._createToolBar(i, t.buttonList, t.plugins, t), u = s.element.cloneNode(!1);
    u.className += " se-toolbar-shadow", s.element.style.visibility = "hidden", s.pluginCallButtons.math && this._checkKatexMath(t.katex);
    const c = i.createElement("DIV");
    c.className = "se-arrow";
    const o = i.createElement("DIV");
    o.className = "se-toolbar-sticky-dummy";
    const p = i.createElement("DIV");
    p.className = "se-wrapper";
    const d = this._initElements(t, l, s.element, c), g = d.bottomBar, _ = d.wysiwygFrame, x = d.placeholder;
    let k = d.codeView;
    const N = g.resizingBar, a = g.navigation, r = g.charWrapper, f = g.charCounter, m = i.createElement("DIV");
    m.className = "se-loading-box sun-editor-common", m.innerHTML = '<div class="se-loading-effect"></div>';
    const v = i.createElement("DIV");
    v.className = "se-line-breaker", v.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
    const b = i.createElement("DIV");
    b.className += "se-line-breaker-component";
    const h = b.cloneNode(!0);
    b.innerHTML = h.innerHTML = t.icons.line_break;
    const y = i.createElement("DIV");
    y.className = "se-resizing-back";
    const C = i.createElement("INPUT");
    C.tabIndex = -1, C.style.cssText = "position: fixed !important; top: -10000px !important; display: block !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;";
    const w = t.toolbarContainer;
    w && (w.appendChild(s.element), w.appendChild(u));
    const S = t.resizingBarContainer;
    return N && S && S.appendChild(N), p.appendChild(k), x && p.appendChild(x), w || (n.appendChild(s.element), n.appendChild(u)), n.appendChild(o), n.appendChild(p), n.appendChild(y), n.appendChild(m), n.appendChild(v), n.appendChild(b), n.appendChild(h), n.appendChild(C), N && !S && n.appendChild(N), l.appendChild(n), k = this._checkCodeMirror(t, k), {
      constructed: {
        _top: l,
        _relative: n,
        _toolBar: s.element,
        _toolbarShadow: u,
        _menuTray: s._menuTray,
        _editorArea: p,
        _wysiwygArea: _,
        _codeArea: k,
        _placeholder: x,
        _resizingBar: N,
        _navigation: a,
        _charWrapper: r,
        _charCounter: f,
        _loading: m,
        _lineBreaker: v,
        _lineBreaker_t: b,
        _lineBreaker_b: h,
        _resizeBack: y,
        _stickyDummy: o,
        _arrow: c,
        _focusTemp: C
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
      const i = [{
        mode: "htmlmixed",
        htmlMode: !0,
        lineNumbers: !0,
        lineWrapping: !0
      }, e.codeMirror.options || {}].reduce(function(n, s) {
        for (let u in s)
          ue.hasOwn(s, u) && (n[u] = s[u]);
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
        ue.hasOwn(l, n) && (i[n] = l[n]);
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
    const l = t.element, n = l.relative, s = l.editorArea, u = e.toolbarContainer && e.toolbarContainer !== i.toolbarContainer, c = e.lang !== i.lang || e.buttonList !== i.buttonList || e.mode !== i.mode || u, o = this._createToolBar(document, c ? e.buttonList : i.buttonList, e.plugins, e);
    o.pluginCallButtons.math && this._checkKatexMath(e.katex);
    const p = document.createElement("DIV");
    p.className = "se-arrow", c && (o.element.style.visibility = "hidden", u ? (e.toolbarContainer.appendChild(o.element), l.toolbar.parentElement.removeChild(l.toolbar)) : l.toolbar.parentElement.replaceChild(o.element, l.toolbar), l.toolbar = o.element, l._menuTray = o._menuTray, l._arrow = p);
    const d = this._initElements(e, l.topArea, c ? o.element : l.toolbar, p), g = d.bottomBar, _ = d.wysiwygFrame, x = d.placeholder;
    let k = d.codeView;
    return l.resizingBar && ue.removeItem(l.resizingBar), g.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== i.resizingBarContainer ? e.resizingBarContainer.appendChild(g.resizingBar) : n.appendChild(g.resizingBar)), s.innerHTML = "", s.appendChild(k), x && s.appendChild(x), k = this._checkCodeMirror(e, k), l.resizingBar = g.resizingBar, l.navigation = g.navigation, l.charWrapper = g.charWrapper, l.charCounter = g.charCounter, l.wysiwygFrame = _, l.code = k, l.placeholder = x, e.rtl ? ue.addClass(l.topArea, "se-rtl") : ue.removeClass(l.topArea, "se-rtl"), {
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
      for (let g in e.iframeAttributes)
        n.setAttribute(g, e.iframeAttributes[g]);
      n.className += " " + e._editableClass, n.style.cssText = e._editorStyles.frame + e._editorStyles.editor, n.className += e.className;
    }
    const s = document.createElement("TEXTAREA");
    s.className = "se-wrapper-inner se-wrapper-code" + e.className, s.style.cssText = e._editorStyles.frame, s.style.display = "none", e.height === "auto" && (s.style.overflow = "hidden");
    let u = null, c = null, o = null, p = null;
    if (e.resizingBar && (u = document.createElement("DIV"), u.className = "se-resizing-bar sun-editor-common", c = document.createElement("DIV"), c.className = "se-navigation sun-editor-common", u.appendChild(c), e.charCounter)) {
      if (o = document.createElement("DIV"), o.className = "se-char-counter-wrapper", e.charCounterLabel) {
        const g = document.createElement("SPAN");
        g.className = "se-char-label", g.textContent = e.charCounterLabel, o.appendChild(g);
      }
      if (p = document.createElement("SPAN"), p.className = "se-char-counter", p.textContent = "0", o.appendChild(p), e.maxCharCount > 0) {
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
        charCounter: p
      },
      wysiwygFrame: n,
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
    const i = {};
    if (t.plugins) {
      const s = t.plugins, u = s.length ? s : Object.keys(s).map(function(c) {
        return s[c];
      });
      for (let c = 0, o = u.length, p; c < o; c++)
        p = u[c].default || u[c], i[p.name] = p;
    }
    t.plugins = i, t.strictMode = t.strictMode !== !1, t.strictHTMLValidation = t.strictHTMLValidation !== !1, t.lang = t.lang || fl, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new ue._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
    const l = t.textTags = [{ bold: "STRONG", underline: "U", italic: "EM", strike: "DEL", sub: "SUB", sup: "SUP" }, t.textTags || {}].reduce(function(s, u) {
      for (let c in u)
        s[c] = u[c];
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
    const n = "br|p|div|pre|blockquote|h1|h2|h3|h4|h5|h6|ol|ul|li|hr|figure|figcaption|img|iframe|audio|video|source|table|thead|tbody|tr|th|td|a|b|strong|var|i|em|u|ins|s|span|strike|del|sub|sup|code|svg|path|details|summary";
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : n) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? ue.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? ue.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? ue.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
      { text: "1", value: "1em" },
      { text: "1.5", value: "1.5em" },
      { text: "2", value: "2em" },
      { text: "2.5", value: "2.5em" }
    ], t.position = typeof t.position == "string" ? t.position : null, t.display = t.display || (e.style.display === "none" || !e.style.display ? "block" : e.style.display), t.popupDisplay = t.popupDisplay || "full", t.resizingBar = t.resizingBar === void 0 ? !/inline|balloon/i.test(t.mode) : t.resizingBar, t.showPathLabel = t.resizingBar ? typeof t.showPathLabel == "boolean" ? t.showPathLabel : !0 : !1, t.resizeEnable = t.resizeEnable === void 0 ? !0 : !!t.resizeEnable, t.resizingBarContainer = typeof t.resizingBarContainer == "string" ? document.querySelector(t.resizingBarContainer) : t.resizingBarContainer, t.charCounter = t.maxCharCount > 0 ? !0 : typeof t.charCounter == "boolean" ? t.charCounter : !1, t.charCounterType = typeof t.charCounterType == "string" ? t.charCounterType : "char", t.charCounterLabel = typeof t.charCounterLabel == "string" ? t.charCounterLabel.trim() : null, t.maxCharCount = ue.isNumber(t.maxCharCount) && t.maxCharCount > -1 ? t.maxCharCount * 1 : null, t.width = t.width ? ue.isNumber(t.width) ? t.width + "px" : t.width : e.clientWidth ? e.clientWidth + "px" : "100%", t.minWidth = (ue.isNumber(t.minWidth) ? t.minWidth + "px" : t.minWidth) || "", t.maxWidth = (ue.isNumber(t.maxWidth) ? t.maxWidth + "px" : t.maxWidth) || "", t.height = t.height ? ue.isNumber(t.height) ? t.height + "px" : t.height : e.clientHeight ? e.clientHeight + "px" : "auto", t.minHeight = (ue.isNumber(t.minHeight) ? t.minHeight + "px" : t.minHeight) || "", t.maxHeight = (ue.isNumber(t.maxHeight) ? t.maxHeight + "px" : t.maxHeight) || "", t.className = typeof t.className == "string" && t.className.length > 0 ? " " + t.className : "", t.defaultStyle = typeof t.defaultStyle == "string" ? t.defaultStyle : "", t.font = t.font ? t.font : ["Arial", "Comic Sans MS", "Courier New", "Impact", "Georgia", "tahoma", "Trebuchet MS", "Verdana"], t.fontSize = t.fontSize ? t.fontSize : null, t.formats = t.formats ? t.formats : null, t.colorList = t.colorList ? t.colorList : null, t.lineHeights = t.lineHeights ? t.lineHeights : null, t.paragraphStyles = t.paragraphStyles ? t.paragraphStyles : null, t.textStyles = t.textStyles ? t.textStyles : null, t.fontSizeUnit = typeof t.fontSizeUnit == "string" && t.fontSizeUnit.trim().toLowerCase() || "px", t.alignItems = typeof t.alignItems == "object" ? t.alignItems : t.rtl ? ["right", "center", "left", "justify"] : ["left", "center", "right", "justify"], t.imageResizing = t.imageResizing === void 0 ? !0 : t.imageResizing, t.imageHeightShow = t.imageHeightShow === void 0 ? !0 : !!t.imageHeightShow, t.imageAlignShow = t.imageAlignShow === void 0 ? !0 : !!t.imageAlignShow, t.imageWidth = t.imageWidth ? ue.isNumber(t.imageWidth) ? t.imageWidth + "px" : t.imageWidth : "auto", t.imageHeight = t.imageHeight ? ue.isNumber(t.imageHeight) ? t.imageHeight + "px" : t.imageHeight : "auto", t.imageSizeOnlyPercentage = !!t.imageSizeOnlyPercentage, t._imageSizeUnit = t.imageSizeOnlyPercentage ? "%" : "px", t.imageRotation = t.imageRotation !== void 0 ? t.imageRotation : !(t.imageSizeOnlyPercentage || !t.imageHeightShow), t.imageFileInput = t.imageFileInput === void 0 ? !0 : t.imageFileInput, t.imageUrlInput = t.imageUrlInput === void 0 || !t.imageFileInput ? !0 : t.imageUrlInput, t.imageUploadHeader = t.imageUploadHeader || null, t.imageUploadUrl = typeof t.imageUploadUrl == "string" ? t.imageUploadUrl : null, t.imageUploadSizeLimit = /\d+/.test(t.imageUploadSizeLimit) ? ue.getNumber(t.imageUploadSizeLimit, 0) : null, t.imageMultipleFile = !!t.imageMultipleFile, t.imageAccept = typeof t.imageAccept != "string" || t.imageAccept.trim() === "*" ? "image/*" : t.imageAccept.trim() || "image/*", t.imageGalleryData = t.imageGalleryData || null, t.imageGalleryUrl = typeof t.imageGalleryUrl == "string" ? t.imageGalleryUrl : null, t.imageGalleryHeader = t.imageGalleryHeader || null, t.videoResizing = t.videoResizing === void 0 ? !0 : t.videoResizing, t.videoHeightShow = t.videoHeightShow === void 0 ? !0 : !!t.videoHeightShow, t.videoAlignShow = t.videoAlignShow === void 0 ? !0 : !!t.videoAlignShow, t.videoRatioShow = t.videoRatioShow === void 0 ? !0 : !!t.videoRatioShow, t.videoWidth = !t.videoWidth || !ue.getNumber(t.videoWidth, 0) ? "" : ue.isNumber(t.videoWidth) ? t.videoWidth + "px" : t.videoWidth, t.videoHeight = !t.videoHeight || !ue.getNumber(t.videoHeight, 0) ? "" : ue.isNumber(t.videoHeight) ? t.videoHeight + "px" : t.videoHeight, t.videoSizeOnlyPercentage = !!t.videoSizeOnlyPercentage, t._videoSizeUnit = t.videoSizeOnlyPercentage ? "%" : "px", t.videoRotation = t.videoRotation !== void 0 ? t.videoRotation : !(t.videoSizeOnlyPercentage || !t.videoHeightShow), t.videoRatio = ue.getNumber(t.videoRatio, 4) || 0.5625, t.videoRatioList = t.videoRatioList ? t.videoRatioList : null, t.youtubeQuery = (t.youtubeQuery || "").replace("?", ""), t.vimeoQuery = (t.vimeoQuery || "").replace("?", ""), t.videoFileInput = !!t.videoFileInput, t.videoUrlInput = t.videoUrlInput === void 0 || !t.videoFileInput ? !0 : t.videoUrlInput, t.videoUploadHeader = t.videoUploadHeader || null, t.videoUploadUrl = typeof t.videoUploadUrl == "string" ? t.videoUploadUrl : null, t.videoUploadSizeLimit = /\d+/.test(t.videoUploadSizeLimit) ? ue.getNumber(t.videoUploadSizeLimit, 0) : null, t.videoMultipleFile = !!t.videoMultipleFile, t.videoTagAttrs = t.videoTagAttrs || null, t.videoIframeAttrs = t.videoIframeAttrs || null, t.videoAccept = typeof t.videoAccept != "string" || t.videoAccept.trim() === "*" ? "video/*" : t.videoAccept.trim() || "video/*", t.audioWidth = t.audioWidth ? ue.isNumber(t.audioWidth) ? t.audioWidth + "px" : t.audioWidth : "", t.audioHeight = t.audioHeight ? ue.isNumber(t.audioHeight) ? t.audioHeight + "px" : t.audioHeight : "", t.audioFileInput = !!t.audioFileInput, t.audioUrlInput = t.audioUrlInput === void 0 || !t.audioFileInput ? !0 : t.audioUrlInput, t.audioUploadHeader = t.audioUploadHeader || null, t.audioUploadUrl = typeof t.audioUploadUrl == "string" ? t.audioUploadUrl : null, t.audioUploadSizeLimit = /\d+/.test(t.audioUploadSizeLimit) ? ue.getNumber(t.audioUploadSizeLimit, 0) : null, t.audioMultipleFile = !!t.audioMultipleFile, t.audioTagAttrs = t.audioTagAttrs || null, t.audioAccept = typeof t.audioAccept != "string" || t.audioAccept.trim() === "*" ? "audio/*" : t.audioAccept.trim() || "audio/*", t.tableCellControllerPosition = typeof t.tableCellControllerPosition == "string" ? t.tableCellControllerPosition.toLowerCase() : "cell", t.linkTargetNewWindow = !!t.linkTargetNewWindow, t.linkProtocol = typeof t.linkProtocol == "string" ? t.linkProtocol : null, t.linkRel = Array.isArray(t.linkRel) ? t.linkRel : [], t.linkRelDefault = t.linkRelDefault || {}, t.tabDisable = !!t.tabDisable, t.shortcutsDisable = Array.isArray(t.shortcutsDisable) ? t.shortcutsDisable : [], t.shortcutsHint = t.shortcutsHint === void 0 ? !0 : !!t.shortcutsHint, t.callBackSave = t.callBackSave ? t.callBackSave : null, t.templates = t.templates ? t.templates : null, t.placeholder = typeof t.placeholder == "string" ? t.placeholder : null, t.mediaAutoSelect = t.mediaAutoSelect === void 0 ? !0 : !!t.mediaAutoSelect, t.buttonList = t.buttonList ? t.buttonList : [
      ["undo", "redo"],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"]
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? jn : [jn, t.icons].reduce(function(s, u) {
      for (let c in u)
        ue.hasOwn(u, c) && (s[c] = u[c]);
      return s;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(s, u) {
      for (let c in u)
        ue.hasOwn(u, c) && (s[c] = u[c]);
      return s;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = ue._setDefaultOptionStyle(t, t.defaultStyle);
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
    const t = e.icons, i = e.lang, l = ue.isOSX_IOS ? "⌘" : "CTRL", n = ue.isOSX_IOS ? "⇧" : "+SHIFT", s = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], u = e.rtl ? ["[", "]"] : ["]", "["], c = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
    return {
      /** default command */
      bold: ["", i.toolbar.bold + '<span class="se-shortcut">' + (s.indexOf("bold") > -1 ? "" : l + '+<span class="se-shortcut-key">B</span>') + "</span>", "bold", "", t.bold],
      underline: ["", i.toolbar.underline + '<span class="se-shortcut">' + (s.indexOf("underline") > -1 ? "" : l + '+<span class="se-shortcut-key">U</span>') + "</span>", "underline", "", t.underline],
      italic: ["", i.toolbar.italic + '<span class="se-shortcut">' + (s.indexOf("italic") > -1 ? "" : l + '+<span class="se-shortcut-key">I</span>') + "</span>", "italic", "", t.italic],
      strike: ["", i.toolbar.strike + '<span class="se-shortcut">' + (s.indexOf("strike") > -1 ? "" : l + n + '+<span class="se-shortcut-key">S</span>') + "</span>", "strike", "", t.strike],
      subscript: ["", i.toolbar.subscript, "SUB", "", t.subscript],
      superscript: ["", i.toolbar.superscript, "SUP", "", t.superscript],
      removeFormat: ["", i.toolbar.removeFormat, "removeFormat", "", t.erase],
      indent: ["", i.toolbar.indent + '<span class="se-shortcut">' + (s.indexOf("indent") > -1 ? "" : l + '+<span class="se-shortcut-key">' + u[0] + "</span>") + "</span>", "indent", "", c[0]],
      outdent: ["", i.toolbar.outdent + '<span class="se-shortcut">' + (s.indexOf("indent") > -1 ? "" : l + '+<span class="se-shortcut-key">' + u[1] + "</span>") + "</span>", "outdent", "", c[1]],
      fullScreen: ["se-code-view-enabled se-resizing-enabled", i.toolbar.fullScreen, "fullScreen", "", t.expansion],
      showBlocks: ["", i.toolbar.showBlocks, "showBlocks", "", t.show_blocks],
      codeView: ["se-code-view-enabled se-resizing-enabled", i.toolbar.codeView, "codeView", "", t.code_view],
      undo: ["", i.toolbar.undo + '<span class="se-shortcut">' + (s.indexOf("undo") > -1 ? "" : l + '+<span class="se-shortcut-key">Z</span>') + "</span>", "undo", "", t.undo],
      redo: ["", i.toolbar.redo + '<span class="se-shortcut">' + (s.indexOf("undo") > -1 ? "" : l + '+<span class="se-shortcut-key">Y</span> / ' + l + n + '+<span class="se-shortcut-key">Z</span>') + "</span>", "redo", "", t.redo],
      preview: ["se-resizing-enabled", i.toolbar.preview, "preview", "", t.preview],
      print: ["se-resizing-enabled", i.toolbar.print, "print", "", t.print],
      dir: ["", i.toolbar[e.rtl ? "dir_ltr" : "dir_rtl"], "dir", "", t[e.rtl ? "dir_ltr" : "dir_rtl"]],
      dir_ltr: ["", i.toolbar.dir_ltr, "dir_ltr", "", t.dir_ltr],
      dir_rtl: ["", i.toolbar.dir_rtl, "dir_rtl", "", t.dir_rtl],
      save: ["se-resizing-enabled", i.toolbar.save + '<span class="se-shortcut">' + (s.indexOf("save") > -1 ? "" : l + '+<span class="se-shortcut-key">S</span>') + "</span>", "save", "", t.save],
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
    const e = ue.createElement("DIV");
    e.className = "se-btn-module se-btn-module-border";
    const t = ue.createElement("UL");
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
  _createButton: function(e, t, i, l, n, s, u) {
    const c = ue.createElement("LI"), o = ue.createElement("BUTTON"), p = t || i;
    return o.setAttribute("type", "button"), o.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), o.setAttribute("data-command", i), o.setAttribute("data-display", l), o.setAttribute("aria-label", p.replace(/<span .+<\/span>/, "")), o.setAttribute("tabindex", "-1"), n || (n = '<span class="se-icon-text">!</span>'), /^default\./i.test(n) && (n = u[n.replace(/^default\./i, "")]), /^text\./i.test(n) && (n = n.replace(/^text\./i, ""), o.className += " se-btn-more-text"), n += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + p + "</span></span>", s && o.setAttribute("disabled", !0), o.innerHTML = n, c.appendChild(o), {
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
  _createToolBar: function(e, t, i, l) {
    const n = e.createElement("DIV");
    n.className = "se-toolbar-separator-vertical";
    const s = e.createElement("DIV");
    s.className = "se-toolbar sun-editor-common";
    const u = e.createElement("DIV");
    u.className = "se-btn-tray", s.appendChild(u), t = JSON.parse(JSON.stringify(t));
    const c = l.icons, o = this._defaultButtons(l), p = {}, d = [];
    let g = null, _ = null, x = null, k = null, N = "", a = !1;
    const r = ue.createElement("DIV");
    r.className = "se-toolbar-more-layer";
    e:
      for (let v = 0, b, h, y, C, w; v < t.length; v++)
        if (b = !1, w = "", C = t[v], x = this._createModuleGroup(), typeof C == "object") {
          for (let S = 0, I; S < C.length; S++) {
            if (_ = C[S], I = !1, /^\%\d+/.test(_) && S === 0) {
              C[0] = _.replace(/[^\d]/g, ""), d.push(C), t.splice(v--, 1);
              continue e;
            }
            if (typeof _ == "object")
              typeof _.add == "function" ? (N = _.name, g = o[N], i[N] = _) : (N = _.name, g = [_.buttonClass, _.title, _.name, _.dataDisplay, _.innerHTML, _._disabled]);
            else {
              if (/^\-/.test(_)) {
                w = _.substr(1), x.div.className += " module-float-" + w;
                continue;
              }
              if (/^\#/.test(_)) {
                _.substr(1) === "fix" && (x.ul.className += " se-menu-dir-fix");
                continue;
              }
              if (/^\:/.test(_)) {
                I = !0;
                const E = _.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                y = "__se__" + E[1].trim();
                const z = E[2].trim(), B = E[3].trim();
                g = ["se-btn-more", z, y, "MORE", B];
              } else
                g = o[_];
              if (N = _, !g) {
                const E = i[N];
                if (!E) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + N + "]");
                g = [E.buttonClass, E.title, E.name, E.display, E.innerHTML, E._disabled];
              }
            }
            k = this._createButton(g[0], g[1], g[2], g[3], g[4], g[5], c), (b ? h : x.ul).appendChild(k.li), i[N] && (p[N] = k.button), I && (b = !0, h = ue.createElement("DIV"), h.className = "se-more-layer " + y, h.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (w ? ' style="float: ' + w + ';"' : "") + "></ul></div>", r.appendChild(h), h = h.firstElementChild.firstElementChild);
          }
          if (a) {
            const S = n.cloneNode(!1);
            u.appendChild(S);
          }
          u.appendChild(x.div), a = !0;
        } else if (/^\/$/.test(C)) {
          const S = e.createElement("DIV");
          S.className = "se-btn-module-enter", u.appendChild(S), a = !1;
        }
    switch (u.children.length) {
      case 0:
        u.style.display = "none";
        break;
      case 1:
        ue.removeClass(u.firstElementChild, "se-btn-module-border");
        break;
      default:
        if (l.rtl) {
          const v = n.cloneNode(!1);
          v.style.float = u.lastElementChild.style.float, u.appendChild(v);
        }
    }
    d.length > 0 && d.unshift(t), r.children.length > 0 && u.appendChild(r);
    const f = e.createElement("DIV");
    f.className = "se-menu-tray", s.appendChild(f);
    const m = e.createElement("DIV");
    return m.className = "se-toolbar-cover", s.appendChild(m), l.hideToolbar && (s.style.display = "none"), {
      element: s,
      plugins: i,
      pluginCallButtons: p,
      responsiveButtons: d,
      _menuTray: f,
      _buttonTray: u
    };
  }
}, Al = function(e, t, i) {
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
function xu(e, t) {
  const i = e._w, l = e.util, n = e.options.historyStackDelayTime;
  let s = e.context.element, u = e.context.tool.undo, c = e.context.tool.redo, o = null, p = 0, d = [];
  function g() {
    const x = d[p];
    s.wysiwyg.innerHTML = x.contents, e.setRange(l.getNodeFromPath(x.s.path, s.wysiwyg), x.s.offset, l.getNodeFromPath(x.e.path, s.wysiwyg), x.e.offset), e.focus(), d.length <= 1 ? (u && u.setAttribute("disabled", !0), c && c.setAttribute("disabled", !0)) : p === 0 ? (u && u.setAttribute("disabled", !0), c && c.removeAttribute("disabled")) : p === d.length - 1 ? (u && u.removeAttribute("disabled"), c && c.setAttribute("disabled", !0)) : (u && u.removeAttribute("disabled"), c && c.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function _() {
    e._checkComponents();
    const x = s.wysiwyg.innerHTML;
    if (!x || d[p] && x === d[p].contents) return;
    p++;
    const k = e._variable._range;
    d.length > p && (d = d.slice(0, p), c && c.setAttribute("disabled", !0)), k ? d[p] = {
      contents: x,
      s: {
        path: l.getNodePath(k.startContainer, null, null),
        offset: k.startOffset
      },
      e: {
        path: l.getNodePath(k.endContainer, null, null),
        offset: k.endOffset
      }
    } : d[p] = {
      contents: x,
      s: { path: [0, 0], offset: [0, 0] },
      e: { path: 0, offset: 0 }
    }, p === 1 && u && u.removeAttribute("disabled"), e._setCharCount(), t();
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
    push: function(x) {
      i.setTimeout(e._resourcesStateChange.bind(e));
      const k = typeof x == "number" ? x > 0 ? x : 0 : x ? n : 0;
      if ((!k || o) && (i.clearTimeout(o), !k)) {
        _();
        return;
      }
      o = i.setTimeout(function() {
        i.clearTimeout(o), o = null, _();
      }, k);
    },
    /**
     * @description Undo function
     */
    undo: function() {
      p > 0 && (p--, g());
    },
    /**
     * @description Redo function
     */
    redo: function() {
      d.length - 1 > p && (p++, g());
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(x) {
      p = x < 0 ? d.length - 1 : x, g();
    },
    /**
     * @description Get the current history stack index.
     * @returns {Number} Current Stack index
     */
    getCurrentIndex: function() {
      return p;
    },
    /**
     * @description Reset the history object
     */
    reset: function(x) {
      u && u.setAttribute("disabled", !0), c && c.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0), d.splice(0), p = 0, d[p] = {
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
      s = e.context.element, u = e.context.tool.undo, c = e.context.tool.redo, p === 0 ? (u && u.setAttribute("disabled", !0), c && p === d.length - 1 && c.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : p === d.length - 1 && c && c.setAttribute("disabled", !0);
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
const Gn = {
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
function Su(e, t, i, l, n, s) {
  const u = e.element.originElement.ownerDocument || document, c = u.defaultView || window, o = ue, p = n.icons, d = {
    _d: u,
    _w: c,
    _parser: new c.DOMParser(),
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
    notice: Gn,
    /**
     * @description Default icons object
     */
    icons: p,
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
      div: new c.RegExp("\\s*[^-a-zA-Z](.+)\\s*:[^;]+(?!;)*", "ig"),
      span: new c.RegExp("\\s*[^-a-zA-Z](font-family|font-size|color|background-color)\\s*:[^;]+(?!;)*", "ig"),
      format: new c.RegExp("\\s*[^-a-zA-Z](text-align|margin-left|margin-right|width|height|line-height)\\s*:[^;]+(?!;)*", "ig"),
      fontSizeUnit: new c.RegExp("\\d+" + n.fontSizeUnit + "$", "i")
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
      for (let r = 0, f, m; r < a.length; r++)
        f = a[r], m = f.getAttribute("data-command"), this.allCommandButtons[m] = f;
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const a = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let r = 0, f, m, v; r < a.length; r++)
          f = a[r], m = f.getAttribute("data-command"), v = this.allCommandButtons[m], v && (f.parentElement.replaceChild(v, f), this.context.tool[m] && (this.context.tool[m] = v));
      }
    },
    /**
     * @description If the plugin is not added, add the plugin and call the 'add' function.
     * If the plugin is added call callBack function.
     * @param {String} pluginName The name of the plugin to call
     * @param {function} callBackFunction Function to be executed immediately after module call
     * @param {Element|null} _target Plugin target button (This is not necessary if you have a button list when creating the editor)
     */
    callPlugin: function(a, r, f) {
      if (f = f || t[a], this.plugins[a])
        this.initPlugins[a] ? typeof this._targetPlugins[a] == "object" && f && this.initMenuTarget(a, f, this._targetPlugins[a]) : (this.plugins[a].add(this, f), this.initPlugins[a] = !0);
      else throw Error('[SUNEDITOR.core.callPlugin.fail] The called plugin does not exist or is in an invalid format. (pluginName:"' + a + '")');
      this.plugins[a].active && !this.commandMap[a] && f && (this.commandMap[a] = f, this.activePlugins.push(a)), typeof r == "function" && r();
    },
    /**
     * @description If the module is not added, add the module and call the 'add' function
     * @param {Array} moduleArray module object's Array [dialog, resizing]
     */
    addModule: function(a) {
      for (let r = 0, f = a.length, m; r < f; r++)
        m = a[r].name, this.plugins[m] || (this.plugins[m] = a[r]), this.initPlugins[m] || (this.initPlugins[m] = !0, typeof this.plugins[m].add == "function" && this.plugins[m].add(this));
    },
    /**
     * @description Gets the current editor-relative scroll offset.
     * @returns {Object} {top, left}
     */
    getGlobalScrollOffset: function() {
      let a = 0, r = 0, f = e.element.topArea;
      for (; f; )
        a += f.scrollTop, r += f.scrollLeft, f = f.parentElement;
      for (f = this._shadowRoot ? this._shadowRoot.host : null; f; )
        a += f.scrollTop, r += f.scrollLeft, f = f.parentElement;
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
    initMenuTarget: function(a, r, f) {
      r ? (e.element._menuTray.appendChild(f), this._targetPlugins[a] = !0, this._menuTray[r.getAttribute("data-command")] = f) : this._targetPlugins[a] = f;
    },
    /**
     * @description Enable submenu
     * @param {Element} element Submenu's button element to call
     */
    submenuOn: function(a) {
      this._bindedSubmenuOff && this._bindedSubmenuOff(), this._bindControllersOff && this.controllersOff();
      const r = this._submenuName = a.getAttribute("data-command"), f = this.submenu = this._menuTray[r];
      this.submenuActiveButton = a, this._setMenuPosition(a, f), this._bindedSubmenuOff = this.submenuOff.bind(this), this.addDocEvent("mousedown", this._bindedSubmenuOff, !1), this.plugins[r].on && this.plugins[r].on.call(this), this._antiBlur = !0;
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
      const r = this._containerName = a.getAttribute("data-command"), f = this.container = this._menuTray[r];
      this.containerActiveButton = a, this._setMenuPosition(a, f), this._bindedContainerOff = this.containerOff.bind(this), this.addDocEvent("mousedown", this._bindedContainerOff, !1), this.plugins[r].on && this.plugins[r].on.call(this), this._antiBlur = !0;
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
      const f = this.context.element.toolbar, m = f.offsetWidth, v = g._getEditorOffsets(e.element.toolbar), b = r.offsetWidth, h = a.parentElement.offsetLeft + 3;
      if (n.rtl) {
        const B = a.offsetWidth, P = b > B ? b - B : 0, U = P > 0 ? 0 : B - b;
        r.style.left = h - P + U + "px", v.left > g._getEditorOffsets(r).left && (r.style.left = "0px");
      } else {
        const B = m <= b ? 0 : m - (h + b);
        B < 0 ? r.style.left = h + B + "px" : r.style.left = h + "px";
      }
      let y = 0, C = a;
      for (; C && C !== f; )
        y += C.offsetTop, C = C.offsetParent;
      const w = y;
      this._isBalloon ? y += f.offsetTop + a.offsetHeight : y -= a.offsetHeight;
      const S = v.top, I = r.offsetHeight, E = this.getGlobalScrollOffset().top, z = c.innerHeight - (S - E + w + a.parentElement.offsetHeight);
      if (z < I) {
        let B = -1 * (I - w + 3);
        const P = S - E + B, U = I + (P < 0 ? P : 0);
        U > z ? (r.style.height = U + "px", B = -1 * (U - w + 3)) : (r.style.height = z + "px", B = w + a.parentElement.offsetHeight), r.style.top = B + "px";
      } else
        r.style.top = w + a.parentElement.offsetHeight + "px";
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
          r.style && (r.style.display = "block", this._shadowRoot && this._shadowRootControllerEventTarget.indexOf(r) === -1 && (r.addEventListener("mousedown", function(f) {
            f.preventDefault(), f.stopPropagation();
          }), this._shadowRootControllerEventTarget.push(r))), this.controllerArray.push(r);
        }
      this._bindControllersOff = this.controllersOff.bind(this), this.addDocEvent("mousedown", this._bindControllersOff, !1), this.addDocEvent("keydown", this._bindControllersOff, !1), this._antiBlur = !0, typeof _.showController == "function" && _.showController(this.currentControllerName, this.controllerArray, this);
    },
    /**
     * @description Hide controller at editor area (link button, image resize button..)
     * @param {KeyboardEvent|MouseEvent|null} e Event object when called from mousedown and keydown events registered in "core.controllersOn"
     */
    controllersOff: function(a) {
      this._lineBreaker.style.display = "none";
      const r = this.controllerArray.length;
      if (a && a.target && r > 0) {
        for (let f = 0; f < r; f++)
          if (typeof this.controllerArray[f].contains == "function" && this.controllerArray[f].contains(a.target)) return;
      }
      if (!(this._fileManager.pluginRegExp.test(this.currentControllerName) && a && a.type === "keydown" && a.keyCode !== 27) && (e.element.lineBreaker_t.style.display = e.element.lineBreaker_b.style.display = "none", this._variable._lineBreakComp = null, this.currentControllerName = "", this.currentControllerTarget = null, this.currentFileComponentInfo = null, this.effectNode = null, !!this._bindControllersOff)) {
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
    setControllerPosition: function(a, r, f, m) {
      n.rtl && (m.left *= -1);
      const v = o.getOffset(r, e.element.wysiwygFrame);
      a.style.visibility = "hidden", a.style.display = "block";
      const b = f === "top" ? -(a.offsetHeight + 2) : r.offsetHeight + 12;
      a.style.top = v.top + b + m.top + "px";
      const h = v.left - e.element.wysiwygFrame.scrollLeft + m.left, y = a.offsetWidth, C = r.offsetWidth, w = o.hasClass(a.firstElementChild, "se-arrow") ? a.firstElementChild : null;
      if (n.rtl) {
        const S = y > C ? y - C : 0, I = S > 0 ? 0 : C - y;
        a.style.left = h - S + I + "px", S > 0 && w && (w.style.left = (y - 14 < 10 + S ? y - 14 : 10 + S) + "px");
        const E = e.element.wysiwygFrame.offsetLeft - a.offsetLeft;
        E > 0 && (a.style.left = "0px", w && (w.style.left = E + "px"));
      } else {
        a.style.left = h + "px";
        const S = e.element.wysiwygFrame.offsetWidth - (a.offsetLeft + y);
        S < 0 ? (a.style.left = a.offsetLeft + S + "px", w && (w.style.left = 20 - S + "px")) : w && (w.style.left = "20px");
      }
      a.style.visibility = "";
    },
    /**
     * @description javascript execCommand
     * @param {String} command javascript execCommand function property
     * @param {Boolean|undefined} showDefaultUI javascript execCommand function property
     * @param {String|undefined} value javascript execCommand function property
     */
    execCommand: function(a, r, f) {
      this._wd.execCommand(a, r, a === "formatBlock" ? "<" + f + ">" : f), this.history.push(!0);
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
        if (n.iframe)
          this.nativeFocus();
        else
          try {
            const a = this.getRange();
            if (a.startContainer === a.endContainer && o.isWysiwygDiv(a.startContainer)) {
              const r = a.commonAncestorContainer.children[a.startOffset];
              if (!o.isFormatElement(r) && !o.isComponent(r)) {
                const f = o.createElement(n.defaultTag), m = o.createElement("BR");
                f.appendChild(m), e.element.wysiwyg.insertBefore(f, r), this.setRange(m, 0, m, 0);
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
      r ? this.selectComponent(r.target, r.pluginName) : a ? (a = o.getChildElement(a, function(f) {
        return f.childNodes.length === 0 || f.nodeType === 3;
      }, !0), a ? this.setRange(a, a.textContent.length, a, a.textContent.length) : this.nativeFocus()) : this.focus();
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
    setRange: function(a, r, f, m) {
      if (!a || !f) return;
      r > a.textContent.length && (r = a.textContent.length), m > f.textContent.length && (m = f.textContent.length), o.isFormatElement(a) && (a = a.childNodes[r] || a.childNodes[r - 1] || a, r = r > 0 ? a.nodeType === 1 ? 1 : a.textContent ? a.textContent.length : 0 : 0), o.isFormatElement(f) && (f = f.childNodes[m] || f.childNodes[m - 1] || f, m = m > 0 ? f.nodeType === 1 ? 1 : f.textContent ? f.textContent.length : 0 : 0);
      const v = this._wd.createRange();
      try {
        v.setStart(a, r), v.setEnd(f, m);
      } catch (h) {
        console.warn("[SUNEDITOR.core.focus.error] " + h), this.nativeFocus();
        return;
      }
      const b = this.getSelection();
      return b.removeAllRanges && b.removeAllRanges(), b.addRange(v), this._rangeInfo(v, this.getSelection()), n.iframe && this.__focus(), v;
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
        const f = r.anchorNode, m = r.focusNode, v = r.anchorOffset, b = r.focusOffset, h = o.compareElements(f, m), y = h.ancestor && (h.result === 0 ? v <= b : h.result > 1);
        return this.setRange(
          y ? f : m,
          y ? v : b,
          y ? m : f,
          y ? b : v
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
        const f = e.element.wysiwyg, m = o.createElement(n.defaultTag);
        m.innerHTML = "<br>", f.insertBefore(m, r && r !== f ? r.nextElementSibling : f.firstElementChild), this.setRange(m.firstElementChild, 0, m.firstElementChild, 1), a = this._variable._range;
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
      let f = null;
      r.rangeCount > 0 ? f = r.getRangeAt(0) : f = this._createDefaultRange(), this._rangeInfo(f, r);
    },
    /**
     * @description Set "range" and "selection" info.
     * @param {Object} range range object.
     * @param {Object} selection selection object.
     */
    _rangeInfo: function(a, r) {
      let f = null;
      this._variable._range = a, a.collapsed ? o.isWysiwygDiv(a.commonAncestorContainer) ? f = a.commonAncestorContainer.children[a.startOffset] || a.commonAncestorContainer : f = a.commonAncestorContainer : f = r.extentNode || r.anchorNode, this._variable._selectionNode = f;
    },
    /**
     * @description Return the range object of editor's first child node
     * @returns {Object}
     * @private
     */
    _createDefaultRange: function() {
      const a = e.element.wysiwyg, r = this._wd.createRange();
      let f = a.firstElementChild, m = null;
      return f ? (m = f.firstChild, m || (m = o.createElement("BR"), f.appendChild(m))) : (f = o.createElement(n.defaultTag), m = o.createElement("BR"), f.appendChild(m), a.appendChild(f)), r.setStart(m, 0), r.setEnd(m, 0), r;
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
      let f = a.startContainer, m = a.startOffset, v = a.endContainer, b = a.endOffset, h, y, C;
      if (o.isFormatElement(f))
        for (f.childNodes[m] ? (f = f.childNodes[m] || f, m = 0) : (f = f.lastChild || f, m = f.textContent.length); f && f.nodeType === 1 && f.firstChild; )
          f = f.firstChild || f, m = 0;
      if (o.isFormatElement(v)) {
        for (v = v.childNodes[b] || v.lastChild || v; v && v.nodeType === 1 && v.lastChild; )
          v = v.lastChild;
        b = r ? 0 : v.textContent.length;
      }
      if (h = o.isWysiwygDiv(f) ? e.element.wysiwyg.firstChild : f, y = m, o.isBreak(h) || h.nodeType === 1 && h.childNodes.length > 0) {
        const w = o.isBreak(h);
        if (!w) {
          for (; h && !o.isBreak(h) && h.nodeType === 1; )
            h = h.childNodes[y] || h.nextElementSibling || h.nextSibling, y = 0;
          let S = o.getFormatElement(h, null);
          S === o.getRangeFormatElement(S, null) && (S = o.createElement(o.getParentElement(h, o.isCell) ? "DIV" : n.defaultTag), h.parentNode.insertBefore(S, h), S.appendChild(h));
        }
        if (o.isBreak(h)) {
          const S = o.createTextNode(o.zeroWidthSpace);
          h.parentNode.insertBefore(S, h), h = S, w && f === v && (v = h, b = 1);
        }
      }
      if (f = h, m = y, h = o.isWysiwygDiv(v) ? e.element.wysiwyg.lastChild : v, y = b, o.isBreak(h) || h.nodeType === 1 && h.childNodes.length > 0) {
        const w = o.isBreak(h);
        if (!w) {
          for (; h && !o.isBreak(h) && h.nodeType === 1 && (C = h.childNodes, C.length !== 0); )
            h = C[y > 0 ? y - 1 : y] || !/FIGURE/i.test(C[0].nodeName) ? C[0] : h.previousElementSibling || h.previousSibling || f, y = y > 0 ? h.textContent.length : y;
          let S = o.getFormatElement(h, null);
          S === o.getRangeFormatElement(S, null) && (S = o.createElement(o.isCell(S) ? "DIV" : n.defaultTag), h.parentNode.insertBefore(S, h), S.appendChild(h));
        }
        if (o.isBreak(h)) {
          const S = o.createTextNode(o.zeroWidthSpace);
          h.parentNode.insertBefore(S, h), h = S, y = 1, w && !h.previousSibling && o.removeItem(v);
        }
      }
      return v = h, b = y, this.setRange(f, m, v, b), !0;
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
        const B = e.element.wysiwyg.children;
        if (B.length === 0) return [];
        this.setRange(B[0], 0, B[B.length - 1], B[B.length - 1].textContent.trim().length), r = this.getRange();
      }
      const f = r.startContainer, m = r.endContainer, v = r.commonAncestorContainer, b = o.getListChildren(v, function(B) {
        return a ? a(B) : o.isFormatElement(B);
      });
      if (!o.isWysiwygDiv(v) && !o.isRangeFormatElement(v) && b.unshift(o.getFormatElement(v, null)), f === m || b.length === 1) return b;
      let h = o.getFormatElement(f, null), y = o.getFormatElement(m, null), C = null, w = null;
      const S = function(B) {
        return o.isTable(B) ? /^TABLE$/i.test(B.nodeName) : !0;
      };
      let I = o.getRangeFormatElement(h, S), E = o.getRangeFormatElement(y, S);
      o.isTable(I) && o.isListCell(I.parentNode) && (I = I.parentNode), o.isTable(E) && o.isListCell(E.parentNode) && (E = E.parentNode);
      const z = I === E;
      for (let B = 0, P = b.length, U; B < P; B++) {
        if (U = b[B], h === U || !z && U === I) {
          C = B;
          continue;
        }
        if (y === U || !z && U === E) {
          w = B;
          break;
        }
      }
      return C === null && (C = 0), w === null && (w = b.length - 1), b.slice(C, w + 1);
    },
    /**
     * @description Get format elements and components from the selected area. (P, DIV, H[1-6], OL, UL, TABLE..)
     * If some of the component are included in the selection, get the entire that component.
     * @param {Boolean} removeDuplicate If true, if there is a parent and child tag among the selected elements, the child tag is excluded.
     * @returns {Array}
     */
    getSelectedElementsAndComponents: function(a) {
      const r = this.getRange().commonAncestorContainer, f = o.getParentElement(r, o.isComponent), m = o.isTable(r) ? this.getSelectedElements(null) : this.getSelectedElements((function(v) {
        const b = this.getParentElement(v, this.isComponent);
        return this.isFormatElement(v) && (!b || b === f) || this.isComponent(v) && !this.getFormatElement(v);
      }).bind(o));
      if (a) {
        for (let v = 0, b = m.length; v < b; v++)
          for (let h = v - 1; h >= 0; h--)
            if (m[h].contains(m[v])) {
              m.splice(v, 1), v--, b--;
              break;
            }
      }
      return m;
    },
    /**
     * @description Determine if this offset is the edge offset of container
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String|undefined} dir Select check point - Both edge, Front edge or End edge. ("start": Front edge, "end": End edge, undefined: Both edge)
     * @returns {Boolean}
     */
    isEdgePoint: function(a, r, f) {
      return a.nodeType === 1 && !a.textContent.length ? !0 : f !== "end" && r === 0 || (!f || f !== "start") && !a.nodeValue && r === 1 || (!f || f === "end") && !!a.nodeValue && r === a.nodeValue.length;
    },
    /**
     * @description Check if the container and offset values are the edges of the format tag
     * @param {Node} container The node of the selection object. (range.startContainer..)
     * @param {Number} offset The offset of the selection object. (core.getRange().startOffset...)
     * @param {String} dir Select check point - "start": Front edge, "end": End edge, undefined: Both edge.
     * @returns {Array|null}
     * @private
     */
    _isEdgeFormat: function(a, r, f) {
      if (!this.isEdgePoint(a, r, f)) return !1;
      const m = [];
      for (f = f === "start" ? "previousSibling" : "nextSibling"; a && !o.isFormatElement(a) && !o.isWysiwygDiv(a); )
        if (!a[f] || o.isBreak(a[f]) && !a[f][f])
          a.nodeType === 1 && m.push(a.cloneNode(!1)), a = a.parentNode;
        else
          return null;
      return m;
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
      const f = o.getFormatElement(this.getSelectionNode(), null);
      let m = null;
      if (!o.isFormatElement(a) && o.isFreeFormatElement(f || a.parentNode))
        m = o.createElement("BR");
      else {
        const v = r ? typeof r == "string" ? r : r.nodeName : o.isFormatElement(f) && !o.isRangeFormatElement(f) && !o.isFreeFormatElement(f) ? f.nodeName : n.defaultTag;
        m = o.createElement(v), m.innerHTML = "<br>", (r && typeof r != "string" || !r && o.isFormatElement(f)) && o.copyTagAttributes(m, r || f, ["id"]);
      }
      return o.isCell(a) ? a.insertBefore(m, a.nextElementSibling) : a.parentNode.insertBefore(m, a.nextElementSibling), m;
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
    insertComponent: function(a, r, f, m) {
      if (this.isReadOnly || f && !this.checkCharCount(a, null))
        return null;
      const v = this.removeNode();
      this.getRange_addLine(this.getRange(), v.container);
      let b = null, h = this.getSelectionNode(), y = o.getFormatElement(h, null);
      if (o.isListCell(y))
        this.insertNode(a, h === y ? null : v.container.nextSibling, !1), a.nextSibling || a.parentNode.appendChild(o.createElement("BR"));
      else {
        if (this.getRange().collapsed && (v.container.nodeType === 3 || o.isBreak(v.container))) {
          const C = o.getParentElement(v.container, (function(w) {
            return this.isRangeFormatElement(w);
          }).bind(o));
          b = o.splitElement(v.container, v.offset, C ? o.getElementDepth(C) + 1 : 0), b && (y = b.previousSibling);
        }
        this.insertNode(a, o.isRangeFormatElement(y) ? null : y, !1), y && o.onlyZeroWidthSpace(y) && o.removeItem(y);
      }
      if (!m) {
        this.setRange(a, 0, a, 0);
        const C = this.getFileComponent(a);
        C ? this.selectComponent(C.target, C.pluginName) : b && (b = o.getEdgeChildNodes(b, null).sc || b, this.setRange(b, 0, b, 0));
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
      let r, f;
      return (/^FIGURE$/i.test(a.nodeName) || /se-component/.test(a.className)) && (r = a.querySelector(this._fileManager.queryString)), !r && a.nodeName && this._fileManager.regExp.test(a.nodeName) && (r = a), r && (f = this._fileManager.pluginMap[r.nodeName.toLowerCase()], f) ? {
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
    selectComponent: function(a, r) {
      if (o.isUneditableComponent(o.getParentElement(a, o.isComponent)) || o.isUneditableComponent(a)) return !1;
      this.hasFocus || this.focus();
      const f = this.plugins[r];
      f && c.setTimeout((function() {
        typeof f.select == "function" && this.callPlugin(r, f.select.bind(this, a), null), this._setComponentLineBreaker(a);
      }).bind(this));
    },
    /**
     * @description Set line breaker of component
     * @param {Element} element Element tag (img, iframe, video)
     * @private
     */
    _setComponentLineBreaker: function(a) {
      this._lineBreaker.style.display = "none";
      const r = o.getParentElement(a, o.isComponent), f = e.element.lineBreaker_t.style, m = e.element.lineBreaker_b.style, v = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : a, b = o.isListCell(r.parentNode);
      let h, y, C;
      (b ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) ? (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, h = o.getOffset(a, e.element.wysiwygFrame).top + y, C = v.offsetWidth / 2 / 2, f.top = h - y - 12 + "px", f.left = o.getOffset(v).left + C + "px", f.display = "block") : f.display = "none", (b ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) ? (h || (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, h = o.getOffset(a, e.element.wysiwygFrame).top + y, C = v.offsetWidth / 2 / 2), m.top = h + v.offsetHeight - y - 12 + "px", m.left = o.getOffset(v).left + v.offsetWidth - C - 24 + "px", m.display = "block") : m.display = "none";
    },
    _checkDuplicateNode: function(a, r) {
      (function f(m) {
        d._dupleCheck(m, r);
        const v = m.childNodes;
        for (let b = 0, h = v.length; b < h; b++)
          f(v[b]);
      })(a);
    },
    _dupleCheck: function(a, r) {
      if (!o.isTextStyleElement(a)) return;
      const f = (a.style.cssText.match(/[^;]+;/g) || []).map(function(b) {
        return b.trim();
      }), m = a.nodeName;
      if (/^span$/i.test(m) && f.length === 0) return a;
      let v = !1;
      return function b(h) {
        if (!(o.isWysiwygDiv(h) || !o.isTextStyleElement(h))) {
          if (h.nodeName === m) {
            v = !0;
            const y = h.style.cssText.match(/[^;]+;/g) || [];
            for (let C = 0, w = y.length, S; C < w; C++)
              (S = f.indexOf(y[C].trim())) > -1 && f.splice(S, 1);
            for (let C = 0, w = h.classList.length; C < w; C++)
              a.classList.remove(h.classList[C]);
          }
          b(h.parentElement);
        }
      }(r), v && ((a.style.cssText = f.join(" ")) || (a.setAttribute("style", ""), a.removeAttribute("style")), a.attributes.length || a.setAttribute("data-se-duple", "true")), a;
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
    insertNode: function(a, r, f) {
      if (this.isReadOnly || f && !this.checkCharCount(a, null))
        return null;
      let m = null, v = this.getRange(), b = o.isListCell(v.commonAncestorContainer) ? v.commonAncestorContainer : o.getFormatElement(this.getSelectionNode(), null), h = o.isListCell(b) && (o.isListCell(a) || o.isList(a)), y, C, w, S = null;
      const I = o.isFreeFormatElement(b), E = !I && (o.isFormatElement(a) || o.isRangeFormatElement(a)) || o.isComponent(a);
      if (h && (w = r || o.isList(a) ? b.lastChild : b.nextElementSibling, S = o.isList(a) ? b : (w || b).parentNode), !r && (E || o.isComponent(a) || o.isMedia(a))) {
        const H = this.isEdgePoint(v.endContainer, v.endOffset, "end"), D = this.removeNode(), O = D.container, R = O === D.prevContainer && v.collapsed ? null : D.prevContainer;
        if (h && R)
          if (S = R.nodeType === 3 ? R.parentNode : R, S.contains(O)) {
            let F = !0;
            for (w = O; w.parentNode && w.parentNode !== S; )
              w = w.parentNode, F = !1;
            F && O === R && (w = w.nextSibling);
          } else
            w = null;
        else if (h && o.isListCell(O) && !b.parentElement)
          b = o.createElement("LI"), S.appendChild(b), O.appendChild(S), w = null;
        else if (O.nodeType === 3 || o.isBreak(O) || h) {
          const F = o.getParentElement(O, (function(A) {
            return this.isRangeFormatElement(A) || this.isListCell(A);
          }).bind(o));
          if (r = o.splitElement(O, D.offset, F ? o.getElementDepth(F) + 1 : 0), !r)
            w = r = b;
          else if (h) {
            if (b.contains(O)) {
              const A = o.isList(b.lastElementChild);
              let T = null;
              H || (T = b.cloneNode(!1), T.appendChild(r.textContent.trim() ? r : o.createTextNode(o.zeroWidthSpace))), A && (T || (T = b.cloneNode(!1), T.appendChild(o.createTextNode(o.zeroWidthSpace))), T.appendChild(b.lastElementChild)), T && (b.parentNode.insertBefore(T, b.nextElementSibling), w = r = T);
            }
          } else
            r = r.previousSibling;
        }
      }
      v = !r && !E ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const z = v.commonAncestorContainer, B = v.startOffset, P = v.endOffset, U = v.startContainer === z && o.isFormatElement(z), V = U && (z.childNodes[B] || z.childNodes[0]) || v.startContainer, M = U && (z.childNodes[P] || z.childNodes[z.childNodes.length - 1]) || v.endContainer;
      if (!h)
        if (r)
          y = r.parentNode, r = r.nextSibling, C = !0;
        else if (y = V, V.nodeType === 3 && (y = V.parentNode), v.collapsed)
          if (z.nodeType === 3)
            z.textContent.length > P ? r = z.splitText(P) : r = z.nextSibling;
          else if (o.isBreak(y))
            r = y, y = y.parentNode;
          else {
            let H = y.childNodes[B];
            const D = H && H.nodeType === 3 && o.onlyZeroWidthSpace(H) && o.isBreak(H.nextSibling) ? H.nextSibling : H;
            D ? !D.nextSibling && o.isBreak(D) ? (y.removeChild(D), r = null) : r = o.isBreak(D) && !o.isBreak(a) ? D : D.nextSibling : r = null;
          }
        else if (V === M) {
          this.isEdgePoint(M, P) ? r = M.nextSibling : r = M.splitText(P);
          let D = V;
          this.isEdgePoint(V, B) || (D = V.splitText(B)), y.removeChild(D), y.childNodes.length === 0 && E && (y.innerHTML = "<br>");
        } else {
          const D = this.removeNode(), O = D.container, R = D.prevContainer;
          if (O && O.childNodes.length === 0 && E && (o.isFormatElement(O) ? O.innerHTML = "<br>" : o.isRangeFormatElement(O) && (O.innerHTML = "<" + n.defaultTag + "><br></" + n.defaultTag + ">")), o.isListCell(O) && a.nodeType === 3)
            y = O, r = null;
          else if (!E && R)
            if (y = R.nodeType === 3 ? R.parentNode : R, y.contains(O)) {
              let F = !0;
              for (r = O; r.parentNode && r.parentNode !== y; )
                r = r.parentNode, F = !1;
              F && O === R && (r = r.nextSibling);
            } else
              r = null;
          else o.isWysiwygDiv(O) && !o.isFormatElement(a) ? (y = O.appendChild(o.createElement(n.defaultTag)), r = null) : (r = E ? M : O === R ? O.nextSibling : O, y = !r || !r.parentNode ? z : r.parentNode);
          for (; r && !o.isFormatElement(r) && r.parentNode !== z; )
            r = r.parentNode;
        }
      try {
        if (!h) {
          if ((o.isWysiwygDiv(r) || y === e.element.wysiwyg.parentNode) && (y = e.element.wysiwyg, r = null), o.isFormatElement(a) || o.isRangeFormatElement(a) || !o.isListCell(y) && o.isComponent(a)) {
            const H = y;
            if (o.isList(r))
              y = r, r = null;
            else if (o.isListCell(r))
              y = r.previousElementSibling || r;
            else if (!C && !r) {
              const D = this.removeNode(), O = D.container.nodeType === 3 ? o.isListCell(o.getFormatElement(D.container, null)) ? D.container : o.getFormatElement(D.container, null) || D.container.parentNode : D.container, R = o.isWysiwygDiv(O) || o.isRangeFormatElement(O);
              y = R ? O : O.parentNode, r = R ? null : O.nextSibling;
            }
            H.childNodes.length === 0 && y !== H && o.removeItem(H);
          }
          if (E && !I && !o.isRangeFormatElement(y) && !o.isListCell(y) && !o.isWysiwygDiv(y) && (r = y.nextElementSibling, y = y.parentNode), o.isWysiwygDiv(y) && (a.nodeType === 3 || o.isBreak(a))) {
            const H = o.createElement(n.defaultTag);
            H.appendChild(a), m = a, a = H;
          }
        }
        if (h ? S.parentNode ? (y = S, r = w) : (y = e.element.wysiwyg, r = null) : r = y === r ? y.lastChild : r, o.isListCell(a) && !o.isList(y)) {
          if (o.isListCell(y))
            r = y.nextElementSibling, y = y.parentNode;
          else {
            const H = o.createElement("ol");
            y.insertBefore(H, r), y = H, r = null;
          }
          h = !0;
        }
        if (this._checkDuplicateNode(a, y), y.insertBefore(a, r), h)
          if (o.onlyZeroWidthSpace(b.textContent.trim()))
            o.removeItem(b), a = a.lastChild;
          else {
            const H = o.getArrayItem(b.children, o.isList);
            H && (a !== H ? (a.appendChild(H), a = H.previousSibling) : (y.appendChild(a), a = y), o.onlyZeroWidthSpace(b.textContent.trim()) && o.removeItem(b));
          }
      } catch (H) {
        y.appendChild(a), console.warn("[SUNEDITOR.insertNode.warn] " + H);
      } finally {
        m && (a = m);
        const H = y.querySelectorAll("[data-se-duple]");
        if (H.length > 0)
          for (let D = 0, O = H.length, R, F, A, T; D < O; D++) {
            for (R = H[D], A = R.childNodes, T = R.parentNode; A[0]; )
              F = A[0], T.insertBefore(F, R);
            R === a && (a = F), o.removeItem(R);
          }
        if ((o.isFormatElement(a) || o.isComponent(a)) && V === M) {
          const D = o.getFormatElement(z, null);
          D && D.nodeType === 1 && o.isEmptyLine(D) && o.removeItem(D);
        }
        if (I && (o.isFormatElement(a) || o.isRangeFormatElement(a)) && (a = this._setIntoFreeFormat(a)), !o.isComponent(a)) {
          let D = 1;
          if (a.nodeType === 3)
            D = a.textContent.length, this.setRange(a, D, a, D);
          else if (!o.isBreak(a) && !o.isListCell(a) && o.isFormatElement(y)) {
            let O = null;
            (!a.previousSibling || o.isBreak(a.previousSibling)) && (O = o.createTextNode(o.zeroWidthSpace), a.parentNode.insertBefore(O, a)), (!a.nextSibling || o.isBreak(a.nextSibling)) && (O = o.createTextNode(o.zeroWidthSpace), a.parentNode.insertBefore(O, a.nextSibling)), o._isIgnoreNodeChange(a) && (a = a.nextSibling, D = 0);
          }
          this.setRange(a, D, a, D);
        }
        return a;
      }
    },
    _setIntoFreeFormat: function(a) {
      const r = a.parentNode;
      let f, m;
      for (; o.isFormatElement(a) || o.isRangeFormatElement(a); ) {
        for (f = a.childNodes, m = null; f[0]; ) {
          if (m = f[0], o.isFormatElement(m) || o.isRangeFormatElement(m)) {
            if (this._setIntoFreeFormat(m), !a.parentNode) break;
            f = a.childNodes;
            continue;
          }
          r.insertBefore(m, a);
        }
        a.childNodes.length === 0 && o.removeItem(a), a = o.createElement("BR"), r.insertBefore(a, m.nextSibling);
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
          const O = o.createElement("BR"), R = o.createElement(n.defaultTag);
          return R.appendChild(O), o.changeElement(D, R), d.setRange(R, 0, R, 0), this.history.push(!0), {
            container: R,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const r = a.startOffset === 0, f = d.isEdgePoint(a.endContainer, a.endOffset, "end");
      let m = null, v = null, b = null;
      r && (v = o.getFormatElement(a.startContainer), v && (m = v.previousElementSibling, v = m)), f && (b = o.getFormatElement(a.endContainer), b = b && b.nextElementSibling);
      let h, y = 0, C = a.startContainer, w = a.endContainer, S = a.startOffset, I = a.endOffset;
      const E = a.commonAncestorContainer.nodeType === 3 && a.commonAncestorContainer.parentNode === C.parentNode ? C.parentNode : a.commonAncestorContainer;
      if (E === C && E === w && (C = E.children[S], w = E.children[I], S = I = 0), !C || !w) return {
        container: E,
        offset: 0
      };
      if (C === w && a.collapsed && C.textContent && o.onlyZeroWidthSpace(C.textContent.substr(S)))
        return {
          container: C,
          offset: S,
          prevContainer: C && C.parentNode ? C : null
        };
      let z = null, B = null;
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
            z = o.createTextNode(C.textContent);
          } else
            O === w ? (z = o.createTextNode(C.substringData(0, S) + w.substringData(I, w.length - I)), y = S) : z = o.createTextNode(C.substringData(0, S));
          if (z.length > 0 ? C.data = z.data : this._nodeRemoveListItem(C), O === w) break;
          continue;
        }
        if (O === w) {
          if (w.nodeType === 1) {
            if (o.isComponent(w)) continue;
            B = o.createTextNode(w.textContent);
          } else
            B = o.createTextNode(w.substringData(I, w.length - I));
          B.length > 0 ? w.data = B.data : this._nodeRemoveListItem(w);
          continue;
        }
        this._nodeRemoveListItem(O);
      }
      const M = o.getParentElement(w, "ul"), H = o.getParentElement(C, "li");
      if (M && H && H.contains(M) ? (h = M.previousSibling, y = h.textContent.length) : (h = w && w.parentNode ? w : C && C.parentNode ? C : a.endContainer || a.startContainer, y = !r && !f ? y : f ? h.textContent.length : 0), !o.isWysiwygDiv(h) && h.childNodes.length === 0) {
        const D = o.removeItemAllParents(h, null, null);
        D && (h = D.sc || D.ec || e.element.wysiwyg);
      }
      return !o.getFormatElement(h) && !(C && C.parentNode) && (b ? (h = b, y = 0) : v && (h = v, y = 1)), this.setRange(h, y, h, y), this.history.push(!0), {
        container: h,
        offset: y,
        prevContainer: m
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
        for (let I = 0, E = r.length, z, B, P, U, V, M; I < E; I++)
          if (z = r[I], !!o.isListCell(z) && (B = z.lastElementChild, B && o.isListCell(z.nextElementSibling) && r.indexOf(z.nextElementSibling) > -1 && (U = B.lastElementChild, r.indexOf(U) > -1))) {
            let H = null;
            for (; H = U.lastElementChild; )
              if (o.isList(H))
                if (r.indexOf(H.lastElementChild) > -1)
                  U = H.lastElementChild;
                else
                  continue e;
            P = B.firstElementChild, V = r.indexOf(P), M = r.indexOf(U), r.splice(V, M - V + 1), E = r.length;
            continue;
          }
      let f = r[r.length - 1], m, v, b;
      o.isRangeFormatElement(f) || o.isFormatElement(f) ? m = f : m = o.getRangeFormatElement(f, null) || o.getFormatElement(f, null), o.isCell(m) ? (v = null, b = m) : (v = m.nextSibling, b = m.parentNode);
      let h = o.getElementDepth(m), y = null;
      const C = [], w = function(I, E, z) {
        let B = null;
        if (I !== E && !o.isTable(E)) {
          if (E && o.getElementDepth(I) === o.getElementDepth(E)) return z;
          B = o.removeItemAllParents(E, null, I);
        }
        return B ? B.ec : z;
      };
      for (let I = 0, E = r.length, z, B, P, U, V, M, H; I < E; I++)
        if (z = r[I], B = z.parentNode, !(!B || a.contains(B)))
          if (P = o.getElementDepth(z), o.isList(B)) {
            if (y === null && (M ? (y = M, H = !0, M = null) : y = B.cloneNode(!1)), C.push(z), V = r[I + 1], I === E - 1 || V && V.parentNode !== B) {
              V && z.contains(V.parentNode) && (M = V.parentNode.cloneNode(!1));
              let D = B.parentNode, O;
              for (; o.isList(D); )
                O = o.createElement(D.nodeName), O.appendChild(y), y = O, D = D.parentNode;
              const R = this.detachRangeFormatElement(B, C, null, !0, !0);
              h >= P ? (h = P, b = R.cc, v = w(b, B, R.ec), v && (b = v.parentNode)) : b === R.cc && (v = R.ec), b !== R.cc && (U = w(b, R.cc, U), U !== void 0 ? v = U : v = R.cc);
              for (let F = 0, A = R.removeArray.length; F < A; F++)
                y.appendChild(R.removeArray[F]);
              H || a.appendChild(y), M && R.removeArray[R.removeArray.length - 1].appendChild(M), y = null, H = !1;
            }
          } else
            h >= P && (h = P, b = B, v = z.nextSibling), a.appendChild(z), b !== B && (U = w(b, B), U !== void 0 && (v = U));
      if (this.effectNode = null, o.mergeSameTags(a, null, !1), o.mergeNestedTags(a, (function(I) {
        return this.isList(I);
      }).bind(o)), v && o.getElementDepth(v) > 0 && (o.isList(v.parentNode) || o.isList(v.parentNode.parentNode))) {
        const I = o.getParentElement(v, (function(z) {
          return this.isRangeFormatElement(z) && !this.isList(z);
        }).bind(o)), E = o.splitElement(v, null, I ? o.getElementDepth(I) + 1 : 0);
        E.parentNode.insertBefore(a, E);
      } else
        b.insertBefore(a, v), w(a, v);
      const S = o.getEdgeChildNodes(a.firstElementChild, a.lastElementChild);
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
    detachRangeFormatElement: function(a, r, f, m, v) {
      const b = this.getRange();
      let h = b.startOffset, y = b.endOffset, C = o.getListChildNodes(a, function(R) {
        return R.parentNode === a;
      }), w = a.parentNode, S = null, I = null, E = a.cloneNode(!1);
      const z = [], B = o.isList(f);
      let P = !1, U = !1, V = !1;
      function M(R, F, A, T) {
        if (o.onlyZeroWidthSpace(F) && (F.innerHTML = o.zeroWidthSpace, h = y = 1), F.nodeType === 3)
          return R.insertBefore(F, A), F;
        const Y = (V ? F : T).childNodes;
        let $ = F.cloneNode(!1), X = null, j = null;
        for (; Y[0]; )
          j = Y[0], o._notTextNode(j) && !o.isBreak(j) && !o.isListCell($) ? ($.childNodes.length > 0 && (X || (X = $), R.insertBefore($, A), $ = F.cloneNode(!1)), R.insertBefore(j, A), X || (X = j)) : $.appendChild(j);
        if ($.childNodes.length > 0) {
          if (o.isListCell(R) && o.isListCell($) && o.isList(A))
            if (B) {
              for (X = A; A; )
                $.appendChild(A), A = A.nextSibling;
              R.parentNode.insertBefore($, R.nextElementSibling);
            } else {
              const K = T.nextElementSibling, oe = o.detachNestedList(T, !1);
              if (a !== oe || K !== T.nextElementSibling) {
                const me = $.childNodes;
                for (; me[0]; )
                  T.appendChild(me[0]);
                a = oe, U = !0;
              }
            }
          else
            R.insertBefore($, A);
          X || (X = $);
        }
        return X;
      }
      for (let R = 0, F = C.length, A, T, Y; R < F; R++)
        if (A = C[R], !(A.nodeType === 3 && o.isList(E)))
          if (V = !1, m && R === 0 && (!r || r.length === F || r[0] === A ? S = a.previousSibling : S = E), r && (T = r.indexOf(A)), r && T === -1)
            E || (E = a.cloneNode(!1)), E.appendChild(A);
          else {
            if (r && (Y = r[T + 1]), E && E.children.length > 0 && (w.insertBefore(E, a), E = null), !B && o.isListCell(A))
              if (Y && o.getElementDepth(A) !== o.getElementDepth(Y) && (o.isListCell(w) || o.getArrayItem(A.children, o.isList, !1))) {
                const $ = A.nextElementSibling, X = o.detachNestedList(A, !1);
                (a !== X || $ !== A.nextElementSibling) && (a = X, U = !0);
              } else {
                const $ = A;
                A = o.createElement(m ? $.nodeName : o.isList(a.parentNode) || o.isListCell(a.parentNode) ? "LI" : o.isCell(a.parentNode) ? "DIV" : n.defaultTag);
                const X = o.isListCell(A), j = $.childNodes;
                for (; j[0] && !(o.isList(j[0]) && !X); )
                  A.appendChild(j[0]);
                o.copyFormatAttributes(A, $), V = !0;
              }
            else
              A = A.cloneNode(!1);
            if (!U && (m ? (z.push(A), o.removeItem(C[R])) : (f ? (P || (w.insertBefore(f, a), P = !0), A = M(f, A, null, C[R])) : A = M(w, A, a, C[R]), U || (r ? (I = A, S || (S = A)) : S || (S = I = A))), U)) {
              U = V = !1, C = o.getListChildNodes(a, function($) {
                return $.parentNode === a;
              }), E = a.cloneNode(!1), w = a.parentNode, R = -1, F = C.length;
              continue;
            }
          }
      const H = a.parentNode;
      let D = a.nextSibling;
      E && E.children.length > 0 && H.insertBefore(E, D), f ? S = f.previousSibling : S || (S = a.previousSibling), D = a.nextSibling !== E ? a.nextSibling : E ? E.nextSibling : null, a.children.length === 0 || a.textContent.length === 0 ? o.removeItem(a) : o.removeEmptyNode(a, null, !1);
      let O = null;
      if (m)
        O = {
          cc: H,
          sc: S,
          so: h,
          ec: D,
          eo: y,
          removeArray: z
        };
      else {
        S || (S = I), I || (I = S);
        const R = o.getEdgeChildNodes(S, I.parentNode ? S : I);
        O = {
          cc: (R.sc || R.ec).parentNode,
          sc: R.sc,
          so: h,
          ec: R.ec,
          eo: y,
          removeArray: null
        };
      }
      if (this.effectNode = null, v) return O;
      !m && O && (r ? this.setRange(O.sc, h, O.ec, y) : this.setRange(O.sc, 0, O.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(a, r) {
      let f = {}, m = !1, v = !1, b = null, h = null;
      const y = (function(C) {
        return !this.isComponent(C);
      }).bind(o);
      for (let C = 0, w = a.length, S, I, E, z; C < w; C++) {
        if (E = C === w - 1, I = o.getRangeFormatElement(a[C], y), z = o.isList(I), !S && z)
          S = I, f = { r: S, f: [o.getParentElement(a[C], "LI")] }, C === 0 && (m = !0);
        else if (S && z)
          if (S !== I) {
            const B = this.detachRangeFormatElement(f.f[0].parentNode, f.f, null, r, !0);
            I = a[C].parentNode, m && (b = B.sc, m = !1), E && (h = B.ec), z ? (S = I, f = { r: S, f: [o.getParentElement(a[C], "LI")] }, E && (v = !0)) : S = null;
          } else
            f.f.push(o.getParentElement(a[C], "LI")), E && (v = !0);
        if (E && o.isList(S)) {
          const B = this.detachRangeFormatElement(f.f[0].parentNode, f.f, null, r, !0);
          (v || w === 1) && (h = B.ec), m && (b = B.sc || h);
        }
      }
      return {
        sc: b,
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
    nodeChange: function(a, r, f, m) {
      this._resetRangeToTextNode();
      let v = this.getRange_addLine(this.getRange(), null);
      r = r && r.length > 0 ? r : !1, f = f && f.length > 0 ? f : !1;
      const b = !a, h = b && !f && !r;
      let y = v.startContainer, C = v.startOffset, w = v.endContainer, S = v.endOffset;
      if (h && v.collapsed && o.isFormatElement(y.parentNode) || y === w && y.nodeType === 1 && o.isNonEditable(y)) {
        const j = y.parentNode;
        if (!o.isListCell(j) || !o.getValues(j.style).some((function(K) {
          return this._listKebab.indexOf(K) > -1;
        }).bind(this))) return;
      }
      if (v.collapsed && !h && y.nodeType === 1 && !o.isBreak(y) && !o.isComponent(y)) {
        let j = null;
        const K = y.childNodes[C];
        K && (K.nextSibling ? j = o.isBreak(K) ? K : K.nextSibling : j = null);
        const oe = o.createTextNode(o.zeroWidthSpace);
        y.insertBefore(oe, j), this.setRange(oe, 1, oe, 1), v = this.getRange(), y = v.startContainer, C = v.startOffset, w = v.endContainer, S = v.endOffset;
      }
      o.isFormatElement(y) && (y = y.childNodes[C] || y.firstChild, C = 0), o.isFormatElement(w) && (w = w.childNodes[S] || w.lastChild, S = w.textContent.length), b && (a = o.createElement("DIV"));
      const I = c.RegExp, E = a.nodeName;
      if (!h && y === w && !f && a) {
        let j = y, K = 0;
        const oe = [], me = a.style;
        for (let be = 0, he = me.length; be < he; be++)
          oe.push(me[be]);
        const ve = a.classList;
        for (let be = 0, he = ve.length; be < he; be++)
          oe.push("." + ve[be]);
        if (oe.length > 0) {
          for (; !o.isFormatElement(j) && !o.isWysiwygDiv(j); ) {
            for (let be = 0; be < oe.length; be++)
              if (j.nodeType === 1) {
                const he = oe[be], Ae = /^\./.test(he) ? new I("\\s*" + he.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, qe = b ? !!j.style[he] : !!j.style[he] && !!a.style[he] && j.style[he] === a.style[he], Ce = Ae === !1 ? !1 : b ? !!j.className.match(Ae) : !!j.className.match(Ae) && !!a.className.match(Ae);
                (qe || Ce) && K++;
              }
            j = j.parentNode;
          }
          if (K >= oe.length) return;
        }
      }
      let z = {}, B = {}, P, U = "", V = "", M = "";
      if (r) {
        for (let j = 0, K = r.length, oe; j < K; j++)
          oe = r[j], /^\./.test(oe) ? V += (V ? "|" : "\\s*(?:") + oe.replace(/^\./, "") : U += (U ? "|" : "(?:;|^|\\s)(?:") + oe;
        U && (U += ")\\s*:[^;]*\\s*(?:;|$)", U = new I(U, "ig")), V && (V += ")(?=\\s+|$)", V = new I(V, "ig"));
      }
      if (f) {
        M = "^(?:" + f[0];
        for (let j = 1; j < f.length; j++)
          M += "|" + f[j];
        M += ")$", M = new I(M, "i");
      }
      const H = c.Boolean, D = { v: !1 }, O = function(j) {
        const K = j.cloneNode(!1);
        if (K.nodeType === 3 || o.isBreak(K)) return K;
        if (h) return null;
        const oe = !M && b || M && M.test(K.nodeName);
        if (oe && !m)
          return D.v = !0, null;
        const me = K.style.cssText;
        let ve = "";
        U && me.length > 0 && (ve = me.replace(U, "").trim(), ve !== me && (D.v = !0));
        const be = K.className;
        let he = "";
        return V && be.length > 0 && (he = be.replace(V, "").trim(), he !== be && (D.v = !0)), b && (V || !be) && (U || !me) && !ve && !he && oe ? (D.v = !0, null) : ve || he || K.nodeName !== E || H(U) !== H(me) || H(V) !== H(be) ? (U && me.length > 0 && (K.style.cssText = ve), K.style.cssText || K.removeAttribute("style"), V && be.length > 0 && (K.className = he.trim()), K.className.trim() || K.removeAttribute("class"), !K.style.cssText && !K.className && (K.nodeName === E || oe) ? (D.v = !0, null) : K) : (D.v = !0, null);
      }, R = this.getSelectedElements(null);
      v = this.getRange(), y = v.startContainer, C = v.startOffset, w = v.endContainer, S = v.endOffset, o.getFormatElement(y, null) || (y = o.getChildElement(R[0], function(j) {
        return j.nodeType === 3;
      }, !1), C = 0), o.getFormatElement(w, null) || (w = o.getChildElement(R[R.length - 1], function(j) {
        return j.nodeType === 3;
      }, !1), S = w.textContent.length);
      const F = o.getFormatElement(y, null) === o.getFormatElement(w, null), A = R.length - (F ? 0 : 1);
      P = a.cloneNode(!1);
      const T = h || b && function(j) {
        for (let K = 0, oe = j.length; K < oe; K++)
          if (o._isMaintainedNode(j[K]) || o._isSizeNode(j[K])) return !0;
        return !1;
      }(f), Y = b || o._isSizeNode(P), $ = this._util_getMaintainedNode.bind(o, T, Y), X = this._util_isMaintainedNode.bind(o, T, Y);
      if (F) {
        this._resetCommonListCell(R[0], r) && (v = this.setRange(y, C, w, S));
        const j = this._nodeChange_oneLine(R[0], P, O, y, C, w, S, h, b, v.collapsed, D, $, X);
        z.container = j.startContainer, z.offset = j.startOffset, B.container = j.endContainer, B.offset = j.endOffset, z.container === B.container && o.onlyZeroWidthSpace(z.container) && (z.offset = B.offset = 1), this._setCommonListStyle(j.ancestor, null);
      } else {
        let j = !1;
        A > 0 && this._resetCommonListCell(R[A], r) && (j = !0), this._resetCommonListCell(R[0], r) && (j = !0), j && this.setRange(y, C, w, S), A > 0 && (P = a.cloneNode(!1), B = this._nodeChange_endLine(R[A], P, O, w, S, h, b, D, $, X));
        for (let K = A - 1, oe; K > 0; K--)
          this._resetCommonListCell(R[K], r), P = a.cloneNode(!1), oe = this._nodeChange_middleLine(R[K], P, O, h, b, D, B.container), oe.endContainer && oe.ancestor.contains(oe.endContainer) && (B.ancestor = null, B.container = oe.endContainer), this._setCommonListStyle(oe.ancestor, null);
        P = a.cloneNode(!1), z = this._nodeChange_startLine(R[0], P, O, y, C, h, b, D, $, X, B.container), z.endContainer && (B.ancestor = null, B.container = z.endContainer), A <= 0 ? B = z : B.container || (B.ancestor = null, B.container = z.container, B.offset = z.container.textContent.length), this._setCommonListStyle(z.ancestor, null), this._setCommonListStyle(B.ancestor || o.getFormatElement(B.container), null);
      }
      this.controllersOff(), this.setRange(z.container, z.offset, B.container, B.offset), this.history.push(!1);
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
      const f = o.getArrayItem(a.childNodes, function(I) {
        return !o.isBreak(I);
      }, !0), m = a.style, v = [], b = [], h = o.getValues(m);
      for (let I = 0, E = this._listKebab.length; I < E; I++)
        h.indexOf(this._listKebab[I]) > -1 && r.indexOf(this._listKebab[I]) > -1 && (v.push(this._listCamel[I]), b.push(this._listKebab[I]));
      if (!v.length) return;
      const y = o.createElement("SPAN");
      for (let I = 0, E = v.length; I < E; I++)
        y.style[v[I]] = m[b[I]], m.removeProperty(b[I]);
      let C = y.cloneNode(!1), w = null, S = !1;
      for (let I = 0, E = f.length, z, B; I < E; I++)
        z = f[I], !n._textTagsMap[z.nodeName.toLowerCase()] && (B = o.getValues(z.style), B.length === 0 || v.some(function(P) {
          return B.indexOf(P) === -1;
        }) && B.some(function(P) {
        }) ? (w = z.nextSibling, C.appendChild(z)) : C.childNodes.length > 0 && (a.insertBefore(C, w), C = y.cloneNode(!1), w = null, S = !0));
      return C.childNodes.length > 0 && (a.insertBefore(C, w), S = !0), m.length || a.removeAttribute("style"), S;
    },
    /**
     * @description If certain styles are applied to all child nodes of the list cell, the style of the list cell is also changed. (bold, color, size)
     * @param {Element} el List cell element. <li>
     * @param {Element|null} child Variable for recursive call. ("null" on the first call)
     * @private
     */
    _setCommonListStyle: function(a, r) {
      if (!o.isListCell(a)) return;
      const f = o.getArrayItem((r || a).childNodes, function(C) {
        return !o.isBreak(C);
      }, !0);
      if (r = f[0], !r || f.length > 1 || r.nodeType !== 1) return;
      const m = r.style, v = a.style, b = r.nodeName.toLowerCase();
      let h = !1;
      n._textTagsMap[b] === n._defaultCommand.bold.toLowerCase() && (v.fontWeight = "bold"), n._textTagsMap[b] === n._defaultCommand.italic.toLowerCase() && (v.fontStyle = "italic");
      const y = o.getValues(m);
      if (y.length > 0)
        for (let C = 0, w = this._listCamel.length; C < w; C++)
          y.indexOf(this._listKebab[C]) > -1 && (v[this._listCamel[C]] = m[this._listCamel[C]], m.removeProperty(this._listKebab[C]), h = !0);
      if (this._setCommonListStyle(a, r), !!h && !m.length) {
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
    _stripRemoveNode: function(a) {
      const r = a.parentNode;
      if (!a || a.nodeType === 3 || !r) return;
      const f = a.childNodes;
      for (; f[0]; )
        r.insertBefore(f[0], a);
      r.removeChild(a);
    },
    /**
     * @description Return the parent maintained tag. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_getMaintainedNode: function(a, r, f) {
      return !f || a ? null : this.getParentElement(f, this._isMaintainedNode.bind(this)) || (r ? null : this.getParentElement(f, this._isSizeNode.bind(this)));
    },
    /**
     * @description Check if element is a tag that should be persisted. (bind and use a util object)
     * @param {Element} element Element
     * @returns {Element}
     * @private
     */
    _util_isMaintainedNode: function(a, r, f) {
      if (!f || a || f.nodeType !== 1) return !1;
      const m = this._isMaintainedNode(f);
      return this.getParentElement(f, this._isMaintainedNode.bind(this)) ? m : m || (r ? !1 : this._isSizeNode(f));
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
    _nodeChange_oneLine: function(a, r, f, m, v, b, h, y, C, w, S, I, E) {
      let z = m.parentNode;
      for (; !z.nextSibling && !z.previousSibling && !o.isFormatElement(z.parentNode) && !o.isWysiwygDiv(z.parentNode) && z.nodeName !== r.nodeName; )
        z = z.parentNode;
      if (!C && z === b.parentNode && z.nodeName === r.nodeName && o.onlyZeroWidthSpace(m.textContent.slice(0, v)) && o.onlyZeroWidthSpace(b.textContent.slice(h))) {
        const Ce = z.childNodes;
        let Oe = !0;
        for (let Te = 0, gt = Ce.length, je, Ge, He, ke; Te < gt; Te++) {
          if (je = Ce[Te], ke = !o.onlyZeroWidthSpace(je), je === m) {
            Ge = !0;
            continue;
          }
          if (je === b) {
            He = !0;
            continue;
          }
          if (!Ge && ke || Ge && He && ke) {
            Oe = !1;
            break;
          }
        }
        if (Oe)
          return o.copyTagAttributes(z, r), {
            ancestor: a,
            startContainer: m,
            startOffset: v,
            endContainer: b,
            endOffset: h
          };
      }
      S.v = !1;
      const B = a, P = [r], U = a.cloneNode(!1), V = m === b;
      let M = m, H = v, D = b, O = h, R = !1, F = !1, A, T, Y, $, X;
      const j = c.RegExp;
      function K(Ce) {
        const Oe = new j("(?:;|^|\\s)(?:" + $ + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let Te = "";
        return Oe && Ce.style.cssText.length > 0 && (Te = Oe.test(Ce.style.cssText)), !Te;
      }
      if (function Ce(Oe, Te) {
        const gt = Oe.childNodes;
        for (let je = 0, Ge = gt.length, He; je < Ge; je++) {
          let ke = gt[je];
          if (!ke) continue;
          let Lt = Te, st;
          if (!R && ke === M) {
            let Ye = U;
            X = I(ke);
            const De = o.createTextNode(M.nodeType === 1 ? "" : M.substringData(0, H)), We = o.createTextNode(
              M.nodeType === 1 ? "" : M.substringData(
                H,
                V && O >= H ? O - H : M.data.length - H
              )
            );
            if (X) {
              const Nt = I(Te);
              if (Nt && Nt.parentNode !== Ye) {
                let rt = Nt, Ot = null;
                for (; rt.parentNode !== Ye; ) {
                  for (Te = Ot = rt.parentNode.cloneNode(!1); rt.childNodes[0]; )
                    Ot.appendChild(rt.childNodes[0]);
                  rt.appendChild(Ot), rt = rt.parentNode;
                }
                rt.parentNode.appendChild(Nt);
              }
              X = X.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(De) || Te.appendChild(De);
            const Ve = I(Te);
            for (Ve && (X = Ve), X && (Ye = X), T = ke, A = [], $ = ""; T !== Ye && T !== B && T !== null; )
              He = E(T) ? null : f(T), He && T.nodeType === 1 && K(T) && (A.push(He), $ += T.style.cssText.substr(0, T.style.cssText.indexOf(":")) + "|"), T = T.parentNode;
            const zt = A.pop() || We;
            for (Y = T = zt; A.length > 0; )
              T = A.pop(), Y.appendChild(T), Y = T;
            if (r.appendChild(zt), Ye.appendChild(r), X && !I(D) && (r = r.cloneNode(!1), U.appendChild(r), P.push(r)), M = We, H = 0, R = !0, T !== We && T.appendChild(M), !V) continue;
          }
          if (!F && ke === D) {
            X = I(ke);
            const Ye = o.createTextNode(D.nodeType === 1 ? "" : D.substringData(O, D.length - O)), De = o.createTextNode(V || D.nodeType === 1 ? "" : D.substringData(0, O));
            if (X ? X = X.cloneNode(!1) : E(r.parentNode) && !X && (r = r.cloneNode(!1), U.appendChild(r), P.push(r)), !o.onlyZeroWidthSpace(Ye)) {
              T = ke, $ = "", A = [];
              const Ve = [];
              for (; T !== U && T !== B && T !== null; )
                T.nodeType === 1 && K(T) && (E(T) ? Ve.push(T.cloneNode(!1)) : A.push(T.cloneNode(!1)), $ += T.style.cssText.substr(0, T.style.cssText.indexOf(":")) + "|"), T = T.parentNode;
              for (A = A.concat(Ve), st = Y = T = A.pop() || Ye; A.length > 0; )
                T = A.pop(), Y.appendChild(T), Y = T;
              U.appendChild(st), T.textContent = Ye.data;
            }
            if (X && st) {
              const Ve = I(st);
              Ve && (X = Ve);
            }
            for (T = ke, A = [], $ = ""; T !== U && T !== B && T !== null; )
              He = E(T) ? null : f(T), He && T.nodeType === 1 && K(T) && (A.push(He), $ += T.style.cssText.substr(0, T.style.cssText.indexOf(":")) + "|"), T = T.parentNode;
            const We = A.pop() || De;
            for (Y = T = We; A.length > 0; )
              T = A.pop(), Y.appendChild(T), Y = T;
            X ? (r = r.cloneNode(!1), r.appendChild(We), X.insertBefore(r, X.firstChild), U.appendChild(X), P.push(r), X = null) : r.appendChild(We), D = De, O = De.data.length, F = !0, !y && w && (r = De, De.textContent = o.zeroWidthSpace), T !== De && T.appendChild(D);
            continue;
          }
          if (R) {
            if (ke.nodeType === 1 && !o.isBreak(ke)) {
              o._isIgnoreNodeChange(ke) ? (U.appendChild(ke.cloneNode(!0)), w || (r = r.cloneNode(!1), U.appendChild(r), P.push(r))) : Ce(ke, ke);
              continue;
            }
            T = ke, A = [], $ = "";
            const Ye = [];
            for (; T.parentNode !== null && T !== B && T !== r; )
              He = F ? T.cloneNode(!1) : f(T), T.nodeType === 1 && !o.isBreak(ke) && He && K(T) && (E(T) ? X || Ye.push(He) : A.push(He), $ += T.style.cssText.substr(0, T.style.cssText.indexOf(":")) + "|"), T = T.parentNode;
            A = A.concat(Ye);
            const De = A.pop() || ke;
            for (Y = T = De; A.length > 0; )
              T = A.pop(), Y.appendChild(T), Y = T;
            if (E(r.parentNode) && !E(De) && !o.onlyZeroWidthSpace(r) && (r = r.cloneNode(!1), U.appendChild(r), P.push(r)), !F && !X && E(De)) {
              r = r.cloneNode(!1);
              const We = De.childNodes;
              for (let Ve = 0, zt = We.length; Ve < zt; Ve++)
                r.appendChild(We[Ve]);
              De.appendChild(r), U.appendChild(De), P.push(r), r.children.length > 0 ? Te = T : Te = r;
            } else De === ke ? F ? Te = U : Te = r : F ? (U.appendChild(De), Te = T) : (r.appendChild(De), Te = T);
            if (X && ke.nodeType === 3)
              if (I(ke)) {
                const We = o.getParentElement(Te, (function(Ve) {
                  return this._isMaintainedNode(Ve.parentNode) || Ve.parentNode === U;
                }).bind(o));
                X.appendChild(We), r = We.cloneNode(!1), P.push(r), U.appendChild(r);
              } else
                X = null;
          }
          st = ke.cloneNode(!1), Te.appendChild(st), ke.nodeType === 1 && !o.isBreak(ke) && (Lt = st), Ce(ke, Lt);
        }
      }(a, U), C && !y && !S.v)
        return {
          ancestor: a,
          startContainer: m,
          startOffset: v,
          endContainer: b,
          endOffset: h
        };
      if (y = y && C, y)
        for (let Ce = 0; Ce < P.length; Ce++) {
          let Oe = P[Ce], Te, gt, je;
          if (w)
            Te = o.createTextNode(o.zeroWidthSpace), U.replaceChild(Te, Oe);
          else {
            const Ge = Oe.childNodes;
            for (gt = Ge[0]; Ge[0]; )
              je = Ge[0], U.insertBefore(je, Oe);
            o.removeItem(Oe);
          }
          Ce === 0 && (w ? M = D = Te : (M = gt, D = je));
        }
      else {
        if (C)
          for (let Ce = 0; Ce < P.length; Ce++)
            this._stripRemoveNode(P[Ce]);
        w && (M = D = r);
      }
      o.removeEmptyNode(U, r, !1), w && (H = M.textContent.length, O = D.textContent.length);
      const oe = y || D.textContent.length === 0;
      !o.isBreak(D) && D.textContent.length === 0 && (o.removeItem(D), D = M), O = oe ? D.textContent.length : O;
      const me = { s: 0, e: 0 }, ve = o.getNodePath(M, U, me), be = !D.parentNode;
      be && (D = M);
      const he = { s: 0, e: 0 }, Ae = o.getNodePath(D, U, !be && !oe ? he : null);
      H += me.s, O = w ? H : be ? M.textContent.length : oe ? O + me.s : O + he.s;
      const qe = o.mergeSameTags(U, [ve, Ae], !0);
      return a.parentNode.replaceChild(U, a), M = o.getNodeFromPath(ve, U), D = o.getNodeFromPath(Ae, U), {
        ancestor: U,
        startContainer: M,
        startOffset: H + qe[0],
        endContainer: D,
        endOffset: O + qe[1]
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
    _nodeChange_startLine: function(a, r, f, m, v, b, h, y, C, w, S) {
      let I = m.parentNode;
      for (; !I.nextSibling && !I.previousSibling && !o.isFormatElement(I.parentNode) && !o.isWysiwygDiv(I.parentNode) && I.nodeName !== r.nodeName; )
        I = I.parentNode;
      if (!h && I.nodeName === r.nodeName && !o.isFormatElement(I) && !I.nextSibling && o.onlyZeroWidthSpace(m.textContent.slice(0, v))) {
        let R = !0, F = m.previousSibling;
        for (; F; ) {
          if (!o.onlyZeroWidthSpace(F)) {
            R = !1;
            break;
          }
          F = F.previousSibling;
        }
        if (R)
          return o.copyTagAttributes(I, r), {
            ancestor: a,
            container: m,
            offset: v
          };
      }
      y.v = !1;
      const E = a, z = [r], B = a.cloneNode(!1);
      let P = m, U = v, V = !1, M, H, D, O;
      if (function R(F, A) {
        const T = F.childNodes;
        for (let Y = 0, $ = T.length, X, j; Y < $; Y++) {
          const K = T[Y];
          if (!K) continue;
          let oe = A;
          if (V && !o.isBreak(K)) {
            if (K.nodeType === 1) {
              if (o._isIgnoreNodeChange(K)) {
                if (r = r.cloneNode(!1), j = K.cloneNode(!0), B.appendChild(j), B.appendChild(r), z.push(r), S && K.contains(S)) {
                  const he = o.getNodePath(S, K);
                  S = o.getNodeFromPath(he, j);
                }
              } else
                R(K, K);
              continue;
            }
            H = K, M = [];
            const me = [];
            for (; H.parentNode !== null && H !== E && H !== r; )
              X = f(H), H.nodeType === 1 && X && (w(H) ? O || me.push(X) : M.push(X)), H = H.parentNode;
            M = M.concat(me);
            const ve = M.length > 0, be = M.pop() || K;
            for (D = H = be; M.length > 0; )
              H = M.pop(), D.appendChild(H), D = H;
            if (w(r.parentNode) && !w(be) && (r = r.cloneNode(!1), B.appendChild(r), z.push(r)), !O && w(be)) {
              r = r.cloneNode(!1);
              const he = be.childNodes;
              for (let Ae = 0, qe = he.length; Ae < qe; Ae++)
                r.appendChild(he[Ae]);
              be.appendChild(r), B.appendChild(be), A = w(H) ? r : H, z.push(r);
            } else ve ? (r.appendChild(be), A = H) : A = r;
            if (O && K.nodeType === 3)
              if (C(K)) {
                const he = o.getParentElement(A, (function(Ae) {
                  return this._isMaintainedNode(Ae.parentNode) || Ae.parentNode === B;
                }).bind(o));
                O.appendChild(he), r = he.cloneNode(!1), z.push(r), B.appendChild(r);
              } else
                O = null;
          }
          if (!V && K === P) {
            let me = B;
            O = C(K);
            const ve = o.createTextNode(P.nodeType === 1 ? "" : P.substringData(0, U)), be = o.createTextNode(P.nodeType === 1 ? "" : P.substringData(U, P.length - U));
            if (O) {
              const qe = C(A);
              if (qe && qe.parentNode !== me) {
                let Ce = qe, Oe = null;
                for (; Ce.parentNode !== me; ) {
                  for (A = Oe = Ce.parentNode.cloneNode(!1); Ce.childNodes[0]; )
                    Oe.appendChild(Ce.childNodes[0]);
                  Ce.appendChild(Oe), Ce = Ce.parentNode;
                }
                Ce.parentNode.appendChild(qe);
              }
              O = O.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(ve) || A.appendChild(ve);
            const he = C(A);
            for (he && (O = he), O && (me = O), H = A, M = []; H !== me && H !== null; )
              X = f(H), H.nodeType === 1 && X && M.push(X), H = H.parentNode;
            const Ae = M.pop() || A;
            for (D = H = Ae; M.length > 0; )
              H = M.pop(), D.appendChild(H), D = H;
            Ae !== A ? (r.appendChild(Ae), A = H) : A = r, o.isBreak(K) && r.appendChild(K.cloneNode(!1)), me.appendChild(r), P = be, U = 0, V = !0, A.appendChild(P);
            continue;
          }
          X = V ? f(K) : K.cloneNode(!1), X && (A.appendChild(X), K.nodeType === 1 && !o.isBreak(K) && (oe = X)), R(K, oe);
        }
      }(a, B), h && !b && !y.v)
        return {
          ancestor: a,
          container: m,
          offset: v,
          endContainer: S
        };
      if (b = b && h, b)
        for (let R = 0; R < z.length; R++) {
          let F = z[R];
          const A = F.childNodes, T = A[0];
          for (; A[0]; )
            B.insertBefore(A[0], F);
          o.removeItem(F), R === 0 && (P = T);
        }
      else if (h) {
        r = r.firstChild;
        for (let R = 0; R < z.length; R++)
          this._stripRemoveNode(z[R]);
      }
      if (!b && B.childNodes.length === 0)
        a.childNodes ? P = a.childNodes[0] : (P = o.createTextNode(o.zeroWidthSpace), a.appendChild(P));
      else {
        o.removeEmptyNode(B, r, !1), o.onlyZeroWidthSpace(B.textContent) && (P = B.firstChild, U = 0);
        const R = { s: 0, e: 0 }, F = o.getNodePath(P, B, R);
        U += R.s;
        const A = o.mergeSameTags(B, [F], !0);
        a.parentNode.replaceChild(B, a), P = o.getNodeFromPath(F, B), U += A[0];
      }
      return {
        ancestor: B,
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
    _nodeChange_middleLine: function(a, r, f, m, v, b, h) {
      if (!v) {
        let S = null;
        h && a.contains(h) && (S = o.getNodePath(h, a));
        const I = a.cloneNode(!0), E = r.nodeName, z = r.style.cssText, B = r.className;
        let P = I.childNodes, U = 0, V = P.length;
        for (let M; U < V && (M = P[U], M.nodeType !== 3); U++)
          if (M.nodeName === E)
            M.style.cssText += z, o.addClass(M, B);
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
          return a.innerHTML = I.innerHTML, {
            ancestor: a,
            endContainer: S ? o.getNodeFromPath(S, a) : null
          };
      }
      b.v = !1;
      const y = a.cloneNode(!1), C = [r];
      let w = !0;
      if (function S(I, E) {
        const z = I.childNodes;
        for (let B = 0, P = z.length, U, V; B < P; B++) {
          let M = z[B];
          if (!M) continue;
          let H = E;
          if (!o.isBreak(M) && o._isIgnoreNodeChange(M)) {
            if (r.childNodes.length > 0 && (y.appendChild(r), r = r.cloneNode(!1)), V = M.cloneNode(!0), y.appendChild(V), y.appendChild(r), C.push(r), E = r, h && M.contains(h)) {
              const D = o.getNodePath(h, M);
              h = o.getNodeFromPath(D, V);
            }
            continue;
          } else
            U = f(M), U && (w = !1, E.appendChild(U), M.nodeType === 1 && (H = U));
          o.isBreak(M) || S(M, H);
        }
      }(a, r), w || v && !m && !b.v) return { ancestor: a, endContainer: h };
      if (y.appendChild(r), m && v)
        for (let S = 0; S < C.length; S++) {
          let I = C[S];
          const E = I.childNodes;
          for (; E[0]; )
            y.insertBefore(E[0], I);
          o.removeItem(I);
        }
      else if (v) {
        r = r.firstChild;
        for (let S = 0; S < C.length; S++)
          this._stripRemoveNode(C[S]);
      }
      return o.removeEmptyNode(y, r, !1), o.mergeSameTags(y, null, !0), a.parentNode.replaceChild(y, a), { ancestor: y, endContainer: h };
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
    _nodeChange_endLine: function(a, r, f, m, v, b, h, y, C, w) {
      let S = m.parentNode;
      for (; !S.nextSibling && !S.previousSibling && !o.isFormatElement(S.parentNode) && !o.isWysiwygDiv(S.parentNode) && S.nodeName !== r.nodeName; )
        S = S.parentNode;
      if (!h && S.nodeName === r.nodeName && !o.isFormatElement(S) && !S.previousSibling && o.onlyZeroWidthSpace(m.textContent.slice(v))) {
        let O = !0, R = m.nextSibling;
        for (; R; ) {
          if (!o.onlyZeroWidthSpace(R)) {
            O = !1;
            break;
          }
          R = R.nextSibling;
        }
        if (O)
          return o.copyTagAttributes(S, r), {
            ancestor: a,
            container: m,
            offset: v
          };
      }
      y.v = !1;
      const I = a, E = [r], z = a.cloneNode(!1);
      let B = m, P = v, U = !1, V, M, H, D;
      if (function O(R, F) {
        const A = R.childNodes;
        for (let T = A.length - 1, Y; 0 <= T; T--) {
          const $ = A[T];
          if (!$) continue;
          let X = F;
          if (U && !o.isBreak($)) {
            if ($.nodeType === 1) {
              if (o._isIgnoreNodeChange($)) {
                r = r.cloneNode(!1);
                const me = $.cloneNode(!0);
                z.insertBefore(me, F), z.insertBefore(r, me), E.push(r);
              } else
                O($, $);
              continue;
            }
            M = $, V = [];
            const j = [];
            for (; M.parentNode !== null && M !== I && M !== r; )
              Y = f(M), Y && M.nodeType === 1 && (w(M) ? D || j.push(Y) : V.push(Y)), M = M.parentNode;
            V = V.concat(j);
            const K = V.length > 0, oe = V.pop() || $;
            for (H = M = oe; V.length > 0; )
              M = V.pop(), H.appendChild(M), H = M;
            if (w(r.parentNode) && !w(oe) && (r = r.cloneNode(!1), z.insertBefore(r, z.firstChild), E.push(r)), !D && w(oe)) {
              r = r.cloneNode(!1);
              const me = oe.childNodes;
              for (let ve = 0, be = me.length; ve < be; ve++)
                r.appendChild(me[ve]);
              oe.appendChild(r), z.insertBefore(oe, z.firstChild), E.push(r), r.children.length > 0 ? F = M : F = r;
            } else K ? (r.insertBefore(oe, r.firstChild), F = M) : F = r;
            if (D && $.nodeType === 3)
              if (C($)) {
                const me = o.getParentElement(F, (function(ve) {
                  return this._isMaintainedNode(ve.parentNode) || ve.parentNode === z;
                }).bind(o));
                D.appendChild(me), r = me.cloneNode(!1), E.push(r), z.insertBefore(r, z.firstChild);
              } else
                D = null;
          }
          if (!U && $ === B) {
            D = C($);
            const j = o.createTextNode(B.nodeType === 1 ? "" : B.substringData(P, B.length - P)), K = o.createTextNode(B.nodeType === 1 ? "" : B.substringData(0, P));
            if (D) {
              D = D.cloneNode(!1);
              const me = C(F);
              if (me && me.parentNode !== z) {
                let ve = me, be = null;
                for (; ve.parentNode !== z; ) {
                  for (F = be = ve.parentNode.cloneNode(!1); ve.childNodes[0]; )
                    be.appendChild(ve.childNodes[0]);
                  ve.appendChild(be), ve = ve.parentNode;
                }
                ve.parentNode.insertBefore(me, ve.parentNode.firstChild);
              }
              D = D.cloneNode(!1);
            } else w(r.parentNode) && !D && (r = r.cloneNode(!1), z.appendChild(r), E.push(r));
            for (o.onlyZeroWidthSpace(j) || F.insertBefore(j, F.firstChild), M = F, V = []; M !== z && M !== null; )
              Y = w(M) ? null : f(M), Y && M.nodeType === 1 && V.push(Y), M = M.parentNode;
            const oe = V.pop() || F;
            for (H = M = oe; V.length > 0; )
              M = V.pop(), H.appendChild(M), H = M;
            oe !== F ? (r.insertBefore(oe, r.firstChild), F = M) : F = r, o.isBreak($) && r.appendChild($.cloneNode(!1)), D ? (D.insertBefore(r, D.firstChild), z.insertBefore(D, z.firstChild), D = null) : z.insertBefore(r, z.firstChild), B = K, P = K.data.length, U = !0, F.insertBefore(B, F.firstChild);
            continue;
          }
          Y = U ? f($) : $.cloneNode(!1), Y && (F.insertBefore(Y, F.firstChild), $.nodeType === 1 && !o.isBreak($) && (X = Y)), O($, X);
        }
      }(a, z), h && !b && !y.v)
        return {
          ancestor: a,
          container: m,
          offset: v
        };
      if (b = b && h, b)
        for (let O = 0; O < E.length; O++) {
          let R = E[O];
          const F = R.childNodes;
          let A = null;
          for (; F[0]; )
            A = F[0], z.insertBefore(A, R);
          o.removeItem(R), O === E.length - 1 && (B = A, P = A.textContent.length);
        }
      else if (h) {
        r = r.firstChild;
        for (let O = 0; O < E.length; O++)
          this._stripRemoveNode(E[O]);
      }
      if (!b && z.childNodes.length === 0)
        a.childNodes ? B = a.childNodes[0] : (B = o.createTextNode(o.zeroWidthSpace), a.appendChild(B));
      else {
        if (!h && r.textContent.length === 0)
          return o.removeEmptyNode(z, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        o.removeEmptyNode(z, r, !1), o.onlyZeroWidthSpace(z.textContent) ? (B = z.firstChild, P = B.textContent.length) : o.onlyZeroWidthSpace(B) && (B = r, P = 1);
        const O = { s: 0, e: 0 }, R = o.getNodePath(B, z, O);
        P += O.s;
        const F = o.mergeSameTags(z, [R], !0);
        a.parentNode.replaceChild(z, a), B = o.getNodeFromPath(R, z), P += F[0];
      }
      return {
        ancestor: z,
        container: B,
        offset: B.nodeType === 1 && P === 1 ? B.childNodes.length : P
      };
    },
    /**
     * @description Run plugin calls and basic commands.
     * @param {String} command Command string
     * @param {String} display Display type string ('command', 'submenu', 'dialog', 'container')
     * @param {Element} target The element of command button
     */
    actionCall: function(a, r, f) {
      if (r) {
        if (/more/i.test(r)) {
          if (f !== this._moreLayerActiveButton) {
            const m = e.element.toolbar.querySelector("." + a);
            m && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = f, m.style.display = "block", g._showToolbarBalloon(), g._showToolbarInline()), o.addClass(f, "on");
          } else
            e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")) && (this.moreLayerOff(), g._showToolbarBalloon(), g._showToolbarInline());
          return;
        }
        if (/container/.test(r) && (this._menuTray[a] === null || f !== this.containerActiveButton)) {
          this.callPlugin(a, this.containerOn.bind(this, f), f);
          return;
        }
        if (this.isReadOnly && o.arrayIncludes(this.resizingDisabledButtons, f)) return;
        if (/submenu/.test(r) && (this._menuTray[a] === null || f !== this.submenuActiveButton)) {
          this.callPlugin(a, this.submenuOn.bind(this, f), f);
          return;
        } else if (/dialog/.test(r)) {
          this.callPlugin(a, this.plugins[a].open.bind(this), f);
          return;
        } else /command/.test(r) ? this.callPlugin(a, this.plugins[a].action.bind(this), f) : /fileBrowser/.test(r) && this.callPlugin(a, this.plugins[a].open.bind(this, null), f);
      } else a && this.commandHandler(f, a);
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
            const f = e.element.wysiwyg;
            let m = o.getChildElement(f.firstChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !1) || f.firstChild, v = o.getChildElement(f.lastChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !0) || f.lastChild;
            if (!m || !v) return;
            if (o.isMedia(m)) {
              const C = this.getFileComponent(m), w = o.createElement("BR"), S = o.createElement(n.defaultTag);
              S.appendChild(w), m = C ? C.component : m, m.parentNode.insertBefore(S, m), m = w;
            }
            if (o.isMedia(v)) {
              const C = o.createElement("BR"), w = o.createElement(n.defaultTag);
              w.appendChild(C), f.appendChild(w), v = C;
            }
            g._showToolbarBalloon(this.setRange(m, 0, v, v.textContent.length));
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
            else if (this._variable.isChanged && typeof _.save == "function")
              _.save();
            else
              throw Error("[SUNEDITOR.core.commandHandler.fail] Please register call back function in creation option. (callBackSave : Function)");
            this._variable.isChanged = !1, e.tool.save && e.tool.save.setAttribute("disabled", !0);
            break;
          default:
            r = n._defaultCommand[r.toLowerCase()] || r, this.commandMap[r] || (this.commandMap[r] = a);
            const b = this._variable.currentNodesMap, h = b.indexOf(r) > -1 ? null : o.createElement(r);
            let y = r;
            /^SUB$/i.test(r) && b.indexOf("SUP") > -1 ? y = "SUP" : /^SUP$/i.test(r) && b.indexOf("SUB") > -1 && (y = "SUB"), this.nodeChange(h, this._commandMapStyles[r] || null, [y], !1), this.focus();
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
      const r = this.getRange(), f = this.getSelectedElements(null), m = [], v = a !== "indent", b = n.rtl ? "marginRight" : "marginLeft";
      let h = r.startContainer, y = r.endContainer, C = r.startOffset, w = r.endOffset;
      for (let S = 0, I = f.length, E, z; S < I; S++)
        E = f[S], !o.isListCell(E) || !this.plugins.list ? (z = /\d+/.test(E.style[b]) ? o.getNumber(E.style[b], 0) : 0, v ? z -= 25 : z += 25, o.setStyle(E, b, z <= 0 ? "" : z + "px")) : (v || E.previousElementSibling) && m.push(E);
      m.length > 0 && this.plugins.list.editInsideList.call(this, v, m), this.effectNode = null, this.setRange(h, C, y, w), this.history.push(!1);
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
      this.controllersOff(), o.setDisabledButtons(!a, this.codeViewDisabledButtons), a ? (o.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), n.height === "auto" && !n.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(n.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, g._hideToolbar())), this.nativeFocus(), o.removeClass(this._styleCommandMap.codeView, "active"), o.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : n.height === "auto" && !n.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), n.codeMirrorEditor && n.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, g._showToolbarInline())), this._variable._range = null, e.element.code.focus(), o.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && o.setDisabledButtons(!0, this.resizingDisabledButtons), typeof _.toggleCodeView == "function" && _.toggleCodeView(this._variable.isCodeView, this);
    },
    /**
     * @description Convert the data of the code view and put it in the WYSIWYG area.
     * @private
     */
    _setCodeDataToEditor: function() {
      const a = this._getCodeView();
      if (n.fullPage) {
        const r = this._parser.parseFromString(a, "text/html");
        if (!this.options.__allowedScriptTag) {
          const v = r.head.children;
          for (let b = 0, h = v.length; b < h; b++)
            /^script$/i.test(v[b].tagName) && (r.head.removeChild(v[b]), b--, h--);
        }
        let f = r.head.innerHTML;
        (!r.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !r.head.querySelector("style")) && (f += o._setIframeCssTags(this.options)), this._wd.head.innerHTML = f, this._wd.body.innerHTML = this.convertContentsForEditor(r.body.innerHTML);
        const m = r.body.attributes;
        for (let v = 0, b = m.length; v < b; v++)
          m[v].name !== "contenteditable" && this._wd.body.setAttribute(m[v].name, m[v].value);
        if (!o.hasClass(this._wd.body, "sun-editor-editable")) {
          const v = n._editableClass.split(" ");
          for (let b = 0; b < v.length; b++)
            o.addClass(this._wd.body, n._editableClass[b]);
        }
      } else
        e.element.wysiwyg.innerHTML = a.length > 0 ? this.convertContentsForEditor(a) : "<" + n.defaultTag + "><br></" + n.defaultTag + ">";
    },
    /**
     * @description Convert the data of the WYSIWYG area and put it in the code view area.
     * @private
     */
    _setEditorDataToCodeView: function() {
      const a = this.convertHTMLForCodeView(e.element.wysiwyg, !1);
      let r = "";
      if (n.fullPage) {
        const f = o.getAttributesToString(this._wd.body, null);
        r = `<!DOCTYPE html>
<html>
` + this._wd.head.outerHTML.replace(/>(?!\n)/g, `>
`) + "<body " + f + `>
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
      const r = e.element.topArea, f = e.element.toolbar, m = e.element.editorArea, v = e.element.wysiwygFrame, b = e.element.code, h = this._variable;
      this.controllersOff();
      const y = f.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      h.isFullScreen ? (h.isFullScreen = !1, v.style.cssText = h._wysiwygOriginCssText, b.style.cssText = h._codeOriginCssText, f.style.cssText = "", m.style.cssText = h._editorAreaOriginCssText, r.style.cssText = h._originCssText, u.body.style.overflow = h._bodyOverflow, n.height === "auto" && !n.codeMirrorEditor && g._codeViewAutoHeight(), n.toolbarContainer && n.toolbarContainer.appendChild(f), n.stickyToolbar > -1 && o.removeClass(f, "se-toolbar-sticky"), h._fullScreenAttrs.sticky && !n.toolbarContainer && (h._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", o.addClass(f, "se-toolbar-sticky")), this._isInline = h._fullScreenAttrs.inline, this._isBalloon = h._fullScreenAttrs.balloon, this._isInline && g._showToolbarInline(), n.toolbarContainer && o.removeClass(f, "se-toolbar-balloon"), g.onScroll_window(), a && o.changeElement(a.firstElementChild, p.expansion), e.element.topArea.style.marginTop = "", o.removeClass(this._styleCommandMap.fullScreen, "active")) : (h.isFullScreen = !0, h._fullScreenAttrs.inline = this._isInline, h._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), n.toolbarContainer && e.element.relative.insertBefore(f, m), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.maxWidth = "100%", r.style.height = "100%", r.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (h._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", o.removeClass(f, "se-toolbar-sticky")), h._bodyOverflow = u.body.style.overflow, u.body.style.overflow = "hidden", h._editorAreaOriginCssText = m.style.cssText, h._wysiwygOriginCssText = v.style.cssText, h._codeOriginCssText = b.style.cssText, m.style.cssText = f.style.cssText = "", v.style.cssText = (v.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + n._editorStyles.editor, b.style.cssText = (b.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], f.style.width = v.style.height = b.style.height = "100%", f.style.position = "relative", f.style.display = "block", h.innerHeight_fullScreen = c.innerHeight - f.offsetHeight, m.style.height = h.innerHeight_fullScreen - n.fullScreenOffset + "px", a && o.changeElement(a.firstElementChild, p.reduction), n.iframe && n.height === "auto" && (m.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = n.fullScreenOffset + "px", o.addClass(this._styleCommandMap.fullScreen, "active")), y && _.toolbar.hide(), typeof _.toggleFullScreen == "function" && _.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const a = o.createElement("IFRAME");
      a.style.display = "none", u.body.appendChild(a);
      const r = n.printTemplate ? n.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), f = o.getIframeDocument(a), m = this._wd;
      if (n.iframe) {
        const v = n._printClass !== null ? 'class="' + n._printClass + '"' : n.fullPage ? o.getAttributesToString(m.body, ["contenteditable"]) : 'class="' + n._editableClass + '"';
        f.write(
          "<!DOCTYPE html><html><head>" + m.head.innerHTML + "</head><body " + v + ">" + r + "</body></html>"
        );
      } else {
        const v = u.head.getElementsByTagName("link"), b = u.head.getElementsByTagName("style");
        let h = "";
        for (let y = 0, C = v.length; y < C; y++)
          h += v[y].outerHTML;
        for (let y = 0, C = b.length; y < C; y++)
          h += b[y].outerHTML;
        f.write(
          "<!DOCTYPE html><html><head>" + h + '</head><body class="' + (n._printClass !== null ? n._printClass : n._editableClass) + '">' + r + "</body></html>"
        );
      }
      this.showLoading(), c.setTimeout(function() {
        try {
          if (a.focus(), o.isIE_Edge || o.isChromium || u.documentMode || c.StyleMedia)
            try {
              a.contentWindow.document.execCommand("print", !1, null);
            } catch {
              a.contentWindow.print();
            }
          else
            a.contentWindow.print();
        } catch (v) {
          throw Error("[SUNEDITOR.core.print.fail] error: " + v);
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
      const a = n.previewTemplate ? n.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), r = c.open("", "_blank");
      r.mimeType = "text/html";
      const f = this._wd;
      if (n.iframe) {
        const m = n._printClass !== null ? 'class="' + n._printClass + '"' : n.fullPage ? o.getAttributesToString(f.body, ["contenteditable"]) : 'class="' + n._editableClass + '"';
        r.document.write(
          "<!DOCTYPE html><html><head>" + f.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + m + ">" + a + "</body></html>"
        );
      } else {
        const m = u.head.getElementsByTagName("link"), v = u.head.getElementsByTagName("style");
        let b = "";
        for (let h = 0, y = m.length; h < y; h++)
          b += m[h].outerHTML;
        for (let h = 0, y = v.length; h < y; h++)
          b += v[h].outerHTML;
        r.document.write(
          '<!DOCTYPE html><html><head><meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><title>' + l.toolbar.preview + "</title>" + b + '</head><body class="' + (n._printClass !== null ? n._printClass : n._editableClass) + '" style="margin:10px auto !important; height:auto !important; outline:1px dashed #ccc;">' + a + "</body></html>"
        );
      }
    },
    /**
     * @description Set direction to "rtl" or "ltr".
     * @param {String} dir "rtl" or "ltr"
     */
    setDir: function(a) {
      const r = a === "rtl", f = this._prevRtl !== r;
      this._prevRtl = n.rtl = r, f && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && o.changeElement(e.tool.indent.firstElementChild, p.indent), e.tool.outdent && o.changeElement(e.tool.outdent.firstElementChild, p.outdent));
      const m = e.element;
      r ? (o.addClass(m.topArea, "se-rtl"), o.addClass(m.wysiwygFrame, "se-rtl")) : (o.removeClass(m.topArea, "se-rtl"), o.removeClass(m.wysiwygFrame, "se-rtl"));
      const v = o.getListChildren(m.wysiwyg, function(h) {
        return o.isFormatElement(h) && (h.style.marginRight || h.style.marginLeft || h.style.textAlign);
      });
      for (let h = 0, y = v.length, C, w, S; h < y; h++)
        C = v[h], S = C.style.marginRight, w = C.style.marginLeft, (S || w) && (C.style.marginRight = w, C.style.marginLeft = S), S = C.style.textAlign, S === "left" ? C.style.textAlign = "right" : S === "right" && (C.style.textAlign = "left");
      const b = e.tool;
      b.dir && (o.changeTxt(b.dir.querySelector(".se-tooltip-text"), l.toolbar[n.rtl ? "dir_ltr" : "dir_rtl"]), o.changeElement(b.dir.firstElementChild, p[n.rtl ? "dir_ltr" : "dir_rtl"])), b.dir_ltr && (r ? o.removeClass(b.dir_ltr, "active") : o.addClass(b.dir_ltr, "active")), b.dir_rtl && (r ? o.addClass(b.dir_rtl, "active") : o.removeClass(b.dir_rtl, "active"));
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
        const f = this.convertHTMLForCodeView(r, !1);
        this._setCodeView(f);
      }
    },
    /**
     * @description Sets the contents of the iframe's head tag and body tag when using the "iframe" or "fullPage" option.
     * @param {Object} ctx { head: HTML string, body: HTML string}
     */
    setIframeContents: function(a) {
      if (!n.iframe) return !1;
      a.head && (this._wd.head.innerHTML = this.options.__allowedScriptTag ? a.head : a.head.replace(this.__scriptTagRegExp, "")), a.body && (this._wd.body.innerHTML = this.convertContentsForEditor(a.body)), this._resetComponents();
    },
    /**
     * @description Gets the current contents
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {Object}
     */
    getContents: function(a) {
      const r = this.cleanHTML(e.element.wysiwyg.innerHTML, null, null), f = o.createElement("DIV");
      f.innerHTML = r;
      const m = o.getListChildren(f, function(v) {
        return v.hasAttribute("contenteditable");
      });
      for (let v = 0, b = m.length; v < b; v++)
        m[v].removeAttribute("contenteditable");
      if (n.fullPage && !a) {
        const v = o.getAttributesToString(this._wd.body, ["contenteditable"]);
        return "<!DOCTYPE html><html>" + this._wd.head.outerHTML + "<body " + v + ">" + f.innerHTML + "</body></html>";
      } else
        return f.innerHTML;
    },
    /**
     * @description Gets the current contents with containing parent div(div.sun-editor-editable).
     * <div class="sun-editor-editable">{contents}</div>
     * @param {Boolean} onlyContents Return only the contents of the body without headers when the "fullPage" option is true
     * @returns {String}
     */
    getFullContents: function(a) {
      return '<div class="sun-editor-editable' + (n.rtl ? " se-rtl" : "") + '">' + this.getContents(a) + "</div>";
    },
    /**
     * @description Returns HTML string according to tag type and configuration.
     * Use only "cleanHTML"
     * @param {Node} node Node
     * @param {Boolean} requireFormat If true, text nodes that do not have a format node is wrapped with the format tag.
     * @private
     */
    _makeLine: function(a, r) {
      const f = n.defaultTag;
      if (a.nodeType === 1) {
        if (this.__disallowedTagNameRegExp.test(a.nodeName)) return "";
        if (/__se__tag/.test(a.className)) return a.outerHTML;
        const m = o.getListChildNodes(a, function(v) {
          return o.isSpanWithoutAttr(v) && !o.getParentElement(v, o.isNotCheckingNode);
        }) || [];
        for (let v = m.length - 1; v >= 0; v--)
          m[v].outerHTML = m[v].innerHTML;
        return !r || o.isFormatElement(a) || o.isRangeFormatElement(a) || o.isComponent(a) || o.isFigures(a) || o.isAnchor(a) && o.isMedia(a.firstElementChild) ? o.isSpanWithoutAttr(a) ? a.innerHTML : a.outerHTML : "<" + f + ">" + (o.isSpanWithoutAttr(a) ? a.innerHTML : a.outerHTML) + "</" + f + ">";
      }
      if (a.nodeType === 3) {
        if (!r) return o._HTMLConvertor(a.textContent);
        const m = a.textContent.split(/\n/g);
        let v = "";
        for (let b = 0, h = m.length, y; b < h; b++)
          y = m[b].trim(), y.length > 0 && (v += "<" + f + ">" + o._HTMLConvertor(y) + "</" + f + ">");
        return v;
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
      const r = n._textTagsMap;
      return a.replace(this._disallowedTextTagsRegExp, function(f, m, v, b) {
        return m + (typeof r[v] == "string" ? r[v] : v) + (b ? " " + b : "");
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
      const f = this._w.Math, m = r.match(/(\d+(?:\.\d+)?)(.+)/), v = m ? m[1] * 1 : o.fontValueMap[r], b = m ? m[2] : "rem";
      let h = v;
      switch (/em/.test(b) ? h = f.round(v / 0.0625) : b === "pt" ? h = f.round(v * 1.333) : b === "%" && (h = v / 100), a) {
        case "em":
        case "rem":
        case "%":
          return (h * 0.0625).toFixed(2) + a;
        case "pt":
          return f.floor(h / 1.333) + a;
        default:
          return h + a;
      }
    },
    _cleanStyle: function(a, r, f) {
      let m = (a.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(f) && !m && (a.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const v = (a.match(/\ssize="([^"]+)"/i) || [])[1], b = (a.match(/\sface="([^"]+)"/i) || [])[1], h = (a.match(/\scolor="([^"]+)"/i) || [])[1];
        (v || b || h) && (m = 'style="' + (v ? "font-size:" + this.util.getNumber(v / 3.333, 1) + "rem;" : "") + (b ? "font-family:" + b + ";" : "") + (h ? "color:" + h + ";" : "") + '"');
      }
      if (m) {
        r || (r = []);
        const v = m.replace(/&quot;/g, "").match(this._cleanStyleRegExp[f]);
        if (v) {
          const b = [];
          for (let h = 0, y = v.length, C; h < y; h++)
            if (C = v[h].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), C && !/inherit|initial|revert|unset/i.test(C[3])) {
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
              S !== I && b.push(C[0]);
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
    _cleanTags: function(a, r, f) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(r)) return r;
      let m = null;
      const v = f.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), b = this._attributesTagsBlacklist[v];
      r = r.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, ""), b ? r = r.replace(b, "") : r = r.replace(this._attributesBlacklistRegExp, "");
      const h = this._attributesTagsWhitelist[v];
      if (h ? m = r.match(h) : m = r.match(a ? this._attributesWhitelistRegExp : this._attributesWhitelistRegExp_all_data), a || v === "span" || v === "li" || this._cleanStyleRegExp[v])
        if (v === "a") {
          const y = r.match(/(?:(?:id|name)\s*=\s*(?:"|')[^"']*(?:"|'))/g);
          y && (m || (m = []), m.push(y[0]));
        } else (!m || !/style=/i.test(m.toString())) && ((v === "span" || v === "li") && (m = this._cleanStyle(r, m, "span")), this._cleanStyleRegExp[v] ? m = this._cleanStyle(r, m, v) : /^(P|DIV|H[1-6]|PRE)$/i.test(v) && (m = this._cleanStyle(r, m, "format")));
      else {
        const y = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        y && !m ? m = [y[0]] : y && !m.some(function(C) {
          return /^style/.test(C.trim());
        }) && m.push(y[0]);
      }
      if (o.isFigures(v)) {
        const y = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        m || (m = []), y && m.push(y[0]);
      }
      if (m)
        for (let y = 0, C = m.length, w; y < C; y++)
          w = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(m[y].trim()) ? "" : m[y], f += (/^\s/.test(w) ? "" : " ") + w;
      return f;
    },
    /**
     * @description Determines if formatting is required and returns a domTree
     * @param {Element} dom documentFragment
     * @returns {Element}
     * @private
     */
    _editFormat: function(a) {
      let r = "", f;
      const m = a.childNodes;
      for (let v = 0, b = m.length, h; v < b; v++)
        h = m[v], h.nodeType === 8 ? r += "<!-- " + h.textContent + " -->" : !o.isFormatElement(h) && !o.isRangeFormatElement(h) && !o.isComponent(h) && !/meta/i.test(h.nodeName) ? (f || (f = o.createElement(n.defaultTag)), f.appendChild(h), v--, b--) : (f && (r += f.outerHTML, f = null), r += h.outerHTML);
      return f && (r += f.outerHTML), u.createRange().createContextualFragment(r);
    },
    _convertListCell: function(a) {
      let r = "";
      for (let f = 0, m = a.length, v; f < m; f++)
        v = a[f], v.nodeType === 1 ? o.isList(v) ? r += v.innerHTML : o.isListCell(v) ? r += v.outerHTML : o.isFormatElement(v) ? r += "<li>" + (v.innerHTML.trim() || "<br>") + "</li>" : o.isRangeFormatElement(v) && !o.isTable(v) ? r += this._convertListCell(v) : r += "<li>" + v.outerHTML + "</li>" : r += "<li>" + (v.textContent || "<br>") + "</li>";
      return r;
    },
    _isFormatData: function(a) {
      let r = !1;
      for (let f = 0, m = a.length, v; f < m; f++)
        if (v = a[f], v.nodeType === 1 && !o.isTextStyleElement(v) && !o.isBreak(v) && !this.__disallowedTagNameRegExp.test(v.nodeName)) {
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
    cleanHTML: function(a, r, f) {
      if (!n.strictMode) return o.htmlCompress(a);
      a = this._deleteDisallowedTags(this._parser.parseFromString(o.htmlCompress(a), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0)).replace(/<br\/?>$/i, "");
      const m = u.createRange().createContextualFragment(a);
      try {
        o._consistencyCheckOfHTML(m, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, n.strictHTMLValidation);
      } catch (y) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + y);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const y = m.querySelectorAll(this.managedTagsInfo.query);
        for (let C = 0, w = y.length, S, I; C < w; C++) {
          I = [].slice.call(y[C].classList);
          for (let E = 0, z = I.length; E < z; E++)
            if (S = this.managedTagsInfo.map[I[E]], S) {
              S(y[C]);
              break;
            }
        }
      }
      let v = m.childNodes, b = "";
      const h = this._isFormatData(v);
      h && (v = this._editFormat(m).childNodes);
      for (let y = 0, C = v.length, w; y < C; y++) {
        if (w = v[y], this.__allowedScriptRegExp.test(w.nodeName)) {
          b += w.outerHTML;
          continue;
        }
        b += this._makeLine(w, h);
      }
      return b = o.htmlRemoveWhiteSpace(b), b ? (r && (b = b.replace(typeof r == "string" ? o.createTagsWhitelist(r) : r, "")), f && (b = b.replace(typeof f == "string" ? o.createTagsBlacklist(f) : f, ""))) : b = a, this._tagConvertor(b);
    },
    /**
     * @description Converts contents into a format that can be placed in an editor
     * @param {String} contents contents
     * @returns {String}
     */
    convertContentsForEditor: function(a) {
      if (!n.strictMode) return o.htmlCompress(a);
      a = this._deleteDisallowedTags(this._parser.parseFromString(o.htmlCompress(a), "text/html").body.innerHTML).replace(/(<[a-zA-Z0-9\-]+)[^>]*(?=>)/g, this._cleanTags.bind(this, !0));
      const r = u.createRange().createContextualFragment(a);
      try {
        o._consistencyCheckOfHTML(r, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, n.strictHTMLValidation);
      } catch (b) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + b);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const b = r.querySelectorAll(this.managedTagsInfo.query);
        for (let h = 0, y = b.length, C, w; h < y; h++) {
          w = [].slice.call(b[h].classList);
          for (let S = 0, I = w.length; S < I; S++)
            if (C = this.managedTagsInfo.map[w[S]], C) {
              C(b[h]);
              break;
            }
        }
      }
      const f = r.childNodes;
      let m = "", v = null;
      for (let b = 0, h; b < f.length; b++) {
        if (h = f[b], this.__allowedScriptRegExp.test(h.nodeName)) {
          m += h.outerHTML;
          continue;
        }
        if (!o.isFormatElement(h) && !o.isRangeFormatElement(h) && !o.isComponent(h) && !o.isFigures(h) && h.nodeType !== 8 && !/__se__tag/.test(h.className)) {
          if (v || (v = o.createElement(n.defaultTag)), v.appendChild(h), b--, f[b + 1] && !o.isFormatElement(f[b + 1]))
            continue;
          h = v, v = null;
        }
        v && (m += this._makeLine(v, !0), v = null), m += this._makeLine(h, !0);
      }
      return v && (m += this._makeLine(v, !0)), m.length === 0 ? "<" + n.defaultTag + "><br></" + n.defaultTag + ">" : (m = o.htmlRemoveWhiteSpace(m), this._tagConvertor(m));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(a, r) {
      let f = "";
      const m = c.RegExp, v = new m("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), b = typeof a == "string" ? u.createRange().createContextualFragment(a) : a, h = (function(w) {
        return this.isFormatElement(w) || this.isComponent(w);
      }).bind(o), y = r ? "" : `
`;
      let C = r ? 0 : this._variable.codeIndent * 1;
      return C = C > 0 ? new c.Array(C + 1).join(" ") : "", function w(S, I) {
        const E = S.childNodes, z = v.test(S.nodeName), B = z ? I : "";
        for (let P = 0, U = E.length, V, M, H, D, O, R; P < U; P++) {
          if (V = E[P], D = v.test(V.nodeName), M = D ? y : "", H = h(V) && !z && !/^(TH|TD)$/i.test(S.nodeName) ? y : "", V.nodeType === 8) {
            f += `
<!-- ` + V.textContent.trim() + " -->" + M;
            continue;
          }
          if (V.nodeType === 3) {
            o.isList(V.parentElement) || (f += o._HTMLConvertor(/^\n+$/.test(V.data) ? "" : V.data));
            continue;
          }
          if (V.childNodes.length === 0) {
            f += (/^HR$/i.test(V.nodeName) ? y : "") + (/^PRE$/i.test(V.parentElement.nodeName) && /^BR$/i.test(V.nodeName) ? "" : B) + V.outerHTML + M;
            continue;
          }
          V.outerHTML ? (O = V.nodeName.toLowerCase(), R = B || D ? I : "", f += (H || (z ? "" : M)) + R + V.outerHTML.match(m("<" + O + "[^>]*>", "i"))[0] + M, w(V, I + C), f += (/\n$/.test(f) ? R : "") + "</" + O + ">" + (H || M || z || /^(TH|TD)$/i.test(V.nodeName) ? y : "")) : f += new c.XMLSerializer().serializeToString(V);
        }
      }(b, ""), f.trim() + y;
    },
    /**
     * @description Add an event to document.
     * When created as an Iframe, the same event is added to the document in the Iframe.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     * @param {Boolean} useCapture Use event capture
     */
    addDocEvent: function(a, r, f) {
      u.addEventListener(a, r, f), n.iframe && this._wd.addEventListener(a, r);
    },
    /**
     * @description Remove events from document.
     * When created as an Iframe, the event of the document inside the Iframe is also removed.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     */
    removeDocEvent: function(a, r) {
      u.removeEventListener(a, r), n.iframe && this._wd.removeEventListener(a, r);
    },
    /**
     * @description The current number of characters is counted and displayed.
     * @param {String} inputText Text added.
     * @returns {Boolean}
     * @private
     */
    _charCount: function(a) {
      const r = n.maxCharCount, f = n.charCounterType;
      let m = 0;
      if (a && (m = this.getCharLength(a, f)), this._setCharCount(), r > 0) {
        let v = !1;
        const b = _.getCharCount(f);
        if (b > r) {
          if (v = !0, m > 0) {
            this._editorRange();
            const h = this.getRange(), y = h.endOffset - 1, C = this.getSelectionNode().textContent, w = h.endOffset - (b - r);
            this.getSelectionNode().textContent = C.slice(0, w < 0 ? 0 : w) + C.slice(h.endOffset, C.length), this.setRange(h.endContainer, y, h.endContainer, y);
          }
        } else b + m > r && (v = !0);
        if (v && (this._callCounterBlink(), m > 0))
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
      if (n.maxCharCount) {
        const f = r || n.charCounterType, m = this.getCharLength(typeof a == "string" ? a : this._charTypeHTML && a.nodeType === 1 ? a.outerHTML : a.textContent, f);
        if (m > 0 && m + _.getCharCount(f) > n.maxCharCount)
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
      const a = g._responsiveButtonSize;
      if (a) {
        let r = 0;
        (d._isBalloon || d._isInline) && n.toolbarWidth === "auto" ? r = e.element.topArea.offsetWidth : r = e.element.toolbar.offsetWidth;
        let f = "default";
        for (let m = 1, v = a.length; m < v; m++)
          if (r < a[m]) {
            f = a[m] + "";
            break;
          }
        g._responsiveCurrentSize !== f && (g._responsiveCurrentSize = f, _.setToolbarButtons(g._responsiveButtons[f]));
      }
    },
    /**
     * @description Set the char count to charCounter element textContent.
     * @private
     */
    _setCharCount: function() {
      e.element.charCounter && c.setTimeout((function(a, r) {
        this.textContent && a && (this.textContent = a.getCharCount(r.charCounterType));
      }).bind(e.element.charCounter, _, n), 0);
    },
    /**
     * @description The character counter blinks.
     * @private
     */
    _callCounterBlink: function() {
      const a = e.element.charWrapper;
      a && !o.hasClass(a, "se-blink") && (o.addClass(a, "se-blink"), c.setTimeout(function() {
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
      n.codeMirrorEditor ? n.codeMirrorEditor.getDoc().setValue(a) : e.element.code.value = a;
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
    _setKeyEffect: function(a) {
      const r = this.commandMap, f = this.activePlugins;
      for (let m in r)
        a.indexOf(m) > -1 || !o.hasOwn(r, m) || (f.indexOf(m) > -1 ? i[m].active.call(this, null) : r.OUTDENT && /^OUTDENT$/i.test(m) ? o.isImportantDisabled(r.OUTDENT) || r.OUTDENT.setAttribute("disabled", !0) : r.INDENT && /^INDENT$/i.test(m) ? o.isImportantDisabled(r.INDENT) || r.INDENT.removeAttribute("disabled") : o.removeClass(r[m], "active"));
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(a, r) {
      const f = c.RegExp;
      this._ww = n.iframe ? e.element.wysiwygFrame.contentWindow : c, this._wd = u, this._charTypeHTML = n.charCounterType === "byte-html", this.wwComputedStyle = c.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = o.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + o.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(D) {
        return this.test(D) ? D : "";
      }).bind(n.allowedClassNames);
      const m = n.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new f("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new f("<(" + m + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + m + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new f("^(" + m + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new f("^" + (n.__allowedScriptTag ? "script" : "") + "$", "i"), !n.iframe && typeof c.ShadowRoot == "function") {
        let D = e.element.wysiwygFrame;
        for (; D; ) {
          if (D.shadowRoot) {
            this._shadowRoot = D.shadowRoot;
            break;
          } else if (D instanceof c.ShadowRoot) {
            this._shadowRoot = D;
            break;
          }
          D = D.parentNode;
        }
        this._shadowRoot && (this._shadowRootControllerEventTarget = []);
      }
      const v = c.Object.keys(n._textTagsMap), b = n.addTagsWhitelist ? n.addTagsWhitelist.split("|").filter(function(D) {
        return /b|i|ins|s|strike/i.test(D);
      }) : [];
      for (let D = 0; D < b.length; D++)
        v.splice(v.indexOf(b[D].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = v.length === 0 ? null : new f("(<\\/?)(" + v.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const h = function(D, O) {
        return D ? D === "*" ? "[a-z-]+" : O ? D + "|" + O : D : "^";
      }, w = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", S = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = n._editorTagsWhitelist.indexOf("//") > -1 || n._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new f("^(" + h(n._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new f("^(" + (n.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = o.createTagsWhitelist(h(n._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = o.createTagsBlacklist(n.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = o.createTagsWhitelist(h(n.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = o.createTagsBlacklist(n.pasteTagsBlacklist);
      const I = '\\s*=\\s*(")[^"]*\\1', E = n.attributesWhitelist;
      let z = {}, B = "";
      if (E)
        for (let D in E)
          !o.hasOwn(E, D) || /^on[a-z]+$/i.test(E[D]) || (D === "all" ? B = h(E[D], w) : z[D] = new f("\\s(?:" + h(E[D], "") + ")" + I, "ig"));
      this._attributesWhitelistRegExp = new f("\\s(?:" + (B || w + "|" + S) + ")" + I, "ig"), this._attributesWhitelistRegExp_all_data = new f("\\s(?:" + ((B || w) + "|data-[a-z0-9\\-]+") + ")" + I, "ig"), this._attributesTagsWhitelist = z;
      const P = n.attributesBlacklist;
      if (z = {}, B = "", P)
        for (let D in P)
          o.hasOwn(P, D) && (D === "all" ? B = h(P[D], "") : z[D] = new f("\\s(?:" + h(P[D], "") + ")" + I, "ig"));
      this._attributesBlacklistRegExp = new f("\\s(?:" + (B || "^") + ")" + I, "ig"), this._attributesTagsBlacklist = z, this._isInline = /inline/i.test(n.mode), this._isBalloon = /balloon|balloon-always/i.test(n.mode), this._isBalloonAlways = /balloon-always/i.test(n.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const U = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let V = [], M, H;
      for (let D in i)
        if (o.hasOwn(i, D)) {
          if (M = i[D], H = t[D], (M.active || M.action) && H && this.callPlugin(D, null, H), typeof M.checkFileInfo == "function" && typeof M.resetFileInfo == "function" && (this.callPlugin(D, null, H), this._fileInfoPluginsCheck.push(M.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(M.resetFileInfo.bind(this))), c.Array.isArray(M.fileTags)) {
            const O = M.fileTags;
            this.callPlugin(D, null, H), this._fileManager.tags = this._fileManager.tags.concat(O), V.push(D);
            for (let R = 0, F = O.length; R < F; R++)
              this._fileManager.pluginMap[O[R].toLowerCase()] = D;
          }
          if (M.managedTags) {
            const O = M.managedTags();
            U.push("." + O.className), this.managedTagsInfo.map[O.className] = O.method.bind(this);
          }
        }
      this.managedTagsInfo.query = U.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new f("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new f("^(" + (V.length === 0 ? "^" : V.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = xu(this, this._onChange_historyStack.bind(this)), this.addModule([Gn]), n.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, n._editorStyles.editor && (e.element.wysiwyg.style.cssText = n._editorStyles.editor), n.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(a, r);
    },
    /**
     * @description Caching basic buttons to use
     * @private
     */
    _cachingButtons: function() {
      this.codeViewDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-code-view-enabled"]):not([data-display="MORE"])'), this.resizingDisabledButtons = e.element._buttonTray.querySelectorAll('.se-menu-list button[data-display]:not([class~="se-resizing-enabled"]):not([data-display="MORE"])');
      const a = e.tool, r = this.commandMap;
      r.INDENT = a.indent, r.OUTDENT = a.outdent, r[n.textTags.bold.toUpperCase()] = a.bold, r[n.textTags.underline.toUpperCase()] = a.underline, r[n.textTags.italic.toUpperCase()] = a.italic, r[n.textTags.strike.toUpperCase()] = a.strike, r[n.textTags.sub.toUpperCase()] = a.subscript, r[n.textTags.sup.toUpperCase()] = a.superscript, this._styleCommandMap = {
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
      this.hasFocus && g._applyTagEffects(), this._variable.isChanged = !0, e.tool.save && e.tool.save.removeAttribute("disabled"), _.onChange && _.onChange(this.getContents(!0), this), e.element.toolbar.style.display === "block" && g._showToolbarBalloon();
    },
    /**
     * @description Modify the height value of the iframe when the height of the iframe is automatic.
     * @private
     */
    _iframeAutoHeight: function() {
      this._iframeAuto ? c.setTimeout(function() {
        const a = d._iframeAuto.offsetHeight;
        e.element.wysiwygFrame.style.height = a + "px", o.isResizeObserverSupported || d.__callResizeFunction(a, null);
      }) : o.isResizeObserverSupported || d.__callResizeFunction(e.element.wysiwygFrame.offsetHeight, null);
    },
    __callResizeFunction: function(a, r) {
      a = a === -1 ? r.borderBoxSize && r.borderBoxSize[0] ? r.borderBoxSize[0].blockSize : r.contentRect.height + this._editorHeightPadding : a, this._editorHeight !== a && (typeof _.onResizeEditor == "function" && _.onResizeEditor(a, this._editorHeight, d, r), this._editorHeight = a);
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
      const r = this.getRange(), f = r.commonAncestorContainer, m = r.startContainer, v = o.getRangeFormatElement(f, null);
      let b, h, y;
      const C = o.getParentElement(f, o.isComponent);
      if (!(C && !o.isTable(C))) {
        if (f.nodeType === 1 && f.getAttribute("data-se-embed") === "true") {
          let w = f.nextElementSibling;
          o.isFormatElement(w) || (w = this.appendFormatTag(f, n.defaultTag)), this.setRange(w.firstChild, 0, w.firstChild, 0);
          return;
        }
        if (!((o.isRangeFormatElement(m) || o.isWysiwygDiv(m)) && (o.isComponent(m.children[r.startOffset]) || o.isComponent(m.children[r.startOffset - 1])))) {
          if (o.getParentElement(f, o.isNotCheckingNode)) return null;
          if (v) {
            y = o.createElement(a || n.defaultTag), y.innerHTML = v.innerHTML, y.childNodes.length === 0 && (y.innerHTML = o.zeroWidthSpace), v.innerHTML = y.outerHTML, y = v.firstChild, b = o.getEdgeChildNodes(y, null).sc, b || (b = o.createTextNode(o.zeroWidthSpace), y.insertBefore(b, y.firstChild)), h = b.textContent.length, this.setRange(b, h, b, h);
            return;
          }
          if (o.isRangeFormatElement(f) && f.childNodes.length <= 1) {
            let w = null;
            f.childNodes.length === 1 && o.isBreak(f.firstChild) ? w = f.firstChild : (w = o.createTextNode(o.zeroWidthSpace), f.appendChild(w)), this.setRange(w, 1, w, 1);
            return;
          }
          try {
            if (f.nodeType === 3 && (y = o.createElement(a || n.defaultTag), f.parentNode.insertBefore(y, f), y.appendChild(f)), o.isBreak(y.nextSibling) && o.removeItem(y.nextSibling), o.isBreak(y.previousSibling) && o.removeItem(y.previousSibling), o.isBreak(b)) {
              const w = o.createTextNode(o.zeroWidthSpace);
              b.parentNode.insertBefore(w, b), b = w;
            }
          } catch {
            this.execCommand("formatBlock", !1, a || n.defaultTag), this.removeRange(), this._editorRange(), this.effectNode = null;
            return;
          }
          if (y && (o.isBreak(y.nextSibling) && o.removeItem(y.nextSibling), o.isBreak(y.previousSibling) && o.removeItem(y.previousSibling), o.isBreak(b))) {
            const w = o.createTextNode(o.zeroWidthSpace);
            b.parentNode.insertBefore(w, b), b = w;
          }
          this.effectNode = null, m ? this.setRange(m, 1, m, 1) : this.nativeFocus();
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
      this.context = e = Al(a.originElement, this._getConstructed(a), n), this._componentsInfoReset = !0, this._editorInit(!0, r);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(a, r) {
      this._init(a, r), g._addEvent(), this._setCharCount(), g._offStickyToolbar(), g.onResize_window(), e.element.toolbar.style.visibility = "";
      const f = n.frameAttrbutes;
      for (let m in f)
        e.element.wysiwyg.setAttribute(m, f[m]);
      this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), c.setTimeout(function() {
        typeof d._resourcesStateChange == "function" && (g._resizeObserver && g._resizeObserver.observe(e.element.wysiwygFrame), g._toolbarObserver && g._toolbarObserver.observe(e.element._toolbarShadow), d._resourcesStateChange(), typeof _.onload == "function" && _.onload(d, a));
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
    _deleteKeyCode: new c.RegExp("^(8|46)$"),
    _cursorMoveKeyCode: new c.RegExp("^(8|3[2-9]|40|46)$"),
    _directionKeyCode: new c.RegExp("^(8|13|3[2-9]|40|46)$"),
    _nonTextKeyCode: new c.RegExp("^(8|13|1[6-9]|20|27|3[3-9]|40|45|46|11[2-9]|12[0-3]|144|145)$"),
    _historyIgnoreKeyCode: new c.RegExp("^(1[6-9]|20|27|3[3-9]|40|45|11[2-9]|12[0-3]|144|145)$"),
    _onButtonsCheck: new c.RegExp("^(" + c.Object.keys(n._textTagsMap).join("|") + ")$", "i"),
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
    _shortcutCommand: function(a, r) {
      let f = null;
      const m = g._keyCodeShortcut[a];
      switch (m) {
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
      return f ? (d.commandHandler(d.commandMap[f], f), !0) : !!m;
    },
    _applyTagEffects: function() {
      if (o.hasClass(e.element.wysiwyg, "se-read-only"))
        return !1;
      let a = d.getSelectionNode();
      if (a === d.effectNode) return;
      d.effectNode = a;
      const r = n.rtl ? "marginRight" : "marginLeft", f = d.commandMap, m = g._onButtonsCheck, v = [], b = [], h = d.activePlugins, y = h.length;
      let C = "";
      for (; a.firstChild; )
        a = a.firstChild;
      for (let w = a; !o.isWysiwygDiv(w) && w; w = w.parentNode)
        if (!(w.nodeType !== 1 || o.isBreak(w))) {
          if (C = w.nodeName.toUpperCase(), b.push(C), !d.isReadOnly)
            for (let S = 0, I; S < y; S++)
              I = h[S], v.indexOf(I) === -1 && i[I].active.call(d, w) && v.push(I);
          if (o.isFormatElement(w)) {
            v.indexOf("OUTDENT") === -1 && f.OUTDENT && !o.isImportantDisabled(f.OUTDENT) && (o.isListCell(w) || w.style[r] && o.getNumber(w.style[r], 0) > 0) && (v.push("OUTDENT"), f.OUTDENT.removeAttribute("disabled")), v.indexOf("INDENT") === -1 && f.INDENT && !o.isImportantDisabled(f.INDENT) && (v.push("INDENT"), o.isListCell(w) && !w.previousElementSibling ? f.INDENT.setAttribute("disabled", !0) : f.INDENT.removeAttribute("disabled"));
            continue;
          }
          m && m.test(C) && (v.push(C), o.addClass(f[C], "active"));
        }
      d._setKeyEffect(v), d._variable.currentNodes = b.reverse(), d._variable.currentNodesMap = v, n.showPathLabel && (e.element.navigation.textContent = d._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(a) {
      let r = a.target;
      if (d._bindControllersOff && a.stopPropagation(), /^(input|textarea|select|option)$/i.test(r.nodeName) ? d._antiBlur = !1 : a.preventDefault(), o.getParentElement(r, ".se-submenu"))
        a.stopPropagation(), d._notHideToolbar = !0;
      else {
        let f = r.getAttribute("data-command"), m = r.className;
        for (; !f && !/se-menu-list/.test(m) && !/sun-editor-common/.test(m); )
          r = r.parentNode, f = r.getAttribute("data-command"), m = r.className;
        (f === d._submenuName || f === d._containerName) && a.stopPropagation();
      }
    },
    addGlobalEvent: function(a, r, f) {
      return n.iframe && d._ww.addEventListener(a, r, f), d._w.addEventListener(a, r, f), {
        type: a,
        listener: r,
        useCapture: f
      };
    },
    removeGlobalEvent: function(a, r, f) {
      a && (typeof a == "object" && (r = a.listener, f = a.useCapture, a = a.type), n.iframe && d._ww.removeEventListener(a, r, f), d._w.removeEventListener(a, r, f));
    },
    onClick_toolbar: function(a) {
      let r = a.target, f = r.getAttribute("data-display"), m = r.getAttribute("data-command"), v = r.className;
      for (d.controllersOff(); r.parentNode && !m && !/se-menu-list/.test(v) && !/se-toolbar/.test(v); )
        r = r.parentNode, m = r.getAttribute("data-command"), f = r.getAttribute("data-display"), v = r.className;
      !m && !f || r.disabled || d.actionCall(m, f, r);
    },
    __selectionSyncEvent: null,
    onMouseDown_wysiwyg: function(a) {
      if (d.isReadOnly || o.isNonEditable(e.element.wysiwyg)) return;
      if (o._isExcludeSelectionElement(a.target)) {
        a.preventDefault();
        return;
      }
      if (g.removeGlobalEvent(g.__selectionSyncEvent), g.__selectionSyncEvent = g.addGlobalEvent("mouseup", function() {
        d && d._editorRange(), g.removeGlobalEvent(g.__selectionSyncEvent);
      }), typeof _.onMouseDown == "function" && _.onMouseDown(a, d) === !1) return;
      const r = o.getParentElement(a.target, o.isCell);
      if (r) {
        const f = d.plugins.table;
        f && r !== f._fixedCell && !f._shift && d.callPlugin("table", function() {
          f.onTableCellMultiSelect.call(d, r, !1);
        }, null);
      }
      d._isBalloon && g._hideToolbar();
    },
    onClick_wysiwyg: function(a) {
      const r = a.target;
      if (d.isReadOnly)
        return a.preventDefault(), o.isAnchor(r) && c.open(r.href, r.target), !1;
      if (o.isNonEditable(e.element.wysiwyg) || typeof _.onClick == "function" && _.onClick(a, d) === !1) return;
      const f = d.getFileComponent(r);
      if (f) {
        a.preventDefault(), d.selectComponent(f.target, f.pluginName);
        return;
      }
      const m = o.getParentElement(r, "FIGCAPTION");
      if (m && o.isNonEditable(m) && (a.preventDefault(), m.focus(), d._isInline && !d._inlineToolbarAttr.isShow)) {
        g._showToolbarInline();
        const w = function() {
          g._hideToolbar(), m.removeEventListener("blur", w);
        };
        m.addEventListener("blur", w);
      }
      if (d._editorRange(), a.detail === 3) {
        let w = d.getRange();
        o.isFormatElement(w.endContainer) && w.endOffset === 0 && (w = d.setRange(w.startContainer, w.startOffset, w.startContainer, w.startContainer.length), d._rangeInfo(w, d.getSelection()));
      }
      const v = d.getSelectionNode(), b = o.getFormatElement(v, null), h = o.getRangeFormatElement(v, null);
      let y = v;
      for (; y && y.firstChild; ) y = y.firstChild;
      const C = d.getFileComponent(y);
      if (C) {
        const w = d.getRange();
        !h && w.startContainer === w.endContainer && d.selectComponent(C.target, C.pluginName);
      } else d.currentFileComponentInfo && d.controllersOff();
      if (!b && !o.isNonEditable(r) && !o.isList(h)) {
        const w = d.getRange();
        if (o.getFormatElement(w.startContainer) === o.getFormatElement(w.endContainer))
          if (o.isList(h)) {
            a.preventDefault();
            const S = o.createElement("LI"), I = v.nextElementSibling;
            S.appendChild(v), h.insertBefore(S, I), d.focus();
          } else !o.isWysiwygDiv(v) && !o.isComponent(v) && (!o.isTable(v) || o.isCell(v)) && d._setDefaultFormat(o.isRangeFormatElement(h) ? "DIV" : n.defaultTag) !== null ? (a.preventDefault(), d.focus()) : g._applyTagEffects();
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
        const a = d.getRange();
        d._bindControllersOff || !d._isBalloonAlways && a.collapsed ? g._hideToolbar() : g._showToolbarBalloon(a);
      }
    },
    _showToolbarBalloon: function(a) {
      if (!d._isBalloon) return;
      const r = a || d.getRange(), f = e.element.toolbar, m = e.element.topArea, v = d.getSelection();
      let b;
      if (d._isBalloonAlways && r.collapsed)
        b = !0;
      else if (v.focusNode === v.anchorNode)
        b = v.focusOffset < v.anchorOffset;
      else {
        const M = o.getListChildNodes(r.commonAncestorContainer, null);
        b = o.getArrayIndex(M, v.focusNode) < o.getArrayIndex(M, v.anchorNode);
      }
      let h = r.getClientRects();
      h = h[b ? 0 : h.length - 1];
      const y = d.getGlobalScrollOffset();
      let C = y.left, w = y.top;
      const S = m.offsetWidth, I = g._getEditorOffsets(null), E = I.top, z = I.left;
      if (f.style.top = "-10000px", f.style.visibility = "hidden", f.style.display = "block", !h) {
        const M = d.getSelectionNode();
        if (o.isFormatElement(M)) {
          const H = o.createTextNode(o.zeroWidthSpace);
          d.insertNode(H, null, !1), d.setRange(H, 1, H, 1), d._editorRange(), h = d.getRange().getClientRects(), h = h[b ? 0 : h.length - 1];
        }
        if (!h) {
          const H = o.getOffset(M, e.element.wysiwygFrame);
          h = {
            left: H.left,
            top: H.top,
            right: H.left,
            bottom: H.top + M.offsetHeight,
            noText: !0
          }, C = 0, w = 0;
        }
        b = !0;
      }
      const B = c.Math.round(e.element._arrow.offsetWidth / 2), P = f.offsetWidth, U = f.offsetHeight, V = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (V && (h = {
        left: h.left + V.left,
        top: h.top + V.top,
        right: h.right + V.right - V.width,
        bottom: h.bottom + V.bottom - V.height
      }), g._setToolbarOffset(b, h, f, z, S, C, w, E, B), (P !== f.offsetWidth || U !== f.offsetHeight) && g._setToolbarOffset(b, h, f, z, S, C, w, E, B), n.toolbarContainer) {
        const M = m.parentElement;
        let H = n.toolbarContainer, D = H.offsetLeft, O = H.offsetTop;
        for (; !H.parentElement.contains(M) || !/^(BODY|HTML)$/i.test(H.parentElement.nodeName); )
          H = H.offsetParent, D += H.offsetLeft, O += H.offsetTop;
        f.style.left = f.offsetLeft - D + m.offsetLeft + "px", f.style.top = f.offsetTop - O + m.offsetTop + "px";
      }
      f.style.visibility = "";
    },
    _setToolbarOffset: function(a, r, f, m, v, b, h, y, C) {
      const S = f.offsetWidth, I = r.noText && !a ? 0 : f.offsetHeight, E = (a ? r.left : r.right) - m - S / 2 + b, z = E + S - v;
      let B = (a ? r.top - I - C : r.bottom + C) - (r.noText ? 0 : y) + h, P = E < 0 ? 1 : z < 0 ? E : E - z - 1 - 1, U = !1;
      const V = B + (a ? g._getEditorOffsets(null).top : f.offsetHeight - e.element.wysiwyg.offsetHeight);
      !a && V > 0 && g._getPageBottomSpace() < V ? (a = !0, U = !0) : a && u.documentElement.offsetTop > V && (a = !1, U = !0), U && (B = (a ? r.top - I - C : r.bottom + C) - (r.noText ? 0 : y) + h), f.style.left = c.Math.floor(P) + "px", f.style.top = c.Math.floor(B) + "px", a ? (o.removeClass(e.element._arrow, "se-arrow-up"), o.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = I + "px") : (o.removeClass(e.element._arrow, "se-arrow-down"), o.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -C + "px");
      const M = c.Math.floor(S / 2 + (E - P));
      e.element._arrow.style.left = (M + C > f.offsetWidth ? f.offsetWidth - C : M < C ? C : M) + "px";
    },
    _showToolbarInline: function() {
      if (!d._isInline) return;
      const a = e.element.toolbar;
      n.toolbarContainer ? a.style.position = "relative" : a.style.position = "absolute", a.style.visibility = "hidden", a.style.display = "block", d._inlineToolbarAttr.width = a.style.width = n.toolbarWidth, d._inlineToolbarAttr.top = a.style.top = (n.toolbarContainer ? 0 : -1 - a.offsetHeight) + "px", typeof _.showInline == "function" && _.showInline(a, e, d), g.onScroll_window(), d._inlineToolbarAttr.isShow = !0, a.style.visibility = "";
    },
    _hideToolbar: function() {
      !d._notHideToolbar && !d._variable.isFullScreen && (e.element.toolbar.style.display = "none", d._inlineToolbarAttr.isShow = !1);
    },
    onInput_wysiwyg: function(a) {
      if (/AUDIO/.test(a.target.nodeName)) return !1;
      if (d.isReadOnly || d.isDisabled)
        return a.preventDefault(), a.stopPropagation(), d.history.go(d.history.getCurrentIndex()), !1;
      const r = d.getRange(), f = d.getSelectionNode(), m = o.getFormatElement(f, null);
      if (!m && r.collapsed && !o.isComponent(f) && !o.isList(f)) {
        const b = o.getRangeFormatElement(m, null);
        d._setDefaultFormat(o.isRangeFormatElement(b) ? "DIV" : n.defaultTag);
      }
      d._editorRange();
      const v = (a.data === null ? "" : a.data === void 0 ? " " : a.data) || "";
      if (!d._charCount(v))
        return a.preventDefault(), a.stopPropagation(), !1;
      typeof _.onInput == "function" && _.onInput(a, d) === !1 || d.history.push(!0);
    },
    _isUneditableNode: function(a, r) {
      const f = r ? a.startContainer : a.endContainer, m = r ? a.startOffset : a.endOffset, v = r ? "previousSibling" : "nextSibling", b = f.nodeType === 1;
      let h;
      return b ? (h = g._isUneditableNode_getSibling(f.childNodes[m], v, f), h && h.nodeType === 1 && h.getAttribute("contenteditable") === "false") : (h = g._isUneditableNode_getSibling(f, v, f), d.isEdgePoint(f, m, r ? "start" : "end") && h && h.nodeType === 1 && h.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(a, r, f) {
      if (!a) return null;
      let m = a[r];
      if (!m)
        if (m = o.getFormatElement(f), m = m ? m[r] : null, m && !o.isComponent(m)) m = r === "previousSibling" ? m.firstChild : m.lastChild;
        else return null;
      return m;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(a) {
      let r = d.getSelectionNode();
      if (o.isInputElement(r)) return;
      const f = a.keyCode, m = a.shiftKey, v = a.ctrlKey || a.metaKey || f === 91 || f === 92 || f === 224, b = a.altKey;
      if (g._IEisComposing = f === 229, !v && d.isReadOnly && !g._cursorMoveKeyCode.test(f))
        return a.preventDefault(), !1;
      if (d.submenuOff(), d._isBalloon && g._hideToolbar(), typeof _.onKeyDown == "function" && _.onKeyDown(a, d) === !1) return;
      if (v && g._shortcutCommand(f, m))
        return g._onShortcutKey = !0, a.preventDefault(), a.stopPropagation(), !1;
      g._onShortcutKey && (g._onShortcutKey = !1), f === 13 && o.isFormatElement(d.getRange().startContainer) && (d._resetRangeToTextNode(), r = d.getSelectionNode());
      const h = d.getRange(), y = !h.collapsed || h.startContainer !== h.endContainer, C = d._fileManager.pluginRegExp.test(d.currentControllerName) ? d.currentControllerName : "";
      let w = o.getFormatElement(r, null) || r, S = o.getRangeFormatElement(w, null);
      if (!(/37|38|39|40/.test(a.keyCode) && g._onKeyDown_wysiwyg_arrowKey(a) === !1)) {
        switch (f) {
          case 8:
            if (!y && C) {
              a.preventDefault(), a.stopPropagation(), d.plugins[C].destroy.call(d);
              break;
            }
            if (y && g._hardDelete()) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            if (!o.isFormatElement(w) && !e.element.wysiwyg.firstElementChild && !o.isComponent(r) && d._setDefaultFormat(n.defaultTag) !== null)
              return a.preventDefault(), a.stopPropagation(), !1;
            if (!y && !w.previousElementSibling && h.startOffset === 0 && !r.previousSibling && !o.isListCell(w) && o.isFormatElement(w) && (!o.isFreeFormatElement(w) || o.isClosureFreeFormatElement(w))) {
              if (o.isClosureRangeFormatElement(w.parentNode))
                return a.preventDefault(), a.stopPropagation(), !1;
              if (o.isWysiwygDiv(w.parentNode) && w.childNodes.length <= 1 && (!w.firstChild || o.onlyZeroWidthSpace(w.textContent))) {
                if (a.preventDefault(), a.stopPropagation(), w.nodeName.toUpperCase() === n.defaultTag.toUpperCase()) {
                  w.innerHTML = "<br>";
                  const R = w.attributes;
                  for (; R[0]; )
                    w.removeAttribute(R[0].name);
                } else {
                  const R = o.createElement(n.defaultTag);
                  R.innerHTML = "<br>", w.parentElement.replaceChild(R, w);
                }
                return d.nativeFocus(), !1;
              }
            }
            const E = h.startContainer;
            if (w && !w.previousElementSibling && h.startOffset === 0 && E.nodeType === 3 && !o.isFormatElement(E.parentNode)) {
              let R = E.parentNode.previousSibling;
              const F = E.parentNode.nextSibling;
              R || (F ? R = F : (R = o.createElement("BR"), w.appendChild(R)));
              let A = E;
              for (; w.contains(A) && !A.previousSibling; )
                A = A.parentNode;
              if (!w.contains(A)) {
                E.textContent = "", o.removeItemAllParents(E, null, w);
                break;
              }
            }
            if (g._isUneditableNode(h, !0)) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            !y && d._isEdgeFormat(h.startContainer, h.startOffset, "start") && o.isFormatElement(w.previousElementSibling) && (d._formatAttrsTemp = w.previousElementSibling.attributes);
            const z = h.commonAncestorContainer;
            if (w = o.getFormatElement(h.startContainer, null), S = o.getRangeFormatElement(w, null), S && w && !o.isCell(S) && !/^FIGCAPTION$/i.test(S.nodeName)) {
              if (o.isListCell(w) && o.isList(S) && (o.isListCell(S.parentNode) || w.previousElementSibling) && (r === w || r.nodeType === 3 && (!r.previousSibling || o.isList(r.previousSibling))) && (o.getFormatElement(h.startContainer, null) !== o.getFormatElement(h.endContainer, null) ? S.contains(h.startContainer) : h.startOffset === 0 && h.collapsed)) {
                if (h.startContainer !== h.endContainer)
                  a.preventDefault(), d.removeNode(), h.startContainer.nodeType === 3 && d.setRange(h.startContainer, h.startContainer.textContent.length, h.startContainer, h.startContainer.textContent.length), d.history.push(!0);
                else {
                  let R = w.previousElementSibling || S.parentNode;
                  if (o.isListCell(R)) {
                    a.preventDefault();
                    let F = R;
                    if (!R.contains(w) && o.isListCell(F) && o.isList(F.lastElementChild)) {
                      for (F = F.lastElementChild.lastElementChild; o.isListCell(F) && o.isList(F.lastElementChild); )
                        F = F.lastElementChild && F.lastElementChild.lastElementChild;
                      R = F;
                    }
                    let A = R === S.parentNode ? S.previousSibling : R.lastChild;
                    A || (A = o.createTextNode(o.zeroWidthSpace), S.parentNode.insertBefore(A, S.parentNode.firstChild));
                    const T = A.nodeType === 3 ? A.textContent.length : 1, Y = w.childNodes;
                    let $ = A, X = Y[0];
                    for (; X = Y[0]; )
                      R.insertBefore(X, $.nextSibling), $ = X;
                    o.removeItem(w), S.children.length === 0 && o.removeItem(S), d.setRange(A, T, A, T), d.history.push(!0);
                  }
                }
                break;
              }
              if (!y && h.startOffset === 0) {
                let R = !0, F = z;
                for (; F && F !== S && !o.isWysiwygDiv(F); ) {
                  if (F.previousSibling && (F.previousSibling.nodeType === 1 || !o.onlyZeroWidthSpace(F.previousSibling.textContent.trim()))) {
                    R = !1;
                    break;
                  }
                  F = F.parentNode;
                }
                if (R && S.parentNode) {
                  a.preventDefault(), d.detachRangeFormatElement(S, o.isListCell(w) ? [w] : null, null, !1, !1), d.history.push(!0);
                  break;
                }
              }
            }
            if (!y && w && (h.startOffset === 0 || r === w && w.childNodes[h.startOffset])) {
              const R = r === w ? w.childNodes[h.startOffset] : r, F = w.previousSibling, A = (z.nodeType === 3 || o.isBreak(z)) && !z.previousSibling && h.startOffset === 0;
              if (R && !R.previousSibling && (z && o.isComponent(z.previousSibling) || A && o.isComponent(F))) {
                const T = d.getFileComponent(F);
                T ? (a.preventDefault(), a.stopPropagation(), w.textContent.length === 0 && o.removeItem(w), d.selectComponent(T.target, T.pluginName) === !1 && d.blur()) : o.isComponent(F) && (a.preventDefault(), a.stopPropagation(), o.removeItem(F));
                break;
              }
              if (R && o.isNonEditable(R.previousSibling)) {
                a.preventDefault(), a.stopPropagation(), o.removeItem(R.previousSibling);
                break;
              }
            }
            break;
          case 46:
            if (C) {
              a.preventDefault(), a.stopPropagation(), d.plugins[C].destroy.call(d);
              break;
            }
            if (y && g._hardDelete()) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            if (!y && d._isEdgeFormat(h.endContainer, h.endOffset, "end") && !w.nextSibling) {
              a.preventDefault(), a.stopPropagation();
              return;
            }
            if (g._isUneditableNode(h, !1)) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            if ((o.isFormatElement(r) || r.nextSibling === null || o.onlyZeroWidthSpace(r.nextSibling) && r.nextSibling.nextSibling === null) && h.startOffset === r.textContent.length) {
              const R = w.nextElementSibling;
              if (!R) break;
              if (o.isComponent(R)) {
                if (a.preventDefault(), o.onlyZeroWidthSpace(w) && (o.removeItem(w), o.isTable(R))) {
                  let A = o.getChildElement(R, o.isCell, !1);
                  A = A.firstElementChild || A, d.setRange(A, 0, A, 0);
                  break;
                }
                const F = d.getFileComponent(R);
                F ? (a.stopPropagation(), d.selectComponent(F.target, F.pluginName) === !1 && d.blur()) : o.isComponent(R) && (a.stopPropagation(), o.removeItem(R));
                break;
              }
            }
            if (!y && (d.isEdgePoint(h.endContainer, h.endOffset) || r === w && w.childNodes[h.startOffset])) {
              const R = r === w && w.childNodes[h.startOffset] || r;
              if (R && o.isNonEditable(R.nextSibling)) {
                a.preventDefault(), a.stopPropagation(), o.removeItem(R.nextSibling);
                break;
              } else if (o.isComponent(R)) {
                a.preventDefault(), a.stopPropagation(), o.removeItem(R);
                break;
              }
            }
            if (!y && d._isEdgeFormat(h.endContainer, h.endOffset, "end") && o.isFormatElement(w.nextElementSibling) && (d._formatAttrsTemp = w.attributes), w = o.getFormatElement(h.startContainer, null), S = o.getRangeFormatElement(w, null), o.isListCell(w) && o.isList(S) && (r === w || r.nodeType === 3 && (!r.nextSibling || o.isList(r.nextSibling)) && (o.getFormatElement(h.startContainer, null) !== o.getFormatElement(h.endContainer, null) ? S.contains(h.endContainer) : h.endOffset === r.textContent.length && h.collapsed))) {
              h.startContainer !== h.endContainer && d.removeNode();
              let R = o.getArrayItem(w.children, o.isList, !1);
              if (R = R || w.nextElementSibling || S.parentNode.nextElementSibling, R && (o.isList(R) || o.getArrayItem(R.children, o.isList, !1))) {
                a.preventDefault();
                let F, A;
                if (o.isList(R)) {
                  const T = R.firstElementChild;
                  for (A = T.childNodes, F = A[0]; A[0]; )
                    w.insertBefore(A[0], R);
                  o.removeItem(T);
                } else {
                  for (F = R.firstChild, A = R.childNodes; A[0]; )
                    w.appendChild(A[0]);
                  o.removeItem(R);
                }
                d.setRange(F, 0, F, 0), d.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (C || n.tabDisable || (a.preventDefault(), v || b || o.isWysiwygDiv(r))) break;
            const B = !h.collapsed || d.isEdgePoint(h.startContainer, h.startOffset), P = d.getSelectedElements(null);
            r = d.getSelectionNode();
            const U = [];
            let V = [], M = o.isListCell(P[0]), H = o.isListCell(P[P.length - 1]), D = { sc: h.startContainer, so: h.startOffset, ec: h.endContainer, eo: h.endOffset };
            for (let R = 0, F = P.length, A; R < F; R++)
              if (A = P[R], o.isListCell(A)) {
                if (!A.previousElementSibling && !m)
                  continue;
                U.push(A);
              } else
                V.push(A);
            if (U.length > 0 && B && d.plugins.list)
              D = d.plugins.list.editInsideList.call(d, m, U);
            else {
              const R = o.getParentElement(r, o.isCell);
              if (R && B) {
                const F = o.getParentElement(R, "table"), A = o.getListChildren(F, o.isCell);
                let T = m ? o.prevIdx(A, R) : o.nextIdx(A, R);
                T === A.length && !m && (T = 0), T === -1 && m && (T = A.length - 1);
                let Y = A[T];
                if (!Y) break;
                Y = Y.firstElementChild || Y, d.setRange(Y, 0, Y, 0);
                break;
              }
              V = V.concat(U), M = H = null;
            }
            if (V.length > 0)
              if (m) {
                const R = V.length - 1;
                for (let T = 0, Y; T <= R; T++) {
                  Y = V[T].childNodes;
                  for (let $ = 0, X = Y.length, j; $ < X && (j = Y[$], !!j); $++)
                    if (!o.onlyZeroWidthSpace(j)) {
                      /^\s{1,4}$/.test(j.textContent) ? o.removeItem(j) : /^\s{1,4}/.test(j.textContent) && (j.textContent = j.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const F = o.getChildElement(V[0], "text", !1), A = o.getChildElement(V[R], "text", !0);
                !M && F && (D.sc = F, D.so = 0), !H && A && (D.ec = A, D.eo = A.textContent.length);
              } else {
                const R = o.createTextNode(new c.Array(d._variable.tabSize + 1).join(" "));
                if (V.length === 1) {
                  if (!d.insertNode(R, null, !0)) return !1;
                  M || (D.sc = R, D.so = R.length), H || (D.ec = R, D.eo = R.length);
                } else {
                  const F = V.length - 1;
                  for (let Y = 0, $; Y <= F; Y++)
                    $ = V[Y].firstChild, $ && (o.isBreak($) ? V[Y].insertBefore(R.cloneNode(!1), $) : $.textContent = R.textContent + $.textContent);
                  const A = o.getChildElement(V[0], "text", !1), T = o.getChildElement(V[F], "text", !0);
                  !M && A && (D.sc = A, D.so = 0), !H && T && (D.ec = T, D.eo = T.textContent.length);
                }
              }
            d.setRange(D.sc, D.so, D.ec, D.eo), d.history.push(!1);
            break;
          case 13:
            const O = o.getFreeFormatElement(r, null);
            if (d._charTypeHTML) {
              let R = "";
              if (!m && O || m ? R = "<br>" : R = "<" + w.nodeName + "><br></" + w.nodeName + ">", !d.checkCharCount(R, "byte-html"))
                return a.preventDefault(), !1;
            }
            if (!m && !C) {
              const R = d._isEdgeFormat(h.endContainer, h.endOffset, "end"), F = d._isEdgeFormat(h.startContainer, h.startOffset, "start");
              if (R && (/^H[1-6]$/i.test(w.nodeName) || /^HR$/i.test(w.nodeName))) {
                g._enterPrevent(a);
                let A = null;
                const T = d.appendFormatTag(w, n.defaultTag);
                if (R && R.length > 0) {
                  A = R.pop();
                  const Y = A;
                  for (; R.length > 0; )
                    A = A.appendChild(R.pop());
                  T.appendChild(Y);
                }
                if (A = A ? A.appendChild(T.firstChild) : T.firstChild, o.isBreak(A)) {
                  const Y = o.createTextNode(o.zeroWidthSpace);
                  A.parentNode.insertBefore(Y, A), d.setRange(Y, 1, Y, 1);
                } else
                  d.setRange(A, 0, A, 0);
                break;
              } else if (S && w && !o.isCell(S) && !/^FIGCAPTION$/i.test(S.nodeName)) {
                const A = d.getRange();
                if (d.isEdgePoint(A.endContainer, A.endOffset) && o.isList(r.nextSibling)) {
                  g._enterPrevent(a);
                  const T = o.createElement("LI"), Y = o.createElement("BR");
                  T.appendChild(Y), w.parentNode.insertBefore(T, w.nextElementSibling), T.appendChild(r.nextSibling), d.setRange(Y, 1, Y, 1);
                  break;
                }
                if ((A.commonAncestorContainer.nodeType !== 3 || !A.commonAncestorContainer.nextElementSibling) && o.onlyZeroWidthSpace(w.innerText.trim()) && !o.isListCell(w.nextElementSibling)) {
                  g._enterPrevent(a);
                  let T = null;
                  if (o.isListCell(S.parentNode)) {
                    const Y = w.parentNode.parentNode;
                    S = Y.parentNode;
                    const $ = o.createElement("LI");
                    $.innerHTML = "<br>", o.copyTagAttributes($, w, n.lineAttrReset), T = $, S.insertBefore(T, Y.nextElementSibling);
                  } else {
                    const Y = o.isCell(S.parentNode) ? "DIV" : o.isList(S.parentNode) ? "LI" : o.isFormatElement(S.nextElementSibling) && !o.isRangeFormatElement(S.nextElementSibling) ? S.nextElementSibling.nodeName : o.isFormatElement(S.previousElementSibling) && !o.isRangeFormatElement(S.previousElementSibling) ? S.previousElementSibling.nodeName : n.defaultTag;
                    T = o.createElement(Y), o.copyTagAttributes(T, w, n.lineAttrReset);
                    const $ = d.detachRangeFormatElement(S, [w], null, !0, !0);
                    $.cc.insertBefore(T, $.ec);
                  }
                  T.innerHTML = "<br>", o.removeItemAllParents(w, null, null), d.setRange(T, 1, T, 1);
                  break;
                }
              }
              if (O) {
                g._enterPrevent(a);
                const A = r === O, T = d.getSelection(), Y = r.childNodes, $ = T.focusOffset, X = r.previousElementSibling, j = r.nextSibling;
                if (!o.isClosureFreeFormatElement(O) && Y && (A && h.collapsed && Y.length - 1 <= $ + 1 && o.isBreak(Y[$]) && (!Y[$ + 1] || (!Y[$ + 2] || o.onlyZeroWidthSpace(Y[$ + 2].textContent)) && Y[$ + 1].nodeType === 3 && o.onlyZeroWidthSpace(Y[$ + 1].textContent)) && $ > 0 && o.isBreak(Y[$ - 1]) || !A && o.onlyZeroWidthSpace(r.textContent) && o.isBreak(X) && (o.isBreak(X.previousSibling) || !o.onlyZeroWidthSpace(X.previousSibling.textContent)) && (!j || !o.isBreak(j) && o.onlyZeroWidthSpace(j.textContent)))) {
                  A ? o.removeItem(Y[$ - 1]) : o.removeItem(r);
                  const K = d.appendFormatTag(O, o.isFormatElement(O.nextElementSibling) && !o.isRangeFormatElement(O.nextElementSibling) ? O.nextElementSibling : null);
                  o.copyFormatAttributes(K, O), d.setRange(K, 1, K, 1);
                  break;
                }
                if (A) {
                  _.insertHTML(h.collapsed && o.isBreak(h.startContainer.childNodes[h.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let K = T.focusNode;
                  const oe = T.focusOffset;
                  O === K && (K = K.childNodes[oe - $ > 1 ? oe - 1 : oe]), d.setRange(K, 1, K, 1);
                } else {
                  const K = T.focusNode.nextSibling, oe = o.createElement("BR");
                  d.insertNode(oe, null, !1);
                  const me = oe.previousSibling, ve = oe.nextSibling;
                  !o.isBreak(K) && !o.isBreak(me) && (!ve || o.onlyZeroWidthSpace(ve)) ? (oe.parentNode.insertBefore(oe.cloneNode(!1), oe), d.setRange(oe, 1, oe, 1)) : d.setRange(ve, 0, ve, 0);
                }
                g._onShortcutKey = !0;
                break;
              }
              if (h.collapsed && (F || R)) {
                g._enterPrevent(a);
                const A = o.createElement("BR"), T = o.createElement(w.nodeName);
                o.copyTagAttributes(T, w, n.lineAttrReset);
                let Y = A;
                do {
                  if (!o.isBreak(r) && r.nodeType === 1) {
                    const $ = r.cloneNode(!1);
                    $.appendChild(Y), Y = $;
                  }
                  r = r.parentNode;
                } while (w !== r && w.contains(r));
                T.appendChild(Y), w.parentNode.insertBefore(T, F && !R ? w : w.nextElementSibling), R && d.setRange(A, 1, A, 1);
                break;
              }
              if (w) {
                a.stopPropagation();
                let A, T = 0;
                if (h.collapsed)
                  o.onlyZeroWidthSpace(w) ? A = d.appendFormatTag(w, w.cloneNode(!1)) : A = o.splitElement(h.endContainer, h.endOffset, o.getElementDepth(w));
                else {
                  const Y = o.getFormatElement(h.startContainer, null) !== o.getFormatElement(h.endContainer, null), $ = w.cloneNode(!1);
                  $.innerHTML = "<br>";
                  const X = h.commonAncestorContainer, j = X === h.startContainer && X === h.endContainer && o.onlyZeroWidthSpace(X) ? h : d.removeNode();
                  if (A = o.getFormatElement(j.container, null), !A) {
                    o.isWysiwygDiv(j.container) && (g._enterPrevent(a), e.element.wysiwyg.appendChild($), A = $, o.copyTagAttributes(A, w, n.lineAttrReset), d.setRange(A, T, A, T));
                    break;
                  }
                  const K = o.getRangeFormatElement(j.container);
                  if (A = A.contains(K) ? o.getChildElement(K, o.getFormatElement.bind(o)) : A, Y) {
                    if (R && !F)
                      A.parentNode.insertBefore($, !j.prevContainer || j.container === j.prevContainer ? A.nextElementSibling : A), A = $, T = 0;
                    else if (T = j.offset, F) {
                      const oe = A.parentNode.insertBefore($, A);
                      R && (A = oe, T = 0);
                    }
                  } else
                    R && F ? (A.parentNode.insertBefore($, j.prevContainer && j.container === j.prevContainer ? A.nextElementSibling : A), A = $, T = 0) : A = o.splitElement(j.container, j.offset, o.getElementDepth(w));
                }
                g._enterPrevent(a), o.copyTagAttributes(A, w, n.lineAttrReset), d.setRange(A, T, A, T);
                break;
              }
            }
            if (y) break;
            if (S && o.getParentElement(S, "FIGCAPTION") && o.getParentElement(S, o.isList) && (g._enterPrevent(a), w = d.appendFormatTag(w, null), d.setRange(w, 0, w, 0)), C) {
              a.preventDefault(), a.stopPropagation(), d.containerOff(), d.controllersOff();
              const R = e[C], F = R._container, A = F.previousElementSibling || F.nextElementSibling;
              let T = null;
              o.isListCell(F.parentNode) ? T = o.createElement("BR") : (T = o.createElement(o.isFormatElement(A) && !o.isRangeFormatElement(A) ? A.nodeName : n.defaultTag), T.innerHTML = "<br>"), m ? F.parentNode.insertBefore(T, F) : F.parentNode.insertBefore(T, F.nextElementSibling), d.callPlugin(C, function() {
                d.selectComponent(R._element, C) === !1 && d.blur();
              }, null);
            }
            break;
          case 27:
            if (C)
              return a.preventDefault(), a.stopPropagation(), d.controllersOff(), !1;
            break;
        }
        if (m && f === 16) {
          a.preventDefault(), a.stopPropagation();
          const E = d.plugins.table;
          if (E && !E._shift && !E._ref) {
            const z = o.getParentElement(w, o.isCell);
            if (z) {
              E.onTableCellMultiSelect.call(d, z, !0);
              return;
            }
          }
        } else if (m && (o.isOSX_IOS ? b : v) && f === 32) {
          a.preventDefault(), a.stopPropagation();
          const E = d.insertNode(o.createTextNode(" "));
          if (E) {
            d.setRange(E, E.length, E, E.length);
            return;
          }
        }
        if (o.isIE && !v && !b && !y && !g._nonTextKeyCode.test(f) && o.isBreak(h.commonAncestorContainer)) {
          const E = o.createTextNode(o.zeroWidthSpace);
          d.insertNode(E, null, !1), d.setRange(E, 1, E, 1);
        }
        g._directionKeyCode.test(f) && (c.setTimeout(d._editorRange.bind(d), 0), g._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(a) {
      if (a.shiftKey) return;
      let r = d.getSelectionNode();
      const f = function(b, h) {
        if (h || (h = 0), a.preventDefault(), a.stopPropagation(), !b) return;
        let y = d.getFileComponent(b);
        y ? d.selectComponent(y.target, y.pluginName) : (d.setRange(b, h, b, h), d.controllersOff());
      }, m = o.getParentElement(r, "table");
      if (m) {
        const b = o.getParentElement(r, "tr"), h = o.getParentElement(r, "td");
        let y = h, C = h;
        if (h) {
          for (; y && y.firstChild; ) y = y.firstChild;
          for (; C && C.lastChild; ) C = C.lastChild;
        }
        let w = r;
        for (; w && w.firstChild; ) w = w.firstChild;
        const S = w === y, I = w === C;
        let E = null, z = 0;
        if (a.keyCode === 38 && S) {
          const B = b && b.previousElementSibling;
          for (B ? E = B.children[h.cellIndex] : E = o.getPreviousDeepestNode(m, d.context.element.wysiwyg); E && E.lastChild; ) E = E.lastChild;
          E && (z = E.textContent.length);
        } else if (a.keyCode === 40 && I) {
          const B = b && b.nextElementSibling;
          for (B ? E = B.children[h.cellIndex] : E = o.getNextDeepestNode(m, d.context.element.wysiwyg); E && E.firstChild; ) E = E.firstChild;
        }
        if (E)
          return f(E, z), !1;
      }
      const v = d.getFileComponent(r);
      if (v) {
        const b = /37|38/.test(a.keyCode), h = /39|40/.test(a.keyCode);
        if (b) {
          const y = o.getPreviousDeepestNode(v.target, d.context.element.wysiwyg);
          f(y, y && y.textContent.length);
        } else if (h) {
          const y = o.getNextDeepestNode(v.target, d.context.element.wysiwyg);
          f(y);
        }
      }
    },
    onKeyUp_wysiwyg: function(a) {
      if (g._onShortcutKey) return;
      d._editorRange();
      const r = a.keyCode, f = a.ctrlKey || a.metaKey || r === 91 || r === 92 || r === 224, m = a.altKey;
      if (d.isReadOnly) {
        !f && g._cursorMoveKeyCode.test(r) && g._applyTagEffects();
        return;
      }
      const v = d.getRange();
      let b = d.getSelectionNode();
      if (d._isBalloon && (d._isBalloonAlways && r !== 27 || !v.collapsed))
        if (d._isBalloonAlways)
          r !== 27 && g._showToolbarBalloonDelay();
        else {
          g._showToolbarBalloon();
          return;
        }
      let h = b;
      for (; h && h.firstChild; ) h = h.firstChild;
      const y = d.getFileComponent(h);
      if (!(a.keyCode === 16 || a.shiftKey) && y ? d.selectComponent(y.target, y.pluginName) : d.currentFileComponentInfo && d.controllersOff(), r === 8 && o.isWysiwygDiv(b) && b.textContent === "" && b.children.length === 0) {
        a.preventDefault(), a.stopPropagation(), b.innerHTML = "";
        const E = o.createElement(o.isFormatElement(d._variable.currentNodes[0]) ? d._variable.currentNodes[0] : n.defaultTag);
        E.innerHTML = "<br>", b.appendChild(E), d.setRange(E, 0, E, 0), g._applyTagEffects(), d.history.push(!1);
        return;
      }
      const C = o.getFormatElement(b, null), w = o.getRangeFormatElement(b, null), S = d._formatAttrsTemp;
      if (S) {
        for (let E = 0, z = S.length; E < z; E++) {
          if (r === 13 && /^id$/i.test(S[E].name)) {
            C.removeAttribute("id");
            continue;
          }
          C.setAttribute(S[E].name, S[E].value);
        }
        d._formatAttrsTemp = null;
      }
      if (!C && v.collapsed && !o.isComponent(b) && !o.isList(b) && d._setDefaultFormat(o.isRangeFormatElement(w) ? "DIV" : n.defaultTag) !== null && (b = d.getSelectionNode()), !f && !m && !g._nonTextKeyCode.test(r) && b.nodeType === 3 && o.zeroWidthRegExp.test(b.textContent) && !(a.isComposing !== void 0 ? a.isComposing : g._IEisComposing)) {
        let E = v.startOffset, z = v.endOffset;
        const B = (b.textContent.substring(0, z).match(g._frontZeroWidthReg) || "").length;
        E = v.startOffset - B, z = v.endOffset - B, b.textContent = b.textContent.replace(o.zeroWidthRegExp, ""), d.setRange(b, E < 0 ? 0 : E, b, z < 0 ? 0 : z);
      }
      g._deleteKeyCode.test(r) && C && o.onlyZeroWidthSpace(C.textContent) && !C.previousElementSibling && (C.innerHTML = "<br>", d.setRange(C, 0, C, 0)), d._charCount(""), !(typeof _.onKeyUp == "function" && _.onKeyUp(a, d) === !1) && !f && !m && !g._historyIgnoreKeyCode.test(r) && d.history.push(!0);
    },
    onScroll_wysiwyg: function(a) {
      d.controllersOff(), d._isBalloon && g._hideToolbar(), typeof _.onScroll == "function" && _.onScroll(a, d);
    },
    onFocus_wysiwyg: function(a) {
      d._antiBlur || (d.hasFocus = !0, c.setTimeout(g._applyTagEffects), d._isInline && g._showToolbarInline(), typeof _.onFocus == "function" && _.onFocus(a, d));
    },
    onBlur_wysiwyg: function(a) {
      d._antiBlur || d._variable.isCodeView || (d.hasFocus = !1, d.effectNode = null, d.controllersOff(), (d._isInline || d._isBalloon) && g._hideToolbar(), d._setKeyEffect([]), d._variable.currentNodes = [], d._variable.currentNodesMap = [], n.showPathLabel && (e.element.navigation.textContent = ""), typeof _.onBlur == "function" && _.onBlur(a, d, this));
    },
    onMouseDown_resizingBar: function(a) {
      a.stopPropagation(), d.submenuOff(), d.controllersOff(), d._variable.resizeClientY = a.clientY, e.element.resizeBackground.style.display = "block";
      function r() {
        e.element.resizeBackground.style.display = "none", u.removeEventListener("mousemove", g._resize_editor), u.removeEventListener("mouseup", r);
      }
      u.addEventListener("mousemove", g._resize_editor), u.addEventListener("mouseup", r);
    },
    _resize_editor: function(a) {
      const r = e.element.editorArea.offsetHeight + (a.clientY - d._variable.resizeClientY), f = r < d._variable.minResizingSize ? d._variable.minResizingSize : r;
      e.element.wysiwygFrame.style.height = e.element.code.style.height = f + "px", d._variable.resizeClientY = a.clientY, o.isResizeObserverSupported || d.__callResizeFunction(f, null);
    },
    onResize_window: function() {
      o.isResizeObserverSupported || d.resetResponsiveToolbar();
      const a = e.element.toolbar, r = a.style.display === "none" || d._isInline && !d._inlineToolbarAttr.isShow;
      if (!(a.offsetWidth === 0 && !r)) {
        if (e.fileBrowser && e.fileBrowser.area.style.display === "block" && (e.fileBrowser.body.style.maxHeight = c.innerHeight - e.fileBrowser.header.offsetHeight - 50 + "px"), d.submenuActiveButton && d.submenu && d._setMenuPosition(d.submenuActiveButton, d.submenu), d._variable.isFullScreen) {
          d._variable.innerHeight_fullScreen += c.innerHeight - a.offsetHeight - d._variable.innerHeight_fullScreen, e.element.editorArea.style.height = d._variable.innerHeight_fullScreen + "px";
          return;
        }
        if (d._variable.isCodeView && d._isInline) {
          g._showToolbarInline();
          return;
        }
        d._iframeAutoHeight(), d._sticky && (a.style.width = e.element.topArea.offsetWidth - 2 + "px", g.onScroll_window());
      }
    },
    onScroll_window: function() {
      if (d._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || n.stickyToolbar < 0) return;
      const a = e.element, r = a.editorArea.offsetHeight, f = (this.scrollY || u.documentElement.scrollTop) + n.stickyToolbar, m = g._getEditorOffsets(n.toolbarContainer).top - (d._isInline ? a.toolbar.offsetHeight : 0), v = d._isInline && f - m > 0 ? f - m - e.element.toolbar.offsetHeight : 0;
      f < m ? g._offStickyToolbar() : f + d._variable.minResizingSize >= r + m ? (d._sticky || g._onStickyToolbar(v), a.toolbar.style.top = v + r + m + n.stickyToolbar - f - d._variable.minResizingSize + "px") : f >= m && g._onStickyToolbar(v);
    },
    _getEditorOffsets: function(a) {
      let r = a || e.element.topArea, f = 0, m = 0, v = 0;
      for (; r; )
        f += r.offsetTop, m += r.offsetLeft, v += r.scrollTop, r = r.offsetParent;
      return {
        top: f,
        left: m,
        scroll: v
      };
    },
    _getPageBottomSpace: function() {
      return u.documentElement.scrollHeight - (g._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
    },
    _onStickyToolbar: function(a) {
      const r = e.element;
      !d._isInline && !n.toolbarContainer && (r._stickyDummy.style.height = r.toolbar.offsetHeight + "px", r._stickyDummy.style.display = "block"), r.toolbar.style.top = n.stickyToolbar + a + "px", r.toolbar.style.width = d._isInline ? d._inlineToolbarAttr.width : r.toolbar.offsetWidth + "px", o.addClass(r.toolbar, "se-toolbar-sticky"), d._sticky = !0;
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
      const a = d.getRange(), r = a.startContainer, f = a.endContainer, m = o.getRangeFormatElement(r), v = o.getRangeFormatElement(f), b = o.isCell(m), h = o.isCell(v), y = a.commonAncestorContainer;
      if ((b && !m.previousElementSibling && !m.parentElement.previousElementSibling || h && !v.nextElementSibling && !v.parentElement.nextElementSibling) && m !== v)
        if (!b)
          o.removeItem(o.getParentElement(v, function(S) {
            return y === S.parentNode;
          }));
        else if (!h)
          o.removeItem(o.getParentElement(m, function(S) {
            return y === S.parentNode;
          }));
        else
          return o.removeItem(o.getParentElement(m, function(S) {
            return y === S.parentNode;
          })), d.nativeFocus(), !0;
      const C = r.nodeType === 1 ? o.getParentElement(r, ".se-component") : null, w = f.nodeType === 1 ? o.getParentElement(f, ".se-component") : null;
      return C && o.removeItem(C), w && o.removeItem(w), !1;
    },
    onPaste_wysiwyg: function(a) {
      const r = o.isIE ? c.clipboardData : a.clipboardData;
      return r ? g._dataTransferAction("paste", a, r) : !0;
    },
    _setClipboardComponent: function(a, r, f) {
      a.preventDefault(), a.stopPropagation(), f.setData("text/html", r.component.outerHTML);
    },
    onCopy_wysiwyg: function(a) {
      const r = o.isIE ? c.clipboardData : a.clipboardData;
      if (typeof _.onCopy == "function" && _.onCopy(a, r, d) === !1)
        return a.preventDefault(), a.stopPropagation(), !1;
      const f = d.currentFileComponentInfo;
      f && !o.isIE && (g._setClipboardComponent(a, f, r), o.addClass(f.component, "se-component-copy"), c.setTimeout(function() {
        o.removeClass(f.component, "se-component-copy");
      }, 150));
    },
    onSave_wysiwyg: function(a) {
      if (typeof _.onSave == "function") {
        _.onSave(a, d);
        return;
      }
    },
    onCut_wysiwyg: function(a) {
      const r = o.isIE ? c.clipboardData : a.clipboardData;
      if (typeof _.onCut == "function" && _.onCut(a, r, d) === !1)
        return a.preventDefault(), a.stopPropagation(), !1;
      const f = d.currentFileComponentInfo;
      f && !o.isIE && (g._setClipboardComponent(a, f, r), o.removeItem(f.component), d.controllersOff()), c.setTimeout(function() {
        d.history.push(!1);
      });
    },
    onDrop_wysiwyg: function(a) {
      if (d.isReadOnly || o.isIE)
        return a.preventDefault(), a.stopPropagation(), !1;
      const r = a.dataTransfer;
      return r ? (g._setDropLocationSelection(a), d.removeNode(), document.body.contains(d.currentControllerTarget) || d.controllersOff(), g._dataTransferAction("drop", a, r)) : !0;
    },
    _setDropLocationSelection: function(a) {
      const r = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
      let f = null;
      if (a.rangeParent ? (r.startContainer = a.rangeParent, r.startOffset = a.rangeOffset, r.endContainer = a.rangeParent, r.endOffset = a.rangeOffset) : d._wd.caretRangeFromPoint ? f = d._wd.caretRangeFromPoint(a.clientX, a.clientY) : f = d.getRange(), f && (r.startContainer = f.startContainer, r.startOffset = f.startOffset, r.endContainer = f.endContainer, r.endOffset = f.endOffset), r.startContainer === r.endContainer) {
        const m = o.getParentElement(r.startContainer, o.isComponent);
        m && (r.startContainer = m, r.startOffset = 0, r.endContainer = m, r.endOffset = 0);
      }
      d.setRange(r.startContainer, r.startOffset, r.endContainer, r.endOffset);
    },
    _dataTransferAction: function(a, r, f) {
      let m, v;
      if (o.isIE) {
        m = f.getData("Text");
        const b = d.getRange(), h = o.createElement("DIV"), y = {
          sc: b.startContainer,
          so: b.startOffset,
          ec: b.endContainer,
          eo: b.endOffset
        };
        return h.setAttribute("contenteditable", !0), h.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(h), h.focus(), c.setTimeout(function() {
          v = h.innerHTML, o.removeItem(h), d.setRange(y.sc, y.so, y.ec, y.eo), g._setClipboardData(a, r, m, v, f);
        }), !0;
      } else if (m = f.getData("text/plain"), v = f.getData("text/html"), g._setClipboardData(a, r, m, v, f) === !1)
        return r.preventDefault(), r.stopPropagation(), !1;
    },
    _setClipboardData: function(a, r, f, m, v) {
      const b = /class=["']*Mso(Normal|List)/i.test(m) || /content=["']*Word.Document/i.test(m) || /content=["']*OneNote.File/i.test(m) || /content=["']*Excel.Sheet/i.test(m);
      !m ? m = o._HTMLConvertor(f).replace(/\n/g, "<br>") : (m = m.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), b && (m = m.replace(/\n/g, " "), f = f.replace(/\n/g, " ")), m = d.cleanHTML(m, d.pasteTagsWhitelistRegExp, d.pasteTagsBlacklistRegExp));
      const y = d._charCount(d._charTypeHTML ? m : f);
      if (a === "paste" && typeof _.onPaste == "function") {
        const w = _.onPaste(r, m, y, d);
        if (w === !1)
          return !1;
        if (typeof w == "string") {
          if (!w) return !1;
          m = w;
        }
      }
      if (a === "drop" && typeof _.onDrop == "function") {
        const w = _.onDrop(r, m, y, d);
        if (w === !1)
          return !1;
        if (typeof w == "string") {
          if (!w) return !1;
          m = w;
        }
      }
      const C = v.files;
      if (C.length > 0 && !b)
        return /^image/.test(C[0].type) && d.plugins.image && _.insertImage(C), !1;
      if (!y)
        return !1;
      if (m)
        return _.insertHTML(m, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(a) {
      if (d.isDisabled || d.isReadOnly) return !1;
      const r = o.getParentElement(a.target, o.isComponent), f = d._lineBreaker.style;
      if (r && !d.currentControllerName) {
        const m = e.element;
        let v = 0, b = m.wysiwyg;
        do
          v += b.scrollTop, b = b.parentElement;
        while (b && !/^(BODY|HTML)$/i.test(b.nodeName));
        const h = m.wysiwyg.scrollTop, y = g._getEditorOffsets(null), C = o.getOffset(r, m.wysiwygFrame).top + h, w = a.pageY + v + (n.iframe && !n.toolbarContainer ? m.toolbar.offsetHeight : 0), S = C + (n.iframe ? v : y.top), I = o.isListCell(r.parentNode);
        let E = "", z = "";
        if ((I ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) && w < S + 20)
          z = C, E = "t";
        else if ((I ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) && w > S + r.offsetHeight - 20)
          z = C + r.offsetHeight, E = "b";
        else {
          f.display = "none";
          return;
        }
        d._variable._lineBreakComp = r, d._variable._lineBreakDir = E, f.top = z - h + "px", d._lineBreakerButton.style.left = o.getOffset(r).left + r.offsetWidth / 2 - 15 + "px", f.display = "block";
      } else f.display !== "none" && (f.display = "none");
    },
    _enterPrevent: function(a) {
      a.preventDefault(), o.isMobile && d.__focusTemp.focus();
    },
    _onMouseDown_lineBreak: function(a) {
      a.preventDefault();
    },
    _onLineBreak: function(a) {
      a.preventDefault();
      const r = d._variable._lineBreakComp, f = this ? this : d._variable._lineBreakDir, m = o.isListCell(r.parentNode), v = o.createElement(m ? "BR" : o.isCell(r.parentNode) ? "DIV" : n.defaultTag);
      if (m || (v.innerHTML = "<br>"), d._charTypeHTML && !d.checkCharCount(v.outerHTML, "byte-html")) return;
      r.parentNode.insertBefore(v, f === "t" ? r : r.nextSibling), d._lineBreaker.style.display = "none", d._variable._lineBreakComp = null;
      const b = m ? v : v.firstChild;
      d.setRange(b, 1, b, 1), d.history.push(!1);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const a = n.iframe ? d._ww : e.element.wysiwyg;
      o.isResizeObserverSupported && (this._resizeObserver = new c.ResizeObserver(function(r) {
        d.__callResizeFunction(-1, r[0]);
      })), e.element.toolbar.addEventListener("mousedown", g._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", g._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", g.onClick_toolbar, !1), a.addEventListener("mousedown", g.onMouseDown_wysiwyg, !1), a.addEventListener("click", g.onClick_wysiwyg, !1), a.addEventListener(o.isIE ? "textinput" : "input", g.onInput_wysiwyg, !1), a.addEventListener("keydown", g.onKeyDown_wysiwyg, !1), a.addEventListener("keyup", g.onKeyUp_wysiwyg, !1), a.addEventListener("paste", g.onPaste_wysiwyg, !1), a.addEventListener("copy", g.onCopy_wysiwyg, !1), a.addEventListener("cut", g.onCut_wysiwyg, !1), a.addEventListener("drop", g.onDrop_wysiwyg, !1), a.addEventListener("scroll", g.onScroll_wysiwyg, !1), a.addEventListener("focus", g.onFocus_wysiwyg, !1), a.addEventListener("blur", g.onBlur_wysiwyg, !1), g._lineBreakerBind = { a: g._onLineBreak.bind(""), t: g._onLineBreak.bind("t"), b: g._onLineBreak.bind("b") }, a.addEventListener("mousemove", g.onMouseMove_wysiwyg, !1), d._lineBreakerButton.addEventListener("mousedown", g._onMouseDown_lineBreak, !1), d._lineBreakerButton.addEventListener("click", g._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", g._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", g._lineBreakerBind.b, !1), a.addEventListener("touchstart", g.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), a.addEventListener("touchend", g.onClick_wysiwyg, { passive: !0, useCapture: !1 }), n.height === "auto" && !n.codeMirrorEditor && (e.element.code.addEventListener("keydown", g._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", g._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", g._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(n.height) && n.resizeEnable ? e.element.resizingBar.addEventListener("mousedown", g.onMouseDown_resizingBar, !1) : o.addClass(e.element.resizingBar, "se-resizing-none")), g._setResponsiveToolbar(), o.isResizeObserverSupported && (this._toolbarObserver = new c.ResizeObserver(d.resetResponsiveToolbar)), c.addEventListener("resize", g.onResize_window, !1), n.stickyToolbar > -1 && c.addEventListener("scroll", g.onScroll_window, !1);
    },
    _removeEvent: function() {
      const a = n.iframe ? d._ww : e.element.wysiwyg;
      e.element.toolbar.removeEventListener("mousedown", g._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", g._buttonsEventHandler), e.element.toolbar.removeEventListener("click", g.onClick_toolbar), a.removeEventListener("mousedown", g.onMouseDown_wysiwyg), a.removeEventListener("click", g.onClick_wysiwyg), a.removeEventListener(o.isIE ? "textinput" : "input", g.onInput_wysiwyg), a.removeEventListener("keydown", g.onKeyDown_wysiwyg), a.removeEventListener("keyup", g.onKeyUp_wysiwyg), a.removeEventListener("paste", g.onPaste_wysiwyg), a.removeEventListener("copy", g.onCopy_wysiwyg), a.removeEventListener("cut", g.onCut_wysiwyg), a.removeEventListener("drop", g.onDrop_wysiwyg), a.removeEventListener("scroll", g.onScroll_wysiwyg), a.removeEventListener("mousemove", g.onMouseMove_wysiwyg), d._lineBreakerButton.removeEventListener("mousedown", g._onMouseDown_lineBreak), d._lineBreakerButton.removeEventListener("click", g._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", g._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", g._lineBreakerBind.b), g._lineBreakerBind = null, a.removeEventListener("touchstart", g.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), a.removeEventListener("touchend", g.onClick_wysiwyg, { passive: !0, useCapture: !1 }), a.removeEventListener("focus", g.onFocus_wysiwyg), a.removeEventListener("blur", g.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", g._codeViewAutoHeight), e.element.code.removeEventListener("keyup", g._codeViewAutoHeight), e.element.code.removeEventListener("paste", g._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", g.onMouseDown_resizingBar), g._resizeObserver && (g._resizeObserver.unobserve(e.element.wysiwygFrame), g._resizeObserver = null), g._toolbarObserver && (g._toolbarObserver.unobserve(e.element._toolbarShadow), g._toolbarObserver = null), c.removeEventListener("resize", g.onResize_window), c.removeEventListener("scroll", g.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (s.length === 0) {
        s = null;
        return;
      }
      g._responsiveCurrentSize = "default";
      const a = g._responsiveButtonSize = [], r = g._responsiveButtons = { default: s[0] };
      for (let f = 1, m = s.length, v, b; f < m; f++)
        b = s[f], v = b[0] * 1, a.push(v), r[v] = b[1];
      a.sort(function(f, m) {
        return f - m;
      }).unshift("default");
    }
  }, _ = {
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
      const r = Bl._createToolBar(u, a, d.plugins, n);
      s = r.responsiveButtons, g._setResponsiveToolbar(), e.element.toolbar.replaceChild(r._buttonTray, e.element._buttonTray);
      const f = Al(e.element.originElement, d._getConstructed(e.element), n);
      e.element = f.element, e.tool = f.tool, n.iframe && (e.element.wysiwyg = d._wd.body), d._recoverButtonStates(), d._cachingButtons(), d.history._resetCachingButton(), d.effectNode = null, d.hasFocus && g._applyTagEffects(), d.isReadOnly && o.setDisabledButtons(!0, d.resizingDisabledButtons), typeof _.onSetToolbarButtons == "function" && _.onSetToolbarButtons(r._buttonTray.querySelectorAll("button"), d);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(a) {
      g._removeEvent(), d._resetComponents(), o.removeClass(d._styleCommandMap.showBlocks, "active"), o.removeClass(d._styleCommandMap.codeView, "active"), d._variable.isCodeView = !1, d._iframeAuto = null, d.plugins = a.plugins || d.plugins;
      const r = [n, a].reduce(function(b, h) {
        for (let y in h)
          if (o.hasOwn(h, y))
            if (y === "plugins" && h[y] && b[y]) {
              let C = b[y], w = h[y];
              C = C.length ? C : c.Object.keys(C).map(function(S) {
                return C[S];
              }), w = w.length ? w : c.Object.keys(w).map(function(S) {
                return w[S];
              }), b[y] = w.filter(function(S) {
                return C.indexOf(S) === -1;
              }).concat(C);
            } else
              b[y] = h[y];
        return b;
      }, {}), f = e.element, m = f.wysiwyg.innerHTML, v = Bl._setOptions(r, e, n);
      v.callButtons && (t = v.callButtons, d.initPlugins = {}), v.plugins && (d.plugins = i = v.plugins), f._menuTray.children.length === 0 && (this._menuTray = {}), s = v.toolbar.responsiveButtons, d.options = n = r, d.lang = l = n.lang, n.iframe && f.wysiwygFrame.addEventListener("load", function() {
        o._setIframeDocument(this, n), d._setOptionsInit(f, m);
      }), f.editorArea.appendChild(f.wysiwygFrame), n.iframe || d._setOptionsInit(f, m);
    },
    /**
     * @description Set "options.defaultStyle" style.
     * Define the style of the edit area
     * It can also be defined with the "setOptions" method, but the "setDefaultStyle" method does not render the editor again.
     * @param {String} style Style string
     */
    setDefaultStyle: function(a) {
      const r = n._editorStyles = o._setDefaultOptionStyle(n, a), f = e.element;
      f.topArea.style.cssText = r.top, f.code.style.cssText = n._editorStyles.frame, f.code.style.display = "none", n.height === "auto" ? f.code.style.overflow = "hidden" : f.code.style.overflow = "", n.iframe ? (f.wysiwygFrame.style.cssText = r.frame, f.wysiwyg.style.cssText = r.editor) : f.wysiwygFrame.style.cssText = r.frame + r.editor;
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
      e.element.originElement.value = a, g.onSave_wysiwyg(a, d);
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
      return a = typeof a == "string" ? a : n.charCounterType, d.getCharLength(d._charTypeHTML ? e.element.wysiwyg.innerHTML : e.element.wysiwyg.textContent, a);
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
    insertHTML: function(a, r, f, m) {
      if (e.element.wysiwygFrame.contains(d.getSelection().focusNode) || d.focus(), typeof a == "string") {
        r || (a = d.cleanHTML(a, null, null));
        try {
          if (o.isListCell(o.getFormatElement(d.getSelectionNode(), null))) {
            const z = u.createRange().createContextualFragment(a).childNodes;
            d._isFormatData(z) && (a = d._convertListCell(z));
          }
          const b = u.createRange().createContextualFragment(a).childNodes;
          if (f) {
            const E = d._charTypeHTML ? "outerHTML" : "textContent";
            let z = "";
            for (let B = 0, P = b.length; B < P; B++)
              z += b[B][E];
            if (!d.checkCharCount(z, null)) return;
          }
          let h, y, C, w, S;
          for (; h = b[0]; ) {
            if (w && w.nodeType === 3 && y && y.nodeType === 1 && o.isBreak(h)) {
              w = h, o.removeItem(h);
              continue;
            }
            C = d.insertNode(h, y, !1), y = C.container || C, S || (S = C), w = h;
          }
          w.nodeType === 3 && y.nodeType === 1 && (y = w);
          const I = y.nodeType === 3 ? C.endOffset || y.textContent.length : y.childNodes.length;
          m ? d.setRange(S.container || S, S.startOffset || 0, y, I) : d.setRange(y, I, y, I);
        } catch (v) {
          if (d.isDisabled || d.isReadOnly) return;
          console.warn("[SUNEDITOR.insertHTML.fail] " + v), d.execCommand("insertHTML", !1, a);
        }
      } else if (o.isComponent(a))
        d.insertComponent(a, !1, f, !1);
      else {
        let v = null;
        (o.isFormatElement(a) || o.isMedia(a)) && (v = o.getFormatElement(d.getSelectionNode(), null)), d.insertNode(a, v, f);
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
        const f = o.createElement("DIV");
        f.innerHTML = r;
        const m = e.element.wysiwyg, v = f.children;
        for (let b = 0, h = v.length; b < h; b++)
          v[b] && m.appendChild(v[b]);
      }
      d.history.push(!1);
    },
    /**
     * @description Switch to or off "ReadOnly" mode.
     * @param {Boolean} value "readOnly" boolean value.
     */
    readOnly: function(a) {
      d.isReadOnly = a, o.setDisabledButtons(!!a, d.resizingDisabledButtons), a ? (d.controllersOff(), d.submenuActiveButton && d.submenuActiveButton.disabled && d.submenuOff(), d._moreLayerActiveButton && d._moreLayerActiveButton.disabled && d.moreLayerOff(), d.containerActiveButton && d.containerActiveButton.disabled && d.containerOff(), d.modalForm && d.plugins.dialog.close.call(d), e.element.code.setAttribute("readOnly", "true"), o.addClass(e.element.wysiwygFrame, "se-read-only")) : (e.element.code.removeAttribute("readOnly"), o.removeClass(e.element.wysiwygFrame, "se-read-only")), n.codeMirrorEditor && n.codeMirrorEditor.setOption("readOnly", !!a);
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
      a.display === "none" && (a.display = n.display);
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
      for (let a in d.functions)
        o.hasOwn(d, a) && delete d.functions[a];
      for (let a in d)
        o.hasOwn(d, a) && delete d[a];
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
  d.functions = _, d.options = n;
  let x = e.element, k = x.originElement, N = x.topArea;
  return k.style.display = "none", N.style.display = "block", n.iframe && x.wysiwygFrame.addEventListener("load", function() {
    o._setIframeDocument(this, n), d._editorInit(!1, n.value), n.value = null;
  }), typeof k.nextElementSibling == "object" ? k.parentNode.insertBefore(N, k.nextElementSibling) : k.parentNode.appendChild(N), x.editorArea.appendChild(x.wysiwygFrame), x = k = N = null, n.iframe || (d._editorInit(!1, n.value), n.value = null), _;
}
const Eu = {
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
    ue._propertiesInit(), typeof t != "object" && (t = {}), i && (t = [i, t].reduce(function(s, u) {
      for (let c in u)
        if (ue.hasOwn(u, c))
          if (c === "plugins" && u[c] && s[c]) {
            let o = s[c], p = u[c];
            o = o.length ? o : Object.keys(o).map(function(d) {
              return o[d];
            }), p = p.length ? p : Object.keys(p).map(function(d) {
              return p[d];
            }), s[c] = p.filter(function(d) {
              return o.indexOf(d) === -1;
            }).concat(o);
          } else
            s[c] = u[c];
      return s;
    }, {}));
    const l = typeof e == "string" ? document.getElementById(e) : e;
    if (!l)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const n = Bl.init(l, t);
    if (n.constructed._top.id && document.getElementById(n.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + n.constructed._top.id + '")');
    return Su(Al(l, n.constructed, n.options), n.pluginCallButtons, n.plugins, n.options.lang, t, n._responsiveButtons);
  }
}, Tu = ["innerHTML", "id", "tabindex"], Lu = /* @__PURE__ */ Le({
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
    const l = i, n = e, s = Q(null), u = Q(n.modelValue);
    let c = null, o;
    const p = Q(n.focusing), d = (k) => {
      p.value = !0, l("focus", k);
    }, g = (k) => {
      p.value = !1, l("blur", k);
    }, _ = (k) => {
      o && clearTimeout(o), o = setTimeout(() => {
        oo(k) === "" ? u.value = "" : u.value = k;
      }, 100);
    }, x = () => {
      let k = {
        //@ts-ignore
        lang: Vn[n.lang] ? Vn[n.lang] : fl,
        plugins: {
          ...Cu
        },
        ...ku
      };
      c = Eu.create(n.id, k), c.onChange = (N) => {
        _(N), n.disabled ? c == null || c.disabled() : c == null || c.enabled();
      }, c.onKeyUp = (N, a) => {
        _(a.getContents(!1));
      }, c.onBlur = () => {
        g();
      }, c.onClick = () => {
        d();
      };
    };
    return ge(() => n.modelValue, (k) => u.value = k), ge(u, (k) => l("update:modelValue", k)), ul(() => {
      x();
    }), t({
      doSetValue: (k) => {
        c && c.setContents(k);
      }
    }), (k, N) => (W(), se("div", {
      innerHTML: u.value,
      ref_key: "input",
      ref: s,
      id: k.id,
      tabindex: k.tabindex
    }, null, 8, Tu));
  }
}), zu = {
  key: 0,
  class: "lkt-field--searchable-box"
}, Nu = ["value", "placeholder"], Bu = { key: 0 }, Au = {
  key: 1,
  class: "lkt-field-select-read"
}, Ru = ["title"], Du = /* @__PURE__ */ Le({
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
    const l = i, n = e, s = n.multiple && n.canTag, u = Q(""), c = Q(null), o = Q(n.showOptions);
    ge(o, (h) => {
      s || l("update:showOptions", h);
    });
    const p = Q(n.focusing), d = Q(!1), g = Q(!1), _ = () => {
      tl(() => {
        p.value = d.value || g.value, o.value = p.value;
      });
    };
    ge(d, (h) => {
      h && (g.value = !1), _();
    }), ge(g, (h) => {
      h && (d.value = !1), _();
    }), ge(p, (h) => {
      l(h ? "focus" : "blur");
    });
    let x, k;
    const N = (h) => {
      x = setTimeout(() => {
        d.value = !1;
      }, 100);
    }, a = (h) => {
      d.value = !0, s && h.key === "Enter" ? (l("tag", u.value), u.value = "") : ["ArrowDown", "ArrowUp", "Enter"].includes(h.key) ? l("navigate", h) : l("search", u.value);
    }, r = (h) => {
      d.value = !0;
    }, f = (h) => {
      k = setTimeout(() => {
        g.value = !1;
      }, 100);
    }, m = (h) => {
      g.value = !0, ["ArrowDown", "ArrowUp", "Enter"].includes(h.key) && l("navigate", h);
    }, v = (h) => {
      g.value = !0;
    }, b = (h) => {
      l("untag", h);
    };
    return t({
      keepFocused: () => {
        clearTimeout(x), clearTimeout(k), c.value && c.value.focus();
      }
    }), (h, y) => {
      const C = Se("lkt-tag"), w = Se("lkt-button");
      return W(), se(Ze, null, [
        h.searchable && (h.multiple || h.searchMode) || Z(s) ? (W(), se("div", zu, [
          h.multiple ? (W(), ne(C, {
            key: 0,
            icon: h.optionsIcon,
            text: h.pickedOptions.length
          }, null, 8, ["icon", "text"])) : h.pickedOptions.length > 0 ? (W(), ne(C, { key: 1 }, {
            default: xe(() => [
              re(Tt, {
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
          })) : fe("", !0),
          Xe(ae("input", {
            "onUpdate:modelValue": y[0] || (y[0] = (S) => u.value = S),
            ref_key: "queryField",
            ref: c,
            value: u.value,
            placeholder: h.searchPlaceholder,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: a,
            onBlur: N,
            onFocus: r
          }, null, 40, Nu), [
            [dl, u.value]
          ])
        ])) : fe("", !0),
        Xe(re(w, {
          type: Z(s) ? "content" : "",
          ref: "selectButton",
          class: "lkt-field--toggle-button lkt-field--select-button",
          "open-tooltip": o.value,
          "onUpdate:openTooltip": y[1] || (y[1] = (S) => o.value = S),
          onKeyup: m,
          onBlur: f,
          onFocus: v
        }, {
          default: xe(() => [
            Z(s) || h.multiple && h.pickedOptions.length > 0 ? (W(), se(Ze, { key: 0 }, [
              h.multipleDisplayEdition === Z(It).Count ? (W(), se("div", Bu, bt(h.pickedOptions.length), 1)) : (W(), se("ul", Au, [
                (W(!0), se(Ze, null, _t(h.pickedOptions, (S, I) => (W(), se("li", {
                  title: S.label
                }, [
                  re(Tt, {
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
                    "is-tag": Z(s),
                    onClickIcon: b
                  }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "editable", "is-tag"])
                ], 8, Ru))), 256))
              ]))
            ], 64)) : !h.multiple && h.pickedOptions.length > 0 ? (W(), ne(Tt, {
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
            }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "editable"])) : fe("", !0)
          ]),
          _: 1
        }, 8, ["type", "open-tooltip"]), [
          [kt, h.multiple || !h.searchable || !h.searchMode]
        ])
      ], 64);
    };
  }
}), Iu = { class: "lkt-calc--formula" }, Mu = { class: "lkt-calc--custom-pad" }, Ou = { class: "lkt-calc--pad" }, Fu = { class: "lkt-calc--numeric-pad" }, Hu = { class: "lkt-calc--math-pad" }, Vu = { class: "lkt-calc--advance-math-pad" }, Pu = /* @__PURE__ */ Le({
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
    const i = t, l = e, n = Q(l.modelValue), s = Q(null);
    ge(n, (v) => i("update:modelValue", v));
    const u = Q(l.focusing), c = Q(null);
    let o;
    const p = () => {
      clearTimeout(o), s.value && typeof s.value.focus == "function" && s.value.focus();
    }, d = (v) => {
      n.value += "" + v, p();
    }, g = (v) => {
      n.value += " " + v + " ", p();
    }, _ = (v) => {
      n.value += " " + v + "(", p();
    }, x = () => {
      n.value += " sqrt(", p();
    }, k = (v) => {
      n.value += "" + v, p();
    }, N = () => {
      n.value += ".", p();
    }, a = () => {
      n.value += " ", p();
    }, r = (v) => {
      n.value += "" + v.value, p();
    }, f = () => {
      u.value = !0;
    }, m = () => {
      o = setTimeout(() => {
        u.value = !1;
      }, 100);
    };
    return ge(u, (v) => {
      i(v ? "focus" : "blur");
    }), (v, b) => {
      const h = Se("lkt-button"), y = Se("lkt-tooltip");
      return W(), se("div", {
        ref_key: "container",
        ref: c
      }, [
        ae("div", Iu, [
          Xe(ae("input", {
            type: "text",
            ref_key: "input",
            ref: s,
            "onUpdate:modelValue": b[0] || (b[0] = (C) => n.value = C),
            onFocus: f,
            onBlur: m
          }, null, 544), [
            [dl, n.value]
          ])
        ]),
        v.editable ? (W(), ne(y, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--calc",
          modelValue: u.value,
          "onUpdate:modelValue": b[27] || (b[27] = (C) => u.value = C),
          referrer: c.value,
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: xe(() => [
            ae("div", Mu, [
              (W(!0), se(Ze, null, _t(v.options, (C) => (W(), ne(h, {
                icon: C.icon,
                text: C.label,
                onClick: (w) => r(C)
              }, null, 8, ["icon", "text", "onClick"]))), 256))
            ]),
            ae("div", Ou, [
              ae("div", Fu, [
                re(h, {
                  onClick: b[1] || (b[1] = (C) => d(7)),
                  text: "7",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[2] || (b[2] = (C) => d(8)),
                  text: "8",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[3] || (b[3] = (C) => d(9)),
                  text: "9",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[4] || (b[4] = (C) => d(4)),
                  text: "4",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[5] || (b[5] = (C) => d(5)),
                  text: "5",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[6] || (b[6] = (C) => d(6)),
                  text: "6",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[7] || (b[7] = (C) => d(1)),
                  text: "1",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[8] || (b[8] = (C) => d(2)),
                  text: "2",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[9] || (b[9] = (C) => d(3)),
                  text: "3",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[10] || (b[10] = (C) => N()),
                  text: "."
                }),
                re(h, {
                  onClick: b[11] || (b[11] = (C) => d(0)),
                  text: "0",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[12] || (b[12] = (C) => a()),
                  text: " "
                })
              ]),
              ae("div", Hu, [
                re(h, {
                  onClick: b[13] || (b[13] = (C) => k("[")),
                  text: "["
                }),
                re(h, {
                  onClick: b[14] || (b[14] = (C) => k("]")),
                  text: "]"
                }),
                re(h, {
                  onClick: b[15] || (b[15] = (C) => k("(")),
                  text: "("
                }),
                re(h, {
                  onClick: b[16] || (b[16] = (C) => k(")")),
                  text: ")"
                }),
                re(h, {
                  onClick: b[17] || (b[17] = (C) => g("+")),
                  text: "+"
                }),
                re(h, {
                  onClick: b[18] || (b[18] = (C) => g("-")),
                  text: "−"
                }),
                re(h, {
                  onClick: b[19] || (b[19] = (C) => g("*")),
                  text: "×"
                }),
                re(h, {
                  onClick: b[20] || (b[20] = (C) => g("/")),
                  text: "÷"
                })
              ]),
              ae("div", Vu, [
                re(h, {
                  onClick: b[21] || (b[21] = (C) => x()),
                  text: "√"
                }),
                re(h, {
                  onClick: b[22] || (b[22] = (C) => _("log")),
                  text: "log"
                }),
                re(h, {
                  onClick: b[23] || (b[23] = (C) => _("ln")),
                  text: "ln"
                }),
                re(h, {
                  onClick: b[24] || (b[24] = (C) => _("sin")),
                  text: "sin"
                }),
                re(h, {
                  onClick: b[25] || (b[25] = (C) => _("cos")),
                  text: "cos"
                }),
                re(h, {
                  onClick: b[26] || (b[26] = (C) => _("tan")),
                  text: "tan"
                })
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "referrer"])) : fe("", !0)
      ], 512);
    };
  }
}), Uu = /* @__PURE__ */ Le({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = ie(() => {
      let u = vn(t.validation.code, t.stack), c = {
        min: t.validation.min,
        max: t.validation.max,
        value: t.validation.equalToValue
      }, o = vn(t.validation.status + "-" + t.validation.code, t.stack);
      return o && (u = o), u ? u.startsWith("__:") ? ei(u.substring(3), c) : Ca(u, c, ":", "") : t.validation.code;
    }), l = ie(() => te.validationIconSlot !== ""), n = ie(() => te.validationIconSlot), s = ie(() => {
      let u = [];
      return u.push("code-" + t.validation.code), u.push("is-" + t.validation.status), u.join(" ");
    });
    return (u, c) => (W(), se("div", {
      class: it(["lkt-field-validation-message", s.value])
    }, [
      l.value ? (W(), ne(Mt(n.value), { key: 0 })) : fe("", !0),
      Zt(" " + bt(i.value), 1)
    ], 2));
  }
}), Wu = {
  key: 0,
  class: "lkt-field-validation-info"
}, $u = /* @__PURE__ */ Le({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = Q(t.items), l = Q(!1);
    return ge(() => t.items, (n) => {
      l.value = !0, tl(() => l.value = !1);
    }, { deep: !0 }), (n, s) => l.value ? fe("", !0) : (W(), se("div", Wu, [
      (W(!0), se(Ze, null, _t(i.value, (u) => (W(), ne(Uu, {
        validation: u,
        stack: n.stack,
        key: u.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), Zu = ["id"], qu = /* @__PURE__ */ Le({
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
    const i = t, l = e, n = Q(l.modelValue), s = Q(l.focusing);
    let u, c;
    const o = Q({}), p = () => {
      clearTimeout(c), c = setTimeout(() => {
        o.value = {
          query: n.value
        };
      }, 300);
    }, d = () => {
      s.value = !0;
    }, g = () => {
      u = setTimeout(() => {
        s.value = !1;
      }, 100);
    };
    ge(s, (x) => {
      i(x ? "focus" : "blur");
    });
    const _ = () => {
      clearTimeout(u), setTimeout(() => {
        d();
      }, 100);
    };
    return (x, k) => {
      const N = Se("lkt-table"), a = Se("lkt-tooltip");
      return W(), se(Ze, null, [
        Xe(ae("input", {
          id: x.id,
          type: "text",
          ref: "input",
          "onUpdate:modelValue": k[0] || (k[0] = (r) => n.value = r),
          onFocus: d,
          onBlur: g,
          onKeyup: p
        }, null, 40, Zu), [
          [dl, n.value]
        ]),
        x.editable && x.hadFirstFocus ? (W(), ne(a, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--dropdown lkt-field--search-results",
          modelValue: s.value,
          "onUpdate:modelValue": k[1] || (k[1] = (r) => s.value = r),
          referrer: x.container,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: xe(() => [
            re(N, {
              resource: x.optionsResource,
              filters: o.value,
              "items-container-class": "lkt-field--dropdown-options",
              type: "ul",
              onPage: _,
              onClick: _
            }, {
              item: xe(({ item: r, index: f, isLoading: m, canCreate: v, canUpdate: b, canDrop: h, canRead: y, doDrop: C }) => [
                re(Tt, {
                  option: r,
                  onClick: _
                }, null, 8, ["option"])
              ]),
              _: 1
            }, 8, ["resource", "filters"])
          ]),
          _: 1
        }, 8, ["modelValue", "referrer"])) : fe("", !0)
      ], 64);
    };
  }
}), ju = {
  key: 0,
  class: "lkt-field-main"
}, Gu = {
  key: 3,
  class: "lkt-field--read-value"
}, Yu = ["innerHTML", "title"], Ku = ["title"], Xu = { key: 0 }, Ju = {
  key: 1,
  class: "lkt-field-select-read"
}, Qu = ["title"], ed = ["innerHTML"], td = ["innerHTML", "title"], id = ["innerHTML", "title"], ld = /* @__PURE__ */ Le({
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
    multipleDisplay: { default: It.List },
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
    optionsResourceData: { default: () => ({}) }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const i = t, l = Fl(), n = e, s = () => i("click"), u = ie(() => {
      switch (n.type) {
        case q.Select:
          if (n.multiple && Array.isArray(n.value) && n.value.length > 0 || n.multiple && n.multipleDisplay === It.Count || !n.multiple && n.value) return "";
          break;
        case q.Date:
          if (n.value !== "") return "";
          break;
        default:
          if (n.value !== "") return "";
      }
      return te.customValueSlots[n.emptyValueSlot] ?? te.defaultEmptyValueSlot;
    }), c = ie(() => te.customValueSlots[n.valueSlot] ?? "");
    let o = n.value;
    return n.type === q.Select && n.multiple && !Array.isArray(o) && (o = []), (n.type === q.Textarea || n.type === q.Text) && typeof te.readTextMaxLength < "u" && o.length > te.readTextMaxLength && (o = o.substring(0, te.readTextMaxLength) + "..."), (p, d) => {
      const g = Se("lkt-image"), _ = Se("lkt-button"), x = Se("lkt-anchor"), k = Se("lkt-tag");
      return W(), se("div", {
        class: "lkt-field--read",
        onClick: s
      }, [
        Z(l).value ? dt(p.$slots, "value", {
          key: 0,
          value: Z(o),
          title: p.title,
          data: p.slotData
        }) : u.value ? (W(), ne(Mt(u.value), {
          key: 1,
          data: p.slotData
        }, null, 8, ["data"])) : c.value ? (W(), ne(Mt(c.value), {
          key: 2,
          value: Z(o),
          title: p.title,
          data: p.slotData
        }, null, 8, ["value", "title", "data"])) : (W(), se(Ze, { key: 3 }, [
          p.type === Z(q).File || p.type === Z(q).Image ? (W(), se("div", ju, [
            re(_, {
              class: "lkt-field--toggle-button",
              text: p.type === Z(q).File ? p.fileName : ""
            }, {
              default: xe(() => [
                p.type === Z(q).Image ? (W(), ne(g, {
                  key: 0,
                  src: Z(o),
                  class: "lkt-field--image-cover"
                }, null, 8, ["src"])) : fe("", !0),
                p.type === Z(q).Image ? (W(), ne(g, {
                  key: 1,
                  src: Z(o),
                  class: "lkt-field--image-main"
                }, null, 8, ["src"])) : fe("", !0)
              ]),
              _: 1
            }, 8, ["text"])
          ])) : p.type === Z(q).Email ? (W(), ne(x, {
            key: 1,
            type: "mail",
            class: "lkt-field--read-value",
            title: p.title,
            to: Z(o)
          }, {
            default: xe(() => [
              Zt(bt(Z(o)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : p.type === Z(q).Tel ? (W(), ne(x, {
            key: 2,
            type: "tel",
            class: "lkt-field--read-value",
            title: p.title,
            to: Z(o)
          }, {
            default: xe(() => [
              Zt(bt(Z(o)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : Z(Rt).includes(p.type) ? (W(), se("div", Gu, [
            re(k, {
              icon: Z(o) ? "lkt-field-icon-ok" : "lkt-field-icon-cancel",
              "featured-text": p.label,
              title: p.title
            }, null, 8, ["icon", "featured-text", "title"])
          ])) : p.type === Z(q).Date ? (W(), se("div", {
            key: 4,
            class: "lkt-field--read-value",
            innerHTML: Z(o),
            title: p.title
          }, null, 8, Yu)) : p.type === Z(q).Select ? (W(), se("div", {
            key: 5,
            class: "lkt-field--read-value",
            title: p.title
          }, [
            p.multiple ? (W(), se(Ze, { key: 0 }, [
              p.multipleDisplay === Z(It).Count ? (W(), se("div", Xu, bt(Z(o).length), 1)) : Z(o).length > 0 ? (W(), se("ul", Ju, [
                (W(!0), se(Ze, null, _t(Z(o), (N, a) => {
                  var r;
                  return W(), se("li", {
                    title: (r = Z(o)[a]) == null ? void 0 : r.label
                  }, [
                    re(Tt, {
                      option: Z(o)[a],
                      "option-slot": p.optionSlot,
                      icon: p.optionsIcon,
                      text: p.optionsText,
                      "custom-class": p.optionsClass,
                      modal: p.optionsModal,
                      "modal-data": p.optionsModalData,
                      download: p.optionsDownload,
                      "label-formatter": p.optionsLabelFormatter
                    }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter"])
                  ], 8, Qu);
                }), 256))
              ])) : fe("", !0)
            ], 64)) : Z(o).length > 0 ? (W(), ne(Tt, {
              key: 1,
              option: Z(o)[0],
              "option-slot": p.optionSlot,
              icon: p.optionsIcon,
              text: p.optionsText,
              "custom-class": p.optionsClass,
              modal: p.optionsModal,
              "modal-data": p.optionsModalData,
              download: p.optionsDownload,
              "label-formatter": p.optionsLabelFormatter
            }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter"])) : fe("", !0)
          ], 8, Ku)) : p.modal ? (W(), ne(_, {
            key: 6,
            class: "lkt-field--read-value",
            title: p.title,
            modal: p.modal,
            "modal-key": p.modalKey,
            "modal-data": p.modalData
          }, {
            default: xe(() => [
              ae("div", { innerHTML: Z(o) }, null, 8, ed)
            ]),
            _: 1
          }, 8, ["title", "modal", "modal-key", "modal-data"])) : p.download ? (W(), ne(Tt, {
            key: 7,
            class: "lkt-field--read-value",
            option: { value: "", label: Z(o) },
            download: p.download,
            text: p.optionsText,
            "custom-class": p.optionsClass
          }, null, 8, ["option", "download", "text", "custom-class"])) : p.type === Z(q).Number ? (W(), se("div", {
            key: 8,
            class: "lkt-field--read-value",
            innerHTML: p.title,
            title: p.title
          }, null, 8, td)) : (W(), se("div", {
            key: 9,
            class: "lkt-field--read-value",
            innerHTML: Z(o),
            title: p.title
          }, null, 8, id))
        ], 64))
      ]);
    };
  }
}), nd = ["name", "id", "disabled", "readonly", "placeholder", "accept"], od = /* @__PURE__ */ Le({
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
    const i = t, l = e, n = Q(null), s = Q(l.modelValue), u = Q(l.fileName), c = Q(l.uploading), o = (p) => {
      let d = p.target;
      if (d.files && d.files[0]) {
        u.value = d.files[0].name;
        const g = new FileReader();
        g.onload = (_) => {
          if (s.value = _.target.result, l.resource) {
            c.value = !0, i("uploading");
            let x = JSON.parse(JSON.stringify(l.resourceData));
            x.files = d.files[0], zl(l.resource, x).then((k) => {
              s.value = k.data, c.value = !1, i("upload-success", k);
            }).catch((k) => {
              c.value = !1, i("upload-error", k);
            });
          }
        }, g.readAsDataURL(d.files[0]);
      }
      i("change", p);
    };
    return ge(s, (p) => i("update:modelValue", p)), ge(u, (p) => i("update:fileName", p)), (p, d) => {
      const g = Se("lkt-image"), _ = Se("lkt-button");
      return W(), se(Ze, null, [
        ae("input", {
          ref_key: "inputElement",
          ref: n,
          type: "file",
          name: p.name,
          id: p.id,
          disabled: p.disabled,
          readonly: p.readonly,
          placeholder: p.placeholder,
          accept: p.accept,
          onChange: o
        }, null, 40, nd),
        re(_, {
          class: "lkt-field--toggle-button",
          "click-ref": n.value,
          text: p.isImage ? "" : u.value,
          disabled: p.disabled
        }, {
          default: xe(() => [
            p.isImage ? (W(), ne(g, {
              key: 0,
              src: s.value,
              class: "lkt-field--image-cover"
            }, null, 8, ["src"])) : fe("", !0),
            p.isImage ? (W(), ne(g, {
              key: 1,
              src: s.value,
              class: "lkt-field--image-main"
            }, null, 8, ["src"])) : fe("", !0)
          ]),
          _: 1
        }, 8, ["click-ref", "text", "disabled"])
      ], 64);
    };
  }
}), ad = { class: "lkt-calendar" }, sd = { class: "calendar" }, rd = { class: "lkt-calendar--header-grid" }, ud = ["innerHTML"], dd = {
  key: 0,
  class: "lkt-calendar--day-grid"
}, cd = { class: "lkt-calendar--day lkt-calendar--filling-day" }, fd = /* @__PURE__ */ Le({
  __name: "LktCalendar",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = Q(l.modelValue);
    ge(() => l.modelValue, (m) => n.value = m, { deep: !0 }), ge(n, (m) => i("update:modelValue", m));
    const s = Q(/* @__PURE__ */ new Date()), u = Q(/* @__PURE__ */ new Date());
    Pl(n.value) && typeof n.value < "u" && (u.value = new Date(n.value.getFullYear(), n.value.getMonth(), n.value.getDate()));
    const c = Q(u.value.getFullYear()), o = Q(u.value.getMonth()), p = Q(!1), d = Q(ti("Y-m", u.value)), g = ie(() => new Date(c.value, o.value + 1, 0).getDate()), _ = ie(() => new Date(c.value, o.value, 1).getDay()), x = () => {
      o.value > 11 && (o.value = 0, c.value += 1), o.value += 1, u.value.setFullYear(c.value, o.value), u.value = new Date(u.value), d.value = ti("Y-m", u.value);
    }, k = () => {
      o.value < 0 && (o.value = 11, c.value -= 1), o.value -= 1, u.value.setFullYear(c.value, o.value), u.value = new Date(u.value), d.value = ti("Y-m", u.value);
    }, N = (m) => typeof n.value > "u" || n.value.getFullYear() !== c.value || n.value.getMonth() !== o.value ? !1 : n.value.getDate() === m, a = (m) => typeof n.value > "u" || s.value.getFullYear() !== c.value || s.value.getMonth() !== o.value ? !1 : s.value.getDate() === m, r = (m) => ({
      "is-picked": N(m),
      "is-today": a(m)
    }), f = (m) => {
      var v;
      (v = n.value) == null || v.setFullYear(c.value, o.value, m), n.value = new Date(n.value);
    };
    return (m, v) => {
      const b = Se("lkt-button");
      return W(), se("div", ad, [
        ae("div", sd, [
          ae("header", rd, [
            re(b, {
              class: "lkt-calendar--day",
              onClick: k
            }, {
              default: xe(() => v[0] || (v[0] = [
                Zt("◀")
              ])),
              _: 1
            }),
            ae("div", {
              class: "lkt-calendar--header-text",
              innerHTML: d.value
            }, null, 8, ud),
            re(b, {
              class: "lkt-calendar--day",
              onClick: x
            }, {
              default: xe(() => v[1] || (v[1] = [
                Zt("▶")
              ])),
              _: 1
            })
          ]),
          p.value ? fe("", !0) : (W(), se("div", dd, [
            v[2] || (v[2] = _a('<div class="lkt-calendar--day lkt-calendar--week-day">Su</div><div class="lkt-calendar--day lkt-calendar--week-day">Mo</div><div class="lkt-calendar--day lkt-calendar--week-day">Tu</div><div class="lkt-calendar--day lkt-calendar--week-day">We</div><div class="lkt-calendar--day lkt-calendar--week-day">Th</div><div class="lkt-calendar--day lkt-calendar--week-day">Fr</div><div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>', 7)),
            (W(!0), se(Ze, null, _t(_.value, (h) => (W(), se("div", cd))), 256)),
            (W(!0), se(Ze, null, _t(g.value, (h) => (W(), ne(b, {
              class: it(["lkt-calendar--day", r(h)]),
              text: h.toString(),
              onClick: () => f(h)
            }, null, 8, ["class", "text", "onClick"]))), 256))
          ]))
        ]),
        v[3] || (v[3] = ae("div", { class: "display-selected" }, [
          ae("p", { class: "selected" })
        ], -1))
      ]);
    };
  }
}), hd = /* @__PURE__ */ Le({
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
    const i = t, l = e, n = Q(void 0), s = Q(""), u = Q(l.modelValue), c = ie(() => te.dateReadFormat ? te.dateReadFormat : te.langDateReadFormat[l.lang] ? te.langDateReadFormat[l.lang] : te.defaultDateReadFormat ? te.defaultDateReadFormat : "Y-m-d"), o = (d) => {
      let g = new Date(d);
      Pl(g) && (n.value = g);
    }, p = () => {
      s.value = fo(n.value, c.value);
    };
    return ge(() => l.modelValue, (d) => {
      u.value = d, o(d);
    }), ge(u, (d) => i("update:modelValue", d)), ge(n, (d) => {
      typeof d > "u" ? u.value = "" : u.value = ti("Y-m-d", d), p();
    }, { deep: !0 }), ul(() => {
      o(l.modelValue), p();
    }), (d, g) => {
      const _ = Se("lkt-button");
      return W(), ne(_, {
        type: Z(cl).Tooltip,
        class: "lkt-field--toggle-button",
        text: s.value,
        tooltip: {
          class: "lkt-field--date--tooltip",
          locationY: Z(Hl).Bottom,
          locationX: Z(Vl).LeftCorner
        }
      }, {
        tooltip: xe(() => [
          re(fd, {
            modelValue: n.value,
            "onUpdate:modelValue": g[0] || (g[0] = (x) => n.value = x)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["type", "text", "tooltip"]);
    };
  }
}), Yn = (e, t) => typeof e == "object" && !Array.isArray(e) ? e[t] : e, pd = { key: 1 }, Fo = /* @__PURE__ */ Le({
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
    const l = Q(e.modelValue), n = (s, u) => {
    };
    return (s, u) => {
      const c = Se("lkt-button");
      return W(), ne(c, {
        modal: s.modal,
        "modal-key": s.modalKey,
        "modal-data": s.modalData,
        onClick: n
      }, {
        default: xe(() => [
          l.value ? dt(s.$slots, "item", {
            key: 0,
            item: l.value
          }) : (W(), se("p", pd, "No data"))
        ]),
        _: 3
      }, 8, ["modal", "modal-key", "modal-data"]);
    };
  }
}), md = /* @__PURE__ */ Le({
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
    const t = Fl(), i = e, l = Q(i.modelValue), n = ie(() => typeof i.max == "boolean" || l.value.length < i.max ? ["modal-create"] : []);
    return (s, u) => {
      const c = Se("lkt-table");
      return W(), ne(c, {
        type: "item",
        modelValue: l.value,
        "onUpdate:modelValue": u[0] || (u[0] = (o) => l.value = o),
        perms: n.value,
        "edit-mode": s.editable,
        "new-value-generator": () => {
        },
        modal: s.modal,
        "modal-key": s.modalKey,
        "modal-data": s.modalData,
        "required-items-for-top-create": 999999
      }, {
        item: xe(({ item: o, index: p, isLoading: d, canCreate: g, canRead: _, canUpdate: x, canDrop: k, doDrop: N }) => [
          re(Fo, {
            modelValue: l.value[p],
            "onUpdate:modelValue": (a) => l.value[p] = a,
            "item-type": s.itemType
          }, Ci({ _: 2 }, [
            Z(t).item ? {
              name: "item",
              fn: xe(({ item: a }) => [
                dt(s.$slots, "item", {
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
});
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Kn(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    t && (l = l.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), i.push.apply(i, l);
  }
  return i;
}
function mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kn(Object(i), !0).forEach(function(l) {
      gd(e, l, i[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Kn(Object(i)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(i, l));
    });
  }
  return e;
}
function Ki(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ki = function(t) {
    return typeof t;
  } : Ki = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ki(e);
}
function gd(e, t, i) {
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
function vd(e, t) {
  if (e == null) return {};
  var i = {}, l = Object.keys(e), n, s;
  for (s = 0; s < l.length; s++)
    n = l[s], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
  return i;
}
function bd(e, t) {
  if (e == null) return {};
  var i = vd(e, t), l, n;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (n = 0; n < s.length; n++)
      l = s[n], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
  }
  return i;
}
var yd = "1.15.6";
function yt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Ct = yt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ri = yt(/Edge/i), Xn = yt(/firefox/i), ii = yt(/safari/i) && !yt(/chrome/i) && !yt(/android/i), $l = yt(/iP(ad|od|hone)/i), Ho = yt(/chrome/i) && yt(/android/i), Vo = {
  capture: !1,
  passive: !1
};
function _e(e, t, i) {
  e.addEventListener(t, i, !Ct && Vo);
}
function ye(e, t, i) {
  e.removeEventListener(t, i, !Ct && Vo);
}
function nl(e, t) {
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
function Po(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function ct(e, t, i, l) {
  if (e) {
    i = i || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === i && nl(e, t) : nl(e, t)) || l && e === i)
        return e;
      if (e === i) break;
    } while (e = Po(e));
  }
  return null;
}
var Jn = /\s+/g;
function et(e, t, i) {
  if (e && t)
    if (e.classList)
      e.classList[i ? "add" : "remove"](t);
    else {
      var l = (" " + e.className + " ").replace(Jn, " ").replace(" " + t + " ", " ");
      e.className = (l + (i ? " " + t : "")).replace(Jn, " ");
    }
}
function de(e, t, i) {
  var l = e && e.style;
  if (l) {
    if (i === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (i = e.currentStyle), t === void 0 ? i : i[t];
    !(t in l) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), l[t] = i + (typeof i == "string" ? "" : "px");
  }
}
function $t(e, t) {
  var i = "";
  if (typeof e == "string")
    i = e;
  else
    do {
      var l = de(e, "transform");
      l && l !== "none" && (i = l + " " + i);
    } while (!t && (e = e.parentNode));
  var n = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return n && new n(i);
}
function Uo(e, t, i) {
  if (e) {
    var l = e.getElementsByTagName(t), n = 0, s = l.length;
    if (i)
      for (; n < s; n++)
        i(l[n], n);
    return l;
  }
  return [];
}
function ht() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function Me(e, t, i, l, n) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var s, u, c, o, p, d, g;
    if (e !== window && e.parentNode && e !== ht() ? (s = e.getBoundingClientRect(), u = s.top, c = s.left, o = s.bottom, p = s.right, d = s.height, g = s.width) : (u = 0, c = 0, o = window.innerHeight, p = window.innerWidth, d = window.innerHeight, g = window.innerWidth), (t || i) && e !== window && (n = n || e.parentNode, !Ct))
      do
        if (n && n.getBoundingClientRect && (de(n, "transform") !== "none" || i && de(n, "position") !== "static")) {
          var _ = n.getBoundingClientRect();
          u -= _.top + parseInt(de(n, "border-top-width")), c -= _.left + parseInt(de(n, "border-left-width")), o = u + s.height, p = c + s.width;
          break;
        }
      while (n = n.parentNode);
    if (l && e !== window) {
      var x = $t(n || e), k = x && x.a, N = x && x.d;
      x && (u /= N, c /= k, g /= k, d /= N, o = u + d, p = c + g);
    }
    return {
      top: u,
      left: c,
      bottom: o,
      right: p,
      width: g,
      height: d
    };
  }
}
function Qn(e, t, i) {
  for (var l = Et(e, !0), n = Me(e)[t]; l; ) {
    var s = Me(l)[i], u = void 0;
    if (u = n >= s, !u) return l;
    if (l === ht()) break;
    l = Et(l, !1);
  }
  return !1;
}
function qt(e, t, i, l) {
  for (var n = 0, s = 0, u = e.children; s < u.length; ) {
    if (u[s].style.display !== "none" && u[s] !== ce.ghost && (l || u[s] !== ce.dragged) && ct(u[s], i.draggable, e, !1)) {
      if (n === t)
        return u[s];
      n++;
    }
    s++;
  }
  return null;
}
function Zl(e, t) {
  for (var i = e.lastElementChild; i && (i === ce.ghost || de(i, "display") === "none" || t && !nl(i, t)); )
    i = i.previousElementSibling;
  return i || null;
}
function ot(e, t) {
  var i = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== ce.clone && (!t || nl(e, t)) && i++;
  return i;
}
function eo(e) {
  var t = 0, i = 0, l = ht();
  if (e)
    do {
      var n = $t(e), s = n.a, u = n.d;
      t += e.scrollLeft * s, i += e.scrollTop * u;
    } while (e !== l && (e = e.parentNode));
  return [t, i];
}
function _d(e, t) {
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
      var n = de(i);
      if (i.clientWidth < i.scrollWidth && (n.overflowX == "auto" || n.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (n.overflowY == "auto" || n.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return ht();
        if (l || t) return i;
        l = !0;
      }
    }
  while (i = i.parentNode);
  return ht();
}
function wd(e, t) {
  if (e && t)
    for (var i in t)
      t.hasOwnProperty(i) && (e[i] = t[i]);
  return e;
}
function yl(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var li;
function Wo(e, t) {
  return function() {
    if (!li) {
      var i = arguments, l = this;
      i.length === 1 ? e.call(l, i[0]) : e.apply(l, i), li = setTimeout(function() {
        li = void 0;
      }, t);
    }
  };
}
function Cd() {
  clearTimeout(li), li = void 0;
}
function $o(e, t, i) {
  e.scrollLeft += t, e.scrollTop += i;
}
function Zo(e) {
  var t = window.Polymer, i = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : i ? i(e).clone(!0)[0] : e.cloneNode(!0);
}
function qo(e, t, i) {
  var l = {};
  return Array.from(e.children).forEach(function(n) {
    var s, u, c, o;
    if (!(!ct(n, t.draggable, e, !1) || n.animated || n === i)) {
      var p = Me(n);
      l.left = Math.min((s = l.left) !== null && s !== void 0 ? s : 1 / 0, p.left), l.top = Math.min((u = l.top) !== null && u !== void 0 ? u : 1 / 0, p.top), l.right = Math.max((c = l.right) !== null && c !== void 0 ? c : -1 / 0, p.right), l.bottom = Math.max((o = l.bottom) !== null && o !== void 0 ? o : -1 / 0, p.bottom);
    }
  }), l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
var Je = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function kd() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var l = [].slice.call(this.el.children);
        l.forEach(function(n) {
          if (!(de(n, "display") === "none" || n === ce.ghost)) {
            e.push({
              target: n,
              rect: Me(n)
            });
            var s = mt({}, e[e.length - 1].rect);
            if (n.thisAnimationDuration) {
              var u = $t(n, !0);
              u && (s.top -= u.f, s.left -= u.e);
            }
            n.fromRect = s;
          }
        });
      }
    },
    addAnimationState: function(l) {
      e.push(l);
    },
    removeAnimationState: function(l) {
      e.splice(_d(e, {
        target: l
      }), 1);
    },
    animateAll: function(l) {
      var n = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof l == "function" && l();
        return;
      }
      var s = !1, u = 0;
      e.forEach(function(c) {
        var o = 0, p = c.target, d = p.fromRect, g = Me(p), _ = p.prevFromRect, x = p.prevToRect, k = c.rect, N = $t(p, !0);
        N && (g.top -= N.f, g.left -= N.e), p.toRect = g, p.thisAnimationDuration && yl(_, g) && !yl(d, g) && // Make sure animatingRect is on line between toRect & fromRect
        (k.top - g.top) / (k.left - g.left) === (d.top - g.top) / (d.left - g.left) && (o = Sd(k, _, x, n.options)), yl(g, d) || (p.prevFromRect = d, p.prevToRect = g, o || (o = n.options.animation), n.animate(p, k, g, o)), o && (s = !0, u = Math.max(u, o), clearTimeout(p.animationResetTimer), p.animationResetTimer = setTimeout(function() {
          p.animationTime = 0, p.prevFromRect = null, p.fromRect = null, p.prevToRect = null, p.thisAnimationDuration = null;
        }, o), p.thisAnimationDuration = o);
      }), clearTimeout(t), s ? t = setTimeout(function() {
        typeof l == "function" && l();
      }, u) : typeof l == "function" && l(), e = [];
    },
    animate: function(l, n, s, u) {
      if (u) {
        de(l, "transition", ""), de(l, "transform", "");
        var c = $t(this.el), o = c && c.a, p = c && c.d, d = (n.left - s.left) / (o || 1), g = (n.top - s.top) / (p || 1);
        l.animatingX = !!d, l.animatingY = !!g, de(l, "transform", "translate3d(" + d + "px," + g + "px,0)"), this.forRepaintDummy = xd(l), de(l, "transition", "transform " + u + "ms" + (this.options.easing ? " " + this.options.easing : "")), de(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          de(l, "transition", ""), de(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, u);
      }
    }
  };
}
function xd(e) {
  return e.offsetWidth;
}
function Sd(e, t, i, l) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - i.top, 2) + Math.pow(t.left - i.left, 2)) * l.animation;
}
var Ht = [], _l = {
  initializeByDefault: !0
}, ui = {
  mount: function(t) {
    for (var i in _l)
      _l.hasOwnProperty(i) && !(i in t) && (t[i] = _l[i]);
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
    var s = t + "Global";
    Ht.forEach(function(u) {
      i[u.pluginName] && (i[u.pluginName][s] && i[u.pluginName][s](mt({
        sortable: i
      }, l)), i.options[u.pluginName] && i[u.pluginName][t] && i[u.pluginName][t](mt({
        sortable: i
      }, l)));
    });
  },
  initializePlugins: function(t, i, l, n) {
    Ht.forEach(function(c) {
      var o = c.pluginName;
      if (!(!t.options[o] && !c.initializeByDefault)) {
        var p = new c(t, i, t.options);
        p.sortable = t, p.options = t.options, t[o] = p, wt(l, p.defaults);
      }
    });
    for (var s in t.options)
      if (t.options.hasOwnProperty(s)) {
        var u = this.modifyOption(t, s, t.options[s]);
        typeof u < "u" && (t.options[s] = u);
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
    return Ht.forEach(function(s) {
      t[s.pluginName] && s.optionListeners && typeof s.optionListeners[i] == "function" && (n = s.optionListeners[i].call(t[s.pluginName], l));
    }), n;
  }
};
function Ed(e) {
  var t = e.sortable, i = e.rootEl, l = e.name, n = e.targetEl, s = e.cloneEl, u = e.toEl, c = e.fromEl, o = e.oldIndex, p = e.newIndex, d = e.oldDraggableIndex, g = e.newDraggableIndex, _ = e.originalEvent, x = e.putSortable, k = e.extraEventProperties;
  if (t = t || i && i[Je], !!t) {
    var N, a = t.options, r = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !Ct && !ri ? N = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (N = document.createEvent("Event"), N.initEvent(l, !0, !0)), N.to = u || i, N.from = c || i, N.item = n || i, N.clone = s, N.oldIndex = o, N.newIndex = p, N.oldDraggableIndex = d, N.newDraggableIndex = g, N.originalEvent = _, N.pullMode = x ? x.lastPutMode : void 0;
    var f = mt(mt({}, k), ui.getEventProperties(l, t));
    for (var m in f)
      N[m] = f[m];
    i && i.dispatchEvent(N), a[r] && a[r].call(t, N);
  }
}
var Td = ["evt"], Ke = function(t, i) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = l.evt, s = bd(l, Td);
  ui.pluginEvent.bind(ce)(t, i, mt({
    dragEl: ee,
    parentEl: Re,
    ghostEl: pe,
    rootEl: Ne,
    nextEl: Dt,
    lastDownEl: Xi,
    cloneEl: Be,
    cloneHidden: St,
    dragStarted: Xt,
    putSortable: Pe,
    activeSortable: ce.active,
    originalEvent: n,
    oldIndex: Wt,
    oldDraggableIndex: ni,
    newIndex: tt,
    newDraggableIndex: xt,
    hideGhostForTarget: Ko,
    unhideGhostForTarget: Xo,
    cloneNowHidden: function() {
      St = !0;
    },
    cloneNowShown: function() {
      St = !1;
    },
    dispatchSortableEvent: function(c) {
      $e({
        sortable: i,
        name: c,
        originalEvent: n
      });
    }
  }, s));
};
function $e(e) {
  Ed(mt({
    putSortable: Pe,
    cloneEl: Be,
    targetEl: ee,
    rootEl: Ne,
    oldIndex: Wt,
    oldDraggableIndex: ni,
    newIndex: tt,
    newDraggableIndex: xt
  }, e));
}
var ee, Re, pe, Ne, Dt, Xi, Be, St, Wt, tt, ni, xt, bi, Pe, Ut = !1, ol = !1, al = [], Bt, ut, wl, Cl, to, io, Xt, Vt, oi, ai = !1, yi = !1, Ji, Ue, kl = [], Rl = !1, sl = [], hl = typeof document < "u", _i = $l, lo = ri || Ct ? "cssFloat" : "float", Ld = hl && !Ho && !$l && "draggable" in document.createElement("div"), jo = function() {
  if (hl) {
    if (Ct)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Go = function(t, i) {
  var l = de(t), n = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), s = qt(t, 0, i), u = qt(t, 1, i), c = s && de(s), o = u && de(u), p = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + Me(s).width, d = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + Me(u).width;
  if (l.display === "flex")
    return l.flexDirection === "column" || l.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (l.display === "grid")
    return l.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && c.float && c.float !== "none") {
    var g = c.float === "left" ? "left" : "right";
    return u && (o.clear === "both" || o.clear === g) ? "vertical" : "horizontal";
  }
  return s && (c.display === "block" || c.display === "flex" || c.display === "table" || c.display === "grid" || p >= n && l[lo] === "none" || u && l[lo] === "none" && p + d > n) ? "vertical" : "horizontal";
}, zd = function(t, i, l) {
  var n = l ? t.left : t.top, s = l ? t.right : t.bottom, u = l ? t.width : t.height, c = l ? i.left : i.top, o = l ? i.right : i.bottom, p = l ? i.width : i.height;
  return n === c || s === o || n + u / 2 === c + p / 2;
}, Nd = function(t, i) {
  var l;
  return al.some(function(n) {
    var s = n[Je].options.emptyInsertThreshold;
    if (!(!s || Zl(n))) {
      var u = Me(n), c = t >= u.left - s && t <= u.right + s, o = i >= u.top - s && i <= u.bottom + s;
      if (c && o)
        return l = n;
    }
  }), l;
}, Yo = function(t) {
  function i(s, u) {
    return function(c, o, p, d) {
      var g = c.options.group.name && o.options.group.name && c.options.group.name === o.options.group.name;
      if (s == null && (u || g))
        return !0;
      if (s == null || s === !1)
        return !1;
      if (u && s === "clone")
        return s;
      if (typeof s == "function")
        return i(s(c, o, p, d), u)(c, o, p, d);
      var _ = (u ? c : o).options.group.name;
      return s === !0 || typeof s == "string" && s === _ || s.join && s.indexOf(_) > -1;
    };
  }
  var l = {}, n = t.group;
  (!n || Ki(n) != "object") && (n = {
    name: n
  }), l.name = n.name, l.checkPull = i(n.pull, !0), l.checkPut = i(n.put), l.revertClone = n.revertClone, t.group = l;
}, Ko = function() {
  !jo && pe && de(pe, "display", "none");
}, Xo = function() {
  !jo && pe && de(pe, "display", "");
};
hl && !Ho && document.addEventListener("click", function(e) {
  if (ol)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), ol = !1, !1;
}, !0);
var At = function(t) {
  if (ee) {
    t = t.touches ? t.touches[0] : t;
    var i = Nd(t.clientX, t.clientY);
    if (i) {
      var l = {};
      for (var n in t)
        t.hasOwnProperty(n) && (l[n] = t[n]);
      l.target = l.rootEl = i, l.preventDefault = void 0, l.stopPropagation = void 0, i[Je]._onDragOver(l);
    }
  }
}, Bd = function(t) {
  ee && ee.parentNode[Je]._isOutsideThisEl(t.target);
};
function ce(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = wt({}, t), e[Je] = this;
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
      return Go(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(u, c) {
      u.setData("Text", c.textContent);
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
    supportPointer: ce.supportPointer !== !1 && "PointerEvent" in window && (!ii || $l),
    emptyInsertThreshold: 5
  };
  ui.initializePlugins(this, e, i);
  for (var l in i)
    !(l in t) && (t[l] = i[l]);
  Yo(t);
  for (var n in this)
    n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Ld, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? _e(e, "pointerdown", this._onTapStart) : (_e(e, "mousedown", this._onTapStart), _e(e, "touchstart", this._onTapStart)), this.nativeDraggable && (_e(e, "dragover", this), _e(e, "dragenter", this)), al.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), wt(this, kd());
}
ce.prototype = /** @lends Sortable.prototype */
{
  constructor: ce,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (Vt = null);
  },
  _getDirection: function(t, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, i, ee) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var i = this, l = this.el, n = this.options, s = n.preventOnFilter, u = t.type, c = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, o = (c || t).target, p = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || o, d = n.filter;
      if (Hd(l), !ee && !(/mousedown|pointerdown/.test(u) && t.button !== 0 || n.disabled) && !p.isContentEditable && !(!this.nativeDraggable && ii && o && o.tagName.toUpperCase() === "SELECT") && (o = ct(o, n.draggable, l, !1), !(o && o.animated) && Xi !== o)) {
        if (Wt = ot(o), ni = ot(o, n.draggable), typeof d == "function") {
          if (d.call(this, t, o, this)) {
            $e({
              sortable: i,
              rootEl: p,
              name: "filter",
              targetEl: o,
              toEl: l,
              fromEl: l
            }), Ke("filter", i, {
              evt: t
            }), s && t.preventDefault();
            return;
          }
        } else if (d && (d = d.split(",").some(function(g) {
          if (g = ct(p, g.trim(), l, !1), g)
            return $e({
              sortable: i,
              rootEl: g,
              name: "filter",
              targetEl: o,
              fromEl: l,
              toEl: l
            }), Ke("filter", i, {
              evt: t
            }), !0;
        }), d)) {
          s && t.preventDefault();
          return;
        }
        n.handle && !ct(p, n.handle, l, !1) || this._prepareDragStart(t, c, o);
      }
    }
  },
  _prepareDragStart: function(t, i, l) {
    var n = this, s = n.el, u = n.options, c = s.ownerDocument, o;
    if (l && !ee && l.parentNode === s) {
      var p = Me(l);
      if (Ne = s, ee = l, Re = ee.parentNode, Dt = ee.nextSibling, Xi = l, bi = u.group, ce.dragged = ee, Bt = {
        target: ee,
        clientX: (i || t).clientX,
        clientY: (i || t).clientY
      }, to = Bt.clientX - p.left, io = Bt.clientY - p.top, this._lastX = (i || t).clientX, this._lastY = (i || t).clientY, ee.style["will-change"] = "all", o = function() {
        if (Ke("delayEnded", n, {
          evt: t
        }), ce.eventCanceled) {
          n._onDrop();
          return;
        }
        n._disableDelayedDragEvents(), !Xn && n.nativeDraggable && (ee.draggable = !0), n._triggerDragStart(t, i), $e({
          sortable: n,
          name: "choose",
          originalEvent: t
        }), et(ee, u.chosenClass, !0);
      }, u.ignore.split(",").forEach(function(d) {
        Uo(ee, d.trim(), xl);
      }), _e(c, "dragover", At), _e(c, "mousemove", At), _e(c, "touchmove", At), u.supportPointer ? (_e(c, "pointerup", n._onDrop), !this.nativeDraggable && _e(c, "pointercancel", n._onDrop)) : (_e(c, "mouseup", n._onDrop), _e(c, "touchend", n._onDrop), _e(c, "touchcancel", n._onDrop)), Xn && this.nativeDraggable && (this.options.touchStartThreshold = 4, ee.draggable = !0), Ke("delayStart", this, {
        evt: t
      }), u.delay && (!u.delayOnTouchOnly || i) && (!this.nativeDraggable || !(ri || Ct))) {
        if (ce.eventCanceled) {
          this._onDrop();
          return;
        }
        u.supportPointer ? (_e(c, "pointerup", n._disableDelayedDrag), _e(c, "pointercancel", n._disableDelayedDrag)) : (_e(c, "mouseup", n._disableDelayedDrag), _e(c, "touchend", n._disableDelayedDrag), _e(c, "touchcancel", n._disableDelayedDrag)), _e(c, "mousemove", n._delayedDragTouchMoveHandler), _e(c, "touchmove", n._delayedDragTouchMoveHandler), u.supportPointer && _e(c, "pointermove", n._delayedDragTouchMoveHandler), n._dragStartTimer = setTimeout(o, u.delay);
      } else
        o();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var i = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ee && xl(ee), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    ye(t, "mouseup", this._disableDelayedDrag), ye(t, "touchend", this._disableDelayedDrag), ye(t, "touchcancel", this._disableDelayedDrag), ye(t, "pointerup", this._disableDelayedDrag), ye(t, "pointercancel", this._disableDelayedDrag), ye(t, "mousemove", this._delayedDragTouchMoveHandler), ye(t, "touchmove", this._delayedDragTouchMoveHandler), ye(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, i) {
    i = i || t.pointerType == "touch" && t, !this.nativeDraggable || i ? this.options.supportPointer ? _e(document, "pointermove", this._onTouchMove) : i ? _e(document, "touchmove", this._onTouchMove) : _e(document, "mousemove", this._onTouchMove) : (_e(ee, "dragend", this), _e(Ne, "dragstart", this._onDragStart));
    try {
      document.selection ? Qi(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, i) {
    if (Ut = !1, Ne && ee) {
      Ke("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && _e(document, "dragover", Bd);
      var l = this.options;
      !t && et(ee, l.dragClass, !1), et(ee, l.ghostClass, !0), ce.active = this, t && this._appendGhost(), $e({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (ut) {
      this._lastX = ut.clientX, this._lastY = ut.clientY, Ko();
      for (var t = document.elementFromPoint(ut.clientX, ut.clientY), i = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(ut.clientX, ut.clientY), t !== i); )
        i = t;
      if (ee.parentNode[Je]._isOutsideThisEl(t), i)
        do {
          if (i[Je]) {
            var l = void 0;
            if (l = i[Je]._onDragOver({
              clientX: ut.clientX,
              clientY: ut.clientY,
              target: t,
              rootEl: i
            }), l && !this.options.dragoverBubble)
              break;
          }
          t = i;
        } while (i = Po(i));
      Xo();
    }
  },
  _onTouchMove: function(t) {
    if (Bt) {
      var i = this.options, l = i.fallbackTolerance, n = i.fallbackOffset, s = t.touches ? t.touches[0] : t, u = pe && $t(pe, !0), c = pe && u && u.a, o = pe && u && u.d, p = _i && Ue && eo(Ue), d = (s.clientX - Bt.clientX + n.x) / (c || 1) + (p ? p[0] - kl[0] : 0) / (c || 1), g = (s.clientY - Bt.clientY + n.y) / (o || 1) + (p ? p[1] - kl[1] : 0) / (o || 1);
      if (!ce.active && !Ut) {
        if (l && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < l)
          return;
        this._onDragStart(t, !0);
      }
      if (pe) {
        u ? (u.e += d - (wl || 0), u.f += g - (Cl || 0)) : u = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: d,
          f: g
        };
        var _ = "matrix(".concat(u.a, ",").concat(u.b, ",").concat(u.c, ",").concat(u.d, ",").concat(u.e, ",").concat(u.f, ")");
        de(pe, "webkitTransform", _), de(pe, "mozTransform", _), de(pe, "msTransform", _), de(pe, "transform", _), wl = d, Cl = g, ut = s;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!pe) {
      var t = this.options.fallbackOnBody ? document.body : Ne, i = Me(ee, !0, _i, !0, t), l = this.options;
      if (_i) {
        for (Ue = t; de(Ue, "position") === "static" && de(Ue, "transform") === "none" && Ue !== document; )
          Ue = Ue.parentNode;
        Ue !== document.body && Ue !== document.documentElement ? (Ue === document && (Ue = ht()), i.top += Ue.scrollTop, i.left += Ue.scrollLeft) : Ue = ht(), kl = eo(Ue);
      }
      pe = ee.cloneNode(!0), et(pe, l.ghostClass, !1), et(pe, l.fallbackClass, !0), et(pe, l.dragClass, !0), de(pe, "transition", ""), de(pe, "transform", ""), de(pe, "box-sizing", "border-box"), de(pe, "margin", 0), de(pe, "top", i.top), de(pe, "left", i.left), de(pe, "width", i.width), de(pe, "height", i.height), de(pe, "opacity", "0.8"), de(pe, "position", _i ? "absolute" : "fixed"), de(pe, "zIndex", "100000"), de(pe, "pointerEvents", "none"), ce.ghost = pe, t.appendChild(pe), de(pe, "transform-origin", to / parseInt(pe.style.width) * 100 + "% " + io / parseInt(pe.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, i) {
    var l = this, n = t.dataTransfer, s = l.options;
    if (Ke("dragStart", this, {
      evt: t
    }), ce.eventCanceled) {
      this._onDrop();
      return;
    }
    Ke("setupClone", this), ce.eventCanceled || (Be = Zo(ee), Be.removeAttribute("id"), Be.draggable = !1, Be.style["will-change"] = "", this._hideClone(), et(Be, this.options.chosenClass, !1), ce.clone = Be), l.cloneId = Qi(function() {
      Ke("clone", l), !ce.eventCanceled && (l.options.removeCloneOnHide || Ne.insertBefore(Be, ee), l._hideClone(), $e({
        sortable: l,
        name: "clone"
      }));
    }), !i && et(ee, s.dragClass, !0), i ? (ol = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : (ye(document, "mouseup", l._onDrop), ye(document, "touchend", l._onDrop), ye(document, "touchcancel", l._onDrop), n && (n.effectAllowed = "move", s.setData && s.setData.call(l, n, ee)), _e(document, "drop", l), de(ee, "transform", "translateZ(0)")), Ut = !0, l._dragStartId = Qi(l._dragStarted.bind(l, i, t)), _e(document, "selectstart", l), Xt = !0, window.getSelection().removeAllRanges(), ii && de(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var i = this.el, l = t.target, n, s, u, c = this.options, o = c.group, p = ce.active, d = bi === o, g = c.sort, _ = Pe || p, x, k = this, N = !1;
    if (Rl) return;
    function a(M, H) {
      Ke(M, k, mt({
        evt: t,
        isOwner: d,
        axis: x ? "vertical" : "horizontal",
        revert: u,
        dragRect: n,
        targetRect: s,
        canSort: g,
        fromSortable: _,
        target: l,
        completed: f,
        onMove: function(O, R) {
          return wi(Ne, i, ee, n, O, Me(O), t, R);
        },
        changed: m
      }, H));
    }
    function r() {
      a("dragOverAnimationCapture"), k.captureAnimationState(), k !== _ && _.captureAnimationState();
    }
    function f(M) {
      return a("dragOverCompleted", {
        insertion: M
      }), M && (d ? p._hideClone() : p._showClone(k), k !== _ && (et(ee, Pe ? Pe.options.ghostClass : p.options.ghostClass, !1), et(ee, c.ghostClass, !0)), Pe !== k && k !== ce.active ? Pe = k : k === ce.active && Pe && (Pe = null), _ === k && (k._ignoreWhileAnimating = l), k.animateAll(function() {
        a("dragOverAnimationComplete"), k._ignoreWhileAnimating = null;
      }), k !== _ && (_.animateAll(), _._ignoreWhileAnimating = null)), (l === ee && !ee.animated || l === i && !l.animated) && (Vt = null), !c.dragoverBubble && !t.rootEl && l !== document && (ee.parentNode[Je]._isOutsideThisEl(t.target), !M && At(t)), !c.dragoverBubble && t.stopPropagation && t.stopPropagation(), N = !0;
    }
    function m() {
      tt = ot(ee), xt = ot(ee, c.draggable), $e({
        sortable: k,
        name: "change",
        toEl: i,
        newIndex: tt,
        newDraggableIndex: xt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), l = ct(l, c.draggable, i, !0), a("dragOver"), ce.eventCanceled) return N;
    if (ee.contains(t.target) || l.animated && l.animatingX && l.animatingY || k._ignoreWhileAnimating === l)
      return f(!1);
    if (ol = !1, p && !c.disabled && (d ? g || (u = Re !== Ne) : Pe === this || (this.lastPutMode = bi.checkPull(this, p, ee, t)) && o.checkPut(this, p, ee, t))) {
      if (x = this._getDirection(t, l) === "vertical", n = Me(ee), a("dragOverValid"), ce.eventCanceled) return N;
      if (u)
        return Re = Ne, r(), this._hideClone(), a("revert"), ce.eventCanceled || (Dt ? Ne.insertBefore(ee, Dt) : Ne.appendChild(ee)), f(!0);
      var v = Zl(i, c.draggable);
      if (!v || Id(t, x, this) && !v.animated) {
        if (v === ee)
          return f(!1);
        if (v && i === t.target && (l = v), l && (s = Me(l)), wi(Ne, i, ee, n, l, s, t, !!l) !== !1)
          return r(), v && v.nextSibling ? i.insertBefore(ee, v.nextSibling) : i.appendChild(ee), Re = i, m(), f(!0);
      } else if (v && Dd(t, x, this)) {
        var b = qt(i, 0, c, !0);
        if (b === ee)
          return f(!1);
        if (l = b, s = Me(l), wi(Ne, i, ee, n, l, s, t, !1) !== !1)
          return r(), i.insertBefore(ee, b), Re = i, m(), f(!0);
      } else if (l.parentNode === i) {
        s = Me(l);
        var h = 0, y, C = ee.parentNode !== i, w = !zd(ee.animated && ee.toRect || n, l.animated && l.toRect || s, x), S = x ? "top" : "left", I = Qn(l, "top", "top") || Qn(ee, "top", "top"), E = I ? I.scrollTop : void 0;
        Vt !== l && (y = s[S], ai = !1, yi = !w && c.invertSwap || C), h = Md(t, l, s, x, w ? 1 : c.swapThreshold, c.invertedSwapThreshold == null ? c.swapThreshold : c.invertedSwapThreshold, yi, Vt === l);
        var z;
        if (h !== 0) {
          var B = ot(ee);
          do
            B -= h, z = Re.children[B];
          while (z && (de(z, "display") === "none" || z === pe));
        }
        if (h === 0 || z === l)
          return f(!1);
        Vt = l, oi = h;
        var P = l.nextElementSibling, U = !1;
        U = h === 1;
        var V = wi(Ne, i, ee, n, l, s, t, U);
        if (V !== !1)
          return (V === 1 || V === -1) && (U = V === 1), Rl = !0, setTimeout(Rd, 30), r(), U && !P ? i.appendChild(ee) : l.parentNode.insertBefore(ee, U ? P : l), I && $o(I, 0, E - I.scrollTop), Re = ee.parentNode, y !== void 0 && !yi && (Ji = Math.abs(y - Me(l)[S])), m(), f(!0);
      }
      if (i.contains(ee))
        return f(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    ye(document, "mousemove", this._onTouchMove), ye(document, "touchmove", this._onTouchMove), ye(document, "pointermove", this._onTouchMove), ye(document, "dragover", At), ye(document, "mousemove", At), ye(document, "touchmove", At);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    ye(t, "mouseup", this._onDrop), ye(t, "touchend", this._onDrop), ye(t, "pointerup", this._onDrop), ye(t, "pointercancel", this._onDrop), ye(t, "touchcancel", this._onDrop), ye(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var i = this.el, l = this.options;
    if (tt = ot(ee), xt = ot(ee, l.draggable), Ke("drop", this, {
      evt: t
    }), Re = ee && ee.parentNode, tt = ot(ee), xt = ot(ee, l.draggable), ce.eventCanceled) {
      this._nulling();
      return;
    }
    Ut = !1, yi = !1, ai = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Dl(this.cloneId), Dl(this._dragStartId), this.nativeDraggable && (ye(document, "drop", this), ye(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ii && de(document.body, "user-select", ""), de(ee, "transform", ""), t && (Xt && (t.cancelable && t.preventDefault(), !l.dropBubble && t.stopPropagation()), pe && pe.parentNode && pe.parentNode.removeChild(pe), (Ne === Re || Pe && Pe.lastPutMode !== "clone") && Be && Be.parentNode && Be.parentNode.removeChild(Be), ee && (this.nativeDraggable && ye(ee, "dragend", this), xl(ee), ee.style["will-change"] = "", Xt && !Ut && et(ee, Pe ? Pe.options.ghostClass : this.options.ghostClass, !1), et(ee, this.options.chosenClass, !1), $e({
      sortable: this,
      name: "unchoose",
      toEl: Re,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Ne !== Re ? (tt >= 0 && ($e({
      rootEl: Re,
      name: "add",
      toEl: Re,
      fromEl: Ne,
      originalEvent: t
    }), $e({
      sortable: this,
      name: "remove",
      toEl: Re,
      originalEvent: t
    }), $e({
      rootEl: Re,
      name: "sort",
      toEl: Re,
      fromEl: Ne,
      originalEvent: t
    }), $e({
      sortable: this,
      name: "sort",
      toEl: Re,
      originalEvent: t
    })), Pe && Pe.save()) : tt !== Wt && tt >= 0 && ($e({
      sortable: this,
      name: "update",
      toEl: Re,
      originalEvent: t
    }), $e({
      sortable: this,
      name: "sort",
      toEl: Re,
      originalEvent: t
    })), ce.active && ((tt == null || tt === -1) && (tt = Wt, xt = ni), $e({
      sortable: this,
      name: "end",
      toEl: Re,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Ke("nulling", this), Ne = ee = Re = pe = Dt = Be = Xi = St = Bt = ut = Xt = tt = xt = Wt = ni = Vt = oi = Pe = bi = ce.dragged = ce.ghost = ce.clone = ce.active = null, sl.forEach(function(t) {
      t.checked = !0;
    }), sl.length = wl = Cl = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        ee && (this._onDragOver(t), Ad(t));
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
    for (var t = [], i, l = this.el.children, n = 0, s = l.length, u = this.options; n < s; n++)
      i = l[n], ct(i, u.draggable, this.el, !1) && t.push(i.getAttribute(u.dataIdAttr) || Fd(i));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, i) {
    var l = {}, n = this.el;
    this.toArray().forEach(function(s, u) {
      var c = n.children[u];
      ct(c, this.options.draggable, n, !1) && (l[s] = c);
    }, this), i && this.captureAnimationState(), t.forEach(function(s) {
      l[s] && (n.removeChild(l[s]), n.appendChild(l[s]));
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
    var n = ui.modifyOption(this, t, i);
    typeof n < "u" ? l[t] = n : l[t] = i, t === "group" && Yo(l);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Ke("destroy", this);
    var t = this.el;
    t[Je] = null, ye(t, "mousedown", this._onTapStart), ye(t, "touchstart", this._onTapStart), ye(t, "pointerdown", this._onTapStart), this.nativeDraggable && (ye(t, "dragover", this), ye(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), al.splice(al.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!St) {
      if (Ke("hideClone", this), ce.eventCanceled) return;
      de(Be, "display", "none"), this.options.removeCloneOnHide && Be.parentNode && Be.parentNode.removeChild(Be), St = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (St) {
      if (Ke("showClone", this), ce.eventCanceled) return;
      ee.parentNode == Ne && !this.options.group.revertClone ? Ne.insertBefore(Be, ee) : Dt ? Ne.insertBefore(Be, Dt) : Ne.appendChild(Be), this.options.group.revertClone && this.animate(ee, Be), de(Be, "display", ""), St = !1;
    }
  }
};
function Ad(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function wi(e, t, i, l, n, s, u, c) {
  var o, p = e[Je], d = p.options.onMove, g;
  return window.CustomEvent && !Ct && !ri ? o = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("Event"), o.initEvent("move", !0, !0)), o.to = t, o.from = e, o.dragged = i, o.draggedRect = l, o.related = n || t, o.relatedRect = s || Me(t), o.willInsertAfter = c, o.originalEvent = u, e.dispatchEvent(o), d && (g = d.call(p, o, u)), g;
}
function xl(e) {
  e.draggable = !1;
}
function Rd() {
  Rl = !1;
}
function Dd(e, t, i) {
  var l = Me(qt(i.el, 0, i.options, !0)), n = qo(i.el, i.options, pe), s = 10;
  return t ? e.clientX < n.left - s || e.clientY < l.top && e.clientX < l.right : e.clientY < n.top - s || e.clientY < l.bottom && e.clientX < l.left;
}
function Id(e, t, i) {
  var l = Me(Zl(i.el, i.options.draggable)), n = qo(i.el, i.options, pe), s = 10;
  return t ? e.clientX > n.right + s || e.clientY > l.bottom && e.clientX > l.left : e.clientY > n.bottom + s || e.clientX > l.right && e.clientY > l.top;
}
function Md(e, t, i, l, n, s, u, c) {
  var o = l ? e.clientY : e.clientX, p = l ? i.height : i.width, d = l ? i.top : i.left, g = l ? i.bottom : i.right, _ = !1;
  if (!u) {
    if (c && Ji < p * n) {
      if (!ai && (oi === 1 ? o > d + p * s / 2 : o < g - p * s / 2) && (ai = !0), ai)
        _ = !0;
      else if (oi === 1 ? o < d + Ji : o > g - Ji)
        return -oi;
    } else if (o > d + p * (1 - n) / 2 && o < g - p * (1 - n) / 2)
      return Od(t);
  }
  return _ = _ || u, _ && (o < d + p * s / 2 || o > g - p * s / 2) ? o > d + p / 2 ? 1 : -1 : 0;
}
function Od(e) {
  return ot(ee) < ot(e) ? 1 : -1;
}
function Fd(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, i = t.length, l = 0; i--; )
    l += t.charCodeAt(i);
  return l.toString(36);
}
function Hd(e) {
  sl.length = 0;
  for (var t = e.getElementsByTagName("input"), i = t.length; i--; ) {
    var l = t[i];
    l.checked && sl.push(l);
  }
}
function Qi(e) {
  return setTimeout(e, 0);
}
function Dl(e) {
  return clearTimeout(e);
}
hl && _e(document, "touchmove", function(e) {
  (ce.active || Ut) && e.cancelable && e.preventDefault();
});
ce.utils = {
  on: _e,
  off: ye,
  css: de,
  find: Uo,
  is: function(t, i) {
    return !!ct(t, i, t, !1);
  },
  extend: wd,
  throttle: Wo,
  closest: ct,
  toggleClass: et,
  clone: Zo,
  index: ot,
  nextTick: Qi,
  cancelNextTick: Dl,
  detectDirection: Go,
  getChild: qt,
  expando: Je
};
ce.get = function(e) {
  return e[Je];
};
ce.mount = function() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(l) {
    if (!l.prototype || !l.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));
    l.utils && (ce.utils = mt(mt({}, ce.utils), l.utils)), ui.mount(l);
  });
};
ce.create = function(e, t) {
  return new ce(e, t);
};
ce.version = yd;
var Ie = [], Jt, Il, Ml = !1, Sl, El, rl, Qt;
function Vd() {
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
      this.sortable.nativeDraggable ? _e(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? _e(document, "pointermove", this._handleFallbackAutoScroll) : l.touches ? _e(document, "touchmove", this._handleFallbackAutoScroll) : _e(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var l = i.originalEvent;
      !this.options.dragOverBubble && !l.rootEl && this._handleAutoScroll(l);
    },
    drop: function() {
      this.sortable.nativeDraggable ? ye(document, "dragover", this._handleAutoScroll) : (ye(document, "pointermove", this._handleFallbackAutoScroll), ye(document, "touchmove", this._handleFallbackAutoScroll), ye(document, "mousemove", this._handleFallbackAutoScroll)), no(), el(), Cd();
    },
    nulling: function() {
      rl = Il = Jt = Ml = Qt = Sl = El = null, Ie.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, l) {
      var n = this, s = (i.touches ? i.touches[0] : i).clientX, u = (i.touches ? i.touches[0] : i).clientY, c = document.elementFromPoint(s, u);
      if (rl = i, l || this.options.forceAutoScrollFallback || ri || Ct || ii) {
        Tl(i, this.options, c, l);
        var o = Et(c, !0);
        Ml && (!Qt || s !== Sl || u !== El) && (Qt && no(), Qt = setInterval(function() {
          var p = Et(document.elementFromPoint(s, u), !0);
          p !== o && (o = p, el()), Tl(i, n.options, p, l);
        }, 10), Sl = s, El = u);
      } else {
        if (!this.options.bubbleScroll || Et(c, !0) === ht()) {
          el();
          return;
        }
        Tl(i, this.options, Et(c, !1), !1);
      }
    }
  }, wt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function el() {
  Ie.forEach(function(e) {
    clearInterval(e.pid);
  }), Ie = [];
}
function no() {
  clearInterval(Qt);
}
var Tl = Wo(function(e, t, i, l) {
  if (t.scroll) {
    var n = (e.touches ? e.touches[0] : e).clientX, s = (e.touches ? e.touches[0] : e).clientY, u = t.scrollSensitivity, c = t.scrollSpeed, o = ht(), p = !1, d;
    Il !== i && (Il = i, el(), Jt = t.scroll, d = t.scrollFn, Jt === !0 && (Jt = Et(i, !0)));
    var g = 0, _ = Jt;
    do {
      var x = _, k = Me(x), N = k.top, a = k.bottom, r = k.left, f = k.right, m = k.width, v = k.height, b = void 0, h = void 0, y = x.scrollWidth, C = x.scrollHeight, w = de(x), S = x.scrollLeft, I = x.scrollTop;
      x === o ? (b = m < y && (w.overflowX === "auto" || w.overflowX === "scroll" || w.overflowX === "visible"), h = v < C && (w.overflowY === "auto" || w.overflowY === "scroll" || w.overflowY === "visible")) : (b = m < y && (w.overflowX === "auto" || w.overflowX === "scroll"), h = v < C && (w.overflowY === "auto" || w.overflowY === "scroll"));
      var E = b && (Math.abs(f - n) <= u && S + m < y) - (Math.abs(r - n) <= u && !!S), z = h && (Math.abs(a - s) <= u && I + v < C) - (Math.abs(N - s) <= u && !!I);
      if (!Ie[g])
        for (var B = 0; B <= g; B++)
          Ie[B] || (Ie[B] = {});
      (Ie[g].vx != E || Ie[g].vy != z || Ie[g].el !== x) && (Ie[g].el = x, Ie[g].vx = E, Ie[g].vy = z, clearInterval(Ie[g].pid), (E != 0 || z != 0) && (p = !0, Ie[g].pid = setInterval((function() {
        l && this.layer === 0 && ce.active._onTouchMove(rl);
        var P = Ie[this.layer].vy ? Ie[this.layer].vy * c : 0, U = Ie[this.layer].vx ? Ie[this.layer].vx * c : 0;
        typeof d == "function" && d.call(ce.dragged.parentNode[Je], U, P, e, rl, Ie[this.layer].el) !== "continue" || $o(Ie[this.layer].el, U, P);
      }).bind({
        layer: g
      }), 24))), g++;
    } while (t.bubbleScroll && _ !== o && (_ = Et(_, !1)));
    Ml = p;
  }
}, 30), Jo = function(t) {
  var i = t.originalEvent, l = t.putSortable, n = t.dragEl, s = t.activeSortable, u = t.dispatchSortableEvent, c = t.hideGhostForTarget, o = t.unhideGhostForTarget;
  if (i) {
    var p = l || s;
    c();
    var d = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, g = document.elementFromPoint(d.clientX, d.clientY);
    o(), p && !p.el.contains(g) && (u("spill"), this.onSpill({
      dragEl: n,
      putSortable: l
    }));
  }
};
function ql() {
}
ql.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var i = t.oldDraggableIndex;
    this.startIndex = i;
  },
  onSpill: function(t) {
    var i = t.dragEl, l = t.putSortable;
    this.sortable.captureAnimationState(), l && l.captureAnimationState();
    var n = qt(this.sortable.el, this.startIndex, this.options);
    n ? this.sortable.el.insertBefore(i, n) : this.sortable.el.appendChild(i), this.sortable.animateAll(), l && l.animateAll();
  },
  drop: Jo
};
wt(ql, {
  pluginName: "revertOnSpill"
});
function jl() {
}
jl.prototype = {
  onSpill: function(t) {
    var i = t.dragEl, l = t.putSortable, n = l || this.sortable;
    n.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), n.animateAll();
  },
  drop: Jo
};
wt(jl, {
  pluginName: "removeOnSpill"
});
ce.mount(new Vd());
ce.mount(jl, ql);
const Pd = ["onInput", "onKeydown"], Ud = { class: "tooltip-menu" }, Wd = ["onClick"], $d = {
  key: 0,
  class: "component-menu"
}, Zd = /* @__PURE__ */ Le({
  __name: "ComponentManager",
  props: {
    elements: {
      type: Array,
      required: !0
    }
  },
  emits: ["delete-element", "update-text", "add-text", "add-element", "elements-reordered"],
  setup(e, { emit: t }) {
    const l = Q(e.elements), n = t, s = Q(!1), u = Q(null), c = Q(null);
    ul(() => {
      c.value && ce.create(c.value, {
        handle: ".drag-handle",
        animation: 150,
        onEnd: (_) => {
          const { oldIndex: x, newIndex: k } = _;
          if (x !== void 0 && k !== void 0) {
            const N = l.value.splice(x, 1)[0];
            l.value.splice(k, 0, N), n("elements-reordered", l.value);
          }
        }
      });
    });
    const o = (_, x) => {
      const k = x.target.innerText.trim();
      k !== l.value[_].text && n("update-text", { index: _, text: k }), s.value = k.endsWith("/"), s.value && (u.value = _);
    }, p = (_, x) => {
      _.key === "/" && (s.value = !0, u.value = x);
    }, d = (_, x) => {
      if (u.value !== null) {
        const k = { type: "customTag", component: _, props: x };
        l.value.splice(u.value + 1, 0, k), n("add-element", { element: k, index: u.value + 1 }), u.value = null, s.value = !1;
      }
    }, g = (_) => {
      n("delete-element", _);
    };
    return (_, x) => {
      const k = Se("lkt-button");
      return W(), se("div", {
        ref_key: "sortableContainer",
        ref: c,
        class: "sortable-container"
      }, [
        (W(!0), se(Ze, null, _t(l.value, (N, a) => (W(), se("div", {
          key: a,
          class: "sortable-item"
        }, [
          x[4] || (x[4] = ae("div", { class: "drag-handle" }, "☰", -1)),
          N.type === "text" ? (W(), se("div", {
            key: 0,
            contenteditable: "true",
            class: "editable-text",
            onInput: (r) => o(a, r),
            onKeydown: (r) => p(r, a)
          }, bt(N.text), 41, Pd)) : (W(), ne(Mt(N.component), Ol({
            key: 1,
            ref_for: !0
          }, N.props), null, 16)),
          re(k, {
            type: Z(cl).Split,
            icon: "icon-tooltip",
            tooltip: {
              windowMargin: 30,
              referrerMargin: 7
            }
          }, {
            split: xe(({ doClose: r }) => [
              ae("div", Ud, [
                ae("button", {
                  class: "delete-button",
                  onClick: (f) => g(a)
                }, "Eliminar", 8, Wd)
              ])
            ]),
            _: 2
          }, 1032, ["type"])
        ]))), 128)),
        s.value && u.value !== null ? (W(), se("div", $d, [
          ae("ul", null, [
            ae("li", {
              onClick: x[0] || (x[0] = (N) => d("lkt-tag", { text: "Etiqueta personalizada" }))
            }, "Etiqueta personalizada"),
            ae("li", {
              onClick: x[1] || (x[1] = (N) => d("ImageComponent", { src: _.prompt("Ingrese la URL de la imagen:") }))
            }, "Imagen"),
            ae("li", {
              onClick: x[2] || (x[2] = (N) => d("TableComponent", {}))
            }, "Tabla"),
            ae("li", {
              onClick: x[3] || (x[3] = (N) => d("FormComponent", {}))
            }, "Formulario")
          ])
        ])) : fe("", !0)
      ], 512);
    };
  }
}), Qo = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [l, n] of t)
    i[l] = n;
  return i;
}, qd = /* @__PURE__ */ Qo(Zd, [["__scopeId", "data-v-46f1b1c3"]]), jd = { class: "wysiwyg-container" }, Gd = { class: "toolbar" }, Yd = /* @__PURE__ */ Le({
  __name: "ElementsInput",
  setup(e) {
    const t = Q([
      { type: "text", text: "Escribe algo aquí o " },
      { type: "customTag", component: "CustomTag", props: { text: "un componente dinámico" } },
      { type: "text", text: " entre el texto." }
    ]), i = Q([]);
    let l = Q(-1);
    const n = () => {
      i.value = i.value.slice(0, l.value + 1), i.value.push([...t.value]), l.value = i.value.length - 1;
    }, s = () => {
      n();
    }, u = (a) => {
      t.value.splice(a, 1), n();
    }, c = (a) => {
      document.execCommand(a, !1), n();
    }, o = (a) => {
      const r = a.target.value;
      document.execCommand("foreColor", !1, r), n();
    }, p = (a) => {
      const r = a.target.value;
      document.execCommand("backColor", !1, r), n();
    }, d = (a) => {
      const r = a.target.value;
      document.execCommand("fontSize", !1, r), n();
    }, g = (a) => {
      const r = a.target.value;
      document.execCommand("fontName", !1, r), n();
    }, _ = (a) => {
      document.execCommand("justify" + a, !1), n();
    }, x = () => {
      l.value > 0 && (l.value--, t.value = [...i.value[l.value]]);
    }, k = () => {
      l.value < i.value.length - 1 && (l.value++, t.value = [...i.value[l.value]]);
    }, N = () => {
      const a = prompt("Ingrese la URL del enlace:");
      a && (document.execCommand("createLink", !1, a), n());
    };
    return (a, r) => (W(), se("div", jd, [
      ae("div", Gd, [
        ae("button", {
          onClick: r[0] || (r[0] = (f) => c("bold"))
        }, "Negrita"),
        ae("button", {
          onClick: r[1] || (r[1] = (f) => c("italic"))
        }, "Cursiva"),
        ae("button", {
          onClick: r[2] || (r[2] = (f) => c("underline"))
        }, "Subrayado"),
        ae("button", {
          onClick: r[3] || (r[3] = (f) => c("strikeThrough"))
        }, "Tachado"),
        ae("button", {
          onClick: r[4] || (r[4] = (f) => c("subscript"))
        }, "Subíndice"),
        ae("button", {
          onClick: r[5] || (r[5] = (f) => c("superscript"))
        }, "Superíndice"),
        ae("input", {
          type: "color",
          onInput: o,
          title: "Color del texto"
        }, null, 32),
        ae("input", {
          type: "color",
          onInput: p,
          title: "Color de fondo"
        }, null, 32),
        ae("select", {
          onChange: r[6] || (r[6] = (f) => d(f))
        }, r[13] || (r[13] = [
          ae("option", { value: "3" }, "Mediano", -1),
          ae("option", { value: "5" }, "Grande", -1),
          ae("option", { value: "7" }, "Extra Grande", -1)
        ]), 32),
        ae("select", {
          onChange: r[7] || (r[7] = (f) => g(f))
        }, r[14] || (r[14] = [
          ae("option", { value: "Arial" }, "Arial", -1),
          ae("option", { value: "Courier New" }, "Courier New", -1),
          ae("option", { value: "Georgia" }, "Georgia", -1),
          ae("option", { value: "Times New Roman" }, "Times New Roman", -1)
        ]), 32),
        ae("button", {
          onClick: r[8] || (r[8] = (f) => _("left"))
        }, "Alineación izquierda"),
        ae("button", {
          onClick: r[9] || (r[9] = (f) => _("center"))
        }, "Centrar"),
        ae("button", {
          onClick: r[10] || (r[10] = (f) => _("right"))
        }, "Alineación derecha"),
        ae("button", {
          onClick: r[11] || (r[11] = (f) => c("insertUnorderedList"))
        }, "Lista no ordenada"),
        ae("button", {
          onClick: r[12] || (r[12] = (f) => c("insertOrderedList"))
        }, "Lista ordenada"),
        ae("button", { onClick: N }, "Insertar Enlace"),
        ae("button", { onClick: x }, "Deshacer"),
        ae("button", { onClick: k }, "Rehacer")
      ]),
      re(qd, {
        elements: t.value,
        onDeleteElement: u,
        onAddElement: s
      }, null, 8, ["elements"])
    ]));
  }
}), Kd = /* @__PURE__ */ Qo(Yd, [["__scopeId", "data-v-2878ca03"]]), Xd = ["data-show-ui", "data-labeled"], Jd = ["for", "innerHTML"], Qd = { class: "lkt-field-content" }, ec = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, tc = {
  key: 1,
  class: "lkt-field--icon"
}, ic = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], lc = ["value", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], nc = {
  key: 4,
  class: "lkt-field--info-nav"
}, oc = { key: 0 }, ac = ["data-index", "onClick"], jt = /* @__PURE__ */ Le({
  __name: "LktField",
  props: {
    modelValue: { type: [String, Number, Boolean, Object, Array], default: "" },
    type: { default: q.Text },
    valid: { type: Boolean, default: !1 },
    placeholder: { default: "" },
    searchPlaceholder: { default: "" },
    label: { default: "" },
    labelIcon: {},
    labelIconAtEnd: { type: Boolean },
    name: { default: Ll(16) },
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
    featuredButton: { default: "" },
    infoButtonEllipsis: { type: Boolean, default: !1 },
    fileName: { default: "" },
    options: { default: () => [] },
    multiple: { type: Boolean, default: !1 },
    multipleDisplay: { default: It.List },
    multipleDisplayEdition: { default: It.Inline },
    searchable: { type: Boolean, default: !1 },
    autoloadOptionsResource: { type: [Boolean, String], default: !1 },
    optionsDownload: { type: [String, Function], default: "" },
    optionsModal: { type: [String, Function], default: "" },
    optionsModalData: { type: [Object, Function], default: () => ({}) },
    optionsText: {},
    optionsIcon: { type: [String, Function], default: "" },
    optionsClass: {},
    optionsLabelFormatter: {},
    optionsResource: { default: "" },
    optionsResourceData: { default: () => ({}) },
    icon: { type: [String, Function], default: "" },
    download: {},
    modal: { type: [String, Function], default: "" },
    modalKey: { type: [String, Number, Function], default: "" },
    modalData: { default: () => ({}) },
    itemType: {},
    optionValueType: { default: "value" },
    prop: { default: () => ({}) },
    validation: {},
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
    customButtonText: {},
    customButtonClass: {}
  },
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
    "selected-option"
  ],
  setup(e, { expose: t, emit: i }) {
    const l = i, n = Fl(), s = e, u = Ll(16);
    let c = Pt(s.modal, s.prop), o = Pt(s.modalKey, s.prop), p = Pt(s.icon, s.prop), d = Pt(s.download, s.prop), g = Pt(s.itemType, s.prop);
    !c && typeof g != "function" && g && typeof te.modalPerItemType[g] < "u" && (c = te.modalPerItemType[g]);
    const _ = Q(s.type), x = Q(null);
    let k = s.featuredButton, N = s.modelValue;
    s.multiple && Na.includes(_.value) ? (!N || !Array.isArray(N)) && (N = []) : Rt.includes(_.value) ? typeof N != "boolean" && (N = !1) : _.value === q.Date && !p ? p = te.defaultDateIcon : _.value === q.Number && s.canStep && k === "" && (k = te.defaultNumberFeaturedButton);
    const a = Q(N), r = Q(N), f = Q(s.valid), m = Q(!1), v = Q(!1), b = Q(!1), h = Q(!1), y = Q([]), C = Q(!s.readMode), w = Q(s.fileName), S = Q(s.fileName), I = Q(null), E = Q(null), z = Q(null), B = Q(!1), P = Q(!1), U = Q(!1), V = Q(""), M = Q(-1), H = Q([]), D = Q(!1), O = Q(!1), R = Q(!1), F = ie(() => ao.value), A = ie(() => (F.value, te.dateReadFormat ? te.dateReadFormat : te.langDateReadFormat[F.value] ? te.langDateReadFormat[F.value] : te.defaultDateReadFormat ? te.defaultDateReadFormat : "Y-m-d")), T = _.value === q.Card ? r.value : Q(Yn(r.value, F.value)), Y = Q(T), $ = Q([]), X = Q([]), j = () => {
      const L = (J) => {
        if (X.value = bl($.value, J), s.multiple) {
          for (let Qe in T.value) {
            let lt;
            s.optionValueType === "option" ? lt = gi($.value, T.value[Qe].value) : lt = gi($.value, T.value[Qe]), typeof lt < "u" && (H.value.length === 0 ? H.value.push(lt) : H.value.splice(Qe, 1, lt));
          }
          return;
        }
        let we;
        s.optionValueType === "option" ? we = gi($.value, T.value.map((Qe) => Qe.value)) : we = gi($.value, T.value), typeof we < "u" && (H.value.length === 0 ? H.value.push(we) : H.value.splice(0, 1, we));
      };
      _.value === q.Text ? L(T.value) : _.value === q.Select && L(V.value);
    }, K = ie(() => _.value === q.Date), oe = ie(() => _.value === q.File), me = ie(() => _.value === q.Image), ve = ie(() => _.value === q.Textarea ? "textarea" : _.value === q.Html ? "div" : "input"), be = ie(() => _.value === q.Date ? r.value !== a.value : T.value !== Y.value), he = ie(() => typeof s.disabled == "function" ? s.disabled(s.prop) : s.disabled), Ae = ie(() => {
      let L = 0;
      return Yl.value && ++L, Kl.value && ++L, Xl.value && ++L, Jl.value && ++L, en.value && ++L, Ql.value && ++L, Nt.value && ++L, rt.value && ++L, (s.customButtonText || s.customButtonClass) && ++L, L > 0 && _.value === q.Textarea || L > 0 && _.value === q.Html || L > 0 && s.infoButtonEllipsis ? 1 : L;
    }), qe = ie(() => pl.value && k === "i18n" || di.value && k === "password" || zt.value && k === "subtract"), Ce = ie(() => Ae.value > 0), Oe = ie(() => s.autocomplete === !0 ? "on" : "off"), Te = ie(() => _.value === q.Date ? r.value !== "" : T.value !== ""), gt = ie(() => _.value === q.Password && m.value === !0 ? "text" : _.value === q.Email ? "email" : _.value === q.Password ? "password" : _.value === q.Number ? "number" : _.value === q.Tel ? "tel" : _.value === q.Search ? "search" : _.value === q.Color ? "color" : _.value === q.Range ? "range" : "text"), je = ie(() => {
      const L = ["lkt-field"];
      return L.push(`is-${_.value}`), Rt.includes(_.value) && (L.push("is-boolean"), T.value && L.push("is-checked")), be.value && L.push("is-changed"), he.value && L.push("is-disabled"), s.multiple && L.push("is-multiple"), qe.value && L.push("with-atn-btn"), Ce.value && L.push("with-info-btn"), s.mandatory && C.value && L.push("is-mandatory-field"), C.value && v.value && L.push("has-focus"), B.value && L.push("show-options"), s.searchable && D.value && L.push("is-searching"), _.value !== q.Range && s.autoValidation && h.value && b.value && (y.value.length > 0 ? L.push("is-invalid") : L.push("is-valid")), [q.Textarea, q.Html].includes(_.value) && L.push("is-lg"), [q.Image].includes(_.value) && L.push("is-xl"), s.multiple && _.value === q.Select && L.push("is-lg"), s.multiple && (C.value ? L.push(`has-multiple-display-${s.multipleDisplayEdition}`) : L.push(`has-multiple-display-${s.multipleDisplay}`)), Ae.value > 0 && L.push("has-icons", `has-icons-${Ae.value}`), L.push(C.value ? "is-editable" : "is-read"), _.value !== q.Range && (L.push(f.value ? "is-valid" : "is-error"), L.push(Te.value ? "is-filled" : "is-empty")), L.join(" ");
    }), Ge = ie(() => {
      var L;
      return typeof T.value == "number" ? (F.value, (L = te.langNumberFormat[F.value]) != null && L.amountOfDecimals ? fn(
        T.value,
        te.langNumberFormat[F.value].amountOfDecimals,
        te.langNumberFormat[F.value].decimalSeparator,
        te.langNumberFormat[F.value].thousandsSeparator,
        te.langNumberFormat[F.value].removeDecimalsIfZero
      ) : te.amountOfDecimals ? fn(
        T.value,
        te.amountOfDecimals,
        te.decimalSeparator,
        te.thousandsSeparator,
        te.removeDecimalsIfZero
      ) : T.value.toString()) : _.value === q.Html ? oo(T.value) : T.value;
    }), He = ie(() => typeof s.min == "string" ? parseFloat(s.min) : typeof s.min == "number" ? s.min : !1), ke = ie(() => typeof s.max == "string" ? parseFloat(s.max) : typeof s.max == "number" ? s.max : !1), Lt = ie(() => {
      let L = "";
      if (s.label.startsWith("__:") ? L = ei(s.label.substring(3)) : L = s.label, s.labelIcon) {
        let J = '<i class="' + s.labelIcon + '"></i>';
        s.labelIconAtEnd ? L += J : L = J + L;
      }
      return L;
    }), st = ie(() => s.placeholder.startsWith("__:") ? ei(s.placeholder.substring(3)) : s.placeholder), Ye = ie(() => s.searchPlaceholder.startsWith("__:") ? ei(s.searchPlaceholder.substring(3)) : s.searchPlaceholder), De = ie(() => _.value === q.File ? te.acceptTypes.file : _.value === q.Image ? te.acceptTypes.image : ""), We = ie(() => s.errorMessage), Ve = ie(() => s.infoMessage), zt = ie(() => s.canStep && C.value && _.value === q.Number), Nt = ie(() => s.canStep && C.value && _.value === q.Number && k !== "subtract"), rt = ie(() => s.canStep && C.value && _.value === q.Number), Ot = ie(() => s.canUndo && be.value && C.value && !za.includes(_.value)), Gl = ie(() => s.canClear && Te.value && C.value && !La.includes(_.value)), pl = ie(() => s.canI18n && typeof r.value == "object" && C.value), di = ie(() => _.value === q.Password && s.showPassword && Te.value && C.value), Yl = ie(() => Ot.value && !s.infoButtonEllipsis), Kl = ie(() => Gl.value && !s.infoButtonEllipsis), Xl = ie(() => di.value && !s.infoButtonEllipsis && k !== "password"), Jl = ie(() => pl.value && !s.infoButtonEllipsis && k !== "i18n"), Ql = ie(() => _.value === q.Calc || _.value === q.Search ? !1 : X.value.length > 0 || $.value.length > 0 || s.optionsResource !== ""), en = ie(() => s.allowReadModeSwitch && !s.infoButtonEllipsis), tn = () => {
      tl(() => {
        x.value && x.value.focus();
      });
    }, ea = async () => {
      if (s.validationResource) {
        l("validating");
        const L = await zl(s.validationResource, {
          ...s.validationResourceData,
          value: T.value
        });
        l("validation", L);
      }
    };
    ge(() => s.checkEqualTo, (L) => Ft()), ge(() => s.readMode, (L) => C.value = !L), ge(() => s.valid, (L) => f.value = L), ge(() => s.modelValue, (L) => {
      _.value === q.Card ? T.value = L : _.value !== q.Date && (T.value = Yn(L, F.value));
    }), ge(T, (L) => {
      typeof r.value == "object" && _.value === q.Card ? r.value[F.value] = L : r.value = L, _.value === q.Number && ca(L);
    }), ge(r, (L) => {
      U.value && C.value && (l("update:modelValue", L), ea(), Ft());
    }, { deep: !0 }), ge(f, (L) => {
      l("update:valid", L);
    }), ge($, (L) => {
      l("update:options", L);
    }), ge(() => s.options, (L) => {
      $.value = ll(L, s.prop), _.value === q.Select ? Gt(V.value, !1) : Gt(T.value, !1);
    });
    const Ft = () => {
      s.autoValidationType === "blur" && (!b.value || !h.value) || _.value !== q.Range && (y.value = [], tl(() => {
        let L = typeof s.min > "u" ? 0 : parseFloat(s.min), J = typeof s.max > "u" ? 0 : parseFloat(s.max);
        if (_.value === q.Number && typeof s.min < "u" && typeof s.max < "u" && (T.value < L || T.value > J)) {
          y.value.push(vt.createNumBetween(L, J, "ko")), f.value = !1;
          return;
        }
        ![q.Number, q.Email].includes(_.value) && s.mandatory && T.value === "" ? y.value.push(vt.createEmpty("ko")) : _.value !== q.Email && L > 0 && (_.value !== q.Number && T.value.length < L ? y.value.push(vt.createMinStr(L, "ko")) : T.value < L && y.value.push(vt.createMinNum(L, "ko"))), J > 0 && (_.value !== q.Number && T.value.length > J ? y.value.push(vt.createMaxStr(J, "ko")) : T.value > J && y.value.push(vt.createMaxNum(J, "ko"))), _.value === q.Email && (s.mandatory && T.value === "" ? y.value.push(vt.createEmpty("ko")) : ka(T.value) || y.value.push(vt.createEmail("ko"))), Ba.includes(_.value) && (ps(y.value, T.value, s.minNumbers, s.maxNumbers), ms(y.value, T.value, s.minUpperChars, s.maxUpperChars), gs(y.value, T.value, s.minLowerChars, s.maxLowerChars), vs(y.value, T.value, s.minChars, s.maxChars), bs(y.value, T.value, s.minSpecialChars, s.maxSpecialChars)), s.checkEqualTo && T.value !== s.checkEqualTo && y.value.push(vt.createEqualTo(s.checkEqualTo, "ko")), f.value = y.value.length === 0;
      }));
    }, Gt = (L, J = !0) => {
      if ($.value.length === 0) {
        X.value = [];
        return;
      }
      switch (_.value) {
        case q.Select:
          s.searchable ? X.value = bl($.value, L, !0) : X.value = $.value, P.value = !1, J && (B.value = s.optionsResource !== "" || X.value.length > 0), j();
          return;
        case q.Text:
        case q.Search:
          X.value = bl($.value, L, !1), P.value = !1, J && (B.value = s.optionsResource !== "" || X.value.length > 0);
          return;
      }
    }, ci = async (L, J = !0) => {
      if (!(!C.value && !s.autoloadOptionsResource && !O.value) && ![
        q.Tel,
        q.Date,
        q.Color,
        q.File,
        q.Html,
        q.Image,
        q.Password,
        q.Range,
        q.Textarea
      ].includes(_.value))
        if (P.value = !1, s.autoloadOptionsResource && !O.value && (R.value = !0), s.optionsResource !== "") {
          P.value = !0, te.searchKeyForResource !== "" && (s.optionsResourceData[te.searchKeyForResource] = L);
          const we = await zl(s.optionsResource, s.optionsResourceData);
          Array.isArray(we.data) && we.data.length > 0 && ($.value = Qa($.value, we.data, s.prop), Gt(L, J), s.autoloadOptionsResource && !O.value && (s.autoloadOptionsResource === "feed" && (s.multiple ? X.value.forEach((lt) => {
            Yt(lt);
          }) : X.value.length > 0 && Yt(X.value[0])), O.value = !0, R.value = !1), l("options-loaded", we.data));
        } else
          Gt(L, J);
    }, ml = (L) => {
      var Qe, lt;
      let J = X.value.length - 1;
      if (J === -1) return;
      const we = L.key ?? "";
      if (v.value)
        if (["ArrowDown", "ArrowUp", "Enter"].includes(we) && (L.preventDefault(), L.stopPropagation()), we === "ArrowDown") {
          ++M.value, M.value > J && (M.value = 0);
          let le = (Qe = z.value) == null ? void 0 : Qe.querySelector('[data-index="' + M.value + '"]');
          le && le.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else if (we === "ArrowUp") {
          --M.value, M.value < 0 && (M.value = J);
          let le = (lt = z.value) == null ? void 0 : lt.querySelector('[data-index="' + M.value + '"]');
          le && le.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else we === "Enter" && M.value > -1 && Yt(X.value[M.value]);
    }, gl = () => {
      if (_.value === q.Html) {
        x.value && x.value.setValue(Y.value);
        return;
      } else if (_.value === q.Date) {
        r.value = a.value;
        return;
      } else if (_.value === q.File) {
        r.value = a.value, S.value = w.value;
        return;
      }
      T.value = Y.value;
    }, ln = () => {
      if (_.value === q.Html) {
        x.value && x.value.setValue("");
        return;
      } else if (_.value === q.Date) {
        r.value = "";
        return;
      } else if (_.value === q.File) {
        r.value = "", S.value = "";
        return;
      } else if (_.value === q.Select) {
        T.value = s.multiple ? [] : "", H.value = [];
        return;
      }
      T.value = "";
    }, ta = () => T.value, nn = (L) => {
      Ft(), pn.includes(_.value) ? (ci(T.value), ml(L)) : _.value === q.Select && ml(L), l("keyup", L);
    }, on = () => {
      x.value && x.value.keepFocused();
    }, ia = () => {
      if (B.value) {
        if (_.value === q.Select) {
          rn();
          return;
        }
        return hi();
      }
      if (_.value === q.Select) {
        sn();
        return;
      }
      return fi();
    }, Yt = (L) => {
      if (!L.disabled)
        if (s.multiple) {
          let J;
          s.optionValueType === "option" ? J = mn(L, T.value.map((we) => we.value)) : J = mn(L, T.value), J === -1 ? (s.optionValueType === "option" ? T.value.push(L.value) : T.value.push(String(L.value)), H.value.push(L)) : (T.value.splice(J, 1), H.value.splice(J, 1)), on(), l("selected-option", L);
        } else
          M.value = -1, s.optionValueType === "option" ? T.value = L : T.value = String(L.value), H.value.splice(0, 1, L), B.value = !1, D.value = !1, l("selected-option", L);
    }, an = (L) => l("keydown", L), fi = (L) => {
      h.value = !0, v.value = !0, Ft(), l("focus", L);
    }, hi = (L) => {
      setTimeout(() => {
        if (!(s.searchable && D.value)) {
          if (s.multiple) {
            B.value = !0, v.value = !0;
            return;
          }
          b.value = !0, M.value = -1, B.value = !1, v.value = !1, Ft(), l("blur", L);
        }
      }, 100);
    }, pi = (L) => {
      h.value = !0, v.value = !0, l("focus", L);
    }, mi = (L) => {
      b.value = !0, v.value = !1, l("blur", L);
    }, la = (L) => {
      ml(L);
    }, na = (L) => {
      V.value = L, ci(L);
    }, oa = (L) => {
      let J = new il({
        value: L,
        label: L
      });
      H.value.findIndex((Qe) => Qe.value === J.value) === -1 && ($.value.push(J), X.value.push(J), Yt(J)), V.value = "";
    }, aa = (L) => {
      let J = H.value.findIndex((we) => we.value === L.value);
      J >= 0 && (H.value.splice(J, 1), $.value.splice(
        $.value.findIndex((we) => we.value === L.value),
        1
      ), X.value.splice(
        X.value.findIndex((we) => we.value === L.value),
        1
      )), V.value = "";
    }, sn = () => {
      if (h.value = !0, v.value = !0, !s.optionsResource && X.value.length === 0) {
        B.value = !1;
        return;
      }
      B.value = !0, Ft(), ci(V.value, !1), s.searchable && on(), l("focus");
    }, rn = () => {
      b.value = !0, v.value = !1, l("blur");
    }, vl = (L) => {
      l("change", L);
    }, Kt = (L) => {
      l("click", L);
    }, sa = (L) => l("click-info", L), ra = (L) => l("click-error", L), un = () => {
      let L = s.step ?? 1;
      typeof L == "string" && (L = parseFloat(L)), (!s.min || T.value > s.min) && (T.value -= L);
    }, ua = () => {
      let L = s.step ?? 1;
      typeof L == "string" && (L = parseFloat(L)), (!s.max || T.value < s.max) && (T.value += L);
    }, da = () => {
      C.value && tn();
    }, ca = (L) => {
      if (!s.enableAutoNumberFix) return !1;
      let J = Number(L), we = Ta(J, He.value, ke.value);
      return J !== we ? (T.value = we, !0) : !1;
    };
    t({
      Identifier: u,
      reset: gl,
      focus: tn,
      value: ta,
      isMandatory: () => s.mandatory
    });
    const fa = ie(() => s.editSlot !== "" && typeof te.customEditSlots[s.editSlot] < "u"), ha = ie(() => te.customEditSlots[s.editSlot]);
    ul(() => {
      $.value = ll(s.options, s.prop), Gt("", !1), j(), _.value === q.Select && (s.multiple && (D.value = !0), s.autoloadOptionsResource && ci("", !1)), U.value = !0;
    });
    const pa = ie(() => Rt.includes(_.value) && !he.value ? "label" : "div"), ma = ie(() => Rt.includes(_.value) ? {
      for: u
    } : {}), ga = ie(() => {
      switch (_.value) {
        case q.Select:
          return H.value;
        case q.Date:
          return fo(r.value, A.value);
        case q.File:
        case q.Image:
          return r.value;
        default:
          return T.value;
      }
    });
    return (L, J) => {
      const we = Se("lkt-button"), Qe = Se("lkt-loader"), lt = Se("lkt-tooltip");
      return W(), se("div", {
        class: it(je.value),
        "data-show-ui": Ce.value,
        "data-labeled": !Z(n).label,
        ref_key: "container",
        ref: E
      }, [
        Z(n).label ? dt(L.$slots, "label", { key: 0 }) : fe("", !0),
        !Z(n).label && Lt.value !== "" && !Z(Rt).includes(_.value) ? (W(), se("label", {
          key: 1,
          for: Z(u),
          class: "lkt-field--label",
          innerHTML: Lt.value
        }, null, 8, Jd)) : fe("", !0),
        ae("div", Qd, [
          qe.value ? (W(), se("div", ec, [
            L.featuredButton === "password" && di.value ? (W(), ne(Nl, {
              key: 0,
              modelValue: m.value,
              "onUpdate:modelValue": J[0] || (J[0] = (le) => m.value = le),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : fe("", !0),
            pl.value && Z(k) === "i18n" && L.canI18n ? (W(), ne(hn, {
              key: 1,
              modelValue: r.value,
              "onUpdate:modelValue": J[1] || (J[1] = (le) => r.value = le),
              "is-featured": "",
              type: _.value
            }, null, 8, ["modelValue", "type"])) : fe("", !0),
            zt.value && Z(k) === "subtract" ? (W(), ne(we, {
              key: 2,
              class: "lkt-field--atn-btn",
              icon: "lkt-field-icon-minus",
              onClick: un
            })) : fe("", !0)
          ])) : fe("", !0),
          Z(p) ? (W(), se("div", tc, [
            ae("i", {
              class: it(Z(p))
            }, null, 2)
          ])) : fe("", !0),
          C.value ? (W(), ne(Mt(pa.value), Ol({ key: 2 }, ma.value, { class: "lkt-field-main" }), {
            default: xe(() => [
              Z(n).edit ? (W(), se("div", {
                key: 0,
                onClick: Kt
              }, [
                dt(L.$slots, "edit", {
                  value: r.value,
                  title: Ge.value,
                  data: L.slotData
                })
              ])) : fa.value ? (W(), se("div", {
                key: 1,
                onClick: Kt
              }, [
                (W(), ne(Mt(ha.value), {
                  value: r.value,
                  title: Ge.value,
                  data: L.slotData
                }, null, 8, ["value", "title", "data"]))
              ])) : Z(Rt).includes(_.value) ? (W(), ne(Ss, {
                key: 2,
                modelValue: Z(T),
                "onUpdate:modelValue": J[2] || (J[2] = (le) => nt(T) ? T.value = le : null),
                id: Z(u),
                name: L.name,
                type: _.value,
                label: Lt.value,
                editable: C.value,
                focusing: v.value,
                disabled: he.value,
                readonly: L.readonly,
                onFocus: pi,
                onBlur: mi
              }, null, 8, ["modelValue", "id", "name", "type", "label", "editable", "focusing", "disabled", "readonly"])) : _.value === Z(q).Color && L.multiple ? (W(), ne(hs, {
                key: 3,
                modelValue: Z(T),
                "onUpdate:modelValue": J[3] || (J[3] = (le) => nt(T) ? T.value = le : null),
                "edit-mode": C.value,
                min: He.value,
                max: ke.value
              }, null, 8, ["modelValue", "edit-mode", "min", "max"])) : _.value === Z(q).Color ? (W(), ne(ho, {
                key: 4,
                modelValue: Z(T),
                "onUpdate:modelValue": J[4] || (J[4] = (le) => nt(T) ? T.value = le : null)
              }, null, 8, ["modelValue"])) : oe.value || me.value ? (W(), ne(od, {
                key: 5,
                modelValue: r.value,
                "onUpdate:modelValue": J[5] || (J[5] = (le) => r.value = le),
                "file-name": S.value,
                "onUpdate:fileName": J[6] || (J[6] = (le) => S.value = le),
                id: Z(u),
                tabindex: L.tabindex,
                resource: L.resource,
                "resource-data": L.resourceData,
                name: L.name,
                placeholder: st.value,
                accept: De.value,
                focusing: v.value,
                disabled: he.value,
                readonly: L.readonly,
                "is-image": _.value === Z(q).Image,
                onChange: vl
              }, null, 8, ["modelValue", "file-name", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image"])) : K.value ? (W(), ne(hd, {
                key: 6,
                modelValue: r.value,
                "onUpdate:modelValue": J[7] || (J[7] = (le) => r.value = le),
                id: Z(u),
                tabindex: L.tabindex,
                lang: F.value,
                name: L.name
              }, null, 8, ["modelValue", "id", "tabindex", "lang", "name"])) : _.value === Z(q).Select ? (W(), ne(Du, {
                key: 7,
                ref_key: "inputElement",
                ref: x,
                modelValue: Z(T),
                "onUpdate:modelValue": J[8] || (J[8] = (le) => nt(T) ? T.value = le : null),
                "show-options": B.value,
                "onUpdate:showOptions": J[9] || (J[9] = (le) => B.value = le),
                searchable: L.searchable,
                "search-mode": D.value,
                multiple: L.multiple,
                "can-tag": L.multiple,
                "options-text": L.optionsText,
                "options-icon": L.optionsIcon,
                "options-class": L.optionsClass,
                "option-slot": L.optionSlot,
                "options-modal": L.optionsModal,
                "options-download": L.optionsDownload,
                "options-label-formatter": L.optionsLabelFormatter,
                "options-modal-data": L.optionsModalData,
                "picked-options": H.value,
                editable: C.value,
                focusing: v.value,
                "search-placeholder": Ye.value,
                "multiple-display-edition": L.multipleDisplayEdition,
                onFocus: sn,
                onBlur: rn,
                onNavigate: la,
                onSearch: na,
                onTag: oa,
                onUntag: aa
              }, null, 8, ["modelValue", "show-options", "searchable", "search-mode", "multiple", "can-tag", "options-text", "options-icon", "options-class", "option-slot", "options-modal", "options-download", "options-label-formatter", "options-modal-data", "picked-options", "editable", "focusing", "search-placeholder", "multiple-display-edition"])) : _.value === Z(q).Calc ? (W(), ne(Pu, {
                key: 8,
                ref_key: "inputElement",
                ref: x,
                modelValue: Z(T),
                "onUpdate:modelValue": J[10] || (J[10] = (le) => nt(T) ? T.value = le : null),
                id: Z(u),
                tabindex: L.tabindex,
                name: L.name,
                editable: C.value,
                focusing: v.value,
                disabled: he.value,
                readonly: L.readonly,
                options: $.value,
                onFocus: pi,
                onBlur: mi
              }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "disabled", "readonly", "options"])) : _.value === Z(q).Search ? (W(), ne(qu, {
                key: 9,
                ref_key: "inputElement",
                ref: x,
                modelValue: Z(T),
                "onUpdate:modelValue": J[11] || (J[11] = (le) => nt(T) ? T.value = le : null),
                id: Z(u),
                tabindex: L.tabindex,
                name: L.name,
                editable: C.value,
                focusing: v.value,
                "had-first-focus": h.value,
                disabled: he.value,
                readonly: L.readonly,
                "options-resource": L.optionsResource,
                container: E.value,
                onFocus: pi,
                onBlur: mi
              }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : _.value === Z(q).Elements ? (W(), ne(Kd, {
                key: 10,
                ref_key: "inputElement",
                ref: x,
                modelValue: Z(T),
                "onUpdate:modelValue": J[12] || (J[12] = (le) => nt(T) ? T.value = le : null),
                id: Z(u),
                tabindex: L.tabindex,
                name: L.name,
                editable: C.value,
                focusing: v.value,
                "had-first-focus": h.value,
                disabled: he.value,
                readonly: L.readonly,
                "options-resource": L.optionsResource,
                container: E.value,
                onFocus: pi,
                onBlur: mi
              }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : _.value === Z(q).Card && s.multiple ? (W(), ne(md, {
                key: 11,
                modelValue: Z(T),
                "onUpdate:modelValue": J[13] || (J[13] = (le) => nt(T) ? T.value = le : null),
                id: Z(u),
                tabindex: L.tabindex,
                name: L.name,
                editable: C.value,
                focusing: v.value,
                "had-first-focus": h.value,
                disabled: he.value,
                readonly: L.readonly,
                "options-resource": L.optionsResource,
                modal: Z(c),
                "modal-key": Z(o),
                "modal-data": L.modalData,
                "item-type": Z(g)
              }, Ci({ _: 2 }, [
                Z(n)["item-" + Z(g)] ? {
                  name: "item",
                  fn: xe(({ item: le }) => [
                    dt(L.$slots, "item-" + Z(g), { item: le })
                  ]),
                  key: "0"
                } : Z(n).item ? {
                  name: "item",
                  fn: xe(({ item: le }) => [
                    dt(L.$slots, "item", { item: le })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : _.value === Z(q).Card ? (W(), ne(Fo, {
                key: 12,
                modelValue: Z(T),
                "onUpdate:modelValue": J[14] || (J[14] = (le) => nt(T) ? T.value = le : null),
                id: Z(u),
                tabindex: L.tabindex,
                name: L.name,
                editable: C.value,
                focusing: v.value,
                "had-first-focus": h.value,
                disabled: he.value,
                readonly: L.readonly,
                "options-resource": L.optionsResource,
                modal: Z(c),
                "modal-key": Z(o),
                "modal-data": L.modalData,
                "item-type": Z(g)
              }, Ci({ _: 2 }, [
                Z(n)["item-" + Z(g)] ? {
                  name: "item",
                  fn: xe(({ item: le }) => [
                    dt(L.$slots, "item-" + Z(g), { item: le })
                  ]),
                  key: "0"
                } : Z(n).item ? {
                  name: "item",
                  fn: xe(({ item: le }) => [
                    dt(L.$slots, "item", { item: le })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : ve.value === "input" ? Xe((W(), se("input", {
                key: 13,
                "onUpdate:modelValue": J[15] || (J[15] = (le) => nt(T) ? T.value = le : null),
                ref: (le) => x.value = le,
                value: Z(T),
                type: gt.value,
                name: L.name,
                id: Z(u),
                disabled: he.value,
                readonly: L.readonly,
                placeholder: st.value,
                tabindex: L.tabindex,
                autocomplete: Oe.value,
                min: He.value,
                max: ke.value,
                step: L.step,
                onKeyup: nn,
                onKeydown: an,
                onFocus: fi,
                onBlur: hi,
                onClick: Kt,
                onChange: vl
              }, null, 40, ic)), [
                [wa, Z(T)]
              ]) : ve.value === "textarea" ? Xe((W(), se("textarea", {
                key: 14,
                "onUpdate:modelValue": J[16] || (J[16] = (le) => nt(T) ? T.value = le : null),
                ref: (le) => x.value = le,
                value: Z(T),
                name: L.name,
                id: Z(u),
                disabled: he.value,
                readonly: L.readonly,
                placeholder: st.value,
                tabindex: L.tabindex,
                autocomplete: Oe.value,
                onKeyup: nn,
                onKeydown: an,
                onFocus: fi,
                onBlur: hi,
                onClick: Kt,
                onChange: vl
              }, null, 40, lc)), [
                [dl, Z(T)]
              ]) : _.value === Z(q).Html ? (W(), ne(Lu, {
                key: 15,
                ref_key: "inputElement",
                ref: x,
                modelValue: Z(T),
                "onUpdate:modelValue": J[17] || (J[17] = (le) => nt(T) ? T.value = le : null),
                id: Z(u),
                tabindex: L.tabindex,
                name: L.name,
                lang: F.value,
                editable: C.value,
                focusing: v.value,
                disabled: he.value,
                readonly: L.readonly,
                onFocus: fi,
                onBlur: hi
              }, null, 8, ["modelValue", "id", "tabindex", "name", "lang", "editable", "focusing", "disabled", "readonly"])) : fe("", !0)
            ]),
            _: 3
          }, 16)) : fe("", !0),
          C.value ? fe("", !0) : (W(), ne(ld, {
            key: 3,
            value: ga.value,
            type: _.value,
            label: Lt.value,
            title: Ge.value,
            "file-name": S.value,
            "value-slot": L.valueSlot,
            "empty-value-slot": L.emptyValueSlot,
            "slot-data": L.slotData,
            download: Z(d),
            multiple: L.multiple,
            multipleDisplay: L.multipleDisplay,
            modal: Z(c),
            "modal-key": Z(o),
            "modal-data": L.modalData,
            "option-slot": L.optionSlot,
            "options-download": L.optionsDownload,
            "options-modal": L.optionsModal,
            "options-modal-data": L.optionsModalData,
            "options-icon": L.optionsIcon,
            "options-text": L.optionsText,
            "options-class": L.optionsClass,
            "options-label-formatter": L.optionsLabelFormatter,
            "options-resource": L.optionsResource,
            "options-resource-data": L.optionsResourceData,
            onClick: Kt
          }, Ci({ _: 2 }, [
            Z(n).value ? {
              name: "value",
              fn: xe(() => [
                dt(L.$slots, r.value, {
                  value: r.value,
                  title: Ge.value,
                  data: L.slotData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "type", "label", "title", "file-name", "value-slot", "empty-value-slot", "slot-data", "download", "multiple", "multipleDisplay", "modal", "modal-key", "modal-data", "option-slot", "options-download", "options-modal", "options-modal-data", "options-icon", "options-text", "options-class", "options-label-formatter", "options-resource", "options-resource-data"])),
          Ce.value ? (W(), se("div", nc, [
            Xe(re(so, { onClick: gl }, null, 512), [
              [kt, Yl.value]
            ]),
            Xe(re(ro, { onClick: ln }, null, 512), [
              [kt, Kl.value]
            ]),
            _.value === Z(q).Number ? Xe((W(), ne(we, {
              key: 0,
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-minus",
              onClick: un
            }, null, 512)), [
              [kt, Nt.value]
            ]) : fe("", !0),
            _.value === Z(q).Number ? Xe((W(), ne(we, {
              key: 1,
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-plus",
              onClick: ua
            }, null, 512)), [
              [kt, rt.value]
            ]) : fe("", !0),
            We.value ? (W(), ne(we, {
              key: 2,
              title: L.errorMessage,
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-warning",
              onClick: ra
            }, null, 8, ["title"])) : fe("", !0),
            Ve.value ? (W(), ne(we, {
              key: 3,
              class: "lkt-field--info-btn",
              icon: "lkt-field-icon-info",
              onClick: sa,
              tooltip: "",
              "show-tooltip-on-hover": "",
              "show-tooltip-on-hover-delay": 500,
              "hide-tooltip-on-leave": ""
            }, {
              tooltip: xe(() => [
                Zt(bt(L.infoMessage), 1)
              ]),
              _: 1
            })) : fe("", !0),
            _.value === Z(q).Password ? Xe((W(), ne(Nl, {
              key: 4,
              modelValue: m.value,
              "onUpdate:modelValue": J[18] || (J[18] = (le) => m.value = le)
            }, null, 8, ["modelValue"])), [
              [kt, Xl.value]
            ]) : fe("", !0),
            Xe(re(hn, {
              modelValue: r.value,
              "onUpdate:modelValue": J[19] || (J[19] = (le) => r.value = le),
              type: _.value
            }, null, 8, ["modelValue", "type"]), [
              [kt, Jl.value]
            ]),
            C.value && en.value ? (W(), ne(uo, {
              key: 5,
              modelValue: C.value,
              "onUpdate:modelValue": J[20] || (J[20] = (le) => C.value = le),
              onClick: da
            }, null, 8, ["modelValue"])) : fe("", !0),
            L.customButtonText || L.customButtonClass ? (W(), ne(we, {
              key: 6,
              text: L.customButtonText,
              class: "lkt-field--info-btn lkt-field--custom-btn",
              icon: L.customButtonClass
            }, null, 8, ["text", "icon"])) : fe("", !0),
            C.value ? Xe((W(), ne(ts, {
              key: 7,
              onClick: ia
            }, null, 512)), [
              [kt, Ql.value]
            ]) : fe("", !0),
            L.infoButtonEllipsis ? (W(), ne(Ea, {
              key: 8,
              "show-undo": Ot.value,
              "show-clear": Gl.value,
              "show-password": di.value,
              "show-edition": L.allowReadModeSwitch,
              "show-password-check": m.value,
              "onUpdate:showPasswordCheck": J[21] || (J[21] = (le) => m.value = le),
              "show-edition-check": C.value,
              "onUpdate:showEditionCheck": J[22] || (J[22] = (le) => C.value = le),
              onUndo: gl,
              onClear: ln
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"])) : fe("", !0)
          ])) : fe("", !0)
        ]),
        C.value && L.autoValidation && y.value.length > 0 ? (W(), ne($u, {
          key: 2,
          items: y.value,
          stack: L.validationStack
        }, null, 8, ["items", "stack"])) : fe("", !0),
        C.value && Z(pn).includes(_.value) ? (W(), ne(lt, {
          key: 3,
          ref_key: "dropdownEl",
          ref: I,
          class: "lkt-field--dropdown",
          modelValue: B.value,
          "onUpdate:modelValue": J[23] || (J[23] = (le) => B.value = le),
          referrer: E.value,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: xe(() => [
            B.value ? (W(), se("div", oc, [
              P.value ? (W(), ne(Qe, { key: 0 })) : fe("", !0),
              P.value ? fe("", !0) : (W(), se("ul", {
                key: 1,
                class: "lkt-field--dropdown-options",
                ref_key: "optionList",
                ref: z
              }, [
                (W(!0), se(Ze, null, _t(X.value, (le, dn) => (W(), se("li", {
                  class: it({
                    "is-active": Z(es)(le, r.value, L.multiple),
                    "is-focused": dn === M.value,
                    "is-disabled": le.disabled
                  }),
                  "data-index": dn,
                  onClick: () => Yt(le)
                }, [
                  Z(n).option ? dt(L.$slots, "option", {
                    key: 0,
                    option: le,
                    data: L.slotData,
                    modal: L.optionsModal,
                    modalData: L.optionsModalData,
                    download: L.optionsDownload,
                    editable: C.value
                  }) : (W(), ne(Tt, {
                    key: 1,
                    option: le,
                    "option-slot": L.optionSlot,
                    icon: L.optionsIcon,
                    text: L.optionsText,
                    modal: L.optionsModal,
                    "modal-data": L.optionsModalData,
                    download: L.optionsDownload,
                    "label-formatter": L.optionsLabelFormatter,
                    editable: C.value
                  }, null, 8, ["option", "option-slot", "icon", "text", "modal", "modal-data", "download", "label-formatter", "editable"]))
                ], 10, ac))), 256))
              ], 512))
            ])) : fe("", !0)
          ]),
          _: 3
        }, 8, ["modelValue", "referrer"])) : fe("", !0)
      ], 10, Xd);
    };
  }
}), sc = { class: "lkt-grid-1" }, rc = /* @__PURE__ */ Le({
  __name: "LktTextLanguageEditModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    type: {},
    translations: { default: () => ({}) }
  },
  setup(e) {
    const t = ie(() => xa.value.filter((i) => i !== ao.value));
    return (i, l) => {
      const n = Se("lkt-modal");
      return W(), ne(n, {
        "modal-name": i.modalName,
        title: "__:lmm.confirmFormLeave",
        "modal-key": i.modalKey,
        "z-index": i.zIndex
      }, {
        default: xe(() => [
          ae("div", sc, [
            re(jt, {
              type: i.type,
              label: "Idioma actual (ES)",
              modelValue: i.translations.es,
              "onUpdate:modelValue": l[0] || (l[0] = (s) => i.translations.es = s),
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "modelValue"]),
            (W(!0), se(Ze, null, _t(t.value, (s) => (W(), ne(jt, {
              type: i.type,
              label: "Idioma (" + s + ")",
              modelValue: i.translations[s],
              "onUpdate:modelValue": (u) => i.translations[s] = u,
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "label", "modelValue", "onUpdate:modelValue"]))), 256))
          ])
        ]),
        _: 1
      }, 8, ["modal-name", "modal-key", "z-index"]);
    };
  }
}), bc = (e, t) => (te.customValueSlots[e] = t, !0), yc = (e, t) => (te.customEditSlots[e] = t, !0), _c = {
  install: (e) => {
    e.component("lkt-field") === void 0 && (e.component("lkt-field", jt), Sa("lkt-field-language-edit", rc));
  }
}, wc = (e) => {
  te.defaultEmptyValueSlot = e;
}, Cc = (e, t) => {
  te.optionSlots[e] = t;
}, kc = (e) => te.undoText = e, xc = (e) => te.clearText = e, Sc = (e) => te.i18nText = e, Ec = (e) => te.switchEditionOnText = e, Tc = (e) => te.switchEditionOffText = e, Lc = (e) => te.showPasswordOnText = e, zc = (e) => te.showPasswordOffText = e, Nc = (e) => te.dateReadFormat = e, Bc = (e) => te.defaultDateReadFormat = e, Ac = (e, t, i = "default") => {
  i || (i = "default"), te.validationMessages[i] || (te.validationMessages[i] = {}), te.validationMessages[i][e] = t;
}, Rc = (e) => (te.validationIconSlot = e, !0), Dc = (e = 2, t = ".", i = ".", l = !0, n = "") => n !== "" ? (te.langNumberFormat[n].amountOfDecimals = e, te.langNumberFormat[n].decimalSeparator = t, te.langNumberFormat[n].thousandsSeparator = i, te.langNumberFormat[n].removeDecimalsIfZero = l, !0) : (te.amountOfDecimals = e, te.decimalSeparator = t, te.thousandsSeparator = i, te.removeDecimalsIfZero = l, !0), Ic = (e) => {
  te.readTextMaxLength = e;
}, Mc = (e, t) => {
  te.modalPerItemType[e] = t;
};
export {
  vc as Field,
  jt as LktField,
  il as Option,
  _c as default,
  xc as setFieldClearText,
  Nc as setFieldDateReadFormat,
  Bc as setFieldDefaultDateReadFormat,
  wc as setFieldEmptySlot,
  Sc as setFieldI18nText,
  Dc as setFieldNumberFormat,
  Cc as setFieldOptionSlot,
  zc as setFieldShowPasswordOffText,
  Lc as setFieldShowPasswordOnText,
  Tc as setFieldSwitchEditionOffText,
  Ec as setFieldSwitchEditionOnText,
  kc as setFieldUndoText,
  Rc as setFieldValidationIconSlot,
  Ac as setFieldValidationMessage,
  Mc as setModalPerItemType,
  Ic as setReadTextMaxLength,
  yc as setTextEditSlot,
  bc as setTextValueSlot
};
