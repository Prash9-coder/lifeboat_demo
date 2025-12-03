// src/pages/AllProjects.jsx
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    FaExternalLinkAlt,
    FaGithub,
    FaArrowRight,
    FaSearch,
    FaArrowLeft,
    FaTimes,
    FaFilter
} from 'react-icons/fa'
import {
    HiOutlineDesktopComputer,
    HiOutlineDeviceMobile,
    HiOutlineChip,
    HiOutlineCollection
} from 'react-icons/hi'

const AllProjects = () => {
    const navigate = useNavigate()
    const [filter, setFilter] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [showMobileFilters, setShowMobileFilters] = useState(false)

    const categories = [
        { id: 'all', name: 'All Projects', icon: HiOutlineCollection, count: 10 },
        { id: 'web', name: 'Web Apps', icon: HiOutlineDesktopComputer, count: 3 },
        { id: 'mobile', name: 'Mobile Apps', icon: HiOutlineDeviceMobile, count: 5 },
        { id: 'ai', name: 'AI / ML', icon: HiOutlineChip, count: 2 },
    ]

    // 📦 All Projects Data
    const allProjects = [
        {
            id: 'dhuniya-news',
            title: 'Dhuniya: Personalized News Platform',
            category: 'mobile',
            description: 'Intelligent news aggregator app providing real-time, curated news with personalized recommendations, multilingual support, and clean interface for Indian readers.',
            fullDescription: 'A smart news aggregation platform that uses AI to personalize content based on user preferences. Supports multiple Indian languages and provides offline reading capabilities.',
            image: '/assets/Dhuniya.jpeg',
            tags: ['Flutter', 'Firebase', 'News API', 'Recommendation Engine', 'Offline Reading'],
            gradient: 'from-[#3234a2] to-cyan-500',
            link: 'https://play.google.com/store/apps/details?id=com.dhuniya.news',
            github: '#',
            metrics: {
                'app downloads': '50K+',
                'daily active users': '15K+',
                'accuracy': '92%',
            },
            year: '2024',
            client: 'Dhuniya Media',
            featured: true
        },
        {
            id: 'schoolfirst',
            title: 'SchoolFirst: All-in-One School Ecosystem',
            category: 'mobile',
            description: 'Complete school management system with AI-powered features for students, teachers, and parents.',
            fullDescription: 'An integrated school management ecosystem that connects students, teachers, and parents with AI-powered learning assistance.',
            image: '/assets/SF.png',
            tags: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'NLP', 'Flutter'],
            gradient: 'from-yellow-500 to-orange-500',
            link: 'https://www.schoolfirst.ai/',
            github: '#',
            metrics: {
                'schools': '500+',
                'students': '100K+',
                'satisfaction': '98%'
            },
            year: '2023',
            client: 'SchoolFirst EdTech',
            featured: true
        },
        {
            id: 'ishu-store',
            title: "Ishu's Store: Digital Modest Fashion",
            category: 'mobile',
            description: 'E-commerce platform for modest fashion with AR try-on features and personalized recommendations.',
            fullDescription: 'A modern e-commerce application focused on modest fashion with augmented reality try-on and AI-powered size recommendations.',
            image: '/assets/Ishu store.jpg',
            tags: ['React Native', 'Firebase', 'TypeScript', 'AR Kit', 'Stripe'],
            gradient: 'from-[#32a162] to-teal-500',
            link: 'https://ishustore.com/',
            github: '#',
            metrics: {
                'products': '5K+',
                'customers': '25K+',
                'rating': '4.9/5'
            },
            year: '2024',
            client: "Ishu's Fashion",
            featured: true
        },
        {
            id: 'sru-clothing',
            title: 'SRU Clothing & Cosmetics App',
            category: 'mobile',
            description: 'Lifestyle app for clothing and cosmetics with virtual try-on and beauty recommendations.',
            fullDescription: 'A comprehensive lifestyle application combining fashion and beauty with virtual try-on capabilities.',
            image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop&q=80',
            tags: ['Angular', 'Node.js', 'MongoDB', 'ML Kit', 'IoT'],
            gradient: 'from-[#3234a2] to-[#32a162]',
            link: '#',
            github: '#',
            metrics: {
                'downloads': '100K+',
                'products': '10K+',
                'response': '<50ms'
            },
            year: '2023',
            client: 'SRU Lifestyle',
            featured: false
        },
        {
            id: 'ishaa-trends',
            title: 'Ishaa Trends: Kids Clothing Brand',
            category: 'web',
            description: 'E-commerce platform for kids clothing with size prediction and parental controls.',
            fullDescription: 'A dedicated e-commerce platform for children\'s fashion with AI-powered size prediction based on age and growth patterns.',
            image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&q=80',
            tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
            gradient: 'from-[#32a162] to-[#3234a2]',
            link: '#',
            github: '#',
            metrics: {
                'revenue': '$2M+',
                'products': '3K+',
                'parents': '15K+'
            },
            year: '2024',
            client: 'Ishaa Trends',
            featured: false
        },
        {
            id: 'familifirst',
            title: 'FamiliFirst: Private Family App',
            category: 'mobile',
            description: 'Private social network for families with photo sharing, event planning, and video calls.',
            fullDescription: 'A secure, private social network designed exclusively for families with end-to-end encrypted video calls.',
            image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop&q=80',
            tags: ['React Native', 'Firebase', 'TypeScript', 'WebRTC', 'E2E Encryption'],
            gradient: 'from-[#32a162] to-teal-500',
            link: '#',
            github: '#',
            metrics: {
                'families': '50K+',
                'photos shared': '5M+',
                'rating': '4.9/5'
            },
            year: '2024',
            client: 'FamiliFirst Inc',
            featured: true
        },
        {
            id: 'ai-chatbot',
            title: 'Enterprise AI Chatbot',
            category: 'ai',
            description: 'Intelligent chatbot with NLP capabilities for customer support automation.',
            fullDescription: 'An enterprise-grade AI chatbot that handles customer queries with human-like responses and supports multiple languages.',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&q=80',
            tags: ['Python', 'TensorFlow', 'FastAPI', 'Redis', 'NLP', 'GPT'],
            gradient: 'from-purple-500 to-pink-500',
            link: '#',
            github: '#',
            metrics: {
                'accuracy': '95%',
                'languages': '20+',
                'queries/day': '100K+'
            },
            year: '2024',
            client: 'TechCorp Industries',
            featured: true
        },
        {
            id: 'healthcare-ai',
            title: 'HealthAI: Medical Diagnosis Assistant',
            category: 'ai',
            description: 'AI-powered medical diagnosis assistant for healthcare professionals.',
            fullDescription: 'An AI assistant that helps healthcare professionals with preliminary diagnosis suggestions based on symptoms.',
            image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&q=80',
            tags: ['Python', 'PyTorch', 'FastAPI', 'Docker', 'HIPAA Compliant'],
            gradient: 'from-red-500 to-pink-500',
            link: '#',
            github: '#',
            metrics: {
                'accuracy': '92%',
                'doctors': '1K+',
                'diagnoses': '500K+'
            },
            year: '2023',
            client: 'HealthTech Solutions',
            featured: false
        },
        {
            id: 'fintech-dashboard',
            title: 'FinTrack: Financial Dashboard',
            category: 'web',
            description: 'Real-time financial dashboard with analytics and investment tracking.',
            fullDescription: 'A comprehensive financial dashboard for tracking investments and analyzing market trends.',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&q=80',
            tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'WebSocket'],
            gradient: 'from-green-500 to-emerald-500',
            link: '#',
            github: '#',
            metrics: {
                'users': '25K+',
                'transactions': '$100M+',
                'uptime': '99.99%'
            },
            year: '2024',
            client: 'FinTrack Corp',
            featured: false
        },
        {
            id: 'ecommerce-platform',
            title: 'ShopEase: Multi-vendor Marketplace',
            category: 'web',
            description: 'Full-featured multi-vendor e-commerce platform with advanced analytics.',
            fullDescription: 'A scalable multi-vendor marketplace with real-time analytics, inventory management, and AI-powered recommendations.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80',
            tags: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Stripe', 'AWS'],
            gradient: 'from-orange-500 to-red-500',
            link: '#',
            github: '#',
            metrics: {
                'vendors': '500+',
                'products': '50K+',
                'GMV': '$10M+'
            },
            year: '2024',
            client: 'ShopEase Inc',
            featured: true
        }
    ]

    // 🔍 Filter and Search Logic
    const filteredProjects = useMemo(() => {
        return allProjects.filter(project => {
            const matchesFilter = filter === 'all' || project.category === filter
            const matchesSearch =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            return matchesFilter && matchesSearch
        })
    }, [filter, searchQuery])

    // Get category counts
    const getCategoryCount = (categoryId) => {
        if (categoryId === 'all') return allProjects.length
        return allProjects.filter(p => p.category === categoryId).length
    }

    const handleViewProject = (projectId) => {
        navigate(`/projects/${projectId}`)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* 🎨 Animated Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
                        style={{
                            background: `linear-gradient(45deg, ${['#3234a2', '#32a162', '#3234a2', '#32a162', '#3234a2'][i]}, transparent)`,
                            left: `${20 * i}%`,
                            top: `${15 * i}%`,
                        }}
                        animate={{
                            x: [0, 50, 0],
                            y: [0, -50, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 15 + i * 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* 📍 Sticky Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        {/* Back Button */}
                        <motion.button
                            whileHover={{ scale: 1.05, x: -5 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/')}
                            className="flex items-center space-x-2 text-gray-700 hover:text-[#3234a2] transition-colors"
                        >
                            <FaArrowLeft />
                            <span className="font-semibold hidden sm:inline">Back to Home</span>
                        </motion.button>

                        {/* Title */}
                        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#3234a2] to-[#32a162] bg-clip-text text-transparent">
                            All Projects
                        </h1>

                        {/* Mobile Filter Toggle */}
                        <button
                            className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                            onClick={() => setShowMobileFilters(!showMobileFilters)}
                        >
                            {showMobileFilters ? <FaTimes /> : <FaFilter />}
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                {/* 🎯 Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-[#3234a2]/10 text-[#3234a2] border border-[#3234a2]/20"
                    >
                        💼 Portfolio
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                        Our <span className="bg-gradient-to-r from-[#3234a2] to-[#32a162] bg-clip-text text-transparent">Complete</span> Portfolio
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore all our projects across web, mobile, and AI development
                    </p>
                </motion.div>

                {/* 🔍 Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="max-w-2xl mx-auto mb-8"
                >
                    <div className="relative">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search projects by name, description, or technology..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-200 bg-white shadow-lg focus:ring-2 focus:ring-[#3234a2] focus:border-transparent outline-none transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <FaTimes />
                            </button>
                        )}
                    </div>
                </motion.div>

                {/* 🏷️ Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`mb-8 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}
                >
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => {
                            const Icon = category.icon
                            return (
                                <motion.button
                                    key={category.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        setFilter(category.id)
                                        setShowMobileFilters(false)
                                    }}
                                    className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${filter === category.id
                                        ? 'bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white shadow-lg'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 shadow-sm'
                                        }`}
                                >
                                    <Icon className="text-lg" />
                                    <span>{category.name}</span>
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${filter === category.id
                                        ? 'bg-white/20'
                                        : 'bg-gray-100'
                                        }`}>
                                        {getCategoryCount(category.id)}
                                    </span>
                                </motion.button>
                            )
                        })}
                    </div>
                </motion.div>

                {/* 📊 Results Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-6 flex items-center justify-between"
                >
                    <p className="text-gray-600">
                        Showing <span className="font-bold text-[#3234a2]">{filteredProjects.length}</span> projects
                        {searchQuery && <span> for "<span className="font-semibold">{searchQuery}</span>"</span>}
                    </p>
                </motion.div>

                {/* 📦 Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileHover={{ y: -10 }}
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                    className="group cursor-pointer"
                                    onClick={() => handleViewProject(project.id)}
                                >
                                    <div className="h-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500">

                                        {/* Image */}
                                        <div className="relative h-56 overflow-hidden">
                                            <motion.img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                animate={{
                                                    scale: hoveredIndex === index ? 1.1 : 1,
                                                }}
                                                transition={{ duration: 0.6 }}
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />

                                            {/* Overlay Links */}
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                                className="absolute inset-0 flex items-center justify-center gap-4"
                                            >
                                                {project.link && project.link !== '#' && (
                                                    <motion.a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100"
                                                    >
                                                        <FaExternalLinkAlt className="text-gray-900" />
                                                    </motion.a>
                                                )}
                                                {project.github && project.github !== '#' && (
                                                    <motion.a
                                                        href={project.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100"
                                                    >
                                                        <FaGithub className="text-gray-900" />
                                                    </motion.a>
                                                )}
                                            </motion.div>

                                            {/* Badges */}
                                            <div className="absolute top-4 right-4 flex flex-col gap-2">
                                                {project.featured && (
                                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-400 text-yellow-900">
                                                        ⭐ Featured
                                                    </span>
                                                )}
                                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm text-gray-900 capitalize">
                                                    {project.category}
                                                </span>
                                            </div>

                                            {/* Year Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/50 backdrop-blur-sm text-white">
                                                    {project.year}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#3234a2] transition-colors line-clamp-1">
                                                {project.title}
                                            </h3>

                                            <p className="mb-4 text-gray-600 text-sm line-clamp-2">
                                                {project.description}
                                            </p>

                                            {/* Client */}
                                            <p className="text-xs text-gray-500 mb-3">
                                                Client: <span className="font-semibold text-gray-700">{project.client}</span>
                                            </p>

                                            {/* Metrics */}
                                            <div className="grid grid-cols-3 gap-2 mb-4">
                                                {Object.entries(project.metrics).slice(0, 3).map(([key, value]) => (
                                                    <div key={key} className="text-center p-2 rounded-lg bg-gray-50">
                                                        <div className={`text-sm font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                                            {value}
                                                        </div>
                                                        <div className="text-xs capitalize text-gray-500 truncate">
                                                            {key}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {project.tags.slice(0, 4).map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {project.tags.length > 4 && (
                                                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-500">
                                                        +{project.tags.length - 4}
                                                    </span>
                                                )}
                                            </div>

                                            {/* CTA */}
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                className={`flex items-center space-x-2 font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                                            >
                                                <span>View Details</span>
                                                <FaArrowRight className="text-[#3234a2] group-hover:translate-x-1 transition-transform" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            // Empty State
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-20"
                            >
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">No Projects Found</h3>
                                <p className="text-gray-600 mb-6">
                                    Try adjusting your search or filter criteria
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        setFilter('all')
                                        setSearchQuery('')
                                    }}
                                    className="px-6 py-3 bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white rounded-xl font-semibold"
                                >
                                    Clear Filters
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* 📞 CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <div className="bg-gradient-to-r from-[#3234a2] to-[#32a162] rounded-3xl p-8 md:p-12 text-white text-center">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Have a Project in Mind? 🚀
                        </h3>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can bring your ideas to life with cutting-edge technology
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/#contact')}
                                className="px-8 py-4 bg-white text-[#3234a2] rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                            >
                                Start a Conversation →
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/#services')}
                                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors"
                            >
                                View Services
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 mt-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default AllProjects