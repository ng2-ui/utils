"use strict";
var index_1 = require('./index');
/**
 * return element visibility of top and bottom within outerElement
 * @param innerEl
 * @param outerEl (HTMLElement of window)
 * @param fullyVisible boolean optional
 * @returns boolean
 */
function isElementVisible(innerEl, outerEl, fullyVisible) {
    var innerRect = innerEl.getBoundingClientRect();
    var isTopVisible, isBottomVisible;
    if (outerEl === window) {
        isTopVisible = innerRect.top > 0;
        isBottomVisible = innerRect.bottom > 0;
    }
    else {
        var outerRect = outerEl.getBoundingClientRect();
        var outerRectBorderTopWidth = parseInt(index_1.computedStyle(outerEl, 'border-top-width'), 10);
        /* top is visible or bottom is visible */
        isTopVisible = (innerRect.top > 0
            && innerRect.top >= outerRect.top
            && innerRect.top < outerRect.bottom);
        isBottomVisible = (innerRect.bottom > 0
            && innerRect.bottom > (outerRect.top + outerRectBorderTopWidth)
            && innerRect.bottom < outerRect.bottom);
    }
    if (fullyVisible) {
        return isTopVisible && isBottomVisible;
    }
    else {
        return isTopVisible || isBottomVisible;
    }
}
exports.isElementVisible = isElementVisible;
//# sourceMappingURL=is-element-visible.js.map