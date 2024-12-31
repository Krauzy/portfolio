import { faAws, faDocker, faFigma, faGitAlt, faGithub, faGoogle, faInstagram, faJava, faJediOrder, faLinkedinIn, faMarkdown, faMicrosoft, faNodeJs, faPython, faReact, faSquareJs, faUbuntu } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faDumbbell, faEnvelope, faFileLines, faLeaf } from "@fortawesome/free-solid-svg-icons";
import DataLocale from "./dataInterface";

export const englishData : DataLocale = {
  title: 'krauzy',
  menu: {
    home: 'home',
    about: 'about',
    articles: 'articles',
    tools: 'tools'
  },
  helloMessage: {
    morning: 'GOOD MORNING',
    afternoon: 'GOOD AFTERNOON',
    night: 'GOOD EVENING',
    explainingMessage: (value: string) => `You are accessing at ${value}`
  },
  openingMessage: 'My name is <span>CAIO</span>, and you just entered my premises.',
  secondaryOpeningMessage: 'Welcome and make yourself at home.',
  warningOpeningMessage: `JUST DON'T TOUCH ANYTHING...`,
  resume: {
    about: {
      title: 'ABOUT ME',
      description: [
        'A back-end software engineer, specialized in microservices development, software architecture and design, cloud and other things...',
        'I also know front-end, after all, everything you see was made by me ;)'
      ]
    },
    do: {
      title: 'WHAT I DO',
      languages: [
        {
          logo: faJava,
          name: 'java',
          color: '#f89820',
        },
        {
          logo: faLeaf,
          name: 'spring',
          color: '#6DB33F',
        },
        {
          logo: faSquareJs,
          name: 'javascript',
          color: '#F7DF1E',
        },
        {
          logo: faReact,
          name: 'react',
          color: '#53C1DE',
        },
        {
          logo: faNodeJs,
          name: 'node',
          color: '#539E43',
        },
        {
          logo: faAws,
          name: 'AWS',
          color: '#FF9900',
        },
        {
          logo: faGitAlt,
          name: 'GIT',
          color: '#F54D26',
        },
        {
          logo: faDatabase,
          name: 'SQL',
          color: '#336791',
        },
        {
          logo: faMicrosoft,
          name: 'azure',
          color: '#035BDA',
        },
        {
          logo: faDocker,
          name: 'docker',
          color: '#1D91B4',
        },
        {
          logo: faPython,
          name: 'python',
          color: '#FFD242',
        },
        {
          logo: faUbuntu,
          name: 'linux',
          color: '#DD4814',
        },
        {
          logo: faFigma,
          name: 'figma',
          color: '#A259FF',
        },
        {
          logo: faGithub,
          name: 'github',
          color: '#FFFFFF',
        },
        {
          logo: faGoogle,
          name: 'GCP',
          color: '#DF462F',
        },
        {
          logo: faJediOrder,
          name: 'jedi order',
          color: '#750014',
        },
      ],
      metrics: [
        {
          title: 'Frontend',
          value: 50
        },
        {
          title: 'Backend',
          value: 100
        },
        {
          title: 'Development',
          value: 100
        },
        {
          title: 'IA',
          value: 60
        },
        {
          title: 'Cloud',
          value: 75
        }
      ],
      warningMetricMessage: 'These metrics were based on developed projects (personal and professional)'
    },
    done: {
      title: 'WHAT I HAVE ALREADY DONE',
      timeline: [
        {
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzr5WyKSMpnRQZC5wKM9Dl3dqsnHlA-WZWfg&s',
          title: 'UNOESTE',
          tiers: [
            {
              description: 'degree: Bachelor of Computer Science',
              beginDate: new Date('2017-02-01'),
              endDate: new Date('2021-12-01'),
              topics: [
                'Article published in November 2021 on machine learning used in predicting accident locations in urban areas.',
                'Honor to Merit for being the 4th best student in the 7th term.'
              ]
            }
          ],
        },
        {
          logo: 'https://intepp.com.br/img/logo-graduadas/play-sistemas.png',
          title: 'PLAY - Sistemas Inteligentes',
          tiers: [
            {
              description: 'Full-Stack Developer',
              beginDate: new Date('2021-02-01'),
              endDate: new Date('2021-12-01'),
              topics: [
                'Development of an update for a machine management system and its indicators.',
                'Developed APIs for consuming information collected from machines and calculated in proportion.',
                'Redesigned the interface to be less cluttered and more essentially informative.'
              ]
            }
          ],
        },
        {
          logo: 'https://i1.sndcdn.com/avatars-000199912813-lgg84l-t1080x1080.jpg',
          title: 'Sensedia',
          tiers: [
            {
              description: 'Software Engineer I',
              beginDate: new Date('2022-01-01'),
              endDate: new Date('2023-10-01'),
              topics: [
                'I worked in the consulting sector, working with teams from leading companies in the market such as Porto Seguro, JCA and WebMotors.',
                'I developed microservices in Java (Springboot) and C# (.NET) applying the concepts of SOLID, DDD and hexagonal architecture together with the implementation of several design patterns.',
                'I structured event-driven development (EDD) together with message-broker and event-driven services such as AWS SQS, AWS SNS and RabbitMQ.',
                `I had experience with API Gateway in which I worked on the development of APIs and interceptors integrated with the company's platform gateway and consumed its services.`,
                'I used the docker tool to manage images and containers of services and applications, provisioning databases and message-broker services.',
                'I used versioning tools with GIT, AWS CodeCommit and BitBucket and their CI tools on a daily basis.'
              ]
            },
            {
              description: 'Software Engineer II',
              beginDate: new Date('2023-10-01'),
              endDate: new Date('2024-03-01'),
              topics: [
                'I worked as a consultant for the companies RaiaDrogasil and CNSeg, developing microservices in Java (Spring) and structuring their architecture.',
                'I integrated with AWS cloud services such as AWS Bucket S3 and AWS Lambda, in addition to using AWS messaging tools (SQS and SNS).',
                'I used relational and non-relational databases such as MongoDB, AWS DocumentDB, MySQL, Postgresql and Redis.',
                `I had experience with API Gateway, where I worked on developing APIs and interceptors integrated with the company's platform gateway and consumed its services.`,
                'I used telemetry tools such as Elastic Search and Kibana and observability tools such as ArgoCD to control the pipes of the environments.',
                'I had routine experience with agile methodologies such as Scrum and Kanban and their rites.'
              ]
            }
          ],
        },
        {
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj22a36aq0AqbJix-tdOHSMkdq9jxfd72pUg&s',
          title: 'Zup Innovation',
          tiers: [
            {
              description: 'Platform Engineer',
              beginDate: new Date('2024-03-01'),
              actualMessage: 'The moment',
              topics: [
                'I developed services for collecting and displaying data within the Stackspot© product insights platform.',
                'I configured and integrated AWS services with data APIs such as AWS Athena, AWS S3 and AWS Lambda.',
                'I configured infrastructure deployments with terraform and monitored the deployments with kubedash and datadog.',
                'I developed an API Gateway from scratch integrated with AWS Api Gateway with parity via VPC private link.',
                'I developed frontend/backend integration for data communication and triggering events to a kafka server.',
                'I developed authentication services integrated with OPA (Open Policy Agent) and AWS IAM.'
              ]
            }
          ],
        }
      ],
    },
    creations: {
      title: 'SOME THINGS I CREATED',
      repos: [
        {
          title: 'NFT-easy',
          description: 'A simple method to create NFT contracts with ethereum',
          language: 'javascript',
          languageColor: '#F7DF1E',
          branches: 0,
          stars: 1,
          link: 'https://github.com/Krauzy/NFT-easy'
        },
        {
          title: 'streetor',
          description: 'Urban Accident Prediction with Machine Learning methods K-Means and KNN',
          language: 'python',
          languageColor: '#3773A5',
          branches: 1,
          stars: 0,
          link: 'https://github.com/Krauzy/streetor'
        },
        {
          title: 'blair',
          description: 'blair language and compiler',
          language: 'C#',
          languageColor: '#280068',
          branches: 0,
          stars: 1,
          link: 'https://github.com/Krauzy/blair'
        },
        {
          title: 'git-commit-bomb',
          description: 'A commit bomb that distributes commits on different dates, painting your activity chart green',
          language: 'javascript',
          languageColor: '#F7DF1E',
          branches: 1,
          stars: 3,
          link: 'https://github.com/Krauzy/git-commit-bomb'
        },
        {
          title: 'Blender',
          description: '3D object shaping and showing application',
          language: 'C#',
          languageColor: '#280068',
          branches: 1,
          stars: 1,
          link: 'https://github.com/Krauzy/Blender'
        },
        {
          title: 'let-me-ask',
          description: 'A react.js project using firebase',
          language: 'typescript',
          languageColor: '#007ACC',
          branches: 1,
          stars: 0,
          link: 'https://github.com/Krauzy/let-me-ask'
        }
      ],
    },
    footer: {
      title: `LET'S TALK ABOUT PROJECTS?`,
      description: 'Want to talk about a project or just say hi? Hit me up',
      location: 'São Paulo - SP',
      socialMedias: [
        {
          logo: faGithub,
          color: '#424242',
          link: 'https://github.com/Krauzy'
        },
        {
          logo: faLinkedinIn,
          color: '#00A0DC',
          link: 'https://www.linkedin.com/in/caio-kraut/'
        },
        {
          logo: faInstagram,
          color: '#C32AA3',
          link: 'https://www.instagram.com/'
        },
        {
          logo: faEnvelope,
          color: '#B03C2C',
          link: 'mailto:caiomarin26@gmail.com.br?subject=Bora trocar uma ideia?&cc=caio.marin@zup.com.br&body=Fala mano! Vamo trocar uma ideia sobre um projeto top?'
        },
      ],
      assignment: 'Krauzy',
      photo: 'https://avatars.githubusercontent.com/u/30305307?v=4',
      endMessage: 'Made with ♥️ by <a href="https://github.com/Krauzy" target="_blank">@Krauzy</a>'
    }
  },
  tools: {
    title: 'Tools',
    description: 'Below are some tools that I created and integrated with this platform, feel free to test them at will, just be careful, some can be quite aggressive 😈',
    categoryTitle: 'Categories',
    anchorDescription: 'Check',
    dateDescription: 'days ago',
    backMessage: 'Back to tools',
    categoryTypeList: [
      {
        name: 'All',
        index: 0
      },
      {
        name: 'Marketing',
        index: 1
      },
      {
        name: 'Writing',
        index: 2
      },
      {
        name: 'Health',
        index: 3
      }
    ],
    categoryTools: [
      {
        title: 'Markdown Editor',
        subtitle: 'Online Markdown Editor for writing in markdown with real-time preview.',
        description: `
        <h1>How to use the Markdown Editor?</h1>
        <br/>
        <ul>
        <li>• Write in markdown inside the editor on the left.</li>
        <li>• Compiled markdown (HTML) will be displayed on the right in real-time.</li>
        <li>• You can refer to <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown Cheatsheet</a> for writing in markdown.</li>
        <li>• We do not store any of your text as everything is done client side.</li>
        </ul>
        `,
        slug: 'markdown-writer',
        icon: faMarkdown,
        backgroundColor: '#57F287',
        foreColor: '#FFFFFF',
        categories: [1],
        link: '/tools/markdown-writer',
        date: new Date('2024-10-08')
      },
      {
        title: 'Word Counter',
        subtitle: 'Word Counter to count words, characters, sentences and paragraphs in a text.', 
        description: `
        <h1>How to use the Word Counter?</h1>
        <br/> 
        <ul>
        <li>• Enter your text content in the area above.</li>
        <li>• The count of words, characters, whitespace, sentences and paragraphs will be displayed automatically.</li>
        <li>• Reading time is displayed based on a reading speed of 275 words per minute.</li>
        <li>• Readability is calculated using the <a href="https://en.wikipedia.org/wiki/Automated_readability_index" target="_blank">automated readability index</a>.</li>
        <li>• The 6 most used keywords in the content will also be displayed.</li>
        <li>• We do not store any of your content as everything is done client-side.</li> 
        </ul>`,
        slug: 'word-counter',
        icon: faFileLines,
        backgroundColor: '#5865F2',
        foreColor: '#FFFFFF',
        categories: [1, 2],
        link: '/tools/word-counter',
        date: new Date('2024-10-15')
      },
      {
        title: 'Fit Metrics',
        subtitle: 'Nutritional metrics meter based on your measurement information',
        description: `
        <h1>How to use Fit Metrics</h1>
        <br/>
        <ul>
          <li>• Enter your information (sex, age, height and weight)</li>
          <li>• The <a href="https://en.wikipedia.org/wiki/Body_Mass_Index" target="_blank">BMI</a> will be calculated based on your height and weight.</li>
          <li>• The <a href="https://en.wikipedia.org/wiki/Basal_Metabolism" target="_blank">BMR (Basal Metabolic Rate)</a> will be calculated based on all the information provided.</li>
          <li>• The <a href="https://en.wikipedia.org/wiki/Dietary_Reference_Intake" target="_blank">DCR (Daily Caloric Requirement)</a> will be calculated based on your BMR.</li>
          <li>• The estimated body fat percentage will be calculated based on your BMI.</li>
          <li>• The ideal weight will be calculated based on your height and sex.</li>
          <li>• Macronutrient requirements will be calculated based on the DCR.</li>
        </ul>
        `,
        slug: 'fit-metric',
        icon: faDumbbell,
        backgroundColor: '#FEE75C',
        foreColor: '#212121',
        categories: [3],
        link: '/tools/fit-metric',
        date: new Date('2024-11-05')
      }
    ]
  },
  about: {
    title: 'ABOUT',
    subtitle: `Well, you can access about me on the home page, on this page I'll tell you a few things about... well... you ;)`,
    finalWarning: `
    This information is not here to scare you or anything, it's just a demonstration of what I can get about you with 1 click of your mouse.
    </br>
    Always be very careful where you go on the internet.
    `,
    quotes: `
    "Not all rabbit holes lead to wonders; some hide abysses from which it is difficult to escape."
    </br></br>
    - Alice in Wonderland
    `,
    ip: 'IP',
    browser: 'Browser',
    browserVersion: `Version`,
    os: 'OS',
    networkProvider: 'Network',
    timeZone: 'Timezone',
    location: 'Location',
    resolution: `Browser's Resol.`,
    screen: `Screen's Resol.`,
    language: 'Language',
    cookies: 'Cookies',
    processors: 'Processors',
    javascript: 'Javascript',
    silverLight: 'Silverlight',
    flash: 'Flash',
    adBlocker: 'Ad-Block'
  },
  notFound: {
    backButton: 'Back to Home'
  }
}

export default englishData;
