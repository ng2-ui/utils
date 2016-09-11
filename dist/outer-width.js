"use strict";
function outerWidth(el) {
    var style = getComputedStyle(el);
    return el.offsetWidth +
        parseInt(style.getPropertyValue('margin-left')) +
        parseInt(style.getPropertyValue('margin-right'));
}
exports.outerWidth = outerWidth;
//# sourceMappingURL=outer-width.js.map