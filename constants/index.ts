import {
    SiExpress,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiNestjs,
    SiGithub,
    SiTelegram,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { CiPhone, CiMail } from "react-icons/ci";


export const listOfSkills = [
    {
        Icon: SiReact,
        barWidth: "w-90%",
        percentageValue: "90%",
        text: "React",
    },
    {
        Icon: VscAzure,
        barWidth: "w-23%",
        percentageValue: "23%",
        text: "Microsoft Azure",
    },
    {
        Icon: SiNestjs,
        barWidth: "w-90%",
        percentageValue: "90%",
        text: "Nest.js",
    },
    {
        Icon: SiTailwindcss,
        barWidth: "w-85%",
        percentageValue: "85%",
        text: "Tailwindcss",
    },
    {
        Icon: SiTypescript,
        barWidth: "w-80%",
        percentageValue: "80%",
        text: "Typescript",
    },
    {
        Icon: SiExpress,
        barWidth: "w-80%",
        percentageValue: "80%",
        text: "Express.js",
    },
    {
        Icon: SiNextdotjs,
        barWidth: "w-85%",
        percentageValue: "85%",
        text: "Next.js",
    },
];

export const contacts = [
    {
        Icon: CiPhone,
        text: "Phone number",
        value: "+53 56931759",
        href: "tel:5356931759",
    },
    {
        Icon: CiMail,
        text: "Email",
        value: "kzares.dev@gmail.com",
        href: "mailto:kzares.dev@gmail.com",
    },
    {
        Icon: SiGithub,
        text: "Github",
        value: "github.com/kzares-dev",
        href: "https://github.com/kzares.dev",
    },
    {
        Icon: SiTelegram,
        text: "Telegram",
        value: "@kzares",
        href: "https://t.me/kzares",
    }

];
