import { defineComponent as _e, computed as Q, resolveComponent as pe, createBlock as ee, openBlock as O, normalizeClass as Ve, ref as J, watch as re, withCtx as me, createCommentVNode as se, resolveDynamicComponent as Rt, mergeProps as Be, createElementBlock as ne, createElementVNode as ge, toDisplayString as _t, Fragment as De, renderList as tt, createVNode as oe, unref as U, normalizeStyle as gl, withDirectives as Ue, vModelCheckbox as ho, onMounted as Li, vModelText as zi, vShow as gt, nextTick as Bi, createTextVNode as At, useSlots as $i, renderSlot as Qe, createStaticVNode as po, createSlots as Nt, mergeDefaults as mo, isRef as Je, vModelDynamic as go, normalizeProps as Bt, guardReactiveProps as Hi } from "vue";
import { stripTags as sn, fill as vo, generateRandomString as bo, formatNumber as vl, isEmail as yo } from "lkt-string-tools";
import { httpCall as Si } from "lkt-http-client";
import { __ as an, currentLanguage as rn, availableLanguages as _o } from "lkt-i18n";
import { extractPropValue as vt, LktSettings as yt, Option as Ei, FieldType as q, LktColor as un, TooltipLocationX as dn, TooltipLocationY as cn, ButtonType as kt, FieldValidation as Ne, ValidationStatus as Le, MultipleOptionsDisplay as Xt, TableType as fn, booleanFieldTypes as bt, fieldsWithMultipleMode as Co, FieldValidationType as wo, extractI18nValue as Ft, fieldTypesWithoutUndo as ko, fieldTypesWithoutClear as xo, textFieldTypes as So, FieldAutoValidationTrigger as Eo, fieldTypesWithOptions as bl, getDefaultValues as To, Field as Lo, ToastPositionX as yl, FileEntityType as We, AccordionType as Fi, AccordionToggleMode as zo, TablePermission as Gt, ItemCrudMode as _l, ItemCrudView as Bo, FileEntity as Cl, IconPosition as No, AnchorType as Ro, MenuEntryType as Ao } from "lkt-vue-kernel";
import { Field as Xu, Option as Ju } from "lkt-vue-kernel";
import { date as Ot } from "lkt-date-tools";
import { openToast as wl } from "lkt-toast";
import { closeModal as Io, addModal as kl } from "lkt-modal";
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
const hn = /* @__PURE__ */ _e({
  __name: "UndoButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, o = e, l = Q(() => te.undoText), a = Q(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), d = () => i("click");
    return (f, n) => {
      const b = pe("lkt-button");
      return O(), ee(b, {
        text: f.insideEllipsis ? l.value : "",
        title: l.value,
        class: Ve([a.value, "lkt-field--btn-undo"]),
        icon: "lkt-icn-undo",
        onClick: d
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), pn = /* @__PURE__ */ _e({
  __name: "ClearButton",
  props: {
    insideEllipsis: { type: Boolean, default: !1 }
  },
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, o = e, l = Q(() => te.clearText), a = Q(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), d = () => i("click");
    return (f, n) => {
      const b = pe("lkt-button");
      return O(), ee(b, {
        text: f.insideEllipsis ? l.value : "",
        title: l.value,
        class: Ve(a.value),
        icon: "lkt-icn-cancel",
        onClick: d
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Ui = /* @__PURE__ */ _e({
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
    const i = t, o = e, l = J(o.modelValue);
    re(() => o.modelValue, (b) => l.value = b), re(l, (b) => i("update:modelValue", b));
    const a = Q(() => l.value ? te.showPasswordOnText : te.showPasswordOffText), d = Q(() => l.value === !0 ? "lkt-icn-see" : "lkt-icn-not-see"), f = Q(() => o.isFeatured ? "lkt-field--atn-btn" : o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), n = () => i("click");
    return (b, u) => {
      const v = pe("lkt-button");
      return O(), ee(v, {
        text: b.insideEllipsis ? a.value : "",
        title: a.value,
        class: Ve(f.value),
        icon: d.value,
        onClick: n,
        checked: l.value,
        "onUpdate:checked": u[0] || (u[0] = (w) => l.value = w),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), mn = /* @__PURE__ */ _e({
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
    const i = t, o = e, l = J(o.modelValue);
    re(() => o.modelValue, (b) => l.value = b), re(l, (b) => i("update:modelValue", b));
    const a = Q(() => l.value ? te.switchEditionOnText : te.switchEditionOffText), d = Q(() => l.value === !0 ? "lkt-icon-see" : "lkt-icn-edit"), f = Q(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), n = () => i("click");
    return (b, u) => {
      const v = pe("lkt-button");
      return O(), ee(v, {
        text: b.insideEllipsis ? a.value : "",
        title: a.value,
        class: Ve(f.value),
        icon: d.value,
        onClick: n,
        checked: l.value,
        "onUpdate:checked": u[0] || (u[0] = (w) => l.value = w),
        "hidden-switch": ""
      }, null, 8, ["text", "title", "class", "icon", "checked"]);
    };
  }
}), Mo = /* @__PURE__ */ _e({
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
    const i = t, o = e, l = J(o.showPasswordCheck);
    re(() => o.showPasswordCheck, (d) => l.value = d), re(l, (d) => i("update:showPasswordCheck", d));
    const a = J(o.showEditionCheck);
    return re(() => o.showEditionCheck, (d) => a.value = d), re(a, (d) => i("update:showEditionCheck", d)), (d, f) => {
      const n = pe("lkt-button");
      return O(), ee(n, {
        split: "",
        "split-icon": "lkt-icn-ellipsis-menu-vertical",
        class: "lkt-field--info-btn"
      }, {
        split: me(({ doClose: b }) => [
          d.showUndo ? (O(), ee(hn, {
            key: 0,
            onClick: f[0] || (f[0] = () => i("undo")),
            "inside-ellipsis": ""
          })) : se("", !0),
          d.showClear ? (O(), ee(pn, {
            key: 1,
            onClick: f[1] || (f[1] = () => i("clear")),
            "inside-ellipsis": ""
          })) : se("", !0),
          d.showPassword ? (O(), ee(Ui, {
            key: 2,
            modelValue: l.value,
            "onUpdate:modelValue": f[2] || (f[2] = (u) => l.value = u),
            "inside-ellipsis": ""
          }, null, 8, ["modelValue"])) : se("", !0),
          d.showEdition ? (O(), ee(mn, {
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
}), xl = /* @__PURE__ */ _e({
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
    const i = t, o = e, l = J(o.modelValue);
    re(() => o.modelValue, (f) => l.value = f, { deep: !0 }), re(l, (f) => i("update:modelValue", f), { deep: !0 });
    const a = Q(() => te.i18nText), d = Q(() => o.isFeatured ? "lkt-field--atn-btn" : o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn");
    return (f, n) => {
      const b = pe("lkt-button");
      return O(), ee(b, {
        text: f.insideEllipsis ? a.value : "",
        title: a.value,
        class: Ve(d.value),
        icon: "lkt-icn-lang-picker",
        modal: "lkt-field-language-edit",
        "modal-data": { translations: l.value, type: f.type }
      }, null, 8, ["text", "title", "class", "modal-data"]);
    };
  }
}), Do = (e, t, i) => (e = Number(e), t !== !1 && e < t && (e = t), i !== !1 && e > i && (e = i), e), Ti = (e, t) => {
  if (typeof e == "string" && (e = vt(e, t), typeof e == "string" && e.startsWith("__:"))) {
    let i = e.substring(3), o = an(i), l = [];
    for (let a in o) l.push({ value: a, label: o[a] });
    return yt.i18nOptionsFormatter[i] && (l = yt.i18nOptionsFormatter[i](l)), Ti(l, t);
  }
  return Array.isArray(e) ? e.length === 0 ? e : e.map((i) => {
    if (typeof i == "object") return new Ei(i);
    if (typeof i == "string" || typeof i == "number")
      return new Ei({
        label: String(i),
        value: i
      });
  }).filter((i) => typeof i < "u") : [];
}, Oi = (e, t = "", i = !0, o = void 0) => {
  if (t === "" && typeof o != "function") return e;
  let l = e;
  const a = String(t).toLowerCase();
  return a !== "" && (l = l.filter((d) => {
    let f = String(d.label).toLowerCase();
    return f.indexOf(a) !== -1 && (i || f !== a);
  })), typeof o == "function" && (l = l.filter((d) => o(d))), l;
}, Kt = (e, t) => {
  if (t !== "")
    return e.find((i) => Array.isArray(t) ? t.includes(i.value) : i.value == t);
}, Vo = (e, t, i) => {
  const o = /* @__PURE__ */ new Set(), l = [...e, ...Ti(t, i)], a = [];
  return l.forEach((d) => {
    let f = [d.value, d.label].join("-");
    o.has(f) || (a.push(d), o.add(f));
  }), a;
}, Ho = (e, t, i) => {
  if (i) {
    if (Array.isArray(t)) {
      let o = t.findIndex((l) => l == e.value);
      return typeof o > "u" ? !1 : o > -1;
    }
    return !1;
  }
  return e.value == t;
}, zt = (e, t) => {
  let i = t.findIndex((o) => o == e.value);
  return typeof i > "u" && (i = -1), i;
}, qi = (e) => !(Object.prototype.toString.call(e) === "[object Date]" && isNaN(e)), gn = (e, t) => typeof e > "u" ? "" : (typeof e == "string" && (e = new Date(e)), qi(e) ? Ot(t, e) : ""), Fo = /* @__PURE__ */ _e({
  __name: "DropdownButton",
  emits: [
    "click"
  ],
  setup(e, { emit: t }) {
    const i = t, o = Q(() => te.undoText), l = Q(() => "lkt-field--info-btn"), a = () => i("click");
    return (d, f) => {
      const n = pe("lkt-button");
      return O(), ee(n, {
        text: o.value,
        title: o.value,
        class: Ve([l.value, "lkt-field--btn-dropdown"]),
        icon: "lkt-icn-angle-bottom",
        onClick: a,
        tabindex: "-1"
      }, null, 8, ["text", "title", "class"]);
    };
  }
}), Oo = {
  key: 0,
  class: "lkt-field--dropdown-option--icon-container"
}, Po = { class: "lkt-field--dropdown-option--label-container" }, Ct = /* @__PURE__ */ _e({
  __name: "DropdownOption",
  props: {
    option: { default: () => new Ei() },
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
    const i = t, o = e, l = Q(() => o.option.icon !== "" ? o.option.icon : typeof o.icon == "function" ? o.icon(o.option, o.prop) : o.icon), a = Q(() => {
      if (typeof o.text < "u") {
        if (typeof o.text == "function")
          return o.text(o.option, o.prop);
        if (o.text !== "") return o.text;
      }
      return d.value;
    }), d = Q(() => typeof o.labelFormatter == "function" ? o.labelFormatter(o.option) : o.option.label), f = Q(() => typeof o.customClass == "function" ? o.customClass(o.option) : typeof o.customClass < "u" ? o.customClass : `lkt-opt-${o.option.value}`), n = Q(() => {
      if (o.optionSlot && !(typeof te.optionSlots[o.optionSlot] > "u"))
        return te.optionSlots[o.optionSlot];
    }), b = Q(() => n.value ? n.value : o.isTag ? "lkt-tag" : !o.editable && (o.modal !== "" || o.option.modal !== "") ? "lkt-button" : !o.editable && o.download !== "" ? "lkt-anchor" : "div"), u = Q(() => {
      if (b.value === "lkt-button") {
        let x = o.option.modal;
        o.modal && (x = o.modal);
        let E = x;
        return typeof x == "function" && (E = () => x(o.option)), {
          modal: E,
          modalData: o.modalData,
          modalKey: o.option.value,
          icon: l.value
        };
      }
      if (b.value === "lkt-anchor") {
        let x = o.download;
        typeof o.download == "function" ? x = () => o.download(o.option) : o.download.startsWith("prop:") && (x = o.download.substring(5), x = o.option[x]);
        let E = o.download !== "";
        return {
          href: x,
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
    return (x, E) => {
      const A = pe("lkt-tag");
      return O(), ee(Rt(b.value), Be(u.value, {
        class: ["lkt-field--dropdown-option", f.value],
        title: a.value,
        onClick: v,
        onClickIcon: w
      }), {
        default: me(() => [
          l.value && b.value !== "lkt-button" ? (O(), ne("div", Oo, [
            ge("i", {
              class: Ve(l.value)
            }, null, 2)
          ])) : se("", !0),
          ge("div", Po, _t(a.value), 1),
          (O(!0), ne(De, null, tt(x.option.tags, (s) => (O(), ee(A, Be({ ref_for: !0 }, s), null, 16))), 256))
        ]),
        _: 1
      }, 16, ["class", "title"]);
    };
  }
}), Uo = { class: "lkt-field-color--tooltip--rgba-container" }, Wo = { class: "lkt-field-color--tooltip--numeric-input-container" }, Zo = { class: "like-lkt-field-label" }, Yt = /* @__PURE__ */ _e({
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
    const i = t, o = e, l = J(o.modelValue);
    return re(() => o.modelValue, (a) => l.value = a), re(l, (a) => i("update:modelValue", a)), (a, d) => (O(), ne("div", Uo, [
      ge("div", Wo, [
        ge("label", Zo, _t(a.label), 1),
        oe(It, Be({
          modelValue: l.value,
          "onUpdate:modelValue": d[0] || (d[0] = (f) => l.value = f)
        }, {
          type: U(q).Number,
          min: 0,
          max: 255,
          step: 1,
          canStep: !1
        }), null, 16, ["modelValue"])
      ]),
      oe(It, Be({
        class: ["color-range", a.rangeClass],
        modelValue: l.value,
        "onUpdate:modelValue": d[1] || (d[1] = (f) => l.value = f)
      }, {
        type: U(q).Range,
        min: 0,
        max: 255,
        step: 1
      }), null, 16, ["class", "modelValue"])
    ]));
  }
}), $o = (e, t, i, o) => new un({ r: e, g: t, b: i, a: o }).toString(), Sl = (e) => un.fromHexColor(e), qo = (e) => e.getContrastFontColor(), jo = { class: "lkt-grid-1" }, Go = { class: "lkt-field-color--tooltip--rgba-container" }, Ko = { class: "lkt-field-color--tooltip--hex-input-container" }, vn = /* @__PURE__ */ _e({
  __name: "ColorInput",
  props: {
    modelValue: { default: "" }
  },
  emits: [
    "update:modelValue",
    "change"
  ],
  setup(e, { emit: t }) {
    const i = t, o = e, l = (A) => {
      if ([0, 1].includes(A.length))
        f.value = 0, n.value = 0, b.value = 0, u.value = 255;
      else if ([7, 9].includes(A.length)) {
        let s = Sl(A);
        f.value = s.r, n.value = s.g, b.value = s.b, u.value = s.a;
      }
    }, a = () => {
      v.value = $o(
        f.value,
        n.value,
        b.value,
        u.value
      );
    }, d = () => {
      l(v.value), i("change");
    }, f = J(255), n = J(255), b = J(255), u = J(255), v = J(o.modelValue);
    l(v.value), re([f, n, b, u], a), re(() => o.modelValue, (A) => v.value = A), re(v, (A) => i("update:modelValue", A));
    const w = Q(() => qo(Sl(v.value))), x = Q(() => v.value === "" || v.value === "#" ? {} : {
      background: v.value,
      "--lkt-btn-bg": v.value,
      color: w.value,
      "--lkt-btn-color": w.value
    }), E = Q(() => v.value === "" || v.value === "#" ? {} : {
      "--lkt-field-bg-input": v.value,
      "--lkt-field-color": w.value
    });
    return (A, s) => {
      const r = pe("lkt-button");
      return O(), ee(r, {
        class: "lkt-field--toggle-button",
        style: gl(x.value),
        text: v.value,
        type: U(kt).Tooltip,
        tooltip: {
          class: "lkt-field-color--tooltip",
          locationY: U(cn).Bottom,
          locationX: U(dn).LeftCorner
        }
      }, {
        tooltip: me(({ doClose: c }) => [
          ge("div", jo, [
            ge("div", Go, [
              ge("div", Ko, [
                s[5] || (s[5] = ge("label", { class: "like-lkt-field-label" }, "HEX", -1)),
                oe(It, {
                  modelValue: v.value,
                  "onUpdate:modelValue": s[0] || (s[0] = (p) => v.value = p),
                  style: gl(E.value),
                  onChange: d
                }, null, 8, ["modelValue", "style"])
              ])
            ]),
            oe(Yt, {
              modelValue: f.value,
              "onUpdate:modelValue": s[1] || (s[1] = (p) => f.value = p),
              label: "R",
              "range-class": "color-range--red"
            }, null, 8, ["modelValue"]),
            oe(Yt, {
              modelValue: n.value,
              "onUpdate:modelValue": s[2] || (s[2] = (p) => n.value = p),
              label: "G",
              "range-class": "color-range--green"
            }, null, 8, ["modelValue"]),
            oe(Yt, {
              modelValue: b.value,
              "onUpdate:modelValue": s[3] || (s[3] = (p) => b.value = p),
              label: "B",
              "range-class": "color-range--blue"
            }, null, 8, ["modelValue"]),
            oe(Yt, {
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
}), Yo = /* @__PURE__ */ _e({
  __name: "MultipleColorInput",
  props: {
    modelValue: { default: () => [] },
    editMode: { type: Boolean, default: !1 },
    min: { type: [Number, Boolean] },
    max: { type: [Number, Boolean] }
  },
  setup(e) {
    const t = e, i = J(t.modelValue), o = Q(() => typeof t.max == "boolean" || i.value.length < t.max ? ["inline-create"] : []);
    return (l, a) => {
      const d = pe("lkt-table");
      return O(), ee(d, {
        type: "item",
        modelValue: i.value,
        "onUpdate:modelValue": a[0] || (a[0] = (f) => i.value = f),
        perms: o.value,
        "edit-mode": l.editMode,
        "new-value-generator": () => "",
        "required-items-for-top-create": 999999
      }, {
        item: me(({ item: f, index: n, isLoading: b, canCreate: u, canRead: v, canUpdate: w, canDrop: x, doDrop: E }) => [
          oe(vn, {
            modelValue: i.value[n],
            "onUpdate:modelValue": (A) => i.value[n] = A
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "perms", "edit-mode"]);
    };
  }
}), Xo = (e, t, i, o) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\D+/g, "").length < l && e.push(Ne.createMinNumbers(l, Le.Ko));
  }
  if (typeof o < "u") {
    let l = parseInt(o);
    t.replace(/\D+/g, "").length > l && e.push(Ne.createMaxNumbers(l, Le.Ko));
  }
}, Jo = (e, t, i, o) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/[^A-Z]+/g, "").length < l && e.push(Ne.createMinUpperChars(l, Le.Ko));
  }
  if (typeof o < "u") {
    let l = parseInt(o);
    t.replace(/[^A-Z]+/g, "").length > l && e.push(Ne.createMaxUpperChars(l, Le.Ko));
  }
}, Qo = (e, t, i, o) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/[A-Z]+/g, "").length < l && e.push(Ne.createMinLowerChars(l, Le.Ko));
  }
  if (typeof o < "u") {
    let l = parseInt(o);
    t.replace(/[A-Z]+/g, "").length > l && e.push(Ne.createMaxLowerChars(l, Le.Ko));
  }
}, es = (e, t, i, o) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\d+/g, "").length < l && e.push(Ne.createMinChars(l, Le.Ko));
  }
  if (typeof o < "u") {
    let l = parseInt(o);
    t.replace(/\d+/g, "").length > l && e.push(Ne.createMaxChars(l, Le.Ko));
  }
}, ts = (e, t, i, o) => {
  if (typeof i < "u") {
    let l = parseInt(i);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length < l && e.push(Ne.createMinSpecialChars(l, Le.Ko));
  }
  if (typeof o < "u") {
    let l = parseInt(o);
    t.replace(/\d+/g, "").replace(/[a-zA-Z]+/g, "").length > l && e.push(Ne.createMaxSpecialChars(l, Le.Ko));
  }
}, El = (e, t = "default") => {
  if (!e) return "";
  let i = te.validationMessages[t] && te.validationMessages[t][e] ? te.validationMessages[t][e] : "";
  return i || (i = ""), i;
}, is = { class: "boolean-input" }, ls = { class: "boolean-input-label" }, ns = { class: "boolean-input--check-on" }, os = {
  key: 0,
  class: "lkt-icn-ok"
}, ss = ["innerHTML"], as = ["name", "id", "disabled", "readonly", "value", "checked"], rs = /* @__PURE__ */ _e({
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
    const i = t, o = e, l = J(null), a = J(o.modelValue), d = J(a.value ? "true" : "false"), f = J(o.focusing), n = (u) => {
      f.value = !0, i("focus", u);
    }, b = (u) => {
      f.value = !1, i("blur", u);
    };
    return re(() => o.modelValue, (u) => a.value = u), re(a, (u) => i("update:modelValue", u)), (u, v) => (O(), ne("div", is, [
      ge("div", ls, [
        ge("div", ns, [
          u.type === U(q).Check && a.value ? (O(), ne("i", os)) : se("", !0)
        ])
      ]),
      u.label ? (O(), ne("div", {
        key: 0,
        class: "lkt-field--label",
        innerHTML: u.label
      }, null, 8, ss)) : se("", !0),
      Ue(ge("input", {
        "onUpdate:modelValue": v[0] || (v[0] = (w) => a.value = w),
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
        onBlur: b
      }, null, 40, as), [
        [ho, a.value]
      ])
    ]));
  }
});
function xe(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jt = { exports: {} }, us = Jt.exports, Tl;
function ds() {
  return Tl || (Tl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : us, function(t, i) {
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
  }(Jt)), Jt.exports;
}
var cs = /* @__PURE__ */ ds();
const bn = /* @__PURE__ */ xe(cs);
var Qt = { exports: {} }, fs = Qt.exports, Ll;
function hs() {
  return Ll || (Ll = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : fs, function(t, i) {
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
  }(Qt)), Qt.exports;
}
var ps = /* @__PURE__ */ hs();
const yn = /* @__PURE__ */ xe(ps);
var ei = { exports: {} }, ms = ei.exports, zl;
function gs() {
  return zl || (zl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ms, function(t, i) {
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
  }(ei)), ei.exports;
}
var vs = /* @__PURE__ */ gs();
const _n = /* @__PURE__ */ xe(vs);
var ti = { exports: {} }, bs = ti.exports, Bl;
function ys() {
  return Bl || (Bl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : bs, function(t, i) {
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
  }(ti)), ti.exports;
}
var _s = /* @__PURE__ */ ys();
const Cn = /* @__PURE__ */ xe(_s);
var ii = { exports: {} }, Cs = ii.exports, Nl;
function ws() {
  return Nl || (Nl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Cs, function(t, i) {
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
  }(ii)), ii.exports;
}
var ks = /* @__PURE__ */ ws();
const Ni = /* @__PURE__ */ xe(ks);
var li = { exports: {} }, xs = li.exports, Rl;
function Ss() {
  return Rl || (Rl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : xs, function(t, i) {
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
  }(li)), li.exports;
}
var Es = /* @__PURE__ */ Ss();
const wn = /* @__PURE__ */ xe(Es);
var ni = { exports: {} }, Ts = ni.exports, Al;
function Ls() {
  return Al || (Al = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Ts, function(t, i) {
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
  }(ni)), ni.exports;
}
var zs = /* @__PURE__ */ Ls();
const kn = /* @__PURE__ */ xe(zs);
var oi = { exports: {} }, Bs = oi.exports, Il;
function Ns() {
  return Il || (Il = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Bs, function(t, i) {
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
  }(oi)), oi.exports;
}
var Rs = /* @__PURE__ */ Ns();
const xn = /* @__PURE__ */ xe(Rs);
var si = { exports: {} }, As = si.exports, Ml;
function Is() {
  return Ml || (Ml = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : As, function(t, i) {
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
  }(si)), si.exports;
}
var Ms = /* @__PURE__ */ Is();
const Sn = /* @__PURE__ */ xe(Ms);
var ai = { exports: {} }, Ds = ai.exports, Dl;
function Vs() {
  return Dl || (Dl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG una finestra con un documento");
        return i(o);
      };
    })(typeof window < "u" ? window : Ds, function(t, i) {
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
  }(ai)), ai.exports;
}
var Hs = /* @__PURE__ */ Vs();
const En = /* @__PURE__ */ xe(Hs);
var ri = { exports: {} }, Fs = ri.exports, Vl;
function Os() {
  return Vl || (Vl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Fs, function(t, i) {
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
  }(ri)), ri.exports;
}
var Ps = /* @__PURE__ */ Os();
const Tn = /* @__PURE__ */ xe(Ps);
var ui = { exports: {} }, Us = ui.exports, Hl;
function Ws() {
  return Hl || (Hl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Us, function(t, i) {
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
  }(ui)), ui.exports;
}
var Zs = /* @__PURE__ */ Ws();
const Ln = /* @__PURE__ */ xe(Zs);
var di = { exports: {} }, $s = di.exports, Fl;
function qs() {
  return Fl || (Fl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : $s, function(t, i) {
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
var js = /* @__PURE__ */ qs();
const zn = /* @__PURE__ */ xe(js);
var ci = { exports: {} }, Gs = ci.exports, Ol;
function Ks() {
  return Ol || (Ol = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Gs, function(t, i) {
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
  }(ci)), ci.exports;
}
var Ys = /* @__PURE__ */ Ks();
const Bn = /* @__PURE__ */ xe(Ys);
var fi = { exports: {} }, Xs = fi.exports, Pl;
function Js() {
  return Pl || (Pl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Xs, function(t, i) {
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
  }(fi)), fi.exports;
}
var Qs = /* @__PURE__ */ Js();
const Nn = /* @__PURE__ */ xe(Qs);
var hi = { exports: {} }, ea = hi.exports, Ul;
function ta() {
  return Ul || (Ul = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ea, function(t, i) {
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
  }(hi)), hi.exports;
}
var ia = /* @__PURE__ */ ta();
const Rn = /* @__PURE__ */ xe(ia);
var pi = { exports: {} }, la = pi.exports, Wl;
function na() {
  return Wl || (Wl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : la, function(t, i) {
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
  }(pi)), pi.exports;
}
var oa = /* @__PURE__ */ na();
const An = /* @__PURE__ */ xe(oa);
var mi = { exports: {} }, sa = mi.exports, Zl;
function aa() {
  return Zl || (Zl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : sa, function(t, i) {
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
  }(mi)), mi.exports;
}
var ra = /* @__PURE__ */ aa();
const In = /* @__PURE__ */ xe(ra);
var gi = { exports: {} }, ua = gi.exports, $l;
function da() {
  return $l || ($l = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ua, function(t, i) {
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
  }(gi)), gi.exports;
}
var ca = /* @__PURE__ */ da();
const Mn = /* @__PURE__ */ xe(ca);
var vi = { exports: {} }, fa = vi.exports, ql;
function ha() {
  return ql || (ql = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : fa, function(t, i) {
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
  }(vi)), vi.exports;
}
var pa = /* @__PURE__ */ ha();
const Dn = /* @__PURE__ */ xe(pa);
var bi = { exports: {} }, ma = bi.exports, jl;
function ga() {
  return jl || (jl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ma, function(t, i) {
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
  }(bi)), bi.exports;
}
var va = /* @__PURE__ */ ga();
const Vn = /* @__PURE__ */ xe(va);
var yi = { exports: {} }, ba = yi.exports, Gl;
function ya() {
  return Gl || (Gl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_LANG a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ba, function(t, i) {
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
  }(yi)), yi.exports;
}
var _a = /* @__PURE__ */ ya();
const Hn = /* @__PURE__ */ xe(_a), Ca = { ckb: bn, cs: yn, da: _n, de: Cn, en: Ni, es: wn, fr: kn, he: xn, hu: Sn, it: En, ja: Tn, ko: Ln, lv: zn, nl: Bn, pl: Nn, pt_br: Rn, ro: An, ru: In, se: Mn, ua: Dn, ur: Vn, zh_cn: Hn }, Kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: bn,
  cs: yn,
  da: _n,
  de: Cn,
  default: Ca,
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
}, Symbol.toStringTag, { value: "Module" })), wa = {
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
}, ka = {
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
}, xa = {
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
}, Sa = {
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
    for (let d = 0, f = t.fontSizeUnit, n = l.length, b; d < n; d++)
      b = l[d], a += '<li><button type="button" class="se-btn-list" data-value="' + b + f + '" title="' + b + f + '" aria-label="' + b + f + '" style="font-size:' + b + f + ';">' + b + "</button></li>";
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
    let a = [], d = '<div class="se-list-inner">';
    for (let f = 0, n = l.length, b; f < n; f++)
      b = l[f], b && (typeof b == "string" && (a.push(b), f < n - 1) || (a.length > 0 && (d += '<div class="se-selector-color">' + t(a) + "</div>", a = []), typeof b == "object" && (d += '<div class="se-selector-color">' + t(b) + "</div>")));
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
}, Ea = {
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
}, Ta = {
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
}, La = {
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
}, za = {
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
    let d = l[0], f = l[l.length - 1], n = (a.isListCell(d) || a.isComponent(d)) && !d.previousElementSibling ? d.parentNode.previousElementSibling : d.previousElementSibling, b = (a.isListCell(f) || a.isComponent(f)) && !f.nextElementSibling ? f.parentNode.nextElementSibling : f.nextElementSibling;
    const u = o.collapsed, v = {
      sc: o.startContainer,
      so: o.startContainer === o.endContainer && a.onlyZeroWidthSpace(o.startContainer) && o.startOffset === 0 && o.endOffset === 1 ? o.endOffset : o.startOffset,
      ec: o.endContainer,
      eo: o.endOffset
    };
    let w = null, x = !0;
    for (let E = 0, A = l.length; E < A; E++)
      if (!a.isList(a.getRangeFormatElement(l[E], (function(s) {
        return this.getRangeFormatElement(s) && s !== l[E];
      }).bind(a)))) {
        x = !1;
        break;
      }
    if (x && (!n || d.tagName !== n.tagName || e !== n.tagName.toUpperCase()) && (!b || f.tagName !== b.tagName || e !== b.tagName.toUpperCase())) {
      if (i) {
        for (let p = 0, m = l.length; p < m; p++)
          for (let g = p - 1; g >= 0; g--)
            if (l[g].contains(l[p])) {
              l.splice(p, 1), p--, m--;
              break;
            }
      }
      const E = a.getRangeFormatElement(d), A = E && E.tagName === e;
      let s, r;
      const c = (function(p) {
        return !this.isComponent(p);
      }).bind(a);
      A || (r = a.createElement(e));
      for (let p = 0, m = l.length, g, h; p < m; p++)
        h = a.getRangeFormatElement(l[p], c), !(!h || !a.isList(h)) && (g ? g !== h ? (i && a.isListCell(h.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : w = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0), h = l[p].parentNode, A || (r = a.createElement(e)), g = h, s = { r: g, f: [a.getParentElement(l[p], "LI")] }) : s.f.push(a.getParentElement(l[p], "LI")) : (g = h, s = { r: g, f: [a.getParentElement(l[p], "LI")] }), p === m - 1 && (i && a.isListCell(h.parentNode) ? this.plugins.list._detachNested.call(this, s.f) : w = this.detachRangeFormatElement(s.f[0].parentNode, s.f, r, !1, !0)));
    } else {
      const E = n && n.parentNode, A = b && b.parentNode;
      n = E && !a.isWysiwygDiv(E) && E.nodeName === e ? E : n, b = A && !a.isWysiwygDiv(A) && A.nodeName === e ? A : b;
      const s = n && n.tagName === e, r = b && b.tagName === e;
      let c = s ? n : a.createElement(e), p = null, m = null, g = null;
      const h = (function(y) {
        return !this.isComponent(y) && !this.isList(y);
      }).bind(a);
      for (let y = 0, C = l.length, _, k, M, T, z, B, W, Z, P; y < C; y++) {
        if (k = l[y], k.childNodes.length === 0 && !a._isIgnoreNodeChange(k)) {
          a.removeItem(k);
          continue;
        }
        if (T = l[y + 1], z = k.parentNode, B = T ? T.parentNode : null, M = a.isListCell(k), P = a.isRangeFormatElement(z) ? z : null, W = M && !a.isWysiwygDiv(z) ? z.parentNode : z, Z = M && !a.isWysiwygDiv(z) ? !T || a.isListCell(W) ? z : z.nextSibling : k.nextSibling, _ = a.createElement("LI"), a.copyFormatAttributes(_, k), y === 0 && v.sc === k && (v.sc = _), y === C - 1 && v.ec === k && (v.ec = _), a.isComponent(k)) {
          const D = /^HR$/i.test(k.nodeName);
          D || (_.innerHTML = "<br>"), _.innerHTML += k.outerHTML, D && (_.innerHTML += "<br>");
        } else {
          const D = k.childNodes;
          for (; D[0]; )
            _.appendChild(D[0]);
        }
        c.appendChild(_), (!T || W !== B || a.isRangeFormatElement(Z)) && (p || (p = c), (!s || !T || W !== B) && !(T && a.isList(B) && B === z) && c.parentNode !== W && W.insertBefore(c, Z)), a.removeItem(k), s && m === null && (m = c.children.length - 1), T && (a.getRangeFormatElement(B, h) !== a.getRangeFormatElement(z, h) || a.isList(B) && a.isList(z) && a.getElementDepth(B) !== a.getElementDepth(z)) && (c = a.createElement(e)), P && P.children.length === 0 && a.removeItem(P);
      }
      m && (p = p.children[m]), r && (g = c.children.length - 1, c.innerHTML += b.innerHTML, c.children[g], a.removeItem(b));
    }
    return this.effectNode = null, u && w || v;
  },
  _detachNested: function(e) {
    const t = e[0], i = e[e.length - 1], o = i.nextElementSibling, l = t.parentNode, a = l.parentNode.nextElementSibling, d = l.parentNode.parentNode;
    for (let n = 0, b = e.length; n < b; n++)
      d.insertBefore(e[n], a);
    if (o && l.children.length > 0) {
      const n = l.cloneNode(!1), b = l.childNodes, u = this.util.getPositionIndex(o);
      for (; b[u]; )
        n.appendChild(b[u]);
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
      const b = { s: null, e: null, sl: o, el: o };
      for (let w = 0, x = i, E; w < x; w++)
        E = t[w], E.parentNode !== o && (this.plugins.list._insiedList.call(this, o, d, f, n, b), o = E.parentNode, d = this.util.createElement(o.nodeName)), f = E.previousElementSibling, n = E.nextElementSibling, d.appendChild(E);
      this.plugins.list._insiedList.call(this, o, d, f, n, b);
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
}, Ba = {
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
      for (let u = 0, v = l[0].cells, w = l[0].cells.length; u < w; u++)
        d += v[u].colSpan;
      const f = i._rowIndex = i._trElement.rowIndex;
      i._rowCnt = l.length, i._physical_cellCnt = i._trElement.cells.length, i._logical_cellCnt = d, i._physical_cellIndex = a, i._current_colSpan = i._tdElement.colSpan - 1, i._current_rowSpan - i._trElement.cells[a].rowSpan - 1;
      let n = [], b = [];
      for (let u = 0, v, w; u <= f; u++) {
        v = l[u].cells, w = 0;
        for (let x = 0, E = v.length, A, s, r, c; x < E; x++) {
          if (A = v[x], s = A.colSpan - 1, r = A.rowSpan - 1, c = x + w, b.length > 0)
            for (let p = 0, m; p < b.length; p++)
              m = b[p], !(m.row > u) && (c >= m.index ? (w += m.cs, c += m.cs, m.rs -= 1, m.row = u + 1, m.rs < 1 && (b.splice(p, 1), p--)) : x === E - 1 && (m.rs -= 1, m.row = u + 1, m.rs < 1 && (b.splice(p, 1), p--)));
          if (u === f && x === a) {
            i._logical_cellIndex = c;
            break;
          }
          r > 0 && n.push({
            index: c,
            cs: s + 1,
            rs: r,
            row: -1
          }), w += s;
        }
        b = b.concat(n).sort(function(x, E) {
          return x.index - E.index;
        }), n = [];
      }
      n = null, b = null;
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
          i.setCellInfo.call(this, t === "left" ? f[0] : b || f[0], !0), i.editCell.call(this, t, d);
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
      const d = l.children;
      for (let f = 0; f < d.length; f++)
        d[f].children.length === 0 && (this.util.removeItem(d[f]), f--);
      l.children.length === 0 && this.util.removeItem(l);
    }
  },
  editRow: function(e, t) {
    const i = this.context.table, o = !e, l = e === "up", a = i._rowIndex, d = o || l ? a : a + i._current_rowSpan + 1, f = o ? -1 : 1, n = i._trElements;
    let b = i._logical_cellCnt;
    for (let u = 0, v = a + (o ? -1 : 0), w; u <= v; u++) {
      if (w = n[u].cells, w.length === 0) return;
      for (let x = 0, E = w.length, A, s; x < E; x++)
        A = w[x].rowSpan, s = w[x].colSpan, !(A < 2 && s < 2) && A + u > d && d > u && (w[x].rowSpan = A + f, b -= s);
    }
    if (o) {
      const u = n[a + 1];
      if (u) {
        const v = [];
        let w = n[a].cells, x = 0;
        for (let E = 0, A = w.length, s, r; E < A; E++)
          s = w[E], r = E + x, x += s.colSpan - 1, s.rowSpan > 1 && (s.rowSpan -= 1, v.push({ cell: s.cloneNode(!1), index: r }));
        if (v.length > 0) {
          let E = v.shift();
          w = u.cells, x = 0;
          for (let A = 0, s = w.length, r, c; A < s && (r = w[A], c = A + x, x += r.colSpan - 1, !(c >= E.index && (A--, x--, x += E.cell.colSpan - 1, u.insertBefore(E.cell, r), E = v.shift(), !E))); A++)
            ;
          if (E) {
            u.appendChild(E.cell);
            for (let A = 0, s = v.length; A < s; A++)
              u.appendChild(v[A].cell);
          }
        }
      }
      i._element.deleteRow(d);
    } else {
      const u = i._element.insertRow(d);
      u.innerHTML = this.plugins.table.createCells.call(this, "td", b, !1);
    }
    o ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  editCell: function(e, t) {
    const i = this.context.table, o = this.util, l = !e, a = e === "left", d = i._current_colSpan, f = l || a ? i._logical_cellIndex : i._logical_cellIndex + d + 1, n = i._trElements;
    let b = [], u = [], v = 0;
    const w = [], x = [];
    for (let E = 0, A = i._rowCnt, s, r, c, p, m, g; E < A; E++) {
      s = n[E], r = f, m = !1, c = s.cells, g = 0;
      for (let h = 0, y, C = c.length, _, k, M; h < C && (y = c[h], !!y); h++)
        if (_ = y.rowSpan - 1, k = y.colSpan - 1, l) {
          if (M = h + g, u.length > 0) {
            const T = !c[h + 1];
            for (let z = 0, B; z < u.length; z++)
              B = u[z], !(B.row > E) && (M >= B.index ? (g += B.cs, M = h + g, B.rs -= 1, B.row = E + 1, B.rs < 1 && (u.splice(z, 1), z--)) : T && (B.rs -= 1, B.row = E + 1, B.rs < 1 && (u.splice(z, 1), z--)));
          }
          _ > 0 && b.push({
            rs: _,
            cs: k + 1,
            index: M,
            row: -1
          }), M >= r && M + k <= r + d ? w.push(y) : M <= r + d && M + k >= r ? y.colSpan -= o.getOverlapRangeAtIndex(f, f + d, M, M + k) : _ > 0 && (M < r || M + k > r + d) && x.push({
            cell: y,
            i: E,
            rs: E + _
          }), g += k;
        } else {
          if (h >= r) break;
          if (k > 0) {
            if (v < 1 && k + h >= r) {
              y.colSpan += 1, r = null, v = _ + 1;
              break;
            }
            r -= k;
          }
          if (!m) {
            for (let T = 0, z; T < u.length; T++)
              z = u[T], r -= z.cs, z.rs -= 1, z.rs < 1 && (u.splice(T, 1), T--);
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
        r !== null && c.length > 0 && (p = this.plugins.table.createCells.call(this, c[0].nodeName, 0, !0), p = s.insertBefore(p, c[r]));
      }
    }
    if (l) {
      let E, A;
      for (let s = 0, r = w.length, c; s < r; s++)
        c = w[s].parentNode, o.removeItem(w[s]), c.cells.length === 0 && (E || (E = o.getArrayIndex(n, c)), A = o.getArrayIndex(n, c), o.removeItem(c));
      for (let s = 0, r = x.length, c; s < r; s++)
        c = x[s], c.cell.rowSpan = o.getOverlapRangeAtIndex(E, A, c.i, c.rs);
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
    const t = this.util, i = e === "vertical", o = this.context.table, l = o._tdElement, a = o._trElements, d = o._trElement, f = o._logical_cellIndex, n = o._rowIndex, b = this.plugins.table.createCells.call(this, l.nodeName, 0, !0);
    if (i) {
      const u = l.colSpan;
      if (b.rowSpan = l.rowSpan, u > 1)
        b.colSpan = this._w.Math.floor(u / 2), l.colSpan = u - b.colSpan, d.insertBefore(b, l.nextElementSibling);
      else {
        let v = [], w = [];
        for (let x = 0, E = o._rowCnt, A, s; x < E; x++) {
          A = a[x].cells, s = 0;
          for (let r = 0, c = A.length, p, m, g, h; r < c; r++) {
            if (p = A[r], m = p.colSpan - 1, g = p.rowSpan - 1, h = r + s, w.length > 0)
              for (let y = 0, C; y < w.length; y++)
                C = w[y], !(C.row > x) && (h >= C.index ? (s += C.cs, h += C.cs, C.rs -= 1, C.row = x + 1, C.rs < 1 && (w.splice(y, 1), y--)) : r === c - 1 && (C.rs -= 1, C.row = x + 1, C.rs < 1 && (w.splice(y, 1), y--)));
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
          w = w.concat(v).sort(function(r, c) {
            return r.index - c.index;
          }), v = [];
        }
        d.insertBefore(b, l.nextElementSibling);
      }
    } else {
      const u = l.rowSpan;
      if (b.colSpan = l.colSpan, u > 1) {
        b.rowSpan = this._w.Math.floor(u / 2);
        const v = u - b.rowSpan, w = [], x = t.getArrayIndex(a, d) + v;
        for (let r = 0, c, p; r < x; r++) {
          c = a[r].cells, p = 0;
          for (let m = 0, g = c.length, h, y, C; m < g && (C = m + p, !(C >= f)); m++)
            h = c[m], y = h.rowSpan - 1, y > 0 && y + r >= x && C < f && w.push({
              index: C,
              cs: h.colSpan
            }), p += h.colSpan - 1;
        }
        const E = a[x], A = E.cells;
        let s = w.shift();
        for (let r = 0, c = A.length, p = 0, m, g, h, y; r < c; r++) {
          if (h = r + p, m = A[r], g = m.colSpan - 1, y = h + g + 1, s && y >= s.index && (p += s.cs, y += s.cs, s = w.shift()), y >= f || r === c - 1) {
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
        for (let E = 0, A; E < n; E++) {
          if (A = a[E].cells, A.length === 0) return;
          for (let s = 0, r = A.length; s < r; s++)
            E + A[s].rowSpan - 1 >= n && (A[s].rowSpan += 1);
        }
        const w = o._physical_cellIndex, x = d.cells;
        for (let E = 0, A = x.length; E < A; E++)
          E !== w && (x[E].rowSpan += 1);
        d.parentNode.insertBefore(v, d.nextElementSibling);
      }
    }
    this.focusEdge(l), this.plugins.table.setPositionControllerDiv.call(this, l, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, i = this.util, o = e._ref, l = e._selectedCells, a = l[0];
    let d = null, f = null, n = o.ce - o.cs + 1, b = o.re - o.rs + 1, u = "", v = null;
    for (let w = 1, x = l.length, E, A; w < x; w++) {
      E = l[w], v !== E.parentNode && (v = E.parentNode), A = E.children;
      for (let s = 0, r = A.length; s < r; s++)
        i.isFormatElement(A[s]) && i.onlyZeroWidthSpace(A[s].textContent) && i.removeItem(A[s]);
      u += E.innerHTML, i.removeItem(E), v.cells.length === 0 && (d ? f = v : d = v, b -= 1);
    }
    if (d) {
      const w = t._trElements, x = i.getArrayIndex(w, d), E = i.getArrayIndex(w, f || d), A = [];
      for (let s = 0, r; s <= E; s++) {
        if (r = w[s].cells, r.length === 0) {
          A.push(w[s]);
          continue;
        }
        for (let c = 0, p = r.length, m, g; c < p; c++)
          m = r[c], g = m.rowSpan - 1, g > 0 && s + g >= x && (m.rowSpan -= i.getOverlapRangeAtIndex(x, E, s, s + g));
      }
      for (let s = 0, r = A.length; s < r; s++)
        i.removeItem(A[s]);
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
    const b = i._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let u = 0, v = o.length, w, x; u < v; u++) {
      w = o[u].cells, x = 0;
      for (let E = 0, A = w.length, s, r, c, p; E < A; E++) {
        if (s = w[E], c = s.colSpan - 1, p = s.rowSpan - 1, r = E + x, f.length > 0)
          for (let m = 0, g; m < f.length; m++)
            g = f[m], !(g.row > u) && (r >= g.index ? (x += g.cs, r += g.cs, g.rs -= 1, g.row = u + 1, g.rs < 1 && (f.splice(m, 1), m--)) : E === A - 1 && (g.rs -= 1, g.row = u + 1, g.rs < 1 && (f.splice(m, 1), m--)));
        if (d) {
          if ((s === e || s === t) && (b.cs = b.cs !== null && b.cs < r ? b.cs : r, b.ce = b.ce !== null && b.ce > r + c ? b.ce : r + c, b.rs = b.rs !== null && b.rs < u ? b.rs : u, b.re = b.re !== null && b.re > u + p ? b.re : u + p, b._i += 1), b._i === 2) {
            d = !1, f = [], n = [], u = -1;
            break;
          }
        } else if (l.getOverlapRangeAtIndex(b.cs, b.ce, r, r + c) && l.getOverlapRangeAtIndex(b.rs, b.re, u, u + p)) {
          const m = b.cs < r ? b.cs : r, g = b.ce > r + c ? b.ce : r + c, h = b.rs < u ? b.rs : u, y = b.re > u + p ? b.re : u + p;
          if (b.cs !== m || b.ce !== g || b.rs !== h || b.re !== y) {
            b.cs = m, b.ce = g, b.rs = h, b.re = y, u = -1, f = [], n = [];
            break;
          }
          l.addClass(s, "se-table-selected-cell");
        }
        p > 0 && n.push({
          index: r,
          cs: c + 1,
          rs: p,
          row: -1
        }), x += s.colSpan - 1;
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
}, Na = {
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
    for (let f = 0, n = a.length, b, u, v, w, x, E, A; f < n; f++)
      b = a[f], typeof b == "string" && l.indexOf(b) > -1 ? (u = b.toLowerCase(), v = u === "blockquote" ? "range" : u === "pre" ? "free" : "replace", x = /^h/.test(u) ? u.match(/\d+/)[0] : "", w = i["tag_" + (x ? "h" : u)] + x, A = "", E = "") : (u = b.tag.toLowerCase(), v = b.command, w = b.name || u, A = b.class, E = A ? ' class="' + A + '"' : ""), d += '<li><button type="button" class="se-btn-list" data-command="' + v + '" data-value="' + u + '" data-class="' + A + '" title="' + w + '" aria-label="' + w + '"><' + u + E + ">" + w + "</" + u + "></button></li>";
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
      for (let f = 0, n = l.length, b; f < n; f++)
        if (b = l[f], a === b.getAttribute("data-value") && d === b.getAttribute("data-class")) {
          t = b.title;
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
        const n = d.startOffset, b = d.endOffset, u = this.util;
        let v = f[0], w = f[f.length - 1];
        const x = u.getNodePath(d.startContainer, v, null, null), E = u.getNodePath(d.endContainer, w, null, null), A = this.detachList(f, !1);
        A.sc && (v = A.sc), A.ec && (w = A.ec), this.setRange(u.getNodeFromPath(x, v), n, u.getNodeFromPath(E, w), b);
        const s = this.getSelectedElementsAndComponents(!1);
        if (i === "free") {
          const r = s.length - 1;
          let c = s[r].parentNode, p = l.cloneNode(!1);
          const m = p;
          for (let g = r, h, y, C, _, k, M, T = !0; g >= 0; g--)
            if (h = s[g], h !== (s[g + 1] ? s[g + 1].parentNode : null)) {
              if (M = u.isComponent(h), y = M ? "" : h.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), C = u.getParentElement(h, function(z) {
                return z.parentNode === c;
              }), (c !== h.parentNode || M) && (u.isFormatElement(c) ? (c.parentNode.insertBefore(p, c.nextSibling), c = c.parentNode) : (c.insertBefore(p, C ? C.nextSibling : null), c = h.parentNode), _ = p.nextSibling, _ && p.nodeName === _.nodeName && u.isSameAttributes(p, _) && (p.innerHTML += "<BR>" + _.innerHTML, u.removeItem(_)), p = l.cloneNode(!1), T = !0), k = p.innerHTML, p.innerHTML = (T || !y || !k || /<br>$/i.test(y) ? y : y + "<BR>") + k, g === 0) {
                c.insertBefore(p, h), _ = h.nextSibling, _ && p.nodeName === _.nodeName && u.isSameAttributes(p, _) && (p.innerHTML += "<BR>" + _.innerHTML, u.removeItem(_));
                const z = p.previousSibling;
                z && p.nodeName === z.nodeName && u.isSameAttributes(p, z) && (z.innerHTML += "<BR>" + p.innerHTML, u.removeItem(p));
              }
              M || u.removeItem(h), y && (T = !1);
            }
          this.setRange(m, 0, m, 0);
        } else {
          for (let r = 0, c = s.length, p, m; r < c; r++)
            p = s[r], (p.nodeName.toLowerCase() !== o.toLowerCase() || (p.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== a) && !u.isComponent(p) && (m = l.cloneNode(!1), u.copyFormatAttributes(m, p), m.innerHTML = p.innerHTML, p.parentNode.replaceChild(m, p)), r === 0 && (v = m || p), r === c - 1 && (w = m || p), m = null;
          this.setRange(u.getNodeFromPath(x, v), n, u.getNodeFromPath(E, w), b);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, Ra = {
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
}, Aa = {
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
}, Ia = {
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
    for (let f = 0, n = a.length, b, u, v, w; f < n; f++) {
      if (b = a[f], typeof b == "string") {
        const x = l[b.toLowerCase()];
        if (!x) continue;
        b = x;
      }
      u = b.name, v = b.class ? ' class="' + b.class + '"' : "", w = b._class, d += '<li><button type="button" class="se-btn-list' + (w ? " " + w : "") + '" data-value="' + b.class + '" title="' + u + '" aria-label="' + u + '"><div' + v + ">" + u + "</div></button></li>";
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
}, Ma = {
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
    for (let d = 0, f = l.length, n, b, u, v, w, x, E; d < f; d++) {
      if (n = l[d], v = "", x = "", w = [], typeof n == "string") {
        const A = o[n.toLowerCase()];
        if (!A) continue;
        n = A;
      }
      u = n.name, b = n.tag || "span", E = n._class, n.style && (v += ' style="' + n.style + '"', x += n.style.replace(/:[^;]+(;|$)\s*/g, ","), w.push("style")), n.class && (v += ' class="' + n.class + '"', x += "." + n.class.trim().replace(/\s+/g, ",."), w.push("class")), x = x.replace(/,$/, ""), a += '<li><button type="button" class="se-btn-list' + (E ? " " + E : "") + '" data-command="' + b + '" data-value="' + x + '" title="' + u + '" aria-label="' + u + '"><' + b + v + ">" + u + "</" + b + "></button></li>";
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
      for (let b = 0, u, v; b < f.length; b++) {
        for (u = o, n = !1; u && !e.isFormatElement(u) && !e.isComponent(u); ) {
          if (u.nodeName.toLowerCase() === d.getAttribute("data-command").toLowerCase() && (v = f[b], /^\./.test(v) ? e.hasClass(u, v.replace(/^\./, "")) : u.style[v])) {
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
    for (let n = 0, b = a.length; n < b; n++)
      l.push("." + a[n]);
    const d = this.util.hasClass(t, "active") ? null : o.cloneNode(!1), f = d ? null : [o.nodeName];
    this.nodeChange(d, l, f, !0), this.submenuOff();
  }
};
var _i = { exports: {} }, Da = _i.exports, Yl;
function Va() {
  return Yl || (Yl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Da, function(t, i) {
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
  }(_i)), _i.exports;
}
var Ha = /* @__PURE__ */ Va();
const Pt = /* @__PURE__ */ xe(Ha), Fa = {
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
    e.addModule([Fa]), e.context.anchor = {
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
      for (let f = 0, n = i.length, b; f < n; f++)
        b = i[f], d += '<li><button type="button" class="se-btn-list' + (o.indexOf(b) > -1 ? " se-checked" : "") + '" data-command="' + b + '" title="' + b + '" aria-label="' + b + '"><span class="se-svg">' + l.checked + "</span>" + b + "</button></li>";
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
    for (let f = 0, n = o.length, b; f < n; f++)
      b = o[f], l.test(b.textContent) && (a.push(b), d += '<li class="se-select-item" data-index="' + f + '">' + b.textContent + "</li>");
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
}, Oa = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([Pt, On]);
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
var Ci = { exports: {} }, Pa = Ci.exports, Xl;
function Ua() {
  return Xl || (Xl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Pa, function(t, i) {
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
  }(Ci)), Ci.exports;
}
var Wa = /* @__PURE__ */ Ua();
const ji = /* @__PURE__ */ xe(Wa);
var wi = { exports: {} }, Za = wi.exports, Jl;
function $a() {
  return Jl || (Jl = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : Za, function(t, i) {
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
          let b = d.resizing.resizeHandles = d.resizing.resizeDot.querySelectorAll("span");
          d.resizing.resizeButtonGroup = n.querySelector("._se_resizing_btn_group"), d.resizing.rotationButtons = n.querySelectorAll("._se_resizing_btn_group ._se_rotation"), d.resizing.percentageButtons = n.querySelectorAll("._se_resizing_btn_group ._se_percentage"), d.resizing.alignMenu = n.querySelector(".se-resizing-align-list"), d.resizing.alignMenuList = d.resizing.alignMenu.querySelectorAll("button"), d.resizing.alignButton = n.querySelector("._se_resizing_align_button"), d.resizing.autoSizeButton = n.querySelector("._se_resizing_btn_group ._se_auto_size"), d.resizing.captionButton = n.querySelector("._se_resizing_caption_button"), f.addEventListener("mousedown", function(u) {
            u.preventDefault();
          }), b[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), b[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), n.addEventListener("click", this.onClick_resizeButton.bind(l)), d.element.relative.appendChild(f), d.element.relative.appendChild(n), f = null, n = null, b = null;
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
              const b = this.util.getNumber(a, 0), u = this.util.getNumber(d, 0);
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
          const n = d.resizeContainer, b = d.resizeDiv, u = this.util.getOffset(l, this.context.element.wysiwygFrame), v = d._rotateVertical = /^(90|270)$/.test(Math.abs(l.getAttribute("data-rotate")).toString()), w = v ? l.offsetHeight : l.offsetWidth, x = v ? l.offsetWidth : l.offsetHeight, E = u.top, A = u.left - this.context.element.wysiwygFrame.scrollLeft;
          n.style.top = E + "px", n.style.left = A + "px", n.style.width = w + "px", n.style.height = x + "px", b.style.top = "0px", b.style.left = "0px", b.style.width = w + "px", b.style.height = x + "px";
          let s = l.getAttribute("data-align") || "basic";
          s = s === "none" ? "basic" : s;
          const r = this.util.getParentElement(l, this.util.isComponent), c = this.util.getParentElement(l, "FIGURE"), p = this.plugins.resizing._module_getSizeX.call(this, f, l, c, r) || "auto", m = f._onlyPercentage && a === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, f, l, c, r) || "auto");
          this.util.changeTxt(d.resizeDisplay, this.lang.dialogBox[s] + " (" + p + m + ")"), d.resizeButtonGroup.style.display = f._resizing ? "" : "none";
          const g = f._resizing && !f._resizeDotHide && !f._onlyPercentage ? "flex" : "none", h = d.resizeHandles;
          for (let T = 0, z = h.length; T < z; T++)
            h[T].style.display = g;
          if (f._resizing) {
            const T = d.rotationButtons;
            T[0].style.display = T[1].style.display = f._rotation ? "" : "none";
          }
          if (f._alignHide)
            d.alignButton.style.display = "none";
          else {
            d.alignButton.style.display = "";
            const T = d.alignMenuList;
            this.util.changeElement(d.alignButton.firstElementChild, d.alignIcons[s]);
            for (let z = 0, B = T.length; z < B; z++)
              T[z].getAttribute("data-value") === s ? this.util.addClass(T[z], "on") : this.util.removeClass(T[z], "on");
          }
          const y = d.percentageButtons, C = /%$/.test(l.style.width) && /%$/.test(r.style.width) ? this.util.getNumber(r.style.width, 0) / 100 + "" : "";
          for (let T = 0, z = y.length; T < z; T++)
            y[T].getAttribute("data-value") === C ? this.util.addClass(y[T], "active") : this.util.removeClass(y[T], "active");
          f._captionShow ? (d.captionButton.style.display = "", this.util.getChildElement(l.parentNode, "figcaption") ? (this.util.addClass(d.captionButton, "active"), f._captionChecked = !0) : (this.util.removeClass(d.captionButton, "active"), f._captionChecked = !1)) : d.captionButton.style.display = "none", n.style.display = "block";
          const _ = { left: 0, top: 50 };
          this.options.iframe && (_.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, _.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(d.resizeButton, n, "bottom", _);
          const k = function() {
            this.util.setDisabledButtons.call(this.util, !1, this.resizingDisabledButtons), this.history._resetCachingButton();
          };
          this.controllersOn(n, d.resizeButton, k.bind(this), l, a), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), d._resize_w = w, d._resize_h = x;
          const M = (l.getAttribute("origin-size") || "").split(",");
          return d._origin_w = M[0] || l.naturalWidth, d._origin_h = M[1] || l.naturalHeight, {
            w,
            h: x,
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
          const a = l.target, d = a.getAttribute("data-command") || a.parentNode.getAttribute("data-command");
          if (!d) return;
          const f = a.getAttribute("data-value") || a.parentNode.getAttribute("data-value"), n = this.context.resizing._resize_plugin, b = this.context[n], u = b._element, v = this.plugins[n];
          if (l.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), d === "onalign"))) {
            switch (d) {
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
                const x = u.getAttribute("data-rotate") || "0";
                let E = u.getAttribute("data-rotateX") || "", A = u.getAttribute("data-rotateY") || "";
                f === "h" && !this.context.resizing._rotateVertical || f === "v" && this.context.resizing._rotateVertical ? A = A ? "" : "180" : E = E ? "" : "180", u.setAttribute("data-rotateX", E), u.setAttribute("data-rotateY", A), this.plugins.resizing._setTransForm(u, x, E, A);
                break;
              case "rotate":
                const s = this.context.resizing, r = u.getAttribute("data-rotate") * 1 + f * 1, c = this._w.Math.abs(r) >= 360 ? 0 : r;
                u.setAttribute("data-rotate", c), s._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(c).toString()), this.plugins.resizing.setTransformSize.call(this, u, null, null), this.selectComponent(u, n);
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
        setTransformSize: function(l, a, d) {
          let f = l.getAttribute("data-percentage");
          const n = this.context.resizing._rotateVertical, b = l.getAttribute("data-rotate") * 1;
          let u = "";
          if (f && !n)
            f = f.split(","), f[0] === "auto" && f[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, f[0], f[1]);
          else {
            const v = this.util.getParentElement(l, "FIGURE"), w = a || l.offsetWidth, x = d || l.offsetHeight, E = (n ? x : w) + "px", A = (n ? w : x) + "px";
            if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, w + "px", x + "px", !0), v.style.width = E, v.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : A, n) {
              let s = w / 2 + "px " + w / 2 + "px 0", r = x / 2 + "px " + x / 2 + "px 0";
              u = b === 90 || b === -270 ? r : s;
            }
          }
          l.style.transformOrigin = u, this.plugins.resizing._setTransForm(l, b.toString(), l.getAttribute("data-rotateX") || "", l.getAttribute("data-rotateY") || ""), n ? l.style.maxWidth = "none" : l.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, l);
        },
        _setTransForm: function(l, a, d, f) {
          let n = (l.offsetWidth - l.offsetHeight) * (/-/.test(a) ? 1 : -1), b = "";
          if (/[1-9]/.test(a) && (d || f))
            switch (b = d ? "Y" : "X", a) {
              case "90":
                b = d && f ? "X" : f ? b : "";
                break;
              case "270":
                n *= -1, b = d && f ? "Y" : d ? b : "";
                break;
              case "-90":
                b = d && f ? "Y" : d ? b : "";
                break;
              case "-270":
                n *= -1, b = d && f ? "X" : f ? b : "";
                break;
              default:
                b = "";
            }
          a % 180 === 0 && (l.style.maxWidth = ""), l.style.transform = "rotate(" + a + "deg)" + (d ? " rotateX(" + d + "deg)" : "") + (f ? " rotateY(" + f + "deg)" : "") + (b ? " translate" + b + "(" + n + "px)" : "");
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
          const n = f.clientX, b = f.clientY;
          let u = d._element_w, v = d._element_h;
          const w = d._element_w + (/r/.test(a) ? n - l._resizeClientX : l._resizeClientX - n), x = d._element_h + (/b/.test(a) ? b - l._resizeClientY : l._resizeClientY - b), E = d._element_h / d._element_w * w;
          /t/.test(a) && (l.resizeDiv.style.top = d._element_h - (/h/.test(a) ? x : E) + "px"), /l/.test(a) && (l.resizeDiv.style.left = d._element_w - w + "px"), /r|l/.test(a) && (l.resizeDiv.style.width = w + "px", u = w), /^(t|b)[^h]$/.test(a) ? (l.resizeDiv.style.height = E + "px", v = E) : /^(t|b)h$/.test(a) && (l.resizeDiv.style.height = x + "px", v = x), l._resize_w = u, l._resize_h = v, this.util.changeTxt(l.resizeDisplay, this._w.Math.round(u) + " x " + this._w.Math.round(v)), l._isChange = !0;
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
  }(wi)), wi.exports;
}
var qa = /* @__PURE__ */ $a();
const Pn = /* @__PURE__ */ xe(qa);
var ki = { exports: {} }, ja = ki.exports, Ql;
function Ga() {
  return Ql || (Ql = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : ja, function(t, i) {
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
          const b = this.plugins.fileManager, u = b._xmlHttp = this.util.getXMLHttpRequest();
          if (u.onreadystatechange = b._callBackUpload.bind(this, u, f, n), u.open("post", l, !0), a !== null && typeof a == "object" && this._w.Object.keys(a).length > 0)
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
          let b = [];
          for (let r = 0, c = a.length; r < c; r++)
            b = b.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(a[r] + ':not([data-se-embed="true"])')));
          const u = this.plugins.fileManager, v = this.context[l], w = v._infoList, x = u.setInfo.bind(this);
          if (b.length === w.length)
            if (this._componentsInfoReset) {
              for (let r = 0, c = b.length; r < c; r++)
                x(l, b[r], d, null, n);
              return;
            } else {
              let r = !1;
              for (let c = 0, p = w.length, m; c < p; c++)
                if (m = w[c], b.filter(function(g) {
                  return m.src === g.src && m.index.toString() === g.getAttribute("data-index");
                }).length === 0) {
                  r = !0;
                  break;
                }
              if (!r) return;
            }
          const E = n ? this.context.resizing._resize_plugin : "";
          n && (this.context.resizing._resize_plugin = l);
          const A = [], s = [];
          for (let r = 0, c = w.length; r < c; r++)
            s[r] = w[r].index;
          for (v.__updateTags = b; b.length > 0; ) {
            const r = b.shift();
            !this.util.getParentElement(r, this.util.isMediaComponent) || !u._checkMediaComponent(r) ? (A.push(v._infoIndex), f(r)) : !r.getAttribute("data-index") || s.indexOf(r.getAttribute("data-index") * 1) < 0 ? (A.push(v._infoIndex), r.removeAttribute("data-index"), x(l, r, d, null, n)) : A.push(r.getAttribute("data-index") * 1);
          }
          for (let r = 0, c; r < w.length; r++)
            c = w[r].index, !(A.indexOf(c) > -1) && (w.splice(r, 1), typeof d == "function" && d(null, c, "delete", null, 0, this), r--);
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
        setInfo: function(l, a, d, f, n) {
          const b = n ? this.context.resizing._resize_plugin : "";
          n && (this.context.resizing._resize_plugin = l);
          const u = this.plugins[l], v = this.context[l], w = v._infoList;
          let x = a.getAttribute("data-index"), E = null, A = "";
          if (f || (f = {
            name: a.getAttribute("data-file-name") || (typeof a.src == "string" ? a.src.split("/").pop() : ""),
            size: a.getAttribute("data-file-size") || 0
          }), !x || this._componentsInfoInit)
            A = "create", x = v._infoIndex++, a.setAttribute("data-index", x), a.setAttribute("data-file-name", f.name), a.setAttribute("data-file-size", f.size), E = {
              src: a.src,
              index: x * 1,
              name: f.name,
              size: f.size
            }, w.push(E);
          else {
            A = "update", x *= 1;
            for (let s = 0, r = w.length; s < r; s++)
              if (x === w[s].index) {
                E = w[s];
                break;
              }
            E || (x = v._infoIndex++, E = { index: x }, w.push(E)), E.src = a.src, E.name = a.getAttribute("data-file-name"), E.size = a.getAttribute("data-file-size") * 1;
          }
          if (E.element = a, E.delete = u.destroy.bind(this, a), E.select = (function(s) {
            s.scrollIntoView(!0), this._w.setTimeout(u.select.bind(this, s));
          }).bind(this, a), n) {
            if (!a.getAttribute("origin-size") && a.naturalWidth && a.setAttribute("origin-size", a.naturalWidth + "," + a.naturalHeight), !a.getAttribute("data-origin")) {
              const s = this.util.getParentElement(a, this.util.isMediaComponent), r = this.util.getParentElement(a, "FIGURE"), c = this.plugins.resizing._module_getSizeX.call(this, v, a, r, s), p = this.plugins.resizing._module_getSizeY.call(this, v, a, r, s);
              a.setAttribute("data-origin", c + "," + p), a.setAttribute("data-size", c + "," + p);
            }
            if (!a.style.width) {
              const s = (a.getAttribute("data-size") || a.getAttribute("data-origin") || "").split(",");
              u.onModifyMode.call(this, a, null), u.applySize.call(this, s[0], s[1]);
            }
            this.context.resizing._resize_plugin = b;
          }
          typeof d == "function" && d(a, x, A, E, --v._uploadFileLength < 0 ? 0 : v._uploadFileLength, this);
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
            for (let n = 0, b = f.length; n < b; n++)
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
            for (let n = 0, b = f.length; n < b; n++)
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
  }(ki)), ki.exports;
}
var Ka = /* @__PURE__ */ Ga();
const Gi = /* @__PURE__ */ xe(Ka), Ya = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([Pt, On, ji, Pn, Gi]);
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
      const n = this._w.FileReader, b = [d];
      this.context.image.inputX.value = i, this.context.image.inputY.value = o;
      for (let u = 0, v, w; u < d; u++)
        v = new n(), w = e[u], v.onload = (function(x, E, A, s, r) {
          b[r] = { result: x.result, file: s }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, E, b, A, t, i, o, l, a), this.closeLoading());
        }).bind(this, v, f, this.context.image._element, w, u), v.readAsDataURL(w);
    } catch (n) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + n.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, i, o, l, a, d, f) {
    const n = this.plugins.image.update_src, b = this.plugins.image.create_image;
    for (let u = 0, v = t.length; u < v; u++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[u].file.name), this.context.image._element.setAttribute("data-file-size", t[u].file.size), n.call(this, t[u].result, i, t[u].file)) : b.call(this, t[u].result, o, l, a, d, t[u].file, f);
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
    let b = this.util.createElement("IMG");
    b.src = e, b.alt = d, b.setAttribute("data-rotate", "0"), t = f.onRender_link.call(this, b, t ? t.cloneNode(!1) : null), n._resizing && b.setAttribute("data-proportion", n._proportionChecked);
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
    let l = o._element, a = o._cover, d = o._container, f = !1;
    a === null && (f = !0, l = o._element.cloneNode(!0), a = this.plugins.component.set_cover.call(this, l)), d === null ? (a = a.cloneNode(!0), l = a.querySelector("img"), f = !0, d = this.plugins.component.set_container.call(this, a, "se-image-container")) : f && (d.innerHTML = "", d.appendChild(a), o._cover = a, o._element = l, f = !1);
    let n;
    const b = this.util.isNumber(o.inputX.value) ? o.inputX.value + o.sizeUnit : o.inputX.value, u = this.util.isNumber(o.inputY.value) ? o.inputY.value + o.sizeUnit : o.inputY.value;
    /%$/.test(l.style.width) ? n = b !== d.style.width || u !== d.style.height : n = b !== l.style.width || u !== l.style.height, l.alt = o._altText;
    let v = !1;
    o._captionChecked ? o._caption || (o._caption = this.plugins.component.create_caption.call(this), a.appendChild(o._caption), v = !0) : o._caption && (this.util.removeItem(o._caption), o._caption = null, v = !0);
    let w = null;
    const x = this.plugins.anchor.createAnchor.call(this, o.anchorCtx, !0);
    if (x)
      o._linkElement !== x || f && !d.contains(x) ? (o._linkElement = x.cloneNode(!1), a.insertBefore(this.plugins.image.onRender_link.call(this, l, o._linkElement), o._caption), w = o._element) : o._linkElement.setAttribute("data-image-link", "image");
    else if (o._linkElement !== null) {
      const A = l;
      if (A.setAttribute("data-image-link", ""), a.contains(o._linkElement)) {
        const s = A.cloneNode(!0);
        a.removeChild(o._linkElement), a.insertBefore(s, o._caption), o._element = l = s;
      }
    }
    let E = null;
    if (f) {
      if (E = this.util.isRangeFormatElement(o._element.parentNode) || this.util.isWysiwygDiv(o._element.parentNode) ? o._element : this.util.isAnchor(o._element.parentNode) ? o._element.parentNode : this.util.getFormatElement(o._element) || o._element, this.util.getParentElement(o._element, this.util.isNotCheckingNode))
        E = w ? x : o._element, E.parentNode.replaceChild(d, E);
      else if (this.util.isListCell(E)) {
        const A = this.util.getParentElement(o._element, function(s) {
          return s.parentNode === E;
        });
        E.insertBefore(d, A), this.util.removeItem(o._element), this.util.removeEmptyNode(A, null, !0);
      } else if (this.util.isFormatElement(E)) {
        const A = this.util.getParentElement(o._element, function(s) {
          return s.parentNode === E;
        });
        E = this.util.splitElement(E, A), E.parentNode.insertBefore(d, E), this.util.removeItem(o._element), this.util.removeEmptyNode(E, null, !0), E.children.length === 0 && (E.innerHTML = this.util.htmlRemoveWhiteSpace(E.innerHTML));
      } else if (this.util.isFormatElement(E.parentNode)) {
        const A = E.parentNode;
        A.parentNode.insertBefore(d, E.previousSibling ? A.nextElementSibling : A), o.__updateTags.map(function(s) {
          return E.contains(s);
        }).length === 0 && this.util.removeItem(E);
      } else
        E = this.util.isFigures(E.parentNode) ? E.parentNode : E, E.parentNode.replaceChild(d, E);
      l = d.querySelector("img"), o._element = l, o._cover = a, o._container = d;
    }
    w && (f ? (this.util.removeItem(w), this.util.getListChildren(x, function(A) {
      return /IMG/i.test(A.tagName);
    }).length === 0 && this.util.removeItem(x)) : this.util.removeItem(x)), (v || !o._onlyPercentage && n) && !e && (/\d+/.test(l.style.height) || this.context.resizing._rotateVertical && o._captionChecked) && (/%$/.test(o.inputX.value) || /%$/.test(o.inputY.value) ? this.plugins.resizing.resetTransform.call(this, l) : this.plugins.resizing.setTransformSize.call(this, l, this.util.getNumber(o.inputX.value, 0), this.util.getNumber(o.inputY.value, 0))), o._resizing && (l.setAttribute("data-proportion", o._proportionChecked), n && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, l, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", l, this.functions.onImageUpload, null, !0), t && this.selectComponent(l, "image"), i || this.history.push(!1);
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
}, Xa = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([Pt, ji, Pn, Gi]);
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
      const a = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], d = t.videoRatio, f = t.videoSizeOnlyPercentage, n = f ? ' style="display: none !important;"' : "", b = t.videoHeightShow ? "" : ' style="display: none !important;"', u = t.videoRatioShow ? "" : ' style="display: none !important;"', v = !f && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      l += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + b + ">" + i.dialogBox.height + '</label><label class="size-h"' + u + ">(" + i.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + v + ">" + (f ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (f ? ' type="number" min="1"' : 'type="text"') + (f ? ' max="100"' : "") + b + '/><select class="se-input-select se-video-ratio" title="' + i.dialogBox.ratio + '" aria-label="' + i.dialogBox.ratio + '"' + u + ">", b || (l += '<option value=""> - </option>');
      for (let w = 0, x = a.length; w < x; w++)
        l += '<option value="' + a[w].value + '"' + (d.toString() === a[w].value.toString() ? " selected" : "") + ">" + a[w].name + "</option>";
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
      for (let n = 0, b = f.length; n < b; n++)
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
    let n = null, b = null, u = !1;
    if (d) {
      if (e = f._element, e.src !== t) {
        u = !0;
        const A = /youtu\.?be/.test(t), s = /vimeo\.com/.test(t);
        if ((A || s) && !/^iframe$/i.test(e.nodeName)) {
          const r = this.plugins.video.createIframeTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), f._element = e = r;
        } else if (!A && !s && !/^video$/i.test(e.nodeName)) {
          const r = this.plugins.video.createVideoTag.call(this);
          r.src = t, e.parentNode.replaceChild(r, e), f._element = e = r;
        } else
          e.src = t;
      }
      b = f._container, n = this.util.getParentElement(e, "FIGURE");
    } else
      u = !0, e.src = t, f._element = e, n = this.plugins.component.set_cover.call(this, e), b = this.plugins.component.set_container.call(this, n, "se-video-container");
    f._cover = n, f._container = b;
    const v = this.plugins.resizing._module_getSizeX.call(this, f) !== (i || f._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, f) !== (o || f._videoRatio), w = !d || v;
    f._resizing && (this.context.video._proportionChecked = f.proportion.checked, e.setAttribute("data-proportion", f._proportionChecked));
    let x = !1;
    w && (x = this.plugins.video.applySize.call(this)), x && l === "center" || this.plugins.video.setAlign.call(this, null, e, n, b);
    let E = !0;
    if (d)
      f._resizing && this.context.resizing._rotateVertical && w && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (E = this.insertComponent(b, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const A = this.appendFormatTag(b, null);
      A && this.setRange(A, 0, A, 0);
    }
    E && (u && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, a, !0), d && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
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
}, Ja = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([Pt, ji, Gi]);
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
      for (let n = 0, b = f.length; n < b; n++)
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
}, en = "https://katex.org/docs/supported.html", Qa = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([Pt]);
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
var xi = { exports: {} }, er = xi.exports, tn;
function tr() {
  return tn || (tn = 1, function(e) {
    (function(t, i) {
      e.exports = t.document ? i(t, !0) : function(o) {
        if (!o.document)
          throw new Error("SUNEDITOR_MODULES a window with a document");
        return i(o);
      };
    })(typeof window < "u" ? window : er, function(t, i) {
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
          this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = (function(b) {
            /27/.test(b.keyCode) && this.plugins.fileBrowser.close.call(this);
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
          const d = this.context.fileBrowser, f = this.context[d.contextPlugin], n = [], b = l.length, u = f.columnSize || d.columnSize, v = u <= 1 ? 1 : Math.round(b / u) || 1, w = f.itemTemplateHandler;
          let x = "", E = '<div class="se-file-item-column">', A = 1;
          for (let s = 0, r, c; s < b; s++)
            if (r = l[s], c = r.tag ? typeof r.tag == "string" ? r.tag.split(",") : r.tag : [], c = r.tag = c.map(function(p) {
              return p.trim();
            }), E += w(r), (s + 1) % v === 0 && A < u && s + 1 < b && (A++, E += '</div><div class="se-file-item-column">'), a && c.length > 0)
              for (let p = 0, m = c.length, g; p < m; p++)
                g = c[p], g && n.indexOf(g) === -1 && (n.push(g), x += '<a title="' + g + '" aria-label="' + g + '">' + g + "</a>");
          E += "</div>", d.list.innerHTML = E, a && (d.items = l, d.tagArea.innerHTML = x, d.tagElements = d.tagArea.querySelectorAll("A"));
        },
        onClickTag: function(l) {
          const a = l.target;
          if (!this.util.isAnchor(a)) return;
          const d = a.textContent, f = this.plugins.fileBrowser, n = this.context.fileBrowser, b = n.tagArea.querySelector('a[title="' + d + '"]'), u = n.selectedTags, v = u.indexOf(d);
          v > -1 ? (u.splice(v, 1), this.util.removeClass(b, "on")) : (u.push(d), this.util.addClass(b, "on")), f._drawListItem.call(
            this,
            u.length === 0 ? n.items : n.items.filter(function(w) {
              return w.tag.some(function(x) {
                return u.indexOf(x) > -1;
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
  }(xi)), xi.exports;
}
var ir = /* @__PURE__ */ tr();
const lr = /* @__PURE__ */ xe(ir), nr = {
  name: "imageGallery",
  /**
   * @description Constructor
   * @param {Object} core Core object 
   */
  add: function(e) {
    e.addModule([lr]);
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
}, or = { blockquote: wa, align: ka, font: xa, fontSize: Sa, fontColor: Ea, hiliteColor: Ta, horizontalRule: La, list: za, table: Ba, formatBlock: Na, lineHeight: Ra, template: Aa, paragraphStyle: Ia, textStyle: Ma, link: Oa, image: Ya, video: Xa, audio: Ja, math: Qa, imageGallery: nr }, sr = {
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
    const o = [], l = t === "js" ? "script" : "link", a = t === "js" ? "src" : "href";
    let d = "(?:";
    for (let b = 0, u = e.length; b < u; b++)
      d += e[b] + (b < u - 1 ? "|" : ")");
    const f = new this._w.RegExp("(^|.*[\\/])" + d + "(\\.[^\\/]+)?." + t + "(?:\\?.*|;.*)?$", "i"), n = new this._w.RegExp(".+\\." + t + "(?:\\?.*|;.*)?$", "i");
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
          let b = a.nextSibling;
          for (; b && b.nodeType === 3; )
            f = b.textContent.replace(this.zeroWidthRegExp, ""), i.e += f.length, a.textContent += f, d = b, b = b.nextSibling, this.removeItem(d);
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
    const a = e.classList, d = t.classList, f = this._w.RegExp;
    let n = 0;
    for (let b = 0, u = a.length; b < u; b++)
      f("(s|^)" + a[b] + "(s|$)").test(d.value) && n++;
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
      if (!ae.isWysiwygDiv(a)) {
        const d = a.parentNode;
        d && t(a) && (o = {
          sc: a.previousElementSibling,
          ec: a.nextElementSibling
        }, ae.removeItem(a), l(d));
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
      const w = e.childNodes;
      let x = this.getPositionIndex(t);
      const E = e.cloneNode(!1), A = e.cloneNode(!1);
      for (let s = 0, r = w.length; s < r; s++) {
        if (s < x) E.appendChild(w[s]);
        else if (s > x) A.appendChild(w[s]);
        else continue;
        s--, r--, x--;
      }
      return E.childNodes.length > 0 && e.parentNode.insertBefore(E, e), A.childNodes.length > 0 && e.parentNode.insertBefore(A, e.nextElementSibling), e;
    }
    const o = e.parentNode;
    let l = 0, a = 1, d = !0, f, n, b;
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
      e.previousSibling ? e = e.previousSibling : this.getElementDepth(e) === i && (d = !1);
    }
    e.nodeType === 1 && (a = 0);
    let u = e;
    for (; this.getElementDepth(u) > i; )
      for (l = this.getPositionIndex(u) + a, u = u.parentNode, b = f, f = u.cloneNode(!1), n = u.childNodes, b && (this.isListCell(f) && this.isList(b) && b.firstElementChild ? (f.innerHTML = b.firstElementChild.innerHTML, ae.removeItem(b.firstElementChild), b.children.length > 0 && f.appendChild(b)) : f.appendChild(b)); n[l]; )
        f.appendChild(n[l]);
    u.childNodes.length <= 1 && (!u.firstChild || u.firstChild.textContent.length === 0) && (u.innerHTML = "<br>");
    const v = u.parentNode;
    return d && (u = u.nextSibling), f ? (this.mergeSameTags(f, null, !1), this.mergeNestedTags(f, (function(w) {
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
    return l && (a = this._w.Array.apply(null, new this._w.Array(l)).map(this._w.Number.prototype.valueOf, 0)), function d(f, n, b) {
      const u = f.childNodes;
      for (let v = 0, w = u.length, x, E; v < w && (x = u[v], E = u[v + 1], !!x); v++)
        if (!(o.isBreak(x) || o.isMedia(x) || o.isInputElement(x))) {
          if (i && o._isIgnoreNodeChange(x) || !i && (o.isTable(x) || o.isListCell(x) || o.isFormatElement(x) && !o.isFreeFormatElement(x))) {
            (o.isTable(x) || o.isListCell(x)) && d(x, n + 1, v);
            continue;
          }
          if (w === 1 && f.nodeName === x.nodeName && f.parentNode) {
            if (l) {
              let A, s, r, c, p;
              for (let m = 0; m < l; m++)
                if (A = t[m], A && A[n] === v) {
                  for (s = x, r = f, c = n, p = !0; c >= 0; ) {
                    if (o.getArrayIndex(r.childNodes, s) !== A[c]) {
                      p = !1;
                      break;
                    }
                    s = x.parentNode, r = s.parentNode, c--;
                  }
                  p && (A.splice(n, 1), A[n] = v);
                }
            }
            o.copyTagAttributes(x, f), f.parentNode.insertBefore(x, f), o.removeItem(f);
          }
          if (!E) {
            x.nodeType === 1 && d(x, n + 1, v);
            break;
          }
          if (x.nodeName === E.nodeName && o.isSameAttributes(x, E) && x.href === E.href) {
            const A = x.childNodes;
            let s = 0;
            for (let m = 0, g = A.length; m < g; m++)
              A[m].textContent.length > 0 && s++;
            const r = x.lastChild, c = E.firstChild;
            let p = 0;
            if (r && c) {
              const m = r.nodeType === 3 && c.nodeType === 3;
              p = r.textContent.length;
              let g = r.previousSibling;
              for (; g && g.nodeType === 3; )
                p += g.textContent.length, g = g.previousSibling;
              if (s > 0 && r.nodeType === 3 && c.nodeType === 3 && (r.textContent.length > 0 || c.textContent.length > 0) && s--, l) {
                let h = null;
                for (let y = 0; y < l; y++)
                  if (h = t[y], h && h[n] > v) {
                    if (n > 0 && h[n - 1] !== b) continue;
                    h[n] -= 1, h[n + 1] >= 0 && h[n] === v && (h[n + 1] += s, m && r && r.nodeType === 3 && c && c.nodeType === 3 && (a[y] += p));
                  }
              }
            }
            if (x.nodeType === 3) {
              if (p = x.textContent.length, x.textContent += E.textContent, l) {
                let m = null;
                for (let g = 0; g < l; g++)
                  if (m = t[g], m && m[n] > v) {
                    if (n > 0 && m[n - 1] !== b) continue;
                    m[n] -= 1, m[n + 1] >= 0 && m[n] === v && (m[n + 1] += s, a[g] += p);
                  }
              }
            } else
              x.innerHTML += E.innerHTML;
            o.removeItem(E), v--;
          } else x.nodeType === 1 && d(x, n + 1, v);
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
        for (let f = 0, n = d.length, b = 0; f < n; f++)
          !d[f + b] || o.isComponent(d[f + b]) || (b += l(d[f + b]));
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
    const a = [], d = [], f = [], n = [], b = this.getListChildNodes(e, (function(v) {
      if (v.nodeType !== 1)
        return this.isList(v.parentElement) && a.push(v), !1;
      if (i.test(v.nodeName) || !t.test(v.nodeName) && v.childNodes.length === 0 && this.isNotCheckingNode(v))
        return a.push(v), !1;
      const w = !this.getParentElement(v, this.isNotCheckingNode);
      if (!this.isTable(v) && !this.isListCell(v) && !this.isAnchor(v) && (this.isFormatElement(v) || this.isRangeFormatElement(v) || this.isTextStyleElement(v)) && v.childNodes.length === 0 && w)
        return d.push(v), !1;
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
    for (let v = 0, w = b.length, x, E; v < w; v++)
      if (x = b[v], E = x.parentNode, !(!E || !E.parentNode))
        if (this.getParentElement(x, this.isListCell)) {
          const A = x.childNodes;
          for (let s = A.length - 1; w >= 0; s--)
            E.insertBefore(x, A[s]);
          u.push(x);
        } else
          E.parentNode.insertBefore(x, E), u.push(E);
    for (let v = 0, w = u.length, x; v < w; v++)
      x = u[v], this.onlyZeroWidthSpace(x.textContent.trim()) && this.removeItem(x);
    for (let v = 0, w = d.length; v < w; v++)
      this.removeItem(d[v]);
    for (let v = 0, w = f.length, x, E, A, s; v < w; v++)
      if (x = f[v], s = x.parentNode, !!s)
        if (E = this.createElement("LI"), this.isFormatElement(x)) {
          for (A = x.childNodes; A[0]; )
            E.appendChild(A[0]);
          s.insertBefore(E, x), this.removeItem(x);
        } else
          x = x.nextSibling, E.appendChild(f[v]), s.insertBefore(E, x);
    for (let v = 0, w = n.length, x, E; v < w; v++)
      x = n[v], E = this.createElement("DIV"), E.innerHTML = x.textContent.trim().length === 0 && x.children.length === 0 ? "<br>" : x.innerHTML, x.innerHTML = E.outerHTML;
  },
  _setDefaultOptionStyle: function(e, t) {
    let i = "";
    e.height && (i += "height:" + e.height + ";"), e.minHeight && (i += "min-height:" + e.minHeight + ";"), e.maxHeight && (i += "max-height:" + e.maxHeight + ";"), e.position && (i += "position:" + e.position + ";"), e.width && (i += "width:" + e.width + ";"), e.minWidth && (i += "min-width:" + e.minWidth + ";"), e.maxWidth && (i += "max-width:" + e.maxWidth + ";");
    let o = "", l = "", a = "";
    t = i + t;
    const d = t.split(";");
    for (let f = 0, n = d.length, b; f < n; f++)
      if (b = d[f].trim(), !!b) {
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
    for (let l = 0, a = t.length, d; l < a; l++) {
      if (d = [], /(^https?:\/\/)|(^data:text\/css,)/.test(t[l]))
        d.push(t[l]);
      else {
        const f = new i("(^|.*[\\/])" + t[l] + "(\\..+)?\\.css(?:\\?.*|;.*)?$", "i");
        for (let n = document.getElementsByTagName("link"), b = 0, u = n.length, v; b < u; b++)
          v = n[b].href.match(f), v && d.push(v[0]);
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
}, Wi = {
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
    const b = i.createElement("DIV");
    b.className = "se-wrapper";
    const u = this._initElements(t, o, a.element, f), v = u.bottomBar, w = u.wysiwygFrame, x = u.placeholder;
    let E = u.codeView;
    const A = v.resizingBar, s = v.navigation, r = v.charWrapper, c = v.charCounter, p = i.createElement("DIV");
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
    _ && (_.appendChild(a.element), _.appendChild(d));
    const k = t.resizingBarContainer;
    return A && k && k.appendChild(A), b.appendChild(E), x && b.appendChild(x), _ || (l.appendChild(a.element), l.appendChild(d)), l.appendChild(n), l.appendChild(b), l.appendChild(y), l.appendChild(p), l.appendChild(m), l.appendChild(g), l.appendChild(h), l.appendChild(C), A && !k && l.appendChild(A), o.appendChild(l), E = this._checkCodeMirror(t, E), {
      constructed: {
        _top: o,
        _relative: l,
        _toolBar: a.element,
        _toolbarShadow: d,
        _menuTray: a._menuTray,
        _editorArea: b,
        _wysiwygArea: w,
        _codeArea: E,
        _placeholder: x,
        _resizingBar: A,
        _navigation: s,
        _charWrapper: r,
        _charCounter: c,
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
        for (let d in a)
          ae.hasOwn(a, d) && (l[d] = a[d]);
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
        ae.hasOwn(o, l) && (i[l] = o[l]);
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
    const b = document.createElement("DIV");
    b.className = "se-arrow", f && (n.element.style.visibility = "hidden", d ? (e.toolbarContainer.appendChild(n.element), o.toolbar.parentElement.removeChild(o.toolbar)) : o.toolbar.parentElement.replaceChild(n.element, o.toolbar), o.toolbar = n.element, o._menuTray = n._menuTray, o._arrow = b);
    const u = this._initElements(e, o.topArea, f ? n.element : o.toolbar, b), v = u.bottomBar, w = u.wysiwygFrame, x = u.placeholder;
    let E = u.codeView;
    return o.resizingBar && ae.removeItem(o.resizingBar), v.resizingBar && (e.resizingBarContainer && e.resizingBarContainer !== i.resizingBarContainer ? e.resizingBarContainer.appendChild(v.resizingBar) : l.appendChild(v.resizingBar)), a.innerHTML = "", a.appendChild(E), x && a.appendChild(x), E = this._checkCodeMirror(e, E), o.resizingBar = v.resizingBar, o.navigation = v.navigation, o.charWrapper = v.charWrapper, o.charCounter = v.charCounter, o.wysiwygFrame = w, o.code = E, o.placeholder = x, e.rtl ? ae.addClass(o.topArea, "se-rtl") : ae.removeClass(o.topArea, "se-rtl"), {
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
    let d = null, f = null, n = null, b = null;
    if (e.resizingBar && (d = document.createElement("DIV"), d.className = "se-resizing-bar sun-editor-common", f = document.createElement("DIV"), f.className = "se-navigation sun-editor-common", d.appendChild(f), e.charCounter)) {
      if (n = document.createElement("DIV"), n.className = "se-char-counter-wrapper", e.charCounterLabel) {
        const v = document.createElement("SPAN");
        v.className = "se-char-label", v.textContent = e.charCounterLabel, n.appendChild(v);
      }
      if (b = document.createElement("SPAN"), b.className = "se-char-counter", b.textContent = "0", n.appendChild(b), e.maxCharCount > 0) {
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
      const a = t.plugins, d = a.length ? a : Object.keys(a).map(function(f) {
        return a[f];
      });
      for (let f = 0, n = d.length, b; f < n; f++)
        b = d[f].default || d[f], i[b.name] = b;
    }
    t.plugins = i, t.strictMode = t.strictMode !== !1, t.strictHTMLValidation = t.strictHTMLValidation !== !1, t.lang = t.lang || Ni, t.value = typeof t.value == "string" ? t.value : null, t.allowedClassNames = new ae._w.RegExp((t.allowedClassNames && typeof t.allowedClassNames == "string" ? t.allowedClassNames + "|" : "") + "^__se__|se-|katex"), t.historyStackDelayTime = typeof t.historyStackDelayTime == "number" ? t.historyStackDelayTime : 400, t.frameAttrbutes = t.frameAttrbutes || {}, t.defaultTag = typeof t.defaultTag == "string" && t.defaultTag.length > 0 ? t.defaultTag : "p";
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
    t.tagsBlacklist = t.tagsBlacklist || "", t._defaultTagsWhitelist = (typeof t._defaultTagsWhitelist == "string" ? t._defaultTagsWhitelist : l) + (t.__allowedScriptTag ? "|script" : ""), t._editorTagsWhitelist = t.addTagsWhitelist === "*" ? "*" : this._setWhitelist(t._defaultTagsWhitelist + (typeof t.addTagsWhitelist == "string" && t.addTagsWhitelist.length > 0 ? "|" + t.addTagsWhitelist : ""), t.tagsBlacklist), t.pasteTagsBlacklist = t.tagsBlacklist + (t.tagsBlacklist && t.pasteTagsBlacklist ? "|" + t.pasteTagsBlacklist : t.pasteTagsBlacklist || ""), t.pasteTagsWhitelist = t.pasteTagsWhitelist === "*" ? "*" : this._setWhitelist(typeof t.pasteTagsWhitelist == "string" ? t.pasteTagsWhitelist : t._editorTagsWhitelist, t.pasteTagsBlacklist), t.attributesWhitelist = !t.attributesWhitelist || typeof t.attributesWhitelist != "object" ? null : t.attributesWhitelist, t.attributesBlacklist = !t.attributesBlacklist || typeof t.attributesBlacklist != "object" ? null : t.attributesBlacklist, t.mode = t.mode || "classic", t.rtl = !!t.rtl, t.lineAttrReset = ["id"].concat(t.lineAttrReset && typeof t.lineAttrReset == "string" ? t.lineAttrReset.toLowerCase().split("|") : []), t._editableClass = "sun-editor-editable" + (t.rtl ? " se-rtl" : ""), t._printClass = typeof t._printClass == "string" ? t._printClass : null, t.toolbarWidth = t.toolbarWidth ? ae.isNumber(t.toolbarWidth) ? t.toolbarWidth + "px" : t.toolbarWidth : "auto", t.toolbarContainer = typeof t.toolbarContainer == "string" ? document.querySelector(t.toolbarContainer) : t.toolbarContainer, t.stickyToolbar = /balloon/i.test(t.mode) || t.toolbarContainer ? -1 : t.stickyToolbar === void 0 ? 0 : /^\d+/.test(t.stickyToolbar) ? ae.getNumber(t.stickyToolbar, 0) : -1, t.hideToolbar = !!t.hideToolbar, t.fullScreenOffset = t.fullScreenOffset === void 0 ? 0 : /^\d+/.test(t.fullScreenOffset) ? ae.getNumber(t.fullScreenOffset, 0) : 0, t.fullPage = !!t.fullPage, t.iframe = t.fullPage || !!t.iframe, t.iframeAttributes = t.iframeAttributes || {}, t.iframeCSSFileName = t.iframe ? typeof t.iframeCSSFileName == "string" ? [t.iframeCSSFileName] : t.iframeCSSFileName || ["suneditor"] : null, t.previewTemplate = typeof t.previewTemplate == "string" ? t.previewTemplate : null, t.printTemplate = typeof t.printTemplate == "string" ? t.printTemplate : null, t.codeMirror = t.codeMirror ? t.codeMirror.src ? t.codeMirror : { src: t.codeMirror } : null, t.katex = t.katex ? t.katex.src ? t.katex : { src: t.katex } : null, t.mathFontSize = t.mathFontSize ? t.mathFontSize : [
      { text: "1", value: "1em" },
      { text: "1.5", value: "1.5em" },
      { text: "2", value: "2em" },
      { text: "2.5", value: "2.5em" }
    ], t.position = typeof t.position == "string" ? t.position : null, t.display = t.display || (e.style.display === "none" || !e.style.display ? "block" : e.style.display), t.popupDisplay = t.popupDisplay || "full", t.resizingBar = t.resizingBar === void 0 ? !/inline|balloon/i.test(t.mode) : t.resizingBar, t.showPathLabel = t.resizingBar ? typeof t.showPathLabel == "boolean" ? t.showPathLabel : !0 : !1, t.resizeEnable = t.resizeEnable === void 0 ? !0 : !!t.resizeEnable, t.resizingBarContainer = typeof t.resizingBarContainer == "string" ? document.querySelector(t.resizingBarContainer) : t.resizingBarContainer, t.charCounter = t.maxCharCount > 0 ? !0 : typeof t.charCounter == "boolean" ? t.charCounter : !1, t.charCounterType = typeof t.charCounterType == "string" ? t.charCounterType : "char", t.charCounterLabel = typeof t.charCounterLabel == "string" ? t.charCounterLabel.trim() : null, t.maxCharCount = ae.isNumber(t.maxCharCount) && t.maxCharCount > -1 ? t.maxCharCount * 1 : null, t.width = t.width ? ae.isNumber(t.width) ? t.width + "px" : t.width : e.clientWidth ? e.clientWidth + "px" : "100%", t.minWidth = (ae.isNumber(t.minWidth) ? t.minWidth + "px" : t.minWidth) || "", t.maxWidth = (ae.isNumber(t.maxWidth) ? t.maxWidth + "px" : t.maxWidth) || "", t.height = t.height ? ae.isNumber(t.height) ? t.height + "px" : t.height : e.clientHeight ? e.clientHeight + "px" : "auto", t.minHeight = (ae.isNumber(t.minHeight) ? t.minHeight + "px" : t.minHeight) || "", t.maxHeight = (ae.isNumber(t.maxHeight) ? t.maxHeight + "px" : t.maxHeight) || "", t.className = typeof t.className == "string" && t.className.length > 0 ? " " + t.className : "", t.defaultStyle = typeof t.defaultStyle == "string" ? t.defaultStyle : "", t.font = t.font ? t.font : ["Arial", "Comic Sans MS", "Courier New", "Impact", "Georgia", "tahoma", "Trebuchet MS", "Verdana"], t.fontSize = t.fontSize ? t.fontSize : null, t.formats = t.formats ? t.formats : null, t.colorList = t.colorList ? t.colorList : null, t.lineHeights = t.lineHeights ? t.lineHeights : null, t.paragraphStyles = t.paragraphStyles ? t.paragraphStyles : null, t.textStyles = t.textStyles ? t.textStyles : null, t.fontSizeUnit = typeof t.fontSizeUnit == "string" && t.fontSizeUnit.trim().toLowerCase() || "px", t.alignItems = typeof t.alignItems == "object" ? t.alignItems : t.rtl ? ["right", "center", "left", "justify"] : ["left", "center", "right", "justify"], t.imageResizing = t.imageResizing === void 0 ? !0 : t.imageResizing, t.imageHeightShow = t.imageHeightShow === void 0 ? !0 : !!t.imageHeightShow, t.imageAlignShow = t.imageAlignShow === void 0 ? !0 : !!t.imageAlignShow, t.imageWidth = t.imageWidth ? ae.isNumber(t.imageWidth) ? t.imageWidth + "px" : t.imageWidth : "auto", t.imageHeight = t.imageHeight ? ae.isNumber(t.imageHeight) ? t.imageHeight + "px" : t.imageHeight : "auto", t.imageSizeOnlyPercentage = !!t.imageSizeOnlyPercentage, t._imageSizeUnit = t.imageSizeOnlyPercentage ? "%" : "px", t.imageRotation = t.imageRotation !== void 0 ? t.imageRotation : !(t.imageSizeOnlyPercentage || !t.imageHeightShow), t.imageFileInput = t.imageFileInput === void 0 ? !0 : t.imageFileInput, t.imageUrlInput = t.imageUrlInput === void 0 || !t.imageFileInput ? !0 : t.imageUrlInput, t.imageUploadHeader = t.imageUploadHeader || null, t.imageUploadUrl = typeof t.imageUploadUrl == "string" ? t.imageUploadUrl : null, t.imageUploadSizeLimit = /\d+/.test(t.imageUploadSizeLimit) ? ae.getNumber(t.imageUploadSizeLimit, 0) : null, t.imageMultipleFile = !!t.imageMultipleFile, t.imageAccept = typeof t.imageAccept != "string" || t.imageAccept.trim() === "*" ? "image/*" : t.imageAccept.trim() || "image/*", t.imageGalleryData = t.imageGalleryData || null, t.imageGalleryUrl = typeof t.imageGalleryUrl == "string" ? t.imageGalleryUrl : null, t.imageGalleryHeader = t.imageGalleryHeader || null, t.videoResizing = t.videoResizing === void 0 ? !0 : t.videoResizing, t.videoHeightShow = t.videoHeightShow === void 0 ? !0 : !!t.videoHeightShow, t.videoAlignShow = t.videoAlignShow === void 0 ? !0 : !!t.videoAlignShow, t.videoRatioShow = t.videoRatioShow === void 0 ? !0 : !!t.videoRatioShow, t.videoWidth = !t.videoWidth || !ae.getNumber(t.videoWidth, 0) ? "" : ae.isNumber(t.videoWidth) ? t.videoWidth + "px" : t.videoWidth, t.videoHeight = !t.videoHeight || !ae.getNumber(t.videoHeight, 0) ? "" : ae.isNumber(t.videoHeight) ? t.videoHeight + "px" : t.videoHeight, t.videoSizeOnlyPercentage = !!t.videoSizeOnlyPercentage, t._videoSizeUnit = t.videoSizeOnlyPercentage ? "%" : "px", t.videoRotation = t.videoRotation !== void 0 ? t.videoRotation : !(t.videoSizeOnlyPercentage || !t.videoHeightShow), t.videoRatio = ae.getNumber(t.videoRatio, 4) || 0.5625, t.videoRatioList = t.videoRatioList ? t.videoRatioList : null, t.youtubeQuery = (t.youtubeQuery || "").replace("?", ""), t.vimeoQuery = (t.vimeoQuery || "").replace("?", ""), t.videoFileInput = !!t.videoFileInput, t.videoUrlInput = t.videoUrlInput === void 0 || !t.videoFileInput ? !0 : t.videoUrlInput, t.videoUploadHeader = t.videoUploadHeader || null, t.videoUploadUrl = typeof t.videoUploadUrl == "string" ? t.videoUploadUrl : null, t.videoUploadSizeLimit = /\d+/.test(t.videoUploadSizeLimit) ? ae.getNumber(t.videoUploadSizeLimit, 0) : null, t.videoMultipleFile = !!t.videoMultipleFile, t.videoTagAttrs = t.videoTagAttrs || null, t.videoIframeAttrs = t.videoIframeAttrs || null, t.videoAccept = typeof t.videoAccept != "string" || t.videoAccept.trim() === "*" ? "video/*" : t.videoAccept.trim() || "video/*", t.audioWidth = t.audioWidth ? ae.isNumber(t.audioWidth) ? t.audioWidth + "px" : t.audioWidth : "", t.audioHeight = t.audioHeight ? ae.isNumber(t.audioHeight) ? t.audioHeight + "px" : t.audioHeight : "", t.audioFileInput = !!t.audioFileInput, t.audioUrlInput = t.audioUrlInput === void 0 || !t.audioFileInput ? !0 : t.audioUrlInput, t.audioUploadHeader = t.audioUploadHeader || null, t.audioUploadUrl = typeof t.audioUploadUrl == "string" ? t.audioUploadUrl : null, t.audioUploadSizeLimit = /\d+/.test(t.audioUploadSizeLimit) ? ae.getNumber(t.audioUploadSizeLimit, 0) : null, t.audioMultipleFile = !!t.audioMultipleFile, t.audioTagAttrs = t.audioTagAttrs || null, t.audioAccept = typeof t.audioAccept != "string" || t.audioAccept.trim() === "*" ? "audio/*" : t.audioAccept.trim() || "audio/*", t.tableCellControllerPosition = typeof t.tableCellControllerPosition == "string" ? t.tableCellControllerPosition.toLowerCase() : "cell", t.linkTargetNewWindow = !!t.linkTargetNewWindow, t.linkProtocol = typeof t.linkProtocol == "string" ? t.linkProtocol : null, t.linkRel = Array.isArray(t.linkRel) ? t.linkRel : [], t.linkRelDefault = t.linkRelDefault || {}, t.tabDisable = !!t.tabDisable, t.shortcutsDisable = Array.isArray(t.shortcutsDisable) ? t.shortcutsDisable : [], t.shortcutsHint = t.shortcutsHint === void 0 ? !0 : !!t.shortcutsHint, t.callBackSave = t.callBackSave ? t.callBackSave : null, t.templates = t.templates ? t.templates : null, t.placeholder = typeof t.placeholder == "string" ? t.placeholder : null, t.mediaAutoSelect = t.mediaAutoSelect === void 0 ? !0 : !!t.mediaAutoSelect, t.buttonList = t.buttonList ? t.buttonList : [
      ["undo", "redo"],
      ["bold", "underline", "italic", "strike", "subscript", "superscript"],
      ["removeFormat"],
      ["outdent", "indent"],
      ["fullScreen", "showBlocks", "codeView"],
      ["preview", "print"]
    ], t.rtl && (t.buttonList = t.buttonList.reverse()), t.icons = !t.icons || typeof t.icons != "object" ? ln : [ln, t.icons].reduce(function(a, d) {
      for (let f in d)
        ae.hasOwn(d, f) && (a[f] = d[f]);
      return a;
    }, {}), t.icons = t.rtl ? [t.icons, t.icons.rtl].reduce(function(a, d) {
      for (let f in d)
        ae.hasOwn(d, f) && (a[f] = d[f]);
      return a;
    }, {}) : t.icons, t.__listCommonStyle = t.__listCommonStyle || ["fontSize", "color", "fontFamily", "fontWeight", "fontStyle"], t._editorStyles = ae._setDefaultOptionStyle(t, t.defaultStyle);
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
    const t = e.icons, i = e.lang, o = ae.isOSX_IOS ? "⌘" : "CTRL", l = ae.isOSX_IOS ? "⇧" : "+SHIFT", a = e.shortcutsHint ? e.shortcutsDisable : ["bold", "strike", "underline", "italic", "undo", "indent", "save"], d = e.rtl ? ["[", "]"] : ["]", "["], f = e.rtl ? [t.outdent, t.indent] : [t.indent, t.outdent];
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
  _createButton: function(e, t, i, o, l, a, d) {
    const f = ae.createElement("LI"), n = ae.createElement("BUTTON"), b = t || i;
    return n.setAttribute("type", "button"), n.setAttribute("class", "se-btn" + (e ? " " + e : "") + " se-tooltip"), n.setAttribute("data-command", i), n.setAttribute("data-display", o), n.setAttribute("aria-label", b.replace(/<span .+<\/span>/, "")), n.setAttribute("tabindex", "-1"), l || (l = '<span class="se-icon-text">!</span>'), /^default\./i.test(l) && (l = d[l.replace(/^default\./i, "")]), /^text\./i.test(l) && (l = l.replace(/^text\./i, ""), n.className += " se-btn-more-text"), l += '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + b + "</span></span>", a && n.setAttribute("disabled", !0), n.innerHTML = l, f.appendChild(n), {
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
    const f = o.icons, n = this._defaultButtons(o), b = {}, u = [];
    let v = null, w = null, x = null, E = null, A = "", s = !1;
    const r = ae.createElement("DIV");
    r.className = "se-toolbar-more-layer";
    e:
      for (let m = 0, g, h, y, C, _; m < t.length; m++)
        if (g = !1, _ = "", C = t[m], x = this._createModuleGroup(), typeof C == "object") {
          for (let k = 0, M; k < C.length; k++) {
            if (w = C[k], M = !1, /^\%\d+/.test(w) && k === 0) {
              C[0] = w.replace(/[^\d]/g, ""), u.push(C), t.splice(m--, 1);
              continue e;
            }
            if (typeof w == "object")
              typeof w.add == "function" ? (A = w.name, v = n[A], i[A] = w) : (A = w.name, v = [w.buttonClass, w.title, w.name, w.dataDisplay, w.innerHTML, w._disabled]);
            else {
              if (/^\-/.test(w)) {
                _ = w.substr(1), x.div.className += " module-float-" + _;
                continue;
              }
              if (/^\#/.test(w)) {
                w.substr(1) === "fix" && (x.ul.className += " se-menu-dir-fix");
                continue;
              }
              if (/^\:/.test(w)) {
                M = !0;
                const T = w.match(/^\:([^\-]+)\-([^\-]+)\-([^\-]+)/);
                y = "__se__" + T[1].trim();
                const z = T[2].trim(), B = T[3].trim();
                v = ["se-btn-more", z, y, "MORE", B];
              } else
                v = n[w];
              if (A = w, !v) {
                const T = i[A];
                if (!T) throw Error("[SUNEDITOR.create.toolbar.fail] The button name of a plugin that does not exist. [" + A + "]");
                v = [T.buttonClass, T.title, T.name, T.display, T.innerHTML, T._disabled];
              }
            }
            E = this._createButton(v[0], v[1], v[2], v[3], v[4], v[5], f), (g ? h : x.ul).appendChild(E.li), i[A] && (b[A] = E.button), M && (g = !0, h = ae.createElement("DIV"), h.className = "se-more-layer " + y, h.innerHTML = '<div class="se-more-form"><ul class="se-menu-list"' + (_ ? ' style="float: ' + _ + ';"' : "") + "></ul></div>", r.appendChild(h), h = h.firstElementChild.firstElementChild);
          }
          if (s) {
            const k = l.cloneNode(!1);
            d.appendChild(k);
          }
          d.appendChild(x.div), s = !0;
        } else if (/^\/$/.test(C)) {
          const k = e.createElement("DIV");
          k.className = "se-btn-module-enter", d.appendChild(k), s = !1;
        }
    switch (d.children.length) {
      case 0:
        d.style.display = "none";
        break;
      case 1:
        ae.removeClass(d.firstElementChild, "se-btn-module-border");
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
    const p = e.createElement("DIV");
    return p.className = "se-toolbar-cover", a.appendChild(p), o.hideToolbar && (a.style.display = "none"), {
      element: a,
      plugins: i,
      pluginCallButtons: b,
      responsiveButtons: u,
      _menuTray: c,
      _buttonTray: d
    };
  }
}, Zi = function(e, t, i) {
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
function ar(e, t) {
  const i = e._w, o = e.util, l = e.options.historyStackDelayTime;
  let a = e.context.element, d = e.context.tool.undo, f = e.context.tool.redo, n = null, b = 0, u = [];
  function v() {
    const x = u[b];
    a.wysiwyg.innerHTML = x.contents, e.setRange(o.getNodeFromPath(x.s.path, a.wysiwyg), x.s.offset, o.getNodeFromPath(x.e.path, a.wysiwyg), x.e.offset), e.focus(), u.length <= 1 ? (d && d.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0)) : b === 0 ? (d && d.setAttribute("disabled", !0), f && f.removeAttribute("disabled")) : b === u.length - 1 ? (d && d.removeAttribute("disabled"), f && f.setAttribute("disabled", !0)) : (d && d.removeAttribute("disabled"), f && f.removeAttribute("disabled")), e.controllersOff(), e._checkComponents(), e._setCharCount(), e._resourcesStateChange(), t();
  }
  function w() {
    e._checkComponents();
    const x = a.wysiwyg.innerHTML;
    if (!x || u[b] && x === u[b].contents) return;
    b++;
    const E = e._variable._range;
    u.length > b && (u = u.slice(0, b), f && f.setAttribute("disabled", !0)), E ? u[b] = {
      contents: x,
      s: {
        path: o.getNodePath(E.startContainer, null, null),
        offset: E.startOffset
      },
      e: {
        path: o.getNodePath(E.endContainer, null, null),
        offset: E.endOffset
      }
    } : u[b] = {
      contents: x,
      s: { path: [0, 0], offset: [0, 0] },
      e: { path: 0, offset: 0 }
    }, b === 1 && d && d.removeAttribute("disabled"), e._setCharCount(), t();
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
      const E = typeof x == "number" ? x > 0 ? x : 0 : x ? l : 0;
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
    go: function(x) {
      b = x < 0 ? u.length - 1 : x, v();
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
    reset: function(x) {
      d && d.setAttribute("disabled", !0), f && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0), u.splice(0), b = 0, u[b] = {
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
      a = e.context.element, d = e.context.tool.undo, f = e.context.tool.redo, b === 0 ? (d && d.setAttribute("disabled", !0), f && b === u.length - 1 && f.setAttribute("disabled", !0), e._variable.isChanged = !1, e.context.tool.save && e.context.tool.save.setAttribute("disabled", !0)) : b === u.length - 1 && f && f.setAttribute("disabled", !0);
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
function rr(e, t, i, o, l, a) {
  const d = e.element.originElement.ownerDocument || document, f = d.defaultView || window, n = ae, b = l.icons, u = {
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
      for (let r = 0, c, p; r < s.length; r++)
        c = s[r], p = c.getAttribute("data-command"), this.allCommandButtons[p] = c;
    },
    /**
     * @description Recover the current buttons states from "allCommandButtons" object
     * @private
     */
    _recoverButtonStates: function() {
      if (this.allCommandButtons) {
        const s = this.context.element._buttonTray.querySelectorAll(".se-menu-list button[data-display]");
        for (let r = 0, c, p, m; r < s.length; r++)
          c = s[r], p = c.getAttribute("data-command"), m = this.allCommandButtons[p], m && (c.parentElement.replaceChild(m, c), this.context.tool[p] && (this.context.tool[p] = m));
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
      for (let r = 0, c = s.length, p; r < c; r++)
        p = s[r].name, this.plugins[p] || (this.plugins[p] = s[r]), this.initPlugins[p] || (this.initPlugins[p] = !0, typeof this.plugins[p].add == "function" && this.plugins[p].add(this));
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
      const c = this.context.element.toolbar, p = c.offsetWidth, m = v._getEditorOffsets(e.element.toolbar), g = r.offsetWidth, h = s.parentElement.offsetLeft + 3;
      if (l.rtl) {
        const B = s.offsetWidth, W = g > B ? g - B : 0, Z = W > 0 ? 0 : B - g;
        r.style.left = h - W + Z + "px", m.left > v._getEditorOffsets(r).left && (r.style.left = "0px");
      } else {
        const B = p <= g ? 0 : p - (h + g);
        B < 0 ? r.style.left = h + B + "px" : r.style.left = h + "px";
      }
      let y = 0, C = s;
      for (; C && C !== c; )
        y += C.offsetTop, C = C.offsetParent;
      const _ = y;
      this._isBalloon ? y += c.offsetTop + s.offsetHeight : y -= s.offsetHeight;
      const k = m.top, M = r.offsetHeight, T = this.getGlobalScrollOffset().top, z = f.innerHeight - (k - T + _ + s.parentElement.offsetHeight);
      if (z < M) {
        let B = -1 * (M - _ + 3);
        const W = k - T + B, Z = M + (W < 0 ? W : 0);
        Z > z ? (r.style.height = Z + "px", B = -1 * (Z - _ + 3)) : (r.style.height = z + "px", B = _ + s.parentElement.offsetHeight), r.style.top = B + "px";
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
    setControllerPosition: function(s, r, c, p) {
      l.rtl && (p.left *= -1);
      const m = n.getOffset(r, e.element.wysiwygFrame);
      s.style.visibility = "hidden", s.style.display = "block";
      const g = c === "top" ? -(s.offsetHeight + 2) : r.offsetHeight + 12;
      s.style.top = m.top + g + p.top + "px";
      const h = m.left - e.element.wysiwygFrame.scrollLeft + p.left, y = s.offsetWidth, C = r.offsetWidth, _ = n.hasClass(s.firstElementChild, "se-arrow") ? s.firstElementChild : null;
      if (l.rtl) {
        const k = y > C ? y - C : 0, M = k > 0 ? 0 : C - y;
        s.style.left = h - k + M + "px", k > 0 && _ && (_.style.left = (y - 14 < 10 + k ? y - 14 : 10 + k) + "px");
        const T = e.element.wysiwygFrame.offsetLeft - s.offsetLeft;
        T > 0 && (s.style.left = "0px", _ && (_.style.left = T + "px"));
      } else {
        s.style.left = h + "px";
        const k = e.element.wysiwygFrame.offsetWidth - (s.offsetLeft + y);
        k < 0 ? (s.style.left = s.offsetLeft + k + "px", _ && (_.style.left = 20 - k + "px")) : _ && (_.style.left = "20px");
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
                const c = n.createElement(l.defaultTag), p = n.createElement("BR");
                c.appendChild(p), e.element.wysiwyg.insertBefore(c, r), this.setRange(p, 0, p, 0);
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
    setRange: function(s, r, c, p) {
      if (!s || !c) return;
      r > s.textContent.length && (r = s.textContent.length), p > c.textContent.length && (p = c.textContent.length), n.isFormatElement(s) && (s = s.childNodes[r] || s.childNodes[r - 1] || s, r = r > 0 ? s.nodeType === 1 ? 1 : s.textContent ? s.textContent.length : 0 : 0), n.isFormatElement(c) && (c = c.childNodes[p] || c.childNodes[p - 1] || c, p = p > 0 ? c.nodeType === 1 ? 1 : c.textContent ? c.textContent.length : 0 : 0);
      const m = this._wd.createRange();
      try {
        m.setStart(s, r), m.setEnd(c, p);
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
        const c = r.anchorNode, p = r.focusNode, m = r.anchorOffset, g = r.focusOffset, h = n.compareElements(c, p), y = h.ancestor && (h.result === 0 ? m <= g : h.result > 1);
        return this.setRange(
          y ? c : p,
          y ? m : g,
          y ? p : c,
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
        const c = e.element.wysiwyg, p = n.createElement(l.defaultTag);
        p.innerHTML = "<br>", c.insertBefore(p, r && r !== c ? r.nextElementSibling : c.firstElementChild), this.setRange(p.firstElementChild, 0, p.firstElementChild, 1), s = this._variable._range;
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
      let c = s.firstElementChild, p = null;
      return c ? (p = c.firstChild, p || (p = n.createElement("BR"), c.appendChild(p))) : (c = n.createElement(l.defaultTag), p = n.createElement("BR"), c.appendChild(p), s.appendChild(c)), r.setStart(p, 0), r.setEnd(p, 0), r;
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
      let c = s.startContainer, p = s.startOffset, m = s.endContainer, g = s.endOffset, h, y, C;
      if (n.isFormatElement(c))
        for (c.childNodes[p] ? (c = c.childNodes[p] || c, p = 0) : (c = c.lastChild || c, p = c.textContent.length); c && c.nodeType === 1 && c.firstChild; )
          c = c.firstChild || c, p = 0;
      if (n.isFormatElement(m)) {
        for (m = m.childNodes[g] || m.lastChild || m; m && m.nodeType === 1 && m.lastChild; )
          m = m.lastChild;
        g = r ? 0 : m.textContent.length;
      }
      if (h = n.isWysiwygDiv(c) ? e.element.wysiwyg.firstChild : c, y = p, n.isBreak(h) || h.nodeType === 1 && h.childNodes.length > 0) {
        const _ = n.isBreak(h);
        if (!_) {
          for (; h && !n.isBreak(h) && h.nodeType === 1; )
            h = h.childNodes[y] || h.nextElementSibling || h.nextSibling, y = 0;
          let k = n.getFormatElement(h, null);
          k === n.getRangeFormatElement(k, null) && (k = n.createElement(n.getParentElement(h, n.isCell) ? "DIV" : l.defaultTag), h.parentNode.insertBefore(k, h), k.appendChild(h));
        }
        if (n.isBreak(h)) {
          const k = n.createTextNode(n.zeroWidthSpace);
          h.parentNode.insertBefore(k, h), h = k, _ && c === m && (m = h, g = 1);
        }
      }
      if (c = h, p = y, h = n.isWysiwygDiv(m) ? e.element.wysiwyg.lastChild : m, y = g, n.isBreak(h) || h.nodeType === 1 && h.childNodes.length > 0) {
        const _ = n.isBreak(h);
        if (!_) {
          for (; h && !n.isBreak(h) && h.nodeType === 1 && (C = h.childNodes, C.length !== 0); )
            h = C[y > 0 ? y - 1 : y] || !/FIGURE/i.test(C[0].nodeName) ? C[0] : h.previousElementSibling || h.previousSibling || c, y = y > 0 ? h.textContent.length : y;
          let k = n.getFormatElement(h, null);
          k === n.getRangeFormatElement(k, null) && (k = n.createElement(n.isCell(k) ? "DIV" : l.defaultTag), h.parentNode.insertBefore(k, h), k.appendChild(h));
        }
        if (n.isBreak(h)) {
          const k = n.createTextNode(n.zeroWidthSpace);
          h.parentNode.insertBefore(k, h), h = k, y = 1, _ && !h.previousSibling && n.removeItem(m);
        }
      }
      return m = h, g = y, this.setRange(c, p, m, g), !0;
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
        const B = e.element.wysiwyg.children;
        if (B.length === 0) return [];
        this.setRange(B[0], 0, B[B.length - 1], B[B.length - 1].textContent.trim().length), r = this.getRange();
      }
      const c = r.startContainer, p = r.endContainer, m = r.commonAncestorContainer, g = n.getListChildren(m, function(B) {
        return s ? s(B) : n.isFormatElement(B);
      });
      if (!n.isWysiwygDiv(m) && !n.isRangeFormatElement(m) && g.unshift(n.getFormatElement(m, null)), c === p || g.length === 1) return g;
      let h = n.getFormatElement(c, null), y = n.getFormatElement(p, null), C = null, _ = null;
      const k = function(B) {
        return n.isTable(B) ? /^TABLE$/i.test(B.nodeName) : !0;
      };
      let M = n.getRangeFormatElement(h, k), T = n.getRangeFormatElement(y, k);
      n.isTable(M) && n.isListCell(M.parentNode) && (M = M.parentNode), n.isTable(T) && n.isListCell(T.parentNode) && (T = T.parentNode);
      const z = M === T;
      for (let B = 0, W = g.length, Z; B < W; B++) {
        if (Z = g[B], h === Z || !z && Z === M) {
          C = B;
          continue;
        }
        if (y === Z || !z && Z === T) {
          _ = B;
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
      const r = this.getRange().commonAncestorContainer, c = n.getParentElement(r, n.isComponent), p = n.isTable(r) ? this.getSelectedElements(null) : this.getSelectedElements((function(m) {
        const g = this.getParentElement(m, this.isComponent);
        return this.isFormatElement(m) && (!g || g === c) || this.isComponent(m) && !this.getFormatElement(m);
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
      const p = [];
      for (c = c === "start" ? "previousSibling" : "nextSibling"; s && !n.isFormatElement(s) && !n.isWysiwygDiv(s); )
        if (!s[c] || n.isBreak(s[c]) && !s[c][c])
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
      const c = n.getFormatElement(this.getSelectionNode(), null);
      let p = null;
      if (!n.isFormatElement(s) && n.isFreeFormatElement(c || s.parentNode))
        p = n.createElement("BR");
      else {
        const m = r ? typeof r == "string" ? r : r.nodeName : n.isFormatElement(c) && !n.isRangeFormatElement(c) && !n.isFreeFormatElement(c) ? c.nodeName : l.defaultTag;
        p = n.createElement(m), p.innerHTML = "<br>", (r && typeof r != "string" || !r && n.isFormatElement(c)) && n.copyTagAttributes(p, r || c, ["id"]);
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
    insertComponent: function(s, r, c, p) {
      if (this.isReadOnly || c && !this.checkCharCount(s, null))
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
      const r = n.getParentElement(s, n.isComponent), c = e.element.lineBreaker_t.style, p = e.element.lineBreaker_b.style, m = this.context.resizing.resizeContainer.style.display === "block" ? this.context.resizing.resizeContainer : s, g = n.isListCell(r.parentNode);
      let h, y, C;
      (g ? !r.previousSibling : !n.isFormatElement(r.previousElementSibling)) ? (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, h = n.getOffset(s, e.element.wysiwygFrame).top + y, C = m.offsetWidth / 2 / 2, c.top = h - y - 12 + "px", c.left = n.getOffset(m).left + C + "px", c.display = "block") : c.display = "none", (g ? !r.nextSibling : !n.isFormatElement(r.nextElementSibling)) ? (h || (this._variable._lineBreakComp = r, y = e.element.wysiwyg.scrollTop, h = n.getOffset(s, e.element.wysiwygFrame).top + y, C = m.offsetWidth / 2 / 2), p.top = h + m.offsetHeight - y - 12 + "px", p.left = n.getOffset(m).left + m.offsetWidth - C - 24 + "px", p.display = "block") : p.display = "none";
    },
    _checkDuplicateNode: function(s, r) {
      (function c(p) {
        u._dupleCheck(p, r);
        const m = p.childNodes;
        for (let g = 0, h = m.length; g < h; g++)
          c(m[g]);
      })(s);
    },
    _dupleCheck: function(s, r) {
      if (!n.isTextStyleElement(s)) return;
      const c = (s.style.cssText.match(/[^;]+;/g) || []).map(function(g) {
        return g.trim();
      }), p = s.nodeName;
      if (/^span$/i.test(p) && c.length === 0) return s;
      let m = !1;
      return function g(h) {
        if (!(n.isWysiwygDiv(h) || !n.isTextStyleElement(h))) {
          if (h.nodeName === p) {
            m = !0;
            const y = h.style.cssText.match(/[^;]+;/g) || [];
            for (let C = 0, _ = y.length, k; C < _; C++)
              (k = c.indexOf(y[C].trim())) > -1 && c.splice(k, 1);
            for (let C = 0, _ = h.classList.length; C < _; C++)
              s.classList.remove(h.classList[C]);
          }
          g(h.parentElement);
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
      let p = null, m = this.getRange(), g = n.isListCell(m.commonAncestorContainer) ? m.commonAncestorContainer : n.getFormatElement(this.getSelectionNode(), null), h = n.isListCell(g) && (n.isListCell(s) || n.isList(s)), y, C, _, k = null;
      const M = n.isFreeFormatElement(g), T = !M && (n.isFormatElement(s) || n.isRangeFormatElement(s)) || n.isComponent(s);
      if (h && (_ = r || n.isList(s) ? g.lastChild : g.nextElementSibling, k = n.isList(s) ? g : (_ || g).parentNode), !r && (T || n.isComponent(s) || n.isMedia(s))) {
        const F = this.isEdgePoint(m.endContainer, m.endOffset, "end"), I = this.removeNode(), V = I.container, R = V === I.prevContainer && m.collapsed ? null : I.prevContainer;
        if (h && R)
          if (k = R.nodeType === 3 ? R.parentNode : R, k.contains(V)) {
            let H = !0;
            for (_ = V; _.parentNode && _.parentNode !== k; )
              _ = _.parentNode, H = !1;
            H && V === R && (_ = _.nextSibling);
          } else
            _ = null;
        else if (h && n.isListCell(V) && !g.parentElement)
          g = n.createElement("LI"), k.appendChild(g), V.appendChild(k), _ = null;
        else if (V.nodeType === 3 || n.isBreak(V) || h) {
          const H = n.getParentElement(V, (function(N) {
            return this.isRangeFormatElement(N) || this.isListCell(N);
          }).bind(n));
          if (r = n.splitElement(V, I.offset, H ? n.getElementDepth(H) + 1 : 0), !r)
            _ = r = g;
          else if (h) {
            if (g.contains(V)) {
              const N = n.isList(g.lastElementChild);
              let L = null;
              F || (L = g.cloneNode(!1), L.appendChild(r.textContent.trim() ? r : n.createTextNode(n.zeroWidthSpace))), N && (L || (L = g.cloneNode(!1), L.appendChild(n.createTextNode(n.zeroWidthSpace))), L.appendChild(g.lastElementChild)), L && (g.parentNode.insertBefore(L, g.nextElementSibling), _ = r = L);
            }
          } else
            r = r.previousSibling;
        }
      }
      m = !r && !T ? this.getRange_addLine(this.getRange(), null) : this.getRange();
      const z = m.commonAncestorContainer, B = m.startOffset, W = m.endOffset, Z = m.startContainer === z && n.isFormatElement(z), P = Z && (z.childNodes[B] || z.childNodes[0]) || m.startContainer, D = Z && (z.childNodes[W] || z.childNodes[z.childNodes.length - 1]) || m.endContainer;
      if (!h)
        if (r)
          y = r.parentNode, r = r.nextSibling, C = !0;
        else if (y = P, P.nodeType === 3 && (y = P.parentNode), m.collapsed)
          if (z.nodeType === 3)
            z.textContent.length > W ? r = z.splitText(W) : r = z.nextSibling;
          else if (n.isBreak(y))
            r = y, y = y.parentNode;
          else {
            let F = y.childNodes[B];
            const I = F && F.nodeType === 3 && n.onlyZeroWidthSpace(F) && n.isBreak(F.nextSibling) ? F.nextSibling : F;
            I ? !I.nextSibling && n.isBreak(I) ? (y.removeChild(I), r = null) : r = n.isBreak(I) && !n.isBreak(s) ? I : I.nextSibling : r = null;
          }
        else if (P === D) {
          this.isEdgePoint(D, W) ? r = D.nextSibling : r = D.splitText(W);
          let I = P;
          this.isEdgePoint(P, B) || (I = P.splitText(B)), y.removeChild(I), y.childNodes.length === 0 && T && (y.innerHTML = "<br>");
        } else {
          const I = this.removeNode(), V = I.container, R = I.prevContainer;
          if (V && V.childNodes.length === 0 && T && (n.isFormatElement(V) ? V.innerHTML = "<br>" : n.isRangeFormatElement(V) && (V.innerHTML = "<" + l.defaultTag + "><br></" + l.defaultTag + ">")), n.isListCell(V) && s.nodeType === 3)
            y = V, r = null;
          else if (!T && R)
            if (y = R.nodeType === 3 ? R.parentNode : R, y.contains(V)) {
              let H = !0;
              for (r = V; r.parentNode && r.parentNode !== y; )
                r = r.parentNode, H = !1;
              H && V === R && (r = r.nextSibling);
            } else
              r = null;
          else n.isWysiwygDiv(V) && !n.isFormatElement(s) ? (y = V.appendChild(n.createElement(l.defaultTag)), r = null) : (r = T ? D : V === R ? V.nextSibling : V, y = !r || !r.parentNode ? z : r.parentNode);
          for (; r && !n.isFormatElement(r) && r.parentNode !== z; )
            r = r.parentNode;
        }
      try {
        if (!h) {
          if ((n.isWysiwygDiv(r) || y === e.element.wysiwyg.parentNode) && (y = e.element.wysiwyg, r = null), n.isFormatElement(s) || n.isRangeFormatElement(s) || !n.isListCell(y) && n.isComponent(s)) {
            const F = y;
            if (n.isList(r))
              y = r, r = null;
            else if (n.isListCell(r))
              y = r.previousElementSibling || r;
            else if (!C && !r) {
              const I = this.removeNode(), V = I.container.nodeType === 3 ? n.isListCell(n.getFormatElement(I.container, null)) ? I.container : n.getFormatElement(I.container, null) || I.container.parentNode : I.container, R = n.isWysiwygDiv(V) || n.isRangeFormatElement(V);
              y = R ? V : V.parentNode, r = R ? null : V.nextSibling;
            }
            F.childNodes.length === 0 && y !== F && n.removeItem(F);
          }
          if (T && !M && !n.isRangeFormatElement(y) && !n.isListCell(y) && !n.isWysiwygDiv(y) && (r = y.nextElementSibling, y = y.parentNode), n.isWysiwygDiv(y) && (s.nodeType === 3 || n.isBreak(s))) {
            const F = n.createElement(l.defaultTag);
            F.appendChild(s), p = s, s = F;
          }
        }
        if (h ? k.parentNode ? (y = k, r = _) : (y = e.element.wysiwyg, r = null) : r = y === r ? y.lastChild : r, n.isListCell(s) && !n.isList(y)) {
          if (n.isListCell(y))
            r = y.nextElementSibling, y = y.parentNode;
          else {
            const F = n.createElement("ol");
            y.insertBefore(F, r), y = F, r = null;
          }
          h = !0;
        }
        if (this._checkDuplicateNode(s, y), y.insertBefore(s, r), h)
          if (n.onlyZeroWidthSpace(g.textContent.trim()))
            n.removeItem(g), s = s.lastChild;
          else {
            const F = n.getArrayItem(g.children, n.isList);
            F && (s !== F ? (s.appendChild(F), s = F.previousSibling) : (y.appendChild(s), s = y), n.onlyZeroWidthSpace(g.textContent.trim()) && n.removeItem(g));
          }
      } catch (F) {
        y.appendChild(s), console.warn("[SUNEDITOR.insertNode.warn] " + F);
      } finally {
        p && (s = p);
        const F = y.querySelectorAll("[data-se-duple]");
        if (F.length > 0)
          for (let I = 0, V = F.length, R, H, N, L; I < V; I++) {
            for (R = F[I], N = R.childNodes, L = R.parentNode; N[0]; )
              H = N[0], L.insertBefore(H, R);
            R === s && (s = H), n.removeItem(R);
          }
        if ((n.isFormatElement(s) || n.isComponent(s)) && P === D) {
          const I = n.getFormatElement(z, null);
          I && I.nodeType === 1 && n.isEmptyLine(I) && n.removeItem(I);
        }
        if (M && (n.isFormatElement(s) || n.isRangeFormatElement(s)) && (s = this._setIntoFreeFormat(s)), !n.isComponent(s)) {
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
      let c, p;
      for (; n.isFormatElement(s) || n.isRangeFormatElement(s); ) {
        for (c = s.childNodes, p = null; c[0]; ) {
          if (p = c[0], n.isFormatElement(p) || n.isRangeFormatElement(p)) {
            if (this._setIntoFreeFormat(p), !s.parentNode) break;
            c = s.childNodes;
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
        const I = n.getParentElement(s.startContainer, n.isMediaComponent);
        if (I) {
          const V = n.createElement("BR"), R = n.createElement(l.defaultTag);
          return R.appendChild(V), n.changeElement(I, R), u.setRange(R, 0, R, 0), this.history.push(!0), {
            container: R,
            offset: 0,
            prevContainer: null
          };
        }
      }
      const r = s.startOffset === 0, c = u.isEdgePoint(s.endContainer, s.endOffset, "end");
      let p = null, m = null, g = null;
      r && (m = n.getFormatElement(s.startContainer), m && (p = m.previousElementSibling, m = p)), c && (g = n.getFormatElement(s.endContainer), g = g && g.nextElementSibling);
      let h, y = 0, C = s.startContainer, _ = s.endContainer, k = s.startOffset, M = s.endOffset;
      const T = s.commonAncestorContainer.nodeType === 3 && s.commonAncestorContainer.parentNode === C.parentNode ? C.parentNode : s.commonAncestorContainer;
      if (T === C && T === _ && (C = T.children[k], _ = T.children[M], k = M = 0), !C || !_) return {
        container: T,
        offset: 0
      };
      if (C === _ && s.collapsed && C.textContent && n.onlyZeroWidthSpace(C.textContent.substr(k)))
        return {
          container: C,
          offset: k,
          prevContainer: C && C.parentNode ? C : null
        };
      let z = null, B = null;
      const W = n.getListChildNodes(T, null);
      let Z = n.getArrayIndex(W, C), P = n.getArrayIndex(W, _);
      if (W.length > 0 && Z > -1 && P > -1) {
        for (let I = Z + 1, V = C; I >= 0; I--)
          W[I] === V.parentNode && W[I].firstChild === V && k === 0 && (Z = I, V = V.parentNode);
        for (let I = P - 1, V = _; I > Z; I--)
          W[I] === V.parentNode && W[I].nodeType === 1 && (W.splice(I, 1), V = V.parentNode, --P);
      } else {
        if (W.length === 0) {
          if (n.isFormatElement(T) || n.isRangeFormatElement(T) || n.isWysiwygDiv(T) || n.isBreak(T) || n.isMedia(T))
            return {
              container: T,
              offset: 0
            };
          if (T.nodeType === 3)
            return {
              container: T,
              offset: M
            };
          W.push(T), C = _ = T;
        } else if (C = _ = W[0], n.isBreak(C) || n.onlyZeroWidthSpace(C))
          return {
            container: n.isMedia(T) ? T : C,
            offset: 0
          };
        Z = P = 0;
      }
      for (let I = Z; I <= P; I++) {
        const V = W[I];
        if (V.length === 0 || V.nodeType === 3 && V.data === void 0) {
          this._nodeRemoveListItem(V);
          continue;
        }
        if (V === C) {
          if (C.nodeType === 1) {
            if (n.isComponent(C)) continue;
            z = n.createTextNode(C.textContent);
          } else
            V === _ ? (z = n.createTextNode(C.substringData(0, k) + _.substringData(M, _.length - M)), y = k) : z = n.createTextNode(C.substringData(0, k));
          if (z.length > 0 ? C.data = z.data : this._nodeRemoveListItem(C), V === _) break;
          continue;
        }
        if (V === _) {
          if (_.nodeType === 1) {
            if (n.isComponent(_)) continue;
            B = n.createTextNode(_.textContent);
          } else
            B = n.createTextNode(_.substringData(M, _.length - M));
          B.length > 0 ? _.data = B.data : this._nodeRemoveListItem(_);
          continue;
        }
        this._nodeRemoveListItem(V);
      }
      const D = n.getParentElement(_, "ul"), F = n.getParentElement(C, "li");
      if (D && F && F.contains(D) ? (h = D.previousSibling, y = h.textContent.length) : (h = _ && _.parentNode ? _ : C && C.parentNode ? C : s.endContainer || s.startContainer, y = !r && !c ? y : c ? h.textContent.length : 0), !n.isWysiwygDiv(h) && h.childNodes.length === 0) {
        const I = n.removeItemAllParents(h, null, null);
        I && (h = I.sc || I.ec || e.element.wysiwyg);
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
        for (let M = 0, T = r.length, z, B, W, Z, P, D; M < T; M++)
          if (z = r[M], !!n.isListCell(z) && (B = z.lastElementChild, B && n.isListCell(z.nextElementSibling) && r.indexOf(z.nextElementSibling) > -1 && (Z = B.lastElementChild, r.indexOf(Z) > -1))) {
            let F = null;
            for (; F = Z.lastElementChild; )
              if (n.isList(F))
                if (r.indexOf(F.lastElementChild) > -1)
                  Z = F.lastElementChild;
                else
                  continue e;
            W = B.firstElementChild, P = r.indexOf(W), D = r.indexOf(Z), r.splice(P, D - P + 1), T = r.length;
            continue;
          }
      let c = r[r.length - 1], p, m, g;
      n.isRangeFormatElement(c) || n.isFormatElement(c) ? p = c : p = n.getRangeFormatElement(c, null) || n.getFormatElement(c, null), n.isCell(p) ? (m = null, g = p) : (m = p.nextSibling, g = p.parentNode);
      let h = n.getElementDepth(p), y = null;
      const C = [], _ = function(M, T, z) {
        let B = null;
        if (M !== T && !n.isTable(T)) {
          if (T && n.getElementDepth(M) === n.getElementDepth(T)) return z;
          B = n.removeItemAllParents(T, null, M);
        }
        return B ? B.ec : z;
      };
      for (let M = 0, T = r.length, z, B, W, Z, P, D, F; M < T; M++)
        if (z = r[M], B = z.parentNode, !(!B || s.contains(B)))
          if (W = n.getElementDepth(z), n.isList(B)) {
            if (y === null && (D ? (y = D, F = !0, D = null) : y = B.cloneNode(!1)), C.push(z), P = r[M + 1], M === T - 1 || P && P.parentNode !== B) {
              P && z.contains(P.parentNode) && (D = P.parentNode.cloneNode(!1));
              let I = B.parentNode, V;
              for (; n.isList(I); )
                V = n.createElement(I.nodeName), V.appendChild(y), y = V, I = I.parentNode;
              const R = this.detachRangeFormatElement(B, C, null, !0, !0);
              h >= W ? (h = W, g = R.cc, m = _(g, B, R.ec), m && (g = m.parentNode)) : g === R.cc && (m = R.ec), g !== R.cc && (Z = _(g, R.cc, Z), Z !== void 0 ? m = Z : m = R.cc);
              for (let H = 0, N = R.removeArray.length; H < N; H++)
                y.appendChild(R.removeArray[H]);
              F || s.appendChild(y), D && R.removeArray[R.removeArray.length - 1].appendChild(D), y = null, F = !1;
            }
          } else
            h >= W && (h = W, g = B, m = z.nextSibling), s.appendChild(z), g !== B && (Z = _(g, B), Z !== void 0 && (m = Z));
      if (this.effectNode = null, n.mergeSameTags(s, null, !1), n.mergeNestedTags(s, (function(M) {
        return this.isList(M);
      }).bind(n)), m && n.getElementDepth(m) > 0 && (n.isList(m.parentNode) || n.isList(m.parentNode.parentNode))) {
        const M = n.getParentElement(m, (function(z) {
          return this.isRangeFormatElement(z) && !this.isList(z);
        }).bind(n)), T = n.splitElement(m, null, M ? n.getElementDepth(M) + 1 : 0);
        T.parentNode.insertBefore(s, T);
      } else
        g.insertBefore(s, m), _(s, m);
      const k = n.getEdgeChildNodes(s.firstElementChild, s.lastElementChild);
      r.length > 1 ? this.setRange(k.sc, 0, k.ec, k.ec.textContent.length) : this.setRange(k.ec, k.ec.textContent.length, k.ec, k.ec.textContent.length), this.history.push(!1);
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
    detachRangeFormatElement: function(s, r, c, p, m) {
      const g = this.getRange();
      let h = g.startOffset, y = g.endOffset, C = n.getListChildNodes(s, function(R) {
        return R.parentNode === s;
      }), _ = s.parentNode, k = null, M = null, T = s.cloneNode(!1);
      const z = [], B = n.isList(c);
      let W = !1, Z = !1, P = !1;
      function D(R, H, N, L) {
        if (n.onlyZeroWidthSpace(H) && (H.innerHTML = n.zeroWidthSpace, h = y = 1), H.nodeType === 3)
          return R.insertBefore(H, N), H;
        const K = (P ? H : L).childNodes;
        let $ = H.cloneNode(!1), X = null, G = null;
        for (; K[0]; )
          G = K[0], n._notTextNode(G) && !n.isBreak(G) && !n.isListCell($) ? ($.childNodes.length > 0 && (X || (X = $), R.insertBefore($, N), $ = H.cloneNode(!1)), R.insertBefore(G, N), X || (X = G)) : $.appendChild(G);
        if ($.childNodes.length > 0) {
          if (n.isListCell(R) && n.isListCell($) && n.isList(N))
            if (B) {
              for (X = N; N; )
                $.appendChild(N), N = N.nextSibling;
              R.parentNode.insertBefore($, R.nextElementSibling);
            } else {
              const Y = L.nextElementSibling, ie = n.detachNestedList(L, !1);
              if (s !== ie || Y !== L.nextElementSibling) {
                const ue = $.childNodes;
                for (; ue[0]; )
                  L.appendChild(ue[0]);
                s = ie, Z = !0;
              }
            }
          else
            R.insertBefore($, N);
          X || (X = $);
        }
        return X;
      }
      for (let R = 0, H = C.length, N, L, K; R < H; R++)
        if (N = C[R], !(N.nodeType === 3 && n.isList(T)))
          if (P = !1, p && R === 0 && (!r || r.length === H || r[0] === N ? k = s.previousSibling : k = T), r && (L = r.indexOf(N)), r && L === -1)
            T || (T = s.cloneNode(!1)), T.appendChild(N);
          else {
            if (r && (K = r[L + 1]), T && T.children.length > 0 && (_.insertBefore(T, s), T = null), !B && n.isListCell(N))
              if (K && n.getElementDepth(N) !== n.getElementDepth(K) && (n.isListCell(_) || n.getArrayItem(N.children, n.isList, !1))) {
                const $ = N.nextElementSibling, X = n.detachNestedList(N, !1);
                (s !== X || $ !== N.nextElementSibling) && (s = X, Z = !0);
              } else {
                const $ = N;
                N = n.createElement(p ? $.nodeName : n.isList(s.parentNode) || n.isListCell(s.parentNode) ? "LI" : n.isCell(s.parentNode) ? "DIV" : l.defaultTag);
                const X = n.isListCell(N), G = $.childNodes;
                for (; G[0] && !(n.isList(G[0]) && !X); )
                  N.appendChild(G[0]);
                n.copyFormatAttributes(N, $), P = !0;
              }
            else
              N = N.cloneNode(!1);
            if (!Z && (p ? (z.push(N), n.removeItem(C[R])) : (c ? (W || (_.insertBefore(c, s), W = !0), N = D(c, N, null, C[R])) : N = D(_, N, s, C[R]), Z || (r ? (M = N, k || (k = N)) : k || (k = M = N))), Z)) {
              Z = P = !1, C = n.getListChildNodes(s, function($) {
                return $.parentNode === s;
              }), T = s.cloneNode(!1), _ = s.parentNode, R = -1, H = C.length;
              continue;
            }
          }
      const F = s.parentNode;
      let I = s.nextSibling;
      T && T.children.length > 0 && F.insertBefore(T, I), c ? k = c.previousSibling : k || (k = s.previousSibling), I = s.nextSibling !== T ? s.nextSibling : T ? T.nextSibling : null, s.children.length === 0 || s.textContent.length === 0 ? n.removeItem(s) : n.removeEmptyNode(s, null, !1);
      let V = null;
      if (p)
        V = {
          cc: F,
          sc: k,
          so: h,
          ec: I,
          eo: y,
          removeArray: z
        };
      else {
        k || (k = M), M || (M = k);
        const R = n.getEdgeChildNodes(k, M.parentNode ? k : M);
        V = {
          cc: (R.sc || R.ec).parentNode,
          sc: R.sc,
          so: h,
          ec: R.ec,
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
      let c = {}, p = !1, m = !1, g = null, h = null;
      const y = (function(C) {
        return !this.isComponent(C);
      }).bind(n);
      for (let C = 0, _ = s.length, k, M, T, z; C < _; C++) {
        if (T = C === _ - 1, M = n.getRangeFormatElement(s[C], y), z = n.isList(M), !k && z)
          k = M, c = { r: k, f: [n.getParentElement(s[C], "LI")] }, C === 0 && (p = !0);
        else if (k && z)
          if (k !== M) {
            const B = this.detachRangeFormatElement(c.f[0].parentNode, c.f, null, r, !0);
            M = s[C].parentNode, p && (g = B.sc, p = !1), T && (h = B.ec), z ? (k = M, c = { r: k, f: [n.getParentElement(s[C], "LI")] }, T && (m = !0)) : k = null;
          } else
            c.f.push(n.getParentElement(s[C], "LI")), T && (m = !0);
        if (T && n.isList(k)) {
          const B = this.detachRangeFormatElement(c.f[0].parentNode, c.f, null, r, !0);
          (m || _ === 1) && (h = B.ec), p && (g = B.sc || h);
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
    nodeChange: function(s, r, c, p) {
      this._resetRangeToTextNode();
      let m = this.getRange_addLine(this.getRange(), null);
      r = r && r.length > 0 ? r : !1, c = c && c.length > 0 ? c : !1;
      const g = !s, h = g && !c && !r;
      let y = m.startContainer, C = m.startOffset, _ = m.endContainer, k = m.endOffset;
      if (h && m.collapsed && n.isFormatElement(y.parentNode) || y === _ && y.nodeType === 1 && n.isNonEditable(y)) {
        const G = y.parentNode;
        if (!n.isListCell(G) || !n.getValues(G.style).some((function(Y) {
          return this._listKebab.indexOf(Y) > -1;
        }).bind(this))) return;
      }
      if (m.collapsed && !h && y.nodeType === 1 && !n.isBreak(y) && !n.isComponent(y)) {
        let G = null;
        const Y = y.childNodes[C];
        Y && (Y.nextSibling ? G = n.isBreak(Y) ? Y : Y.nextSibling : G = null);
        const ie = n.createTextNode(n.zeroWidthSpace);
        y.insertBefore(ie, G), this.setRange(ie, 1, ie, 1), m = this.getRange(), y = m.startContainer, C = m.startOffset, _ = m.endContainer, k = m.endOffset;
      }
      n.isFormatElement(y) && (y = y.childNodes[C] || y.firstChild, C = 0), n.isFormatElement(_) && (_ = _.childNodes[k] || _.lastChild, k = _.textContent.length), g && (s = n.createElement("DIV"));
      const M = f.RegExp, T = s.nodeName;
      if (!h && y === _ && !c && s) {
        let G = y, Y = 0;
        const ie = [], ue = s.style;
        for (let fe = 0, de = ue.length; fe < de; fe++)
          ie.push(ue[fe]);
        const ce = s.classList;
        for (let fe = 0, de = ce.length; fe < de; fe++)
          ie.push("." + ce[fe]);
        if (ie.length > 0) {
          for (; !n.isFormatElement(G) && !n.isWysiwygDiv(G); ) {
            for (let fe = 0; fe < ie.length; fe++)
              if (G.nodeType === 1) {
                const de = ie[fe], Te = /^\./.test(de) ? new M("\\s*" + de.replace(/^\./, "") + "(\\s+|$)", "ig") : !1, He = g ? !!G.style[de] : !!G.style[de] && !!s.style[de] && G.style[de] === s.style[de], ye = Te === !1 ? !1 : g ? !!G.className.match(Te) : !!G.className.match(Te) && !!s.className.match(Te);
                (He || ye) && Y++;
              }
            G = G.parentNode;
          }
          if (Y >= ie.length) return;
        }
      }
      let z = {}, B = {}, W, Z = "", P = "", D = "";
      if (r) {
        for (let G = 0, Y = r.length, ie; G < Y; G++)
          ie = r[G], /^\./.test(ie) ? P += (P ? "|" : "\\s*(?:") + ie.replace(/^\./, "") : Z += (Z ? "|" : "(?:;|^|\\s)(?:") + ie;
        Z && (Z += ")\\s*:[^;]*\\s*(?:;|$)", Z = new M(Z, "ig")), P && (P += ")(?=\\s+|$)", P = new M(P, "ig"));
      }
      if (c) {
        D = "^(?:" + c[0];
        for (let G = 1; G < c.length; G++)
          D += "|" + c[G];
        D += ")$", D = new M(D, "i");
      }
      const F = f.Boolean, I = { v: !1 }, V = function(G) {
        const Y = G.cloneNode(!1);
        if (Y.nodeType === 3 || n.isBreak(Y)) return Y;
        if (h) return null;
        const ie = !D && g || D && D.test(Y.nodeName);
        if (ie && !p)
          return I.v = !0, null;
        const ue = Y.style.cssText;
        let ce = "";
        Z && ue.length > 0 && (ce = ue.replace(Z, "").trim(), ce !== ue && (I.v = !0));
        const fe = Y.className;
        let de = "";
        return P && fe.length > 0 && (de = fe.replace(P, "").trim(), de !== fe && (I.v = !0)), g && (P || !fe) && (Z || !ue) && !ce && !de && ie ? (I.v = !0, null) : ce || de || Y.nodeName !== T || F(Z) !== F(ue) || F(P) !== F(fe) ? (Z && ue.length > 0 && (Y.style.cssText = ce), Y.style.cssText || Y.removeAttribute("style"), P && fe.length > 0 && (Y.className = de.trim()), Y.className.trim() || Y.removeAttribute("class"), !Y.style.cssText && !Y.className && (Y.nodeName === T || ie) ? (I.v = !0, null) : Y) : (I.v = !0, null);
      }, R = this.getSelectedElements(null);
      m = this.getRange(), y = m.startContainer, C = m.startOffset, _ = m.endContainer, k = m.endOffset, n.getFormatElement(y, null) || (y = n.getChildElement(R[0], function(G) {
        return G.nodeType === 3;
      }, !1), C = 0), n.getFormatElement(_, null) || (_ = n.getChildElement(R[R.length - 1], function(G) {
        return G.nodeType === 3;
      }, !1), k = _.textContent.length);
      const H = n.getFormatElement(y, null) === n.getFormatElement(_, null), N = R.length - (H ? 0 : 1);
      W = s.cloneNode(!1);
      const L = h || g && function(G) {
        for (let Y = 0, ie = G.length; Y < ie; Y++)
          if (n._isMaintainedNode(G[Y]) || n._isSizeNode(G[Y])) return !0;
        return !1;
      }(c), K = g || n._isSizeNode(W), $ = this._util_getMaintainedNode.bind(n, L, K), X = this._util_isMaintainedNode.bind(n, L, K);
      if (H) {
        this._resetCommonListCell(R[0], r) && (m = this.setRange(y, C, _, k));
        const G = this._nodeChange_oneLine(R[0], W, V, y, C, _, k, h, g, m.collapsed, I, $, X);
        z.container = G.startContainer, z.offset = G.startOffset, B.container = G.endContainer, B.offset = G.endOffset, z.container === B.container && n.onlyZeroWidthSpace(z.container) && (z.offset = B.offset = 1), this._setCommonListStyle(G.ancestor, null);
      } else {
        let G = !1;
        N > 0 && this._resetCommonListCell(R[N], r) && (G = !0), this._resetCommonListCell(R[0], r) && (G = !0), G && this.setRange(y, C, _, k), N > 0 && (W = s.cloneNode(!1), B = this._nodeChange_endLine(R[N], W, V, _, k, h, g, I, $, X));
        for (let Y = N - 1, ie; Y > 0; Y--)
          this._resetCommonListCell(R[Y], r), W = s.cloneNode(!1), ie = this._nodeChange_middleLine(R[Y], W, V, h, g, I, B.container), ie.endContainer && ie.ancestor.contains(ie.endContainer) && (B.ancestor = null, B.container = ie.endContainer), this._setCommonListStyle(ie.ancestor, null);
        W = s.cloneNode(!1), z = this._nodeChange_startLine(R[0], W, V, y, C, h, g, I, $, X, B.container), z.endContainer && (B.ancestor = null, B.container = z.endContainer), N <= 0 ? B = z : B.container || (B.ancestor = null, B.container = z.container, B.offset = z.container.textContent.length), this._setCommonListStyle(z.ancestor, null), this._setCommonListStyle(B.ancestor || n.getFormatElement(B.container), null);
      }
      this.controllersOff(), this.setRange(z.container, z.offset, B.container, B.offset), this.history.push(!1);
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
      const c = n.getArrayItem(s.childNodes, function(M) {
        return !n.isBreak(M);
      }, !0), p = s.style, m = [], g = [], h = n.getValues(p);
      for (let M = 0, T = this._listKebab.length; M < T; M++)
        h.indexOf(this._listKebab[M]) > -1 && r.indexOf(this._listKebab[M]) > -1 && (m.push(this._listCamel[M]), g.push(this._listKebab[M]));
      if (!m.length) return;
      const y = n.createElement("SPAN");
      for (let M = 0, T = m.length; M < T; M++)
        y.style[m[M]] = p[g[M]], p.removeProperty(g[M]);
      let C = y.cloneNode(!1), _ = null, k = !1;
      for (let M = 0, T = c.length, z, B; M < T; M++)
        z = c[M], !l._textTagsMap[z.nodeName.toLowerCase()] && (B = n.getValues(z.style), B.length === 0 || m.some(function(W) {
          return B.indexOf(W) === -1;
        }) && B.some(function(W) {
        }) ? (_ = z.nextSibling, C.appendChild(z)) : C.childNodes.length > 0 && (s.insertBefore(C, _), C = y.cloneNode(!1), _ = null, k = !0));
      return C.childNodes.length > 0 && (s.insertBefore(C, _), k = !0), p.length || s.removeAttribute("style"), k;
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
      const p = r.style, m = s.style, g = r.nodeName.toLowerCase();
      let h = !1;
      l._textTagsMap[g] === l._defaultCommand.bold.toLowerCase() && (m.fontWeight = "bold"), l._textTagsMap[g] === l._defaultCommand.italic.toLowerCase() && (m.fontStyle = "italic");
      const y = n.getValues(p);
      if (y.length > 0)
        for (let C = 0, _ = this._listCamel.length; C < _; C++)
          y.indexOf(this._listKebab[C]) > -1 && (m[this._listCamel[C]] = p[this._listCamel[C]], p.removeProperty(this._listKebab[C]), h = !0);
      if (this._setCommonListStyle(s, r), !!h && !p.length) {
        const C = r.childNodes, _ = r.parentNode, k = r.nextSibling;
        for (; C.length > 0; )
          _.insertBefore(C[0], k);
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
    _nodeChange_oneLine: function(s, r, c, p, m, g, h, y, C, _, k, M, T) {
      let z = p.parentNode;
      for (; !z.nextSibling && !z.previousSibling && !n.isFormatElement(z.parentNode) && !n.isWysiwygDiv(z.parentNode) && z.nodeName !== r.nodeName; )
        z = z.parentNode;
      if (!C && z === g.parentNode && z.nodeName === r.nodeName && n.onlyZeroWidthSpace(p.textContent.slice(0, m)) && n.onlyZeroWidthSpace(g.textContent.slice(h))) {
        const ye = z.childNodes;
        let Re = !0;
        for (let we = 0, it = ye.length, Fe, Oe, Ae, ve; we < it; we++) {
          if (Fe = ye[we], ve = !n.onlyZeroWidthSpace(Fe), Fe === p) {
            Oe = !0;
            continue;
          }
          if (Fe === g) {
            Ae = !0;
            continue;
          }
          if (!Oe && ve || Oe && Ae && ve) {
            Re = !1;
            break;
          }
        }
        if (Re)
          return n.copyTagAttributes(z, r), {
            ancestor: s,
            startContainer: p,
            startOffset: m,
            endContainer: g,
            endOffset: h
          };
      }
      k.v = !1;
      const B = s, W = [r], Z = s.cloneNode(!1), P = p === g;
      let D = p, F = m, I = g, V = h, R = !1, H = !1, N, L, K, $, X;
      const G = f.RegExp;
      function Y(ye) {
        const Re = new G("(?:;|^|\\s)(?:" + $ + "null)\\s*:[^;]*\\s*(?:;|$)", "ig");
        let we = "";
        return Re && ye.style.cssText.length > 0 && (we = Re.test(ye.style.cssText)), !we;
      }
      if (function ye(Re, we) {
        const it = Re.childNodes;
        for (let Fe = 0, Oe = it.length, Ae; Fe < Oe; Fe++) {
          let ve = it[Fe];
          if (!ve) continue;
          let wt = we, Ze;
          if (!R && ve === D) {
            let Pe = Z;
            X = M(ve);
            const Se = n.createTextNode(D.nodeType === 1 ? "" : D.substringData(0, F)), Me = n.createTextNode(
              D.nodeType === 1 ? "" : D.substringData(
                F,
                P && V >= F ? V - F : D.data.length - F
              )
            );
            if (X) {
              const St = M(we);
              if (St && St.parentNode !== Pe) {
                let et = St, Et = null;
                for (; et.parentNode !== Pe; ) {
                  for (we = Et = et.parentNode.cloneNode(!1); et.childNodes[0]; )
                    Et.appendChild(et.childNodes[0]);
                  et.appendChild(Et), et = et.parentNode;
                }
                et.parentNode.appendChild(St);
              }
              X = X.cloneNode(!1);
            }
            n.onlyZeroWidthSpace(Se) || we.appendChild(Se);
            const Ie = M(we);
            for (Ie && (X = Ie), X && (Pe = X), L = ve, N = [], $ = ""; L !== Pe && L !== B && L !== null; )
              Ae = T(L) ? null : c(L), Ae && L.nodeType === 1 && Y(L) && (N.push(Ae), $ += L.style.cssText.substr(0, L.style.cssText.indexOf(":")) + "|"), L = L.parentNode;
            const xt = N.pop() || Me;
            for (K = L = xt; N.length > 0; )
              L = N.pop(), K.appendChild(L), K = L;
            if (r.appendChild(xt), Pe.appendChild(r), X && !M(I) && (r = r.cloneNode(!1), Z.appendChild(r), W.push(r)), D = Me, F = 0, R = !0, L !== Me && L.appendChild(D), !P) continue;
          }
          if (!H && ve === I) {
            X = M(ve);
            const Pe = n.createTextNode(I.nodeType === 1 ? "" : I.substringData(V, I.length - V)), Se = n.createTextNode(P || I.nodeType === 1 ? "" : I.substringData(0, V));
            if (X ? X = X.cloneNode(!1) : T(r.parentNode) && !X && (r = r.cloneNode(!1), Z.appendChild(r), W.push(r)), !n.onlyZeroWidthSpace(Pe)) {
              L = ve, $ = "", N = [];
              const Ie = [];
              for (; L !== Z && L !== B && L !== null; )
                L.nodeType === 1 && Y(L) && (T(L) ? Ie.push(L.cloneNode(!1)) : N.push(L.cloneNode(!1)), $ += L.style.cssText.substr(0, L.style.cssText.indexOf(":")) + "|"), L = L.parentNode;
              for (N = N.concat(Ie), Ze = K = L = N.pop() || Pe; N.length > 0; )
                L = N.pop(), K.appendChild(L), K = L;
              Z.appendChild(Ze), L.textContent = Pe.data;
            }
            if (X && Ze) {
              const Ie = M(Ze);
              Ie && (X = Ie);
            }
            for (L = ve, N = [], $ = ""; L !== Z && L !== B && L !== null; )
              Ae = T(L) ? null : c(L), Ae && L.nodeType === 1 && Y(L) && (N.push(Ae), $ += L.style.cssText.substr(0, L.style.cssText.indexOf(":")) + "|"), L = L.parentNode;
            const Me = N.pop() || Se;
            for (K = L = Me; N.length > 0; )
              L = N.pop(), K.appendChild(L), K = L;
            X ? (r = r.cloneNode(!1), r.appendChild(Me), X.insertBefore(r, X.firstChild), Z.appendChild(X), W.push(r), X = null) : r.appendChild(Me), I = Se, V = Se.data.length, H = !0, !y && _ && (r = Se, Se.textContent = n.zeroWidthSpace), L !== Se && L.appendChild(I);
            continue;
          }
          if (R) {
            if (ve.nodeType === 1 && !n.isBreak(ve)) {
              n._isIgnoreNodeChange(ve) ? (Z.appendChild(ve.cloneNode(!0)), _ || (r = r.cloneNode(!1), Z.appendChild(r), W.push(r))) : ye(ve, ve);
              continue;
            }
            L = ve, N = [], $ = "";
            const Pe = [];
            for (; L.parentNode !== null && L !== B && L !== r; )
              Ae = H ? L.cloneNode(!1) : c(L), L.nodeType === 1 && !n.isBreak(ve) && Ae && Y(L) && (T(L) ? X || Pe.push(Ae) : N.push(Ae), $ += L.style.cssText.substr(0, L.style.cssText.indexOf(":")) + "|"), L = L.parentNode;
            N = N.concat(Pe);
            const Se = N.pop() || ve;
            for (K = L = Se; N.length > 0; )
              L = N.pop(), K.appendChild(L), K = L;
            if (T(r.parentNode) && !T(Se) && !n.onlyZeroWidthSpace(r) && (r = r.cloneNode(!1), Z.appendChild(r), W.push(r)), !H && !X && T(Se)) {
              r = r.cloneNode(!1);
              const Me = Se.childNodes;
              for (let Ie = 0, xt = Me.length; Ie < xt; Ie++)
                r.appendChild(Me[Ie]);
              Se.appendChild(r), Z.appendChild(Se), W.push(r), r.children.length > 0 ? we = L : we = r;
            } else Se === ve ? H ? we = Z : we = r : H ? (Z.appendChild(Se), we = L) : (r.appendChild(Se), we = L);
            if (X && ve.nodeType === 3)
              if (M(ve)) {
                const Me = n.getParentElement(we, (function(Ie) {
                  return this._isMaintainedNode(Ie.parentNode) || Ie.parentNode === Z;
                }).bind(n));
                X.appendChild(Me), r = Me.cloneNode(!1), W.push(r), Z.appendChild(r);
              } else
                X = null;
          }
          Ze = ve.cloneNode(!1), we.appendChild(Ze), ve.nodeType === 1 && !n.isBreak(ve) && (wt = Ze), ye(ve, wt);
        }
      }(s, Z), C && !y && !k.v)
        return {
          ancestor: s,
          startContainer: p,
          startOffset: m,
          endContainer: g,
          endOffset: h
        };
      if (y = y && C, y)
        for (let ye = 0; ye < W.length; ye++) {
          let Re = W[ye], we, it, Fe;
          if (_)
            we = n.createTextNode(n.zeroWidthSpace), Z.replaceChild(we, Re);
          else {
            const Oe = Re.childNodes;
            for (it = Oe[0]; Oe[0]; )
              Fe = Oe[0], Z.insertBefore(Fe, Re);
            n.removeItem(Re);
          }
          ye === 0 && (_ ? D = I = we : (D = it, I = Fe));
        }
      else {
        if (C)
          for (let ye = 0; ye < W.length; ye++)
            this._stripRemoveNode(W[ye]);
        _ && (D = I = r);
      }
      n.removeEmptyNode(Z, r, !1), _ && (F = D.textContent.length, V = I.textContent.length);
      const ie = y || I.textContent.length === 0;
      !n.isBreak(I) && I.textContent.length === 0 && (n.removeItem(I), I = D), V = ie ? I.textContent.length : V;
      const ue = { s: 0, e: 0 }, ce = n.getNodePath(D, Z, ue), fe = !I.parentNode;
      fe && (I = D);
      const de = { s: 0, e: 0 }, Te = n.getNodePath(I, Z, !fe && !ie ? de : null);
      F += ue.s, V = _ ? F : fe ? D.textContent.length : ie ? V + ue.s : V + de.s;
      const He = n.mergeSameTags(Z, [ce, Te], !0);
      return s.parentNode.replaceChild(Z, s), D = n.getNodeFromPath(ce, Z), I = n.getNodeFromPath(Te, Z), {
        ancestor: Z,
        startContainer: D,
        startOffset: F + He[0],
        endContainer: I,
        endOffset: V + He[1]
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
    _nodeChange_startLine: function(s, r, c, p, m, g, h, y, C, _, k) {
      let M = p.parentNode;
      for (; !M.nextSibling && !M.previousSibling && !n.isFormatElement(M.parentNode) && !n.isWysiwygDiv(M.parentNode) && M.nodeName !== r.nodeName; )
        M = M.parentNode;
      if (!h && M.nodeName === r.nodeName && !n.isFormatElement(M) && !M.nextSibling && n.onlyZeroWidthSpace(p.textContent.slice(0, m))) {
        let R = !0, H = p.previousSibling;
        for (; H; ) {
          if (!n.onlyZeroWidthSpace(H)) {
            R = !1;
            break;
          }
          H = H.previousSibling;
        }
        if (R)
          return n.copyTagAttributes(M, r), {
            ancestor: s,
            container: p,
            offset: m
          };
      }
      y.v = !1;
      const T = s, z = [r], B = s.cloneNode(!1);
      let W = p, Z = m, P = !1, D, F, I, V;
      if (function R(H, N) {
        const L = H.childNodes;
        for (let K = 0, $ = L.length, X, G; K < $; K++) {
          const Y = L[K];
          if (!Y) continue;
          let ie = N;
          if (P && !n.isBreak(Y)) {
            if (Y.nodeType === 1) {
              if (n._isIgnoreNodeChange(Y)) {
                if (r = r.cloneNode(!1), G = Y.cloneNode(!0), B.appendChild(G), B.appendChild(r), z.push(r), k && Y.contains(k)) {
                  const de = n.getNodePath(k, Y);
                  k = n.getNodeFromPath(de, G);
                }
              } else
                R(Y, Y);
              continue;
            }
            F = Y, D = [];
            const ue = [];
            for (; F.parentNode !== null && F !== T && F !== r; )
              X = c(F), F.nodeType === 1 && X && (_(F) ? V || ue.push(X) : D.push(X)), F = F.parentNode;
            D = D.concat(ue);
            const ce = D.length > 0, fe = D.pop() || Y;
            for (I = F = fe; D.length > 0; )
              F = D.pop(), I.appendChild(F), I = F;
            if (_(r.parentNode) && !_(fe) && (r = r.cloneNode(!1), B.appendChild(r), z.push(r)), !V && _(fe)) {
              r = r.cloneNode(!1);
              const de = fe.childNodes;
              for (let Te = 0, He = de.length; Te < He; Te++)
                r.appendChild(de[Te]);
              fe.appendChild(r), B.appendChild(fe), N = _(F) ? r : F, z.push(r);
            } else ce ? (r.appendChild(fe), N = F) : N = r;
            if (V && Y.nodeType === 3)
              if (C(Y)) {
                const de = n.getParentElement(N, (function(Te) {
                  return this._isMaintainedNode(Te.parentNode) || Te.parentNode === B;
                }).bind(n));
                V.appendChild(de), r = de.cloneNode(!1), z.push(r), B.appendChild(r);
              } else
                V = null;
          }
          if (!P && Y === W) {
            let ue = B;
            V = C(Y);
            const ce = n.createTextNode(W.nodeType === 1 ? "" : W.substringData(0, Z)), fe = n.createTextNode(W.nodeType === 1 ? "" : W.substringData(Z, W.length - Z));
            if (V) {
              const He = C(N);
              if (He && He.parentNode !== ue) {
                let ye = He, Re = null;
                for (; ye.parentNode !== ue; ) {
                  for (N = Re = ye.parentNode.cloneNode(!1); ye.childNodes[0]; )
                    Re.appendChild(ye.childNodes[0]);
                  ye.appendChild(Re), ye = ye.parentNode;
                }
                ye.parentNode.appendChild(He);
              }
              V = V.cloneNode(!1);
            }
            n.onlyZeroWidthSpace(ce) || N.appendChild(ce);
            const de = C(N);
            for (de && (V = de), V && (ue = V), F = N, D = []; F !== ue && F !== null; )
              X = c(F), F.nodeType === 1 && X && D.push(X), F = F.parentNode;
            const Te = D.pop() || N;
            for (I = F = Te; D.length > 0; )
              F = D.pop(), I.appendChild(F), I = F;
            Te !== N ? (r.appendChild(Te), N = F) : N = r, n.isBreak(Y) && r.appendChild(Y.cloneNode(!1)), ue.appendChild(r), W = fe, Z = 0, P = !0, N.appendChild(W);
            continue;
          }
          X = P ? c(Y) : Y.cloneNode(!1), X && (N.appendChild(X), Y.nodeType === 1 && !n.isBreak(Y) && (ie = X)), R(Y, ie);
        }
      }(s, B), h && !g && !y.v)
        return {
          ancestor: s,
          container: p,
          offset: m,
          endContainer: k
        };
      if (g = g && h, g)
        for (let R = 0; R < z.length; R++) {
          let H = z[R];
          const N = H.childNodes, L = N[0];
          for (; N[0]; )
            B.insertBefore(N[0], H);
          n.removeItem(H), R === 0 && (W = L);
        }
      else if (h) {
        r = r.firstChild;
        for (let R = 0; R < z.length; R++)
          this._stripRemoveNode(z[R]);
      }
      if (!g && B.childNodes.length === 0)
        s.childNodes ? W = s.childNodes[0] : (W = n.createTextNode(n.zeroWidthSpace), s.appendChild(W));
      else {
        n.removeEmptyNode(B, r, !1), n.onlyZeroWidthSpace(B.textContent) && (W = B.firstChild, Z = 0);
        const R = { s: 0, e: 0 }, H = n.getNodePath(W, B, R);
        Z += R.s;
        const N = n.mergeSameTags(B, [H], !0);
        s.parentNode.replaceChild(B, s), W = n.getNodeFromPath(H, B), Z += N[0];
      }
      return {
        ancestor: B,
        container: W,
        offset: Z,
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
    _nodeChange_middleLine: function(s, r, c, p, m, g, h) {
      if (!m) {
        let k = null;
        h && s.contains(h) && (k = n.getNodePath(h, s));
        const M = s.cloneNode(!0), T = r.nodeName, z = r.style.cssText, B = r.className;
        let W = M.childNodes, Z = 0, P = W.length;
        for (let D; Z < P && (D = W[Z], D.nodeType !== 3); Z++)
          if (D.nodeName === T)
            D.style.cssText += z, n.addClass(D, B);
          else {
            if (!n.isBreak(D) && n._isIgnoreNodeChange(D))
              continue;
            if (P === 1) {
              W = D.childNodes, P = W.length, Z = -1;
              continue;
            } else
              break;
          }
        if (P > 0 && Z === P)
          return s.innerHTML = M.innerHTML, {
            ancestor: s,
            endContainer: k ? n.getNodeFromPath(k, s) : null
          };
      }
      g.v = !1;
      const y = s.cloneNode(!1), C = [r];
      let _ = !0;
      if (function k(M, T) {
        const z = M.childNodes;
        for (let B = 0, W = z.length, Z, P; B < W; B++) {
          let D = z[B];
          if (!D) continue;
          let F = T;
          if (!n.isBreak(D) && n._isIgnoreNodeChange(D)) {
            if (r.childNodes.length > 0 && (y.appendChild(r), r = r.cloneNode(!1)), P = D.cloneNode(!0), y.appendChild(P), y.appendChild(r), C.push(r), T = r, h && D.contains(h)) {
              const I = n.getNodePath(h, D);
              h = n.getNodeFromPath(I, P);
            }
            continue;
          } else
            Z = c(D), Z && (_ = !1, T.appendChild(Z), D.nodeType === 1 && (F = Z));
          n.isBreak(D) || k(D, F);
        }
      }(s, r), _ || m && !p && !g.v) return { ancestor: s, endContainer: h };
      if (y.appendChild(r), p && m)
        for (let k = 0; k < C.length; k++) {
          let M = C[k];
          const T = M.childNodes;
          for (; T[0]; )
            y.insertBefore(T[0], M);
          n.removeItem(M);
        }
      else if (m) {
        r = r.firstChild;
        for (let k = 0; k < C.length; k++)
          this._stripRemoveNode(C[k]);
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
    _nodeChange_endLine: function(s, r, c, p, m, g, h, y, C, _) {
      let k = p.parentNode;
      for (; !k.nextSibling && !k.previousSibling && !n.isFormatElement(k.parentNode) && !n.isWysiwygDiv(k.parentNode) && k.nodeName !== r.nodeName; )
        k = k.parentNode;
      if (!h && k.nodeName === r.nodeName && !n.isFormatElement(k) && !k.previousSibling && n.onlyZeroWidthSpace(p.textContent.slice(m))) {
        let V = !0, R = p.nextSibling;
        for (; R; ) {
          if (!n.onlyZeroWidthSpace(R)) {
            V = !1;
            break;
          }
          R = R.nextSibling;
        }
        if (V)
          return n.copyTagAttributes(k, r), {
            ancestor: s,
            container: p,
            offset: m
          };
      }
      y.v = !1;
      const M = s, T = [r], z = s.cloneNode(!1);
      let B = p, W = m, Z = !1, P, D, F, I;
      if (function V(R, H) {
        const N = R.childNodes;
        for (let L = N.length - 1, K; 0 <= L; L--) {
          const $ = N[L];
          if (!$) continue;
          let X = H;
          if (Z && !n.isBreak($)) {
            if ($.nodeType === 1) {
              if (n._isIgnoreNodeChange($)) {
                r = r.cloneNode(!1);
                const ue = $.cloneNode(!0);
                z.insertBefore(ue, H), z.insertBefore(r, ue), T.push(r);
              } else
                V($, $);
              continue;
            }
            D = $, P = [];
            const G = [];
            for (; D.parentNode !== null && D !== M && D !== r; )
              K = c(D), K && D.nodeType === 1 && (_(D) ? I || G.push(K) : P.push(K)), D = D.parentNode;
            P = P.concat(G);
            const Y = P.length > 0, ie = P.pop() || $;
            for (F = D = ie; P.length > 0; )
              D = P.pop(), F.appendChild(D), F = D;
            if (_(r.parentNode) && !_(ie) && (r = r.cloneNode(!1), z.insertBefore(r, z.firstChild), T.push(r)), !I && _(ie)) {
              r = r.cloneNode(!1);
              const ue = ie.childNodes;
              for (let ce = 0, fe = ue.length; ce < fe; ce++)
                r.appendChild(ue[ce]);
              ie.appendChild(r), z.insertBefore(ie, z.firstChild), T.push(r), r.children.length > 0 ? H = D : H = r;
            } else Y ? (r.insertBefore(ie, r.firstChild), H = D) : H = r;
            if (I && $.nodeType === 3)
              if (C($)) {
                const ue = n.getParentElement(H, (function(ce) {
                  return this._isMaintainedNode(ce.parentNode) || ce.parentNode === z;
                }).bind(n));
                I.appendChild(ue), r = ue.cloneNode(!1), T.push(r), z.insertBefore(r, z.firstChild);
              } else
                I = null;
          }
          if (!Z && $ === B) {
            I = C($);
            const G = n.createTextNode(B.nodeType === 1 ? "" : B.substringData(W, B.length - W)), Y = n.createTextNode(B.nodeType === 1 ? "" : B.substringData(0, W));
            if (I) {
              I = I.cloneNode(!1);
              const ue = C(H);
              if (ue && ue.parentNode !== z) {
                let ce = ue, fe = null;
                for (; ce.parentNode !== z; ) {
                  for (H = fe = ce.parentNode.cloneNode(!1); ce.childNodes[0]; )
                    fe.appendChild(ce.childNodes[0]);
                  ce.appendChild(fe), ce = ce.parentNode;
                }
                ce.parentNode.insertBefore(ue, ce.parentNode.firstChild);
              }
              I = I.cloneNode(!1);
            } else _(r.parentNode) && !I && (r = r.cloneNode(!1), z.appendChild(r), T.push(r));
            for (n.onlyZeroWidthSpace(G) || H.insertBefore(G, H.firstChild), D = H, P = []; D !== z && D !== null; )
              K = _(D) ? null : c(D), K && D.nodeType === 1 && P.push(K), D = D.parentNode;
            const ie = P.pop() || H;
            for (F = D = ie; P.length > 0; )
              D = P.pop(), F.appendChild(D), F = D;
            ie !== H ? (r.insertBefore(ie, r.firstChild), H = D) : H = r, n.isBreak($) && r.appendChild($.cloneNode(!1)), I ? (I.insertBefore(r, I.firstChild), z.insertBefore(I, z.firstChild), I = null) : z.insertBefore(r, z.firstChild), B = Y, W = Y.data.length, Z = !0, H.insertBefore(B, H.firstChild);
            continue;
          }
          K = Z ? c($) : $.cloneNode(!1), K && (H.insertBefore(K, H.firstChild), $.nodeType === 1 && !n.isBreak($) && (X = K)), V($, X);
        }
      }(s, z), h && !g && !y.v)
        return {
          ancestor: s,
          container: p,
          offset: m
        };
      if (g = g && h, g)
        for (let V = 0; V < T.length; V++) {
          let R = T[V];
          const H = R.childNodes;
          let N = null;
          for (; H[0]; )
            N = H[0], z.insertBefore(N, R);
          n.removeItem(R), V === T.length - 1 && (B = N, W = N.textContent.length);
        }
      else if (h) {
        r = r.firstChild;
        for (let V = 0; V < T.length; V++)
          this._stripRemoveNode(T[V]);
      }
      if (!g && z.childNodes.length === 0)
        s.childNodes ? B = s.childNodes[0] : (B = n.createTextNode(n.zeroWidthSpace), s.appendChild(B));
      else {
        if (!h && r.textContent.length === 0)
          return n.removeEmptyNode(z, null, !1), {
            ancestor: null,
            container: null,
            offset: 0
          };
        n.removeEmptyNode(z, r, !1), n.onlyZeroWidthSpace(z.textContent) ? (B = z.firstChild, W = B.textContent.length) : n.onlyZeroWidthSpace(B) && (B = r, W = 1);
        const V = { s: 0, e: 0 }, R = n.getNodePath(B, z, V);
        W += V.s;
        const H = n.mergeSameTags(z, [R], !0);
        s.parentNode.replaceChild(z, s), B = n.getNodeFromPath(R, z), W += H[0];
      }
      return {
        ancestor: z,
        container: B,
        offset: B.nodeType === 1 && W === 1 ? B.childNodes.length : W
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
            const p = e.element.toolbar.querySelector("." + s);
            p && (this._moreLayerActiveButton && this.moreLayerOff(), this._moreLayerActiveButton = c, p.style.display = "block", v._showToolbarBalloon(), v._showToolbarInline()), n.addClass(c, "on");
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
            let p = n.getChildElement(c.firstChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !1) || c.firstChild, m = n.getChildElement(c.lastChild, function(C) {
              return C.childNodes.length === 0 || C.nodeType === 3;
            }, !0) || c.lastChild;
            if (!p || !m) return;
            if (n.isMedia(p)) {
              const C = this.getFileComponent(p), _ = n.createElement("BR"), k = n.createElement(l.defaultTag);
              k.appendChild(_), p = C ? C.component : p, p.parentNode.insertBefore(k, p), p = _;
            }
            if (n.isMedia(m)) {
              const C = n.createElement("BR"), _ = n.createElement(l.defaultTag);
              _.appendChild(C), c.appendChild(_), m = C;
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
      const r = this.getRange(), c = this.getSelectedElements(null), p = [], m = s !== "indent", g = l.rtl ? "marginRight" : "marginLeft";
      let h = r.startContainer, y = r.endContainer, C = r.startOffset, _ = r.endOffset;
      for (let k = 0, M = c.length, T, z; k < M; k++)
        T = c[k], !n.isListCell(T) || !this.plugins.list ? (z = /\d+/.test(T.style[g]) ? n.getNumber(T.style[g], 0) : 0, m ? z -= 25 : z += 25, n.setStyle(T, g, z <= 0 ? "" : z + "px")) : (m || T.previousElementSibling) && p.push(T);
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
        let c = r.head.innerHTML;
        (!r.head.querySelector('link[rel="stylesheet"]') || this.options.height === "auto" && !r.head.querySelector("style")) && (c += n._setIframeCssTags(this.options)), this._wd.head.innerHTML = c, this._wd.body.innerHTML = this.convertContentsForEditor(r.body.innerHTML);
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
      const r = e.element.topArea, c = e.element.toolbar, p = e.element.editorArea, m = e.element.wysiwygFrame, g = e.element.code, h = this._variable;
      this.controllersOff();
      const y = c.style.display === "none" || this._isInline && !this._inlineToolbarAttr.isShow;
      h.isFullScreen ? (h.isFullScreen = !1, m.style.cssText = h._wysiwygOriginCssText, g.style.cssText = h._codeOriginCssText, c.style.cssText = "", p.style.cssText = h._editorAreaOriginCssText, r.style.cssText = h._originCssText, d.body.style.overflow = h._bodyOverflow, l.height === "auto" && !l.codeMirrorEditor && v._codeViewAutoHeight(), l.toolbarContainer && l.toolbarContainer.appendChild(c), l.stickyToolbar > -1 && n.removeClass(c, "se-toolbar-sticky"), h._fullScreenAttrs.sticky && !l.toolbarContainer && (h._fullScreenAttrs.sticky = !1, e.element._stickyDummy.style.display = "block", n.addClass(c, "se-toolbar-sticky")), this._isInline = h._fullScreenAttrs.inline, this._isBalloon = h._fullScreenAttrs.balloon, this._isInline && v._showToolbarInline(), l.toolbarContainer && n.removeClass(c, "se-toolbar-balloon"), v.onScroll_window(), s && n.changeElement(s.firstElementChild, b.expansion), e.element.topArea.style.marginTop = "", n.removeClass(this._styleCommandMap.fullScreen, "active")) : (h.isFullScreen = !0, h._fullScreenAttrs.inline = this._isInline, h._fullScreenAttrs.balloon = this._isBalloon, (this._isInline || this._isBalloon) && (this._isInline = !1, this._isBalloon = !1), l.toolbarContainer && e.element.relative.insertBefore(c, p), r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.maxWidth = "100%", r.style.height = "100%", r.style.zIndex = "2147483647", e.element._stickyDummy.style.display !== "" && (h._fullScreenAttrs.sticky = !0, e.element._stickyDummy.style.display = "none", n.removeClass(c, "se-toolbar-sticky")), h._bodyOverflow = d.body.style.overflow, d.body.style.overflow = "hidden", h._editorAreaOriginCssText = p.style.cssText, h._wysiwygOriginCssText = m.style.cssText, h._codeOriginCssText = g.style.cssText, p.style.cssText = c.style.cssText = "", m.style.cssText = (m.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0] + l._editorStyles.editor, g.style.cssText = (g.style.cssText.match(/\s?display(\s+)?:(\s+)?[a-zA-Z]+;/) || [""])[0], c.style.width = m.style.height = g.style.height = "100%", c.style.position = "relative", c.style.display = "block", h.innerHeight_fullScreen = f.innerHeight - c.offsetHeight, p.style.height = h.innerHeight_fullScreen - l.fullScreenOffset + "px", s && n.changeElement(s.firstElementChild, b.reduction), l.iframe && l.height === "auto" && (p.style.overflow = "auto", this._iframeAutoHeight()), e.element.topArea.style.marginTop = l.fullScreenOffset + "px", n.addClass(this._styleCommandMap.fullScreen, "active")), y && w.toolbar.hide(), typeof w.toggleFullScreen == "function" && w.toggleFullScreen(this._variable.isFullScreen, this);
    },
    /**
     * @description Prints the current contents of the editor.
     */
    print: function() {
      const s = n.createElement("IFRAME");
      s.style.display = "none", d.body.appendChild(s);
      const r = l.printTemplate ? l.printTemplate.replace(/\{\{\s*contents\s*\}\}/i, this.getContents(!0)) : this.getContents(!0), c = n.getIframeDocument(s), p = this._wd;
      if (l.iframe) {
        const m = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? n.getAttributesToString(p.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        c.write(
          "<!DOCTYPE html><html><head>" + p.head.innerHTML + "</head><body " + m + ">" + r + "</body></html>"
        );
      } else {
        const m = d.head.getElementsByTagName("link"), g = d.head.getElementsByTagName("style");
        let h = "";
        for (let y = 0, C = m.length; y < C; y++)
          h += m[y].outerHTML;
        for (let y = 0, C = g.length; y < C; y++)
          h += g[y].outerHTML;
        c.write(
          "<!DOCTYPE html><html><head>" + h + '</head><body class="' + (l._printClass !== null ? l._printClass : l._editableClass) + '">' + r + "</body></html>"
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
        const p = l._printClass !== null ? 'class="' + l._printClass + '"' : l.fullPage ? n.getAttributesToString(c.body, ["contenteditable"]) : 'class="' + l._editableClass + '"';
        r.document.write(
          "<!DOCTYPE html><html><head>" + c.head.innerHTML + "<style>body {overflow:auto !important; margin: 10px auto !important; height:auto !important; outline:1px dashed #ccc;}</style></head><body " + p + ">" + s + "</body></html>"
        );
      } else {
        const p = d.head.getElementsByTagName("link"), m = d.head.getElementsByTagName("style");
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
      const r = s === "rtl", c = this._prevRtl !== r;
      this._prevRtl = l.rtl = r, c && (this.plugins.align && this.plugins.align.exchangeDir.call(this), e.tool.indent && n.changeElement(e.tool.indent.firstElementChild, b.indent), e.tool.outdent && n.changeElement(e.tool.outdent.firstElementChild, b.outdent));
      const p = e.element;
      r ? (n.addClass(p.topArea, "se-rtl"), n.addClass(p.wysiwygFrame, "se-rtl")) : (n.removeClass(p.topArea, "se-rtl"), n.removeClass(p.wysiwygFrame, "se-rtl"));
      const m = n.getListChildren(p.wysiwyg, function(h) {
        return n.isFormatElement(h) && (h.style.marginRight || h.style.marginLeft || h.style.textAlign);
      });
      for (let h = 0, y = m.length, C, _, k; h < y; h++)
        C = m[h], k = C.style.marginRight, _ = C.style.marginLeft, (k || _) && (C.style.marginRight = _, C.style.marginLeft = k), k = C.style.textAlign, k === "left" ? C.style.textAlign = "right" : k === "right" && (C.style.textAlign = "left");
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
      const p = n.getListChildren(c, function(m) {
        return m.hasAttribute("contenteditable");
      });
      for (let m = 0, g = p.length; m < g; m++)
        p[m].removeAttribute("contenteditable");
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
        const p = n.getListChildNodes(s, function(m) {
          return n.isSpanWithoutAttr(m) && !n.getParentElement(m, n.isNotCheckingNode);
        }) || [];
        for (let m = p.length - 1; m >= 0; m--)
          p[m].outerHTML = p[m].innerHTML;
        return !r || n.isFormatElement(s) || n.isRangeFormatElement(s) || n.isComponent(s) || n.isFigures(s) || n.isAnchor(s) && n.isMedia(s.firstElementChild) ? n.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML : "<" + c + ">" + (n.isSpanWithoutAttr(s) ? s.innerHTML : s.outerHTML) + "</" + c + ">";
      }
      if (s.nodeType === 3) {
        if (!r) return n._HTMLConvertor(s.textContent);
        const p = s.textContent.split(/\n/g);
        let m = "";
        for (let g = 0, h = p.length, y; g < h; g++)
          y = p[g].trim(), y.length > 0 && (m += "<" + c + ">" + n._HTMLConvertor(y) + "</" + c + ">");
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
      return s.replace(this._disallowedTextTagsRegExp, function(c, p, m, g) {
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
      const c = this._w.Math, p = r.match(/(\d+(?:\.\d+)?)(.+)/), m = p ? p[1] * 1 : n.fontValueMap[r], g = p ? p[2] : "rem";
      let h = m;
      switch (/em/.test(g) ? h = c.round(m / 0.0625) : g === "pt" ? h = c.round(m * 1.333) : g === "%" && (h = m / 100), s) {
        case "em":
        case "rem":
        case "%":
          return (h * 0.0625).toFixed(2) + s;
        case "pt":
          return c.floor(h / 1.333) + s;
        default:
          return h + s;
      }
    },
    _cleanStyle: function(s, r, c) {
      let p = (s.match(/style\s*=\s*(?:"|')[^"']*(?:"|')/) || [])[0];
      if (/span/i.test(c) && !p && (s.match(/<[^\s]+\s(.+)/) || [])[1]) {
        const m = (s.match(/\ssize="([^"]+)"/i) || [])[1], g = (s.match(/\sface="([^"]+)"/i) || [])[1], h = (s.match(/\scolor="([^"]+)"/i) || [])[1];
        (m || g || h) && (p = 'style="' + (m ? "font-size:" + this.util.getNumber(m / 3.333, 1) + "rem;" : "") + (g ? "font-family:" + g + ";" : "") + (h ? "color:" + h + ";" : "") + '"');
      }
      if (p) {
        r || (r = []);
        const m = p.replace(/&quot;/g, "").match(this._cleanStyleRegExp[c]);
        if (m) {
          const g = [];
          for (let h = 0, y = m.length, C; h < y; h++)
            if (C = m[h].match(/([a-zA-Z0-9-]+)(:)([^"']+)/), C && !/inherit|initial|revert|unset/i.test(C[3])) {
              const _ = n.kebabToCamelCase(C[1].trim()), k = this.wwComputedStyle[_] ? this.wwComputedStyle[_].replace(/"/g, "") : "", M = C[3].trim();
              switch (_) {
                case "fontFamily":
                  if (!l.plugins.font || l.font.indexOf(M) === -1) continue;
                  break;
                case "fontSize":
                  if (!l.plugins.fontSize) continue;
                  this._cleanStyleRegExp.fontSizeUnit.test(C[0]) || (C[0] = C[0].replace((C[0].match(/:\s*([^;]+)/) || [])[1], this._convertFontSize.bind(this, l.fontSizeUnit)));
                  break;
                case "color":
                  if (!l.plugins.fontColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(M)) continue;
                  break;
                case "backgroundColor":
                  if (!l.plugins.hiliteColor || /rgba\(([0-9]+\s*,\s*){3}0\)|windowtext/i.test(M)) continue;
                  break;
              }
              k !== M && g.push(C[0]);
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
    _cleanTags: function(s, r, c) {
      if (/^<[a-z0-9]+\:[a-z0-9]+/i.test(r)) return r;
      let p = null;
      const m = c.match(/(?!<)[a-zA-Z0-9\-]+/)[0].toLowerCase(), g = this._attributesTagsBlacklist[m];
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
          _ = /^(?:href|src)\s*=\s*('|"|\s)*javascript\s*\:/i.test(p[y].trim()) ? "" : p[y], c += (/^\s/.test(_) ? "" : " ") + _;
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
      const p = s.childNodes;
      for (let m = 0, g = p.length, h; m < g; m++)
        h = p[m], h.nodeType === 8 ? r += "<!-- " + h.textContent + " -->" : !n.isFormatElement(h) && !n.isRangeFormatElement(h) && !n.isComponent(h) && !/meta/i.test(h.nodeName) ? (c || (c = n.createElement(l.defaultTag)), c.appendChild(h), m--, g--) : (c && (r += c.outerHTML, c = null), r += h.outerHTML);
      return c && (r += c.outerHTML), d.createRange().createContextualFragment(r);
    },
    _convertListCell: function(s) {
      let r = "";
      for (let c = 0, p = s.length, m; c < p; c++)
        m = s[c], m.nodeType === 1 ? n.isList(m) ? r += m.innerHTML : n.isListCell(m) ? r += m.outerHTML : n.isFormatElement(m) ? r += "<li>" + (m.innerHTML.trim() || "<br>") + "</li>" : n.isRangeFormatElement(m) && !n.isTable(m) ? r += this._convertListCell(m) : r += "<li>" + m.outerHTML + "</li>" : r += "<li>" + (m.textContent || "<br>") + "</li>";
      return r;
    },
    _isFormatData: function(s) {
      let r = !1;
      for (let c = 0, p = s.length, m; c < p; c++)
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
      const p = d.createRange().createContextualFragment(s);
      try {
        n._consistencyCheckOfHTML(p, this._htmlCheckWhitelistRegExp, this._htmlCheckBlacklistRegExp, this._classNameFilter, l.strictHTMLValidation);
      } catch (y) {
        console.warn("[SUNEDITOR.cleanHTML.consistencyCheck.fail] " + y);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const y = p.querySelectorAll(this.managedTagsInfo.query);
        for (let C = 0, _ = y.length, k, M; C < _; C++) {
          M = [].slice.call(y[C].classList);
          for (let T = 0, z = M.length; T < z; T++)
            if (k = this.managedTagsInfo.map[M[T]], k) {
              k(y[C]);
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
      return g = n.htmlRemoveWhiteSpace(g), g ? (r && (g = g.replace(typeof r == "string" ? n.createTagsWhitelist(r) : r, "")), c && (g = g.replace(typeof c == "string" ? n.createTagsBlacklist(c) : c, ""))) : g = s, this._tagConvertor(g);
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
      } catch (g) {
        console.warn("[SUNEDITOR.convertContentsForEditor.consistencyCheck.fail] " + g);
      }
      if (this.managedTagsInfo && this.managedTagsInfo.query) {
        const g = r.querySelectorAll(this.managedTagsInfo.query);
        for (let h = 0, y = g.length, C, _; h < y; h++) {
          _ = [].slice.call(g[h].classList);
          for (let k = 0, M = _.length; k < M; k++)
            if (C = this.managedTagsInfo.map[_[k]], C) {
              C(g[h]);
              break;
            }
        }
      }
      const c = r.childNodes;
      let p = "", m = null;
      for (let g = 0, h; g < c.length; g++) {
        if (h = c[g], this.__allowedScriptRegExp.test(h.nodeName)) {
          p += h.outerHTML;
          continue;
        }
        if (!n.isFormatElement(h) && !n.isRangeFormatElement(h) && !n.isComponent(h) && !n.isFigures(h) && h.nodeType !== 8 && !/__se__tag/.test(h.className)) {
          if (m || (m = n.createElement(l.defaultTag)), m.appendChild(h), g--, c[g + 1] && !n.isFormatElement(c[g + 1]))
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
      let c = "";
      const p = f.RegExp, m = new p("^(BLOCKQUOTE|PRE|TABLE|THEAD|TBODY|TR|TH|TD|OL|UL|IMG|IFRAME|VIDEO|AUDIO|FIGURE|FIGCAPTION|HR|BR|CANVAS|SELECT)$", "i"), g = typeof s == "string" ? d.createRange().createContextualFragment(s) : s, h = (function(_) {
        return this.isFormatElement(_) || this.isComponent(_);
      }).bind(n), y = r ? "" : `
`;
      let C = r ? 0 : this._variable.codeIndent * 1;
      return C = C > 0 ? new f.Array(C + 1).join(" ") : "", function _(k, M) {
        const T = k.childNodes, z = m.test(k.nodeName), B = z ? M : "";
        for (let W = 0, Z = T.length, P, D, F, I, V, R; W < Z; W++) {
          if (P = T[W], I = m.test(P.nodeName), D = I ? y : "", F = h(P) && !z && !/^(TH|TD)$/i.test(k.nodeName) ? y : "", P.nodeType === 8) {
            c += `
<!-- ` + P.textContent.trim() + " -->" + D;
            continue;
          }
          if (P.nodeType === 3) {
            n.isList(P.parentElement) || (c += n._HTMLConvertor(/^\n+$/.test(P.data) ? "" : P.data));
            continue;
          }
          if (P.childNodes.length === 0) {
            c += (/^HR$/i.test(P.nodeName) ? y : "") + (/^PRE$/i.test(P.parentElement.nodeName) && /^BR$/i.test(P.nodeName) ? "" : B) + P.outerHTML + D;
            continue;
          }
          P.outerHTML ? (V = P.nodeName.toLowerCase(), R = B || I ? M : "", c += (F || (z ? "" : D)) + R + P.outerHTML.match(p("<" + V + "[^>]*>", "i"))[0] + D, _(P, M + C), c += (/\n$/.test(c) ? R : "") + "</" + V + ">" + (F || D || z || /^(TH|TD)$/i.test(P.nodeName) ? y : "")) : c += new f.XMLSerializer().serializeToString(P);
        }
      }(g, ""), c.trim() + y;
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
      let p = 0;
      if (s && (p = this.getCharLength(s, c)), this._setCharCount(), r > 0) {
        let m = !1;
        const g = w.getCharCount(c);
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
        const c = r || l.charCounterType, p = this.getCharLength(typeof s == "string" ? s : this._charTypeHTML && s.nodeType === 1 ? s.outerHTML : s.textContent, c);
        if (p > 0 && p + w.getCharCount(c) > l.maxCharCount)
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
        for (let p = 1, m = s.length; p < m; p++)
          if (r < s[p]) {
            c = s[p] + "";
            break;
          }
        v._responsiveCurrentSize !== c && (v._responsiveCurrentSize = c, w.setToolbarButtons(v._responsiveButtons[c]));
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
      const r = this.commandMap, c = this.activePlugins;
      for (let p in r)
        s.indexOf(p) > -1 || !n.hasOwn(r, p) || (c.indexOf(p) > -1 ? i[p].active.call(this, null) : r.OUTDENT && /^OUTDENT$/i.test(p) ? n.isImportantDisabled(r.OUTDENT) || r.OUTDENT.setAttribute("disabled", !0) : r.INDENT && /^INDENT$/i.test(p) ? n.isImportantDisabled(r.INDENT) || r.INDENT.removeAttribute("disabled") : n.removeClass(r[p], "active"));
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
      const p = l.__allowedScriptTag ? "" : "script|";
      if (this.__scriptTagRegExp = new c("<(script)[^>]*>([\\s\\S]*?)<\\/\\1>|<script[^>]*\\/?>", "gi"), this.__disallowedTagsRegExp = new c("<(" + p + "style)[^>]*>([\\s\\S]*?)<\\/\\1>|<(" + p + "style)[^>]*\\/?>", "gi"), this.__disallowedTagNameRegExp = new c("^(" + p + "meta|link|style|[a-z]+:[a-z]+)$", "i"), this.__allowedScriptRegExp = new c("^" + (l.__allowedScriptTag ? "script" : "") + "$", "i"), !l.iframe && typeof f.ShadowRoot == "function") {
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
      const m = f.Object.keys(l._textTagsMap), g = l.addTagsWhitelist ? l.addTagsWhitelist.split("|").filter(function(I) {
        return /b|i|ins|s|strike/i.test(I);
      }) : [];
      for (let I = 0; I < g.length; I++)
        m.splice(m.indexOf(g[I].toLowerCase()), 1);
      this._disallowedTextTagsRegExp = m.length === 0 ? null : new c("(<\\/?)(" + m.join("|") + ")\\b\\s*([^>^<]+)?\\s*(?=>)", "gi");
      const h = function(I, V) {
        return I ? I === "*" ? "[a-z-]+" : V ? I + "|" + V : I : "^";
      }, _ = "contenteditable|colspan|rowspan|target|href|download|rel|src|alt|class|type|origin-size" + "|controls|autoplay|loop|muted|poster|preload|playsinline" + "|allowfullscreen|sandbox|loading|allow|referrerpolicy|frameborder|scrolling", k = "data-format|data-size|data-file-size|data-file-name|data-origin|data-align|data-image-link|data-rotate|data-proportion|data-percentage|data-exp|data-font-size";
      this._allowHTMLComments = l._editorTagsWhitelist.indexOf("//") > -1 || l._editorTagsWhitelist === "*", this._htmlCheckWhitelistRegExp = new c("^(" + h(l._editorTagsWhitelist.replace("|//", ""), "") + ")$", "i"), this._htmlCheckBlacklistRegExp = new c("^(" + (l.tagsBlacklist || "^") + ")$", "i"), this.editorTagsWhitelistRegExp = n.createTagsWhitelist(h(l._editorTagsWhitelist.replace("|//", "|<!--|-->"), "")), this.editorTagsBlacklistRegExp = n.createTagsBlacklist(l.tagsBlacklist.replace("|//", "|<!--|-->")), this.pasteTagsWhitelistRegExp = n.createTagsWhitelist(h(l.pasteTagsWhitelist, "")), this.pasteTagsBlacklistRegExp = n.createTagsBlacklist(l.pasteTagsBlacklist);
      const M = '\\s*=\\s*(")[^"]*\\1', T = l.attributesWhitelist;
      let z = {}, B = "";
      if (T)
        for (let I in T)
          !n.hasOwn(T, I) || /^on[a-z]+$/i.test(T[I]) || (I === "all" ? B = h(T[I], _) : z[I] = new c("\\s(?:" + h(T[I], "") + ")" + M, "ig"));
      this._attributesWhitelistRegExp = new c("\\s(?:" + (B || _ + "|" + k) + ")" + M, "ig"), this._attributesWhitelistRegExp_all_data = new c("\\s(?:" + ((B || _) + "|data-[a-z0-9\\-]+") + ")" + M, "ig"), this._attributesTagsWhitelist = z;
      const W = l.attributesBlacklist;
      if (z = {}, B = "", W)
        for (let I in W)
          n.hasOwn(W, I) && (I === "all" ? B = h(W[I], "") : z[I] = new c("\\s(?:" + h(W[I], "") + ")" + M, "ig"));
      this._attributesBlacklistRegExp = new c("\\s(?:" + (B || "^") + ")" + M, "ig"), this._attributesTagsBlacklist = z, this._isInline = /inline/i.test(l.mode), this._isBalloon = /balloon|balloon-always/i.test(l.mode), this._isBalloonAlways = /balloon-always/i.test(l.mode), this._cachingButtons(), this._fileInfoPluginsCheck = [], this._fileInfoPluginsReset = [], this.managedTagsInfo = { query: "", map: {} };
      const Z = [];
      this.activePlugins = [], this._fileManager.tags = [], this._fileManager.pluginMap = {};
      let P = [], D, F;
      for (let I in i)
        if (n.hasOwn(i, I)) {
          if (D = i[I], F = t[I], (D.active || D.action) && F && this.callPlugin(I, null, F), typeof D.checkFileInfo == "function" && typeof D.resetFileInfo == "function" && (this.callPlugin(I, null, F), this._fileInfoPluginsCheck.push(D.checkFileInfo.bind(this)), this._fileInfoPluginsReset.push(D.resetFileInfo.bind(this))), f.Array.isArray(D.fileTags)) {
            const V = D.fileTags;
            this.callPlugin(I, null, F), this._fileManager.tags = this._fileManager.tags.concat(V), P.push(I);
            for (let R = 0, H = V.length; R < H; R++)
              this._fileManager.pluginMap[V[R].toLowerCase()] = I;
          }
          if (D.managedTags) {
            const V = D.managedTags();
            Z.push("." + V.className), this.managedTagsInfo.map[V.className] = V.method.bind(this);
          }
        }
      this.managedTagsInfo.query = Z.toString(), this._fileManager.queryString = this._fileManager.tags.join(","), this._fileManager.regExp = new c("^(" + (this._fileManager.tags.join("|") || "^") + ")$", "i"), this._fileManager.pluginRegExp = new c("^(" + (P.length === 0 ? "^" : P.join("|")) + ")$", "i"), this._variable._originCssText = e.element.topArea.style.cssText, this._placeholder = e.element.placeholder, this._lineBreaker = e.element.lineBreaker, this._lineBreakerButton = this._lineBreaker.querySelector("button"), this.history = ar(this, this._onChange_historyStack.bind(this)), this.addModule([nn]), l.iframe && (this._wd = e.element.wysiwygFrame.contentDocument, e.element.wysiwyg = this._wd.body, l._editorStyles.editor && (e.element.wysiwyg.style.cssText = l._editorStyles.editor), l.height === "auto" && (this._iframeAuto = this._wd.body)), this._initWysiwygArea(s, r);
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
      const r = this.getRange(), c = r.commonAncestorContainer, p = r.startContainer, m = n.getRangeFormatElement(c, null);
      let g, h, y;
      const C = n.getParentElement(c, n.isComponent);
      if (!(C && !n.isTable(C))) {
        if (c.nodeType === 1 && c.getAttribute("data-se-embed") === "true") {
          let _ = c.nextElementSibling;
          n.isFormatElement(_) || (_ = this.appendFormatTag(c, l.defaultTag)), this.setRange(_.firstChild, 0, _.firstChild, 0);
          return;
        }
        if (!((n.isRangeFormatElement(p) || n.isWysiwygDiv(p)) && (n.isComponent(p.children[r.startOffset]) || n.isComponent(p.children[r.startOffset - 1])))) {
          if (n.getParentElement(c, n.isNotCheckingNode)) return null;
          if (m) {
            y = n.createElement(s || l.defaultTag), y.innerHTML = m.innerHTML, y.childNodes.length === 0 && (y.innerHTML = n.zeroWidthSpace), m.innerHTML = y.outerHTML, y = m.firstChild, g = n.getEdgeChildNodes(y, null).sc, g || (g = n.createTextNode(n.zeroWidthSpace), y.insertBefore(g, y.firstChild)), h = g.textContent.length, this.setRange(g, h, g, h);
            return;
          }
          if (n.isRangeFormatElement(c) && c.childNodes.length <= 1) {
            let _ = null;
            c.childNodes.length === 1 && n.isBreak(c.firstChild) ? _ = c.firstChild : (_ = n.createTextNode(n.zeroWidthSpace), c.appendChild(_)), this.setRange(_, 1, _, 1);
            return;
          }
          try {
            if (c.nodeType === 3 && (y = n.createElement(s || l.defaultTag), c.parentNode.insertBefore(y, c), y.appendChild(c)), n.isBreak(y.nextSibling) && n.removeItem(y.nextSibling), n.isBreak(y.previousSibling) && n.removeItem(y.previousSibling), n.isBreak(g)) {
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
      this.context = e = Zi(s.originElement, this._getConstructed(s), l), this._componentsInfoReset = !0, this._editorInit(!0, r);
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
      for (let p in c)
        e.element.wysiwyg.setAttribute(p, c[p]);
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
      let c = null;
      const p = v._keyCodeShortcut[s];
      switch (p) {
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
      return c ? (u.commandHandler(u.commandMap[c], c), !0) : !!p;
    },
    _applyTagEffects: function() {
      if (n.hasClass(e.element.wysiwyg, "se-read-only"))
        return !1;
      let s = u.getSelectionNode();
      if (s === u.effectNode) return;
      u.effectNode = s;
      const r = l.rtl ? "marginRight" : "marginLeft", c = u.commandMap, p = v._onButtonsCheck, m = [], g = [], h = u.activePlugins, y = h.length;
      let C = "";
      for (; s.firstChild; )
        s = s.firstChild;
      for (let _ = s; !n.isWysiwygDiv(_) && _; _ = _.parentNode)
        if (!(_.nodeType !== 1 || n.isBreak(_))) {
          if (C = _.nodeName.toUpperCase(), g.push(C), !u.isReadOnly)
            for (let k = 0, M; k < y; k++)
              M = h[k], m.indexOf(M) === -1 && i[M].active.call(u, _) && m.push(M);
          if (n.isFormatElement(_)) {
            m.indexOf("OUTDENT") === -1 && c.OUTDENT && !n.isImportantDisabled(c.OUTDENT) && (n.isListCell(_) || _.style[r] && n.getNumber(_.style[r], 0) > 0) && (m.push("OUTDENT"), c.OUTDENT.removeAttribute("disabled")), m.indexOf("INDENT") === -1 && c.INDENT && !n.isImportantDisabled(c.INDENT) && (m.push("INDENT"), n.isListCell(_) && !_.previousElementSibling ? c.INDENT.setAttribute("disabled", !0) : c.INDENT.removeAttribute("disabled"));
            continue;
          }
          p && p.test(C) && (m.push(C), n.addClass(c[C], "active"));
        }
      u._setKeyEffect(m), u._variable.currentNodes = g.reverse(), u._variable.currentNodesMap = m, l.showPathLabel && (e.element.navigation.textContent = u._variable.currentNodes.join(" > "));
    },
    _buttonsEventHandler: function(s) {
      let r = s.target;
      if (u._bindControllersOff && s.stopPropagation(), /^(input|textarea|select|option)$/i.test(r.nodeName) ? u._antiBlur = !1 : s.preventDefault(), n.getParentElement(r, ".se-submenu"))
        s.stopPropagation(), u._notHideToolbar = !0;
      else {
        let c = r.getAttribute("data-command"), p = r.className;
        for (; !c && !/se-menu-list/.test(p) && !/sun-editor-common/.test(p); )
          r = r.parentNode, c = r.getAttribute("data-command"), p = r.className;
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
      let r = s.target, c = r.getAttribute("data-display"), p = r.getAttribute("data-command"), m = r.className;
      for (u.controllersOff(); r.parentNode && !p && !/se-menu-list/.test(m) && !/se-toolbar/.test(m); )
        r = r.parentNode, p = r.getAttribute("data-command"), c = r.getAttribute("data-display"), m = r.className;
      !p && !c || r.disabled || u.actionCall(p, c, r);
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
      if (n.isNonEditable(e.element.wysiwyg) || typeof w.onClick == "function" && w.onClick(s, u) === !1) return;
      const c = u.getFileComponent(r);
      if (c) {
        s.preventDefault(), u.selectComponent(c.target, c.pluginName);
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
            const k = n.createElement("LI"), M = m.nextElementSibling;
            k.appendChild(m), h.insertBefore(k, M), u.focus();
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
      const r = s || u.getRange(), c = e.element.toolbar, p = e.element.topArea, m = u.getSelection();
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
      const k = p.offsetWidth, M = v._getEditorOffsets(null), T = M.top, z = M.left;
      if (c.style.top = "-10000px", c.style.visibility = "hidden", c.style.display = "block", !h) {
        const D = u.getSelectionNode();
        if (n.isFormatElement(D)) {
          const F = n.createTextNode(n.zeroWidthSpace);
          u.insertNode(F, null, !1), u.setRange(F, 1, F, 1), u._editorRange(), h = u.getRange().getClientRects(), h = h[g ? 0 : h.length - 1];
        }
        if (!h) {
          const F = n.getOffset(D, e.element.wysiwygFrame);
          h = {
            left: F.left,
            top: F.top,
            right: F.left,
            bottom: F.top + D.offsetHeight,
            noText: !0
          }, C = 0, _ = 0;
        }
        g = !0;
      }
      const B = f.Math.round(e.element._arrow.offsetWidth / 2), W = c.offsetWidth, Z = c.offsetHeight, P = /iframe/i.test(e.element.wysiwygFrame.nodeName) ? e.element.wysiwygFrame.getClientRects()[0] : null;
      if (P && (h = {
        left: h.left + P.left,
        top: h.top + P.top,
        right: h.right + P.right - P.width,
        bottom: h.bottom + P.bottom - P.height
      }), v._setToolbarOffset(g, h, c, z, k, C, _, T, B), (W !== c.offsetWidth || Z !== c.offsetHeight) && v._setToolbarOffset(g, h, c, z, k, C, _, T, B), l.toolbarContainer) {
        const D = p.parentElement;
        let F = l.toolbarContainer, I = F.offsetLeft, V = F.offsetTop;
        for (; !F.parentElement.contains(D) || !/^(BODY|HTML)$/i.test(F.parentElement.nodeName); )
          F = F.offsetParent, I += F.offsetLeft, V += F.offsetTop;
        c.style.left = c.offsetLeft - I + p.offsetLeft + "px", c.style.top = c.offsetTop - V + p.offsetTop + "px";
      }
      c.style.visibility = "";
    },
    _setToolbarOffset: function(s, r, c, p, m, g, h, y, C) {
      const k = c.offsetWidth, M = r.noText && !s ? 0 : c.offsetHeight, T = (s ? r.left : r.right) - p - k / 2 + g, z = T + k - m;
      let B = (s ? r.top - M - C : r.bottom + C) - (r.noText ? 0 : y) + h, W = T < 0 ? 1 : z < 0 ? T : T - z - 1 - 1, Z = !1;
      const P = B + (s ? v._getEditorOffsets(null).top : c.offsetHeight - e.element.wysiwyg.offsetHeight);
      !s && P > 0 && v._getPageBottomSpace() < P ? (s = !0, Z = !0) : s && d.documentElement.offsetTop > P && (s = !1, Z = !0), Z && (B = (s ? r.top - M - C : r.bottom + C) - (r.noText ? 0 : y) + h), c.style.left = f.Math.floor(W) + "px", c.style.top = f.Math.floor(B) + "px", s ? (n.removeClass(e.element._arrow, "se-arrow-up"), n.addClass(e.element._arrow, "se-arrow-down"), e.element._arrow.style.top = M + "px") : (n.removeClass(e.element._arrow, "se-arrow-down"), n.addClass(e.element._arrow, "se-arrow-up"), e.element._arrow.style.top = -C + "px");
      const D = f.Math.floor(k / 2 + (T - W));
      e.element._arrow.style.left = (D + C > c.offsetWidth ? c.offsetWidth - C : D < C ? C : D) + "px";
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
      const r = u.getRange(), c = u.getSelectionNode(), p = n.getFormatElement(c, null);
      if (!p && r.collapsed && !n.isComponent(c) && !n.isList(c)) {
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
      const c = r ? s.startContainer : s.endContainer, p = r ? s.startOffset : s.endOffset, m = r ? "previousSibling" : "nextSibling", g = c.nodeType === 1;
      let h;
      return g ? (h = v._isUneditableNode_getSibling(c.childNodes[p], m, c), h && h.nodeType === 1 && h.getAttribute("contenteditable") === "false") : (h = v._isUneditableNode_getSibling(c, m, c), u.isEdgePoint(c, p, r ? "start" : "end") && h && h.nodeType === 1 && h.getAttribute("contenteditable") === "false");
    },
    _isUneditableNode_getSibling: function(s, r, c) {
      if (!s) return null;
      let p = s[r];
      if (!p)
        if (p = n.getFormatElement(c), p = p ? p[r] : null, p && !n.isComponent(p)) p = r === "previousSibling" ? p.firstChild : p.lastChild;
        else return null;
      return p;
    },
    _onShortcutKey: !1,
    onKeyDown_wysiwyg: function(s) {
      let r = u.getSelectionNode();
      if (n.isInputElement(r)) return;
      const c = s.keyCode, p = s.shiftKey, m = s.ctrlKey || s.metaKey || c === 91 || c === 92 || c === 224, g = s.altKey;
      if (v._IEisComposing = c === 229, !m && u.isReadOnly && !v._cursorMoveKeyCode.test(c))
        return s.preventDefault(), !1;
      if (u.submenuOff(), u._isBalloon && v._hideToolbar(), typeof w.onKeyDown == "function" && w.onKeyDown(s, u) === !1) return;
      if (m && v._shortcutCommand(c, p))
        return v._onShortcutKey = !0, s.preventDefault(), s.stopPropagation(), !1;
      v._onShortcutKey && (v._onShortcutKey = !1), c === 13 && n.isFormatElement(u.getRange().startContainer) && (u._resetRangeToTextNode(), r = u.getSelectionNode());
      const h = u.getRange(), y = !h.collapsed || h.startContainer !== h.endContainer, C = u._fileManager.pluginRegExp.test(u.currentControllerName) ? u.currentControllerName : "";
      let _ = n.getFormatElement(r, null) || r, k = n.getRangeFormatElement(_, null);
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
            if (!y && !_.previousElementSibling && h.startOffset === 0 && !r.previousSibling && !n.isListCell(_) && n.isFormatElement(_) && (!n.isFreeFormatElement(_) || n.isClosureFreeFormatElement(_))) {
              if (n.isClosureRangeFormatElement(_.parentNode))
                return s.preventDefault(), s.stopPropagation(), !1;
              if (n.isWysiwygDiv(_.parentNode) && _.childNodes.length <= 1 && (!_.firstChild || n.onlyZeroWidthSpace(_.textContent))) {
                if (s.preventDefault(), s.stopPropagation(), _.nodeName.toUpperCase() === l.defaultTag.toUpperCase()) {
                  _.innerHTML = "<br>";
                  const R = _.attributes;
                  for (; R[0]; )
                    _.removeAttribute(R[0].name);
                } else {
                  const R = n.createElement(l.defaultTag);
                  R.innerHTML = "<br>", _.parentElement.replaceChild(R, _);
                }
                return u.nativeFocus(), !1;
              }
            }
            const T = h.startContainer;
            if (_ && !_.previousElementSibling && h.startOffset === 0 && T.nodeType === 3 && !n.isFormatElement(T.parentNode)) {
              let R = T.parentNode.previousSibling;
              const H = T.parentNode.nextSibling;
              R || (H ? R = H : (R = n.createElement("BR"), _.appendChild(R)));
              let N = T;
              for (; _.contains(N) && !N.previousSibling; )
                N = N.parentNode;
              if (!_.contains(N)) {
                T.textContent = "", n.removeItemAllParents(T, null, _);
                break;
              }
            }
            if (v._isUneditableNode(h, !0)) {
              s.preventDefault(), s.stopPropagation();
              break;
            }
            !y && u._isEdgeFormat(h.startContainer, h.startOffset, "start") && n.isFormatElement(_.previousElementSibling) && (u._formatAttrsTemp = _.previousElementSibling.attributes);
            const z = h.commonAncestorContainer;
            if (_ = n.getFormatElement(h.startContainer, null), k = n.getRangeFormatElement(_, null), k && _ && !n.isCell(k) && !/^FIGCAPTION$/i.test(k.nodeName)) {
              if (n.isListCell(_) && n.isList(k) && (n.isListCell(k.parentNode) || _.previousElementSibling) && (r === _ || r.nodeType === 3 && (!r.previousSibling || n.isList(r.previousSibling))) && (n.getFormatElement(h.startContainer, null) !== n.getFormatElement(h.endContainer, null) ? k.contains(h.startContainer) : h.startOffset === 0 && h.collapsed)) {
                if (h.startContainer !== h.endContainer)
                  s.preventDefault(), u.removeNode(), h.startContainer.nodeType === 3 && u.setRange(h.startContainer, h.startContainer.textContent.length, h.startContainer, h.startContainer.textContent.length), u.history.push(!0);
                else {
                  let R = _.previousElementSibling || k.parentNode;
                  if (n.isListCell(R)) {
                    s.preventDefault();
                    let H = R;
                    if (!R.contains(_) && n.isListCell(H) && n.isList(H.lastElementChild)) {
                      for (H = H.lastElementChild.lastElementChild; n.isListCell(H) && n.isList(H.lastElementChild); )
                        H = H.lastElementChild && H.lastElementChild.lastElementChild;
                      R = H;
                    }
                    let N = R === k.parentNode ? k.previousSibling : R.lastChild;
                    N || (N = n.createTextNode(n.zeroWidthSpace), k.parentNode.insertBefore(N, k.parentNode.firstChild));
                    const L = N.nodeType === 3 ? N.textContent.length : 1, K = _.childNodes;
                    let $ = N, X = K[0];
                    for (; X = K[0]; )
                      R.insertBefore(X, $.nextSibling), $ = X;
                    n.removeItem(_), k.children.length === 0 && n.removeItem(k), u.setRange(N, L, N, L), u.history.push(!0);
                  }
                }
                break;
              }
              if (!y && h.startOffset === 0) {
                let R = !0, H = z;
                for (; H && H !== k && !n.isWysiwygDiv(H); ) {
                  if (H.previousSibling && (H.previousSibling.nodeType === 1 || !n.onlyZeroWidthSpace(H.previousSibling.textContent.trim()))) {
                    R = !1;
                    break;
                  }
                  H = H.parentNode;
                }
                if (R && k.parentNode) {
                  s.preventDefault(), u.detachRangeFormatElement(k, n.isListCell(_) ? [_] : null, null, !1, !1), u.history.push(!0);
                  break;
                }
              }
            }
            if (!y && _ && (h.startOffset === 0 || r === _ && _.childNodes[h.startOffset])) {
              const R = r === _ ? _.childNodes[h.startOffset] : r, H = _.previousSibling, N = (z.nodeType === 3 || n.isBreak(z)) && !z.previousSibling && h.startOffset === 0;
              if (R && !R.previousSibling && (z && n.isComponent(z.previousSibling) || N && n.isComponent(H))) {
                const L = u.getFileComponent(H);
                L ? (s.preventDefault(), s.stopPropagation(), _.textContent.length === 0 && n.removeItem(_), u.selectComponent(L.target, L.pluginName) === !1 && u.blur()) : n.isComponent(H) && (s.preventDefault(), s.stopPropagation(), n.removeItem(H));
                break;
              }
              if (R && n.isNonEditable(R.previousSibling)) {
                s.preventDefault(), s.stopPropagation(), n.removeItem(R.previousSibling);
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
              const R = _.nextElementSibling;
              if (!R) break;
              if (n.isComponent(R)) {
                if (s.preventDefault(), n.onlyZeroWidthSpace(_) && (n.removeItem(_), n.isTable(R))) {
                  let N = n.getChildElement(R, n.isCell, !1);
                  N = N.firstElementChild || N, u.setRange(N, 0, N, 0);
                  break;
                }
                const H = u.getFileComponent(R);
                H ? (s.stopPropagation(), u.selectComponent(H.target, H.pluginName) === !1 && u.blur()) : n.isComponent(R) && (s.stopPropagation(), n.removeItem(R));
                break;
              }
            }
            if (!y && (u.isEdgePoint(h.endContainer, h.endOffset) || r === _ && _.childNodes[h.startOffset])) {
              const R = r === _ && _.childNodes[h.startOffset] || r;
              if (R && n.isNonEditable(R.nextSibling)) {
                s.preventDefault(), s.stopPropagation(), n.removeItem(R.nextSibling);
                break;
              } else if (n.isComponent(R)) {
                s.preventDefault(), s.stopPropagation(), n.removeItem(R);
                break;
              }
            }
            if (!y && u._isEdgeFormat(h.endContainer, h.endOffset, "end") && n.isFormatElement(_.nextElementSibling) && (u._formatAttrsTemp = _.attributes), _ = n.getFormatElement(h.startContainer, null), k = n.getRangeFormatElement(_, null), n.isListCell(_) && n.isList(k) && (r === _ || r.nodeType === 3 && (!r.nextSibling || n.isList(r.nextSibling)) && (n.getFormatElement(h.startContainer, null) !== n.getFormatElement(h.endContainer, null) ? k.contains(h.endContainer) : h.endOffset === r.textContent.length && h.collapsed))) {
              h.startContainer !== h.endContainer && u.removeNode();
              let R = n.getArrayItem(_.children, n.isList, !1);
              if (R = R || _.nextElementSibling || k.parentNode.nextElementSibling, R && (n.isList(R) || n.getArrayItem(R.children, n.isList, !1))) {
                s.preventDefault();
                let H, N;
                if (n.isList(R)) {
                  const L = R.firstElementChild;
                  for (N = L.childNodes, H = N[0]; N[0]; )
                    _.insertBefore(N[0], R);
                  n.removeItem(L);
                } else {
                  for (H = R.firstChild, N = R.childNodes; N[0]; )
                    _.appendChild(N[0]);
                  n.removeItem(R);
                }
                u.setRange(H, 0, H, 0), u.history.push(!0);
              }
              break;
            }
            break;
          case 9:
            if (C || l.tabDisable || (s.preventDefault(), m || g || n.isWysiwygDiv(r))) break;
            const B = !h.collapsed || u.isEdgePoint(h.startContainer, h.startOffset), W = u.getSelectedElements(null);
            r = u.getSelectionNode();
            const Z = [];
            let P = [], D = n.isListCell(W[0]), F = n.isListCell(W[W.length - 1]), I = { sc: h.startContainer, so: h.startOffset, ec: h.endContainer, eo: h.endOffset };
            for (let R = 0, H = W.length, N; R < H; R++)
              if (N = W[R], n.isListCell(N)) {
                if (!N.previousElementSibling && !p)
                  continue;
                Z.push(N);
              } else
                P.push(N);
            if (Z.length > 0 && B && u.plugins.list)
              I = u.plugins.list.editInsideList.call(u, p, Z);
            else {
              const R = n.getParentElement(r, n.isCell);
              if (R && B) {
                const H = n.getParentElement(R, "table"), N = n.getListChildren(H, n.isCell);
                let L = p ? n.prevIdx(N, R) : n.nextIdx(N, R);
                L === N.length && !p && (L = 0), L === -1 && p && (L = N.length - 1);
                let K = N[L];
                if (!K) break;
                K = K.firstElementChild || K, u.setRange(K, 0, K, 0);
                break;
              }
              P = P.concat(Z), D = F = null;
            }
            if (P.length > 0)
              if (p) {
                const R = P.length - 1;
                for (let L = 0, K; L <= R; L++) {
                  K = P[L].childNodes;
                  for (let $ = 0, X = K.length, G; $ < X && (G = K[$], !!G); $++)
                    if (!n.onlyZeroWidthSpace(G)) {
                      /^\s{1,4}$/.test(G.textContent) ? n.removeItem(G) : /^\s{1,4}/.test(G.textContent) && (G.textContent = G.textContent.replace(/^\s{1,4}/, ""));
                      break;
                    }
                }
                const H = n.getChildElement(P[0], "text", !1), N = n.getChildElement(P[R], "text", !0);
                !D && H && (I.sc = H, I.so = 0), !F && N && (I.ec = N, I.eo = N.textContent.length);
              } else {
                const R = n.createTextNode(new f.Array(u._variable.tabSize + 1).join(" "));
                if (P.length === 1) {
                  if (!u.insertNode(R, null, !0)) return !1;
                  D || (I.sc = R, I.so = R.length), F || (I.ec = R, I.eo = R.length);
                } else {
                  const H = P.length - 1;
                  for (let K = 0, $; K <= H; K++)
                    $ = P[K].firstChild, $ && (n.isBreak($) ? P[K].insertBefore(R.cloneNode(!1), $) : $.textContent = R.textContent + $.textContent);
                  const N = n.getChildElement(P[0], "text", !1), L = n.getChildElement(P[H], "text", !0);
                  !D && N && (I.sc = N, I.so = 0), !F && L && (I.ec = L, I.eo = L.textContent.length);
                }
              }
            u.setRange(I.sc, I.so, I.ec, I.eo), u.history.push(!1);
            break;
          case 13:
            const V = n.getFreeFormatElement(r, null);
            if (u._charTypeHTML) {
              let R = "";
              if (!p && V || p ? R = "<br>" : R = "<" + _.nodeName + "><br></" + _.nodeName + ">", !u.checkCharCount(R, "byte-html"))
                return s.preventDefault(), !1;
            }
            if (!p && !C) {
              const R = u._isEdgeFormat(h.endContainer, h.endOffset, "end"), H = u._isEdgeFormat(h.startContainer, h.startOffset, "start");
              if (R && (/^H[1-6]$/i.test(_.nodeName) || /^HR$/i.test(_.nodeName))) {
                v._enterPrevent(s);
                let N = null;
                const L = u.appendFormatTag(_, l.defaultTag);
                if (R && R.length > 0) {
                  N = R.pop();
                  const K = N;
                  for (; R.length > 0; )
                    N = N.appendChild(R.pop());
                  L.appendChild(K);
                }
                if (N = N ? N.appendChild(L.firstChild) : L.firstChild, n.isBreak(N)) {
                  const K = n.createTextNode(n.zeroWidthSpace);
                  N.parentNode.insertBefore(K, N), u.setRange(K, 1, K, 1);
                } else
                  u.setRange(N, 0, N, 0);
                break;
              } else if (k && _ && !n.isCell(k) && !/^FIGCAPTION$/i.test(k.nodeName)) {
                const N = u.getRange();
                if (u.isEdgePoint(N.endContainer, N.endOffset) && n.isList(r.nextSibling)) {
                  v._enterPrevent(s);
                  const L = n.createElement("LI"), K = n.createElement("BR");
                  L.appendChild(K), _.parentNode.insertBefore(L, _.nextElementSibling), L.appendChild(r.nextSibling), u.setRange(K, 1, K, 1);
                  break;
                }
                if ((N.commonAncestorContainer.nodeType !== 3 || !N.commonAncestorContainer.nextElementSibling) && n.onlyZeroWidthSpace(_.innerText.trim()) && !n.isListCell(_.nextElementSibling)) {
                  v._enterPrevent(s);
                  let L = null;
                  if (n.isListCell(k.parentNode)) {
                    const K = _.parentNode.parentNode;
                    k = K.parentNode;
                    const $ = n.createElement("LI");
                    $.innerHTML = "<br>", n.copyTagAttributes($, _, l.lineAttrReset), L = $, k.insertBefore(L, K.nextElementSibling);
                  } else {
                    const K = n.isCell(k.parentNode) ? "DIV" : n.isList(k.parentNode) ? "LI" : n.isFormatElement(k.nextElementSibling) && !n.isRangeFormatElement(k.nextElementSibling) ? k.nextElementSibling.nodeName : n.isFormatElement(k.previousElementSibling) && !n.isRangeFormatElement(k.previousElementSibling) ? k.previousElementSibling.nodeName : l.defaultTag;
                    L = n.createElement(K), n.copyTagAttributes(L, _, l.lineAttrReset);
                    const $ = u.detachRangeFormatElement(k, [_], null, !0, !0);
                    $.cc.insertBefore(L, $.ec);
                  }
                  L.innerHTML = "<br>", n.removeItemAllParents(_, null, null), u.setRange(L, 1, L, 1);
                  break;
                }
              }
              if (V) {
                v._enterPrevent(s);
                const N = r === V, L = u.getSelection(), K = r.childNodes, $ = L.focusOffset, X = r.previousElementSibling, G = r.nextSibling;
                if (!n.isClosureFreeFormatElement(V) && K && (N && h.collapsed && K.length - 1 <= $ + 1 && n.isBreak(K[$]) && (!K[$ + 1] || (!K[$ + 2] || n.onlyZeroWidthSpace(K[$ + 2].textContent)) && K[$ + 1].nodeType === 3 && n.onlyZeroWidthSpace(K[$ + 1].textContent)) && $ > 0 && n.isBreak(K[$ - 1]) || !N && n.onlyZeroWidthSpace(r.textContent) && n.isBreak(X) && (n.isBreak(X.previousSibling) || !n.onlyZeroWidthSpace(X.previousSibling.textContent)) && (!G || !n.isBreak(G) && n.onlyZeroWidthSpace(G.textContent)))) {
                  N ? n.removeItem(K[$ - 1]) : n.removeItem(r);
                  const Y = u.appendFormatTag(V, n.isFormatElement(V.nextElementSibling) && !n.isRangeFormatElement(V.nextElementSibling) ? V.nextElementSibling : null);
                  n.copyFormatAttributes(Y, V), u.setRange(Y, 1, Y, 1);
                  break;
                }
                if (N) {
                  w.insertHTML(h.collapsed && n.isBreak(h.startContainer.childNodes[h.startOffset - 1]) ? "<br>" : "<br><br>", !0, !1);
                  let Y = L.focusNode;
                  const ie = L.focusOffset;
                  V === Y && (Y = Y.childNodes[ie - $ > 1 ? ie - 1 : ie]), u.setRange(Y, 1, Y, 1);
                } else {
                  const Y = L.focusNode.nextSibling, ie = n.createElement("BR");
                  u.insertNode(ie, null, !1);
                  const ue = ie.previousSibling, ce = ie.nextSibling;
                  !n.isBreak(Y) && !n.isBreak(ue) && (!ce || n.onlyZeroWidthSpace(ce)) ? (ie.parentNode.insertBefore(ie.cloneNode(!1), ie), u.setRange(ie, 1, ie, 1)) : u.setRange(ce, 0, ce, 0);
                }
                v._onShortcutKey = !0;
                break;
              }
              if (h.collapsed && (H || R)) {
                v._enterPrevent(s);
                const N = n.createElement("BR"), L = n.createElement(_.nodeName);
                n.copyTagAttributes(L, _, l.lineAttrReset);
                let K = N;
                do {
                  if (!n.isBreak(r) && r.nodeType === 1) {
                    const $ = r.cloneNode(!1);
                    $.appendChild(K), K = $;
                  }
                  r = r.parentNode;
                } while (_ !== r && _.contains(r));
                L.appendChild(K), _.parentNode.insertBefore(L, H && !R ? _ : _.nextElementSibling), R && u.setRange(N, 1, N, 1);
                break;
              }
              if (_) {
                s.stopPropagation();
                let N, L = 0;
                if (h.collapsed)
                  n.onlyZeroWidthSpace(_) ? N = u.appendFormatTag(_, _.cloneNode(!1)) : N = n.splitElement(h.endContainer, h.endOffset, n.getElementDepth(_));
                else {
                  const K = n.getFormatElement(h.startContainer, null) !== n.getFormatElement(h.endContainer, null), $ = _.cloneNode(!1);
                  $.innerHTML = "<br>";
                  const X = h.commonAncestorContainer, G = X === h.startContainer && X === h.endContainer && n.onlyZeroWidthSpace(X) ? h : u.removeNode();
                  if (N = n.getFormatElement(G.container, null), !N) {
                    n.isWysiwygDiv(G.container) && (v._enterPrevent(s), e.element.wysiwyg.appendChild($), N = $, n.copyTagAttributes(N, _, l.lineAttrReset), u.setRange(N, L, N, L));
                    break;
                  }
                  const Y = n.getRangeFormatElement(G.container);
                  if (N = N.contains(Y) ? n.getChildElement(Y, n.getFormatElement.bind(n)) : N, K) {
                    if (R && !H)
                      N.parentNode.insertBefore($, !G.prevContainer || G.container === G.prevContainer ? N.nextElementSibling : N), N = $, L = 0;
                    else if (L = G.offset, H) {
                      const ie = N.parentNode.insertBefore($, N);
                      R && (N = ie, L = 0);
                    }
                  } else
                    R && H ? (N.parentNode.insertBefore($, G.prevContainer && G.container === G.prevContainer ? N.nextElementSibling : N), N = $, L = 0) : N = n.splitElement(G.container, G.offset, n.getElementDepth(_));
                }
                v._enterPrevent(s), n.copyTagAttributes(N, _, l.lineAttrReset), u.setRange(N, L, N, L);
                break;
              }
            }
            if (y) break;
            if (k && n.getParentElement(k, "FIGCAPTION") && n.getParentElement(k, n.isList) && (v._enterPrevent(s), _ = u.appendFormatTag(_, null), u.setRange(_, 0, _, 0)), C) {
              s.preventDefault(), s.stopPropagation(), u.containerOff(), u.controllersOff();
              const R = e[C], H = R._container, N = H.previousElementSibling || H.nextElementSibling;
              let L = null;
              n.isListCell(H.parentNode) ? L = n.createElement("BR") : (L = n.createElement(n.isFormatElement(N) && !n.isRangeFormatElement(N) ? N.nodeName : l.defaultTag), L.innerHTML = "<br>"), p ? H.parentNode.insertBefore(L, H) : H.parentNode.insertBefore(L, H.nextElementSibling), u.callPlugin(C, function() {
                u.selectComponent(R._element, C) === !1 && u.blur();
              }, null);
            }
            break;
          case 27:
            if (C)
              return s.preventDefault(), s.stopPropagation(), u.controllersOff(), !1;
            break;
        }
        if (p && c === 16) {
          s.preventDefault(), s.stopPropagation();
          const T = u.plugins.table;
          if (T && !T._shift && !T._ref) {
            const z = n.getParentElement(_, n.isCell);
            if (z) {
              T.onTableCellMultiSelect.call(u, z, !0);
              return;
            }
          }
        } else if (p && (n.isOSX_IOS ? g : m) && c === 32) {
          s.preventDefault(), s.stopPropagation();
          const T = u.insertNode(n.createTextNode(" "));
          if (T) {
            u.setRange(T, T.length, T, T.length);
            return;
          }
        }
        if (n.isIE && !m && !g && !y && !v._nonTextKeyCode.test(c) && n.isBreak(h.commonAncestorContainer)) {
          const T = n.createTextNode(n.zeroWidthSpace);
          u.insertNode(T, null, !1), u.setRange(T, 1, T, 1);
        }
        v._directionKeyCode.test(c) && (f.setTimeout(u._editorRange.bind(u), 0), v._applyTagEffects());
      }
    },
    _onKeyDown_wysiwyg_arrowKey: function(s) {
      if (s.shiftKey) return;
      let r = u.getSelectionNode();
      const c = function(g, h) {
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
        const k = _ === y, M = _ === C;
        let T = null, z = 0;
        if (s.keyCode === 38 && k) {
          const B = g && g.previousElementSibling;
          for (B ? T = B.children[h.cellIndex] : T = n.getPreviousDeepestNode(p, u.context.element.wysiwyg); T && T.lastChild; ) T = T.lastChild;
          T && (z = T.textContent.length);
        } else if (s.keyCode === 40 && M) {
          const B = g && g.nextElementSibling;
          for (B ? T = B.children[h.cellIndex] : T = n.getNextDeepestNode(p, u.context.element.wysiwyg); T && T.firstChild; ) T = T.firstChild;
        }
        if (T)
          return c(T, z), !1;
      }
      const m = u.getFileComponent(r);
      if (m) {
        const g = /37|38/.test(s.keyCode), h = /39|40/.test(s.keyCode);
        if (g) {
          const y = n.getPreviousDeepestNode(m.target, u.context.element.wysiwyg);
          c(y, y && y.textContent.length);
        } else if (h) {
          const y = n.getNextDeepestNode(m.target, u.context.element.wysiwyg);
          c(y);
        }
      }
    },
    onKeyUp_wysiwyg: function(s) {
      if (v._onShortcutKey) return;
      u._editorRange();
      const r = s.keyCode, c = s.ctrlKey || s.metaKey || r === 91 || r === 92 || r === 224, p = s.altKey;
      if (u.isReadOnly) {
        !c && v._cursorMoveKeyCode.test(r) && v._applyTagEffects();
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
        const T = n.createElement(n.isFormatElement(u._variable.currentNodes[0]) ? u._variable.currentNodes[0] : l.defaultTag);
        T.innerHTML = "<br>", g.appendChild(T), u.setRange(T, 0, T, 0), v._applyTagEffects(), u.history.push(!1);
        return;
      }
      const C = n.getFormatElement(g, null), _ = n.getRangeFormatElement(g, null), k = u._formatAttrsTemp;
      if (k) {
        for (let T = 0, z = k.length; T < z; T++) {
          if (r === 13 && /^id$/i.test(k[T].name)) {
            C.removeAttribute("id");
            continue;
          }
          C.setAttribute(k[T].name, k[T].value);
        }
        u._formatAttrsTemp = null;
      }
      if (!C && m.collapsed && !n.isComponent(g) && !n.isList(g) && u._setDefaultFormat(n.isRangeFormatElement(_) ? "DIV" : l.defaultTag) !== null && (g = u.getSelectionNode()), !c && !p && !v._nonTextKeyCode.test(r) && g.nodeType === 3 && n.zeroWidthRegExp.test(g.textContent) && !(s.isComposing !== void 0 ? s.isComposing : v._IEisComposing)) {
        let T = m.startOffset, z = m.endOffset;
        const B = (g.textContent.substring(0, z).match(v._frontZeroWidthReg) || "").length;
        T = m.startOffset - B, z = m.endOffset - B, g.textContent = g.textContent.replace(n.zeroWidthRegExp, ""), u.setRange(g, T < 0 ? 0 : T, g, z < 0 ? 0 : z);
      }
      v._deleteKeyCode.test(r) && C && n.onlyZeroWidthSpace(C.textContent) && !C.previousElementSibling && (C.innerHTML = "<br>", u.setRange(C, 0, C, 0)), u._charCount(""), !(typeof w.onKeyUp == "function" && w.onKeyUp(s, u) === !1) && !c && !p && !v._historyIgnoreKeyCode.test(r) && u.history.push(!0);
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
      const s = e.element, r = s.editorArea.offsetHeight, c = (this.scrollY || d.documentElement.scrollTop) + l.stickyToolbar, p = v._getEditorOffsets(l.toolbarContainer).top - (u._isInline ? s.toolbar.offsetHeight : 0), m = u._isInline && c - p > 0 ? c - p - e.element.toolbar.offsetHeight : 0;
      c < p ? v._offStickyToolbar() : c + u._variable.minResizingSize >= r + p ? (u._sticky || v._onStickyToolbar(m), s.toolbar.style.top = m + r + p + l.stickyToolbar - c - u._variable.minResizingSize + "px") : c >= p && v._onStickyToolbar(m);
    },
    _getEditorOffsets: function(s) {
      let r = s || e.element.topArea, c = 0, p = 0, m = 0;
      for (; r; )
        c += r.offsetTop, p += r.offsetLeft, m += r.scrollTop, r = r.offsetParent;
      return {
        top: c,
        left: p,
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
      const s = u.getRange(), r = s.startContainer, c = s.endContainer, p = n.getRangeFormatElement(r), m = n.getRangeFormatElement(c), g = n.isCell(p), h = n.isCell(m), y = s.commonAncestorContainer;
      if ((g && !p.previousElementSibling && !p.parentElement.previousElementSibling || h && !m.nextElementSibling && !m.parentElement.nextElementSibling) && p !== m)
        if (!g)
          n.removeItem(n.getParentElement(m, function(k) {
            return y === k.parentNode;
          }));
        else if (!h)
          n.removeItem(n.getParentElement(p, function(k) {
            return y === k.parentNode;
          }));
        else
          return n.removeItem(n.getParentElement(p, function(k) {
            return y === k.parentNode;
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
      if (typeof w.onCopy == "function" && w.onCopy(s, r, u) === !1)
        return s.preventDefault(), s.stopPropagation(), !1;
      const c = u.currentFileComponentInfo;
      c && !n.isIE && (v._setClipboardComponent(s, c, r), n.addClass(c.component, "se-component-copy"), f.setTimeout(function() {
        n.removeClass(c.component, "se-component-copy");
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
        const p = n.getParentElement(r.startContainer, n.isComponent);
        p && (r.startContainer = p, r.startOffset = 0, r.endContainer = p, r.endOffset = 0);
      }
      u.setRange(r.startContainer, r.startOffset, r.endContainer, r.endOffset);
    },
    _dataTransferAction: function(s, r, c) {
      let p, m;
      if (n.isIE) {
        p = c.getData("Text");
        const g = u.getRange(), h = n.createElement("DIV"), y = {
          sc: g.startContainer,
          so: g.startOffset,
          ec: g.endContainer,
          eo: g.endOffset
        };
        return h.setAttribute("contenteditable", !0), h.style.cssText = "position:absolute; top:0; left:0; width:1px; height:1px; overflow:hidden;", e.element.relative.appendChild(h), h.focus(), f.setTimeout(function() {
          m = h.innerHTML, n.removeItem(h), u.setRange(y.sc, y.so, y.ec, y.eo), v._setClipboardData(s, r, p, m, c);
        }), !0;
      } else if (p = c.getData("text/plain"), m = c.getData("text/html"), v._setClipboardData(s, r, p, m, c) === !1)
        return r.preventDefault(), r.stopPropagation(), !1;
    },
    _setClipboardData: function(s, r, c, p, m) {
      const g = /class=["']*Mso(Normal|List)/i.test(p) || /content=["']*Word.Document/i.test(p) || /content=["']*OneNote.File/i.test(p) || /content=["']*Excel.Sheet/i.test(p);
      !p ? p = n._HTMLConvertor(c).replace(/\n/g, "<br>") : (p = p.replace(/^<html>\r?\n?<body>\r?\n?\x3C!--StartFragment--\>|\x3C!--EndFragment-->\r?\n?<\/body\>\r?\n?<\/html>$/g, ""), g && (p = p.replace(/\n/g, " "), c = c.replace(/\n/g, " ")), p = u.cleanHTML(p, u.pasteTagsWhitelistRegExp, u.pasteTagsBlacklistRegExp));
      const y = u._charCount(u._charTypeHTML ? p : c);
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
      const r = n.getParentElement(s.target, n.isComponent), c = u._lineBreaker.style;
      if (r && !u.currentControllerName) {
        const p = e.element;
        let m = 0, g = p.wysiwyg;
        do
          m += g.scrollTop, g = g.parentElement;
        while (g && !/^(BODY|HTML)$/i.test(g.nodeName));
        const h = p.wysiwyg.scrollTop, y = v._getEditorOffsets(null), C = n.getOffset(r, p.wysiwygFrame).top + h, _ = s.pageY + m + (l.iframe && !l.toolbarContainer ? p.toolbar.offsetHeight : 0), k = C + (l.iframe ? m : y.top), M = n.isListCell(r.parentNode);
        let T = "", z = "";
        if ((M ? !r.previousSibling : !n.isFormatElement(r.previousElementSibling)) && _ < k + 20)
          z = C, T = "t";
        else if ((M ? !r.nextSibling : !n.isFormatElement(r.nextElementSibling)) && _ > k + r.offsetHeight - 20)
          z = C + r.offsetHeight, T = "b";
        else {
          c.display = "none";
          return;
        }
        u._variable._lineBreakComp = r, u._variable._lineBreakDir = T, c.top = z - h + "px", u._lineBreakerButton.style.left = n.getOffset(r).left + r.offsetWidth / 2 - 15 + "px", c.display = "block";
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
      const r = u._variable._lineBreakComp, c = this ? this : u._variable._lineBreakDir, p = n.isListCell(r.parentNode), m = n.createElement(p ? "BR" : n.isCell(r.parentNode) ? "DIV" : l.defaultTag);
      if (p || (m.innerHTML = "<br>"), u._charTypeHTML && !u.checkCharCount(m.outerHTML, "byte-html")) return;
      r.parentNode.insertBefore(m, c === "t" ? r : r.nextSibling), u._lineBreaker.style.display = "none", u._variable._lineBreakComp = null;
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
      for (let c = 1, p = a.length, m, g; c < p; c++)
        g = a[c], m = g[0] * 1, s.push(m), r[m] = g[1];
      s.sort(function(c, p) {
        return c - p;
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
      const r = Wi._createToolBar(d, s, u.plugins, l);
      a = r.responsiveButtons, v._setResponsiveToolbar(), e.element.toolbar.replaceChild(r._buttonTray, e.element._buttonTray);
      const c = Zi(e.element.originElement, u._getConstructed(e.element), l);
      e.element = c.element, e.tool = c.tool, l.iframe && (e.element.wysiwyg = u._wd.body), u._recoverButtonStates(), u._cachingButtons(), u.history._resetCachingButton(), u.effectNode = null, u.hasFocus && v._applyTagEffects(), u.isReadOnly && n.setDisabledButtons(!0, u.resizingDisabledButtons), typeof w.onSetToolbarButtons == "function" && w.onSetToolbarButtons(r._buttonTray.querySelectorAll("button"), u);
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
              C = C.length ? C : f.Object.keys(C).map(function(k) {
                return C[k];
              }), _ = _.length ? _ : f.Object.keys(_).map(function(k) {
                return _[k];
              }), g[y] = _.filter(function(k) {
                return C.indexOf(k) === -1;
              }).concat(C);
            } else
              g[y] = h[y];
        return g;
      }, {}), c = e.element, p = c.wysiwyg.innerHTML, m = Wi._setOptions(r, e, l);
      m.callButtons && (t = m.callButtons, u.initPlugins = {}), m.plugins && (u.plugins = i = m.plugins), c._menuTray.children.length === 0 && (this._menuTray = {}), a = m.toolbar.responsiveButtons, u.options = l = r, u.lang = o = l.lang, l.iframe && c.wysiwygFrame.addEventListener("load", function() {
        n._setIframeDocument(this, l), u._setOptionsInit(c, p);
      }), c.editorArea.appendChild(c.wysiwygFrame), l.iframe || u._setOptionsInit(c, p);
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
    insertHTML: function(s, r, c, p) {
      if (e.element.wysiwygFrame.contains(u.getSelection().focusNode) || u.focus(), typeof s == "string") {
        r || (s = u.cleanHTML(s, null, null));
        try {
          if (n.isListCell(n.getFormatElement(u.getSelectionNode(), null))) {
            const z = d.createRange().createContextualFragment(s).childNodes;
            u._isFormatData(z) && (s = u._convertListCell(z));
          }
          const g = d.createRange().createContextualFragment(s).childNodes;
          if (c) {
            const T = u._charTypeHTML ? "outerHTML" : "textContent";
            let z = "";
            for (let B = 0, W = g.length; B < W; B++)
              z += g[B][T];
            if (!u.checkCharCount(z, null)) return;
          }
          let h, y, C, _, k;
          for (; h = g[0]; ) {
            if (_ && _.nodeType === 3 && y && y.nodeType === 1 && n.isBreak(h)) {
              _ = h, n.removeItem(h);
              continue;
            }
            C = u.insertNode(h, y, !1), y = C.container || C, k || (k = C), _ = h;
          }
          _.nodeType === 3 && y.nodeType === 1 && (y = _);
          const M = y.nodeType === 3 ? C.endOffset || y.textContent.length : y.childNodes.length;
          p ? u.setRange(k.container || k, k.startOffset || 0, y, M) : u.setRange(y, M, y, M);
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
        const p = e.element.wysiwyg, m = c.children;
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
  let x = e.element, E = x.originElement, A = x.topArea;
  return E.style.display = "none", A.style.display = "block", l.iframe && x.wysiwygFrame.addEventListener("load", function() {
    n._setIframeDocument(this, l), u._editorInit(!1, l.value), l.value = null;
  }), typeof E.nextElementSibling == "object" ? E.parentNode.insertBefore(A, E.nextElementSibling) : E.parentNode.appendChild(A), x.editorArea.appendChild(x.wysiwygFrame), x = E = A = null, l.iframe || (u._editorInit(!1, l.value), l.value = null), w;
}
const ur = {
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
    ae._propertiesInit(), typeof t != "object" && (t = {}), i && (t = [i, t].reduce(function(a, d) {
      for (let f in d)
        if (ae.hasOwn(d, f))
          if (f === "plugins" && d[f] && a[f]) {
            let n = a[f], b = d[f];
            n = n.length ? n : Object.keys(n).map(function(u) {
              return n[u];
            }), b = b.length ? b : Object.keys(b).map(function(u) {
              return b[u];
            }), a[f] = b.filter(function(u) {
              return n.indexOf(u) === -1;
            }).concat(n);
          } else
            a[f] = d[f];
      return a;
    }, {}));
    const o = typeof e == "string" ? document.getElementById(e) : e;
    if (!o)
      throw Error(typeof e == "string" ? '[SUNEDITOR.create.fail] The element for that id was not found (ID:"' + e + '")' : "[SUNEDITOR.create.fail] suneditor requires textarea's element or id value");
    const l = Wi.init(o, t);
    if (l.constructed._top.id && document.getElementById(l.constructed._top.id))
      throw Error('[SUNEDITOR.create.fail] The ID of the suneditor you are trying to create already exists (ID:"' + l.constructed._top.id + '")');
    return rr(Zi(o, l.constructed, l.options), l.pluginCallButtons, l.plugins, l.options.lang, t, l._responsiveButtons);
  }
}, dr = ["innerHTML", "id", "tabindex"], cr = /* @__PURE__ */ _e({
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
    const o = i, l = e, a = J(null), d = J(l.modelValue);
    let f = null, n;
    const b = J(l.focusing), u = (E) => {
      b.value = !0, o("focus", E);
    }, v = (E) => {
      b.value = !1, o("blur", E);
    }, w = (E) => {
      n && clearTimeout(n), n = setTimeout(() => {
        sn(E) === "" ? d.value = "" : d.value = E;
      }, 100);
    }, x = () => {
      let E = {
        //@ts-ignore
        lang: Kl[l.lang] ? Kl[l.lang] : Ni,
        plugins: {
          ...or
        },
        ...sr
      };
      f = ur.create(l.id, E), f.onChange = (A) => {
        w(A), l.disabled ? f == null || f.disabled() : f == null || f.enabled();
      }, f.onKeyUp = (A, s) => {
        w(s.getContents(!1));
      }, f.onBlur = () => {
        v();
      }, f.onClick = () => {
        u();
      };
    };
    return re(() => l.modelValue, (E) => d.value = E), re(d, (E) => o("update:modelValue", E)), Li(() => {
      x();
    }), t({
      doSetValue: (E) => {
        f && f.setContents(E);
      }
    }), (E, A) => (O(), ne("div", {
      innerHTML: d.value,
      ref_key: "input",
      ref: a,
      id: E.id,
      tabindex: E.tabindex
    }, null, 8, dr));
  }
}), fr = {
  key: 0,
  class: "lkt-field--searchable-box"
}, hr = ["value", "placeholder"], pr = { key: 0 }, mr = ["title"], gr = /* @__PURE__ */ _e({
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
    const o = i, l = e, a = l.multiple && l.canTag, d = J(l.searchString), f = J(null), n = J(l.showOptions);
    re(n, (h) => {
      a || o("update:showOptions", h);
    });
    const b = J(l.focusing), u = J(!1), v = J(!1), w = () => {
      Bi(() => {
        b.value = u.value || v.value, n.value = b.value;
      });
    };
    re(u, (h) => {
      h && (v.value = !1), w();
    }), re(v, (h) => {
      h && (u.value = !1), w();
    }), re(b, (h) => {
      o(h ? "focus" : "blur");
    });
    let x, E;
    const A = (h) => {
      x = setTimeout(() => {
        u.value = !1;
      }, 100);
    }, s = (h) => {
      u.value = !0, a && h.key === "Enter" ? (o("tag", d.value), d.value = "") : ["ArrowDown", "ArrowUp", "Enter"].includes(h.key) ? o("navigate", h) : o("search", d.value);
    }, r = (h) => {
      u.value = !0;
    }, c = (h) => {
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
        clearTimeout(x), clearTimeout(E), f.value && f.value.focus();
      }
    }), re(() => l.pickedOptions, () => {
      o("change");
    }, { deep: !0 }), (h, y) => {
      const C = pe("lkt-tag"), _ = pe("lkt-button");
      return O(), ne(De, null, [
        h.searchable && (h.multiple || h.searchMode) || U(a) ? (O(), ne("div", fr, [
          h.multiple ? (O(), ee(C, {
            key: 0,
            icon: h.optionsIcon,
            text: h.pickedOptions.length
          }, null, 8, ["icon", "text"])) : h.pickedOptions.length > 0 ? (O(), ee(C, { key: 1 }, {
            default: me(() => [
              oe(Ct, {
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
          Ue(ge("input", {
            "onUpdate:modelValue": y[0] || (y[0] = (k) => d.value = k),
            ref_key: "queryField",
            ref: f,
            value: d.value,
            placeholder: h.searchPlaceholder,
            type: "text",
            tabindex: "-1",
            autocomplete: "off",
            onKeyup: s,
            onBlur: A,
            onFocus: r
          }, null, 40, hr), [
            [zi, d.value]
          ])
        ])) : se("", !0),
        Ue(oe(_, {
          ref: "selectButton",
          type: U(a) ? U(kt).Content : U(kt).Button,
          class: "lkt-field--toggle-button lkt-field--select-button",
          "open-tooltip": n.value,
          "onUpdate:openTooltip": y[1] || (y[1] = (k) => n.value = k),
          onKeyup: p,
          onBlur: c,
          onFocus: m
        }, {
          default: me(() => [
            U(a) || h.multiple && h.pickedOptions.length > 0 ? (O(), ne(De, { key: 0 }, [
              h.multipleDisplayEdition === U(Xt).Count ? (O(), ne("div", pr, _t(h.pickedOptions.length), 1)) : (O(), ne("ul", {
                key: 1,
                class: Ve(["lkt-field-select-read", `multiple-display-${h.multipleDisplayEdition}`])
              }, [
                (O(!0), ne(De, null, tt(h.pickedOptions, (k, M) => (O(), ne("li", {
                  title: k.label
                }, [
                  oe(Ct, {
                    option: h.pickedOptions[M],
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
                ], 8, mr))), 256))
              ], 2))
            ], 64)) : !h.multiple && h.pickedOptions.length > 0 ? (O(), ee(Ct, {
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
          [gt, h.multiple || !h.searchable || !h.searchMode]
        ])
      ], 64);
    };
  }
}), vr = { class: "lkt-calc--formula" }, br = { class: "lkt-calc--custom-pad" }, yr = { class: "lkt-calc--pad" }, _r = { class: "lkt-calc--numeric-pad" }, Cr = { class: "lkt-calc--math-pad" }, wr = { class: "lkt-calc--advance-math-pad" }, kr = /* @__PURE__ */ _e({
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
    const i = t, o = e, l = J(o.modelValue), a = J(null);
    re(l, (m) => i("update:modelValue", m));
    const d = J(o.focusing), f = J(null);
    let n;
    const b = () => {
      clearTimeout(n), a.value && typeof a.value.focus == "function" && a.value.focus();
    }, u = (m) => {
      l.value += "" + m, b();
    }, v = (m) => {
      l.value += " " + m + " ", b();
    }, w = (m) => {
      l.value += " " + m + "(", b();
    }, x = () => {
      l.value += " sqrt(", b();
    }, E = (m) => {
      l.value += "" + m, b();
    }, A = () => {
      l.value += ".", b();
    }, s = () => {
      l.value += " ", b();
    }, r = (m) => {
      l.value += "" + m.value, b();
    }, c = () => {
      d.value = !0;
    }, p = () => {
      n = setTimeout(() => {
        d.value = !1;
      }, 100);
    };
    return re(d, (m) => {
      i(m ? "focus" : "blur");
    }), (m, g) => {
      const h = pe("lkt-button"), y = pe("lkt-tooltip");
      return O(), ne("div", {
        ref_key: "container",
        ref: f
      }, [
        ge("div", vr, [
          Ue(ge("input", {
            type: "text",
            ref_key: "input",
            ref: a,
            "onUpdate:modelValue": g[0] || (g[0] = (C) => l.value = C),
            onFocus: c,
            onBlur: p
          }, null, 544), [
            [zi, l.value]
          ])
        ]),
        m.editable ? (O(), ee(y, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--calc",
          modelValue: d.value,
          "onUpdate:modelValue": g[27] || (g[27] = (C) => d.value = C),
          referrer: f.value,
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: me(() => [
            ge("div", br, [
              (O(!0), ne(De, null, tt(m.options, (C) => (O(), ee(h, {
                icon: C.icon,
                text: C.label,
                onClick: (_) => r(C)
              }, null, 8, ["icon", "text", "onClick"]))), 256))
            ]),
            ge("div", yr, [
              ge("div", _r, [
                oe(h, {
                  onClick: g[1] || (g[1] = (C) => u(7)),
                  text: "7",
                  class: "lkt-calc--btn-number"
                }),
                oe(h, {
                  onClick: g[2] || (g[2] = (C) => u(8)),
                  text: "8",
                  class: "lkt-calc--btn-number"
                }),
                oe(h, {
                  onClick: g[3] || (g[3] = (C) => u(9)),
                  text: "9",
                  class: "lkt-calc--btn-number"
                }),
                oe(h, {
                  onClick: g[4] || (g[4] = (C) => u(4)),
                  text: "4",
                  class: "lkt-calc--btn-number"
                }),
                oe(h, {
                  onClick: g[5] || (g[5] = (C) => u(5)),
                  text: "5",
                  class: "lkt-calc--btn-number"
                }),
                oe(h, {
                  onClick: g[6] || (g[6] = (C) => u(6)),
                  text: "6",
                  class: "lkt-calc--btn-number"
                }),
                oe(h, {
                  onClick: g[7] || (g[7] = (C) => u(1)),
                  text: "1",
                  class: "lkt-calc--btn-number"
                }),
                oe(h, {
                  onClick: g[8] || (g[8] = (C) => u(2)),
                  text: "2",
                  class: "lkt-calc--btn-number"
                }),
                oe(h, {
                  onClick: g[9] || (g[9] = (C) => u(3)),
                  text: "3",
                  class: "lkt-calc--btn-number"
                }),
                oe(h, {
                  onClick: g[10] || (g[10] = (C) => A()),
                  text: "."
                }),
                oe(h, {
                  onClick: g[11] || (g[11] = (C) => u(0)),
                  text: "0",
                  class: "lkt-calc--btn-number"
                }),
                oe(h, {
                  onClick: g[12] || (g[12] = (C) => s()),
                  text: " "
                })
              ]),
              ge("div", Cr, [
                oe(h, {
                  onClick: g[13] || (g[13] = (C) => E("[")),
                  text: "["
                }),
                oe(h, {
                  onClick: g[14] || (g[14] = (C) => E("]")),
                  text: "]"
                }),
                oe(h, {
                  onClick: g[15] || (g[15] = (C) => E("(")),
                  text: "("
                }),
                oe(h, {
                  onClick: g[16] || (g[16] = (C) => E(")")),
                  text: ")"
                }),
                oe(h, {
                  onClick: g[17] || (g[17] = (C) => v("+")),
                  text: "+"
                }),
                oe(h, {
                  onClick: g[18] || (g[18] = (C) => v("-")),
                  text: "−"
                }),
                oe(h, {
                  onClick: g[19] || (g[19] = (C) => v("*")),
                  text: "×"
                }),
                oe(h, {
                  onClick: g[20] || (g[20] = (C) => v("/")),
                  text: "÷"
                })
              ]),
              ge("div", wr, [
                oe(h, {
                  onClick: g[21] || (g[21] = (C) => x()),
                  text: "√"
                }),
                oe(h, {
                  onClick: g[22] || (g[22] = (C) => w("log")),
                  text: "log"
                }),
                oe(h, {
                  onClick: g[23] || (g[23] = (C) => w("ln")),
                  text: "ln"
                }),
                oe(h, {
                  onClick: g[24] || (g[24] = (C) => w("sin")),
                  text: "sin"
                }),
                oe(h, {
                  onClick: g[25] || (g[25] = (C) => w("cos")),
                  text: "cos"
                }),
                oe(h, {
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
}), xr = /* @__PURE__ */ _e({
  __name: "ValidationItem",
  props: {
    validation: {},
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = Q(() => {
      let d = El(t.validation.code, t.stack), f = {
        min: t.validation.min,
        max: t.validation.max,
        value: t.validation.equalToValue
      }, n = El(t.validation.status + "-" + t.validation.code, t.stack);
      return n && (d = n), d ? d.startsWith("__:") ? an(d.substring(3), f) : vo(d, f, ":", "") : t.validation.code;
    }), o = Q(() => te.validationIconSlot !== ""), l = Q(() => te.validationIconSlot), a = Q(() => {
      let d = [];
      return d.push("code-" + t.validation.code), d.push("is-" + t.validation.status), d.join(" ");
    });
    return (d, f) => (O(), ne("div", {
      class: Ve(["lkt-field-validation-message", a.value])
    }, [
      o.value ? (O(), ee(Rt(l.value), { key: 0 })) : se("", !0),
      At(" " + _t(i.value), 1)
    ], 2));
  }
}), Sr = {
  key: 0,
  class: "lkt-field-validation-info"
}, Er = /* @__PURE__ */ _e({
  __name: "LktFieldValidations",
  props: {
    items: { default: () => [] },
    stack: { default: "default" }
  },
  setup(e) {
    const t = e, i = J(t.items), o = J(!1);
    return re(() => t.items, (l) => {
      o.value = !0, Bi(() => o.value = !1);
    }, { deep: !0 }), (l, a) => o.value ? se("", !0) : (O(), ne("div", Sr, [
      (O(!0), ne(De, null, tt(i.value, (d) => (O(), ee(xr, {
        validation: d,
        stack: l.stack,
        key: d.code
      }, null, 8, ["validation", "stack"]))), 128))
    ]));
  }
}), Tr = ["id"], Lr = /* @__PURE__ */ _e({
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
    const i = t, o = e, l = J(o.modelValue), a = J(o.focusing);
    let d, f;
    const n = J({}), b = () => {
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
    re(a, (x) => {
      i(x ? "focus" : "blur");
    });
    const w = () => {
      clearTimeout(d), setTimeout(() => {
        u();
      }, 100);
    };
    return (x, E) => {
      const A = pe("lkt-table"), s = pe("lkt-tooltip");
      return O(), ne(De, null, [
        Ue(ge("input", {
          id: x.id,
          type: "text",
          ref: "input",
          "onUpdate:modelValue": E[0] || (E[0] = (r) => l.value = r),
          onFocus: u,
          onBlur: v,
          onKeyup: b
        }, null, 40, Tr), [
          [zi, l.value]
        ]),
        x.editable && x.hadFirstFocus ? (O(), ee(s, {
          key: 0,
          ref: "dropdownEl",
          class: "lkt-field--dropdown lkt-field--search-results",
          modelValue: a.value,
          "onUpdate:modelValue": E[1] || (E[1] = (r) => a.value = r),
          referrer: x.container,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, {
          default: me(() => [
            oe(A, Be({
              type: U(fn).Ul,
              itemsContainerClass: "lkt-field--dropdown-options",
              paginator: {
                resource: x.optionsResource,
                resourceData: n.value
              }
            }, {
              onPage: w,
              onClick: w
            }), {
              item: me(({ item: r, index: c, isLoading: p, canCreate: m, canUpdate: g, canDrop: h, canRead: y, doDrop: C }) => [
                oe(Ct, {
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
}), zr = {
  key: 0,
  class: "lkt-field-main"
}, Br = {
  key: 3,
  class: "lkt-field--read-value"
}, Nr = ["innerHTML", "title"], Rr = ["title"], Ar = { key: 0 }, Ir = ["title"], Mr = ["innerHTML"], Dr = ["innerHTML", "title"], Vr = ["innerHTML", "title"], Hr = /* @__PURE__ */ _e({
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
    multipleDisplay: { default: Xt.List },
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
    const i = t, o = $i(), l = e, a = () => i("click"), d = Q(() => {
      switch (l.type) {
        case q.Select:
          if (l.multiple && Array.isArray(l.value) && l.value.length > 0 || l.multiple && l.multipleDisplay === Xt.Count || !l.multiple && l.value) return "";
          break;
        case q.Date:
          if (l.value !== "") return "";
          break;
        default:
          if (l.value !== "") return "";
      }
      return te.customValueSlots[l.emptyValueSlot] ?? te.defaultEmptyValueSlot;
    }), f = Q(() => te.customValueSlots[l.valueSlot] ?? "");
    let n = l.value;
    return l.type === q.Select && l.multiple && !Array.isArray(n) && (n = []), (l.type === q.Textarea || l.type === q.Text) && (typeof ((b = l.readModeConfig) == null ? void 0 : b.textMaxLength) < "u" && n.length > l.readModeConfig.textMaxLength ? n = n.substring(0, l.readModeConfig.textMaxLength) + "..." : typeof te.readTextMaxLength < "u" && n.length > te.readTextMaxLength && (n = n.substring(0, te.readTextMaxLength) + "...")), (u, v) => {
      const w = pe("lkt-image"), x = pe("lkt-button"), E = pe("lkt-anchor"), A = pe("lkt-tag");
      return O(), ne("div", {
        class: "lkt-field--read",
        onClick: a
      }, [
        U(o).value ? Qe(u.$slots, "value", {
          key: 0,
          value: U(n),
          title: u.title,
          data: u.slotData
        }) : d.value ? (O(), ee(Rt(d.value), {
          key: 1,
          data: u.slotData
        }, null, 8, ["data"])) : f.value ? (O(), ee(Rt(f.value), {
          key: 2,
          value: U(n),
          title: u.title,
          data: u.slotData
        }, null, 8, ["value", "title", "data"])) : (O(), ne(De, { key: 3 }, [
          u.type === U(q).File || u.type === U(q).Image ? (O(), ne("div", zr, [
            oe(x, {
              class: "lkt-field--toggle-button",
              text: u.type === U(q).File ? u.fileName : "",
              disabled: ""
            }, {
              default: me(() => [
                u.type === U(q).Image ? (O(), ee(w, {
                  key: 0,
                  src: U(n),
                  class: "lkt-field--image-cover"
                }, null, 8, ["src"])) : se("", !0),
                u.type === U(q).Image ? (O(), ee(w, {
                  key: 1,
                  src: U(n),
                  class: "lkt-field--image-main"
                }, null, 8, ["src"])) : se("", !0)
              ]),
              _: 1
            }, 8, ["text"])
          ])) : u.type === U(q).Email ? (O(), ee(E, {
            key: 1,
            type: "mail",
            class: "lkt-field--read-value",
            title: u.title,
            to: U(n)
          }, {
            default: me(() => [
              At(_t(U(n)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : u.type === U(q).Tel ? (O(), ee(E, {
            key: 2,
            type: "tel",
            class: "lkt-field--read-value",
            title: u.title,
            to: U(n)
          }, {
            default: me(() => [
              At(_t(U(n)), 1)
            ]),
            _: 1
          }, 8, ["title", "to"])) : U(bt).includes(u.type) ? (O(), ne("div", Br, [
            oe(A, {
              icon: U(n) ? "lkt-icn-check" : "lkt-icn-cancel",
              "featured-text": u.label,
              title: u.title
            }, null, 8, ["icon", "featured-text", "title"])
          ])) : u.type === U(q).Date ? (O(), ne("div", {
            key: 4,
            class: "lkt-field--read-value",
            innerHTML: U(n),
            title: u.title
          }, null, 8, Nr)) : u.type === U(q).Select ? (O(), ne("div", {
            key: 5,
            class: "lkt-field--read-value",
            title: u.title
          }, [
            u.multiple ? (O(), ne(De, { key: 0 }, [
              u.multipleDisplay === U(Xt).Count ? (O(), ne("div", Ar, _t(U(n).length), 1)) : U(n).length > 0 ? (O(), ne("ul", {
                key: 1,
                class: Ve(["lkt-field-select-read", `multiple-display-${u.multipleDisplay}`])
              }, [
                (O(!0), ne(De, null, tt(U(n), (s, r) => {
                  var c;
                  return O(), ne("li", {
                    title: (c = U(n)[r]) == null ? void 0 : c.label
                  }, [
                    oe(Ct, {
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
                  ], 8, Ir);
                }), 256))
              ], 2)) : se("", !0)
            ], 64)) : U(n).length > 0 ? (O(), ee(Ct, {
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
          ], 8, Rr)) : u.modal ? (O(), ee(x, {
            key: 6,
            class: "lkt-field--read-value",
            title: u.title,
            modal: u.modal,
            "modal-key": u.modalKey,
            "modal-data": u.modalData
          }, {
            default: me(() => [
              ge("div", { innerHTML: U(n) }, null, 8, Mr)
            ]),
            _: 1
          }, 8, ["title", "modal", "modal-key", "modal-data"])) : u.download ? (O(), ee(Ct, {
            key: 7,
            class: "lkt-field--read-value",
            option: { value: "", label: U(n) },
            download: u.download,
            text: u.optionsText,
            "custom-class": u.optionsClass,
            prop: u.prop
          }, null, 8, ["option", "download", "text", "custom-class", "prop"])) : u.type === U(q).Number ? (O(), ne("div", {
            key: 8,
            class: "lkt-field--read-value",
            innerHTML: u.title,
            title: u.title
          }, null, 8, Dr)) : (O(), ne("div", {
            key: 9,
            class: "lkt-field--read-value",
            innerHTML: U(n),
            title: u.title
          }, null, 8, Vr))
        ], 64))
      ]);
    };
  }
}), Fr = ["name", "id", "disabled", "readonly", "placeholder", "accept"], Or = {
  key: 2,
  class: "lkt-button lkt-field--toggle-button"
}, Pr = { class: "lkt-grid-1" }, Ur = /* @__PURE__ */ _e({
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
    const o = i, l = e, a = J(null), d = J(null), f = J(l.modelValue), n = J(l.fileName), b = J(l.uploading), u = (x) => {
      let E = x.target;
      if (E.files && E.files[0]) {
        n.value = E.files[0].name;
        const A = new FileReader();
        A.onload = (s) => {
          if (f.value = s.target.result, l.resource) {
            b.value = !0, o("uploading");
            let r = JSON.parse(JSON.stringify(l.resourceData));
            r.files = E.files[0], Si(l.resource, r).then((c) => {
              if (b.value = !1, !c.success) {
                o("upload-error", c);
                return;
              }
              f.value = c.data, o("upload-success", c);
            }).catch((c) => {
              b.value = !1, o("upload-error", c);
            });
          }
        }, A.readAsDataURL(E.files[0]);
      }
      o("change", x);
    };
    re(f, (x) => o("update:modelValue", x)), re(n, (x) => o("update:fileName", x)), t({
      click: () => {
        var x;
        (x = d.value) == null || x.click();
      }
    });
    const v = J(typeof l.fileBrowserConfig == "object" && Object.keys(l.fileBrowserConfig).length > 0), w = (x) => {
      f.value = x[0].src, o("picked-files", x);
    };
    return (x, E) => {
      const A = pe("lkt-image"), s = pe("lkt-button");
      return O(), ne(De, null, [
        ge("input", {
          ref_key: "inputElement",
          ref: a,
          type: "file",
          name: x.name,
          id: x.id,
          disabled: x.disabled,
          readonly: x.readonly,
          placeholder: x.placeholder,
          accept: x.accept,
          onChange: u
        }, null, 40, Fr),
        v.value ? x.isImage ? x.isImage ? (O(), ne("div", Or, [
          x.isImage ? (O(), ee(A, {
            key: 0,
            src: f.value,
            class: "lkt-field--image-cover"
          }, null, 8, ["src"])) : se("", !0),
          x.isImage ? (O(), ee(A, {
            key: 1,
            src: f.value,
            class: "lkt-field--image-main"
          }, {
            overlay: me(() => [
              ge("div", null, [
                ge("div", Pr, [
                  se("", !0),
                  oe(s, Be({ ref: "fileBrowserButtonRef" }, {
                    text: "Explore files",
                    icon: "lkt-icn-search",
                    disabled: x.disabled,
                    modal: "lkt-file-browser",
                    modalData: {
                      fileBrowserConfig: x.fileBrowserConfig,
                      onConfirmSelection: w
                    }
                  }), null, 16)
                ])
              ])
            ]),
            _: 1
          }, 8, ["src"])) : se("", !0)
        ])) : se("", !0) : (O(), ee(s, {
          key: 1,
          ref_key: "buttonRef",
          ref: d,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: n.value,
          disabled: x.disabled
        }, null, 8, ["click-ref", "text", "disabled"])) : (O(), ee(s, {
          key: 0,
          ref_key: "buttonRef",
          ref: d,
          class: "lkt-field--toggle-button",
          "click-ref": a.value,
          text: x.isImage ? "" : n.value,
          disabled: x.disabled
        }, {
          default: me(() => [
            x.isImage ? (O(), ee(A, {
              key: 0,
              src: f.value,
              class: "lkt-field--image-cover"
            }, null, 8, ["src"])) : se("", !0),
            x.isImage ? (O(), ee(A, {
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
}), Wr = { class: "lkt-calendar" }, Zr = { class: "calendar" }, $r = { class: "lkt-calendar--header-grid" }, qr = ["innerHTML"], jr = {
  key: 0,
  class: "lkt-calendar--day-grid"
}, Gr = { class: "lkt-calendar--day lkt-calendar--filling-day" }, Kr = /* @__PURE__ */ _e({
  __name: "LktCalendar",
  props: {
    modelValue: {}
  },
  emits: [
    "update:modelValue"
  ],
  setup(e, { emit: t }) {
    const i = t, o = e, l = J(o.modelValue);
    re(() => o.modelValue, (p) => l.value = p, { deep: !0 }), re(l, (p) => i("update:modelValue", p));
    const a = J(/* @__PURE__ */ new Date()), d = J(/* @__PURE__ */ new Date());
    qi(l.value) && typeof l.value < "u" && (d.value = new Date(l.value.getFullYear(), l.value.getMonth(), l.value.getDate()));
    const f = J(d.value.getFullYear()), n = J(d.value.getMonth()), b = J(!1), u = J(Ot("Y-m", d.value)), v = Q(() => new Date(f.value, n.value + 1, 0).getDate()), w = Q(() => new Date(f.value, n.value, 1).getDay()), x = () => {
      n.value > 11 && (n.value = 0, f.value += 1), n.value += 1, d.value.setFullYear(f.value, n.value), d.value = new Date(d.value), u.value = Ot("Y-m", d.value);
    }, E = () => {
      n.value < 0 && (n.value = 11, f.value -= 1), n.value -= 1, d.value.setFullYear(f.value, n.value), d.value = new Date(d.value), u.value = Ot("Y-m", d.value);
    }, A = (p) => typeof l.value > "u" || l.value.getFullYear() !== f.value || l.value.getMonth() !== n.value ? !1 : l.value.getDate() === p, s = (p) => typeof l.value > "u" || a.value.getFullYear() !== f.value || a.value.getMonth() !== n.value ? !1 : a.value.getDate() === p, r = (p) => ({
      "is-picked": A(p),
      "is-today": s(p)
    }), c = (p) => {
      var m;
      (m = l.value) == null || m.setFullYear(f.value, n.value, p), l.value = new Date(l.value);
    };
    return (p, m) => {
      const g = pe("lkt-button");
      return O(), ne("div", Wr, [
        ge("div", Zr, [
          ge("header", $r, [
            oe(g, {
              class: "lkt-calendar--day",
              onClick: E
            }, {
              default: me(() => m[0] || (m[0] = [
                At("◀")
              ])),
              _: 1
            }),
            ge("div", {
              class: "lkt-calendar--header-text",
              innerHTML: u.value
            }, null, 8, qr),
            oe(g, {
              class: "lkt-calendar--day",
              onClick: x
            }, {
              default: me(() => m[1] || (m[1] = [
                At("▶")
              ])),
              _: 1
            })
          ]),
          b.value ? se("", !0) : (O(), ne("div", jr, [
            m[2] || (m[2] = po('<div class="lkt-calendar--day lkt-calendar--week-day">Su</div><div class="lkt-calendar--day lkt-calendar--week-day">Mo</div><div class="lkt-calendar--day lkt-calendar--week-day">Tu</div><div class="lkt-calendar--day lkt-calendar--week-day">We</div><div class="lkt-calendar--day lkt-calendar--week-day">Th</div><div class="lkt-calendar--day lkt-calendar--week-day">Fr</div><div class="lkt-calendar--day lkt-calendar--week-day">Sa</div>', 7)),
            (O(!0), ne(De, null, tt(w.value, (h) => (O(), ne("div", Gr))), 256)),
            (O(!0), ne(De, null, tt(v.value, (h) => (O(), ee(g, {
              class: Ve(["lkt-calendar--day", r(h)]),
              text: h.toString(),
              onClick: () => c(h)
            }, null, 8, ["class", "text", "onClick"]))), 256))
          ]))
        ]),
        m[3] || (m[3] = ge("div", { class: "display-selected" }, [
          ge("p", { class: "selected" })
        ], -1))
      ]);
    };
  }
}), Yr = /* @__PURE__ */ _e({
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
    const i = t, o = e, l = J(void 0), a = J(""), d = J(o.modelValue), f = Q(() => te.dateReadFormat ? te.dateReadFormat : te.langDateReadFormat[o.lang] ? te.langDateReadFormat[o.lang] : te.defaultDateReadFormat ? te.defaultDateReadFormat : "Y-m-d"), n = (u) => {
      let v = new Date(u);
      qi(v) && (l.value = v);
    }, b = () => {
      a.value = gn(l.value, f.value);
    };
    return re(() => o.modelValue, (u) => {
      d.value = u, n(u);
    }), re(d, (u) => i("update:modelValue", u)), re(l, (u) => {
      typeof u > "u" ? d.value = "" : d.value = Ot("Y-m-d", u), b();
    }, { deep: !0 }), Li(() => {
      n(o.modelValue), b();
    }), (u, v) => {
      const w = pe("lkt-button");
      return O(), ee(w, {
        type: U(kt).Tooltip,
        class: "lkt-field--toggle-button",
        text: a.value,
        tooltip: {
          class: "lkt-field--date--tooltip",
          locationY: U(cn).Bottom,
          locationX: U(dn).LeftCorner
        }
      }, {
        tooltip: me(() => [
          oe(Kr, {
            modelValue: l.value,
            "onUpdate:modelValue": v[0] || (v[0] = (x) => l.value = x)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["type", "text", "tooltip"]);
    };
  }
}), on = (e, t) => typeof e == "object" && !Array.isArray(e) ? e[t] : e, Pi = (e, t, i) => {
  if (t) {
    let o = '<i class="' + t + '"></i>';
    i ? e += o : e = o + e;
  }
  return e;
}, Xr = { key: 1 }, Un = /* @__PURE__ */ _e({
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
    const o = J(e.modelValue), l = (a, d) => {
    };
    return (a, d) => {
      const f = pe("lkt-button");
      return O(), ee(f, {
        modal: a.modal,
        "modal-key": a.modalKey,
        "modal-data": a.modalData,
        onClick: l
      }, {
        default: me(() => [
          o.value ? Qe(a.$slots, "item", {
            key: 0,
            item: o.value
          }) : (O(), ne("p", Xr, "No data"))
        ]),
        _: 3
      }, 8, ["modal", "modal-key", "modal-data"]);
    };
  }
}), Jr = /* @__PURE__ */ _e({
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
    const t = $i(), i = e, o = J(i.modelValue), l = Q(() => typeof i.max == "boolean" || o.value.length < i.max ? ["modal-create"] : []);
    return (a, d) => {
      const f = pe("lkt-table");
      return O(), ee(f, {
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
        item: me(({ item: n, index: b, isLoading: u, canCreate: v, canRead: w, canUpdate: x, canDrop: E, doDrop: A }) => [
          oe(Un, {
            modelValue: o.value[b],
            "onUpdate:modelValue": (s) => o.value[b] = s,
            "item-type": a.itemType
          }, Nt({ _: 2 }, [
            U(t).item ? {
              name: "item",
              fn: me(({ item: s }) => [
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
}), Qr = /* @__PURE__ */ _e({
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
    const i = t, o = e, l = Q(() => o.insideEllipsis ? "lkt-field--info-split-btn" : "lkt-field--info-btn"), a = () => i("click");
    return (d, f) => {
      const n = pe("lkt-button");
      return O(), ee(n, Be(d.config, {
        type: d.config.type ? d.config.type : U(kt).FileUpload,
        resource: d.config.resource ?? d.fileUploadHttp.resource,
        "resource-data": d.config.resourceData ?? d.fileUploadHttp.data,
        text: d.insideEllipsis ? d.config.text : "",
        class: [l.value, "lkt-field--btn-file-upload"],
        icon: "lkt-icn-upload",
        onClick: a
      }), null, 16, ["type", "resource", "resource-data", "text", "class"]);
    };
  }
}), eu = ["data-show-ui", "data-labeled"], tu = ["for", "innerHTML"], iu = { class: "lkt-field-content" }, lu = {
  key: 0,
  class: "lkt-field--atn-btn-container"
}, nu = {
  key: 1,
  class: "lkt-field--icon"
}, ou = ["value", "type", "name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete", "min", "max", "step"], su = ["name", "id", "disabled", "readonly", "placeholder", "tabindex", "autocomplete"], au = {
  key: 4,
  class: "lkt-field--info-nav"
}, ru = { key: 0 }, uu = ["data-index", "onClick"], It = /* @__PURE__ */ _e({
  __name: "LktField",
  props: /* @__PURE__ */ mo({
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
  }, To(Lo)),
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
    const o = i, l = $i(), a = e, d = bo(16);
    let f = vt(a.modal, a.prop), n = vt(a.modalKey, a.prop), b = vt(a.icon, a.prop), u = vt(a.download, a.prop), v = vt(a.itemType, a.prop);
    !f && typeof v != "function" && v && typeof te.modalPerItemType[v] < "u" && (f = te.modalPerItemType[v]);
    const w = J(null);
    let x = a.featuredButton, E = a.modelValue;
    a.multiple && Co.includes(a.type) ? (!E || !Array.isArray(E)) && (E = []) : bt.includes(a.type) ? typeof E != "boolean" && (E = !1) : a.type === q.Date && !b ? b = te.defaultDateIcon : a.type === q.Number && a.canStep && x === "" && (x = te.defaultNumberFeaturedButton);
    const A = J(E), s = J(E), r = J(a.valid === !0), c = J(!0), p = J(!1), m = J(!1), g = J(!1), h = J(!1), y = J([]), C = J(!a.readMode), _ = J(a.fileName), k = J(a.fileName), M = J(null), T = J(null), z = J(null), B = J(!1), W = J(!1), Z = J(!1), P = J(""), D = J(-1), F = J([]), I = J(!1), V = J(!1), R = J(!1), H = Q(() => rn.value), N = Q(() => (H.value, te.dateReadFormat ? te.dateReadFormat : te.langDateReadFormat[H.value] ? te.langDateReadFormat[H.value] : te.defaultDateReadFormat ? te.defaultDateReadFormat : "Y-m-d")), L = [q.Card, q.Elements].includes(a.type) ? s : J(on(s.value, H.value)), K = J(L), $ = J([]), X = J([]), G = () => {
      const S = (j) => {
        var be;
        if (X.value = Oi($.value, j, !0, (be = a.optionsConfig) == null ? void 0 : be.filter), a.multiple) {
          for (let ze in L.value) {
            let Ee;
            a.optionValueType === "option" ? Ee = Kt($.value, L.value[ze].value) : Ee = Kt($.value, L.value[ze]), typeof Ee < "u" && (F.value.length === 0 ? F.value.push(Ee) : F.value.splice(ze, 1, Ee));
          }
          return;
        }
        let le;
        a.optionValueType === "option" ? le = Kt($.value, L.value.map((ze) => ze.value)) : le = Kt($.value, L.value), typeof le < "u" && (F.value.length === 0 ? F.value.push(le) : F.value.splice(0, 1, le));
      };
      a.type === q.Text ? S(L.value) : a.type === q.Select && S(P.value);
    }, Y = Q(() => a.type === q.Date), ie = Q(() => a.type === q.File), ue = Q(() => a.type === q.Image), ce = Q(() => a.type === q.Textarea ? "textarea" : a.type === q.Html ? "div" : "input"), fe = Q(() => a.type === q.Date ? s.value !== A.value : L.value !== K.value), de = Q(() => typeof a.disabled == "function" ? a.disabled(a.prop) : a.disabled), Te = Q(() => {
      let S = 0;
      return Qi.value && ++S, el.value && ++S, tl.value && ++S, il.value && ++S, nl.value && ++S, ol.value && ++S, ll.value && ++S, Ki.value && ++S, Yi.value && ++S, (a.customButtonText || a.customButtonClass) && ++S, S > 0 && a.type === q.Textarea || S > 0 && a.type === q.Html || S > 0 && a.infoButtonEllipsis ? 1 : S;
    }), He = Q(() => Ri.value && x === "i18n" || Ut.value && x === "password" || Et.value && x === "subtract"), ye = Q(() => Te.value > 0), Re = Q(() => a.autocomplete === !0 ? "on" : "off"), we = Q(() => a.type === q.Date ? s.value !== "" : L.value !== ""), it = Q(() => a.type === q.Password && p.value === !0 ? "text" : a.type === q.Email ? "email" : a.type === q.Password ? "password" : a.type === q.Number ? "number" : a.type === q.Tel ? "tel" : a.type === q.Search ? "search" : a.type === q.Color ? "color" : a.type === q.Range ? "range" : "text"), Fe = Q(() => {
      var j;
      const S = [];
      return S.push(`is-${a.type}`), bt.includes(a.type) && (S.push("is-boolean"), L.value && S.push("is-checked")), fe.value && S.push("is-changed"), de.value && S.push("is-disabled"), a.multiple && S.push("is-multiple"), He.value && S.push("with-atn-btn"), ye.value && S.push("with-info-btn"), a.mandatory && C.value && S.push("is-mandatory-field"), C.value && m.value && S.push("has-focus"), B.value && S.push("show-options"), a.searchable && I.value && S.push("is-searching"), a.hidden && S.push("lkt-hidden-field"), a.type !== q.Range && ((j = a.validation) == null ? void 0 : j.type) === wo.Auto && h.value && g.value && (y.value.length > 0 ? S.push("is-invalid") : S.push("is-valid")), [q.Textarea, q.Html].includes(a.type) && S.push("is-lg"), [q.Image].includes(a.type) && S.push("is-xl"), a.multiple && a.type === q.Select && S.push("is-lg"), a.multiple && (C.value ? S.push(`has-multiple-display-${a.multipleDisplayEdition}`) : S.push(`has-multiple-display-${a.multipleDisplay}`)), Te.value > 0 && S.push("has-icons", `has-icons-${Te.value}`), S.push(C.value ? "is-editable" : "is-read"), a.type !== q.Range && (S.push(r.value ? "is-valid" : "is-error"), S.push(we.value ? "is-filled" : "is-empty")), S.join(" ");
    }), Oe = Q(() => {
      var S;
      return typeof L.value == "number" ? (H.value, (S = te.langNumberFormat[H.value]) != null && S.amountOfDecimals ? vl(
        L.value,
        te.langNumberFormat[H.value].amountOfDecimals,
        te.langNumberFormat[H.value].decimalSeparator,
        te.langNumberFormat[H.value].thousandsSeparator,
        te.langNumberFormat[H.value].removeDecimalsIfZero
      ) : te.amountOfDecimals ? vl(
        L.value,
        te.amountOfDecimals,
        te.decimalSeparator,
        te.thousandsSeparator,
        te.removeDecimalsIfZero
      ) : L.value.toString()) : a.type === q.Html ? sn(L.value) : L.value;
    }), Ae = Q(() => typeof a.min == "string" ? parseFloat(a.min) : typeof a.min == "number" ? a.min : !1), ve = Q(() => typeof a.max == "string" ? parseFloat(a.max) : typeof a.max == "number" ? a.max : !1), wt = Q(() => {
      var S, j, le, be;
      if (bt.includes(a.type)) {
        if (L.value === !0 && typeof a.configOn == "object")
          return Pi(
            Ft(((S = a.configOn) == null ? void 0 : S.label) ?? a.label),
            ((j = a.configOn) == null ? void 0 : j.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
        if (L.value !== !0 && typeof a.configOff == "object")
          return Pi(
            Ft(((le = a.configOff) == null ? void 0 : le.label) ?? a.label),
            ((be = a.configOff) == null ? void 0 : be.labelIcon) ?? a.labelIcon,
            a.labelIconAtEnd
          );
      }
      return Pi(
        Ft(a.label),
        a.labelIcon,
        a.labelIconAtEnd
      );
    }), Ze = Q(() => Ft(a.placeholder)), Pe = Q(() => Ft(a.searchPlaceholder)), Se = Q(() => typeof f == "function" ? f(a.prop) : vt(f, a.prop)), Me = Q(() => typeof a.modalData == "function" ? a.modalData(a.prop) : a.modalData), Ie = Q(() => typeof b == "function" ? b(a.prop) : vt(b, a.prop)), xt = Q(() => a.type === q.File ? te.acceptTypes.file : a.type === q.Image ? te.acceptTypes.image : ""), St = Q(() => a.errorMessage), et = Q(() => a.infoMessage), Et = Q(() => a.canStep && C.value && a.type === q.Number), Ki = Q(() => a.canStep && C.value && a.type === q.Number && x !== "subtract"), Yi = Q(() => a.canStep && C.value && a.type === q.Number), Xi = Q(() => a.canUndo && fe.value && C.value && !ko.includes(a.type)), Ji = Q(() => a.canClear && we.value && C.value && !xo.includes(a.type)), Ri = Q(() => a.canI18n && typeof s.value == "object" && C.value), Ut = Q(() => a.type === q.Password && a.showPassword && we.value && C.value), Qi = Q(() => Xi.value && !a.infoButtonEllipsis), el = Q(() => Ji.value && !a.infoButtonEllipsis), tl = Q(() => Ut.value && !a.infoButtonEllipsis && x !== "password"), il = Q(() => Ri.value && !a.infoButtonEllipsis && x !== "i18n"), ll = Q(() => {
      var S, j, le, be;
      return a.type === q.Calc || a.type === q.Search || ![q.Select, q.Text].includes(a.type) ? !1 : X.value.length > 0 || $.value.length > 0 || typeof ((j = (S = a.optionsConfig) == null ? void 0 : S.http) == null ? void 0 : j.resource) < "u" && ((be = (le = a.optionsConfig) == null ? void 0 : le.http) == null ? void 0 : be.resource) !== "";
    }), nl = Q(() => a.allowReadModeSwitch && !a.infoButtonEllipsis), ol = Q(() => typeof a.fileUploadButton == "object" && Object.keys(a.fileUploadButton).length > 0), sl = () => {
      Bi(() => {
        w.value && w.value.focus();
      });
    }, Wn = async () => {
      var j;
      let S = [];
      if ((j = a.validation) != null && j.resource) {
        o("validating");
        const le = await Si(a.validation.resource, {
          ...a.validation.resourceData,
          value: L.value
        });
        if (le) {
          let be = le.data === !0;
          !be && L.value === A.value && (be = !0), S.push(Ne.createRemoteResponse(le, be ? Le.Ok : Le.Ko));
        }
        o("validation", le);
      }
      return S;
    };
    re(() => {
      var S;
      return (S = a.validation) == null ? void 0 : S.checkEqualTo;
    }, () => Tt()), re(() => a.readMode, (S) => C.value = !S), re(() => a.valid, (S) => r.value = S), re(() => a.modelValue, (S) => {
      [q.Card, q.Elements].includes(a.type) ? L.value = S : a.type !== q.Date && (L.value = on(S, H.value));
    }), re(L, (S) => {
      typeof s.value == "object" && [q.Card, q.Elements].includes(a.type) ? s.value[H.value] = S : s.value = S, a.type === q.Number && so(S);
    });
    let Ai;
    re(s, (S) => {
      var j;
      Z.value && C.value && (o("update:modelValue", S), a.type === q.Select && typeof ((j = a.optionsConfig) == null ? void 0 : j.filter) == "function" && Lt(P.value, !1), Ai && clearTimeout(Ai), Ai = setTimeout(() => {
        Tt();
      }, 150));
    }, { deep: !0 }), re(r, (S) => {
      o("update:valid", S);
    }), re($, (S) => {
      o("update:options", S);
    }), re(() => a.options, (S) => {
      $.value = Ti(S, a.prop), a.type === q.Select ? Lt(P.value, !1) : Lt(L.value, !1);
    });
    const Tt = async () => {
      y.value = [];
      const S = await Wn(), j = Zn(), le = [...S, ...j];
      let be = le.filter((ze) => ze.status === Le.Ko).length === 0;
      c.value = be, a.type !== q.Range && (y.value = le, r.value = be, o("validation-status", le));
    }, Zn = () => {
      var be, ze, Ee, $e, qe, je, Ge, Ke, Ye, nt, ot, st, at;
      let S = [], j = typeof a.min > "u" ? 0 : parseFloat(a.min), le = typeof a.max > "u" ? 0 : parseFloat(a.max);
      return a.type === q.Number && typeof a.min < "u" && typeof a.max < "u" && (L.value < j || L.value > le) ? (S.push(Ne.createNumBetween(j, le, Le.Ko)), r.value = !1, S) : (![q.Number, q.Email].includes(a.type) && a.mandatory && L.value === "" ? S.push(Ne.createEmpty(Le.Ko)) : a.type !== q.Email && j > 0 && (a.type !== q.Number && L.value.length < j ? S.push(Ne.createMinStr(j, Le.Ko)) : L.value < j && S.push(Ne.createMinNum(j, Le.Ko))), le > 0 && (a.type !== q.Number && L.value.length > le ? S.push(Ne.createMaxStr(le, Le.Ko)) : L.value > le && S.push(Ne.createMaxNum(le, Le.Ko))), a.type === q.Email && (a.mandatory && L.value === "" ? S.push(Ne.createEmpty(Le.Ko)) : yo(L.value) || S.push(Ne.createEmail(Le.Ko))), So.includes(a.type) && (Xo(S, L.value, (be = a.validation) == null ? void 0 : be.minNumbers, (ze = a.validation) == null ? void 0 : ze.maxNumbers), Jo(S, L.value, (Ee = a.validation) == null ? void 0 : Ee.minUpperChars, ($e = a.validation) == null ? void 0 : $e.maxUpperChars), Qo(S, L.value, (qe = a.validation) == null ? void 0 : qe.minLowerChars, (je = a.validation) == null ? void 0 : je.maxLowerChars), es(S, L.value, (Ge = a.validation) == null ? void 0 : Ge.minChars, (Ke = a.validation) == null ? void 0 : Ke.maxChars), ts(S, L.value, (Ye = a.validation) == null ? void 0 : Ye.minSpecialChars, (nt = a.validation) == null ? void 0 : nt.maxSpecialChars)), (ot = a.validation) != null && ot.checkEqualTo && L.value !== ((st = a.validation) == null ? void 0 : st.checkEqualTo) && S.push(Ne.createEqualTo((at = a.validation) == null ? void 0 : at.checkEqualTo, Le.Ko)), S);
    }, Lt = (S, j = !0) => {
      var le, be, ze, Ee, $e, qe, je, Ge, Ke, Ye;
      if ($.value.length === 0) {
        X.value = [];
        return;
      }
      switch (a.type) {
        case q.Select:
          a.searchable ? X.value = Oi($.value, S, !0, (le = a.optionsConfig) == null ? void 0 : le.filter) : X.value = $.value, W.value = !1, j && (B.value = typeof ((ze = (be = a.optionsConfig) == null ? void 0 : be.http) == null ? void 0 : ze.resource) < "u" && (($e = (Ee = a.optionsConfig) == null ? void 0 : Ee.http) == null ? void 0 : $e.resource) !== "" || X.value.length > 0), G();
          return;
        case q.Text:
        case q.Search:
          X.value = Oi($.value, S, !1, (qe = a.optionsConfig) == null ? void 0 : qe.filter), W.value = !1, j && (B.value = typeof ((Ge = (je = a.optionsConfig) == null ? void 0 : je.http) == null ? void 0 : Ge.resource) < "u" && ((Ye = (Ke = a.optionsConfig) == null ? void 0 : Ke.http) == null ? void 0 : Ye.resource) !== "" || X.value.length > 0);
          return;
      }
    }, Wt = async (S, j = !0) => {
      var le, be, ze, Ee, $e, qe, je, Ge, Ke, Ye, nt, ot, st, at, Ht, ke, rt, ut, dt, ct, ft, ht, pt, mt;
      if (!(!C.value && !((le = a.optionsConfig) != null && le.autoloadResource) && !V.value) && ![
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
        if (W.value = !1, (be = a.optionsConfig) != null && be.autoloadResource && !V.value && (R.value = !0), typeof ((Ee = (ze = a.optionsConfig) == null ? void 0 : ze.http) == null ? void 0 : Ee.resource) < "u" && ((qe = ($e = a.optionsConfig) == null ? void 0 : $e.http) == null ? void 0 : qe.resource) !== "") {
          W.value = !0;
          let lt = {};
          typeof ((Ge = (je = a.optionsConfig) == null ? void 0 : je.http) == null ? void 0 : Ge.data) == "object" && (lt = { ...a.optionsConfig.http.data }), te.searchKeyForResource !== "" && (lt[te.searchKeyForResource] = S), (nt = (Ye = (Ke = a.optionsConfig) == null ? void 0 : Ke.http) == null ? void 0 : Ye.events) != null && nt.onStart && typeof ((at = (st = (ot = a.optionsConfig) == null ? void 0 : ot.http) == null ? void 0 : st.events) == null ? void 0 : at.onStart) == "function" && a.optionsConfig.http.events.onStart();
          const Xe = await Si((ke = (Ht = a.optionsConfig) == null ? void 0 : Ht.http) == null ? void 0 : ke.resource, lt);
          (dt = (ut = (rt = a.optionsConfig) == null ? void 0 : rt.http) == null ? void 0 : ut.events) != null && dt.onEnd && typeof ((ht = (ft = (ct = a.optionsConfig) == null ? void 0 : ct.http) == null ? void 0 : ft.events) == null ? void 0 : ht.onEnd) == "function" && a.optionsConfig.http.events.onEnd(Xe);
          const qt = Array.isArray(Xe.data) && Xe.data.length > 0;
          W.value = !1, qt && ($.value = Vo($.value, Xe.data, a.prop), Lt(S, j), (pt = a.optionsConfig) != null && pt.autoloadResource && !V.value && (((mt = a.optionsConfig) == null ? void 0 : mt.autoloadResource) === "feed" && (a.multiple ? X.value.forEach((jt) => {
            Mt(jt);
          }) : X.value.length > 0 && Mt(X.value[0])), V.value = !0, R.value = !1), o("options-loaded", Xe.data));
        } else
          Lt(S, j);
    }, Ii = (S) => {
      var be, ze;
      let j = X.value.length - 1;
      if (j === -1) return;
      const le = S.key ?? "";
      if (m.value)
        if (["ArrowDown", "ArrowUp", "Enter"].includes(le) && (S.preventDefault(), S.stopPropagation()), le === "ArrowDown") {
          ++D.value, D.value > j && (D.value = 0);
          let Ee = (be = z.value) == null ? void 0 : be.querySelector('[data-index="' + D.value + '"]');
          Ee && Ee.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else if (le === "ArrowUp") {
          --D.value, D.value < 0 && (D.value = j);
          let Ee = (ze = z.value) == null ? void 0 : ze.querySelector('[data-index="' + D.value + '"]');
          Ee && Ee.scrollIntoView({ behavior: "instant", block: "start", inline: "nearest" });
        } else le === "Enter" && D.value > -1 && Mt(X.value[D.value]);
    }, $n = Q(() => {
      var S;
      return !(y.value.length === 0 || ((S = a.validation) == null ? void 0 : S.trigger) === Eo.Blur && (!g.value || !h.value));
    }), Mi = () => {
      if (a.type === q.Html) {
        w.value && w.value.setValue(K.value);
        return;
      } else if (a.type === q.Date) {
        s.value = A.value;
        return;
      } else if (a.type === q.File) {
        s.value = A.value, k.value = _.value;
        return;
      }
      L.value = K.value;
    }, al = () => {
      if (a.type === q.Html) {
        w.value && w.value.setValue("");
        return;
      } else if (a.type === q.Date) {
        s.value = "";
        return;
      } else if (a.type === q.File) {
        s.value = "", k.value = "";
        return;
      } else if (a.type === q.Select) {
        L.value = a.multiple ? [] : "", F.value = [];
        return;
      }
      L.value = "";
    }, qn = () => L.value, rl = (S) => {
      bl.includes(a.type) ? (Wt(L.value), Ii(S)) : a.type === q.Select && Ii(S), o("keyup", S);
    }, ul = () => {
      w.value && w.value.keepFocused();
    }, jn = () => {
      if (B.value) {
        if (a.type === q.Select) {
          fl();
          return;
        }
        return $t();
      }
      if (a.type === q.Select) {
        cl();
        return;
      }
      return Zt();
    }, Mt = (S, j = !1) => {
      if (!S.disabled)
        if (a.multiple) {
          let le = -1;
          a.optionValueType === "option" ? le = zt(S, L.value.map((be) => be.value)) : le = zt(S, L.value), le === -1 ? (a.optionValueType === "option" ? L.value.push(S.value) : L.value.push(String(S.value)), j || F.value.push(S)) : j || (L.value.splice(le, 1), F.value.splice(le, 1)), ul(), o("selected-option", S);
        } else
          D.value = -1, a.optionValueType === "option" ? L.value = S : L.value = String(S.value), F.value.splice(0, 1, S), B.value = !1, I.value = !1, o("selected-option", S);
    }, dl = (S) => o("keydown", S), Zt = (S) => {
      h.value = !0, m.value = !0, Tt(), o("focus", S);
    }, $t = (S) => {
      setTimeout(() => {
        if (!(a.searchable && I.value)) {
          if (a.multiple) {
            B.value = !0, m.value = !0;
            return;
          }
          g.value = !0, D.value = -1, B.value = !1, m.value = !1, Tt(), o("blur", S);
        }
      }, 100);
    }, Di = (S) => {
      h.value = !0, m.value = !0, o("focus", S);
    }, Vi = (S) => {
      g.value = !0, m.value = !1, o("blur", S);
    }, Gn = (S) => {
      Ii(S);
    }, Kn = (S) => {
      P.value = S, Wt(S);
    }, Yn = (S) => {
      let j = new Ei({
        value: S,
        label: S
      }), le = -1;
      a.optionValueType === "option" ? le = zt(j, L.value.map((be) => be.value)) : le = zt(j, L.value), le === -1 && ($.value.push(j), X.value.push(j), F.value.push(j), Mt(j, !0)), P.value = "";
    }, Xn = (S) => {
      let j = -1;
      a.optionValueType === "option" ? j = zt(S, L.value.map((le) => le.value)) : j = zt(S, L.value), j >= 0 && (L.value.splice(j, 1), F.value.splice(j, 1), a.canTag && ($.value.splice(
        $.value.findIndex((le) => le.value === S.value),
        1
      ), X.value.splice(
        X.value.findIndex((le) => le.value === S.value),
        1
      ))), P.value = "";
    }, cl = () => {
      var S, j;
      if (h.value = !0, m.value = !0, !((j = (S = a.optionsConfig) == null ? void 0 : S.http) != null && j.resource) && X.value.length === 0) {
        B.value = !1;
        return;
      }
      B.value = !0, Tt(), Wt(P.value, !1), a.searchable && ul(), o("focus");
    }, fl = () => {
      g.value = !0, m.value = !1, o("blur");
    }, Dt = (S) => {
      o("change", S, L.value);
    }, Vt = (S) => {
      o("click", S);
    }, Jn = (S) => o("click-info", S), Qn = (S) => o("click-error", S), hl = () => {
      let S = a.step ?? 1;
      typeof S == "string" && (S = parseFloat(S));
      let j = String(S).split(".")[0].length;
      (!a.min || L.value > a.min) && (L.value = parseFloat((parseFloat(L.value) - S).toFixed(j)));
    }, eo = () => {
      let S = a.step ?? 1;
      typeof S == "string" && (S = parseFloat(S));
      let j = String(S).split(".")[0].length;
      (!a.max || L.value < a.max) && (L.value = parseFloat((parseFloat(L.value) + S).toFixed(j)));
    }, to = () => {
      C.value && sl();
    }, io = (S) => {
      wl({
        text: yt.defaultUploadSuccessText,
        details: yt.defaultUploadSuccessDetails,
        icon: yt.defaultUploadSuccessIcon,
        positionX: yl.Right
      }), o("upload-success", S);
    }, lo = (S) => {
      wl({
        text: yt.defaultUploadErrorText,
        details: yt.defaultUploadErrorDetails,
        icon: yt.defaultUploadErrorIcon,
        positionX: yl.Right
      }), o("upload-error", S);
    }, no = () => {
      o("uploading");
    }, oo = (S) => {
      o("picked-files", S);
    }, so = (S) => {
      if (!a.enableAutoNumberFix) return !1;
      let j = Number(S), le = Do(j, Ae.value, ve.value);
      return j !== le ? (L.value = le, !0) : !1;
    };
    t({
      Identifier: d,
      reset: Mi,
      focus: sl,
      value: qn,
      isMandatory: () => a.mandatory,
      isFormValid: () => c.value,
      isValid: () => r.value,
      click: () => {
        var S;
        switch (a.type) {
          case q.File:
            return (S = w.value) == null ? void 0 : S.click();
        }
        T.value.click();
      }
    });
    const ao = Q(() => a.editSlot !== "" && typeof te.customEditSlots[a.editSlot] < "u"), ro = Q(() => te.customEditSlots[a.editSlot]);
    Li(() => {
      var S;
      $.value = Ti(a.options, a.prop), Lt("", !1), G(), a.type === q.Select && (a.multiple && (I.value = !0), (S = a.optionsConfig) != null && S.autoloadResource && Wt("", !1)), Tt(), Z.value = !0;
    });
    const uo = Q(() => bt.includes(a.type) && !de.value ? "label" : "div"), co = Q(() => bt.includes(a.type) ? {
      for: d
    } : {}), fo = Q(() => {
      switch (a.type) {
        case q.Select:
          return F.value;
        case q.Date:
          return gn(s.value, N.value);
        case q.File:
        case q.Image:
          return s.value;
        default:
          return L.value;
      }
    });
    return (S, j) => {
      var Ee, $e, qe, je, Ge, Ke, Ye, nt, ot, st, at, Ht;
      const le = pe("lkt-button"), be = pe("lkt-loader"), ze = pe("lkt-tooltip");
      return O(), ne("div", {
        class: Ve(["lkt-field", Fe.value]),
        "data-show-ui": ye.value,
        "data-labeled": !U(l).label,
        ref_key: "container",
        ref: T
      }, [
        U(l).label ? Qe(S.$slots, "label", { key: 0 }) : se("", !0),
        !U(l).label && wt.value !== "" && !U(bt).includes(S.type) ? (O(), ne("label", {
          key: 1,
          for: U(d),
          class: "lkt-field--label",
          innerHTML: wt.value
        }, null, 8, tu)) : se("", !0),
        ge("div", iu, [
          He.value ? (O(), ne("div", lu, [
            S.featuredButton === "password" && Ut.value ? (O(), ee(Ui, {
              key: 0,
              modelValue: p.value,
              "onUpdate:modelValue": j[0] || (j[0] = (ke) => p.value = ke),
              "is-featured": ""
            }, null, 8, ["modelValue"])) : se("", !0),
            Ri.value && U(x) === "i18n" && S.canI18n ? (O(), ee(xl, {
              key: 1,
              modelValue: s.value,
              "onUpdate:modelValue": j[1] || (j[1] = (ke) => s.value = ke),
              "is-featured": "",
              type: S.type
            }, null, 8, ["modelValue", "type"])) : se("", !0),
            Et.value && U(x) === "subtract" ? (O(), ee(le, Be({ key: 2 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              disabled: U(L) === Ae.value
            }, { onClick: hl }), null, 16)) : se("", !0)
          ])) : se("", !0),
          Ie.value ? (O(), ne("div", nu, [
            ge("i", {
              class: Ve(Ie.value)
            }, null, 2)
          ])) : se("", !0),
          C.value ? (O(), ee(Rt(uo.value), Be({ key: 2 }, co.value, { class: "lkt-field-main" }), {
            default: me(() => {
              var ke, rt, ut, dt, ct, ft, ht, pt, mt, lt, Xe, qt, jt, pl, ml;
              return [
                U(l).edit ? (O(), ne("div", {
                  key: 0,
                  onClick: Vt
                }, [
                  Qe(S.$slots, "edit", {
                    value: s.value,
                    title: Oe.value,
                    data: S.slotData
                  })
                ])) : ao.value ? (O(), ne("div", {
                  key: 1,
                  onClick: Vt
                }, [
                  (O(), ee(Rt(ro.value), {
                    value: s.value,
                    title: Oe.value,
                    data: S.slotData
                  }, null, 8, ["value", "title", "data"]))
                ])) : U(bt).includes(S.type) ? (O(), ee(rs, {
                  key: 2,
                  modelValue: U(L),
                  "onUpdate:modelValue": j[2] || (j[2] = (he) => Je(L) ? L.value = he : null),
                  ref_key: "inputElement",
                  ref: w,
                  id: U(d),
                  name: S.name,
                  type: S.type,
                  label: wt.value,
                  editable: C.value,
                  focusing: m.value,
                  disabled: de.value,
                  readonly: S.readonly,
                  onFocus: Di,
                  onBlur: Vi
                }, null, 8, ["modelValue", "id", "name", "type", "label", "editable", "focusing", "disabled", "readonly"])) : S.type === U(q).Color && S.multiple ? (O(), ee(Yo, {
                  key: 3,
                  modelValue: U(L),
                  "onUpdate:modelValue": j[3] || (j[3] = (he) => Je(L) ? L.value = he : null),
                  ref_key: "inputElement",
                  ref: w,
                  "edit-mode": C.value,
                  min: Ae.value,
                  max: ve.value
                }, null, 8, ["modelValue", "edit-mode", "min", "max"])) : S.type === U(q).Color ? (O(), ee(vn, {
                  key: 4,
                  modelValue: U(L),
                  "onUpdate:modelValue": j[4] || (j[4] = (he) => Je(L) ? L.value = he : null),
                  onChange: Dt,
                  ref_key: "inputElement",
                  ref: w
                }, null, 8, ["modelValue"])) : ie.value || ue.value ? (O(), ee(Ur, {
                  key: 5,
                  modelValue: s.value,
                  "onUpdate:modelValue": j[5] || (j[5] = (he) => s.value = he),
                  "file-name": k.value,
                  "onUpdate:fileName": j[6] || (j[6] = (he) => k.value = he),
                  ref_key: "inputElement",
                  ref: w,
                  id: U(d),
                  tabindex: S.tabindex,
                  resource: (ke = S.fileUploadHttp) == null ? void 0 : ke.resource,
                  "resource-data": (rt = S.fileUploadHttp) == null ? void 0 : rt.data,
                  name: S.name,
                  placeholder: Ze.value,
                  accept: xt.value,
                  focusing: m.value,
                  disabled: de.value,
                  readonly: S.readonly,
                  "is-image": S.type === U(q).Image,
                  "file-browser-config": S.fileBrowserConfig,
                  onChange: Dt,
                  onUploading: no,
                  onUploadSuccess: io,
                  onUploadError: lo,
                  onPickedFiles: oo
                }, null, 8, ["modelValue", "file-name", "id", "tabindex", "resource", "resource-data", "name", "placeholder", "accept", "focusing", "disabled", "readonly", "is-image", "file-browser-config"])) : Y.value ? (O(), ee(Yr, {
                  key: 6,
                  modelValue: s.value,
                  "onUpdate:modelValue": j[7] || (j[7] = (he) => s.value = he),
                  id: U(d),
                  tabindex: S.tabindex,
                  lang: H.value,
                  name: S.name
                }, null, 8, ["modelValue", "id", "tabindex", "lang", "name"])) : S.type === U(q).Select ? (O(), ee(gr, {
                  key: 7,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: U(L),
                  "onUpdate:modelValue": j[8] || (j[8] = (he) => Je(L) ? L.value = he : null),
                  "show-options": B.value,
                  "onUpdate:showOptions": j[9] || (j[9] = (he) => B.value = he),
                  searchable: S.searchable,
                  "search-mode": I.value,
                  "search-string": P.value,
                  multiple: S.multiple,
                  "can-tag": S.canTag,
                  "options-text": (ut = S.optionsConfig) == null ? void 0 : ut.text,
                  "options-icon": (dt = S.optionsConfig) == null ? void 0 : dt.icon,
                  "options-class": (ct = S.optionsConfig) == null ? void 0 : ct.class,
                  "option-slot": S.optionSlot,
                  "options-modal": (ft = S.optionsConfig) == null ? void 0 : ft.modal,
                  "options-download": (ht = S.optionsConfig) == null ? void 0 : ht.download,
                  "options-label-formatter": (pt = S.optionsConfig) == null ? void 0 : pt.labelFormatter,
                  "options-modal-data": (mt = S.optionsConfig) == null ? void 0 : mt.modalData,
                  "picked-options": F.value,
                  editable: C.value,
                  focusing: m.value,
                  "search-placeholder": Pe.value,
                  "multiple-display-edition": S.multipleDisplayEdition,
                  prop: S.prop,
                  onFocus: cl,
                  onBlur: fl,
                  onNavigate: Gn,
                  onSearch: Kn,
                  onChange: Dt,
                  onTag: Yn,
                  onUntag: Xn
                }, null, 8, ["modelValue", "show-options", "searchable", "search-mode", "search-string", "multiple", "can-tag", "options-text", "options-icon", "options-class", "option-slot", "options-modal", "options-download", "options-label-formatter", "options-modal-data", "picked-options", "editable", "focusing", "search-placeholder", "multiple-display-edition", "prop"])) : S.type === U(q).Calc ? (O(), ee(kr, {
                  key: 8,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: U(L),
                  "onUpdate:modelValue": j[10] || (j[10] = (he) => Je(L) ? L.value = he : null),
                  id: U(d),
                  tabindex: S.tabindex,
                  name: S.name,
                  editable: C.value,
                  focusing: m.value,
                  disabled: de.value,
                  readonly: S.readonly,
                  options: $.value,
                  onFocus: Di,
                  onBlur: Vi
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "disabled", "readonly", "options"])) : S.type === U(q).Search ? (O(), ee(Lr, {
                  key: 9,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: U(L),
                  "onUpdate:modelValue": j[11] || (j[11] = (he) => Je(L) ? L.value = he : null),
                  id: U(d),
                  tabindex: S.tabindex,
                  name: S.name,
                  editable: C.value,
                  focusing: m.value,
                  "had-first-focus": h.value,
                  disabled: de.value,
                  readonly: S.readonly,
                  "options-resource": (Xe = (lt = S.optionsConfig) == null ? void 0 : lt.http) == null ? void 0 : Xe.resource,
                  container: T.value,
                  onFocus: Di,
                  onBlur: Vi
                }, null, 8, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "container"])) : S.type === U(q).Card && a.multiple ? (O(), ee(Jr, {
                  key: 10,
                  modelValue: U(L),
                  "onUpdate:modelValue": j[12] || (j[12] = (he) => Je(L) ? L.value = he : null),
                  id: U(d),
                  tabindex: S.tabindex,
                  name: S.name,
                  editable: C.value,
                  focusing: m.value,
                  "had-first-focus": h.value,
                  disabled: de.value,
                  readonly: S.readonly,
                  "options-resource": (jt = (qt = S.optionsConfig) == null ? void 0 : qt.http) == null ? void 0 : jt.resource,
                  modal: Se.value,
                  "modal-key": U(n),
                  "modal-data": Me.value,
                  "item-type": U(v)
                }, Nt({ _: 2 }, [
                  U(l)["item-" + U(v)] ? {
                    name: "item",
                    fn: me(({ item: he }) => [
                      Qe(S.$slots, "item-" + U(v), { item: he })
                    ]),
                    key: "0"
                  } : U(l).item ? {
                    name: "item",
                    fn: me(({ item: he }) => [
                      Qe(S.$slots, "item", { item: he })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : S.type === U(q).Card ? (O(), ee(Un, {
                  key: 11,
                  modelValue: U(L),
                  "onUpdate:modelValue": j[13] || (j[13] = (he) => Je(L) ? L.value = he : null),
                  id: U(d),
                  tabindex: S.tabindex,
                  name: S.name,
                  editable: C.value,
                  focusing: m.value,
                  "had-first-focus": h.value,
                  disabled: de.value,
                  readonly: S.readonly,
                  "options-resource": (ml = (pl = S.optionsConfig) == null ? void 0 : pl.http) == null ? void 0 : ml.resource,
                  modal: Se.value,
                  "modal-key": U(n),
                  "modal-data": Me.value,
                  "item-type": U(v)
                }, Nt({ _: 2 }, [
                  U(l)["item-" + U(v)] ? {
                    name: "item",
                    fn: me(({ item: he }) => [
                      Qe(S.$slots, "item-" + U(v), { item: he })
                    ]),
                    key: "0"
                  } : U(l).item ? {
                    name: "item",
                    fn: me(({ item: he }) => [
                      Qe(S.$slots, "item", { item: he })
                    ]),
                    key: "1"
                  } : void 0
                ]), 1032, ["modelValue", "id", "tabindex", "name", "editable", "focusing", "had-first-focus", "disabled", "readonly", "options-resource", "modal", "modal-key", "modal-data", "item-type"])) : ce.value === "input" ? Ue((O(), ne("input", {
                  key: 12,
                  "onUpdate:modelValue": j[14] || (j[14] = (he) => Je(L) ? L.value = he : null),
                  ref: (he) => w.value = he,
                  value: U(L),
                  type: it.value,
                  name: S.name,
                  id: U(d),
                  disabled: de.value,
                  readonly: S.readonly,
                  placeholder: Ze.value,
                  tabindex: S.tabindex,
                  autocomplete: Re.value,
                  min: Ae.value,
                  max: ve.value,
                  step: S.step,
                  onKeyup: rl,
                  onKeydown: dl,
                  onFocus: Zt,
                  onBlur: $t,
                  onClick: Vt,
                  onChange: Dt
                }, null, 40, ou)), [
                  [go, U(L)]
                ]) : ce.value === "textarea" ? Ue((O(), ne("textarea", {
                  key: 13,
                  "onUpdate:modelValue": j[15] || (j[15] = (he) => Je(L) ? L.value = he : null),
                  ref: (he) => w.value = he,
                  name: S.name,
                  id: U(d),
                  disabled: de.value,
                  readonly: S.readonly,
                  placeholder: Ze.value,
                  tabindex: S.tabindex,
                  autocomplete: Re.value,
                  onKeyup: rl,
                  onKeydown: dl,
                  onFocus: Zt,
                  onBlur: $t,
                  onClick: Vt,
                  onChange: Dt
                }, null, 40, su)), [
                  [zi, U(L)]
                ]) : S.type === U(q).Html ? (O(), ee(cr, {
                  key: 14,
                  ref_key: "inputElement",
                  ref: w,
                  modelValue: U(L),
                  "onUpdate:modelValue": j[16] || (j[16] = (he) => Je(L) ? L.value = he : null),
                  id: U(d),
                  tabindex: S.tabindex,
                  name: S.name,
                  lang: H.value,
                  editable: C.value,
                  focusing: m.value,
                  disabled: de.value,
                  readonly: S.readonly,
                  onFocus: Zt,
                  onBlur: $t
                }, null, 8, ["modelValue", "id", "tabindex", "name", "lang", "editable", "focusing", "disabled", "readonly"])) : se("", !0)
              ];
            }),
            _: 3
          }, 16)) : se("", !0),
          C.value ? se("", !0) : (O(), ee(Hr, {
            key: 3,
            value: fo.value,
            type: S.type,
            label: wt.value,
            title: Oe.value,
            "file-name": k.value,
            "value-slot": S.valueSlot,
            "empty-value-slot": S.emptyValueSlot,
            "slot-data": S.slotData,
            download: U(u),
            multiple: S.multiple,
            multipleDisplay: S.multipleDisplay,
            modal: Se.value,
            "modal-key": U(n),
            "modal-data": Me.value,
            "option-slot": S.optionSlot,
            "options-download": (Ee = S.optionsConfig) == null ? void 0 : Ee.download,
            "options-modal": ($e = S.optionsConfig) == null ? void 0 : $e.modal,
            "options-modal-data": (qe = S.optionsConfig) == null ? void 0 : qe.modalData,
            "options-icon": (je = S.optionsConfig) == null ? void 0 : je.icon,
            "options-text": (Ge = S.optionsConfig) == null ? void 0 : Ge.text,
            "options-class": (Ke = S.optionsConfig) == null ? void 0 : Ke.class,
            "options-label-formatter": (Ye = S.optionsConfig) == null ? void 0 : Ye.labelFormatter,
            "options-resource": (ot = (nt = S.optionsConfig) == null ? void 0 : nt.http) == null ? void 0 : ot.resource,
            "options-resource-data": (at = (st = S.optionsConfig) == null ? void 0 : st.http) == null ? void 0 : at.data,
            "read-mode-config": S.readModeConfig,
            prop: S.prop,
            onClick: Vt
          }, Nt({ _: 2 }, [
            U(l).value ? {
              name: "value",
              fn: me(() => [
                Qe(S.$slots, s.value, {
                  value: s.value,
                  title: Oe.value,
                  data: S.slotData
                })
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["value", "type", "label", "title", "file-name", "value-slot", "empty-value-slot", "slot-data", "download", "multiple", "multipleDisplay", "modal", "modal-key", "modal-data", "option-slot", "options-download", "options-modal", "options-modal-data", "options-icon", "options-text", "options-class", "options-label-formatter", "options-resource", "options-resource-data", "read-mode-config", "prop"])),
          ye.value ? (O(), ne("div", au, [
            Ue(oe(hn, { onClick: Mi }, null, 512), [
              [gt, Qi.value]
            ]),
            Ue(oe(pn, { onClick: al }, null, 512), [
              [gt, el.value]
            ]),
            S.type === U(q).Number ? Ue((O(), ee(le, Be({ key: 0 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-less",
              disabled: U(L) === Ae.value
            }, { onClick: hl }), null, 16)), [
              [gt, Ki.value]
            ]) : se("", !0),
            S.type === U(q).Number ? Ue((O(), ee(le, Be({ key: 1 }, {
              class: "lkt-field--info-btn",
              icon: "lkt-icn-more",
              disabled: U(L) === ve.value
            }, { onClick: eo }), null, 16)), [
              [gt, Yi.value]
            ]) : se("", !0),
            St.value ? (O(), ee(le, {
              key: 2,
              title: S.errorMessage,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-attention",
              onClick: Qn
            }, null, 8, ["title"])) : se("", !0),
            et.value ? (O(), ee(le, {
              key: 3,
              class: "lkt-field--info-btn",
              icon: "lkt-icn-info",
              onClick: Jn,
              tooltip: "",
              "show-tooltip-on-hover": "",
              "show-tooltip-on-hover-delay": 500,
              "hide-tooltip-on-leave": ""
            }, {
              tooltip: me(() => [
                At(_t(S.infoMessage), 1)
              ]),
              _: 1
            })) : se("", !0),
            C.value && ol.value ? (O(), ee(Qr, {
              key: 4,
              config: S.fileUploadButton,
              "file-upload-http": S.fileUploadHttp
            }, null, 8, ["config", "file-upload-http"])) : se("", !0),
            S.type === U(q).Password ? Ue((O(), ee(Ui, {
              key: 5,
              modelValue: p.value,
              "onUpdate:modelValue": j[17] || (j[17] = (ke) => p.value = ke)
            }, null, 8, ["modelValue"])), [
              [gt, tl.value]
            ]) : se("", !0),
            Ue(oe(xl, {
              modelValue: s.value,
              "onUpdate:modelValue": j[18] || (j[18] = (ke) => s.value = ke),
              type: S.type
            }, null, 8, ["modelValue", "type"]), [
              [gt, il.value]
            ]),
            C.value && nl.value ? (O(), ee(mn, {
              key: 6,
              modelValue: C.value,
              "onUpdate:modelValue": j[19] || (j[19] = (ke) => C.value = ke),
              onClick: to
            }, null, 8, ["modelValue"])) : se("", !0),
            S.customButtonText || S.customButtonClass ? (O(), ee(le, {
              key: 7,
              text: S.customButtonText,
              class: "lkt-field--info-btn lkt-field--custom-btn",
              icon: S.customButtonClass
            }, null, 8, ["text", "icon"])) : se("", !0),
            C.value ? Ue((O(), ee(Fo, {
              key: 8,
              onClick: jn
            }, null, 512)), [
              [gt, ll.value]
            ]) : se("", !0),
            S.infoButtonEllipsis ? (O(), ee(Mo, {
              key: 9,
              "show-undo": Xi.value,
              "show-clear": Ji.value,
              "show-password": Ut.value,
              "show-edition": S.allowReadModeSwitch,
              "show-password-check": p.value,
              "onUpdate:showPasswordCheck": j[20] || (j[20] = (ke) => p.value = ke),
              "show-edition-check": C.value,
              "onUpdate:showEditionCheck": j[21] || (j[21] = (ke) => C.value = ke),
              onUndo: Mi,
              onClear: al
            }, null, 8, ["show-undo", "show-clear", "show-password", "show-edition", "show-password-check", "show-edition-check"])) : se("", !0)
          ])) : se("", !0)
        ]),
        C.value && $n.value ? (O(), ee(Er, {
          key: 2,
          items: y.value,
          stack: (Ht = S.validation) == null ? void 0 : Ht.stack
        }, null, 8, ["items", "stack"])) : se("", !0),
        C.value && U(bl).includes(S.type) ? (O(), ee(ze, Be({
          key: 3,
          ref_key: "dropdownEl",
          ref: M,
          class: "lkt-field--dropdown",
          modelValue: B.value,
          "onUpdate:modelValue": j[22] || (j[22] = (ke) => B.value = ke),
          referrer: T.value,
          "referrer-width": "",
          "location-x": "left-corner",
          "location-y": "bottom"
        }, S.tooltipConfig), {
          default: me(() => [
            B.value ? (O(), ne("div", ru, [
              W.value ? (O(), ee(be, { key: 0 })) : se("", !0),
              W.value ? se("", !0) : (O(), ne("ul", {
                key: 1,
                class: "lkt-field--dropdown-options",
                ref_key: "optionList",
                ref: z
              }, [
                (O(!0), ne(De, null, tt(X.value, (ke, rt) => {
                  var ut, dt, ct, ft, ht, pt, mt, lt, Xe;
                  return O(), ne("li", {
                    class: Ve({
                      "is-active": U(Ho)(ke, s.value, S.multiple),
                      "is-focused": rt === D.value,
                      "is-disabled": ke.disabled
                    }),
                    "data-index": rt,
                    onClick: () => Mt(ke)
                  }, [
                    U(l).option ? Qe(S.$slots, "option", {
                      key: 0,
                      option: ke,
                      data: S.slotData,
                      modal: (ut = S.optionsConfig) == null ? void 0 : ut.modal,
                      modalData: (dt = S.optionsConfig) == null ? void 0 : dt.modalData,
                      download: (ct = S.optionsConfig) == null ? void 0 : ct.download,
                      editable: C.value
                    }) : (O(), ee(Ct, {
                      key: 1,
                      option: ke,
                      "option-slot": S.optionSlot,
                      icon: (ft = S.optionsConfig) == null ? void 0 : ft.icon,
                      text: (ht = S.optionsConfig) == null ? void 0 : ht.text,
                      modal: (pt = S.optionsConfig) == null ? void 0 : pt.modal,
                      "modal-data": (mt = S.optionsConfig) == null ? void 0 : mt.modalData,
                      download: (lt = S.optionsConfig) == null ? void 0 : lt.download,
                      "label-formatter": (Xe = S.optionsConfig) == null ? void 0 : Xe.labelFormatter,
                      editable: C.value
                    }, null, 8, ["option", "option-slot", "icon", "text", "modal", "modal-data", "download", "label-formatter", "editable"]))
                  ], 10, uu);
                }), 256))
              ], 512))
            ])) : se("", !0)
          ]),
          _: 3
        }, 16, ["modelValue", "referrer"])) : se("", !0)
      ], 10, eu);
    };
  }
}), du = { class: "lkt-grid-1" }, cu = /* @__PURE__ */ _e({
  __name: "LktTextLanguageEditModal",
  props: {
    modalName: { default: "" },
    modalKey: { default: "_" },
    zIndex: { default: 500 },
    type: {},
    translations: { default: () => ({}) }
  },
  setup(e) {
    const t = Q(() => _o.value.filter((i) => i !== rn.value));
    return (i, o) => {
      const l = pe("lkt-modal");
      return O(), ee(l, {
        "modal-name": i.modalName,
        title: "__:lmm.confirmFormLeave",
        "modal-key": i.modalKey,
        "z-index": i.zIndex
      }, {
        default: me(() => [
          ge("div", du, [
            oe(It, {
              type: i.type,
              label: "Idioma actual (ES)",
              modelValue: i.translations.es,
              "onUpdate:modelValue": o[0] || (o[0] = (a) => i.translations.es = a),
              "can-clear": "",
              "can-undo": ""
            }, null, 8, ["type", "modelValue"]),
            (O(!0), ne(De, null, tt(t.value, (a) => (O(), ee(It, {
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
}), fu = { class: "lkt-file-entity-main" }, hu = /* @__PURE__ */ _e({
  __name: "FileEntityBox",
  props: {
    modelValue: {}
  },
  emits: [
    "double-click"
  ],
  setup(e, { emit: t }) {
    const i = e, o = t, l = J(i.modelValue), a = J(0);
    let d;
    const f = () => {
      ++a.value, a.value === 1 ? d = setTimeout(() => {
        l.value.isPicked = !l.value.isPicked, a.value = 0;
      }, 225) : (clearTimeout(d), o("double-click", l.value), a.value = 0);
    }, n = Q(() => l.value.isPicked ? "lkt-icn-checkbox" : "lkt-icn-checkbox-empty");
    return (b, u) => {
      const v = pe("lkt-icon"), w = pe("lkt-image");
      return O(), ne("div", {
        class: "lkt-file-entity-box",
        onClick: f
      }, [
        ge("div", fu, [
          l.value.type !== U(We).Directory ? (O(), ne("i", {
            key: 0,
            class: Ve(["lkt-file-entity-picked-indicator", n.value])
          }, null, 2)) : se("", !0),
          l.value.type === U(We).Directory ? (O(), ee(v, Bt(Be({ key: 1 }, {
            icon: "lkt-icn-folder",
            text: l.value.name
          })), null, 16)) : l.value.type === U(We).Image ? (O(), ee(w, Bt(Be({ key: 2 }, {
            src: l.value.src,
            text: l.value.name
          })), null, 16)) : se("", !0)
        ])
      ]);
    };
  }
}), pu = { class: "lkt-file-entity-details" }, mu = {
  key: 0,
  class: "lkt-grid-1"
}, gu = /* @__PURE__ */ _e({
  __name: "FileEntityDetails",
  props: {
    editMode: { type: Boolean, default: !1 },
    modelValue: {},
    fileBrowserConfig: {}
  },
  setup(e) {
    const i = J(e.modelValue);
    return (o, l) => {
      const a = pe("lkt-field");
      return O(), ne("div", pu, [
        i.value.type === U(We).Image ? (O(), ne("div", mu, [
          oe(a, Be({
            modelValue: i.value.src,
            "onUpdate:modelValue": l[0] || (l[0] = (d) => i.value.src = d)
          }, {
            type: U(q).Image,
            label: "File",
            readMode: !o.editMode
          }), null, 16, ["modelValue"]),
          oe(a, Be({
            modelValue: i.value.name,
            "onUpdate:modelValue": l[1] || (l[1] = (d) => i.value.name = d)
          }, {
            type: U(q).Text,
            label: "Name",
            readMode: !o.editMode
          }), null, 16, ["modelValue"])
        ])) : se("", !0)
      ]);
    };
  }
}), vu = { class: "lkt-flex-row" }, bu = { class: "lkt-flex-col-3" }, yu = { class: "lkt-flex-column" }, _u = { class: "lkt-flex-col-9" }, Cu = /* @__PURE__ */ _e({
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
    const i = e, o = J(!1), l = J([]), a = J({}), d = J(void 0), f = J(i.modelValue), n = (c) => {
      d.value = void 0, Bi(() => {
        d.value = c;
      });
    }, b = () => {
      var p, m, g;
      let c = new Cl();
      c.parent = (p = d.value) == null ? void 0 : p.id, (g = (m = d.value) == null ? void 0 : m.children) == null || g.push(c), n(c);
    }, u = (c, p) => {
      for (let m in p) {
        if (p[m].id === c) return p[m];
        if (p[m].children.length > 0) {
          let g = u(c, p[m].children);
          if (g) return g;
        }
      }
    }, v = () => {
      var c, p;
      if ((c = d.value) != null && c.parent) {
        let m = u((p = d.value) == null ? void 0 : p.parent, l.value);
        m && n(m);
      }
    }, w = () => {
      let c = [];
      f.value.forEach((p) => {
        let m = u(p, l.value);
        m && c.push(m);
      }), typeof i.onConfirmSelection == "function" && i.onConfirmSelection(c), Io(i.modalName, i.modalKey);
    }, x = Q(() => {
      var c;
      switch ((c = d.value) == null ? void 0 : c.type) {
        case We.Image:
          return "lkt-icn-picture";
        case We.Directory:
          return "lkt-icn-folder-open";
        default:
          return "";
      }
    }), E = (c) => {
      switch (c.type) {
        case We.Image:
          return "lkt-icn-picture";
        case We.Directory:
          return "lkt-icn-folder";
        default:
          return "";
      }
    }, A = (c) => {
      let p = E(c), m = {};
      return p !== "" && (m = {
        icon: p,
        position: No.Start
      }), {
        key: String(c.id),
        type: Ao.Anchor,
        anchor: {
          icon: m,
          text: c.name,
          type: Ro.Action,
          events: {
            click: () => {
              n(c);
            }
          }
        },
        keepOpenOnChildClick: !0,
        // class?: string;
        // icon?: string;
        children: c.children ? c.children.map(A) : []
      };
    }, s = (c) => {
      c.forEach((p) => {
        var m;
        p.isPicked && f.value.push(p.id), ((m = p.children) == null ? void 0 : m.length) > 0 && s(p.children);
      });
    }, r = () => {
      var c, p;
      (p = (c = i.fileBrowserConfig) == null ? void 0 : c.http) != null && p.resource && (o.value = !0, Si(i.fileBrowserConfig.http.resource, i.fileBrowserConfig.http.data).then((m) => {
        o.value = !1, l.value = m.data.map((g) => new Cl(g)), l.value.length > 0 && n(l.value[0]), l.value.forEach((g, h) => {
          var C;
          let y = `unit-${h}`;
          a.value[y] = ((C = g.children) == null ? void 0 : C.map(A)) ?? [];
        });
      }).catch((m) => {
        o.value = !1;
      }));
    };
    return re(d, (c) => {
    }, { deep: !0 }), re(l, (c) => {
      f.value = [], s(l.value);
    }, { deep: !0 }), Li(() => {
      r();
    }), (c, p) => {
      const m = pe("lkt-menu"), g = pe("lkt-accordion"), h = pe("lkt-button"), y = pe("lkt-table"), C = pe("lkt-item-crud"), _ = pe("lkt-modal");
      return O(), ee(_, {
        "modal-name": c.modalName,
        "modal-key": c.modalKey,
        "z-index": c.zIndex,
        title: "File Browser",
        class: "lkt-file-browser"
      }, {
        default: me(() => [
          ge("div", vu, [
            ge("div", bu, [
              (O(!0), ne(De, null, tt(l.value, (k, M) => (O(), ee(g, Be({ ref_for: !0 }, {
                modelValue: M === 0,
                title: k.name,
                toggleMode: U(zo).Display,
                type: l.value.length === 1 ? U(Fi).Always : U(Fi).Auto
              }), {
                default: me(() => [
                  ge("div", yu, [
                    oe(m, Be({ ref_for: !0 }, {
                      modelValue: a.value[`unit-${M}`]
                    }), null, 16)
                  ])
                ]),
                _: 2
              }, 1040))), 256))
            ]),
            ge("div", _u, [
              d.value ? (O(), ee(g, Bt(Be({ key: 0 }, {
                type: U(Fi).Always,
                icon: x.value,
                title: d.value.name
              })), {
                default: me(() => {
                  var k, M;
                  return [
                    [U(We).Directory, U(We).StorageUnit].includes(d.value.type) ? (O(), ee(y, Be({
                      key: 0,
                      modelValue: d.value.children,
                      "onUpdate:modelValue": p[0] || (p[0] = (T) => d.value.children = T)
                    }, {
                      type: U(fn).Item,
                      perms: [
                        U(Gt).SwitchEditMode,
                        U(Gt).Update,
                        U(Gt).Edit,
                        U(Gt).Create
                      ],
                      itemsContainerClass: "lkt-flex-rows-12 lkt-flex-rows-2--from-768",
                      saveButton: {
                        text: "Save",
                        type: U(kt).Button
                      },
                      createButton: {
                        text: "Create",
                        type: U(kt).Button
                      }
                    }, { onClickCreate: b }), Nt({
                      item: me(({ item: T, index: z }) => [
                        oe(hu, {
                          modelValue: d.value.children[z],
                          "onUpdate:modelValue": (B) => d.value.children[z] = B,
                          onDoubleClick: n
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, [
                      d.value.type !== U(We).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: me(() => [
                          oe(h, Bt(Hi({
                            icon: "lkt-icn-arrow-left",
                            events: {
                              click: v
                            }
                          })), null, 16),
                          oe(h, Bt(Hi({
                            icon: "lkt-icn-check",
                            disabled: f.value.length === 0,
                            events: {
                              click: w
                            }
                          })), null, 16)
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : (O(), ee(C, Be({
                      key: 1,
                      modelValue: d.value,
                      "onUpdate:modelValue": p[2] || (p[2] = (T) => d.value = T)
                    }, {
                      view: U(Bo).Inline,
                      mode: d.value.id ? U(_l).Update : U(_l).Create,
                      editing: !1,
                      perms: ["switch-edit-mode", "update"],
                      createButton: {
                        ...(k = c.fileBrowserConfig) == null ? void 0 : k.entityCreateButton,
                        resourceData: d.value,
                        events: {
                          click: () => {
                            for (let T in d.value)
                              c.modelValue[T] = c.entity[T];
                          }
                        }
                      },
                      updateButton: {
                        ...(M = c.fileBrowserConfig) == null ? void 0 : M.entityUpdateButton,
                        resourceData: d.value,
                        events: {
                          click: () => {
                            for (let T in d.value)
                              c.modelValue[T] = c.entity[T];
                          }
                        }
                      }
                    }), Nt({
                      item: me(({ item: T, editMode: z }) => [
                        oe(gu, {
                          modelValue: d.value,
                          "onUpdate:modelValue": p[1] || (p[1] = (B) => d.value = B),
                          "file-browser-config": c.fileBrowserConfig,
                          "edit-mode": z
                        }, null, 8, ["modelValue", "file-browser-config", "edit-mode"])
                      ]),
                      _: 2
                    }, [
                      d.value.type !== U(We).StorageUnit ? {
                        name: "prev-buttons-ever",
                        fn: me(() => [
                          oe(h, Bt(Hi({
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
}), Bu = (e, t) => (te.customValueSlots[e] = t, !0), Nu = (e, t) => (te.customEditSlots[e] = t, !0), Ru = {
  install: (e) => {
    e.component("lkt-field") === void 0 && (e.component("lkt-field", It), kl("lkt-field-language-edit", cu), kl("lkt-file-browser", Cu));
  }
}, Au = (e) => {
  te.defaultEmptyValueSlot = e;
}, Iu = (e, t) => {
  te.optionSlots[e] = t;
}, Mu = (e) => te.undoText = e, Du = (e) => te.clearText = e, Vu = (e) => te.i18nText = e, Hu = (e) => te.switchEditionOnText = e, Fu = (e) => te.switchEditionOffText = e, Ou = (e) => te.showPasswordOnText = e, Pu = (e) => te.showPasswordOffText = e, Uu = (e) => te.dateReadFormat = e, Wu = (e) => te.defaultDateReadFormat = e, Zu = (e, t, i = "default") => {
  i || (i = "default"), te.validationMessages[i] || (te.validationMessages[i] = {}), te.validationMessages[i][e] = t;
}, $u = (e) => (te.validationIconSlot = e, !0), qu = (e = 2, t = ".", i = ".", o = !0, l = "") => l !== "" ? (te.langNumberFormat[l].amountOfDecimals = e, te.langNumberFormat[l].decimalSeparator = t, te.langNumberFormat[l].thousandsSeparator = i, te.langNumberFormat[l].removeDecimalsIfZero = o, !0) : (te.amountOfDecimals = e, te.decimalSeparator = t, te.thousandsSeparator = i, te.removeDecimalsIfZero = o, !0), ju = (e) => {
  te.readTextMaxLength = e;
}, Gu = (e, t) => {
  te.modalPerItemType[e] = t;
};
export {
  Xu as Field,
  It as LktField,
  Ju as Option,
  Ru as default,
  Du as setFieldClearText,
  Uu as setFieldDateReadFormat,
  Wu as setFieldDefaultDateReadFormat,
  Au as setFieldEmptySlot,
  Vu as setFieldI18nText,
  qu as setFieldNumberFormat,
  Iu as setFieldOptionSlot,
  Pu as setFieldShowPasswordOffText,
  Ou as setFieldShowPasswordOnText,
  Fu as setFieldSwitchEditionOffText,
  Hu as setFieldSwitchEditionOnText,
  Mu as setFieldUndoText,
  $u as setFieldValidationIconSlot,
  Zu as setFieldValidationMessage,
  Gu as setModalPerItemType,
  ju as setReadTextMaxLength,
  Nu as setTextEditSlot,
  Bu as setTextValueSlot
};
