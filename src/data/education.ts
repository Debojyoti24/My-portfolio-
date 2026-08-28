export interface EducationItem {
  id: string;
  school: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  location: string;
  gpa?: string;
  details: string[];
}

export const education: EducationItem[] = [
  {
    id: "edu-1",
    school: "University of California, Berkeley",
    degree: "M.S.",
    field: "Computer Science",
    start: "2018",
    end: "2020",
    location: "Berkeley, CA",
    gpa: "3.9 / 4.0",
    details: [
      "Focus on distributed systems and machine learning infrastructure.",
      "Teaching assistant for Data Structures & Algorithms (2 years).",
      "Published thesis on efficient caching strategies for edge networks.",
    ],
  },
  {
    id: "edu-2",
    school: "University of Washington",
    degree: "B.S.",
    field: "Computer Science",
    start: "2014",
    end: "2018",
    location: "Seattle, WA",
    gpa: "3.8 / 4.0",
    details: [
      "Graduated with honors, Dean's List all semesters.",
      "President of the Association for Computing Machinery (ACM) student chapter.",
      "Capstone project: real-time collaborative code editor.",
    ],
  },
  {
    id: "edu-3",
    school: "freeCodeCamp / Self-Directed",
    degree: "Certification",
    field: "Full-Stack Web Development",
    start: "2013",
    end: "2014",
    location: "Online",
    details: [
      "Completed 300+ hours covering responsive design, JavaScript algorithms, and APIs.",
      "Built and shipped first production side projects.",
    ],
  },
];
