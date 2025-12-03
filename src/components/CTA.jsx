import { motion } from 'framer-motion'
import { FaRocket, FaCalendar, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CTA = () => {
    const features = [
        { icon: '⚡', text: 'Fast Delivery' },
        { icon: '💎', text: 'Premium Quality' },
        { icon: '🔒', text: 'Secure & Safe' },
        { icon: '24/7', text: 'Support' },
    ]

    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-1/4 w-96 h-96 bg-[#3234a2] rounded-full opacity-20 blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#32a162] rounded-full opacity-20 blur-3xl"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Main CTA Card */}
                    <div className="relative p-12 md:p-16 rounded-3xl overflow-hidden bg-gradient-to-br from-[#3234a2] via-[#32a162] to-[#3234a2] shadow-2xl">
                        {/* Animated Grid Background */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                                backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                                backgroundSize: '50px 50px'
                            }} />
                        </div>

                        {/* Floating Particles */}
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-white rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -30, 0],
                                    opacity: [0.2, 0.8, 0.2],
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        ))}

                        <div className="relative z-10 text-center">
                            {/* Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: 'spring', stiffness: 200 }}
                                className="inline-block mb-6"
                            >
                                <span className="px-6 py-2 bg-white/20 backdrop-blur-xl rounded-full text-white text-sm font-bold border border-white/30">
                                    🎉 Limited Time Offer - 20% Off First Project
                                </span>
                            </motion.div>

                            {/* Main Headline */}
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight font-display"
                            >
                                Ready to Build Something
                                <br />
                                <span className="text-yellow-300">Amazing?</span>
                            </motion.h2>

                            {/* Subheadline */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed"
                            >
                                Let's transform your vision into reality. Get in touch with our team today for a
                                <span className="font-bold"> free consultation</span> and project quote.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                            >
                                <Link to="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group px-10 py-5 bg-white text-[#3234a2] rounded-2xl font-bold text-lg shadow-2xl flex items-center gap-3 hover:shadow-white/50 transition-all"
                                    >
                                        <FaRocket className="group-hover:rotate-12 transition-transform" />
                                        Start Your Project
                                        <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </motion.button>
                                </Link>

                                <Link to="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-10 py-5 bg-white/10 backdrop-blur-xl text-white border-2 border-white/30 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-3"
                                    >
                                        <FaCalendar />
                                        Schedule a Call
                                    </motion.button>
                                </Link>
                            </motion.div>

                            {/* Features */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-wrap justify-center gap-6"
                            >
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1 + index * 0.1, type: 'spring' }}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20"
                                    >
                                        <span className="text-2xl">{feature.icon}</span>
                                        <span className="text-white font-semibold">{feature.text}</span>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Trust Indicators */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1.2 }}
                                className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-white/80"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full bg-white/20 border-2 border-white flex items-center justify-center">
                                                <span className="text-xs">😊</span>
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-sm font-semibold">200+ Happy Clients</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">⭐⭐⭐⭐⭐</span>
                                    <span className="text-sm font-semibold">4.9/5 Rating</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">🏆</span>
                                    <span className="text-sm font-semibold">30+ Awards</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Corner Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />
                    </div>
                </motion.div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
                >
                    {[
                        { number: '500+', label: 'Projects Completed', icon: '🎯' },
                        { number: '99.9%', label: 'Success Rate', icon: '✅' },
                        { number: '24/7', label: 'Support Available', icon: '💬' },
                        { number: '< 48h', label: 'Response Time', icon: '⚡' },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="p-6 rounded-2xl text-center bg-gray-50 shadow-lg"
                        >
                            <div className="text-4xl mb-2">{stat.icon}</div>
                            <div className="text-3xl font-black gradient-text mb-1">{stat.number}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default CTA