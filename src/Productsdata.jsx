// The two door ranges. Specs, sizes, codes and colours come from the catalogue
// data already on the site (ABS technical specification and FRP 2023 catalogue).
// To change a product page, edit it here.
//
//   image      -> cover photo on the home page card (file in /public/images/products/)
//   cover      -> wide image behind the title on the ABS / FRP page
//   doorImage  -> the door photo shown in the middle of the "Why ABS / FRP" diagram
//   features   -> the labels that point outwards from the door

// Colour swatches used on the "Available designs" cards.
export const COLOUR_HEX = {
  "R. Ivory": "#EDE4CF",
  White: "#FFFFFF",
  "L. Grey": "#BDC1C6",
  "G. Brown": "#8A6240",
  "C. Brown": "#4E3527",
};

export const PRODUCTS = {
  abs: {
    slug: "abs",
    path: "/abs-doors",
    title: "ABS Doors",
    tagline: "Waterproof, factory-made moulded doors",
    intro:
      "Waterproof solid fiber WPC frame with a high-density honeycomb or particle board core, reinforced with pine wood and finished with pre-laminated ABS sheets.",
    image: "/images/products/ABS_Cover_page.jpeg",
    cover:
      "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20WOODEN%20COLOUR/PLAIN%20V2.jpeg",
    doorImage:
      "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20SOLID%20COLOUR/003%20-%20WHITE.jpeg",
    features: [
      "Premium",
      "Style & Durability",
      "Korean Technology Inspired",
      "ISO Certified",
      "Waterproof",
    ],
    detailImages: [
      "/images/products/ABS%20DOOR%20TECHNICAL%20SPECIFICATION_page-0001.jpg",
    ],
    gallerySections: [
      {
        title: "ABS Solid Color",
        images: [
          "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20SOLID%20COLOUR/002-L-GREY.jpeg",
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
      { group: "ABS Solid Color", code: "001 · L. Grey", image: "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20SOLID%20COLOUR/001%20-%20L-GREY.jpeg", colours: ["L. Grey"] },
      { group: "ABS Solid Color", code: "001 · R. Ivory", image: "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20SOLID%20COLOUR/001%20-%20R-IVORY.jpeg", colours: ["R. Ivory"] },
      { group: "ABS Solid Color", code: "003 · White", image: "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20SOLID%20COLOUR/003%20-%20WHITE.jpeg", colours: ["White"] },
      { group: "ABS Solid Color", code: "004 · G. Brown", image: "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20SOLID%20COLOUR/004%20G-BROWN.jpeg", colours: ["G. Brown"] },
      { group: "ABS Wooden Color", code: "Plain V2", image: "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20WOODEN%20COLOUR/PLAIN%20V2.jpeg", colours: [] },
      { group: "ABS Wooden Color", code: "Plain V3", image: "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20WOODEN%20COLOUR/PLAIN%20V3.jpeg", colours: [] },
      { group: "ABS Wooden Color", code: "Wooden 4", image: "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20WOODEN%20COLOUR/WOODEN%204.jpeg", colours: [] },
      { group: "ABS Wooden Color", code: "006 · V9", image: "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/ABS%20WOODEN%20COLOUR/006%20-V9.jpeg", colours: [] },
    ],
  },
  frp: {
    slug: "frp",
    path: "/frp-doors",
    title: "FRP Doors",
    tagline: "Sound proof, water and stain resistant",
    intro:
      "Sound proof, stain and water resistant doors available in a wide range of moulded designs.",
    image: "/images/products/FRP_Cover_page.jpeg",
    cover:
      "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/FRP%20DOOR%20IMAGES/AD003%20%20-%20G-BROWN%20ANTIQUE.jpg",
    doorImage:
      "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/FRP%20DOOR%20IMAGES/AD002%20%20-%20IVORY.jpg",
    features: [
      "Wooden Grain Finish",
      "Durable",
      "Lightweight",
      "Termite Proof",
      "Eco Friendly",
    ],
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
      { code: "AD 002", image: "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/FRP%20DOOR%20IMAGES/AD002%20%20-%20IVORY.jpg", colours: ["R. Ivory", "White", "L. Grey", "G. Brown", "C. Brown"] },
      { code: "AD 004", image: "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/FRP%20DOOR%20IMAGES/AD004%20-%20G-BROWN.jpg", colours: ["G. Brown", "White", "L. Grey", "R. Ivory", "C. Brown"] },
      { code: "AD 006", colours: ["C. Brown", "White", "L. Grey", "G. Brown", "R. Ivory"] },
      { code: "AD 008", image: "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/FRP%20DOOR%20IMAGES/AD008-L-GREY%20.jpg", colours: ["L. Grey", "White", "R. Ivory", "G. Brown", "C. Brown"] },
      { code: "AD 012", image: "/ARIHANT_DOOR_IMAGES/ARIHANT%20DOOR%20IMAGES/FRP%20DOOR%20IMAGES/AD12-%20L-GREY.jpg", colours: ["G. Brown", "White", "C. Brown", "L. Grey", "R. Ivory"] },
      { code: "AD 014", colours: ["C. Brown", "White", "L. Grey", "G. Brown", "R. Ivory"] },
    ],
  },
};

export const PRODUCT_LIST = [PRODUCTS.abs, PRODUCTS.frp];