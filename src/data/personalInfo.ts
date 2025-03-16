export const personalInfo = {
    name: "Hüseyin Kaya Aydin",
    nationality: "Austrian",
    location: "Vienna, Austria",
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
    
    
    
    portfolioProjects: "Explore my projects on GitHub, including the partially developed mobile app \"Trivia QuizApp\" available on both Android and iOS.",
    
    
    
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
          technologies: ["Flutter", "Dart", "Php", "MySql"],
          image: "/projects/trivia.png", // Add image paths if available
          demoUrl: "https://play.google.com/store/apps/details?id=com.programming.codequiz",
           category: "Mobile App"
        },
        {
          title: "Chatfinity",
          description: "A fork of Open Source project that enables to create an AI chatbot for any website in minutes.",
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
          description: "A web application that converts documents into audio podcasts, pdfchat and quizzes.",
          technologies: ["Next.js", "Postgresql", "Openai API", "Text to Speech API"],
          image: "/projects/mynb.png",
          demoUrl: "https://myNb.info/",
           category: "Web Application"
        },
        {
            title: "AI Interview Feedback Generator",
            description: "A fork of an open source code that lets you get AI-powered feedback on Job interview.",
            technologies: ["Next.js",  "Openai API"],
            image: "/projects/aiinterview.png",
            demoUrl: "https://ai-interview-feedback.vercel.app/",
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