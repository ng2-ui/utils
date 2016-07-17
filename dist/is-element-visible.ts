import { computedStyle } from './index';

/**
 * return element visibility of top and bottom within outerElement
 * @param innerEl
 * @param outerEl (HTMLElement of window)
 * @param fullyVisible boolean optional
 * @returns boolean
 */
export function isElementVisible(
  innerEl: HTMLElement, 
  outerEl: HTMLElement | Window, 
  fullyVisible: boolean
): boolean {
  let innerRect = innerEl.getBoundingClientRect();
  let isTopVisible: boolean, isBottomVisible: boolean;

  if (outerEl === window) {
    isTopVisible = innerRect.top > 0;
    isBottomVisible = innerRect.bottom > 0;
  } else {
    let outerRect = (<HTMLElement>outerEl).getBoundingClientRect();
    let outerRectBorderTopWidth = parseInt(computedStyle(<HTMLElement>outerEl, 'border-top-width'), 10);

    /* top is visible or bottom is visible */
    isTopVisible = (
      innerRect.top > 0
      && innerRect.top >= outerRect.top
      && innerRect.top < outerRect.bottom
    );
    isBottomVisible = (
      innerRect.bottom > 0
      && innerRect.bottom > (outerRect.top + outerRectBorderTopWidth)
      && innerRect.bottom < outerRect.bottom
    );
  }

  if (fullyVisible) {
    return isTopVisible && isBottomVisible;
  } else {
    return isTopVisible || isBottomVisible;
  }
}
