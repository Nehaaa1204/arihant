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
    image: "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20SOLID%20COLOUR/001%20-%20L-GREY.jpeg",
    detailImages: [
      "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20SOLID%20COLOUR/001%20-%20L-GREY.jpeg",
    ],
    gallerySections: [
      {
        title: "ABS Solid Color",
        images: [
          "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20SOLID%20COLOUR/001%20-%20L-GREY.jpeg",
          "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20SOLID%20COLOUR/001%20-%20R-IVORY.jpeg",
          "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20SOLID%20COLOUR/003%20-%20WHITE.jpeg",
          "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20SOLID%20COLOUR/004%20G-BROWN.jpeg",
        ],
      },
      {
        title: "ABS Wooden Color",
        images: [
          "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20WOODEN%20COLOUR/PLAIN%20V2.jpeg",
          "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20WOODEN%20COLOUR/PLAIN%20V3.jpeg",
          "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20WOODEN%20COLOUR/WOODEN%204.jpeg",
          "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20WOODEN%20COLOUR/006%20-V9.jpeg",
        ],
      },
    ],
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
    image: "/images/products/HYBRID%20FRP%20DOOR%20CROSS%20SECTION%20(1).jpeg",
    detailImages: [
      "/images/products/HYBRID%20FRP%20DOOR%20CROSS%20SECTION%20(1).jpeg",
    ],
    gallerySections: [
      {
        title: "FRP Door Images",
        images: [
          "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/FRP%20DOOR%20IMAGES/AD002%20%20-%20IVORY.jpg",
          "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/FRP%20DOOR%20IMAGES/AD003%20%20-%20G-BROWN%20ANTIQUE.jpg",
          "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/FRP%20DOOR%20IMAGES/AD004%20-%20G-BROWN.jpg",
          "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/FRP%20DOOR%20IMAGES/AD008-L-GREY%20.jpg",
          "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/FRP%20DOOR%20IMAGES/AD12-%20L-GREY.jpg",
        ],
      },
    ],
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