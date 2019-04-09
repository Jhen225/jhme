import posed from 'react-pose';

export const Subtext = posed.p({
  open: { opacity: 1 },
  closed: { opacity: 0 },
});

export const HiddenRight = posed.div({
  open: {
    x: 0,
    delayChildren: 200,
    staggerChildren: 50,
  },
  closed: {
    x: '100%',
    delay: 300,
  },
});

export const HiddenLeft = posed.div({
  open: {
    x: 0,
    delayChildren: 200,
    staggerChildren: 50,
  },
  closed: {
    x: '-100%',
    delay: 300,
  },
});

export const InputContainer = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 },
});

export const LandingNavItem = posed.a({
    hoverable: true,
    init: {
        scale: 1,
        opacity: .8
    },
    hover: {
        scale: 1.2,
        opacity: 1
    }
});

export const WorkItem = posed.div({
    open: { y: 0, opacity: 1 },
//   closed: { y: 20, opacity: 0 },
});
