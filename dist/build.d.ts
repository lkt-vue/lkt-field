declare namespace tl {
    function install(n: any): void;
}
declare function al(n: any, p: any): void;
declare function ll(n: any, p: any): boolean;
declare function el(n: any, p: any): boolean;
export { tl as default, al as setDefaultTextEmptyValueSlot, ll as setTextEditSlot, el as setTextValueSlot };
