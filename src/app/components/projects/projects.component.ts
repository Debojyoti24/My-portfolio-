import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

interface Project {
  title: string;
  description: string[];
  techStack: string[];
  image: string;
  aosImage: string;
  projectLink: string | null;
}

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./projects.component.html",
})
export class ProjectsComponent {
  showAllProjects = false;

  // Initially show only 2 projects
  initialProjectsCount = 2;

  // Projects to display
  get displayedProjects() {
    return this.showAllProjects ? this.projects : this.projects.slice(0, this.initialProjectsCount);
  }

  // Toggle Show More / Show Less
  toggleProjects() {
    this.showAllProjects = !this.showAllProjects;
  }

  // Open project link or show alert
  openProject(project: Project) {
    if (project.projectLink) {
      window.open(project.projectLink, "_blank");
    } else {
      alert("This project has been pushed to GitHub, but the live deployment link is not ready yet.");
    }
  }

  projects: Project[] = [
    {
      title: "Cre8tor - AI-Powered Content Creation Platform",
      description: [
        "Built a comprehensive content management platform enabling creators to manage posts, engage with audiences, and track performance through integrated analytics.",
        "Designed a scalable and robust system with features like post management, secure user authentication, and efficient data handling for seamless content creation workflows.",
      ],
      techStack: ["React.js", "Convex", "Clerk Authentication", "Imagekit", "Tailwind CSS"],
      image: "/assets/cre8tor.png",
      aosImage: "fade-right",
      projectLink: "https://creatrify.vercel.app/",
    },
    {
      title: "PIXXEL - AI-Powered Photo Editing Platform",
      description: [
        "Developed PIXXEL, an AI-powered photo editing platform that enables users to enhance and transform images using AI-driven editing tools. Integrated a robust canvas editor with Fabric.js for precise image manipulation, drag-and-drop uploads for seamless file handling, and real-time collaboration features.",
        "Designed and implemented a secure, scalable, and user-friendly system with Clerk authentication, project CRUD functionality, subscription/plan management, responsive design, cross-platform browser compatibility, and theme customization.",
      ],
      techStack: ["React.js", "Spring Boot", "MongoDB", "Clerk Authentication", "Cloudinary", "Docker"],
      image: "/assets/pixxel.png",
      aosImage: "fade-left",
      projectLink: "https://ai-image-editing-web-app.vercel.app/",
    },
    {
      title: "Invoice Generator - Digital billing & payment Solution ",
      description: [
        "Built a full-stack invoice management platform with dynamic invoice creation, real-time preview, and PDF export, supporting multiple currencies, tax configurations, and customizable templates; implemented Clerk-based authentication with role-based access for admin and clients.",
        "Developed a Spring Boot backend with JWT-secured APIs, MongoDB for efficient data storage and retrieval, and Cloudinary for asset management; containerized the entire application using Docker for scalable and seamless deployment.",
      ],
      techStack: ["React.js", "Tailwind CSS", "Spring Boot", "Clerk Authentication", "Razorpay", "Docker"],
      image: "/assets/Invoice generator.jpg",
      aosImage: "fade-right",
      projectLink: "https://invoice-generate-r.netlify.app/",
    },
    {
      title: "Cloud Share - Fullstack File Sharing Application",
      description: [
        "Developed a full-stack file manager web app with upload/download, in-browser previews, and secure shareable links featuring fine-grained access control, expiry management, and download analytics; implemented Clerk-based authentication with role-based routing and a responsive UI using Tailwind CSS and reusable hooks. ",
        "Designed a robust Spring Boot backend with RESTful APIs for file metadata, storage orchestration, and quota enforcement; integrated Razorpay for subscription-based upgrades with webhook handling, and containerized the entire stack using Docker Compose for streamlined deployment.",
      ],
      techStack: ["React Native", "Expo", "React Navigation", "Clerk Auth", "PostgreSQL (Neon)"],
      image: "/assets/Cloud-Share.png",
      aosImage: "fade-left",
      projectLink: "https://cloudshare0.netlify.app/dashboard",
    },
  ];
}
