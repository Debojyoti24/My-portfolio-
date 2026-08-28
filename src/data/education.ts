export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  location: string;
  gpa?: string;
  rank?: string;
  details: string[];
}

export const education: EducationItem[] = [
  {
    id: "edu-1",
    school: "RCC Institute of Information Technology",
    degree: "M.C.A",
    field: "Computer Applications",
    start: "2024",
    end: "2026",
    location: "Kolkata, India",
    gpa: "8.70",
    rank: "WBJECA Rank - 789",
    details: [
      "AI, Machine Learning & Automation",
      "Distributed Systems & Machine Learning Infrastructure",
      "Advanced Computing & Software Engineering ",
      "Cloud Computing & Virtualization",
      "IoT & Embedded Systems"
    ],
  },
  {
    id: "edu-2",
    school: "Murshidabad College of Engineering and Technology",
    degree: "B.S.C",
    field: "Computer Science ",
    start: "2020",
    end: "2024",
    location: "Kolkata, India",
    gpa: "9.06/10",
    details: [
      "Learned to create complete end-to-end applications by integrating frontend and backend technologies.",
      "Learned to create distributed, modular, and high-performance software architectures.",
      "Learned to create scalable, maintainable, and reliable software systems.",
    ],
  },
  // {
  //   id: "edu-3",
  //   school: "freeCodeCamp / Self-Directed",
  //   degree: "Certification",
  //   field: "Full-Stack Web Development",
  //   start: "2013",
  //   end: "2014",
  //   location: "Online",
  //   details: [
  //     "Completed 300+ hours covering responsive design, JavaScript algorithms, and APIs.",
  //     "Built and shipped first production side projects.",
  //   ],
  // },
];
