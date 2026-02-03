"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        title: "AntonX",
        role: "Frontend Developer",
        tech: ["React.js", "Next.js", "Strapi CMS", "REST APIs", "Tailwind CSS"],
        description: "Built a fully dynamic, CMS-driven website where all content is managed from Strapi.",
        contributions: [
            "Integrated Strapi APIs for dynamic content",
            "Created reusable components for scalable UI",
            "Implemented dynamic routing for pages/blogs",
            "Optimized performance & reduced layout shifts"
        ],
        impact: [
            "Non-technical team manages content",
            "Faster loading & SEO-friendly",
            "Fully scalable system"
        ],
        image: "https://blocksultra.com/cdn/shop/files/blocksultra-multi-device-website-psd-mockup-10_webp.webp?v=1766769238&width=1946"
    },
    {
        title: "Custom Restaurant Platform",
        role: "Frontend Developer",
        tech: ["Next.js", "Tailwind CSS", "APIs", "Dynamic Fonts", "CMS"],
        description: "A restaurant ordering platform with fully dynamic pages and real-time content.",
        contributions: [
            "Built dynamic menu & restaurant pages",
            "Integrated APIs for live data",
            "Implemented dynamic fonts from backend",
            "Created reusable card systems"
        ],
        impact: [
            "Fully dynamic restaurant setup",
            "Easy content updates",
            "Mobile-first user experience"
        ],
        image: "https://cdn.dribbble.com/userupload/44350360/file/c7d44720be19d5d8cacf1414f4c7d449.jpg?format=webp&resize=400x300&vertical=center"
    },
    {
        title: "Web Orders – Get Halal Now",
        role: "Frontend Developer",
        tech: ["React.js", "APIs", "Bootstrap"],
        description: "Frontend for an online ordering system with real-time order management.",
        contributions: [
            "API integration for order flow",
            "Built interactive order components",
            "Implemented status updates & UI states",
            "Designed responsive layouts"
        ],
        impact: [
            "Smooth ordering experience",
            "Real-time data handling",
            "Mobile responsive"
        ],
        image: "https://www.shopurfood.com/images/categorize-items.webp"
    },
    {
        title: "HMC Web Application",
        role: "React Frontend Developer",
        tech: ["React.js", "UI Components", "Responsive Design"],
        description: "Worked on building responsive UI components and interactive features.",
        contributions: [
            "Component-based architecture",
            "Reusable cards & layouts",
            "Responsive design",
            "Dynamic data rendering"
        ],
        impact: [
            "Consistent UI across modules",
            "Improved code reusability",
            "Seamless user interactions"
        ],
        image: "https://coreui.io/images/templates/coreui_free_light_dark_hu_d65b24ef959f0d81.webp"
    },
    {
        title: "Pakistan Startup Connect",
        role: "Frontend (Design Implementation)",
        tech: ["HTML", "CSS", "Bootstrap"],
        description: "Converted design into pixel-perfect responsive UI.",
        contributions: [
            "Responsive layout",
            "Clean structure",
            "Cross-browser compatibility"
        ],
        impact: [
            "Identical to design specs",
            "Perfect mobile performance",
            "Zero CSS conflicts"
        ],
        image: "https://s3-alpha.figma.com/hub/file/2225550206251313923/ab5b6069-d070-4e86-81d4-17adff43b79b-cover.png"
    },
    {
        title: "Ewanc",
        role: "Frontend (Design Implementation)",
        tech: ["HTML", "CSS", "Bootstrap"],
        description: "Focused on clean and professional design implementation.",
        contributions: [
            "Design-to-code conversion",
            "Animation implementation",
            "Responsive optimization"
        ],
        impact: [
            "Premium visual feel",
            "Optimized for all screens"
        ],
        image: "https://cdn.prod.website-files.com/64da807a9aa000087e97b92d/64edcf7ac3a2c3e61e88126e_63cea48af4a5c31a55c9fb0d_thumbnail.jpeg"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Featured Projects</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-lg font-medium">
                        Professional experience building production-level applications with a focus on impact and scalability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
                        >
                            {/* Image Header */}
                            <div className="relative h-64 w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full text-xs font-bold text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900">
                                    {project.role}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-base leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider mb-3">Key Contributions</h4>
                                    <ul className="space-y-2">
                                        {project.contributions.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                                                <CheckCircle2 className="mt-1 flex-shrink-0 text-indigo-500" size={14} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-6">
                                    <h4 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider mb-3">Impact</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.impact.map((item, i) => (
                                            <span key={i} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-lg font-bold">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                                    <div className="flex flex-wrap gap-2 max-w-[60%]">
                                        {project.tech.slice(0, 3).map(tag => (
                                            <span key={tag} className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Link href="#" className="p-2 text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                            <Github size={20} />
                                        </Link>
                                        <Link href="#" className="p-2 text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                            <ExternalLink size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
