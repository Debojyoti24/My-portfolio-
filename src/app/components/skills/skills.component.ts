import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Skill {
  name: string;
  logo: string;
  isInvertLogo: boolean;
  proficiency: "Expert" | "Intermediate" | "Beginner";
  experience: number;
}

@Component({
  selector: "app-skills",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./skills.component.html",
  styles: [
    `
      .skill-tag {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
      }
    `,
  ],
})
export class SkillsComponent {
  frontends = [
    { name: "React" },
    {
      name: "React Native",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "Tailwind CSS",
    },
    {
      name: "JavaScript",
    },
    // {
    //   name: "Angular Material",
    //   logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/angularmaterial/angularmaterial-original.svg",
    //   isInvertLogo: false,
    //   proficiency: "Intermediate",
    //   experience: 2,
    // },
    // {
    //   name: "Bootstrap",
    //   logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/bootstrap/bootstrap-original.svg",
    //   isInvertLogo: false,
    //   proficiency: "Intermediate",
    //   experience: 3,
    // },
  ];

  backends = [
    {
      name: "Java",
    },
    {
      name: "Spring Boot",
    },
    // {
    //   name: "Node.js",
    //   logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg",
    //   isInvertLogo: false,
    //   proficiency: "Intermediate",
    //   experience: 3,
    // },
    // {
    //   name: "Express.js",
    //   logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg",
    //   isInvertLogo: true,
    //   proficiency: "Intermediate",
    //   experience: 2,
    // },
    // {
    //   name: "Python",
    //   logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg",
    //   isInvertLogo: false,
    //   proficiency: "Intermediate",
    //   experience: 2,
    // },
    // {
    //   name: "Flask",
    //   logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/flask/flask-original.svg",
    //   isInvertLogo: true,
    //   proficiency: "Beginner",
    //   experience: 1,
    // },
    // {
    //   name: "Entity Framework",
    //   logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    //   isInvertLogo: false,
    //   proficiency: "Expert",
    //   experience: 4,
    // },
  ];

  databases = [
    // {
    //   name: "MS SQL",
    //   logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    //   isInvertLogo: false,
    //   proficiency: "Expert",
    //   experience: 4,
    // },
    // {
    //   name: "PostgreSQL",
    //   logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg",
    //   isInvertLogo: false,
    //   proficiency: "Intermediate",
    //   experience: 2,
    // },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg",
      isInvertLogo: false,
      proficiency: "Intermediate",
      experience: 2,
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg",
      isInvertLogo: false,
      proficiency: "Intermediate",
      experience: 2,
    },
  ];

  opss = [
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg",
      isInvertLogo: false,
      proficiency: "Expert",
      experience: 5,
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg",
      isInvertLogo: false,
      proficiency: "Intermediate",
      experience: 2,
    },
    {
      name: "GitHub",
    },
    // {
    //   name: "AWS",
    //   logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    //   isInvertLogo: false,
    //   proficiency: "Intermediate",
    //   experience: 2,
    // },
    {
      name: "Vercel",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vercel/vercel-original.svg",
      isInvertLogo: true,
      proficiency: "Expert",
      experience: 3,
    },
    {
      name: "Netlify",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/netlify/netlify-original.svg",
      isInvertLogo: false,
      proficiency: "Intermediate",
      experience: 2,
    },
    {
      name: "Railway",
      logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/railway/railway-original.svg",
      isInvertLogo: false,
      proficiency: "Intermediate",
      experience: 1,
    },
    // {
    //   name: "Nginx",
    //   logo: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nginx/nginx-original.svg",
    //   isInvertLogo: false,
    //   proficiency: "Beginner",
    //   experience: 1,
    // },
  ];
}
