import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from "@angular/animations";

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave,', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        }),
      ], {optional: true}),
      query(':enter', [
        animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ], {optional: true})
    ]),
]);



export const slider =
  trigger('routeAnimations', [
    transition('* => aboutMe', slideTo('left') ),
    transition('* => contactMe', slideTo('right') ),
    transition('contactMe => myBlogs', slideTo('left') ),
    transition('aboutMe => myBlogs', slideTo('right') ),

  ]);

function slideTo(direction:any) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: '81px',
        [direction]: 0,
        width: '100%',
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [

        animate('600ms ease', style({ [direction]: '105%'})),
        animate('100ms ease', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({ [direction]: '5%'})),
        animate('100ms ease', style({ [direction]: '0'}))
      ])
    ]),
  ];
}