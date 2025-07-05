export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 4,
    name: "Projects",
    href: "#work",
  },
  {
    id: 5,
    name: "Education",
    href: "#education",
  },
  {
    id: 6,
    name: "Contact",
    href: "#contact",
  },
  {
    id: 7,
    name: "View Resume",
    href: "https://shiny-isurandi-cv.tiiny.site/",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Lakshmi Kanchana",
    position: "Associate Tech Lead",
    img: "assets/endorsments/endorser-1.jpeg",
    review: `
    I am delighted to write this recommendation for Shiny who recently completed her internship with our organization. Throughout her time with us, Shiny demonstrated exceptional skills and a strong work ethic, making her an invaluable asset to our team.\n
During her internship, Shiny primarily worked on Spring Boot projects, showcasing her proficiency in this technology. She actively contributed to our team's efforts in developing our very first metaverse application, which was a significant undertaking. Her dedication and hard work were evident as she worked closely with her teammates, ensuring successful project outcomes.\n
In addition to her involvement in Spring Boot projects, Shiny had the opportunity to work with Azure and AWS environments, further expanding her knowledge and skillset. She also gained valuable experience in utilizing Quicksight, enhancing her data visualization capabilities.\n
What truly impressed me about Shiny was her ability to quickly grasp new concepts and apply them effectively. Despite being a junior team member, she consistently exceeded expectations and delivered exceptional results within short time periods. Her enthusiasm and eagerness to learn were evident, and she was never hesitant to take on new challenges.\n
Furthermore, Shiny proved herself to be an exceptional team player. She actively collaborated with her colleagues, demonstrating responsibility, cooperation, and support. Her positive attitude and willingness to assist others significantly contributed to the overall success of our projects.\n
Moreover, Shiny possesses a solid understanding of agile methodologies, which she seamlessly applied to her work. Her ability to adapt to changing project requirements and deliver under tight deadlines showcased her agility and resilience.\n
I would like to express my sincere gratitude to Shiny for her unwavering commitment and dedication throughout her internship. Her contributions were instrumental in our team's success, and I have no doubt that she will continue to excel in her future endeavours.\n
It has been an absolute pleasure working with Shiny, and I have no hesitation in recommending her for any future opportunities. I am confident that she will continue to thrive and make valuable contributions wherever she goes.\n
I wish Shiny all the best in her future endeavours, and I am certain that she will achieve great success. Should you require any further information or have any questions, please do not hesitate to reach out to me.`,
  },
  {
    id: 2,
    name: "Udara Senarathne",
    position: "Associate Business Analyst",
    img: "assets/endorsments/endorser-2.jpeg",
    review: `I had the pleasure of working with Shiny at Loons Lab. As a software engineer, she was reliable, technically strong, and always responsive to requirements and feedback. She quickly understood business needs and translated them into effective solutions with attention to detail.\n
    Her collaborative attitude and clear communication made working with her seamless. I highly recommend her for any development role.`,
  },
  {
    id: 3,
    name: "Hansi Karunarathne",
    position: "HR Manager",
    img: "assets/endorsments/endorser-3.jpeg",
    review: `I've had the pleasure of working with Shiny and can confidently say that they are an exceptional Full Stack Software Engineer with a solid foundation in Computer Science and Software Engineering. Their ability to approach complex problems with logical thinking, creativity, and a strong grasp of both front-end and back-end technologies sets them apart.\n
    Shiny is highly dependable, detail-oriented, and always eager to learn and grow. They consistently deliver high-quality work, meet deadlines, and collaborate effectively with team members. Their passion for coding, combined with their strong academic background, makes them a valuable asset to any tech team.\n    
    I highly recommend Shiny to any organization looking for a talented and dedicated software engineer. They have the skills, mindset, and work ethic to make a significant impact.`,
  },
  {
    id: 4,
    name: "Timoth Samuel",
    position: "UI/UX Engineer",
    img: "assets/endorsments/endorser-4.jpeg",
    review: `I had the chance to study alongside Shiny through the IIT Infoschol scholarship program under the Business Information Systems degree. We worked together on multiple projects during that time, and I was always impressed by how sharp and technically sound she was.\n
    Shiny has that rare mix of strong technical ability and great people skills. Whether it was solving complex problems, building systems, or brainstorming ideas as a team, she consistently brought clarity and focus to the work. She's also a great team player: thoughtful, collaborative, and always willing to help others when needed.\n
    What really stands out about Shiny is her work ethic. She’s consistent, responsible, and never backs away from a challenge. Honestly, she’s a perfect fit for any software engineering role that requires deep technical thinking, problem-solving, and strong ownership.`,
  },
];

