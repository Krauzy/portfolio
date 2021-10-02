/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Caio Kraut",
  title: "Olá, eu sou o Caio",
  subTitle: emoji(
    "Um desenvolvedor Full-Stack entusiasta😎 na área da computação💻, focando atualmente em engenharia de IA🤖, Aprendizado de Máquina📈, Ciência de dados📊 e computação em nuvem☁️"
  ),
  resumeLink: "https://github.com/Krauzy",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Krauzy",
  linkedin: "https://www.linkedin.com/in/caio-kraut/",
  gmail: "",
  gitlab: "",
  instagram: "https://www.instagram.com/",
  twitter: "https://twitter.com/MANO__DO__CEU",
  facebook: "https://www.facebook.com/caiokm11/",
  medium: "",
  stackoverflow: "https://pt.stackoverflow.com/users/169430/kraut",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que eu faço",
  subTitle:
    "SOU UM MEGA ENTUSIASTA QUE GOSTA DE ESTUDAR E ME ESPECIALIZAR EM MUITAS COISAS",
  skills: [
    emoji("⚡ Desenvolvo projetos Full-Stack com frameworks diversas"),
    emoji(
      "⚡ Crio IAs para resolver problemas, facilitar e automatizar soluções"
    ),
    emoji(
      "⚡ Integração com banco de dados, nuvem, e outros serviços terceirizados"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fab fa-affiliatetheme"
    },
    {
      skillName: "CyberSecurity",
      fontAwesomeClassname: "fas fa-user-secret"
    },
    {
      skillName: "Neural Network",
      fontAwesomeClassname: "fas fa-brain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Unoeste",
      logo: require("./assets/images/unoeste.jpg"),
      subHeader: "Graduação: Bacharelado em Ciência da Computação",
      duration: "Fev 2017 - Dez 2021",
      desc: "Conquistas:",
      descBullets: [
        "Artigo publicado em Novembro de 2021 sobre aprendizado de máquina usada em predição de locais de acidente em zonas urbanas",
        "Honra ao Mérito por ter sido o 4º melhor aluno do 7º termo"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend 🎨", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend ⚙️",
      progressPercentage: "85%"
    },
    {
      Stack: "Programação 💻",
      progressPercentage: "90%"
    },
    {
      Stack: "IA 🤖",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Co-Fundador",
      company: "Virtual Fisio",
      companylogo:
        "https://raw.githubusercontent.com/Krauzy/hackathon-2021/main/public/virtual_fisio.png",
      date: "Ago 2021 – Presente",
      desc: emoji(
        "Uma solução capaz de realizar o rastreamento de pontos de referência 📍, e micro-expressões 🧏‍♂️"
      ),
      descBullets: [
        "🦳 As expressões do usuário são capturadas para registrar possíveis incômodos durante os exercícios",
        emoji(
          "🦵 Os movimentos das articulações são detectadas, além de atributos como velocidade, esforço e evolução"
        )
      ]
    },
    {
      role: "Desenvolvedor Full-Stack",
      company: "Play - Sistema Inteligentes",
      companylogo: require("./assets/images/logo_play.png"),
      date: "Fev 2021 – Presente",
      desc: "Desenvolvimento de atualização para um sistema de gerenciamento de máquinas e seus indicadores",
      descBullets: [
        "Desenvolvido APIs para consumo das informações coletadas das máquinas e calculadas em suas proporção",
        "Remodelado a interface para ficar menos poluída e mais essencialmente informativa"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Grandes Projetos",
  subtitle: "ALGUMAS STARTUPS E COMPANIAS QUE EU CRIEI E/OU PARTICIPO",
  projects: [
    {
      image:
        "https://raw.githubusercontent.com/Krauzy/hackathon-2021/main/public/virtual_fisio.png",
      projectName: "Virtual Fisio",
      projectDesc: "Envelhecer ficou no passado",
      footerLink: [
        {
          name: "Visitar Projeto",
          url: "https://github.com/Krauzy/hackathon-2021"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Conquistas e Certificados 🏆 "),
  subtitle: "Algumas coisa que eu consegui!",

  achievementsCards: [
    {
      title: "Segundo lugar no HACKATHON ERCAS 2021",
      subtitle:
        "Desenvolvido uma solução inovadora unindo conhecimentos das áreas de computação e saúde com o tema: monitoramento remoto do paciente.",
      image:
        "https://sites.usp.br/sp-ercas2021/wp-content/uploads/sites/900/2021/02/logo_ercas-768x172.png",
      footerLink: [
        {
          name: "Certificado",
          url: "/hackcertif.png"
        },
        {
          name: "Website",
          url: "https://sites.usp.br/sp-ercas2021/hackathon/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contato ☎️"),
  subtitle: "Quer conversar sobre um projeto ou só dizer oi? Chega junto",
  number: "+55 18 99725-0513",
  email_address: "caiomarin26@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
