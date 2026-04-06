import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { UrlNormalizationGuard } from "./guards/url-normalization.guard";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: "Home",
      description:
        "Debojyoti Bhattacherjee - Full-Stack Developer specializing in React, java, and modern web technologies. Explore my portfolio, experience, and projects.",
      keywords: "Debojyoti Bhattacherjee, Full-Stack Developer, Android Developer, Portfolio, Web Development",
    },
  },
  {
    path: "about",
    component: AboutComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: "About Me",
      description:
        "Learn about Debojyoti Bhattacherjee, a passionate Full-Stack Developer with knowledge in React, Java, and modern web technologies.",
      keywords:
        "About Debojyoti Bhattacherjee, Full-Stack Developer Background, React Developer Profile, Java Developer Experience",
    },
  },
  {
    path: "experience",
    component: ExperienceComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: "Experience",
      description:
        "Explore Debojyoti Bhattacherjee's professional experience as a Full-Stack Developer. View detailed work history, technical skills, and career achievements.",
      keywords:
        "Debojyoti Bhattacherjee Experience, Full-Stack Developer Career, React Developer Jobs, Java Developer Experience, Web Development Skills",
    },
  },
  {
    path: "projects",
    component: ProjectsComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: "Projects",
      description:
        "Explore Debojyoti Bhattacherjee's portfolio of innovative web applications and software projects. View detailed case studies of React, Java, and full-stack development work.",
      keywords:
        "Debojyoti Bhattacherjee Projects, Full-Stack Developer Portfolio, React Projects, Java Applications, Web Development Portfolio",
    },
  },
  {
    path: "contact",
    component: ContactComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: "Contact",
      description:
        "Get in touch with Debojyoti Bhattacherjee for collaboration opportunities, project inquiries, or professional discussions.",
      keywords:
        "Contact Debojyoti Bhattacherjee, Hire Full-Stack Developer, React Developer Contact, Java Developer Hire, Web Development Services",
    },
  },
  {
    path: "resume",
    component: ResumeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: "Resume",
      description:
        "Download or view Debojyoti Bhattacherjee's professional resume. Comprehensive overview of skills, experience, and achievements as a Full-Stack Developer.",
      keywords:
        "Debojyoti Bhattacherjee Resume, Full-Stack Developer CV, React Developer Resume, Java Developer CV, Web Developer Resume Download",
    },
  },
  // Legacy hash-based URL redirects
  {
    path: "about-me",
    redirectTo: "/about",
    pathMatch: "full",
  },
  {
    path: "skills",
    redirectTo: "/experience",
    pathMatch: "full",
  },
  {
    path: "testimonials",
    redirectTo: "/experience",
    pathMatch: "full",
  },
  { path: "**", redirectTo: "" }, // Wildcard route for 404 pages
];
