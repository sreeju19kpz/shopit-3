import SmartWatch from "../../assets/Icons/trendings/smartWatch.png";
import sunGlass from "../../assets/Icons/trendings/sunglasses.png";
import EyeGlass from "../../assets/Icons/trendings/planeGlass.png";
import Boy from "../../assets/Icons/trendings/male-icon.png";
import Girl from "../../assets/Icons/trendings/female-avatar.png";
import fashion from "../../assets/Icons/trendings/fashion.png";

export const HomePageList1 = [
  {
    name: "For Him",
    img: Boy,
    url: "/glasses?gender=male",
  },
  {
    name: "For Her",
    img: Girl,
    url: "/watches?gender=female",
  },
  {
    name: "sunglass",
    img: sunGlass,
    url: "/glasses?categories=Sun Glasses",
  },
  {
    name: "smart watch",
    img: SmartWatch,
    url: "/watches?categories=Smart Watch",
  },

  {
    name: "fashion",
    img: fashion,
    url: "/watches?occasions=Fashion",
  },

  {
    name: "Eye Glasses",
    img: EyeGlass,
    url: "/glasses?categories=Eye Glasses",
  },
];
