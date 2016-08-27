export function outerWidth(el: any) {
    var style = getComputedStyle(el);
    
    return el.offsetWidth  +
      parseInt(style.getPropertyValue('margin-left')) +
      parseInt(style.getPropertyValue('margin-right'));
}
  
