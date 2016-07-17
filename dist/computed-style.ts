/**
 * returns coumputed style of given element
 * @param el
 * @param styleProp
 * @returns {any}
 */
export function computedStyle(el: HTMLElement, styleProp: string): string {
  var value, defaultView = (el.ownerDocument || document).defaultView;
  // W3C standard way:
  if (defaultView && defaultView.getComputedStyle) {
    // sanitize property name to css notation
    // (hypen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  }
}
