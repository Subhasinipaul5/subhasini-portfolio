/* =====================================================================
   PORTFOLIO DATA  —  THE ONLY FILE YOU NEED TO EDIT
   =====================================================================
   Everything shown on the website comes from this file.
   Change a value here, save, and the website updates.

   QUICK RULES
   - Text goes inside "double quotes".
   - Every item in a list ends with a comma.
   - To ADD a project / certificate / skill: copy one { ... } block,
     paste it below, and change the text.
   - To REMOVE one: delete its whole { ... } block.
   - Links: put the full address, e.g. "https://github.com/...".
       ""    (empty)  -> the button shows as "coming soon"
       null           -> the button is hidden completely

   NEVER put passwords, API keys or database URLs in this file.
   Everything here is public.

   (The browser-tab title and Google/social preview text live in
    index.html, because an HTML file cannot read this file.)
   ===================================================================== */

// ===== PERSONAL INFORMATION =====
export const personalInfo = {
  name: "Subhasini Paul",
  firstName: "Subhasini",
  lastName: "Paul",
  initials: "SP",
  title: "Full Stack Developer",
  role: "3rd Year B.Tech CSE Student",
  focus: "Full-Stack Development | Web Development",
  university: "Lovely Professional University",
  location: "Phagwara, Punjab, India",
  cgpa: "7.89", // used in About AND Education, change it only here
  email: "paulsubhasini31@gmail.com",
  phone: "", // optional, e.g. "+91-XXXXXXXXXX". Leave "" to hide it.

  // ===== CV / RESUME =====
  // The PDF lives in the "public" folder.
  // To replace it: put the new PDF in "public" and change this one line.
  cvPath: "/Subhasini_Paul_CV.pdf",

  // Optional photo for the ID badge in the About section.
  // Put the image in "public" and write e.g. "/photo.jpg".
  // Leave "" to show your initials instead.
  photo: "/photo.webp",
};

// ===== SOCIAL LINKS =====
export const socialLinks = {
  github: "https://github.com/Subhasinipaul5",
  linkedin: "https://linkedin.com/in/subhasini-paul/",
};

// ===== NAVIGATION =====
// "id" must match a section of the page. mobileOnly: true keeps the
// link out of the desktop bar (so it does not get crowded) but still
// shows it in the phone menu.
export const navLinks = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Internship", id: "internship" },
  { label: "Projects", id: "projects" },
  { label: "Training", id: "training", mobileOnly: true },
  { label: "Certifications", id: "certifications" },
  { label: "Achievements", id: "achievements", mobileOnly: true },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

// ===== HERO (first screen) =====
export const hero = {
  intro:
    "I build practical web applications with modern frontend, backend, and database technologies.",
  facts: [
    { label: "Studying", value: "B.Tech CSE at Lovely Professional University" },
    { label: "Recent", value: "Full Stack Development Intern at Thiranex" },
    { label: "Focus", value: "Full-stack and web development" },
  ],
};

// ===== ABOUT =====
export const about = {
  heading: "Hello!",
  paragraphs: [
    "I'm a full stack developer and 3rd-year B.Tech Computer Science and Engineering student at Lovely Professional University, with hands-on experience building web applications.",
    "I build practical web applications with Node.js, Express.js, MongoDB and REST APIs on the back end, and HTML, CSS, JavaScript and React on the front end. UI/UX training in Figma shapes how I plan screens and user flows, and regular problem solving keeps my fundamentals sharp.",
  ],
};

// ===== SKILLS =====
// Add a skill: add "Name" to the right list.
// Add a whole group: copy one { category, items } block.
export const skills = {
  heading: "Skills",
  intro: "The languages, frameworks and tools I use to build and ship web applications.",
  groups: [
    { category: "Languages", items: ["C", "C++", "Java", "Python", "SQL", "JavaScript"] },
    { category: "Frameworks", items: ["Express.js", "React (Basic)"] },
    { category: "Frontend", items: ["HTML", "CSS"] },
    { category: "Backend", items: ["Node.js", "MongoDB", "REST APIs", "Postman"] },
    {
      category: "Tools & Platforms",
      items: ["GitHub", "VS Code", "Oracle", "Figma", "LeetCode", "GeeksforGeeks", "HackerRank", "Netlify", "Render"],
    },
    {
      category: "Soft Skills",
      items: ["Problem-solving", "Team Collaboration", "Continuous Learning", "Creative"],
    },
  ],
};

