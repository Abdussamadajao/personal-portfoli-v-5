export interface IProject {
    id: number;
    name: string;
    description: string;
    image_path: string;
    deployed_url: string;
    category: string[];
    github_url: string;
    key_techs: string[];
    project_type: "personal" | "client";
  }
  

export const projects: IProject[] = [
    {
      id: 1,
      name: "North Care",
      description:
        "North is a web and mobile platform (Android) application that allows users to access medical care from the comfort of their home or any other location.",
      image_path: "/projects/use_north.png",
      deployed_url: "https://usenorth.care",
      category: ["nextJs", "firebase", "react"],
      github_url: "",
      key_techs: ["nextJs", "redux", "firebase", "react"],
      project_type: "client",
    },
    {
      id: 2,
      name: "PneumaPage",
      description:
        "Pneumapage is a web application that allows users to search for healthcare providers in different fields and locations.",
      image_path: "/projects/pneumapage.png",
      deployed_url: "https://pneumapage.com/",
      category: ["nextJs", "firebase", "react"],
      github_url: "",
      key_techs: ["nextJs", "styled-components", "antd", "redux", "firebase"],
      project_type: "client",
    },
    {
      id: 3,
      name: "PneumaCare",
      description:
        "Pneuma care is crafted compelling telemedicine landing page, merging design & functionality for seamless user engagement",
      image_path: "/projects/pneumacare.png",
      deployed_url: "https://www.pneuma.care/",
      category: ["nextJs", "firebase", "react"],
      github_url: "",
      key_techs: ["nextJs", "styled-components", "antd"],
      project_type: "client",
    },
    {
      id: 4,
      name: "SnapBazaar",
      description:
        "SnapBazaar is a modern e-commerce platform that provides a seamless online shopping experience with advanced features like real-time cart management, multiple payment options including Stripe integration, express delivery options, and comprehensive order tracking. Built with cutting-edge React technologies, Prisma ORM for database management, and modern UI components.",
      image_path: "/projects/snap-bazaar.png", // You'd need to add this
      deployed_url: "https://snap-bazaar.vercel.app", // Based on the meta tags
      category: ["react", "typescript", "tailwind", "vite", "prisma"],
      github_url: "https://github.com/Abdussamadajao/snap-bazaar", // Add your GitHub URL
      key_techs: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Prisma",
        "Stripe",
        "Better Auth",
        "Zustand",
        "React Query",
      ],
      project_type: "personal",
    },
    {
      id: 5,
      name: "Isolay",
      description: "Isolay is an image optimization tool that allows you to optimize your images for the web.",
      image_path: "/projects/isolay.png",
      deployed_url: "https://isolay.netlify.app",
      category: ["Next.js", "Tailwind", "TypeScript"],
      github_url: "https://github.com/Abdussamadajao/image-optimizer",
      key_techs: ["Next.js", "Tailwind", "TypeScript"],
      project_type: "personal",
    },
    {
      id: 6,
      name: "Go Delivery",
      description:
        "Go delivery allows users to send and receive packages swiftly with GO, delivered safely in just 20 minutes, no matter the size—from documents to furniture and appliances.",
      image_path: "/projects/go-caby.png",
      deployed_url: "https://delivery.gocaby.com/",
      category: ["nextJs", "typescript", "tailwind"],
      github_url: "",
      key_techs: ["TypeScript", "Tailwind", "Next.js"],
      project_type: "client",
    },
    {
      id: 9,
      name: "Intent Forms",
      description:
        "Intent forms ",
      image_path: "/projects/intent-forms.png",
      deployed_url: "https://publish.intentforms.com",
      category: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Redux toolkit"
    ],
      github_url: "",
      key_techs: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Vite",
        "Redux toolkit"
    ],
      project_type: "client",
    },
  ];