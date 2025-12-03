import { motion } from 'framer-motion'
import { FaRocket, FaEye, FaHeart, FaTrophy } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const About = () => {
    const values = [
        {
            icon: <FaRocket className="text-4xl" />,
            title: 'Our Mission',
            description: 'To deliver cutting-edge software solutions that drive business growth and digital transformation across industries.',
            color: 'from-[#3234a2] to-[#32a162]',
            stats: '500+ Projects Delivered'
        },
        {
            icon: <FaEye className="text-4xl" />,
            title: 'Our Vision',
            description: 'To be the global leader in transformative technology solutions, empowering businesses to thrive in the digital era.',
            color: 'from-[#3234a2] to-cyan-500',
            stats: '15+ Countries Served'
        },
        {
            icon: <FaHeart className="text-4xl" />,
            title: 'Our Values',
            description: 'Excellence, Innovation, Integrity, and Customer Success form the foundation of everything we do.',
            color: 'from-red-500 to-[#32a162]',
            stats: '98% Client Satisfaction'
        },
    ]

    const achievements = [
        { number: '10+', label: 'Years Experience', icon: '📅' },
        { number: '50+', label: 'Team Members', icon: '👥' },
        { number: '200+', label: 'Happy Clients', icon: '😊' },
        { number: '30+', label: 'Industry Awards', icon: '🏆' },
    ]

    return (
        <section
            id="about"
            className="py-24 relative overflow-hidden bg-white"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(at 40% 20%, rgba(50, 52, 162, 0.1) 0px, transparent 50%),
                        radial-gradient(at 80% 0%, rgba(50, 161, 98, 0.1) 0px, transparent 50%),
                        radial-gradient(at 0% 50%, rgba(50, 52, 162, 0.1) 0px, transparent 50%)`
                    }}
                />
            </div>

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
                        className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-[#3234a2]/10 text-[#3234a2] border border-[#3234a2]/20"
                    >
                        🚀 About Us
                    </motion.span>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 font-display text-gray-900">
                        Building the <span className="bg-gradient-to-r from-[#3234a2] to-[#32a162] bg-clip-text text-transparent">Future</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                            Transforming Ideas into Digital Reality
                        </h3>

                        <p className="text-lg mb-6 leading-relaxed text-gray-600">
                            At <span className="font-bold bg-gradient-to-r from-[#3234a2] to-[#32a162] bg-clip-text text-transparent">Lifeboat Technologies</span>, we're passionate about crafting innovative software solutions that empower businesses to thrive in the digital age. Our team of expert developers, designers, and strategists work collaboratively to deliver exceptional results.
                        </p>

                        <p className="text-lg mb-8 leading-relaxed text-gray-600">
                            With over a decade of experience and hundreds of successful projects, we've established ourselves as trusted technology partners for businesses worldwide.
                        </p>

                        {/* Achievements Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {achievements.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="p-4 rounded-xl text-center bg-gray-50 border-2 border-transparent hover:border-[#3234a2] transition-all duration-300"
                                >
                                    <div className="text-3xl mb-2">{item.icon}</div>
                                    <div className="text-3xl font-black bg-gradient-to-r from-[#3234a2] to-[#32a162] bg-clip-text text-transparent mb-1">
                                        {item.number}
                                    </div>
                                    <div className="text-sm font-medium text-gray-600">
                                        {item.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons - NOW WORKING */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/careers">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white rounded-xl font-semibold shadow-lg w-full sm:w-auto"
                                >
                                    Join Our Team 🚀
                                </motion.button>
                            </Link>
                            <Link to="/our-story">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 rounded-xl font-semibold border-2 border-gray-300 text-gray-900 hover:bg-gray-100 w-full sm:w-auto"
                                >
                                    Our Story 📖
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right - Image with 3D Effect */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden group">
                            {/* Main Image */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                className="aspect-square rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop&q=80"
                                    alt="Team Collaboration"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#3234a2]/40 to-[#32a162]/40 group-hover:from-[#3234a2]/60 group-hover:to-[#32a162]/60 transition-all duration-500" />
                            </motion.div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, type: 'spring' }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="absolute -bottom-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-2xl"
                            >
                                <div className="text-center">
                                    <FaTrophy className="text-5xl text-white mx-auto mb-2" />
                                    <div className="text-2xl font-black text-white">Award</div>
                                    <div className="text-sm text-white/90">Winner 2024</div>
                                </div>
                            </motion.div>

                            {/* Decorative Circles */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-10 -left-10 w-32 h-32 bg-[#3234a2] rounded-full opacity-20 blur-2xl"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#32a162] rounded-full opacity-20 blur-2xl"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Mission, Vision, Values Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group"
                        >
                            <div className="h-full p-8 rounded-2xl bg-gray-50 border-2 border-transparent hover:border-[#3234a2] transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden">

                                {/* Background Gradient */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                />

                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6 relative z-10`}
                                >
                                    {value.icon}
                                </motion.div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold mb-4 relative z-10 text-gray-900">
                                    {value.title}
                                </h3>

                                <p className="mb-6 relative z-10 leading-relaxed text-gray-600">
                                    {value.description}
                                </p>

                                {/* Stats Badge */}
                                <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold relative z-10 bg-white text-[#3234a2]">
                                    ✨ {value.stats}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About