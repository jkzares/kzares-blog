import notificationImg1 from "@/public/images/notification-image-1.png"
import notificationImg2 from "@/public/images/notification-image-2.png"
import notificationImg3 from "@/public/images/notification-image-3.png"
import azure from "@/public/images/techIcons/azure.svg"
import nextjs from "@/public/images/techIcons/nextjs.svg"
import node from "@/public/images/techIcons/node.svg"
import tailwind from "@/public/images/techIcons/tailwind.svg"
import docker from "@/public/images/techIcons/docker.svg"
import postgress from "@/public/images/techIcons/postgress.svg"
import react from "@/public/images/techIcons/react.svg"
import github from "@/public/images/techIcons/github.svg"
import roadmap1 from "@/public/images/projects/image-1.png";
import roadmap2 from "@/public/images/projects/image-2.png";
import roadmap3 from "@/public/images/projects/image-3.png";
import roadmap4 from "@/public/images/projects/image-4.png";
import discordBlack from "@/public/socials/discord.svg"
import twitter from "@/public/socials/twitter.svg"
import facebook from "@/public/socials/facebook.svg"
import instagram from "@/public/socials/instagram.svg"
import telegram from "@/public/socials/telegram.svg"

export const navigation = [
    {
        id: "home",
        url: '/',
        title: "Home"
    },
    {
        id: "connect",
        url: '/connect',
        title: "Connect"
    },
    {
        id: "blog",
        url: '/blog',
        title: "Blogs"
    },
    {
        id: "about",
        url: '/about',
        title: "About"
    },
]

export const notificationImages =[
    notificationImg1,notificationImg2, notificationImg3
]

export const collabText =
  "I am a versatile developer proficient in both backend and frontend technologies, with expertise in cloud computing using Azure. Experienced in integration and continuous development and continuous integration practices.";


export const collabContent = [
    {
      id: "0",
      title: "Front-End Software Developer",
      text: "Skilled at crafting scalable, secure, and stunning user interfaces with the latest technologies. Proficient in Next.js, React.js, Vue.js, and Quick.js for clean and reusable design patterns.",
    },
    {
      id: "1",
      title: "Back-end Software Developer",
      text: "Proficient in developing robust backend solutions with Node.js and Nest.js. Skilled at building scalable and secure systems with clean code practices. Expertise in API development and database management for efficient and reliable applications."
    },
    {
      id: "2",
      title: "Azure Cloud Architect",
      text: "As a beginner Cloud Architect, I am eager to learn and grow in designing and implementing cloud solutions. I am exploring various cloud technologies and services, with a keen interest in mastering Azure. Excited to build scalable and resilient cloud infrastructures that drive innovation and efficiency"
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "azure",
      icon: azure,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "nextjs",
      icon: nextjs,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "node",
      icon: node,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "tailwind",
      icon: tailwind,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "docker",
      icon: docker,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "postgress",
      icon: postgress,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "react",
      icon: react,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "github",
      icon: github,
      width: 38,
      height: 32,
    },
  ];

  export const roadmap = [
    {
      id: "0",
      title: "Voice recognition",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];

  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];
  