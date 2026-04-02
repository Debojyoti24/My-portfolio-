import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./projects.component.html",
})
export class ProjectsComponent {
  projects = [
    {
      title: "Cloud Share - Fullstack File Sharing Application",
      description: [
        "Developed a full-stack file manager web app with upload/download, in-browser previews, and secure shareable links featuring fine-grained access control, expiry management, and download analytics; implemented Clerk-based authentication with role-based routing and a responsive UI using Tailwind CSS and reusable hooks. ",
        "Designed a robust Spring Boot backend with RESTful APIs for file metadata, storage orchestration, and quota enforcement; integrated Razorpay for subscription-based upgrades with webhook handling, and containerized the entire stack using Docker Compose for streamlined deployment.",
      ],
      techStack: ["React.js", "Tailwind CSS", "Spring Boot", "Clerk Authentication", "Razorpay", "Dpocker"],
      image: "/assets/media-management-platform.webp",
      aosImage: "fade-right",
    },
    {
      title: "Smile Analysis Web Application",
      description: [
        "Developed and deployed a smile detection application for elderly residents in Japanese old age homes using computer vision and machine learning algorithms.",
        "Designed and implemented a user-friendly interface using Angular with Flask backend to analyze smiles in real-time.",
      ],
      techStack: ["Angular", "Python", "SQL Server", "AWS"],
      image: "/assets/smile-project.webp",
      aosImage: "fade-left",
    },
    {
      title: "AI Receptionist",
      description: [
        "The project involves the implementation of a receptionist system for tourists and hotel guests, utilizing a multilingual AI avatar.",
        "The system provides assistance and information to guests in multiple languages, enhancing their overall experience while streamlining hotel operations.",
      ],
      techStack: ["Node.js", "Python", "OpenAI API", "Nginx"],
      image: "/assets/ai-receptionist.webp",
      aosImage: "fade-right",
    },
    {
      title: "DocuQuery AI",
      description: [
        "Developed an AI-powered document query system allowing users to upload PDFs and ask questions based on the document content.",
        "Designed and integrated an Angular-based frontend with a Flask backend for seamless document processing.",
        "Implemented role-based access control, ensuring only authorized users can manage documents.",
      ],
      techStack: ["Angular", "Tailwind CSS", "Flask (Python)", "MongoDB", "AWS"],
      image: "/assets/docu-query-ai.webp",
      aosImage: "fade-left",
    },
  ];
}
