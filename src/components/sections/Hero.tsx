"use client";

import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-50/50 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/3 translate-y-1/4 w-[400px] h-[400px] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                    </span>
                    Available for new projects
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6"
                >
                    Hi, I&apos;m <span className="text-indigo-600 dark:text-indigo-500">Muhammad Tufail</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl font-medium text-zinc-700 dark:text-zinc-300 mb-6 max-w-2xl"
                >
                    Associate Software Engineer | Full Stack Developer
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl leading-relaxed"
                >
                    Building fast, scalable, and user-focused web applications with modern technologies.
                    Focused on creating clean, accessible, and performant digital experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link
                        href="#projects"
                        className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all flex items-center justify-center gap-2 group"
                    >
                        View Projects
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </Link>

                    <Link
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-200 font-semibold rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                {/* Social Proof / Tech Stack teaser (Optional, keeping it clean for now or adding small icons below) */}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 flex items-center gap-6 text-zinc-400"
                >
                    <Link href="https://github.com/muhammadtufail784">
                        <Github className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer" size={24} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/muhammad-tufail-583a4b253/">
                        <Linkedin className="hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer" size={24} />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
