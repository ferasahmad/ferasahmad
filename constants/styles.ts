/*
  ✨ Style Constants ✨

  Responsive Styling
  https://www.ios-resolution.com/


  Mobile                  px
  --------------------------
   iPhone 1 thru 5      320
   iPhone 6 thru 11     375
   iPhone 12            390
   iPhone 11 Max        414
   iPhone 12 Max        428

  Tablet                  px
  --------------------------
   iPad Air             768
   iPad Mini            768
   iPad 1 thru 6        768
   iPad 7+              810
   iPad Pro 9.7"        768
   iPad Pro 10.5"       834
   iPad Pro 12.9"      1024
*/

export const DESKTOP_BREAKPOINT = "834px"; // 1024px - iPad Pro (5th gen 12.9")
export const TABLET_BREAKPOINT = "834px"; // 834px - iPad Pro (5th gen 11")
export const SLIM_BREAKPOINT = "700px"; // 700px - stack columns when rows get too cramped
export const MOBILE_BREAKPOINT = "476px"; // 476px - iPhone 7 Plus (widest iPhone)

export const DEVICE_BREAKPOINTS = {
  IPHONE_SE: "375px", // 375px
  IPHONE_X: "320px", // 320px
  IPHONE_11: "375px", // 375px
  IPHONE_12: "390px", // 390px
  IPHONE_12_MAX: "428px", // 428px
};
