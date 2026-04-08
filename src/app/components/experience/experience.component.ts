import { Component } from "@angular/core";

interface Experience {
  position: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

@Component({
  selector: "app-experience",
  standalone: true,
  templateUrl: "./experience.component.html",
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      position: "Android Developer Intern",
      company: "Qbays",
      companyUrl: "",
      startDate: "December 2025",
      endDate: "Present",
      achievements: [
        "Learning Management System (LMS): Architected and developed the full frontend of a production-grade LMS using React Native and Tailwind CSS, implementing features such as course browsing, student dashboards, and role-based interfaces for instructors and learners.",

        "Authentication System: Engineered a secure authentication flow including login, registration, and protected routes, fully integrated with backend services using JWT-based session management to ensure secure and scalable user access.",

        "API Integration & Component Design: Built and integrated 8+ reusable React components with RESTful APIs, standardizing asynchronous data-fetching patterns and minimizing page-load inconsistencies across the application.",

        "Collaborative Development Workflow: Maintained a clean and efficient Git/GitHub workflow in a distributed team environment, utilizing structured feature branching, pull requests, code reviews, and effective merge conflict resolution.",
      ],
    },
    {
      position: "Java Programing Internship",
      company: "CodeAlpha",
      companyUrl: "https://www.codealpha.tech/",
      startDate: "July 2025",
      endDate: "August 2025",
      achievements: [
        "Stock Trading Platform: Built a Java-based stock trading simulation platform featuring user registration, market data display, buy/sell operations, portfolio tracking, and dynamic price updates. Implemented using OOP principles with a modular structure and versioned using Git/GitHub.",

        "Student Grade Tracker: Developed a GUI-based application using Java Swing to manage and analyze student grades. Implemented features for adding student records, displaying data in tables, and generating real-time statistics such as average, highest, and lowest grades. Designed with modular methods for data handling and UI updates, ensuring smooth user interaction and efficient performance.",
      ],
    },
  ];
}
