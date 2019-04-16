import posed from "react-pose";

export const Subtext = posed.section({
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

// export const LandingTitle = posed.h3({
//   enter: {
//     opacity: 0.7,
//     y: 0,
//     transition: {
//       duration: 600
//     },
//     exit: {
//       opacity: 0,
//       y: -400,
//       transition: {
//         duration: 600
//       }
//     }
//   }
// });

export const LandingTitle = posed.h3({
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 400,
    }
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 400
    }
  }
});

export const LandingSubtitle = posed.h2({
  enter: {
    opacity: 1,
    transition: {
      duration: 600,
      delay: 100
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 600,
      delay: 300
    }
  }
});

export const LandingNavItem = posed.a({
  hoverable: true,
  init: { opacity: 0.7, scale: 1, y: 0 },
  hover: { opacity: 1, scale: 1.3, y: -10 },
  enter: {
    opacity: 0.7,
    y: 0,
    transition: ({ delayFactor }) => ({
      duration: 700,
      delay: (delayFactor * 200) + 600 
    })
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 600
    }
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
  init: { scale: 1, rotate: 0, opacity: 0.6 },
  hover: { scale: 1.1, rotate: 360, opacity: 1 }
});

export const BackToTop = posed.a({
  hoverable: true,
  init: {
    scale: 0.8,
    rotate: 0,
    transition: {
      duration: 200
    }
  },
  hover: {
    scale: 1.3,
    rotate: 360,
    transition: {
      duration: 200
    }
  }
});
