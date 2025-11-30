import asifImg from '../assets/asif.png';

export const profile = {
    name: "Iftekhar Tasnim Md. Asif",
    role: "Software Engineer & Full Stack Developer",
    bio: "A Full Stack Developer crafting scalable, user-focused web applications with the MERN stack. Passionate about building solutions that make an impact.",
    email: "iftekhartasnim@gmail.com",
    linkedin: "https://www.linkedin.com/in/iftekhartasnim/",
    github: "https://github.com/Iftekhar-Tasnim",
    x: "https://x.com/TasnimIftekhar",
    facebook: "https://www.facebook.com/asif.spdf",
    phone: "+88 01521 104415",
    location: "Dhaka, Bangladesh",
    education: [
        {
            degree: "B.Sc. in Computer Science and Engineering",
            institution: "American International University Bangladesh (AIUB)",
            period: "2022 - Jan 2025"
        },
        {
            degree: "B.Sc. (Honours) in Microbiology",
            institution: "University of Dhaka",
            period: "2018 - 2022 (Incomplete)",
            description: "Discontinued due to COVID-19 lockdown (Feb 2020 - Mar 2022)."
        },
        {
            degree: "Higher Secondary Certificate",
            institution: "Adamjee Cantonment College",
            period: "2015 - 2017"
        }
    ],
    skills: [
        {
            name: "Programming Languages",
            total_skills: 6,
            advanced_expert: 5,
            skills: [
                { name: "C++", level: "Advanced" },
                { name: "Java", level: "Advanced" },
                { name: "Python", level: "Advanced" },
                { name: "C#", level: "Intermediate" },
                { name: "JavaScript", level: "Expert" },
                { name: "TypeScript", level: "Advanced" }
            ]
        },
        {
            name: "Frontend Engineering",
            total_skills: 10,
            advanced_expert: 8,
            skills: [
                { name: "React", level: "Expert" },
                { name: "Next.js", level: "Advanced" },
                { name: "Tailwind CSS", level: "Expert" },
                { name: "Bootstrap", level: "Expert" },
                { name: "Material UI", level: "Intermediate" },
                { name: "Shadcn UI", level: "Intermediate" },
                { name: "SASS", level: "Advanced" },
                { name: "Vite", level: "Advanced" },
                { name: "HTML", level: "Expert" },
                { name: "CSS", level: "Expert" }
            ]
        },
        {
            name: "Backend & Architecture",
            total_skills: 9,
            advanced_expert: 5,
            skills: [
                { name: "Node.js", level: "Advanced" },
                { name: "Express.js", level: "Advanced" },
                { name: "ASP.NET Core", level: "Intermediate" },
                { name: "MVC Frameworks", level: "Intermediate" },
                { name: "NestJS", level: "Intermediate" },
                { name: "Firebase", level: "Intermediate" },
                { name: "MongoDB", level: "Advanced" },
                { name: "MySQL", level: "Advanced" },
                { name: "PostgreSQL", level: "Intermediate" }
            ]
        },
        {
            name: "Mobile & Desktop",
            total_skills: 2,
            advanced_expert: 1,
            skills: [
                { name: "React Native (Expo)", level: "Intermediate" },
                { name: "Java Swing (JFrame)", level: "Intermediate" }
            ]
        },
        {
            name: "AI & Data Science",
            total_skills: 6,
            advanced_expert: 3,
            skills: [
                { name: "YOLO (v8/v10)", level: "Advanced" },
                { name: "U-Net", level: "Advanced" },
                { name: "TensorFlow", level: "Intermediate" },
                { name: "OpenCV", level: "Intermediate" },
                { name: "Pandas", level: "Intermediate" },
                { name: "NumPy", level: "Intermediate" }
            ]
        },
        {
            name: "IoT & Embedded",
            total_skills: 7,
            advanced_expert: 6,
            skills: [
                { name: "Arduino", level: "Expert" },
                { name: "ESP32", level: "Expert" },
                { name: "Raspberry Pi", level: "Advanced" },
                { name: "Sensors & Actuators", level: "Expert" },
                { name: "Circuit Design", level: "Intermediate" },
                { name: "I2C/SPI/UART", level: "Advanced" }
            ]
        },
        {
            name: "DevOps & Tools",
            total_skills: 5,
            advanced_expert: 4,
            skills: [
                { name: "Git", level: "Expert" },
                { name: "Docker", level: "Intermediate" },
                { name: "Linux", level: "Advanced" },
                { name: "Postman", level: "Advanced" },
                { name: "Figma", level: "Advanced" }
            ]
        }
    ],
    img: asifImg,
    summary: {
        total_categories: 7,
        total_skills: 44,
        advanced_expert: 31,
        intermediate: 13
    },
    philosophy: {
        title: "My Philosophy",
        description: "I believe that great code is fueled by great coffee. I'm always seeking new challenges and opportunities to learn and grow.",
        quote: "Life is too short for bad coffee."
    },
    hobbies: [
        { name: "Cycling", icon: "bike", description: "Exploring the city on two wheels." },
        { name: "Football", icon: "football", description: "Teamwork and strategy on the field." },
        { name: "Competitive Gaming", icon: "gamepad", description: "Sharpening reflexes and tactical thinking." },
        { name: "Watching Anime", icon: "tv", description: "Appreciating storytelling and art." }
    ]
};
