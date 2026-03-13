import { Github, Linkedin, Mail, LucideIcon } from "lucide-react"
import { IconType } from "react-icons";
import { SiWhatsapp } from "react-icons/si";

export type social = {
  name: string;
  icon: LucideIcon | IconType;
  link: string;
}

export const socialProps: social[] = [
  {
    name: 'Github',
    icon: Github,
    link: 'https://github.com/Macneyste'
  },
  {
    name: 'Linkedin',
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/yonis-abdulkadir-osman-15209639b'
  },
  {
    name: 'Email',
    icon: Mail,
    link: 'mailto:yoonisabdikhaadir@gmail.com'
  },
  {
    name: 'Whatsapp',
    icon: SiWhatsapp,
    link: 'https://api.whatsapp.com/send?phone=252612292980&text=Hello,%20Yonis!'
  }
]
