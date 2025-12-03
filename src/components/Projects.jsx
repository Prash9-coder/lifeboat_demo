import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
    const [filter, setFilter] = useState('all')
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const navigate = useNavigate()

    const categories = ['all', 'web', 'mobile', 'ai']

    const projects = [
        {
            id: 'dhuniya-news',
            title: 'Dhuniya: Smart, Personalized News App',
            category: 'mobile',
            description: 'A modern news platform delivering real-time, reliable, and hyper-personalized content to users across India with intelligent categorization, multilingual support, and a clean, intuitive UI.',
            image: '/assets/Dhuniya.jpeg',
            tags: ['Flutter', 'Firebase', 'News API', 'AI Recommendations', 'Multilingual'],
            gradient: 'from-[#3234a2] to-cyan-500',
            link: 'https://play.google.com/store/apps/details?id=com.dhuniya.news.business.listings.classifieds.ott&hl=en_IN',
            github: '',
            metrics: {
                'downloads': '50K+',
                'daily users': '15K+',
                'languages': '5+'
            }
        },
        {
            id: 'schoolfirst',
            title: 'SchoolFirst: All-in-One School Ecosystem',
            category: 'mobile',
            description: 'A comprehensive digital solution that streamlines communication and operations for schools, parents, teachers, and students with centralized attendance, homework, fee management, and academic progress tracking.',
            image: '/assets/SF.png',
            tags: ['Flutter', 'Python', 'FastAPI', 'PostgreSQL', 'Firebase'],
            gradient: 'from-yellow-500 to-orange-500',
            link: 'https://www.schoolfirst.ai/',
            github: '',
            metrics: {
                'schools': '500+',
                'students': '100K+',
                'satisfaction': '98%'
            }
        },
        {
            id: 'familifirst',
            title: 'FamiliFirst: Private, Connected Family App',
            category: 'mobile',
            description: 'A secure family management and communication app designed to help families stay connected, organized, and informed with shared calendars, event planning, reminders, and edutainment features.',
            image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop',
            tags: ['React Native', 'Firebase', 'TypeScript', 'Socket.io', 'E2E Encryption'],
            gradient: 'from-[#32a162] to-teal-500',
            link: '#',
            github: '',
            metrics: {
                'families': '50K+',
                'members': '200K+',
                'rating': '4.9/5'
            }
        },
        {
            id: 'ishu-store',
            title: "Ishu's Store: Digital Modest Fashion",
            category: 'mobile',
            description: 'An elegant e-commerce platform for a modest fashion brand specializing in hijabs, abayas, and contemporary modest wear with curated collections, detailed product visuals, and personalized recommendations.',
            image: '/assets/Ishu store.jpg',
            tags: ['React Native', 'Firebase', 'TypeScript', 'Stripe', 'Node.js'],
            gradient: 'from-[#32a162] to-teal-500',
            link: 'https://ishustore.com/',
            github: '',
            metrics: {
                'products': '5K+',
                'customers': '25K+',
                'countries': '15+'
            }
        },
        {
            id: 'ishaa-trends',
            title: "Ishaa Trends: Kids' Clothing Brand",
            category: 'web',
            description: 'A vibrant e-commerce platform for children\'s fashion showcasing trendy, comfortable, and affordable kids\' clothing with smart size guides, fast checkout, and curated collections for modern families.',
            image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=800&h=600&fit=crop',
            tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
            gradient: 'from-pink-500 to-purple-500',
            link: '#',
            github: '',
            metrics: {
                'products': '3K+',
                'parents': '15K+',
                'size accuracy': '95%'
            }
        },
        {
            id: 'sru-clothing',
            title: 'SRU: Clothing & Cosmetics Lifestyle App',
            category: 'mobile',
            description: 'A stylish dual-category e-commerce app offering a curated blend of trend-driven fashion apparel and premium cosmetics with personalized recommendations and an intuitive browsing interface.',
            image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop&q=80',
            tags: ['Angular', 'Ionic', 'Node.js', 'MongoDB', 'ML Kit'],
            gradient: 'from-[#3234a2] to-[#32a162]',
            link: '#',
            github: '',
            metrics: {
                'downloads': '100K+',
                'products': '10K+',
                'rating': '4.7/5'
            }
        },
    ]

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category.toLowerCase() === filter)

    const handleViewAllProjects = () => {
        navigate('/projects')
    }

    const handleViewProject = (projectId) => {
        navigate(`/projects/${projectId}`)
    }

    return (
        <section
            id="projects"
            className="py-24 relative overflow-hidden bg-gray-50"
        >
            {/* Animated Background */}
            <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
                        style={{
                            background: `linear-gradient(45deg, ${['#3234a2', '#32a162', '#3234a2', '#32a162', '#3234a2'][i]}, transparent)`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -100, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 20 + i * 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <motion.span
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-[#3234a2]/10 text-[#3234a2] border border-[#3234a2]/20"
                    >
                        💼 Our Work
                    </motion.span>

                    <h2 className="text-4xl md:text-6xl font-black mb-6 font-display text-gray-900">
                        Featured <span className="bg-gradient-to-r from-[#3234a2] to-[#32a162] bg-clip-text text-transparent">Projects</span>
                    </h2>

                    <p className="text-xl max-w-2xl mx-auto mb-8 text-gray-600">
                        Showcasing our latest work and success stories across industries
                    </p>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-2 rounded-xl font-semibold capitalize transition-all duration-300 ${filter === category
                                    ? 'bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                className="group cursor-pointer"
                                onClick={() => handleViewProject(project.id)}
                            >
                                <div className="h-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500 card-3d">

                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
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
                                            {project.github && project.github !== '' && project.github !== '#' && (
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

                                        {/* Category Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur-sm text-gray-900 capitalize">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#3234a2] transition-colors line-clamp-2">
                                            {project.title}
                                        </h3>

                                        <p className="mb-4 line-clamp-2 text-gray-600 text-sm">
                                            {project.description}
                                        </p>

                                        {/* Metrics */}
                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                            {Object.entries(project.metrics).slice(0, 3).map(([key, value]) => (
                                                <div key={key} className="text-center p-2 rounded-lg bg-gray-50">
                                                    <div className={`text-sm font-black bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                                                        {value}
                                                    </div>
                                                    <div className="text-xs capitalize text-gray-600 truncate">
                                                        {key}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.slice(0, 3).map((tag, tagIndex) => (
                                                <motion.span
                                                    key={tagIndex}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: tagIndex * 0.05 }}
                                                    className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700"
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-500">
                                                    +{project.tags.length - 3}
                                                </span>
                                            )}
                                        </div>

                                        {/* CTA */}
                                        <motion.button
                                            whileHover={{ x: 5 }}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                handleViewProject(project.id)
                                            }}
                                            className={`flex items-center space-x-2 font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group/btn`}
                                        >
                                            <span>View Project</span>
                                            <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform text-[#3234a2]" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All Button with Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleViewAllProjects}
                        className="px-10 py-4 bg-gradient-to-r from-[#3234a2] to-[#32a162] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        View All Projects →
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects