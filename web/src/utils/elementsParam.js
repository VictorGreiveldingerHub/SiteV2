// Rassembler ici tous les objets parametre du site pour éviter d'emcombrer le state de l'app.

// export const variants = {
//   visible: { opacity: 1 },
//   hidden: { opacity: 0 },
// };

export const rectangleDisapear = {
  visible: {opacity: 1},
  hidden: {opacity: 0}
};

export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};

export const pageTransition = {
  type: "tween",
  ease: [0.6, 0.01, -0.05, 0.9],
  duration: 1,
};

export const imageVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100vw",
  },
};

export const imageTransition = {
  ease: "easeOut",
  delay: 4.2,
};


export const pageStyle = {
  position: "absolute",
};

export const transition = {
  duration: 2,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export const imageDetails = {
  width: 524,
  height: 650,
};