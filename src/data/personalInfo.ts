export const personalInfo = {
    name: "Hüseyin Kaya Aydin",
    nationality: "Austrian",
    location: "1020 Vienna, Austria",
    phone: "+43 680 156 31 51",
    email: "kayahw4@gmail.com",
    github: "hu8813",
    about: "I am a passionate software developer with extensive experience in programming, particularly in C and C++. I have been honing my skills at 42Vienna Programming School since October 2022. My journey in software development is driven by practical projects and peer collaboration.",
    
    skills: [
      "Adobe Tools",
      "React, React Native, Flutter",
      "Java, C#",
      "HTML, CSS, JS, PHP",
      "MS Office",
      "C, C++",
      "Linux, Server Admin",
      "Python"
    ],
    
    education: [
      {
        period: "2022-2024",
        institution: "Programming School at 42Vienna",
        description: "Completed Common Core, currently doing Mastery."
      },
      {
        period: "2019-2020",
        institution: "IT Courses at BFI Wien",
        description: "Courses in Java, C#, Adobe Photoshop, Illustrator, and In-Design."
      },
      {
        period: "2008-2018",
        institution: "B.Sc. in Business Administration with specialization in Business Information Systems at WU Wien",
        description: "Developed a POS software integrating Rexx language with JavaFx for my bachelor thesis."
      },
      {
        period: "2006-2007",
        institution: "German Language Course at VWU Wien",
        description: "Achieved B2 level proficiency in German."
      }
    ],
    
    experience: [
      {
        period: "2022",
        position: "Bus Driver course",
        company: "Wiener Linien",
        description: "Completed Bus Driver course."
      },
      {
        period: "2014-2020",
        position: "Allrounder",
        company: "Pizzeria in Wien",
        description: ""
      },
      {
        period: "2005",
        position: "Freelance Web Developer",
        company: "",
        description: "Developed and optimized websites for various companies in Turkey."
      }
    ],
    
    achievements: [
      {
        year: "2023",
        title: "Winner of KTM Code the Light Fantastic",
        description: "Python, Machine Learning."
      }
    ],
    
    portfolioProjects: "Explore my projects on GitHub, including the partially developed mobile app \"Trivia QuizApp\" available on both Android and iOS.",
    
    additionalQualifications: [
      "Driving Licenses: B, D, D95, Taxischein Wien",
      "Languages: English (B2), Turkish (Native), German (B2)"
    ],
    
    // Social media links
    social: {
      github: "https://github.com/hu8813",
      linkedin: "https://in.linkedin.com/huaydin"
    },
    
    // Portfolio sites
    websites: [
      { name: "Chatfinity", url: "https://Chatfinity.info" },
      { name: "Personal Notes", url: "https://myNb.info/" },
      { name: "Trivia QuizApp", url: "https://play.google.com/store/apps/details?id=com.programming.codequiz" },
      { name: "AI Vocabulary App", url: "https://aivoca.vercel.app/" }
    ],

    projects: [
        {
          title: "Trivia QuizApp",
          description: "A mobile quiz application with multilingual questions across multiple categories",
          technologies: ["React Native", "TypeScript", "Firebase"],
          image: "/projects/trivia.png", // Add image paths if available
          demoUrl: "https://play.google.com/store/apps/details?id=com.programming.codequiz",
           category: "Mobile App"
        },
        {
          title: "Chatfinity",
          description: "Create an AI chatbot for any website in minutes.",
          technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
          image: "/projects/chatfinity.png",
          demoUrl: "https://Chatfinity.info",
          githubUrl: "https://github.com/hu8813/chatfinity",
          category: "Web Application"
        },
        {
          title: "AiVoca AI Language Tutor",
          description: "A language learning application that uses AI to practise many languages.",
          technologies: ["Next.js", "Realtime Speech API", "OpenAI API"],
          image: "/projects/aivoca.png",
          demoUrl: "https://aivoca.vercel.app/",
           category: "Web Application"
        },
        {
          title: "myNb Document to Podcast",
          description: "A web application that converts markdown notes into audio podcasts using Text-to-Speech API.",
          technologies: ["Next.js", "Postgresql", "AI API"],
          image: "/projects/mynb.png",
          demoUrl: "https://myNb.info/",
           category: "Web Application"
        },
        {
          title: "42 Core Projects",
          description: "Collection of projects completed during the 42Vienna Programming School curriculum, focusing on C and C++ development.",
          technologies: ["C", "C++", "Shell", "Algorithms"],
          image: "/projects/42projects.png",
          githubUrl: "https://github.com/hu8813",
          category: "Academic"
        }
      ]
  };