// ===== INTERNSHIP =====
export const internship = {
  heading: "Internship",
  role: "Full Stack Development Intern",
  company: "Thiranex",
  period: "June 2026 – July 2026",
  certificateUrl: "https://drive.google.com/file/d/1QpNUD-pILtj-e8xUf7B7IP8qPY_zzAfI/view?usp=sharing",
  // The big numbers. "value" can be "3", "15+", "25%" ...
  highlights: [
    { value: "3", label: "full-stack web applications developed and enhanced" },
    { value: "15+", label: "REST API endpoints built and integrated" },
    { value: "10+", label: "critical bugs resolved" },
    { value: "25%", label: "reduction in debugging time" },
  ],
  points: [
    "Developed and enhanced 3 full-stack web applications using HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB.",
    "Built and integrated 15+ REST API endpoints, implementing authentication, CRUD operations, and database integration across the applications.",
    "Deployed applications using Git and GitHub.",
    "Resolved 10+ critical bugs and reduced debugging time by 25%, improving development efficiency.",
  ],
  technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git", "GitHub"],
};

// ===== PROJECTS =====
// Add a project: copy one { ... } block and edit it. That's all.
// They appear on the page in the same order as in this list
// (ongoing first, then newest to oldest).
// status: "Completed" or "Ongoing"
// liveUrl / githubUrl:  "https://..."  -> working button
//                       ""             -> button shows "coming soon"
//                       null           -> no button
export const projects = {
  heading: "Projects",
  intro: "Full-stack applications I designed, built and deployed.",
  items: [
    {
      title: "SubhRa Crafts",
      status: "Ongoing",
      period: "", // no dates while it is ongoing
      summary: "An ongoing e-commerce website project for a handmade resin jewelry brand.",
      points: [
        "Product browsing and product categories.",
        "User and admin functionality with product management.",
        "E-commerce features on a responsive frontend.",
        "Backend/API integration with MongoDB.",
      ],
      technologies: [], // add the tech stack here when you want to show it
      liveLabel: "Live website",
      liveUrl: "https://subhra-crafts.netlify.app/",
      githubUrl: null, // change to "https://github.com/..." to show a GitHub button
    },
    {
      title: "Task Management System",
      status: "Completed",
      period: "June 2026 – July 2026",
      points: [
        "Designed a full-stack task management application with dedicated Admin and User panels for task assignment, tracking, and user activity management.",
        "Built authentication, task CRUD operations, status tracking, and database integration using Node.js, Express.js, MongoDB, and REST APIs.",
        "Streamlined task assignment, progress tracking, and user administration through role-based workflows in a centralized task management platform.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "REST APIs", "Render", "Netlify", "GitHub"],
      liveLabel: "Live demo",
      liveUrl: "https://taskmangement-eexv.onrender.com/",
      githubUrl: "https://github.com/Subhasinipaul5/TaskMangement",
    },
    {
      title: "Smart Water Quality Monitoring System",
      status: "Completed",
      period: "March 2026 – April 2026",
      points: [
        "Designed a full-stack water quality monitoring platform for organizing water quality data and supporting systematic monitoring and data management.",
        "Engineered JWT-based authentication, REST APIs, automated water quality alerts, and analytics using Node.js, Express.js, MongoDB, and Mongoose.",
        "Delivered a unified monitoring platform that streamlined water quality data management, automated alerts, and analytical insights for structured monitoring and data-driven analysis.",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "REST APIs", "Render", "Netlify", "GitHub"],
      liveLabel: "Live demo",
      liveUrl: "https://smartwaterqualitydetection-1.onrender.com/",
      githubUrl: "https://github.com/Subhasinipaul5/SmartWaterQualityDetection",
    },
  ],
  // Small handwritten note at the end of the project list.
  endNote: "More on my GitHub",
};

// ===== UI/UX TRAINING =====
export const training = {
  heading: "UI/UX Training",
  title: "UI/UX Design and Prototyping for Web and Mobile Applications",
  organization: "Lovely Professional University",
  period: "June 2026 – July 2026",
  certificateUrl: "https://drive.google.com/file/d/1i4fwNFm-ZagTy06wjDoPo8KQD9sbAxqt/view?usp=sharing",
  summary:
    "Hands-on training in the full design process for web and mobile applications, from user research to interactive prototypes in Figma.",
  // The steps of the design process, in order.
  stages: [
    { title: "Foundations", topics: ["UI/UX design principles", "Design thinking", "Usability"] },
    { title: "Research", topics: ["User research", "User personas", "Empathy maps"] },
    { title: "Structure", topics: ["Information architecture", "User flows", "Wireframes"] },
    {
      title: "Visual design",
      topics: ["Color theory", "Typography", "Visual hierarchy", "Spacing", "Negative space", "Consistency"],
    },
    { title: "Prototype", topics: ["High-fidelity UI designs", "Interactive Figma prototypes"] },
  ],
};

// ===== CERTIFICATIONS =====
// Add a certificate: copy one line and edit it.
// url: paste the certificate link to make the row clickable. "" = no link.
export const certifications = {
  heading: "Certifications",
  intro: "Courses and certifications completed alongside my degree.",
  items: [
    {
      title: "Oracle AI Database Certified Foundations Associate",
      issuer: "Oracle",
      date: "August 2026",
      url: "https://drive.google.com/file/d/1VYbK_P2GM044FeOdOfT6XZVXu6nfN4LG/view?usp=sharing",
    },
    {
      title: "React (Basic)",
      issuer: "HackerRank",
      date: "August 2026",
      url: "https://drive.google.com/file/d/1T2zKHzbaPoMFgGq4pwEonNmcblJyJQ_n/view?usp=sharing",
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud",
      date: "July 2026",
      url: "https://drive.google.com/file/d/1oRKNPIRmQFWENKSbqmECm5bpSuhr9O9o/view?usp=sharing",
    },
    {
      title: "Completed Database Management System Part - 1",
      issuer: "Infosys Springboard",
      date: "July 2026",
      url: "https://drive.google.com/file/d/1mJ4NaDviRUVRjhBf9oY2DWSIDlsm9T2T/view?usp=sharing",
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "April 2026",
      url: "https://drive.google.com/file/d/1kpz-Tdo5M5uFxM3ZZHg1V7sDao8CdV0m/view?usp=sharing",
    },
    {
      title: "Completed Programming Using C++",
      issuer: "Infosys Springboard",
      date: "September 2025",
      url: "https://drive.google.com/file/d/18MWaH__Ab8ZebiZfPF4LCaPcFNJT_Rbk/view?usp=sharing",
    },
  ],
};

// ===== ACHIEVEMENTS =====
// value = the big text, title = the line under it.
// url is optional (e.g. your LeetCode or HackerRank profile).
export const achievements = {
  heading: "Achievements",
  items: [
    {
      value: "70+",
      title: "LeetCode problems solved",
      description: "Solved 70+ problems on LeetCode and earned multiple problem-solving badges.",
      date: "August 2026",
      url: "",
    },
    {
      value: "5-star",
      title: "HackerRank badges",
      description: "Earned 5-star badges on HackerRank in C++, Java, and Python.",
      date: "May 2026",
      url: "",
    },
  ],
};

// ===== EDUCATION =====
// Newest first. "current: true" marks the one you are studying now.
export const education = {
  heading: "Education",
  items: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "Lovely Professional University",
      location: "Phagwara, Punjab, India",
      period: "July 2024 – Present",
      scoreLabel: "CGPA",
      score: personalInfo.cgpa, // comes from PERSONAL INFORMATION above
      current: true,
    },
    {
      degree: "Intermediate",
      school: "Vikash Residential School",
      location: "Bhubaneswar, Odisha, India",
      period: "July 2023 – April 2024",
      scoreLabel: "Percentage",
      score: "85%",
    },
    {
      degree: "Matriculation",
      school: "Ramakrishna Vivekananda International English School",
      location: "Baharagora, Jharkhand, India",
      period: "March 2021 – April 2022",
      scoreLabel: "Percentage",
      score: "90%",
    },
  ],
};

// ===== CONTACT =====
export const contact = {
  heading: "Let's talk",
  intro:
    "I'm open to internship and full-stack development opportunities. Send a message here or reach me directly.",

  // HOW THE FORM SENDS MESSAGES (no passwords or keys needed)
  //   "netlify" -> uses Netlify Forms. Works after you deploy on Netlify
  //                and turn on "Form detection" in the Netlify dashboard.
  //                Messages arrive in Netlify > Forms (and by email if
  //                you add a notification there).
  //   "mailto"  -> opens the visitor's email app with the message filled in.
  formMode: "netlify",
  formName: "contact", // must match the form name in index.html
};

// ===== FOOTER =====
export const footer = {
  bigText: personalInfo.firstName, // the huge word in the footer
  note: "Built with React and Vite",
};

const portfolioData = {
  personalInfo,
  socialLinks,
  navLinks,
  hero,
  about,
  skills,
  internship,
  projects,
  training,
  certifications,
  achievements,
  education,
  contact,
  footer,
};

export default portfolioData;
