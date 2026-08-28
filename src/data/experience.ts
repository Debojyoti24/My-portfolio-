export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  type: string;
  stack: string[];
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Confidential",
    role: "Research Analyst",
    start: "2025",
    end: "Present",
    location: "Remote",
    type: "Part-time",
    stack: ["Python", "Machine Learning", "Computer Vision", "OpenCV", "Deep Learning"],
    points: [
      "Conducting research and analysis for an AI-powered driver drowsiness detection system using computer vision and machine learning techniques.",
      "Analyzing facial and eye-related patterns to identify indicators of driver fatigue and drowsiness in real time.",
      "Evaluating machine learning and computer vision approaches to improve the accuracy, reliability, and real-time performance of the detection system.",
      "Supporting dataset analysis, model evaluation, experimentation, and documentation throughout the research and development process.",
    ],
  },
  {
    id: "exp-2",
    company: "AI Collective Private Limited",
    role: "Full-Stack Developer & AI Automation Engineer",
    start: "2026",
    end: "Present",
    location: "Remote",
    type: "Freelance",
    stack: ["React.js", "TypeScript", "Flask", "Gemini AI", "Meta AI Developer Tools", "Apify", "Automation"],
    points: [
      "Handled the end-to-end development and automation of a UGC Outreach Engine, covering full-stack development, AI integration, creator discovery, and campaign operations.",
      "Built AI-powered workflows to analyze creator profiles, generate personalized outreach messages, verify creators, and support brand-safety and campaign qualification.",
      "Leveraged Meta AI Developer Tools and automated scraping workflows to identify and shortlist relevant creators and candidates for brand promotion campaigns for a well-established company.",
      "Developed automated outreach and campaign-management workflows across social platforms, reducing manual effort in creator discovery, qualification, and communication.",
    ],
  },
  {
    id: "exp-2",
    company: "Career Break & Freelance Development",
    role: "Freelance Software Developer",
    start: "2021",
    end: "2023",
    location: "Remote",
    type: "Freelance",
    stack: ["Full-Stack Development", "AI", "Web Technologies"],

    points: [
      "Took a planned career break to complete academic commitments, as the college program did not permit pursuing full-time professional employment alongside the course.",
      "Completed 6+ freelance software development projects, gaining hands-on experience in full-stack development, client communication, project delivery, and problem-solving.",
      "Developed a strong interest in freelancing, AI, and emerging technologies through independent projects and continuous self-learning.",
      "Worked directly with clients to understand requirements, develop solutions, implement features, and deliver projects within agreed timelines.",
    ],
  }
  ,

  {
    id: "exp-3",
    company: "QBayz Software",
    role: "Software Engineer",
    start: "2022",
    end: "2024",
    location: "Remote",
    type: "Full-time",
    stack: ["React", "Redux", "Python", "Django"],
    points: [
      "Worked as a Test Engineer for a Learning Management System (LMS), ensuring application quality, reliability, and smooth user experience through functional and integration testing.",

      "Managed and maintained the complete backend infrastructure of the LMS, including APIs, database operations, authentication, and core backend services.",

      "Supported a learning platform serving 30+ schools while designing the system to handle 1,000+ concurrent users efficiently.",

      "Collaborated with developers and stakeholders to identify bugs, improve system performance, and ensure reliable end-to-end functionality.",

      "Implemented testing and debugging workflows to improve application stability and reduce production issues."
    ],
  },
  // {
  //   id: "exp-4",
  //   company: "Brightloop",
  //   role: "Software Engineer Intern",
  //   start: "2019",
  //   end: "2019",
  //   location: "Seattle, WA",
  //   type: "Internship",
  //   stack: ["JavaScript", "Flask"],
  //   points: [
  //     "Built an internal analytics dashboard used daily by the growth team.",
  //     "Converted a legacy jQuery admin panel to React, reducing bug reports by 60%.",
  //   ],
  // },
];
