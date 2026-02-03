"use client";

import { motion } from "framer-motion";

const skills = [
  // Core Languages
  "JavaScript",
  "TypeScript",
  "Java",
  "C++",

  // Frontend
  "React",
  "Next.js",

  // Backend
  "Node.js",
  "Laravel",
  "RESTful APIs",

  // Database
  "MySQL",
  "DB Schema Design",

  // Computer Science Fundamentals
  "Data Structures",
  "Algorithms",

  // Tools & DevOps
  "Git",
  "Docker",
  "Unit Testing",

  // Professional Skills
  "Problem Solving"
];

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Technical Skills</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        My tech stack is designed for performance, scalability, and developer experience.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center   gap-4 max-w-4xl mx-auto justify-center">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="px-6 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-zinc-700 dark:text-zinc-300 font-medium"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
