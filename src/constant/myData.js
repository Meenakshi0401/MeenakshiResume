import {
  AngularLogo,
    Bootstrap,
    CognizantLogo,
    DiamondLgBlue,
    Drawing,
    Education,
    Git,
    GraphQLogo,
    HighFiveIcon,
    JavascriptLogo,
    Jira,
    NiceLogo,
    NodeJsLogo,
    PersistentLogo,
    Postgres,
    Punctual,
    ReactJs,
    Redux,
    SkillCss,
    // SkillFigma,
    SkillHtml5,
    SuperHero,
    // SkillPhotoshop,
    // SkillWireframe,
    // SkillXd,
    Travelling,
  } from "../assets/image";
  
  const DATA = {
    professionalExperiences: [
      {
        id: "prof_exp_1",
        startDate: "Dec 2021",
        endDate: "",
        position: "Senior Associate",
        diamondColors: ["Pink", "Yellow", "Blue"],
        company: {
          logo: CognizantLogo,
          name: "Cognizant Technology Solutions",
        },
        roleNResponsibilities:
          "Creating and implementing new features using React.js to enhance user experience. Designing and developing reusable UI components for future use. Converting design mockups and wireframes into high-quality code. Ensuring components perform efficiently across various devices and browsers. Working closely with UX/UI designers, backend developers, and product teams to understand requirements and implement solutions. Using state management libraries like Redux to manage the state of the application. Writing tests and debugging code to ensure the application is robust and error-free. Conducting code reviews and providing feedback to maintain code quality.", 
      },
      {
        id: "prof_exp_2",
        startDate: "May 2021",
        endDate: "Dec 2021",
        position: "Lead Software Developer",
        diamondColors: ["Pink", "Green", "Orange"],
        company: {
          logo: NiceLogo,
          name: "Nice interactive solutions",
        },
        roleNResponsibilities:
          "Developed and implemented scalable and efficient software solutions using best practices and modern technologies. Optimized existing codebase and identified opportunities for performance improvements and code refactoring. Mentored junior developers and conducted code reviews to ensure code quality and adherence to coding standards. Participated in regular stand-up meetings, sprint planning, and retrospective sessions to track progress and identify areas for improvement.",
      },
      {
        id: "prof_exp_3",
        startDate: "Oct 2015",
        endDate: "Apr 2021",
        position: "Senior Software Developer",
        diamondColors: ["Green", "Yellow", "Blue"],
        company: {
          logo: PersistentLogo,
          name: "Persistent System Pvt Ltd.",
        },
        roleNResponsibilities:
          "Collaborated with cross-functional teams to gather requirements, define project scope, and create detailed project plans. Mentored junior developers, providing guidance and support in their career growth. Developed and maintained complex software systems, ensuring optimal performance and usability. Led a team of developers in the successful completion of a high impact project. Implemented best practices and coding standards to ensure code quality and maintainability",
      },
    ],
    educationalExperiences: [
      {
        id: "edu_1",
        icon: Education,
        course: "Bachelor of Engineering",
        institution: "All India Shri Memorial Society's Institute of Information Technology",
        degree: "BE",
        startDate: "2011",
        endDate: "2015",
      },
    ],
    skills: [
      {
        id: "skill_1",
        icon: ReactJs,
        name: "React JS",
        description: "Library for web development",
      },
      {
        id: "skill_2",
        icon: SkillHtml5,
        name: "HTML5",
        description: "Hypertext Markup",
      },
      {
        id: "skill_3",
        icon: SkillCss,
        name: "CSS",
        description: "Attractive Design & Frameworks",
      },
      {
        id: "skill_4",
        icon: JavascriptLogo,
        name: "Javascript",
        description: "Programming Language",
      },
      {
        id: "skill_5",
        icon: AngularLogo,
        name: "Angular",
        description: "Web application framework",
      },
      {
        id: "skill_6",
        icon: Bootstrap,
        name: "Bootstrap",
        description: "CSS framework",
      },
      {
        id: "skill_7",
        icon: NodeJsLogo,
        name: "Node Js",
        description: "",
      },
      {
        id: "skill_8",
        icon: Postgres,
        name: "Postgres",
        description: "Database management system",
      },
      {
        id: "skill_9",
        icon: GraphQLogo,
        name: "GraphQL",
        description: "Data query and manipulation language",
      },
      {
        id: "skill_10",
        icon: Redux,
        name: "Redux",
        description: "JavaScript library for managing and centralizing application state",
      },
      {
        id: "skill_11",
        icon: Jira,
        name: "JIRA",
        description: "Agile project management tool",
      },
      {
        id: "skill_12",
        icon: Git,
        name: "Git",
        description: "Distributed version control system",
      },
    ],
    // certificatesAndAwards: [
    //   {
    //     id: "cert_award_1",
    //     icon: Coursera,
    //     provider: "Coursera",
    //     course: "UI/UX Advance Course",
    //     startDate: "Dec 2021",
    //     endDate: "Feb 2022",
    //   },
    //   {
    //     id: "cert_award_2",
    //     icon: Google,
    //     provider: "Google",
    //     course: "Google UX Design Professional Certificate",
    //     startDate: "Mar 2021",
    //     endDate: "Jun 2021",
    //   },
    //   {
    //     id: "cert_award_3",
    //     icon: Udemy,
    //     provider: "Udemy",
    //     course: "Fundamental of UI/UX for Students",
    //     startDate: "Jun 2020",
    //     endDate: "Sept 2020",
    //   },
    // ],
    achievements : [
      {
        id: "ach_1",
        title: "High Five Award",
        icon: HighFiveIcon,
        info: "Received “High Five- Award” for attention to details quality and timeliness."
      },
      {
        id: "ach_2",
        title: "Super Hero Award",
        icon: SuperHero,
        info: "Providing solutions with quality"
      },
      {
        id: "ach_3",
        title: "Punctual",
        icon: Punctual,
        info: "Completing all assigned task in time and always punctual in meetings and discussion"
      }
    ],
    hobbiesAndInterests: [
      {
        id: "hob_1",
        icon: Travelling,
        name: "Travelling",
      },
      {
        id: "hob_2",
        icon: Drawing,
        name: "Drawing",
      },
    ],
  };
  
  export default DATA;
  