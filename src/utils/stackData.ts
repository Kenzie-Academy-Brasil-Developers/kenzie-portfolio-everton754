import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import imgDjango from "../public/static/img/stack/django.svg";
import { SiPostgresql } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiPython } from "react-icons/si";

export const stackData = [
  { title: "HTML", img: imgHTML },
  { title: "CSS", img: imgCSS },
  { title: "JS", img: imgJS },
  { title: "Node JS", img: imgNode },
  { title: "Styled Components", img: imgStyled },
  { title: "React", img: imgReact },
  { title: "Django", img: SiDjango },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "TypeScript", img: SiTypescript },
  { title: "Docker", img: FaDocker },
  { title: "Sqlite", img: SiSqlite },
  { title: "Python", img: SiPython },
];
