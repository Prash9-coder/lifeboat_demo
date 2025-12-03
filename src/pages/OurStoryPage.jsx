import { motion } from 'framer-motion'
import { FaRocket, FaUsers, FaTrophy, FaGlobe, FaHeart, FaLightbulb } from 'react-icons/fa'

const OurStoryPage = () => {
    const timeline = [
        {
            year: '2020',
            title: 'The Beginning',
            description: 'Lifeboat Technologies was founded in Hanamkonda with a vision to provide world-class software solutions.',
            icon: <FaRocket />,
            color: '#3234a2'
        },
        {
            year: '2021',
            title: 'First Major Client',
            description: 'Secured our first enterprise client and delivered a successful e-commerce platform.',
            icon: <FaTrophy />,
            color: '#32a162'
        },
        {
            year: '2022',
            title: 'Team Expansion',
            description: 'Grew to 25+ team members and opened our first dedicated office space.',
            icon: <FaUsers />,
            color: '#3234a2'
        },
        {
            year: '2023',
            title: 'Going Global',
            description: 'Started serving international clients across 10+ countries despite pandemic challenges.',
            icon: <FaGlobe />,
            color: '#32a162'
        },
        {
            year: '2024',
            title: 'Innovation Hub',
            description: 'Launched AI/ML division and became a certified AWS partner.',
            icon: <FaLightbulb />,
            color: '#3234a2'
        },
        {
            year: '2025',
            title: 'Present Day',
            description: '50+ team members, 500+ projects, serving clients in 15+ countries with cutting-edge solutions.',
            icon: <FaHeart />,
            color: '#32a162'
        },
    ]

    const values = [
        {
            title: 'Innovation First',
            description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
            icon: '💡'
        },
        {
            title: 'Client Success',
            description: 'Your success is our success. We go above and beyond to ensure project excellence.',
            icon: '🎯'
        },
        {
            title: 'Integrity',
            description: 'Honesty and transparency in everything we do. No hidden costs, no surprises.',
            icon: '🤝'
        },
        {
            title: 'Continuous Learning',
            description: 'Our team stays updated with latest technologies through continuous learning.',
            icon: '📚'
        },
    ]

    const founders = [
        {
            name: 'Ranjith Padidala',
            role: 'CEO & Founder',
            image: '/assets/ranjith.jpg',
            quote: 'Our mission is to empower businesses with technology that makes a real difference.'
        }
    ]

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-24 relative overflow-hidden bg-white">
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3234a2] rounded-full opacity-5 blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#32a162] rounded-full opacity-5 blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-[#3234a2]/10 text-[#3234a2] border border-[#3234a2]/20">
                            📖 Our Story
                        </span>

                        <h1 className="text-5xl md:text-7xl font-black mb-6 text-gray-900 font-display">
                            From Vision to <span className="gradient-text">Reality</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                            A decade-long journey of innovation, growth, and unwavering commitment to excellence
                        </p>
                    </motion.div>

                    {/* Founder Quote */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white text-center">
                            <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white/30">
                                <img
                                    src="/assets/ranjith.jpg"
                                    alt="Ranjith Padidala"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.src = 'https://ui-avatars.com/api/?name=Ranjith+Padidala&size=200&background=ffffff&color=3234a2'
                                    }}
                                />
                            </div>
                            <p className="text-2xl md:text-3xl font-medium italic mb-6">
                                "Our mission is to empower businesses with technology that makes a real difference. Every line of code we write is aimed at solving real problems."
                            </p>
                            <p className="text-lg font-bold">Ranjith Padidala</p>
                            <p className="text-white/80">CEO & Founder</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                            Our <span className="gradient-text">Journey</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Key milestones that shaped who we are today
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#3234a2] to-[#32a162] hidden md:block" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                        <motion.div
                                            whileHover={{ y: -10 }}
                                            className="p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl hover:border-[#3234a2] transition-all duration-300"
                                        >
                                            <span
                                                className="inline-block px-4 py-2 rounded-full text-sm font-bold text-white mb-4"
                                                style={{ backgroundColor: item.color }}
                                            >
                                                {item.year}
                                            </span>
                                            <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </motion.div>
                                    </div>

                                    {/* Center Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl shadow-lg z-10"
                                        style={{ backgroundColor: item.color }}
                                    >
                                        {item.icon}
                                    </motion.div>

                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                            What We <span className="gradient-text">Believe In</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Core values that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#3234a2] hover:shadow-xl transition-all duration-300 text-center"
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-gradient-to-r from-[#3234a2] to-[#32a162]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        {[
                            { number: '10+', label: 'Years Experience' },
                            { number: '500+', label: 'Projects Completed' },
                            { number: '200+', label: 'Happy Clients' },
                            { number: '15+', label: 'Countries Served' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-5xl md:text-6xl font-black mb-2">{stat.number}</div>
                                <div className="text-lg text-white/80">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurStoryPage