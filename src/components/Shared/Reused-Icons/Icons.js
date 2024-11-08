import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import data from "../../../content/data.json";

export const SocialIcons = [
  {
    id: 1,
    icon: <FaXTwitter size={"20px"} />,
    href: data.socialMedia.twitter,
  },
  {
    id: 2,
    icon: <FaInstagram size={"20px"} />,
    href: data.socialMedia.instagram,
  },
  {
    id: 3,
    icon: <FaLinkedin size={"20px"} />,
    href: data.socialMedia.linkedin,
  },
  {
    id: 4,
    icon: <FaGithub size={"20px"} />,
    href: data.socialMedia.github,
  },
];