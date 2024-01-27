import { animate, style, transition, trigger } from "@angular/animations";

export const fadeInOutTrigger = trigger("fadeInOutState", [
  transition("* => short", [
    style({
      opacity: 0,
      transform: "scale(0) translateY(-100%) translateX(-100%)",
    }),
    animate(500),
  ]),
  transition("* => medium", [
    style({
      opacity: 0,
      transform: "scale(0) translateY(-100%)",
    }),
    animate(500),
  ]),
  transition("* => long", [
    style({
      opacity: 0,
      transform: "scale(0) translateY(-100%) translateX(100%)",
    }),
    animate(500),
  ]),
]);
