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
      image: "/assets/Cloud Share.png",
      aosImage: "fade-right",
    },
    {
      title: "Invoice Generator - Digital billing & payment Solution ",
      description: [
        "Built a full-stack invoice management platform with dynamic invoice creation, real-time preview, and PDF export, supporting multiple currencies, tax configurations, and customizable templates; implemented Clerk-based authentication with role-based access for admin and clients.",
        "Developed a Spring Boot backend with JWT-secured APIs, MongoDB for efficient data storage and retrieval, and Cloudinary for asset management; containerized the entire application using Docker for scalable and seamless deployment.",
      ],
      techStack: ["React.js", "Spring Boot", "MongoDB", "Clerk Authentication", "Cloudinary", "Docker"],
      image: "/assets/Invoice generator.jpg",
      aosImage: "fade-left",
    },
    {
      title: "Cre8tor - AI-Powered Content Creation Platform",
      description: [
        "Built a comprehensive content management platform enabling creators to manage posts, engage with audiences, and track performance through integrated analytics.",
        "Designed a scalable and robust system with features like post management, secure user authentication, and efficient data handling for seamless content creation workflows.",
      ],
      techStack: ["React.js", "Convex", "Clerk Authentication", "Imagekit", "Tailwind CSS"],
      image: "/assets/Cre8tor.jpg",
      aosImage: "fade-right",
    },
    {
      title: "Money Manager — Personal Finance Tracking Application",
      description: [
        " Developed a cross-platform mobile application for personal finance management with real-time balance calculation and transaction tracking, improving usability and financial visibility",
        "Implemented secure authentication using Clerk with 6-digit OTP email verification, protected routes, and session management to ensure safe user access.",
        "IDesigned and managed the PostgreSQL (Neon) database, creating efficient schemas and integrating APIs for real-time data updates.",
        " Designed an intuitive user experience with income/expense tracking, transaction history, pull-to-refresh, and dynamic UI updates, delivering  a responsive app compatible with both iOS and Android platforms. ",
      ],
      techStack: ["React Native · Expo · React Navigation · Clerk Auth · PostgreSQL (Neon)"],
      image: "/assets/docu-query-ai.webp",
      aosImage: "fade-left",
    },
  ];
}
