import { Icons } from "../../assets/Icons/Mobiele/Categories/Icons";
export const MainNavbar = [
  {
    name: "Glasses",
    url: "/glasses",
    icon: Icons[1],
    expansion: [
      {
        name: "Gender",
        subCategories: { "": ["male", "female"] },
        url: "",
      },
      {
        name: "Categories",
        subCategories: {
          "": ["Sun Glasses", "Compute Glasses", "Eye Glasses"],
        },
        url: "",
      },
      {
        name: "Occasions",
        subCategories: { "": ["Work", "Party", "EveryDay"] },
        url: "",
      },
      {
        name: "Frame",
        subCategories: {
          "": ["Rectangle", "Pilot", "Aviator", "Round", "Cat EYE", "Wayfarer"],
        },
        url: "",
      },
    ],
  },
  {
    name: "Watches",
    url: "/watches",
    icon: Icons[5],
    expansion: [
      {
        name: "Gender",
        subCategories: { "": ["male", "female"] },
        url: "",
      },
      {
        name: "Categories",
        subCategories: {
          "": ["Smart Watch", "Analog", "Digital"],
        },
        url: "",
      },
      {
        name: "Occasions",
        subCategories: { "": ["Casual", "Fashion"] },
        url: "",
      },
      {
        name: "Display",
        subCategories: {
          "": ["Square", "Round", "Other"],
        },
        url: "",
      },
    ],
  },
  {
    name: "New Arrivals",
    url: "",
    icon: Icons[3],
    expansion: null,
  },
  {
    name: "Trending",
    url: "",
    icon: Icons[4],
    expansion: null,
  },
  {
    name: "Offer Store",
    url: "",
    icon: Icons[0],
    expansion: null,
  },
  {
    name: "Limited Editions",
    url: "",
    icon: Icons[2],
    expansion: null,
  },
];
