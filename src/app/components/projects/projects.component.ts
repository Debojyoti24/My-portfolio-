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
      title: "Invoice Generator - Digital billing & payment Solution ",
      description: [
        "Built a full-stack invoice management platform with dynamic invoice creation, real-time preview, and PDF export, supporting multiple currencies, tax configurations, and customizable templates; implemented Clerk-based authentication with role-based access for admin and clients.",
        "Developed a Spring Boot backend with JWT-secured APIs, MongoDB for efficient data storage and retrieval, and Cloudinary for asset management; containerized the entire application using Docker for scalable and seamless deployment.",
      ],
      techStack: ["React.js", "Spring Boot", "MongoDB", "Clerk Authentication", "Cloudinary", "Docker"],
      image: "/assets/smile-project.webp",
      aosImage: "fade-left",
    },
    {
      title: "Cre8tor - AI-Powered Content Creation Platform",
      description: [
        "Built a comprehensive content management platform enabling creators to manage posts, engage with audiences, and track performance through integrated analytics.",
        "Designed a scalable and robust system with features like post management, secure user authentication, and efficient data handling for seamless content creation workflows.",
      ],
      techStack: ["React.js", "Convex", "Clerk Authentication", "Imagekit", "Tailwind CSS"],
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
