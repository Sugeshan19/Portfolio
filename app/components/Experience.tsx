import Image from "next/image";
import ScrollPop from "./ScrollPop";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Senior Developer — Intecalic Web Service (IWS)",
    description: "Led development of scalable web applications with a strong focus on backend architecture, performance, and reliability.\n\nBuilt REST APIs, role-based access control, and optimized database structures to improve scalability and response times.\n\nWorked across deployment and maintenance to deliver stable, production-ready systems.\n\nTech Stack: Django, Python, PostgreSQL, MongoDB, Node.js, Express.js, React, Bootstrap, JavaScript, Docker, AWS/Vercel.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "Full Stack Developer Intern — Wipro",
    description: "Gained hands-on experience in full-stack development using the MERN stack, contributing to the development of scalable and responsive web applications.\n\nImplemented RESTful APIs, integrated frontend and backend systems, and optimized database queries to improve application performance.\n\nCollaborated within a team environment to design, develop, and deploy features, ensuring code quality and maintainability in production workflows.",
    icon: "/cards/card-1.png",
  },
  {
    id: 3,
    title: "React Developer Intern — Spark Solutions",
    description: "Built interactive and scalable frontend applications using React, emphasizing reusable components and maintainable code structures.\n\nIntegrated REST APIs and managed application state to ensure smooth data flow and consistent user experience across features.\n\nImproved frontend performance by optimizing rendering behavior and implementing efficient component design patterns.",
    icon: "/cards/card-2.png",
  },
  {
    id: 4,
    title: "Web Developer Intern — Rinex.in",
    description: "Built and optimized responsive web interfaces, ensuring consistent performance across devices and browsers.\n\nIntegrated frontend components with backend systems and implemented dynamic features to enhance user interaction.\n\nImproved page load performance and code maintainability through structured development practices and UI optimization techniques.",
    icon: "/cards/card-3.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card, index) => (
            <ScrollPop key={card.id} delay={index * 0.08}>
              <div className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4">
                <div className="mb-4 ">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 whitespace-pre-line">
                    {card.description}
                  </p>
                </div>
              </div>
            </ScrollPop>
          ))}
        </div>

        <div className="mt-20">
          <ScrollPop className="mb-12" delay={0.02}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-center">
              Achievements
            </h2>
          </ScrollPop>
          
          <ScrollPop className="mx-auto max-w-6xl" delay={0.04}>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 lg:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Image Section */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <Image
                  src="https://res.cloudinary.com/dtpl599ko/image/upload/v1776335476/10_qjkqc7.jpg"
                  alt="Frontend Fusion 2025"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>

              {/* Story Section */}
              <div className="space-y-4">
                <p className="text-purple-400 text-sm lg:text-base font-semibold uppercase tracking-wider">
                  💫 From Fear to Leadership 💫
                </p>
                
                <p className="text-white/90 text-lg lg:text-xl font-semibold italic">
                  "முயல் வெல்லும், ஆமைவும் வெல்லும், ஆனால் முயலாமை வெல்லாது."
                </p>
                
                <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                  The rabbit can win, the tortoise can win — but the one who doesn't try can never win.
                </p>

                <p className="text-white/75 text-sm lg:text-base leading-relaxed pt-2">
                  Frontend Fusion 2025 was my first-ever event, and I led our team of four through it. I was scared at first — of taking responsibility, speaking up, and failing. But with motivation from my friends and the belief that trying is the first step to success, I pushed beyond my comfort zone.
                </p>

                <p className="text-white/75 text-sm lg:text-base leading-relaxed">
                  Together, we conducted Frontend Fusion with 60 participants (40 internal + 20 external) and faced every challenge head-on.
                </p>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-purple-300 font-semibold text-base lg:text-lg">
                    🏆 Best Event of Drestin 2025
                  </p>
                  <p className="text-white/70 text-sm">
                    Recognized by the Department of Computer Science and Engineering
                  </p>
                </div>

                <p className="text-white/80 text-sm lg:text-base pt-4">
                  This experience taught me that confidence grows when you dare to try. Grateful to my team, mentors, and everyone who made this possible. 💪
                </p>
              </div>
            </div>
          </div>
          </ScrollPop>

          <ScrollPop className="mx-auto mt-8 max-w-6xl" delay={0.08}>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 lg:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              {/* Image Section */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black/30 order-2 lg:order-1">
                <Image
                  src="https://res.cloudinary.com/dtpl599ko/image/upload/v1776336163/ibm_3_vqrkdb.jpg"
                  alt="IBM Z Datathon 2025"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>

              {/* Story Section */}
              <div className="space-y-4 order-1 lg:order-2">
                <p className="text-purple-400 text-sm lg:text-base font-semibold uppercase tracking-wider">
                  🌟 Leading with Innovation 🌟
                </p>
                
                <p className="text-white/90 text-lg lg:text-xl font-semibold">
                  IBM Z Datathon 2025
                </p>

                <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                  I had the privilege of serving as Team Lead during the IBM Z Datathon on October 11-12, 2025. This event was an incredible opportunity to explore IBM Z technology, collaborate with brilliant minds, and apply data-driven solutions to real-world challenges.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-purple-300 font-semibold text-base mb-2">
                    🌾 AI-based Crop Recommendation System
                  </p>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Our team developed a system designed to enhance agricultural productivity by analyzing soil parameters and environmental data to suggest suitable crops, promoting sustainable and data-driven farming practices.
                  </p>
                </div>

                <p className="text-white/75 text-sm lg:text-base leading-relaxed">
                  As a team lead, I coordinated tasks, guided our problem-solving strategy, and ensured effective communication among team members. This experience strengthened my leadership, analytical, and decision-making skills while deepening my understanding of team dynamics and innovation under pressure.
                </p>

                <p className="text-white/80 text-sm lg:text-base pt-4">
                  Grateful to IBM, the mentors, organizing committee, and my team for their commitment and collaboration. 💪
                </p>
              </div>
            </div>
          </div>
          </ScrollPop>

          <ScrollPop className="mx-auto mt-8 max-w-6xl" delay={0.12}>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 lg:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                <Image
                  src="https://res.cloudinary.com/dtpl599ko/image/upload/v1776332878/nit_dnf5ly.png"
                  alt="RU Skilled Data Analytics Hackathon 2025"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>

              <div className="space-y-4">
                <p className="text-purple-400 text-sm lg:text-base font-semibold uppercase tracking-wider">
                  RU Skilled x Techgyan at NIT Trichy
                </p>

                <p className="text-white/90 text-lg lg:text-xl font-semibold">
                  1st Position - Data Analytics Workshop Hackathon
                </p>

                <p className="text-white/80 text-sm lg:text-base leading-relaxed">
                  Excited to share a proud milestone: I secured 1st position in the Data Analytics workshop hackathon organized by RU Skilled and Techgyan at NIT Trichy on 20 September 2025.
                </p>

                <p className="text-white/75 text-sm lg:text-base leading-relaxed">
                  This experience strengthened my analytical thinking, teamwork, and problem-solving skills, and motivated me to keep exploring Data Analytics and AI.
                </p>
              </div>
            </div>
          </div>
          </ScrollPop>
        </div>
      </div>
    </section>
  );
}