export const myProjects = [
  {
    title: "ARfolio",
    desc: `ARfolio is my final year research project that transforms traditional resumes into interactive AR experiences. Designed for the IT community, ARfolio enables professionals to showcase their qualifications using a WebAR-based portfolio triggered by a multi-functional QR code.`,
    subdesc:
      "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.",
    href: "https://github.com/shinyZu/ARfolio",
    // texture: 'https://drive.google.com/file/d/1MwVg9wXSHqgOFq7cVhM5M97C4Mw7v4bG/view',
    texture: "textures/project/arfolio.mp4",
    // logo: 'assets/project-logo1.png',
    logo: "assets/projects/arfolio-logo2.png",
    logoStyle: {
      backgroundColor: "#448979",
      border: "0.2px solid #448979",
      boxShadow: "0px 0px 60px 0px #5b8d81",
    },
    spotlight: "assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "A-Frame",
        path: "assets/tech/aframe.jpeg",
      },
      {
        id: 2,
        name: "React.js",
        path: "assets/tech/react.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "assets/tech/mongodb.png",
      },
      {
        id: 4,
        name: "NodeJS",
        path: "assets/tech/nodejs2.png",
      },
      {
        id: 5,
        name: "ExpressJS",
        path: "assets/tech/expressjs.png",
      },
      {
        id: 6,
        name: "AWS",
        path: "assets/tech/aws3.png",
      },
      {
        id: 7,
        name: "Docker",
        path: "assets/tech/docker.png",
      },
    ],
  },
  {
    title: "SchoolMart",
    desc: `An e-commerce application built for managing stationery stationery with online shopping features. It allows users to browse school stationery, add items to a cart, checkout, and view order history. 
      Admins can perform full CRUD operations on stationery and categories, including image uploads via the Google Drive API. 
      The platform offers a responsive, user-friendly experience with category-based search and order management.
      `,
    subdesc:
      "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
    href: "https://github.com/shinyZu/SchoolMart",
    texture: "textures/project/schoolmart.mp4",
    logo: "assets/projects/schoolmart-logo2.png",
    logoStyle: {
      backgroundColor: "#424e8b",
      border: "0.2px solid #424e8b",
      boxShadow: "0px 0px 60px 0px #76acc5",
    },
    spotlight: "assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "assets/tech/react.svg",
      },
      {
        id: 2,
        name: "MongoDB",
        path: "assets/tech/mongodb.png",
      },
      {
        id: 3,
        name: "NodeJS",
        path: "assets/tech/nodejs2.png",
      },
      {
        id: 4,
        name: "ExpressJS",
        path: "assets/tech/expressjs.png",
      },
      {
        id: 5,
        name: "Google Drive API",
        path: "assets/tech/googledrive.png",
      },
    ],
  },
  {
    title: "AZ News",
    desc: `AZ News is a full-stack news management web application developed to practice and strengthen my skills in the MERN stack. It includes an admin dashboard that allows authorized users to perform full CRUD operations on both news articles and editor accounts. The project is entirely self-contained and does not rely on third-party APIs. Instead, it focuses on core backend development, secure data handling, and a clean, responsive frontend interface to manage news content effectively.`,
    subdesc:
      "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
    href: "https://github.com/shinyZu/AZ_News",
    texture: "textures/project/aznews.mp4",
    logo: "assets/projects/aznews-logo2.png",
    // logoStyle: {
    //   backgroundColor: '#60f5a1',
    //   background:
    //     'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
    //   border: '0.2px solid rgba(208, 213, 221, 1)',
    //   boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    // },
    logoStyle: {
      backgroundColor: "#bf9a9a",
      border: "0.2px solid #bf9a9a",
      boxShadow: "0px 0px 60px 0px #bf9a9a",
    },
    spotlight: "assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "assets/tech/react.svg",
      },
      {
        id: 2,
        name: "MongoDB",
        path: "assets/tech/mongodb.png",
      },
      {
        id: 3,
        name: "NodeJS",
        path: "assets/tech/nodejs2.png",
      },
      {
        id: 4,
        name: "ExpressJS",
        path: "assets/tech/expressjs.png",
      },
    ],
  },
  {
    title: "Movie Recommendation System",
    desc: `This project implements a simple content-based movie recommendation system that goes beyond basic 
    metadata by leveraging multiple rich features including title, genre, plot summary, top cast, 
    director, and keywords to improve recommendation quality.`,
    subdesc:
      "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
    href: "https://github.com/shinyZu/Movie-Recommendation-System",
    texture: "textures/project/moviehive.mp4",
    logo: "assets/projects/moviehive-logo2.png",
    logoStyle: {
      backgroundColor: "#8481b5",
      border: "0.2px solid #8481b5",
      boxShadow: "0px 0px 60px 0px #8481b5",
    },
    spotlight: "assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "HTML5",
        path: "assets/tech/html5.png",
      },
      {
        id: 2,
        name: "CSS",
        path: "assets/tech/css.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "assets/tech/javascript.png",
      },
      {
        id: 4,
        name: "Python",
        path: "assets/tech/python.png",
      },
      {
        id: 5,
        name: "Flask",
        path: "assets/tech/flask3.png",
      },
      {
        id: 6,
        name: "AWS",
        path: "assets/tech/aws3.png",
      },
    ],
  },
  {
    title: "Car Rental System",
    desc: `A web-based car reservation platform developed for Easy Car Rental Pvt. Ltd., enabling customers to 
    browse available vehicles, make bookings, and manage reservations with ease. The system streamlines rental 
    operations, improves customer experience, and enhances overall efficiency for the company.`,
    subdesc:
      "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
    href: "https://github.com/shinyZu/Car_Rental_System",
    texture: "textures/project/carrental.mp4",
    logo: "assets/projects/carrental-logo.png",
    logoStyle: {
      backgroundColor: "#d7cb77",
      border: "0.2px solid #d7cb77",
      boxShadow: "0px 0px 60px 0px #c8d38a",
    },
    spotlight: "assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "assets/tech/react.svg",
      },
      {
        id: 2,
        name: "Java",
        path: "assets/tech/java3.png",
      },
      {
        id: 3,
        name: "Spring Web MVC",
        path: "assets/tech/spring.png",
      },
      {
        id: 4,
        name: "MySQL",
        path: "assets/tech/mysql2.png",
      },
    ],
  },
  {
    title: "Point Of Sale(POS) System",
    desc: `A simple Point of Sale (POS) system built with Spring Boot and JavaScript to streamline sales, 
    inventory management, and customer transactions for retail businesses. The system supports real-time updates, 
    user-friendly interfaces, and responsive alerts to enhance operational efficiency.`,
    subdesc:
      "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
    href: "https://github.com/shinyZu/SpringBoot_POS",
    texture: "textures/project/pos.mp4",
    logo: "assets/projects/pos-logo.png",
    logoStyle: {
      backgroundColor: "#81a529",
      border: "0.2px solid #81a529",
      boxShadow: "0px 0px 60px 0px #dbe98d",
    },
    spotlight: "assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "assets/tech/java3.png",
      },
      {
        id: 4,
        name: "MySQL",
        path: "assets/tech/mysql2.png",
      },
      {
        id: 1,
        name: "HTML5",
        path: "assets/tech/html5.png",
      },
      {
        id: 2,
        name: "CSS",
        path: "assets/tech/css.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "assets/tech/javascript.png",
      },
      {
        id: 3,
        name: "Bootstrap",
        path: "assets/tech/bootstrap.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    // ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-42, 30, 0] : isTablet ? [-45, 32, 0] : [-49, 30, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    title: "Associate Software Engineer | Full Stack",
    company: "Loons Lab (Pvt) Ltd.",
    href: "https://www.linkedin.com/company/loonslab/",
    duration: "Aug/2023 - Apr/2024",
    desc: `Developed and maintained web applications using MERN stack. Worked with Docker and Kubernetes for 
    container orchestration and contributed to a microservices architecture. 
    Collaborated with cross-functional teams to enhance functionality and participated in recruitment 
    processes and mentoring activities.`,
    icon: "assets/experience/loonslab-logo.jpg",
    animation: "slowtalking",
  },
  {
    id: 2,
    title: "Associate Software Engineer | Full Stack",
    company: "Ceyentra Technologies (Pvt) Ltd.",
    href: "https://www.linkedin.com/company/ceyentra/",
    duration: "May/2023 - Jun/2023",
    desc: `Implemented key APIs, conducted server builds and API testing, and maintained technical documentation for internal systems.`,
    icon: "assets/experience/ceyentra-logo.jpeg",
    animation: "clapping",
  },
  {
    id: 3,
    title: "Trainee Associate Software Engineer | Full Stack",
    company: "Ceyentra Technologies (Pvt) Ltd.",
    href: "https://www.linkedin.com/company/ceyentra/",
    duration: "Nov/2022 - May/2023",
    desc: `Gained hands-on experience in Java/Spring Boot development, integrated cloud services (Azure, AWS), 
    created BI dashboards using Amazon QuickSight, and handled API development and testing.`,
    icon: "assets/experience/ceyentra-logo.jpeg",
    animation: "salute",
  },
];

