// Testimonials.jsx - UPDATED (No Gradients)
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CEO, TechStart Inc.',
            company: 'TechStart Inc.',
            image: 'https://i.pravatar.cc/400?img=44',
            feedback: 'Lifeboat Technologies transformed our vision into reality with exceptional expertise and dedication. The team delivered beyond our expectations, creating a scalable platform that has driven 250% growth in just 6 months!',
            rating: 5,
            project: 'SaaS Platform',
            color: '#3234a2',
            stats: {
                roi: '+250%',
                timeline: '3 months',
                satisfaction: '100%'
            }
        },
        {
            name: 'Michael Chen',
            role: 'CTO, DataFlow Systems',
            company: 'DataFlow Systems',
            image: 'https://i.pravatar.cc/400?img=51',
            feedback: 'Outstanding work! The development process was smooth, transparent, and the final product exceeded all our requirements. Their technical expertise in handling complex data pipelines is simply unmatched.',
            rating: 5,
            project: 'Analytics Dashboard',
            color: '#32a162',
            stats: {
                performance: '+180%',
                users: '500K+',
                uptime: '99.9%'
            }
        },
        {
            name: 'Emma Williams',
            role: 'Product Manager, CloudNine',
            company: 'CloudNine',
            image: 'https://i.pravatar.cc/400?img=45',
            feedback: 'Professional, responsive, and incredibly talented. Lifeboat Technologies helped us scale our platform to millions of users seamlessly. Their DevOps expertise saved us countless hours and resources.',
            rating: 5,
            project: 'Cloud Infrastructure',
            color: '#3234a2',
            stats: {
                scalability: '10M users',
                cost: '-40%',
                speed: '+300%'
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

    return (
        <section
            id="testimonials"
            className="py-24 relative overflow-hidden bg-white"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gray-100 text-gray-700 border border-gray-200">
                        💬 Testimonials
                    </span>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 font-display text-gray-900">
                        What Our <span style={{ color: '#3234a2' }}>Clients Say</span>
                    </h2>

                    <p className="text-xl max-w-2xl mx-auto text-gray-600">
                        Real feedback from real clients who trust us with their digital transformation
                    </p>
                </motion.div>

                {/* Main Testimonial Slider */}
                <div className="relative max-w-6xl mx-auto mb-12">
                    <div className="relative h-[600px] md:h-[500px]">
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
                                <div className="p-8 md:p-12 rounded-3xl bg-white border-2 border-gray-200 shadow-2xl hover:border-[#3234a2] transition-all duration-500">

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
                                        <span className="px-4 py-2 rounded-full text-sm font-bold bg-white text-gray-700 shadow-lg border border-gray-200">
                                            🚀 {testimonials[currentIndex].project}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                                        {/* Left - Client Info */}
                                        <div className="md:col-span-1 text-center md:text-left">
                                            {/* Avatar with Border */}
                                            <div className="inline-block p-1 rounded-2xl mb-4 border-2"
                                                style={{ borderColor: testimonials[currentIndex].color }}>
                                                <motion.img
                                                    src={testimonials[currentIndex].image}
                                                    alt={testimonials[currentIndex].name}
                                                    className="w-32 h-32 rounded-2xl object-cover"
                                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                                />
                                            </div>

                                            <h3 className="text-2xl font-bold mb-2 text-gray-900">
                                                {testimonials[currentIndex].name}
                                            </h3>

                                            <p className="text-lg font-semibold mb-1"
                                                style={{ color: testimonials[currentIndex].color }}>
                                                {testimonials[currentIndex].role}
                                            </p>

                                            <p className="text-sm mb-4 text-gray-600">
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
                                                        <span className="font-bold" style={{ color: testimonials[currentIndex].color }}>
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
                                                className="text-xl md:text-2xl italic leading-relaxed text-gray-700"
                                            >
                                                "{testimonials[currentIndex].feedback}"
                                            </motion.p>
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
                            className="w-14 h-14 rounded-full bg-white text-gray-900 shadow-lg flex items-center justify-center hover:shadow-xl transition-all border border-gray-200"
                        >
                            <FaChevronLeft className="text-xl" />
                        </motion.button>

                        {/* Dot Indicators */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => goToTestimonial(index)}
                                    className={`transition-all duration-100 rounded-full ${index === currentIndex
                                        ? `w-12 h-3` : `w-3 h-3 bg-gray-300`
                                        }`}
                                    style={{ backgroundColor: index === currentIndex ? testimonials[currentIndex].color : '' }}
                                />
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextTestimonial}
                            className="w-14 h-14 rounded-full bg-white text-gray-900 shadow-lg flex items-center justify-center hover:shadow-xl transition-all border border-gray-200"
                        >
                            <FaChevronRight className="text-xl" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials