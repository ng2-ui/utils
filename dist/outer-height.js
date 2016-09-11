"use strict";
function outerHeight(el) {
    var style = getComputedStyle(el);
    return el.offsetHeight +
        parseInt(style.getPropertyValue('margin-top')) +
        parseInt(style.getPropertyValue('margin-bottom'));
}
exports.outerHeight = outerHeight;
//# sourceMappingURL=outer-height.js.map