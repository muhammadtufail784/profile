"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">About Me</h2>
                    <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                        I am an <span className="text-zinc-900 dark:text-zinc-200 font-semibold">Associate Software Engineer</span> with a strong foundation in <span className="text-zinc-900 dark:text-zinc-200 font-semibold">Java</span>, <span className="text-zinc-900 dark:text-zinc-200 font-semibold">TypeScript</span>, and modern web technologies.
                        I specialize in building scalable applications, focusing on robust <span className="text-zinc-900 dark:text-zinc-200 font-semibold">DB Schema Design</span> and efficient API architectures.
                        With experience across the full stack, I am passionate about solving complex problems and delivering high-quality, performant software solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
