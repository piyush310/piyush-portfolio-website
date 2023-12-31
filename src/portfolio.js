/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Piyush Shukla",
  title: "Hi, I'm Piyush",
  subTitle: emoji(
    "A dedicated software development professional with 3 years of experience. With a strong academic background and diverse technical skills, I excel in challenging environments. I constantly seek opportunities to enhance my expertise and contribute to impactful projects. I am driven to deliver high-quality software solutions and thrive on continuous improvement. Committed and passionate, I aim to make a positive impact in the field of software development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/11NMe_cQ4I77WM8xrlkXGMMQe0T9B2XsR/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/piyush310",
  leetcode: "https://leetcode.com/piyush310/",
  linkedin: "https://www.linkedin.com/in/piyush-shukla-097797214/",
  gmail: "piyushshukla356@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: emoji(
    "🎢 A tech-savvy, full-stack developer on a wild ride to explore every corner of the tech universe and conquer every stack!"
  ),
  skills: [
    emoji(
      "⚡ Proficient in developing scalable microservices using Django, FastAPI, and Google Cloud, resulting in improved application performance."
    ),
    emoji(
      "⚡ Experienced in designing REST APIs with FastAPI and Django REST Framework, integrating machine learning tasks and enabling efficient data extraction using Google Cloud services."
    ),
    emoji(
      "⚡ Skilled in full-stack web development, delivering user-friendly applications that enhance engagement and satisfaction."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      skillName: "git",
      fontAwesomeClassname: "fas fa-code-branch"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fas fa-cloud"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "International Institute of Information Technology, Bhubaneswar",
      logo: require("./assets/images/iiitbh.png"),
      subHeader:
        "Bachelor of Technology in Information Technology",
      duration: "Aug 2016 - July 2020",
      descBullets: [
        "Coursework: Data Structures and Algorithms, Operating System, Computer Network,  Computer Organization and Advanced Microprocessors, Digital System Design"
      ]
    },
    {
      schoolName: "Dr. Virendra Swarup Public School",
      logo: require("./assets/images/vss.jpeg"),
      subHeader: "10th & 12th",
      duration: "May 2013 - May 2015",
      descBullets: [
        "Coursework: Maths, Physics, Chemistry, Physical Education, Computer Science"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Developer",
      company: "Quantiphi",
      companylogo: require("./assets/images/quantiphilogo.png"),
      date: "Jul 2020 – Aug 2023",
      descBullets: [
        "Led and collaborated with a team of 8 engineers to spearhead the development of a cutting-edge AI-based tutor platform in close partnership with Google Cloud Public Sector unit.Successfully deployed the platform, catering to the distinctive needs of 5+ prestigious universities, including Arizona State University and Southern New Hampshire University.The platform revolutionized learning experiences by delivering personalized and data- driven tutoring support, optimizing academic performance for thousands of students.",
        "Developed an automated KYC solution for ICICI Bank, reducing the process time to 5 seconds.",
        "Developed a scalable microservice for Accumulus Synergy that is responsible for executing the machine learning process for parsing the PDF and extracting data out of it.This microservice has been successfully deployed in a production environment and is currently processing an average of 1000 PDFs per day, with a peak capacity of 2500 PDFs during high- demand periods.Through rigorous testing and optimization, the microservice achieves an impressive accuracy rate of 95% in extracting data from various types of PDF documents.The integration with Firebase and Google Cloud Tasks has allowed for seamless task management and parallel processing, resulting in a 30% reduction in overall processing time compared to the previous system.",
        "Proficient in designing and implementing innovative products to optimize operations and performance for renewable energy plants.Skilled in real - time monitoring, I have helped them achieve a 15 % reduction in downtime and increased overall efficiency by 20 % through data - driven insights and predictive maintenance strategies.I am eager to contribute my expertise to empower Adani Green Energy in achieving their green objectives.",
        "Spearheaded the development of a modular component library, reducing development time by 30% and enabling seamless integration across projects, fostering collaboration and accelerating delivery processes.",
        "Working with Quantiphi product team Athenasowl to implemented kubernetes clusters for seamless CPU-GPU communication, resulting in improved ML processing and reduced latency by 30%.",
        "Implemented Kubernetes clusters for seamless CPU-GPU communication, resulting in improved ML processing and reduced latency.",
        "Collaborated with cross-functional teams to optimize GPU instance and ML model configurations, improving efficiency, accuracy, and reducing infrastructure costs.",
      ]
    },
    {
      role: "Research And Development Intern",
      company: "IIT Delhi",
      companylogo: require("./assets/images/iit.png"),
      date: "May 2019 – July 2019",
      descBullets: [
        "Worked in the area of Social Media analytics, with a focus on the dark side of social media usage behavior",
        "Developed natural language processing (NLP) models and algorithms for various research projects.",
        "Utilized Python programming skills to implement functional and scalable solutions.",
        "Applied machine learning techniques to enhance the performance of NLP models.",
        "Collaborated with researchers to gather requirements and implement solutions.",
        "Analyzed the results of implemented models and algorithms to evaluate their effectiveness.",
        "Participated in regular meetings and presentations to share progress and receive feedback.",
        "Gained valuable experience in developing NLP solutions for real-world problems.",
        "Developed skills in teamwork, communication, and collaboration within a research and development environment."
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
  title: "Projects",
  subtitle: "SOME PERSONAL PROJECTS",
  projects: [
    {
      image: require("./assets/images/imdb.jpeg"),
      projectName: "IMDB",
      projectDesc: [
        "This is a clone of the IMDb (Internet Movie Database) API built using Django and Django REST Framework. It allows users to access movie and TV show information, including details about cast, crew, ratings, and more."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/piyush310/imdb-api"
        }
      ]
    },
    {
      image: require("./assets/images/red.png"),
      projectName: "Payment-Gateway",
      projectDesc: [
        "Local business take on heavy losses due to the ongoing pandemic and people shifting to online sellers for day-to-day products. Online payments are the easy way to transact money for these local vendors. Attaching this problem with a social cause will help boost the economy for the small businesses as well as solve for the cause. Red pill and Blue pill is a concept about a choice between the willingness to learn a potentially unsettling or life- changing truth by taking the red pill or remaining in contented ignorance with the blue pill."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/piyush310/Payment-Gateway"
        }
      ]
    },
    {
      image: require("./assets/images/hack.jpeg"),
      projectName: "Disaster Prediction System",
      projectDesc: [
        "Developing an advanced early warning system for floods requires a team with expertise in data analysis, machine learning, and web development, as well as a deep under- standing of the complexities and challenges of predicting natural disasters."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/piyush310/NTT-CodeForGood-Hackathon"
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle: "My Achievements!",

  achievementsCards: [
    {
      title: "GCP - Associate Cloud Engineer",
      subtitle:
        "In- depth knowledge of GCP services, tools, and concepts including GCP infrastructure, computing, storage and database services, networking, security, and monitoring.",
      image: require("./assets/images/gcp.png"),
      imageAlt: "Python Champion Award"
    },
    {
      title: "Certificate of Recognition",
      subtitle:
        "Receive Certificate of Recognition on behalf of Google for the Adani Project",
      image: require("./assets/images/Adani_2012_logo.png"),
      imageAlt: "Google Assistant Action Logo"
    },

    {
      title: "Disaster Prediction System",
      subtitle:
        "Top 10 Finalist in NTT Data CodeForGood Hackathon.",
      image: require("./assets/images/NTT_Data-Logo.wine.png"),
      imageAlt: "AWP logo"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "DISCUSS A PROJECT OR HAVE WONDERFUL JOB OPPORTUNITIES? MY INBOX IS OPEN FOR ALL.",
  email_address: "piyushshukla356@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};
