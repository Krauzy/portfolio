import { faAws, faDocker, faFigma, faGitAlt, faGithub, faGoogle, faInstagram, faJava, faJediOrder, faLinkedinIn, faMarkdown, faMicrosoft, faNodeJs, faPython, faReact, faSquareJs, faUbuntu } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faDumbbell, faEnvelope, faFileLines, faLeaf } from "@fortawesome/free-solid-svg-icons";
import DataLocale from "./dataInterface";

export const portugueseData : DataLocale = {
  title: 'krauzy',
  menu: {
    home: 'home',
    about: 'sobre',
    articles: 'artigos',
    tools: 'ferramentas'
  },
  helloMessage: {
    morning: 'BOM DIA',
    afternoon: 'BOA TARDE',
    night: 'BOA NOITE',
    explainingMessage: (value: string) => `Você está acessando as ${value}`
  },
  openingMessage: 'Meu nome é <span>CAIO</span>, e você acabou de entrar no meu recinto',
  secondaryOpeningMessage: 'Seja bem-vindo e fique a vontade.',
  warningOpeningMessage: 'SÓ NÃO TOQUE EM NADA...',
  resume: {
    about: {
      title: 'SOBRE MIM',
      description: [
        'Um engenheiro de software back-end, especializado no desenvolvimento de microsserviços, arquitatura e design de software, cloud e outras coisas a mais...',
        'Eu também sei front-end, afinal de contas, tudo o que você vê foi feito por mim ;)'
      ]
    },
    do: {
      title: 'O QUE EU FAÇO',
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
          name: 'ordem jedi',
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
      warningMetricMessage: 'Essas métricas foram baseados em projetos desenvolvidos (pessoais e profissionais)'
    },
    done: {
      title: 'O QUE EU JÁ FIZ',
      timeline: [
        {
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzr5WyKSMpnRQZC5wKM9Dl3dqsnHlA-WZWfg&s',
          title: 'UNOESTE',
          tiers: [
            {
              description: 'Graduação: Bacharelado em Ciência da Computação',
              beginDate: new Date('2017-02-01'),
              endDate: new Date('2021-12-01'),
              topics: [
                'Artigo publicado em Novembro de 2021 sobre aprendizado de máquina usada em predição de locais de acidente em zonas urbanas.',
                'Honra ao Mérito por ter sido o 4º melhor aluno do 7º termo.'
              ]
            }
          ],
        },
        {
          logo: 'https://intepp.com.br/img/logo-graduadas/play-sistemas.png',
          title: 'PLAY - Sistemas Inteligentes',
          tiers: [
            {
              description: 'Desenvolvedor Full-Stack',
              beginDate: new Date('2021-02-01'),
              endDate: new Date('2021-12-01'),
              topics: [
                'Desenvolvimento de atualização para um sistema de gerenciamento de máquinas e seus indicadores.',
                'Desenvolvido APIs para consumo das informações coletadas das máquinas e calculadas em suas proporção.',
                'Remodelado a interface para ficar menos poluída e mais essencialmente informativa.'
              ]
            }
          ],
        },
        {
          logo: 'https://i1.sndcdn.com/avatars-000199912813-lgg84l-t1080x1080.jpg',
          title: 'Sensedia',
          tiers: [
            {
              description: 'Engenheiro de Software I',
              beginDate: new Date('2022-01-01'),
              endDate: new Date('2023-10-01'),
              topics: [
                'Trabalhei na parte de consultoria, atuando junto com times de empresas referência no mercado como Porto Seguro, JCA e WebMotors.',
                'Desenvolvi microsserviços em Java (Springboot) e C# (.NET) aplicando os conceitos de SOLID, DDD e arquitetura hexagonal junta a implementação de vários padrões de projeto.',
                'Estruturei o desenvolvimento orientado a eventos (EDD) junto a serviços de message-broker e event-driven como AWS SQS, AWS SNS e RabbitMQ.',
                'Tive experiência com API Gateway na qual atuei no desenvolvimento de APIs e interceptors integradas ao gateway da plataforma da empresa e consumi seus serviços.',
                'Utilizei a ferramenta docker para gerenciamento de imagens e containers de serviços e aplicações, provisionando banco de dados e serviços de message-broker.',
                'Utilizei diariamente ferramentas de versionamento com GIT, AWS CodeCommit e BitBucket e suas ferramentas de CI.'
              ]
            },
            {
              description: 'Engenheiro de Software II',
              beginDate: new Date('2023-10-01'),
              endDate: new Date('2024-03-01'),
              topics: [
                'Trabalhei como consultor nas empresas RaiaDrogasil e CNSeg, desenvolvendo microsserviços em Java (Spring) e estruturando a arquitetura dos mesmos.',
                'Fiz integrações com serviços cloud AWS como AWS Bucket S3 e AWS Lambda, além de utilizar as ferramentas de mensageria da AWS (SQS e SNS).',
                'Utilizei banco de dados relacionais e não-relacionais como MongoDB, AWS DocumentDB, MySQL, Postgresql e redis.',
                'Tive experiência com API Gateway na qual atuei no desenvolvimento de APIs e interceptors integradas ao gateway da plataforma da empresa e consumi seus serviços.',
                'Utilizei ferramentas de telemetria como o Elastic Search e o Kibana e ferramentas de observabilidade como o ArgoCD para controle das pipes dos ambientes.',
                'Tive experiência rotineira com metodologias ágeis como Scrum e Kanban e seus ritos.'
              ]
            }
          ],
        },
        {
          logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj22a36aq0AqbJix-tdOHSMkdq9jxfd72pUg&s',
          title: 'Zup Innovation',
          tiers: [
            {
              description: 'Engenheiro de Plataforma',
              beginDate: new Date('2024-03-01'),
              actualMessage: 'O momento',
              topics: [
                'Desenvolvi serviços para coleta e exibição de dados dentro da plataforma de insights do produto Stackspot©.',
                'Configurei e integrei serviços AWS com as APIs de dados como AWS Athena, AWS S3 e AWS Lambda.',
                'Configurei deploys de infraestrutura com terraform e monitorei os deploy com o kubedash e datadog.',
                'Desenvolvi um API Gateway do zero integrado ao AWS Api Gateway com paridade por VPC private link.',
                'Desenvolvi integração frontend/backend para comunicação de dados e disparo de eventos para um servidor kafka.',
                'Desenvolvi serviços de autenticação integrados ao OPA (Open Policy Agent) e com o AWS IAM.'
              ]
            }
          ],
        }
      ],
    },
    creations: {
      title: 'ALGUMAS COISAS QUE EU CRIEI',
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
          description: 'A react.js project using firebase made with rocketseat',
          language: 'typescript',
          languageColor: '#007ACC',
          branches: 1,
          stars: 0,
          link: 'https://github.com/Krauzy/let-me-ask'
        }
      ],
    },
    footer: {
      title: 'BORA TROCAR UMA IDÉIA?',
      description: 'Quer conversar sobre um projeto ou só dizer oi? Chega junto',
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
      endMessage: 'Feito com o ♥️ por <a href="https://github.com/Krauzy" target="_blank">@Krauzy</a>'
    }
  },
  tools: {
    title: 'Ferramentas',
    description: 'Abaixo estão algumas ferramentas que eu criei e integrei com essa plataforma, fique a vontade para testá-los a vontade, só tome cuidado, alguns poder ser bem agressivos 😈',
    categoryTitle: 'Categorias',
    anchorDescription: 'Ver',
    dateDescription: 'dia(s) atrás',
    backMessage: 'Voltar para ferramentas',
    categoryTypeList: [
      {
        name: 'Todos',
        index: 0
      },
      {
        name: 'Marketing',
        index: 1
      },
      {
        name: 'Escrita',
        index: 2
      },
      {
        name: 'Saúde',
        index: 3
      }
    ],
    categoryTools: [
      {
        title: 'Editor Markdown',
        subtitle: 'Editor Markdown online para escrever em markdown com visualização em tempo real.',
        description: `
        <h1>Como usar o Editor Markdown?</h1>
        <br/>
        <ul>
          <li>• Escreva em markdown dentro do editor à esquerda.</li>
          <li>• O markdown compilado (HTML) será exibido à direita em tempo real.</li>
          <li>• Você pode consultar o <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Guia Markdown</a> para escrever em Markdown.</li>
          <li>• Não armazenamos nenhum texto seu, pois tudo é feito do lado do cliente.</li>
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
        title: 'Contador de Palavras',
        subtitle: 'Contador de palavras para contar palavras, caracteres, frases e parágrafos em um texto.',
        description: `
        <h1>Como usar o Contador de Palavras?</h1>
        <br/>
        <ul>
          <li>• Insira seu conteúdo de texto na área acima.</li>
          <li>• A contagem de palavras, caracteres, espaços em branco, frases e parágrafos será exibida automaticamente.</li>
          <li>• O tempo de leitura é exibido com base em uma velocidade de leitura de 275 palavras por minuto.</li>
          <li>• A legibilidade é calculada usando o <a href="https://en.wikipedia.org/wiki/Automated_readability_index" target="_blank">índice de legibilidade automatizado</a>.</li>
          <li>• As 6 palavras-chave mais usadas no conteúdo também serão exibidas.</li>
          <li>• Não armazenamos nenhum conteúdo seu, pois tudo é feito do lado do cliente.</li>
        </ul>
        `,
        slug: 'word-counter',
        icon: faFileLines,
        backgroundColor: '#5865F2',
        foreColor: '#FFFFFF',
        categories: [1, 2],
        link: '/tools/word-counter',
        date: new Date('2024-10-15')
      },
      {
        title: 'Métrica Nutricional',
        subtitle: 'Medidor de métricas nutricionais baseadas nas suas informação de medidida',
        description: `
        <h1>Como usar a Métrica Nutrional</h1>
        <br/>
        <ul>
          <li>• Entre com suas informações (sexo, idade, altura e peso))</li>
          <li>• O <a href="https://pt.wikipedia.org/wiki/%C3%8Dndice_de_massa_corporal" target="_blank">IMC</a> será calculado basedo na altura e peso.</li>
          <li>• O <a href="https://pt.wikipedia.org/wiki/Metabolismo_basal" target="_blank">TMB (Taxa Metabólica Basal)</a> será calculado baseado em todos as informações dadas.</li>
          <li>• O <a href="https://pt.wikipedia.org/wiki/Ingest%C3%A3o_di%C3%A1ria_recomendada" target="_blank">NCD (Necessidade Calórica Diária)</a> será calculado baseado no TMB.</li>
          <li>• A taxa de gordura corporal estimada será calculada baseado no seu IMC.</li>
          <li>• O peso ideal será calculado baseado na altura e sexo.</li>
          <li>• A necessidade de macronutrientes será calculada baseado no NCD.</li>
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
    title: 'SOBRE',
    subtitle: 'Bom, sobre mim você pode acessar na página inicial, nessa página vou te contar umas coisas sobre... bem... você ;)',
    finalWarning: `
    Essas informações não está aqui pra te assustar nem nada, é apenas uma demonstração de que eu consigo sobre você com 1 clique seu.
    </br>
    Tome sempre muito cuidado onde você entra na internet.
    </br></br>
    <i>
    "Nem toda toca de coelho leva a maravilhas; algumas escondem abismos dos quais é difícil escapar."
    </br></br>
    - Alice no País das Maravilhas
    </i>
    `,
    ip: 'IP',
    browser: 'Navegador',
    browserVersion: 'Versão',
    os: 'SO',
    networkProvider: 'Conexão',
    timeZone: 'Fuso-Horário',
    location: 'Localização',
    resolution: 'Resol. Navegador',
    screen: 'Resol. Tela',
    language: 'Idioma',
    cookies: 'Cookies',
    processors: 'Processadores',
    javascript: 'Javascript',
    silverLight: 'Silverlight',
    flash: 'Flash',
    adBlocker: 'Ad-Block'
  }
}

export default portugueseData;
