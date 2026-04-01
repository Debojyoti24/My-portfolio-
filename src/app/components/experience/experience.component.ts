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
      position: "Java Developer",
      company: "CodeAlpha",
      companyUrl: "https://www.codealpha.tech/",
      startDate: "July 2025",
      endDate: "Present",
      achievements: [
        "Designed and implemented a robust backend webhook for in-app purchases for Android, improving the reliability of payment notification handling for both subscriptions and single product purchases, resulting in a 20% decrease in transaction disputes",
        "Built and optimized RESTful APIs to support efficient CRUD operations and high-volume data processing, significantly boosting system responsiveness and data accessibility",
        "Integrated an AI-powered summarization and copilot API into Texpro, while crafting an intuitive UI to improve user interaction and streamline productivity.",
        "Crafted and executed data migration scripts in SQL Server and MongoDB to ensure seamless, accurate, and efficient data transitions across systems.",
        "Enhanced Texpro’s capabilities by introducing new features at both the UI and API layers, improving user engagement and expanding application functionality",
      ],
    },
    {
      position: "Software Engineer",
      company: "Maruti Tech Labs",
      companyUrl: "https://www.marutitech.com",
      startDate: "December 2021",
      endDate: "December 2023",
      achievements: [
        "Significantly contributed to the project’s success by single-handedly managing the entire project life cycle, including development, deployment, database management, and client communication",
        "Crafted a comprehensive project solution by harnessing Angular, .NET Core, and SQL Server, resulting in a 40% increase in project efficiency",
        "Established a streamlined workflow for Continuous Integration and Continuous Deployment (CI/CD), ensuring efficient and error-free updates to the platform.",
        "Implemented a modular architecture, effectively separating the tightly coupled front and back-end components, enhancing maintainability and flexibility.",
        "Upgraded the legacy .NET Framework 4.8 to the latest .NET Core 7, revolutionising the platform’s capabilities with modern technology.",
        "Boosted performance by migrating 100% of client-side operations from the IIS server to Firebase.",
      ],
    },
  ];
}
