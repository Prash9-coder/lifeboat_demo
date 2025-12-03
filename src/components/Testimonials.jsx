import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const testimonials = [
        {
            name: 'Dayanand Pasunuri',
            role: 'Founder',
            company: 'JAMSA ENTERTAINMENT PVT LTD',
            project: 'Dhuniya News App',
            feedback: 'Lifeboat Technologies brought our vision of Dhuniya to life with exceptional expertise. The news app they developed has transformed how millions of Indians consume news. Their understanding of personalization and multilingual support was outstanding. Within months, we reached 50K+ downloads!',
            rating: 5,
            color: '#3234a2',
            stats: {
                downloads: '50K+',
                users: '15K+ Daily',
                languages: '5+'
            }
        },
        {
            name: 'Dr. Paranjyothi JS',
            role: 'Founder',
            company: 'Paranpara Educational Policy Pvt LTD',
            project: 'SchoolFirst Platform',
            feedback: 'The SchoolFirst ecosystem developed by Lifeboat Technologies has revolutionized how we manage education. From attendance to fee management, everything is streamlined. The platform now serves 500+ schools and 100K+ students. Their technical expertise and dedication are truly commendable!',
            rating: 5,
            color: '#32a162',
            stats: {
                schools: '500+',
                students: '100K+',
                satisfaction: '98%'
            }
        },
        {
            name: 'Mohammed Muskaan',
            role: 'Partner',
            company: "Ishu's Store",
            project: 'E-Commerce App',
            feedback: "Lifeboat Technologies created a beautiful e-commerce platform for Ishu's Store that perfectly represents our modest fashion brand. The app's elegant design, seamless checkout, and personalized recommendations have helped us reach customers across 15+ countries. Our sales have grown exponentially!",
            rating: 5,
            color: '#3234a2',
            stats: {
                countries: '15+',
                customers: '25K+',
                rating: '4.9/5'
            }
        },
        {
            name: 'Sruthan Gundeboina',
            role: 'Founder',
            company: 'SRUTHAN GLOBAL PRIVATE LIMITED',
            project: 'SRU Lifestyle App',
            feedback: 'The SRU Clothing & Cosmetics app exceeded all our expectations! Lifeboat Technologies understood our vision of combining fashion and beauty in one platform. The dual-category shopping experience they created is unique and our customers love it. Downloads crossed 100K within the first year!',
            rating: 5,
            color: '#32a162',
            stats: {
                downloads: '100K+',
                products: '10K+',
                growth: '+200%'
            }
        },
        {
            name: 'Supraja',
            role: 'Partner',
            company: 'ISHAA TRENDS',
            project: 'Kids Fashion E-Commerce',
            feedback: "Ishaa Trends needed a vibrant platform for kids' clothing, and Lifeboat Technologies delivered exactly that! The smart size guide feature has been a game-changer - parents love it! The playful design and easy navigation have made shopping a delightful experience for our customers.",
            rating: 5,
            color: '#3234a2',
            stats: {
                parents: '15K+',
                accuracy: '95%',
                returns: '<5%'
            }
        },
        {
            name: 'Aruna Jannu',
            role: 'Founder',
            company: 'FAMILIFIRST',
            project: 'Family App',
            feedback: 'FamiliFirst was our dream - a private space for families to connect. Lifeboat Technologies made it a reality with exceptional attention to privacy and user experience. The shared calendars, event planning, and edutainment features have brought families closer. Over 50K families now use our app!',
            rating: 5,
            color: '#32a162',
            stats: {
                families: '50K+',
                members: '200K+',
                rating: '4.9/5'
            }
        }
    ]

    const nextTestimonial = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    const goToTestimonial = (index) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            nextTestimonial()
        }, 5000)

        return () => clearInterval(interval)
    }, [currentIndex, isAutoPlaying])

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.8,
        }),
    }

    // Get initials from name (first letter of first and last name)
    const getInitials = (name) => {
        const names = name.split(' ')
        if (names.length >= 2) {
            return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase()
        }
        return name.charAt(0).toUpperCase()
    }

    return (
        <section
            id="testimonials"
            className="py-24 relative overflow-hidden bg-white"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#3234a2]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#32a162]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
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
                        💬 Client Testimonials
                    </motion.span>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 font-display text-gray-900">
                        What Our <span className="bg-gradient-to-r from-[#3234a2] to-[#32a162] bg-clip-text text-transparent">Clients Say</span>
                    </h2>

                    <p className="text-xl max-w-2xl mx-auto text-gray-600">
                        Real feedback from real clients who trust us with their digital transformation
                    </p>
                </motion.div>

                {/* Main Testimonial Slider */}
                <div className="relative max-w-6xl mx-auto mb-12">
                    <div className="relative h-[650px] md:h-[500px]">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 },
                                    scale: { duration: 0.3 }
                                }}
                                className="absolute w-full"
                            >
                                <div className="p-8 md:p-12 rounded-3xl bg-white border-2 border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500"
                                    style={{ borderColor: `${testimonials[currentIndex].color}20` }}>

                                    {/* Quote Icon */}
                                    <motion.div
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute -top-6 left-8 w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                                        style={{ backgroundColor: testimonials[currentIndex].color }}
                                    >
                                        <FaQuoteLeft className="text-2xl text-white" />
                                    </motion.div>

                                    {/* Project Badge */}
                                    <div className="absolute top-8 right-8">
                                        <span
                                            className="px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg"
                                            style={{ backgroundColor: testimonials[currentIndex].color }}
                                        >
                                            🚀 {testimonials[currentIndex].project}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                                        {/* Left - Client Info */}
                                        <div className="md:col-span-1 text-center md:text-left">
                                            {/* Avatar with Initials */}
                                            <div
                                                className="inline-block p-1 rounded-2xl mb-4 border-2"
                                                style={{ borderColor: testimonials[currentIndex].color }}
                                            >
                                                <motion.div
                                                    className="w-28 h-28 md:w-32 md:h-32 rounded-2xl flex items-center justify-center text-4xl md:text-5xl font-black text-white shadow-lg"
                                                    style={{
                                                        background: `linear-gradient(135deg, ${testimonials[currentIndex].color}, ${testimonials[currentIndex].color === '#3234a2' ? '#32a162' : '#3234a2'})`
                                                    }}
                                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                                >
                                                    {getInitials(testimonials[currentIndex].name)}
                                                </motion.div>
                                            </div>

                                            <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">
                                                {testimonials[currentIndex].name}
                                            </h3>

                                            <p
                                                className="text-lg font-semibold mb-1"
                                                style={{ color: testimonials[currentIndex].color }}
                                            >
                                                {testimonials[currentIndex].role}
                                            </p>

                                            <p className="text-sm mb-4 text-gray-600 font-medium">
                                                {testimonials[currentIndex].company}
                                            </p>

                                            {/* Star Rating */}
                                            <div className="flex justify-center md:justify-start gap-1 mb-4">
                                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: i * 0.1 }}
                                                    >
                                                        <FaStar className="text-yellow-500 text-xl" />
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Stats */}
                                            <div className="space-y-2">
                                                {Object.entries(testimonials[currentIndex].stats).map(([key, value], idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className="flex justify-between items-center p-2 rounded-lg bg-gray-50 border border-gray-200"
                                                    >
                                                        <span className="text-sm capitalize text-gray-600">
                                                            {key}:
                                                        </span>
                                                        <span
                                                            className="font-bold"
                                                            style={{ color: testimonials[currentIndex].color }}
                                                        >
                                                            {value}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right - Feedback */}
                                        <div className="md:col-span-2 flex flex-col justify-center">
                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 }}
                                                className="text-lg md:text-xl lg:text-2xl italic leading-relaxed text-gray-700"
                                            >
                                                "{testimonials[currentIndex].feedback}"
                                            </motion.p>

                                            {/* Decorative Line */}
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ delay: 0.4, duration: 0.5 }}
                                                className="h-1 w-24 rounded-full mt-6"
                                                style={{
                                                    background: `linear-gradient(to right, ${testimonials[currentIndex].color}, transparent)`,
                                                    transformOrigin: 'left'
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevTestimonial}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-gray-900 shadow-lg flex items-center justify-center hover:shadow-xl transition-all border border-gray-200 hover:border-[#3234a2]"
                        >
                            <FaChevronLeft className="text-lg md:text-xl" />
                        </motion.button>

                        {/* Dot Indicators */}
                        <div className="flex gap-2">
                            {testimonials.map((testimonial, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => goToTestimonial(index)}
                                    className={`transition-all duration-300 rounded-full ${index === currentIndex
                                        ? 'w-10 md:w-12 h-3'
                                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    style={{
                                        backgroundColor: index === currentIndex ? testimonial.color : ''
                                    }}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextTestimonial}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-gray-900 shadow-lg flex items-center justify-center hover:shadow-xl transition-all border border-gray-200 hover:border-[#3234a2]"
                        >
                            <FaChevronRight className="text-lg md:text-xl" />
                        </motion.button>
                    </div>

                    {/* Auto-play indicator */}
                    <div className="flex justify-center mt-4">
                        <span className={`text-xs ${isAutoPlaying ? 'text-[#32a162]' : 'text-gray-400'}`}>
                            {isAutoPlaying ? '● Auto-playing' : '○ Paused'}
                        </span>
                    </div>
                </div>

                {/* Client Logos/Badges */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <p className="text-center text-gray-500 text-sm mb-6">Trusted by leading businesses</p>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                onClick={() => goToTestimonial(index)}
                                className={`px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 ${currentIndex === index
                                    ? 'bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                <span className="text-sm font-semibold whitespace-nowrap">
                                    {testimonial.company}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { label: 'Happy Clients', value: '50+', icon: '😊' },
                        { label: 'Projects Delivered', value: '100+', icon: '🚀' },
                        { label: 'Client Retention', value: '95%', icon: '💎' },
                        { label: 'Average Rating', value: '4.9/5', icon: '⭐' }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#3234a2]/30 hover:shadow-lg transition-all"
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#3234a2] to-[#32a162] bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials