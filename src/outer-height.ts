export function outerHeight(el: any) {
    var style = getComputedStyle(el);

    return el.offsetHeight +
      parseInt(style.getPropertyValue('margin-top')) +
      parseInt(style.getPropertyValue('margin-bottom'));
  }
