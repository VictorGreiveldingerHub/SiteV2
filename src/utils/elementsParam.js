// Rassembler ici tous les objets parametre du site pour éviter d'emcombrer le state de l'app.

export const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

export const rectangleDisapear = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
};

export const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    },
};

export const imageVariants = {
    initial: {
      opacity: 0,
      x: "100vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "-100vw",
      scale: 1.2
    },
};

export const imageTransition = {
    ease: "easeIn",
    delay: 5
};

export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1,
};

export const pageStyle = {
    position: "absolute",
};

export const transition = {
    duration: 1.4,
    ease: [0.6, 0.01, -0.05, 0.9],
};