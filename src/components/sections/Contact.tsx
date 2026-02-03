"use client";

import { motion } from "framer-motion";
import { Mail, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Get in Touch</h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Have a project in mind or just want to say hi? Fill out the form below.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto bg-white dark:bg-black p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
                >
                    {sent ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">Message Sent!</h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-6">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                            <button onClick={() => setSent(false)} className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                {loading ? <Loader2 className="animate-spin" size={20} /> : "Send Message"}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
