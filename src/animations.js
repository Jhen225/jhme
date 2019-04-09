import posed from "react-pose";

export const Subtext = posed.p({
  open: { opacity: 1 },
  closed: { opacity: 0 }
});

export const HiddenRight = posed.div({
  open: {
    x: 0,
    delayChildren: 200,
    staggerChildren: 50,
    transition: {
      type: "tween"
    }
  },
  closed: {
    x: "100%",
    delay: 300,
    transition: {
      type: "tween"
    }
  }
});

export const HiddenLeft = posed.div({
  open: {
    x: 0,
    delayChildren: 200,
    staggerChildren: 50,
    transition: {
      type: "tween"
    }
  },
  closed: {
    x: "-100%",
    delay: 300,
    transition: {
      type: "tween"
    }
  }
});

export const InputContainer = posed.div({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

export const LandingNavItem = posed.a({
  hoverable: true,
  init: { opacity: .7, scale: 1 },
  hover: { opacity: 1, scale: 1.3 },
  enter: {
    opacity: .7,
    y: 0
  },
  exit: {
    opacity: 0,
    y: 20
  }
});

export const WorkItem = posed.div({
  open: { y: 0, opacity: 1 }
  //   closed: { y: 20, opacity: 0 },
});

export const SubmitButton = posed.button({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

export const CloseButton = posed.div({
  hoverable: true,
  init: {scale: 1, rotate: 0, opacity: .6},
  hover: {scale: 1.1, rotate: 360, opacity: 1}
})