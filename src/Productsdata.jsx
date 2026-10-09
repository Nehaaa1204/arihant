// The two door ranges. Specs, sizes, codes and colours come from the catalogue
// data already on the site (ABS technical specification and FRP 2023 catalogue).
// To change a product page, edit it here.

export const PRODUCTS = {
  abs: {
    slug: "abs",
    path: "/abs-doors",
    title: "ABS Doors",
    tagline: "Waterproof, factory-made moulded doors",
    intro:
      "Waterproof solid fiber WPC frame with a high-density honeycomb or particle board core, reinforced with pine wood and finished with pre-laminated ABS sheets.",
    image: "/images/products/ABS DOOR TECHNICAL SPECIFICATION_page-0001.jpg",
    specs: [
      "Pre-laminated ABS sheet (1mm / 1.5mm)",
      "High-density honeycomb or particle board core (30mm)",
      "Waterproof solid fiber WPC frame, pine wood reinforcement",
      "0.8mm PVC edge banding",
      "Thickness: 30mm / 35mm",
    ],
    variants: [
      { code: "Plain Wood Grain", colours: ["R. Ivory", "White", "L. Grey", "G. Brown", "C. Brown"] },
      { code: "AD 002", colours: ["R. Ivory", "White", "L. Grey", "G. Brown", "C. Brown"] },
      { code: "AD 003", colours: ["G. Brown", "White", "L. Grey", "R. Ivory", "C. Brown"] },
    ],
  },
  frp: {
    slug: "frp",
    path: "/frp-doors",
    title: "FRP Doors",
    tagline: "Sound proof, water and stain resistant",
    intro:
      "Sound proof, stain and water resistant doors available in a wide range of moulded designs.",
    image: "/images/products/FRP 2023_page-0002.jpg",
    specs: [
      "Max size available: 36\" x 84\"",
      "Thickness: 30mm / 35mm",
      "Sound proof, stain resistant, water resistant, cost effective",
    ],
    variants: [
      { code: "AD 002", colours: ["R. Ivory", "White", "L. Grey", "G. Brown", "C. Brown"] },
      { code: "AD 004", colours: ["G. Brown", "White", "L. Grey", "R. Ivory", "C. Brown"] },
      { code: "AD 006", colours: ["C. Brown", "White", "L. Grey", "G. Brown", "R. Ivory"] },
      { code: "AD 008", colours: ["L. Grey", "White", "R. Ivory", "G. Brown", "C. Brown"] },
      { code: "AD 012", colours: ["G. Brown", "White", "C. Brown", "L. Grey", "R. Ivory"] },
      { code: "AD 014", colours: ["C. Brown", "White", "L. Grey", "G. Brown", "R. Ivory"] },
    ],
  },
};

export const PRODUCT_LIST = [PRODUCTS.abs, PRODUCTS.frp];