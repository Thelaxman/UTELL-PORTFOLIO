import ctx from "./media/ctxLogo.png";
import FinepointLogo from "./media/FinepointLogo.png";
import guru from "./media/GuruLogo2.png";
import SaddleridgeLogo from "./media/SaddleridgeLogo.png";
import accent from "./media/AccentLogo.png";
import zaika from "./media/zaaikaa.jpg";

const portfolio = [
  {
    id: "01",
    imgUrl: ctx,
    category: "Web Design",
    title: "CTX Logistics INC.",
    description:
      " CTX Logistics INC. is a Calgary based company and providing complete reliable services since 2004. We specialize in providing customized solutions tailored to the way our customers do business. ",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "http://ctxlogistics.com/",
  },
  {
    id: "02",
    imgUrl: FinepointLogo,
    category: "Ux",
    title: "FinePoint",
    description:
      "Since 2004, Finepoint Design has been a company that has evolved from a part-time freelance web design company to a full-time digital marketing company. The company founder, Keith Hearn, started working as a printer in 1998, back when graphic design on computers and the internet were still in their infancy. So to say Keith has been around in the web world would be correct.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://finepoint-design.com/",
  },
  {
    id: "03",
    imgUrl: guru,
    category: "Ux",
    title: "Guru India Restaurant",
    description:
      "Guru India Restaurant, A fine dining restaurant located in the heart of the city of Calgary. Our both Restaurants tries to serve the best food and services available",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.guruindiarestaurant.ca/",
  },
  {
    id: "04",
    imgUrl: SaddleridgeLogo,
    category: "Web Design",
    title: "SaddleRidge Physio",
    description:
      "Maintaining the highest standards of physiotherapy in Calgary and being an innovative physiotherapy clinic committed to excellence and leadership.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://saddleridgephysio.ca/",
  },
  {
    id: "05",
    imgUrl: accent,
    category: "Web Design",
    title: "Indian Accent",
    description:
      "The restaurant offers the best Indian restaurant in Calgary with an exotic range of appetizers, salads, soups, entrées, drinks, and desserts.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://indianaccentyyc.ca/",
  },
  {
    id: "06",
    imgUrl: zaika,
    category: "Web Design",
    title: "Zaika",
    description:
      "Zaika creates innovative Indian cuisine by mixing modern cooking techniques with authentic Indian flavours and customs. The restaurant is the best place to spend quality time with your family and friends while relishing the yummiest and mouth-watering Indian cuisine.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB"],
    siteUrl: "https://www.zaikatheindiandelicacy.ca/location2/index.html",
  },
];

export default portfolio;
