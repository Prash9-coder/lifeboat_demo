import { motion } from 'framer-motion'
import { FaCode, FaGlobe, FaMobile, FaRobot, FaCloud, FaShieldAlt } from 'react-icons/fa'

const Services = ({ darkMode }) => {
    const services = [
        {
            icon: <FaCode className="text-5xl" />,
            title: 'Software Development',
            description: 'Custom software solutions tailored to your business needs with modern technologies and best practices.',
            gradient: 'from-purple-500 to-pink-500',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
            features: ['Custom Solutions', 'Scalable Architecture', 'Clean Code']
        },
        {
            icon: <FaGlobe className="text-5xl" />,
            title: 'Web Applications',
            description: 'Responsive, fast, and scalable web applications that deliver exceptional user experiences.',
            gradient: 'from-blue-500 to-cyan-500',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
            features: ['Responsive Design', 'SEO Optimized', 'Fast Performance']
        },
        {
            icon: <FaMobile className="text-5xl" />,
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile applications for iOS and Android with stunning interfaces.',
            gradient: 'from-green-500 to-teal-500',
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
            features: ['iOS & Android', 'Native Feel', 'Offline Support']
        },
        {
            icon: <FaRobot className="text-5xl" />,
            title: 'AI & Automation',
            description: 'Intelligent automation solutions powered by machine learning and artificial intelligence.',
            gradient: 'from-yellow-500 to-orange-500',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
            features: ['Machine Learning', 'Process Automation', 'Predictive Analytics']
        },
        {
            icon: <FaCloud className="text-5xl" />,
            title: 'Cloud & DevOps',
            description: 'Scalable cloud infrastructure and DevOps practices for reliable and efficient operations.',
            gradient: 'from-indigo-500 to-purple-500',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
            features: ['AWS/Azure/GCP', 'CI/CD Pipeline', 'Infrastructure as Code']
        },
        {
            icon: <FaShieldAlt className="text-5xl" />,
            title: 'SMS & Watsapp Marketing',
            description: 'Comprehensive security solutions to protect your data and infrastructure from threats.',
            gradient: 'from-red-500 to-pink-500',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
            features: ['Digital Marketing', 'Social Media Marketing', '24/7 Monitoring']
        },
    ]

    return (
        <section
            id="services"
            className={`py-24 relative overflow-hidden ${darkMode ? 'bg-gray-950' : 'bg-gray-50'
                }`}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 100 }}
                        className="inline-block mb-4"
                    >
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode
                            ? 'bg-purple-900/50 text-purple-300 border border-purple-500/30'
                            : 'bg-purple-100 text-purple-700 border border-purple-200'
                            }`}>
                            🚀 What We Offer
                        </span>
                    </motion.div>

                    <h2 className={`text-4xl md:text-6xl font-black mb-6 font-display ${darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                        Our <span className="gradient-text">Services</span>
                    </h2>

                    <p className={`text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                        Comprehensive software solutions to accelerate your digital transformation
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className={`h-full rounded-2xl overflow-hidden ${darkMode
                                ? 'bg-gray-900 border border-gray-800'
                                : 'bg-white border border-gray-200'
                                } shadow-xl hover:shadow-2xl transition-all duration-500 card-3d relative`}>

                                {/* Image with Overlay */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute top-4 right-4 w-16 h-16 bg-white/20 backdrop-blur-xl rounded-xl flex items-center justify-center text-white shadow-lg"
                                    >
                                        {service.icon}
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {service.title}
                                    </h3>

                                    <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2 mb-4">
                                        {service.features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-center space-x-2"
                                            >
                                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                                                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                    {feature}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className={`flex items-center space-x-2 font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                                    >
                                        <span>Learn More</span>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </motion.button>
                                </div>

                                {/* Hover Shine Effect */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                                        backgroundSize: '200% 200%',
                                    }}
                                    animate={{
                                        backgroundPosition: ['0% 0%', '100% 100%'],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services