export const educationList = [
  {
    id: 1,
    title: "BSc (Hons) in Computer Science & Software Engineering",
    awards: "1st Class / Top Student / Awardee for the Best Performance",
    institute: "SLIIT City Uni affiliated with the University of Bedfordshire",
    address: "United Kingdom",
    duration: "2023 - 2024",
    desc: ``,
    icon: "assets/education/uob-logo.png",
    animation: "femalevictory",
  },
  {
    id: 2,
    title: "Graduate Diploma in Software Engineering (GDSE)",
    awards: "",
    institute: "Institute of Software Engineering (IJSE)",
    address: "Panadura, Sri Lanka",
    duration: "2021 - 2023",
    desc: ``,
    icon: "assets/education/ijse-logo.jpeg",
    animation: "clapping",
  },
  {
    id: 3,
    title: "BSc (Hons) in Business Information Systems",
    awards: "",
    institute: "IIT affliated with University of Westminster",
    address: "United Kingdom",
    duration: "2020 - 2021",
    desc: ``,
    icon: "assets/education/uow-logo.png",
    animation: "idleWithTablet",
  },
  {
    id: 4,
    title: "Primary & Secondary Education",
    awards: "Biology, Chemistry, Physics",
    institute: "Siridhamma College",
    address: "Galle, Sri Lanka",
    duration: "2005 - 2018",
    desc: ``,
    icon: "assets/education/scg-logo.png",
    animation: "salute",
  },
];
