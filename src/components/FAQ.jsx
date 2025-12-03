import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            category: 'General',
            icon: '🌟',
            questions: [
                {
                    question: 'What technologies do you specialize in?',
                    answer: 'We specialize in modern web and mobile technologies including React, Next.js, Node.js, Python, React Native, Flutter, AWS, Docker, Kubernetes, and AI/ML frameworks like TensorFlow and PyTorch.'
                },
                {
                    question: 'What industries do you serve?',
                    answer: 'We serve a diverse range of industries including FinTech, HealthTech, E-commerce, Education, Real Estate, Logistics, Entertainment, and more.'
                },
            ]
        },
        {
            category: 'Project Management',
            icon: '📋',
            questions: [
                {
                    question: 'How long does a typical project take?',
                    answer: 'Project timelines vary based on complexity and scope. A simple web application typically takes 4-8 weeks, while complex enterprise solutions may take 3-6 months.'
                },
                {
                    question: 'What is your development process?',
                    answer: 'We follow a comprehensive 6-phase process: Discovery & Research, Design & Prototyping, Development, Testing & QA, Launch & Deployment, and Support & Maintenance.'
                },
            ]
        },
        {
            category: 'Pricing & Support',
            icon: '💰',
            questions: [
                {
                    question: 'What are your pricing models?',
                    answer: 'We offer flexible pricing models: Fixed Price for well-defined projects, Time & Materials for evolving projects, Dedicated Team for long-term engagements, and Retainer for ongoing support.'
                },
                {
                    question: 'Do you provide post-launch support?',
                    answer: 'Yes! We offer comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and 24/7 technical support.'
                },
            ]
        },
    ]

    const toggleFAQ = (categoryIndex, questionIndex) => {
        const index = `${categoryIndex}-${questionIndex}`
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-24 relative overflow-hidden bg-gray-50">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3234a2] rounded-full opacity-5 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#32a162] rounded-full opacity-5 blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-[#3234a2]/10 text-[#3234a2] border border-[#3234a2]/20"
                    >
                        ❓ FAQ
                    </motion.span>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 font-display text-gray-900">
                        Frequently Asked <span className="gradient-text">Questions</span>
                    </h2>

                    <p className="text-xl max-w-2xl mx-auto text-gray-600">
                        Everything you need to know about our services and processes
                    </p>
                </motion.div>

                {/* FAQ Categories */}
                <div className="space-y-8">
                    {faqs.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">{category.icon}</span>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {category.category}
                                </h3>
                            </div>

                            {/* Questions */}
                            <div className="space-y-4">
                                {category.questions.map((faq, questionIndex) => {
                                    const index = `${categoryIndex}-${questionIndex}`
                                    const isOpen = openIndex === index

                                    return (
                                        <motion.div
                                            key={questionIndex}
                                            className={`rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${isOpen ? 'border-[#3234a2]' : 'border-transparent'}`}
                                        >
                                            <motion.button
                                                onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                                                className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors group"
                                                whileHover={{ x: 5 }}
                                            >
                                                <div className="flex items-start gap-4 flex-1">
                                                    <motion.div
                                                        animate={{ rotate: isOpen ? 360 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className={`flex-shrink-0 mt-1 ${isOpen ? 'text-[#3234a2]' : 'text-gray-400'}`}
                                                    >
                                                        <FaQuestionCircle className="text-xl" />
                                                    </motion.div>
                                                    <span className={`text-lg font-bold text-gray-900 group-hover:text-[#3234a2] transition-colors`}>
                                                        {faq.question}
                                                    </span>
                                                </div>

                                                <motion.div
                                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${isOpen
                                                        ? 'bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white'
                                                        : 'bg-gray-100 text-gray-600'
                                                        } group-hover:scale-110 transition-all`}
                                                >
                                                    {isOpen ? <FaMinus /> : <FaPlus />}
                                                </motion.div>
                                            </motion.button>

                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <motion.div
                                                            initial={{ y: -20 }}
                                                            animate={{ y: 0 }}
                                                            exit={{ y: -20 }}
                                                            className="px-6 pb-6 pl-20 text-gray-600 leading-relaxed"
                                                        >
                                                            {faq.answer}
                                                        </motion.div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Still Have Questions CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 rounded-2xl text-center bg-gradient-to-br from-[#3234a2]/5 to-[#32a162]/5 border border-[#3234a2]/20"
                >
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-5xl mb-4"
                    >
                        💡
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        Still Have Questions?
                    </h3>
                    <p className="mb-6 text-gray-600">
                        Our team is here to help. Get in touch and we'll answer all your queries.
                    </p>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white rounded-xl font-bold shadow-lg"
                        >
                            Contact Us →
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default FAQ