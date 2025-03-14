var ss = Object.defineProperty;
var rs = (e, t, i) => t in e ? ss(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[t] = i;
var q = (e, t, i) => rs(e, typeof t != "symbol" ? t + "" : t, i);
import { defineComponent as Le, computed as ee, resolveComponent as xe, createBlock as ne, openBlock as $, normalizeClass as ut, ref as Q, watch as be, withCtx as Ee, createCommentVNode as fe, resolveDynamicComponent as ii, mergeProps as li, createElementBlock as se, createElementVNode as ae, toDisplayString as Lt, Fragment as Qe, renderList as kt, createVNode as re, unref as j, normalizeStyle as Yn, withDirectives as lt, vModelCheckbox as us, onMounted as Fl, vModelText as Hl, vShow as Zt, nextTick as zl, createTextVNode as mi, useSlots as mn, renderSlot as _t, createStaticVNode as cs, createSlots as Xi, mergeDefaults as ds, isRef as ct, vModelDynamic as fs } from "vue";
import { generateRandomString as Zo, stripTags as qo, fill as hs, formatNumber as Kn, isEmail as ps } from "lkt-string-tools";
import { httpCall as on } from "lkt-http-client";
import { __ as gn, currentLanguage as jo, availableLanguages as ms } from "lkt-i18n";
import { date as Ti } from "lkt-date-tools";
import { openToast as Xn } from "lkt-toast";
import { addModal as gs } from "lkt-modal";
const Te = class Te {
};
Te.defaultEmptyValueSlot = "", Te.customValueSlots = {}, Te.customEditSlots = {}, Te.searchKeyForResource = "query", Te.optionSlots = {}, Te.defaultDateIcon = "lkt-icn-calendar-empty-outline", Te.defaultNumberFeaturedButton = "subtract", Te.undoText = "", Te.clearText = "", Te.i18nText = "", Te.switchEditionOnText = "", Te.switchEditionOffText = "", Te.showPasswordOnText = "", Te.showPasswordOffText = "", Te.dateReadFormat = "", Te.defaultDateReadFormat = "Y-m-d", Te.langDateReadFormat = {
  en: "Y-m-d",
  es: "d/m/Y"
}, Te.acceptTypes = {
  file: "*/*",
  image: "image/*"
}, Te.validationIconSlot = "", Te.validationMessages = {
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
}, Te.amountOfDecimals = void 0, Te.decimalSeparator = ".", Te.thousandsSeparator = "", Te.removeDecimalsIfZero = !0, Te.langNumberFormat = {
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
}, Te.readTextMaxLength = void 0, Te.modalPerItemType = {};
let ie = Te;
var Ii = ((e) => (e.Button = "button", e.Submit = "submit", e.Reset = "reset", e.Anchor = "anchor", e.Content = "content", e.Switch = "switch", e.HiddenSwitch = "hidden-switch", e.Split = "split", e.SplitLazy = "split-lazy", e.SplitEver = "split-ever", e.Tooltip = "tooltip", e.TooltipLazy = "tooltip-lazy", e.TooltipEver = "tooltip-ever", e.FileUpload = "file-upload", e.ImageUpload = "image-upload", e))(Ii || {}), at = (e, t) => typeof e > "u" ? t : { ...t, ...e }, F, ui = (F = class {
  static debugMode(t = !0) {
    return F.debugEnabled = t, F;
  }
  static setDefaultCreateError(t) {
    F.defaultCreateErrorText = t.text ?? F.defaultCreateErrorText, F.defaultCreateErrorDetails = t.details ?? F.defaultCreateErrorDetails, F.defaultCreateErrorIcon = t.icon ?? F.defaultCreateErrorIcon;
  }
  static setDefaultUpdateError(t) {
    F.defaultUpdateErrorText = t.text ?? F.defaultUpdateErrorText, F.defaultUpdateErrorDetails = t.details ?? F.defaultUpdateErrorDetails, F.defaultUpdateErrorIcon = t.icon ?? F.defaultUpdateErrorIcon;
  }
  static setDefaultDropError(t) {
    F.defaultDropErrorText = t.text ?? F.defaultDropErrorText, F.defaultDropErrorDetails = t.details ?? F.defaultDropErrorDetails, F.defaultDropErrorIcon = t.icon ?? F.defaultDropErrorIcon;
  }
  static setDefaultCreateSuccess(t) {
    F.defaultCreateSuccessText = t.text ?? F.defaultCreateSuccessText, F.defaultCreateSuccessDetails = t.details ?? F.defaultCreateSuccessDetails, F.defaultCreateSuccessIcon = t.icon ?? F.defaultCreateSuccessIcon;
  }
  static setDefaultUpdateSuccess(t) {
    F.defaultUpdateSuccessText = t.text ?? F.defaultUpdateSuccessText, F.defaultUpdateSuccessDetails = t.details ?? F.defaultUpdateSuccessDetails, F.defaultUpdateSuccessIcon = t.icon ?? F.defaultUpdateSuccessIcon;
  }
  static setDefaultDropSuccess(t) {
    F.defaultDropSuccessText = t.text ?? F.defaultDropSuccessText, F.defaultDropSuccessDetails = t.details ?? F.defaultDropSuccessDetails, F.defaultDropSuccessIcon = t.icon ?? F.defaultDropSuccessIcon;
  }
  static setDefaultUploadSuccess(t) {
    F.defaultUploadSuccessText = t.text ?? F.defaultUploadSuccessText, F.defaultUploadSuccessDetails = t.details ?? F.defaultUploadSuccessDetails, F.defaultUploadSuccessIcon = t.icon ?? F.defaultUploadSuccessIcon;
  }
  static setDefaultUploadError(t) {
    F.defaultUploadErrorText = t.text ?? F.defaultUploadErrorText, F.defaultUploadErrorDetails = t.details ?? F.defaultUploadErrorDetails, F.defaultUploadErrorIcon = t.icon ?? F.defaultUploadErrorIcon;
  }
  static setDefaultSaveButton(t, i = !0) {
    return i ? F.defaultSaveButton = t : F.defaultSaveButton = at(t, F.defaultSaveButton), F;
  }
  static setDefaultConfirmButton(t, i = !0) {
    return i ? F.defaultConfirmButton = t : F.defaultConfirmButton = at(t, F.defaultConfirmButton), F;
  }
  static setDefaultCancelButton(t, i = !0) {
    return i ? F.defaultCancelButton = t : F.defaultCancelButton = at(t, F.defaultCancelButton), F;
  }
  static setDefaultCreateButton(t, i = !0) {
    return i ? F.defaultCreateButton = t : F.defaultCreateButton = at(t, F.defaultCreateButton), F;
  }
  static setDefaultUpdateButton(t, i = !0) {
    return i ? F.defaultUpdateButton = t : F.defaultUpdateButton = at(t, F.defaultUpdateButton), F;
  }
  static setDefaultDropButton(t, i = !0) {
    return i ? F.defaultDropButton = t : F.defaultDropButton = at(t, F.defaultDropButton), F;
  }
  static setDefaultEditModeButton(t, i = !0) {
    return i ? F.defaultEditModeButton = t : F.defaultEditModeButton = at(t, F.defaultEditModeButton), F;
  }
  static setDefaultToggleButton(t, i = !0) {
    return i ? F.defaultToggleButton = t : F.defaultToggleButton = at(t, F.defaultToggleButton), F;
  }
  static setDefaultLoadMoreButton(t, i = !0) {
    return i ? F.defaultLoadMoreButton = t : F.defaultLoadMoreButton = at(t, F.defaultLoadMoreButton), F;
  }
  static setDefaultCloseModalIcon(t) {
    return F.defaultCloseModalIcon = t, F;
  }
  static setDefaultCloseToastIcon(t) {
    return F.defaultCloseToastIcon = t, F;
  }
  static setDefaultTableSortAscIcon(t) {
    return F.defaultTableSortAscIcon = t, F;
  }
  static setDefaultTableSortDescIcon(t) {
    return F.defaultTableSortDescIcon = t, F;
  }
  static setDefaultPaginatorFirstButton(t, i = !0) {
    return i ? F.defaultPaginatorFirstButton = t : F.defaultPaginatorFirstButton = at(t, F.defaultPaginatorFirstButton), F;
  }
  static setDefaultPaginatorPrevButton(t, i = !0) {
    return i ? F.defaultPaginatorPrevButton = t : F.defaultPaginatorPrevButton = at(t, F.defaultPaginatorPrevButton), F;
  }
  static setDefaultPaginatorNextButton(t, i = !0) {
    return i ? F.defaultPaginatorNextButton = t : F.defaultPaginatorNextButton = at(t, F.defaultPaginatorNextButton), F;
  }
  static setDefaultPaginatorLastButton(t, i = !0) {
    return i ? F.defaultPaginatorLastButton = t : F.defaultPaginatorLastButton = at(t, F.defaultPaginatorLastButton), F;
  }
}, q(F, "debugEnabled", !1), q(F, "defaultCreateErrorText", "Creation failed"), q(F, "defaultCreateErrorDetails", "An error occurred while creating the item. Please try again."), q(F, "defaultCreateErrorIcon", ""), q(F, "defaultUpdateErrorText", "Update failed"), q(F, "defaultUpdateErrorDetails", "An error occurred while updating the item. Please try again."), q(F, "defaultUpdateErrorIcon", ""), q(F, "defaultDropErrorText", "Drop failed"), q(F, "defaultDropErrorDetails", "An error occurred while removing the item. Please try again."), q(F, "defaultDropErrorIcon", ""), q(F, "defaultCreateSuccessText", "Item created"), q(F, "defaultCreateSuccessDetails", ""), q(F, "defaultCreateSuccessIcon", ""), q(F, "defaultUpdateSuccessText", "Item updated"), q(F, "defaultUpdateSuccessDetails", ""), q(F, "defaultUpdateSuccessIcon", ""), q(F, "defaultDropSuccessText", "Item removed"), q(F, "defaultDropSuccessDetails", ""), q(F, "defaultDropSuccessIcon", ""), q(F, "defaultUploadSuccessText", "Upload success"), q(F, "defaultUploadSuccessDetails", ""), q(F, "defaultUploadSuccessIcon", ""), q(F, "defaultUploadErrorText", "Upload error"), q(F, "defaultUploadErrorDetails", ""), q(F, "defaultUploadErrorIcon", ""), q(F, "defaultSaveButton", { text: "Save", icon: "lkt-icn-save" }), q(F, "defaultConfirmButton", { text: "Confirm" }), q(F, "defaultCancelButton", { text: "Cancel" }), q(F, "defaultCreateButton", { text: "Create", icon: "lkt-icn-save" }), q(F, "defaultUpdateButton", { text: "Update", icon: "lkt-icn-save" }), q(F, "defaultDropButton", { text: "Drop" }), q(F, "defaultEditModeButton", { text: "Edit mode", type: "switch" }), q(F, "defaultToggleButton", { text: "Toggle", textOn: "Close", textOff: "Show more", type: "hidden-switch" }), q(F, "defaultLoadMoreButton", { text: "Load more", type: "hidden-switch" }), q(F, "defaultCloseModalIcon", "lkt-icn-cancel"), q(F, "defaultCloseToastIcon", "lkt-icn-cancel"), q(F, "defaultTableSortAscIcon", "lkt-icn-arrow-bottom"), q(F, "defaultTableSortDescIcon", "lkt-icn-arrow-top"), q(F, "defaultPaginatorFirstButton", { text: "", icon: "lkt-icn-angle-double-left" }), q(F, "defaultPaginatorPrevButton", { text: "", icon: "lkt-icn-angle-left" }), q(F, "defaultPaginatorNextButton", { text: "", iconEnd: "lkt-icn-angle-right" }), q(F, "defaultPaginatorLastButton", { text: "", iconEnd: "lkt-icn-angle-double-right" }), F), G = ((e) => (e.Text = "text", e.Email = "email", e.Tel = "tel", e.Password = "password", e.Search = "search", e.Number = "number", e.Color = "color", e.Range = "range", e.Textarea = "textarea", e.Html = "html", e.Date = "date", e.File = "file", e.Image = "image", e.Select = "select", e.Check = "check", e.Switch = "switch", e.Calc = "calc", e.Card = "card", e.Elements = "elements", e))(G || {}), Jn = ["text", "search", "select"], vs = ["switch", "check"], bs = ["switch", "check"], qt = ["switch", "check"], ys = ["select", "color", "card"], _s = ["text", "email", "password"], Cs = ["lktDateProps", "lktStrictItem", "lktExcludedProps"], ft, Go = (ft = class {
  constructor(t) {
  }
  feed(t = {}, i = this) {
    if (typeof t == "object") for (let [l, n] of Object.entries(t)) i.assignProp(l, n);
  }
  assignProp(t, i) {
    if (!(Cs.includes(t) || ft.lktExcludedProps.includes(t))) {
      if (ft.lktDateProps.includes(t)) {
        this[t] = new Date(i);
        return;
      }
      this[t] = i;
    }
  }
}, q(ft, "lktAllowUndefinedProps", []), q(ft, "lktExcludedProps", []), q(ft, "lktDateProps", []), q(ft, "lktStrictItem", !1), q(ft, "lktDefaultValues", []), ft), ws = ((e) => (e.Auto = "auto", e.Always = "always", e.Lazy = "lazy", e.Ever = "ever", e))(ws || {}), ks = ((e) => (e.Transform = "transform", e.Height = "height", e.Display = "display", e))(ks || {}), xs = ((e) => (e.Href = "href", e.RouterLink = "router-link", e.RouterLinkBack = "router-link-back", e.Mail = "mail", e.Tel = "tel", e.Tab = "tab", e.Download = "download", e.Action = "action", e.Legacy = "", e))(xs || {}), Ss = ((e) => (e.None = "", e.Field = "field", e.Button = "button", e.Anchor = "anchor", e))(Ss || {}), Li = ((e) => (e.List = "list", e.Inline = "inline", e.Count = "count", e))(Li || {}), nn, Es = (nn = class extends Go {
  constructor(t = {}) {
    super();
    q(this, "modelValue", "");
    q(this, "type", "text");
    q(this, "valid");
    q(this, "placeholder", "");
    q(this, "searchPlaceholder", "");
    q(this, "label", "");
    q(this, "labelIcon", "");
    q(this, "labelIconAtEnd", !1);
    q(this, "name", Zo(16));
    q(this, "autocomplete", !1);
    q(this, "disabled", !1);
    q(this, "readonly", !1);
    q(this, "hidden", !1);
    q(this, "tabindex");
    q(this, "mandatory", !1);
    q(this, "showPassword", !1);
    q(this, "canClear", !1);
    q(this, "canUndo", !1);
    q(this, "canI18n", !1);
    q(this, "canStep", !0);
    q(this, "canTag", !0);
    q(this, "mandatoryMessage", "");
    q(this, "infoMessage", "");
    q(this, "errorMessage", "");
    q(this, "min");
    q(this, "max");
    q(this, "step", 1);
    q(this, "enableAutoNumberFix", !0);
    q(this, "emptyValueSlot", "");
    q(this, "optionSlot");
    q(this, "valueSlot");
    q(this, "editSlot");
    q(this, "slotData", {});
    q(this, "featuredButton", "");
    q(this, "infoButtonEllipsis", !1);
    q(this, "fileName", "");
    q(this, "customButtonText", "");
    q(this, "customButtonClass", "");
    q(this, "options", []);
    q(this, "multiple", !1);
    q(this, "multipleDisplay", "list");
    q(this, "multipleDisplayEdition", "inline");
    q(this, "searchable", !1);
    q(this, "icon", "");
    q(this, "download", "");
    q(this, "modal", "");
    q(this, "modalKey", "");
    q(this, "modalData", {});
    q(this, "validation", {});
    q(this, "configOn", {});
    q(this, "configOff", {});
    q(this, "readMode");
    q(this, "allowReadModeSwitch", !1);
    q(this, "readModeConfig");
    q(this, "prop", {});
    q(this, "optionValueType", "value");
    q(this, "optionsConfig", {});
    q(this, "fileUploadHttp", {});
    q(this, "fileUploadButton", {});
    q(this, "tooltipConfig", {});
    this.feed(t);
  }
}, q(nn, "lktDefaultValues", ["modelValue", "type", "valid", "placeholder", "searchPlaceholder", "label", "labelIcon", "labelIconAtEnd", "name", "autocomplete", "disabled", "readonly", "hidden", "readMode", "allowReadModeSwitch", "tabindex", "mandatory", "showPassword", "canClear", "canUndo", "canI18n", "canStep", "canTag", "mandatoryMessage", "infoMessage", "errorMessage", "min", "max", "step", "enableAutoNumberFix", "emptyValueSlot", "optionSlot", "valueSlot", "editSlot", "slotData", "featuredButton", "infoButtonEllipsis", "fileName", "customButtonText", "customButtonClass", "options", "multiple", "multipleDisplay", "multipleDisplayEdition", "searchable", "icon", "download", "modal", "modalKey", "modalData", "validation", "prop", "optionValueType", "optionsConfig", "fileUploadHttp", "tooltipConfig", "readModeConfig", "configOn", "configOff"]), nn), Ts = ((e) => (e.MinStringLength = "min-str", e.MinNumber = "min-num", e.MaxStringLength = "max-str", e.MaxNumber = "max-num", e.Email = "email", e.Empty = "empty", e.EqualTo = "equal-to", e.MinNumbers = "min-numbers", e.MaxNumbers = "max-numbers", e.MinChars = "min-chars", e.MaxChars = "max-chars", e.MinUpperChars = "min-upper-chars", e.MaxUpperChars = "max-upper-chars", e.MinLowerChars = "min-lower-chars", e.MaxLowerChars = "max-lower-chars", e.MinSpecialChars = "min-special-chars", e.MaxSpecialChars = "max-special-chars", e))(Ts || {}), Ve = ((e) => (e.Ok = "ok", e.Ko = "ko", e.Info = "info", e))(Ve || {}), $e = class We {
  constructor(t, i) {
    q(this, "code");
    q(this, "status", "info");
    q(this, "min", 0);
    q(this, "max", 0);
    q(this, "equalToValue");
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
    return new We("empty", t);
  }
  static createEmail(t = "ko") {
    return new We("email", t);
  }
  static createMinStr(t, i = "ko") {
    return new We("min-str", i).setMin(t);
  }
  static createMaxStr(t, i = "ko") {
    return new We("max-str", i).setMax(t);
  }
  static createMinNum(t, i = "ko") {
    return new We("min-num", i).setMin(t);
  }
  static createMaxNum(t, i = "ko") {
    return new We("max-num", i).setMax(t);
  }
  static createNumBetween(t, i, l = "ko") {
    return new We("max-num", l).setMin(t).setMax(i);
  }
  static createMinNumbers(t, i = "ko") {
    return new We("min-numbers", i).setMin(t);
  }
  static createMaxNumbers(t, i = "ko") {
    return new We("max-numbers", i).setMax(t);
  }
  static createMinUpperChars(t, i = "ko") {
    return new We("min-upper-chars", i).setMin(t);
  }
  static createMaxUpperChars(t, i = "ko") {
    return new We("max-upper-chars", i).setMax(t);
  }
  static createMinLowerChars(t, i = "ko") {
    return new We("min-lower-chars", i).setMin(t);
  }
  static createMaxLowerChars(t, i = "ko") {
    return new We("max-lower-chars", i).setMax(t);
  }
  static createMinSpecialChars(t, i = "ko") {
    return new We("min-special-chars", i).setMin(t);
  }
  static createMaxSpecialChars(t, i = "ko") {
    return new We("max-special-chars", i).setMax(t);
  }
  static createMinChars(t, i = "ko") {
    return new We("min-chars", i).setMin(t);
  }
  static createMaxChars(t, i = "ko") {
    return new We("max-chars", i).setMax(t);
  }
  static createEqualTo(t, i = "ko") {
    return new We("equal-to", i).setEqualToValue(t);
  }
}, Ls = ((e) => (e.NotDefined = "", e.Button = "button", e))(Ls || {}), Bs = ((e) => (e.Create = "create", e.Update = "update", e.Read = "read", e))(Bs || {}), zs = ((e) => (e.Inline = "inline", e.Modal = "modal", e))(zs || {}), Ns = ((e) => (e.Top = "top", e.Bottom = "bottom", e))(Ns || {}), Ds = ((e) => (e.Changed = "changed", e.Always = "always", e.Never = "never", e))(Ds || {}), As = ((e) => (e.Manual = "manual", e.Auto = "auto", e.Delay = "delay", e))(As || {}), Is = ((e) => (e.Toast = "toast", e.Inline = "inline", e))(Is || {}), Nl = class extends Go {
  constructor(t = {}) {
    super();
    q(this, "value");
    q(this, "label", "");
    q(this, "data", {});
    q(this, "disabled", !1);
    q(this, "group", "");
    q(this, "icon", "");
    q(this, "modal", "");
    q(this, "tags", []);
    this.feed(t);
  }
}, Rs = ((e) => (e.Pages = "pages", e.PrevNext = "prev-next", e.PagesPrevNext = "pages-prev-next", e.PagesPrevNextFirstLast = "pages-prev-next-first-last", e.LoadMore = "load-more", e.Infinite = "infinite", e))(Rs || {}), Ms = ((e) => (e.None = "", e.Incremental = "incremental", e.Decremental = "decremental", e))(Ms || {}), Os = ((e) => (e.NotDefined = "", e.Hidden = "hidden", e.Integer = "integer", e.Decimal = "decimal", e.Auto = "auto", e))(Os || {}), Yo = ((e) => (e.Table = "table", e.Item = "item", e.Ul = "ul", e.Ol = "ol", e.Carousel = "carousel", e))(Yo || {}), Fs = ((e) => (e[e.Auto = 0] = "Auto", e[e.PreferItem = 1] = "PreferItem", e[e.PreferCustomItem = 2] = "PreferCustomItem", e[e.PreferColumns = 3] = "PreferColumns", e))(Fs || {}), Hs = ((e) => (e.NotDefined = "", e.ActionIcon = "action-icon", e))(Hs || {}), Vs = ((e) => (e.Message = "message", e.Button = "button", e))(Vs || {}), an = ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(an || {}), Ps = ((e) => (e.Fixed = "fixed", e.Absolute = "absolute", e))(Ps || {}), vn = ((e) => (e.Top = "top", e.Bottom = "bottom", e.Center = "center", e.ReferrerCenter = "referrer-center", e))(vn || {}), bn = ((e) => (e.Left = "left", e.Right = "right", e.Center = "center", e.LeftCorner = "left-corner", e.RightCorner = "right-corner", e))(bn || {}), Ko = ((e) => (e.None = "", e.Focus = "focus", e.Blur = "blur", e.Always = "always", e))(Ko || {}), sn = ((e) => (e.Auto = "auto", e.Local = "local", e.Remote = "remote", e))(sn || {}), Us = ((e) => (e.Refresh = "refresh", e.Close = "close", e.ReOpen = "reOpen", e.Exec = "exec", e.Open = "open", e))(Us || {}), Ws = ((e) => (e.Modal = "modal", e.Confirm = "confirm", e))(Ws || {}), $s = ((e) => (e.Asc = "asc", e.Desc = "desc", e))($s || {}), Zs = ((e) => (e.Create = "create", e.Update = "update", e.Edit = "edit", e.Drop = "drop", e.Sort = "sort", e.SwitchEditMode = "switch-edit-mode", e.InlineEdit = "inline-edit", e.InlineCreate = "inline-create", e.ModalCreate = "modal-create", e.InlineCreateEver = "inline-create-ever", e))(Zs || {}), qs = ((e) => (e.Lazy = "lazy", e.Ever = "ever", e))(qs || {}), jt = (e, t) => typeof e == "string" && e.startsWith("prop:") ? t[e.substring(5)] : e, ki = (e) => {
  if (typeof e == "string" && e.startsWith("__:")) {
    let t = String(e);
    return t.startsWith("__:") ? gn(t.substring(3)) : t;
  }
  return e;
};
function js(e) {
  let t = new e(), i = {};
  if (!Array.isArray(e.lktDefaultValues)) throw new Error("lktDefaultValues must be a keys array.");
  for (let l of e.lktDefaultValues) l in t && (i[l] = t[l]);
  return i;
}
const Xo = /* @__PURE__ */ Le({
  __name: "UndoButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, l = e, n = ee(() => ie.undoText), s = ee(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), c = () => i("click");
    return (d, o) => {
      const v = xe("lkt-button");
      return $(), ne(v, {
        text: d.insideEllipsis ? n.value : "",
        title: n.value,
        class: ut([s.value, "lkt-field--btn-undo"]),
        icon: "lkt-icn-undo",
        onClick: c
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Jo = /* @__PURE__ */ Le({
  __name: "ClearButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, l = e, n = ee(() => ie.clearText), s = ee(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), c = () => i("click");
    return (d, o) => {
      const v = xe("lkt-button");
      return $(), ne(v, {
        text: d.insideEllipsis ? n.value : "",
        title: n.value,
        class: ut(s.value),
        icon: "lkt-icn-cancel",
        onClick: c
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), rn = /* @__PURE__ */ Le({
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
    be(() => l.modelValue, (v) => n.value = v), be(n, (v) => i("update:modelValue", v));
    const s = ee(() => n.value ? ie.showPasswordOnText : ie.showPasswordOffText), c = ee(() => n.value === !0 ? "lkt-icn-see" : "lkt-icn-not-see"), d = ee(() => l.isFeatured ? "lkt-field--atn-btn" : l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => i("click");
    return (v, u) => {
      const m = xe("lkt-button");
      return $(), ne(m, {
        text: v.insideEllipsis ? s.value : "",
        title: s.value,
        class: ut(d.value),
        icon: c.value,
        onClick: o,
        checked: n.value,
        "onUpdate:checked": u[0] || (u[0] = (C) => n.value = C),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Qo = /* @__PURE__ */ Le({
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
    be(() => l.modelValue, (v) => n.value = v), be(n, (v) => i("update:modelValue", v));
    const s = ee(() => n.value ? ie.switchEditionOnText : ie.switchEditionOffText), c = ee(() => n.value === !0 ? "lkt-icon-see" : "lkt-icn-edit"), d = ee(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), o = () => i("click");
    return (v, u) => {
      const m = xe("lkt-button");
      return $(), ne(m, {
        text: v.insideEllipsis ? s.value : "",
        title: s.value,
        class: ut(d.value),
        icon: c.value,
        onClick: o,
        checked: n.value,
        "onUpdate:checked": u[0] || (u[0] = (C) => n.value = C),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Gs = /* @__PURE__ */ Le({
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
    be(() => l.showPasswordCheck, (c) => n.value = c), be(n, (c) => i("update:showPasswordCheck", c));
    const s = Q(l.showEditionCheck);
    return be(() => l.showEditionCheck, (c) => s.value = c), be(s, (c) => i("update:showEditionCheck", c)), (c, d) => {
      const o = xe("lkt-button");
      return $(), ne(o, {
        split: "",
        "split-icon": "lkt-icn-ellipsis-menu-vertical",
        class: "lkt-field--info-btn"
      }, {
        split: Ee(({ doClose: v }) => [
          c.showUndo ? ($(), ne(Xo, {
            key: 0,
            onClick: d[0] || (d[0] = () => i("undo")),
            "inside-ellipsis": ""
          })) : fe("", !0),
          c.showClear ? ($(), ne(Jo, {
            key: 1,
            onClick: d[1] || (d[1] = () => i("clear")),
            "inside-ellipsis": ""
          })) : fe("", !0),
          c.showPassword ? ($(), ne(rn, {
            key: 2,
            modelValue: n.value,
            "onUpdate:modelValue": d[2] || (d[2] = (u) => n.value = u),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : fe("", !0),
          c.showEdition ? ($(), ne(Qo, {
            key: 3,
            modelValue: s.value,
            "onUpdate:modelValue": d[3] || (d[3] = (u) => s.value = u),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : fe("", !0)
        ]),
        _: 1
      });
    };
  }
}), Qn = /* @__PURE__ */ Le({
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
    const i = t, l = e, n = Q(l.modelValue);
    be(() => l.modelValue, (d) => n.value = d, { deep: !0 }), be(n, (d) => i("update:modelValue", d), { deep: !0 });
    const s = ee(() => ie.i18nText), c = ee(() => l.isFeatured ? "lkt-field--atn-btn" : l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (d, o) => {
      const v = xe("lkt-button");
      return $(), ne(v, {
        text: d.insideEllipsis ? s.value : "",
        title: s.value,
        class: ut(c.value),
        icon: "lkt-icn-lang-picker",
        modal: "lkt-field-language-edit",
        "modal-data": { translations: n.value, type: d.type }
      }, null, 8, ["text", "title", "class", "modal-data"]);
    };
  }
}), Ys = (e, t, i) => (e = Number(e), t !== !1 && e < t && (e = t), i !== !1 && e > i && (e = i), e), Dl = (e, t) => {
  if (typeof e == "string" && (e = jt(e, t), typeof e == "string" && e.startsWith("__:"))) {
    let i = e.substring(3), l = gn(i), n = [];
    for (let s in l) n.push({ value: s, label: l[s] });
    return Dl(n, t);
  }
  return Array.isArray(e) ? e.length === 0 ? e : e.map((i) => {
    if (typeof i == "object") return new Nl(i);
    if (typeof i == "string" || typeof i == "number")
      return new Nl({
        label: String(i),
        value: i
      });
  }).filter((i) => typeof i < "u") : [];
}, ql = (e, t = "", i = !0) => {
  if (t === "") return e;
  const l = String(t).toLowerCase();
  return e.filter((n) => {
    let s = String(n.label).toLowerCase();
    return s.indexOf(l) !== -1 && (i || s !== l);
  });
}, Zi = (e, t) => {
  if (t !== "")
    return e.find((i) => Array.isArray(t) ? t.includes(i.value) : i.value == t);
}, Ks = (e, t, i) => {
  const l = /* @__PURE__ */ new Set(), n = [...e, ...Dl(t, i)], s = [];
  return n.forEach((c) => {
    let d = [c.value, c.label].join("-");
    l.has(d) || (s.push(c), l.add(d));
  }), s;
}, Xs = (e, t, i) => {
  if (i) {
    if (Array.isArray(t)) {
      let l = t.findIndex((n) => n == e.value);
      return typeof l > "u" ? !1 : l > -1;
    }
    return !1;
  }
  return e.value == t;
}, eo = (e, t) => {
  let i = t.findIndex((l) => l == e.value);
  return typeof i > "u" && (i = -1), i;
}, yn = (e) => !(Object.prototype.toString.call(e) === "[object Date]" && isNaN(e)), ea = (e, t) => typeof e > "u" ? "" : (typeof e == "string" && (e = new Date(e)), yn(e) ? Ti(t, e) : ""), Js = /* @__PURE__ */ Le({
  __name: "DropdownButton",
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, l = ee(() => ie.undoText), n = ee(() => "lkt-field--info-btn"), s = () => i("click");
    return (c, d) => {
      const o = xe("lkt-button");
      return $(), ne(o, {
        text: l.value,
        title: l.value,
        class: ut([n.value, "lkt-field--btn-dropdown"]),
        icon: "lkt-icn-angle-bottom",
        onClick: s,
        tabindex: "-1"
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Qs = {
  key: 0,
  class: "lkt-field--dropdown-option--icon-container"
}, er = { class: "lkt-field--dropdown-option--label-container" }, Xt = /* @__PURE__ */ Le({
  __name: "DropdownOption",
  props: {
    option: { default: () => new Nl() },
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
    const i = t, l = e, n = ee(() => l.option.icon !== "" ? l.option.icon : typeof l.icon == "function" ? l.icon(l.option) : l.icon), s = ee(() => {
      if (typeof l.text < "u") {
        if (typeof l.text == "function")
          return l.text(l.option);
        if (l.text !== "") return l.text;
      }
      return c.value;
    }), c = ee(() => typeof l.labelFormatter == "function" ? l.labelFormatter(l.option) : l.option.label), d = ee(() => typeof l.customClass == "function" ? l.customClass(l.option) : typeof l.customClass < "u" ? l.customClass : `lkt-opt-${l.option.value}`), o = ee(() => {
      if (l.optionSlot && !(typeof ie.optionSlots[l.optionSlot] > "u"))
        return ie.optionSlots[l.optionSlot];
    }), v = ee(() => o.value ? o.value : l.isTag ? "lkt-tag" : !l.editable && (l.modal !== "" || l.option.modal !== "") ? "lkt-button" : !l.editable && l.download !== "" ? "lkt-anchor" : "div"), u = ee(() => {
      if (v.value === "lkt-button") {
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
      if (v.value === "lkt-anchor") {
        let x = l.download;
        typeof l.download == "function" ? x = () => l.download(l.option) : l.download.startsWith("prop:") && (x = l.download.substring(5), x = l.option[x]);
        let k = l.download !== "";
        return {
          href: x,
          target: k ? "_blank" : "",
          download: k
        };
      }
      return v.value === "lkt-tag" ? {
        type: "action-icon",
        icon: "lkt-icn-cancel"
      } : {};
    }), m = () => {
      i("click");
    }, C = () => {
      i("click-icon", l.option);
    };
    return (x, k) => {
      const z = xe("lkt-tag");
      return $(), ne(ii(v.value), li(u.value, {
        class: ["lkt-field--dropdown-option", d.value],
        title: s.value,
        onClick: m,
        onClickIcon: C
      }), {
        default: Ee(() => [
          n.value && v.value !== "lkt-button" ? ($(), se("div", Qs, [
            ae("i", {
              class: ut(n.value)
            }, null, 2)
          ])) : fe("", !0),
          ae("div", er, Lt(s.value), 1),
          ($(!0), se(Qe, null, kt(x.option.tags, (a) => ($(), ne(z, li({ ref_for: !0 }, a), null, 16))), 256))
        ]),
        _: 1
      }, 16, ["class", "title"]);
    };
  }
}), tr = { class: "lkt-field-color--tooltip--rgba-container" }, ir = { class: "lkt-field-color--tooltip--numeric-input-container" }, lr = { class: "like-lkt-field-label" }, qi = /* @__PURE__ */ Le({
  __name: "RgbaRange",
  props: {
    modelValue: { default: 0 },
    label: { default: "" },
    rangeClass: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = Q(l.modelValue);
    return be(() => l.modelValue, (s) => n.value = s), be(n, (s) => i("update:modelValue", s)), (s, c) => ($(), se("div", tr, [
      ae("div", ir, [
        ae("label", lr, Lt(s.label), 1),
        re(vi, {
          modelValue: n.value,
          "onUpdate:modelValue": c[0] || (c[0] = (d) => n.value = d),
          type: j(G).Number,
          min: 0,
          max: 255,
          step: 1,
          "can-step": !1
        }, null, 8, ["modelValue", "type"])
      ]),
      re(vi, {
        class: ut(["color-range", s.rangeClass]),
        modelValue: n.value,
        "onUpdate:modelValue": c[1] || (c[1] = (d) => n.value = d),
        type: j(G).Range,
        min: 0,
        max: 255,
        step: 1
      }, null, 8, ["class", "modelValue", "type"])
    ]));
  }
});
class nr {
  constructor(t) {
    this.r = 0, this.g = 0, this.b = 0, this.a = 255;
    for (let i in t)
      this.hasOwnProperty(i) && (this[i] = t[i]);
  }
}
const or = (e, t, i, l) => {
  let n = parseInt(e).toString(16).padStart(2, "0").toUpperCase(), s = parseInt(t).toString(16).padStart(2, "0").toUpperCase(), c = parseInt(i).toString(16).padStart(2, "0").toUpperCase(), d = "#" + n + s + c;
  if (l == 255) return d;
  let o = parseInt(l).toString(16).padStart(2, "0").toUpperCase();
  return d + o;
}, to = (e) => {
  let t = parseInt(+("0x" + e.substring(1, 3)), 10), i = parseInt(+("0x" + e.substring(3, 5)), 10), l = parseInt(+("0x" + e.substring(5, 7)), 10), n = 255;
  return e.length === 9 && (n = parseInt(+("0x" + e.substring(5, 7)), 10)), new nr({ r: t, g: i, b: l, a: n });
}, ar = (e) => (0.299 * e.r + 0.587 * e.g + 0.114 * e.b) / e.a > 0.5 ? "#000000" : "#ffffff", sr = { class: "lkt-grid-1" }, rr = { class: "lkt-field-color--tooltip--rgba-container" }, ur = { class: "lkt-field-color--tooltip--hex-input-container" }, ta = /* @__PURE__ */ Le({
  __name: "ColorInput",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = (z) => {
      if ([0, 1].includes(z.length))
        d.value = 0, o.value = 0, v.value = 0, u.value = 255;
      else if ([7, 9].includes(z.length)) {
        let a = to(z);
        d.value = a.r, o.value = a.g, v.value = a.b, u.value = a.a;
      }
    }, s = () => {
      m.value = or(
        d.value,
        o.value,
        v.value,
        u.value
      );
    }, c = () => {
      n(m.value);
    }, d = Q(255), o = Q(255), v = Q(255), u = Q(255), m = Q(l.modelValue);
    n(m.value), be([d, o, v, u], s), be(() => l.modelValue, (z) => m.value = z), be(m, (z) => i("update:modelValue", z));
    const C = ee(() => ar(to(m.value))), x = ee(() => m.value === "" || m.value === "#" ? {} : {
      background: m.value,
      "--lkt-btn-bg": m.value,
      color: C.value,
      "--lkt-btn-color": C.value
    }), k = ee(() => m.value === "" || m.value === "#" ? {} : {
      "--lkt-field-bg-input": m.value,
      "--lkt-field-color": C.value
    });
    return (z, a) => {
      const r = xe("lkt-button");
      return $(), ne(r, {
        class: "lkt-field--toggle-button",
        style: Yn(x.value),
        text: m.value,
        type: j(Ii).Tooltip,
        tooltip: {
          class: "lkt-field-color--tooltip",
          locationY: j(vn).Bottom,
          locationX: j(bn).LeftCorner
        }
      }, {
        tooltip: Ee(({ doClose: f }) => [
          ae("div", sr, [
            ae("div", rr, [
              ae("div", ur, [
                a[5] || (a[5] = ae("label", { class: "like-lkt-field-label" }, "HEX", -1)),
                re(vi, {
                  modelValue: m.value,
                  "onUpdate:modelValue": a[0] || (a[0] = (p) => m.value = p),
                  style: Yn(k.value),
                  onChange: c
                }, null, 8, ["modelValue", "style"])
              ])
            ]),
            re(qi, {
              modelValue: d.value,
              "onUpdate:modelValue": a[1] || (a[1] = (p) => d.value = p),
              label: "R",
              "range-class": "color-range--red"
            }, null, 8, ["modelValue"]),
            re(qi, {
              modelValue: o.value,
              "onUpdate:modelValue": a[2] || (a[2] = (p) => o.value = p),
              label: "G",
              "range-class": "color-range--green"
            }, null, 8, ["modelValue"]),
            re(qi, {
              modelValue: v.value,
              "onUpdate:modelValue": a[3] || (a[3] = (p) => v.value = p),
              label: "B",
              "range-class": "color-range--blue"
            }, null, 8, ["modelValue"]),
            re(qi, {
              modelValue: u.value,
              "onUpdate:modelValue": a[4] || (a[4] = (p) => u.value = p),
              label: "A",
              "range-class": "color-range--alpha"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["style", "text", "type", "tooltip"]);
    };
  }
}), cr = /* @__PURE__ */ Le({
  __name: "MultipleColorInput",
  props: {
    modelValue: { default: () => [] },
    editMode: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] }
  },
  setup(e) {
    const t = e, i = Q(t.modelValue), l = ee(() => typeof t.max == "boolean" || i.value.length < t.max ? ["inline-create"] : []);
    return (n, s) => {
      const c = xe("lkt-table");
      return $(), ne(c, {
        type: "item",
        modelValue: i.value,
        "onUpdate:modelValue": s[0] || (s[0] = (d) => i.value = d),
        perms: l.value,
        "edit-mode": n.editMode,
        "new-value-generator": () => "",
        "required-items-for-top-create": 999999
      }, {
        item: Ee(({ item: d, index: o, isLoading: v, canCreate: u, canRead: m, canUpdate: C, canDrop: x, doDrop: k }) => [
          re(ta, {
            modelValue: i.value[o],
            "onUpdate:modelValue": (z) => i.value[o] = z
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "perms", "edit-mode"]);
    };
  }
}), dr = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/\D+/g, "").length < n && e.push($e.createMinNumbers(n, Ve.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/\D+/g, "").length > n && e.push($e.createMaxNumbers(n, Ve.Ko));
  }
}, fr = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/[^A-Z]+/g, "").length < n && e.push($e.createMinUpperChars(n, Ve.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/[^A-Z]+/g, "").length > n && e.push($e.createMaxUpperChars(n, Ve.Ko));
  }
}, hr = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/[A-Z]+/g, "").length < n && e.push($e.createMinLowerChars(n, Ve.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/[A-Z]+/g, "").length > n && e.push($e.createMaxLowerChars(n, Ve.Ko));
  }
}, pr = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/\d+/g, "").length < n && e.push($e.createMinChars(n, Ve.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/\d+/g, "").length > n && e.push($e.createMaxChars(n, Ve.Ko));
  }
}, mr = (e, t, i, l) => {
  if (typeof i < "u") {
    let n = parseInt(i);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < n && e.push($e.createMinSpecialChars(n, Ve.Ko));
  }
  if (typeof l < "u") {
    let n = parseInt(l);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > n && e.push($e.createMaxSpecialChars(n, Ve.Ko));
  }
}, io = (e, t = "default") => {
  if (!e) return "";
  let i = ie.validationMessages[t] && ie.validationMessages[t][e] ? ie.validationMessages[t][e] : "";
  return i || (i = ""), i;
}, gr = { class: "boolean-input" }, vr = { class: "boolean-input-label" }, br = { class: "boolean-input--check-on" }, yr = {
  key: 0,
  class: "lkt-icn-ok"
}, _r = ["innerHTML"], Cr = ["name", "id", "disabled", "readonly", "value", "checked"], wr = /* @__PURE__ */ Le({
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
    const i = t, l = e, n = Q(null), s = Q(l.modelValue), c = Q(s.value ? "true" : "false"), d = Q(l.focusing), o = (u) => {
      d.value = !0, i("focus", u);
    }, v = (u) => {
      d.value = !1, i("blur", u);
    };
    return be(() => l.modelValue, (u) => s.value = u), be(s, (u) => i("update:modelValue", u)), (u, m) => ($(), se("div", gr, [
      ae("div", vr, [
        ae("div", br, [
          u.type === j(G).Check && s.value ? ($(), se("i", yr)) : fe("", !0)
        ])
      ]),
      u.label ? ($(), se("div", {
        key: 0,
        class: "lkt-field--label",
        innerHTML: u.label
      }, null, 8, _r)) : fe("", !0),
      lt(ae("input", {
        "onUpdate:modelValue": m[0] || (m[0] = (C) => s.value = C),
        type: "checkbox",
        ref_key: "input",
        ref: n,
        name: u.name,
        id: u.id,
        disabled: !u.editable || u.disabled,
        readonly: !u.editable || u.readonly,
        value: c.value,
        checked: s.value,
        onFocus: o,
        onBlur: v
      }, null, 40, Cr), [
        [us, s.value]
      ])
    ]));
  }
});
function Ne(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ji = { exports: {} }, kr = Ji.exports, lo;
function xr() {
  return lo || (lo = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : kr, function(t, i) {
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
  }(Ji)), Ji.exports;
}
var Sr = /* @__PURE__ */ xr();
const ia = /* @__PURE__ */ Ne(Sr);
var Qi = { exports: {} }, Er = Qi.exports, no;
function Tr() {
  return no || (no = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Er, function(t, i) {
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
  }(Qi)), Qi.exports;
}
var Lr = /* @__PURE__ */ Tr();
const la = /* @__PURE__ */ Ne(Lr);
var el = { exports: {} }, Br = el.exports, oo;
function zr() {
  return oo || (oo = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Br, function(t, i) {
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
  }(el)), el.exports;
}
var Nr = /* @__PURE__ */ zr();
const na = /* @__PURE__ */ Ne(Nr);
var tl = { exports: {} }, Dr = tl.exports, ao;
function Ar() {
  return ao || (ao = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Dr, function(t, i) {
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
  }(tl)), tl.exports;
}
var Ir = /* @__PURE__ */ Ar();
const oa = /* @__PURE__ */ Ne(Ir);
var il = { exports: {} }, Rr = il.exports, so;
function Mr() {
  return so || (so = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Rr, function(t, i) {
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
  }(il)), il.exports;
}
var Or = /* @__PURE__ */ Mr();
const Vl = /* @__PURE__ */ Ne(Or);
var ll = { exports: {} }, Fr = ll.exports, ro;
function Hr() {
  return ro || (ro = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Fr, function(t, i) {
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
  }(ll)), ll.exports;
}
var Vr = /* @__PURE__ */ Hr();
const aa = /* @__PURE__ */ Ne(Vr);
var nl = { exports: {} }, Pr = nl.exports, uo;
function Ur() {
  return uo || (uo = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Pr, function(t, i) {
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
  }(nl)), nl.exports;
}
var Wr = /* @__PURE__ */ Ur();
const sa = /* @__PURE__ */ Ne(Wr);
var ol = { exports: {} }, $r = ol.exports, co;
function Zr() {
  return co || (co = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : $r, function(t, i) {
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
  }(ol)), ol.exports;
}
var qr = /* @__PURE__ */ Zr();
const ra = /* @__PURE__ */ Ne(qr);
var al = { exports: {} }, jr = al.exports, fo;
function Gr() {
  return fo || (fo = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : jr, function(t, i) {
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
  }(al)), al.exports;
}
var Yr = /* @__PURE__ */ Gr();
const ua = /* @__PURE__ */ Ne(Yr);
var sl = { exports: {} }, Kr = sl.exports, ho;
function Xr() {
  return ho || (ho = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG una finestra con un documento");
        return i(l);
      };
    })(typeof window < "u" ? window : Kr, function(t, i) {
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
  }(sl)), sl.exports;
}
var Jr = /* @__PURE__ */ Xr();
const ca = /* @__PURE__ */ Ne(Jr);
var rl = { exports: {} }, Qr = rl.exports, po;
function eu() {
  return po || (po = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Qr, function(t, i) {
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
  }(rl)), rl.exports;
}
var tu = /* @__PURE__ */ eu();
const da = /* @__PURE__ */ Ne(tu);
var ul = { exports: {} }, iu = ul.exports, mo;
function lu() {
  return mo || (mo = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : iu, function(t, i) {
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
  }(ul)), ul.exports;
}
var nu = /* @__PURE__ */ lu();
const fa = /* @__PURE__ */ Ne(nu);
var cl = { exports: {} }, ou = cl.exports, go;
function au() {
  return go || (go = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : ou, function(t, i) {
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
  }(cl)), cl.exports;
}
var su = /* @__PURE__ */ au();
const ha = /* @__PURE__ */ Ne(su);
var dl = { exports: {} }, ru = dl.exports, vo;
function uu() {
  return vo || (vo = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : ru, function(t, i) {
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
  }(dl)), dl.exports;
}
var cu = /* @__PURE__ */ uu();
const pa = /* @__PURE__ */ Ne(cu);
var fl = { exports: {} }, du = fl.exports, bo;
function fu() {
  return bo || (bo = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : du, function(t, i) {
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
  }(fl)), fl.exports;
}
var hu = /* @__PURE__ */ fu();
const ma = /* @__PURE__ */ Ne(hu);
var hl = { exports: {} }, pu = hl.exports, yo;
function mu() {
  return yo || (yo = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : pu, function(t, i) {
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
  }(hl)), hl.exports;
}
var gu = /* @__PURE__ */ mu();
const ga = /* @__PURE__ */ Ne(gu);
var pl = { exports: {} }, vu = pl.exports, _o;
function bu() {
  return _o || (_o = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : vu, function(t, i) {
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
  }(pl)), pl.exports;
}
var yu = /* @__PURE__ */ bu();
const va = /* @__PURE__ */ Ne(yu);
var ml = { exports: {} }, _u = ml.exports, Co;
function Cu() {
  return Co || (Co = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : _u, function(t, i) {
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
  }(ml)), ml.exports;
}
var wu = /* @__PURE__ */ Cu();
const ba = /* @__PURE__ */ Ne(wu);
var gl = { exports: {} }, ku = gl.exports, wo;
function xu() {
  return wo || (wo = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : ku, function(t, i) {
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
  }(gl)), gl.exports;
}
var Su = /* @__PURE__ */ xu();
const ya = /* @__PURE__ */ Ne(Su);
var vl = { exports: {} }, Eu = vl.exports, ko;
function Tu() {
  return ko || (ko = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Eu, function(t, i) {
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
  }(vl)), vl.exports;
}
var Lu = /* @__PURE__ */ Tu();
const _a = /* @__PURE__ */ Ne(Lu);
var bl = { exports: {} }, Bu = bl.exports, xo;
function zu() {
  return xo || (xo = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Bu, function(t, i) {
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
  }(bl)), bl.exports;
}
var Nu = /* @__PURE__ */ zu();
const Ca = /* @__PURE__ */ Ne(Nu);
var yl = { exports: {} }, Du = yl.exports, So;
function Au() {
  return So || (So = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Du, function(t, i) {
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
  }(yl)), yl.exports;
}
var Iu = /* @__PURE__ */ Au();
const wa = /* @__PURE__ */ Ne(Iu), Ru = { ckb: ia, cs: la, da: na, de: oa, en: Vl, es: aa, fr: sa, he: ra, hu: ua, it: ca, ja: da, ko: fa, lv: ha, nl: pa, pl: ma, pt_br: ga, ro: va, ru: ba, se: ya, ua: _a, ur: Ca, zh_cn: wa }, Eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: ia,
  cs: la,
  da: na,
  de: oa,
  default: Ru,
  en: Vl,
  es: aa,
  fr: sa,
  he: ra,
  hu: ua,
  it: ca,
  ja: da,
  ko: fa,
  lv: ha,
  nl: pa,
  pl: ma,
  pt_br: ga,
  ro: va,
  ru: ba,
  se: ya,
  ua: _a,
  ur: Ca,
  zh_cn: wa
}, Symbol.toStringTag, { value: "Module" })), Mu = {
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
}, Ou = {
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
    for (let c = 0, d, o; c < n.length; c++)
      d = n[c], o = t.toolbar["align" + d.charAt(0).toUpperCase() + d.slice(1)], s += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + d + '" title="' + o + '" aria-label="' + o + '"><span class="se-list-icon">' + i["align_" + d] + "</span>" + o + "</button></li>";
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
    for (let s = 0, c = n.length; s < c; s++)
      this.util.setStyle(n[s], "textAlign", i === l ? "" : i);
    this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1);
  }
}, Fu = {
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
    let l, n, s, c, d = e.options.font, o = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (s = 0, c = d.length; s < c; s++)
      l = d[s], n = l.split(",")[0], o += '<li><button type="button" class="se-btn-list" data-value="' + l + '" data-txt="' + n + '" title="' + n + '" aria-label="' + n + '" style="font-family:' + l + ';">' + n + "</button></li>";
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
}, Hu = {
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
    for (let c = 0, d = t.fontSizeUnit, o = n.length, v; c < o; c++)
      v = n[c], s += '<li><button type="button" class="se-btn-list" data-value="' + v + d + '" title="' + v + d + '" aria-label="' + v + d + '" style="font-size:' + v + d + ';">' + v + "</button></li>";
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
}, ka = {
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
    let s = [], c = '<div class="se-list-inner">';
    for (let d = 0, o = n.length, v; d < o; d++)
      v = n[d], v && (typeof v == "string" && (s.push(v), d < o - 1) || (s.length > 0 && (c += '<div class="se-selector-color">' + t(s) + "</div>", s = []), typeof v == "object" && (c += '<div class="se-selector-color">' + t(v) + "</div>")));
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
      for (let s = 0, c = n.length; s < c; s++)
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
}, Vu = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([ka]);
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
}, Pu = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([ka]);
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
}, Uu = {
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
    for (let s = 0, c = l.length; s < c; s++)
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
}, Wu = {
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
    let c = n[0], d = n[n.length - 1], o = (s.isListCell(c) || s.isComponent(c)) && !c.previousElementSibling ? c.parentNode.previousElementSibling : c.previousElementSibling, v = (s.isListCell(d) || s.isComponent(d)) && !d.nextElementSibling ? d.parentNode.nextElementSibling : d.nextElementSibling;
    const u = l.collapsed, m = {
      sc: l.startContainer,
      so: l.startContainer === l.endContainer && s.onlyZeroWidthSpace(l.startContainer) && l.startOffset === 0 && l.endOffset === 1 ? l.endOffset : l.startOffset,
      ec: l.endContainer,
      eo: l.endOffset
    };
    let C = null, x = !0;
    for (let k = 0, z = n.length; k < z; k++)
      if (!s.isList(s.getRangeFormatElement(n[k], (function(a) {
        return this.getRangeFormatElement(a) && a !== n[k];
      }).bind(s)))) {
        x = !1;
        break;
      }
    if (x && (!o || c.tagName !== o.tagName || e !== o.tagName.toUpperCase()) && (!v || d.tagName !== v.tagName || e !== v.tagName.toUpperCase())) {
      if (i) {
        for (let p = 0, g = n.length; p < g; p++)
          for (let b = p - 1; b >= 0; b--)
            if (n[b].contains(n[p])) {
              n.splice(p, 1), p--, g--;
              break;
            }
      }
      const k = s.getRangeFormatElement(c), z = k && k.tagName === e;
      let a, r;
      const f = (function(p) {
        return !this.isComponent(p);
      }).bind(s);
      z || (r = s.createElement(e));
      for (let p = 0, g = n.length, b, h; p < g; p++)
        h = s.getRangeFormatElement(n[p], f), !(!h || !s.isList(h)) && (b ? b !== h ? (i && s.isListCell(h.parentNode) ? this.plugins.list._detachNested.call(this, a.f) : C = this.detachRangeFormatElement(a.f[0].parentNode, a.f, r, !1, !0), h = n[p].parentNode, z || (r = s.createElement(e)), b = h, a = { r: b, f: [s.getParentElement(n[p], "LI")] }) : a.f.push(s.getParentElement(n[p], "LI")) : (b = h, a = { r: b, f: [s.getParentElement(n[p], "LI")] }), p === g - 1 && (i && s.isListCell(h.parentNode) ? this.plugins.list._detachNested.call(this, a.f) : C = this.detachRangeFormatElement(a.f[0].parentNode, a.f, r, !1, !0)));
    } else {
      const k = o && o.parentNode, z = v && v.parentNode;
      o = k && !s.isWysiwygDiv(k) && k.nodeName === e ? k : o, v = z && !s.isWysiwygDiv(z) && z.nodeName === e ? z : v;
      const a = o && o.tagName === e, r = v && v.tagName === e;
      let f = a ? o : s.createElement(e), p = null, g = null, b = null;
      const h = (function(y) {
        return !this.isComponent(y) && !this.isList(y);
      }).bind(s);
      for (let y = 0, w = n.length, _, S, I, L, B, D, W, P, H; y < w; y++) {
        if (S = n[y], S.childNodes.length === 0 && !s._isIgnoreNodeChange(S)) {
          s.removeItem(S);
          continue;
        }
        if (L = n[y + 1], B = S.parentNode, D = L ? L.parentNode : null, I = s.isListCell(S), H = s.isRangeFormatElement(B) ? B : null, W = I && !s.isWysiwygDiv(B) ? B.parentNode : B, P = I && !s.isWysiwygDiv(B) ? !L || s.isListCell(W) ? B : B.nextSibling : S.nextSibling, _ = s.createElement("LI"), s.copyFormatAttributes(_, S), y === 0 && m.sc === S && (m.sc = _), y === w - 1 && m.ec === S && (m.ec = _), s.isComponent(S)) {
          const R = /^HR$/i.test(S.nodeName);
          R || (_.innerHTML = "<br>"), _.innerHTML += S.outerHTML, R && (_.innerHTML += "<br>");
        } else {
          const R = S.childNodes;
          for (; R[0]; )
            _.appendChild(R[0]);
        }
        f.appendChild(_), (!L || W !== D || s.isRangeFormatElement(P)) && (p || (p = f), (!a || !L || W !== D) && !(L && s.isList(D) && D === B) && f.parentNode !== W && W.insertBefore(f, P)), s.removeItem(S), a && g === null && (g = f.children.length - 1), L && (s.getRangeFormatElement(D, h) !== s.getRangeFormatElement(B, h) || s.isList(D) && s.isList(B) && s.getElementDepth(D) !== s.getElementDepth(B)) && (f = s.createElement(e)), H && H.children.length === 0 && s.removeItem(H);
      }
      g && (p = p.children[g]), r && (b = f.children.length - 1, f.innerHTML += v.innerHTML, f.children[b], s.removeItem(v));
    }
    return this.effectNode = null, u && C || m;
  },
  _detachNested: function(e) {
    const t = e[0], i = e[e.length - 1], l = i.nextElementSibling, n = t.parentNode, s = n.parentNode.nextElementSibling, c = n.parentNode.parentNode;
    for (let o = 0, v = e.length; o < v; o++)
      c.insertBefore(e[o], s);
    if (l && n.children.length > 0) {
      const o = n.cloneNode(!1), v = n.childNodes, u = this.util.getPositionIndex(l);
      for (; v[u]; )
        o.appendChild(v[u]);
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
    let l = t[0].parentNode, n = t[i - 1], s = null;
    if (e) {
      if (l !== n.parentNode && this.util.isList(n.parentNode.parentNode) && n.nextElementSibling)
        for (n = n.nextElementSibling; n; )
          t.push(n), n = n.nextElementSibling;
      s = this.plugins.list.editList.call(this, l.nodeName.toUpperCase(), t, !0);
    } else {
      let c = this.util.createElement(l.nodeName), d = t[0].previousElementSibling, o = n.nextElementSibling;
      const v = { s: null, e: null, sl: l, el: l };
      for (let C = 0, x = i, k; C < x; C++)
        k = t[C], k.parentNode !== l && (this.plugins.list._insiedList.call(this, l, c, d, o, v), l = k.parentNode, c = this.util.createElement(l.nodeName)), d = k.previousElementSibling, o = k.nextElementSibling, c.appendChild(k);
      this.plugins.list._insiedList.call(this, l, c, d, o, v);
      const u = this.util.getNodeFromPath(v.s, v.sl), m = this.util.getNodeFromPath(v.e, v.el);
      s = {
        sc: u,
        so: 0,
        ec: m,
        eo: m.textContent.length
      };
    }
    return s;
  },
  _insiedList: function(e, t, i, l, n) {
    let s = !1;
    if (i && t.tagName === i.tagName) {
      const c = t.children;
      for (; c[0]; )
        i.appendChild(c[0]);
      t = i, s = !0;
    }
    if (l && t.tagName === l.tagName) {
      const c = l.children;
      for (; c[0]; )
        t.appendChild(c[0]);
      const d = l.nextElementSibling;
      l.parentNode.removeChild(l), l = d;
    }
    if (!s) {
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
}, $u = {
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
    let c = this.setController_table(e);
    l.tableController = c, l.resizeButton = c.querySelector("._se_table_resize"), l.resizeText = c.querySelector("._se_table_resize > span > span"), l.columnFixedButton = c.querySelector("._se_table_fixed_column"), l.headerButton = c.querySelector("._se_table_header");
    let d = this.setController_tableEditor(e, l.cellControllerTop);
    l.resizeDiv = d, l.splitMenu = d.querySelector(".se-btn-group-sub"), l.mergeButton = d.querySelector("._se_table_merge_button"), l.splitButton = d.querySelector("._se_table_split_button"), l.insertRowAboveButton = d.querySelector("._se_table_insert_row_a"), l.insertRowBelowButton = d.querySelector("._se_table_insert_row_b"), s.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, l)), s.addEventListener("click", this.appendTable.bind(e)), d.addEventListener("click", this.onClick_tableController.bind(e)), c.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, n), i.element.relative.appendChild(d), i.element.relative.appendChild(c), n = null, s = null, d = null, c = null, l = null;
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
      const n = i._trElements = l.rows, s = e.cellIndex;
      let c = 0;
      for (let u = 0, m = n[0].cells, C = n[0].cells.length; u < C; u++)
        c += m[u].colSpan;
      const d = i._rowIndex = i._trElement.rowIndex;
      i._rowCnt = n.length, i._physical_cellCnt = i._trElement.cells.length, i._logical_cellCnt = c, i._physical_cellIndex = s, i._current_colSpan = i._tdElement.colSpan - 1, i._current_rowSpan - i._trElement.cells[s].rowSpan - 1;
      let o = [], v = [];
      for (let u = 0, m, C; u <= d; u++) {
        m = n[u].cells, C = 0;
        for (let x = 0, k = m.length, z, a, r, f; x < k; x++) {
          if (z = m[x], a = z.colSpan - 1, r = z.rowSpan - 1, f = x + C, v.length > 0)
            for (let p = 0, g; p < v.length; p++)
              g = v[p], !(g.row > u) && (f >= g.index ? (C += g.cs, f += g.cs, g.rs -= 1, g.row = u + 1, g.rs < 1 && (v.splice(p, 1), p--)) : x === k - 1 && (g.rs -= 1, g.row = u + 1, g.rs < 1 && (v.splice(p, 1), p--)));
          if (u === d && x === s) {
            i._logical_cellIndex = f;
            break;
          }
          r > 0 && o.push({
            index: f,
            cs: a + 1,
            rs: r,
            row: -1
          }), C += a;
        }
        v = v.concat(o).sort(function(x, k) {
          return x.index - k.index;
        }), o = [];
      }
      o = null, v = null;
    }
  },
  editTable: function(e, t) {
    const i = this.plugins.table, l = this.context.table, n = l._element, s = e === "row";
    if (s) {
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
      if (s)
        if (t)
          i.setCellInfo.call(this, t === "up" ? d[0] : d[d.length - 1], !0), i.editRow.call(this, t, c);
        else {
          let o = d[0].parentNode;
          const v = [d[0]];
          for (let u = 1, m = d.length, C; u < m; u++)
            C = d[u], o !== C.parentNode && (v.push(C), o = C.parentNode);
          for (let u = 0, m = v.length; u < m; u++)
            i.setCellInfo.call(this, v[u], !0), i.editRow.call(this, t);
        }
      else {
        const o = d[0].parentNode;
        if (t) {
          let v = null;
          for (let u = 0, m = d.length - 1; u < m; u++)
            if (o !== d[u + 1].parentNode) {
              v = d[u];
              break;
            }
          i.setCellInfo.call(this, t === "left" ? d[0] : v || d[0], !0), i.editCell.call(this, t, c);
        } else {
          const v = [d[0]];
          for (let u = 1, m = d.length, C; u < m && (C = d[u], o === C.parentNode); u++)
            v.push(C);
          for (let u = 0, m = v.length; u < m; u++)
            i.setCellInfo.call(this, v[u], !0), i.editCell.call(this, t);
        }
      }
      t || i.init.call(this);
    } else
      i[s ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const c = n.children;
      for (let d = 0; d < c.length; d++)
        c[d].children.length === 0 && (this.util.removeItem(c[d]), d--);
      n.children.length === 0 && this.util.removeItem(n);
    }
  },
  editRow: function(e, t) {
    const i = this.context.table, l = !e, n = e === "up", s = i._rowIndex, c = l || n ? s : s + i._current_rowSpan + 1, d = l ? -1 : 1, o = i._trElements;
    let v = i._logical_cellCnt;
    for (let u = 0, m = s + (l ? -1 : 0), C; u <= m; u++) {
      if (C = o[u].cells, C.length === 0) return;
      for (let x = 0, k = C.length, z, a; x < k; x++)
        z = C[x].rowSpan, a = C[x].colSpan, !(z < 2 && a < 2) && z + u > c && c > u && (C[x].rowSpan = z + d, v -= a);
    }
    if (l) {
      const u = o[s + 1];
      if (u) {
        const m = [];
        let C = o[s].cells, x = 0;
        for (let k = 0, z = C.length, a, r; k < z; k++)
          a = C[k], r = k + x, x += a.colSpan - 1, a.rowSpan > 1 && (a.rowSpan -= 1, m.push({ cell: a.cloneNode(!1), index: r }));
        if (m.length > 0) {
          let k = m.shift();
          C = u.cells, x = 0;
          for (let z = 0, a = C.length, r, f; z < a && (r = C[z], f = z + x, x += r.colSpan - 1, !(f >= k.index && (z--, x--, x += k.cell.colSpan - 1, u.insertBefore(k.cell, r), k = m.shift(), !k))); z++)
            ;
          if (k) {
            u.appendChild(k.cell);
            for (let z = 0, a = m.length; z < a; z++)
              u.appendChild(m[z].cell);
          }
        }
      }
      i._element.deleteRow(c);
    } else {
      const u = i._element.insertRow(c);
      u.innerHTML = this.plugins.table.createCells.call(this, "td", v, !1);
    }
    l ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  editCell: function(e, t) {
    const i = this.context.table, l = this.util, n = !e, s = e === "left", c = i._current_colSpan, d = n || s ? i._logical_cellIndex : i._logical_cellIndex + c + 1, o = i._trElements;
    let v = [], u = [], m = 0;
    const C = [], x = [];
    for (let k = 0, z = i._rowCnt, a, r, f, p, g, b; k < z; k++) {
      a = o[k], r = d, g = !1, f = a.cells, b = 0;
      for (let h = 0, y, w = f.length, _, S, I; h < w && (y = f[h], !!y); h++)
        if (_ = y.rowSpan - 1, S = y.colSpan - 1, n) {
          if (I = h + b, u.length > 0) {
            const L = !f[h + 1];
            for (let B = 0, D; B < u.length; B++)
              D = u[B], !(D.row > k) && (I >= D.index ? (b += D.cs, I = h + b, D.rs -= 1, D.row = k + 1, D.rs < 1 && (u.splice(B, 1), B--)) : L && (D.rs -= 1, D.row = k + 1, D.rs < 1 && (u.splice(B, 1), B--)));
          }
          _ > 0 && v.push({
            rs: _,
            cs: S + 1,
            index: I,
            row: -1
          }), I >= r && I + S <= r + c ? C.push(y) : I <= r + c && I + S >= r ? y.colSpan -= l.getOverlapRangeAtIndex(d, d + c, I, I + S) : _ > 0 && (I < r || I + S > r + c) && x.push({
            cell: y,
            i: k,
            rs: k + _
          }), b += S;
        } else {
          if (h >= r) break;
          if (S > 0) {
            if (m < 1 && S + h >= r) {
              y.colSpan += 1, r = null, m = _ + 1;
              break;
            }
            r -= S;
          }
          if (!g) {
            for (let L = 0, B; L < u.length; L++)
              B = u[L], r -= B.cs, B.rs -= 1, B.rs < 1 && (u.splice(L, 1), L--);
            g = !0;
          }
        }
      if (u = u.concat(v).sort(function(h, y) {
        return h.index - y.index;
      }), v = [], !n) {
        if (m > 0) {
          m -= 1;
          continue;
        }
        r !== null && f.length > 0 && (p = this.plugins.table.createCells.call(this, f[0].nodeName, 0, !0), p = a.insertBefore(p, f[r]));
      }
    }
    if (n) {
      let k, z;
      for (let a = 0, r = C.length, f; a < r; a++)
        f = C[a].parentNode, l.removeItem(C[a]), f.cells.length === 0 && (k || (k = l.getArrayIndex(o, f)), z = l.getArrayIndex(o, f), l.removeItem(f));
      for (let a = 0, r = x.length, f; a < r; a++)
        f = x[a], f.cell.rowSpan = l.getOverlapRangeAtIndex(k, z, f.i, f.rs);
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
    const t = this.util, i = e === "vertical", l = this.context.table, n = l._tdElement, s = l._trElements, c = l._trElement, d = l._logical_cellIndex, o = l._rowIndex, v = this.plugins.table.createCells.call(this, n.nodeName, 0, !0);
    if (i) {
      const u = n.colSpan;
      if (v.rowSpan = n.rowSpan, u > 1)
        v.colSpan = this._w.Math.floor(u / 2), n.colSpan = u - v.colSpan, c.insertBefore(v, n.nextElementSibling);
      else {
        let m = [], C = [];
        for (let x = 0, k = l._rowCnt, z, a; x < k; x++) {
          z = s[x].cells, a = 0;
          for (let r = 0, f = z.length, p, g, b, h; r < f; r++) {
            if (p = z[r], g = p.colSpan - 1, b = p.rowSpan - 1, h = r + a, C.length > 0)
              for (let y = 0, w; y < C.length; y++)
                w = C[y], !(w.row > x) && (h >= w.index ? (a += w.cs, h += w.cs, w.rs -= 1, w.row = x + 1, w.rs < 1 && (C.splice(y, 1), y--)) : r === f - 1 && (w.rs -= 1, w.row = x + 1, w.rs < 1 && (C.splice(y, 1), y--)));
            if (h <= d && b > 0 && m.push({
              index: h,
              cs: g + 1,
              rs: b,
              row: -1
            }), p !== n && h <= d && h + g >= d + u - 1) {
              p.colSpan += 1;
              break;
            }
            if (h > d) break;
            a += g;
          }
          C = C.concat(m).sort(function(r, f) {
            return r.index - f.index;
          }), m = [];
        }
        c.insertBefore(v, n.nextElementSibling);
      }
    } else {
      const u = n.rowSpan;
      if (v.colSpan = n.colSpan, u > 1) {
        v.rowSpan = this._w.Math.floor(u / 2);
        const m = u - v.rowSpan, C = [], x = t.getArrayIndex(s, c) + m;
        for (let r = 0, f, p; r < x; r++) {
          f = s[r].cells, p = 0;
          for (let g = 0, b = f.length, h, y, w; g < b && (w = g + p, !(w >= d)); g++)
            h = f[g], y = h.rowSpan - 1, y > 0 && y + r >= x && w < d && C.push({
              index: w,
              cs: h.colSpan
            }), p += h.colSpan - 1;
        }
        const k = s[x], z = k.cells;
        let a = C.shift();
        for (let r = 0, f = z.length, p = 0, g, b, h, y; r < f; r++) {
          if (h = r + p, g = z[r], b = g.colSpan - 1, y = h + b + 1, a && y >= a.index && (p += a.cs, y += a.cs, a = C.shift()), y >= d || r === f - 1) {
            k.insertBefore(v, g.nextElementSibling);
            break;
          }
          p += b;
        }
        n.rowSpan = m;
      } else {
        v.rowSpan = n.rowSpan;
        const m = t.createElement("TR");
        m.appendChild(v);
        for (let k = 0, z; k < o; k++) {
          if (z = s[k].cells, z.length === 0) return;
          for (let a = 0, r = z.length; a < r; a++)
            k + z[a].rowSpan - 1 >= o && (z[a].rowSpan += 1);
        }
        const C = l._physical_cellIndex, x = c.cells;
        for (let k = 0, z = x.length; k < z; k++)
          k !== C && (x[k].rowSpan += 1);
        c.parentNode.insertBefore(m, c.nextElementSibling);
      }
    }
    this.focusEdge(n), this.plugins.table.setPositionControllerDiv.call(this, n, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, i = this.util, l = e._ref, n = e._selectedCells, s = n[0];
    let c = null, d = null, o = l.ce - l.cs + 1, v = l.re - l.rs + 1, u = "", m = null;
    for (let C = 1, x = n.length, k, z; C < x; C++) {
      k = n[C], m !== k.parentNode && (m = k.parentNode), z = k.children;
      for (let a = 0, r = z.length; a < r; a++)
        i.isFormatElement(z[a]) && i.onlyZeroWidthSpace(z[a].textContent) && i.removeItem(z[a]);
      u += k.innerHTML, i.removeItem(k), m.cells.length === 0 && (c ? d = m : c = m, v -= 1);
    }
    if (c) {
      const C = t._trElements, x = i.getArrayIndex(C, c), k = i.getArrayIndex(C, d || c), z = [];
      for (let a = 0, r; a <= k; a++) {
        if (r = C[a].cells, r.length === 0) {
          z.push(C[a]);
          continue;
        }
        for (let f = 0, p = r.length, g, b; f < p; f++)
          g = r[f], b = g.rowSpan - 1, b > 0 && a + b >= x && (g.rowSpan -= i.getOverlapRangeAtIndex(x, k, a, a + b));
      }
      for (let a = 0, r = z.length; a < r; a++)
        i.removeItem(z[a]);
    }
    s.innerHTML += u, s.colSpan = o, s.rowSpan = v, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, s), i.addClass(s, "se-table-selected-cell"), this.focusEdge(s);
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
    let l, n, s, c;
    e.indexOf("width") > -1 && (l = t.resizeButton.firstElementChild, n = t.resizeText, t._maxWidth ? (s = t.icons.reduction, c = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(i, "se-table-size-auto"), this.util.addClass(i, "se-table-size-100")) : (s = t.icons.expansion, c = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(i, "se-table-size-100"), this.util.addClass(i, "se-table-size-auto")), this.util.changeElement(l, s), this.util.changeTxt(n, c)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(i, "se-table-layout-auto"), this.util.addClass(i, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(i, "se-table-layout-fixed"), this.util.addClass(i, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")));
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
    for (let u = 0, m = s.length; u < m; u++)
      n.removeClass(s[u], "se-table-selected-cell");
    if (e === t && (n.addClass(e, "se-table-selected-cell"), !i._shift))
      return;
    let c = !0, d = [], o = [];
    const v = i._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let u = 0, m = l.length, C, x; u < m; u++) {
      C = l[u].cells, x = 0;
      for (let k = 0, z = C.length, a, r, f, p; k < z; k++) {
        if (a = C[k], f = a.colSpan - 1, p = a.rowSpan - 1, r = k + x, d.length > 0)
          for (let g = 0, b; g < d.length; g++)
            b = d[g], !(b.row > u) && (r >= b.index ? (x += b.cs, r += b.cs, b.rs -= 1, b.row = u + 1, b.rs < 1 && (d.splice(g, 1), g--)) : k === z - 1 && (b.rs -= 1, b.row = u + 1, b.rs < 1 && (d.splice(g, 1), g--)));
        if (c) {
          if ((a === e || a === t) && (v.cs = v.cs !== null && v.cs < r ? v.cs : r, v.ce = v.ce !== null && v.ce > r + f ? v.ce : r + f, v.rs = v.rs !== null && v.rs < u ? v.rs : u, v.re = v.re !== null && v.re > u + p ? v.re : u + p, v._i += 1), v._i === 2) {
            c = !1, d = [], o = [], u = -1;
            break;
          }
        } else if (n.getOverlapRangeAtIndex(v.cs, v.ce, r, r + f) && n.getOverlapRangeAtIndex(v.rs, v.re, u, u + p)) {
          const g = v.cs < r ? v.cs : r, b = v.ce > r + f ? v.ce : r + f, h = v.rs < u ? v.rs : u, y = v.re > u + p ? v.re : u + p;
          if (v.cs !== g || v.ce !== b || v.rs !== h || v.re !== y) {
            v.cs = g, v.ce = b, v.rs = h, v.re = y, u = -1, d = [], o = [];
            break;
          }
          n.addClass(a, "se-table-selected-cell");
        }
        p > 0 && o.push({
          index: r,
          cs: f + 1,
          rs: p,
          row: -1
        }), x += a.colSpan - 1;
      }
      d = d.concat(o).sort(function(k, z) {
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
    const c = this.context.table;
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
        c._maxWidth = !c._maxWidth, s.setTableStyle.call(this, "width"), s.setPositionControllerTop.call(this, c._element), s.setPositionControllerDiv.call(this, c._tdElement, s._shift);
        break;
      case "layout":
        c._fixedColumn = !c._fixedColumn, s.setTableStyle.call(this, "column"), s.setPositionControllerTop.call(this, c._element), s.setPositionControllerDiv.call(this, c._tdElement, s._shift);
        break;
      case "remove":
        const d = c._element.parentNode;
        this.util.removeItem(c._element), this.controllersOff(), d !== this.context.element.wysiwyg && this.util.removeItemAllParents(d, function(o) {
          return o.childNodes.length === 0;
        }, null), this.focus();
    }
    this.history.push(!1);
  }
}, Zu = {
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
    let c = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let d = 0, o = s.length, v, u, m, C, x, k, z; d < o; d++)
      v = s[d], typeof v == "string" && n.indexOf(v) > -1 ? (u = v.toLowerCase(), m = u === "blockquote" ? "range" : u === "pre" ? "free" : "replace", x = /^h/.test(u) ? u.match(/\d+/)[0] : "", C = i["tag_" + (x ? "h" : u)] + x, z = "", k = "") : (u = v.tag.toLowerCase(), m = v.command, C = v.name || u, z = v.class, k = z ? ' class="' + z + '"' : ""), c += '<li><button type="button" class="se-btn-list" data-command="' + m + '" data-value="' + u + '" data-class="' + z + '" title="' + C + '" aria-label="' + C + '"><' + u + k + ">" + C + "</" + u + "></button></li>";
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
      const n = this.context.formatBlock._formatList, s = e.nodeName.toLowerCase(), c = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let d = 0, o = n.length, v; d < o; d++)
        if (v = n[d], s === v.getAttribute("data-value") && c === v.getAttribute("data-class")) {
          t = v.title;
          break;
        }
      return this.util.changeTxt(i, t), i.setAttribute("data-value", s), i.setAttribute("data-class", c), !0;
    }
    return !1;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.context.formatBlock, t = e._formatList, i = e.targetText, l = (i.getAttribute("data-value") || "") + (i.getAttribute("data-class") || "");
    if (l !== e.currentFormat) {
      for (let n = 0, s = t.length, c; n < s; n++)
        c = t[n], l === c.getAttribute("data-value") + c.getAttribute("data-class") ? this.util.addClass(c, "active") : this.util.removeClass(c, "active");
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
        const c = n.cloneNode(!1);
        this.applyRangeFormatElement(c);
      } else {
        let c = this.getRange(), d = this.getSelectedElementsAndComponents(!1);
        if (d.length === 0 && (c = this.getRange_addLine(c, null), d = this.getSelectedElementsAndComponents(!1), d.length === 0))
          return;
        const o = c.startOffset, v = c.endOffset, u = this.util;
        let m = d[0], C = d[d.length - 1];
        const x = u.getNodePath(c.startContainer, m, null, null), k = u.getNodePath(c.endContainer, C, null, null), z = this.detachList(d, !1);
        z.sc && (m = z.sc), z.ec && (C = z.ec), this.setRange(u.getNodeFromPath(x, m), o, u.getNodeFromPath(k, C), v);
        const a = this.getSelectedElementsAndComponents(!1);
        if (i === "free") {
          const r = a.length - 1;
          let f = a[r].parentNode, p = n.cloneNode(!1);
          const g = p;
          for (let b = r, h, y, w, _, S, I, L = !0; b >= 0; b--)
            if (h = a[b], h !== (a[b + 1] ? a[b + 1].parentNode : null)) {
              if (I = u.isComponent(h), y = I ? "" : h.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), w = u.getParentElement(h, function(B) {
                return B.parentNode === f;
              }), (f !== h.parentNode || I) && (u.isFormatElement(f) ? (f.parentNode.insertBefore(p, f.nextSibling), f = f.parentNode) : (f.insertBefore(p, w ? w.nextSibling : null), f = h.parentNode), _ = p.nextSibling, _ && p.nodeName === _.nodeName && u.isSameAttributes(p, _) && (p.innerHTML += "<BR>" + _.innerHTML, u.removeItem(_)), p = n.cloneNode(!1), L = !0), S = p.innerHTML, p.innerHTML = (L || !y || !S || /<br>$/i.test(y) ? y : y + "<BR>") + S, b === 0) {
                f.insertBefore(p, h), _ = h.nextSibling, _ && p.nodeName === _.nodeName && u.isSameAttributes(p, _) && (p.innerHTML += "<BR>" + _.innerHTML, u.removeItem(_));
                const B = p.previousSibling;
                B && p.nodeName === B.nodeName && u.isSameAttributes(p, B) && (B.innerHTML += "<BR>" + p.innerHTML, u.removeItem(p));
              }
              I || u.removeItem(h), y && (L = !1);
            }
          this.setRange(g, 0, g, 0);
        } else {
          for (let r = 0, f = a.length, p, g; r < f; r++)
            p = a[r], (p.nodeName.toLowerCase() !== l.toLowerCase() || (p.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== s) && !u.isComponent(p) && (g = n.cloneNode(!1), u.copyFormatAttributes(g, p), g.innerHTML = p.innerHTML, p.parentNode.replaceChild(g, p)), r === 0 && (m = g || p), r === f - 1 && (C = g || p), g = null;
          this.setRange(u.getNodeFromPath(x, m), o, u.getNodeFromPath(k, C), v);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, qu = {
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
    for (let c = 0, d = n.length, o; c < d; c++)
      o = n[c], s += '<li><button type="button" class="se-btn-list" data-value="' + o.value + '" title="' + o.text + '" aria-label="' + o.text + '">' + o.text + "</button></li>";
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
}, ju = {
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
    for (let n = 0, s = t.length, c; n < s; n++)
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
}, Gu = {
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
    let c = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let d = 0, o = s.length, v, u, m, C; d < o; d++) {
      if (v = s[d], typeof v == "string") {
        const x = n[v.toLowerCase()];
        if (!x) continue;
        v = x;
      }
      u = v.name, m = v.class ? ' class="' + v.class + '"' : "", C = v._class, c += '<li><button type="button" class="se-btn-list' + (C ? " " + C : "") + '" data-value="' + v.class + '" title="' + u + '" aria-label="' + u + '"><div' + m + ">" + u + "</div></button></li>";
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
    for (let s = 0, c = l.length; s < c; s++)
      n(l[s], i);
    this.submenuOff(), this.history.push(!1);
  }
}, Yu = {
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
    for (let c = 0, d = n.length, o, v, u, m, C, x, k; c < d; c++) {
      if (o = n[c], m = "", x = "", C = [], typeof o == "string") {
        const z = l[o.toLowerCase()];
        if (!z) continue;
        o = z;
      }
      u = o.name, v = o.tag || "span", k = o._class, o.style && (m += ' style="' + o.style + '"', x += o.style.replace(/:[^;]+(;|$)\s*/g, ","), C.push("style")), o.class && (m += ' class="' + o.class + '"', x += "." + o.class.trim().replace(/\s+/g, ",."), C.push("class")), x = x.replace(/,$/, ""), s += '<li><button type="button" class="se-btn-list' + (k ? " " + k : "") + '" data-command="' + v + '" data-value="' + x + '" title="' + u + '" aria-label="' + u + '"><' + v + m + ">" + u + "</" + v + "></button></li>";
    }
    return s += "</ul></div>", i.innerHTML = s, i;
  },
  /**
  * @Override submenu
  */
  on: function() {
    const e = this.util, i = this.context.textStyle._styleList, l = this.getSelectionNode();
    for (let n = 0, s = i.length, c, d, o; n < s; n++) {
      c = i[n], d = c.getAttribute("data-value").split(",");
      for (let v = 0, u, m; v < d.length; v++) {
        for (u = l, o = !1; u && !e.isFormatElement(u) && !e.isComponent(u); ) {
          if (u.nodeName.toLowerCase() === c.getAttribute("data-command").toLowerCase() && (m = d[v], /^\./.test(m) ? e.hasClass(u, m.replace(/^\./, "")) : u.style[m])) {
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
    const s = l.classList;
    for (let o = 0, v = s.length; o < v; o++)
      n.push("." + s[o]);
    const c = this.util.hasClass(t, "active") ? null : l.cloneNode(!1), d = c ? null : [l.nodeName];
    this.nodeChange(c, n, d, !0), this.submenuOff();
  }
};
var _l = { exports: {} }, Ku = _l.exports, To;
function Xu() {
  return To || (To = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : Ku, function(t, i) {
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
          let c = n.util.createElement("DIV");
          c.className = "se-dialog sun-editor-common";
          let d = n.util.createElement("DIV");
          d.className = "se-dialog-back", d.style.display = "none";
          let o = n.util.createElement("DIV");
          o.className = "se-dialog-inner", o.style.display = "none", c.appendChild(d), c.appendChild(o), s.dialog.modalArea = c, s.dialog.back = d, s.dialog.modal = o, s.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(n)), s.dialog.modal.addEventListener("click", this._onClick_dialog.bind(n)), s.element.relative.appendChild(c), c = null, d = null, o = null;
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
          this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null), this.plugins.dialog._bindClose = (function(d) {
            /27/.test(d.keyCode) && this.plugins.dialog.close.call(this);
          }).bind(this), this._d.addEventListener("keydown", this.plugins.dialog._bindClose), this.context.dialog.updateModal = s, this.options.popupDisplay === "full" ? this.context.dialog.modalArea.style.position = "fixed" : this.context.dialog.modalArea.style.position = "absolute", this.context.dialog.kind = n, this.modalForm = this.context[n].modal;
          const c = this.context[n].focusElement;
          typeof this.plugins[n].on == "function" && this.plugins[n].on.call(this, s), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", c && c.focus();
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
  }(_l)), _l.exports;
}
var Ju = /* @__PURE__ */ Xu();
const Ri = /* @__PURE__ */ Ne(Ju), Qu = {
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
}, xa = {
  name: "anchor",
  add: function(e) {
    e.addModule([Qu]), e.context.anchor = {
      caller: {},
      forms: this.setDialogForm(e),
      host: (e._w.location.origin + e._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  /** dialog */
  setDialogForm: function(e) {
    const t = e.lang, i = e.options.linkRel, l = (e.options.linkRelDefault.default || "").split(" "), n = e.icons, s = e.util.createElement("DIV");
    let c = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (e.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + t.dialogBox.linkBox.bookmark + '" aria-label="' + t.dialogBox.linkBox.bookmark + '">' + n.bookmark + "</button>" + e.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + n.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + n.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + t.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (i.length > 0) {
      c += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let d = 0, o = i.length, v; d < o; d++)
        v = i[d], c += '<li><button type="button" class="se-btn-list' + (l.indexOf(v) > -1 ? " se-checked" : "") + '" data-command="' + v + '" title="' + v + '" aria-label="' + v + '"><span class="se-svg">' + n.checked + "</span>" + v + "</button></li>";
      c += "</ul></div></div></div>";
    }
    return c += "</div></div>", s.innerHTML = c, s;
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
      this.util.addClass(i, "active"), l.style.visibility = "hidden", l.style.display = "block", this.options.rtl ? l.style.left = i.offsetLeft - l.offsetWidth - 1 + "px" : l.style.left = i.offsetLeft + i.offsetWidth + 1 + "px", l.style.top = i.offsetTop + i.offsetHeight / 2 - l.offsetHeight / 2 + "px", l.style.visibility = "", this.plugins.anchor._closeRelMenu = (function(n, s, c) {
        c && (n.relButton.contains(c.target) || n.relList.contains(c.target)) || (this.util.removeClass(s, "active"), n.relList.style.display = "none", this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu), this.plugins.anchor._closeRelMenu = null);
      }).bind(this, e, i), this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(e, t) {
    this.plugins.anchor.toggleRelList.call(this, e, !this.util.hasClass(t.target, "active"));
  },
  onClick_relList: function(e, t) {
    const i = t.target, l = i.getAttribute("data-command");
    if (!l) return;
    const n = e.currentRel, s = this.util.toggleClass(i, "se-checked"), c = n.indexOf(l);
    s ? c === -1 && n.push(l) : c > -1 && n.splice(c, 1), e.relPreview.title = e.relPreview.textContent = n.join(" ");
  },
  setRel: function(e, t) {
    const i = e.relList, l = e.currentRel = t ? t.split(" ") : [];
    if (!i) return;
    const n = i.querySelectorAll("button");
    for (let s = 0, c = n.length, d; s < c; s++)
      d = n[s].getAttribute("data-command"), l.indexOf(d) > -1 ? this.util.addClass(n[s], "se-checked") : this.util.removeClass(n[s], "se-checked");
    e.relPreview.title = e.relPreview.textContent = l.join(" ");
  },
  createHeaderList: function(e, t, i) {
    const l = this.util.getListChildren(this.context.element.wysiwyg, function(d) {
      return /h[1-6]/i.test(d.nodeName);
    });
    if (l.length === 0) return;
    const n = new this._w.RegExp("^" + i.replace(/^#/, ""), "i"), s = [];
    let c = "";
    for (let d = 0, o = l.length, v; d < o; d++)
      v = l[d], n.test(v.textContent) && (s.push(v), c += '<li class="se-select-item" data-index="' + d + '">' + v.textContent + "</li>");
    s.length === 0 ? this.plugins.selectMenu.close.call(this, t) : (this.plugins.selectMenu.createList(t, s, c), this.plugins.selectMenu.open.call(this, t, this.plugins.anchor._setMenuListPosition.bind(this, e)));
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
    const i = e.preview, l = this.options.linkProtocol, n = this.options.linkNoPrefix, s = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(t) || t.indexOf(l) === 0, c = l ? this._w.RegExp("^" + this.util.escapeStringRegexp(t.substr(0, l.length))).test(l) : !1;
    t = e.linkValue = i.textContent = t ? n ? t : l && !s && !c ? l + t : s ? t : /^www\./.test(t) ? "http://" + t : this.context.anchor.host + (/^\//.test(t) ? "" : "/") + t : "", this.plugins.anchor.selfPathBookmark.call(this, t) ? (e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active")) : (e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active")), !this.plugins.anchor.selfPathBookmark.call(this, t) && e.downloadCheck.checked ? e.download.style.display = "block" : e.download.style.display = "none";
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
    for (let n = 0, s = l.length, c; n < s; n++)
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
}, ec = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([Ri, xa]);
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
var Cl = { exports: {} }, tc = Cl.exports, Lo;
function ic() {
  return Lo || (Lo = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : tc, function(t, i) {
      const l = {
        name: "component",
        /**
         * @description Create a container for the resizing component and insert the element.
         * @param {Element} cover Cover element (FIGURE)
         * @param {String} className Class name of container (fixed: se-component)
         * @returns {Element} Created container element
         */
        set_container: function(n, s) {
          const c = this.util.createElement("DIV");
          return c.className = "se-component " + s, c.appendChild(n), c;
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
  }(Cl)), Cl.exports;
}
var lc = /* @__PURE__ */ ic();
const _n = /* @__PURE__ */ Ne(lc);
var wl = { exports: {} }, nc = wl.exports, Bo;
function oc() {
  return Bo || (Bo = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : nc, function(t, i) {
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
          const s = n.icons, c = n.context;
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
              basic: s.align_justify,
              left: s.align_left,
              right: s.align_right,
              center: s.align_center
            }
          };
          let d = this.setController_resize(n);
          c.resizing.resizeContainer = d, c.resizing.resizeDiv = d.querySelector(".se-modal-resize"), c.resizing.resizeDot = d.querySelector(".se-resize-dot"), c.resizing.resizeDisplay = d.querySelector(".se-resize-display");
          let o = this.setController_button(n);
          c.resizing.resizeButton = o;
          let v = c.resizing.resizeHandles = c.resizing.resizeDot.querySelectorAll("span");
          c.resizing.resizeButtonGroup = o.querySelector("._se_resizing_btn_group"), c.resizing.rotationButtons = o.querySelectorAll("._se_resizing_btn_group ._se_rotation"), c.resizing.percentageButtons = o.querySelectorAll("._se_resizing_btn_group ._se_percentage"), c.resizing.alignMenu = o.querySelector(".se-resizing-align-list"), c.resizing.alignMenuList = c.resizing.alignMenu.querySelectorAll("button"), c.resizing.alignButton = o.querySelector("._se_resizing_align_button"), c.resizing.autoSizeButton = o.querySelector("._se_resizing_btn_group ._se_auto_size"), c.resizing.captionButton = o.querySelector("._se_resizing_caption_button"), d.addEventListener("mousedown", function(u) {
            u.preventDefault();
          }), v[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), v[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), v[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), v[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), v[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), v[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), v[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), v[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(n)), o.addEventListener("click", this.onClick_resizeButton.bind(n)), c.element.relative.appendChild(d), c.element.relative.appendChild(o), d = null, o = null, v = null;
        },
        /** resize controller, button (image, iframe, video) */
        setController_resize: function(n) {
          const s = n.util.createElement("DIV");
          return s.className = "se-controller se-resizing-container", s.style.display = "none", s.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', s;
        },
        setController_button: function(n) {
          const s = n.lang, c = n.icons, d = n.util.createElement("DIV");
          return d.className = "se-controller se-controller-resizing", d.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.resize100 + '</span></span></button><button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage"><span>75%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.resize75 + '</span></span></button><button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage"><span>50%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.resize50 + '</span></span></button><button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + c.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.autoSize + '</span></span></button><button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + c.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.rotateLeft + '</span></span></button><button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + c.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.rotateRight + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + c.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.mirrorHorizontal + '</span></span></button><button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + c.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.mirrorVertical + '</span></span></button><button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + c.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.toolbar.align + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list"><div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + c.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.basic + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + c.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.left + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + c.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.center + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + c.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.right + '</span></span></button></li></ul></div></div><button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + c.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.caption + '</span></span></button><button type="button" data-command="revert" class="se-btn se-tooltip">' + c.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.dialogBox.revertButton + '</span></span></button><button type="button" data-command="update" class="se-btn se-tooltip">' + c.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.edit + '</span></span></button><button type="button" data-command="delete" class="se-btn se-tooltip">' + c.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + s.controller.remove + "</span></span></button></div>", d;
        },
        /**
         * @description Gets the width size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeX: function(n, s, c, d) {
          return s || (s = n._element), c || (c = n._cover), d || (d = n._container), s ? /%$/.test(s.style.width) ? (d && this.util.getNumber(d.style.width, 2) || 100) + "%" : s.style.width : "";
        },
        /**
         * @description Gets the height size
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Element} element Target element
         * @param {Element} cover Cover element (FIGURE)
         * @param {Element} container Container element (DIV.se-component)
         * @returns {String}
         */
        _module_getSizeY: function(n, s, c, d) {
          return s || (s = n._element), c || (c = n._cover), d || (d = n._container), !d || !c ? s && s.style.height || "" : this.util.getNumber(c.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? c.style.height : !/%$/.test(s.style.height) || !/%$/.test(s.style.width) ? s.style.height : (d && this.util.getNumber(d.style.height, 2) || 100) + "%";
        },
        /**
         * @description Called at the "openModify" to put the size of the current target into the size input element.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         * @param {Object} pluginObj Plugin object
         */
        _module_setModifyInputSize: function(n, s) {
          const c = n._onlyPercentage && this.context.resizing._rotateVertical;
          n.proportion.checked = n._proportionChecked = n._element.getAttribute("data-proportion") !== "false";
          let d = c ? "" : this.plugins.resizing._module_getSizeX.call(this, n);
          if (d === n._defaultSizeX && (d = ""), n._onlyPercentage && (d = this.util.getNumber(d, 2)), n.inputX.value = d, s.setInputSize.call(this, "x"), !n._onlyPercentage) {
            let o = c ? "" : this.plugins.resizing._module_getSizeY.call(this, n);
            o === n._defaultSizeY && (o = ""), n._onlyPercentage && (o = this.util.getNumber(o, 2)), n.inputY.value = o;
          }
          n.inputX.disabled = !!c, n.inputY.disabled = !!c, n.proportion.disabled = !!c, s.setRatio.call(this);
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
            const c = n.inputX.value.replace(/\d+|\./g, "") || n.sizeUnit, d = n.inputY.value.replace(/\d+|\./g, "") || n.sizeUnit;
            if (c !== d) return;
            const o = c === "%" ? 2 : 0;
            s === "x" ? n.inputY.value = this.util.getNumber(n._ratioY * this.util.getNumber(n.inputX.value, o), o) + d : n.inputX.value = this.util.getNumber(n._ratioX * this.util.getNumber(n.inputY.value, o), o) + c;
          }
        },
        /**
         * @description It is called in "setRatio" (input and proportionCheck tags changeEvent), 
         * checks the value of the input tag, calculates the ratio, and resets it in the input tag.
         * @param {Object} contextPlugin context object of plugin (core.context[plugin])
         */
        _module_setRatio: function(n) {
          const s = n.inputX.value, c = n.inputY.value;
          if (n.proportion.checked && /\d+/.test(s) && /\d+/.test(c)) {
            const d = s.replace(/\d+|\./g, "") || n.sizeUnit, o = c.replace(/\d+|\./g, "") || n.sizeUnit;
            if (d !== o)
              n._ratio = !1;
            else if (!n._ratio) {
              const v = this.util.getNumber(s, 0), u = this.util.getNumber(c, 0);
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
          const s = this.plugins.resizing._module_getSizeX.call(this, n), c = this.plugins.resizing._module_getSizeY.call(this, n);
          n._element.setAttribute("width", s.replace("px", "")), n._element.setAttribute("height", c.replace("px", "")), n._element.setAttribute("data-size", s + "," + c), n._videoRatio && (n._videoRatio = c);
        },
        /**
         * @description Call the resizing module
         * @param {Element} targetElement Resizing target element
         * @param {string} plugin Plugin name
         * @returns {Object} Size of resizing div {w, h, t, l}
         */
        call_controller_resize: function(n, s) {
          const c = this.context.resizing, d = this.context[s];
          c._resize_plugin = s;
          const o = c.resizeContainer, v = c.resizeDiv, u = this.util.getOffset(n, this.context.element.wysiwygFrame), m = c._rotateVertical = /^(90|270)$/.test(Math.abs(n.getAttribute("data-rotate")).toString()), C = m ? n.offsetHeight : n.offsetWidth, x = m ? n.offsetWidth : n.offsetHeight, k = u.top, z = u.left - this.context.element.wysiwygFrame.scrollLeft;
          o.style.top = k + "px", o.style.left = z + "px", o.style.width = C + "px", o.style.height = x + "px", v.style.top = "0px", v.style.left = "0px", v.style.width = C + "px", v.style.height = x + "px";
          let a = n.getAttribute("data-align") || "basic";
          a = a === "none" ? "basic" : a;
          const r = this.util.getParentElement(n, this.util.isComponent), f = this.util.getParentElement(n, "FIGURE"), p = this.plugins.resizing._module_getSizeX.call(this, d, n, f, r) || "auto", g = d._onlyPercentage && s === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, d, n, f, r) || "auto");
          this.util.changeTxt(c.resizeDisplay, this.lang.dialogBox[a] + " (" + p + g + ")"), c.resizeButtonGroup.style.display = d._resizing ? "" : "none";
          const b = d._resizing && !d._resizeDotHide && !d._onlyPercentage ? "flex" : "none", h = c.resizeHandles;
          for (let L = 0, B = h.length; L < B; L++)
            h[L].style.display = b;
          if (d._resizing) {
            const L = c.rotationButtons;
            L[0].style.display = L[1].style.display = d._rotation ? "" : "none";
          }
          if (d._alignHide)
            c.alignButton.style.display = "none";
          else {
            c.alignButton.style.display = "";
            const L = c.alignMenuList;
            this.util.changeElement(c.alignButton.firstElementChild, c.alignIcons[a]);
            for (let B = 0, D = L.length; B < D; B++)
              L[B].getAttribute("data-value") === a ? this.util.addClass(L[B], "on") : this.util.removeClass(L[B], "on");
          }
          const y = c.percentageButtons, w = /%$/.test(n.style.width) && /%$/.test(r.style.width) ? this.util.getNumber(r.style.width, 0) / 100 + "" : "";
          for (let L = 0, B = y.length; L < B; L++)
            y[L].getAttribute("data-value") === w ? this.util.addClass(y[L], "active") : this.util.removeClass(y[L], "active");
          d._captionShow ? (c.captionButton.style.display = "", this.util.getChildElement(n.parentNode, "figcaption") ? (this.util.addClass(c.captionButton, "active"), d._captionChecked = !0) : (this.util.removeClass(c.captionButton, "active"), d._captionChecked = !1)) : c.captionButton.style.display = "none", o.style.display = "block";
          const _ = { left: 0, top: 50 };
          this.options.iframe && (_.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, _.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(c.resizeButton, o, "bottom", _);
          const S = function() {
            this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
          };
          this.controllersOn(o, c.resizeButton, S.bind(this), n, s), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), c._resize_w = C, c._resize_h = x;
          const I = (n.getAttribute("origin-size") || "").split(",");
          return c._origin_w = I[0] || n.naturalWidth, c._origin_h = I[1] || n.naturalHeight, {
            w: C,
            h: x,
            t: k,
            l: z
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
          const s = n.target, c = s.getAttribute("data-command") || s.parentNode.getAttribute("data-command");
          if (!c) return;
          const d = s.getAttribute("data-value") || s.parentNode.getAttribute("data-value"), o = this.context.resizing._resize_plugin, v = this.context[o], u = v._element, m = this.plugins[o];
          if (n.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), c === "onalign"))) {
            switch (c) {
              case "auto":
                this.plugins.resizing.resetTransform.call(this, u), m.setAutoSize.call(this), this.selectComponent(u, o);
                break;
              case "percent":
                let C = this.plugins.resizing._module_getSizeY.call(this, v);
                if (this.context.resizing._rotateVertical) {
                  const b = u.getAttribute("data-percentage");
                  b && (C = b.split(",")[1]);
                }
                this.plugins.resizing.resetTransform.call(this, u), m.setPercentSize.call(this, d * 100, this.util.getNumber(C, 0) === null || !/%$/.test(C) ? "" : C), this.selectComponent(u, o);
                break;
              case "mirror":
                const x = u.getAttribute("data-rotate") || "0";
                let k = u.getAttribute("data-rotateX") || "", z = u.getAttribute("data-rotateY") || "";
                d === "h" && !this.context.resizing._rotateVertical || d === "v" && this.context.resizing._rotateVertical ? z = z ? "" : "180" : k = k ? "" : "180", u.setAttribute("data-rotateX", k), u.setAttribute("data-rotateY", z), this.plugins.resizing._setTransForm(u, x, k, z);
                break;
              case "rotate":
                const a = this.context.resizing, r = u.getAttribute("data-rotate") * 1 + d * 1, f = this._w.Math.abs(r) >= 360 ? 0 : r;
                u.setAttribute("data-rotate", f), a._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(f).toString()), this.plugins.resizing.setTransformSize.call(this, u, null, null), this.selectComponent(u, o);
                break;
              case "onalign":
                this.plugins.resizing.openAlignMenu.call(this);
                return;
              case "align":
                const p = d === "basic" ? "none" : d;
                m.setAlign.call(this, p, null, null, null), this.selectComponent(u, o);
                break;
              case "caption":
                const g = !v._captionChecked;
                if (m.openModify.call(this, !0), v._captionChecked = v.captionCheckEl.checked = g, m.update_image.call(this, !1, !1, !1), g) {
                  const b = this.util.getChildElement(v._caption, function(h) {
                    return h.nodeType === 3;
                  });
                  b ? this.setRange(b, 0, b, b.textContent.length) : v._caption.focus(), this.controllersOff();
                } else
                  this.selectComponent(u, o), m.openModify.call(this, !0);
                break;
              case "revert":
                m.setOriginSize.call(this), this.selectComponent(u, o);
                break;
              case "update":
                m.openModify.call(this), this.controllersOff();
                break;
              case "delete":
                m.destroy.call(this);
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
        setTransformSize: function(n, s, c) {
          let d = n.getAttribute("data-percentage");
          const o = this.context.resizing._rotateVertical, v = n.getAttribute("data-rotate") * 1;
          let u = "";
          if (d && !o)
            d = d.split(","), d[0] === "auto" && d[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, d[0], d[1]);
          else {
            const m = this.util.getParentElement(n, "FIGURE"), C = s || n.offsetWidth, x = c || n.offsetHeight, k = (o ? x : C) + "px", z = (o ? C : x) + "px";
            if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, C + "px", x + "px", !0), m.style.width = k, m.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : z, o) {
              let a = C / 2 + "px " + C / 2 + "px 0", r = x / 2 + "px " + x / 2 + "px 0";
              u = v === 90 || v === -270 ? r : a;
            }
          }
          n.style.transformOrigin = u, this.plugins.resizing._setTransForm(n, v.toString(), n.getAttribute("data-rotateX") || "", n.getAttribute("data-rotateY") || ""), o ? n.style.maxWidth = "none" : n.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, n);
        },
        _setTransForm: function(n, s, c, d) {
          let o = (n.offsetWidth - n.offsetHeight) * (/-/.test(s) ? 1 : -1), v = "";
          if (/[1-9]/.test(s) && (c || d))
            switch (v = c ? "Y" : "X", s) {
              case "90":
                v = c && d ? "X" : d ? v : "";
                break;
              case "270":
                o *= -1, v = c && d ? "Y" : c ? v : "";
                break;
              case "-90":
                v = c && d ? "Y" : c ? v : "";
                break;
              case "-270":
                o *= -1, v = c && d ? "X" : d ? v : "";
                break;
              default:
                v = "";
            }
          s % 180 === 0 && (n.style.maxWidth = ""), n.style.transform = "rotate(" + s + "deg)" + (c ? " rotateX(" + c + "deg)" : "") + (d ? " rotateY(" + d + "deg)" : "") + (v ? " translate" + v + "(" + o + "px)" : "");
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
          const s = this.context.resizing, c = s._resize_direction = n.target.classList[0];
          s._resizeClientX = n.clientX, s._resizeClientY = n.clientY, this.context.element.resizeBackground.style.display = "block", s.resizeButton.style.display = "none", s.resizeDiv.style.float = /l/.test(c) ? "right" : /r/.test(c) ? "left" : "none";
          const d = (function(u) {
            if (u.type === "keydown" && u.keyCode !== 27) return;
            const m = s._isChange;
            s._isChange = !1, this.removeDocEvent("mousemove", o), this.removeDocEvent("mouseup", d), this.removeDocEvent("keydown", d), u.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, c), m && this.history.push(!1));
          }).bind(this), o = this.plugins.resizing.resizing_element.bind(this, s, c, this.context[s._resize_plugin]);
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
        resizing_element: function(n, s, c, d) {
          const o = d.clientX, v = d.clientY;
          let u = c._element_w, m = c._element_h;
          const C = c._element_w + (/r/.test(s) ? o - n._resizeClientX : n._resizeClientX - o), x = c._element_h + (/b/.test(s) ? v - n._resizeClientY : n._resizeClientY - v), k = c._element_h / c._element_w * C;
          /t/.test(s) && (n.resizeDiv.style.top = c._element_h - (/h/.test(s) ? x : k) + "px"), /l/.test(s) && (n.resizeDiv.style.left = c._element_w - C + "px"), /r|l/.test(s) && (n.resizeDiv.style.width = C + "px", u = C), /^(t|b)[^h]$/.test(s) ? (n.resizeDiv.style.height = k + "px", m = k) : /^(t|b)h$/.test(s) && (n.resizeDiv.style.height = x + "px", m = x), n._resize_w = u, n._resize_h = m, this.util.changeTxt(n.resizeDisplay, this._w.Math.round(u) + " x " + this._w.Math.round(m)), n._isChange = !0;
        },
        /**
         * @description Resize the element to the size of the "div" adjusted in the "resizing_element" method.
         * Called at the mouse-up event registered in "onMouseDown_resize_handle".
         * @param {String} direction Direction ("tl", "tr", "bl", "br", "lw", "th", "rw", "bh")
         */
        cancel_controller_resize: function(n) {
          const s = this.context.resizing._rotateVertical;
          this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
          let c = this._w.Math.round(s ? this.context.resizing._resize_h : this.context.resizing._resize_w), d = this._w.Math.round(s ? this.context.resizing._resize_w : this.context.resizing._resize_h);
          if (!s && !/%$/.test(c)) {
            const u = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
            this.util.getNumber(c, 0) > u && (d = this._w.Math.round(d / c * u), c = u);
          }
          const o = this.context.resizing._resize_plugin;
          this.plugins[o].setSize.call(this, c, d, !1, n), s && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, c, d), this.selectComponent(this.context[o]._element, o);
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
  }(wl)), wl.exports;
}
var ac = /* @__PURE__ */ oc();
const Sa = /* @__PURE__ */ Ne(ac);
var kl = { exports: {} }, sc = kl.exports, zo;
function rc() {
  return zo || (zo = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : sc, function(t, i) {
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
        upload: function(n, s, c, d, o) {
          this.showLoading();
          const v = this.plugins.fileManager, u = v._xmlHttp = this.util.getXMLHttpRequest();
          if (u.onreadystatechange = v._callBackUpload.bind(this, u, d, o), u.open("post", n, !0), s !== null && typeof s == "object" && this._w.Object.keys(s).length > 0)
            for (let m in s)
              u.setRequestHeader(m, s[m]);
          u.send(c);
        },
        _callBackUpload: function(n, s, c) {
          if (n.readyState === 4)
            if (n.status === 200)
              try {
                s(n);
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
        checkInfo: function(n, s, c, d, o) {
          let v = [];
          for (let r = 0, f = s.length; r < f; r++)
            v = v.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(s[r] + ':not([data-se-embed="true"])')));
          const u = this.plugins.fileManager, m = this.context[n], C = m._infoList, x = u.setInfo.bind(this);
          if (v.length === C.length)
            if (this._componentsInfoReset) {
              for (let r = 0, f = v.length; r < f; r++)
                x(n, v[r], c, null, o);
              return;
            } else {
              let r = !1;
              for (let f = 0, p = C.length, g; f < p; f++)
                if (g = C[f], v.filter(function(b) {
                  return g.src === b.src && g.index.toString() === b.getAttribute("data-index");
                }).length === 0) {
                  r = !0;
                  break;
                }
              if (!r) return;
            }
          const k = o ? this.context.resizing._resize_plugin : "";
          o && (this.context.resizing._resize_plugin = n);
          const z = [], a = [];
          for (let r = 0, f = C.length; r < f; r++)
            a[r] = C[r].index;
          for (m.__updateTags = v; v.length > 0; ) {
            const r = v.shift();
            !this.util.getParentElement(r, this.util.isMediaComponent) || !u._checkMediaComponent(r) ? (z.push(m._infoIndex), d(r)) : !r.getAttribute("data-index") || a.indexOf(r.getAttribute("data-index") * 1) < 0 ? (z.push(m._infoIndex), r.removeAttribute("data-index"), x(n, r, c, null, o)) : z.push(r.getAttribute("data-index") * 1);
          }
          for (let r = 0, f; r < C.length; r++)
            f = C[r].index, !(z.indexOf(f) > -1) && (C.splice(r, 1), typeof c == "function" && c(null, f, "delete", null, 0, this), r--);
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
        setInfo: function(n, s, c, d, o) {
          const v = o ? this.context.resizing._resize_plugin : "";
          o && (this.context.resizing._resize_plugin = n);
          const u = this.plugins[n], m = this.context[n], C = m._infoList;
          let x = s.getAttribute("data-index"), k = null, z = "";
          if (d || (d = {
            name: s.getAttribute("data-file-name") || (typeof s.src == "string" ? s.src.split("/").pop() : ""),
            size: s.getAttribute("data-file-size") || 0
          }), !x || this._componentsInfoInit)
            z = "create", x = m._infoIndex++, s.setAttribute("data-index", x), s.setAttribute("data-file-name", d.name), s.setAttribute("data-file-size", d.size), k = {
              src: s.src,
              index: x * 1,
              name: d.name,
              size: d.size
            }, C.push(k);
          else {
            z = "update", x *= 1;
            for (let a = 0, r = C.length; a < r; a++)
              if (x === C[a].index) {
                k = C[a];
                break;
              }
            k || (x = m._infoIndex++, k = { index: x }, C.push(k)), k.src = s.src, k.name = s.getAttribute("data-file-name"), k.size = s.getAttribute("data-file-size") * 1;
          }
          if (k.element = s, k.delete = u.destroy.bind(this, s), k.select = (function(a) {
            a.scrollIntoView(!0), this._w.setTimeout(u.select.bind(this, a));
          }).bind(this, s), o) {
            if (!s.getAttribute("origin-size") && s.naturalWidth && s.setAttribute("origin-size", s.naturalWidth + "," + s.naturalHeight), !s.getAttribute("data-origin")) {
              const a = this.util.getParentElement(s, this.util.isMediaComponent), r = this.util.getParentElement(s, "FIGURE"), f = this.plugins.resizing._module_getSizeX.call(this, m, s, r, a), p = this.plugins.resizing._module_getSizeY.call(this, m, s, r, a);
              s.setAttribute("data-origin", f + "," + p), s.setAttribute("data-size", f + "," + p);
            }
            if (!s.style.width) {
              const a = (s.getAttribute("data-size") || s.getAttribute("data-origin") || "").split(",");
              u.onModifyMode.call(this, s, null), u.applySize.call(this, a[0], a[1]);
            }
            this.context.resizing._resize_plugin = v;
          }
          typeof c == "function" && c(s, x, z, k, --m._uploadFileLength < 0 ? 0 : m._uploadFileLength, this);
        },
        /**
         * @description Delete info object at "_infoList"
         * @param {String} pluginName Plugin name 
         * @param {Number} index index of info object (this.context[pluginName]._infoList[].index)
         * @param {Function|null} uploadEventHandler Event handler to process updated file info (created in setInfo)
         */
        deleteInfo: function(n, s, c) {
          if (s >= 0) {
            const d = this.context[n]._infoList;
            for (let o = 0, v = d.length; o < v; o++)
              if (s === d[o].index) {
                d.splice(o, 1), typeof c == "function" && c(null, s, "delete", null, 0, this);
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
          const c = this.context[n];
          if (typeof s == "function") {
            const d = c._infoList;
            for (let o = 0, v = d.length; o < v; o++)
              s(null, d[o].index, "delete", null, 0, this);
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
  }(kl)), kl.exports;
}
var uc = /* @__PURE__ */ rc();
const Cn = /* @__PURE__ */ Ne(uc), cc = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([Ri, xa, _n, Sa, Cn]);
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
      const s = t.imageSizeOnlyPercentage, c = s ? ' style="display: none !important;"' : "", d = t.imageHeightShow ? "" : ' style="display: none !important;"';
      n += '<div class="se-dialog-form">', s || !t.imageHeightShow ? n += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.size + "</label></div>" : n += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + i.dialogBox.height + "</label></div>", n += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (s ? ' type="number" min="1"' : 'type="text"') + (s ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + d + ">" + (s ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + c + (s ? ' max="100"' : "") + d + "/><label" + c + d + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + '</label><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
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
    this.util.removeItem(i), this.plugins.image.init.call(this), this.controllersOff(), s !== this.context.element.wysiwyg && this.util.removeItemAllParents(s, function(c) {
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
    let s, c, d;
    for (c = t.getElementsByClassName(n), s = 0; s < c.length; s++)
      c[s].style.display = "none";
    for (d = t.getElementsByClassName("_se_tab_link"), s = 0; s < d.length; s++)
      this.util.removeClass(d[s], "active");
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
      for (let v = 0, u = o.length; v < u; v++)
        d += o[v].size * 1;
      if (t + d > l) {
        this.closeLoading();
        const v = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + l / 1e3 + "KB";
        (typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(v, { limitSize: l, currentSize: d, uploadSize: t }, this)) && this.functions.noticeOpen(v);
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
  setup_reader: function(e, t, i, l, n, s, c, d) {
    try {
      if (c === 0) {
        this.closeLoading(), console.warn("[SUNEDITOR.image.base64.fail] cause : No applicable files");
        return;
      }
      this.context.image.base64RenderIndex = c;
      const o = this._w.FileReader, v = [c];
      this.context.image.inputX.value = i, this.context.image.inputY.value = l;
      for (let u = 0, m, C; u < c; u++)
        m = new o(), C = e[u], m.onload = (function(x, k, z, a, r) {
          v[r] = { result: x.result, file: a }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, k, v, z, t, i, l, n, s), this.closeLoading());
        }).bind(this, m, d, this.context.image._element, C, u), m.readAsDataURL(C);
    } catch (o) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + o.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, i, l, n, s, c, d) {
    const o = this.plugins.image.update_src, v = this.plugins.image.create_image;
    for (let u = 0, m = t.length; u < m; u++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[u].file.name), this.context.image._element.setAttribute("data-file-size", t[u].file.size), o.call(this, t[u].result, i, t[u].file)) : v.call(this, t[u].result, l, n, s, c, t[u].file, d);
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
  create_image: function(e, t, i, l, n, s, c) {
    const d = this.plugins.image, o = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let v = this.util.createElement("IMG");
    v.src = e, v.alt = c, v.setAttribute("data-rotate", "0"), t = d.onRender_link.call(this, v, t ? t.cloneNode(!1) : null), o._resizing && v.setAttribute("data-proportion", o._proportionChecked);
    const u = this.plugins.component.set_cover.call(this, t), m = this.plugins.component.set_container.call(this, u, "se-image-container");
    o._captionChecked && (o._caption = this.plugins.component.create_caption.call(this), u.appendChild(o._caption)), o._element = v, o._cover = u, o._container = m, d.applySize.call(this, i, l), d.setAlign.call(this, n, v, u, m), v.onload = d._image_create_onload.bind(this, v, o.svgDefaultSize, m), this.insertComponent(m, !0, !0, !this.options.mediaAutoSelect) && this.plugins.fileManager.setInfo.call(this, "image", v, this.functions.onImageUpload, s, !0), this.context.resizing._resize_plugin = "";
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
    let n = l._element, s = l._cover, c = l._container, d = !1;
    s === null && (d = !0, n = l._element.cloneNode(!0), s = this.plugins.component.set_cover.call(this, n)), c === null ? (s = s.cloneNode(!0), n = s.querySelector("img"), d = !0, c = this.plugins.component.set_container.call(this, s, "se-image-container")) : d && (c.innerHTML = "", c.appendChild(s), l._cover = s, l._element = n, d = !1);
    let o;
    const v = this.util.isNumber(l.inputX.value) ? l.inputX.value + l.sizeUnit : l.inputX.value, u = this.util.isNumber(l.inputY.value) ? l.inputY.value + l.sizeUnit : l.inputY.value;
    /%$/.test(n.style.width) ? o = v !== c.style.width || u !== c.style.height : o = v !== n.style.width || u !== n.style.height, n.alt = l._altText;
    let m = !1;
    l._captionChecked ? l._caption || (l._caption = this.plugins.component.create_caption.call(this), s.appendChild(l._caption), m = !0) : l._caption && (this.util.removeItem(l._caption), l._caption = null, m = !0);
    let C = null;
    const x = this.plugins.anchor.createAnchor.call(this, l.anchorCtx, !0);
    if (x)
      l._linkElement !== x || d && !c.contains(x) ? (l._linkElement = x.cloneNode(!1), s.insertBefore(this.plugins.image.onRender_link.call(this, n, l._linkElement), l._caption), C = l._element) : l._linkElement.setAttribute("data-image-link", "image");
    else if (l._linkElement !== null) {
      const z = n;
      if (z.setAttribute("data-image-link", ""), s.contains(l._linkElement)) {
        const a = z.cloneNode(!0);
        s.removeChild(l._linkElement), s.insertBefore(a, l._caption), l._element = n = a;
      }
    }
    let k = null;
    if (d) {
      if (k = this.util.isRangeFormatElement(l._element.parentNode) || this.util.isWysiwygDiv(l._element.parentNode) ? l._element : this.util.isAnchor(l._element.parentNode) ? l._element.parentNode : this.util.getFormatElement(l._element) || l._element, this.util.getParentElement(l._element, this.util.isNotCheckingNode))
        k = C ? x : l._element, k.parentNode.replaceChild(c, k);
      else if (this.util.isListCell(k)) {
        const z = this.util.getParentElement(l._element, function(a) {
          return a.parentNode === k;
        });
        k.insertBefore(c, z), this.util.removeItem(l._element), this.util.removeEmptyNode(z, null, !0);
      } else if (this.util.isFormatElement(k)) {
        const z = this.util.getParentElement(l._element, function(a) {
          return a.parentNode === k;
        });
        k = this.util.splitElement(k, z), k.parentNode.insertBefore(c, k), this.util.removeItem(l._element), this.util.removeEmptyNode(k, null, !0), k.children.length === 0 && (k.innerHTML = this.util.htmlRemoveWhiteSpace(k.innerHTML));
      } else if (this.util.isFormatElement(k.parentNode)) {
        const z = k.parentNode;
        z.parentNode.insertBefore(c, k.previousSibling ? z.nextElementSibling : z), l.__updateTags.map(function(a) {
          return k.contains(a);
        }).length === 0 && this.util.removeItem(k);
      } else
        k = this.util.isFigures(k.parentNode) ? k.parentNode : k, k.parentNode.replaceChild(c, k);
      n = c.querySelector("img"), l._element = n, l._cover = s, l._container = c;
    }
    C && (d ? (this.util.removeItem(C), this.util.getListChildren(x, function(z) {
      return /IMG/i.test(z.tagName);
    }).length === 0 && this.util.removeItem(x)) : this.util.removeItem(x)), (m || !l._onlyPercentage && o) && !e && (/\d+/.test(n.style.height) || this.context.resizing._rotateVertical && l._captionChecked) && (/%$/.test(l.inputX.value) || /%$/.test(l.inputY.value) ? this.plugins.resizing.resetTransform.call(this, n) : this.plugins.resizing.setTransformSize.call(this, n, this.util.getNumber(l.inputX.value, 0), this.util.getNumber(l.inputY.value, 0))), l._resizing && (n.setAttribute("data-proportion", l._proportionChecked), o && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, n, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", n, this.functions.onImageUpload, null, !0), t && this.selectComponent(n, "image"), i || this.history.push(!1);
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
}, dc = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([Ri, _n, Sa, Cn]);
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
      const s = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], c = t.videoRatio, d = t.videoSizeOnlyPercentage, o = d ? ' style="display: none !important;"' : "", v = t.videoHeightShow ? "" : ' style="display: none !important;"', u = t.videoRatioShow ? "" : ' style="display: none !important;"', m = !d && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      n += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + v + ">" + i.dialogBox.height + '</label><label class="size-h"' + u + ">(" + i.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (d ? ' type="number" min="1"' : 'type="text"') + (d ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + m + ">" + (d ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (d ? ' type="number" min="1"' : 'type="text"') + (d ? ' max="100"' : "") + v + '/><select class="se-input-select se-video-ratio" title="' + i.dialogBox.ratio + '" aria-label="' + i.dialogBox.ratio + '"' + u + ">", v || (n += '<option value=""> - </option>');
      for (let C = 0, x = s.length; C < x; C++)
        n += '<option value="' + s[C].value + '"' + (c.toString() === s[C].value.toString() ? " selected" : "") + ">" + s[C].name + "</option>";
      n += '</select><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + o + m + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + "</label></div>";
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
    this.util.removeItem(i), this.plugins.video.init.call(this), this.controllersOff(), s !== this.context.element.wysiwyg && this.util.removeItemAllParents(s, function(c) {
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
      for (let o = 0, v = d.length; o < v; o++)
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
    const s = {
      inputWidth: n.inputX.value,
      inputHeight: n.inputY.value,
      align: n._align,
      isUpdate: this.context.dialog.updateModal,
      element: n._element
    };
    if (typeof this.functions.onVideoUploadBefore == "function") {
      const c = this.functions.onVideoUploadBefore(i, s, this, (function(d) {
        d && this._w.Array.isArray(d.result) ? this.plugins.video.register.call(this, s, d) : this.plugins.video.upload.call(this, s, d);
      }).bind(this));
      if (typeof c > "u") return;
      if (!c) {
        this.closeLoading();
        return;
      }
      typeof c == "object" && c.length > 0 && (i = c);
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
    for (let n = 0, s = i.length, c; n < s; n++)
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
  create_video: function(e, t, i, l, n, s, c) {
    this.context.resizing._resize_plugin = "video";
    const d = this.context.video;
    let o = null, v = null, u = !1;
    if (c) {
      if (e = d._element, e.src !== t) {
        u = !0;
        const z = /youtu\.?be/.test(t), a = /vimeo\.com/.test(t);
        if ((z || a) && !/^iframe$/i.test(e.nodeName)) {
          const r = this.plugins.video.createIframeTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), d._element = e = r;
        } else if (!z && !a && !/^video$/i.test(e.nodeName)) {
          const r = this.plugins.video.createVideoTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), d._element = e = r;
        } else
          e.src = t;
      }
      v = d._container, o = this.util.getParentElement(e, "FIGURE");
    } else
      u = !0, e.src = t, d._element = e, o = this.plugins.component.set_cover.call(this, e), v = this.plugins.component.set_container.call(this, o, "se-video-container");
    d._cover = o, d._container = v;
    const m = this.plugins.resizing._module_getSizeX.call(this, d) !== (i || d._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, d) !== (l || d._videoRatio), C = !c || m;
    d._resizing && (this.context.video._proportionChecked = d.proportion.checked, e.setAttribute("data-proportion", d._proportionChecked));
    let x = !1;
    C && (x = this.plugins.video.applySize.call(this)), x && n === "center" || this.plugins.video.setAlign.call(this, null, e, o, v);
    let k = !0;
    if (c)
      d._resizing && this.context.resizing._rotateVertical && C && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (k = this.insertComponent(v, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const z = this.appendFormatTag(v, null);
      z && this.setRange(z, 0, z, 0);
    }
    k && (u && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, s, !0), c && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
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
      const c = i.querySelector("figcaption");
      let d = null;
      c && (d = this.util.createElement("DIV"), d.innerHTML = c.innerHTML, this.util.removeItem(c));
      const o = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, o[0] || l.style.width || l.width || "", o[1] || l.style.height || l.height || "");
      const v = this.util.getFormatElement(l);
      if (v && (t._align = v.style.textAlign || v.style.float), this.plugins.video.setAlign.call(this, null, e, n, s), this.util.getParentElement(l, this.util.isNotCheckingNode))
        l.parentNode.replaceChild(s, l);
      else if (this.util.isListCell(i)) {
        const u = this.util.getParentElement(l, function(m) {
          return m.parentNode === i;
        });
        i.insertBefore(s, u), this.util.removeItem(l), this.util.removeEmptyNode(u, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const u = this.util.getParentElement(l, function(m) {
          return m.parentNode === i;
        });
        i = this.util.splitElement(i, u), i.parentNode.insertBefore(s, i), this.util.removeItem(l), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(s, i);
      d && i.parentNode.insertBefore(d, s.nextElementSibling);
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
    const n = this.context.video, s = /^(rw|lw)$/.test(l), c = /^(th|bh)$/.test(l);
    c || (e = this.util.getNumber(e, 0)), s || (t = this.util.isNumber(t) ? t + n.sizeUnit : t || ""), e = e ? e + n.sizeUnit : "", c || (n._element.style.width = e), s || (n._cover.style.paddingBottom = n._cover.style.height = t), !c && !/%$/.test(e) && (n._cover.style.width = e, n._container.style.width = ""), !s && !/%$/.test(t) ? n._element.style.height = t : n._element.style.height = "", i || n._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, n);
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
}, fc = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([Ri, _n, Cn]);
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
    for (let c = 0, d = e.length; c < d; c++)
      /audio/i.test(e[c].type) && (i.push(e[c]), t += e[c].size);
    const l = this.options.audioUploadSizeLimit;
    if (l > 0) {
      let c = 0;
      const d = this.context.audio._infoList;
      for (let o = 0, v = d.length; o < v; o++)
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
    const s = {
      isUpdate: this.context.dialog.updateModal,
      element: n._element
    };
    if (typeof this.functions.onAudioUploadBefore == "function") {
      const c = this.functions.onAudioUploadBefore(i, s, this, (function(d) {
        d && this._w.Array.isArray(d.result) ? this.plugins.audio.register.call(this, s, d) : this.plugins.audio.upload.call(this, s, d);
      }).bind(this));
      if (typeof c > "u") return;
      if (!c) {
        this.closeLoading();
        return;
      }
      typeof c == "object" && c.length > 0 && (i = c);
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
    for (let l = 0, n = i.length, s, c; l < n; l++)
      e.isUpdate ? c = e.element : c = this.plugins.audio._createAudioTag.call(this), s = { name: i[l].name, size: i[l].size }, this.plugins.audio.create_audio.call(this, c, i[l].url, s, e.isUpdate);
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
      const s = this.plugins.component.set_cover.call(this, e), c = this.plugins.component.set_container.call(this, s, "");
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
    const n = this.plugins.component.set_cover.call(this, e), s = this.plugins.component.set_container.call(this, n, "se-audio-container");
    try {
      if (this.util.getParentElement(l, this.util.isNotCheckingNode))
        l.parentNode.replaceChild(s, l);
      else if (this.util.isListCell(i)) {
        const c = this.util.getParentElement(l, function(d) {
          return d.parentNode === i;
        });
        i.insertBefore(s, c), this.util.removeItem(l), this.util.removeEmptyNode(c, null, !0);
      } else if (this.util.isFormatElement(i)) {
        const c = this.util.getParentElement(l, function(d) {
          return d.parentNode === i;
        });
        i = this.util.splitElement(i, c), i.parentNode.insertBefore(s, i), this.util.removeItem(l), this.util.removeEmptyNode(i, null, !0), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(s, i);
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
}, No = "https://katex.org/docs/supported.html", hc = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([Ri]);
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
    let s = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="' + No + '" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let c = 0, d = l.length, o; c < d; c++)
      o = l[c], o.default && (n = o.value), s += '<option value="' + o.value + '"' + (o.default ? " selected" : "") + ">" + o.text + "</option>";
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
      this.util.addClass(this.context.math.focusElement, "se-error"), t = '<span class="se-math-katex-error">Katex syntax error. (Refer <a href="' + No + '" target="_blank">KaTeX</a>)</span>', console.warn("[SUNEDITOR.math.Katex.error] ", i);
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
          const d = this.util.createElement(s[0].nodeName);
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
var xl = { exports: {} }, pc = xl.exports, Do;
function mc() {
  return Do || (Do = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(l) {
        if (!l.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(l);
      };
    })(typeof window < "u" ? window : pc, function(t, i) {
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
          let c = n.util.createElement("DIV");
          c.className = "se-file-browser sun-editor-common";
          let d = n.util.createElement("DIV");
          d.className = "se-file-browser-back";
          let o = n.util.createElement("DIV");
          o.className = "se-file-browser-inner", o.innerHTML = this.set_browser(n), c.appendChild(d), c.appendChild(o), this._loading = c.querySelector(".se-loading-box"), s.fileBrowser.area = c, s.fileBrowser.header = o.querySelector(".se-file-browser-header"), s.fileBrowser.titleArea = o.querySelector(".se-file-browser-title"), s.fileBrowser.tagArea = o.querySelector(".se-file-browser-tags"), s.fileBrowser.body = o.querySelector(".se-file-browser-body"), s.fileBrowser.list = o.querySelector(".se-file-browser-list"), s.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(n)), s.fileBrowser.list.addEventListener("click", this.onClickFile.bind(n)), o.addEventListener("mousedown", this._onMouseDown_browser.bind(n)), o.addEventListener("click", this._onClick_browser.bind(n)), s.element.relative.appendChild(c), c = null, d = null, o = null;
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
          this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = (function(v) {
            /27/.test(v.keyCode) && this.plugins.fileBrowser.close.call(this);
          }).bind(this), this._d.addEventListener("keydown", this.plugins.fileBrowser._bindClose);
          const c = this.context.fileBrowser;
          c.contextPlugin = n, c.selectorHandler = s;
          const d = this.context[n], o = d.listClass;
          this.util.hasClass(c.list, o) || (c.list.className = "se-file-browser-list " + o), this.options.popupDisplay === "full" ? c.area.style.position = "fixed" : c.area.style.position = "absolute", c.titleArea.textContent = d.title, c.area.style.display = "block", this.context[n].directData ? this.plugins.fileBrowser._drawListItem.call(this, this.context[n].directData, !0) : this.plugins.fileBrowser._drawFileList.call(this, this.context[n].url, this.context[n].header);
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
          const c = this.plugins.fileBrowser, d = c._xmlHttp = this.util.getXMLHttpRequest();
          if (d.onreadystatechange = c._callBackGet.bind(this, d), d.open("get", n, !0), s !== null && typeof s == "object" && this._w.Object.keys(s).length > 0)
            for (let o in s)
              d.setRequestHeader(o, s[o]);
          d.send(null), this.plugins.fileBrowser.showBrowserLoading();
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
              const s = n.responseText ? JSON.parse(n.responseText) : n, c = "[SUNEDITOR.fileBrowser.get.serverException] status: " + n.status + ", response: " + (s.errorMessage || n.responseText);
              throw Error(c);
            }
          }
        },
        _drawListItem: function(n, s) {
          const c = this.context.fileBrowser, d = this.context[c.contextPlugin], o = [], v = n.length, u = d.columnSize || c.columnSize, m = u <= 1 ? 1 : Math.round(v / u) || 1, C = d.itemTemplateHandler;
          let x = "", k = '<div class="se-file-item-column">', z = 1;
          for (let a = 0, r, f; a < v; a++)
            if (r = n[a], f = r.tag ? typeof r.tag == "string" ? r.tag.split(",") : r.tag : [], f = r.tag = f.map(function(p) {
              return p.trim();
            }), k += C(r), (a + 1) % m === 0 && z < u && a + 1 < v && (z++, k += '</div><div class="se-file-item-column">'), s && f.length > 0)
              for (let p = 0, g = f.length, b; p < g; p++)
                b = f[p], b && o.indexOf(b) === -1 && (o.push(b), x += '<a title="' + b + '" aria-label="' + b + '">' + b + "</a>");
          k += "</div>", c.list.innerHTML = k, s && (c.items = n, c.tagArea.innerHTML = x, c.tagElements = c.tagArea.querySelectorAll("A"));
        },
        onClickTag: function(n) {
          const s = n.target;
          if (!this.util.isAnchor(s)) return;
          const c = s.textContent, d = this.plugins.fileBrowser, o = this.context.fileBrowser, v = o.tagArea.querySelector('a[title="' + c + '"]'), u = o.selectedTags, m = u.indexOf(c);
          m > -1 ? (u.splice(m, 1), this.util.removeClass(v, "on")) : (u.push(c), this.util.addClass(v, "on")), d._drawListItem.call(
            this,
            u.length === 0 ? o.items : o.items.filter(function(C) {
              return C.tag.some(function(x) {
                return u.indexOf(x) > -1;
              });
            }),
            !1
          );
        },
        onClickFile: function(n) {
          n.preventDefault(), n.stopPropagation();
          const s = this.context.fileBrowser, c = s.list;
          let d = n.target, o = null;
          if (d === c) return;
          for (; c !== d.parentNode && (o = d.getAttribute("data-command"), !o); )
            d = d.parentNode;
          if (!o) return;
          (s.selectorHandler || this.context[s.contextPlugin].selectorHandler)(d, d.parentNode.querySelector(".__se__img_name").textContent), this.plugins.fileBrowser.close.call(this);
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
  }(xl)), xl.exports;
}
var gc = /* @__PURE__ */ mc();
const vc = /* @__PURE__ */ Ne(gc), bc = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([vc]);
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
}, yc = { blockquote: Mu, align: Ou, font: Fu, fontSize: Hu, fontColor: Vu, hiliteColor: Pu, horizontalRule: Uu, list: Wu, table: $u, formatBlock: Zu, lineHeight: qu, template: ju, paragraphStyle: Gu, textStyle: Yu, link: ec, image: cc, video: dc, audio: fc, math: hc, imageGallery: bc }, _c = {
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
}, Ao = {
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
    const l = [], n = t === "js" ? "script" : "link", s = t === "js" ? "src" : "href";
    let c = "(?:";
    for (let v = 0, u = e.length; v < u; v++)
      c += e[v] + (v < u - 1 ? "|" : ")");
    const d = new this._w.RegExp("(^|.*[\\/])" + c + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), o = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
    for (let v = this._d.getElementsByTagName(n), u = 0; u < v.length; u++)
      o.test(v[u][s]) && l.push(v[u]);
    for (let v = 0; v < l.length; v++) {
      let u = l[v][s].match(d);
      if (u) {
        i = u[0];
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
        for (let c = 0, d = s.length; c < d; c++)
          t += s[c].cssText;
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
      for (let s = 0, c = n.length; s < c; s++)
        e.style[n[s]] = n[n[s]];
    }
    const l = t.attributes;
    for (let n = 0, s = l.length, c; n < s; n++)
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
    for (let n = 0, s = e.length, c; n < s; n++)
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
    return this.getParentElement(e, (function(s) {
      if (s === t && (n = !1), n && !this.isWysiwygDiv(s)) {
        if (i && s.nodeType === 3) {
          let c = null, d = null;
          i.s = i.e = 0;
          let o = s.previousSibling;
          for (; o && o.nodeType === 3; )
            d = o.textContent.replace(this.zeroWidthRegExp, ""), i.s += d.length, s.textContent = d + s.textContent, c = o, o = o.previousSibling, this.removeItem(c);
          let v = s.nextSibling;
          for (; v && v.nodeType === 3; )
            d = v.textContent.replace(this.zeroWidthRegExp, ""), i.e += d.length, s.textContent += d, c = v, v = v.nextSibling, this.removeItem(c);
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
    for (let v = 0, u = i.length; v < u; v++)
      i[i[v]] === l[i[v]] && n++;
    const s = e.classList, c = t.classList, d = this._w.RegExp;
    let o = 0;
    for (let v = 0, u = s.length; v < u; v++)
      d("(s|^)" + s[v] + "(s|$)").test(c.value) && o++;
    return n === l.length && n === i.length && o === c.length && o === s.length;
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
        for (let s = 0, c = n.children.length; s < c; s++)
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
      for (let s = 0, c = n.childNodes.length; s < c; s++)
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
    const n = i.parentNode.childNodes, s = this.getArrayIndex(n, i), c = this.getArrayIndex(n, l);
    return {
      ancestor: i.parentNode,
      a: i,
      b: l,
      result: s > c ? 1 : s < c ? -1 : 0
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
      const c = new this._w.RegExp(t, "i");
      l = function(d) {
        return c.test(d[s]);
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
    const c = t && /iframe/i.test(t.nodeName);
    return {
      left: i + (c ? t.parentElement.offsetLeft : 0),
      top: l - (s ? s.scrollTop : 0) + (c ? t.parentElement.offsetTop : 0)
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
      if (!de.isWysiwygDiv(s)) {
        const c = s.parentNode;
        c && t(s) && (l = {
          sc: s.previousElementSibling,
          ec: s.nextElementSibling
        }, de.removeItem(s), n(c));
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
    let s;
    if (t)
      s = this.getListChildren(l, (function(c) {
        return this.isListCell(c) && !c.previousElementSibling;
      }).bind(this));
    else {
      const c = this.getElementDepth(e) + 2;
      s = this.getListChildren(e, (function(d) {
        return this.isListCell(d) && !d.previousElementSibling && this.getElementDepth(d) === c;
      }).bind(this));
    }
    for (let c = 0, d = s.length; c < d; c++)
      this._deleteNestedList(s[c]);
    return i && (i.parentNode.insertBefore(l, i.nextSibling), n && n.length === 0 && this.removeItem(i)), l === e ? l.parentNode : l;
  },
  /**
   * @description Sub function of util.detachNestedList method.
   * @private
   */
  _deleteNestedList: function(e) {
    const t = e.parentNode;
    let i = t, l = i.parentNode, n, s, c, d, o;
    for (; this.isListCell(l); ) {
      for (d = this.getPositionIndex(e), n = l.nextElementSibling, s = l.parentNode, c = i; c; ) {
        if (i = i.nextSibling, this.isList(c)) {
          for (o = c.childNodes; o[d]; )
            s.insertBefore(o[d], n);
          o.length === 0 && this.removeItem(c);
        } else
          s.appendChild(c);
        c = i;
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
      const C = e.childNodes;
      let x = this.getPositionIndex(t);
      const k = e.cloneNode(!1), z = e.cloneNode(!1);
      for (let a = 0, r = C.length; a < r; a++) {
        if (a < x) k.appendChild(C[a]);
        else if (a > x) z.appendChild(C[a]);
        else continue;
        a--, r--, x--;
      }
      return k.childNodes.length > 0 && e.parentNode.insertBefore(k, e), z.childNodes.length > 0 && e.parentNode.insertBefore(z, e.nextElementSibling), e;
    }
    const l = e.parentNode;
    let n = 0, s = 1, c = !0, d, o, v;
    if ((!i || i < 0) && (i = 0), e.nodeType === 3) {
      if (n = this.getPositionIndex(e), t >= 0 && e.length !== t) {
        e.splitText(t);
        const C = this.getNodeFromPath([n + 1], l);
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
    e.nodeType === 1 && (s = 0);
    let u = e;
    for (; this.getElementDepth(u) > i; )
      for (n = this.getPositionIndex(u) + s, u = u.parentNode, v = d, d = u.cloneNode(!1), o = u.childNodes, v && (this.isListCell(d) && this.isList(v) && v.firstElementChild ? (d.innerHTML = v.firstElementChild.innerHTML, de.removeItem(v.firstElementChild), v.children.length > 0 && d.appendChild(v)) : d.appendChild(v)); o[n]; )
        d.appendChild(o[n]);
    u.childNodes.length <= 1 && (!u.firstChild || u.firstChild.textContent.length === 0) && (u.innerHTML = "<br>");
    const m = u.parentNode;
    return c && (u = u.nextSibling), d ? (this.mergeSameTags(d, null, !1), this.mergeNestedTags(d, (function(C) {
      return this.isList(C);
    }).bind(this)), d.childNodes.length > 0 ? m.insertBefore(d, u) : d = u, this.isListCell(d) && d.children && this.isList(d.children[0]) && d.insertBefore(this.createElement("BR"), d.children[0]), l.childNodes.length === 0 && this.removeItem(l), d) : u;
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
    return n && (s = this._w.Array.apply(null, new this._w.Array(n)).map(this._w.Number.prototype.valueOf, 0)), function c(d, o, v) {
      const u = d.childNodes;
      for (let m = 0, C = u.length, x, k; m < C && (x = u[m], k = u[m + 1], !!x); m++)
        if (!(l.isBreak(x) || l.isMedia(x) || l.isInputElement(x))) {
          if (i && l._isIgnoreNodeChange(x) || !i && (l.isTable(x) || l.isListCell(x) || l.isFormatElement(x) && !l.isFreeFormatElement(x))) {
            (l.isTable(x) || l.isListCell(x)) && c(x, o + 1, m);
            continue;
          }
          if (C === 1 && d.nodeName === x.nodeName && d.parentNode) {
            if (n) {
              let z, a, r, f, p;
              for (let g = 0; g < n; g++)
                if (z = t[g], z && z[o] === m) {
                  for (a = x, r = d, f = o, p = !0; f >= 0; ) {
                    if (l.getArrayIndex(r.childNodes, a) !== z[f]) {
                      p = !1;
                      break;
                    }
                    a = x.parentNode, r = a.parentNode, f--;
                  }
                  p && (z.splice(o, 1), z[o] = m);
                }
            }
            l.copyTagAttributes(x, d), d.parentNode.insertBefore(x, d), l.removeItem(d);
          }
          if (!k) {
            x.nodeType === 1 && c(x, o + 1, m);
            break;
          }
          if (x.nodeName === k.nodeName && l.isSameAttributes(x, k) && x.href === k.href) {
            const z = x.childNodes;
            let a = 0;
            for (let g = 0, b = z.length; g < b; g++)
              z[g].textContent.length > 0 && a++;
            const r = x.lastChild, f = k.firstChild;
            let p = 0;
            if (r && f) {
              const g = r.nodeType === 3 && f.nodeType === 3;
              p = r.textContent.length;
              let b = r.previousSibling;
              for (; b && b.nodeType === 3; )
                p += b.textContent.length, b = b.previousSibling;
              if (a > 0 && r.nodeType === 3 && f.nodeType === 3 && (r.textContent.length > 0 || f.textContent.length > 0) && a--, n) {
                let h = null;
                for (let y = 0; y < n; y++)
                  if (h = t[y], h && h[o] > m) {
                    if (o > 0 && h[o - 1] !== v) continue;
                    h[o] -= 1, h[o + 1] >= 0 && h[o] === m && (h[o + 1] += a, g && r && r.nodeType === 3 && f && f.nodeType === 3 && (s[y] += p));
                  }
              }
            }
            if (x.nodeType === 3) {
              if (p = x.textContent.length, x.textContent += k.textContent, n) {
                let g = null;
                for (let b = 0; b < n; b++)
                  if (g = t[b], g && g[o] > m) {
                    if (o > 0 && g[o - 1] !== v) continue;
                    g[o] -= 1, g[o + 1] >= 0 && g[o] === m && (g[o + 1] += a, s[b] += p);
                  }
              }
            } else
              x.innerHTML += k.innerHTML;
            l.removeItem(k), m--;
          } else x.nodeType === 1 && c(x, o + 1, m);
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
      for (let s = 0, c = l.children.length; s < c; s++)
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
        const c = s.children;
        for (let d = 0, o = c.length, v = 0; d < o; d++)
          !c[d + v] || l.isComponent(c[d + v]) || (v += n(c[d + v]));
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
    const s = [], c = [], d = [], o = [], v = this.getListChildNodes(e, (function(m) {
      if (m.nodeType !== 1)
        return this.isList(m.parentElement) && s.push(m), !1;
      if (i.test(m.nodeName) || !t.test(m.nodeName) && m.childNodes.length === 0 && this.isNotCheckingNode(m))
        return s.push(m), !1;
      const C = !this.getParentElement(m, this.isNotCheckingNode);
      if (!this.isTable(m) && !this.isListCell(m) && !this.isAnchor(m) && (this.isFormatElement(m) || this.isRangeFormatElement(m) || this.isTextStyleElement(m)) && m.childNodes.length === 0 && C)
        return c.push(m), !1;
      if (this.isList(m.parentNode) && !this.isList(m) && !this.isListCell(m))
        return d.push(m), !1;
      if (this.isCell(m)) {
        const k = m.firstElementChild;
        if (!this.isFormatElement(k) && !this.isRangeFormatElement(k) && !this.isComponent(k))
          return o.push(m), !1;
      }
      if (C && m.className) {
        const k = new this._w.Array(m.classList).map(l).join(" ").trim();
        k ? m.className = k : m.removeAttribute("class");
      }
      return n && m.parentNode !== e && C && (this.isListCell(m) && !this.isList(m.parentNode) || (this.isFormatElement(m) || this.isComponent(m)) && !this.isRangeFormatElement(m.parentNode) && !this.getParentElement(m, this.isComponent));
    }).bind(this));
    for (let m = 0, C = s.length; m < C; m++)
      this.removeItem(s[m]);
    const u = [];
    for (let m = 0, C = v.length, x, k; m < C; m++)
      if (x = v[m], k = x.parentNode, !(!k || !k.parentNode))
        if (this.getParentElement(x, this.isListCell)) {
          const z = x.childNodes;
          for (let a = z.length - 1; C >= 0; a--)
            k.insertBefore(x, z[a]);
          u.push(x);
        } else
          k.parentNode.insertBefore(x, k), u.push(k);
    for (let m = 0, C = u.length, x; m < C; m++)
      x = u[m], this.onlyZeroWidthSpace(x.textContent.trim()) && this.removeItem(x);
    for (let m = 0, C = c.length; m < C; m++)
      this.removeItem(c[m]);
    for (let m = 0, C = d.length, x, k, z, a; m < C; m++)
      if (x = d[m], a = x.parentNode, !!a)
        if (k = this.createElement("LI"), this.isFormatElement(x)) {
          for (z = x.childNodes; z[0]; )
            k.appendChild(z[0]);
          a.insertBefore(k, x), this.removeItem(x);
        } else
          x = x.nextSibling, k.appendChild(d[m]), a.insertBefore(k, x);
    for (let m = 0, C = o.length, x, k; m < C; m++)
      x = o[m], k = this.createElement("DIV"), k.innerHTML = x.textContent.trim().length === 0 && x.children.length === 0 ? "<br>" : x.innerHTML, x.innerHTML = k.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let i = "";
    e.height && (i += "height:" + e.height + ";"), e.minHeight && (i += "min-height:" + e.minHeight + ";"), e.maxHeight && (i += "max-height:" + e.maxHeight + ";"), e.position && (i += "position:" + e.position + ";"), e.width && (i += "width:" + e.width + ";"), e.minWidth && (i += "min-width:" + e.minWidth + ";"), e.maxWidth && (i += "max-width:" + e.maxWidth + ";");
    let l = "", n = "", s = "";
    t = i + t;
    const c = t.split(";");
    for (let d = 0, o = c.length, v; d < o; d++)
      if (v = c[d].trim(), !!v) {
        if (/^(min-|max-)?width\s*:/.test(v) || /^(z-index|position)\s*:/.test(v)) {
          l += v + ";";
          continue;
        }
        if (/^(min-|max-)?height\s*:/.test(v)) {
          /^height/.test(v) && v.split(":")[1].trim() === "auto" && (e.height = "auto"), n += v + ";";
          continue;
        }
        s += v + ";";
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
    for (let n = 0, s = t.length, c; n < s; n++) {
      if (c = [], /(^https?:\/\/)|(^data:text\/css,)/.test(t[n]))
        c.push(t[n]);
      else {
        const d = new i("(^|.*[\\/])" + t[n] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let o = document.getElementsByTagName("link"), v = 0, u = o.length, m; v < u; v++)
          m = o[v].href.match(d), m && c.push(m[0]);
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
}, un = {
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
    const s = this._createToolBar(i, t.buttonList, t.plugins, t), c = s.element.cloneNode(!1);
    c.className += " se-toolbar-shadow", s.element.style.visibility = "hidden", s.pluginCallButtons.math && this._checkKatexMath(t.katex);
    const d = i.createElement("DIV");
    d.className = "se-arrow";
    const o = i.createElement("DIV");
    o.className = "se-toolbar-sticky-dummy";
    const v = i.createElement("DIV");
    v.className = "se-wrapper";
    const u = this._initElements(t, l, s.element, d), m = u.bottomBar, C = u.wysiwygFrame, x = u.placeholder;
    let k = u.codeView;
    const z = m.resizingBar, a = m.navigation, r = m.charWrapper, f = m.charCounter, p = i.createElement("DIV");
    p.className = "se-loading-box sun-editor-common", p.innerHTML = '<div class="se-loading-effect"></div>';
    const g = i.createElement("DIV");
    g.className = "se-line-breaker", g.innerHTML = '<button class="se-btn">' + t.icons.line_break + "</button>";
    const b = i.createElement("DIV");
    b.className += "se-line-breaker-component";
    const h = b.cloneNode(!0);
    b.innerHTML = h.innerHTML = t.icons.line_break;
    const y = i.createElement("DIV");
    y.className = "se-resizing-back";
    const w = i.createElement("INPUT");
    w.tabIndex = -1, w.style.cssText = "position: fixed !important; top: -10000px !important; display: block !important; width: 0 !important; height: 0 !important; margin: 0 !important; padding: 0 !important;";
    const _ = t.toolbarContainer;
    _ && (_.appendChild(s.element), _.appendChild(c));
    const S = t.resizingBarContainer;
    return z && S && S.appendChild(z), v.appendChild(k), x && v.appendChild(x), _ || (n.appendChild(s.element), n.appendChild(c)), n.appendChild(o), n.appendChild(v), n.appendChild(y), n.appendChild(p), n.appendChild(g), n.appendChild(b), n.appendChild(h), n.appendChild(w), z && !S && n.appendChild(z), l.appendChild(n), k = this._checkCodeMirror(t, k), {
      constructed: {
        _top: l,
        _relative: n,
        _toolBar: s.element,
        _toolbarShadow: c,
        _menuTray: s._menuTray,
        _editorArea: v,
        _wysiwygArea: C,
        _codeArea: k,
        _placeholder: x,
        _resizingBar: z,
        _navigation: a,
        _charWrapper: r,
        _charCounter: f,
        _loading: p,
        _lineBreaker: g,
        _lineBreaker_t: b,
        _lineBreaker_b: h,
        _resizeBack: y,
        _stickyDummy: o,
        _arrow: d,
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
      const i = [{
        mode: "htmlmixed",
        htmlMode: !0,
        lineNumbers: !0,
        lineWrapping: !0
      }, e.codeMirror.options || {}].reduce(function(n, s) {
        for (let c in s)
          de.hasOwn(s, c) && (n[c] = s[c]);
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
        de.hasOwn(l, n) && (i[n] = l[n]);
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
    const l = t.element, n = l.relative, s = l.editorArea, c = e.toolbarContainer && e.toolbarContainer !== i.toolbarContainer, d = e.lang !== i.lang || e.buttonList !== i.buttonList || e.mode !== i.mode || c, o = this._createToolBar(document, d ? e.buttonList : i.buttonList, e.plugins, e);
    o.pluginCallButtons.math && this._checkKatexMath(e.katex);
    const v = document.createElement("DIV");
    v.className = "se-arrow", d && (o.element.style.visibility = "hidden", c ? (e.toolbarContainer.appendChild(o.element), l.toolbar.parentElement.removeChild(l.toolbar)) : l.toolbar.parentElement.replaceChild(o.element, l.toolbar), l.toolbar = o.element, l._menuTray = o._menuTray, l._arrow = v);
    const u = this._initElements(e, l.topArea, d ? o.element : l.toolbar, v), m = u.bottomBar, C = u.wysiwygFrame, x = u.placeholder;
    let k = u.codeView;
    return l.resizingBar && de.removeItem(l.resizingBar), m.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== i.resizingBarContainer ? e.resizingBarContainer.appendChild(m.resizingBar) : n.appendChild(m.resizingBar)), s.innerHTML = "", s.appendChild(k), x && s.appendChild(x), k = this._checkCodeMirror(e, k), l.resizingBar = m.resizingBar, l.navigation = m.navigation, l.charWrapper = m.charWrapper, l.charCounter = m.charCounter, l.wysiwygFrame = C, l.code = k, l.placeholder = x, e.rtl ? de.addClass(l.topArea, "se-rtl") : de.removeClass(l.topArea, "se-rtl"), {
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
      for (let m in e.iframeAttributes)
        n.setAttribute(m, e.iframeAttributes[m]);
      n.className += " " + e._editableClass, n.style.cssText = e._editorStyles.frame + e._editorStyles.editor, n.className += e.className;
    }
    const s = document.createElement("TEXTAREA");
    s.className = "se-wrapper-inner se-wrapper-code" + e.className, s.style.cssText = e._editorStyles.frame, s.style.display = "none", e.height === "auto" && (s.style.overflow = "hidden");
    let c = null, d = null, o = null, v = null;
    if (e.resizingBar && (c = document.createElement("DIV"), c.className = "se-resizing-bar sun-editor-common", d = document.createElement("DIV"), d.className = "se-navigation sun-editor-common", c.appendChild(d), e.charCounter)) {
      if (o = document.createElement("DIV"), o.className = "se-char-counter-wrapper", e.charCounterLabel) {
        const m = document.createElement("SPAN");
        m.className = "se-char-label", m.textContent = e.charCounterLabel, o.appendChild(m);
      }
      if (v = document.createElement("SPAN"), v.className = "se-char-counter", v.textContent = "0", o.appendChild(v), e.maxCharCount > 0) {
        const m = document.createElement("SPAN");
        m.textContent = " / " + e.maxCharCount, o.appendChild(m);
      }
      c.appendChild(o);
    }
    let u = null;
    return e.placeholder && (u = document.createElement("SPAN"), u.className = "se-placeholder", u.innerText = e.placeholder), {
      bottomBar: {
        resizingBar: c,
        navigation: d,
        charWrapper: o,
        charCounter: v
      },
      wysiwygFrame: n,
      codeView: s,
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
      const s = t.plugins, c = s.length ? s : Object.keys(s).map(function(d) {
        return s[d];
      });
      for (let d = 0, o = c.length, v; d < o; d++)
        v = c[d].default || c[d], i[v.name] = v;
    }
    t.plugins = i, t.strictMode = t.strictMode !== !1, t.strictHTMLValidation = t.strictHTMLValidation !== !1, t.lang = t.lang || Vl, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new de._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
    const l = t.textTags = [{ bold: "STRONG", underline: "U", italic: "EM", strike: "DEL", sub: "SUB", sup: "SUP" }, t.textTags || {}].reduce(function(s, c) {
      for (let d in c)
        s[d] = c[d];
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
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : n) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? de.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? de.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? de.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
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
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? Ao : [Ao, t.icons].reduce(function(s, c) {
      for (let d in c)
        de.hasOwn(c, d) && (s[d] = c[d]);
      return s;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(s, c) {
      for (let d in c)
        de.hasOwn(c, d) && (s[d] = c[d]);
      return s;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = de._setDefaultOptionStyle(t, t.defaultStyle);
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
    const t = e.icons, i = e.lang, l = de.isOSX_IOS ? "⌘" : "CTRL", n = de.isOSX_IOS ? "⇧" : "+SHIFT", s = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], c = e.rtl ? ["[", "]"] : ["]", "["], d = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
    return {
      /** default command */
      bold: ["", i.toolbar.bold + '<span class="se-shortcut">' + (s.indexOf("bold") > -1 ? "" : l + '+<span class="se-shortcut-key">B</span>') + "</span>", "bold", "", t.bold],
      underline: ["", i.toolbar.underline + '<span class="se-shortcut">' + (s.indexOf("underline") > -1 ? "" : l + '+<span class="se-shortcut-key">U</span>') + "</span>", "underline", "", t.underline],
      italic: ["", i.toolbar.italic + '<span class="se-shortcut">' + (s.indexOf("italic") > -1 ? "" : l + '+<span class="se-shortcut-key">I</span>') + "</span>", "italic", "", t.italic],
      strike: ["", i.toolbar.strike + '<span class="se-shortcut">' + (s.indexOf("strike") > -1 ? "" : l + n + '+<span class="se-shortcut-key">S</span>') + "</span>", "strike", "", t.strike],
      subscript: ["", i.toolbar.subscript, "SUB", "", t.subscript],
      superscript: ["", i.toolbar.superscript, "SUP", "", t.superscript],
      removeFormat: ["", i.toolbar.removeFormat, "removeFormat", "", t.erase],
      indent: ["", i.toolbar.indent + '<span class="se-shortcut">' + (s.indexOf("indent") > -1 ? "" : l + '+<span class="se-shortcut-key">' + c[0] + "</span>") + "</span>", "indent", "", d[0]],
      outdent: ["", i.toolbar.outdent + '<span class="se-shortcut">' + (s.indexOf("indent") > -1 ? "" : l + '+<span class="se-shortcut-key">' + c[1] + "</span>") + "</span>", "outdent", "", d[1]],
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
  _createButton: function(e, t, i, l, n, s, c) {
    const d = de.createElement("LI"), o = de.createElement("BUTTON"), v = t || i;
    return o.setAttribute("type", "button"), o.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), o.setAttribute("data-command", i), o.setAttribute("data-display", l), o.setAttribute("aria-label", v.replace(/<span .+<\/span>/, "")), o.setAttribute("tabindex", "-1"), n || (n = '<span class="se-icon-text">!</span>'), /^default\./i.test(n) && (n = c[n.replace(/^default\./i, "")]), /^text\./i.test(n) && (n = n.replace(/^text\./i, ""), o.className += " se-btn-more-text"), n += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + v + "</span></span>", s && o.setAttribute("disabled", !0), o.innerHTML = n, d.appendChild(o), {
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
    const s = e.createElement("DIV");
    s.className = "se-toolbar sun-editor-common";
    const c = e.createElement("DIV");
    c.className = "se-btn-tray", s.appendChild(c), t = JSON.parse(JSON.stringify(t));
    const d = l.icons, o = this._defaultButtons(l), v = {}, u = [];
    let m = null, C = null, x = null, k = null, z = "", a = !1;
    const r = de.createElement("DIV");
    r.className = "se-toolbar-more-layer";
    e:
      for (let g = 0, b, h, y, w, _; g < t.length; g++)
        if (b = !1, _ = "", w = t[g], x = this._createModuleGroup(), typeof w == "object") {
          for (let S = 0, I; S < w.length; S++) {
            if (C = w[S], I = !1, /^\%\d+/.test(C) && S === 0) {
              w[0] = C.replace(/[^\d]/g, ""), u.push(w), t.splice(g--, 1);
              continue e;
            }
            if (typeof C == "object")
              typeof C.add == "function" ? (z = C.name, m = o[z], i[z] = C) : (z = C.name, m = [C.buttonClass, C.title, C.name, C.dataDisplay, C.innerHTML, C._disabled]);
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
                I = !0;
                const L = C.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                y = "__se__" + L[1].trim();
                const B = L[2].trim(), D = L[3].trim();
                m = ["se-btn-more", B, y, "MORE", D];
              } else
                m = o[C];
              if (z = C, !m) {
                const L = i[z];
                if (!L) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + z + "]");
                m = [L.buttonClass, L.title, L.name, L.display, L.innerHTML, L._disabled];
              }
            }
            k = this._createButton(m[0], m[1], m[2], m[3], m[4], m[5], d), (b ? h : x.ul).appendChild(k.li), i[z] && (v[z] = k.button), I && (b = !0, h = de.createElement("DIV"), h.className = "se-more-layer " + y, h.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (_ ? ' style="float: ' + _ + ';"' : "") + "></ul></div>", r.appendChild(h), h = h.firstElementChild.firstElementChild);
          }
          if (a) {
            const S = n.cloneNode(!1);
            c.appendChild(S);
          }
          c.appendChild(x.div), a = !0;
        } else if (/^\/$/.test(w)) {
          const S = e.createElement("DIV");
          S.className = "se-btn-module-enter", c.appendChild(S), a = !1;
        }
    switch (c.children.length) {
      case 0:
        c.style.display = "none";
        break;
      case 1:
        de.removeClass(c.firstElementChild, "se-btn-module-border");
        break;
      default:
        if (l.rtl) {
          const g = n.cloneNode(!1);
          g.style.float = c.lastElementChild.style.float, c.appendChild(g);
        }
    }
    u.length > 0 && u.unshift(t), r.children.length > 0 && c.appendChild(r);
    const f = e.createElement("DIV");
    f.className = "se-menu-tray", s.appendChild(f);
    const p = e.createElement("DIV");
    return p.className = "se-toolbar-cover", s.appendChild(p), l.hideToolbar && (s.style.display = "none"), {
      element: s,
      plugins: i,
      pluginCallButtons: v,
      responsiveButtons: u,
      _menuTray: f,
      _buttonTray: c
    };
  }
}, cn = function(e, t, i) {
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
function Cc(e, t) {
  const i = e._w, l = e.util, n = e.options.historyStackDelayTime;
  let s = e.context.element, c = e.context.tool.undo, d = e.context.tool.redo, o = null, v = 0, u = [];
  function m() {
    const x = u[v];
    s.wysiwyg.innerHTML = x.contents, e.setRange(l.getNodeFromPath(x.s.path, s.wysiwyg), x.s.offset, l.getNodeFromPath(x.e.path, s.wysiwyg), x.e.offset), e.focus(), u.length <= 1 ? (c && c.setAttribute("disabled", !0), d && d.setAttribute("disabled", !0)) : v === 0 ? (c && c.setAttribute("disabled", !0), d && d.removeAttribute("disabled")) : v === u.length - 1 ? (c && c.removeAttribute("disabled"), d && d.setAttribute("disabled", !0)) : (c && c.removeAttribute("disabled"), d && d.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function C() {
    e._checkComponents();
    const x = s.wysiwyg.innerHTML;
    if (!x || u[v] && x === u[v].contents) return;
    v++;
    const k = e._variable._range;
    u.length > v && (u = u.slice(0, v), d && d.setAttribute("disabled", !0)), k ? u[v] = {
      contents: x,
      s: {
        path: l.getNodePath(k.startContainer, null, null),
        offset: k.startOffset
      },
      e: {
        path: l.getNodePath(k.endContainer, null, null),
        offset: k.endOffset
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
      const k = typeof x == "number" ? x > 0 ? x : 0 : x ? n : 0;
      if ((!k || o) && (i.clearTimeout(o), !k)) {
        C();
        return;
      }
      o = i.setTimeout(function() {
        i.clearTimeout(o), o = null, C();
      }, k);
    },
    /**
     * @description Undo function
     */
    undo: function() {
      v > 0 && (v--, m());
    },
    /**
     * @description Redo function
     */
    redo: function() {
      u.length - 1 > v && (v++, m());
    },
    /**
     * @description Go to the history stack for that index.
     * If "index" is -1, go to the last stack
     */
    go: function(x) {
      v = x < 0 ? u.length - 1 : x, m();
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
      s = e.context.element, c = e.context.tool.undo, d = e.context.tool.redo, v === 0 ? (c && c.setAttribute("disabled", !0), d && v === u.length - 1 && d.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : v === u.length - 1 && d && d.setAttribute("disabled", !0);
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
const Io = {
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
function wc(e, t, i, l, n, s) {
  const c = e.element.originElement.ownerDocument || document, d = c.defaultView || window, o = de, v = n.icons, u = {
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
    notice: Io,
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
      const a = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
      for (let r = 0, f, p; r < a.length; r++)
        f = a[r], p = f.getAttribute("data-command"), this.allCommandButtons[p] = f;
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const a = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let r = 0, f, p, g; r < a.length; r++)
          f = a[r], p = f.getAttribute("data-command"), g = this.allCommandButtons[p], g && (f.parentElement.replaceChild(g, f), this.context.tool[p] && (this.context.tool[p] = g));
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
      for (let r = 0, f = a.length, p; r < f; r++)
        p = a[r].name, this.plugins[p] || (this.plugins[p] = a[r]), this.initPlugins[p] || (this.initPlugins[p] = !0, typeof this.plugins[p].add == "function" && this.plugins[p].add(this));
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
      const f = this.context.element.toolbar, p = f.offsetWidth, g = m._getEditorOffsets(e.element.toolbar), b = r.offsetWidth, h = a.parentElement.offsetLeft + 3;
      if (n.rtl) {
        const D = a.offsetWidth, W = b > D ? b - D : 0, P = W > 0 ? 0 : D - b;
        r.style.left = h - W + P + "px", g.left > m._getEditorOffsets(r).left && (r.style.left = "0px");
      } else {
        const D = p <= b ? 0 : p - (h + b);
        D < 0 ? r.style.left = h + D + "px" : r.style.left = h + "px";
      }
      let y = 0, w = a;
      for (; w && w !== f; )
        y += w.offsetTop, w = w.offsetParent;
      const _ = y;
      this._isBalloon ? y += f.offsetTop + a.offsetHeight : y -= a.offsetHeight;
      const S = g.top, I = r.offsetHeight, L = this.getGlobalScrollOffset().top, B = d.innerHeight - (S - L + _ + a.parentElement.offsetHeight);
      if (B < I) {
        let D = -1 * (I - _ + 3);
        const W = S - L + D, P = I + (W < 0 ? W : 0);
        P > B ? (r.style.height = P + "px", D = -1 * (P - _ + 3)) : (r.style.height = B + "px", D = _ + a.parentElement.offsetHeight), r.style.top = D + "px";
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
          r.style && (r.style.display = "block", this._shadowRoot && this._shadowRootControllerEventTarget.indexOf(r) === -1 && (r.addEventListener("mousedown", function(f) {
            f.preventDefault(), f.stopPropagation();
          }), this._shadowRootControllerEventTarget.push(r))), this.controllerArray.push(r);
        }
      this._bindControllersOff = this.controllersOff.bind(this), this.addDocEvent("mousedown", this._bindControllersOff, !1), this.addDocEvent("keydown", this._bindControllersOff, !1), this._antiBlur = !0, typeof C.showController == "function" && C.showController(this.currentControllerName, this.controllerArray, this);
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
    setControllerPosition: function(a, r, f, p) {
      n.rtl && (p.left *= -1);
      const g = o.getOffset(r, e.element.wysiwygFrame);
      a.style.visibility = "hidden", a.style.display = "block";
      const b = f === "top" ? -(a.offsetHeight + 2) : r.offsetHeight + 12;
      a.style.top = g.top + b + p.top + "px";
      const h = g.left - e.element.wysiwygFrame.scrollLeft + p.left, y = a.offsetWidth, w = r.offsetWidth, _ = o.hasClass(a.firstElementChild, "se-arrow") ? a.firstElementChild : null;
      if (n.rtl) {
        const S = y > w ? y - w : 0, I = S > 0 ? 0 : w - y;
        a.style.left = h - S + I + "px", S > 0 && _ && (_.style.left = (y - 14 < 10 + S ? y - 14 : 10 + S) + "px");
        const L = e.element.wysiwygFrame.offsetLeft - a.offsetLeft;
        L > 0 && (a.style.left = "0px", _ && (_.style.left = L + "px"));
      } else {
        a.style.left = h + "px";
        const S = e.element.wysiwygFrame.offsetWidth - (a.offsetLeft + y);
        S < 0 ? (a.style.left = a.offsetLeft + S + "px", _ && (_.style.left = 20 - S + "px")) : _ && (_.style.left = "20px");
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
                const f = o.createElement(n.defaultTag), p = o.createElement("BR");
                f.appendChild(p), e.element.wysiwyg.insertBefore(f, r), this.setRange(p, 0, p, 0);
                return;
              }
            }
            this.setRange(a.startContainer, a.startOffset, a.endContainer, a.endOffset);
          } catch {
            this.nativeFocus();
          }
        m._applyTagEffects(), this._isBalloon && m._toggleToolbarBalloon();
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
    setRange: function(a, r, f, p) {
      if (!a || !f) return;
      r > a.textContent.length && (r = a.textContent.length), p > f.textContent.length && (p = f.textContent.length), o.isFormatElement(a) && (a = a.childNodes[r] || a.childNodes[r - 1] || a, r = r > 0 ? a.nodeType === 1 ? 1 : a.textContent ? a.textContent.length : 0 : 0), o.isFormatElement(f) && (f = f.childNodes[p] || f.childNodes[p - 1] || f, p = p > 0 ? f.nodeType === 1 ? 1 : f.textContent ? f.textContent.length : 0 : 0);
      const g = this._wd.createRange();
      try {
        g.setStart(a, r), g.setEnd(f, p);
      } catch (h) {
        console.warn("[SUNEDITOR.core.focus.error] " + h), this.nativeFocus();
        return;
      }
      const b = this.getSelection();
      return b.removeAllRanges && b.removeAllRanges(), b.addRange(g), this._rangeInfo(g, this.getSelection()), n.iframe && this.__focus(), g;
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
        const f = r.anchorNode, p = r.focusNode, g = r.anchorOffset, b = r.focusOffset, h = o.compareElements(f, p), y = h.ancestor && (h.result === 0 ? g <= b : h.result > 1);
        return this.setRange(
          y ? f : p,
          y ? g : b,
          y ? p : f,
          y ? b : g
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
        const f = e.element.wysiwyg, p = o.createElement(n.defaultTag);
        p.innerHTML = "<br>", f.insertBefore(p, r && r !== f ? r.nextElementSibling : f.firstElementChild), this.setRange(p.firstElementChild, 0, p.firstElementChild, 1), a = this._variable._range;
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
      let f = a.firstElementChild, p = null;
      return f ? (p = f.firstChild, p || (p = o.createElement("BR"), f.appendChild(p))) : (f = o.createElement(n.defaultTag), p = o.createElement("BR"), f.appendChild(p), a.appendChild(f)), r.setStart(p, 0), r.setEnd(p, 0), r;
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
      let f = a.startContainer, p = a.startOffset, g = a.endContainer, b = a.endOffset, h, y, w;
      if (o.isFormatElement(f))
        for (f.childNodes[p] ? (f = f.childNodes[p] || f, p = 0) : (f = f.lastChild || f, p = f.textContent.length); f && f.nodeType === 1 && f.firstChild; )
          f = f.firstChild || f, p = 0;
      if (o.isFormatElement(g)) {
        for (g = g.childNodes[b] || g.lastChild || g; g && g.nodeType === 1 && g.lastChild; )
          g = g.lastChild;
        b = r ? 0 : g.textContent.length;
      }
      if (h = o.isWysiwygDiv(f) ? e.element.wysiwyg.firstChild : f, y = p, o.isBreak(h) || h.nodeType === 1 && h.childNodes.length > 0) {
        const _ = o.isBreak(h);
        if (!_) {
          for (; h && !o.isBreak(h) && h.nodeType === 1; )
            h = h.childNodes[y] || h.nextElementSibling || h.nextSibling, y = 0;
          let S = o.getFormatElement(h, null);
          S === o.getRangeFormatElement(S, null) && (S = o.createElement(o.getParentElement(h, o.isCell) ? "DIV" : n.defaultTag), h.parentNode.insertBefore(S, h), S.appendChild(h));
        }
        if (o.isBreak(h)) {
          const S = o.createTextNode(o.zeroWidthSpace);
          h.parentNode.insertBefore(S, h), h = S, _ && f === g && (g = h, b = 1);
        }
      }
      if (f = h, p = y, h = o.isWysiwygDiv(g) ? e.element.wysiwyg.lastChild : g, y = b, o.isBreak(h) || h.nodeType === 1 && h.childNodes.length > 0) {
        const _ = o.isBreak(h);
        if (!_) {
          for (; h && !o.isBreak(h) && h.nodeType === 1 && (w = h.childNodes, w.length !== 0); )
            h = w[y > 0 ? y - 1 : y] || !/FIGURE/i.test(w[0].nodeName) ? w[0] : h.previousElementSibling || h.previousSibling || f, y = y > 0 ? h.textContent.length : y;
          let S = o.getFormatElement(h, null);
          S === o.getRangeFormatElement(S, null) && (S = o.createElement(o.isCell(S) ? "DIV" : n.defaultTag), h.parentNode.insertBefore(S, h), S.appendChild(h));
        }
        if (o.isBreak(h)) {
          const S = o.createTextNode(o.zeroWidthSpace);
          h.parentNode.insertBefore(S, h), h = S, y = 1, _ && !h.previousSibling && o.removeItem(g);
        }
      }
      return g = h, b = y, this.setRange(f, p, g, b), !0;
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
        const D = e.element.wysiwyg.children;
        if (D.length === 0) return [];
        this.setRange(D[0], 0, D[D.length - 1], D[D.length - 1].textContent.trim().length), r = this.getRange();
      }
      const f = r.startContainer, p = r.endContainer, g = r.commonAncestorContainer, b = o.getListChildren(g, function(D) {
        return a ? a(D) : o.isFormatElement(D);
      });
      if (!o.isWysiwygDiv(g) && !o.isRangeFormatElement(g) && b.unshift(o.getFormatElement(g, null)), f === p || b.length === 1) return b;
      let h = o.getFormatElement(f, null), y = o.getFormatElement(p, null), w = null, _ = null;
      const S = function(D) {
        return o.isTable(D) ? /^TABLE$/i.test(D.nodeName) : !0;
      };
      let I = o.getRangeFormatElement(h, S), L = o.getRangeFormatElement(y, S);
      o.isTable(I) && o.isListCell(I.parentNode) && (I = I.parentNode), o.isTable(L) && o.isListCell(L.parentNode) && (L = L.parentNode);
      const B = I === L;
      for (let D = 0, W = b.length, P; D < W; D++) {
        if (P = b[D], h === P || !B && P === I) {
          w = D;
          continue;
        }
        if (y === P || !B && P === L) {
          _ = D;
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
      const r = this.getRange().commonAncestorContainer, f = o.getParentElement(r, o.isComponent), p = o.isTable(r) ? this.getSelectedElements(null) : this.getSelectedElements((function(g) {
        const b = this.getParentElement(g, this.isComponent);
        return this.isFormatElement(g) && (!b || b === f) || this.isComponent(g) && !this.getFormatElement(g);
      }).bind(o));
      if (a) {
        for (let g = 0, b = p.length; g < b; g++)
          for (let h = g - 1; h >= 0; h--)
            if (p[h].contains(p[g])) {
              p.splice(g, 1), g--, b--;
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
      const p = [];
      for (f = f === "start" ? "previousSibling" : "nextSibling"; a && !o.isFormatElement(a) && !o.isWysiwygDiv(a); )
        if (!a[f] || o.isBreak(a[f]) && !a[f][f])
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
      const f = o.getFormatElement(this.getSelectionNode(), null);
      let p = null;
      if (!o.isFormatElement(a) && o.isFreeFormatElement(f || a.parentNode))
        p = o.createElement("BR");
      else {
        const g = r ? typeof r == "string" ? r : r.nodeName : o.isFormatElement(f) && !o.isRangeFormatElement(f) && !o.isFreeFormatElement(f) ? f.nodeName : n.defaultTag;
        p = o.createElement(g), p.innerHTML = "<br>", (r && typeof r != "string" || !r && o.isFormatElement(f)) && o.copyTagAttributes(p, r || f, ["id"]);
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
    insertComponent: function(a, r, f, p) {
      if (this.isReadOnly || f && !this.checkCharCount(a, null))
        return null;
      const g = this.removeNode();
      this.getRange_addLine(this.getRange(), g.container);
      let b = null, h = this.getSelectionNode(), y = o.getFormatElement(h, null);
      if (o.isListCell(y))
        this.insertNode(a, h === y ? null : g.container.nextSibling, !1), a.nextSibling || a.parentNode.appendChild(o.createElement("BR"));
      else {
        if (this.getRange().collapsed && (g.container.nodeType === 3 || o.isBreak(g.container))) {
          const w = o.getParentElement(g.container, (function(_) {
            return this.isRangeFormatElement(_);
          }).bind(o));
          b = o.splitElement(g.container, g.offset, w ? o.getElementDepth(w) + 1 : 0), b && (y = b.previousSibling);
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
      f && d.setTimeout((function() {
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
      const r = o.getParentElement(a, o.isComponent), f = e.element.lineBreaker_t.style, p = e.element.lineBreaker_b.style, g = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : a, b = o.isListCell(r.parentNode);
      let h, y, w;
      (b ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) ? (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, h = o.getOffset(a, e.element.wysiwygFrame).top + y, w = g.offsetWidth / 2 / 2, f.top = h - y - 12 + "px", f.left = o.getOffset(g).left + w + "px", f.display = "block") : f.display = "none", (b ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) ? (h || (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, h = o.getOffset(a, e.element.wysiwygFrame).top + y, w = g.offsetWidth / 2 / 2), p.top = h + g.offsetHeight - y - 12 + "px", p.left = o.getOffset(g).left + g.offsetWidth - w - 24 + "px", p.display = "block") : p.display = "none";
    },
    _checkDuplicateNode: function(a, r) {
      (function f(p) {
        u._dupleCheck(p, r);
        const g = p.childNodes;
        for (let b = 0, h = g.length; b < h; b++)
          f(g[b]);
      })(a);
    },
    _dupleCheck: function(a, r) {
      if (!o.isTextStyleElement(a)) return;
      const f = (a.style.cssText.match(/[^;]+;/g) || []).map(function(b) {
        return b.trim();
      }), p = a.nodeName;
      if (/^span$/i.test(p) && f.length === 0) return a;
      let g = !1;
      return function b(h) {
        if (!(o.isWysiwygDiv(h) || !o.isTextStyleElement(h))) {
          if (h.nodeName === p) {
            g = !0;
            const y = h.style.cssText.match(/[^;]+;/g) || [];
            for (let w = 0, _ = y.length, S; w < _; w++)
              (S = f.indexOf(y[w].trim())) > -1 && f.splice(S, 1);
            for (let w = 0, _ = h.classList.length; w < _; w++)
              a.classList.remove(h.classList[w]);
          }
          b(h.parentElement);
        }
      }(r), g && ((a.style.cssText = f.join(" ")) || (a.setAttribute("style", ""), a.removeAttribute("style")), a.attributes.length || a.setAttribute("data-se-duple", "true")), a;
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
      let p = null, g = this.getRange(), b = o.isListCell(g.commonAncestorContainer) ? g.commonAncestorContainer : o.getFormatElement(this.getSelectionNode(), null), h = o.isListCell(b) && (o.isListCell(a) || o.isList(a)), y, w, _, S = null;
      const I = o.isFreeFormatElement(b), L = !I && (o.isFormatElement(a) || o.isRangeFormatElement(a)) || o.isComponent(a);
      if (h && (_ = r || o.isList(a) ? b.lastChild : b.nextElementSibling, S = o.isList(a) ? b : (_ || b).parentNode), !r && (L || o.isComponent(a) || o.isMedia(a))) {
        const U = this.isEdgePoint(g.endContainer, g.endOffset, "end"), A = this.removeNode(), O = A.container, N = O === A.prevContainer && g.collapsed ? null : A.prevContainer;
        if (h && N)
          if (S = N.nodeType === 3 ? N.parentNode : N, S.contains(O)) {
            let V = !0;
            for (_ = O; _.parentNode && _.parentNode !== S; )
              _ = _.parentNode, V = !1;
            V && O === N && (_ = _.nextSibling);
          } else
            _ = null;
        else if (h && o.isListCell(O) && !b.parentElement)
          b = o.createElement("LI"), S.appendChild(b), O.appendChild(S), _ = null;
        else if (O.nodeType === 3 || o.isBreak(O) || h) {
          const V = o.getParentElement(O, (function(E) {
            return this.isRangeFormatElement(E) || this.isListCell(E);
          }).bind(o));
          if (r = o.splitElement(O, A.offset, V ? o.getElementDepth(V) + 1 : 0), !r)
            _ = r = b;
          else if (h) {
            if (b.contains(O)) {
              const E = o.isList(b.lastElementChild);
              let M = null;
              U || (M = b.cloneNode(!1), M.appendChild(r.textContent.trim() ? r : o.createTextNode(o.zeroWidthSpace))), E && (M || (M = b.cloneNode(!1), M.appendChild(o.createTextNode(o.zeroWidthSpace))), M.appendChild(b.lastElementChild)), M && (b.parentNode.insertBefore(M, b.nextElementSibling), _ = r = M);
            }
          } else
            r = r.previousSibling;
        }
      }
      g = !r && !L ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const B = g.commonAncestorContainer, D = g.startOffset, W = g.endOffset, P = g.startContainer === B && o.isFormatElement(B), H = P && (B.childNodes[D] || B.childNodes[0]) || g.startContainer, R = P && (B.childNodes[W] || B.childNodes[B.childNodes.length - 1]) || g.endContainer;
      if (!h)
        if (r)
          y = r.parentNode, r = r.nextSibling, w = !0;
        else if (y = H, H.nodeType === 3 && (y = H.parentNode), g.collapsed)
          if (B.nodeType === 3)
            B.textContent.length > W ? r = B.splitText(W) : r = B.nextSibling;
          else if (o.isBreak(y))
            r = y, y = y.parentNode;
          else {
            let U = y.childNodes[D];
            const A = U && U.nodeType === 3 && o.onlyZeroWidthSpace(U) && o.isBreak(U.nextSibling) ? U.nextSibling : U;
            A ? !A.nextSibling && o.isBreak(A) ? (y.removeChild(A), r = null) : r = o.isBreak(A) && !o.isBreak(a) ? A : A.nextSibling : r = null;
          }
        else if (H === R) {
          this.isEdgePoint(R, W) ? r = R.nextSibling : r = R.splitText(W);
          let A = H;
          this.isEdgePoint(H, D) || (A = H.splitText(D)), y.removeChild(A), y.childNodes.length === 0 && L && (y.innerHTML = "<br>");
        } else {
          const A = this.removeNode(), O = A.container, N = A.prevContainer;
          if (O && O.childNodes.length === 0 && L && (o.isFormatElement(O) ? O.innerHTML = "<br>" : o.isRangeFormatElement(O) && (O.innerHTML = "<" + n.defaultTag + "><br></" + n.defaultTag + ">")), o.isListCell(O) && a.nodeType === 3)
            y = O, r = null;
          else if (!L && N)
            if (y = N.nodeType === 3 ? N.parentNode : N, y.contains(O)) {
              let V = !0;
              for (r = O; r.parentNode && r.parentNode !== y; )
                r = r.parentNode, V = !1;
              V && O === N && (r = r.nextSibling);
            } else
              r = null;
          else o.isWysiwygDiv(O) && !o.isFormatElement(a) ? (y = O.appendChild(o.createElement(n.defaultTag)), r = null) : (r = L ? R : O === N ? O.nextSibling : O, y = !r || !r.parentNode ? B : r.parentNode);
          for (; r && !o.isFormatElement(r) && r.parentNode !== B; )
            r = r.parentNode;
        }
      try {
        if (!h) {
          if ((o.isWysiwygDiv(r) || y === e.element.wysiwyg.parentNode) && (y = e.element.wysiwyg, r = null), o.isFormatElement(a) || o.isRangeFormatElement(a) || !o.isListCell(y) && o.isComponent(a)) {
            const U = y;
            if (o.isList(r))
              y = r, r = null;
            else if (o.isListCell(r))
              y = r.previousElementSibling || r;
            else if (!w && !r) {
              const A = this.removeNode(), O = A.container.nodeType === 3 ? o.isListCell(o.getFormatElement(A.container, null)) ? A.container : o.getFormatElement(A.container, null) || A.container.parentNode : A.container, N = o.isWysiwygDiv(O) || o.isRangeFormatElement(O);
              y = N ? O : O.parentNode, r = N ? null : O.nextSibling;
            }
            U.childNodes.length === 0 && y !== U && o.removeItem(U);
          }
          if (L && !I && !o.isRangeFormatElement(y) && !o.isListCell(y) && !o.isWysiwygDiv(y) && (r = y.nextElementSibling, y = y.parentNode), o.isWysiwygDiv(y) && (a.nodeType === 3 || o.isBreak(a))) {
            const U = o.createElement(n.defaultTag);
            U.appendChild(a), p = a, a = U;
          }
        }
        if (h ? S.parentNode ? (y = S, r = _) : (y = e.element.wysiwyg, r = null) : r = y === r ? y.lastChild : r, o.isListCell(a) && !o.isList(y)) {
          if (o.isListCell(y))
            r = y.nextElementSibling, y = y.parentNode;
          else {
            const U = o.createElement("ol");
            y.insertBefore(U, r), y = U, r = null;
          }
          h = !0;
        }
        if (this._checkDuplicateNode(a, y), y.insertBefore(a, r), h)
          if (o.onlyZeroWidthSpace(b.textContent.trim()))
            o.removeItem(b), a = a.lastChild;
          else {
            const U = o.getArrayItem(b.children, o.isList);
            U && (a !== U ? (a.appendChild(U), a = U.previousSibling) : (y.appendChild(a), a = y), o.onlyZeroWidthSpace(b.textContent.trim()) && o.removeItem(b));
          }
      } catch (U) {
        y.appendChild(a), console.warn("[SUNEDITOR.insertNode.warn] " + U);
      } finally {
        p && (a = p);
        const U = y.querySelectorAll("[data-se-duple]");
        if (U.length > 0)
          for (let A = 0, O = U.length, N, V, E, M; A < O; A++) {
            for (N = U[A], E = N.childNodes, M = N.parentNode; E[0]; )
              V = E[0], M.insertBefore(V, N);
            N === a && (a = V), o.removeItem(N);
          }
        if ((o.isFormatElement(a) || o.isComponent(a)) && H === R) {
          const A = o.getFormatElement(B, null);
          A && A.nodeType === 1 && o.isEmptyLine(A) && o.removeItem(A);
        }
        if (I && (o.isFormatElement(a) || o.isRangeFormatElement(a)) && (a = this._setIntoFreeFormat(a)), !o.isComponent(a)) {
          let A = 1;
          if (a.nodeType === 3)
            A = a.textContent.length, this.setRange(a, A, a, A);
          else if (!o.isBreak(a) && !o.isListCell(a) && o.isFormatElement(y)) {
            let O = null;
            (!a.previousSibling || o.isBreak(a.previousSibling)) && (O = o.createTextNode(o.zeroWidthSpace), a.parentNode.insertBefore(O, a)), (!a.nextSibling || o.isBreak(a.nextSibling)) && (O = o.createTextNode(o.zeroWidthSpace), a.parentNode.insertBefore(O, a.nextSibling)), o._isIgnoreNodeChange(a) && (a = a.nextSibling, A = 0);
          }
          this.setRange(a, A, a, A);
        }
        return a;
      }
    },
    _setIntoFreeFormat: function(a) {
      const r = a.parentNode;
      let f, p;
      for (; o.isFormatElement(a) || o.isRangeFormatElement(a); ) {
        for (f = a.childNodes, p = null; f[0]; ) {
          if (p = f[0], o.isFormatElement(p) || o.isRangeFormatElement(p)) {
            if (this._setIntoFreeFormat(p), !a.parentNode) break;
            f = a.childNodes;
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
        const A = o.getParentElement(a.startContainer, o.isMediaComponent);
        if (A) {
          const O = o.createElement("BR"), N = o.createElement(n.defaultTag);
          return N.appendChild(O), o.changeElement(A, N), u.setRange(N, 0, N, 0), this.history.push(!0), {
            container: N,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const r = a.startOffset === 0, f = u.isEdgePoint(a.endContainer, a.endOffset, "end");
      let p = null, g = null, b = null;
      r && (g = o.getFormatElement(a.startContainer), g && (p = g.previousElementSibling, g = p)), f && (b = o.getFormatElement(a.endContainer), b = b && b.nextElementSibling);
      let h, y = 0, w = a.startContainer, _ = a.endContainer, S = a.startOffset, I = a.endOffset;
      const L = a.commonAncestorContainer.nodeType === 3 && a.commonAncestorContainer.parentNode === w.parentNode ? w.parentNode : a.commonAncestorContainer;
      if (L === w && L === _ && (w = L.children[S], _ = L.children[I], S = I = 0), !w || !_) return {
        container: L,
        offset: 0
      };
      if (w === _ && a.collapsed && w.textContent && o.onlyZeroWidthSpace(w.textContent.substr(S)))
        return {
          container: w,
          offset: S,
          prevContainer: w && w.parentNode ? w : null
        };
      let B = null, D = null;
      const W = o.getListChildNodes(L, null);
      let P = o.getArrayIndex(W, w), H = o.getArrayIndex(W, _);
      if (W.length > 0 && P > -1 && H > -1) {
        for (let A = P + 1, O = w; A >= 0; A--)
          W[A] === O.parentNode && W[A].firstChild === O && S === 0 && (P = A, O = O.parentNode);
        for (let A = H - 1, O = _; A > P; A--)
          W[A] === O.parentNode && W[A].nodeType === 1 && (W.splice(A, 1), O = O.parentNode, --H);
      } else {
        if (W.length === 0) {
          if (o.isFormatElement(L) || o.isRangeFormatElement(L) || o.isWysiwygDiv(L) || o.isBreak(L) || o.isMedia(L))
            return {
              container: L,
              offset: 0
            };
          if (L.nodeType === 3)
            return {
              container: L,
              offset: I
            };
          W.push(L), w = _ = L;
        } else if (w = _ = W[0], o.isBreak(w) || o.onlyZeroWidthSpace(w))
          return {
            container: o.isMedia(L) ? L : w,
            offset: 0
          };
        P = H = 0;
      }
      for (let A = P; A <= H; A++) {
        const O = W[A];
        if (O.length === 0 || O.nodeType === 3 && O.data === void 0) {
          this._nodeRemoveListItem(O);
          continue;
        }
        if (O === w) {
          if (w.nodeType === 1) {
            if (o.isComponent(w)) continue;
            B = o.createTextNode(w.textContent);
          } else
            O === _ ? (B = o.createTextNode(w.substringData(0, S) + _.substringData(I, _.length - I)), y = S) : B = o.createTextNode(w.substringData(0, S));
          if (B.length > 0 ? w.data = B.data : this._nodeRemoveListItem(w), O === _) break;
          continue;
        }
        if (O === _) {
          if (_.nodeType === 1) {
            if (o.isComponent(_)) continue;
            D = o.createTextNode(_.textContent);
          } else
            D = o.createTextNode(_.substringData(I, _.length - I));
          D.length > 0 ? _.data = D.data : this._nodeRemoveListItem(_);
          continue;
        }
        this._nodeRemoveListItem(O);
      }
      const R = o.getParentElement(_, "ul"), U = o.getParentElement(w, "li");
      if (R && U && U.contains(R) ? (h = R.previousSibling, y = h.textContent.length) : (h = _ && _.parentNode ? _ : w && w.parentNode ? w : a.endContainer || a.startContainer, y = !r && !f ? y : f ? h.textContent.length : 0), !o.isWysiwygDiv(h) && h.childNodes.length === 0) {
        const A = o.removeItemAllParents(h, null, null);
        A && (h = A.sc || A.ec || e.element.wysiwyg);
      }
      return !o.getFormatElement(h) && !(w && w.parentNode) && (b ? (h = b, y = 0) : g && (h = g, y = 1)), this.setRange(h, y, h, y), this.history.push(!0), {
        container: h,
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
        for (let I = 0, L = r.length, B, D, W, P, H, R; I < L; I++)
          if (B = r[I], !!o.isListCell(B) && (D = B.lastElementChild, D && o.isListCell(B.nextElementSibling) && r.indexOf(B.nextElementSibling) > -1 && (P = D.lastElementChild, r.indexOf(P) > -1))) {
            let U = null;
            for (; U = P.lastElementChild; )
              if (o.isList(U))
                if (r.indexOf(U.lastElementChild) > -1)
                  P = U.lastElementChild;
                else
                  continue e;
            W = D.firstElementChild, H = r.indexOf(W), R = r.indexOf(P), r.splice(H, R - H + 1), L = r.length;
            continue;
          }
      let f = r[r.length - 1], p, g, b;
      o.isRangeFormatElement(f) || o.isFormatElement(f) ? p = f : p = o.getRangeFormatElement(f, null) || o.getFormatElement(f, null), o.isCell(p) ? (g = null, b = p) : (g = p.nextSibling, b = p.parentNode);
      let h = o.getElementDepth(p), y = null;
      const w = [], _ = function(I, L, B) {
        let D = null;
        if (I !== L && !o.isTable(L)) {
          if (L && o.getElementDepth(I) === o.getElementDepth(L)) return B;
          D = o.removeItemAllParents(L, null, I);
        }
        return D ? D.ec : B;
      };
      for (let I = 0, L = r.length, B, D, W, P, H, R, U; I < L; I++)
        if (B = r[I], D = B.parentNode, !(!D || a.contains(D)))
          if (W = o.getElementDepth(B), o.isList(D)) {
            if (y === null && (R ? (y = R, U = !0, R = null) : y = D.cloneNode(!1)), w.push(B), H = r[I + 1], I === L - 1 || H && H.parentNode !== D) {
              H && B.contains(H.parentNode) && (R = H.parentNode.cloneNode(!1));
              let A = D.parentNode, O;
              for (; o.isList(A); )
                O = o.createElement(A.nodeName), O.appendChild(y), y = O, A = A.parentNode;
              const N = this.detachRangeFormatElement(D, w, null, !0, !0);
              h >= W ? (h = W, b = N.cc, g = _(b, D, N.ec), g && (b = g.parentNode)) : b === N.cc && (g = N.ec), b !== N.cc && (P = _(b, N.cc, P), P !== void 0 ? g = P : g = N.cc);
              for (let V = 0, E = N.removeArray.length; V < E; V++)
                y.appendChild(N.removeArray[V]);
              U || a.appendChild(y), R && N.removeArray[N.removeArray.length - 1].appendChild(R), y = null, U = !1;
            }
          } else
            h >= W && (h = W, b = D, g = B.nextSibling), a.appendChild(B), b !== D && (P = _(b, D), P !== void 0 && (g = P));
      if (this.effectNode = null, o.mergeSameTags(a, null, !1), o.mergeNestedTags(a, (function(I) {
        return this.isList(I);
      }).bind(o)), g && o.getElementDepth(g) > 0 && (o.isList(g.parentNode) || o.isList(g.parentNode.parentNode))) {
        const I = o.getParentElement(g, (function(B) {
          return this.isRangeFormatElement(B) && !this.isList(B);
        }).bind(o)), L = o.splitElement(g, null, I ? o.getElementDepth(I) + 1 : 0);
        L.parentNode.insertBefore(a, L);
      } else
        b.insertBefore(a, g), _(a, g);
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
    detachRangeFormatElement: function(a, r, f, p, g) {
      const b = this.getRange();
      let h = b.startOffset, y = b.endOffset, w = o.getListChildNodes(a, function(N) {
        return N.parentNode === a;
      }), _ = a.parentNode, S = null, I = null, L = a.cloneNode(!1);
      const B = [], D = o.isList(f);
      let W = !1, P = !1, H = !1;
      function R(N, V, E, M) {
        if (o.onlyZeroWidthSpace(V) && (V.innerHTML = o.zeroWidthSpace, h = y = 1), V.nodeType === 3)
          return N.insertBefore(V, E), V;
        const Y = (H ? V : M).childNodes;
        let Z = V.cloneNode(!1), le = null, X = null;
        for (; Y[0]; )
          X = Y[0], o._notTextNode(X) && !o.isBreak(X) && !o.isListCell(Z) ? (Z.childNodes.length > 0 && (le || (le = Z), N.insertBefore(Z, E), Z = V.cloneNode(!1)), N.insertBefore(X, E), le || (le = X)) : Z.appendChild(X);
        if (Z.childNodes.length > 0) {
          if (o.isListCell(N) && o.isListCell(Z) && o.isList(E))
            if (D) {
              for (le = E; E; )
                Z.appendChild(E), E = E.nextSibling;
              N.parentNode.insertBefore(Z, N.nextElementSibling);
            } else {
              const J = M.nextElementSibling, oe = o.detachNestedList(M, !1);
              if (a !== oe || J !== M.nextElementSibling) {
                const me = Z.childNodes;
                for (; me[0]; )
                  M.appendChild(me[0]);
                a = oe, P = !0;
              }
            }
          else
            N.insertBefore(Z, E);
          le || (le = Z);
        }
        return le;
      }
      for (let N = 0, V = w.length, E, M, Y; N < V; N++)
        if (E = w[N], !(E.nodeType === 3 && o.isList(L)))
          if (H = !1, p && N === 0 && (!r || r.length === V || r[0] === E ? S = a.previousSibling : S = L), r && (M = r.indexOf(E)), r && M === -1)
            L || (L = a.cloneNode(!1)), L.appendChild(E);
          else {
            if (r && (Y = r[M + 1]), L && L.children.length > 0 && (_.insertBefore(L, a), L = null), !D && o.isListCell(E))
              if (Y && o.getElementDepth(E) !== o.getElementDepth(Y) && (o.isListCell(_) || o.getArrayItem(E.children, o.isList, !1))) {
                const Z = E.nextElementSibling, le = o.detachNestedList(E, !1);
                (a !== le || Z !== E.nextElementSibling) && (a = le, P = !0);
              } else {
                const Z = E;
                E = o.createElement(p ? Z.nodeName : o.isList(a.parentNode) || o.isListCell(a.parentNode) ? "LI" : o.isCell(a.parentNode) ? "DIV" : n.defaultTag);
                const le = o.isListCell(E), X = Z.childNodes;
                for (; X[0] && !(o.isList(X[0]) && !le); )
                  E.appendChild(X[0]);
                o.copyFormatAttributes(E, Z), H = !0;
              }
            else
              E = E.cloneNode(!1);
            if (!P && (p ? (B.push(E), o.removeItem(w[N])) : (f ? (W || (_.insertBefore(f, a), W = !0), E = R(f, E, null, w[N])) : E = R(_, E, a, w[N]), P || (r ? (I = E, S || (S = E)) : S || (S = I = E))), P)) {
              P = H = !1, w = o.getListChildNodes(a, function(Z) {
                return Z.parentNode === a;
              }), L = a.cloneNode(!1), _ = a.parentNode, N = -1, V = w.length;
              continue;
            }
          }
      const U = a.parentNode;
      let A = a.nextSibling;
      L && L.children.length > 0 && U.insertBefore(L, A), f ? S = f.previousSibling : S || (S = a.previousSibling), A = a.nextSibling !== L ? a.nextSibling : L ? L.nextSibling : null, a.children.length === 0 || a.textContent.length === 0 ? o.removeItem(a) : o.removeEmptyNode(a, null, !1);
      let O = null;
      if (p)
        O = {
          cc: U,
          sc: S,
          so: h,
          ec: A,
          eo: y,
          removeArray: B
        };
      else {
        S || (S = I), I || (I = S);
        const N = o.getEdgeChildNodes(S, I.parentNode ? S : I);
        O = {
          cc: (N.sc || N.ec).parentNode,
          sc: N.sc,
          so: h,
          ec: N.ec,
          eo: y,
          removeArray: null
        };
      }
      if (this.effectNode = null, g) return O;
      !p && O && (r ? this.setRange(O.sc, h, O.ec, y) : this.setRange(O.sc, 0, O.sc, 0)), this.history.push(!1);
    },
    /**
     * @description "selectedFormats" array are detached from the list element.
     * The return value is applied when the first and last lines of "selectedFormats" are "LI" respectively.
     * @param {Array} selectedFormats Array of format elements (LI, P...) to remove.
     * @param {Boolean} remove If true, deleted without detached.
     * @returns {Object} {sc: <LI>, ec: <LI>}.
     */
    detachList: function(a, r) {
      let f = {}, p = !1, g = !1, b = null, h = null;
      const y = (function(w) {
        return !this.isComponent(w);
      }).bind(o);
      for (let w = 0, _ = a.length, S, I, L, B; w < _; w++) {
        if (L = w === _ - 1, I = o.getRangeFormatElement(a[w], y), B = o.isList(I), !S && B)
          S = I, f = { r: S, f: [o.getParentElement(a[w], "LI")] }, w === 0 && (p = !0);
        else if (S && B)
          if (S !== I) {
            const D = this.detachRangeFormatElement(f.f[0].parentNode, f.f, null, r, !0);
            I = a[w].parentNode, p && (b = D.sc, p = !1), L && (h = D.ec), B ? (S = I, f = { r: S, f: [o.getParentElement(a[w], "LI")] }, L && (g = !0)) : S = null;
          } else
            f.f.push(o.getParentElement(a[w], "LI")), L && (g = !0);
        if (L && o.isList(S)) {
          const D = this.detachRangeFormatElement(f.f[0].parentNode, f.f, null, r, !0);
          (g || _ === 1) && (h = D.ec), p && (b = D.sc || h);
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
    nodeChange: function(a, r, f, p) {
      this._resetRangeToTextNode();
      let g = this.getRange_addLine(this.getRange(), null);
      r = r && r.length > 0 ? r : !1, f = f && f.length > 0 ? f : !1;
      const b = !a, h = b && !f && !r;
      let y = g.startContainer, w = g.startOffset, _ = g.endContainer, S = g.endOffset;
      if (h && g.collapsed && o.isFormatElement(y.parentNode) || y === _ && y.nodeType === 1 && o.isNonEditable(y)) {
        const X = y.parentNode;
        if (!o.isListCell(X) || !o.getValues(X.style).some((function(J) {
          return this._listKebab.indexOf(J) > -1;
        }).bind(this))) return;
      }
      if (g.collapsed && !h && y.nodeType === 1 && !o.isBreak(y) && !o.isComponent(y)) {
        let X = null;
        const J = y.childNodes[w];
        J && (J.nextSibling ? X = o.isBreak(J) ? J : J.nextSibling : X = null);
        const oe = o.createTextNode(o.zeroWidthSpace);
        y.insertBefore(oe, X), this.setRange(oe, 1, oe, 1), g = this.getRange(), y = g.startContainer, w = g.startOffset, _ = g.endContainer, S = g.endOffset;
      }
      o.isFormatElement(y) && (y = y.childNodes[w] || y.firstChild, w = 0), o.isFormatElement(_) && (_ = _.childNodes[S] || _.lastChild, S = _.textContent.length), b && (a = o.createElement("DIV"));
      const I = d.RegExp, L = a.nodeName;
      if (!h && y === _ && !f && a) {
        let X = y, J = 0;
        const oe = [], me = a.style;
        for (let ue = 0, Ce = me.length; ue < Ce; ue++)
          oe.push(me[ue]);
        const ye = a.classList;
        for (let ue = 0, Ce = ye.length; ue < Ce; ue++)
          oe.push("." + ye[ue]);
        if (oe.length > 0) {
          for (; !o.isFormatElement(X) && !o.isWysiwygDiv(X); ) {
            for (let ue = 0; ue < oe.length; ue++)
              if (X.nodeType === 1) {
                const Ce = oe[ue], Oe = /^\./.test(Ce) ? new I("\\s*" + Ce.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, et = b ? !!X.style[Ce] : !!X.style[Ce] && !!a.style[Ce] && X.style[Ce] === a.style[Ce], Se = Oe === !1 ? !1 : b ? !!X.className.match(Oe) : !!X.className.match(Oe) && !!a.className.match(Oe);
                (et || Se) && J++;
              }
            X = X.parentNode;
          }
          if (J >= oe.length) return;
        }
      }
      let B = {}, D = {}, W, P = "", H = "", R = "";
      if (r) {
        for (let X = 0, J = r.length, oe; X < J; X++)
          oe = r[X], /^\./.test(oe) ? H += (H ? "|" : "\\s*(?:") + oe.replace(/^\./, "") : P += (P ? "|" : "(?:;|^|\\s)(?:") + oe;
        P && (P += ")\\s*:[^;]*\\s*(?:;|$)", P = new I(P, "ig")), H && (H += ")(?=\\s+|$)", H = new I(H, "ig"));
      }
      if (f) {
        R = "^(?:" + f[0];
        for (let X = 1; X < f.length; X++)
          R += "|" + f[X];
        R += ")$", R = new I(R, "i");
      }
      const U = d.Boolean, A = { v: !1 }, O = function(X) {
        const J = X.cloneNode(!1);
        if (J.nodeType === 3 || o.isBreak(J)) return J;
        if (h) return null;
        const oe = !R && b || R && R.test(J.nodeName);
        if (oe && !p)
          return A.v = !0, null;
        const me = J.style.cssText;
        let ye = "";
        P && me.length > 0 && (ye = me.replace(P, "").trim(), ye !== me && (A.v = !0));
        const ue = J.className;
        let Ce = "";
        return H && ue.length > 0 && (Ce = ue.replace(H, "").trim(), Ce !== ue && (A.v = !0)), b && (H || !ue) && (P || !me) && !ye && !Ce && oe ? (A.v = !0, null) : ye || Ce || J.nodeName !== L || U(P) !== U(me) || U(H) !== U(ue) ? (P && me.length > 0 && (J.style.cssText = ye), J.style.cssText || J.removeAttribute("style"), H && ue.length > 0 && (J.className = Ce.trim()), J.className.trim() || J.removeAttribute("class"), !J.style.cssText && !J.className && (J.nodeName === L || oe) ? (A.v = !0, null) : J) : (A.v = !0, null);
      }, N = this.getSelectedElements(null);
      g = this.getRange(), y = g.startContainer, w = g.startOffset, _ = g.endContainer, S = g.endOffset, o.getFormatElement(y, null) || (y = o.getChildElement(N[0], function(X) {
        return X.nodeType === 3;
      }, !1), w = 0), o.getFormatElement(_, null) || (_ = o.getChildElement(N[N.length - 1], function(X) {
        return X.nodeType === 3;
      }, !1), S = _.textContent.length);
      const V = o.getFormatElement(y, null) === o.getFormatElement(_, null), E = N.length - (V ? 0 : 1);
      W = a.cloneNode(!1);
      const M = h || b && function(X) {
        for (let J = 0, oe = X.length; J < oe; J++)
          if (o._isMaintainedNode(X[J]) || o._isSizeNode(X[J])) return !0;
        return !1;
      }(f), Y = b || o._isSizeNode(W), Z = this._util_getMaintainedNode.bind(o, M, Y), le = this._util_isMaintainedNode.bind(o, M, Y);
      if (V) {
        this._resetCommonListCell(N[0], r) && (g = this.setRange(y, w, _, S));
        const X = this._nodeChange_oneLine(N[0], W, O, y, w, _, S, h, b, g.collapsed, A, Z, le);
        B.container = X.startContainer, B.offset = X.startOffset, D.container = X.endContainer, D.offset = X.endOffset, B.container === D.container && o.onlyZeroWidthSpace(B.container) && (B.offset = D.offset = 1), this._setCommonListStyle(X.ancestor, null);
      } else {
        let X = !1;
        E > 0 && this._resetCommonListCell(N[E], r) && (X = !0), this._resetCommonListCell(N[0], r) && (X = !0), X && this.setRange(y, w, _, S), E > 0 && (W = a.cloneNode(!1), D = this._nodeChange_endLine(N[E], W, O, _, S, h, b, A, Z, le));
        for (let J = E - 1, oe; J > 0; J--)
          this._resetCommonListCell(N[J], r), W = a.cloneNode(!1), oe = this._nodeChange_middleLine(N[J], W, O, h, b, A, D.container), oe.endContainer && oe.ancestor.contains(oe.endContainer) && (D.ancestor = null, D.container = oe.endContainer), this._setCommonListStyle(oe.ancestor, null);
        W = a.cloneNode(!1), B = this._nodeChange_startLine(N[0], W, O, y, w, h, b, A, Z, le, D.container), B.endContainer && (D.ancestor = null, D.container = B.endContainer), E <= 0 ? D = B : D.container || (D.ancestor = null, D.container = B.container, D.offset = B.container.textContent.length), this._setCommonListStyle(B.ancestor, null), this._setCommonListStyle(D.ancestor || o.getFormatElement(D.container), null);
      }
      this.controllersOff(), this.setRange(B.container, B.offset, D.container, D.offset), this.history.push(!1);
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
      }, !0), p = a.style, g = [], b = [], h = o.getValues(p);
      for (let I = 0, L = this._listKebab.length; I < L; I++)
        h.indexOf(this._listKebab[I]) > -1 && r.indexOf(this._listKebab[I]) > -1 && (g.push(this._listCamel[I]), b.push(this._listKebab[I]));
      if (!g.length) return;
      const y = o.createElement("SPAN");
      for (let I = 0, L = g.length; I < L; I++)
        y.style[g[I]] = p[b[I]], p.removeProperty(b[I]);
      let w = y.cloneNode(!1), _ = null, S = !1;
      for (let I = 0, L = f.length, B, D; I < L; I++)
        B = f[I], !n._textTagsMap[B.nodeName.toLowerCase()] && (D = o.getValues(B.style), D.length === 0 || g.some(function(W) {
          return D.indexOf(W) === -1;
        }) && D.some(function(W) {
        }) ? (_ = B.nextSibling, w.appendChild(B)) : w.childNodes.length > 0 && (a.insertBefore(w, _), w = y.cloneNode(!1), _ = null, S = !0));
      return w.childNodes.length > 0 && (a.insertBefore(w, _), S = !0), p.length || a.removeAttribute("style"), S;
    },
    /**
     * @description If certain styles are applied to all child nodes of the list cell, the style of the list cell is also changed. (bold, color, size)
     * @param {Element} el List cell element. <li>
     * @param {Element|null} child Variable for recursive call. ("null" on the first call)
     * @private
     */
    _setCommonListStyle: function(a, r) {
      if (!o.isListCell(a)) return;
      const f = o.getArrayItem((r || a).childNodes, function(w) {
        return !o.isBreak(w);
      }, !0);
      if (r = f[0], !r || f.length > 1 || r.nodeType !== 1) return;
      const p = r.style, g = a.style, b = r.nodeName.toLowerCase();
      let h = !1;
      n._textTagsMap[b] === n._defaultCommand.bold.toLowerCase() && (g.fontWeight = "bold"), n._textTagsMap[b] === n._defaultCommand.italic.toLowerCase() && (g.fontStyle = "italic");
      const y = o.getValues(p);
      if (y.length > 0)
        for (let w = 0, _ = this._listCamel.length; w < _; w++)
          y.indexOf(this._listKebab[w]) > -1 && (g[this._listCamel[w]] = p[this._listCamel[w]], p.removeProperty(this._listKebab[w]), h = !0);
      if (this._setCommonListStyle(a, r), !!h && !p.length) {
        const w = r.childNodes, _ = r.parentNode, S = r.nextSibling;
        for (; w.length > 0; )
          _.insertBefore(w[0], S);
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
    _nodeChange_oneLine: function(a, r, f, p, g, b, h, y, w, _, S, I, L) {
      let B = p.parentNode;
      for (; !B.nextSibling && !B.previousSibling && !o.isFormatElement(B.parentNode) && !o.isWysiwygDiv(B.parentNode) && B.nodeName !== r.nodeName; )
        B = B.parentNode;
      if (!w && B === b.parentNode && B.nodeName === r.nodeName && o.onlyZeroWidthSpace(p.textContent.slice(0, g)) && o.onlyZeroWidthSpace(b.textContent.slice(h))) {
        const Se = B.childNodes;
        let Fe = !0;
        for (let De = 0, St = Se.length, Ze, ot, qe, ke; De < St; De++) {
          if (Ze = Se[De], ke = !o.onlyZeroWidthSpace(Ze), Ze === p) {
            ot = !0;
            continue;
          }
          if (Ze === b) {
            qe = !0;
            continue;
          }
          if (!ot && ke || ot && qe && ke) {
            Fe = !1;
            break;
          }
        }
        if (Fe)
          return o.copyTagAttributes(B, r), {
            ancestor: a,
            startContainer: p,
            startOffset: g,
            endContainer: b,
            endOffset: h
          };
      }
      S.v = !1;
      const D = a, W = [r], P = a.cloneNode(!1), H = p === b;
      let R = p, U = g, A = b, O = h, N = !1, V = !1, E, M, Y, Z, le;
      const X = d.RegExp;
      function J(Se) {
        const Fe = new X("(?:;|^|\\s)(?:" + Z + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let De = "";
        return Fe && Se.style.cssText.length > 0 && (De = Fe.test(Se.style.cssText)), !De;
      }
      if (function Se(Fe, De) {
        const St = Fe.childNodes;
        for (let Ze = 0, ot = St.length, qe; Ze < ot; Ze++) {
          let ke = St[Ze];
          if (!ke) continue;
          let ni = De, Et;
          if (!N && ke === R) {
            let Ke = P;
            le = I(ke);
            const Ie = o.createTextNode(R.nodeType === 1 ? "" : R.substringData(0, U)), Xe = o.createTextNode(
              R.nodeType === 1 ? "" : R.substringData(
                U,
                H && O >= U ? O - U : R.data.length - U
              )
            );
            if (le) {
              const ai = I(De);
              if (ai && ai.parentNode !== Ke) {
                let ht = ai, si = null;
                for (; ht.parentNode !== Ke; ) {
                  for (De = si = ht.parentNode.cloneNode(!1); ht.childNodes[0]; )
                    si.appendChild(ht.childNodes[0]);
                  ht.appendChild(si), ht = ht.parentNode;
                }
                ht.parentNode.appendChild(ai);
              }
              le = le.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(Ie) || De.appendChild(Ie);
            const je = I(De);
            for (je && (le = je), le && (Ke = le), M = ke, E = [], Z = ""; M !== Ke && M !== D && M !== null; )
              qe = L(M) ? null : f(M), qe && M.nodeType === 1 && J(M) && (E.push(qe), Z += M.style.cssText.substr(0, M.style.cssText.indexOf(":")) + "|"), M = M.parentNode;
            const oi = E.pop() || Xe;
            for (Y = M = oi; E.length > 0; )
              M = E.pop(), Y.appendChild(M), Y = M;
            if (r.appendChild(oi), Ke.appendChild(r), le && !I(A) && (r = r.cloneNode(!1), P.appendChild(r), W.push(r)), R = Xe, U = 0, N = !0, M !== Xe && M.appendChild(R), !H) continue;
          }
          if (!V && ke === A) {
            le = I(ke);
            const Ke = o.createTextNode(A.nodeType === 1 ? "" : A.substringData(O, A.length - O)), Ie = o.createTextNode(H || A.nodeType === 1 ? "" : A.substringData(0, O));
            if (le ? le = le.cloneNode(!1) : L(r.parentNode) && !le && (r = r.cloneNode(!1), P.appendChild(r), W.push(r)), !o.onlyZeroWidthSpace(Ke)) {
              M = ke, Z = "", E = [];
              const je = [];
              for (; M !== P && M !== D && M !== null; )
                M.nodeType === 1 && J(M) && (L(M) ? je.push(M.cloneNode(!1)) : E.push(M.cloneNode(!1)), Z += M.style.cssText.substr(0, M.style.cssText.indexOf(":")) + "|"), M = M.parentNode;
              for (E = E.concat(je), Et = Y = M = E.pop() || Ke; E.length > 0; )
                M = E.pop(), Y.appendChild(M), Y = M;
              P.appendChild(Et), M.textContent = Ke.data;
            }
            if (le && Et) {
              const je = I(Et);
              je && (le = je);
            }
            for (M = ke, E = [], Z = ""; M !== P && M !== D && M !== null; )
              qe = L(M) ? null : f(M), qe && M.nodeType === 1 && J(M) && (E.push(qe), Z += M.style.cssText.substr(0, M.style.cssText.indexOf(":")) + "|"), M = M.parentNode;
            const Xe = E.pop() || Ie;
            for (Y = M = Xe; E.length > 0; )
              M = E.pop(), Y.appendChild(M), Y = M;
            le ? (r = r.cloneNode(!1), r.appendChild(Xe), le.insertBefore(r, le.firstChild), P.appendChild(le), W.push(r), le = null) : r.appendChild(Xe), A = Ie, O = Ie.data.length, V = !0, !y && _ && (r = Ie, Ie.textContent = o.zeroWidthSpace), M !== Ie && M.appendChild(A);
            continue;
          }
          if (N) {
            if (ke.nodeType === 1 && !o.isBreak(ke)) {
              o._isIgnoreNodeChange(ke) ? (P.appendChild(ke.cloneNode(!0)), _ || (r = r.cloneNode(!1), P.appendChild(r), W.push(r))) : Se(ke, ke);
              continue;
            }
            M = ke, E = [], Z = "";
            const Ke = [];
            for (; M.parentNode !== null && M !== D && M !== r; )
              qe = V ? M.cloneNode(!1) : f(M), M.nodeType === 1 && !o.isBreak(ke) && qe && J(M) && (L(M) ? le || Ke.push(qe) : E.push(qe), Z += M.style.cssText.substr(0, M.style.cssText.indexOf(":")) + "|"), M = M.parentNode;
            E = E.concat(Ke);
            const Ie = E.pop() || ke;
            for (Y = M = Ie; E.length > 0; )
              M = E.pop(), Y.appendChild(M), Y = M;
            if (L(r.parentNode) && !L(Ie) && !o.onlyZeroWidthSpace(r) && (r = r.cloneNode(!1), P.appendChild(r), W.push(r)), !V && !le && L(Ie)) {
              r = r.cloneNode(!1);
              const Xe = Ie.childNodes;
              for (let je = 0, oi = Xe.length; je < oi; je++)
                r.appendChild(Xe[je]);
              Ie.appendChild(r), P.appendChild(Ie), W.push(r), r.children.length > 0 ? De = M : De = r;
            } else Ie === ke ? V ? De = P : De = r : V ? (P.appendChild(Ie), De = M) : (r.appendChild(Ie), De = M);
            if (le && ke.nodeType === 3)
              if (I(ke)) {
                const Xe = o.getParentElement(De, (function(je) {
                  return this._isMaintainedNode(je.parentNode) || je.parentNode === P;
                }).bind(o));
                le.appendChild(Xe), r = Xe.cloneNode(!1), W.push(r), P.appendChild(r);
              } else
                le = null;
          }
          Et = ke.cloneNode(!1), De.appendChild(Et), ke.nodeType === 1 && !o.isBreak(ke) && (ni = Et), Se(ke, ni);
        }
      }(a, P), w && !y && !S.v)
        return {
          ancestor: a,
          startContainer: p,
          startOffset: g,
          endContainer: b,
          endOffset: h
        };
      if (y = y && w, y)
        for (let Se = 0; Se < W.length; Se++) {
          let Fe = W[Se], De, St, Ze;
          if (_)
            De = o.createTextNode(o.zeroWidthSpace), P.replaceChild(De, Fe);
          else {
            const ot = Fe.childNodes;
            for (St = ot[0]; ot[0]; )
              Ze = ot[0], P.insertBefore(Ze, Fe);
            o.removeItem(Fe);
          }
          Se === 0 && (_ ? R = A = De : (R = St, A = Ze));
        }
      else {
        if (w)
          for (let Se = 0; Se < W.length; Se++)
            this._stripRemoveNode(W[Se]);
        _ && (R = A = r);
      }
      o.removeEmptyNode(P, r, !1), _ && (U = R.textContent.length, O = A.textContent.length);
      const oe = y || A.textContent.length === 0;
      !o.isBreak(A) && A.textContent.length === 0 && (o.removeItem(A), A = R), O = oe ? A.textContent.length : O;
      const me = { s: 0, e: 0 }, ye = o.getNodePath(R, P, me), ue = !A.parentNode;
      ue && (A = R);
      const Ce = { s: 0, e: 0 }, Oe = o.getNodePath(A, P, !ue && !oe ? Ce : null);
      U += me.s, O = _ ? U : ue ? R.textContent.length : oe ? O + me.s : O + Ce.s;
      const et = o.mergeSameTags(P, [ye, Oe], !0);
      return a.parentNode.replaceChild(P, a), R = o.getNodeFromPath(ye, P), A = o.getNodeFromPath(Oe, P), {
        ancestor: P,
        startContainer: R,
        startOffset: U + et[0],
        endContainer: A,
        endOffset: O + et[1]
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
    _nodeChange_startLine: function(a, r, f, p, g, b, h, y, w, _, S) {
      let I = p.parentNode;
      for (; !I.nextSibling && !I.previousSibling && !o.isFormatElement(I.parentNode) && !o.isWysiwygDiv(I.parentNode) && I.nodeName !== r.nodeName; )
        I = I.parentNode;
      if (!h && I.nodeName === r.nodeName && !o.isFormatElement(I) && !I.nextSibling && o.onlyZeroWidthSpace(p.textContent.slice(0, g))) {
        let N = !0, V = p.previousSibling;
        for (; V; ) {
          if (!o.onlyZeroWidthSpace(V)) {
            N = !1;
            break;
          }
          V = V.previousSibling;
        }
        if (N)
          return o.copyTagAttributes(I, r), {
            ancestor: a,
            container: p,
            offset: g
          };
      }
      y.v = !1;
      const L = a, B = [r], D = a.cloneNode(!1);
      let W = p, P = g, H = !1, R, U, A, O;
      if (function N(V, E) {
        const M = V.childNodes;
        for (let Y = 0, Z = M.length, le, X; Y < Z; Y++) {
          const J = M[Y];
          if (!J) continue;
          let oe = E;
          if (H && !o.isBreak(J)) {
            if (J.nodeType === 1) {
              if (o._isIgnoreNodeChange(J)) {
                if (r = r.cloneNode(!1), X = J.cloneNode(!0), D.appendChild(X), D.appendChild(r), B.push(r), S && J.contains(S)) {
                  const Ce = o.getNodePath(S, J);
                  S = o.getNodeFromPath(Ce, X);
                }
              } else
                N(J, J);
              continue;
            }
            U = J, R = [];
            const me = [];
            for (; U.parentNode !== null && U !== L && U !== r; )
              le = f(U), U.nodeType === 1 && le && (_(U) ? O || me.push(le) : R.push(le)), U = U.parentNode;
            R = R.concat(me);
            const ye = R.length > 0, ue = R.pop() || J;
            for (A = U = ue; R.length > 0; )
              U = R.pop(), A.appendChild(U), A = U;
            if (_(r.parentNode) && !_(ue) && (r = r.cloneNode(!1), D.appendChild(r), B.push(r)), !O && _(ue)) {
              r = r.cloneNode(!1);
              const Ce = ue.childNodes;
              for (let Oe = 0, et = Ce.length; Oe < et; Oe++)
                r.appendChild(Ce[Oe]);
              ue.appendChild(r), D.appendChild(ue), E = _(U) ? r : U, B.push(r);
            } else ye ? (r.appendChild(ue), E = U) : E = r;
            if (O && J.nodeType === 3)
              if (w(J)) {
                const Ce = o.getParentElement(E, (function(Oe) {
                  return this._isMaintainedNode(Oe.parentNode) || Oe.parentNode === D;
                }).bind(o));
                O.appendChild(Ce), r = Ce.cloneNode(!1), B.push(r), D.appendChild(r);
              } else
                O = null;
          }
          if (!H && J === W) {
            let me = D;
            O = w(J);
            const ye = o.createTextNode(W.nodeType === 1 ? "" : W.substringData(0, P)), ue = o.createTextNode(W.nodeType === 1 ? "" : W.substringData(P, W.length - P));
            if (O) {
              const et = w(E);
              if (et && et.parentNode !== me) {
                let Se = et, Fe = null;
                for (; Se.parentNode !== me; ) {
                  for (E = Fe = Se.parentNode.cloneNode(!1); Se.childNodes[0]; )
                    Fe.appendChild(Se.childNodes[0]);
                  Se.appendChild(Fe), Se = Se.parentNode;
                }
                Se.parentNode.appendChild(et);
              }
              O = O.cloneNode(!1);
            }
            o.onlyZeroWidthSpace(ye) || E.appendChild(ye);
            const Ce = w(E);
            for (Ce && (O = Ce), O && (me = O), U = E, R = []; U !== me && U !== null; )
              le = f(U), U.nodeType === 1 && le && R.push(le), U = U.parentNode;
            const Oe = R.pop() || E;
            for (A = U = Oe; R.length > 0; )
              U = R.pop(), A.appendChild(U), A = U;
            Oe !== E ? (r.appendChild(Oe), E = U) : E = r, o.isBreak(J) && r.appendChild(J.cloneNode(!1)), me.appendChild(r), W = ue, P = 0, H = !0, E.appendChild(W);
            continue;
          }
          le = H ? f(J) : J.cloneNode(!1), le && (E.appendChild(le), J.nodeType === 1 && !o.isBreak(J) && (oe = le)), N(J, oe);
        }
      }(a, D), h && !b && !y.v)
        return {
          ancestor: a,
          container: p,
          offset: g,
          endContainer: S
        };
      if (b = b && h, b)
        for (let N = 0; N < B.length; N++) {
          let V = B[N];
          const E = V.childNodes, M = E[0];
          for (; E[0]; )
            D.insertBefore(E[0], V);
          o.removeItem(V), N === 0 && (W = M);
        }
      else if (h) {
        r = r.firstChild;
        for (let N = 0; N < B.length; N++)
          this._stripRemoveNode(B[N]);
      }
      if (!b && D.childNodes.length === 0)
        a.childNodes ? W = a.childNodes[0] : (W = o.createTextNode(o.zeroWidthSpace), a.appendChild(W));
      else {
        o.removeEmptyNode(D, r, !1), o.onlyZeroWidthSpace(D.textContent) && (W = D.firstChild, P = 0);
        const N = { s: 0, e: 0 }, V = o.getNodePath(W, D, N);
        P += N.s;
        const E = o.mergeSameTags(D, [V], !0);
        a.parentNode.replaceChild(D, a), W = o.getNodeFromPath(V, D), P += E[0];
      }
      return {
        ancestor: D,
        container: W,
        offset: P,
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
    _nodeChange_middleLine: function(a, r, f, p, g, b, h) {
      if (!g) {
        let S = null;
        h && a.contains(h) && (S = o.getNodePath(h, a));
        const I = a.cloneNode(!0), L = r.nodeName, B = r.style.cssText, D = r.className;
        let W = I.childNodes, P = 0, H = W.length;
        for (let R; P < H && (R = W[P], R.nodeType !== 3); P++)
          if (R.nodeName === L)
            R.style.cssText += B, o.addClass(R, D);
          else {
            if (!o.isBreak(R) && o._isIgnoreNodeChange(R))
              continue;
            if (H === 1) {
              W = R.childNodes, H = W.length, P = -1;
              continue;
            } else
              break;
          }
        if (H > 0 && P === H)
          return a.innerHTML = I.innerHTML, {
            ancestor: a,
            endContainer: S ? o.getNodeFromPath(S, a) : null
          };
      }
      b.v = !1;
      const y = a.cloneNode(!1), w = [r];
      let _ = !0;
      if (function S(I, L) {
        const B = I.childNodes;
        for (let D = 0, W = B.length, P, H; D < W; D++) {
          let R = B[D];
          if (!R) continue;
          let U = L;
          if (!o.isBreak(R) && o._isIgnoreNodeChange(R)) {
            if (r.childNodes.length > 0 && (y.appendChild(r), r = r.cloneNode(!1)), H = R.cloneNode(!0), y.appendChild(H), y.appendChild(r), w.push(r), L = r, h && R.contains(h)) {
              const A = o.getNodePath(h, R);
              h = o.getNodeFromPath(A, H);
            }
            continue;
          } else
            P = f(R), P && (_ = !1, L.appendChild(P), R.nodeType === 1 && (U = P));
          o.isBreak(R) || S(R, U);
        }
      }(a, r), _ || g && !p && !b.v) return { ancestor: a, endContainer: h };
      if (y.appendChild(r), p && g)
        for (let S = 0; S < w.length; S++) {
          let I = w[S];
          const L = I.childNodes;
          for (; L[0]; )
            y.insertBefore(L[0], I);
          o.removeItem(I);
        }
      else if (g) {
        r = r.firstChild;
        for (let S = 0; S < w.length; S++)
          this._stripRemoveNode(w[S]);
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
    _nodeChange_endLine: function(a, r, f, p, g, b, h, y, w, _) {
      let S = p.parentNode;
      for (; !S.nextSibling && !S.previousSibling && !o.isFormatElement(S.parentNode) && !o.isWysiwygDiv(S.parentNode) && S.nodeName !== r.nodeName; )
        S = S.parentNode;
      if (!h && S.nodeName === r.nodeName && !o.isFormatElement(S) && !S.previousSibling && o.onlyZeroWidthSpace(p.textContent.slice(g))) {
        let O = !0, N = p.nextSibling;
        for (; N; ) {
          if (!o.onlyZeroWidthSpace(N)) {
            O = !1;
            break;
          }
          N = N.nextSibling;
        }
        if (O)
          return o.copyTagAttributes(S, r), {
            ancestor: a,
            container: p,
            offset: g
          };
      }
      y.v = !1;
      const I = a, L = [r], B = a.cloneNode(!1);
      let D = p, W = g, P = !1, H, R, U, A;
      if (function O(N, V) {
        const E = N.childNodes;
        for (let M = E.length - 1, Y; 0 <= M; M--) {
          const Z = E[M];
          if (!Z) continue;
          let le = V;
          if (P && !o.isBreak(Z)) {
            if (Z.nodeType === 1) {
              if (o._isIgnoreNodeChange(Z)) {
                r = r.cloneNode(!1);
                const me = Z.cloneNode(!0);
                B.insertBefore(me, V), B.insertBefore(r, me), L.push(r);
              } else
                O(Z, Z);
              continue;
            }
            R = Z, H = [];
            const X = [];
            for (; R.parentNode !== null && R !== I && R !== r; )
              Y = f(R), Y && R.nodeType === 1 && (_(R) ? A || X.push(Y) : H.push(Y)), R = R.parentNode;
            H = H.concat(X);
            const J = H.length > 0, oe = H.pop() || Z;
            for (U = R = oe; H.length > 0; )
              R = H.pop(), U.appendChild(R), U = R;
            if (_(r.parentNode) && !_(oe) && (r = r.cloneNode(!1), B.insertBefore(r, B.firstChild), L.push(r)), !A && _(oe)) {
              r = r.cloneNode(!1);
              const me = oe.childNodes;
              for (let ye = 0, ue = me.length; ye < ue; ye++)
                r.appendChild(me[ye]);
              oe.appendChild(r), B.insertBefore(oe, B.firstChild), L.push(r), r.children.length > 0 ? V = R : V = r;
            } else J ? (r.insertBefore(oe, r.firstChild), V = R) : V = r;
            if (A && Z.nodeType === 3)
              if (w(Z)) {
                const me = o.getParentElement(V, (function(ye) {
                  return this._isMaintainedNode(ye.parentNode) || ye.parentNode === B;
                }).bind(o));
                A.appendChild(me), r = me.cloneNode(!1), L.push(r), B.insertBefore(r, B.firstChild);
              } else
                A = null;
          }
          if (!P && Z === D) {
            A = w(Z);
            const X = o.createTextNode(D.nodeType === 1 ? "" : D.substringData(W, D.length - W)), J = o.createTextNode(D.nodeType === 1 ? "" : D.substringData(0, W));
            if (A) {
              A = A.cloneNode(!1);
              const me = w(V);
              if (me && me.parentNode !== B) {
                let ye = me, ue = null;
                for (; ye.parentNode !== B; ) {
                  for (V = ue = ye.parentNode.cloneNode(!1); ye.childNodes[0]; )
                    ue.appendChild(ye.childNodes[0]);
                  ye.appendChild(ue), ye = ye.parentNode;
                }
                ye.parentNode.insertBefore(me, ye.parentNode.firstChild);
              }
              A = A.cloneNode(!1);
            } else _(r.parentNode) && !A && (r = r.cloneNode(!1), B.appendChild(r), L.push(r));
            for (o.onlyZeroWidthSpace(X) || V.insertBefore(X, V.firstChild), R = V, H = []; R !== B && R !== null; )
              Y = _(R) ? null : f(R), Y && R.nodeType === 1 && H.push(Y), R = R.parentNode;
            const oe = H.pop() || V;
            for (U = R = oe; H.length > 0; )
              R = H.pop(), U.appendChild(R), U = R;
            oe !== V ? (r.insertBefore(oe, r.firstChild), V = R) : V = r, o.isBreak(Z) && r.appendChild(Z.cloneNode(!1)), A ? (A.insertBefore(r, A.firstChild), B.insertBefore(A, B.firstChild), A = null) : B.insertBefore(r, B.firstChild), D = J, W = J.data.length, P = !0, V.insertBefore(D, V.firstChild);
            continue;
          }
          Y = P ? f(Z) : Z.cloneNode(!1), Y && (V.insertBefore(Y, V.firstChild), Z.nodeType === 1 && !o.isBreak(Z) && (le = Y)), O(Z, le);
        }
      }(a, B), h && !b && !y.v)
        return {
          ancestor: a,
          container: p,
          offset: g
        };
      if (b = b && h, b)
        for (let O = 0; O < L.length; O++) {
          let N = L[O];
          const V = N.childNodes;
          let E = null;
          for (; V[0]; )
            E = V[0], B.insertBefore(E, N);
          o.removeItem(N), O === L.length - 1 && (D = E, W = E.textContent.length);
        }
      else if (h) {
        r = r.firstChild;
        for (let O = 0; O < L.length; O++)
          this._stripRemoveNode(L[O]);
      }
      if (!b && B.childNodes.length === 0)
        a.childNodes ? D = a.childNodes[0] : (D = o.createTextNode(o.zeroWidthSpace), a.appendChild(D));
      else {
        if (!h && r.textContent.length === 0)
          return o.removeEmptyNode(B, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        o.removeEmptyNode(B, r, !1), o.onlyZeroWidthSpace(B.textContent) ? (D = B.firstChild, W = D.textContent.length) : o.onlyZeroWidthSpace(D) && (D = r, W = 1);
        const O = { s: 0, e: 0 }, N = o.getNodePath(D, B, O);
        W += O.s;
        const V = o.mergeSameTags(B, [N], !0);
        a.parentNode.replaceChild(B, a), D = o.getNodeFromPath(N, B), W += V[0];
      }
      return {
        ancestor: B,
        container: D,
        offset: D.nodeType === 1 && W === 1 ? D.childNodes.length : W
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
            const p = e.element.toolbar.querySelector("." + a);
            p && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = f, p.style.display = "block", m._showToolbarBalloon(), m._showToolbarInline()), o.addClass(f, "on");
          } else
            e.element.toolbar.querySelector("." + this._moreLayerActiveButton.getAttribute("data-command")) && (this.moreLayerOff(), m._showToolbarBalloon(), m._showToolbarInline());
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
            let p = o.getChildElement(f.firstChild, function(w) {
              return w.childNodes.length === 0 || w.nodeType === 3;
            }, !1) || f.firstChild, g = o.getChildElement(f.lastChild, function(w) {
              return w.childNodes.length === 0 || w.nodeType === 3;
            }, !0) || f.lastChild;
            if (!p || !g) return;
            if (o.isMedia(p)) {
              const w = this.getFileComponent(p), _ = o.createElement("BR"), S = o.createElement(n.defaultTag);
              S.appendChild(_), p = w ? w.component : p, p.parentNode.insertBefore(S, p), p = _;
            }
            if (o.isMedia(g)) {
              const w = o.createElement("BR"), _ = o.createElement(n.defaultTag);
              _.appendChild(w), f.appendChild(_), g = w;
            }
            m._showToolbarBalloon(this.setRange(p, 0, g, g.textContent.length));
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
            else if (this._variable.isChanged && typeof C.save == "function")
              C.save();
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
      const r = this.getRange(), f = this.getSelectedElements(null), p = [], g = a !== "indent", b = n.rtl ? "marginRight" : "marginLeft";
      let h = r.startContainer, y = r.endContainer, w = r.startOffset, _ = r.endOffset;
      for (let S = 0, I = f.length, L, B; S < I; S++)
        L = f[S], !o.isListCell(L) || !this.plugins.list ? (B = /\d+/.test(L.style[b]) ? o.getNumber(L.style[b], 0) : 0, g ? B -= 25 : B += 25, o.setStyle(L, b, B <= 0 ? "" : B + "px")) : (g || L.previousElementSibling) && p.push(L);
      p.length > 0 && this.plugins.list.editInsideList.call(this, g, p), this.effectNode = null, this.setRange(h, w, y, _), this.history.push(!1);
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
      this.controllersOff(), o.setDisabledButtons(!a, this.codeViewDisabledButtons), a ? (o.isNonEditable(e.element.wysiwygFrame) || this._setCodeDataToEditor(), e.element.wysiwygFrame.scrollTop = 0, e.element.code.style.display = "none", e.element.wysiwygFrame.style.display = "block", this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), n.height === "auto" && !n.codeMirrorEditor && (e.element.code.style.height = "0px"), this._variable.isCodeView = !1, this._variable.isFullScreen || (this._notHideToolbar = !1, /balloon|balloon-always/i.test(n.mode) && (e.element._arrow.style.display = "", this._isInline = !1, this._isBalloon = !0, m._hideToolbar())), this.nativeFocus(), o.removeClass(this._styleCommandMap.codeView, "active"), o.isNonEditable(e.element.wysiwygFrame) || (this.history.push(!1), this.history._resetCachingButton())) : (this._setEditorDataToCodeView(), this._variable._codeOriginCssText = this._variable._codeOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: block"), this._variable._wysiwygOriginCssText = this._variable._wysiwygOriginCssText.replace(/(\s?display(\s+)?:(\s+)?)[a-zA-Z]+(?=;)/, "display: none"), this._variable.isFullScreen ? e.element.code.style.height = "100%" : n.height === "auto" && !n.codeMirrorEditor && (e.element.code.style.height = e.element.code.scrollHeight > 0 ? e.element.code.scrollHeight + "px" : "auto"), n.codeMirrorEditor && n.codeMirrorEditor.refresh(), this._variable.isCodeView = !0, this._variable.isFullScreen || (this._notHideToolbar = !0, this._isBalloon && (e.element._arrow.style.display = "none", e.element.toolbar.style.left = "", this._isInline = !0, this._isBalloon = !1, m._showToolbarInline())), this._variable._range = null, e.element.code.focus(), o.addClass(this._styleCommandMap.codeView, "active")), this._checkPlaceholder(), this.isReadOnly && o.setDisabledButtons(!0, this.resizingDisabledButtons), typeof C.toggleCodeView == "function" && C.toggleCodeView(this._variable.isCodeView, this);
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
          const g = r.head.children;
          for (let b = 0, h = g.length; b < h; b++)
            /^script$/i.test(g[b].tagName) && (r.head.removeChild(g[b]), b--, h--);
        }
        let f = r.head.innerHTML;
        (!r.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !r.head.querySelector("style")) && (f += o._setIframeCssTags(this.options)), this._wd.head.innerHTML = f, this._wd.body.innerHTML = this.convertContentsForEditor(r.body.innerHTML);
        const p = r.body.attributes;
        for (let g = 0, b = p.length; g < b; g++)
          p[g].name !== "contenteditable" && this._wd.body.setAttribute(p[g].name, p[g].value);
        if (!o.hasClass(this._wd.body, "sun-editor-editable")) {
          const g = n._editableClass.split(" ");
          for (let b = 0; b < g.length; b++)
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
      const r = e.element.topArea, f = e.element.toolbar, p = e.element.editorArea, g = e.element.wysiwygFrame, b = e.element.code, h = this._variable;
      this.controllersOff();
      const y = f.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      h.isFullScreen ? (h.isFullScreen = !1, g.style.cssText = h._wysiwygOriginCssText, b.style.cssText = h._codeOriginCssText, f.style.cssText = "", p.style.cssText = h._editorAreaOriginCssText, r.style.cssText = h._originCssText, c.body.style.overflow = h._bodyOverflow, n.height === "auto" && !n.codeMirrorEditor && m._codeViewAutoHeight(), n.toolbarContainer && n.toolbarContainer.appendChild(f), n.stickyToolbar > -1 && o.removeClass(f, "se-toolbar-sticky"), h._fullScreenAttrs.sticky && !n.toolbarContainer && (h._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", o.addClass(f, "se-toolbar-sticky")), this._isInline = h._fullScreenAttrs.inline, this._isBalloon = h._fullScreenAttrs.balloon, this._isInline && m._showToolbarInline(), n.toolbarContainer && o.removeClass(f, "se-toolbar-balloon"), m.onScroll_window(), a && o.changeElement(a.firstElementChild, v.expansion), e.element.topArea.style.marginTop = "", o.removeClass(this._styleCommandMap.fullScreen, "active")) : (h.isFullScreen = !0, h._fullScreenAttrs.inline = this._isInline, h._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), n.toolbarContainer && e.element.relative.insertBefore(f, p), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.maxWidth = "100%", r.style.height = "100%", r.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (h._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", o.removeClass(f, "se-toolbar-sticky")), h._bodyOverflow = c.body.style.overflow, c.body.style.overflow = "hidden", h._editorAreaOriginCssText = p.style.cssText, h._wysiwygOriginCssText = g.style.cssText, h._codeOriginCssText = b.style.cssText, p.style.cssText = f.style.cssText = "", g.style.cssText = (g.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + n._editorStyles.editor, b.style.cssText = (b.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], f.style.width = g.style.height = b.style.height = "100%", f.style.position = "relative", f.style.display = "block", h.innerHeight_fullScreen = d.innerHeight - f.offsetHeight, p.style.height = h.innerHeight_fullScreen - n.fullScreenOffset + "px", a && o.changeElement(a.firstElementChild, v.reduction), n.iframe && n.height === "auto" && (p.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = n.fullScreenOffset + "px", o.addClass(this._styleCommandMap.fullScreen, "active")), y && C.toolbar.hide(), typeof C.toggleFullScreen == "function" && C.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const a = o.createElement("IFRAME");
      a.style.display = "none", c.body.appendChild(a);
      const r = n.printTemplate ? n.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), f = o.getIframeDocument(a), p = this._wd;
      if (n.iframe) {
        const g = n._printClass !== null ? 'class="' + n._printClass + '"' : n.fullPage ? o.getAttributesToString(p.body, ["contenteditable"]) : 'class="' + n._editableClass + '"';
        f.write(
          "<!DOCTYPE html><html><head>" + p.head.innerHTML + "</head><body " + g + ">" + r + "</body></html>"
        );
      } else {
        const g = c.head.getElementsByTagName("link"), b = c.head.getElementsByTagName("style");
        let h = "";
        for (let y = 0, w = g.length; y < w; y++)
          h += g[y].outerHTML;
        for (let y = 0, w = b.length; y < w; y++)
          h += b[y].outerHTML;
        f.write(
          "<!DOCTYPE html><html><head>" + h + '</head><body class="' + (n._printClass !== null ? n._printClass : n._editableClass) + '">' + r + "</body></html>"
        );
      }
      this.showLoading(), d.setTimeout(function() {
        try {
          if (a.focus(), o.isIE_Edge || o.isChromium || c.documentMode || d.StyleMedia)
            try {
              a.contentWindow.document.execCommand("print", !1, null);
            } catch {
              a.contentWindow.print();
            }
          else
            a.contentWindow.print();
        } catch (g) {
          throw Error("[SUNEDITOR.core.print.fail] error: " + g);
        } finally {
          u.closeLoading(), o.removeItem(a);
        }
      }, 1e3);
    },
    /**
     * @description Open the preview window.
     */
    preview: function() {
      u.submenuOff(), u.containerOff(), u.controllersOff();
      const a = n.previewTemplate ? n.previewTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), r = d.open("", "_blank");
      r.mimeType = "text/html";
      const f = this._wd;
      if (n.iframe) {
        const p = n._printClass !== null ? 'class="' + n._printClass + '"' : n.fullPage ? o.getAttributesToString(f.body, ["contenteditable"]) : 'class="' + n._editableClass + '"';
        r.document.write(
          "<!DOCTYPE html><html><head>" + f.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + p + ">" + a + "</body></html>"
        );
      } else {
        const p = c.head.getElementsByTagName("link"), g = c.head.getElementsByTagName("style");
        let b = "";
        for (let h = 0, y = p.length; h < y; h++)
          b += p[h].outerHTML;
        for (let h = 0, y = g.length; h < y; h++)
          b += g[h].outerHTML;
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
      this._prevRtl = n.rtl = r, f && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && o.changeElement(e.tool.indent.firstElementChild, v.indent), e.tool.outdent && o.changeElement(e.tool.outdent.firstElementChild, v.outdent));
      const p = e.element;
      r ? (o.addClass(p.topArea, "se-rtl"), o.addClass(p.wysiwygFrame, "se-rtl")) : (o.removeClass(p.topArea, "se-rtl"), o.removeClass(p.wysiwygFrame, "se-rtl"));
      const g = o.getListChildren(p.wysiwyg, function(h) {
        return o.isFormatElement(h) && (h.style.marginRight || h.style.marginLeft || h.style.textAlign);
      });
      for (let h = 0, y = g.length, w, _, S; h < y; h++)
        w = g[h], S = w.style.marginRight, _ = w.style.marginLeft, (S || _) && (w.style.marginRight = _, w.style.marginLeft = S), S = w.style.textAlign, S === "left" ? w.style.textAlign = "right" : S === "right" && (w.style.textAlign = "left");
      const b = e.tool;
      b.dir && (o.changeTxt(b.dir.querySelector(".se-tooltip-text"), l.toolbar[n.rtl ? "dir_ltr" : "dir_rtl"]), o.changeElement(b.dir.firstElementChild, v[n.rtl ? "dir_ltr" : "dir_rtl"])), b.dir_ltr && (r ? o.removeClass(b.dir_ltr, "active") : o.addClass(b.dir_ltr, "active")), b.dir_rtl && (r ? o.addClass(b.dir_rtl, "active") : o.removeClass(b.dir_rtl, "active"));
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
      const p = o.getListChildren(f, function(g) {
        return g.hasAttribute("contenteditable");
      });
      for (let g = 0, b = p.length; g < b; g++)
        p[g].removeAttribute("contenteditable");
      if (n.fullPage && !a) {
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
        const p = o.getListChildNodes(a, function(g) {
          return o.isSpanWithoutAttr(g) && !o.getParentElement(g, o.isNotCheckingNode);
        }) || [];
        for (let g = p.length - 1; g >= 0; g--)
          p[g].outerHTML = p[g].innerHTML;
        return !r || o.isFormatElement(a) || o.isRangeFormatElement(a) || o.isComponent(a) || o.isFigures(a) || o.isAnchor(a) && o.isMedia(a.firstElementChild) ? o.isSpanWithoutAttr(a) ? a.innerHTML : a.outerHTML : "<" + f + ">" + (o.isSpanWithoutAttr(a) ? a.innerHTML : a.outerHTML) + "</" + f + ">";
      }
      if (a.nodeType === 3) {
        if (!r) return o._HTMLConvertor(a.textContent);
        const p = a.textContent.split(/\n/g);
        let g = "";
        for (let b = 0, h = p.length, y; b < h; b++)
          y = p[b].trim(), y.length > 0 && (g += "<" + f + ">" + o._HTMLConvertor(y) + "</" + f + ">");
        return g;
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
      return a.replace(this._disallowedTextTagsRegExp, function(f, p, g, b) {
        return p + (typeof r[g] == "string" ? r[g] : g) + (b ? " " + b : "");
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
      const f = this._w.Math, p = r.match(/(\d+(?:\.\d+)?)(.+)/), g = p ? p[1] * 1 : o.fontValueMap[r], b = p ? p[2] : "rem";
      let h = g;
      switch (/em/.test(b) ? h = f.round(g / 0.0625) : b === "pt" ? h = f.round(g * 1.333) : b === "%" && (h = g / 100), a) {
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
      let p = (a.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(f) && !p && (a.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const g = (a.match(/\ssize="([^"]+)"/i) || [])[1], b = (a.match(/\sface="([^"]+)"/i) || [])[1], h = (a.match(/\scolor="([^"]+)"/i) || [])[1];
        (g || b || h) && (p = 'style="' + (g ? "font-size:" + this.util.getNumber(g / 3.333, 1) + "rem;" : "") + (b ? "font-family:" + b + ";" : "") + (h ? "color:" + h + ";" : "") + '"');
      }
      if (p) {
        r || (r = []);
        const g = p.replace(/&quot;/g, "").match(this._cleanStyleRegExp[f]);
        if (g) {
          const b = [];
          for (let h = 0, y = g.length, w; h < y; h++)
            if (w = g[h].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), w && !/inherit|initial|revert|unset/i.test(w[3])) {
              const _ = o.kebabToCamelCase(w[1].trim()), S = this.wwComputedStyle[_] ? this.wwComputedStyle[_].replace(/"/g, "") : "", I = w[3].trim();
              switch (_) {
                case "fontFamily":
                  if (!n.plugins.font || n.font.indexOf(I) === -1) continue;
                  break;
                case "fontSize":
                  if (!n.plugins.fontSize) continue;
                  this._cleanStyleRegExp.fontSizeUnit.test(w[0]) || (w[0] = w[0].replace((w[0].match(/:\s*([^;]+)/) || [])[1], this._convertFontSize.bind(this, n.fontSizeUnit)));
                  break;
                case "color":
                  if (!n.plugins.fontColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(I)) continue;
                  break;
                case "backgroundColor":
                  if (!n.plugins.hiliteColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(I)) continue;
                  break;
              }
              S !== I && b.push(w[0]);
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
      let p = null;
      const g = f.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), b = this._attributesTagsBlacklist[g];
      r = r.replace(/\s(?:on[a-z]+)\s*=\s*(")[^"]*\1/ig, ""), b ? r = r.replace(b, "") : r = r.replace(this._attributesBlacklistRegExp, "");
      const h = this._attributesTagsWhitelist[g];
      if (h ? p = r.match(h) : p = r.match(a ? this._attributesWhitelistRegExp : this._attributesWhitelistRegExp_all_data), a || g === "span" || g === "li" || this._cleanStyleRegExp[g])
        if (g === "a") {
          const y = r.match(/(?:(?:id|name)\s*=\s*(?:"|')[^"']*(?:"|'))/g);
          y && (p || (p = []), p.push(y[0]));
        } else (!p || !/style=/i.test(p.toString())) && ((g === "span" || g === "li") && (p = this._cleanStyle(r, p, "span")), this._cleanStyleRegExp[g] ? p = this._cleanStyle(r, p, g) : /^(P|DIV|H[1-6]|PRE)$/i.test(g) && (p = this._cleanStyle(r, p, "format")));
      else {
        const y = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
        y && !p ? p = [y[0]] : y && !p.some(function(w) {
          return /^style/.test(w.trim());
        }) && p.push(y[0]);
      }
      if (o.isFigures(g)) {
        const y = r.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/);
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
    _editFormat: function(a) {
      let r = "", f;
      const p = a.childNodes;
      for (let g = 0, b = p.length, h; g < b; g++)
        h = p[g], h.nodeType === 8 ? r += "<!-- " + h.textContent + " -->" : !o.isFormatElement(h) && !o.isRangeFormatElement(h) && !o.isComponent(h) && !/meta/i.test(h.nodeName) ? (f || (f = o.createElement(n.defaultTag)), f.appendChild(h), g--, b--) : (f && (r += f.outerHTML, f = null), r += h.outerHTML);
      return f && (r += f.outerHTML), c.createRange().createContextualFragment(r);
    },
    _convertListCell: function(a) {
      let r = "";
      for (let f = 0, p = a.length, g; f < p; f++)
        g = a[f], g.nodeType === 1 ? o.isList(g) ? r += g.innerHTML : o.isListCell(g) ? r += g.outerHTML : o.isFormatElement(g) ? r += "<li>" + (g.innerHTML.trim() || "<br>") + "</li>" : o.isRangeFormatElement(g) && !o.isTable(g) ? r += this._convertListCell(g) : r += "<li>" + g.outerHTML + "</li>" : r += "<li>" + (g.textContent || "<br>") + "</li>";
      return r;
    },
    _isFormatData: function(a) {
      let r = !1;
      for (let f = 0, p = a.length, g; f < p; f++)
        if (g = a[f], g.nodeType === 1 && !o.isTextStyleElement(g) && !o.isBreak(g) && !this.__disallowedTagNameRegExp.test(g.nodeName)) {
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
      const p = c.createRange().createContextualFragment(a);
      try {
        o._consistencyCheckOfHTML(p, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, n.strictHTMLValidation);
      } catch (y) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + y);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const y = p.querySelectorAll(this.managedTagsInfo.query);
        for (let w = 0, _ = y.length, S, I; w < _; w++) {
          I = [].slice.call(y[w].classList);
          for (let L = 0, B = I.length; L < B; L++)
            if (S = this.managedTagsInfo.map[I[L]], S) {
              S(y[w]);
              break;
            }
        }
      }
      let g = p.childNodes, b = "";
      const h = this._isFormatData(g);
      h && (g = this._editFormat(p).childNodes);
      for (let y = 0, w = g.length, _; y < w; y++) {
        if (_ = g[y], this.__allowedScriptRegExp.test(_.nodeName)) {
          b += _.outerHTML;
          continue;
        }
        b += this._makeLine(_, h);
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
      const r = c.createRange().createContextualFragment(a);
      try {
        o._consistencyCheckOfHTML(r, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, n.strictHTMLValidation);
      } catch (b) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + b);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const b = r.querySelectorAll(this.managedTagsInfo.query);
        for (let h = 0, y = b.length, w, _; h < y; h++) {
          _ = [].slice.call(b[h].classList);
          for (let S = 0, I = _.length; S < I; S++)
            if (w = this.managedTagsInfo.map[_[S]], w) {
              w(b[h]);
              break;
            }
        }
      }
      const f = r.childNodes;
      let p = "", g = null;
      for (let b = 0, h; b < f.length; b++) {
        if (h = f[b], this.__allowedScriptRegExp.test(h.nodeName)) {
          p += h.outerHTML;
          continue;
        }
        if (!o.isFormatElement(h) && !o.isRangeFormatElement(h) && !o.isComponent(h) && !o.isFigures(h) && h.nodeType !== 8 && !/__se__tag/.test(h.className)) {
          if (g || (g = o.createElement(n.defaultTag)), g.appendChild(h), b--, f[b + 1] && !o.isFormatElement(f[b + 1]))
            continue;
          h = g, g = null;
        }
        g && (p += this._makeLine(g, !0), g = null), p += this._makeLine(h, !0);
      }
      return g && (p += this._makeLine(g, !0)), p.length === 0 ? "<" + n.defaultTag + "><br></" + n.defaultTag + ">" : (p = o.htmlRemoveWhiteSpace(p), this._tagConvertor(p));
    },
    /**
     * @description Converts wysiwyg area element into a format that can be placed in an editor of code view mode
     * @param {Element|String} html WYSIWYG element (context.element.wysiwyg) or HTML string.
     * @param {Boolean} comp If true, does not line break and indentation of tags.
     * @returns {String}
     */
    convertHTMLForCodeView: function(a, r) {
      let f = "";
      const p = d.RegExp, g = new p("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), b = typeof a == "string" ? c.createRange().createContextualFragment(a) : a, h = (function(_) {
        return this.isFormatElement(_) || this.isComponent(_);
      }).bind(o), y = r ? "" : `
`;
      let w = r ? 0 : this._variable.codeIndent * 1;
      return w = w > 0 ? new d.Array(w + 1).join(" ") : "", function _(S, I) {
        const L = S.childNodes, B = g.test(S.nodeName), D = B ? I : "";
        for (let W = 0, P = L.length, H, R, U, A, O, N; W < P; W++) {
          if (H = L[W], A = g.test(H.nodeName), R = A ? y : "", U = h(H) && !B && !/^(TH|TD)$/i.test(S.nodeName) ? y : "", H.nodeType === 8) {
            f += `
<!-- ` + H.textContent.trim() + " -->" + R;
            continue;
          }
          if (H.nodeType === 3) {
            o.isList(H.parentElement) || (f += o._HTMLConvertor(/^\n+$/.test(H.data) ? "" : H.data));
            continue;
          }
          if (H.childNodes.length === 0) {
            f += (/^HR$/i.test(H.nodeName) ? y : "") + (/^PRE$/i.test(H.parentElement.nodeName) && /^BR$/i.test(H.nodeName) ? "" : D) + H.outerHTML + R;
            continue;
          }
          H.outerHTML ? (O = H.nodeName.toLowerCase(), N = D || A ? I : "", f += (U || (B ? "" : R)) + N + H.outerHTML.match(p("<" + O + "[^>]*>", "i"))[0] + R, _(H, I + w), f += (/\n$/.test(f) ? N : "") + "</" + O + ">" + (U || R || B || /^(TH|TD)$/i.test(H.nodeName) ? y : "")) : f += new d.XMLSerializer().serializeToString(H);
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
      c.addEventListener(a, r, f), n.iframe && this._wd.addEventListener(a, r);
    },
    /**
     * @description Remove events from document.
     * When created as an Iframe, the event of the document inside the Iframe is also removed.
     * @param {String} type Event type
     * @param {Function} listener Event listener
     */
    removeDocEvent: function(a, r) {
      c.removeEventListener(a, r), n.iframe && this._wd.removeEventListener(a, r);
    },
    /**
     * @description The current number of characters is counted and displayed.
     * @param {String} inputText Text added.
     * @returns {Boolean}
     * @private
     */
    _charCount: function(a) {
      const r = n.maxCharCount, f = n.charCounterType;
      let p = 0;
      if (a && (p = this.getCharLength(a, f)), this._setCharCount(), r > 0) {
        let g = !1;
        const b = C.getCharCount(f);
        if (b > r) {
          if (g = !0, p > 0) {
            this._editorRange();
            const h = this.getRange(), y = h.endOffset - 1, w = this.getSelectionNode().textContent, _ = h.endOffset - (b - r);
            this.getSelectionNode().textContent = w.slice(0, _ < 0 ? 0 : _) + w.slice(h.endOffset, w.length), this.setRange(h.endContainer, y, h.endContainer, y);
          }
        } else b + p > r && (g = !0);
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
    checkCharCount: function(a, r) {
      if (n.maxCharCount) {
        const f = r || n.charCounterType, p = this.getCharLength(typeof a == "string" ? a : this._charTypeHTML && a.nodeType === 1 ? a.outerHTML : a.textContent, f);
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
    getCharLength: function(a, r) {
      return /byte/.test(r) ? o.getByteLength(a) : a.length;
    },
    /**
     * @description Reset buttons of the responsive toolbar.
     */
    resetResponsiveToolbar: function() {
      u.controllersOff();
      const a = m._responsiveButtonSize;
      if (a) {
        let r = 0;
        (u._isBalloon || u._isInline) && n.toolbarWidth === "auto" ? r = e.element.topArea.offsetWidth : r = e.element.toolbar.offsetWidth;
        let f = "default";
        for (let p = 1, g = a.length; p < g; p++)
          if (r < a[p]) {
            f = a[p] + "";
            break;
          }
        m._responsiveCurrentSize !== f && (m._responsiveCurrentSize = f, C.setToolbarButtons(m._responsiveButtons[f]));
      }
    },
    /**
     * @description Set the char count to charCounter element textContent.
     * @private
     */
    _setCharCount: function() {
      e.element.charCounter && d.setTimeout((function(a, r) {
        this.textContent && a && (this.textContent = a.getCharCount(r.charCounterType));
      }).bind(e.element.charCounter, C, n), 0);
    },
    /**
     * @description The character counter blinks.
     * @private
     */
    _callCounterBlink: function() {
      const a = e.element.charWrapper;
      a && !o.hasClass(a, "se-blink") && (o.addClass(a, "se-blink"), d.setTimeout(function() {
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
      for (let p in r)
        a.indexOf(p) > -1 || !o.hasOwn(r, p) || (f.indexOf(p) > -1 ? i[p].active.call(this, null) : r.OUTDENT && /^OUTDENT$/i.test(p) ? o.isImportantDisabled(r.OUTDENT) || r.OUTDENT.setAttribute("disabled", !0) : r.INDENT && /^INDENT$/i.test(p) ? o.isImportantDisabled(r.INDENT) || r.INDENT.removeAttribute("disabled") : o.removeClass(r[p], "active"));
    },
    /**
     * @description Initializ core variable
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _init: function(a, r) {
      const f = d.RegExp;
      this._ww = n.iframe ? e.element.wysiwygFrame.contentWindow : d, this._wd = c, this._charTypeHTML = n.charCounterType === "byte-html", this.wwComputedStyle = d.getComputedStyle(e.element.wysiwyg), this._editorHeight = e.element.wysiwygFrame.offsetHeight, this._editorHeightPadding = o.getNumber(this.wwComputedStyle.getPropertyValue("padding-top")) + o.getNumber(this.wwComputedStyle.getPropertyValue("padding-bottom")), this._classNameFilter = (function(A) {
        return this.test(A) ? A : "";
      }).bind(n.allowedClassNames);
      const p = n.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new f("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new f("<(" + p + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + p + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new f("^(" + p + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new f("^" + (n.__allowedScriptTag ? "script" : "") + "$", "i"), !n.iframe && typeof d.ShadowRoot == "function") {
        let A = e.element.wysiwygFrame;
        for (; A; ) {
          if (A.shadowRoot) {
            this._shadowRoot = A.shadowRoot;
            break;
          } else if (A instanceof d.ShadowRoot) {
            this._shadowRoot = A;
            break;
          }
          A = A.parentNode;
        }
        this._shadowRoot && (this._shadowRootControllerEventTarget = []);
      }
      const g = d.Object.keys(n._textTagsMap), b = n.addTagsWhitelist ? n.addTagsWhitelist.split("|").filter(function(A) {
        return /b|i|ins|s|strike/i.test(A);
      }) : [];
      for (let A = 0; A < b.length; A++)
        g.splice(g.indexOf(b[A].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = g.length === 0 ? null : new f("(<\\/?)(" + g.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const h = function(A, O) {
        return A ? A === "*" ? "[a-z-]+" : O ? A + "|" + O : A : "^";
      }, _ = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", S = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = n._editorTagsWhitelist.indexOf("//") > -1 || n._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new f("^(" + h(n._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new f("^(" + (n.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = o.createTagsWhitelist(h(n._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = o.createTagsBlacklist(n.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = o.createTagsWhitelist(h(n.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = o.createTagsBlacklist(n.pasteTagsBlacklist);
      const I = '\\s*=\\s*(")[^"]*\\1', L = n.attributesWhitelist;
      let B = {}, D = "";
      if (L)
        for (let A in L)
          !o.hasOwn(L, A) || /^on[a-z]+$/i.test(L[A]) || (A === "all" ? D = h(L[A], _) : B[A] = new f("\\s(?:" + h(L[A], "") + ")" + I, "ig"));
      this._attributesWhitelistRegExp = new f("\\s(?:" + (D || _ + "|" + S) + ")" + I, "ig"), this._attributesWhitelistRegExp_all_data = new f("\\s(?:" + ((D || _) + "|data-[a-z0-9\\-]+") + ")" + I, "ig"), this._attributesTagsWhitelist = B;
      const W = n.attributesBlacklist;
      if (B = {}, D = "", W)
        for (let A in W)
          o.hasOwn(W, A) && (A === "all" ? D = h(W[A], "") : B[A] = new f("\\s(?:" + h(W[A], "") + ")" + I, "ig"));
      this._attributesBlacklistRegExp = new f("\\s(?:" + (D || "^") + ")" + I, "ig"), this._attributesTagsBlacklist = B, this._isInline = /inline/i.test(n.mode), this._isBalloon = /balloon|balloon-always/i.test(n.mode), this._isBalloonAlways = /balloon-always/i.test(n.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const P = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let H = [], R, U;
      for (let A in i)
        if (o.hasOwn(i, A)) {
          if (R = i[A], U = t[A], (R.active || R.action) && U && this.callPlugin(A, null, U), typeof R.checkFileInfo == "function" && typeof R.resetFileInfo == "function" && (this.callPlugin(A, null, U), this._fileInfoPluginsCheck.push(R.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(R.resetFileInfo.bind(this))), d.Array.isArray(R.fileTags)) {
            const O = R.fileTags;
            this.callPlugin(A, null, U), this._fileManager.tags = this._fileManager.tags.concat(O), H.push(A);
            for (let N = 0, V = O.length; N < V; N++)
              this._fileManager.pluginMap[O[N].toLowerCase()] = A;
          }
          if (R.managedTags) {
            const O = R.managedTags();
            P.push("." + O.className), this.managedTagsInfo.map[O.className] = O.method.bind(this);
          }
        }
      this.managedTagsInfo.query = P.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new f("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new f("^(" + (H.length === 0 ? "^" : H.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = Cc(this, this._onChange_historyStack.bind(this)), this.addModule([Io]), n.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, n._editorStyles.editor && (e.element.wysiwyg.style.cssText = n._editorStyles.editor), n.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(a, r);
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
      this.hasFocus && m._applyTagEffects(), this._variable.isChanged = !0, e.tool.save && e.tool.save.removeAttribute("disabled"), C.onChange && C.onChange(this.getContents(!0), this), e.element.toolbar.style.display === "block" && m._showToolbarBalloon();
    },
    /**
     * @description Modify the height value of the iframe when the height of the iframe is automatic.
     * @private
     */
    _iframeAutoHeight: function() {
      this._iframeAuto ? d.setTimeout(function() {
        const a = u._iframeAuto.offsetHeight;
        e.element.wysiwygFrame.style.height = a + "px", o.isResizeObserverSupported || u.__callResizeFunction(a, null);
      }) : o.isResizeObserverSupported || u.__callResizeFunction(e.element.wysiwygFrame.offsetHeight, null);
    },
    __callResizeFunction: function(a, r) {
      a = a === -1 ? r.borderBoxSize && r.borderBoxSize[0] ? r.borderBoxSize[0].blockSize : r.contentRect.height + this._editorHeightPadding : a, this._editorHeight !== a && (typeof C.onResizeEditor == "function" && C.onResizeEditor(a, this._editorHeight, u, r), this._editorHeight = a);
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
      const r = this.getRange(), f = r.commonAncestorContainer, p = r.startContainer, g = o.getRangeFormatElement(f, null);
      let b, h, y;
      const w = o.getParentElement(f, o.isComponent);
      if (!(w && !o.isTable(w))) {
        if (f.nodeType === 1 && f.getAttribute("data-se-embed") === "true") {
          let _ = f.nextElementSibling;
          o.isFormatElement(_) || (_ = this.appendFormatTag(f, n.defaultTag)), this.setRange(_.firstChild, 0, _.firstChild, 0);
          return;
        }
        if (!((o.isRangeFormatElement(p) || o.isWysiwygDiv(p)) && (o.isComponent(p.children[r.startOffset]) || o.isComponent(p.children[r.startOffset - 1])))) {
          if (o.getParentElement(f, o.isNotCheckingNode)) return null;
          if (g) {
            y = o.createElement(a || n.defaultTag), y.innerHTML = g.innerHTML, y.childNodes.length === 0 && (y.innerHTML = o.zeroWidthSpace), g.innerHTML = y.outerHTML, y = g.firstChild, b = o.getEdgeChildNodes(y, null).sc, b || (b = o.createTextNode(o.zeroWidthSpace), y.insertBefore(b, y.firstChild)), h = b.textContent.length, this.setRange(b, h, b, h);
            return;
          }
          if (o.isRangeFormatElement(f) && f.childNodes.length <= 1) {
            let _ = null;
            f.childNodes.length === 1 && o.isBreak(f.firstChild) ? _ = f.firstChild : (_ = o.createTextNode(o.zeroWidthSpace), f.appendChild(_)), this.setRange(_, 1, _, 1);
            return;
          }
          try {
            if (f.nodeType === 3 && (y = o.createElement(a || n.defaultTag), f.parentNode.insertBefore(y, f), y.appendChild(f)), o.isBreak(y.nextSibling) && o.removeItem(y.nextSibling), o.isBreak(y.previousSibling) && o.removeItem(y.previousSibling), o.isBreak(b)) {
              const _ = o.createTextNode(o.zeroWidthSpace);
              b.parentNode.insertBefore(_, b), b = _;
            }
          } catch {
            this.execCommand("formatBlock", !1, a || n.defaultTag), this.removeRange(), this._editorRange(), this.effectNode = null;
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
      this.context = e = cn(a.originElement, this._getConstructed(a), n), this._componentsInfoReset = !0, this._editorInit(!0, r);
    },
    /**
     * @description Initializ editor
     * @param {Boolean} reload Is relooad?
     * @param {String} _initHTML initial html string
     * @private
     */
    _editorInit: function(a, r) {
      this._init(a, r), m._addEvent(), this._setCharCount(), m._offStickyToolbar(), m.onResize_window(), e.element.toolbar.style.visibility = "";
      const f = n.frameAttrbutes;
      for (let p in f)
        e.element.wysiwyg.setAttribute(p, f[p]);
      this._checkComponents(), this._componentsInfoInit = !1, this._componentsInfoReset = !1, this.history.reset(!0), d.setTimeout(function() {
        typeof u._resourcesStateChange == "function" && (m._resizeObserver && m._resizeObserver.observe(e.element.wysiwygFrame), m._toolbarObserver && m._toolbarObserver.observe(e.element._toolbarShadow), u._resourcesStateChange(), typeof C.onload == "function" && C.onload(u, a));
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
  }, m = {
    _IEisComposing: !1,
    // In IE, there is no "e.isComposing" in the key-up event.
    _lineBreakerBind: null,
    _responsiveCurrentSize: "default",
    _responsiveButtonSize: null,
    _responsiveButtons: null,
    _deleteKeyCode: new d.RegExp("^(8|46)$"),
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
    _shortcutCommand: function(a, r) {
      let f = null;
      const p = m._keyCodeShortcut[a];
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
      let a = u.getSelectionNode();
      if (a === u.effectNode) return;
      u.effectNode = a;
      const r = n.rtl ? "marginRight" : "marginLeft", f = u.commandMap, p = m._onButtonsCheck, g = [], b = [], h = u.activePlugins, y = h.length;
      let w = "";
      for (; a.firstChild; )
        a = a.firstChild;
      for (let _ = a; !o.isWysiwygDiv(_) && _; _ = _.parentNode)
        if (!(_.nodeType !== 1 || o.isBreak(_))) {
          if (w = _.nodeName.toUpperCase(), b.push(w), !u.isReadOnly)
            for (let S = 0, I; S < y; S++)
              I = h[S], g.indexOf(I) === -1 && i[I].active.call(u, _) && g.push(I);
          if (o.isFormatElement(_)) {
            g.indexOf("OUTDENT") === -1 && f.OUTDENT && !o.isImportantDisabled(f.OUTDENT) && (o.isListCell(_) || _.style[r] && o.getNumber(_.style[r], 0) > 0) && (g.push("OUTDENT"), f.OUTDENT.removeAttribute("disabled")), g.indexOf("INDENT") === -1 && f.INDENT && !o.isImportantDisabled(f.INDENT) && (g.push("INDENT"), o.isListCell(_) && !_.previousElementSibling ? f.INDENT.setAttribute("disabled", !0) : f.INDENT.removeAttribute("disabled"));
            continue;
          }
          p && p.test(w) && (g.push(w), o.addClass(f[w], "active"));
        }
      u._setKeyEffect(g), u._variable.currentNodes = b.reverse(), u._variable.currentNodesMap = g, n.showPathLabel && (e.element.navigation.textContent = u._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(a) {
      let r = a.target;
      if (u._bindControllersOff && a.stopPropagation(), /^(input|textarea|select|option)$/i.test(r.nodeName) ? u._antiBlur = !1 : a.preventDefault(), o.getParentElement(r, ".se-submenu"))
        a.stopPropagation(), u._notHideToolbar = !0;
      else {
        let f = r.getAttribute("data-command"), p = r.className;
        for (; !f && !/se-menu-list/.test(p) && !/sun-editor-common/.test(p); )
          r = r.parentNode, f = r.getAttribute("data-command"), p = r.className;
        (f === u._submenuName || f === u._containerName) && a.stopPropagation();
      }
    },
    addGlobalEvent: function(a, r, f) {
      return n.iframe && u._ww.addEventListener(a, r, f), u._w.addEventListener(a, r, f), {
        type: a,
        listener: r,
        useCapture: f
      };
    },
    removeGlobalEvent: function(a, r, f) {
      a && (typeof a == "object" && (r = a.listener, f = a.useCapture, a = a.type), n.iframe && u._ww.removeEventListener(a, r, f), u._w.removeEventListener(a, r, f));
    },
    onClick_toolbar: function(a) {
      let r = a.target, f = r.getAttribute("data-display"), p = r.getAttribute("data-command"), g = r.className;
      for (u.controllersOff(); r.parentNode && !p && !/se-menu-list/.test(g) && !/se-toolbar/.test(g); )
        r = r.parentNode, p = r.getAttribute("data-command"), f = r.getAttribute("data-display"), g = r.className;
      !p && !f || r.disabled || u.actionCall(p, f, r);
    },
    __selectionSyncEvent: null,
    onMouseDown_wysiwyg: function(a) {
      if (u.isReadOnly || o.isNonEditable(e.element.wysiwyg)) return;
      if (o._isExcludeSelectionElement(a.target)) {
        a.preventDefault();
        return;
      }
      if (m.removeGlobalEvent(m.__selectionSyncEvent), m.__selectionSyncEvent = m.addGlobalEvent("mouseup", function() {
        u && u._editorRange(), m.removeGlobalEvent(m.__selectionSyncEvent);
      }), typeof C.onMouseDown == "function" && C.onMouseDown(a, u) === !1) return;
      const r = o.getParentElement(a.target, o.isCell);
      if (r) {
        const f = u.plugins.table;
        f && r !== f._fixedCell && !f._shift && u.callPlugin("table", function() {
          f.onTableCellMultiSelect.call(u, r, !1);
        }, null);
      }
      u._isBalloon && m._hideToolbar();
    },
    onClick_wysiwyg: function(a) {
      const r = a.target;
      if (u.isReadOnly)
        return a.preventDefault(), o.isAnchor(r) && d.open(r.href, r.target), !1;
      if (o.isNonEditable(e.element.wysiwyg) || typeof C.onClick == "function" && C.onClick(a, u) === !1) return;
      const f = u.getFileComponent(r);
      if (f) {
        a.preventDefault(), u.selectComponent(f.target, f.pluginName);
        return;
      }
      const p = o.getParentElement(r, "FIGCAPTION");
      if (p && o.isNonEditable(p) && (a.preventDefault(), p.focus(), u._isInline && !u._inlineToolbarAttr.isShow)) {
        m._showToolbarInline();
        const _ = function() {
          m._hideToolbar(), p.removeEventListener("blur", _);
        };
        p.addEventListener("blur", _);
      }
      if (u._editorRange(), a.detail === 3) {
        let _ = u.getRange();
        o.isFormatElement(_.endContainer) && _.endOffset === 0 && (_ = u.setRange(_.startContainer, _.startOffset, _.startContainer, _.startContainer.length), u._rangeInfo(_, u.getSelection()));
      }
      const g = u.getSelectionNode(), b = o.getFormatElement(g, null), h = o.getRangeFormatElement(g, null);
      let y = g;
      for (; y && y.firstChild; ) y = y.firstChild;
      const w = u.getFileComponent(y);
      if (w) {
        const _ = u.getRange();
        !h && _.startContainer === _.endContainer && u.selectComponent(w.target, w.pluginName);
      } else u.currentFileComponentInfo && u.controllersOff();
      if (!b && !o.isNonEditable(r) && !o.isList(h)) {
        const _ = u.getRange();
        if (o.getFormatElement(_.startContainer) === o.getFormatElement(_.endContainer))
          if (o.isList(h)) {
            a.preventDefault();
            const S = o.createElement("LI"), I = g.nextElementSibling;
            S.appendChild(g), h.insertBefore(S, I), u.focus();
          } else !o.isWysiwygDiv(g) && !o.isComponent(g) && (!o.isTable(g) || o.isCell(g)) && u._setDefaultFormat(o.isRangeFormatElement(h) ? "DIV" : n.defaultTag) !== null ? (a.preventDefault(), u.focus()) : m._applyTagEffects();
      } else
        m._applyTagEffects();
      u._isBalloon && d.setTimeout(m._toggleToolbarBalloon);
    },
    _balloonDelay: null,
    _showToolbarBalloonDelay: function() {
      m._balloonDelay && d.clearTimeout(m._balloonDelay), m._balloonDelay = d.setTimeout((function() {
        d.clearTimeout(this._balloonDelay), this._balloonDelay = null, this._showToolbarBalloon();
      }).bind(m), 350);
    },
    _toggleToolbarBalloon: function() {
      if (u) {
        u._editorRange();
        const a = u.getRange();
        u._bindControllersOff || !u._isBalloonAlways && a.collapsed ? m._hideToolbar() : m._showToolbarBalloon(a);
      }
    },
    _showToolbarBalloon: function(a) {
      if (!u._isBalloon) return;
      const r = a || u.getRange(), f = e.element.toolbar, p = e.element.topArea, g = u.getSelection();
      let b;
      if (u._isBalloonAlways && r.collapsed)
        b = !0;
      else if (g.focusNode === g.anchorNode)
        b = g.focusOffset < g.anchorOffset;
      else {
        const R = o.getListChildNodes(r.commonAncestorContainer, null);
        b = o.getArrayIndex(R, g.focusNode) < o.getArrayIndex(R, g.anchorNode);
      }
      let h = r.getClientRects();
      h = h[b ? 0 : h.length - 1];
      const y = u.getGlobalScrollOffset();
      let w = y.left, _ = y.top;
      const S = p.offsetWidth, I = m._getEditorOffsets(null), L = I.top, B = I.left;
      if (f.style.top = "-10000px", f.style.visibility = "hidden", f.style.display = "block", !h) {
        const R = u.getSelectionNode();
        if (o.isFormatElement(R)) {
          const U = o.createTextNode(o.zeroWidthSpace);
          u.insertNode(U, null, !1), u.setRange(U, 1, U, 1), u._editorRange(), h = u.getRange().getClientRects(), h = h[b ? 0 : h.length - 1];
        }
        if (!h) {
          const U = o.getOffset(R, e.element.wysiwygFrame);
          h = {
            left: U.left,
            top: U.top,
            right: U.left,
            bottom: U.top + R.offsetHeight,
            noText: !0
          }, w = 0, _ = 0;
        }
        b = !0;
      }
      const D = d.Math.round(e.element._arrow.offsetWidth / 2), W = f.offsetWidth, P = f.offsetHeight, H = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (H && (h = {
        left: h.left + H.left,
        top: h.top + H.top,
        right: h.right + H.right - H.width,
        bottom: h.bottom + H.bottom - H.height
      }), m._setToolbarOffset(b, h, f, B, S, w, _, L, D), (W !== f.offsetWidth || P !== f.offsetHeight) && m._setToolbarOffset(b, h, f, B, S, w, _, L, D), n.toolbarContainer) {
        const R = p.parentElement;
        let U = n.toolbarContainer, A = U.offsetLeft, O = U.offsetTop;
        for (; !U.parentElement.contains(R) || !/^(BODY|HTML)$/i.test(U.parentElement.nodeName); )
          U = U.offsetParent, A += U.offsetLeft, O += U.offsetTop;
        f.style.left = f.offsetLeft - A + p.offsetLeft + "px", f.style.top = f.offsetTop - O + p.offsetTop + "px";
      }
      f.style.visibility = "";
    },
    _setToolbarOffset: function(a, r, f, p, g, b, h, y, w) {
      const S = f.offsetWidth, I = r.noText && !a ? 0 : f.offsetHeight, L = (a ? r.left : r.right) - p - S / 2 + b, B = L + S - g;
      let D = (a ? r.top - I - w : r.bottom + w) - (r.noText ? 0 : y) + h, W = L < 0 ? 1 : B < 0 ? L : L - B - 1 - 1, P = !1;
      const H = D + (a ? m._getEditorOffsets(null).top : f.offsetHeight - e.element.wysiwyg.offsetHeight);
      !a && H > 0 && m._getPageBottomSpace() < H ? (a = !0, P = !0) : a && c.documentElement.offsetTop > H && (a = !1, P = !0), P && (D = (a ? r.top - I - w : r.bottom + w) - (r.noText ? 0 : y) + h), f.style.left = d.Math.floor(W) + "px", f.style.top = d.Math.floor(D) + "px", a ? (o.removeClass(e.element._arrow, "se-arrow-up"), o.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = I + "px") : (o.removeClass(e.element._arrow, "se-arrow-down"), o.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -w + "px");
      const R = d.Math.floor(S / 2 + (L - W));
      e.element._arrow.style.left = (R + w > f.offsetWidth ? f.offsetWidth - w : R < w ? w : R) + "px";
    },
    _showToolbarInline: function() {
      if (!u._isInline) return;
      const a = e.element.toolbar;
      n.toolbarContainer ? a.style.position = "relative" : a.style.position = "absolute", a.style.visibility = "hidden", a.style.display = "block", u._inlineToolbarAttr.width = a.style.width = n.toolbarWidth, u._inlineToolbarAttr.top = a.style.top = (n.toolbarContainer ? 0 : -1 - a.offsetHeight) + "px", typeof C.showInline == "function" && C.showInline(a, e, u), m.onScroll_window(), u._inlineToolbarAttr.isShow = !0, a.style.visibility = "";
    },
    _hideToolbar: function() {
      !u._notHideToolbar && !u._variable.isFullScreen && (e.element.toolbar.style.display = "none", u._inlineToolbarAttr.isShow = !1);
    },
    onInput_wysiwyg: function(a) {
      if (/AUDIO/.test(a.target.nodeName)) return !1;
      if (u.isReadOnly || u.isDisabled)
        return a.preventDefault(), a.stopPropagation(), u.history.go(u.history.getCurrentIndex()), !1;
      const r = u.getRange(), f = u.getSelectionNode(), p = o.getFormatElement(f, null);
      if (!p && r.collapsed && !o.isComponent(f) && !o.isList(f)) {
        const b = o.getRangeFormatElement(p, null);
        u._setDefaultFormat(o.isRangeFormatElement(b) ? "DIV" : n.defaultTag);
      }
      u._editorRange();
      const g = (a.data === null ? "" : a.data === void 0 ? " " : a.data) || "";
      if (!u._charCount(g))
        return a.preventDefault(), a.stopPropagation(), !1;
      typeof C.onInput == "function" && C.onInput(a, u) === !1 || u.history.push(!0);
    },
    _isUneditableNode: function(a, r) {
      const f = r ? a.startContainer : a.endContainer, p = r ? a.startOffset : a.endOffset, g = r ? "previousSibling" : "nextSibling", b = f.nodeType === 1;
      let h;
      return b ? (h = m._isUneditableNode_getSibling(f.childNodes[p], g, f), h && h.nodeType === 1 && h.getAttribute("contenteditable") === "false") : (h = m._isUneditableNode_getSibling(f, g, f), u.isEdgePoint(f, p, r ? "start" : "end") && h && h.nodeType === 1 && h.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(a, r, f) {
      if (!a) return null;
      let p = a[r];
      if (!p)
        if (p = o.getFormatElement(f), p = p ? p[r] : null, p && !o.isComponent(p)) p = r === "previousSibling" ? p.firstChild : p.lastChild;
        else return null;
      return p;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(a) {
      let r = u.getSelectionNode();
      if (o.isInputElement(r)) return;
      const f = a.keyCode, p = a.shiftKey, g = a.ctrlKey || a.metaKey || f === 91 || f === 92 || f === 224, b = a.altKey;
      if (m._IEisComposing = f === 229, !g && u.isReadOnly && !m._cursorMoveKeyCode.test(f))
        return a.preventDefault(), !1;
      if (u.submenuOff(), u._isBalloon && m._hideToolbar(), typeof C.onKeyDown == "function" && C.onKeyDown(a, u) === !1) return;
      if (g && m._shortcutCommand(f, p))
        return m._onShortcutKey = !0, a.preventDefault(), a.stopPropagation(), !1;
      m._onShortcutKey && (m._onShortcutKey = !1), f === 13 && o.isFormatElement(u.getRange().startContainer) && (u._resetRangeToTextNode(), r = u.getSelectionNode());
      const h = u.getRange(), y = !h.collapsed || h.startContainer !== h.endContainer, w = u._fileManager.pluginRegExp.test(u.currentControllerName) ? u.currentControllerName : "";
      let _ = o.getFormatElement(r, null) || r, S = o.getRangeFormatElement(_, null);
      if (!(/37|38|39|40/.test(a.keyCode) && m._onKeyDown_wysiwyg_arrowKey(a) === !1)) {
        switch (f) {
          case 8:
            if (!y && w) {
              a.preventDefault(), a.stopPropagation(), u.plugins[w].destroy.call(u);
              break;
            }
            if (y && m._hardDelete()) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            if (!o.isFormatElement(_) && !e.element.wysiwyg.firstElementChild && !o.isComponent(r) && u._setDefaultFormat(n.defaultTag) !== null)
              return a.preventDefault(), a.stopPropagation(), !1;
            if (!y && !_.previousElementSibling && h.startOffset === 0 && !r.previousSibling && !o.isListCell(_) && o.isFormatElement(_) && (!o.isFreeFormatElement(_) || o.isClosureFreeFormatElement(_))) {
              if (o.isClosureRangeFormatElement(_.parentNode))
                return a.preventDefault(), a.stopPropagation(), !1;
              if (o.isWysiwygDiv(_.parentNode) && _.childNodes.length <= 1 && (!_.firstChild || o.onlyZeroWidthSpace(_.textContent))) {
                if (a.preventDefault(), a.stopPropagation(), _.nodeName.toUpperCase() === n.defaultTag.toUpperCase()) {
                  _.innerHTML = "<br>";
                  const N = _.attributes;
                  for (; N[0]; )
                    _.removeAttribute(N[0].name);
                } else {
                  const N = o.createElement(n.defaultTag);
                  N.innerHTML = "<br>", _.parentElement.replaceChild(N, _);
                }
                return u.nativeFocus(), !1;
              }
            }
            const L = h.startContainer;
            if (_ && !_.previousElementSibling && h.startOffset === 0 && L.nodeType === 3 && !o.isFormatElement(L.parentNode)) {
              let N = L.parentNode.previousSibling;
              const V = L.parentNode.nextSibling;
              N || (V ? N = V : (N = o.createElement("BR"), _.appendChild(N)));
              let E = L;
              for (; _.contains(E) && !E.previousSibling; )
                E = E.parentNode;
              if (!_.contains(E)) {
                L.textContent = "", o.removeItemAllParents(L, null, _);
                break;
              }
            }
            if (m._isUneditableNode(h, !0)) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            !y && u._isEdgeFormat(h.startContainer, h.startOffset, "start") && o.isFormatElement(_.previousElementSibling) && (u._formatAttrsTemp = _.previousElementSibling.attributes);
            const B = h.commonAncestorContainer;
            if (_ = o.getFormatElement(h.startContainer, null), S = o.getRangeFormatElement(_, null), S && _ && !o.isCell(S) && !/^FIGCAPTION$/i.test(S.nodeName)) {
              if (o.isListCell(_) && o.isList(S) && (o.isListCell(S.parentNode) || _.previousElementSibling) && (r === _ || r.nodeType === 3 && (!r.previousSibling || o.isList(r.previousSibling))) && (o.getFormatElement(h.startContainer, null) !== o.getFormatElement(h.endContainer, null) ? S.contains(h.startContainer) : h.startOffset === 0 && h.collapsed)) {
                if (h.startContainer !== h.endContainer)
                  a.preventDefault(), u.removeNode(), h.startContainer.nodeType === 3 && u.setRange(h.startContainer, h.startContainer.textContent.length, h.startContainer, h.startContainer.textContent.length), u.history.push(!0);
                else {
                  let N = _.previousElementSibling || S.parentNode;
                  if (o.isListCell(N)) {
                    a.preventDefault();
                    let V = N;
                    if (!N.contains(_) && o.isListCell(V) && o.isList(V.lastElementChild)) {
                      for (V = V.lastElementChild.lastElementChild; o.isListCell(V) && o.isList(V.lastElementChild); )
                        V = V.lastElementChild && V.lastElementChild.lastElementChild;
                      N = V;
                    }
                    let E = N === S.parentNode ? S.previousSibling : N.lastChild;
                    E || (E = o.createTextNode(o.zeroWidthSpace), S.parentNode.insertBefore(E, S.parentNode.firstChild));
                    const M = E.nodeType === 3 ? E.textContent.length : 1, Y = _.childNodes;
                    let Z = E, le = Y[0];
                    for (; le = Y[0]; )
                      N.insertBefore(le, Z.nextSibling), Z = le;
                    o.removeItem(_), S.children.length === 0 && o.removeItem(S), u.setRange(E, M, E, M), u.history.push(!0);
                  }
                }
                break;
              }
              if (!y && h.startOffset === 0) {
                let N = !0, V = B;
                for (; V && V !== S && !o.isWysiwygDiv(V); ) {
                  if (V.previousSibling && (V.previousSibling.nodeType === 1 || !o.onlyZeroWidthSpace(V.previousSibling.textContent.trim()))) {
                    N = !1;
                    break;
                  }
                  V = V.parentNode;
                }
                if (N && S.parentNode) {
                  a.preventDefault(), u.detachRangeFormatElement(S, o.isListCell(_) ? [_] : null, null, !1, !1), u.history.push(!0);
                  break;
                }
              }
            }
            if (!y && _ && (h.startOffset === 0 || r === _ && _.childNodes[h.startOffset])) {
              const N = r === _ ? _.childNodes[h.startOffset] : r, V = _.previousSibling, E = (B.nodeType === 3 || o.isBreak(B)) && !B.previousSibling && h.startOffset === 0;
              if (N && !N.previousSibling && (B && o.isComponent(B.previousSibling) || E && o.isComponent(V))) {
                const M = u.getFileComponent(V);
                M ? (a.preventDefault(), a.stopPropagation(), _.textContent.length === 0 && o.removeItem(_), u.selectComponent(M.target, M.pluginName) === !1 && u.blur()) : o.isComponent(V) && (a.preventDefault(), a.stopPropagation(), o.removeItem(V));
                break;
              }
              if (N && o.isNonEditable(N.previousSibling)) {
                a.preventDefault(), a.stopPropagation(), o.removeItem(N.previousSibling);
                break;
              }
            }
            break;
          case 46:
            if (w) {
              a.preventDefault(), a.stopPropagation(), u.plugins[w].destroy.call(u);
              break;
            }
            if (y && m._hardDelete()) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            if (!y && u._isEdgeFormat(h.endContainer, h.endOffset, "end") && !_.nextSibling) {
              a.preventDefault(), a.stopPropagation();
              return;
            }
            if (m._isUneditableNode(h, !1)) {
              a.preventDefault(), a.stopPropagation();
              break;
            }
            if ((o.isFormatElement(r) || r.nextSibling === null || o.onlyZeroWidthSpace(r.nextSibling) && r.nextSibling.nextSibling === null) && h.startOffset === r.textContent.length) {
              const N = _.nextElementSibling;
              if (!N) break;
              if (o.isComponent(N)) {
                if (a.preventDefault(), o.onlyZeroWidthSpace(_) && (o.removeItem(_), o.isTable(N))) {
                  let E = o.getChildElement(N, o.isCell, !1);
                  E = E.firstElementChild || E, u.setRange(E, 0, E, 0);
                  break;
                }
                const V = u.getFileComponent(N);
                V ? (a.stopPropagation(), u.selectComponent(V.target, V.pluginName) === !1 && u.blur()) : o.isComponent(N) && (a.stopPropagation(), o.removeItem(N));
                break;
              }
            }
            if (!y && (u.isEdgePoint(h.endContainer, h.endOffset) || r === _ && _.childNodes[h.startOffset])) {
              const N = r === _ && _.childNodes[h.startOffset] || r;
              if (N && o.isNonEditable(N.nextSibling)) {
                a.preventDefault(), a.stopPropagation(), o.removeItem(N.nextSibling);
                break;
              } else if (o.isComponent(N)) {
                a.preventDefault(), a.stopPropagation(), o.removeItem(N);
                break;
              }
            }
            if (!y && u._isEdgeFormat(h.endContainer, h.endOffset, "end") && o.isFormatElement(_.nextElementSibling) && (u._formatAttrsTemp = _.attributes), _ = o.getFormatElement(h.startContainer, null), S = o.getRangeFormatElement(_, null), o.isListCell(_) && o.isList(S) && (r === _ || r.nodeType === 3 && (!r.nextSibling || o.isList(r.nextSibling)) && (o.getFormatElement(h.startContainer, null) !== o.getFormatElement(h.endContainer, null) ? S.contains(h.endContainer) : h.endOffset === r.textContent.length && h.collapsed))) {
              h.startContainer !== h.endContainer && u.removeNode();
              let N = o.getArrayItem(_.children, o.isList, !1);
              if (N = N || _.nextElementSibling || S.parentNode.nextElementSibling, N && (o.isList(N) || o.getArrayItem(N.children, o.isList, !1))) {
                a.preventDefault();
                let V, E;
                if (o.isList(N)) {
                  const M = N.firstElementChild;
                  for (E = M.childNodes, V = E[0]; E[0]; )
                    _.insertBefore(E[0], N);
                  o.removeItem(M);
                } else {
                  for (V = N.firstChild, E = N.childNodes; E[0]; )
                    _.appendChild(E[0]);
                  o.removeItem(N);
                }
                u.setRange(V, 0, V, 0), u.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (w || n.tabDisable || (a.preventDefault(), g || b || o.isWysiwygDiv(r))) break;
            const D = !h.collapsed || u.isEdgePoint(h.startContainer, h.startOffset), W = u.getSelectedElements(null);
            r = u.getSelectionNode();
            const P = [];
            let H = [], R = o.isListCell(W[0]), U = o.isListCell(W[W.length - 1]), A = { sc: h.startContainer, so: h.startOffset, ec: h.endContainer, eo: h.endOffset };
            for (let N = 0, V = W.length, E; N < V; N++)
              if (E = W[N], o.isListCell(E)) {
                if (!E.previousElementSibling && !p)
                  continue;
                P.push(E);
              } else
                H.push(E);
            if (P.length > 0 && D && u.plugins.list)
              A = u.plugins.list.editInsideList.call(u, p, P);
            else {
              const N = o.getParentElement(r, o.isCell);
              if (N && D) {
                const V = o.getParentElement(N, "table"), E = o.getListChildren(V, o.isCell);
                let M = p ? o.prevIdx(E, N) : o.nextIdx(E, N);
                M === E.length && !p && (M = 0), M === -1 && p && (M = E.length - 1);
                let Y = E[M];
                if (!Y) break;
                Y = Y.firstElementChild || Y, u.setRange(Y, 0, Y, 0);
                break;
              }
              H = H.concat(P), R = U = null;
            }
            if (H.length > 0)
              if (p) {
                const N = H.length - 1;
                for (let M = 0, Y; M <= N; M++) {
                  Y = H[M].childNodes;
                  for (let Z = 0, le = Y.length, X; Z < le && (X = Y[Z], !!X); Z++)
                    if (!o.onlyZeroWidthSpace(X)) {
                      /^\s{1,4}$/.test(X.textContent) ? o.removeItem(X) : /^\s{1,4}/.test(X.textContent) && (X.textContent = X.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const V = o.getChildElement(H[0], "text", !1), E = o.getChildElement(H[N], "text", !0);
                !R && V && (A.sc = V, A.so = 0), !U && E && (A.ec = E, A.eo = E.textContent.length);
              } else {
                const N = o.createTextNode(new d.Array(u._variable.tabSize + 1).join(" "));
                if (H.length === 1) {
                  if (!u.insertNode(N, null, !0)) return !1;
                  R || (A.sc = N, A.so = N.length), U || (A.ec = N, A.eo = N.length);
                } else {
                  const V = H.length - 1;
                  for (let Y = 0, Z; Y <= V; Y++)
                    Z = H[Y].firstChild, Z && (o.isBreak(Z) ? H[Y].insertBefore(N.cloneNode(!1), Z) : Z.textContent = N.textContent + Z.textContent);
                  const E = o.getChildElement(H[0], "text", !1), M = o.getChildElement(H[V], "text", !0);
                  !R && E && (A.sc = E, A.so = 0), !U && M && (A.ec = M, A.eo = M.textContent.length);
                }
              }
            u.setRange(A.sc, A.so, A.ec, A.eo), u.history.push(!1);
            break;
          case 13:
            const O = o.getFreeFormatElement(r, null);
            if (u._charTypeHTML) {
              let N = "";
              if (!p && O || p ? N = "<br>" : N = "<" + _.nodeName + "><br></" + _.nodeName + ">", !u.checkCharCount(N, "byte-html"))
                return a.preventDefault(), !1;
            }
            if (!p && !w) {
              const N = u._isEdgeFormat(h.endContainer, h.endOffset, "end"), V = u._isEdgeFormat(h.startContainer, h.startOffset, "start");
              if (N && (/^H[1-6]$/i.test(_.nodeName) || /^HR$/i.test(_.nodeName))) {
                m._enterPrevent(a);
                let E = null;
                const M = u.appendFormatTag(_, n.defaultTag);
                if (N && N.length > 0) {
                  E = N.pop();
                  const Y = E;
                  for (; N.length > 0; )
                    E = E.appendChild(N.pop());
                  M.appendChild(Y);
                }
                if (E = E ? E.appendChild(M.firstChild) : M.firstChild, o.isBreak(E)) {
                  const Y = o.createTextNode(o.zeroWidthSpace);
                  E.parentNode.insertBefore(Y, E), u.setRange(Y, 1, Y, 1);
                } else
                  u.setRange(E, 0, E, 0);
                break;
              } else if (S && _ && !o.isCell(S) && !/^FIGCAPTION$/i.test(S.nodeName)) {
                const E = u.getRange();
                if (u.isEdgePoint(E.endContainer, E.endOffset) && o.isList(r.nextSibling)) {
                  m._enterPrevent(a);
                  const M = o.createElement("LI"), Y = o.createElement("BR");
                  M.appendChild(Y), _.parentNode.insertBefore(M, _.nextElementSibling), M.appendChild(r.nextSibling), u.setRange(Y, 1, Y, 1);
                  break;
                }
                if ((E.commonAncestorContainer.nodeType !== 3 || !E.commonAncestorContainer.nextElementSibling) && o.onlyZeroWidthSpace(_.innerText.trim()) && !o.isListCell(_.nextElementSibling)) {
                  m._enterPrevent(a);
                  let M = null;
                  if (o.isListCell(S.parentNode)) {
                    const Y = _.parentNode.parentNode;
                    S = Y.parentNode;
                    const Z = o.createElement("LI");
                    Z.innerHTML = "<br>", o.copyTagAttributes(Z, _, n.lineAttrReset), M = Z, S.insertBefore(M, Y.nextElementSibling);
                  } else {
                    const Y = o.isCell(S.parentNode) ? "DIV" : o.isList(S.parentNode) ? "LI" : o.isFormatElement(S.nextElementSibling) && !o.isRangeFormatElement(S.nextElementSibling) ? S.nextElementSibling.nodeName : o.isFormatElement(S.previousElementSibling) && !o.isRangeFormatElement(S.previousElementSibling) ? S.previousElementSibling.nodeName : n.defaultTag;
                    M = o.createElement(Y), o.copyTagAttributes(M, _, n.lineAttrReset);
                    const Z = u.detachRangeFormatElement(S, [_], null, !0, !0);
                    Z.cc.insertBefore(M, Z.ec);
                  }
                  M.innerHTML = "<br>", o.removeItemAllParents(_, null, null), u.setRange(M, 1, M, 1);
                  break;
                }
              }
              if (O) {
                m._enterPrevent(a);
                const E = r === O, M = u.getSelection(), Y = r.childNodes, Z = M.focusOffset, le = r.previousElementSibling, X = r.nextSibling;
                if (!o.isClosureFreeFormatElement(O) && Y && (E && h.collapsed && Y.length - 1 <= Z + 1 && o.isBreak(Y[Z]) && (!Y[Z + 1] || (!Y[Z + 2] || o.onlyZeroWidthSpace(Y[Z + 2].textContent)) && Y[Z + 1].nodeType === 3 && o.onlyZeroWidthSpace(Y[Z + 1].textContent)) && Z > 0 && o.isBreak(Y[Z - 1]) || !E && o.onlyZeroWidthSpace(r.textContent) && o.isBreak(le) && (o.isBreak(le.previousSibling) || !o.onlyZeroWidthSpace(le.previousSibling.textContent)) && (!X || !o.isBreak(X) && o.onlyZeroWidthSpace(X.textContent)))) {
                  E ? o.removeItem(Y[Z - 1]) : o.removeItem(r);
                  const J = u.appendFormatTag(O, o.isFormatElement(O.nextElementSibling) && !o.isRangeFormatElement(O.nextElementSibling) ? O.nextElementSibling : null);
                  o.copyFormatAttributes(J, O), u.setRange(J, 1, J, 1);
                  break;
                }
                if (E) {
                  C.insertHTML(h.collapsed && o.isBreak(h.startContainer.childNodes[h.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let J = M.focusNode;
                  const oe = M.focusOffset;
                  O === J && (J = J.childNodes[oe - Z > 1 ? oe - 1 : oe]), u.setRange(J, 1, J, 1);
                } else {
                  const J = M.focusNode.nextSibling, oe = o.createElement("BR");
                  u.insertNode(oe, null, !1);
                  const me = oe.previousSibling, ye = oe.nextSibling;
                  !o.isBreak(J) && !o.isBreak(me) && (!ye || o.onlyZeroWidthSpace(ye)) ? (oe.parentNode.insertBefore(oe.cloneNode(!1), oe), u.setRange(oe, 1, oe, 1)) : u.setRange(ye, 0, ye, 0);
                }
                m._onShortcutKey = !0;
                break;
              }
              if (h.collapsed && (V || N)) {
                m._enterPrevent(a);
                const E = o.createElement("BR"), M = o.createElement(_.nodeName);
                o.copyTagAttributes(M, _, n.lineAttrReset);
                let Y = E;
                do {
                  if (!o.isBreak(r) && r.nodeType === 1) {
                    const Z = r.cloneNode(!1);
                    Z.appendChild(Y), Y = Z;
                  }
                  r = r.parentNode;
                } while (_ !== r && _.contains(r));
                M.appendChild(Y), _.parentNode.insertBefore(M, V && !N ? _ : _.nextElementSibling), N && u.setRange(E, 1, E, 1);
                break;
              }
              if (_) {
                a.stopPropagation();
                let E, M = 0;
                if (h.collapsed)
                  o.onlyZeroWidthSpace(_) ? E = u.appendFormatTag(_, _.cloneNode(!1)) : E = o.splitElement(h.endContainer, h.endOffset, o.getElementDepth(_));
                else {
                  const Y = o.getFormatElement(h.startContainer, null) !== o.getFormatElement(h.endContainer, null), Z = _.cloneNode(!1);
                  Z.innerHTML = "<br>";
                  const le = h.commonAncestorContainer, X = le === h.startContainer && le === h.endContainer && o.onlyZeroWidthSpace(le) ? h : u.removeNode();
                  if (E = o.getFormatElement(X.container, null), !E) {
                    o.isWysiwygDiv(X.container) && (m._enterPrevent(a), e.element.wysiwyg.appendChild(Z), E = Z, o.copyTagAttributes(E, _, n.lineAttrReset), u.setRange(E, M, E, M));
                    break;
                  }
                  const J = o.getRangeFormatElement(X.container);
                  if (E = E.contains(J) ? o.getChildElement(J, o.getFormatElement.bind(o)) : E, Y) {
                    if (N && !V)
                      E.parentNode.insertBefore(Z, !X.prevContainer || X.container === X.prevContainer ? E.nextElementSibling : E), E = Z, M = 0;
                    else if (M = X.offset, V) {
                      const oe = E.parentNode.insertBefore(Z, E);
                      N && (E = oe, M = 0);
                    }
                  } else
                    N && V ? (E.parentNode.insertBefore(Z, X.prevContainer && X.container === X.prevContainer ? E.nextElementSibling : E), E = Z, M = 0) : E = o.splitElement(X.container, X.offset, o.getElementDepth(_));
                }
                m._enterPrevent(a), o.copyTagAttributes(E, _, n.lineAttrReset), u.setRange(E, M, E, M);
                break;
              }
            }
            if (y) break;
            if (S && o.getParentElement(S, "FIGCAPTION") && o.getParentElement(S, o.isList) && (m._enterPrevent(a), _ = u.appendFormatTag(_, null), u.setRange(_, 0, _, 0)), w) {
              a.preventDefault(), a.stopPropagation(), u.containerOff(), u.controllersOff();
              const N = e[w], V = N._container, E = V.previousElementSibling || V.nextElementSibling;
              let M = null;
              o.isListCell(V.parentNode) ? M = o.createElement("BR") : (M = o.createElement(o.isFormatElement(E) && !o.isRangeFormatElement(E) ? E.nodeName : n.defaultTag), M.innerHTML = "<br>"), p ? V.parentNode.insertBefore(M, V) : V.parentNode.insertBefore(M, V.nextElementSibling), u.callPlugin(w, function() {
                u.selectComponent(N._element, w) === !1 && u.blur();
              }, null);
            }
            break;
          case 27:
            if (w)
              return a.preventDefault(), a.stopPropagation(), u.controllersOff(), !1;
            break;
        }
        if (p && f === 16) {
          a.preventDefault(), a.stopPropagation();
          const L = u.plugins.table;
          if (L && !L._shift && !L._ref) {
            const B = o.getParentElement(_, o.isCell);
            if (B) {
              L.onTableCellMultiSelect.call(u, B, !0);
              return;
            }
          }
        } else if (p && (o.isOSX_IOS ? b : g) && f === 32) {
          a.preventDefault(), a.stopPropagation();
          const L = u.insertNode(o.createTextNode(" "));
          if (L) {
            u.setRange(L, L.length, L, L.length);
            return;
          }
        }
        if (o.isIE && !g && !b && !y && !m._nonTextKeyCode.test(f) && o.isBreak(h.commonAncestorContainer)) {
          const L = o.createTextNode(o.zeroWidthSpace);
          u.insertNode(L, null, !1), u.setRange(L, 1, L, 1);
        }
        m._directionKeyCode.test(f) && (d.setTimeout(u._editorRange.bind(u), 0), m._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(a) {
      if (a.shiftKey) return;
      let r = u.getSelectionNode();
      const f = function(b, h) {
        if (h || (h = 0), a.preventDefault(), a.stopPropagation(), !b) return;
        let y = u.getFileComponent(b);
        y ? u.selectComponent(y.target, y.pluginName) : (u.setRange(b, h, b, h), u.controllersOff());
      }, p = o.getParentElement(r, "table");
      if (p) {
        const b = o.getParentElement(r, "tr"), h = o.getParentElement(r, "td");
        let y = h, w = h;
        if (h) {
          for (; y && y.firstChild; ) y = y.firstChild;
          for (; w && w.lastChild; ) w = w.lastChild;
        }
        let _ = r;
        for (; _ && _.firstChild; ) _ = _.firstChild;
        const S = _ === y, I = _ === w;
        let L = null, B = 0;
        if (a.keyCode === 38 && S) {
          const D = b && b.previousElementSibling;
          for (D ? L = D.children[h.cellIndex] : L = o.getPreviousDeepestNode(p, u.context.element.wysiwyg); L && L.lastChild; ) L = L.lastChild;
          L && (B = L.textContent.length);
        } else if (a.keyCode === 40 && I) {
          const D = b && b.nextElementSibling;
          for (D ? L = D.children[h.cellIndex] : L = o.getNextDeepestNode(p, u.context.element.wysiwyg); L && L.firstChild; ) L = L.firstChild;
        }
        if (L)
          return f(L, B), !1;
      }
      const g = u.getFileComponent(r);
      if (g) {
        const b = /37|38/.test(a.keyCode), h = /39|40/.test(a.keyCode);
        if (b) {
          const y = o.getPreviousDeepestNode(g.target, u.context.element.wysiwyg);
          f(y, y && y.textContent.length);
        } else if (h) {
          const y = o.getNextDeepestNode(g.target, u.context.element.wysiwyg);
          f(y);
        }
      }
    },
    onKeyUp_wysiwyg: function(a) {
      if (m._onShortcutKey) return;
      u._editorRange();
      const r = a.keyCode, f = a.ctrlKey || a.metaKey || r === 91 || r === 92 || r === 224, p = a.altKey;
      if (u.isReadOnly) {
        !f && m._cursorMoveKeyCode.test(r) && m._applyTagEffects();
        return;
      }
      const g = u.getRange();
      let b = u.getSelectionNode();
      if (u._isBalloon && (u._isBalloonAlways && r !== 27 || !g.collapsed))
        if (u._isBalloonAlways)
          r !== 27 && m._showToolbarBalloonDelay();
        else {
          m._showToolbarBalloon();
          return;
        }
      let h = b;
      for (; h && h.firstChild; ) h = h.firstChild;
      const y = u.getFileComponent(h);
      if (!(a.keyCode === 16 || a.shiftKey) && y ? u.selectComponent(y.target, y.pluginName) : u.currentFileComponentInfo && u.controllersOff(), r === 8 && o.isWysiwygDiv(b) && b.textContent === "" && b.children.length === 0) {
        a.preventDefault(), a.stopPropagation(), b.innerHTML = "";
        const L = o.createElement(o.isFormatElement(u._variable.currentNodes[0]) ? u._variable.currentNodes[0] : n.defaultTag);
        L.innerHTML = "<br>", b.appendChild(L), u.setRange(L, 0, L, 0), m._applyTagEffects(), u.history.push(!1);
        return;
      }
      const w = o.getFormatElement(b, null), _ = o.getRangeFormatElement(b, null), S = u._formatAttrsTemp;
      if (S) {
        for (let L = 0, B = S.length; L < B; L++) {
          if (r === 13 && /^id$/i.test(S[L].name)) {
            w.removeAttribute("id");
            continue;
          }
          w.setAttribute(S[L].name, S[L].value);
        }
        u._formatAttrsTemp = null;
      }
      if (!w && g.collapsed && !o.isComponent(b) && !o.isList(b) && u._setDefaultFormat(o.isRangeFormatElement(_) ? "DIV" : n.defaultTag) !== null && (b = u.getSelectionNode()), !f && !p && !m._nonTextKeyCode.test(r) && b.nodeType === 3 && o.zeroWidthRegExp.test(b.textContent) && !(a.isComposing !== void 0 ? a.isComposing : m._IEisComposing)) {
        let L = g.startOffset, B = g.endOffset;
        const D = (b.textContent.substring(0, B).match(m._frontZeroWidthReg) || "").length;
        L = g.startOffset - D, B = g.endOffset - D, b.textContent = b.textContent.replace(o.zeroWidthRegExp, ""), u.setRange(b, L < 0 ? 0 : L, b, B < 0 ? 0 : B);
      }
      m._deleteKeyCode.test(r) && w && o.onlyZeroWidthSpace(w.textContent) && !w.previousElementSibling && (w.innerHTML = "<br>", u.setRange(w, 0, w, 0)), u._charCount(""), !(typeof C.onKeyUp == "function" && C.onKeyUp(a, u) === !1) && !f && !p && !m._historyIgnoreKeyCode.test(r) && u.history.push(!0);
    },
    onScroll_wysiwyg: function(a) {
      u.controllersOff(), u._isBalloon && m._hideToolbar(), typeof C.onScroll == "function" && C.onScroll(a, u);
    },
    onFocus_wysiwyg: function(a) {
      u._antiBlur || (u.hasFocus = !0, d.setTimeout(m._applyTagEffects), u._isInline && m._showToolbarInline(), typeof C.onFocus == "function" && C.onFocus(a, u));
    },
    onBlur_wysiwyg: function(a) {
      u._antiBlur || u._variable.isCodeView || (u.hasFocus = !1, u.effectNode = null, u.controllersOff(), (u._isInline || u._isBalloon) && m._hideToolbar(), u._setKeyEffect([]), u._variable.currentNodes = [], u._variable.currentNodesMap = [], n.showPathLabel && (e.element.navigation.textContent = ""), typeof C.onBlur == "function" && C.onBlur(a, u, this));
    },
    onMouseDown_resizingBar: function(a) {
      a.stopPropagation(), u.submenuOff(), u.controllersOff(), u._variable.resizeClientY = a.clientY, e.element.resizeBackground.style.display = "block";
      function r() {
        e.element.resizeBackground.style.display = "none", c.removeEventListener("mousemove", m._resize_editor), c.removeEventListener("mouseup", r);
      }
      c.addEventListener("mousemove", m._resize_editor), c.addEventListener("mouseup", r);
    },
    _resize_editor: function(a) {
      const r = e.element.editorArea.offsetHeight + (a.clientY - u._variable.resizeClientY), f = r < u._variable.minResizingSize ? u._variable.minResizingSize : r;
      e.element.wysiwygFrame.style.height = e.element.code.style.height = f + "px", u._variable.resizeClientY = a.clientY, o.isResizeObserverSupported || u.__callResizeFunction(f, null);
    },
    onResize_window: function() {
      o.isResizeObserverSupported || u.resetResponsiveToolbar();
      const a = e.element.toolbar, r = a.style.display === "none" || u._isInline && !u._inlineToolbarAttr.isShow;
      if (!(a.offsetWidth === 0 && !r)) {
        if (e.fileBrowser && e.fileBrowser.area.style.display === "block" && (e.fileBrowser.body.style.maxHeight = d.innerHeight - e.fileBrowser.header.offsetHeight - 50 + "px"), u.submenuActiveButton && u.submenu && u._setMenuPosition(u.submenuActiveButton, u.submenu), u._variable.isFullScreen) {
          u._variable.innerHeight_fullScreen += d.innerHeight - a.offsetHeight - u._variable.innerHeight_fullScreen, e.element.editorArea.style.height = u._variable.innerHeight_fullScreen + "px";
          return;
        }
        if (u._variable.isCodeView && u._isInline) {
          m._showToolbarInline();
          return;
        }
        u._iframeAutoHeight(), u._sticky && (a.style.width = e.element.topArea.offsetWidth - 2 + "px", m.onScroll_window());
      }
    },
    onScroll_window: function() {
      if (u._variable.isFullScreen || e.element.toolbar.offsetWidth === 0 || n.stickyToolbar < 0) return;
      const a = e.element, r = a.editorArea.offsetHeight, f = (this.scrollY || c.documentElement.scrollTop) + n.stickyToolbar, p = m._getEditorOffsets(n.toolbarContainer).top - (u._isInline ? a.toolbar.offsetHeight : 0), g = u._isInline && f - p > 0 ? f - p - e.element.toolbar.offsetHeight : 0;
      f < p ? m._offStickyToolbar() : f + u._variable.minResizingSize >= r + p ? (u._sticky || m._onStickyToolbar(g), a.toolbar.style.top = g + r + p + n.stickyToolbar - f - u._variable.minResizingSize + "px") : f >= p && m._onStickyToolbar(g);
    },
    _getEditorOffsets: function(a) {
      let r = a || e.element.topArea, f = 0, p = 0, g = 0;
      for (; r; )
        f += r.offsetTop, p += r.offsetLeft, g += r.scrollTop, r = r.offsetParent;
      return {
        top: f,
        left: p,
        scroll: g
      };
    },
    _getPageBottomSpace: function() {
      return c.documentElement.scrollHeight - (m._getEditorOffsets(null).top + e.element.topArea.offsetHeight);
    },
    _onStickyToolbar: function(a) {
      const r = e.element;
      !u._isInline && !n.toolbarContainer && (r._stickyDummy.style.height = r.toolbar.offsetHeight + "px", r._stickyDummy.style.display = "block"), r.toolbar.style.top = n.stickyToolbar + a + "px", r.toolbar.style.width = u._isInline ? u._inlineToolbarAttr.width : r.toolbar.offsetWidth + "px", o.addClass(r.toolbar, "se-toolbar-sticky"), u._sticky = !0;
    },
    _offStickyToolbar: function() {
      const a = e.element;
      a._stickyDummy.style.display = "none", a.toolbar.style.top = u._isInline ? u._inlineToolbarAttr.top : "", a.toolbar.style.width = u._isInline ? u._inlineToolbarAttr.width : "", a.editorArea.style.marginTop = "", o.removeClass(a.toolbar, "se-toolbar-sticky"), u._sticky = !1;
    },
    _codeViewAutoHeight: function() {
      u._variable.isFullScreen || (e.element.code.style.height = e.element.code.scrollHeight + "px");
    },
    // FireFox - table delete, Chrome - image, video, audio
    _hardDelete: function() {
      const a = u.getRange(), r = a.startContainer, f = a.endContainer, p = o.getRangeFormatElement(r), g = o.getRangeFormatElement(f), b = o.isCell(p), h = o.isCell(g), y = a.commonAncestorContainer;
      if ((b && !p.previousElementSibling && !p.parentElement.previousElementSibling || h && !g.nextElementSibling && !g.parentElement.nextElementSibling) && p !== g)
        if (!b)
          o.removeItem(o.getParentElement(g, function(S) {
            return y === S.parentNode;
          }));
        else if (!h)
          o.removeItem(o.getParentElement(p, function(S) {
            return y === S.parentNode;
          }));
        else
          return o.removeItem(o.getParentElement(p, function(S) {
            return y === S.parentNode;
          })), u.nativeFocus(), !0;
      const w = r.nodeType === 1 ? o.getParentElement(r, ".se-component") : null, _ = f.nodeType === 1 ? o.getParentElement(f, ".se-component") : null;
      return w && o.removeItem(w), _ && o.removeItem(_), !1;
    },
    onPaste_wysiwyg: function(a) {
      const r = o.isIE ? d.clipboardData : a.clipboardData;
      return r ? m._dataTransferAction("paste", a, r) : !0;
    },
    _setClipboardComponent: function(a, r, f) {
      a.preventDefault(), a.stopPropagation(), f.setData("text/html", r.component.outerHTML);
    },
    onCopy_wysiwyg: function(a) {
      const r = o.isIE ? d.clipboardData : a.clipboardData;
      if (typeof C.onCopy == "function" && C.onCopy(a, r, u) === !1)
        return a.preventDefault(), a.stopPropagation(), !1;
      const f = u.currentFileComponentInfo;
      f && !o.isIE && (m._setClipboardComponent(a, f, r), o.addClass(f.component, "se-component-copy"), d.setTimeout(function() {
        o.removeClass(f.component, "se-component-copy");
      }, 150));
    },
    onSave_wysiwyg: function(a) {
      if (typeof C.onSave == "function") {
        C.onSave(a, u);
        return;
      }
    },
    onCut_wysiwyg: function(a) {
      const r = o.isIE ? d.clipboardData : a.clipboardData;
      if (typeof C.onCut == "function" && C.onCut(a, r, u) === !1)
        return a.preventDefault(), a.stopPropagation(), !1;
      const f = u.currentFileComponentInfo;
      f && !o.isIE && (m._setClipboardComponent(a, f, r), o.removeItem(f.component), u.controllersOff()), d.setTimeout(function() {
        u.history.push(!1);
      });
    },
    onDrop_wysiwyg: function(a) {
      if (u.isReadOnly || o.isIE)
        return a.preventDefault(), a.stopPropagation(), !1;
      const r = a.dataTransfer;
      return r ? (m._setDropLocationSelection(a), u.removeNode(), document.body.contains(u.currentControllerTarget) || u.controllersOff(), m._dataTransferAction("drop", a, r)) : !0;
    },
    _setDropLocationSelection: function(a) {
      const r = { startContainer: null, startOffset: null, endContainer: null, endOffset: null };
      let f = null;
      if (a.rangeParent ? (r.startContainer = a.rangeParent, r.startOffset = a.rangeOffset, r.endContainer = a.rangeParent, r.endOffset = a.rangeOffset) : u._wd.caretRangeFromPoint ? f = u._wd.caretRangeFromPoint(a.clientX, a.clientY) : f = u.getRange(), f && (r.startContainer = f.startContainer, r.startOffset = f.startOffset, r.endContainer = f.endContainer, r.endOffset = f.endOffset), r.startContainer === r.endContainer) {
        const p = o.getParentElement(r.startContainer, o.isComponent);
        p && (r.startContainer = p, r.startOffset = 0, r.endContainer = p, r.endOffset = 0);
      }
      u.setRange(r.startContainer, r.startOffset, r.endContainer, r.endOffset);
    },
    _dataTransferAction: function(a, r, f) {
      let p, g;
      if (o.isIE) {
        p = f.getData("Text");
        const b = u.getRange(), h = o.createElement("DIV"), y = {
          sc: b.startContainer,
          so: b.startOffset,
          ec: b.endContainer,
          eo: b.endOffset
        };
        return h.setAttribute("contenteditable", !0), h.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(h), h.focus(), d.setTimeout(function() {
          g = h.innerHTML, o.removeItem(h), u.setRange(y.sc, y.so, y.ec, y.eo), m._setClipboardData(a, r, p, g, f);
        }), !0;
      } else if (p = f.getData("text/plain"), g = f.getData("text/html"), m._setClipboardData(a, r, p, g, f) === !1)
        return r.preventDefault(), r.stopPropagation(), !1;
    },
    _setClipboardData: function(a, r, f, p, g) {
      const b = /class=["']*Mso(Normal|List)/i.test(p) || /content=["']*Word.Document/i.test(p) || /content=["']*OneNote.File/i.test(p) || /content=["']*Excel.Sheet/i.test(p);
      !p ? p = o._HTMLConvertor(f).replace(/\n/g, "<br>") : (p = p.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), b && (p = p.replace(/\n/g, " "), f = f.replace(/\n/g, " ")), p = u.cleanHTML(p, u.pasteTagsWhitelistRegExp, u.pasteTagsBlacklistRegExp));
      const y = u._charCount(u._charTypeHTML ? p : f);
      if (a === "paste" && typeof C.onPaste == "function") {
        const _ = C.onPaste(r, p, y, u);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          p = _;
        }
      }
      if (a === "drop" && typeof C.onDrop == "function") {
        const _ = C.onDrop(r, p, y, u);
        if (_ === !1)
          return !1;
        if (typeof _ == "string") {
          if (!_) return !1;
          p = _;
        }
      }
      const w = g.files;
      if (w.length > 0 && !b)
        return /^image/.test(w[0].type) && u.plugins.image && C.insertImage(w), !1;
      if (!y)
        return !1;
      if (p)
        return C.insertHTML(p, !0, !1), !1;
    },
    onMouseMove_wysiwyg: function(a) {
      if (u.isDisabled || u.isReadOnly) return !1;
      const r = o.getParentElement(a.target, o.isComponent), f = u._lineBreaker.style;
      if (r && !u.currentControllerName) {
        const p = e.element;
        let g = 0, b = p.wysiwyg;
        do
          g += b.scrollTop, b = b.parentElement;
        while (b && !/^(BODY|HTML)$/i.test(b.nodeName));
        const h = p.wysiwyg.scrollTop, y = m._getEditorOffsets(null), w = o.getOffset(r, p.wysiwygFrame).top + h, _ = a.pageY + g + (n.iframe && !n.toolbarContainer ? p.toolbar.offsetHeight : 0), S = w + (n.iframe ? g : y.top), I = o.isListCell(r.parentNode);
        let L = "", B = "";
        if ((I ? !r.previousSibling : !o.isFormatElement(r.previousElementSibling)) && _ < S + 20)
          B = w, L = "t";
        else if ((I ? !r.nextSibling : !o.isFormatElement(r.nextElementSibling)) && _ > S + r.offsetHeight - 20)
          B = w + r.offsetHeight, L = "b";
        else {
          f.display = "none";
          return;
        }
        u._variable._lineBreakComp = r, u._variable._lineBreakDir = L, f.top = B - h + "px", u._lineBreakerButton.style.left = o.getOffset(r).left + r.offsetWidth / 2 - 15 + "px", f.display = "block";
      } else f.display !== "none" && (f.display = "none");
    },
    _enterPrevent: function(a) {
      a.preventDefault(), o.isMobile && u.__focusTemp.focus();
    },
    _onMouseDown_lineBreak: function(a) {
      a.preventDefault();
    },
    _onLineBreak: function(a) {
      a.preventDefault();
      const r = u._variable._lineBreakComp, f = this ? this : u._variable._lineBreakDir, p = o.isListCell(r.parentNode), g = o.createElement(p ? "BR" : o.isCell(r.parentNode) ? "DIV" : n.defaultTag);
      if (p || (g.innerHTML = "<br>"), u._charTypeHTML && !u.checkCharCount(g.outerHTML, "byte-html")) return;
      r.parentNode.insertBefore(g, f === "t" ? r : r.nextSibling), u._lineBreaker.style.display = "none", u._variable._lineBreakComp = null;
      const b = p ? g : g.firstChild;
      u.setRange(b, 1, b, 1), u.history.push(!1);
    },
    _resizeObserver: null,
    _toolbarObserver: null,
    _addEvent: function() {
      const a = n.iframe ? u._ww : e.element.wysiwyg;
      o.isResizeObserverSupported && (this._resizeObserver = new d.ResizeObserver(function(r) {
        u.__callResizeFunction(-1, r[0]);
      })), e.element.toolbar.addEventListener("mousedown", m._buttonsEventHandler, !1), e.element._menuTray.addEventListener("mousedown", m._buttonsEventHandler, !1), e.element.toolbar.addEventListener("click", m.onClick_toolbar, !1), a.addEventListener("mousedown", m.onMouseDown_wysiwyg, !1), a.addEventListener("click", m.onClick_wysiwyg, !1), a.addEventListener(o.isIE ? "textinput" : "input", m.onInput_wysiwyg, !1), a.addEventListener("keydown", m.onKeyDown_wysiwyg, !1), a.addEventListener("keyup", m.onKeyUp_wysiwyg, !1), a.addEventListener("paste", m.onPaste_wysiwyg, !1), a.addEventListener("copy", m.onCopy_wysiwyg, !1), a.addEventListener("cut", m.onCut_wysiwyg, !1), a.addEventListener("drop", m.onDrop_wysiwyg, !1), a.addEventListener("scroll", m.onScroll_wysiwyg, !1), a.addEventListener("focus", m.onFocus_wysiwyg, !1), a.addEventListener("blur", m.onBlur_wysiwyg, !1), m._lineBreakerBind = { a: m._onLineBreak.bind(""), t: m._onLineBreak.bind("t"), b: m._onLineBreak.bind("b") }, a.addEventListener("mousemove", m.onMouseMove_wysiwyg, !1), u._lineBreakerButton.addEventListener("mousedown", m._onMouseDown_lineBreak, !1), u._lineBreakerButton.addEventListener("click", m._lineBreakerBind.a, !1), e.element.lineBreaker_t.addEventListener("mousedown", m._lineBreakerBind.t, !1), e.element.lineBreaker_b.addEventListener("mousedown", m._lineBreakerBind.b, !1), a.addEventListener("touchstart", m.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), a.addEventListener("touchend", m.onClick_wysiwyg, { passive: !0, useCapture: !1 }), n.height === "auto" && !n.codeMirrorEditor && (e.element.code.addEventListener("keydown", m._codeViewAutoHeight, !1), e.element.code.addEventListener("keyup", m._codeViewAutoHeight, !1), e.element.code.addEventListener("paste", m._codeViewAutoHeight, !1)), e.element.resizingBar && (/\d+/.test(n.height) && n.resizeEnable ? e.element.resizingBar.addEventListener("mousedown", m.onMouseDown_resizingBar, !1) : o.addClass(e.element.resizingBar, "se-resizing-none")), m._setResponsiveToolbar(), o.isResizeObserverSupported && (this._toolbarObserver = new d.ResizeObserver(u.resetResponsiveToolbar)), d.addEventListener("resize", m.onResize_window, !1), n.stickyToolbar > -1 && d.addEventListener("scroll", m.onScroll_window, !1);
    },
    _removeEvent: function() {
      const a = n.iframe ? u._ww : e.element.wysiwyg;
      e.element.toolbar.removeEventListener("mousedown", m._buttonsEventHandler), e.element._menuTray.removeEventListener("mousedown", m._buttonsEventHandler), e.element.toolbar.removeEventListener("click", m.onClick_toolbar), a.removeEventListener("mousedown", m.onMouseDown_wysiwyg), a.removeEventListener("click", m.onClick_wysiwyg), a.removeEventListener(o.isIE ? "textinput" : "input", m.onInput_wysiwyg), a.removeEventListener("keydown", m.onKeyDown_wysiwyg), a.removeEventListener("keyup", m.onKeyUp_wysiwyg), a.removeEventListener("paste", m.onPaste_wysiwyg), a.removeEventListener("copy", m.onCopy_wysiwyg), a.removeEventListener("cut", m.onCut_wysiwyg), a.removeEventListener("drop", m.onDrop_wysiwyg), a.removeEventListener("scroll", m.onScroll_wysiwyg), a.removeEventListener("mousemove", m.onMouseMove_wysiwyg), u._lineBreakerButton.removeEventListener("mousedown", m._onMouseDown_lineBreak), u._lineBreakerButton.removeEventListener("click", m._lineBreakerBind.a), e.element.lineBreaker_t.removeEventListener("mousedown", m._lineBreakerBind.t), e.element.lineBreaker_b.removeEventListener("mousedown", m._lineBreakerBind.b), m._lineBreakerBind = null, a.removeEventListener("touchstart", m.onMouseDown_wysiwyg, { passive: !0, useCapture: !1 }), a.removeEventListener("touchend", m.onClick_wysiwyg, { passive: !0, useCapture: !1 }), a.removeEventListener("focus", m.onFocus_wysiwyg), a.removeEventListener("blur", m.onBlur_wysiwyg), e.element.code.removeEventListener("keydown", m._codeViewAutoHeight), e.element.code.removeEventListener("keyup", m._codeViewAutoHeight), e.element.code.removeEventListener("paste", m._codeViewAutoHeight), e.element.resizingBar && e.element.resizingBar.removeEventListener("mousedown", m.onMouseDown_resizingBar), m._resizeObserver && (m._resizeObserver.unobserve(e.element.wysiwygFrame), m._resizeObserver = null), m._toolbarObserver && (m._toolbarObserver.unobserve(e.element._toolbarShadow), m._toolbarObserver = null), d.removeEventListener("resize", m.onResize_window), d.removeEventListener("scroll", m.onScroll_window);
    },
    _setResponsiveToolbar: function() {
      if (s.length === 0) {
        s = null;
        return;
      }
      m._responsiveCurrentSize = "default";
      const a = m._responsiveButtonSize = [], r = m._responsiveButtons = { default: s[0] };
      for (let f = 1, p = s.length, g, b; f < p; f++)
        b = s[f], g = b[0] * 1, a.push(g), r[g] = b[1];
      a.sort(function(f, p) {
        return f - p;
      }).unshift("default");
    }
  }, C = {
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
    setToolbarButtons: function(a) {
      u.submenuOff(), u.containerOff(), u.moreLayerOff();
      const r = un._createToolBar(c, a, u.plugins, n);
      s = r.responsiveButtons, m._setResponsiveToolbar(), e.element.toolbar.replaceChild(r._buttonTray, e.element._buttonTray);
      const f = cn(e.element.originElement, u._getConstructed(e.element), n);
      e.element = f.element, e.tool = f.tool, n.iframe && (e.element.wysiwyg = u._wd.body), u._recoverButtonStates(), u._cachingButtons(), u.history._resetCachingButton(), u.effectNode = null, u.hasFocus && m._applyTagEffects(), u.isReadOnly && o.setDisabledButtons(!0, u.resizingDisabledButtons), typeof C.onSetToolbarButtons == "function" && C.onSetToolbarButtons(r._buttonTray.querySelectorAll("button"), u);
    },
    /**
     * @description Add or reset option property (Editor is reloaded)
     * @param {Object} _options Options
     */
    setOptions: function(a) {
      m._removeEvent(), u._resetComponents(), o.removeClass(u._styleCommandMap.showBlocks, "active"), o.removeClass(u._styleCommandMap.codeView, "active"), u._variable.isCodeView = !1, u._iframeAuto = null, u.plugins = a.plugins || u.plugins;
      const r = [n, a].reduce(function(b, h) {
        for (let y in h)
          if (o.hasOwn(h, y))
            if (y === "plugins" && h[y] && b[y]) {
              let w = b[y], _ = h[y];
              w = w.length ? w : d.Object.keys(w).map(function(S) {
                return w[S];
              }), _ = _.length ? _ : d.Object.keys(_).map(function(S) {
                return _[S];
              }), b[y] = _.filter(function(S) {
                return w.indexOf(S) === -1;
              }).concat(w);
            } else
              b[y] = h[y];
        return b;
      }, {}), f = e.element, p = f.wysiwyg.innerHTML, g = un._setOptions(r, e, n);
      g.callButtons && (t = g.callButtons, u.initPlugins = {}), g.plugins && (u.plugins = i = g.plugins), f._menuTray.children.length === 0 && (this._menuTray = {}), s = g.toolbar.responsiveButtons, u.options = n = r, u.lang = l = n.lang, n.iframe && f.wysiwygFrame.addEventListener("load", function() {
        o._setIframeDocument(this, n), u._setOptionsInit(f, p);
      }), f.editorArea.appendChild(f.wysiwygFrame), n.iframe || u._setOptionsInit(f, p);
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
      u.notice.open.call(u, a);
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
      const a = u.getContents(!1);
      e.element.originElement.value = a, m.onSave_wysiwyg(a, u);
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
      return u.getContents(a);
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
      return a = typeof a == "string" ? a : n.charCounterType, u.getCharLength(u._charTypeHTML ? e.element.wysiwyg.innerHTML : e.element.wysiwyg.textContent, a);
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
      !u.plugins.image || !a || (u.initPlugins.image ? u.plugins.image.submitAction.call(u, a) : u.callPlugin("image", u.plugins.image.submitAction.bind(u, a), null), u.focus());
    },
    /**
     * @description Inserts an HTML element or HTML string or plain string at the current cursor position
     * @param {Element|String} html HTML Element or HTML string or plain string
     * @param {Boolean} notCleaningData If true, inserts the HTML string without refining it with core.cleanHTML.
     * @param {Boolean} checkCharCount If true, if "options.maxCharCount" is exceeded when "element" is added, null is returned without addition.
     * @param {Boolean} rangeSelection If true, range select the inserted node.
     */
    insertHTML: function(a, r, f, p) {
      if (e.element.wysiwygFrame.contains(u.getSelection().focusNode) || u.focus(), typeof a == "string") {
        r || (a = u.cleanHTML(a, null, null));
        try {
          if (o.isListCell(o.getFormatElement(u.getSelectionNode(), null))) {
            const B = c.createRange().createContextualFragment(a).childNodes;
            u._isFormatData(B) && (a = u._convertListCell(B));
          }
          const b = c.createRange().createContextualFragment(a).childNodes;
          if (f) {
            const L = u._charTypeHTML ? "outerHTML" : "textContent";
            let B = "";
            for (let D = 0, W = b.length; D < W; D++)
              B += b[D][L];
            if (!u.checkCharCount(B, null)) return;
          }
          let h, y, w, _, S;
          for (; h = b[0]; ) {
            if (_ && _.nodeType === 3 && y && y.nodeType === 1 && o.isBreak(h)) {
              _ = h, o.removeItem(h);
              continue;
            }
            w = u.insertNode(h, y, !1), y = w.container || w, S || (S = w), _ = h;
          }
          _.nodeType === 3 && y.nodeType === 1 && (y = _);
          const I = y.nodeType === 3 ? w.endOffset || y.textContent.length : y.childNodes.length;
          p ? u.setRange(S.container || S, S.startOffset || 0, y, I) : u.setRange(y, I, y, I);
        } catch (g) {
          if (u.isDisabled || u.isReadOnly) return;
          console.warn("[SUNEDITOR.insertHTML.fail] " + g), u.execCommand("insertHTML", !1, a);
        }
      } else if (o.isComponent(a))
        u.insertComponent(a, !1, f, !1);
      else {
        let g = null;
        (o.isFormatElement(a) || o.isMedia(a)) && (g = o.getFormatElement(u.getSelectionNode(), null)), u.insertNode(a, g, f);
      }
      u.effectNode = null, u.focus(), u.history.push(!1);
    },
    /**
     * @description Change the contents of the suneditor
     * @param {String|undefined} contents Contents to Input
     */
    setContents: function(a) {
      u.setContents(a);
    },
    /**
     * @description Add contents to the suneditor
     * @param {String} contents Contents to Input
     */
    appendContents: function(a) {
      const r = u.convertContentsForEditor(a);
      if (u._variable.isCodeView)
        u._setCodeView(u._getCodeView() + `
` + u.convertHTMLForCodeView(r, !1));
      else {
        const f = o.createElement("DIV");
        f.innerHTML = r;
        const p = e.element.wysiwyg, g = f.children;
        for (let b = 0, h = g.length; b < h; b++)
          g[b] && p.appendChild(g[b]);
      }
      u.history.push(!1);
    },
    /**
     * @description Switch to or off "ReadOnly" mode.
     * @param {Boolean} value "readOnly" boolean value.
     */
    readOnly: function(a) {
      u.isReadOnly = a, o.setDisabledButtons(!!a, u.resizingDisabledButtons), a ? (u.controllersOff(), u.submenuActiveButton && u.submenuActiveButton.disabled && u.submenuOff(), u._moreLayerActiveButton && u._moreLayerActiveButton.disabled && u.moreLayerOff(), u.containerActiveButton && u.containerActiveButton.disabled && u.containerOff(), u.modalForm && u.plugins.dialog.close.call(u), e.element.code.setAttribute("readOnly", "true"), o.addClass(e.element.wysiwygFrame, "se-read-only")) : (e.element.code.removeAttribute("readOnly"), o.removeClass(e.element.wysiwygFrame, "se-read-only")), n.codeMirrorEditor && n.codeMirrorEditor.setOption("readOnly", !!a);
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
      u.submenuOff(), u.containerOff(), u.controllersOff(), u.notice && u.notice.close.call(u), u.modalForm && u.plugins.dialog.close.call(u), u.history._destroy(), m._removeEvent(), o.removeItem(e.element.toolbar), o.removeItem(e.element.topArea);
      for (let a in u.functions)
        o.hasOwn(u, a) && delete u.functions[a];
      for (let a in u)
        o.hasOwn(u, a) && delete u[a];
      for (let a in m)
        o.hasOwn(m, a) && delete m[a];
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
        u._isInline ? m._showToolbarInline() : (e.element.toolbar.style.display = "", e.element._stickyDummy.style.display = ""), m.onResize_window();
      },
      /**
       * @description Hide the toolbar
       */
      hide: function() {
        u._isInline ? m._hideToolbar() : (e.element.toolbar.style.display = "none", e.element._stickyDummy.style.display = "none"), m.onResize_window();
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
  let x = e.element, k = x.originElement, z = x.topArea;
  return k.style.display = "none", z.style.display = "block", n.iframe && x.wysiwygFrame.addEventListener("load", function() {
    o._setIframeDocument(this, n), u._editorInit(!1, n.value), n.value = null;
  }), typeof k.nextElementSibling == "object" ? k.parentNode.insertBefore(z, k.nextElementSibling) : k.parentNode.appendChild(z), x.editorArea.appendChild(x.wysiwygFrame), x = k = z = null, n.iframe || (u._editorInit(!1, n.value), n.value = null), C;
}
const kc = {
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
    de._propertiesInit(), typeof t != "object" && (t = {}), i && (t = [i, t].reduce(function(s, c) {
      for (let d in c)
        if (de.hasOwn(c, d))
          if (d === "plugins" && c[d] && s[d]) {
            let o = s[d], v = c[d];
            o = o.length ? o : Object.keys(o).map(function(u) {
              return o[u];
            }), v = v.length ? v : Object.keys(v).map(function(u) {
              return v[u];
            }), s[d] = v.filter(function(u) {
              return o.indexOf(u) === -1;
            }).concat(o);
          } else
            s[d] = c[d];
      return s;
    }, {}));
    const l = typeof e == "string" ? document.getElementById(e) : e;
    if (!l)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const n = un.init(l, t);
    if (n.constructed._top.id && document.getElementById(n.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + n.constructed._top.id + '")');
    return wc(cn(l, n.constructed, n.options), n.pluginCallButtons, n.plugins, n.options.lang, t, n._responsiveButtons);
  }
}, xc = ["innerHTML", "id", "tabindex"], Sc = /* @__PURE__ */ Le({
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
    const l = i, n = e, s = Q(null), c = Q(n.modelValue);
    let d = null, o;
    const v = Q(n.focusing), u = (k) => {
      v.value = !0, l("focus", k);
    }, m = (k) => {
      v.value = !1, l("blur", k);
    }, C = (k) => {
      o && clearTimeout(o), o = setTimeout(() => {
        qo(k) === "" ? c.value = "" : c.value = k;
      }, 100);
    }, x = () => {
      let k = {
        //@ts-ignore
        lang: Eo[n.lang] ? Eo[n.lang] : Vl,
        plugins: {
          ...yc
        },
        ..._c
      };
      d = kc.create(n.id, k), d.onChange = (z) => {
        C(z), n.disabled ? d == null || d.disabled() : d == null || d.enabled();
      }, d.onKeyUp = (z, a) => {
        C(a.getContents(!1));
      }, d.onBlur = () => {
        m();
      }, d.onClick = () => {
        u();
      };
    };
    return be(() => n.modelValue, (k) => c.value = k), be(c, (k) => l("update:modelValue", k)), Fl(() => {
      x();
    }), t({
      doSetValue: (k) => {
        d && d.setContents(k);
      }
    }), (k, z) => ($(), se("div", {
      innerHTML: c.value,
      ref_key: "input",
      ref: s,
      id: k.id,
      tabindex: k.tabindex
    }, null, 8, xc));
  }
}), Ec = {
  key: 0,
  class: "lkt-field--searchable-box"
}, Tc = ["value", "placeholder"], Lc = { key: 0 }, Bc = {
  key: 1,
  class: "lkt-field-select-read"
}, zc = ["title"], Nc = /* @__PURE__ */ Le({
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
    const l = i, n = e, s = n.multiple && n.canTag, c = Q(""), d = Q(null), o = Q(n.showOptions);
    be(o, (h) => {
      s || l("update:showOptions", h);
    });
    const v = Q(n.focusing), u = Q(!1), m = Q(!1), C = () => {
      zl(() => {
        v.value = u.value || m.value, o.value = v.value;
      });
    };
    be(u, (h) => {
      h && (m.value = !1), C();
    }), be(m, (h) => {
      h && (u.value = !1), C();
    }), be(v, (h) => {
      l(h ? "focus" : "blur");
    });
    let x, k;
    const z = (h) => {
      x = setTimeout(() => {
        u.value = !1;
      }, 100);
    }, a = (h) => {
      u.value = !0, s && h.key === "Enter" ? (l("tag", c.value), c.value = "") : ["ArrowDown", "ArrowUp", "Enter"].includes(h.key) ? l("navigate", h) : l("search", c.value);
    }, r = (h) => {
      u.value = !0;
    }, f = (h) => {
      k = setTimeout(() => {
        m.value = !1;
      }, 100);
    }, p = (h) => {
      m.value = !0, ["ArrowDown", "ArrowUp", "Enter"].includes(h.key) && l("navigate", h);
    }, g = (h) => {
      m.value = !0;
    }, b = (h) => {
      l("untag", h);
    };
    return t({
      keepFocused: () => {
        clearTimeout(x), clearTimeout(k), d.value && d.value.focus();
      }
    }), (h, y) => {
      const w = xe("lkt-tag"), _ = xe("lkt-button");
      return $(), se(Qe, null, [
        h.searchable && (h.multiple || h.searchMode) || j(s) ? ($(), se("div", Ec, [
          h.multiple ? ($(), ne(w, {
            key: 0,
            icon: h.optionsIcon,
            text: h.pickedOptions.length
          }, null, 8, ["icon", "text"])) : h.pickedOptions.length > 0 ? ($(), ne(w, { key: 1 }, {
            default: Ee(() => [
              re(Xt, {
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
          lt(ae("input", {
            "onUpdate:modelValue": y[0] || (y[0] = (S) => c.value = S),
            ref_key: "queryField",
            ref: d,
            value: c.value,
            placeholder: h.searchPlaceholder,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: a,
            onBlur: z,
            onFocus: r
          }, null, 40, Tc), [
            [Hl, c.value]
          ])
        ])) : fe("", !0),
        lt(re(_, {
          ref: "selectButton",
          type: j(s) ? "content" : "",
          class: "lkt-field--toggle-button lkt-field--select-button",
          "open-tooltip": o.value,
          "onUpdate:openTooltip": y[1] || (y[1] = (S) => o.value = S),
          onKeyup: p,
          onBlur: f,
          onFocus: g
        }, {
          default: Ee(() => [
            j(s) || h.multiple && h.pickedOptions.length > 0 ? ($(), se(Qe, { key: 0 }, [
              h.multipleDisplayEdition === j(Li).Count ? ($(), se("div", Lc, Lt(h.pickedOptions.length), 1)) : ($(), se("ul", Bc, [
                ($(!0), se(Qe, null, kt(h.pickedOptions, (S, I) => ($(), se("li", {
                  title: S.label
                }, [
                  re(Xt, {
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
                    "is-tag": j(s),
                    onClickIcon: b
                  }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter", "editable", "is-tag"])
                ], 8, zc))), 256))
              ]))
            ], 64)) : !h.multiple && h.pickedOptions.length > 0 ? ($(), ne(Xt, {
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
          [Zt, h.multiple || !h.searchable || !h.searchMode]
        ])
      ], 64);
    };
  }
}), Dc = { class: "lkt-calc--formula" }, Ac = { class: "lkt-calc--custom-pad" }, Ic = { class: "lkt-calc--pad" }, Rc = { class: "lkt-calc--numeric-pad" }, Mc = { class: "lkt-calc--math-pad" }, Oc = { class: "lkt-calc--advance-math-pad" }, Fc = /* @__PURE__ */ Le({
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
    be(n, (g) => i("update:modelValue", g));
    const c = Q(l.focusing), d = Q(null);
    let o;
    const v = () => {
      clearTimeout(o), s.value && typeof s.value.focus == "function" && s.value.focus();
    }, u = (g) => {
      n.value += "" + g, v();
    }, m = (g) => {
      n.value += " " + g + " ", v();
    }, C = (g) => {
      n.value += " " + g + "(", v();
    }, x = () => {
      n.value += " sqrt(", v();
    }, k = (g) => {
      n.value += "" + g, v();
    }, z = () => {
      n.value += ".", v();
    }, a = () => {
      n.value += " ", v();
    }, r = (g) => {
      n.value += "" + g.value, v();
    }, f = () => {
      c.value = !0;
    }, p = () => {
      o = setTimeout(() => {
        c.value = !1;
      }, 100);
    };
    return be(c, (g) => {
      i(g ? "focus" : "blur");
    }), (g, b) => {
      const h = xe("lkt-button"), y = xe("lkt-tooltip");
      return $(), se("div", {
        ref_key: "container",
        ref: d
      }, [
        ae("div", Dc, [
          lt(ae("input", {
            type: "text",
            ref_key: "input",
            ref: s,
            "onUpdate:modelValue": b[0] || (b[0] = (w) => n.value = w),
            onFocus: f,
            onBlur: p
          }, null, 544), [
            [Hl, n.value]
          ])
        ]),
        g.editable ? ($(), ne(y, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--calc",
          modelValue: c.value,
          "onUpdate:modelValue": b[27] || (b[27] = (w) => c.value = w),
          referrer: d.value,
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: Ee(() => [
            ae("div", Ac, [
              ($(!0), se(Qe, null, kt(g.options, (w) => ($(), ne(h, {
                icon: w.icon,
                text: w.label,
                onClick: (_) => r(w)
              }, null, 8, ["icon", "text", "onClick"]))), 256))
            ]),
            ae("div", Ic, [
              ae("div", Rc, [
                re(h, {
                  onClick: b[1] || (b[1] = (w) => u(7)),
                  text: "7",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[2] || (b[2] = (w) => u(8)),
                  text: "8",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[3] || (b[3] = (w) => u(9)),
                  text: "9",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[4] || (b[4] = (w) => u(4)),
                  text: "4",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[5] || (b[5] = (w) => u(5)),
                  text: "5",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[6] || (b[6] = (w) => u(6)),
                  text: "6",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[7] || (b[7] = (w) => u(1)),
                  text: "1",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[8] || (b[8] = (w) => u(2)),
                  text: "2",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[9] || (b[9] = (w) => u(3)),
                  text: "3",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[10] || (b[10] = (w) => z()),
                  text: "."
                }),
                re(h, {
                  onClick: b[11] || (b[11] = (w) => u(0)),
                  text: "0",
                  class: "lkt-calc--btn-number"
                }),
                re(h, {
                  onClick: b[12] || (b[12] = (w) => a()),
                  text: " "
                })
              ]),
              ae("div", Mc, [
                re(h, {
                  onClick: b[13] || (b[13] = (w) => k("[")),
                  text: "["
                }),
                re(h, {
                  onClick: b[14] || (b[14] = (w) => k("]")),
                  text: "]"
                }),
                re(h, {
                  onClick: b[15] || (b[15] = (w) => k("(")),
                  text: "("
                }),
                re(h, {
                  onClick: b[16] || (b[16] = (w) => k(")")),
                  text: ")"
                }),
                re(h, {
                  onClick: b[17] || (b[17] = (w) => m("+")),
                  text: "+"
                }),
                re(h, {
                  onClick: b[18] || (b[18] = (w) => m("-")),
                  text: "−"
                }),
                re(h, {
                  onClick: b[19] || (b[19] = (w) => m("*")),
                  text: "×"
                }),
                re(h, {
                  onClick: b[20] || (b[20] = (w) => m("/")),
                  text: "÷"
                })
              ]),
              ae("div", Oc, [
                re(h, {
                  onClick: b[21] || (b[21] = (w) => x()),
                  text: "√"
                }),
                re(h, {
                  onClick: b[22] || (b[22] = (w) => C("log")),
                  text: "log"
                }),
                re(h, {
                  onClick: b[23] || (b[23] = (w) => C("ln")),
                  text: "ln"
                }),
                re(h, {
                  onClick: b[24] || (b[24] = (w) => C("sin")),
                  text: "sin"
                }),
                re(h, {
                  onClick: b[25] || (b[25] = (w) => C("cos")),
                  text: "cos"
                }),
                re(h, {
                  onClick: b[26] || (b[26] = (w) => C("tan")),
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
}), Hc = /* @__PURE__ */ Le({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = ee(() => {
      let c = io(t.validation.code, t.stack), d = {
        min: t.validation.min,
        max: t.validation.max,
        value: t.validation.equalToValue
      }, o = io(t.validation.status + "-" + t.validation.code, t.stack);
      return o && (c = o), c ? c.startsWith("__:") ? gn(c.substring(3), d) : hs(c, d, ":", "") : t.validation.code;
    }), l = ee(() => ie.validationIconSlot !== ""), n = ee(() => ie.validationIconSlot), s = ee(() => {
      let c = [];
      return c.push("code-" + t.validation.code), c.push("is-" + t.validation.status), c.join(" ");
    });
    return (c, d) => ($(), se("div", {
      class: ut(["lkt-field-validation-message", s.value])
    }, [
      l.value ? ($(), ne(ii(n.value), { key: 0 })) : fe("", !0),
      mi(" " + Lt(i.value), 1)
    ], 2));
  }
}), Vc = {
  key: 0,
  class: "lkt-field-validation-info"
}, Pc = /* @__PURE__ */ Le({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = Q(t.items), l = Q(!1);
    return be(() => t.items, (n) => {
      l.value = !0, zl(() => l.value = !1);
    }, { deep: !0 }), (n, s) => l.value ? fe("", !0) : ($(), se("div", Vc, [
      ($(!0), se(Qe, null, kt(i.value, (c) => ($(), ne(Hc, {
        validation: c,
        stack: n.stack,
        key: c.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), Uc = ["id"], Wc = /* @__PURE__ */ Le({
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
    let c, d;
    const o = Q({}), v = () => {
      clearTimeout(d), d = setTimeout(() => {
        o.value = {
          query: n.value
        };
      }, 300);
    }, u = () => {
      s.value = !0;
    }, m = () => {
      c = setTimeout(() => {
        s.value = !1;
      }, 100);
    };
    be(s, (x) => {
      i(x ? "focus" : "blur");
    });
    const C = () => {
      clearTimeout(c), setTimeout(() => {
        u();
      }, 100);
    };
    return (x, k) => {
      const z = xe("lkt-table"), a = xe("lkt-tooltip");
      return $(), se(Qe, null, [
        lt(ae("input", {
          id: x.id,
          type: "text",
          ref: "input",
          "onUpdate:modelValue": k[0] || (k[0] = (r) => n.value = r),
          onFocus: u,
          onBlur: m,
          onKeyup: v
        }, null, 40, Uc), [
          [Hl, n.value]
        ]),
        x.editable && x.hadFirstFocus ? ($(), ne(a, {
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
          default: Ee(() => [
            re(z, li({
              type: j(Yo).Ul,
              itemsContainerClass: "lkt-field--dropdown-options",
              paginator: {
                resource: x.optionsResource,
                resourceData: o.value
              }
            }, {
              onPage: C,
              onClick: C
            }), {
              item: Ee(({ item: r, index: f, isLoading: p, canCreate: g, canUpdate: b, canDrop: h, canRead: y, doDrop: w }) => [
                re(Xt, {
                  option: r,
                  onClick: C
                }, null, 8, ["option"])
              ]),
              _: 1
            }, 16)
          ]),
          _: 1
        }, 8, ["modelValue", "referrer"])) : fe("", !0)
      ], 64);
    };
  }
}), $c = {
  key: 0,
  class: "lkt-field-main"
}, Zc = {
  key: 3,
  class: "lkt-field--read-value"
}, qc = ["innerHTML", "title"], jc = ["title"], Gc = { key: 0 }, Yc = {
  key: 1,
  class: "lkt-field-select-read"
}, Kc = ["title"], Xc = ["innerHTML"], Jc = ["innerHTML", "title"], Qc = ["innerHTML", "title"], ed = /* @__PURE__ */ Le({
  __name: "LktFieldValue",
  props: {
    type: { default: G.Text },
    value: {},
    label: {},
    title: { default: "" },
    fileName: {},
    valueSlot: { default: "" },
    emptyValueSlot: { default: "" },
    slotData: { default: () => ({}) },
    download: { type: [String, Function], default: "" },
    multiple: { type: Boolean, default: !1 },
    multipleDisplay: { default: Li.List },
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
    var v;
    const i = t, l = mn(), n = e, s = () => i("click"), c = ee(() => {
      switch (n.type) {
        case G.Select:
          if (n.multiple && Array.isArray(n.value) && n.value.length > 0 || n.multiple && n.multipleDisplay === Li.Count || !n.multiple && n.value) return "";
          break;
        case G.Date:
          if (n.value !== "") return "";
          break;
        default:
          if (n.value !== "") return "";
      }
      return ie.customValueSlots[n.emptyValueSlot] ?? ie.defaultEmptyValueSlot;
    }), d = ee(() => ie.customValueSlots[n.valueSlot] ?? "");
    let o = n.value;
    return n.type === G.Select && n.multiple && !Array.isArray(o) && (o = []), (n.type === G.Textarea || n.type === G.Text) && (typeof ((v = n.readModeConfig) == null ? void 0 : v.textMaxLength) < "u" && o.length > n.readModeConfig.textMaxLength ? o = o.substring(0, n.readModeConfig.textMaxLength) + "..." : typeof ie.readTextMaxLength < "u" && o.length > ie.readTextMaxLength && (o = o.substring(0, ie.readTextMaxLength) + "...")), (u, m) => {
      const C = xe("lkt-image"), x = xe("lkt-button"), k = xe("lkt-anchor"), z = xe("lkt-tag");
      return $(), se("div", {
        class: "lkt-field--read",
        onClick: s
      }, [
        j(l).value ? _t(u.$slots, "value", {
          key: 0,
          value: j(o),
          title: u.title,
          data: u.slotData
        }) : c.value ? ($(), ne(ii(c.value), {
          key: 1,
          data: u.slotData
        }, null, 8, ["data"])) : d.value ? ($(), ne(ii(d.value), {
          key: 2,
          value: j(o),
          title: u.title,
          data: u.slotData
        }, null, 8, ["value", "title", "data"])) : ($(), se(Qe, { key: 3 }, [
          u.type === j(G).File || u.type === j(G).Image ? ($(), se("div", $c, [
            re(x, {
              class: "lkt-field--toggle-button",
              text: u.type === j(G).File ? u.fileName : ""
            }, {
              default: Ee(() => [
                u.type === j(G).Image ? ($(), ne(C, {
                  key: 0,
                  src: j(o),
                  class: "lkt-field--image-cover"
                }, null, 8, ["src"])) : fe("", !0),
                u.type === j(G).Image ? ($(), ne(C, {
                  key: 1,
                  src: j(o),
                  class: "lkt-field--image-main"
                }, null, 8, ["src"])) : fe("", !0)
              ]),
              _: 1
            }, 8, ["text"])
          ])) : u.type === j(G).Email ? ($(), ne(k, {
            key: 1,
            type: "mail",
            class: "lkt-field--read-value",
            title: u.title,
            to: j(o)
          }, {
            default: Ee(() => [
              mi(Lt(j(o)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : u.type === j(G).Tel ? ($(), ne(k, {
            key: 2,
            type: "tel",
            class: "lkt-field--read-value",
            title: u.title,
            to: j(o)
          }, {
            default: Ee(() => [
              mi(Lt(j(o)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : j(qt).includes(u.type) ? ($(), se("div", Zc, [
            re(z, {
              icon: j(o) ? "lkt-icn-check" : "lkt-icn-cancel",
              "featured-text": u.label,
              title: u.title
            }, null, 8, ["icon", "featured-text", "title"])
          ])) : u.type === j(G).Date ? ($(), se("div", {
            key: 4,
            class: "lkt-field--read-value",
            innerHTML: j(o),
            title: u.title
          }, null, 8, qc)) : u.type === j(G).Select ? ($(), se("div", {
            key: 5,
            class: "lkt-field--read-value",
            title: u.title
          }, [
            u.multiple ? ($(), se(Qe, { key: 0 }, [
              u.multipleDisplay === j(Li).Count ? ($(), se("div", Gc, Lt(j(o).length), 1)) : j(o).length > 0 ? ($(), se("ul", Yc, [
                ($(!0), se(Qe, null, kt(j(o), (a, r) => {
                  var f;
                  return $(), se("li", {
                    title: (f = j(o)[r]) == null ? void 0 : f.label
                  }, [
                    re(Xt, {
                      option: j(o)[r],
                      "option-slot": u.optionSlot,
                      icon: u.optionsIcon,
                      text: u.optionsText,
                      "custom-class": u.optionsClass,
                      modal: u.optionsModal,
                      "modal-data": u.optionsModalData,
                      download: u.optionsDownload,
                      "label-formatter": u.optionsLabelFormatter
                    }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter"])
                  ], 8, Kc);
                }), 256))
              ])) : fe("", !0)
            ], 64)) : j(o).length > 0 ? ($(), ne(Xt, {
              key: 1,
              option: j(o)[0],
              "option-slot": u.optionSlot,
              icon: u.optionsIcon,
              text: u.optionsText,
              "custom-class": u.optionsClass,
              modal: u.optionsModal,
              "modal-data": u.optionsModalData,
              download: u.optionsDownload,
              "label-formatter": u.optionsLabelFormatter
            }, null, 8, ["option", "option-slot", "icon", "text", "custom-class", "modal", "modal-data", "download", "label-formatter"])) : fe("", !0)
          ], 8, jc)) : u.modal ? ($(), ne(x, {
            key: 6,
            class: "lkt-field--read-value",
            title: u.title,
            modal: u.modal,
            "modal-key": u.modalKey,
            "modal-data": u.modalData
          }, {
            default: Ee(() => [
              ae("div", { innerHTML: j(o) }, null, 8, Xc)
            ]),
            _: 1
          }, 8, ["title", "modal", "modal-key", "modal-data"])) : u.download ? ($(), ne(Xt, {
            key: 7,
            class: "lkt-field--read-value",
            option: { value: "", label: j(o) },
            download: u.download,
            text: u.optionsText,
            "custom-class": u.optionsClass
          }, null, 8, ["option", "download", "text", "custom-class"])) : u.type === j(G).Number ? ($(), se("div", {
            key: 8,
            class: "lkt-field--read-value",
            innerHTML: u.title,
            title: u.title
          }, null, 8, Jc)) : ($(), se("div", {
            key: 9,
            class: "lkt-field--read-value",
            innerHTML: j(o),
            title: u.title
          }, null, 8, Qc))
        ], 64))
      ]);
    };
  }
}), td = ["name", "id", "disabled", "readonly", "placeholder", "accept"], id = /* @__PURE__ */ Le({
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
    const l = i, n = e, s = Q(null), c = Q(null), d = Q(n.modelValue), o = Q(n.fileName), v = Q(n.uploading), u = (m) => {
      let C = m.target;
      if (C.files && C.files[0]) {
        o.value = C.files[0].name;
        const x = new FileReader();
        x.onload = (k) => {
          if (d.value = k.target.result, n.resource) {
            v.value = !0, l("uploading");
            let z = JSON.parse(JSON.stringify(n.resourceData));
            z.files = C.files[0], on(n.resource, z).then((a) => {
              if (v.value = !1, !a.success) {
                l("upload-error", a);
                return;
              }
              d.value = a.data, l("upload-success", a);
            }).catch((a) => {
              v.value = !1, l("upload-error", a);
            });
          }
        }, x.readAsDataURL(C.files[0]);
      }
      l("change", m);
    };
    return be(d, (m) => l("update:modelValue", m)), be(o, (m) => l("update:fileName", m)), t({
      click: () => {
        var m;
        console.log("file-input click", c.value, n.resource, n.resourceData), (m = c.value) == null || m.click();
      }
    }), (m, C) => {
      const x = xe("lkt-image"), k = xe("lkt-button");
      return $(), se(Qe, null, [
        ae("input", {
          ref_key: "inputElement",
          ref: s,
          type: "file",
          name: m.name,
          id: m.id,
          disabled: m.disabled,
          readonly: m.readonly,
          placeholder: m.placeholder,
          accept: m.accept,
          onChange: u
        }, null, 40, td),
        re(k, {
          ref_key: "buttonRef",
          ref: c,
          class: "lkt-field--toggle-button",
          "click-ref": s.value,
          text: m.isImage ? "" : o.value,
          disabled: m.disabled
        }, {
          default: Ee(() => [
            m.isImage ? ($(), ne(x, {
              key: 0,
              src: d.value,
              class: "lkt-field--image-cover"
            }, null, 8, ["src"])) : fe("", !0),
            m.isImage ? ($(), ne(x, {
              key: 1,
              src: d.value,
              class: "lkt-field--image-main"
            }, null, 8, ["src"])) : fe("", !0)
          ]),
          _: 1
        }, 8, ["click-ref", "text", "disabled"])
      ], 64);
    };
  }
}), ld = { class: "lkt-calendar" }, nd = { class: "calendar" }, od = { class: "lkt-calendar--header-grid" }, ad = ["innerHTML"], sd = {
  key: 0,
  class: "lkt-calendar--day-grid"
}, rd = { class: "lkt-calendar--day lkt-calendar--filling-day" }, ud = /* @__PURE__ */ Le({
  __name: "LktCalendar",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = t, l = e, n = Q(l.modelValue);
    be(() => l.modelValue, (p) => n.value = p, { deep: !0 }), be(n, (p) => i("update:modelValue", p));
    const s = Q(/* @__PURE__ */ new Date()), c = Q(/* @__PURE__ */ new Date());
    yn(n.value) && typeof n.value < "u" && (c.value = new Date(n.value.getFullYear(), n.value.getMonth(), n.value.getDate()));
    const d = Q(c.value.getFullYear()), o = Q(c.value.getMonth()), v = Q(!1), u = Q(Ti("Y-m", c.value)), m = ee(() => new Date(d.value, o.value + 1, 0).getDate()), C = ee(() => new Date(d.value, o.value, 1).getDay()), x = () => {
      o.value > 11 && (o.value = 0, d.value += 1), o.value += 1, c.value.setFullYear(d.value, o.value), c.value = new Date(c.value), u.value = Ti("Y-m", c.value);
    }, k = () => {
      o.value < 0 && (o.value = 11, d.value -= 1), o.value -= 1, c.value.setFullYear(d.value, o.value), c.value = new Date(c.value), u.value = Ti("Y-m", c.value);
    }, z = (p) => typeof n.value > "u" || n.value.getFullYear() !== d.value || n.value.getMonth() !== o.value ? !1 : n.value.getDate() === p, a = (p) => typeof n.value > "u" || s.value.getFullYear() !== d.value || s.value.getMonth() !== o.value ? !1 : s.value.getDate() === p, r = (p) => ({
      "is-picked": z(p),
      "is-today": a(p)
    }), f = (p) => {
      var g;
      (g = n.value) == null || g.setFullYear(d.value, o.value, p), n.value = new Date(n.value);
    };
    return (p, g) => {
      const b = xe("lkt-button");
      return $(), se("div", ld, [
        ae("div", nd, [
          ae("header", od, [
            re(b, {
              class: "lkt-calendar--day",
              onClick: k
            }, {
              default: Ee(() => g[0] || (g[0] = [
                mi("◀")
              ])),
              _: 1
            }),
            ae("div", {
              class: "lkt-calendar--header-text",
              innerHTML: u.value
            }, null, 8, ad),
            re(b, {
              class: "lkt-calendar--day",
              onClick: x
            }, {
              default: Ee(() => g[1] || (g[1] = [
                mi("▶")
              ])),
              _: 1
            })
          ]),
          v.value ? fe("", !0) : ($(), se("div", sd, [
            g[2] || (g[2] = cs('<div class="lkt-calendar--day lkt-calendar--week-day">Su</div><div class="lkt-calendar--day lkt-calendar--week-day">Mo</div><div class="lkt-calendar--day lkt-calendar--week-day">Tu</div><div class="lkt-calendar--day lkt-calendar--week-day">We</div><div class="lkt-calendar--day lkt-calendar--week-day">Th</div><div class="lkt-calendar--day lkt-calendar--week-day">Fr</div><div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>', 7)),
            ($(!0), se(Qe, null, kt(C.value, (h) => ($(), se("div", rd))), 256)),
            ($(!0), se(Qe, null, kt(m.value, (h) => ($(), ne(b, {
              class: ut(["lkt-calendar--day", r(h)]),
              text: h.toString(),
              onClick: () => f(h)
            }, null, 8, ["class", "text", "onClick"]))), 256))
          ]))
        ]),
        g[3] || (g[3] = ae("div", { class: "display-selected" }, [
          ae("p", { class: "selected" })
        ], -1))
      ]);
    };
  }
}), cd = /* @__PURE__ */ Le({
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
    const i = t, l = e, n = Q(void 0), s = Q(""), c = Q(l.modelValue), d = ee(() => ie.dateReadFormat ? ie.dateReadFormat : ie.langDateReadFormat[l.lang] ? ie.langDateReadFormat[l.lang] : ie.defaultDateReadFormat ? ie.defaultDateReadFormat : "Y-m-d"), o = (u) => {
      let m = new Date(u);
      yn(m) && (n.value = m);
    }, v = () => {
      s.value = ea(n.value, d.value);
    };
    return be(() => l.modelValue, (u) => {
      c.value = u, o(u);
    }), be(c, (u) => i("update:modelValue", u)), be(n, (u) => {
      typeof u > "u" ? c.value = "" : c.value = Ti("Y-m-d", u), v();
    }, { deep: !0 }), Fl(() => {
      o(l.modelValue), v();
    }), (u, m) => {
      const C = xe("lkt-button");
      return $(), ne(C, {
        type: j(Ii).Tooltip,
        class: "lkt-field--toggle-button",
        text: s.value,
        tooltip: {
          class: "lkt-field--date--tooltip",
          locationY: j(vn).Bottom,
          locationX: j(bn).LeftCorner
        }
      }, {
        tooltip: Ee(() => [
          re(ud, {
            modelValue: n.value,
            "onUpdate:modelValue": m[0] || (m[0] = (x) => n.value = x)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["type", "text", "tooltip"]);
    };
  }
}), Ro = (e, t) => typeof e == "object" && !Array.isArray(e) ? e[t] : e, jl = (e, t, i) => {
  if (t) {
    let l = '<i class="' + t + '"></i>';
    i ? e += l : e = l + e;
  }
  return e;
}, dd = { key: 1 }, Ea = /* @__PURE__ */ Le({
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
    const l = Q(e.modelValue), n = (s, c) => {
    };
    return (s, c) => {
      const d = xe("lkt-button");
      return $(), ne(d, {
        modal: s.modal,
        "modal-key": s.modalKey,
        "modal-data": s.modalData,
        onClick: n
      }, {
        default: Ee(() => [
          l.value ? _t(s.$slots, "item", {
            key: 0,
            item: l.value
          }) : ($(), se("p", dd, "No data"))
        ]),
        _: 3
      }, 8, ["modal", "modal-key", "modal-data"]);
    };
  }
}), fd = /* @__PURE__ */ Le({
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
    const t = mn(), i = e, l = Q(i.modelValue), n = ee(() => typeof i.max == "boolean" || l.value.length < i.max ? ["modal-create"] : []);
    return (s, c) => {
      const d = xe("lkt-table");
      return $(), ne(d, {
        type: "item",
        modelValue: l.value,
        "onUpdate:modelValue": c[0] || (c[0] = (o) => l.value = o),
        perms: n.value,
        "edit-mode": s.editable,
        "new-value-generator": () => {
        },
        modal: s.modal,
        "modal-key": s.modalKey,
        "modal-data": s.modalData,
        "required-items-for-top-create": 999999
      }, {
        item: Ee(({ item: o, index: v, isLoading: u, canCreate: m, canRead: C, canUpdate: x, canDrop: k, doDrop: z }) => [
          re(Ea, {
            modelValue: l.value[v],
            "onUpdate:modelValue": (a) => l.value[v] = a,
            "item-type": s.itemType
          }, Xi({ _: 2 }, [
            j(t).item ? {
              name: "item",
              fn: Ee(({ item: a }) => [
                _t(s.$slots, "item", {
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
function Mo(e, t) {
  var i = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    t && (l = l.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), i.push.apply(i, l);
  }
  return i;
}
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mo(Object(i), !0).forEach(function(l) {
      hd(e, l, i[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : Mo(Object(i)).forEach(function(l) {
      Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(i, l));
    });
  }
  return e;
}
function Sl(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Sl = function(t) {
    return typeof t;
  } : Sl = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sl(e);
}
function hd(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}
function zt() {
  return zt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var l in i)
        Object.prototype.hasOwnProperty.call(i, l) && (e[l] = i[l]);
    }
    return e;
  }, zt.apply(this, arguments);
}
function pd(e, t) {
  if (e == null) return {};
  var i = {}, l = Object.keys(e), n, s;
  for (s = 0; s < l.length; s++)
    n = l[s], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
  return i;
}
function md(e, t) {
  if (e == null) return {};
  var i = pd(e, t), l, n;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (n = 0; n < s.length; n++)
      l = s[n], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
  }
  return i;
}
var gd = "1.15.6";
function Bt(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var Nt = Bt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Mi = Bt(/Edge/i), Oo = Bt(/firefox/i), Bi = Bt(/safari/i) && !Bt(/chrome/i) && !Bt(/android/i), wn = Bt(/iP(ad|od|hone)/i), Ta = Bt(/chrome/i) && Bt(/android/i), La = {
  capture: !1,
  passive: !1
};
function we(e, t, i) {
  e.addEventListener(t, i, !Nt && La);
}
function _e(e, t, i) {
  e.removeEventListener(t, i, !Nt && La);
}
function Al(e, t) {
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
function Ba(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function Ct(e, t, i, l) {
  if (e) {
    i = i || document;
    do {
      if (t != null && (t[0] === ">" ? e.parentNode === i && Al(e, t) : Al(e, t)) || l && e === i)
        return e;
      if (e === i) break;
    } while (e = Ba(e));
  }
  return null;
}
var Fo = /\s+/g;
function st(e, t, i) {
  if (e && t)
    if (e.classList)
      e.classList[i ? "add" : "remove"](t);
    else {
      var l = (" " + e.className + " ").replace(Fo, " ").replace(" " + t + " ", " ");
      e.className = (l + (i ? " " + t : "")).replace(Fo, " ");
    }
}
function he(e, t, i) {
  var l = e && e.style;
  if (l) {
    if (i === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (i = e.currentStyle), t === void 0 ? i : i[t];
    !(t in l) && t.indexOf("webkit") === -1 && (t = "-webkit-" + t), l[t] = i + (typeof i == "string" ? "" : "px");
  }
}
function pi(e, t) {
  var i = "";
  if (typeof e == "string")
    i = e;
  else
    do {
      var l = he(e, "transform");
      l && l !== "none" && (i = l + " " + i);
    } while (!t && (e = e.parentNode));
  var n = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return n && new n(i);
}
function za(e, t, i) {
  if (e) {
    var l = e.getElementsByTagName(t), n = 0, s = l.length;
    if (i)
      for (; n < s; n++)
        i(l[n], n);
    return l;
  }
  return [];
}
function wt() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function Pe(e, t, i, l, n) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var s, c, d, o, v, u, m;
    if (e !== window && e.parentNode && e !== wt() ? (s = e.getBoundingClientRect(), c = s.top, d = s.left, o = s.bottom, v = s.right, u = s.height, m = s.width) : (c = 0, d = 0, o = window.innerHeight, v = window.innerWidth, u = window.innerHeight, m = window.innerWidth), (t || i) && e !== window && (n = n || e.parentNode, !Nt))
      do
        if (n && n.getBoundingClientRect && (he(n, "transform") !== "none" || i && he(n, "position") !== "static")) {
          var C = n.getBoundingClientRect();
          c -= C.top + parseInt(he(n, "border-top-width")), d -= C.left + parseInt(he(n, "border-left-width")), o = c + s.height, v = d + s.width;
          break;
        }
      while (n = n.parentNode);
    if (l && e !== window) {
      var x = pi(n || e), k = x && x.a, z = x && x.d;
      x && (c /= z, d /= k, m /= k, u /= z, o = c + u, v = d + m);
    }
    return {
      top: c,
      left: d,
      bottom: o,
      right: v,
      width: m,
      height: u
    };
  }
}
function Ho(e, t, i) {
  for (var l = Kt(e, !0), n = Pe(e)[t]; l; ) {
    var s = Pe(l)[i], c = void 0;
    if (c = n >= s, !c) return l;
    if (l === wt()) break;
    l = Kt(l, !1);
  }
  return !1;
}
function gi(e, t, i, l) {
  for (var n = 0, s = 0, c = e.children; s < c.length; ) {
    if (c[s].style.display !== "none" && c[s] !== pe.ghost && (l || c[s] !== pe.dragged) && Ct(c[s], i.draggable, e, !1)) {
      if (n === t)
        return c[s];
      n++;
    }
    s++;
  }
  return null;
}
function kn(e, t) {
  for (var i = e.lastElementChild; i && (i === pe.ghost || he(i, "display") === "none" || t && !Al(i, t)); )
    i = i.previousElementSibling;
  return i || null;
}
function dt(e, t) {
  var i = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== pe.clone && (!t || Al(e, t)) && i++;
  return i;
}
function Vo(e) {
  var t = 0, i = 0, l = wt();
  if (e)
    do {
      var n = pi(e), s = n.a, c = n.d;
      t += e.scrollLeft * s, i += e.scrollTop * c;
    } while (e !== l && (e = e.parentNode));
  return [t, i];
}
function vd(e, t) {
  for (var i in e)
    if (e.hasOwnProperty(i)) {
      for (var l in t)
        if (t.hasOwnProperty(l) && t[l] === e[i][l]) return Number(i);
    }
  return -1;
}
function Kt(e, t) {
  if (!e || !e.getBoundingClientRect) return wt();
  var i = e, l = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var n = he(i);
      if (i.clientWidth < i.scrollWidth && (n.overflowX == "auto" || n.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (n.overflowY == "auto" || n.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return wt();
        if (l || t) return i;
        l = !0;
      }
    }
  while (i = i.parentNode);
  return wt();
}
function bd(e, t) {
  if (e && t)
    for (var i in t)
      t.hasOwnProperty(i) && (e[i] = t[i]);
  return e;
}
function Gl(e, t) {
  return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
var zi;
function Na(e, t) {
  return function() {
    if (!zi) {
      var i = arguments, l = this;
      i.length === 1 ? e.call(l, i[0]) : e.apply(l, i), zi = setTimeout(function() {
        zi = void 0;
      }, t);
    }
  };
}
function yd() {
  clearTimeout(zi), zi = void 0;
}
function Da(e, t, i) {
  e.scrollLeft += t, e.scrollTop += i;
}
function Aa(e) {
  var t = window.Polymer, i = window.jQuery || window.Zepto;
  return t && t.dom ? t.dom(e).cloneNode(!0) : i ? i(e).clone(!0)[0] : e.cloneNode(!0);
}
function Ia(e, t, i) {
  var l = {};
  return Array.from(e.children).forEach(function(n) {
    var s, c, d, o;
    if (!(!Ct(n, t.draggable, e, !1) || n.animated || n === i)) {
      var v = Pe(n);
      l.left = Math.min((s = l.left) !== null && s !== void 0 ? s : 1 / 0, v.left), l.top = Math.min((c = l.top) !== null && c !== void 0 ? c : 1 / 0, v.top), l.right = Math.max((d = l.right) !== null && d !== void 0 ? d : -1 / 0, v.right), l.bottom = Math.max((o = l.bottom) !== null && o !== void 0 ? o : -1 / 0, v.bottom);
    }
  }), l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
var nt = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function _d() {
  var e = [], t;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var l = [].slice.call(this.el.children);
        l.forEach(function(n) {
          if (!(he(n, "display") === "none" || n === pe.ghost)) {
            e.push({
              target: n,
              rect: Pe(n)
            });
            var s = xt({}, e[e.length - 1].rect);
            if (n.thisAnimationDuration) {
              var c = pi(n, !0);
              c && (s.top -= c.f, s.left -= c.e);
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
      e.splice(vd(e, {
        target: l
      }), 1);
    },
    animateAll: function(l) {
      var n = this;
      if (!this.options.animation) {
        clearTimeout(t), typeof l == "function" && l();
        return;
      }
      var s = !1, c = 0;
      e.forEach(function(d) {
        var o = 0, v = d.target, u = v.fromRect, m = Pe(v), C = v.prevFromRect, x = v.prevToRect, k = d.rect, z = pi(v, !0);
        z && (m.top -= z.f, m.left -= z.e), v.toRect = m, v.thisAnimationDuration && Gl(C, m) && !Gl(u, m) && // Make sure animatingRect is on line between toRect & fromRect
        (k.top - m.top) / (k.left - m.left) === (u.top - m.top) / (u.left - m.left) && (o = wd(k, C, x, n.options)), Gl(m, u) || (v.prevFromRect = u, v.prevToRect = m, o || (o = n.options.animation), n.animate(v, k, m, o)), o && (s = !0, c = Math.max(c, o), clearTimeout(v.animationResetTimer), v.animationResetTimer = setTimeout(function() {
          v.animationTime = 0, v.prevFromRect = null, v.fromRect = null, v.prevToRect = null, v.thisAnimationDuration = null;
        }, o), v.thisAnimationDuration = o);
      }), clearTimeout(t), s ? t = setTimeout(function() {
        typeof l == "function" && l();
      }, c) : typeof l == "function" && l(), e = [];
    },
    animate: function(l, n, s, c) {
      if (c) {
        he(l, "transition", ""), he(l, "transform", "");
        var d = pi(this.el), o = d && d.a, v = d && d.d, u = (n.left - s.left) / (o || 1), m = (n.top - s.top) / (v || 1);
        l.animatingX = !!u, l.animatingY = !!m, he(l, "transform", "translate3d(" + u + "px," + m + "px,0)"), this.forRepaintDummy = Cd(l), he(l, "transition", "transform " + c + "ms" + (this.options.easing ? " " + this.options.easing : "")), he(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          he(l, "transition", ""), he(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, c);
      }
    }
  };
}
function Cd(e) {
  return e.offsetWidth;
}
function wd(e, t, i, l) {
  return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - i.top, 2) + Math.pow(t.left - i.left, 2)) * l.animation;
}
var ci = [], Yl = {
  initializeByDefault: !0
}, Oi = {
  mount: function(t) {
    for (var i in Yl)
      Yl.hasOwnProperty(i) && !(i in t) && (t[i] = Yl[i]);
    ci.forEach(function(l) {
      if (l.pluginName === t.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once");
    }), ci.push(t);
  },
  pluginEvent: function(t, i, l) {
    var n = this;
    this.eventCanceled = !1, l.cancel = function() {
      n.eventCanceled = !0;
    };
    var s = t + "Global";
    ci.forEach(function(c) {
      i[c.pluginName] && (i[c.pluginName][s] && i[c.pluginName][s](xt({
        sortable: i
      }, l)), i.options[c.pluginName] && i[c.pluginName][t] && i[c.pluginName][t](xt({
        sortable: i
      }, l)));
    });
  },
  initializePlugins: function(t, i, l, n) {
    ci.forEach(function(d) {
      var o = d.pluginName;
      if (!(!t.options[o] && !d.initializeByDefault)) {
        var v = new d(t, i, t.options);
        v.sortable = t, v.options = t.options, t[o] = v, zt(l, v.defaults);
      }
    });
    for (var s in t.options)
      if (t.options.hasOwnProperty(s)) {
        var c = this.modifyOption(t, s, t.options[s]);
        typeof c < "u" && (t.options[s] = c);
      }
  },
  getEventProperties: function(t, i) {
    var l = {};
    return ci.forEach(function(n) {
      typeof n.eventProperties == "function" && zt(l, n.eventProperties.call(i[n.pluginName], t));
    }), l;
  },
  modifyOption: function(t, i, l) {
    var n;
    return ci.forEach(function(s) {
      t[s.pluginName] && s.optionListeners && typeof s.optionListeners[i] == "function" && (n = s.optionListeners[i].call(t[s.pluginName], l));
    }), n;
  }
};
function kd(e) {
  var t = e.sortable, i = e.rootEl, l = e.name, n = e.targetEl, s = e.cloneEl, c = e.toEl, d = e.fromEl, o = e.oldIndex, v = e.newIndex, u = e.oldDraggableIndex, m = e.newDraggableIndex, C = e.originalEvent, x = e.putSortable, k = e.extraEventProperties;
  if (t = t || i && i[nt], !!t) {
    var z, a = t.options, r = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !Nt && !Mi ? z = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (z = document.createEvent("Event"), z.initEvent(l, !0, !0)), z.to = c || i, z.from = d || i, z.item = n || i, z.clone = s, z.oldIndex = o, z.newIndex = v, z.oldDraggableIndex = u, z.newDraggableIndex = m, z.originalEvent = C, z.pullMode = x ? x.lastPutMode : void 0;
    var f = xt(xt({}, k), Oi.getEventProperties(l, t));
    for (var p in f)
      z[p] = f[p];
    i && i.dispatchEvent(z), a[r] && a[r].call(t, z);
  }
}
var xd = ["evt"], it = function(t, i) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = l.evt, s = md(l, xd);
  Oi.pluginEvent.bind(pe)(t, i, xt({
    dragEl: te,
    parentEl: Me,
    ghostEl: ge,
    rootEl: Ae,
    nextEl: ti,
    lastDownEl: El,
    cloneEl: Re,
    cloneHidden: Yt,
    dragStarted: xi,
    putSortable: Ye,
    activeSortable: pe.active,
    originalEvent: n,
    oldIndex: hi,
    oldDraggableIndex: Ni,
    newIndex: rt,
    newDraggableIndex: Gt,
    hideGhostForTarget: Fa,
    unhideGhostForTarget: Ha,
    cloneNowHidden: function() {
      Yt = !0;
    },
    cloneNowShown: function() {
      Yt = !1;
    },
    dispatchSortableEvent: function(d) {
      tt({
        sortable: i,
        name: d,
        originalEvent: n
      });
    }
  }, s));
};
function tt(e) {
  kd(xt({
    putSortable: Ye,
    cloneEl: Re,
    targetEl: te,
    rootEl: Ae,
    oldIndex: hi,
    oldDraggableIndex: Ni,
    newIndex: rt,
    newDraggableIndex: Gt
  }, e));
}
var te, Me, ge, Ae, ti, El, Re, Yt, hi, rt, Ni, Gt, ji, Ye, fi = !1, Il = !1, Rl = [], Qt, yt, Kl, Xl, Po, Uo, xi, di, Di, Ai = !1, Gi = !1, Tl, Je, Jl = [], dn = !1, Ml = [], Pl = typeof document < "u", Yi = wn, Wo = Mi || Nt ? "cssFloat" : "float", Sd = Pl && !Ta && !wn && "draggable" in document.createElement("div"), Ra = function() {
  if (Pl) {
    if (Nt)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), Ma = function(t, i) {
  var l = he(t), n = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), s = gi(t, 0, i), c = gi(t, 1, i), d = s && he(s), o = c && he(c), v = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + Pe(s).width, u = o && parseInt(o.marginLeft) + parseInt(o.marginRight) + Pe(c).width;
  if (l.display === "flex")
    return l.flexDirection === "column" || l.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (l.display === "grid")
    return l.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (s && d.float && d.float !== "none") {
    var m = d.float === "left" ? "left" : "right";
    return c && (o.clear === "both" || o.clear === m) ? "vertical" : "horizontal";
  }
  return s && (d.display === "block" || d.display === "flex" || d.display === "table" || d.display === "grid" || v >= n && l[Wo] === "none" || c && l[Wo] === "none" && v + u > n) ? "vertical" : "horizontal";
}, Ed = function(t, i, l) {
  var n = l ? t.left : t.top, s = l ? t.right : t.bottom, c = l ? t.width : t.height, d = l ? i.left : i.top, o = l ? i.right : i.bottom, v = l ? i.width : i.height;
  return n === d || s === o || n + c / 2 === d + v / 2;
}, Td = function(t, i) {
  var l;
  return Rl.some(function(n) {
    var s = n[nt].options.emptyInsertThreshold;
    if (!(!s || kn(n))) {
      var c = Pe(n), d = t >= c.left - s && t <= c.right + s, o = i >= c.top - s && i <= c.bottom + s;
      if (d && o)
        return l = n;
    }
  }), l;
}, Oa = function(t) {
  function i(s, c) {
    return function(d, o, v, u) {
      var m = d.options.group.name && o.options.group.name && d.options.group.name === o.options.group.name;
      if (s == null && (c || m))
        return !0;
      if (s == null || s === !1)
        return !1;
      if (c && s === "clone")
        return s;
      if (typeof s == "function")
        return i(s(d, o, v, u), c)(d, o, v, u);
      var C = (c ? d : o).options.group.name;
      return s === !0 || typeof s == "string" && s === C || s.join && s.indexOf(C) > -1;
    };
  }
  var l = {}, n = t.group;
  (!n || Sl(n) != "object") && (n = {
    name: n
  }), l.name = n.name, l.checkPull = i(n.pull, !0), l.checkPut = i(n.put), l.revertClone = n.revertClone, t.group = l;
}, Fa = function() {
  !Ra && ge && he(ge, "display", "none");
}, Ha = function() {
  !Ra && ge && he(ge, "display", "");
};
Pl && !Ta && document.addEventListener("click", function(e) {
  if (Il)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), Il = !1, !1;
}, !0);
var ei = function(t) {
  if (te) {
    t = t.touches ? t.touches[0] : t;
    var i = Td(t.clientX, t.clientY);
    if (i) {
      var l = {};
      for (var n in t)
        t.hasOwnProperty(n) && (l[n] = t[n]);
      l.target = l.rootEl = i, l.preventDefault = void 0, l.stopPropagation = void 0, i[nt]._onDragOver(l);
    }
  }
}, Ld = function(t) {
  te && te.parentNode[nt]._isOutsideThisEl(t.target);
};
function pe(e, t) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = t = zt({}, t), e[nt] = this;
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
      return Ma(e, this.options);
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
    supportPointer: pe.supportPointer !== !1 && "PointerEvent" in window && (!Bi || wn),
    emptyInsertThreshold: 5
  };
  Oi.initializePlugins(this, e, i);
  for (var l in i)
    !(l in t) && (t[l] = i[l]);
  Oa(t);
  for (var n in this)
    n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
  this.nativeDraggable = t.forceFallback ? !1 : Sd, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? we(e, "pointerdown", this._onTapStart) : (we(e, "mousedown", this._onTapStart), we(e, "touchstart", this._onTapStart)), this.nativeDraggable && (we(e, "dragover", this), we(e, "dragenter", this)), Rl.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), zt(this, _d());
}
pe.prototype = /** @lends Sortable.prototype */
{
  constructor: pe,
  _isOutsideThisEl: function(t) {
    !this.el.contains(t) && t !== this.el && (di = null);
  },
  _getDirection: function(t, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, t, i, te) : this.options.direction;
  },
  _onTapStart: function(t) {
    if (t.cancelable) {
      var i = this, l = this.el, n = this.options, s = n.preventOnFilter, c = t.type, d = t.touches && t.touches[0] || t.pointerType && t.pointerType === "touch" && t, o = (d || t).target, v = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || o, u = n.filter;
      if (Md(l), !te && !(/mousedown|pointerdown/.test(c) && t.button !== 0 || n.disabled) && !v.isContentEditable && !(!this.nativeDraggable && Bi && o && o.tagName.toUpperCase() === "SELECT") && (o = Ct(o, n.draggable, l, !1), !(o && o.animated) && El !== o)) {
        if (hi = dt(o), Ni = dt(o, n.draggable), typeof u == "function") {
          if (u.call(this, t, o, this)) {
            tt({
              sortable: i,
              rootEl: v,
              name: "filter",
              targetEl: o,
              toEl: l,
              fromEl: l
            }), it("filter", i, {
              evt: t
            }), s && t.preventDefault();
            return;
          }
        } else if (u && (u = u.split(",").some(function(m) {
          if (m = Ct(v, m.trim(), l, !1), m)
            return tt({
              sortable: i,
              rootEl: m,
              name: "filter",
              targetEl: o,
              fromEl: l,
              toEl: l
            }), it("filter", i, {
              evt: t
            }), !0;
        }), u)) {
          s && t.preventDefault();
          return;
        }
        n.handle && !Ct(v, n.handle, l, !1) || this._prepareDragStart(t, d, o);
      }
    }
  },
  _prepareDragStart: function(t, i, l) {
    var n = this, s = n.el, c = n.options, d = s.ownerDocument, o;
    if (l && !te && l.parentNode === s) {
      var v = Pe(l);
      if (Ae = s, te = l, Me = te.parentNode, ti = te.nextSibling, El = l, ji = c.group, pe.dragged = te, Qt = {
        target: te,
        clientX: (i || t).clientX,
        clientY: (i || t).clientY
      }, Po = Qt.clientX - v.left, Uo = Qt.clientY - v.top, this._lastX = (i || t).clientX, this._lastY = (i || t).clientY, te.style["will-change"] = "all", o = function() {
        if (it("delayEnded", n, {
          evt: t
        }), pe.eventCanceled) {
          n._onDrop();
          return;
        }
        n._disableDelayedDragEvents(), !Oo && n.nativeDraggable && (te.draggable = !0), n._triggerDragStart(t, i), tt({
          sortable: n,
          name: "choose",
          originalEvent: t
        }), st(te, c.chosenClass, !0);
      }, c.ignore.split(",").forEach(function(u) {
        za(te, u.trim(), Ql);
      }), we(d, "dragover", ei), we(d, "mousemove", ei), we(d, "touchmove", ei), c.supportPointer ? (we(d, "pointerup", n._onDrop), !this.nativeDraggable && we(d, "pointercancel", n._onDrop)) : (we(d, "mouseup", n._onDrop), we(d, "touchend", n._onDrop), we(d, "touchcancel", n._onDrop)), Oo && this.nativeDraggable && (this.options.touchStartThreshold = 4, te.draggable = !0), it("delayStart", this, {
        evt: t
      }), c.delay && (!c.delayOnTouchOnly || i) && (!this.nativeDraggable || !(Mi || Nt))) {
        if (pe.eventCanceled) {
          this._onDrop();
          return;
        }
        c.supportPointer ? (we(d, "pointerup", n._disableDelayedDrag), we(d, "pointercancel", n._disableDelayedDrag)) : (we(d, "mouseup", n._disableDelayedDrag), we(d, "touchend", n._disableDelayedDrag), we(d, "touchcancel", n._disableDelayedDrag)), we(d, "mousemove", n._delayedDragTouchMoveHandler), we(d, "touchmove", n._delayedDragTouchMoveHandler), c.supportPointer && we(d, "pointermove", n._delayedDragTouchMoveHandler), n._dragStartTimer = setTimeout(o, c.delay);
      } else
        o();
    }
  },
  _delayedDragTouchMoveHandler: function(t) {
    var i = t.touches ? t.touches[0] : t;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    te && Ql(te), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var t = this.el.ownerDocument;
    _e(t, "mouseup", this._disableDelayedDrag), _e(t, "touchend", this._disableDelayedDrag), _e(t, "touchcancel", this._disableDelayedDrag), _e(t, "pointerup", this._disableDelayedDrag), _e(t, "pointercancel", this._disableDelayedDrag), _e(t, "mousemove", this._delayedDragTouchMoveHandler), _e(t, "touchmove", this._delayedDragTouchMoveHandler), _e(t, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(t, i) {
    i = i || t.pointerType == "touch" && t, !this.nativeDraggable || i ? this.options.supportPointer ? we(document, "pointermove", this._onTouchMove) : i ? we(document, "touchmove", this._onTouchMove) : we(document, "mousemove", this._onTouchMove) : (we(te, "dragend", this), we(Ae, "dragstart", this._onDragStart));
    try {
      document.selection ? Ll(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(t, i) {
    if (fi = !1, Ae && te) {
      it("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && we(document, "dragover", Ld);
      var l = this.options;
      !t && st(te, l.dragClass, !1), st(te, l.ghostClass, !0), pe.active = this, t && this._appendGhost(), tt({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (yt) {
      this._lastX = yt.clientX, this._lastY = yt.clientY, Fa();
      for (var t = document.elementFromPoint(yt.clientX, yt.clientY), i = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(yt.clientX, yt.clientY), t !== i); )
        i = t;
      if (te.parentNode[nt]._isOutsideThisEl(t), i)
        do {
          if (i[nt]) {
            var l = void 0;
            if (l = i[nt]._onDragOver({
              clientX: yt.clientX,
              clientY: yt.clientY,
              target: t,
              rootEl: i
            }), l && !this.options.dragoverBubble)
              break;
          }
          t = i;
        } while (i = Ba(i));
      Ha();
    }
  },
  _onTouchMove: function(t) {
    if (Qt) {
      var i = this.options, l = i.fallbackTolerance, n = i.fallbackOffset, s = t.touches ? t.touches[0] : t, c = ge && pi(ge, !0), d = ge && c && c.a, o = ge && c && c.d, v = Yi && Je && Vo(Je), u = (s.clientX - Qt.clientX + n.x) / (d || 1) + (v ? v[0] - Jl[0] : 0) / (d || 1), m = (s.clientY - Qt.clientY + n.y) / (o || 1) + (v ? v[1] - Jl[1] : 0) / (o || 1);
      if (!pe.active && !fi) {
        if (l && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < l)
          return;
        this._onDragStart(t, !0);
      }
      if (ge) {
        c ? (c.e += u - (Kl || 0), c.f += m - (Xl || 0)) : c = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: u,
          f: m
        };
        var C = "matrix(".concat(c.a, ",").concat(c.b, ",").concat(c.c, ",").concat(c.d, ",").concat(c.e, ",").concat(c.f, ")");
        he(ge, "webkitTransform", C), he(ge, "mozTransform", C), he(ge, "msTransform", C), he(ge, "transform", C), Kl = u, Xl = m, yt = s;
      }
      t.cancelable && t.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!ge) {
      var t = this.options.fallbackOnBody ? document.body : Ae, i = Pe(te, !0, Yi, !0, t), l = this.options;
      if (Yi) {
        for (Je = t; he(Je, "position") === "static" && he(Je, "transform") === "none" && Je !== document; )
          Je = Je.parentNode;
        Je !== document.body && Je !== document.documentElement ? (Je === document && (Je = wt()), i.top += Je.scrollTop, i.left += Je.scrollLeft) : Je = wt(), Jl = Vo(Je);
      }
      ge = te.cloneNode(!0), st(ge, l.ghostClass, !1), st(ge, l.fallbackClass, !0), st(ge, l.dragClass, !0), he(ge, "transition", ""), he(ge, "transform", ""), he(ge, "box-sizing", "border-box"), he(ge, "margin", 0), he(ge, "top", i.top), he(ge, "left", i.left), he(ge, "width", i.width), he(ge, "height", i.height), he(ge, "opacity", "0.8"), he(ge, "position", Yi ? "absolute" : "fixed"), he(ge, "zIndex", "100000"), he(ge, "pointerEvents", "none"), pe.ghost = ge, t.appendChild(ge), he(ge, "transform-origin", Po / parseInt(ge.style.width) * 100 + "% " + Uo / parseInt(ge.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(t, i) {
    var l = this, n = t.dataTransfer, s = l.options;
    if (it("dragStart", this, {
      evt: t
    }), pe.eventCanceled) {
      this._onDrop();
      return;
    }
    it("setupClone", this), pe.eventCanceled || (Re = Aa(te), Re.removeAttribute("id"), Re.draggable = !1, Re.style["will-change"] = "", this._hideClone(), st(Re, this.options.chosenClass, !1), pe.clone = Re), l.cloneId = Ll(function() {
      it("clone", l), !pe.eventCanceled && (l.options.removeCloneOnHide || Ae.insertBefore(Re, te), l._hideClone(), tt({
        sortable: l,
        name: "clone"
      }));
    }), !i && st(te, s.dragClass, !0), i ? (Il = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : (_e(document, "mouseup", l._onDrop), _e(document, "touchend", l._onDrop), _e(document, "touchcancel", l._onDrop), n && (n.effectAllowed = "move", s.setData && s.setData.call(l, n, te)), we(document, "drop", l), he(te, "transform", "translateZ(0)")), fi = !0, l._dragStartId = Ll(l._dragStarted.bind(l, i, t)), we(document, "selectstart", l), xi = !0, window.getSelection().removeAllRanges(), Bi && he(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(t) {
    var i = this.el, l = t.target, n, s, c, d = this.options, o = d.group, v = pe.active, u = ji === o, m = d.sort, C = Ye || v, x, k = this, z = !1;
    if (dn) return;
    function a(R, U) {
      it(R, k, xt({
        evt: t,
        isOwner: u,
        axis: x ? "vertical" : "horizontal",
        revert: c,
        dragRect: n,
        targetRect: s,
        canSort: m,
        fromSortable: C,
        target: l,
        completed: f,
        onMove: function(O, N) {
          return Ki(Ae, i, te, n, O, Pe(O), t, N);
        },
        changed: p
      }, U));
    }
    function r() {
      a("dragOverAnimationCapture"), k.captureAnimationState(), k !== C && C.captureAnimationState();
    }
    function f(R) {
      return a("dragOverCompleted", {
        insertion: R
      }), R && (u ? v._hideClone() : v._showClone(k), k !== C && (st(te, Ye ? Ye.options.ghostClass : v.options.ghostClass, !1), st(te, d.ghostClass, !0)), Ye !== k && k !== pe.active ? Ye = k : k === pe.active && Ye && (Ye = null), C === k && (k._ignoreWhileAnimating = l), k.animateAll(function() {
        a("dragOverAnimationComplete"), k._ignoreWhileAnimating = null;
      }), k !== C && (C.animateAll(), C._ignoreWhileAnimating = null)), (l === te && !te.animated || l === i && !l.animated) && (di = null), !d.dragoverBubble && !t.rootEl && l !== document && (te.parentNode[nt]._isOutsideThisEl(t.target), !R && ei(t)), !d.dragoverBubble && t.stopPropagation && t.stopPropagation(), z = !0;
    }
    function p() {
      rt = dt(te), Gt = dt(te, d.draggable), tt({
        sortable: k,
        name: "change",
        toEl: i,
        newIndex: rt,
        newDraggableIndex: Gt,
        originalEvent: t
      });
    }
    if (t.preventDefault !== void 0 && t.cancelable && t.preventDefault(), l = Ct(l, d.draggable, i, !0), a("dragOver"), pe.eventCanceled) return z;
    if (te.contains(t.target) || l.animated && l.animatingX && l.animatingY || k._ignoreWhileAnimating === l)
      return f(!1);
    if (Il = !1, v && !d.disabled && (u ? m || (c = Me !== Ae) : Ye === this || (this.lastPutMode = ji.checkPull(this, v, te, t)) && o.checkPut(this, v, te, t))) {
      if (x = this._getDirection(t, l) === "vertical", n = Pe(te), a("dragOverValid"), pe.eventCanceled) return z;
      if (c)
        return Me = Ae, r(), this._hideClone(), a("revert"), pe.eventCanceled || (ti ? Ae.insertBefore(te, ti) : Ae.appendChild(te)), f(!0);
      var g = kn(i, d.draggable);
      if (!g || Dd(t, x, this) && !g.animated) {
        if (g === te)
          return f(!1);
        if (g && i === t.target && (l = g), l && (s = Pe(l)), Ki(Ae, i, te, n, l, s, t, !!l) !== !1)
          return r(), g && g.nextSibling ? i.insertBefore(te, g.nextSibling) : i.appendChild(te), Me = i, p(), f(!0);
      } else if (g && Nd(t, x, this)) {
        var b = gi(i, 0, d, !0);
        if (b === te)
          return f(!1);
        if (l = b, s = Pe(l), Ki(Ae, i, te, n, l, s, t, !1) !== !1)
          return r(), i.insertBefore(te, b), Me = i, p(), f(!0);
      } else if (l.parentNode === i) {
        s = Pe(l);
        var h = 0, y, w = te.parentNode !== i, _ = !Ed(te.animated && te.toRect || n, l.animated && l.toRect || s, x), S = x ? "top" : "left", I = Ho(l, "top", "top") || Ho(te, "top", "top"), L = I ? I.scrollTop : void 0;
        di !== l && (y = s[S], Ai = !1, Gi = !_ && d.invertSwap || w), h = Ad(t, l, s, x, _ ? 1 : d.swapThreshold, d.invertedSwapThreshold == null ? d.swapThreshold : d.invertedSwapThreshold, Gi, di === l);
        var B;
        if (h !== 0) {
          var D = dt(te);
          do
            D -= h, B = Me.children[D];
          while (B && (he(B, "display") === "none" || B === ge));
        }
        if (h === 0 || B === l)
          return f(!1);
        di = l, Di = h;
        var W = l.nextElementSibling, P = !1;
        P = h === 1;
        var H = Ki(Ae, i, te, n, l, s, t, P);
        if (H !== !1)
          return (H === 1 || H === -1) && (P = H === 1), dn = !0, setTimeout(zd, 30), r(), P && !W ? i.appendChild(te) : l.parentNode.insertBefore(te, P ? W : l), I && Da(I, 0, L - I.scrollTop), Me = te.parentNode, y !== void 0 && !Gi && (Tl = Math.abs(y - Pe(l)[S])), p(), f(!0);
      }
      if (i.contains(te))
        return f(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    _e(document, "mousemove", this._onTouchMove), _e(document, "touchmove", this._onTouchMove), _e(document, "pointermove", this._onTouchMove), _e(document, "dragover", ei), _e(document, "mousemove", ei), _e(document, "touchmove", ei);
  },
  _offUpEvents: function() {
    var t = this.el.ownerDocument;
    _e(t, "mouseup", this._onDrop), _e(t, "touchend", this._onDrop), _e(t, "pointerup", this._onDrop), _e(t, "pointercancel", this._onDrop), _e(t, "touchcancel", this._onDrop), _e(document, "selectstart", this);
  },
  _onDrop: function(t) {
    var i = this.el, l = this.options;
    if (rt = dt(te), Gt = dt(te, l.draggable), it("drop", this, {
      evt: t
    }), Me = te && te.parentNode, rt = dt(te), Gt = dt(te, l.draggable), pe.eventCanceled) {
      this._nulling();
      return;
    }
    fi = !1, Gi = !1, Ai = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), fn(this.cloneId), fn(this._dragStartId), this.nativeDraggable && (_e(document, "drop", this), _e(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Bi && he(document.body, "user-select", ""), he(te, "transform", ""), t && (xi && (t.cancelable && t.preventDefault(), !l.dropBubble && t.stopPropagation()), ge && ge.parentNode && ge.parentNode.removeChild(ge), (Ae === Me || Ye && Ye.lastPutMode !== "clone") && Re && Re.parentNode && Re.parentNode.removeChild(Re), te && (this.nativeDraggable && _e(te, "dragend", this), Ql(te), te.style["will-change"] = "", xi && !fi && st(te, Ye ? Ye.options.ghostClass : this.options.ghostClass, !1), st(te, this.options.chosenClass, !1), tt({
      sortable: this,
      name: "unchoose",
      toEl: Me,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: t
    }), Ae !== Me ? (rt >= 0 && (tt({
      rootEl: Me,
      name: "add",
      toEl: Me,
      fromEl: Ae,
      originalEvent: t
    }), tt({
      sortable: this,
      name: "remove",
      toEl: Me,
      originalEvent: t
    }), tt({
      rootEl: Me,
      name: "sort",
      toEl: Me,
      fromEl: Ae,
      originalEvent: t
    }), tt({
      sortable: this,
      name: "sort",
      toEl: Me,
      originalEvent: t
    })), Ye && Ye.save()) : rt !== hi && rt >= 0 && (tt({
      sortable: this,
      name: "update",
      toEl: Me,
      originalEvent: t
    }), tt({
      sortable: this,
      name: "sort",
      toEl: Me,
      originalEvent: t
    })), pe.active && ((rt == null || rt === -1) && (rt = hi, Gt = Ni), tt({
      sortable: this,
      name: "end",
      toEl: Me,
      originalEvent: t
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    it("nulling", this), Ae = te = Me = ge = ti = Re = El = Yt = Qt = yt = xi = rt = Gt = hi = Ni = di = Di = Ye = ji = pe.dragged = pe.ghost = pe.clone = pe.active = null, Ml.forEach(function(t) {
      t.checked = !0;
    }), Ml.length = Kl = Xl = 0;
  },
  handleEvent: function(t) {
    switch (t.type) {
      case "drop":
      case "dragend":
        this._onDrop(t);
        break;
      case "dragenter":
      case "dragover":
        te && (this._onDragOver(t), Bd(t));
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
    for (var t = [], i, l = this.el.children, n = 0, s = l.length, c = this.options; n < s; n++)
      i = l[n], Ct(i, c.draggable, this.el, !1) && t.push(i.getAttribute(c.dataIdAttr) || Rd(i));
    return t;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(t, i) {
    var l = {}, n = this.el;
    this.toArray().forEach(function(s, c) {
      var d = n.children[c];
      Ct(d, this.options.draggable, n, !1) && (l[s] = d);
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
    return Ct(t, i || this.options.draggable, this.el, !1);
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
    var n = Oi.modifyOption(this, t, i);
    typeof n < "u" ? l[t] = n : l[t] = i, t === "group" && Oa(l);
  },
  /**
   * Destroy
   */
  destroy: function() {
    it("destroy", this);
    var t = this.el;
    t[nt] = null, _e(t, "mousedown", this._onTapStart), _e(t, "touchstart", this._onTapStart), _e(t, "pointerdown", this._onTapStart), this.nativeDraggable && (_e(t, "dragover", this), _e(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Rl.splice(Rl.indexOf(this.el), 1), this.el = t = null;
  },
  _hideClone: function() {
    if (!Yt) {
      if (it("hideClone", this), pe.eventCanceled) return;
      he(Re, "display", "none"), this.options.removeCloneOnHide && Re.parentNode && Re.parentNode.removeChild(Re), Yt = !0;
    }
  },
  _showClone: function(t) {
    if (t.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Yt) {
      if (it("showClone", this), pe.eventCanceled) return;
      te.parentNode == Ae && !this.options.group.revertClone ? Ae.insertBefore(Re, te) : ti ? Ae.insertBefore(Re, ti) : Ae.appendChild(Re), this.options.group.revertClone && this.animate(te, Re), he(Re, "display", ""), Yt = !1;
    }
  }
};
function Bd(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Ki(e, t, i, l, n, s, c, d) {
  var o, v = e[nt], u = v.options.onMove, m;
  return window.CustomEvent && !Nt && !Mi ? o = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("Event"), o.initEvent("move", !0, !0)), o.to = t, o.from = e, o.dragged = i, o.draggedRect = l, o.related = n || t, o.relatedRect = s || Pe(t), o.willInsertAfter = d, o.originalEvent = c, e.dispatchEvent(o), u && (m = u.call(v, o, c)), m;
}
function Ql(e) {
  e.draggable = !1;
}
function zd() {
  dn = !1;
}
function Nd(e, t, i) {
  var l = Pe(gi(i.el, 0, i.options, !0)), n = Ia(i.el, i.options, ge), s = 10;
  return t ? e.clientX < n.left - s || e.clientY < l.top && e.clientX < l.right : e.clientY < n.top - s || e.clientY < l.bottom && e.clientX < l.left;
}
function Dd(e, t, i) {
  var l = Pe(kn(i.el, i.options.draggable)), n = Ia(i.el, i.options, ge), s = 10;
  return t ? e.clientX > n.right + s || e.clientY > l.bottom && e.clientX > l.left : e.clientY > n.bottom + s || e.clientX > l.right && e.clientY > l.top;
}
function Ad(e, t, i, l, n, s, c, d) {
  var o = l ? e.clientY : e.clientX, v = l ? i.height : i.width, u = l ? i.top : i.left, m = l ? i.bottom : i.right, C = !1;
  if (!c) {
    if (d && Tl < v * n) {
      if (!Ai && (Di === 1 ? o > u + v * s / 2 : o < m - v * s / 2) && (Ai = !0), Ai)
        C = !0;
      else if (Di === 1 ? o < u + Tl : o > m - Tl)
        return -Di;
    } else if (o > u + v * (1 - n) / 2 && o < m - v * (1 - n) / 2)
      return Id(t);
  }
  return C = C || c, C && (o < u + v * s / 2 || o > m - v * s / 2) ? o > u + v / 2 ? 1 : -1 : 0;
}
function Id(e) {
  return dt(te) < dt(e) ? 1 : -1;
}
function Rd(e) {
  for (var t = e.tagName + e.className + e.src + e.href + e.textContent, i = t.length, l = 0; i--; )
    l += t.charCodeAt(i);
  return l.toString(36);
}
function Md(e) {
  Ml.length = 0;
  for (var t = e.getElementsByTagName("input"), i = t.length; i--; ) {
    var l = t[i];
    l.checked && Ml.push(l);
  }
}
function Ll(e) {
  return setTimeout(e, 0);
}
function fn(e) {
  return clearTimeout(e);
}
Pl && we(document, "touchmove", function(e) {
  (pe.active || fi) && e.cancelable && e.preventDefault();
});
pe.utils = {
  on: we,
  off: _e,
  css: he,
  find: za,
  is: function(t, i) {
    return !!Ct(t, i, t, !1);
  },
  extend: bd,
  throttle: Na,
  closest: Ct,
  toggleClass: st,
  clone: Aa,
  index: dt,
  nextTick: Ll,
  cancelNextTick: fn,
  detectDirection: Ma,
  getChild: gi,
  expando: nt
};
pe.get = function(e) {
  return e[nt];
};
pe.mount = function() {
  for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
    t[i] = arguments[i];
  t[0].constructor === Array && (t = t[0]), t.forEach(function(l) {
    if (!l.prototype || !l.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));
    l.utils && (pe.utils = xt(xt({}, pe.utils), l.utils)), Oi.mount(l);
  });
};
pe.create = function(e, t) {
  return new pe(e, t);
};
pe.version = gd;
var He = [], Si, hn, pn = !1, en, tn, Ol, Ei;
function Od() {
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
      this.sortable.nativeDraggable ? we(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? we(document, "pointermove", this._handleFallbackAutoScroll) : l.touches ? we(document, "touchmove", this._handleFallbackAutoScroll) : we(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var l = i.originalEvent;
      !this.options.dragOverBubble && !l.rootEl && this._handleAutoScroll(l);
    },
    drop: function() {
      this.sortable.nativeDraggable ? _e(document, "dragover", this._handleAutoScroll) : (_e(document, "pointermove", this._handleFallbackAutoScroll), _e(document, "touchmove", this._handleFallbackAutoScroll), _e(document, "mousemove", this._handleFallbackAutoScroll)), $o(), Bl(), yd();
    },
    nulling: function() {
      Ol = hn = Si = pn = Ei = en = tn = null, He.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, l) {
      var n = this, s = (i.touches ? i.touches[0] : i).clientX, c = (i.touches ? i.touches[0] : i).clientY, d = document.elementFromPoint(s, c);
      if (Ol = i, l || this.options.forceAutoScrollFallback || Mi || Nt || Bi) {
        ln(i, this.options, d, l);
        var o = Kt(d, !0);
        pn && (!Ei || s !== en || c !== tn) && (Ei && $o(), Ei = setInterval(function() {
          var v = Kt(document.elementFromPoint(s, c), !0);
          v !== o && (o = v, Bl()), ln(i, n.options, v, l);
        }, 10), en = s, tn = c);
      } else {
        if (!this.options.bubbleScroll || Kt(d, !0) === wt()) {
          Bl();
          return;
        }
        ln(i, this.options, Kt(d, !1), !1);
      }
    }
  }, zt(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Bl() {
  He.forEach(function(e) {
    clearInterval(e.pid);
  }), He = [];
}
function $o() {
  clearInterval(Ei);
}
var ln = Na(function(e, t, i, l) {
  if (t.scroll) {
    var n = (e.touches ? e.touches[0] : e).clientX, s = (e.touches ? e.touches[0] : e).clientY, c = t.scrollSensitivity, d = t.scrollSpeed, o = wt(), v = !1, u;
    hn !== i && (hn = i, Bl(), Si = t.scroll, u = t.scrollFn, Si === !0 && (Si = Kt(i, !0)));
    var m = 0, C = Si;
    do {
      var x = C, k = Pe(x), z = k.top, a = k.bottom, r = k.left, f = k.right, p = k.width, g = k.height, b = void 0, h = void 0, y = x.scrollWidth, w = x.scrollHeight, _ = he(x), S = x.scrollLeft, I = x.scrollTop;
      x === o ? (b = p < y && (_.overflowX === "auto" || _.overflowX === "scroll" || _.overflowX === "visible"), h = g < w && (_.overflowY === "auto" || _.overflowY === "scroll" || _.overflowY === "visible")) : (b = p < y && (_.overflowX === "auto" || _.overflowX === "scroll"), h = g < w && (_.overflowY === "auto" || _.overflowY === "scroll"));
      var L = b && (Math.abs(f - n) <= c && S + p < y) - (Math.abs(r - n) <= c && !!S), B = h && (Math.abs(a - s) <= c && I + g < w) - (Math.abs(z - s) <= c && !!I);
      if (!He[m])
        for (var D = 0; D <= m; D++)
          He[D] || (He[D] = {});
      (He[m].vx != L || He[m].vy != B || He[m].el !== x) && (He[m].el = x, He[m].vx = L, He[m].vy = B, clearInterval(He[m].pid), (L != 0 || B != 0) && (v = !0, He[m].pid = setInterval((function() {
        l && this.layer === 0 && pe.active._onTouchMove(Ol);
        var W = He[this.layer].vy ? He[this.layer].vy * d : 0, P = He[this.layer].vx ? He[this.layer].vx * d : 0;
        typeof u == "function" && u.call(pe.dragged.parentNode[nt], P, W, e, Ol, He[this.layer].el) !== "continue" || Da(He[this.layer].el, P, W);
      }).bind({
        layer: m
      }), 24))), m++;
    } while (t.bubbleScroll && C !== o && (C = Kt(C, !1)));
    pn = v;
  }
}, 30), Va = function(t) {
  var i = t.originalEvent, l = t.putSortable, n = t.dragEl, s = t.activeSortable, c = t.dispatchSortableEvent, d = t.hideGhostForTarget, o = t.unhideGhostForTarget;
  if (i) {
    var v = l || s;
    d();
    var u = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, m = document.elementFromPoint(u.clientX, u.clientY);
    o(), v && !v.el.contains(m) && (c("spill"), this.onSpill({
      dragEl: n,
      putSortable: l
    }));
  }
};
function xn() {
}
xn.prototype = {
  startIndex: null,
  dragStart: function(t) {
    var i = t.oldDraggableIndex;
    this.startIndex = i;
  },
  onSpill: function(t) {
    var i = t.dragEl, l = t.putSortable;
    this.sortable.captureAnimationState(), l && l.captureAnimationState();
    var n = gi(this.sortable.el, this.startIndex, this.options);
    n ? this.sortable.el.insertBefore(i, n) : this.sortable.el.appendChild(i), this.sortable.animateAll(), l && l.animateAll();
  },
  drop: Va
};
zt(xn, {
  pluginName: "revertOnSpill"
});
function Sn() {
}
Sn.prototype = {
  onSpill: function(t) {
    var i = t.dragEl, l = t.putSortable, n = l || this.sortable;
    n.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), n.animateAll();
  },
  drop: Va
};
zt(Sn, {
  pluginName: "removeOnSpill"
});
pe.mount(new Od());
pe.mount(Sn, xn);
const Fd = ["onInput", "onKeydown"], Hd = { class: "tooltip-menu" }, Vd = ["onClick"], Pd = {
  key: 0,
  class: "component-menu"
}, Ud = /* @__PURE__ */ Le({
  __name: "ComponentManager",
  props: {
    elements: {
      type: Array,
      required: !0
    }
  },
  emits: ["delete-element", "update-text", "add-text", "add-element", "elements-reordered"],
  setup(e, { emit: t }) {
    const l = Q(e.elements), n = t, s = Q(!1), c = Q(null), d = Q(null);
    Fl(() => {
      d.value && pe.create(d.value, {
        handle: ".drag-handle",
        animation: 150,
        onEnd: (C) => {
          const { oldIndex: x, newIndex: k } = C;
          if (x !== void 0 && k !== void 0) {
            const z = l.value.splice(x, 1)[0];
            l.value.splice(k, 0, z), n("elements-reordered", l.value);
          }
        }
      });
    });
    const o = (C, x) => {
      const k = x.target.innerText.trim();
      k !== l.value[C].text && n("update-text", { index: C, text: k }), s.value = k.endsWith("/"), s.value && (c.value = C);
    }, v = (C, x) => {
      C.key === "/" && (s.value = !0, c.value = x);
    }, u = (C, x) => {
      if (c.value !== null) {
        const k = { type: "customTag", component: C, props: x };
        l.value.splice(c.value + 1, 0, k), n("add-element", { element: k, index: c.value + 1 }), c.value = null, s.value = !1;
      }
    }, m = (C) => {
      n("delete-element", C);
    };
    return (C, x) => {
      const k = xe("lkt-button");
      return $(), se("div", {
        ref_key: "sortableContainer",
        ref: d,
        class: "sortable-container"
      }, [
        ($(!0), se(Qe, null, kt(l.value, (z, a) => ($(), se("div", {
          key: a,
          class: "sortable-item"
        }, [
          x[4] || (x[4] = ae("div", { class: "drag-handle" }, "☰", -1)),
          z.type === "text" ? ($(), se("div", {
            key: 0,
            contenteditable: "true",
            class: "editable-text",
            onInput: (r) => o(a, r),
            onKeydown: (r) => v(r, a)
          }, Lt(z.text), 41, Fd)) : ($(), ne(ii(z.component), li({
            key: 1,
            ref_for: !0
          }, z.props), null, 16)),
          re(k, {
            type: j(Ii).Split,
            icon: "icon-tooltip",
            tooltip: {
              windowMargin: 30,
              referrerMargin: 7
            }
          }, {
            split: Ee(({ doClose: r }) => [
              ae("div", Hd, [
                ae("button", {
                  class: "delete-button",
                  onClick: (f) => m(a)
                }, "Eliminar", 8, Vd)
              ])
            ]),
            _: 2
          }, 1032, ["type"])
        ]))), 128)),
        s.value && c.value !== null ? ($(), se("div", Pd, [
          ae("ul", null, [
            ae("li", {
              onClick: x[0] || (x[0] = (z) => u("lkt-tag", { text: "Etiqueta personalizada" }))
            }, "Etiqueta personalizada"),
            ae("li", {
              onClick: x[1] || (x[1] = (z) => u("ImageComponent", { src: C.prompt("Ingrese la URL de la imagen:") }))
            }, "Imagen"),
            ae("li", {
              onClick: x[2] || (x[2] = (z) => u("TableComponent", {}))
            }, "Tabla"),
            ae("li", {
              onClick: x[3] || (x[3] = (z) => u("FormComponent", {}))
            }, "Formulario")
          ])
        ])) : fe("", !0)
      ], 512);
    };
  }
}), Pa = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [l, n] of t)
    i[l] = n;
  return i;
}, Wd = /* @__PURE__ */ Pa(Ud, [["__scopeId", "data-v-46f1b1c3"]]), $d = { class: "wysiwyg-container" }, Zd = { class: "toolbar" }, qd = /* @__PURE__ */ Le({
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
    }, c = (a) => {
      t.value.splice(a, 1), n();
    }, d = (a) => {
      document.execCommand(a, !1), n();
    }, o = (a) => {
      const r = a.target.value;
      document.execCommand("foreColor", !1, r), n();
    }, v = (a) => {
      const r = a.target.value;
      document.execCommand("backColor", !1, r), n();
    }, u = (a) => {
      const r = a.target.value;
      document.execCommand("fontSize", !1, r), n();
    }, m = (a) => {
      const r = a.target.value;
      document.execCommand("fontName", !1, r), n();
    }, C = (a) => {
      document.execCommand("justify" + a, !1), n();
    }, x = () => {
      l.value > 0 && (l.value--, t.value = [...i.value[l.value]]);
    }, k = () => {
      l.value < i.value.length - 1 && (l.value++, t.value = [...i.value[l.value]]);
    }, z = () => {
      const a = prompt("Ingrese la URL del enlace:");
      a && (document.execCommand("createLink", !1, a), n());
    };
    return (a, r) => ($(), se("div", $d, [
      ae("div", Zd, [
        ae("button", {
          onClick: r[0] || (r[0] = (f) => d("bold"))
        }, "Negrita"),
        ae("button", {
          onClick: r[1] || (r[1] = (f) => d("italic"))
        }, "Cursiva"),
        ae("button", {
          onClick: r[2] || (r[2] = (f) => d("underline"))
        }, "Subrayado"),
        ae("button", {
          onClick: r[3] || (r[3] = (f) => d("strikeThrough"))
        }, "Tachado"),
        ae("button", {
          onClick: r[4] || (r[4] = (f) => d("subscript"))
        }, "Subíndice"),
        ae("button", {
          onClick: r[5] || (r[5] = (f) => d("superscript"))
        }, "Superíndice"),
        ae("input", {
          type: "color",
          onInput: o,
          title: "Color del texto"
        }, null, 32),
        ae("input", {
          type: "color",
          onInput: v,
          title: "Color de fondo"
        }, null, 32),
        ae("select", {
          onChange: r[6] || (r[6] = (f) => u(f))
        }, r[13] || (r[13] = [
          ae("option", { value: "3" }, "Mediano", -1),
          ae("option", { value: "5" }, "Grande", -1),
          ae("option", { value: "7" }, "Extra Grande", -1)
        ]), 32),
        ae("select", {
          onChange: r[7] || (r[7] = (f) => m(f))
        }, r[14] || (r[14] = [
          ae("option", { value: "Arial" }, "Arial", -1),
          ae("option", { value: "Courier New" }, "Courier New", -1),
          ae("option", { value: "Georgia" }, "Georgia", -1),
          ae("option", { value: "Times New Roman" }, "Times New Roman", -1)
        ]), 32),
        ae("button", {
          onClick: r[8] || (r[8] = (f) => C("left"))
        }, "Alineación izquierda"),
        ae("button", {
          onClick: r[9] || (r[9] = (f) => C("center"))
        }, "Centrar"),
        ae("button", {
          onClick: r[10] || (r[10] = (f) => C("right"))
        }, "Alineación derecha"),
        ae("button", {
          onClick: r[11] || (r[11] = (f) => d("insertUnorderedList"))
        }, "Lista no ordenada"),
        ae("button", {
          onClick: r[12] || (r[12] = (f) => d("insertOrderedList"))
        }, "Lista ordenada"),
        ae("button", { onClick: z }, "Insertar Enlace"),
        ae("button", { onClick: x }, "Deshacer"),
        ae("button", { onClick: k }, "Rehacer")
      ]),
      re(Wd, {
        elements: t.value,
        onDeleteElement: c,
        onAddElement: s
      }, null, 8, ["elements"])
    ]));
  }
}), jd = /* @__PURE__ */ Pa(qd, [["__scopeId", "data-v-2878ca03"]]), Gd = /* @__PURE__ */ Le({
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
    const i = t, l = e, n = ee(() => l.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), s = () => i("click");
    return (c, d) => {
      const o = xe("lkt-button");
      return $(), ne(o, li(c.config, {
        type: c.config.type ? c.config.type : j(Ii).FileUpload,
        resource: c.config.resource ?? c.fileUploadHttp.resource,
        "resource-data": c.config.resourceData ?? c.fileUploadHttp.data,
        text: c.insideEllipsis ? c.config.text : "",
        class: [n.value, "lkt-field--btn-file-upload"],
        icon: "lkt-icn-upload",
        onClick: s
      }), null, 16, ["type", "resource", "resource-data", "text", "class"]);
    };
  }
}), Yd = ["data-show-ui", "data-labeled"], Kd = ["for", "innerHTML"], Xd = { class: "lkt-field-content" }, Jd = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, Qd = {
  key: 1,
  class: "lkt-field--icon"
}, ef = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], tf = ["value", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], lf = {
  key: 4,
  class: "lkt-field--info-nav"
}, nf = { key: 0 }, of = ["data-index", "onClick"], vi = /* @__PURE__ */ Le({
  __name: "LktField",
  props: /* @__PURE__ */ ds({
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
  }, js(Es)),
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
    const l = i, n = mn(), s = e, c = Zo(16);
    let d = jt(s.modal, s.prop), o = jt(s.modalKey, s.prop), v = jt(s.icon, s.prop), u = jt(s.download, s.prop), m = jt(s.itemType, s.prop);
    !d && typeof m != "function" && m && typeof ie.modalPerItemType[m] < "u" && (d = ie.modalPerItemType[m]);
    const C = Q(null);
    let x = s.featuredButton, k = s.modelValue;
    s.multiple && ys.includes(s.type) ? (!k || !Array.isArray(k)) && (k = []) : qt.includes(s.type) ? typeof k != "boolean" && (k = !1) : s.type === G.Date && !v ? v = ie.defaultDateIcon : s.type === G.Number && s.canStep && x === "" && (x = ie.defaultNumberFeaturedButton);
    const z = Q(k), a = Q(k), r = Q(s.valid), f = Q(!1), p = Q(!1), g = Q(!1), b = Q(!1), h = Q([]), y = Q(!s.readMode), w = Q(s.fileName), _ = Q(s.fileName), S = Q(null), I = Q(null), L = Q(null), B = Q(!1), D = Q(!1), W = Q(!1), P = Q(""), H = Q(-1), R = Q([]), U = Q(!1), A = Q(!1), O = Q(!1), N = ee(() => jo.value), V = ee(() => (N.value, ie.dateReadFormat ? ie.dateReadFormat : ie.langDateReadFormat[N.value] ? ie.langDateReadFormat[N.value] : ie.defaultDateReadFormat ? ie.defaultDateReadFormat : "Y-m-d")), E = s.type === G.Card ? a : Q(Ro(a.value, N.value)), M = Q(E), Y = Q([]), Z = Q([]), le = () => {
      const T = (K) => {
        if (Z.value = ql(Y.value, K), s.multiple) {
          for (let Be in E.value) {
            let Ue;
            s.optionValueType === "option" ? Ue = Zi(Y.value, E.value[Be].value) : Ue = Zi(Y.value, E.value[Be]), typeof Ue < "u" && (R.value.length === 0 ? R.value.push(Ue) : R.value.splice(Be, 1, Ue));
          }
          return;
        }
        let ce;
        s.optionValueType === "option" ? ce = Zi(Y.value, E.value.map((Be) => Be.value)) : ce = Zi(Y.value, E.value), typeof ce < "u" && (R.value.length === 0 ? R.value.push(ce) : R.value.splice(0, 1, ce));
      };
      s.type === G.Text ? T(E.value) : s.type === G.Select && T(P.value);
    }, X = ee(() => s.type === G.Date), J = ee(() => s.type === G.File), oe = ee(() => s.type === G.Image), me = ee(() => s.type === G.Textarea ? "textarea" : s.type === G.Html ? "div" : "input"), ye = ee(() => s.type === G.Date ? a.value !== z.value : E.value !== M.value), ue = ee(() => typeof s.disabled == "function" ? s.disabled(s.prop) : s.disabled), Ce = ee(() => {
      let T = 0;
      return Bn.value && ++T, zn.value && ++T, Nn.value && ++T, Dn.value && ++T, In.value && ++T, Rn.value && ++T, An.value && ++T, si.value && ++T, En.value && ++T, (s.customButtonText || s.customButtonClass) && ++T, T > 0 && s.type === G.Textarea || T > 0 && s.type === G.Html || T > 0 && s.infoButtonEllipsis ? 1 : T;
    }), Oe = ee(() => Ul.value && x === "i18n" || Fi.value && x === "password" || ht.value && x === "subtract"), et = ee(() => Ce.value > 0), Se = ee(() => s.autocomplete === !0 ? "on" : "off"), Fe = ee(() => s.type === G.Date ? a.value !== "" : E.value !== ""), De = ee(() => s.type === G.Password && f.value === !0 ? "text" : s.type === G.Email ? "email" : s.type === G.Password ? "password" : s.type === G.Number ? "number" : s.type === G.Tel ? "tel" : s.type === G.Search ? "search" : s.type === G.Color ? "color" : s.type === G.Range ? "range" : "text"), St = ee(() => {
      var K;
      const T = [];
      return T.push(`is-${s.type}`), qt.includes(s.type) && (T.push("is-boolean"), E.value && T.push("is-checked")), ye.value && T.push("is-changed"), ue.value && T.push("is-disabled"), s.multiple && T.push("is-multiple"), Oe.value && T.push("with-atn-btn"), et.value && T.push("with-info-btn"), s.mandatory && y.value && T.push("is-mandatory-field"), y.value && p.value && T.push("has-focus"), B.value && T.push("show-options"), s.searchable && U.value && T.push("is-searching"), s.hidden && T.push("lkt-hidden-field"), s.type !== G.Range && ((K = s.validation) == null ? void 0 : K.type) === sn.Auto && b.value && g.value && (h.value.length > 0 ? T.push("is-invalid") : T.push("is-valid")), [G.Textarea, G.Html].includes(s.type) && T.push("is-lg"), [G.Image].includes(s.type) && T.push("is-xl"), s.multiple && s.type === G.Select && T.push("is-lg"), s.multiple && (y.value ? T.push(`has-multiple-display-${s.multipleDisplayEdition}`) : T.push(`has-multiple-display-${s.multipleDisplay}`)), Ce.value > 0 && T.push("has-icons", `has-icons-${Ce.value}`), T.push(y.value ? "is-editable" : "is-read"), s.type !== G.Range && (T.push(r.value ? "is-valid" : "is-error"), T.push(Fe.value ? "is-filled" : "is-empty")), T.join(" ");
    }), Ze = ee(() => {
      var T;
      return typeof E.value == "number" ? (N.value, (T = ie.langNumberFormat[N.value]) != null && T.amountOfDecimals ? Kn(
        E.value,
        ie.langNumberFormat[N.value].amountOfDecimals,
        ie.langNumberFormat[N.value].decimalSeparator,
        ie.langNumberFormat[N.value].thousandsSeparator,
        ie.langNumberFormat[N.value].removeDecimalsIfZero
      ) : ie.amountOfDecimals ? Kn(
        E.value,
        ie.amountOfDecimals,
        ie.decimalSeparator,
        ie.thousandsSeparator,
        ie.removeDecimalsIfZero
      ) : E.value.toString()) : s.type === G.Html ? qo(E.value) : E.value;
    }), ot = ee(() => typeof s.min == "string" ? parseFloat(s.min) : typeof s.min == "number" ? s.min : !1), qe = ee(() => typeof s.max == "string" ? parseFloat(s.max) : typeof s.max == "number" ? s.max : !1), ke = ee(() => {
      var T, K, ce, Be;
      if (qt.includes(s.type)) {
        if (E.value === !0 && typeof s.configOn == "object")
          return jl(
            ki(((T = s.configOn) == null ? void 0 : T.label) ?? s.label),
            ((K = s.configOn) == null ? void 0 : K.labelIcon) ?? s.labelIcon,
            s.labelIconAtEnd
          );
        if (E.value !== !0 && typeof s.configOff == "object")
          return jl(
            ki(((ce = s.configOff) == null ? void 0 : ce.label) ?? s.label),
            ((Be = s.configOff) == null ? void 0 : Be.labelIcon) ?? s.labelIcon,
            s.labelIconAtEnd
          );
      }
      return jl(
        ki(s.label),
        s.labelIcon,
        s.labelIconAtEnd
      );
    }), ni = ee(() => ki(s.placeholder)), Et = ee(() => ki(s.searchPlaceholder)), Ke = ee(() => typeof d == "function" ? d(s.prop) : jt(d, s.prop)), Ie = ee(() => typeof s.modalData == "function" ? s.modalData(s.prop) : s.modalData), Xe = ee(() => typeof v == "function" ? v(s.prop) : jt(v, s.prop)), je = ee(() => s.type === G.File ? ie.acceptTypes.file : s.type === G.Image ? ie.acceptTypes.image : ""), oi = ee(() => s.errorMessage), ai = ee(() => s.infoMessage), ht = ee(() => s.canStep && y.value && s.type === G.Number), si = ee(() => s.canStep && y.value && s.type === G.Number && x !== "subtract"), En = ee(() => s.canStep && y.value && s.type === G.Number), Tn = ee(() => s.canUndo && ye.value && y.value && !bs.includes(s.type)), Ln = ee(() => s.canClear && Fe.value && y.value && !vs.includes(s.type)), Ul = ee(() => s.canI18n && typeof a.value == "object" && y.value), Fi = ee(() => s.type === G.Password && s.showPassword && Fe.value && y.value), Bn = ee(() => Tn.value && !s.infoButtonEllipsis), zn = ee(() => Ln.value && !s.infoButtonEllipsis), Nn = ee(() => Fi.value && !s.infoButtonEllipsis && x !== "password"), Dn = ee(() => Ul.value && !s.infoButtonEllipsis && x !== "i18n"), An = ee(() => {
      var T, K, ce, Be;
      return s.type === G.Calc || s.type === G.Search || ![G.Select, G.Text].includes(s.type) ? !1 : Z.value.length > 0 || Y.value.length > 0 || typeof ((K = (T = s.optionsConfig) == null ? void 0 : T.http) == null ? void 0 : K.resource) < "u" && ((Be = (ce = s.optionsConfig) == null ? void 0 : ce.http) == null ? void 0 : Be.resource) !== "";
    }), In = ee(() => s.allowReadModeSwitch && !s.infoButtonEllipsis), Rn = ee(() => typeof s.fileUploadButton == "object" && Object.keys(s.fileUploadButton).length > 0), Mn = () => {
      zl(() => {
        C.value && C.value.focus();
      });
    }, Ua = async () => {
      var T;
      if ((T = s.validation) != null && T.resource) {
        l("validating");
        const K = await on(s.validation.resource, {
          ...s.validation.resourceData,
          value: E.value
        });
        l("validation", K);
      }
    };
    be(() => {
      var T;
      return (T = s.validation) == null ? void 0 : T.checkEqualTo;
    }, () => ri()), be(() => s.readMode, (T) => y.value = !T), be(() => s.valid, (T) => r.value = T), be(() => s.modelValue, (T) => {
      s.type === G.Card ? E.value = T : s.type !== G.Date && (E.value = Ro(T, N.value));
    }), be(E, (T) => {
      typeof a.value == "object" && s.type === G.Card ? a.value[N.value] = T : a.value = T, s.type === G.Number && ts(T);
    }), be(a, (T) => {
      W.value && y.value && (l("update:modelValue", T), Ua(), ri());
    }, { deep: !0 }), be(r, (T) => {
      l("update:valid", T);
    }), be(Y, (T) => {
      l("update:options", T);
    }), be(() => s.options, (T) => {
      Y.value = Dl(T, s.prop), s.type === G.Select ? bi(P.value, !1) : bi(E.value, !1);
    });
    const ri = () => {
      var T;
      ((T = s.validation) == null ? void 0 : T.trigger) === Ko.Blur && (!g.value || !b.value) || s.type !== G.Range && (h.value = [], zl(() => {
        var Be, Ue, Ge, pt, mt, gt, vt, Dt, At, It, Rt, Mt, Ot;
        let K = typeof s.min > "u" ? 0 : parseFloat(s.min), ce = typeof s.max > "u" ? 0 : parseFloat(s.max);
        if (s.type === G.Number && typeof s.min < "u" && typeof s.max < "u" && (E.value < K || E.value > ce)) {
          h.value.push($e.createNumBetween(K, ce, Ve.Ko)), r.value = !1;
          return;
        }
        ![G.Number, G.Email].includes(s.type) && s.mandatory && E.value === "" ? h.value.push($e.createEmpty(Ve.Ko)) : s.type !== G.Email && K > 0 && (s.type !== G.Number && E.value.length < K ? h.value.push($e.createMinStr(K, Ve.Ko)) : E.value < K && h.value.push($e.createMinNum(K, Ve.Ko))), ce > 0 && (s.type !== G.Number && E.value.length > ce ? h.value.push($e.createMaxStr(ce, Ve.Ko)) : E.value > ce && h.value.push($e.createMaxNum(ce, Ve.Ko))), s.type === G.Email && (s.mandatory && E.value === "" ? h.value.push($e.createEmpty(Ve.Ko)) : ps(E.value) || h.value.push($e.createEmail(Ve.Ko))), _s.includes(s.type) && (dr(h.value, E.value, (Be = s.validation) == null ? void 0 : Be.minNumbers, (Ue = s.validation) == null ? void 0 : Ue.maxNumbers), fr(h.value, E.value, (Ge = s.validation) == null ? void 0 : Ge.minUpperChars, (pt = s.validation) == null ? void 0 : pt.maxUpperChars), hr(h.value, E.value, (mt = s.validation) == null ? void 0 : mt.minLowerChars, (gt = s.validation) == null ? void 0 : gt.maxLowerChars), pr(h.value, E.value, (vt = s.validation) == null ? void 0 : vt.minChars, (Dt = s.validation) == null ? void 0 : Dt.maxChars), mr(h.value, E.value, (At = s.validation) == null ? void 0 : At.minSpecialChars, (It = s.validation) == null ? void 0 : It.maxSpecialChars)), (Rt = s.validation) != null && Rt.checkEqualTo && E.value !== ((Mt = s.validation) == null ? void 0 : Mt.checkEqualTo) && h.value.push($e.createEqualTo((Ot = s.validation) == null ? void 0 : Ot.checkEqualTo, Ve.Ko)), r.value = h.value.length === 0;
      }));
    }, bi = (T, K = !0) => {
      var ce, Be, Ue, Ge, pt, mt, gt, vt;
      if (Y.value.length === 0) {
        Z.value = [];
        return;
      }
      switch (s.type) {
        case G.Select:
          s.searchable ? Z.value = ql(Y.value, T, !0) : Z.value = Y.value, D.value = !1, K && (B.value = typeof ((Be = (ce = s.optionsConfig) == null ? void 0 : ce.http) == null ? void 0 : Be.resource) < "u" && ((Ge = (Ue = s.optionsConfig) == null ? void 0 : Ue.http) == null ? void 0 : Ge.resource) !== "" || Z.value.length > 0), le();
          return;
        case G.Text:
        case G.Search:
          Z.value = ql(Y.value, T, !1), D.value = !1, K && (B.value = typeof ((mt = (pt = s.optionsConfig) == null ? void 0 : pt.http) == null ? void 0 : mt.resource) < "u" && ((vt = (gt = s.optionsConfig) == null ? void 0 : gt.http) == null ? void 0 : vt.resource) !== "" || Z.value.length > 0);
          return;
      }
    }, Hi = async (T, K = !0) => {
      var ce, Be, Ue, Ge, pt, mt, gt, vt, Dt, At, It, Rt, Mt, Ot, Ci, wi, ze, Ft, Ht, Vt, Pt, Ut, Wt, $t;
      if (!(!y.value && !((ce = s.optionsConfig) != null && ce.autoloadResource) && !A.value) && ![
        G.Tel,
        G.Date,
        G.Color,
        G.File,
        G.Html,
        G.Image,
        G.Password,
        G.Range,
        G.Textarea
      ].includes(s.type))
        if (D.value = !1, (Be = s.optionsConfig) != null && Be.autoloadResource && !A.value && (O.value = !0), typeof ((Ge = (Ue = s.optionsConfig) == null ? void 0 : Ue.http) == null ? void 0 : Ge.resource) < "u" && ((mt = (pt = s.optionsConfig) == null ? void 0 : pt.http) == null ? void 0 : mt.resource) !== "") {
          D.value = !0;
          let Tt = {};
          typeof ((vt = (gt = s.optionsConfig) == null ? void 0 : gt.http) == null ? void 0 : vt.data) == "object" && (Tt = { ...s.optionsConfig.http.data }), ie.searchKeyForResource !== "" && (Tt[ie.searchKeyForResource] = T), (It = (At = (Dt = s.optionsConfig) == null ? void 0 : Dt.http) == null ? void 0 : At.events) != null && It.onStart && typeof ((Ot = (Mt = (Rt = s.optionsConfig) == null ? void 0 : Rt.http) == null ? void 0 : Mt.events) == null ? void 0 : Ot.onStart) == "function" && s.optionsConfig.http.events.onStart();
          const bt = await on((wi = (Ci = s.optionsConfig) == null ? void 0 : Ci.http) == null ? void 0 : wi.resource, Tt);
          (Ht = (Ft = (ze = s.optionsConfig) == null ? void 0 : ze.http) == null ? void 0 : Ft.events) != null && Ht.onEnd && typeof ((Ut = (Pt = (Vt = s.optionsConfig) == null ? void 0 : Vt.http) == null ? void 0 : Pt.events) == null ? void 0 : Ut.onEnd) == "function" && s.optionsConfig.http.events.onEnd(bt);
          const Jt = Array.isArray(bt.data) && bt.data.length > 0;
          D.value = !1, Jt && (Y.value = Ks(Y.value, bt.data, s.prop), bi(T, K), (Wt = s.optionsConfig) != null && Wt.autoloadResource && !A.value && ((($t = s.optionsConfig) == null ? void 0 : $t.autoloadResource) === "feed" && (s.multiple ? Z.value.forEach(($i) => {
            yi($i);
          }) : Z.value.length > 0 && yi(Z.value[0])), A.value = !0, O.value = !1), l("options-loaded", bt.data));
        } else
          bi(T, K);
    }, Wl = (T) => {
      var Be, Ue;
      let K = Z.value.length - 1;
      if (K === -1) return;
      const ce = T.key ?? "";
      if (p.value)
        if (["ArrowDown", "ArrowUp", "Enter"].includes(ce) && (T.preventDefault(), T.stopPropagation()), ce === "ArrowDown") {
          ++H.value, H.value > K && (H.value = 0);
          let Ge = (Be = L.value) == null ? void 0 : Be.querySelector('[data-index="' + H.value + '"]');
          Ge && Ge.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else if (ce === "ArrowUp") {
          --H.value, H.value < 0 && (H.value = K);
          let Ge = (Ue = L.value) == null ? void 0 : Ue.querySelector('[data-index="' + H.value + '"]');
          Ge && Ge.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else ce === "Enter" && H.value > -1 && yi(Z.value[H.value]);
    }, $l = () => {
      if (s.type === G.Html) {
        C.value && C.value.setValue(M.value);
        return;
      } else if (s.type === G.Date) {
        a.value = z.value;
        return;
      } else if (s.type === G.File) {
        a.value = z.value, _.value = w.value;
        return;
      }
      E.value = M.value;
    }, On = () => {
      if (s.type === G.Html) {
        C.value && C.value.setValue("");
        return;
      } else if (s.type === G.Date) {
        a.value = "";
        return;
      } else if (s.type === G.File) {
        a.value = "", _.value = "";
        return;
      } else if (s.type === G.Select) {
        E.value = s.multiple ? [] : "", R.value = [];
        return;
      }
      E.value = "";
    }, Wa = () => E.value, Fn = (T) => {
      ri(), Jn.includes(s.type) ? (Hi(E.value), Wl(T)) : s.type === G.Select && Wl(T), l("keyup", T);
    }, Hn = () => {
      C.value && C.value.keepFocused();
    }, $a = () => {
      if (B.value) {
        if (s.type === G.Select) {
          Un();
          return;
        }
        return Pi();
      }
      if (s.type === G.Select) {
        Pn();
        return;
      }
      return Vi();
    }, yi = (T) => {
      if (!T.disabled)
        if (s.multiple) {
          let K;
          s.optionValueType === "option" ? K = eo(T, E.value.map((ce) => ce.value)) : K = eo(T, E.value), K === -1 ? (s.optionValueType === "option" ? E.value.push(T.value) : E.value.push(String(T.value)), R.value.push(T)) : (E.value.splice(K, 1), R.value.splice(K, 1)), Hn(), l("selected-option", T);
        } else
          H.value = -1, s.optionValueType === "option" ? E.value = T : E.value = String(T.value), R.value.splice(0, 1, T), B.value = !1, U.value = !1, l("selected-option", T);
    }, Vn = (T) => l("keydown", T), Vi = (T) => {
      b.value = !0, p.value = !0, ri(), l("focus", T);
    }, Pi = (T) => {
      setTimeout(() => {
        if (!(s.searchable && U.value)) {
          if (s.multiple) {
            B.value = !0, p.value = !0;
            return;
          }
          g.value = !0, H.value = -1, B.value = !1, p.value = !1, ri(), l("blur", T);
        }
      }, 100);
    }, Ui = (T) => {
      b.value = !0, p.value = !0, l("focus", T);
    }, Wi = (T) => {
      g.value = !0, p.value = !1, l("blur", T);
    }, Za = (T) => {
      Wl(T);
    }, qa = (T) => {
      P.value = T, Hi(T);
    }, ja = (T) => {
      let K = new Nl({
        value: T,
        label: T
      });
      R.value.findIndex((Be) => Be.value === K.value) === -1 && (Y.value.push(K), Z.value.push(K), yi(K)), P.value = "";
    }, Ga = (T) => {
      let K = R.value.findIndex((ce) => ce.value === T.value);
      K >= 0 && (R.value.splice(K, 1), Y.value.splice(
        Y.value.findIndex((ce) => ce.value === T.value),
        1
      ), Z.value.splice(
        Z.value.findIndex((ce) => ce.value === T.value),
        1
      )), P.value = "";
    }, Pn = () => {
      var T, K;
      if (b.value = !0, p.value = !0, !((K = (T = s.optionsConfig) == null ? void 0 : T.http) != null && K.resource) && Z.value.length === 0) {
        B.value = !1;
        return;
      }
      B.value = !0, ri(), Hi(P.value, !1), s.searchable && Hn(), l("focus");
    }, Un = () => {
      g.value = !0, p.value = !1, l("blur");
    }, Zl = (T) => {
      l("change", T);
    }, _i = (T) => {
      l("click", T);
    }, Ya = (T) => l("click-info", T), Ka = (T) => l("click-error", T), Wn = () => {
      let T = s.step ?? 1;
      typeof T == "string" && (T = parseFloat(T)), (!s.min || E.value > s.min) && (E.value -= T);
    }, Xa = () => {
      let T = s.step ?? 1;
      typeof T == "string" && (T = parseFloat(T)), (!s.max || E.value < s.max) && (E.value += T);
    }, Ja = () => {
      y.value && Mn();
    }, Qa = () => {
      Xn({
        text: ui.defaultUploadSuccessText,
        details: ui.defaultUploadSuccessDetails,
        icon: ui.defaultUploadSuccessIcon,
        positionX: an.Right
      }), l("upload-success");
    }, es = () => {
      Xn({
        text: ui.defaultUploadErrorText,
        details: ui.defaultUploadErrorDetails,
        icon: ui.defaultUploadErrorIcon,
        positionX: an.Right
      }), l("upload-error");
    }, ts = (T) => {
      if (!s.enableAutoNumberFix) return !1;
      let K = Number(T), ce = Ys(K, ot.value, qe.value);
      return K !== ce ? (E.value = ce, !0) : !1;
    };
    t({
      Identifier: c,
      reset: $l,
      focus: Mn,
      value: Wa,
      isMandatory: () => s.mandatory,
      click: () => {
        var T;
        switch (console.log("field click method: ", s.type, I.value), s.type) {
          case G.File:
            return (T = C.value) == null ? void 0 : T.click();
        }
        I.value.click();
      }
    });
    const is = ee(() => s.editSlot !== "" && typeof ie.customEditSlots[s.editSlot] < "u"), ls = ee(() => ie.customEditSlots[s.editSlot]);
    Fl(() => {
      var T;
      Y.value = Dl(s.options, s.prop), bi("", !1), le(), s.type === G.Select && (s.multiple && (U.value = !0), (T = s.optionsConfig) != null && T.autoloadResource && Hi("", !1)), W.value = !0;
    });
    const ns = ee(() => qt.includes(s.type) && !ue.value ? "label" : "div"), os = ee(() => qt.includes(s.type) ? {
      for: c
    } : {}), as = ee(() => {
      switch (s.type) {
        case G.Select:
          return R.value;
        case G.Date:
          return ea(a.value, V.value);
        case G.File:
        case G.Image:
          return a.value;
        default:
          return E.value;
      }
    });
    return (T, K) => {
      var Ge, pt, mt, gt, vt, Dt, At, It, Rt, Mt, Ot, Ci, wi;
      const ce = xe("lkt-button"), Be = xe("lkt-loader"), Ue = xe("lkt-tooltip");
      return $(), se("div", {
        class: ut(["lkt-field", St.value]),
        "data-show-ui": et.value,
        "data-labeled": !j(n).label,
        ref_key: "container",
        ref: I
      }, [
        j(n).label ? _t(T.$slots, "label", { key: 0 }) : fe("", !0),
        !j(n).label && ke.value !== "" && !j(qt).includes(T.type) ? ($(), se("label", {
          key: 1,
          for: j(c),
          class: "lkt-field--label",
          innerHTML: ke.value
        }, null, 8, Kd)) : fe("", !0),
        ae("div", Xd, [
          Oe.value ? ($(), se("div", Jd, [
            T.featuredButton === "password" && Fi.value ? ($(), ne(rn, {
              key: 0,
              modelValue: f.value,
              "onUpdate:modelValue": K[0] || (K[0] = (ze) => f.value = ze),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : fe("", !0),
            Ul.value && j(x) === "i18n" && T.canI18n ? ($(), ne(Qn, {
              key: 1,
              modelValue: a.value,
              "onUpdate:modelValue": K[1] || (K[1] = (ze) => a.value = ze),
              "is-featured": "",
              type: T.type
            }, null, 8, ["modelValue", "type"])) : fe("", !0),
            ht.value && j(x) === "subtract" ? ($(), ne(ce, {
              key: 2,
              class: "lkt-field--atn-btn",
              icon: "lkt-icn-less",
              onClick: Wn
            })) : fe("", !0)
          ])) : fe("", !0),
          Xe.value ? ($(), se("div", Qd, [
            ae("i", {
              class: ut(Xe.value)
            }, null, 2)
          ])) : fe("", !0),
          y.value ? ($(), ne(ii(ns.value), li({ key: 2 }, os.value, { class: "lkt-field-main" }), {
            default: Ee(() => {
              var ze, Ft, Ht, Vt, Pt, Ut, Wt, $t, Tt, bt, Jt, $i, $n, Zn, qn, jn, Gn;
              return [
                j(n).edit ? ($(), se("div", {
                  key: 0,
                  onClick: _i
                }, [
                  _t(T.$slots, "edit", {
                    value: a.value,
                    title: Ze.value,
                    data: T.slotData
                  })
                ])) : is.value ? ($(), se("div", {
                  key: 1,
                  onClick: _i
                }, [
                  ($(), ne(ii(ls.value), {
                    value: a.value,
                    title: Ze.value,
                    data: T.slotData
                  }, null, 8, ["value", "title", "data"]))
                ])) : j(qt).includes(T.type) ? ($(), ne(wr, {
                  key: 2,
                  modelValue: j(E),
                  "onUpdate:modelValue": K[2] || (K[2] = (ve) => ct(E) ? E.value = ve : null),
                  ref_key: "inputElement",
                  ref: C,
                  id: j(c),
                  name: T.name,
                  type: T.type,
                  label: ke.value,
                  editable: y.value,
                  focusing: p.value,
                  disabled: ue.value,
                  readonly: T.readonly,
                  onFocus: Ui,
                  onBlur: Wi
                }, null, 8, ["modelValue", "id", "name", "type", "label", "editable", "focusing", "disabled", "readonly"])) : T.type === j(G).Color && T.multiple ? ($(), ne(cr, {
                  key: 3,
                  modelValue: j(E),
                  "onUpdate:modelValue": K[3] || (K[3] = (ve) => ct(E) ? E.value = ve : null),
                  ref_key: "inputElement",
                  ref: C,
                  "edit-mode": y.value,
                  min: ot.value,
                  max: qe.value
                }, null, 8, ["modelValue", "edit-mode", "min", "max"])) : T.type === j(G).Color ? ($(), ne(ta, {
                  key: 4,
                  modelValue: j(E),
                  "onUpdate:modelValue": K[4] || (K[4] = (ve) => ct(E) ? E.value = ve : null),
                  ref_key: "inputElement",
                  ref: C
                }, null, 8, ["modelValue"])) : J.value || oe.value ? ($(), ne(id, {
                  key: 5,
                  modelValue: a.value,
                  "onUpdate:modelValue": K[5] || (K[5] = (ve) => a.value = ve),
                  "file-name": _.value,
                  "onUpdate:fileName": K[6] || (K[6] = (ve) => _.value = ve),
                  ref_key: "inputElement",
                  ref: C,
                  id: j(c),
                  tabindex: T.tabindex,
                  resource: (ze = T.fileUploadHttp) == null ? void 0 : ze.resource,
                  "resource-data": (Ft = T.fileUploadHttp) == null ? void 0 : Ft.data,
                  name: T.name,
                  placeholder: ni.value,
                  accept: je.value,
                  focusing: p.value,
                  disabled: ue.value,
                  readonly: T.readonly,
                  "is-image": T.type === j(G).Image,
                  onChange: Zl,
                  onUploadSuccess: Qa,
                  onUploadError: es
                }, null, 8, ["modelValue", "file-name", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image"])) : X.value ? ($(), ne(cd, {
                  key: 6,
                  modelValue: a.value,
                  "onUpdate:modelValue": K[7] || (K[7] = (ve) => a.value = ve),
                  id: j(c),
                  tabindex: T.tabindex,
                  lang: N.value,
                  name: T.name
                }, null, 8, ["modelValue", "id", "tabindex", "lang", "name"])) : T.type === j(G).Select ? ($(), ne(Nc, {
                  key: 7,
                  ref_key: "inputElement",
                  ref: C,
                  modelValue: j(E),
                  "onUpdate:modelValue": K[8] || (K[8] = (ve) => ct(E) ? E.value = ve : null),
                  "show-options": B.value,
                  "onUpdate:showOptions": K[9] || (K[9] = (ve) => B.value = ve),
                  searchable: T.searchable,
                  "search-mode": U.value,
                  multiple: T.multiple,
                  "can-tag": T.multiple,
                  "options-text": (Ht = T.optionsConfig) == null ? void 0 : Ht.text,
                  "options-icon": (Vt = T.optionsConfig) == null ? void 0 : Vt.icon,
                  "options-class": (Pt = T.optionsConfig) == null ? void 0 : Pt.class,
                  "option-slot": T.optionSlot,
                  "options-modal": (Ut = T.optionsConfig) == null ? void 0 : Ut.modal,
                  "options-download": (Wt = T.optionsConfig) == null ? void 0 : Wt.download,
                  "options-label-formatter": ($t = T.optionsConfig) == null ? void 0 : $t.labelFormatter,
                  "options-modal-data": (Tt = T.optionsConfig) == null ? void 0 : Tt.modalData,
                  "picked-options": R.value,
                  editable: y.value,
                  focusing: p.value,
                  "search-placeholder": Et.value,
                  "multiple-display-edition": T.multipleDisplayEdition,
                  onFocus: Pn,
                  onBlur: Un,
                  onNavigate: Za,
                  onSearch: qa,
                  onTag: ja,
                  onUntag: Ga
                }, null, 8, ["modelValue", "show-options", "searchable", "search-mode", "multiple", "can-tag", "options-text", "options-icon", "options-class", "option-slot", "options-modal", "options-download", "options-label-formatter", "options-modal-data", "picked-options", "editable", "focusing", "search-placeholder", "multiple-display-edition"])) : T.type === j(G).Calc ? ($(), ne(Fc, {
                  key: 8,
                  ref_key: "inputElement",
                  ref: C,
                  modelValue: j(E),
                  "onUpdate:modelValue": K[10] || (K[10] = (ve) => ct(E) ? E.value = ve : null),
                  id: j(c),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: y.value,
                  focusing: p.value,
                  disabled: ue.value,
                  readonly: T.readonly,
                  options: Y.value,
                  onFocus: Ui,
                  onBlur: Wi
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "disabled", "readonly", "options"])) : T.type === j(G).Search ? ($(), ne(Wc, {
                  key: 9,
                  ref_key: "inputElement",
                  ref: C,
                  modelValue: j(E),
                  "onUpdate:modelValue": K[11] || (K[11] = (ve) => ct(E) ? E.value = ve : null),
                  id: j(c),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: y.value,
                  focusing: p.value,
                  "had-first-focus": b.value,
                  disabled: ue.value,
                  readonly: T.readonly,
                  "options-resource": (Jt = (bt = T.optionsConfig) == null ? void 0 : bt.http) == null ? void 0 : Jt.resource,
                  container: I.value,
                  onFocus: Ui,
                  onBlur: Wi
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : T.type === j(G).Elements ? ($(), ne(jd, {
                  key: 10,
                  ref_key: "inputElement",
                  ref: C,
                  modelValue: j(E),
                  "onUpdate:modelValue": K[12] || (K[12] = (ve) => ct(E) ? E.value = ve : null),
                  id: j(c),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: y.value,
                  focusing: p.value,
                  "had-first-focus": b.value,
                  disabled: ue.value,
                  readonly: T.readonly,
                  "options-resource": ($n = ($i = T.optionsConfig) == null ? void 0 : $i.http) == null ? void 0 : $n.resource,
                  container: I.value,
                  onFocus: Ui,
                  onBlur: Wi
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : T.type === j(G).Card && s.multiple ? ($(), ne(fd, {
                  key: 11,
                  modelValue: j(E),
                  "onUpdate:modelValue": K[13] || (K[13] = (ve) => ct(E) ? E.value = ve : null),
                  id: j(c),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: y.value,
                  focusing: p.value,
                  "had-first-focus": b.value,
                  disabled: ue.value,
                  readonly: T.readonly,
                  "options-resource": (qn = (Zn = T.optionsConfig) == null ? void 0 : Zn.http) == null ? void 0 : qn.resource,
                  modal: Ke.value,
                  "modal-key": j(o),
                  "modal-data": Ie.value,
                  "item-type": j(m)
                }, Xi({ _: 2 }, [
                  j(n)["item-" + j(m)] ? {
                    name: "item",
                    fn: Ee(({ item: ve }) => [
                      _t(T.$slots, "item-" + j(m), { item: ve })
                    ]),
                    key: "0"
                  } : j(n).item ? {
                    name: "item",
                    fn: Ee(({ item: ve }) => [
                      _t(T.$slots, "item", { item: ve })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : T.type === j(G).Card ? ($(), ne(Ea, {
                  key: 12,
                  modelValue: j(E),
                  "onUpdate:modelValue": K[14] || (K[14] = (ve) => ct(E) ? E.value = ve : null),
                  id: j(c),
                  tabindex: T.tabindex,
                  name: T.name,
                  editable: y.value,
                  focusing: p.value,
                  "had-first-focus": b.value,
                  disabled: ue.value,
                  readonly: T.readonly,
                  "options-resource": (Gn = (jn = T.optionsConfig) == null ? void 0 : jn.http) == null ? void 0 : Gn.resource,
                  modal: Ke.value,
                  "modal-key": j(o),
                  "modal-data": Ie.value,
                  "item-type": j(m)
                }, Xi({ _: 2 }, [
                  j(n)["item-" + j(m)] ? {
                    name: "item",
                    fn: Ee(({ item: ve }) => [
                      _t(T.$slots, "item-" + j(m), { item: ve })
                    ]),
                    key: "0"
                  } : j(n).item ? {
                    name: "item",
                    fn: Ee(({ item: ve }) => [
                      _t(T.$slots, "item", { item: ve })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : me.value === "input" ? lt(($(), se("input", {
                  key: 13,
                  "onUpdate:modelValue": K[15] || (K[15] = (ve) => ct(E) ? E.value = ve : null),
                  ref: (ve) => C.value = ve,
                  value: j(E),
                  type: De.value,
                  name: T.name,
                  id: j(c),
                  disabled: ue.value,
                  readonly: T.readonly,
                  placeholder: ni.value,
                  tabindex: T.tabindex,
                  autocomplete: Se.value,
                  min: ot.value,
                  max: qe.value,
                  step: T.step,
                  onKeyup: Fn,
                  onKeydown: Vn,
                  onFocus: Vi,
                  onBlur: Pi,
                  onClick: _i,
                  onChange: Zl
                }, null, 40, ef)), [
                  [fs, j(E)]
                ]) : me.value === "textarea" ? lt(($(), se("textarea", {
                  key: 14,
                  "onUpdate:modelValue": K[16] || (K[16] = (ve) => ct(E) ? E.value = ve : null),
                  ref: (ve) => C.value = ve,
                  value: j(E),
                  name: T.name,
                  id: j(c),
                  disabled: ue.value,
                  readonly: T.readonly,
                  placeholder: ni.value,
                  tabindex: T.tabindex,
                  autocomplete: Se.value,
                  onKeyup: Fn,
                  onKeydown: Vn,
                  onFocus: Vi,
                  onBlur: Pi,
                  onClick: _i,
                  onChange: Zl
                }, null, 40, tf)), [
                  [Hl, j(E)]
                ]) : T.type === j(G).Html ? ($(), ne(Sc, {
                  key: 15,
                  ref_key: "inputElement",
                  ref: C,
                  modelValue: j(E),
                  "onUpdate:modelValue": K[17] || (K[17] = (ve) => ct(E) ? E.value = ve : null),
                  id: j(c),
                  tabindex: T.tabindex,
                  name: T.name,
                  lang: N.value,
                  editable: y.value,
                  focusing: p.value,
                  disabled: ue.value,
                  readonly: T.readonly,
                  onFocus: Vi,
                  onBlur: Pi
                }, null, 8, ["modelValue", "id", "tabindex", "name", "lang", "editable", "focusing", "disabled", "readonly"])) : fe("", !0)
              ];
            }),
            _: 3
          }, 16)) : fe("", !0),
          y.value ? fe("", !0) : ($(), ne(ed, {
            key: 3,
            value: as.value,
            type: T.type,
            label: ke.value,
            title: Ze.value,
            "file-name": _.value,
            "value-slot": T.valueSlot,
            "empty-value-slot": T.emptyValueSlot,
            "slot-data": T.slotData,
            download: j(u),
            multiple: T.multiple,
            multipleDisplay: T.multipleDisplay,
            modal: Ke.value,
            "modal-key": j(o),
            "modal-data": Ie.value,
            "option-slot": T.optionSlot,
            "options-download": (Ge = T.optionsConfig) == null ? void 0 : Ge.download,
            "options-modal": (pt = T.optionsConfig) == null ? void 0 : pt.modal,
            "options-modal-data": (mt = T.optionsConfig) == null ? void 0 : mt.modalData,
            "options-icon": (gt = T.optionsConfig) == null ? void 0 : gt.icon,
            "options-text": (vt = T.optionsConfig) == null ? void 0 : vt.text,
            "options-class": (Dt = T.optionsConfig) == null ? void 0 : Dt.class,
            "options-label-formatter": (At = T.optionsConfig) == null ? void 0 : At.labelFormatter,
            "options-resource": (Rt = (It = T.optionsConfig) == null ? void 0 : It.http) == null ? void 0 : Rt.resource,
            "options-resource-data": (Ot = (Mt = T.optionsConfig) == null ? void 0 : Mt.http) == null ? void 0 : Ot.data,
            "read-mode-config": T.readModeConfig,
            onClick: _i
          }, Xi({ _: 2 }, [
            j(n).value ? {
              name: "value",
              fn: Ee(() => [
                _t(T.$slots, a.value, {
                  value: a.value,
                  title: Ze.value,
                  data: T.slotData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "type", "label", "title", "file-name", "value-slot", "empty-value-slot", "slot-data", "download", "multiple", "multipleDisplay", "modal", "modal-key", "modal-data", "option-slot", "options-download", "options-modal", "options-modal-data", "options-icon", "options-text", "options-class", "options-label-formatter", "options-resource", "options-resource-data", "read-mode-config"])),
          et.value ? ($(), se("div", lf, [
            lt(re(Xo, { onClick: $l }, null, 512), [
              [Zt, Bn.value]
            ]),
            lt(re(Jo, { onClick: On }, null, 512), [
              [Zt, zn.value]
            ]),
            T.type === j(G).Number ? lt(($(), ne(ce, {
              key: 0,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              onClick: Wn
            }, null, 512)), [
              [Zt, si.value]
            ]) : fe("", !0),
            T.type === j(G).Number ? lt(($(), ne(ce, {
              key: 1,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-more",
              onClick: Xa
            }, null, 512)), [
              [Zt, En.value]
            ]) : fe("", !0),
            oi.value ? ($(), ne(ce, {
              key: 2,
              title: T.errorMessage,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-attention",
              onClick: Ka
            }, null, 8, ["title"])) : fe("", !0),
            ai.value ? ($(), ne(ce, {
              key: 3,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-info",
              onClick: Ya,
              tooltip: "",
              "show-tooltip-on-hover": "",
              "show-tooltip-on-hover-delay": 500,
              "hide-tooltip-on-leave": ""
            }, {
              tooltip: Ee(() => [
                mi(Lt(T.infoMessage), 1)
              ]),
              _: 1
            })) : fe("", !0),
            y.value && Rn.value ? ($(), ne(Gd, {
              key: 4,
              config: T.fileUploadButton,
              "file-upload-http": T.fileUploadHttp
            }, null, 8, ["config", "file-upload-http"])) : fe("", !0),
            T.type === j(G).Password ? lt(($(), ne(rn, {
              key: 5,
              modelValue: f.value,
              "onUpdate:modelValue": K[18] || (K[18] = (ze) => f.value = ze)
            }, null, 8, ["modelValue"])), [
              [Zt, Nn.value]
            ]) : fe("", !0),
            lt(re(Qn, {
              modelValue: a.value,
              "onUpdate:modelValue": K[19] || (K[19] = (ze) => a.value = ze),
              type: T.type
            }, null, 8, ["modelValue", "type"]), [
              [Zt, Dn.value]
            ]),
            y.value && In.value ? ($(), ne(Qo, {
              key: 6,
              modelValue: y.value,
              "onUpdate:modelValue": K[20] || (K[20] = (ze) => y.value = ze),
              onClick: Ja
            }, null, 8, ["modelValue"])) : fe("", !0),
            T.customButtonText || T.customButtonClass ? ($(), ne(ce, {
              key: 7,
              text: T.customButtonText,
              class: "lkt-field--info-btn lkt-field--custom-btn",
              icon: T.customButtonClass
            }, null, 8, ["text", "icon"])) : fe("", !0),
            y.value ? lt(($(), ne(Js, {
              key: 8,
              onClick: $a
            }, null, 512)), [
              [Zt, An.value]
            ]) : fe("", !0),
            T.infoButtonEllipsis ? ($(), ne(Gs, {
              key: 9,
              "show-undo": Tn.value,
              "show-clear": Ln.value,
              "show-password": Fi.value,
              "show-edition": T.allowReadModeSwitch,
              "show-password-check": f.value,
              "onUpdate:showPasswordCheck": K[21] || (K[21] = (ze) => f.value = ze),
              "show-edition-check": y.value,
              "onUpdate:showEditionCheck": K[22] || (K[22] = (ze) => y.value = ze),
              onUndo: $l,
              onClear: On
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"])) : fe("", !0)
          ])) : fe("", !0)
        ]),
        y.value && ((Ci = T.validation) == null ? void 0 : Ci.type) === j(sn).Auto && h.value.length > 0 ? ($(), ne(Pc, {
          key: 2,
          items: h.value,
          stack: (wi = T.validation) == null ? void 0 : wi.stack
        }, null, 8, ["items", "stack"])) : fe("", !0),
        y.value && j(Jn).includes(T.type) ? ($(), ne(Ue, li({
          key: 3,
          ref_key: "dropdownEl",
          ref: S,
          class: "lkt-field--dropdown",
          modelValue: B.value,
          "onUpdate:modelValue": K[23] || (K[23] = (ze) => B.value = ze),
          referrer: I.value,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, T.tooltipConfig), {
          default: Ee(() => [
            B.value ? ($(), se("div", nf, [
              D.value ? ($(), ne(Be, { key: 0 })) : fe("", !0),
              D.value ? fe("", !0) : ($(), se("ul", {
                key: 1,
                class: "lkt-field--dropdown-options",
                ref_key: "optionList",
                ref: L
              }, [
                ($(!0), se(Qe, null, kt(Z.value, (ze, Ft) => {
                  var Ht, Vt, Pt, Ut, Wt, $t, Tt, bt, Jt;
                  return $(), se("li", {
                    class: ut({
                      "is-active": j(Xs)(ze, a.value, T.multiple),
                      "is-focused": Ft === H.value,
                      "is-disabled": ze.disabled
                    }),
                    "data-index": Ft,
                    onClick: () => yi(ze)
                  }, [
                    j(n).option ? _t(T.$slots, "option", {
                      key: 0,
                      option: ze,
                      data: T.slotData,
                      modal: (Ht = T.optionsConfig) == null ? void 0 : Ht.modal,
                      modalData: (Vt = T.optionsConfig) == null ? void 0 : Vt.modalData,
                      download: (Pt = T.optionsConfig) == null ? void 0 : Pt.download,
                      editable: y.value
                    }) : ($(), ne(Xt, {
                      key: 1,
                      option: ze,
                      "option-slot": T.optionSlot,
                      icon: (Ut = T.optionsConfig) == null ? void 0 : Ut.icon,
                      text: (Wt = T.optionsConfig) == null ? void 0 : Wt.text,
                      modal: ($t = T.optionsConfig) == null ? void 0 : $t.modal,
                      "modal-data": (Tt = T.optionsConfig) == null ? void 0 : Tt.modalData,
                      download: (bt = T.optionsConfig) == null ? void 0 : bt.download,
                      "label-formatter": (Jt = T.optionsConfig) == null ? void 0 : Jt.labelFormatter,
                      editable: y.value
                    }, null, 8, ["option", "option-slot", "icon", "text", "modal", "modal-data", "download", "label-formatter", "editable"]))
                  ], 10, of);
                }), 256))
              ], 512))
            ])) : fe("", !0)
          ]),
          _: 3
        }, 16, ["modelValue", "referrer"])) : fe("", !0)
      ], 10, Yd);
    };
  }
}), af = { class: "lkt-grid-1" }, sf = /* @__PURE__ */ Le({
  __name: "LktTextLanguageEditModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    type: {},
    translations: { default: () => ({}) }
  },
  setup(e) {
    const t = ee(() => ms.value.filter((i) => i !== jo.value));
    return (i, l) => {
      const n = xe("lkt-modal");
      return $(), ne(n, {
        "modal-name": i.modalName,
        title: "__:lmm.confirmFormLeave",
        "modal-key": i.modalKey,
        "z-index": i.zIndex
      }, {
        default: Ee(() => [
          ae("div", af, [
            re(vi, {
              type: i.type,
              label: "Idioma actual (ES)",
              modelValue: i.translations.es,
              "onUpdate:modelValue": l[0] || (l[0] = (s) => i.translations.es = s),
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "modelValue"]),
            ($(!0), se(Qe, null, kt(t.value, (s) => ($(), ne(vi, {
              type: i.type,
              label: "Idioma (" + s + ")",
              modelValue: i.translations[s],
              "onUpdate:modelValue": (c) => i.translations[s] = c,
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "label", "modelValue", "onUpdate:modelValue"]))), 256))
          ])
        ]),
        _: 1
      }, 8, ["modal-name", "modal-key", "z-index"]);
    };
  }
}), gf = (e, t) => (ie.customValueSlots[e] = t, !0), vf = (e, t) => (ie.customEditSlots[e] = t, !0), bf = {
  install: (e) => {
    e.component("lkt-field") === void 0 && (e.component("lkt-field", vi), gs("lkt-field-language-edit", sf));
  }
}, yf = (e) => {
  ie.defaultEmptyValueSlot = e;
}, _f = (e, t) => {
  ie.optionSlots[e] = t;
}, Cf = (e) => ie.undoText = e, wf = (e) => ie.clearText = e, kf = (e) => ie.i18nText = e, xf = (e) => ie.switchEditionOnText = e, Sf = (e) => ie.switchEditionOffText = e, Ef = (e) => ie.showPasswordOnText = e, Tf = (e) => ie.showPasswordOffText = e, Lf = (e) => ie.dateReadFormat = e, Bf = (e) => ie.defaultDateReadFormat = e, zf = (e, t, i = "default") => {
  i || (i = "default"), ie.validationMessages[i] || (ie.validationMessages[i] = {}), ie.validationMessages[i][e] = t;
}, Nf = (e) => (ie.validationIconSlot = e, !0), Df = (e = 2, t = ".", i = ".", l = !0, n = "") => n !== "" ? (ie.langNumberFormat[n].amountOfDecimals = e, ie.langNumberFormat[n].decimalSeparator = t, ie.langNumberFormat[n].thousandsSeparator = i, ie.langNumberFormat[n].removeDecimalsIfZero = l, !0) : (ie.amountOfDecimals = e, ie.decimalSeparator = t, ie.thousandsSeparator = i, ie.removeDecimalsIfZero = l, !0), Af = (e) => {
  ie.readTextMaxLength = e;
}, If = (e, t) => {
  ie.modalPerItemType[e] = t;
};
export {
  Es as Field,
  vi as LktField,
  Nl as Option,
  bf as default,
  wf as setFieldClearText,
  Lf as setFieldDateReadFormat,
  Bf as setFieldDefaultDateReadFormat,
  yf as setFieldEmptySlot,
  kf as setFieldI18nText,
  Df as setFieldNumberFormat,
  _f as setFieldOptionSlot,
  Tf as setFieldShowPasswordOffText,
  Ef as setFieldShowPasswordOnText,
  Sf as setFieldSwitchEditionOffText,
  xf as setFieldSwitchEditionOnText,
  Cf as setFieldUndoText,
  Nf as setFieldValidationIconSlot,
  zf as setFieldValidationMessage,
  If as setModalPerItemType,
  Af as setReadTextMaxLength,
  vf as setTextEditSlot,
  gf as setTextValueSlot
};
