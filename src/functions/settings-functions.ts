import {Settings} from "../settings/Settings";
import {Component} from "vue";

export const setTextValueSlot = (resource: string, component: string|Component) => {
    Settings.customValueSlots[resource] = component;
    return true;
}

export const setTextEditSlot = (resource: string, component: string|Component) => {
    Settings.customEditSlots[resource] = component;
    return true;
}