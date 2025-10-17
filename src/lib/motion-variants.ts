import { type Variants } from "framer-motion";

/**
 * Container variant with staggered children animation
 * Use this for parent elements that contain multiple animated children
 */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

/**
 * Fade in and slide up animation
 * Perfect for text content, cards, and sections
 */
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * Fade in and slide down animation
 * Good for dropdowns, modals, and top-positioned elements
 */
export const fadeInDownVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * Fade in and slide from left
 * Ideal for LTR content and side panels
 */
export const fadeInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * Fade in and slide from right
 * Ideal for RTL content, images, and side panels
 */
export const fadeInRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * Simple fade in animation
 * Clean and minimal, works for any element
 */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * Scale and fade animation
 * Great for icons, badges, and feature highlights
 */
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * Zoom in animation with bounce
 * Eye-catching for CTAs and important elements
 */
export const zoomInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1] as const, // Bounce effect
    },
  },
};

/**
 * Slide in from bottom (drawer style)
 * Perfect for modals, drawers, and bottom sheets
 */
export const slideInBottomVariants: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * Rotate and fade in
 * Unique effect for special elements
 */
export const rotateInVariants: Variants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * Stagger container with faster timing
 * For lists, grids, and rapid sequences
 */
export const staggerFastVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0,
    },
  },
};

/**
 * Stagger container with slower timing
 * For dramatic reveals and hero sections
 */
export const staggerSlowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

/**
 * Card hover animation
 * Use with whileHover prop on motion elements
 */
export const cardHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * Button press animation
 * Use with whileTap prop on buttons
 */
export const buttonTapVariants = {
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};

/**
 * Blur in animation
 * Modern effect for overlays and backgrounds
 */
export const blurInVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * Page transition variants
 * For Next.js page animations
 */
export const pageVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

/**
 * Marquee/infinite scroll variants
 * For continuous scrolling elements
 */
export const marqueeVariants = {
  animate: {
    x: [0, -1000],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 20,
        ease: "linear",
      },
    },
  },
};

/**
 * Pulse animation
 * For notifications, badges, and attention-grabbers
 */
export const pulseVariants: Variants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};
