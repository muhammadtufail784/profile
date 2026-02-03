"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Smartphone } from "lucide-react";

const services = [
    {
        title: "Software Development",
        description: "Designing and implementing robust, scalable applications using Java, TypeScript, and modern frameworks.",
        icon: Code2
    },
    {
        title: "DB Schema Design",
        description: "Architecting efficient and secure database structures for high-performance data management.",
        icon: Database
    },
    {
        title: "System Integration",
        description: "Seamlessly connecting distributed systems and third-party services via RESTful APIs.",
        icon: Layout
    },
    {
        title: "Performance & Scaling",
        description: "Optimizing application logic and infrastructure for maximum efficiency and growth.",
        icon: Smartphone
    }
];

export default function Services() {
    return (
        <section id="services" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">What I Do</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                        I help businesses build scalable web solutions that engage users and drive growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl hover:bg-white dark:hover:bg-zinc-800 transition-colors border border-transparent hover:border-zinc-200 dark:hover:border-zinc-700"
                        >
                            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-4">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
