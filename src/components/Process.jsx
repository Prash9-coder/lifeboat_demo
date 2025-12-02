import { motion } from 'framer-motion'
import { FaSearch, FaPaintBrush, FaCode, FaCheckCircle, FaRocket, FaLifeRing } from 'react-icons/fa'

const Process = ({ darkMode }) => {
    const steps = [
        {
            number: '01',
            title: 'Discovery & Research',
            description: 'We analyze your needs, research your market, and define comprehensive project scope',
            icon: <FaSearch className="text-4xl" />,
            color: 'from-purple-500 to-pink-500',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
            details: ['Requirements Analysis', 'Market Research', 'Competitor Analysis', 'Strategy Planning']
        },
        {
            number: '02',
            title: 'Design & Prototype',
            description: 'Creating beautiful, user-centric designs and interactive prototypes',
            icon: <FaPaintBrush className="text-4xl" />,
            color: 'from-blue-500 to-cyan-500',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
            details: ['UI/UX Design', 'Wireframing', 'Prototyping', 'User Testing']
        },
        {
            number: '03',
            title: 'Development',
            description: 'Building robust solutions with cutting-edge technology and best practices',
            icon: <FaCode className="text-4xl" />,
            color: 'from-green-500 to-teal-500',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
            details: ['Agile Development', 'Code Reviews', 'Version Control', 'Documentation']
        },
        {
            number: '04',
            title: 'Testing & QA',
            description: 'Rigorous quality assurance and testing to ensure flawless performance',
            icon: <FaCheckCircle className="text-4xl" />,
            color: 'from-yellow-500 to-orange-500',
            image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
            details: ['Unit Testing', 'Integration Testing', 'Performance Testing', 'Security Audit']
        },
        {
            number: '05',
            title: 'Launch & Deploy',
            description: 'Seamless deployment to production with zero downtime migration',
            icon: <FaRocket className="text-4xl" />,
            color: 'from-red-500 to-pink-500',
            image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
            details: ['Cloud Deployment', 'Database Migration', 'Performance Optimization', 'Go Live Support']
        },
        {
            number: '06',
            title: 'Support & Maintain',
            description: 'Ongoing maintenance, updates, and 24/7 technical support',
            icon: <FaLifeRing className="text-4xl" />,
            color: 'from-indigo-500 to-purple-500',
            image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
            details: ['Bug Fixes', 'Feature Updates', 'Performance Monitoring', '24/7 Support']
        }
    ]

    return (
        <section className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'
            }`}>
            {/* Animated Background */}
            <div className="absolute inset-0 mesh-gradient opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${darkMode
                            ? 'bg-purple-900/50 text-blue-300 border border-purple-500/30'
                            : 'bg-purple-100 text-blue-700 border border-purple-200'
                            }`}
                    >
                        ⚙️ How We Work
                    </motion.span>

                    <h2 className={`text-4xl md:text-6xl font-black mb-6 font-display ${darkMode ? 'text-white' : 'text-green-900'
                        }`}>
                        Our <span className="gradient-text">Process</span>
                    </h2>

                    <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        A proven methodology that delivers exceptional results every time
                    </p>
                </motion.div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group"
                        >
                            <motion.div
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`relative h-full p-8 rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-50'
                                    } border-2 border-transparent hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Number Badge */}
                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    className={`absolute -top-0 left-4 w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-xl shadow-lg z-10`}
                                >
                                    {step.number}
                                </motion.div>

                                <div className="relative z-10 mt-6">
                                    {/* Icon */}
                                    <motion.div
                                        className={`mb-4 text-transparent bg-gradient-to-r ${step.color} bg-clip-text`}
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                    >
                                        {step.icon}
                                    </motion.div>

                                    {/* Title */}
                                    <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {step.description}
                                    </p>

                                    {/* Details */}
                                    <div className="space-y-2">
                                        {step.details.map((detail, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.05 }}
                                                className="flex items-center space-x-2"
                                            >
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                                                <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                                                    {detail}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Gradient Border Animation */}
                                <motion.div
                                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                                    animate={{
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Process Flow Line (Desktop) */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -z-10">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20"
                        style={{ transformOrigin: 'left' }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Process