import ScrollPop from "./ScrollPop";

export default function About(): React.JSX.Element {
  const coreCapabilities = [
    {
      title: "Full-Stack Engineering",
      description:
        "Develop end-to-end web applications using Django, MERN, and modern frontend frameworks with scalable architecture.",
    },
    {
      title: "Backend Systems & API Design",
      description:
        "Build secure REST APIs, implement authentication systems, and integrate third-party services like payment gateways.",
    },
    {
      title: "Frontend Architecture",
      description:
        "Create responsive, component-driven UI using React and Tailwind CSS with strong focus on usability and performance.",
    },
    {
      title: "Database & Performance Optimization",
      description:
        "Design efficient schemas, optimize queries, and ensure high-performance data handling.",
    },
    {
      title: "Deployment & Production Systems",
      description:
        "Manage deployments and hosting using platforms like Vercel and Hostinger with focus on reliability and uptime.",
    },
    {
      title: "AI / Machine Learning",
      description:
        "Apply machine learning and deep learning techniques to solve real-world problems, including image analysis and predictive modeling across tasks like classification, detection, and sequence modeling.",
    },
  ];

  const techStack = [
    { label: "Languages", value: "Python, JavaScript, Java, C" },
    { label: "Frontend", value: "React, HTML, CSS, Bootstrap, Tailwind CSS" },
    { label: "Backend", value: "Django, Node.js, Express, NestJS" },
    { label: "Database", value: "PostgreSQL, MongoDB" },
    { label: "Tools & Frameworks", value: "Python, NumPy, Pandas, TensorFlow, PyTorch, OpenCV" },
    { label: "Tools & Platforms", value: "Git, GitHub, Docker, Vercel, Hostinger, AWS" },
    { label: "Other Skills", value: "Mobile Responsiveness, Payment Gateway Integration" },
    { label: "Design", value: "Figma" },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollPop className="mb-14 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">Skills &amp; Capabilities</h2>
          <p className="text-lg text-white/80 max-w-4xl mx-auto mt-6">
            I design and build scalable, production-grade web applications with a strong focus on backend architecture,
            performance optimization, and seamless user experience.
          </p>
        </ScrollPop>

        <div className="mb-14">
          <ScrollPop className="mb-6" delay={0.05}>
            <h3 className="text-2xl font-semibold text-purple-300">Core Capabilities</h3>
          </ScrollPop>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {coreCapabilities.map((capability, index) => (
              <ScrollPop key={capability.title} delay={index * 0.06}>
                <article
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6"
                >
                  <h4 className="text-xl font-semibold text-white mb-3">{capability.title}</h4>
                  <p className="text-white/75 leading-relaxed">{capability.description}</p>
                </article>
              </ScrollPop>
            ))}
          </div>
        </div>

        <div>
          <ScrollPop className="mb-6" delay={0.08}>
            <h3 className="text-2xl font-semibold text-purple-300">Tech Stack</h3>
          </ScrollPop>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techStack.map((item, index) => (
              <ScrollPop key={item.label} delay={index * 0.05}>
                <div
                  className="rounded-xl border border-white/10 bg-black/20 px-5 py-4"
                >
                  <p className="text-sm uppercase tracking-[0.14em] text-purple-300 mb-2">{item.label}</p>
                  <p className="text-white/80">{item.value}</p>
                </div>
              </ScrollPop>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

