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
